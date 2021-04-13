"use strict";define("ul-framework/groupFold",["jquery","_","tpl!ul-framework/groupFold/item"],function(t,e,n){var i=e.template(n),o={init:function(){return function(t){var e=this;e.key=t,e.data={unfolded:[]};try{e.data=JSON.parse(localStorage[t])}catch(n){}}}(),getData:function(){return function(){return this.data}}(),save:function(){return function(){var t=this;try{localStorage[t.key]=JSON.stringify(t.data)}catch(e){}}}(),remember:function(){return function(t){var e=this;-1===e.data.unfolded.indexOf(t)&&(e.data.unfolded.push(t),e.save())}}(),forget:function(){return function(t){var e=this,n=e.data.unfolded.indexOf(t);-1===n||(e.data.unfolded.splice(n,1),e.save())}}()},a={defaults:{$el:t(document.body),closeOthersOnItemOpen:!1,titleStyle:"h3",titleDivider:{isWide:!1,isAlwaysShown:!1,isLastShown:!1},foldingRemember:{isEnabled:!1,key:"groupFoldMemory"},items:[],callbacks:{whileFoldToggling:function(){return function(){}}(),onFoldToggle:function(){return function(){}}(),onFoldToggleEnd:function(){return function(){}}(),afterRender:function(){return function(){}}()}},itemDefaults:{id:Math.random().toString().slice(2),title:"",iconClass:"",contentHTML:"",attributes:{},isFolded:!0,isNested:!1,isDisabled:!1,help:{isEnabled:!1,title:"Help title",onClick:function(){return function(){}}()}},elClasses:"ul-group-fold js-group-fold",init:function(){return function(e){var n=this;n.opts=t.extend(!0,{},n.defaults,e),n.create(e),n.addListeners(e)}}(),create:function(){return function(e){var n=this;if(n.opts.foldingRemember.isEnabled){n.db=Object.create(o),n.db.init("ul-gf_"+n.opts.foldingRemember.key);var i=n.db.getData()}1===e.items.length&&e.items[0].isNested&&(e.items[0].isLocked=!0);var a=e.items.reduce(function(e,o){var a=n.extendItem(o);n.opts.foldingRemember.isEnabled&&i.unfolded.length&&(a.isFolded=-1===i.unfolded.indexOf(a.id));var r=t(n.getItemHTML(a));return o.isLocked&&r.attr({"data-is-folding-locked":"true","data-is-off-hover":"true"}),a.help.isEnabled&&r.on("click.groupFold",".js-group-fold__item__help",function(){o.help.onClick(t(this),r)}),e=e.add(r),n.opts.callbacks.afterRender(e),e},t());e.$el.empty().addClass(n.elClasses).attr("data-is-title-divider-wide",n.opts.titleDivider.isWide).attr("data-is-title-divider-always-shown",n.opts.titleDivider.isAlwaysShown).attr("data-is-title-divider-last-shown",n.opts.titleDivider.isLastShown).attr("data-title-style",n.opts.titleStyle).append(a),e.$el.parents(".ul-group-fold").length&&e.$el.closest(".js-group-fold__item").attr("data-has-subs",!0)}}(),addListeners:function(){return function(e){var n=this;e.$el.on("click.groupFold",".js-group-fold__item__toggle",function(e){t(e.target).hasClass("js-group-fold__item__help")||n.toggleFolding(t(this).closest(".js-group-fold__item"),!1)})}}(),toggleFolding:function(){return function(e,n){var i=this;if(e.length&&!e.attr("data-is-folding-locked")){e.attr("data-is-folding-locked","true");var o="true"===e.attr("data-is-folded"),a=o?"unfold":"fold",r=t(".js-group-fold__item__content",e).eq(0),d=r.outerHeight();if(!n&&o&&i.opts.closeOthersOnItemOpen&&e.siblings().not('[data-is-folded="true"]').not('[data-is-folding-locked="true"]').each(function(){i.toggleFolding(t(this),!0)}),r.css({maxHeight:d}),e.removeAttr("data-auto-height"),i.opts.foldingRemember.isEnabled){var l=e.attr("data-group-fold-item-id"),s="unfold"==a?"remember":"forget";i.db[s](l)}setTimeout(function(){function n(t){l||t>1e3||(i.opts.callbacks.whileFoldToggling(e),setTimeout(function(){n(t+50)},50))}e.attr({"data-is-fold-processing":"true","data-is-opening":o}),e.removeAttr("data-no-transition"),i[a](e,r,d,function(t){i.opts.callbacks.onFoldToggle(e,t)});var l=!1;n(0);var s=Math.random().toString().slice(2);r.on("transitionend."+s,function(n){t(n.target).is(r)&&"max-height"===n.originalEvent.propertyName&&(l=!0,r.off("."+s),e.removeAttr("data-is-fold-processing"),"unfold"==a&&e.attr("data-auto-height","true").attr("data-no-transition","true"),e.removeAttr("data-is-folding-locked data-is-opening"),i.opts.callbacks.onFoldToggleEnd(e,a))})},0)}}}(),fold:function(){return function(t,e,n,i){i(t.outerHeight()-n),setTimeout(function(){t.attr("data-is-folded","true"),e.css({maxHeight:0})},0)}}(),unfold:function(){return function(t,e,n,i){t.removeAttr("data-is-folded");var o=e.clone();o.css({opacity:0,position:"absolute",transition:"none",maxHeight:"none"}).find(":checked").removeAttr("checked").end().insertAfter(e);var a=o.outerHeight();i(t.outerHeight()+a),setTimeout(function(){e.css("max-height",a),o.remove()},0)}}(),addItem:function(){return function(e){var n=this,i=t(n.getItemHTML(n.extendItem(e)));return n.opts.$el.append(i),i}}(),extendItem:function(){return function(e){var n=this;return t.extend(!0,{},n.itemDefaults,e)}}(),getItemHTML:function(){return function(n){var o=t.extend({},n);return delete o.contentHTML,delete o.template,delete o.templateData,o.contentHTML=n.contentHTML||e.template(n.template,n.templateData),o.attributes=Object.keys(n.attributes).map(function(t){return t+'="'+n.attributes[t]+'"'},"").join(" "),i(o)}}(),removeItem:function(){return function(t){var e=this;e.opts.$el.find('[data-group-fold-item-id="'+t+'"]').remove()}}(),foldItem:function(){return function(t){var e=this,n=e.opts.$el.find('[data-group-fold-item-id="'+t+'"]').not('[data-is-folded="true"]').not('[data-is-folding-locked="true"]');e.toggleFolding(n,!1)}}(),unfoldItem:function(){return function(t){var e=this,n=e.opts.$el.find('[data-group-fold-item-id="'+t+'"][data-is-folded="true"]').not('[data-is-folding-locked="true"]');e.toggleFolding(n,!1)}}(),setItemTitle:function(){return function(t,e){var n=this;n.opts.$el.find('[data-group-fold-item-id="'+t+'"]').find(".js-group-fold__item__title").text(e)}}(),setItemDisabled:function(){return function(t,e){var n=this;n.opts.$el.find('[data-group-fold-item-id="'+t+'"]').attr("data-is-disabled",e)}}(),setItemActive:function(){return function(t,e){var n=this;n.opts.$el.find('[data-group-fold-item-id="'+t+'"]').attr("data-is-active",e)}}(),destroy:function(){return function(){var t=this;t.opts.$el.find(".js-group-fold__item").off(".groupFold").end().off(".groupFold").empty().removeClass(t.elClasses).removeAttr("data-is-title-divider-wide").removeAttr("data-is-title-divider-always-shown").removeAttr("data-title-style")}}()};return function(t){var e=Object.create(a);return e.init(t),e}});
//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map

//# sourceMappingURL=groupFold.js.map
