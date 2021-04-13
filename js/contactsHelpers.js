"use strict";if("function"!=typeof define)var define=require("amdefine")(module);define(["lodash"],function(t){var e={"default":["organization","country","city","address","office","postcode"],ru:["organization","country","city","address","office","postcode"],en:["organization","address","office","city","state","postcode","country"],"pt-BR":["organization","address","district","city","state","postcode","country"],"es-MX":["organization","address","office","district","city","state","postcode","country"]},n={"default":["addcode","phone"]},i=function(){return function(t,e){Array.isArray(t.items)||(t.items=[]),Array.isArray(e.items)||(e.items=[])}}(),r=function(){return function(e){return t.isString(e)&&0<e.trim().length}}(),o=function(){return function(e,n){var i;return t.isString(e)&&t.isString(n)?(i=t.escape(n),"skype"===e?'<a href="skype:'+i+'?chat">'+i+"</a>":"country"===e?'<span itemprop="addressCountry">'+i+"</span>":"city"===e?'<span itemprop="addressLocality">'+i+"</span>":"address"===e?'<span itemprop="streetAddress">'+i+"</span>":"postcode"===e?'<span itemprop="postalCode">'+i+"</span>":"phone"===e?'<a id="ul-w-contacts-phoneLink" class="ul-w-contacts-phoneLink" href="tel:'+i.replace(/ /g,"")+'"><span itemprop="telephone">'+i+"</span></a>":"email"===e?'<a href="mailto:'+i+'"><span itemprop="email">'+i+"</span></a>":"faks"===e?'<a href="fax:'+i+'"><span itemprop="faxNumber">'+i+"</span></a>":"<span>"+i+"</span>"):void 0}}(),a=function(){return function(e,i){var o,a,s,u=n[i]||n["default"];return o=u.filter(function(t){return r(e[t])}),a=o.map(function(n){return"<span>"+t.escape(e[n])+"</span>"}).join(""),s=o.map(function(n){return t.escape(e[n])}).join("").replace(/ /g,""),'<a id="ul-w-contacts-phoneLink" class="ul-w-contacts-phoneLink" href="tel:'+s+'"><span itemprop="telephone">'+a+"</span></a>"}}(),s=function(){return function(t){t.items=t.items.filter(function(t){return!!t})}}(),u=function(){return function(e,n){var i=e.items.map(function(e){return!t.findWhere(n.items,{id:e.id})&&e.id}),r=t.all(i);i.filter(function(t){return t}).forEach(function(t,e){n.items.push({id:t,visible:r&&0===e,sortable:["organization","address","phone","skype","email"],zoom:8})})}}(),c=function(){return function(e,n){e.items.forEach(function(e){var i=t.findWhere(n.items,{id:e.id});i&&e.contacts.forEach(function(t){-1===i.sortable.indexOf(t.id)&&i.sortable.push(t.id)})})}}(),f=function(){return function(n,i,r){i.items.forEach(function(i){var o=t.findWhere(n.items,{id:i.id});o&&i.sortable.forEach(function(n,a){var s;s="address"===n?(e[r]||e["default"]).map(function(t){return o[t]}).join(","):"string"==typeof o[n]||o[n],s||t.findWhere(o.contacts,{id:n})||i.sortable.splice(a,1)})})}}(),p=function(){return function(e,n){e.items.forEach(function(e){var i=t.findWhere(n.items,{id:e.id}),r=[];i&&i.sortable.forEach(function(n){void 0===e[n]&&void 0===t.findWhere(e.contacts,{id:n})||r.push(n)}),i.sortable=r})}}(),d={organization:"organization",title:"title",address:"address",phone:"phone",email:"email",skype:"skype",extra:"extra",icq:"extra",gtalk:"extra",viber:"extra",faks:"extra"},l=function(){return function(e,n){var i=d[n];return!t.isBoolean(e[i])||e[i]}}(),h=function(){return function(i,s,u,c){var f=[],p={},d=[],h=function(){return function(t){void 0===p[t]&&(p[t]=[])}}(),m=function(){return function(t){-1===d.indexOf(t)&&d.push(t)}}(),y=function(){return function(){var t=e[c]||e["default"],n=[];t.forEach(function(t){var e=i[t];r(e)&&n.push(o(t,e.trim()))}),0<n.join(",").length&&p.address.push(n.join(", "))}}(),v=function(){return function(){var t=n[c]||n["default"],e=t.some(function(t){return r(i[t])});e&&p.phone.push(a(i,c))}}(),k=function(){return function(){r(i.email)&&p.email.push(o("email",i.email))}}(),g=function(){return function(){r(i.skype)&&p.skype.push(o("skype",i.skype))}}(),b=function(){return function(e){var n=t.findWhere(i.contacts,{id:e});h(n.type),m(n.type),r(n.value)&&p[n.type].push(o(n.type,n.value))}}();return s.sortable.forEach(function(t){switch(t){case"organization":case"title":break;case"address":h("address"),m("address"),y();break;case"phone":h("phone"),m("phone"),v();break;case"email":h("email"),m("email"),k();break;case"skype":h("skype"),m("skype"),g();break;default:b(t)}}),d.forEach(function(t){l(u,t)&&0<p[t].length&&f.push({type:t,content:p[t].join(", ")})}),f}}(),m=function(){return function(e,n,r){i(e,n),s(e),u(e,n),c(e,n),f(e,n,r),p(e,n);var o={items:[],showTitle:n.title,showMap:n.map,isEmpty:function(){return function(){return!(0<this.items.length&&0<this.items.filter(function(t){return 0<t.contacts.length}).length||this.showTitle||this.showMap)}}()};return e.items.forEach(function(e){var i=t.findWhere(n.items,{id:e.id});i.visible&&o.items.push({id:e.id,title:e.title,latitude:e.latitude,longitude:e.longitude,zoom:e.zoom||8,contacts:h(e,i,n,r),visible:e.markerVisible})}),o}}(),y=function(){return function(n,i,s,u){var c=[],f=function(){return function(){var t=e[u]||e["default"],i=[];t.forEach(function(t){var e=n[t];r(e)&&i.push(o(t,e.trim()))}),0<i.join(",").length&&c.push({type:"address",content:i.join(", ")})}}(),p=function(){return function(){c.push({type:"phone",content:a(n,u)})}}(),d=function(){return function(){r(n.email)&&c.push({type:"email",content:o("email",n.email)})}}(),h=function(){return function(){r(n.skype)&&c.push({type:"skype",content:o("skype",n.skype)})}}(),m=function(){return function(e){var i=t.findWhere(n.contacts,{id:e});r(i.value)&&c.push({type:i.type,title:i.title,content:o(i.type,i.value)})}}(),y=function(){return function(e){var i;return-1===["organization","title","address","phone","email","skype"].indexOf(e)?(i=t.findWhere(n.contacts,{id:e}),i.type):e}}();return i.sortable.forEach(function(t){if(l(s,y(t)))switch(t){case"organization":case"title":break;case"address":f();break;case"phone":p();break;case"email":d();break;case"skype":h();break;default:m(t)}}),c}}(),v=function(){return function(e,n,r){i(e,n),s(e),u(e,n),c(e,n),f(e,n,r),p(e,n);var o={items:[],showTitle:n.title,showMap:n.map,isEmpty:function(){return function(){return!(0<this.items.length&&0<this.items.filter(function(t){return 0<t.contacts.length}).length||this.showTitle||this.showMap)}}()};return e.items.forEach(function(e){var i=t.findWhere(n.items,{id:e.id});i.visible&&o.items.push({id:e.id,title:e.title,latitude:e.latitude,longitude:e.longitude,zoom:e.zoom||8,contacts:y(e,i,n,r),visible:e.markerVisible})}),o}}();return{design1:m,design2:v,design3:v}});
//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map

//# sourceMappingURL=contactsHelpers.js.map
