"use strict";define("js/ulib/crop/usercrop/_overlay",["jquery"],function(e){return{classes:{widgetClass:"ul-widget",croppingEl:"cropping",widgetNoShadow:"no-shadow",overlay:"ul-cropping-overlay",overlayImg:"ul-cropping-overlayImg"},$widgetOverlay:e(".ul-disabled-overlay"),add:function(){return function(){var o=this;o._addElementShadow(),o.$widgetOverlay.hide(),o.$overlay=e('<div style="min-height: '+e("#body-fict").height()+'px;"></div>').addClass(o.classes.overlay),o.$overlayImg=e("<img>").addClass(o.classes.overlayImg).attr("src",o.me.src).hide(),o.me.$root.append(o.$overlay).append(o.$overlayImg),o._addEvents(),o.$overlayImg.one("load",function(){e(this).show(),o.position()})}}(),remove:function(){return function(){this._removeElementShadow(),this.$widgetOverlay.show(),this.$overlay.off("click._overlay").remove(),e(".js-main").off(".overlayEventsCrop"),this.$overlayImg.remove(),this.me.events.off("._overlay")}}(),positionImmediate:function(){return function(){this.position()}}(),position:function(){return function(){var e=this.me.imgOffsets;this.$overlayImg.css({height:e.height,top:e.top+this.me.scroll,left:e.left})}}(),_addEvents:function(){return function(){var o=this;o.$overlay.on("click._overlay",function(){o.me.events.dispatch("overlayClick",o.$overlay)}),e(".js-main").on("click.overlayEventsCrop",function(s){e(s.target).hasClass("js-main")&&o.me.events.dispatch("overlayClick",o.$overlay)}),o.me.events.on("overlayDetach._overlay",function(){o.$overlayImg.addClass("hiddenImg"),o._removeElementShadow()}).on("overlayAttach._overlay",function(){o.$overlayImg.removeClass("hiddenImg"),o._addElementShadow()}).on("disableControl._overlay",function(){o.$overlayImg.hide()})}}(),_addElementShadow:function(){return function(){this.me.$el.addClass(this.classes.croppingEl).closest("."+this.classes.widgetClass).addClass(this.classes.widgetNoShadow)}}(),_removeElementShadow:function(){return function(){this.me.$el.removeClass(this.classes.croppingEl).closest("."+this.classes.widgetClass).removeClass(this.classes.widgetNoShadow)}}()}});
//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map
