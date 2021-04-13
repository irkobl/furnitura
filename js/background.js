"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var a,n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();define(["U","i18n","jquery","lodash","imagelib","uform","settingBackground","stickyPopup","text!html/share/constructor/panels/background.html"],function(e,t,a,n,s,i,r,o,c){var u=function(){function r(e){var t=e.$el,n=e.colorSettings;_classCallCheck(this,r),this.$el=t,this.$body=a("#body"),this.colorSettings=n,this.params=n.params,this.updatePanelSiteSetting(this.params),this._render(),this._addEvents()}return _createClass(r,[{key:"updateSettings",value:function(){return function(e){this.colorSettings.updateSettings(e)}}()},{key:"_render",value:function(){return function(){var a=n.template(c,{__:t,siteTheme:e.params.siteTheme,pageTheme:e.params.pageTheme});this.$el.append(a)}}()},{key:"drawBgColors",value:function(){return function(e){var t=this;a(".js-background-settings-color",t.$el).removeClass(function(e,t){return(t.match(/g-theme-site-\d/)||[]).join(" ")}).addClass(e.theme)}}()},{key:"eventHoverImg",value:function(){return function(e){var t=e.data.constructor;t.params.background.image.length&&a(this).addClass("hovered")}}()},{key:"eventLeaveImg",value:function(){return function(){a(this).removeClass("hovered")}}()},{key:"_addEvents",value:function(){return function(){var e=this,r=this;a(".ul-background-type-switcher",r.$el).on("change.backgroundSetting",function(e){var t=e.target.dataset.bgtype,n="g-theme-block-"+("color"===t?1:5);a(".js-tab-"+t).addClass("active").siblings().removeClass("active"),r.params.bgtype=t,"color"!==t&&a(".js-image-lib-open",r.$el).hasClass("empty")||(r.params.bgtheme=n,r.colorSettings.setBgColors(".js-background-settings-color > li",".js-site-settings-palette"),r.saveParams())}),a(".js-background-settings-color > li",r.$el).on("click.backgroundSetting",function(){var e=a(this);return!e.hasClass("active")&&(e.parent().children("li").removeClass("active"),e.addClass("active"),r.params.bgtheme=e.attr("data-themeBlock"),r.colorSettings.setBgColors(".js-background-settings-color > li",".js-site-settings-palette"),void r.saveParams())}),a(".js-image-lib-open",r.$el).on("click.backgroundSetting",function(){var e=a(this);s.open({multiSelect:!1,apply:function(){return function(t){r.params.background.image!=t[0].origin&&(r.params.background.image=t[0].origin,e.hasClass("empty")&&(e.removeClass("empty"),e.parent().find(".ul-noActive").removeClass("ul-noActive"),e.parent().find(".js-ul-site-styles-image-settings").show()),r.params.bgtype="image",r.params.bgtheme="g-theme-block-5",e.css("background-image","url("+r.params.background.image+")"),r.saveParams())}}()})}),a(".js-this_page input",r.$el).on("change.backgroundSetting",function(){r.params.backgroundInherit=!a(this).is(":checked"),r.saveParams()}),a(".ul-background-image",r.$el).on("mouseover.backgroundSetting",{constructor:r},r.eventHoverImg).on("mouseout.backgroundSetting",r.eventLeaveImg),a(".js-ul-site-styles-image-settings",r.$el).on("click.backgroundSetting",function(e){var n={params:a.extend(!0,{},r.params)},s=a(this),c=a(this).closest(".ul-background-image");a(".ul-background-image",r.$form).off("mouseover.backgroundSetting",r.eventHoverImg).off("mouseout.backgroundSetting",r.eventLeaveImg);var u=a(this).closest(".ul-background-image").find(".js-image-lib-open").hasClass("empty");return!u&&(o.open({context:r,title:t("constructor.thin settings"),required:"settingBackground",templateUrl:"text!./html/constructor/backgroundSettings.html",templateData:{params:r.params,__:t},$targetEl:a(this),saveBtn:!1,wide:!1,afterOpen:function(){return function(){c.addClass("hovered"),s.addClass("active")}}(),beforeApply:function(){return function(){}}(),close:function(){return function(){s.removeClass("active");var e=i.formParse(a(".ul-block-styles-image")),t=/^#(?:[a-fA-F0-9]{6})$/i;t.test(e.params.background.color)||(e.params.background.color=n.params.background.color),r.updateSettings(e.params),r.saveParams(),n=null,c.removeClass("hovered"),s.removeClass("active"),a(".ul-background-image",r.$form).on("mouseover.backgroundSetting",{constructor:r},r.eventHoverImg).on("mouseout.backgroundSetting",r.eventLeaveImg)}}(),apply:function(){return function(){s.removeClass("active");var e=i.formParse(a(".ul-block-styles-image")),t=/^#(?:[a-fA-F0-9]{6})$/i;t.test(e.params.background.color)||(e.params.background.color=n.params.background.color),r.updateSettings(e.params),r.saveParams(),n=null}}()}),void e.stopPropagation())}),a(document).on("updatePanelSiteSetting.backgroundSetting",function(t,a){e.updateSettings(a.data),e.updatePanelSiteSetting(a.data)}),a(document).on("siteChanged.siteSetting",function(e,t){r.updatePanelSiteSetting(t),t&&"undefined"!=typeof t.customColorScheme&&r.drawBgColors(n.pick(t,["theme"]))})}}()},{key:"updatePanelSiteSetting",value:function(){return function(t){var n=this;t&&(a.extend(!0,e.params.pageTheme,t),!a('li[data-themeblock="'+t.bgtheme+'"]',n.$el).hasClass("active")&&(a(".js-background-settings-color",n.$el).find(".active").removeClass("active"),a('li[data-themeblock="'+t.bgtheme+'"]',n.$el).addClass("active"),"g-theme-block-5"==t.bgtheme?(a(".js-image-background-setting",n.$el).css({"min-width":a(".js-image-background-setting",n.$el).width()}),a(".js-image-background-setting",n.$el).show(),a(".js-image-background-setting",n.$el).css({"min-width":""})):(a(".js-image-background-setting",n.$el).css({"min-width":a(".js-image-background-setting",n.$el).width()}),a(".js-image-background-setting",n.$el).hide(),a(".js-image-background-setting",n.$el).css({"min-width":""}))),!a(".js-this_page",n.$el).find("input").is(":checked")&&t.backgroundInherit?a(".js-this_page",n.$el).find("input").prop("checked",!0):a(".js-this_page",n.$el).find("input").is(":checked")&&t.backgroundInherit&&a(".js-this_page",n.$el).find("input").removeAttr("checked"))}}()},{key:"saveParams",value:function(){return function(){var e=this;e.$body.trigger("saveSiteSettings",{id:null,settings:e.colorSettings.getSettings()})}}()},{key:"setParams",value:function(){return function(){var e=this;e.$body.trigger("setSiteSettings",{id:null,settings:e.colorSettings.getSettings()})}}()},{key:"destroy",value:function(){return function(){a(this.$el).off(".backgroundSetting"),this.$el.remove()}}()}]),r}();return u});
//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map
