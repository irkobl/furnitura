'use strict';var _Mathmin=

























































































Math.min,_Mathmax=Math.max,_typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}(function(){var a=null,b=function(){function c(d){_classCallCheck(this,c),this.opts=d}return _createClass(c,[{key:'generateCss',value:function(){return function(e){var f=this,g='',h='';return e.fontPairs.forEach(function(j,k){(e.active===k||f.opts.isConstructor)&&(h+=f.generateFontImports(j)),e.active===k&&(g+=f.generateCssRules(j,e))}),h+g}}()},{key:'generateCssRules',value:function(){return function(e,f){var g=this,h='';














return e.styles.forEach(function(j,k){'function'==typeof j.toJSON&&(j=j.toJSON({getters:!0,virtuals:!0,minimize:!1,versionKey:!1})),'function'==typeof e.toJSON&&(e=e.toJSON({getters:!0,virtuals:!0,minimize:!1,versionKey:!1}));var l=f.common[k],m='#'+g.opts.parentId,n=l.selectorPattern||g.opts.selectorPattern;n=n.replace(/\&/g,m).replace(/\@\{tag\}/g,l.tag).replace(/\@\{class\}/g,'.'+l['class']);var o={font:'',typeface:'400',fallbacks:[]};o=j.extendedFrom&&e[j.extendedFrom]?a.extend({},j.fontFamily,e[j.extendedFrom]):j.fontFamily;var p='',q='',r=!0,s=!1,t=void 0;try{for(var v,E,u=o.fallbacks[Symbol.iterator]();!(r=(v=u.next()).done);r=!0)E=v.value,p+=', \''+E+'\''}catch(E){s=!0,t=E}finally{try{!r&&u['return']&&u['return']()}finally{if(s)throw t}}o.typeface&&'400'!==o.typeface&&(q=c.cssMap.typeface+':'+o.typeface+' !important;');var w='\''+o.font+'\''+p,x=o.fontSize*j.fontSize.coeff+j.fontSize['const'];x=_Mathmax(x,j.fontSize.min),x=_Mathmin(x,j.fontSize.max);var y=j.fontSize.value?j.fontSize.value:x+'px',z=o.lineHeight*j.lineHeight.coeff+j.lineHeight['const'];z=_Mathmax(z,j.lineHeight.min),z=_Mathmin(z,j.lineHeight.max);var A=j.lineHeight.value?j.lineHeight.value:z+'%',B=w.replace(/\s/g,'').replace(/\'/g,'').length?c.cssMap.fontFamily+':'+w+' !important;':'',C=w.replace(/\s/g,'').length?c.cssMap.fontSize+':'+y+' !important;':'',D=A.replace(/\s/g,'').length?c.cssMap.lineHeight+':'+A+' !important;':'';h+=n+'{'+B+q+C+(o.autoLineHeight?'':D)+'}'}),h;
}}()},{key:'getHeaderMainFontCss',value:function(){return function(e)








{
var f='',
g='',h=!0,j=!1,k=void 0;try{

for(var m,n,l=e.fallbacks[Symbol.iterator]();!(h=(m=l.next()).done);h=!0)n=m.value,
f+=', '+n}catch(n){j=!0,k=n}finally{try{!h&&l['return']&&l['return']()}finally{if(j)throw k}}






return e.typeface&&'400'!==e.typeface&&(g=c.cssMap.typeface+':'+e.typeface),c.cssMap.fontFamily+':'+e.font+f+';'+g;
}}()},{key:'generateFontImports',value:function(){return function(e)










{var f=this,
g='',
h=['Arial','Georgia','Verdana'],

j=function(){return function(l){
var m='';return(
l.font?(

0>h.indexOf(l.font)&&(
m=f._getGoogleFontsUrl(l.font,l.typeface)),


m?
g+='@import url(\''+m+'\');\n':

''):


'');

}}();




return g+=j(e.headerFont)||'',g+=j(e.mainFont)||'',g;
}}()},{key:'_getGoogleFontsUrl',value:function(){return function(e,f)


{
var g=['700','700i'];







return f&&-1===g.indexOf(f)&&(g.push(f),g.push(f.replace('i','')+'i')),'https://fonts.googleapis.com/css?family='+e.replace(/\s/,'+')+':'+g.join(',')+'&subset=cyrillic';
}}()}]),c}();



b.cssMap={
fontFamily:'font-family',
fontSize:'font-size',
lineHeight:'line-height',
letterSpacing:'letter-spacing',
typeface:'font-weight'},


'function'==typeof define?
define('typography-css',['lodash'],function(c){

return a=c,b;
}):
'object'===('undefined'==typeof module?'undefined':_typeof(module))&&null!==module&&(
a=require('lodash'),
module.exports=b);



})();
//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map

//# sourceMappingURL=typography-css.js.map
