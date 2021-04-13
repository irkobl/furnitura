'use strict';







define('uploader',['_','jquery','U','text!./html/uploader/uploader.html','filedrop','i18n','validation'],







function(a,b,c,d,f,g,h)







{
var j={

init:function(){return function(){

var m=this;


null!=m.opt.$renderedTo&&m.opt.$renderedTo.length&&(



m._render(),

m.setUploader(),
m.opt.afterOpen(),

m.vars.$urlBtn.on('click',function(n){



return n.stopPropagation(),n.preventDefault(),m.setUrlUploader(),!1;
}));
}}(),
destroy:function(){return function(){
var m=this;

m.vars.$drop.filedrop('destroy'),
m.opt.libBtn&&
m.$el.off('click.uploader'),


m.$el.remove();
}}(),
_render:function(){return function(){
var m=this;

m.$el=b(a.template(d,{

libBtn:m.opt.libBtn,
maxFiles:m.opt.maxFiles,

addToImageLibText:m.opt.addToImageLibText,

statusText:m.opt.statusText,
urlUploader:m.opt.urlUploader,
__:g})),

m.opt.$renderedTo.html(m.$el),

m.vars.$drop=m.$el.find('.ul-uploader-drop'),
m.vars.$input=m.$el.find('input[type="file"]'),
m.vars.$libBtn=m.$el.find('.js-uploader-lib'),
m.vars.$urlBtn=m.$el.find('.js-urlUploader'),

m.opt.libBtn&&
m.$el.on('click.uploader','.js-uploader-lib',function(){

require(['imagelib'],function(n){
if(!m.vars.loading){

var o=1<m.opt.maxFiles;


n.open({
multiSelect:o,
apply:function(){return function(q){
m.opt.returnImagelib(q);
}}(),
close:function(){return function(){


}}()});

}
});
});

}}(),





openImageLib:function(){return function(){
var m=this;
m.opt.libBtn&&
m.vars.$libBtn.trigger('click.uploader');

}}(),


strSize:function(){return function(m){
return 15<m.length?m.substr(0,15)+'..':m;
}}(),


setUrlUploader:function(){return function(){
var m=this,
n=m.$el.find('.js-back-btn'),
o=m.$el.find('.js-button-upload'),
p=m.$el.find('.js-input-upload'),
q=m.$el.find('.ul-button-link'),
r='',
s={
normal:function(){return function(){
m.$el.attr('data-state','url-default'),
m.unsetUrlUploader(),
m.setUploader();
}}(),
initial:function(){return function(){
m.$el.attr('data-state','url-paste');
}}(),
load:function(){return function(v){
var w=this,

x=this.validate(v);
x&&(
s.loading(v),
m.vars.uploadProcess=!0,

b.ajax({
url:c.sprintf('/sites/url/{site}/imageLib/uploadByUrl',[c.params.site]),
data:{url:v},
api:!0,
method:'POST',
ok:function(){return function(z){
m.vars.uploadProcess=!1,
w.success(),
b(m.opt.eventsContext).trigger('loadImg.imgLib',{result:[z]});
}}(),
noOk:function(){return function(z){
s.error(g('constructor.upload by url.error.'+z.reason)),
m.vars.uploadProcess=!1;
}}(),
error:function(){return function(z){
throw z;
}}()}));

}}(),
validate:function(){return function(v){
var w=!1;










return h.url(v,!0)||h.url('http://'+v,!0)?(p.removeClass('error'),o.removeAttr('disabled'),w=!0):(o.attr('disabled',''),p.addClass('error')),w;
}}(),
loading:function(){return function(v){
m.$el.
attr('data-state','url-loading').
find('.ul-uploader-view-loading'),
m.$el.find('.js-uploader-preview').attr('src',v),

n.attr('disabled','disabled');
}}(),
success:function(){return function(){
var v=this;
m.$el.attr('data-state','url-success'),
n.removeAttr('disabled'),
v.backTimeout=setTimeout(function(){
v.initial(),
p.val('');
},2e3);
}}(),
error:function(){return function(v){
m.$el.attr('data-state','url-error'),
m.$el.
find('.ul-uploader-view-url-error').
find('.ul-uploader-text').text(v),
n.removeAttr('disabled');
}}(),
errorload:function(){return function(){
m.$el.attr('data-state','url-load-error');
}}()};


m.unsetUploader(),
m.unsetUrlUploader(),

s.initial(),
p.focus(),



n.on('click',function(u){
u.preventDefault(),
s.normal(),
p.val(''),
m.vars.uploadProcess||

s.backTimeout&&
clearTimeout(s.backTimeout);

}),

q.on('click',function(u){
u.preventDefault(),

s.initial(),
p.val('');
}),

p.on('input',function(){
r=p.val(),

r?(





r=decodeURI(r),
p.val(r),
s.validate(r)):

p.removeClass('error');

}),

o.on('click.upload-Btn',function(u){


return u.preventDefault(),s.load(r),!1;
});
}}(),

unsetUrlUploader:function(){return function(){
var m=this;

m.$el.find('.js-back-btn').off(),
m.$el.find('.ul-button-link').off(),
m.$el.find('.js-input-upload').off(),
m.$el.find('.js-button-upload').off();

}}(),

unsetUploader:function(){return function(){
this.vars.$drop.val('').filedrop('destroy'),
this.vars.$input.off();
}}(),
setUploader:function(){return function(){
var m=this,
n=[],

o={
err:!1,
normal:function(){return function(){
m.opt.urlUploader?
m.$el.attr('data-state','url-default'):

m.$el.attr('data-state','default');

}}(),
overed:function(){return function(){
m.$el.attr('data-state','dragover');
}}(),
loading:function(){return function(q){
m.$el.
attr('data-state','loading').
find('.ul-uploader-view-loading').
find('.ul-uploader-text').text(m.opt.statusText.load.replace('{percent}',q+'%')),
m.$el.
find('.ul-uploader-view-loading').
find('.ul-uploader-loaded').css('width',q+'%');
}}(),
success:function(){return function(){
m.$el.attr('data-state','success'),
this.err||(


m.opt.addToImageLib&&
b(m.opt.eventsContext).trigger('loadImg',{result:n}),

m.opt.uploaded(n),
n=[],
setTimeout(this.normal.bind(this),3e3));
}}(),
error:function(){return function(q){
m.$el.attr('data-state','error'),
n=[],
m.$el.find('.ul-uploader-view-error').find('.ul-uploader-text').text(q);
}}()};

m.unsetUploader(),
m.unsetUrlUploader(),

o.normal(),
m.vars.$drop.filedrop('destroy'),

m.vars.$drop.filedrop({
$fallbackEl:m.vars.$input,
url:m.opt.uploadUrl,
paramname:m.opt.paramname,
allowAll:m.opt.allowAll,
allowedfiletypes:m.opt.fileTypes,
allowedfileextensions:m.opt.fileExtensions,
maxfilesize:m.opt.maxFileSize,
maxfiles:m.opt.maxFiles,
dragOver:function(){return function(){
o.overed();
}}(),
dragLeave:function(){return function(){
o.normal();
}}(),
uploadStarted:function(){return function(){
o.loading(0);
}}(),
uploadFinished:function(){return function(q,r,s){

'file mime type error'==s?(
o.error(m.opt.statusText.error.notAllowed.replace('{fileName}',r.name)),
o.err=!0):
'string'==typeof s?(
o.error(g('all.ajaxError.text')),
o.err=!0):

null==s[0]?
n.push(s[1]):

o.error(s[0]);


}}(),
globalProgressUpdated:function(){return function(q){
o.loading(q);
}}(),
error:function(){return function(q,r){
switch(q){
case'FileTypeNotAllowed':
case'Internal Server Error':
o.error(m.opt.statusText.error.type.replace('{fileName}',m.strSize(r.name)));
break;
case'FileTooLarge':
o.error(m.opt.statusText.error.size.replace('{fileName}',m.strSize(r.name)).replace('{size}',m.opt.maxFileSize));
break;
case'TooManyFiles':
o.error(m.opt.statusText.error.length.replace('{count}',m.opt.maxFiles));
break;
default:}


}}(),
afterAll:function(){return function(){
m.vars.$input.val(''),
o.err?(
o.error(),
o.err=!1):

o.success();

}}()});

}}()},



k=function(){return function(m){
this.opt=b.extend(!0,{
$renderedTo:null,
libBtn:!0,
urlUploader:!1,
paramname:'userfile',
uploadUrl:c.sprintf('/sites/url/{site}/imageLib/upload',[c.params.site]),


maxFileSize:m.maxFileSize?m.maxFileSize:c.params.maxFileSize||5,
maxFiles:20,
addToImageLib:!0,
addToImageLibText:g('constructor.replace from lib'),
statusText:{
normal:{
title:g('constructor.change'),
description:g('constructor.drop file here for replace')},



hover:g('constructor.throw for start upload'),


load:g('constructor.uploaded percents')+' {percent}...',


success:g('constructor.upload complete'),

error:{

notAllowed:g('constructor.uploaded file mime type error'),


header:g('constructor.upload again'),



type:g('constructor.uploaded file is not image'),



length:g('constructor.too many files',m.maxFiles||20),



size:g('constructor.too big file')},


uploadByUrl:{

back:g('constructor.upload by url.back'),
upload:g('constructor.upload by url.upload'),
again:g('constructor.upload by url.again'),
linkPlaceholder:g('constructor.upload by url.paste url here'),

way:{
fromComputer:g('constructor.upload by url.choose way.from computer'),
or:g('constructor.upload by url.choose way.or'),
byUrl:g('constructor.upload by url.choose way.by url'),
dragNDrop:g('constructor.upload by url.choose way.or drag and drop here file to replace')},


error:{
aborted:g('constructor.upload by url.error.connection aborted try again'),
mimeType:g('constructor.upload by url.error.unacceptable mime type'),
sizeLimit:g('constructor.upload by url.error.file size limit exceeded'),
wrongUrl:g('constructor.upload by url.error.url not found'),
processing:g('constructor.upload by url.error.image processing error'),
unknown:g('constructor.upload by url.error.unknown error code')}}},



returnImagelib:function(){return function(o){}}(),
afterOpen:function(){return function(){}}(),
uploaded:function(){return function(o){}}(),
error:function(){return function(o){}}(),
eventsContext:document},
m),


this.opt.fileTypes=m.fileTypes||['image/jpeg','image/png','image/gif','image/bmp','image/svg+xml','image/x-icon'],

this.opt.fileExtensions=m.fileExtensions||['.jpg','.jpeg','.png','.gif','.bmp','.svg','.ico'],


1>this.opt.maxFiles&&(
this.opt.maxFiles=1),

this.vars={
uploadProcess:!1};

}}();


return k.prototype=j,k;
});
//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map

//# sourceMappingURL=uploader.js.map
