"use strict";define("ul-error",["ulErrorHandler","jquery","logActions"],function(r,t,n){var e=function(){return function(){var r=window.cache,t=r.isExistCustomHtml,n=r.isConstructor;(!t||n)&&this.init()}}();return e.prototype._Constant=Object.freeze({URL:"/api/errors"}),e.prototype.init=function(){this.ulErrorHandlerInstance=new r(this._Constant.URL),this._addEventListener()},e.prototype._parseStack=function(r,t,n){return!!r.stack&&r.stack.some(function(r){return t.test(r.fileName)?!0:void 0})&&n.test(r.msg)},e.prototype._jsErrorFn=function(){window.cache&&(!window.cache||window.cache.isPublished)||/\.[\w]+\/preview\//.test(window.location.href)||t("#iframe-preview").length||(window.analyticsHandler&&[["yandexMetrika.nfErrors","hit",window.location.href],["googleUniversalAnalytics.nfErrors",null,"nfErrors.send","pageview"]].forEach(function(r){window.analyticsHandler.apply(null,r)}),window.constructorMode&&require(["i18n-view","nf"],function(r,t){var n=r("all.ajaxError");t.confirm({title:n("title"),text:n("text"),ok:n("okBtnText"),okCb:function(){return function(){window.location.reload()}}()})}))},e.prototype._addEventListener=function(){var r=this;this.ulErrorHandlerInstance.addEventListener("onAjaxError",function(t){t.ajaxSettings.doNotShowAjaxError&&t.ajaxSettings.outerApiRequest||408===t.jqXHR.status&&t.ajaxSettings.doNotShowAjaxError||403===t.jqXHR.status&&t.ajaxSettings.trialShopGrantsError||403===t.jqXHR.status&&t.ajaxSettings.removeBackupGrantsError||404===t.jqXHR.status&&t.ajaxSettings.doNotShowAjaxError||r._jsErrorFn()}).addEventListener("sendError",function(t){var e="";t.stack&&t.stack.forEach(function(r){e+=r.fileName+"<br>"}),n.add({type:"__errorLog",fromFile:e,title:"sendError",desc:"err msg: "+t.msg}),r._parseStack(t,/sliderWysiwyg/,/o\.autoPlay/)&&window.analyticsHandler("yandexMetrika.mainId","reachGoal","client--sliderWysiwyg-o-autoPlay")})},e.prototype.getUlErrorHandlerInstance=function(){return this.ulErrorHandlerInstance},(new e).getUlErrorHandlerInstance()});
//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map

//# sourceMappingURL=ulError.js.map
