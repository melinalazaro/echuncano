function Nw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Pw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rm={exports:{}},Fl={},Nm={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=Symbol.for("react.element"),xw=Symbol.for("react.portal"),Ow=Symbol.for("react.fragment"),Aw=Symbol.for("react.strict_mode"),Lw=Symbol.for("react.profiler"),Dw=Symbol.for("react.provider"),bw=Symbol.for("react.context"),Mw=Symbol.for("react.forward_ref"),Fw=Symbol.for("react.suspense"),Uw=Symbol.for("react.memo"),jw=Symbol.for("react.lazy"),Fh=Symbol.iterator;function Bw(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xm=Object.assign,Om={};function oi(t,e,n){this.props=t,this.context=e,this.refs=Om,this.updater=n||Pm}oi.prototype.isReactComponent={};oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Am(){}Am.prototype=oi.prototype;function Bc(t,e,n){this.props=t,this.context=e,this.refs=Om,this.updater=n||Pm}var zc=Bc.prototype=new Am;zc.constructor=Bc;xm(zc,oi.prototype);zc.isPureReactComponent=!0;var Uh=Array.isArray,Lm=Object.prototype.hasOwnProperty,Wc={current:null},Dm={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lm.call(e,r)&&!Dm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:As,type:t,key:s,ref:o,props:i,_owner:Wc.current}}function zw(t,e){return{$$typeof:As,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vc(t){return typeof t=="object"&&t!==null&&t.$$typeof===As}function Ww(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jh=/\/+/g;function Sa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ww(""+t.key):e.toString(36)}function Eo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case As:case xw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sa(o,0):r,Uh(i)?(n="",t!=null&&(n=t.replace(jh,"$&/")+"/"),Eo(i,e,n,"",function(u){return u})):i!=null&&(Vc(i)&&(i=zw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Uh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Sa(s,l);o+=Eo(s,e,n,a,i)}else if(a=Bw(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Sa(s,l++),o+=Eo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xs(t,e,n){if(t==null)return t;var r=[],i=0;return Eo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Vw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},Co={transition:null},Hw={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Co,ReactCurrentOwner:Wc};function Mm(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Xs,forEach:function(t,e,n){Xs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xs(t,function(){e++}),e},toArray:function(t){return Xs(t,function(e){return e})||[]},only:function(t){if(!Vc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=oi;W.Fragment=Ow;W.Profiler=Lw;W.PureComponent=Bc;W.StrictMode=Aw;W.Suspense=Fw;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hw;W.act=Mm;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Lm.call(e,a)&&!Dm.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:As,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:bw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dw,_context:t},t.Consumer=t};W.createElement=bm;W.createFactory=function(t){var e=bm.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:Mw,render:t}};W.isValidElement=Vc;W.lazy=function(t){return{$$typeof:jw,_payload:{_status:-1,_result:t},_init:Vw}};W.memo=function(t,e){return{$$typeof:Uw,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Co.transition;Co.transition={};try{t()}finally{Co.transition=e}};W.unstable_act=Mm;W.useCallback=function(t,e){return Ae.current.useCallback(t,e)};W.useContext=function(t){return Ae.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};W.useEffect=function(t,e){return Ae.current.useEffect(t,e)};W.useId=function(){return Ae.current.useId()};W.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Ae.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};W.useRef=function(t){return Ae.current.useRef(t)};W.useState=function(t){return Ae.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Ae.current.useTransition()};W.version="18.3.1";Nm.exports=W;var k=Nm.exports;const $w=Pw(k),qw=Nw({__proto__:null,default:$w},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gw=k,Kw=Symbol.for("react.element"),Qw=Symbol.for("react.fragment"),Yw=Object.prototype.hasOwnProperty,Jw=Gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xw={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Yw.call(e,r)&&!Xw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Kw,type:t,key:s,ref:o,props:i,_owner:Jw.current}}Fl.Fragment=Qw;Fl.jsx=Fm;Fl.jsxs=Fm;Rm.exports=Fl;var y=Rm.exports,pu={},Um={exports:{}},Je={},jm={exports:{}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,F){var U=O.length;O.push(F);e:for(;0<U;){var se=U-1>>>1,fe=O[se];if(0<i(fe,F))O[se]=F,O[U]=fe,U=se;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],U=O.pop();if(U!==F){O[0]=U;e:for(var se=0,fe=O.length,Ys=fe>>>1;se<Ys;){var Fn=2*(se+1)-1,Ca=O[Fn],Un=Fn+1,Js=O[Un];if(0>i(Ca,U))Un<fe&&0>i(Js,Ca)?(O[se]=Js,O[Un]=U,se=Un):(O[se]=Ca,O[Fn]=U,se=Fn);else if(Un<fe&&0>i(Js,U))O[se]=Js,O[Un]=U,se=Un;else break e}}return F}function i(O,F){var U=O.sortIndex-F.sortIndex;return U!==0?U:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,_=!1,g=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=O)r(u),F.sortIndex=F.expirationTime,e(a,F);else break;F=n(u)}}function E(O){if(v=!1,m(O),!g)if(n(a)!==null)g=!0,wa(R);else{var F=n(u);F!==null&&Ea(E,F.startTime-O)}}function R(O,F){g=!1,v&&(v=!1,p(I),I=-1),_=!0;var U=h;try{for(m(F),d=n(a);d!==null&&(!(d.expirationTime>F)||O&&!De());){var se=d.callback;if(typeof se=="function"){d.callback=null,h=d.priorityLevel;var fe=se(d.expirationTime<=F);F=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(a)&&r(a),m(F)}else r(a);d=n(a)}if(d!==null)var Ys=!0;else{var Fn=n(u);Fn!==null&&Ea(E,Fn.startTime-F),Ys=!1}return Ys}finally{d=null,h=U,_=!1}}var N=!1,P=null,I=-1,b=5,D=-1;function De(){return!(t.unstable_now()-D<b)}function yi(){if(P!==null){var O=t.unstable_now();D=O;var F=!0;try{F=P(!0,O)}finally{F?wi():(N=!1,P=null)}}else N=!1}var wi;if(typeof f=="function")wi=function(){f(yi)};else if(typeof MessageChannel<"u"){var Mh=new MessageChannel,Rw=Mh.port2;Mh.port1.onmessage=yi,wi=function(){Rw.postMessage(null)}}else wi=function(){C(yi,0)};function wa(O){P=O,N||(N=!0,wi())}function Ea(O,F){I=C(function(){O(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){g||_||(g=!0,wa(R))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var U=h;h=F;try{return O()}finally{h=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=h;h=O;try{return F()}finally{h=U}},t.unstable_scheduleCallback=function(O,F,U){var se=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?se+U:se):U=se,O){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=U+fe,O={id:c++,callback:F,priorityLevel:O,startTime:U,expirationTime:fe,sortIndex:-1},U>se?(O.sortIndex=U,e(u,O),n(a)===null&&O===n(u)&&(v?(p(I),I=-1):v=!0,Ea(E,U-se))):(O.sortIndex=fe,e(a,O),g||_||(g=!0,wa(R))),O},t.unstable_shouldYield=De,t.unstable_wrapCallback=function(O){var F=h;return function(){var U=h;h=F;try{return O.apply(this,arguments)}finally{h=U}}}})(Bm);jm.exports=Bm;var Zw=jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=k,Ye=Zw;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zm=new Set,ns={};function hr(t,e){Kr(t,e),Kr(t+"Capture",e)}function Kr(t,e){for(ns[t]=e,t=0;t<e.length;t++)zm.add(e[t])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=Object.prototype.hasOwnProperty,t0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bh={},zh={};function n0(t){return mu.call(zh,t)?!0:mu.call(Bh,t)?!1:t0.test(t)?zh[t]=!0:(Bh[t]=!0,!1)}function r0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i0(t,e,n,r){if(e===null||typeof e>"u"||r0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Le(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Se[t]=new Le(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Se[e]=new Le(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Se[t]=new Le(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Se[t]=new Le(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Se[t]=new Le(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Se[t]=new Le(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Se[t]=new Le(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Se[t]=new Le(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Se[t]=new Le(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hc=/[\-:]([a-z])/g;function $c(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hc,$c);Se[e]=new Le(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hc,$c);Se[e]=new Le(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hc,$c);Se[e]=new Le(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Se[t]=new Le(t,1,!1,t.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Se[t]=new Le(t,1,!1,t.toLowerCase(),null,!0,!0)});function qc(t,e,n,r){var i=Se.hasOwnProperty(e)?Se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i0(e,n,i,r)&&(n=null),r||i===null?n0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kt=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zs=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),Gc=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Vm=Symbol.for("react.context"),Kc=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),Qc=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Hm=Symbol.for("react.offscreen"),Wh=Symbol.iterator;function Ei(t){return t===null||typeof t!="object"?null:(t=Wh&&t[Wh]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,Ia;function bi(t){if(Ia===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ia=e&&e[1]||""}return`
`+Ia+t}var Ta=!1;function ka(t,e){if(!t||Ta)return"";Ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Ta=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bi(t):""}function s0(t){switch(t.tag){case 5:return bi(t.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 2:case 15:return t=ka(t.type,!1),t;case 11:return t=ka(t.type.render,!1),t;case 1:return t=ka(t.type,!0),t;default:return""}}function yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sr:return"Fragment";case Cr:return"Portal";case gu:return"Profiler";case Gc:return"StrictMode";case _u:return"Suspense";case vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vm:return(t.displayName||"Context")+".Consumer";case Wm:return(t._context.displayName||"Context")+".Provider";case Kc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qc:return e=t.displayName||null,e!==null?e:yu(t.type)||"Memo";case en:e=t._payload,t=t._init;try{return yu(t(e))}catch{}}return null}function o0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(e);case 8:return e===Gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $m(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l0(t){var e=$m(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eo(t){t._valueTracker||(t._valueTracker=l0(t))}function qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$m(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wu(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gm(t,e){e=e.checked,e!=null&&qc(t,"checked",e,!1)}function Eu(t,e){Gm(t,e);var n=Tn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cu(t,e.type,Tn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cu(t,e,n){(e!=="number"||Bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mi=Array.isArray;function Mr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $h(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Mi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tn(n)}}function Km(t,e){var n=Tn(e.value),r=Tn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Iu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var to,Ym=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=to.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function rs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a0=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(t){a0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zi[e]=zi[t]})});function Jm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zi.hasOwnProperty(t)&&zi[t]?(""+e).trim():e+"px"}function Xm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var u0=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tu(t,e){if(e){if(u0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nu=null,Fr=null,Ur=null;function Gh(t){if(t=bs(t)){if(typeof Nu!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Wl(e),Nu(t.stateNode,t.type,e))}}function Zm(t){Fr?Ur?Ur.push(t):Ur=[t]:Fr=t}function eg(){if(Fr){var t=Fr,e=Ur;if(Ur=Fr=null,Gh(t),e)for(t=0;t<e.length;t++)Gh(e[t])}}function tg(t,e){return t(e)}function ng(){}var Ra=!1;function rg(t,e,n){if(Ra)return t(e,n);Ra=!0;try{return tg(t,e,n)}finally{Ra=!1,(Fr!==null||Ur!==null)&&(ng(),eg())}}function is(t,e){var n=t.stateNode;if(n===null)return null;var r=Wl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Pu=!1;if(zt)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{Pu=!1}function c0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Wi=!1,zo=null,Wo=!1,xu=null,d0={onError:function(t){Wi=!0,zo=t}};function h0(t,e,n,r,i,s,o,l,a){Wi=!1,zo=null,c0.apply(d0,arguments)}function f0(t,e,n,r,i,s,o,l,a){if(h0.apply(this,arguments),Wi){if(Wi){var u=zo;Wi=!1,zo=null}else throw Error(S(198));Wo||(Wo=!0,xu=u)}}function fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ig(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kh(t){if(fr(t)!==t)throw Error(S(188))}function p0(t){var e=t.alternate;if(!e){if(e=fr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kh(i),t;if(s===r)return Kh(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function sg(t){return t=p0(t),t!==null?og(t):null}function og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=og(t);if(e!==null)return e;t=t.sibling}return null}var lg=Ye.unstable_scheduleCallback,Qh=Ye.unstable_cancelCallback,m0=Ye.unstable_shouldYield,g0=Ye.unstable_requestPaint,oe=Ye.unstable_now,_0=Ye.unstable_getCurrentPriorityLevel,Jc=Ye.unstable_ImmediatePriority,ag=Ye.unstable_UserBlockingPriority,Vo=Ye.unstable_NormalPriority,v0=Ye.unstable_LowPriority,ug=Ye.unstable_IdlePriority,Ul=null,Tt=null;function y0(t){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:C0,w0=Math.log,E0=Math.LN2;function C0(t){return t>>>=0,t===0?32:31-(w0(t)/E0|0)|0}var no=64,ro=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ho(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Fi(l):(s&=o,s!==0&&(r=Fi(s)))}else o=n&~i,o!==0?r=Fi(o):s!==0&&(r=Fi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pt(e),i=1<<n,r|=t[n],e&=~i;return r}function S0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=S0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cg(){var t=no;return no<<=1,!(no&4194240)&&(no=64),t}function Na(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ls(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pt(e),t[e]=n}function T0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hg,Zc,fg,pg,mg,Au=!1,io=[],hn=null,fn=null,pn=null,ss=new Map,os=new Map,nn=[],k0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(t,e){switch(t){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(e.pointerId)}}function Si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bs(e),e!==null&&Zc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function R0(t,e,n,r,i){switch(e){case"focusin":return hn=Si(hn,t,e,n,r,i),!0;case"dragenter":return fn=Si(fn,t,e,n,r,i),!0;case"mouseover":return pn=Si(pn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ss.set(s,Si(ss.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,os.set(s,Si(os.get(s)||null,t,e,n,r,i)),!0}return!1}function gg(t){var e=Hn(t.target);if(e!==null){var n=fr(e);if(n!==null){if(e=n.tag,e===13){if(e=ig(n),e!==null){t.blockedOn=e,mg(t.priority,function(){fg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function So(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ru=r,n.target.dispatchEvent(r),Ru=null}else return e=bs(n),e!==null&&Zc(e),t.blockedOn=n,!1;e.shift()}return!0}function Jh(t,e,n){So(t)&&n.delete(e)}function N0(){Au=!1,hn!==null&&So(hn)&&(hn=null),fn!==null&&So(fn)&&(fn=null),pn!==null&&So(pn)&&(pn=null),ss.forEach(Jh),os.forEach(Jh)}function Ii(t,e){t.blockedOn===e&&(t.blockedOn=null,Au||(Au=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,N0)))}function ls(t){function e(i){return Ii(i,t)}if(0<io.length){Ii(io[0],t);for(var n=1;n<io.length;n++){var r=io[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hn!==null&&Ii(hn,t),fn!==null&&Ii(fn,t),pn!==null&&Ii(pn,t),ss.forEach(e),os.forEach(e),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&nn.shift()}var jr=Kt.ReactCurrentBatchConfig,$o=!0;function P0(t,e,n,r){var i=$,s=jr.transition;jr.transition=null;try{$=1,ed(t,e,n,r)}finally{$=i,jr.transition=s}}function x0(t,e,n,r){var i=$,s=jr.transition;jr.transition=null;try{$=4,ed(t,e,n,r)}finally{$=i,jr.transition=s}}function ed(t,e,n,r){if($o){var i=Lu(t,e,n,r);if(i===null)Ua(t,e,r,qo,n),Yh(t,r);else if(R0(i,t,e,n,r))r.stopPropagation();else if(Yh(t,r),e&4&&-1<k0.indexOf(t)){for(;i!==null;){var s=bs(i);if(s!==null&&hg(s),s=Lu(t,e,n,r),s===null&&Ua(t,e,r,qo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ua(t,e,r,null,n)}}var qo=null;function Lu(t,e,n,r){if(qo=null,t=Yc(r),t=Hn(t),t!==null)if(e=fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ig(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qo=t,null}function _g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_0()){case Jc:return 1;case ag:return 4;case Vo:case v0:return 16;case ug:return 536870912;default:return 16}default:return 16}}var un=null,td=null,Io=null;function vg(){if(Io)return Io;var t,e=td,n=e.length,r,i="value"in un?un.value:un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Io=i.slice(t,1<r?1-r:void 0)}function To(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function Xh(){return!1}function Xe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?so:Xh,this.isPropagationStopped=Xh,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),e}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nd=Xe(li),Ds=ne({},li,{view:0,detail:0}),O0=Xe(Ds),Pa,xa,Ti,jl=ne({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(Pa=t.screenX-Ti.screenX,xa=t.screenY-Ti.screenY):xa=Pa=0,Ti=t),Pa)},movementY:function(t){return"movementY"in t?t.movementY:xa}}),Zh=Xe(jl),A0=ne({},jl,{dataTransfer:0}),L0=Xe(A0),D0=ne({},Ds,{relatedTarget:0}),Oa=Xe(D0),b0=ne({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=Xe(b0),F0=ne({},li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U0=Xe(F0),j0=ne({},li,{data:0}),ef=Xe(j0),B0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=W0[t])?!!e[t]:!1}function rd(){return V0}var H0=ne({},Ds,{key:function(t){if(t.key){var e=B0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=To(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rd,charCode:function(t){return t.type==="keypress"?To(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?To(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$0=Xe(H0),q0=ne({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tf=Xe(q0),G0=ne({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rd}),K0=Xe(G0),Q0=ne({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y0=Xe(Q0),J0=ne({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=Xe(J0),Z0=[9,13,27,32],id=zt&&"CompositionEvent"in window,Vi=null;zt&&"documentMode"in document&&(Vi=document.documentMode);var eE=zt&&"TextEvent"in window&&!Vi,yg=zt&&(!id||Vi&&8<Vi&&11>=Vi),nf=" ",rf=!1;function wg(t,e){switch(t){case"keyup":return Z0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function tE(t,e){switch(t){case"compositionend":return Eg(e);case"keypress":return e.which!==32?null:(rf=!0,nf);case"textInput":return t=e.data,t===nf&&rf?null:t;default:return null}}function nE(t,e){if(Ir)return t==="compositionend"||!id&&wg(t,e)?(t=vg(),Io=td=un=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yg&&e.locale!=="ko"?null:e.data;default:return null}}var rE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rE[t.type]:e==="textarea"}function Cg(t,e,n,r){Zm(r),e=Go(e,"onChange"),0<e.length&&(n=new nd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hi=null,as=null;function iE(t){Lg(t,0)}function Bl(t){var e=Rr(t);if(qm(e))return t}function sE(t,e){if(t==="change")return e}var Sg=!1;if(zt){var Aa;if(zt){var La="oninput"in document;if(!La){var of=document.createElement("div");of.setAttribute("oninput","return;"),La=typeof of.oninput=="function"}Aa=La}else Aa=!1;Sg=Aa&&(!document.documentMode||9<document.documentMode)}function lf(){Hi&&(Hi.detachEvent("onpropertychange",Ig),as=Hi=null)}function Ig(t){if(t.propertyName==="value"&&Bl(as)){var e=[];Cg(e,as,t,Yc(t)),rg(iE,e)}}function oE(t,e,n){t==="focusin"?(lf(),Hi=e,as=n,Hi.attachEvent("onpropertychange",Ig)):t==="focusout"&&lf()}function lE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(as)}function aE(t,e){if(t==="click")return Bl(e)}function uE(t,e){if(t==="input"||t==="change")return Bl(e)}function cE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vt=typeof Object.is=="function"?Object.is:cE;function us(t,e){if(vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mu.call(e,i)||!vt(t[i],e[i]))return!1}return!0}function af(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uf(t,e){var n=af(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=af(n)}}function Tg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kg(){for(var t=window,e=Bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bo(t.document)}return e}function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dE(t){var e=kg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tg(n.ownerDocument.documentElement,n)){if(r!==null&&sd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=uf(n,s);var o=uf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hE=zt&&"documentMode"in document&&11>=document.documentMode,Tr=null,Du=null,$i=null,bu=!1;function cf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bu||Tr==null||Tr!==Bo(r)||(r=Tr,"selectionStart"in r&&sd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$i&&us($i,r)||($i=r,r=Go(Du,"onSelect"),0<r.length&&(e=new nd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Tr)))}function oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kr={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},Da={},Rg={};zt&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function zl(t){if(Da[t])return Da[t];if(!kr[t])return t;var e=kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rg)return Da[t]=e[n];return t}var Ng=zl("animationend"),Pg=zl("animationiteration"),xg=zl("animationstart"),Og=zl("transitionend"),Ag=new Map,df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(t,e){Ag.set(t,e),hr(e,[t])}for(var ba=0;ba<df.length;ba++){var Ma=df[ba],fE=Ma.toLowerCase(),pE=Ma[0].toUpperCase()+Ma.slice(1);Pn(fE,"on"+pE)}Pn(Ng,"onAnimationEnd");Pn(Pg,"onAnimationIteration");Pn(xg,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Og,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function hf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,f0(r,e,void 0,t),t.currentTarget=null}function Lg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;hf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;hf(i,l,u),s=a}}}if(Wo)throw t=xu,Wo=!1,xu=null,t}function Y(t,e){var n=e[Bu];n===void 0&&(n=e[Bu]=new Set);var r=t+"__bubble";n.has(r)||(Dg(e,t,2,!1),n.add(r))}function Fa(t,e,n){var r=0;e&&(r|=4),Dg(n,t,r,e)}var lo="_reactListening"+Math.random().toString(36).slice(2);function cs(t){if(!t[lo]){t[lo]=!0,zm.forEach(function(n){n!=="selectionchange"&&(mE.has(n)||Fa(n,!1,t),Fa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lo]||(e[lo]=!0,Fa("selectionchange",!1,e))}}function Dg(t,e,n,r){switch(_g(e)){case 1:var i=P0;break;case 4:i=x0;break;default:i=ed}n=i.bind(null,e,n,t),i=void 0,!Pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ua(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Hn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}rg(function(){var u=s,c=Yc(n),d=[];e:{var h=Ag.get(t);if(h!==void 0){var _=nd,g=t;switch(t){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":_=$0;break;case"focusin":g="focus",_=Oa;break;case"focusout":g="blur",_=Oa;break;case"beforeblur":case"afterblur":_=Oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=K0;break;case Ng:case Pg:case xg:_=M0;break;case Og:_=Y0;break;case"scroll":_=O0;break;case"wheel":_=X0;break;case"copy":case"cut":case"paste":_=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=tf}var v=(e&4)!==0,C=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=is(f,p),E!=null&&v.push(ds(f,E,m)))),C)break;f=f.return}0<v.length&&(h=new _(h,g,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==Ru&&(g=n.relatedTarget||n.fromElement)&&(Hn(g)||g[Wt]))break e;if((_||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,_?(g=n.relatedTarget||n.toElement,_=u,g=g?Hn(g):null,g!==null&&(C=fr(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(_=null,g=u),_!==g)){if(v=Zh,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=tf,E="onPointerLeave",p="onPointerEnter",f="pointer"),C=_==null?h:Rr(_),m=g==null?h:Rr(g),h=new v(E,f+"leave",_,n,c),h.target=C,h.relatedTarget=m,E=null,Hn(c)===u&&(v=new v(p,f+"enter",g,n,c),v.target=m,v.relatedTarget=C,E=v),C=E,_&&g)t:{for(v=_,p=g,f=0,m=v;m;m=_r(m))f++;for(m=0,E=p;E;E=_r(E))m++;for(;0<f-m;)v=_r(v),f--;for(;0<m-f;)p=_r(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=_r(v),p=_r(p)}v=null}else v=null;_!==null&&ff(d,h,_,v,!1),g!==null&&C!==null&&ff(d,C,g,v,!0)}}e:{if(h=u?Rr(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var R=sE;else if(sf(h))if(Sg)R=uE;else{R=lE;var N=oE}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=aE);if(R&&(R=R(t,u))){Cg(d,R,n,c);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Cu(h,"number",h.value)}switch(N=u?Rr(u):window,t){case"focusin":(sf(N)||N.contentEditable==="true")&&(Tr=N,Du=u,$i=null);break;case"focusout":$i=Du=Tr=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,cf(d,n,c);break;case"selectionchange":if(hE)break;case"keydown":case"keyup":cf(d,n,c)}var P;if(id)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ir?wg(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(yg&&n.locale!=="ko"&&(Ir||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ir&&(P=vg()):(un=c,td="value"in un?un.value:un.textContent,Ir=!0)),N=Go(u,I),0<N.length&&(I=new ef(I,t,null,n,c),d.push({event:I,listeners:N}),P?I.data=P:(P=Eg(n),P!==null&&(I.data=P)))),(P=eE?tE(t,n):nE(t,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(c=new ef("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Lg(d,e)})}function ds(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Go(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=is(t,n),s!=null&&r.unshift(ds(t,s,i)),s=is(t,e),s!=null&&r.push(ds(t,s,i))),t=t.return}return r}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ff(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=is(n,s),a!=null&&o.unshift(ds(n,a,l))):i||(a=is(n,s),a!=null&&o.push(ds(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gE=/\r\n?/g,_E=/\u0000|\uFFFD/g;function pf(t){return(typeof t=="string"?t:""+t).replace(gE,`
`).replace(_E,"")}function ao(t,e,n){if(e=pf(e),pf(t)!==e&&n)throw Error(S(425))}function Ko(){}var Mu=null,Fu=null;function Uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,vE=typeof clearTimeout=="function"?clearTimeout:void 0,mf=typeof Promise=="function"?Promise:void 0,yE=typeof queueMicrotask=="function"?queueMicrotask:typeof mf<"u"?function(t){return mf.resolve(null).then(t).catch(wE)}:ju;function wE(t){setTimeout(function(){throw t})}function ja(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ls(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ls(e)}function mn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ai=Math.random().toString(36).slice(2),St="__reactFiber$"+ai,hs="__reactProps$"+ai,Wt="__reactContainer$"+ai,Bu="__reactEvents$"+ai,EE="__reactListeners$"+ai,CE="__reactHandles$"+ai;function Hn(t){var e=t[St];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wt]||n[St]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gf(t);t!==null;){if(n=t[St])return n;t=gf(t)}return e}t=n,n=t.parentNode}return null}function bs(t){return t=t[St]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Wl(t){return t[hs]||null}var zu=[],Nr=-1;function xn(t){return{current:t}}function X(t){0>Nr||(t.current=zu[Nr],zu[Nr]=null,Nr--)}function Q(t,e){Nr++,zu[Nr]=t.current,t.current=e}var kn={},Ne=xn(kn),je=xn(!1),Xn=kn;function Qr(t,e){var n=t.type.contextTypes;if(!n)return kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Be(t){return t=t.childContextTypes,t!=null}function Qo(){X(je),X(Ne)}function _f(t,e,n){if(Ne.current!==kn)throw Error(S(168));Q(Ne,e),Q(je,n)}function bg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,o0(t)||"Unknown",i));return ne({},n,r)}function Yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kn,Xn=Ne.current,Q(Ne,t),Q(je,je.current),!0}function vf(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=bg(t,e,Xn),r.__reactInternalMemoizedMergedChildContext=t,X(je),X(Ne),Q(Ne,t)):X(je),Q(je,n)}var Ot=null,Vl=!1,Ba=!1;function Mg(t){Ot===null?Ot=[t]:Ot.push(t)}function SE(t){Vl=!0,Mg(t)}function On(){if(!Ba&&Ot!==null){Ba=!0;var t=0,e=$;try{var n=Ot;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ot=null,Vl=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(t+1)),lg(Jc,On),i}finally{$=e,Ba=!1}}return null}var Pr=[],xr=0,Jo=null,Xo=0,et=[],tt=0,Zn=null,At=1,Lt="";function jn(t,e){Pr[xr++]=Xo,Pr[xr++]=Jo,Jo=t,Xo=e}function Fg(t,e,n){et[tt++]=At,et[tt++]=Lt,et[tt++]=Zn,Zn=t;var r=At;t=Lt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var s=32-pt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,At=1<<32-pt(e)+i|n<<i|r,Lt=s+t}else At=1<<s|n<<i|r,Lt=t}function od(t){t.return!==null&&(jn(t,1),Fg(t,1,0))}function ld(t){for(;t===Jo;)Jo=Pr[--xr],Pr[xr]=null,Xo=Pr[--xr],Pr[xr]=null;for(;t===Zn;)Zn=et[--tt],et[tt]=null,Lt=et[--tt],et[tt]=null,At=et[--tt],et[tt]=null}var Qe=null,Ke=null,Z=!1,ct=null;function Ug(t,e){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,Ke=mn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,Ke=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zn!==null?{id:At,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qe=t,Ke=null,!0):!1;default:return!1}}function Wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vu(t){if(Z){var e=Ke;if(e){var n=e;if(!yf(t,e)){if(Wu(t))throw Error(S(418));e=mn(n.nextSibling);var r=Qe;e&&yf(t,e)?Ug(r,n):(t.flags=t.flags&-4097|2,Z=!1,Qe=t)}}else{if(Wu(t))throw Error(S(418));t.flags=t.flags&-4097|2,Z=!1,Qe=t}}}function wf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function uo(t){if(t!==Qe)return!1;if(!Z)return wf(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uu(t.type,t.memoizedProps)),e&&(e=Ke)){if(Wu(t))throw jg(),Error(S(418));for(;e;)Ug(t,e),e=mn(e.nextSibling)}if(wf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ke=mn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ke=null}}else Ke=Qe?mn(t.stateNode.nextSibling):null;return!0}function jg(){for(var t=Ke;t;)t=mn(t.nextSibling)}function Yr(){Ke=Qe=null,Z=!1}function ad(t){ct===null?ct=[t]:ct.push(t)}var IE=Kt.ReactCurrentBatchConfig;function ki(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function co(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ef(t){var e=t._init;return e(t._payload)}function Bg(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=yn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,E){return f===null||f.tag!==6?(f=Ga(m,p.mode,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,E){var R=m.type;return R===Sr?c(p,f,m.props.children,E,m.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===en&&Ef(R)===f.type)?(E=i(f,m.props),E.ref=ki(p,f,m),E.return=p,E):(E=Ao(m.type,m.key,m.props,null,p.mode,E),E.ref=ki(p,f,m),E.return=p,E)}function u(p,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ka(m,p.mode,E),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,E,R){return f===null||f.tag!==7?(f=Yn(m,p.mode,E,R),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ga(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Zs:return m=Ao(f.type,f.key,f.props,null,p.mode,m),m.ref=ki(p,null,f),m.return=p,m;case Cr:return f=Ka(f,p.mode,m),f.return=p,f;case en:var E=f._init;return d(p,E(f._payload),m)}if(Mi(f)||Ei(f))return f=Yn(f,p.mode,m,null),f.return=p,f;co(p,f)}return null}function h(p,f,m,E){var R=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:l(p,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Zs:return m.key===R?a(p,f,m,E):null;case Cr:return m.key===R?u(p,f,m,E):null;case en:return R=m._init,h(p,f,R(m._payload),E)}if(Mi(m)||Ei(m))return R!==null?null:c(p,f,m,E,null);co(p,m)}return null}function _(p,f,m,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,l(f,p,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Zs:return p=p.get(E.key===null?m:E.key)||null,a(f,p,E,R);case Cr:return p=p.get(E.key===null?m:E.key)||null,u(f,p,E,R);case en:var N=E._init;return _(p,f,m,N(E._payload),R)}if(Mi(E)||Ei(E))return p=p.get(m)||null,c(f,p,E,R,null);co(f,E)}return null}function g(p,f,m,E){for(var R=null,N=null,P=f,I=f=0,b=null;P!==null&&I<m.length;I++){P.index>I?(b=P,P=null):b=P.sibling;var D=h(p,P,m[I],E);if(D===null){P===null&&(P=b);break}t&&P&&D.alternate===null&&e(p,P),f=s(D,f,I),N===null?R=D:N.sibling=D,N=D,P=b}if(I===m.length)return n(p,P),Z&&jn(p,I),R;if(P===null){for(;I<m.length;I++)P=d(p,m[I],E),P!==null&&(f=s(P,f,I),N===null?R=P:N.sibling=P,N=P);return Z&&jn(p,I),R}for(P=r(p,P);I<m.length;I++)b=_(P,p,I,m[I],E),b!==null&&(t&&b.alternate!==null&&P.delete(b.key===null?I:b.key),f=s(b,f,I),N===null?R=b:N.sibling=b,N=b);return t&&P.forEach(function(De){return e(p,De)}),Z&&jn(p,I),R}function v(p,f,m,E){var R=Ei(m);if(typeof R!="function")throw Error(S(150));if(m=R.call(m),m==null)throw Error(S(151));for(var N=R=null,P=f,I=f=0,b=null,D=m.next();P!==null&&!D.done;I++,D=m.next()){P.index>I?(b=P,P=null):b=P.sibling;var De=h(p,P,D.value,E);if(De===null){P===null&&(P=b);break}t&&P&&De.alternate===null&&e(p,P),f=s(De,f,I),N===null?R=De:N.sibling=De,N=De,P=b}if(D.done)return n(p,P),Z&&jn(p,I),R;if(P===null){for(;!D.done;I++,D=m.next())D=d(p,D.value,E),D!==null&&(f=s(D,f,I),N===null?R=D:N.sibling=D,N=D);return Z&&jn(p,I),R}for(P=r(p,P);!D.done;I++,D=m.next())D=_(P,p,I,D.value,E),D!==null&&(t&&D.alternate!==null&&P.delete(D.key===null?I:D.key),f=s(D,f,I),N===null?R=D:N.sibling=D,N=D);return t&&P.forEach(function(yi){return e(p,yi)}),Z&&jn(p,I),R}function C(p,f,m,E){if(typeof m=="object"&&m!==null&&m.type===Sr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Zs:e:{for(var R=m.key,N=f;N!==null;){if(N.key===R){if(R=m.type,R===Sr){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===en&&Ef(R)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=ki(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===Sr?(f=Yn(m.props.children,p.mode,E,m.key),f.return=p,p=f):(E=Ao(m.type,m.key,m.props,null,p.mode,E),E.ref=ki(p,f,m),E.return=p,p=E)}return o(p);case Cr:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Ka(m,p.mode,E),f.return=p,p=f}return o(p);case en:return N=m._init,C(p,f,N(m._payload),E)}if(Mi(m))return g(p,f,m,E);if(Ei(m))return v(p,f,m,E);co(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ga(m,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return C}var Jr=Bg(!0),zg=Bg(!1),Zo=xn(null),el=null,Or=null,ud=null;function cd(){ud=Or=el=null}function dd(t){var e=Zo.current;X(Zo),t._currentValue=e}function Hu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){el=t,ud=Or=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Me=!0),t.firstContext=null)}function st(t){var e=t._currentValue;if(ud!==t)if(t={context:t,memoizedValue:e,next:null},Or===null){if(el===null)throw Error(S(308));Or=t,el.dependencies={lanes:0,firstContext:t}}else Or=Or.next=t;return e}var $n=null;function hd(t){$n===null?$n=[t]:$n.push(t)}function Wg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vt(t,r)}function Vt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tn=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ut(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vt(t,n)}return i=r.interleaved,i===null?(e.next=e,hd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vt(t,n)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xc(t,n)}}function Cf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var i=t.updateQueue;tn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,v=l;switch(h=e,_=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(_,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(_,d,h):g,h==null)break e;d=ne({},d,h);break e;case 2:tn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=_,a=d):c=c.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);tr|=o,t.lanes=o,t.memoizedState=d}}function Sf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ms={},kt=xn(Ms),fs=xn(Ms),ps=xn(Ms);function qn(t){if(t===Ms)throw Error(S(174));return t}function pd(t,e){switch(Q(ps,e),Q(fs,t),Q(kt,Ms),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Iu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Iu(e,t)}X(kt),Q(kt,e)}function Xr(){X(kt),X(fs),X(ps)}function Hg(t){qn(ps.current);var e=qn(kt.current),n=Iu(e,t.type);e!==n&&(Q(fs,t),Q(kt,n))}function md(t){fs.current===t&&(X(kt),X(fs))}var ee=xn(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var za=[];function gd(){for(var t=0;t<za.length;t++)za[t]._workInProgressVersionPrimary=null;za.length=0}var Ro=Kt.ReactCurrentDispatcher,Wa=Kt.ReactCurrentBatchConfig,er=0,te=null,ce=null,ge=null,rl=!1,qi=!1,ms=0,TE=0;function Ie(){throw Error(S(321))}function _d(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vt(t[n],e[n]))return!1;return!0}function vd(t,e,n,r,i,s){if(er=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ro.current=t===null||t.memoizedState===null?PE:xE,t=n(r,i),qi){s=0;do{if(qi=!1,ms=0,25<=s)throw Error(S(301));s+=1,ge=ce=null,e.updateQueue=null,Ro.current=OE,t=n(r,i)}while(qi)}if(Ro.current=il,e=ce!==null&&ce.next!==null,er=0,ge=ce=te=null,rl=!1,e)throw Error(S(300));return t}function yd(){var t=ms!==0;return ms=0,t}function Ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?te.memoizedState=ge=t:ge=ge.next=t,ge}function ot(){if(ce===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ce.next;var e=ge===null?te.memoizedState:ge.next;if(e!==null)ge=e,ce=t;else{if(t===null)throw Error(S(310));ce=t,t={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},ge===null?te.memoizedState=ge=t:ge=ge.next=t}return ge}function gs(t,e){return typeof e=="function"?e(t):e}function Va(t){var e=ot(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((er&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,te.lanes|=c,tr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,vt(r,e.memoizedState)||(Me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,tr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ha(t){var e=ot(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vt(s,e.memoizedState)||(Me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $g(){}function qg(t,e){var n=te,r=ot(),i=e(),s=!vt(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,wd(Qg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,_s(9,Kg.bind(null,n,r,i,e),void 0,null),ye===null)throw Error(S(349));er&30||Gg(n,e,i)}return i}function Gg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kg(t,e,n,r){e.value=n,e.getSnapshot=r,Yg(e)&&Jg(t)}function Qg(t,e,n){return n(function(){Yg(e)&&Jg(t)})}function Yg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vt(t,n)}catch{return!0}}function Jg(t){var e=Vt(t,1);e!==null&&mt(e,t,1,-1)}function If(t){var e=Ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:t},e.queue=t,t=t.dispatch=NE.bind(null,te,t),[e.memoizedState,t]}function _s(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xg(){return ot().memoizedState}function No(t,e,n,r){var i=Ct();te.flags|=t,i.memoizedState=_s(1|e,n,void 0,r===void 0?null:r)}function Hl(t,e,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&_d(r,o.deps)){i.memoizedState=_s(e,n,s,r);return}}te.flags|=t,i.memoizedState=_s(1|e,n,s,r)}function Tf(t,e){return No(8390656,8,t,e)}function wd(t,e){return Hl(2048,8,t,e)}function Zg(t,e){return Hl(4,2,t,e)}function e_(t,e){return Hl(4,4,t,e)}function t_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n_(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,t_.bind(null,e,t),n)}function Ed(){}function r_(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_d(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function i_(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_d(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function s_(t,e,n){return er&21?(vt(n,e)||(n=cg(),te.lanes|=n,tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Me=!0),t.memoizedState=n)}function kE(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=Wa.transition;Wa.transition={};try{t(!1),e()}finally{$=n,Wa.transition=r}}function o_(){return ot().memoizedState}function RE(t,e,n){var r=vn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l_(t))a_(e,n);else if(n=Wg(t,e,n,r),n!==null){var i=Oe();mt(n,t,r,i),u_(n,e,r)}}function NE(t,e,n){var r=vn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l_(t))a_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,vt(l,o)){var a=e.interleaved;a===null?(i.next=i,hd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Wg(t,e,i,r),n!==null&&(i=Oe(),mt(n,t,r,i),u_(n,e,r))}}function l_(t){var e=t.alternate;return t===te||e!==null&&e===te}function a_(t,e){qi=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xc(t,n)}}var il={readContext:st,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},PE={readContext:st,useCallback:function(t,e){return Ct().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:Tf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,No(4194308,4,t_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return No(4194308,4,t,e)},useInsertionEffect:function(t,e){return No(4,2,t,e)},useMemo:function(t,e){var n=Ct();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ct();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RE.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=Ct();return t={current:t},e.memoizedState=t},useState:If,useDebugValue:Ed,useDeferredValue:function(t){return Ct().memoizedState=t},useTransition:function(){var t=If(!1),e=t[0];return t=kE.bind(null,t[1]),Ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=Ct();if(Z){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ye===null)throw Error(S(349));er&30||Gg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tf(Qg.bind(null,r,s,t),[t]),r.flags|=2048,_s(9,Kg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ct(),e=ye.identifierPrefix;if(Z){var n=Lt,r=At;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ms++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xE={readContext:st,useCallback:r_,useContext:st,useEffect:wd,useImperativeHandle:n_,useInsertionEffect:Zg,useLayoutEffect:e_,useMemo:i_,useReducer:Va,useRef:Xg,useState:function(){return Va(gs)},useDebugValue:Ed,useDeferredValue:function(t){var e=ot();return s_(e,ce.memoizedState,t)},useTransition:function(){var t=Va(gs)[0],e=ot().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:qg,useId:o_,unstable_isNewReconciler:!1},OE={readContext:st,useCallback:r_,useContext:st,useEffect:wd,useImperativeHandle:n_,useInsertionEffect:Zg,useLayoutEffect:e_,useMemo:i_,useReducer:Ha,useRef:Xg,useState:function(){return Ha(gs)},useDebugValue:Ed,useDeferredValue:function(t){var e=ot();return ce===null?e.memoizedState=t:s_(e,ce.memoizedState,t)},useTransition:function(){var t=Ha(gs)[0],e=ot().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:qg,useId:o_,unstable_isNewReconciler:!1};function at(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $u(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=vn(t),s=Ut(r,i);s.payload=e,n!=null&&(s.callback=n),e=gn(t,s,i),e!==null&&(mt(e,t,i,r),ko(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=vn(t),s=Ut(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gn(t,s,i),e!==null&&(mt(e,t,i,r),ko(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Oe(),r=vn(t),i=Ut(n,r);i.tag=2,e!=null&&(i.callback=e),e=gn(t,i,r),e!==null&&(mt(e,t,r,n),ko(e,t,r))}};function kf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!us(n,r)||!us(i,s):!0}function c_(t,e,n){var r=!1,i=kn,s=e.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=Be(e)?Xn:Ne.current,r=e.contextTypes,s=(r=r!=null)?Qr(t,i):kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function qu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=Be(e)?Xn:Ne.current,i.context=Qr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($u(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$l.enqueueReplaceState(i,i.state,null),tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zr(t,e){try{var n="",r=e;do n+=s0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $a(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AE=typeof WeakMap=="function"?WeakMap:Map;function d_(t,e,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,rc=r),Gu(t,e)},n}function h_(t,e,n){n=Ut(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gu(t,e),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new AE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qE.bind(null,t,e,n),e.then(t,t))}function Pf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ut(-1,1),e.tag=2,gn(n,e,1))),n.lanes|=1),t)}var LE=Kt.ReactCurrentOwner,Me=!1;function xe(t,e,n,r){e.child=t===null?zg(e,null,n,r):Jr(e,t.child,n,r)}function Of(t,e,n,r,i){n=n.render;var s=e.ref;return Br(e,i),r=vd(t,e,n,r,s,i),n=yd(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ht(t,e,i)):(Z&&n&&od(e),e.flags|=1,xe(t,e,r,i),e.child)}function Af(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,f_(t,e,s,r,i)):(t=Ao(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:us,n(o,r)&&t.ref===e.ref)return Ht(t,e,i)}return e.flags|=1,t=yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function f_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(us(s,r)&&t.ref===e.ref)if(Me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Me=!0);else return e.lanes=t.lanes,Ht(t,e,i)}return Ku(t,e,n,r,i)}function p_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Lr,Ge),Ge|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Lr,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Lr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Lr,Ge),Ge|=r;return xe(t,e,i,n),e.child}function m_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ku(t,e,n,r,i){var s=Be(n)?Xn:Ne.current;return s=Qr(e,s),Br(e,i),n=vd(t,e,n,r,s,i),r=yd(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ht(t,e,i)):(Z&&r&&od(e),e.flags|=1,xe(t,e,n,i),e.child)}function Lf(t,e,n,r,i){if(Be(n)){var s=!0;Yo(e)}else s=!1;if(Br(e,i),e.stateNode===null)Po(t,e),c_(e,n,r),qu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=Be(n)?Xn:Ne.current,u=Qr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Rf(e,o,r,u),tn=!1;var h=e.memoizedState;o.state=h,tl(e,r,o,i),a=e.memoizedState,l!==r||h!==a||je.current||tn?(typeof c=="function"&&($u(e,n,c,r),a=e.memoizedState),(l=tn||kf(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Vg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:at(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=st(a):(a=Be(n)?Xn:Ne.current,a=Qr(e,a));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Rf(e,o,r,a),tn=!1,h=e.memoizedState,o.state=h,tl(e,r,o,i);var g=e.memoizedState;l!==d||h!==g||je.current||tn?(typeof _=="function"&&($u(e,n,_,r),g=e.memoizedState),(u=tn||kf(e,n,u,r,h,g,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Qu(t,e,n,r,s,i)}function Qu(t,e,n,r,i,s){m_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vf(e,n,!1),Ht(t,e,s);r=e.stateNode,LE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Jr(e,t.child,null,s),e.child=Jr(e,null,l,s)):xe(t,e,l,s),e.memoizedState=r.state,i&&vf(e,n,!0),e.child}function g_(t){var e=t.stateNode;e.pendingContext?_f(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_f(t,e.context,!1),pd(t,e.containerInfo)}function Df(t,e,n,r,i){return Yr(),ad(i),e.flags|=256,xe(t,e,n,r),e.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function Ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function __(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ee,i&1),t===null)return Vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,r,0,null),t=Yn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ju(n),e.memoizedState=Yu,t):Cd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return DE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=yn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=yn(l,s):(s=Yn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ju(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yu,r}return s=t.child,t=s.sibling,r=yn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cd(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ho(t,e,n,r){return r!==null&&ad(r),Jr(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$a(Error(S(422))),ho(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Kl({mode:"visible",children:r.children},i,0,null),s=Yn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Jr(e,t.child,null,o),e.child.memoizedState=Ju(o),e.memoizedState=Yu,s);if(!(e.mode&1))return ho(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=$a(s,r,void 0),ho(t,e,o,r)}if(l=(o&t.childLanes)!==0,Me||l){if(r=ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vt(t,i),mt(r,t,i,-1))}return Nd(),r=$a(Error(S(421))),ho(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=GE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ke=mn(i.nextSibling),Qe=e,Z=!0,ct=null,t!==null&&(et[tt++]=At,et[tt++]=Lt,et[tt++]=Zn,At=t.id,Lt=t.overflow,Zn=e),e=Cd(e,r.children),e.flags|=4096,e)}function bf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hu(t.return,e,n)}function qa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function v_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xe(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bf(t,n,e);else if(t.tag===19)bf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qa(e,!0,n,null,s);break;case"together":qa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Po(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ht(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bE(t,e,n){switch(e.tag){case 3:g_(e),Yr();break;case 5:Hg(e);break;case 1:Be(e.type)&&Yo(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?__(t,e,n):(Q(ee,ee.current&1),t=Ht(t,e,n),t!==null?t.sibling:null);Q(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return v_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,p_(t,e,n)}return Ht(t,e,n)}var y_,Xu,w_,E_;y_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xu=function(){};w_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qn(kt.current);var s=null;switch(n){case"input":i=wu(t,i),r=wu(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=Su(t,i),r=Su(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ko)}Tu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ns.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ns.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Y("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};E_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ri(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Te(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ME(t,e,n){var r=e.pendingProps;switch(ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(e),null;case 1:return Be(e.type)&&Qo(),Te(e),null;case 3:return r=e.stateNode,Xr(),X(je),X(Ne),gd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(oc(ct),ct=null))),Xu(t,e),Te(e),null;case 5:md(e);var i=qn(ps.current);if(n=e.type,t!==null&&e.stateNode!=null)w_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Te(e),null}if(t=qn(kt.current),uo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[St]=e,r[hs]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<Ui.length;i++)Y(Ui[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Vh(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":$h(r,s),Y("invalid",r)}Tu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ao(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ao(r.textContent,l,t),i=["children",""+l]):ns.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":eo(r),Hh(r,s,!0);break;case"textarea":eo(r),qh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ko)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[St]=e,t[hs]=r,y_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ku(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ui.length;i++)Y(Ui[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":Vh(t,r),i=wu(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Y("invalid",t);break;case"textarea":$h(t,r),i=Su(t,r),Y("invalid",t);break;default:i=r}Tu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Xm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ym(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&rs(t,a):typeof a=="number"&&rs(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ns.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Y("scroll",t):a!=null&&qc(t,s,a,o))}switch(n){case"input":eo(t),Hh(t,r,!1);break;case"textarea":eo(t),qh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Te(e),null;case 6:if(t&&e.stateNode!=null)E_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=qn(ps.current),qn(kt.current),uo(e)){if(r=e.stateNode,n=e.memoizedProps,r[St]=e,(s=r.nodeValue!==n)&&(t=Qe,t!==null))switch(t.tag){case 3:ao(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ao(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=e,e.stateNode=r}return Te(e),null;case 13:if(X(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&Ke!==null&&e.mode&1&&!(e.flags&128))jg(),Yr(),e.flags|=98560,s=!1;else if(s=uo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[St]=e}else Yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Te(e),s=!1}else ct!==null&&(oc(ct),ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?he===0&&(he=3):Nd())),e.updateQueue!==null&&(e.flags|=4),Te(e),null);case 4:return Xr(),Xu(t,e),t===null&&cs(e.stateNode.containerInfo),Te(e),null;case 10:return dd(e.type._context),Te(e),null;case 17:return Be(e.type)&&Qo(),Te(e),null;case 19:if(X(ee),s=e.memoizedState,s===null)return Te(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ri(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,Ri(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>ei&&(e.flags|=128,r=!0,Ri(s,!1),e.lanes=4194304)}else{if(!r)if(t=nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ri(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return Te(e),null}else 2*oe()-s.renderingStartTime>ei&&n!==1073741824&&(e.flags|=128,r=!0,Ri(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=ee.current,Q(ee,r?n&1|2:n&1),e):(Te(e),null);case 22:case 23:return Rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ge&1073741824&&(Te(e),e.subtreeFlags&6&&(e.flags|=8192)):Te(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function FE(t,e){switch(ld(e),e.tag){case 1:return Be(e.type)&&Qo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xr(),X(je),X(Ne),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(X(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(ee),null;case 4:return Xr(),null;case 10:return dd(e.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var fo=!1,ke=!1,UE=typeof WeakSet=="function"?WeakSet:Set,x=null;function Ar(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function Zu(t,e,n){try{n()}catch(r){re(t,e,r)}}var Mf=!1;function jE(t,e){if(Mu=$o,t=kg(),sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fu={focusedElem:t,selectionRange:n},$o=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,C=g.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:at(e.type,v),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){re(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return g=Mf,Mf=!1,g}function Gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zu(e,n,s)}i=i.next}while(i!==r)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ec(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function C_(t){var e=t.alternate;e!==null&&(t.alternate=null,C_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[St],delete e[hs],delete e[Bu],delete e[EE],delete e[CE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function S_(t){return t.tag===5||t.tag===3||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||S_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ko));else if(r!==4&&(t=t.child,t!==null))for(tc(t,e,n),t=t.sibling;t!==null;)tc(t,e,n),t=t.sibling}function nc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nc(t,e,n),t=t.sibling;t!==null;)nc(t,e,n),t=t.sibling}var we=null,ut=!1;function Yt(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:ke||Ar(n,e);case 6:var r=we,i=ut;we=null,Yt(t,e,n),we=r,ut=i,we!==null&&(ut?(t=we,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(ut?(t=we,n=n.stateNode,t.nodeType===8?ja(t.parentNode,n):t.nodeType===1&&ja(t,n),ls(t)):ja(we,n.stateNode));break;case 4:r=we,i=ut,we=n.stateNode.containerInfo,ut=!0,Yt(t,e,n),we=r,ut=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zu(n,e,o),i=i.next}while(i!==r)}Yt(t,e,n);break;case 1:if(!ke&&(Ar(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,e,l)}Yt(t,e,n);break;case 21:Yt(t,e,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Yt(t,e,n),ke=r):Yt(t,e,n);break;default:Yt(t,e,n)}}function Uf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UE),e.forEach(function(r){var i=KE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:we=l.stateNode,ut=!1;break e;case 3:we=l.stateNode.containerInfo,ut=!0;break e;case 4:we=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(we===null)throw Error(S(160));I_(s,o,i),we=null,ut=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T_(e,t),e=e.sibling}function T_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),Et(t),r&4){try{Gi(3,t,t.return),ql(3,t)}catch(v){re(t,t.return,v)}try{Gi(5,t,t.return)}catch(v){re(t,t.return,v)}}break;case 1:lt(e,t),Et(t),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(lt(e,t),Et(t),r&512&&n!==null&&Ar(n,n.return),t.flags&32){var i=t.stateNode;try{rs(i,"")}catch(v){re(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gm(i,s),ku(l,o);var u=ku(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Xm(i,d):c==="dangerouslySetInnerHTML"?Ym(i,d):c==="children"?rs(i,d):qc(i,c,d,u)}switch(l){case"input":Eu(i,s);break;case"textarea":Km(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Mr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Mr(i,!!s.multiple,s.defaultValue,!0):Mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[hs]=s}catch(v){re(t,t.return,v)}}break;case 6:if(lt(e,t),Et(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){re(t,t.return,v)}}break;case 3:if(lt(e,t),Et(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ls(e.containerInfo)}catch(v){re(t,t.return,v)}break;case 4:lt(e,t),Et(t);break;case 13:lt(e,t),Et(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Td=oe())),r&4&&Uf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ke=(u=ke)||c,lt(e,t),ke=u):lt(e,t),Et(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(d=x=c;x!==null;){switch(h=x,_=h.child,h.tag){case 0:case 11:case 14:case 15:Gi(4,h,h.return);break;case 1:Ar(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){re(r,n,v)}}break;case 5:Ar(h,h.return);break;case 22:if(h.memoizedState!==null){Bf(d);continue}}_!==null?(_.return=h,x=_):Bf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Jm("display",o))}catch(v){re(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){re(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(e,t),Et(t),r&4&&Uf(t);break;case 21:break;default:lt(e,t),Et(t)}}function Et(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(S_(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rs(i,""),r.flags&=-33);var s=Ff(t);nc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ff(t);tc(t,l,o);break;default:throw Error(S(161))}}catch(a){re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BE(t,e,n){x=t,k_(t)}function k_(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ke;l=fo;var u=ke;if(fo=o,(ke=a)&&!u)for(x=i;x!==null;)o=x,a=o.child,o.tag===22&&o.memoizedState!==null?zf(i):a!==null?(a.return=o,x=a):zf(i);for(;s!==null;)x=s,k_(s),s=s.sibling;x=i,fo=l,ke=u}jf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):jf(t)}}function jf(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ke||ql(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ls(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ke||e.flags&512&&ec(e)}catch(h){re(e,e.return,h)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Bf(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function zf(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(a){re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){re(e,i,a)}}var s=e.return;try{ec(e)}catch(a){re(e,s,a)}break;case 5:var o=e.return;try{ec(e)}catch(a){re(e,o,a)}}}catch(a){re(e,e.return,a)}if(e===t){x=null;break}var l=e.sibling;if(l!==null){l.return=e.return,x=l;break}x=e.return}}var zE=Math.ceil,sl=Kt.ReactCurrentDispatcher,Sd=Kt.ReactCurrentOwner,rt=Kt.ReactCurrentBatchConfig,V=0,ye=null,le=null,Ce=0,Ge=0,Lr=xn(0),he=0,vs=null,tr=0,Gl=0,Id=0,Ki=null,be=null,Td=0,ei=1/0,xt=null,ol=!1,rc=null,_n=null,po=!1,cn=null,ll=0,Qi=0,ic=null,xo=-1,Oo=0;function Oe(){return V&6?oe():xo!==-1?xo:xo=oe()}function vn(t){return t.mode&1?V&2&&Ce!==0?Ce&-Ce:IE.transition!==null?(Oo===0&&(Oo=cg()),Oo):(t=$,t!==0||(t=window.event,t=t===void 0?16:_g(t.type)),t):1}function mt(t,e,n,r){if(50<Qi)throw Qi=0,ic=null,Error(S(185));Ls(t,n,r),(!(V&2)||t!==ye)&&(t===ye&&(!(V&2)&&(Gl|=n),he===4&&rn(t,Ce)),ze(t,r),n===1&&V===0&&!(e.mode&1)&&(ei=oe()+500,Vl&&On()))}function ze(t,e){var n=t.callbackNode;I0(t,e);var r=Ho(t,t===ye?Ce:0);if(r===0)n!==null&&Qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qh(n),e===1)t.tag===0?SE(Wf.bind(null,t)):Mg(Wf.bind(null,t)),yE(function(){!(V&6)&&On()}),n=null;else{switch(dg(r)){case 1:n=Jc;break;case 4:n=ag;break;case 16:n=Vo;break;case 536870912:n=ug;break;default:n=Vo}n=D_(n,R_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R_(t,e){if(xo=-1,Oo=0,V&6)throw Error(S(327));var n=t.callbackNode;if(zr()&&t.callbackNode!==n)return null;var r=Ho(t,t===ye?Ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=al(t,r);else{e=r;var i=V;V|=2;var s=P_();(ye!==t||Ce!==e)&&(xt=null,ei=oe()+500,Qn(t,e));do try{HE();break}catch(l){N_(t,l)}while(!0);cd(),sl.current=s,V=i,le!==null?e=0:(ye=null,Ce=0,e=he)}if(e!==0){if(e===2&&(i=Ou(t),i!==0&&(r=i,e=sc(t,i))),e===1)throw n=vs,Qn(t,0),rn(t,r),ze(t,oe()),n;if(e===6)rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!WE(i)&&(e=al(t,r),e===2&&(s=Ou(t),s!==0&&(r=s,e=sc(t,s))),e===1))throw n=vs,Qn(t,0),rn(t,r),ze(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Bn(t,be,xt);break;case 3:if(rn(t,r),(r&130023424)===r&&(e=Td+500-oe(),10<e)){if(Ho(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Oe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ju(Bn.bind(null,t,be,xt),e);break}Bn(t,be,xt);break;case 4:if(rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zE(r/1960))-r,10<r){t.timeoutHandle=ju(Bn.bind(null,t,be,xt),r);break}Bn(t,be,xt);break;case 5:Bn(t,be,xt);break;default:throw Error(S(329))}}}return ze(t,oe()),t.callbackNode===n?R_.bind(null,t):null}function sc(t,e){var n=Ki;return t.current.memoizedState.isDehydrated&&(Qn(t,e).flags|=256),t=al(t,e),t!==2&&(e=be,be=n,e!==null&&oc(e)),t}function oc(t){be===null?be=t:be.push.apply(be,t)}function WE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rn(t,e){for(e&=~Id,e&=~Gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pt(e),r=1<<n;t[n]=-1,e&=~r}}function Wf(t){if(V&6)throw Error(S(327));zr();var e=Ho(t,0);if(!(e&1))return ze(t,oe()),null;var n=al(t,e);if(t.tag!==0&&n===2){var r=Ou(t);r!==0&&(e=r,n=sc(t,r))}if(n===1)throw n=vs,Qn(t,0),rn(t,e),ze(t,oe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bn(t,be,xt),ze(t,oe()),null}function kd(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(ei=oe()+500,Vl&&On())}}function nr(t){cn!==null&&cn.tag===0&&!(V&6)&&zr();var e=V;V|=1;var n=rt.transition,r=$;try{if(rt.transition=null,$=1,t)return t()}finally{$=r,rt.transition=n,V=e,!(V&6)&&On()}}function Rd(){Ge=Lr.current,X(Lr)}function Qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vE(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qo();break;case 3:Xr(),X(je),X(Ne),gd();break;case 5:md(r);break;case 4:Xr();break;case 13:X(ee);break;case 19:X(ee);break;case 10:dd(r.type._context);break;case 22:case 23:Rd()}n=n.return}if(ye=t,le=t=yn(t.current,null),Ce=Ge=e,he=0,vs=null,Id=Gl=tr=0,be=Ki=null,$n!==null){for(e=0;e<$n.length;e++)if(n=$n[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$n=null}return t}function N_(t,e){do{var n=le;try{if(cd(),Ro.current=il,rl){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(er=0,ge=ce=te=null,qi=!1,ms=0,Sd.current=null,n===null||n.return===null){he=1,vs=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ce,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=Pf(o);if(_!==null){_.flags&=-257,xf(_,o,l,s,e),_.mode&1&&Nf(s,u,e),e=_,a=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(a),e.updateQueue=v}else g.add(a);break e}else{if(!(e&1)){Nf(s,u,e),Nd();break e}a=Error(S(426))}}else if(Z&&l.mode&1){var C=Pf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),xf(C,o,l,s,e),ad(Zr(a,l));break e}}s=a=Zr(a,l),he!==4&&(he=2),Ki===null?Ki=[s]:Ki.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=d_(s,a,e);Cf(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_n===null||!_n.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=h_(s,l,e);Cf(s,E);break e}}s=s.return}while(s!==null)}O_(n)}catch(R){e=R,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function P_(){var t=sl.current;return sl.current=il,t===null?il:t}function Nd(){(he===0||he===3||he===2)&&(he=4),ye===null||!(tr&268435455)&&!(Gl&268435455)||rn(ye,Ce)}function al(t,e){var n=V;V|=2;var r=P_();(ye!==t||Ce!==e)&&(xt=null,Qn(t,e));do try{VE();break}catch(i){N_(t,i)}while(!0);if(cd(),V=n,sl.current=r,le!==null)throw Error(S(261));return ye=null,Ce=0,he}function VE(){for(;le!==null;)x_(le)}function HE(){for(;le!==null&&!m0();)x_(le)}function x_(t){var e=L_(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?O_(t):le=e,Sd.current=null}function O_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FE(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,le=null;return}}else if(n=ME(n,e,Ge),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);he===0&&(he=5)}function Bn(t,e,n){var r=$,i=rt.transition;try{rt.transition=null,$=1,$E(t,e,n,r)}finally{rt.transition=i,$=r}return null}function $E(t,e,n,r){do zr();while(cn!==null);if(V&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(T0(t,s),t===ye&&(le=ye=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,D_(Vo,function(){return zr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var o=$;$=1;var l=V;V|=4,Sd.current=null,jE(t,n),T_(n,t),dE(Fu),$o=!!Mu,Fu=Mu=null,t.current=n,BE(n),g0(),V=l,$=o,rt.transition=s}else t.current=n;if(po&&(po=!1,cn=t,ll=i),s=t.pendingLanes,s===0&&(_n=null),y0(n.stateNode),ze(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,t=rc,rc=null,t;return ll&1&&t.tag!==0&&zr(),s=t.pendingLanes,s&1?t===ic?Qi++:(Qi=0,ic=t):Qi=0,On(),null}function zr(){if(cn!==null){var t=dg(ll),e=rt.transition,n=$;try{if(rt.transition=null,$=16>t?16:t,cn===null)var r=!1;else{if(t=cn,cn=null,ll=0,V&6)throw Error(S(331));var i=V;for(V|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:Gi(8,c,s)}var d=c.child;if(d!==null)d.return=c,x=d;else for(;x!==null;){c=x;var h=c.sibling,_=c.return;if(C_(c),c===u){x=null;break}if(h!==null){h.return=_,x=h;break}x=_}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,x=p;break e}x=s.return}}var f=t.current;for(x=f;x!==null;){o=x;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,x=m;else e:for(o=f;x!==null;){if(l=x,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ql(9,l)}}catch(R){re(l,l.return,R)}if(l===o){x=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,x=E;break e}x=l.return}}if(V=i,On(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Ul,t)}catch{}r=!0}return r}finally{$=n,rt.transition=e}}return!1}function Vf(t,e,n){e=Zr(n,e),e=d_(t,e,1),t=gn(t,e,1),e=Oe(),t!==null&&(Ls(t,1,e),ze(t,e))}function re(t,e,n){if(t.tag===3)Vf(t,t,n);else for(;e!==null;){if(e.tag===3){Vf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){t=Zr(n,t),t=h_(e,t,1),e=gn(e,t,1),t=Oe(),e!==null&&(Ls(e,1,t),ze(e,t));break}}e=e.return}}function qE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Oe(),t.pingedLanes|=t.suspendedLanes&n,ye===t&&(Ce&n)===n&&(he===4||he===3&&(Ce&130023424)===Ce&&500>oe()-Td?Qn(t,0):Id|=n),ze(t,e)}function A_(t,e){e===0&&(t.mode&1?(e=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):e=1);var n=Oe();t=Vt(t,e),t!==null&&(Ls(t,e,n),ze(t,n))}function GE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),A_(t,n)}function KE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),A_(t,n)}var L_;L_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||je.current)Me=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Me=!1,bE(t,e,n);Me=!!(t.flags&131072)}else Me=!1,Z&&e.flags&1048576&&Fg(e,Xo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Po(t,e),t=e.pendingProps;var i=Qr(e,Ne.current);Br(e,n),i=vd(null,e,r,t,i,n);var s=yd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Be(r)?(s=!0,Yo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fd(e),i.updater=$l,e.stateNode=i,i._reactInternals=e,qu(e,r,t,n),e=Qu(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&od(e),xe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Po(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=YE(r),t=at(r,t),i){case 0:e=Ku(null,e,r,t,n);break e;case 1:e=Lf(null,e,r,t,n);break e;case 11:e=Of(null,e,r,t,n);break e;case 14:e=Af(null,e,r,at(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Ku(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Lf(t,e,r,i,n);case 3:e:{if(g_(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Vg(t,e),tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zr(Error(S(423)),e),e=Df(t,e,r,n,i);break e}else if(r!==i){i=Zr(Error(S(424)),e),e=Df(t,e,r,n,i);break e}else for(Ke=mn(e.stateNode.containerInfo.firstChild),Qe=e,Z=!0,ct=null,n=zg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){e=Ht(t,e,n);break e}xe(t,e,r,n)}e=e.child}return e;case 5:return Hg(e),t===null&&Vu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uu(r,i)?o=null:s!==null&&Uu(r,s)&&(e.flags|=32),m_(t,e),xe(t,e,o,n),e.child;case 6:return t===null&&Vu(e),null;case 13:return __(t,e,n);case 4:return pd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Jr(e,null,r,n):xe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Of(t,e,r,i,n);case 7:return xe(t,e,e.pendingProps,n),e.child;case 8:return xe(t,e,e.pendingProps.children,n),e.child;case 12:return xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Zo,r._currentValue),r._currentValue=o,s!==null)if(vt(s.value,o)){if(s.children===i.children&&!je.current){e=Ht(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ut(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Hu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Br(e,n),i=st(i),r=r(i),e.flags|=1,xe(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),Af(t,e,r,i,n);case 15:return f_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Po(t,e),e.tag=1,Be(r)?(t=!0,Yo(e)):t=!1,Br(e,n),c_(e,r,i),qu(e,r,i,n),Qu(null,e,r,!0,t,n);case 19:return v_(t,e,n);case 22:return p_(t,e,n)}throw Error(S(156,e.tag))};function D_(t,e){return lg(t,e)}function QE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,n,r){return new QE(t,e,n,r)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YE(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kc)return 11;if(t===Qc)return 14}return 2}function yn(t,e){var n=t.alternate;return n===null?(n=nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ao(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Sr:return Yn(n.children,i,s,e);case Gc:o=8,i|=8;break;case gu:return t=nt(12,n,e,i|2),t.elementType=gu,t.lanes=s,t;case _u:return t=nt(13,n,e,i),t.elementType=_u,t.lanes=s,t;case vu:return t=nt(19,n,e,i),t.elementType=vu,t.lanes=s,t;case Hm:return Kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wm:o=10;break e;case Vm:o=9;break e;case Kc:o=11;break e;case Qc:o=14;break e;case en:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yn(t,e,n,r){return t=nt(7,t,r,e),t.lanes=n,t}function Kl(t,e,n,r){return t=nt(22,t,r,e),t.elementType=Hm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ga(t,e,n){return t=nt(6,t,null,e),t.lanes=n,t}function Ka(t,e,n){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Na(0),this.expirationTimes=Na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Na(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xd(t,e,n,r,i,s,o,l,a){return t=new JE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(s),t}function XE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function b_(t){if(!t)return kn;t=t._reactInternals;e:{if(fr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Be(n))return bg(t,n,e)}return e}function M_(t,e,n,r,i,s,o,l,a){return t=xd(n,r,!0,t,i,s,o,l,a),t.context=b_(null),n=t.current,r=Oe(),i=vn(n),s=Ut(r,i),s.callback=e??null,gn(n,s,i),t.current.lanes=i,Ls(t,i,r),ze(t,r),t}function Ql(t,e,n,r){var i=e.current,s=Oe(),o=vn(i);return n=b_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ut(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gn(i,e,o),t!==null&&(mt(t,i,o,s),ko(t,i,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Od(t,e){Hf(t,e),(t=t.alternate)&&Hf(t,e)}function ZE(){return null}var F_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}Yl.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Ql(t,e,null,null)};Yl.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nr(function(){Ql(null,t,null,null)}),e[Wt]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nn.length&&e!==0&&e<nn[n].priority;n++);nn.splice(n,0,t),n===0&&gg(t)}};function Ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $f(){}function eC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ul(o);s.call(u)}}var o=M_(e,r,t,0,null,!1,!1,"",$f);return t._reactRootContainer=o,t[Wt]=o.current,cs(t.nodeType===8?t.parentNode:t),nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ul(a);l.call(u)}}var a=xd(t,0,!1,null,null,!1,!1,"",$f);return t._reactRootContainer=a,t[Wt]=a.current,cs(t.nodeType===8?t.parentNode:t),nr(function(){Ql(e,a,n,r)}),a}function Xl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=ul(o);l.call(a)}}Ql(e,o,t,i)}else o=eC(n,e,t,i,r);return ul(o)}hg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fi(e.pendingLanes);n!==0&&(Xc(e,n|1),ze(e,oe()),!(V&6)&&(ei=oe()+500,On()))}break;case 13:nr(function(){var r=Vt(t,1);if(r!==null){var i=Oe();mt(r,t,1,i)}}),Od(t,1)}};Zc=function(t){if(t.tag===13){var e=Vt(t,134217728);if(e!==null){var n=Oe();mt(e,t,134217728,n)}Od(t,134217728)}};fg=function(t){if(t.tag===13){var e=vn(t),n=Vt(t,e);if(n!==null){var r=Oe();mt(n,t,e,r)}Od(t,e)}};pg=function(){return $};mg=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};Nu=function(t,e,n){switch(e){case"input":if(Eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wl(r);if(!i)throw Error(S(90));qm(r),Eu(r,i)}}}break;case"textarea":Km(t,n);break;case"select":e=n.value,e!=null&&Mr(t,!!n.multiple,e,!1)}};tg=kd;ng=nr;var tC={usingClientEntryPoint:!1,Events:[bs,Rr,Wl,Zm,eg,kd]},Ni={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nC={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||ZE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Ul=mo.inject(nC),Tt=mo}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tC;Je.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ld(e))throw Error(S(200));return XE(t,e,null,n)};Je.createRoot=function(t,e){if(!Ld(t))throw Error(S(299));var n=!1,r="",i=F_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xd(t,1,!1,null,null,n,!1,r,i),t[Wt]=e.current,cs(t.nodeType===8?t.parentNode:t),new Ad(e)};Je.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=sg(e),t=t===null?null:t.stateNode,t};Je.flushSync=function(t){return nr(t)};Je.hydrate=function(t,e,n){if(!Jl(e))throw Error(S(200));return Xl(null,t,e,!0,n)};Je.hydrateRoot=function(t,e,n){if(!Ld(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=F_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M_(e,null,t,1,n??null,i,!1,s,o),t[Wt]=e.current,cs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yl(e)};Je.render=function(t,e,n){if(!Jl(e))throw Error(S(200));return Xl(null,t,e,!1,n)};Je.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(S(40));return t._reactRootContainer?(nr(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};Je.unstable_batchedUpdates=kd;Je.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Xl(t,e,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function U_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U_)}catch(t){console.error(t)}}U_(),Um.exports=Je;var rC=Um.exports,qf=rC;pu.createRoot=qf.createRoot,pu.hydrateRoot=qf.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ys.apply(this,arguments)}var dn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(dn||(dn={}));const Gf="popstate";function iC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return lc("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cl(i)}return oC(e,n,null,t)}function ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function j_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sC(){return Math.random().toString(36).substr(2,8)}function Kf(t,e){return{usr:t.state,key:t.key,idx:e}}function lc(t,e,n,r){return n===void 0&&(n=null),ys({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ui(e):e,{state:n,key:e&&e.key||r||sC()})}function cl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ui(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function oC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=dn.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(ys({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=dn.Pop;let C=c(),p=C==null?null:C-u;u=C,a&&a({action:l,location:v.location,delta:p})}function h(C,p){l=dn.Push;let f=lc(v.location,C,p);u=c()+1;let m=Kf(f,u),E=v.createHref(f);try{o.pushState(m,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(E)}s&&a&&a({action:l,location:v.location,delta:1})}function _(C,p){l=dn.Replace;let f=lc(v.location,C,p);u=c();let m=Kf(f,u),E=v.createHref(f);o.replaceState(m,"",E),s&&a&&a({action:l,location:v.location,delta:0})}function g(C){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof C=="string"?C:cl(C);return f=f.replace(/ $/,"%20"),ae(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Gf,d),a=C,()=>{i.removeEventListener(Gf,d),a=null}},createHref(C){return e(i,C)},createURL:g,encodeLocation(C){let p=g(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:_,go(C){return o.go(C)}};return v}var Qf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Qf||(Qf={}));function lC(t,e,n){return n===void 0&&(n="/"),aC(t,e,n,!1)}function aC(t,e,n,r){let i=typeof e=="string"?ui(e):e,s=Dd(i.pathname||"/",n);if(s==null)return null;let o=B_(t);uC(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=wC(s);l=vC(o[a],u,r)}return l}function B_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(ae(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=wn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),B_(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:gC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of z_(s.path))i(s,o,a)}),e}function z_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=z_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function uC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_C(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cC=/^:[\w-]+$/,dC=3,hC=2,fC=1,pC=10,mC=-2,Yf=t=>t==="*";function gC(t,e){let n=t.split("/"),r=n.length;return n.some(Yf)&&(r+=mC),e&&(r+=hC),n.filter(i=>!Yf(i)).reduce((i,s)=>i+(cC.test(s)?dC:s===""?fC:pC),r)}function _C(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,c=s==="/"?e:e.slice(s.length)||"/",d=Jf({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c),h=a.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Jf({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:wn([s,d.pathname]),pathnameBase:IC(wn([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=wn([s,d.pathnameBase]))}return o}function Jf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:_}=c;if(h==="*"){let v=l[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const g=l[d];return _&&!g?u[h]=void 0:u[h]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function yC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),j_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function wC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return j_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Dd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function EC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ui(t):t;return{pathname:n?n.startsWith("/")?n:CC(n,e):e,search:TC(r),hash:kC(i)}}function CC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function SC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function W_(t,e){let n=SC(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function V_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ui(t):(i=ys({},t),ae(!i.pathname||!i.pathname.includes("?"),Qa("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),Qa("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),Qa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=EC(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const wn=t=>t.join("/").replace(/\/\/+/g,"/"),IC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),TC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function RC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const H_=["post","put","patch","delete"];new Set(H_);const NC=["get",...H_];new Set(NC);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ws(){return ws=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ws.apply(this,arguments)}const bd=k.createContext(null),PC=k.createContext(null),pr=k.createContext(null),Zl=k.createContext(null),An=k.createContext({outlet:null,matches:[],isDataRoute:!1}),$_=k.createContext(null);function xC(t,e){let{relative:n}=e===void 0?{}:e;Fs()||ae(!1);let{basename:r,navigator:i}=k.useContext(pr),{hash:s,pathname:o,search:l}=G_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:wn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Fs(){return k.useContext(Zl)!=null}function ea(){return Fs()||ae(!1),k.useContext(Zl).location}function q_(t){k.useContext(pr).static||k.useLayoutEffect(t)}function OC(){let{isDataRoute:t}=k.useContext(An);return t?$C():AC()}function AC(){Fs()||ae(!1);let t=k.useContext(bd),{basename:e,future:n,navigator:r}=k.useContext(pr),{matches:i}=k.useContext(An),{pathname:s}=ea(),o=JSON.stringify(W_(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return q_(()=>{l.current=!0}),k.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=V_(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:wn([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function LC(){let{matches:t}=k.useContext(An),e=t[t.length-1];return e?e.params:{}}function G_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=k.useContext(pr),{matches:i}=k.useContext(An),{pathname:s}=ea(),o=JSON.stringify(W_(i,r.v7_relativeSplatPath));return k.useMemo(()=>V_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function DC(t,e){return bC(t,e)}function bC(t,e,n,r){Fs()||ae(!1);let{navigator:i}=k.useContext(pr),{matches:s}=k.useContext(An),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=ea(),c;if(e){var d;let C=typeof e=="string"?ui(e):e;a==="/"||(d=C.pathname)!=null&&d.startsWith(a)||ae(!1),c=C}else c=u;let h=c.pathname||"/",_=h;if(a!=="/"){let C=a.replace(/^\//,"").split("/");_="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let g=lC(t,{pathname:_}),v=BC(g&&g.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:wn([a,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:wn([a,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&v?k.createElement(Zl.Provider,{value:{location:ws({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:dn.Pop}},v):v}function MC(){let t=HC(),e=RC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const FC=k.createElement(MC,null);class UC extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(An.Provider,{value:this.props.routeContext},k.createElement($_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jC(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(bd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(An.Provider,{value:e},r)}function BC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let c=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||ae(!1),o=o.slice(0,Math.min(o.length,c+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:_}=n,g=d.route.loader&&h[d.route.id]===void 0&&(!_||_[d.route.id]===void 0);if(d.route.lazy||g){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let _,g=!1,v=null,C=null;n&&(_=l&&d.route.id?l[d.route.id]:void 0,v=d.route.errorElement||FC,a&&(u<0&&h===0?(g=!0,C=null):u===h&&(g=!0,C=d.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let m;return _?m=v:g?m=C:d.route.Component?m=k.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=c,k.createElement(jC,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?k.createElement(UC,{location:n.location,revalidation:n.revalidation,component:v,error:_,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var K_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(K_||{}),dl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(dl||{});function zC(t){let e=k.useContext(bd);return e||ae(!1),e}function WC(t){let e=k.useContext(PC);return e||ae(!1),e}function VC(t){let e=k.useContext(An);return e||ae(!1),e}function Q_(t){let e=VC(),n=e.matches[e.matches.length-1];return n.route.id||ae(!1),n.route.id}function HC(){var t;let e=k.useContext($_),n=WC(dl.UseRouteError),r=Q_(dl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function $C(){let{router:t}=zC(K_.UseNavigateStable),e=Q_(dl.UseNavigateStable),n=k.useRef(!1);return q_(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ws({fromRouteId:e},s)))},[t,e])}function zn(t){ae(!1)}function qC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:s,static:o=!1,future:l}=t;Fs()&&ae(!1);let a=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:a,navigator:s,static:o,future:ws({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=ui(r));let{pathname:c="/",search:d="",hash:h="",state:_=null,key:g="default"}=r,v=k.useMemo(()=>{let C=Dd(c,a);return C==null?null:{location:{pathname:C,search:d,hash:h,state:_,key:g},navigationType:i}},[a,c,d,h,_,g,i]);return v==null?null:k.createElement(pr.Provider,{value:u},k.createElement(Zl.Provider,{children:n,value:v}))}function GC(t){let{children:e,location:n}=t;return DC(ac(e),n)}new Promise(()=>{});function ac(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,ac(r.props.children,s));return}r.type!==zn&&ae(!1),!r.props.index||!r.props.children||ae(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ac(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uc(){return uc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uc.apply(this,arguments)}function KC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function QC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YC(t,e){return t.button===0&&(!e||e==="_self")&&!QC(t)}const JC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],XC="6";try{window.__reactRouterVersion=XC}catch{}const ZC="startTransition",Xf=qw[ZC];function eS(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=iC({window:i,v5Compat:!0}));let o=s.current,[l,a]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=k.useCallback(d=>{u&&Xf?Xf(()=>a(d)):a(d)},[a,u]);return k.useLayoutEffect(()=>o.listen(c),[o,c]),k.createElement(qC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const tS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Er=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=KC(e,JC),{basename:_}=k.useContext(pr),g,v=!1;if(typeof u=="string"&&nS.test(u)&&(g=u,tS))try{let m=new URL(window.location.href),E=u.startsWith("//")?new URL(m.protocol+u):new URL(u),R=Dd(E.pathname,_);E.origin===m.origin&&R!=null?u=R+E.search+E.hash:v=!0}catch{}let C=xC(u,{relative:i}),p=rS(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i,unstable_viewTransition:d});function f(m){r&&r(m),m.defaultPrevented||p(m)}return k.createElement("a",uc({},h,{href:g||C,onClick:v||s?r:f,ref:n,target:a}))});var Zf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Zf||(Zf={}));var ep;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ep||(ep={}));function rS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=OC(),u=ea(),c=G_(t,{relative:o});return k.useCallback(d=>{if(YC(d,n)){d.preventDefault();let h=r!==void 0?r:cl(u)===cl(c);a(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,c,r,i,n,t,s,o,l])}const iS="_main_wzv60_1",sS="_divDescrip_wzv60_10",oS="_divTxt_wzv60_21",lS="_divImg_wzv60_25",aS="_imgHome_wzv60_29",vr={main:iS,divDescrip:sS,divTxt:oS,divImg:lS,imgHome:aS};function uS(){return y.jsx(y.Fragment,{children:y.jsxs("div",{className:vr.main,children:[y.jsx("div",{className:vr.divTitulo,children:y.jsx("h1",{children:"Create CV"})}),y.jsxs("div",{className:vr.divDescrip,children:[y.jsx("div",{className:vr.divTxt,children:y.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})}),y.jsx("div",{className:vr.divImg,children:y.jsx("img",{src:"https://www.cvmaker.com.mx/shared/images/illustrations/active/blog-category/all.svg",alt:"",className:vr.imgHome})})]})]})})}const cS="_divProduct_9kshx_1",dS="_ulCards_9kshx_10",hS="_headerProducto_9kshx_21",fS="_imgHeader_9kshx_36",go={divProduct:cS,ulCards:dS,headerProducto:hS,imgHeader:fS},pS="_contCard_2ktth_1",mS="_divBtn_2ktth_17",gS="_btnCard_2ktth_25",_S="_imgCard_2ktth_35",vS="_txtIntro_2ktth_41",yr={contCard:pS,divBtn:mS,btnCard:gS,imgCard:_S,txtIntro:vS},Pt=k.createContext();function yS(t){const{id:e,nombre:n,descripcion:r,img:i,intro:s,precio:o}=t,{agregarCarrito:l,carrito:a,curriculums:u}=k.useContext(Pt),c=()=>{const d=parseFloat(o)||0;if(l({id:e,nombre:n,descripcion:r,img:i,intro:s,precio:d}),a)return a.map(h=>h.nombre==n?{...h,quantity:h.quantity+1}:h)};return y.jsx(y.Fragment,{children:y.jsxs("div",{className:yr.contCard,children:[y.jsx("img",{src:i,alt:"",className:yr.imgCard}),y.jsxs("h4",{children:[" ",n," "]}),y.jsxs("p",{className:yr.txtIntro,children:[" ",s," "]}),y.jsxs("p",{children:[" $ ",o," "]}),y.jsxs("div",{className:yr.divBtn,children:[y.jsx("button",{className:yr.btnCard,children:y.jsx(Er,{to:"/productos/*",children:"Ver Detalle"})}),y.jsx("button",{className:yr.btnCard,onClick:c,children:"Agregar al carrito"})]})]})})}const wS="_navbar_1qyw0_1",ES="_navUl_1qyw0_12",CS="_contPaginas_1qyw0_24",SS="_contMiCuenta_1qyw0_29",IS="_elementoNav_1qyw0_35",TS="_textNav_1qyw0_40",kS="_divIconCarrito_1qyw0_43",RS="_iconCarrito_1qyw0_53",NS="_divQProductos_1qyw0_59",PS="_txtNCarrito_1qyw0_72",pe={navbar:wS,navUl:ES,contPaginas:CS,contMiCuenta:SS,elementoNav:IS,textNav:TS,divIconCarrito:kS,iconCarrito:RS,divQProductos:NS,txtNCarrito:PS};function xS(){const{carrito:t,curriculum:e}=k.useContext(Pt),n=t.length;return y.jsx(y.Fragment,{children:y.jsx("header",{children:y.jsx("nav",{className:pe.navbar,children:y.jsxs("ul",{className:pe.navUl,children:[y.jsxs("div",{className:pe.contPaginas,children:[y.jsx("li",{className:pe.elementoNav,children:y.jsx(Er,{className:pe.textNav,to:"/",children:"Home"})}),y.jsx("li",{className:pe.elementoNav,children:y.jsx(Er,{className:pe.textNav,to:"/somos",children:"Quienes Somos"})}),y.jsx("li",{className:pe.elementoNav,children:y.jsx(Er,{className:pe.textNav,to:"/productos",children:"Modelos"})})]}),y.jsxs("div",{className:pe.contMiCuenta,children:[y.jsx("li",{className:pe.elementoNav,children:y.jsx(Er,{className:pe.textNav,to:"/cliente",children:"Mi Cuenta"})}),y.jsx("li",{className:pe.elementoNav,children:y.jsx(Er,{className:pe.textNav,to:"/carrito",children:y.jsxs("div",{className:pe.divIconCarrito,children:[y.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3144/3144456.png",alt:"",className:pe.iconCarrito}),y.jsx("div",{className:pe.divQProductos,children:y.jsxs("p",{className:pe.txtNCarrito,children:[n," "]})})]})})})]})]})})})})}function OS(){const{curriculums:t,traerCurriculums:e}=k.useContext(Pt);return k.useEffect(()=>{e(),console.log("productos recibidos",t)},[]),y.jsx(y.Fragment,{children:y.jsxs("div",{className:go.divProduct,children:[y.jsxs("div",{className:go.headerProducto,children:[y.jsx("h1",{children:"Modelos de CV"}),y.jsx("img",{src:"https://www.cvmaker.com.mx/static/9afa6a7334779327565f7b1504153efa/04_photo-on-a-cv.png",alt:"",className:go.imgHeader})]}),y.jsx("ul",{className:go.ulCards,children:t.map(n=>k.createElement(yS,{...n,key:n.nombre}))})]})})}const AS="_main_1jeuc_1",LS="_contTitulo_1jeuc_11",DS="_TituloEP_1jeuc_21",Pi={main:AS,contTitulo:LS,TituloEP:DS},bS="_btnDeslogueo_1w0b9_1",MS="_contenedorCrarCuenta_1w0b9_11",FS="_imputLog_1w0b9_26",US="_divLog_1w0b9_34",jS="_txtlink_1w0b9_45",BS="_divImg_1w0b9_54",zS="_imagen_1w0b9_63",$e={btnDeslogueo:bS,contenedorCrarCuenta:MS,imputLog:FS,divLog:US,txtlink:jS,divImg:BS,imagen:zS};function WS(t){const[e,n]=k.useState(!1),{crearUsuario:r,setEmail:i,setPass:s,setNombre:o,logueoUsuario:l}=k.useContext(Pt),a=()=>{n(!e)},u=()=>{r()},c=()=>{l()},d=h=>{h.target.name=="usuario"?(i(h.target.value),h.target.name=="nombre"&&o(h.target.value)):s(h.target.value)};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:$e.contenedorCrarCuenta,children:e?y.jsxs(y.Fragment,{children:[y.jsx("h4",{children:"Completá tus datos "}),y.jsxs("div",{className:$e.divLog,children:[y.jsx("input",{type:"text",name:"nombre",placeholder:"Nombre completo",className:$e.imputLog,onChange:d}),y.jsx("input",{type:"text",name:"usuario",placeholder:"Mi email",className:$e.imputLog,onChange:d}),y.jsx("input",{type:"password",name:"contraseña",placeholder:"Mi contraseña",className:$e.imputLog,onChange:d}),y.jsx("button",{onClick:u,className:$e.btnDeslogueo,children:"Crear cuenta"})]})]}):y.jsxs(y.Fragment,{children:[y.jsx("h4",{children:"Logueate "}),y.jsxs("div",{className:$e.divLog,children:[y.jsx("input",{type:"text",name:"usuario",placeholder:"Mi email",className:$e.imputLog,onChange:d}),y.jsx("input",{type:"password",name:"contraseña",placeholder:"Mi contraseña",className:$e.imputLog,onChange:d}),y.jsx("button",{onClick:c,className:$e.btnDeslogueo,children:"Logueate"})," ",y.jsx("p",{onClick:a,className:$e.txtlink,children:"Aun no tengo crenta"})]})]})}),y.jsx("div",{className:$e.divImg,children:y.jsx("img",{src:"https://www.cvmaker.com.mx/shared/images/illustrations/active/BuildCV.svg",alt:"",width:"400px",height:"400px",className:$e.imagen})})]})}const VS="_btnDeslogueo_ag4pj_1",HS={btnDeslogueo:VS};function $S(){const{desloguearUsuario:t,email:e}=k.useContext(Pt),n=()=>{t()};return y.jsxs(y.Fragment,{children:[y.jsx("h3",{children:"Cntenido Exclusivo"}),y.jsx("button",{onClick:n,className:HS.btnDeslogueo,children:"Desloguearse"})]})}function qS(){const{logueado:t,email:e}=k.useContext(Pt);return y.jsx(y.Fragment,{children:y.jsx("section",{className:Pi.main,children:t?y.jsxs(y.Fragment,{children:[y.jsx("div",{className:Pi.contTitulo,children:y.jsxs("h1",{className:Pi.TituloEP,children:["Bienvenido ",e," "]})}),y.jsx($S,{})]}):y.jsxs(y.Fragment,{children:[y.jsx("div",{className:Pi.contTitulo,children:y.jsx("h1",{className:Pi.TituloEP,children:"Mi Cuenta "})}),y.jsx(WS,{})]})})})}const GS="_main_1pu01_1",KS={main:GS};function QS(){return y.jsx(y.Fragment,{children:y.jsx("div",{className:KS.main,children:y.jsx("h1",{children:"Quienes Somos"})})})}const YS="_footer_g6far_1",JS={footer:YS};function XS(){return y.jsx(y.Fragment,{children:y.jsx("footer",{className:JS.footer,children:y.jsx("p",{children:"CopyRigth @Yomeliflua"})})})}function ZS(t){const{children:e}=t;return y.jsxs(y.Fragment,{children:[y.jsx(xS,{}),e,y.jsx(XS,{})]})}var tp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw ci(e)},ci=function(t){return new Error("Firebase Database ("+Y_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[c],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(J_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new tI;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X_=function(t){const e=J_(t);return Md.encodeByteArray(e,!0)},hl=function(t){return X_(t).replace(/\./g,"")},fl=function(t){try{return Md.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){return Z_(void 0,t)}function Z_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rI(n)||(t[n]=Z_(t[n],e[n]));return t}function rI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=()=>iI().__FIREBASE_DEFAULTS__,oI=()=>{if(typeof process>"u"||typeof tp>"u")return;const t=tp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fl(t[1]);return e&&JSON.parse(e)},Fd=()=>{try{return sI()||oI()||lI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ev=t=>{var e,n;return(n=(e=Fd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aI=t=>{const e=ev(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tv=()=>{var t;return(t=Fd())===null||t===void 0?void 0:t.config},nv=t=>{var e;return(e=Fd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hl(JSON.stringify(n)),hl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function cI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dI(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iv(){return Y_.NODE_ADMIN===!0}function hI(){try{return typeof indexedDB=="object"}catch{return!1}}function fI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pI,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,l,r)}}function mI(t,e){return t.replace(gI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Es(fl(s[0])||""),n=Es(fl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},_I=function(t){const e=sv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vI=function(t){const e=sv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ml(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(np(s)&&np(o)){if(!ml(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function wI(t,e){const n=new EI(t,e);return n.subscribe.bind(n)}class EI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ya),i.error===void 0&&(i.error=Ya),i.complete===void 0&&(i.complete=Ya);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ya(){}function jd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},na=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ta;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kI(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TI(t){return t===Wn?void 0:t}function kI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new II(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const NI={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},PI=q.INFO,xI={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},OI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=PI,this._logHandler=OI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const AI=(t,e)=>e.some(n=>t instanceof n);let rp,ip;function LI(){return rp||(rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DI(){return ip||(ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ov=new WeakMap,dc=new WeakMap,lv=new WeakMap,Ja=new WeakMap,zd=new WeakMap;function bI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(En(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ov.set(n,t)}).catch(()=>{}),zd.set(e,t),e}function MI(t){if(dc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dc.set(t,e)}let hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FI(t){hc=t(hc)}function UI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xa(this),e,...n);return lv.set(r,e.sort?e.sort():[e]),En(r)}:DI().includes(t)?function(...e){return t.apply(Xa(this),e),En(ov.get(this))}:function(...e){return En(t.apply(Xa(this),e))}}function jI(t){return typeof t=="function"?UI(t):(t instanceof IDBTransaction&&MI(t),AI(t,LI())?new Proxy(t,hc):t)}function En(t){if(t instanceof IDBRequest)return bI(t);if(Ja.has(t))return Ja.get(t);const e=jI(t);return e!==t&&(Ja.set(t,e),zd.set(e,t)),e}const Xa=t=>zd.get(t);function BI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=En(o);return r&&o.addEventListener("upgradeneeded",a=>{r(En(o.result),a.oldVersion,a.newVersion,En(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const zI=["get","getKey","getAll","getAllKeys","count"],WI=["put","add","delete","clear"],Za=new Map;function sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Za.get(e))return Za.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zI.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Za.set(e,s),s}FI(t=>({...t,get:(e,n,r)=>sp(e,n)||t.get(e,n,r),has:(e,n)=>!!sp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fc="@firebase/app",op="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Bd("@firebase/app"),$I="@firebase/app-compat",qI="@firebase/analytics-compat",GI="@firebase/analytics",KI="@firebase/app-check-compat",QI="@firebase/app-check",YI="@firebase/auth",JI="@firebase/auth-compat",XI="@firebase/database",ZI="@firebase/database-compat",eT="@firebase/functions",tT="@firebase/functions-compat",nT="@firebase/installations",rT="@firebase/installations-compat",iT="@firebase/messaging",sT="@firebase/messaging-compat",oT="@firebase/performance",lT="@firebase/performance-compat",aT="@firebase/remote-config",uT="@firebase/remote-config-compat",cT="@firebase/storage",dT="@firebase/storage-compat",hT="@firebase/firestore",fT="@firebase/vertexai-preview",pT="@firebase/firestore-compat",mT="firebase",gT="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="[DEFAULT]",_T={[fc]:"fire-core",[$I]:"fire-core-compat",[GI]:"fire-analytics",[qI]:"fire-analytics-compat",[QI]:"fire-app-check",[KI]:"fire-app-check-compat",[YI]:"fire-auth",[JI]:"fire-auth-compat",[XI]:"fire-rtdb",[ZI]:"fire-rtdb-compat",[eT]:"fire-fn",[tT]:"fire-fn-compat",[nT]:"fire-iid",[rT]:"fire-iid-compat",[iT]:"fire-fcm",[sT]:"fire-fcm-compat",[oT]:"fire-perf",[lT]:"fire-perf-compat",[aT]:"fire-rc",[uT]:"fire-rc-compat",[cT]:"fire-gcs",[dT]:"fire-gcs-compat",[hT]:"fire-fst",[pT]:"fire-fst-compat",[fT]:"fire-vertex","fire-js":"fire-js",[mT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Map,vT=new Map,mc=new Map;function lp(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(mc.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,t);for(const n of gl.values())lp(n,t);for(const n of vT.values())lp(n,t);return!0}function Wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function It(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new Us("app","Firebase",yT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=gT;function av(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cn.create("bad-app-name",{appName:String(i)});if(n||(n=tv()),!n)throw Cn.create("no-options");const s=gl.get(i);if(s){if(ml(n,s.options)&&ml(r,s.config))return s;throw Cn.create("duplicate-app",{appName:i})}const o=new RI(i);for(const a of mc.values())o.addComponent(a);const l=new wT(n,r,o);return gl.set(i,l),l}function uv(t=pc){const e=gl.get(t);if(!e&&t===pc&&tv())return av();if(!e)throw Cn.create("no-app",{appName:t});return e}function Sn(t,e,n){var r;let i=(r=_T[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(l.join(" "));return}ni(new rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="firebase-heartbeat-database",CT=1,Cs="firebase-heartbeat-store";let eu=null;function cv(){return eu||(eu=BI(ET,CT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),eu}async function ST(t){try{const n=(await cv()).transaction(Cs),r=await n.objectStore(Cs).get(dv(t));return await n.done,r}catch(e){if(e instanceof Ln)ir.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function ap(t,e){try{const r=(await cv()).transaction(Cs,"readwrite");await r.objectStore(Cs).put(e,dv(t)),await r.done}catch(n){if(n instanceof Ln)ir.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function dv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=1024,TT=30*24*60*60*1e3;class kT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=up();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=TT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=up(),{heartbeatsToSend:r,unsentEntries:i}=RT(this._heartbeatsCache.heartbeats),s=hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function up(){return new Date().toISOString().substring(0,10)}function RT(t,e=IT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hI()?fI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ST(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cp(t){return hl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){ni(new rr("platform-logger",e=>new VI(e),"PRIVATE")),ni(new rr("heartbeat",e=>new kT(e),"PRIVATE")),Sn(fc,op,t),Sn(fc,op,"esm2017"),Sn("fire-js","")}PT("");var xT="firebase",OT="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(xT,OT,"app");const AT="TRAER CV",LT="AGREGAR_CV_CARRITO",DT="ELIMINAR_CV_CARRITO";function bT(t,e){const{payload:n,type:r}=e;switch(r){case AT:return{...t,curriculums:n};case LT:return{...t,carrito:[...t.carrito,n]};case DT:return{...t,carrito:t.carrito.filter(i=>i.nombre!==n.nombre)};default:return t}}function hv(t,e){return function(){return t.apply(e,arguments)}}const{toString:MT}=Object.prototype,{getPrototypeOf:Vd}=Object,ra=(t=>e=>{const n=MT.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),wt=t=>(t=t.toLowerCase(),e=>ra(e)===t),ia=t=>e=>typeof e===t,{isArray:fi}=Array,Ss=ia("undefined");function FT(t){return t!==null&&!Ss(t)&&t.constructor!==null&&!Ss(t.constructor)&&it(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const fv=wt("ArrayBuffer");function UT(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&fv(t.buffer),e}const jT=ia("string"),it=ia("function"),pv=ia("number"),sa=t=>t!==null&&typeof t=="object",BT=t=>t===!0||t===!1,Lo=t=>{if(ra(t)!=="object")return!1;const e=Vd(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},zT=wt("Date"),WT=wt("File"),VT=wt("Blob"),HT=wt("FileList"),$T=t=>sa(t)&&it(t.pipe),qT=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||it(t.append)&&((e=ra(t))==="formdata"||e==="object"&&it(t.toString)&&t.toString()==="[object FormData]"))},GT=wt("URLSearchParams"),[KT,QT,YT,JT]=["ReadableStream","Request","Response","Headers"].map(wt),XT=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function js(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),fi(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function mv(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const gv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_v=t=>!Ss(t)&&t!==gv;function gc(){const{caseless:t}=_v(this)&&this||{},e={},n=(r,i)=>{const s=t&&mv(e,i)||i;Lo(e[s])&&Lo(r)?e[s]=gc(e[s],r):Lo(r)?e[s]=gc({},r):fi(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&js(arguments[r],n);return e}const ZT=(t,e,n,{allOwnKeys:r}={})=>(js(e,(i,s)=>{n&&it(i)?t[s]=hv(i,n):t[s]=i},{allOwnKeys:r}),t),e1=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),t1=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},n1=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&Vd(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},r1=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},i1=t=>{if(!t)return null;if(fi(t))return t;let e=t.length;if(!pv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},s1=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Vd(Uint8Array)),o1=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},l1=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},a1=wt("HTMLFormElement"),u1=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),dp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),c1=wt("RegExp"),vv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};js(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},d1=t=>{vv(t,(e,n)=>{if(it(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(it(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},h1=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return fi(t)?r(t):r(String(t).split(e)),n},f1=()=>{},p1=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,tu="abcdefghijklmnopqrstuvwxyz",hp="0123456789",yv={DIGIT:hp,ALPHA:tu,ALPHA_DIGIT:tu+tu.toUpperCase()+hp},m1=(t=16,e=yv.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function g1(t){return!!(t&&it(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const _1=t=>{const e=new Array(10),n=(r,i)=>{if(sa(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=fi(r)?[]:{};return js(r,(o,l)=>{const a=n(o,i+1);!Ss(a)&&(s[l]=a)}),e[i]=void 0,s}}return r};return n(t,0)},v1=wt("AsyncFunction"),y1=t=>t&&(sa(t)||it(t))&&it(t.then)&&it(t.catch),w={isArray:fi,isArrayBuffer:fv,isBuffer:FT,isFormData:qT,isArrayBufferView:UT,isString:jT,isNumber:pv,isBoolean:BT,isObject:sa,isPlainObject:Lo,isReadableStream:KT,isRequest:QT,isResponse:YT,isHeaders:JT,isUndefined:Ss,isDate:zT,isFile:WT,isBlob:VT,isRegExp:c1,isFunction:it,isStream:$T,isURLSearchParams:GT,isTypedArray:s1,isFileList:HT,forEach:js,merge:gc,extend:ZT,trim:XT,stripBOM:e1,inherits:t1,toFlatObject:n1,kindOf:ra,kindOfTest:wt,endsWith:r1,toArray:i1,forEachEntry:o1,matchAll:l1,isHTMLForm:a1,hasOwnProperty:dp,hasOwnProp:dp,reduceDescriptors:vv,freezeMethods:d1,toObjectSet:h1,toCamelCase:u1,noop:f1,toFiniteNumber:p1,findKey:mv,global:gv,isContextDefined:_v,ALPHABET:yv,generateString:m1,isSpecCompliantForm:g1,toJSONObject:_1,isAsyncFn:v1,isThenable:y1};function M(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}w.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const wv=M.prototype,Ev={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ev[t]={value:t}});Object.defineProperties(M,Ev);Object.defineProperty(wv,"isAxiosError",{value:!0});M.from=(t,e,n,r,i,s)=>{const o=Object.create(wv);return w.toFlatObject(t,o,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),M.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const w1=null;function _c(t){return w.isPlainObject(t)||w.isArray(t)}function Cv(t){return w.endsWith(t,"[]")?t.slice(0,-2):t}function fp(t,e,n){return t?t.concat(e).map(function(i,s){return i=Cv(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function E1(t){return w.isArray(t)&&!t.some(_c)}const C1=w.toFlatObject(w,{},null,function(e){return/^is[A-Z]/.test(e)});function oa(t,e,n){if(!w.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,C){return!w.isUndefined(C[v])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(e);if(!w.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(w.isDate(g))return g.toISOString();if(!a&&w.isBlob(g))throw new M("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(g)||w.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,v,C){let p=g;if(g&&!C&&typeof g=="object"){if(w.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(w.isArray(g)&&E1(g)||(w.isFileList(g)||w.endsWith(v,"[]"))&&(p=w.toArray(g)))return v=Cv(v),p.forEach(function(m,E){!(w.isUndefined(m)||m===null)&&e.append(o===!0?fp([v],E,s):o===null?v:v+"[]",u(m))}),!1}return _c(g)?!0:(e.append(fp(C,v,s),u(g)),!1)}const d=[],h=Object.assign(C1,{defaultVisitor:c,convertValue:u,isVisitable:_c});function _(g,v){if(!w.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),w.forEach(g,function(p,f){(!(w.isUndefined(p)||p===null)&&i.call(e,p,w.isString(f)?f.trim():f,v,h))===!0&&_(p,v?v.concat(f):[f])}),d.pop()}}if(!w.isObject(t))throw new TypeError("data must be an object");return _(t),e}function pp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Hd(t,e){this._pairs=[],t&&oa(t,this,e)}const Sv=Hd.prototype;Sv.append=function(e,n){this._pairs.push([e,n])};Sv.toString=function(e){const n=e?function(r){return e.call(this,r,pp)}:pp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function S1(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Iv(t,e,n){if(!e)return t;const r=n&&n.encode||S1,i=n&&n.serialize;let s;if(i?s=i(e,n):s=w.isURLSearchParams(e)?e.toString():new Hd(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class mp{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){w.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Tv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},I1=typeof URLSearchParams<"u"?URLSearchParams:Hd,T1=typeof FormData<"u"?FormData:null,k1=typeof Blob<"u"?Blob:null,R1={isBrowser:!0,classes:{URLSearchParams:I1,FormData:T1,Blob:k1},protocols:["http","https","file","blob","url","data"]},$d=typeof window<"u"&&typeof document<"u",N1=(t=>$d&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),P1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",x1=$d&&window.location.href||"http://localhost",O1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$d,hasStandardBrowserEnv:N1,hasStandardBrowserWebWorkerEnv:P1,origin:x1},Symbol.toStringTag,{value:"Module"})),gt={...O1,...R1};function A1(t,e){return oa(t,new gt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return gt.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function L1(t){return w.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function D1(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function kv(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),a=s>=n.length;return o=!o&&w.isArray(i)?i.length:o,a?(w.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!w.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&w.isArray(i[o])&&(i[o]=D1(i[o])),!l)}if(w.isFormData(t)&&w.isFunction(t.entries)){const n={};return w.forEachEntry(t,(r,i)=>{e(L1(r),i,n,0)}),n}return null}function b1(t,e,n){if(w.isString(t))try{return(e||JSON.parse)(t),w.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Bs={transitional:Tv,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=w.isObject(e);if(s&&w.isHTMLForm(e)&&(e=new FormData(e)),w.isFormData(e))return i?JSON.stringify(kv(e)):e;if(w.isArrayBuffer(e)||w.isBuffer(e)||w.isStream(e)||w.isFile(e)||w.isBlob(e)||w.isReadableStream(e))return e;if(w.isArrayBufferView(e))return e.buffer;if(w.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return A1(e,this.formSerializer).toString();if((l=w.isFileList(e))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return oa(l?{"files[]":e}:e,a&&new a,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),b1(e)):e}],transformResponse:[function(e){const n=this.transitional||Bs.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(w.isResponse(e)||w.isReadableStream(e))return e;if(e&&w.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?M.from(l,M.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:gt.classes.FormData,Blob:gt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],t=>{Bs.headers[t]={}});const M1=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),F1=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&M1[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},gp=Symbol("internals");function xi(t){return t&&String(t).trim().toLowerCase()}function Do(t){return t===!1||t==null?t:w.isArray(t)?t.map(Do):String(t)}function U1(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const j1=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function nu(t,e,n,r,i){if(w.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!w.isString(e)){if(w.isString(r))return e.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(e)}}function B1(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function z1(t,e){const n=w.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class We{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,a,u){const c=xi(a);if(!c)throw new Error("header name must be a non-empty string");const d=w.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||a]=Do(l))}const o=(l,a)=>w.forEach(l,(u,c)=>s(u,c,a));if(w.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(w.isString(e)&&(e=e.trim())&&!j1(e))o(F1(e),n);else if(w.isHeaders(e))for(const[l,a]of e.entries())s(a,l,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=xi(e),e){const r=w.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return U1(i);if(w.isFunction(n))return n.call(this,i,r);if(w.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=xi(e),e){const r=w.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||nu(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=xi(o),o){const l=w.findKey(r,o);l&&(!n||nu(r,r[l],l,n))&&(delete r[l],i=!0)}}return w.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||nu(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return w.forEach(this,(i,s)=>{const o=w.findKey(r,s);if(o){n[o]=Do(i),delete n[s];return}const l=e?B1(s):String(s).trim();l!==s&&delete n[s],n[l]=Do(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return w.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[gp]=this[gp]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=xi(o);r[l]||(z1(i,o),r[l]=!0)}return w.isArray(e)?e.forEach(s):s(e),this}}We.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(We.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});w.freezeMethods(We);function ru(t,e){const n=this||Bs,r=e||n,i=We.from(r.headers);let s=r.data;return w.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Rv(t){return!!(t&&t.__CANCEL__)}function pi(t,e,n){M.call(this,t??"canceled",M.ERR_CANCELED,e,n),this.name="CanceledError"}w.inherits(pi,M,{__CANCEL__:!0});function Nv(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function W1(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function V1(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(a){const u=Date.now(),c=r[s];o||(o=u),n[i]=a,r[i]=u;let d=s,h=0;for(;d!==i;)h+=n[d++],d=d%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const _=c&&u-c;return _?Math.round(h*1e3/_):void 0}}function H1(t,e){let n=0;const r=1e3/e;let i=null;return function(){const o=this===!0,l=Date.now();if(o||l-n>r)return i&&(clearTimeout(i),i=null),n=l,t.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),t.apply(null,arguments)),r-(l-n)))}}const _l=(t,e,n=3)=>{let r=0;const i=V1(50,250);return H1(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,a=o-r,u=i(a),c=o<=l;r=o;const d={loaded:o,total:l,progress:l?o/l:void 0,bytes:a,rate:u||void 0,estimated:u&&l&&c?(l-o)/u:void 0,event:s,lengthComputable:l!=null};d[e?"download":"upload"]=!0,t(d)},n)},$1=gt.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=w.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),q1=gt.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];w.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),w.isString(r)&&o.push("path="+r),w.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function G1(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function K1(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Pv(t,e){return t&&!G1(e)?K1(t,e):e}const _p=t=>t instanceof We?{...t}:t;function sr(t,e){e=e||{};const n={};function r(u,c,d){return w.isPlainObject(u)&&w.isPlainObject(c)?w.merge.call({caseless:d},u,c):w.isPlainObject(c)?w.merge({},c):w.isArray(c)?c.slice():c}function i(u,c,d){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function s(u,c){if(!w.isUndefined(c))return r(void 0,c)}function o(u,c){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in e)return r(u,c);if(d in t)return r(void 0,u)}const a={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,c)=>i(_p(u),_p(c),!0)};return w.forEach(Object.keys(Object.assign({},t,e)),function(c){const d=a[c]||i,h=d(t[c],e[c],c);w.isUndefined(h)&&d!==l||(n[c]=h)}),n}const xv=t=>{const e=sr({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=e;e.headers=o=We.from(o),e.url=Iv(Pv(e.baseURL,e.url),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let a;if(w.isFormData(n)){if(gt.hasStandardBrowserEnv||gt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((a=o.getContentType())!==!1){const[u,...c]=a?a.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...c].join("; "))}}if(gt.hasStandardBrowserEnv&&(r&&w.isFunction(r)&&(r=r(e)),r||r!==!1&&$1(e.url))){const u=i&&s&&q1.read(s);u&&o.set(i,u)}return e},Q1=typeof XMLHttpRequest<"u",Y1=Q1&&function(t){return new Promise(function(n,r){const i=xv(t);let s=i.data;const o=We.from(i.headers).normalize();let{responseType:l}=i,a;function u(){i.cancelToken&&i.cancelToken.unsubscribe(a),i.signal&&i.signal.removeEventListener("abort",a)}let c=new XMLHttpRequest;c.open(i.method.toUpperCase(),i.url,!0),c.timeout=i.timeout;function d(){if(!c)return;const _=We.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),v={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:_,config:t,request:c};Nv(function(p){n(p),u()},function(p){r(p),u()},v),c=null}"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new M("Request aborted",M.ECONNABORTED,i,c)),c=null)},c.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,i,c)),c=null},c.ontimeout=function(){let g=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const v=i.transitional||Tv;i.timeoutErrorMessage&&(g=i.timeoutErrorMessage),r(new M(g,v.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,i,c)),c=null},s===void 0&&o.setContentType(null),"setRequestHeader"in c&&w.forEach(o.toJSON(),function(g,v){c.setRequestHeader(v,g)}),w.isUndefined(i.withCredentials)||(c.withCredentials=!!i.withCredentials),l&&l!=="json"&&(c.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&c.addEventListener("progress",_l(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",_l(i.onUploadProgress)),(i.cancelToken||i.signal)&&(a=_=>{c&&(r(!_||_.type?new pi(null,t,c):_),c.abort(),c=null)},i.cancelToken&&i.cancelToken.subscribe(a),i.signal&&(i.signal.aborted?a():i.signal.addEventListener("abort",a)));const h=W1(i.url);if(h&&gt.protocols.indexOf(h)===-1){r(new M("Unsupported protocol "+h+":",M.ERR_BAD_REQUEST,t));return}c.send(s||null)})},J1=(t,e)=>{let n=new AbortController,r;const i=function(a){if(!r){r=!0,o();const u=a instanceof Error?a:this.reason;n.abort(u instanceof M?u:new pi(u instanceof Error?u.message:u))}};let s=e&&setTimeout(()=>{i(new M(`timeout ${e} of ms exceeded`,M.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(a=>{a&&(a.removeEventListener?a.removeEventListener("abort",i):a.unsubscribe(i))}),t=null)};t.forEach(a=>a&&a.addEventListener&&a.addEventListener("abort",i));const{signal:l}=n;return l.unsubscribe=o,[l,()=>{s&&clearTimeout(s),s=null}]},X1=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},Z1=async function*(t,e,n){for await(const r of t)yield*X1(ArrayBuffer.isView(r)?r:await n(String(r)),e)},vp=(t,e,n,r,i)=>{const s=Z1(t,e,i);let o=0;return new ReadableStream({type:"bytes",async pull(l){const{done:a,value:u}=await s.next();if(a){l.close(),r();return}let c=u.byteLength;n&&n(o+=c),l.enqueue(new Uint8Array(u))},cancel(l){return r(l),s.return()}},{highWaterMark:2})},yp=(t,e)=>{const n=t!=null;return r=>setTimeout(()=>e({lengthComputable:n,total:t,loaded:r}))},la=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ov=la&&typeof ReadableStream=="function",vc=la&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),ek=Ov&&(()=>{let t=!1;const e=new Request(gt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),wp=64*1024,yc=Ov&&!!(()=>{try{return w.isReadableStream(new Response("").body)}catch{}})(),vl={stream:yc&&(t=>t.body)};la&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!vl[e]&&(vl[e]=w.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new M(`Response type '${e}' is not supported`,M.ERR_NOT_SUPPORT,r)})})})(new Response);const tk=async t=>{if(t==null)return 0;if(w.isBlob(t))return t.size;if(w.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if(w.isArrayBufferView(t))return t.byteLength;if(w.isURLSearchParams(t)&&(t=t+""),w.isString(t))return(await vc(t)).byteLength},nk=async(t,e)=>{const n=w.toFiniteNumber(t.getContentLength());return n??tk(e)},rk=la&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:l,onUploadProgress:a,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:h}=xv(t);u=u?(u+"").toLowerCase():"text";let[_,g]=i||s||o?J1([i,s],o):[],v,C;const p=()=>{!v&&setTimeout(()=>{_&&_.unsubscribe()}),v=!0};let f;try{if(a&&ek&&n!=="get"&&n!=="head"&&(f=await nk(c,r))!==0){let N=new Request(e,{method:"POST",body:r,duplex:"half"}),P;w.isFormData(r)&&(P=N.headers.get("content-type"))&&c.setContentType(P),N.body&&(r=vp(N.body,wp,yp(f,_l(a)),null,vc))}w.isString(d)||(d=d?"cors":"omit"),C=new Request(e,{...h,signal:_,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let m=await fetch(C);const E=yc&&(u==="stream"||u==="response");if(yc&&(l||E)){const N={};["status","statusText","headers"].forEach(I=>{N[I]=m[I]});const P=w.toFiniteNumber(m.headers.get("content-length"));m=new Response(vp(m.body,wp,l&&yp(P,_l(l,!0)),E&&p,vc),N)}u=u||"text";let R=await vl[w.findKey(vl,u)||"text"](m,t);return!E&&p(),g&&g(),await new Promise((N,P)=>{Nv(N,P,{data:R,headers:We.from(m.headers),status:m.status,statusText:m.statusText,config:t,request:C})})}catch(m){throw p(),m&&m.name==="TypeError"&&/fetch/i.test(m.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,t,C),{cause:m.cause||m}):M.from(m,m&&m.code,t,C)}}),wc={http:w1,xhr:Y1,fetch:rk};w.forEach(wc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ep=t=>`- ${t}`,ik=t=>w.isFunction(t)||t===null||t===!1,Av={getAdapter:t=>{t=w.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!ik(n)&&(r=wc[(o=String(n)).toLowerCase()],r===void 0))throw new M(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Ep).join(`
`):" "+Ep(s[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:wc};function iu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new pi(null,t)}function Cp(t){return iu(t),t.headers=We.from(t.headers),t.data=ru.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Av.getAdapter(t.adapter||Bs.adapter)(t).then(function(r){return iu(t),r.data=ru.call(t,t.transformResponse,r),r.headers=We.from(r.headers),r},function(r){return Rv(r)||(iu(t),r&&r.response&&(r.response.data=ru.call(t,t.transformResponse,r.response),r.response.headers=We.from(r.response.headers))),Promise.reject(r)})}const Lv="1.7.2",qd={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{qd[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Sp={};qd.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Lv+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new M(i(o," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!Sp[o]&&(Sp[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};function sk(t,e,n){if(typeof t!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const l=t[s],a=l===void 0||o(l,s,t);if(a!==!0)throw new M("option "+s+" must be "+a,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+s,M.ERR_BAD_OPTION)}}const Ec={assertOptions:sk,validators:qd},Jt=Ec.validators;class Jn{constructor(e){this.defaults=e,this.interceptors={request:new mp,response:new mp}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=sr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Ec.assertOptions(r,{silentJSONParsing:Jt.transitional(Jt.boolean),forcedJSONParsing:Jt.transitional(Jt.boolean),clarifyTimeoutError:Jt.transitional(Jt.boolean)},!1),i!=null&&(w.isFunction(i)?n.paramsSerializer={serialize:i}:Ec.assertOptions(i,{encode:Jt.function,serialize:Jt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&w.merge(s.common,s[n.method]);s&&w.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=We.concat(o,s);const l=[];let a=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(a=a&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,d=0,h;if(!a){const g=[Cp.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),h=g.length,c=Promise.resolve(n);d<h;)c=c.then(g[d++],g[d++]);return c}h=l.length;let _=n;for(d=0;d<h;){const g=l[d++],v=l[d++];try{_=g(_)}catch(C){v.call(this,C);break}}try{c=Cp.call(this,_)}catch(g){return Promise.reject(g)}for(d=0,h=u.length;d<h;)c=c.then(u[d++],u[d++]);return c}getUri(e){e=sr(this.defaults,e);const n=Pv(e.baseURL,e.url);return Iv(n,e.params,e.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(e){Jn.prototype[e]=function(n,r){return this.request(sr(r||{},{method:e,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(sr(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Jn.prototype[e]=n(),Jn.prototype[e+"Form"]=n(!0)});class Gd{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new pi(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Gd(function(i){e=i}),cancel:e}}}function ok(t){return function(n){return t.apply(null,n)}}function lk(t){return w.isObject(t)&&t.isAxiosError===!0}const Cc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cc).forEach(([t,e])=>{Cc[e]=t});function Dv(t){const e=new Jn(t),n=hv(Jn.prototype.request,e);return w.extend(n,Jn.prototype,e,{allOwnKeys:!0}),w.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Dv(sr(t,i))},n}const ue=Dv(Bs);ue.Axios=Jn;ue.CanceledError=pi;ue.CancelToken=Gd;ue.isCancel=Rv;ue.VERSION=Lv;ue.toFormData=oa;ue.AxiosError=M;ue.Cancel=ue.CanceledError;ue.all=function(e){return Promise.all(e)};ue.spread=ok;ue.isAxiosError=lk;ue.mergeConfig=sr;ue.AxiosHeaders=We;ue.formToJSON=t=>kv(w.isHTMLForm(t)?new FormData(t):t);ue.getAdapter=Av.getAdapter;ue.HttpStatusCode=Cc;ue.default=ue;var Ip={};const Tp="@firebase/database",kp="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bv="";function ak(t){bv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Es(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uk(e)}}catch{}return new ck},Gn=Mv("localStorage"),dk=Mv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Bd("@firebase/database"),hk=function(){let t=1;return function(){return t++}}(),Fv=function(t){const e=SI(t),n=new yI;n.update(e);const r=n.digest();return Md.encodeByteArray(r)},zs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zs.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let Yi=null,Rp=!0;const fk=function(t,e){T(!e,"Can't turn on custom loggers persistently."),Wr.logLevel=q.VERBOSE,Yi=Wr.log.bind(Wr)},Re=function(...t){if(Rp===!0&&(Rp=!1,Yi===null&&dk.get("logging_enabled")===!0&&fk()),Yi){const e=zs.apply(null,t);Yi(e)}},Ws=function(t){return function(...e){Re(t,...e)}},Sc=function(...t){const e="FIREBASE INTERNAL ERROR: "+zs(...t);Wr.error(e)},$t=function(...t){const e=`FIREBASE FATAL ERROR: ${zs(...t)}`;throw Wr.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+zs(...t);Wr.warn(e)},pk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Uv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ri="[MIN_NAME]",or="[MAX_NAME]",mi=function(t,e){if(t===e)return 0;if(t===ri||e===or)return-1;if(e===ri||t===or)return 1;{const n=Np(t),r=Np(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},gk=function(t,e){return t===e?0:t<e?-1:1},Oi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},Kd=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=Kd(t[e[r]]);return n+="}",n},jv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bv=function(t){T(!Uv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},_k=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const wk=new RegExp("^-?(0*)\\d{1,10}$"),Ek=-2147483648,Ck=2147483647,Np=function(t){if(wk.test(t)){const e=Number(t);if(e>=Ek&&e<=Ck)return e}return null},gi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},Sk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class bo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="5",zv="v",Wv="s",Vv="r",Hv="f",$v=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qv="ls",Gv="p",Ic="ac",Kv="websocket",Qv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function kk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Jv(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===Kv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Qv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kk(t)&&(n.ns=t.namespace);const i=[];return He(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={},ou={};function Yd(t){const e=t.toString();return su[e]||(su[e]=new Rk),su[e]}function Nk(t,e){const n=t.toString();return ou[n]||(ou[n]=e()),ou[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&gi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="start",xk="close",Ok="pLPCommand",Ak="pRTLPCB",Xv="id",Zv="pw",ey="ser",Lk="cb",Dk="seg",bk="ts",Mk="d",Fk="dframe",ty=1870,ny=30,Uk=ty-ny,jk=25e3,Bk=3e4;class Dr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ws(e),this.stats_=Yd(n),this.urlFn=a=>(this.appCheckToken&&(a[Ic]=this.appCheckToken),Jv(n,Qv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Pk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Bk)),mk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jd((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pp)this.id=l,this.password=a;else if(o===xk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Pp]="t",r[ey]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Lk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[zv]=Qd,this.transportSessionId&&(r[Wv]=this.transportSessionId),this.lastSessionId&&(r[qv]=this.lastSessionId),this.applicationId&&(r[Gv]=this.applicationId),this.appCheckToken&&(r[Ic]=this.appCheckToken),typeof location<"u"&&location.hostname&&$v.test(location.hostname)&&(r[Vv]=Hv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Dr.forceAllow_=!0}static forceDisallow(){Dr.forceDisallow_=!0}static isAvailable(){return Dr.forceAllow_?!0:!Dr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_k()&&!vk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=X_(n),i=jv(r,Uk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Fk]="t",r[Xv]=e,r[Zv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hk(),window[Ok+this.uniqueCallbackIdentifier]=e,window[Ak+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Re("frame writing exception"),l.stack&&Re(l.stack),Re(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xv]=this.myID,e[Zv]=this.myPW,e[ey]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ny+r.length<=ty;){const o=this.pendingSegs.shift();r=r+"&"+Dk+i+"="+o.seg+"&"+bk+i+"="+o.ts+"&"+Mk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(jk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=16384,Wk=45e3;let yl=null;typeof MozWebSocket<"u"?yl=MozWebSocket:typeof WebSocket<"u"&&(yl=WebSocket);class dt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ws(this.connId),this.stats_=Yd(n),this.connURL=dt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[zv]=Qd,typeof location<"u"&&location.hostname&&$v.test(location.hostname)&&(o[Vv]=Hv),n&&(o[Wv]=n),r&&(o[qv]=r),i&&(o[Ic]=i),s&&(o[Gv]=s),Jv(e,Kv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gn.set("previous_websocket_failure",!0);try{let r;iv(),this.mySock=new yl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yl!==null&&!dt.forceDisallow_}static previouslyFailed(){return Gn.isInMemoryStorage||Gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Es(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jv(n,zk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Wk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Dr,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let r=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dt];else{const i=this.transports_=[];for(const s of Is.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Is.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=6e4,Hk=5e3,$k=10*1024,qk=100*1024,lu="t",xp="d",Gk="s",Op="r",Kk="e",Ap="o",Lp="a",Dp="n",bp="p",Qk="h";class Yk{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ws("c:"+this.id+":"),this.transportManager_=new Is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$k?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lu in e){const n=e[lu];n===Lp?this.upgradeIfSecondaryHealthy_():n===Op?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ap&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Oi("t",e),r=Oi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Dp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Oi("t",e),r=Oi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Oi(lu,e);if(xp in e){const r=e[xp];if(n===Qk){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Dp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Gk?this.onConnectionShutdown_(r):n===Op?this.onReset_(r):n===Kk?Sc("Server Error: "+r):n===Ap?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qd!==r&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Vk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends iy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ud()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wl}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=32,Fp=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new G("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function sy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Jk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function oy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ly(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=j(t),r=j(e);if(n===null)return e;if(n===r)return Fe(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Xd(t,e){if(Rn(t)!==Rn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ht(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Rn(t)>Rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Xk{constructor(e,n){this.errorPrefix_=n,this.parts_=oy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=na(this.parts_[r]);ay(this)}}function Zk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=na(e),ay(t)}function eR(t){const e=t.parts_.pop();t.byteLength_-=na(e),t.parts_.length>0&&(t.byteLength_-=1)}function ay(t){if(t.byteLength_>Fp)throw new Error(t.errorPrefix_+"has a key path longer than "+Fp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Mp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mp+") or object contains a cycle "+Vn(t))}function Vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd extends iy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zd}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=1e3,tR=60*5*1e3,Up=30*1e3,nR=1.3,rR=3e4,iR="server_kill",jp=3;class jt extends ry{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=jt.nextPersistentConnectionId_++,this.log_=Ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ai,this.maxReconnectDelay_=tR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!iv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ta,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;jt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const r=ti(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Up)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_I(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Sc("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rR&&(this.reconnectDelay_=Ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new Yk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ve(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(iR)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ve(d),a())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cc(this.interruptReasons_)&&(this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Kd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jp&&(this.reconnectDelay_=Up,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+bv.replace(/\./g,"-")]=1,Ud()?e["framework.cordova"]=1:rv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wl.getInstance().currentlyOnline();return cc(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new B(ri,e),i=new B(ri,n);return this.compare(r,i)!==0}minPost(){return B.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class uy extends aa{static get __EMPTY_NODE(){return _o}static set __EMPTY_NODE(e){_o=e}compare(e,n){return mi(e.name,n.name)}isDefinedOn(e){throw ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(or,_o)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,_o)}toString(){return".key"}}const Vr=new uy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_e.RED,this.left=i??Ue.EMPTY_NODE,this.right=s??Ue.EMPTY_NODE}copy(e,n,r,i,s){return new _e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class sR{copy(e,n,r,i,s){return this}insert(e,n,r){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vo(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new sR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t,e){return mi(t.name,e.name)}function eh(t,e){return mi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;function lR(t){Tc=t}const cy=function(t){return typeof t=="number"?"number:"+Bv(t):"string:"+t},dy=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else T(t===Tc||t.isEmpty(),"priority of unexpected type.");T(t===Tc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bp;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dy(this.priorityNode_)}static set __childrenNodeConstructor(e){Bp=e}static get __childrenNodeConstructor(){return Bp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:j(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=j(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bv(this.value_):e+=this.value_,this.lazyHash_=Fv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hy,fy;function aR(t){hy=t}function uR(t){fy=t}class cR extends aa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?mi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(or,new me("[PRIORITY-POST]",fy))}makePost(e,n){const r=hy(e);return new B(n,new me("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new cR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=Math.log(2);class hR{constructor(e){const n=s=>parseInt(Math.log(s)/dR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const El=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new _e(h,d.node,_e.BLACK,null,null);{const _=parseInt(c/2,10)+a,g=i(a,_),v=i(_+1,u);return d=t[_],h=n?n(d):d,new _e(h,d.node,_e.BLACK,g,v)}},s=function(a){let u=null,c=null,d=t.length;const h=function(g,v){const C=d-g,p=d;d-=g;const f=i(C+1,p),m=t[C],E=n?n(m):m;_(new _e(E,m.node,v,null,f))},_=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),C=Math.pow(2,a.count-(g+1));v?h(C,_e.BLACK):(h(C,_e.BLACK),h(C,_e.RED))}return c},o=new hR(t.length),l=s(o);return new Ue(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au;const wr={};class Dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(wr&&ie,"ChildrenNode.ts has not been loaded"),au=au||new Dt({".priority":wr},{".priority":ie}),au}get(e){const n=ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Vr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(B.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=El(r,e.getCompare()):l=wr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Dt(c,u)}addToIndexes(e,n){const r=pl(this.indexes_,(i,s)=>{const o=ti(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===wr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(B.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),El(l,o.getCompare())}else return wr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new B(e.name,l))),a.insert(e,e.node)}});return new Dt(r,this.indexSet_)}removeFromIndexes(e,n){const r=pl(this.indexes_,i=>{if(i===wr)return i;{const s=n.get(e.name);return s?i.remove(new B(e.name,s)):i}});return new Dt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&dy(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Li||(Li=new L(new Ue(eh),null,Dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Li}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Li:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new B(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Li:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=j(e);if(r===null)return n;{T(j(e)!==".priority"||Rn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cy(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Fv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new B(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vs?-1:0}withIndex(e){if(e===Vr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vr?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fR extends L{constructor(){super(new Ue(eh),L.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Vs=new fR;Object.defineProperties(B,{MIN:{value:new B(ri,L.EMPTY_NODE)},MAX:{value:new B(or,Vs)}});uy.__EMPTY_NODE=L.EMPTY_NODE;me.__childrenNodeConstructor=L;lR(Vs);uR(Vs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=!0;function Ee(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,Ee(e))}if(!(t instanceof Array)&&pR){const n=[];let r=!1;if(He(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ee(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new B(o,a)))}}),n.length===0)return L.EMPTY_NODE;const s=El(n,oR,o=>o.name,eh);if(r){const o=El(n,ie.getCompare());return new L(s,Ee(e),new Dt({".priority":o},{".priority":ie}))}else return new L(s,Ee(e),Dt.Default)}else{let n=L.EMPTY_NODE;return He(t,(r,i)=>{if(Qt(t,r)&&r.substring(0,1)!=="."){const s=Ee(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ee(e))}}aR(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR extends aa{constructor(e){super(),this.indexPath_=e,T(!z(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?mi(e.name,n.name):s}makePost(e,n){const r=Ee(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new B(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Vs);return new B(or,e)}toString(){return oy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR extends aa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?mi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const r=Ee(e);return new B(n,r)}toString(){return".value"}}const _R=new gR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){return{type:"value",snapshotNode:t}}function ii(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ks(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ts(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ii(n,r)):o.trackChildChange(ks(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ts(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ks(i,s,o))}else r.trackChildChange(ii(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.indexedFilter_=new th(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rs.getStartPost_(e),this.endPost_=Rs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new B(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,l)=>{s.matches(new B(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Rs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new B(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const a=new B(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(ks(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ts(n,d));const v=l.updateImmediateChild(n,L.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ii(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ts(u.name,u.node)),s.trackChildChange(ii(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ri}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:or}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new nh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wR(t){return t.loadsAllData()?new th(t.getIndex()):t.hasLimit()?new yR(t):new Rs(t)}function zp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===_R?n="$value":t.index_===Vr?n="$key":(T(t.index_ instanceof mR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends ry{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ws("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Cl.getListenId_(e,r),l={};this.listens_[o]=l;const a=zp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ti(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Cl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=zp(e._queryParams),r=e._path.toString(),i=new ta;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+di(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Es(l.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return{value:null,children:new Map}}function my(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=j(e);t.children.has(r)||t.children.set(r,Sl());const i=t.children.get(r);e=K(e),my(i,e,n)}}function kc(t,e,n){t.value!==null?n(e,t.value):CR(t,(r,i)=>{const s=new G(e.toString()+"/"+r);kc(i,s,n)})}function CR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=10*1e3,IR=30*1e3,TR=5*60*1e3;class kR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new SR(e);const r=Vp+(IR-Vp)*Math.random();Ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;He(e,(i,s)=>{s>0&&Qt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*TR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function gy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ih(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ft.ACK_USER_WRITE,this.source=gy()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Il(H(),n,this.revert)}}else return T(j(this.path)===e,"operationForChild called for unrelated child."),new Il(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.source=e,this.path=n,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Ns(this.source,H()):new Ns(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ft.OVERWRITE}operationForChild(e){return z(this.path)?new lr(this.source,H(),this.snap.getImmediateChild(e)):new lr(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ft.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new lr(this.source,H(),n.value):new Ps(this.source,H(),n)}else return T(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ps(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function NR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(vR(o.childName,o.snapshotNode))}),Di(t,i,"child_removed",e,r,n),Di(t,i,"child_added",e,r,n),Di(t,i,"child_moved",s,r,n),Di(t,i,"child_changed",e,r,n),Di(t,i,"value",e,r,n),i}function Di(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>xR(t,l,a)),o.forEach(l=>{const a=PR(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function PR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xR(t,e,n){if(e.childName==null||n.childName==null)throw ci("Should only compare child_ events.");const r=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e){return{eventCache:t,serverCache:e}}function Xi(t,e,n,r){return ua(new ar(e,n,r),t.serverCache)}function _y(t,e,n,r){return ua(t.eventCache,new ar(e,n,r))}function Rc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ur(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;const OR=()=>(uu||(uu=new Ue(gk)),uu);class J{constructor(e,n=OR()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return He(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(z(e))return null;{const r=j(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:de(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=j(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new J(null)}}set(e,n){if(z(e))return new J(n,this.children);{const r=j(e),s=(this.children.get(r)||new J(null)).set(K(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=j(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=j(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(z(e))return n;{const r=j(e),s=(this.children.get(r)||new J(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=j(e),o=this.children.get(s);return o?o.findOnPath_(K(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=j(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),de(n,i),r):new J(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new J(null))}}function Zi(t,e,n){if(z(e))return new _t(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Fe(i,e);return s=s.updateChild(o,n),new _t(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new _t(s)}}}function Hp(t,e,n){let r=t;return He(n,(i,s)=>{r=Zi(r,de(e,i),s)}),r}function $p(t,e){if(z(e))return _t.empty();{const n=t.writeTree_.setTree(e,new J(null));return new _t(n)}}function Nc(t,e){return mr(t,e)!=null}function mr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function qp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new B(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new B(r,i.value))}),e}function In(t,e){if(z(e))return t;{const n=mr(t,e);return n!=null?new _t(new J(n)):new _t(t.writeTree_.subtree(e))}}function Pc(t){return t.writeTree_.isEmpty()}function si(t,e){return vy(H(),t.writeTree_,e)}function vy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=vy(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t,e){return Cy(e,t)}function AR(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Zi(t.visibleWrites,e,n)),t.lastWriteId=r}function LR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function DR(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&bR(l,r.path)?i=!1:ht(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return MR(t),!0;if(r.snap)t.visibleWrites=$p(t.visibleWrites,r.path);else{const l=r.children;He(l,a=>{t.visibleWrites=$p(t.visibleWrites,de(r.path,a))})}return!0}else return!1}function bR(t,e){if(t.snap)return ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ht(de(t.path,n),e))return!0;return!1}function MR(t){t.visibleWrites=yy(t.allWrites,FR,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function FR(t){return t.visible}function yy(t,e,n){let r=_t.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ht(n,o)?(l=Fe(n,o),r=Zi(r,l,s.snap)):ht(o,n)&&(l=Fe(o,n),r=Zi(r,H(),s.snap.getChild(l)));else if(s.children){if(ht(n,o))l=Fe(n,o),r=Hp(r,l,s.children);else if(ht(o,n))if(l=Fe(o,n),z(l))r=Hp(r,H(),s.children);else{const a=ti(s.children,j(l));if(a){const u=a.getChild(K(l));r=Zi(r,H(),u)}}}else throw ci("WriteRecord should have .snap or .children")}}return r}function wy(t,e,n,r,i){if(!r&&!i){const s=mr(t.visibleWrites,e);if(s!=null)return s;{const o=In(t.visibleWrites,e);if(Pc(o))return n;if(n==null&&!Nc(o,H()))return null;{const l=n||L.EMPTY_NODE;return si(o,l)}}}else{const s=In(t.visibleWrites,e);if(!i&&Pc(s))return n;if(!i&&n==null&&!Nc(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ht(u.path,e)||ht(e,u.path))},l=yy(t.allWrites,o,e),a=n||L.EMPTY_NODE;return si(l,a)}}}function UR(t,e,n){let r=L.EMPTY_NODE;const i=mr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=In(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=si(In(s,new G(o)),l);r=r.updateImmediateChild(o,a)}),qp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=In(t.visibleWrites,e);return qp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function jR(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(Nc(t.visibleWrites,s))return null;{const o=In(t.visibleWrites,s);return Pc(o)?i.getChild(n):si(o,i.getChild(n))}}function BR(t,e,n,r){const i=de(e,n),s=mr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=In(t.visibleWrites,i);return si(o,r.getNode().getImmediateChild(n))}else return null}function zR(t,e){return mr(t.visibleWrites,e)}function WR(t,e,n,r,i,s,o){let l;const a=In(t.visibleWrites,e),u=mr(a,H());if(u!=null)l=u;else if(n!=null)l=si(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=h.getNext();return c}else return[]}function VR(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function Tl(t,e,n,r){return wy(t.writeTree,t.treePath,e,n,r)}function oh(t,e){return UR(t.writeTree,t.treePath,e)}function Gp(t,e,n,r){return jR(t.writeTree,t.treePath,e,n,r)}function kl(t,e){return zR(t.writeTree,de(t.treePath,e))}function HR(t,e,n,r,i,s){return WR(t.writeTree,t.treePath,e,n,r,i,s)}function lh(t,e,n){return BR(t.writeTree,t.treePath,e,n)}function Ey(t,e){return Cy(de(t.treePath,e),t.writeTree)}function Cy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ks(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ts(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ii(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ks(r,e.snapshotNode,i.oldSnap));else throw ci("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Sy=new qR;class ah{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ar(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ur(this.viewCache_),s=HR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){return{filter:t}}function KR(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function QR(t,e,n,r,i){const s=new $R;let o,l;if(n.type===ft.OVERWRITE){const u=n;u.source.fromUser?o=xc(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=Rl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ft.MERGE){const u=n;u.source.fromUser?o=JR(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Oc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ft.ACK_USER_WRITE){const u=n;u.revert?o=eN(t,e,u.path,r,i,s):o=XR(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ft.LISTEN_COMPLETE)o=ZR(t,e,n.path,r,s);else throw ci("Unknown operation type: "+n.type);const a=s.getChanges();return YR(e,o,a),{viewCache:o,changes:a}}function YR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Rc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(py(Rc(e)))}}function Iy(t,e,n,r,i,s){const o=e.eventCache;if(kl(r,n)!=null)return e;{let l,a;if(z(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ur(e),c=u instanceof L?u:L.EMPTY_NODE,d=oh(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Tl(r,ur(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=j(n);if(u===".priority"){T(Rn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=Gp(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=K(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Gp(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=lh(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Xi(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Rl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),_,null)}else{const _=j(n);if(!a.isCompleteForPath(n)&&Rn(n)>1)return e;const g=K(n),C=a.getNode().getImmediateChild(_).updateChild(g,r);_===".priority"?u=c.updatePriority(a.getNode(),C):u=c.updateChild(a.getNode(),_,C,g,Sy,null)}const d=_y(e,u,a.isFullyInitialized()||z(n),c.filtersNodes()),h=new ah(i,d,s);return Iy(t,d,n,i,h,l)}function xc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new ah(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Xi(e,u,!0,t.filter.filtersNodes());else{const d=j(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Xi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=K(n),_=l.getNode().getImmediateChild(d);let g;if(z(h))g=r;else{const v=c.getCompleteChild(d);v!=null?sy(h)===".priority"&&v.getChild(ly(h)).isEmpty()?g=v:g=v.updateChild(h,r):g=L.EMPTY_NODE}if(_.equals(g))a=e;else{const v=t.filter.updateChild(l.getNode(),d,g,h,c,o);a=Xi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Kp(t,e){return t.eventCache.isCompleteForChild(e)}function JR(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=de(n,a);Kp(e,j(c))&&(l=xc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=de(n,a);Kp(e,j(c))||(l=xc(t,l,c,u,i,s,o))}),l}function Qp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Oc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;z(n)?u=r:u=new J(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),g=Qp(t,_,h);a=Rl(t,a,new G(d),g,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!_){const g=e.serverCache.getNode().getImmediateChild(d),v=Qp(t,g,h);a=Rl(t,a,new G(d),v,i,s,o,l)}}),a}function XR(t,e,n,r,i,s,o){if(kl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Rl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(z(n)){let u=new J(null);return a.getNode().forEachChild(Vr,(c,d)=>{u=u.set(new G(c),d)}),Oc(t,e,n,u,i,s,l,o)}else return e}else{let u=new J(null);return r.foreach((c,d)=>{const h=de(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Oc(t,e,n,u,i,s,l,o)}}function ZR(t,e,n,r,i){const s=e.serverCache,o=_y(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return Iy(t,o,n,r,Sy,i)}function eN(t,e,n,r,i,s){let o;if(kl(r,n)!=null)return e;{const l=new ah(r,e,i),a=e.eventCache.getNode();let u;if(z(n)||j(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Tl(r,ur(e));else{const d=e.serverCache.getNode();T(d instanceof L,"serverChildren would be complete if leaf node"),c=oh(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=j(n);let d=lh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,K(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,L.EMPTY_NODE,K(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Tl(r,ur(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||kl(r,H())!=null,Xi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new th(r.getIndex()),s=wR(r);this.processor_=GR(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,l.getNode(),null),c=new ar(a,o.isFullyInitialized(),i.filtersNodes()),d=new ar(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ua(d,c),this.eventGenerator_=new RR(this.query_)}get query(){return this.query_}}function nN(t){return t.viewCache_.serverCache.getNode()}function rN(t,e){const n=ur(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Yp(t){return t.eventRegistrations_.length===0}function iN(t,e){t.eventRegistrations_.push(e)}function Jp(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Xp(t,e,n,r){e.type===ft.MERGE&&e.source.queryId!==null&&(T(ur(t.viewCache_),"We should always have a full cache before handling merges"),T(Rc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=QR(t.processor_,i,e,n,r);return KR(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ty(t,s.changes,s.viewCache.eventCache.getNode(),null)}function sN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(ii(s,o))}),n.isFullyInitialized()&&r.push(py(n.getNode())),Ty(t,r,n.getNode(),e)}function Ty(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return NR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl;class oN{constructor(){this.views=new Map}}function lN(t){T(!Nl,"__referenceConstructor has already been defined"),Nl=t}function aN(){return T(Nl,"Reference.ts has not been loaded"),Nl}function uN(t){return t.views.size===0}function uh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),Xp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Xp(o,e,n,r));return s}}function cN(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Tl(n,i?r:null),a=!1;l?a=!0:r instanceof L?(l=oh(n,r),a=!1):(l=L.EMPTY_NODE,a=!1);const u=ua(new ar(l,a,!1),new ar(r,i,!1));return new tN(e,u)}return o}function dN(t,e,n,r,i,s){const o=cN(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),iN(o,n),sN(o,n)}function hN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Nn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Jp(u,n,r)),Yp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Jp(a,n,r)),Yp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Nn(t)&&s.push(new(aN())(e._repo,e._path)),{removed:s,events:o}}function ky(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Hr(t,e){let n=null;for(const r of t.views.values())n=n||rN(r,e);return n}function Ry(t,e){if(e._queryParams.loadsAllData())return ca(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ny(t,e){return Ry(t,e)!=null}function Nn(t){return ca(t)!=null}function ca(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl;function fN(t){T(!Pl,"__referenceConstructor has already been defined"),Pl=t}function pN(){return T(Pl,"Reference.ts has not been loaded"),Pl}let mN=1;class Zp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=VR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Py(t,e,n,r,i){return AR(t.pendingWriteTree_,e,n,r,i),i?Hs(t,new lr(gy(),e,n)):[]}function Kn(t,e,n=!1){const r=LR(t.pendingWriteTree_,e);if(DR(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(H(),!0):He(r.children,o=>{s=s.set(new G(o),!0)}),Hs(t,new Il(r.path,s,n))}else return[]}function da(t,e,n){return Hs(t,new lr(rh(),e,n))}function gN(t,e,n){const r=J.fromObject(n);return Hs(t,new Ps(rh(),e,r))}function _N(t,e){return Hs(t,new Ns(rh(),e))}function vN(t,e,n){const r=dh(t,n);if(r){const i=hh(r),s=i.path,o=i.queryId,l=Fe(s,e),a=new Ns(ih(o),l);return fh(t,s,a)}else return[]}function Ac(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Ny(o,e))){const a=hN(o,e,n,r);uN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>Nn(_));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=EN(h);for(let g=0;g<_.length;++g){const v=_[g],C=v.query,p=Ay(t,v);t.listenProvider_.startListening(es(C),xl(t,C),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(es(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(ha(h));t.listenProvider_.stopListening(es(h),_)}))}CN(t,u)}return l}function yN(t,e,n,r){const i=dh(t,r);if(i!=null){const s=hh(i),o=s.path,l=s.queryId,a=Fe(o,e),u=new lr(ih(l),a,n);return fh(t,o,u)}else return[]}function wN(t,e,n,r){const i=dh(t,r);if(i){const s=hh(i),o=s.path,l=s.queryId,a=Fe(o,e),u=J.fromObject(n),c=new Ps(ih(l),a,u);return fh(t,o,c)}else return[]}function em(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const g=Fe(h,i);s=s||Hr(_,g),o=o||Nn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Nn(l),s=s||Hr(l,H())):(l=new oN,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,g)=>{const v=Hr(g,H());v&&(s=s.updateImmediateChild(_,v))}));const u=Ny(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=ha(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=SN();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const c=sh(t.pendingWriteTree_,i);let d=dN(l,e,n,c,s,a);if(!u&&!o&&!r){const h=Ry(l,e);d=d.concat(IN(t,e,h))}return d}function ch(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Fe(o,e),u=Hr(l,a);if(u)return u});return wy(i,e,s,n,!0)}function Hs(t,e){return xy(e,t.syncPointTree_,null,sh(t.pendingWriteTree_,H()))}function xy(t,e,n,r){if(z(t.path))return Oy(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=Hr(i,H()));let s=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Ey(r,o);s=s.concat(xy(l,a,u,c))}return i&&(s=s.concat(uh(i,t,r,n))),s}}function Oy(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=Hr(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Ey(r,o),c=t.operationForChild(o);c&&(s=s.concat(Oy(c,l,a,u)))}),i&&(s=s.concat(uh(i,t,r,n))),s}function Ay(t,e){const n=e.query,r=xl(t,n);return{hashFn:()=>(nN(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?vN(t,n._path,r):_N(t,n._path);{const s=yk(i,n);return Ac(t,n,null,s)}}}}function xl(t,e){const n=ha(e);return t.queryToTagMap.get(n)}function ha(t){return t._path.toString()+"$"+t._queryIdentifier}function dh(t,e){return t.tagToQueryMap.get(e)}function hh(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function fh(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=sh(t.pendingWriteTree_,e);return uh(r,n,i,null)}function EN(t){return t.fold((e,n,r)=>{if(n&&Nn(n))return[ca(n)];{let i=[];return n&&(i=ky(n)),He(r,(s,o)=>{i=i.concat(o)}),i}})}function es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pN())(t._repo,t._path):t}function CN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ha(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function SN(){return mN++}function IN(t,e,n){const r=e._path,i=xl(t,e),s=Ay(t,n),o=t.listenProvider_.startListening(es(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)T(!Nn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!z(u)&&c&&Nn(c))return[ca(c).query];{let h=[];return c&&(h=h.concat(ky(c).map(_=>_.query))),He(d,(_,g)=>{h=h.concat(g)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(es(c),xl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ph(n)}node(){return this.node_}}class mh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new mh(this.syncTree_,n)}node(){return ch(this.syncTree_,this.path_)}}const TN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},tm=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return kN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return RN(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},kN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},RN=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},NN=function(t,e,n,r){return gh(e,new mh(n,t),r)},Ly=function(t,e,n){return gh(t,new ph(e),n)};function gh(t,e,n){const r=t.getPriority().val(),i=tm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=tm(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new me(l,Ee(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new me(i))),o.forEachChild(ie,(l,a)=>{const u=gh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function vh(t,e){let n=e instanceof G?e:new G(e),r=t,i=j(n);for(;i!==null;){const s=ti(r.node.children,i)||{children:{},childCount:0};r=new _h(i,r,s),n=K(n),i=j(n)}return r}function _i(t){return t.node.value}function Dy(t,e){t.node.value=e,Lc(t)}function by(t){return t.node.childCount>0}function PN(t){return _i(t)===void 0&&!by(t)}function fa(t,e){He(t.node.children,(n,r)=>{e(new _h(n,t,r))})}function My(t,e,n,r){n&&!r&&e(t),fa(t,i=>{My(i,e,!0,r)}),n&&r&&e(t)}function xN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function $s(t){return new G(t.parent===null?t.name:$s(t.parent)+"/"+t.name)}function Lc(t){t.parent!==null&&ON(t.parent,t.name,t)}function ON(t,e,n){const r=PN(n),i=Qt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Lc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Lc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=/[\[\].#$\/\u0000-\u001F\u007F]/,LN=/[\[\].#$\u0000-\u001F\u007F]/,cu=10*1024*1024,Fy=function(t){return typeof t=="string"&&t.length!==0&&!AN.test(t)},Uy=function(t){return typeof t=="string"&&t.length!==0&&!LN.test(t)},DN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Uy(t)},bN=function(t,e,n,r){yh(jd(t,"value"),e,n)},yh=function(t,e,n){const r=n instanceof G?new Xk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vn(r)+" with contents = "+e.toString());if(Uv(e))throw new Error(t+"contains "+e.toString()+" "+Vn(r));if(typeof e=="string"&&e.length>cu/3&&na(e)>cu)throw new Error(t+"contains a string greater than "+cu+" utf8 bytes "+Vn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(He(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Fy(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Zk(r,o),yh(t,l,r),eR(r)}),i&&s)throw new Error(t+' contains ".value" child '+Vn(r)+" in addition to actual children.")}},jy=function(t,e,n,r){if(!Uy(n))throw new Error(jd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},MN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jy(t,e,n)},FN=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},UN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DN(n))throw new Error(jd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Xd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function By(t,e,n){wh(t,n),zy(t,r=>Xd(r,e))}function qt(t,e,n){wh(t,n),zy(t,r=>ht(r,e)||ht(e,r))}function zy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(BN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function BN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Yi&&Re("event: "+n.toString()),gi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN="repo_interrupt",WN=25;class VN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sl(),this.transactionQueueTree_=new _h,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HN(t,e,n){if(t.stats_=Yd(t.repoInfo_),t.forceRestClient_||Sk())t.server_=new Cl(t.repoInfo_,(r,i,s,o)=>{nm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>rm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new jt(t.repoInfo_,e,(r,i,s,o)=>{nm(t,r,i,s,o)},r=>{rm(t,r)},r=>{qN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Nk(t.repoInfo_,()=>new kR(t.stats_,t.server_)),t.infoData_=new ER,t.infoSyncTree_=new Zp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=da(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ch(t,"connected",!1),t.serverSyncTree_=new Zp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);qt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function $N(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Eh(t){return TN({timestamp:$N(t)})}function nm(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=pl(n,u=>Ee(u));o=wN(t.serverSyncTree_,s,a,i)}else{const a=Ee(n);o=yN(t.serverSyncTree_,s,a,i)}else if(r){const a=pl(n,u=>Ee(u));o=gN(t.serverSyncTree_,s,a)}else{const a=Ee(n);o=da(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=pa(t,s)),qt(t.eventQueue_,l,o)}function rm(t,e){Ch(t,"connected",e),e===!1&&KN(t)}function qN(t,e){He(e,(n,r)=>{Ch(t,n,r)})}function Ch(t,e,n){const r=new G("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(r,i);const s=da(t.infoSyncTree_,r,i);qt(t.eventQueue_,r,s)}function Wy(t){return t.nextWriteId_++}function GN(t,e,n,r,i){Sh(t,"set",{path:e.toString(),value:n,priority:r});const s=Eh(t),o=Ee(n,r),l=ch(t.serverSyncTree_,e),a=Ly(o,l,s),u=Wy(t),c=Py(t.serverSyncTree_,e,a,u,!0);wh(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const g=h==="ok";g||Ve("set at "+e+" failed: "+h);const v=Kn(t.serverSyncTree_,u,!g);qt(t.eventQueue_,e,v),JN(t,i,h,_)});const d=Gy(t,e);pa(t,d),qt(t.eventQueue_,d,[])}function KN(t){Sh(t,"onDisconnectEvents");const e=Eh(t),n=Sl();kc(t.onDisconnect_,H(),(i,s)=>{const o=NN(i,s,t.serverSyncTree_,e);my(n,i,o)});let r=[];kc(n,H(),(i,s)=>{r=r.concat(da(t.serverSyncTree_,i,s));const o=Gy(t,i);pa(t,o)}),t.onDisconnect_=Sl(),qt(t.eventQueue_,H(),r)}function QN(t,e,n){let r;j(e._path)===".info"?r=em(t.infoSyncTree_,e,n):r=em(t.serverSyncTree_,e,n),By(t.eventQueue_,e._path,r)}function im(t,e,n){let r;j(e._path)===".info"?r=Ac(t.infoSyncTree_,e,n):r=Ac(t.serverSyncTree_,e,n),By(t.eventQueue_,e._path,r)}function YN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zN)}function Sh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function JN(t,e,n,r){e&&gi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Vy(t,e,n){return ch(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Ih(t,e=t.transactionQueueTree_){if(e||ma(t,e),_i(e)){const n=$y(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&XN(t,$s(e),n)}else by(e)&&fa(e,n=>{Ih(t,n)})}function XN(t,e,n){const r=n.map(u=>u.currentWriteId),i=Vy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];T(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Fe(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Sh(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Kn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ma(t,vh(t.transactionQueueTree_,e)),Ih(t,t.transactionQueueTree_),qt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)gi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ve("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}pa(t,e)}},o)}function pa(t,e){const n=Hy(t,e),r=$s(n),i=$y(t,n);return ZN(t,i,r),r}function ZN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Fe(n,a.path);let c=!1,d;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=WN)c=!0,d="maxretry",i=i.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Vy(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){yh("transaction failed: Data returned ",_,a.path);let g=Ee(_);typeof _=="object"&&_!=null&&Qt(_,".priority")||(g=g.updatePriority(h.getPriority()));const C=a.currentWriteId,p=Eh(t),f=Ly(g,h,p);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=f,a.currentWriteId=Wy(t),o.splice(o.indexOf(C),1),i=i.concat(Py(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Kn(t.serverSyncTree_,C,!0))}else c=!0,d="nodata",i=i.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0))}qt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}ma(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)gi(r[l]);Ih(t,t.transactionQueueTree_)}function Hy(t,e){let n,r=t.transactionQueueTree_;for(n=j(e);n!==null&&_i(r)===void 0;)r=vh(r,n),e=K(e),n=j(e);return r}function $y(t,e){const n=[];return qy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function qy(t,e,n){const r=_i(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);fa(e,i=>{qy(t,i,n)})}function ma(t,e){const n=_i(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Dy(e,n.length>0?n:void 0)}fa(e,r=>{ma(t,r)})}function Gy(t,e){const n=$s(Hy(t,e)),r=vh(t.transactionQueueTree_,e);return xN(r,i=>{du(t,i)}),du(t,r),My(r,i=>{du(t,i)}),n}function du(t,e){const n=_i(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Kn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Dy(e,void 0):n.length=s+1,qt(t.eventQueue_,$s(e),i);for(let o=0;o<r.length;o++)gi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const sm=function(t,e){const n=nP(t),r=n.namespace;n.domain==="firebase.com"&&$t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&$t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Yv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},nP=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=eP(t.substring(c,d)));const h=tP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class iP{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:sy(this._path)}get ref(){return new Dn(this._repo,this._path)}get _queryIdentifier(){const e=Wp(this._queryParams),n=Kd(e);return n==="{}"?"default":n}get _queryObject(){return Wp(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof Th))return!1;const n=this._repo===e._repo,r=Xd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Jk(this._path)}}class Dn extends Th{constructor(e,n){super(e,n,new nh,!1)}get parent(){const e=ly(this._path);return e===null?null:new Dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ol{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=Dc(this.ref,e);return new Ol(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ol(i,Dc(this.ref,r),ie)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function om(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?Dc(t._root,e):t._root}function Dc(t,e){return t=Ze(t),j(t._path)===null?MN("child","path",e):jy("child","path",e),new Dn(t._repo,de(t._path,e))}function oP(t,e){t=Ze(t),FN("set",t._path),bN("set",e,t._path);const n=new ta;return GN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class kh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new rP("value",this,new Ol(e.snapshotNode,new Dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new iP(this,e,n):null}matches(e){return e instanceof kh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function lP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{im(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new sP(n,s||void 0),l=new kh(o);return QN(t._repo,t,l),()=>im(t._repo,t,l)}function lm(t,e,n,r){return lP(t,"value",e,n,r)}lN(Dn);fN(Dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="FIREBASE_DATABASE_EMULATOR_HOST",bc={};let uP=!1;function cP(t,e,n,r){t.repoInfo_=new Yv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function dP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||$t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=sm(s,i),l=o.repoInfo,a;typeof process<"u"&&Ip&&(a=Ip[aP]),a?(s=`http://${a}?ns=${l.namespace}`,o=sm(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new Tk(t.name,t.options,e);UN("Invalid Firebase Database URL",o),z(o.path)||$t("Database URL must point to the root of a Firebase Database (not including a child path).");const c=fP(l,t,u,new Ik(t.name,n));return new pP(c,t)}function hP(t,e){const n=bc[e];(!n||n[t.key]!==t)&&$t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),YN(t),delete n[t.key]}function fP(t,e,n,r){let i=bc[e.name];i||(i={},bc[e.name]=i);let s=i[t.toURLString()];return s&&$t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VN(t,uP,n,r),i[t.toURLString()]=s,s}class pP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dn(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$t("Cannot call "+e+" on a deleted database.")}}function mP(t=uv(),e){const n=Wd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=aI("database");r&&gP(n,...r)}return n}function gP(t,e,n,r={}){t=Ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&$t("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&$t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new bo(bo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:uI(r.mockUserToken,t.app.options.projectId);s=new bo(o)}cP(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){ak(hi),ni(new rr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return dP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Sn(Tp,kp,t),Sn(Tp,kp,"esm2017")}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_P();function Rh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ky(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vP=Ky,Qy=new Us("auth","Firebase",Ky());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Bd("@firebase/auth");function yP(t,...e){Al.logLevel<=q.WARN&&Al.warn(`Auth (${hi}): ${t}`,...e)}function Mo(t,...e){Al.logLevel<=q.ERROR&&Al.error(`Auth (${hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,...e){throw Nh(t,...e)}function Rt(t,...e){return Nh(t,...e)}function Yy(t,e,n){const r=Object.assign(Object.assign({},vP()),{[e]:n});return new Us("auth","Firebase",r).create(e,{appName:t.name})}function Bt(t){return Yy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qy.create(t,...e)}function A(t,e,...n){if(!t)throw Nh(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mo(e),new Error(e)}function Gt(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wP(){return am()==="http:"||am()==="https:"}function am(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wP()||cI()||"connection"in navigator)?navigator.onLine:!0}function CP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ud()||rv()}get(){return EP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t,e){Gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=new qs(3e4,6e4);function bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mn(t,e,n,r,i={}){return Xy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=di(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Jy.fetch()(Zy(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Xy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SP),e);try{const i=new kP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw yo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw yo(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yy(t,c,u);yt(t,c)}}catch(i){if(i instanceof Ln)throw i;yt(t,"network-request-failed",{message:String(i)})}}async function Gs(t,e,n,r,i={}){const s=await Mn(t,e,n,r,i);return"mfaPendingCredential"in s&&yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Zy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ph(t.config,i):`${t.config.apiScheme}://${i}`}function TP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),IP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(t,e,r);return i.customData._tokenResponse=n,i}function um(t){return t!==void 0&&t.enterprise!==void 0}class RP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function NP(t,e){return Mn(t,"GET","/v2/recaptchaConfig",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t,e){return Mn(t,"POST","/v1/accounts:delete",e)}async function ew(t,e){return Mn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xP(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=xh(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ts(hu(i.auth_time)),issuedAtTime:ts(hu(i.iat)),expirationTime:ts(hu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hu(t){return Number(t)*1e3}function xh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=fl(n);return i?JSON.parse(i):(Mo("Failed to decode base64 JWT payload"),null)}catch(i){return Mo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cm(t){const e=xh(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&OP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ts(this.lastLoginAt),this.creationTime=ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xs(t,ew(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tw(s.providerUserInfo):[],l=DP(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Fc(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function LP(t){const e=Ze(t);await Ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tw(t){return t.map(e=>{var{providerId:n}=e,r=Rh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(t,e){const n=await Xy(t,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Zy(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Jy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MP(t,e){return Mn(t,"POST","/v2/accounts:revokeToken",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=cm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $r;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xs(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xP(this,e)}reload(){return LP(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(Bt(this.auth));const e=await this.getIdToken();return await xs(this,PP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:R,providerData:N,stsTokenManager:P}=n;A(m&&P,e,"internal-error");const I=$r.fromJSON(this.name,P);A(typeof m=="string",e,"internal-error"),Xt(d,e.name),Xt(h,e.name),A(typeof E=="boolean",e,"internal-error"),A(typeof R=="boolean",e,"internal-error"),Xt(_,e.name),Xt(g,e.name),Xt(v,e.name),Xt(C,e.name),Xt(p,e.name),Xt(f,e.name);const b=new Mt({uid:m,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:R,photoURL:g,phoneNumber:_,tenantId:v,stsTokenManager:I,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(b.providerData=N.map(D=>Object.assign({},D))),C&&(b._redirectEventId=C),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new $r;i.updateFromServerResponse(n);const s=new Mt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ll(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new $r;l.updateFromIdToken(r);const a=new Mt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=new Map;function Ft(t){Gt(t instanceof Function,"Expected a class definition");let e=dm.get(t);return e?(Gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nw.type="NONE";const hm=nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(Ft(hm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft(hm);const o=Fo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Mt._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new qr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new qr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lw(e))return"Blackberry";if(aw(e))return"Webos";if(Oh(e))return"Safari";if((e.includes("chrome/")||iw(e))&&!e.includes("edge/"))return"Chrome";if(ow(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rw(t=Pe()){return/firefox\//i.test(t)}function Oh(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iw(t=Pe()){return/crios\//i.test(t)}function sw(t=Pe()){return/iemobile/i.test(t)}function ow(t=Pe()){return/android/i.test(t)}function lw(t=Pe()){return/blackberry/i.test(t)}function aw(t=Pe()){return/webos/i.test(t)}function ga(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FP(t=Pe()){var e;return ga(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UP(){return dI()&&document.documentMode===10}function uw(t=Pe()){return ga(t)||ow(t)||aw(t)||lw(t)||/windows phone/i.test(t)||sw(t)}function jP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t,e=[]){let n;switch(t){case"Browser":n=fm(Pe());break;case"Worker":n=`${fm(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e={}){return Mn(t,"GET","/v2/passwordPolicy",bn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=6;class VP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pm(this),this.idTokenSubscription=new pm(this),this.beforeStateQueue=new BP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ew(this,{idToken:e}),r=await Mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(It(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ll(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(Bt(this));const n=e?Ze(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(Bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(Bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zP(this),n=new VP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gr(t){return Ze(t)}class pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=wI(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $P(t){_a=t}function dw(t){return _a.loadJS(t)}function qP(){return _a.recaptchaEnterpriseScript}function GP(){return _a.gapiScript}function KP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const QP="recaptcha-enterprise",YP="NO_RECAPTCHA";class JP{constructor(e){this.type=QP,this.auth=gr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{NP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new RP(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;um(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(YP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&um(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=qP();a.length!==0&&(a+=l),dw(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function mm(t,e,n,r=!1){const i=new JP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Uc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await mm(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await mm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t,e){const n=Wd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ml(s,e??{}))return i;yt(i,"already-initialized")}return n.initialize({options:e})}function ZP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ex(t,e,n){const r=gr(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=hw(e),{host:o,port:l}=tx(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),nx()}function hw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tx(t){const e=hw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gm(o)}}}function gm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function rx(t,e){return Mn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(t,e){return Gs(t,"POST","/v1/accounts:signInWithPassword",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e){return Gs(t,"POST","/v1/accounts:signInWithEmailLink",bn(t,e))}async function ox(t,e){return Gs(t,"POST","/v1/accounts:signInWithEmailLink",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Ah{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Os(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Os(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uc(e,n,"signInWithPassword",ix);case"emailLink":return sx(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uc(e,r,"signUpPassword",rx);case"emailLink":return ox(e,{idToken:n,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e){return Gs(t,"POST","/v1/accounts:signInWithIdp",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx="http://localhost";class cr extends Ah{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:lx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ux(t){const e=ji(Bi(t)).link,n=e?ji(Bi(e)).deep_link_id:null,r=ji(Bi(t)).deep_link_id;return(r?ji(Bi(r)).link:null)||r||n||e||t}class Lh{constructor(e){var n,r,i,s,o,l;const a=ji(Bi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=ax((i=a.mode)!==null&&i!==void 0?i:null);A(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ux(e);try{return new Lh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Os._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lh.parseLink(n);return A(r,"argument-error"),Os._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends fw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Ks{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return on.credential(n,r)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Ks{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Ks{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e){return Gs(t,"POST","/v1/accounts:signUp",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mt._fromIdTokenResponse(e,r,i),o=_m(r);return new dr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_m(r);return new dr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _m(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends Ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Dl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Dl(e,n,r,i)}}function pw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Dl._fromErrorAndOperation(t,s,e,r):s})}async function dx(t,e,n=!1){const r=await xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx(t,e,n=!1){const{auth:r}=t;if(It(r.app))return Promise.reject(Bt(r));const i="reauthenticate";try{const s=await xs(t,pw(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=xh(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),dr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(t,e,n=!1){if(It(t.app))return Promise.reject(Bt(t));const r="signIn",i=await pw(t,r,e),s=await dr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fx(t,e){return mw(gr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t){const e=gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function px(t,e,n){if(It(t.app))return Promise.reject(Bt(t));const r=gr(t),o=await Uc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cx).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&gw(t),a}),l=await dr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function mx(t,e,n){return It(t.app)?Promise.reject(Bt(t)):fx(Ze(t),vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gw(t),r})}function gx(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function _x(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function vx(t){return Ze(t).signOut()}const bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bl,"1"),this.storage.removeItem(bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(){const t=Pe();return Oh(t)||ga(t)}const wx=1e3,Ex=10;class vw extends _w{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yx()&&jP(),this.fallbackToPolling=uw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);UP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ex):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vw.type="LOCAL";const Cx=vw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw extends _w{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yw.type="SESSION";const ww=yw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Sx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Dh("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function Tx(t){Nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function kx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Nx(){return Ew()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="firebaseLocalStorageDb",Px=1,Ml="firebaseLocalStorage",Sw="fbase_key";class Qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([Ml],e?"readwrite":"readonly").objectStore(Ml)}function xx(){const t=indexedDB.deleteDatabase(Cw);return new Qs(t).toPromise()}function jc(){const t=indexedDB.open(Cw,Px);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ml,{keyPath:Sw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ml)?e(r):(r.close(),await xx(),e(await jc()))})})}async function vm(t,e,n){const r=ya(t,!0).put({[Sw]:e,value:n});return new Qs(r).toPromise()}async function Ox(t,e){const n=ya(t,!1).get(e),r=await new Qs(n).toPromise();return r===void 0?null:r.value}function ym(t,e){const n=ya(t,!0).delete(e);return new Qs(n).toPromise()}const Ax=800,Lx=3;class Iw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Lx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ew()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(Nx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kx(),!this.activeServiceWorker)return;this.sender=new Ix(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await vm(e,bl,"1"),await ym(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ox(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ym(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ya(i,!1).getAll();return new Qs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iw.type="LOCAL";const Dx=Iw;new qs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(t,e){return e?Ft(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends Ah{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Mx(t){return mw(t.auth,new bh(t),t.bypassAuthState)}function Fx(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),hx(n,new bh(t),t.bypassAuthState)}async function Ux(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),dx(n,new bh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mx;case"linkViaPopup":case"linkViaRedirect":return Ux;case"reauthViaPopup":case"reauthViaRedirect":return Fx;default:yt(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=new qs(2e3,1e4);class br extends Tw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=Dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jx.get())};e()}}br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx="pendingRedirect",Uo=new Map;class zx extends Tw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const r=await Wx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wx(t,e){const n=$x(e),r=Hx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Vx(t,e){Uo.set(t._key(),e)}function Hx(t){return Ft(t._redirectPersistence)}function $x(t){return Fo(Bx,t.config.apiKey,t.name)}async function qx(t,e,n=!1){if(It(t.app))return Promise.reject(Bt(t));const r=gr(t),i=bx(r,e),o=await new zx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=10*60*1e3;class Kx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gx&&this.cachedEventUids.clear(),this.cachedEventUids.has(wm(e))}saveEventToCache(e){this.cachedEventUids.add(wm(e)),this.lastProcessedEventTime=Date.now()}}function wm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(t,e={}){return Mn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xx=/^https?/;async function Zx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yx(t);for(const n of e)try{if(eO(n))return}catch{}yt(t,"unauthorized-domain")}function eO(t){const e=Mc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xx.test(n))return!1;if(Jx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new qs(3e4,6e4);function Em(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nO(t){return new Promise((e,n)=>{var r,i,s;function o(){Em(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Em(),n(Rt(t,"network-request-failed"))},timeout:tO.get()})}if(!((i=(r=Nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nt().gapi)===null||s===void 0)&&s.load)o();else{const l=KP("iframefcb");return Nt()[l]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},dw(`${GP()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw jo=null,e})}let jo=null;function rO(t){return jo=jo||nO(t),jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new qs(5e3,15e3),sO="__/auth/iframe",oO="emulator/auth/iframe",lO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uO(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ph(e,oO):`https://${t.config.authDomain}/${sO}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=aO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${di(r).slice(1)}`}async function cO(t){const e=await rO(t),n=Nt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:uO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),l=Nt().setTimeout(()=>{s(o)},iO.get());function a(){Nt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hO=500,fO=600,pO="_blank",mO="http://localhost";class Cm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gO(t,e,n,r=hO,i=fO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},dO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Pe().toLowerCase();n&&(l=iw(u)?pO:n),rw(u)&&(e=e||mO,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[_,g])=>`${h}${_}=${g},`,"");if(FP(u)&&l!=="_self")return _O(e||"",l),new Cm(null);const d=window.open(e||"",l,c);A(d,t,"popup-blocked");try{d.focus()}catch{}return new Cm(d)}function _O(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="__/auth/handler",yO="emulator/auth/handler",wO=encodeURIComponent("fac");async function Sm(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof fw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof Ks){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${wO}=${encodeURIComponent(a)}`:"";return`${EO(t)}?${di(l).slice(1)}${u}`}function EO({config:t}){return t.emulator?Ph(t,yO):`https://${t.authDomain}/${vO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="webStorageSupport";class CO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ww,this._completeRedirectFn=qx,this._overrideRedirectResult=Vx}async _openPopup(e,n,r,i){var s;Gt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sm(e,n,r,Mc(),i);return gO(e,o,Dh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sm(e,n,r,Mc(),i);return Tx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cO(e),r=new Kx(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fu,{type:fu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fu];o!==void 0&&n(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uw()||Oh()||ga()}}const SO=CO;var Im="@firebase/auth",Tm="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kO(t){ni(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cw(t)},u=new HP(r,i,s,a);return ZP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new rr("auth-internal",e=>{const n=gr(e.getProvider("auth").getImmediate());return(r=>new IO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Im,Tm,TO(t)),Sn(Im,Tm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=5*60,NO=nv("authIdTokenMaxAge")||RO;let km=null;const PO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NO)return;const i=n==null?void 0:n.token;km!==i&&(km=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xO(t=uv()){const e=Wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XP(t,{popupRedirectResolver:SO,persistence:[Dx,Cx,ww]}),r=nv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=PO(s.toString());_x(n,o,()=>o(n.currentUser)),gx(n,l=>o(l))}}const i=ev("auth");return i&&ex(n,`http://${i}`),n}function OO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$P({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kO("Browser");function AO(t){const e=mP(),n=om(e,"CV/"),{children:r}=t,i=xO(),[s,o]=k.useState(""),[l,a]=k.useState(""),[u,c]=k.useState(""),[d,h]=k.useState(!1),_={curriculums:[],carrito:[]},[g,v]=k.useReducer(bT,_);k.useEffect(()=>{lm(n,I=>{I.val()}),C()},[]);const C=async()=>{const I=await ue.get("https://ecomercechuncano-default-rtdb.europe-west1.firebasedatabase.app/CV.json"),b=I.data.results;console.log("que me trae datita",b);const D=b.map(De=>({id:De.id,...De}));console.log("Currículums mapeados:",D),v({type:"TRAER CV",payload:D}),console.log("traer CV",I.data.results)},p=I=>{},f=I=>{console.log("me agrego al carrito",I),g.carrito.some(D=>D.nombre===I.nombre)?alert("ya agregaste este producto a tu carriro"):(v({type:"AGREGAR_CV_CARRITO",payload:I}),console.log("carrito",g.carrito))},m=I=>{v({type:"ELIMINAR_CV_CARRITO",payload:{nombre:I}})},E=async I=>{console.log("guardo el user:",I);const b=om(e,"usuarios/"+I.uid);await oP(b,I),console.log("esto me trae la refusuario",I)},R=()=>{px(i,l,u).then(async I=>{const b=I.user;console.log("lo que me trae user",b),await E({email:b.email,uid:b.uid,nombre:b.displayName}),h(!0)}).catch(I=>{const b=I.code,D=I.message;console.error(b,D)})},N=()=>{mx(i,l,u).then(I=>{const b=I.user;console.log("Usuario logueado:",b),h(!0)}).catch(I=>{const b=I.code,D=I.message;console.error(b,D)})},P=()=>{vx(i).then(()=>{console.log("Usuario deslogueado"),h(!1)}).catch(I=>{console.error(I.message)})};return y.jsx(y.Fragment,{children:y.jsx(Pt.Provider,{value:{onValue:lm,traerCurriculums:C,getCurriculumById:p,agregarCarrito:f,eliminarDelCarrito:m,guardarUsuario:E,crearUsuario:R,logueoUsuario:N,desloguearUsuario:P,curriculums:g.curriculums,carrito:g.carrito,logueado:d,setLogueado:h,setEmail:a,email:l,setPass:c,setNombre:o},children:r})})}const LO="_main_c1vej_1",DO="_divImg_c1vej_13",bO="_imgDescr_c1vej_24",MO="_descripcion_c1vej_36",FO="_botonera_c1vej_45",UO="_btnCard_c1vej_53",Zt={main:LO,divImg:DO,imgDescr:bO,descripcion:MO,botonera:FO,btnCard:UO};function jO(){const{curriculums:t}=k.useContext(Pt),{nombre:e}=LC();if(!t)return y.jsx("div",{children:"map no encontrado"});const n=t.find(l=>l.nombre==e);if(console.log("curriculum",n),console.log("Curriculums:",t),console.log("nombre recibido:",e),!n)return y.jsx("div",{children:"producto no encontrado"});const{descripcion:r,img:i,intro:s,precio:o}=n;return y.jsx(y.Fragment,{children:y.jsxs("div",{className:Zt.divImg,children:[y.jsx("img",{src:i,alt:"",className:Zt.imgDescr}),y.jsx("div",{className:Zt.titulo,children:y.jsxs("h4",{children:[e," "]})}),y.jsxs("div",{className:Zt.descripcion,children:[y.jsxs("p",{className:Zt.txtDescrip,children:[r," "]}),y.jsxs("h4",{className:Zt.txtDescrip,children:[o," "]}),y.jsx("div",{className:Zt.botonera,children:y.jsx("button",{className:Zt.btnCard,children:"Agregar al carrito"})})]})]})})}const BO="_sectCarrito_1v3ol_1",zO="_carritoTitle_1v3ol_13",WO="_nombreElemento_1v3ol_17",VO="_contElementos_1v3ol_21",HO="_btnEliminar_1v3ol_33",$O="_totalCarrito_1v3ol_43",qO="_divElemento_1v3ol_54",GO="_ulCarrito_1v3ol_63",KO="_liCarrito_1v3ol_75",QO="_groupTxtElemento_1v3ol_90",YO="_precioElemento_1v3ol_108",qe={sectCarrito:BO,carritoTitle:zO,nombreElemento:WO,contElementos:VO,btnEliminar:HO,totalCarrito:$O,divElemento:qO,ulCarrito:GO,liCarrito:KO,groupTxtElemento:QO,precioElemento:YO},JO="_btnEliminar_1cyds_1",XO="_contTotal_1cyds_11",ZO="_contTxtTotal_1cyds_26",eA="_tituloTotal_1cyds_37",wo={btnEliminar:JO,contTotal:XO,contTxtTotal:ZO,tituloTotal:eA};function tA(){const{carrito:t}=k.useContext(Pt),e=t.reduce((n,r)=>n+parseFloat(r.precio),0);return y.jsxs("div",{className:wo.contTotal,children:[y.jsxs("div",{className:wo.contTxtTotal,children:[y.jsx("h4",{className:wo.tituloTotal,children:"Total a pagar: "}),y.jsxs("h4",{children:[" ",e," $"]})]}),y.jsx("button",{className:wo.btnEliminar,children:"Pagar"})]})}function nA(){const{carrito:t,eliminarDelCarrito:e}=k.useContext(Pt),n=r=>{e(r)};return y.jsx(y.Fragment,{children:y.jsxs("section",{className:qe.sectCarrito,children:[y.jsxs("div",{className:qe.contElementos,children:[y.jsx("div",{className:qe.divTitulo,children:y.jsx("h1",{className:qe.carritoTitle,children:"Tu Pedido"})}),y.jsx("div",{className:qe.divElemento,children:y.jsx("ul",{className:qe.ulCarrito,children:t.length>0?t.map(r=>y.jsxs("li",{className:qe.liCarrito,children:[y.jsxs("div",{className:qe.groupTxtElemento,children:[y.jsx("img",{src:r.img,alt:"",width:"60px",height:"70"}),y.jsx("h5",{className:qe.nombreElemento,children:r.nombre}),y.jsxs("p",{className:qe.precioElemento,children:[" ","$ ",r.precio," "]})]}),y.jsx("div",{className:qe.groupBtnElemento,children:y.jsx("button",{onClick:()=>n(r.nombre),className:qe.btnEliminar,children:"Eliminar"})})]},r.nombre)):y.jsx("p",{children:"No tienes productos en tu carrito."})})})]}),y.jsx("div",{className:qe.totalCarrito,children:y.jsx(tA,{})})]})})}const rA={apiKey:"AIzaSyCIPNtt7iEUC4Gf5FDWY-S9Wvhpfl1oRY8",authDomain:"ecomercechuncano.firebaseapp.com",databaseURL:"https://ecomercechuncano-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ecomercechuncano",storageBucket:"ecomercechuncano.appspot.com",messagingSenderId:"311471080587",appId:"1:311471080587:web:28f012a7379379e961008e",measurementId:"G-94Q0LHBCWC"};av(rA);function iA(){return y.jsx(eS,{basename:"/echuncano",children:y.jsx(AO,{children:y.jsx(ZS,{children:y.jsxs(GC,{children:[y.jsx(zn,{path:"/",element:y.jsx(uS,{})}),y.jsx(zn,{path:"/cliente",element:y.jsx(qS,{})}),y.jsx(zn,{path:"/productos",element:y.jsx(OS,{})}),y.jsx(zn,{path:"/productos/*",element:y.jsx(jO,{})}),y.jsx(zn,{path:"/somos",element:y.jsx(QS,{})}),y.jsx(zn,{path:"/carrito",element:y.jsx(nA,{})})]})})})})}pu.createRoot(document.getElementById("root")).render(y.jsx(iA,{}));
