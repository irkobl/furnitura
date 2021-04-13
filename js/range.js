"use strict";var _Mathabs=Math.abs,_slicedToArray=function(){function e(e,t){var a=[],n=!0,r=!1,i=void 0;try{for(var l,s=e[Symbol.iterator]();!((n=(l=s.next()).done)||(a.push(l.value),t&&a.length===t));n=!0);}catch(u){r=!0,i=u}finally{try{!n&&s["return"]&&s["return"]()}finally{if(r)throw i}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();define("ul-framework/range",["jquery","_","text!html/ul-framework/range.html","text!html/ul-framework/rangeHelper/range-numbers.html","text!html/ul-framework/rangeHelper/range-points.html","jquery-ui-draggable"],function(e,t,a,n,r){return{defaults:{min:0,max:10,title:"Range title",val:5,valTitle:"",isDotted:!0,showAccurate:!1,step:1,equalDotsDistance:!0},init:function(){return function(){var e=this;e.createElements(),e.listenersAdded||(e.listenersAdded=!0,e.addListeners())}}(),addListeners:function(){return function(){var t=this;e(document).on("click.ulRange",".js-input-range__clickable",function(a){var n=e(this).closest(".js-input-range"),r=t.getValFromPosition(n,a.offsetX||a.originalEvent.layerX||0);t.setVal(n,r),n.trigger("changeImmediate",{val:r}).trigger("change",{val:r})}).on("click.ulRange",".js-input-range__plus",function(){var a=e(this).closest(".js-input-range"),n=t.getNextPrevVal("next",t.getVal(a),a.data());t.setVal(a,n),a.trigger("changeImmediate",{val:n}).trigger("change",{val:n})}).on("click.ulRange",".js-input-range__minus",function(){var a=e(this).closest(".js-input-range"),n=t.getNextPrevVal("prev",t.getVal(a),a.data());t.setVal(a,n),a.trigger("changeImmediate",{val:n}).trigger("change",{val:n})})}}(),getValFromPosition:function(){return function(e,t){var a,n=this,r=e.data(),i=e.width();if(r.equalDotsDistance)a=r._enabledVals[Math.round(t/i*(r._enabledVals.length-1))];else{var l=r.min+t/i*(r.max-r.min),s=r.min;for(a=r.min;l>a;)s=a,a=n.getNextPrevVal("next",a,r);_Mathabs(l-s)<_Mathabs(l-a)&&(a=s)}return a}}(),getNextPrevVal:function(){return function(e,t,a){for(var n=this,r=t,i=!1,l=a.step||n.defaults.step;!i;){if("prev"===e){if(r-=l,r<a.min)break}else if(r+=l,r>a.max)break;-1<a._enabledVals.indexOf(r)&&(i=!0)}return i?r:t}}(),createElements:function(){return function(){var n=this;e(".ul-range:not(.ul-range--ready)").each(function(){var r,i=e(this).addClass("ul-range--ready js-input-range");r=t.extend({},n.defaults,i.data());var l=[];r.disabledVals&&(l=n._convertStrToArrayOfNumbers(r.disabledVals+"")),r._enabledVals=[];for(var s=r.min;s<=r.max;)-1===l.indexOf(s)&&r._enabledVals.push(s),s+=r.step;if(-1===r._enabledVals.indexOf(r.val)){var u=n.getNextPrevVal("prev",r.val,r);u===r.val&&(u=n.getNextPrevVal("next",r.val,r)),r.val=u,i.data("val",u)}i.data("step",r.step),i.data("valTitle",r.valTitle),i.data("equalDotsDistance",r.equalDotsDistance),i.data("_enabledVals",r._enabledVals),(r.max<=r.min||r.val<r.min||r.val>r.max)&&(r.min=n.defaults.min,r.max=n.defaults.max,r.val=n.defaults.val),r.handleOffset=n._getLeftPercentOffsetFromVal(r.val,r)+"%",i.append(t.template(a,{data:r})),r.isDotted&&(i.addClass("ul-range--with-points"),n.createPoints(i,r)),n.createDraggable(i,r),setTimeout(function(){i.addClass("ul-range--visible")},0)})}}(),createPoints:function(){return function(a,i){var l=this,s=void 0,u=[],o=[],f=[];if(i.numbers&&(i.numbers+=""),i.points&&(i.points+=""),i.numbers){var c=l._convertStrToEnum(i.numbers),d=_slicedToArray(c,2);o=d[0],f=d[1],u=i.points?l._convertStrToArrayOfNumbers(i.points):o}else if(o=[i.min,i.max],f=o,i.points)u=l._convertStrToArrayOfNumbers(i.points);else for(u=[],s=i.min;s<=i.max;s+=i.step)u.push(s);var g=[],m=[];u.forEach(function(e){-1===i._enabledVals.indexOf(e)||g.push(l._getLeftPercentOffsetFromVal(e,i))}),o.forEach(function(e,t){if(-1!==i._enabledVals.indexOf(e)){var a=l._getLeftPercentOffsetFromVal(e,i);m.push({left:a+"%",value:f[t]})}}),e(".js-input-range__points",a).append(t.template(r,{pointsData:g})),e(".js-input-range__numbers",a).append(t.template(n,{numbersData:m}))}}(),createDraggable:function(){return function(t,a){var n,r=this;e(".js-input-range__handle",t).draggable({axis:"x",containment:"parent",start:function(){return function(){t.addClass("ul-range--dragging"),n=r.getVal(t)}}(),drag:function(){return function(e,n){var i=r.getValFromPosition(t,n.position.left);n.position.left=a.equalDotsDistance?a._enabledVals.indexOf(i)/(a._enabledVals.length-1)*t.width():(i-a.min)/(a.max-a.min)*t.width(),i!==r.getVal(t)&&(r.setVal(t,i),t.trigger("changeImmediate",{val:i}))}}(),stop:function(){return function(){var i=r.getVal(t);i!==n&&t.trigger("change",{val:i}),e(".js-input-range__handle",t).css("left",r._getLeftPercentOffsetFromVal(i,a)+"%"),t.removeClass("ul-range--dragging")}}()})}}(),getVal:function(){return function(e){return e.first().data("val")}}(),setVal:function(){return function(t,a){t=t.first();var n=this,r=t.data(),i=r.val;if(!(i===a||r&&e.isArray(r._enabledVals)&&-1===r._enabledVals.indexOf(a))){a=a<r.min?r.min:a,a=a>r.max?r.max:a;var l=n._getLeftPercentOffsetFromVal(a,r)+"%";e(".js-input-range__handle",t).css("left",l),e(".js-input-range__filled",t).width(l),e(".js-input-range__val",t).text(a+" "+r.valTitle),t.data("val",a)}}}(),destroy:function(){return function(){e(".ul-range--ready").each(function(){e(".js-input-range__handle",e(this)).draggable("destroy"),e(this).removeClass("ul-range--ready")}),e(document).off(".ulRange")}}(),_convertStrToArrayOfNumbers:function(){return function(e){return e.replace(/\s/g,"").split(",").map(function(e){return parseFloat(e,10)})}}(),_convertStrToEnum:function(){return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=[[],[]];return"string"==typeof e?(e.split(",").forEach(function(e){var a=e.split("="),n=_slicedToArray(a,2),r=n[0],i=n[1],l=void 0===i?r:i;r=+r,isNaN(r)||(t[0].push(r),t[1].push(l.trim()))}),t):t}}(),_getLeftPercentOffsetFromVal:function(){return function(e,t){var a;return a=t.equalDotsDistance?100*(t._enabledVals.indexOf(e)/(t._enabledVals.length-1)):100*((e-t.min)/(t.max-t.min))}}()}});
//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map

//# sourceMappingURL=range.js.map
