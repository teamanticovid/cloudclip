(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+VQ5":function(a,e,t){"use strict";t("ReEb")},"2Sb1":function(a,e,t){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:t("CjXH").g}},n=(t("qf9i"),t("KHd+")),o=Object(n.a)(i,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"page-header"},[a.canBack?t("div",{staticClass:"go-back",on:{click:function(e){return a.$router.back()}}},[t("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"aafe7e24",null);e.a=o.exports},"3Idf":function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".page-header[data-v-aafe7e24]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-aafe7e24]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-aafe7e24]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-aafe7e24]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-aafe7e24]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-aafe7e24]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-aafe7e24]{background:#131414}.page-header .title[data-v-aafe7e24]{color:#bec6cf}.page-header .icon path[data-v-aafe7e24]{fill:#00bc7e}}",""])},"4uw6":function(a,e,t){"use strict";t.r(e);var i=t("A5+z"),n=t("t5U/"),o=t("xxrA"),r=t("CjXH"),d={name:"SearchInput",components:{SearchIcon:r.S,XIcon:r.gb},data:function(){return{query:void 0}},methods:{clearInput:function(){this.query=void 0,this.$emit("reset-query")}}},l=(t("8JD1"),t("KHd+")),s=Object(l.a)(d,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"search-bar"},[a.query?a._e():t("div",{staticClass:"icon"},[t("search-icon",{attrs:{size:"19"}})],1),a._v(" "),a.query?t("div",{staticClass:"icon",on:{click:a.clearInput}},[t("x-icon",{staticClass:"pointer",attrs:{size:"19"}})],1):a._e(),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.query,expression:"query"}],staticClass:"query focus-border-theme",attrs:{type:"text",name:"searchInput",placeholder:a.$t("search_translations")},domProps:{value:a.query},on:{input:[function(e){e.target.composing||(a.query=e.target.value)},function(e){return a.$emit("input",a.query)}]}})])}),[],!1,null,"2279b00e",null).exports,c=t("eZ9V"),p=t("D62o"),u=t("Nv84"),b=t("KnjL"),m=t("2Sb1"),v=t("zTYo"),g=t("LvDl"),f=t("xCqy"),h={name:"Language",components:{ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,MobileActionButton:n.a,MobileHeader:p.a,SearchInput:s,SwitchInput:o.a,ButtonBase:u.a,PageHeader:m.a,FormLabel:c.a,PlusIcon:r.O,InfoBox:b.a,Spinner:v.a,XIcon:r.gb},data:function(){return{searchedTranslationResults:void 0,referenceTranslations:void 0,defaultLanguageLocale:void 0,selectedLanguage:void 0,languages:void 0,query:""}},watch:{query:Object(g.debounce)((function(a){this.searchedTranslationResults=Object(g.omitBy)(this.selectedLanguage.data.attributes.translations,(function(e){return!e.toLowerCase().includes(a.toLowerCase())})),document.getElementById("single-page").scrollTop=0}),300)},computed:{isSearching:function(){return this.searchedTranslationResults&&""!==this.query},translationList:function(){return this.isSearching?this.searchedTranslationResults:this.selectedLanguage.data.attributes.translations}},methods:{setDefaultLanguage:function(){this.$updateText("/settings","language",this.selectedLanguage.data.attributes.locale),this.defaultLanguageLocale=this.selectedLanguage.data.attributes.locale,setTimeout((function(){return location.reload()}),500)},getLanguages:function(){var a=this;axios.get("/api/admin/languages").then((function(e){a.languages=e.data.data,a.referenceTranslations=e.data.meta.reference_translations,a.selectedLanguage=e.data.meta.current_language,a.defaultLanguageLocale=e.data.meta.current_language.data.attributes.locale})).catch((function(){a.$isSomethingWrong()}))},getLanguage:function(a){var e=this;this.selectedLanguage=void 0,axios.get("/api/admin/languages/".concat(a.data.id)).then((function(a){e.selectedLanguage=a.data})).catch((function(){e.$isSomethingWrong()}))},deleteLanguage:function(a){f.a.$emit("confirm:open",{title:'Delete "'.concat(a.data.attributes.name,'" language?'),message:"Your language will be permanently deleted.",buttonColor:"danger-solid",action:{id:a.data.id,operation:"delete-language"}})},createLanguage:function(){f.a.$emit("popup:open",{name:"create-language"})}},mounted:function(){var a=this;this.getLanguages(),f.a.$on("reload:languages",(function(){return a.getLanguages()})),f.a.$on("action:confirmed",(function(e){"delete-language"===e.operation&&axios.delete("/api/admin/languages/".concat(e.id)).then((function(){return a.getLanguages()})).catch((function(){return a.$isSomethingWrong()}))}))},destroyed:function(){f.a.$off("action:confirmed")}},x=(t("+VQ5"),Object(l.a)(h,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"single-page"}},[t("div",{attrs:{id:"page-content"}},[t("MobileHeader",{attrs:{title:a.$t("routes_title.language")}}),a._v(" "),t("PageHeader",{attrs:{title:a.$t("routes_title.language")}}),a._v(" "),a.languages?t("div",{staticClass:"content-page"},[t("div",{staticClass:"side-content"},[t("div",{staticClass:"sticky top-65"},[t("div",{staticClass:"languages-wrapper page-tab from-fixed-width"},[t("div",{staticClass:"language-label-wrapper"},[t("label",{staticClass:"language-label"},[a._v(a._s(a.$t("languages")))])]),a._v(" "),t("div",{staticClass:"all-language-wrapper"},a._l(a.languages,(function(e){return t("div",{key:e.data.id,staticClass:"language group",on:{click:function(t){return a.getLanguage(e)}}},[t("label",{staticClass:"name",class:{active:a.selectedLanguage&&a.selectedLanguage.data.attributes.locale===e.data.attributes.locale}},[t("span",{staticClass:"active-text-theme group-hover-text-theme"},[a._v(a._s(e.data.attributes.name))])]),a._v(" "),"en"!==e.data.attributes.locale?t("x-icon",{staticClass:"icon",attrs:{size:"17"},on:{click:function(t){return t.stopPropagation(),a.deleteLanguage(e)}}}):a._e()],1)})),0)]),a._v(" "),t("MobileActionButton",{staticClass:"button-add-language",attrs:{icon:"plus"},nativeOn:{click:function(e){return a.createLanguage.apply(null,arguments)}}},[a._v("\n                        "+a._s(a.$t("add_language"))+"\n                    ")])],1)]),a._v(" "),t("div",{staticClass:"form block-form content"},[t("div",{staticClass:"block-wrapper sticky search-bar-wrapper"},[t("SearchInput",{on:{"reset-query":function(e){a.query=""}},model:{value:a.query,callback:function(e){a.query=e},expression:"query"}})],1),a._v(" "),t("div",{staticClass:"menu-list-wrapper horizontal"},[a._l(a.languages,(function(e){return t("div",{key:e.data.id,staticClass:"menu-list-item link border-bottom-theme",class:{"router-link-active":a.selectedLanguage&&a.selectedLanguage.data.attributes.locale===e.data.attributes.locale},on:{click:function(t){return a.getLanguage(e)}}},[t("div",{staticClass:"label text-theme"},[a._v("\n                            "+a._s(e.data.attributes.name)+"\n                        ")])])})),a._v(" "),t("div",{staticClass:"menu-list-item link border-bottom-theme",on:{click:a.createLanguage}},[t("div",{staticClass:"icon text-theme"},[t("plus-icon",{attrs:{size:"17"}})],1)])],2),a._v(" "),t("div",{staticClass:"dynamic-content"},[a.selectedLanguage?a._e():t("Spinner",{staticClass:"spinner"}),a._v(" "),a.selectedLanguage?t("div",[a.isSearching?a._e():t("div",[t("FormLabel",{attrs:{icon:"settings"}},[a._v("\n                                "+a._s(a.$t("language_settings"))+"\n                            ")]),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("language_name"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Description",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.selectedLanguage.data.attributes.name,expression:"selectedLanguage.data.attributes.name"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:a.$t("admin_settings.appearance.description_plac"),type:"text"},domProps:{value:a.selectedLanguage.data.attributes.name},on:{input:[function(e){e.target.composing||a.$set(a.selectedLanguage.data.attributes,"name",e.target.value)},function(e){return a.$updateText("/admin/languages/"+a.selectedLanguage.data.id,"name",a.selectedLanguage.data.attributes.name)}]}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!1,3770139897)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"inline-wrapper"},[t("div",{staticClass:"switch-label"},[t("label",{staticClass:"input-label"},[a._v("\n                                                "+a._s(a.$t("set_as_default_language"))+":\n                                            ")]),a._v(" "),t("small",{staticClass:"input-help"},[a._v("\n                                                If this language is set as default, app will appear in this language for all users.\n                                            ")])]),a._v(" "),t("SwitchInput",{staticClass:"switch",class:{"disable-switch":a.selectedLanguage.data.attributes.locale===this.defaultLanguageLocale},attrs:{state:a.selectedLanguage.data.attributes.locale===this.defaultLanguageLocale},on:{input:a.setDefaultLanguage}})],1)])]),a._v(" "),t("FormLabel",{staticClass:"mt-70"},[a._v("\n                                "+a._s(a.$t("edit_translations"))+"\n                            ")]),a._v(" "),t("InfoBox",{staticClass:"info-box"},[t("p",[a._v("Please preserve in your translations special string variables defined in format as "),t("b",{staticClass:"text-theme"},[a._v(":variable")]),a._v(" or "),t("b",{staticClass:"text-theme"},[a._v("{variable}")]),a._v(".")])])],1),a._v(" "),a._l(a.translationList,(function(e,i){return t("div",{key:i,staticClass:"block-wrapper"},[t("label",[a._v(" "+a._s(a.referenceTranslations[i])+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",name:"Language string",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var n=e.errors;return[t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.selectedLanguage.data.attributes.translations[i],expression:"selectedLanguage.data.attributes.translations[key]"}],staticClass:"focus-border-theme",class:{"is-error":n[0]},attrs:{rows:a.selectedLanguage.data.attributes.translations[i].length>=80?3:1},domProps:{value:a.selectedLanguage.data.attributes.translations[i]},on:{input:[function(e){e.target.composing||a.$set(a.selectedLanguage.data.attributes.translations,i,e.target.value)},function(e){return a.$updateText("/admin/languages/"+a.selectedLanguage.data.id+"/strings",i,a.selectedLanguage.data.attributes.translations[i])}]}}),a._v(" "),n[0]?t("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1)}))],2):a._e()],1)])]):a._e(),a._v(" "),a.languages?a._e():t("Spinner")],1)])}),[],!1,null,"96dec930",null));e.default=x.exports},"8JD1":function(a,e,t){"use strict";t("tP6m")},B6Jp:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form[data-v-96dec930]{max-width:700px}.form.inline-form[data-v-96dec930]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-96dec930]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-96dec930]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-96dec930]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-96dec930]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-96dec930]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-96dec930]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-96dec930]:last-child{margin-bottom:0}.form.block-form .button[data-v-96dec930]{margin-top:50px}.form .inline-wrapper[data-v-96dec930]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-96dec930]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-96dec930]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-96dec930]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-96dec930]{display:flex}.single-line-form .submit-button[data-v-96dec930]{margin-left:20px}.error-message[data-v-96dec930]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-96dec930]{width:100%}input[type=email][data-v-96dec930],input[type=number][data-v-96dec930],input[type=password][data-v-96dec930],input[type=text][data-v-96dec930],textarea[data-v-96dec930]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-96dec930],input[type=number].is-error[data-v-96dec930],input[type=password].is-error[data-v-96dec930],input[type=text].is-error[data-v-96dec930],textarea.is-error[data-v-96dec930]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-96dec930]::-moz-placeholder,input[type=number][data-v-96dec930]::-moz-placeholder,input[type=password][data-v-96dec930]::-moz-placeholder,input[type=text][data-v-96dec930]::-moz-placeholder,textarea[data-v-96dec930]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-96dec930]:-ms-input-placeholder,input[type=number][data-v-96dec930]:-ms-input-placeholder,input[type=password][data-v-96dec930]:-ms-input-placeholder,input[type=text][data-v-96dec930]:-ms-input-placeholder,textarea[data-v-96dec930]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-96dec930]::placeholder,input[type=number][data-v-96dec930]::placeholder,input[type=password][data-v-96dec930]::placeholder,input[type=text][data-v-96dec930]::placeholder,textarea[data-v-96dec930]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-96dec930]:focus,input[type=number][data-v-96dec930]:focus,input[type=password][data-v-96dec930]:focus,input[type=text][data-v-96dec930]:focus,textarea[data-v-96dec930]:focus{border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}input[type=email][disabled][data-v-96dec930],input[type=number][disabled][data-v-96dec930],input[type=password][disabled][data-v-96dec930],input[type=text][disabled][data-v-96dec930],textarea[disabled][data-v-96dec930]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-96dec930]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-96dec930],.additional-link b[data-v-96dec930]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-96dec930]:hover,.additional-link b[data-v-96dec930]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-96dec930]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-96dec930]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-96dec930],.form textarea[data-v-96dec930]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-96dec930]{display:block}.form.block-form .block-wrapper label[data-v-96dec930]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-96dec930]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-96dec930]{display:block}.form.inline-form .input-wrapper .error-message[data-v-96dec930]{position:relative;bottom:0}.form .button[data-v-96dec930]{padding:14px 32px}.single-line-form[data-v-96dec930]{display:block}.single-line-form .submit-button[data-v-96dec930]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-96dec930],input[type=number][data-v-96dec930],input[type=password][data-v-96dec930],input[type=text][data-v-96dec930],textarea[data-v-96dec930]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-96dec930]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-96dec930]{color:#7d858c}.form.block-form .block-wrapper label[data-v-96dec930],.form .inline-wrapper .switch-label .input-label[data-v-96dec930]{color:#bec6cf}input[type=email][data-v-96dec930],input[type=number][data-v-96dec930],input[type=password][data-v-96dec930],input[type=text][data-v-96dec930],textarea[data-v-96dec930]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-96dec930]::-moz-placeholder,input[type=number][data-v-96dec930]::-moz-placeholder,input[type=password][data-v-96dec930]::-moz-placeholder,input[type=text][data-v-96dec930]::-moz-placeholder,textarea[data-v-96dec930]::-moz-placeholder{color:#7d858c}input[type=email][data-v-96dec930]:-ms-input-placeholder,input[type=number][data-v-96dec930]:-ms-input-placeholder,input[type=password][data-v-96dec930]:-ms-input-placeholder,input[type=text][data-v-96dec930]:-ms-input-placeholder,textarea[data-v-96dec930]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-96dec930]::placeholder,input[type=number][data-v-96dec930]::placeholder,input[type=password][data-v-96dec930]::placeholder,input[type=text][data-v-96dec930]::placeholder,textarea[data-v-96dec930]::placeholder{color:#7d858c}input[type=email][disabled][data-v-96dec930],input[type=number][disabled][data-v-96dec930],input[type=password][disabled][data-v-96dec930],input[type=text][disabled][data-v-96dec930],textarea[disabled][data-v-96dec930]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.router-link-active.border-bottom-theme[data-v-96dec930]{border-bottom-color:#00bc7e!important}.group:hover .group-hover-text-theme[data-v-96dec930],.router-link-active .text-theme[data-v-96dec930]{color:#00bc7e!important}.active .active-text-theme[data-v-96dec930]{color:#00bc7e}.sticky[data-v-96dec930]{position:-webkit-sticky;position:sticky}.top-65[data-v-96dec930]{top:65px}.dynamic-content[data-v-96dec930]{position:relative}.dynamic-content .spinner[data-v-96dec930]{margin-top:0!important}.menu-list-wrapper.horizontal[data-v-96dec930]{display:none}.search-bar-wrapper[data-v-96dec930]{background:#fff;padding:0 10px;margin:0 -10px;top:58px;z-index:3}.content-page[data-v-96dec930]{display:flex;max-width:1000px;margin:20px auto 0}.content-page .content[data-v-96dec930]{width:100%;position:relative}.disable-switch[data-v-96dec930]{cursor:not-allowed}.disable-switch[data-v-96dec930] .text-right{pointer-events:none}.info-box[data-v-96dec930]{margin-bottom:32px}.side-content[data-v-96dec930]{flex:0 0 225px}.side-content .button-add-language[data-v-96dec930]{margin-top:30px}.side-content .languages-wrapper .language-label-wrapper[data-v-96dec930]{margin-bottom:5px}.side-content .languages-wrapper .language-label-wrapper .language-label[data-v-96dec930]{color:#a4adb6;font-weight:700;font-size:.75em;margin-top:20px}.side-content .languages-wrapper .all-language-wrapper .language[data-v-96dec930]{display:flex;align-items:center;padding:12px 25px 12px 0;cursor:pointer}.side-content .languages-wrapper .all-language-wrapper .language:hover .icon[data-v-96dec930]{display:block}.side-content .languages-wrapper .all-language-wrapper .language .name[data-v-96dec930]{color:#1b2539;font-weight:700;font-size:.8125em;cursor:pointer}.side-content .languages-wrapper .all-language-wrapper .language .icon[data-v-96dec930]{display:none;margin-left:auto;cursor:pointer}@media only screen and (max-width:1024px){.wrapper[data-v-96dec930]{flex-direction:column}.wrapper .side-content[data-v-96dec930]{margin-bottom:70px}.wrapper .languages-wrapper[data-v-96dec930]{margin-top:0}}@media only screen and (max-width:790px){.menu-list-wrapper.horizontal[data-v-96dec930]{position:-webkit-sticky;position:sticky;top:120px;display:flex;z-index:7}.menu-list-wrapper.horizontal .menu-list-item[data-v-96dec930]{margin-top:0}.menu-list-wrapper.horizontal .menu-list-item[data-v-96dec930]:last-child{padding-left:0}.content-page[data-v-96dec930]{display:block}.content-page .search-bar-wrapper.desktop[data-v-96dec930],.content-page .side-content[data-v-96dec930]{display:none}.content-page .search-bar-wrapper[data-v-96dec930]{top:60px;margin-bottom:10px!important}.content-page .info-box[data-v-96dec930]{margin-bottom:30px}}@media only screen and (max-width:1024px){.search-bar-wrapper[data-v-96dec930]{top:58px;z-index:7}}@media only screen and (max-width:690px){.menu-list-wrapper.horizontal[data-v-96dec930]{top:95px}.content-page .search-bar-wrapper[data-v-96dec930]{top:35px}}@media (prefers-color-scheme:dark){.search-bar-wrapper[data-v-96dec930]{background:#131414}.language .name[data-v-96dec930]{color:#bec6cf!important}.language-label[data-v-96dec930]{color:#7d858c!important}}",""])},IbyQ:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form[data-v-2279b00e]{max-width:700px}.form.inline-form[data-v-2279b00e]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-2279b00e]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-2279b00e]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-2279b00e]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-2279b00e]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-2279b00e]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-2279b00e]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-2279b00e]:last-child{margin-bottom:0}.form.block-form .button[data-v-2279b00e]{margin-top:50px}.form .inline-wrapper[data-v-2279b00e]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-2279b00e]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-2279b00e]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-2279b00e]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-2279b00e]{display:flex}.single-line-form .submit-button[data-v-2279b00e]{margin-left:20px}.error-message[data-v-2279b00e]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-2279b00e]{width:100%}input[type=email][data-v-2279b00e],input[type=number][data-v-2279b00e],input[type=password][data-v-2279b00e],input[type=text][data-v-2279b00e],textarea[data-v-2279b00e]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-2279b00e],input[type=number].is-error[data-v-2279b00e],input[type=password].is-error[data-v-2279b00e],input[type=text].is-error[data-v-2279b00e],textarea.is-error[data-v-2279b00e]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-2279b00e]::-moz-placeholder,input[type=number][data-v-2279b00e]::-moz-placeholder,input[type=password][data-v-2279b00e]::-moz-placeholder,input[type=text][data-v-2279b00e]::-moz-placeholder,textarea[data-v-2279b00e]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-2279b00e]:-ms-input-placeholder,input[type=number][data-v-2279b00e]:-ms-input-placeholder,input[type=password][data-v-2279b00e]:-ms-input-placeholder,input[type=text][data-v-2279b00e]:-ms-input-placeholder,textarea[data-v-2279b00e]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-2279b00e]::placeholder,input[type=number][data-v-2279b00e]::placeholder,input[type=password][data-v-2279b00e]::placeholder,input[type=text][data-v-2279b00e]::placeholder,textarea[data-v-2279b00e]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-2279b00e]:focus,input[type=number][data-v-2279b00e]:focus,input[type=password][data-v-2279b00e]:focus,input[type=text][data-v-2279b00e]:focus,textarea[data-v-2279b00e]:focus{border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}input[type=email][disabled][data-v-2279b00e],input[type=number][disabled][data-v-2279b00e],input[type=password][disabled][data-v-2279b00e],input[type=text][disabled][data-v-2279b00e],textarea[disabled][data-v-2279b00e]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-2279b00e]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-2279b00e],.additional-link b[data-v-2279b00e]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-2279b00e]:hover,.additional-link b[data-v-2279b00e]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-2279b00e]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-2279b00e]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-2279b00e],.form textarea[data-v-2279b00e]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-2279b00e]{display:block}.form.block-form .block-wrapper label[data-v-2279b00e]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-2279b00e]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-2279b00e]{display:block}.form.inline-form .input-wrapper .error-message[data-v-2279b00e]{position:relative;bottom:0}.form .button[data-v-2279b00e]{padding:14px 32px}.single-line-form[data-v-2279b00e]{display:block}.single-line-form .submit-button[data-v-2279b00e]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-2279b00e],input[type=number][data-v-2279b00e],input[type=password][data-v-2279b00e],input[type=text][data-v-2279b00e],textarea[data-v-2279b00e]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-2279b00e]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-2279b00e]{color:#7d858c}.form.block-form .block-wrapper label[data-v-2279b00e],.form .inline-wrapper .switch-label .input-label[data-v-2279b00e]{color:#bec6cf}input[type=email][data-v-2279b00e],input[type=number][data-v-2279b00e],input[type=password][data-v-2279b00e],input[type=text][data-v-2279b00e],textarea[data-v-2279b00e]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-2279b00e]::-moz-placeholder,input[type=number][data-v-2279b00e]::-moz-placeholder,input[type=password][data-v-2279b00e]::-moz-placeholder,input[type=text][data-v-2279b00e]::-moz-placeholder,textarea[data-v-2279b00e]::-moz-placeholder{color:#7d858c}input[type=email][data-v-2279b00e]:-ms-input-placeholder,input[type=number][data-v-2279b00e]:-ms-input-placeholder,input[type=password][data-v-2279b00e]:-ms-input-placeholder,input[type=text][data-v-2279b00e]:-ms-input-placeholder,textarea[data-v-2279b00e]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-2279b00e]::placeholder,input[type=number][data-v-2279b00e]::placeholder,input[type=password][data-v-2279b00e]::placeholder,input[type=text][data-v-2279b00e]::placeholder,textarea[data-v-2279b00e]::placeholder{color:#7d858c}input[type=email][disabled][data-v-2279b00e],input[type=number][disabled][data-v-2279b00e],input[type=password][disabled][data-v-2279b00e],input[type=text][disabled][data-v-2279b00e],textarea[disabled][data-v-2279b00e]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.search-bar[data-v-2279b00e]{padding:7px 0;position:relative;width:100%;border-radius:8px}.search-bar input[data-v-2279b00e]{background:#f4f5f6;border-radius:8px;outline:0;padding:9px 20px 9px 43px;font-weight:700;font-size:1em;width:100%;height:50px;min-width:175px;transition:all .15s ease;border:1px solid transparent;-webkit-appearance:none;box-shadow:none}.search-bar input[data-v-2279b00e]::-moz-placeholder{color:#a4adb6;font-size:.875em;font-weight:700}.search-bar input[data-v-2279b00e]:-ms-input-placeholder{color:#a4adb6;font-size:.875em;font-weight:700}.search-bar input[data-v-2279b00e]::placeholder{color:#a4adb6;font-size:.875em;font-weight:700}.search-bar input[data-v-2279b00e]:focus{border-width:1px;border-style:solid}.search-bar input:focus+.icon path[data-v-2279b00e]{color:inherit}.search-bar .icon[data-v-2279b00e]{height:100%;position:absolute;top:0;left:0;padding:11px 15px;display:flex;align-items:center}.search-bar .icon circle[data-v-2279b00e],.search-bar .icon line[data-v-2279b00e]{color:#a4adb6}.search-bar .icon .pointer[data-v-2279b00e]{cursor:pointer}@media (prefers-color-scheme:dark){.search-bar input[data-v-2279b00e]{background:#1e2024}}",""])},Idvm:function(a,e,t){var i=t("lig4");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(a.exports=i.locals)},KPNK:function(a,e,t){var i=t("3Idf");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(a.exports=i.locals)},ReEb:function(a,e,t){var i=t("B6Jp");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(a.exports=i.locals)},Xk6H:function(a,e,t){"use strict";t("Idvm")},eZ9V:function(a,e,t){"use strict";var i={name:"FormLabel",components:{Edit2Icon:t("CjXH").q}},n=(t("Xk6H"),t("KHd+")),o=Object(n.a)(i,(function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"form-label"},[e("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),e("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);e.a=o.exports},iD9g:function(a,e,t){var i=t("mE+g");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(a.exports=i.locals)},jIdw:function(a,e,t){"use strict";t("iD9g")},lig4:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form-label[data-v-c1157a8e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-c1157a8e]{margin-right:10px}.form-label .icon path[data-v-c1157a8e]{stroke:#00bc7e}.form-label .label[data-v-c1157a8e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-c1157a8e]{color:#bec6cf}}",""])},"mE+g":function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".mobile-action-button[data-v-50a1066a]{background:#f4f5f6;margin-right:15px;border-radius:8px;padding:7px 10px;cursor:pointer;border:none;transition:all .15s ease}.mobile-action-button .flex[data-v-50a1066a]{display:flex;align-items:center}.mobile-action-button .icon[data-v-50a1066a]{margin-right:10px;font-size:.875em}.mobile-action-button .icon circle[data-v-50a1066a],.mobile-action-button .icon line[data-v-50a1066a],.mobile-action-button .icon path[data-v-50a1066a],.mobile-action-button .icon polyline[data-v-50a1066a],.mobile-action-button .icon rect[data-v-50a1066a]{transition:all .15s ease}.mobile-action-button .label[data-v-50a1066a]{transition:all .15s ease;font-size:.875em;font-weight:700;color:#1b2539}.mobile-action-button[data-v-50a1066a]:active{transform:scale(.95)}@media (prefers-color-scheme:dark){.mobile-action-button[data-v-50a1066a]{background:#1e2024}.mobile-action-button circle[data-v-50a1066a],.mobile-action-button line[data-v-50a1066a],.mobile-action-button path[data-v-50a1066a],.mobile-action-button polyline[data-v-50a1066a],.mobile-action-button rect[data-v-50a1066a]{stroke:#00bc7e}.mobile-action-button .label[data-v-50a1066a]{color:#bec6cf}}",""])},qf9i:function(a,e,t){"use strict";t("KPNK")},"t5U/":function(a,e,t){"use strict";var i=t("CjXH"),n={name:"MobileActionButton",props:["icon"],components:{SortingAndPreviewIcon:t("Fqzo").a,CheckSquareIcon:i.e,CreditCardIcon:i.n,FolderPlusIcon:i.x,UserPlusIcon:i.db,XSquareIcon:i.hb,CheckIcon:i.d,TrashIcon:i.Z,PlusIcon:i.O,ListIcon:i.G,GridIcon:i.z}},o=(t("jIdw"),t("KHd+")),r=Object(o.a)(n,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("button",{staticClass:"mobile-action-button"},[t("div",{staticClass:"flex"},["credit-card"===a.icon?t("credit-card-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"folder-plus"===a.icon?t("folder-plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"th-list"===a.icon?t("list-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"trash"===a.icon?t("trash-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"th"===a.icon?t("grid-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"user-plus"===a.icon?t("user-plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"plus"===a.icon?t("plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"check-square"===a.icon?t("check-square-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"x-square"===a.icon?t("x-square-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"check"===a.icon?t("check-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"preview-sorting"===a.icon?t("sorting-and-preview-icon",{staticClass:"icon preview-sorting",attrs:{size:"15"}}):a._e(),a._v(" "),t("span",{staticClass:"label"},[a._t("default")],2)],1)])}),[],!1,null,"50a1066a",null);e.a=r.exports},tP6m:function(a,e,t){var i=t("IbyQ");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(a.exports=i.locals)}}]);