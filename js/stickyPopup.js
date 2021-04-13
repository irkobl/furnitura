"use strict";define("stickyPopup",["U","jquery","_","i18n","asyncjs","text!./html/popup/popup.html","popupsMixin"],function(t,e,n,o,i,l,r){var a={defaults:{title:"Empty title",titleShow:!0,titleSpecial:!1,data:"<h1>Empty data!</h1>",pages:!1,wide:!0,saveBtn:!0,$targetEl:null,targetEvent:"",applyBtnText:o("all.save"),required:null,templateData:{},templateCss:null,templateUrl:null,options:null,showCloseBtn:!1,hideCloseCross:!1,hideArrow:!1,hideOverlay:!1,isTransparent:!1,customClass:"",leftMainMenu:!1,closePopupClickCross:!1,afterOpen:function(){return function(){}}(),afterOpenThis:function(){return function(){}}(),afterClose:null,beforeClose:function(){return function(){}}(),apply:function(){return function(){}}(),close:function(){return function(){}}(),stickyPopup:!0},open:function(){return function(n){var o=this;o.opt=e.extend(!1,o.defaults,n),null==o.$container&&o._init(),t.layers.on(0,function(){o.hide()}),o.$body.addClass("loading"),o.loadTemplate()}}(),targetAddEvent:function(){return function(){var t=this;e(t.opt.targetEvent).on("click.stickyEvent",function(){t.opt.apply(e(this)),t.hide()})}}(),_position:function(){return function(){var t=this,e=0,n=0;t.$body&&t.$el&&t.$container&&(t.$body.css("max-height",t.$container.height()-t.$header.outerHeight(!0)-t.$footer.outerHeight(!0)),null!=t.opt.$targetEl&&t.opt.$targetEl.length&&(e=t.opt.$targetEl.offset().top+t.opt.$targetEl.outerHeight()/2-t.$el.height()/2,0>e&&(n=-1*e),e+t.$el.height()>t.$container.height()&&(n=t.$container.height()-(e+t.$el.height()))),t.$el.css("top",e+n),t.$arrow.css("margin-top",-1*n))}}()};return e.extend(a,r),a});
//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map

//# sourceMappingURL=stickyPopup.js.map
