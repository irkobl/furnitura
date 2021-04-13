'use strict';

define('videoBox',['U','jquery','i18n','_','css!/css/require/videoBox.css'],








function(a,b,c,d)




{









var f=function(){return function(h){

this.callBack=h.callBack,
this.init();

}}();






















































































































return f.prototype._CssClasses=Object.freeze({BUTTON_CLOSE:'js-video-box__close',BUTTON_SEND:'js-video-box__send',CONTENT:'js-video-box__content',INPUT:'js-video-box__input',INFO:'js-video-box__info'}),f.prototype.value=function(){return b('.'+this._CssClasses.INPUT).val()},f.prototype.init=function(){var g=this;require(['text!/html/videoBox/popUp.html'],function(h){g._$element=b(d.template(h,{__:c('widgets.videoBox')})).appendTo('body'),a.layers.on(1,b.proxy(g.destroy.bind(g),this)),g._$element.on('mousedown','.'+g._CssClasses.BUTTON_CLOSE,function(i){i.preventDefault(),g.destroy()}).on('mousedown','.'+g._CssClasses.BUTTON_SEND,function(i){i.preventDefault(),g._send()}).on('mousedown',function(i){b(i.target).find('.'+g._CssClasses.CONTENT).length&&a.layers.off(g.destroy.bind(g))})})},f.prototype._send=function(){var g=this;b('.'+this._CssClasses.INFO).text(c('widgets.video')('link_progress')),b.ajax({type:'get',dataType:'json',url:'/static/widget/video/getOembed',data:{url:g.value.bind(g),format:'json'},api:!0,ok:function(){return function(i){g.destroy(),g.callBack(i)}}(),noOk:function(){return function(i){var j=''==c('all')(i.url)?i.url:c('all')(i.url);g.showError(j)}}(),error:function(){return function(i,j){g.showError(j)}}()})},f.prototype.showError=function(g){b('.'+this._CssClasses.INPUT).removeClass('success').addClass('error'),b('.'+this._CssClasses.INFO).html('<span class="icon-content-special-novalid"></span> '+g)},f.prototype.destroy=function(){this._$element.remove()},f;
});
//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map

//# sourceMappingURL=videoBox.js.map
