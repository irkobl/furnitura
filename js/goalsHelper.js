"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n,r=0;r<t.length;r++)n=t[r],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){if("function"==typeof define&&define.amd)require(["lodash"],e);else{if("object"!==("undefined"==typeof exports?"undefined":_typeof(exports)))throw new Error("Unexpected environment");var t=require("e"),n=t._;module.exports=e(n)}}(function(e){return function(){function t(n){_classCallCheck(this,t),this.goals=n.goals||{},this.widgetsWithGoalsTypes=e.hashify(["backCall","downloadFile","button","feedBack","productCard","cart"])}return _createClass(t,[{key:"renderDataAttrs",value:function(){return function(t){return'data-goals-data="'+e.escape(t)+'"'}}()},{key:"forwardGoalsData",value:function(){return function(t){if(t)return this.forwardGoalsDataUlanding();var n=this.goals.toObject(),r=e.compact(e.map(n,function(e,t){return e.isEnabled?{providerName:t,identifier:e.identifier}:null}));if(!r.length)return"";var i=JSON.stringify(r.reduce(function(t,n){return t[n.providerName]={identifier:e.escape(n.identifier)},t},{}));return i}}()},{key:"forwardGoalsDataUlanding",value:function(){return function(){if(!this.goals)return"";var t=this.goals.toObject(),n=e.compact(e.map(t,function(t,n){var r={};return e.each(t,function(e){e&&e.isEnabled&&(r[e.goalId]=e.identifier)}),0<e.size(r)?{providerName:n,identifiers:r}:null}));if(!n.length)return"";var r=JSON.stringify(n.reduce(function(t,n){return t[n.providerName]={identifiers:e.uniq(e.map(n.identifiers,function(t){return e.escape(t)}))},t},{}));return e.escape(r)}}()}]),t}()});
//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map

//# sourceMappingURL=goalsHelper.js.map
