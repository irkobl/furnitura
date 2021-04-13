"use strict";var _Mathround=Math.round;define("js/ulib/crop/usercrop/_buttons",["jquery","U","_","text!html/crop/usercrop/_buttons.html"],function(t,e,o,n){return{add:function(){return function(e){var s=this;s.$buttons=t(o.template(n,t.extend({__:s.me.context.__},e))),s.me.$root.append(s.$buttons),s.$buttonUpload=s.$buttons.find(".js-upload"),s.$buttonTitle=s.$buttons.find(".js-title"),s.$buttonSeo=s.$buttons.find(".js-seo"),s.$buttonCut=s.$buttons.find(".js-cut"),s._addEvents(),s.position()}}(),position:function(){return function(){var o=this.me.elOffsets,n=this.me.$root.width()-this.$buttons.width(),s=t("#body").get(0).getBoundingClientRect(),i=this.me.$el.get(0).getBoundingClientRect(),u=this.me.$el.width()/2-this.$buttons.width()/2,l={desktop:o.left+u,tablet:i.left-s.left+u,phone:i.left-s.left+u},c={top:this.me.scroll,left:l[e.constructor.deviceMode.device]||l.desktop};0<o.top-this.$buttons.height()&&(c.top=o.top-this.$buttons.height()+this.me.scroll),0>this.me.$el.height()+o.top&&(c.top=o.top+this.me.scroll+this.me.$el.height()),c.left=0>c.left?0:c.left,c.left=c.left>n?n:c.left,c.top=_Mathround(c.top),c.left=_Mathround(c.left),this.$buttons.css(c)}}(),remove:function(){return function(){this.$buttons.off("._buttons").remove(),this.me.$scrollRoot.off("._buttons"),this.me.events.off("._buttons")}}(),_addEvents:function(){return function(){var e=this;e.$buttons.on("click._buttons",".js-action",function(){t(this).closest(e.$buttonUpload).length&&e.me.events.dispatch("uploadBtn"),t(this).closest(e.$buttonTitle).length&&(e.me.events.dispatch("titleBtn"),e.me.events.dispatch("openTitlePopup")),t(this).closest(e.$buttonSeo).length&&(e.me.events.dispatch("seoBtn"),e.me.events.dispatch("openSeoPopup")),t(this).closest(e.$buttonCut).length&&(e.me.events.dispatch("cutBtn"),e.me.events.dispatch("openCut"))}),e.me.$scrollRoot.on("scroll._buttons",function(){e.position()}),e.me.events.on("activateTitleBtn._buttons",function(){e.$buttonTitle.addClass("active")}).on("deactivateTitleBtn._buttons",function(){e.$buttonTitle.removeClass("active")}).on("activateSeoBtn._buttons",function(){e.$buttonSeo.addClass("active")}).on("deactivateSeoBtn._buttons",function(){e.$buttonSeo.removeClass("active")}).on("openOldCrop._buttons",function(){e.$buttonCut.addClass("active")}).on("closeOldCrop._buttons",function(){e.$buttonCut.removeClass("active")}).on("disableControl._buttons",function(){e.remove()})}}()}});
//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map
