'use strict';define('js/ulib/crop/events',[],function(){var a=function(){this.stack=[]};return a.prototype.on=function(b,c){b=b.split('.');var d=b[0],e=b[1]||null;return this.stack.push({name:d,namespace:e,cb:c}),this},a.prototype.off=function(b){b=b.split('.');var c=this,d=b[0]||null,e=b[1]||null;return d||e?(this.stack=this.stack.filter(function(f){return(f.name!==d||e)&&(f.name===d&&e===f.namespace?!1:d||e!==f.namespace)}),this):c.stack=[]},a.prototype.dispatch=function(b,c){var d=!1;return this.stack.some(function(e){return!!d||void(e.name===b&&e.cb({stopPropagation:function stopPropagation(){d=!0}},c))}),this},a});
//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map

//# sourceMappingURL=events.js.map
