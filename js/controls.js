"use strict";var _Mathround=Math.round;define("widget-icon-controls",["jquery","popover","i18n","U","_","text!widgets/icon/html/controls.html","widget-icon-dialog"],function(t,o,e,n,i,s,l){return{addControls:function(){return function(o){this.me=o,this.$scrollRoot=t("#ul-main"),this.$widgetOverlay=t(".ul-disabled-overlay"),this.$buttonBack=t(".js-back-click"),this.$root=t("#body"),this.leftPanelWidth=280,this.smallLeftPanelWidth=48,this.$buttons=t(i.template(s,{__:e})),this.me.$buttons=this.$buttons,this.$root.append(this.$buttons),this.$buttonUpload=this.$buttons.find(".js-upload"),this.$buttonEffect=this.$buttons.find(".js-effect"),this._addEvents(),this.position(),this.isShow=!0}}(),elOffsets:function(){return function(){var o=this.me.$el.offset(),e=t(".ul-buypremium-bar").outerHeight(!0)||0,i=this.$root.offset(),s=this.me.$el.get(0).getBoundingClientRect(),l={desktop:o.left-(this.$root.hasClass("ul-left-panel-hide")?this.smallLeftPanelWidth:this.leftPanelWidth),tablet:s.left-i.left,phone:s.left-i.left};return{top:o.top-e,left:l[n.constructor.deviceMode.device]||l.desktop}}}(),scroll:function(){return function(){return this.$scrollRoot.scrollTop()}}(),position:function(){return function(){var t=this.elOffsets(),o=this.$root.width()-this.$buttons.width(),e=this.$root.get(0).getBoundingClientRect(),i=this.me.$el.get(0).getBoundingClientRect(),s=this.scroll(),l=this.me.$el.outerWidth()/2-this.$buttons.outerWidth()/2,h={desktop:t.left+l,tablet:i.left-e.left+l,phone:i.left-e.left+l},u={top:s,left:h[n.constructor.deviceMode.device]||h.desktop};0<t.top-this.$buttons.height()&&(u.top=t.top-this.$buttons.height()+s),0>this.me.$el.height()+t.top&&(u.top=t.top+s+this.me.$el.height()),u.left=0>u.left?0:u.left,u.left=u.left>o?o:u.left,u.top=_Mathround(u.top),u.left=_Mathround(u.left),this.$buttons.css(u)}}(),removeControls:function(){return function(){this.isShow=!1,this.$buttons&&this.$buttons.off("._buttons").remove(),this.$scrollRoot&&this.$scrollRoot.off("._buttons"),t(window).off("._buttons"),this.$widgetOverlay&&this.$widgetOverlay.off("._buttons"),this.$buttonBack&&this.$buttonBack.off("._buttons")}}(),saveData:function(){return function(o){this.me.data=t.extend(this.me.data,o),this.me.render()}}(),_addEvents:function(){return function(){var o=this,e=".ul-icon-controls";o.$buttons.on("click._buttons",".js-action",function(){t(this).closest(o.$buttonUpload).length&&l.open({context:o,iconData:{iconSet:o.me.data.iconSet||"fontAwesome"},$targetEl:t(e),targetSelector:e,getIcon:function(){return function(t,e,n,i,s){var l={};"class"===s?(l.icon=i+" "+t,l.content=""):"content"===s?(l.icon=i,l.content=t):"image-icon"===e&&(l.icon=t),l.type=e,l.insertType=s,l.iconSet=n,o.saveData(l)}}()})}),o.$scrollRoot.on("scroll._buttons",function(){o.position()}),t(window).on("resize._buttons",function(){o.position()})}}()}});
//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map

//# sourceMappingURL=controls.js.map
