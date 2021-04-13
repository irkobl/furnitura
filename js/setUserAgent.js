define("setUserAgent",["jquery","bowser"],function(e,n){var t={replaceUserAgent:function(e,t,o){var i={tablet:"Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B137 Safari/601.1",phone:"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",desktop:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"};if("back"===t&&window.oldUseragent&&(t="desktop",i[t]=window.oldUseragent,e=window),n.safari){-1!=t.indexOf("tablet")&&(t="tablet"),-1!=t.indexOf("phone")&&(t="phone");var a={};Object.keys(e.navigator).forEach(function(e){"userAgent"==e&&(a[e]=o?o:i[t])}),window.oldUseragent=e.navigator.userAgent,e.navigator=a}else"tablet-g"===t||"phone-g"===t?Object.defineProperty(e.screen,"orientation",{configurable:!0,get:function(){return{angle:90,type:"landscape-primary",onchange:null}}}):Object.defineProperty(e.screen,"orientation",{configurable:!0,get:function(){return{angle:0,type:"portrait-primary",onchange:null}}}),-1!=t.indexOf("tablet")&&(t="tablet"),-1!=t.indexOf("phone")&&(t="phone"),"desktop"===t||window.oldUseragent||(window.oldUseragent=e.navigator.userAgent),"desktop"===t&&window.oldUseragent&&(i[t]=window.oldUseragent),Object.defineProperty(e.navigator,"userAgent",{configurable:!0,get:function(){return o?o:i[t]}})}};return t});
//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map

//# sourceMappingURL=setUserAgent.js.map
