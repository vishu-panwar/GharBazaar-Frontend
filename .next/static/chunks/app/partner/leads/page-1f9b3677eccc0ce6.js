(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1496],{28692:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]])},64280:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},41827:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},85790:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]])},25750:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},62601:function(e,t,r){"use strict";var a,s;e.exports=(null==(a=r.g.process)?void 0:a.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(58960)},44031:function(e,t,r){Promise.resolve().then(r.bind(r,52973))},52973:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var a=r(57437),s=r(61396),o=r.n(s),i=r(2265),n=r(64280),l=r(41827),d=r(25750),c=r(85790),u=r(28692),p=r(5925),m=r(68496);let f=e=>{let t=Number(e);return Number.isFinite(t)?t:0},x=e=>"INR ".concat(e.toLocaleString("en-IN")),g=e=>{if(!e)return"-";let t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})},y=e=>(e||"new").toLowerCase();function h(){let[e,t]=(0,i.useState)(!0),[r,s]=(0,i.useState)([]),[h,b]=(0,i.useState)("all"),[v,k]=(0,i.useState)(""),[w,N]=(0,i.useState)(null);(0,i.useEffect)(()=>{(async()=>{try{let e=await m.backendApi.user.getProfile();(null==e?void 0:e.success)&&N({uniqueId:e.data.uid})}catch(e){}})()},[]);let j=async()=>{try{t(!0);let e=await m.backendApi.partners.getReferrals();if(!(null==e?void 0:e.success))throw Error((null==e?void 0:e.message)||(null==e?void 0:e.error)||"Failed to load leads");let r=Array.isArray(null==e?void 0:e.data)?e.data:[];s(r)}catch(e){p.ZP.error((null==e?void 0:e.message)||"Failed to load leads")}finally{t(!1)}};(0,i.useEffect)(()=>{j()},[]);let C=(0,i.useMemo)(()=>r.filter(e=>{let t=y(e.status),r="all"===h||t===h,a=v.trim().toLowerCase(),s=0===a.length||(e.leadName||"").toLowerCase().includes(a)||(e.leadContact||"").toLowerCase().includes(a)||(e.referralCode||"").toLowerCase().includes(a);return r&&s}),[v,r,h]),E=(0,i.useMemo)(()=>{let e=0,t=0,a=0;for(let s of r){let r=y(s.status);"converted"===r&&(e+=1),("new"===r||"contacted"===r)&&(t+=1),a+=f(s.commissionAmount)}return{total:r.length,active:t,converted:e,totalCommission:a}},[r]),T=(0,i.useMemo)(()=>{let e=new Set;for(let t of r)e.add(y(t.status));return["all",...Array.from(e)]},[r]);return(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Lead Tracking"}),(0,a.jsx)("span",{className:"px-3 py-0.5 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold border border-blue-200 dark:border-blue-800",children:(null==w?void 0:w.uniqueId)?"GBPR-".concat(w.uniqueId.slice(-6).toUpperCase()):"GBPR-PARTNER"})]}),(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Live referral leads from promotional partner workflow"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(o(),{href:"/partner/referrals",className:"rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700",children:"Submit Referral"}),(0,a.jsxs)("button",{onClick:j,className:"inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,a.jsx)(n.Z,{size:16}),"Refresh"]})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4",children:[(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"Total Leads"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:E.total})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/30 dark:bg-blue-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-blue-700 dark:text-blue-400",children:"Active"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:E.active})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900/30 dark:bg-green-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-green-700 dark:text-green-400",children:"Converted"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:E.converted})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-900/30 dark:bg-purple-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-purple-700 dark:text-purple-400",children:"Commission"}),(0,a.jsx)("p",{className:"text-xl font-semibold",children:x(E.totalCommission)})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 md:flex-row md:items-center",children:[(0,a.jsxs)("div",{className:"relative flex-1",children:[(0,a.jsx)(l.Z,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),(0,a.jsx)("input",{value:v,onChange:e=>k(e.target.value),placeholder:"Search by lead name, contact, or referral code",className:"w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900"})]}),(0,a.jsx)("select",{value:h,onChange:e=>b(e.target.value),className:"rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900",children:T.map(e=>(0,a.jsx)("option",{value:e,children:"all"===e?"All statuses":e},e))})]}),(0,a.jsx)("div",{className:"overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",children:(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full min-w-[720px] text-sm",children:[(0,a.jsx)("thead",{className:"bg-gray-50 dark:bg-gray-900",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300",children:"Lead"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300",children:"Contact"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300",children:"Referral Code"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300",children:"Status"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300",children:"Commission"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300",children:"Created"})]})}),(0,a.jsxs)("tbody",{children:[e&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"px-4 py-8 text-center text-gray-500",colSpan:6,children:"Loading leads..."})}),!e&&0===C.length&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"px-4 py-8 text-center text-gray-500",colSpan:6,children:"No leads found for current filters."})}),!e&&C.map(e=>{let t=y(e.status);return(0,a.jsxs)("tr",{className:"border-t border-gray-100 dark:border-gray-800",children:[(0,a.jsx)("td",{className:"px-4 py-3 font-medium text-gray-900 dark:text-gray-100",children:e.leadName||"-"}),(0,a.jsx)("td",{className:"px-4 py-3 text-gray-700 dark:text-gray-300",children:e.leadContact||"-"}),(0,a.jsx)("td",{className:"px-4 py-3 text-gray-700 dark:text-gray-300",children:e.referralCode||"-"}),(0,a.jsx)("td",{className:"px-4 py-3",children:(0,a.jsx)("span",{className:"inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium capitalize text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:t})}),(0,a.jsx)("td",{className:"px-4 py-3 text-gray-700 dark:text-gray-300",children:x(f(e.commissionAmount))}),(0,a.jsx)("td",{className:"px-4 py-3 text-gray-700 dark:text-gray-300",children:g(e.createdAt)})]},e.id)})]})]})})}),(0,a.jsxs)("div",{className:"grid gap-4 md:grid-cols-3",children:[(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200",children:[(0,a.jsx)(d.Z,{size:16})," Lead Flow"]}),(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"New referrals are automatically visible to employee and admin workflows for follow-up."})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200",children:[(0,a.jsx)(c.Z,{size:16})," Conversion Tracking"]}),(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Lead statuses update as the team processes referrals through contacting and conversion."})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200",children:[(0,a.jsx)(u.Z,{size:16})," Commission Sync"]}),(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Commission values shown here come directly from referral records shared with admin/employee review."})]})]})]})}},58960:function(e){!function(){var t={229:function(e){var t,r,a,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function n(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l=[],d=!1,c=-1;function u(){d&&a&&(d=!1,a.length?l=a.concat(l):c=-1,l.length&&p())}function p(){if(!d){var e=n(u);d=!0;for(var t=l.length;t;){for(a=l,l=[];++c<t;)a&&a[c].run();c=-1,t=l.length}a=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||d||n(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function a(e){var s=r[e];if(void 0!==s)return s.exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,a),i=!1}finally{i&&delete r[e]}return o.exports}a.ab="//";var s=a(229);e.exports=s}()},5925:function(e,t,r){"use strict";let a,s;r.d(t,{x7:function(){return ep},ZP:function(){return em},Am:function(){return _}});var o,i=r(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,i):o+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},x=(e,t,r,a,s)=>{var o;let i=f(e),n=m[i]||(m[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),o=m[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),n},g=(e,t,r)=>e.reduce((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return x(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let h,b,v,k=y.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=y.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),h(d,n)}return t?t(s):s}}var N=e=>"function"==typeof e,j=(e,t)=>N(e)?e(t):e,C=(a=0,()=>(++a).toString()),E=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},T="default",L=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return L(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},A=[],S={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},M={},$=(e,t=T)=>{M[t]=L(M[t]||S,e),A.forEach(([e,r])=>{e===t&&r(M[t])})},I=e=>Object.keys(M).forEach(t=>$(e,t)),Z=e=>Object.keys(M).find(t=>M[t].toasts.some(t=>t.id===e)),O=(e=T)=>t=>{$(t,e)},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={},t=T)=>{let[r,a]=(0,i.useState)(M[t]||S),s=(0,i.useRef)(M[t]);(0,i.useEffect)(()=>(s.current!==M[t]&&a(M[t]),A.push([t,a]),()=>{let e=A.findIndex(([e])=>e===t);e>-1&&A.splice(e,1)}),[t]);let o=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:o}},P=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),R=e=>(t,r)=>{let a=P(t,e,r);return O(a.toasterId||Z(a.id))({type:2,toast:a}),a.id},_=(e,t)=>R("blank")(e,t);_.error=R("error"),_.success=R("success"),_.loading=R("loading"),_.custom=R("custom"),_.dismiss=(e,t)=>{let r={type:3,toastId:e};t?O(t)(r):I(r)},_.dismissAll=e=>_.dismiss(void 0,e),_.remove=(e,t)=>{let r={type:4,toastId:e};t?O(t)(r):I(r)},_.removeAll=e=>_.remove(void 0,e),_.promise=(e,t,r)=>{let a=_.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?j(t.success,e):void 0;return s?_.success(s,{id:a,...r,...null==r?void 0:r.success}):_.dismiss(a),e}).catch(e=>{let s=t.error?j(t.error,e):void 0;s?_.error(s,{id:a,...r,...null==r?void 0:r.error}):_.dismiss(a)}),e};var F=1e3,q=(e,t="default")=>{let{toasts:r,pausedAt:a}=D(e,t),s=(0,i.useRef)(new Map).current,o=(0,i.useCallback)((e,t=F)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,r)},[]);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&_.dismiss(r.id);return}return setTimeout(()=>_.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,i.useCallback)(O(t),[t]),l=(0,i.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,i.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,i.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,i.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:o}=t||{},i=r.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,i.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},H=k`
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
}`,B=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=w("div")`
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
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Y=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,J=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Y} 1s linear infinite;
`,K=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Q=k`
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
}`,V=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Q} 0.2s ease-out forwards;
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
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===r?null:i.createElement(X,null,i.createElement(J,{...a}),"loading"!==r&&i.createElement(W,null,"error"===r?i.createElement(G,{...a}):i.createElement(V,{...a})))},ea=e=>`
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
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${k(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=i.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(er,{toast:e}),n=i.createElement(ei,{...e.ariaProps},j(e.message,e));return i.createElement(eo,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,p.p=void 0,h=o,b=void 0,v=void 0;var ed=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let o=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:o,className:t,style:r},s)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:o,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=q(r,o);return i.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let o=r.position||t,n=ec(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(ed,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:n},"custom"===r.type?j(r.message,r):s?s(r):i.createElement(el,{toast:r,position:o}))}))},em=_}},function(e){e.O(0,[6221,8496,2971,4938,1744],function(){return e(e.s=44031)}),_N_E=e.O()}]);