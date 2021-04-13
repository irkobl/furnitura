"use strict";var _slicedToArray=function(){function u(u,F){var t=[],n=!0,r=!1,a=void 0;try{for(var e,i=u[Symbol.iterator]();!((n=(e=i.next()).done)||(t.push(e.value),F&&t.length===F));n=!0);}catch(o){r=!0,a=o}finally{try{!n&&i["return"]&&i["return"]()}finally{if(r)throw a}}return t}return function(F,t){if(Array.isArray(F))return F;if(Symbol.iterator in Object(F))return u(F,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();define("validation",["_"],function(){var u=/^[a-zA-Z0-9][a-zA-Z0-9\-]{3,61}[a-zA-Z0-9]$/,F=/^[a-zA-Z0-9][a-zA-Z0-9\-]{3,61}[a-zA-Z0-9]\.ulcraft\.com$/,t=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,n=/^([0-9a-zA-Z][-0-9a-zA-Z]*[0-9a-zA-Z]{1,63}\.)+[a-zA-Z]{2,9}$/,r=new RegExp(/<\/?[\S][^>]*>/),a=new RegExp(/<\/?[\S][^>]*>/g),e=new RegExp(/^_[\w-]+$/i),i={txt:/^[ a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)\'\"\-\_\=\+\?\/\\\,\.\;\:<>\|]+$/,"default":/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,61}|xn--[a-z0-9]+$/,cname:/(^([a-zA-Z0-9_]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.){1}([a-zA-Z0-9_]([a-zA-Z0-9\-_]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,61}|xn--[a-z0-9]+$)|(^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+([a-zA-Z0-9_]([a-zA-Z0-9\-_]{0,61}[a-zA-Z0-9])?\.)*[a-zA-Z]{2,61}|xn--[a-z0-9]+$)/,ip:/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/},o=[[/ /g,"&nbsp;"],[/–/g,"&ndash;"],[/—/g,"&mdash;"],[/&/g,"&amp;"],[/©/g,"&copy;"],[/®/g,"&reg;"],[/«/g,"&laquo;"],[/»/g,"&raquo;"],[/¶/g,"&para;"],[/µ/g,"&micro;"],[/μ/g,"&mu;"],[/</g,"&lt;"],[/>/g,"&gt;"],[/@/g,"&#64;"]],c={email:function(){return function(u){return!!t.test(u.toLowerCase())}}(),domain:function(){return function(u){return!!n.test(u)}}(),sitename:function(){return function(F){return!!u.test(F)}}(),siteFullName:function(){return function(u){return!!F.test(u)}}(),html:function(){return function(u){return r.test(u)}}(),htmlCleanup:function(){return function(u){return u.replace(a,"").replace(/\n|\t|\r|\r\n|\n\r/g,"").trim()}}(),htmlEntitiesCleanup:function(){return function(u){var F=u;return o.forEach(function(u){var t=_slicedToArray(u,2),n=t[0],r=t[1];F=F.replace(n,r)}),F}}(),url:function(){return function(u,F){return F?u.match(/^(ht|f)tps?:\/\/[a-zа-я0-9-\.]+\.[a-zа-я]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/):u.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/)}}(),domainRecords:function(){return function(u,F){var t=i[F]||i["default"];return!!t.test(u)}}(),srvRecord:function(){return function(u){var F=u.split(".");if(e.test(F[0])&&e.test(F[1])&&2<F.length&&63>u.length){F.splice(0,2);var t=F.join(".");if(n.test(t))return!0}return!1}}()};return c});
//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map

//# sourceMappingURL=validation.js.map
