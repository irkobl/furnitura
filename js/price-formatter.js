"use strict";var _Mathround=Math.round,_NumberisInteger=Number.isInteger,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){if("function"==typeof define&&define.amd)define("shop/priceFormatter",["_"],function(e){return t(function(){return window.cache.shop.currency.formatting},e)});else{if("object"!==("undefined"==typeof exports?"undefined":_typeof(exports)))throw new Error("Unexpected environment");var e=require("e");module.exports=t(function(){return e.config.shop.currency.formatting},e._)}}(function(t,e){function n(){l||(v=t(),l=!0)}function r(t){"undefined"==typeof t&&(t=m);var e=t/100,n=e.toFixed(j(e)?0:2);return n}function o(t,n){"undefined"==typeof t&&(t=m),n=e.extend({},{formatValue:!0,tag:"span"},n||{});var o=n.tag;return"<"+o+' data-type="value" data-raw="'+t+'">'+(n.formatValue?r(t):t)+"</"+o+">"}function u(t,n){var r=d(t);n=e.extend({},{tag:"span"},n||{});var o=n.tag;return"<"+o+' data-type="currency">'+r.symbol+"</"+o+">"}function i(t){return d(t).position}function f(t){return d(t).separator}function c(t,n,r){"undefined"==typeof t&&(t=m),"undefined"==typeof n&&(n=g),r=e.extend({},{formatValue:!0,tag:"span"},r||{});var c=o(t,r),a=u(n,r),d=f(n),p="left"===i(n)?[a,d,c]:[c,d,a];return p.join("")}function a(t,e){"undefined"==typeof t&&(t=m),"undefined"==typeof e&&(e=g);var n=r(t),o=d(e).symbol,u=f(e),c="left"===i(e)?[o,u,n]:[n,u,o];return c.join("")}function d(t){return"undefined"==typeof t&&(t=g),v[t]||v[g]}function p(t,n){if(!t||!n)return new Error("Not all data");var r=t.price.value/100,o=Object.keys(n),u=0,i=0,f=!0,c=!1,a=void 0;try{for(var d,p,b=function(){return function(){var r=d.value,o=e.find(t.attributes,function(t){return t._id.toString()===r});if(!o)return{v:new Error("Can't find attribute")};var f=e.find(o.values,function(t){return t._id.toString()===n[r]});switch(f.operator){case"plus":u+=f.addedValue;break;case"percent":i+=f.addedValue}}}(),y=o[Symbol.iterator]();!(f=(d=y.next()).done);f=!0)if(p=b(),"object"===("undefined"==typeof p?"undefined":_typeof(p)))return p.v}catch(s){c=!0,a=s}finally{try{!f&&y["return"]&&y["return"]()}finally{if(c)throw a}}var l=r+i/100*r+u,v=100*l.toFixed((_NumberisInteger||function(t){return _Mathround(t)===t})(l)?0:2);return v}function b(t,e){var n=t.attributes;n.forEach(function(n){y({product:t,shopCurrency:e,attribute:n})})}function y(t){var e=t.attribute.values;e.forEach(function(e){e.price=s(t,e)})}function s(t,e){var n=t.product,r=t.shopCurrency,o=t.attribute,u=e.addedValue,i=o.priceOption,f={},c=function(){return function(t){return" - "+a(t,r)}}();if(f[o._id]=e._id,"sum"===i&&u){var d=p(n,f);return c(d)}return"fee"===i&&u?c(100*u):""}var l=!1,v=null,m=0,g="USD",j=_NumberisInteger||function(t){return _Mathround(t)===t};return{get priceToHTML(){return n(),c},get priceToString(){return n(),a},get formatValue(){return n(),r},get valueToHTML(){return n(),o},get currencyToHTML(){return n(),u},get getCurrencyPosition(){return n(),i},get getCurrencySeparator(){return n(),f},get getSummaryPrice(){return n(),p},get updateProductValues(){return n(),b}}});
//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map

//# sourceMappingURL=price-formatter.js.map
