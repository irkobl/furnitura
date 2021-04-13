'use strict';

define('ul-framework/autocomplete',['jquery','text!html/ul-framework/autocomplete.html','_','ul-framework/scrollbar','jquery-ui-autocomplete'],function(a,b,c,d){

return{
$el:null,
init:function(){return function(g){
var h=this,
i=a.extend({
$el:null,
value:'',
placeholder:'',
cbSource:function(){return function(){}}(),
cbCreate:function(){return function(){}}(),
cbSelect:function(){return function(){}}()},
g);

null==i.$el||(

h.$el=i.$el.find('.ul-autocomplete'),
h.$el.append(c.template(b,{
value:i.value,
placeholder:i.placeholder})),



a('.js-autocomplete',h.$el).
each(function(){
this.addEventListener('input',
function(j){
'undefined'==typeof flagAutoCompleteInitDone&&
j.stopImmediatePropagation();

},!1);
}).
autocomplete({
appendTo:a('input',h.$el).parent(),
minLength:1,
source:function(){return function(k,l){
i.cbSource(k,l);
}}(),
select:function(){return function(k,l){


return a(this).val(l.item.value),i.cbSelect(k,l),!1;
}}(),
search:function(){return function(){
a('.js-autocomplete',h.$el).addClass('ul-autocomplete-padding'),
a('.ul-autocomplete-loader',h.$el).addClass('ul-loading-indicator-half');
}}(),
focus:function(){return function(){
d.update(a('.js-autocomplete-scrollbar'));
}}(),
create:function(){return function(){
d.create(a('.js-autocomplete-scrollbar')),
i.cbCreate(h),
a(this).data('ui-autocomplete').
_renderItem=function(k,l){
k.addClass('ul-autocomplete-menu ul-custom-scrollbar js-autocomplete-scrollbar ul-autocomplete-scrollbar--margin');
var m=a('<li class=\'ul-autocomplete-menu-item\'>').
append('<div class=\'ul-autocomplete-list-title\'>'+
l.value+
'</div><div class=\'ul-autocomplete-list-sign\'>'+(
l.title?l.title:'')+''+(l.sign?', '+l.sign:'')+
'</div>').appendTo(k);



return d.create(a('.js-autocomplete-scrollbar')),m;
};

}}(),
response:function(){return function(){
a('.js-autocomplete',h.$el).removeClass('ul-autocomplete-padding'),
a('.ul-autocomplete-loader',h.$el).removeClass('ul-loading-indicator-half');
}}()}));

}}(),


destroy:function(){return function(){
this.$el&&this.$el.hasClass('.ul-autocomplete')&&this.$el.autocomplete('destroy');
}}()};



});
//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map

//# sourceMappingURL=autocomplete.js.map
