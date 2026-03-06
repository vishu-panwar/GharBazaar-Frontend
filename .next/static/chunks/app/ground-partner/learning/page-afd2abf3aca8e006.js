(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2571],{62898:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(2265),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),o=(e,t)=>{let r=(0,a.forwardRef)(({color:r="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:d="",children:c,...u},p)=>(0,a.createElement)("svg",{ref:p,...s,width:o,height:o,stroke:r,strokeWidth:l?24*Number(n)/Number(o):n,className:["lucide",`lucide-${i(e)}`,d].join(" "),...u},[...t.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r}},9865:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]])},64280:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},62601:function(e,t,r){"use strict";var a,s;e.exports=(null==(a=r.g.process)?void 0:a.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(58960)},60665:function(e,t,r){Promise.resolve().then(r.bind(r,433))},433:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var a=r(57437),s=r(2265),i=r(64280),o=r(9865),n=r(5925),l=r(68496);let d=e=>(e||"").toLowerCase(),c=e=>{if(!e)return"-";let t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})};function u(){let[e,t]=(0,s.useState)(!0),[r,u]=(0,s.useState)([]),[p,m]=(0,s.useState)([]),[f,g]=(0,s.useState)([]),y=async()=>{try{t(!0);let[e,r,a]=await Promise.all([l.backendApi.partners.getCases({type:"ground"}),l.backendApi.visits.getPartner(),l.backendApi.verification.getReports()]);if(!(null==e?void 0:e.success))throw Error((null==e?void 0:e.message)||(null==e?void 0:e.error)||"Failed to load case data");if(!(null==r?void 0:r.success))throw Error((null==r?void 0:r.message)||(null==r?void 0:r.error)||"Failed to load visit data");if(!(null==a?void 0:a.success))throw Error((null==a?void 0:a.message)||(null==a?void 0:a.error)||"Failed to load report data");u(Array.isArray(null==e?void 0:e.data)?e.data:[]),m(Array.isArray(null==r?void 0:r.data)?r.data:[]),g(Array.isArray(null==a?void 0:a.data)?a.data:[])}catch(e){n.ZP.error((null==e?void 0:e.message)||"Failed to load learning insights")}finally{t(!1)}};(0,s.useEffect)(()=>{y()},[]);let h=(0,s.useMemo)(()=>{let e=r.length,t=r.filter(e=>"completed"===d(e.status)).length,a=p.length,s=p.filter(e=>"completed"===d(e.status)).length,i=e>0?t/e*100:0,o=a>0?s/a*100:0,n=s>0?f.length/s*100:0,l=[];return i<70&&l.push({title:"Task Execution Discipline",reason:"Task completion is ".concat(i.toFixed(1),"%. Improve task closure turnaround and status updates."),priority:"high"}),o<70&&l.push({title:"Site Visit Follow-through",reason:"Visit completion is ".concat(o.toFixed(1),"%. Prioritize scheduled visits and avoid backlog."),priority:"high"}),n<80&&l.push({title:"Report Submission Quality",reason:"Report coverage is ".concat(n.toFixed(1),"% against completed visits. Submit reports consistently."),priority:"medium"}),0===l.length&&l.push({title:"Maintain Current Cadence",reason:"Operational metrics are stable. Focus on faster report turnaround and richer findings quality.",priority:"low"}),{taskCompletion:i,visitCompletion:o,reportCoverage:n,recommendations:l}},[r,f.length,p]),x=(0,s.useMemo)(()=>{let e=[];for(let t of r.slice(0,6))e.push({type:"Task",label:t.title||"Ground task",status:d(t.status)||"open",createdAt:t.createdAt});for(let r of p.slice(0,6)){var t;e.push({type:"Visit",label:(null===(t=r.property)||void 0===t?void 0:t.title)||"Site visit",status:d(r.status)||"pending",createdAt:r.scheduledAt||r.createdAt})}for(let t of f.slice(0,6))e.push({type:"Report",label:t.reportType||"Verification report",status:d(t.recommendation)||"submitted",createdAt:t.createdAt});return e.sort((e,t)=>+new Date(t.createdAt||0)-+new Date(e.createdAt||0)).slice(0,12)},[r,f,p]);return(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Learning Insights"}),(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Skill recommendations generated from your live workflow performance"})]}),(0,a.jsxs)("button",{onClick:y,className:"inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,a.jsx)(i.Z,{size:16})," Refresh"]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-3",children:[(0,a.jsxs)("div",{className:"rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/30 dark:bg-blue-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-blue-700 dark:text-blue-400",children:"Task Completion"}),(0,a.jsxs)("p",{className:"text-xl font-semibold",children:[h.taskCompletion.toFixed(1),"%"]})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900/30 dark:bg-indigo-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-indigo-700 dark:text-indigo-400",children:"Visit Completion"}),(0,a.jsxs)("p",{className:"text-xl font-semibold",children:[h.visitCompletion.toFixed(1),"%"]})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900/30 dark:bg-green-900/20",children:[(0,a.jsx)("p",{className:"text-xs text-green-700 dark:text-green-400",children:"Report Coverage"}),(0,a.jsxs)("p",{className:"text-xl font-semibold",children:[h.reportCoverage.toFixed(1),"%"]})]})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsx)("h2",{className:"mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100",children:"Priority Recommendations"}),(0,a.jsx)("div",{className:"space-y-2",children:h.recommendations.map(e=>(0,a.jsxs)("div",{className:"rounded-lg border border-gray-200 p-3 dark:border-gray-700",children:[(0,a.jsxs)("div",{className:"mb-1 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:[(0,a.jsx)(o.Z,{size:14}),e.title,(0,a.jsx)("span",{className:"rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium capitalize text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:e.priority})]}),(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:e.reason})]},e.title))})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsx)("h2",{className:"mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100",children:"Recent Activity Driving Insights"}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full min-w-[760px] text-sm",children:[(0,a.jsx)("thead",{className:"bg-gray-50 dark:bg-gray-900",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-3 py-2 text-left font-medium text-gray-600 dark:text-gray-300",children:"Type"}),(0,a.jsx)("th",{className:"px-3 py-2 text-left font-medium text-gray-600 dark:text-gray-300",children:"Item"}),(0,a.jsx)("th",{className:"px-3 py-2 text-left font-medium text-gray-600 dark:text-gray-300",children:"Status"}),(0,a.jsx)("th",{className:"px-3 py-2 text-left font-medium text-gray-600 dark:text-gray-300",children:"Timestamp"})]})}),(0,a.jsxs)("tbody",{children:[e&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"px-3 py-6 text-center text-gray-500",colSpan:4,children:"Loading learning feed..."})}),!e&&0===x.length&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"px-3 py-6 text-center text-gray-500",colSpan:4,children:"No activity yet."})}),!e&&x.map((e,t)=>(0,a.jsxs)("tr",{className:"border-t border-gray-100 dark:border-gray-800",children:[(0,a.jsx)("td",{className:"px-3 py-2 text-gray-700 dark:text-gray-300",children:e.type}),(0,a.jsx)("td",{className:"px-3 py-2 text-gray-700 dark:text-gray-300",children:e.label}),(0,a.jsx)("td",{className:"px-3 py-2",children:(0,a.jsx)("span",{className:"inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium capitalize text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:e.status})}),(0,a.jsx)("td",{className:"px-3 py-2 text-gray-700 dark:text-gray-300",children:c(e.createdAt)})]},"".concat(e.type,"-").concat(t)))]})]})})]}),(0,a.jsx)("div",{className:"rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400",children:"Learning recommendations update automatically from live task, visit, and report workflows used across ground, employee, and admin portals."})]})}},58960:function(e){!function(){var t={229:function(e){var t,r,a,s=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function n(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l=[],d=!1,c=-1;function u(){d&&a&&(d=!1,a.length?l=a.concat(l):c=-1,l.length&&p())}function p(){if(!d){var e=n(u);d=!0;for(var t=l.length;t;){for(a=l,l=[];++c<t;)a&&a[c].run();c=-1,t=l.length}a=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||d||n(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function a(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}},o=!0;try{t[e](i,i.exports,a),o=!1}finally{o&&delete r[e]}return i.exports}a.ab="//";var s=a(229);e.exports=s}()},30622:function(e,t,r){"use strict";var a=r(2265),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var a,i={},d=null,c=null;for(a in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:n.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},57437:function(e,t,r){"use strict";e.exports=r(30622)},5925:function(e,t,r){"use strict";let a,s;r.d(t,{x7:function(){return ep},ZP:function(){return em},Am:function(){return M}});var i,o=r(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},g=(e,t,r,a,s)=>{var i;let o=f(e),n=m[o]||(m[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!m[n]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},y=(e,t,r)=>e.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function h(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?y(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let x,b,v,k=h.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=h.apply(r,a)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),x(d,n)}return t?t(s):s}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,E=(a=0,()=>(++a).toString()),A=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},C="default",T=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return T(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},_=[],O={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},S={},$=(e,t=C)=>{S[t]=T(S[t]||O,e),_.forEach(([e,r])=>{e===t&&r(S[t])})},L=e=>Object.keys(S).forEach(t=>$(e,t)),D=e=>Object.keys(S).find(t=>S[t].toasts.some(t=>t.id===e)),F=(e=C)=>t=>{$(t,e)},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=(e={},t=C)=>{let[r,a]=(0,o.useState)(S[t]||O),s=(0,o.useRef)(S[t]);(0,o.useEffect)(()=>(s.current!==S[t]&&a(S[t]),_.push([t,a]),()=>{let e=_.findIndex(([e])=>e===t);e>-1&&_.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:i}},z=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),R=e=>(t,r)=>{let a=z(t,e,r);return F(a.toasterId||D(a.id))({type:2,toast:a}),a.id},M=(e,t)=>R("blank")(e,t);M.error=R("error"),M.success=R("success"),M.loading=R("loading"),M.custom=R("custom"),M.dismiss=(e,t)=>{let r={type:3,toastId:e};t?F(t)(r):L(r)},M.dismissAll=e=>M.dismiss(void 0,e),M.remove=(e,t)=>{let r={type:4,toastId:e};t?F(t)(r):L(r)},M.removeAll=e=>M.remove(void 0,e),M.promise=(e,t,r)=>{let a=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?N(t.success,e):void 0;return s?M.success(s,{id:a,...r,...null==r?void 0:r.success}):M.dismiss(a),e}).catch(e=>{let s=t.error?N(t.error,e):void 0;s?M.error(s,{id:a,...r,...null==r?void 0:r.error}):M.dismiss(a)}),e};var Z=1e3,H=(e,t="default")=>{let{toasts:r,pausedAt:a}=P(e,t),s=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=Z)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,r)},[]);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&M.dismiss(r.id);return}return setTimeout(()=>M.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,o.useCallback)(F(t),[t]),l=(0,o.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,o.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,o.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=t||{},o=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},V=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=k`
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
}`,U=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q} 0.15s ease-out forwards;
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
`,W=k`
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
  animation: ${W} 1s linear infinite;
`,G=k`
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
}`,J=w("div")`
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
`,K=w("div")`
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
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(et,null,t):t:"blank"===r?null:o.createElement(X,null,o.createElement(Y,{...a}),"loading"!==r&&o.createElement(K,null,"error"===r?o.createElement(U,{...a}):o.createElement(J,{...a})))},ea=e=>`
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
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${k(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=o.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(er,{toast:e}),n=o.createElement(eo,{...e.ariaProps},N(e.message,e));return o.createElement(ei,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,x=i,b=void 0,v=void 0;var ed=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let i=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:r},s)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:A()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=H(r,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let i=r.position||t,n=ec(i,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(ed,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:n},"custom"===r.type?N(r.message,r):s?s(r):o.createElement(el,{toast:r,position:i}))}))},em=M}},function(e){e.O(0,[8496,2971,4938,1744],function(){return e(e.s=60665)}),_N_E=e.O()}]);