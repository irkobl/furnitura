"use strict";define("widget-button-edit",["jquery","U","i18n","widget-button-view","linkPopover","editor1","widget"],function(e,t,n,i,o,r,a){return{widgetClass:".ul-w-button",init:function(){return function(){this.isListenersAdded||a.widgetNotOvelayEdit(this.widgetName,this.widgetClass)}}(),addListeners:function(){return function(){this.isListenersAdded=!0,this.w=a.get(this.id),this.w.linkpopover&&this.linkpopover||this.initEditor(),this.editor||this.initEditor()}}(),initView:function(){return function(e){i.open(e)}}(),edit:function(){return function(){var i,o=this;o.$btn=e("a",o.$el),o.addListeners(),o.w.isEditing=!0,o.linkpopover={},o.createPopover(),o.linkpopover&&!o.data.isHrefChangeDenied&&o.linkpopover.show({$target:o.$btn}),e(document).on("keypress.buttonEditEv",".ul-w-button",function(){o.linkpopover.relocate()}),require(["panelDialog"],function(e){e.show({context:o,title:n("constructor.button"),templateUrl:"/widgets/button/html/form.html",required:["widget-button-form"],templateData:{data:o.data,theme:t.params.siteTheme,block:"",$getImageSelector:i,specialPage:"special"===t.params.pageType}}),o.overlay.show({$el:o.$el,autohide:!0,beforeClose:function(){return function(){}}(),close:function(){return function(){e.hide(),r.deinit(),o.destroy(),o.w.isEditing=!1,delete o.w.editing}}()})})}}(),initEditor:function(){return function(){var t=this;t.$btn=e("a",t.w.$el),r.init({$el:t.$btn,defaultTag:"span",simpleText:!0,inlineControls:!1,leftPanelControls:!1,useEnter:!1,autosave:0,links:!1,eventsNamespace:"button",deinitInsertPlaceholder:!1,afterOpen:function(){return function(){t.editor=!0}}(),beforeClose:function(){return function(){t.editor=!1}}(),save:function(){return function(e){t.w.data.caption=e}}()})}}(),saveAndRerender:function(){return function(e){var t=this;t.linkpopover&&t.linkpopover.relocate(),e=e||function(){},r.deinit(),t.save(function(){t.render(function(){e()})})}}(),createPopover:function(){return function(){var e=this,n="shop:success"===e.$el.closest(".ul-container").data("behavior")&&"shop"===t.params.pageType?["inner"]:["outer","inner","orderForm"];e.linkpopover&&(e.linkpopover=new o({$target:e.$btn,href:e.data.href,types:n,showEvents:!1,newWindow:"_self"!==e.data.target,gravity:["bottom","top"],cbOpenEdit:function(){return function(){r.deinit(),delete e.w.editing}}(),apply:function(){return function(t){e.data.href=t.href||"",e.data.target=t.newWindow?"_blank":"_self",e.data.hrefType="inner"===t.type||"anchor"===t.type?"page":"orderForm"===t.type?"orderForm":"external",e.saveAndRerender()}}()}))}}(),onAfterRender:function(){return function(){var t=this;t.$btn=e("a",t.$el),t.linkpopover&&(t.linkpopover&&t.linkpopover.destroy(),t.createPopover()),t.w&&t.w.linkpopover&&!t.data.isHrefChangeDenied&&t.w.linkpopover.updateTarget(t.$btn)}}(),destroy:function(){return function(){var t=this;t.$btn=e("a",t.$el),t.saveAndRerender(function(){}),t.linkpopover&&t.linkpopover.destroy(),delete t.linkpopover,t.$btn.attr("contenteditable",!1).off("keypress.buttonEvent"),e(document).off(".buttonEdit"),e(document).off("keypress.buttonEditEv")}}()}});
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
