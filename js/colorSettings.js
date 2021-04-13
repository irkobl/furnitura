'use strict';




define('colorSettings',['jquery'],function(){

return{


prevTheme:'g-theme-block-1',



imageTabClass:'g-theme-block-5',

tempParams:{},







updateSettings:function(){return function(b){
if(b){
var c=this;
$.extend(!0,c.params,b),



b.animation&&(
c.params.animation=b.animation)}


}}(),






getSettings:function(){return function(){
var b=this,
c={};







return Object.keys(b.params).forEach(function(d){'undefined'==typeof b.params[d]?delete b.params[d]:c[d]=b.params[d]}),c;
}}(),






setBgColors:function(){return function(b,c){
var d=this;

$(b,d.$form).each(function(){
$(c,d.$form).each(function(){
var e=$(this);
$(b,e).each(function(){
var f=$(this);
f.css(
'background-color',
f.css('color'));

});
});
});
}}()};

});
//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map

//# sourceMappingURL=colorSettings.js.map
