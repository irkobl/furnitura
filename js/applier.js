"use strict";define("editApiApplier",function(){return{_init:function(){return function(e){return{_applier:{bold:function(){return function(){var t=e._selection.getCaret();document.execCommand("bold",!1,null);var n=e._selection.getSelectedNodes();if(n)for(var o=0;o<n.length;o++)n[o]&&"STRONG"===n[o].tagName&&(n[o].outerHTML=n[o].outerHTML.replace("<strong>",'<span style="font-weight: bold;">').replace("</strong>","</span>")),n[o]&&"B"===n[o].tagName&&(n[o].outerHTML=n[o].outerHTML.replace("<b>",'<span style="font-weight: bold;">').replace("</b>","</span>"));e._selection.setCaret(t)}}(),italic:function(){return function(){var t=e._selection.getCaret();document.execCommand("italic",!1,null);var n=e._selection.getSelectedNodes();if(n)for(var o=0;o<n.length;o++)n[o]&&"EM"===n[o].tagName&&(n[o].outerHTML=n[o].outerHTML.replace("<em>",'<span style="font-style: italic;">').replace("</em>","</span>")),n[o]&&"i"===n[o].tagName&&(n[o].outerHTML=n[o].outerHTML.replace("<i>",'<span style="font-style: italic;">').replace("</i>","</span>"));e._selection.setCaret(t)}}(),underline:function(){return function(){var t=e._selection.getCaret();document.execCommand("underline",!1,null);var n=e._selection.getSelectedNodes();if(n)for(var o=0;o<n.length;o++){var l=3===n[o].nodeType?n[o].parentNode:n[o],r=$(l),s=e._getElementCss(r);r.length&&s["text-decoration-line"]&&r.css({"text-decoration-line":"","text-decoration":s["text-decoration-line"]}),n[o]&&"U"===n[o].tagName&&(n[o].outerHTML=n[o].outerHTML.replace("<u>",'<span style="text-decoration: underline;">').replace("</u>","</span>"))}e._selection.setCaret(t)}}(),strike:function(){return function(){var t=e._selection.getCaret();document.execCommand("strikeThrough",!1,null);var n=e._selection.getSelectedNodes();if(n)for(var o=0;o<n.length;o++){var l=3===n[o].nodeType?n[o].parentNode:n[o],r=$(l),s=e._getElementCss(r);r.length&&s["text-decoration-line"]&&r.css({"text-decoration-line":"","text-decoration":s["text-decoration-line"]}),n[o]&&"STRIKE"===n[o].tagName&&(n[o].outerHTML=n[o].outerHTML.replace("<strike>",'<span style="text-decoration: line-through;">').replace("</strike>","</span>")),n[o]&&"S"===n[o].tagName&&(n[o].outerHTML=n[o].outerHTML.replace("<s>",'<span style="text-decoration: line-through;">').replace("</s>","</span>"))}e._selection.setCaret(t)}}(),format:function(){return function(t){e._selection.save(),e._selection.restore(),e._selection.save();var n=e._selection.getSelectedBlocks();return n.forEach(function(e){var n=$(e).attr("style")||"";"UL"==e.tagName||"OL"==e.tagName?($(e).attr("class",""),"p"!=t&&$(e).addClass(t)):$(e).replaceWith("<"+t+' style="'+n+'">'+$(e).html()+"</"+t+">")}),e._selection.restore(),!0}}(),align:function(){return function(t){e._selection.save(),e._selection.restore(),e._selection.save();var n=e._selection.getSelectedBlocks();n.forEach(function(e){$(e).css("text-align",t)}),e._selection.restore()}}(),list:function(){return function(t){function n(e){if($(e).closest("ul, ol").length){var t=$(e).attr("class")||"p",n="";$(e).find("li").each(function(){n+="<"+t+">"+$(this).html()+"</"+t+">"}),$(e).replaceWith(n)}}var o=e._selection.getSelectedBlocks();if(1==o.length&&$(o[0]).closest("ul, ol").length){var l=$(o[0]),r=l.attr("class")||"";e._selection.selectNode(l.get(0)),e._selection.save(),l.closest("ol").length&&("unordered"==t?l.replaceWith('<ul class="'+r+'">'+l.html()+"</ul>"):n(l)),l.closest("ul").length&&("ordered"==t?l.replaceWith('<ol class="'+r+'">'+l.html()+"</ol>"):n(l)),e._selection.restore()}else{e._selection.selectNode(o[0]);var s=e._selection.getCaret()[0];e._selection.selectNode(o[o.length-1]);var i=e._selection.getCaret()[1];e._selection.setCaret([s,i]),e._selection.save(),o.forEach(function(e){n(e)}),e._selection.restore(),o=e._selection.getSelectedBlocks();var c="";o.forEach(function(e){c+="<li>"+$(e).html()+"</li>"});var a="ol";"unordered"==t&&(a="ul");var u="";"P"!=o[0].tagName&&(u=o[0].tagName.toLowerCase());var d="<"+a+' class="js-list '+u+'">'+c+"</"+a+">";$(d).insertAfter(o[o.length-1]),o.forEach(function(e){$(e).remove()}),e._selection.selectNode($(".js-list").removeClass("js-list"),!0)}}}(),link:function(){return function(t){if(null==e.linkPreapplierDone&&e._selection.linkPreapplier(),!e._selection.isSelected()){var n=t.href;"inner"==t.type&&(n=t.pageTitle),"anchor"==t.type&&(n=t.pageTitle+" / "+t.anchorTitle),e._selection.selectNode($(".js-link",e.opt.$el).html(n).get(0))}this.clear(),document.execCommand("createLink",!1,encodeURIComponent(t.href).replace(/%2F/g,"/")),e._selection.getSelectedNodes().forEach(function(e){if("A"==e.parentNode.tagName){var n=$(e.parentNode);n.attr("href",decodeURIComponent(n.attr("href"))).attr("target",t.newWindow?"_blank":"_self")}}),e.linkPreapplierDone=null}}(),insertText:function(){return function(t){e._selection.insertHtml(t)}}(),unlink:function(){return function(){document.execCommand("unlink",!1,null)}}(),image:function(){return function(t){return e._selection.insertHtml('<img class="js-api-img img-responsive" src="'+t+'" align="center">'),function(){return e._checkImg(e.$el.find(".js-api-img").removeClass("js-api-img").get(0)),!0}}}(),color:function(){return function(t){if(this.clearColors(),e._selection.isSelected())null!=e.colorsClassApplier[t-1]&&e.colorsClassApplier[t-1].applyToSelection();else{e._selection.insertHtml('<span class="js-color">&nbsp;</span>');var n=$(".js-color").removeClass("js-color");e._selection.selectNode(n.get(0)),this.clearColors();var o=e._selection.getCaret();n.html("&shy;&shy;").addClass("g-color-text-"+t),e._selection.setCaret([o[1],o[1]])}}}(),clear:function(){return function(){document.execCommand("unlink",!1,null),this.clearColors()}}(),clearColors:function(){return function(){for(var t=1;t<e.colorsClassApplier.length+1;t++)e.colorsClassApplier[t-1].undoToSelection()}}(),empty:function(){return function(){var t=window.dbgValue;return t?(console.info("setCaret -> ",t),e._selection.setCaret(t)):console.info(e._selection.getCaret()),!0}}(),readmore:function(){return function(){e._selection.insertHtml("<hr>")}}()}}}}()}});
//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map

//# sourceMappingURL=applier.js.map
