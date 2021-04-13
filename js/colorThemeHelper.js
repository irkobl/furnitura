"use strict";function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){if("function"==typeof define&&define.amd)define("colorThemeHelper",["jquery"],e);else{if("object"!==("undefined"==typeof exports?"undefined":_typeof(exports)))throw new Error("Unexpected environment");module.exports=e()}}(function(e){var t={defaultBlockTheme:"g-theme-block-0",getBlockTheme:function(){return function(e,t){return e||(e=this.defaultBlockTheme),"g-theme-block-0"===e&&/g-theme-block-[1-4]/.test(t)&&(e+=" "+t),e}}(),getStyle:function(){return function(e){var t={color:{},image:{}},o=Object.freeze({L:"0",C:"50%",R:"100%",T:"0",B:"100%"}),r=Object.freeze({LT:"repeat repeat",CT:"repeat no-repeat",LC:"no-repeat repeat","С":"no-repeat"});return e.background.overlay&&(t.color=e.background.overlay),"image"==e.bgtype&&(e.background.color&&(t.image["background-color"]=e.background.color),t.image["background-image"]="url("+("none"==e.background.image?"":e.background.image)+")","stretch"==e.background.justify?(t.image["background-size"]="cover",t.image["background-repeat"]="parallax"==e.background.parallax?"repeat":"no-repeat",t.image["background-position"]=function(e){return 1==e.length?o.C+" "+o.C:o[e[0]]+" "+o[e[1]]}(e.background.position)):"tile"==e.background.justify&&(t.image["background-position"]=function(e){return 1==e.length?o.C+" "+o.C:o[e[0]]+" "+o[e[1]]}(e.background.position),t.image["background-repeat"]=r[e.background.repeat])),t}}(),toString:function(){return function(e){return Object.keys(e).reduce(function(t,o){return void 0===e[o]?t:t+(o+": "+e[o]+"; ")},"")}}(),convertFrom:function(){return function(e){return Object.keys(e).reduce(function(t,o){return 0<=["position","justify","repeat"].indexOf(o)?t.background[o]=e["bg"+o]:0<=["parallax","image","color"].indexOf(o)?t.background[o]=e[o]:t[o]=e[o],t},{background:{parallax:"none",image:"",color:""}})}}(),setSiteTheme:function(){return function(t){var o=t.context?e("#body",t.context):e("#body"),r=t.theme;0<o.length&&r?o.removeClass(function(e,t){return(t.match(/g-theme-site-\d/)||[]).join(" ")}).addClass(t.theme):console.error("colorThemeHelper invalid params",t)}}(),setColorAttrbute:function(){return function(t,o){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"desktop",n={},a=_defineProperty({},r,o[0]);if(t.is("header")||t.is("footer")){a={desktop:o[0],tablet:o[0],phone:o[0]};var c=e('[class*="g-theme-block-"]',t);c.length&&e.each(c,function(t,o){var r=e(o),n=/g-theme-block-\d/.exec(r.attr("class"))[0];n&&r.attr("data-theme-block",'{"desktop":"'+n+'", "tablet":"'+n+'", "phone":"'+n+'"}')})}o.includes("g-theme-block-0")&&(a=_defineProperty({},r,o[1]),"g-theme-block-5"===e("#body-fict").attr("data-block_theme")&&!o[1]&&(a=_defineProperty({},r,o[0])),(t.is("header")||t.is("footer"))&&(a={desktop:o[1],tablet:o[1],phone:o[1]},"g-theme-block-5"===e("#body-fict").attr("data-block_theme")&&!o[1]&&(a={desktop:o[0],tablet:o[0],phone:o[0]})));var i=t.attr("data-theme-block")?t.attr("data-theme-block"):'{"desktop":"'+o[0]+'", "tablet":"'+o[0]+'", "phone":"'+o[0]+'"}';try{n=JSON.parse(i)}catch(c){console.error("data-theme-block JSON parse failed")}e.extend(n,a),t.attr("data-theme-block",JSON.stringify(n))}}(),setBlocksTheme:function(){return function(o,r){var n=this,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"desktop",c=null;if(r instanceof e?c=r.toArray():r instanceof Array?c=r:"object"===("undefined"==typeof r?"undefined":_typeof(r))&&null!==r&&(c=[r]),!c)throw new Error("Unexpected type of 'blocks' argument");c.forEach(function(c){var i=e(c),l=i.attr("id"),u=i.attr("data-theme");if(i){var d=u;if(r.backgroundBlockParams&&r.backgroundBlockParams[l])d=r.backgroundBlockParams[l][a].theme;else try{d=JSON.parse(i.attr("data-theme-block"))[a]}catch(s){console.log("data-theme-block JSON parse failed")}var f=t.getBlockTheme(d,o);n.setColorAttrbute(i,[d],a),i.removeClass(function(e,t){return(t.match(/g-theme-block-\d/g)||[]).join(" ")}).addClass(f)}})}}(),updateHeaderFooterColorThemes:function(){return function(t,o){var r=this;e.each(e("header, footer, #js-blogTheme",t.context),function(n,a){var c=t.className.split(" ");r.setColorAttrbute(e(a),c,o)}),e("header, footer, #js-blogTheme",t.context).removeClass(function(e,t){return(t.match(/g-theme-block-\d/g)||[]).join(" ")}).addClass(t.className)}}(),updateBodyFictColorThemes:function(){return function(t,o){var r=e(t.bodyFict);r.removeClass(function(e,t){return(t.match(/g-theme-block-\d/)||[]).join(" ")}).addClass(t.className).attr("data-block_theme",t.className),this.setColorAttrbute(r,t.className.split(" "),o)}}()};return t});
//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map
