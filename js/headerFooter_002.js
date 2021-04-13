"use strict";define("device-headerFooter",["jquery","U","logActions","history","device-helper","js/constructor/panels/panel-partials/headerFooter","panelPartials"],function(e,t,r,o,n,i,a){return{hideHeaderFooter:function(){return function(i){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};return r.add({file:"js/edit/constructor.js",title:"hideHeaderFooter"}),o.pushAndExec({act:"hideHeaderFooter",data:{type:i,pageId:t.params.pageId,"new":a,old:n._getDataDeviceHiddenSetting(e(""+i))}},d)}}(),__hideHeaderFooter:function(){return function(t){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};t&&(n.hideShowDomNode(null,r,t),e.each(r,function(r,o){o&&e(t).attr("data-hidden",!0)}),this.save({act:"hideHeaderFooter",type:t,pageId:n._getPageId(),nodeSettings:r}),o())}}(),__removeHeaderFooter:function(){return function(r,o){var n=(3<arguments.length&&void 0!==arguments[3]?arguments[3]:function(){},e(r)),d=o[r]?"addClass":"removeClass";e.ajax({url:"/sites/url/"+t.params.site+"/removeHeaderFooter",method:"PUT",data:{isRemove:o},success:function(){return function(){n[d]("element-"+r+"-removed"),e("#body").attr("data-is-removed",JSON.stringify(o)),t.params.isRemove[r]=o[r];var s=i.getWidgetsInSectionWithStatus(r,o[r]);a.displayWidgets(s,!0,function(){}),e(window).trigger("removeHeaderFooter",r),t.constructor.posContainerHandler()}}(),error:function(){return function(e){throw new Error(e)}}()})}}()}});
//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map

//# sourceMappingURL=headerFooter.js.map
