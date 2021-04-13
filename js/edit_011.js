"use strict";define("widget-social-edit",["jquery","_","i18n","U","waitall","editor","linkPopover","locale","icon-set-loader"],function(e,n,t,i,o,r,a,l,u){var s=["facebook","vkontakte","instagram","twitter","google","odnoklassniki","mailru","linkedin","yandex","youtube","viber","telegram","whatsapp","pinterest","tumblr"],c=["odnoklassniki","mailru","yandex"],d="ru"===l.get().slice(0,2)?[].concat(s):s.filter(function(e){return-1===c.indexOf(e)}),f={};return u.loadIconSet("fontAwesome"),{init:function(){return function(){}}(),initView:function(){return function(){var e=this;if(e.field&&!e.rendered&&f[e.field])return void(e.rendered=!0);e.field&&(f[e.field]=!0,e.rendered=!0);var n={},t=0;e.data.social=e.data.social.filter(function(e){return n[e.name]?(t++,!1):(n[e.name]=!0,!0)});var i=d.filter(function(n){return!e.data.social.some(function(e){return e.name===n})});(t||i.length)&&(i.forEach(function(n){e.data.social.push({name:n,visible:!1,href:"",target:!1})}),e.save(function(){e.redraw()}))}}(),edit:function(){return function(){var n=this;o(function(e){var t=e("designs"),i=e("panel");n.getDesigns(t),require(["panelDialog"],function(e){i(null,e)})},function(i,o){if(i)return void console.error(i);var l=o.panel,u=o.designs||{};n.overlay.show({$el:n.$el,autohide:!0,close:l.hide.bind(l)}),n.tooLate=!1,l.show({context:n,templateUrl:"/widgets/social/html/form.html",required:["widget-social-form"],templateData:{data:n.data,opts:n.options||{},canChangeDesign:n.canChangeDesign(),designs:u},close:function(){return function(){setTimeout(function(){n.linkPopover.hide()},500),n.tooLate=!0,e(document).off("mouseenter.socialEvent"),e(document).off("mousedown.socialEvent"),n.save(function(){n.redraw()})}}()}),e(document).on("mousedown.socialEvent",".ul-w-social-title",function(){r.isOpen()&&r.deinit();var i=e(this);r.init({$el:i,image:!1,defaultTag:"span",placeholder:t("constructor.begin write"),additionalPanel:!1,inlinePanel:!1,useEnter:!1,save:function(){return function(){n.data.title=i.text().trim(),e(document).trigger("editorSave")}}()})}),l.$el.on("click",function(){r.deinit()});var s=function(){return function(t,i){var o=null;return n.data.social.some(function(e){return e.name===t?(o=e,!0):void 0}),{$target:i,href:o.href||"/",apply:function(){return function(n){e('[ul-model="social.'+o.name+'.href"]',l.$el).val(n.href).trigger("keyup")}}()}}}(),c=function(){return function(){var t=e(this),i=t.attr("class").split(" ")[1].slice("ul-w-social-".length);n.linkPopover.hide();var o=s(i,t);n.linkPopover.show(o),n.linkPopover.setCurrent({url:"/"===o.href?void 0:o.href,newWindow:!0},!0),n.linkPopover.opt.apply=o.apply}}();e(document).on("mouseenter.socialEvent","#"+n.id+" .ul-w-social-item>a",c);var d=new a({$target:e("#"+n.id+" .ul-w-social-item>a"),showEvents:!0,newWindow:!0,types:["outer"],noLinkText:!1,cbOpenEdit:function(){return function(){d.$linkEdit.find(".js-linkPopover-newWindow").hide(),d.$linkEdit.find(".js-linkPopover-save").addClass("ul-margin-top-md"),e(document).off("mouseenter.socialEvent")}}(),cbHide:function(){return function(){n.tooLate||e(document).off("mouseenter.socialEvent").on("mouseenter.socialEvent","#"+n.id+" .ul-w-social-item>a",c)}}()});n.linkPopover=d})}}(),redraw:function(){return function(n,t){var i=this;n&&(i.data=e.extend(i.data,n)),t&&(i.options=e.extend(i.options,t)),i.render()}}(),destroy:function(){return function(){}}()}});
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
