"use strict";define("panelDevice",["jquery","asyncjs","U","_","i18n","widget","text!./html/constructor/device/panelDevice.html"],function(e,t,i,n,a,c,d){var o={_getAbsListWidget:function(){return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){},t=[];i.widget.getWidgets(function(i){Object.keys(i).map(function(e){i[e].data&&i[e].data.abs&&t.push(i[e])}),e(t)})}}(),init:function(){return function(){var c=this;t.parallel({absWidgetList:function(){return function(e){c._getAbsListWidget(function(t){e(null,t)})}}()},function(t,o){var s=["backCall","liveChat","jivosite","liveAgent","addThisShareBar","uSocial"];if(c.absWList=o.absWidgetList,c.$el.empty(),0<c.absWList.length&&"desktop"!==i.constructor.deviceMode.device){var r=n.filter(c.absWList,function(e){return e.data.showMobile});r.length||(c.absWList[0].data.showMobile=!0,c.absWList[0].save(function(){c.absWList[0].render()}))}e(n.template(d,{activeDevice:i.constructor.deviceMode.device,i18nDevice:a("constructor.deviceMode.panelDevice"),absWidgetList:o.absWidgetList.filter(function(e){return"cart"!==e.field}).sort(function(e,t){return s.indexOf(e.field)-s.indexOf(t.field)}),isHiddenDeviceBlock:i.params.isHiddenDeviceBlock})).appendTo(c.$el),c.addEventListener()})}}(),addEventListener:function(){return function(){var t=this;this.$el.off(".deviceMode").off(".changeAbsVisible").on("change.deviceMode",'input[type=radio][name="device"]',function(){var t=e(this).attr("data-device");i.constructor.setDevice(t,"panelDevice"),window.analyticsHandler("googleTagManager.mainId","push",{event:"constructor",eventCategory:"adaptive",eventAction:t})}).on("click.deviceMode",".js-hdden-elements",function(){var t=e(this).prop("checked");t?(e(".js-hidden-device-element").not(".ul-widget").removeClass("hiddenContainer"),e('[data-hidden="true"]').attr("data-grayscale",t)):(e(".js-hidden-device-element").not(".ul-widget").addClass("hiddenContainer"),e('[data-hidden="true"]').attr("data-grayscale",t)),i.params.isHiddenDeviceBlock=t,i.constructor.hideDeviceBlock(t),i.constructor.posContainerHandler()}).on("change.changeAbsVisible",".js-select",function(){var n=e(":checked",e(this)).attr("data-w-id");n?(t.w=i.widget.get(n),e.each(t.absWList,function(e,t){t.data.showMobile&&n!==t.id&&(t._fetchDataOptions(),t.data.showMobile=!1,t.save(function(){t.render()}))}),t.w._fetchDataOptions(),t.w.data.showMobile=!0,t.w.save(function(){t.w.render()})):t.w&&(t.w.data.showMobile=!1,t.w.save(function(){t.w.render()}),t.w=null)}),e(window).on("changeDeviceModeAutoChange.deviceMode",function(){e(".js-panel-device-wrapper",t.$el).replaceWith(e(n.template(d,{activeDevice:i.constructor.deviceMode.device,i18nDevice:a("constructor.deviceMode.panelDevice"),absWidgetList:t.absWList.filter(function(e){return"cart"!==e.field}),isHiddenDeviceBlock:i.params.isHiddenDeviceBlock})))}).on("widgetRemoved",this.init.bind(this))}}(),deinit:function(){return function(){this.$el.off(".deviceMode").off(".changeAbsVisible")}}()};return o});
//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map

//# sourceMappingURL=panel-device.js.map
