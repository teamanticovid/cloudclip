<template>
    <div class="file-wrapper" @mouseup.stop="clickedItem" @dblclick="goToItem" spellcheck="false">
        <!--List preview-->
        <div
            :draggable="canDrag"
            @dragstart="$emit('dragstart')"
            @drop="drop()"
            @dragleave="dragLeave"
            @dragover.prevent="dragEnter"
            class="file-item" :class="{'is-clicked': isClicked, 'no-clicked' : !isClicked && this.$isMobile(), 'is-dragenter': area }"
        >
            <!-- MultiSelecting for the mobile version -->
            <transition name="slide-from-left">
                <div class="check-select" v-if="mobileMultiSelect">
                    <div class="select-box" :class="{'select-box-active' : isClicked } ">
                        <CheckIcon v-if="isClicked" class="icon" size="17"/>
                    </div>
                </div>
            </transition>

            <!--Thumbnail for item-->
            <div class="icon-item">
                <!--If is file or image, then link item-->
                <span v-if="isFile || (isImage && !item.thumbnail)" class="file-icon-text">
                    {{ item.mimetype | limitCharacters }}
                </span>

                <!--Folder thumbnail-->
                <FontAwesomeIcon v-if="isFile || (isImage && !item.thumbnail)" class="file-icon" icon="file"/>

                <!--Image thumbnail-->
                <img loading="lazy" v-if="isImage && item.thumbnail" class="image" :src="item.thumbnail" :alt="item.name"/>

                 <!--Else show only folder icon-->
                <FolderIcon v-if="isFolder" :item="item" location="file-item-list" class="folder" />
            </div>

            <!--Name-->
            <div class="item-name">
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

                    <!--Filesize and timestamp-->
                    <span v-if="!isFolder" class="item-size">{{ item.filesize }}, {{ timeStamp }}</span>

                    <!--Folder item counts-->
                    <span v-if="isFolder" class="item-length"> {{ folderItems == 0 ? $t('folder.empty') : $tc('folder.item_counts', folderItems) }}, {{ timeStamp }} </span>
                </div>
            </div>

            <!--Show item actions-->
            <transition name="slide-from-right">
                <div class="actions" v-if="$isMobile() && ! mobileMultiSelect">
                    <span @mousedown.stop="showItemActions" class="show-actions">
                        <FontAwesomeIcon icon="ellipsis-v" class="icon-action"></FontAwesomeIcon>
                    </span>
                </div>
            </transition>
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
    name: 'FileItemList',
    props: ['item'],
    components: {
        UserPlusIcon,
        LinkIcon,
        FolderIcon,
        CheckIcon,
    },
    computed: {
        ...mapGetters(['FilePreviewType', 'fileInfoDetail', 'data']),
        isClicked() {
            return this.fileInfoDetail.some(element => element.unique_id == this.item.unique_id)
        },
        isFolder() {
            return this.item.type === 'folder'
        },
        isFile() {
            return this.item.type !== 'folder' && this.item.type !== 'image'
        },
        isImage() {
            return this.item.type === 'image'
        },
        isPdf() {
            return this.item.mimetype === 'pdf'
        },
        isVideo() {
            return this.item.type === 'video'
        },
        isAudio() {
            let mimetypes = ['mpeg', 'mp3', 'mp4', 'wan', 'flac']
            return mimetypes.includes(this.item.mimetype) && this.item.type === 'audio'
        },
        canEditName() {
            return !this.$isMobile() && !this.$isThisLocation(['trash', 'trash-root']) && !this.$checkPermission('visitor') && !(this.sharedDetail && this.sharedDetail.type === 'file')
        },
        canDrag() {
            return !this.isDeleted && this.$checkPermission(['master', 'editor'])
        },
        timeStamp() {
            return this.item.deleted_at ? this.$t('item_thumbnail.deleted_at', { time: this.item.deleted_at }) : this.item.created_at
        },
        folderItems() {
            return this.item.deleted_at ? this.item.trashed_items : this.item.items
        },
        isDeleted() {
            return this.item.deleted_at ? true : false
        }
    },
    filters: {
        limitCharacters(str) {
            if (str.length > 3) {
                return str.substring(0, 3) + '...'
            } else {
                return str.substring(0, 3)
            }
        }
    },
    data() {
        return {
            area: false,
            itemName: undefined,
            mobileMultiSelect: false
        }
    },
    methods: {
        drop() {
            this.area = false
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

                if ((e.ctrlKey || e.metaKey) && !e.shiftKey) {
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

            if (this.mobileMultiSelect && this.$isMobile()) {
                if (this.fileInfoDetail.some(item => item.unique_id === this.item.unique_id)) {
                    this.$store.commit('REMOVE_ITEM_FILEINFO_DETAIL', this.item)
                } else {
                    this.$store.commit('GET_FILEINFO_DETAIL', this.item)
                }
            }

            // Get target classname
            let itemClass = e.target.className

            if (['name', 'icon', 'file-link', 'file-icon-text'].includes(itemClass)) return
        },
        goToItem() {
            if (this.isImage || this.isVideo || this.isAudio || this.isPdf) {
                events.$emit('fileFullPreview:show')

            } else if (this.isFile || !this.isFolder && !this.isVideo && !this.isAudio && !this.isImage && !this.isPdf) {
                this.$downloadFile(this.item.file_url, this.item.name + '.' + this.item.mimetype)

            } else if (this.isFolder) {

                //Clear selected items after open another folder
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
            this.mobileMultiSelect = true
            this.$store.commit('CLEAR_FILEINFO_DETAIL')
        })

        events.$on('mobileSelecting:stop', () => {
            this.mobileMultiSelect = false
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


.slide-from-left-move {
    transition: transform 300s ease;
}

.slide-from-left-enter-active,
.slide-from-right-enter-active,
.slide-from-left-leave-active,
.slide-from-right-leave-active {
    transition: all 300ms;
}

.slide-from-left-enter,
.slide-from-left-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

.slide-from-right-enter,
.slide-from-right-leave-to {
    opacity: 0;
    transform: translateX(100%);
}


.check-select {
    margin-right: 15px;
    margin-left: 6px;

    .select-box {
        width: 20px;
        height: 20px;
        background-color: darken($light_background, 5%);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }

    .select-box-active {
        background-color: $theme;

        .icon {
            stroke: white;
        }
    }
}

.file-wrapper {
    user-select: none;
    position: relative;

    &:hover {
        border-color: transparent;
    }

    .actions {
        text-align: right;
        width: 50px;

        .show-actions {
            cursor: pointer;
            padding: 12px 6px 12px;

            .icon-action {
                @include font-size(14);

                path {
                    fill: $theme;
                }
            }
        }
    }

    .item-name {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

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

                path,
                circle,
                line {
                    stroke: $theme;
                }
            }
        }

        .item-size,
        .item-length {
            @include font-size(11);
            font-weight: 400;
            color: rgba($text, 0.7);
        }

        .name {
            white-space: nowrap;

            &[contenteditable] {
                -webkit-user-select: text;
                user-select: text;
            }

            &[contenteditable='true']:hover {
                text-decoration: underline;
            }
        }

        .name {
            color: $text;
            @include font-size(14);
            font-weight: 700;
            max-height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;

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

    .icon-item {
        text-align: center;
        position: relative;
        flex: 0 0 50px;
        line-height: 0;
        margin-right: 20px;
        
        .folder {
            width: 52px;
            height: 52px;

            /deep/ .folder-icon {
                @include font-size(52)
            }
        }

        .file-icon {
            @include font-size(45);

            path {
                fill: #fafafc;
                stroke: #dfe0e8;
                stroke-width: 1;
            }
        }

        .file-icon-text {
            line-height: 1;
            top: 40%;
            @include font-size(11);
            margin: 0 auto;
            position: absolute;
            text-align: center;
            left: 0;
            right: 0;
            color: $theme;
            font-weight: 600;
            user-select: none;
            max-width: 50px;
            max-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .image {
            object-fit: cover;
            user-select: none;
            max-width: 100%;
            border-radius: 5px;
            width: 50px;
            height: 50px;
            pointer-events: none;
        }
    }

    .file-item {
        border: 2px dashed transparent;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 7px;

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
}

@media (prefers-color-scheme: dark) {
    .check-select {

        .select-box {
            background-color: lighten($dark_mode_foreground, 10%);
        }

        .select-box-active {
            background-color: $theme;

            .icon {
                stroke: white;
            }
        }
    }

    .file-wrapper {
        .icon-item {
            .file-icon {
                path {
                    fill: $dark_mode_foreground;
                    stroke: #2f3c54;
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

                .item-name .name {
                    color: $theme;
                }

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