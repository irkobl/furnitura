!function(e,i){"undefined"!=typeof module&&module.exports?module.exports.browser=i():"function"==typeof define&&define.amd?define(i):this[e]=i()}("bowser",function(){function e(e){function o(i){var o=e.match(i);return o&&o.length>1&&o[1]||""}var s,r=o(/(ipod|iphone|ipad)/i).toLowerCase(),n=/like android/i.test(e),a=!n&&/android/i.test(e),t=o(/version\/(\d+(\.\d+)?)/i),d=/tablet/i.test(e),m=!d&&/[^-]mobi/i.test(e);/opera|opr/i.test(e)?s={name:"Opera",opera:i,version:t||o(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(e)?s={name:"Windows Phone",windowsphone:i,msie:i,version:o(/iemobile\/(\d+(\.\d+)?)/i)}:/msie|trident/i.test(e)?s={name:"Internet Explorer",msie:i,version:o(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/yabrowser/i.test(e)?s={name:"Yandex",yandex:i,version:o(/(?:yabrowser)\/(\d+(\.\d+)?)/i)}:/chrome|crios|crmo/i.test(e)?s={name:"Chrome",chrome:i,version:o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:r?(s={name:"iphone"==r?"iPhone":"ipad"==r?"iPad":"iPod"},t&&(s.version=t)):/sailfish/i.test(e)?s={name:"Sailfish",sailfish:i,version:o(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(e)?s={name:"SeaMonkey",seamonkey:i,version:o(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(e)?(s={name:"Firefox",firefox:i,version:o(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)&&(s.firefoxos=i)):/silk/i.test(e)?s={name:"Amazon Silk",silk:i,version:o(/silk\/(\d+(\.\d+)?)/i)}:a?s={name:"Android",version:t}:/phantom/i.test(e)?s={name:"PhantomJS",phantom:i,version:o(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)?s={name:"BlackBerry",blackberry:i,version:t||o(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(e)?(s={name:"WebOS",webos:i,version:t||o(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(e)&&(s.touchpad=i)):s=/bada/i.test(e)?{name:"Bada",bada:i,version:o(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(e)?{name:"Tizen",tizen:i,version:o(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||t}:/safari/i.test(e)?{name:"Safari",safari:i,version:t}:{},/(apple)?webkit/i.test(e)?(s.name=s.name||"Webkit",s.webkit=i,!s.version&&t&&(s.version=t)):!s.opera&&/gecko\//i.test(e)&&(s.name=s.name||"Gecko",s.gecko=i,s.version=s.version||o(/gecko\/(\d+(\.\d+)?)/i)),a||s.silk?s.android=i:r&&(s[r]=i,s.ios=i);var v="";r?(v=o(/os (\d+([_\s]\d+)*) like mac os x/i),v=v.replace(/[_\s]/g,".")):a?v=o(/android[ \/-](\d+(\.\d+)*)/i):s.windowsphone?v=o(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):s.webos?v=o(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):s.blackberry?v=o(/rim\stablet\sos\s(\d+(\.\d+)*)/i):s.bada?v=o(/bada\/(\d+(\.\d+)*)/i):s.tizen&&(v=o(/tizen[\/\s](\d+(\.\d+)*)/i)),v&&(s.osversion=v);var b=v.split(".")[0];return d||"ipad"==r||a&&(3==b||4==b&&!m)||s.silk?s.tablet=i:(m||"iphone"==r||"ipod"==r||a||s.blackberry||s.webos||s.bada)&&(s.mobile=i),s.msie&&s.version>=10||s.chrome&&s.version>=20||s.firefox&&s.version>=20||s.safari&&s.version>=6||s.opera&&s.version>=10||s.ios&&s.osversion&&s.osversion.split(".")[0]>=6||s.blackberry&&s.version>=10.1?s.a=i:s.msie&&s.version<10||s.chrome&&s.version<20||s.firefox&&s.version<20||s.safari&&s.version<6||s.opera&&s.version<10||s.ios&&s.osversion&&s.osversion.split(".")[0]<6?s.c=i:s.x=i,s}var i=!0,o=e("undefined"!=typeof navigator?navigator.userAgent:"");return o._detect=e,o});
//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map

//# sourceMappingURL=bowser_modified.js.map
