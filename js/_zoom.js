"use strict";var _Mathfloor=Math.floor,_Mathmax=Math.max,_Mathabs=Math.abs;define("js/ulib/crop/usercrop/_zoom",["jquery","U","_","ul-framework","text!html/crop/usercrop/_zoom.html"],function(t,e,o,n,i){return{_posType:0,maxImgValue:1.2,buttonStepUp:1.05,buttonStepDown:.95,diffError:20,add:function(){return function(){var e=this._getRangeVals();this.$rangeContainer=t(o.template(i,{val:e.val,min:e.min,max:e.max,step:1,dotted:!1,valTitle:"",accurate:!1,title:"",designWhite:!0,showVal:!1})).appendTo(this.me.$root),this.$range=t(".ul-range-vertical",this.$rangeContainer),n.rangeVertical.init(),this.position(),this._addEvents()}}(),remove:function(){return function(){this.$rangeContainer.off(".usercrop").remove(),this.me.events.off("._zoom")}}(),position:function(){return function(){var o=this.me.elOffsets,n=o.left+this.me.$el.width(),i=o.top+this.me.$el.height()/2+this.me.scroll-this.$rangeContainer.height()/2;t(".ul-crop-zoom-sub",this.$rangeContainer).hide(),this._posType=1,o.left+this.me.$el.width()+this.$rangeContainer.outerWidth(!0)>this.me.$root.width()&&(t(".ul-crop-zoom-sub",this.$rangeContainer).show(),n-=this.$rangeContainer.outerWidth(!0),this._posType=2,this.me.$root.width()-this.me.$el.width()-this.$rangeContainer.outerWidth(!0)>this.$rangeContainer.outerWidth(!0)&&(t(".ul-crop-zoom-sub",this.$rangeContainer).hide(),this._posType=3,n=o.left-this.$rangeContainer.outerWidth(!0))),i<o.top+this.me.scroll&&(i=o.top+this.me.scroll);var r=t("#body").get(0).getBoundingClientRect(),a=this.me.$el.get(0).getBoundingClientRect(),s={desktop:n,tablet:a.left-r.left+this.me.$el.outerWidth(!0),phone:a.left-r.left+this.me.$el.outerWidth(!0)};this.$rangeContainer.css({top:i,left:s[e.constructor.deviceMode.device]||s.desktop})}}(),positionImmediate:function(){return function(){this.position()}}(),_update:function(){return function(t){var e=this._getRangeVals();e.val=t?Math.round(e.val*=t):e.val,n.rangeVertical.customUpdate?n.rangeVertical.customUpdate(this.$range,e):(this.remove(),this.add())}}(),_addEvents:function(){return function(){var e=this;e.$rangeContainer.on("changeImmediate.usercrop",function(t,o){var n=e.me.$img.width();e.me.$img.css("min-width",o.val-1),e.me.$img.css("max-width",o.val+1),e.me._position(null,n),e.me.events.dispatch("zooming")}).on("change.usercrop",function(){e.me._proxy("_setParams",[e.me.$el]),e.me.events.dispatch("zoomStop")}).on("click.usercrop",".js-btn-zoom",function(){var o=t(this).attr("data-action"),n={minus:function(){return function(){return e.buttonStepDown}}(),plus:function(){return function(){return e.buttonStepUp}}()};n[o]&&(e._update(n[o]()),e.me.events.dispatch("zoomBtn",n[o]()))}),e.me.events.on("update._zoom",function(){var t=_Mathabs(e.me.$img.height()-e.me.$el.height()),o=_Mathabs(e.me.$img.width()-e.me.$el.width());t<=e.diffError&&o<=e.diffError&&e._update(e.buttonStepUp)}).on("resizing._zoom",function(){e._update()}).on("zoomDetach._zoom",function(){e.$rangeContainer.hide()}).on("zoomAttach._zoom",function(){e.$rangeContainer.show()}).on("disableControl._zoom",function(){e.remove()})}}(),_getRangeVals:function(){return function(){var t=this.me.$el.width(),e=this.me.$el.height()/this.me.aspectRatio,o=this.me.$img.width(),n=_Mathmax(o,_Mathmax(e,this.me.$img.get(0).naturalWidth,t)*this.maxImgValue);return{min:_Mathfloor(e),max:_Mathfloor(n),val:_Mathfloor(o)}}}()}});
//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map
