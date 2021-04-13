"use strict";define(["jquery","uform","stickyPopup","i18n","U","model/pages"],function(e,n,t,i,a,c){var s=a.params.site,o=i("constructor.animate"),r={$form:e(document),callbacks:{onChange:function(){return function(){}}()}},u={mainSwitcher:".js-site-animation-switcher",settings:".js-site-animation-settings",pageAnimationSwitcher:".js-page-switcher",allPagesAnimationSwitcher:".js-all-pages-switcher"},l={init:function(){return function(n){var t=this;n.callbacks=e.extend({},r.callbacks,n.callbacks),t.callbacks=n.callbacks,t.addListeners(n.$form)}}(),addListeners:function(){return function(n){var t=this;n.on("change",u.mainSwitcher,function(){var i=e(this).prop("checked");t.toggleSettingsLink(n,{isShown:i}),t.state={isEnabled:i,excludedPages:i?[]:t.state.excludedPages},t.callbacks.onChange(t.state)}).on("click",u.settings,function(){t.settingsPopup(e(this))})}}(),toggleSettingsLink:function(){return function(n,t){var i=t.isShown?"fadeIn":"fadeOut";e(u.settings,n)[i](300)}}(),settingsPopup:function(){return function(n){var i=this;c.load(s,function(a){function c(n){n.on("change",u.pageAnimationSwitcher,function(){s.onPageSwitcherChange(e(this),n)}).on("change",u.allPagesAnimationSwitcher,function(){s.onAllPagesSwicherChange(e(this),n)})}var s={onOpen:function(){return function(e){n.addClass("edit"),c(e)}}(),onSave:function(){return function(n,t){var a=[];e(u.pageAnimationSwitcher,n).each(function(){var n=e(this);n.prop("checked")||a.push(n.attr("data-page-id"))}),i.state.excludedPages=a,i.callbacks.onChange(i.state),t(!0)}}(),onClose:function(){return function(){n.removeClass("edit")}}(),onPageSwitcherChange:function(){return function(n,t){var i=e(u.allPagesAnimationSwitcher,t);if(!n.prop("checked"))return void i.prop("checked",!1);var a=!0;e(u.pageAnimationSwitcher,t).each(function(){return e(this).prop("checked")?void 0:(a=!1,!1)}),i.prop("checked",a)}}(),onAllPagesSwicherChange:function(){return function(n,t){var i=e(u.pageAnimationSwitcher,t),a=n.prop("checked");i.prop("checked",a)}}()},r=a.filter(function(e){return!["special","shop","infoPage"].includes(e._type)});t.open({title:o("page selection"),$targetEl:n,saveBtn:!1,wide:!1,templateUrl:"text!html/constructor/pageList-settings-popup.html",templateData:{__a:o,pages:r,isAllPagesEnabled:r.every(function(e){return-1===i.state.excludedPages.indexOf(e._id)}),excludedPages:i.state.excludedPages},afterOpenThis:function(){return function(){s.onOpen(this.$el)}}(),afterClose:s.onSave,close:s.onClose})})}}(),updateSettings:function(){return function(n,t){var i=this;i.state=e.extend({isEnabled:!1,excludedPages:[]},t||{}),e(u.mainSwitcher,n).prop("checked",i.state.isEnabled),i.toggleSettingsLink(n,{isShown:i.state.isEnabled})}}(),destroy:function(){return function(){}}()};return{init:l.init.bind(l),updateSettings:l.updateSettings.bind(l)}});
//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map
