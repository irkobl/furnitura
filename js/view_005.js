"use strict";var _extends=Object.assign||function(e){for(var i,t=1;t<arguments.length;t++)for(var l in i=arguments[t])Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);return e};define("widget-gallery-view",[],function(){var e={name:"gallery-view",options:{},opened:!1,slidersOptions:{},init:function(){return function(){window.constructorMode||!window.MSInputMethodContext||!document.documentMode||("function"==typeof window.requireFullConfOnce?window.requireFullConfOnce(function(){require(["js/lib/picturefill.min.js"])}):require(["js/lib/picturefill.min.js"]))}}(),openImgWithLightBox:function(){return function(e){require(["jquery"],function(i){var t=i(e);if(t.data("src")){var l=[],o=t.data("i")||0;i.each(t.closest(".ul-widget-gallery").find(".ul-w-gallery-item"),function(e){var t=i(this).closest(".ul-widget-gallery").find('.ul-w-gallery-item[data-i="'+e+'"]');l.push({src:t.data("src"),title:t.find(".caption").text()})});var n=t.closest(".ul-widget-gallery").attr("data-view");"slideshow"!==n&&require(["lightbox"],function(e){e.show({slide:!0,start:o,srcList:l,title:void 0===t.data("title")?t.closest(".ul-w-gallery-item").data("title"):t.parent().find(".caption").text(),i18n:window.cache.gallery&&window.cache.gallery.i18n})})}})}}(),resizeCols:function(){return function(){for(var e=document.querySelectorAll(".ul-widget-gallery .ul-w-gallery-grid-wrap"),i=0;i<e.length;i++)for(var t,l=e[i],o=l.querySelectorAll(".ul-w-gallery-item"),n=this.calcAverageImagesHeigh(o),r=0;r<o.length;r++)t=o[r],t.style.height=n+"px"}}(),calcAverageImagesHeigh:function(){return function(e){if(!e)return 0;var i=Array.prototype.reduce.call(e,function(e,i){return e+=i.offsetWidth},0);return Math.round(i/e.length)}}(),_responseCarousel:function(){return function(e){var i=e.closest(".ul-widget").attr("id");void 0==e?$("#ul-type-slider").each(function(){$(this).data("owlCarousel").reinit(),"previews"==this.slidersOptions[i].slideshow.controls||e.data("edit")||this.hidePreview(e)}):(e.data("owlCarousel").reinit(),"previews"!=this.slidersOptions[i].slideshow.controls&&!e.data("edit")&&this.hidePreview(e))}}(),open:function(){return function(e){var i=this,t={},l=document.getElementById(e);if(!l)return console.log("not exist widget with id: "+e),!1;var o=l.getAttribute("data-view"),n=l.querySelector(".ul-w-gallery-grid-wrap");n&&n.classList.add("ul-loading-indicator");var r=l.querySelectorAll(".ul-w-gallery-item"),a=this.openImgWithLightBox,s=this.initHorizontalCollage,c=this._setOwlCarousel;"function"==typeof window.requireFullConfOnce&&(a=function(){return function(e){window.requireFullConfOnce(function(){i.openImgWithLightBox(e)})}}(),s=function(){return function(e,t){window.requireFullConfOnce(function(){i.initHorizontalCollage(e,t)})}}(),c=function(){return function(e){window.requireFullConfOnce(function(){i._setOwlCarousel(e)})}}());for(var u=function(){return function(e){var i=r[e];i.addEventListener("click",function(e){var t=e.target.classList;t.contains("ul-widget-gallery-slider-img-edit")||t.contains("ul-widget-gallery-slider-img-remove")||a(i)})}}(),d=0;d<r.length;d++)u(d);window.onresize=function(){i.resizeCols()},this.resizeCols(),this.opened||(this.init(),this.opened=!0);var w={};try{var d=document.getElementById(e+"-options");w=JSON.parse(d.getAttribute("data-options"))}catch(d){return console.log("Error on JSON.parse",d),!1}"slideshow"===o?(t[e]=w,this.slidersOptions=_extends({},this.slidersOptions,t),c(l)):"grid"===o&&n?n.classList.remove("ul-loading-indicator"):"collage"===o?"horizontal"===w.collage.orientation&&s(l,w):console.log("error")}}(),initHorizontalCollage:function(){return function(e,i){require(["jquery","justifiedGallery"],function(t){var l="under"===i.collage.imgTitleEffect,o=t(e).find(".ul-w-gallery-collage-wrap-horizontal"),n=function(){return function(e){return 1200<=e.width()?e.width()/7:992<=e.width()?e.width()/6:768<=e.width()?e.width()/5:e.width()/4}}();o.justifiedGallery({rowHeight:n(o),lastRow:"justify",margins:{x:10,y:"under"==l?40:10},sizeRangeSuffixes:{lt100:"",lt240:"",lt320:"",lt500:"",lt640:"",lt1024:""},captions:i.collage.imgTitleShow,captionSettings:{animationDuration:500,visibleOpacity:l?1:.7,nonVisibleOpacity:l?1:0}}).on("jg.beforeResize",function(e,i){i.settings.rowHeight=n(i.$gallery)}).on("jg.complete",function(){o.find(".ul-w-gallery-item .caption").addClass("note")})})}}(),_setOwlCarousel:function(){return function(e){var i=this;require(["jquery","owlEdit"],function(t){var l=t(e),o=l.attr("id"),n=i.slidersOptions[o],r=function(){return function(){var e=0;t(".owl-page",l).each(function(i,l){e+=t(l).outerWidth(!0)}),t(".owl-pagination",l).width(e),"previews"!==n.slideshow.controls||setTimeout(function(){t(".owl-wrapper-outer",l).children(".ul-nav-gallary-slider").css("display","none")},100)}}(),a=function(){return function(e){var o=this;t(".control-panel",l).show(),r(e,this);var a=1*t("#ul-type-slider",l).data("slidestart");l.data("edit")&&l.children("#ul-type-slider").trigger("owl.jumpTo",a),t(".owl-page",l).eq(a).addClass("active"),t(".gallery-slide-thumb-left",l).click(function(){var e=parseInt(t(".owl-pagination",l).css("margin-left"));t(".owl-pagination",l).animate({marginLeft:0>=e+t(".ul-owl-controls",l).width()?e+t(".ul-owl-controls",l).width():0},200)}),t(".gallery-slide-thumb-right",l).click(function(){var e=parseInt(t(".owl-pagination",l).css("margin-left")),i=t(".ul-owl-controls",l).width()+-1*e>=t(".owl-pagination",l).width()?e:-1*t(".ul-owl-controls",l).width()+e+168;t(".owl-pagination",l).animate({marginLeft:i},200)}),t(".ul-nav-gallary-slider",l).length||"arrows"!=n.slideshow.controls||(t(".owl-wrapper-outer",l).append('<a  class="prev-owl ul-nav-gallary-slider"/>'),t(".owl-wrapper-outer",l).append('<a  class="next-owl ul-nav-gallary-slider"/>')),t(".next-owl",l).click(function(){e.trigger("owl.next"),t(".owl-page",l).removeClass("active"),t(".owl-page",l).eq(o.owl.visibleItems[0]).addClass("active");var i=t(".owl-page",l).eq(o.owl.visibleItems[0]).position(),n=t(".owl-page",l).eq(o.owl.visibleItems[0]).width();i.left+n>t(".ul-owl-controls",l).width()&&t(".gallery-slide-thumb-right",l).trigger("click")}),t(".prev-owl",l).click(function(){e.trigger("owl.prev"),t(".owl-page",l).removeClass("active"),t(".owl-page",l).eq(o.owl.visibleItems[0]).addClass("active");var i=t(".owl-page",l).eq(o.owl.visibleItems[0]).position(),n=t(".owl-page",l).eq(o.owl.visibleItems[0]).width();0>i.left+n&&t(".gallery-slide-thumb-left",l).trigger("click")}),t(".owl-page",l).click(function(){t(".active",t(this).parent()).removeClass("active"),t(this).addClass("active"),l.children("#ul-type-slider").data("owlCarousel").goTo(t(this).index())}),"previews"===n.slideshow.controls||l.data("edit")||i.hidePreview(l),t.each(t(".ul-w-gallery-item",l),function(){t(this).hasClass("active")?t(".ul-previer-slider",t(this)).css({opacity:1}):t(".ul-previer-slider",t(this)).css({opacity:.5})})}}();l.children("#ul-type-slider").owlCarousel({items:n.slideshow.count,autoPlay:!!n.slideshow.autoplay&&1e3*n.slideshow.time,singleItem:!(1<n.slideshow.count),slideSpeed:500,responsive:!0,responsiveRefreshRate:100,mouseDrag:!1,navigation:!1,pagination:!1,rewindNav:n.slideshow.autoplay,scrollPerPage:!0,itemsScaleUp:!0,addClassActive:!0,transitionStyle:"slide"!==n.slideshow.animation&&n.slideshow.animation,afterMove:function(){return function(e){t(".ul-previer-slider",t(".owl-page",l)).css({opacity:.5}),t(".owl-page",l).removeClass("active");var i=e.find(".owl-wrapper .active").index();t(".ul-owl-controls .owl-page",l).eq(i).addClass("active");var o=t(".control-panel .owl-pagination .active",l);t(".ul-previer-slider",o).css({opacity:1})}}(),afterUpdate:r,afterInit:a})})}}(),getGalleries:function(){return function(){return $(".ul-widget-gallery.ul-widget-gallery-effect")}}(),hidePreview:function(){return function(e){$(".control-panel",e).css("display","none")}}(),setSlide:function(){return function(e,i){e.children("#ul-type-slider").data("owlCarousel").jumpTo(i)}}(),autoScrollStop:function(){return function(e){e.children("#ul-type-slider").data("owlCarousel").stop()}}(),autoScrollStart:function(){return function(e){e.children("#ul-type-slider").data("owlCarousel").play()}}(),destroy:function(){return function(e){var i=$("#"+e),t=i.attr("data-view");"slideshow"===t?($(".ul-owl-controls .owl-pagination",i).hasClass("ui-sortable")&&$(".ul-owl-controls .owl-pagination",i).sortable("destroy"),$(".prev-owl",i).unbind("click"),$(".next-owl",i).unbind("click"),$(".gallery-slide-thumb-left",i).unbind("click"),$(".gallery-slide-thumb-right",i).unbind("click"),$(".owl-page",i).unbind("click"),$(window).off("resize.slider-1"),i.off("click.removeImg"),i.off("click.editImg")):"grid"===t?$(document).on("gallery"):"collage"===t?($(document).on("gallery"),$(window).off("resize.gallery"),$(window).off("scroll.gallery")):console.log("error")}}()};return e});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map
