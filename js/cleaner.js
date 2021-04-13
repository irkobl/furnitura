"use strict";var _Mathabs=Math.abs,_Mathmax=Math.max,_Mathmin=Math.min;define("editApiCleaner",[],function(){return{_checkBr:function(){return function(){}}(),_cleaner:function(){return function(e){var t=this;1!=e&&t._selection.save(),t.$el.find("*").each(function(){var a=this,r={tagName:a.tagName.toLowerCase(),styles:t._getElementCss($(a)),classes:$(a).attr("class")?$(a).attr("class").split(" "):[],attrs:$.extend({},a.attributes)};if(-1==$.inArray(r.tagName,Object.keys(t.white)))return a.parentNode==t.$el.get(0)?!t.opt.simpleText&&$(a).replaceWith("<"+t.opt.defaultTag+">"+$(a).html()+"</"+t.opt.defaultTag+">"):$(a).text().length?$(a).contents().unwrap():$(a).remove(),t._cleaner(e,"recursion delete nodes"),!1;if(t.opt&&t.opt.simpleText&&"br"===r.tagName&&(/firefox/.test(navigator.userAgent.toLowerCase())?$(a).replaceWith("&shy;"):$(a).remove()),!($.inArray(r.tagName,Object.keys(t.white))+1))return t._cleaner(e,"recursion node not valid"),!1;"br"!=r.tagName||$(a).parent().text().replace(/\s/g,"").length||$(a).replaceWith("&nbsp;");for(var n,s=0;s<r.attrs.length;s++)n=r.attrs[s],"class"==n.name||"style"==n.name||-1!=$.inArray(n.name,t.white[r.tagName].attrs)||("align"==n.name&&$(a).css("text-align",$(a).attr("align")),$(a).removeAttr(n.name));if(Object.keys(r.styles).forEach(function(e){if("color"===e&&"span"==r.tagName){var n=t._color2class(r.styles[e]);n>0&&$(a).addClass("g-color-text-"+(n+1))}var s=t.white[r.tagName].styles||{};$.inArray(e,Object.keys(s))+1?s[e].length&&-1==$.inArray(r.styles[e],s[e])&&$(a).css(e,""):$(a).css(e,"")}),r.classes.forEach(function(e){-1==$.inArray(e,t.white[r.tagName].classes)&&$(a).removeClass(e)}),!t.white[r.tagName].nested&&$(a).parent().get(0)!=t.$el.get(0)){var l="";if("ul"==r.tagName||"ol"==r.tagName){var i=$(a).closest("h1, h2, h3, h4, h5, h6");l=i.length?i.get(0).tagName.toLowerCase():""}if($(a).closest(t.$el).length)return $(a).addClass(l),t._unwrapToParent($(a)),t._cleaner(e,"recursion _unwrapToParent"),!1}if(t.white[r.tagName].nested&&$(a).parent().get(0)==t.$el.get(0)&&"img"!=r.tagName&&!t.opt.simpleText)return $(a).replaceWith("<"+t.opt.defaultTag+">"+$(a).html()+"</"+t.opt.defaultTag+">"),!1;if("img"==r.tagName){var o=$(a);if("A"==o.parent().get(0).tagName&&(o=$(a).parent()),o.parent().get(0)==t.$el.get(0))return o.wrap("<p></p>"),t._cleaner(e,"recursion img hasn't parent. wrapped"),!1;if(o.parent().length&&o.parent().text().length)return t._unwrapToParent(o),t._cleaner(e,"recursion img parent has text"),!1;o.parent().length&&"P"!=o.parent().get(0).tagName&&o.parent().replaceWith("<p>"+o.parent().html()+"</p>")}if("img"!=r.tagName&&"br"!=r.tagName&&"hr"!=r.tagName&&!$(a).text().length&&!$(a).children().length)return $(a).remove(),t._cleaner(e,"recursion remove empty nodes"),!1;if(null==$(a).attr("style")||$(a).attr("style").length||$(a).removeAttr("style"),null==$(a).attr("class")||$(a).attr("class").length||$(a).removeAttr("class"),"span"==r.tagName&&null==$(a).attr("style")&&null==$(a).attr("class")){if(null==t.white.span.attrs)return $(a).contents().unwrap(),t._cleaner(e,"recursion remove span without styles"),!1;var c=!0;if(t.white.span.attrs.forEach(function(e){return null!=$(a).attr(e)&&c?(c=!1,!1):void 0}),c)return $(a).contents().unwrap(),t._cleaner(e,"recursion remove span after remove no valid styles"),!1}}),1!=e&&t._selection.restore()}}(),_unwrapToParent:function(){return function(e){if(e.parent().length&&e.parent().get(0)!=this.$el.get(0)){e.addClass("js-will-unwrap");var t=e.get(0).outerHTML,a=this.smartBreakNodes(e);null!=a&&this.$el.html(this.$el.html().replace(t,a.start+t+a.end)),$(".js-will-unwrap",this.$el).removeClass("js-will-unwrap")}}}(),_color2class:function(){return function(e){function t(e){return e.replace("rgb(","").replace(")","").split(",")}function a(e){e[0]=parseInt(e[0]),e[1]=parseInt(e[1]),e[2]=parseInt(e[2]);var t=_Mathmin.apply(null,e),a=_Mathmax.apply(null,e),r=0,n=a-t,s=_Mathmax(e[0],e[1],e[2])/255;if(0==n)return[0,s];switch(e.indexOf(a)){case 0:r=(e[1]-e[2])/n;break;case 1:r=2+(e[2]-e[0])/n;break;default:r=4+(e[0]-e[1])/n}return r*=60,0>r&&(r+=360),[r/360,s]}var r=800,n=-1;return e=a(t(e)),this.colors.forEach(function(s,l){s=a(t(s));var i=e[0],o=s[0],c=1.5*_Mathmin(_Mathabs(i-o),_Mathmin(i,o)+1-_Mathmax(i,o)),u=c*c+_Mathabs(e[1]-s[1]);r>u&&(n=l,r=u)}),parseInt(n)}}(),_getElementCss:function(){return function(e){var t=e.attr("style")?e.attr("style").split(";"):[],a={};return t.forEach(function(e){if(0<e.length){e=e.replace(/\s/g,"");var t=e.split(":");a[t[0]]=t[1]}}),a}}(),smartBreakNodes:function(){return function(e){var t=this,a={start:"",end:""},r=[];if(e=e.parent(),e.length){for(;e.get(0)!=t.$el.get(0)&&e.closest(t.$el)&&null!=e.get(0);)a.start+="</"+e.get(0).tagName.toLowerCase()+">",r.push(e.get(0)),e=e.parent();return r=r.reverse(),r.forEach(function(e){var t=e.attributes;a.end+="<"+e.tagName.toLowerCase();for(var r,n=0;n<t.length;n++)r=t[n],a.end+=" "+r.name+'="'+r.value+'"';a.end+=">"}),a}return null}}()}});
//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map

//# sourceMappingURL=cleaner.js.map
