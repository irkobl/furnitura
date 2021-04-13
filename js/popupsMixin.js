"use strict";define("popupsMixin",["U","ul-framework/scrollbar","jquery","text!./html/popup/popup.html","i18n","_"],function(e,t,o,p,n,i){var a={$el:null,curForm:null,_init:function(){return function(){var e=this;e.$container=o(i.template(p)({popupModifier:e.opt.popupModifier,stickyPopup:e.defaults.stickyPopup,customClass:e.opt.customClass,cancel:n("constructor.undo"),save:e.opt.applyBtnText,showApplyBtn:e.opt.saveBtn,title:e.opt.title,reopenMode:e.opt.reopenMode,leftMainMenu:e.opt.leftMainMenu,showCloseBtn:e.opt.showCloseBtn,hideCloseCross:e.opt.hideCloseCross,titleShow:e.opt.titleShow,titleSpecial:e.opt.titleSpecial,size:e.opt.size&&"normal"!==e.opt.size?e.opt.size:null,hideArrow:e.opt.hideArrow,hideOverlay:e.opt.hideOverlay,isTransparent:e.opt.isTransparent,scrollable:e.opt.scrollable})).appendTo("body"),e.opt.stickyPopup||o("body").addClass("ul-popup-opened"),e.isHidden=!1,e.$el=o(".ul-popup-container",e.$container),e.$header=o(".ul-popup-header",e.$el),e.$body=o(".ul-popup-body",e.$el),e.$footer=o(".ul-popup-footer",e.$el),e.$arrow=o(".ul-popup-arrow",e.$el),e.$close=o(".js-popup-close",e.$el),e.$savebtn=o(".js-button-save ",e.$footer),e.$cancelbtn=o("#js-button-cancel ",e.$footer),e.opt.saveBtn||e.$body.addClass("ul-no-border"),e.opt.scrollable&&t.create(e.$body,{marginEnd:"15px"},{suppressScrollX:!0}),e.addEventListeners()}}(),addEventListeners:function(){return function(){var t=this;t.$container.on("click.stickyEvent",function(p){return"boolean"==typeof t.opt.closePopupClick&&!1===t.opt.closePopupClick?!1:void(!o(p.target).closest(t.$el).length&&("function"==typeof t.opt.afterClose?!t.hideActive&&t.hide():e.layers.off(!0)))}),t.$close.on("click.stickyEvent",function(){"function"==typeof t.opt.afterClose?t.opt.closePopupClickCross?t.hide():!t.hideActive&&t._hide():e.layers.off(!0)}),o(window).on("linkPageChange",function(){t._position()}),t.$savebtn.on("click.stickyEvent",function(){t.curForm?t.curForm.beforeApply?t.curForm.beforeApply(function(e){!1!==e&&t.curForm.apply(function(){var e=Array.prototype.slice.call(arguments);!1!==t.opt.apply.apply(window,e)&&t.hide()})}):t.curForm.apply(function(){var e=Array.prototype.slice.call(arguments);("boolean"!=typeof e[0]||!1!==e[0])&&!1!==t.opt.apply.apply(window,e)&&t.hide()}):!1!==t.opt.apply(o(this))&&t.hide()}),t.$cancelbtn.on("click.stickyEvent",function(){!1!==t.opt.cancel(o(this))&&t.hide()}),o(window).on("resize",function(){t._position()}),t.opt.pages&&t.$header.on("click",".ul-tabs li",function(){t._setTab(o(this).attr("data-target"))})}}(),isHide:function(){return function(){var e=this;return!0===e.isHidden}}(),hide:function(){return function(o){var p=this;if(t.destroy(p.$body),p.isHide())return void e.layers.off(!0);p.hideActive=!0,"function"!=typeof o&&(o=function(){return function(){}}());var n=null;n=p.$container?p.$container.find(".ul-popup-body"):null;var i=null;p.curForm&&p.curForm.apply(function(){i=Array.prototype.slice.call(arguments)[0]}),"function"==typeof p.opt.afterClose?p.opt.afterClose(n,function(e){e&&p._hide(),p.hideActive=!1,o(e)},i):(p._hide(),p.hideActive=!1,o(!0))}}(),_hide:function(){return function(){var e=this;o("body").removeClass("ul-popup-opened"),o(window).trigger("closePopup",e),e.hideActive=!0,e.curForm&&(e.curForm.destroy(),e.curForm=null,e.opt.targetEvent.length&&o(e.opt.targetEvent).off(".stickyEvent"),e.opt.pages&&e.$header.off("click")),e.$close.off(".stickyEvent"),e.$savebtn.off(".stickyEvent"),e.$container&&e.$container.off(".stickyEvent"),o(window).off("linkPageChange"),o(window).off("linkDestroy"),o(window).off("resize"),e.opt.close.apply(window,[e.$container?e.$container.find(".ul-popup-body"):null]),e.$container&&(e.$container.addClass("ul-popup-hidden"),e.$container.remove(),e.$container=null),e.isHidden=!0,e.opt.beforeClose(),o(".ul-popup-pages-wrapper").length&&o(".ul-popup-pages-wrapper").off(".popupTabs"),e.hideActive=!1}}(),_setTab:function(){return function(e){var t=this,p=t.$header.find(".ul-tabs"),n=p.find('[data-target="'+e+'"]');p.find("li").removeClass("active"),n.addClass("active"),o(".ul-popup-pages-wrapper").css("margin-left",-1*(t.$el.width()*n.index())),t.$body.find(".ul-popup-page").removeClass("active"),t.$body.find('.ul-popup-page[data-pageId="'+e+'"]').addClass("active"),o(".ul-popup-pages-wrapper").off(".popupTabs").on("keyup.popupTabs",function(e){9===e.keyCode&&t.$header.find('li[data-target="'+o(document.activeElement).closest(".ul-popup-page").attr("data-pageid")+'"]').trigger("click")}),t._position()}}(),_renderFromData:function(){return function(t){var p=this;if(p.opt.pages){var n=o('<div class="ul-popup-pages-wrapper clearfix">'+t+"</div>"),i='<ul class="ul-tabs">',a=0;p.$el.addClass("ul-popupPages"),n.find(".ul-popup-page").each(function(){i+=e.sprintf('<li data-target="{pageId}" {dataIsHightlighted} {dataIsOpenOnInit}>{pageTitle}</li>',[o(this).attr("data-pageId"),o(this).data("isHighlighted")?'data-is-highlighted="true"':"",o(this).data("isOpenOnInit")?'data-is-open-on-init="true"':"",o(this).attr("data-pageTitle")]),a++}),i+="</ul>",p.$header.append(i),n.css("width",a*p.$el.width()),p.$body.html(n).removeClass("loading");var r=p.$header.find(".ul-tabs li");p._setTab(r.filter('[data-is-open-on-init="true"]').attr("data-target")||r.eq(0).attr("data-target"))}else p.$body.html(t).removeClass("loading");p.$header.find("h2").html(p.opt.title),p.opt.wide?p.$el.removeClass("ul-popup-small"):p.$el.addClass("ul-popup-small"),p.opt.extrawide&&(p.$el.removeClass("ul-popup-small"),p.$el.addClass("ul-popup-big")),p.opt.reopenMode&&(p.opt.showCloseBtn?o("#js-button-cancel").show():o("#js-button-cancel").hide(),p.opt.saveBtn?o(".ul-popup-footer .js-button-save").show():o(".ul-popup-footer .js-button-save").hide()),p.opt.saveBtn?p.$el.removeClass("ul-popup-no-save"):p.$el.addClass("ul-popup-no-save"),p.$el[p.opt.isTransparent?"addClass":"removeClass"]("ul-popup-transparent"),p.$container.attr("data-modifier",p.opt.popupModifier||""),p.$arrow[p.opt.stickyPopup&&!p.opt.hideArrow?"show":"hide"](),p.$close[p.opt.hideCloseCross?"hide":"show"](),p.$container.attr("data-is-overlay-hidden",p.opt.hideOverlay),p.opt.afterOpen.apply(window),p.opt.afterOpenThis.apply(p),p._position(),p.$container.removeClass("ul-popup-hidden")}}(),loadTemplate:function(){return function(){var e=this,t=[];t.push(e.opt.required),t.push(e.opt.templateUrl),t.push(e.opt.templateCss),e.opt.templateUrl?require(t,function(t,p){e._renderFromData(i.template(p,e.opt.templateData)),t&&(e.curForm=o.extend({beforeApply:null,beforeClose:null,init:function(){return function(){}}(),destroy:function(){return function(){}}(),apply:function(){return function(e){e()}}()},t),e.opt.options?e.curForm.init({options:e.opt.options,context:e.opt.context,$el:e.$el}):e.curForm.init({context:e.opt.context,$el:e.$el})),e.opt.targetEvent.length&&e.targetAddEvent(),e.opt.reopenMode||e._position()}):e._renderFromData(e.opt.data)}}()};return a});
//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map

//# sourceMappingURL=popupsMixin.js.map
