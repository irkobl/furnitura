"use strict";define("ul-framework/tooltip",["jquery"],function(t){var i={tooltipId:null,timer:null,isRAF:!1,init:function(){return function(i,e){this.$wrapper=t(".ul-tooltip-wrapper"),this.$arr=t(".ul-tooltip-arr",this.$wrapper),this.$text=t(".ul-tooltip-text",this.$wrapper),this.opt=t.extend({attr:"title",delay:0,theme:"dark"},e),this.attrFake="fake-"+this.opt.attr,this.attrSelector="["+this.attrFake+"]";var o=this;t(document).on("mouseenter.tooltipEvent",i,function(){o._showTooltip(t(this))}),t(document).on("mouseleave.tooltipEvent",this.attrSelector,function(){o._hideTooltip(t(this))}),t(document).on("click.tooltipEvent",o.attrSelector,function(){var i=t(this),e=o.tooltipId;setTimeout(function(){document.documentElement.contains(i[0])||e!==o.tooltipId||o._hideTooltip(i)},500)})}}(),_showTooltip:function(){return function(t){this.tooltipId=Math.random().toString().slice(2);var i=t.attr(this.opt.attr),e="";if(i&&(t.attr(this.attrFake,i),t.removeAttr(this.opt.attr),e=i.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/,"")),!!e){var o=this;this._seizeTimer(function(){var i=o.$wrapper;o.$text.html(e),t.data("tooltipNowidth")?i.addClass("ul-tooltip-wrapper-nowidth"):i.removeClass("ul-tooltip-wrapper-nowidth"),i.removeClass("ul-tooltip-hidden").addClass("ul-tooltip-transparent"),o._seizeTimer(function(){var e=o._getPositions(t,i),r=e.oPosition,s=e.wrapperHeight;o.$arr.css("margin-top",0),("left"==r.side||"right"==r.side)&&(0>r.shiftArr&&s/2-12<=-r.shiftArr&&(r.shiftArr=-(s/2-12)),0<r.shiftArr&&s/2-12<=r.shiftArr&&(r.shiftArr=s/2-12),o.$arr.css("margin-top",-r.shiftArr-6)),o.$arr.attr("data-gravity",r.side),i.css({top:r.top,left:r.left}),i.removeClass("ul-tooltip-transparent").addClass("ul-tooltip-visible")})},this.opt.delay)}}}(),_seizeTimer:function(){return function(t,i){this._releaseTimer(),this.isRAF=void 0===i,this.timer=this.isRAF?window.requestAnimationFrame(t):setTimeout(t,i)}}(),_releaseTimer:function(){return function(){this.timer&&(this.isRAF?window.cancelAnimationFrame(this.timer):clearTimeout(this.timer),this.timer=null)}}(),_getPositions:function(){return function(i,e){var o=i.offset(),r=i.outerWidth(),s=i.outerHeight(),n=e.outerWidth(),a=e.outerHeight(),l=t(window).height(),p=t(document).width(),h=t(document).scrollTop(),u=10,d=o.top+s/2-a/2,f=o.left+r/2-n/2,c=n/2+r/2+u,m=a/2+s/2+u,v=!1,w={top:d,left:f,shiftArr:0,side:"none"},A=h-w.top,T=l-(w.top+a-h);return o.top-h<a+u?(w.top+=m,w.side="top"):(w.top-=m,w.side="bottom"),o.left<n+u&&(w.left+=c,w.side="left",v=!0),p-(o.left+r)<n+u&&(w.left-=c,w.side="right",v?(v=!1,w.side="bottom"):v=!0),v&&(w.top=d,A>0&&(w.shiftArr=A),0>T&&(w.shiftArr=T),w.top+=w.shiftArr),w.top==d&&w.left==f&&(w.shiftArr=0,w.side="none"),{oPosition:w,wrapperHeight:a}}}(),_hideTooltip:function(){return function(t){var i=this.$wrapper;this._releaseTimer(),null==t.attr(this.opt.attr)&&t.attr(this.opt.attr,t.attr(this.attrFake)),t.removeAttr(this.attrFake),i.removeClass("ul-tooltip-transparent"),i.removeClass("ul-tooltip-visible"),i.addClass("ul-tooltip-hidden")}}(),destroy:function(){return function(){t(document).off(".tooltipEvent")}}()},e=function(){return function(){}}();return e.prototype=i,e});
//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map

//# sourceMappingURL=tooltip.js.map
