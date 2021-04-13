"use strict";var _Mathabs=Math.abs;define("popup",["U","jquery","_","asyncjs","i18n","popupsMixin"],function(t,e,o,l,n,r){var i=null,a={defaults:{popupModifier:"",title:"Empty title",titleSpecial:!1,pages:!1,data:"<h1>Empty data!</h1>",applyBtnText:n("all.save"),saveBtn:!0,$targetEl:null,targetSelector:null,wide:!0,extrawide:!1,reopenMode:!1,targetEvent:"",options:null,required:null,templateData:{},templateCss:null,templateUrl:null,afterOpen:function(){return function(){}}(),afterOpenThis:function(){return function(){}}(),beforeClose:function(){return function(){}}(),close:function(){return function(){}}(),apply:function(){return function(){}}(),cancel:function(){return function(){}}(),draggable:!0,margin:{left:0,right:0,top:0,bottom:0},positionTarget:"right",titleShow:!0,showCloseBtn:!1,hideCloseCross:!1,hideArrow:!0,hideOverlay:!1,isTransparent:!1,closePopupClick:!0,size:"normal",alwaysClose:!1,stickyPopup:!1,position:null,scrollable:!0},open:function(){return function(o){var l=this,n="";return l.draggable=!1,this.opened&&o.alwaysClose?void 0:(l.opt=e.extend({},l.defaults,o),l.opt.alwaysClose&&(n+=" ul-popup-overlay-all"),null==l.$container&&l._init(),t.layers.on(0,function(){l.hide()}),l.$body.addClass("loading"),l.loadTemplate(),l.opt.draggable&&l.$el.draggable({cancel:".ul-select, input, .ul-popup-close, button, textarea",distance:5,containment:"body",stop:function(){return function(){l.draggable=!0,i=l.$el.position()}}()}),l.opt.reopenMode&&i?void l.$el.css(i):void l._position())}}(),_position:function(){return function(){var t=this;if(!t.opt.reopenMode||!i){if(t.draggable||null===t.opt.positionTarget)return!1;if(!t.$container||!t.$container.length)return!1;document.documentElement.contains(t.opt.$targetEl[0])||!t.opt.targetSelector||(t.opt.$targetEl=e(t.opt.targetSelector));var o=t.opt.$targetEl;o.selector.length&&(o=e(o.selector)),t.marginSite||(t.marginSite=0);var l=o.offset(),n=l.top-o.height()/2;if("left"==t.opt.positionTarget)t.$el.css({left:_Mathabs(t.opt.$targetEl.offset().left-o.width()),top:n});else if(t.opt.$targetEl.offset().left+t.$el.outerWidth()+t.opt.$targetEl.width()>=e("#body").outerWidth()&&t.opt.$targetEl.offset().left+t.$el.outerWidth()+t.opt.$targetEl.width()>=e(window).width()){var r=_Mathabs(e(window).width()-t.$el.outerWidth(!0));r<t.opt.$targetEl.offset().left&&r+t.$el.outerWidth(!0)>t.opt.$targetEl.offset().left+t.opt.$targetEl.width()&&(r=t.opt.$targetEl.offset().left-t.$el.outerWidth(!0)),t.$el.css({left:r+t.opt.margin.left,top:n})}else t.$el.css({left:_Mathabs(t.opt.$targetEl.offset().left+o.width())+t.opt.margin.left,top:n});var a=0,p=0;t.$body.css("max-height",t.$container.height()-t.$header.outerHeight(!0)-t.$footer.outerHeight(!0)),null!=t.opt.$targetEl&&t.opt.$targetEl.length&&(a=t.opt.$targetEl.offset().top+t.opt.$targetEl.outerHeight()/2-t.$el.height()/2,0>a&&(p=-1*a),a+t.$el.height()>t.$container.height()&&(p=t.$container.height()-(a+t.$el.height()))),t.$el.css("top",a+p),t.$arrow.css("margin-top",-1*p)}}}()};return e.extend(a,r),a});
//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map

//# sourceMappingURL=popup.js.map
