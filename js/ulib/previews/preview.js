"use strict";function isMailSkypeTel(e){var t=/^(mailto|skype|tel):/i;return t.test(e)}function isExternal(e){var t=/^(http|https):\/\//i;return t.test(e)}function isDownloadFile(e){var t=/^\/uploads\//i;return t.test(e)}function isOrderForm(e){var t=new RegExp(/#=.{2}-.{2}=/,"i");return t.test(e)}function contains(e,t,r){var n=function(){return function(e,t){var r=selectedNodesCache[t];return r||(r=document.querySelectorAll(t),selectedNodesCache[t]=r),0<Array.prototype.filter.call(r,function(t){return t.isEqualNode(e)}).length}}();if(r&&n(e,r))return!1;var i=selectedNodesCache[t];return i||(i=document.querySelectorAll(t),selectedNodesCache[t]=i),0<Array.prototype.filter.call(i,function(t){return t.isEqualNode(e)}).length}function getTargetWithLink(e,t){if(t>0){if(!e||!e.getAttribute)return!1;var r=e.getAttribute("href");return r?e:getTargetWithLink(e.parentNode,t-1)}}function createPathListener(e,t,r,n){return n=n||!1,function(i){var o=getTargetWithLink(i.target,3);if(!o||!o.getAttribute)return!1;var a=o.getAttribute("href");if(a){if(window.cache.isULanding&&(a=a.replace(new RegExp("/"+window.cache.site),"")),i.preventDefault(),!n&&isExternal(a))return!1;if(!n&&isDownloadFile(a))return!1;if(n&&isMailSkypeTel(a))return!0;if(isOrderForm(a))return!1;if(n&&isExternal(a))window.location.assign(a);else if(a&&contains(o,e,t)&&!isMailSkypeTel(a))if(/^\/?#/.test(a)){var s=window.location.pathname.split("/"),l=a.split("#").shift();s=window.location.pathname.split("/")[3]?"/"+s.pop():"/";var c=r(a);(l===s||""===l)&&(c=r(a.replace(/^\/?/,""))),window.location.assign(c)}else window.location.assign(r(a))}}}function attachListeners(e){e.forEach(function(e){document.addEventListener("click",e),document.addEventListener("dblclick",e)})}function getLocation(e){var t=document.createElement("a");return t.href=e,t}var selectedNodesCache={},wizardPrefix="/neowizard",path="/preview/"+window.cache.site;if(0===window.document.location.pathname.indexOf("/preview")){var weAreInMatrix=window.self===window.top,listenerSelector=".js-w-mainmenu, .ul-blog-post-back-to-list",listener=createPathListener(listenerSelector,null,function(e){return path+e},weAreInMatrix),blogPostsListenerSelector=".ul-blog-post-read-more, .ul-blog-post-title-link, .ul-blog-post-imagewrap a",blogPostsListener=createPathListener(blogPostsListenerSelector,null,function(e){var t=e.split("/");return window.cache.isULanding?path+"/"+t[1]+"/postId/"+t[2]:path+"/"+t[1]+"/postId/"+t[2]},weAreInMatrix),newsInformerListenerSelector=".ul-bi-post-title a, .ul-bi-post-footer__readmore__link",newsInformerListener=createPathListener(newsInformerListenerSelector,null,function(e){var t=e.split("/");return path+"/"+t[0]+"/postId/"+t[1]},weAreInMatrix),shopOrderLinkSelector='a[href="/__ordersuccess"]',pathLinksListener=createPathListener("a",[listenerSelector,blogPostsListenerSelector,newsInformerListenerSelector,shopOrderLinkSelector].join(", "),function(e){var t=getLocation(e),r=t.hash,n=t.pathname.replace(path,"");return path+("/"===n?"/index":n)+window.document.location.search+r},weAreInMatrix);attachListeners([listener,blogPostsListener,newsInformerListener,pathLinksListener])}
//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map

//# sourceMappingURL=preview.js.map
