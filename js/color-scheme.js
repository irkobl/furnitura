"use strict";function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,o){for(var t,c=0;c<o.length;c++)t=o[c],t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}return function(o,t,c){return t&&e(o.prototype,t),c&&e(o,c),o}}();define(["U","i18n","jquery","lodash","asyncjs","nf","history","colorSettingsUpdater","pipette","billing/feature-availability","text!html/constructor/design/colorSchemeItem.html","text!html/share/constructor/panels/colorShema.html"],function(e,o,t,c,n,s,r,i,l,a,m,u){var d=function(){function d(o){var c=this;_classCallCheck(this,d),this.$el=o,this.$form=this.$el.closest(".js-panelDesign-parent"),this.$body=t("#body"),this._render(),i.loadSettings().then(function(e){c._updatePanelSiteSetting(e)}),e.params.isAllowedPipette&&(!l.colorScheme&&(l.colorScheme=t(".js-custom-cs-container .ul-color-scheme").data("customColorScheme")),this._drawCustomColorSchemes(l.colorScheme)),this._addEvents()}return _createClass(d,[{key:"_cssClasses",get:function(){return function(){return{siteSettingsPalette:"js-site-settings-palette",createCustom:"js-create-custom-cs",addCustom:"js-add-custom-cs"}}}()},{key:"_Constant",get:function(){return function(){return{namespace:"color-scheme"}}}()}]),_createClass(d,[{key:"_render",value:function(){return function(){var t=c.template(u,{__:o,params:e.params});this.$el.append(t)}}()},{key:"_addEvents",value:function(){return function(){var c=this,m=this;if(m._removeEvents(),l.loadStencil(function(){t(c.$form).on("click."+c._Constant.namespace,"."+c._cssClasses.siteSettingsPalette,function(){m._selectColorScheme(t(this))})}),t(document).on("drawCustomColorSchemes."+this._Constant.namespace,function(e,o){c._drawCustomColorSchemes(o.data)}),t(document).on("editCustomColorSchemeUndo."+this._Constant.namespace,function(e,o){var c={};n.series([function(e){"delete"===o.data.action&&o.data.index<o.data.cCSCurrentUndo?(m.customColorSchemeCurrent++,c.customColorSchemeCurrent=m.customColorSchemeCurrent,m.$body.trigger("getSiteSettingsData",function(o){o.customColorSchemeCurrent=m.customColorSchemeCurrent,m.$body.trigger("updateSiteSettingsData",{settings:o,cb:e})})):e()}],function(){l.colorScheme=t.extend(!0,[],o.data.colorSchemeUndo),l.save(c,function(){"create"===o.data.action&&m.isEditMode&&m.colorSchemeIndex===o.data.colorSchemeRedo.length-1&&m._showDesignPanel(),"edit"===o.data.action&&m.isEditMode&&m.colorSchemeIndex===o.data.index&&(m._fillColorSchemePanel({scheme:m.colorSchemeIndex,block:m.colorSchemeBlockIndex}),l.fillStencil(l.colorScheme,o.data.index,Function.ok(function(e){l.setColorSchemeCss(e)}))),m.isEditMode||null===o.data.cCSCurrentUndo||l.addConstructorCssLink(),m._drawCustomColorSchemes(l.colorScheme),t(document).trigger("siteChanged"),o.waitSlot()})})}),t(document).on("editCustomColorSchemeRedo."+this._Constant.namespace,function(e,o){var c={};n.series([function(e){"delete"===o.data.action&&o.data.index<o.data.cCSCurrentRedo?(m.customColorSchemeCurrent--,c.customColorSchemeCurrent=m.customColorSchemeCurrent,i.updateSettings({customColorSchemeCurrent:m.customColorSchemeCurrent}),m.$body.trigger("getSiteSettingsData",function(o){o.customColorSchemeCurrent=m.customColorSchemeCurrent,m.$body.trigger("updateSiteSettingsData",{settings:o,cb:e})})):e()}],function(){l.colorScheme=t.extend(!0,[],o.data.colorSchemeRedo),l.save(c,function(){"delete"===o.data.action&&m.isEditMode&&m.colorSchemeIndex===o.data.index&&m._showDesignPanel(),"edit"===o.data.action&&m.isEditMode&&m.colorSchemeIndex===o.data.index&&(m._fillColorSchemePanel({scheme:m.colorSchemeIndex,block:m.colorSchemeBlockIndex}),l.fillStencil(l.colorScheme,o.data.index,Function.ok(function(e){l.setColorSchemeCss(e)}))),m.isEditMode||null===o.data.cCSCurrentRedo||l.addConstructorCssLink(),m._drawCustomColorSchemes(l.colorScheme),t(document).trigger("siteChanged"),o.waitSlot()})})}),t(document).on("updatePanelSiteSetting."+this._Constant.namespace,function(e,o){i.params=o.data,c._updatePanelSiteSetting(o.data)}),t("."+this._cssClasses.createCustom+", ."+this._cssClasses.addCustom,this.$form).on("click."+this._Constant.namespace,function(e){a.check("pipette",{showPopupIfNotAvailable:!0,$popupTargetEl:t(e.target)},function(e){e&&c._cloneColorScheme(function(){c._selectColorScheme(t(".js-site-settings-palette",c.$form).last())})})}),t(this.$form).on("click.panelDesign",".js-clone-cs",function(e){e.stopPropagation(),a.check("pipette",{showPopupIfNotAvailable:!0,$popupTargetEl:t(c)},function(o){o&&c._cloneColorScheme({scheme:t(e.target).closest(".js-site-settings-palette")},function(){c._selectColorScheme(t(".js-site-settings-palette",c.$form).last())})})}),e.params.isAllowedPipette){t(this.$form).on("click."+this._Constant.namespace,".js-delete-custom-cs",function(e){e.stopPropagation();var n=t(e.target).closest(".js-site-settings-palette").data("customColorSchemeCurrent");s.confirm({title:o("constructor.do you want to remove the cs"),color:"ul-button-red",invert:!0,ok:o("all.remove"),cancel:"",okCb:function(){return function(){c._deleteCustomColorScheme(n)}}()})}),t(".js-colorSchemePanelBack",this.$form).on("click.panelDesign",function(){c._showDesignPanel()}),t(".js-show-pipette-preview",this.$form).on("click.panelDesign",function(){c._showPipettePreview(),c._setPreviewBlock(c.colorSchemeBlockIndex+1),localStorage.hidePipettePreview=!1}),t(".js-hide-pipette-preview",this.$form).on("click.panelDesign",function(){c._hidePipettePreview(),localStorage.hidePipettePreview=!0}),t(this.$form).on("click.panelDesign",".js-edit-custom-cs",function(e){e.stopPropagation();var o=t(e.target).closest(".js-site-settings-palette").data("customColorSchemeCurrent");c._editCustomColorScheme(o)});var u=this;t(".ul-colorpicker-custom",this.$form).on("click.panelDesign",function(){var o=t("li",t(this)).eq(0);u.colorPicker({onHide:function(){return function(){var e=t.extend(!0,[],l.colorScheme);u._saveBlockColors(l.colorScheme),r.pushAndExec({act:"editCustomColorScheme",data:{action:"edit",index:u.colorSchemeIndex,cCSCurrentRedo:u.customColorSchemeCurrent,cCSCurrentUndo:u.customColorSchemeCurrent,colorSchemeRedo:t.extend(!0,[],l.colorScheme),colorSchemeUndo:e}})}}(),onChange:e.limiter(function(e){o.css("background",e),o.data("color",e),o.hasClass("ul-custom-background-1")&&u._paintCSBlockSelectBtn(t(".ul-background-custom-color.active",u.$form),e);var c=t.extend(!0,[],l.colorScheme);u._saveBlockColors(c),l.fillStencil(c,u.colorSchemeIndex,function(e){console.error(e)}.ok(function(e){l.setColorSchemeCss(e)}))},100)},o,o.data("color"))}),t(".ul-background-custom-color",this.$form).on("click.panelDesign",function(e){c._fillColorSchemePanelBlock(t(e.target).data("index"))}),t(".js-pipette-howtouse",this.$form).on("mouseenter.panelDesign",function(){t(".js-pipette-howtouse-popup",c.$form).removeClass("hidden").hide().fadeIn(300)}),t(".js-pipette-howtouse",this.$form).on("mouseout.panelDesign",function(){t(".js-pipette-howtouse-popup",c.$form).addClass("hidden")}),this.$body.on("mousedown.panelDesign, click.panelDesign",".js-pipette-preview",function(e){e.stopPropagation()}),this.$form.on("click",".js-pipette-preview-cont",function(){t(".js-hide-pipette-preview",c.$form).trigger("click")}),e.params.isTemplateServer&&t(".js-preview-color-block",u.$form).on("change.panelDesign",function(){var e=t(this).val(),o=t.extend(!0,[],l.colorScheme);l.colorScheme[u.colorSchemeIndex].previewColorBlock=e,r.pushAndExec({act:"editCustomColorScheme",data:{action:"edit",index:u.colorSchemeIndex,cCSCurrentRedo:u.customColorSchemeCurrent,cCSCurrentUndo:u.customColorSchemeCurrent,colorSchemeRedo:t.extend(!0,[],l.colorScheme),colorSchemeUndo:o}})})}setTimeout(function(){var e=t(".js-site-settings-palette.active");e.length&&e.attr("data-custom-color-scheme-current")&&c._fillColorSchemePanel({scheme:parseInt(e.attr("data-custom-color-scheme-current"),10)})},0)}}()},{key:"_cloneColorScheme",value:function(){return function(e,o){var c=this;if(this.isProcessCloneColorScheme)return!1;this.isProcessCloneColorScheme=!0,"function"==typeof e&&(o=e);var n=t(".js-site-settings-palette.active",this.$form);e.scheme&&(n=e.scheme);var s=t.extend(!0,{},n.data("colorScheme"));n.data("isCustomColorScheme")&&(s=t.extend(!0,{},l.colorScheme[n.data("customColorSchemeCurrent")]));var i=t.extend(!0,[],l.colorScheme);l.colorScheme.push(s),window.dispatch(window.actions.addCustom(s)),r.pushAndExec({act:"editCustomColorScheme",data:{action:"create",cCSCurrentRedo:this.customColorSchemeCurrent,cCSCurrentUndo:this.customColorSchemeCurrent,colorSchemeRedo:t.extend(!0,[],l.colorScheme),colorSchemeUndo:i}},o.ok(function(){c.isProcessCloneColorScheme=!1,o&&o()}))}}()},{key:"_selectColorScheme",value:function(){return function(e){return!e.hasClass("active")&&void i.updateSettings({theme:e.data("isCustomColorScheme")?"g-theme-site-1":e.data("theme"),customColorScheme:!!e.data("isCustomColorScheme"),customColorSchemeCurrent:"undefined"==typeof e.data("customColorSchemeCurrent")?null:e.data("customColorSchemeCurrent")}).then(function(){i.saveSettings("changeCustomScheme")})}}()},{key:"_drawCustomColorSchemes",value:function(){return function(e){var n=this;t(".js-custom-cs-container .ul-color-scheme",n.$form).html(""),e.forEach(function(e,s){t(".js-custom-cs-container .ul-color-scheme",n.$form).append(c.template(m,{analyticsHandler:"",i:s,__:o})),[0,1,2,3].forEach(function(o){t('[data-custom-color-scheme-current="'+s+'"] .g-theme-block-'+o,n.$form).css("background",e.blocks[o].value)})}),n.customColorScheme&&null!==n.customColorSchemeCurrent&&(window.dispatch(window.actions.setCustom(n.customColorSchemeCurrent,e[n.customColorSchemeCurrent])),t(".js-custom-cs-container .js-site-settings-palette",n.$form).removeClass("active"),t(".js-custom-cs-container .js-site-settings-palette",n.$form).eq(n.customColorSchemeCurrent).addClass("active")),n._checkAllowedActions()}}()},{key:"_checkAllowedActions",value:function(){return function(){var o=this;l.colorScheme.length?(t(".js-custom-cs-container",o.$form).removeClass("hidden"),t(".js-create-custom-cs",o.$form).addClass("hidden"),3>l.colorScheme.length||e.params.isTemplateServer?(t(".js-add-custom-cs",o.$form).removeClass("hidden"),t(".js-edit-clone",o.$form).removeClass("hidden"),t(".js-clone-cs",o.$form).removeClass("hidden")):(t(".js-add-custom-cs",o.$form).addClass("hidden"),t(".js-edit-clone",o.$form).addClass("hidden"),t(".js-clone-cs",o.$form).addClass("hidden"))):(t(".js-custom-cs-container",o.$form).addClass("hidden"),t(".js-add-custom-cs",o.$form).addClass("hidden"),t(".js-create-custom-cs",o.$form).removeClass("hidden"),t(".js-edit-clone",o.$form).removeClass("hidden"),t(".js-clone-cs",o.$form).removeClass("hidden")),e.params.isTemplateServer&&(1===l.colorScheme.length?t(".js-delete-custom-cs").addClass("hidden"):t(".js-delete-custom-cs").removeClass("hidden"))}}()},{key:"_updatePanelSiteSetting",value:function(){return function(e){var o=this;e&&(t(".ul-color-scheme",o.$form).find(".active").removeClass("active"),o.customColorScheme=e.customColorScheme,e.customColorScheme?(o.customColorSchemeCurrent=e.customColorSchemeCurrent,t('[data-custom-color-scheme-current="'+e.customColorSchemeCurrent+'"]',o.$form).addClass("active")):(o.customColorSchemeCurrent=null,t('[data-theme="'+e.theme+'"]',o.$form).addClass("active")))}}()},{key:"_deleteCustomColorScheme",value:function(){return function(e){var o=this,c=t.extend(!0,[],l.colorScheme),n=o.customColorSchemeCurrent,s=t(".js-site-settings-palette.active",o.$form),i=t(".js-site-settings-palette",o.$form).index(s),a=t(".js-custom-cs-container .js-site-settings-palette").eq(e),m=t(".js-site-settings-palette",o.$form).index(a);r.beginAtomic();var u=function(){return function(o){l.colorScheme.splice(e,1),r.pushAndExec({act:"editCustomColorScheme",data:{action:"delete",index:e,cCSCurrentRedo:o,cCSCurrentUndo:n,colorSchemeRedo:t.extend(!0,[],l.colorScheme),colorSchemeUndo:c}})}}();m===i?(o._selectColorScheme(t(".js-site-settings-palette",o.$form).eq(m-1)),t(document).one("siteChanged.siteSetting",function(e,o){o&&"undefined"!=typeof o.customColorScheme&&(u(o.customColorSchemeCurrent),r.endAtomic())})):(u(o.customColorSchemeCurrent),r.endAtomic())}}()},{key:"_showDesignPanel",value:function(){return function(){var o=this;o.$form.css("transition-property","none").removeClass(o.visibleClass),t("#ul-panelDesign-colorScheme").addClass("hidden"),t("#ul-panelDesign-design").removeClass("hidden"),setTimeout(function(){o.$form.css("transition-property","").addClass(o.visibleClass)},0),l.destroyColorSchemeEditMode(),o.isEditMode=!1,t(".js-custom-cs-container .js-site-settings-palette.active",o.$form).length&&l.addConstructorCssLink(),e.params.isAllowedPipette&&o._drawCustomColorSchemes(l.colorScheme),o._hidePipettePreview()}}()},{key:"_hidePipettePreview",value:function(){return function(){var e=this;t(".js-pipette-preview-cont",e.$body).fadeOut(200,function(){t(this).remove()}),t(".js-hide-pipette-preview",e.$form).addClass("hidden"),t(".js-show-pipette-preview",e.$form).removeClass("hidden")}}()},{key:"_showPipettePreview",value:function(){return function(){var e=this;e._hidePipettePreview(),t("#body-fict",e.$body).append(t(".js-pipette-preview-html",e.$form).html()),t(".js-pipette-preview-cont").hide().fadeIn(200),t(".js-show-pipette-preview",e.$form).addClass("hidden"),t(".js-hide-pipette-preview",e.$form).removeClass("hidden")}}()},{key:"_setPreviewBlock",value:function(){return function(e){var o=this;[1,2,3,4,5].forEach(function(e){t("#body-fict .js-pipette-preview",o.$body).removeClass("g-theme-block-"+e)}),t("#body-fict .js-pipette-preview",o.$body).addClass("g-theme-block-"+e).attr("data-theme-block",'{"desktop":"g-theme-block-'+e+'", "tablet":"g-theme-block-'+e+'", "phone":"g-theme-block-'+e+'"}'),5===e?i.params.background.image&&t("#body-fict .js-pipette-preview",o.$body).css("background-image",'url("'+i.params.background.image+'")'):t("#body-fict .js-pipette-preview",o.$body).css("background-image","none")}}()},{key:"_editCustomColorScheme",value:function(){return function(e){var o=this;o.isEditMode=!0,l.fillStencil(l.colorScheme,e,Function.ok(function(t){l.activateColorSchemeEditMode(t),o._showColorSchemePanel(),o._fillColorSchemePanel({scheme:e})}))}}()},{key:"_showColorSchemePanel",value:function(){return function(){var e=this;e.$form.css("transition-property","none").removeClass(e.visibleClass),t("#ul-panelDesign-design").addClass("hidden"),t("#ul-panelDesign-colorScheme").removeClass("hidden"),setTimeout(function(){e.$form.css("transition-property","").addClass(e.visibleClass)},0),"true"!==localStorage.hidePipettePreview&&e._showPipettePreview()}}()},{key:"_fillColorSchemePanel",value:function(){return function(o){var c=this;o=t.extend({scheme:0,block:0},o);var n=l.colorScheme[o.scheme];c.colorSchemeIndex=o.scheme,n.blocks.forEach(function(e,o){c._paintCSBlockSelectBtn(t(".ul-bg"+(o+1),c.$form),e.value),4===o&&i.params.background.image&&t(".ul-bg"+(o+1),c.$form).css("background",'url("'+i.params.background.image+'")')}),c._fillColorSchemePanelBlock(o.block),e.params.isTemplateServer&&t(".js-preview-color-block",c.$form).val(l.colorScheme[c.colorSchemeIndex].previewColorBlock)}}()},{key:"_fillColorSchemePanelBlock",value:function(){return function(e){var o=this,c=l.colorScheme[o.colorSchemeIndex].blocks[e];o.colorSchemeBlockIndex=e,t(".ul-background-custom-color.active",o.$form).removeClass("active"),t(".ul-background-custom-color",o.$form).eq(e).addClass("active"),o._setPreviewBlock(e+1),t(".ul-custom-background-1",o.$form).css("background",c.value).data("color",c.value),c.textColors.forEach(function(e,c){t(".ul-custom-text-"+(c+1),o.$form).css("background",e).data("color",e)}),4===e?t(".js-cs-background-preview",o.$form).addClass("hidden"):t(".js-cs-background-preview",o.$form).removeClass("hidden")}}()},{key:"colorPicker",value:function(){return function(e,o,c){require(["ukit-colorpicker"],function(){t("body").append('<div class="ul-colorpicker-layout"><div class="ul-colorpicker"></div></div>'),t(".ul-colorpicker").ColorPicker({color:c,flat:!0,onHide:function(){return function(o,c){c="#"+c,e.onHide(c),setTimeout(function(){t(".ul-colorpicker-layout").remove()},0)}}(),onChange:function(){return function(o,t){t="#"+t,e.onChange(t)}}()});var n=o.offset().top+o.outerHeight()+8,s=o.offset().left-10;t(".ul-colorpicker").css({top:n,left:s}),t(".ul-colorpicker").ColorPickerShow()})}}()},{key:"_saveBlockColors",value:function(){return function(e){var o=this;e[o.colorSchemeIndex].blocks[o.colorSchemeBlockIndex].value=t(".ul-custom-background-1",o.$form).data("color"),[0,1,2].forEach(function(c){e[o.colorSchemeIndex].blocks[o.colorSchemeBlockIndex].textColors[c]=t(".ul-custom-text-"+(c+1),o.$form).data("color")}),window.dispatch(window.actions.setCustom(o.colorSchemeIndex,e[o.colorSchemeIndex]))}}()},{key:"_paintCSBlockSelectBtn",value:function(){return function(e,o){e.css("background",o).css("outline-color",o),t(".ul-colorpicker-custom-triangle",e).css("border-top-color",o)}}()},{key:"_removeEvents",value:function(){return function(){t(document).off("."+this._Constant.namespace),this.$form.off("."+this._Constant.namespace),this.$form.off(".panelDesign"),this.$body.off(".panelDesign"),t("."+this._cssClasses.createCustom+", ."+this._cssClasses.addCustom,this.$form).off("."+this._Constant.namespace),t(".js-colorSchemePanelBack",this.$form).off(".panelDesign"),t(".js-show-pipette-preview",this.$form).off(".panelDesign"),t(".js-hide-pipette-preview",this.$form).off(".panelDesign"),t(".ul-colorpicker-custom",this.$form).off(".panelDesign"),t(".ul-background-custom-color",this.$form).off(".panelDesign"),t(".js-pipette-howtouse",this.$form).off(".panelDesign"),t(".js-preview-color-block",this.$form).off(".panelDesign")}}()},{key:"destroy",value:function(){return function(){this._hidePipettePreview(),l.destroyColorSchemeEditMode(),this.customColorScheme&&l.addConstructorCssLink(),this._removeEvents(),this.$el.remove()}}()}]),d}();return d});
//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map

//# sourceMappingURL=color-scheme.js.map
