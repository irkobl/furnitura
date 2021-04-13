"use strict";define("widget-downloadFile-view",["jquery","U","icon-set-loader","goals/handlers"],function(n,t,o,e){var i=Object.create({name:"downloadFile-view",opened:!1,init:function(){return function(){t.params.isULanding&&!t.constructor.isConstructor&&n(document).on("click",".ul-w-downloadFile-showButton",function(){var o=n(this).closest(".ul-widget"),i=o.data("goalsData"),r=e.getHandlerFunction(i),a="";window.localStorage&&(a=localStorage.getItem("firstReferrer")),n.ajax({url:t.sprintf("/api/stats/lead?site={site}&action=button",[t.params.site]),type:"POST",data:JSON.stringify({referrer:a}),contentType:"application/json"}).done(function(){r()})})}}(),open:function(){return function(t){var o=this,e=n("#"+t);return this.opened||(this.init(t),this.opened=!0),e&&0!=e.length?void o.initIcon(e):void console.log("el not found: "+t)}}(),_close:function(){return function(){}}(),initIcon:function(){return function(n){var t=n.data("iconSet"),e=n.data("isIconShown");!1===e||o.loadIconSet(t,function(){n.attr("data-is-icon-font-loaded","true")})}}(),destroy:function(){return function(t){n("#"+t).remove()}}()});return i});
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
