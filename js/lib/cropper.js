!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";var i=t(window),e=t(document),h=window.location,a=!0,s=!1,r=null,n=NaN,o=1/0,d="undefined",g="directive",l=".cropper",c=/^(e|n|w|s|ne|nw|sw|se|all|crop|move|zoom)$/,p=/^(x|y|width|height)$/,f=/^(naturalWidth|naturalHeight|width|height|aspectRatio|ratio|rotate)$/,m="cropper-modal",u="cropper-hidden",w="cropper-invisible",v="cropper-move",x="cropper-crop",b="cropper-disabled",y="mousedown touchstart",$="mousemove touchmove",D="mouseup mouseleave touchend touchleave touchcancel",W="wheel mousewheel DOMMouseScroll",H="resize"+l,C="dblclick",k="build"+l,R="built"+l,z="dragstart"+l,L="dragmove"+l,Y="dragend"+l,X=function(t){return"number"==typeof t},_=function(i,e){this.element=i,this.$element=t(i),this.defaults=t.extend({},_.DEFAULTS,t.isPlainObject(e)?e:{}),this.$original=r,this.ready=s,this.built=s,this.cropped=s,this.rotated=s,this.disabled=s,this.replaced=s,this.init()},M=Math.round,T=Math.sqrt,I=Math.min,E=Math.max,P=Math.abs,O=Math.sin,U=Math.cos,j=parseFloat;_.prototype={constructor:_,support:{canvas:t.isFunction(t("<canvas>")[0].getContext)},init:function(){var i=this.defaults;t.each(i,function(t,e){switch(t){case"aspectRatio":i[t]=P(j(e))||n;break;case"autoCropArea":i[t]=P(j(e))||.8;break;case"minWidth":case"minHeight":i[t]=P(j(e))||0;break;case"maxWidth":case"maxHeight":i[t]=P(j(e))||o}}),this.image={rotate:0},this.load()},load:function(){var i,e,h=this,s=this.$element,r=this.element,n=this.image,o="";s.is("img")?e=s.prop("src"):s.is("canvas")&&this.support.canvas&&(e=r.toDataURL()),e&&(this.replaced&&(n.rotate=0),this.defaults.checkImageOrigin&&(s.prop("crossOrigin")||this.isCrossOriginURL(e))&&(o=" crossOrigin"),this.$clone=i=t("<img"+o+' src="'+e+'">'),i.one("load",function(){n.naturalWidth=this.naturalWidth||i.width(),n.naturalHeight=this.naturalHeight||i.height(),n.aspectRatio=n.naturalWidth/n.naturalHeight,h.url=e,h.ready=a,h.build()}),i.addClass(w).prependTo("body"))},isCrossOriginURL:function(t){var i=t.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);return!i||i[1]===h.protocol&&i[2]===h.hostname&&i[3]===h.port?s:a},build:function(){var i,h,s=this.$element,r=this.defaults;this.ready&&(this.built&&this.unbuild(),s.one(k,r.build),i=t.Event(k),s.trigger(i),i.isDefaultPrevented()||(this.$cropper=h=t(_.TEMPLATE),s.addClass(u),this.$clone.removeClass(w).prependTo(h),this.rotated||(this.$original=this.$clone.clone(),this.$original.addClass(w).prependTo(this.$cropper),this.originalImage=t.extend({},this.image)),this.$container=s.parent(),this.$container.append(h),this.$canvas=h.find(".cropper-canvas"),this.$dragger=h.find(".cropper-dragger"),this.$viewer=h.find(".cropper-viewer"),r.autoCrop?this.cropped=a:this.$dragger.addClass(u),r.dragCrop&&this.setDragMode("crop"),r.modal&&this.$canvas.addClass(m),!r.dashed&&this.$dragger.find(".cropper-dashed").addClass(u),!r.movable&&this.$dragger.find(".cropper-face").data(g,"move"),!r.resizable&&this.$dragger.find(".cropper-line, .cropper-point").addClass(u),this.$scope=r.multiple?this.$cropper:e,this.addListeners(),this.initPreview(),this.built=a,this.update(),s.one(R,r.built),s.trigger(R)))},unbuild:function(){this.built&&(this.built=s,this.removeListeners(),this.$preview.empty(),this.$preview=r,this.$dragger=r,this.$canvas=r,this.$container=r,this.$cropper.remove(),this.$cropper=r)},update:function(t){this.initContainer(),this.initCropper(),this.initImage(),this.initDragger(),t?(this.setData(t,a),this.setDragMode("crop")):this.setData(this.defaults.data)},resize:function(){clearTimeout(this.resizing),this.resizing=setTimeout(t.proxy(this.update,this,this.getData()),200)},preview:function(){var i=this.image,e=this.dragger,h=i.width,a=i.height,s=e.left-i.left,r=e.top-i.top;this.$viewer.find("img").css({width:M(h),height:M(a),marginLeft:-M(s),marginTop:-M(r)}),this.$preview.each(function(){var i=t(this),n=i.width()/e.width;i.find("img").css({width:M(h*n),height:M(a*n),marginLeft:-M(s*n),marginTop:-M(r*n)})})},addListeners:function(){var e=this.defaults;this.$element.on(z,e.dragstart).on(L,e.dragmove).on(Y,e.dragend),this.$cropper.on(y,this._dragstart=t.proxy(this.dragstart,this)).on(C,this._dblclick=t.proxy(this.dblclick,this)),e.zoomable&&this.$cropper.on(W,this._wheel=t.proxy(this.wheel,this)),this.$scope.on($,this._dragmove=t.proxy(this.dragmove,this)).on(D,this._dragend=t.proxy(this.dragend,this)),i.on(H,this._resize=t.proxy(this.resize,this))},removeListeners:function(){var t=this.defaults;this.$element.off(z,t.dragstart).off(L,t.dragmove).off(Y,t.dragend),this.$cropper.off(y,this._dragstart).off(C,this._dblclick),t.zoomable&&this.$cropper.off(W,this._wheel),this.$scope.off($,this._dragmove).off(D,this._dragend),i.off(H,this._resize)},initPreview:function(){var i='<img src="'+this.url+'">';this.$preview=t(this.defaults.preview),this.$viewer.html(i),this.$preview.html(i).find("img").css("cssText","min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;")},initContainer:function(){var t=this.$container;this.container={width:E(t.width(),300),height:E(t.height(),150)}},initCropper:function(){var t,i=this.container,e=this.image;e.naturalWidth*i.height/e.naturalHeight-i.width>=0?(t={width:i.width,height:i.width/e.aspectRatio,left:0},t.top=(i.height-t.height)/2):(t={width:i.height*e.aspectRatio,height:i.height,top:0},t.left=(i.width-t.width)/2),this.$cropper.css({width:M(t.width),height:M(t.height),left:M(t.left),top:M(t.top)}),this.cropper=t},initImage:function(){var i=this.image,e=this.cropper,h={_width:e.width,_height:e.height,width:e.width,height:e.height,left:0,top:0,ratio:e.width/i.naturalWidth};this.defaultImage=t.extend({},i,h),i._width!==e.width||i._height!==e.height?t.extend(i,h):(i=t.extend({},h,i),this.replaced&&(this.replaced=s,i.ratio=h.ratio)),this.image=i,this.renderImage()},renderImage:function(t){var i=this.image;"zoom"===t&&(i.left-=(i.width-i.oldWidth)/2,i.top-=(i.height-i.oldHeight)/2),i.left=I(E(i.left,i._width-i.width),0),i.top=I(E(i.top,i._height-i.height),0),this.$clone.css({width:M(i.width),height:M(i.height),marginLeft:M(i.left),marginTop:M(i.top)}),t&&(this.defaults.done(this.getData()),this.preview())},initDragger:function(){var i,e=this.defaults,h=this.cropper,a=e.aspectRatio||this.image.aspectRatio,s=this.image.ratio;i=h.height*a-h.width>=0?{height:h.width/a,width:h.width,left:0,top:(h.height-h.width/a)/2,maxWidth:h.width,maxHeight:h.width/a}:{height:h.height,width:h.height*a,left:(h.width-h.height*a)/2,top:0,maxWidth:h.height*a,maxHeight:h.height},i.minWidth=0,i.minHeight=0,e.aspectRatio?(isFinite(e.maxWidth)?(i.maxWidth=I(i.maxWidth,e.maxWidth*s),i.maxHeight=i.maxWidth/a):isFinite(e.maxHeight)&&(i.maxHeight=I(i.maxHeight,e.maxHeight*s),i.maxWidth=i.maxHeight*a),e.minWidth>0?(i.minWidth=E(0,e.minWidth*s),i.minHeight=i.minWidth/a):e.minHeight>0&&(i.minHeight=E(0,e.minHeight*s),i.minWidth=i.minHeight*a)):(i.maxWidth=I(i.maxWidth,e.maxWidth*s),i.maxHeight=I(i.maxHeight,e.maxHeight*s),i.minWidth=E(0,e.minWidth*s),i.minHeight=E(0,e.minHeight*s)),i.minWidth=I(i.maxWidth,i.minWidth),i.minHeight=I(i.maxHeight,i.minHeight),i.height*=e.autoCropArea,i.width*=e.autoCropArea,i.left=(h.width-i.width)/2,i.top=(h.height-i.height)/2,i.oldLeft=i.left,i.oldTop=i.top,this.defaultDragger=i,this.dragger=t.extend({},i)},renderDragger:function(){var t=this.dragger,i=this.cropper;t.width>t.maxWidth?(t.width=t.maxWidth,t.left=t.oldLeft):t.width<t.minWidth&&(t.width=t.minWidth,t.left=t.oldLeft),t.height>t.maxHeight?(t.height=t.maxHeight,t.top=t.oldTop):t.height<t.minHeight&&(t.height=t.minHeight,t.top=t.oldTop),t.left=I(E(t.left,0),i.width-t.width),t.top=I(E(t.top,0),i.height-t.height),t.oldLeft=t.left,t.oldTop=t.top,this.dragger=t,this.disabled||this.defaults.done(this.getData()),this.$dragger.css({width:M(t.width),height:M(t.height),left:M(t.left),top:M(t.top)}),this.preview()},reset:function(i){this.cropped&&(i&&(this.defaults.data={}),this.image=t.extend({},this.defaultImage),this.renderImage(),this.dragger=t.extend({},this.defaultDragger),this.setData(this.defaults.data))},clear:function(){this.cropped&&(this.cropped=s,this.setData({x:0,y:0,width:0,height:0}),this.$canvas.removeClass(m),this.$dragger.addClass(u))},destroy:function(){var t=this.$element;this.ready&&(this.unbuild(),t.removeClass(u).removeData("cropper"),this.rotated&&t.attr("src",this.$original.attr("src")))},replace:function(i,e){var h,r=this,n=this.$element,o=this.element;i&&i!==this.url&&i!==n.attr("src")&&(e||(this.rotated=s,this.replaced=a),n.is("img")?(n.attr("src",i),this.load()):n.is("canvas")&&this.support.canvas&&(h=o.getContext("2d"),t('<img src="'+i+'">').one("load",function(){o.width=this.width,o.height=this.height,h.clearRect(0,0,o.width,o.height),h.drawImage(this,0,0),r.load()})))},setData:function(i,e){var h=this.cropper,a=this.dragger,s=this.image,n=this.defaults.aspectRatio;this.built&&typeof i!==d&&((i===r||t.isEmptyObject(i))&&(a=t.extend({},this.defaultDragger)),t.isPlainObject(i)&&!t.isEmptyObject(i)&&(e||(this.defaults.data=i),i=this.transformData(i),X(i.x)&&i.x<=h.width-s.left&&(a.left=i.x+s.left),X(i.y)&&i.y<=h.height-s.top&&(a.top=i.y+s.top),n?X(i.width)&&i.width<=a.maxWidth&&i.width>=a.minWidth?(a.width=i.width,a.height=a.width/n):X(i.height)&&i.height<=a.maxHeight&&i.height>=a.minHeight&&(a.height=i.height,a.width=a.height*n):(X(i.width)&&i.width<=a.maxWidth&&i.width>=a.minWidth&&(a.width=i.width),X(i.height)&&i.height<=a.maxHeight&&i.height>=a.minHeight&&(a.height=i.height))),this.dragger=a,this.renderDragger())},getData:function(){var t=this.dragger,i=this.image,e={};return this.built&&(e={x:t.left-i.left,y:t.top-i.top,width:t.width,height:t.height},e=this.transformData(e,a)),e},transformData:function(i,e){var h=this.image.ratio,a={};return t.each(i,function(t,i){i=j(i),p.test(t)&&!isNaN(i)&&(a[t]=e?M(i/h):i*h)}),a},setAspectRatio:function(t){var i="auto"===t;t=j(t),(i||!isNaN(t)&&t>0)&&(this.defaults.aspectRatio=i?n:t,this.built&&(this.initDragger(),this.renderDragger()))},getImageData:function(){var i={};return this.ready&&t.each(this.image,function(t,e){f.test(t)&&(i[t]=e)}),i},getDataURL:function(i,e,h){var a,s=t("<canvas>")[0],r=this.getData(),n="";return t.isPlainObject(i)||(h=e,e=i,i={}),i=t.extend({width:r.width,height:r.height},i),this.cropped&&this.support.canvas&&(s.width=i.width,s.height=i.height,a=s.getContext("2d"),"image/jpeg"===e&&(a.fillStyle="#fff",a.fillRect(0,0,i.width,i.height)),a.drawImage(this.$clone[0],r.x,r.y,r.width,r.height,0,0,i.width,i.height),n=s.toDataURL(e,h)),n},setDragMode:function(t){var i=this.$canvas,e=this.defaults,h=s,r=s;if(this.built&&!this.disabled){switch(t){case"crop":e.dragCrop&&(h=a,i.data(g,t));break;case"move":r=a,i.data(g,t);break;default:i.removeData(g)}i.toggleClass(x,h).toggleClass(v,r)}},enable:function(){this.built&&(this.disabled=s,this.$cropper.removeClass(b))},disable:function(){this.built&&(this.disabled=a,this.$cropper.addClass(b))},rotate:function(t){var i=this.image;t=j(t)||0,this.built&&0!==t&&!this.disabled&&this.defaults.rotatable&&this.support.canvas&&(this.rotated=a,t=i.rotate=(i.rotate+t)%360,this.replace(this.getRotatedDataURL(t),!0))},getRotatedDataURL:function(i){var e=t("<canvas>")[0],h=e.getContext("2d"),a=i*Math.PI/180,s=P(i)%180,r=s>90?180-s:s,n=r*Math.PI/180,o=this.originalImage,d=o.naturalWidth,g=o.naturalHeight,l=P(d*U(n)+g*O(n)),c=P(d*O(n)+g*U(n));return e.width=l,e.height=c,h.save(),h.translate(l/2,c/2),h.rotate(a),h.drawImage(this.$original[0],-d/2,-g/2,d,g),h.restore(),e.toDataURL()},zoom:function(t){var i,e,h,a=this.image;t=j(t),this.built&&t&&!this.disabled&&this.defaults.zoomable&&(i=a.width*(1+t),e=a.height*(1+t),h=i/a._width,h>10||(1>h&&(i=a._width,e=a._height),1>=h?this.setDragMode("crop"):this.setDragMode("move"),a.oldWidth=a.width,a.oldHeight=a.height,a.width=i,a.height=e,a.ratio=a.width/a.naturalWidth,this.renderImage("zoom")))},dblclick:function(){this.disabled||(this.$canvas.hasClass(x)?this.setDragMode("move"):this.setDragMode("crop"))},wheel:function(t){var i,e=t.originalEvent,h=117.25,a=5,s=166.66665649414062,r=.1;this.disabled||(t.preventDefault(),e.deltaY?(i=e.deltaY,i=i%a===0?i/a:i%h===0?i/h:i/s):i=e.wheelDelta?-e.wheelDelta/120:e.detail?e.detail/3:0,this.zoom(i*r))},dragstart:function(i){var e,h,r,n=i.originalEvent.touches,o=i;if(!this.disabled){if(n){if(r=n.length,r>1){if(!this.defaults.zoomable||2!==r)return;o=n[1],this.startX2=o.pageX,this.startY2=o.pageY,e="zoom"}o=n[0]}if(e=e||t(o.target).data(g),c.test(e)){if(i.preventDefault(),h=t.Event(z),this.$element.trigger(h),h.isDefaultPrevented())return;this.directive=e,this.cropping=s,this.startX=o.pageX,this.startY=o.pageY,"crop"===e&&(this.cropping=a,this.$canvas.addClass(m))}}},dragmove:function(i){var e,h,a=i.originalEvent.touches,s=i;if(!this.disabled){if(a){if(h=a.length,h>1){if(!this.defaults.zoomable||2!==h)return;s=a[1],this.endX2=s.pageX,this.endY2=s.pageY}s=a[0]}if(this.directive){if(i.preventDefault(),e=t.Event(L),this.$element.trigger(e),e.isDefaultPrevented())return;this.endX=s.pageX,this.endY=s.pageY,this.dragging()}}},dragend:function(i){var e;if(!this.disabled&&this.directive){if(i.preventDefault(),e=t.Event(Y),this.$element.trigger(e),e.isDefaultPrevented())return;this.cropping&&(this.cropping=s,this.$canvas.toggleClass(m,this.cropped&&this.defaults.modal)),this.directive=""}},dragging:function(){var t,i=this.directive,e=this.image,h=this.cropper,r=h.width,n=h.height,o=this.dragger,d=o.width,g=o.height,l=o.left,c=o.top,p=l+d,f=c+g,m=a,w=this.defaults,v=w.aspectRatio,x={x:this.endX-this.startX,y:this.endY-this.startY};switch(v&&(x.X=x.y*v,x.Y=x.x/v),i){case"all":l+=x.x,c+=x.y;break;case"e":if(x.x>=0&&(p>=r||v&&(0>=c||f>=n))){m=s;break}d+=x.x,v&&(g=d/v,c-=x.Y/2),0>d&&(i="w",d=0);break;case"n":if(x.y<=0&&(0>=c||v&&(0>=l||p>=r))){m=s;break}g-=x.y,c+=x.y,v&&(d=g*v,l+=x.X/2),0>g&&(i="s",g=0);break;case"w":if(x.x<=0&&(0>=l||v&&(0>=c||f>=n))){m=s;break}d-=x.x,l+=x.x,v&&(g=d/v,c+=x.Y/2),0>d&&(i="e",d=0);break;case"s":if(x.y>=0&&(f>=n||v&&(0>=l||p>=r))){m=s;break}g+=x.y,v&&(d=g*v,l-=x.X/2),0>g&&(i="n",g=0);break;case"ne":if(v){if(x.y<=0&&(0>=c||p>=r)){m=s;break}g-=x.y,c+=x.y,d=g*v}else x.x>=0?r>p?d+=x.x:x.y<=0&&0>=c&&(m=s):d+=x.x,x.y<=0?c>0&&(g-=x.y,c+=x.y):(g-=x.y,c+=x.y);0>g&&(i="sw",g=0,d=0);break;case"nw":if(v){if(x.y<=0&&(0>=c||0>=l)){m=s;break}g-=x.y,c+=x.y,d=g*v,l+=x.X}else x.x<=0?l>0?(d-=x.x,l+=x.x):x.y<=0&&0>=c&&(m=s):(d-=x.x,l+=x.x),x.y<=0?c>0&&(g-=x.y,c+=x.y):(g-=x.y,c+=x.y);0>g&&(i="se",g=0,d=0);break;case"sw":if(v){if(x.x<=0&&(0>=l||f>=n)){m=s;break}d-=x.x,l+=x.x,g=d/v}else x.x<=0?l>0?(d-=x.x,l+=x.x):x.y>=0&&f>=n&&(m=s):(d-=x.x,l+=x.x),x.y>=0?n>f&&(g+=x.y):g+=x.y;0>d&&(i="ne",g=0,d=0);break;case"se":if(v){if(x.x>=0&&(p>=r||f>=n)){m=s;break}d+=x.x,g=d/v}else x.x>=0?r>p?d+=x.x:x.y>=0&&f>=n&&(m=s):d+=x.x,x.y>=0?n>f&&(g+=x.y):g+=x.y;0>d&&(i="nw",g=0,d=0);break;case"move":e.left+=x.x,e.top+=x.y,this.renderImage("move"),m=s;break;case"zoom":w.zoomable&&(this.zoom(function(t,i,e,h,a,s){return(T(a*a+s*s)-T(e*e+h*h))/T(t*t+i*i)}(e.width,e.height,P(this.startX-this.startX2),P(this.startY-this.startY2),P(this.endX-this.endX2),P(this.endY-this.endY2))),this.endX2=this.startX2,this.endY2=this.startY2);break;case"crop":x.x&&x.y&&(t=this.$cropper.offset(),l=this.startX-t.left,c=this.startY-t.top,d=o.minWidth,g=o.minHeight,x.x>0?x.y>0?i="se":(i="ne",c-=g):x.y>0?(i="sw",l-=d):(i="nw",l-=d,c-=g),this.cropped||(this.cropped=a,this.$dragger.removeClass(u)))}m&&(o.width=d,o.height=g,o.left=l,o.top=c,this.directive=i,null!=w.changeZone&&w.changeZone(o,h),this.renderDragger()),this.startX=this.endX,this.startY=this.endY}},_.TEMPLATE=function(t,i){return i=i.split(","),t.replace(/\d+/g,function(t){return i[t]})}('<0 6="5-container"><0 6="5-canvas"></0><0 6="5-dragger"><1 6="5-viewer"></1><1 6="5-8 8-h"></1><1 6="5-8 8-v"></1><1 6="5-face" 3-2="all"></1><1 6="5-7 7-e" 3-2="e"></1><1 6="5-7 7-n" 3-2="n"></1><1 6="5-7 7-w" 3-2="w"></1><1 6="5-7 7-s" 3-2="s"></1><1 6="5-4 4-e" 3-2="e"></1><1 6="5-4 4-n" 3-2="n"></1><1 6="5-4 4-w" 3-2="w"></1><1 6="5-4 4-s" 3-2="s"></1><1 6="5-4 4-ne" 3-2="ne"></1><1 6="5-4 4-nw" 3-2="nw"></1><1 6="5-4 4-sw" 3-2="sw"></1><1 6="5-4 4-se" 3-2="se"></1></0></0>',"div,span,directive,data,point,cropper,class,line,dashed"),_.DEFAULTS={aspectRatio:"auto",autoCropArea:.8,data:{},done:t.noop,preview:"",multiple:s,autoCrop:a,dragCrop:a,dashed:a,modal:a,movable:a,resizable:a,zoomable:a,rotatable:a,checkImageOrigin:a,minWidth:0,minHeight:0,maxWidth:o,maxHeight:o,build:r,built:r,dragstart:r,dragmove:r,dragend:r,changeZone:r},_.setDefaults=function(i){t.extend(_.DEFAULTS,i)},_.other=t.fn.cropper,t.fn.cropper=function(i){var e,h=[].slice.call(arguments,1);return this.each(function(){var a,s=t(this),r=s.data("cropper");r||s.data("cropper",r=new _(this,i)),"string"==typeof i&&t.isFunction(a=r[i])&&(e=a.apply(r,h))}),typeof e!==d?e:this},t.fn.cropper.Constructor=_,t.fn.cropper.setDefaults=_.setDefaults,t.fn.cropper.noConflict=function(){return t.fn.cropper=_.other,this}});
//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map

//# sourceMappingURL=cropper.js.map
