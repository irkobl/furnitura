'use strict';var _createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}





define('typography',['jquery','U','history','lodash','typography-css'],
function(a,b,c,d,f){var g=function(){








function h(j){_classCallCheck(this,h),

this.opts=Object.freeze(d.assign({
styleId:'typography',
importFontPrefix:'typography',
parentId:'body-fict',
selectorPattern:'& @{tag}, & @{class}, & @{class} li',
isConstructor:window.constructorMode},
j)),

this._load=null,
this._data=null,

this.$css=[],
this.countGenerate=0,

this._get(),
this._tc=new f(this.opts);
}return _createClass(h,[{key:'mapOutlineName',value:function(){return function(k)


{





















return{100:'thin 100',200:'extra-light 200',300:'light 300',400:'regular 400',500:'medium 500',600:'semi-bold 600',700:'bold 700',800:'extra-bold 800',900:'black 900',"100i":'thin 100 Italic',"200i":'extra-light 200 Italic',"300i":'light 300 Italic',"400i":'regular 400 Italic',"500i":'medium 500 Italic',"600i":'semi-bold 600 Italic',"700i":'bold 700 Italic',"800i":'extra-bold 800 Italic',"900i":'black 900 Italic'}[k];
}}()},{key:'generate',value:function(){return function()

























































































































































{var k=this;
return new Promise(function(l,m){


k.$css.length||
k._addCss(),


k.fetch.then(function(n){
++k.countGenerate,
k.$css[k.countGenerate]=a('<style type="text/css" id="'+k.opts.styleId+k.countGenerate+'">'+k._tc.generateCss(n)+'</style>'),
a('head').append(k.$css[k.countGenerate]),

k.$css[k.countGenerate].load(function(o){return function(){
k.$css[o].remove(),
delete k.$css[o];
}}(k.countGenerate-1)),

l(n);
},m);
});
}}()},{key:'_get',value:function(){return function()








{var k=this;

















return this._load=new Promise(function(l,m){a.get(''+h.reqUrl).done(function(n){return n[0]?m(n[0]):void(k._data=n[1],l(k._data))}).error(m)}),this._load;

}}()},{key:'getPair',value:function(){return function(k)








{var l=this;

return new Promise(function(m,n){

l.fetch.then(
function(o){
o.fontPairs.length>k?
m(Object.assign({},o.fontPairs[k])):(

console.log('Error: pair index out of bounds.'),
n());

},
function(){
console.log('Error: not ready to add a pair.'),
n();
});


});
}}()},{key:'activatePair',value:function(){return function(k)








{var l=this;
return new Promise(function(m){
l.fetch.then(function(n){

c.pushAndExec({
act:'activatePairTypography',
data:{
idx:k,
idxOld:n.active}},

m);

});
});
}}()},{key:'_activatePair',value:function(){return function(k)



{var l=this;
return new Promise(function(m,n){

b.enqueueAjax({
url:'/sites/url/'+b.params.site+'/pages/id/'+b.params.page+'/typography/'+k+'/activatePair',
parallel:!0,
cb:function(){return function(p,q){return(
p?n(p):void

l.fetch.then(function(r){
r.active=q.active,



l.generate().then(function(){
m(),
a(window).trigger('typographyChange');
});

}));
}}()}),


m();
});
}}()},{key:'removePair',value:function(){return function(k)









{var l=this;
return new Promise(function(m){
l.fetch.then(function(n){

var o=function(){return function(){
c.pushAndExec({
act:'removePairTypography',
data:{
idx:k,
pair:n.fontPairs[k]}},

m);
}}();

n.active==k?
l.activatePair(0).then(o):

o();


});
});
}}()},{key:'_removePair',value:function(){return function(k)

{var l=this;
return new Promise(function(m,n){

b.enqueueAjax({
url:'/sites/url/'+b.params.site+'/pages/id/'+b.params.page+'/typography/'+k+'/removePair',
parallel:!0,
cb:function(){return function(p){return(
p?n(p):void

l.fetch.then(function(q){
q.fontPairs.splice(k,1),

m(),

a(window).trigger('typographyChange');
}));
}}()}),


m();
});
}}()},{key:'editPair',value:function(){return function(k,l)









{var m=this;

return new Promise(function(n){
c.pushAndExec({
act:'editPairTypography',
data:{
idx:k,
pairOld:d.cloneDeep(m._data.fontPairs[k]),
pair:Object.assign({},m._data.fontPairs[k],l)}},

function(){
a(window).one('typographyEditPair',function(){
m.generate().then(n);
});
});
});
}}()},{key:'_editPair',value:function(){return function(k,l)

{var m=this;
return new Promise(function(n,o){
b.enqueueAjax({
url:'/sites/url/'+b.params.site+'/pages/id/'+b.params.page+'/typography/'+k+'/editPair',
data:{
pair:l},

parallel:!0,
cb:function(){return function(q,r){return(
q?o(q):void

m.fetch.then(function(s){
s.fontPairs[r.idx]=r.pair,

n(),

a(window).trigger('typographyEditPair'),
a(window).trigger('typographyChange');
}));
}}()}),


n();
});
}}()},{key:'addPair',value:function(){return function()








{var k=this;
return new Promise(function(l){
k.fetch.then(function(m){

var n=0===m.active?1:m.active,




o=d.assign({},m.fontPairs[n]);

c.pushAndExec({
act:'addPairTypography',
data:{
idx:m.fontPairs.length,
pair:o}}),



a(window).one('typographyAddPair',function(p,q){
k.activatePair(q.idx).then(function(){
l(q.idx);
});
});

});

});
}}()},{key:'_addPair',value:function(){return function(k)

{var l=this;
return new Promise(function(m,n){

b.enqueueAjax({
url:'/sites/url/'+b.params.site+'/pages/id/'+b.params.page+'/typography/0/addPair',
data:{
pair:k},

parallel:!0,
cb:function(){return function(p,q){return(
p?n(p):void

l.fetch.then(function(r){
r.fontPairs[q.idx]=q.pair,

m(),

a(window).trigger('typographyChange'),
a(window).trigger('typographyAddPair',{
idx:q.idx,
pair:r.fontPairs[q.idx]});

}));
}}()}),


m();
});

}}()},{key:'_addCss',value:function(){return function()









{
var k=a('style#'+this.opts.styleId);

k.length?
this.$css[this.countGenerate]=k:(

this.$css[this.countGenerate]=a('<style type="text/css" id="'+this.opts.styleId+'"></style>'),
a('head').append(this.$css[this.countGenerate]));

}}()},{key:'fonts',get:function(){return function(){return{"Open Sans":{typeface:['300','400','600','700','800'],fallbacks:['Arial','sans-serif'],webSafe:!1},Roboto:{typeface:['100','300','400','500','700','900'],fallbacks:['Helvetica','Arial','sans-serif'],webSafe:!1},"PT Sans":{typeface:['400','700'],fallbacks:['Tahoma','Geneva','sans-serif'],webSafe:!1},Ubuntu:{fallbacks:['Geneva','Tahoma','sans-serif'],typeface:['300','400','500','700'],webSafe:!1},"PT Serif":{typeface:['400','700'],fallbacks:['Georgia','serif'],webSafe:!1},Merriweather:{typeface:['300','400','700','900'],fallbacks:['Georgia','serif'],webSafe:!1},"Roboto Slab":{typeface:['100','300','400','700'],fallbacks:['Georgia','serif'],webSafe:!1},"Noto Serif":{typeface:['400','700'],fallbacks:['Georgia','serif'],webSafe:!1},"Noto Sans":{typeface:['400','700'],fallbacks:['Verdana','Geneva','sans-serif'],webSafe:!1},"Fira Sans":{typeface:['100','200','300','400','500','600','700','800','900'],fallbacks:['Tahoma','Geneva','sans-serif'],webSafe:!1},"Fira Sans Condensed":{typeface:['100','200','300','400','500','600','700','800','900'],fallbacks:['Arial Narrow','Arial','sans-serif'],webSafe:!1},"Roboto Condensed":{typeface:['300','400','700'],fallbacks:['Arial Narrow','Arial','sans-serif'],webSafe:!1},Arial:{typeface:['400','700'],fallbacks:['Helvetica','sans-serif'],webSafe:!0},Georgia:{typeface:['400','700'],fallbacks:['sans-serif'],webSafe:!0},Verdana:{typeface:['400','700'],fallbacks:['Geneva','sans-serif'],webSafe:!0},Arimo:{typeface:['400','700'],fallbacks:['Helvetica','Arial','sans-serif'],webSafe:!1},Cuprum:{typeface:['400','700'],fallbacks:['Arial Narrow','Helvetica','Arial','sans-serif'],webSafe:!1},Oswald:{typeface:['200','300','400','500','600','700'],fallbacks:['Arial Narrow','Helvetica','Arial','sans-serif'],webSafe:!1},Lora:{typeface:['400','700'],fallbacks:['Georgia','serif'],webSafe:!1},Rubik:{typeface:['300','400','500','700','900'],fallbacks:['Helvetica','Arial','sans-serif'],webSafe:!1},Montserrat:{typeface:['100','200','300','400','500','600','700','800','900'],fallbacks:['Helvetica','Arial','sans-serif'],webSafe:!1},"PT Sans Caption":{typeface:['400','700'],fallbacks:['Helvetica','Arial','sans-serif'],webSafe:!1},"PT Serif Caption":{typeface:['400'],fallbacks:['Georgia','serif'],webSafe:!1}}}}()},{key:'fetch',get:function(){return function(){return this._load}}()},{key:'siteFont',get:function(){return function()







{
var k=a('\n\t\t\t\t<div>\n\t\t\t\t\t<div class="ul-widget-wysivig-header"><div class="ul-header-editor">\n\t\t\t\t\t\t<h1>&nbsp;</h1>\n\t\t\t\t\t</div></div>\n\t\t\t\t\t<div class="ul-widget-wysivig"><div class="ul-wysivig-editor">\n\t\t\t\t\t\t<p>&nbsp;</p>\n\t\t\t\t\t</div></div>\n\t\t\t\t</div>\n\t\t\t');










k.appendTo('#body');

var l={
headerFont:window.getComputedStyle(k.find('h1')[0],null).getPropertyValue('font-family').split(',')[0].replace(/"/g,''),
mainFont:window.getComputedStyle(k.find('p')[0],null).getPropertyValue('font-family').split(',')[0].replace(/"/g,'')};




return k.remove(),l;
}}()}]),h}();







return g.reqUrl='/sites/url/'+b.params.site+'/typography',new g;
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

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map

//# sourceMappingURL=typography.js.map
