"use strict";define("nf",["jquery","i18n-view","_","text!html/nf/confirm.html","text!html/nf/notify.html","text!html/nf/prompt.html","css!/css/require/windows.css"],function(t,n,e,i,o,r){var l=[],s=!1,u=!1,c=[],a=!1,f=t('<div class="ul-notify-wrapper ul-notify-wrapper--no-events '+(window.constructorMode?"ul-notify-wrapper--in-constructor":"")+' UL ul-sp"></div>'),d=t('<div class="ul-alert-wrapper UL ul-sp"></div>'),p=t('<div class="ul-confirm-wrapper UL ul-sp"></div>');t("body").append(f.hide(),d.hide(),p.hide());var m={alert:function(){return function(t,n){null==n&&(n=function(){return function(){}}()),1==s?l.push({text:t,cb:n}):this.alert_({text:t,cb:n})}}(),alertRemove:function(){return function(){1==s&&(d.show(),t(".ul-alert-submit",".ul-alert-dialog").trigger("click"))}}(),alert_:function(){return function(n){var e=this,i=t('<div class="ul-alert-dialog"><div class="ul-alert-head"><div class="ul-alert-title"></div><div class="ul-alert-close"></div></div><div class="ul-alert-body"><div class="ul-alert-text"></div><div class="ul-alert-submit">ok</div></div></div>');t(".ul-alert-text",i).text(n.text),s=!0,t(".ul-alert-submit",i).click(function(){n.cb(),i.remove(),s=!1,d.hide(),0<l.length&&e.alert_(l.shift())}),t("body").append(i)}}(),ajax:function(){return function(n){var e=this,i=t.extend(!0,{url:"/save/",type:"post",dataType:"json",success:function(){return function(t){e.notify(JSON.stringify(t))}}(),error:function(){return function(){e.notify("Ошибка во время выполнения запроса","error")}}()},n);t.ajax(i)}}(),confirm:function(){return function(t){1==a?c.push(t):(p.show(),this._confirm(t))}}(),_confirm:function(){return function(o){var r=this,l=-1,s=["ul-button-yellow","ul-button-white","ul-button-blue","ul-button-red","ul-button-blueSecondary","ul-button-bluePlus","ul-button-purple","ul-button"];void 0!=o.color&&s.some(function(t,n){return t==o.color?(l=n,!0):void 0}),void 0===o.title&&void 0!==o.text&&(o.title=o.text,o.text=void 0);var u=e.template(i,{hasTitle:void 0!==o.title,title:o.title||n("all.confirm action"),hasDesc:void 0!==o.text,desc:o.text||n("all.confirm action"),overlayCancel:o.overlayCancel,invert:o.invert||!1,ok:o.ok||"Ok",hasCancel:void 0!==o.cancel,cancel:o.cancel||n("all.cancel"),color:0>l?"ul-button-blue":s[l]}),f=t(u);p.empty().append(f),f.css({marginLeft:-f.outerWidth()/2,marginTop:-f.outerHeight()/2}),t("body").addClass("ul-fix-body"),setTimeout(function(){p.addClass("ul-confirm-wrapper--visible"),setTimeout(function(){t(".js-confirm-main",f).trigger("focus")},300)},100),a=!0;var d=function(){return function(){t(document).off(".ulConfirm"),f.addClass("ul-confirm-dialog--close"),setTimeout(function(){f.removeClass("ul-confirm-dialog--close"),p.removeClass("ul-confirm-wrapper--visible"),t("body").removeClass("ul-fix-body"),0<c.length?setTimeout(function(){r._confirm(c.shift())},500):(a=!1,p.hide())},300)}}();t(document).on("click.ulConfirm",'.js-confirm[role="ok"]',function(){o.okCb&&o.okCb(),d()}).on("click.ulConfirm",'.js-confirm[role="cancel"]',function(){o.cancelCb&&o.cancelCb(),d()}).on("click.ulConfirm",".ul-confirm-wrapper",function(){o.overlayCancel&&(o.cancelCb&&o.cancelCb(),d())}).on("click.ulConfirm",".ul-confirm-dialog",function(t){o.overlayCancel&&t.stopPropagation()}).on("keydown.ulConfirm",function(n){27==n.keyCode&&t('.js-confirm[role="cancel"]',f).trigger("click")})}}(),notify:{_notifyQueue:[],_isNotifyProcessing:!1,_notifies:{},_statuses:["default","info","success","warning","error"],show:function(){return function(t,n,e){var i=this,o=i._getNotifyObjectFromParams(t,n,e);o&&(i._notifies[o.id]=o,!0===i._isNotifyProcessing?i._notifyQueue.push(o):i._show(o))}}(),_show:function(){return function(n){var i=this;i._isNotifyProcessing=!0;var r=t(e.template(o,{nf:n,btnClass:i._btnClasses[n.status]}));r.prependTo(f),i._addListeners(r),f.show().removeClass("ul-notify-wrapper--no-events"),setTimeout(function(){r.addClass("ul-notify--msg-visible"),i._notifies[n.id].__closeTimeoutId=setTimeout(function(){i._close(r)},n.opts.timeout)},50),setTimeout(function(){0<i._notifyQueue.length?i._show(i._notifyQueue.shift()):i._isNotifyProcessing=!1},350)}}(),_addListeners:function(){return function(n){var e=this;t(".js-ul-notify-close",n).one("click.notifyEvent",function(){e._close(t(this).closest(".js-ul-notify"),!0)}),n.on("click.notifyEvent",".js-ul-notify-action",function(){var i=t(this),o=i.closest(".js-ul-notify").data("index"),r=i.data("actionIndex"),l=e._notifies[o].opts.actions[r];l.cb(),l.disableAfterClick&&i.attr("disabled","disabled"),l.closeAfterClick&&e._close(n,!0)})}}(),_getNotifyObjectFromParams:function(){return function(n,e,i){var o=this;return n?(i||(i={}),i=t.extend({timeout:1e4,actions:[],afterClose:null},i),i.actions=i.actions.map(function(n){return t.extend({disableAfterClick:!0,closeAfterClick:!0,cb:function(){return function(){}}()},n)}),-1===o._statuses.indexOf(e)&&(e="default"),{id:Math.random().toString().slice(2),text:n,status:e,opts:i}):null}}(),_close:function(){return function(t,n){function e(t,n){t.remove(),i._notifies[n].opts.afterClose&&i._notifies[n].opts.afterClose(),delete i._notifies[n],i._afterClose()}var i=this,o=t.data("index");return clearTimeout(i._notifies[o].__closeTimeoutId),t.off(".notifyEvent"),n?void e(t,o):(t.addClass("ul-notify--msg-removing"),void setTimeout(function(){e(t,o)},1e3))}}(),_afterClose:function(){return function(){var t=this;0===t._notifyQueue.length&&f.is(":empty")&&(f.hide(),f.addClass("ul-notify-wrapper--no-events"))}}(),_btnClasses:{"default":"ul-button-link-blue",info:"ul-button-link-yellow",success:"ul-button-link-yellow",error:"ul-button-link-yellow",warning:"ul-button-link-blue"}},prompt:{init:function(){return function(t){0==u&&(p.show(),this._prompt(t))}}(),_prompt:function(){return function(i){var o,l,s;o={title:null,text:null,label:null,description:null,placeholder:null,ok:"Ok",cancel:n("all.cancel"),color:"ul-button",invert:!1,hasCancel:!0,overlayCancel:!1,validateInpCb:function(){return function(t,n){n(!0)}}(),validateOkCb:function(){return function(t,n){n(!0)}}(),beforeOk:function(){return function(t,n){n(!0)}}(),beforeCancel:function(){return function(t,n){n(!0)}}(),okCb:function(){return function(){}}(),cancelCb:function(){return function(){}}()},this.valid=!0,l=e.template(r,Object.assign(o,i)),this.def=o,s=t(l),p.empty().append(s),s.css({marginLeft:-s.outerWidth()/2,marginTop:-s.outerHeight()/2}),p.addClass("ul-confirm-wrapper--visible"),t(".js-confirm-main",s).trigger("focus"),a=!0,this.attachEvents()}}(),attachEvents:function(){return function(){t(document).on("input.promptEvent",".js-prompt-input",this.onInpKeyPress.bind(this)).on("click.promptEvent",'.js-confirm[role="ok"]',this.onOkClick.bind(this)).on("click.promptEvent",'.js-confirm[role="cancel"]',this.onCancelClick.bind(this))}}(),onInpKeyPress:function(){return function(n){var e=this,i=t(n.currentTarget);this.def.validateInpCb(i.val(),function(t,n){t?(e.hideError(),e.valid=!0):(e.showError(n),e.valid=!1)})}}(),onOkClick:function(){return function(){var t=this,n=p.find(".js-prompt-input").val();this.def.validateOkCb(n,function(e,i){return e?(t.hideError(),t.valid=!0,void t.def.beforeOk(n,function(e){e&&(t.promptClose(),t.def.okCb(n))})):(t.showError(i),void(t.valid=!1))})}}(),onCancelClick:function(){return function(){var t=this,n=p.find(".js-prompt-input").val();t.def.beforeCancel(n,function(n){n&&(t.promptClose(),t.def.cancelCb())})}}(),showError:function(){return function(t){0===p.find(".js-prompt-err-message").length?(p.find(".js-prompt-input").after('<p class="ul-field-note js-prompt-err-message">'+t+"</p>"),p.find(".js-prompt-field").addClass("error")):p.find(".js-prompt-err-message").text(t)}}(),hideError:function(){return function(){t(".js-prompt-err-message").remove(),p.find(".js-prompt-field").removeClass("error")}}(),promptClose:function(){return function(){u=!1,t(document).off(".promptEvent"),p.removeClass("ul-confirm-wrapper--visible"),p.hide(),a=!1}}()}};return{alert:m.alert.bind(m),alertRemove:m.alertRemove.bind(m),confirm:m.confirm.bind(m),notify:m.notify.show.bind(m.notify),prompt:m.prompt.init.bind(m.prompt)}});
//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map

//# sourceMappingURL=nf.js.map
