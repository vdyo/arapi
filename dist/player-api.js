/**
 * mux-embed
 * @version 3.3.0
 * @copyright 2020 Mux, Inc
 */
(function(){var define=false;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("mux",[],t):"object"==typeof exports?exports.mux=t():e.mux=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(a){if(r[a])return r[a].exports;var i=r[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=18)}([function(e,t,r){(function(t){var r;r="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=r}).call(t,r(6))},function(e,t){function r(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function a(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}function i(e,t){var r=R(e)||p(e)?a(e.length,String):[],i=r.length,n=!!i;for(var o in e)!t&&!O.call(e,o)||n&&("length"==o||l(o,i))||r.push(o);return r}function n(e,t,r){var a=e[t];O.call(e,t)&&f(a,r)&&(void 0!==r||t in e)||(e[t]=r)}function o(e){if(!c(e))return D(e);var t=[];for(var r in Object(e))O.call(e,r)&&"constructor"!=r&&t.push(r);return t}function s(e,t){return t=q(void 0===t?e.length-1:t,0),function(){for(var a=arguments,i=-1,n=q(a.length-t,0),o=Array(n);++i<n;)o[i]=a[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=a[i];return s[t]=o,r(e,this,s)}}function u(e,t,r,a){r||(r={});for(var i=-1,o=t.length;++i<o;){var s=t[i],u=a?a(r[s],e[s],s,r,e):void 0;n(r,s,void 0===u?e[s]:u)}return r}function l(e,t){return!!(t=null==t?w:t)&&("number"==typeof e||T.test(e))&&e>-1&&e%1==0&&e<t}function d(e,t,r){if(!m(r))return!1;var a=typeof t;return!!("number"==a?h(r)&&l(t,r.length):"string"==a&&t in r)&&f(r[t],e)}function c(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||k)}function f(e,t){return e===t||e!==e&&t!==t}function p(e){return _(e)&&O.call(e,"callee")&&(!M.call(e,"callee")||P.call(e)==x)}function h(e){return null!=e&&y(e.length)&&!v(e)}function _(e){return b(e)&&h(e)}function v(e){var t=m(e)?P.call(e):"";return t==S||t==E}function y(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=w}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){return!!e&&"object"==typeof e}function g(e){return h(e)?i(e):o(e)}var w=9007199254740991,x="[object Arguments]",S="[object Function]",E="[object GeneratorFunction]",T=/^(?:0|[1-9]\d*)$/,k=Object.prototype,O=k.hasOwnProperty,P=k.toString,M=k.propertyIsEnumerable,D=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),q=Math.max,A=!M.call({valueOf:1},"valueOf"),R=Array.isArray,j=function(e){return s(function(t,r){var a=-1,i=r.length,n=i>1?r[i-1]:void 0,o=i>2?r[2]:void 0;for(n=e.length>3&&"function"==typeof n?(i--,n):void 0,o&&d(r[0],r[1],o)&&(n=i<3?void 0:n,i=1),t=Object(t);++a<i;){var s=r[a];s&&e(t,s,a,n)}return t})}(function(e,t){if(A||c(t)||h(t))return void u(t,g(t),e);for(var r in t)O.call(t,r)&&n(e,r,t[r])});e.exports=j},function(e,t,r){"use strict";function a(e,t,r){r=void 0===r?1:r,e[t]=e[t]||0,e[t]+=r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),n={};n.now=function(){var e=i.default.performance,t=e&&e.timing;return t&&"number"==typeof t.navigationStart&&"function"==typeof e.now?t.navigationStart+e.now():Date.now()},t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(20),i=function(e){return e&&e.__esModule?e:{default:e}}(a),n=i.default.methodFactory;i.default.methodFactory=function(e,t,r){var a=n(e,t,r);return function(){for(var e=["[mux]"],t=0;t<arguments.length;t++)e.push(arguments[t]);a.apply(void 0,e)}},i.default.setLevel(i.default.getLevel()),t.default=i.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return n(e)[0]},i=function(e){return n(e)[1]},n=function(e){if("string"!=typeof e||""===e)return["localhost"];var t=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,r=e.match(t)||[],a=r[4],i=void 0;return a&&(i=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,i]};t.extractHostnameAndDomain=n,t.extractHostname=a,t.extractDomain=i},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},i=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)};t.generateUUID=a,t.generateShortID=i},function(e,t,r){"use strict";function a(e){e=e||"",e=e.match(/[^\r\n]+/g)||[];for(var t={},r=0;r<e.length;r++){var a=e[r].split(/\s*:\s*(.+)/);3===a.length&&(t[a[0]]=a[1])}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,r){"use strict";var a=Object.prototype.hasOwnProperty,i=Array.isArray,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var a=[],n=0;n<r.length;++n)void 0!==r[n]&&a.push(r[n]);t.obj[t.prop]=a}}},s=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)void 0!==e[a]&&(r[a]=e[a]);return r},u=function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(i(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!a.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var o=t;return i(t)&&!i(r)&&(o=s(t,n)),i(t)&&i(r)?(r.forEach(function(r,i){if(a.call(t,i)){var o=t[i];o&&"object"==typeof o&&r&&"object"==typeof r?t[i]=e(o,r,n):t.push(r)}else t[i]=r}),t):Object.keys(r).reduce(function(t,i){var o=r[i];return a.call(t,i)?t[i]=e(t[i],o,n):t[i]=o,t},o)},l=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},d=function(e,t,r){var a=e.replace(/\+/g," ");if("iso-8859-1"===r)return a.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(a)}catch(e){return a}},c=function(e,t,r){if(0===e.length)return e;var a=e;if("symbol"==typeof e?a=Symbol.prototype.toString.call(e):"string"!=typeof e&&(a=String(e)),"iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var i="",o=0;o<a.length;++o){var s=a.charCodeAt(o);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?i+=a.charAt(o):s<128?i+=n[s]:s<2048?i+=n[192|s>>6]+n[128|63&s]:s<55296||s>=57344?i+=n[224|s>>12]+n[128|s>>6&63]+n[128|63&s]:(o+=1,s=65536+((1023&s)<<10|1023&a.charCodeAt(o)),i+=n[240|s>>18]+n[128|s>>12&63]+n[128|s>>6&63]+n[128|63&s])}return i},f=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],a=0;a<t.length;++a)for(var i=t[a],n=i.obj[i.prop],s=Object.keys(n),u=0;u<s.length;++u){var l=s[u],d=n[l];"object"==typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:n,prop:l}),r.push(d))}return o(t),e},p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},h=function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},_=function(e,t){return[].concat(e,t)};e.exports={arrayToObject:s,assign:l,combine:_,compact:f,decode:d,encode:c,isBuffer:h,isRegExp:p,merge:u}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findMediaElement=t.getMuxPlayerId=void 0;var a=r(7),i=function(e){return e&&void 0!==e.nodeName?(e.muxId||(e.muxId=e.id||(0,a.generateShortID)()),e.muxId):e},n=function(e){var t=void 0;return e&&void 0!==e.nodeName?(t=e,e=i(t)):t=document.querySelector(e),[t,e,t&&t.nodeName?t.nodeName.toLowerCase():""]};t.getMuxPlayerId=i,t.findMediaElement=n},function(e,t,r){"use strict";function a(){return"1"===(n.default.doNotTrack||n.default.navigator&&(n.default.navigator.doNotTrack||n.default.navigator.msDoNotTrack))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var i=r(0),n=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),n={};n.exists=function(){var e=i.default.performance;return void 0!==(e&&e.timing)},n.domContentLoadedEventEnd=function(){var e=i.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},n.navigationStart=function(){var e=i.default.performance,t=e&&e.timing;return t&&t.navigationStart},t.default=n},function(e,t,r){(function(t){var a,i=void 0!==t?t:"undefined"!=typeof window?window:{},n=r(23);"undefined"!=typeof document?a=document:(a=i["__GLOBAL_DOCUMENT_CACHE@4"])||(a=i["__GLOBAL_DOCUMENT_CACHE@4"]=n),e.exports=a}).call(t,r(6))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict";var a=r(42),i=r(43),n=r(16);e.exports={formats:n,parse:i,stringify:a}},function(e,t,r){"use strict";var a=String.prototype.replace,i=/%20/g,n=r(9),o={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=n.assign({default:o.RFC3986,formatters:{RFC1738:function(e){return a.call(e,i,"+")},RFC3986:function(e){return String(e)}}},o)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}function n(e){var t={},r={};return Object.keys(e).forEach(function(a){var i=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),o=n[0],u=c[o];u||(s.default.info("Data key word `"+n[0]+"` not expected in "+a),u=o+"_"),n.splice(1).forEach(function(e){"url"===e&&(i=!0),p[e]?u+=p[e]:(s.default.info("Data key word `"+e+"` not expected in "+a),u+="_"+e+"_")}),i?r[u]=e[a]:t[u]=e[a]}}),(0,l.default)(t,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(4),s=a(o),u=r(1),l=a(u),d={a:"env",b:"beacon",d:"ad",e:"event",f:"experiment",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},c=i(d),f={ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",ca:"cached",cb:"cancel",cd:"code",cg:"category",ch:"changed",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",du:"duration",dv:"device",ec:"encoding",en:"end",eg:"engine",em:"embed",er:"error",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",fi:"first",fm:"family",ft:"format",fq:"frequency",fr:"frame",fs:"fullscreen",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mx:"mux",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",po:"poster",pr:"preload",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",ta:"tag",tc:"tech",te:"text",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},p=i(f)},function(e,t,r){"use strict";e.exports=r(19).default},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var r=[],a=!0,i=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw n}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=r(0),o=a(n),s=r(10),u=r(4),l=a(u),d=r(11),c=a(d),f=r(3),p=a(f),h=r(21),_=a(h),v=r(51),y=a(v),m=r(52),b=a(m),g={},w=function e(t){var r=arguments;"string"==typeof t?e.hasOwnProperty(t)?o.default.setTimeout(function(){r=Array.prototype.splice.call(r,1),e[t].apply(null,r)},0):l.default.warn("`"+t+"` is an unknown task"):"function"==typeof t?o.default.setTimeout(function(){t(e)},0):l.default.warn("`"+t+"` is invalid.")};w.loaded=p.default.now(),w.VERSION="3.3.0",w.API_VERSION="2.1",w.PLAYER_TRACKED=!1,w.monitor=function(e,t){return(0,y.default)(w,e,t)},w.destroyMonitor=function(e){var t=(0,s.findMediaElement)(e),r=i(t,1),a=r[0];a&&a.mux&&"function"==typeof a.mux.destroy?a.mux.destroy():l.default.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},w.addHLSJS=function(e,t){var r=(0,s.getMuxPlayerId)(e);g[r]?g[r].addHLSJS(t):l.default.error("A monitor for `"+r+"` has not been initialized.")},w.addDashJS=function(e,t){var r=(0,s.getMuxPlayerId)(e);g[r]?g[r].addDashJS(t):l.default.error("A monitor for `"+r+"` has not been initialized.")},w.removeHLSJS=function(e){var t=(0,s.getMuxPlayerId)(e);g[t]?g[t].removeHLSJS():l.default.error("A monitor for `"+t+"` has not been initialized.")},w.removeDashJS=function(e){var t=(0,s.getMuxPlayerId)(e);g[t]?g[t].removeDashJS():l.default.error("A monitor for `"+t+"` has not been initialized.")},w.init=function(e,t){(0,c.default)()&&t&&t.respectDoNotTrack&&l.default.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var r=(0,s.getMuxPlayerId)(e);g[r]=new _.default(w,r,t)},w.emit=function(e,t,r){var a=(0,s.getMuxPlayerId)(e);g[a]?(g[a].emit(t,r),"destroy"===t&&delete g[a]):l.default.error("A monitor for `"+a+"` has not been initialized.")},void 0!==o.default&&"function"==typeof o.default.addEventListener&&o.default.addEventListener("unload",function(){w.WINDOW_UNLOADING=!0},!1),w.checkDoNotTrack=c.default,w.log=l.default,w.utils=b.default,t.default=w},function(e,t,r){var a,i;!function(n,o){"use strict";a=o,void 0!==(i="function"==typeof a?a.call(t,r,t,e):a)&&(e.exports=i)}(0,function(){"use strict";function e(e,t){var r=e[t];if("function"==typeof r.bind)return r.bind(e);try{return Function.prototype.bind.call(r,e)}catch(t){return function(){return Function.prototype.apply.apply(r,[e,arguments])}}}function t(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function r(r){return"debug"===r&&(r="log"),typeof console!==u&&("trace"===r&&l?t:void 0!==console[r]?e(console,r):void 0!==console.log?e(console,"log"):s)}function a(e,t){for(var r=0;r<d.length;r++){var a=d[r];this[a]=r<e?s:this.methodFactory(a,e,t)}this.log=this.debug}function i(e,t,r){return function(){typeof console!==u&&(a.call(this,t,r),this[e].apply(this,arguments))}}function n(e,t,a){return r(e)||i.apply(this,arguments)}function o(e,t,r){function i(e){var t=(d[e]||"silent").toUpperCase();if(typeof window!==u){try{return void(window.localStorage[c]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(c)+"="+t+";"}catch(e){}}}function o(){var e;if(typeof window!==u){try{e=window.localStorage[c]}catch(e){}if(typeof e===u)try{var t=window.document.cookie,r=t.indexOf(encodeURIComponent(c)+"=");-1!==r&&(e=/^([^;]+)/.exec(t.slice(r))[1])}catch(e){}return void 0===l.levels[e]&&(e=void 0),e}}var s,l=this,c="loglevel";e&&(c+=":"+e),l.name=e,l.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},l.methodFactory=r||n,l.getLevel=function(){return s},l.setLevel=function(t,r){if("string"==typeof t&&void 0!==l.levels[t.toUpperCase()]&&(t=l.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=l.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(s=t,!1!==r&&i(t),a.call(l,t,e),typeof console===u&&t<l.levels.SILENT)return"No console available for logging"},l.setDefaultLevel=function(e){o()||l.setLevel(e,!1)},l.enableAll=function(e){l.setLevel(l.levels.TRACE,e)},l.disableAll=function(e){l.setLevel(l.levels.SILENT,e)};var f=o();null==f&&(f=null==t?"WARN":t),l.setLevel(f,!1)}var s=function(){},u="undefined",l=typeof window!==u&&typeof window.navigator!==u&&/Trident\/|MSIE /.test(window.navigator.userAgent),d=["trace","debug","info","warn","error"],c=new o,f={};c.getLogger=function(e){if("string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=f[e];return t||(t=f[e]=new o(e,c.getLevel(),c.methodFactory)),t};var p=typeof window!==u?window.log:void 0;return c.noConflict=function(){return typeof window!==u&&window.log===c&&(window.log=p),c},c.getLoggers=function(){return f},c})},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var r=[],a=!0,i=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw n}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=r(4),o=a(n),s=r(1),u=a(s),l=r(7),d=r(5),c=r(0),f=a(c),p=r(12),h=a(p),_=r(2),v=a(_),y=r(22),m=a(y),b=r(25),g=r(26),w=r(27),x=a(w),S=r(28),E=a(S),T=r(29),k=a(T),O=r(30),P=a(O),M=r(31),D=a(M),q=r(32),A=a(q),R=r(33),j=a(R),I=r(34),L=a(I),C=r(35),N=a(C),H=r(36),B=a(H),F=r(37),W=a(F),U=r(38),G=a(U),V=r(39),J=a(V),Q=r(40),z=a(Q),$=r(50),K=a($),X=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],Y=function(e,t,r){var a=this;this.DOM_CONTENT_LOADED_EVENT_END=h.default.domContentLoadedEventEnd(),this.NAVIGATION_START=h.default.navigationStart();var i={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,errorTranslator:function(e){return e}};this.mux=e,this.id=t,r=(0,u.default)(i,r),r.data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),o.default.setLevel(r.debug?"debug":"warn"),this.getPlayheadTime=r.getPlayheadTime,this.getStateData=r.getStateData||function(){},this.getAdData=r.getAdData||function(){},this.minimumRebufferDuration=r.minimumRebufferDuration,this.sustainedRebufferThreshold=r.sustainedRebufferThreshold,this.playbackHeartbeatTime=r.playbackHeartbeatTime,this.errorTranslator=r.errorTranslator,this.playbackEventDispatcher=new z.default(e,r.data.env_key,r),this.data={player_instance_id:(0,l.generateUUID)(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconDomain},this.data.view_sequence_number=1,this.data.player_sequence_number=1,this.oldEmit=this.emit,this.emit=function(e,t){t=(0,u.default)({viewer_time:this.mux.utils.now()},t),this.oldEmit(e,t)};var n=function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}.bind(this);this.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),(0,u.default)(this.data,t),this._initializeViewData(),this.one("play",n),this.one("adbreakstart",n)});var s=function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}.bind(this);this.on("videochange",function(e,t){s(t)}),this.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),s((0,u.default)(t,{view_program_changed:!0})),n()}),this.on("destroy",this.destroy);var d=this.destroy.bind(this);void 0!==f.default&&"function"==typeof f.default.addEventListener&&f.default.addEventListener("unload",d,!1),this.on("destroy",function(){void 0!==f.default&&"function"==typeof f.default.removeEventListener&&f.default.removeEventListener("unload",d)}),this.on("playerready",function(e,t){(0,u.default)(this.data,t)}),X.forEach(function(e){a.on(e,function(t,r){0!==e.indexOf("ad")&&this._updateStateData(),(0,u.default)(this.data,r),this._sanitizeData()}),a.on("after"+e,function(){("error"!==e||this.viewErrored)&&this.send(e)})}),this.on("viewend",function(e,t){(0,u.default)(a.data,t)});var c=function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};this.one("playerready",c),k.default.apply(this),J.default.apply(this),B.default.apply(this),A.default.apply(this),E.default.apply(this),N.default.apply(this),P.default.apply(this),D.default.apply(this),W.default.apply(this),j.default.apply(this),L.default.apply(this),G.default.apply(this),K.default.apply(this),r.hlsjs&&this.addHLSJS(r),r.dashjs&&this.addDashJS(r),this.emit("viewinit",r.data)};(0,u.default)(Y.prototype,x.default.prototype),(0,u.default)(Y.prototype,A.default.prototype),(0,u.default)(Y.prototype,B.default.prototype),(0,u.default)(Y.prototype,E.default.prototype),(0,u.default)(Y.prototype,P.default.prototype),(0,u.default)(Y.prototype,D.default.prototype),(0,u.default)(Y.prototype,W.default.prototype),(0,u.default)(Y.prototype,j.default.prototype),(0,u.default)(Y.prototype,L.default.prototype),Y.prototype.destroy=function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),f.default.clearTimeout(this._heartBeatTimeout))},Y.prototype.send=function(e){var t=(0,u.default)({},this.data);if(1===t.player_error_code&&(delete t.player_error_code,delete t.player_error_message),t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var r=(0,d.extractHostnameAndDomain)(t.video_source_url),a=i(r,2),n=a[0],o=a[1];t.video_source_domain=o,t.video_source_hostname=n}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,this._restartHeartBeat()},Y.prototype._updateStateData=function(){(0,u.default)(this.data,this.getStateData()),this.getPlayheadTime&&(this.data.player_playhead_time=this.getPlayheadTime()),this._sanitizeData()},Y.prototype._sanitizeData=function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var r=parseInt(e.data[t],10);e.data[t]=isNaN(r)?void 0:r}),["player_source_url","video_source_url"].forEach(function(t){e.data[t]&&0===e.data[t].toLowerCase().indexOf("data:")&&(e.data[t]="MSE style URL")})},Y.prototype._resetVideoData=function(e,t){var r=this;Object.keys(this.data).forEach(function(e){0===e.indexOf("video_")&&delete r.data[e]})},Y.prototype._resetViewData=function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1},Y.prototype._resetErrorData=function(e,t){delete this.data.player_error_code,delete this.data.player_error_message},Y.prototype._initializeViewData=function(){var e=this,t=this.data.view_id=(0,l.generateUUID)();this.data.video_id||(this.data.video_id=(0,m.default)(this.data.player_source_url));var r=function(){t===e.data.view_id&&(0,v.default)(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",r):r()},Y.prototype._restartHeartBeat=function(){var e=this;f.default.clearTimeout(this._heartBeatTimeout),this.viewErrored||(this._heartBeatTimeout=f.default.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4))},Y.prototype.addHLSJS=function(e){return e.hlsjs?this.hlsjs?void this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,void(0,b.monitorHlsJs)(this.mux,this.id,e.hlsjs,{},e.Hls||f.default.Hls)):void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")},Y.prototype.removeHLSJS=function(){this.hlsjs&&((0,b.stopMonitoringHlsJs)(this.hlsjs),this.hlsjs=void 0)},Y.prototype.addDashJS=function(e){return e.dashjs?this.dashjs?void this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,void(0,g.monitorDashJS)(this.mux,this.id,e.dashjs)):void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")},Y.prototype.removeDashJS=function(){this.dashjs&&((0,g.stopMonitoringDashJS)(this.dashjs),this.dashjs=void 0)},t.default=Y},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=o.default.createElement("a");t.href=e;var r=t.pathname.replace(/\.[^/.]+$/,"");return u.default.encode(t.host+r).split("=")[0]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=r(13),o=a(n),s=r(24),u=a(s)},function(e,t){},function(e,t,r){(function(e,a){var i;!function(n){var o="object"==typeof t&&t,s=("object"==typeof e&&e&&e.exports,"object"==typeof a&&a);var u=function(e){this.message=e};u.prototype=new Error,u.prototype.name="InvalidCharacterError";var l=function(e){throw new u(e)},d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=/[\t\n\f\r ]/g,f=function(e){e=String(e).replace(c,"");var t=e.length;t%4==0&&(e=e.replace(/==?$/,""),t=e.length),(t%4==1||/[^+a-zA-Z0-9/]/.test(e))&&l("Invalid character: the string to be decoded is not correctly encoded.");for(var r,a,i=0,n="",o=-1;++o<t;)a=d.indexOf(e.charAt(o)),r=i%4?64*r+a:a,i++%4&&(n+=String.fromCharCode(255&r>>(-2*i&6)));return n},p=function(e){e=String(e),/[^\0-\xFF]/.test(e)&&l("The string to be encoded contains characters outside of the Latin1 range.");for(var t,r,a,i,n=e.length%3,o="",s=-1,u=e.length-n;++s<u;)t=e.charCodeAt(s)<<16,r=e.charCodeAt(++s)<<8,a=e.charCodeAt(++s),i=t+r+a,o+=d.charAt(i>>18&63)+d.charAt(i>>12&63)+d.charAt(i>>6&63)+d.charAt(63&i);return 2==n?(t=e.charCodeAt(s)<<8,r=e.charCodeAt(++s),i=t+r,o+=d.charAt(i>>10)+d.charAt(i>>4&63)+d.charAt(i<<2&63)+"="):1==n&&(i=e.charCodeAt(s),o+=d.charAt(i>>2)+d.charAt(i<<4&63)+"=="),o},h={encode:p,decode:f,version:"0.1.0"};void 0!==(i=function(){return h}.call(t,r,t,e))&&(e.exports=i)}()}).call(t,r(14)(e),r(6))},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.stopMonitoringHlsJs=t.monitorHlsJs=void 0;var i=r(8),n=a(i),o=r(12),s=a(o),u=r(5),l=function(e){if(!e)return{};var t=s.default.navigationStart();return{bytesLoaded:e.total,requestStart:Math.round(t+e.trequest),responseStart:Math.round(t+e.tfirst),responseEnd:Math.round(t+e.tload)}},d=function(e){if(e&&"function"==typeof e.getAllResponseHeaders)return(0,n.default)(e.getAllResponseHeaders())},c=function(e,t,r){var a=(arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments[4]),i=e.log;if(!s.default.exists())return void i.warn("performance timing not supported. Not tracking HLS.js.");var n=function(r,a){return e.emit(t,r,a)},o=function(e,t){var r=t.levels,a=t.audioTracks,i=t.url,o=t.stats,s=t.networkDetails,c={},f={};r.forEach(function(e,t){c[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){f[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var p=l(o),h=p.bytesLoaded,_=p.requestStart,v=p.responseStart,y=p.responseEnd;n("requestcompleted",{request_event_type:e,request_bytes_loaded:h,request_start:_,request_response_start:v,request_response_end:y,request_type:"manifest",request_hostname:(0,u.extractHostname)(i),request_response_headers:d(s),request_rendition_lists:{media:c,audio:f,video:{}}})};r.on(a.Events.MANIFEST_LOADED,o);var c=function(e,t){var r=t.details,a=t.level,i=t.networkDetails,o=t.stats,s=l(o),c=s.bytesLoaded,f=s.requestStart,p=s.responseStart,h=s.responseEnd;n("requestcompleted",{request_event_type:e,request_bytes_loaded:c,request_start:f,request_response_start:p,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:(0,u.extractHostname)(r.url),request_response_headers:d(i)})};r.on(a.Events.LEVEL_LOADED,c);var f=function(e,t){var r=t.details,a=t.networkDetails,i=t.stats,o=l(i),s=o.bytesLoaded,c=o.requestStart,f=o.responseStart,p=o.responseEnd;n("requestcompleted",{request_event_type:e,request_bytes_loaded:s,request_start:c,request_response_start:f,request_response_end:p,request_type:"manifest",request_hostname:(0,u.extractHostname)(r.url),request_response_headers:d(a)})};r.on(a.Events.AUDIO_TRACK_LOADED,f);var p=function(e,t){var a=t.stats,i=t.networkDetails,o=t.frag,s=l(a),c=s.bytesLoaded,f=s.requestStart,p=s.responseStart,h=s.responseEnd,_={request_event_type:e,request_bytes_loaded:c,request_start:f,request_response_start:p,request_response_end:h,request_hostname:i?(0,u.extractHostname)(i.responseURL):void 0,request_response_headers:d(i),request_media_duration:o.duration};"main"===o.type?(_.request_type="media",_.request_current_level=o.level,_.request_video_width=(r.levels[o.level]||{}).width,_.request_video_height=(r.levels[o.level]||{}).height):_.request_type=o.type,n("requestcompleted",_)};r.on(a.Events.FRAG_LOADED,p);var h=function(e,t){var r=t.details,i=t.response,o=t.context,s=t.frag;if(r===a.ErrorDetails.MANIFEST_LOAD_ERROR||r===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||r===a.ErrorDetails.FRAG_LOAD_ERROR||r===a.ErrorDetails.FRAG_LOAD_TIMEOUT||r===a.ErrorDetails.LEVEL_LOAD_ERROR||r===a.ErrorDetails.LEVEL_LOAD_TIMEOUT){var l=s&&s.url||o&&o.url||"";n("requestfailed",{request_error:r,request_url:l,request_hostname:(0,u.extractHostname)(l),request_type:r===a.ErrorDetails.FRAG_LOAD_ERROR||r===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":"manifest",request_error_code:i&&i.code,request_error_text:i&&i.text})}};r.on(a.Events.ERROR,h);var _=function(e,t){var r=t.frag,a=r&&r._url||"";n("requestcanceled",{request_cancel:e,request_url:a,request_type:"media",request_hostname:(0,u.extractHostname)(a)})};r.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,_);var v=function(e,t){var a=t.level,o=r.levels.find(function(e){return e.level===a});if(o&&o.attrs.BANDWIDTH){var s=o.attrs.BANDWIDTH;s?n("renditionchange",{video_source_bitrate:s,video_source_width:o.width,video_source_height:o.height}):i.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};r.on(a.Events.LEVEL_SWITCHED,v),r._stopMuxMonitor=function(){r.off(a.Events.MANIFEST_LOADED,o),r.off(a.Events.LEVEL_LOADED,c),r.off(a.Events.AUDIO_TRACK_LOADED,f),r.off(a.Events.FRAG_LOADED,p),r.off(a.Events.ERROR,h),r.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,_),r.off(a.Events.LEVEL_SWITCHED,v),r.off(a.Events.DESTROYING,r._stopMuxMonitor),delete r._stopMuxMonitor},r.on(a.Events.DESTROYING,r._stopMuxMonitor)},f=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()};t.monitorHlsJs=c,t.stopMonitoringHlsJs=f},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.stopMonitoringDashJS=t.monitorDashJS=void 0;var i=r(0),n=a(i),o=r(8),s=a(o),u=r(5),l=function(e,t){if(!e||"function"!=typeof e.getRequests)return{};var r=e.getRequests({state:"executed"});if(0===r.length)return{};var a=r[r.length-1],i=(0,u.extractHostname)(a.url),n=a.bytesLoaded,o=new Date(a.requestStartDate).getTime(),l=new Date(a.firstByteDate).getTime(),d=new Date(a.requestEndDate).getTime(),c=isNaN(a.duration)?0:a.duration,f="function"==typeof t.getMetricsFor?t.getMetricsFor(a.mediaType).HttpList:t.getDashMetrics().getHttpRequests(a.mediaType),p=void 0;return f.length>0&&(p=(0,s.default)(f[f.length-1]._responseHeaders||"")),{requestStart:o,requestResponseStart:l,requestResponseEnd:d,requestBytesLoaded:n,requestResponseHeaders:p,requestMediaDuration:c,requestHostname:i}},d=function(e,t){var r=t.getQualityFor(e),a=t.getCurrentTrackFor(e),i=a.bitrateList;return i?{currentLevel:r,renditionWidth:i[r].width||null,renditionHeight:i[r].height||null,renditionBitrate:i[r].bandwidth}:{}},c=function(e,t,r){var a=(arguments.length>3&&void 0!==arguments[3]&&arguments[3],e.log);if(!r||!r.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var i=function(r,a){return e.emit(t,r,a)},o=function(e){var t=e.type,r=e.data,a=r||{},n=a.url;i("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:(0,u.extractHostname)(n)})};r.on("manifestLoaded",o);var s={},c=function(e){var t=e.type,a=e.fragmentModel,n=e.chunk,o=n||{},u=o.mediaInfo,d=u||{},c=d.type,f=d.bitrateList;f=f||[];var p={};f.forEach(function(e,t){p[t]={},p[t].width=e.width,p[t].height=e.height,p[t].bitrate=e.bandwidth,p[t].attrs={}}),"video"===c?s.video=p:"audio"===c?s.audio=p:s.media=p;var h=l(a,r),_=h.requestStart,v=h.requestResponseStart,y=h.requestResponseEnd,m=h.requestResponseHeaders,b=h.requestMediaDuration,g=h.requestHostname;i("requestcompleted",{request_event_type:t,request_start:_,request_response_start:v,request_response_end:y,request_bytes_loaded:-1,request_type:c+"_init",request_response_headers:m,request_hostname:g,request_media_duration:b,request_rendition_lists:s})};r.on("initFragmentLoaded",c);var f=function(e){var t=e.type,a=e.fragmentModel,n=e.chunk,o=n||{},s=o.mediaInfo,u=o.start,c=s||{},f=c.type,p=l(a,r),h=p.requestStart,_=p.requestResponseStart,v=p.requestResponseEnd,y=p.requestBytesLoaded,m=p.requestResponseHeaders,b=p.requestMediaDuration,g=p.requestHostname,w=d(f,r),x=w.currentLevel,S=w.renditionWidth,E=w.renditionHeight,T=w.renditionBitrate;i("requestcompleted",{request_event_type:t,request_start:h,request_response_start:_,request_response_end:v,request_bytes_loaded:y,request_type:f,request_response_headers:m,request_hostname:g,request_media_start_time:u,request_media_duration:b,request_current_level:x,request_labeled_bitrate:T,request_video_width:S,request_video_height:E})};r.on("mediaFragmentLoaded",f);var p={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(p.video&&"number"==typeof p.video.bitrate){if(!p.video.width||!p.video.height)return void a.warn("have bitrate info for video but missing width/height");var e=p.video.bitrate;return p.audio&&"number"==typeof p.audio.bitrate&&(e+=p.audio.bitrate),e!==p.totalBitrate?(p.totalBitrate=e,{video_source_bitrate:e,video_source_height:p.video.height,video_source_width:p.video.width}):void 0}},_=function(e,t,n){if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);var o=e.mediaType;if("audio"===o||"video"===o){var s=r.getBitrateInfoListFor(o).find(function(t){return t.qualityIndex===e.newQuality});if(!s||"number"!=typeof s.bitrate)return void a.warn("missing bitrate info for "+o);p[o]=s;var u=h();u&&i("renditionchange",u)}};r.on("qualityChangeRendered",_);var v=function(e){var t=e.error,r=e.event;r=r||{};var a=r.request||{},o=n.default.event&&n.default.event.currentTarget||{};i("requestfailed",{request_error:t+"_"+r.id+"_"+a.type,request_url:r.url,request_hostname:(0,u.extractHostname)(r.url),request_type:a.mediaType,request_error_code:o.status,request_error_type:o.statusText})};r.on("error",v),r._stopMuxMonitor=function(){r.off("manifestLoaded",o),r.off("initFragmentLoaded",c),r.off("mediaFragmentLoaded",f),r.off("qualityChangeRendered",_),r.off("error",v),delete r._stopMuxMonitor}},f=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()};t.monitorDashJS=c,t.stopMonitoringDashJS=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){},i=0;a.prototype.on=function(e,t,r){return t._eventEmitterGuid=t._eventEmitterGuid||++i,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],r&&(t=t.bind(r)),this._listeners[e].push(t),t},a.prototype.off=function(e,t){var r=this._listeners&&this._listeners[e];r&&r.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&r.splice(a,1)})},a.prototype.one=function(e,t,r){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++i;var n=function i(){a.off(e,i),t.apply(r||this,arguments)};n._eventEmitterGuid=t._eventEmitterGuid,this.on(e,n)},a.prototype.emit=function(e,t){var r=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],i=this._listeners[e]||[],n=this._listeners["after"+e]||[],o=function(t,a){t=t.slice(),t.forEach(function(t){t.call(r,{type:e},a)})};o(a,t),o(i,t),o(n,t)}},t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(){this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,this.on("playing",function(){this._playheadShouldBeProgressing=!0}),this.on("play",this._startPlaybackHeartbeatInterval),this.on("playing",this._startPlaybackHeartbeatInterval),this.on("adbreakstart",this._startPlaybackHeartbeatInterval),this.on("adplay",this._startPlaybackHeartbeatInterval),this.on("adplaying",this._startPlaybackHeartbeatInterval),this.on("seeking",this._startPlaybackHeartbeatInterval),this.on("devicewake",this._startPlaybackHeartbeatInterval),this.on("viewstart",this._startPlaybackHeartbeatInterval),this.on("pause",this._stopPlaybackHeartbeatInterval),this.on("ended",this._stopPlaybackHeartbeatInterval),this.on("viewend",this._stopPlaybackHeartbeatInterval),this.on("error",this._stopPlaybackHeartbeatInterval),this.on("aderror",this._stopPlaybackHeartbeatInterval),this.on("adpause",this._stopPlaybackHeartbeatInterval),this.on("adended",this._stopPlaybackHeartbeatInterval),this.on("adbreakend",this._stopPlaybackHeartbeatInterval),this.on("seeked",function(){this.data.player_is_paused?this._stopPlaybackHeartbeatInterval():this._startPlaybackHeartbeatInterval()}),this.on("timeupdate",function(){null!==this._playbackHeartbeatInterval&&this.emit("playbackheartbeat")}),this.on("devicesleep",function(e,t){null!==this._playbackHeartbeatInterval&&(i.default.clearInterval(this._playbackHeartbeatInterval),this.emit("playbackheartbeatend",{viewer_time:t.viewer_time}),this._playbackHeartbeatInterval=null)})};n.prototype._startPlaybackHeartbeatInterval=function(){var e=this;null===this._playbackHeartbeatInterval&&(this.emit("playbackheartbeat"),this._playbackHeartbeatInterval=i.default.setInterval(function(){e.emit("playbackheartbeat")},this.playbackHeartbeatTime))},n.prototype._stopPlaybackHeartbeatInterval=function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(i.default.clearInterval(this._playbackHeartbeatInterval),this.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)},t.default=n},function(e,t,r){"use strict";function a(){var e=this;this.on("viewinit",function(){e.viewErrored=!1}),this.on("error",function(){try{var t=e.errorTranslator({player_error_code:e.data.player_error_code,player_error_message:e.data.player_error_message});t?(e.data.player_error_code=t.player_error_code,e.data.player_error_message=t.player_error_message,e.viewErrored=!0):(delete e.data.player_error_code,delete e.data.player_error_message)}catch(t){e.mux.log.warn("Exception in error translator callback.",t),e.viewErrored=!0}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),i=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(){this._watchTimeTrackerLastCheckedTime=null,this.on("playbackheartbeat",this._updateWatchTime),this.on("playbackheartbeatend",this._clearWatchTimeState)};n.prototype._updateWatchTime=function(e,t){var r=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=r),(0,i.default)(this.data,"view_watch_time",r-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=r},n.prototype._clearWatchTimeState=function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null},t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),i=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(){this._playbackTimeTrackerLastPlayheadPosition=-1,this.on("playbackheartbeat",this._updatePlaybackTime),this.on("playbackheartbeatend",this._clearPlaybackTimeState),this.on("seeking",this._clearPlaybackTimeState)};n.prototype._updatePlaybackTime=function(){var e=this.data.player_playhead_time;if(this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition){var t=e-this._playbackTimeTrackerLastPlayheadPosition;t<=1e3&&(0,i.default)(this.data,"view_content_playback_time",t)}this._playbackTimeTrackerLastPlayheadPosition=e},n.prototype._clearPlaybackTimeState=function(){this._updatePlaybackTime(),this._playbackTimeTrackerLastPlayheadPosition=-1},t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){this.on("playbackheartbeat",this._updatePlayheadTime),this.on("playbackheartbeatend",this._updatePlayheadTime),this.on("timeupdate",this._updatePlayheadTime),this.on("destroy",function(){this.off("timeupdate",this._updatePlayheadTime)})};a.prototype._updatePlayheadTime=function(e,t){if(t.player_playhead_time)this.data.player_playhead_time=t.player_playhead_time;else if(this.getPlayheadTime){var r=this.getPlayheadTime();void 0!==r&&(this.data.player_playhead_time=r)}},t.default=a},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),n=a(i),o=r(2),s=a(o),u=function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,this.on("playbackheartbeat",this._checkIfRebuffering),this.on("playbackheartbeatend",this._cleanupRebufferTracker),this.on("seeking",function(){this._cleanupRebufferTracker(null,{viewer_time:n.default.now()})})};u.prototype._checkIfRebuffering=function(e,t){if(this.isSeeking||this.isAdBreak||!this._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return this._prepareRebufferTrackerState(t.viewer_time),void this._updateRebufferMetrics();if(this._lastPlayheadTime!==this.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;r>=this.sustainedRebufferThreshold&&(this._rebuffering?this._updateRebufferMetrics(t.viewer_time-this._lastCheckedTime):(this._rebuffering=!0,(0,s.default)(this.data,"view_rebuffer_count",1),this._updateRebufferMetrics(r),this.emit("rebufferstart"))),this._lastCheckedTime=t.viewer_time},u.prototype._clearRebufferTrackerState=function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null},u.prototype._prepareRebufferTrackerState=function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e},u.prototype._cleanupRebufferTracker=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this._updateRebufferMetrics(t.viewer_time-this._lastCheckedTime),this.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return void this._updateRebufferMetrics();var a=this.data.player_playhead_time-this._lastPlayheadTime,i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;a>0&&i-a>this.minimumRebufferDuration?((0,s.default)(this.data,"view_rebuffer_count",1),this._updateRebufferMetrics(i-a),this.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+i-a})):this._updateRebufferMetrics()}r?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()},u.prototype._updateRebufferMetrics=function(e){e>0&&(0,s.default)(this.data,"view_rebuffer_duration",e),this.data.view_watch_time>=0&&this.data.view_rebuffer_count>0&&(this.data.view_rebuffer_frequency=this.data.view_rebuffer_count/this.data.view_watch_time,this.data.view_rebuffer_percentage=this.data.view_rebuffer_duration/this.data.view_watch_time)},t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),i=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(){this.on("viewinit",function(){var e=this.data,t=e.view_id;if(!e.view_program_changed){var r=function(e,r){var a=r.viewer_time;"playing"===e.type&&void 0===this.data.view_time_to_first_frame?this.calculateTimeToFirstFrame(a||i.default.now(),t):"adplaying"!==e.type||void 0!==this.data.view_time_to_first_frame&&!this.inPrerollPosition()||this.calculateTimeToFirstFrame(a||i.default.now(),t)};this.one("playing",r),this.one("adplaying",r),this.one("viewend",function(){this.off("playing",r),this.off("adplaying",r)})}})};n.prototype.calculateTimeToFirstFrame=function(e,t){t===this.data.view_id&&(this._updateWatchTime(null,{viewer_time:e}),this.data.view_time_to_first_frame=this.data.view_watch_time,(this.data.player_autoplay_on||this.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.data.view_aggregate_startup_time=this.data.view_start+this.data.view_watch_time-this.NAVIGATION_START))},t.default=n},function(e,t,r){"use strict";function a(){var e=this;this.on("viewinit",function(){this._lastPlayheadPosition=-1});var t=["pause","rebufferstart","seeking","error","adbreakstart","hb"],r=["playing","hb"];t.forEach(function(t){e.on(t,function(){if(this._lastPlayheadPosition>=0&&this.data.player_playhead_time>=0&&this._lastPlayerWidth>=0&&this._lastSourceWidth>0&&this._lastPlayerHeight>=0&&this._lastSourceHeight>0){var e=this.data.player_playhead_time-this._lastPlayheadPosition;if(e<0)return void(this._lastPlayheadPosition=-1);var t=Math.min(this._lastPlayerWidth/this._lastSourceWidth,this._lastPlayerHeight/this._lastSourceHeight),r=Math.max(0,t-1),a=Math.max(0,1-t);this.data.view_max_upscale_percentage=Math.max(this.data.view_max_upscale_percentage||0,r),this.data.view_max_downscale_percentage=Math.max(this.data.view_max_downscale_percentage||0,a),(0,n.default)(this.data,"view_total_content_playback_time",e),(0,n.default)(this.data,"view_total_upscaling",r*e),(0,n.default)(this.data,"view_total_downscaling",a*e)}this._lastPlayheadPosition=-1})}),r.forEach(function(t){e.on(t,function(){this._lastPlayheadPosition=this.data.player_playhead_time,this._lastPlayerWidth=this.data.player_width,this._lastPlayerHeight=this.data.player_height,this._lastSourceWidth=this.data.video_source_width,this._lastSourceHeight=this.data.video_source_height})})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var i=r(2),n=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(){this.isSeeking=!1,this.on("seeking",function(e,t){(0,d.default)(this.data,t),this._lastSeekingTime=o.default.now(),!1===this.isSeeking&&(this.isSeeking=!0,this.send("seeking"))}),this.on("seeked",function(){this.isSeeking=!1;var e=this._lastSeekingTime||o.default.now(),t=o.default.now()-e;(0,u.default)(this.data,"view_seek_count",1),(0,u.default)(this.data,"view_seek_duration",t);var r=this.data.view_max_seek_time||0;this.data.view_max_seek_time=Math.max(r,t)}),this.on("viewend",function(){this.isSeeking=!1})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=r(3),o=a(n),s=r(2),u=a(s),l=r(1),d=a(l)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var r=[],a=!0,i=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw n}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=r(2),o=a(n),s=r(5),u=r(1),l=a(u),d=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},c=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror"],f=function(){var e=this;this.on("viewinit",function(){this.isAdBreak=!1,this._currentAdRequestNumber=0,this._currentAdResponseNumber=0,this._adRequests=[],this._adResponses=[],this._adHasPlayed=!1,this._wouldBeNewAdPlay=!0,this._prerollPlayTime=void 0}),c.forEach(function(t){return e.on(t,e._updateAdData)});var t=function(){e.isAdBreak=!1};this.on("adbreakstart",function(){this.isAdBreak=!0}),this.on("play",t),this.on("playing",t),this.on("viewend",t),this.on("adrequest",function(e,t){t=(0,l.default)({ad_request_id:"generatedAdRequestId"+this._currentAdRequestNumber++},t),d(this._adRequests,t),(0,o.default)(this.data,"view_ad_request_count"),this.inPrerollPosition()&&(this.data.view_preroll_requested=!0,this._adHasPlayed||(0,o.default)(this.data,"view_preroll_request_count"))}),this.on("adresponse",function(e,t){t=(0,l.default)({ad_request_id:"generatedAdRequestId"+this._currentAdResponseNumber++},t),d(this._adResponses,t);var r=this.findAdRequest(t.ad_request_id);r&&(0,o.default)(this.data,"view_ad_request_time",Math.max(0,t.viewer_time-r.viewer_time))}),this.on("adplay",function(e,t){this._adHasPlayed=!0,this._wouldBeNewAdPlay&&(this._wouldBeNewAdPlay=!1,(0,o.default)(this.data,"view_ad_played_count")),this.inPrerollPosition()&&!this.data.view_preroll_played&&(this.data.view_preroll_played=!0,this._adRequests.length>0&&(this.data.view_preroll_request_time=Math.max(0,t.viewer_time-this._adRequests[0].viewer_time)),this.data.view_start&&(this.data.view_startup_preroll_request_time=Math.max(0,t.viewer_time-this.data.view_start)),this._prerollPlayTime=t.viewer_time)}),this.on("adplaying",function(e,t){this.inPrerollPosition()&&void 0===this.data.view_preroll_load_time&&void 0!==this._prerollPlayTime&&(this.data.view_preroll_load_time=t.viewer_time-this._prerollPlayTime,this.data.view_startup_preroll_load_time=t.viewer_time-this._prerollPlayTime)}),this.on("adended",function(){this._wouldBeNewAdPlay=!0}),this.on("aderror",function(){this._wouldBeNewAdPlay=!0})};f.prototype.inPrerollPosition=function(){return void 0===this.data.view_content_playback_time||this.data.view_content_playback_time<=1e3},f.prototype.findAdRequest=function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]},f.prototype._updateAdData=function(e,t){if(this.inPrerollPosition()){if(!this.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var r=(0,s.extractHostnameAndDomain)(t.ad_tag_url),a=i(r,2),n=a[0],o=a[1];this.data.view_preroll_ad_tag_domain=o,this.data.view_preroll_ad_tag_hostname=n}if(!this.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var u=(0,s.extractHostnameAndDomain)(t.ad_asset_url),l=i(u,2),d=l[0],c=l[1];this.data.view_preroll_ad_asset_domain=c,this.data.view_preroll_ad_asset_hostname=d}}},t.default=f},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(){var e=this,t=void 0,r=void 0,a=function(){(0,u.default)(e.data,"view_waiting_rebuffer_count",1),t=o.default.now(),r=window.setInterval(function(){if(t){var r=o.default.now();(0,u.default)(e.data,"view_waiting_rebuffer_duration",r-t),t=r}},250)},i=function(){t&&((0,u.default)(e.data,"view_waiting_rebuffer_duration",o.default.now()-t),t=!1,window.clearInterval(r))},n=!1,s=function(){n=!0},l=function(){n=!1,i()};this.on("waiting",function(){n&&a()}),this.on("playing",function(){i(),s()}),this.on("pause",l),this.on("seeking",l)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=r(3),o=a(n),s=r(2),u=a(s)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(){var e=this;this.one("playbackheartbeat",l),this.on("playbackheartbeatend",function(){e.off("before*",d),e.one("playbackheartbeat",l)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=r(1),o=a(n),s=r(3),u=a(s),l=function(){this.lastWallClockTime=u.default.now(),this.on("before*",d)},d=function(e){var t=u.default.now(),r=this.lastWallClockTime;this.lastWallClockTime=t,t-r>3e4&&(this.emit("devicesleep",{viewer_time:r}),(0,o.default)(this.data,{viewer_time:r}),this.send("devicesleep"),this.emit("devicewake",{viewer_time:t}),(0,o.default)(this.data,{viewer_time:t}),this.send("devicewake"))}},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=r(0),o=a(n),s=r(41),u=r(4),l=a(u),d=r(45),c=a(d),f=r(11),p=a(f),h=r(46),_=a(h),v=r(17),y=a(v),m=r(47),b=a(m),g=r(49),w=a(g),x=r(1),S=a(x),E=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id"],T=["viewstart","error","ended","viewend"],k=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.mux=e,this.envKey=t,this.eventQueue=new b.default((0,c.default)(t,r.beaconDomain)),this.previousBeaconData=null,this.lastEventTime=null,this.sampleRate=r.sampleRate,this.disableCookies=r.disableCookies,this.respectDoNotTrack=r.respectDoNotTrack;var a=(0,S.default)(w.default,r.platform||{});this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed_version:this.mux.VERSION,viewer_application_name:a.name,viewer_application_version:a.version,viewer_application_engine:a.layout,viewer_device_name:a.product,viewer_device_category:"",viewer_device_manufacturer:a.manufacturer,viewer_os_family:a.os&&a.os.family,viewer_os_architecture:a.os&&a.os.architecture,viewer_os_version:a.os&&a.os.version};var i=(0,_.default)();i&&(this.pageLevelData=(0,S.default)(this.pageLevelData,{viewer_connection_type:i})),void 0!==o.default&&o.default.location&&o.default.location.href&&(this.pageLevelData.page_url=o.default.location.href),this.viewerData=this.disableCookies?{}:(0,s.getAndUpdateViewerData)()};k.prototype.send=function(e,t){if(e){if(this.respectDoNotTrack&&(0,p.default)())return l.default.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!==(void 0===t?"undefined":i(t)))return l.default.error("A data object was expected in send() but was not provided");var r=this.disableCookies?{}:(0,s.getAndUpdateSessionData)(),a={};(0,S.default)(a,this.pageLevelData),(0,S.default)(a,t),(0,S.default)(a,r),(0,S.default)(a,this.viewerData),a.event=e,a.env_key=this.envKey,a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var n=a.mux_sample_number>=this.sampleRate,o=this._deduplicateBeaconData(e,a),u=(0,y.default)(o);if(this.lastEventTime=this.mux.utils.now(),n)return l.default.info("Not sending event due to sample rate restriction",e,a,u);if(!this.envKey)return l.default.info("Not sending event due to missing environment key",e,a,u);if(!this.rateLimited)if(l.default.info("Sending event",e,a,u),this.rateLimited=!this.eventQueue.queueEvent(e,u),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(T.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",u=(0,y.default)(a),this.eventQueue.queueEvent(a.event,u),l.default.error("Beaconing disabled due to rate limit.")}},k.prototype.destroy=function(){this.eventQueue.destroy(!1)};var O=function(e,t,r,a){return!(!e||0!==t.indexOf("request_"))&&("request_response_headers"===t||("object"!==(void 0===r?"undefined":i(r))||"object"!==(void 0===a?"undefined":i(a))||Object.keys(r||{}).length!==Object.keys(a||{}).length))},P=function(e,t){return"renditionchange"===e&&0===t.indexOf("video_source_")};k.prototype._deduplicateBeaconData=function(e,t){var r=this,a={},i=t.view_id;if(!i||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=(0,S.default)({},t),i&&(this.previousBeaconData=a),i&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.keys(t).forEach(function(i){var o=t[i];(o!==r.previousBeaconData[i]||E.indexOf(i)>-1||O(n,i,o,r.previousBeaconData[i])||P(e,i))&&(a[i]=o,r.previousBeaconData[i]=o)})}return a},t.default=k},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getAndUpdateSessionData=t.getAndUpdateViewerData=void 0;var i=r(15),n=a(i),o=r(44),s=a(o),u=r(7),l=r(3),d=a(l),c=function(){var e=void 0;try{e=n.default.parse(s.default.get("muxData")||"")}catch(t){e={}}return e},f=function(e){s.default.set("muxData",n.default.stringify(e),{expires:7300})},p=function(){var e=c();return e.mux_viewer_id=e.mux_viewer_id||(0,u.generateUUID)(),e.msn=e.msn||Math.random(),f(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},h=function(){var e=c(),t=d.default.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=(0,u.generateUUID)(),e.sst=t),e.sex=t+15e5,f(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}};t.getAndUpdateViewerData=p,t.getAndUpdateSessionData=h},function(e,t,r){"use strict";var a=r(9),i=r(16),n=Object.prototype.hasOwnProperty,o={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,u=Array.prototype.push,l=function(e,t){u.apply(e,s(t)?t:[t])},d=Date.prototype.toISOString,c=i.default,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,format:c,formatter:i.formatters[c],indices:!1,serializeDate:function(e){return d.call(e)},skipNulls:!1,strictNullHandling:!1},p=function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e||"symbol"==typeof e||"bigint"==typeof e},h=function e(t,r,i,n,o,u,d,c,h,_,v,y,m){var b=t;if("function"==typeof d?b=d(r,b):b instanceof Date?b=_(b):"comma"===i&&s(b)&&(b=b.join(",")),null===b){if(n)return u&&!y?u(r,f.encoder,m,"key"):r;b=""}if(p(b)||a.isBuffer(b)){if(u){return[v(y?r:u(r,f.encoder,m,"key"))+"="+v(u(b,f.encoder,m,"value"))]}return[v(r)+"="+v(String(b))]}var g=[];if(void 0===b)return g;var w;if(s(d))w=d;else{var x=Object.keys(b);w=c?x.sort(c):x}for(var S=0;S<w.length;++S){var E=w[S];o&&null===b[E]||(s(b)?l(g,e(b[E],"function"==typeof i?i(r,E):r,i,n,o,u,d,c,h,_,v,y,m)):l(g,e(b[E],r+(h?"."+E:"["+E+"]"),i,n,o,u,d,c,h,_,v,y,m)))}return g},_=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i.default;if(void 0!==e.format){if(!n.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var a=i.formatters[r],o=f.filter;return("function"==typeof e.filter||s(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:void 0===e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:void 0===e.delimiter?f.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:f.encode,encoder:"function"==typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:o,formatter:a,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}};e.exports=function(e,t){var r,a,i=e,n=_(t);"function"==typeof n.filter?(a=n.filter,i=a("",i)):s(n.filter)&&(a=n.filter,r=a);var u=[];if("object"!=typeof i||null===i)return"";var d;d=t&&t.arrayFormat in o?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var c=o[d];r||(r=Object.keys(i)),n.sort&&r.sort(n.sort);for(var f=0;f<r.length;++f){var p=r[f];n.skipNulls&&null===i[p]||l(u,h(i[p],p,c,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var v=u.join(n.delimiter),y=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?y+="utf8=%26%2310003%3B&":y+="utf8=%E2%9C%93&"),v.length>0?y+v:""}},function(e,t,r){"use strict";var a=r(9),i=Object.prototype.hasOwnProperty,n=Array.isArray,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:a.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},u=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l=function(e,t){if(n(e)){for(var r=[],a=0;a<e.length;a+=1)r.push(t(e[a]));return r}return t(e)},d=function(e,t){var r,d={},c=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=c.split(t.delimiter,f),h=-1,_=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?_="utf-8":"utf8=%26%2310003%3B"===p[r]&&(_="iso-8859-1"),h=r,r=p.length);for(r=0;r<p.length;++r)if(r!==h){var v,y,m=p[r],b=m.indexOf("]="),g=-1===b?m.indexOf("="):b+1;-1===g?(v=t.decoder(m,o.decoder,_,"key"),y=t.strictNullHandling?null:""):(v=t.decoder(m.slice(0,g),o.decoder,_,"key"),y=l(u(m.slice(g+1),t),function(e){return t.decoder(e,o.decoder,_,"value")})),y&&t.interpretNumericEntities&&"iso-8859-1"===_&&(y=s(y)),m.indexOf("[]=")>-1&&(y=n(y)?[y]:y),i.call(d,v)?d[v]=a.combine(d[v],y):d[v]=y}return d},c=function(e,t,r,a){for(var i=a?t:u(t,r),n=e.length-1;n>=0;--n){var o,s=e[n];if("[]"===s&&r.parseArrays)o=[].concat(i);else{o=r.plainObjects?Object.create(null):{};var l="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,d=parseInt(l,10);r.parseArrays||""!==l?!isNaN(d)&&s!==l&&String(d)===l&&d>=0&&r.parseArrays&&d<=r.arrayLimit?(o=[],o[d]=i):o[l]=i:o={0:i}}i=o}return i},f=function(e,t,r,a){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,u=r.depth>0&&o.exec(n),l=u?n.slice(0,u.index):n,d=[];if(l){if(!r.plainObjects&&i.call(Object.prototype,l)&&!r.allowPrototypes)return;d.push(l)}for(var f=0;r.depth>0&&null!==(u=s.exec(n))&&f<r.depth;){if(f+=1,!r.plainObjects&&i.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(u[1])}return u&&d.push("["+n.slice(u.index)+"]"),c(d,t,r,a)}},p=function(e){if(!e)return o;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?o.charset:e.charset;return{allowDots:void 0===e.allowDots?o.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:o.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:o.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:o.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:o.comma,decoder:"function"==typeof e.decoder?e.decoder:o.decoder,delimiter:"string"==typeof e.delimiter||a.isRegExp(e.delimiter)?e.delimiter:o.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:o.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:o.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:o.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:o.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:o.strictNullHandling}};e.exports=function(e,t){var r=p(t);if(""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var i="string"==typeof e?d(e,r):e,n=r.plainObjects?Object.create(null):{},o=Object.keys(i),s=0;s<o.length;++s){var u=o[s],l=f(u,i[u],r,"string"==typeof e);n=a.merge(n,l,r)}return a.compact(n)}},function(e,t,r){"use strict";var a,i,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(o){var s=!1;if(a=o,void 0!==(i="function"==typeof a?a.call(t,r,t,e):a)&&(e.exports=i),s=!0,"object"===n(t)&&(e.exports=o(),s=!0),!s){var u=window.Cookies,l=window.Cookies=o();l.noConflict=function(){return window.Cookies=u,l}}}(function(){function e(r){function a(e,i,n){var o;if("undefined"!=typeof document){if(arguments.length>1){if(n=t({path:"/"},a.defaults,n),"number"==typeof n.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*n.expires),n.expires=s}try{o=JSON.stringify(i),/^[\{\[]/.test(o)&&(i=o)}catch(e){}return i=r.write?r.write(i,e):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)),e=e.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),e=e.replace(/[\(\)]/g,escape),document.cookie=[e,"=",i,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}e||(o={});for(var u=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<u.length;d++){var c=u[d].split("="),f=c.slice(1).join("=");'"'===f.charAt(0)&&(f=f.slice(1,-1));try{var p=c[0].replace(l,decodeURIComponent);if(f=r.read?r.read(f,p):r(f,p)||f.replace(l,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch(e){}if(e===p){o=f;break}e||(o[p]=f)}catch(e){}}return o}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(e,r){a(e,"",t(r,{expires:-1}))},a.withConverter=e,a}var t=function(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var a in r)t[a]=r[a]}return t};return e(function(){})})},function(e,t,r){"use strict";function a(e,t){return e=e||"",t=t||"litix.io",e.match(/^[a-z0-9]+$/)?"https://"+e+"."+t:"https://img.litix.io/a.gif"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(){var e=void 0;switch(o()){case"cellular":e="cellular";break;case"ethernet":e="ethernet";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},o=function(){var e=i.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};t.default=n},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),n=a(i),o=r(4),s=a(o),u=r(48),l=a(u),d=r(1),c=a(d),f=r(17),p=a(f),h=!!n.default.XMLHttpRequest&&"withCredentials"in new n.default.XMLHttpRequest,_={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:5e3},v=function(e,t){this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=(0,c.default)({},_,t)};v.prototype.queueEvent=function(e,t){var r=(0,c.default)({},t);return h?(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(r),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):(l.default.send(this._beaconUrl,r),!0)},v.prototype.flushEvents=function(){h&&(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},v.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),n.default.clearTimeout(this._sendTimeout)},v.prototype._clearBeaconQueue=function(){var e=n.default.navigator,t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,r=this._eventQueue.slice(t);if(t>0&&(0,c.default)(r[r.length-1],(0,p.default)({mux_view_message:"event queue truncated"})),e.sendBeacon)e.sendBeacon(this._beaconUrl,JSON.stringify({events:r}));else if(n.default.XMLHttpRequest){var a=new n.default.XMLHttpRequest;a.open("POST",this._beaconUrl),a.setRequestHeader("Content-Type","application/json"),a.send(JSON.stringify({events:r}))}else l.default.send(this._beaconUrl,r[r.length-1])},v.prototype._sendBeaconQueue=function(){var e=this;if(n.default.XMLHttpRequest&&!this._postInFlight){var t=new n.default.XMLHttpRequest,r=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0,t.onreadystatechange=function(){4===t.readyState&&(200!==t.status?(e._eventQueue=r.concat(e._eventQueue),e._failureCount+=1,s.default.info("Error sending beacon: "+t.status),s.default.info(t.responseText)):e._failureCount=0,e._postInFlight=!1)},t.open("POST",this._beaconUrl),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({events:r}))}},v.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},v.prototype._startBeaconSending=function(){var e=this;n.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=n.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},t.default=v},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(15),n=a(i),o=r(0),s=a(o),u={};u.send=function(e,t){function r(){a.src=o+(i?"&rc="+i:"")}var a=new Image,i=0,o=e+"?"+n.default.stringify(t);return a.addEventListener("error",function(){i>3||s.default.setTimeout(function(){i++,r()},5e3*i)}),r(),a},t.default=u},function(e,t,r){(function(e,a){var i;(function(){"use strict";function n(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}function o(e,t,r){var a={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&r&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(a=a[/[\d.]+$/.exec(e)])&&(e="Windows "+a),e=String(e),t&&r&&(e=e.replace(RegExp(t,"i"),r)),e=u(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}function s(e,t){var r=-1,a=e?e.length:0;if("number"==typeof a&&a>-1&&a<=w)for(;++r<a;)t(e[r],r,e);else l(e,t)}function u(e){return e=h(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:n(e)}function l(e,t){for(var r in e)E.call(e,r)&&t(e[r],r,e)}function d(e){return null==e?n(e):T.call(e).slice(8,-1)}function c(e,t){var r=null!=e?typeof e[t]:"number";return!(/^(?:boolean|number|string|undefined)$/.test(r)||"object"==r&&!e[t])}function f(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function p(e,t){var r=null;return s(e,function(a,i){r=t(r,a,i,e)}),r}function h(e){return String(e).replace(/^ +| +$/g,"")}function _(e){function t(t){return p(t,function(t,r){var a=r.pattern||f(r);return!t&&(t=RegExp("\\b"+a+" *\\d+[.\\w_]*","i").exec(e)||RegExp("\\b"+a+" *\\w+-[\\w]*","i").exec(e)||RegExp("\\b"+a+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(e))&&((t=String(r.label&&!RegExp(a,"i").test(r.label)?r.label:t).split("/"))[1]&&!/[\d.]+/.test(t[0])&&(t[0]+=" "+t[1]),r=r.label||r,t=u(t[0].replace(RegExp(a,"i"),r).replace(RegExp("; *(?:"+r+"[_-])?","i")," ").replace(RegExp("("+r+")[-_.]?(\\w)","i"),"$1 $2"))),t})}function r(){return this.description||""}var a=y,i=e&&"object"==typeof e&&"String"!=d(e);i&&(a=e,e=null);var n=a.navigator||{},s=n.userAgent||"";e||(e=s);var v,m,b=i?!!n.likeChrome:/\bChrome\b/.test(e)&&!/internal|\n/i.test(T.toString()),g=i?"Object":"ScriptBridgingProxyObject",w=i?"Object":"Environment",S=i&&a.java?"JavaPackage":d(a.java),E=i?"Object":"RuntimeObject",k=/\bJava/.test(S)&&a.java,O=k&&d(a.environment)==w,P=k?"a":"α",M=k?"b":"β",D=a.document||{},q=a.operamini||a.opera,A=x.test(A=i&&q?q["[[Class]]"]:d(q))?A:q=null,R=e,j=[],I=null,L=e==s,C=L&&q&&"function"==typeof q.version&&q.version(),N=function(t){return p(t,function(t,r){return t||RegExp("\\b"+(r.pattern||f(r))+"\\b","i").exec(e)&&(r.label||r)})}([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),H=function(t){return p(t,function(t,r){return t||RegExp("\\b"+(r.pattern||f(r))+"\\b","i").exec(e)&&(r.label||r)})}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),B=t([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),F=function(t){return p(t,function(t,r,a){return t||(r[B]||r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)]||RegExp("\\b"+f(a)+"(?:\\b|\\w*\\d)","i").exec(e))&&a})}({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}}),W=function(t){return p(t,function(t,r){var a=r.pattern||f(r);return!t&&(t=RegExp("\\b"+a+"(?:/[\\d.]+|[ \\w.]*)","i").exec(e))&&(t=o(t,a,r.label||r)),t})}(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(N&&(N=[N]),F&&!B&&(B=t([F])),(v=/\bGoogle TV\b/.exec(B))&&(B=v[0]),/\bSimulator\b/i.test(e)&&(B=(B?B+" ":"")+"Simulator"),"Opera Mini"==H&&/\bOPiOS\b/.test(e)&&j.push("running in Turbo/Uncompressed mode"),"IE"==H&&/\blike iPhone OS\b/.test(e)?(v=_(e.replace(/like iPhone OS/,"")),F=v.manufacturer,B=v.product):/^iP/.test(B)?(H||(H="Safari"),W="iOS"+((v=/ OS ([\d_]+)/i.exec(e))?" "+v[1].replace(/_/g,"."):"")):"Konqueror"!=H||/buntu/i.test(W)?F&&"Google"!=F&&(/Chrome/.test(H)&&!/\bMobile Safari\b/i.test(e)||/\bVita\b/.test(B))||/\bAndroid\b/.test(W)&&/^Chrome/.test(H)&&/\bVersion\//i.test(e)?(H="Android Browser",W=/\bAndroid\b/.test(W)?W:"Android"):"Silk"==H?(/\bMobi/i.test(e)||(W="Android",j.unshift("desktop mode")),/Accelerated *= *true/i.test(e)&&j.unshift("accelerated")):"PaleMoon"==H&&(v=/\bFirefox\/([\d.]+)\b/.exec(e))?j.push("identifying as Firefox "+v[1]):"Firefox"==H&&(v=/\b(Mobile|Tablet|TV)\b/i.exec(e))?(W||(W="Firefox OS"),B||(B=v[1])):!H||(v=!/\bMinefield\b/i.test(e)&&/\b(?:Firefox|Safari)\b/.exec(H))?(H&&!B&&/[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(v+"/")+8))&&(H=null),(v=B||F||W)&&(B||F||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(W))&&(H=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(W)?W:v)+" Browser")):"Electron"==H&&(v=(/\bChrome\/([\d.]+)\b/.exec(e)||0)[1])&&j.push("Chromium "+v):W="Kubuntu",C||(C=function(t){return p(t,function(t,r){return t||(RegExp(r+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(e)||0)[1]||null})}(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",f(H),"(?:Firefox|Minefield|NetFront)"])),(v="iCab"==N&&parseFloat(C)>3&&"WebKit"||/\bOpera\b/.test(H)&&(/\bOPR\b/.test(e)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(e)&&!/^(?:Trident|EdgeHTML)$/.test(N)&&"WebKit"||!N&&/\bMSIE\b/i.test(e)&&("Mac OS"==W?"Tasman":"Trident")||"WebKit"==N&&/\bPlayStation\b(?! Vita\b)/i.test(H)&&"NetFront")&&(N=[v]),"IE"==H&&(v=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e)||0)[1])?(H+=" Mobile",W="Windows Phone "+(/\+$/.test(v)?v:v+".x"),j.unshift("desktop mode")):/\bWPDesktop\b/i.test(e)?(H="IE Mobile",W="Windows Phone 8.x",j.unshift("desktop mode"),C||(C=(/\brv:([\d.]+)/.exec(e)||0)[1])):"IE"!=H&&"Trident"==N&&(v=/\brv:([\d.]+)/.exec(e))&&(H&&j.push("identifying as "+H+(C?" "+C:"")),H="IE",C=v[1]),L){if(c(a,"global"))if(k&&(v=k.lang.System,R=v.getProperty("os.arch"),W=W||v.getProperty("os.name")+" "+v.getProperty("os.version")),O){try{C=a.require("ringo/engine").version.join("."),H="RingoJS"}catch(e){(v=a.system)&&v.global.system==a.system&&(H="Narwhal",W||(W=v[0].os||null))}H||(H="Rhino")}else"object"==typeof a.process&&!a.process.browser&&(v=a.process)&&("object"==typeof v.versions&&("string"==typeof v.versions.electron?(j.push("Node "+v.versions.node),H="Electron",C=v.versions.electron):"string"==typeof v.versions.nw&&(j.push("Chromium "+C,"Node "+v.versions.node),H="NW.js",C=v.versions.nw)),H||(H="Node.js",R=v.arch,W=v.platform,C=/[\d.]+/.exec(v.version),C=C?C[0]:null));else d(v=a.runtime)==g?(H="Adobe AIR",W=v.flash.system.Capabilities.os):d(v=a.phantom)==E?(H="PhantomJS",C=(v=v.version||null)&&v.major+"."+v.minor+"."+v.patch):"number"==typeof D.documentMode&&(v=/\bTrident\/(\d+)/i.exec(e))?(C=[C,D.documentMode],(v=+v[1]+4)!=C[1]&&(j.push("IE "+C[1]+" mode"),N&&(N[1]=""),C[1]=v),C="IE"==H?String(C[1].toFixed(1)):C[0]):"number"==typeof D.documentMode&&/^(?:Chrome|Firefox)\b/.test(H)&&(j.push("masking as "+H+" "+C),H="IE",C="11.0",N=["Trident"],W="Windows");W=W&&u(W)}if(C&&(v=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(C)||/(?:alpha|beta)(?: ?\d)?/i.exec(e+";"+(L&&n.appMinorVersion))||/\bMinefield\b/i.test(e)&&"a")&&(I=/b/i.test(v)?"beta":"alpha",C=C.replace(RegExp(v+"\\+?$"),"")+("beta"==I?M:P)+(/\d+\+?/.exec(v)||"")),"Fennec"==H||"Firefox"==H&&/\b(?:Android|Firefox OS)\b/.test(W))H="Firefox Mobile";else if("Maxthon"==H&&C)C=C.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(B))"Xbox 360"==B&&(W=null),"Xbox 360"==B&&/\bIEMobile\b/.test(e)&&j.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(H)&&(!H||B||/Browser|Mobi/.test(H))||"Windows CE"!=W&&!/Mobi/i.test(e))if("IE"==H&&L)try{null===a.external&&j.unshift("platform preview")}catch(e){j.unshift("embedded")}else(/\bBlackBerry\b/.test(B)||/\bBB10\b/.test(e))&&(v=(RegExp(B.replace(/ +/g," *")+"/([.\\d]+)","i").exec(e)||0)[1]||C)?(v=[v,/BB10/.test(e)],W=(v[1]?(B=null,F="BlackBerry"):"Device Software")+" "+v[0],C=null):this!=l&&"Wii"!=B&&(L&&q||/Opera/.test(H)&&/\b(?:MSIE|Firefox)\b/i.test(e)||"Firefox"==H&&/\bOS X (?:\d+\.){2,}/.test(W)||"IE"==H&&(W&&!/^Win/.test(W)&&C>5.5||/\bWindows XP\b/.test(W)&&C>8||8==C&&!/\bTrident\b/.test(e)))&&!x.test(v=_.call(l,e.replace(x,"")+";"))&&v.name&&(v="ing as "+v.name+((v=v.version)?" "+v:""),x.test(H)?(/\bIE\b/.test(v)&&"Mac OS"==W&&(W=null),v="identify"+v):(v="mask"+v,H=A?u(A.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(v)&&(W=null),L||(C=null)),N=["Presto"],j.push(v));else H+=" Mobile";(v=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(e)||0)[1])&&(v=[parseFloat(v.replace(/\.(\d)$/,".0$1")),v],"Safari"==H&&"+"==v[1].slice(-1)?(H="WebKit Nightly",I="alpha",C=v[1].slice(0,-1)):C!=v[1]&&C!=(v[2]=(/\bSafari\/([\d.]+\+?)/i.exec(e)||0)[1])||(C=null),v[1]=(/\bChrome\/([\d.]+)/i.exec(e)||0)[1],537.36==v[0]&&537.36==v[2]&&parseFloat(v[1])>=28&&"WebKit"==N&&(N=["Blink"]),L&&(b||v[1])?(N&&(N[1]="like Chrome"),v=v[1]||(v=v[0],v<530?1:v<532?2:v<532.05?3:v<533?4:v<534.03?5:v<534.07?6:v<534.1?7:v<534.13?8:v<534.16?9:v<534.24?10:v<534.3?11:v<535.01?12:v<535.02?"13+":v<535.07?15:v<535.11?16:v<535.19?17:v<536.05?18:v<536.1?19:v<537.01?20:v<537.11?"21+":v<537.13?23:v<537.18?24:v<537.24?25:v<537.36?26:"Blink"!=N?"27":"28")):(N&&(N[1]="like Safari"),v=v[0],v=v<400?1:v<500?2:v<526?3:v<533?4:v<534?"4+":v<535?5:v<537?6:v<538?7:v<601?8:"8"),N&&(N[1]+=" "+(v+="number"==typeof v?".x":/[.+]/.test(v)?"":"+")),"Safari"==H&&(!C||parseInt(C)>45)&&(C=v)),"Opera"==H&&(v=/\bzbov|zvav$/.exec(W))?(H+=" ",j.unshift("desktop mode"),"zvav"==v?(H+="Mini",C=null):H+="Mobile",W=W.replace(RegExp(" *"+v+"$"),"")):"Safari"==H&&/\bChrome\b/.exec(N&&N[1])&&(j.unshift("desktop mode"),H="Chrome Mobile",C=null,/\bOS X\b/.test(W)?(F="Apple",W="iOS 4.3+"):W=null),C&&0==C.indexOf(v=/[\d.]+$/.exec(W))&&e.indexOf("/"+v+"-")>-1&&(W=h(W.replace(v,""))),N&&!/\b(?:Avant|Nook)\b/.test(H)&&(/Browser|Lunascape|Maxthon/.test(H)||"Safari"!=H&&/^iOS/.test(W)&&/\bSafari\b/.test(N[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(H)&&N[1])&&(v=N[N.length-1])&&j.push(v),j.length&&(j=["("+j.join("; ")+")"]),F&&B&&B.indexOf(F)<0&&j.push("on "+F),B&&j.push((/^on /.test(j[j.length-1])?"":"on ")+B),W&&(v=/ ([\d.+]+)$/.exec(W),m=v&&"/"==W.charAt(W.length-v[0].length-1),W={architecture:32,family:v&&!m?W.replace(v[0],""):W,version:v?v[1]:null,toString:function(){var e=this.version;return this.family+(e&&!m?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(v=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(R))&&!/\bi686\b/i.test(R)?(W&&(W.architecture=64,W.family=W.family.replace(RegExp(" *"+v),"")),H&&(/\bWOW64\b/i.test(e)||L&&/\w(?:86|32)$/.test(n.cpuClass||n.platform)&&!/\bWin64; x64\b/i.test(e))&&j.unshift("32-bit")):W&&/^OS X/.test(W.family)&&"Chrome"==H&&parseFloat(C)>=39&&(W.architecture=64),e||(e=null);var U={};return U.description=e,U.layout=N&&N[0],U.manufacturer=F,U.name=H,U.prerelease=I,U.product=B,U.ua=e,U.version=H&&C,U.os=W||{architecture:null,family:null,version:null,toString:function(){return"null"}},U.parse=_,U.toString=r,U.version&&j.unshift(C),U.name&&j.unshift(H),W&&H&&(W!=String(W).split(" ")[0]||W!=H.split(" ")[0]&&!B)&&j.push(B?"("+W+")":"on "+W),j.length&&(U.description=j.join(" ")),U}var v={function:!0,object:!0},y=v[typeof window]&&window||this,m=v[typeof t]&&t,b=v[typeof e]&&e&&!e.nodeType&&e,g=m&&b&&"object"==typeof a&&a;!g||g.global!==g&&g.window!==g&&g.self!==g||(y=g);var w=Math.pow(2,53)-1,x=/\bOpera/,S=Object.prototype,E=S.hasOwnProperty,T=S.toString,k=_();y.platform=k,void 0!==(i=function(){return k}.call(t,r,t,e))&&(e.exports=i)}).call(this)}).call(t,r(14)(e),r(6))},function(e,t,r){"use strict";function a(){function e(e,t){var r=t.request_start,u=t.request_response_start,l=t.request_response_end,d=t.request_bytes_loaded;o++;var c=void 0,f=void 0;if(u?(c=u-r,f=l-u):f=l-r,f>0&&d>0){var p=d/f*8e3;s++,i+=d,n+=f,this.data.view_min_request_throughput=Math.min(this.data.view_min_request_throughput||1/0,p),this.data.view_average_request_throughput=i/n*8e3,this.data.view_request_count=o,c>0&&(a+=c,this.data.view_max_request_latency=Math.max(this.data.view_max_request_latency||0,c),this.data.view_average_request_latency=a/s)}}function t(e,t){o++,u++,this.data.view_request_count=o,this.data.view_request_failed_count=u}function r(e,t){o++,l++,this.data.view_request_count=o,this.data.view_request_canceled_count=l}var a=0,i=0,n=0,o=0,s=0,u=0,l=0;this.on("requestcompleted",e),this.on("requestfailed",t),this.on("requestcanceled",r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,r){"use strict";function a(e,t,r){var a=(0,u.findMediaElement)(t),o=n(a,3),c=o[0],f=o[1],p=o[2],h=e.log,_=e.utils.getComputedStyle,v=e.utils.secondsToMs,y={automaticErrorTracking:!0};return c?"video"!==p&&"audio"!==p?h.error("The element of `"+f+"` was not a media element."):(r=(0,s.default)(y,r),r.data=(0,s.default)({player_software:"HTML5 Video Element",player_software_version:"No Versions",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:"3.3.0"},r.data),r.getPlayheadTime=function(){return v(c.currentTime)},r.getStateData=function(){var e=this.hlsjs&&this.hlsjs.url,t=this.dashjs&&i("function"===this.dashjs.getSource)&&this.dashjs.getSource();return{player_is_paused:c.paused,player_playhead_time:v(c.currentTime),player_width:parseInt(_(c,"width")),player_height:parseInt(_(c,"height")),player_autoplay_on:c.autoplay,player_preload_on:c.preload,video_poster_url:c.poster,video_source_url:e||t||c.currentSrc,video_source_duration:v(c.duration),video_source_height:c.videoHeight,video_source_width:c.videoWidth}},c.mux=c.mux||{},c.mux.emit=function(t,r){e.emit(f,t,r)},c.mux.destroy=function(){Object.keys(c.mux.listeners).forEach(function(e){c.removeEventListener(e,c.mux.listeners[e],!1)}),delete c.mux.listeners,e.emit(f,"destroy")},c.mux.swapElement=function(t){var r=(0,u.findMediaElement)(t),a=n(r,3),i=a[0],o=a[1],l=a[2];return i?"video"!==l&&"audio"!==l?e.log.error("The element of `"+o+"` was not a media element."):(i.muxId=c.muxId,delete c.muxId,i.mux=i.mux||{},i.mux.listeners=(0,s.default)({},c.mux.listeners),delete c.mux.listeners,Object.keys(i.mux.listeners).forEach(function(e){c.removeEventListener(e,i.mux.listeners[e],!1),i.addEventListener(e,i.mux.listeners[e],!1)}),i.mux.swapElement=c.mux.swapElement,i.mux.destroy=c.mux.destroy,delete c.mux,void(c=i)):e.log.error("No element was found with the `"+o+"` query selector.")},c.mux.addHLSJS=function(t){e.addHLSJS(f,t)},c.mux.addDashJS=function(t){e.addDashJS(f,t)},c.mux.removeHLSJS=function(){e.removeHLSJS(f)},c.mux.removeDashJS=function(){e.removeDashJS(f)},e.init(f,r),e.emit(f,"playerready"),c.paused||(e.emit(f,"play"),c.readyState>2&&e.emit(f,"playing")),c.mux.listeners={},void l.forEach(function(t){("error"!==t||r.automaticErrorTracking)&&(c.mux.listeners[t]=function(){var r={};"error"===t&&(r.player_error_code=c.error&&c.error.code,r.player_error_message=c.error&&d[c.error.code]),e.emit(f,t,r)},c.addEventListener(t,c.mux.listeners[t],!1))})):h.error("No element was found with the `"+f+"` query selector.")}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){var r=[],a=!0,i=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw n}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=a;var o=r(1),s=function(e){return e&&e.__esModule?e:{default:e}}(o),u=r(10),l=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],d={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"}},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(53),n=a(i),o=r(2),s=a(o),u=r(54),l=a(u),d=r(55),c=a(d),f=r(1),p=a(f),h=r(8),_=a(h),v=r(5),y=r(3),m=a(y),b={};b.safeCall=n.default,b.safeIncrement=s.default,b.getComputedStyle=l.default,b.secondsToMs=c.default,b.assign=p.default,b.headersStringToObject=_.default,b.extractHostnameAndDomain=v.extractHostnameAndDomain,b.extractHostname=v.extractHostname,b.now=m.default.now,t.default=b},function(e,t,r){"use strict";function a(e,t,r,a){var i=a;if(e&&"function"==typeof e[t])try{i=e[t].apply(e,r)}catch(e){n.default.info("safeCall error",e)}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var i=r(4),n=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,r){"use strict";function a(e,t){if(n.default.defaultView&&n.default.defaultView.getComputedStyle)return n.default.defaultView.getComputedStyle(e,null).getPropertyValue(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var i=r(13),n=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,r){"use strict";function a(e){return Math.floor(1e3*e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a}])});})();

/**
 * Combined, minified redistributable GNU ease.js file.
 * <https://gnu.org/s/easejs>
 * Copyright (C) 2010--2017 Free Software Foundation, Inc.
 * @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
 */
'use strict';var easejs={};
(function(I,k){function E(d){throw Error("Assertion failed: "+(d||"(no failure message)"));}var h={},g=function(d){d=("/"===d.substr(0,1)?d:k+"/"+d).replace(/([^\/]+\/\.\.\/|\.\/|^\/)/g,"");var f=h[d];if(void 0===f)throw"[ease.js] Undefined module: "+d;return f.exports};(function(d,f){var a=d.exports={};k=".";var b={"public":1,"protected":2,"private":4,"static":8,"abstract":16,"const":32,virtual:64,override:128,proxy:256,weak:512},c={amods:b["public"]|b["protected"]|b["private"],virtual:b["abstract"]|
b.virtual};a.kvals=b;a.kmasks=c;a.parseKeywords=function(a){var l=a,d=[],f=0,p={};if(1!==(d=(""+a).split(/\s+/)).length)for(l=d.pop(),a=d.length;a--;){var z=d[a],x=b[z];if(!x)throw Error("Unexpected keyword for '"+l+"': "+z);p[z]=!0;f|=x}!l.match(/^_[^_]/)||f&c.amods||(p["private"]=!0,f|=b["private"]);return{name:l,keywords:p,bitwords:f}}})(h.prop_parser={},".");(function(d,f){function a(){if(!(this instanceof a))return new a;this._alt={}}d.exports={};k="util";(0,eval)("var _the_global=this");a.expose=
function(){return _the_global};a.prototype={provideAlt:function(a,c){if(void 0===_the_global[a]&&void 0===this._alt[a])return this._alt[a]=c(),this},get:function(a){return void 0!==this._alt[a]?this._alt[a]:_the_global[a]}};d.exports=a})(h["util/Global"]={},".");(function(d,f){function a(a){throw a;}function b(a,b,c){for(var e=c.length;e--;)null===c[e].match(/^[a-z_][a-z0-9_]*$/i)&&a(SyntaxError("Member "+b+" contains invalid parameter '"+c[e]+"'"))}function c(){var a=function(a,b,c){a[b]=c};return m?
function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:!1,writable:!1,configurable:!1})}:a}var e=d.exports={};k=".";var l=g("./prop_parser").parseKeywords,m;a:{if("function"===typeof Object.defineProperty)try{Object.defineProperty({},"x",{});m=!0;break a}catch(L){}m=!1}e.Global=g("./util/Global");e.freeze="function"===typeof Object.freeze?Object.freeze:function(a){};e.definePropertyFallback=function(a){if(void 0===a)return!m;m=!a;e.defineSecureProp=c();return e};e.defineSecureProp=c();e.clone=
function p(a,b){b=!!b;if(a instanceof Array){if(!b)return a.slice(0);for(var c=[],e=0,l=a.length;e<l;e++)c.push(p(a[e],b));return c}if("function"!==typeof a&&a instanceof Object){c={};e=Object.prototype.hasOwnProperty;for(l in a)e.call(a,l)&&(c[l]=b?p(a[l]):a[l]);return c}return a};e.copyTo=function(a,b,c){c=!!c;var l;if(!(a instanceof Object&&b instanceof Object))throw TypeError("Must provide both source and destination objects");if(m)for(var d in b)l=Object.getOwnPropertyDescriptor(b,d),l.get||
l.set?Object.defineProperty(a,d,l):a[d]=c?e.clone(b[d],!0):b[d];else for(d in b)a[d]=c?e.clone(b[d],!0):b[d];return a};e.propParse=function(c,d,f){var g=function(){},h=d.each||void 0,L=d.property||g,k=d.method||g,g=d.getset||g,H=d.keywordParser||l,n=d._throw||a,q=Object.prototype.hasOwnProperty,r={},F="",r={},A=null,G=!1,K=!1,B;for(B in c)if(q.call(c,B)){m&&(F=Object.getOwnPropertyDescriptor(c,B),G=F.get,K=F.set);A="function"===typeof G?void 0:c[B];r=H(B)||{};F=r.name||B;r=r.keywords||{};if(d.assumeAbstract||
r["abstract"]&&!r.override)r["abstract"]=!0,A instanceof Array||n(TypeError("Missing parameter list for abstract method: "+F)),b(n,F,A),A=e.createAbstractMethod.apply(this,A);h&&h.call(f,F,A,r);G||K?g.call(f,F,G,K,r):"function"===typeof A||r.proxy?k.call(f,F,A,e.isAbstractMethod(A),r):L.call(f,F,A,r)}};e.createAbstractMethod=function(a){for(var b=[],c=arguments.length;c--;)b[c]=arguments[c];c=function(){throw Error("Cannot call abstract method");};e.defineSecureProp(c,"abstractFlag",!0);e.defineSecureProp(c,
"definition",b);e.defineSecureProp(c,"__length",arguments.length);return c};e.isAbstractMethod=function(a){return"function"===typeof a&&!0===a.abstractFlag?!0:!1};e.arrayShrink=function(a){for(var b=[],c=0,e=a.length;c<e;c++){var d=a[c];void 0!==d&&b.push(d)}return b};e.getOwnPropertyDescriptor=m&&Object.getOwnPropertyDescriptor||function(a,b){return Object.prototype.hasOwnProperty.call(a,b)?{get:void 0,set:void 0,writable:!0,enumerable:!0,configurable:!0,value:a[b]}:void 0};e.getPrototypeOf=Object.getPrototypeOf||
function(){};e.getPropertyDescriptor=function(a,b,c){c=!!c;var d=e.getOwnPropertyDescriptor(a,b);a=e.getPrototypeOf(a);return d||!a||c&&!e.getPrototypeOf(a)?d:e.getPropertyDescriptor(a,b,c)};e.defineSecureProp(e.getPropertyDescriptor,"canTraverse",Object.getPrototypeOf?!0:!1)})(h.util={},".");(function(d,f){function a(){if(!(this instanceof a))return new a;this.___$$id$$=e+c(1E8*b())}d.exports={};k="util/symbol";var b=Math.random,c=Math.floor,e=" "+String.fromCharCode(c(10*b())%31+1)+"$";a.prototype=
{toString:function(){return this.___$$id$$}};d.exports=a})(h["util/symbol/FallbackSymbol"]={},".");(function(d,f){d.exports={};k="util";var a=g("./symbol/FallbackSymbol"),b=g("./Global").expose();d.exports=b.Symbol||a})(h["util/Symbol"]={},".");(function(d,f){function a(){if(!(this instanceof a))return new a}d.exports={};k="warn";a.prototype={handle:function(a){}};d.exports=a})(h["warn/DismissiveHandler"]={},".");(function(d,f){function a(b){if(!(this instanceof a))return new a(b);this._console=b||
{}}d.exports={};k="warn";a.prototype={handle:function(a){var c=this._console.warn||this._console.log;c&&c.call(this._console,"Warning: "+a.message)}};d.exports=a})(h["warn/LogHandler"]={},".");(function(d,f){function a(){if(!(this instanceof a))return new a}d.exports={};k="warn";a.prototype={handle:function(a){throw a.getError();}};d.exports=a})(h["warn/ThrowHandler"]={},".");(function(d,f){function a(b){if(!(this instanceof a))return new a(b);if(!(b instanceof Error))throw TypeError("Must provide exception to wrap");
Error.prototype.constructor.call(this,b.message);this.message=b.message;this.name="Warning";this._error=b;this.stack=b.stack&&b.stack.replace(/^.*?\n+/,this.name+": "+this.message+"\n")}d.exports={};k="warn";a.prototype=Error();a.prototype.constructor=a;a.prototype.name="Warning";a.prototype.getError=function(){return this._error};d.exports=a})(h["warn/Warning"]={},".");(function(d,f){d.exports={};k=".";d.exports={Warning:g("./warn/Warning"),DismissiveHandler:g("./warn/DismissiveHandler"),LogHandler:g("./warn/LogHandler"),
ThrowHandler:g("./warn/ThrowHandler")}})(h.warn={},".");(function(d,f){function a(a,b){try{if(b instanceof a)return!0}catch(c){}return!1}function b(a){a=A(a);var b;b=a.name;b=G.call(y,b)?y[b]:void 0;void 0!==b&&(a.name=b);"__construct"===a.name&&(a.keywords.virtual=!0);return a}function c(a,b,c){b=this.defs;if(!0===B[a])throw Error(a+" is reserved");if(G.call(b,a)&&!c.weak&&!b[a].weak)throw Error("Cannot redefine method '"+a+"' in same declaration");b[a]=c}function e(a,b,c){var e=p(c)?this.static_members.props:
this.prop_init;this._cb._memberBuilder.buildProp(e,null,a,b,c,this.base)}function l(a,b,c,e){var d=p(e)?this.static_members.methods:this.members,l=p(e)?this.staticInstLookup:n.getMethodInstance;this._cb._memberBuilder.buildGetterSetter(d,null,a,b,c,e,l,this.class_id,this.base)}function m(a,b,c,e){var d=p(e),l=d?this.static_members.methods:this.members,d=d?this.staticInstLookup:n.getMethodInstance;if(!0===J[a]&&(e["protected"]||e["private"]))throw TypeError(a+" must be public");this._cb._memberBuilder.buildMethod(l,
null,a,b,e,d,this.class_id,this.base,this.state)&&(c?(this.abstract_methods[a]=!0,this.abstract_methods.__length++):G.call(this.abstract_methods,a)&&!1===c&&(delete this.abstract_methods[a],this.abstract_methods.__length--),e.virtual?this.virtual_members[a]=!0:delete this.virtual_members[a])}function h(a,b,c,e){if(a.___$$abstract$$){if(!e&&0===c.__length)throw TypeError("Class "+(b||"(anonymous)")+" was declared as abstract, but contains no abstract members");}else if(0<c.__length)if(e)a.___$$abstract$$=
!0;else throw TypeError("Class "+(b||"(anonymous)")+" contains abstract members and must therefore be declared abstract");}function p(a){return a["static"]||a["const"]?!0:!1}function z(a,b,c){return(b=b[t]?n.getMeta(b):void 0)?a[t].meta=q.clone(b._lazy?c:b,!0):a[t].meta={implemented:[]}}function x(a,b){q.defineSecureProp(a,"__iid",b)}function w(a){var b=function(){};b.prototype=a;q.defineSecureProp(a,t,{});a[t].vis=new b;a[t].inst=a}function v(a){var b=function(b){return d.exports.isInstanceOf(b,
a)};q.defineSecureProp(a,"isInstanceOf",b);q.defineSecureProp(a,"isA",b)}function u(a,b){var c=0<b.__length?!0:!1;q.defineSecureProp(a,"isAbstract",function(){return c})}function D(a,b){q.defineSecureProp(a,"__cid",b);q.defineSecureProp(a.prototype,"__cid",b)}function H(a,b){a.___$$final$$=!!b.___$$final$$;a.___$$abstract$$=!!b.___$$abstract$$;b.___$$final$$=b.___$$abstract$$=void 0}var n=d.exports={};k=".";var q=g("./util"),r=g("./warn").Warning,F=g("./util/Symbol"),A=g("./prop_parser").parseKeywords,
G=Object.prototype.hasOwnProperty,K=!1===Object.prototype.propertyIsEnumerable.call({toString:function(){}},"toString")?!0:!1,B={__initProps:!0},y={constructor:"__construct"},J={__construct:!0,__mixin:!0,toString:!0,__toString:!0},t=F();d.exports=n=function(a,b,c,e){if(!(this instanceof n))return new d.exports(a,b,c,e);this._warnHandler=a;this._memberBuilder=b;this._visFactory=c;this._ector=e;this._instanceId=this._classId=0;this._spropInternal=!1};n.ClassBase=function(){};q.defineSecureProp(n.ClassBase,
"__cid",0);n.ClassBase.$=function(a,b){if(void 0!==b)throw ReferenceError("Cannot set value of undeclared static property '"+a+"'");};n.getReservedMembers=function(){return q.clone(B,!0)};n.getForcedPublicMethods=function(){return q.clone(J,!0)};n.getMeta=function(a){return(a[t]||{}).meta||null};n.masquerade=function(a){q.defineSecureProp(a,t,{});z(a,n.ClassBase);return a};n.isInstanceOf=function(b,c){return b&&c?!!(b.__isInstanceOf||a)(b,c):!1};d.exports.isClass=function(a){a=a||_dummyclass;var b=
d.exports.getMeta(a);return null!==b&&b.implemented||a.prototype instanceof d.exports.ClassBase?!0:!1};n.prototype.build=function(a,b){var c=arguments,e=c.length,l=(0<e?c[e-1]:0)||{},m=(1<e?c[e-2]:0)||n.ClassBase,f=this._getBase(m),c="",p=!1,A=this._memberBuilder.initMembers(),g=this._memberBuilder.initMembers(f),B={methods:this._memberBuilder.initMembers(),props:this._memberBuilder.initMembers()},k=n.getMeta(f.constructor)||{},J=q.clone(k.abstractMethods)||{__length:0},G=q.clone(k.virtualMembers)||
{};if(d.exports.isClass(l))throw TypeError(1<e?"Expected class definition, but found class "+l.toString():"Missing second argument to extend class "+l.toString());if(!0===m.___$$final$$)throw Error("Cannot extend final class "+(m[t].meta.name||"(anonymous)"));(c=l.__name)&&delete l.__name;void 0!==(p=l.___$$auto$abstract$$)&&delete l.___$$auto$abstract$$;K&&l.toString!==Object.prototype.toString&&(l.__toString=l.toString);this._classId++;void 0===(f[t]||{}).vis&&this._discoverProtoProps(f,A);try{this.buildMembers(l,
this._classId,m,A,{all:g,"abstract":J,"static":B,virtual:G},function(a){return y.___$$svis$$})}catch(x){if(x instanceof r)this._warnHandler.handle(x);else throw x;}this._ector&&this._ector.isError(m)&&(l.message="",l.stack="",g["public"].__construct=this._ector.createCtor(m,c,g["public"].__construct));f.___$$parent$$=m.prototype;var y=this.createCtor(c,J,g);this.initStaticVisibilityObj(y);var w=this,e=function(a,b){w.attachStatic(a,B,m,b)};e(y,!1);this._attachPropInit(f,A,g,y,this._classId);y.prototype=
f;y.prototype.constructor=y;y.___$$props$$=A;y.___$$methods$$=g;y.___$$sinit$$=e;H(y,l);h(y,c,J,p);q.defineSecureProp(f,"__self",y.___$$svis$$);l=z(y,m,k);l.abstractMethods=J;l.virtualMembers=G;l.name=c;u(y,J);D(y,this._classId);y.asPrototype=function(){y[t].extending=!0;var a=new y;y[t].extending=!1;return a};return y};n.prototype._getBase=function(a){switch(typeof a){case "function":return a[t]?a.asPrototype():new a;case "object":return a}throw TypeError("Must extend from Class, constructor or object");
};n.prototype._discoverProtoProps=function(a,b){var c=Object.hasOwnProperty,e;for(e in a){var l=a[e];c.call(a,e)&&"function"!==typeof l&&this._memberBuilder.buildProp(b,null,e,l,{})}};n.prototype.buildMembers=function(a,d,f,p,A,g){var h={_cb:this,prop_init:p,class_id:d,base:f,staticInstLookup:g,defs:{},state:{},members:A.all,abstract_methods:A["abstract"],static_members:A["static"],virtual_members:A.virtual},B={each:c,property:e,getset:l,method:m};if(a.___$$parser$$){var z=a.___$$parser$$;delete a.___$$parser$$;
d=function(a,b){B[a]=function(){for(var c=[],e=arguments.length;e--;)c[e]=arguments[e];c.push(b);z[a].apply(h,c)}};z.each&&d("each",B.each);z.property&&d("property",B.property);z.getset&&d("getset",B.getset);z.method&&d("method",B.method)}B.keywordParser=b;q.propParse(a,B,h);this._memberBuilder.end(h.state)};n.prototype.createCtor=function(a,b,c){a=0===b.__length?this.createConcreteCtor(a,c):this.createAbstractCtor(a);q.defineSecureProp(a,t,{});return a};n.prototype.createConcreteCtor=function(a,
b){function c(){if(!(this instanceof c))return e=arguments,new c;w(this);this.__initProps();if(!c[t].extending){x(this,++l._instanceId);var d="function"===typeof this.___$$ctor$pre$$;d&&c.prototype.hasOwnProperty("___$$ctor$pre$$")&&(this.___$$ctor$pre$$(t),d=!1);"function"===typeof this.__construct&&this.__construct.apply(this,e||arguments);d&&this.___$$ctor$pre$$(t);"function"===typeof this.___$$ctor$post$$&&this.___$$ctor$post$$(t);e=null;v(this);G.call(b["public"],"toString")||(this.toString=
b["public"].__toString||(a?function(){return"#<"+a+">"}:function(){return"#<anonymous>"}))}}var e=null,l=this;c.toString=a?function(){return a}:function(){return"(Class)"};return c};n.prototype.createAbstractCtor=function(a){var b=function(){if(!b[t].extending)throw Error("Abstract class "+(a||"(anonymous)")+" cannot be instantiated");};b.toString=a?function(){return a}:function(){return"(AbstractClass)"};return b};n.prototype._attachPropInit=function(a,b,c,e,d){var l=this;q.defineSecureProp(a,"__initProps",
function(e){e=!!e;var m=a.___$$parent$$,f=this[t].vis,m=m&&m.__initProps;"function"===typeof m&&m.call(this,!0);m=l._visFactory.createPropProxy(this,f,b["public"]);f=f[d]=l._visFactory.setup(m,b,c);e||q.defineSecureProp(f,"__inst",this)})};n.prototype.initStaticVisibilityObj=function(a){var b=this,c=function(){};c.prototype=a;c=new c;a.___$$svis$$=c;c.$=function(){b._spropInternal=!0;var c=a.$.apply(a,arguments);b._spropInternal=!1;return c}};n.prototype.attachStatic=function(a,b,c,e){var d=b.methods,
l=b.props,m=this;(b=c.___$$sinit$$)&&b(a,!0);e||(a.___$$sprops$$=l,q.defineSecureProp(a,"$",function(b,e){var d=!1,f=this.___$$sprops$$?this:a,p=f!==a,d=G.call(l["public"],b)&&"public";!d&&m._spropInternal&&(d=G.call(l["protected"],b)&&"protected"||!p&&G.call(l["private"],b)&&"private");if(!1===d)return(c.__cid&&c.$||n.ClassBase.$).apply(f,arguments);d=l[d][b];if(1<arguments.length){if(d[1]["const"])throw TypeError("Cannot modify constant property '"+b+"'");d[0]=e;return f}return d[0]}));q.copyTo(a,
d["public"],!0);q.copyTo(a.___$$svis$$,d["protected"],!0);e||q.copyTo(a.___$$svis$$,d["private"],!0)};n.getMethodInstance=function(a,b){if(void 0===a)return null;var c=a[t],e;return a.__iid&&c&&(e=c.vis)?e[b]:null}})(h.ClassBuilder={},".");(function(d,f){function a(a){return function(){return this.___$$super$$.prototype[a].apply(this.___$$pmo$$,arguments)}}function b(a,b,e){if(b["private"])return(b["public"]||b["protected"])&&c(e),a["private"];if(b["protected"])return(b["public"]||b["private"])&&
c(e),a["protected"];(b["private"]||b["protected"])&&c(e);return a["public"]}function c(a){throw TypeError("Only one access modifier may be used for definition of '"+a+"'");}function e(a,b,c){for(var d=h.length,l=null;d--;)if(l=m.getPropertyDescriptor(a[h[d]],b,!0))return{get:l.get,set:l.set,member:l.value};return void 0!==c?(a=c.___$$methods$$,d=c.___$$props$$,c=((c.prototype||{}).___$$parent$$||{}).constructor,a&&e(a,b,c)||d&&e(d,b,c)||null):null}var l=d.exports={};k=".";var m=g("./util"),h=["public",
"protected","private"];d.exports=function(a,b,c,e){if(!(this instanceof d.exports))return new d.exports(a,b,c,e);this._wrapMethod=a;this._wrapOverride=b;this._wrapProxy=c;this._validate=e};l=d.exports.prototype;l.initMembers=function(a,b,c){return{"public":a||{},"protected":b||{},"private":c||{}}};l.buildMethod=function(c,d,l,m,f,g,h,k,L){var q=this._methodKeywordDefaults,q=(d=(k=e(c,l,k))?k.member:null)&&(d.___$$keywords$$||q);c=b(c,f,l);this._validate.validateMethod(l,m,f,k,q,L);if(!f.proxy||d&&
f.weak)if(d){if(f.weak&&!q["abstract"])return!1;if(f.override||q["abstract"])L=f["abstract"]?a(l):d,c[l]=this._overrideMethod(L,m,g,h);else throw Error("Method hiding not yet implemented (we should never get here; bug).");}else c[l]=f["abstract"]||f["private"]?m:this._overrideMethod(null,m,g,h);else c[l]=this._createProxy(m,g,h,l,f);c[l].___$$keywords$$=f;return!0};l._methodKeywordDefaults={virtual:!0};l.buildProp=function(a,c,d,l,m,f){f=(c=e(a,d,f))?c.member:null;this._validate.validateProperty(d,
l,m,c,f?f[1]:null);b(a,m,d)[d]=[l,m]};l.buildGetterSetter=function(a,c,d,l,m,f,g,h,k){c=e(a,d,k);this._validate.validateGetterSetter(d,{},f,c,c&&c.get?c.get.___$$keywords$$:null);l&&(l=this._overrideMethod(null,l,g,h),l.___$$keywords$$=f);Object.defineProperty(b(a,f,d),d,{get:l,set:m?this._overrideMethod(null,m,g,h):m,enumerable:!0,configurable:!1})};l._createProxy=function(a,b,c,e,d){return this._wrapProxy.wrapMethod(a,null,c,b,e,d)};l._overrideMethod=function(a,b,c,e){var d=null,d=(a?this._wrapOverride:
this._wrapMethod).wrapMethod(b,a,e,c||function(){});m.defineSecureProp(d,"__length",b.__length||b.length);return d};l._getVisibilityValue=function(a){return a["protected"]?1:a["private"]?2:0};l.end=function(a){this._validate&&this._validate.end(a)}})(h.MemberBuilder={},".");(function(d,f){var a=d.exports={};k=".";var b=g("./MemberBuilder");d.exports=a=function(a,b){if(!(this instanceof d.exports))return new d.exports(a,b);d.exports.prototype.constructor.call(this,a,b)};d.exports.prototype=new b;d.exports.constructor=
d.exports;a.prototype.buildGetterSetter=function(){throw Error("Getters/setters are unsupported in this environment");}})(h.FallbackMemberBuilder={},".");(function(d,f){var a=d.exports={};k=".";var b=g("./util");d.exports=a=function(){if(!(this instanceof a))return new d.exports};a.prototype.setup=function(a,b,d){var m=this._createPrivateLayer(a,b);this._doSetup(a,b["public"]);this._doSetup(a,b["protected"],d["protected"],!0);this._doSetup(m,b["private"],d["private"]);return m};a.prototype._createPrivateLayer=
function(a,b){var d=function(){};d.prototype=a;d=new d;this.createPropProxy(a,d,b["protected"]);return d};a.prototype._doSetup=function(a,e,d,m){var f=Array.prototype.hasOwnProperty;if(void 0!==d)for(var g in d)if(f.call(d,g)){var h=a[g],k=h&&h.___$$keywords$$;if(!m||void 0===h||k["private"]||k["protected"])a[g]=d[g]}for(var w in e)f.call(e,w)&&(a[w]=b.clone(e[w][0]))};a.prototype.createPropProxy=function(a,b,d){var m=Object.prototype.hasOwnProperty,f;for(f in d)m.call(d,f)&&function(d){b[d]=void 0;
Object.defineProperty(b,d,{set:function(b){a[d]=b},get:function(){return a[d]},enumerable:!0})}.call(null,f);return b}})(h.VisibilityObjectFactory={},".");(function(d,f){var a=d.exports={};k=".";d.exports=a=function(){if(!(this instanceof a))return new d.exports};a.prototype=g("./VisibilityObjectFactory")();a.prototype._createPrivateLayer=function(a,c){return a};a.prototype.createPropProxy=function(a,c,e){return a}})(h.FallbackVisibilityObjectFactory={},".");(function(d,f){var a=d.exports={};k=".";
d.exports=a=function(a){if(!(this instanceof d.exports))return new d.exports(a);this._warningHandler=a||function(){}};a.prototype._initState=function(a){if(a.__vready)return a;a.warn={};a.__vready=!0;return a};a.prototype.end=function(a){for(var c in a.warn){var e=a.warn[c],d;for(d in e)this._warningHandler(e[d])}a.__vready=!1};a.prototype.validateMethod=function(a,c,e,d,m,f){this._initState(f);var g=d?d.member:null;if(e["abstract"]&&e["private"])throw TypeError("Method '"+a+"' cannot be both private and abstract");
if(e["const"])throw TypeError("Cannot declare method '"+a+"' as constant; keyword is redundant");if(e.virtual&&e["static"])throw TypeError("Cannot declare static method '"+a+"' as virtual");if(d&&(d.get||d.set))throw TypeError("Cannot override getter/setter '"+a+"' with method");if(e.proxy){if("string"!==typeof c)throw TypeError("Cannot declare proxy method '"+a+"'; string value expected");if(e["abstract"])throw TypeError("Proxy method '"+a+"' cannot be abstract");}if(g){if(m["private"])throw TypeError("Private member name '"+
a+"' conflicts with supertype");if("function"!==typeof g)throw TypeError("Cannot override property '"+a+"' with method");if(e.override&&!m.virtual&&!m.override){if(!e["abstract"])throw TypeError("Cannot override non-virtual method '"+a+"'");if(!m["abstract"])throw TypeError("Cannot perform abstract override on non-abstract method '"+a+"'");}if(e["abstract"]&&!e.override&&!e.weak&&!m["abstract"])throw TypeError("Cannot override concrete method '"+a+"' with abstract method");d=void 0===g.__length?g.length:
g.__length;c=void 0===c.__length?c.length:c.__length;e.proxy&&(c=NaN);e.weak&&!m["abstract"]&&(g=d,d=c,c=g);if(c<d)throw TypeError("Declaration of method '"+a+"' must be compatible with that of its supertype");if(this._getVisibilityValue(m)<this._getVisibilityValue(e))throw TypeError("Cannot de-escalate visibility of method '"+a+"'");if(!(e.override||m["abstract"]||e.weak))throw TypeError("Attempting to override method '"+a+"' without 'override' keyword");e.weak&&m.override&&delete (f.warn[a]||{}).no}else e.override&&
(e=Error("Method '"+a+"' using 'override' keyword without super method"),(f.warn[a]=f.warn[a]||{}).no=e)};a.prototype.validateProperty=function(a,c,e,d,m){if(c=d?d.member:null){if(m["private"])throw TypeError("Private member name '"+a+"' conflicts with supertype");if("function"===typeof c)throw new TypeError("Cannot override method '"+a+"' with property");if(this._getVisibilityValue(m)<this._getVisibilityValue(e))throw TypeError("Cannot de-escalate visibility of property '"+a+"'");}if(d&&(d.get||
d.set))throw TypeError("Cannot override getter/setter '"+a+"' with property");if(e["abstract"])throw TypeError("Property '"+a+"' cannot be declared as abstract");if(e["static"]&&e["const"])throw TypeError("Static keyword cannot be used with const for property '"+a+"'");if(e.virtual)throw TypeError("Cannot declare property '"+a+"' as virtual");};a.prototype.validateGetterSetter=function(a,c,e,d,m){c=d?d.member:null;d=d&&(d.get||d.set)?!0:!1;if(e["abstract"])throw TypeError("Cannot declare getter/setter '"+
a+"' as abstract");if(e["const"])throw TypeError("Cannot declare const getter/setter '"+a+"'");if(e.virtual&&e["static"])throw TypeError("Cannot declare static method '"+a+"' as virtual");if(c||d){if(m&&m["private"])throw TypeError("Private member name '"+a+"' conflicts with supertype");if(!d)throw TypeError("Cannot override method or property '"+a+"' with getter/setter");if(!m||!m.virtual)throw TypeError("Cannot override non-virtual getter/setter '"+a+"'");if(!e.override)throw TypeError("Attempting to override getter/setter '"+
a+"' without 'override' keyword");if(this._getVisibilityValue(m||{})<this._getVisibilityValue(e))throw TypeError("Cannot de-escalate visibility of getter/setter '"+a+"'");}else e.override&&this._warningHandler(Error("Getter/setter '"+a+"' using 'override' keyword without super getter/setter"))};a.prototype._getVisibilityValue=function(a){return a["protected"]?1:a["private"]?2:0}})(h.MemberBuilderValidator={},".");(function(d,f){var a=d.exports={};k=".";d.exports=a=function(b){if(!(this instanceof
a))return new d.exports(b);this._factory=b};a.prototype.wrapMethod=function(a,c,e,d,m,f){return this._factory(a,c,e,d,m,f)}})(h.MethodWrapperFactory={},".");(function(d,f){var a=d.exports={};k=".";a.standard={wrapOverride:function(a,c,e,d){var m=function(){var m=d(this,e)||this||{},f=void 0,g=m.__super;m.__super=c;f=a.apply(m,arguments);m.__super=g;return f===m?this:f};m["super"]=c;return m},wrapNew:function(a,c,e,d){return function(){var c=d(this,e)||this,f=void 0,f=a.apply(c,arguments);return f===
c?this:f}},wrapProxy:function(a,c,e,d,f,g){var h=g&&g["static"];c=function(){var c=d(this,e)||this,g=void 0,c=h?c.$(a):c[a];if(null===c||"object"!==typeof c||"function"!==typeof c[f])throw TypeError("Unable to proxy "+f+"() call to '"+a+"'; '"+a+"' is undefined or '"+f+"' is not a function.");g=c[f].apply(c,arguments);return g===c?this:g};c.__length=NaN;return c}}})(h.MethodWrappers={},".");(function(d,f){var a=d.exports={};k=".";var b=g("./util"),c=g("./VisibilityObjectFactory"),e=g("./FallbackVisibilityObjectFactory");
a.fromEnvironment=function(){return b.definePropertyFallback()?e():c()}})(h.VisibilityObjectFactoryFactory={},".");(function(d,f){function a(b){if(!(this instanceof a))return new a(b);if("function"!==typeof b)throw TypeError("Expected constructor for error base");this._base=b;this._initDataSupport(b)}d.exports={};k="ctor";a.prototype={_stackre:/^(?:.+?\n\s+at )?.*?__\$\$ector\$\$__.*(?:\n|$)((?:.*?[@(](.*?):(\d+)(?::(\d+))?.*?\n)?(?:.|\n)*)?$/,_base:{},createCtor:function(a,c,e){function d(c){this.message=
c;f._setStackTrace(this,f._base,a);e&&e.apply(this,arguments)}if("function"!==typeof a)throw TypeError("Expected constructor for supertype");if(void 0!==e&&"function"!==typeof e)throw TypeError("Expected function as `after' argument");var f=this;void 0!==c&&(d.prototype.name=c);return d},_setStackTrace:function(a,c,e){"function"===typeof c.captureStackTrace?c.captureStackTrace(a,a.constructor):(c=new e,c=this._parseStack(c.stack),a.stack=c.stripped,this._lineSupport&&(a.lineNumber=c.line),this._columnSupport&&
(a.columnNumber=c.column),this._filenameSupport&&(a.fileName=c.filename))},_parseStack:function(a){var c="string"===typeof a?a.match(this._stackre):null;return c?{full:a,stripped:c[1]||"",filename:c[2]||void 0,line:c[3]||void 0,column:c[4]||void 0}:{full:a,stripped:a}},_initDataSupport:function(a){a=new a;var c=Object.hasOwnProperty;this._lineSupport=void 0!==a.lineNumber||c.call(a,"lineNumber");this._columnSupport=void 0!==a.columnNumber||c.call(a,"columnNumber");this._filenameSupport=void 0!==a.fileName||
c.call(a,"fileName")},isError:function(a){return a===this._base||a.prototype instanceof this._base}};d.exports=a})(h["ctor/ErrorCtor"]={},".");(function(d,f){function a(){}function b(a){if(1<arguments.length)throw Error("Expecting one argument for Interface definition; "+arguments.length+" given.");return n(a)}function c(a,b){if(2<arguments.length)throw Error("Expecting two arguments for definition of named Interface '"+a+"'; "+arguments.length+" given.");if("object"!==typeof b)throw TypeError("Unexpected value for definition of named Interface '"+
a+"'; object expected");b.__name=a;return n(b)}function e(a,b){b.message="Failed to define interface "+(a?a:"(anonymous)")+": "+b.message;throw b;}function l(a){w.defineSecureProp(a,"extend",function(a){return n(this,a)})}function m(a,b){a.toString=b?function(){return"[object Interface <"+b+">]"}:function(){return"[object Interface]"}}function h(a){w.defineSecureProp(a,"isCompatible",function(b){return 0===p(a,b).length})}function p(a,b){var c=[];w.propParse(a.prototype,{method:function(a,e,d,l){"function"!==
typeof b[a]?c.push([a,"missing"]):b[a].length<e.__length&&c.push([a,"incompatible"])}});return c}function z(a){w.defineSecureProp(a,"__isInstanceOf",function(a,b){return x(a,b)})}function x(a,b){var c=b.constructor,e;if(!b.__cid||!(e=H.getMeta(c)))return 0===p(a,b).length;c=e.implemented;for(e=c.length;e--;)if(c[e]===a)return!0;return!1}d.exports={};k=".";var w=g("./util"),v=g("./MethodWrapperFactory"),u=g("./MethodWrappers").standard,D=g("./MemberBuilder")(v(u.wrapNew),v(u.wrapOverride),v(u.wrapProxy),
g("./MemberBuilderValidator")()),H=g("./ClassBuilder");d.exports=function(a,e){var d=null;switch(typeof a){case "object":d=b.apply(null,arguments);break;case "string":d=c.apply(null,arguments);break;default:throw TypeError("Expecting anonymous interface definition or named interface definition");}return d};d.exports.extend=function(){return n.apply(this,arguments)};d.exports.isInterface=function(b){b=b||{};return b.prototype instanceof a?!0:!1};var n=function(b){function c(a){return function(){if(!b)throw Error("Interface "+
(a?a+" ":"")+" cannot be instantiated");}}return function(){b=!0;var d=arguments,f=d.length,g=(0<f?d[f-1]:0)||{},d=new ((1<f?d[f-2]:0)||a),k="",B={},y=D.initMembers(d,d,d);(k=g.__name)&&delete g.__name;if(!(d instanceof a))throw new TypeError("Interfaces may only extend other interfaces");f=c(k);w.propParse(g,{assumeAbstract:!0,_throw:function(a){e(k,a)},property:function(){e(k,TypeError("Unexpected internal error"))},getset:function(){e(k,TypeError("Unexpected internal error"))},method:function(a,
b,c,d){(d["protected"]||d["private"])&&e(k,TypeError("Member "+a+" must be public"));D.buildMethod(y,null,a,b,d,null,0,{},B)}});l(f);m(f,k);h(f);z(f);f.prototype=d;f.constructor=f;w.freeze(f);b=!1;return f}}(!1);d.exports.isInstanceOf=x})(h["interface"]={},".");(function(d,f){function a(a){if(1<arguments.length)throw Error("Expecting one argument for anonymous Class definition; "+arguments.length+" given.");return p(a)}function b(a,b){if(2<arguments.length)throw Error("Expecting at most two arguments for definition of named Class '"+
a+"'; "+arguments.length+" given.");if(void 0===b)return c(a);if("object"!==typeof b)throw TypeError("Unexpected value for definition of named Class '"+a+"'; object expected");b.__name=a;return p(b)}function c(a){return{extend:function(){for(var b=[],c=arguments.length;c--;)b[c]=arguments[c];b[b.length-1].__name=a;return p.apply(null,b)},implement:function(){for(var b=[],c=arguments.length;c--;)b[c]=arguments[c];return e(null,b,a)},use:function(){for(var a=[],b=arguments.length;b--;)a[b]=arguments[b];
return l(A,a)}}}function e(a,b,c){var e={extend:function(){var e=arguments.length,d=arguments[e-1],l=1<e?arguments[e-2]:null;if(2<e)throw Error("Expecting no more than two arguments for extend()");if(a&&l)throw Error("Cannot override parent "+a.toString()+" with "+l.toString()+" via extend()");c&&(d.__name=c);b.push(a||l||p({}));return p.call(null,K.apply(this,b),d)},use:function(){for(var a=[],b=arguments.length;b--;)a[b]=arguments[b];return l(function(){return e.__createBase()},a)},__createBase:function(){return e.extend({})}};
return e}function l(a,b,c){m(b);var e=function(){return d().apply(null,arguments)},d=function(){if(!c)throw TypeError("Cannot instantiate incomplete class definition; did you forget to call `extend'?");return h(a(),b)};e.extend=function(){var c=arguments.length,e=arguments[c-1],c=1<c?arguments[c-2]:null,d=a();return p.call(null,h(d||c,b),e)};e.use=function(){for(var a=[],b=arguments.length;b--;)a[b]=arguments[b];return l(function(){return e.__createBase()},a,c)};e.__createBase=function(){return e.extend({})};
e.asPrototype=function(){return d().asPrototype()};e.__isInstanceOf=H.isInstanceOf;D.masquerade(e);D.getMeta(e)._lazy=!0;return e}function m(a){for(var b in a)if("function"!==typeof a[b].__mixin)throw TypeError("Cannot mix in non-trait "+b);}function h(a,b){for(var c={___$$auto$abstract$$:!0},e=[],d=0,l=b.length;d<l;d++)b[d].__mixin(c,e,a||D.ClassBase);c=p.call(null,a,c);e=D.getMeta(c).implemented;d=0;for(l=b.length;d<l;d++)e.push(b[d]),b[d].__mixinImpl(e);return c}function p(a,b){for(var c=[],e=
arguments.length;e--;)c[e]=arguments[e];c=F.build.apply(F,c);z(c);x(c);w(c);u.freeze(c);return c}function z(a){u.defineSecureProp(a,"extend",function(a){return p(this,a)})}function x(a){u.defineSecureProp(a,"implement",function(){for(var b=[],c=arguments.length;c--;)b[c]=arguments[c];return e(a,b)})}function w(a){u.defineSecureProp(a,"use",function(){for(var b=[],c=arguments.length;c--;)b[c]=arguments[c];return l(function(){return a},b,!0)})}d.exports={};k=".";var v="undefined"!==typeof console?console:
void 0,u=g("./util"),D=g("./ClassBuilder"),H=g("./interface"),n=g("./warn"),q=n.Warning,r=n.LogHandler(v),v=g("./MethodWrapperFactory"),n=g("./MethodWrappers").standard,F=D(r,g("./MemberBuilder")(v(n.wrapNew),v(n.wrapOverride),v(n.wrapProxy),g("./MemberBuilderValidator")(function(a){r.handle(q(a))})),g("./VisibilityObjectFactoryFactory").fromEnvironment(),g("./ctor/ErrorCtor")(Error)),A=function(){return null};d.exports=function(c,e){for(var d=typeof c,l=null,l=[],f=arguments.length;f--;)l[f]=arguments[f];
switch(d){case "object":l=a.apply(null,l);break;case "string":l=b.apply(null,l);break;default:throw TypeError("Expecting anonymous class definition or named class definition");}return l};d.exports.extend=p;d.exports.implement=function(a){return e(null,Array.prototype.slice.call(arguments))};d.exports.use=function(a){for(var b=[],c=arguments.length;c--;)b[c]=arguments[c];return l(A,b)};var G={constructor:{prototype:{}}};d.exports.isClass=D.isClass;d.exports.isClassInstance=function(a){a=a||G;return d.exports.isClass(a.constructor)};
d.exports.isInstanceOf=D.isInstanceOf;d.exports.isA=d.exports.isInstanceOf;d.exports.assertInstanceOf=function(a,b,c){if(!D.isInstanceOf(a,b))throw TypeError(c||"Expected instance of `"+a.toString()+"'");};d.exports.assertIsA=d.exports.assertInstanceOf;var K=function(a,b){for(var c=arguments.length,e={},l=arguments[c-1],f=null,m=[],g=!1,h=0;h<c-1;h++)f=arguments[h],u.propParse(f.prototype,{method:function(a,b,c,d){e["abstract "+a]=b.definition;g=!0}}),m.push(f);g&&(e.___$$abstract$$=!0);c=d.exports.extend(l,
e);D.getMeta(c).implemented=m;return c}})(h["class"]={},".");(function(d,f){function a(a){"object"===typeof a&&(a.___$$abstract$$=!0)}function b(c){var e=c.extend,d=c.implement,f=c.use;d&&(c.implement=function(){return b(d.apply(this,arguments))});f&&(c.use=function(){return b(f.apply(this,arguments))});c.extend=function(){a(arguments[arguments.length-1]);return e.apply(this,arguments)};c.__createBase=function(){return e({___$$auto$abstract$$:!0})};return c}var c=d.exports={};k=".";var e=g("./class");
d.exports=c=function(){a(arguments[arguments.length-1]);var c=e.apply(this,arguments);e.isClass(c)||b(c);return c};c.extend=function(){a(arguments[arguments.length-1]);return e.extend.apply(this,arguments)};c.use=function(){return b(e.use.apply(this,arguments))};c.implement=function(){return b(e.implement.apply(this,arguments))}})(h.class_abstract={},".");(function(d,f){function a(){}function b(){switch(arguments.length){case 0:throw Error("Missing trait name or definition");case 1:return"string"===
typeof arguments[0]?e.apply(this,arguments):b.extend.apply(this,arguments);case 2:return c.apply(this,arguments)}throw Error("Expecting at most two arguments for definition of named Trait "+name+"'; "+arguments.length+" given");}function c(a,c,e){if("string"!==typeof a)throw Error("First argument of named class definition must be a string");c.__name=a;a=[c];void 0!==e&&a.unshift(e);return b.extend.apply(null,a)}function e(a){return{extend:function(){return 1===arguments.length?c(a,arguments[0]):c(a,
arguments[1],arguments[0])},implement:function(){return p(arguments,a)}}}function l(a,b,c,e){if("__construct"===a)throw Error("Traits may not define __construct");if(c["static"])throw Error("Cannot define member `"+a+"'; static trait members are currently unsupported");e.apply(this,arguments)}function m(a,b,c,e){if("___"!==a.substr(0,3)){if(!c["private"])throw Error("Cannot define property `"+a+"'; only private properties are permitted within Trait definitions");e.apply(this,arguments)}}function h(a,
b,c,e){throw Error("Cannot define property `"+a+"'; getters/setters are currently unsupported");}function p(a,c){return{extend:function(e){c&&(e.__name=c);return b.extend.call({__$$meta:{ifaces:a}},e)}}}function z(a,b){this.___$$super$$=a;this.___$$pmo$$=b}function x(a,b){var c=r.getMeta(a).virtualMembers,e;for(e in c)if("__construct"!==e){var c=void 0!==a.___$$methods$$["public"][e]?"public":"protected",d=a.___$$methods$$[c][e],l=d.__length;b[c+" virtual override "+e]=function(a){var b=function(){var b=
this.___$$pmo$$,c=b[a];return c?c.apply(b,arguments):this.__super.apply(this,arguments)};b.__length=l;return b}(e);b[c+" virtual __$$"+e]=function(a){var b=function(){return a.apply(this,arguments)};b.__length=l;return b}(d)}}function w(b,c,e,d){if(b.__extbase&&b.__extbase!==d&&!r.isInstanceOf(b.__extbase,d.asPrototype()))throw TypeError("Cannot mix trait "+b.toString()+" into "+d.toString()+"; mixer must be of type "+b.__extbase.toString());var l=b.__acls;b=D(b,c,e,d);c["weak virtual ___$$ctor$pre$$"]=
a;c["weak virtual ___$$ctor$post$$"]=a;d===r.ClassBase?(c["virtual override ___$$ctor$post$$"]=n,c["virtual override ___$$ctor$pre$$"]=a):(c["virtual override ___$$ctor$post$$"]=a,c["virtual override ___$$ctor$pre$$"]=n);v(l,c,b);return c}function v(a,b,c,e){a=a.___$$methods$$;u(a["public"],b,"public",c,e);u(a["protected"],b,"protected",c,e);(e=a["public"].___$$parent$$)&&e.constructor!==r.ClassBase&&v(e.constructor,b,c,!0)}function u(a,b,c,e,d){for(var l in a)if(Object.hasOwnProperty.call(a,l)&&
"__mixin"!==l&&a[l]&&a[l].___$$keywords$$){var f=a[l].___$$keywords$$;if("public"!==c||!f["protected"])if(c=f["protected"]?"protected":"public",f["abstract"]&&!f.override)b[c+" weak abstract "+l]=a[l].definition;else if(!d||f["abstract"]){var m=f.virtual,m=(m?"":"proxy ")+(m?"virtual ":"")+(f.override?"override ":"")+c+" "+l;if(void 0!==b[m])throw Error("Trait member conflict: `"+l+"'");b[m]=f.virtual?function(b){var c=function(){var a=this[e],c=a["__$$"+b].apply(a,arguments);return c===a?this:c};
c.__length=a[b].__length;return c}(l):e}}}function D(a,b,c,e){var d="___$to$"+a.__acls.__cid+"$"+e.__cid;c.push([d,a]);b["private "+d]=null;void 0===b.___$$tctor$$&&(b["weak virtual ___$$tctor$$"]=function(){},b["virtual override ___$$tctor$$"]=H(c,e));return d}function H(b,c){return function(e){for(var d in b){var l=b[d][0],f=b[d][1],m;if(!(m=f.__ccls)){m=f;var g;g=f.__acls;var h={"protected ___$$pmo$$":null,"protected ___$$super$$":null,"weak virtual __construct":a,"override __construct":z,__name:"#ConcreteTrait#"},
k=r.getMeta(g).abstractMethods,p=void 0;for(p in k)Object.hasOwnProperty.call(k,p)&&"__"!==p.substr(0,2)&&(h[(void 0!==g.___$$methods$$["public"][p]?"public":"protected")+" proxy "+p]="___$$pmo$$");x(g,h);g=g.extend(h);m=m.__ccls=g}m=m(c,this[e].vis);this[l]=m[e].vis;m.__inst=this[e].inst;m=this[l][e].vis;g=m.___$$super$$.__cid;m[e].vis[g]=this[e].vis[g];this[l].__mixin&&this[l].__mixin.apply(this[l],f.___$$mixinargs)}this.__super&&this.__super(e)}}function n(){this.___$$tctor$$.apply(this,arguments)}
d.exports={};k=".";var q=g("./class_abstract"),r=g("./ClassBuilder"),F=g("./interface");b.extend=function(){var a=arguments.length,b=arguments[a-1],c=1<a,e=c?arguments[0]:null;if(2<a)throw Error("Unexpected number of arguments to Trait.extend");if(c){a=typeof e;if(null===e||"object"!==a&&"function"!==a)throw TypeError("Trait cannot extend base of type '"+a+"'");if(!0===e.___$$final$$)throw TypeError("Trait cannot extend final class");if(d.exports.isTrait(e))throw TypeError("Traits cannot extend other traits");
}var a=(this||{}).__$$meta||{},f=b.__name||"(Trait)",c="function"===typeof b.__mixin?"param":"std";b.___$$parser$$={each:l,property:m,getset:h};b.___$$auto$abstract$$=!0;b.__name="#AbstractTrait#";var g="param"===c?function(){for(var a=[],b=arguments.length;b--;)a[b]=arguments[b];var c=function(){throw Error("Cannot re-configure argument trait");};c.___$$mixinargs=a;c.__trait="arg";c.__acls=g.__acls;c.__ccls=g.__ccls;c.toString=g.toString;c.__mixinImpl=g.__mixinImpl;c.__isInstanceOf=g.__isInstanceOf;
c.__mixin=function(a,b,e){w(c,a,b,e)};return c}:function(){throw Error("Cannot instantiate non-parameterized trait");},k=q;a.ifaces&&(k=k.implement.apply(null,a.ifaces));var p=e?k.extend(e,b):k.extend(b);g.__trait=c;g.__acls=p;g.__ccls=null;g.__extbase=e;g.toString=function(){return""+f};g.___$$mixinargs=[];g.__mixin=function(a,b,c){w(g,a,b,c)};g.__mixinImpl=function(a){for(var b=r.getMeta(p).implemented||[],c=b.length;c--;)a.push(b[c])};g.__isInstanceOf=F.isInstanceOf;return g};b.implement=function(){return p(arguments)};
b.isTrait=function(a){return!!(a||{}).__trait};b.isParameterTrait=function(a){return"param"===(a||{}).__trait};b.isArgumentTrait=function(a){return"arg"===(a||{}).__trait};z.__length=Infinity;d.exports=b})(h.Trait={},".");(function(d,f){function a(a){"object"===typeof a&&(a.___$$final$$=!0)}function b(b){var c=b.extend;b.extend=function(){a(arguments[arguments.length-1]);return c.apply(this,arguments)}}var c=d.exports={};k=".";var e=g("./class"),c=d.exports=function(){a(arguments[arguments.length-
1]);var c=e.apply(this,arguments);e.isClass(c)||b(c);return c};c.extend=function(){a(arguments[arguments.length-1]);return e.extend.apply(this,arguments)}})(h.class_final={},".");(function(d,f){function a(b){if(!(this instanceof a))return new a(b);if("function"!==typeof b)throw TypeError("Expected constructor for error base");this._base=b;this._initDataSupport(b)}d.exports={};k="ctor";a.prototype={_stackre:/^(?:.+?\n\s+at )?.*?__\$\$ector\$\$__.*(?:\n|$)((?:.*?[@(](.*?):(\d+)(?::(\d+))?.*?\n)?(?:.|\n)*)?$/,
_base:{},createCtor:function(a,c,e){function d(c){this.message=c;f._setStackTrace(this,f._base,a);e&&e.apply(this,arguments)}if("function"!==typeof a)throw TypeError("Expected constructor for supertype");if(void 0!==e&&"function"!==typeof e)throw TypeError("Expected function as `after' argument");var f=this;void 0!==c&&(d.prototype.name=c);return d},_setStackTrace:function(a,c,e){"function"===typeof c.captureStackTrace?c.captureStackTrace(a,a.constructor):(c=new e,c=this._parseStack(c.stack),a.stack=
c.stripped,this._lineSupport&&(a.lineNumber=c.line),this._columnSupport&&(a.columnNumber=c.column),this._filenameSupport&&(a.fileName=c.filename))},_parseStack:function(a){var c="string"===typeof a?a.match(this._stackre):null;return c?{full:a,stripped:c[1]||"",filename:c[2]||void 0,line:c[3]||void 0,column:c[4]||void 0}:{full:a,stripped:a}},_initDataSupport:function(a){a=new a;var c=Object.hasOwnProperty;this._lineSupport=void 0!==a.lineNumber||c.call(a,"lineNumber");this._columnSupport=void 0!==
a.columnNumber||c.call(a,"columnNumber");this._filenameSupport=void 0!==a.fileName||c.call(a,"fileName")},isError:function(a){return a===this._base||a.prototype instanceof this._base}};d.exports=a})(h["ctor/ErrorCtor"]={},".");(function(d,f){function a(){if(!(this instanceof a))return new a;this._alt={}}d.exports={};k="util";(0,eval)("var _the_global=this");a.expose=function(){return _the_global};a.prototype={provideAlt:function(a,c){if(void 0===_the_global[a]&&void 0===this._alt[a])return this._alt[a]=
c(),this},get:function(a){return void 0!==this._alt[a]?this._alt[a]:_the_global[a]}};d.exports=a})(h["util/Global"]={},".");(function(d,f){d.exports={};k="util";var a=g("./symbol/FallbackSymbol"),b=g("./Global").expose();d.exports=b.Symbol||a})(h["util/Symbol"]={},".");(function(d,f){function a(){if(!(this instanceof a))return new a;this.___$$id$$=e+c(1E8*b())}d.exports={};k="util/symbol";var b=Math.random,c=Math.floor,e=" "+String.fromCharCode(c(10*b())%31+1)+"$";a.prototype={toString:function(){return this.___$$id$$}};
d.exports=a})(h["util/symbol/FallbackSymbol"]={},".");(function(d,f){d.exports={};k=".";var a=[0,2,9,""];a.major=0;a.minor=2;a.rev=9;a.suffix="";a.toString=function(){return this.join(".").replace(/\.([^.]*)$/,"-$1").replace(/-$/,"")};d.exports=a})(h.version={},".");(function(d,f){function a(){if(!(this instanceof a))return new a}d.exports={};k="warn";a.prototype={handle:function(a){}};d.exports=a})(h["warn/DismissiveHandler"]={},".");(function(d,f){function a(b){if(!(this instanceof a))return new a(b);
this._console=b||{}}d.exports={};k="warn";a.prototype={handle:function(a){var c=this._console.warn||this._console.log;c&&c.call(this._console,"Warning: "+a.message)}};d.exports=a})(h["warn/LogHandler"]={},".");(function(d,f){function a(){if(!(this instanceof a))return new a}d.exports={};k="warn";a.prototype={handle:function(a){throw a.getError();}};d.exports=a})(h["warn/ThrowHandler"]={},".");(function(d,f){function a(b){if(!(this instanceof a))return new a(b);if(!(b instanceof Error))throw TypeError("Must provide exception to wrap");
Error.prototype.constructor.call(this,b.message);this.message=b.message;this.name="Warning";this._error=b;this.stack=b.stack&&b.stack.replace(/^.*?\n+/,this.name+": "+this.message+"\n")}d.exports={};k="warn";a.prototype=Error();a.prototype.constructor=a;a.prototype.name="Warning";a.prototype.getError=function(){return this._error};d.exports=a})(h["warn/Warning"]={},".");h.common=h["test/common"]={exports:{require:function(d){return g(d)},testCase:function(){return g("/test/inc-testcase").apply(this,
arguments)}}};h.assert={exports:{equal:function(d,f,a){d!=f&&E(a)},strictEqual:function(d,f,a){d!==f&&E(a)},notStrictEqual:function(d,f,a){d===f&&E(a)},notEqual:function(d,f,a){d===f&&E(a)},deepEqual:function(d,f,a){if(d!=f)if(f instanceof Array&&d instanceof Array)for(var b=0,c=f.length;b<c;b++)h.assert.exports.deepEqual(d[b],f[b],a);else if("object"===typeof f&&"object"===typeof d)for(b in f)h.assert.exports.deepEqual(d[b],f[b],a);else E(a)},ok:function(d,f){d||E(f)},fail:function(d){E(d)},"throws":function(d,
f,a){f=f||Error;try{d()}catch(b){b instanceof f||E(a)}},doesNotThrow:function(d,f,a){f=f||Error;try{d()}catch(b){b instanceof f&&E(a)}}}};I.runTests=function(){(function(d,f){function a(){h++}function b(){r("\n");0!==w%60&&r("\n");if(u.length){var a=u,b,c,e;if("undefined"===typeof process){e="";b=a.length;for(b in a)c=a[b],e+=c[0]+" ("+(c[1].message||"no message")+")"+(c[1].stack?"<br />"+c[1].stack.replace(/\n/g,"<br />")+"<br />":"; ");throw Error(e);}for(b=0;b<a.length;b++)c=a[b],e=c[0],c=c[1],
r("#"+b+" "+e+"\n"+(c.stack||c)+"\n\n")}r((u.length?"FAILED":"OK")+" - "+z+" successful, "+u.length+" failure(s), "+(0<p?p+" incomplete, ":"")+(0<x?x+" skipped, ":"")+(z+p+x+u.length)+" total ("+h+" assertion"+(1!==h?"s":"")+")\n");u.length&&"undefined"!==typeof process&&process.exit(1)}function c(a){a=H(a);var b=function(){};a=b.prototype=new a;for(var c in a)"function"===typeof a[c]&&(a[c]=function(){});return new b}function e(){throw D;}d.exports={};k=".";document.write("test/inc-testcase...<br />");
var l=g("assert"),m={},h=0,p=0,z=0,x=0,w=0,v=!1,u=[],D={skip:!0},H=g(f+"/common").require,n;for(n in l){var q=l[n];"function"===typeof q&&(m[n]=function(a){return function(){h++;a.apply(this,arguments)}}(q))}d.exports=function(d,l){var f=Array.prototype.slice.call(arguments),g=f.pop(),f=f.pop(),k={require:H,fail:m.fail,assertOk:m.ok,assertEqual:m.equal,assertNotEqual:m.notEqual,assertDeepEqual:m.deepEqual,assertStrictEqual:m.strictEqual,assertNotStrictEqual:m.notStrictEqual,assertThrows:m["throws"],
assertDoesNotThrow:m.doesNotThrow,assertIfError:m.ifError,incAssertCount:a,getMock:c,skip:e},n=g.setUp;f&&(k.Sut=H(f));v||(u=[],z=h=p=x=0);g.caseSetUp&&g.caseSetUp.call(k);delete g.caseSetUp;delete g.setUp;for(var q in g){var f=q.match(/^(?:@(.*?)\((.*?)\))?(.*)$/),t=f[1],E=f[2],I=f[3],M=1,f=[[]];if("each"===t){if(!k[E])throw Error("Unknown @each context: "+E);M=k[E].length;f=[];for(t=0;t<M;t++)f.push([k[E][t]])}else if(t)throw Error("Unknown test method: "+t);for(t=0;t<M;t++){var E=g,Q=q,N=n||null,
R=I+(1<M?" ("+t+")":""),O=k,S=f[t],T=h;try{N&&N.call(O),E[Q].apply(O,S),T===h?(r("I"),p++):(z++,r("."))}catch(P){P===D?(r("S"),x++):(r("F"),u.push([R,P]))}w++;w%60||r(" "+w+"\n")}}v||b()};d.exports.startSuite=function(){u=[];z=h=p=x=0;v=!0};d.exports.endSuite=function(){v=!1;b()};var r="undefined"===typeof process||"undefined"===typeof process.stdout?function(){}:function(a){process.stdout.write(a)}})(h["test/inc-testcase"]={},"test");(function(d,f){var a=d.exports={};k=".";document.write("test/MemberBuilder/inc-common...<br />");
a.testArgs=function(a,c,e,d,f,g,h){var k={value:{expected:null,given:c[3]},keywords:{expected:null,given:c[4]}},k=h(k,k.value.given,k.keywords.given);a.assertEqual(e,c[0],"Incorrect name passed to validator");a.assertDeepEqual(d,c[1],"Incorrect value passed to validator");a.assertStrictEqual(f,c[2],"Incorrect keywords passed to validator");a.assertStrictEqual(k.value.expected,k.value.given,"Previous data should contain prev value if overriding, otherwise null");a.assertDeepEqual(k.keywords.expected,
k.keywords.given,"Previous keywords should contain prev keyword if overriding, otherwise null");a.assertStrictEqual(g,c[5],"State object was not passed to validator")}})(h["test/MemberBuilder/inc-common"]={},"test/MemberBuilder");(function(d,f){var a=d.exports={};k=".";document.write("test/MemberBuilderValidator/inc-common...<br />");a.testName="fooBar";a.quickFailureTest=function(a,c,e){this.incAssertCount();try{e()}catch(d){this.assertOk(-1!==d.message.search(c),"Incorrect error; expected identifier '"+
c+"', but received: "+d.message);this.assertOk(-1!==d.message.search(a),"Error message should contain member name");return}this.fail(!1,!0,"Expected failure")};a.quickKeywordTest=function(b,c,e,d,f){var g={},h={};f=f||{};for(var k=a.testName,x={},w=this,v=0,u=c.length;v<u;v++)g[c[v]]=!0;if(void 0!==d){v=0;for(u=d.length;v<u;v++)h[d[v]]=!0;f.member=function(){}}c=function(){w.sut[b](k,g.proxy?"proxyDest":function(){},g,f,h,x)};e?this.quickFailureTest.call(this,k,e,c):this.assertDoesNotThrow(c);this.sut.end(x)};
a.visEscalationTest=function(a){for(var c=[["protected","public"],["public","public"],["protected","protected"]],e=0,d=c.length;e<d;e++)a(c[e])};a.privateNamingConflictTest=function(a){for(var c=[["private","private"],["private","protected"],["private"," public"]],e=c.length;e--;)a(c[e])};a.quickVisChangeTest=function(a,c,e,d,f){var g={},h={};g[a]=!0;h[c]=!0;a=function(){d("foo",g,h)};e?this.quickFailureTest.call(this,"foo",f||"de-escalate",a):this.assertDoesNotThrow(a,Error)}})(h["test/MemberBuilderValidator/inc-common"]=
{},"test/MemberBuilderValidator");(function(d,f){d.exports={};k=".";document.write("test/Class/AbstractTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("class_abstract");this.Class=this.require("class")},"Must declare classes with abstract members as abstract":function(){try{this.Class("Foo",{"abstract foo":[]})}catch(a){this.assertOk(-1!==a.message.search("Foo"),"Abstract class declaration error should contain class name");return}this.assertFail("Should not be able to declare abstract members unless class is also declared as abstract")},
"Can declare class as abstract":function(){var a=this.Sut;this.assertDoesNotThrow(function(){a({"abstract foo":[]})},Error)},"Abstract classes must contain abstract methods":function(){try{this.Sut("Foo",{})}catch(a){this.assertOk(-1!==a.message.search("Foo"),"Abstract class declaration error should contain class name");return}this.assertFail("Abstract classes should contain at least one abstract method")},"Abstract methods can be defined concretely by sub-subtypes":function(){var a=this.Sut("Foo",
{"abstract foo":[]}),b=this.Sut.extend(a,{}),c=this.Class;this.assertDoesNotThrow(function(){c.extend(b,{foo:function(){}})},Error)},"Abstract class extend method returns new class":function(){this.assertEqual(typeof this.Sut.extend,"function","AbstractClass contains extend method");this.assertOk(this.Class.isClass(this.Sut.extend({"abstract foo":[]})),"Abstract class extend method returns class")},"Abstract class contains implement method":function(){this.assertEqual(typeof this.Sut.implement,"function",
"AbstractClass contains implement method")},"All classes have an isAbstract() method":function(){this.assertEqual(typeof this.Class({}).isAbstract,"function")},"Concrete classes are not considered to be abstract":function(){this.assertOk(!this.Class({}).isAbstract())},"Abstract classes are considered to be abstract":function(){this.assertOk(this.Sut({"abstract method":[]}).isAbstract())},"Subtypes are abstract if no concrete method is provided":function(){var a=this.Sut({"abstract foo":[],"abstract bar":[]});
this.assertOk(this.Sut.extend(a,{foo:function(){}}).isAbstract())},"Subtypes are not considered abstract if concrete methods are provided":function(){var a=this.Sut({"abstract foo":[],"abstract bar":[]});this.assertOk(!1===this.Class.extend(a,{foo:function(){},bar:function(){}}).isAbstract())},"Abstract classes cannot be instantiated":function(){var a=this.Sut;this.assertThrows(function(){a({"abstract foo":[]})()},Error)},"Concrete subtypes of abstract classes can be instantiated":function(){var a=
this.Sut;this.assertDoesNotThrow(function(){a({"abstract foo":[]}).extend({foo:function(){}})()},Error)},"Can call constructors of abstract supertypes":function(){var a=!1;this.Sut({__construct:function(){a=!0},"abstract foo":[]}).extend({foo:function(){}})();this.assertOk(a)},"Concrete methods must implement the proper number of parameters":function(){var a=this.Sut;this.assertThrows(function(){a({"abstract foo":["one","two"]}).extend({foo:function(a){}})},Error)},"Abstract methods of subtypes must declare compatible parameter count":function(){var a=
this.Sut;this.assertThrows(function(){a.extend(a({"abstract foo":["one"]}),{"abstract foo":[]})},TypeError)},"Abstract members may implement more parameters than supertype":function(){var a=this.Sut;this.assertDoesNotThrow(function(){a.extend(a({"abstract foo":["one"]}),{"abstract foo":["one","two"]})},Error)},"Abstract members may implement equal parameters to supertype":function(){var a=this.Sut;this.assertDoesNotThrow(function(){a.extend(a({"abstract foo":["one"]}),{"abstract foo":["one"]})},Error)},
"Concrete methods have no parameter requirement with empty definition":function(){var a=this.Sut;this.assertDoesNotThrow(function(){a({"abstract foo":[]}).extend({foo:function(){}})},Error)},"Abstract methods must be declared as arrays":function(){var a=this.Class;this.assertThrows(function(){a.extend({"abstract foo":function(){}})},TypeError,"Abstract method cannot be declared as a function");this.assertThrows(function(){a.extend({"abstract foo":"scalar"})},TypeError,"Abstract method cannot be declared as a scalar")},
"Does not recognize object prototype members as abstract":function(){var a=this.Sut;this.assertDoesNotThrow(function(){a({"abstract method":[]}).extend({method:function(){},toString:function(){}})()},Error)},"Can create named abstract subtypes":function(){this.assertOk(this.Sut("Named").extend(this.Sut({"abstract foo":[]}),{}).isAbstract())},"Calling extend() on abstract class yields concrete class":function(){var a=this.Sut({"abstract foo":[]}),b=this.Sut("NamedSubFoo").extend(a,{}),c=this.Sut.extend(a,
{}),e=this.Class;this.assertThrows(function(){e.isAbstract(b.extend({}))},TypeError,"Extending named abstract classes should be concrete");this.assertThrows(function(){e.isAbstract(c.extend({}))},TypeError,"Extending anonymous abstract classes should be concrete")},"Implementing interfaces will preserve abstract class definition":function(){var a=this.Sut,b=this.require("interface");this.assertOk(a("TestImplExtend").implement(b({foo:[]})).extend({}).isAbstract())}})})(h["test/Class/AbstractTest"]=
{},"test/Class");(function(d,f){d.exports={};k=".";document.write("test/Class/ConstructorTest...<br />");g("common").testCase({caseSetUp:function(){this.ctors=["__construct","constructor"];this.mkctor=function(a,b){var c={};c[a]=b;return c}},setUp:function(){this.Sut=this.require("class")},"@each(ctors) Should not be invoked before instantiation":function(a){var b=!1;this.Sut.extend(this.mkctor(a,function(){b=!0}));this.assertNotEqual(b,!0)},"@each(ctors) Should be invoked once upon instantiation":function(a){var b=
0;new (this.Sut.extend(this.mkctor(a,function(){b++})));this.assertEqual(b,1)},"@each(ctors) Should be invoked within context of new instance":function(a){var b=Math.random();a=this.mkctor(a,function(){this.val=b});a.val=null;a=new (this.Sut.extend(a));this.assertEqual(a.val,b)},"@each(ctors) Arguments should be passed unchanged to __construct":function(a){var b=["foo",{bar:"baz"},["moo","cow"]],c=null;new (this.Sut.extend(this.mkctor(a,function(){c=Array.prototype.slice.call(arguments,0)})))(b[0],
b[1],b[2]);this.assertEqual(c.length,b.length);for(a=b.length;a--;)this.assertStrictEqual(c[a],b[a],"Ctor argument mismatch: "+a)},"@each(ctors)Parent constructor invoked for subtype if not overridden":function(a){var b=!1,c={};c[a]=function(){b=!0};new (this.Sut.extend(c).extend({}));this.assertOk(b)},"Constructor does not require `new' keyword":function(){var a=this.Sut.extend({});this.assertOk(new a instanceof a);this.assertOk(a()instanceof a)},"@each(ctors) Constructor must be public":function(a){var b=
this.Sut;this.assertThrows(function(){var c={};c["protected "+a]=function(){};b(c)},TypeError,"Constructor should not be able to be protected");this.assertThrows(function(){var c={};c["private "+a]=function(){};b(c)},TypeError,"Constructor should not be able to be private")},"@each(ctors) Constructor is virtual by default":function(a){var b=this;this.assertDoesNotThrow(function(){var c=!1,e={};e[a]=function(){};var d={};d["override "+a]=function(){c=!0};b.Sut.extend(b.Sut(e),d)();b.assertOk(c)},Error)},
"`constructor' property is properly set to class object":function(){var a=this.Sut.extend({});this.assertStrictEqual(a().constructor,a)},"Cannot provide multiple constructor styles":function(){for(var a=this.Sut,b=this.ctors.length,c=1;c<b;c++){var e={},d=this.ctors[(c+1)%b];e[this.ctors[c]]=function(){};e[d]=function(){};this.assertThrows(function(){a(e)},Error,"Multiple constructors should not be permitted")}}})})(h["test/Class/ConstructorTest"]={},"test/Class");(function(d,f){d.exports={};k=".";
document.write("test/Class/ExtendTest...<br />");g("common").testCase({caseSetUp:function(){this.test_props={one:1,two:2};this.Sut=this.require("class");this.classes=[this.Sut.extend(this.test_props),this.Sut(this.test_props)]},"@each(classes) Created class contains extend method":function(a){this.assertOk("function"===typeof a.extend)},"@each(classes) Subtype is returned as an object":function(a){this.assertOk(a.extend()instanceof Object)},"@each(classes) Subtype inherits parent properties":function(a){a=
a.extend();for(var b in this.test_props)this.assertEqual(this.test_props[b],a.prototype[b],"Missing property: "+b)},"@each(classes) Subtype contains its own properties":function(a){var b={three:3,four:4};a=(new a.extend(b))();for(var c in b)this.assertEqual(b[c],a[c],"Missing property: "+c)},"@each(classes) Subtypes are ECMAScript instances of their supertypes":function(a){this.assertOk(a.extend()()instanceof a)},"@each(classes) Subtypes are easejs instances of their supertypes":function(a){a=a.extend();
var b=new a;this.assertOk(b.isInstanceOf(a))},"@each(classes) Objects are instances of their super-supertypes":function(a){var b=new (a.extend().extend());this.assertOk(b instanceof a&&b.isInstanceOf(a))},"@each(classes) Objects are not instances of subtypes":function(a){var b=a.extend();a=b.extend();b=new b;this.assertOk(!(b instanceof a)&&!b.isInstanceOf(a))},"@each(classes) Objects are not instances of sibling types":function(a){var b=a.extend();a=b.extend();b=new (b.extend());this.assertOk(!(b instanceof
a)&&!b.isInstanceOf(a))},"Constructor prototype is copied to subclass":function(){var a=function(){};a.prototype={foo:{}};this.assertStrictEqual(this.Sut.extend(a,{}).prototype.foo,a.prototype.foo)},"Subtype of constructor should contain extended members":function(){this.assertNotEqual((new this.Sut.extend(function(){},{foo:{}}))().foo,void 0)},"Subtypes can override parent property values":function(){var a=this.Sut.extend({p:null}).extend({p:"ok"});this.assertEqual(a().p,"ok")},"__initProps() cannot be declared (internal method)":function(){var a=
this;this.assertThrows(function(){a.Sut.extend({__initProps:function(){}})},Error)},"Invoking class module requires object as argument if extending":function(){for(var a=this,b=[5,!1,void 0],c=b.length;c--;)this.assertThrows(function(){a.Sut(b[c])},TypeError)},"Can override toString() method":function(){var a="",a=this.Sut("FooToStr",{toString:function(){return"foomookittypoo"}})().toString();this.assertEqual(a,"foomookittypoo")},"Cannot provide duplicate member definitions using unique keys":function(){var a=
this;this.assertThrows(function(){a.Sut({"protected foo":"","public foo":""})},Error);this.assertThrows(function(){a.Sut({"protected foo":function(){},"public foo":function(){}})},Error)},"__construct should not be called when extending class":function(){var a=!1;this.Sut({"public __construct":function(){a=!0}}).extend({});this.assertEqual(a,!1)},"Extending from non-ctor or non-class provides useful error":function(){try{this.Sut.extend("oops",{})}catch(a){this.assertOk(a.message.search("extend from"),
"Error message for extending from non-ctor or class makes sense");return}this.assertFail("Attempting to extend from non-ctor or class should throw exception")},"Extending object will not attempt instantiation":function(){var a={foo:"bar"};this.assertEqual(a.foo,this.Sut.extend(a,{})().foo,"Should be able to use object as prototype")},"Extending validates against non-public super-supertype methods":function(){var a=!1;this.Sut.extend({"virtual protected foo":function(){a=!0}}).extend({}).extend({"override public foo":function(){this.__super()}})().foo();
this.assertOk(a)},"Extending with one argument that is a class yields an error":function(){var a=this;this.assertThrows(function(){a.Sut.extend(a.Sut("Whoops",{}))},TypeError);this.assertThrows(function(){a.Sut.extend(a.Sut("Base",{}),a.Sut("Wth",{}))},TypeError)}})})(h["test/Class/ExtendTest"]={},"test/Class");(function(d,f){d.exports={};k=".";document.write("test/Class/GeneralTest...<br />");g("common").testCase({setUp:function(){this.Sut=this.require("class");this.ClassBuilder=this.require("ClassBuilder");
this.Foo=this.Sut.extend({value:"foo"});this.asserts=["assertInstanceOf","assertIsA"]},"Class module should provide an extend method":function(){this.assertOk("function"===typeof this.Sut.extend)},"Extend method creates a new function":function(){this.assertOk("function"===typeof this.Foo)},"Classes are considered by the system to be classes":function(){this.assertOk(this.Sut.isClass(this.Foo))},"Only actual classes are considered to be classes":function(){this.assertOk(!this.Sut.isClass({}))},"Class instances are not considered to be classes":function(){var a=
new this.Foo;this.assertOk(!this.Sut.isClass(a))},"Class instances are considered to be instances":function(){var a=new this.Foo;this.assertOk(this.Sut.isClassInstance(a))},"Classes are not considered to be class instances":function(){this.assertOk(!this.Sut.isClassInstance(this.Foo))},"Non-class objects are not considered to be instances":function(){this.assertOk(!this.Sut.isClassInstance({}));this.assertOk(!this.Sut.isClassInstance(new function(){}))},"Generated classes should be frozen":function(){void 0!==
Object.isFrozen&&this.assertOk(Object.isFrozen(this.Foo))},"Class instance is recognized as instance of class":function(){this.assertOk(this.Sut.isInstanceOf(this.Foo,new this.Foo))},"Checking instance of undefined will not throw an error":function(){this.assertOk(!1===this.Sut.isInstanceOf(this.Foo,void 0))},"Checking for instance of undefined will not throw an error":function(){this.assertOk(!1===this.Sut.isInstanceOf(void 0,{}))},"Class is not an instance of itself":function(){this.assertOk(!this.Sut.isInstanceOf(this.Foo,
this.Foo))},"Class is not an instance of its instance":function(){this.assertOk(!this.Sut.isInstanceOf(new this.Foo,this.Foo))},"isA is an alias for isInstanceOf":function(){this.assertEqual(this.Sut.isInstanceOf,this.Sut.isA)},"Class instance has partially applied isInstanceOf method":function(){var a=new this.Foo;this.assertOk("function"===typeof a.isInstanceOf&&!0===a.isInstanceOf(this.Foo)&&!1===a.isInstanceOf(a))},"Class instance has partially applied isA alias method":function(){var a=new this.Foo;
this.assertEqual(a.isInstanceOf,a.isA)},"Any object may masquerade as a class":function(){var a={};this.ClassBuilder.masquerade(a);this.assertOk(this.Sut.isClass(a))},"Class id is available via class":function(){this.assertOk(void 0!==this.Foo.__cid)},"Class id is available via class prototype":function(){this.assertOk(void 0!==this.Foo.prototype.__cid)},"@each(asserts) assertIsA throws TypeError if not instance of class":function(a){var b=this.Sut("FooType").extend({});try{this.Sut[a](b,{})}catch(c){this.assertOk(c instanceof
TypeError),this.assertOk(/instance of `FooType'/.test(c.message))}},"@each(asserts) assertIsA throws TypeError with custom message":function(a){try{this.Sut[a](this.Foo,{},"Test assertIsA message")}catch(b){this.assertEqual(b.message,"Test assertIsA message")}}})})(h["test/Class/GeneralTest"]={},"test/Class");(function(d,f){d.exports={};k=".";document.write("test/Class/GetterSetterTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("class");this.util=this.require("util")},
setUp:function(){this.util.definePropertyFallback()&&this.skip();var a={},b={};Object.defineProperty(a,"foo",{get:function(){return this._foo},set:function(a){this._foo=""+a},enumerable:!0});Object.defineProperty(a,"virtual bar",{get:function(){return"durp"},set:function(a){},enumerable:!0});Object.defineProperty(b,"override bar",{get:function(){return this.bar2},set:function(a){this.bar2=a},enumerable:!0});a.bar2="";this.sub=new (this.Sut.extend(a).extend(b))},"Subtypes inherit getters/setters":function(){this.sub.foo=
"foo";this.assertEqual(this.sub.foo,"foo")},"Subtypes should be able to override getters/setters":function(){this.sub.bar="bar";this.assertEqual(this.sub.bar,"bar");this.assertEqual(this.sub.bar2,"bar")}})})(h["test/Class/GetterSetterTest"]={},"test/Class");(function(d,f){d.exports={};k=".";document.write("test/Class/ImplementTest...<br />");g("common").testCase({caseSetUp:function(){this.Class=this.require("class");this.Interface=this.require("interface");this.AbstractClass=this.require("class_abstract");
this.Type=this.Interface.extend({"abstract foo":[]});this.Type2=this.Interface.extend({foo2:[]});this.PlainFoo=this.Class.extend()},"Class exports contain implement method for no base class":function(){this.assertOk(this.Class.implement instanceof Function,"Class provides method to implement interfaces")},"Clsss object contains implement method for self as base":function(){this.assertOk(this.PlainFoo.implement instanceof Function,"Classes contain an implement() method")},"Can implement interface from an empty base":function(){var a=
this;this.assertDoesNotThrow(function(){a.Class.implement(a.Type,a.Type2)},Error,"Class can implement interfaces")},"Result of implement is not usable as a class":function(){var a=this.Class.implement(this.Type);this.assertEqual(this.Class.isClass(a),!1,"Result of implement operation on class is not usable as a Class")},"Abstract methods are copied into new class using empty base":function(){var a=this.AbstractClass.implement(this.Type,this.Type2).extend({});this.assertOk(a.prototype.foo instanceof
Function&&a.prototype.foo2 instanceof Function,"Abstract methods are copied into the new class prototype (empty base)")},"Can implement interface atop an existing class":function(){var a=this;this.assertDoesNotThrow(function(){a.PlainFoo.implement(a.Type,a.Type2)},Error,"Classes can implement interfaces")},"Implementing interface atop existing class not usable by default":function(){var a=this.PlainFoo.implement(this.Type);this.assertEqual(this.Class.isClass(a),!1,"Result of implementing interfaces on an existing base is not usable as a Class")},
"Abstract method copied into new class using existing base":function(){var a=this.AbstractClass.implement(this.Type,this.Type2).extend(this.PlainFoo,{});this.assertOk(a.prototype.foo instanceof Function&&a.prototype.foo2 instanceof Function,"Abstract methods are copied into the new class prototype (concrete base)")},"Classes implementing interfaces are considered abstract by default":function(){var a=this.AbstractClass.implement(this.Type).extend({});this.assertEqual(a.isAbstract(),!0,"Classes that implements interface(s) are considered abstract if the implemented methods have no concrete implementations")},
"Instances of classes are instances of their implemented interfaces":function(){var a=this.AbstractClass.implement(this.Type,this.Type2).extend({}).extend({foo:function(){},foo2:function(){}}),b=a();this.assertOk(b.isInstanceOf(this.Type)&&b.isInstanceOf(this.Type2),"Instances of classes implementing interfaces are considered to be instances of the implemented interfaces");this.assertEqual(a.isAbstract(),!1,"Concrete implementations are not considered to be abstract")},"Cannot specify parent after implementing atop existing class":function(){var a=
this.AbstractClass.implement(this.Type,this.Type2).extend(this.PlainFoo,{});this.assertThrows(function(){this.PlainFoo.implement(this.Type,this.Type2).extend(a,{})},Error,"Cannot specify new parent for extend() when implementing from existing class")},"Can specify parent if implementing atop empty class":function(){var a=this;this.assertDoesNotThrow(function(){a.AbstractClass.implement(a.Type).extend(a.PlainFoo,{})},Error,"Can specify parent for extend() when implementing atop an empty base")},"Throws exception if extend contains too many arguments":function(){var a=
this;this.assertThrows(function(){a.Class.implement(a.Type).extend(a.PlainFoo,{},"extra")},Error,"extend() after implementing accepts no more than two args")}})})(h["test/Class/ImplementTest"]={},"test/Class");(function(d,f){d.exports={};k=".";document.write("test/Class/InstanceSafetyTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("class")},"Multiple instances of same class do not share array references":function(){var a=this.Sut.extend({arr:[]}),b=new a,a=new a;b.arr.push("one");
a.arr.push("two");this.assertEqual(b.arr[0],"one");this.assertEqual(a.arr[0],"two");this.assertEqual(b.arr.length,1);this.assertEqual(a.arr.length,1)},"Multiple instances of same class do not share object references":function(){var a=this.Sut.extend({obj:{}}),b=new a,a=new a;b.obj.a=!0;a.obj.b=!0;this.assertEqual(b.obj.a,!0);this.assertEqual(b.obj.b,void 0);this.assertEqual(a.obj.a,void 0);this.assertEqual(a.obj.b,!0)},"Instances of subtypes do not share property references":function(){var a=this.Sut.extend({arr:[],
obj:{}}).extend({}),b=new a,a=new a;this.assertNotEqual(b.arr!==a.arr);this.assertNotEqual(b.obj!==a.obj)}})})(h["test/Class/InstanceSafetyTest"]={},"test/Class");(function(d,f){d.exports={};k=".";document.write("test/Class/InteropTest...<br />");g("common").testCase({caseSetUp:function(){this.Class=this.require("class");this.fallback=this.require("util").definePropertyFallback()},"Methods inherited from a prototype are implicitly virtual":function(){var a={},b=function(){this.foo=function(){return null}},
c=this.Class,e;this.assertDoesNotThrow(function(){e=c.extend(b,{"override foo":function(){return a}})()});this.assertStrictEqual(e.foo(),a)},"Prototype method overrides must provide override keyword":function(){var a=function(){this.foo=function(){}},b=this.Class;this.assertThrows(function(){b.extend(a,{foo:function(){}})})},"Recognizes and proxies prototype properties as public":function(){var a=this.Class.extend(function(){this.foo="bar";this.updateFoo=function(a){this.foo=a}},{"override updateFoo":function(a){this.__super(a);
return this},ownUpdateFoo:function(a){this.foo=a;return this}})();this.assertEqual(a.ownUpdateFoo("baz").foo,"baz");this.assertEqual(a.updateFoo("buzz").foo,"buzz")},"Does not recognize non-ctor-initialized properties as public":function(){if(!this.fallback){var a=this.Class.extend(function(){this.init=function(a){this.foo=a;return this}},{rmfoo:function(){this.foo=void 0;return this},getFoo:function(){return this.foo}})();this.assertEqual(a.init("bar").rmfoo().foo,"bar");this.assertEqual(a.getFoo(),
void 0)}},"Declaring non-ctor-initialized properties as public resolves proxy":function(){var a=this.Class.extend(function(){this.init=function(){this.foo=null;return this}},{"public foo":null,setFoo:function(a){this.foo=a;return this}})();this.assertEqual(a.init().setFoo("bar").foo,"bar")},"Cannot de-escalate visibility of prototype properties":function(){var a=function(){this.foo="bar"},b=this.Class;this.assertThrows(function(){b.extend(a,{"protected foo":""})})},"Returning `this` from prototype method yields public obj":function(){var a=
this.Class.extend(function(){this.pub=function(){return this}},{})();this.assertStrictEqual(a.pub(),a)},"Subtypes of prototype subtypes yield stable classes":function(){var a={},b=this.Class.extend(function(){},{}).extend({foo:function(){return a}}),c=b();this.assertOk(this.Class.isClass(b));this.assertOk(this.Class.isClassInstance(c));this.assertOk(this.Class.isA(b,c));this.assertStrictEqual(c.foo(),a)},"Can defer invoking __construct":function(){var a={},b=this.Class({__construct:function(){throw Error("__construct called!");
},foo:function(){return a}}),c;this.assertDoesNotThrow(function(){c=b.asPrototype()});this.assertOk(this.Class.isA(b,c));this.assertStrictEqual(a,c.foo())},"Can invoke constructor within context of prototypal subtype":function(){function a(){this.__construct.call(this)}var b={},c=this.Class({foo:null,__construct:function(){this.foo=b}});a.prototype=c.asPrototype();this.assertStrictEqual((new a).foo,b)},"Deferred constructor still has access to private context":function(){function a(){this.__construct.call(this)}
var b={},c=this.Class({"private _foo":null,__construct:function(){this._foo=b},getFoo:function(){return this._foo}});a.prototype=c.asPrototype();this.assertStrictEqual((new a).getFoo(),b)}})})(h["test/Class/InteropTest"]={},"test/Class");(function(d,f){d.exports={};k=".";document.write("test/Class/NameTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("class");this.AbstractClass=this.require("class_abstract")},"Class defined with name is returned as a valid class":function(){this.assertOk(this.Sut.isClass(this.Sut("Foo",
{})))},"Named class definition requires that field definition be an object":function(){try{this.Sut("Foo","Bar"),this.assertFail("Second argument to named class must be the definition")}catch(a){this.assertNotEqual(a.message.match("Foo"),null,"Error string contains class name")}},"Named class definition is strict on argument count":function(){var a=["Foo",{},"extra"];try{this.Sut.apply(null,a),this.assertFail("Should accept only two arguments when creating named class")}catch(c){var b=c.message;this.assertNotEqual(b.match("Foo"),
null,"Named class error should provide name of class");this.assertNotEqual(b.match(a.length+" given"),null,"Named class error should provide number of given arguments")}},"Converting anonymous class to string yields class string":function(){this.assertEqual(this.Sut({}).toString(),"(Class)")},"Converting abstract anonymous class to string yields class string":function(){this.assertEqual(this.AbstractClass({"abstract foo":[]}).toString(),"(AbstractClass)")},"Converting named class to string yields string containing name":function(){this.assertEqual(this.Sut("Foo",
{}).toString(),"Foo");this.assertEqual(this.AbstractClass("Foo",{"abstract foo":[]}).toString(),"Foo")},"Converting class instance to string yields instance string":function(){var a=this.Sut({})(),b=this.Sut("Foo",{})();this.assertEqual(a.toString(),"#<anonymous>");this.assertEqual(b.toString(),"#<Foo>")},"Can create named class using staging method":function(){var a=this.Sut("Foo").extend({});this.assertEqual(this.Sut.isClass(a),!0,"Named class generated via staging method is considered to be a valid class");
this.assertEqual(a.toString(),"Foo","Name is set on named clas via staging method")},"Can implement interfaces using staging method":function(){var a=this.require("interface"),a=this.Sut("Foo").implement(a({})).extend({});this.assertEqual(this.Sut.isClass(a),!0,"Named class generated via staging method, implementing an interface, is considered to be a valid class");this.assertEqual(a.toString(),"Foo","Name is set on named class via staging method when implementing")},"Can extend existing classes using staging method":function(){var a=
this.Sut("Foo").extend({}),b=this.Sut("Foo").extend(a,{});this.assertEqual(this.Sut.isClass(b),!0);this.assertOk(this.Sut.isInstanceOf(a,b()));this.assertEqual(b.toString(),"Foo")},"Class name is given when attempting to instantiate abstract class":function(){try{this.Sut("Foo",{"abstract foo":[]})(),this.assertFail("Was expecting instantiation error; there's a bug somewhere")}catch(a){this.assertNotEqual(a.message.match("Foo"),null,"Abstract class instantiation error should contain class name")}try{this.Sut({"abstract foo":[]})(),
this.assertFail("Was expecting instantiation error; there's a bug somewhere")}catch(a){this.assertNotEqual(a.message.match("(anonymous)"),null,"Abstract class instantiation error should recognize that class is anonymous if no name was given")}}})})(h["test/Class/NameTest"]={},"test/Class");(function(d,f){d.exports={};k=".";document.write("test/Class/ParentTest...<br />");g("common").testCase({setUp:function(){this.Sut=this.require("class")},"Subtype does not invoke overridden parent method by default":function(){var a=
!1;this.Sut({"virtual foo":function(){a=!0}}).extend({"override foo":function(){}})().foo();this.assertOk(!a)},"Subtype can invoke parent method with arguments":function(){var a=null;this.Sut({"virtual foo":function(b,c){a=[b,c]}}).extend({"override foo":function(a,c){this.__super(a,c)}})().foo("foobar","baz");this.assertNotEqual(a,null);this.assertEqual(a[0],"foobar");this.assertEqual(a[1],"baz")}})})(h["test/Class/ParentTest"]={},"test/Class");(function(d,f){d.exports={};k=".";document.write("test/Class/VisibilityTest...<br />");
var a=function(){return"foo"},b=function(){return"bar"},c=function(){return"baz"};g("common").testCase({caseSetUp:function(){this.Class=this.require("class");this.Interface=this.require("interface");this.util=this.require("util");this.Foo=this.Class.extend({"public pub":"foo","protected peeps":"bar","private parts":"baz","public pubf":a,"protected protf":b,"private privf":c,"virtual public getProp":function(a){return this[a]},"public nonOverrideGetProp":function(a){return this[a]},"public setValue":function(a,
b){this[a]=b},"public getSelf":function(){return this},"virtual public getSelfOverride":function(){},"public getPrivProp":function(){return this.parts},"public invokePriv":function(){return this._priv()},"private _priv":function(){return"baz"}});this.SubFoo=this.Foo.extend({"private _pfoo":"baz","override public getSelfOverride":function(){return this},"override public getProp":function(a){return this[a]},"private myOwnPrivateFoo":function(){}})},setUp:function(){this.foo=this.Foo();this.sub_foo=
this.SubFoo()},"Public members are accessible externally":function(){this.assertEqual(this.foo.pub,"foo","Public properties are accessible via public interface");this.assertEqual(this.foo.pubf(),"foo","Public methods are accessible via public interface")},"Public members are accessible internally":function(){this.assertEqual(this.foo.getProp("pub"),"foo","Public properties are accessible internally");this.assertEqual(this.foo.getProp("pubf")(),"foo","Public methods are accessible internally")},"Public properties are writable internally":function(){this.foo.setValue("pub",
"moomookittypoo");this.assertEqual(this.foo.getProp("pub"),"moomookittypoo","Setting the value of a public property internally should be observable /internally/");this.assertEqual(this.foo.pub,"moomookittypoo","Setting the value of a public property internally should be observable /externally/")},"Protected and private members are not accessible externally":function(){this.util.definePropertyFallback()||(this.assertEqual(this.foo.peeps,void 0,"Protected properties are inaccessible via public interface"),
this.assertEqual(this.foo.parts,void 0,"Private properties are inaccessible via public interface"),this.assertEqual(this.foo.protf,void 0,"Protected methods are inaccessible via public interface"),this.assertEqual(this.foo.privf,void 0,"Private methods are inaccessible via public interface"))},"Protected members are accessible internally":function(){this.assertEqual(this.foo.getProp("peeps"),"bar","Protected properties are available internally");this.assertEqual(this.foo.getProp("protf")(),"bar",
"Protected methods are available internally")},"Private members are accessible internally":function(){this.assertEqual(this.foo.getProp("parts"),"baz","Private properties are available internally");this.assertEqual(this.foo.getProp("privf")(),"baz","Private methods are available internally")},"Protected members are inherited from parent":function(){this.assertEqual(this.sub_foo.getProp("peeps"),"bar","Protected properties are available to subtypes");this.assertEqual(this.sub_foo.getProp("protf")(),
"bar","Protected methods are available to subtypes")},"Private members of supertypes are inaccessible to subtypes":function(){this.util.definePropertyFallback()||(this.assertEqual(this.sub_foo.getProp("parts"),void 0,"Private properties of supertypes should be unavailable to subtypes"),this.assertEqual(this.sub_foo.getProp("privf"),void 0,"Private methods of supertypes should be unavailable to subtypes"))},"Protected members are not shared between class instances":function(){this.foo.setValue("prot",
"foobar");this.assertNotEqual(this.sub_foo.getProp("prot"),"foobar","Class instances do not share protected values (subtype)");this.SubFoo().setValue("prot","foobar");this.assertNotEqual(this.sub_foo.getProp("prot"),"foobar","Class instances do not share protected values (same type)")},"Returning self from method should return instance not prop obj":function(){this.assertDeepEqual(this.foo.getSelf(),this.foo,"Returning 'this' from a method should return instance of self");this.assertDeepEqual(this.sub_foo.getSelf(),
this.sub_foo,"Returning 'this' from a super method should return the subtype");this.assertDeepEqual(this.sub_foo.getSelfOverride(),this.sub_foo,"Returning 'this' from a overridden method should return subtype")},"Parent methods can access private members of parent":function(){this.assertEqual(this.sub_foo.getPrivProp(),"baz","Parent methods should have access to the private properties of the parent");this.assertEqual(this.sub_foo.invokePriv(),"baz","Parent methods should have access to the private methods of the parent");
var a=this.SubFoo.extend({})();this.assertEqual(a.getPrivProp(),"baz","Parent methods should have access to the private properties of the parent (2)");this.assertEqual(a.invokePriv(),"baz","Parent methods should have access to the private methods of the parent (2)")},"Parents should not have access to private members of subtypes":function(){this.util.definePropertyFallback()||(this.assertEqual(this.sub_foo.nonOverrideGetProp("_pfoo"),void 0,"Parent should not have access to private properties of subtype whena parent method is invoked"),
this.assertEqual(this.sub_foo.nonOverrideGetProp("_myOwnPrivateFoo"),void 0,"Parent should not have access to private methods of subtype when a parent method is invoked"))},"Can escalate member visibility":function(){var a=this;this.assertDoesNotThrow(function(){a.Class({"protected foo":"bar","virtual protected baz":function(){}}).extend({"public foo":"bar","override public baz":function(){}})},Error,"Can escalate visibility of subtype members");this.assertDoesNotThrow(function(){a.Class({"protected foo":"bar",
"virtual protected baz":function(){}}).extend({"protected foo":"bar","override protected baz":function(){}})},Error,"Can retain level of visibility for subtype members")},"Cannot de-escalate member visibility":function(){var a=this;this.assertThrows(function(){a.Class({"public foo":"bar"}).extend({"protected foo":"bar"})},Error,"Cannot de-escalate visibility of sub-props to protected");this.assertThrows(function(){a.Class({"virtual public baz":function(){}}).extend({"protected baz":function(){}})},
Error,"Cannot de-escalate visibility of sub-methods to protected");this.assertThrows(function(){a.Class({"public foo":"bar"}).extend({"private foo":"bar"})},Error,"Cannot de-escalate visibility of subtype props to private");this.assertThrows(function(){a.Class({"virtual public baz":function(){}}).extend({"private baz":function(){}})},Error,"Cannot de-escalate visibility of sub-methods to private");this.assertThrows(function(){a.Class({"protected foo":"bar"}).extend({"private foo":"bar"})},Error,"Cannot de-escalate visibility of sub-props to private2");
this.assertThrows(function(){a.Class({"virtual protected baz":function(){}}).extend({"private baz":function(){}})},Error,"Cannot de-escalate visibility of sub-methods to private2")},"Calling super method works properly with protected methods":function(){var a=this.Class({"virtual protected foo":function(){return"foobar"}}).extend({"override public foo":function(){return this.__super()}})().foo();this.assertEqual(a,"foobar","__super() calls work with protected overrides")},"Visibility de-escalation rulse apply to interfaces":function(){var a=
this;this.assertThrows(function(){Class.implement(a.Interface({"abstract public foo":[]})).extend({"protected foo":function(){}})},Error,"Cannot de-escalate visibility for interface members")},"Can override protected method functionality with public":function(){var a=this.Class({"virtual protected foo":function(){return!1}}).extend({"override public foo":function(){return!0}})().foo();this.assertEqual(a,!0,"Can properly override protected methods with public")},"Protected method overrides are observable by supertype":function(){var a=
this,b=!1;this.Class({"public doFoo":function(){return this.foo()},"virtual protected foo":function(){a.fail(!0,!1,"Method not overridden")}}).extend({"public override foo":function(){b=!0}})().doFoo();this.assertOk(b)},"Protected values are available to subtypes when set by parent":function(){var a=this.Class({"protected val":0,"public __construct":function(){this.val=5}}).extend({"public getVal":function(){return this.val}})().getVal();this.assertEqual(a,5,"Subtypes should have acess to protected properties values set by super methods")},
"Can properly override protected with protected":function(){var a=this.Class({"virtual protected foo":function(){}}).extend({"override protected foo":function(){return"foobar"},"public doFoo":function(){return this.foo()}})().doFoo();this.assertEqual(a,"foobar","Protected methods can properly be overriden by another protected method")}})})(h["test/Class/VisibilityTest"]={},"test/Class");(function(d,f){d.exports={};k=".";document.write("test/ClassBuilder/ConstTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=
this.require("ClassBuilder");this.MethodWrapperFactory=this.require("MethodWrapperFactory");this.wrappers=this.require("MethodWrappers").standard},setUp:function(){this.builder=this.Sut(this.require("warn").DismissiveHandler(),this.require("MemberBuilder")(this.MethodWrapperFactory(this.wrappers.wrapNew),this.MethodWrapperFactory(this.wrappers.wrapOverride),this.MethodWrapperFactory(this.wrappers.wrapProxy),this.getMock("MemberBuilderValidator")),this.require("VisibilityObjectFactoryFactory").fromEnvironment())},
"const keyword declares properties as static":function(){var a=this.builder.build({"const foo":"baz"});this.assertEqual("baz",a.$("foo"),"Const keyword should declare properties as static")},"const keyword creates immutable property":function(){try{this.builder.build({"const foo":"bar"}).$("foo","baz")}catch(a){this.assertOk(-1!==a.message.search("foo"),"Const modification error should contain name of property");return}this.fail("Constant properties should not be writable")},"Access modifiers are permitted with const keyword":function(){var a=
this.builder.build({"protected const prot":"bar","private   const priv":"baz","public static getProt":function(){return this.$("prot")},"public static getPriv":function(){return this.$("priv")}}),b=this.builder.build(a,{"public static getProt":function(){return this.$("prot")},"public static getPriv":function(){return this.$("priv")}});this.assertEqual(a.$("prot"),void 0,"Protected constants are not available publicly");this.assertEqual(a.$("priv"),void 0,"Private constants are not available publicly");
this.assertEqual(a.getProt(),"bar","Protected constants are available internally");this.assertEqual(a.getPriv(),"baz","Private constants are available internally");this.assertEqual(b.getProt(),"bar","Protected constants are available to subtypes internally");this.assertEqual(b.getPriv(),void 0,"Private constants are NOT available to subtypes internally")}})})(h["test/ClassBuilder/ConstTest"]={},"test/ClassBuilder");(function(d,f){d.exports={};k=".";document.write("test/ClassBuilder/ErrorExtendTest...<br />");
g("common").testCase({caseSetUp:function(){this.Sut=this.require("ClassBuilder");this.MethodWrapperFactory=this.require("MethodWrapperFactory");this.wrappers=this.require("MethodWrappers").standard;this.util=this.require("util");this.errtypes=[Error,TypeError,SyntaxError,ReferenceError,EvalError,RangeError,URIError];this.ctors=["__construct","constructor"]},setUp:function(){this.stubEctor={createCtor:function(){},isError:function(){return!0}};this.builder=this.Sut(this.require("warn").DismissiveHandler(),
this.require("/MemberBuilder")(this.MethodWrapperFactory(this.wrappers.wrapNew),this.MethodWrapperFactory(this.wrappers.wrapOverride),this.MethodWrapperFactory(this.wrappers.wrapProxy),this.getMock("MemberBuilderValidator")),this.require("/VisibilityObjectFactoryFactory").fromEnvironment(),this.stubEctor)},"Uses constructor generator for error extension determination":function(){var a=!1;this.stubEctor.isError=function(){return!1};this.stubEctor.createCtor=function(){a=!0};this.builder.build(Error,
{})();this.assertOk(!a)},"@each(errtypes) Produces error constructor":function(a){this.stubEctor.createCtor=function(a,b){return function(){this.givenSupertype=a;this.givenName=b}};var b=this.builder.build(a,{__name:"ename",givenSupertype:"",givenName:""})();this.assertEqual(a,b.givenSupertype);this.assertEqual("ename",b.givenName)},"@each(errtypes) Error subtype is instanceof parent":function(a){this.assertOk(this.builder.build(a,{})()instanceof a)},"Message and stack are public":function(){this.stubEctor.createCtor=
function(a,c){return function(){this.message="expected msg";this.stack="expected stack"}};var a=this.builder.build({},{})();this.assertEqual("expected msg",a.message);this.assertEqual("expected stack",a.stack)},"@each(ctors) Can override generated constructor":function(a){var b=!1,c=!1;this.stubEctor.createCtor=function(a,c,e){return function(){b=!0;e()}};var e={};e[a]=function(){c=!0};this.builder.build({},e)();this.assertOk(b);this.assertOk(c)}})})(h["test/ClassBuilder/ErrorExtendTest"]={},"test/ClassBuilder");
(function(d,f){d.exports={};k=".";document.write("test/ClassBuilder/FinalTest...<br />");g("common").testCase({caseSetUp:function(){this.Class=this.require("class");this.FinalClass=this.require("class_final")},"Final classes are valid classes":function(){this.assertOk(this.Class.isClass(this.FinalClass({})),"Final classes should generate valid classes")},"Final classes cannot be extended":function(){try{this.FinalClass("Foo",{}).extend({})}catch(a){this.assertOk(-1!==a.message.search("Foo"),"Final class error message should contain name of class");
return}this.assertFail("Should not be able to extend final classes")},"Can create final subtypes":function(){var a=this.require("ClassBuilder")(this.require("warn").DismissiveHandler(),this.require("MemberBuilder")(),this.require("VisibilityObjectFactoryFactory").fromEnvironment()).build({}),b=this.FinalClass("FinalNamed").extend(a,{}),c=this.FinalClass.extend(a,{});this.assertThrows(function(){b.extend({})},Error,"Cannot extend final named subtype");this.assertThrows(function(){c.extend({})},Error,
"Cannot extend final anonymous subtype")}})})(h["test/ClassBuilder/FinalTest"]={},"test/ClassBuilder");(function(d,f){d.exports={};k=".";document.write("test/ClassBuilder/InstanceTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("ClassBuilder")},"Delegates to type-specific instance method if present":function(){var a=this,b={},c=!1,e={__isInstanceOf:function(d,f){a.assertStrictEqual(d,e);a.assertStrictEqual(f,b);return c=!0}};this.assertOk(this.Sut.isInstanceOf(e,b));
this.assertOk(c)},"Falls back to ECMAScript instanceof check lacking type method":function(){var a=function(){},b=new a;this.assertOk(this.Sut.isInstanceOf(a,b));this.assertOk(!this.Sut.isInstanceOf(a,{}))},"Fallback does not throw exception if type is not a constructor":function(){var a=this;this.assertDoesNotThrow(function(){a.assertOk(!a.Sut.isInstanceOf({},{}))})}})})(h["test/ClassBuilder/InstanceTest"]={},"test/ClassBuilder");(function(d,f){d.exports={};k=".";document.write("test/ClassBuilder/MemberRestrictionTest...<br />");
g("common").testCase({caseSetUp:function(){this.Class=this.require("class");this.AbstractClass=this.require("class_abstract");this.Sut=this.require("ClassBuilder");this.weak=[["weak foo","foo"],["foo","weak foo"],["weak foo","weak foo"]]},"Can retrieve a list of reserved members":function(){var a=this.Sut.getReservedMembers();this.assertOk(a instanceof Object,"Can retrieve hash of reserved members")},"Cannot modify internal reserved members list":function(){this.Sut.getReservedMembers().foo="foo";
this.assertNotEqual(this.Sut.getReservedMembers().foo,"foo","Cannot alter internal list of reserved members")},"Proper members are reserved":function(){for(var a=["__initProps"],b=a.length,c=this.Sut.getReservedMembers();b--;){var e=a[b];this.assertOk(c.hasOwnProperty(e),"Member '"+e+"' should be reserved");delete c[e]}for(var d in c)this.assertFail("Untested reserved member found: "+d)},"All reserved members are actually reserved":function(){var a=this,b=this.Sut.getReservedMembers(),c=0,e;for(e in b)this.assertThrows(function(){var b=
{};b[e]="";a.Class(b)},Error,"Reserved members cannot be used in class definitions as properties"),this.assertThrows(function(){var b={};b[e]=function(){};a.Class(b)},Error,"Reserved members cannot be used in class definitions as methods"),c++;this.assertNotEqual(c,0,"Reserved memebers were tested")},"Can retrieve list of forced public methods":function(){var a=this.Sut.getForcedPublicMethods(),b=0;this.assertOk(a instanceof Object,"Can retrieve hash of forced-public methods");for(var c in a)b++;
this.assertNotEqual(b,0,"Forced-public method list is not empty")},"Cannot modify internal forced public methods list":function(){this.Sut.getForcedPublicMethods().foo="foo";this.assertNotEqual(this.Sut.getForcedPublicMethods().foo,"foo","Cannot alter internal list of forced-public methods")},"All forced public methods are forced to public":function(){var a=this,b=this.Sut.getForcedPublicMethods(),c;for(c in b)this.assertThrows(function(){var b={};b["private "+c]=function(){};a.Class(b)},Error,"Forced-public methods must be declared as public")},
"Cannot define two members of the same name":function(){var a=this;this.assertThrows(function(){a.Class({"public foo":function(){},"protected foo":function(){}})})},"@each(weak) Can define members of the same name if one is weak":function(a){var b={};b["abstract "+a[0]]=[];b["abstract "+a[1]]=[];var c=this;this.assertDoesNotThrow(function(){c.AbstractClass(b)})},"Member builder state is ended after processing":function(){var a=this.require("MemberBuilder")(),b=this.Sut(this.require("warn").DismissiveHandler(),
a,this.require("VisibilityObjectFactoryFactory").fromEnvironment()),c=!1;a.end=function(a){c=!0};b.build({});this.assertOk(c)}})})(h["test/ClassBuilder/MemberRestrictionTest"]={},"test/ClassBuilder");(function(d,f){d.exports={};k=".";document.write("test/ClassBuilder/StaticTest...<br />");g("common").testCase({caseSetUp:function(){this.fallback=this.require("util").definePropertyFallback();this.ClassBuilder=this.require("ClassBuilder");this.MemberBuilder=this.require("MemberBuilder");this.MethodWrapperFactory=
this.require("MethodWrapperFactory");this.wrappers=this.require("MethodWrappers").standard},setUp:function(){this.builder=this.ClassBuilder(this.require("warn").DismissiveHandler(),this.MemberBuilder(this.MethodWrapperFactory(this.wrappers.wrapNew),this.MethodWrapperFactory(this.wrappers.wrapOverride),this.MethodWrapperFactory(this.wrappers.wrapProxy),this.getMock("MemberBuilderValidator")),this.require("VisibilityObjectFactoryFactory").fromEnvironment())},"Self property references class definition":function(){var a=
this.builder.build({"public test":function(){return this.__self}});a.bar=["baz"];this.assertOk(a().test().bar===a.bar,"__self property references class definition")},"Static property lookup returns undefined if not found":function(){var a=this.builder.build({}).$("foo");this.assertEqual(a,void 0,"Static property getter should return undefined if not found")},"Static property accessor is not enumerable":function(){var a=Object.getOwnPropertyDescriptor,b=this.builder.build({});this.fallback||this.assertEqual(a(b,
"$").enumerable,!1,"Static property accessor method should not be enumerable")},"Public static members are accessible via class definition only":function(){var a=this.builder.build({"public static foo":"foo","static bar":"bar","public static baz":function(){return"foo"},"static foobar":function(){return"bar"}});this.assertEqual(a.$("foo"),"foo","Public static properties should be accessible via class definition");this.assertEqual(a.$("bar"),"bar","Static properties are public by default");this.assertEqual(a.baz(),
"foo","Public static methods should be accessible via class definition");this.assertEqual(a.foobar(),"bar","Static methods are public by default");this.assertEqual(a.prototype.$,void 0,"Public static properties are *not* part of the prototype")},"Public static getters/setter accessible via class dfn only":function(){if(!this.fallback){var a={},b=[];Object.defineProperty(a,"public static foo",{get:function(){return"baz"},set:function(){b[0]=!0},enumerable:!0});Object.defineProperty(a,"static bar",
{get:function(){return"baz"},set:function(){b[1]=!0},enumerable:!0});a=this.builder.build(a);this.assertEqual(a.foo,"baz","Public static getters are accessible via class definition");a.foo="moo";this.assertEqual(b[0],!0,"Public static setters are accessible via class definition");this.assertEqual(a.bar,"baz","Static getters are public by default");a.bar="moo";this.assertEqual(b[1],!0,"Static setters are public by default");this.assertEqual(a.prototype.foo,void 0,"Public static getters/getters are unavailable on prototype (0)");
this.assertEqual(a.prototype.bar,void 0,"Public static getters/getters are unavailable on prototype (1)")}},"Static methods not bound to instance":function(){var a=null,b=this.builder.build({"public static foo":function(){a=this}});b.foo();this.assertEqual(a.foo,b.foo,"Static members are bound to class definition rather than instance")},"Public static members are inherited by subtypes":function(){var a={"public static foo":"val","public static func":function(){},"public bla":"moo"};this.fallback||
Object.defineProperty(a,"public static bar",{get:function(){},set:function(){},enumerable:!0});var b=this.builder.build(a),c=this.builder.build(b,{"public static baz":"foobar"}),a=this.builder.build(c,{});this.assertEqual(c.$("foo"),b.$("foo"),"Public static properties are inherited by subtypes");this.assertEqual(a.$("foo"),b.$("foo"),"Public static properties are inherited by sub-subtypes");this.assertDeepEqual(c.func,b.func,"Public static methods are inherited by subtypes");this.assertDeepEqual(a.func,
b.func,"Public static methods are inherited by sub-subtypes");this.assertEqual(c.$("baz"),"foobar","Subtypes contain both inherited static members as well as their own");this.fallback||(b=Object.getOwnPropertyDescriptor(b,"bar"),c=Object.getOwnPropertyDescriptor(c,"bar"),a=Object.getOwnPropertyDescriptor(a,"bar"),this.assertDeepEqual(b.get,c.get,"Public static getters are inherited by subtypes"),this.assertDeepEqual(b.get,a.get,"Public static getters are inherited by sub-subtypes"),this.assertDeepEqual(b.set,
c.set,"Public static setters are inherited by subtypes"),this.assertDeepEqual(b.set,a.set,"Public static setters are inherited by sub-subtypes"))},"Public static property references are inherited by subtypes":function(){var a=[1,2,3],b=["a","b","c"],c=this.builder.build({"public static bar":a}),e=this.builder.build(c,{});this.assertOk(e.$("bar")===c.$("bar"),"Inherited static properties should share references");c.$("bar",b);this.assertDeepEqual(c.$("bar"),b,"Can set static property values");this.assertOk(c.$("bar")===
e.$("bar"),"Setting a static property value on a supertype also sets the value on subtypes");e.$("bar",a);this.assertOk(c.$("bar")===e.$("bar"))},"Setting static props to undefined will not corrupt lookup":function(){var a=this.builder.build({"public static foo":""});a.$("foo",null);this.assertStrictEqual(a.$("foo"),null,"Static properties may be set to null");a.$("foo",void 0);this.assertStrictEqual(a.$("foo"),void 0,"Static properties may be set to undefined");a.$("foo","baz");this.assertEqual(a.$("foo"),
"baz","Setting static property to undefined does not corrupt lookup process")},"Static property setters return proper context":function(){var a=this.builder.build({"public static foo":""}),b=this.builder.build(a,{});this.assertOk(a.$("foo","val")===a,"Static property setter returns self");this.assertOk(b.$("foo","val")===b,"Static property setter returns calling class, even if property is owned by a supertype")},"Attempting to set undeclared static prop results in exception":function(){var a=this;
this.assertThrows(function(){a.builder.build({}).$("foo","val")},ReferenceError,"Attempting to set an undeclaraed static property results in an exception")},"Accessing static accessor method on non-class base also works":function(){var a=this,b=function(){},c=a.builder.build(b,{});b.$=function(){a.fail("Should not call static accessor method of non-class base")};this.assertEqual(void 0,c.$("foo"));this.assertThrows(function(){c.$("foo","val")},ReferenceError,"Attempting to set an undeclaraed static property results in an exception on non-class base")},
"Protected static members are available inside class only":function(){var a=this.builder.build({"protected static prop":"foo","protected static baz":function(){return"foo"},"public static staticBaz":function(){return this.baz()},"public instBaz":function(){return this.__self.baz()},"public static staticGetProp":function(){return this.$("prop")},"public instGetProp":function(){return this.__self.$("prop")}});this.assertEqual(a.baz,void 0,"Protected methods should not be accessible outside the class");
this.assertEqual(a.staticBaz(),"foo","Protected methods are accessible to static methods");this.assertEqual(a().instBaz(),"foo","Protected methods are accessible to instance methods");this.assertEqual(a.staticGetProp(),"foo","Protected static properties are accessible to static methods");this.assertEqual(a().instGetProp(),"foo","Protected static properties are accessible to instance methods")},"Protected static getters/setters accessible inside class only":function(){if(!this.fallback){var a={"public static getProp":function(){return this.foo},
"public static setProp":function(a){this.foo=a}},b=[];Object.defineProperty(a,"protected static foo",{get:function(){return"baz"},set:function(){b[0]=!0},enumerable:!0});a=this.builder.build(a);this.assertEqual(a.getProp(),"baz","Protected static getters are accessible from within the class");a.setProp("bla");this.assertEqual(b[0],!0,"Protected static setters are accessible from within the class");this.assertEqual(a.foo,void 0,"Protected static getters/getters are not public")}},"Protected static members are inherited by subtypes":function(){var a=
{"protected static prop":"baz","protected static foo":function(){return"baz"}};this.fallback||(Object.defineProperty(a,"protected static bar",{get:function(){},set:function(){},enumerable:!0}),a["public static getPropDesc"]=function(a){return Object.getOwnPropertyDescriptor(this,a)});var b=this.builder.build(a),c=this.builder.build(b,{"public static bar":function(){return this.foo()},"protected static foo2":function(){return"bazbaz"},"public static bar2":function(){return this.foo2()},"public static getProp":function(){return this.$("prop")}}),
a=this.builder.build(c,{});this.assertEqual(c.bar(),"baz","Subtypes inherit parents' protected static methods");this.assertEqual(c.bar2(),"bazbaz","Static methods have access to other static methods in the same class");this.assertEqual(a.bar(),"baz","Sub-subtypes inherit parents' protected static methods");this.assertEqual(c.getProp(),"baz","Subtypes inherit parents' protected static properties");this.assertEqual(a.getProp(),"baz","Sub-subtypes inherit parents' protected static properties");this.fallback||
(b=b.getPropDesc("bar"),c=c.getPropDesc("bar"),a=a.getPropDesc("bar"),this.assertDeepEqual(b.get,c.get,"Protected static getters are inherited by subtypes"),this.assertDeepEqual(b.get,a.get,"Protected static getters are inherited by sub-subtypes"),this.assertDeepEqual(b.set,c.set,"Protected static setters are inherited by subtypes"),this.assertDeepEqual(b.set,a.set,"Protected static setters are inherited by sub-subtypes"))},"Private static members are available inside class only":function(){var a=
this.builder.build({"private static prop":"foo","private static baz":function(){return"foo"},"public static staticBaz":function(){return this.baz()},"public instBaz":function(){return this.__self.baz()},"public static staticGetProp":function(){return this.$("prop")},"public instGetProp":function(){return this.__self.$("prop")}});this.assertEqual(a.baz,void 0,"Private methods should not be accessible outside the class");this.assertEqual(a.staticBaz(),"foo","Private methods are accessible to static methods");
this.assertEqual(a().instBaz(),"foo","Private methods are accessible to instance methods");this.assertEqual(a.staticGetProp(),"foo","Private static properties are accessible to static methods");this.assertEqual(a().instGetProp(),"foo","Private static properties are accessible to instance methods")},"Private static members are not inherited by subtypes":function(){var a={"private static prop":"foo","private static priv":function(){}};this.fallback||Object.defineProperty(a,"private static foo",{get:function(){return"foo"},
set:function(){},enumerable:!0});a=this.builder.build(a);a=this.builder.build(a,{"public static getPriv":function(){return this.priv},"public static getGetSet":function(){return this.foo},"public static staticGetProp":function(){return this.$("prop")},"public instGetProp":function(){return this.__self.$("prop")}});this.assertEqual(a.getPriv(),void 0,"Private static methods should not be inherited by subtypes");this.assertEqual(a.getGetSet(),void 0,"Private static getters/setters should not be inherited by subtypes");
this.assertEqual(a().instGetProp(),void 0,"Private static properties should not be inherited by subtypes (inst)");this.assertEqual(a.staticGetProp(),void 0,"Private static properties should not be inherited by subtypes (static)")},"Private static getters/setters accessible inside class only":function(){if(!this.fallback){var a={"public static getProp":function(){return this.foo},"public static setProp":function(a){this.foo=a}},b=[];Object.defineProperty(a,"private static foo",{get:function(){return"baz"},
set:function(){b[0]=!0},enumerable:!0});a=this.builder.build(a);this.assertEqual(a.getProp(),"baz","Private static getters are accessible from within the class");a.setProp("bla");this.assertEqual(b[0],!0,"Private static setters are accessible from within the class");this.assertEqual(a.foo,void 0,"Private static getters/getters are not public")}},"Static methods can be overridden by subtypes":function(){var a=this.builder.build({"public static foo":function(){},"protected static bar":function(){}}),
a=this.builder.build(a,{"public static foo":function(){return"bar"},"public static prot":function(){return this.bar()},"protected static bar":function(){return"bar"}});this.assertEqual(a.foo(),"bar","Public static methods can be overridden by subtypes");this.assertEqual(a.prot(),"bar","Protected static methods can be overridden by subtypes")},"Cannot exploit accessor method to gain access to parent private props":function(){var a=this.builder.build({"private static foo":"bar"}),b=this.builder.build(a,
{"public static getParentPrivate":function(){return this.$.call(a,"foo")}});this.assertEqual(b.getParentPrivate(),void 0,"Cannot exploit accses modifier to gain access to parent private props")},"Cannot override static members":function(){var a=this.builder.build({"public static prop":"foobaz","public static foo":function(){return this.bar()},"public static bar":function(){return"foobaz"},"public static baz":function(){return this.$("prop")}}),a=this.builder.build(a,{"public static prop":"foobar",
"public static bar":function(){return"foobar"},"public static getProp":function(){return this.$("prop")}});this.assertNotEqual(a.foo(),"foobar","System does not support overriding static methods");this.assertNotEqual(a.baz(),"foobar","System does not support overriding static properties");this.assertEqual(a.bar(),"foobar","System supports static method hiding");this.assertEqual(a.getProp(),"foobar","System supports static property hiding")},"Calls to parent static methods retain private member access":function(){var a=
this.builder.build({"private static _priv":"foobar","public static getPriv":function(){return this.$("_priv")}}),a=this.builder.build(a,{"public static getPriv2":function(){return this.getPriv()}});this.assertEqual(a.getPriv(),"foobar","Calls to parent static methods should retain access to their own private members when called externally");this.assertEqual(a.getPriv2(),"foobar","Calls to parent static methods should retain access to their own private members when called internally")}})})(h["test/ClassBuilder/StaticTest"]=
{},"test/ClassBuilder");(function(d,f){d.exports={};k=".";document.write("test/ClassBuilder/VisibilityTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("ClassBuilder");this.MethodWrapperFactory=this.require("MethodWrapperFactory");this.wrappers=this.require("MethodWrappers").standard;this.util=this.require("util")},setUp:function(){this.builder=this.Sut(this.require("warn").DismissiveHandler(),this.require("/MemberBuilder")(this.MethodWrapperFactory(this.wrappers.wrapNew),
this.MethodWrapperFactory(this.wrappers.wrapOverride),this.MethodWrapperFactory(this.wrappers.wrapProxy),this.getMock("MemberBuilderValidator")),this.require("/VisibilityObjectFactoryFactory").fromEnvironment())},"Self property references instance rather than property object":function(){var a=null,b=null,c=this.builder.build({"public __construct":function(){a=this.__inst;b=this}})();this.assertDeepEqual(a,c,"this.__inst returns reference to actual instance");!1===this.util.definePropertyFallback()&&
this.assertEqual(Object.getOwnPropertyDescriptor(b,"__inst").writable,!1,"this.__inst is not writable")}})})(h["test/ClassBuilder/VisibilityTest"]={},"test/ClassBuilder");(function(d,f){d.exports={};k=".";document.write("test/FallbackMemberBuilderTest...<br />");g("./common").testCase({setUp:function(){var a=this.require("MethodWrapperFactory")(function(a){return a});this.sut=this.require("FallbackMemberBuilder")(a,a)},"Inherits from MemberBuilder":function(){this.assertOk(this.sut instanceof this.require("MemberBuilder"),
"FallbackMemberBuilder should inherit from MemberBuilder")},"buildGetterSetter() method throws an exception":function(){try{this.sut.buildGetterSetter(),this.fail("Exception should have been called (getter/setter)")}catch(a){this.assertOk(a.message.match(/unsupported/),"Incorrect exception thrown (getter/setter)")}}})})(h["test/FallbackMemberBuilderTest"]={},"test");(function(d,f){d.exports={};k=".";document.write("test/FallbackVisibilityObjectFactoryTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=
this.require("FallbackVisibilityObjectFactory");this.VisibilityObjectFactory=this.require("VisibilityObjectFactory");this.props=this.methods={"public":{},"protected":{},"private":{}}},"Can instantiate with and without `new` keyword":function(){this.assertOk(new this.Sut instanceof this.Sut,"Should be able to instantiate FallbackVisibilityObjectFactory with 'new' keyword");this.assertOk(this.Sut()instanceof this.Sut,"Should be able to instantiate FallbackVisibilityObjectFactory without 'new' keyword")},
"Inherits from visibility object factory":function(){this.assertOk(this.Sut()instanceof this.VisibilityObjectFactory,"Fallback should inherit from VisibilityObjectFactory")},"Setup method should not add private layer":function(){var a={},b=this.Sut().setup(a,this.props,this.methods);this.assertStrictEqual(a,b,"Private visibility layer is not added atop destination")},"Creating property proxy should simply return self":function(){var a={};this.assertStrictEqual(this.Sut().createPropProxy(a,{},this.props),
a,"Creating property proxy should simply return original object")}})})(h["test/FallbackVisibilityObjectFactoryTest"]={},"test");(function(d,f){d.exports={};k=".";document.write("test/Interface/ExtendTest...<br />");var a=g("common"),b=a.require("interface"),c=!a.require("util").definePropertyFallback();a.testCase({caseSetUp:function(){this.baseTypes=[b.extend({method:[]}),b({method:[]})];this.invalidExtend=["moo",5,!1,void 0];this.badAm=["protected","private"]},"Properties are not permitted within interfaces":function(){this.assertThrows(function(){b.extend({prop:"not permitted"})},
TypeError,"Properties are not permitted within Interface definitions")},"Getters are setters are not permitted within intefaces":function(){if(c){var a={};Object.defineProperty(a,"foo",{get:function(){},set:function(){},enumerable:!0});this.assertThrows(function(){b.extend(a)},TypeError,"Getters/setters not permitted within Interfaces")}},"Concrete methods are not permitted":function(){this.assertThrows(function(){b.extend({method:function(){}})},TypeError,"Concrete methods are not permitted within Interface definitions")},
"Method declarations (using arrays) are permitted":function(){this.assertDoesNotThrow(function(){b.extend({method:[]})},TypeError,"Abstract method declarations are allowed within Interface definitions")},"@each(baseTypes) Interface contains defined abstract methods":function(a){this.assertOk("function"===typeof a.prototype.method,"Interface should contain defined abstract methods")},"@each(baseTypes) Result is considered to be an interface":function(a){this.assertEqual(b.isInterface(a),!0)},"@each(baseTypes) Can extend interface using Interface.extend()":function(a){var c=
b.extend(a,{});this.assertOk(c.prototype instanceof a,"Generic interface extend method should be able to extend from other interfaces")},"@each(baseTypes) Interface subtypes inherit abstract methods":function(a){var c=b.extend(a,{});this.assertOk(c.prototype.method===a.prototype.method,"Interface subtypes inherit abstract methods")},"@each(baseTypes) Interfaces can extend the API with abstract methods":function(a){a=b.extend(a,{second:[]});this.assertOk("function"===typeof a.prototype.second,"Should be able to extend interfaces with additional abstract methods")},
"@each(baseTypes) Interfaces contain an extend() method":function(a){this.assertOk("function"===typeof a.extend,"Interface should contain extend() method")},"@each(baseTypes) extend() method on interface itself can extend":function(a){var b=a.extend({});this.assertOk(b.prototype instanceof a,"Interface extend method can extend interfaces")},"@each(baseTypes) Interface's extend() method can add to the API":function(a){a=a.extend({second:[]});this.assertOk("function"===typeof a.prototype.second,"Interfaces should be able to be extended with additional abstract methods using shorthand extend method")},
"@each(invalidExtend) Invoking module to extend requires object":function(a){this.assertThrows(function(){b(a)},TypeError,"Invoking interface module should require object as argument if extending from base interface")},"Only one argment for interface definitions is permitted":function(){var a=[{},"one","two","three"];try{b.apply(null,a),this.fail("Only one argument for interface definitions should be permitted")}catch(c){this.assertOk(-1<c.message.search(a.length+" given"),"Interface invocation should give argument count on error")}},
"@each(badAm) Interface members must be public":function(a){this.assertThrows(function(){var c={};c[a+" foo"]=[];b(c)},Error,"Interface members should not be able to be "+a)},"Interfaces can only extend interfaces":function(){this.assertThrows(function(){b.extend(function(){},{})},TypeError,"Should not be able to extend from non-interface")}})})(h["test/Interface/ExtendTest"]={},"test/Interface");(function(d,f){d.exports={};k=".";document.write("test/Interface/GeneralTest...<br />");g("common").testCase({setUp:function(){this.FooType=
this.require("interface").extend()},"Interface extend method creates a new interface object":function(){this.assertOk("function"===typeof this.FooType,"Interface extend method creates a new interface object")},"Interfaces cannot be instantiated":function(){this.assertThrows(function(){new this.FooType},Error,"Should not be able to instantiate interfaces")},"Generated interface should be frozen":function(){Object.isFrozen&&this.assertEqual(Object.isFrozen(this.FooType),!0,"Generated interface object should be frozen")}})})(h["test/Interface/GeneralTest"]=
{},"test/Interface");(function(d,f){d.exports={};k=".";document.write("test/Interface/InteropTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("interface");this.Class=this.require("class");this.I=this.Sut({foo:["a","b"],bar:["a"]});this.assertICompat=function(a,b){this.assertOk(a.isCompatible(b));this.assertOk(this.Sut.isInstanceOf(a,b))};this.assertNotICompat=function(a,b){this.assertOk(!a.isCompatible(b));this.assertOk(!this.Sut.isInstanceOf(a,b))}},"Prototype instances and objects can conform to interfaces":function(){function a(){}
a.prototype={foo:function(a,b){},bar:function(a){}};var b=new a;this.assertICompat(this.I,b);this.assertICompat(this.I,a.prototype)},"Objects missing methods are non-conforming":function(){function a(){}a.prototype={foo:function(a,c){}};this.assertNotICompat(this.I,new a);this.assertNotICompat(this.I,a.prototype)},"Methods missing parameters are non-conforming":function(){var a=this.Sut({foo:["a","b"]});this.assertNotICompat(a,{foo:function(a){}})},"Methods are still compatible with extra parameters":function(){var a=
this.Sut({foo:["a","b"]});this.assertICompat(a,{foo:function(a,c,e){}})},"Interface methods must be implemented as functions":function(){var a=this.Sut({foo:[]});this.assertNotICompat(a,{foo:{}})},"Additional methods do not trigger incompatibility":function(){var a=this.Sut({foo:[]});this.assertICompat(a,{foo:function(){},bar:function(){}})},"Objects can be compatible but not instances of interface":function(){var a=this.Sut({foo:[]}),b=this.Sut({foo:[]}),c={foo:function(){}},e=this.Class.implement(a).extend(c),
c=this.Class.implement(b).extend(c),e=e(),c=c();this.assertOk(a.isCompatible(e));this.assertOk(a.isCompatible(c));this.assertOk(b.isCompatible(e));this.assertOk(b.isCompatible(c));this.assertOk(this.Sut.isInstanceOf(a,e));this.assertOk(!this.Sut.isInstanceOf(a,c));this.assertOk(this.Sut.isInstanceOf(b,c));this.assertOk(!this.Sut.isInstanceOf(b,e))}})})(h["test/Interface/InteropTest"]={},"test/Interface");(function(d,f){d.exports={};k=".";document.write("test/Interface/NameTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=
this.require("interface");this.util=this.require("util")},"Interface accepts name":function(){var a=this;this.assertDoesNotThrow(function(){var b=a.Sut("Foo",{});a.assertOk(a.Sut.isInterface(b))},Error)},"Named interface definition requires that definition be an object":function(){try{this.Sut("Foo","Bar"),this.assertFail("Second argument to named interface must be the definition")}catch(a){this.assertNotEqual(a.message.match("Foo"),null,"Interface definition argument count error string contains interface name")}},
"Named interface definition is strict on argument count":function(){var a=["Foo",{},"extra"];try{this.Sut.apply(null,a),assert.fail("Should accept only two arguments when creating named interface")}catch(c){var b=c.message;this.assertNotEqual(b.match("Foo"),null,"Named interface error should provide interface name");this.assertNotEqual(b.match(a.length+" given"),null,"Named interface error should provide number of given arguments")}},"Converting anonymous interface to string yields generic string":function(){this.assertEqual(this.Sut({}).toString(),
"[object Interface]")},"Converting named interface to string yields string containing name":function(){this.assertEqual(this.Sut("Foo",{}).toString(),"[object Interface <Foo>]")},"Declaration errors provide interface name if avaiable":function(){var a=this.Sut,b=[function(){a("Foo",{prop:"str"})},function(){a("Foo",{method:function(){}})}];this.util.definePropertyFallback()||(b.push(function(){var b={};Object.defineProperty(b,"getter",{get:function(){},enumerable:!0});a("Foo",b)}),b.push(function(){var b=
{};Object.defineProperty(b,"setter",{set:function(){},enumerable:!0});a("Foo",b)}));for(var c=b.length;c--;){try{b[c]()}catch(e){this.assertNotEqual(e.message.match("Foo"),null,"Error contains interface name when available ("+c+")");break}this.assertFail("Expected error. Something's wrong: "+c)}},"Interface name is included in instantiation error":function(){try{this.Sut("Foo")(),this.assertFail("Exception expected. There's a bug somewhere.")}catch(a){this.assertNotEqual(a.message.match("Foo"),null,
"Interface name is included in instantiation error message")}}})})(h["test/Interface/NameTest"]={},"test/Interface");(function(d,f){d.exports={};k=".";document.write("test/MemberBuilder/GetterSetterTest...<br />");var a=g("common"),b=g(f+"/inc-common"),c=!a.require("util").definePropertyFallback();g("common").testCase({caseSetUp:function(){var a=this;this.testArgs=function(c,d,f,g,h){b.testArgs(a,c,d,f,g,h,function(b,c,l){var f=a.members["public"][d];return f?{value:{expected:f,given:c.member},keywords:{expected:null,
given:l}}:b})}},setUp:function(){var a=this.require("MethodWrapperFactory")(function(a){return a});this.sut=this.require("MemberBuilder")(a,a,a,this.mockValidate=this.getMock("MemberBuilderValidator"));this.members=this.sut.initMembers()},"Passes proper data to validator when not overriding":function(){c||this.skip();var a=this,b=!1,d={};this.mockValidate.validateGetterSetter=function(){b=!0;a.testArgs(arguments,"foo",{},d)};this.sut.buildGetterSetter(this.members,{},"foo",function(){},function(){},
d,{});this.assertEqual(!0,b,"validateGetterSetter() was not called")},"Passes proper data to validator when overriding":function(){c||this.skip();var a=this,b=!1,d={};this.members["public"].foo={};this.mockValidate.validateGetterSetter=function(){b=!0;a.testArgs(arguments,"foo",{},d)};this.sut.buildGetterSetter(this.members,{},"foo",function(){},function(){},d,{});this.assertEqual(!0,b,"validateGetterSetter() was not called")}})})(h["test/MemberBuilder/GetterSetterTest"]={},"test/MemberBuilder");
(function(d,f){d.exports={};k=".";document.write("test/MemberBuilder/MethodTest...<br />");var a=g(f+"/inc-common");g("common").testCase({caseSetUp:function(){var b=this;this.testArgs=function(c,e,d,f,g){a.testArgs(b,c,e,d,f,g,function(a,c,d){var f=b.members["public"][e];return f?{value:{expected:f,given:c.member},keywords:{expected:f.___$$keywords$$,given:d}}:a})};this.weakab=[]},setUp:function(){var a=this,c=this.require("MethodWrapperFactory")(function(a){return function(){return a()}}),e=this.require("MethodWrapperFactory")(function(){a.proxyFactoryCall=
Array.prototype.slice.call(arguments);return a.proxyReturnValue});this.proxyFactoryCall=null;this.proxyReturnValue=function(){};this.sut=this.require("MemberBuilder")(c,c,e,this.mockValidate=this.getMock("MemberBuilderValidator"));this.members=this.sut.initMembers()},"Passes proper data to validator when not overriding":function(){var a=this,c=!1,e=function(){},d={},f={};this.mockValidate.validateMethod=function(){c=!0;a.testArgs(arguments,"foo",e,f,d)};this.assertOk(this.sut.buildMethod(this.members,
{},"foo",e,f,function(){},1,{},d));this.assertEqual(!0,c,"validateMethod() was not called")},"Passes proper data to validator when overriding":function(){var a=this,c=!1,e=function(){},d={override:!0};(this.members["public"].foo=function(){}).___$$keywords$$={"public":!0};this.mockValidate.validateMethod=function(){c=!0;a.testArgs(arguments,"foo",e,d)};this.assertOk(this.sut.buildMethod(this.members,{},"foo",e,d,function(){},1,{}));this.assertEqual(!0,c,"validateMethod() was not called")},"Creates proxy when `proxy' keyword is given":function(){var a=
{proxy:!0},c=function(){};this.assertOk(this.sut.buildMethod(this.members,{},"foo","bar",a,c,1,{}));this.assertNotEqual(null,this.proxyFactoryCall,"Proxy factory should be used when `proxy' keyword is provided");this.assertDeepEqual(["bar",null,1,c,"foo",a],this.proxyFactoryCall,"Proxy factory should be called with proper arguments");this.assertStrictEqual(this.proxyReturnValue,this.members["public"].foo,"Generated proxy method should be properly assigned to members")},"Weak abstract methods are not processed if concrete is available":function(){var a=
!1,c=[],e={weak:!0,"abstract":!0},d=function(){};this.assertOk(this.sut.buildMethod(this.members,{},"foo",c,e,d,1,{}));this.assertOk(this.sut.buildMethod(this.members,{},"foo",function(){a=!0},{},d,1,{}));this.members["public"].foo();this.assertOk(a,"Concrete method did not take precedence");this.assertOk(!1===this.sut.buildMethod(this.members,{},"foo",c,e,d,1,{}));this.members["public"].foo();this.assertOk(a,"Concrete method unkept")},"Weak virtual methods are not processed if override is available":function(){var a=
this,c=!1,e=function(){a.fail(!0,!1,"Method not overridden.")},d={weak:!0,virtual:!0},f=function(){};this.assertOk(this.sut.buildMethod(this.members,{},"foo",e,d,f,1,{}));this.assertOk(this.sut.buildMethod(this.members,{},"foo",function(){c=!0},{override:!0},f,1,{}));this.members["public"].foo();this.assertOk(c,"Override did not take precedence");this.assertOk(!1===this.sut.buildMethod(this.members,{},"foo",e,d,f,1,{}));this.members["public"].foo();this.assertOk(c,"Override unkept")},"Private methods are not wrapped":function(){var a=
function(){};this.sut.buildMethod(this.members,{},"foo",a,{"private":!0},function(){},1,{});this.assertStrictEqual(this.members["private"].foo,a)}})})(h["test/MemberBuilder/MethodTest"]={},"test/MemberBuilder");(function(d,f){d.exports={};k=".";document.write("test/MemberBuilder/PropTest...<br />");var a=g(f+"/inc-common");g("common").testCase({caseSetUp:function(){var b=this;this.testArgs=function(c,e,d,f,g){a.testArgs(b,c,e,d,f,g,function(a,c,d){var f=b.members["public"][e];return f?{value:{expected:f[0],
given:c.member[0]},keywords:{expected:f[1],given:d}}:a})}},setUp:function(){var a=this.require("MethodWrapperFactory")(function(a){return a});this.sut=this.require("MemberBuilder")(a,a,a,this.mockValidate=this.getMock("MemberBuilderValidator"));this.members=this.sut.initMembers()},"Passes proper data to validator when not overriding":function(){var a=this,c=!1,e={};this.mockValidate.validateProperty=function(){c=!0;a.testArgs(arguments,"foo","bar",e)};this.sut.buildProp(this.members,{},"foo","bar",
e,{});this.assertEqual(!0,c,"validateProperty() was not called")},"Passes proper data to validator when overriding":function(){var a=this,c=!1,e={};this.members["public"].foo=["prev",{"public":!0}];this.mockValidate.validateProperty=function(){c=!0;a.testArgs(arguments,"foo","bar2",e)};this.sut.buildProp(this.members,{},"foo","bar2",e,{});this.assertEqual(!0,c,"validateProperty() was not called")}})})(h["test/MemberBuilder/PropTest"]={},"test/MemberBuilder");(function(d,f){d.exports={};k=".";document.write("test/MemberBuilder/VisibilityTest...<br />");
var a=!g("common").require("util").definePropertyFallback();g("common").testCase({caseSetUp:function(){var b=this;this.buildStubMethod=function(a,e,d){var f={};f[d]=!0;b.sut.buildMethod(b.members,{},a,function(){return e},f,function(){},1,{})};this.buildStubProp=function(a,e,d){var f={};f[d]=!0;b.sut.buildProp(b.members,{},a,e,f,{})};this.buildStubGetterSetter=function(a,e,d,f){var g={};g[f]=!0;b.sut.buildGetterSetter(b.members,{},a,e,d,g,{})};this.assertOnlyIn=function(a,e){var d=!1;b.incAssertCount();
for(var f in b.members)"undefined"!==typeof b.members[f][e]&&(d=!0,f!==a&&b.fail(e+" should only be accessible in: "+a));d||b.fail("Did not find '"+e+"' in level: "+a)};this.basicVisPropTest=function(a){var e=a+"propname",d=a+"val";b.buildStubProp(e,d,a);b.assertEqual(b.members[a][e][0],d);b.assertOnlyIn(a,e,b.members)};this.basicVisMethodTest=function(a){var e=a+"methodname",d=a+"val";b.buildStubMethod(e,d,a);b.assertEqual(b.members[a][e](),d);b.assertOnlyIn(a,e,b.members)};this.basicVisGetterSetterTest=
function(c){if(a){var e=c+"getsetname",d=function(){return!0},f=function(){};b.buildStubGetterSetter(e,d,f,c,"get");var g=Object.getOwnPropertyDescriptor(b.members[c],e);b.assertEqual(g.get,d);b.assertEqual(g.set,f);b.assertOnlyIn(c,e,b.members)}};this.multiVisFailureTest=function(a){for(var e=[{"public":!0,"protected":!0},{"public":!0,"private":!0},{"protected":!0,"private":!0}],d=0,f=e.length;d<f;d++){b.incAssertCount();try{a("foo",e[d])}catch(g){b.assertOk(-1<g.message.search("access modifier"),
"Unexpected error for multiple access modifiers");b.assertOk(-1<g.message.search("foo"),"Multiple access modifier error message should contain name of member; received: "+g.message);break}b.fail("Should fail with multiple access modifiers: "+d)}}},setUp:function(){var a=this.require("MethodWrapperFactory")(function(a){return a});this.sut=this.require("MemberBuilder")(a,a,a,this.getMock("MemberBuilderValidator"));this.members=this.sut.initMembers()},"Can create empty member object":function(){for(var a=
this.sut.initMembers(),c=["public","protected","private"],e=0,d=c.length;e<d;e++)this.assertOk("undefined"!==typeof a[c[e]],"Clean member object is missing visibility level: "+c[e])},"Can initialize member object with existing objects":function(){var a={foo:"bar"},c={bar:"baz"},e={baz:"foo"},d=this.sut.initMembers(a,c,e),a={"public":a,"protected":c,"private":e},f;for(f in a)this.assertStrictEqual(a[f],d[f],"Visibility level '"+f+"' cannot be initialized")},"Members are only accessible via their respective interfaces":function(){var a=
["public","protected","private"],c;for(c in a)this.basicVisPropTest(a[c]),this.basicVisMethodTest(a[c]),this.basicVisGetterSetterTest(a[c])},"Members will be declared public if access modifier is omitted":function(){var b=function(){},c=function(){},e=function(){};this.sut.buildProp(this.members,{},"prop","foo",{},{});this.sut.buildMethod(this.members,{},"method",b,{},function(){},1,{});a&&this.sut.buildGetterSetter(this.members,{},"getset",c,e,{},{});this.assertStrictEqual(this.members["public"].prop[0],
"foo","Properties should be public by default");this.assertStrictEqual(this.members["public"].method,b,"Methods should be public by default");a&&(b=Object.getOwnPropertyDescriptor(this.members["public"],"getset"),this.assertStrictEqual(b.get,c,"Getters should be public by default"),this.assertStrictEqual(b.set,e,"Setters should be public by default"))},"Only one access modifier may be used per property":function(){var a=this;this.multiVisFailureTest(function(c,e){a.sut.buildProp(a.members,{},c,"baz",
e,{})})},"Only one access modifier may be used per method":function(){var a=this;this.multiVisFailureTest(function(c,e){a.sut.buildMethod(a.members,{},c,function(){},e,{})})},"Only one access modifier may be used per getter/setter":function(){if(a){var b=this;this.multiVisFailureTest(function(a,e){b.sut.buildGetterSetter(b.members,{},a,function(){},function(){},e,{})})}}})})(h["test/MemberBuilder/VisibilityTest"]={},"test/MemberBuilder");(function(d,f){d.exports={};k=".";document.write("test/MemberBuilderValidator/GetterSetterTest...<br />");
var a=g(f+"/inc-common");g("common").testCase({caseSetUp:function(){var b=this;this.quickFailureTest=function(){a.quickFailureTest.apply(b,arguments)};this.quickKeywordTest=function(b,e,d){a.quickKeywordTest.call(this,"validateGetterSetter",b,e,d,d&&{get:function(){},set:function(){}})};this.quickVisChangeTest=function(c,e,d,f){a.quickVisChangeTest.call(b,c,e,d,function(a,c,e){c.virtual=!0;e.override=!0;b.sut.validateGetterSetter(a,{},e,{get:function(){},set:function(){}},c)},f)}},setUp:function(){var a=
this;this.warningHandler=function(a){};this.sut=this.require("MemberBuilderValidator")(function(c){a.warningHandler(c)})},"Cannot override method with getter or setter":function(){var a=this;this.quickFailureTest("foo","method",function(){a.sut.validateGetterSetter("foo",{},{},{member:function(){}})})},"Cannot override property with getter or setter":function(){var a=this;this.quickFailureTest("foo","method",function(){a.sut.validateGetterSetter("foo",{},{},{member:"foo"})})},"Getters/setters do not support visibility de-escalation":function(){this.quickVisChangeTest("public",
"protected",!0);this.quickVisChangeTest("protected","private",!0)},"Getters/setters support visibility escalation and equality":function(){var b=this;a.visEscalationTest(function(a){b.quickVisChangeTest(a[0],a[1],!1)})},"Cannot redeclare private getters/setters in subtypes":function(){var b=this;a.privateNamingConflictTest(function(a){b.quickVisChangeTest(a[0],a[1],!0,"conflict")})},"Cannot declare abstract getters/setters":function(){this.quickKeywordTest(["abstract"],"abstract")},"Cannot declare const getters/setters":function(){this.quickKeywordTest(["const"],
"const")},"Can override virtual getter/setter with override keyword":function(){this.quickKeywordTest(["override"],null,["virtual"])},"Must provide override keyword when overriding getter/setter":function(){this.quickKeywordTest([],"override",["virtual"])},"Cannot override non-virtual getter/setter":function(){this.quickKeywordTest(["override"],"non-virtual",[])},"Can declare getter/setter as static":function(){this.quickKeywordTest(["static"])},"Cannot declare getter/setter as both static and virtual":function(){this.quickKeywordTest(["static",
"virtual"],"static")},"Throws warning when using override with no super getter/setter":function(){var b=null;this.warningHandler=function(a){b=a};this.quickKeywordTest(["override"]);this.assertNotEqual(null,b,"No warning was provided");this.assertOk(b instanceof Error,"Provided warning is not of type Error");this.assertOk(-1<b.message.search(a.testName),"Override warning should contain getter/setter name")}})})(h["test/MemberBuilderValidator/GetterSetterTest"]={},"test/MemberBuilderValidator");(function(d,
f){d.exports={};k=".";document.write("test/MemberBuilderValidator/MethodTest...<br />");var a=g(f+"/inc-common");g("common").testCase({caseSetUp:function(){var b=this;this.util=this.require("util");this.quickKeywordMethodTest=function(b,e,d){a.quickKeywordTest.call(this,"validateMethod",b,e,d)};this.quickFailureTest=function(){a.quickFailureTest.apply(b,arguments)};this.quickVisChangeTest=function(c,e,d,f){a.quickVisChangeTest.call(b,c,e,d,function(a,c,e){c.virtual=!0;e.override=!0;var d={};b.sut.validateMethod(a,
function(){},e,{member:function(){}},c,d);b.sut.end(d)},f)}},setUp:function(){var a=this;this.warningHandler=function(a){};this.sut=this.require("MemberBuilderValidator")(function(c){a.warningHandler(c)})},"Method cannot be both private and abstract":function(){this.quickKeywordMethodTest(["private","abstract"],"private and abstract")},"Methods cannot be declared const":function(){this.quickKeywordMethodTest(["const"],"const")},"Method cannot be both virtual and static":function(){this.quickKeywordMethodTest(["virtual",
"static"],"static")},"Cannot override getter/setter with method":function(){var a=this;this.quickFailureTest("foo","getter/setter",function(){a.sut.validateMethod("foo",function(){},{},{get:function(){}},{},{})});this.quickFailureTest("foo","getter/setter",function(){a.sut.validateMethod("foo",function(){},{},{set:function(){}},{},{})})},"Cannot override property with method":function(){var a=this;this.quickFailureTest("foo","property",function(){a.sut.validateMethod("foo",function(){},{},{member:"immaprop"},
{},{})})},"Cannot override non-virtual methods":function(){this.quickKeywordMethodTest(["override"],"non-virtual",[])},"Can override virtual method with concrete method":function(){this.quickKeywordMethodTest(["override"],null,["virtual"])},"Can override overridden method with concrete method":function(){this.quickKeywordMethodTest(["override"],null,["override"])},"Can declare override as virtual":function(){this.quickKeywordMethodTest(["virtual","override"])},"Cannot override concrete method with abstract method":function(){this.quickKeywordMethodTest(["abstract"],
"concrete",[])},"Concrete method may appear with weak abstract method":function(){this.quickKeywordMethodTest(["weak","abstract"],null,[])},"Override parameter list must match or exceed parent length":function(){var a=this;this.quickFailureTest("foo","compatible",function(){a.sut.validateMethod("foo",function(){},{override:!0},{member:function(a,b,d){return[a,b,d]}},{virtual:!0},{})});this.quickFailureTest("foo","compatible",function(){var c=function(){};c.__length=3;a.sut.validateMethod("foo",function(){},
{override:!0},{member:c},{virtual:!0},{})});this.assertDoesNotThrow(function(){var c=function(){};c.__length=3;a.sut.validateMethod("foo",c,{override:!0},{member:function(a,b,c){}},{virtual:!0},{})},Error)},"Weak abstract overrides must meet compatibility requirements":function(){var a=this,c=a.util.createAbstractMethod(["one"]);this.quickFailureTest("foo","compatible",function(){a.sut.validateMethod("foo",function(){},{},{member:c},{weak:!0,"abstract":!0},{})});this.quickFailureTest("foo","compatible",
function(){a.sut.validateMethod("foo",c,{weak:!0,"abstract":!0},{member:function(){}},{},{})})},"Methods do not support visibiliy de-escalation":function(){this.quickVisChangeTest("public","protected",!0);this.quickVisChangeTest("protected","private",!0)},"Methods support visibility escalation or equality":function(){var b=this;a.visEscalationTest(function(a){b.quickVisChangeTest(a[0],a[1],!1)})},'Must provide "override" keyword when overriding methods':function(){this.quickKeywordMethodTest([],"override",
[])},"Can provide abstract method impl. without override keyword":function(){this.quickKeywordMethodTest([],null,["abstract"])},"Throws warning when using override with no super method":function(){var b=null;this.warningHandler=function(a){b=a};this.quickKeywordMethodTest(["override"]);this.assertNotEqual(null,b,"No warning was provided");this.assertOk(b instanceof Error,"Provided warning is not of type Error");this.assertOk(-1<b.message.search(a.testName),"Override warning should contain method name")},
"Does not throw warning when overriding a later weak method":function(){var a=this;this.warningHandler=function(c){a.fail(!0,!1,"Warning was issued.")};this.assertDoesNotThrow(function(){var c={};a.sut.validateMethod("foo",function(){},{override:!0},void 0,void 0,c);a.sut.validateMethod("foo",function(){},{weak:!0,"abstract":!0},{member:function(){}},{override:!0},c);a.sut.end(c)})},"Cannot redeclare private members in subtypes":function(){var b=this;a.privateNamingConflictTest(function(a){b.quickVisChangeTest(a[0],
a[1],!0,"conflict")})},"`proxy' keyword must provide string value":function(){var a=this;this.quickFailureTest("foo","string value expected",function(){a.sut.validateMethod("foo",function(){},{proxy:!0},{},{},{})})},"`proxy' keyword can provide string value":function(){var a=this;this.assertDoesNotThrow(function(){a.sut.validateMethod("foo","dest",{proxy:!0},{},{},{})},TypeError)},"Method proxy cannot be abstract":function(){this.quickKeywordMethodTest(["proxy","abstract"],"cannot be abstract")}})})(h["test/MemberBuilderValidator/MethodTest"]=
{},"test/MemberBuilderValidator");(function(d,f){d.exports={};k=".";document.write("test/MemberBuilderValidator/PropertyTest...<br />");var a=g(f+"/inc-common");g("common").testCase({caseSetUp:function(){var b=this;this.quickFailureTest=function(){a.quickFailureTest.apply(b,arguments)};this.quickKeywordPropTest=function(b,d,f){a.quickKeywordTest.call(this,"validateProperty",b,d,f)};this.quickVisChangeTest=function(c,d,f,g){a.quickVisChangeTest.call(b,c,d,f,function(a,c,d){b.sut.validateProperty(a,
"bar",d,{member:"foo"},c)},g)}},setUp:function(){this.sut=this.require("MemberBuilderValidator")()},"Cannot override method with property":function(){var a=this;this.quickFailureTest("foo","property",function(){a.sut.validateProperty("foo","bar",{},{member:function(){}},{})})},"Cannot declare abstract property":function(){this.quickKeywordPropTest(["abstract"],"abstract")},"Cannot declare virtual property":function(){this.quickKeywordPropTest(["virtual"],"virtual")},"Cannot declare static const property":function(){this.quickKeywordPropTest(["static",
"const"],"Static")},"Cannot override getter/setter with property":function(){var a=this;this.quickFailureTest("foo","getter/setter",function(){a.sut.validateProperty("foo","bar",{},{get:function(){}},{})});this.quickFailureTest("foo","getter/setter",function(){a.sut.validateProperty("foo","bar",{},{set:function(){}},{})})},"Properties do not support visibility de-escalation":function(){this.quickVisChangeTest("public","protected",!0);this.quickVisChangeTest("protected","private",!0)},"Properties do support visibility escalation and equality":function(){var b=
this;a.visEscalationTest(function(a){b.quickVisChangeTest(a[0],a[1],!1)})},"Cannot redeclare private properties in subtypes":function(){var b=this;a.privateNamingConflictTest(function(a){b.quickVisChangeTest(a[0],a[1],!0,"conflict")})}})})(h["test/MemberBuilderValidator/PropertyTest"]={},"test/MemberBuilderValidator");(function(d,f){d.exports={};k=".";document.write("test/MethodWrapperFactoryTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("MethodWrapperFactory")},
"Can instantiate with and without new keyword":function(){this.assertOk(new this.Sut instanceof this.Sut,"Should be able to instantiate MethodWrapperFactory with 'new' keyword");this.assertOk(this.Sut()instanceof this.Sut,"Should be able to instantiate MethodWrapperFactory without 'new' keyword")},"Provided factory function is properly called":function(){var a=this,b=!1,c=function(){},d=function(){},f=function(){},g={"static":!0,"public":!0},h=this.Sut(function(h,k,x,w,v,u){b=!0;a.assertEqual(h,c,
"Factory method should be provided with method to wrap");a.assertEqual(k,d,"Factory method should be provided with super method");a.assertEqual(x,55,"Factory method should be provided with cid");a.assertEqual(w,f,"Factory method should be provided with proper inst function");a.assertEqual(v,"someMethod","Factory method should be provided with proper method name");a.assertEqual(u,g,"Factory method should be provided with proper keywords");return"foobar"}).wrapMethod(c,d,55,f,"someMethod",g);this.assertEqual(b,
!0,"Given factory method should be called");this.assertEqual(h,"foobar","Should return value from factory function")}})})(h["test/MethodWrapperFactoryTest"]={},"test");(function(d,f){d.exports={};k=".";document.write("test/MethodWrappersTest...<br />");g("common").testCase({caseSetUp:function(){this.proxyErrorAssertCommon=function(a,b,c){this.assertOk(-1<a.message.search("Unable to proxy"),"Unexpected error received: "+a.message);this.assertOk(-1<a.message.search(b)&&-1<a.message.search(c),"Error should contain property and method names")}},
setUp:function(){this._sut=this.require("MethodWrappers")},"Method invocation binds `this` to passed instance":function(){var a=function(){},b=function(){return a},c=this._sut.standard.wrapNew(function(){return this.foo},null,0,b),b=this._sut.standard.wrapOverride(function(){return this.foo2},c,0,b);a.foo="fooboo";a.foo2="fooboo2";this.assertEqual(c(),"fooboo","Calling method will bind 'this' to passed instance");this.assertEqual(b(),"fooboo2","Calling method override will bind 'this' to passed instance")},
"Overriden method should contain reference to super method":function(){var a=this,b=!1,c=function(){},d=this._sut.standard.wrapNew(function(){b=!0},null,0,c);this._sut.standard.wrapOverride(function(){a.assertNotEqual(this.__super,void 0,"__super is defined for overridden method");this.__super();a.assertEqual(b,!0,"Invoking __super calls super method")},d,0,c)()},"Super method works properly when context differs":function(){var a=!1,b={},c=function(){return b},d=this._sut.standard.wrapNew(function(){a=
!0},null,0,c);this._sut.standard.wrapOverride(function(){this.__super()},d,0,c)();this.assertEqual(a,!0,"__super() method is called even when context differs");this.assertEqual(b.__super,void 0,"__super() method is unset after being called")},"Can invoke super method by calling override.super":function(){var a={},b=function(){return{}},c=this._sut.standard.wrapNew(function(){return a},null,0,b),b=this._sut.standard.wrapOverride(function(){},c,0,b);this.assertStrictEqual(b["super"](),a)},"Proxy will properly forward calls to destination object":function(){var a=
[1,{},"three"],b=[],c={},d={dest:{someMethod:function(){b=Array.prototype.slice.call(arguments);return c}}},f=this._sut.standard.wrapProxy("dest",null,0,function(){return d},"someMethod");this.assertStrictEqual(c,f.apply(d,a),"Proxy call should return the value from the destination");this.assertDeepEqual(a,b,"All arguments should be properly forwarded to the destination")},"Proxy retval is replaced with context if dest returns self":function(){var a={bar:function(){return a}},b={foo:a},c=this._sut.standard.wrapProxy("foo",
null,0,function(){return b},"bar").call(b);this.assertStrictEqual(b,c,"Proxy should return instance in place of destination, if returned")},"Proxy throws error if call will faill due to non-object":function(){try{this._sut.standard.wrapProxy("noexist",null,0,function(){return{}},"foo")()}catch(a){this.proxyErrorAssertCommon(a,"noexist","foo");return}this.assertFail("Error should be thrown if proxy would fail due to a non-object")},"Proxy throws error if call will fail due to non-function":function(){try{this._sut.standard.wrapProxy("dest",
null,0,function(){return{dest:{foo:"notafunc"}}},"foo")()}catch(a){this.proxyErrorAssertCommon(a,"dest","foo");return}this.assertFail("Error should be thrown if proxy would fail due to a non-function")},"Can proxy to static members":function(){var a=["value"],b={foo:{method:function(){return a}}};this.assertStrictEqual(a,this._sut.standard.wrapProxy("foo",null,0,function(){return{$:function(a){return b[a]}}},"method",{"static":!0})(),"Should properly proxy to static membesr via static accessor method")},
"Proxy methods are able to satisfy abstract method param requirements":function(){var a=this._sut.standard.wrapProxy({},null,0,function(){},"",{});this.assertOk(!(0<a.__length))}})})(h["test/MethodWrappersTest"]={},"test");(function(d,f){d.exports={};k=".";document.write("test/PropParserKeywordsTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("prop_parser")},setUp:function(){this.ptest=this.Sut.parseKeywords("virtual static abstract foo")},"Retrieves field name void of keywords":function(){this.assertEqual(this.ptest.name,
"foo")},"Retrieves all keywords":function(){var a=this.ptest.keywords;this.assertOk(a.virtual);this.assertOk(a["static"]);this.assertOk(a["abstract"])},"Does not include keywords not explicitly provided":function(){var a=this.ptest.keywords;delete a.virtual;delete a["static"];delete a["abstract"];for(var b in a)this.assertFail("Someone has been drinking: "+b);this.assertOk(!0)},"Accepts all valid keywords":function(){var a=this.Sut.parseKeywords;this.assertDoesNotThrow(function(){a("public protected private virtual abstract override static const proxy weak var")},
Error)},"Does not accept unknown keywords":function(){var a=this.Sut.parseKeywords;try{a("foobunny moobunny")}catch(b){this.assertOk(-1!==b.message.search("foobunny"),"Error message contains unrecognized keyword");this.assertOk(-1!==b.message.search("moobunny"),"Error message contains name");return}this.assertFail("Should not permit unknown keywords")},"Implciity marks underscore-prefixed members as private":function(){this.assertDeepEqual(this.Sut.parseKeywords("_foo").keywords,{"private":!0})},
"Fields are not implicitly private with explicit access modifier":function(){this.assertDeepEqual(this.Sut.parseKeywords("public _foo").keywords,{"public":!0});this.assertDeepEqual(this.Sut.parseKeywords("protected _foo").keywords,{"protected":!0});this.assertDeepEqual(this.Sut.parseKeywords("private _foo").keywords,{"private":!0})},"Double-underscore members are not implicitly private":function(){this.assertDeepEqual(this.Sut.parseKeywords("__foo").keywords,{})},"Exposes keyword bit values and masks":function(){this.assertOk(this.Sut.kvals);
this.assertOk(this.Sut.kmasks)},"Access modifier bitmask catches all access modifiers":function(){var a=this.Sut.kvals;this.assertEqual(this.Sut.kmasks.amods|a["public"]|a["protected"]|a["private"],this.Sut.kmasks.amods)},"Virtual bitmask catches abstract and virtual keywords":function(){var a=this.Sut.kvals;this.assertEqual(this.Sut.kmasks.virtual|a["abstract"]|a.virtual,this.Sut.kmasks.virtual)}})})(h["test/PropParserKeywordsTest"]={},"test");(function(d,f){d.exports={};k=".";document.write("test/Trait/AbstractTest...<br />");
g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait");this.Class=this.require("class");this.AbstractClass=this.require("class_abstract")},"Abstract traits create abstract classes when used":function(){var a=this.Sut({"abstract foo":[]}),b=this;this.assertDoesNotThrow(function(){b.AbstractClass.use(a).extend({})},Error)},"Concrete classes may use abstract traits by definining members":function(){var a=this.Sut({"abstract traitfoo":["foo"]}),b=null,c=!1,d=this;this.assertDoesNotThrow(function(){b=
d.Class.use(a).extend({traitfoo:function(a){c=!0}})});b().traitfoo();this.assertOk(c)},"Concrete classes must be compatible with abstract traits":function(){var a=this.Sut({"abstract traitfoo":["foo"]}),b=this;this.assertThrows(function(){C=b.Class.use(a).extend({traitfoo:function(){}})})},"Traits can invoke concrete class implementation of abstract method":function(){var a=this.Sut({"public getFoo":function(){return this.echo("foobar")},"abstract protected echo":["value"]}),a=this.Class.use(a).extend({"protected echo":function(a){return a}})().getFoo();
this.assertEqual(a,"foobar")},"Traits can invoke concrete trait implementation of abstract method":function(){var a=this.Sut({"public getFoo":function(){return this.echo("traitbar")},"abstract public echo":["value"]}),b=this.Sut({"public echo":function(a){return a}});this.assertEqual(this.Class.use(a,b).extend({})().getFoo(),"traitbar");this.assertEqual(this.Class.use(b,a).extend({})().getFoo(),"traitbar","Crap; order matters?!")},"Abstract method inherited from trait can be implemented by subtype":function(){var a=
this.Sut({"public doFoo":function(){this.foo()},"abstract protected foo":[]}),b=!1;this.AbstractClass.use(a).extend({}).extend({"protected foo":function(){b=!0}})().doFoo();this.assertOk(b)},"Chained mixins properly carry abstract flag":function(){var a=this,b=this.Sut({foo:function(){}}),c=this.Sut({baz:function(){}}),d=this.Sut({"abstract baz":[]});this.assertDoesNotThrow(function(){a.assertOk(a.AbstractClass.use(d).extend({}).isAbstract());a.assertOk(a.AbstractClass.use(b).extend({"abstract baz":[]}).isAbstract());
a.assertOk(a.AbstractClass.use(b).use(d).extend({}).isAbstract());a.assertOk(a.AbstractClass.use(d).use(b).extend({}).isAbstract())});this.assertThrows(function(){a.AbstractClass.use(c).extend({})});this.assertThrows(function(){a.AbstractClass.use(d).extend({baz:function(){}})});this.assertThrows(function(){a.AbstractClass.use(d).use(c).extend({})})},"Explicitly-declared class will not be automatically abstract":function(){var a=this,b=this.Sut({foo:function(){}}),c=this.Sut({"abstract foo":[]});
this.assertThrows(function(){a.assertOk(!a.AbstractClass.use(b).extend({}).isAbstract())});this.assertDoesNotThrow(function(){a.assertOk(a.AbstractClass.use(b).extend({"abstract bar":[]}).isAbstract());a.assertOk(a.AbstractClass.use(c).extend({}).isAbstract())});this.assertThrows(function(){a.Class.use(b).extend({"abstract bar":[]})});this.assertThrows(function(){a.Class.use(c).extend()})},"Abstract classes can be derived from intermediates":function(){var a=[{}],b=this.AbstractClass({"abstract foo":[]}),
c=this.Sut({moo:function(){return a}}),d=this.AbstractClass.extend(b.use(c),{});this.assertOk(this.Class.isClass(d));this.assertOk(d.isAbstract());d=d.extend({foo:function(){}})();this.assertOk(this.Class.isA(b,d));this.assertStrictEqual(a,d.moo());this.assertOk(this.Class.isA(c,d),"Instance is not recognized as having mixed in type T, but incorporates its definition; metadata bug?")}})})(h["test/Trait/AbstractTest"]={},"test/Trait");(function(d,f){d.exports={};k=".";document.write("test/Trait/ClassExtendTest...<br />");
g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait");this.Class=this.require("class");this.AbstractClass=this.require("class_abstract");this.FinalClass=this.require("class_final");this.nonsense=[null,void 0,!1,NaN,Infinity,-Infinity]},"Trait T extending class C can be mixed into C":function(){var a=this.Class({}),b=this.Sut.extend(a,{});this.assertDoesNotThrow(function(){a.use(b)()})},"Trait T extending class C cannot be mixed into disjoint class D":function(){var a=this.Class({}),
b=this.Class({}),c=this.Sut.extend(a,{});this.assertThrows(function(){b.use(c)()},TypeError)},"Trait T extending class C is of both types T and C":function(){var a=this.Class({}),b=this.Sut.extend(a,{}),c=a.use(b)();this.assertOk(this.Class.isA(b,c));this.assertOk(this.Class.isA(a,c))},"Trait T extending class C can be mixed into C subtype C2":function(){var a=this.Class({}),b=a.extend({}),c=this.Sut.extend(a,{});this.assertDoesNotThrow(function(){b.use(c)()})},"Trait T extending subtype C2 cannot be mixed into supertype C":function(){var a=
this.Class({}),b=a.extend({}),c=this.Sut.extend(b,{});this.assertThrows(function(){a.use(c)()},TypeError)},"Trait definition can follow class extension":function(){var a=["a"],b=["b"],c=this.Class({foo:function(){return a}}),d=this.Sut.extend(c,{bar:function(){return b}}),c=c.use(d)();this.assertStrictEqual(c.foo(),a);this.assertStrictEqual(c.bar(),b)},"Trait mixin handles supertype null values":function(){var a=this.Class({foo:null,bar:void 0}),b=this.Sut.extend(a,{});this.assertDoesNotThrow(function(){a.use(b)()})},
"Trait mixin handles supertype constructor":function(){var a=0,b=this.Class({__construct:function(b,c,d,f,g,h,k,w,v,u,D,E){a++}}),c=this.Sut.extend(b,{});this.assertDoesNotThrow(function(){b.use(c)()});this.assertEqual(1,a)},"Trait Ta extending C and Tb extending C2 cannot co-mix":function(){var a=this.Class("C").extend({_a:null}),b=this.Class("C2").extend(a,{_b:null}),c=this.Sut.extend(a,{}),d=this.Sut.extend(b,{});this.assertThrows(function(){a.use(c).use(d)()});this.assertDoesNotThrow(function(){b.use(d).use(c)()})},
"Trait class extension cannot supply more than two arguments":function(){var a=this;this.assertThrows(function(){a.Sut.extend(a.Class({}),{},{})})},"@each(nonsense) Traits cannot extend nonsense":function(a){var b=this;this.assertThrows(function(){b.Sut.extend(a,{})})},"Traits cannot yet extend other traits":function(){var a=this;this.assertThrows(function(){a.Sut.extend(a.Sut({}),{})},TypeError)},"Traits cannot extend final classes":function(){var a=this;this.assertThrows(function(){a.Sut.extend(a.FinalClass({}),
{})},TypeError)},"Traits can override public virtual super methods":function(){var a={},b=this.Class({"virtual foo":function(){return a}}),c=this.Sut.extend(b,{"override foo":function(){return{sval:this.__super()}}});this.assertStrictEqual(b.use(c)().foo().sval,a)},"Traits can override protected virtual super methods":function(){var a={},b=this.Class({"virtual protected foo":function(){return a},getFoo:function(){return this.foo()}}),c=this.Sut.extend(b,{"override protected foo":function(){return{sval:this.__super()}}});
this.assertStrictEqual(b.use(c)().getFoo().sval,a)},"Traits can provide concrete definition for abstract method":function(){var a={},b=this.AbstractClass({foo:function(){return this.concrete()},"abstract concrete":[]}),c=this.Sut.extend(b,{concrete:function(){return a}});this.assertStrictEqual(b.use(c)().foo(),a)},"Trait class method abstract overrides can be stacked":function(){var a=this.Class({"virtual foo":function(){return 1}}),b=this.Sut.extend(a,{"abstract override foo":function(){return 3+
this.__super()}}),c=this.Sut.extend(a,{"abstract override foo":function(){return 13+this.__super()}});this.assertEqual(20,a.use(b).use(b).use(c)().foo())},"Trait class C#M non-abstract override always uses C#M as super":function(){var a=this.Class({"virtual foo":function(){return 1}}),b=this.Sut.extend(a,{"override foo":function(){return 3+this.__super()}}),c=this.Sut.extend(a,{"override foo":function(){return 13+this.__super()}});this.assertEqual(14,a.use(b).use(b).use(c)().foo())},"Traits can stack concrete definitions for class abstract methods":function(){var a=
this.AbstractClass({foo:function(){return this.concrete()},"abstract concrete":[]}),b=this.Sut.extend(a,{"virtual concrete":function(){return 3}}),c=this.Sut.extend(a,{"abstract override concrete":function(){return 5+this.__super()}});this.assertEqual(13,a.use(b).use(c).use(c)().foo())}})})(h["test/Trait/ClassExtendTest"]={},"test/Trait");(function(d,f){d.exports={};k=".";document.write("test/Trait/ClassVirtualTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait");
this.Class=this.require("class");this.AbstractClass=this.require("class_abstract");this.Interface=this.require("interface")},"Traits may implement an interface":function(){var a=this;this.assertDoesNotThrow(function(){a.Sut.implement(a.Interface({})).extend({})})},"Traits implementing interfaces define abstract methods":function(){var a=this.Interface({foo:[],bar:[]}),b=this.Sut.implement(a).extend({}),c=this.Class,d=this.AbstractClass;this.assertThrows(function(){c.use(b).extend({})});this.assertDoesNotThrow(function(){d.use(b).extend({})});
this.assertDoesNotThrow(function(){d.use(b).extend({foo:function(){}})});this.assertDoesNotThrow(function(){c.use(b).extend({foo:function(){},bar:function(){}})})},"Traits may provide concrete methods for interfaces":function(){var a=!1,b=this.Interface({foo:[]}),c=this.Sut.implement(b).extend({foo:function(){a=!0}}),d=this.Class;this.assertDoesNotThrow(function(){d.use(c).extend({})().foo()});this.assertOk(a)},"Instance of class mixing in trait implementing I is of type I":function(){var a=this.Interface({}),
b=this.Sut.implement(a).extend({});this.assertOk(this.Class.isA(a,this.Class.use(b).extend({})()))},"Trait can implement multiple interfaces":function(){var a=this.Interface({}),b=this.Interface({}),c=this.Sut.implement(a,b).extend({}),c=this.Class.use(c).extend({})();this.assertOk(this.Class.isA(a,c));this.assertOk(this.Class.isA(b,c))},"Mixin can override virtual concrete method defined by interface":function(){var a=!1,b=this.Interface({foo:[]}),c=this.Sut.implement(b).extend({"abstract override foo":function(){a=
!0}}),d=this;this.Class.implement(b).extend({"virtual foo":function(){d.fail(!1,!0,"Concrete class method was not overridden by mixin")}}).use(c)().foo();this.assertOk(a)},"Subtype must meet compatibility requirements of virtual trait method":function(){var a=this.Class.use(this.Sut({"virtual foo":function(a,c){}}));this.assertThrows(function(){a.extend({"override foo":function(a){}})()});this.assertDoesNotThrow(function(){a.extend({"override foo":function(a,c){}})()})}})})(h["test/Trait/ClassVirtualTest"]=
{},"test/Trait");(function(d,f){d.exports={};k=".";document.write("test/Trait/ContextTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait");this.Class=this.require("class");this.Interface=this.require("interface")},"Private class members are not accessible to used traits":function(){var a=this.Sut({"public getPriv":function(){return this._priv},"public invokePriv":function(){this._privMethod()}}),b=this.Class.use(a).extend({"private _priv":"foo","private _privMethod":function(){}})();
this.assertEqual(b.getPriv(),void 0);this.assertThrows(function(){b.invokePriv()},Error)},"Private trait members are not accessible to containing class":function(){var a=this.Sut({"private _priv":"bar","private _privMethod":function(){}}),b=this.Class.use(a).extend({"public getPriv":function(){return this._priv},"public invokePriv":function(){this._privMethod()}})();this.assertEqual(b.getPriv(),void 0);this.assertThrows(function(){b.invokePriv()},Error)},"Traits do not have access to each others' private members":function(){var a=
this.Sut({"private _priv1":"foo","private _privMethod1":function(){}}),b=this.Sut({"public getPriv":function(){return this._priv1},"public invokePriv":function(){this._privMethod1()}}),c=this.Class.use(a,b).extend({})();this.assertEqual(c.getPriv(),void 0);this.assertThrows(function(){c.invokePriv()},Error)},"Classes can access protected trait members":function(){var a=this.Sut({"protected foo":function(){}}),b=this;this.assertDoesNotThrow(function(){b.Class.use(a).extend({"public callFoo":function(){this.foo()}})().callFoo()})},
"Class->trait calling context binds to trait":function(){var a=this.Sut({"private _foo":[],_givenMixin:null,__mixin:function(){this._givenMixin=this.get()},push:function(a){this._foo.push(a)},"virtual overridePush":function(a){this._foo.push(a)},get:function(){return this._foo},getGivenMixin:function(){return this._givenMixin}}),a=this.Class.use(a).extend({superPush:function(a){this.push(a)},"override overridePush":function(a){this.__super(a)}})();a.push("a");a.superPush("b");a.overridePush("c");
this.assertDeepEqual(["a","b","c"],a.get());this.assertStrictEqual(a.get(),a.getGivenMixin())},"Trait->class calling context binds to class":function(){var a=this.Class({"private _stack":[],"virtual push":function(a){this._stack.push(a)},getStack:function(){return this._stack}}),b=this.Sut.extend(a,{_givenMixin:null,__mixin:function(){this._givenMixin=this.getStack()},"override push":function(a){this.__super(a)},getSuperStack:function(){return this.getStack()},getGivenMixin:function(){return this._givenMixin}}),
a=a.use(b)();a.push("a");this.assertStrictEqual(a.getStack(),a.getSuperStack());this.assertDeepEqual(["a"],a.getStack());this.assertStrictEqual(a.getStack(),a.getGivenMixin())},"Trait->interface calling context binds to implementing class":function(){var a=this.Interface({push:["item"],getStack:[]}),b=this.Class.implement(a).extend({"private _stack":[],"virtual push":function(a){this._stack.push(a)},getStack:function(){return this._stack}}),a=this.Sut.implement(a).extend({_givenMixin:null,__mixin:function(){this._givenMixin=
this.getStack()},"abstract override push":function(a){this.__super(a)},getSuperStack:function(){return this.getStack()},getGivenMixin:function(){return this._givenMixin}}),b=b.use(a)();b.push("a");this.assertStrictEqual(b.getStack(),b.getSuperStack());this.assertDeepEqual(["a"],b.getStack());this.assertStrictEqual(b.getStack(),b.getGivenMixin())}})})(h["test/Trait/ContextTest"]={},"test/Trait");(function(d,f){d.exports={};k=".";document.write("test/Trait/DefinitionTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=
this.require("Trait");this.Class=this.require("class");this.Interface=this.require("interface");this.AbstractClass=this.require("class_abstract");this.hasGetSet=!this.require("util").definePropertyFallback();this.ctor=[this.Sut.extend,this.Sut];this.fconflict=[["foo","same name; no keywords",{foo:function(){}},{foo:function(){}}],["foo","same keywords; same visibility",{"public foo":function(){}},{"public foo":function(){}}],["foo","varying keywords; same visibility",{"virtual public foo":function(){}},
{"public virtual foo":function(){}}],["foo","different visibility",{"public foo":function(){}},{"protected foo":function(){}}]];this.base=[this.Class]},"@each(ctor) Can extend Trait to create anonymous trait":function(a){this.assertOk(this.Sut.isTrait(a({})))},"@each(ctor) Cannot instantiate trait without error":function(a){this.assertThrows(function(){a({})()},Error)},"@each(ctor) Base class definition is applied when using traits":function(a){a=this.Class.use(a({})).extend({foo:"bar"});this.assertOk(this.Class.isClass(a));
this.assertEqual(a().foo,"bar")},"@each(ctor) Supertype definition is applied when using traits":function(a){var b=this.Class({foo:"bar"});a=this.Class.use(a({})).extend(b,{bar:"baz"})();this.assertOk(this.Class.isA(b,a));this.assertEqual(a.foo,"bar","Supertype failure");this.assertEqual(a.bar,"baz","Subtype failure")},"@each(ctor) Trait definition is mixed into base class definition":function(a){var b=!1;a=a({foo:function(){b=!0}});var c=this.Class.use(a).extend({})();this.assertDoesNotThrow(function(){c.foo()},
Error,"Should have access to mixed in fields");this.assertOk(b,"Mixed in field copy error")},"@each(ctor) Trait definition is mixed into subtype definition":function(a){var b=!1;a=a({foo:function(){b=!0}});var c=this.Class({});this.Class.use(a).extend(c,{})().foo();this.assertOk(b)},"Traits cannot define __construct":function(){try{this.Sut({__construct:function(){}})}catch(a){this.assertOk(a.message.match(/\b__construct\b/));return}this.fail(!1,!0,"Traits should not be able to define __construct")},
"@each(fconflict) Cannot mix in multiple concrete methods of same name":function(a){var b=a[0],c=a[1],d=this.Sut(a[2]);a=this.Sut(a[3]);try{this.Class.use(d,a).extend({})}catch(f){this.assertOk(f.message.match("\\b"+b+"\\b"),"Error message missing field name: "+f.message);return}this.fail(!1,!0,"Mixin must fail on conflict: "+c)},"A class is considered to be a type of each used trait":function(){var a=this.Sut({}),b=this.Sut({}),c=this.Sut({}),d=this.Class.use(a,b).extend({})();this.assertOk(this.Class.isA(a,
d));this.assertOk(this.Class.isA(b,d));this.assertOk(!1===this.Class.isA(c,d))},"Can mix traits into named class":function(){var a=!1,b=this.Sut({foo:function(){a=!0}});this.Class("Named").use(b).extend({})().foo();this.assertOk(a)},"Explicit class definitions must be terminated by an extend call":function(){var a=this,b=this.Sut({foo:function(){}}),c=this.Sut({bar:function(){}});this.assertThrows(function(){a.Class.use(b)()},TypeError);this.assertThrows(function(){a.Class.use(b).use(c)()},TypeError);
this.assertThrows(function(){a.AbstractClass.use(b)()},TypeError);this.assertDoesNotThrow(function(){a.Class.use(b).extend({})();a.Class.use(b).use(c).extend({})()})},"Can mix traits into class after implementing interface":function(){var a=this,b=!1,c=this.Sut({foo:function(){b=!0}}),d=this.Interface({bar:[]}),f=null;this.assertDoesNotThrow(function(){f=a.AbstractClass.implement(d).use(c).extend({});a.assertOk(f.isAbstract())});this.assertThrows(function(){a.Class.implement(d).use(c).extend({})});
f.extend({bar:function(){}})().foo();this.assertOk(b)},"Trait method that returns self will return containing class":function(){var a=this,b=this.Sut({foo:function(){return this}});this.Class.use(b).extend({go:function(){a.assertStrictEqual(this,this.foo())}})().go()},"Trait static members are prohibited":function(){var a=this.Sut;this.assertThrows(function(){a({"static private foo":"prop"})});this.assertThrows(function(){a({"static foo":function(){}})})},"Trait getters and setters are prohibited":function(){if(this.hasGetSet){var a=
this.Sut;this.assertThrows(function(){var b={};Object.defineProperty(b,"foo",{get:function(){},set:function(){},enumerable:!0});a(b)})}},"Staging object for eventual mixin is considered to be class":function(){var a=this.Sut({});this.assertOk(this.Class.isClass(this.Class({}).use(a)))},"Throws error when object to mix in is not a trait":function(){var a=this;this.assertThrows(function(){a.Class({}).use({})},TypeError);this.assertThrows(function(){a.Class({}).use(a.Trait({}),{})},TypeError)}})})(h["test/Trait/DefinitionTest"]=
{},"test/Trait");(function(d,f){d.exports={};k=".";document.write("test/Trait/ImmediateTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait");this.Class=this.require("class")},"Invoking partial class after mixin instantiates":function(){var a=!1,b=this.Sut({"public foo":function(){a=!0}});this.Class.extend({}).use(b)().foo();this.assertOk(a)},"Can invoke partial mixin atop of non-empty base":function(){var a=!1,b=!1,c=this.Class({"public foo":function(){a=!0}}),
d=this.Sut({"public bar":function(){b=!0}}),c=c.use(d)();c.foo();c.bar();this.assertOk(a);this.assertOk(b)},"Partial arguments are passed to class constructor":function(){var a=null,b={foo:"bar"},c=this.Class({__construct:function(){a=arguments}}),d=this.Sut({});c.use(d)(b);this.assertStrictEqual(a[0],b)}})})(h["test/Trait/ImmediateTest"]={},"test/Trait");(function(d,f){d.exports={};k=".";document.write("test/Trait/LinearizationTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait");
this.Class=this.require("class");this.Interface=this.require("interface")},"Class super call refers to mixin that is part of a class definition":function(){var a=this,b=!1,c=this.Sut({"virtual public foo":function(){b=!0}});this.Class.use(c).extend({"override public foo":function(){try{this.__super()}catch(b){a.fail(!1,!0,"Super invocation failure: "+b.message)}}})().foo();this.assertOk(b)},"Mixin overriding class method has class method as super method":function(){var a=this,b={},c=this.Interface({foo:[]}),
d=this.Sut.implement(c).extend({"abstract override foo":function(){return this.__super(b)}}),f=Math.random(),c=this.Class.implement(c).extend({"private _priv":f,"virtual foo":function(b){a.assertEqual(f,this._priv);return b}});this.assertStrictEqual(c.use(d)().foo(),b)},"Mixin overriding another mixin method M has super method M":function(){var a,b,c,d=this.Interface({foo:[]}),f=this.Sut.implement(d).extend({"abstract override foo":function(){a=!0;this.__super()}}),g=this.Sut.implement(d).extend({"abstract override foo":function(){b=
!0;this.__super()}});this.Class.implement(d).extend({"virtual foo":function(){c=!0}}).use(f).use(g)().foo();this.assertOk(a);this.assertOk(b);this.assertOk(c)},"Mixin can be mixed in atop of itself":function(){var a=0,b=!1,c=this.Interface({foo:[]}),d=this.Sut.implement(c).extend({"abstract override foo":function(){a++;this.__super()}});this.Class.implement(c).extend({"virtual foo":function(){b=!0}}).use(d).use(d).use(d)().foo();this.assertEqual(a,3);this.assertOk(b)},"__inst refers to mixin class object":function(){var a=
this,b=!1,c=this.Sut({"virtual public foo":function(){a.assertStrictEqual(d,this.__inst);b=!0}}),d=this.Class.use(c).extend({"override public foo":function(){this.__super()}})();d.foo();this.assertOk(b)}})})(h["test/Trait/LinearizationTest"]={},"test/Trait");(function(d,f){d.exports={};k=".";document.write("test/Trait/MixedExtendTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait");this.Class=this.require("class")},"Subtype instantiates traits of supertype":function(){var a=
!1,b=this.Sut({foo:function(){a=!0}});this.Class.use(b).extend({}).extend({__construct:function(){}})().foo();this.assertOk(a)},"Subtype has same polymorphic qualities of parent mixins":function(){var a=this.Sut({}),b=this.Class.use(a).extend({}).extend({})();this.assertOk(this.Class.isA(a,b))},"Subtype can mix in additional traits":function(){var a=!1,b=!1,c=this.Sut({"public ta":function(){a=!0}}),d=this.Sut({"public tb":function(){b=!0}}),f=null,g=this;this.assertDoesNotThrow(function(){var a=
g.Class.use(c).extend({});f=g.Class.use(d).extend(a,{})});this.assertDoesNotThrow(function(){var a=f();a.ta();a.tb()});this.assertOk(a);this.assertOk(b)},"Subtype trait types do not overwrite supertype types":function(){var a=this.Sut({}),b=this.Sut({}),c=this.Class.use(a).extend({}),c=this.Class.use(b).extend(c,{})();this.assertOk(this.Class.isA(a,c));this.assertOk(this.Class.isA(b,c))},"Can mix in traits directly atop of existing class":function(){var a=!1,b=!1,c=!1,d=this.Class({"public foo":function(){a=
!0}}),f=this.Sut({"public bar":function(){b=!0}}),d=d.use(f).extend({"public baz":function(){c=!0}})();d.foo();d.bar();d.baz();this.assertOk(a);this.assertOk(b);this.assertOk(c)},"Can chain use calls":function(){var a=this.Sut({foo:function(){}}),b=this.Sut({bar:function(){}}),c=null,d=this.Class;this.assertDoesNotThrow(function(){c=d.extend({}).use(a).use(b)});this.assertDoesNotThrow(function(){c().foo();c().bar()})}})})(h["test/Trait/MixedExtendTest"]={},"test/Trait");(function(d,f){d.exports={};
k=".";document.write("test/Trait/NamedTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait");this.Class=this.require("class");this.Interface=this.require("interface")},"Anonymous trait is properly indicated when converted to string":function(){var a=this.Sut({}).toString();this.assertEqual(a,"(Trait)")},"Named trait contains name when converted to string":function(){var a=this.Sut("FooTrait",{});this.assertOk(a.toString().match("FooTrait"))},"Named trait definition cannot contain zero or more than two arguments":function(){var a=
this.Sut;this.assertThrows(function(){a()});this.assertThrows(function(){a(1,2,3)})},"First argument in named trait definition must be a string":function(){var a=this.Sut;this.assertThrows(function(){a({},{})})},"Providing only trait name creates staging object":function(){var a=this.Sut;this.assertDoesNotThrow(function(){a("Foo")})},"Can extend named trait staging object":function(){var a=this.Sut,b={},c=null;this.assertDoesNotThrow(function(){c=a("Foo").extend({foo:function(){return b}})});this.assertStrictEqual(this.Class({}).use(c)().foo(),
b);this.assertOk(c.toString().match("Foo"))},"Can implement interface using named trait staging object":function(){var a=this.Sut,b=this.Interface({}),c=this.Interface({}),d=null;this.assertDoesNotThrow(function(){d=a("Foo").implement(b,c).extend({})});var f=this.Class({}).use(d)();this.assertOk(this.Class.isA(b,f));this.assertOk(this.Class.isA(c,f));this.assertOk(d.toString().match("Foo"))},"Can extend class using named trait staging object":function(){var a=this.Sut,b={},c=null,d=this.Class({_foo:null,
getFoo:function(){return b}});this.assertDoesNotThrow(function(){c=a("Extended").extend(d,{get:function(){return this.getFoo()}})});this.assertStrictEqual(b,d.use(c)().get());this.assertThrows(function(){this.Class.use(c)()});this.assertOk(c.toString().match("Extended"))},"Can create parameterized trait using named staging object":function(){var a=this.Class({});this.assertOk(this.Sut.isParameterTrait(this.Sut("Foo").extend(a,{__mixin:function(){}})))}})})(h["test/Trait/NamedTest"]={},"test/Trait");
(function(d,f){d.exports={};k=".";document.write("test/Trait/ParameterTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait");this.Class=this.require("class");var a=this;this.createParamTrait=function(b){return a.Sut({__mixin:b||function(){}})}},"Can create parameter traits":function(){var a=this.createParamTrait();this.assertOk(this.Sut.isParameterTrait(a));this.assertOk(this.Sut.isTrait(a))},"Cannot mix in a parameter trait":function(){var a=this;this.assertThrows(function(){a.Class.use(a.createParamTrait())()})},
"Invoking parameter trait produces argument trait":function(){var a=this;this.assertDoesNotThrow(function(){a.assertOk(a.Sut.isArgumentTrait(a.createParamTrait()()))})},"Invoking a standard trait throws an exception":function(){var a=this.Sut;this.assertThrows(function(){a({})()})},"Recognizes argument trait as a trait":function(){this.assertOk(this.Sut.isTrait(this.createParamTrait()()))},"Cannot re-configure argument trait":function(){var a=this;this.assertThrows(function(){a.createParamTrait()()()})},
"__mixin is invoked upon class instantiation":function(){var a=0,b=this.createParamTrait(function(){a++});this.Class({}).use(b())();this.assertEqual(a,1)},"__mixin is passed arguments by reference":function(){var a,b={a:"a"},c={b:"b"},d=this.createParamTrait(function(){a=arguments});this.Class({}).use(d(b,c))();this.assertStrictEqual(b,a[0]);this.assertStrictEqual(c,a[1])},"__mixin has access to trait private members":function(){var a={},b=this.Sut({"private _foo":null,__mixin:function(a){this._foo=
a},getFoo:function(){return this._foo}});this.assertStrictEqual(a,this.Class({}).use(b(a))().getFoo())},"__mixin with empty parameter list is still invoked":function(){var a={},b,c=this.createParamTrait(function(){b=a});this.Class({}).use(c())();this.assertStrictEqual(a,b)},"Mixing in param trait will invoke __mixin with no arguments":function(){var a=0,b=this.createParamTrait(function(){a|=1}),c=this.createParamTrait(function(b){a|=2}),d=this.Class({});this.assertDoesNotThrow(function(){d.use(b)();
d.use(c)()});this.assertEqual(a,3)},"Invokes __mixin of each sibling mixin":function(){var a=[],b=[{},[]],c=function(){a.push(arguments)},d=this.createParamTrait(c),c=this.createParamTrait(c);this.Class({}).use(d(b[0]),c(b[1]))();this.assertEqual(a.length,2);this.assertStrictEqual(a[0][0],b[0]);this.assertStrictEqual(a[1][0],b[1])},"Invokes __mixin before __construct when C.use(T)":function(){var a=!1,b=this.createParamTrait(function(){a=!0}),c=this.Class({__construct:function(){if(!a)throw Error("__construct called before __mixin");
}});this.assertDoesNotThrow(function(){c.use(b)()})},"Invokes __construct before __mixin when Class.use(T).extend()":function(){var a=!1,b=this.createParamTrait(function(){if(!a)throw Error("__mixin called before __construct");}),c=this.Class.use(b).extend({__construct:function(){a=!0}});this.assertDoesNotThrow(function(){c()})},"Subtype invokes ctor before supertype __construct or __mixin":function(){var a=!1,b=this.createParamTrait(function(){if(!a)throw Error("__mixin called before Sub#__construct");
}),c=this.Class({}).use(b).extend({__construct:function(){a=!0}});this.assertDoesNotThrow(function(){c()})}})})(h["test/Trait/ParameterTest"]={},"test/Trait");(function(d,f){d.exports={};k=".";document.write("test/Trait/PropertyTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait")},"Private trait properties are permitted":function(){var a=this.Sut;this.assertDoesNotThrow(function(){a({"private _foo":"bar"})})},"Public and protected trait properties are prohibited":function(){var a=
this.Sut;this.assertThrows(function(){a({"public foo":"bar"})});this.assertThrows(function(){a({"protected foo":"bar"})})}})})(h["test/Trait/PropertyTest"]={},"test/Trait");(function(d,f){d.exports={};k=".";document.write("test/Trait/VirtualTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("Trait");this.Class=this.require("class")},"Class inherits virtual trait method":function(){var a=!1,b=this.Sut({"virtual foo":function(){a=!0}}),c=this.Class.use(b).extend({});c().foo();
this.assertOk(a,"Virtual method not called");var d=!1,f;this.assertDoesNotThrow(function(){f=c.extend({"override foo":function(){d=!0}})});f().foo();this.assertOk(d,"Method not overridden")},"Class can override virtual trait method":function(){var a=this,b=this.Sut({"virtual foo":function(){a.fail(!0,!1,"Method was not overridden.")}}),b=this.Class.use(b).extend({"override foo":function(){return"foobar"}});this.assertEqual(b().foo(),"foobar")},"Class-overridden virtual trait method is accessible by trait":function(){var a=
this,b=this.Sut({"public doFoo":function(){this.foo()},"virtual protected foo":function(){a.fail(!0,!1,"Method not overridden.")}}),c=!1;this.Class.use(b).extend({"override protected foo":function(){c=!0}})().doFoo();this.assertOk(c)},"Subtype can override virtual method of trait mixed into supertype":function(){var a=this,b=this.Sut({"public doFoo":function(){return this.foo()},"virtual protected foo":function(){a.fail(!0,!1,"Method not overridden.")}}),c=!1;this.Class.use(b).extend({}).extend({"override protected foo":function(){c=
!0}})().doFoo();this.assertOk(c)},"Properly invokes non-overridden virtual trait methods":function(){var a={a:!0},b={b:!0},c=this.Sut({pub:function(){return this.vpub()},prot:function(){return this.vprot()},"virtual public vpub":function(){return a},"virtual protected vprot":function(){return b}}),c=this.Class.use(c).extend({})();this.assertStrictEqual(c.pub(),a);this.assertStrictEqual(c.prot(),b)},"Virtual trait method returning self returns class instance":function(){var a=this,b=this.Sut({"virtual foo":function(){return this}});
this.Class.use(b).extend({go:function(){a.assertStrictEqual(this,this.foo())}})().go()},"Overridden virtual trait method returning self returns class instance":function(){var a=this,b=this.Sut({"virtual foo":function(){return this}});this.Class.use(b).extend({"override foo":function(){return this.__super()},go:function(){a.assertStrictEqual(this,this.foo())}})().go()},"Data are properly returned from trait override super call":function(){var a=this,b={},c=this.Sut({"virtual foo":function(){return b}});
this.Class.use(c).extend({"override foo":function(){a.assertStrictEqual(b,this.__super())}})().foo()},"Super trait method overrided in class executed within private context":function(){var a={},b=this.Sut({"virtual foo":function(){return this.priv()},"private priv":function(){return a}});this.assertStrictEqual(a,this.Class.use(b).extend({"override foo":function(){return this.__super()}})().foo())}})})(h["test/Trait/VirtualTest"]={},"test/Trait");(function(d,f){d.exports={};k=".";document.write("test/Util/AbstractTest...<br />");
g("common").testCase({setUp:function(){this.Sut=this.require("util")},"abstractMethod returns a function":function(){this.assertEqual(typeof this.Sut.createAbstractMethod(),"function")},"Returned function is considered abstract by isAbstractMethod":function(){this.assertOk(this.Sut.isAbstractMethod(this.Sut.createAbstractMethod()))},"Abstract methods cannot be invoked":function(){var a=this.Sut;this.assertThrows(function(){a.createAbstractMethod()()},Error)}})})(h["test/Util/AbstractTest"]={},"test/Util");
(function(d,f){d.exports={};k=".";document.write("test/Util/CloneTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("util")},"Cloned array is not the same object as the original":function(){var a=[1,2,3];this.assertNotStrictEqual(this.Sut.clone(a),a)},"Cloned object is not the same object as the original":function(){var a={foo:"bar"};this.assertNotStrictEqual(this.Sut.clone(a),a)},"Cloned array data mirrors original (shallow clone)":function(){for(var a=[1,"2",{three:3},
[4]],b=this.Sut.clone(a),c=0,d=a.length;c<d;c++)this.assertStrictEqual(a[c],b[c])},"Cloned object data mirrors original (shallow clone)":function(){var a={a:1,b:[2],c:{three:3},d:"4"},b=this.Sut.clone(a),c;for(c in a)this.assertStrictEqual(a[c],b[c])},"Deeply cloned array data mirrors original":function(){var a=[[1,2],[3,4],[5,[6,7]],{a:1}],b=this.Sut.clone(a,!0);this.assertDeepEqual(a,b);for(var c=0,d=a.length;c<d;c++)this.assertNotStrictEqual(a[c],b[c])},"Deeply cloned object data mirrors original":function(){var a=
{a:[1],b:[2],c:{d:3}},b=this.Sut.clone(a,!0);this.assertDeepEqual(a,b);for(var c in a)this.assertNotStrictEqual(a[c],b[c])},"Functions are returned by reference, not cloned":function(){var a=function(){};this.assertStrictEqual(a,this.Sut.clone({foo:a},!0).foo)},"Primitives are returned by clone":function(){for(var a=[null,1,!0,!1,void 0],b=a.length;b--;){var c=a[b];this.assertEqual(c,this.Sut.clone(c),"Failed to clone primitive value: "+c)}this.assertOk(isNaN(this.Sut.clone(NaN)))}})})(h["test/Util/CloneTest"]=
{},"test/Util");(function(d,f){d.exports={};k=".";document.write("test/Util/CopyTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("util");this.hasGetSet=!this.Sut.definePropertyFallback()},"Values are copied to destination object by reference":function(){var a={a:"a",b:2,c:!0,d:!1,e:void 0,f:null,g:function(){}},b={};this.Sut.copyTo(b,a);for(var c in a)this.assertStrictEqual(a[c],b[c])},"Getters and setters are copied to destination object by reference":function(){this.hasGetSet||
this.skip();var a=function(){},b=function(){},c={},d={},f=null;Object.defineProperty(c,"foo",{get:a,set:b,enumerable:!0});this.Sut.copyTo(d,c);f=Object.getOwnPropertyDescriptor(d,"foo");this.assertStrictEqual(f.get,a,"Getter is copied by reference by default");this.assertDeepEqual(f.set,b,"Setter is copied by reference by default")},"Copy operation returns destination object":function(){var a={};this.assertStrictEqual(this.Sut.copyTo(a,{}),a)},"Throws error if source or dest are not provided":function(){var a=
this.Sut.copyTo;this.assertThrows(function(){a()},TypeError,"Dest parameter is required");this.assertThrows(function(){a("bla",{})},TypeError,"Dest parameter is required to be an object");this.assertThrows(function(){a({})},TypeError,"Src parameter is required");this.assertThrows(function(){a({},"foo")},TypeError,"Src parameter is required to be an object")},"Deep copies are supported":function(){var a={foo:[1,2,3]},b=this.Sut.copyTo({},a,!0);this.assertDeepEqual(a.val,b.val,"Copied values should be comparitively equal with deep copy");
this.assertNotStrictEqual(a.foo,b.foo,"Copied values should not be the same object after deep copy")}})})(h["test/Util/CopyTest"]={},"test/Util");(function(d,f){d.exports={};k=".";document.write("test/Util/DefineSecurePropTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("util");this.expected=Object.defineProperty instanceof Function?!1:!0;this.fallback=this.Sut.definePropertyFallback();if(!this.expected&&this.fallback)try{this.Sut.definePropertyFallback(!1),this.Sut.defineSecureProp({},
"foo",1),!0===this.Sut.definePropertyFallback()&&(this.expected=!0)}catch(a){}this.descRestrictionCheck=function(a,b){this.fallback&&this.skip();var c={};this.Sut.defineSecureProp(c,"foo",null);this.assertEqual(Object.getOwnPropertyDescriptor(c,"foo")[a],b)};this.forceFallback=function(a){this.Sut.definePropertyFallback(!0);a.call(this);this.Sut.definePropertyFallback(this.fallback)}},"definePropertyFallback returns whether secure definition is supported":function(){this.assertEqual(this.expected,
this.Sut.definePropertyFallback())},"definePropertyFallback returns util when used as a setter":function(){this.assertStrictEqual(this.Sut.definePropertyFallback(this.fallback),this.Sut)},"Defining secure prop creates field with given value on given object":function(){var a={},b={bar:"baz"};this.Sut.defineSecureProp(a,"foo",b);this.assertStrictEqual(a.foo,b)},"Secure property is not writable":function(){this.descRestrictionCheck("writable",!1)},"Secure property is not configurable":function(){this.descRestrictionCheck("configurable",
!1)},"Secure property is not enumerable":function(){this.descRestrictionCheck("enumerable",!1)},"Defining secure prop creates field and value when falling back":function(){this.forceFallback(function(){var a={},b={bar:"baz"};this.Sut.defineSecureProp(a,"foo",b);this.assertStrictEqual(a.foo,b)})},"Secure property is writable when falling back":function(){this.forceFallback(function(){this.descRestrictionCheck("writable",!0)})},"Secure property is configurable when falling back":function(){this.forceFallback(function(){this.descRestrictionCheck("configurable",
!0)})},"Secure property is enumerable when falling back":function(){this.forceFallback(function(){this.descRestrictionCheck("enumerable",!0)})}})})(h["test/Util/DefineSecurePropTest"]={},"test/Util");(function(d,f){d.exports={};k=".";document.write("test/Util/GetPropertyDescriptorTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("util");this.hasGetSet=!this.Sut.definePropertyFallback()},"Should use Object.getOwnPropertyDescriptor if available":function(){this.hasGetSet&&
Object.getOwnPropertyDescriptor||this.skip();this.assertStrictEqual(this.Sut.getOwnPropertyDescriptor,Object.getOwnPropertyDescriptor)},"Indicates whether property chain traversal is possible":function(){this.assertEqual(this.Sut.getPropertyDescriptor.canTraverse,"function"===typeof Object.getPrototypeOf)},"Traversable property is non-writable":function(){this.hasGetSet&&Object.getOwnPropertyDescriptor||this.skip();this.assertEqual(Object.getOwnPropertyDescriptor(this.Sut.getPropertyDescriptor,"canTraverse").writable,
!1)},"Acts as ES5 getOwnPropertyDescriptor when one level deep":function(){var a={foo:"bar"},b=this.Sut.getOwnPropertyDescriptor(a,"foo"),a=this.Sut.getPropertyDescriptor(a,"foo");this.assertDeepEqual(b,a)},"Traverses the prototype chain when necessary":function(){this.Sut.getPropertyDescriptor.canTraverse||this.skip();var a={foo:"bar"},b=function(){};b.prototype=a;b=new b;a=this.Sut.getOwnPropertyDescriptor(a,"foo");b=this.Sut.getPropertyDescriptor(b,"foo");this.assertDeepEqual(b,a)}})})(h["test/Util/GetPropertyDescriptorTest"]=
{},"test/Util");(function(d,f){d.exports={};k=".";document.write("test/Util/GlobalTest...<br />");var a=this;g("common").testCase({caseSetUp:function(){this.Sut=this.require("util/Global");this.gobj=this.Sut.expose();this.uniq="___$$easejs$globaltest$$"},"Global object represents environment global object":function(){switch(!0){case a.window:this.assertStrictEqual(this.gobj,a.window);break;case a.root:this.assertStrictEqual(this.gobj,a.root);break;default:this.assertStrictEqual(this.gobj.Array,Array)}},
"Providing alternative will set value if name does not exist":function(){var a=this.Sut(),c=this.uniq,d={_:"easejsOK"};a.provideAlt(c,function(){return d});this.assertStrictEqual(a.get(c),d)},"Providing alternative will not pollute the global scope":function(){this.Sut().provideAlt(this.uniq,function(){return{}});this.assertEqual(this.gobj[this.uniq],void 0)},"Providing alternative will not modify global if name exists":function(){var a=this.Sut(),c=this.gobj.Array;a.provideAlt("Array",function(){return{}});
this.assertStrictEqual(a.get("Array"),c)},"Providing alternative twice will not modify first alternative":function(){var a=this.Sut();field=this.uniq;expected={_:"easejsOK"};a.provideAlt(field,function(){return expected});a.provideAlt(field,function(){return"oops"});this.assertStrictEqual(a.get(field),expected)},"provideAlt returns self for method chaining":function(){var a=this.Sut();this.assertStrictEqual(a,a.provideAlt("foo",function(){}))}})})(h["test/Util/GlobalTest"]={},"test/Util");(function(d,
f){d.exports={};k=".";document.write("test/Util/PropParseKeywordsTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("util")},"`abstract' keyword designates method as abstract":function(){var a=this,b=["one","two"],c=null;this.Sut.propParse({"abstract foo":b},{method:function(d,f,g){a.assertOk(g);a.assertEqual(typeof f,"function");a.assertOk(a.Sut.isAbstractMethod(f));a.assertEqual(f.__length,b.length);c=d}});this.assertEqual(c,"foo")},"Not considered abstract when `override' also provided":function(){var a=
this,b=null;this.Sut.propParse({"abstract override foo":function(){}},{method:function(c,d,f){a.assertOk(!1===f);a.assertEqual(typeof d,"function");a.assertOk(!1===a.Sut.isAbstractMethod(d));b=c}});this.assertEqual(b,"foo")},"Supports custom property keyword parser":function(){var a={foo:{"abstract":!0}},b=[];this.Sut.propParse({foo:[]},{keywordParser:function(b){return{name:b+"poo",keywords:a[b]}},method:function(a,d,f){f&&b.push(a)}});this.assertOk("foopoo"===b[0],"Can provide custom property keyword parser")},
"Keyword parser tolerates bogus responses":function(){var a=this.Sut.propParse;this.assertDoesNotThrow(function(){var b={foo:"bar"};a(b,{keywordParser:function(a){}});a(b,{keywordParser:function(a){return{name:[],keywords:"slefwef"}}})},Error)},"Parser returns keywords":function(){var a={"public foo":"","const foo2":"","public private const foo3":"","public static virtual method":function(){},"public  const   spaces":function(){}},b={},c={foo:{"public":!0},foo2:{"const":!0},foo3:{"public":!0,"private":!0,
"const":!0},method:{"public":!0,"static":!0,virtual:!0},spaces:{"public":!0,"const":!0}};this.Sut.propParse(a,{property:function(a,c,d){b[a]=d},method:function(a,c,d,e){b[a]=e}});for(var d in b)this.assertDeepEqual(b[d],c[d],"Keywords are properly recognized and made available for interpretation ("+d+")");!1===this.Sut.definePropertyFallback()&&(a={},b={},Object.defineProperty(a,"public foo",{get:function(){},set:function(){},enumerable:!0}),this.Sut.propParse(a,{getset:function(a,c,d,e){c&&(b[a+
"g"]=e);d&&(b[a+"s"]=e)}}),this.assertDeepEqual(b.foog,{"public":!0},"Getter keywords are properly recognized and available"),this.assertDeepEqual(b.foos,{"public":!0},"Setter keywords are properly recognized and available"))}})})(h["test/Util/PropParseKeywordsTest"]={},"test/Util");(function(d,f){d.exports={};k=".";document.write("test/Util/PropParseTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("util");this.hasGetSet=!this.Sut.definePropertyFallback();this.checkType=
function(a,b,c){this.checkTypeEx("foo",{foo:a},b,c)};this.checkTypeEx=function(a,b,c,d){a={};var f=null;a[c]=function(a){a===a&&(f=arguments)};this.Sut.propParse(b,a);this.assertOk(null!==f,"Type failure");d&&d.apply(this,f)}},"Detects string as property":function(){this.checkType("string","property")},"Detects boolean as property":function(){this.checkType(!0,"property");this.checkType(!1,"property")},"Detects integer as property":function(){this.checkType(1,"property")},"Detects float as property":function(){this.checkType(3.14159,
"property")},"Detects array as property":function(){this.checkType([],"property")},"Detects object as property":function(){this.checkType({},"property")},"Detects normal functions as concrete methods":function(){this.checkType(function(){},"method",function(a,b,c){this.assertOk(!c)})},"Detects special functions as abstract methods":function(){var a=this.Sut.createAbstractMethod();this.checkType(a,"method",function(a,c,d){this.assertOk(d)})},"Detects proxies as methods":function(){this.checkTypeEx("foo",
{"proxy foo":"bar"},"method")},"Detects getters and setters":function(){this.hasGetSet||this.skip();var a={},b,c,d=!1;Object.defineProperty(a,"foo",{get:b=function(){d=!0},set:c=function(){},enumerable:!0});this.checkTypeEx("foo",a,"getset",function(a,f,g){this.assertStrictEqual(b,f,"Getter mismatch");this.assertStrictEqual(c,g,"Setter mismatch");this.assertEqual(d,!1,"Getter should not be called during processing")})},"Ignores prototype fields":function(){var a=function(){};a.prototype.one=1;a=new a;
a.two=2;var b=[];this.Sut.propParse(a,{each:function(a){b.push(a)}});this.assertEqual(b.length,1);this.assertEqual(b[0],"two")},"Triggers error if invalid variable names are used as param names":function(){var a=this.Sut.propParse;this.assertThrows(function(){a({"abstract foo":["invalid name"]},{})},SyntaxError);this.assertThrows(function(){a({"abstract foo":["1invalid"]},{})},SyntaxError);this.assertDoesNotThrow(function(){a({"abstract foo":["valid_name"]},{})},SyntaxError)},"Supports dynamic context to handlers":function(){function a(){b.assertStrictEqual(this,
c)}var b=this,c={},d={prop:"prop",method:function(){}};this.hasGetSet&&Object.defineProperty(d,"getset",{get:function(){},set:function(){},enumerable:!0});this.Sut.propParse(d,{each:a,property:a,getset:a,method:a},c)}})})(h["test/Util/PropParseTest"]={},"test/Util");(function(d,f){d.exports={};k=".";document.write("test/Util/SymbolTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("util/Symbol")},"Exports a function":function(){this.assertOk("function"===typeof this.Sut)}})})(h["test/Util/SymbolTest"]=
{},"test/Util");(function(d,f){d.exports={};k=".";document.write("test/Util/symbol/FallbackSymbolTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("util/symbol/FallbackSymbol")},"Constructor returns an instance of Symbol":function(){var a=this.Sut();this.assertOk(a instanceof this.Sut)},"Generated string varies with each call":function(){for(var a={},b=32;b--;){var c=this.Sut();a[c]&&this.fail(c,"");a[c]=!0}this.assertOk("passed")}})})(h["test/Util/symbol/FallbackSymbolTest"]=
{},"test/Util/symbol");(function(d,f){d.exports={};k=".";document.write("test/VersionTest...<br />");g("common").testCase({caseSetUp:function(){this.version=this.require("version")},"Can retrieve major version number":function(){this.assertOk("number"===typeof this.version.major,"Major version number should be available")},"Can retrieve minor version number":function(){this.assertOk("number"===typeof this.version.minor,"Minor version number should be available")},"Can retrieve revision version number":function(){this.assertOk("number"===
typeof this.version.rev,"Revision version number should be available")},"Array of version numbers is available":function(){this.assertEqual(this.version.major,this.version[0]);this.assertEqual(this.version.minor,this.version[1]);this.assertEqual(this.version.rev,this.version[2])},"Version string is available":function(){var a=this.version;this.assertEqual(a.major+"."+a.minor+"."+a.rev+(a.suffix&&"-"+a.suffix||""),this.version.toString(),"Version string should be made available")}})})(h["test/VersionTest"]=
{},"test");(function(d,f){d.exports={};k=".";document.write("test/VisibilityObjectFactoryFactoryTest...<br />");g("common").testCase({caseSetUp:function(){this.sut=this.require("VisibilityObjectFactoryFactory");this.VisibilityObjectFactory=this.require("VisibilityObjectFactory");this.FallbackVisibilityObjectFactory=this.require("FallbackVisibilityObjectFactory");this.util=this.require("util")},"Returns standard factory if not falling back":function(){this.util.definePropertyFallback()||this.assertOk(this.sut.fromEnvironment()instanceof
this.VisibilityObjectFactory,"Creates standard VisibilityObjectFactory if supported")},"Returns fallback factory if falling back":function(){var a=this.util.definePropertyFallback();this.util.definePropertyFallback(!0);this.assertOk(this.sut.fromEnvironment()instanceof this.FallbackVisibilityObjectFactory,"Creates fallback VisibilityObjectFactory if falling back");this.util.definePropertyFallback(a)}})})(h["test/VisibilityObjectFactoryFactoryTest"]={},"test");(function(d,f){d.exports={};k=".";document.write("test/VisibilityObjectFactoryTest...<br />");
g("common").testCase({caseSetUp:function(){this.Sut=this.require("VisibilityObjectFactory");this.props={"public":{pub:[["foo"],{}]},"protected":{prot:[["bar"],{}]},"private":{priv:[["baz"],{}]}};this.methods={"public":{fpub:function(){var a=function(){};a.___$$keywords$$={"public":!0};return a}()},"protected":{fprot:function(){}},"private":{fpriv:function(){}}}},setUp:function(){this.require("util").definePropertyFallback()&&this.skip();this.sut=this.Sut()},"Can instantiate with and without `new` keyword":function(){this.assertOk(new this.Sut instanceof
this.Sut,"Should be able to instantiate VisibilityObjectFactory with 'new' keyword");this.assertOk(this.Sut()instanceof this.Sut,"Should be able to instantiate VisibilityObjectFactory without 'new' keyword")},"Can create property proxy":function(){var a={},b={},c={one:!0,two:!0,three:!0};this.sut.createPropProxy(a,b,c);for(var d in c)b[d]="foo",this.assertEqual(b[d],"foo","Property can be set/retrieved on destination object"),this.assertEqual(a[d],"foo","Property can be set via proxy and retrieved on base"),
a[d]="bar",this.assertEqual(b[d],"bar","Property can be set on base and retrieved on dest object")},"Setup creates private layer":function(){var a={foo:[]},b=this.sut.setup(a,this.props,this.methods);this.assertNotEqual(b,a,"Returned object should not be the destination object");this.assertStrictEqual(b.foo,a.foo,"Destination object is part of the prototype chain of the returned obj")},"Private layer includes protected member proxy":function(){var a={};this.sut.setup(a,this.props,this.methods).prot=
"foo";this.assertEqual(a.prot,"foo","Protected values are proxied from private layer")},"Public properties are copied to destination object":function(){var a={};this.sut.setup(a,this.props,this.methods);this.assertEqual(a.pub[0],this.props["public"].pub[0],"Public properties are properly initialized");this.assertNotStrictEqual(a.pub,this.props["public"].pub,"Public properties should not be copied by reference");this.assertEqual(a.fpub,void 0,"Public method references should not be copied")},"Protected properties and methods are added to dest object":function(){var a=
{};this.sut.setup(a,this.props,this.methods);this.assertEqual(a.prot[0],this.props["protected"].prot[0],"Protected properties are properly initialized");this.assertNotStrictEqual(a.prot,this.props["protected"].prot,"Protected properties should not be copied by reference");this.assertStrictEqual(a.fprot,this.methods["protected"].fprot,"Protected members should be copied by reference")},"Public methods are not overwritten by default":function(){var a={fpub:this.methods["public"].fpub};this.methods["protected"].fpub=
function(){};this.sut.setup(a,this.props,this.methods);this.assertStrictEqual(a.fpub,this.methods["public"].fpub,"Public methods should not be overwritten by protected methods")},"Public methods are not overwritten when keyword is omitted":function(){var a=function(){};a.___$$keywords$$={};var b={fpub:a};this.methods["protected"].fpub=function(){};this.sut.setup(b,this.props,this.methods);this.assertStrictEqual(b.fpub,a,"Public methods should not be overwritten by protected methods")},"Private properties and methods are added to dest object":function(){var a=
this.sut.setup({},this.props,this.methods);this.assertEqual(a.priv[0],this.props["private"].priv[0],"Private properties are properly initialized");this.assertNotStrictEqual(a.priv,this.props["private"].priv,"Private properties should not be copied by reference");this.assertStrictEqual(a.fpriv,this.methods["private"].fpriv,"Private members should be copied by reference")}})})(h["test/VisibilityObjectFactoryTest"]={},"test");(function(d,f){function a(){}function b(){}d.exports={};k=".";document.write("test/ctor/ErrorCtorTest...<br />");
b.prototype=new a;b.prototype.name="sub dummy name";g("common").testCase({caseSetUp:function(){this.Sut=this.require("ctor/ErrorCtor");this.bases=["",{}];this.frames=[{frames:["__$$ector$$__@foo.js:1:2","bar@first-frame.js:1:2","baz@second other frame:2:2"],strip:1,fileName:"first-frame.js",lineNumber:1,columnNumber:2},{frames:["__$$no$$__@foo.js:1:2","bar@first-frame2.js:1:2","baz@second other frame:2:2"],strip:0,fileName:void 0,lineNumber:void 0,columnNumber:void 0},{frames:["__$$ector$$__@foo.js:1",
"bar@first-frame2.js:2","baz@second other frame:3"],strip:1,fileName:"first-frame2.js",lineNumber:2,columnNumber:void 0},{frames:["__$$ector$$__@foo.js:1:1","@first-frame3.js:2:2","baz@second other frame:3:3"],strip:1,fileName:"first-frame3.js",lineNumber:2,columnNumber:2},{frames:["__$$ector$$__@foo.js:1:2\n"],strip:1,fileName:void 0,lineNumber:void 0,columnNumber:void 0},{frames:["SomeError","    at __$$ector$$__ (foo.js:1:2)","    at bar (first-frame.js:1:2)","    at baz (second other frame:2:2)"],
strip:2,fileName:"first-frame.js",lineNumber:1,columnNumber:2},{frames:["SomeError","    at __$$nomatch$$__ (foo.js:1:2)","    at bar (first-frame.js:1:2)","    at baz (second other frame:2:2)"],strip:0,fileName:void 0,lineNumber:void 0,columnNumber:void 0},{frames:["SomeError","    at __$$ector$$__ (foo.js:1)","    at bar (first-frame2.js:1)","    at baz (second other frame:2)"],strip:2,fileName:"first-frame2.js",lineNumber:1,columnNumber:void 0},{frames:["SomeError","    at __$$ector$$__ (foo.js:1:2)",
"    at (first-frame.js:1:2)","    at (second other frame:2:2)"],strip:2,fileName:"first-frame.js",lineNumber:1,columnNumber:2},{frames:["SomeError","    at __$$ector$$__ (foo.js:1:2)"],strip:2,fileName:"first-frame.js",lineNumber:void 0,columnNumber:void 0}];this.linecolf=[{lineNumber:!1,columnNumber:!1,fileName:!0},{lineNumber:!0,columnNumber:!1,fileName:!0},{lineNumber:!1,columnNumber:!0,fileName:!0},{lineNumber:!0,columnNumber:!0,fileName:!0},{lineNumber:!1,columnNumber:!1,fileName:!1},{lineNumber:!0,
columnNumber:!1,fileName:!1},{lineNumber:!1,columnNumber:!0,fileName:!1},{lineNumber:!0,columnNumber:!0,fileName:!1}]},"@each(bases) Throws error if base is not a function":function(a){this.assertThrows(function(){this.Sut(a)},TypeError)},"@each(bases) Throws error if supertype is not a function":function(b){this.assertThrows(function(){this.Sut(a,b)},TypeError)},"Sets message via constructor":function(){this.assertEqual((new (this.Sut(a).createCtor(a))("foo message")).message,"foo message")},"Does not cast message to string":function(){var b=
{};this.assertStrictEqual((new (this.Sut(a).createCtor(a))(b)).message,b)},"Sets name to class name":function(b){this.assertEqual((new (this.Sut(a).createCtor(a,"MyError"))).name,"MyError")},"Defaults name to supertype":function(c){c=this.Sut(a).createCtor(b);c.prototype=new b;this.assertEqual((new c).name,(new b).name)},"Uses Error.captureStackTrace when available":function(){function b(){}var d;b.captureStackTrace=function(){d=arguments};var f=this.Sut(b).createCtor(a);this.assertEqual(void 0,d);
var g=new f;this.assertStrictEqual(d[0],g);this.assertStrictEqual(d[1],f)},"Overwrites `stack' property if no `captureStackTrace'":function(){function b(){d&&(this.stack="as expected")}var d=!1;b.prototype=new a;b.prototype.stack="stack not set";var f=this.Sut(a).createCtor(b),d=!0,f=(new f).stack;this.assertEqual(f,"as expected")},"@each(frames) Strips self from stack if no `captureStackTrace'":function(b){var d=Array.prototype.slice.call(b.frames),f=(new (this.Sut(a).createCtor(function(){this.stack=
d.join("\n")}))).stack;this.assertEqual(d.slice(b.strip).join("\n"),f)},"@each(linecolf) Sets line, column, and filename data if available":function(a){function b(){this.stack=f.join("\n");for(var d in a)a[d]&&(this[d]=void 0)}var d={lineNumber:5,columnNumber:3,fileName:"foofile.js"},f=["@__$$ector$$__ foo:1:1","@"+d.fileName+":"+d.lineNumber+":"+d.columnNumber,"@second other frame:2:2"],g=new (this.Sut(b).createCtor(b)),h;for(h in a)a[h]?this.assertEqual(d[h],g[h]):this.assertOk(!Object.hasOwnProperty.call(g,
h))},"@each(frames) Recognizes line, column, and filename when available":function(a){function b(){this.stack=a.frames.join("\n");this.fileName=this.columnNumber=this.lineNumber=void 0}var d=new (this.Sut(b).createCtor(b));this.assertEqual(a.lineNumber,d.lineNumber);this.assertEqual(a.columnNumber,d.columnNumber)},"Provides predicate to recognize base match":function(){var c=this.Sut(a);this.assertOk(c.isError(a));this.assertOk(!c.isError(new a));this.assertOk(c.isError(b));this.assertOk(!c.isError(new b));
this.assertOk(!c.isError(function(){}))},"Invokes provided function after self":function(){var b=!1,d=void 0,f={},g=new (this.Sut(a).createCtor(a,"",function(){b=arguments;d=this}))("stillrunctor",f);this.assertOk(b);this.assertStrictEqual(f,b[1]);this.assertStrictEqual(g,d);this.assertEqual("stillrunctor",g.message)},"Throws error given a non-function `after' argument":function(){var b=this.Sut;this.assertThrows(function(){b(a).createCtor(a,"","oops")},TypeError)}})})(h["test/ctor/ErrorCtorTest"]=
{},"test/ctor");(function(d,f){d.exports={};k=".";document.write("test/warn/DismissiveHandlerTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("warn/DismissiveHandler");this.Warning=this.require("warn/Warning")},"Can be instantiated without `new` keyword":function(){this.assertOk(this.Sut()instanceof this.Sut)},"Does nothing":function(){var a=this;this.assertDoesNotThrow(function(){a.Sut().handle(a.Warning(Error("Ignore me!")))})}})})(h["test/warn/DismissiveHandlerTest"]=
{},"test/warn");(function(d,f){d.exports={};k=".";document.write("test/warn/LogHandlerTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("warn/LogHandler");this.Warning=this.require("warn/Warning")},setUp:function(){this.stubwarn=this.Warning(Error("gninraw"))},"Can be instantiated without `new` keyword":function(){this.assertOk(this.Sut()instanceof this.Sut)},"Logs messages to console":function(){var a=this,b=!1;this.Sut({warn:function(c){a.assertEqual("Warning: "+a.stubwarn.message,
c);b=!0}}).handle(this.stubwarn);this.assertOk(b,!0,"Message should be logged to console")},"Ignores missing console":function(){var a=this;this.assertDoesNotThrow(function(){a.Sut(void 0).handle(a.warnstub)})},"Falls back to log if warn is missing":function(){var a="";this.Sut({log:function(b){a=b}}).handle(this.stubwarn);this.assertEqual("Warning: "+this.stubwarn.message,a,"Should fall back to log() and log proper message")},"`warn` takes precedence over `log`":function(){var a=warn=!1;this.Sut({warn:function(){warn=
!0},log:function(){a=!0}}).handle(this.stubwarn);this.assertOk(warn);this.assertOk(!a)}})})(h["test/warn/LogHandlerTest"]={},"test/warn");(function(d,f){d.exports={};k=".";document.write("test/warn/ThrowHandlerTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("warn/ThrowHandler");this.Warning=this.require("warn/Warning")},"Can be instantiated without `new` keyword":function(){this.assertOk(this.Sut()instanceof this.Sut)},"`throwError' warning handler throws wrapped error":function(){var a=
this.Warning(Error("gninraw"));try{this.Sut().handle(a)}catch(b){this.assertStrictEqual(b,a.getError(),"Wrapped exception should be thrown");return}this.assertFail("Wrapped exception should be thrown")}})})(h["test/warn/ThrowHandlerTest"]={},"test/warn");(function(d,f){d.exports={};k=".";document.write("test/warn/WarningTest...<br />");g("common").testCase({caseSetUp:function(){this.Sut=this.require("warn").Warning},"Warning has Error prototype":function(){this.assertOk(new this.Sut(Error())instanceof
Error)},"Warning should alter Error name":function(){this.assertEqual(this.Sut(Error()).name,"Warning")},"`new' operator is not necessary to instantiate Warning":function(){this.assertOk(this.Sut(Error(""))instanceof this.Sut)},"Warning message is set from wrapped exception":function(){var a=Error("oshit"),b=a.message,c=this.Sut(a);this.assertEqual(c.message,a.message);return b},"Throws exception if no exception is wrapped":function(){var a=this.Sut;this.assertThrows(function(){a()},TypeError);this.assertThrows(function(){a("not an exception")},
TypeError)},"Can retrieve wrapped exception":function(){var a=Error("foo"),b=this.Sut(a);this.assertStrictEqual(a,b.getError())}})})(h["test/warn/WarningTest"]={},"test/warn")};I.Class=h["class"].exports;I.AbstractClass=h.class_abstract.exports;I.FinalClass=h.class_final.exports;I.Interface=h["interface"].exports;I.Trait=h.Trait.exports;I.version=h.version.exports})(easejs,".");

// -*- coding: utf-8; indent-tabs-mode: nil; tab-width: 4; c-basic-offset: 4; -*-

/**
 * Implementation of ECMAScript 6 (Draft)
 * @requires: ECMAScript 5
 * @author:   Alexander Guinness <monolithed@gmail.com>
 * @version:  0.0.7
 * @license:  MIT
 * @date:     Thu Nov 1 00:08:00 2011
 **/

void function(__object__, __array__, __global__)
{
	'use strict';

	var define = function(name)
	{
		var __own__ = __object__.hasOwnProperty;

		if (__own__.call(this, name))
			return 0;

		var set = function(name, value, descriptor)
		{
			Object.defineProperty(this, name, descriptor || {
				value: value,
				configurable: true,
				enumerable:   false,
				writable:     true
			});
		};

		if (__object__.toString.call(name) === '[object Object]')
		{
			for (var key in name) {
				if (__own__.call(name, key))
					set.call(this, key, name[key]);
			}
		}
		else
			set.apply(this, arguments);
	};


	/**
	 * ------------------------------------------------------------
	 *  String
	 * ------------------------------------------------------------
	**/


	/**
	 * String.fromCodePoint
	 * @edition ECMA-262 6th Edition, 15.5.3.3
	 *
	 * @param {Number | String} [...codePoint] -  code points
	 * @return {String} Return the string value whose elements are, in order, the elements
	 * in the List elements. If length is 0, the empty string is returned.	 *
	 * @throws {RangeError}
	 *
	 * @example:
	 *
	 * String.fromCodePoint(0x30, 107); // Ok
	**/
	define.call(String, 'fromCodePoint', function()
	{
		var i = arguments.length,
			points = [], offset;

		while (i--)
		{
			offset = arguments[i];

			if (offset < 0 || offset > 0x10FFFF)
				throw new RangeError();

			if (offset < 0x10000)
				points.unshift(offset);

			else {
				offset -= 0x10000;
				points.unshift(0xD800 | (offset >> 10), 0xDC00 | (offset & 0x3FF));
			}
		}

		return String.fromCharCode.apply(String, points);
	});


	/**
	 * String.prototype.codePointAt
	 * @edition ECMA-262 6th Edition, 15.5.4.5
	 *
	 * @param {Number | String} index - position
	 * @return {Number} Number (a nonnegative integer less than 1114112)
	 * that is the UTF-16 encode code point value starting at the string element at position (index)
	 * in the String resulting from converting this object to a String.
	 * If there is no element at that position, the result is NaN.
	 * If a valid UTF-16 sudsarrogate pair does not begin at position,
	 * the result is the code unit at position (including code points above 0xFFFF).
	 *
	 * @example:
	 *
	 * 'A'.codePointAt(0) // 65
	**/
	define.call(String.prototype, 'codePointAt', function(index)
	{
		var value = this.toString(),
			size = value.length;

		if ((index |= 0) < 0 || index >= size)
			return NaN;

		var first = value.charCodeAt(index);

		if (first < 0xD800 || first > 0xDBFF || index + 1 == size)
			return first;

		var second = value.charCodeAt(index + 1);

		if (second < 0xDC00 || first > 0xDFFF)
			return first;

		return ((first - 0xD800) << 1024) + (second - 0xDC00) + 0x10000;
	});


	/**
	 * String.prototype.repeat
	 * @edition ECMA-262 6th Edition, 15.5.4.21
	 *
	 * Creates a String consisting of the string elements of this object (converted to String) repeated <count> time
	 * @param {Number} index - position
	 * @throws {RangeError}
	 * @return {String}
	 *
	 * @example:
	 *
	 * 'A'.repeat(2) // AA
	**/
	define.call(String.prototype, 'repeat', function(count)
	{
		if ((count |= 0 ) <= 0)
			throw new RangeError();

		var result = '',
			self = this;

		while (count)
		{
			if (count & 1)
				result += self;

			if (count >>= 1)
				self += self;
		}

		return result;
	});


	/**
	 * String.prototype.startsWith
	 * @edition ECMA-262 6th Edition, 15.5.4.22
	 *
	 * Determines whether the beginning of the string instance matches a specified string.
	 * @param {*} value
	 * @param {Number | String} [ index ]
	 * @return {Boolean}
	 *
	 * @example:
	 *
	 * 'Foo'.startsWith('F')     // true
	 * 'Foo'.startsWith('o', 1); // true
	**/
	define.call(String.prototype, 'startsWith', function(value, position) {
		return this.indexOf(value, position |= 0) === position;
	});


	/**
	 * String.prototype.endsWith
	 * @edition ECMA-262 6th Edition, 15.5.4.23
	 *
	 * Determines whether the end of the string instance matches a specified string
	 * @param {Number | String} value
	 * @param {Number} [ index ]
	 * @return {Boolean}
	 *
	 * @example:
	 *
	 * Hello'.endsWith('lo') // true
	**/
	define.call(String.prototype, 'endsWith', function(value, position) {
		return this.lastIndexOf(value, position) === (position >= 0 ? position | 0 : this.length - 1);
	});


	/**
	 * String.prototype.contains
	 * @edition ECMA-262 6th Edition, 15.5.4.24
	 *
	 * Returns a value indicating whether the specified String object occurs within this string.
	 * @param {Number | String} value
	 * @param {Number} [ index ]
	 * @return {Boolean}
	 *
	 * @example:
	 *
	 * Hello'.contains('ll') // true
	**/
	define.call(String.prototype, 'contains', function(value, index) {
		return this.indexOf(value, index | 0) !== -1;
	});


	/**
	 * String.prototype.toArray
	 * @edition ECMA-262 6th Edition, 15.5.4.25
	 *
	 * Creates an array from the specified String object
	 * @return {Array} Returns an Array object with elements corresponding to
	 * the characters of this object (converted to a String).
	 *
	 * @example:
	 *
	 * Hello'.toArray() // ['H', 'e', 'l', 'l', 'o'];
	**/
	define.call(String.prototype, 'toArray', function() {
		return this.split('');
	});


	/**
	 * ------------------------------------------------------------
	 *  Array
	 * ------------------------------------------------------------
	**/

	/**
	 * Array.of
	 * @edition ECMA-262 6th Edition, 15.4.3.3
	 *
	 * @param {*} object - Variable number of arguments
	 * @return {Array}
	 *
	 * @example:
	 *
	 * Array.of('a', 'b', 'c'); // ['a', 'b', 'c'];
	**/
	define.call(Array, 'of', function() {
		return __array__.slice.call(arguments);
	});

	/**
	 * Array.from
	 * @edition ECMA-262 6th Edition, 15.4.3.4
	 *
	 * @param {Object} object - array-like object.
	 * Generic Array-like objects has indexed access and a valid length property,
	 * but none of the array methods.
	 * @return {Array}
	 *
	 * @example:
	 *
	 * 1.
	 * function array () {
	 *   return Array.from(arguments);
	 * }
	 *
	 * array(1,2,3); // [1, 2, 3];
	 *
	 * 2.
	 * Array.from(document.body).forEach(function(item) {
	 *    return item;
	 * });
	 *
	 * 3.
	 * Array.from('foo'); // ['f', 'o', 'o'];
	 *
	 * Array.from('foo', funtion(value, index, object) {
	 *     console.log(value) // ['f', 'o', 'o'];
	 * });
	**/
	define.call(Array, 'from', function(object, callback, context)
	{
		if (!Object(object).length)
			return [];

		return __array__.map.call(object, typeof callback == 'function' ? callback : function(item) {
			return item;
		}, context);
	});


	/*
	 * ------------------------------------------------------------
	 *  Object
	 * ------------------------------------------------------------
	 */


	/**
	 * Object.isObject
	 * @param {Object}
	 * @return {Boolean}
	 * @edition ECMA-262 6th Edition, 15.2.3.15
	 *
	 * @example:
	 *
	 * Object.isObject({}); // true
	**/
	define.call(Object, 'isObject', function(object) {
		return __object__.toString.call(object) === '[object Object]';
	});


	/**
	 * Object.getOwnPropertyKeys
	 * @edition ECMA-262 6th Edition, 15.2.3.15
	 *
	 * @param {Object} - object
	 * @return {Array}
	 *
	**/
	define.call(Object, 'getOwnPropertyKeys', function(object)
	{
		return Object.keys(object);
	});

	/**
	 * Object.is
	 * The internal comparison abstract operation SameValue(x, y),
	 * where x and y are ECMAScript language values, produces true or false (ECMAScript 5 9.12).
	 * @edition ECMA-262 6th Edition, 15.2.3.16
	 *
	 * @param {*} - first generic value for egal comparison
	 * @param {*} - second generic value for egal comparison
	 * @return {Boolean}
	 *
	 * @example:
	 *
	 * Object.is(0,-0)     // false
	 * Object.is('0', 0)   // false
	 * Object.is(0, 0)     // true
	 * Object.is(NaN, NaN) // true
	**/
	define.call(Object, 'is', function(x, y)
	{
		// 0 === -0, NaN !== NaN, 0 = false, etc.
		if (x === y)
			return x !== 0 || 1 / x === 1 / y;

		// object !== object ([] !== [], {} !== {}, etc.)
		return x !== x && y !== y;
	});

	/**
	 * Object.assign
	 * @edition ECMA-262 6th Edition, 15.2.3.17
	 *
	 * @param {Object} - target, source
	 * @return {Object}
	 *
	**/
	define.call(Object, 'assign', function(target, source)
	{
		var keys = Object.keys(source);

		keys.forEach(function(key) {
			target[key] = source[key];
		}, target);

		return target;
	});

	/**
	 * Object.mixin
	 * @edition ECMA-262 6th Edition, 15.2.3.18
	 *
	 * @param {Object} - target, source
	 * @return {Object}
	 *
	**/
	define.call(Object, 'mixin', function(target, source)
	{
		var properties = Object.getOwnPropertyNames(source);

		properties.forEach(function(property) {
			Object.defineProperty(target, property,
				Object.getOwnPropertyDescriptor(source, property));
		}, target);

		return target;
	});


	/**
	 * ------------------------------------------------------------
	 *  Number
	 * ------------------------------------------------------------
	**/


	/**
	 * Number.EPSILON
	 * The value of Number.EPSILON is the difference between 1 and the smallest value
	 * greater than 1 that is representable as a Number value, which
	 * is approximately 2.2204460492503130808472633361816 x10-16
	 * @edition ECMA-262 6th Edition, 15.7.3.7
	 *
	 * @example:
	 *
	 * Number.EPSILON // 2.220446049250313e-16
	**/
	define.call(Number, 'EPSILON', null, {
		value: 2.220446049250313e-16,
		configurable: false,
		enumerable:   false,
		writable:     false
	});


	/**
	 * Number.MAX_INTEGER
	 * The value of Number.MAX_INTEGER is the largest integer value that
	 * can be represented as a Number value without losing precision, which is 9007199254740991
	 * @edition ECMA-262 6th Edition, 15.7.3.7
	 *
	 * @example:
	 *
	 * Number.MAX_INTEGER // 9007199254740991
	**/
	define.call(Number, 'MAX_INTEGER', null, {
		value: 9007199254740991,
		configurable: false,
		enumerable:   false,
		writable:     false
	});


	/**
	 * Number.parseInt
	 * Produces an integer value dictated by interpretation of the contents of the string
	 * argument according to the specified radix. Leading white space in string is ignored.
	 * If radix is undefined or 0,
	 * it is assumed to be 10 except when the number begins with the character pairs 0x or 0X,
	 * in which case a radix of 16 is assumed. If radix is 16, the number may also optionally
	 * begin with the character pairs 0x or 0X.
	 * @edition ECMA-262 6th Edition, 15.7.3.8
	 *
	 * @param {String} - value
	 * @param {Number} - radix
	 * The radix parameter is used to specify which numeral system to be used,
	 * for example, a radix of 16 (hexadecimal) indicates that the number in the string
	 * should be parsed from a hexadecimal number to a decimal number.
	 * @return {Number} Parses a string or integer and returns an integer.
	 *
	 * @example:
	 *
	 * Number.parseInt(0xF, 16) // 21
	**/
	define.call(Number, 'parseInt', function(value, radix) {
		return __global__.parseInt.call(null, value, radix | 0 || 10);
	});


	/**
	 * Number.parseFloat
	 * @edition ECMA-262 6th Edition, 15.7.3.9
	 *
	 * @param {String} - value
	 * @return {Number} Parses a string or integer and returns a floating point number.
	 *
	 * @example:
	 *
	 * Number.parseFloat('1px') // 1
	**/
	define.call(Number, 'parseFloat', function(value) {
		return __global__.parseFloat(value);
	});

	/**
	 * Number.isNaN
	 * @edition ECMA-262 6th Edition, 15.7.3.10
	 *
	 * @param {Number} - value
	 * @return {Boolean} Returns true if the supplied number is NaN, false otherwise;
	 *
	 * @example:
	 *
	 * Number.isNaN(NaN) // true
	 * Number.isNaN(1)   // false
	**/
	define.call(Number, 'isNaN', function(value) {
		return typeof value === 'number' && __global__.isNaN(value);
	});


	/**
	 * Number.isFinite
	 * @edition ECMA-262 6th Edition, 15.7.3.11
	 *
	 * @param {Number} - value
	 * @return {Boolean} Returns false if the supplied number is NaN, Infinity or -Infinity;
	 *
	 * @example:
	 *
	 * Number.isFinite(NaN) // false
	 * Number.isFinite(0)   // true
	**/
	define.call(Number, 'isFinite', function(value) {
		return typeof value === 'number' && __global__.isFinite(value);
	});


	/**
	 * Number.isInteger
	 * Add a toInteger property be to the Number constructor, for converting values to IEEE-754
	 * double precision integers, exactly as ECMA-262’s ToInteger internal method.
	 * @edition ECMA-262 6th Edition, 15.7.3.12
	 *
	 * @param {Number} - value
	 * @requires Number.MAX_INTEGER
	 * @return {Boolean}
	 *
	 * @example:
	 *
	 * Number.isInteger(NaN) // false
	 * Number.isFinite(1)    // true
	 * Number.isFinite('1')  // false

	**/
	define.call(Number, 'isInteger', function(value)
	{
		return typeof value === 'number' && __global__.isFinite(value) &&
		value > -Number.MAX_INTEGER && value < Number.MAX_INTEGER && Math.floor(value) === value;
	});


	/**
	 * Number.toInteger
	 * @edition ECMA-262 6th Edition, 15.7.3.13
	 *
	 * @param {String} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.toInteger(undefined) // 0
	 * Number.toInteger(null) // 0
	 * Number.toInteger(NaN)  // 0
	 * Number.toInteger(0.1)  // 0
	 * Number.toInteger('0')  // 0
	 * Number.toInteger(0)    // 0
	**/
	define.call(Number, 'toInteger', function(value)
	{
		if (Object.is(value, +Infinity) || Object.is(value, -Infinity) || value === 0)
			return value;

		return value | 0;
	});


	/**
	 * Number.prototype.clz
	 * @edition ECMA-262 6th Edition, 15.7.3.14
	 *
	 * @description
	 * The count leading zeros (clz) operation can be used to efficiently implement normalization,
	 * which encodes an integer as m × 2e, where m has its most significant bit
	 * in a known position (such as the highest position).
	 * This can in turn be used to implement Newton-Raphson division, perform integer
	 * to floating point conversion in software, and other applications.
	 * Count leading zeros (clz) can be used to compute the 32-bit predicate "x=y" (zero if true, one if false)
	 * via the identity (x-y).clz() >> 5, where ">>" is unsigned right shift.
	 * It can be used to perform more sophisticated bit operations like finding the first string of n 1 bits.
	 * The expression 16 − (x − 1).clz() / 2 is an effective initial guess for computing
	 * the square root of a 32-bit integer using Newton's method.
	 * It can also efficiently generate exponentially distributed integers by taking
	 * the clz of uniformly random integers.
	 *
	 * @return {Number} Count leading zeroes operation;
	 * @requires Number.isFinite
	 *
	 * @example:
	 *
	 * 00000000000000001000000000001000.clz(); // 22
	**/
	define.call(Number.prototype, 'clz', function()
	{
		var value = Number(this),
			bits = 32;

		if (!value || !Number.isFinite(value))
			return bits;

		var offset = [0xFFFF0000, 0xFF000000, 0xF0000000, 0xC0000000, 0x80000000],
			count = 0, i = 0;

		while (bits >>= 1) {
			if ((value & offset[i++]) == 0) {
				count += bits;
				value <<= bits;
			}
		}

		return count;
	});


	/**
	 * ------------------------------------------------------------
	 *  Math
	 * ------------------------------------------------------------
	**/


	/**
	 * Math.log10
	 * Returns an implementation-dependent approximation to the base 10 logarithm of <value>
	 *
	 * @edition ECMA-262 6th Edition, 15.8.2.19
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.log10(10) // 0.9999999999999999
	**/
	define.call(Math, 'log10', function(value) {
		return Math.log(value) * (1 / Math.LN10);
	});


	/**
	 * Math.log2
	 * Returns an implementation-dependent approximation to the base 2 logarithm of <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.20
	 *
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.log2(10) // 3.3219280948873626
	**/
	define.call(Math, 'log2', function(value) {
		return Math.log(value) * (1 / Math.LN2);
	});


	/**
	 * Math.log1p
	 * Returns an implementation-dependent approximation to the natural logarithm of 1 + <value>.
	 * The result is computed in a way that is accurate even when the value of <value> is close to zero.
	 *
	 * @edition ECMA-262 6th Edition, 15.8.2.21
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.log1p(10) // 2.3978952727983707
	**/
	define.call(Math, 'log1p', function(value) {
		return (value > -1.0e-8 && value < 1.0e-8) ? (value - value * value / 2) : Math.log(1 + value);
	});


	/**
	 * Math. expm1
	 * Returns an implementation-dependent approximation to subtracting 1
	 * from the exponential function of <value> The result is computed in a way
	 * that is accurate even when the <value> of value is close 0.
	 * @edition ECMA-262 6th Edition, 15.8.2.22
	 *
	 * @param {Number} - value
	 * @requires Object.is
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.expm1(10) // 22025.465794806718
	**/
	define.call(Math, 'expm1', function(value)
	{
		if (Object.is(value, -0))
			return -0;

		return value > -1.0e-6 && value < 1.0e-6 ? value + value * value / 2 : Math.exp(value) - 1;
	});


	/**
	 * Math.cosh
	 * Returns an implementation-dependent approximation to the hyperbolic cosine of <value>
	 *
	 * @edition ECMA-262 6th Edition, 15.8.2.23
	 * @param {Number} - value
	 * @requires Object.is
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.cosh(10) // 11013.232920103324
	**/
	define.call(Math, 'cosh', function(value)
	{
		if (Object.is(value, -Infinity) || value === 0)
			return value;

		return (Math.exp(value) + Math.exp(-value)) / 2;
	});


	/**
	 * Math.sinh
	 * @edition ECMA-262 6th Edition, 15.8.2.24
	 *
	 * Returns an implementation-dependent approximation to the hyperbolic sine of <value>
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.sinh(10) // 11013.232874703393
	**/
	define.call(Math, 'sinh', function(value)
	{
		if (Object.is(value, -Infinity) || value === 0)
			return value;

		return (Math.exp(value) - Math.exp(-value)) / 2;
	});


	/**
	 * Math.tanh
	 * Returns an implementation-dependent approximation to the hyperbolic tangent of <value>
	 *
	 * @edition ECMA-262 6th Edition, 15.8.2.25
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.tanh(10) // 0.9999999958776926
	**/
	define.call(Math, 'tanh', function(value)
	{
		if (Object.is(value, +Infinity))
			return +1;

		else if (Object.is(value, -Infinity))
			return -1;

		return value === 0 ? value : (Math.exp(value) - Math.exp(-value)) / (Math.exp(value) + Math.exp(-value));
	});


	/**
	 * Math.acosh
	 * Returns an implementation-dependent approximation to the inverse hyperbolic cosine of <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.26
	 *
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.acosh(10) // 2.993222846126381
	**/
	define.call(Math, 'acosh', function(value) {
		return Math.log(value + Math.sqrt(value * value - 1));
	});


	/**
	 * Math.asinh
	 * Returns an implementation-dependent approximation to the inverse hyperbolic sine of <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.27

	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.asinh(10) // 2.99822295029797
	**/
	define.call(Math, 'asinh', function(value)
	{
		if (!Number.isFinite(value) || value === 0)
			return value;

		return Math.log(value + Math.sqrt(value * value + 1));
	});


	/**
	 * Math.atanh
	 * Returns an implementation-dependent approximation to the inverse hyperbolic tangent of <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.28
	 *
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Math.atanh(-1) // -Infinity
	**/
	define.call(Math, 'atanh', function(value) {
		return value === 0 ? value : 0.5 * Math.log((1 + value) / (1 - value));
	});


	/**
	 * Math.hypot
	 * Given two or three arguments, hypot returns an implementation-dependent approximation
	 * of the square root of the sum of squares of its arguments.
	 * @edition ECMA-262 6th Edition, 15.8.2.29
	 *
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Math.hypot(1, 1) // 1.4142135623730951
	**/
	define.call(Math, 'hypot', function(x, y) {

		if (!Number.isFinite(x))
			return x;

		if (!Number.isFinite(y))
			return y;

		return Math.sqrt(x * x + y * y);
	});


	/**
	 * Math.trunc
	 * Returns the integral part of the number <value>, removing any fractional digits.
	 * If <value> is already an integer, the result is <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.30
	 *
	 * @param {Number} - value
	 * @requires Number.isFinite
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Math.trunc(1.1) // 1
	**/
	define.call(Math, 'trunc', function(value) {
		return value === 0 ? value : !Number.isFinite(value) ? value : value | 0;
	});


	/**
	 * Math.sign
	 * Returns the sign of the <value>, indicating whether <value> is positive, negative or zero
	 * @edition ECMA-262 6th Edition, 15.8.2.31
	 *
	 * @param {Number} value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Math.sign(-10); // 1
	**/
	define.call(Math, 'sign', function(value) {
		if (value === 0 /* +0, -0 */ || __global__.isNaN(value))
			return value;

		return value < 0 ? -1 : 1;
	});


	/**
	 * Math.cbrt
	 * Returns an implementation-dependent approximation to the cube root of <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.32
	 *
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Math.cbrt(10); // 2.154434690031884
	**/
	define.call(Math, 'cbrt', function(value)
	{
		if (value === 0)
			return value;

		return value > 0 ? Math.exp(Math.log(value) / 3) : -Math.exp(Math.log(-value) / 3);
	});


	/**
	 * ------------------------------------------------------------
	 *  Collections (data structures)
	 * ------------------------------------------------------------
	**/

	/**
	 * @private
	 * @param {Array} array
	 * @param {*} value
	 * @requires Object.is
	 * @return {Number}
	 **/
	var __find__ =  function(array, value) {
		var i = array.length >>> 0;

		while (i--)
			if (i in array && Object.is(array[i], value))
				return i;
		return -1;
	};

	/**
	 * Map
	 * @edition ECMA-262 6th Edition, 5.14
	 *
	 * NOTE: Need more compatible with Rev 14!
	 *
	 * @class
	 * @memberOf global
	 *
	 * @description
	 * Map objects are simple key/value maps. Any value (both objects and primitive values)
	 * may be used as either a key or a value. Key equality is based on the "same-value"
	 * algorithm: NaN is considered the same as NaN (even though NaN !== NaN), -0 and +0
	 * are considered distinct (even though -0 === +0), and all other values are considered
	 * equal according to the semantics of the === operator.
	 *
	 * @example:
	 *
	 * var map = new Map();
	 *
	 * // Setting the values
	 * map.set(-0,  0);
	 * map.set(+0,  1);
	 * map.set('b', 2);
	 * map.set('a', 3);
	 * map.set('a', 4);
	 * map.set(Array, 5);
	 * map.set([], 6);
	 * map.set(NaN, 7);
	 * map.set(function() {}, 8);
	 *
	 * // Getting the values
	 * map.get(-0);  // 0
	 * map.get(+0);  // 1
	 * map.get('b'); // 2
	 * map.get('a'); // 4
	 * map.get(Array); // 5
	 * map.get([]);  // undefined
	 * map.get(NaN); // 7
	 * map.get(function() {}); // undefined
	 *
	 * // Removes any value associated to the key
	 * map.delete('a'); // true
	 *
	 * // Check the keys
	 * map.has(-0); // true
	 *
	 * // Getting the number of pairs in Map
	 * map.size(); // 7
	 *
	 * // Iterating over values stored in Set
	 * map.__iterator__(function(key, value) {
	 *    console.log(key, value);
	 * });
	**/
	define.call(__global__, 'Map', function()
	{
		if (!(this instanceof Map))
			return new Map;

		var index = 0;

		/** @static */
		define.call(this, {
			keys:   [],
			values: []
		});

		/**
		 * @lends Map.prototype
		 * @constructs
		**/
		define.call(Map.prototype, {
			/**
			 * Map.get
			 * Returns the value associated to the key, or undefined if there is none.
			 * @param {*}
			 * @return {*}
			 */
			get: function(key)
			{
				if ((index = __find__(this.keys, key)) !== -1)
					return this.values[index];
			},

			/**
			 * Map.set
			 * Sets the value for the key in Map. Returns undefined.
			 * @param {*} key
			 * @param {*} value
			 * @return {void}
			 */
			set: function(key, value)
			{
				if ((index = __find__(this.keys, key)) === -1) {
					this.keys.push(key);
					this.values.push(value);
				}
				else
					this.values[index] = value;
			},

			/**
			 * Map.has
			 * Returns a boolean asserting whether a value has been associated to the key in Map or not
			 * @param {*} key
			 * @return {Boolean}
			 */
			has: function(key) {
				return __find__(this.keys, key) !== -1;
			},

			/**
			 * Map.clear
			 * @return {void}
			 */
			clear: function() {
				this.values.length = 0;
				this.keys.length = 0;
			},

			/**
			 * Map.delete
			 * Removes any value associated to the key. After such a call, myMap.has(key) will return false.
			 * @param {*} key
			 * @return {Boolean}
			 */
			'delete': function(key)
			{
				if ((index = __find__(this.keys, key)) === -1)
					return false;

				this.keys.splice(index, 1);
				this.values.splice(index, 1);

				return true;
			},

			/**
			 * Map.size
			 * Returns the number of key/value pairs in Map.
			 * @return {Number}
			 */
			size: function() {
				return this.keys.length >>> 0;
			},

			/**
			 * Map.__iterator__ ( Undocumented feature )
			 * Allow for iterating over Maps and enumerating their keys
			 * @param {Function} callback - is invoked with two arguments (the element key and value)
			 * @param {Object} [ context ] - Object to use as <this> when executing callback
			 * @return {void}
			 */
			__iterator__: function(callback, context)
			{
				for (var i = 0, length = this.size(); i < length; i++) {
					if (i in this.keys && i in this.values)
						if (callback.call(context, this.keys[i], this.values[i]) === false)
							break;
				}
			}
		});
	});


	/**
	 * Set
	 * @edition ECMA-262 6th Edition, 5.16
	 * NOTE: Need more compatible with Rev 14!
	 *
	 * @class
	 * @memberOf global
	 *
	 * @description
	 * Set objects let you store unique values of any type, whether primitive values or object references.
	 * Values equality is not based on the same algorithm as the one used in the === operator.
	 * Specifically, for Sets, +0 (which is strictly equal to -0) and -0 are different values.
	 * NaN can also be stored in a Set.
	 *
	 * @example:
	 *
	 * var set = new Set();
	 *
	 * // Setting the values
	 *
	 * set.add(-0);
	 * set.add(+0);
	 * set.add('b');
	 * set.add('a');
	 * set.add('a');
	 * set.add(Array);
	 * set.add([]);
	 * set.add(function() {});
	 * set.add(NaN);
	 *
	 * // Check the values
	 * set.has(-0);  // true
	 * set.has(+0);  // true
	 * set.has('b'); // true
	 * set.has('a'); // true
	 * set.has(Array); // true
	 * set.has([]);  // false
	 * set.has(NaN); // true
	 * set.has(function() {}); // false
	 *
	 * // Removes the value
	 * map.delete(-0); // true
	 *
	 * // Getting the number of values in Set
	 * set.size(); // 7
	 *
	 * // Iterating over values stored in Set
	 * set.__iterator__(function(value) {
	 *    console.log(value);
	 * });
	**/
	define.call(__global__, 'Set', function()
	{
		if (!(this instanceof Set))
			return new Set;

		var index = 0;

		/** @static */
		define.call(this, {
			values: []
		});

		/**
		 * @lends Set.prototype
		 * @constructs
		**/
		define.call(Set.prototype, {
			/**
			 * Set.add
			 * Adds the value to mySet. Returns undefined.
			 * @param {*} value
			 * @return {void}
			 */
			add: function(value) {
				if ((index = __find__(this.values, value)) === -1)
					this.values.push(value);
				else
					this.values[index] = value;
			},

			/**
			 * Set.has
			 * Returns a boolean asserting whether the value has been added to Set or not
			 * @param {*} value
			 * @return {Boolean}
			 */
			has: function(value) {
				return __find__(this.values, value) !== -1;
			},

			/**
			 * Set.clear
			 * @return {void}
			 */
			clear: function() {
				this.values.length = 0;
			},

			/**
			 * Set.delete
			 * Sets the value for the key in mySet. Returns undefined.
			 * @param {*} key
			 * @return {void}
			 */
			'delete': function(value) {
				if ((index = __find__(this.values, value)) === -1)
					return false;

				this.values.splice(index, 1);

				return true;
			},

			/**
			 * Set.size()
			 * Returns the number of values in Set.
			 * @return {Number}
			 */
			size: function() {
				return this.values.length >>> 0;
			},

			/**
			 * Set.__iterator__ ( Undocumented feature )
			 * Allow for iterating over values stored in Set
			 * @param {Function} callback - is invoked with one argument (the element value)
			 * @param {Object} [ context ] - Object to use as <this> when executing callback
			 * @return {void}
			 */
			__iterator__: function(callback, context) {
				for (var i = 0, length = this.size(); i < length; i++) {
					if (i in this.values)
						callback.call(context, this.values[i]);
				}
			}
		});
	});
}
(Object.prototype, Array.prototype, function() {
	return this;
}());

(function () {
    var AllritesAnalytics = easejs.Class('Stack', {
        'private _playerContainerClass': '.allrites-player',
        'private video_id': null,
        'private _config': {
            token: null
        },

        __construct: function (config) {
            this._config = config;

            this.initSetup();
            //this._setupMUX();
        },

        'public initSetup': function () {
            var self = this;
            jQuery(document.querySelector(this._playerContainerClass)).on('play', function (e) {
                self.video_id = jQuery(this).data('id');
                self.getVideo(jQuery(this).data('id'), this);
            });
        },

        'public getVideo': function (video_id, vidElement) {
            var self = this;
            jQuery.post("https://staging.allrites.com/api/caas/video", {
                token: this._config.token,
                video_id: video_id
            }, function (result) {
                var video = result.data.videoData;
                self._setupMUX(video, vidElement);
            });
        },

        'private _setupMUX': function (video, vidElement) {
            if (typeof mux !== 'undefined') {
                mux.monitor('.' + $(vidElement).attr('class'), {
                    debug: true,
                    data: {
                        env_key: '0civgb34aplvgjb5reudb4tbe', // required

                        player_name: 'Embed Player', // ex: 'My Main Player'
                        player_version: '1.0.0', // ex: '1.0.0'

                        // Video Metadata (cleared with 'videochange' event)
                        video_id: video.id, // ex: 'abcd123'
                        video_title: video.title, // ex: 'My Great Video'
                        video_duration: video.duration != null ? video.duration * 60000 : 0, // in milliseconds, ex: 120000
                        video_stream_type: 'on-demand', // 'live' or 'on-demand'
                    }
                });
            }
        },

    });
    window.AllritesAnalytics = AllritesAnalytics;
})();