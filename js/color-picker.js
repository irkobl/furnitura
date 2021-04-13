'use strict';






define('ul-framework/colorPicker',['jquery','_','i18n','U','ul-framework/range','tpl!ul-framework/color-picker','ukit-colorpicker','jquery-ui-position'],








function(a,c,d,f,h,i){

var j=c.template(i),

k={




defaults:{
$el:a(document.body),
colors:['transparent','#ffffff','#D4D7D9','#3D424D','#000000'],
activeColor:'#ffffff',
isPipetteEnabled:!0,
alpha:{
isEnabled:!0,
value:0.3},

onColorSelect:function(){return function(){}}()},







init:function(){return function(m){
var n=this;
m.colors=m.colors||n.defaults.colors,
m.alpha=a.extend({},n.defaults.alpha,m.alpha),
n.opts=a.extend({},n.defaults,m),

n.selectedColor={
color:n.opts.activeColor,
alpha:n.opts.alpha.isEnabled?n.opts.alpha.value:null},


n.opts.$el.append(j(a.extend(
n.opts,
{
__:d,
isActiveColorBright:n.isBrightColor.apply(n,n.hexToRgb(n.opts.activeColor))}))),



n.opts.alpha.isEnabled&&
h.init(),


n.addListeners();
}}(),






destroy:function(){return function(){
var m=this;

m.opts.$el.
off('.ulColorPicker').
find('.js-color-picker').
empty();
}}(),





addListeners:function(){return function(){
var m=this;

m.opts.$el.

on('click.ulColorPicker','.js-color-picker__color:not(.active)',function(){
var n=a(this);
m.setElActive(n),
m.selectedColor.color=n.attr('data-color'),
m.onColorSelect();
}).

on('click.ulColorPicker','.js-color-picker__pipette',function(){
var n=a(this),
o=n.attr('data-color');
n.hasClass('active')||!o?
m.initPipette(a(this)):(


m.setElActive(n),
m.selectedColor.color=o,
m.onColorSelect());

}),


m.opts.alpha.isEnabled&&
m.opts.$el.on('change.ulColorPicker','.js-colorpicker__alpha',function(n,o){
m.selectedColor.alpha=o.val/100,
m.onColorSelect();
});

}}(),






setElActive:function(){return function(m){
m.
addClass('active').
siblings('.active').
removeClass('active');
}}(),






initPipette:function(){return function(m){
var n=this,


o=m.offset(),
p=o.top+m.outerHeight()+12,
q=o.left-10,
s=a('<div class="ul-colorpicker-layout"><div class="ul-colorpicker"></div></div>').
appendTo('body'),
t=a('.ul-colorpicker',s).
css({top:p,left:q});

t.ColorPicker({
color:m.attr('data-color'),
flat:!0,
onHide:function(){return function(){


setTimeout(function(){
s.remove();
},0);
}}(),
onChange:f.limiter(function(u,v,w){
n.selectedColor.color='#'+v,
n.onColorSelect(),
n.setElActive(m),
m.
css('background',n.selectedColor.color).
attr('data-color',n.selectedColor.color).
find('span').
css('color',n.isBrightColor(w.r,w.g,w.b)?'#000':'#fff');

},100)}),



t.offset().top+t.outerHeight()>a(window).height()&&
t.
css({
top:o.top-t.outerHeight()-12}).

attr('data-position','top'),


t.ColorPickerShow();
}}(),





onColorSelect:function(){return function(){
var m=this;

if(m.opts.alpha.isEnabled){
var n='transparent'===m.selectedColor.color?'hide':'fadeIn';
a('.js-colorpicker__alpha-wrapper',m.opts.$el)[n]();
}

m.opts.onColorSelect(m.selectedColor.color,m.selectedColor.alpha);
}}(),











isBrightColor:function(){return function(m,n,o){

return 0.5<(0.299*m+0.587*n+0.114*o)/255;
}}(),







hexToRgb:function(){return function(m){
var n=m.trim().replace('#',''),
o=parseInt(n.slice(0,2),16),
p=parseInt(n.slice(2,4),16),
q=parseInt(n.slice(4,6),16);

return[o,p,q];
}}()};




return function(l){
var m=Object.create(k);


return m.init(l),m;
};

});
//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map
