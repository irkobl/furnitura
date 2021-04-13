"use strict";define("widget-gallery-edit",["jquery","i18n","widget-gallery-view","popup","widget","jquery-ui-sortable"],function(e,t,i,a,l){return{minCols:4,$targetImage:null,init:function(){return function(){}}(),initView:function(){return function(n,o){var r=this;i.open(n,o),e(window).off(".galleryResize"),e(window).on("resizeAllWidgets.galleryResize",function(){e.each(e(".ul-widget-gallery"),function(t,i){var a=l.get(e(i).attr("id"));a&&"gallery"==a.type&&a.render()})}),r.$el.on("click.editImg",".ul-widget-gallery-slider-img-edit",function(i){var l=-1,n=t("constructor");r.data&&"slideshow"===r.data.currentView?l=e(this).closest(".owl-page").index():r.data&&"grid"===r.data.currentView?l=e(this).closest(".ul-w-gallery-item").data("i"):r.data&&"collage"===r.data.currentView&&(l=e(this).closest(".ul-w-gallery-item").data("i")),r.options.slideshow.slideStart=l,r.$targetImage=e(this),a.open({context:r,title:n("settings"),templateUrl:"text!/widgets/gallery/html/formEditImg.html",templateData:{data:r.data,options:r.options,index:l,__:t},required:"widget-gallery-image-edit",draggable:!0,wide:!1,$targetEl:e(this),positionTarget:"right",showCloseBtn:!1,apply:function(){return function(){r.data.images[l].description=e(".ul-widget-gallery-descriptione").val(),r.data.images[l].alt=e(".ul-widget-gallery-alt").val(),r.options.slideshow.slideStart=l,r.save(function(){r.redraw()})}}()}),i.stopPropagation()}),r.$el.on("click.removeImg",".ul-widget-gallery-slider-img-remove",function(t){var i=null;r.data&&"slideshow"===r.data.currentView?e(this).closest(".owl-page").hide("slow",function(){e(this).closest(".owl-page").remove();var t=[];e(".ul-owl-controls .owl-pagination .owl-page",r.$el).each(function(){var i=parseInt(e(this).attr("id").replace("img_",""));t.push(r.data.images[i])}),e(".ul-owl-controls .owl-pagination .owl-page",r.$el).each(function(){e(this).attr("id","img_"+e(this).index())}),r.data.images=t,r.save(),r.redraw()}):r.data&&"grid"===r.data.currentView?(i=e(this).closest(".ul-w-gallery-item").data("i"),!isNaN(i)&&(r.data.images.splice(i,1),r.redraw())):r.data&&"collage"===r.data.currentView&&(i=e(this).closest(".ul-w-gallery-item").data("i"),!isNaN(i)&&(r.data.images.splice(i,1),r.redraw())),t.stopPropagation()}),setTimeout(function(){i.getGalleries().each(function(){e(this).removeClass("ul-widget-gallery-effect"),i.resizeCols()})},500)}}(),replaceImages:function(){return function(e){var t=this;if(!t.$targetImage)return!1;var i=null;i="slideshow"===t.data.currentView?t.$targetImage.closest(".ul-w-gallery-item").index():t.$targetImage.closest(".ul-w-gallery-item").attr("data-i"),t.data.images[i].src=e[0].origin,t.data.images[i].crop="",t.data.images[i].cutData={x:0,y:0,height:0,width:0,src:""},t.data.images[i].usercrop=t.data.images[i].autocrop={x:0,y:0,height:0,width:0,src:"",resizeWidth:0},t.save(),t.redraw()}}(),sortableInit:function(){return function(){var t=this;e(".ul-owl-controls .owl-pagination",t.$el).sortable({cancel:".l-widget-gallery-slider-img-remove , .ul-widget-gallery-slider-img-edit",axis:"x",tolerance:"pointer",start:function(){return function(a,l){t.options.slideshow.autoplay&&i.autoScrollStop(t.$el),e(".owl-page",t.$el).removeClass("active"),l.item.addClass("active"),i.setSlide(t.$el,l.item.index())}}(),sort:function(){return function(e,i){t.sliderThum(i)}}(),update:function(){return function(a,l){t.indexStop=l.item.index();var n=e(".ul-owl-controls .owl-pagination",t.$el).sortable("toArray"),o=[];n.forEach(function(e){if(""!=e){var i=parseInt(e.replace("img_",""),10);o.push(t.data.images[i])}}),e(".ul-owl-controls .owl-pagination .owl-page",t.$el).each(function(){e(this).attr("id","img_"+e(this).index())}),e(".owl-wrapper",t.$el).children(".owl-item").eq(),t.data.images=o,t.options.slideshow.autoplay&&i.autoScrollStart(t.$el);var r=parseInt(e(".ul-owl-controls .owl-pagination",t.$el).css("margin-left"));t.options.slideshow.marginPaginator=r,t.options.slideshow.slideStart=t.indexStop,t.save(),t.redraw()}}(),stop:function(){return function(){clearInterval(t.slideRight),clearInterval(t.slideLeft)}}()})}}(),sliderThum:function(){return function(t){var i=this,a=parseInt(e(".owl-pagination").css("margin-left")),l=e(".ul-owl-controls",i.$el).width()-140,n=2,o=!1;t.position.left>l?(o=!0,clearInterval(i.slideRight),clearInterval(i.slideLeft),i.slideRight=setInterval(function(){a=parseInt(e(".owl-pagination",i.$el).css("margin-left")),e(".owl-pagination",i.$el).css("margin-left",a-5),-1*a>e(".owl-pagination",i.$el).width()-160&&clearInterval(i.slideRight)},n)):40>=t.position.left&&0>a?(o=!0,clearInterval(i.slideRight),clearInterval(i.slideLeft),i.slideLeft=setInterval(function(){a=parseInt(e(".owl-pagination",i.$el).css("margin-left")),e(".owl-pagination",i.$el).css("margin-left",a+5),5>-1*a&&clearInterval(i.slideLeft)},n)):(t.position.left<e(".ul-owl-controls",i.$el).width()-300||100<t.position.left||0===a||-1*a>e(".owl-pagination").width()-160)&&(o=!1,5>-1*a&&e(".owl-pagination",i.$el).css("margin-left",0),clearInterval(i.slideRight),clearInterval(i.slideLeft))}}(),addImages:function(){return function(e){var t=this;e.forEach(function(e){t.data.images.unshift({src:e.origin,crop:e.origin})}),t.options.slideshow.slideStart=t.data.images.length-1,t.save(),t.redraw()}}(),edit:function(){return function(){var t=this;require(["panelDialog"],function(a){t.overlay.show({$el:t.$el,autohide:!0,close:function(){return function(){a.hide()}}()}),t.redraw(function(){a.show({context:t,title:"Gallery",templateUrl:"/widgets/gallery/html/form.html",required:["widget-gallery-form"],templateCss:["/css/require/widgets/gallery.css"],templateData:{data:t.data,opts:t.options},afterOpen:function(){return function(){"slideshow"===t.data.currentView&&t.redraw(function(){t.sortableInit(),"previews"!==t.options.slideshow.controls&&(e(".control-panel",t.$el).css("display","flex"),t.resize())})}}(),close:function(){return function(){"slideshow"===t.data.currentView&&(t.options.slideshow.marginPaginator=0,t.options.slideshow.slideStart=0,"previews"!==t.options.slideshow.controls&&(i.hidePreview(t.$el),e("#ul-type-slider",t.$el).hasClass("ui-resizable")&&e("#ul-type-slider",t.$el).resizable("destroy"))),t.save(),t.redraw()}}()})})})}}(),resize:function(){return function(){var t=this;e("#ul-type-slider",t.$el).resizable({handles:"s",minHeight:250,create:function(){return function(){e(".ui-resizable-handle",this).append(['<div class="ul-handler-resize">','<span class="icon-content-special-resize"></span>',"</div>"].join(""))}}(),start:function(){return function(){t.options.slideshow.autoplay&&i.autoScrollStop(t.$el)}}(),resize:function(){return function(i,a){e(".ul-type-slider",t.$el).height(a.size.height),e(".ul-image",t.$el).height(a.size.height)}}(),stop:function(){return function(a,l){t.options.slideshow.height=l.size.height,e(".ul-image",t.$el).height(t.options.slideshow.height),t.options.slideshow.autoplay&&i.autoScrollStart(t.$el),e(".ul-type-slider",t.$el).css("height",""),t.save()}}()})}}(),redraw:function(){return function(t){var a=this;e.extend(!0,a.options,a.options);var l={slideshow:function(){return function(){i.destroy(a.id),a.render(function(){if(a.$el.data("edit")&&(a.resize(),a.sortableInit(),a.$el.hasClass("ul-disabled-overlay-element")&&"previews"!=a.options.slideshow.controls)){e(".control-panel",a.$el).css("display","flex"),e(".ul-owl-controls .owl-pagination .owl-page .ul-previer-slider",a.$el).css({opacity:.5});var i=e(".control-panel .owl-pagination .active",a.$el);if(e(".ul-previer-slider",i).css({opacity:1}),0<i.length){var l=e(".control-panel .owl-pagination .active",a.$el).position().left-262;l-30>e(".control-panel .ul-owl-controls",a.$el).width()&&e(".control-panel .owl-pagination",a.$el).css("margin-left",-1*l-30)}}t&&t()})}}(),grid:function(){return function(){a.render(function(){i.resizeCols(),t&&t()})}}(),collage:function(){return function(){a.render(function(){t&&t()})}}()},n=l[a.data.currentView];n?n():console.error('Unexpected "currentView":',a.data.currentView),e(document).trigger("changeGalleryView")}}(),update:function(){return function(t,i){var a=this;e.extend(a.data,t),e.extend(a.options,i)}}(),destroy:function(){return function(){e(document).off("changeGalleryView"),e(window).off(".galleryResize")}}()}});
//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map
