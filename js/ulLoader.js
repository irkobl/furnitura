"use strict";define("ulLoader",["jquery","_","i18n","U","js/ulib/ulLoader/progressModel","js/ulib/ulLoader/defaultOptions","text!html/share/constructor/ulLoader.html"],function(s,t,e,i,a,o,n){var r=function(){return function(){this._options=s.extend({},this._DefaultOptions),this.init()}}();return r.prototype._DefaultOptions=Object.freeze(o),r.prototype._Constant=Object.freeze({timeOutAnimation:1e3,durationBlur:600,timeoutSendReq:1e4,goldenRatio:1.61803398874989,maxSendReq:5,estimate:6e3,allowedChangeFields:["isBlurring","isShowPanel","isShowProgressBar","title","text"],easterEggImg:"/img/progress-bar.gif",regExpBackgroundImg:/(?:\(['"]?)(.*?)(?:['"]?\))/}),r.prototype._CssClass=Object.freeze({main:"js-loader",menu:"js-left-menu",ulLoader:"ul-loader",ulLoaderOpacity:"ul-loader--opacity",ulLoaderLight:"ul-loader--light",loader:"js-loader-wrap",progressBar:"js-loader-progressBar",loaderRings:"js-loader-rings",loaderShowCat:"ul-loader-rings--show-cat",loaderCat:"js-loader-cat"}),r.prototype._easterEgg=function(){var t=this;s("."+this._CssClass.ulLoader+" ."+this._CssClass.loaderRings).on("click.easterEggCat",function(){s(this).off(".easterEggCat");var e=new Image;e.src=t._Constant.easterEggImg,e.onload=function(){s("."+t._CssClass.loaderRings).addClass(t._CssClass.loaderShowCat)}})},r.prototype._drawOverlay=function(){this._html=t.template(n,t.extend({},this._options,{__:e,isULanding:i.params&&i.params.isULanding})),this._$el=this._$el.length?s("."+this._CssClass.loader).replaceWith(this._html):s("."+this._CssClass.main).append(this._html)},r.prototype.init=function(){this._progressBar=new a({auto:!1,estimate:this._Constant.estimate});var t=s("."+this._CssClass.main);t.length||s("body").addClass(this._CssClass.main),this._nestingLevel=0,this._$el=s("."+this._CssClass.loader,"."+this._CssClass.main),this._$el.length?(this._html=this._$el[0].outerHTML,this._options.img=s("."+this._CssClass.loader).data("options-img"),s("."+this._CssClass.main).hasClass(this._CssClass.ulLoader)&&(++this._nestingLevel,this._easterEgg())):this._drawOverlay()},r.prototype._setProgress=function(t){s("."+this._CssClass.progressBar,"."+this._CssClass.main).width(t+"%")},r.prototype.show=function(e,i){var a=this;if(!(i&&!i.renderIfExist&&0<this._nestingLevel)){var o=t.pick(t.extend({},this._DefaultOptions,e),this._Constant.allowedChangeFields);++this._nestingLevel,t.isEqual(o,t.pick(this._DefaultOptions,this._Constant.allowedChangeFields))||t.isEqual(o,t.pick(this._options,this._Constant.allowedChangeFields))||(t.extend(this._options,o),this._drawOverlay()),s("."+this._CssClass.main+(this._options.isShowPanel?", ."+this._CssClass.menu:"")).removeClass(this._CssClass.ulLoaderOpacity).addClass(this._CssClass.ulLoader),this._easterEgg(),this._options.isShowProgressBar&&(this._progressBar.start(),requestAnimationFrame(function(){function s(){var t=Math.floor(100*a._progressBar.value);100>t&&a._progressBar._startTime&&(a._setProgress(t),requestAnimationFrame(s))}return s}()))}},r.prototype._animationShow=function(t){var e=this,i=s("."+this._CssClass.main+", ."+this._CssClass.menu);i.addClass(this._CssClass.ulLoaderOpacity),setTimeout(function(){i.removeClass(e._CssClass.ulLoaderOpacity),t()},this._options.isBlurring?this._Constant.timeOutAnimation:this._Constant.timeOutAnimation-this._Constant.durationBlur)},r.prototype.hide=function(t){var e=this;return 0==e._nestingLevel?console.log("Double hide UlLoader"):(--e._nestingLevel,void(0<e._nestingLevel||(this._progressBar.stop(),this._setProgress(100),e._animationShow(function(){s("."+e._CssClass.main+", ."+e._CssClass.menu).removeClass(e._CssClass.ulLoader),e._setProgress(0),t&&t()}))))},r.prototype.updatePreview=function(){var t=this,e=0,a=this._Constant.timeoutSendReq;setTimeout(function(){function o(){s.ajax({url:"/sites/url/"+i.params.site+"/getPreviewImg",method:"get"}).done(function(s){++e,s[1]&&!s[1].status?t._options.img=s[1].preview:!s[0]&&t._Constant.maxSendReq>e&&(a*=t._Constant.goldenRatio,setTimeout(o,a))}).fail(function(){})}return o}(),a)},new r});
//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map

//# sourceMappingURL=ulLoader.js.map
