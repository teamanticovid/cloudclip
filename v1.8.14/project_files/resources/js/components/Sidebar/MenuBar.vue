<template>
    <nav class="menu-bar" v-if="user">

        <!--Navigation Icons-->
        <div class="icon-navigation menu">

            <router-link :to="{name: 'Profile'}" class="icon-navigation-item user">
                <UserAvatar />
            </router-link>

            <router-link :to="{name: 'Files'}" :title="$t('locations.home')" class="icon-navigation-item home">
                <div class="button-icon">
                    <hard-drive-icon size="19"></hard-drive-icon>
                </div>
            </router-link>

            <router-link :to="{name: 'SharedFiles'}" :title="$t('locations.shared')" class="icon-navigation-item shared">
                <div class="button-icon">
                    <share-icon size="19"></share-icon>
                </div>
            </router-link>

            <router-link :to="{name: 'Profile'}" :class="{'is-active': isUserProfileRoute}" :title="$t('locations.profile')" class="icon-navigation-item settings">
                <div class="button-icon">
                    <user-icon size="19"></user-icon>
                </div>
            </router-link>

            <router-link v-if="user.data.attributes.role === 'admin'" :to="{name: 'Dashboard'}" :class="{'is-active': $isThisRoute($route, adminRoutes)}" :title="$t('locations.settings')" class="icon-navigation-item users">
                <div class="button-icon">
                    <settings-icon size="19"></settings-icon>
                </div>
            </router-link>
        </div>

        <!--User avatar & Logout-->
        <ul class="icon-navigation logout">
            <li @click="$store.dispatch('logOut')" :title="$t('locations.logout')" class="icon-navigation-item">
                <div class="button-icon">
                    <power-icon size="19"></power-icon>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
    import UserAvatar from '@/components/Others/UserAvatar'
    import {mapGetters} from 'vuex'
    import {
        HardDriveIcon,
        SettingsIcon,
        Trash2Icon,
        UserIcon,
        PowerIcon,
        ShareIcon,
    } from 'vue-feather-icons'

    export default {
        name: 'MenuBar',
        components: {
            HardDriveIcon,
            SettingsIcon,
            UserAvatar,
            Trash2Icon,
            PowerIcon,
            ShareIcon,
            UserIcon,
        },
        computed: {
            ...mapGetters(['user']),
            isUserProfileRoute() {
                return this.$isThisRoute(this.$route, ['Profile', 'Password', 'Storage', 'Invoice', 'Subscription', 'PaymentMethods'])
            }
        },
        data() {
            return {
                adminRoutes: [
                    'AppSettings',
                    'AppAppearance',
                    'AppBillings',
                    'AppEmail',
                    'AppOthers',
                    'Dashboard',
                    'PlanSubscribers',
                    'PlanCreate',
                    'PlanSettings',
                    'PlanDelete',
                    'UserSubscription',
                    'UserInvoices',
                    'UserPassword',
                    'UserStorage',
                    'UserDelete',
                    'PlanCreate',
                    'UserCreate',
                    'AppPayments',
                    'PageEdit',
                    'Pages',
                    'UserDelete',
                    'UserDetail',
                    'Invoices',
                    'Gateways',
                    'Gateway',
                    'Plans',
                    'Users',
                    'User',
                ]
            }
        },
        mounted() {
            this.$store.dispatch('getAppData')
        }
    }
</script>

<style scoped lang="scss">
    @import '@assets/vue-file-manager/_variables';
    @import '@assets/vue-file-manager/_mixins';

    .menu-bar {
        background: $light_background;
        user-select: none;
        padding-top: 25px;
        display: grid;
        flex: 0 0 72px;
    }

    .icon-navigation {
        text-align: center;

        &.menu {
            margin-bottom: auto;
        }

        &.logout {
            margin-top: auto;
        }

        .icon-navigation-item {
            display: block;
            margin-bottom: 10px;

            &.user {
                margin-bottom: 20px;
                display: block;
            }
        }

        .button-icon {
            cursor: pointer;
            border-radius: 4px;
            padding: 12px;
            display: inline-block;
            line-height: 0;
            @include transition(150ms);

            &:hover {
                background: darken($light_background, 5%);
            }

            path, line, polyline, rect, circle {
                @include transition(150ms);
                stroke: black;
            }
        }

        .router-link-active,
        .is-active  {

            &.home {
                .button-icon {
                    background: rgba($theme, 0.1);

                    path, line, polyline, rect, circle {
                        stroke: $theme;
                    }
                }
            }

            &.shared {
                .button-icon {
                    background: rgba($yellow, 0.1);

                    path, line, polyline, rect, circle {
                        stroke: $yellow;
                    }
                }
            }

            &.trash {
                .button-icon {
                    background: rgba($red, 0.1);

                    path, line, polyline, rect, circle {
                        stroke: $red;
                    }
                }
            }

            &.settings {
                .button-icon {
                    background: rgba($purple, 0.1);

                    path, line, polyline, rect, circle {
                        stroke: $purple;
                    }
                }
            }

            &.users {
                .button-icon {
                    background: rgba($pink, 0.1);

                    path, line, polyline, rect, circle {
                        stroke: $pink;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .menu-bar {
            flex: 0 0 60px;
        }

        .icon-navigation {

            .icon-navigation-item {
                margin-bottom: 15px;
            }

            .button-icon {
                padding: 8px;
            }
        }
    }

    @media only screen and (max-width: 690px) {
        .menu-bar {
            display: none;
        }
    }

    @media (prefers-color-scheme: dark) {

        .icon-navigation {

            .button-icon {
                &:hover {
                    background: $dark_mode_background;
                }

                path, line, polyline, rect, circle {
                    stroke: $dark_mode_text_primary;
                }
            }
        }

        .menu-bar {
            background: $dark_mode_foreground;
        }
    }

</style>
