"use strict";define("widget-feedBack-edit",["jquery","editor1","U","_","uform","waitall","widget-feedBack-view","i18n","bowser"],function(e,t,n,i,o,s,r,a,u){return{init:function(){return function(){}}(),initView:function(){return function(e,t){var n=this;r.open(e,t),n.initPlaceholderVals()}}(),setEditableSubmit:function(){return function(){var t=this,n=e("button.ul-w-feedBack-submit",t.$el),i=n.text();if(n.on("click",function(e){e.preventDefault()}),u.firefox){var o=u.version.match(/^(\d*)\./);if(!(o&&42<=parseInt(o[1],10)))return;n.addClass("ul-w-feedBack-submitTitle")}else n.html('<div class="ul-w-feedBack-submitTitle">'+i+"</div>");n.addClass("ul-w-feedBack-submitAfter ul-w-feedBack-submitBefore")}}(),edit:function(){return function(){var i=this;i.setEditableSubmit(),i.$titles=e(".ul-editor-wrapper.clearfix"),i.initPlaceholderVals(),e(document).on("change.placeholder",".ul-widget-feedBack-form-control",function(){i.savePlaceholderVals()});var o=e(".js-feedBack-userAgreement").html();t.on({initForEls:".js-feedBack-userAgreement",image:!1,defaultTag:"span",useEnter:!1,placeholder:"",leftPanelControls:!1,inlineControls:["link","bold","italic"],simpleText:!0,eventsNamespace:"feedbackUserAgreement",beforeClose:function(){return function(t,n){("&nbsp;"===n||0==e("<div>"+n+"</div>").text().replace(/\s/g,"").length)&&t.html(o)}}(),save:function(){return function(e){i.options.userAgreement.label=e.trim(),i.save()}}()}),t.on({initForEls:"#"+i.id+" .ul-w-feedBack-editable, .ul-w-feedBack-submitTitle",image:!1,defaultTag:"p",useEnter:!1,placeholder:a("constructor.begin write"),leftPanelControls:[],inlineControls:!1,simpleText:!0,eventsNamespace:"feedback",save:function(){return function(t){if(this.$el.hasClass("ul-w-feedBack-submitTitle"))i.options.submitTitle=t.replace(/\&nbsp\;/g," ");else{var o=this.$el.data("name"),s=t.replace(/\&nbsp\;/g," ").trim();"undefined"==typeof o?(i.options.inputs[this.$el.data("i")].title=s,e(document).trigger("changeInputs")):e.extend(!0,i.options,n.parse(o,s))}e(document).trigger("editorSave")}}()}),s(function(t){var o=t("userInfo"),s=t("design"),r=t("panel");e.get(n.sprintf("/sites/url/{siteUrl}/getUserInfo",[n.params.site]),{isULanding:n.params.isULanding},function(e){o(e[0],e[1])}),i.getDesigns(s),require(["panelDialog"],function(e){r(null,e)})},function(n,o){var s=o.panel;i.overlay.show({$el:i.$el,autohide:!0,close:function(){return function(){setTimeout(function(){t.off("feedback"),t.off("feedbackUserAgreement"),s.hide()},200)}}()}),i.userInfo=o.userInfo,i.options=e.extend({attachments:{},userAgreement:{}},i.options),s.show({context:i,title:"feedBack",templateUrl:"/widgets/feedBack/html/form.html",required:["widget-feedBack-form"],templateCss:["/css/require/empty-emails.css","/css/require/amoCRMLogo.css"],templateData:{data:i.data,opts:i.options,designs:o.design,canChangeDesign:i.canChangeDesign(),userInfo:o.userInfo},close:function(){return function(){e(document).off("mousedown.wysiwygFeedback"),i.save(function(){i.render()})}}()})})}}(),redraw:function(){return function(t,n){var i=this;t&&(i.data=e.extend(!0,i.data,t)),n&&(i.options=e.extend(!0,i.options,n)),i.render(function(){i.setEditableSubmit()})}}(),parseInputs:function(){return function(e){return e.inputs?Object.keys(e.inputs).map(function(t){return e.inputs[t]}):[]}}(),initPlaceholderVals:function(){return function(){var t=this;Object.keys(t.options).forEach(function(n){var i;"inputs"==n?Object.keys(t.options.inputs).forEach(function(n){i=e('[ul-model = "inputs.'+n+'"]',t.$el),i.length&&i.val(t.options.inputs[n].placeholder)}):(i=e('[ul-model = "'+n+'"]',t.$el),i.length&&i.val(t.options[n].placeholder))})}}(),savePlaceholderVals:function(){return function(){var e=this,t=o.formParse(e.$el);Object.keys(t).forEach(function(n){var i=t[n];e.options[n]&&"undefined"!=typeof e.options[n].placeholder&&(e.options[n].placeholder=i),"inputs"==n&&(e.options[n]=e.options[n].map(function(e,t){return e.placeholder=i[t],e}))})}}(),destroy:function(){return function(){}}(),close:function(){return function(){e(document).off("mousedown.wysiwygFeedback"),e(document).off("editorSave"),e(document).off("change.placeholder"),e(document).off("change.placeholder")}}()}});
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
