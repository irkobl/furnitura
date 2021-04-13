"use strict";define("widget-goods-form",["jquery","U","_","uform","link","popup","imagecrop","stickyPopup","i18n","ul-framework","popover","linkPopover","widget-goods-view","customClasses","text!/widgets/goods/html/change-image-popover.html"],function(e,t,o,n,a,i,r,d,s,c,g,u,l,m,w){var p={addListeners:function(){return function(t){var n=this;t.on("change.goodsFormEvent",".js-goods-set-design",function(){n.w.options.design=e(this).val(),n.w.render()}).on("change.goodsFormEvent","[ul-model]",function(){n.w.data=e.extend(!0,n.w.data,n.getFormData()),n.w.render()}).on("click.goodsFormEvent",'[ul-model="image.variant"]',function(){e(".ul-popup-overlay","#body").trigger("click"),"icon"===e(this).attr("value")?e(".js-goods-form-icon-settings-open").show():e(".js-goods-form-icon-settings-open").hide()}).on("click.goodsFormEvent",".js-goods-form-icon-settings-open",function(){e(this).addClass("ul-goods-control-active"),d.open({title:s("widgets.goods.icon"),data:"",templateUrl:"text!/widgets/goods/html/popup.html",templateData:{data:n.w.data,__:s,gThemeSite:e("#body").attr("class"),gThemeBlock:"g-theme-block-0"==n.w.$el.closest(".ul-container").attr("data-theme")?e("#body-fict").attr("class"):n.w.$el.closest(".ul-container").attr("data-theme")},wide:!1,saveBtn:!1,$targetEl:e(this),afterOpen:function(){return function(){c.range.init()}}(),beforeClose:function(){return function(){e(".ul-goods-control-active",t).removeClass("ul-goods-control-active")}}()})}).on("click.goodsFormEvent",".js-goods-form-icon-tweaks-open",function(){e(this).addClass("edit"),d.open({title:s("widgets.goods.link"),data:"",templateUrl:"text!/widgets/goods/html/popup-tweaks.html",templateData:{data:n.w.data,__:s},wide:!1,saveBtn:!1,$targetEl:e(this),beforeClose:function(){return function(){e(".edit",t).removeClass("edit")}}()})}),e(document).on("change.goodsFormEvent",'[ul-model="icon.size"]',function(){n.w.data.icon.size=parseInt(c.range.getVal(e(this)),10),n.w.render()}).on("click.goodsFormEvent",".js-goods-icon-color:not(.active)",function(){e(this).addClass("active").siblings(".active").removeClass("active"),n.w.data.icon.color=e(this).data("color")||"",n.w.render()}).on("keypress.goodsFormEvent",".js-goods-view-button a",function(e){13==e.keyCode&&e.preventDefault()}).on("keydown.goodsFormEvent keyup.goodsFormEvent",".js-goods-view-button a",n.limitBtnSymbols).on("blur.goodsFormEvent",".js-goods-view-button a",function(){var t=e(this);t.attr("contenteditable","false"),n.w.data.button.title=o.escape(t.text())}).on("paste.goodsFormEvent",".js-goods-view-button a",function(e){if(e.preventDefault(),!!e.originalEvent.clipboardData){var t=e.originalEvent.clipboardData.getData("text/plain");t.length&&document.execCommand("inserttext",!1,t)}}).on("mouseenter.goodsFormEvent",".js-goods-image-wrap",function(){clearTimeout(n.closeImagePopoverTimeout),n.w.changeImagePopover&&n.w.changeImagePopover.show()}).on("mouseleave.goodsFormEvent",".js-goods-image-wrap",function(){n.closeImagePopoverTimeout=setTimeout(function(){n.w.changeImagePopover&&n.w.changeImagePopover.hide()},300)}).on("click.goodsFormEvent",".js-goods-change-image",function(){if(n.w.data.imageEditing=!0,n.w.changeImagePopover.hide(),"picture"===n.w.data.image.variant)require(["imagelib"],function(e){e.open({multiSelect:!1,apply:function(){return function(e){n.w.data.picture.src=e[0].origin,n.w.data.imageCrop=e[0].origin,n.w.data.cutData={x:0,y:0,height:0,width:0,src:""},n.w.data.usercrop=n.w.data.autocrop={x:0,y:0,height:0,width:0,src:"",resizeWidth:0},n.w.render()}}(),close:function(){return function(){delete n.w.data.imageEditing}}()})});else{var t="#"+n.w.id+" .js-goods-image-wrap";require(["widget-icon-dialog"],function(o){o.open({context:n.w,iconData:{iconSet:n.w.data.icon.iconSet},$targetEl:e(t),targetSelector:t,showUpload:!1,getIcon:function(){return function(e,t,o,a,i){"class"===i?(n.w.data.icon.name=a+" "+e,n.w.data.icon.content=""):"content"===i&&(n.w.data.icon.name=a,n.w.data.icon.content=e),n.w.data.icon.iconSet=o,n.w.data.icon.insertType=i,n.w.render()}}(),close:function(){return function(){delete n.w.data.imageEditing}}()})})}}).on("click.goodsFormEvent",".js-goods-crop-image",function(){n.w.changeImagePopover.hide(),r.open({img:n.w.data.imageCrop,data:(n.w.data.cutData&&0<n.w.data.cutData.height&&0<n.w.data.cutData.width?n.w.data.cutData:null)||(n.w.data.usercrop&&0<n.w.data.usercrop.height&&0<n.w.data.usercrop.width?n.w.data.usercrop:null),done:function(){return function(e,t){n.w.data.picture.src=e.data,n.w.data.cutData=t,n.w.data.usercrop=n.w.data.autocrop={x:0,y:0,height:0,width:0,src:"",resizeWidth:0},n.w.render()}}()})}).on("change.goodsFormEvent",'[ul-model="link.variant"]',function(){n.w.data.url&&(n.w.data.url.variant=e(this).val()),n.w.render()})}}(),limitBtnSymbols:function(){return function(t){var o=e(t.currentTarget);-1===[8,35,36,37,39,46].indexOf(t.which)&&o.text().length>=32&&t.preventDefault()}}(),destroy:function(){return function(){var t=this;m.destroy(),t.$el.off(".goodsFormEvent"),t.w.$el.off(".goodsFormEvent"),e(document).off(".goodsFormEvent"),e(window).off(".goodsFormEvent"),t.$el.find(".js-goods-change-image-wrap").remove(),t.w.changeImagePopover&&(t.w.changeImagePopover.hide(),delete t.w.changeImagePopover),t.deinitChangeLinkPopover(t.w),t.$el.empty(),t.$el.remove(),t.$el=null}}(),getFormData:function(){return function(){var e=this;return n.formParse(e.$el)}}(),init:function(){return function(o){var n=this;n.w=o,n.$el=e(".js-w-goods-form"),n.addListeners(n.$el),c.folds.init(),c.folds.after();var a=e(".js-goods-linkPopover",o.$el);a.length&&(o.changeLinkPopover=new u({$target:a,href:o.data.button.url,gravity:["bottom","top"],newWindow:o.data.button.target,showEvents:!1,removeBtn:!0,apply:function(){return function(e){o.data.button.url=e.href||"",o.data.button.target=e.newWindow,o.render()}}(),orderFormData:function(){return function(){return l.getOrderFormData(t,o.$el)}}()})),m.init({$target:n.$el,widget:n.w})}}(),createPopovers:function(){return function(t,o){var n=this;t.changeImagePopover&&t.changeImagePopover.hide(),t.changeImagePopover=new g({gravity:["top"],context:t,$target:e(".js-goods-image-wrap",t.$el),$parent:e(".js-goods-image-wrap",t.$el),html:w,templateData:{data:t.data,i18n:s}});var a=e(".js-goods-linkPopover",t.$el);a.length&&(n.deinitChangeLinkPopover(t),t.changeLinkPopover&&t.changeLinkPopover.show({$target:a})),o&&t[o].show()}}(),deinitChangeLinkPopover:function(){return function(e){e.changeLinkPopover&&e.changeLinkPopover.hide()}}()};return p});
//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map
