"use strict";define("widget-maps-view",["jquery","_"],function(e,r){var n=window.constructorMode;return{init:function(){return function(){}}(),open:function(){return function(e,r){this.renderMap(e,r)}}(),getMarkerText:function(){return function(e,n){if(!e&&!n)return"";var o=[];return e&&o.push("<b>"+r.escape(e)+"</b>"),n&&o.push(r.escape(n)),'<span style="color: #000;">'+o.join("<br>")+"</span>"}}(),renderMap:function(){return function(r,o){var t=e("#"+r),i=this;if(!t.length)return void console.error("Not found widget: "+r);var a=t.find(".js-map-container");if(!a.length)return void console.error("No map container found for widget: "+r);var d=t.data("options");if(!d)return void console.error("Options error");var l=t.data("markers");l&&l.length||d.bounds||(l=[{id:"old_model_marker",title:"",description:d.markerText,address:d.address,latitude:d.lat,longitude:d["long"],isEnabled:!0}]);var s=["yandex","google","google-embed"].includes(d.provider)?d.provider:"yandex",u=["map-helper/"+s];"google"===s&&u.push("widget-maps-styles");var p=d.draggable;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&!n&&(p=!1),require(u,function(r,t){var s=new r;s.init({$el:a,mapOpts:{mapTypeId:d.mapTypeId,styles:t?t[d.styleNumber]:null,zoom:d.zoom,draggable:p,mapTypeControl:d.mapTypeControl,zoomControl:d.zoomControl,panControl:d.panControl,streetViewControl:d.streetViewControl,scrollWheel:!1,bounds:d.bounds},markers:l.filter(function(e){return e.isEnabled}).map(function(e){return{id:e.id,latitude:+e.latitude,longitude:+e.longitude,address:e.address,text:i.getMarkerText(e.title,e.description),isDraggable:n}})}).then(function(r){e(".ul-loading-indicator",a).hide(),o&&"function"==typeof o&&o(r)})["catch"](function(e){console.log(e)})})}}()}});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map
