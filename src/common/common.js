/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var saTrackCompat = __webpack_require__(1);
	var bridge_1 = __webpack_require__(5);
	var OFO_ENV = __webpack_require__(4);
	var getOfoToken = __webpack_require__(7);
	__webpack_require__(9);
	var sendDebug = __webpack_require__(6);
	__webpack_require__(10);
	var tip = __webpack_require__(11);
	__webpack_require__(12);
	var fastclick_1 = __webpack_require__(14);
	var Cookies = __webpack_require__(8);
	window['OFO_ENV'] = OFO_ENV;
	window['ofoResponseProxy'] = bridge_1.ofoResponseProxy;
	window['ofoHandleDeepLink'] = bridge_1.handleLink;
	window['sendDebug'] = sendDebug;
	window['getOfoToken'] = getOfoToken;
	window['tip'] = tip;
	window['saTrackCompat'] = saTrackCompat;
	window['Cookies'] = Cookies;
	document.addEventListener('DOMContentLoaded', function () {
	    fastclick_1.FastClick.attach(document.body);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var sa = __webpack_require__(2);
	var OFO_ENV = __webpack_require__(4);
	var bridge_1 = __webpack_require__(5);
	var superProps = {};
	var saTrack = function (event, extraKey, extraValue) {
	    var extra = {};
	    extra[extraKey] = extraValue;
	    if (OFO_ENV.ofoAppVersionGte('1.8.8', 11850)) {
	        bridge_1.ofoResponseProxy('trackEvent', [event, extraKey, extraValue]);
	    }
	    else {
	        extra['Source'] = OFO_ENV.sourceForSa;
	        Object.keys(superProps).forEach(function (key) {
	            extra[key] = superProps[key];
	        });
	        sa.track(event, extra);
	    }
	};
	var saTrackCompat = (function (event, extra) {
	    console.warn('Event ' + event + ' dropped. Use new methods instead.');
	});
	saTrackCompat.view = function (event, value) {
	    saTrack(event.trim().replace(/\-/g, '_').replace(/\./g, ''), 'View', value);
	};
	saTrackCompat.click = function (event, value) {
	    saTrack(event.trim().replace(/\-/g, '_').replace(/\./g, ''), 'Click', value);
	};
	saTrackCompat.addGlobal = function (key, value) {
	    superProps[key] = value;
	};
	saTrackCompat.addCid = function (value) {
	    sa.login(value);
	};
	saTrackCompat.ofoTrack = function (url, action, type, channel, flag, cid, subType) {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', '//supportda.ofo.so/' + url + "?action=" + action + "&type=" + type + "&channel=" + channel + "&flag=" + flag + "&cid=" + cid + "&subType=" + subType);
	    xhr.onload = function () {
	        console.log('XHR response', xhr.status, xhr.responseText);
	    };
	    xhr.onerror = function () {
	    };
	    xhr.timeout = 20000; // twenty seconds
	    xhr.send(null);
	};
	if (OFO_ENV.currentEnv === OFO_ENV.ENV.WEBAPP_ITSELF) {
	    window.alert('bridgedSensorAnalytics used improperly!');
	}
	else {
	    if (OFO_ENV.currentEnv === OFO_ENV.ENV.INSIDE_NEW_IOS_APP || OFO_ENV.currentEnv === OFO_ENV.ENV.INSIDE_NEW_ANDROID_APP) {
	        sa.getAppStatus(function (app_info) {
	            sa.identify(app_info.distinct_id);
	            Object.keys(app_info).filter(function (key) { return (key !== 'distinct_id'); }).forEach(function (key) {
	                superProps[key] = app_info[key];
	            });
	            console.log('Initialized app_info with (app) ', superProps);
	            sa.quick('autoTrack');
	        });
	    }
	    else if (OFO_ENV.currentEnv === OFO_ENV.ENV.INSIDE_WEBAPP) {
	        superProps = OFO_ENV.iframingAncestorWhichIsWebApp.getSaInfoForFrameContent(); // overwriting directly
	        console.log('Initialized app_info with (web) ', superProps);
	        sa.quick('autoTrack');
	    }
	}
	module.exports = saTrackCompat;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// https://www.sensorsdata.cn/manual/js_sdk.html#

	module.exports = (function(para) {
	  var n = para.name;
	  window['sensorsDataAnalytic201505'] = n;
	  window[n] = {
	    _q: [],
	    para: para
	  };
	  return window[n];
	})({
	  sdk_url: '/common/sensorsdata.sdk.js',
	  name: 'sa',
	  server_url: 'https://scofo.ofo.so:8443/sa'
	});

	__webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports) {

	try{!function(sd){function app_js_bridge(){function e(e){n=e,_.isJSONString(n)&&(n=JSON.parse(n)),i&&i(n)}function t(){"object"==typeof window.SensorsData_APP_JS_Bridge&&window.SensorsData_APP_JS_Bridge.sensorsdata_call_app&&(n=SensorsData_APP_JS_Bridge.sensorsdata_call_app(),_.isJSONString(n)&&(n=JSON.parse(n)))}function r(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){var e=document.createElement("iframe");e.setAttribute("src","sensorsanalytics://getAppInfo"),document.documentElement.appendChild(e),e.parentNode.removeChild(e),e=null}}var n=null,i=null;window.sensorsdata_app_js_bridge_call_js=function(t){e(t)},sd.getAppStatus=function(e){return r(),t(),e?void(null===n?i=e:e(n)):n}}function start_heatmap(){}if(sd=window[sd],"function"!=typeof sd&&"object"!=typeof sd||sd.has_load_sdk)return!1;sd._t=sd._t||1*new Date,sd.has_load_sdk=!0,"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,n,i,o,s,a=gap,c=t[e];switch(c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(c)){for(o=c.length,r=0;o>r;r+=1)s[r]=str(r,c)||"null";return i=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+a+"]":"["+s.join(",")+"]",gap=a,i}if(rep&&"object"==typeof rep)for(o=rep.length,r=0;o>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],i=str(n,c),i&&s.push(quote(n)+(gap?": ":":")+i));else for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(i=str(n,c),i&&s.push(quote(n)+(gap?": ":":")+i));return i=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+a+"}":"{"+s.join(",")+"}",gap=a,i}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var r,n,i=e[t];if(i&&"object"==typeof i)for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n=walk(i,r),void 0!==n?i[r]=n:delete i[r]);return reviver.call(e,t,i)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();var _=sd._={};sd.para=sd.para||{},sd.para_default={max_referrer_string_length:500,max_string_length:1e3,cross_subdomain:!0,show_log:!0,debug_mode:!1,debug_mode_upload:!1,session_time:0,use_client_time:!1,source_channel:[],vtrack_ignore:{},auto_init:!0};for(var i in sd.para_default)void 0===sd.para[i]&&(sd.para[i]=sd.para_default[i]);/sa\.gif[^\/]*$/.test(sd.para.server_url)||(sd.para.server_url=sd.para.server_url.replace(/\/sa$/,"/sa.gif").replace(/(\/sa)(\?[^\/]+)$/,"/sa.gif$2")),sd.para.debug_mode_url=sd.para.debug_mode_url||sd.para.server_url.replace("sa.gif","debug"),sd.para.noCache===!0?sd.para.noCache="?"+(new Date).getTime():sd.para.noCache="";var detector={};!function(){function e(e){return Object.prototype.toString.call(e)}function t(t){return"[object Object]"===e(t)}function r(t){return"[object Function]"===e(t)}function n(e,t){for(var r=0,n=e.length;n>r&&t.call(e,e[r],r)!==!1;r++);}function i(e){if(!_.test(e))return null;var t,r,n,i,o;if(-1!==e.indexOf("trident/")&&(t=/\btrident\/([0-9.]+)/.exec(e),t&&t.length>=2)){n=t[1];var s=t[1].split(".");s[0]=parseInt(s[0],10)+4,o=s.join(".")}t=_.exec(e),i=t[1];var a=t[1].split(".");return"undefined"==typeof o&&(o=i),a[0]=parseInt(a[0],10)-4,r=a.join("."),"undefined"==typeof n&&(n=r),{browserVersion:o,browserMode:i,engineVersion:n,engineMode:r,compatible:n!==r}}function o(e){if(d)try{var t=d.twGetRunPath.toLowerCase(),r=d.twGetSecurityID(u),n=d.twGetVersion(r);if(t&&-1===t.indexOf(e))return!1;if(n)return{version:n}}catch(i){}}function s(n,i,o){var s=r(i)?i.call(null,o):i;if(!s)return null;var a={name:n,version:c,codename:""},u=e(s);if(s===!0)return a;if("[object String]"===u){if(-1!==o.indexOf(s))return a}else{if(t(s))return s.hasOwnProperty("version")&&(a.version=s.version),a;if(s.exec){var d=s.exec(o);if(d)return d.length>=2&&d[1]?a.version=d[1].replace(/_/g,"."):a.version=c,a}}}function a(e,t,r,i){var o=S;n(t,function(t){var r=s(t[0],t[1],e);return r?(o=r,!1):void 0}),r.call(i,o.name,o.version)}var c="-1",u=window,d=u.external,f=u.navigator.userAgent||"",l=u.navigator.appVersion||"",p=u.navigator.vendor||"",_=/\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/,g=/\bbb10\b.+?\bversion\/([\d.]+)/,h=/\bblackberry\b.+\bversion\/([\d.]+)/,b=/\bblackberry\d+\/([\d.]+)/,m=[["nokia",function(e){return-1!==e.indexOf("nokia ")?/\bnokia ([0-9]+)?/:/\bnokia([a-z0-9]+)?/}],["samsung",function(e){return-1!==e.indexOf("samsung")?/\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/:/\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/}],["wp",function(e){return-1!==e.indexOf("windows phone ")||-1!==e.indexOf("xblwp")||-1!==e.indexOf("zunewp")||-1!==e.indexOf("windows ce")}],["pc","windows"],["ipad","ipad"],["ipod","ipod"],["iphone",/\biphone\b|\biph(\d)/],["mac","macintosh"],["mi",/\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/],["hongmi",/\bhm[ \-]?([a-z0-9]+)/],["aliyun",/\baliyunos\b(?:[\-](\d+))?/],["meizu",function(e){return e.indexOf("meizu")>=0?/\bmeizu[\/ ]([a-z0-9]+)\b/:/\bm([0-9cx]{1,4})\b/}],["nexus",/\bnexus ([0-9s.]+)/],["huawei",function(e){var t=/\bmediapad (.+?)(?= build\/huaweimediapad\b)/;return-1!==e.indexOf("huawei-huawei")?/\bhuawei\-huawei\-([a-z0-9\-]+)/:t.test(e)?t:/\bhuawei[ _\-]?([a-z0-9]+)/}],["lenovo",function(e){return-1!==e.indexOf("lenovo-lenovo")?/\blenovo\-lenovo[ \-]([a-z0-9]+)/:/\blenovo[ \-]?([a-z0-9]+)/}],["zte",function(e){return/\bzte\-[tu]/.test(e)?/\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/:/\bzte[ _\-]?([a-su-z0-9\+]+)/}],["vivo",/\bvivo(?: ([a-z0-9]+))?/],["htc",function(e){return/\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e)?/\bhtc[ _\-]?([a-z0-9 ]+(?= build))/:/\bhtc[ _\-]?([a-z0-9 ]+)/}],["oppo",/\boppo[_]([a-z0-9]+)/],["konka",/\bkonka[_\-]([a-z0-9]+)/],["sonyericsson",/\bmt([a-z0-9]+)/],["coolpad",/\bcoolpad[_ ]?([a-z0-9]+)/],["lg",/\blg[\-]([a-z0-9]+)/],["android",/\bandroid\b|\badr\b/],["blackberry",function(e){return e.indexOf("blackberry")>=0?/\bblackberry\s?(\d+)/:"bb10"}]],v=[["wp",function(e){return-1!==e.indexOf("windows phone ")?/\bwindows phone (?:os )?([0-9.]+)/:-1!==e.indexOf("xblwp")?/\bxblwp([0-9.]+)/:-1!==e.indexOf("zunewp")?/\bzunewp([0-9.]+)/:"windows phone"}],["windows",/\bwindows nt ([0-9.]+)/],["macosx",/\bmac os x ([0-9._]+)/],["iOS",function(e){return/\bcpu(?: iphone)? os /.test(e)?/\bcpu(?: iphone)? os ([0-9._]+)/:-1!==e.indexOf("iph os ")?/\biph os ([0-9_]+)/:/\bios\b/}],["yunos",/\baliyunos ([0-9.]+)/],["Android",function(e){return e.indexOf("android")>=0?/\bandroid[ \/-]?([0-9.x]+)?/:e.indexOf("adr")>=0?e.indexOf("mqqbrowser")>=0?/\badr[ ]\(linux; u; ([0-9.]+)?/:/\badr(?:[ ]([0-9.]+))?/:"android"}],["chromeos",/\bcros i686 ([0-9.]+)/],["linux","linux"],["windowsce",/\bwindows ce(?: ([0-9.]+))?/],["symbian",/\bsymbian(?:os)?\/([0-9.]+)/],["blackberry",function(e){var t=e.match(g)||e.match(h)||e.match(b);return t?{version:t[1]}:"blackberry"}]],y=[["edgehtml",/edge\/([0-9.]+)/],["trident",_],["blink",function(){return"chrome"in u&&"CSS"in u&&/\bapplewebkit[\/]?([0-9.+]+)/}],["webkit",/\bapplewebkit[\/]?([0-9.+]+)/],["gecko",function(e){var t;return(t=e.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/))?{version:t[1]+"."+t[2]}:void 0}],["presto",/\bpresto\/([0-9.]+)/],["androidwebkit",/\bandroidwebkit\/([0-9.]+)/],["coolpadwebkit",/\bcoolpadwebkit\/([0-9.]+)/],["u2",/\bu2\/([0-9.]+)/],["u3",/\bu3\/([0-9.]+)/]],w=[["edge",/edge\/([0-9.]+)/],["sogou",function(e){return e.indexOf("sogoumobilebrowser")>=0?/sogoumobilebrowser\/([0-9.]+)/:e.indexOf("sogoumse")>=0?!0:/ se ([0-9.x]+)/}],["theworld",function(){var e=o("theworld");return"undefined"!=typeof e?e:"theworld"}],["360",function(e){var t=o("360se");return"undefined"!=typeof t?t:-1!==e.indexOf("360 aphone browser")?/\b360 aphone browser \(([^\)]+)\)/:/\b360(?:se|ee|chrome|browser)\b/}],["maxthon",function(){try{if(d&&(d.mxVersion||d.max_version))return{version:d.mxVersion||d.max_version}}catch(e){}return/\b(?:maxthon|mxbrowser)(?:[ \/]([0-9.]+))?/}],["micromessenger",/\bmicromessenger\/([\d.]+)/],["qq",/\bm?qqbrowser\/([0-9.]+)/],["green","greenbrowser"],["tt",/\btencenttraveler ([0-9.]+)/],["liebao",function(e){if(e.indexOf("liebaofast")>=0)return/\bliebaofast\/([0-9.]+)/;if(-1===e.indexOf("lbbrowser"))return!1;var t;try{d&&d.LiebaoGetVersion&&(t=d.LiebaoGetVersion())}catch(r){}return{version:t||c}}],["tao",/\btaobrowser\/([0-9.]+)/],["coolnovo",/\bcoolnovo\/([0-9.]+)/],["saayaa","saayaa"],["baidu",/\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/],["ie",_],["mi",/\bmiuibrowser\/([0-9.]+)/],["opera",function(e){var t=/\bopera.+version\/([0-9.ab]+)/,r=/\bopr\/([0-9.]+)/;return t.test(e)?t:r}],["oupeng",/\boupeng\/([0-9.]+)/],["yandex",/yabrowser\/([0-9.]+)/],["ali-ap",function(e){return e.indexOf("aliapp")>0?/\baliapp\(ap\/([0-9.]+)\)/:/\balipayclient\/([0-9.]+)\b/}],["ali-ap-pd",/\baliapp\(ap-pd\/([0-9.]+)\)/],["ali-am",/\baliapp\(am\/([0-9.]+)\)/],["ali-tb",/\baliapp\(tb\/([0-9.]+)\)/],["ali-tb-pd",/\baliapp\(tb-pd\/([0-9.]+)\)/],["ali-tm",/\baliapp\(tm\/([0-9.]+)\)/],["ali-tm-pd",/\baliapp\(tm-pd\/([0-9.]+)\)/],["uc",function(e){return e.indexOf("ucbrowser/")>=0?/\bucbrowser\/([0-9.]+)/:e.indexOf("ubrowser/")>=0?/\bubrowser\/([0-9.]+)/:/\buc\/[0-9]/.test(e)?/\buc\/([0-9.]+)/:e.indexOf("ucweb")>=0?/\bucweb([0-9.]+)?/:/\b(?:ucbrowser|uc)\b/}],["chrome",/ (?:chrome|crios|crmo)\/([0-9.]+)/],["android",function(e){return-1!==e.indexOf("android")?/\bversion\/([0-9.]+(?: beta)?)/:void 0}],["blackberry",function(e){var t=e.match(g)||e.match(h)||e.match(b);return t?{version:t[1]}:"blackberry"}],["safari",/\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//],["webview",/\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/],["firefox",/\bfirefox\/([0-9.ab]+)/],["nokia",/\bnokiabrowser\/([0-9.]+)/]],S={name:"na",version:c},k=function(e){e=(e||"").toLowerCase();var t={};a(e,m,function(e,r){var n=parseFloat(r);t.device={name:e,version:n,fullVersion:r},t.device[e]=n},t),a(e,v,function(e,r){var n=parseFloat(r);t.os={name:e,version:n,fullVersion:r},t.os[e]=n},t);var r=i(e);return a(e,y,function(e,n){var i=n;r&&(n=r.engineVersion||r.engineMode,i=r.engineMode);var o=parseFloat(n);t.engine={name:e,version:o,fullVersion:n,mode:parseFloat(i),fullMode:i,compatible:r?r.compatible:!1},t.engine[e]=o},t),a(e,w,function(e,n){var i=n;r&&("ie"===e&&(n=r.browserVersion),i=r.browserMode);var o=parseFloat(n);t.browser={name:e,version:o,fullVersion:n,mode:parseFloat(i),fullMode:i,compatible:r?r.compatible:!1},t.browser[e]=o},t),t};detector=k(f+" "+l+" "+p)}();var ArrayProto=Array.prototype,FuncProto=Function.prototype,ObjProto=Object.prototype,slice=ArrayProto.slice,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty,LIB_VERSION="1.6.18";sd.lib_version=LIB_VERSION;var error_msg=[],is_first_visitor=!1,just_test_distinctid=0,just_test_distinctid_2=0,just_test_distinctid_detail=0,just_test_distinctid_detail2=0,source_channel_standard="utm_source utm_medium utm_campaign utm_content utm_term",logger="object"==typeof logger?logger:{};logger.info=function(){if(!sd.para.show_log)return!1;if("object"==typeof console&&console.log)try{return console.log.apply(console,arguments)}catch(e){console.log(arguments[0])}},function(){var e=(FuncProto.bind,ArrayProto.forEach),t=ArrayProto.indexOf,r=Array.isArray,n={},i=_.each=function(t,r,i){if(null==t)return!1;if(e&&t.forEach===e)t.forEach(r,i);else if(t.length===+t.length){for(var o=0,s=t.length;s>o;o++)if(o in t&&r.call(i,t[o],o,t)===n)return!1}else for(var a in t)if(hasOwnProperty.call(t,a)&&r.call(i,t[a],a,t)===n)return!1};_.logger=logger,_.extend=function(e){return i(slice.call(arguments,1),function(t){for(var r in t)void 0!==t[r]&&(e[r]=t[r])}),e},_.extend2Lev=function(e){return i(slice.call(arguments,1),function(t){for(var r in t)void 0!==t[r]&&(_.isObject(t[r])&&_.isObject(e[r])?_.extend(e[r],t[r]):e[r]=t[r])}),e},_.coverExtend=function(e){return i(slice.call(arguments,1),function(t){for(var r in t)void 0!==t[r]&&void 0===e[r]&&(e[r]=t[r])}),e},_.isArray=r||function(e){return"[object Array]"===toString.call(e)},_.isFunction=function(e){try{return/^\s*\bfunction\b/.test(e)}catch(t){return!1}},_.isArguments=function(e){return!(!e||!hasOwnProperty.call(e,"callee"))},_.toArray=function(e){return e?e.toArray?e.toArray():_.isArray(e)?slice.call(e):_.isArguments(e)?slice.call(e):_.values(e):[]},_.values=function(e){var t=[];return null==e?t:(i(e,function(e){t[t.length]=e}),t)},_.include=function(e,r){var o=!1;return null==e?o:t&&e.indexOf===t?-1!=e.indexOf(r):(i(e,function(e){return o||(o=e===r)?n:void 0}),o)}}(),_.inherit=function(e,t){return e.prototype=new t,e.prototype.constructor=e,e.superclass=t.prototype,e},_.trim=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},_.isObject=function(e){return"[object Object]"==toString.call(e)&&null!=e},_.isEmptyObject=function(e){if(_.isObject(e)){for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}return!1},_.isUndefined=function(e){return void 0===e},_.isString=function(e){return"[object String]"==toString.call(e)},_.isDate=function(e){return"[object Date]"==toString.call(e)},_.isBoolean=function(e){return"[object Boolean]"==toString.call(e)},_.isNumber=function(e){return"[object Number]"==toString.call(e)&&/[\d\.]+/.test(String(e))},_.isJSONString=function(e){try{JSON.parse(e)}catch(t){return!1}return!0},_.decodeURIComponent=function(e){var t="";try{t=decodeURIComponent(e)}catch(r){t=e}return t},_.encodeDates=function(e){return _.each(e,function(t,r){_.isDate(t)?e[r]=_.formatDate(t):_.isObject(t)&&(e[r]=_.encodeDates(t))}),e},_.formatDate=function(e){function t(e){return 10>e?"0"+e:e}return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+t(e.getMilliseconds())},_.searchObjDate=function(e){_.isObject(e)&&_.each(e,function(t,r){_.isObject(t)?_.searchObjDate(e[r]):_.isDate(t)&&(e[r]=_.formatDate(t))})},_.formatString=function(e){return e.length>sd.para.max_string_length?(logger.info("字符串长度超过限制，已经做截取--"+e),e.slice(0,sd.para.max_string_length)):e},_.searchObjString=function(e){_.isObject(e)&&_.each(e,function(t,r){_.isObject(t)?_.searchObjString(e[r]):_.isString(t)&&(e[r]=_.formatString(t))})},_.unique=function(e){for(var t,r=[],n={},i=0;i<e.length;i++)t=e[i],t in n||(n[t]=!0,r.push(t));return r},_.strip_sa_properties=function(e){return _.isObject(e)?(_.each(e,function(t,r){if(_.isArray(t)){var n=[];_.each(t,function(e){_.isString(e)?n.push(e):logger.info("您的数据-",t,"的数组里的值必须是字符串,已经将其删除")}),0!==n.length?e[r]=n:(delete e[r],logger.info("已经删除空的数组"))}_.isString(t)||_.isNumber(t)||_.isDate(t)||_.isBoolean(t)||_.isArray(t)||(logger.info("您的数据-",t,"-格式不满足要求，我们已经将其删除"),delete e[r])}),e):e},_.strip_empty_properties=function(e){var t={};return _.each(e,function(e,r){null!=e&&(t[r]=e)}),t},_.utf8Encode=function(e){e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n");var t,r,n,i="",o=0;for(t=r=0,o=e.length,n=0;o>n;n++){var s=e.charCodeAt(n),a=null;128>s?r++:a=s>127&&2048>s?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),null!==a&&(r>t&&(i+=e.substring(t,r)),i+=a,t=r=n+1)}return r>t&&(i+=e.substring(t,e.length)),i},_.detector=detector,_.base64Encode=function(e){var t,r,n,i,o,s,a,c,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=0,f=0,l="",p=[];if(!e)return e;e=_.utf8Encode(e);do t=e.charCodeAt(d++),r=e.charCodeAt(d++),n=e.charCodeAt(d++),c=t<<16|r<<8|n,i=c>>18&63,o=c>>12&63,s=c>>6&63,a=63&c,p[f++]=u.charAt(i)+u.charAt(o)+u.charAt(s)+u.charAt(a);while(d<e.length);switch(l=p.join(""),e.length%3){case 1:l=l.slice(0,-2)+"==";break;case 2:l=l.slice(0,-1)+"="}return l},_.UUID=function(){var e=function(){for(var e=1*new Date,t=0;e==1*new Date;)t++;return e.toString(16)+t.toString(16)},t=function(){return Math.random().toString(16).replace(".","")},r=function(e){function t(e,t){var r,n=0;for(r=0;r<t.length;r++)n|=o[r]<<8*r;return e^n}var r,n,i=navigator.userAgent,o=[],s=0;for(r=0;r<i.length;r++)n=i.charCodeAt(r),o.unshift(255&n),o.length>=4&&(s=t(s,o),o=[]);return o.length>0&&(s=t(s,o)),s.toString(16)};return function(){var n=String(screen.height*screen.width);n=n&&/\d{5,}/.test(n)?n.toString(16):String(31242*Math.random()).replace(".","").slice(0,8);var i=e()+"-"+t()+"-"+r()+"-"+n+"-"+e();return i?(just_test_distinctid_2=1,i):(just_test_distinctid_2=2,(String(Math.random())+String(Math.random())+String(Math.random())).slice(2,15))}}(),_.getQueryParam=function(e,t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var r="[\\?&]"+t+"=([^&#]*)",n=new RegExp(r),i=n.exec(e);return null===i||i&&"string"!=typeof i[1]&&i[1].length?"":_.decodeURIComponent(i[1]).replace(/\+/g," ")},_.urlParse=function(e){var t=function(e){this._fields={Username:4,Password:5,Port:7,Protocol:2,Host:6,Path:8,URL:0,QueryString:9,Fragment:10},this._values={},this._regex=null,this._regex=/^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/,"undefined"!=typeof e&&this._parse(e)};return t.prototype.setUrl=function(e){this._parse(e)},t.prototype._initValues=function(){for(var e in this._fields)this._values[e]=""},t.prototype.getUrl=function(){var e="";return e+=this._values.Origin,e+=this._values.Port?":"+this._values.Port:"",e+=this._values.Path,e+=this._values.QueryString?"?"+this._values.QueryString:""},t.prototype._parse=function(e){this._initValues();var t=this._regex.exec(e);if(!t)throw"DPURLParser::_parse -> Invalid URL";for(var r in this._fields)"undefined"!=typeof t[this._fields[r]]&&(this._values[r]=t[this._fields[r]]);this._values.Hostname=this._values.Host.replace(/:\d+$/,""),this._values.Origin=this._values.Protocol+"://"+this._values.Hostname},new t(e)},_.hasStandardBrowserEnviroment=function(){return window?document?navigator?screen?void 0:"screen":"navigator":"document":"window"},_.bindReady=function(e){function t(){return n?!1:(n=!0,void e())}function r(){if(!n)try{document.documentElement.doScroll("left"),t()}catch(e){setTimeout(r,10)}}var n=!1;if(document.addEventListener)document.addEventListener("DOMContentLoaded",t,!1);else if(document.attachEvent){try{var i=null!=window.frameElement}catch(o){}document.documentElement.doScroll&&!i&&r(),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&t()})}if(window.addEventListener)window.addEventListener("load",t,!1);else if(window.attachEvent)window.attachEvent("onload",t);else{var s=window.onload;window.onload=function(){s&&s(),t()}}},_.addEvent=function(){function e(e,r,n){var i=function(i){if(i=i||t(window.event)){i.target=i.srcElement;var o,s,a=!0;return _.isFunction(n)&&(o=n(i)),s=r.call(e,i),(!1===o||!1===s)&&(a=!1),a}};return i}function t(e){return e&&(e.preventDefault=t.preventDefault,e.stopPropagation=t.stopPropagation),e}var r=function(t,r,n){if(t.addEventListener)t.addEventListener(r,n,!1);else{var i="on"+r,o=t[i];t[i]=e(t,n,o)}};t.preventDefault=function(){this.returnValue=!1},t.stopPropagation=function(){this.cancelBubble=!0},r.apply(null,arguments)},_.cookie={get:function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var i=r[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return _.decodeURIComponent(i.substring(t.length,i.length))}return null},set:function(e,t,r,n,i){n="undefined"==typeof n?sd.para.cross_subdomain:n;var o="",s="",a="";if(r="undefined"==typeof r?730:r,n){var c=document.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),u=c?c[0]:"";o=u?"; domain=."+u:""}if(0!==r){var d=new Date;"s"===String(r).slice(-1)?d.setTime(d.getTime()+1e3*Number(String(r).slice(0,-1))):d.setTime(d.getTime()+24*r*60*60*1e3),s="; expires="+d.toGMTString()}i&&(a="; secure"),document.cookie=e+"="+encodeURIComponent(t)+s+"; path=/"+o+a},remove:function(e,t){t="undefined"==typeof t?sd.para.cross_subdomain:t,_.cookie.set(e,"",-1,t)}},_.localStorage={get:function(e){return window.localStorage.getItem(e)},parse:function(e){var t;try{t=JSON.parse(_.localStorage.get(e))||null}catch(r){}return t},set:function(e,t){window.localStorage.setItem(e,t)},remove:function(e){window.localStorage.removeItem(e)},isSupport:function(){var e=!0;try{var t="__sensorsdatasupport__",r="testIsSupportStorage";_.localStorage.set(t,r),_.localStorage.get(t)!==r&&(e=!1),_.localStorage.remove(t)}catch(n){e=!1}return e}},_.xhr=function(e){if(e){var t=new XMLHttpRequest;return"withCredentials"in t?t:"undefined"!=typeof XDomainRequest?new XDomainRequest:t}if(XMLHttpRequest)return new XMLHttpRequest;if(window.ActiveXObject)try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(r){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(r){}}},_.ajax=function(e){function t(e){try{return JSON.parse(e)}catch(t){return{}}}var r=_.xhr(e.cors);e.type||(e.type=e.data?"POST":"GET"),e=_.extend({success:function(){},error:function(){}},e),r.onreadystatechange=function(){4==r.readyState&&(r.status>=200&&r.status<300||304==r.status?e.success(t(r.responseText)):e.error(t(r.responseText),r.status),r.onreadystatechange=null,r.onload=null)},r.open(e.type,e.url,!0);try{if(r.withCredentials=!0,_.isObject(e.header))for(var n in e.header)r.setRequestHeader(n,e.header[n]);e.data&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),"application/json"===e.contentType?r.setRequestHeader("Content-type","application/json; charset=UTF-8"):r.setRequestHeader("Content-type","application/x-www-form-urlencoded"))}catch(i){}r.send(e.data||null)},_.url=function(){function e(){return new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/)}function t(e){return _.decodeURIComponent(e.replace(/\+/g," "))}function r(e,t){var r=e.charAt(0),n=t.split(r);return r===e?n:(e=parseInt(e.substring(1),10),n[0>e?n.length+e:e-1])}function n(e,r){for(var n=e.charAt(0),i=r.split("&"),o=[],s={},a=[],c=e.substring(1),u=0,d=i.length;d>u;u++)if(o=i[u].match(/(.*?)=(.*)/),o||(o=[i[u],i[u],""]),""!==o[1].replace(/\s/g,"")){if(o[2]=t(o[2]||""),c===o[1])return o[2];a=o[1].match(/(.*)\[([0-9]+)\]/),a?(s[a[1]]=s[a[1]]||[],s[a[1]][a[2]]=o[2]):s[o[1]]=o[2]}return n===e?s:s[c]}return function(t,i){var o,s={};if("tld?"===t)return e();if(i=i||window.location.toString(),!t)return i;if(t=t.toString(),o=i.match(/^mailto:([^\/].+)/))s.protocol="mailto",s.email=o[1];else{if((o=i.match(/(.*?)\/#\!(.*)/))&&(i=o[1]+o[2]),(o=i.match(/(.*?)#(.*)/))&&(s.hash=o[2],i=o[1]),s.hash&&t.match(/^#/))return n(t,s.hash);if((o=i.match(/(.*?)\?(.*)/))&&(s.query=o[2],i=o[1]),s.query&&t.match(/^\?/))return n(t,s.query);if((o=i.match(/(.*?)\:?\/\/(.*)/))&&(s.protocol=o[1].toLowerCase(),i=o[2]),(o=i.match(/(.*?)(\/.*)/))&&(s.path=o[2],i=o[1]),s.path=(s.path||"").replace(/^([^\/])/,"/$1").replace(/\/$/,""),t.match(/^[\-0-9]+$/)&&(t=t.replace(/^([^\/])/,"/$1")),t.match(/^\//))return r(t,s.path.substring(1));if(o=r("/-1",s.path.substring(1)),o&&(o=o.match(/(.*?)\.(.*)/))&&(s.file=o[0],s.filename=o[1],s.fileext=o[2]),(o=i.match(/(.*)\:([0-9]+)$/))&&(s.port=o[2],i=o[1]),(o=i.match(/(.*?)@(.*)/))&&(s.auth=o[1],i=o[2]),s.auth&&(o=s.auth.match(/(.*)\:(.*)/),s.user=o?o[1]:s.auth,s.pass=o?o[2]:void 0),s.hostname=i.toLowerCase(),"."===t.charAt(0))return r(t,s.hostname);e()&&(o=s.hostname.match(e()),o&&(s.tld=o[3],s.domain=o[2]?o[2]+"."+o[3]:void 0,s.sub=o[1]||void 0)),s.port=s.port||("https"===s.protocol?"443":"80"),s.protocol=s.protocol||("443"===s.port?"https":"http")}return t in s?s[t]:"{}"===t?s:void 0}}(),_.dom={},_.info={initPage:function(){var e=document.referrer,t=e?_.url("hostname",e):e,r=e?_.url("domain",e):e,n=location.href,i=n?_.url("hostname",n):n,o=n?_.url("domain",n):n;this.pageProp={referrer:e,referrer_host:t,referrer_domain:r,url:n,url_host:i,url_domain:o}},pageProp:{},campaignParams:function(){var e=source_channel_standard.split(" "),t="",r={};return _.isArray(sd.para.source_channel)&&sd.para.source_channel.length>0&&(e=e.concat(sd.para.source_channel),e=_.unique(e)),_.each(e,function(e){t=_.getQueryParam(location.href,e),t.length&&(r[e]=t)}),r},campaignParamsStandard:function(e,t){e=e||"",t=t||"";var r=_.info.campaignParams(),n={},i={};for(var o in r)-1!==(" "+source_channel_standard+" ").indexOf(" "+o+" ")?n[e+o]=r[o]:i[t+o]=r[o];return{$utms:n,otherUtms:i}},properties:function(){return{$os:detector.os.name,$model:detector.device.name,$os_version:String(detector.os.version),$screen_height:Number(screen.height)||0,$screen_width:Number(screen.width)||0,$lib:"js",$lib_version:String(LIB_VERSION),$browser:detector.browser.name,$browser_version:String(detector.browser.version)}},currentProps:{},register:function(e){_.extend(_.info.currentProps,e)}},sd.sendState={},sd.sendState._complete=0,sd.sendState._receive=0,sd.sendState.getSendCall=function(e,t){++this._receive;var r="_state"+this._receive,n=this;this[r]=document.createElement("img"),this[r].onload=this[r].onerror=function(e){n[r].onload=null,n[r].onerror=null,delete n[r],++n._complete,"function"==typeof t&&t()},e._nocache=(String(Math.random())+String(Math.random())+String(Math.random())).slice(2,15),logger.info(e),e=JSON.stringify(e),-1!==sd.para.server_url.indexOf("?")?this[r].src=sd.para.server_url+"&data="+encodeURIComponent(_.base64Encode(e)):this[r].src=sd.para.server_url+"?data="+encodeURIComponent(_.base64Encode(e))};var saNewUser={checkIsAddSign:function(e){"track"===e.type&&(null!==_.cookie.get("sensorsdata_is_new_user")?e.properties.$is_first_day=!0:e.properties.$is_first_day=!1)},is_first_visit_time:!1,checkIsFirstTime:function(e){"track"===e.type&&(this.is_first_visit_time?(e.properties.$is_first_time=!0,this.is_first_visit_time=!1):e.properties.$is_first_time=!1)},storeInitCheck:function(){if(is_first_visitor){var e=new Date,t={h:23-e.getHours(),m:59-e.getMinutes(),s:59-e.getSeconds()};_.cookie.set("sensorsdata_is_new_user","true",3600*t.h+60*t.m+t.s+"s"),this.is_first_visit_time=!0}else null===_.cookie.get("sensorsdata_is_new_user")&&(this.checkIsAddSign=function(e){"track"===e.type&&(e.properties.$is_first_day=!1)}),this.checkIsFirstTime=function(e){"track"===e.type&&(e.properties.$is_first_time=!1)}},checkIsFirstLatest:function(){var e=_.info.pageProp.url_domain,t=_.info.pageProp.referrer_domain;""!==e&&e!==t&&sd.register({$latest_referrer:_.info.pageProp.referrer,$latest_referrer_host:_.info.pageProp.referrer_host});var r=_.info.campaignParamsStandard("$latest_","_latest_"),n=r.$utms,i=r.otherUtms;_.isEmptyObject(n)||sd.register(n),_.isEmptyObject(i)||sd.register(i)}},saEvent={};saEvent.checkOption={regChecks:{regName:/^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i},checkPropertiesKey:function(e){var t=this,r=!0;return _.each(e,function(e,n){t.regChecks.regName.test(n)||(r=!1)}),r},check:function(e,t){return"string"==typeof this[e]?this[this[e]](t):this[e](t)},str:function(e){return _.isString(e)?!0:(logger.info("请检查参数格式,必须是字符串"),!0)},properties:function(e){return _.strip_sa_properties(e),e?_.isObject(e)?this.checkPropertiesKey(e)?!0:(logger.info("properties里的key必须是由字符串数字_组成，且不能是系统保留字"),!0):(logger.info("properties可以没有，但有的话必须是对象"),!0):!0},propertiesMust:function(e){return _.strip_sa_properties(e),void 0===e||!_.isObject(e)||_.isEmptyObject(e)?(logger.info("properties必须是对象且有值"),!0):this.checkPropertiesKey(e)?!0:(logger.info("properties里的key必须是由字符串数字_组成，且不能是系统保留字"),!0)},event:function(e){return _.isString(e)&&this.regChecks.regName.test(e)?!0:(logger.info("请检查参数格式,必须是字符串,且eventName必须是字符串_开头,且不能是系统保留字"),!0)},test_id:"str",group_id:"str",distinct_id:function(e){return _.isString(e)&&/^.{1,255}$/.test(e)?!0:(logger.info("distinct_id必须是不能为空，且小于255位的字符串"),!1)}},saEvent.check=function(e){var t=!0;for(var r in e)if(!this.checkOption.check(r,e[r]))return!1;return t},saEvent.send=function(e,t){var r={distinct_id:store.getDistinctId(),lib:{$lib:"js",$lib_method:"code",$lib_version:String(LIB_VERSION)},properties:{}};if("string"!=typeof store.getDistinctId()||""==typeof store.getDistinctId()){var n="";switch(store.getDistinctId()){case null:n="null";break;case void 0:n="undefined";break;case"":n="空";break;default:n=String(store.getDistinctId())}error_msg.push("distinct_id-"+just_test_distinctid+"-"+just_test_distinctid_2+"-"+n+"-"+just_test_distinctid_detail+"-"+just_test_distinctid_detail2)}_.extend(r,e),error_msg.length>0&&(r.jssdk_error=error_msg.join("--")),
	_.isObject(e.properties)&&!_.isEmptyObject(e.properties)&&_.extend(r.properties,e.properties),_.isObject(t)&&_.extend(r.lib,t),e.type&&"profile"===e.type.slice(0,7)||(r.properties=_.extend({},_.info.properties(),store.getProps(),store.getSessionProps(),_.info.currentProps,r.properties)),r.properties.$time&&_.isDate(r.properties.$time)?(r.time=1*r.properties.$time,delete r.properties.$time):sd.para.use_client_time&&(r.time=1*new Date),_.searchObjDate(r),_.searchObjString(r),saNewUser.checkIsAddSign(r),saNewUser.checkIsFirstTime(r),sd.para.debug_mode===!0?(logger.info(r),this.debugPath(JSON.stringify(r),t)):sd.sendState.getSendCall(r,t)},saEvent.debugPath=function(e,t){var r="";r=-1!==sd.para.debug_mode_url.indexOf("?")?sd.para.debug_mode_url+"&data="+encodeURIComponent(_.base64Encode(e)):sd.para.debug_mode_url+"?data="+encodeURIComponent(_.base64Encode(e)),_.ajax({url:r,type:"GET",cors:!0,header:{"Dry-Run":String(sd.para.debug_mode_upload)}})};var store=sd.store={_sessionState:{},_state:{},getProps:function(){return this._state.props},getSessionProps:function(){return this._sessionState},getDistinctId:function(){return this._state.distinct_id},getFirstId:function(){return this._state.first_id},toState:function(e){var t=null;null!=e&&_.isJSONString(e)?(t=JSON.parse(e),t.distinct_id?this._state=t:(this.set("distinct_id",_.UUID()),error_msg.push("toStateParseDistinctError"))):(this.set("distinct_id",_.UUID()),error_msg.push("toStateParseError"))},initSessionState:function(){var e=_.cookie.get("sensorsdata2015session"),t=null;null!==e&&"object"==typeof(t=JSON.parse(e))&&(this._sessionState=t)},setOnce:function(e,t){e in this._state||this.set(e,t)},set:function(e,t){this._state=this._state||{},this._state[e]=t,this.save()},change:function(e,t){this._state[e]=t},setSessionProps:function(e){var t=this._sessionState;_.extend(t,e),this.sessionSave(t)},setSessionPropsOnce:function(e){var t=this._sessionState;_.coverExtend(t,e),this.sessionSave(t)},setProps:function(e){var t=this._state.props||{};_.extend(t,e),this.set("props",t)},setPropsOnce:function(e){var t=this._state.props||{};_.coverExtend(t,e),this.set("props",t)},sessionSave:function(e){this._sessionState=e,_.cookie.set("sensorsdata2015session",JSON.stringify(this._sessionState),0)},save:function(){_.cookie.set("sensorsdata2015jssdkcross",JSON.stringify(this._state),730,sd.para.cross_subdomain)},init:function(){navigator.cookieEnabled||(error_msg.push("cookieNotEnable"),_.localStorage.isSupport||error_msg.push("localStorageNotEnable")),this.initSessionState();var e=_.cookie.get(sd.para.cross_subdomain?"sensorsdata2015jssdkcross":"sensorsdata2015jssdk");null===e?(is_first_visitor=!0,just_test_distinctid=1,this.set("distinct_id",_.UUID())):(just_test_distinctid=2,just_test_distinctid_detail=JSON.stringify(e),just_test_distinctid_detail2=navigator.userAgent+"^_^"+document.cookie,this.toState(e)),saNewUser.storeInitCheck(),saNewUser.checkIsFirstLatest()}},commonWays={getUtm:function(){return _.info.campaignParams()},getStayTime:function(){return(new Date-sd._t)/1e3},setInitReferrer:function(){var e=document.referrer.slice(0,sd.para.max_referrer_string_length);sd.setOnceProfile({_init_referrer:e,_init_referrer_host:_.info.pageProp.referrer_host})},setSessionReferrer:function(){var e=document.referrer.slice(0,sd.para.max_referrer_string_length);store.setSessionPropsOnce({_session_referrer:e,_session_referrer_host:_.info.pageProp.referrer_host})},setDefaultAttr:function(){_.info.register({_current_url:location.href,_referrer:document.referrer.slice(0,sd.para.max_referrer_string_length),_referring_host:_.info.pageProp.referrer_host})},allTrack:function(){if(!document||!document.body)return setTimeout(this.allTrack,1e3),!1;if("has_init"===sd.allTrack)return!1;sd.allTrack="has_init";var e={getProps:function(e,t){var r={};if(r._el_tagname=e,r._el_name=t.getAttribute("name"),r._el_id=t.getAttribute("id"),r._el_classname="string"==typeof t.className?t.className:null,r._el_href=t.getAttribute("href"),t.textContent){var n=_.trim(t.textContent);n&&(n=n.replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)),r._el_value=n}return r=_.strip_empty_properties(r),r.$url=location.href,r.$url_path=location.pathname,r},clickEvents:function(e){var t={},r=e.target,n=r.tagName.toLowerCase();if(-1!==" button a input ".indexOf(" "+n+" ")){if("input"===n){if("button"!==r.getAttribute("type")&&"submit"!==r.getAttribute("type"))return!1;t._el_value=r.value}_.extend(t,this.getProps(n,r)),"a"===n?_.trackLink({event:e},"_web_event",t):sd.track("_web_event",t)}}};_.addEvent(document,"click",function(t){e.clickEvents(t)})},autoTrackWithoutProfile:function(e){this.autoTrack(_.extend(e,{not_set_profile:!0}))},autoTrack:function(e,t){e=_.isObject(e)?e:{};var r=_.info.campaignParams(),n={};for(var i in r)-1!==(" "+source_channel_standard+" ").indexOf(" "+i+" ")?n["$"+i]=r[i]:n[i]=r[i];is_first_visitor&&!e.not_set_profile&&sd.setOnceProfile(_.extend({$first_visit_time:new Date,$first_referrer:document.referrer.slice(0,sd.para.max_referrer_string_length),$first_browser_language:navigator.language,$first_referrer_host:_.info.pageProp.referrer_host},n)),e.not_set_profile&&delete e.not_set_profile,sd.track("$pageview",_.extend({$referrer:document.referrer.slice(0,sd.para.max_referrer_string_length),$referrer_host:_.info.pageProp.referrer_host,$url:location.href,$url_path:location.pathname,$title:document.title},n,e),t)}};sd.quick=function(){var e=slice.call(arguments),t=e[0],r=e.slice(1);return"string"==typeof t&&commonWays[t]?commonWays[t].apply(commonWays,r):void("function"==typeof t?t.apply(sd,r):logger.info("quick方法中没有这个功能"+e[0]))},sd.track=function(e,t,r){saEvent.check({event:e,properties:t})&&saEvent.send({type:"track",event:e,properties:t},r)},_.trackLink=function(e,t,r){function n(e){function n(){o||(o=!0,location.href=i.href)}e.preventDefault();var o=!1;setTimeout(n,1e3),sd.track(t,r,n)}e=e||{};var i=null;return e.ele&&(i=e.ele),e.event&&(i=e.event.target),r=r||{},i&&"object"==typeof i?!i.href||/^javascript/.test(i.href)||i.target?(sd.track(t,r),!1):(e.event&&n(e.event),void(e.ele&&_.addEvent(e.ele,"click",function(e){n(e)}))):!1},sd.trackLink=function(e,t,r){_.trackLink({ele:e},t,r)},sd.trackLinks=function(e,t,r){return r=r||{},e&&"object"==typeof e?!e.href||/^javascript/.test(e.href)||e.target?!1:void _.addEvent(e,"click",function(n){function i(){o||(o=!0,location.href=e.href)}n.preventDefault();var o=!1;setTimeout(i,1e3),sd.track(t,r,i)}):!1},sd.setProfile=function(e,t){saEvent.check({propertiesMust:e})&&saEvent.send({type:"profile_set",properties:e},t)},sd.setOnceProfile=function(e,t){saEvent.check({propertiesMust:e})&&saEvent.send({type:"profile_set_once",properties:e},t)},sd.appendProfile=function(e,t){saEvent.check({propertiesMust:e})&&(_.each(e,function(t,r){_.isString(t)?e[r]=[t]:_.isArray(t)||(delete e[r],logger.info("appendProfile属性的值必须是字符串或者数组"))}),_.isEmptyObject(e)||saEvent.send({type:"profile_append",properties:e},t))},sd.incrementProfile=function(e,t){function r(e){for(var t in e)if(!/-*\d+/.test(String(e[t])))return!1;return!0}var n=e;_.isString(e)&&(e={},e[n]=1),saEvent.check({propertiesMust:e})&&(r(e)?saEvent.send({type:"profile_increment",properties:e},t):logger.info("profile_increment的值只能是数字"))},sd.deleteProfile=function(e){saEvent.send({type:"profile_delete"},e),store.set("distinct_id",_.UUID())},sd.unsetProfile=function(e,t){var r=e,n={};_.isString(e)&&(e=[],e.push(r)),_.isArray(e)?(_.each(e,function(e){_.isString(e)?n[e]=!0:logger.info("profile_unset给的数组里面的值必须时string,已经过滤掉",e)}),saEvent.send({type:"profile_unset",properties:n},t)):logger.info("profile_unset的参数是数组")},sd.identify=function(e,t){var r=store.getFirstId();"undefined"==typeof e?r?store.set("first_id",_.UUID()):store.set("distinct_id",_.UUID()):saEvent.check({distinct_id:e})?t===!0?r?store.set("first_id",e):store.set("distinct_id",e):r?store.change("first_id",e):store.change("distinct_id",e):logger.info("identify的参数必须是字符串")},sd.trackSignup=function(e,t,r,n){saEvent.check({distinct_id:e,event:t,properties:r})&&(saEvent.send({original_id:store.getFirstId()||store.getDistinctId(),distinct_id:e,type:"track_signup",event:t,properties:r},n),store.set("distinct_id",e))},sd.trackAbtest=function(e,t){},sd.registerPage=function(e){saEvent.check({properties:e})?_.extend(_.info.currentProps,e):logger.info("register输入的参数有误")},sd.register=function(e){saEvent.check({properties:e})?store.setProps(e):logger.info("register输入的参数有误")},sd.registerOnce=function(e){saEvent.check({properties:e})?store.setPropsOnce(e):logger.info("registerOnce输入的参数有误")},sd.registerSession=function(e){saEvent.check({properties:e})?store.setSessionProps(e):logger.info("registerSession输入的参数有误")},sd.registerSessionOnce=function(e){saEvent.check({properties:e})?store.setSessionPropsOnce(e):logger.info("registerSessionOnce输入的参数有误")},sd.login=function(e){if(saEvent.check({distinct_id:e})){var t=store.getFirstId(),r=store.getDistinctId();e!==r&&(t?sd.trackSignup(e,"$SignUp"):(store.set("first_id",r),sd.trackSignup(e,"$SignUp")))}else logger.info("login的参数必须是字符串")},sd.logout=function(e){var t=store.getFirstId();t?(store.set("first_id",""),e===!0?store.set("distinct_id",_.UUID()):store.set("distinct_id",t)):logger.info("没有first_id，logout失败")},sd.init=function(){_.isObject(sd.sdkMain)&&sd.sdkMain._init()},sd._init=function(){app_js_bridge(),_.info.initPage(),store.init(),sd._q&&_.isArray(sd._q)&&sd._q.length>0&&_.each(sd._q,function(e){sd[e[0]].apply(sd,slice.call(e[1]))})},sd._init()}(window.sensorsDataAnalytic201505)}catch(err){!function(){var e=window.sensorsDataAnalytic201505;"string"==typeof e&&(e=window[e],null==e||"function"!=typeof e&&"object"!=typeof e||e.track&&e.track("_js_sdk_error",{_js_sdk_error_msg:err,$url:location.href}))}()}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	/*
	 window.OFO_ENV.ENV.UNKNOWN: not belonging to any of the cases below
	 window.OFO_ENV.WEBAPP_ITSELF: exactly the webapp page itself
	 window.OFO_ENV.ENV.INSIDE_WEBAPP: included via <iframe> inside webapp
	 window.OFO_ENV.ENV.INSIDE_NEW_IOS_APP: included via UIWebView in iOS app >= 1.8.2
	 window.OFO_ENV.ENV.INSIDE_NEW_ANDROID_APP: included via WebView in Android app >= 1.8
	 window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP: likely to be included via UIWebView in iOS app < 1.8.2; false positive or false negative are both possible
	 window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP: likely to be included via WebView in Android app < 1.8; false positive or false negative are both possible
	 */
	exports.ENV = {
	    UNKNOWN: 'u', WEBAPP_ITSELF: 'W', INSIDE_WEBAPP: 'w', INSIDE_NEW_IOS_APP: 'I', INSIDE_NEW_ANDROID_APP: 'A', LIKELY_TO_BE_INSIDE_OLD_IOS_APP: 'i', LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP: 'a'
	};
	/*
	 window.OFO_ENV.query: window.location.search parsed if no url supplied; otherwise parse the supplied .search section (should begin with "?")
	 */
	exports.query = function (queryString) {
	    var wls = queryString || window.location.search;
	    if (wls.charAt(0) === '?') {
	        wls = wls.substr(1);
	    }
	    var output = {};
	    wls.split('&').filter(function (substr) { return substr.length > 0; }).forEach(function (substr) {
	        var keyValue = substr.split('=');
	        var key = decodeURIComponent(keyValue.shift());
	        output[key] = decodeURIComponent(keyValue.join('='));
	    });
	    return output;
	};
	// notice that IS_IOS_RAW and IS_ANDROID_RAW can both be true on Windows Phone machines
	var IS_IOS_RAW = navigator.userAgent.indexOf('iPhone OS') > 0;
	var IS_ANDROID_RAW = navigator.userAgent.indexOf('Android') > 0;
	/*
	 window.OFO_ENV.isInWeChat: whether currently in WeChat
	 */
	exports.isInWeChat = navigator.userAgent.indexOf('MicroMessenger') >= 0;
	/*
	 window.OFO_ENV.isInAlipay: whether currently in Alipay
	 */
	exports.isInAlipay = navigator.userAgent.indexOf('AlipayClient') >= 0;
	var ofoAppMatched = navigator.userAgent.split(/\s+/).map(function (_) { return _.match(/OfoApp\/([0-9\.]+)/); }).filter(function (_) { return _; })[0];
	/*
	 window.OFO_ENV.iframingAncestorWhichIsWebApp: the window.parent ancestor which is our webapp
	 */
	exports.iframingAncestorWhichIsWebApp = (function (nextParent) {
	    var currWin;
	    try {
	        do {
	            currWin = nextParent;
	            if ('OFO_BUILD_DATE' in currWin) {
	                return currWin;
	            }
	            nextParent = currWin.parent;
	        } while (nextParent !== currWin);
	    }
	    catch (e) {
	    }
	    return null;
	})(window);
	var compareIosVersions = function (v1s, v2s) {
	    // returns 1 if v1s > v2s, 0 if v1s = v2s, -1 if v1s < v2s
	    var toInt = function (r) { return parseInt(r); };
	    var v1 = v1s.split('.').map(toInt);
	    var v2 = v2s.split('.').map(toInt);
	    var r;
	    for (var i = 0; (i < v1.length && i < v2.length); i++) {
	        r = v1[i] - v2[i];
	        if (r) {
	            break;
	        }
	    }
	    var output = r || (v1.length - v2.length);
	    return (output > 0) ? 1 : ((output < 0) ? -1 : 0);
	};
	/*
	 window.OFO_ENV.currentEnv: indicating where the current page is. will be equal to one of the window.OFO_ENV.ENV constants
	 */
	exports.currentEnv = ((exports.iframingAncestorWhichIsWebApp === window) ? exports.ENV.WEBAPP_ITSELF : (exports.iframingAncestorWhichIsWebApp ? exports.ENV.INSIDE_WEBAPP : (ofoAppMatched ? (IS_IOS_RAW ? (IS_ANDROID_RAW ? exports.ENV.UNKNOWN : ((compareIosVersions('1.8.2', ofoAppMatched[1]) <= 0) ? exports.ENV.INSIDE_NEW_IOS_APP : exports.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP)) : (IS_ANDROID_RAW ? exports.ENV.INSIDE_NEW_ANDROID_APP : exports.ENV.UNKNOWN)) : (((('ofoToken' in window) && !exports.isInWeChat) || (exports.query()['from'] === 'native')) ? (IS_IOS_RAW ? (IS_ANDROID_RAW ? exports.ENV.UNKNOWN : exports.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP) : (IS_ANDROID_RAW ? exports.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP : exports.ENV.UNKNOWN)) : exports.ENV.UNKNOWN))));
	var apiServerInQuery = exports.query()['backend'];
	/*
	 window.OFO_ENV.API_HOST: hostname of the API server to be used
	 */
	exports.API_HOST = {
	    'common.ofo.so': 'san.ofo.so',
	    'qa-common.ofo.so': apiServerInQuery || 'qa-mastertest.ofo.so',
	    'qacommonapi.ofo.so': apiServerInQuery || 'api-test.ofo.so',
	    'qatestapi.ofo.so': apiServerInQuery || 'qa-mastertest.ofo.so',
	    'ofo-staging.ofo.so': 'san.ofo.so',
	    'testcommon.ofo.so': 'testonline.ofo.so',
	    'onecommon.ofo.so': 'one.ofo.so',
	    'common.ofo.com': 'san.ofo.com',
	    'coupon.ofo.com': 'san.ofo.so',
	    'market.ofo.com': 'san.ofo.so',
	    'brand.ofo.com': 'san.ofo.so',
	    'activity.ofo.com': 'san.ofo.so'
	}[window.location.host] || window.location.host;
	/*
	 window.OFO_ENV.ofoAppVersion: version of our app, if in our native app. otherwise null
	 */
	exports.ofoAppVersion = ofoAppMatched ? ofoAppMatched[1] : null;
	/*
	 window.OFO_ENV.ofoAppSourceVersion: SourceVersion of our app, if in our native app. otherwise null
	 */
	exports.ofoAppSourceVersion = (navigator.userAgent.substring(navigator.userAgent.indexOf("SourceVersion/")).split(" ")[0].split("/")[1]);
	/*
	 window.OFO_ENV.isLikelyInApp: whether it is likely to be in old app or new app
	 */
	exports.isLikelyInApp = (exports.currentEnv === exports.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP || exports.currentEnv === exports.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP || exports.currentEnv === exports.ENV.INSIDE_NEW_IOS_APP || exports.currentEnv === exports.ENV.INSIDE_NEW_ANDROID_APP);
	/*
	 window.OFO_ENV.isInNewApp: whether it is in new app (version >= 1.8)
	 */
	exports.isInNewApp = (exports.currentEnv === exports.ENV.INSIDE_NEW_IOS_APP || exports.currentEnv === exports.ENV.INSIDE_NEW_ANDROID_APP);
	/*
	 window.OFO_ENV.sourceForApi: "source" field to be used when requesting our API server
	 */
	exports.sourceForApi = ((exports.currentEnv === exports.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP || exports.currentEnv === exports.ENV.INSIDE_NEW_IOS_APP) ? 1 : ((exports.currentEnv === exports.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP || exports.currentEnv === exports.ENV.INSIDE_NEW_ANDROID_APP) ? 2 : (exports.isInAlipay ? (exports.isInWeChat ? -3 : -2) : (exports.isInWeChat ? -1 : 0))));
	/*
	 window.OFO_ENV.sourceForSa: "source" field to be used when sending data to Sensors Analytics
	 */
	exports.sourceForSa = ((exports.currentEnv === exports.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP || exports.currentEnv === exports.ENV.INSIDE_NEW_IOS_APP) ? 1 : ((exports.currentEnv === exports.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP || exports.currentEnv === exports.ENV.INSIDE_NEW_ANDROID_APP) ? 2 : (exports.isInAlipay ? (exports.isInWeChat ? -3 : -2) : (exports.isInWeChat ? -1 : 0))));
	/*
	 window.OFO_ENV.ofoAppVersionGte: if the current app version is larger than the version numbers supplied. Pass null for a platform if not supported anyway
	 */
	exports.ofoAppVersionGte = function (iosVersion, androidVersion) {
	    if (!exports.ofoAppVersion) {
	        return false;
	    }
	    return ((exports.currentEnv === exports.ENV.INSIDE_NEW_IOS_APP) && (iosVersion !== null && iosVersion !== undefined) && (compareIosVersions(iosVersion, ofoAppMatched[1]) <= 0)) || ((exports.currentEnv === exports.ENV.INSIDE_NEW_ANDROID_APP) && (androidVersion !== null && androidVersion !== undefined) && (parseInt(ofoAppMatched[1]) >= androidVersion));
	};
	/*
	  window.OFO_ENV.ofoApp: open ofoapp or jump to downloadpage
	*/
	exports.ofoApp = function (action, appversion) {
	    if (IS_ANDROID_RAW) {
	        if (!exports.isInWeChat) {
	            var iframe = document.createElement('iframe');
	            iframe.src = 'ofoapp://' + action;
	            iframe.width = '100%';
	            iframe.height = '100%';
	            iframe.style.display = 'none';
	            document.body.appendChild(iframe);
	        }
	        if (!exports.isLikelyInApp)
	            setTimeout(function () { window.location.href = 'https://common.ofo.so/app/?appversion=' + appversion; }, 600);
	    }
	    else {
	        if (!exports.isInWeChat) {
	            window.location.href = 'ofoapp://' + action;
	        }
	        if (!exports.isLikelyInApp)
	            setTimeout(function () { window.location.href = 'https://common.ofo.so/app/?appversion=' + appversion; }, 25);
	    }
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ENV = __webpack_require__(4);
	var sendDebug = __webpack_require__(6);
	if (window.ofoGlobals && window.ofoGlobals.get) {
	    var tempValues_1 = JSON.parse(window.ofoGlobals.get());
	    Object.keys(tempValues_1).forEach(function (key) {
	        window[key] = tempValues_1[key];
	    });
	}
	var trySetUpWebWxShare = function (windowDotTop, params) {
	    var wx = windowDotTop.wx;
	    if (!wx) {
	        return;
	    }
	    wx.ready(function () {
	        wx.showOptionMenu();
	        wx.onMenuShareTimeline({
	            title: params[0],
	            link: params[3],
	            imgUrl: params[2] // 分享图标
	        });
	        wx.onMenuShareAppMessage({
	            title: params[0],
	            desc: params[1],
	            link: params[3],
	            imgUrl: params[2] // 分享图标
	        });
	    });
	};
	/**
	 * Call methods provides by the client app which embeds current page
	 * @param {string} name name of method to call
	 * @param {*[]} params parameters to pass to the method
	 */
	exports.ofoResponseProxy = function (name, params) {
	    if (name === 'saClick') {
	        return;
	    }
	    if ((name === 'setTitle') && !ENV.isLikelyInApp) {
	        window.top.document.title = params[0];
	        return;
	    }
	    if ((name === 'setTitle') && ENV.isLikelyInApp && !ENV.ofoAppVersionGte('1.8.1', 11000)) {
	        return;
	    }
	    if ((name === 'shareConfig') && ENV.isLikelyInApp && !ENV.ofoAppVersionGte('1.8.4', 11000)) {
	        return;
	    }
	    if (name === 'shareConfig') {
	        if (ENV.isInWeChat && (ENV.currentEnv === ENV.ENV.INSIDE_WEBAPP)) {
	            trySetUpWebWxShare(ENV.iframingAncestorWhichIsWebApp, params);
	            return;
	        }
	        else if (ENV.isInWeChat && window.wx) {
	            trySetUpWebWxShare(window, params);
	            return;
	        }
	    }
	    if (name === 'openExternal' && (ENV.currentEnv === ENV.ENV.INSIDE_NEW_IOS_APP)) {
	        name = 'toSafari';
	    }
	    if (window.ofoResponse) {
	        try {
	            window.ofoResponse[name].apply(window.ofoResponse, params);
	        }
	        catch (ee) {
	            sendDebug('BridgeError', {
	                exception: {
	                    'message': ee.message,
	                    'stack': ee.error ? ee.error.stack : (ee.filename + ':' + ee.lineno + ':' + ee.colno)
	                },
	                name: name,
	                params: params
	            });
	        }
	    }
	    else if (ENV.currentEnv === ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP) {
	        var iframe_1 = document.createElement('iframe');
	        iframe_1.setAttribute('src', 'ofowebviewresponse://' + name + '/' + encodeURI(JSON.stringify(params)));
	        document.documentElement.appendChild(iframe_1);
	        setTimeout(function () { return iframe_1.parentNode.removeChild(iframe_1); });
	    }
	    else if (ENV.currentEnv === ENV.ENV.INSIDE_NEW_IOS_APP) {
	        window.webkit.messageHandlers.ofo_iOS.postMessage({ method: name, params: params });
	    }
	};
	/**
	 * Handle deep links
	 * @param {string} linkUrl for example, ofoapp://purchase/
	 * @param {boolean?} opt_goWebDirectly
	 *        if true, webapp will be opened directly if NOT in native app
	 *        if false, if in neither webapp nor native app, a page will be opened asking the user to retry native app, download native app or use web app
	 */
	exports.handleLink = function (linkUrl, opt_goWebDirectly) {
	    if (ENV.iframingAncestorWhichIsWebApp) {
	        ENV.iframingAncestorWhichIsWebApp.ofoHandleDeepLink(linkUrl);
	        return;
	    }
	    if (ENV.isLikelyInApp) {
	        window.location.replace(linkUrl); // try native app
	        if (!ENV.isInNewApp) {
	            setTimeout(function () {
	                return window.alert('您可能需要更新至最新版 ofo app 才能使用此功能。');
	            }, 1000);
	        }
	    }
	    else {
	        if (linkUrl === 'ofoapp://use') {
	            window.location.replace('/newdist/?Journey');
	        }
	        else if (linkUrl === 'ofoapp://purchase') {
	            window.location.replace('/newdist/?Purchase');
	        }
	        else if (linkUrl === 'ofoapp://bond') {
	            window.location.replace('/newdist/?Identification');
	        }
	        else if (linkUrl === 'ofoapp://certify') {
	            window.location.replace('/newdist/?Identification');
	        }
	    }
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var getOfoToken = __webpack_require__(7);
	var ENV = __webpack_require__(4);

	var add = function (path, value, output) {
	    if (value && (typeof value === 'object')) {
	        Object.keys(value).forEach(function (key) {
	            add(path + '$' + key, value[key], output);
	        });
	    } else {
	        output[path] = value;
	    }
	};

	var saSendDebug = (function () {
	    var report = {
	        "userAgent": navigator.userAgent,
	        "windowLoaded": Date.now()
	    };
	    return function (type, extra, opt_importantQueryKeys) {
	        var output = {
	            "token": getOfoToken(),
	            "extra": extra,
	            "location": {},
	            "currentEnv": ENV.currentEnv
	        };
	        Object.keys(report).forEach(function (key) {
	            output[key] = report[key];
	        });
	        ['host', 'protocol', 'pathname', 'search', 'hash'].forEach(function (section) {
	            output['location'][section] = window.location[section];
	        });
	        var importantQueryKeys = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content', 'from'];
	        if (opt_importantQueryKeys) {
	            importantQueryKeys = importantQueryKeys.concat(opt_importantQueryKeys);
	        }
	        var queryParams;
	        output.query = {};
	        queryParams = ENV.query();
	        importantQueryKeys.forEach(function (key) {
	            if (key in queryParams) {
	                output.query[key] = queryParams[key];
	            }
	        });
	        var saOutput = { "Source": ENV.sourceForSa };
	        add('_SD', output, saOutput);
	        sa.track('_SD$' + type, saOutput);
	    };
	})();

	var sendBoth = function (type, extra, opt_importantQueryKeys) {
	    if (window.location.hostname.substr(window.location.hostname.length - 6) !== 'ofo.so') {
	        console.log('当前域名不是 ofo.so，已跳过统计发送。');
	        return;
	    }
	    saSendDebug(type, extra, opt_importantQueryKeys);
	};

	window.addEventListener('error', function (ee) {
	    if (ee.error === 'NOT_AN_EXCEPTION') {
	        return;
	    }
	    sendBoth('JsError', {
	        'message': ee.message,
	        'stack': ee.error ? ee.error.stack : (ee.filename + ':' + ee.lineno + ':' + ee.colno)
	    });
	});

	module.exports = sendBoth;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Cookies = __webpack_require__(8);

	var tokenFormat = /^.{16,}$/;

	/**
	 * Store token into localStorage / Cookie if not present in latter ones
	 */
	if (tokenFormat.test(window.ofoToken)) {
	  if (window.localStorage) {
	    window.localStorage.setItem('ofo-tokened', window.ofoToken);
	  }
	  Cookies.set('ofo-tokened', window.ofoToken);
	}

	/**
	 * Get token
	 */
	module.exports = function () {
	  var nextParent = window;
	  var currWin;
	  var token;
	  try {
	    do {
	      currWin = nextParent;
	      token = currWin.ofoToken;
	      if (tokenFormat.test(token)) {
	        return token;
	      }
	      nextParent = currWin.parent;
	    } while (nextParent !== currWin);
	  } catch (e) {
	    // DOMException might raise here is frame parent is cross-origin
	  }
	  console.log('COOKIE RESULT: ' + Cookies.get('ofo-tokened'));
	  if (tokenFormat.test(token)) { return token; }
	  if (window.localStorage) {
	    token = localStorage.getItem('ofo-tokened');
	    if (tokenFormat.test(token)) {
	      return token;
	    }
	  }
	  token = Cookies.get('ofo-tokened');
	  if (tokenFormat.test(token)) {
	    return token;
	  }
	  return null;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/*!
	 * JavaScript Cookie v2.1.4
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (typeof define === 'function' && define.amd) {
			define(factory);
			registeredInModuleLoader = true;
		}
		if (true) {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function init (converter) {
			function api (key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}

				// Write

				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);

					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}

					// We're using "expires" because "max-age" is not supported by IE
					attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}

					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}

					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);

					var stringifiedAttributes = '';

					for (var attributeName in attributes) {
						if (!attributes[attributeName]) {
							continue;
						}
						stringifiedAttributes += '; ' + attributeName;
						if (attributes[attributeName] === true) {
							continue;
						}
						stringifiedAttributes += '=' + attributes[attributeName];
					}
					return (document.cookie = key + '=' + value + stringifiedAttributes);
				}

				// Read

				if (!key) {
					result = {};
				}

				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);

						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						if (key === name) {
							result = cookie;
							break;
						}

						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}

				return result;
			}

			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};

			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));



/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	var tryJson = function (object) {
	    try {
	        return JSON.stringify(object);
	    } catch (e) {
	        return object.toString() + ' (JSON.stringify failed)';
	    }
	};
	var buffer = [];
	window.addEventListener('error', function (ee) {
	    addResult({
	        source: 'window.onerror',
	        stack: ee.error ? ee.error.stack : (ee.filename + ':' + ee.lineno + ':' + ee.colno),
	        message: ee.message
	    });
	});
	['error', 'warn', 'log', 'info'].map(function (verb) {
	    var old = console[verb];
	    console[verb] = function () {
	        old.apply(console, arguments);
	        addResult({
	            source: 'console.' + verb,
	            stack: new Error().stack,
	            message: Array.prototype.map.call(arguments, function (content) {
	                return tryJson(content);
	            }).join(', ')
	        });
	    };
	});
	var actions = '';
	var showResult;
	var addResult = function (newEntry) {
	    buffer.push(newEntry);
	    if (showResult) { showResult(newEntry); }
	};
	var openDebugConsole = function () {
	    var dom = function (tag, parent, style) {
	        var el = document.createElement(tag);
	        el.style.position = 'absolute';
	        el.style.color = '#000';
	        el.style.fontSize = '14px';
	        Object.keys(style).forEach(function (sk) { el.style.setProperty(sk, style[sk], 'important'); });
	        parent.appendChild(el);
	        return el;
	    };
	    var consoleWrap = dom('div', document.body, {
	        'top': '32px', 'left': '32px', 'bottom': '32px', 'right': '32px', 'border': '2px solid #000', 'display': 'none', 'z-index': '66666'
	    });
	    consoleWrap.className = 'ofo-iff';
	    var outputs = dom('div', consoleWrap, {
	        'top': '32px', 'left': '0', 'bottom': '32px', 'right': '0', 'overflow': 'scroll', 'background': '#fff'
	    });
	    var input = dom('input', consoleWrap, {
	        'bottom': '0', 'height': '32px', 'left': '0', 'border': '0 none', 'padding': '0', 'background': '#fcc', 'line-height': '32px', 'width': '100%', 'border-right': '64px solid transparent', 'box-sizing': 'border-box'
	    });
	    var button = dom('button', consoleWrap, {
	        'bottom': '0', 'height': '32px', 'width': '64px', 'right': '0', 'border': '0 none', 'padding': '0', 'text-align': 'center', 'background': '#ccf', 'line-height': '32px'
	    });
	    showResult = function (entry) {
	        var b = document.createElement('b');
	        b.appendChild(document.createTextNode(entry.source));
	        outputs.appendChild(b);
	        var i;
	        if ('stack' in entry) {
	            i = document.createElement('i');
	            i.appendChild(document.createTextNode(' [stack]'));
	            i.addEventListener('click', function () {
	                addResult({
	                    'source': 'stack',
	                    'message': entry.stack
	                });
	            });
	            outputs.appendChild(i);
	        }
	        var pre = document.createElement('pre');
	        pre.appendChild(document.createTextNode(entry.message));
	        outputs.appendChild(pre);
	        outputs.scrollTop = outputs.scrollHeight;
	        outputs.scrollLeft = 0;
	    };
	    button.appendChild(document.createTextNode('EVAL'));
	    button.addEventListener('click', function () {
	        addResult({
	            source: 'eval',
	            message: tryJson(eval(input.value))
	        });
	    });
	    var close = dom('div', consoleWrap, {
	        'top': '0', 'height': '32px', 'left': '0', 'right': '0', 'border': '0 none', 'padding': '0', 'text-align': 'center', 'background': '#ccf', 'line-height': '32px'
	    });
	    close.appendChild(document.createTextNode('CLOSE'));
	    close.addEventListener('click', function () {
	        showResult = null;
	        document.body.removeChild(consoleWrap);
	    });
	    buffer.forEach(showResult);
	    consoleWrap.style.setProperty('display', 'block', 'important');
	};
	var idens = {};
	document.addEventListener('touchstart', function (e) {
	    if (showResult) { return; }
	    var c = e.changedTouches[0];
	    idens[c.identifier] = Date.now();
	});
	document.addEventListener('touchend', function (e) {
	    if (showResult) { return; }
	    var c = e.changedTouches[0];
	    var diffMs = Date.now() - idens[c.identifier];
	    if (diffMs > 1200) {
	        actions += 'L';
	    } else if (diffMs < 400) {
	        actions += 'S';
	    } else {
	        actions += ' '
	    }
	    delete idens[c.identifier];
	    if (actions.length > 15) {
	        actions = actions.substr(5);
	    }
	    if (actions.indexOf('LSLSLS') >= 0) {
	        actions = '';
	        if (window.confirm('Open debug console?')) {
	            openDebugConsole();
	        }
	    }
	});


/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/googleanalytics/autotrack#usage
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-74862604-1', 'auto');
	ga('send', 'pageview');
	window.addEventListener('error', function (ee) {
	    ga('send', 'event', 'JsError', ee.message, ee.error ? ee.error.stack : (ee.filename + ':' + ee.lineno + ':' + ee.colno));
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function (text,callback) {
		var tipHTML = "";
		var autoHide = true;
		var tipBody;
		console.log(text);
			//只有文本提示
			tipHTML = "<div style='padding:15px 20px;background:rgba(0,0,0,.75);color:#fff;border-radius:4px;text-align:center;min-width:160px;'><p data-label='tip-text' style='font-size: 14px;line-height:20px;margin:0;'>"+text+"</p></div>";
		if(callback){
			autoHide = false;
			//文本加按钮
			tipHTML = "<div style='padding:15px 20px;background:rgba(0,0,0,.75);color:#fff;border-radius:4px;text-align:center;min-width:160px;'><p data-label='tip-text' style='font-size: 14px;line-height:20px;margin:0;'>"+text+"</p><button data-label='tip-ok'>确定,我知道了</button></div>";
		}

		if(tipBody = document.body.querySelector('[data-label="tip"]')){
			tipBody.querySelector('[data-label="tip-text"]').innerHTML = text;
		}else{
			tipBody = document.createElement("div");
			tipBody.className = 'ofo-iff';
			tipBody.setAttribute("data-label","tip");
			document.body.appendChild(tipBody);
			
			tipBody.setAttribute("style",
				"position:fixed;width:100%;height:100%;z-index:9999; justify-content:center;align-items:center;display: flex;top:0;opacity:0;padding:0 20px;box-sizing:border-box !important;-webkit-transition: opacity 0.2s linear 0s, height 0s linear 0s;"
			);
		}

		tipBody.innerHTML = tipHTML;
		setTimeout(function(){
			tipBody.style.opacity = 1;
		},10);
		if (tipBody.timeoutHandle) {
			clearTimeout(tipBody.timeoutHandle);
		}
		if(autoHide){
			tipBody.timeoutHandle = setTimeout(function(){
				tipBody.style.opacity = 0;
				tipBody.timeoutHandle = setTimeout(function(){document.body.removeChild(tipBody)},200);
			},1500);
		}else{
			tipBody.querySelector('[data-label="tip-ok"]').onclick = function(){
				tipBody.style.opacity = 0;
				setTimeout(function(){document.body.removeChild(tipBody)},200);
				callback();
			};
		}
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ENV = __webpack_require__(4);
	var sendDebug = __webpack_require__(6);

	var sendWx = function () {
	    var xhr = new XMLHttpRequest();
	    xhr.open('post', '//' + ENV.API_HOST + '/ofo/wechat/config');
	    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    xhr.onload = function () {
	        var config = JSON.parse(xhr.responseText).values.info;
	        if (config.url !== window.location.href) {
	            sendDebug('WXNonMatch', { config: config });
	            return;
	        }
	        wx.config({
	            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	            appId: config.appid,
	            timestamp: config.timestamp, // 必填，生成签名的时间戳
	            nonceStr: config.noncestr, // 必填，生成签名的随机串
	            signature: config.signature,// 必填，签名，见附录1
	            jsApiList: config.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	        });
	    };
	    xhr.send('url=' + encodeURIComponent(window.location.href));
	};

	var lastUrl;

	var checkAndSendWx = function () {
	    if (window.location.href === lastUrl) { return; }
	    lastUrl = window.location.href;
	    sendWx();
	};

	var wrapper = function (origin, callback) { return function () { origin.apply(history, arguments); callback(); }};

	if ((window.top === window) && ENV.isInWeChat) {
	    __webpack_require__(13);
	    wx.error(function (res) {
	        sendDebug('WXError', { message: res });
	    });
	    checkAndSendWx();
	    window.addEventListener('popstate', checkAndSendWx); // location might be changed
	    window.addEventListener('hashchange', checkAndSendWx); // location might be changed
	    history.pushState = wrapper(history.pushState, checkAndSendWx); // hook to pushState
	    history.replaceState = wrapper(history.replaceState, checkAndSendWx); // hook to replaceState
	    setInterval(checkAndSendWx, 500); // other cases where location might be actively changed
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	(function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){g(b,a,d)}):j(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),g(b,a,c)}):d?j(b,d):j(b,c)}function e(a){return a=a||{},a.appId=E.appId,a.verifyAppId=E.appId,a.verifySignType="sha1",a.verifyTimestamp=E.timestamp+"",a.verifyNonceStr=E.nonceStr,a.verifySignature=E.signature,a}function f(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function g(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=h(a,d),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",E.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function h(a,b){var e,f,c=a,d=p[c];return d&&(c=d),e="ok",b&&(f=b.indexOf(":"),e=b.substring(f+1),"confirm"==e&&(e="ok"),"failed"==e&&(e="fail"),-1!=e.indexOf("failed_")&&(e=e.substring(7)),-1!=e.indexOf("fail_")&&(e=e.substring(5)),e=e.replace(/_/g," "),e=e.toLowerCase(),("access denied"==e||"no permission to execute"==e)&&(e="permission denied"),"config"==c&&"function not exist"==e&&(e="ok"),""==e&&(e="fail")),b=c+":"+e}function i(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=o[d],e&&(a[b]=e);return a}}function j(a,b){if(!(!E.debug||b&&b.isInnerInvoke)){var c=p[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function k(){0!=D.preVerifyState&&(u||v||E.debug||"6.0.2">z||D.systemType<0||A||(A=!0,D.appId=E.appId,D.initTime=C.initEndTime-C.initStartTime,D.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,H.getNetworkType({isInnerInvoke:!0,success:function(a){var b,c;D.networkType=a.networkType,b="http://open.weixin.qq.com/sdk/report?v="+D.version+"&o="+D.preVerifyState+"&s="+D.systemType+"&c="+D.clientVersion+"&a="+D.appId+"&n="+D.networkType+"&i="+D.initTime+"&p="+D.preVerifyTime+"&u="+D.url,c=new Image,c.src=b}})))}function l(){return(new Date).getTime()}function m(b){w&&(a.WeixinJSBridge?b():q.addEventListener&&q.addEventListener("WeixinJSBridgeReady",b,!1))}function n(){H.invoke||(H.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},H.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;if(!a.jWeixin)return o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},p=function(){var b,a={};for(b in o)a[o[b]]=b;return a}(),q=a.document,r=q.title,s=navigator.userAgent.toLowerCase(),t=navigator.platform.toLowerCase(),u=!(!t.match("mac")&&!t.match("win")),v=-1!=s.indexOf("wxdebugger"),w=-1!=s.indexOf("micromessenger"),x=-1!=s.indexOf("android"),y=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),z=function(){var a=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),A=!1,B=!1,C={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},D={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",preVerifyState:1,systemType:y?1:x?2:-1,clientVersion:z,url:encodeURIComponent(location.href)},E={},F={_completes:[]},G={state:0,data:{}},m(function(){C.initEndTime=l()}),H={config:function(a){E=a,j("config",a);var b=E.check===!1?!1:!0;m(function(){var a,d,e;if(b)c(o.config,{verifyJsApiList:i(E.jsApiList)},function(){F._complete=function(a){C.preVerifyEndTime=l(),G.state=1,G.data=a},F.success=function(){D.preVerifyState=0},F.fail=function(a){F._fail?F._fail(a):G.state=-1};var a=F._completes;return a.push(function(){k()}),F.complete=function(){for(var c=0,d=a.length;d>c;++c)a[c]();F._completes=[]},F}()),C.preVerifyStartTime=l();else{for(G.state=1,a=F._completes,d=0,e=a.length;e>d;++d)a[d]();F._completes=[]}}),E.beta&&n()},ready:function(a){0!=G.state?a():(F._completes.push(a),!w&&E.debug&&a())},error:function(a){"6.0.2">z||B||(B=!0,-1==G.state?a(G.data):F._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=p[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:i(a.jsApiList)},function(){return a._complete=function(a){if(x){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(o.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||r,desc:a.title||r,img_url:a.imgUrl||"",link:a.link||location.href,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareAppMessage:function(a){d(o.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||r,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl||"",type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(o.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(o.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareQZone:function(a){d(o.onMenuShareQZone,{complete:function(){c("shareQZone",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2",count:a.count||9,sizeType:a.sizeType||["original","compressed"],sourceType:a.sourceType||["album","camera"]},function(){return a._complete=function(a){if(x){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(o.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){a=a||{},c(o.getLocation,{type:a.type||"wgs84"},function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){a=a||{},c("closeWindow",{},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){a=a||{},c("scanQRCode",{needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},function(){return a._complete=function(a){var b,c;y&&(b=a.resultStr,b&&(c=JSON.parse(b),a.resultStr=c&&c.scan_code&&c.scan_code.scan_result))},a}())},openProductSpecificView:function(a){c(o.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0,ext_info:a.extInfo},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(o.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:E.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(o.openCard,{card_list:d},a)},chooseWXPay:function(a){c(o.chooseWXPay,f(a),a)}},b&&(a.wx=a.jWeixin=H),H})(window, true);

/***/ },
/* 14 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

			// AMD. Register as an anonymous module.
			define(function() {
				return FastClick;
			});
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());



/***/ }
/******/ ]);