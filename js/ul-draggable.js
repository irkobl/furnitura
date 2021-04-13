"use strict";define("uldraggable",["jquery","_","U","page","constructor","nf","i18n","billing/feature-availability","jquery-ui-draggable","jquery-ui-position"],function(e,t,r,o,a,i,n,l){var d={init:function(){return function(t){var r=this;r.menu=t,r.dragTooltip.init({onShow:function(){return function(){t.panels.panelConstructor.elementsPreview.hidePopup(!0)}}()}),r.draggable(e(".js-draggable-widget",r.menu.$el),r.dropEl),r.draggable(e(".js-draggable-block",r.menu.$el),r.dropEl),e(document).on("draggableWidgetDisabled.draggableWidgetLeftPanel",function(e,t,o){r.widgetPanelDisabled(t,o)})}}(),widgetPanelDisabled:function(){return function(t,r){e('.js-draggable-widget[data-widget="'+t+'"]').attr("disabled",r)}}(),initSome:function(){return function(e){var t=this;t.draggable(e,t.dropEl)}}(),deInitSome:function(){return function(e){e.draggable("destroy")}}(),dragGetHelper:function(){return function(e){var t=e.clone(!0);return t.addClass("ul-drag-helper"),e.css("opacity",0),t}}(),draggable:function(){return function(t,i){var n,d=this;t.draggable({appendTo:"#ul-panelConstructor .js-panel-constructor-elements",iframeFix:!0,helper:function(){return function(){return d.dragGetHelper(e(this))}}(),containment:"body",cancel:".js-block-remove, .js-block-favorite-actions",scroll:!1,start:function(){return function(t,r){var i=e(this),s=i.data("widget"),u=i.data("featureName");return d.menu.$el.attr("data-draggable",!0),i.attr("disabled")&&"disabled"==i.attr("disabled")?(i.removeAttr("style"),!1):u&&"true"===i.attr("data-is-disabled-feature")?(l.showNotAvailablePopup(u,{$popupTargetEl:i,isAvailable:"true"===i.attr("data-is-disabled-feature"),isAvailableForTrial:"true"===i.attr("data-is-trial-feature")}),e(this).removeAttr("style"),!1):(d.menu.panels.panelConstructor.elementsPreview.hidePopup(),d.dragTooltip.hide(),e(".ul-drop-remove",d.menu.$el).css({visibility:"visible","pointer-events":"auto"}),d.draggingEl=r.helper.data("drag")||"unknown",d.draggingElType=r.helper.data("widget")||null,n=!1,e("#body").attr("data-controls","drag"),a.widgetGlobal.dropPosition[s]&&a.widgetGlobal.dropPosition[s].fixed&&(e("#body").attr("data-drag-type","fixed"),e("#ul-left-menu").css("zIndex",351)),e("body").css("overflow","hidden"),o.startDrop(d.draggingEl,d.draggingElType),d.$el=e("#ul-main"),d.top=d.$el.offset().top,d.left=d.$el.offset().left,d.width=d.$el.width(),void(d.height=d.$el.height()))}}(),drag:function(){return function(t){var r=e(this).data("widget");a.widgetGlobal.dropPosition[r]?!a.widgetGlobal.dropPosition[r].fixed&&o.autoScrollIframeDrag(t):o.autoScrollIframeDrag(t),0<t.pageX-d.left&&t.pageX-d.left<d.$el.outerWidth()&&0<t.pageY-d.top&&t.pageY-d.top<d.$el.outerHeight()?(!n&&(o.selectDroppable(),n=!0),o.hover(t.pageX,t.pageY,d.draggingEl,d.draggingElType)):n&&(o.deselectDroppable(),o.$dropTarget=null,n=!1)}}(),stop:function(){return function(t,n){e(".ul-drop-remove",d.menu.$el).removeAttr("style"),e(".ul-block-dragOver").removeClass("ul-block-dragOver"),d.menu.$el.removeAttr("data-draggable");var l=!1;null==r.page.$dropTarget&&(l=!0);var s=e(this).data("widget");if(a.widgetGlobal.dropPosition[s]?(e("#ul-left-menu").css("zIndex",""),e("#body").removeAttr("data-drag-type")):o.stopAutoscroll(),e("#body").removeAttr("data-controls"),e(this).removeAttr("style"),e(document).off("mousewheel"),!l){var u;if(!o.$dropTarget)return void r.notify("Unable to add element here");u=o.$dropTarget,o.$dropTarget=null,i(d.draggingEl,u,n,t)}d.draggingEl=null,o.stopDrop()}}()})}}(),dropEl:function(){return function(t,r,o,a){var i=d;switch(t){case"block":i.dropPreset(r,o.helper.data("id"),a);break;case"widget":i.dropWidget(r,e(o.helper),a);break;case"absWidget":i.dropWidget(r,e(o.helper));break;case"favorite-block":i.dropFavoritePreset(r,o.helper.data("id"),a);break;default:throw new Error("unrecognized element")}}}(),dropFavoritePreset:function(){return function(t,r,i){var n=this,l=this.getBlockIndex(t);t.hasClass("ul-drop-container-bottom")&&(l+=1),t.hasClass("ul-drop-placeholder")&&(t.remove(),l=0);var d={};if(n.menu.panels.panelConstructor.favoriteBlock.forEach(function(e){r===e._id&&(d.block=e.content)}),d.index=l,!t.hasClass("ul-drop-remove")){var s=a.createBlockFromBlockJSON(JSON.parse(JSON.stringify(d)),function(){});e("#ul-main").animate({scrollTop:s.offset().top+e("#ul-main").scrollTop()-37},200)}e(window).off(".autohoverBlock"),e(window).on("addElelment.autohoverBlock",function(){o.isHover(i)})}}(),getBlockIndex:function(){return function(t){var r=t.index(),o=null;return e.each(t.parent().children(".ul-container"),function(r,a){e(a).attr("id")===t.attr("id")&&(o=r)}),null==o?o=r:r=o,r}}(),dropPreset:function(){return function(t,r,i){var n=this.getBlockIndex(t);if(t.hasClass("ul-drop-container-bottom")&&(n+=1),t.hasClass("ul-drop-placeholder")&&(t.remove(),n=0),!t.hasClass("ul-drop-remove")){var l=a.addBlock(r,n);e("#ul-main").animate({scrollTop:l.offset().top+e("#ul-main").scrollTop()-37},200)}e(window).off(".autohoverBlock"),e(window).on("addElelment.autohoverBlock",function(){o.isHover(i)})}}(),dropWidget:function(){return function(t,l,d){if(!t.hasClass("ul-col")||t.children(".ul-widget").length||t.hasClass("ul-absolute-widgets")){var s=a.dropIndexWidget(t);if(t.hasClass("ul-drop-remove")||t.hasClass("ul-absolute-widgets")||r.history.asAtomic(function(){var e=a.dropWrapWidget({$drop:t.parent(),index:s.index});a.addWidget({$drop:e.drop,index:e.index,widgetType:l.data("widget"),isSingleWidget:l.data("singleWidget")})}),t.hasClass("ul-absolute-widgets")){if(t.hasClass("ul-col")){if(l.data("widget")==t.children(".ul-widget").data("widget"))return i.notify(n("constructor.dublicated abs widget"),"error"),!1;0<t.children(".ul-widget").length&&a.removeWidget(e("#"+t.children(".ul-widget").attr("id")))}a.addWidget({$drop:t,index:0,widgetType:l.data("widget"),isSingleWidget:l.data("singleWidget")})}e(window).off(".autohover"),e(window).on("addElelment.autohover",function(){o.isHover(d)})}else t.hasClass("ul-drop-remove")||a.addWidget({$drop:t,index:0,widgetType:l.data("widget"),isSingleWidget:l.data("singleWidget")})}}(),dragTooltip:{$el:null,visibleClass:"ul-drag-tooltip--visible",init:function(){return function(r){var o=this;o.opts=r||{},o.isShown=!1,o.inited||(o.inited=!0,o.clickEventListener=o.onDocumentClick.bind(o),require(["tpl!constructor/dragTooltip"],function(r){o.$el=e(t.template(r,{__:n})).appendTo("body"),document.addEventListener("click",o.clickEventListener)}))}}(),onDocumentClick:function(){return function(t){var r=this,o=e(t.target);if(o.hasClass("js-draggable-widget")&&!o.attr("disabled")){var a=o.data("featureName");if(!a)return void r.show(o);l.check(a,{showPopupIfNotAvailable:!0,$popupTargetEl:o},function(e){e&&r.show(o)})}else r.hide()}}(),show:function(){return function(e){var t=this;t.isShown||(t.isShown=!0,t.opts.onShow&&t.opts.onShow(),t.$el.position({my:"left+43 top-12",at:"right top",of:e,collision:"fit"}).addClass(t.visibleClass),clearTimeout(t.timer),t.timer=setTimeout(function(){t.hide()},4e3))}}(),hide:function(){return function(){var e=this;e.isShown=!1,clearTimeout(e.timer),e.$el.removeClass(e.visibleClass)}}(),deinit:function(){return function(){var e=this;e.inited=!1,document.removeEventListener("click",e.clickEventListener),delete e.clickEventListener,e.$el&&(e.$el.remove(),e.$el=null)}}()},deinit:function(){return function(){var t=this;e(".js-draggable-widget",t.$el).hasClass("ui-draggable")&&e(".js-draggable-block",t.$el).hasClass("ui-draggable")&&(e(".js-draggable-widget",t.$el).draggable("destroy"),e(".js-draggable-block",t.$el).draggable("destroy")),t.dragTooltip.deinit(),e(window).off(".autohover"),e(document).off(".draggableWidgetLeftPanel")}}()};return d});
//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map

//# sourceMappingURL=ul-draggable.js.map
