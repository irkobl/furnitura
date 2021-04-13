"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){if("function"==typeof define&&define.amd)define("i18n-namespace",["_"],t);else{if("object"!==("undefined"==typeof exports?"undefined":_typeof(exports)))throw new Error("Unexpected environment");module.exports=t(require("lib/separatedPartsOfE/lodash"))}}(function(t){function n(){var t=Array.prototype.slice.call(arguments),n=t[0].match(/(\%[\d]+)/gi);return Array.isArray(n)&&n.forEach(function(n){t[0]=t[0].replace(n,t[n.replace("%","")])}),t[0]}function e(n,e){if("object"===("undefined"==typeof e?"undefined":_typeof(e))||!e||""===e.toString())return!1;var r=e.split(".");if(1<r.length){var o=n.getSnapshot();return r.forEach(function(n){(t.isString(o[n])||t.isObject(o[n]))&&(o=o[n])}),o}var i=n.getSnapshot()[e];return(t.isString(i)||t.isObject(i))&&i}function r(t){var r=Array.prototype.slice.call(arguments,1),o=r[0],i=e(t,r[0]);return i&&Object.keys(i).forEach(function(t){var e=i[t];return new RegExp(t).test(r[1])?(r[0]=e,o=n.apply(null,r),!1):void 0}),o}function o(t){var r=Array.prototype.slice.call(arguments,1),o=r[0],i=e(t,r[0]);return i&&(r[0]=i),o=n.apply(null,r)}var i=function(){return function(t){var n=this;this.w=o.bind(null,this),this.d=r.bind(null,this),this.snapshot=t,n.__=n.__Constructor.bind(this),n.__.toString=function(){return'Not correct call for "__"'}}}();return i.prototype.__Constructor=function(){var t=this,n=Array.prototype.slice.call(arguments,0),r=e(t,n[0]);if(1===n.length){if(r&&"object"===("undefined"==typeof r?"undefined":_typeof(r)))return new i(t.getSnapshot(n[0])).__;!1===r&&(console.warn('No translate for "'+n.toString()+'"'),r=n.toString())}return 1<n.length&&(r&&"object"===("undefined"==typeof r?"undefined":_typeof(r))?r=t.d.apply(null,n):r&&"string"==typeof r?r=t.w.apply(null,n):(console.warn('No translate for "'+n.toString()+'"'),r=n.toString())),r},i.prototype.getSnapshot=function(t){var n=this;if(t){var e=t.split(".");if(1<e.length){var r=n.snapshot;return e.forEach(function(t){r[t]&&(r=r[t])}),r}if(n.snapshot[t])return n.snapshot[t];throw new Error("Not exist nameSpace "+t)}return n.snapshot},i});
//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map

//# sourceMappingURL=i18n-namespace.js.map
