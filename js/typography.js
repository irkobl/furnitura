'use strict';var _createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}

define(['U','i18n','jquery','asyncjs','_','typography','nf','panelDialog','text!html/constructor/design/typographyList.html','text!html/constructor/design/typographyItem.html'],











function(a,b,c,d,f,g,h,j,k,l)










{


var m=function(){

































function n(o){_classCallCheck(this,n),
this.$form=o,

this._render().
then(this._addEvents.bind(this));
}return _createClass(n,[{key:'_cssClasses',get:function(){return function(){return{typography:'js-typography',typographyItem:'js-typography-item',active:'active'}}}()},{key:'_Constant',get:function(){return function(){return{namespace:'typography'}}}()}]),_createClass(n,[{key:'_addEvents',value:function(){return function()






{var p=this,
q=this;

this.$form.
on('click.typography','.js-create-custom-fontPair',function(){
p._addPair(),
window.analyticsHandler('yandexMetrika.mainId','reachGoal','client--typography-addPair');
}).
on('mouseenter.typography','.js-typography-item',function(){

q._shopStickyPopup(c(this).attr('data-id'));
}).
on('mouseleave.typography','.js-typography-item',function(){
q._hideStickyPopup(c(this).attr('data-id'));
}).
on('click.typography','.js-typography-item',function(r){
p._activatePair(
c(r.currentTarget).attr('data-id')),

window.analyticsHandler('yandexMetrika.mainId','reachGoal','client--typography-switchPair');
}).

on('click.typography','.js-action',function(r){
var
s=c(this).attr('data-action'),
t=c(r.target).closest('.js-typography-item').attr('data-id');

switch(s){
case'edit':
q._editPair(t);
break;
case'remove':
q._removePair(t);
break;
default:}



r.stopPropagation();
}),

c(window).on('typographyChange.panelTypography',this._render.bind(this));
}}()},{key:'_shopStickyPopup',value:function(){return function()


{

}}()},{key:'_hideStickyPopup',value:function(){return function()
{

}}()},{key:'_render',value:function(){return function()







{var p=this;
return new Promise(function(q){
g.fetch.then(function(r){

var s='',
t='';

r.fontPairs.forEach(function(u,v){


var w=u.headerFont||g.siteFont.headerFont,
x=u.mainFont||g.siteFont.mainFont;

u.templatePair&&(
w=g.siteFont.headerFont,
x=g.siteFont.mainFont);


var y=f.template(l,{
idx:v,
headerFont:u.headerFont,
mainFont:u.mainFont,
headerFontRules:g._tc.getHeaderMainFontCss(u.headerFont),
mainFontRules:g._tc.getHeaderMainFontCss(u.mainFont),
isActive:v==r.active,
editBtn:(u.userPair||a.params.isTemplateServer)&&0!==v,
removeBtn:(u.userPair||a.params.isTemplateServer)&&0!==v,
__:b});


u.userPair?
t+=y:

s+=y;

}),


c(p.$form).html(
f.template(k,{
defaultPairs:s,
userPairs:t,
__:b})),



q();
});
});
}}()},{key:'_activatePair',value:function(){return function(p)







{
g.activatePair(p);






}}()},{key:'_editPair',value:function(){return function(p)







{
g.getPair(p).then(function(q){
j.show({
context:{pair:Object.assign({},q),idx:p},
required:['typographyEdit'],
templateUrl:'/html/constructor/typography/edit.html',
templateData:q,
closeState:!0});


});
}}()},{key:'_addPair',value:function(){return function()






{
g.addPair();
}}()},{key:'_removePair',value:function(){return function(p)







{var q=this;
h.confirm({
title:b('constructor.typography.removePair'),
color:'ul-button-red',
invert:!0,
ok:b('all.remove'),
cancel:'',
okCb:function(){return function(){
g.removePair(p).then(q._render.bind(q));
}}()});

}}()},{key:'destroy',value:function(){return function()






{
this.$form.off('.'+this._Constant.namespace),
c(window).off('.panelTypography');
}}()}]),n}();



return m;

});
//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map
