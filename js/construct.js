"use strict";var _Mathfloor=Math.floor;define("constructor/construct",["jquery"],function(t){var o={REG_ID:/^ul\-id\-\d{1,5}\-\d{1,5}$/,REG_ID_ABS:/^ul\-id\-(.+?)\-\d{1,5}$/,REG_CLASS_MD:/col\-md\-(\d{1,2})/i,REG_CLASS_XS:/col\-xs\-(\d{1,2})/i,REG_CLASS_SM:/col\-sm\-(\d{1,2})/i,_addBlock:function(){return function(o,e,i){var n=this,r=t(o);this._dropPosition(r,i,e);var l=r.attr("id");return window.dispatch(window.actions.createBlock({id:l,params:{}})),r.find(".ul-col").each(function(){var o=t(this),e=o.attr("id"),i=o.closest(".ul-row").attr("id");try{var r=parseInt(o[0].className.match(/col-md-(\d+)/)[1]);window.dispatch(window.actions.createRow({id:i})),n.sendDispatchColAddReact(e,o.index(),r,i)}catch(r){console.error(r)}}),r}}(),sendDispatchColAddReact:function(){return function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:12,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"";window.dispatch(window.actions.createCol({id:t,mediaParams:{desktop:{size:e},tablet:{size:12},mobile:{size:12}},index:o,rowId:i}))}}(),_addCol:function(){return function(o,e,i,n){var r=this;if(!r.REG_ID.test(o))throw{msg:"id not matched REG_ID"};var l=e.hasClass("ul-row")?e.children(".ul-col").size():e.parent().children(".ul-col").size(),s=t("<div>",{id:o,"class":"ul-col col-md-12 col-xs-12 col-sm-12"});if(0==l)r.sendDispatchColAddReact(o,i,12,e.closest(".ul-row").attr("id")),e.removeClass("ul-empty"),s.addClass("ul-col col-md-12 col-xs-12 col-sm-12");else{if(l==r.COLS_LIMIT&&!n)return!1;var d=_Mathfloor(12/(l+1));r.sendDispatchColAddReact(o,i,d,e.closest(".ul-row").attr("id"));var c=d,a=e.closest(".ul-row").children(".ul-col"),u=d*(l+1);12>u&&(d+=12-u),s=r._setColSize(s,a,d,c)}return this._dropPosition(s,i,e),window.dispatch(window.actions.linkColRow(s.closest(".ul-col").attr("id"),e.closest(".ul-row").attr("id"))),s}}(),_addRow:function(){return function(o,e,i){var n=this;if(!n.REG_ID.test(o))throw{msg:"id not matched REG_ID"};return window.dispatch(window.actions.createRow({id:o})),this._dropPosition(t("<div>",{id:o,"class":"row ul-row"}),i,e)}}(),_addWidget:function(){return function(o,e,i,n){if(!this.REG_ID.test(o)&&!this.REG_ID_ABS.test(o))throw new Error("id not matched REG_ID");var r=t("<div>",{id:o,"class":"ul-widget ul-widget-"+e,"data-widget":e,"data-controls":"mer"});i.closest(".ul-container").length&&(window.dispatch(window.actions.linkWidgetBlock(o,i.closest(".ul-container").attr("id"))),window.dispatch(window.actions.linkWidgetCol(o,i.closest(".ul-col").attr("id"))));var l=this._dropPosition(r,n,i);return r&&0!==r.length?l:"not exist"}}(),_addReactWidget:function(){return function(o,e,i,n){if(!this.REG_ID.test(o)&&!this.REG_ID_ABS.test(o))throw new Error("id not matched REG_ID");var r=t("<div>",{id:o,"class":"ul-widget",type:e});i.closest(".ul-container").length&&(window.dispatch(window.actions.linkWidgetBlock(o,i.closest(".ul-container").attr("id"))),window.dispatch(window.actions.linkWidgetCol(o,i.closest(".ul-col").attr("id"))));var l=this._dropPosition(r,n,i);return r&&0!=r.length?l:"not exist"}}(),getColSize:function(){return function(t){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"desktop";return t>12?void 0:"desktop"===o?"col-xs-12 col-sm-12 col-md-"+t+" ul-col":{phone:"col-xs-"+t,tablet:"col-sm-"+t,desktop:"col-md-"+t}[o]+" ul-col"}}(),_moveEl:function(){return function(t,o){var e=this,i=o.hasClass("ul-col")?o.closest(".ul-row"):o;if(!t.hasClass("ul-row")&&t.hasClass("ul-col")){var n=t.parent().attr("id")===i.attr("id")?0:1,r=i.children(".ul-col").size();if(r==e.COLS_LIMIT)return null;var l=_Mathfloor(12/(r+n)),s=l,d=i.children(".ul-col"),c=l*(r+n);12>c&&(l+=12-c),t=e._setColSize(t,d,l,s)}throw new Error("WRONG!")}}(),_moveTo:function(){return function(t,o){if(o>t.parent().children().length||0>o||o==t.index())throw{msg:"uncorrect index"};var e=t.parent().children().eq(o);return t.index()>e.index()?t.insertBefore(e):t.insertAfter(e),!0}}(),_moveWidget:function(){return function(t,o,e){return this._dropPosition(t,e,o)}}(),removeColSize:function(){return function(o){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"desktop",i=this;return null!=o&&o.each(function(o,n){var r=t(n),l=r.attr("class"),s="";if("desktop"===e){var d=i.REG_CLASS_MD.exec(l),c=i.REG_CLASS_XS.exec(l),a=i.REG_CLASS_SM.exec(l);d&&(s+=d[0]+" "),c&&(s+=c[0]+" "),a&&(s+=a[0]+" ")}else{var d=i.REG_CLASS_XS.exec(l),c=i.REG_CLASS_SM.exec(l);"phone"===e&&(s+=d[0]+" "),"tablet"===e&&(s+=c[0]+" ")}r.removeClass(s)}),o}}(),_removeCol:function(){return function(t){var o=this,e=t.closest(".ul-row"),i=t.attr("id");window.dispatch(window.actions.destroyCol(i,e.attr("id"))),t.remove();var n=e.children(".ul-col").size(),r=_Mathfloor(12/n),l=r*n;if(0!==n)if(12>l){var s=e.children(".ul-col").last().removeClass();o._setColSize(s,e.children(".ul-col"),r+(12-l),r)}else o._setColSize(null,e.children(".ul-col"),null,r);window.dispatch(window.actions.linkColRow(t.closest(".ul-col").attr("id"),e.closest(".ul-row").attr("id")))}}(),_removeRow:function(){return function(t){window.dispatch(window.actions.destroyRow(t.attr("id"))),t.remove()}}(),_removeBlock:function(){return function(t){window.dispatch(window.actions.destroyBlock(t.attr("id"))),t.remove()}}(),_removeWidget:function(){return function(t){t.remove()}}(),_setColSize:function(){return function(o,e,i,n,r){var l=this;return null!=o&&(o.addClass("ul-animate"),o.closest(".ul-row").addClass("ul-animate"),o=l.removeColSize(o,r),o.removeAttr("style").addClass(l.getColSize(i,r)),window.dispatch(window.actions.updateCol(o.attr("id"),{size:i,device:r})),setTimeout(function(){o.removeClass("ul-animate"),o.closest(".ul-row").removeClass("ul-animate")},700)),null!=e&&(e.addClass("ul-animate"),e.closest(".ul-row").addClass("ul-animate"),e=l.removeColSize(e,r),e.removeAttr("style").addClass(l.getColSize(n,r)),e.each(function(){window.dispatch(window.actions.updateCol(t(this).attr("id"),{size:n,device:r}))}),setTimeout(function(){e.removeClass("ul-animate"),e.closest(".ul-row").removeClass("ul-animate")},700)),o}}(),_dropPosition:function(){return function(t,o,e){var i,n=/ul\-col|ul\-row|ul\-widget|ul\-container/gi;if(i=n.exec(t.attr("class"))[0],null==i)return null;i="."+i;var r;return 0==o?r="prependTo":o==e.children(i).length?r="appendTo":(e=e.children(i).eq(o-1),r="insertAfter"),t[r](e)}}()};return o});
//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map
