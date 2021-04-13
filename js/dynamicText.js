"use strict";define("dynamicText",["jquery","popup","_","U","i18n","editApi","ul-framework","nf"],function(t,e,n,i,a,o,r,c){var u,s,l=!1,d=a("widgets.dynamicText"),m={items:[],i18n:d},f=i.params.isULanding?"":'<span calss="ul-icons-right"><span class="ul-icon icon-content-special-questionmark ul-dynamictext-help js-dynamictext-help"></span></span>',p=function(){return function(t){if(window.getSelection().removeAllRanges(),document.selection){var e=document.body.createTextRange();e.moveToElementText(t[0]),e.select().createTextRange()}else window.getSelection&&(e=document.createRange(),e.selectNode(t[0]),window.getSelection().addRange(e));document.execCommand("Copy"),window.getSelection().removeAllRanges()}}(),y=function(){return function(){var e=t("#scrollable-block");return e[0].scrollHeight>e.height()?!0:void 0}}(),x=function(){return function(){e.open({title:d("name")+f,$targetEl:u,titleShow:!0,showCloseBtn:!1,showApplyBtn:!1,saveBtn:!1,reopenMode:!0,extrawide:!0,positionTarget:"right",templateData:{i18n:d},templateUrl:"text!/html/constructor/dynamicText/dynamicTextEmpty.html"})}}(),h=function(){return function(){e.open({title:d("name")+f,$targetEl:u,titleShow:!0,showCloseBtn:!1,saveBtn:!1,showApplyBtn:!1,extrawide:!0,reopenMode:!0,positionTarget:"right",scrollable:!1,templateUrl:"text!/html/constructor/dynamicText/dynamicTextManage.html",templateData:m,afterOpen:function(){return function(){var e=t(".js-dynamictext-tablegroup"),i="";require(["text!/html/constructor/dynamicText/dynamicTextEditItem.html"],function(a){m.items.forEach(function(t,e){i+=n.template(a,{item:t,i:e,i18n:d})}),e.html(i),r.scrollbar.create(t("#scrollable-block"),{marginStart:0,marginEnd:0},{suppressScrollX:!0});var o=t("#scrollable-block");y()&&t(".js-dynamictext-overlay .faded").addClass("scrolling"),t("#ul-popup .ul-popup-container .ul-popup-body").css("overflow-y","hidden"),o.on("ps-y-reach-end",function(){t(".js-dynamictext-overlay .faded").removeClass("scrolling")}).on("ps-scroll-up",function(){return y()?void t(".js-dynamictext-overlay .faded").addClass("scrolling"):void t(".js-dynamictext-overlay .faded").removeClass("scrolling")})})}}()})}}(),v=0,g=1,w=function(){return function(t,n,i){var a="",o={item:{name:"","default":""},i18n:d};t===v?(a=d("edit text")+f,o.item=m.items[i],o.key=i):t===g&&(a='<span class="title-green">'+d("adding text")+"</span>"+f),e.open({title:a,$targetEl:u,titleShow:!0,showCloseBtn:!0,saveBtn:!0,showApplyBtn:!0,extrawide:!0,reopenMode:!0,positionTarget:"right",templateUrl:"text!/html/constructor/dynamicText/dynamicTextEdit.html",templateData:o,afterOpenThis:function(){return function(){this.$el.find('input[data-type="url"]').focus()}}(),apply:function(){return function(){return n&&n(),!1}}(),cancel:function(){return function(){return m.items.length?h():x(),!1}}()})}}(),T=function(){return function(){var e=t('.js-dynamictext-form input[data-type="name"]').val().trim(),n=t('.js-dynamictext-form input[data-type="default"]').val().trim();return{name:e,"default":n}}}(),j=function(){return function(t,e){var n=[{validate:function(){return function(){return/{{[a-zA-Z0-9-_]+}}/.test(t.name)}}(),message:d("incorrect param")},{validate:function(){return function(){var n=!0;return m.items.forEach(function(i,a){"undefined"!=typeof e&&e===a||i.name===t.name&&(n=!1)}),n}}(),message:d("param exists")}],i={isValid:!0,message:d("example")};return n.forEach(function(t){t.validate()||(i={isValid:!1,message:t.message})}),i}}(),k=function(){return function(e){var n=t(".js-dynamictext-form");n.find(".js-dynamictext-allert").html(e.message),e.isValid?n.find(".js-dynamictext-inputallert").removeClass("error"):n.find(".js-dynamictext-inputallert").addClass("error")}}(),E=function(){return function(){return"/sites/url/"+i.params.site+"/customField/dynamicText"}}(),b=function(){return function(e){return t.ajax({url:E(),method:e,data:{data:JSON.stringify(m.items)}})}}(),C=function(){return function(t){var e=T(),n=j(e,t);return n.isValid?(m.items[t]=e,b("post"),!0):(k(n),!1)}}(),S=function(){return function(){var t=T(),e=j(t);return e.isValid?(m.items.push(t),b("post"),!0):(k(e),!1)}}(),B=function(){return function(e){m.items.splice(e,1);var i=t(".js-dynamictext-tablegroup"),a="";require(["text!/html/constructor/dynamicText/dynamicTextEditItem.html"],function(t){m.items.forEach(function(e,i){a+=n.template(t,{item:e,i:i,i18n:d})}),i.html(a),b("post")})}}(),A={init:function(){return function(e,n){u=e,s=new r.tooltip,s.init("[data-title]",{attr:"data-title"}),t(document).on("mousedown.dynamicText",".js-dynamictext-open",function(){if(!(0<t(".ul-linkPopover-link").length)){n.hide();var e=new t.Deferred;e.resolve([null,m.items]),l||(e=e.then(function(){return b("get")})),e.then(function(t){m.items=t[1];var e=m.items.length;e?h():x(),l=!0})}}).on("mousedown.dynamicText","#ul-popup",function(t){t.stopPropagation()}).on("mousedown.dynamicText",".js-dynamictext-addNew",function(){var t=function(){return function(){return!!S()&&void h()}}();w(g,t)}).on("mousedown.dynamicText",".js-dynamictext-remove",function(){var e=t(this),n=e.data("key");s._hideTooltip(e),B(n),0===m.items.length&&x()}).on("mousedown.dynamicText",".js-dynamictext-edit",function(){var e=t(this),n=e.data("key");s._hideTooltip(e);var i=function(){return function(){return!!C(n)&&void h()}}();w(v,i,n)}).on("keyup.dynamicText",'.js-dynamictext-form input[data-type="url"]',function(){var e=t(this),n=t('.js-dynamictext-form input[data-type="name"]');n.val("{{"+e.val()+"}}");var i=0<e.val().length?d("apear when param not mentioned",e.val()):d("apear when param not mentioned","utm_term");t(".dt-tip-text-default p").text(i);var a=t(".js-dynamictext-form").data("key");k("undefined"==typeof a?j(T()):j(T(),a))}).on("mousedown.dynamicText",'[data-cmd="insertText"]',function(){var e=t(this).data("key");o.apply("insertText",m.items[e].name)}).on("mousedown.dynamicText",".js-dynamictext-copyname",function(){c.notify(d("var has copied"),"success",{timeout:4e3}),p(t(this).find("span"))}).on("mousedown.dynamicText",".ul-notify__inner",function(t){t.stopPropagation()})}}(),deinit:function(){return function(){t(document).off(".dynamicText"),s.destroy()}}()};return A});
//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map
