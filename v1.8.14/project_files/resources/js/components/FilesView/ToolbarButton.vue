<template>
    <button class="button" :title="action">
        <corner-down-right-icon v-if="source === 'move'" size="19"></corner-down-right-icon>
        <download-cloud-icon v-if="source === 'download'" size="19"></download-cloud-icon>
        <folder-plus-icon v-if="source === 'folder-plus'" size="19"></folder-plus-icon>
        <zoom-in-icon v-if="source === 'zoom-in'" size="19"/>
        <zoom-out-icon v-if="source === 'zoom-out'" size="19"/>
        <edit-2-icon v-if="source === 'rename'" size="19"></edit-2-icon>
        <printer-icon v-if="source === 'print'" size="19"></printer-icon>
        <trash-2-icon v-if="source === 'trash'" size="19"></trash-2-icon>
        <list-icon v-if="source === 'th-list'" size="19"></list-icon>
        <info-icon v-if="source === 'info'" size="19"></info-icon>
        <grid-icon v-if="source === 'th'" size="19"></grid-icon>
        <link-icon v-if="source === 'share'" size="19"></link-icon>
        <x-icon v-if="source === 'close'" size="19"></x-icon>
        <cloud-off-icon v-if="source === 'shared-off'" size="19"></cloud-off-icon>
        <sorting-and-preview-icon v-if="source === 'preview-sorting'" size="19" class="preview-sorting"></sorting-and-preview-icon>
    </button>
</template>

<script>
import {
    ZoomOutIcon,
    ZoomInIcon,
    FolderPlusIcon,
    Trash2Icon,
    GridIcon,
    ListIcon,
    Edit2Icon,
    InfoIcon,
    CornerDownRightIcon,
    LinkIcon,
    DownloadCloudIcon,
    XIcon,
    PrinterIcon,
    CloudOffIcon
} from 'vue-feather-icons'
import SortingAndPreviewIcon from '@/components/FilesView/Icons/SortingAndPreviewIcon'

export default {
    name: 'ToolbarButton',
    props: ['source', 'action'],
    components: {
        ZoomOutIcon,
        ZoomInIcon,
        SortingAndPreviewIcon,
        CornerDownRightIcon,
        DownloadCloudIcon,
        FolderPlusIcon,
        CloudOffIcon,
        PrinterIcon,
        Trash2Icon,
        Edit2Icon,
        ListIcon,
        XIcon,
        GridIcon,
        InfoIcon,
        LinkIcon
    }
}
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";

.preview-sorting {
    svg {
        width: 19px;
        height: 19px;
    }
}

.button {
    height: 42px;
    width: 42px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    outline: none;
    border: none;
    @include transition(150ms);
    background: transparent;

    &:hover {
        .preview-sorting {
            path, line, polyline, rect, circle {
                stroke: $theme !important;
            }
        }
    }

    &:hover {
        background: $light_background;

        path,
        line,
        polyline,
        rect,
        circle {
            @include transition(150ms);
            stroke: $theme;
        }
    }
}

@media (prefers-color-scheme: dark) {
    .button {
        background: transparent;

        &:hover {
            background: $dark_mode_foreground;
        }

        path,
        line,
        polyline,
        rect,
        circle {
            stroke: $dark_mode_text_primary;
        }
    }
}
</style>
