"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};define("editor1",["U","i18n","editApi","panelDialog","imagelib","popover","link","linkPopover","stickyPopup","dynamicText"],function(t,e,o,n,i,r,l,a,s,p){var c={opt:null,initedNamespace:null,_formats:{h1:{tag:"h1",title:e("constructor.editor.header1")},h2:{tag:"h2",title:e("constructor.editor.header2")},h3:{tag:"h3",title:e("constructor.editor.header3")},h4:{tag:"h4",title:e("constructor.editor.header4")},p:{tag:"p",title:e("constructor.editor.normal")},h5:{tag:"h5",title:e("constructor.editor.important")},h6:{tag:"h6",title:e("constructor.editor.note")}},_initOptions:function(){return function(o){var n="g-theme-block-0"==o.$el.closest(".ul-container").attr("data-theme")?$("#body-fict").attr("class"):o.$el.closest(".ul-container").attr("data-theme"),i=["bold","italic","underline","strike","link"],r=t.params.siteCustomField;t.params.isULanding&&r&&r.dynamicText&&i.push("dynamictext"),this.opt=$.extend({$el:null,btnDebbuger:!1,image:!(o.$el.closest("footer, header").length||!o.$el.closest("[data-image]").attr("data-image")),links:!0,leftPanelControls:["format","colors","bold","italic","underline","strike","link","align","alignFull","lists"],formats:[this._formats.h2,this._formats.h3,this._formats.h4,this._formats.p,this._formats.h5,this._formats.h6],inlineControls:i,imageControls:["imgEdit","link","separator","align","separator","remove"],blockTheme:null==n?$("#body-fict").attr("class"):n,siteTheme:$("#body").attr("class"),useEnter:!0,defaultTag:"p",placeholder:e("constructor.begin write"),widgetName:e("widgets.wysiwyg.name"),autosave:1e4,simpleText:!1,deinitInsertPlaceholder:!0,initForEls:"",textlimit:100,linkTypes:["outer","inner"],save:function(){return function(){}}(),linkPopoverShow:function(){return function(){}}(),linkPopoverHide:function(){return function(){}}(),beforeOpen:function(){return function(){}}(),afterOpen:function(){return function(){}}(),beforeClose:function(){return function(){}}(),afterClose:function(){return function(){}}(),onKeydown:function(){return function(){}}(),changeHtml:function(){return function(){}}(),_setOptions:function(){return function(t){return t}}(),siteCustomFields:r},o)}}(),on:function(){return function(t){var e=this;if(t.initForEls&&t.initForEls.length){t.eventsNamespace||(t.eventsNamespace="editorInit");var o=t.eventsNamespace;$(document).off("mousedown.editorEv-"+o).on("mousedown.editorEv-"+o,function(n){var i=$(n.target);if(!(t.ignoredElements&&i.closest(t.ignoredElements).length||i.closest(".js-editableWithEditor").length)){var r=i.closest(t.initForEls);if(r.length){if(!r.hasClass("ul-editableWithEditor")){e.opt&&e.opt.$el&&null!=e.initedNamespace&&e.deinit(),t.$el=r;var l=null;"placeholder"!==r.attr("placeholder")&&(l=r.attr("placeholder")),t.placeholder=l||t.placeholder,e.init(t),e.initedNamespace=o}}else o==e.initedNamespace&&(e.initedNamespace=null,e.deinit())}})}}}(),off:function(){return function(t){var e=this;$(document).off("mousedown.editorEv-"+t),e.deinit()}}(),init:function(){return function(e){var n=this;if(e.$el.closest(".ul-widget").length&&e.$el.closest(".ul-widget").hasClass("js-w-remove"))return!1;n._initOptions(e),n._initOptions(n.opt._setOptions(e)),n.opt.beforeOpen(),n._createPanelsPopovers(),n._addEvents(),n._initApi(),n.opt.$el.addClass("ul-editableWithEditor"),n.oldData=o.text.getData(),n.opt.autosave&&(n.autosaveTimer=setInterval(function(){if(!o.text.stopped){var t=o.text.getData();t!==n.oldData&&(n.oldData=t,n.opt.save(t))}},n.opt.autosave));var i=t.params.siteCustomField;t.params.isULanding&&i&&i.dynamicText&&p.init(n.opt.$el,n.popover),n.opt.afterOpen.call(window,n.opt.$el)}}(),setFocusToEnd:function(){return function(){o.text.setFocusToEnd()}}(),_initApi:function(){return function(){var t=this;o.text.init({$el:t.opt.$el,useEnter:t.opt.useEnter,defaultTag:t.opt.defaultTag,placeholder:t.opt.placeholder,deinitInsertPlaceholder:t.opt.deinitInsertPlaceholder,textlimit:t.opt.textlimit,simpleText:t.opt.simpleText,changeHtml:t.opt.changeHtml,inlineControls:"object"===_typeof(t.opt.imageControls)&&t.opt.imageControls.length,cbApplyProp:function(){return function(){t.linkPopover&&t.linkPopover.hide()}}(),cbBeforeMouseDown:function(){return function(){t.linkPopover&&t.linkPopover.hide()}}(),cbMouseDown:function(){return function(){t.popover&&t.popover.hide(),t.linkPopover&&t.linkPopover.hide()}}(),cbMouseUp:function(){return function(e,n,i){if(n){var r=e.closest("a");r.length&&!r.find("img").length&&t.linkPopover&&(t.linkPopover.show({$target:r,onAfterOpen:function(){return function(){setTimeout(function(){window.getSelection().isCollapsed||t.linkPopover.hide()},0)}}()}),t.linkPopover.setCurrent({url:null==r?"":r.attr("href"),newWindow:null==r||"_blank"==r.attr("target")},!0))}else{var l=o.text._selection.getSelectedNodes().some(function(t){return t&&1==t.nodeType&&"IMG"===t.nodeName});if(l)return;t.popover&&t.popover.show({position:i,onAfterOpen:function(){return function(){t.linkPopover&&t.linkPopover.hide()}}()})}}}(),cbKeyDown:function(){return function(e,n){var i=o.text._selection.getSelectedNodes().some(function(t){return t&&1==t.nodeType&&"IMG"===t.nodeName});t.linkPopover&&t.linkPopover.hide(),i||(t.opt.onKeydown(e),t.popover&&(e?t.popover.hide():t.popover.show({position:n})))}}()})}}(),_addEvents:function(){return function(){var t=this;$(document).on("apiImgShowControls.editor",function(e,o){t.imgPopover&&t.imgPopover.show({$target:o.$img}),t.popover&&t.popover.hide()}).on("apiImgHideControls.editor",function(){t.imgPopover&&t.imgPopover.hide()}).on("click.editor",".js-editor-controls [data-cmd]",function(e){var n=!1;return t.linkPopoverVisible?(e.preventDefault(),!1):(1!=o.currentEdit.image&&(n=o.text._selection.getSelectedNodes().some(function(t){return t&&1==t.nodeType&&"IMG"===t.nodeName})),!n&&(t.apply($(this).attr("data-cmd"),$(this).attr("data-val")),void setTimeout(function(){t.popover&&(window.getSelection().isCollapsed?t.popover.hide():t.popover.show({position:o.text._selection.selectionRect}))},0)))}).on("apiLightControls.editor",function(t,e){var o=$(".js-editor-controls");$("[data-cmd]",o).removeClass("active").removeAttr("checked"),Object.keys(e).forEach(function(t){var n=$();n=e[t].length?$('[data-cmd="'+t+'"][data-val="'+e[t]+'"]',o):$('[data-cmd="'+t+'"]',o),n.each(function(){"INPUT"==this.tagName?$(this).prop("checked",!0):$(this).addClass("active")})})}).on("click.editor",".js-header-tag",function(){var n=$(this),i=t.opt.$el.closest(".ul-widget");n.addClass("edit"),s.open({title:e("constructor.thin settings"),templateUrl:"text!/widgets/wysiwyg/additionalEditorTag.html",templateData:{tag:i.attr("data-tag")||"h1",__:e},$targetEl:n,wide:!1,saveBtn:!1,afterOpen:function(){return function(){s.$container.addClass("js-editableWithEditor"),o.text._selection.save(),o.text.stop(),this.$radio=$('.js-editor-replaceTag input[type="radio"]'),this.$radio.on("change.additional",function(){i.attr("data-tag",$(this).val())}),t.popover.hide(),t.linkPopover.hide()}}(),close:function(){return function(){s.$container.removeClass("js-editableWithEditor"),o.text["continue"](),o.text._selection.restore(),n.removeClass("edit"),this.$radio.off(".additional")}}()})})}}(),_createPanelsPopovers:function(){return function(){var t=this;"object"===_typeof(t.opt.leftPanelControls)&&t.opt.leftPanelControls.length&&(n.show({required:[""],templateUrl:"/widgets/wysiwyg/additionalEditor1.html",templateCss:["/css/require/widgets/editorAdditional1.css"],templateData:{__:e,opts:t.opt},afterOpen:t.opt.leftPanelAfterOpen}),$("#ul-left-menu").addClass("js-editableWithEditor")),"object"===_typeof(t.opt.inlineControls)&&t.opt.inlineControls.length&&(t.popover=new r({screen:t.opt.$el,gravity:["top","bottom"],templateData:{controls:t.opt.inlineControls},templateUrl:"/widgets/wysiwyg/editorControls1.html",onAfterOpen:function(){return function(){t.linkPopover&&t.linkPopover.hide()}}()}),t.popover.$el.addClass("js-editableWithEditor")),"object"===_typeof(t.opt.imageControls)&&t.opt.imageControls.length&&t.opt.image&&(t.imgPopover=new r({screen:t.opt.$el,gravity:["top","bottom"],templateData:{controls:t.opt.imageControls},templateUrl:"/widgets/wysiwyg/editorControls1.html",onAfterOpen:function(){return function(){t.linkPopover&&t.linkPopover.hide()}}()}),t.imgPopover.$el.addClass("js-editableWithEditor")),t.opt.links&&(t.linkPopover=new a({screen:c.opt.$el,types:t.opt.linkTypes,removeBtn:!0,customEvents:!0,onEdit:function(){return function(){t.apply("link","dialog")}}(),onRemove:function(){return function(){t.apply("link","dialog"),$(document).trigger("editorSetLink",{href:""})}}(),apply:function(){return function(t){$(document).trigger("editorSetLink",t)}}(),cbHide:function(){return function(){t.linkPopoverVisible&&(t.linkPopoverInsertCbClose&&t.linkPopoverInsertCbClose(),t.linkPopoverVisible=!1,t.opt.linkPopoverHide())}}(),cbShow:function(){return function(){t.opt.linkPopoverShow(),t.linkPopoverVisible=!0,t.linkPopover.popover.$el.addClass("js-editableWithEditor")}}()}))}}(),apply:function(){return function(t,e){"dialog"==e?(this._insert[t](),this.popover&&this.popover.hide(),this.imgPopover&&this.imgPopover.hide()):o.apply(t,e)}}(),_insert:{link:function(){return function(){o.insert({type:"link",open:function(){return function(t,e,o){c.popover&&c.popover.hide(),c.imgPopover&&c.imgPopover.hide(),null==o.$link?(c.linkPopover.setCurrent({url:null,newWindow:!1},!0),c.linkPopover._switchPage("edit","inner")):(c.linkPopover.setCurrent({url:o.$link.attr("href"),newWindow:!("_blank"!=o.$link.attr("target"))},!0),c.linkPopover._switchPage("edit")),c.linkPopover.show({$target:o.$target}),c.linkPopoverInsertCbClose=e,$(document).one("editorSetLink.insert",function(e,o){t(o)})}}(),close:function(){return function(){$(document).off(".insert"),c.linkPopoverInsertCbClose=null}}()})}}(),image:function(){return function(){o.insert({type:"image",open:function(){return function(t,e){return c.popover&&c.popover.hide(),c.imgPopover&&c.imgPopover.hide(),i.open({multiSelect:!1,apply:function(){return function(e){t(e[0].origin)}}(),close:function(){return function(){e()}}()}),$("#ul-imagelib").addClass("js-editableWithEditor"),$("#ul-imagelib")}}()})}}()},insertPlaceholder:function(){return function(t){o.text.insertPlaceholder(t)}}(),save:function(){return function(){var t=this;t.opt.save(o.text.getData())}}(),deinit:function(){return function(){var e=this;if(e.opt&&null!=e.opt){var i=t.params.siteCustomField;t.params.isULanding&&i&&i.dynamicText&&p.deinit();var r=o.text.getData();e.opt.beforeClose(e.opt.$el,r),e.opt.$el.removeClass("ul-editableWithEditor"),$(document).off(".editor"),$(document).off("apiLightControls.editor"),e.linkPopover&&e.opt.links&&(e.linkPopover.destroy(),e.linkPopover=null),"object"===_typeof(e.opt.leftPanelControls)&&e.opt.leftPanelControls.length&&n.hide(),e.imgPopover&&(e.imgPopover.hide(),e.imgPopover=null),e.popover&&(e.popover.hide(),e.popover=null),$("#ul-left-menu").removeClass("js-editableWithEditor");var l=o.text.getData();clearInterval(e.autosaveTimer),e.opt.save(l),e.opt.afterClose(),e.opt=null,o.text.deinit()}}}()};return c});
//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map
