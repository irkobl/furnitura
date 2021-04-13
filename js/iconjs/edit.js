"use strict";define("widget-icon-edit",["jquery","generateIconEffects","popover","i18n","U","_","widget-icon-view","widget-icon-dialog","widget-icon-controls","stickyPopup","popup","uform","ul-framework","text!widgets/icon/html/group-hover-effects.html"],function(t,e,n,i,o,a,r,s,c,f,u,d,l,m){return{minCols:1,_getRenderParams:function(){return function(t){t(null,{generateIconEffects:e})}}(),init:function(){return function(){}}(),destroy:function(){return function(){}}(),createStyleSheet:function(){return function(){var n=e(this),i="icon-effects-"+this.id,o=t("style#"+i);return o.length&&o.html(n),n}}(),initView:function(){return function(){this.data.css=this.createStyleSheet(),r.open(this.id)}}(),edit:function(){return function(){var e=this,n=[];e.isEditing=!0,e.effects=["transparency","scale","rotation","brightness"],e.timingFunction=["linear","ease","ease-in","ease-out"],t("#"+e.id+' [class^="g-color"]').each(function(){n.push(t(this).css("color"))});var i=e.$el.closest(".ul-container").length?e.$el.closest(".ul-container").attr("data-theme-block"):e.$el.closest("[data-theme-block]").attr("data-theme-block");e.data.siteTheme=t("#body").attr("class"),e.data.blockTheme=i,require(["panelDialog"],function(n){n.show({context:e,templateUrl:"/widgets/icon/html/form.html",required:["widget-icon-form"],templateCss:["/css/require/widgets/icon.css"],templateData:{data:e.data},afterOpen:function(){return function(){e.hoverEffectsInit(),e.$animationForm=t("#icon-form-block .js-icon-animation-wrapper"),e.effects.forEach(function(t){e["$"+t+"Setting"]=e.$animationForm.find(".js-icon-popup-"+t)}),e._addButtonsEvents()}}(),beforeClose:function(){return function(){c.removeControls()}}()}),e.overlay.show({$el:e.$el,autohide:!0,close:function(){return function(){n.hide(),e.save(),e.render(),e.isEditing=!1}}()})})}}(),popupClose:function(){return function(){this.popupOpened&&u.hide()}}(),hoverEffectsInit:function(){return function(){var e=this;this.groupFold=l.groupFold({$el:t(".js-icon-animationSetting-groupFold"),titleStyle:"h2",titleDivider:{isWide:!0,isAlwaysShown:!0,isLastShown:!0},items:[{title:i("widgets.icon.hover effects"),attributes:"",template:m,templateData:{__:i,data:e.data,effects:e.effects,timingFunction:e.timingFunction},isFolded:!0,isDisabled:!1}]})}}(),effectsPopoverInit:function(){return function(e){var n=this,o=t(".js-icon-popup-"+e,n.$animationForm);f.open({title:i("widgets.icon."+e),data:"",templateUrl:"text!widgets/icon/html/popup-"+e+".html",templateData:{__:i,data:n.data,close:s,effect:e},wide:!1,saveBtn:!1,$targetEl:o,afterOpen:function(){return function(){l.range.init(),n.popoverOpened=e,n._addSlidersEvents(),n["$"+e+"Setting"].find(".ul-icon").addClass("edit")}}(),beforeClose:function(){return function(){n.popoverOpened="",n._removeSlidersEvents(),n["$"+e+"Setting"].find(".ul-icon").removeClass("edit")}}()})}}(),animationSettingInit:function(){return function(){var e=this,n=t(".js-icon-animationSetting");f.open({title:i("widgets.icon.animation settings"),data:"",templateUrl:"text!widgets/icon/html/animations.html",templateData:{__:i,data:e.data,timingFunction:e.timingFunction},wide:!1,saveBtn:!1,$targetEl:n.find(".ul-icon"),afterOpen:function(){return function(){n.addClass("edit"),l.range.init(),e._addSlidersEvents()}}(),beforeClose:function(){return function(){n.removeClass("edit"),e._removeSlidersEvents()}}()})}}(),_addButtonsEvents:function(){return function(){var e=this;e.$animationForm.on("click._animation",".js-icon-popup-action",function(){var n=this;e.effects.forEach(function(i){t(n).closest(e["$"+i+"Setting"]).length&&(e.popoverOpened===i?e.editEffectsPopover&&e.editEffectsPopover.hide():(e.editEffectsPopover&&e.editEffectsPopover.hide(),e.effectsPopoverInit(i)))})}),e.$animationForm.on("click._animation",".js-icon-animationSetting",function(){e.animationSettingInit()}),e.$animationForm.find("[ul-model]").on("change._animation",function(t){t.target.checked?e.effects.includes(t.target.name)&&e["$"+t.target.name+"Setting"].show():e.effects.includes(t.target.name)&&(e["$"+t.target.name+"Setting"].hide(),e.popoverOpened="",e.editEffectsPopover&&e.editEffectsPopover.hide())})}}(),_removeButtonsEvents:function(){return function(){this.$animationForm.off("._animation"),this.$animationForm.find("[ul-model]").off("._animation")}}(),_addSlidersEvents:function(){return function(){var e=this,n=t(".ul-icon-popover-settings");n.find("[ul-model]").on("change._popover",function(){e.data=t.extend(!0,e.data,d.formParse(n)),e.render()})}}(),_removeSlidersEvents:function(){return function(){var e=t(".ul-icon-popover-settings");e.find("[ul-model]").off("._popover")}}(),onAfterRender:function(){return function(){this.isEditing?!c.isShow&&c.addControls(this):c.removeControls()}}()}});
//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map
