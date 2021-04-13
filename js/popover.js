"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}define("popover",["jquery","_","U","asyncjs","text!html/ul-framework/popover.html"],function(t,e,o,r,i){var n=function(){return function(o){var n,l=this,a=function(){return function(){}}();l.readiness_stack=[],n={screen:t("body"),gravity:["top","right","left","bottom"],stay_first:!0,animation:!0,required:null,html:null,context:{},$target:null,rect:null,$parent:null,position:{top:0,left:0,width:10,height:10},templateUrL:null,templateCss:null,templateData:{},orderFormData:"",arrow:!0,onAfterOpen:function(){return function(){}}(),onBeforeClose:function(){return function(){}}()},l.opt=e.extend(n,o),l.$root=t(i),l.$el=l.$root.find(".ul-popover"),l._first_gravity=null,l._magic=12,l._magic_freemium=48,l._arr_height=8,l._arr_width=16,r.series([function(t){return"string"==typeof l.opt.templateCss?void require(["css!"+l.opt.templateCss],function(){t()}):t()},function(t){return"string"==typeof l.opt.html?t():void require(["text!"+l.opt.templateUrl],function(e){l.opt.html=e,t()})},function(t){l.opt.html=e.template(l.opt.html,l.opt.templateData),t()},function(t){return l.curForm={init:function(){return function(){}}(),show:function(){return function(){}}(),hide:function(){return function(){}}()},"string"==typeof l.opt.required?void require([l.opt.required],function(o){l.curForm=e.extend(l.curForm,o),t()}):t()}],a.ok(function(){l.$el.find(".ul-popover-content").append(l.opt.html),l.curForm.init({$el:l.$el,context:l.opt.context}),l._ready=!0,l._async()}))}}();return n.prototype._async=function(){var t,e,o;for(2===arguments.length&&(e=arguments[0],o=arguments[1],this.readiness_stack.push({action:e,args:o}));this._ready&&0<this.readiness_stack.length;)t=this.readiness_stack.pop(),this[t.action].apply(this,t.args)},n.prototype._tPosition=function(){var e,o=this;if(o.opt.rect){var r=o.opt.rect.top,i=o.opt.rect.left;return(o.opt.rect.scrollTop||0===o.opt.rect.scrollTop)&&(r+=o.opt.rect.scrollTop-t("#ul-main").scrollTop()),o.opt.rect.leftContainer&&(i-=o.opt.rect.leftContainer-o.opt.$target.offset().left),{top:r,left:i,height:o.opt.rect.height,width:o.opt.rect.width}}return null!==o.opt.$target&&void 0!==o.opt.$target||"function"!=typeof o.opt.position?null===o.opt.$target||void 0===o.opt.$target?e=o.opt.position:(e=o.opt.$target.offset()||{},e.height=o.opt.$target.outerHeight(),e.width=o.opt.$target.outerWidth()):e=o.opt.position(),e||(e={top:0,left:0,height:0,width:0}),e},n.prototype._container_offsets=function(){var e=this,o=e._tPosition(),r=e.opt.screen.offset(),i=e.opt.screen.outerWidth(),n={top:o.top-t(window).scrollTop(),bottom:t(window).height()-(o.top+o.height)+t(window).scrollTop(),left:o.left-r.left,right:r.left+i-(o.left+o.width)};return n},n.prototype._center=function(){var t=this,e=t._tPosition(),o={top:e.top+e.height/2,left:e.left+e.width/2};return o},n.prototype._get_gravity_value=function(t,e){return e[t]-(this.$el.outerHeight()+this._magic_freemium+this._magic)},n.prototype.locate_top=function(){var t=this,e=t._tPosition(),o=t._center();return o.top=e.top-(t.$el.outerHeight()+t._magic),o.left-=t.$el.outerWidth()/2,o},n.prototype.locate_right=function(){var t=this,e=t._tPosition(),o=t._center();return o.left+=e.width/2+t._magic,o.top-=t.$el.outerHeight()/2,o},n.prototype.locate_bottom=function(){var t=this,e=t._tPosition(),o=t._center();return o.left-=t.$el.outerWidth()/2,o.top+=e.height/2+t._magic,o},n.prototype.locate_left=function(){var t=this,e=t._tPosition(),o=t._center();return o.top-=t.$el.outerHeight()/2,o.left-=e.width/2+t._magic+t.$el.outerWidth(),o},n.prototype.arrow_locate_top=function(t){var e=this,o=e._center(),r=o.left-t.left;return r=0>r?0:r,r=r>t.left+e.$el.outerWidth()?e.$el.outerWidth():r,0>r?r=0:r>t.left+e.$el.outerWidth()?r=e.$el.outerWidth()-e._arr_height:r-=e._arr_width/2,{top:e.$el.height(),left:r}},n.prototype.arrow_locate_right=function(t){var e=this,o=e._center(),r=o.top-t.top;return 0>r?r=0:r>t.top+e.$el.outerHeight()?r=e.$el.outerHeight()-e._arr_width:r-=e._arr_width/2,{top:r,left:-e._arr_height}},n.prototype.arrow_locate_bottom=function(t){var e=this,o=e._center(),r=o.left-t.left;return r=0>r?0:r,r=r>t.left+e.$el.outerWidth()?e.$el.outerWidth():r,0>r?r=0:r>t.left+e.$el.outerWidth()?r=e.$el.outerWidth()-e._arr_height:r-=e._arr_width/2,{top:-e._arr_height,left:r}},n.prototype.arrow_locate_left=function(t){var e=this,o=e._center(),r=o.top-t.top;return 0>r?r=0:r>t.top+e.$el.outerHeight()?r=e.$el.outerHeight()-e._arr_width:r-=e._arr_width/2,{top:r,left:e.$el.width()-1}},n.prototype._get_possible_gravity=function(t){var e,o=this,r=null,i={};return null===o._first_gravity?(o.opt.gravity.some(function(n){return e=o._get_gravity_value(n,t),i[e]=n,(e=/(right|left)/gi.test(n)?e>0&&0<t.top:e>0)?(r=n,!0):void 0}),null===r&&(r=Object.keys(i).length?i[Math.max.apply(Math,_toConsumableArray(Object.keys(i)))]:o.opt.gravity[0]||"top"),o.opt.stay_first&&(o._first_gravity=r),r):o._first_gravity},n.prototype._position=function(){var e,o,r,i=this,n=i._tPosition(),l=i._container_offsets(),a=null;return r={top:n.top+n.height/2-i.$el.outerHeight()/2,left:n.left+n.width/2-i.$el.outerWidth()/2,gravity:null,arrow:{top:0,left:0}},a=i._get_possible_gravity(l),e=i["locate_"+a](l),o=i["arrow_locate_"+a](e),r=t.extend(r,e),r.gravity=a,r.arrow=o,r},n.prototype._locate=function(){var t,e=this;t=e._position(),e.$el.offset({top:t.top,left:t.left}),e.opt.arrow?e.$el.find(".ul-popover-arrow").css(t.arrow).attr("data-gravity",null===t.gravity?"center":t.gravity):e.$el.find(".ul-popover-arrow").css("display","none")},n.prototype._show=function(){var r=this,i=arguments[0]||{};e.extend(r.opt,i),r.$root.appendTo(r.opt.$parent||"body"),setTimeout(function(){r.$el.addClass("ul-popover-visible").addClass(r.opt.animation?"ul-popover-animation":"")},0),r._locate(),r.curForm.show(),r._locate_handler=r._locate.bind(r),r.scrollFamily=o.guid(),t("#ul-main").on("scroll."+r.scrollFamily,r._locate_handler),t(window).resize(r._locate_handler),r.opt.onAfterOpen(r)},n.prototype._hide=function(){var e=this;e.opt.onBeforeClose(e),e._first_gravity=null,e.$root.detach(),e.curForm.hide(),e.$el.removeClass("ul-popover-visible"),t("#ul-main").unbind("scroll."+e.scrollFamily,e._locate_handler),t(window).unbind("resize",e._locate_handler)},n.prototype.detach=function(){this.dettached=!0,this.$root.hide()},n.prototype.attach=function(){this.dettached=!1,this.$root.show()},n.prototype.show=function(){this.dettached||this._async("_show",arguments)},n.prototype.hide=function(){this.dettached||this._async("_hide",arguments)},n});
//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map

//# sourceMappingURL=popover.js.map
