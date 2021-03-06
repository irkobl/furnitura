!function(e,t){"function"==typeof define&&define.amd?define(["rangy"],e):"undefined"!=typeof module&&"object"==typeof exports?module.exports=e(require("rangy")):e(t.rangy)}(function(e){return e.createModule("ClassApplier",["WrappedSelection"],function(e,t){function n(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(n,e[n])===!1)return!1;return!0}function s(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function r(e,t){return!!e&&new RegExp("(?:^|\\s)"+t+"(?:\\s|$)").test(e)}function o(e,t){if("object"==typeof e.classList)return e.classList.contains(t);var n="string"==typeof e.className,s=n?e.className:e.getAttribute("class");return r(s,t)}function a(e,t){if("object"==typeof e.classList)e.classList.add(t);else{var n="string"==typeof e.className,s=n?e.className:e.getAttribute("class");s?r(s,t)||(s+=" "+t):s=t,n?e.className=s:e.setAttribute("class",s)}}function l(e){var t="string"==typeof e.className;return t?e.className:e.getAttribute("class")}function u(e){return e&&e.split(/\s+/).sort().join(" ")}function f(e){return u(l(e))}function c(e,t){return f(e)==f(t)}function p(e,t){for(var n=t.split(/\s+/),i=0,r=n.length;r>i;++i)if(!o(e,s(n[i])))return!1;return!0}function d(e){var t=e.parentNode;return t&&1==t.nodeType&&!/^(textarea|style|script|select|iframe)$/i.test(t.nodeName)}function h(e,t,n,s,i){var r=e.node,o=e.offset,a=r,l=o;r==s&&o>i&&++l,r!=t||o!=n&&o!=n+1||(a=s,l+=i-n),r==t&&o>n+1&&--l,e.node=a,e.offset=l}function m(e,t,n){e.node==t&&e.offset>n&&--e.offset}function g(e,t,n,s){-1==n&&(n=t.childNodes.length);var i=e.parentNode,r=$.getNodeIndex(e);U(s,function(e){h(e,i,r,t,n)}),t.childNodes.length==n?t.appendChild(e):t.insertBefore(e,t.childNodes[n])}function N(e,t){var n=e.parentNode,s=$.getNodeIndex(e);U(t,function(e){m(e,n,s)}),$.removeNode(e)}function v(e,t,n,s,i){for(var r,o=[];r=e.firstChild;)g(r,t,n++,i),o.push(r);return s&&N(e,i),o}function y(e,t){return v(e,e.parentNode,$.getNodeIndex(e),!0,t)}function C(e,t){var n=e.cloneRange();n.selectNodeContents(t);var s=n.intersection(e),i=s?s.toString():"";return""!=i}function T(e){for(var t,n=e.getNodes([3]),s=0;(t=n[s])&&!C(e,t);)++s;for(var i=n.length-1;(t=n[i])&&!C(e,t);)--i;return n.slice(s,i+1)}function E(e,t){if(e.attributes.length!=t.attributes.length)return!1;for(var n,s,i,r=0,o=e.attributes.length;o>r;++r)if(n=e.attributes[r],i=n.name,"class"!=i){if(s=t.attributes.getNamedItem(i),null===n!=(null===s))return!1;if(n.specified!=s.specified)return!1;if(n.specified&&n.nodeValue!==s.nodeValue)return!1}return!0}function b(e,t){for(var n,s=0,i=e.attributes.length;i>s;++s)if(n=e.attributes[s].name,(!t||!B(t,n))&&e.attributes[s].specified&&"class"!=n)return!0;return!1}function A(e){var t;return e&&1==e.nodeType&&((t=e.parentNode)&&9==t.nodeType&&"on"==t.designMode||G(e)&&!G(e.parentNode))}function S(e){return(G(e)||1!=e.nodeType&&G(e.parentNode))&&!A(e)}function x(e){return e&&1==e.nodeType&&!J.test(F(e,"display"))}function R(e){if(0==e.data.length)return!0;if(K.test(e.data))return!1;var t=F(e.parentNode,"whiteSpace");switch(t){case"pre":case"pre-wrap":case"-moz-pre-wrap":return!1;case"pre-line":if(/[\r\n]/.test(e.data))return!1}return x(e.previousSibling)||x(e.nextSibling)}function P(e){var t,n,s=[];for(t=0;n=e[t++];)s.push(new z(n.startContainer,n.startOffset),new z(n.endContainer,n.endOffset));return s}function w(e,t){for(var n,s,i,r=0,o=e.length;o>r;++r)n=e[r],s=t[2*r],i=t[2*r+1],n.setStartAndEnd(s.node,s.offset,i.node,i.offset)}function O(e,t){return $.isCharacterDataNode(e)?0==t?!!e.previousSibling:t==e.length?!!e.nextSibling:!0:t>0&&t<e.childNodes.length}function I(e,n,s,i){var r,o,a=0==s;if($.isAncestorOf(n,e))return e;if($.isCharacterDataNode(n)){var l=$.getNodeIndex(n);if(0==s)s=l;else{if(s!=n.length)throw t.createError("splitNodeAt() should not be called with offset in the middle of a data node ("+s+" in "+n.data);s=l+1}n=n.parentNode}if(O(n,s)){r=n.cloneNode(!1),o=n.parentNode,r.id&&r.removeAttribute("id");for(var u,f=0;u=n.childNodes[s];)g(u,r,f++,i);return g(r,o,$.getNodeIndex(n)+1,i),n==e?r:I(e,o,$.getNodeIndex(r),i)}if(e!=n){r=n.parentNode;var c=$.getNodeIndex(n);return a||c++,I(e,r,c,i)}return e}function W(e,t){return e.namespaceURI==t.namespaceURI&&e.tagName.toLowerCase()==t.tagName.toLowerCase()&&c(e,t)&&E(e,t)&&"inline"==F(e,"display")&&"inline"==F(t,"display")}function L(e){var t=e?"nextSibling":"previousSibling";return function(n,s){var i=n.parentNode,r=n[t];if(r){if(r&&3==r.nodeType)return r}else if(s&&(r=i[t],r&&1==r.nodeType&&W(i,r))){var o=r[e?"firstChild":"lastChild"];if(o&&3==o.nodeType)return o}return null}}function M(e){this.isElementMerge=1==e.nodeType,this.textNodes=[];var t=this.isElementMerge?e.lastChild:e;t&&(this.textNodes[0]=t)}function H(e,t,i){var r,o,a,l,f=this;f.cssClass=f.className=e;var c=null,p={};if("object"==typeof t&&null!==t){for("undefined"!=typeof t.elementTagName&&(t.elementTagName=t.elementTagName.toLowerCase()),i=t.tagNames,c=t.elementProperties,p=t.elementAttributes,o=0;l=Y[o++];)t.hasOwnProperty(l)&&(f[l]=t[l]);r=t.normalize}else r=t;f.normalize="undefined"==typeof r?!0:r,f.attrExceptions=[];var d=document.createElement(f.elementTagName);f.elementProperties=f.copyPropertiesToElement(c,d,!0),n(p,function(e,t){f.attrExceptions.push(e),p[e]=""+t}),f.elementAttributes=p,f.elementSortedClassName=f.elementProperties.hasOwnProperty("className")?u(f.elementProperties.className+" "+e):e,f.applyToAnyTagName=!1;var h=typeof i;if("string"==h)"*"==i?f.applyToAnyTagName=!0:f.tagNames=s(i.toLowerCase()).split(/\s*,\s*/);else if("object"==h&&"number"==typeof i.length)for(f.tagNames=[],o=0,a=i.length;a>o;++o)"*"==i[o]?f.applyToAnyTagName=!0:f.tagNames.push(i[o].toLowerCase());else f.tagNames=[f.elementTagName]}function j(e,t,n){return new H(e,t,n)}var $=e.dom,z=$.DomPosition,B=$.arrayContains,D=e.util,U=D.forEach,V="span",k=D.isHostMethod(document,"createElementNS"),q=function(){function e(e,t,n){return t&&n?" ":""}return function(t,n){if("object"==typeof t.classList)t.classList.remove(n);else{var s="string"==typeof t.className,i=s?t.className:t.getAttribute("class");i=i.replace(new RegExp("(^|\\s)"+n+"(\\s|$)"),e),s?t.className=i:t.setAttribute("class",i)}}}(),F=$.getComputedStyleProperty,G=function(){var e=document.createElement("div");return"boolean"==typeof e.isContentEditable?function(e){return e&&1==e.nodeType&&e.isContentEditable}:function(e){return e&&1==e.nodeType&&"false"!=e.contentEditable?"true"==e.contentEditable||G(e.parentNode):!1}}(),J=/^inline(-block|-table)?$/i,K=/[^\r\n\t\f \u200B]/,Q=L(!1),X=L(!0);M.prototype={doMerge:function(e){var t=this.textNodes,n=t[0];if(t.length>1){var s,i=$.getNodeIndex(n),r=[],o=0;U(t,function(t,a){s=t.parentNode,a>0&&(s.removeChild(t),s.hasChildNodes()||$.removeNode(s),e&&U(e,function(e){e.node==t&&(e.node=n,e.offset+=o),e.node==s&&e.offset>i&&(--e.offset,e.offset==i+1&&a<len-1&&(e.node=n,e.offset=o))})),r[a]=t.data,o+=t.data.length}),n.data=r.join("")}return n.data},getLength:function(){for(var e=this.textNodes.length,t=0;e--;)t+=this.textNodes[e].length;return t},toString:function(){var e=[];return U(this.textNodes,function(t,n){e[n]="'"+t.data+"'"}),"[Merge("+e.join(",")+")]"}};var Y=["elementTagName","ignoreWhiteSpace","applyToEditableOnly","useExistingElements","removeEmptyElements","onElementCreate"],Z={};H.prototype={elementTagName:V,elementProperties:{},elementAttributes:{},ignoreWhiteSpace:!0,applyToEditableOnly:!1,useExistingElements:!0,removeEmptyElements:!0,onElementCreate:null,copyPropertiesToElement:function(e,t,n){var s,i,r,o,l,f,c={};for(var p in e)if(e.hasOwnProperty(p))if(o=e[p],l=t[p],"className"==p)a(t,o),a(t,this.className),t[p]=u(t[p]),n&&(c[p]=o);else if("style"==p){i=l,n&&(c[p]=r={});for(s in e[p])e[p].hasOwnProperty(s)&&(i[s]=o[s],n&&(r[s]=i[s]));this.attrExceptions.push(p)}else t[p]=o,n&&(c[p]=t[p],f=Z.hasOwnProperty(p)?Z[p]:p,this.attrExceptions.push(f));return n?c:""},copyAttributesToElement:function(e,t){for(var n in e)e.hasOwnProperty(n)&&!/^class(?:Name)?$/i.test(n)&&t.setAttribute(n,e[n])},appliesToElement:function(e){return B(this.tagNames,e.tagName.toLowerCase())},getEmptyElements:function(e){var t=this;return e.getNodes([1],function(e){return t.appliesToElement(e)&&!e.hasChildNodes()})},hasClass:function(e){return 1==e.nodeType&&(this.applyToAnyTagName||this.appliesToElement(e))&&o(e,this.className)},getSelfOrAncestorWithClass:function(e){for(;e;){if(this.hasClass(e))return e;e=e.parentNode}return null},isModifiable:function(e){return!this.applyToEditableOnly||S(e)},isIgnorableWhiteSpaceNode:function(e){return this.ignoreWhiteSpace&&e&&3==e.nodeType&&R(e)},postApply:function(e,t,n,s){var r,o,a=e[0],l=e[e.length-1],u=[],f=a,c=l,p=0,d=l.length;U(e,function(e){o=Q(e,!s),o?(r||(r=new M(o),u.push(r)),r.textNodes.push(e),e===a&&(f=r.textNodes[0],p=f.length),e===l&&(c=r.textNodes[0],d=r.getLength())):r=null});var h=X(l,!s);if(h&&(r||(r=new M(l),u.push(r)),r.textNodes.push(h)),u.length){for(i=0,len=u.length;i<len;++i)u[i].doMerge(n);t.setStartAndEnd(f,p,c,d)}},createContainer:function(e){var t,n=$.getDocument(e),s=k&&!$.isHtmlNamespace(e)&&(t=e.namespaceURI)?n.createElementNS(e.namespaceURI,this.elementTagName):n.createElement(this.elementTagName);return this.copyPropertiesToElement(this.elementProperties,s,!1),this.copyAttributesToElement(this.elementAttributes,s),a(s,this.className),this.onElementCreate&&this.onElementCreate(s,this),s},elementHasProperties:function(e,t){var s=this;return n(t,function(t,n){if("className"==t)return p(e,n);if("object"==typeof n){if(!s.elementHasProperties(e[t],n))return!1}else if(e[t]!==n)return!1})},elementHasAttributes:function(e,t){return n(t,function(t,n){return e.getAttribute(t)!==n?!1:void 0})},applyToTextNode:function(e,t){if(d(e)){var n=e.parentNode;if(1==n.childNodes.length&&this.useExistingElements&&this.appliesToElement(n)&&this.elementHasProperties(n,this.elementProperties)&&this.elementHasAttributes(n,this.elementAttributes))a(n,this.className);else{var s=e.parentNode,i=this.createContainer(s);s.insertBefore(i,e),i.appendChild(e)}}},isRemovable:function(e){return e.tagName.toLowerCase()==this.elementTagName&&f(e)==this.elementSortedClassName&&this.elementHasProperties(e,this.elementProperties)&&!b(e,this.attrExceptions)&&this.elementHasAttributes(e,this.elementAttributes)&&this.isModifiable(e)},isEmptyContainer:function(e){var t=e.childNodes.length;return 1==e.nodeType&&this.isRemovable(e)&&(0==t||1==t&&this.isEmptyContainer(e.firstChild))},removeEmptyContainers:function(e){var t=this,n=e.getNodes([1],function(e){return t.isEmptyContainer(e)}),s=[e],i=P(s);U(n,function(e){N(e,i)}),w(s,i)},undoToTextNode:function(e,t,n,s){if(!t.containsNode(n)){var i=t.cloneRange();i.selectNode(n),i.isPointInRange(t.endContainer,t.endOffset)&&(I(n,t.endContainer,t.endOffset,s),t.setEndAfter(n)),i.isPointInRange(t.startContainer,t.startOffset)&&(n=I(n,t.startContainer,t.startOffset,s))}this.isRemovable(n)?y(n,s):q(n,this.className)},splitAncestorWithClass:function(e,t,n){var s=this.getSelfOrAncestorWithClass(e);s&&I(s,e,t,n)},undoToAncestor:function(e,t){this.isRemovable(e)?y(e,t):q(e,this.className)},applyToRange:function(e,t){var n=this;t=t||[];var s=P(t||[]);e.splitBoundariesPreservingPositions(s),n.removeEmptyElements&&n.removeEmptyContainers(e);var i=T(e);if(i.length){U(i,function(e){n.isIgnorableWhiteSpaceNode(e)||n.getSelfOrAncestorWithClass(e)||!n.isModifiable(e)||n.applyToTextNode(e,s)});var r=i[i.length-1];e.setStartAndEnd(i[0],0,r,r.length),n.normalize&&n.postApply(i,e,s,!1),w(t,s)}var o=n.getEmptyElements(e);U(o,function(e){a(e,n.className)})},applyToRanges:function(e){for(var t=e.length;t--;)this.applyToRange(e[t],e);return e},applyToSelection:function(t){var n=e.getSelection(t);n.setRanges(this.applyToRanges(n.getAllRanges()))},undoToRange:function(e,t){var n=this;t=t||[];var s=P(t);e.splitBoundariesPreservingPositions(s),n.removeEmptyElements&&n.removeEmptyContainers(e,s);var i,r,o=T(e),a=o[o.length-1];if(o.length){n.splitAncestorWithClass(e.endContainer,e.endOffset,s),n.splitAncestorWithClass(e.startContainer,e.startOffset,s);for(var l=0,u=o.length;u>l;++l)i=o[l],r=n.getSelfOrAncestorWithClass(i),r&&n.isModifiable(i)&&n.undoToAncestor(r,s);e.setStartAndEnd(o[0],0,a,a.length),n.normalize&&n.postApply(o,e,s,!0),w(t,s)}var f=n.getEmptyElements(e);U(f,function(e){q(e,n.className)})},undoToRanges:function(e){for(var t=e.length;t--;)this.undoToRange(e[t],e);return e},undoToSelection:function(t){var n=e.getSelection(t),s=e.getSelection(t).getAllRanges();this.undoToRanges(s),n.setRanges(s)},isAppliedToRange:function(e){if(e.collapsed||""==e.toString())return!!this.getSelfOrAncestorWithClass(e.commonAncestorContainer);var t=e.getNodes([3]);if(t.length)for(var n,s=0;n=t[s++];)if(!this.isIgnorableWhiteSpaceNode(n)&&C(e,n)&&this.isModifiable(n)&&!this.getSelfOrAncestorWithClass(n))return!1;return!0},isAppliedToRanges:function(e){var t=e.length;if(0==t)return!1;for(;t--;)if(!this.isAppliedToRange(e[t]))return!1;return!0},isAppliedToSelection:function(t){var n=e.getSelection(t);return this.isAppliedToRanges(n.getAllRanges())},toggleRange:function(e){this.isAppliedToRange(e)?this.undoToRange(e):this.applyToRange(e)},toggleSelection:function(e){this.isAppliedToSelection(e)?this.undoToSelection(e):this.applyToSelection(e)},getElementsWithClassIntersectingRange:function(e){var t=[],n=this;return e.getNodes([3],function(e){var s=n.getSelfOrAncestorWithClass(e);s&&!B(t,s)&&t.push(s)}),t},detach:function(){}},H.util={hasClass:o,addClass:a,removeClass:q,getClass:l,hasSameClasses:c,hasAllClasses:p,replaceWithOwnChildren:y,elementsHaveSameNonClassAttributes:E,elementHasNonClassAttributes:b,splitNodeAt:I,isEditableElement:G,isEditingHost:A,isEditable:S},e.CssClassApplier=e.ClassApplier=H,e.createClassApplier=j,D.createAliasForDeprecatedMethod(e,"createCssClassApplier","createClassApplier",t)}),e},this);
//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map

//# sourceMappingURL=rangy-classapplier.js.map
