"use strict";define("blockSettingsStructure",["jquery","U","i18n","uform","ul-framework","stickyPopup","cropModes","customClasses"],function(t,e,r,a,s,n,o,i){var c={params:{},init:function(){return function(e){var r=this;r.constructor=e,r.$form=t("#ul-panelDialog"),r.$body=t("#body"),r.id=t(".js-wrap-block-setting",r.$form).attr("data-id"),r.params=e.blockSettings[r.id],i.init({$target:t(".js-wrap-block-setting",r.$form),block:r.params,beforeSave:function(){return function(e){e.forEach(function(e){t("#"+r.id).toggleClass(e)})}}(),afterSave:function(){return function(){r.params.customClasses.forEach(function(e){t("#"+r.id).toggleClass(e)}),r.saveParams()}}()}),r._addEvents(),t(document).data("disableCtrlZ",!0)}}(),_addEvents:function(){return function(){var e=this;t("[ul-model]",e.$form).on("change.structureSettings",{structure:e},e.eventsActions.changeParams),t(document).on("setBlockSettingsStructure.structureSettings",{me:e},e.eventsActions.setSettings),t(document).on("click.structureSettings",".js-block-form-scroll",{me:e},e.eventsActions.scrollBlock)}}(),eventsActions:{changeParams:function(){return function(r){var s=r.data.structure,n=function(){return function(){var e=a.formParse(s.$form);e.params.fluid=JSON.parse(e.params.fluid),e.params.offset=JSON.parse(e.params.offset),e.params.is100vhEnabled=JSON.parse(e.params.is100vhEnabled),e.params.verticalAlign=JSON.parse(e.params.verticalAlign),e.params.justifyHeight=JSON.parse(e.params.justifyHeight),t.extend(s.params,e.params),s.saveParams(),o.recalcAll()}}();e.limiter(n(),300)}}(),setSettings:function(){return function(t,e){var r=t.data.me;r.id!==e.id||JSON.stringify(r.params)===JSON.stringify(e.settings)||(r.params=e.settings,r.reRender(r.params))}}(),scrollBlock:function(){return function(a){function o(t,e){return t&&"g-theme-block-0"!==t?t:e}var i=a.data.me,c=i.constructor.siteSettings,l=i.params,u=l.theme,m=l.mediaParams,f=l.scrollButton,g=l.siteTheme,d=void 0===g?c.theme:g,p=o(u,c.bgtheme),v=Object.keys(m).reduce(function(t,e){var r=m[e].theme,a=o(r,c.bgtheme);return t[e]=a,t},{});n.open({title:r("constructor.ico"),templateUrl:"text!/html/constructor/blockSettings/popup/blockScroll.html",templateData:{isULanding:e.params.isULanding,__:r,theme:u,scrollButton:f,siteTheme:d,dataTheme:v,themeClass:p},wide:!1,saveBtn:!1,$targetEl:t(this),afterOpen:function(){return function(){s.range.init(),t(a.target).addClass("ul-block-scroll-control-active"),t(".js-scrollButton-range").on("changeImmediate",function(e,r){t('input[name="scrollButton-size"]').val(r.val).trigger("change")}),t(".js-colors li").on("click",function(e){var r=t(e.target);r=r.is("span")?r.parent():r,t('input[name="scrollButton-color"]').val(r.attr("class")).trigger("change"),r.siblings().removeClass("active"),r.addClass("active")}),"image-icon"===i.params.scrollButton.type&&t(".js-colors").addClass("ul-colors--image").attr("title",r("constructor.block-settings.block scroll icon.color image"))}}(),beforeClose:function(){return function(){t(a.target).removeClass("ul-block-scroll-control-active")}}()})}}()},saveParams:function(){return function(){var t=this;t.constructor.saveBlockSettingsStructure(t.id,t.params)}}(),destroy:function(){return function(){var e=this;e.saveParams(),t("[ul-model]",e.$form).off(".structureSettings"),t(document).off(".structureSettings").data("disableCtrlZ",!1),i.destroy()}}()};return c});
//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map

//# sourceMappingURL=structure.js.map
