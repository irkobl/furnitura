'use strict';define('autocrop',['jquery','U','widget','cropMixins','cropModes','logActions'],function(a,b,c,d,e,f){return{autocrop:!0,stop:function stop(h,i){var j=this,k={};j.stopImmediate(),h.find('.'+e.autocropClass).each(function(){var l={};if(!i)return void e._ACM(this);if('true'===a(this).attr(e.useAutoHeightAttrName)&&e._ACM(this),l=j._getCoords(a(this)),d.checkDiff(l.cropData,l._autocrop)){var m=l.$el.attr('data-autocrop',JSON.stringify(l.cropData)).closest('.ul-widget').attr('id');a(l.$el).removeAttr(e.containerAR),k[m]||(k[m]=[]),k[m].push({autocrop:l.cropData,$el:l.$el})}}),Object.keys(k).forEach(function(l){var m=c.get(l);m&&m.autocrop&&(f.add({fromFile:'js/ulib/crop/autocrop.js',title:'autocrop ready',desc:'widgetId: '+l}),m.autocrop(k[l]))})},setHeight:function setHeight(h,i){var j=h.find('.'+e.autocropClass);return'number'==typeof i?j.each(function(){a(this).attr(e.useHeightAttrName,i)}):'string'==typeof i&&'auto'==i?j.each(function(){a(this).show().attr(e.useAutoHeightAttrName,!0);var k=e._getImageParams(this);k.zoomaway&&a(k.img).css('max-width',k.data.container.width*(k.img.naturalWidth/k.data.autocrop.width))}):i.is(a)&&i.find('.'+e.autocropClass).each(function(k){j.eq(k).attr(e.useHeightAttrName,a(this).height())}),j},setImmediate:function setImmediate(h){var i=this;i.autocrop=!1,requestAnimationFrame(function j(){var k=h.find('.'+e.autocropClass);e._ACM(k.get(0));var l=e._getRealImageParams(k.get(0));l.data.container.height==k.data('immediateHeight')?k.data('dublicateHeight',parseInt(k.data('dublicateHeight'))+1):(k.data('immediateHeight',l.data.container.height),k.data('dublicateHeight',0)),5<parseInt(k.data('dublicateHeight'))&&i.stopImmediate(),i.autocrop||requestAnimationFrame(j)})},stopImmediate:function stopImmediate(){this.autocrop=!0},_getCoords:function _getCoords(h){var i=e._getImageParams(h.get(0)),j=i.data,k=j.container.width*(i.img.naturalWidth/j.img.width),l=j.container.height*(i.img.naturalHeight/j.img.height),m={cropData:{x:(j.img.width-j.container.width)/2*(i.img.naturalWidth/j.img.width),y:j.usercrop.y+(j.img.height-j.container.height)/2*(i.img.naturalHeight/j.img.height),height:l,width:k,resizeWidth:i.zoomaway?j.img.width:d.getContainerWidth(i.el,k),src:''},_autocrop:j.autocrop,$el:a(i.el)};return i.zoomaway||(m.cropData.x+=j.usercrop.x),1<j.container.width-j.img.width&&(m.cropData.x=j.usercrop.x-(k-j.usercrop.width)/2),i.data.usercrop.cutOrig&&i.zoomaway&&(m.cropData=j.autocrop),m}}});
//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map
