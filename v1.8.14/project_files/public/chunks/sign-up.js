(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{ASoH:function(e,t,a){"use strict";var r={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(a("s/ZW"),a("KHd+")),i=Object(o.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"button outline"},[a("span",{staticClass:"text-label"},[e._v(e._s(e.text))]),e._v(" "),e.loading?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):e._e(),e._v(" "),!e.loading&&e.icon?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{attrs:{icon:e.icon}})],1):e._e()])}),[],!1,null,"59e2dfc0",null);t.a=i.exports},D9xV:function(e,t,a){var r=a("W8fT");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(e.exports=r.locals)},GwTe:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".button[data-v-59e2dfc0]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-59e2dfc0]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-59e2dfc0]{margin-left:12px;font-size:1em}.button.solid[data-v-59e2dfc0]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-59e2dfc0]{color:#fff}.button.outline[data-v-59e2dfc0]{border:2px solid #1b2539}.button.outline .text-label[data-v-59e2dfc0]{color:#1b2539}.button.outline .icon path[data-v-59e2dfc0]{fill:#00bc7e}.button.outline[data-v-59e2dfc0]:hover{border-color:#00bc7e}.button.outline:hover .text-label[data-v-59e2dfc0]{color:#00bc7e}@media (prefers-color-scheme:dark){.button.outline[data-v-59e2dfc0]{background:#131414;border-color:#bec6cf}.button.outline .text-label[data-v-59e2dfc0]{color:#bec6cf}}.sync-alt[data-v-59e2dfc0]{-webkit-animation:spin-data-v-59e2dfc0 1s linear infinite;animation:spin-data-v-59e2dfc0 1s linear infinite}@-webkit-keyframes spin-data-v-59e2dfc0{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-59e2dfc0{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},Jx8r:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},NbAf:function(e,t,a){var r=a("GwTe");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(e.exports=r.locals)},UevJ:function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),o=a.n(r),i=a("bDRN"),n=a("A5+z"),s=a("j8qy"),l=a("ASoH"),p=a("TJPC"),c=a("L2JU"),d=a("xCqy"),f=a("vDqi"),u=a.n(f);function m(e,t,a,r,o,i,n){try{var s=e[i](n),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h={name:"SignUp",components:{AuthContentWrapper:i.a,ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,AuthContent:s.a,AuthButton:l.a,required:p.a},computed:v(v({},Object(c.b)(["config"])),{},{privacyPolicy:function(){return this.config.legal.find((function(e){return"privacy-policy"===e.slug}))},termsOfService:function(){return this.config.legal.find((function(e){return"terms-of-service"===e.slug}))}}),data:function(){return{isLoading:!1,register:{name:"",email:"",password:"",password_confirmation:""}}},methods:{signUp:function(){var e,t=this;return(e=o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.sign_up.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:t.isLoading=!0,u.a.post("/api/user/register",t.register).then((function(){t.isLoading=!1,t.$store.commit("SET_AUTHORIZED",!0),t.$router.push({name:"Files"})})).catch((function(e){401==e.response.status&&"invalid_client"===e.response.data.error&&d.a.$emit("alert:open",{emoji:"🤔",title:t.$t("popup_passport_error.title"),message:t.$t("popup_passport_error.message")}),500==e.response.status&&d.a.$emit("alert:open",{emoji:"🤔",title:t.$t("popup_signup_error.title"),message:t.$t("popup_signup_error.message")}),422==e.response.status&&(e.response.data.errors.email&&t.$refs.sign_up.setErrors({"E-Mail":e.response.data.errors.email}),e.response.data.errors.password&&t.$refs.sign_up.setErrors({"Your New Password":e.response.data.errors.password})),t.isLoading=!1}));case 7:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,o){var i=e.apply(t,a);function n(e){m(i,r,o,n,s,"next",e)}function s(e){m(i,r,o,n,s,"throw",e)}n(void 0)}))})()}},created:function(){this.$scrollTop()}},_=(a("bPBG"),a("KHd+")),x=Object(_.a)(h,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("AuthContentWrapper",{ref:"auth"},[a("AuthContent",{attrs:{name:"sign-up",visible:!0}},[e.config.app_logo?a("img",{staticClass:"logo",attrs:{src:e.$getImage(e.config.app_logo),alt:e.config.app_name}}):e._e(),e._v(" "),e.config.app_logo?e._e():a("b",{staticClass:"auth-logo-text"},[e._v(e._s(e.config.app_name))]),e._v(" "),a("h1",[e._v(e._s(e.$t("page_registration.title")))]),e._v(" "),a("h2",[e._v(e._s(e.$t("page_registration.subtitle")))]),e._v(" "),a("ValidationObserver",{ref:"sign_up",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.signUp.apply(null,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){t.invalid;return[a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("page_registration.label_email")))]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"E-Mail",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],class:{"is-error":r[0]},attrs:{placeholder:e.$t("page_registration.placeholder_email"),type:"email"},domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}}),e._v(" "),r[0]?a("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("page_registration.label_name")))]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Full Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.name,expression:"register.name"}],class:{"is-error":r[0]},attrs:{placeholder:e.$t("page_registration.placeholder_name"),type:"text"},domProps:{value:e.register.name},on:{input:function(t){t.target.composing||e.$set(e.register,"name",t.target.value)}}}),e._v(" "),r[0]?a("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("page_registration.label_pass")))]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Your New Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],class:{"is-error":r[0]},attrs:{placeholder:e.$t("page_registration.placeholder_pass"),type:"password"},domProps:{value:e.register.password},on:{input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}}),e._v(" "),r[0]?a("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("page_registration.label_confirm_pass")))]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Confirm Your Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password_confirmation,expression:"register.password_confirmation"}],class:{"is-error":r[0]},attrs:{placeholder:e.$t("page_registration.placeholder_confirm_pass"),type:"password"},domProps:{value:e.register.password_confirmation},on:{input:function(t){t.target.composing||e.$set(e.register,"password_confirmation",t.target.value)}}}),e._v(" "),r[0]?a("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",[a("i18n",{staticClass:"legal-agreement",attrs:{path:"page_registration.agreement",tag:"p"}},[a("router-link",{attrs:{to:{name:"DynamicPage",params:{slug:"terms-of-service"}},target:"_blank"}},[e._v(e._s(e.termsOfService.title))]),e._v(" "),a("router-link",{attrs:{to:{name:"DynamicPage",params:{slug:"privacy-policy"}},target:"_blank"}},[e._v(e._s(e.privacyPolicy.title))])],1),e._v(" "),a("AuthButton",{attrs:{icon:"chevron-right",text:e.$t("page_registration.button_create_account"),loading:e.isLoading,disabled:e.isLoading}})],1)]}}])}),e._v(" "),a("span",{staticClass:"additional-link"},[e._v(e._s(e.$t("page_registration.have_an_account"))+"\n            "),a("router-link",{attrs:{to:{name:"SignIn"}}},[e._v("\n                "+e._s(e.$t("page_forgotten_password.password_remember_button"))+"\n            ")])],1)],1)],1)}),[],!1,null,"42bcef32",null);t.default=x.exports},W8fT:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".form.inline-form[data-v-42bcef32]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-42bcef32]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-42bcef32]{position:absolute;left:0}.form.block-form.create-new-password .block-wrapper label[data-v-42bcef32]{width:280px}.form.block-form .block-wrapper[data-v-42bcef32]{display:flex;align-items:center;margin-top:25px;justify-content:center}.form.block-form .block-wrapper[data-v-42bcef32]:first-child{margin-top:0}.form.block-form .block-wrapper label[data-v-42bcef32]{white-space:nowrap;font-size:1.125em;font-weight:700;padding-right:20px;width:200px;text-align:right!important;color:#1b2539;text-align:right}.form.block-form .button[data-v-42bcef32]{margin-top:50px}.input-wrapper .error-message[data-v-42bcef32]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-42bcef32]{width:100%}input[type=email][data-v-42bcef32],input[type=password][data-v-42bcef32],input[type=text][data-v-42bcef32],textarea[data-v-42bcef32]{background:#f4f5f6;border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}input[type=email].is-error[data-v-42bcef32],input[type=password].is-error[data-v-42bcef32],input[type=text].is-error[data-v-42bcef32],textarea.is-error[data-v-42bcef32]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}input[type=email][data-v-42bcef32]::-moz-placeholder,input[type=password][data-v-42bcef32]::-moz-placeholder,input[type=text][data-v-42bcef32]::-moz-placeholder,textarea[data-v-42bcef32]::-moz-placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-42bcef32]:-ms-input-placeholder,input[type=password][data-v-42bcef32]:-ms-input-placeholder,input[type=text][data-v-42bcef32]:-ms-input-placeholder,textarea[data-v-42bcef32]:-ms-input-placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-42bcef32]::placeholder,input[type=password][data-v-42bcef32]::placeholder,input[type=text][data-v-42bcef32]::placeholder,textarea[data-v-42bcef32]::placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-42bcef32]:focus,input[type=password][data-v-42bcef32]:focus,input[type=text][data-v-42bcef32]:focus,textarea[data-v-42bcef32]:focus{border-color:#00bc7e;box-shadow:0 0 7px rgba(0,188,126,.3)}input[type=email][disabled][data-v-42bcef32],input[type=password][disabled][data-v-42bcef32],input[type=text][disabled][data-v-42bcef32],textarea[disabled][data-v-42bcef32]{color:#a4adb6;cursor:not-allowed}.additional-link[data-v-42bcef32]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-42bcef32],.additional-link b[data-v-42bcef32]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-42bcef32]:hover,.additional-link b[data-v-42bcef32]:hover{text-decoration:underline}@media only screen and (max-width:960px){.form .button[data-v-42bcef32]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-42bcef32],.form textarea[data-v-42bcef32]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-42bcef32]{display:block}.form.block-form .block-wrapper label[data-v-42bcef32]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-42bcef32]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-42bcef32]{display:block}.form.inline-form .input-wrapper .error-message[data-v-42bcef32]{position:relative;bottom:0}.form .button[data-v-42bcef32]{padding:14px 32px}input[type=email][data-v-42bcef32],input[type=password][data-v-42bcef32],input[type=text][data-v-42bcef32],textarea[data-v-42bcef32]{padding:14px 20px}}@media (prefers-color-scheme:dark){.form.block-form .block-wrapper label[data-v-42bcef32]{color:#bec6cf}input[type=email][data-v-42bcef32],input[type=password][data-v-42bcef32],input[type=text][data-v-42bcef32],textarea[data-v-42bcef32]{background:#1e2024;color:#bec6cf}input[type=email][data-v-42bcef32]::-moz-placeholder,input[type=password][data-v-42bcef32]::-moz-placeholder,input[type=text][data-v-42bcef32]::-moz-placeholder,textarea[data-v-42bcef32]::-moz-placeholder{color:#7d858c}input[type=email][data-v-42bcef32]:-ms-input-placeholder,input[type=password][data-v-42bcef32]:-ms-input-placeholder,input[type=text][data-v-42bcef32]:-ms-input-placeholder,textarea[data-v-42bcef32]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-42bcef32]::placeholder,input[type=password][data-v-42bcef32]::placeholder,input[type=text][data-v-42bcef32]::placeholder,textarea[data-v-42bcef32]::placeholder{color:#7d858c}input[type=email][disabled][data-v-42bcef32],input[type=password][disabled][data-v-42bcef32],input[type=text][disabled][data-v-42bcef32],textarea[disabled][data-v-42bcef32]{color:#7d858c}}.auth-logo-text[data-v-42bcef32]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-42bcef32]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-42bcef32]{min-width:310px}.auth-form .additional-link a[data-v-42bcef32]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-42bcef32]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-42bcef32]{width:120px;margin-bottom:20px}.auth-form h1[data-v-42bcef32]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-42bcef32]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-42bcef32]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-42bcef32]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-42bcef32]{width:100%}.auth-form h1[data-v-42bcef32]{font-size:1.875em}.auth-form h2[data-v-42bcef32]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-42bcef32]{font-size:1.375em}.auth-form h2[data-v-42bcef32]{font-size:1.125em}.auth-form input[data-v-42bcef32]{min-width:0}.auth-form .additional-link[data-v-42bcef32]{font-size:.9375em}}@media (prefers-color-scheme:dark){.auth-form .additional-link[data-v-42bcef32],.auth-form h1[data-v-42bcef32],.auth-form h2[data-v-42bcef32]{color:#bec6cf}}.legal-agreement[data-v-42bcef32]{font-size:1em;padding:55px 0 0;max-width:400px;font-weight:700;line-height:1.6;margin:0 auto}.legal-agreement a[data-v-42bcef32]{color:#00bc7e}",""])},bDRN:function(e,t,a){"use strict";var r={name:"AuthContentWrapper"},o=(a("iYAH"),a("KHd+")),i=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);t.a=i.exports},bPBG:function(e,t,a){"use strict";a("D9xV")},iYAH:function(e,t,a){"use strict";a("lh0Q")},j8qy:function(e,t,a){"use strict";var r={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=a("KHd+"),i=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return this.isVisible?t("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);t.a=i.exports},lh0Q:function(e,t,a){var r=a("Jx8r");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(e.exports=r.locals)},"s/ZW":function(e,t,a){"use strict";a("NbAf")}}]);