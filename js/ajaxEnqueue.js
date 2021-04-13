"use strict";define("enqueueAjax",["ul-error","nf","i18n"],function(e,t,u){var n=[],r={},i=!1,c=function(){function e(){if(!i&&n.length)if($(document).trigger("siteChanged"),"get"==n[0].comand)n.shift().callback([]);else if(r.queues){if(r.queuesSuccessively.length){var t=r.queuesSuccessively.filter(function(e){return e.cb}).map(function(e){return e.cb});r.queues.push({url:r.queuesSuccessively[0].url,data:{queries:JSON.stringify(r.queuesSuccessively.map(function(e){return e.data}))},cb:function(){return function(){t.forEach(function(e){return e()})}}()})}n.shift().callback(r.queues.reverse()),r={},e()}}return e}(),o=function(){return function(n){n.stack=[{fileName:"ajaxEnqueue"}],e.sendErrorOnServer(n),t.confirm({title:u("all.timeoutError")("title"),text:u("all.timeoutError")("text"),ok:u("all.timeoutError")("okBtnText"),okCb:function(){return function(){window.location.reload()}}()})}}();return function(e,t){if(t)switch(t.action){case"beginAtomic":return i&&console.error("[History] Second begin without end"),i&&o({msg:"[History] Second begin without end",historyQueues:r}),r.queues=[],r.queuesSuccessively=[],void(i=!0);case"endAtomic":return i||console.error("[History] End without begin"),i||o({msg:"[History] End without begin",historyQueues:r}),i=!1,c();case"setCallBack":return n.push({callback:t.callBack,comand:t.comand}),2<n.length&&console.error("[History] Callback length qt 3",n),2<n.length&&o({msg:"[History] Callback length qt 3",length:n.length,historyQueues:r}),c()}return r.queues||r.queuesSuccessively?void(e.parallel?r.queues.push(e):r.queuesSuccessively.push(e)):void(e.cb&&e.cb(null,[null]))}});
//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map
