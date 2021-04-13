"use strict";define("widget-spacer-edit",["jquery","U"],function(e,t){var i={minCols:2,init:function(){return function(){this.toggleBorders()}}(),apply:function(){return function(e){e()}}(),edit:function(){return function(){var e=this;e.data.showBorders=e.getShowBordersValue(),require(["panelDialog"],function(t){e.overlay.show({$el:e.$el,autohide:!0,close:function(){return function(){t.hide()}}(),afterShow:function(){return function(){e._initResiable()}}()}),t.show({context:e,title:"spacer",templateUrl:"/widgets/spacer/html/form.html",templateCss:["/css/require/widgets/spacer.css"],required:["widget-spacer-form"],templateData:{data:e.data},close:function(){return function(){e.$el.data("edit",!1),e.destroy(e.$el)}}()})})}}(),_initResiable:function(){return function(){var t=this;t.$el.data("active",!0),this.$el.closest(".ul-w-spacer").resizable({handles:"s",minHeight:36,create:function(){return function(){e(".ui-resizable-handle",this).append('<div class="ul-handler-resize"><span class="icon-content-special-resize"></span></div>'),e(".ui-resizable-handle",this).append('<span class="ul-resize-tooltip js-resize-tooltip" style="display:none;"></span>'),t.$resizeTooltip=e(".js-resize-tooltip"),t.fillResizeTooltip(t.data.height)}}(),resize:function(){return function(i,r){t.saveHeight(r.size.height,e(this)),t.fillResizeTooltip(r.size.height),e(window).trigger("resizeHeightSpacer",t.data)}}()})}}(),get showSpacerBordersKey(){return t.params.site+"_showSpacersBorders"},getShowBordersValue:function(){return function(){var e=localStorage.getItem(this.showSpacerBordersKey);return"undefined"!=typeof e&&"true"===e}}(),toggleBorders:function(){return function(){e("#body").attr("data-show-spacer-borders",this.getShowBordersValue())}}(),saveHeight:function(){return function(e,t){this.id=t.attr("id"),this.data={height:e}}}(),fillResizeTooltip:function(){return function(e){this.$resizeTooltip.text("H: "+e+"px")}}(),destroy:function(){return function(){var t=this;this.save(),e(".ul-spacer-overlay").remove(),e(".ul-spacer-overlay").off(".closeSpacer"),t.$el.closest(".ul-w-spacer").hasClass("ui-resizable")&&t.$el.closest(".ul-w-spacer").resizable("destroy"),t.handlerRender()}}()};return i});
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
