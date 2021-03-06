!function(){"use strict";function t(a){this.options=i({},t.DEFAULTS,a)}function i(t){for(var i=1,a=arguments.length;a>i;i++){var e=arguments[i];if(e)for(var r in e)t[r]=e[r]}return t}function a(t){return t=16*((t-1/3+1)%2*.5-.5),Math.max(1-t*t,0)}function e(t,i,a){return.5126*a+.7152*i+.0722*t}function r(t,i){return e(t[i],t[i+1],t[i+2])}function h(t,i,a){var e=o(t/255,i/255,a/255),r=n(t/255,i/255,a/255);if(e===r)return 0;var h=(e+r)/2,s=e-r;return h>.5?s/(2-e-r):s/(e+r)}t.DEFAULTS={width:0,height:0,aspect:0,cropWidth:0,cropHeight:0,detailWeight:.2,skinColor:[.78,.57,.44],skinBias:.01,skinBrightnessMin:.2,skinBrightnessMax:1,skinThreshold:.8,skinWeight:1.8,saturationBrightnessMin:.05,saturationBrightnessMax:.9,saturationThreshold:.4,saturationBias:.2,saturationWeight:.3,scoreDownSample:8,step:8,scaleStep:.1,minScale:.9,maxScale:1,edgeRadius:.4,edgeWeight:-20,outsideImportance:-.5,ruleOfThirds:!0,prescale:!0,canvasFactory:null,debug:!1},t.crop=function(i,a,e){if(a.aspect&&(a.width=a.aspect,a.height=1),i.naturalWidth&&(i.naturalWidth!=i.width||i.naturalHeight!=i.height)){var r=new t(a).canvas(i.naturalWidth,i.naturalHeight),h=r.getContext("2d");r.width=i.naturalWidth,r.height=i.naturalHeight,h.drawImage(i,0,0),i=r}var s=1,d=1;a.width&&a.height&&(s=n(i.width/a.width,i.height/a.height),a.cropWidth=~~(a.width*s),a.cropHeight=~~(a.height*s),a.minScale=n(a.maxScale||t.DEFAULTS.maxScale,o(1/s,a.minScale||t.DEFAULTS.minScale)));var c=new t(a);if(a.width&&a.height&&a.prescale!==!1)if(d=1/s/a.minScale,1>d){var g=c.canvas(i.width*d,i.height*d),u=g.getContext("2d");u.drawImage(i,0,0,i.width,i.height,0,0,g.width,g.height),i=g,c.options.cropWidth=~~(a.cropWidth*d),c.options.cropHeight=~~(a.cropHeight*d)}else d=1;for(var l=c.analyse(i),p=0,f=l.crops.length;f>p;p++){var v=l.crops[p];v.x=~~(v.x/d),v.y=~~(v.y/d),v.width=~~(v.width/d),v.height=~~(v.height/d)}return e(l),l},t.isAvailable=function(t){try{var i=new this(t),a=i.canvas(16,16);return"function"==typeof a.getContext}catch(e){return!1}},t.prototype={canvas:function(t,i){if(null!==this.options.canvasFactory)return this.options.canvasFactory(t,i);var a=document.createElement("canvas");return a.width=t,a.height=i,a},edgeDetect:function(t,i){for(var a=t.data,e=i.data,h=t.width,n=t.height,o=0;n>o;o++)for(var s=0;h>s;s++){var d,c=4*(o*h+s);d=0===s||s>=h-1||0===o||o>=n-1?r(a,c):4*r(a,c)-r(a,c-4*h)-r(a,c-4)-r(a,c+4)-r(a,c+4*h),e[c+1]=d}},skinDetect:function(t,i){for(var a=t.data,r=i.data,h=t.width,n=t.height,o=this.options,s=0;n>s;s++)for(var d=0;h>d;d++){var c=4*(s*h+d),g=e(a[c],a[c+1],a[c+2])/255,u=this.skinColor(a[c],a[c+1],a[c+2]);u>o.skinThreshold&&g>=o.skinBrightnessMin&&g<=o.skinBrightnessMax?r[c]=(u-o.skinThreshold)*(255/(1-o.skinThreshold)):r[c]=0}},saturationDetect:function(t,i){for(var a=t.data,r=i.data,n=t.width,o=t.height,s=this.options,d=0;o>d;d++)for(var c=0;n>c;c++){var g=4*(d*n+c),u=e(a[g],a[g+1],a[g+2])/255,l=h(a[g],a[g+1],a[g+2]);l>s.saturationThreshold&&u>=s.saturationBrightnessMin&&u<=s.saturationBrightnessMax?r[g+2]=(l-s.saturationThreshold)*(255/(1-s.saturationThreshold)):r[g+2]=0}},crops:function(t){for(var i=[],a=t.width,e=t.height,r=this.options,h=n(a,e),o=r.cropWidth||h,s=r.cropHeight||h,d=r.maxScale;d>=r.minScale;d-=r.scaleStep)for(var c=0;e>=c+s*d;c+=r.step)for(var g=0;a>=g+o*d;g+=r.step)i.push({x:g,y:c,width:o*d,height:s*d});return i},score:function(t,i){for(var a={detail:0,saturation:0,skin:0,total:0},e=this.options,r=t.data,h=e.scoreDownSample,n=1/h,o=t.height*h,s=t.width*h,d=t.width,c=0;o>c;c+=h)for(var g=0;s>g;g+=h){var u=4*(~~(c*n)*d+~~(g*n)),l=this.importance(i,g,c),p=r[u+1]/255;a.skin+=r[u]/255*(p+e.skinBias)*l,a.detail+=p*l,a.saturation+=r[u+2]/255*(p+e.saturationBias)*l}return a.total=(a.detail*e.detailWeight+a.skin*e.skinWeight+a.saturation*e.saturationWeight)/i.width/i.height,a},importance:function(t,i,e){var r=this.options;if(t.x>i||i>=t.x+t.width||t.y>e||e>=t.y+t.height)return r.outsideImportance;i=(i-t.x)/t.width,e=(e-t.y)/t.height;var h=2*s(.5-i),n=2*s(.5-e),o=Math.max(h-1+r.edgeRadius,0),d=Math.max(n-1+r.edgeRadius,0),g=(o*o+d*d)*r.edgeWeight,u=1.41-c(h*h+n*n);return r.ruleOfThirds&&(u+=1.2*Math.max(0,u+g+.5)*(a(h)+a(n))),u+g},skinColor:function(t,i,a){var e=c(t*t+i*i+a*a),r=this.options,h=t/e-r.skinColor[0],n=i/e-r.skinColor[1],o=a/e-r.skinColor[2],s=c(h*h+n*n+o*o);return 1-s},analyse:function(t){var i={},a=this.options,e=this.canvas(t.width,t.height),r=e.getContext("2d");r.drawImage(t,0,0);var h=r.getImageData(0,0,e.width,e.height),n=r.getImageData(0,0,e.width,e.height);this.edgeDetect(h,n),this.skinDetect(h,n),this.saturationDetect(h,n);var o=this.canvas(d(t.width/a.scoreDownSample),d(t.height/a.scoreDownSample)),s=o.getContext("2d");r.putImageData(n,0,0),s.drawImage(e,0,0,e.width,e.height,0,0,o.width,o.height);for(var c=s.getImageData(0,0,o.width,o.height),g=-(1/0),u=null,l=this.crops(t),p=0,f=l.length;f>p;p++){var v=l[p];v.score=this.score(c,v),v.score.total>g&&(u=v,g=v.score.total)}if(i.crops=l,i.topCrop=u,a.debug&&u){r.fillStyle="rgba(255, 0, 0, 0.1)",r.fillRect(u.x,u.y,u.width,u.height);for(var w=0;w<n.height;w++)for(var m=0;m<n.width;m++){var x=4*(w*n.width+m),k=this.importance(u,m,w);k>0&&(n.data[x+1]+=32*k),0>k&&(n.data[x]+=-64*k),n.data[x+3]=255}r.putImageData(n,0,0),r.strokeStyle="rgba(255, 0, 0, 0.8)",r.strokeRect(u.x,u.y,u.width,u.height),i.debugCanvas=e}return i}};var n=Math.min,o=Math.max,s=Math.abs,d=Math.ceil,c=Math.sqrt;"undefined"!=typeof define&&define.amd&&define(function(){return t}),"undefined"!=typeof exports?exports.SmartCrop=t:"undefined"!=typeof navigator&&(window.SmartCrop=t),"undefined"!=typeof module&&(module.exports=t)}();
//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map

//# sourceMappingURL=smartcrop.js.map
