"use strict";define("customClasses",["U","jquery","_","i18n","ul-framework","billing/feature-availability","tpl!customClasses/edit","tpl!customClasses/input"],function(s,t,e,o,a,l,r,i){var n=function(){return function(){var s=o("constructor.customClass"),n=3;this.destroy=function(){this.isAvailable&&(this.groupFold&&(t(".js-customClasses-groupFold").remove(),this.groupFold.destroy()),"widget"===this.type&&this.object.handlerRender(),this.$target=null,this.afterSave=null,this.beforeSave=null,this.object=null,this.getCustomClasses=null,this.setCustomClasses=null)},this.save=function(){var s=this,e=this.getCustomClasses();s.beforeSave&&s.beforeSave(e),e.length=0,t(".js-customClass-input",s.$target).each(function(o,a){var l=t(a);s.validate(l)&&e.push(l.val())}),s.afterSave&&s.afterSave(e)},this.existsErrors=function(){return t(".js-customClasses-wrapper").find(".error").length},this.validate=function(t){var e=t.closest(".ul-customClasses-item").find(".js-wrong-link"),o=t.val(),a=void 0;return!!o.length&&(o.toLowerCase().startsWith("ul-")&&(a=s("error ul prefix is not allowed")),/^\d/.test(o)&&(a=s("error only numbers or start with a number")),o.includes(" ")&&(a=s("error more than one expression")),/^[\dA-Za-z\-_]+$/gi.test(o)||(a=s("error forbidden symbols")),a?(t.addClass("error"),e.addClass("show").text(a),!1):(t.removeClass("error"),e.removeClass("show").text(),!0))},this.renderAddButton=function(){var s=this,e=t(".ul-customClasses-item");return s.existsErrors()||e.length>=n?void s.$addButton.hide():void s.$addButton.show()},this.open=function(o){var l=this,u=this,c=s("type your class"),d=s("remove class"),m=e.template(r);u.$target=o.$target,u.afterSave=o.afterSave,u.beforeSave=o.beforeSave,o.$target.append('<div class="js-customClasses-groupFold ul-customClasses-form-wrapper"></div>'),a.folds.init();var C="block";o.widget?(C="widget",this.object=o.widget,t(".js-customClasses-groupFold").addClass("ul-customClasses-form-wrapper-widget"),this.setCustomClasses=function(s){l.object.data.customClasses=s},this.getCustomClasses=function(){return l.object.data.customClasses}):(this.object=o.block,this.setCustomClasses=function(s){l.object.customClasses=s},this.getCustomClasses=function(){return l.object.customClasses}),u.type=C;var h=this.getCustomClasses();h||(this.setCustomClasses([]),h=this.getCustomClasses());var v=e.template(i,{customClass:"",placeholder:c,removeClassTitle:d});h&&h.length&&(v=h.map(function(s){return e.template(i,{customClass:s,placeholder:c,removeClassTitle:d})}).join("")),this.groupFold=a.groupFold({$el:t(".js-customClasses-groupFold"),titleStyle:"h2",titleDivider:{isWide:!0},items:[{title:s("class for "+C),contentHTML:m({i18n:s,customClasses:u.customClasses,type:C,fieldsTmpl:v}),isFolded:!(h&&h.length),isDisabled:!1,help:{isEnabled:!0,title:s("custom class hint"),onClick:function(){return function(){}}()}}]}),this.$addButton=t("#add-customClass"),o.$target.on("keydown keypress keyup",".js-customClass-input",function(s){var e=s.type,o=s.key,a=s.currentTarget;"keydown"===e&&"Enter"===o&&t(a).blur(),s.stopImmediatePropagation()}).on("change.eventCustomClasses",".js-customClass-input",function(s){var e=t(s.target);u.validate(e),u.renderAddButton(),u.existsErrors()||u.save()}).on("click.eventCustomClasses","#add-customClass",function(){var s=t(".js-customClass-input",u.$target);s.length>=n-1&&u.$addButton.hide(),t(".js-customClasses-wrapper",u.$target).append(e.template(i,{customClass:"",placeholder:c,removeClassTitle:d}))}).on("blur.eventCustomClasses",".js-customClass-input",function(s){var e=t(s.target);u.validate(e),u.renderAddButton()}).on("click.eventCustomClasses",".js-customClass-remove-item",function(){t(this).closest(".ul-customClasses-item").remove(),u.renderAddButton(),u.save()}),u.renderAddButton()},this.init=function(s){var t=this;(s.widget||s.block)&&l.check("customClasses",{showPopupIfNotAvailable:!1},function(e){t.isAvailable=e,e&&t.open(s)})}}}();return new n});
//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map
