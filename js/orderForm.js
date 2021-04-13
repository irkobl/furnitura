"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};define("orderForm",["jquery","_","aDialog","model/orderForm","validation","i18n","U","goals/handlers","locale","icon-set-loader","tpl!orderForm/fileInputItem","tpl!empty-emails","url-polyfill","css!/css/require/emailStatusDialog.css"],function(e,t,i,r,n,o,a,s,d,l,c,u){var f={timeOutStack:[],templatePath:"text!./html/orderForm/form.html",openPreviewMode:function(){return function(e,t,i,r){var n=this;n.specialOpenPreview=!0,n.open(e,t,i,r)}}(),open:function(){return function(t,i,n,o,s){var d=this,c=new URL(window.location),u=function(){return function(){}}();if(s=s||function(){},l.loadIconSet("fontAwesome",function(){}),t.indexOf("popup-")+1&&(t=t.replace("popup-","")),n=n||function(){},i=i||"",!0===window.interactiveMode)r.getForImported(t,u.ok(function(e){d._openDialog(e,i,n,o,s)}));else if(!0===window.constructorMode||!0===window.previewMode)r.get(t,u.ok(function(e){!0===window.constructorMode?require(["css!/css/require/orderFormConstructor.css"],function(){d.openData=e,d._openDialog(e,i,n,o,s)}):d._openDialog(e,i,n,o,s)}));else if("/neowizard/getTemplatePreviewPage"==c.pathname&&c.searchParams.get("id"))e.getJSON("/neowizard/orderform/"+c.searchParams.get("id")+"/"+t,function(e,t){"success"!==t||e[0]||d._openDialog(JSON.parse(e[1]),i,n,o,s)});else{var f="";f=a.params.isULanding?"/"+a.params.siteUrl+"/orderform/"+t+".json":"/orderform/"+t+".json",e.getJSON(f+"?v="+(window.VERSION||Date.now()),function(e,t){"success"===t&&d._openDialog(e,i,n,o,s)})}}}(),_openDialog:function(){return function(t,r,n,a,s){var d=this;t.miskData=r,i.open(e.extend({templateUrl:d.templatePath,templateData:{__:o("constructor.orderForm"),data:t,editing:d.editing},handler:d.specialOpenPreview||!1,__:o("constructor.orderForm"),eventHandlerClass:"js-orderFormEdit",afterOpen:function(){return function(i,r){d.specialOpenPreview&&!0===window.constructorMode&&!d.editing&&e(document).on("click.editOrderForm",".js-orderFormEdit",function(){d.editing=!0,e(this).attr("data-overlay",!1),d.reRender(t,function(){d._edit(t)})}),d.$body=i,d.isOpen=!0,d.editing?d._edit(t):d.viewEvents(t,r),s(i)}}(),beforeClose:function(){return function(){d.hide(),e(document).off(".editOrderForm"),n(d),d.isSubmitted=!1}}()},a))}}(),setNoClose:function(){return function(e){i.setNoClose(e)}}(),hide:function(){return function(){var t=this;t.files=null,this.editing=!1,this.isOpen=!1,this.specialOpenPreview=!1,t.panelDialog=null,this.editing&&!t.specialOpenPreview&&this.panelDialog.hide(),t.specialOpenPreview||(this.$body.off(".orderFormViewEvents"),this.timeOutStack.forEach(function(t){e(document).off("timer-"+t.id)}))}}(),_edit:function(){return function(n){var s=this;require(["panelDialog"],function(l){e.get(a.sprintf("/sites/url/{siteUrl}/getUserInfo",[a.params.site]),function(c){s.panelDialog=l,s.userInfo=c[1],a.layers.on(0,function(){l.hide(),s.specialOpenPreview&&s.$body&&(e(".js-orderFormEdit",s.$body.parent()).attr("data-overlay",!0),s.$body.closest(".js-special-action").addClass("aDialog-special-overlay"),s.editing=!1,s.reRender(n,function(){})),!s.specialOpenPreview&&s.$body&&s.editing&&i.hide()}),l.show({context:{me:s,data:e.extend(n,{isSyncedWithButton:s.isSyncedWithButton}),orderForm:r,userEmail:c[1],__:o,lang:d.get(),userEmailsEmptyTpl:t.template(u,{__:o,siteUrl:a.params.site})},required:"orderFormPanel",templateUrl:"/html/orderForm/panel.html",templateCss:["/css/require/empty-emails.css"],templateData:{userEmail:c[1],__:o,lang:d.get(),data:n,userEmailsEmptyTpl:t.template(u,{__:o,siteUrl:a.params.site})},afterOpen:function(){return function(){s.isSyncedWithButton=!1,s.specialOpenPreview&&s.$body&&s.$body.closest(".js-special-action").removeClass("aDialog-special-overlay")}}()})})})}}(),edit:function(){return function(e,t,i){this.editing=!0,this.open(e,t,i)}}(),reRender:function(){return function(e,r){var n=this;r=r||function(){},require([n.templatePath],function(a){i.changeData(t.template(a,{__:o("constructor.orderForm"),data:e,editing:n.editing})),r()})}}(),save:function(){return function(e,i,n){var o=this,a=function(){return function(){}}();n=n||function(){},i=i||!1;var s=t.extend({},e);delete s.goals,this.editing&&r.edit(s,a.ok(function(e){e.miskData=s.miskData,i?n():o.reRender(e,n)}))}}(),viewEvents:function(){return function(r){var d=this,l=o("constructor.orderForm"),u=null,f=s.getHandlerFunction(r.goals);!0===window.constructorMode||(!0!==window.previewMode&&e.getJSON("/api/pass",function(e,t){"success"===t&&(u=e)}),d.$body.on("click.orderFormViewEvents",".button",function(o){if(!0===window.previewMode)return void i.msg.show({text:l("no open in preview"),headerOverlap:!0,autoHide:5e3,clickClose:!0});var s=new FormData,c=[],m={},p=!1,h=d.findInTimeOutStack(r._id);if(i.msg.hide(),null!==h)return i.msg.show({loading:!0,text:l("repeat send",d.timeOutStack[h].secRemaining),headerOverlap:!0,autoHide:5e3,clickClose:!0}),void e(document).on("timer-"+r._id,function(e,t){i.msg.changeText(l("repeat send",t.time)),0===t.time&&i.msg.hide()});if(d.$body.find("dl").each(function(){var t=e(this),i=t.attr("data-id"),r=t.find("dd input, dd textarea"),o=r.val()||"",a=r.attr("data-type"),u=null!=t.find("dd input, dd textarea").attr("required");if(t.removeClass("error"),t.find(".js-orderForm-fieldDesc").show(),t.find(".validation-error").remove(),"file"!==a)u&&!o.length&&(t.addClass("error"),t.find(".js-orderForm-fieldDesc").hide(),t.append('<dd class="validation-error">'+l("empty field error")+"</dd>"),p=!0);else if(d.validateFileInput(r,d.files))for(var f=d.files||r.prop("files"),h=f.length,g=0;h>g;g++)s.append("attachments",f.item(g));else p=!0;"email"===a&&o.length&&!n.email(o)&&u&&(t.addClass("error"),t.find(".js-orderForm-fieldDesc").hide(),t.append('<dd class="validation-error">'+l("email field error")+"</dd>"),p=!0),"email"!==a||u||!o.length||n.email(o)||(t.addClass("error"),t.find(".js-orderForm-fieldDesc").hide(),t.append('<dd class="validation-error">'+l("email field error")+"</dd>"),p=!0),"userAgreement"!==a||r.prop("checked")||(t.addClass("error"),t.append('<dd class="validation-error">'+l("empty field error")+"</dd>"),p=!0),~["file","userAgreement"].indexOf(a)||(c.push({_id:i,value:o}),m[a]={value:o,hold:r.attr("placeholder")||a})}),!p&&(i.msg.show({loading:!0,text:l("process"),headerOverlap:!0}),o.stopPropagation(),null!=u)){var g={_id:r._id,fields:window.JSON.stringify(c),productData:r.miskData};g[u.name]=u.value,Object.keys(g).forEach(function(e){s.append(e,g[e])}),e.ajax({url:"/api/orderFormSend",method:"post",data:s,contentType:!1,processData:!1,success:function(){return function(n){if(i.msg.hide(),null===n[0]){var o=r.msgAfterSend;if(n[1].errors&&n[1].etext&&(o=n[1].etext),e(".js-orderForm-content").html('<div class="ul-orderForm-status-dialog">'+t.escape(o)+"</div>"),d.sendTimeOutSet(r._id),f(),a.params.isULanding){var s="";window.localStorage&&(s=localStorage.getItem("firstReferrer")),e.ajax({url:a.sprintf("/api/stats/lead?site={site}&action=feedback",[a.params.siteUrl||a.params.site]),type:"POST",data:JSON.stringify(m),contentType:"application/json"})}d.isSubmitted=!0}else e(".js-orderForm-content").html('<h4 class="text-center">'+l("server error")+"</h4>");d.files=null}}(),error:function(){return function(){i.msg.hide(),e(".js-orderForm-content").html('<h4 class="text-center">'+l("server error")+"</h4>")}}()})}}).on("click",".js-orderForm__file-input__btn",function(){var t=e(this).trigger("blur").closest(".js-orderForm__file-input");t.find('input[type="file"]').trigger("click")}).on("change",'.js-orderForm__file-input input[type="file"]',function(){var i=e(this),r=i.closest(".js-orderForm__file-input"),n=i[0].files,o=n.length;if(!o)return d.files=null,void r.removeAttr("data-has-file").find(".js-orderForm__file-input__filenames").empty();d.files={get length(){return Object.keys(this.list).length},item:function(){return function(e){var t=Object.keys(this.list).sort()[e];return this.list[t]}}(),list:{}};for(var a,s="",l=0;o>l;l++)a=n.item(l),d.files.list[l]=a,s+=t.template(c,{fileName:a.name,index:l});r.attr("data-has-file","true").find(".js-orderForm__file-input__filenames").html(s),d.validateFileInput(i)||i.val("").trigger("change")}).on("click",".js-orderForm__file-input__filename__remove",function(){var t=e(this).closest(".js-orderForm__file-input__filename"),i=t.attr("data-index");delete d.files.list[i],t.fadeOut(200,function(){t.remove()})}))}}(),findInTimeOutStack:function(){return function(e){var t=this,i=null;return t.timeOutStack.some(function(t,r){return t.id===e?(i=r,!0):void 0}),i}}(),sendTimeOutSet:function(){return function(t){var i=this,r=i.findInTimeOutStack(t);if(null===r){var n=i.timeOutStack.push({id:t,secRemaining:60,timer:null}),o=i.timeOutStack[n-1];o.timer=setInterval(function(){0<o.secRemaining?(o.secRemaining--,e(document).trigger("timer-"+o.id,{time:o.secRemaining})):(clearInterval(o.timer),e(document).off("timer-"+o.id),delete i.timeOutStack[n-1])},1e3)}}}(),validateFileInput:function(){return function(t,i){function r(e){n.attr("data-has-error","true").find(".js-orderForm__file-input__error").text(e)}var n=t.closest(".js-orderForm__file-input");i=i||t[0].files;var a=i.length,s=t.prop("required"),d=o("constructor.orderForm.errors"),l=e.extend({maxFilesCount:20,maxFileSize:5,allowedMimeTypes:[]},window.cache.publishedForm),c=l.maxFileSize,u=1024*(1024*l.maxFileSize),f=l.maxFilesCount,m=l.allowedMimeTypes,p=0;if(s&&!a)return r(d("attach file")),!1;for(var h,g=function(){return function(e){var t=i.item(e);return m.some(function(e){return new RegExp(e).test(t.type)})?void(p+=t.size):(r(d("wrong file type")),{v:!1})}}(),v=0;a>v;v++)if(h=g(v),"object"===("undefined"==typeof h?"undefined":_typeof(h)))return h.v;return p>u?(r(d("too big files size",c)),!1):i.length>f?(r(o("constructor.too many files",f).replace("{count}",f)),!1):(function(){n.removeAttr("data-has-error","true")}(),!0)}}()};return f});
//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map
