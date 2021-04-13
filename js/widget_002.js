"use strict";define("device-widget",["jquery","U","logActions","history","device-helper"],function(e,t,i,o,d){return{hideWidget:function(){return function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};return i.add({file:"js/edit/constructorMixins/device/container.js",title:"hideWidget"}),o.pushAndExec({act:"hideWidget",data:{id:t,"new":n,old:d._getDataDeviceHiddenSetting(e("#"+t))}},r)}}(),__hideWidget:function(){return function(i){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};i&&(d.hideShowDomNode(i,o,""+i,12),t.constructor.save({act:"hideWidget",id:i,device:t.constructor.deviceMode.device,pageId:this._getPageId(),nodeSettings:o}),t.constructor.addContainerHandler(e("#"+i).closest(".ul-container")),t.constructor.addHeaderFooterControll(),n())}}(),restoreWidgets:function(){return function(t,n){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){},c={block:d._getDataDeviceHiddenSetting(n)},a=e(".js-hidden-device-element",n);return c.widgets={},e.each(a,function(t,i){c.widgets[e(i).attr("data-widget")]=d._getDataDeviceHiddenSetting(e(i))}),i.add({file:"js/edit/constructorMixins/device/container.js",title:"restoreWidget"}),o.pushAndExec({act:"restoreWidgets",data:{id:n.attr("id"),"new":{desktop:!1,phone:!1,tablet:!1},$block:n,old:c}},r)}}(),__restoreWidgets:function(){return function(i,o,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:function(){},c=this,a=e("#"+i);a.length||(a=n),a.is("header")||a.is("footer")||e(".ul-col",a).each(function(){var i=e(this).closest(".ul-col");c._setColSize(i,i,12,12,t.constructor.deviceMode.device)}),e(".js-hidden-device-element",a).attr("data-device-hidden",JSON.stringify(o)).removeClass("hidden hidden-elements-device js-hidden-device-element");var s=[];("header"===a.prop("tagName").toLowerCase()||"footer"===a.prop("tagName").toLowerCase())&&e.each(e(".ul-widget",a),function(t,i){s.push(e(i).attr("id"))}),t.constructor.save({act:"restoreWidgets",pageId:d._getPageId(),device:t.constructor.deviceMode.device,id:i,tagname:a.prop("tagName").toLowerCase(),wList:s}),t.constructor.addContainerHandler(a.closest(".ul-container")),("header"===a.prop("tagName").toLowerCase()||"footer"===a.prop("tagName").toLowerCase())&&t.constructor.addHeaderFooterControll(),a.is("header")||a.is("footer")||d.clearMarkHide(e(".js-block-container .ul-row")),setTimeout(function(){e(window).trigger("resizeAllWidgets")},400),r()}}()}});
//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map

//# sourceMappingURL=widget.js.map
