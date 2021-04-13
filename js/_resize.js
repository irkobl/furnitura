"use strict";define("js/ulib/crop/usercrop/_resize",["jquery","U","_","text!html/crop/usercrop/_resize.html"],function(e,t,i,s){return{stickSize:7,add:function(){return function(){var e=this;this._addResizable(),this.me.events.on("resizeAttach._zoom",function(){e._addResizable()}).on("resizeDetach._zoom",function(){e._removeResizable()}).on("disableControl._zoom",function(){e.remove()})}}(),position:function(){return function(){var i=this.me.elOffsets,s=e("#body").get(0).getBoundingClientRect(),o=this.me.$el.get(0).getBoundingClientRect(),n={desktop:i.left,tablet:o.left-s.left,phone:o.left-s.left};this.$fakeResize.css({width:this.me.$el.width(),height:this.me.$el.height(),top:i.top+this.me.scroll,left:n[t.constructor.deviceMode.device]||n.desktop,position:"absolute"})}}(),remove:function(){return function(){this._removeResizable(),this.me.events.off("._zoom")}}(),_removeResizable:function(){return function(){this.me.$el.hasClass("ui-resizable")&&this.me.$el.resizable("destroy"),this.$fakeResize.remove()}}(),_addResizable:function(){return function(){var t=this;t.$fakeResize=e(i.template(s,{})).appendTo(t.me.$root),t.position(),t.$fakeResize.resizableBootstrap({handles:{s:"#ul-crop-fake-custom-handler"},minHeight:10,alsoResize:t.me.$el,start:function(){return function(){t.me.events.dispatch("resizeStart")}}(),resize:function(){return function(){var e=t._getAlignCoords();if(e.stickCoords){var i=e.cur-t.me.$el.height();t.me.$el.css("height",e.stickCoords-i),e.$stickTo.addClass("lightBottom"),setTimeout(function(){e.$stickTo.removeClass("lightBottom")},500)}t.me.$el.css("width",""),t.me._position(),t.me._proxy("_setParams",[t.me.$el]),t.me.events.dispatch("resizing")}}(),stop:function(){return function(){t.me.events.dispatch("resizeStop")}}()})}}(),_getAlignCoords:function(){return function(){var t=this,i={cur:t.me.$el.offset().top+t.me.$el.height()+t.me.scroll,$stickTo:null,stickCoords:0};return t.me.$el.closest(".ul-row").find(".ul-widget").each(function(){if(!e(this).find(t.me.$el).length){var s=e(this).offset().top+e(this).height()+t.me.scroll;Math.abs(i.cur-s)<t.stickSize&&(i.$stickTo=e(this),i.stickCoords=s)}}),i}}()}});
//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map
