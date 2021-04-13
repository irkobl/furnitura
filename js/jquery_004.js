'use strict';

define('posFixed',['jquery'],function(a){

var b=function(){

var c={




addListeners:function(){return function(){
a(window).on('resize',function(){
c.repositionFixed(c.$root);
});
}}(),






calcScrollWidth:function(){return function(){
var e=a('<div>',{style:'width: 100%; height: 2px; visibility: hidden; opacity: 0;',html:'<div><br>|<br>|<br></div>'}).


appendTo('body'),
f=e.find('div'),g=f.outerWidth();
e.css('overflow-y','scroll');
var h=f.outerWidth();

return e.remove(),g-h;
}}(),






repositionFixed:function(){return function(e){
var
g=a(window).width(),h=a(window).height(),
j={
width:e.outerWidth(),
height:e.outerHeight()};

j.offset=e.offset(),

j.offset.right=g-j.offset.left-j.width,
0>j.offset.right&&(j.offset.right=0),

j.offset.bottom=h-j.offset.top-j.height,
0>j.offset.bottom&&(j.offset.bottom=0),
a(c.className,e).each(function(){
a(this).removeAttr('style').css({
top:function(){return function(l,m){
return'auto'===m?'auto':parseInt(m,10)+j.offset.top+parseInt(e.css('border-top-width'),10);
}}(),
left:function(){return function(l,m){
return'auto'===m?'auto':parseInt(m,10)+j.offset.left+parseInt(e.css('border-left-width'),10);
}}(),
right:function(){return function(l,m){
return'auto'===m?'auto':parseInt(m,10)+j.offset.right+(e.height()<e.prop('scrollHeight')?c.scrollW:0)+parseInt(e.css('border-right-width'),10);
}}(),
bottom:function(){return function(l,m){
return'auto'===m?'auto':parseInt(m,10)+j.offset.bottom+(e.width()<e.prop('scrollWidth')?c.scrollW:0)+parseInt(e.css('border-bottom-width'),10);
}}()});

});
}}(),







init:function(){return function(e,f){
c.className=f?f:'.posfixed',

c.scrollW=c.calcScrollWidth(),
c.$root=e?a(e):a('#main'),
a(function(){
c.repositionFixed(c.$root),
c.addListeners();
});
}}()};



return{
init:c.init};


}();




return window.posFixed=b,b;

});
//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map

//# sourceMappingURL=jquery.posfixed.js.map
