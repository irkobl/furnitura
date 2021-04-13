"use strict";define(["require","jquery","_","U","nf","i18n","js/edit/constructorHelpers"],function(t,o,n,e,r,i,a){var s={start:function(){return function(t,n){var e=o("#"+n),r=e.find(".ul-widget").map(function(){return o(this).attr("id")}).get();return r.length?void window.dispatch(window.actions.addBlockToFavorites(r,arguments)):this._realStart([],t,n)}}(),_realStart:function(){return function(t,o,n){var r=this,i=o.closest(".ul-block-controls").addClass("ul-block-controls-visible--forced");a.lockConstructor();var s=setTimeout(function(){o.attr("data-status","in-progress")},1e3);a.getBlockJSON(n,t,function(t){t.params.floating.enabled=!1,r._saveFavorite(t,function(t){if(e.menu.panels.panelConstructor.addBlockToMenu("Favorite",t),r._showFlyingStar(o.offset()),clearTimeout(s),a.unlockConstructor(),o.removeAttr("data-status"),i.removeClass("ul-block-controls-visible--forced"),r._getScreenshot(t._id,function(o){e.menu.panels.panelConstructor.updateScreenshotBlock("favorites",{id:t._id,screenshotUrl:o})}),!localStorage.ukitFavoriteBlockHintWasShown){e.menu.setPanel("panelConstructor"),e.menu.panels.panelConstructor.tabs.activateTab(e.menu.$content.find('.js-panel-constructor-nav [data-content="blocks"]'));var n=e.menu.$content.find('.js-foldable[data-is-folded="true"][data-id="favorites"]');n.length&&e.menu.panels.panelConstructor.foldable.toggleFolding(n),r._showHint()}})})}}(),_saveFavorite:function(){return function(t,n){o.ajax({url:e.sprintf("/sites/url/{siteUrl}/favoriteBlocks",[e.params.site]),method:"post",data:{content:JSON.stringify(t)},api:!0,ok:function(){return function(t){n(t)}}()})}}(),_showFlyingStar:function(){return function(t){var n=o("<div>",{"class":"ul-favorite-block-animated-tip"}).css({top:t.top,left:t.left}).append('<img src="/img/special-star-stroke-shadow.svg">').appendTo("body");setTimeout(function(){n.attr("data-animate","true").css({left:124,top:160}),setTimeout(function(){n.remove()},1200)},50)}}(),_showHint:function(){return function(){try{localStorage.ukitFavoriteBlockHintWasShown="true"}catch(e){}t(["tpl!constructor/favoriteBlocksHint","css!/css/require/favoriteBlocksHint.css","jquery-ui-position"],function(t){var e=n.template(t,{__fav:i("constructor.favorite-blocks")}),r=o("#ul-main"),a=o(e).appendTo(r).position({my:"left top",at:"left+280 top",of:r});setTimeout(function(){a.attr("data-status","visible"),o(document).one("mousedown click",function(){a.removeAttr("data-status"),setTimeout(function(){a.remove()},500)})},50)})}}(),_getScreenshot:function(){return function(t,n){o.ajax({url:e.sprintf("/sites/url/{siteUrl}/favoriteBlocks/{id}/screenshot",[e.params.site,t]),method:"get",doNotShowAjaxError:!0,api:!0,ok:function(){return function(t){n(t)}}(),error:function(){return function(t,o,n){throw new Error(n)}}()})}}()};return window.signals.addBlockToFavorites.listen(function(t,o){return new Promise(function(n){s._realStart.bind(s,o).apply(null,t),n()})}),s.start.bind(s)});
//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map
