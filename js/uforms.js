'use strict';define('uform',['jquery','U','ul-framework'],function(a,b,c){return{formFill:function formFill(d,e){var g,f=a('[ul-model]',d);g=function modelVal(h){var j=e;return h.split('.').forEach(function(k){j=j[k]}),j},f.each(function(){var h=a(this),j=g(h.attr('ul-model'));'undefined'==typeof j||('INPUT'==h.prop('tagName')&&-1!==['text','email','number','password','hidden','range','tel'].indexOf(h.prop('type'))?h.val(j):'INPUT'==h.prop('tagName')&&'checkbox'==h.prop('type')?h.prop('checked',j).trigger('change.folds-sub'):'INPUT'==h.prop('tagName')&&'radio'==h.prop('type')&&h.prop('value')==j?h.prop('checked',!0).trigger('change.folds-sub'):'TEXTAREA'==h.prop('tagName')?h.val(j):h.hasClass('ul-select')||h.hasClass('ul-select-link')?(h.children('select').val(j),h.find('select').val(j)):'TEXTAREA'==h.prop('tagName')?a(h).val(j):h.hasClass('ul-range')&&c.range.setVal(h,j))})},formParse:function formParse(d){var e=a('[ul-model]',d),f={};return e.each(function(){var h,g=a(this),j=g.attr('ul-model-default-value');g.is('input')&&g.prop('type')in{text:1,email:1,number:1,password:1,hidden:1,color:1,range:1,tel:1,date:1}||g.is(':radio:checked')||g.is('select')||g.is('textarea')?h=g.val():g.is(':checkbox')?h=g.prop('checked'):g.hasClass('ul-range')?h=c.range.getVal(g):(g.hasClass('ul-select')||g.hasClass('ul-select-link'))&&(h=g.find('select').val()),h=!h&&j?j:h,a.extend(!0,f,b.parse(g.attr('ul-model'),h))}),f},showErrors:function showErrors(d,e){var f=this;f.$form=d,f.clearErrors(d),f._showErrors(e,''),f._sortFieldsGroupNotes(d)},_showErrors:function _showErrors(d,e){var g,h,f=this;for(var j in d)if('string'==typeof d[j]){g=a('[ul-model="'+e+j+'"]',f.$form),g.addClass('error');var k=g.parent();k.hasClass('ul-form-group')||k.addClass('error'),h=f._getFieldNote(g).addClass('error'),h.data('defaultText',h.text()),h.text(d[j])}else f._showErrors(d[j],e+j+'.')},_getFieldNote:function _getFieldNote(d){var f,e=d.parent();if(e.hasClass('ul-form-group')){var g=d.attr('ul-model');f=a('[data-field="'+g+'"]',e),f.length||(f=a('<p>',{'class':'ul-field-note','data-field':g}).appendTo(e))}else f=d.siblings('.ul-field-note'),f.length||(f=a('<p class="ul-field-note"></p>'),d.after(f));return f},_sortFieldsGroupNotes:function _sortFieldsGroupNotes(d){a('.ul-form-group',d).each(function(e,f){var g=a(),h=a('.ul-field-note',f).detach();a('[ul-model]',f).each(function(){g=g.add(h.filter('[data-field="'+a(this).attr('ul-model')+'"]'))}),a(f).append(g)})},clearErrors:function clearErrors(d){a('.ul-field-note',d).each(function(){var e=a(this);e.parent().removeClass('error'),e.text(e.data('defaultText')),e.removeClass('error').siblings('.error').removeClass('error')})}}});
//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map

//# sourceMappingURL=uforms.js.map
