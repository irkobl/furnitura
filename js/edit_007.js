"use strict";define("widget-goods-edit",["jquery","U","widget","widget-goods-form","widget-goods-view","editor","i18n"],function(e,t,n,i,o,d,r){return{minCols:4,showOnEditPopoverName:null,widgetClass:".ul-widget-goods",init:function(){return function(){this.isListenersAdded||n.widgetNotOvelayEdit(this.widgetName,this.widgetClass)}}(),edit:function(){return function(){var n=this;n.w||(n.w=n),t.cancelCurrentEdit(function(){n.overlay&&n.overlay.close&&n.overlay.close()}),""===n.data.imageCrop&&(n.data.imageCrop=n.data.picture.src),n.isEditing=!0,n.listenersAdded||(n.listenersAdded=!0,n.addListeners()),n.onAfterRender(),require(["panelDialog"],function(t){n.addListenersEdit(),n.w.data.editingMode=!0,n.w.overlay.show({$el:n.w.$el,autohide:!0,beforeClose:function(){return function(){n.w&&n.w.changeLinkPopover&&n.w.changeLinkPopover.destroy()}}(),close:function(){return function(){var o=i.getFormData();n.w.data=e.extend(!0,n.data,o),delete n.w.editing,d.deinit(),t.hide(),delete n.w.data.editingMode,n.saveWidget(),n.w.render(),n.removeListenersEdit(),n.isEditing=!1}}()}),n.getDesigns(function(e,i){t.show({context:n.w,required:["widget-goods-form"],templateUrl:"/widgets/goods/html/form.html",templateData:{data:n.w.data,options:n.w.options,designs:i,canChangeDesign:n.canChangeDesign()},templateCss:["/css/require/widgets/goods.css"],afterOpen:function(){return function(){n.w.editing=!0,n.createPopovers(n.showOnEditPopoverName)}}(),beforeClose:function(){return function(){n.w.editing=!1}}()})})})}}(),createPopovers:function(){return function(e){var t=this;t.w&&t.w.editing&&i.createPopovers(t.w,e)}}(),onBeforeRender:function(){return function(){var e=this;e.w&&e.w.changeLinkPopover&&e.w.changeLinkPopover.hide()}}(),onAfterRender:function(){return function(){var t=this;e(".js-goods-contenteditable",t.$el||"#body").each(function(){d.insertPlaceholder({$el:e(this),placeholder:r("constructor.begin write"),tag:"span"})}),t.createPopovers()}}(),addListeners:function(){return function(){var t=this;e(document).off(".goodsEditEvent"+t.id),e(document).on("mousedown.goodsEditEvent"+t.id,'[id="'+t.id+'"] .js-goods-contenteditable',function(){var n=e(this);n.data("editing")||(n.data("editing",!0),d.deinit(),d.init({$el:n,additionalPanel:!1,image:!1,defaultTag:"span",placeholder:r("constructor.begin write"),useEnter:n.hasClass("js-goods-descr"),inlineButtons:["bold","italic"],changeHtml:function(){return function(){n.hasClass("js-goods-linkPopover")&&t.w&&t.w.changeLinkPopover&&t.w.changeLinkPopover.hide()}}(),beforeOpen:function(){return function(){t.editorInited=!0}}(),save:function(){return function(i){("&nbsp;"===i||0===e("<div>"+i+"</div>").text().replace(/\s/g,"").length)&&(i=n.attr("placeholder")||"");var o=n.parent().data("fieldName").split(".");1===o.length?t.w.data[o[0]]=i:2===o.length&&(t.w.data[o[0]][o[1]]=i)}}(),escExit:function(){return function(){d.deinit()}}(),beforeClose:function(){return function(){n.data("editing",!1),t.editorInited=!1}}()}))}).on("mousedown.goodsEditEvent",".js-goods-contenteditable-native",function(){e(this).attr("contenteditable","true")})}}(),addListenersEdit:function(){return function(){var t=this;e(document).on("click.goodsEditEvent2","*",function(n){t.w.editing&&t.editorInited&&!e(n.target).closest(".js-stop-deinit-wysiwyg").length&&!e(n.target).closest(".ul-editableWithEditor").length&&d.deinit()})}}(),removeListenersEdit:function(){return function(){e(document).off(".goodsEditEvent2")}}(),destroy:function(){return function(){e(document).off(".goodsEditEvent")}}(),saveWidget:function(){return function(){var e=this;e.save(function(e){e&&console.log("Error",e)})}}(),initView:function(){return function(e){o.open(e),this.id=e,this.listenersAdded||(this.listenersAdded=!0,this.addListeners())}}()}});
//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map
