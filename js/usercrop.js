'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};


















define('usercrop',['U','jquery','guid','cropModes','cropMixins','smartcrop','i18n','js/ulib/crop/usercropEdit','logActions'],











function(a,b,c,d,e,f,g,h,i)









{

var j={

defaultOpts:{

$el:null,

openAfterChange:!0,





autoOpen:!1,


detector:!0,


detectInfo:!1,


beforeOpen:function(){return function(){}}(),

afterClose:function(){return function(){}}(),

controls:{
buttons:{
buttons:['upload','cut','title','seo'],
enable:!0},

draggable:{
enable:!0},

resize:{
enable:!0},

zoom:{
enable:!0},

overlay:{
enable:!0},

popup:{
enable:!0}},




titleSettings:{


title:g('constructor.usercrop.title of titlePopup'),


template:'text!html/crop/usercrop/_popupTitle.html',


html:'',


setData:function(){return function(l){
l({});
}}(),


onOpen:function(){return function(){}}(),


onClose:function(){return function(){}}(),



onChange:function(){return function(){}}()},



seoSettings:{


title:g('constructor.usercrop.title of seoPopup'),


template:'text!html/crop/usercrop/_popupSeo.html',


html:'',


setData:function(){return function(l){
l({});
}}(),


onOpen:function(){return function(){}}(),


onClose:function(){return function(){}}(),



onChange:function(){return function(){}}()}},













init:function(){return function(l){

i.add({
fromFile:'js/ulib/crop/usercrop.js',
title:'usercrop init'}),



this.opt=b.extend(!0,this.defaultOpts,l),


this._addCropModesEvents(),


this._prepare(),


this._addEvents(),


this.__=g('constructor.usercrop'),


h.init(this);
}}(),








open:function(){return function(l){
var m=this,
n=m.__getCrop(l);

m.opt.beforeOpen(),
h.open(n);
}}(),







close:function(){return function(l,m){
var n=this,
o=n.__getCrop(l);
m=m||function(){},


b('.ul-debug-canvas').off('.removeDebug').remove(),


n.event('disableControl'),

n.__serverCrop(o,function(){
h.close(),
n.opt.afterClose(o),
m();
});
}}(),







get:function(){return function(l){
var m=d._getRealImageParams(this.__getCrop(l).get(0));

return{
zoomaway:m.zoomaway,
original:m.originalSrc,
cutData:m.data.cutData,
autocrop:m.data.autocrop,
usercrop:m.data.usercrop,
changed:b(m.el).data('changed')||!1};

}}(),









setImage:function(){return function(l,m){
var n=this,
o=n.__getCrop(l);

o.
attr('data-original',m).
attr('data-cutData',JSON.stringify({
x:0,
y:0,
height:0,
width:0,
resizeWidth:0,
src:''})),


n._toUCM(o,'_afterSetNewImg');
}}(),









setCut:function(){return function(l,m){
l.attr('data-cutData',JSON.stringify(m)),
this._toUCM(l,'_afterSetNewImg');
}}(),





event:function(){return function(l,m){
h.events.dispatch(l,m);
}}(),










deinit:function(){return function(l){
var m=this;

l||(l=function(){return function(){}}()),
this.close(m.opt.$el,function(){
m.opt.$el.
off('.usercrop'),
b(document).off('beforeChangePage.usercrop'),
l();
});
}}(),








_addCropModesEvents:function(){return function(){
var l=this;


d._setCBtoUCM({









load:function(){return function(n){
var o=b(n),
p=o.find('img'),
q=null,
r='';

i.add({
fromFile:'js/ulib/crop/usercrop.js',
title:'_addCropModesEvents',
desc:'img full load'}),


o.
removeClass(d.autocropClass).
removeClass(d.usercropLoadClass).
addClass(d.usercropClass),



p.each(function(){
var s=b(this);

s.hasClass(d.usercropImgClass)?(
s.removeClass(d.usercropImgClass),
q=s):

s.remove();

});

null===q||(




l.__loading.off(o),
l._positionUCM(o),
q.show(),



r=q.data('afterLoadAction'),
r&&(
q.data('afterLoadAction',null),
l[r]&&
l[r](b(n))),



l._positionUCM(o));

}}(),
resize:function(){return function(n){

l._positionUCM(b(n)),


h.reposition();
}}()});

}}(),









_prepare:function(){return function(){
var l=this,
m=null;


'boolean'==typeof l.opt.autoOpen&&!0===l.opt.autoOpen?
m=l.opt.$el:

'object'===_typeof(l.opt.autoOpen)&&l.opt.autoOpen.length&&(
m=l.opt.autoOpen),








l.opt.$el.
find('.'+d.autocropClass).
each(function(){
l._toUCM(b(this),null!==m&&l.__getCrop(m).get(0)===b(this).get(0)?'open':'');
});
}}(),






_addEvents:function(){return function(){
var l=this;
l.opt.$el.

on('click.usercrop','.'+d.usercropClass,function(){
l.open(b(this));
}),

b(document).
on('beforeChangePage.usercrop',function(){
l.deinit();
});
}}(),













_toUCM:function(){return function(l,m){
if(l&&l.length){



var n=d._getImageParams(l.get(0)),
o=c(),
p=b('<img>');

p.
attr('crossorigin','anonymous').
attr('src',n.data.cutData.src).
attr('id',o).
attr('onload','loadImg(\''+o+'\')').
addClass(d.usercropImgClass).
data('afterLoadAction',m||'').
hide(),

b(n.el).
addClass(d.usercropLoadClass).
append(p),

this.__loading.on(b(n.el))}
}}(),









_toACM:function(){return function(l){
l&&l.length;



}}(),









_afterSetNewImg:function(){return function(l){
var m=this;

m.__loading.on(l),
m.__detectImg(l,function(n){
var o=n.center;

m.opt.detector&&n.focus&&(
o=n.focus),


n.$img.css({
width:o.width,
top:o.y,
left:o.x}),


m._setParams(l),
m.__loading.off(l),


m.opt.openAfterChange?
h.update(l):

m.close(l);









});
}}(),









_positionUCM:function(){return function(l){
var m=d._getImageParams(l.get(0)),
n=m.data.img.width/m.data.img.height,
o=m.data.container.width*(m.img.naturalWidth/m.data.autocrop.width),
p=-1*m.data.autocrop.y/(m.img.naturalHeight/m.data.img.height),
q=-1*m.data.autocrop.x/(m.img.naturalWidth/m.data.img.width);
o=o/n<m.data.container.height?m.data.container.height*n:o,(

m.zoomaway&&m.data.usercrop.useNatural&&m.data.autocrop.width<m.data.container.width||m.data.usercrop.cutOrig&&m.zoomaway)&&(
o=m.data.autocrop.width,
o=o/n<m.data.container.height?m.data.container.height*n:o,
q=(m.data.container.width-o)/2,

m.data.usercrop.cutOrig&&(
p=(m.data.container.height-o/n)/2)),



b(m.img).css({
height:'auto',
width:o,
top:p,
left:q}),


h.reposition();
}}(),












_setParams:function(){return function(l){
var m=this,
n=d._getImageParams(l.get(0)),
o=n.data.container.width*(n.img.naturalWidth/n.data.img.width),
p=1<n.data.container.width-n.data.img.width;

l.
attr('data-usercrop',JSON.stringify({
x:-1*parseFloat(b(n.img).css('left'))*(n.img.naturalWidth/n.data.img.width),
y:-1*parseFloat(b(n.img).css('top'))*(n.img.naturalHeight/n.data.img.height),
height:n.data.container.height*(n.img.naturalHeight/n.data.img.height),
width:o,
resizeWidth:p?n.data.img.width:e.getContainerWidth(n.el,o),
src:''})).

attr('data-autocrop',JSON.stringify({
x:0,
y:0,
height:0,
width:0,
resizeWidth:0,
src:''})).

data('changed',!0),

p?
l.attr('zoomaway',''):

l.removeAttr('zoomaway'),


m._positionUCM(l);
}}(),











__detectImg:function(){return function(l,m){
var n=this,
o=l.find('img');
m=m||function(){};

var p=Date.now(),

q={
height:o.get(0).naturalHeight,
width:o.get(0).naturalWidth};




q.height<l.height()&&(
q.width=l.height()/(q.height/q.width),
q.height=l.height()),


i.add({
fromFile:'js/ulib/crop/usercrop.js',
title:'detect image position',
desc:'img size: '+q.width+'x'+q.height+'. src: '+o.attr('src')});


var r={
height:q.height,
width:q.width,
y:-(q.height/2)+l.height()/2,
x:-(q.width/2)+l.width()/2},


s=o.get(0).naturalWidth<l.width();

f.crop(
o.get(0),
{
height:l.height(),
width:s?o.get(0).naturalWidth:l.width(),
debug:n.opt.detectInfo,
minScale:0,
scoreDownSample:12},

function(t){
var u=null;


if(t&&t.topCrop){
var v=t.topCrop.width/l.width();

u={
height:o.get(0).naturalHeight/v,
width:o.get(0).naturalWidth/v,
y:-(t.topCrop.y/v),
x:-(t.topCrop.x/v)},


s&&(
u={
height:r.height,
width:r.width,
y:-t.topCrop.y,
x:r.x});


}








if(m({center:r,focus:u,$img:o}),t.debugCanvas){



b('.ul-debug-canvas').off('.removeDebug').remove();

var w=b('<div class="ul-debug-canvas show"><span class="cn"></span><span class="time"></span></div>').
find('.cn').
append(b(t.debugCanvas)).
closest('.ul-debug-canvas').
find('.time').
html(Date.now()-p+'ms').
closest('.ul-debug-canvas').
appendTo('body');

setTimeout(function(){
w.removeClass('show');
},2e3),

w.on('dblclick.removeDebug',function(){
b(this).remove();
});





}
});

}}(),









__getCrop:function(){return function(l){
var m=null;return(

l&&l.length?(m=



l.hasClass(d.autocropClass)||l.hasClass(d.usercropClass)?
l:


l.closest('.'+d.autocropClass).length||l.hasClass('.'+d.usercropClass).length?
l.closest('.'+d.autocropClass+', .'+d.usercropClass):




l.find('.'+d.autocropClass+', .'+d.usercropClass).first(),


m):m);
}}(),





__loading:{
on:function(){return function(l){
this.timer=setTimeout(function(){
l.addClass('loading');
},300);
}}(),
off:function(){return function(l){
clearInterval(this.timer),
l.removeClass('loading');
}}()},










__serverCrop:function(){return function(l,m){
var n=this;
m=m||function(){};
var o=d._getImageParams(l.get(0)).data;return(


o.usercrop.src.length||!l.data('changed')?void
m():void(


n.__loading.on(l),


o.usercrop.src=o.cutData.src,

b.ajax({
url:a.sprintf('/sites/url/{site}/imageLib/crop',[a.params.site]),
method:'post',
data:o.usercrop,
api:!0,
ok:function(){return function(q){
n.__loading.off(l),
o.usercrop.src=q.data,
l.attr('data-usercrop',JSON.stringify(o.usercrop)),
m();
}}()})));

}}(),








__openImageLib:function(){return function(l,m){
var n=this;
m=m||function(){},

require(['imagelib'],function(o){
o.open({
multiSelect:!1,
apply:function(){return function(q){
n.setImage(l,q[0].origin),
m(l,q);
}}()});

});
}}(),







__openOldCrop:function(){return function(l,m){
var n=this,
o=d._getRealImageParams(l.get(0));
m=m||function(){},

require(['imagecrop'],function(p){

0===o.data.cutData.height&&0===o.data.cutData.width&&(
o.data.cutData=null),


n.event('openOldCrop'),
p.open({
img:o.originalSrc,
data:o.data.cutData,
done:function(){return function(r){
n.setCut(l,r.cropData),
m(l,r.cropData);
}}(),
close:function(){return function(){
n.event('closeOldCrop');
}}()});

});
}}()};




return j;
});
//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map

//# sourceMappingURL=usercrop.js.map
