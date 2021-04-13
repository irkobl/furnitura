'use strict';

define('ul-framework/folds',['jquery'],

function(a)

{


















































function b(h){

if(h.hasClass('ul-remote-fold'))
return'remote';
if(h.hasClass('ul-sp-sub'))
return'sub';

throw new Error('Cannot detect fold type');

}

function c(h,i,j){

var

l,k=b(h);

h.hasClass('js-animation-process')||(



h.addClass('js-animation-process'),

'sub'===k?

l=h.prev().find('input'):

'remote'===k&&(

l=h.
closest('.ul-sp').
find(
'input[data-ul-remote-fold="'+
h.attr('data-ul-remote-fold')+
'"]')),



l.attr({disabled:'disabled'}),


j=a.extend({
after:null,
skipPreparations:!1,
skipAnimation:!1},
j||{}),

j.skipPreparations||
g[k][i](h),


h.animate({
height:i,
marginBottom:i},
{

duration:j.skipAnimation?0:300,
complete:function(){return function(){

h.removeClass('js-animation-process'),
l.removeAttr('disabled'),

j.after&&
j.after(),


h.trigger('foldToggled',{action:i});

}}(),

progress:function(){return function(){
h.trigger('scrollbarUpdateNeeded');
}}()}));

}

function d(h,i,j){

var k=h.closest('.ul-sp-switcher').next();


k.hasClass('ul-sp-sub')&&



c(k,i,{after:j});
}

function e(h,i){

var
j=i.attr('data-ul-remote-fold'),
k=h.find('.ul-remote-fold[data-ul-remote-fold="'+j+'"]');

if(1!==k.length)
throw new Error(
'Remote fold-block by fold-id "'+j+'" not found');



return k;
}var f={toggle:function(){return function(i,j){j.hasClass(i)?this.show(j):this.hide(j)}}(),show:function(){return function(i,j){j.removeClass(i)}}(),hide:function(){return function(i,j){j.addClass(i)}}()},g={};

return[{sub:'js-sp-sub-closed'},{remote:'js-remote-fold-closed'}].forEach(function(h){var i=Object.keys(h)[0],j=h[i];g[i]={},Object.keys(f).forEach(function(k){g[i][k]=f[k].bind(g[i],j)})}),{

$parent:null,
$closedSubs:null,
$closedRemotes:null,

init:function(){return function(i){

var j=this;

j.$parent=null,
j.$closedSubs=null,
j.$closedRemotes=null,

j.$parent=i||a(document);

var
k=j.$parent.find('.ul-sp-sub'),
l=j.$parent.find('.ul-remote-fold');

k.each(function(){

var
n=a(this),
o=n.prev().find('input');

o.is(':checked')||
n.
addClass('js-sp-sub-closed').
addClass('js-sp-sub-closed-before-init');


}),

j.$closedSubs=k.filter('.js-sp-sub-closed'),

l.each(function(){

var


p,n=a(this),o=n.attr('data-ul-remote-fold');

o&&(

p=j.$parent.find(
'input[data-ul-remote-fold="'+o+'"]'),

1===p.length&&(

p.is(':checked')||
n.
addClass('js-remote-fold-closed').
addClass('js-remote-fold-closed-before-init')));


}),

j.$closedRemotes=l.filter('.js-remote-fold-closed');

var m=
j.$parent.find('.ul-sp').length?
j.$parent.find('.ul-sp'):
j.$parent.hasClass('ul-sp')?
j.$parent:
j.$parent;



m.
find('.ul-sp-switcher input:not([data-ul-remote-fold])').
on('change.folds-sub',function(){

'radio'===a(this).attr('type')?
a(this).
closest('.ul-sp').
find('input[name="'+a(this).attr('name')+'"]').
each(function(){
d(
a(this),
a(this).is(':checked')?'show':'hide');

}):




d(a(this),a(this).is(':checked')?'show':'hide');

}),


m.
find('input[data-ul-remote-fold]').
on('change.folds-remote',function(){

var n=a(this);

if('radio'===n.attr('type')){

var o=n.attr('name'),
p=m.find('input[data-ul-remote-fold][name="'+o+'"]');

p.each(function(){

var r=a(this),
s=e(m,r);

c(s,r.is(':checked')?'show':'hide');
});

}else


{

var q=e(m,n);

c(q,n.is(':checked')?'show':'hide');
}
});
}}(),


after:function(){return function(){

var i=this;


i.$closedSubs.each(function(){
i._hideAtStart(a(this),'js-sp-sub-closed-before-init');
}),


i.$closedRemotes.each(function(){
i._hideAtStart(a(this),'js-remote-fold-closed-before-init');
});
}}(),




_hideAtStart:function(){return function(i,j){

var k=this;

c(i,'hide',{

skipPreparations:!0,
skipAnimation:!0,

after:function(){return function(){
k.$closedSubs.removeClass(j);
}}()});

}}()};


});
//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map

//# sourceMappingURL=folds.js.map
