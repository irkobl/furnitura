"use strict";function _toConsumableArray(r){if(Array.isArray(r)){for(var n=0,o=Array(r.length);n<r.length;n++)o[n]=r[n];return o}return Array.from(r)}var _slicedToArray=function(){function r(r,n){var o=[],e=!0,t=!1,a=void 0;try{for(var i,f=r[Symbol.iterator]();!((e=(i=f.next()).done)||(o.push(i.value),n&&o.length===n));e=!0);}catch(l){t=!0,a=l}finally{try{!e&&f["return"]&&f["return"]()}finally{if(t)throw a}}return o}return function(n,o){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return r(n,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},CLASS_NAME="icon-generator-effects",FIXED_DIGITS=2;!function(r){if("function"==typeof define&&define.amd)define([],r);else{if("object"!==("undefined"==typeof exports?"undefined":_typeof(exports)))throw new Error("Unexpected environment");module.exports=r()}}(function(){var r=function(){return function(r){return Object.entries(r).map(function(r){var n=_slicedToArray(r,2),o=n[0],e=n[1];return o+": "+(Array.isArray(e)?e.join(" "):e)}).join(";")}}();return function(n){var o=n.id,e=n.data,t=e.animation,a=t.duration,i=t.kind,f=t.delay,l=e.transparency,u=e.scale,c=e.rotation,s=e.brightness,y={normal:{},hover:{}};if(!o)throw new Error("ID is required!");if(![l,u,c,s].some(function(r){var n=r.enabled;return n}))return"";if(l.enabled){var m=l.normal,d=l.hover;y.normal.opacity=(1-.01*m).toFixed(FIXED_DIGITS),y.hover.opacity=(1-.01*d).toFixed(FIXED_DIGITS)}if(u.enabled){var v=u.normal,b=u.hover;y.normal.transform=[].concat(_toConsumableArray(y.normal.transform||[]),["scale("+(.01*v).toFixed(FIXED_DIGITS)+")"]),y.hover.transform=[].concat(_toConsumableArray(y.hover.transform||[]),["scale("+(.01*b).toFixed(FIXED_DIGITS)+")"])}if(c.enabled){var h=c.normal,p=c.hover;y.normal.transform=[].concat(_toConsumableArray(y.normal.transform||[]),["rotate("+h+"deg)"]),y.hover.transform=[].concat(_toConsumableArray(y.hover.transform||[]),["rotate("+p+"deg)"])}if(s.enabled){var A=s.normal,I=s.hover,S=function(){return function(r,n,o){return(1-o)*r+o*n}}(),_=function(){return function(r){r*=.01;var n=0>r?S(1,.1,-r):S(1,10,r);return n.toFixed(FIXED_DIGITS)}}();y.normal.filter="brightness("+_(A)+")",y.hover.filter="brightness("+_(I)+")"}var D=["display: inline-block","backface-visibility: hidden",r(y.normal),"transition: all "+a+"s "+i+" "+f+"s","transition-property: "+Object.keys(y.normal).join(",")].join(";"),E=r(y.hover);return["#"+o+" ."+CLASS_NAME+"{"+D+"}","#"+o+" ."+CLASS_NAME+":hover {"+E+"}"].join(" ")}});
//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map

//# sourceMappingURL=generateIconEffects.js.map
