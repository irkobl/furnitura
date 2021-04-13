"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n,i=0;i<e.length;i++)n=e[i],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){if("function"==typeof define&&define.amd)define(["lodash"],t);else{if("object"!==("undefined"==typeof exports?"undefined":_typeof(exports)))throw new Error("Unexpected environment");var e=require("lodash");module.exports=t(e)}}(function(t){return function(){function e(t){_classCallCheck(this,e),this.widget=t.widget,this.widgetAttrs=t.widgetAttrs,this.hiddenDeviceParams=t.hiddenDeviceParams}return _createClass(e,[{key:"render",value:function(){return function(e){var n=this.dataAttrs,i=Object.keys(n).reduce(function(e,i){return e+" "+i+'="'+t.escape(n[i])+'"'},"");return"<div "+i+">"+e+"</div>"}}()},{key:"_stringifyAttr",value:function(){return function(e){return t.isObject(e)||t.isArray(e)?JSON.stringify(e):e}}()},{key:"_makeStyles",value:function(){return function(t){var e="";return t&&(e=Object.keys(t).reduce(function(e,n){return n+":"+t[n]+"; "},"")),e}}()},{key:"dataAttrs",get:function(){return function(){var t=this,e=this.widgetAttrs.getAttributes(),n=this.hiddenDeviceParams;e.classes.push(n.classList);var i=e.dataAttributes;i||(i={}),i.id=this.widget.id;var r;this.widget.data&&(r=this.widget.data.customClasses),r&&e.classes.push(r.join(" ")),i["class"]=e.classes.filter(function(t){return t.length}).join(" "),i["data-device-hidden"]=JSON.stringify(n.deviceHidden),i["data-widget"]=this.widget.__t||this.widget.type,i["data-controls"]=this.widget.controls;var s=this._makeStyles(e.styles);return s&&(i.style=s),Object.keys(i).forEach(function(e){i[e]=t._stringifyAttr(i[e])}),i}}()}]),e}()});
//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map

//# sourceMappingURL=widgetCommonHelper.js.map
