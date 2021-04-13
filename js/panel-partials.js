"use strict";define("panelPartials",["jquery","_","U","history","uform","panelDialog","widget","js/constructor/panels/panel-partials/headerFooter"],function(n,i,e,t,a,r,u,o){return{init:function(){return function(){var i=this;i.$el=n("#js-panel-parials-settings, .js-super-switch"),n(".js-back-click",i.$el).click(function(){r.hide()}),n(".ul-checkbox-switch input",i.$el).on("change",function(){var i={};i[n(this).attr("ul-model")]=!n(this).prop("checked"),t.pushAndExec({act:"toggleWidgetInPartial",data:i})})}}(),displayWidgets:function(){return function(i,t,a){var r=this;"function"==typeof t&&(a=t,t=void 0),n.ajax({type:"post",url:"/sites/url/"+e.params.site+"/displayPartialWidgets",data:{widgets:JSON.stringify(i)},api:!0,ok:function(){return function(){n.extend(r.partialSettings,i),n.extend(e.params.hiddenWidgets,i),t||(n(document).trigger("siteChanged"),Object.keys(i).forEach(function(e){n("#"+e).length&&(n("#"+e).closest("header").length||n("#"+e).closest("footer").length)&&o.hideOrShowSection(i)})),n.each(i,function(i,e){var t=u.get(i),a=n("#"+i);return t?(e?a.hide():a.show(),void(t&&("ul-id-mainmenu-mainmenu"!==t.id&&"ul-id-mainmenu-main"!==t.id&&"ul-id-mainmenu-header"!==t.id||!e||a.parent().hasClass("ul-menu-fixed-container-inside"))&&t.render())):window.dispatch(window.actions.unseeWidget(i,e))}),"ul-id-mainmenu-mainmenu"in i?n(window).trigger("mainmenu.toggleMenu",i["ul-id-mainmenu-mainmenu"]):"ul-id-mainmenu-main"in i?n(window).trigger("mainmenu.toggleMenu",i["ul-id-mainmenu-main"]):"ul-id-mainmenu-header"in i&&n(window).trigger("mainmenu.toggleMenu",i["ul-id-mainmenu-header"]),a(null)}}(),noOk:function(){return function(){throw a(!0),new Error("Error, something wrong")}}()})}}(),deinit:function(){return function(){n(document).off("hideWidget")}}()}});
//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map

//# sourceMappingURL=panel-partials.js.map
