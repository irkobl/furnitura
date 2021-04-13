"use strict";define("linkPopover",["jquery","U","linkPopoverMixin","_","popover","text!html/linkPopover/layout.html","text!html/linkPopover/popover.html","text!html/linkPopover/linkEdit.html","i18n","orderForm","model/orderForm","aDialog","nf","validation","logActions","ul-framework/scrollbar","css!/css/require/linkPopover.css"],function(e,t,o,n,r,i,l,a,s,d,c,p,u,v,f,h){var k=[],m={_init:function(){return function(){var o=this;o.id=t.guid(),o.__=s("constructor"),k.push(o.id),f.add({fromFile:"js/ulib/linkPopover/linkPopover.js",title:"LinkPopover create",desc:"Instances length: "+k.length}),o._loadData(function(t){o.data=t,o.popover=new r({gravity:o.opt.gravity,$target:o.opt.$target,rect:o.opt.rect,stay_first:o.opt.stay_first,animation:!1,templateData:o.opt,html:i}),e(document).on("orderFormChange.linkPopover-"+o.id,function(e,t){o._changeOrderForm(t)}),o.$link=o.popover.$el.find(".ul-linkPopover-link"),o.$linkEdit=o.popover.$el.find(".ul-linkPopover-linkEdit"),o.currentUrl=o.opt.href,o.currentNewWindow=o.opt.newWindow,o._switchPage(o.opt.defPage),o.opt.showEvents&&o.addShowEvents(),o._ready=!0,o.opt.onInit(),o._async()})}}(),_changeOrderForm:function(){return function(e){var t=this;null!=e&&null!=e.action&&t.data.orderForm.some(function(o,n){var r=null==e.id?e.data._id:e.id;return o._id===r?("remove"===e.action?delete t.data.orderForm[n]:t.data.orderForm[n]=e.data,!0):void 0}),t._switchPage(t.currentPage,t.curTab)}}(),_switchPage:function(){return function(o,r){var i=this,p={link:{show:function(){return function(){i.$link.html(n.template(l,{opts:i.opt,__:i.__,current:i._getUrlData()})).show(),i.$link.on("click.linkPopover",".js-linkPopover-edit",function(){i.opt.customEvents?i.opt.onEdit():i._switchPage("edit")}).on("click.linkPopover",".js-linkPopover-remove",function(){i.opt.customEvents?i.opt.onRemove():(i.setCurrent(i._getUrlData("")),i.hide())}).on("click.linkPopover","a",function(e){var t=i._getUrlData();if("orderForm"===t.type){if(e.preventDefault(),!t.exist)return;i.popover.detach(),i._switchPage("edit"),d.openPreviewMode(t.orderFormId,i.opt.orderFormData(),function(){i.popover&&(i.popover.attach(),i.popover._show())},{extendClass:"js-special-action",specialModeOverlay:!1})}}),i.lastSelectedState=null}}(),hide:function(){return function(){i.$link&&(i.$link.off(".linkPopover"),i.$link.html("").hide())}}()},edit:{show:function(){return function(){var e=this,o=i._getUrlData(i.lastSelectedState.url);i.$linkEdit.html(n.template(a,{opts:i.opt,data:i.data,__:i.__,current:o,newWindow:i.lastSelectedState.newWindow,orderFormGetPrefix:t.orderFormUrl.get})).show(),r=r||o.type,e._setTab(r),e.addEvents(),i.opt.cbOpenEdit(),i.popover.$el.addClass("ul-popover-opacity"),i.visible=!0}}(),addEvents:function(){return function(){var o=this;e(document).on("keyup.linkPopover",function(e){13===e.keyCode&&setTimeout(function(){var e=o._getData();null!==e&&(i.setCurrent(e),i.hide())},0)}),i.$linkEdit.on("change.linkPopover",".js-linkPopover-newWindow input",function(t){t.preventDefault();var o={type:i._getUrlData(i.lastSelectedState.url).type,newWindow:i.lastSelectedState.newWindow};o.type="outer"===o.type?"outer":"inner",o.type==i.curTab&&(i.lastSelectedState.newWindow=e(".js-linkPopover-newWindow input",i.$linkEdit).is(":checked"))}).on("click.linkPopover",".js-linkPopover-save",function(e){e.preventDefault();var t=o._getData();null!==t&&(i.setCurrent(t),i.hide())}).on("click.linkPopover",".js-linkPopover-cancel",function(e){e.preventDefault(),i.hide()}).on("click.linkPopover",".js-linkPopover-edit-tabs li",function(t){t.preventDefault(),o._setTab(e(this).attr("data-page"))}).on("click.linkPopover",".js-show-anchors",function(t){t.preventDefault();var o=e(this).closest(".js-linkPopover-innerItem"),n=e(this).closest(".js-linkPopover-edit-page");o.hasClass("ul-js-showAnchors")?(o.find(".ul-linkPopover-edit-anchors").slideUp(300),o.removeClass("ul-js-showAnchors")):(n.find(".ul-linkPopover-edit-anchors").slideUp(300),n.find(".js-linkPopover-innerItem").removeClass("ul-js-showAnchors"),o.find(".ul-linkPopover-edit-anchors").slideDown(300),o.addClass("ul-js-showAnchors"))}).on("click.linkPopover",".js-linkPopover-edit-item",function(t){t.preventDefault(),o._removeErrors(),e(".js-linkPopover-edit-item",i.$linkEdit).removeClass("active"),e(".js-linkPopover-edit-input",i.$linkEdit).val(""),e(this).addClass("active"),o._setLastState(e(this).attr("src"))}).on("click.linkPopover",".ul-linkPopover-edit-orderFormItemActions span",function(o){o.preventDefault();var n=e(this).closest(".ul-linkPopover-edit-orderFormItem"),r=n.attr("data-id"),l=e(this).attr("data-action");if("preview"===l)i.popover.detach(),d.openPreviewMode(r,i.opt.orderFormData(),function(){i.popover&&(i.popover.attach(),i.popover._show())},{extendClass:"js-special-action",specialModeOverlay:!1});else if("copy"===l){var a=[];n.siblings(".ul-linkPopover-edit-orderFormItem").each(function(){a.push(e(this).find(".ul-linkPopover-edit-item-wrapper").html().trim())});var c=t.generateTitle(n.find(".ul-linkPopover-edit-item-wrapper").html().trim(),a,s("constructor.orderForm.copy"));i.orderFormModel.copy(r,c,function(t,o){if(!t){var n={};n.data={},e.extend(!0,n.data,o),n.action="copy",i._changeOrderForm(n)}})}else"edit"===l?(i.popover.detach(),d.isSyncedWithButton=i._getUrlData(i.lastSelectedState.url).orderFormId===r,d.edit(r,i.opt.orderFormData(),function(){i.popover.attach(),i._changeOrderForm({action:null})})):"remove"===l&&u.confirm({title:i.__("linkPopover.title alert orderForm remove"),text:i.__("linkPopover.text alert orderForm remove"),ok:i.__("linkPopover.btn alert orderForm remove"),cancel:"",color:"ul-button-red",okCb:function(){return function(){i.orderFormModel.remove(r)}}()})}).on("click.linkPopover",".js-linkPopover-orderFormAdd",function(e){e.preventDefault();var t=i.orderFormModel.defForm();i.orderFormModel.add(t)}).on("change.linkPopover",".js-linkPopover-edit-input",function(t){t.preventDefault(),o._removeErrors();var n=o._getLinkPrefix(e(this).val());e(".js-linkPopover-edit-item",i.$linkEdit).removeClass("active"),e(this).val(n),o._setLastState(n)});var n,r=e('.js-linkPopover-edit-page[data-type="orderForm"]');r.sortable({containment:"parent",distance:5,delay:150,axis:"y",tolerance:"pointer",start:function(){return function(e,t){n=t.item.index()}}(),stop:function(){return function(o,i){if(n!==i.item.index()){var l=[];r.children().each(function(){l.push(e(this).attr("data-id"))}),c.reorder(l,function(e){e||u.notify(s("constructor.Pages order saved successfully"),"success",t.params.site)})}}}()})}}(),_setLastState:function(){return function(t){i.lastSelectedState={url:t,newWindow:e(".js-linkPopover-newWindow input",i.$linkEdit).is(":checked")}}}(),hide:function(){return function(){i.$linkEdit&&(i.$linkEdit.off(".linkPopover"),e(document).off("keypress.linkPopover"),i.$linkEdit.html("").hide(),i.popover&&i.popover.$el.removeClass("ul-popover-opacity"))}}(),_getData:function(){return function(){var t=this,o=e(".js-linkPopover-error-msg",i.$linkEdit),n=e('.js-linkPopover-edit-page[data-type="'+i.curTab+'"]',i.$linkEdit),r="outer"===i.curTab?n.find(".js-linkPopover-edit-input"):n,l="outer"===i.curTab?n.find(".js-linkPopover-edit-input").val():n.find(".js-linkPopover-edit-item.active").attr("src"),a="",s=i.__("linkPopover");return"orderForm"!==i.curTab||n.find(".js-linkPopover-edit-item").length||(a=" empty"),null!==l&&void 0!==l&&l.length?(t._removeErrors(),{url:l,newWindow:e(".js-linkPopover-newWindow input",i.$linkEdit).is(":checked")}):(r.addClass("error"),o.text(s("error "+i.curTab+a)).addClass("ul-js-linkPopover-error-msg-visible"),null)}}(),_removeErrors:function(){return function(){var t=e('.js-linkPopover-edit-page[data-type="'+i.curTab+'"]',i.$linkEdit),o="outer"===i.curTab?t.find(".js-linkPopover-edit-input"):t,n=e(".js-linkPopover-error-msg",i.$linkEdit);o.removeClass("error"),n.html("").removeClass("ul-js-linkPopover-error-msg-visible")}}(),_getLinkPrefix:function(){return function(e){e=e.replace(/\s/g,"");var t="http://",o=new RegExp(/^tel\:/i);return e&&!o.test(e)&&(v.email(e)?e="mailto:"+e:e.substr(0,t.length)!==t&&"https://"!==e.substr(0,"https://".length)&&-1===e.indexOf("@")&&(e=t+e)),e}}(),_setTab:function(){return function(t){"nolink"===t&&(t="outer"),"anchor"===t&&(t="inner"),i.$linkEdit.find(".js-linkPopover-edit-tabs li").removeClass("active"),i.$linkEdit.find('.js-linkPopover-edit-tabs li[data-page="'+t+'"]').addClass("active"),i.$linkEdit.find(".js-linkPopover-edit-page").hide(),i.$linkEdit.find('.js-linkPopover-edit-page[data-type="'+t+'"]').show(),"orderForm"===t?(i.$linkEdit.find(".js-linkPopover-orderFormAdd").show(),i.$linkEdit.find(".js-linkPopover-newWindow").hide()):(i.$linkEdit.find(".js-linkPopover-orderFormAdd").hide(),i.$linkEdit.find(".js-linkPopover-newWindow").show()),this._removeErrors(),i.popover&&i.popover._locate(),i.curTab&&h.destroy(e('.js-linkPopover-edit-page[data-type="'+i.curTab+'"]',i.$linkEdit)),h.create(e('.js-linkPopover-edit-page[data-type="'+t+'"]',i.$linkEdit)),i.curTab=t,this.checkSwitcherNewWindow()}}(),checkSwitcherNewWindow:function(){return function(){var t=e(".js-linkPopover-newWindow input",i.$linkEdit),o={type:i._getUrlData(i.lastSelectedState.url).type,newWindow:i.lastSelectedState.newWindow};o.type="outer"===o.type?"outer":"inner",o.type==i.curTab?t.prop("checked",o.newWindow):"outer"===i.curTab?t.prop("checked",!0):t.prop("checked",!1)}}()}};i.lastSelectedState||(i.lastSelectedState={url:i.currentUrl,newWindow:i.currentNewWindow}),Object.keys(p).forEach(function(e){null!=p[e]&&p[e].hide&&p[e].hide()}),i.currentPage=o,null!=p[o]&&p[o].show&&p[o].show(),i.popover&&i.popover._locate()}}(),relocate:function(){return function(){var e=this;setTimeout(function(){e.popover&&e.popover._locate()},0)}}(),_show:function(){return function(t){var o=this;e(document).find(".ul-linkPopover").length||(t=e.extend({$target:o.opt.$target,rect:o.opt.rect},t),setTimeout(function(){o.popover&&(o.popover.show(t),o.popover._locate(),o.opt.cbShow(),o.visible=!0)},0))}}(),_hide:function(){return function(){var e=this;e._ready&&e.visible&&(e._switchPage("link"),p.opened&&!p.noClose&&(t.layers.off(!0),p.hide()),e.popover&&e.popover.hide(),e.opt.cbHide(),e.visible=!1)}}(),_destroy:function(){return function(){this.curTab&&h.destroy(e('.js-linkPopover-edit-page[data-type="'+this.curTab+'"]',this.$linkEdit)),this._hide(),this._switchPage("none"),e(document).off("orderFormChange.linkPopover-"+this.id),this.opt.showEvents&&this.removeShowEvents(),k.splice(k.indexOf(this.id),1),delete this.popover,f.add({fromFile:"js/ulib/linkPopover/linkPopover.js",title:"LinkPopover remove",desc:"Instances length: "+k.length})}}(),setCurrent:function(){return function(){this._async("_setCurrent",arguments)}}(),_setCurrent:function(){return function(o,n){var r=this;if(null!==o){if(r.currentUrl=o.url,r.currentNewWindow=o.newWindow,!n){var i=e.extend(r._getUrlData(),{newWindow:r.currentNewWindow});if(t.params.isULanding&&i.href&&("inner"===i.type||"anchor"===i.type)&&"#"!==i.href)if("/"===i.href)i.href+=t.params.site;else{var l=i.href.split("/"),a=new RegExp(t.params.site);"#"===i.href[1]?i.href="/"+t.params.site+i.href.slice(1):!a.test(l[1])&&(i.href="/"+t.params.site+i.href)}r.opt.apply(i)}r._switchPage("link")}}}()},P=function(){return function(t){this.opt=e.extend({$target:null,rect:null,href:null,anchors:!0,types:["outer","inner","orderForm"],gravity:["bottom","top"],showEvents:!1,newWindow:!0,timeout:400,removeBtn:!1,editBtn:!0,linkDesc:!0,defPage:"link",stay_first:!1,noLinkText:!0,customEvents:!1,onRemove:function(){return function(){}}(),onInit:function(){return function(){}}(),onEdit:function(){return function(){}}(),cbOpenEdit:function(){return function(){}}(),orderFormData:function(){return function(){}}(),cbHide:function(){return function(){}}(),cbShow:function(){return function(){}}(),apply:function(){return function(){}}()},t),this._init()}}();return P.prototype=e.extend(m,o),P});
//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map

//# sourceMappingURL=linkPopover.js.map
