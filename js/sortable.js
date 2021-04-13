'use strict';

define('ul-framework/sortable',['jquery','jquery-ui-sortable'],function(a){






return{
$el:null,
init:function(){return function(c){
var d=this,
f=a.extend({
$el:null,
cbStart:function(){return function(){}}(),
cbSort:function(){return function(){}}(),
cbStop:function(){return function(){}}()},
c);

null==f.$el||(

d.$el=f.$el.find('.ul-sp-sort'),























d.$el.sortable({
containment:'parent',
distance:5,
delay:150,
axis:'y',
tolerance:'pointer',
start:function(){return function(h,i){
f.cbStart(h,i);
}}(),
sort:function(){return function(h,i){
f.cbSort(h,i);
}}(),
stop:function(){return function(h,i){
f.cbStop(h,i),
d.$el.trigger('change');
}}()}));

}}(),


destroy:function(){return function(){
this.$el&&this.$el.hasClass('ui-sortable')&&this.$el.sortable('destroy');
}}()};



});
//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map

//# sourceMappingURL=sortable.js.map
