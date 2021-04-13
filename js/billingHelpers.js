'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};

(function(a){


if('function'==typeof define&&define.amd)
define('billingHelpers',['lodash'],a);else



if('object'===('undefined'==typeof exports?'undefined':_typeof(exports)))
module.exports=a(
require('e')._);else





throw new Error('Unexpected environment');


})(function(a){






var b=function(){return function(d){
d=a.extend({
minTariffs:{}},
d);

var e=d.feature,
f=d.weight,
g=d.minTariffs,

h=null;






if(g[e])
if(a.isArray(g[d.feature])){

var i=a.sortBy(
g[d.feature],
'weight');h=


f?

function(){
var j=a.find(i,function(k){
return 0<k.weight-f;
});






return j=j?i[i.indexOf(j)-1]||j:i[i.length-1],j;
}():

i[0].tariff;


}else if(a.isObject(g[e]));else

a.isString(g[e])&&(
h=g[d.feature]);



return h;
}}();

return{
getFeatureMinTariff:b};

});
//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map

//# sourceMappingURL=billingHelpers.js.map
