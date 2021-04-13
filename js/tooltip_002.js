"use strict";define("device/tooltips",["jquery","_","i18n","tpl!constructor/device/tooltip","css!/css/require/device/tooltip.css"],function(e,i,t,o){return{TOP_ICON:5,TOP_TEXT:20,isShow:!1,show:function(){return function(n){var c=this;if(c.isShow&&c.hide(),"desktop"!==n&&e('.ul-main-menu .js-panel-action[data-panel="panelDevice"]').length){var l=e('.ul-main-menu .js-panel-action[data-panel="panelDevice"]').position().top;c.$el||(c.$el=e(i.template(o,{__:t,device:n})),c.$el.appendTo(document.body)),c.$el.find(".ul-device-tooltip__content").css("top",l+c.TOP_ICON),c.$el.find(".js-device-tooltip__icon").css("top",l+c.TOP_TEXT),c.isShow=!0,setTimeout(function(){c.$el.attr("data-is-inside","true").attr("data-is-visible","true")},100),e(document).one("click.deviceTooltip",c.hide.bind(c)),c.$el.one("click.deviceTooltip",".js-device-tooltip__icon",function(){require(["device/settings"],function(e){e.open()})})}}}(),hide:function(){return function(){var i=this;i.isShow=!1,e(document).off(".deviceTooltip"),i.$el.off(".deviceTooltip").removeAttr("data-is-visible"),i.$el=null}}()}});
//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map
