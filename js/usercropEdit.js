"use strict";var _Mathround=Math.round;define("js/ulib/crop/usercropEdit",["jquery","U","js/ulib/crop/events","cropModes","js/ulib/crop/usercrop/_buttons","js/ulib/crop/usercrop/_draggable","js/ulib/crop/usercrop/_resize","js/ulib/crop/usercrop/_zoom","js/ulib/crop/usercrop/_overlay","js/ulib/crop/usercrop/_popup"],function(t,e,o,i,n,s,l,c,r,u){var h={$scrollRoot:t("#ul-main"),$root:t("#body"),leftPanelWidth:280,smallLeftPanelWidth:48,_controls:{_buttons:n,_draggable:s,_resize:l,_zoom:c,_overlay:r,_popup:u},get scroll(){return this.$scrollRoot.scrollTop()},get imgShift(){return{x:parseFloat(this.$img.css("left")),y:parseFloat(this.$img.css("top"))}},get elOffsets(){var o=this.$el.offset(),i=t(".ul-buypremium-bar").outerHeight(!0)||0,n=t("#body").offset(),s=this.$img[0].getBoundingClientRect(),l={desktop:o.left-(t("body").hasClass("ul-left-panel-hide")?this.smallLeftPanelWidth:this.leftPanelWidth),tablet:s.left-n.left,phone:s.left-n.left};return{top:o.top-i,left:l[e.constructor.deviceMode.device]||l.desktop}},get imgOffsets(){var o=this.$img[0].getBoundingClientRect(),i=t(".ul-buypremium-bar").outerHeight(!0)||0,n=t("#body").get(0).getBoundingClientRect(),s={desktop:o.left-(t("body").hasClass("ul-left-panel-hide")?this.smallLeftPanelWidth:this.leftPanelWidth),tablet:o.left-n.left,phone:o.left-n.left};return{top:o.top-i,left:s[e.constructor.deviceMode.device]||s.desktop,width:o.width,height:o.height}},init:function(){return function(t){var e=this;null===t||(e.context=t,e.events=new o)}}(),reposition:function(){return function(){this.opened&&this._toAllControls(function(t){t.position&&t.position()})}}(),update:function(){return function(t){this.close(),this.open(t),this.events.dispatch("update")}}(),open:function(){return function(o){var n=this,s=i._getImageParams(o.get(0));this.opened||!o||(this.$el=t(s.el),this.$img=t(s.img),this.src=s.data.cutData.src,this.opened=!0,this.aspectRatio=this.$img.get(0).naturalHeight/this.$img.get(0).naturalWidth,this._addEvents(),this._toAllControls(function(t,e){t.add(e)}),e.layers.on(0,function(){n.events.dispatch("esc")}),this.$el.on("click.usercropEdit",function(){n.events.dispatch("clickInEl")}),this.$el.on("dblclick.usercropEdit",function(){n.events.dispatch("uploadDbl")}),n.events.dispatch("open"))}}(),close:function(){return function(){this.opened&&(this.events.dispatch("close"),this._toAllControls(function(t){t.remove()}),this.opened=!1,this.events.off("._main"))}}(),_addEvents:function(){return function(){function t(){e.events.on("overlayClick._main",function(){e.context.close(e.$el)})}var e=this;e.events.on("esc._main",function(){e.context.close(e.$el)}).on("uploadBtn._main",function(){e.context.__openImageLib(e.$el)}).on("uploadDbl._main",function(){e.context.__openImageLib(e.$el)}).on("popupOpen._main",function(){e.events.off("overlayClick._main")}).on("popupClose._main",function(){t()}).on("cutBtn._main",function(){e.context.__openOldCrop(e.$el)}).on("disableControl._main",function(){e.$el.off("click.usercropEdit"),e.events.off("._main")}),t()}}(),_proxy:function(){return function(t,e){this.context[t].apply(this.context,e)}}(),_toAllControls:function(){return function(t){var e=this;t=t||function(){},Object.keys(e._controls).forEach(function(o){var i=e._controls[o],n=e.context.opt.controls[o.replace("_","")];i.me||(i.me=e),n&&n.enable&&t(i,n)})}}(),_position:function(){return function(t,e){var o=this,i={height:o.$img[0].getBoundingClientRect().width*o.aspectRatio,width:o.$img[0].getBoundingClientRect().width},n={height:o.$el[0].getBoundingClientRect().height,width:o.$el[0].getBoundingClientRect().width};t=t||{top:o.imgShift.y,left:o.imgShift.x},e&&(t.top=-((-t.top+n.height/2)/(e*o.aspectRatio)*i.height-n.height/2),t.left=-((-t.left+n.width/2)/e*i.width-n.width/2)),i.height>=n.height?(t.top=0<=t.top?0:t.top,t.top=0>=i.height-n.height+t.top?-(i.height-n.height):t.top):t.top=0,i.width>=n.width?(t.left=0<=t.left?0:t.left,t.left=0>=i.width-n.width+t.left?-(i.width-n.width):t.left):t.left=(n.width-i.width)/2,o.$img.css({top:_Mathround(t.top),left:_Mathround(t.left)}),o._toAllControls(function(t){t.positionImmediate&&t.positionImmediate()})}}()};return h});
//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map

//# sourceMappingURL=usercropEdit.js.map
