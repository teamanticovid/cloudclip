<template>
    <PageTab>
        <PageTabGroup>
            <ValidationObserver ref="password" @submit.prevent="resetPassword" v-slot="{ invalid }" tag="form" class="form block-form">
                <FormLabel>{{ $t('user_password.title') }}</FormLabel>
                <div class="block-wrapper">
                    <label>{{ $t('page_create_password.label_new_pass') }}:</label>
                    <ValidationProvider tag="div" mode="passive" class="input-wrapper" name="New Password"
                                        rules="required" v-slot="{ errors }">
                        <input v-model="newPassword" :placeholder="$t('page_create_password.label_new_pass')"
                               type="password"
                               :class="{'is-error': errors[0]}"/>
                        <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="block-wrapper">
                    <label>{{ $t('page_create_password.label_confirm_pass') }}:</label>
                    <ValidationProvider tag="div" mode="passive" class="input-wrapper" name="Confirm Your Password"
                                        rules="required" v-slot="{ errors }">
                        <input v-model="newPasswordConfirmation"
                               :placeholder="$t('page_create_password.label_confirm_pass')" type="password"
                               :class="{'is-error': errors[0]}"/>
                        <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="block-wrapper">
                    <ButtonBase type="submit" button-style="theme" class="confirm-form">
                        {{ $t('profile.store_pass') }}
                    </ButtonBase>
                </div>
            </ValidationObserver>
        </PageTabGroup>
    </PageTab>
</template>

<script>
    import {ValidationProvider, ValidationObserver} from 'vee-validate/dist/vee-validate.full'
    import PageTabGroup from '@/components/Others/Layout/PageTabGroup'
    import UserImageInput from '@/components/Others/UserImageInput'
    import FormLabel from '@/components/Others/Forms/FormLabel'
    import MobileHeader from '@/components/Mobile/MobileHeader'
    import ButtonBase from '@/components/FilesView/ButtonBase'
    import PageTab from '@/components/Others/Layout/PageTab'
    import PageHeader from '@/components/Others/PageHeader'
    import ThemeLabel from '@/components/Others/ThemeLabel'
    import {required} from 'vee-validate/dist/rules'
    import {events} from '@/bus'
    import axios from 'axios'

    export default {
        name: 'Password',
        components: {
            PageTabGroup,
            FormLabel,
            PageTab,
            ValidationProvider,
            ValidationObserver,
            UserImageInput,
            MobileHeader,
            PageHeader,
            ButtonBase,
            ThemeLabel,
            required,
        },
        data() {
            return {
                newPasswordConfirmation: '',
                newPassword: '',
                isLoading: false,
            }
        },
        methods: {
            async resetPassword() {

                // Validate fields
                const isValid = await this.$refs.password.validate();

                if (!isValid) return;

                // Send request to get user reset link
                axios
                    .post(this.$store.getters.api + '/user/password', {
                        password: this.newPassword,
                        password_confirmation: this.newPasswordConfirmation,
                    })
                    .then(() => {

                        // Reset inputs
                        this.newPassword = ''
                        this.newPasswordConfirmation = ''

                        // Reset errors
                        this.$refs.password.reset()

                        // Show error message
                        events.$emit('success:open', {
                            title: this.$t('popup_pass_changed.title'),
                            message: this.$t('popup_pass_changed.message'),
                        })
                    })
                    .catch(error => {

                        if (error.response.status == 422) {

                            if (error.response.data.errors['password']) {

                                this.$refs.password.setErrors({
                                    'New Password': error.response.data.errors['password']
                                });
                            }
                        }
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@assets/vue-file-manager/_variables';
    @import '@assets/vue-file-manager/_mixins';
    @import '@assets/vue-file-manager/_forms';

    .block-form {
        max-width: 100%;
    }

    @media only screen and (max-width: 960px) {

        .form {
            .button-base {
                width: 100%;
                margin-top: 0;
                text-align: center;
            }
        }
    }

    @media (prefers-color-scheme: dark) {

    }

</style>
