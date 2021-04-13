"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _extends=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},_createClass=function(){function e(e,t){for(var r,n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_get=function(){function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in o)return o.value;var i=o.get;return void 0===i?void 0:i.call(n)}return e}();define("map-helper/yandex",["jquery","yandex-maps-api","U","mapHelper"],function(e,t,r,n){var o=function(e){function o(){_classCallCheck(this,o);var e=_possibleConstructorReturn(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.provider="yandex",e.mapMarkersEventHandlers={},e.mapOpts=_extends({},n.defaultMapOpts),e}return _inherits(o,e),_createClass(o,[{key:"init",value:function(){return function(e){var r=this;return _get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,e),new Promise(function(n,a){t().then(function(){o.yandexAPI||(o.yandexAPI=window.ymaps),r.createMap(e),n(r)})["catch"](a)})}}()},{key:"createMap",value:function(){return function(e){if(!r.params.isScreenshotMode){var t=o.yandexAPI,n=o.mapTypes;this.markers=new t.GeoObjectCollection,this.addMarkers(e.markers);var a=[];e.markers.forEach(function(e){a.push([e.latitude,e.longitude])});var i=this.mapOpts.bounds?t.util.bounds.fromPoints([[this.mapOpts.bounds.southEast.latitude,this.mapOpts.bounds.southEast.longitude],[this.mapOpts.bounds.northWest.latitude,this.mapOpts.bounds.northWest.longitude]]):t.util.bounds.fromPoints(a),s=["dblClickZoom","multiTouch"];this.mapOpts.draggable&&s.push("drag");var u=[];this.mapOpts.zoomControl&&u.push("zoomControl"),this.mapOpts.mapTypeControl&&u.push("typeSelector");var l={adjustZoomOnTypeChange:!0,type:n[this.mapOpts.mapTypeId],behaviors:s,controls:u,bounds:i},p={},c=e.isContactsWidget;c&&(p.maxZoom=o.maxZoom,p.autoFitToViewport="always"),this.map=new t.Map(this.$el.get(0),l,p),this.isInit=!0,c&&this.map.setZoom(this.mapOpts.zoom),this.map.geoObjects.add(this.markers),this.map.geoObjects.options.set("visible",this.mapOpts.visible),this.addListeners();var d=""===r.params.yandexMapsApiKey&&r.params.yandexMapsApiKeyEnabled;this.insertPlaceholder(d)}}}()},{key:"destroy",value:function(){return function(){if(this.isInited&&this.map){var e=this.map;e.behaviors.disable(["scrollZoom"]),Object.values(this.mapMarkersEventHandlers).forEach(function(e){e.removeAll()}),e.behaviors.disable(["scrollZoom"]),e.mapEventHandlers.removeAll(),e.destroy(),this.markers=null,this.map=null,this.mapMarkersEventHandlers=null}}}()},{key:"geocode",value:function(){return function(e){var t=o.yandexAPI;return new Promise(function(r,n){t.geocode(e).then(function(e){if(!e.geoObjects.get(0))return void n(new Error("no results"));var t=e.geoObjects.get(0).geometry.getCoordinates();r([t[0],t[1]])},function(){n(new Error("geocoding error"))})})}}()},{key:"geocodeReverse",value:function(){return function(e,t){var r=o.yandexAPI;return new Promise(function(n,o){r.geocode([e,t]).then(function(e){n(e.geoObjects.get(0).properties.get("text"))},o)})}}()},{key:"getMarker",value:function(){return function(e){var t=null;if(this.markers.each(function(r){r.markerId===e&&(t=r)}),!t)throw new Error("NotFind!");return t}}()},{key:"addMarkers",value:function(){return function(e){var t=this,r=o.yandexAPI;Array.isArray(e)||(e=[e]),e.forEach(function(e){var n={};e.text.length&&(n.balloonContent=e.text);var o=new r.Placemark([e.latitude,e.longitude],n,{draggable:!0});o.markerId=e.id,t.markers.add(o),e.isDraggable&&(t.mapMarkersEventHandlers[e.id]=o.events.group().add("dragend",function(){var r=o.geometry.getCoordinates();t.callbacks.onMarkerDragEnd(e.id,r[0],r[1])}).add("dragstart",function(){var r=o.geometry.getCoordinates();t.callbacks.onMarkerDragStart(e.id,r[0],r[1])}).add("click",function(){t.callbacks.onMarkerClick(e.id)}))})}}()},{key:"removeMarkers",value:function(){return function(e){var t=this;Array.isArray(e)||(e=[e]),e.forEach(function(e){var r=t.getMarker(e);t.markers.remove(r)})}}()},{key:"fitMapToMarkers",value:function(){return function(e){var t=this;if(!e){var r=this.markers.getLength();return r?void(1===r?this.markers.each(function(e){t.map.setCenter(e.geometry.getCoordinates(),o.maxZoom)}):this.map.setBounds(this.markers.getBounds(),{checkZoomRange:!0})):void 0}var n=Array.isArray(e)?e:[e],a=[],i=o.yandexAPI;return this.markers.each(function(e){-1<n.indexOf(e.markerId)&&a.push(e.geometry.getCoordinates())}),a.length?1===a.length?void this.map.setCenter(a[0],o.maxZoom):void this.map.setBounds(i.util.bounds.fromPoints(a)):void 0}}()},{key:"fitToViewport",value:function(){return function(e){var t=this;if(!e)return this.fitMapToMarkers(),void this.map.container.fitToViewport();var r=this.getMapZoom(),n=o.yandexAPI;this.map.setBounds(n.util.bounds.fromPoints([[this.mapOpts.bounds.southEast.latitude,this.mapOpts.bounds.southEast.longitude],[this.mapOpts.bounds.northWest.latitude,this.mapOpts.bounds.northWest.longitude]])).then(function(){return t.map.setZoom(r)}).then(function(){t.map.container.fitToViewport()})}}()},{key:"setMarkerPosition",value:function(){return function(e,t,r){var n=this.getMarker(e);n.latitude=t,n.longitude=r,n.geometry.setCoordinates([t,r])}}()},{key:"setMarkerText",value:function(){return function(e,t){var r=this.getMarker(e);r.properties.set("balloonContent",t)}}()},{key:"getMapBounds",value:function(){return function(){var e=this.map.getBounds();return{northWest:{latitude:e[1][0],longitude:e[0][1]},southEast:{latitude:e[0][0],longitude:e[1][1]}}}}()},{key:"addListeners",value:function(){return function(){var e=this;this.map.mapEventHandlers=this.map.events.group().add("typechange",function(){var t=o.typesMap[e.map.getType()];if(t){var r=e.callbacks.onMapOptsChange;if("function"!=typeof r)return;r.call(e,"mapTypeId",t)}}).add("boundschange",function(){var t=e.callbacks.onMapOptsChange;"function"!=typeof t||t.call(e,"bounds",e.getMapBounds())})}}()},{key:"setMapOpts",value:function(){return function(e){var t=this;Object.keys(e).forEach(function(r){var n=e[r];"zoomControl"===r?t.map.controls[n?"add":"remove"]("zoomControl"):"draggable"===r?t.map.behaviors[n?"enable":"disable"]("drag"):"mapTypeControl"===r?t.map.controls[n?"add":"remove"]("typeSelector"):"scrollWheel"===r?t.map.behaviors[n?"enable":"disable"]("scrollZoom"):void 0})}}()},{key:"updateApiKey",value:function(){return function(){return t()}}()}]),o}(n);return o.yandexAPI=null,o.defaultZoom=10,o.maxZoom=17,o.mapTypes={roadmap:"yandex#map",hybrid:"yandex#hybrid",satellite:"yandex#satellite"},o.typesMap={"yandex#map":"roadmap","yandex#satellite":"satellite","yandex#hybrid":"hybrid"},o});
//# sourceMappingURL=mapHelperYandex.js.map

//# sourceMappingURL=mapHelperYandex.js.map

//# sourceMappingURL=mapHelperYandex.js.map

//# sourceMappingURL=mapHelperYandex.js.map

//# sourceMappingURL=mapHelperYandex.js.map

//# sourceMappingURL=mapHelperYandex.js.map

//# sourceMappingURL=mapHelperYandex.js.map