'use strict';

define('ul-framework/selects',['jquery'],

function(a){

return{

setWidth:function(){return function(c){
var d=this;

null==c&&(
c=a('.ul-select-link')),


c.each(function(){

a(this).hasClass('ul-select-link')&&
0<a(this).find('select').length&&

d._setWidth(a(this));

});
}}(),

_setWidth:function(){return function(c){
var d=
a('<span/>').
attr({class:'js-fake-span'}).
html(c.find('select option:selected').text()).
appendTo(c);

c.find('select').width(d.width()+25),
d.remove();
}}()};


});
//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map

//# sourceMappingURL=selects.js.map
