"use strict";define("filedrop",["jquery"],function(e){return function(t){function r(){}e.event.props.push("dataTransfer");var n={timeoutLeave:100,element:null,$fallbackEl:null,url:"",refresh:1e3,paramname:"userfile",requestType:"POST",allowedfileextensions:[],allowedfiletypes:[],maxfiles:5,maxfilesize:10,queuefiles:0,queuewait:200,data:{},headers:{},drop:r,dragStart:r,dragEnter:r,dragOver:r,dragLeave:r,docEnter:r,docOver:r,docLeave:r,docDrop:r,beforeEach:r,afterAll:r,rename:r,confirm:function(){return!0},error:function(e,t,r,n){},uploadStarted:r,uploadFinished:r,progressUpdated:r,globalProgressUpdated:r,speedUpdated:r,sendBoundary:window.FormData||navigator.userAgent.indexOf("Mozilla")+1,bindOnContainerClick:!0,hideFallbackElement:!0,autoStartUpload:!0,triggerStartUploadEvent:"triggerUploadManually"},a=["BrowserNotSupported","TooManyFiles","FileTooLarge","FileTypeNotAllowed","NotFound","NotReadable","AbortError","ReadError","FileExtensionNotAllowed"];t.fn.filedrop=function(r){function o(e){if(x.drop.call(this,e)===!1)return!1;if(e.dataTransfer)return E=e.dataTransfer.files,null===E||void 0===E||0===E.length?(x.error(a[0]),!1):(q=E.length,x.confirm.call(this,e)===!0&&(u.call(this),e.preventDefault()),!1)}function i(r,n,a,o){var i="--",l="\r\n",s="",u=x.paramname;if(r=encodeURIComponent(r),x.data){var d=t.param(x.data).replace(/\+/g,"%20").split(/&/);t.each(d,function(){var e=this.split("=",2),t=decodeURIComponent(e[0]),r=decodeURIComponent(e[1]);2===e.length&&(s+=i,s+=o,s+=l,s+='Content-Disposition: form-data; name="'+t+'"',s+=l,s+=l,s+=r,s+=l)})}return e.isFunction(u)&&(u=u(r)),s+=i,s+=o,s+=l,s+='Content-Disposition: form-data; name="'+(u||"")+'"',s+='; filename="'+r+'"',s+=l,s+="Content-Type: "+a,s+=l,s+=l,s+=n,s+=l,s+=i,s+=o,s+=i,s+=l}function l(e){if(e.lengthComputable){var t=Math.round(100*e.loaded/e.total);if(this.currentProgress!==t){this.currentProgress=t,x.progressUpdated(this.index,this.file,this.currentProgress),b[this.global_progress_index]=this.currentProgress,s();var r=(new Date).getTime(),n=r-this.currentStart;if(n>=x.refresh){var a=e.loaded-this.startData,o=a/n;x.speedUpdated(this.index,this.file,o),this.startData=e.loaded,this.currentStart=r}}}}function s(){if(0!==b.length){var e,t=0;for(e in b)b.hasOwnProperty(e)&&(t+=b[e]);x.globalProgressUpdated(Math.round(t/b.length))}}function u(){if(R=!1,!E)return x.error(a[0]),!1;if(!x.allowAll){if(x.allowedfiletypes.push&&x.allowedfiletypes.length)for(var r=E.length;r--;)if(!E[r].type||t.inArray(E[r].type,x.allowedfiletypes)<0)return x.error(a[3],E[r]),!1;if(x.allowedfileextensions.push&&x.allowedfileextensions.length)for(var r=E.length;r--;){var n,o,u=!1;for(w=0;w<x.allowedfileextensions.length;w++)n=E[r].name.substr(E[r].name.length-x.allowedfileextensions[w].length).toLowerCase(),o=x.allowedfileextensions[w].toLowerCase(),n===o&&(u=!0);if(!u)return x.error(a[8],E[r]),!1}}var h=0,g=0;if(q>x.maxfiles&&0===x.queuefiles)return x.error(a[1]),!1;for(var m=[],v=[],y=[],w=0;q>w;w++)m.push(w);var D=function(e){setTimeout(T,e)},T=function(){var e;if(R)return!1;if(x.queuefiles>0&&v.length>=x.queuefiles)return D.call(this,x.queuewait);e=m[0],m.splice(0,1),v.push(e);try{if(c(E[e])!==!1){if(e===q)return;var t=new FileReader,r=1048576*x.maxfilesize;if(t.index=e,E[e].size>r)return x.error(a[2],E[e],e),v.forEach(function(t,r){t===e&&v.splice(r,1)}),g++,!0;t.onerror=function(e){switch(e.target.error.code){case e.target.error.NOT_FOUND_ERR:return x.error(a[4]),!1;case e.target.error.NOT_READABLE_ERR:return x.error(a[5]),!1;case e.target.error.ABORT_ERR:return x.error(a[6]),!1;default:return x.error(a[7]),!1}},t.onloadend=x.beforeSend?function(t){x.beforeSend(E[e],e,function(){A(t)})}:A,t.readAsDataURL(E[e])}else g++}catch(n){return v.forEach(function(t,r){t===e&&v.splice(r,1)}),x.error(a[0]),!1}m.length>0&&T.call(this)},A=function(r){var n=("undefined"==typeof r.srcElement?r.target:r.srcElement).index;void 0===r.target.index&&(r.target.index=d(r.total));var a,o=new XMLHttpRequest,u=o.upload,c=E[r.target.index],m=r.target.index,w=(new Date).getTime(),D="------multipartformboundary"+(new Date).getTime(),T=b.length,A=f(c.name),L=c.type;x.withCredentials&&(o.withCredentials=x.withCredentials),u.index=m,u.file=c,u.downloadStartTime=w,u.currentStart=w,u.currentProgress=0,u.global_progress_index=T,u.startData=0,u.addEventListener("progress",l,!1),e.isFunction(x.url)?o.open(x.requestType,x.url.call(this,c),!0):o.open(x.requestType,x.url,!0),t.each(x.headers,function(e,t){o.setRequestHeader(e,t)});var S=x.paramname;if(e.isFunction(S)&&(S=S(c)),x.sendBoundary){var U=new FormData;U.append(S,c),t.each(x.data,function(e,t){U.append(e,t)}),o.send(U)}else{o.setRequestHeader("content-type","multipart/form-data; boundary="+D),o.setRequestHeader("X-Requested-With","XMLHttpRequest");var C=atob(r.target.result.split(",")[1]);a="string"==typeof A?i(A,C,L,D):i(c.name,C,L,D);var D="------multipartformboundary"+(new Date).getTime();o.setRequestHeader("content-type","multipart/form-data; boundary="+D),a="string"==typeof A?i(A,r.target.result,L,D):i(c.name,r.target.result,L,D),o.sendAsBinary(a)}b[T]=0,s(),x.uploadStarted(m,c,q),o.onload=function(){var t=null;if(o.responseText)try{t=e.parseJSON(o.responseText)}catch(r){t=o.responseText}var a=(new Date).getTime(),i=a-w,l=x.uploadFinished(m,c,t,i,o);h++,v.forEach(function(e,t){e===n&&v.splice(t,1)}),y.push(n),b[T]=100,s(),h===q-g&&p(),l===!1&&(R=!0),(o.status<200||o.status>299)&&x.error(o.statusText,c,n,o.status)}};T.call(this)}function d(e){for(var t=0;q>t;t++)if(E[t].size===e)return t}function f(e){return x.rename(e)}function c(e){return x.beforeEach(e)}function p(){return x.afterAll()}function h(e){clearTimeout(T),e.preventDefault(),x.dragEnter.call(this,e)}function g(e){clearTimeout(T),e.preventDefault(),x.docOver.call(this,e),x.dragOver.call(this,e)}function m(e){clearTimeout(T),x.dragLeave.call(this,e),e.stopPropagation()}function v(e){return clearTimeout(T),e.preventDefault(),x.docDrop.call(this,e),x.docLeave.call(this,e),x.dragLeave.call(this,e),e.stopPropagation(),!1}function y(e){return clearTimeout(T),e.preventDefault(),x.docEnter.call(this,e),!1}function w(e){return clearTimeout(T),e.preventDefault(),x.docOver.call(this,e),!1}function D(e){T=setTimeout(function(t){return function(){x.docLeave.call(t,e)}}(this),x.timeoutLeave)}if("destroy"===r)return this.off(".fileDrop").off(".fallBack"),void t(document).off(".fileDrop");var T,E,x=t.extend({},n,r),b=[],R=!1,q=0,A=this;return this.off(".fileDrop"),t(document).off(".fileDrop"),this.on("drop.fileDrop",o).on("dragstart",x.dragStart).on("dragenter.fileDrop",h).on("dragover.fileDrop",g).on("dragleave.fileDrop",m),t(document).on("drop.fileDrop",v).on("dragenter.fileDrop",y).on("dragover.fileDrop",w).on("dragleave.fileDrop",D),this.on(x.triggerStartUploadEvent,function(){x.autoStartUpload||u.call(A)}),null!=x.$fallbackEl&&(x.hideFallbackElement&&x.$fallbackEl.css({display:"none",width:0,height:0}),x.bindOnContainerClick&&(this.off("click.fallBack"),this.on("click.fallBack",function(e){x.$fallbackEl.trigger(e)})),x.$fallbackEl.change(function(e){x.drop(e),E=e.target.files,q=E.length,x.autoStartUpload&&u.call(A)})),x.element=this,this};try{if(XMLHttpRequest.prototype.sendAsBinary)return;XMLHttpRequest.prototype.sendAsBinary=function(e){function t(e){return 255&e.charCodeAt(0)}var r=Array.prototype.map.call(e,t),n=new Uint8Array(r);"ArrayBufferView"in window?this.send(n):this.send(n.buffer)}}catch(o){}}(e),e.fn.filedrop()});
//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map

//# sourceMappingURL=jquery.filedrop.js.map
