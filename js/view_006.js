"use strict";define("widget-button-view",[],function(){var e=!(window.constructorMode||window.previewMode||window.backupPreviewMode);return{isAllowedToGo:!0,init:function(){return function(){}}(),open:function(){return function(e){var t=this;window.localStorage&&document.referrer&&!localStorage.getItem("firstReferrer")&&localStorage.setItem("firstReferrer",document.referrer),this.widgetId=e,"function"==typeof window.requireFullConfOnce?window.requireFullConfOnce(function(){t.addEvents()}):this.addEvents();var o=document.querySelector("#"+this.widgetId+'.ul-w-button a[href="/shop/order/success"]');return o?"function"==typeof window.requireFullConfOnce?void window.requireFullConfOnce(function(){t.getShopButtonData(o)}):void this.getShopButtonData(o):void 0}}(),getShopButtonData:function(){return function(t){(window.previewMode||window.backupPreviewMode)&&(t.setAttribute("href",""),t.dataset.previewHref="/__shop_order_success");var o=t.getAttribute("href")||t.dataset.previewHref;("/shop/order/success"===o||"/__shop_order_success"===o)&&require(["jquery","shop/navigation"],function(o,r){e&&o.ajax({url:r.getUrl("shopAvailability",e),type:"GET",contentType:"application/json"}).done(function(e){e[1].isAvailable||(t.dataset.isDisabled=!0)})})}}(),addEvents:function(){return function(){var e=this;if(!window.constructorMode){var t=document.querySelector("#"+this.widgetId+".ul-w-button a");t&&t.addEventListener("click",function(o){e.isAllowedToGo=!0,(o.cancelBubble||o.defaultPrevented)&&(e.isAllowedToGo=!1),o.preventDefault(),e.eventActions(o,t)})}}}(),eventActions:function(){return function(t,o){var r=this;require(["jquery","U","shop/navigation"],function(n,i,u){var s=n(o),d=s.attr("href")||s.attr("data-preview-href"),c=i.orderFormUrl.check(d);("/shop/order/success"===d||"/__shop_order_success"===d||s.attr("data-is-disabled"))&&(r.isAllowedToGo=!1,s.attr("data-is-disabled",!0),require(["shop/checkoutAPI","shop/cartAPI"],function(t,o){t.checkout(e,function(t){if(t){if(s.removeAttr("data-is-disabled"),t.limit&&!s.attr("show-error")){s.attr("show-error",!0);var r=n("<p>"+t.message+"</p>").appendTo(s.parent());setTimeout(function(){return r.fadeOut(1e3,function(){return s.removeAttr("show-error")})},5e3)}}else o.clear(),e||u.goTo("orderSuccess",{isPublishedMode:e,replace:!0})})})),null!=c&&r.isAllowedToGo&&(r.isAllowedToGo=!1,s.css({"pointer-events":"none"}),require(["orderForm"],function(e){n(document).trigger("openButtonOrderForm"),e.open(c,null,function(){s.css({"pointer-events":""}),n(document).trigger("closeButtonOrderForm")})})),r.isAllowedToGo&&window.open(t.target.href,t.target.getAttribute("target"))})}}()}});
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

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map
