<?php

namespace App;

use ByteUnits\Metric;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Laravel\Scout\Searchable;
use TeamTNT\TNTSearch\Indexer\TNTIndexer;
use \Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;

/**
 * App\FileManagerFile
 *
 * @property int $id
 * @property int|null $user_id
 * @property int $unique_id
 * @property int $folder_id
 * @property string $thumbnail
 * @property string|null $name
 * @property string|null $basename
 * @property string|null $mimetype
 * @property string $filesize
 * @property string|null $type
 * @property string $user_scope
 * @property string $deleted_at
 * @property string $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\FileManagerFolder|null $folder
 * @property-read string $file_url
 * @property-read \App\FileManagerFolder $parent
 * @property-read \App\Share|null $shared
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\FileManagerFile onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereBasename($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereFilesize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereFolderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereMimetype($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereThumbnail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereUniqueId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\FileManagerFile whereUserScope($value)
 * @method static \Illuminate\Database\Query\Builder|\App\FileManagerFile withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\FileManagerFile withoutTrashed()
 * @mixin \Eloquent
 * @property array|null $metadata
 * @method static \Illuminate\Database\Eloquent\Builder|FileManagerFile sortable($defaultParameters = null)
 * @method static \Illuminate\Database\Eloquent\Builder|FileManagerFile whereMetadata($value)
 */
class FileManagerFile extends Model
{
    use Searchable, SoftDeletes , Sortable;

    public $public_access = null;

    protected $guarded = [
        'id'
    ];

    protected $appends = [
        'file_url'
    ];

    protected $casts = [
        'metadata' => 'array',
    ];

    /**
     * Sortable columns
     *
     * @var string[]
     */
    public $sortable = [
        'name',
        'created_at',
    ];

    public function getNameAttribute() {
        return mb_convert_encoding($this->attributes['name'], 'UTF-8');
    }

    public function getBasenameAttribute() {
        return mb_convert_encoding($this->attributes['basename'], 'UTF-8');
    }

    public function getCreatedAtAttribute()
    {
        return mb_convert_encoding(
            format_date(set_time_by_user_timezone($this->attributes['created_at']), __t('time')), 'UTF-8'
        );
    }

    public function getUpdatedAtAttribute()
    {
        return mb_convert_encoding(
            format_date(set_time_by_user_timezone($this->attributes['updated_at']), __t('time')), 'UTF-8'
        );
    }

    public function getDeletedAtAttribute()
    {
        if (!$this->attributes['deleted_at']) return null;

        return mb_convert_encoding(
            format_date(set_time_by_user_timezone($this->attributes['deleted_at']), __t('time')), 'UTF-8'
        );
    }

    /**
     * Set routes with public access
     *
     * @param $token
     */
    public function setPublicUrl($token)
    {
        $this->public_access = $token;
    }

    /**
     * Format fileSize
     *
     * @return string
     */
    public function getFilesizeAttribute()
    {
        return Metric::bytes($this->attributes['filesize'])->format();
    }

    /**
     * Format thumbnail url
     *
     * @return string
     */
    public function getThumbnailAttribute()
    {
        // Get thumbnail from external storage
        if ($this->attributes['thumbnail'] && is_storage_driver(['s3', 'spaces', 'wasabi', 'backblaze', 'oss'])) {

            return Storage::temporaryUrl('file-manager/' . $this->attributes['thumbnail'], now()->addHour());
        }

        // Get thumbnail from local storage
        if ($this->attributes['thumbnail']) {

            // Thumbnail route
            $route = route('thumbnail', ['name' => $this->attributes['thumbnail']]);

            if ($this->public_access) {
                return $route . '/public/' . $this->public_access;
            }

            return $route;
        }

        return null;
    }

    /**
     * Format file url
     *
     * @return string
     */
    public function getFileUrlAttribute()
    {
        // Get file from external storage
        if (is_storage_driver(['s3', 'spaces', 'wasabi', 'backblaze', 'oss'])) {

            $file_pretty_name = is_storage_driver('backblaze')
                ? Str::snake(mb_strtolower($this->attributes['name']))
                : get_pretty_name($this->attributes['basename'], $this->attributes['name'], $this->attributes['mimetype']);

            $header = [
                "ResponseAcceptRanges"       => "bytes",
                "ResponseContentType"        => $this->attributes['mimetype'],
                "ResponseContentLength"      => $this->attributes['filesize'],
                "ResponseContentRange"       => "bytes 0-600/" . $this->attributes['filesize'],
                'ResponseContentDisposition' => 'attachment; filename=' . $file_pretty_name,
            ];

            return Storage::temporaryUrl('file-manager/' . $this->attributes['basename'], now()->addDay(), $header);
        }

        // Get thumbnail from local storage
        $route = route('file', ['name' => $this->attributes['basename']]);

        if ($this->public_access) {
            return $route . '/public/' . $this->public_access;
        }

        return $route;
    }

    /**
     * Index file
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $name = mb_convert_encoding(
            mb_strtolower($this->name, 'UTF-8'), 'UTF-8'
        );
        $trigram = (new TNTIndexer)->buildTrigrams(implode(', ', [$name]));

        return [
            'id'         => $this->id,
            'name'       => $name,
            'nameNgrams' => (new TNTIndexer)->buildTrigrams(implode(', ', [$trigram])),
        ];
    }

    /**
     * Get parent
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo('App\FileManagerFolder', 'folder_id', 'unique_id');
    }

    /**
     * Get folder
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function folder()
    {
        return $this->hasOne('App\FileManagerFolder', 'unique_id', 'folder_id');
    }

    /**
     * Get sharing attributes
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function shared()
    {
        return $this->hasOne('App\Share', 'item_id', 'unique_id');
    }
}
