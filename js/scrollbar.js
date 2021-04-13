"use strict";define("ul-framework/scrollbar",["jquery","_","perfect-scrollbar","css!/css/lib/perfect-scrollbar.min.css"],function(r,a){return{className:"ul-custom-scrollbar js-custom-scrollbar",marginClassName:"ul-custom-scrollbar--margin",defaultOpts:{marginStart:0,marginEnd:0,onScrollX:function(){return function(){}}(),onScrollY:function(){return function(){}}()},create:function(){return function(a,o,t){var l=this;a.each(function(a,n){l._create(r(n),r.extend({},l.defaultOpts,o),t)})}}(),_create:function(){return function(o,t,l){var n=this,c=[n.className],s=Math.random().toString().slice(2);if("static"===o.css("position")&&o.data("wasStaticPosition",!0).css("position","relative"),o.data("elScrollbarId",s).addClass(c.join(" ")).perfectScrollbar(l||{}).on("ps-scroll-x.ulScrollable",function(){t.onScrollX(o.prop("scrollLeft"),o)}).on("ps-scroll-y.ulScrollable",function(){t.onScrollY(o.prop("scrollTop"),o)}).on("load.ulScrollable","img",function(){o.perfectScrollbar("update")}),t.marginStart){var e=parseInt(t.marginStart)+"px";r(".ps-scrollbar-x-rail",o).css({marginLeft:e}),r(".ps-scrollbar-y-rail",o).css({marginTop:e})}if(t.marginEnd){var i=parseInt(t.marginEnd)+"px";r(".ps-scrollbar-x-rail",o).css({marginRight:i}),r(".ps-scrollbar-y-rail",o).css({marginBottom:i})}n.update(o),o.on("scrollbarUpdateNeeded.ulScrollbar",function(){n.update(o)}),r(window).on("resize.ulScrollbar."+s,a.debounce(function(){n.update(o)},200))}}(),update:function(){return function(a){a.each(function(){r(this).perfectScrollbar("update")})}}(),destroy:function(){return function(a){var o=this;a.each(function(a,t){var l=r(t);o._destroy(l),l.off(".ulScrollbar"),r(window).off("."+l.data("elScrollbarId")),l.removeData("elScrollbarId")})}}(),_destroy:function(){return function(r){var a=this,o=[a.className,a.marginClassName];r.removeClass(o.join(" ")).removeData("wasStaticPosition").off(".ulScrollable").perfectScrollbar("destroy"),r.data("wasStaticPosition")&&r.css("position","static")}}()}});
//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map

//# sourceMappingURL=scrollbar.js.map
