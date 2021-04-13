"use strict";define(["require","model/pages","page","popover","U","i18n","nf","asyncjs","jquery","widget","js/edit/constructorHelpers"],function(o,e,t,r,n,c,i,s,a,l,p){var u=n.params.site,d=null;o(["constructor"],function(o){d=o});var f={init:function(){return function(o){var t=this;if(t._popover&&t.closePopover(t._popover),!o||!o.blockId||!o.$btnClicked)return void console.error("Error! Wrong opts!");var s=o.$btnClicked.closest(".ul-block-controls").addClass("ul-block-controls-visible--forced");e.load(u,function(e){var a=e.filter(function(o){return o.id!==n.params.page&&o.isEditable});if(0===a.length)return void i.notify(c("constructor.copy to page.errors.no pages for copy"),"info");var l=new r({$target:o.$btnClicked,gravity:["top","bottom"],templateUrl:"html/constructor/copyBlockToPagePopover.html",templateCss:"/css/require/pagesList.css",templateData:{pages:a,i18n:c},onAfterOpen:function(){return function(){l.$root.addClass("ul-popover-wrap--with-overlay"),l.$el.addClass("ul-popover-opacity"),t.addPopoverListeners(l,o.blockId)}}(),onBeforeClose:function(){return function(){t.removePopoverListeners(l),s.removeClass("ul-block-controls-visible--forced")}}()});l.show()})}}(),addPopoverListeners:function(){return function(o,e){var t=this;t._popover=o,o.$root.on("click.copyBlock",function(e){a(e.target).hasClass("ul-popover-wrap")&&t.closePopover(o)}),o.$el.on("click.copyBlock",".js-copy-block-popover__close",function(){t.closePopover(o)}).on("click.copyBlock",'.js-copy-block-popover__page[data-is-active="false"]',function(){a(this).attr("data-is-active","true").siblings().attr("data-is-active","false")}).on("click.copyBlock",".js-copy-block-popover__submit",function(){var r=o.$el.find('.js-copy-block-popover__page[data-is-active="true"]').attr("data-page-id");t.closePopover(o),r&&t.copyBlockToPage(r,e,0)})}}(),closePopover:function(){return function(o){var e=this;e.removePopoverListeners(o),o.hide()}}(),removePopoverListeners:function(){return function(o){o.$root.off(".copyBlock"),o.$el.off(".copyBlock"),this._popover=null}}(),copyBlockToPage:function(){return function(o,e,t){var r=a("#"+e),n=r.find(".ul-widget").map(function(){return a(this).attr("id")}).get();return n.length?void window.dispatch(window.actions.copyBlockToPage(n,arguments)):this._realCopyBlockToPage([],o,e,t)}}(),_realCopyBlockToPage:function(){return function(o,e,r,c){var i=this;d&&(p.lockConstructor(),p.getBlockJSON(r,o,function(o){var s="/sites/url/"+u+"/pages/id/"+e+"/edit",a=0,l=null;if(e===n.params.page)o.params.floating.enabled=!1,i.insertBlockToPage({sourcePageId:n.params.pageId,sourceBlockId:r,block:o,indexDrop:c});else{var p=function(){return function(){2>++a||i.insertBlockToPage({sourcePageId:n.params.pageId,sourceBlockId:r,block:o,indexDrop:c})}}();t.setPage(s,function(o){l=o,p()},p),n.hist.pushState({data:{url:s},title:"title",url:"/sites/url/"+u+"/pages/id/"+e+"/constructor"}),d.actionsPopover&&d.actionsPopover.hide()}}))}}(),insertBlockToPage:function(){return function(o){d.createBlockFromBlockJSON({sourcePageId:o.sourcePageId,sourceBlockId:o.sourceBlockId,block:o.block,index:o.indexDrop},function(){}),p.unlockConstructor()}}()};return window.signals.copyBlockToPage.listen(function(o,e){return new Promise(function(t){f._realCopyBlockToPage.bind(f,e).apply(null,o),t()})}),{init:f.init.bind(f),copy:f.copyBlockToPage.bind(f)}});
//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map
