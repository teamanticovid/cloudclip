(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"225X":function(a,t,e){"use strict";e("R4xk")},"2Sb1":function(a,t,e){"use strict";var r={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").g}},i=(e("qf9i"),e("KHd+")),n=Object(i.a)(r,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-header"},[a.canBack?e("div",{staticClass:"go-back",on:{click:function(t){return a.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"aafe7e24",null);t.a=n.exports},"3Idf":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".page-header[data-v-aafe7e24]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-aafe7e24]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-aafe7e24]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-aafe7e24]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-aafe7e24]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-aafe7e24]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-aafe7e24]{background:#131414}.page-header .title[data-v-aafe7e24]{color:#bec6cf}.page-header .icon path[data-v-aafe7e24]{fill:#00bc7e}}",""])},F11w:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".color-label[data-v-ffcb2882]{text-transform:capitalize;font-size:.75em;display:inline-block;border-radius:6px;font-weight:700;padding:4px 6px}.color-label.purple[data-v-ffcb2882]{color:#9d66fe;background:rgba(157,102,254,.1)}.color-label.yellow[data-v-ffcb2882]{color:#ffbd2d;background:rgba(255,189,45,.1)}.color-label.green[data-v-ffcb2882]{color:#00bc7e;background:rgba(0,188,126,.1)}.color-label.red[data-v-ffcb2882]{color:#fd397a;background:rgba(253,57,122,.1)}",""])},GkQO:function(a,t,e){"use strict";e("J5Z7")},GxOr:function(a,t,e){"use strict";e.r(t);var r=e("o0o1"),i=e.n(r),n=e("A5+z"),s=e("wz3J"),o=e("4TWA"),c=e("eZ9V"),l=e("D62o"),d=e("Nv84"),p=e("KnjL"),u=e("kPoH"),b=e("2Sb1"),v=e("zTYo"),m=e("CjXH"),g=e("TJPC"),f=e("L2JU"),_=e("xCqy"),h=e("vDqi"),y=e.n(h);function x(a,t,e,r,i,n,s){try{var o=a[n](s),c=o.value}catch(a){return void e(a)}o.done?t(c):Promise.resolve(c).then(r,i)}function w(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function k(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?w(Object(e),!0).forEach((function(t){C(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function C(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var P=void 0,$=void 0,O={name:"UpgradePlan",components:{ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,PlanPricingTables:s.a,CreditCardIcon:m.n,MobileHeader:l.a,SelectInput:o.a,ButtonBase:d.a,PageHeader:b.a,ColorLabel:u.a,FormLabel:c.a,required:g.a,Spinner:v.a,InfoBox:p.a},computed:k(k({},Object(f.b)(["requestedPlan","config","countries"])),{},{billing:function(){return this.$store.getters.user.relationships.settings.data.attributes},taxRates:function(){var a=this;return this.requestedPlan.data.attributes.tax_rates.find((function(t){return t.jurisdiction===a.billing.billing_country}))}}),data:function(){return{complete:!1,stripeOptions:{hidePostalCode:!1},isLoading:!0,isSubmitted:!1,PaymentMethods:void 0,defaultPaymentMethod:void 0,errorMessage:void 0,isError:!1,payByNewCard:!1,clientSecret:void 0}},methods:{initStripe:function(){var a=(P=Stripe(this.config.stripe_public_key)).elements();($=a.create("card")).mount(this.$refs.stripeCard)},payByNewCardForm:function(){this.payByNewCard=!0,this.isError=!1},successOrder:function(){this.$store.dispatch("getAppData"),_.a.$emit("toaster",{type:"success",message:this.$t("toaster.account_upgraded")}),this.$router.push({name:"Subscription"})},errorOrder:function(a){402===a.response.status&&(window.location.href=a.response.data.message),400===a.response.status&&(this.isError=!0,this.errorMessage=a.response.data.message),500===a.response.status&&(this.isError=!0,this.errorMessage=a.response.data.message,_.a.$emit("alert:open",{title:this.$t("popup_error.title"),message:this.$t("popup_error.message")}))},submitOrder:function(){var a,t=this;return(a=i.a.mark((function a(){var e,r,n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.order.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:if(t.isError=!1,t.isSubmitted=!0,t.defaultPaymentMethod&&!t.payByNewCard){a.next=14;break}return a.next=10,P.confirmCardSetup(t.clientSecret,{payment_method:{card:$}});case 10:e=a.sent,r=e.setupIntent,(n=e.error)?(t.isError=!0,t.isSubmitted=!1,t.errorMessage=n.message):y.a.post("/api/subscription/upgrade",{billing:t.billing,plan:t.requestedPlan,payment:{type:"stripe",meta:{pm:r.payment_method}}}).then((function(){return t.successOrder()})).catch((function(a){return t.errorOrder(a)})).finally((function(){t.isSubmitted=!1}));case 14:t.defaultPaymentMethod&&!t.payByNewCard&&y.a.post("/api/subscription/upgrade",{billing:t.billing,plan:t.requestedPlan,payment:{type:"stripe"}}).then((function(){return t.successOrder()})).catch((function(a){return t.errorOrder(a)})).finally((function(){t.isSubmitted=!1}));case 15:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(r,i){var n=a.apply(t,e);function s(a){x(n,r,i,s,o,"next",a)}function o(a){x(n,r,i,s,o,"throw",a)}s(void 0)}))})()}},mounted:function(){this.requestedPlan?this.initStripe():this.$router.push({name:"UpgradePlan"})},created:function(){var a=this;y.a.get("/api/stripe/setup-intent").then((function(t){a.clientSecret=t.data.client_secret})).catch((function(){return a.$isSomethingWrong()})),y.a.get("/api/user/payments").then((function(t){a.defaultPaymentMethod=t.data.default,a.PaymentMethods=t.data.others})).catch((function(){return a.$isSomethingWrong()})).finally((function(){a.isLoading=!1}))}},z=(e("225X"),e("KHd+")),j=Object(z.a)(O,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"single-page"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isLoading,expression:"! isLoading"}],staticClass:"large-width center-page",attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:a.$t(a.$router.currentRoute.meta.title)}}),a._v(" "),e("div",{staticClass:"content-page"},[e("div",{staticClass:"plan-title"},[e("credit-card-icon",{staticClass:"title-icon",attrs:{size:"42"}}),a._v(" "),e("h1",[a._v(a._s(a.$t("page_upgrade_account.title")))]),a._v(" "),e("h2",[a._v(a._s(a.$t("page_upgrade_account.desription")))])],1),a._v(" "),e("div",{staticClass:"order"},[e("div",{staticClass:"steps"},[e("div",{staticClass:"payment-card"},[e("FormLabel",[a._v(a._s(a.$t("page_upgrade_account.section_card")))]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!a.defaultPaymentMethod||a.payByNewCard,expression:"! defaultPaymentMethod || payByNewCard"}],staticClass:"register-card"},[a.config.isDemo?e("InfoBox",[e("p",[a._v("For test your payment please use "),e("b",[a._v("4242 4242 4242 4242")]),a._v(" or "),e("b",[a._v("5555 5555 5555 4444")]),a._v(" as a card number, "),e("b",[a._v("11/22")]),a._v("\n                                    as the expiration date and "),e("b",[a._v("123")]),a._v(" as CVC number and ZIP "),e("b",[a._v("12345")]),a._v(".")])]):a._e(),a._v(" "),e("div",{ref:"stripeCard",staticClass:"stripe-card",class:{"is-error":a.isError}}),a._v(" "),a.isError?e("div",{staticClass:"card-error-message"},[e("span",[a._v(a._s(a.errorMessage))])]):a._e()],1),a._v(" "),a.defaultPaymentMethod&&!a.payByNewCard?e("div",{staticClass:"registered-cards"},[e("div",{staticClass:"credit-card",class:{"is-error":a.isError}},[e("div",{staticClass:"card-number"},[e("img",{staticClass:"credit-card-icon",attrs:{src:a.$getCreditCardBrand(a.defaultPaymentMethod.data.attributes.brand),alt:a.defaultPaymentMethod.data.attributes.brand}}),a._v(" "),e("div",{staticClass:"credit-card-numbers"},[a._v("\n                                        •••• "+a._s(a.defaultPaymentMethod.data.attributes.last4)+"\n                                    ")]),a._v(" "),e("ColorLabel",{attrs:{color:"purple"}},[a._v(a._s(a.$t("global.default")))])],1),a._v(" "),e("div",{staticClass:"expiration-date"},[e("span",[a._v(a._s(a.defaultPaymentMethod.data.attributes.exp_month)+" / "+a._s(a.defaultPaymentMethod.data.attributes.exp_year))])])]),a._v(" "),a.isError?a._e():e("div",{staticClass:"change-payment"},[e("span",[a._v("\n                                    "+a._s(a.$t("page_upgrade_account.change_payment.you_can"))+"\n                                ")]),a._v(" "),a.PaymentMethods.data.length>0?e("router-link",{attrs:{to:{name:"PaymentMethods"}}},[a._v("\n                                    "+a._s(a.$t("page_upgrade_account.change_payment.change_payment"))+"\n                                ")]):a._e(),a._v(" "),a.PaymentMethods.data.length>0?e("span",[a._v("\n                                    "+a._s(a.$t("global.or"))+"\n                                ")]):a._e(),a._v(" "),e("a",{on:{click:a.payByNewCardForm}},[a._v("\n                                    "+a._s(a.$t("page_upgrade_account.change_payment.pay_by_new_card"))+"\n                                ")])],1),a._v(" "),a.isError?e("div",{staticClass:"card-error-message"},[e("span",[a._v(a._s(a.errorMessage))]),a._v(" "),e("span",{staticClass:"link",on:{click:a.payByNewCardForm}},[a._v("\n                                    "+a._s(a.$t("page_upgrade_account.errors.pay_by_another_card"))+"\n                                ")]),a._v(" "),e("span",[a._v("\n                                    "+a._s(a.$t("global.or"))+"\n                                ")]),a._v(" "),e("router-link",{staticClass:"link",attrs:{to:{name:"PaymentMethods"}}},[a._v("\n                                    "+a._s(a.$t("page_upgrade_account.change_payment.change_payment"))+"\n                                ")])],1):a._e()]):a._e()],1),a._v(" "),a.billing?e("div",{staticClass:"billing"},[e("FormLabel",[a._v(a._s(a.$t("page_upgrade_account.section_billing")))]),a._v(" "),e("ValidationObserver",{ref:"order",staticClass:"form block-form",attrs:{tag:"form"},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("div",{staticClass:"form block-form"},[e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("user_settings.name"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_name"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_name,expression:"billing.billing_name"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.name_plac"),type:"text"},domProps:{value:a.billing.billing_name},on:{input:function(t){t.target.composing||a.$set(a.billing,"billing_name",t.target.value)}}}),a._v(" "),r[0]?e("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("user_settings.address"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_address"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_address,expression:"billing.billing_address"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.address_plac"),type:"text"},domProps:{value:a.billing.billing_address},on:{input:function(t){t.target.composing||a.$set(a.billing,"billing_address",t.target.value)}}}),a._v(" "),r[0]?e("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"wrapper-inline"},[e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("user_settings.city"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_city"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_city,expression:"billing.billing_city"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.city_plac"),type:"text"},domProps:{value:a.billing.billing_city},on:{input:function(t){t.target.composing||a.$set(a.billing,"billing_city",t.target.value)}}}),a._v(" "),r[0]?e("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("user_settings.postal_code"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_postal_code"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_postal_code,expression:"billing.billing_postal_code"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.postal_code_plac"),type:"text"},domProps:{value:a.billing.billing_postal_code},on:{input:function(t){t.target.composing||a.$set(a.billing,"billing_postal_code",t.target.value)}}}),a._v(" "),r[0]?e("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1)]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("user_settings.country"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_country"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors;return[e("SelectInput",{attrs:{default:a.billing.billing_country,options:a.countries,placeholder:a.$t("user_settings.country_plac"),isError:r[0]},model:{value:a.billing.billing_country,callback:function(t){a.$set(a.billing,"billing_country",t)},expression:"billing.billing_country"}}),a._v(" "),r[0]?e("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("user_settings.state"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_state"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_state,expression:"billing.billing_state"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.state_plac"),type:"text"},domProps:{value:a.billing.billing_state},on:{input:function(t){t.target.composing||a.$set(a.billing,"billing_state",t.target.value)}}}),a._v(" "),e("small",{staticClass:"input-help"},[a._v("\n                                            State, county, province, or region.\n                                        ")]),a._v(" "),r[0]?e("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("user_settings.phone_number"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_phone_number"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_phone_number,expression:"billing.billing_phone_number"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.phone_number_plac"),type:"text"},domProps:{value:a.billing.billing_phone_number},on:{input:function(t){t.target.composing||a.$set(a.billing,"billing_phone_number",t.target.value)}}}),a._v(" "),r[0]?e("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1)])]}}],null,!1,2994122159)})],1):a._e()]),a._v(" "),e("div",{staticClass:"summary"},[e("FormLabel",[a._v(a._s(a.$t("page_upgrade_account.section_summary")))]),a._v(" "),a.requestedPlan?e("div",{staticClass:"summary-list",class:{"is-error":a.isError}},[e("div",{staticClass:"row"},[e("div",{staticClass:"cell"},[e("b",[a._v(a._s(a.requestedPlan.data.attributes.name))]),a._v(" "),e("small",[a._v(a._s(a.$t("page_upgrade_account.summary.period")))])]),a._v(" "),e("div",{staticClass:"cell"},[e("b",[a._v(a._s(a.requestedPlan.data.attributes.price))])])]),a._v(" "),a.taxRates?e("div",{staticClass:"row"},[e("div",{staticClass:"cell"},[e("b",[a._v(a._s(a.$t("page_upgrade_account.summary.vat"))+" - ("+a._s(a.taxRates.jurisdiction)+" "+a._s(a.taxRates.percentage)+"%)")])]),a._v(" "),e("div",{staticClass:"cell"},[e("b",[a._v(a._s(a.taxRates.plan_price_formatted))])])]):a._e(),a._v(" "),a.taxRates?a._e():e("div",{staticClass:"row"},[e("div",{staticClass:"cell"},[e("b",[a._v(a._s(a.$t("global.total")))])]),a._v(" "),e("div",{staticClass:"cell"},[e("b",[a._v(a._s(a.requestedPlan.data.attributes.price))])])]),a._v(" "),a.taxRates?e("div",{staticClass:"row"},[e("div",{staticClass:"cell"},[e("b",[a._v(a._s(a.$t("page_upgrade_account.summary.total_with_vat")))])]),a._v(" "),e("div",{staticClass:"cell"},[e("b",[a._v(a._s(a.taxRates.plan_price_formatted))])])]):a._e(),a._v(" "),e("ButtonBase",{staticClass:"next-submit",attrs:{disabled:a.isSubmitted,loading:a.isSubmitted,type:"submit","button-style":"theme-solid"},nativeOn:{click:function(t){return a.submitOrder.apply(null,arguments)}}},[a._v("\n                            "+a._s(a.$t("page_upgrade_account.summary.submit_button"))+"\n                        ")]),a._v(" "),a.isError?e("p",{staticClass:"error-message"},[a._v(a._s(a.errorMessage))]):a._e(),a._v(" "),e("small",{staticClass:"disclaimer"},[a._v("\n                            "+a._s(a.$t("page_upgrade_account.summary.submit_disclaimer",{app:a.config.app_name}))+"\n                        ")])],1):a._e()],1)])])],1),a._v(" "),a.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):a._e()])}),[],!1,null,"08c4c044",null);t.default=j.exports},Idvm:function(a,t,e){var r=e("lig4");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,i);r.locals&&(a.exports=r.locals)},J5Z7:function(a,t,e){var r=e("F11w");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,i);r.locals&&(a.exports=r.locals)},KPNK:function(a,t,e){var r=e("3Idf");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,i);r.locals&&(a.exports=r.locals)},MbIT:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form[data-v-08c4c044]{max-width:700px}.form.inline-form[data-v-08c4c044]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-08c4c044]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-08c4c044]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-08c4c044]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-08c4c044]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-08c4c044]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-08c4c044]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-08c4c044]:last-child{margin-bottom:0}.form.block-form .button[data-v-08c4c044]{margin-top:50px}.form .inline-wrapper[data-v-08c4c044]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-08c4c044]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-08c4c044]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-08c4c044]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-08c4c044]{display:flex}.single-line-form .submit-button[data-v-08c4c044]{margin-left:20px}.error-message[data-v-08c4c044]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-08c4c044]{width:100%}input[type=email][data-v-08c4c044],input[type=number][data-v-08c4c044],input[type=password][data-v-08c4c044],input[type=text][data-v-08c4c044],textarea[data-v-08c4c044]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-08c4c044],input[type=number].is-error[data-v-08c4c044],input[type=password].is-error[data-v-08c4c044],input[type=text].is-error[data-v-08c4c044],textarea.is-error[data-v-08c4c044]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-08c4c044]::-moz-placeholder,input[type=number][data-v-08c4c044]::-moz-placeholder,input[type=password][data-v-08c4c044]::-moz-placeholder,input[type=text][data-v-08c4c044]::-moz-placeholder,textarea[data-v-08c4c044]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-08c4c044]:-ms-input-placeholder,input[type=number][data-v-08c4c044]:-ms-input-placeholder,input[type=password][data-v-08c4c044]:-ms-input-placeholder,input[type=text][data-v-08c4c044]:-ms-input-placeholder,textarea[data-v-08c4c044]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-08c4c044]::placeholder,input[type=number][data-v-08c4c044]::placeholder,input[type=password][data-v-08c4c044]::placeholder,input[type=text][data-v-08c4c044]::placeholder,textarea[data-v-08c4c044]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-08c4c044]:focus,input[type=number][data-v-08c4c044]:focus,input[type=password][data-v-08c4c044]:focus,input[type=text][data-v-08c4c044]:focus,textarea[data-v-08c4c044]:focus{border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}input[type=email][disabled][data-v-08c4c044],input[type=number][disabled][data-v-08c4c044],input[type=password][disabled][data-v-08c4c044],input[type=text][disabled][data-v-08c4c044],textarea[disabled][data-v-08c4c044]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-08c4c044]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-08c4c044],.additional-link b[data-v-08c4c044]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-08c4c044]:hover,.additional-link b[data-v-08c4c044]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-08c4c044]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-08c4c044]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-08c4c044],.form textarea[data-v-08c4c044]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-08c4c044]{display:block}.form.block-form .block-wrapper label[data-v-08c4c044]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-08c4c044]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-08c4c044]{display:block}.form.inline-form .input-wrapper .error-message[data-v-08c4c044]{position:relative;bottom:0}.form .button[data-v-08c4c044]{padding:14px 32px}.single-line-form[data-v-08c4c044]{display:block}.single-line-form .submit-button[data-v-08c4c044]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-08c4c044],input[type=number][data-v-08c4c044],input[type=password][data-v-08c4c044],input[type=text][data-v-08c4c044],textarea[data-v-08c4c044]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-08c4c044]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-08c4c044]{color:#7d858c}.form.block-form .block-wrapper label[data-v-08c4c044],.form .inline-wrapper .switch-label .input-label[data-v-08c4c044]{color:#bec6cf}input[type=email][data-v-08c4c044],input[type=number][data-v-08c4c044],input[type=password][data-v-08c4c044],input[type=text][data-v-08c4c044],textarea[data-v-08c4c044]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-08c4c044]::-moz-placeholder,input[type=number][data-v-08c4c044]::-moz-placeholder,input[type=password][data-v-08c4c044]::-moz-placeholder,input[type=text][data-v-08c4c044]::-moz-placeholder,textarea[data-v-08c4c044]::-moz-placeholder{color:#7d858c}input[type=email][data-v-08c4c044]:-ms-input-placeholder,input[type=number][data-v-08c4c044]:-ms-input-placeholder,input[type=password][data-v-08c4c044]:-ms-input-placeholder,input[type=text][data-v-08c4c044]:-ms-input-placeholder,textarea[data-v-08c4c044]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-08c4c044]::placeholder,input[type=number][data-v-08c4c044]::placeholder,input[type=password][data-v-08c4c044]::placeholder,input[type=text][data-v-08c4c044]::placeholder,textarea[data-v-08c4c044]::placeholder{color:#7d858c}input[type=email][disabled][data-v-08c4c044],input[type=number][disabled][data-v-08c4c044],input[type=password][disabled][data-v-08c4c044],input[type=text][disabled][data-v-08c4c044],textarea[disabled][data-v-08c4c044]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.change-payment[data-v-08c4c044]{padding-top:10px}.change-payment span[data-v-08c4c044]{font-weight:600}.change-payment a[data-v-08c4c044]{cursor:pointer;font-weight:700}.change-payment a[data-v-08c4c044]:hover{text-decoration:underline}.change-payment a[data-v-08c4c044],.change-payment span[data-v-08c4c044]{color:rgba(27,37,57,.7);font-size:.875em}.card-error-message[data-v-08c4c044]{padding-top:10px}.card-error-message a[data-v-08c4c044],.card-error-message span[data-v-08c4c044]{font-size:.875em;font-weight:600;color:#fd397a}.card-error-message .link[data-v-08c4c044],.card-error-message a[data-v-08c4c044]{text-decoration:underline;cursor:pointer}.card-error-message .link[data-v-08c4c044]:hover,.card-error-message a[data-v-08c4c044]:hover{text-decoration:none}.registered-cards[data-v-08c4c044]{margin-bottom:50px}.register-card[data-v-08c4c044]{margin-bottom:55px}.credit-card[data-v-08c4c044]{display:flex;align-items:center;justify-content:space-between;padding:15px;background:#f4f5f6;border-radius:8px;margin-top:20px}.credit-card.is-error[data-v-08c4c044]{box-shadow:0 0 7px rgba(253,57,122,.3);border:2px solid #fd397a;border-radius:4px}.credit-card span[data-v-08c4c044]{font-weight:700}.credit-card .card-number[data-v-08c4c044]{display:flex}.credit-card .credit-card-numbers[data-v-08c4c044]{vertical-align:middle;margin-right:10px}.credit-card .credit-card-icon[data-v-08c4c044]{vertical-align:middle;max-height:20px;margin-right:8px}.stripe-card[data-v-08c4c044]{box-sizing:border-box;padding:13px 20px;border:1px solid transparent;border-radius:4px;background-color:#fff;box-shadow:0 1px 3px 0 #e6ebf1;transition:box-shadow .15s ease}.stripe-card.is-error[data-v-08c4c044]{box-shadow:0 0 7px rgba(253,57,122,.3);border:2px solid #fd397a;border-radius:4px}.stripe-card.StripeElement--focus[data-v-08c4c044]{box-shadow:0 1px 3px 0 #cfd7df}.stripe-card.StripeElement--invalid[data-v-08c4c044]{border-color:#fa755a}.stripe-card.StripeElement--webkit-autofill[data-v-08c4c044]{background-color:#fefde5!important}.stripe-card iframe .InputContainer .InputElement[data-v-08c4c044]{color:#fff}.summary-list[data-v-08c4c044]{box-shadow:0 7px 20px 5px rgba(26,36,55,.06);border-radius:8px;position:-webkit-sticky;position:sticky;padding:25px;top:30px}.summary-list.is-error[data-v-08c4c044]{border:2px solid #fd397a;box-shadow:0 7px 20px 5px rgba(253,57,122,.06)}.summary-list .error-message[data-v-08c4c044]{font-weight:600}.summary-list .next-submit[data-v-08c4c044]{width:100%;margin-top:20px}.summary-list .disclaimer[data-v-08c4c044]{font-size:.75em;line-height:1.6;display:block;margin-top:12px}.summary-list .row[data-v-08c4c044]{display:flex;justify-content:space-between;padding:15px 0}.summary-list .row[data-v-08c4c044]:first-child{padding-top:0}.summary-list .row[data-v-08c4c044]:last-of-type{border-top:1px solid #f8f8f8;padding-bottom:0}.summary-list .row:last-of-type b[data-v-08c4c044]{font-weight:800}.summary-list .cell b[data-v-08c4c044]{display:block;font-size:1.125em}.summary-list .cell small[data-v-08c4c044]{color:rgba(27,37,57,.7);font-size:.75em}.order[data-v-08c4c044]{display:flex;margin-bottom:30px}.order .steps[data-v-08c4c044]{flex:0 0 65%;padding-right:30px}.order .steps .form[data-v-08c4c044]{max-width:100%}.order .summary[data-v-08c4c044]{flex:0 0 34%}.plan-title[data-v-08c4c044]{text-align:center;max-width:600px;margin:0 auto 80px}.plan-title circle[data-v-08c4c044],.plan-title line[data-v-08c4c044],.plan-title path[data-v-08c4c044],.plan-title polyline[data-v-08c4c044],.plan-title rect[data-v-08c4c044]{color:#00bc7e}.plan-title h1[data-v-08c4c044]{font-size:2.375em;font-weight:800;margin-bottom:5px}.plan-title h2[data-v-08c4c044]{font-size:1.25em;font-weight:500}@media (prefers-color-scheme:dark){.plan-title h1[data-v-08c4c044]{color:#bec6cf}.plan-title h2[data-v-08c4c044]{color:#7d858c}.credit-card[data-v-08c4c044]{background:#1e2024}.credit-card .credit-card-numbers[data-v-08c4c044],.credit-card span[data-v-08c4c044]{color:#bec6cf}.change-payment span[data-v-08c4c044]{color:#7d858c}.change-payment a[data-v-08c4c044]{color:#00bc7e}.summary-list[data-v-08c4c044]{background:#1e2024}.summary-list .disclaimer[data-v-08c4c044]{color:#7d858c}.summary-list .row[data-v-08c4c044]:last-of-type{border-top:1px solid hsla(0,0%,100%,.02)}.summary-list .cell b[data-v-08c4c044],.summary-list .row:last-of-type b[data-v-08c4c044]{color:#bec6cf}.summary-list .cell small[data-v-08c4c044]{color:#7d858c}.stripe-card[data-v-08c4c044]{border:1px solid transparent;box-shadow:none}.stripe-card.StripeElement--webkit-autofill[data-v-08c4c044]{background-color:#1e2024!important}.stripe-card.StripeElement--focus[data-v-08c4c044]{box-shadow:none;border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}}@media only screen and (max-width:960px){.order[data-v-08c4c044]{display:block}.order .steps[data-v-08c4c044]{margin-bottom:70px}}",""])},R4xk:function(a,t,e){var r=e("MbIT");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,i);r.locals&&(a.exports=r.locals)},VNWY:function(a,t,e){"use strict";e("j+Oh")},Xk6H:function(a,t,e){"use strict";e("Idvm")},ZaIx:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".plan[data-v-8b2ebeb2]{text-align:center;flex:0 0 33%;padding:0 25px;margin-bottom:45px}.plan .plan-wrapper[data-v-8b2ebeb2]{box-shadow:0 7px 20px 5px rgba(26,36,55,.03);padding:25px;border-radius:8px;transition:all .3s ease}.plan .plan-wrapper[data-v-8b2ebeb2]:hover{transform:translateY(-20px) scale(1.05);box-shadow:0 15px 25px 5px rgba(26,36,55,.08)}.plan .plan-header .icon circle[data-v-8b2ebeb2],.plan .plan-header .icon line[data-v-8b2ebeb2],.plan .plan-header .icon path[data-v-8b2ebeb2],.plan .plan-header .icon polyline[data-v-8b2ebeb2],.plan .plan-header .icon rect[data-v-8b2ebeb2]{color:#00bc7e}.plan .plan-header .title[data-v-8b2ebeb2]{font-size:1.375em;font-weight:800}.plan .plan-header .description[data-v-8b2ebeb2]{font-size:.875em;font-weight:600}.plan .plan-features[data-v-8b2ebeb2]{margin:65px 0}.plan .plan-features .storage-size[data-v-8b2ebeb2]{font-size:3em;font-weight:900;line-height:1.1}.plan .plan-features .storage-description[data-v-8b2ebeb2]{display:block;font-size:.9375em;font-weight:800}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2]{width:100%;text-align:center}.plan .plan-footer .price[data-v-8b2ebeb2]{color:#00bc7e;font-size:1.125em;display:block;margin-bottom:20px}.plan .plan-footer .price .vat-disclaimer[data-v-8b2ebeb2]{font-size:.6875em;color:#1b2539;display:block;font-weight:300;opacity:.45;margin-top:5px}.plans-wrapper[data-v-8b2ebeb2]{display:flex;flex-wrap:wrap;margin:0 -25px;justify-content:center}@media only screen and (max-width:960px){.plans-wrapper[data-v-8b2ebeb2]{display:block;margin:0}}@media (prefers-color-scheme:dark){.plan .plan-wrapper[data-v-8b2ebeb2]{background:#1e2024}.plan .plan-header .title[data-v-8b2ebeb2]{color:#bec6cf}.plan .plan-header .description[data-v-8b2ebeb2]{color:#7d858c}.plan .plan-features .storage-description[data-v-8b2ebeb2],.plan .plan-features .storage-size[data-v-8b2ebeb2]{color:#bec6cf}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2]{background:rgba(0,188,126,.1)}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2] .content{color:#00bc7e}.plan .plan-footer .price .vat-disclaimer[data-v-8b2ebeb2]{color:#bec6cf}}",""])},eZ9V:function(a,t,e){"use strict";var r={name:"FormLabel",components:{Edit2Icon:e("CjXH").q}},i=(e("Xk6H"),e("KHd+")),n=Object(i.a)(r,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"form-label"},[t("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);t.a=n.exports},"j+Oh":function(a,t,e){var r=e("ZaIx");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,i);r.locals&&(a.exports=r.locals)},kPoH:function(a,t,e){"use strict";var r={name:"ColorLabel",props:["color"]},i=(e("GkQO"),e("KHd+")),n=Object(i.a)(r,(function(){var a=this.$createElement;return(this._self._c||a)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"ffcb2882",null);t.a=n.exports},lig4:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form-label[data-v-c1157a8e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-c1157a8e]{margin-right:10px}.form-label .icon path[data-v-c1157a8e]{stroke:#00bc7e}.form-label .label[data-v-c1157a8e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-c1157a8e]{color:#bec6cf}}",""])},qf9i:function(a,t,e){"use strict";e("KPNK")},wz3J:function(a,t,e){"use strict";var r=e("Nv84"),i=e("CjXH"),n=e("L2JU"),s=e("vDqi"),o=e.n(s);function c(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function l(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var d={name:"PlanPricingTables",components:{HardDriveIcon:i.A,ButtonBase:r.a},data:function(){return{plans:void 0}},computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){l(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(n.b)(["user"])),methods:{selectPlan:function(a){this.$emit("selected-plan",a),this.$router.push({name:"UpgradeBilling"})}},created:function(){var a=this;o.a.get("/api/public/pricing").then((function(t){a.plans=t.data.filter((function(t){return t.data.attributes.capacity>a.user.data.attributes.storage_capacity})),a.$emit("load",!1)}))}},p=(e("VNWY"),e("KHd+")),u=Object(p.a)(d,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.plans?e("div",{staticClass:"plans-wrapper"},a._l(a.plans,(function(t,r){return e("article",{key:r,staticClass:"plan"},[e("div",{staticClass:"plan-wrapper"},[e("header",{staticClass:"plan-header"},[e("div",{staticClass:"icon"},[e("hard-drive-icon",{attrs:{size:"26"}})],1),a._v(" "),e("h1",{staticClass:"title"},[a._v(a._s(t.data.attributes.name))]),a._v(" "),e("h2",{staticClass:"description"},[a._v(a._s(t.data.attributes.description))])]),a._v(" "),e("section",{staticClass:"plan-features"},[e("b",{staticClass:"storage-size"},[a._v(a._s(t.data.attributes.capacity_formatted))]),a._v(" "),e("span",{staticClass:"storage-description"},[a._v(a._s(a.$t("page_pricing_tables.storage_capacity")))])]),a._v(" "),e("footer",{staticClass:"plan-footer"},[e("b",{staticClass:"price"},[a._v("\n                    "+a._s(t.data.attributes.price)+"/"+a._s(a.$t("global.monthly_ac"))+"\n                    "),t.data.attributes.tax_rates.length>0?e("small",{staticClass:"vat-disclaimer"},[a._v(a._s(a.$t("page_pricing_tables.vat_excluded")))]):a._e()]),a._v(" "),e("ButtonBase",{staticClass:"sign-in-button",attrs:{type:"submit","button-style":"secondary"},nativeOn:{click:function(e){return a.selectPlan(t)}}},[a._v("\n                    "+a._s(a.$t("global.get_it"))+"\n                ")])],1)])])})),0):a._e()}),[],!1,null,"8b2ebeb2",null);t.a=u.exports}}]);