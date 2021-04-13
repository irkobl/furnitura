'use strict';

define('widgetEditTooltip',['jquery','_','text!./html/constructor/widgetEditTooltip.html','i18n'],function(a,b,c,d){

if(!window.constructorMode)
return{
show:function(){return function(){}}()};



c=b.template(c,{__:d});

var e={






isLocalStorageSupported:function(){
var
f='testSupportLocalStorage',
g=window.localStorage;
try{


return g.setItem(f,f),g.removeItem(f),!0;
}
catch(h){

return console.log('Saving to storage problem. Change browser.',h),!1;
}
}(),

init:function(){return function(){
e.visibleTimes=2,
e.isLocalStorageSupported&&!localStorage.widgetEditTooltipCount&&(
localStorage.widgetEditTooltipCount=0),

e.isVisible()&&(
e.$el=a(c).appendTo('body'));

}}(),


isVisible:function(){return function(){return(
e.isLocalStorageSupported?
parseInt(localStorage.widgetEditTooltipCount,10)<e.visibleTimes:

0===e.visibleTimes);
}}(),

show:function(){return function(){
e.isVisible()&&window.isFirstConstructorIn&&(
e.$el.addClass('ul-widget-edit-tt--visible'),

e.isLocalStorageSupported&&(
localStorage.widgetEditTooltipCount=parseInt(localStorage.widgetEditTooltipCount,10)+1),


setTimeout(function(){
a(document).on('click.widgetEditTooltip','*',function(){
a(document).off('click.widgetEditTooltip'),
e.$el.removeClass('ul-widget-edit-tt--visible ul-widget-edit-tt--animate');
}),

e.$el.addClass('ul-widget-edit-tt--animate');
},200));

}}()};




return e.init(),{
show:e.show};


});
//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map

//# sourceMappingURL=widgetEditTooltip.js.map
