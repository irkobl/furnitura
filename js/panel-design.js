"use strict";define("panelDesign",["U","jquery","i18n","colorSettings","js/constructor/panels/panel-design/typography","js/constructor/panels/panel-design/headerFooter","js/constructor/panels/panel-design/site-settings","js/constructor/panels/panel-design/color-scheme","js/constructor/panels/panel-design/background","js/constructor/panels/panel-design/templateChange","ul-framework/groupFold","ul-framework/scrollbar"],function(e,t,n,s,i,a,l,o,r,d,c,h){var p={inited:!1,loadThemeParams:function(){return function(){return new Promise(function(n){t.ajax({url:"/sites/url/"+e.params.site+"/pages/id/"+e.params.pageId+"/theme",api:!0,ok:function(){return function(e){s.params=e,n(e)}}()})})}}(),init:function(){return function(){var o=this;this.$el=t(".js-panelDesign"),this.$scrollable=t(".js-panelDesign-scrollable"),h.create(this.$scrollable,{marginStart:15,marginEnd:15},{suppressScrollX:!0}),c({$el:this.$el,titleStyle:"h2",foldingRemember:{isEnabled:!0,key:"panelDesignGroupFold"},titleDivider:{isWide:!0,isAlwaysShown:!0},items:[{id:"color",title:n("constructor.panel-design.colors"),attributes:"",contentHTML:'<div class="js-panel--color-scheme"></div><div class="js-panel--background-site"></div>',isFolded:!1,isDisabled:!1},{id:"typography",title:n("constructor.panel-design.fonts"),attributes:"",contentHTML:'<div id="ul-typography" class="js-typography"></div>',isFolded:!0,isDisabled:!1},{id:"headerFooter",title:n("constructor.panel-design.header and footer"),attributes:"",contentHTML:'<div id="ul-headerFooter" class="js-headerFooter"></div>',isFolded:!0,isDisabled:!1},{id:"siteSettings",title:n("constructor.panel-design.advanced"),attributes:"",contentHTML:'<div class="js-panel--siteSettingsPanel"></div>',isFolded:!0,isDisabled:!1},{id:"templateChange",title:n("constructor.panel-design.template"),attributes:"",contentHTML:'<div class="js-panel--templateChange"></div>',isFolded:!0,isDisabled:!1}],callbacks:{whileFoldToggling:function(){return function(){h.update(o.$scrollable)}}()}}),this.loadThemeParams().then(function(){var e=o.$el.find(".js-panel--background-site");o.backgroundSitePanel=new r({$el:e,colorSettings:s});var t=o.$el.find(".js-panel--siteSettingsPanel");o.siteSettingPanel=new l({$el:t,colorSettings:s})}),this.typographyPanel=new i(this.$el.find(".js-typography")),this.headerFooterPanel=new a(this.$el.find(".js-headerFooter")),e.params.template?this._createAdditionalyInstance():t(document).one("changePage",this._createAdditionalyInstance.bind(this))}}(),_createAdditionalyInstance:function(){return function(){this.colorSchemePanel=new o(this.$el.find(".js-panel--color-scheme")),this.templateChange=new d(this.$el.find(".js-panel--templateChange")),h.update(this.$scrollable)}}(),deinit:function(){return function(){this.$el.is(":empty")||(h.destroy(this.$scrollable),this.typographyPanel.destroy(),delete this.typographyPanel,this.headerFooterPanel.destroy(),delete this.headerFooterPanel,this.siteSettingPanel.destroy(),delete this.siteSettingPanel,this.colorSchemePanel.destroy(),delete this.colorSchemePanel,this.backgroundSitePanel.destroy(),delete this.backgroundSitePanel,this.templateChange.destroy(),delete this.templateChange,this.$el.empty())}}()};return p});
//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map

//# sourceMappingURL=panel-design.js.map
