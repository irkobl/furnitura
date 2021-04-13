"use strict";var _Mathround=Math.round;!function(){var i=function(){return function(i,e){function t(i,e){var t=e.zoom,n=e.grayscale,r=e.blur,d=i.find(".js-background-video"),a=o(i,t),c=a.width,u=a.height,s=a.left,l=a.top;d.css({position:"relative",height:"100%",width:"100%","pointer-events":"none",filter:"grayscale("+n+") blur("+r+"px)"}),d.find("iframe").css({width:c+"px",height:u+"px",left:"-"+s+"px",top:"-"+l+"px"})}function o(i,e){var t=e/100,o=i[0].clientHeight,n=i[0].clientWidth,r=void 0,d=void 0;n>o?(d=_Mathround(9*n/16*t),o>d&&(d=o*t),r=_Mathround(16*d/9)):(r=_Mathround(16*o/9*t),n>r&&(r=n*t),d=_Mathround(9*r/16));var a=(r-n)/2,c=(d-o)/2;return{width:r,height:d,left:a,top:c}}function n(){var t="desktop";if(window.constructorMode)t=e.constructor.deviceMode.device;else{var o=i("#body").width(),n=768;991>o&&o>=n?t="tablet":n>o&&(t="phone")}return t}this.block={},this.device="desktop",this.editMode=!1,this.initPublish=function(){this.device=n(),this.renderPublish(),this.addListeners()},this.initConstructor=function(i,e){if(!e)return void console.error("videoSettings missing");var t=i.closest(".ul-container"),o=t.attr("id"),r=n(),d=this.block[o],a=d?d.timer:null;clearTimeout(a),this.block[o]={id:o,videoSettings:e},this.renderVideo(i,e[r]||e)},this.renderPublish=function(){var t=this;i(".ul-container","#body-fict").each(function(){var o=i(this),n=o.attr("id"),r=o.attr("data-bgtype");if(e.params.backgroundParams&&e.params.backgroundParams[n]&&e.params.backgroundParams[n][t.device]&&(r=e.params.backgroundParams[n][t.device].bgtype),"video"!==r)return i(".ul-background-block-video-thumbnail",o).hide(),void i(".js-background-video",o).empty();i(".ul-background-block-video-thumbnail",o).show();var d=null;try{d=JSON.parse(o.attr("data-video-settings"))}catch(a){return void console.error("video settings JSON parse failed")}t.block[n]={id:n,videoSettings:d},t.renderVideo(o.find(".ul-background-video-container"),d[t.device])})},this.updateVideoStyles=t,this.renderVideo=function(e,o){var n=this,r=o.provider,d=e.siblings(".ul-background-block-video-thumbnail");e.empty();var a=i('<div class="ul-background-block-video js-background-video" ></div>');e.eq(0).append(a),d.css({"background-image":"url("+o.thumbnail+")"}),d.removeClass("ul-background-block-video-thumbnail--hidden"),require(["video-helper/"+r],function(i){i({$el:a,videoSettings:o,updateVideoStyles:t,hideVideo:n.hideVideo.bind(n,e.parent())})})},this.hideVideo=function(i){var e=this,t=i.find(".ul-background-block-video-thumbnail");t.addClass("ul-background-block-video-thumbnail--hidden"),clearTimeout(this.block.timer),!window.constructorMode||this.editMode||(this.block.timer=setTimeout(function(){e.editMode||t.removeClass("ul-background-block-video-thumbnail--hidden")},5e3))},this.addListeners=function(){var e=this;i(window).on("resize.constructor",function(){r.call(e)})};var r=e.limiter(function(){var e=this,t=n();return window.constructorMode||t===this.device?void i(".ul-container").each(function(n,r){var d=i(r).find(".js-background-video iframe");if(d.length){var a=e.block[r.id].videoSettings[t]||e.block[r.id].videoSettings,c=a.zoom,u=o(i(r),c);d.css({width:u.width+"px",height:u.height+"px",left:"-"+u.left+"px",top:"-"+u.top+"px"})}}):(this.device=t,void this.renderPublish(this.block,t))},100)}}();if(window.constructorMode)define("backgroundBlockVideo",["jquery","U"],function(e,t){return new i(e,t)});else{var e=function(){return function(){require(["jquery","U"],function(e,t){var o=new i(e,t);o.initPublish()})}}();"function"==typeof window.requireFullConfOnce?window.requireFullConfOnce(function(){e()}):e()}}();
//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map

//# sourceMappingURL=backgroundBlockVideo.js.map
