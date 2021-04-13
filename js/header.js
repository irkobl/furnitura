"use strict";define("widget-header-edit",["jquery","U","widget","editor1","i18n","customClasses"],function(e,t,i,r,n,s){var o={widgetClass:".ul-widget-wysivig-header",init:function(){return function(){this.isListenersAdded||(i.widgetNotOvelayEdit(this.widgetName,this.widgetClass),this.onAfterRenderForEls(e(".ul-header-editor")))}}(),edit:function(){return function(){this.isListenersAdded=!0,this.addListeners(),this.isEditing=!0}}(),addListeners:function(){return function(){var o=this;this.isListenersAdded=!0,r.on({initForEls:".ul-header-editor",defaultTag:"h1",placeholder:n("constructor.begin write"),widgetName:n("widgets.header.name"),image:!1,leftPanelControls:["colors","align","tag"],eventsNamespace:"header",useEnter:!1,save:function(){return function(e){var t=r.opt.$el.closest(".ul-widget-wysivig-header"),n=i.get(t.attr("id"));n&&(n.data={customClasses:n.data.customClasses,html:e,image:t.attr("data-image"),tag:t.attr("data-tag")},n.save())}}(),beforeOpen:function(){return function(){r.opt.$el.closest(".ul-widget-wysivig-header").addClass("js-editableWithEditor"),o.overlay.show({$el:r.opt.$el.closest(".ul-widget-wysivig-header"),autohide:!0,close:function(){return function(){r.deinit(),o.isEditing=!1}}()})}}(),leftPanelAfterOpen:function(){return function(){var t=r.opt.$el.closest(".ul-widget-wysivig-header"),n=i.get(t.attr("id"));s.init({$target:e("#ul-editor-additionalControls"),widget:n})}}(),beforeClose:function(){return function(){var e=r.opt.$el.closest(".ul-widget-wysivig-header");e.removeClass("js-editableWithEditor"),e.data("edit",!1),i.get(e.attr("id")).render(),s.destroy()}}(),_setOptions:function(){return function(e){return"special"!==t.params.pageType||"ul-id-special-404_header"!==e.$el.closest(".ul-widget").attr("id")&&"ul-id-special-404_header2"!==e.$el.closest(".ul-widget").attr("id")?"shop"===t.params.pageType&&"shop:success"===e.$el.closest(".ul-container").data("behavior")?e.leftPanelControls=["align","colors"]:e.leftPanelControls=["colors","align","tag"]:"ul-id-special-404_header"===e.$el.closest(".ul-widget").attr("id")?(e.leftPanelControls=["format","colors"],e.formats=[r._formats.h2,r._formats.h3,r._formats.h4]):e.leftPanelControls=[],e}}()})}}(),onAfterRender:function(){return function(){var e=this;o.onAfterRenderForEls(e.$el.find(".ul-header-editor"))}}(),onAfterRenderForEls:function(){return function(t){t.each(function(){r.insertPlaceholder({$el:e(this),placeholder:n("constructor.begin write"),tag:"h1"})})}}(),destroy:function(){return function(){r.off("header")}}()};return o});
//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map

//# sourceMappingURL=header.js.map
