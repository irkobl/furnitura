"use strict";define("panelConstructor",["jquery","_","i18n","U","constructorLogger","uldraggable","ul-framework/scrollbar","stickyPopup","text!html/constructor/blocks.html","text!html/constructor/blockFavorite.html","billing/feature-availability","nf","device/tooltips","jquery-ui-draggable"],function(t,e,o,n,r,i,a,s,l,c,u,d,f){var h={$blockPanel:t("#ul-panelConstructor"),init:function(){return function(t){var e=this;e.menu=t,n.constructor.deviceMode||(n.constructor.deviceMode={device:"desktop",panel:"panelConstructor",isPanelConstructorEditable:!0}),n.constructor.deviceMode.isPanelConstructorEditable&&e.initEvent()}}(),initEvent:function(){return function(){var t=this;!t.favoriteBlock&&window.block.favorite&&(t.favoriteBlock=JSON.parse(decodeURIComponent(window.escape(window.atob(window.block.favorite)))),delete window.block.favorite),i.init(t.menu),n.params.isShowMobileTooltip&&f.show(),t.scrollable.init(t.$el,{onScroll:t.elementsPreview.hidePopup.bind(t.elementsPreview)}),t.widgetsSearch.init(t.$el,{onSearchStart:t.scrollable.onSearchStart.bind(t.scrollable),onSearchEnd:t.scrollable.onSearchEnd.bind(t.scrollable),onSearchFieldInput:function(){return function(){t.elementsPreview.hidePopup(),t.scrollable.onSearchFieldInput()}}()}),t.elementsPreview.init(),t.foldable.init(t.$el,{whileFoldToggling:function(){return function(e){t.scrollable.update(e.closest("[data-scrollable-content]"))}}(),onFoldToggle:function(){return function(e,o){t.scrollable.scrollToViewport(e,o)}}()}),t.tabs.init(t.$el,{onPanelSwitch:function(){return function(e){var o=t.scrollable.$scrollable.filter('[data-scrollable-content="'+e+'"]');t.scrollable.update(o),t.scrollable.updateTabsOverlay(o.prop("scrollTop"))}}(),onBlocksLoaded:function(){return function(){i.init(t.menu)}}()}),t._addEvents()}}(),addBlockToMenu:function(){return function(t,e){var o=this;o["add"+t](e)}}(),updateScreenshotBlock:function(){return function(e,o){var n=this,r=t('.js-panel-constructor-elements [data-type="block"] [data-id="favorites"] [data-id="'+o.id+'"]',n.$blockPanel);t("<img>").one("load",function(){t(this).addClass("ul-draggable-block__image js-ul-block-preview"),r.attr("data-loading-img",!1),t(".js-favorite-loading-image",r).remove(),r.append(this),t(".js-ul-block-preview",r)}).attr("src",o.screenshotUrl).attr("data-src",o.screenshotUrl)}}(),addFavorite:function(){return function(n){var r=this,a=t('.js-panel-constructor-elements [data-type="block"] [data-id="favorites"] ul.js-block-list',r.$blockPanel),s=r.favoriteBlock.length;s||t(".js-help-favorites",a).hide(),n.title||(n.title=""),r.favoriteBlock.push(n);var l=null;l=n.title&&n.title.length?n.title:o("constructor.favorite-blocks.block favorites title",s+1);var u=t(e.template(c,{_id:n._id,title:l,___:o("constructor")})),d=u.appendTo(a);i.draggable(d,i.dropEl)}}(),scrollable:{init:function(){return function(e,o){var n=this;n.inited||(n.inited=!0,n.opts=o,n.$scrollable=t(".js-panel-scrollable",e),n.$scrollableWidgets=n.$scrollable.filter('[data-scrollable-content="widgets"]'),n.$tabs=t(".js-panel-constructor-nav",e),n.$scrollable.each(function(){var e=t(this);a.create(e,{marginStart:50,marginEnd:"widgets"===e.data("scrollableContent")?50:0,onScrollY:n.onScroll.bind(n)},{suppressScrollX:!0})}),n.addListeners())}}(),addListeners:function(){return function(){var e=this;t(window).on("resize",function(){e.update(e.$scrollable,{})})}}(),onScroll:function(){return function(t){var e=this;e.updateTabsOverlay(t),e.opts.onScroll&&e.opts.onScroll()}}(),updateTabsOverlay:function(){return function(t){var e=this;e.$tabs.attr("data-no-overlay",10>t)}}(),update:function(){return function(o,n){var r=this;n=e.extend({scrollToTop:!1,rememberPosition:!1},n||{}),o.each(function(){var e=t(this);n.rememberPosition&&e.data("lastScrollTop",e.scrollTop()),n.scrollToTop&&(e.scrollTop(0),r.onScroll(0)),a.update(e)})}}(),restoreLastScrollPosition:function(){return function(t){var e=this,o=t.data("lastScrollTop");o&&(t.scrollTop(o),e.onScroll(o)),t.removeData("lastScrollTop")}}(),onSearchFieldInput:function(){return function(){this.update(this.$scrollableWidgets,{scrollToTop:!0,rememberPosition:!1})}}(),onSearchStart:function(){return function(){this.update(this.$scrollableWidgets,{scrollToTop:!0,rememberPosition:!0})}}(),onSearchEnd:function(){return function(){this.update(this.$scrollableWidgets,{scrollToTop:!1,rememberPosition:!1}),this.restoreLastScrollPosition(this.$scrollableWidgets)}}(),scrollToViewport:function(){return function(t,e){var o=this,n=58,r=t.closest(o.$scrollable),i=r.offset().top+n,a=r.outerHeight()-n-70,s=e,l=t.offset().top-i;if(0>l||0>a-(l+s)){var c=s>=a||0>l?l+r.scrollTop():r.scrollTop()+(l+s-a);r.animate({scrollTop:c},{duration:450}).promise().done(function(){r.clearQueue()}),o.onScroll(c)}}}()},elementsPreview:{showDelay:1e3,showDelayDisabled:200,hideDelay:200,popup:null,$elShown:null,isShown:!1,timeoutIds:{show:null,hide:null},init:function(){return function(){var e=this;if(!e.inited){e.inited=!0;var o=t("html");e.previewLang=(o.attr("sitelang")||o.attr("lang")).toLowerCase(),-1===["ru","en"].indexOf(e.previewLang)&&(e.previewLang="en"),require(["text!/html/constructor/panelWidgetPreview.html","text!/html/constructor/panelBlockPreview.html"],function(t,o){e.widgetPreviewTmpl=t,e.blockPreviewTmpl=o,e.addListeners()})}}}(),addListeners:function(){return function(){var e=this;t(document).on("mousedown",".js-draggable-widget",function(){e.hidePopup(!0)}).on("mouseenter",".js-el-with-preview",function(){e.showPopup(t(this))}).on("mouseleave",".js-el-with-preview",function(){e.hidePopup()}),h.$blockPanel.on("mousedown","li.js-draggable-block",function(e){var o=t(e.target);o.closest(".js-block-favorite-actions").length||"no-active"===t(this).attr("data-status")&&t(this).attr("data-status","active")}).on("mouseup","li.js-draggable-block",function(e){var o=t(e.target);o.closest(".js-block-favorite-actions").length||"active"===t(this).attr("data-status")&&t(this).attr("data-status","no-active")})}}(),showPopup:function(){return function(r){function a(){var i="widget"===d?e.template(l.widgetPreviewTmpl,e.extend({isFullPreview:f,widgetName:r.data("widget"),isDisabled:c,projectName:n.params.projectName,previewLang:l.previewLang,__:o},p)):e.template(l.blockPreviewTmpl,e.extend({isFullPreview:f,blockId:r.data("id"),imgSrc:r.find("img.js-ul-block-preview").attr("data-src"),__:o},p));l.timeoutIds.show=setTimeout(function(){l._clearTimeout("hide"),l.$elShown=r,l.isShown=!0,s.open({$targetEl:r,saveBtn:!1,wide:!0,titleShow:!1,data:i,isTransparent:"block"===d&&!f,afterOpenThis:function(){return function(){l.popup=this,t("img",l.popup.$el).one("load",function(){l.popup._position()})}}(),beforeClose:function(){return function(){l.popup&&l.popup.$el&&t("img",l.popup.$el).off("load")}}(),hideArrow:!1,hideCloseCross:!0,hideOverlay:!0})},c?l.showDelayDisabled:l.showDelay)}var l=this;if(!i.dragTooltip.isShown&&"true"!==r.attr("data-loading-img")){var c=!!r.attr("disabled"),d=r.data("elType"),f="widget"===d||r.data("hasFullPreview");if(l._clearTimeout("show"),l.$elShown&&l.$elShown.is(r)&&l.isShown)return void l._clearTimeout("hide");var h=r.data("featureName"),p={isFeature:!1,featureName:h};return h?void u.check(h,{showPopupIfNotAvailable:!1},function(t,o){e.extend(p,{isFeature:!0,isAvailableFeature:t,featureMinTariff:o}),a()}):void a()}}}(),hidePopup:function(){return function(t){function e(){o.popup&&o.popup.hide&&(o.popup.hide(),o.popup=null),o.$elShown=null,o.isShown=!1}var o=this;o._clearTimeout("show"),!o.isShown||o.timeoutIds.hide||(t?e():o.timeoutIds.hide=setTimeout(e,o.hideDelay))}}(),_clearTimeout:function(){return function(t){var e=this;clearTimeout(e.timeoutIds[t]),e.timeoutIds[t]=null}}()},widgetsSearch:{init:function(){return function(t,e){var o=this;o.inited||(o.inited=!0,require(["json!/sites/url/"+n.params.site+"/widgetsSearchTags"],function(n){o.exampleTags=n?n.exampleTags:null,o.searchTags=n?o.prepareSearchTags(n.allTags):null,o._init(t,e)}))}}(),_init:function(){return function(e,o){var n=this;n.opts=o,n.$form=t(".js-widgets-search-form",e),n.$input=t(".js-widgets-search-form__input",n.$form),n.$widgets=t(".js-widgets-groups",e),n.$searchResults=t(".js-widgets-search-results",e),n.$searchResultsEmpty=t(".js-widgets-search-results__empty",n.$searchResults),n.$searchResultsFound=t(".js-widgets-search-results__found",n.$searchResults),n.isSearchMode=!1,n.addListeners()}}(),addListeners:function(){return function(){var e=this;t(document).on("input",".js-widgets-search-form__input",function(){var o=t(this).val().trim().toLowerCase();o?e.search(o,function(t){e.logSearch(o,t)}):e.stopSearch({clearField:!1}),e.opts.onSearchFieldInput()}).on("focus",".js-widgets-search-form__input",function(){e.clearInputPlaceholder()}).on("blur",".js-widgets-search-form__input",function(){e.restoreInputPlaceholder()}).on("click",".js-widgets-search-form__clear, .js-widgets-search-results__clear",function(){e.logSearch(e.lastSearchQuery,e.lastSearchResults,!0),e.stopSearch({clearField:!0})}).on("click",".js-widgets-search-results__empty__example",function(){e.logSearch(e.lastSearchQuery,e.lastSearchResults,!0),e.setSearchQuery(t(this).text())}).on("mousedown",".js-widgets-search-results .js-draggable-widget",function(){e.logSearch(e.lastSearchQuery,e.lastSearchResults,!0)}).on("click","js-block-remove",function(){e.removeBlock(this)})}}(),clearInputPlaceholder:function(){return function(){var t=this,e=t.$input.attr("placeholder");t.$input.attr("data-placeholder",e).attr("placeholder","")}}(),restoreInputPlaceholder:function(){return function(){var t=this,e=t.$input.attr("data-placeholder");t.$input.attr("placeholder",e).removeAttr("data-placeholder")}}(),prepareSearchTags:function(){return function(t){var e=o("widgets");return t.reduce(function(t,o){return o.tags.concat(e(o.widgetName+".name").toLowerCase()).forEach(function(e){var n=e.toLowerCase();t[n]||(t[n]=[]),-1===t[n].indexOf(o.widgetName)&&t[n].push(o.widgetName)}),t},{})}}(),search:function(){return function(t,o){var n=this;n.lastSearchQuery=t,n.isSearchMode||n.startSearch();var r=[];return n.searchTags?(Object.keys(n.searchTags).forEach(function(e){-1<e.indexOf(t.toLowerCase())&&(r=r.concat(n.searchTags[e]))}),r=e.uniq(r),n.showResults(r),n.lastSearchResults=r,void o(r)):(n.showResults(r),void o(r))}}(),setSearchQuery:function(){return function(t){var e=this;e.$input.val(t).trigger("focus"),e.search(t,function(o){e.logSearch(t,o)})}}(),showResults:function(){return function(e){var n=this,r=!!e.length;n.deInitDraggableResults();var i="false"===n.$searchResultsEmpty.attr("data-is-hidden");if(n.$searchResultsFound.attr("data-is-hidden",!r).empty(),n.$searchResultsEmpty.attr("data-is-hidden",r),r){var a=t();e.forEach(function(e){a=a.add(t('[data-widget="'+e+'"]',n.$widgets))}),n.$searchResultsFound.html(a.clone()),n.initDraggableResults()}else if(!i&&n.exampleTags){var s=n.getRandomExampleTags().map(function(t){return'<span class="ul-widgets-search-results__empty__example js-widgets-search-results__empty__example">'+t+"</span>"});n.$searchResultsEmpty.find(".js-widgets-search-results__empty__examples").html(o("constructor.try WIDGETNAME_1 or WIDGETNAME_2",s[0],s[1]))}}}(),initDraggableResults:function(){return function(){var e=this;i.initSome(t(".js-draggable-widget",e.$searchResultsFound))}}(),deInitDraggableResults:function(){return function(){var e=this;i.deInitSome(t(".js-draggable-widget",e.$searchResultsFound))}}(),getRandomExampleTags:function(){return function(){for(var t=this,e=t.exampleTags.length,o=function(){return function(){return t.exampleTags[Math.floor(Math.random()*e)].toLowerCase()}}(),n=o(),r=o();r===n;)r=o();return[n,r]}}(),startSearch:function(){return function(){var t=this;t.isSearchMode=!0,t.$form.attr("data-not-empty","true"),t.$widgets.attr("data-is-hidden","true"),t.$searchResults.attr("data-is-hidden","false"),t.opts.onSearchStart()}}(),stopSearch:function(){return function(t){var e=this;t.clearField&&e.$input.val(""),e.$form.removeAttr("data-not-empty"),e.$widgets.attr("data-is-hidden","false"),e.$searchResults.attr("data-is-hidden","true"),e.deInitDraggableResults(),e.$searchResultsFound.attr("data-is-hidden","true").empty(),e.$searchResultsEmpty.attr("data-is-hidden","true"),e.opts.onSearchEnd(),e.isSearchMode=!1}}(),logSearch:function(){return function(t,e,o){var n=this;clearTimeout(n.logTimeout),t===n.lastLoggedSearchQuery||(o?n._logSearch(t,e):n.logTimeout=setTimeout(function(){n._logSearch(t,e)},2e3))}}(),_logSearch:function(){return function(t,e){var o=this;o.lastLoggedSearchQuery=t,r.log({action:"widgetSearch",data:{searchQuery:t,widgetsFound:JSON.stringify(e)}})}}()},foldable:{init:function(){return function(o,n){var r=this;r.inited||(r.inited=!0,r.opts=e.extend({whileFoldToggling:function(){return function(){}}()},n||{}),r.addListeners(),r.db.init({widgets:t(".js-widgets-groups",o).data("unfoldedGroups"),blocks:t(".js-blocks-groups",o).data("unfoldedGroups")}))}}(),addListeners:function(){return function(){var e=this;t(document).on("click",".js-fold-toggle",function(){var o=t(this).closest(".js-foldable");o.attr("data-is-folding-locked")||(o.attr("data-is-folding-locked","true"),e.toggleFolding(o,function(){o.removeAttr("data-is-folding-locked")}))})}}(),toggleFolding:function(){return function(e,o){var n=this,r="true"===e.attr("data-is-folded"),i=r?"unfold":"fold",a=t(".js-foldable__sliding",e).eq(0),s=a.outerHeight();a.css({maxHeight:s}),e.removeAttr("data-auto-height"),setTimeout(function(){function r(t){l||t>1e3||(n.opts.whileFoldToggling(e),setTimeout(function(){r(t+50)},50))}e.attr("data-is-fold-processing","true"),e.removeAttr("data-no-transition"),n["_"+i](e,a,s,function(t){n.opts.onFoldToggle(e,t)});var l=!1;r(0);var c=Math.random().toString().slice(2);a.on("transitionend."+c,function(n){t(n.target).is(a)&&"max-height"===n.originalEvent.propertyName&&(l=!0,a.off("."+c),e.removeAttr("data-is-fold-processing"),"unfold"==i&&e.attr("data-auto-height","true").attr("data-no-transition","true"),o&&o())})},0)}}(),_fold:function(){return function(t,e,o,n){var r=this;n(t.outerHeight()-o),setTimeout(function(){t.attr("data-is-folded","true"),e.css({maxHeight:0})},0),r.db.forget(t.attr("data-id"),t.closest(".js-panel-constructor-elements").attr("data-type"))}}(),_unfold:function(){return function(t,e,o,n){var r=this;t.removeAttr("data-is-folded");var i=e.clone();i.css({opacity:0,position:"absolute",transition:"none",maxHeight:"none"}).insertAfter(e);var a=i.outerHeight();n(t.outerHeight()+a),setTimeout(function(){e.css("max-height",a),i.remove()},0),r.db.remember(t.attr("data-id"),t.closest(".js-panel-constructor-elements").attr("data-type"))}}(),db:{init:function(){return function(o){var r=this;r.endpoint="/sites/url/"+n.params.site+"/constructorUnfoldedGroups/",r.data=o,r.save=e.debounce(function(e){t.post(r.endpoint+e,{groupNames:r.data[e]})},1e3)}}(),getData:function(){return function(){var t=this;return t.data}}(),remember:function(){return function(t,o){var n=this;n.data[o].push(t),n.data[o]=e.uniq(n.data[o]),n.save(o)}}(),forget:function(){return function(t,o){var n=this;n.data[o]=e.reject(n.data[o],function(e){return e===t}),n.save(o)}}()}},tabs:{blocksLoaded:!1,blockReqSended:!1,init:function(){return function(e,o){var n=this;n.inited||(n.inited=!0,n.opts=o||{},n.$panel=e,n.$scrollable=t(".js-panel-scrollable",n.$panel),n.addListeners())}}(),addListeners:function(){return function(){var e=this;t(".js-panel-constructor-nav li",e.$panel).on("click.switchPanel",function(){var o=t(this);o.hasClass("active")||e.activateTab(o)})}}(),activateTab:function(){return function(e){var o=this,r=e.attr("data-content"),i=function(){return function(){e.addClass("active").siblings().removeClass("active"),t(".js-panel-constructor-elements",o.$panel).attr("data-type",r),setTimeout(function(){o.opts.onPanelSwitch&&o.opts.onPanelSwitch(r)},100)}}();if(n.params.isULanding)return o.opts.onBlocksLoaded&&"widgets"!==r&&o.opts.onBlocksLoaded(),i();var a=t(".js-"+r+"-groups",o.$panel).data("unfoldedGroups")||[];"widgets"===r?i():o.loadBlocks(a).then(i)}}(),loadBlocks:function(){return function(r){var i=this,a=new t.Deferred;return i.blocksLoaded||i.blockReqSended?a.resolve():(i.blockReqSended=!0,t.get("/sites/url/"+n.params.site+"/blocksList",function(s){n.constructor.blocks=s;var c=Object.keys(s).reduce(function(t,e){var o=s[e],n=s[e].group;return t[n]||(t[n]=[]),o._id=e,t[n].push(o),t},{});t(".js-blocks-groups",i.$panel).append(e.template(l,{blocksGrouped:c,unfoldedGroups:r,___:o("constructor"),isTemplateServer:n.params.isTemplateServer,isULanding:n.params.isULanding})),i.blocksLoaded=!0,i.opts.onBlocksLoaded&&i.opts.onBlocksLoaded(),a.resolve()})),a.promise()}}()},_addEvents:function(){return function(){var e=this,o=null;n.params.isTemplateServer&&t(e.$el).on("click.blockRemove",".js-block-remove",function(){var o=t(this).closest(".js-block");e.menu.blockRemove(o)}),e.$el.on("click.blockFavoriteRemove",".js-block-favorite-actions span",function(){if(!(o&&1e3>Date.now()-o)){o=Date.now();var n=t(this),r=n.closest("li.js-el-with-preview");h.elementsPreview.hidePopup(!0),"remove"===n.attr("data-action")?e._eventActions.removeFavoriteBlock.call(e,r):"edit"===n.attr("data-action")?e._eventActions.editFavoriteBlock.call(e,n):console.log("not valid actions")}})}}(),_eventActions:{removeFavoriteBlock:function(){return function(e){var n=this;d.confirm({title:o("constructor.favorite-blocks.nf remove block favorites",t(".js-block-favorite-title-text",e).text().trim()||""),text:o("constructor.This action can not be undo"),ok:o("all.remove"),color:"ul-button-red",invert:!0,cancel:"",cancelCb:function(){return function(){}}(),okCb:function(){return function(){var o=e.attr("data-id"),r=e.index();n.menu.favoriteBlockRemove(o,function(){e.animate({height:0},100,"linear",function(){n.favoriteBlock.forEach(function(t,e){t._id===o&&n.favoriteBlock.splice(e,1)}),n.favoriteBlock.length||t(".js-help-favorites",e.closest("ul")).show(),n.renameFavoriteCollection(r,t(this).siblings().slice(r)),t(this).remove()})})}}()})}}(),editFavoriteBlock:function(){return function(e){var n=this,r=null,i=e.closest("li.js-el-with-preview"),a=n.favoriteBlock.filter(function(t){return t._id===i.attr("data-id")})[0];s.open({title:o("constructor.block title"),$targetEl:i,saveBtn:!1,templateUrl:"text!html/constructor/favoriteBlockPopUp.html",templateData:a,afterOpenThis:function(){return function(){e.addClass("edit"),i.attr("data-edit-title","active"),r=t('input[ul-model="favorite.title"]',this.$el),r.focus().get(0).select();var n=null;r.on("input.editFavoriteBlock",function(){var e=t(this).val();return 70<e.length?void t(this).val(n):(0===e.length&&(e=o("constructor.favorite-blocks.block favorites title",i.index())),n=e,void t(".js-block-favorite-title-text",i).text(e))})}}(),close:function(){return function(){var s=r.val();n.menu.favoriteBlockEdit({id:i.attr("data-id"),title:s},function(e){t(".js-block-favorite-title-text",i).text(e.title||a.title||o("constructor.favorite-blocks.block favorites title",i.index())),e.title&&(a.title=e.title),i.attr("data-faketitle",!a.title),r.off(".editFavoriteBlock"),r=null}),i.removeAttr("data-edit-title"),e.removeClass("edit")}}()})}}()},renameFavoriteCollection:function(){return function(e,n){var r=this;n.each(function(n,i){var a=t(".js-block-favorite-title-text",t(i));r.favoriteBlock[e-1+n].title||r.favoriteBlock[e-1+n].title.length||a.text(o("constructor.favorite-blocks.block favorites title",e+n))})}}(),_removeEvents:function(){return function(){var e=this;t(e.$el).off(".blockRemove"),e.$el.off(".blockFavoriteRemove")}}(),deinit:function(){return function(){var t=this;t._removeEvents(),i.deinit()}}()};return h});
//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map

//# sourceMappingURL=panel-constructor.js.map
