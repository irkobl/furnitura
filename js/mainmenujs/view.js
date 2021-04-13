"use strict";define("widget-mainmenu-view",["jquery"],function(e){return{isOpen:!1,isAbsolute:!1,headerHeight:e("header").outerHeight(!0),menuHeight:e(".ul-w-mainmenu").outerHeight(!0),$menuParent:e("header .ul-w-mainmenu").parent(),$bodyFict:e("#body-fict"),isFirstTime:!0,appendScriptFor:function(){return function(n){var t=0<e("script[src='"+n+"']").length;if(!t){var i=e('<script type="text/javascript" src=\''+n+"'></script>");e("head").append(i),this.scriptsInserted=!0}}}(),insertMenuScripts:function(){return function(){this.appendScriptFor("/widgets/mainmenu/js/fontobserver.js"),this.appendScriptFor("/widgets/mainmenu/js/preView.js")}}(),open:function(){return function(n){var t=this;this.insertMenuScripts(),t.menuHeight=e(".ul-w-mainmenu").outerHeight(!0),t.headerHeight=e("header").outerHeight(!0);var i=window.location.hash,a=function(){return function(n){setTimeout(function(){if(!r(n)){var i=0;i=768<e(window).width()&&"true"===e("header .ul-w-mainmenu").attr("data-fixed")?e(n).offset().top-t.menuHeight:e(n).offset().top,e("html, body").animate({scrollTop:i},100)}},500)}}(),r=function(){return function(e){var n=e.get(0).getBoundingClientRect(),t=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(0>n.bottom-n.height||0<=n.top-(t-n.height))}}();if(0>i.search(/[А-яЁё\/=\.\,\:\;]/)&&!/#=.{2}-.{2}=/.test(i)){var u=e(i);u.length&&("complete"===document.readyState?a(u):e(window).on("load",function(){a(u)}))}e("header .ul-w-mainmenu").parent().hasClass("ul-menu-fixed-container-inside")||(t.$menuParent=e("header .ul-w-mainmenu").parent()),t.$viewEl=e("#"+n),this.isOpen||(this.isOpen=!0,this.init(e("#"+n)))}}(),destroy:function(){return function(){e(document).off(".mainmenu"),e("#ul-main").off(".mainmenu")}}(),init:function(){return function(){var n=this,t=this,i=".vertical-menu:not(.not-prevent) .ul-w-mainmenu > .ul-w-mainmenu-nav",a=".ul-w-mainmenu-nested",r=".ul-w-mainmenu-item.ul-w-mainmenu-have-nested",u=".js-w-mainmenu",o=".ul-w-mainmenu-toggle",s=i+" > "+r+" > "+a+" > "+r+", "+i+" > "+o+" > "+r+" > "+a+" > "+r;e(i+" > "+r+" > "+u+", "+i+" > "+o+" "+r+" > "+u).on("click.mainmenu",function(){var n=e(this).parent();return e(i+" > "+r+", "+i+" > "+o+" "+r).each(function(){this!=n.get(0)&&e(this).hasClass("opened")&&e(this).removeClass("opened")}),e(s).each(function(){e(this).parent().parent().hasClass("opened")||e(this).removeClass("opened")}),e(this).parent().hasClass("opened")?void e(this).parent().removeClass("opened"):(n.addClass("opened"),!1)}),e(i+" > "+r+" > "+a+" > "+r+" > "+u+", "+i+" > "+o+" "+r+" > "+a+" > "+r+" > "+u).on("click.mainmenu",function(){var n=e(this).parent();return e(s).each(function(){this!=n.get(0)&&e(this).hasClass("opened")&&e(this).removeClass("opened")}),n.hasClass("opened")?void 0:(n.addClass("opened"),!1)}),e(document).on("click.mainmenu",function(e){n.handlerClickBurger(e)}),window.constructorMode||("true"===e("header .ul-w-mainmenu").attr("data-fixed")&&(t.isAbsolute=t.checkPosPub({isAbsolute:t.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e(document).scrollTop(),headerHeight:t.headerHeight,menuHeight:t.menuHeight,$menuParent:t.$menuParent,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent")})),e('.js-w-mainmenu, a[href*="#"]').click(function(){var n=e(this).attr("href").split("#");if(768<e(window).width()){if(n[1]&&(n[0]===location.pathname.replace(/^\/preview\/(.*?)(\/index|\/|$)/i,"/")||n[0]===location.pathname.replace(/^\/site_import\/interactive_preview\/(.*?)(\/index|\/|$)/i,"/"))){var i=n[1];if(0<=i.search(/[А-яЁё\/]/))return;var a=window.document.getElementById(i);if(!a)return;var r=0;return r=e("header .ul-menu-fixed").length&&e("header .ul-w-mainmenu").attr("data-fixed")?e(a).offset().top-t.menuHeight:!e("header .ul-menu-fixed").length&&e("header .ul-w-mainmenu").attr("data-fixed")?e(a).offset().top-2*t.menuHeight:e(a).offset().top,r!=e(document).scrollTop()&&(e("html, body").animate({scrollTop:r},500),t.selectMenuItemByHash(e(this).attr("href"))),!1}if(n[0]===location.pathname.replace(/^\/preview\/(.*?)(\/index|\/|$)/i,"/"))return 0!==e(document).scrollTop()&&(e("html, body").animate({scrollTop:0},500),t.selectMenuItemByHash(e(this).attr("href"))),!1}else if(n[1]&&n[0]===location.pathname.replace(/^\/preview\/(.*?)(\/index|\/|$)/i,"/")){var a=window.document.getElementById(n[1]);if(!a)return;t.selectMenuItemByHash(e(this).attr("href"))}else n[0]===location.pathname.replace(/^\/preview\/(.*?)(\/index|\/|$)/i,"/")&&t.selectMenuItemByHash(e(this).attr("href"))}),e(document).on("scroll.mainmenu",function(){"true"===e("header .ul-w-mainmenu").attr("data-fixed")&&(t.isAbsolute=t.checkPosPub({isAbsolute:t.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e(document).scrollTop(),headerHeight:t.headerHeight,menuHeight:t.menuHeight,$menuParent:t.$menuParent,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent")}))}).on("resize.mainmenu",function(){t.menuHeight=e(".ul-w-mainmenu").outerHeight(!0),t.headerHeight=e("header").outerHeight(!0)}),t.selectMenuItemByHash(e(this).attr("href"))),t.fireResize()}}(),checkPosPub:function(){return function(n){var t=n.isAbsolute;if(n.headerHeight-n.top<=n.menuHeight&&!t&&768<window.innerWidth){if(1<=e(".iframe-preview-content").length&&768<e(".iframe-preview-content").width()||0===e(".iframe-preview-content").length){var i=this.addFixedContainer(n);this.fixedContainerColors(n),i.css("left","0"),i.css("width","100%"),n.$menuParent.css("height",n.menuHeight),t=!0,this.fireResize()}}else n.top<n.headerHeight-n.menuHeight&&(this.removeFixedContainer(n),e("header .ul-w-mainmenu").length||(n.$menu.appendTo(n.$menuParent),n.$menuParent.css("height","")),t&&this.fireResize(),t=!1);return 768>e(window).width()&&1<=e(".ul-menu-fixed").length&&(!e("header .ul-w-mainmenu").length&&n.$menu.appendTo(n.$menuParent),this.removeFixedContainer(n),t&&this.fireResize(),t=!1),t}}(),checkPosStop:function(){return function(n){return"false"===n.isFixed&&n.headerHeight-n.top<=n.menuHeight&&e(".ul-menu-fixed").length?(this.removeFixedContainer(n),!e("header .ul-w-mainmenu").length&&(n.$menu.appendTo(n.$menuParent),n.$menuParent.css("height","")),this.fireResize()):"true"===n.isFixed&&n.headerHeight-n.top<=n.menuHeight&&!e(".ul-menu-fixed").length&&(this.setSizeByDevice({$fixedContainer:this.addFixedContainer(n),device:e("#body").attr("data-device")}),this.fixedContainerColors(n),this.fireResize()),n.isAbsolute}}(),addFixedContainer:function(){return function(n){var t=e('<div class="ul-menu-fixed hide"></div>'),i=e('<div class="ul-menu-fixed-container"></div>'),a=e('<div class="ul-menu-fixed-container-inside"></div>');return t.appendTo(n.$menuParent),i.appendTo(t),a.appendTo(i),n.$menu.appendTo(a),t.css({position:"fixed",top:"0","z-index":"300",height:n.$menu.height}),e("header .ul-w-mainmenu-nav").css({"margin-top":0,"margin-bottom":0}),a.css({"max-width":1170,"min-width":375,margin:"auto",padding:"0 15px"}),t.animate({opacity:"show"},400),t.removeClass("hide"),t}}(),setSizeByDevice:function(){return function(n){var t=e("body").hasClass("ul-left-panel-hide"),i=e(".ul-buypremium-bar").length;"desktop"===n.device?(n.$fixedContainer.removeClass("hide"),n.$fixedContainer.css("left",(t?48:280)+"px"),n.$fixedContainer.css("width","calc(100% - "+(t?48:280)+"px)")):(n.$fixedContainer.addClass("hide"),n.$fixedContainer.css("left",e("#body").offset().left),n.$fixedContainer.css("width",e("#body").width())),n.$fixedContainer.css("top",i?"60px":"0px"),n.$fixedContainer.css("height","")}}(),fixedContainerColors:function(){return function(n){n.headerHeight-n.top<=n.menuHeight&&("0"===n.bgcolor&&e(".ul-menu-fixed").css("background","rgba(245,245,245,"+n.bgtransparent/100+")"),"1"===n.bgcolor&&e(".ul-menu-fixed").css("background","rgba(168,168,168,"+n.bgtransparent/100+")"),"2"===n.bgcolor&&e(".ul-menu-fixed").css("background","rgba(68,68,68,"+n.bgtransparent/100+")"),"3"===n.bgcolor&&e(".ul-menu-fixed").css("background","rgba(15,15,15,"+n.bgtransparent/100+")"))}}(),removeFixedContainer:function(){return function(n){e("header .ul-w-mainmenu-nav").css({"margin-top":"","margin-bottom":""}),n.$menuParent.css("height",""),n.$menu.appendTo(n.$menuParent),e(".ul-menu-fixed").remove()}}(),removeFixedContainerEXP:function(){return function(n){e("header .ul-w-mainmenu-nav").css({"margin-top":"","margin-bottom":""}),n.$menuParent.css("height",""),n.$menu.appendTo(n.$menuParent),setTimeout(function(){e(".ul-menu-fixed").remove()},100)}}(),selectMenuItemByHash:function(){return function(n){var t=n?n.replace(/^.*?(\/.*?#.*)/,"$1"):window.location.pathname.replace(/^\/preview\/(.*?)(\/index|\/|$)/i,"/")+window.location.hash,i=e('.js-w-mainmenu[href="'+t+'"]');i.length&&(e(".ul-w-mainmenu-item").removeClass("ul-w-mainmenu-active-item"),i.closest(".ul-w-mainmenu-item").addClass("ul-w-mainmenu-active-item"),i.parents().hasClass("ul-w-mainmenu-have-nested")&&i.parents().closest(".ul-w-mainmenu-have-nested").addClass("ul-w-mainmenu-active-item"))}}(),triggerEvent:function(){return function(e,n){var t;if(document.createEvent?(t=document.createEvent("HTMLEvents"),t.initEvent(n,!0,!0)):(t=document.createEventObject(),t.eventType=n),t.eventName=n,document.createEvent)e.dispatchEvent(t);else if("resize"===n){var i=document.documentElement.style.width;document.documentElement.style.width="99.999999%",setTimeout(function(){document.documentElement.style.width=i},50)}else e.fireEvent("on"+t.eventType,t)}}(),fireResize:function(){return function(){this.triggerEvent(window,"resize")}}(),handlerClickBurger:function(){return function(n){var t=e(n.target);e(n.target).hasClass("ul-w-mainmenu-toggle-more")?t.closest(".ul-w-mainmenu-toggle").toggleClass("active"):t.closest(".ul-w-mainmenu-toggle").removeClass("active"),0<e(n.target).parents().closest(".vertical-menu").length?(0<e(n.target).closest(".ul-w-mainmenu-showButton").length&&(t.siblings(".ul-w-mainmenu-nav").toggleClass("show-menu"),t.toggleClass("show-menu")),0<e(n.target).closest(".ul-w-mainmenu-toggle-button").length&&(t.closest(".ul-w-mainmenu-nav").removeClass("show-menu"),t.parent().siblings(".ul-w-mainmenu-showButton").removeClass("show-menu"))):(0<e(n.target).closest(".ul-w-mainmenu-toggle-button").length?t.closest(".ul-w-mainmenu").toggleClass("ul-w-mainmenu-collapse-in"):t.closest(".ul-w-mainmenu").removeClass("ul-w-mainmenu-collapse-in"),0<e(n.target).closest(".ul-w-mainmenu-showButton").length?t.siblings(".ul-w-mainmenu-nav").toggleClass("show-menu"):t.siblings(".ul-w-mainmenu-nav").removeClass("show-menu"))}}()}});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map
