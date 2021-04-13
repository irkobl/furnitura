"use strict";define("linkPopoverMixin",["U","jquery","asyncjs","model/orderForm","_"],function(t,e,n,r,o){var i={_async:function(){return function(){var t,e,n;for(2===arguments.length&&(e=arguments[0],n=arguments[1],null==this.readiness_stack&&(this.readiness_stack=[]),this.readiness_stack.push({action:e,args:n}));this._ready&&0<this.readiness_stack.length;)t=this.readiness_stack.pop(),this[t.action].apply(this,t.args)}}(),_loadData:function(){return function(i){var a=this,u=function(){return function(){}}();i=i||function(){},a.orderFormModel=r,n.waterfall([function(n){e.ajax({url:"/sites/url/"+t.params.site+"/pages",api:!0,ok:function(){return function(t){n(null,{pages:t.pages})}}()})},function(n,r){e.ajax({url:"/sites/url/"+t.params.site+"/getHeaders",api:!0,ok:function(){return function(t){var i=o.groupBy(t,function(t){return t.pageId});n.pages.forEach(function(t){t.id="index"===t.id?"":t.id,t.anchors=[],i[t._id]&&i[t._id].forEach(function(n){var r;try{r=e(n.title).text()}catch(o){r=n.title}t.anchors.push({title:r,id:n.id})})}),r(null,n)}}()})},function(t,e){var n=function(){return function(){}}();a.orderFormModel.list(n.ok(function(n){t.orderForm=n,e(null,t)}))}],u.ok(function(t){i(t)}))}}(),show:function(){return function(){this._async("_show",arguments)}}(),hide:function(){return function(){this._async("_hide",arguments)}}(),destroy:function(){return function(){this._async("_destroy",arguments)}}(),_getUrlData:function(){return function(n){var r=this;if(n=n||r.currentUrl,"#"==n&&(n="/"+t.params.page,n="/index"===n?"/":n),""==n||"undefined"==n||"null"==n||void 0==n)return{type:"nolink",href:"",exist:!1};var o=t.orderFormUrl.check(n),i={type:"outer",href:n,exist:!0},a=function(){return function(t,e){var n={type:"inner",exist:!1};return t=t.replace("/",""),r.data.pages.some(function(r){return r.id===t?(n.pageTitle=r.title,n.pageId=r._id,n.pageUrl="/preview/"+window.cache.site+"/"+(""===t?"index":t),e&&(n.anchors=r.anchors),n.exist=!0,!0):void 0}),n}}();if(t.params.isULanding&&"#"!==n&&"/"!==n){var u=new RegExp("^/"+t.params.site);n=n.replace(u,""),n.length?"#"===n[0]&&(n="/"+n):n="/"}if(/^\/[a-zа-яё0-9_\-]{0,256}$/.test(n)&&(i=e.extend(i,a(n,!1))),/^\/[a-z0-9_\-]{0,63}#ul-id-[A-Za-z0-9_\-]*-[A-Za-z0-9_\-]*$/.test(n)){var s=n.split("#"),c=a(s[0],!0);c.type="anchor",c.exist=!1,null!=c.pageId&&(c.anchors.some(function(t){return t.id===s[1]?(c.anchorTitle=t.title,c.anchorId=s[1],c.exist=!0,!0):void 0}),delete c.anchors),i=e.extend(i,c)}return null!=o&&(i.type="orderForm",i.exist=!1,r.data.orderForm.some(function(t){return t._id===o||t.blankId===o?(i.orderFormTitle=t.title.length?t.title:r.__("orderForm.emptyTitle"),i.orderFormId=t._id,i.exist=!0,!0):void 0})),i}}(),addShowEvents:function(){return function(){var t=this;t.timer=0,t.opt.$target.on("mouseenter.linkPopoverAuto",function(){"edit"===t.currentPage||(clearInterval(t.timer),t.show())}).on("mouseleave.linkPopoverAuto",function(){"edit"===t.currentPage||(clearInterval(t.timer),t.timer=setTimeout(function(){t.hide()},t.opt.timeout))}),t.popover&&t.popover.$el.on("mouseenter.linkPopoverAuto",function(){"edit"===t.currentPage||clearInterval(t.timer)}).on("mouseleave.linkPopoverAuto",function(){"edit"===t.currentPage||(clearInterval(t.timer),t.timer=setTimeout(function(){t.hide()},t.opt.timeout))})}}(),updateShowEvents:function(){return function(t){var e=this;null!==t&&void 0!==t&&t.length&&(e.removeShowEvents(),e.opt.$target=t,e.addShowEvents())}}(),removeShowEvents:function(){return function(){var t=this;t.opt.$target&&t.opt.$target.off(".linkPopoverAuto"),t.popover&&t.popover.$el.off(".linkPopoverAuto")}}(),updateTarget:function(){return function(t){var e=this;null!==t&&void 0!==t&&t.length&&(e.hide(),e.opt.$target=t,setTimeout(function(){e.show()},100))}}()};return i});
//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map

//# sourceMappingURL=linkPopoverMixin.js.map
