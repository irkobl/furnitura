"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};define("panelPages",["jquery","asyncjs","U","page","_","stickyPopup","i18n","nf","text!./html/share/constructor/panelPagesItem.html","model/pages","uform","device-absWidget","model/orderForm","orderForm","billing/feature-availability","ul-framework/scrollbar","imagelib","jquery-ui-sortable"],function(e,t,a,r,n,i,o,s,l,c,u,d,p,g,f,h,m){var v={isProcessedCopy:!1,activePrevPage:null,init:function(){return function(){var t,r=this,u=e("#ul-panelPages");r.$page=u,r.$listPage=e(".ul-panelPages-pageslist.js-general"),r.$listOrderForm=e(".ul-orderForms-orderFormlist.js-orderForms-wrapper"),c.load(a.params.site,function(){}),p.list(function(t,r){var i="";r.forEach(function(e){i+=n.template(l,{isTemplateServer:a.params.isTemplateServer||!1,__:o,unique:e._id,curPageId:a.params.pageId,pageType:"orderForm",pageId:e._id,curPageTitle:e.title||o("constructor.new orderForm")})}),e(".js-orderForms-wrapper",u).html(i)}),r.$page.find(".js-page").removeClass("active").filter('[data-pageid="'+a.params.pageId+'"]').addClass("active"),r.$listPage.sortable({containment:"parent",distance:5,delay:150,axis:"y",tolerance:"pointer",start:function(){return function(e,a){t=a.item.index()}}(),stop:function(){return function(e,a){t!==a.item.index()&&(r.savePagesOrder(!0),a.item.trigger("click"))}}()}),r.$listOrderForm.sortable({containment:"parent",distance:5,delay:150,axis:"y",tolerance:"pointer",start:function(){return function(e,a){t=a.item.index()}}(),stop:function(){return function(e,a){t!==a.item.index()&&r.saveOrderFormOrder(!0)}}()}),u.on("mouseenter.panelPages",".ul-pageslist-item, .ul-orderForm-item",function(){e(this).addClass("ul-hover")}),u.on("mouseleave.panelPages",".ul-pageslist-item, .ul-orderForm-item",function(){e(this).removeClass("ul-hover")}),e(document).on("changePage.panelPages",function(e,t){r.setActivePage(t.url)});var d=function(){return function(t){var n=r._itemTemplate({unique:t._id,curPageId:a.params.pageId,pageType:"orderForm",pageId:t._id,curPageTitle:t.title||o("constructor.new orderForm")});n.appendTo(e(".js-orderForms-wrapper",u))}}();u.on("click.panelPages",".js-btn-panel-page-orderForm",function(){var t=e(this),r=t.closest(".js-orderForm"),n=r.attr("data-orderFormId");if("remove"===t.attr("data-btn"))s.confirm({title:o("constructor.linkPopover.title alert orderForm remove"),text:o("constructor.linkPopover.text alert orderForm remove"),ok:o("constructor.linkPopover.btn alert orderForm remove"),cancel:"",color:"ul-button-red",cancelCb:function(){return function(){t.css("pointer-events",""),e("#body-fict").css("pointer-events","")}}(),okCb:function(){return function(){p.remove(n,function(){r.remove()})}}()});else if("copy"===t.attr("data-btn")){var i=[],l=r.find(".ul-orderForm-title").html();r.siblings().each(function(){i.push(e(this).find(".ul-orderForm-title").html())});var c=a.generateTitle(l,i,o("constructor.orderForm.copy"));p.copy(n,c,function(e,t){e||d(t)})}else if("preview"===t.attr("data-btn")){if(g.isOpen)return;r.addClass("active"),g.openPreviewMode(n,!1,function(){r.removeClass("active")},{extendClass:"color-overlay-default js-special-action",specialModeOverlay:!0})}}).on("click.panelPages",".js-OrderForm-add",function(){var e=p.defForm();p.add(e,function(e,t){e||d(t)})}),u.on("click.panelPages",".js-page-add",function(){var t,a=e(this);f.check("pagesLimit",{showPopupIfNotAvailable:!0,$popupTargetEl:a},function(e){e&&i.open({title:o("constructor.new page type"),titleSpecial:!0,$targetEl:a,templateUrl:"text!/html/constructor/pageEditor/pageTypesDialog.html",templateCss:"css!/css/require/pageTypes.css",templateData:{__:o},targetEvent:".js-pagetype",saveBtn:!1,apply:function(){return function(e){t=r.createPage(e.data("pageType"),e.text()),t.addClass("ul-pageslist-new"),r.scrollable.scrollToViewport(t,t.offset().top)}}(),beforeClose:function(){return function(){t&&(t.find('.js-btn-panel-page[data-btn*="setting"]').trigger("click",{newPage:!0}),r.activePrevPage=r.$listPage.find(".active").attr("data-pageid"),r.$page.find(".active").removeClass("active"))}}()})})}),r.foldable.init(u,{whileFoldToggling:function(){return function(){r.scrollable.update(u.find(".js-scrollable-pages"))}}(),onFoldToggle:function(){return function(e,t){r.scrollable.scrollToViewport(e,t)}}()}),r.addPagesHandles(u),u.trigger("pagesLimitCheck"),r.scrollable.init(u),this.search.init({onSearchStart:r.scrollable.onSearchStart.bind(r.scrollable),onSearchEnd:r.scrollable.onSearchEnd.bind(r.scrollable),updateBtnPosition:r.scrollable.updateBtnPosition.bind(r.scrollable)}),setTimeout(function(){r.scrollable.updateBtnPosition()},300),a.params.isShopPagesLoadNeeded?r.loadShopPages():e(window).off(".shopCreatedEvent").on("shopCreated.shopCreatedEvent",r.loadShopPages.bind(r))}}(),loadShopPages:function(){return function(){var e=this;a.params.isShopPagesLoadNeeded=!1,c.load(a.params.site,function(t){t.forEach(function(e){"shop"!==e._type||a.params.pages.some(function(e){return"shop"===e.name})||a.params.pages.push(e)}),require(["tpl!panel-pages-shop"],function(r){e.$page.find(".js-shop-pages").replaceWith(n.template(r,{__:o,isFolded:!0,shopPages:t.filter(function(e){return"shop"===e._type}),curPageId:a.params.page}))})},!0)}}(),search:{init:function(){return function(t){this.addListeners(),this.$searchResults=e(".js-pages-search-results"),this.$pages=e(".js-foldable-pages"),this.$input_search=e(".ul-pages-search"),this.$searchResultsEmpty=e(".js-pages-search-results__empty",this.$searchResults),this.$searchResultsFound=e(".js-pages-search-results__found",this.$searchResults),this.$searchResultsInput=e(".js-pages-search-form__input"),this.onSearchStart=t.onSearchStart,this.onSearchEnd=t.onSearchEnd,this.updateBtnPosition=t.updateBtnPosition}}(),addListeners:function(){return function(){var t=this,a=n.debounce(function(a){var a=e(this).val().trim().toLowerCase();t.search(a)},100);e(document).off(".searchPanelLeft").on("input.searchPanelLeft",".js-pages-search-form__input",a).on("focus.searchPanelLeft",".js-pages-search-form__input",function(){t.clearInputPlaceholder()}).on("blur.searchPanelLeft",".js-pages-search-form__input",function(){t.restoreInputPlaceholder()}).on("click.searchPanelLeft",".js-pages-search-form__clear, .js-pages-search-results__clear",function(){t.disableSearch()})}}(),clearInputPlaceholder:function(){return function(){var e=this,t=e.$input_search.find("input").attr("placeholder");e.$input_search.find("input").attr("data-placeholder",t).attr("placeholder","")}}(),restoreInputPlaceholder:function(){return function(){var e=this,t=e.$input_search.find("input").attr("data-placeholder");e.$input_search.find("input").attr("placeholder",t).removeAttr("data-placeholder")}}(),search:function(){return function(e){if(!e)return this.disableSearch();var r=this;this.startSearch(),this.$searchResultsFound.show().empty(),this.$searchResultsEmpty.hide(),this.$input_search.attr("data-not-empty",!0),t.waterfall([function(t){var n=!1;r.$searchResultsFound.empty(),c.getAllPages().forEach(function(t){if(-1<t.title.toLowerCase().indexOf(e.toLowerCase())){var i=v._itemTemplate({unique:t._id,curPageId:a.params.pageId,pageType:t._type,pageId:t.id,curPageTitle:t.title,hideSortableIcon:!0,showSpecialPage:!0});i.appendTo(r.$searchResultsFound),n=!0}}),t(null,n)},function(t,n){p.list(function(i,s){s.forEach(function(n){if(-1<n.title.toLowerCase().indexOf(e.toLowerCase())){var i=v._itemTemplate({unique:n._id,curPageId:a.params.pageId,pageType:"orderForm",hideSortableIcon:!0,pageId:n._id,curPageTitle:n.title||o("constructor.new orderForm")});i.appendTo(r.$searchResultsFound),t=!0}}),n(null,t)})}],function(e,t){t||r.$searchResultsEmpty.show()})}}(),startSearch:function(){return function(){this.$pages.hide(),this.$searchResults.fadeIn(200),this.onSearchStart()}}(),disableSearch:function(){return function(){this.$pages.fadeIn(200),this.$searchResults.hide(),this.$searchResultsInput.val(""),this.$input_search.removeAttr("data-not-empty"),this.onSearchEnd(),this.updateBtnPosition()}}()},scrollable:{init:function(){return function(t,a){var r=this;r.inited||(r.inited=!0,r.opts=e.extend({onScroll:function(){return function(){}}()},a),r.$panel=t,r.$scrollable=e(".js-scrollable-pages",t),r.$scrollablePages=e(".ul-panelPages-pageslist",r.$scrollable),h.create(r.$scrollable,{marginStart:70,marginEnd:e(".ul-pages-search").length?70:0,onScrollY:r.onScroll.bind(r)},{suppressScrollX:!0}),r.addListeners(),e(window).resize(function(){r.updateBtnPosition()}))}}(),addListeners:function(){return function(){var t=this;e(window).on("resize.pages",function(){t.update(t.$scrollable,{})})}}(),onScroll:function(){return function(e){var t=this;t.updateBtnPosition(e),t.opts.onScroll&&t.opts.onScroll()}}(),updateBtnPosition:function(){return function(){var t=this,a=e('.js-foldable-pages[data-id="general"]',t.$scrollable),r=e(".js-addPage-btn",a),n=e(".ul-pages-search",t.$panel),i=48;n.length||(i=70),"true"!==a.attr("data-is-folded")&&(a.height()+a.offset().top-i>t.$scrollable.height()?(r.css({top:-(a.height()-t.$scrollable.height()+a.offset().top-i)}),n.length?n.addClass("largeShadow"):r.addClass("overlay")):(r.css({top:0}),n.length?n.removeClass("largeShadow"):r.removeClass("overlay")))}}(),update:function(){return function(t,a){var r=this;a=n.extend({scrollToTop:!1,rememberPosition:!1},a||{}),t.each(function(){var t=e(this);a.rememberPosition&&t.data("lastScrollTop",t.scrollTop()),a.scrollToTop&&(t.scrollTop(0),r.onScroll(0)),h.update(t)})}}(),restoreLastScrollPosition:function(){return function(e){var t=this,a=e.closest(".js-scrollable-pages").data("lastScrollTop");a&&(e.closest(".js-scrollable-pages").scrollTop(a),t.onScroll(a)),e.closest(".js-scrollable-pages").removeData("lastScrollTop")}}(),onSearchFieldInput:function(){return function(){this.update(this.$scrollablePages.closest(".js-scrollable-pages"),{scrollToTop:!0,rememberPosition:!1})}}(),onSearchStart:function(){return function(){this.update(this.$scrollablePages.closest(".js-scrollable-pages"),{scrollToTop:!0,rememberPosition:!0})}}(),onSearchEnd:function(){return function(){this.update(this.$scrollablePages.closest(".js-scrollable-pages"),{scrollToTop:!1,rememberPosition:!1}),this.restoreLastScrollPosition(this.$scrollablePages)}}(),scrollToViewport:function(){return function(e,t){var a=this,r=58,n=e.closest(a.$scrollable),i=n.offset().top+r,o=n.outerHeight()-r-70,s=t,l=e.offset().top-i;if(0>l||0>o-(l+s)){var c=s>=o||0>l?l+n.scrollTop():n.scrollTop()+(l+s-o);n.animate({scrollTop:c},{progress:function(){return function(){a.update(a.$scrollable)}}(),duration:450}).promise().done(function(){n.clearQueue()}),a.onScroll(c)}}}(),destroy:function(){return function(){h.destroy(this.$scrollable),e(window).off("resize.pages")}}()},foldable:{init:function(){return function(e,t){var a=this;a.$panel=e,a.inited||(a.inited=!0,a.opts=n.extend({whileFoldToggling:function(){return function(){}}()},t||{}),a.addListeners(),a.db.init(JSON.parse(e.attr("data-unfoldedgroups"))))}}(),addListeners:function(){return function(){var t=this;e(document).on("click.pagesFolds",".js-fold-toggle-pages",function(){var a=e(this).closest(".js-foldable-pages");a.attr("data-is-folding-locked")||(a.attr("data-is-folding-locked","true"),t.toggleFolding(a,function(){a.removeAttr("data-is-folding-locked")}))})}}(),toggleFolding:function(){return function(t,a){var r=this,n="true"===t.attr("data-is-folded"),i=n?"unfold":"fold",o=e(".js-foldable__sliding",t).eq(0),s=o.outerHeight();o.css({maxHeight:s}),t.removeAttr("data-auto-height"),setTimeout(function(){function n(e){s||e>1e3||(r.opts.whileFoldToggling(t),setTimeout(function(){n(e+50)},50))}t.attr("data-is-fold-processing","true"),t.removeAttr("data-no-transition"),r["_"+i](t,o,function(e){r.opts.onFoldToggle(t,e)});var s=!1;n(0);var l=Math.random().toString().slice(2);o.on("transitionend."+l,function(r){e(r.target).is(o)&&(s=!0,o.off("."+l),t.removeAttr("data-is-fold-processing"),"unfold"==i&&t.attr("data-auto-height","true").attr("data-no-transition","true"),a&&a())})},0)}}(),_fold:function(){return function(e,t,a){var r=this,n=t.outerHeight();t.css({maxHeight:n}),a(e.outerHeight()-n),setTimeout(function(){e.attr("data-is-folded","true"),t.css({maxHeight:0})},0),r.db.forget(e.attr("data-id"))}}(),_unfold:function(){return function(e,t,a){var r=this;e.removeAttr("data-is-folded");var n=t.clone();n.css({opacity:0,position:"absolute",transition:"none",maxHeight:"none"}).insertAfter(t);var i=n.outerHeight();a(e.outerHeight()+i),setTimeout(function(){t.css("max-height",i),n.remove()},0),r.db.remember(e.attr("data-id"))}}(),db:{endpoint:"/sites/url/"+a.params.site+"/constructorUnfoldedGroups/pages",init:function(){return function(t){var a=this;a.data=t,a.save=n.debounce(function(){e.post(a.endpoint,{groupNames:a.data})},1e3)}}(),getData:function(){return function(){var e=this;return e.data}}(),remember:function(){return function(e){var t=this;t.data.push(e),t.data=n.uniq(t.data),t.save()}}(),forget:function(){return function(e){var t=this;t.data=n.reject(t.data,function(t){return t===e}),t.save()}}()},destroy:function(){return function(){e(document).off("click.pagesFolds",".js-fold-toggle-pages")}}()},addPagesHandles:function(){return function(t){var r=this,l=null,c=!1;t.on("click.panelPages",".ul-pageslist-item:not(.active)",function(t){if(t.preventDefault(),!e(t.target).closest(".ul-pageslist-icons").length)if(e(this).closest('[data-id="shop"]').length){var a=e(this);require(["billing/feature-availability"],function(e){e.check("shop",{},function(e){e&&r.setPage(a.attr("data-pageid"))})})}else r.setPage(e(this).attr("data-pageid"))}).on("click.panelPages",".js-orderForm:not(.active)",function(t){t.preventDefault();var a=this;g.isOpen||e(t.target).hasClass("js-btn-panel-page-orderForm")||(e(a).addClass("active"),g.edit(e(a).attr("data-orderFormId"),!1,function(){e(a).removeClass("active")}))}).on("click.panelPages",".js-btn-panel-page",function(d,p){var g=e(this).closest(".js-page"),h=g.attr("data-pageId"),v=e(this);if(g.closest(".js-pages-search-results").length&&(g=e("[data-pageId="+h+"]",e(".js-foldable-pages"))),"remove"===v.attr("data-btn")){var P=g.find(".ul-pageslist-title").text().trim()||"Page";return v.css("pointer-events","none"),e("#body-fict").css("pointer-events","none"),s.confirm({title:o("constructor.remove the page")+' "'+P+'"?',text:o("constructor.This action can not be undo"),ok:o("all.remove"),color:"ul-button-red",invert:!0,cancel:"",cancelCb:function(){return function(){v.css("pointer-events",""),e("#body-fict").css("pointer-events","")}}(),okCb:function(){return function(){var t=r.$page.find(".js-page.active").attr("data-pageId");g.hasClass("active")&&(g.parent().children(".js-page").eq(g.index()-1).trigger("click"),t=g.parent().children(".js-page").eq(g.index()-1).attr("data-pageId")),r.setPage(t,function(){r.removePage(h,function(){r.$page.find('[data-id-unique="'+g.data("id-unique")+'"]').remove(),e("#body-fict").css("pointer-events",""),r.scrollable.update(r.$page.find(".js-scrollable-pages"))})}),g.fadeOut(300,function(){g.css("display","none")})}}()}),!1}if("copy"===v.attr("data-btn"))return f.check("pagesLimit",{showPopupIfNotAvailable:!0,$popupTargetEl:v},function(t){t&&(r.isProcessedCopy||(r.isProcessedCopy=!0,r.copyPage(h,function(t){if(t){var a=v.parent().parent().data("id-unique");r.$page.find('[data-id-unique="'+a+'"]').each(function(a,r){if(e(r).closest(".js-pages-search-results").length){var n=t.clone();n.find(".ul-pageslist-sortable").remove(),e(r).after(n)}else e(r).after(t)})}r.isProcessedCopy=!1})))}),!1;if(!g.hasClass("edit")){var b=o("constructor.page settings"),y=!1,_=o("constructor.save");p&&(b=o("constructor.new page settings"),y=!0,_=o("constructor.add page"));var $=g.attr("data-id-unique");g.addClass("edit").siblings().removeClass("edit"),r.editPage(h,$,g,function(s){var d=r.$page.find('[data-id-unique="'+g.data("id-unique")+'"]');e(".js-ul-notify-close").length&&e(".js-ul-notify-close").trigger("click"),i.open({title:b,$targetEl:d,applyBtnText:_,pages:!0,titleSpecial:y,templateUrl:"text!/html/constructor/pageEditor/pageEditorPopup.html",templateData:{__:o,page:s,robotsTxtDisallow:a.params.robotsTxtDisallow,commonMetaImage:a.params.commonMetaImage,settingsUrl:"/sites/url/"+a.params.site+"/dashBoard/settings"},saveBtn:!1,afterOpen:function(){return function(){delete r.newData,delete r.oldData;var t=e(".ul-popup-body"),n=e('input[ul-model="title"]',t),o=e('[data-pageid="seo"] [ul-model="meta.title"]',t),s=t.find(".js-select-cover"),c=t.find(".js-meta-image-input"),f=t.find(".js-clear-meta-image"),h=t.find(".js-use-common-meta-image"),v=h.find("input")[0],P=e(h.find(".meta-image-switcher-help-icon")[0]);if(p)var b=g.find(".ul-pageslist-title").text().trim();p||(r.oldData=u.formParse(t),r.oldData.title=r.oldData.title.trim(),r.oldData.meta&&e.each(r.oldData.meta,function(e,t){r.oldData.meta[e]=t.trim()})),l=g.find(".ul-pageslist-title").text(),n.on("input.pageEditEvent",function(t){var a=e(t.currentTarget),r=a.val()||"",n=0<r.trim().length?"removeAttr":"attr";i.$savebtn[n]("disabled","disabled")}).on("keyup.pageEditEvent",function(){var t=e(this);setTimeout(function(){var e=t.val().trim();e.length?(o.attr("placeholder",e),d.find(".ul-pageslist-title").text(e),b&&d.find(".ul-pageslist-title").addClass("ul-color-white")):b&&(d.find(".ul-pageslist-title").removeClass("ul-color-white"),d.find(".ul-pageslist-title").text(b))},0)}).focus().trigger("input"),t.find('input[ul-model="title"], input[ul-model="id"], input[uyl-model="meta.title"]').on("keyup.pageEditEvent",function(e){13===e.keyCode&&i.hide()}),s.on("click.pageEditEvent",function(){var t=e(this);m.open({multiSelect:!1,apply:function(){return function(e){c.val(e[0].origin),t.css("background-image","url("+e[0].origin+")").removeClass("empty"),f.removeClass("hidden"),h.removeAttr("disabled"),P.removeClass("hidden")}}()})}),f.on("click.pageEditEvent",function(){var t=e(this);s.css("background-image",'url("/img/img-placeholder.svg")').addClass("empty"),c.val(""),h.length&&(e(v).prop("checked",!1).trigger("change"),P.addClass("hidden"),h.attr("disabled","")),t.addClass("hidden")}),h.on("change.pageEditEvent",function(){a.params.commonMetaImage=v.checked?c.val():""})}}(),afterClose:function(){return function(t,a){var s=null;if(r.newData=u.formParse(t),r.newData.title=r.newData.title.trim(),r.newData.meta&&e.each(r.newData.meta,function(e,t){r.newData.meta[e]=t.trim()}),p){var l=0;e.each(r.newData,function(){"object"===_typeof(this)?e.each(this,function(){this.length&&(l+=1)}):this.length&&(l+=1)}),l||(s="nosave")}var d=n.isEqual(r.oldData,r.newData);if(d||"nosave"===s)i._hide();else{if(r.newData._id=$,r.oldData&&(r.oldData._id=$),0===r.newData.title.length&&r.oldData){if(0===r.oldData.title.length)return void i._hide();r.newData.title=r.oldData.title}r.savePage(r.newData,g.attr("data-page-type"),function(e,n){require(["nf"],function(){function a(i,s){e?!r.oldData&&p||i.notify(o(s?"constructor.Changes pages canceled":"constructor.Page Settings saved"),s?"info":"success",{actions:[{title:o(s?"constructor.Revert changes":"constructor.undo"),disableAfterClick:!0,closeAfterClick:!0,cb:function(){return function(){r.savePage(s?r.newData:r.oldData,g.attr("data-page-type"),function(){s||a(i,!s)})}}()}]}):r.isValid(e,n,t)}return a}()),c=e,a(e)})}}}(),beforeClose:function(){return function(){!c&&l.trim().length&&d.find(".ul-pageslist-title").text(l.trim()),!r.$listPage.find(".active").length&&r.activePrevPage?r.setPage(r.activePrevPage):!r.$listPage.find(".active")&&r.setPage(r.$listPage.first(".js-page").attr("data-pageid")),e('.ul-popup-body input[ul-model="title"]').off(".pageEditEvent"),e(".ul-popup-body").off(".pageEditEvent"),e('.js-page[data-pageId=""]',t).remove(),r.scrollable.update(r.$page.find(".js-scrollable-pages")),d.removeClass("edit"),delete r.activePrevPage}}()})})}}).on("pagesLimitCheck.panelPages",function(){})}}(),savePagesOrder:function(){return function(t){var a=[],r=this;e.each(r.$listPage.children("li"),function(t,r){a.push(e(r).attr("data-id-unique"))}),r._savePagesOrder(a,!!t&&t)}}(),saveOrderFormOrder:function(){return function(t){var r=[],n=this;e.each(n.$listOrderForm.children("li"),function(t,a){r.push(e(a).attr("data-orderformid"))}),p.reorder(r,function(e){e||t&&s.notify(o("constructor.Pages order saved successfully"),"success",a.params.site)})}}(),setActivePage:function(){return function(t){var a=this,r=e('[data-pageid="'+t+'"]',a.$el);a.$page.find(".active").removeClass("active"),r.addClass("active")}}(),setPage:function(){return function(e,t){this.setActivePage(e),r.setPage("/sites/url/"+a.params.site+"/pages/id/"+e+"/edit",function(){a.hist.pushState({data:{url:"/sites/url/"+a.params.site+"/pages/id/"+e+"/edit"},title:"title",url:"/sites/url/"+a.params.site+"/pages/id/"+e+"/constructor"}),t&&t(),d.absClearDevicePosition(),"desktop"!==a.constructor.deviceMode.device&&("tablet"===a.constructor.deviceMode.device?d.absGridDevicePositionTablet():d.absGridDevicePositionPhone())})}}(),createPage:function(){return function(e,t,r,n){var s=this,l=c.getPageBlank(t);l.type=l._type=e,l._id=r||l._id;var u=s._itemTemplate({unique:n||l._id,curPageId:a.params.pageId,pageType:l._type,pageId:l._id,curPageTitle:l.title||o("constructor.new page")});return u.appendTo(s.$listPage),s.scrollable.update(s.$page.find(".js-scrollable-pages")),setTimeout(function(){s.scrollable.update(s.$page.find(".js-scrollable-pages")),i._position()},500),s.savePagesOrder(!0),u}}(),removePage:function(){return function(t,r){var n=this;c.remove(a.params.site,t,function(i){if(a.params.shop.productCardsQuantity=i.productCardsQuantity,e(document).trigger("siteChanged"),e(document).trigger("pageRemoved",{pageId:t}),e(".js-pages-search-form__input")&&e(".js-pages-search-form__input").val().length){var o=e(".js-pages-search-form__input").val().trim().toLowerCase();n.search.search(o)}e("#ul-panelPages").trigger("pagesLimitCheck",{isAllowedPageAdd:i.isAllowedPageAdd}),r()})}}(),editPage:function(){return function(e,t,r,n){var i=this;i.curPage={id:e,$item:r};var o=function(){return function(e){n(e)}}();e?c.get(a.params.site,t,o):n({title:"",id:"",_type:"",meta:{title:"",description:"",keywords:"",image:""}})}}(),copyPage:function(){return function(t,r){var n=this;c.copy(a.params.site,t,function(t){t&&(r(n.createPage(t._type,t.title,t.id,t._id)),n.setPage(t.id,function(){e(document).trigger("siteChanged")}),e("#ul-panelPages").trigger("pagesLimitCheck",{isAllowedPageAdd:t.isAllowedPageAdd}))},function(){s.notify("Произошла ошибка","error")})}}(),isValid:function(){return function(t,a,r){var n,i={meta:{}};a.err&&a.err.errors?(e.each(a.err.errors,function(e,t){if("id"===t.properties.path)return void(i.id=o("all."+t.properties.message));if("title"===t.properties.path)return"Path `{PATH}` is required."===t.properties.message&&(t.properties.message="not valid text title"),void(i.title=o("all."+t.properties.message));var a=t.properties.path.match(/.*?\.(.*$)/);a&&(i.meta[a[1]]=o("all."+t.properties.message))}),u.showErrors(r,i)):u.showErrors(r,a),n=e(".error",r).first().closest(".ul-popup-page").data("pageid"),e('.ul-popup-header li[data-target="'+n+'"]',r.parent()).trigger("click")}}(),savePage:function(){return function(t,r,n){var i=this,o=function(){return function(t){t.type=t._type||r||"common";var o=e(i._itemTemplate({unique:t._id,curPageId:a.params.pageId,pageType:t.type,pageId:t.id,curPageTitle:t.title}));i.curPage.id?(i.curPage.$item.find(".ul-pageslist-title").text(t.title),i.curPage.$item.attr("data-pageId",t.id)):(i.curPage.$item=o.appendTo(i.$listPage).addClass("active"),i.curPage.$item.removeClass("active"),i.curPage.$item.trigger("click"),e("#ul-panelPages").trigger("pagesLimitCheck",{isAllowedPageAdd:t.isAllowedPageAdd})),e(document).trigger("siteChanged"),n(!0)}}(),s=function(){return function(e){n(!1,e)}}();i.curPage.id?c.edit(a.params.site,i.curPage.id,t,o,s):(t._type=r||"common",c.create(a.params.site,t,o,s))}}(),_itemTemplate:function(){return function(t){return t=n.extend(t,{isTemplateServer:a.params.isTemplateServer||!1,__:o}),e(n.template(l,t))}}(),_savePagesOrder:function(){return function(e,t){c.savePagesOrder(e,a.params.site,function(){t||s.notify(o("constructor.Pages order saved successfully"),"success",a.params.site)})}}(),deinit:function(){return function(){e(document).off(".panelPages"),e("#ul-panelPages").off(".panelPages")}}()};return v});
//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map

//# sourceMappingURL=panel-pages.js.map
