"use strict";var _StringfromCharCode=String.fromCharCode;define("U",["require","_","jquery","guid","normalizeUrl","sprintf","functionPrototypeOkPatcher"],function(t,n,r,e,o,i){var u=[];r(document).on("keydown",function(t){if(27==t.keyCode&&27==t.keyCode&&0<u.length){r(document).data("disableCtrlZ",!1);var n=u.pop();n()}}),r.ajaxSetup({success:function(){return function(t){!0===this.api&&(t[0]&&this.noOk?this.noOk(t[0]):this.ok(t[1]))}}()}),r.fn.moveUp=function(){r.each(this,function(){r(this).after(r(this).prev())})},r.fn.moveDown=function(){r.each(this,function(){r(this).before(r(this).next())})},r.fn.moveTo=function(t){return r(this).each(function(){if(!(t>r(this).parent().children().length||0>t))for(;r(this).index()!=t;)r(this).index()<t?r(this).moveDown():r(this).moveUp()})},r.fn.classes=function(t){var n=[];return r.each(this,function(t,r){var e=r.className.split(/\s+/);e.forEach(function(t,r){var o=e[r];""!==o&&n.push(o)})}),n=r.unique(n),"function"==typeof t&&n.forEach(function(r,e){t(n[e])}),n};var c,a=[];for(c=65;90>=c;c++)a.push(_StringfromCharCode(c));for(c=97;122>=c;c++)a.push(_StringfromCharCode(c));for(c=48;57>=c;c++)a.push(_StringfromCharCode(c));var l={params:window.cache,cancelCurrentEdit:function(){return function(t){r(document).trigger("cancelCurrentEdit").off("cancelCurrentEdit").on("cancelCurrentEdit",t)}}(),delay:function(){return function(t,n,r){var e;return function(o,i){clearTimeout(e),e=setTimeout(function(){t.call(n,o)},null===i?r:i)}}}(),diff:function(){return function(t,n){var r={};return Object.keys(t).forEach(function(e){t[e]!=n[e]&&(r[e]=t[e])}),r}}(),extendClass:function(){return function(t,n){var r=function(){return function(){}}();r.prototype=n.prototype,t.prototype=new r,t.prototype.constructor=t,t.superclass=n.prototype}}(),fileSizeToStr:function(){return function(t){var n=["кб","мб"],r="";if(1024>t)r=t;else for(;t/1024>=1;)t=(t/1024).toFixed(2),r=t+" "+n.shift();return r}}(),getCookie:function(){return function(t){var n=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return n?decodeURIComponent(n[1]):void 0}}(),setCookie:function(){return function(t,n,r){r=r||{};var e=r.expires;if("number"==typeof e&&e){var o=new Date;o.setTime(o.getTime()+1e3*e),e=r.expires=o}e&&e.toUTCString&&(r.expires=e.toUTCString()),n=encodeURIComponent(n);var i=t+"="+n;for(var u in r)if(r.hasOwnProperty(u)){i+="; "+u;var c=r[u];!0!==c&&(i+="="+c)}document.cookie=i}}(),limiter:function(){return function(t,n){var r=null;return n||(n=300),function(){var e=this,o=arguments;clearTimeout(r),r=setTimeout(function(){t.apply(e,o)},n)}}}(),ok:function(){return function(t){return function(){var n=Array.prototype.slice.call(arguments);try{var r=n.shift();if(r)throw console.log(r),"error";t.apply(null,n)}catch(e){throw console.log(e),"error"}}}}(),parse:function(){return function(t,n){var r={},e=r,o=t.split(".");if(1==o)return n;for(var i=0;i<o.length-1;i++)r[o[i]]={},r=r[o[i]];return r[o[i]]=n,e}}(),requireCss:function(){return function(t){var n=new Error;if(console.log('U.requireCss is deprecated. Use requireCssR or require(["css!/public/style.css"], function () {}) instead.',n.stack?n.stack.toString().split("\n")[2]:"no stack"),null!==t)if("array"==r.type(t))for(var e=0,o=t.length;o>e;e++)0===r('link[href="'+t[e]+'"]').length&&r("head").append('<link rel="stylesheet" href="'+t[e]+'"/>');else 0===r('link[href="'+t+'"]').length&&r("head").append('<link rel="stylesheet" href="'+t+'"/>')}}(),requireCssR:function(){return function(n,e){if(n){var o=[];r.isArray(n)?r.each(n,function(t,n){n&&o.push("css!"+n)}):"string"==typeof n&&o.push("css!"+n),0<o.length?t(o,function(){e&&e()}):e&&e()}else e&&e()}}(),randStr:function(){return function(t){for(var n="",r=0;t>r;)n+=a[Math.floor(Math.random()*a.length)],r++;return n}}(),sprintf:i,splitArgs:function(){return function(t){return function(n){t.apply(null,n)}}}(),guid:e,normalizeUrl:o,layers:{on:function(){return function(t,n){u.push(n),r(document).data("disableCtrlZ",!0)}}(),off:function(){return function(t){var n=u.pop();r(document).data("disableCtrlZ",!1),t&&n&&n()}}()},checkUrl:function(){return function(t){var n=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;return n.test(t)}}(),extTemplate:function(){return function(t,r,e){return n.template(t.replace(/<%[-|=|\s]\s*include\s*(.*?)\s*%>/g,function(t,n){return r[n]}),e)}}(),getScrollWidth:function(){return function(){if(!this.scrollWidth){var t=r("<div>",{style:"width: 100%; height: 2px; visibility: hidden; opacity: 0;",html:"<div><br>|<br>|<br></div>"}).appendTo("body"),n=t.find("div"),e=n.outerWidth();t.css("overflow-y","scroll");var o=n.outerWidth();n=null,t.remove(),this.scrollWidth=e-o}return this.scrollWidth}}(),overlay:{add:function(){return function(t){var n=r.extend({to:r("#ul-content"),onClick:function(){return function(){}}()},t),e=r('<div class="ul-disabled-overlay">').appendTo(n.to).click(n.onClick);return r(n.except).addClass("ul-widget ul-disabled-overlay-element"),l.layers.on(0,n.onClick),{$el:e,remove:function(){return function(){e.remove(),r(n.except).removeClass("ul-widget ul-disabled-overlay-element")}}()}}}()},hist:{cb:function(){return function(){}}(),_init:function(){return function(t,n){window.onpopstate=this.popState,window.history.replaceState(t.data,t.title,t.url),this.cb=n}}(),pushState:function(){return function(t){window.onpopstate||(window.onpopstate=this.popState),window.history.pushState(t.data,t.title,t.url)}}(),popState:function(){return function(t){t.state&&l.hist.cb(t.state)}}()},orderFormUrl:{get:function(){return function(t){var n="#="+l.randStr(2)+"-"+l.randStr(2)+"=";return(null!=t||void 0!=t)&&(n+=t),n}}(),check:function(){return function(t){var n=/#=.{2}-.{2}=/;return n.test(t)?t.replace(n,""):null}}()},escapeHtml:function(){return function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}}(),acl:{isResourceAllowed:function(){return function(t){return l.params.acl&&l.params.acl.resources&&l.params.acl.resources[t]}}(),getRole:function(){return function(){return l.params.acl&&l.params.acl.role&&l.params.acl.role}}()},getUrlParam:function(){return function(t){var n,r=decodeURIComponent(window.location.search.substring(1)),e=r.split("&");return e.forEach(function(r){var e=r.split("=");e[0]===t&&(n=void 0===e[1]||e[1])}),n}}(),smoothScrollIntoView:function(){return function(t){if(!t.$el||!t.$parent)return void console.error("No $el or $parent. Can not scroll into view");t=n.extend({elHeight:t.$el.outerHeight(),topViewportMargin:0,bottomViewportMargin:0,duration:450,onPositionCalculated:function(){return function(){}}(),onComplete:function(){return function(){}}()},t);var r=t.$parent,e=r.offset().top+t.topViewportMargin,o=r.outerHeight()-t.topViewportMargin-t.bottomViewportMargin,i=t.elHeight,u=t.$el.offset().top-e;if(0>u||0>o-(u+i)){var c=i>=o||0>u?u+r.scrollTop():r.scrollTop()+(u+i-o);r.animate({scrollTop:c},{duration:t.duration}).promise().done(function(){r.clearQueue(),t.onComplete()}),t.onPositionCalculated(c)}}}(),hexToRgb:function(){return function(t){if("string"!=typeof t)return null;var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(n,function(t,n,r,e){return n+n+r+r+e+e});var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}}(),generateTitle:function(){return function(t,n,r){var e=t+r,o=n.filter(function(t){return new RegExp("^"+e+"\\s*\\d*$","i").test(t)}).map(function(t){return+(t.match(/\d+$/)||["1"])[0]}).sort().pop();return void 0===o?e:e+" "+(o+1)}}(),isBrightColor:function(){return function(t){return"string"==typeof t&&(t=l.hexToRgb(t)),!!t&&.5<(.299*t.r+.587*t.g+.114*t.b)/255}}()};return l});
//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map
