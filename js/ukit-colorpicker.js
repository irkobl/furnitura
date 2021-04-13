define("ukit-colorpicker",["i18n","jquery","css!/css/lib/ukit-colorpicker.css"],function(e,o,t){var r=function(){var o=65,t='<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit">ok</div><div class="icon-content-special-settings ul-icon ul-icon-secondary ul-colorpicker-settings hidden w-100p"></div><div class="ul-button-link-small w-100p ul-colorpicker-closeSettings">'+e("constructor.hide rgb")+"</div></div>",r={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!1},i=function(e,o){var t=T(e);$(o).data("colorpicker").fields.eq(1).val(t.r).end().eq(2).val(t.g).end().eq(3).val(t.b).end()},a=function(e,o){$(o).data("colorpicker").fields.eq(4).val(e.h).end().eq(5).val(e.s).end().eq(6).val(e.b).end()},c=function(e,o){$(o).data("colorpicker").fields.eq(0).val(X(e)).end()},n=function(e,o){$(o).data("colorpicker").selector.css("backgroundColor","#"+X({h:e.h,s:100,b:100})),$(o).data("colorpicker").selectorIndic.css({left:parseInt(175*e.s/100,10),top:parseInt(175*(100-e.b)/100,10)})},l=function(e,o){$(o).data("colorpicker").hue.css("top",parseInt(175-175*e.h/360,10))},d=function(e,o){$(o).data("colorpicker").currentColor.css("backgroundColor","#"+X(e))},s=function(e,o){$(o).data("colorpicker").newColor.css("backgroundColor","#"+X(e))},p=function(e){var t=e.charCode||e.keyCode||-1;if(t>o&&90>=t||32==t)return!1;var r=$(this).parent().parent();r.data("colorpicker").livePreview===!0&&u.apply(this)},u=function(e){var o,t=$(this).parent().parent();this.parentNode.className.indexOf("_hex")>0?t.data("colorpicker").color=o=W(z(this.value)):this.parentNode.className.indexOf("_hsb")>0?t.data("colorpicker").color=o=H({h:parseInt(t.data("colorpicker").fields.eq(4).val(),10),s:parseInt(t.data("colorpicker").fields.eq(5).val(),10),b:parseInt(t.data("colorpicker").fields.eq(6).val(),10)}):t.data("colorpicker").color=o=E(O({r:parseInt(t.data("colorpicker").fields.eq(1).val(),10),g:parseInt(t.data("colorpicker").fields.eq(2).val(),10),b:parseInt(t.data("colorpicker").fields.eq(3).val(),10)})),e&&(i(o,t.get(0)),c(o,t.get(0)),a(o,t.get(0))),n(o,t.get(0)),l(o,t.get(0)),s(o,t.get(0)),t.data("colorpicker").onChange.apply(t,[o,X(o),T(o)])},h=function(e){var o=$(this).parent().parent();o.data("colorpicker").fields.parent().removeClass("colorpicker_focus")},f=function(){o=this.parentNode.className.indexOf("_hex")>0?70:65,$(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"),$(this).parent().addClass("colorpicker_focus")},v=function(e){var o=$(this).parent().find("input").focus(),t={el:$(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:e.pageY,field:o,val:parseInt(o.val(),10),preview:$(this).parent().parent().data("colorpicker").livePreview};$(document).bind("mouseup",t,k),$(document).bind("mousemove",t,g)},g=function(e){return e.data.field.val(Math.max(0,Math.min(e.data.max,parseInt(e.data.val+e.pageY-e.data.y,10)))),e.data.preview&&u.apply(e.data.field.get(0),[!0]),!1},k=function(e){return u.apply(e.data.field.get(0),[!0]),e.data.el.removeClass("colorpicker_slider").find("input").focus(),$(document).unbind("mouseup",k),$(document).unbind("mousemove",g),!1},m=function(e){var o={cal:$(this).parent(),y:$(this).offset().top};o.preview=o.cal.data("colorpicker").livePreview,$(document).bind("mouseup",o,_),$(document).bind("mousemove",o,b)},b=function(e){return u.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(169-Math.max(0,Math.min(169,e.pageY-e.data.y)))/169,10)).get(0),[e.data.preview]),!1},_=function(e){return u.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(169-Math.max(0,Math.min(169,e.pageY-e.data.y)))/169,10)).get(0),[e.data.preview]),i(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),c(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),$(document).unbind("mouseup",_),$(document).unbind("mousemove",b),!1},x=function(e){var o={cal:$(this).parent(),pos:$(this).offset()};o.preview=o.cal.data("colorpicker").livePreview,$(document).bind("mouseup",o,y),$(document).bind("mousemove",o,w)},w=function(e){return u.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(175-Math.max(0,Math.min(175,e.pageY-e.data.pos.top)))/175,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(175,e.pageX-e.data.pos.left))/175,10)).get(0),[e.data.preview]),!1},y=function(e){return u.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(175-Math.max(0,Math.min(175,e.pageY-e.data.pos.top)))/175,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(175,e.pageX-e.data.pos.left))/175,10)).get(0),[e.data.preview]),i(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),c(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),$(document).unbind("mouseup",y),$(document).unbind("mousemove",w),!1},C=function(e){$(this).addClass("colorpicker_focus")},M=function(e){$(this).removeClass("colorpicker_focus")},I=function(e){var o=$(this).parent(),t=o.data("colorpicker").color;o.data("colorpicker").origColor=t,d(t,o.get(0)),o.data("colorpicker").onSubmit(t,X(t),T(t),o.data("colorpicker").el)},q=function(e){var o=$("#"+$(this).data("colorpickerId"));if(o.data("colorpicker").onBeforeShow.apply(this,[o.get(0)]),"undefined"!=typeof e&&e){const t=$(e),r=8,i=10,a=$(this),c=N(),n=t.offset();var l=n.top+t.outerHeight()+r,d=n.left-i;a.attr("data-position","");const s=n.top+r+a.outerHeight(),p=n.left-i+a.outerWidth();c.h<s&&(l=n.top-a.outerHeight()-r,a.attr("data-position","top")),c.w<p&&(d=n.left-i-a.outerWidth(),a.attr("data-position","none")),a.css({left:d,top:l})}return o.data("colorpicker").onShow.apply(this,[o.get(0)])!==!1&&o.show(),$(document).bind("mouseup",{cal:o},S),!1},S=function(e){P(e.data.cal.get(0),e.target,e.data.cal.get(0))||(0!=e.data.cal.data("colorpicker").onHide.apply(this,[e.data.cal.get(0)])&&e.data.cal.hide(),$(document).unbind("mouseup",S))},P=function(e,o,t){if(e==o)return!0;if(e.contains)return e.contains(o);if(e.compareDocumentPosition)return!!(16&e.compareDocumentPosition(o));for(var r=o.parentNode;r&&r!=t;){if(r==e)return!0;r=r.parentNode}return!1},N=function(){var e="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(e?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(e?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(e?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(e?document.documentElement.clientHeight:document.body.clientHeight)}},H=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},O=function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},z=function(e){var o=6-e.length;if(o>0){for(var t=[],r=0;o>r;r++)t.push("0");t.push(e),e=t.join("")}return e},Y=function(e){var e=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:e>>16,g:(65280&e)>>8,b:255&e}},W=function(e){return E(Y(e))},E=function(e){var o={h:0,s:0,b:0},t=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b),i=r-t;return o.b=r,o.s=0!=r?255*i/r:0,0!=o.s?e.r==r?o.h=(e.g-e.b)/i:e.g==r?o.h=2+(e.b-e.r)/i:o.h=4+(e.r-e.g)/i:o.h=-1,o.h*=60,o.h<0&&(o.h+=360),o.s*=100/255,o.b*=100/255,o},T=function(e){var o={},t=Math.round(e.h),r=Math.round(255*e.s/100),i=Math.round(255*e.b/100);if(0==r)o.r=o.g=o.b=i;else{var a=i,c=(255-r)*i/255,n=(a-c)*(t%60)/60;360==t&&(t=0),60>t?(o.r=a,o.b=c,o.g=c+n):120>t?(o.g=a,o.b=c,o.r=a-n):180>t?(o.g=a,o.r=c,o.b=c+n):240>t?(o.b=a,o.r=c,o.g=a-n):300>t?(o.b=a,o.g=c,o.r=c+n):360>t?(o.r=a,o.g=c,o.b=a-n):(o.r=0,o.g=0,o.b=0)}return{r:Math.round(o.r),g:Math.round(o.g),b:Math.round(o.b)}},j=function(e){var o=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];return $.each(o,function(e,t){1==t.length&&(o[e]="0"+t)}),o.join("")},X=function(e){return j(T(e))},B=function(){var e=$(this).parent(),o=e.data("colorpicker").origColor;e.data("colorpicker").color=o,i(o,e.get(0)),c(o,e.get(0)),a(o,e.get(0)),n(o,e.get(0)),l(o,e.get(0)),s(o,e.get(0))},D=function(){$(this).parent().css("height",parseInt($(this).parent().css("height"))-50+"px"),$(this).addClass("hidden"),$(".colorpicker_hex,.colorpicker_rgb_r,.colorpicker_rgb_g,.colorpicker_rgb_b",$(this).parent()).addClass("hidden"),$(".ul-colorpicker-settings",$(this).parent()).removeClass("hidden"),localStorage["ukit-colorpicker-rgb"]=!1},L=function(){$(this).parent().css("height",parseInt($(this).parent().css("height"))+50+"px"),$(this).addClass("hidden"),$(".colorpicker_hex,.colorpicker_rgb_r,.colorpicker_rgb_g,.colorpicker_rgb_b",$(this).parent()).removeClass("hidden"),$(".ul-colorpicker-closeSettings",$(this).parent()).removeClass("hidden"),localStorage["ukit-colorpicker-rgb"]=!0};return{init:function(e){if(e=$.extend({},r,e||{}),"string"==typeof e.color)e.color=W(e.color);else if(void 0!=e.color.r&&void 0!=e.color.g&&void 0!=e.color.b)e.color=E(e.color);else{if(void 0==e.color.h||void 0==e.color.s||void 0==e.color.b)return this;e.color=H(e.color)}return this.each(function(){if(!$(this).data("colorpickerId")){var o=$.extend({},e);o.origColor=e.color;var r="collorpicker_"+parseInt(1e3*Math.random());$(this).data("colorpickerId",r);var g=$(t).attr("id",r);o.flat?g.appendTo(this).show():g.appendTo(document.body),o.fields=g.find("input").bind("keyup",p).bind("change",u).bind("blur",h).bind("focus",f),g.find("span").bind("mousedown",v).end().find(">div.colorpicker_current_color").bind("click",B),o.selector=g.find("div.colorpicker_color").bind("mousedown",x),o.selectorIndic=o.selector.find("div div"),o.el=this,o.hue=g.find("div.colorpicker_hue div"),g.find("div.colorpicker_hue").bind("mousedown",m),o.newColor=g.find("div.colorpicker_new_color"),o.currentColor=g.find("div.colorpicker_current_color"),g.data("colorpicker",o),g.find("div.colorpicker_submit").bind("mouseenter",C).bind("mouseleave",M).bind("click",I),i(o.color,g.get(0)),a(o.color,g.get(0)),c(o.color,g.get(0)),l(o.color,g.get(0)),n(o.color,g.get(0)),d(o.color,g.get(0)),s(o.color,g.get(0)),g.find(".ul-colorpicker-closeSettings").bind("click",D),g.find(".ul-colorpicker-settings").bind("click",L),o.flat?g.css({position:"relative",display:"block"}):$(this).bind(o.eventName,q),"true"!==localStorage["ukit-colorpicker-rgb"]&&D.apply(g.find(".ul-colorpicker-closeSettings"))}})},showPicker:function(e){return this.each(function(){$(this).data("colorpickerId")&&q.apply(this,e)})},hidePicker:function(){return this.each(function(){$(this).data("colorpickerId")&&$("#"+$(this).data("colorpickerId")).hide()})},setColor:function(e){if("string"==typeof e)e=W(e);else if(void 0!=e.r&&void 0!=e.g&&void 0!=e.b)e=E(e);else{if(void 0==e.h||void 0==e.s||void 0==e.b)return this;e=H(e)}return this.each(function(){if($(this).data("colorpickerId")){var o=$("#"+$(this).data("colorpickerId"));o.data("colorpicker").color=e,o.data("colorpicker").origColor=e,i(e,o.get(0)),a(e,o.get(0)),c(e,o.get(0)),l(e,o.get(0)),n(e,o.get(0)),d(e,o.get(0)),s(e,o.get(0))}})}}}();return o.fn.extend({ColorPicker:r.init,ColorPickerHide:r.hidePicker,ColorPickerShow:r.showPicker,ColorPickerSetColor:r.setColor}),o});
//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map

//# sourceMappingURL=ukit-colorpicker.js.map
