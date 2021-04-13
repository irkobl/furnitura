"use strict";define("widget-contacts-view",[],function(){return{open:function(){return function(t,n){var e=this,o=document.querySelectorAll("#"+t+" .ul-w-contacts-map");o.length&&("function"==typeof window.requireFullConfOnce?window.requireFullConfOnce(function(){e.initMaps(o,n)}):this.initMaps(o,n))}}(),initMaps:function(){return function(t,n){require(["jquery","_","U","map-helper/yandex"],function(e,o,i,a){for(var r=i.constructor.isConstructor,l=0;l<t.length;l++){var u=t[l],c=e(u),s=c.parent(".ul-w-contacts-item"),d=s?s.data("item-id"):"",p=parseFloat(c.data("latitude"))||55.757,f=parseFloat(c.data("longitude"))||37.613,m=parseInt(c.data("zoom"),10)||8,g=c.data("visible"),w=new a;w.init({$el:c,mapOpts:{mapTypeId:"roadmap",styles:null,zoom:m,draggable:!1,mapTypeControl:!1,zoomControl:!0,panControl:!0,streetViewControl:!1,scrollWheel:!1,bounds:null,visible:g},markers:[{id:d,latitude:+p,longitude:+f,text:"",isDraggable:r}],isContactsWidget:!0}).then(function(t){n&&"function"==typeof n&&n(t)})["catch"](function(t){return console.log(t)})}})}}()}});
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
