<template>
    <transition name="vignette">
        <div v-if="isVisible" class="vignette" @click="closePopup"></div>
    </transition>
</template>

<script>
    import {events} from '@/bus'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Vignette',
        computed: {
            ...mapGetters([
                'processingPopup'
            ]),
            isVisible() {
                return this.processingPopup || this.isVisibleVignette
            },
        },
        data() {
            return {
                isVisibleVignette: false,
            }
        },
        methods: {
            closePopup() {
                events.$emit('popup:close')
                events.$emit('mobileMenu:hide')
                events.$emit('mobileSortingAndPreview', false)
            }
        },
        created() {

            // Hide vignette
            events.$on('popup:close', () => this.isVisibleVignette = false)

            // Show vignette
            events.$on('popup:open', () => this.isVisibleVignette = true)
            events.$on('alert:open', () => this.isVisibleVignette = true)
            events.$on('success:open', () => this.isVisibleVignette = true)
            events.$on('confirm:open', () => this.isVisibleVignette = true)
            events.$on('mobileSortingAndPreviewVignette', (state) => this.isVisibleVignette = state)

        }
    }
</script>

<style lang="scss" scoped>
    @import '@assets/vue-file-manager/_variables';
    @import '@assets/vue-file-manager/_mixins';

    .vignette {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 18;
        background: $light_mode_vignette;
    }

    // Dark mode
    @media (prefers-color-scheme: dark) {

        .vignette {
            background: $dark_mode_vignette;
        }
    }


    .vignette-enter-active {
        animation: vignette-in 0.35s ease;
    }

    .vignette-leave-active {
        animation: vignette-in 0.15s ease reverse;
    }

    @keyframes vignette-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
