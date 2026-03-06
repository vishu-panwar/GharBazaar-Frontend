(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{77480:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]])},64280:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},62337:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]])},25750:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},62601:function(e,t,r){"use strict";var a,s;e.exports=(null==(a=r.g.process)?void 0:a.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(58960)},97960:function(e,t,r){Promise.resolve().then(r.bind(r,84637))},84637:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(57437),s=r(61396),i=r.n(s),o=r(2265);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(62898).Z)("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);var l=r(77480),d=r(62337),c=r(25750),u=r(64280),p=r(5925),m=r(68496);function f(){let[e,t]=(0,o.useState)(!0),[r,s]=(0,o.useState)({activeTickets:0,resolvedToday:0,averageResponseTime:0,totalAssigned:0}),[f,g]=(0,o.useState)([]),[h,y]=(0,o.useState)([]),[x,v]=(0,o.useState)([]),b=async()=>{try{var e,a,i;t(!0);let[o,n,l,d]=await Promise.all([m.backendApi.employee.getStats(),m.backendApi.kyc.getRequests("pending"),m.backendApi.employee.getPendingProperties(),m.backendApi.employee.getLeads("all")]);(null==o?void 0:o.success)&&s((null==o?void 0:null===(e=o.data)||void 0===e?void 0:e.stats)||r),(null==n?void 0:n.success)&&g(((null==n?void 0:n.data)||[]).slice(0,8)),(null==l?void 0:l.success)&&y(((null==l?void 0:null===(a=l.data)||void 0===a?void 0:a.properties)||[]).slice(0,8)),(null==d?void 0:d.success)&&v(((null==d?void 0:null===(i=d.data)||void 0===i?void 0:i.leads)||[]).slice(0,8))}catch(e){p.ZP.error((null==e?void 0:e.message)||"Failed to load dashboard")}finally{t(!1)}};(0,o.useEffect)(()=>{b()},[]);let k=(0,o.useMemo)(()=>[{label:"Pending KYC",value:f.length,href:"/employee/kyc",icon:n},{label:"Pending Properties",value:h.length,href:"/employee/verification",icon:l.Z},{label:"Open Tickets",value:r.activeTickets,href:"/employee/support",icon:d.Z},{label:"Referral Leads",value:x.length,href:"/employee/leads",icon:c.Z}],[f.length,h.length,r.activeTickets,x.length]);return(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Employee Dashboard"}),(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Moderation, support, and referral operations overview"})]}),(0,a.jsxs)("button",{onClick:b,className:"inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,a.jsx)(u.Z,{size:16}),"Refresh"]})]}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4",children:k.map(e=>(0,a.jsxs)(i(),{href:e.href,className:"rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsx)("div",{className:"mb-2 inline-flex rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",children:(0,a.jsx)(e.icon,{size:18})}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:e.label}),(0,a.jsx)("p",{className:"text-2xl font-semibold",children:e.value})]},e.label))}),(0,a.jsxs)("div",{className:"grid gap-6 lg:grid-cols-3",children:[(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsx)("h2",{className:"mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100",children:"Pending KYC"}),e&&(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Loading..."}),!e&&0===f.length&&(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"No pending KYC requests."}),!e&&f.length>0&&(0,a.jsx)("div",{className:"space-y-2",children:f.slice(0,5).map(e=>{var t,r,s;return(0,a.jsxs)("div",{className:"rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-900",children:[(0,a.jsx)("p",{className:"font-medium",children:e.fullName||(null===(t=e.user)||void 0===t?void 0:t.name)||"Unknown User"}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:(null===(r=e.user)||void 0===r?void 0:r.uid)||(null===(s=e.user)||void 0===s?void 0:s.email)||"-"})]},e.id)})})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsx)("h2",{className:"mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100",children:"Pending Property Verification"}),e&&(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Loading..."}),!e&&0===h.length&&(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"No pending properties."}),!e&&h.length>0&&(0,a.jsx)("div",{className:"space-y-2",children:h.slice(0,5).map(e=>{var t,r;return(0,a.jsxs)("div",{className:"rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-900",children:[(0,a.jsx)("p",{className:"font-medium",children:e.title||"Untitled Property"}),(0,a.jsxs)("p",{className:"text-xs text-gray-500",children:[e.city||"N/A"," • Seller: ",(null===(t=e.seller)||void 0===t?void 0:t.name)||(null===(r=e.seller)||void 0===r?void 0:r.uid)||"-"]})]},e.id)})})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsx)("h2",{className:"mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100",children:"Ticket Operations"}),(0,a.jsxs)("div",{className:"space-y-2 text-sm",children:[(0,a.jsxs)("div",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-900",children:[(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"Active Tickets"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:r.activeTickets})]}),(0,a.jsxs)("div",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-900",children:[(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"Resolved Today"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:r.resolvedToday})]}),(0,a.jsxs)("div",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-900",children:[(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"Total Assigned"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:r.totalAssigned})]})]})]})]})]})}},58960:function(e){!function(){var t={229:function(e){var t,r,a,s=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function n(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l=[],d=!1,c=-1;function u(){d&&a&&(d=!1,a.length?l=a.concat(l):c=-1,l.length&&p())}function p(){if(!d){var e=n(u);d=!0;for(var t=l.length;t;){for(a=l,l=[];++c<t;)a&&a[c].run();c=-1,t=l.length}a=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||d||n(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function a(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}},o=!0;try{t[e](i,i.exports,a),o=!1}finally{o&&delete r[e]}return i.exports}a.ab="//";var s=a(229);e.exports=s}()},5925:function(e,t,r){"use strict";let a,s;r.d(t,{x7:function(){return ep},ZP:function(){return em},Am:function(){return I}});var i,o=r(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},g=(e,t,r,a,s)=>{var i;let o=f(e),n=m[o]||(m[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!m[n]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},h=(e,t,r)=>e.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let x,v,b,k=y.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:v&&v()},n),r.o=/ *go\d+/.test(l),n.className=y.apply(r,a)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),b&&d[0]&&b(n),x(d,n)}return t?t(s):s}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,T=(a=0,()=>(++a).toString()),E=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},A="default",C=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return C(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},P=[],M={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},O={},$=(e,t=A)=>{O[t]=C(O[t]||M,e),P.forEach(([e,r])=>{e===t&&r(O[t])})},L=e=>Object.keys(O).forEach(t=>$(e,t)),Z=e=>Object.keys(O).find(t=>O[t].toasts.some(t=>t.id===e)),D=(e=A)=>t=>{$(t,e)},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_=(e={},t=A)=>{let[r,a]=(0,o.useState)(O[t]||M),s=(0,o.useRef)(O[t]);(0,o.useEffect)(()=>(s.current!==O[t]&&a(O[t]),P.push([t,a]),()=>{let e=P.findIndex(([e])=>e===t);e>-1&&P.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:i}},S=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||T()}),H=e=>(t,r)=>{let a=S(t,e,r);return D(a.toasterId||Z(a.id))({type:2,toast:a}),a.id},I=(e,t)=>H("blank")(e,t);I.error=H("error"),I.success=H("success"),I.loading=H("loading"),I.custom=H("custom"),I.dismiss=(e,t)=>{let r={type:3,toastId:e};t?D(t)(r):L(r)},I.dismissAll=e=>I.dismiss(void 0,e),I.remove=(e,t)=>{let r={type:4,toastId:e};t?D(t)(r):L(r)},I.removeAll=e=>I.remove(void 0,e),I.promise=(e,t,r)=>{let a=I.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?N(t.success,e):void 0;return s?I.success(s,{id:a,...r,...null==r?void 0:r.success}):I.dismiss(a),e}).catch(e=>{let s=t.error?N(t.error,e):void 0;s?I.error(s,{id:a,...r,...null==r?void 0:r.error}):I.dismiss(a)}),e};var R=1e3,F=(e,t="default")=>{let{toasts:r,pausedAt:a}=_(e,t),s=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=R)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,r)},[]);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&I.dismiss(r.id);return}return setTimeout(()=>I.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,o.useCallback)(D(t),[t]),l=(0,o.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,o.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,o.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=t||{},o=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},q=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
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
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,V=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${V} 1s linear infinite;
`,G=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,J=k`
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
}`,Q=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${J} 0.2s ease-out forwards;
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
`,W=w("div")`
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
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(et,null,t):t:"blank"===r?null:o.createElement(X,null,o.createElement(B,{...a}),"loading"!==r&&o.createElement(W,null,"error"===r?o.createElement(K,{...a}):o.createElement(Q,{...a})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=w("div")`
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
`,eo=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${k(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=o.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(er,{toast:e}),n=o.createElement(eo,{...e.ariaProps},N(e.message,e));return o.createElement(ei,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,x=i,v=void 0,b=void 0;var ed=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let i=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:r},s)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=F(r,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let i=r.position||t,n=ec(i,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(ed,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:n},"custom"===r.type?N(r.message,r):s?s(r):o.createElement(el,{toast:r,position:i}))}))},em=I}},function(e){e.O(0,[6221,8496,2971,4938,1744],function(){return e(e.s=97960)}),_N_E=e.O()}]);