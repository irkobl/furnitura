"use strict";define("widget-downloadFile-edit",["jquery","widget-downloadFile-view","editor","popover","i18n","text!/widgets/downloadFile/html/icon-change-popover.html"],function(e,o,n,t,i,l){var a={editBtnClass:"ul-w-downloadFile-edit-btn",isOpen:!1,init:function(){return function(){}}(),initView:function(){return function(e,n){o.open(e,n)}}(),destroy:function(){return function(){e(document).off("panelClick"),e(document).off("uploadFile")}}(),edit:function(){return function(){var o=this,n=[];o.$title=e(".ul-w-downloadFile-title",o.$el),o.showIcon=e(".ul-w-downloadFile-showIcon",o.$el),o.$showSize=e(".ul-w-downloadFile-showSize",o.$el),o.$showButton=e(".ul-w-downloadFile-showButton",o.$el),o.createIconChangePopover(),o.$el.find(".g-color-text-1, .g-color-text-2, .g-color-text-3").each(function(){n.push(e(this).css("color"))}),require(["panelDialog"],function(e){o.overlay.show({$el:o.$el,autohide:!0,close:function(){return function(){o.immediateSave(),o.destroy(),e.hide()}}()}),o.getDesigns(function(n,t){e.show({context:o,title:"downloadFile",required:["widget-downloadFile-form"],templateUrl:"/widgets/downloadFile/html/form.html",templateData:{opts:o.options,colors:[],designs:t,canChangeDesign:o.canChangeDesign()}})})})}}(),onAfterRender:function(){return function(){this.createIconChangePopover()}}(),createIconChangePopover:function(){return function(){var o=this;o.iconChangePopover=new t({gravity:["top"],context:o,$target:e(".js-downloadFile-icon",o.$el),$parent:e(".js-downloadFile-icon",o.$el),html:l,templateData:{data:o.data,i18n:i}})}}(),redraw:function(){return function(o,n){var t=this;o&&(t.data=e.extend(t.data,o)),n&&(t.options=e.extend(t.options,n)),t.render(),t.defferedSave()}}()};return a});
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
