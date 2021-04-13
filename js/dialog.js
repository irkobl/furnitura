"use strict";define("widget-icon-dialog",["jquery","popup","i18n","widget-icon-dialog-core","json!/widgets/icon/js/icons.json"],function(t,i,e,n,o){return{open:function(){return function(c){c=t.extend({showUpload:!0},c),i.open({context:this,title:e("widgets.icon.dialog.title"),templateUrl:"text!/widgets/icon/html/dialog.html",templateData:{icons:o,data:c.iconData,showUpload:c.showUpload,__:e("widgets.icon")},templateCss:"css!/css/require/widgets/icon-dialog.css",wide:!0,pages:!0,$targetEl:c.$targetEl,targetSelector:c.targetSelector,positionTarget:"right",saveBtn:!1,afterOpenThis:function(){return function(){var t=this;t.$el.addClass("ul-widget-icon-dialog"),n.init({$tabs:t.$el.find(".ul-tabs"),widgetId:c.context.id,getIcon:c.getIcon})}}(),close:c.close})}}()}}),define("widget-icon-dialog-core",["jquery","U","uploader","icon-set-loader"],function(t,i,e,n){return{isFontsLoaded:!1,openIconSetTab:function(){return function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0,e=this.$iconSets.filter('[data-icon-set="'+t+'"]');e.attr("data-loaded")||n.loadIconSet(t,function(){i&&e.attr("data-loaded","true")})}}(),getSection:function(){return function(t){return this.$iconSets.filter('[data-icon-set="'+t+'"]').find(".section:first")}}(),openSection:function(){return function(t){var i=t.closest(".js-w-dialog-icon-set");i.find(".active").removeClass("active").find(".nano").css({height:0,"min-height":0});var e=t.addClass("active").find(".js-w-icon-dialog-scrollable"),n=e.data("isHigh")?300:200;e.css({height:n,"min-height":n})}}(),init:function(){return function(i){var o,c=this;this.options=i,this.$iconSets=t(".js-w-dialog-icon-set"),i.$tabs.on("click.iconSet","li",function(){var i=t(this).attr("data-target");c.openIconSetTab(i),c.openSection(c.getSection(i)),"uploader"!==i&&(c.isFontsLoaded||(setTimeout(function(){Object.keys(n.iconSetsDeps).filter(function(t){return t!==i}).forEach(function(t){return c.openIconSetTab(t,!1)})},500),c.isFontsLoaded=!0))}),c.$iconSets.on("click.iconDialog",".section h4",function(){c.openSection(t(this).closest(".section"))}).on("click.iconDialog",".icon",function(){var e=t(this).closest(".js-w-dialog-icon-set"),n=t(this).data("icon"),o=e.data();c.$iconSets.find(".icon--active").removeClass("icon--active"),t(this).addClass("icon--active"),i.getIcon(n,"font-icon",o.iconSet,o.iconSetClass,o.insertType)});var a=i.$tabs.find("li.active").attr("data-target");a||(a=n.defaultIconSet),c.openIconSetTab(a),c.openSection(c.getSection(a)),o=new e({libBtn:!1,addToImageLib:!1,allowedfiletypes:["image/jpeg","image/png","image/gif","image/bmp","image/svg+xml","image/x-icon"],allowedfileextensions:[".jpg",".jpeg",".png",".gif",".bmp",".svg",".ico"],$renderedTo:t(".ul-w-uploaderZone"),uploaded:function(){return function(t){i.getIcon(t[0].full,"image-icon","","","")}}()}),o.init()}}(),destroy:function(){return function(){t(document).off(".iconDialog")}}()}});
//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=dialog.js.map
