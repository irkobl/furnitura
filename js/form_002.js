"use strict";var _extends=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},_slicedToArray=function(){function t(t,e){var n=[],i=!0,a=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!((i=(r=s.next()).done)||(n.push(r.value),e&&n.length===e));i=!0);}catch(c){a=!0,o=c}finally{try{!i&&s["return"]&&s["return"]()}finally{if(a)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};define("widget-contacts-form--address_tpl",["require","locale","jquery"],function(t,e,n){var i=e.get(),a=0>["en","pt-BR","es-MX"].indexOf(i)?"address_default.html":"address_"+i+".html",o=new n.Deferred;return t(["text!/widgets/contacts/html/"+a],o.resolve.bind(o),o.reject.bind(o)),o}),define("widget-contacts-form",["jquery","_","uform","U","i18n","stickyPopup","json!widget-contacts-form--additional-fields","promise!widget-contacts-form--address_tpl","text!/widgets/contacts/html/item.html","text!/widgets/contacts/html/form_item.html","customClasses","jquery-ui-sortable"],function(t,e,n,i,a,o,r,s,c,d,l){return{tooLate:!1,___:a("widgets.contacts"),itemTpl:e.template(c),formItemTpl:e.template(d),allowed_characters:[32,40,41,43,45,48,49,50,51,52,53,54,55,56,57,0],$list:null,$addItemBtn:null,$formInputs:null,$listItems:null,$editBtns:null,$removeBtns:null,init:function(){return function(e){var o=this;o.w=e,o.mapHelper=o.w.mapHelper||null,o.$el=t(".js-w-contacts-form"),o.$list=t("#contacts-form-list",o.$el),o.$addItemBtn=t("#add-item",o.$el),o.$addItemBtn.on("click.contactsEvent",function(){o.addItem(),o.saver()}),o.getIds().forEach(function(t){var e=o.getData(t),n=o.getOptions(t);o.$list.append(o.itemTpl({id:t,title:e.title||a("widgets.contacts.contact"),visible:n.visible,__:a}))}),o.$list.sortable({containment:"parent",stop:function(){return function(){o.itemsSortStop(),o.saver()}}(),axis:"y",distance:5}),n.formFill(o.$el,e);var r=t('input:not(:checked)[type="checkbox"]',o.$list);1===r.length&&1===t('[type="checkbox"]',o.$list).length&&r.prop("checked",!0).trigger("change"),o.saver=i.limiter(function(){if(!o.tooLate){var i=n.formParse(o.$el);t.extend(!0,e,i),o.w.render()}},400),o.toggleLastBusket(),t(document).on("click.contactsEvent","#"+e.id+" .ul-w-contacts-item",o.openItem.bind(o)),l.init({$target:o.$el,widget:o.w})}}(),getIds:function(){return function(){var t=this,e={};return t.w.data.items.forEach(function(t){e[t.id]=e[t.id]?e[t.id]+1:1}),t.w.options.items.forEach(function(t){void 0===e[t.id]||(e[t.id]=e[t.id]?e[t.id]+1:1)}),Object.keys(e).map(function(t){return 2!==e[t]&&console.log("Не идентичные ключи в data и options"),t})}}(),openItem:function(){return function(e){var n=this,i=t(e.currentTarget).data("item-id");return t(e.target).hasClass("ymaps-2-1-72-zoom__icon")&&this.w.mapHelper?(e.stopPropagation(),this.w.mapHelper.callbacks.onMapOptsChange=function(t){if("bounds"===t){var e=n.w.mapHelper.getMapZoom(),a=n.w.data.items.findIndex(function(t){return t.id===i});if(-1===a)return!1;n.w.data.items[a].zoom=e,n.w.save()}},!1):void this.$list.find('div[data-item-id="'+i+'"] span[role="edit"]').trigger("click")}}(),toggleLastBusket:function(){return function(){var e=this,n=1<e.w.data.items.filter(function(t){var n=e.getOptions(t.id);return n.visible}).length;if(e.$formInputs=t("input, select",e.$el),e.$listItems=t('input[type="checkbox"]',e.$list),e.$editBtns=t('[role="edit"]',e.$list),e.$removeBtns=t('[role="remove"]',e.$list),e.$listItems.closest("label").css("opacity",1),e.$listItems.removeAttr("disabled"),e.$removeBtns.toggle(!0),!n){var i=t('input[type="checkbox"]:checked',e.$list);t('[role="remove"]',i.closest("div[data-item-id]")).toggle(n),i.closest("label").css("opacity",.4),i.attr("disabled","disabled")}e.$formInputs.off(".contactsEvent").on("change.contactsEvent",function(){e.saver()}),e.$listItems.off(".contactsEvent").on("change.contactsEvent",function(){e.itemVisibility(t(this)),e.saver()}),e.$editBtns.off(".contactsEvent").on("click.contactsEvent",function(n){var i=t(n.currentTarget);e.openPanel(i,i.closest("[data-item-id]").data("item-id"))}),e.$removeBtns.off(".contactsEvent").on("click.contactsEvent",function(){t(this).trigger("mouseout"),e.removeItem(t(this)),e.saver()})}}(),get:function(){return function(t,e){return this.w[t].items.find(function(t){return t.id===e})||null}}(),getOptions:function(){return function(t){var e=this,n=e.get("options",t);return null===n&&(n=e.defaultOptions(t),n.visible=!1,e.w.options.items.push(n)),n}}(),getData:function(){return function(t){var e=this;return e.get("data",t)}}(),getContact:function(){return function(t,e){for(var n,i=null,a=0;a<t.length;a+=1)if(n=t[a],n.id===e){i=n;break}return i}}(),itemVisibility:function(){return function(t){var e=this;e.getOptions(t.closest("div[data-item-id]").data("item-id")).visible=t.prop("checked"),e.toggleLastBusket()}}(),addItem:function(){return function(){var t=this,e=t.defaultItem();t.w.data.items.push(e.data),t.w.options.items.push(e.options),t.$list.append(t.itemTpl({id:e.id,title:e.data.title,visible:e.options.visible,__:a})),t.toggleLastBusket()}}(),extraEdit:function(){return function(e,n){var i=this,a=e.closest(".js-extra-field"),o=t(".js-form-item-controls",a),r=t(".js-w-contacts-additional-title",a).hide(),s=i.___("extra"),c=t(".js-edit",a);o.hide();var d=function(){return function(){c.off("blur keypress");var t=(c.val()||s).trim();r.text(t).data("title",t).show(),c.hide(),o.show(),n()}}();c.val(r.data("title")).attr("placeholder",s).show().focus().one("blur",d).on("keypress",function(t){t.keyCode&&13===t.keyCode&&d()})}}(),remove:function(){return function(t){var e=this,n=e.getData(t.data("item-id")),i=e.getOptions(t.data("item-id")),a=e.w.data.items.indexOf(n),o=e.w.options.items.indexOf(i);e.w.data.items.splice(a,1),e.w.options.items.splice(o,1),t.remove(),e.w.save()}}(),removeItem:function(){return function(t){var e=this;e.remove(t.closest("div[data-item-id]")),e.toggleLastBusket()}}(),markerDrag:function(){return function(t,e,n){var i=t.find('input[ul-model="data.latitude"]'),a=t.find('input[ul-model="data.longitude"]');a.val(n.latLng.lng().toFixed(5)),i.val(n.latLng.lat().toFixed(5))}}(),only_numbers:function(){return function(t){var e=this;-1===e.allowed_characters.indexOf(t.charCode)&&t.preventDefault()}}(),itemsSortStop:function(){return function(){var e=this,n=[],i=[];t("div[data-item-id]",e.$list).each(function(){var a=t(this).data("item-id");n.push(e.getData(a)),i.push(e.getOptions(a))}),e.w.data.items=n,e.w.options.items=i}}(),sectionsSortStop:function(){return function(e){t("#sortable",e).val(e.find("#sections section").map(function(){return t(this).data("sort-id")}).get().join(","))}}(),sortSections:function(){return function(t,e){var n=[],i=t.find("#sections");e.forEach(function(t){n.push(i.find('section[data-sort-id="'+t+'"]').detach())}),i.prepend(n)}}(),openPanel:function(){return function(c,d){var l=this,u=c.closest(".js-contact-item"),f=l.getOptions(d),p=l.getData(d),m=this,v=a("widgets.contacts"),g=!1,h={},w={},y=null,b=null;t.extend(!0,h,p),t.extend(!0,w,f),o.open({context:m,title:v("contact editing"),wide:!0,saveBtn:!1,required:"",templateUrl:"text!/widgets/contacts/html/itemEdit.html",templateCss:"css!/css/require/widgets/contacts.css",templateData:{__:a,id:d,data:p,options:f,additionalFields:r.map(function(t){return e.extend({},t,{label:"object"===_typeof(t.label)?v(t.label.i18n):t.label})})},$targetEl:c,close:function(){return function(){t('.edit[data-action="edit"]',l.$list).removeClass("edit"),u.removeClass("edit")}}(),afterOpenThis:function(){return function(){var o=this,r=t(".js-w-contacts-item-edit"),c=t(".js-w-contacts-additional-list",r);r.on("change.contactsEvent",function(){g=!0});var m=function(){return function(){t('span[role="remove-contact"]',r).off("click").on("click",function(){t(this).trigger("mouseout");var e=n.formParse(r),i=t(this).closest("section"),a=i.data("sort-id"),s=l.getData(e.id),c=l.getOptions(e.id),d=l.getContact(s.contacts,a),u=s.contacts.indexOf(d),f=c.sortable.indexOf(a);s.contacts.splice(u,1),c.sortable.splice(f,1),l.sectionsSortStop(r),l.w.render(function(){i.remove(),o._position()})}),t('span[role="edit"]',r).off("click").on("click",function(){l.extraEdit(t(this),function(){o._position()}),o._position()})}}();c.val("#"),c.on("change.contactsEvent",function(){var t=n.formParse(r);l.getData(t.id),l.getOptions(t.id);var e=c.val().split("|"),s=i.guid(),d=e[1],u={id:s,title:d,type:e[0],value:"",__:a};c.val("#"),r.find("#sections").append(l.formItemTpl(u)).find("input:last").focus(),r.find("#sortable").val(function(t,e){return e+(e?",":"")+s}),m(),o._position()});var v=e.template(s,{data:p,__:a});t('section[data-sort-id="address"]',r).prepend(v),t('.edit[data-action="edit"]',l.$list).removeClass("edit"),t('[data-item-id="'+d+'"] [data-action="edit"]',l.$list).addClass("edit"),u.addClass("edit"),p.contacts.forEach(function(e){var n=e;n.__=a,t("#sections",r).append(l.formItemTpl(n))}),t("#sections",r).sortable({containment:"parent",handle:".handle",tolerance:"pointer",items:"> section",start:function(){return function(){g=!0}}(),stop:function(){return function(){l.sectionsSortStop(r)}}(),axis:"y",distance:5}),n.formFill(r,{id:d,data:p,options:f}),l.sortSections(r,f.sortable),l.displayMarkerData(r),l.w.mapHelper&&l.addressChangeEventListeners(r,p,d,o),m()}}(),afterClose:function(){return function(e,i){if(!g)return i(!0),!1;var o,r,s,c=e,f=c.find('[role="map"]');o=n.formParse(c),r=l.getData(o.id),s=l.getOptions(o.id),y=l.getData(o.id),b=l.getOptions(o.id),o.data.contacts=[];var p=o.options.sortable.slice(0);s.sortable=p.split(","),o.options.sortable=p.split(","),t('[data-sort-type="additional"]',c).each(function(){var e=t(this),n=t(".js-value",e);o.data.contacts.push({id:e.data("sort-id"),title:t(".js-w-contacts-additional-title",e).data("title"),type:n.data("field-type"),value:n.val()})}),l.sectionsSortStop(c),t.extend(!0,r,o.data),t.extend(!0,s,o.options),t('[data-item-id="'+o.id+'"] .ul-fake-input-text',l.$list).text(o.data.title||a("widgets.contacts.contact")),require(["nf"],function(e){var n=function(){function n(i){e.notify(a(i?"widgets.contacts.cancel save edit contact":"widgets.contacts.save edit contact"),i?"info":"success",{actions:[{title:a(i?"constructor.Revert changes":"constructor.undo"),disableAfterClick:!0,closeAfterClick:!0,cb:function(){return function(){i||n(!i),r=l.getData(r.id),s=l.getOptions(r.id),t.extend(!0,r,i?y:h),t.extend(!0,s,i?b:w),l.w.save(function(){l.w.render()});var e=h.id,o=h.title;i&&(e=y.id,o=y.title),t('[data-item-id="'+e+'"] .ul-fake-input-text',l.$list).text(o||a("widgets.contacts.contact"))}}()}]})}return n}();l.addressChanged&&l.w.mapHelper?l.getLatLongByAddress(d,r,function(e){var i=e.latitude,a=e.longitude;l.updateMapMarkerData(d,i,a,function(){var e=l.getData(d);t.extend(!0,r,e),l.w.save(function(){return l.w.render()}),n()})}):(l.w.save(function(){return l.w.render()}),n())}),t('.edit[data-action="edit"]',l.$list).removeClass("edit"),u.removeClass("edit"),f.trigger("change.contactsEvent"),i(!0)}}()})}}(),addressChangeEventListeners:function(){return function(e,i,a,o){var r=this,s=t('[data-sort-id = "address"]',e),c=t('[ul-model = "data.latitude"]',e),d=t('[ul-model = "data.longitude"]',e);this.addressChanged=!1,s.find('[ul-model="data.markerVisible"]').on("change",function(n){i.visible=t(n.target).prop("checked"),r.w.save(),r.displayMarkerData(e),o._position()}),s.find(".ul-form-group").on("input",function(){return!r.addressChanged&&void(r.addressChanged=!0)}).on("change",function(){var o=n.formParse(e).data;t.extend(!0,i,o),r.getLatLongByAddress(a,i,function(e){var n=e.latitude,o=e.longitude;r.updateMapMarkerData(a,n,o,function(){t.extend(!0,i,r.getData(a)),r.w.save(function(){return r.w.render()}),c.val(n.toFixed(5)),d.val(o.toFixed(5))})})}).on("keypress",function(t){13===t.keyCode&&(t.preventDefault(),r.addressChanged=!0,s.find(".ul-form-group").trigger("change"))}),t('[ul-model="data.markerVisible"]').on("change",function(){var e=t('[ul-model="data.markerVisible"]').prop("checked"),n=r.w.data.items.findIndex(function(t){return t.id===a});return-1!==n&&(r.w.data.items[n].markerVisible=e,void r.w.save(function(){return r.w.render()}))}),t.merge(d,c).on("change",function(){var o=n.formParse(e).data,s=parseFloat(o.latitude),c=parseFloat(o.longitude);return s&&c&&void r.updateMapMarkerData(a,s,c,function(){var e=r.getData(a);t.extend(!0,i,e),r.w.save(function(){return r.w.render()})})}),this.w.mapHelper.callbacks.onMarkerDragEnd=function(t,e,n){r.updateMapMarkerData(t,e,n,function(){r.w.save(function(){r.w.render()})})}}}(),displayMarkerData:function(){return function(e){var n=t('[ul-model="data.markerVisible"]').prop("checked"),i=t("#contacts-item-panel-map-container",e);n?i.show():i.hide()}}(),getLatLongByAddress:function(){return function(t,e,n){var i=e.country+" "+e.city+" "+e.address;this.w.mapHelper.geocode(i).then(function(t){var e=_slicedToArray(t,2),i=e[0],a=e[1];n&&"function"==typeof n&&n({latitude:i,longitude:a})})["catch"](function(t){t&&console.log(t)})}}(),updateMapMarkerData:function(){return function(t,e,n,i){if(!e||!n)return!1;var a=_extends({},this.getData(t),{latitude:e.toFixed(5),longitude:n.toFixed(5)}),o=this.w.data.items.findIndex(function(e){return e.id===t});return-1!==o&&(this.w.data.items[o]=a,void(i&&"function"==typeof i&&i()))}}(),defaultOptions:function(){return function(t){return{id:t,visible:!0,sortable:["organization","address","phone","skype","email"]}}}(),defaultItem:function(){return function(){var t,e=this,n=i.guid(),o=a("widgets.contacts.defaults"),r=1;do t=a("widgets.contacts.department",r++);while(e.w.data.items.some(function(e){return e.title.replace(/\s/g,"")===t.replace(/\s/g,"")}));return{id:n,data:{id:n,title:t,country:o("country"),city:o("city"),address:o("address"),office:o("office"),postcode:o("postcode"),latitude:o("latitude"),longitude:o("longitude"),phone:o("phone"),email:o("email"),skype:o("skype"),contacts:[]},options:e.defaultOptions(n)}}}(),destroy:function(){return function(){var e=this;e.$el.off(".contactsEvent").unbind(".contactsEvent"),t(document).off(".contactsEvent")}}()}});
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
