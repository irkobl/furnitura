"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var r,n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();define(["U","i18n","jquery","lodash","text!html/share/constructor/panels/headerFooter.html","js/constructor/panels/panel-partials/headerFooter","panelPartials"],function(e,t,r,n,o){return function(){function a(e){_classCallCheck(this,a),this.$el=e,this.$body=r("#body"),this._render(),this._addEvents()}return _createClass(a,[{key:"_render",value:function(){return function(){var r=e.params.isRemove,a=n.template(o,{__:t,isRemove:r});this.$el.append(a)}}()},{key:"_update",value:function(){return function(){var a=e.params.isRemove,i=n.template(o,{__:t,isRemove:a});r(".js-headerFooter",this.$el).replaceWith(i)}}()},{key:"_addEvents",value:function(){return function(){var t=this;this.$el.on("change.restoreHeaderFooter",".js-btn-headerFooterRestore input",function(n){var o=n.target,a=r(o).attr("data-type"),i=r(o).prop("checked"),s={header:e.params.isRemove.header,footer:e.params.isRemove.footer};s[a]=!i,s[a]?r(a+' .js-block-btn[data-event="removeHeaderFooter"]',t.$body).trigger("click",{force:!0}):r(window).trigger("restoreHeaderFooter",{$container:r(a),setting:s})}),r(window).on("removeHeaderFooter",this._update.bind(this))}}()},{key:"destroy",value:function(){return function(){this.$el.off(".backgroundSetting").remove()}}()}]),a}()});
//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map
