"use strict";define("widget-maps-edit",["_","widget","jquery","widget-maps-view","customClasses"],function(e,n,t,i,r){var o={minCols:4,init:function(){return function(){}}(),edit:function(){return function(){var n=this;require(["panelDialog","map-helper/settings"],function(i,o){n.overlay.show({$el:n.$el,autohide:!0,close:function(){return function(){i.hide()}}()}),n.data.markers&&n.data.markers.length||n.options.bounds||(n.data.markers=[{id:"old_model_marker",title:"",description:n.options.markerText,address:n.options.address,latitude:n.options.lat,longitude:n.options["long"],isEnabled:!0}]);var a=e.debounce(n.save.bind(n),300);i.show({context:n,title:"maps",templateUrl:"/widgets/maps/html/form.html",required:["widget-maps-form"],afterOpen:function(){return function(e){o.init({$el:t(".js-w-maps-form",e),mapOpts:n.options,markers:n.data.markers,excludedOpts:[],MAX_MARKERS:50,MIN_MARKERS:0,resize:{isEnabled:!0,$el:n.$el},overlayColorPicker:{isEnabled:!1},onChange:function(){return function(e){n.options=e.mapOpts,n.data.markers=e.markers,a()}}(),getMapHelper:function(){return function(){return n.mapHelpers[n.id]}}(),removeMapHelper:function(){return function(){n.mapHelpers[n.id]=null}}(),reRender:function(){return function(){n.render()}}(),afterInit:function(){return function(){r.init({$target:t(".js-w-maps-form",e),widget:n})}}(),beforeDestroy:function(){return function(){r.destroy()}}()})}}(),beforeClose:function(){return function(){o.map&&o.map.updateApiKey().then(function(){o.onChange(),o.opts.reRender()}),o.destroy(),n.render()}}()})})}}(),initView:function(){return function(e){var n=this;n.listenersAdded||(n.addEventListeners(),n.listenersAdded=!0);var r=t("#"+e);return!!r.length&&(!n.mapHelpers&&(n.mapHelpers={}),void i.open(e,function(t){n.mapHelpers[e]=t}))}}(),addEventListeners:function(){return function(){var i=this,r=e.debounce(function(e){e.each(function(){var e=t(this).find(".js-map-container");if(e.length){var r=t(this).attr("id");i.mapHelpers&&i.mapHelpers[r]&&setTimeout(function(){var e=n.get(r),t=e&&e.options?e.options.bounds:null;i.mapHelpers[r].fitToViewport(t)},600)}})},400);t(window).on("colResized.mapEdit resize.mapEdit",function(e,n){n=n||document.body;var i=t(n).find(".ul-widget-maps");i.length&&r(i)}),t(window).on("changeDeviceMode.mapEdit",function(){var e=t(document).find(".ul-widget-maps");r(e)})}}(),destroy:function(){return function(){t(window).off(".mapEdit")}}()};return o});
//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map
