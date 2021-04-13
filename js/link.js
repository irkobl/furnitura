"use strict";define("link",["U","ul-framework/scrollbar","i18n","nf","text!./html/link/link.html","_","validation","css!/css/require/link.css"],function(e,n,t,i,l,a,r){var o={$el:null,check:!1,link:null,$curPage:null,pageId:null,pageParams:"outer",open:function(){return function(e){var n=this;return n.opt=$.extend({$renderedTo:null,href:null,innerLinkAfter:"/",btnDelete:!1,target:!0,autoClose:!1,placeholder:t("constructor.outer link"),hideInnerPages:!1,hideInnerPagesFix:!1,hideTarget:!1,popup:!1,showNoneItem:!1,applyLink:function(){return function(){}}(),afterOpen:function(){return function(){}}(),changePage:function(){return function(){}}()},e),n.opt.$renderedTo.closest("#ul-popup").length&&(n.opt.popup=!0),null!=n.opt.$renderedTo||n.opt.$renderedTo.length?void n._render(function(){n.$el=$("#ul-link");var e=$(".js-link-page",n.$el);n.$curPage=$(".active",e),n.check=n.$el.find("input[type=checkbox]").prop("checked"),n._addEvents(),n._checkShow(),n.link=n.opt.href,n.opt.afterOpen.apply(window)}):void console.warn("Некуда рендерить")}}(),close:function(){return function(){var e=this;e.OptApply(function(){e.$el.off(".linkEvents")})}}(),clearLink:function(){return function(){var e=this;e.$el.off(".linkEvents"),delete e.link}}(),OptApply:function(){return function(e){var n=this;n.opt.applyLink(n.getData()),e()}}(),getLinkPrefix:function(){return function(e){var n="http://";return e&&(e.substr(0,n.length)!==n&&"https://"!==e.substr(0,"https://".length)&&-1===e.indexOf("@")?e=n+e:r.email(e)&&(e="mailto:"+e)),e}}(),_addEvents:function(){return function(){var e=this;e.$el.on("click.linkEvents",".js-link-nav li",function(){var n=$(this).data("nav");if("none"===n)e.pageId=null,e.link=null;else if("inner"===n){var t=e.$el.find(".js-link-innerpage .js-link-pagewrap");if(!e.pageId&&!t.find(".js-link-selectlink.active").length){var i=t.eq(0).find(".js-link-selectlink");e.pageId=t.eq(0).data("pageId"),i.addClass("active")}}e._page(n)}).on("click.linkEvents",".ul-link-remove",function(){$(".js-link-page ul li",e.$el).removeClass("active"),$(".ul-link-outer",e.$el).val(""),e.link=null,e.pageId=null}).on("change.linkEvents",".ul-link-outer",function(){""==$(this).val()?e.link=null:(e.pageId=null,e.link=$(this).val(),e.check=e.$el.find("input[type=checkbox]").prop("checked"))}).on("click.linkEvents",".js-link-selectlink:not(.active)",function(){var n=$(this).closest("li");$(".active",$(this).closest(".js-link-page")).removeClass("active"),$(this).addClass("active"),e.link=n.attr("src"),e.pageId=$(this).closest(".js-link-pagewrap").data("pageId"),e.opt.applyLink(e.getData())}).on("click.linkEvents",".ul-link-pageheaders-toggle",function(){var e=$(this),n=e.closest("li");n.toggleClass("page-headers-opened")}).on("keyup.linkEvents",".ul-link-outer",{me:e},e.eventChange).on("focusout.linkEvents",".ul-link-outer",{me:e},e.eventFocusOut),e.$el.find("input[type=checkbox]").on("click",{me:e},e.eventCheckedLink)}}(),getData:function(){return function(){var e=this;return"inner"==e.pageParams&&(!e.pageId&&(e.pageId=$(".active",e.$el.find(".js-link-innerpage")).closest(".js-link-pagewrap").data("pageId")),(null==e.link||!e.link.length)&&(e.link=$(".active",e.$el.find(".js-link-innerpage")).closest(".js-link-pagewrap").attr("src"))),e.opt.hideInnerPagesFix&&(e.check=!0),{linkType:e.pageParams,link:e.link,target:e.check,pageId:e.pageId,noClose:!0}}}(),eventCheckedLink:function(){return function(e){var n=e.data.me;n.pageId=null,n.check=n.$el.find("input[type=checkbox]").prop("checked"),n.$el.find('[data-nav="inner"]').hasClass("active")||(n.link=n.getLinkPrefix(n.link)),n.leftPanelClose()}}(),leftPanelClose:function(){return function(){var e=this;e.$el.closest("#ul-left-menu").length&&(e.opt.autoClose?e.close():e.opt.applyLink(e.getData()))}}(),eventFocusOut:function(){return function(e){var n=e.data.me;n.link=$(this).val(),n.pageId=null,n.check=n.$el.find("input[type=checkbox]").prop("checked"),n.$el.find('[data-nav="inner"]').hasClass("active")||(n.link=n.getLinkPrefix(n.link)),n.leftPanelClose()}}(),eventChange:function(){return function(e){var n=e.data.me;n.link=$(this).val(),13==e.keyCode&&(n.pageId=null,!n.$el.find('[data-nav="inner"]').hasClass("active")&&(n.link=n.getLinkPrefix(n.link)),n.leftPanelClose())}}(),_checkShow:function(){return function(){var e=this;if(e.pageId=null,"none"===e.opt.linkType)e._page("none");else if("external"===e.opt.linkType)e._page("outer"),e.pageParams="outer",e.$el.find(".ul-link-outer").val(e.opt.href),e.$el.find("input[type=checkbox]").prop("checked",e.opt.target);else{var n=e.opt.href.split("#").shift().replace(e.opt.innerLinkAfter,""),t=0<e.opt.href.indexOf("#");e.data.filter(function(i){if(n==i.id){e._page("inner"),e.pageId=i._id,e.pageParams="inner";var l=e.$curPage.find('ul li[src="'+e.opt.innerLinkAfter+i.id+'"]');if(e.$curPage.find("input[type=checkbox]").prop("checked",e.opt.target),t){var a=$('[src="'+e.opt.href+'"]',l);if(!a.length)return!1;a.length&&$(".js-link-selectlink",a).addClass("active"),$(".js-link-headers-toggle",l).trigger("click")}else l.children(".js-link-selectlink").addClass("active");var r=$(".active",e.$el.find(".js-link-innerpage"));return r.length&&r.get(0).scrollIntoView(!1),!0}return!1});e.pageId||(e.pageId=e.$el.find(".js-link-innerpage").find(".js-link-pagewrap:first").data("pageId"))}}}(),_page:function(){return function(e){var t=this;$(".js-link-page",t.$el).hide(),$('.js-link-page[data-link="'+e+'"]',t.$el).show(),t.$curPage=$('.js-link-page[data-link="'+e+'"]',t.$el),$(".js-link-nav li").removeClass("active"),$('.js-link-nav li[data-nav="'+e+'"]').addClass("active"),t.pageParams=e;var i=$("#parent-select");"none"===e?($("#link-open-new-window",t.$el).hide(),i.find("option[data-allow-none=false]").hide(),i.find("option[data-allow-none=false]:selected").length&&i.find("option:first").attr("selected","selected"),t.opt.hasChildren?$(".js-children-notify",t.$el).hide():$(".js-children-notify",t.$el).show(),t.opt.hideTarget=!0,t.link=""):"outer"===e&&$(".ul-link-outer",t.$el).val()?($("#link-open-new-window",t.$el).show(),i.find("option[data-allow-none=false]").show(),t.link=$(".ul-link-outer",t.$el).val(),t.opt.hideTarget=!1,$(".js-children-notify",t.$el).hide()):($("#link-open-new-window",t.$el).show(),t.link=$(".js-link-page ul li",t.$el).find(".active").attr("src")||"",t.opt.hideTarget=!1,$(".js-children-notify",t.$el).hide(),i.find("option[data-allow-none=false]").show()),n.destroy($(".js-link-innerpage",t.$curPage)),n.create($(".js-link-innerpage",t.$curPage)),$(window).trigger("linkPageChange"),t.opt.changePage()}}(),_render:function(){return function(n){var r=this;$.ajax({url:"/sites/url/"+e.params.site+"/pages",api:!0,ok:function(){return function(o){$.ajax({url:"/sites/url/"+e.params.site+"/getHeaders",api:!0,ok:function(){return function(e){var i=a.groupBy(e,function(e){return e.pageId});o.pages.forEach(function(e){"index"===e.id&&(e.id=""),i[e._id]&&(e.anchors=[],i[e._id].forEach(function(n){var t;try{t=$(n.title).text()}catch(i){t=n.title}var l=r.opt.innerLinkAfter+("index"===e.id?"":e.id)+"#"+n.id;"/#ul-id-header-sitename"!=l&&e.anchors.push({title:t,src:l})}))}),r.data=o.pages,r.opt.$renderedTo.append($(a.template(l,{__:t,res:o,opt:r.opt}))),n()}}(),noOk:function(){return function(){i.notify(t("all.ajaxError.title"),"error")}}()})}}()})}}()};return o});
//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map

//# sourceMappingURL=link.js.map
