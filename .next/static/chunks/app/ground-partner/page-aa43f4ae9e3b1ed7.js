(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2073],{99155:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]])},41298:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]])},96142:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},64280:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},62337:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]])},62601:function(e,t,r){"use strict";var s,a;e.exports=(null==(s=r.g.process)?void 0:s.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(58960)},93973:function(e,t,r){Promise.resolve().then(r.bind(r,37254))},37254:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var s=r(57437),a=r(61396),i=r.n(a),n=r(2265),o=r(64280),l=r(99155),d=r(96142),c=r(41298),u=r(62337),p=r(5925),m=r(68496);let g=e=>(e||"").toLowerCase(),x=e=>{let t=Number(e);return Number.isFinite(t)?t:0},f=e=>"INR ".concat(e.toLocaleString("en-IN")),h=e=>{if(!e)return"-";let t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})};function y(){let[e,t]=(0,n.useState)(!0),[r,a]=(0,n.useState)([]),[y,b]=(0,n.useState)([]),[v,k]=(0,n.useState)([]),[j,N]=(0,n.useState)([]),[w,T]=(0,n.useState)(null);(0,n.useEffect)(()=>{(async()=>{try{let e=await m.backendApi.user.getProfile();(null==e?void 0:e.success)&&T({uniqueId:e.data.uid})}catch(e){}})()},[]);let E=async()=>{try{var e;t(!0);let[r,s,i,n]=await Promise.all([m.backendApi.partners.getCases({type:"ground"}),m.backendApi.visits.getPartner(),m.backendApi.partners.getPayouts(),m.backendApi.tickets.getUserTickets()]);if(!(null==r?void 0:r.success))throw Error((null==r?void 0:r.message)||(null==r?void 0:r.error)||"Failed to load tasks");if(!(null==s?void 0:s.success))throw Error((null==s?void 0:s.message)||(null==s?void 0:s.error)||"Failed to load visits");if(!(null==i?void 0:i.success))throw Error((null==i?void 0:i.message)||(null==i?void 0:i.error)||"Failed to load payouts");if(!(null==n?void 0:n.success))throw Error((null==n?void 0:n.message)||(null==n?void 0:n.error)||"Failed to load tickets");a(Array.isArray(null==r?void 0:r.data)?r.data:[]),b(Array.isArray(null==s?void 0:s.data)?s.data:[]),k(Array.isArray(null==i?void 0:i.data)?i.data:[]),N(Array.isArray(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.tickets)?n.data.tickets:[])}catch(e){p.ZP.error((null==e?void 0:e.message)||"Failed to load dashboard")}finally{t(!1)}};(0,n.useEffect)(()=>{E()},[]);let A=(0,n.useMemo)(()=>{let e=new Date,t=e.getMonth(),s=e.getFullYear(),a=0,i=0;for(let e of v){let r=x(e.amount),n=g(e.status),o=new Date(e.createdAt||0);"paid"===n&&o.getMonth()===t&&o.getFullYear()===s&&(a+=r),("pending"===n||"processing"===n)&&(i+=r)}return{totalTasks:r.length,activeTasks:r.filter(e=>["open","in_progress"].includes(g(e.status))).length,totalVisits:y.length,scheduledVisits:y.filter(e=>["scheduled","pending","in_progress"].includes(g(e.status))).length,paidThisMonth:a,pendingPayout:i,openTickets:j.filter(e=>["open","assigned"].includes(g(e.status))).length}},[r,v,j,y]),M=(0,n.useMemo)(()=>[...r].sort((e,t)=>+new Date(t.createdAt||0)-+new Date(e.createdAt||0)).slice(0,6),[r]),D=(0,n.useMemo)(()=>[...y].sort((e,t)=>+new Date(t.scheduledAt||t.createdAt||0)-+new Date(e.scheduledAt||e.createdAt||0)).slice(0,6),[y]);return(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Ground Partner Dashboard"}),(0,s.jsx)("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold border border-blue-200 dark:border-blue-800",children:(null==w?void 0:w.uniqueId)?"GBPR-".concat(w.uniqueId.slice(-6).toUpperCase()):"GBPR-PARTNER"})]}),(0,s.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Real workflow data for tasks, visits, support, and payouts"})]}),(0,s.jsxs)("button",{onClick:E,className:"inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,s.jsx)(o.Z,{size:16}),"Refresh"]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7",children:[(0,s.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"Total Tasks"}),(0,s.jsx)("p",{className:"text-xl font-semibold",children:A.totalTasks})]}),(0,s.jsxs)("div",{className:"rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/30 dark:bg-blue-900/20",children:[(0,s.jsx)("p",{className:"text-xs text-blue-700 dark:text-blue-400",children:"Active Tasks"}),(0,s.jsx)("p",{className:"text-xl font-semibold",children:A.activeTasks})]}),(0,s.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"Total Visits"}),(0,s.jsx)("p",{className:"text-xl font-semibold",children:A.totalVisits})]}),(0,s.jsxs)("div",{className:"rounded-xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900/30 dark:bg-indigo-900/20",children:[(0,s.jsx)("p",{className:"text-xs text-indigo-700 dark:text-indigo-400",children:"Scheduled Visits"}),(0,s.jsx)("p",{className:"text-xl font-semibold",children:A.scheduledVisits})]}),(0,s.jsxs)("div",{className:"rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900/30 dark:bg-green-900/20",children:[(0,s.jsx)("p",{className:"text-xs text-green-700 dark:text-green-400",children:"Paid This Month"}),(0,s.jsx)("p",{className:"text-xl font-semibold",children:f(A.paidThisMonth)})]}),(0,s.jsxs)("div",{className:"rounded-xl border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900/30 dark:bg-yellow-900/20",children:[(0,s.jsx)("p",{className:"text-xs text-yellow-700 dark:text-yellow-400",children:"Pending Payout"}),(0,s.jsx)("p",{className:"text-xl font-semibold",children:f(A.pendingPayout)})]}),(0,s.jsxs)("div",{className:"rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-900/20",children:[(0,s.jsx)("p",{className:"text-xs text-red-700 dark:text-red-400",children:"Open Tickets"}),(0,s.jsx)("p",{className:"text-xl font-semibold",children:A.openTickets})]})]}),(0,s.jsxs)("div",{className:"grid gap-6 lg:grid-cols-2",children:[(0,s.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,s.jsxs)("div",{className:"mb-3 flex items-center justify-between",children:[(0,s.jsx)("h2",{className:"text-sm font-semibold text-gray-900 dark:text-gray-100",children:"Recent Tasks"}),(0,s.jsx)(i(),{href:"/ground-partner/tasks",className:"text-xs text-blue-600 hover:underline dark:text-blue-400",children:"View all"})]}),e&&(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Loading tasks..."}),!e&&0===M.length&&(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"No tasks assigned yet."}),(0,s.jsx)("div",{className:"space-y-2",children:M.map(e=>{var t;return(0,s.jsxs)("div",{className:"rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-900",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,s.jsx)("p",{className:"font-medium text-gray-900 dark:text-gray-100",children:e.title||(null===(t=e.property)||void 0===t?void 0:t.title)||"Task"}),(0,s.jsx)("span",{className:"rounded-full bg-gray-200 px-2 py-1 text-xs capitalize dark:bg-gray-800",children:g(e.status)||"open"})]}),(0,s.jsxs)("p",{className:"mt-1 text-xs text-gray-500",children:["Due: ",h(e.dueDate)]})]},e.id)})})]}),(0,s.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,s.jsxs)("div",{className:"mb-3 flex items-center justify-between",children:[(0,s.jsx)("h2",{className:"text-sm font-semibold text-gray-900 dark:text-gray-100",children:"Recent Visits"}),(0,s.jsx)(i(),{href:"/ground-partner/visits",className:"text-xs text-blue-600 hover:underline dark:text-blue-400",children:"View all"})]}),e&&(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Loading visits..."}),!e&&0===D.length&&(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"No partner visits found."}),(0,s.jsx)("div",{className:"space-y-2",children:D.map(e=>{var t,r;return(0,s.jsxs)("div",{className:"rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-900",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,s.jsx)("p",{className:"font-medium text-gray-900 dark:text-gray-100",children:(null===(t=e.property)||void 0===t?void 0:t.title)||"Site visit"}),(0,s.jsx)("span",{className:"rounded-full bg-gray-200 px-2 py-1 text-xs capitalize dark:bg-gray-800",children:g(e.status)||"pending"})]}),(0,s.jsxs)("p",{className:"mt-1 text-xs text-gray-500",children:[(null===(r=e.property)||void 0===r?void 0:r.location)||"-"," | ",h(e.scheduledAt||e.createdAt)]})]},e.id)})})]})]}),(0,s.jsxs)("div",{className:"grid gap-4 md:grid-cols-4",children:[(0,s.jsxs)(i(),{href:"/ground-partner/tasks",className:"rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900",children:[(0,s.jsxs)("div",{className:"mb-1 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:[(0,s.jsx)(l.Z,{size:16})," Task Queue"]}),(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"Manage status updates on assigned ground cases."})]}),(0,s.jsxs)(i(),{href:"/ground-partner/visits",className:"rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900",children:[(0,s.jsxs)("div",{className:"mb-1 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:[(0,s.jsx)(d.Z,{size:16})," Site Visits"]}),(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"Schedule and complete partner-assigned visits."})]}),(0,s.jsxs)(i(),{href:"/ground-partner/earnings",className:"rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900",children:[(0,s.jsxs)("div",{className:"mb-1 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:[(0,s.jsx)(c.Z,{size:16})," Earnings"]}),(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"Track payout records controlled by admin."})]}),(0,s.jsxs)(i(),{href:"/ground-partner/support",className:"rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900",children:[(0,s.jsxs)("div",{className:"mb-1 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:[(0,s.jsx)(u.Z,{size:16})," Support"]}),(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"Open tickets handled by employee/admin team."})]})]})]})}},58960:function(e){!function(){var t={229:function(e){var t,r,s,a=e.exports={};function i(){throw Error("setTimeout has not been defined")}function n(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:n}catch(e){r=n}}();var l=[],d=!1,c=-1;function u(){d&&s&&(d=!1,s.length?l=s.concat(l):c=-1,l.length&&p())}function p(){if(!d){var e=o(u);d=!0;for(var t=l.length;t;){for(s=l,l=[];++c<t;)s&&s[c].run();c=-1,t=l.length}s=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===n||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function g(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||d||o(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function s(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}},n=!0;try{t[e](i,i.exports,s),n=!1}finally{n&&delete r[e]}return i.exports}s.ab="//";var a=s(229);e.exports=a}()},5925:function(e,t,r){"use strict";let s,a;r.d(t,{x7:function(){return ep},ZP:function(){return em},Am:function(){return F}});var i,n=r(2265);let o={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||o},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",s="",a="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+n+";":s+="f"==i[1]?p(n,i):i+"{"+p(n,"k"==i[1]?"":t)+"}":"object"==typeof n?s+=p(n,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=p.p?p.p(i,n):i+":"+n+";")}return r+(t&&a?t+"{"+a+"}":a)+s},m={},g=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+g(e[r]);return t}return e},x=(e,t,r,s,a)=>{var i;let n=g(e),o=m[n]||(m[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!m[o]){let t=n!==e?e:(e=>{let t,r,s=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?s.shift():t[3]?(r=t[3].replace(u," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(u," ").trim();return s[0]})(e);m[o]=p(a?{["@keyframes "+o]:t}:t,r?"":"."+o)}let l=r&&m.g?m.g:null;return r&&(m.g=m[o]),i=m[o],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),o},f=(e,t,r)=>e.reduce((e,s,a)=>{let i=t[a];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"");function h(e){let t=this||{},r=e.call?e(t.p):e;return x(r.unshift?r.raw?f(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let y,b,v,k=h.bind({k:1});function j(e,t){let r=this||{};return function(){let s=arguments;function a(i,n){let o=Object.assign({},i),l=o.className||a.className;r.p=Object.assign({theme:b&&b()},o),r.o=/ *go\d+/.test(l),o.className=h.apply(r,s)+(l?" "+l:""),t&&(o.ref=n);let d=e;return e[0]&&(d=o.as||e,delete o.as),v&&d[0]&&v(o),y(d,o)}return t?t(a):a}}var N=e=>"function"==typeof e,w=(e,t)=>N(e)?e(t):e,T=(s=0,()=>(++s).toString()),E=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},A="default",M=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return M(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},D=[],P={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},C={},S=(e,t=A)=>{C[t]=M(C[t]||P,e),D.forEach(([e,r])=>{e===t&&r(C[t])})},Z=e=>Object.keys(C).forEach(t=>S(e,t)),z=e=>Object.keys(C).find(t=>C[t].toasts.some(t=>t.id===e)),L=(e=A)=>t=>{S(t,e)},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=(e={},t=A)=>{let[r,s]=(0,n.useState)(C[t]||P),a=(0,n.useRef)(C[t]);(0,n.useEffect)(()=>(a.current!==C[t]&&s(C[t]),D.push([t,s]),()=>{let e=D.findIndex(([e])=>e===t);e>-1&&D.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,s,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||O[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...r,toasts:i}},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||T()}),_=e=>(t,r)=>{let s=I(t,e,r);return L(s.toasterId||z(s.id))({type:2,toast:s}),s.id},F=(e,t)=>_("blank")(e,t);F.error=_("error"),F.success=_("success"),F.loading=_("loading"),F.custom=_("custom"),F.dismiss=(e,t)=>{let r={type:3,toastId:e};t?L(t)(r):Z(r)},F.dismissAll=e=>F.dismiss(void 0,e),F.remove=(e,t)=>{let r={type:4,toastId:e};t?L(t)(r):Z(r)},F.removeAll=e=>F.remove(void 0,e),F.promise=(e,t,r)=>{let s=F.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?w(t.success,e):void 0;return a?F.success(a,{id:s,...r,...null==r?void 0:r.success}):F.dismiss(s),e}).catch(e=>{let a=t.error?w(t.error,e):void 0;a?F.error(a,{id:s,...r,...null==r?void 0:r.error}):F.dismiss(s)}),e};var R=1e3,V=(e,t="default")=>{let{toasts:r,pausedAt:s}=$(e,t),a=(0,n.useRef)(new Map).current,i=(0,n.useCallback)((e,t=R)=>{if(a.has(e))return;let r=setTimeout(()=>{a.delete(e),o({type:4,toastId:e})},t);a.set(e,r)},[]);(0,n.useEffect)(()=>{if(s)return;let e=Date.now(),a=r.map(r=>{if(r.duration===1/0)return;let s=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(s<0){r.visible&&F.dismiss(r.id);return}return setTimeout(()=>F.dismiss(r.id,t),s)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[r,s,t]);let o=(0,n.useCallback)(L(t),[t]),l=(0,n.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),d=(0,n.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),c=(0,n.useCallback)(()=>{s&&o({type:6,time:Date.now()})},[s,o]),u=(0,n.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:i}=t||{},n=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),o=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<o&&e.visible).length;return n.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[r]);return(0,n.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},q=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,H=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=j("div")`
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
    animation: ${H} 0.15s ease-out forwards;
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
    animation: ${U} 0.15s ease-out forwards;
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
`,Y=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${G} 1s linear infinite;
`,Q=k`
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
}`,K=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,W=j("div")`
  position: absolute;
`,X=j("div")`
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
}`,et=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return void 0!==t?"string"==typeof t?n.createElement(et,null,t):t:"blank"===r?null:n.createElement(X,null,n.createElement(Y,{...s}),"loading"!==r&&n.createElement(W,null,"error"===r?n.createElement(B,{...s}):n.createElement(K,{...s})))},es=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=j("div")`
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
`,en=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eo=(e,t)=>{let r=e.includes("top")?1:-1,[s,a]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(r),ea(r)];return{animation:t?`${k(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=n.memo(({toast:e,position:t,style:r,children:s})=>{let a=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},i=n.createElement(er,{toast:e}),o=n.createElement(en,{...e.ariaProps},w(e.message,e));return n.createElement(ei,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof s?s({icon:i,message:o}):n.createElement(n.Fragment,null,i,o))});i=n.createElement,p.p=void 0,y=i,b=void 0,v=void 0;var ed=({id:e,className:t,style:r,onHeightUpdate:s,children:a})=>{let i=n.useCallback(t=>{if(t){let r=()=>{s(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return n.createElement("div",{ref:i,className:t,style:r},a)},ec=(e,t)=>{let r=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...s}},eu=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:a,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:d,handlers:c}=V(r,i);return n.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let i=r.position||t,o=ec(i,c.calculateOffset(r,{reverseOrder:e,gutter:s,defaultPosition:t}));return n.createElement(ed,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:o},"custom"===r.type?w(r.message,r):a?a(r):n.createElement(el,{toast:r,position:i}))}))},em=F}},function(e){e.O(0,[6221,8496,2971,4938,1744],function(){return e(e.s=93973)}),_N_E=e.O()}]);