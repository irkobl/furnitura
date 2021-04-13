"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n,s=0;s<e.length;s++)n=e[s],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();define(["U","i18n","jquery","lodash","stickyPopup","js/constructor/panels/panel-design/site-settings/animation","text!html/share/constructor/panels/siteSettings.html"],function(t,e,n,s,i,a,c){var r=function(){function r(t){var e=this,s=t.$el,i=t.colorSettings;_classCallCheck(this,r),this.$el=s,this.$body=n("#body"),this.colorSettings=i,this.params=this.colorSettings.params,this._render(),this._addEvents(),a.init({$form:this.$el,callbacks:{onChange:function(){return function(t){i.updateSettings({animation:t}),e._save()}}()}}),a.updateSettings(this.$el,{isEnabled:this.params.animation.isEnabled,excludedPages:this.params.animation.excludedPages})}return _createClass(r,[{key:"_cssClasses",get:function(){return function(){return{btnSwitherUp:"js-btn-up",btnSwitherCecutient:"js-btn-cecutient",cecutientDesc:"js-cecutient-desc",cecutientSettings:"js-cecutient-settings"}}}()},{key:"_Constant",get:function(){return function(){return{namespace:"typography"}}}()}]),_createClass(r,[{key:"_render",value:function(){return function(){var n=s.template(c,{__:e,pageTheme:t.params.pageTheme});this.$el.append(n)}}()},{key:"_addEvents",value:function(){return function(){var s=this,a=this.colorSettings;n("."+this._cssClasses.btnSwitherUp,this.$el).find("input").on("change."+this._Constant.namespace,function(t){var e=n(t.target).is(":checked");a.updateSettings({upbutton:e}),s._save()}),n("."+this._cssClasses.btnSwitherCecutient,this.$el).find("input").on("change."+this._Constant.namespace,function(e){var i=n(e.target).is(":checked");n("."+s._cssClasses.cecutientDesc)[i?"fadeIn":"fadeOut"](),t.params.pageTheme.cecutient=i,a.updateSettings({cecutient:i}),s._save()}),n("."+this._cssClasses.cecutientSettings).on("click."+this._Constant.namespace,function(a){a.preventDefault(),i.open({context:s,title:e("constructor.thin settings"),required:"cecutientSetting",templateUrl:"text!./html/constructor/cecutient.html",templateData:{siteTheme:t.params.siteTheme,opt:s.params.cecutientSetting,__:e("constructor"),device:t.constructor.deviceMode.device},$targetEl:n(a.target),saveBtn:!1,wide:!1})})}}()},{key:"_save",value:function(){return function(){this.$body.trigger("saveSiteSettings",{id:null,settings:this.colorSettings.getSettings()})}}()},{key:"destroy",value:function(){return function(){this.$el.remove()}}()}]),r}();return r});
//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map

//# sourceMappingURL=site-settings.js.map
