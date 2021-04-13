'use strict';

define('panelPreview',['jquery','U','sitePublish','moment','locale','i18n','setUserAgent','logActions','ulLoader'],function(a,b,c,d,f,g,h,i,j){

















var k={
init:function(){return function(m){
var n=this,
o=a('body');
this.menu=m,
j.show({
isBlurring:!0,
isShowPanel:!1,
isShowProgressBar:!1,
img:!1,
title:'preview.title',
text:!1}),

o.addClass('ul-preview-mode'),
window.top.constructorPreviewMode=!0,

o.append('<div id="iframe-preview" class="desktop"><div class="iframe-preview-device"><div class="iframe-preview-content"><iframe src="/preview/'+b.params.site+'/'+b.params.page+'"></div></div></div>');
var p=a('#iframe-preview'),
q=a('iframe','#iframe-preview'),
r=a('.js-preview-publish'),
s='desktop';

setTimeout(function(){
p.css('opacity','1');
},0),
b.layers.on(0,function(){
n.closePreview();
}),

o.addClass('ul-preview-mode-loading'),
q.on('load.ulLoader',function(){
o.removeClass('ul-preview-mode-loading'),
j.hide(),
q.off('load.ulLoader');
}),

n.menu.counterCheck(!1,
function(){
n.showPublished(r);
},
function(t){
var u=r.data('date');

u&&
r.attr('title',g('constructor.last published on DATE',d(u).calendar())),


0<t.numModified?(
r.removeClass('ul-preview-publish--published'),
r.removeAttr('disabled'),
!r.hasClass('ul-preview-publish--tariffexpired')&&
r.removeAttr('disabled')):

0<t.numPublished&&(
r.addClass('ul-preview-publish--published'),
r.attr('disabled','disabled'));

}),









-1!==window.navigator.userAgent.indexOf('Safari')&&
p.
css({overflow:'hidden'}).
on('mousewheel.preview',function(t){
p.scrollTop(p.scrollTop()-t.originalEvent.wheelDeltaY);
}),


a(document).
on('click.preview','.js-preview-action',function(t){
var u=a(this).attr('data-mode');

i.add({
fromFile:'js/constructor/panels/panels-preview.js',
title:'change preview mode',
desc:'mode: '+u}),


h.replaceUserAgent(q[0].contentWindow,u),
h.replaceUserAgent(window,u),

q.on('load.previewMode',function(){
h.replaceUserAgent(q[0].contentWindow,u);
}),

window.
top.
$(window.top.document).trigger('changePreviewDevise',{mode:u,$iframe:q}),

'back'==u?(

b.layers.off(!0),
t.originalEvent&&
b.hist.pushState({
data:{url:'/sites/url/'+b.params.site+'/pages/id/'+b.params.pageId+'/edit'},
title:'title',
url:'/sites/url/'+b.params.site+'/pages/id/'+b.params.pageId+'/constructor'})):(





a('.js-preview-action','#ul-preview-controls').removeClass('active'),
a(this).addClass('active'),
p.removeClass(s).addClass(u),
s=u);

}).
on('click.preview','.js-preview-publish:not([disabled])',function(){
n.publishSite(a(this));
});
}}(),



deinit:function(){return function(){
a(document).off('.preview'),
a('#iframe-preview').off('.preview'),
a('iframe','#iframe-preview').off('load.previewMode'),
window.top.constructorPreviewMode=!1;
}}(),

closePreview:function(){return function(){
a('body').
removeClass('ul-preview-mode-loading').
removeClass('ul-preview-mode'),


h.replaceUserAgent(window.top,'desktop'),
a('#iframe-preview').remove(),
this.menu.setPanel(this.menu.oldPanel||'panelConstructor'),
a('.js-preview-action','#ul-preview-controls').
removeClass('active').
filter('[data-mode="desktop"]').
addClass('active');
}}(),

publishSite:function(){return function(m){


function n(){
m.hasClass('ul-preview-publish--tariffexpired')||
m.removeClass('loading').removeAttr('disabled');

}var o=this;

c.publish(
b.params.site,
function(){
m.
addClass('loading').
attr('disabled','disabled'),

o.menu.counterCheck(!0,function(p){
p?
n():

o.showPublished(m);

});

},
n,
n);

}}(),

showPublished:function(){return function(m){
d.locale(f.get());
var n=d(new Date).calendar();
m.
addClass('ul-preview-publish--published').
removeClass('loading').
attr('title',g('constructor.published')+' '+n).
data('date',n);
}}()};




return k;
});
//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map

//# sourceMappingURL=panel-preview.js.map
