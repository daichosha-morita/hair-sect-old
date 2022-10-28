import{e as i,a}from"./index.4776f7d5.js";import{C as r,g as l,P as d}from"./index.4a5acef5.js";import{B as c}from"./Checkbox.93944087.js";import{B as u}from"./RadioToggle.18d51233.js";import{C as p}from"./Card.a455f6aa.js";import{C as _}from"./PostTypeOptions.2133d15e.js";import{C as h}from"./ProBadge.d6147ee5.js";import{C as m}from"./SettingsRow.8a127375.js";import{C as g}from"./Tooltip.060399ab.js";import{n as $}from"./vueComponentNormalizer.58b0a173.js";import"./isArrayLikeObject.5268a676.js";import"./default-i18n.0e73c33c.js";import"./client.d00863cc.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./constants.9efee5f7.js";import"./portal-vue.esm.272b3133.js";import"./Checkmark.627d69a4.js";import"./Slide.8aaa5049.js";import"./HighlightToggle.af16c79b.js";import"./Radio.fa2678ef.js";import"./Row.dfea53f7.js";var v=function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"aioseo-advanced"},[t("core-card",{attrs:{slug:"advanced","header-text":s.strings.advanced}},[t("core-settings-row",{attrs:{name:s.strings.truSeo},scopedSlots:s._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:s.options.advanced.truSeo,callback:function(e){s.$set(s.options.advanced,"truSeo",e)},expression:"options.advanced.truSeo"}}),t("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.truSeoDescription)+" ")])]},proxy:!0}])}),t("core-settings-row",{attrs:{name:s.strings.headlineAnalyzer},scopedSlots:s._u([{key:"content",fn:function(){return[t("base-toggle",{attrs:{disabled:s.versionCompare(s.$aioseo.wpVersion,"5.2","<")},model:{value:s.options.advanced.headlineAnalyzer,callback:function(e){s.$set(s.options.advanced,"headlineAnalyzer",e)},expression:"options.advanced.headlineAnalyzer"}}),t("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.headlineAnalyzerDescription)+" ")]),s.versionCompare(s.$aioseo.wpVersion,"5.2","<")?t("core-alert",{staticClass:"warning",attrs:{type:"yellow"}},[t("div",{domProps:{innerHTML:s._s(s.strings.headlineAnalyzerWarning)}})]):s._e()]},proxy:!0}])}),t("core-settings-row",{attrs:{name:s.strings.postTypeColumns},scopedSlots:s._u([{key:"content",fn:function(){return[t("base-checkbox",{attrs:{size:"medium"},model:{value:s.options.advanced.postTypes.all,callback:function(e){s.$set(s.options.advanced.postTypes,"all",e)},expression:"options.advanced.postTypes.all"}},[s._v(" "+s._s(s.strings.includeAllPostTypes)+" ")]),s.options.advanced.postTypes.all?s._e():t("core-post-type-options",{attrs:{options:s.options.advanced,type:"postTypes"}}),t("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.selectPostTypes)+" "),t("span",{domProps:{innerHTML:s._s(s.$links.getDocLink(s.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesColumns",!0))}})])]},proxy:!0}])}),t("core-settings-row",{scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.taxonomyColumns)+" "),s.isUnlicensed?t("core-pro-badge"):s._e()]},proxy:!0},{key:"content",fn:function(){return[s.isUnlicensed?t("base-checkbox",{attrs:{disabled:"",size:"medium",value:!0}},[s._v(" "+s._s(s.strings.includeAllTaxonomies)+" ")]):s._e(),s.isUnlicensed?s._e():t("base-checkbox",{attrs:{size:"medium"},model:{value:s.options.advanced.taxonomies.all,callback:function(e){s.$set(s.options.advanced.taxonomies,"all",e)},expression:"options.advanced.taxonomies.all"}},[s._v(" "+s._s(s.strings.includeAllTaxonomies)+" ")]),!s.options.advanced.taxonomies.all&&!s.isUnlicensed?t("core-post-type-options",{attrs:{options:s.options.advanced,type:"taxonomies"}}):s._e(),t("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.selectTaxonomies)+" "),t("span",{domProps:{innerHTML:s._s(s.$links.getDocLink(s.$constants.GLOBAL_STRINGS.learnMore,"selectTaxonomiesColumns",!0))}})]),s.isUnlicensed?t("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[t("div",{domProps:{innerHTML:s._s(s.strings.taxonomyColumnsUpsell)}})]):s._e()]},proxy:!0}])}),t("core-settings-row",{attrs:{align:""},scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.adminBarMenu)+" "),s.isUnlicensed?t("core-pro-badge"):s._e()]},proxy:!0},{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{disabled:s.isUnlicensed,name:"adminBarMenu",options:[{label:s.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:s.adminBarMenu,callback:function(e){s.adminBarMenu=e},expression:"adminBarMenu"}}),t("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.adminBarMenuDescription)+" ")]),s.isUnlicensed?t("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[t("div",{domProps:{innerHTML:s._s(s.strings.adminBarMenuUpsell)}})]):s._e()]},proxy:!0}])}),t("core-settings-row",{attrs:{align:""},scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.dashboardWidgets)+" "),s.isUnlicensed?t("core-pro-badge"):s._e()]},proxy:!0},{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{disabled:s.isUnlicensed,name:"dashboardWidgets",options:[{label:s.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:s.dashboardWidgets,callback:function(e){s.dashboardWidgets=e},expression:"dashboardWidgets"}}),t("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.dashboardWidgetsDescription)+" ")]),s.isUnlicensed?t("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[t("div",{domProps:{innerHTML:s._s(s.strings.dashboardWidgetsUpsell)}})]):s._e()]},proxy:!0}])}),t("core-settings-row",{attrs:{name:s.strings.announcements,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"announcements",options:[{label:s.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:s.options.advanced.announcements,callback:function(e){s.$set(s.options.advanced,"announcements",e)},expression:"options.advanced.announcements"}}),t("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.announcementsDescription)+" ")])]},proxy:!0}])}),s.$isPro?t("core-settings-row",{attrs:{align:""},scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.automaticUpdates)+" ")]},proxy:!0},{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"autoUpdates",options:[{label:s.strings.all,value:"all"},{label:s.strings.minor,value:"minor"},{label:s.strings.none,value:"none",activeClass:"dark"}]},model:{value:s.options.advanced.autoUpdates,callback:function(e){s.$set(s.options.advanced,"autoUpdates",e)},expression:"options.advanced.autoUpdates"}}),t("div",{staticClass:"aioseo-description"},[s.options.advanced.autoUpdates==="all"?t("span",[s._v(s._s(s.strings.allDescription))]):s._e(),s.options.advanced.autoUpdates==="minor"?t("span",[s._v(s._s(s.strings.minorDescription))]):s._e(),s.options.advanced.autoUpdates==="none"?t("span",[s._v(s._s(s.strings.noneDescription))]):s._e()])]},proxy:!0}],null,!1,89936591)}):s._e(),s.$isPro?s._e():t("core-settings-row",{scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.usageTracking)+" "),t("core-tooltip",{scopedSlots:s._u([{key:"tooltip",fn:function(){return[t("div",{domProps:{innerHTML:s._s(s.strings.usageTrackingTooltip)}})]},proxy:!0}],null,!1,1886299547)},[t("svg-circle-question-mark")],1)]},proxy:!0},{key:"content",fn:function(){return[t("base-toggle",{model:{value:s.options.advanced.usageTracking,callback:function(e){s.$set(s.options.advanced,"usageTracking",e)},expression:"options.advanced.usageTracking"}}),t("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.usageTrackingDescription)+" ")])]},proxy:!0}],null,!1,309685458)}),t("core-settings-row",{attrs:{name:s.strings.uninstallAioseo},scopedSlots:s._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:s.options.advanced.uninstall,callback:function(e){s.$set(s.options.advanced,"uninstall",e)},expression:"options.advanced.uninstall"}}),t("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.uninstallAioseoDescription)+" ")])]},proxy:!0}])})],1)],1)},y=[];const f={components:{BaseCheckbox:c,BaseRadioToggle:u,CoreAlert:r,CoreCard:p,CorePostTypeOptions:_,CoreProBadge:h,CoreSettingsRow:m,CoreTooltip:g,SvgCircleQuestionMark:l},data(){return{strings:{advanced:this.$t.__("Advanced Settings",this.$td),truSeo:this.$t.__("TruSEO Score & Content",this.$td),truSeoDescription:this.$t.__("Enable our TruSEO score to help you optimize your content for maximum traffic.",this.$td),headlineAnalyzer:this.$t.__("Headline Analyzer",this.$td),headlineAnalyzerDescription:this.$t.__("Enable our Headline Analyzer to help you write irresistible headlines and rank better in search results.",this.$td),seoAnalysis:this.$t.__("SEO Analysis",this.$td),postTypeColumns:this.$t.__("Post Type Columns",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.sprintf(this.$t.__("Select which Post Types you want to use the %1$s columns with.",this.$td),"AIOSEO"),usageTracking:this.$t.__("Usage Tracking",this.$td),adminBarMenu:this.$t.__("Admin Bar Menu",this.$td),adminBarMenuDescription:this.$t.sprintf(this.$t.__("This adds %1$s to the admin toolbar for easy access to your SEO settings.",this.$td),"AIOSEO"),dashboardWidgets:this.$t.__("Dashboard Widgets",this.$td),dashboardWidgetsDescription:this.$t.sprintf(this.$t.__("This displays %1$s widgets on the dashboard.",this.$td),"AIOSEO"),announcements:this.$t.__("Announcements",this.$td),announcementsDescription:this.$t.__("This allows you to hide plugin announcements and update details.",this.$td),automaticUpdates:this.$t.__("Automatic Updates",this.$td),all:this.$t.__("All (recommended)",this.$td),allDescription:this.$t.__("You are getting the latest features, bugfixes, and security updates as they are released.",this.$td),minor:this.$t.__("Minor Only",this.$td),minorDescription:this.$t.__("You are getting bugfixes and security updates, but not major features.",this.$td),none:this.$t.__("None",this.$td),noneDescription:this.$t.__("You will need to manually update everything.",this.$td),usageTrackingDescription:this.$t.__("By allowing us to track usage data we can better help you because we know with which WordPress configurations, themes and plugins we should test.",this.$td),usageTrackingTooltip:this.$t.sprintf(this.$t.__("Complete documentation on usage tracking is available %1$shere%2$s.",this.$td),this.$t.sprintf('<strong><a href="%1$s" target="_blank">',this.$links.getDocUrl("usageTracking")),"</a></strong>"),adminBarMenuUpsell:this.$t.sprintf(this.$t.__("This Admin Bar feature is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"admin-bar-menu",!0)),dashboardWidgetsUpsell:this.$t.sprintf(this.$t.__("The Dashboard Widget feature is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"dashboard-widget",!0)),taxonomyColumns:this.$t.__("Taxonomy Columns",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.sprintf(this.$t.__("Select which Taxonomies you want to use the %1$s columns with.",this.$td),"AIOSEO"),taxonomyColumnsUpsell:this.$t.sprintf(this.$t.__("This feature is only for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"taxonomy-columns",!0)),uninstallAioseo:this.$t.sprintf(this.$t.__("Uninstall %1$s",this.$td),"AIOSEO"),uninstallAioseoDescription:this.$t.sprintf(this.$t.__("Check this if you would like to remove ALL %1$s data upon plugin deletion. All settings and SEO data will be unrecoverable.",this.$td),"AIOSEO"),headlineAnalyzerWarning:this.$t.sprintf(this.$t.__("The Headline Analyzer is only available in %1$s and up. %2$s",this.$td),"WordPress 5.2",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"updateWordPress",!0))}}},computed:{...i(["settings","isUnlicensed"]),...a(["options"]),adminBarMenu:{get(){return this.isUnlicensed?!0:this.options.advanced.adminBarMenu},set(s){this.options.advanced.adminBarMenu=s}},dashboardWidgets:{get(){return this.isUnlicensed?!0:this.options.advanced.dashboardWidgets},set(s){this.options.advanced.dashboardWidgets=s}}},methods:{versionCompare:d}},o={};var b=$(f,v,y,!1,T,null,null,null);function T(s){for(let n in o)this[n]=o[n]}const j=function(){return b.exports}();export{j as default};
