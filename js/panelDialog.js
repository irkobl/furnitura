"use strict";define("panelDialog",["U","jquery","_","i18n","ul-framework/scrollbar"],function(e,t,n,l,o){return{$el:t("#ul-panelDialog",".ul-menu-content"),$wasActive:null,$wasVisible:null,states:[],curForm:null,opened:!1,defaults:{data:"<h1>Empty data!</h1>",required:[],templateData:{__:l},templateCss:[],templateUrl:null,afterOpen:null,beforeClose:null,closeState:!1,apply:function(){return function(){}}(),close:function(){return function(){}}(),afterCloseForm:function(){return function(){}}()},init:function(){return function(e){var t=this;t.menu=e.menu}}(),forgetOpened:function(){return function(){var e=this;e.opened=!1,e.doNotRememberVisible=!0,e.states=[]}}(),hide:function(){return function(){var e=this;return!!e.opened&&(e.opt.beforeClose&&e.opt.beforeClose.apply(window),o.destroy(e.$el),null!=e.curForm&&(e.curForm.destroy(e.opt.afterCloseForm),e.curForm=null),0<e.states.length?(e.$el.empty(),e.opt=e.states.pop(),e.$el.append(e.opt.$el),e.curForm=e.opt.curForm,o.create(e.$el)):(e.opened=!1,t("#ul-left-menu").removeClass("ul-side-menu"),t(".ul-publish-tooltip-active").addClass("active"),e.$el.removeClass("ul-menu-desc--visible"),e.$el.empty(),e.menu.currentPanel.attach()),void e.opt.close())}}(),show:function(){return function(e){var l=this,u=null;if(l.opened&&(l.opt.closeState?l.hide():(l.opt.$el=l.$el.children().eq(0).detach(),l.opt.curForm=l.curForm,l.states.push(l.opt))),e.templateData&&(e.templateData=t.extend({},l.defaults.templateData,e.templateData)),l.opt=t.extend({},l.defaults,e),l.opened||(l.opened=!0,l.doNotRememberVisible?l.doNotRememberVisible=!1:(l.$wasActive=t(".ul-main-menu .active"),l.$wasVisible=t(".ul-menu-desc.ul-menu-desc--visible",".ul-menu-content"),t(".ul-main-menu .active").removeClass("active"),t(".ul-menu-desc",".ul-menu-content").removeClass("ul-menu-desc--visible"))),require(l.opt.templateCss.map(function(e){return"css!"+e}),function(){}),u=l.opt,null==l.opt.templateUrl)l.$el.html(l.opt.data).addClass("ul-menu-desc--visible"),t("#ul-left-menu").addClass("ul-side-menu"),null!=u.afterOpen&&u.afterOpen.apply(window,[l.$el,l.curForm]),e.noScroll||o.create(l.$el);else{var r=void 0,a=l.opt,i=a.required,s=a.templateUrl;i&&(r=i),s&&(r=[].concat(r,"text!"+s)),require(r,function(e,r){var a=function(){return function(e){return n.template(r,e)}}(),i=u,s=i.templateData,c=i.options,p=i.context,m=i.afterOpen,d=function(){return function(e){var t=e.options,n=e.context;t?l.curForm.init(t,n):l.curForm.init(n)}}();l.$el.html(a(s)).addClass("ul-menu-desc--visible"),t("#ul-left-menu").addClass("ul-side-menu"),l.curForm=t.extend({beforeApply:null,beforeClose:null,init:function(){return function(){}}(),destroy:function(){return function(){}}(),apply:function(){return function(e){e()}}(),reRender:function(){return function(e){l.$el.html(a(t.extend({},s,e))),d({options:c,context:p})}}()},e),d({options:c,context:p}),null!==m&&m.apply(window,[l.$el,l.curForm]),o.create(l.$el)})}t(".ul-publish-tooltip-active").removeClass("active"),setTimeout(function(){l.menu.currentPanel.detach()},0)}}()}});
//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map

//# sourceMappingURL=panelDialog.js.map
