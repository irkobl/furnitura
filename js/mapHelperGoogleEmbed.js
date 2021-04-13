"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var _createClass=function(){function e(e,r){for(var t,n=0;n<r.length;n++)t=r[n],t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),_get=function(){function e(r,t,n){null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,t);if(void 0===o){var i=Object.getPrototypeOf(r);return null===i?void 0:e(i,t,n)}if("value"in o)return o.value;var a=o.get;return void 0===a?void 0:a.call(n)}return e}();define("map-helper/google-embed",["jquery","U","mapHelper"],function(e,r,t){var n=function(t){function n(){_classCallCheck(this,n);var e=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.provider="google-embed",e}return _inherits(n,t),_createClass(n,[{key:"init",value:function(){return function(t){var o=this;return _get(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),new Promise(function(n){if(r.params.isScreenshotMode)return void n(o);var i=t.markers[0];i||(i={id:"old_model_marker",title:"Marker",description:"Marker",address:"Moscow Tverskaya 1",latitude:59.9342802,longitude:30.335098600000038,isEnabled:!0}),o.marker=i;var a=o.buildIframeSrc(),u=e('<iframe src="'+a+'" width="100%" height="100%" allowfullscreen></iframe>');u.on("load",function(){n(o)}),o.$el.append(u),o.insertPlaceholder(!1)})}}()},{key:"buildIframeSrc",value:function(){return function(){var e=this.marker.address,t=""+e;return t=t.replace(/ /gi,"%20"),"https://www.google.com/maps/embed/v1/place?key="+r.params.googleEmbedMapsApiKey+"&q="+t}}()},{key:"geocode",value:function(){return function(){return new Promise(function(e){e([59.9342802,30.335098600000038])})}}()},{key:"geocodeReverse",value:function(){return function(e,r){return new Promise(function(t){t(e+","+r)})}}()},{key:"updateMarker",value:function(){return function(r){this.marker=r;var t=this.buildIframeSrc();e("iframe",this.$el).attr("src",t)}}()}]),n}(t);return n});
//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map
