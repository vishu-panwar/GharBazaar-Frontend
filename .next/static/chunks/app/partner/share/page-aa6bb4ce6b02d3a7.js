(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1292],{62898:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a=r(2265),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),i=(e,t)=>{let r=(0,a.forwardRef)(({color:r="currentColor",size:i=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:d="",children:c,...u},p)=>(0,a.createElement)("svg",{ref:p,...s,width:i,height:i,stroke:r,strokeWidth:l?24*Number(n)/Number(i):n,className:["lucide",`lucide-${o(e)}`,d].join(" "),...u},[...t.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r}},56224:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},64280:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},41827:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},62601:function(e,t,r){"use strict";var a,s;e.exports=(null==(a=r.g.process)?void 0:a.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(58960)},83115:function(e,t,r){Promise.resolve().then(r.bind(r,41799))},41799:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(57437),s=r(2265),o=r(64280),i=r(41827),n=r(56224),l=r(5925),d=r(68496);let c=e=>{let t=Number(e);return Number.isFinite(t)?t:0},u=e=>(e||"").toLowerCase(),p=e=>"INR ".concat(e.toLocaleString("en-IN")),m=e=>{if(!e)return"-";let t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})};function g(){let[e,t]=(0,s.useState)(!0),[r,g]=(0,s.useState)([]),[f,y]=(0,s.useState)(""),[x,h]=(0,s.useState)(""),b=async()=>{try{t(!0);let e=await d.backendApi.partners.getReferrals();if(!(null==e?void 0:e.success))throw Error((null==e?void 0:e.message)||(null==e?void 0:e.error)||"Failed to load referral links");let r=Array.isArray(null==e?void 0:e.data)?e.data:[];g(r)}catch(e){l.ZP.error((null==e?void 0:e.message)||"Failed to load referral links")}finally{t(!1)}};(0,s.useEffect)(()=>{b()},[]);let v=(0,s.useMemo)(()=>{let e=new Map;for(let t of r){let r=(t.referralCode||"").trim()||"unassigned",a=e.get(r)||{code:r,leads:0,converted:0,commission:0};a.leads+=1,"converted"===u(t.status)&&(a.converted+=1),a.commission+=c(t.commissionAmount),(!a.latestLeadAt||+new Date(t.createdAt||0)>+new Date(a.latestLeadAt||0))&&(a.latestLeadAt=t.createdAt),e.set(r,a)}return Array.from(e.values()).sort((e,t)=>t.leads-e.leads)},[r]);(0,s.useEffect)(()=>{!x&&v.length>0&&h(v[0].code)},[v,x]);let k=(0,s.useMemo)(()=>{let e=f.trim().toLowerCase();return e?v.filter(t=>t.code.toLowerCase().includes(e)):v},[v,f]),w=(0,s.useMemo)(()=>window.location.origin,[]),j=(0,s.useMemo)(()=>x?"".concat(w,"/signup?ref=").concat(encodeURIComponent(x)):"",[w,x]),N=(0,s.useMemo)(()=>v.find(e=>e.code===x),[v,x]),C=(0,s.useMemo)(()=>"Discover verified properties and expert support on GharBazaar. Use my referral code ".concat(x," while signing up."),[x]),E=async(e,t)=>{try{await navigator.clipboard.writeText(e),l.ZP.success("".concat(t," copied"))}catch(e){l.ZP.error("Unable to copy ".concat(t.toLowerCase()))}},L=e=>{if(!j)return;let t=encodeURIComponent("".concat(C," ").concat(j)),r=encodeURIComponent(j),a="";"whatsapp"===e&&(a="https://wa.me/?text=".concat(t)),"facebook"===e&&(a="https://www.facebook.com/sharer/sharer.php?u=".concat(r)),"linkedin"===e&&(a="https://www.linkedin.com/sharing/share-offsite/?url=".concat(r)),"email"===e&&(a="mailto:?subject=".concat(encodeURIComponent("Join GharBazaar"),"&body=").concat(t)),a&&window.open(a,"_blank","noopener,noreferrer")},A=(0,s.useMemo)(()=>v.reduce((e,t)=>(e.codes+=1,e.leads+=t.leads,e.converted+=t.converted,e.commission+=t.commission,e),{codes:0,leads:0,converted:0,commission:0}),[v]);return(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Share Links"}),(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Referral links generated from real referral code usage"})]}),(0,a.jsxs)("button",{onClick:b,className:"inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,a.jsx)(o.Z,{size:16}),"Refresh"]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4",children:[(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"Active Referral Codes"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:A.codes})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/30 dark:bg-blue-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-blue-700 dark:text-blue-400",children:"Total Leads"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:A.leads})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900/30 dark:bg-green-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-green-700 dark:text-green-400",children:"Converted Leads"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:A.converted})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-900/30 dark:bg-purple-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-purple-700 dark:text-purple-400",children:"Commission"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:p(A.commission)})]})]}),(0,a.jsxs)("div",{className:"grid gap-6 lg:grid-cols-2",children:[(0,a.jsxs)("div",{className:"space-y-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(i.Z,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),(0,a.jsx)("input",{value:f,onChange:e=>y(e.target.value),placeholder:"Search referral codes",className:"w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900"})]}),(0,a.jsx)("div",{className:"overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700",children:(0,a.jsxs)("table",{className:"w-full text-sm",children:[(0,a.jsx)("thead",{className:"bg-gray-50 dark:bg-gray-900",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-3 py-2 text-left font-medium text-gray-600 dark:text-gray-300",children:"Code"}),(0,a.jsx)("th",{className:"px-3 py-2 text-left font-medium text-gray-600 dark:text-gray-300",children:"Leads"}),(0,a.jsx)("th",{className:"px-3 py-2 text-left font-medium text-gray-600 dark:text-gray-300",children:"Converted"}),(0,a.jsx)("th",{className:"px-3 py-2 text-left font-medium text-gray-600 dark:text-gray-300",children:"Commission"})]})}),(0,a.jsxs)("tbody",{children:[e&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"px-3 py-6 text-center text-gray-500",colSpan:4,children:"Loading referral codes..."})}),!e&&0===k.length&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"px-3 py-6 text-center text-gray-500",colSpan:4,children:"No referral codes found."})}),!e&&k.map(e=>(0,a.jsxs)("tr",{className:"cursor-pointer border-t border-gray-100 dark:border-gray-800 ".concat(x===e.code?"bg-blue-50 dark:bg-blue-900/20":""),onClick:()=>h(e.code),children:[(0,a.jsx)("td",{className:"px-3 py-2 font-medium text-gray-900 dark:text-gray-100",children:e.code}),(0,a.jsx)("td",{className:"px-3 py-2 text-gray-700 dark:text-gray-300",children:e.leads}),(0,a.jsx)("td",{className:"px-3 py-2 text-gray-700 dark:text-gray-300",children:e.converted}),(0,a.jsx)("td",{className:"px-3 py-2 text-gray-700 dark:text-gray-300",children:p(e.commission)})]},e.code))]})]})})]}),(0,a.jsxs)("div",{className:"space-y-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsx)("h2",{className:"text-sm font-semibold text-gray-900 dark:text-gray-100",children:"Selected Share Link"}),(0,a.jsx)("div",{className:"rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300",children:j||"Select a referral code to generate link"}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,a.jsxs)("button",{onClick:()=>E(j,"Link"),disabled:!j,className:"inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400",children:[(0,a.jsx)(n.Z,{size:16})," Copy Link"]}),(0,a.jsxs)("button",{onClick:()=>E(x,"Referral code"),disabled:!x,className:"inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200 disabled:cursor-not-allowed dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,a.jsx)(n.Z,{size:16})," Copy Code"]}),(0,a.jsx)("button",{onClick:()=>L("whatsapp"),disabled:!j,className:"rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400",children:"WhatsApp"}),(0,a.jsx)("button",{onClick:()=>L("facebook"),disabled:!j,className:"rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400",children:"Facebook"}),(0,a.jsx)("button",{onClick:()=>L("linkedin"),disabled:!j,className:"rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-gray-400",children:"LinkedIn"}),(0,a.jsx)("button",{onClick:()=>L("email"),disabled:!j,className:"rounded-lg bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400",children:"Email"})]}),N&&(0,a.jsxs)("div",{className:"rounded-lg border border-gray-200 p-3 text-sm dark:border-gray-700",children:[(0,a.jsx)("p",{className:"font-medium text-gray-900 dark:text-gray-100",children:"Code Performance"}),(0,a.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300",children:[(0,a.jsxs)("span",{children:["Leads: ",N.leads]}),(0,a.jsxs)("span",{children:["Converted: ",N.converted]}),(0,a.jsxs)("span",{children:["Commission: ",p(N.commission)]}),(0,a.jsxs)("span",{children:["Last lead: ",m(N.latestLeadAt)]})]})]}),(0,a.jsxs)("div",{className:"rounded-lg border border-gray-200 p-3 text-sm dark:border-gray-700",children:[(0,a.jsx)("p",{className:"mb-1 font-medium text-gray-900 dark:text-gray-100",children:"Share Message"}),(0,a.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:C})]})]})]}),(0,a.jsx)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400",children:"Shared referral links route prospects into the same backend referral and conversion pipeline tracked by employee and admin portals."})]})}},58960:function(e){!function(){var t={229:function(e){var t,r,a,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function n(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l=[],d=!1,c=-1;function u(){d&&a&&(d=!1,a.length?l=a.concat(l):c=-1,l.length&&p())}function p(){if(!d){var e=n(u);d=!0;for(var t=l.length;t;){for(a=l,l=[];++c<t;)a&&a[c].run();c=-1,t=l.length}a=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||d||n(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function a(e){var s=r[e];if(void 0!==s)return s.exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,a),i=!1}finally{i&&delete r[e]}return o.exports}a.ab="//";var s=a(229);e.exports=s}()},30622:function(e,t,r){"use strict";var a=r(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var a,o={},d=null,c=null;for(a in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:c,props:o,_owner:n.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},57437:function(e,t,r){"use strict";e.exports=r(30622)},5925:function(e,t,r){"use strict";let a,s;r.d(t,{x7:function(){return ep},ZP:function(){return em},Am:function(){return Z}});var o,i=r(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,i):o+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+a},m={},g=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+g(e[r]);return t}return e},f=(e,t,r,a,s)=>{var o;let i=g(e),n=m[i]||(m[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),o=m[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),n},y=(e,t,r)=>e.reduce((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return f(r.unshift?r.raw?y(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let h,b,v,k=x.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=x.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),h(d,n)}return t?t(s):s}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,C=(a=0,()=>(++a).toString()),E=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},L="default",A=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return A(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},_=[],T={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},S={},O=(e,t=L)=>{S[t]=A(S[t]||T,e),_.forEach(([e,r])=>{e===t&&r(S[t])})},$=e=>Object.keys(S).forEach(t=>O(e,t)),I=e=>Object.keys(S).find(t=>S[t].toasts.some(t=>t.id===e)),D=(e=L)=>t=>{O(t,e)},M={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e={},t=L)=>{let[r,a]=(0,i.useState)(S[t]||T),s=(0,i.useRef)(S[t]);(0,i.useEffect)(()=>(s.current!==S[t]&&a(S[t]),_.push([t,a]),()=>{let e=_.findIndex(([e])=>e===t);e>-1&&_.splice(e,1)}),[t]);let o=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||M[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:o}},z=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),P=e=>(t,r)=>{let a=z(t,e,r);return D(a.toasterId||I(a.id))({type:2,toast:a}),a.id},Z=(e,t)=>P("blank")(e,t);Z.error=P("error"),Z.success=P("success"),Z.loading=P("loading"),Z.custom=P("custom"),Z.dismiss=(e,t)=>{let r={type:3,toastId:e};t?D(t)(r):$(r)},Z.dismissAll=e=>Z.dismiss(void 0,e),Z.remove=(e,t)=>{let r={type:4,toastId:e};t?D(t)(r):$(r)},Z.removeAll=e=>Z.remove(void 0,e),Z.promise=(e,t,r)=>{let a=Z.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?N(t.success,e):void 0;return s?Z.success(s,{id:a,...r,...null==r?void 0:r.success}):Z.dismiss(a),e}).catch(e=>{let s=t.error?N(t.error,e):void 0;s?Z.error(s,{id:a,...r,...null==r?void 0:r.error}):Z.dismiss(a)}),e};var F=1e3,U=(e,t="default")=>{let{toasts:r,pausedAt:a}=R(e,t),s=(0,i.useRef)(new Map).current,o=(0,i.useCallback)((e,t=F)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,r)},[]);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&Z.dismiss(r.id);return}return setTimeout(()=>Z.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,i.useCallback)(D(t),[t]),l=(0,i.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,i.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,i.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,i.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:o}=t||{},i=r.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,i.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},H=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,W=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,G=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Y=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${G} 1s linear infinite;
`,J=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V=k`
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
}`,K=w("div")`
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
    animation: ${V} 0.2s ease-out forwards;
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
`,Q=w("div")`
  position: absolute;
`,X=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=k`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===r?null:i.createElement(X,null,i.createElement(Y,{...a}),"loading"!==r&&i.createElement(Q,null,"error"===r?i.createElement(W,{...a}):i.createElement(K,{...a})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eo=w("div")`
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
`,ei=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${k(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=i.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(er,{toast:e}),n=i.createElement(ei,{...e.ariaProps},N(e.message,e));return i.createElement(eo,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,p.p=void 0,h=o,b=void 0,v=void 0;var ed=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let o=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:o,className:t,style:r},s)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:o,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=U(r,o);return i.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let o=r.position||t,n=ec(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(ed,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:n},"custom"===r.type?N(r.message,r):s?s(r):i.createElement(el,{toast:r,position:o}))}))},em=Z}},function(e){e.O(0,[8496,2971,4938,1744],function(){return e(e.s=83115)}),_N_E=e.O()}]);