"use strict";function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}define("constructor/events",["jquery","history","U","_","panelDialog","i18n","backgroundBlockVideo","popover","popup","js/edit/constructorActions/main","uform","lodash","ul-error"],function(e,t,o,n,i,r,l,a,s,c,d,u,g){var f={$body:e("#body"),_hidePartial:function(){return function(o){require(["panelPartials"],function(){var n={};n[o]=!0;var i=e("#js-panel-parials-settings, .js-super-switch");0<i.length&&e('[ul-model="'+o+'"]',i).prop("checked",!1),t.pushAndExec({act:"toggleWidgetInPartial",data:n})})}}(),_constructorEvents:function(){return function(){var t=this,s=this;l.addListeners(),s.$backClick=e(".js-back-click"),s.$body.off(".constructor"),s.isTemplateMaster&&s.$body.on("click.constructor",function(t){var o=e(t.target).closest(".ul-container");if(0<o.length){var n=o.classes();e(".ul-container",s.$body).removeClass("ul-container-active"),o.addClass("ul-container-active"),s.blockClasses.forEach(function(e){var t=n.indexOf(e);t>=0&&n.splice(t,1)}),e(document).trigger("selectBlock",{id:o.attr("id"),classname:n})}else e(document).trigger("unselectBlock")}),window.signals.hideWidget.listen(function(e){return new Promise(function(o){t._hidePartial(e),o()})}),window.signals.hideWidgetDevice.clear(),window.signals.deviceResize.clear(),window.signals.hideWidgetDevice.listen(function(t,o){return new Promise(function(n){var i=e("#"+t);i.find(".js-elements-controls").addClass("js-off-hover"),s.hideShowNode({target:o},i,"hideWidget"),n()})}),window.signals.deviceResize.listen(function(t){var o=12;return 12===t.resizeEl.target.size&&12===t.resizeEl.sibling.size&&(o=6),s.setColSize(e("#"+t.resizeEl.target.id),e("#"+t.resizeEl.sibling.id),o,o),new Promise(function(e){e()})});var d=function(){return function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e(),o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){},i=t.prop("tagName").toLowerCase();require(["text!/html/constructor/overlayHeaderFooterHide.html"],function(l){var a=e(n.template(l,{type:i,__:r})).appendTo(t),s=10,c=e(".js-block-overlay-cancel",a),d=e(".js-footerHeader-timer",a),u=e(".ul-headerFooter-controls",t);d.html(r("constructor.hideFooterHeader.timer",s)),u.addClass("hide-block-overlay-is-shown"),a.removeClass("hidden");var g=setInterval(function(){1==s?(clearInterval(g),u.removeClass("hide-block-overlay-is-shown"),a.addClass("hidden"),o(!0)):(s-=1,d.html(r("constructor.hideFooterHeader.timer",s)))},1e3);c.one("click.constructor",function(){clearInterval(g),o(!1),u.removeClass("hide-block-overlay-is-shown"),a.addClass("hidden")})})}}();e(window).on("restoreHeaderFooter",function(e,t){s.restoreHeaderFooter(t.$container,t.setting,t.opts)}),s.$body.on("keydown",function(e){return 9===e.keyCode?!1:void 0}).on("click.constructor",".js-hide-el",function(){var t=e(this).closest(".ul-widget").attr("id");s._hidePartial(t)}).on("click.constructor",".ul-edit-HeadFooter",function(){var t=e(this).closest("header,footer").prop("tagName").toLowerCase();s.openPartialSettingsPanel(t)}).on("click.constructor",".ul-disabled-overlay-headerFooter",function(){s.blockPanelHide()}).on("click.constructor",".js-block-btn",function(t){var l=arguments,u=e(this),f=u.attr("data-event"),v="json!/sites/url/"+o.params.site+"/displayPartialWidgets?v="+Math.random().toString().slice(2),h=o.constructor.deviceMode.device,p=[".ul-container","header","footer"].join(", "),b=u.closest(p);b.length||g.sendErrorOnServer({msg:"element not found for selector",selectorList:p,$targetButton:u});var k=s._getDataDeviceHiddenSetting(b)[h],m=n.filter(o.params.pages,function(e){return"common"===e._type}),y=[{"class":"star-stroke",event:"favorite",title:r("constructor.favorite-blocks.add block to favorites")},{"class":"pin",event:"pin",title:r("constructor.block-settings.pinned block settings")},{"class":"eye-close",event:"hide",title:r("constructor.block-settings.hide "+h)},{"class":"eye",event:"hide",title:r("constructor.block-settings.show")}],C={"class":"copying",event:"copyBlockToPage",title:r("constructor.copy to page.copy to another page")};1<m.length&&y.push(C);var w={actions:function(){return function(){b.$blockControls=b.find(".ul-block-controls"),b.$blockControls.length&&b.$blockControls.addClass("ul-block-controls-visible--forced"),s.actionsPopover=new a({stay_first:!1,gravity:["bottom","top"],templateUrl:"/html/constructor/blockSettings/actionsPopover.html",templateCss:"/css/require/actions-popover.css",templateData:{actions:y,hiddenBlock:k},onAfterOpen:function(){return function(){s.actionsPopover.$popoverOverlay=e('<div class="ul-block-settings-actions-overlay js-popover-overlay" ></div>'),s.actionsPopover.$el.after(s.actionsPopover.$popoverOverlay),s.actionsPopover.$wrapper=s.actionsPopover.$el.find(".ul-block-settings-actions"),s.actionsPopover.$actionsButton=u,s._addActionsEvents(s.actionsPopover,b)}}(),onBeforeClose:function(){return function(){b.$blockControls.length&&b.$blockControls.removeClass("ul-block-controls-visible--forced"),e(window).off(".actionsPopoverEvent"),delete s.actionsPopover}}(),$target:u}),s.actionsPopover.show()}}(),hide:function(){return function(){var e="hideBlock";b.is("header, footer")&&(e="hideHeaderFooter"),s.hideShowNode(t,b,e,!0)}}(),hideAll:function(){return function(){b.is("header, footer")&&s.hideShowNodeAll(t,b,"hideHeaderFooter",!0)}}(),settings:function(){return function(){s.openBlockSettingsStructureDialog(b.attr("id"),function(){},function(){})}}(),backgroundSettings:function(){return function(){s.openBlockSettingsBackgroundDialog(b.attr("id"),function(){},function(){})}}(),remove:function(){return function(){s.widgetGlobal.widgetsCollectionFull&&!s.copy&&b.is(".ul-container")&&(!b.hasClass("ul-container-overlay")&&s.blockPanelHide(),s.removeBlock(b))}}(),panel:function(){return function(){require([v],function(t){s.getBlockSettings("ul-id-special-404_block",function(o){i.show({context:{events:s,params:o},title:"Настройки блока",templateUrl:"/html/constructor/special/setting404.html",templateCss:["/css/require/blockSettings.css"],required:["blockSettingsFor404"],templateData:{__:r("constructor"),settings:o,widgets:t},afterOpen:function(){return function(){s.overlayBlock.show(e("#ul-id-special-404_block")),s.$backClick.attr("data-type-block",!0)}}(),close:function(){return function(){s.overlayBlock.hide(e("#ul-id-special-404_block")),s.$backClick.removeAttr("data-type-block")}}()})})})}}(),removeHeaderFooter:function(){return function(){var t=null;if(b.is("header"))t="header";else{if(!b.is("footer"))return;t="footer"}var n={header:o.params.isRemove.header,footer:o.params.isRemove.footer};e.extend(!0,n,_defineProperty({},t,!0)),l[1]&&l[1].force?s.removeHeaderFooter(b,n,{isForse:l[1].force,ignoreHist:l[1].ignoreHist}):d(b,function(e){e&&s.removeHeaderFooter(b,n)})}}(),restoreWidgets:function(){return function(){return s.restoreWidgets(t,b)}}(),copy:function(){return function(){if(s.widgetGlobal.widgetsCollectionFull){var t=b.index(),n=null;e.each(b.parent().children(".ul-container"),function(t,o){e(o).attr("id")===b.attr("id")&&(n=t)}),null===n?n=t:t=n,c.copyBlockToPage.copy(o.params.page,b.attr("id"),t+1)}}}()};return"function"==typeof w[f]?void w[f]():void g.sendErrorOnServer({msg:"Invalid event type",event:f})}).on("click.constructor",".ul-move-siteblanks",function(t){var o=e(t.currentTarget),n=o.closest(".ul-container");s.moveBlockToSiteBlank(n.prop("id"))}).on("setSiteSettings.constructor",function(e,t){s.setSiteSettings(t.id,t.settings)}).on("saveSiteSettings.constructor",function(e,t){s.saveSiteSettings(t.id,t.settings)}).on("getSiteSettingsData.constructor",function(e,t){t(s.getSiteSettingsData())}).on("updateSiteSettingsData.constructor",function(e,t){s.updateSiteSettingsData(t.settings),"function"==typeof t.cb&&t.cb()}).on("click.constructor",".ul-disabled-overlay",function(){s.blockPanelHide()}).on("mouseenter.colElement",".ul-row",function(t){var n=e(t.target).closest(".ul-row");if((e(t.target).hasClass("ul-elements-handler")||e(t.target).closest(".ul-elements-handler").length)&&!s.activeResize||"edit"===s.$body.attr("data-controls")&&"block"!==s.$body.attr("data-controls-mode"))return void s.destroyResizable(e(t.target).closest(".ul-col"));if(s.getDragStatus(),!s.activeDrag&&!s.activeResize||"block"===s.$body.attr("data-controls-mode")){if(~["special"].indexOf(o.params.pageType))return;var i=n.children(".ul-col");s.setResizeCol(i)}}).on("mouseleave.colElement",".ul-row",function(t){e(this).children().hasClass("ui-resizable-resizing")||s.destroyResizable(e(t.target).closest(".ul-col"))}).on("mouseenter.containerEl","footer, header, .ul-container",{constructor:s},s.eventContainerEnter).on("mouseleave.containerEl","footer, header, .ul-container",{constructor:s},s.eventContainerLeave).on("mouseenter.addDropTo",".ul-elements-handler, .ul-block-controls",function(t){var n,i=e(this).parent();if(!~["blog","special"].indexOf(o.params.pageType)&&(e(this).closest("#ul-content").length||e(this).parent().data("dropPositionFixed"))&&!e(this).closest(".ul-widget").hasClass(".ui-draggable"))if(!e(this).hasClass("ul-elements-controls")&&!e(this).hasClass("ul-elements-handler")||s.activeDrag){if(i.hasClass("ul-container")&&!s.activeDrag){n=i;var r=e(this).closest(".ul-col");s.dragEl(n,t,r,"block")}}else{if(n=e(this),!o.constructor.deviceMode.isPanelConstructorEditable)return;var r="widget";e(this).parent().data("dropPositionFixed")&&(r="absWidget"),s.dragEl(n.closest(".ul-widget"),t,n.closest(".ul-col"),r)}}).on("mouseleave.addDropTo",".ul-elements-handler, .ul-block-controls",function(){if(!s.activeDrag){var t=e(this);if((t.hasClass("ul-elements-controls")||t.hasClass("ul-elements-handler"))&&t.closest(".ul-widget").hasClass("ui-draggable"))t.hasClass("ui-draggable")&&t.draggable("destroy");else{var o=e(this).closest(".ul-container");o.hasClass("ul-container")&&o.hasClass("ui-draggable")&&o.draggable("destroy")}}}).on("changePage",function(){s.destroy()}).on("click.constructor",".js-floating-indicator",function(){var t=e(this).closest(".ul-container").attr("id");s._openPinSettings(t)}),e(document).on("click.fakeBack",".js-back-click",function(){var t=e(".ul-popup-overlay");t.length&&t.trigger("click.closePopup");var o=e(".ul-disabled-overlay",s.$body);s.$backClick.attr("data-type-block")?o.trigger("click.constructor"):o.trigger("click.overlayEvents")})}}(),_getHeaderFooterElement:function(){return function(t){var o=e(t.target).closest("header");return o.length||(o=e(t.target).closest("footer")),o}}(),eventContainerEnter:function(){return function(t){var o=t.data.constructor,n=e(t.target).closest(".ul-container");if((n.length||!o._getHeaderFooterElement(t).hasClass("isVisibilityEdit"))&&(e(".js-fake-index",o.$body).removeClass("js-fake-index"),o.getDragStatus(),!o.activeDrag&&!o.activeResize))if(n.length)e(".ul-headerFooter-controls-visible",o.$body).removeClass("ul-headerFooter-controls-visible"),e(".ul-block-controls-visible",o.$body).removeClass("ul-block-controls-visible"),e(".ul-block-controls",n).addClass("ul-block-controls-visible"),n.addClass("js-fake-index");else{e(".ul-headerFooter-controls-visible",o.$body).removeClass("ul-headerFooter-controls-visible"),e(".ul-block-controls-visible",o.$body).removeClass("ul-block-controls-visible");var i=o._getHeaderFooterElement(t);i.hasClass("ul-disabled-overlay-element")||(e(".ul-headerFooter-controls",i).addClass("ul-headerFooter-controls-visible"),i.addClass("js-fake-index"))}}}(),eventContainerLeave:function(){return function(t){var o=t.data.constructor,n=e(t.target).closest(".ul-container"),i=e(t.relatedTarget);if((n.length||!o._getHeaderFooterElement(t).hasClass("isVisibilityEdit"))&&(e(".js-fake-index",o.$body).removeClass("js-fake-index"),o.getDragStatus(),!o.activeDrag))if(n.length)n.attr("id")!==i.closest(".ul-container").attr("id")&&n.find(".ul-block-controls").removeClass("ul-block-controls-visible");else{var r=o._getHeaderFooterElement(t),l=i.closest("header").length?i.closest("header"):i.closest("footer");r.hasClass("ul-disabled-overlay-element")||r.get(0)===l.get(0)||e(".ul-headerFooter-controls",o.$body).removeClass("ul-headerFooter-controls-visible")}}}(),getDragStatus:function(){return function(){var e=this;e.activeDrag=o.page.dragEl&&!e.activeDrag?o.page.dragEl:o.page.dragEl}}(),_destroyEvents:function(){return function(){var t=this;e(document).off(".constructor"),t.$body.off(".addDropTo"),t.$body.off(".containerEl"),t.$body.off(".colElement"),t.$body.off(".constructor"),e(document).off("click.fakeBack",".js-back-click")}}(),_addActionsEvents:function(){return function(t,n){var i=this,r=n.attr("id");t.$root.on("click.actionsPopoverEvent",".js-popover-overlay",function(){t.hide()}).on("click.actionsPopoverEvent","#ul-action-copyBlockToPage",function(){i.widgetGlobal.widgetsCollectionFull&&c.copyBlockToPage.init({blockId:r,$btnClicked:e(this)})}).on("click.actionsPopoverEvent","#ul-action-favorite",function(){i.widgetGlobal.widgetsCollectionFull&&c.addBlockToFavorites(e(this),r)}).on("click.actionsPopoverEvent","#ul-action-pin",function(){i._openPinSettings(r)}).on("click.actionsPopoverEvent","#ul-action-hide",function(e){var r=o.constructor.deviceMode.device,l=t.$actionsButton.closest("header"),a=t.$actionsButton.closest("footer"),s=i._getDataDeviceHiddenSetting(n)[r],c="hideBlock";if(!n.length){if(!l.length&&!a.length)return;l.length&&(c="hideHeaderFooter",n=l),a.length&&(n=a,c="hideHeaderFooter")}i.hideShowNode(e,n,c,!0),t.$wrapper.attr("data-hiddenblock",!s)})}}(),_addFloatingBlockFormEvents:function(){return function(t,o){var n=this,i=this,l=t.$body,a=(l.find("#ul-enable-floating-checkbox"),l.find("#ul-enable-floating"),t.blockId),s=e("#"+a+" .js-floating-indicator");r("constructor.block-settings.pinned block");l.on("submit.floatingBlockFormEvent",function(e){e.preventDefault()}).on("change.floatingBlockFormEvent","input",function(r){e.extend(!0,o,d.formParse(t.$body));var l={floating:o};if("enabled"===e(r.target).attr("name")){if(o.enabled){l.is100vhEnabled=!1,e("#"+a).attr("data-is-100vh-enabled",!1);var c=e(".ul-floating");c.each(function(t,r){var l=null;l="undefined"==typeof i.blockSettings[r.id]?i.getFloatingBlockParams(e(r)):i.blockSettings[r.id].floating,l.position===o.position&&(e(r).removeClass("ul-floating"),e(r).find(".js-floating-indicator").addClass("hidden"),l.enabled=!1,n.saveBlockSettingsFloating(r.id,{floating:l}))})}e("#"+a).toggleClass("ul-floating"),s.toggleClass("hidden")}n.saveBlockSettingsFloating(t.blockId,l)})}}(),_openPinSettings:function(){return function(t){var o=this;o.getBlockSettings(t,function(i){o.blockSettings[t]=u.cloneDeep(i);var l=n.pick(i,["floating"]),a=l.floating;s.open({title:r("constructor.block-settings.pinned block.pb title"),templateData:{__:r,floating:a},$targetEl:e("#"+t+" .ul-block-handler"),wide:!1,saveBtn:!1,templateUrl:"text!/html/constructor/blockSettings/floating-block-modal.html",afterOpen:function(){return function(){d.formFill(s.$body,a),s.blockId=t,o._addFloatingBlockFormEvents(s,a)}}(),beforeClose:function(){return function(){e(window).off(".floatingBlockFormEvent")}}()}),o.actionsPopover&&o.actionsPopover.hide()})}}()};return f});
//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map
