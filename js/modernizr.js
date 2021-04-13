window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&h[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:o(s,"function")?s.bind(r||t):s}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+x.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?s(i,t):(i=(e+" "+C.join(r+" ")+r).split(" "),c(i,t,n))}var a,f,l,d="2.8.3",p={},y=t.documentElement,v="modernizr",m=t.createElement(v),h=m.style,b=":)",w=({}.toString,"Webkit Moz O ms"),x=w.split(" "),C=w.toLowerCase().split(" "),E={},g=[],S=g.slice,T=function(e,n,r,o){var i,s,c,u,a=t.createElement("div"),f=t.body,l=f||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),a.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),a.id=v,(f?a:l).innerHTML+=i,l.appendChild(a),f||(l.style.background="",l.style.overflow="hidden",u=y.style.overflow,y.style.overflow="hidden",y.appendChild(l)),s=n(a,e),f?a.parentNode.removeChild(a):(l.parentNode.removeChild(l),y.style.overflow=u),!!s},z={}.hasOwnProperty;l=o(z,"undefined")||o(z.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return z.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=S.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,s=t.apply(i,n.concat(S.call(arguments)));return Object(s)===s?s:i}return t.apply(e,n.concat(S.call(arguments)))};return r}),E.flexbox=function(){return u("flexWrap")},E.history=function(){return!!e.history&&!!history.pushState},E.backgroundsize=function(){return u("backgroundSize")},E.csstransforms=function(){return!!u("transform")},E.fontface=function(){var e;return T('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,s=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(s)&&0===s.indexOf(r.split(" ")[0])}),e},E.generatedcontent=function(){var e;return T(["#",v,"{font:0/0 a}#",v,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},E.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}};for(var j in E)l(E,j)&&(f=j.toLowerCase(),p[f]=E[j](),g.push((p[f]?"":"no-")+f));return p.addTest=function(e,t){if("object"==typeof e)for(var r in e)l(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof enableClasses&&enableClasses&&(y.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),m=a=null,p._version=d,p._domPrefixes=C,p._cssomPrefixes=x,p.testProp=function(e){return s([e])},p.testAllProps=u,p.testStyles=T,p}(this,this.document),Modernizr.addTest("pointerevents",function(){var e,t=document.createElement("x"),n=document.documentElement,r=window.getComputedStyle;return"pointerEvents"in t.style?(t.style.pointerEvents="auto",t.style.pointerEvents="x",n.appendChild(t),e=r&&"auto"===r(t,"").pointerEvents,n.removeChild(t),!!e):!1});
//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map

//# sourceMappingURL=modernizr.custom.js.map
