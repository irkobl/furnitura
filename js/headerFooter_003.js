"use strict";define(["jquery","_","U"],function(e,t,n){var r=["header","footer"],i=null,o=!1;return{init:function(){return function(){o||(this.$body=e("#body-fict"),this.getWidgetsInHeaderFooter(),o=!0)}}(),getWidgetsInHeaderFooter:function(){return function(){var e=this;return i||(i=r.reduce(function(t,n){return t[n]=e._getWidgetsByType(n),t},{header:[],footer:[]})),i}}(),_getWidgetsByType:function(){return function(t){return e(t+" .ul-widget").toArray().reduce(function(e,t){return e.push(t.id),e},[])}}(),_whichSectionWasChanged:function(){return function(e){var n=Object.keys(e),r=t.reduce(this.getWidgetsInHeaderFooter(),function(e,t,r){return n.some(function(e){return~t.indexOf(e)})&&(e=r),e},"");if(!r)throw new Error("I can not determine, becuase id element is not unique");return r}}(),everyWidgetsIsHideOrShown:function(){return function(e){var t=this.getWidgetsInHeaderFooter()[e],r=n.params.hiddenWidgets,i=null,o=t.every(function(e){return null==i&&(i=r[e]),r[e]===i});return o&&i}}(),hideOrShowSection:function(){return function(t){this.init();var r=this._whichSectionWasChanged(t),i=this.everyWidgetsIsHideOrShown(r),o=n.params.isRemove[r];if(i!==o){var u={header:n.params.isRemove.header,footer:n.params.isRemove.footer};u[r]=i,e(window).trigger("restoreHeaderFooter",{$container:e(r),setting:u,opts:{ignoreHist:!0}})}}}(),getWidgetsInSectionWithStatus:function(){return function(e,t){return this.getWidgetsInHeaderFooter()[e].reduce(function(e,n){return e[n]=t,e},{})}}()}});
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
