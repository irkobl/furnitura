"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,n){for(var e,a=0;a<n.length;a++)e=n[a],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}return function(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}}();define("colorSettingsUpdater",["jquery","U"],function(t,n){var e=function(){function e(){_classCallCheck(this,e),this.params=null,this.$body=t("#body"),this._getData()}return _createClass(e,[{key:"_getData",value:function(){return function(){var e=this;this._load=new Promise(function(a,i){t.ajax({url:"/sites/url/"+n.params.site+"/pages/id/"+n.params.pageId+"/theme",api:!0,ok:function(){return function(t){e.params=t,a(e.params)}}(),noOk:i})})}}()},{key:"updateSettings",value:function(){return function(t){var n=this;return this._getData(),new Promise(function(e,a){return t?void n.loadSettings().then(function(){Object.assign(n.params,t),t.animation&&(n.params.animation=t.animation),e()}):a("settings is empty")})}}()},{key:"getSettings",value:function(){return function(){var t=this,n={};return Object.keys(this.params).forEach(function(e){"undefined"==typeof t.params[e]?delete t.params[e]:n[e]=t.params[e]}),n}}()},{key:"saveSettings",value:function(){return function(t){var n=this.getSettings();t&&(n.__sendCb=t),this.$body.trigger("saveSiteSettings",{id:null,settings:n})}}()},{key:"loadSettings",value:function(){return function(){var t=this;return new Promise(function(n){t._load.then(function(){n(t.getSettings())})})}}()}]),e}();return new e});
//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map

//# sourceMappingURL=colorSettingsUpdater.js.map
