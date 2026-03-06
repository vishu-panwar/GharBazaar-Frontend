(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9462],{62898:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a=r(2265),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),i=(e,t)=>{let r=(0,a.forwardRef)(({color:r="currentColor",size:i=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:d="",children:c,...u},p)=>(0,a.createElement)("svg",{ref:p,...s,width:i,height:i,stroke:r,strokeWidth:l?24*Number(n)/Number(i):n,className:["lucide",`lucide-${o(e)}`,d].join(" "),...u},[...t.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r}},64280:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},62601:function(e,t,r){"use strict";var a,s;e.exports=(null==(a=r.g.process)?void 0:a.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(58960)},33859:function(e,t,r){Promise.resolve().then(r.bind(r,6787))},6787:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var a=r(57437),s=r(2265),o=r(64280),i=r(5925),n=r(68496);function l(){let[e,t]=(0,s.useState)(!0),[r,l]=(0,s.useState)("all"),[d,c]=(0,s.useState)([]),u=async()=>{try{var e;t(!0);let a=await n.backendApi.employee.getLeads(r);if(!(null==a?void 0:a.success))throw Error((null==a?void 0:a.error)||"Failed to load leads");c((null==a?void 0:null===(e=a.data)||void 0===e?void 0:e.leads)||[])}catch(e){i.ZP.error((null==e?void 0:e.message)||"Failed to load leads")}finally{t(!1)}};(0,s.useEffect)(()=>{u()},[r]);let p=(0,s.useMemo)(()=>{let e=d.length,t=0,r=0,a=0;for(let e of d){let s=(e.status||"").toLowerCase();"converted"===s&&(t+=1),"new"===s&&(r+=1),a+=Number(e.commissionAmount||0)}return{total:e,converted:t,newLeads:r,commission:a}},[d]);return(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Lead Management"}),(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Referral leads submitted by promotional partners"})]}),(0,a.jsxs)("button",{onClick:u,className:"inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,a.jsx)(o.Z,{size:16}),"Refresh"]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4",children:[(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"Total Leads"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:p.total})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/40 dark:bg-blue-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-blue-700 dark:text-blue-400",children:"New"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:p.newLeads})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900/40 dark:bg-green-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-green-700 dark:text-green-400",children:"Converted"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:p.converted})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-900/40 dark:bg-purple-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-purple-700 dark:text-purple-400",children:"Commission"}),(0,a.jsxs)("p",{className:"text-xl font-semibold",children:["INR ",p.commission.toLocaleString("en-IN")]})]})]}),(0,a.jsx)("div",{className:"flex gap-2",children:["all","new","contacted","converted","closed"].map(e=>(0,a.jsx)("button",{onClick:()=>l(e),className:"rounded-lg px-3 py-2 text-sm capitalize ".concat(r===e?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"),children:e},e))}),(0,a.jsx)("div",{className:"overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",children:(0,a.jsxs)("table",{className:"min-w-full text-sm",children:[(0,a.jsx)("thead",{className:"border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-4 py-3 text-left font-semibold",children:"Lead"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-semibold",children:"Promotional Partner"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-semibold",children:"Status"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-semibold",children:"Commission"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-semibold",children:"Created"})]})}),(0,a.jsxs)("tbody",{children:[e&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"px-4 py-6 text-gray-500",colSpan:5,children:"Loading leads..."})}),!e&&0===d.length&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"px-4 py-6 text-gray-500",colSpan:5,children:"No leads found."})}),!e&&d.map(e=>{var t,r,s;return(0,a.jsxs)("tr",{className:"border-b border-gray-100 dark:border-gray-900",children:[(0,a.jsxs)("td",{className:"px-4 py-3",children:[(0,a.jsx)("p",{className:"font-medium text-gray-900 dark:text-gray-100",children:e.leadName||"Unknown lead"}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:e.leadContact||"-"}),(0,a.jsxs)("p",{className:"text-xs text-gray-500",children:["Ref: ",e.referralCode||"-"]})]}),(0,a.jsxs)("td",{className:"px-4 py-3",children:[(0,a.jsx)("p",{className:"font-medium",children:(null===(t=e.promoter)||void 0===t?void 0:t.name)||"Unknown partner"}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:(null===(r=e.promoter)||void 0===r?void 0:r.uid)||(null===(s=e.promoter)||void 0===s?void 0:s.email)||"-"})]}),(0,a.jsx)("td",{className:"px-4 py-3",children:(0,a.jsx)("span",{className:"rounded-full bg-gray-100 px-2 py-1 text-xs capitalize dark:bg-gray-800",children:e.status||"new"})}),(0,a.jsxs)("td",{className:"px-4 py-3",children:["INR ",Number(e.commissionAmount||0).toLocaleString("en-IN")]}),(0,a.jsx)("td",{className:"px-4 py-3 text-xs text-gray-500",children:e.createdAt?new Date(e.createdAt).toLocaleString():"-"})]},e.id)})]})]})})]})}},58960:function(e){!function(){var t={229:function(e){var t,r,a,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function n(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l=[],d=!1,c=-1;function u(){d&&a&&(d=!1,a.length?l=a.concat(l):c=-1,l.length&&p())}function p(){if(!d){var e=n(u);d=!0;for(var t=l.length;t;){for(a=l,l=[];++c<t;)a&&a[c].run();c=-1,t=l.length}a=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||d||n(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function a(e){var s=r[e];if(void 0!==s)return s.exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,a),i=!1}finally{i&&delete r[e]}return o.exports}a.ab="//";var s=a(229);e.exports=s}()},30622:function(e,t,r){"use strict";var a=r(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var a,o={},d=null,c=null;for(a in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:c,props:o,_owner:n.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},57437:function(e,t,r){"use strict";e.exports=r(30622)},5925:function(e,t,r){"use strict";let a,s;r.d(t,{x7:function(){return ep},ZP:function(){return em},Am:function(){return F}});var o,i=r(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,i):o+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},x=(e,t,r,a,s)=>{var o;let i=f(e),n=m[i]||(m[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),o=m[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),n},h=(e,t,r)=>e.reduce((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return x(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let y,b,v,w=g.bind({k:1});function N(e,t){let r=this||{};return function(){let a=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=g.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),y(d,n)}return t?t(s):s}}var k=e=>"function"==typeof e,j=(e,t)=>k(e)?e(t):e,E=(a=0,()=>(++a).toString()),C=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},L="default",_=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return _(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},T=[],O={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},$={},A=(e,t=L)=>{$[t]=_($[t]||O,e),T.forEach(([e,r])=>{e===t&&r($[t])})},S=e=>Object.keys($).forEach(t=>A(e,t)),I=e=>Object.keys($).find(t=>$[t].toasts.some(t=>t.id===e)),D=(e=L)=>t=>{A(t,e)},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e={},t=L)=>{let[r,a]=(0,i.useState)($[t]||O),s=(0,i.useRef)($[t]);(0,i.useEffect)(()=>(s.current!==$[t]&&a($[t]),T.push([t,a]),()=>{let e=T.findIndex(([e])=>e===t);e>-1&&T.splice(e,1)}),[t]);let o=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:o}},z=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),M=e=>(t,r)=>{let a=z(t,e,r);return D(a.toasterId||I(a.id))({type:2,toast:a}),a.id},F=(e,t)=>M("blank")(e,t);F.error=M("error"),F.success=M("success"),F.loading=M("loading"),F.custom=M("custom"),F.dismiss=(e,t)=>{let r={type:3,toastId:e};t?D(t)(r):S(r)},F.dismissAll=e=>F.dismiss(void 0,e),F.remove=(e,t)=>{let r={type:4,toastId:e};t?D(t)(r):S(r)},F.removeAll=e=>F.remove(void 0,e),F.promise=(e,t,r)=>{let a=F.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?j(t.success,e):void 0;return s?F.success(s,{id:a,...r,...null==r?void 0:r.success}):F.dismiss(a),e}).catch(e=>{let s=t.error?j(t.error,e):void 0;s?F.error(s,{id:a,...r,...null==r?void 0:r.error}):F.dismiss(a)}),e};var Z=1e3,H=(e,t="default")=>{let{toasts:r,pausedAt:a}=R(e,t),s=(0,i.useRef)(new Map).current,o=(0,i.useCallback)((e,t=Z)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,r)},[]);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&F.dismiss(r.id);return}return setTimeout(()=>F.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,i.useCallback)(D(t),[t]),l=(0,i.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,i.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,i.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,i.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:o}=t||{},i=r.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,i.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},U=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,q=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${W} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Y=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Y} 1s linear infinite;
`,J=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Q=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=N("div")`
  position: absolute;
`,X=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===r?null:i.createElement(X,null,i.createElement(G,{...a}),"loading"!==r&&i.createElement(V,null,"error"===r?i.createElement(q,{...a}):i.createElement(Q,{...a})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eo=N("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ei=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=i.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(er,{toast:e}),n=i.createElement(ei,{...e.ariaProps},j(e.message,e));return i.createElement(eo,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,p.p=void 0,y=o,b=void 0,v=void 0;var ed=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let o=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:o,className:t,style:r},s)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:o,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=H(r,o);return i.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let o=r.position||t,n=ec(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(ed,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:n},"custom"===r.type?j(r.message,r):s?s(r):i.createElement(el,{toast:r,position:o}))}))},em=F}},function(e){e.O(0,[8496,2971,4938,1744],function(){return e(e.s=33859)}),_N_E=e.O()}]);