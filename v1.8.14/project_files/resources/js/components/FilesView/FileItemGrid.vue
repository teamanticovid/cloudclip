<template>
    <div class="file-wrapper" @mouseup.stop="clickedItem" @dblclick="goToItem" spellcheck="false">
        <!--Grid preview-->
        <div :draggable="canDrag" @dragstart="$emit('dragstart')" @drop="
				drop()
				area = false" @dragleave="dragLeave" @dragover.prevent="dragEnter" class="file-item" :class="{'is-clicked' : isClicked , 'no-clicked' : !isClicked && this.$isMobile(), 'is-dragenter': area }">
            <!--Thumbnail for item-->
            <div class="icon-item">

                <!-- MultiSelecting for the mobile version -->
                <div :class="{'check-select-folder' : this.item.type === 'folder', 'check-select' : this.item.type !== 'folder'}" v-if="multiSelectMode">
                    <div class="select-box" :class="{'select-box-active' : isClicked } ">
                        <CheckIcon v-if="isClicked" class="icon" size="17"/>
                    </div>
                </div>

                <!--If is file or image, then link item-->
                <span v-if="isFile || (isImage && !item.thumbnail)" class="file-icon-text">
                    {{ item.mimetype }}
                </span>

                <!--Folder thumbnail-->
                <FontAwesomeIcon v-if="isFile || (isImage && !item.thumbnail)" class="file-icon" icon="file"/>

                <!--Image thumbnail-->
                <img loading="lazy" v-if="isImage && item.thumbnail" class="image" :src="item.thumbnail" :alt="item.name"/>

                 <!--Else show only folder icon-->
                <FolderIcon v-if="isFolder" :item="item" location="file-item-grid" class="folder"/>
            </div>

            <!--Name-->
            <div class="item-name">
                <!--Name-->
                <b :ref="this.item.unique_id" @input="renameItem" @keydown.delete.stop @click.stop :contenteditable="canEditName" class="name">
                    {{ itemName }}
                </b>

                <div class="item-info">

                    <!--Shared Icon-->
                    <div v-if="$checkPermission('master') && item.shared" class="item-shared">
                        <link-icon size="12" class="shared-icon"></link-icon>
                    </div>

                    <!--Participant owner Icon-->
                    <div v-if="$checkPermission('master') && item.user_scope !== 'master'" class="item-shared">
                        <user-plus-icon size="12" class="shared-icon"></user-plus-icon>
                    </div>

                    <!--Filesize-->
                    <span v-if="! isFolder" class="item-size">{{ item.filesize }}</span>

                    <!--Folder item counts-->
                    <span v-if="isFolder" class="item-length">
                        {{ folderItems == 0 ? $t('folder.empty') : $tc('folder.item_counts', folderItems) }}
				    </span>
                </div>
            </div>

            <span @mousedown.stop="showItemActions" class="show-actions" v-if="$isMobile() && ! multiSelectMode && canShowMobileOptions">
                <FontAwesomeIcon icon="ellipsis-h" class="icon-action"></FontAwesomeIcon>
            </span>
        </div>
    </div>
</template>

<script>
import { LinkIcon, UserPlusIcon, CheckIcon } from 'vue-feather-icons'
import FolderIcon from '@/components/FilesView/FolderIcon'
import { debounce } from 'lodash'
import { mapGetters } from 'vuex'
import { events } from '@/bus'

export default {
    name: 'FileItemGrid',
    props: ['item'],
    components: {
        UserPlusIcon,
        CheckIcon,
        LinkIcon,
        FolderIcon,
    },
    computed: {
        ...mapGetters([
            'FilePreviewType', 'sharedDetail', 'fileInfoDetail', 'data'
        ]),
         folderEmojiOrColor(){

             // If folder have set some color
            if(this.item.icon_color) {
                 this.$nextTick(() => {
                    this.$refs[`folder${this.item.unique_id}`].firstElementChild.style.fill = `${this.item.icon_color}`
                })
                return false
            }
               
            // If folder have set some emoji
            if(this.item.icon_emoji)
                return this.item.icon_emoji

        },
        isClicked() {
            return this.fileInfoDetail.some(element => element.unique_id == this.item.unique_id)
        },
        isFolder() {
            return this.item.type === 'folder'
        },
        isFile() {
            return this.item.type !== 'folder' && this.item.type !== 'image'
        },
        isPdf() {
            return this.item.mimetype === 'pdf'
        },
        isImage() {
            return this.item.type === 'image'
        },
        isVideo() {
            return this.item.type === 'video'
        },
        isAudio() {
            let mimetypes = ['mpeg', 'mp3', 'mp4', 'wan', 'flac']
            return mimetypes.includes(this.item.mimetype) && this.item.type === 'audio'
        },
        canEditName() {
            return !this.$isMobile()
                && !this.$isThisLocation(['trash', 'trash-root'])
                && !this.$checkPermission('visitor')
                && !(this.sharedDetail && this.sharedDetail.type === 'file')
        },
        canShowMobileOptions() {
            return !(this.sharedDetail && this.sharedDetail.type === 'file')
        },
        canDrag() {
            return !this.isDeleted && this.$checkPermission(['master', 'editor'])
        },
        timeStamp() {
            return this.item.deleted_at ? this.$t('item_thumbnail.deleted_at', this.item.deleted_at) : this.item.created_at
        },
        folderItems() {
            return this.item.deleted_at ? this.item.trashed_items : this.item.items
        },
        isDeleted() {
            return this.item.deleted_at ? true : false
        }
    },
    data() {
        return {
            area: false,
            itemName: undefined,
            multiSelectMode: false
        }
    },
    methods: {
        drop() {
            events.$emit('drop')
        },
        showItemActions() {
            // Load file info detail
            this.$store.commit('CLEAR_FILEINFO_DETAIL')
            this.$store.commit('GET_FILEINFO_DETAIL', this.item)

            events.$emit('mobileMenu:show')
        },
        dragEnter() {
            if (this.item.type !== 'folder') return

            this.area = true
        },
        dragLeave() {
            this.area = false
        },
        clickedItem(e) {
            // Disabled right click
            if (e.button === 2) return

            if (!this.$isMobile()) {

                // After click deselect new folder rename input
                document.getSelection().removeAllRanges();
                
                if (e.ctrlKey || e.metaKey && !e.shiftKey) {
                    // Click + Ctrl
                    if (this.fileInfoDetail.some(item => item.unique_id === this.item.unique_id)) {
                        this.$store.commit('REMOVE_ITEM_FILEINFO_DETAIL', this.item)
                    } else {
                        this.$store.commit('GET_FILEINFO_DETAIL', this.item)
                    }
                } else if (e.shiftKey) {
                    // Click + Shift
                    let lastItem = this.data.indexOf(this.fileInfoDetail[this.fileInfoDetail.length - 1])
                    let clickedItem = this.data.indexOf(this.item)

                    // If Click + Shift + Ctrl dont remove already selected items
                    if (!e.ctrlKey && !e.metaKey) {
                        this.$store.commit('CLEAR_FILEINFO_DETAIL')
                    }

                    //Shift selecting from top to bottom
                    if (lastItem < clickedItem) {
                        for (let i = lastItem; i <= clickedItem; i++) {
                            this.$store.commit('GET_FILEINFO_DETAIL', this.data[i])
                        }
                        //Shift selecting from bottom to top
                    } else {
                        for (let i = lastItem; i >= clickedItem; i--) {
                            this.$store.commit('GET_FILEINFO_DETAIL', this.data[i])
                        }
                    }
                } else {
                    // Click
                    this.$store.commit('CLEAR_FILEINFO_DETAIL')
                    this.$store.commit('GET_FILEINFO_DETAIL', this.item)
                }
            }

            if (!this.mobileMultiSelect && this.$isMobile()) {

                if (this.isFolder) {

                    if (this.$isThisLocation('public')) {
                        this.$store.dispatch('browseShared', [{ folder: this.item, back: false, init: false }])
                    } else {
                        this.$store.dispatch('getFolder', [{ folder: this.item, back: false, init: false }])
                    }
                } else {

                    if (this.isImage || this.isVideo || this.isAudio || this.isPdf) {
                        this.$store.commit('LOAD_FILEINFO_DETAIL', this.item)
                        events.$emit('fileFullPreview:show')
                    }
                }
            }

            if (this.multiSelectMode && this.$isMobile()) {
                if (this.fileInfoDetail.some(item => item.unique_id === this.item.unique_id)) {
                    this.$store.commit('REMOVE_ITEM_FILEINFO_DETAIL', this.item)
                } else {
                    this.$store.commit('GET_FILEINFO_DETAIL', this.item)
                }
            }
            // Get target classname
            let itemClass = e.target.className

            if (
                ['name', 'icon', 'file-link', 'file-icon-text'].includes(
                    itemClass
                )
            )
                return
        },
        goToItem() {
            if (this.isImage || this.isVideo || this.isAudio || this.isPdf) {
                events.$emit('fileFullPreview:show')

            } else if (this.isFile || !this.isFolder && !this.isVideo && !this.isAudio && !this.isImage && !this.isPdf) {
                this.$downloadFile(this.item.file_url, this.item.name + '.' + this.item.mimetype)

            } else if (this.isFolder) {

                //Clear selected data after open another folder
                this.$store.commit('CLEAR_FILEINFO_DETAIL')

                if (this.$isThisLocation('public')) {
                    this.$store.dispatch('browseShared', [{ folder: this.item, back: false, init: false }])
                } else {
                    this.$store.dispatch('getFolder', [{ folder: this.item, back: false, init: false }])
                }
            }
        },
        renameItem: debounce(function(e) {

            // Prevent submit empty string
            if (e.target.innerText.trim() === '') return

            this.$store.dispatch('renameItem', {
                unique_id: this.item.unique_id,
                type: this.item.type,
                name: e.target.innerText
            })
        }, 300)
    },
    created() {
        this.itemName = this.item.name

         events.$on('newFolder:focus', (unique_id) => {

            if(this.item.unique_id == unique_id && !this.$isMobile()) {
                this.$refs[unique_id].focus()
                document.execCommand('selectAll')
            }
        })

        events.$on('mobileSelecting:start', () => {
            this.multiSelectMode = true
            this.$store.commit('CLEAR_FILEINFO_DETAIL')
        })

        events.$on('mobileSelecting:stop', () => {
            this.multiSelectMode = false
            this.$store.commit('CLEAR_FILEINFO_DETAIL')
        })
        // Change item name
        events.$on('change:name', (item) => {
            if (this.item.unique_id == item.unique_id) this.itemName = item.name
        })
    }
}
</script>

<style scoped lang="scss">
@import '@assets/vue-file-manager/_variables';
@import '@assets/vue-file-manager/_mixins';

.check-select {
    margin-right: 10px;
    margin-left: 3px;
    position: absolute;
    top: -10px;
    z-index: 5;
    left: 0px;
}

.check-select-folder {
    margin-right: 10px;
    margin-left: 3px;
    position: absolute;
    top: 8px;
    z-index: 5;
    left: 10px;
}

.select-box {
    width: 20px;
    height: 20px;
    background-color: $light_background;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 3px 15px 2px hsla(220, 36%, 16%, 0.05);
}

.select-box-active {
    background-color: $theme;

    .icon {
        stroke: white;
    }
}


.show-actions {
    cursor: pointer;
    padding: 4px 26px;

    .icon-action {
        @include font-size(12);
    }

    path {
        fill: $theme;
    }
}

.file-wrapper {
    user-select: none;
    position: relative;
    text-align: center;
    display: inline-block;
    vertical-align: text-top;
    width: 100%;

    .item-name {
        display: block;
        padding-left: 10px;
        padding-right: 10px;
        line-height: 20px;

        .item-size,
        .item-length {
            @include font-size(11);
            font-weight: 400;
            color: rgba($text, 0.7);
            display: inline-block;
        }

        .item-info {
            display: block;
            line-height: 1;
        }

        .item-shared {
            display: inline-block;

            .label {
                @include font-size(12);
                font-weight: 400;
                color: $theme;
            }

            .shared-icon {
                vertical-align: middle;

                path, circle, line {
                    stroke: $theme;
                }
            }
        }

        .name {
            color: $text;
            @include font-size(14);
            font-weight: 700;
            max-height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;

            &[contenteditable] {
                -webkit-user-select: text;
                user-select: text;
            }

            &[contenteditable='true']:hover {
                text-decoration: underline;
            }

            &.actived {
                max-height: initial;
            }
        }
    }

    &.selected {
        .file-item {
            background: $light_background;
        }
    }

    .file-item {
        border: 2px dashed transparent;
        width: 165px;
        margin: 0 auto;
        cursor: pointer;
        position: relative;
        padding: 15px 0;

        &.is-dragenter {
            border: 2px dashed $theme;
            border-radius: 8px;
        }

        &.no-clicked {
            background: white !important;

            .item-name {
                .name {
                    color: $text !important;
                }
            }
        }

        &:hover,
        &.is-clicked {
            border-radius: 8px;
            background: $light_background;
        }
    }

    .icon-item {
        text-align: center;
        position: relative;
        height: 110px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;


        .file-link {
            display: block;
        }

        .file-icon {
            @include font-size(100);
            margin: 0 auto;

            path {
                fill: #fafafc;
                stroke: #dfe0e8;
                stroke-width: 1;
            }
        }

        .file-icon-text {
            margin: 5px auto 0;
            position: absolute;
            text-align: center;
            left: 0;
            right: 0;
            color: $theme;
            @include font-size(12);
            font-weight: 600;
            user-select: none;
            max-width: 65px;
            max-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .image {
            max-width: 95%;
            object-fit: cover;
            user-select: none;
            height: 110px;
            border-radius: 5px;
            margin: 0 auto;
            pointer-events: none;
        }

        .folder {
            width: 80px;
            height: 80px;
            margin: auto;

            /deep/ .folder-icon {
                @include font-size(80)
            }
        }
    }
}

@media only screen and (max-width: 960px) {

    .file-wrapper {

        .icon-item {
            margin-bottom: 15px;
        }
    }
}

@media only screen and (max-width: 690px) {
    .file-wrapper {

        .file-item {
            width: 120px;
        }

        .icon-item {
            margin-bottom: 10px;
            height: 90px;

            .file-icon {
                @include font-size(75);
            }

            .file-icon-text {
                @include font-size(12);
            }
            

            .folder {
                width: 75px;
                height: 75px;
                margin-top: 0;
                margin-bottom: 0;

                /deep/ .folder-icon {
                    @include font-size(75)
                }                
            }

            .image {
                width: 90px;
                height: 90px;
            }
        }

        .item-name .name {
            @include font-size(13);
            line-height: .9;
            max-height: 30px;
        }
    }
}

@media (prefers-color-scheme: dark) {

    .select-box {
        background-color: lighten($dark_mode_foreground, 10%);
    }

    .select-box-active {
        background-color: lighten($theme, 5%);

        .icon {
            stroke: white;
        }
    }

    .file-wrapper {

        .icon-item {

            .file-icon {

                path {
                    fill: $dark_mode_foreground;
                    stroke: #2F3C54;
                }
            }
        }

        .file-item {
            &.no-clicked {
                background: $dark_mode_background !important;

                .file-icon {

                    path {
                        fill: $dark_mode_foreground !important;
                        stroke: #2F3C54;
                    }
                }

                .item-name {

                    .name {
                        color: $dark_mode_text_primary !important;
                    }
                }
            }

            &:hover,
            &.is-clicked {
                background: $dark_mode_foreground;

                .file-icon {

                    path {
                        fill: $dark_mode_background;
                    }
                }
            }
        }

        .item-name {

            .name {
                color: $dark_mode_text_primary;
            }

            .item-size,
            .item-length {
                color: $dark_mode_text_secondary;
            }
        }

    }
}


</style>
