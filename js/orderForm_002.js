'use strict';define('model/orderForm',['jquery','U','i18n'],function(a,b,c){return{localOrderFormCollection:null,getFieldDefault:function getFieldDefault(d){function e(h){var i={fieldType:h,requiredField:!0,visible:!0,title:f(h),showTitle:!0,placeholder:f('enter '+h),showPlaceholder:!1,description:f(h+' example'),showDescription:!0,size:'md'};return'file'===h?i=a.extend(i,{title:c('constructor.orderForm.attach file'),showTitle:!1,showDescription:!1}):'userAgreement'===h&&(i=a.extend(i,{showTitle:!1})),i}var f=c('constructor.orderForm.def'),g=[];return d.forEach(function(h){g.push(e(h))}),g},defForm:function defForm(){var d=this,e=c('constructor.orderForm.def'),f={showMisk:!1,msgAfterSend:e('msgAfterSend'),customEmail:!1,sendToCustom:'',title:e('title'),btn:e('btn'),miskDataTitle:e('miskDataTitle'),showMiskDataTitle:!0,rType:'notRequired',textData:e('required'),notRequiredData:e('not required'),fields:d.getFieldDefault(['email','text'])};return f},add:function add(d,e){var f=this;e=e||function(){},a.post('/sites/url/'+b.params.site+'/orderForm/add',d).success(b.splitArgs(function(g,h){!g&&f.localOrderFormCollection&&f.localOrderFormCollection.push(h),a(document).trigger('orderFormChange',{action:'add',data:h}),e(g,h)})).error(e)},copy:function copy(d,e,f){var g=this;a.post('/sites/url/'+b.params.site+'/orderForm/copy',{_id:d,title:e}).success(b.splitArgs(function(h,i){!h&&g.localOrderFormCollection&&g.localOrderFormCollection.push(i),a(document).trigger('siteChanged'),f(h,i)})).error(f)},reorder:function reorder(d,e){var f=this;a.ajax({method:'PUT',url:'/sites/url/'+b.params.site+'/orderForm/reorder',data:{orderList:d},success:b.splitArgs(function(g,h){var i=f.localOrderFormCollection.reduce(function(j,k){return j[k._id]=k,j},{});f.localOrderFormCollection=d.map(function(j){return i[j]}),i=null,e(g,h)}),error:e})},edit:function edit(d,e){var f=this;e=e||function(){},a.post('/sites/url/'+b.params.site+'/orderForm/edit',d).success(b.splitArgs(function(g,h){f.localOrderFormCollection&&(f.localOrderFormCollection[f.getLocalIndex(h._id)]=h),a(document).trigger('siteChanged'),a(document).trigger('orderFormChange',{action:'edit',data:h}),e(g,h)})).error(e)},remove:function remove(d,e){var f=this;e=e||function(){},a.post('/sites/url/'+b.params.site+'/orderForm/remove',{_id:d}).success(b.splitArgs(function(g,h){!g&&f.localOrderFormCollection&&f.localOrderFormCollection.splice(f.getLocalIndex(d),1),a(document).trigger('siteChanged'),a(document).trigger('orderFormChange',{action:'remove',id:d}),e(g,h)})).error(e)},getLocalIndex:function getLocalIndex(d){return this.localOrderFormCollection.findIndex(function(e){return e._id===d})},list:function list(d){var e=this;return e.localOrderFormCollection?void d(null,e.localOrderFormCollection):void a.get('/sites/url/'+b.params.site+'/orderForm/list').success(b.splitArgs(function(f,g){e.localOrderFormCollection=g,d(f,g)})).error(d)},get:function get(d,e){var f=this;return f.localOrderFormCollection?void e(null,f.localOrderFormCollection[f.getLocalIndex(d)]):void a.get('/sites/url/'+b.params.site+'/orderForm/get',{_id:d}).success(b.splitArgs(function(g,h){f.localOrderFormCollection&&(f.localOrderFormCollection[f.getLocalIndex(d)]=h),e(g,h)})).error(e)},getForImported:function getForImported(d,e){a.get('/api/site_import/facebook/orderform/'+b.params.site+'/',{_id:d}).success(b.splitArgs(e)).error(e)}}});
//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map

//# sourceMappingURL=orderForm.js.map
