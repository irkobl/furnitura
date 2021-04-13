"use strict";define("widget-mainmenu-edit",["jquery","U","_","i18n","nf","lodash","widget","ul-framework","widget-mainmenu-view","text!/widgets/mainmenu/html/mainmenu.html","css!/css/require/widgets/mainmenu-edit.css"],function(e,t,n,i,a,r,u,o,d){return{minCols:12,firstView:!0,changeDinamicPage:function(){return function(n,i){i||(i=function(){return function(){}}());var a=n.split("#")[1];n=n.split("#").shift();var r="/"===n?"/index":n;n="/sites/url/"+window.cache.site+"/pages/id"+r+"/edit";var u=function(){return function(t){if(t||(t=function(){return function(){}}()),a){e("html, body, #ul-main").scrollTop(0).trigger("scroll");var n=e("#"+a),i=n.offset().top,r=e("header .ul-menu-fixed"),u=e("header .ul-w-mainmenu"),o=e(".ul-w-mainmenu").outerHeight(!0);r.length&&u.attr("data-fixed")&&"true"===u.attr("data-fixed")&&(i=n.offset().top-o),!r.length&&u.attr("data-fixed")&&"true"===u.attr("data-fixed")&&(i=n.offset().top-o),e("html, body, #ul-main").animate({scrollTop:i},500,function(){t()})}else t()}}();return r==="/"+t.params.page?void u():void t.page.setPage(n,function(n){t.hist.pushState({data:{url:"/sites/url/"+t.params.site+"/pages/id"+r+"/edit"},title:"title",url:"/sites/url/"+t.params.site+"/pages/id"+r+"/constructor"}),t.menu.panels.current!==t.params.panelDefault&&t.menu.setPanel(t.params.panelDefault),e(window).off("widgetsCollectionFull.mainMenuTrigger"),e(window).on("widgetsCollectionFull.mainMenuTrigger",function(){u(function(){i(n)})})})}}(),init:function(){return function(){var n=this,i=function(){return function(e){var t=/^(http|https):\/\//i;return t.test(e)}}();e(document).on("click.mainmenu",".js-w-mainmenu",function(a){if("none"!==e(this).data("type")){a.preventDefault();var r=e(this).attr("href");"external"===e(this).data("type")||i(r)||n.changeDinamicPage(r,function(){localStorage.previousPageId=t.params.pageIsEditable?t.params.pageId:localStorage.previousPageId})}}).on("pageRemoved",function(){var n=u.getWidgetsByField("menu");n.forEach(function(n){var i="/sites/url/"+t.params.site+"/pages/id/"+t.params.pageId+"/widgets/"+n.id+"/getData";e.ajax({url:i,type:"GET",data:{widgetId:n.id},api:!0,ok:function(){return function(e){n.data=e,n.save(function(){n.render()})}}(),noOk:function(){return function(e){a.notify("Произошла ошибка",e)}}(),error:function(){return function(e){a.notify("Произошла ошибка",e)}}()})})}),e(window).on("resizeAllWidgets.mainmenu",function(){d.setSizeByDevice({$fixedContainer:e(".ul-menu-fixed"),device:t.constructor.deviceMode.device}),e(window).off(".mainmenuResize"),e.each(e('[data-widget="mainmenu"]'),function(t,n){var i=u.get(e(n).attr("id"));i&&"mainmenu"==i.type&&i.render()})})}}(),destroy:function(){return function(){}}(),getPageMap:function(){return function(e){require(["model/pages"],function(n){n.load(t.params.site,function(t){var n={};t.forEach(function(e){n[e._id]=e.id}),e&&e(n)})})}}(),edit:function(){return function(){var e=this;require(["panelDialog"],function(t){e.getPageMap(function(n){e.pageMap=n,t.show({context:e,templateUrl:"/widgets/mainmenu/html/form.html",required:["widget-mainmenu-form"],templateCss:["/css/require/widgets/mainmenu-edit.css"],templateData:{data:e.data},close:function(){return function(){e.save(function(){e.render()})}}()}),e.overlay.show({$el:e.$el,autohide:!0,close:function(){return function(){t.hide()}}()})})})}}(),_checkPosConst:function(){return function(n,i){var a=n.isAbsolute;return n.headerHeight-n.top<=n.menuHeight&&!a&&!e(".ul-menu-fixed").length&&375<=n.$bodyFict.innerWidth()?(d.setSizeByDevice({$fixedContainer:i.addFixedContainer(n),device:t.constructor.deviceMode.device}),992<=n.$bodyFict.innerWidth()&&n.$menuParent.css("height",n.menuHeight),i.fireResize(),a=!0):n.top<n.headerHeight-n.menuHeight&&(!e("header .ul-w-mainmenu").length&&(n.$menu.appendTo(n.$menuParent),n.$menuParent.css("height","")),i.removeFixedContainer(n),a&&(a=!1,i.fireResize())),i.fixedContainerColors(n),a}}(),initView:function(){return function(n){var i=this;e(window).on("changeDeviceMode",function(t,i){e("#"+n+" .ul-w-mainmenu-nav").attr("data-device",i)}),"desktop"!==t.constructor.deviceMode.device&&e("#"+n+" .ul-w-mainmenu-nav").removeClass("desktop"),d.open(n),e("#"+n+" .ul-w-mainmenu-nav").attr("data-device",t.constructor.deviceMode.device);var a=d;i.firstView&&(i.firstView=!1,!window.constructorMode&&("true"===e("header .ul-w-mainmenu").attr("data-fixed")&&(a.isAbsolute=i._checkPosConst({isAbsolute:a.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e("#ul-main").scrollTop(),headerHeight:a.headerHeight,menuHeight:a.menuHeight,$menuParent:a.$menuParent,$bodyFict:a.$bodyFict,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent")},a)),e("#ul-main").on("scroll.mainmenu",function(){"true"===e("header .ul-w-mainmenu").attr("data-fixed")&&(a.isAbsolute=i._checkPosConst({isAbsolute:a.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e("#ul-main").scrollTop(),headerHeight:a.headerHeight,menuHeight:a.menuHeight,$menuParent:a.$menuParent,$bodyFict:a.$bodyFict,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent")},a))})),e(document).on("changeImmediate.mainmenu, click.mainmenu",".js-fm-colors, .js-fm-opacity",function(){var t=e(".js-fm-colors .active",this.$el),n=e(".js-fm-colors > li",this.$el).index(t),r=o.range.getVal(e(".js-fm-opacity",this.$el));e("header .ul-w-mainmenu").attr("data-bgcolor",n),e("header .ul-w-mainmenu").attr("data-bgtransparent",r),window.constructorMode||(a.isAbsolute=i._checkPosConst({isAbsolute:a.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e("#ul-main").scrollTop(),headerHeight:a.headerHeight,menuHeight:a.menuHeight,$menuParent:a.$menuParent,$bodyFict:a.$bodyFict,bgcolor:n,bgtransparent:r},a))}),e(document).on("click.mainmenu",".js-panel-action",function(){"panelPreview"===e(this).data("panel")&&e(".ul-menu-fixed").length&&(a.removeFixedContainerEXP({isAbsolute:a.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e(document).scrollTop(),headerHeight:a.headerHeight,menuHeight:a.menuHeight,$menuParent:a.$menuParent,$bodyFict:a.$bodyFict,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent")}),a.isAbsolute=!1)}),e(document).on("change.mainmenu",".js-fm-switcher",function(){a.isAbsolute=a.checkPosStop({isAbsolute:a.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e("#ul-main").scrollTop(),headerHeight:a.headerHeight,menuHeight:a.menuHeight,$menuParent:a.$menuParent,$bodyFict:a.$bodyFict,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent"),isFixed:e("header .ul-w-mainmenu").attr("data-fixed")})}))}}()}});
//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map
