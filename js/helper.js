"use strict";define("device-helper",["jquery","U","_","i18n","nf","device-absWidget","constructorLogger"],function(e,t,i,o,n,r,c){return{$body:e("#body"),_getPageId:function(){return function(){return t.params.pages.find(function(e){return e.id===t.params.pageId})._id}}(),_getDataDeviceHiddenSetting:function(){return function(e){var t={};try{t=JSON.parse(e.attr("data-device-hidden"))}catch(i){console.error("deviceHidden JSON parse failed")}return t}}(),hideShowNode:function(){return function(i,o,n){var r=this,c=r._getDataDeviceHiddenSetting(o);c=e.extend(!0,{desktop:!1,phone:!1,tablet:!1},c);var d=t.constructor.deviceMode.device;c[d]=!0!==c[d];var a=o.attr("id");a||(o.is("header")?a="header":o.is("footer")&&(a="footer")),r[n](a,c)}}(),hideShowNodeAll:function(){return function(t,i,o){var n=this._getDataDeviceHiddenSetting(i);n=e.extend(!0,n,{desktop:!0,phone:!0,tablet:!0});var r=i.attr("id");r||(i.is("header")?r="header":i.is("footer")&&(r="footer")),this[o](r,n)}}(),hideShowDomNode:function(){return function(i,o,n,r){var c=e("#"+i);if(c.length||(c=e(n)),c.attr("data-device-hidden",JSON.stringify(o)),t.params.isHiddenDeviceBlock||c.addClass("hiddenContainer"),c.addClass("hidden-elements-device js-hidden-device-element"),c.hasClass("ul-widget")&&"tablet"===t.constructor.deviceMode.device){var d=c.closest(".ul-col"),a=6;t.constructor.REG_CLASS_SM.exec(d.attr("class"))&&6!==parseInt(t.constructor.REG_CLASS_SM.exec(d.attr("class"))[1])&&(a=12);var s=!1,l=d.find(".ul-widget"),u=0;e.each(l,function(i,o){JSON.parse(e(o).attr("data-device-hidden"))[t.constructor.deviceMode.device]&&u++}),u===d.children(".ul-widget").length&&(s=!0);var v=d.length;v&&(d.closest("header").length&&(v=0),d.closest("footer").length&&(v=0));var h=d.find("[data-device-hidden*='\"tablet\":false']").length;if(v){var g=t.widget._getSiblingResize(d,a);g&&s?t.constructor.__setColSize(d,g,0,12):r?!h&&t.constructor.__setColSize(d,d,r,r):t.constructor.__setColSize(d,d,0,0)}}e(".js-block-container .ul-row").length&&this.addMarkHide(e(".js-block-container .ul-row")),t.constructor.posContainerHandler()}}(),addMarkHide:function(){return function(i){this.clearMarkHide(),e.each(i,function(i,o){var n=e(o).find(".ul-col"),r=n.length,c=0,d={tablet:"sm",phone:"xs"},a=0;e.each(n,function(i,o){var n=e(o).find(".ul-widget");a=0,e.each(n,function(i,o){JSON.parse(e(o).attr("data-device-hidden"))[t.constructor.deviceMode.device]&&a++}),a===e(o).children(".ul-widget").length&&e(o).addClass("js-hide-all-w js-hide-all-w-"+d[t.constructor.deviceMode.device]),e(o).hasClass("js-hide-all-w")&&c++}),r===c&&e(o).addClass("ul-hide-all-col ul-hide-all-col-"+{tablet:"sm",phone:"xs"}[t.constructor.deviceMode.device])})}}(),clearMarkHide:function(){return function(){var t=e(".js-hide-all-col"),i=e(".js-hide-all-w");i.removeClass("ul-hide-all-col-xs").removeClass("js-hide-all-col").removeClass("ul-hide-all-col-sm").removeClass("js-hide-all-w").removeClass("js-hide-all-w-xs").removeClass("js-hide-all-w-sm"),t.removeClass("ul-hide-all-col-xs").removeClass("js-hide-all-col").removeClass("ul-hide-all-col-sm").removeClass("js-hide-all-w").removeClass("js-hide-all-w-xs").removeClass("js-hide-all-w-sm")}}(),onConstructorDevice:function(){return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"desktop";this.$body.attr("data-device",e)}}(),isDraggableWidget:function(){return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0;this.$body.attr("isHiddenBlockDevice",e)}}(),setDefaultDeviceSettings:function(){return function(){t.constructor.deviceMode={device:"desktop",panel:"panelConstructor",isPanelConstructorEditable:!0}}}(),resizeWindowSetDevice:function(){return function(){this.resizeDeviceInit=!0;var c=this;t.constructor.deviceMode||this.setDefaultDeviceSettings();var d=function(){return function(e){if(t.constructor.deviceMode&&!t.constructor.activeDrag&&!t.constructor.activeResize&&!t.constructor.activeAutocrop){var i="";if(500>=e&&"phone"!==t.constructor.deviceMode.device?(c.previewDevice=t.constructor.deviceMode.device,i="phone"):837>=e&&e>=501&&"tablet"!==t.constructor.deviceMode.device?(c.previewDevice=t.constructor.deviceMode.device,i="tablet"):e>=838&&"desktop"!==t.constructor.deviceMode.device&&(c.previewDevice=t.constructor.deviceMode.device,i="desktop"),i.length){if(c.notifyShow&&c.notifyShow===i)return;c.notifyShow=i;var r=o("constructor.deviceMode.the size of the browser is device, go to the appropriate mode",o("constructor.deviceMode.deviceDative."+i));n.notify(r,"default",{timeout:4e3})}}}}(),a=function(){return function(i){"desktop"===t.constructor.deviceMode.device?r.absClearDevicePosition():(e(".ul-absolute-widgets.ul-col").css({opacity:0}),e(".upbutton-container").css({opacity:0}),c.resizeWindow&&clearTimeout(c.resizeWindow),c.resizeWindow=setTimeout(function(){"phone"===t.constructor.deviceMode.device?r.absGridDevicePositionPhone(i):r.absGridDevicePositionTablet(i)},1e3))}}();e(window).off(".deviceMode"),e(window).on("resize.deviceMode",i.debounce(function(t){if(e(window).width()!==c.windowWidth&&(a(t),c.windowWidth>e(window).width())){var i=280,o=e(window).width();e(".ul-left-panel-hide").length&&(i=48),o-=i,d(o),c.windowWidth=e(window).width()}},50))}}(),updateAbsGrid:function(){return function(){"desktop"===t.constructor.deviceMode.device||(r.absClearDevicePosition(),"tablet"===t.constructor.deviceMode.device?r.absGridDevicePositionTablet():"phone"===t.constructor.deviceMode.device&&r.absGridDevicePositionPhone())}}(),setDevice:function(){return function(i,o){var n=this,d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};e.extend(!0,t.constructor.deviceMode,{isPanelConstructorEditable:"desktop"===i,device:i}),t.constructor.onConstructorDevice(i),e(window).trigger("resizeAllWidgets"),e(window).trigger("changeDeviceMode",i),window.dispatch(window.actions.changeDeviceMode(i,arguments)),r.absClearDevicePosition(),"desktop"===i?t.menu.setPanelDevice(o):(t.constructor.draggableDestroy(),"tablet"===i?r.absGridDevicePositionTablet():r.absGridDevicePositionPhone(),t.menu.setPanelDevice(o),e(".js-block-container .ul-row").length&&this.addMarkHide(e(".js-block-container .ul-row"))),r._getAbsWidgetDeviceVisible().forEach(function(e){e.data&&e.data.showMobile&&t.widget.get(e.id).render()});var a=!1;"desktop"===i&&(a=!0,e(".js-lockPanel",t.menu.$content).remove(),r.absClearDevicePosition(),this.clearMarkHide()),t.widget.getWidgets(function(e){Object.keys(e).map(function(t){e[t].data&&e[t].data.abs&&e[t].render()})}),(e(".ul-container").length||e("#js-blogTheme").length)&&(this.addContainerHandler(e(".ul-container"),!0),this.addHeaderFooterControll(!0));var s=this.getBackgroundSettingBlockList(),l={};s&&(s.forEach(function(e){l[e]=n.getBlockSetting(e,i)}),t.constructor.setBlockSettingsBackground(s,l)),t.constructor.isDraggableWidget(a),t.constructor.posContainerHandler(),c.adminLog("mx setDevice",{device:i},function(e){e&&console.error("setDevice logger.adminLog error",e),d(i)})}}(),getBackgroundSettingBlockList:function(){return function(){var e=this._getPageId(),i=t.params.backgroundParams[e];return i?Object.keys(i):null}}(),getBlockSetting:function(){return function(e,i){var o=this._getPageId(),n=t.params.backgroundParams[o];return n?(n[e]||(n[e]={}),n[e][i]||(n[e][i]={}),n[e][i]):{}}}(),getFloatingBlockParams:function(){return function(e){var t={};try{var i=JSON.parse(e.attr("data-options"));t=i.floating}catch(i){console.error("floating JSON parse failed")}return t}}()}});
//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map

//# sourceMappingURL=helper.js.map
