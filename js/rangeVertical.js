'use strict';define('ul-framework/rangeVertical',['jquery','_','text!html/ul-framework/rangeVertical.html','jquery-ui-draggable'],function(a,b,c){return{defaults:{min:0,max:10,title:'Range title',val:5,valTitle:'',isDotted:!0,showAccurate:!1,step:1,equalDotsDistance:!0,designWhite:!1,showVal:!1},init:function init(){var d=this;d.createElements(),d.listenersAdded||(d.listenersAdded=!0,d.addListeners())},addListeners:function addListeners(){var d=this;a(document).on('click.ulRangeVertical','.js-input-range-vertical__clickable',function(f){var g=a(this).closest('.js-input-range-vertical'),h=d.getValFromPosition(g,f.offsetY||f.originalEvent.layerY||0);d.setVal(g,h)}).on('click.ulRangeVertical','.js-input-range-vertical__plus',function(){var f=a(this).closest('.js-input-range-vertical'),g=d.getNextPrevVal('next',d.getVal(f),f.data());d.setVal(f,g)}).on('click.ulRangeVertical','.js-input-range-vertical__minus',function(){var f=a(this).closest('.js-input-range-vertical'),g=d.getNextPrevVal('prev',d.getVal(f),f.data());d.setVal(f,g)})},getValFromPosition:function getValFromPosition(d,f){var g=this,h=d.data(),j=d.height(),k;if(h.equalDotsDistance){k=h._enabledVals[Math.round(f/j*(h._enabledVals.length-1))]}else{var m=h.min+f/j*(h.max-h.min),n=h.min;for(k=h.min;m>k;)n=k,k=g.getNextPrevVal('next',k,h);Math.abs(m-n)<Math.abs(m-k)&&(k=n)}return k},getNextPrevVal:function getNextPrevVal(d,f,g){for(var h=this,j=f,k=!1,l=g.step||h.defaults.step;!k;){if('prev'===d){if(j-=l,j<g.min)break;}else if(j+=l,j>g.max)break;-1<g._enabledVals.indexOf(j)&&(k=!0)}return k?j:f},createElements:function createElements(){var d=this;a('.ul-range-vertical:not(.ul-range-vertical--ready)').each(function(){var g,f=a(this).addClass('ul-range-vertical--ready js-input-range-vertical');g=b.extend({},d.defaults,f.data());var h=[];g.disabledVals&&(h=d._convertStrToArrayOfNumbers(g.disabledVals+'')),g._enabledVals=[];for(var j=g.min;j<=g.max;)-1===h.indexOf(j)&&g._enabledVals.push(j),j+=g.step;if(-1===g._enabledVals.indexOf(g.val)){var k=d.getNextPrevVal('prev',g.val,g);k===g.val&&(k=d.getNextPrevVal('next',g.val,g)),g.val=k,f.data('val',k)}f.data('step',g.step),f.data('valTitle',g.valTitle),f.data('equalDotsDistance',g.equalDotsDistance),f.data('_enabledVals',g._enabledVals),(g.max<=g.min||g.val<g.min||g.val>g.max)&&(g.min=d.defaults.min,g.max=d.defaults.max,g.val=d.defaults.val);var l=g.max-g.val+g.min;g.handleOffsetHandle=d._getTopPercentOffsetFromVal(l,g)+'%',g.handleOffsetFilled=d._getTopPercentOffsetFromVal(g.val,g)+'%',f.append(b.template(c,{data:g})),g.isDotted&&(f.addClass('ul-range-vertical--with-points'),d.createPoints(f,g)),d.createDraggable(f,g),setTimeout(function(){f.addClass('ul-range-vertical--visible')},0)})},createPoints:function createPoints(d,f){var h,g=this,j=[],k=[],l='',m='';if(f.numbers&&(f.numbers+=''),f.points&&(f.points+=''),f.numbers)k=g._convertStrToArrayOfNumbers(f.numbers),j=f.points?g._convertStrToArrayOfNumbers(f.points):k;else if(k=[f.min,f.max],f.points)j=g._convertStrToArrayOfNumbers(f.points);else for(j=[],h=f.min;h<=f.max;h+=f.step)j.push(h);j.forEach(function(n){if(-1!==f._enabledVals.indexOf(n)){var o=g._getTopPercentOffsetFromVal(n,f);l+='<div class="ul-range-vertical__points__point" style="top: '+o+'%;"></div>'}}),k.forEach(function(n){if(-1!==f._enabledVals.indexOf(n)){var o=g._getTopPercentOffsetFromVal(n,f);m+='<div class="ul-range-vertical__numbers__number" style="top: '+o+'%;">'+n+'</div>'}}),a('.js-input-range-vertical__points',d).append(l),a('.js-input-range-vertical__numbers',d).append(m)},createDraggable:function createDraggable(d,f){var g=this,h;a('.js-input-range-vertical__handle',d).draggable({axis:'y',containment:'parent',start:function start(){d.addClass('ul-range-vertical--dragging'),h=g.getVal(d)},drag:function drag(j,k){var l=g.getValFromPosition(d,k.position.top);k.position.top=f.equalDotsDistance?f._enabledVals.indexOf(l)/(f._enabledVals.length-1)*d.height():(l-f.min)/(f.max-f.min)*d.height(),l!==g.getVal(d)&&g.setVal(d,l)},stop:function stop(){var j=g.getVal(d);j!==h&&d.trigger('change',{val:g.getValInvert(d)}),a('.js-input-range-vertical__handle',d).css('top',g._getTopPercentOffsetFromVal(j,f)+'%'),d.removeClass('ul-range-vertical--dragging')}})},getVal:function getVal(d){return d.first().data('val')},getValInvert:function getValInvert(d){return d.first().data('val_invert')},setVal:function setVal(d,f){d=d.first();var g=this,h=d.data(),j=h.val;if(j!==f&&-1!==h._enabledVals.indexOf(f)){f=f<h.min?h.min:f,f=f>h.max?h.max:f;var k=h.max-f+h.min,l=g._getTopPercentOffsetFromVal(f,h)+'%',m=g._getTopPercentOffsetFromVal(k,h)+'%';a('.js-input-range-vertical__handle',d).css('top',l),a('.js-input-range-vertical__filled',d).height(m),a('.js-input-range-vertical__val',d).text(k+' '+h.valTitle),d.data('val',f),d.data('val_invert',k),d.trigger('changeImmediate',{val:k}).trigger('change',{val:k})}},destroy:function destroy(){a('.ul-range-vertical--ready').each(function(){a('.js-input-range-vertical__handle',a(this)).draggable('destroy'),a(this).removeClass('ul-range-vertical--ready')}),a(document).off('.ulRangeVertical')},_convertStrToArrayOfNumbers:function _convertStrToArrayOfNumbers(d){return d.replace(/\s/g,'').split(',').map(function(f){return parseFloat(f,10)})},_getTopPercentOffsetFromVal:function _getTopPercentOffsetFromVal(d,f){var g;return g=f.equalDotsDistance?100*(f._enabledVals.indexOf(d)/(f._enabledVals.length-1)):100*((d-f.min)/(f.max-f.min)),g},customUpdate:function customUpdate(d,f){var g=this;if(d.data('min')!=f.min||d.data('max')!=f.max){d.data('min',f.min),d.data('max',f.max);for(var h=[],j=f.min;j<=f.max;)h.push(j),j+=d.data().step;d.data()._enabledVals=h,g.createDraggable(d,d.data())}if(-1===d.data()._enabledVals.indexOf(f.val)){var k=g.getNextPrevVal('prev',f.val,d.data());k===f.val&&(k=g.getNextPrevVal('next',f.val,d.data())),f.val=k,d.data('val',k)}var l=d.data().max-f.val+d.data().min;g.setVal(d,l)}}});
//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map

//# sourceMappingURL=rangeVertical.js.map
