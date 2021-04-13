"use strict";define("widget-mainmenu-form",["jquery","_","uform","U","page","nf","i18n","text!/widgets/mainmenu/html/item.html","ul-framework","customClasses","jquery-nested-sortable","widget-mainmenu-serialize"],function(e,t,i,n,a,r,s,l,o,d){return{itemEjs:t.template(l),$currentEditable:null,maxLevel:3,kostyl:!1,maxNoneLevel:1,init:function(){return function(t){var i=this.$el=e("#mainmenu-form-block"),n=this.$sortable=i.find("#nested-sortable-section"),a=this;this.me=t,0===t.data.children.length?n.append("<ol></ol>"):n.append(this.genMenu(t.data.children)),n.find("ol").addClass("sortable ui-sortable"),n.find("> ol").attr("data-item-id","root"),n.find("ol").nestedSortable({handle:"div",items:"li",maxLevels:a.maxLevel,tabSize:15,isAllowed:function(){return function(e,t){if(t){var i=t.parents("li").length;if("none"===e.data("linkType")){if(i>=a.maxNoneLevel)return!1;if(e.find("li[data-link-type=none]").length)return!1}if(i>=2)return!1}return!0}}(),toleranceElement:"> div",placeholder:{element:function(){return function(){return e('<li class="placeholder"><div></div></li>')[0]}}(),update:function(){return function(){}}()}}),this.indexPageId=Object.keys(this.me.pageMap).filter(function(e){return"index"===a.me.pageMap[e]}).pop(),e(".js-fm-switcher input",this.$el).prop("checked",this.me.data.settings.isFixed),this.refreshSettings(),this.attachHandlers(),d.init({$target:i,widget:t})}}(),possibleParents:function(){return function(e){var t=this,i=this.getExclude(e),n=[],a=this.getFlatItems(),r=a.filter(function(t){return t.itemId===e}),l=r[0]?r[0].recLvl:0,o=(this.$currentEditable.data("linkType"),this.$currentEditable.find("li[data-link-type=none]").length);return n.push({value:"root",text:s("widgets.mainmenu.root page"),allowNone:!0}),a.forEach(function(e){var a=!0;(e.level>t.maxNoneLevel||o)&&(a=!1),e.level>=t.maxLevel||e.level+l>=t.maxLevel||i[e.itemId]||n.push({value:e.itemId,text:e.title,allowNone:a})}),n}}(),getExclude:function(){return function(t){var i={};return i[t]=!0,this.$sortable.find('li[data-item-id="'+t+'"] li').each(function(){i[e(this).data("item-id")]=!0}),i}}(),editableParent:function(){return function(){return this.$currentEditable.parent().closest("li").first().data("item-id")||"root"}}(),cleanList:function(){return function(){this.$sortable.find("ol ol:not(:has(li))").remove(),this.$sortable.find("ol > li:not(:has(ol))").css("margin-bottom","0px")}}(),attachHandlers:function(){return function(){this.$el.on("click.menuEvent","#add-item",this.addItem.bind(this)).on("click.menuEvent",'span[role="settings"]',this.itemSettings.bind(this)).on("click.menuEvent",'span[role="remove"]',this.removeItem.bind(this)).on("change.menuEvent",".js-fm-switcher input",this.saveSettings.bind(this)).on("click.menuEvent",".js-fm-settings",this.fixedSettings.bind(this)),this.$sortable.find("ol").on("sortstart.menuEvent",this.sortStart.bind(this)).on("sortstop.menuEvent",this.sortStop.bind(this)),e(document).on("click.menuEvent",".js-w-mainmenu",this.itemClick.bind(this)).on("beforeChangePage.menuEvent",this.beforeChangePage.bind(this))}}(),beforeChangePage:function(){return function(){this.kostyl||e(".ul-disabled-overlay").click()}}(),itemClick:function(){return function(t){var i,l,o;if(o=this,i=e(t.currentTarget),l=i.attr("href").replace(window.location.protocol+"//"+window.location.host,"").replace(/\//g,""),l=l.split("#").shift(),this.kostyl=!0,""===l&&(l="index"),n.params.pageId!==l&&this.pages){var d=this.pages.filter(function(e){return e.id===l});d.length?this.me.__save(function(e){o.destroy(),e||(a.setPage("/sites/url/"+n.params.site+"/pages/id/"+l+"/edit",function(){require(["widget","panelDialog"],function(e,t){t.forgetOpened(),e.get(o.me.id).edit()})}),n.hist.pushState({data:{url:"/sites/url/"+n.params.site+"/pages/id/"+l+"/edit"},title:i.text(),url:"/sites/url/"+n.params.site+"/pages/id/"+l+"/constructor"}))}):r.confirm({title:s("constructor.cannot go to page"),text:s("constructor.link is probably external")})}}}(),itemSettings:function(){return function(t){var i=e(t.currentTarget),n=this.$currentEditable=i.closest("li"),a=this.editableParent(),l=this,d=n.data(),u=!1,c=d.itemId,m=d.title,h=d.url,f=d.linkType,p=d.blank,g=d.pageId;n.parents("li").length<=l.maxNoneLevel&&(u=!0);var v={title:m,url:h,linkType:f,pageId:"page"===f?g:"",blank:p,hasChildren:!!this.$currentEditable.find("> ol").length,parent:a,showNoneItem:u},b=this.possibleParents(c),$=v,w=null,k=null,E=null;require(["stickyPopup"],function(t){var a=!1;i.parent().addClass("edit"),i.closest(".content").addClass("edit"),i.addClass("edit"),t.open({context:{item:v,pageMap:l.me.pageMap},$targetEl:i,title:s("constructor.settings"),required:"widget-mainmenu-itemsettings",templateData:{item:v,__:s,parents:b},templateUrl:"text!./widgets/mainmenu/html/popup.html",wide:!1,saveBtn:!1,afterOpenThis:function(){return function(){e("#item-name",this.$el).focus(),E=this.$el,E.on("change.menuSettingEdit",function(){k=!0}),o.range.init()}}(),afterClose:function(){return function(e,n,o){a=!0,k||o.linkType==$.linkType&&(!o.url||l.$el.data("new-item")||$.url===o.url)||(k=!0);var d=e.find("#item-name"),u=d.val();if(u&&(0!==u.trim().length||l.$el.data("new-item"))||(o.title=$.title,u=$.title),u&&0<u.trim().length&&k&&!l.$el.data("new-item")){w=o,w.id=i.closest("li").data("item-id"),l.saveItem(o),i.removeClass("edit"),i.parent().removeClass("edit"),i.closest(".content").removeClass("edit");var c=function(){function e(t){r.notify(s(t?"widgets.mainmenu.Changes menu item canceled":"widgets.mainmenu..menu item settings saved"),t?"info":"success",{actions:[{title:s(t?"constructor.Revert changes":"constructor.undo"),disableAfterClick:!0,closeAfterClick:!0,cb:function(){return function(){t||e(!t),l.saveItem(t?w:$)}}()}]})}return e}();c()}else if(!k&&l.$el.data("new-item"))t._hide(),0<u.trim().length&&(l.$currentEditable.remove(),l.me.data.children=l.$sortable.find("> ol").l_serialize("ol"));else if(l.$el.data("new-item")||k)if(0<u.trim().length&&k){a=!0,l.saveItem(o);var m=s("constructor.Page created successfully");l.$el.data("new-item")&&(m=s("widgets.mainmenu.item create successfully"))}else a=!1,r.notify(s("widgets.mainmenu.fill menu item name"),"error");else t._hide();n(a)}}(),close:function(){return function(e){E&&(E.off(".menuSettingEdit"),E=null),e&&"undefined"!=typeof e.title&&(e.title.length||!0===l.$el.data("new-item")?e.title.length&&(a=!0,l.saveItem(e)):(e.title=n.data("title"),a=!0,l.saveItem(e))),0==a&&!0===l.$el.data("new-item")&&(l.$currentEditable.remove(),l.me.data.children=l.$sortable.find("> ol").l_serialize("ol")),i.parent().removeClass("edit"),i.removeClass("edit"),i.closest(".content").removeClass("edit"),l.$el.data("new-item",!1),l.me.render()}}()})})}}(),addItem:function(){return function(){var e=this.defaultItem();this.$sortable.find("> ol").append(this.itemEjs({current:n.params.pageId,itemTitle:e.title,title:"",url:e.url,itemId:e.itemId,pageId:e.pageId,linkType:e.linkType,blank:e.blank,children:"",pageMap:this.me.pageMap,itemHaveChildren:!1})),this.$el.data("new-item",!0),this.$sortable.find('li[data-item-id="'+e.itemId+'"] span[role="settings"]').trigger("click"),this.me.data.children.push(e),this.me.render()}}(),removeItem:function(){return function(t){if(1!==this.$sortable.find("li").length){var i=e(t.currentTarget).closest("li");this.$currentEditable=null,i.remove(),this.cleanList(),this.me.data.children=this.$sortable.find("> ol").l_serialize("ol");var n=this;this.me.save(function(){n.me.render()})}}}(),saveItem:function(){return function(t){this.$currentEditable||(this.$currentEditable=this.$el.find('[data-item-id="'+t.id+'"]'));var i=this.$currentEditable.data("item-id"),a=this.$currentEditable.find("> ol").html(),r=e(this.itemEjs({current:n.params.pageId,title:t.title,itemTitle:t.title,url:t.url,pageId:t.pageId?t.pageId:"",linkType:t.linkType,blank:t.blank,itemId:i,pageMap:this.me.pageMap,children:a?"<ol>"+a+"</ol>":"",parent:this.editableParent(),itemHaveChildren:!1}));this.$currentEditable.replaceWith(r),this.$currentEditable=r,this.moveItem(t.parent),this.$currentEditable=null,this.me.data.children=this.$sortable.find("> ol").l_serialize("ol");var s=this;this.me.save(function(){s.me.render()})}}(),moveItem:function(){return function(e){var t,i=this.editableParent();i!==e&&0===this.$currentEditable.find('[data-item-id="'+e+'"]').length&&i!==this.$currentEditable.data("item-id")&&(this.$currentEditable.detach(),"root"===e?this.$sortable.find("> ol").append(this.$currentEditable):(t=this.$sortable.find('[data-item-id="'+e+'"]'),0===t.has("ol").length&&t.append("<ol></ol>"),t.find("> ol").append(this.$currentEditable)),this.cleanList())}}(),sortStart:function(){return function(){this.$sortable.find(".triangle").removeClass("active")}}(),sortStop:function(){return function(){this.cleanList(),this.me.data.children=this.$sortable.find("> ol").l_serialize("ol");var e=this;this.me.save(function(){e.me.render()})}}(),genMenu:function(){return function(e){var t="",i=this;return e&&e.forEach(function(e){var a=!!e.children.length;a=!e.children.every(function(e){return"none"===e.linkType});var r=i.genMenu(e.children);t+=i.itemEjs({current:n.params.pageId,title:e.title,itemTitle:e.title,url:e.url,itemId:e.itemId,pageId:e.pageId,linkType:e.linkType,blank:e.blank,children:r,pageMap:i.me.pageMap,itemHaveChildren:a})}),t?"<ol>"+t+"</ol>":""}}(),getFlatItems:function(){return function(){var e=[];return function(){function t(i,n){var a=0;return i.forEach(function(i){i.level=n,e.push(i),i.recLvl=t(i.children,n+1),a=Math.max(a,i.recLvl)}),a+(i.length?1:0)}return t}()(this.me.data.children,1),e}}(),defaultItem:function(){return function(){return{title:s("widgets.mainmenu.new item"),itemId:n.guid(),pageId:this.indexPageId,linkType:"page",blank:!1,visibility:!0,url:"index",children:[]}}}(),destroy:function(){return function(){d.destroy(),this.$el.off(".menuEvent"),this.$sortable.find("ol").off(".menuEvent"),e(document).off(".menuEvent")}}(),refreshSettings:function(){return function(){this.me.data.settings.isFixed?e(".js-fm-settings",this.$el).removeClass("hidden"):e(".js-fm-settings",this.$el).addClass("hidden"),e("header .ul-w-mainmenu").attr("data-fixed",e(".js-fm-switcher input",this.$el).prop("checked"))}}(),fixedSettings:function(){return function(t){var i=this,n=e(t.currentTarget);require(["stickyPopup"],function(t){t.open({context:{settings:i.me.data.settings},$targetEl:n,title:s("constructor.settings"),required:"widget-mainmenu-fixedsettings",templateData:{__:s,settings:i.me.data.settings},templateUrl:"text!./widgets/mainmenu/html/popupFixedSettings.html",wide:!1,saveBtn:!1,afterOpenThis:function(){return function(){}}(),afterClose:function(){return function(n,a,r){t._hide(),i.me.data.settings=e.extend(i.me.data.settings,r),i.saveSettings(),a()}}(),close:function(){return function(){}}()})})}}(),saveSettings:function(){return function(){if(this.me.data.settings.isFixed=e(".js-fm-switcher input",this.$el).prop("checked"),window.dispatch(window.actions.isFixedMenu(this.me.data.settings.isFixed)),this.me.data.settings.isFixed&&this.me.data.settings.isAutoColor&&e("header .ul-w-mainmenu").attr("data-fixed")){var t=e("header .ul-w-mainmenu-item:not(.ul-w-mainmenu-active-item) .ul-w-mainmenu-item-link").css("color"),i=t.replace(/^(rgb|rgba)\(/,"").replace(/\)$/,"").replace(/\s/g,"").split(",");128>i[0]?(this.me.data.settings.bgColor=0,e("header .ul-w-mainmenu").attr("data-bgcolor","0")):(this.me.data.settings.bgColor=3,e("header .ul-w-mainmenu").attr("data-bgcolor","3"))}this.refreshSettings(),this.me.save(function(){})}}()}});
//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.js.map
