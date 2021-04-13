"use strict";var _slicedToArray=function(){function e(e,t){var r=[],o=!0,n=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!((o=(u=c.next()).done)||(r.push(u.value),t&&r.length===t));o=!0);}catch(d){n=!0,i=d}finally{try{!o&&c["return"]&&c["return"]()}finally{if(n)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();define("widget-goods-view",[],function(){return{open:function(){return function(e){var t=document.querySelector("#"+e);this.eventsAdded||this.addEvents(),window.constructorMode||(this.supportOldVersion(t),this.removeNullLink(t)),this.initIcon(t)}}(),supportOldVersion:function(){return function(e){var t=e.querySelector(".ul-goods-view-button a");if(t){var r=t.classList;r.contains("js-goods-popup-link")||(r.value+=" js-goods-popup-link")}}}(),removeNullLink:function(){return function(e){var t=e.querySelector(".ul-goods-view-image-wrap2 a");t&&!t.getAttribute("href")&&(t.parentNode.removeChild(t),t=null);var r=e.querySelector("a.ul-goods-view-item");if(r&&!r.getAttribute("href")){for(var o=document.createElement("div"),n=[["class","ul-goods-view-item"],["itemscope"],["itemtype","http://schema.org/Product"]],i=0;i<n.length;i++){var u=n[i],c=_slicedToArray(u,2),d=c[0],a=c[1],s=void 0===a?"":a;o.setAttribute(d,s)}r.parentNode.replaceChild(o,r),r=null}var l=e.querySelector("a");if(l){var o=l.getAttribute("href"),n=e.querySelector(".js-goods-link-card");!o&&n&&n.setAttribute("style","cursor: default;")}}}(),showOrderForm:function(){return function(e){var t=this;require(["jquery","U"],function(r,o){var n=r(e).closest(".ul-widget-goods"),i=o.orderFormUrl.check(r(e).attr("href"));return null!=i&&t.oFormCanBeOpened?void require(["orderForm"],function(e){t.oFormCanBeOpened=!1,e.open(i,t.getOrderFormData(o,n),function(){setTimeout(function(){return t.oFormCanBeOpened=!0},50)})}):void 0})}}(),addEvents:function(){return function(){var e=this;this.oFormCanBeOpened=!0,this.eventsAdded=!0;var t={".js-goods-popup-link":function(){return function(t){t.stopPropagation(),"function"==typeof window.requireFullConfOnce?window.requireFullConfOnce(function(){e.showOrderForm(t.target)}):e.showOrderForm(t.target)}}(),".js-goods-link-card":function(){return function(e){var t=e.target.querySelector("a");t?t.click():window.constructorMode&&$(e.target).closest("js-goods-link-card")[0].click()}}()};window.constructorMode||document.addEventListener("click",function(e){var r=e.target;r&&(Element.prototype.matches=Element.prototype.matches||Element.prototype.msMatchesSelector,r.matches(".js-goods-popup-link")?t[".js-goods-popup-link"](e):r.matches(".js-goods-link-card")&&t[".js-goods-link-card"](e))})}}(),getOrderFormData:function(){return function(e,t){var r=e.escapeHtml(t.find(".ul-goods-view-title").text());return r?"<h3>"+r+"</h3>":r}}(),initIcon:function(){return function(e){var t=e.dataset.iconSet;return t?window.constructorMode||!window.cache.isNewRequireConf?void window.require(["icon-set-loader"],function(r){r.loadIconSet(t,function(){e.setAttribute("data-is-icon-font-loaded","true")})}):void(t&&e.setAttribute("data-is-icon-font-loaded","true")):void 0}}()}});
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
