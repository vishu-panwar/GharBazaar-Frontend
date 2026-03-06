(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6208],{62898:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(2265),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),o=(e,t)=>{let r=(0,a.forwardRef)(({color:r="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:c="",children:d,...u},p)=>(0,a.createElement)("svg",{ref:p,...s,width:o,height:o,stroke:r,strokeWidth:l?24*Number(n)/Number(o):n,className:["lucide",`lucide-${i(e)}`,c].join(" "),...u},[...t.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(d)?d:[d]]));return r.displayName=`${e}`,r}},64280:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},76020:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]])},62601:function(e,t,r){"use strict";var a,s;e.exports=(null==(a=r.g.process)?void 0:a.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(58960)},7497:function(e,t,r){Promise.resolve().then(r.bind(r,41086))},41086:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var a=r(57437),s=r(2265),i=r(64280),o=r(76020),n=r(5925),l=r(68496);function c(){let[e,t]=(0,s.useState)(!0),[r,c]=(0,s.useState)([]),[d,u]=(0,s.useState)("all"),[p,m]=(0,s.useState)(null),[f,g]=(0,s.useState)([]),[y,h]=(0,s.useState)(""),[x,b]=(0,s.useState)(!1),v=async()=>{try{var e;t(!0);let r=await l.backendApi.employee.getTickets(d);if(!(null==r?void 0:r.success))throw Error((null==r?void 0:r.error)||"Failed to load tickets");let a=(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.tickets)||[];c(a),!p&&a.length>0&&m(a[0]._id||a[0].id||null)}catch(e){n.ZP.error((null==e?void 0:e.message)||"Failed to load tickets")}finally{t(!1)}},k=async e=>{try{var t;let r=await l.backendApi.tickets.getById(e);if(!(null==r?void 0:r.success))throw Error((null==r?void 0:r.error)||"Failed to load ticket details");g((null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.messages)||[])}catch(e){n.ZP.error((null==e?void 0:e.message)||"Failed to load messages"),g([])}};(0,s.useEffect)(()=>{v()},[d]),(0,s.useEffect)(()=>{p?k(p):g([])},[p]);let w=(0,s.useMemo)(()=>r.find(e=>(e._id||e.id)===p)||null,[r,p]),j=async()=>{if(p&&y.trim())try{b(!0);let e=await l.backendApi.tickets.sendMessage(p,y.trim());if(!(null==e?void 0:e.success))throw Error((null==e?void 0:e.error)||"Failed to send message");h(""),await k(p),await v()}catch(e){n.ZP.error((null==e?void 0:e.message)||"Failed to send message")}finally{b(!1)}},N=async()=>{if(p)try{let e=await l.backendApi.tickets.assign(p);if(!(null==e?void 0:e.success))throw Error((null==e?void 0:e.error)||"Failed to assign ticket");n.ZP.success("Ticket assigned"),await v(),await k(p)}catch(e){n.ZP.error((null==e?void 0:e.message)||"Failed to assign ticket")}},E=async()=>{if(p)try{let e=await l.backendApi.tickets.close(p);if(!(null==e?void 0:e.success))throw Error((null==e?void 0:e.error)||"Failed to close ticket");n.ZP.success("Ticket closed"),await v(),await k(p)}catch(e){n.ZP.error((null==e?void 0:e.message)||"Failed to close ticket")}};return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Support Tickets"}),(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Respond to buyer and seller support requests"})]}),(0,a.jsxs)("button",{onClick:v,className:"inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,a.jsx)(i.Z,{size:16}),"Refresh"]})]}),(0,a.jsx)("div",{className:"flex gap-2",children:["all","open","assigned","in_progress","resolved","closed"].map(e=>(0,a.jsx)("button",{onClick:()=>u(e),className:"rounded-lg px-3 py-2 text-sm capitalize ".concat(d===e?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"),children:e},e))}),(0,a.jsxs)("div",{className:"grid gap-4 lg:grid-cols-3",children:[(0,a.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",children:[(0,a.jsxs)("div",{className:"border-b border-gray-200 px-4 py-3 text-sm font-semibold dark:border-gray-800",children:["Tickets (",r.length,")"]}),(0,a.jsxs)("div",{className:"max-h-[520px] overflow-auto",children:[e&&(0,a.jsx)("p",{className:"px-4 py-6 text-sm text-gray-500",children:"Loading tickets..."}),!e&&0===r.length&&(0,a.jsx)("p",{className:"px-4 py-6 text-sm text-gray-500",children:"No tickets found."}),!e&&r.map(e=>{let t=e._id||e.id||"";return(0,a.jsxs)("button",{onClick:()=>m(t),className:"w-full border-b border-gray-100 px-4 py-3 text-left transition hover:bg-gray-50 dark:border-gray-900 dark:hover:bg-gray-900 ".concat(p===t?"bg-blue-50 dark:bg-blue-900/20":""),children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 dark:text-gray-100",children:e.categoryTitle||"General"}),(0,a.jsx)("p",{className:"line-clamp-2 text-xs text-gray-500",children:e.problem||"-"}),(0,a.jsx)("p",{className:"mt-1 text-xs capitalize text-blue-600 dark:text-blue-400",children:e.status||"open"})]},t)})]})]}),(0,a.jsxs)("div",{className:"lg:col-span-2 rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",children:[!w&&(0,a.jsx)("p",{className:"px-4 py-6 text-sm text-gray-500",children:"Select a ticket to view details."}),w&&(0,a.jsxs)("div",{className:"space-y-4 p-4",children:[(0,a.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{className:"text-lg font-semibold text-gray-900 dark:text-gray-100",children:[w.categoryTitle||"Support"," • ",w.subCategoryTitle||"General"]}),(0,a.jsxs)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["User: ",w.userId||"N/A"]})]}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("button",{onClick:N,className:"rounded bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700",children:"Assign to Me"}),(0,a.jsx)("button",{onClick:E,className:"rounded bg-green-600 px-3 py-2 text-xs font-medium text-white hover:bg-green-700",children:"Close Ticket"})]})]}),(0,a.jsx)("div",{className:"rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-900",children:w.problem}),(0,a.jsxs)("div",{className:"max-h-[320px] space-y-2 overflow-auto rounded-lg border border-gray-200 p-3 dark:border-gray-800",children:[0===f.length&&(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"No messages yet."}),f.map(e=>(0,a.jsxs)("div",{className:"rounded-lg px-3 py-2 text-sm ".concat("employee"===(e.senderType||"").toLowerCase()?"ml-10 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100":"mr-10 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"),children:[(0,a.jsx)("p",{children:e.message}),(0,a.jsx)("p",{className:"mt-1 text-xs text-gray-500",children:new Date(e.timestamp||e.createdAt||"").toLocaleString()})]},e._id||e.id))]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("input",{value:y,onChange:e=>h(e.target.value),placeholder:"Type a response...",className:"flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900"}),(0,a.jsxs)("button",{onClick:j,disabled:x||!y.trim(),className:"inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50",children:[(0,a.jsx)(o.Z,{size:14}),"Send"]})]})]})]})]})]})}},58960:function(e){!function(){var t={229:function(e){var t,r,a,s=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function n(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l=[],c=!1,d=-1;function u(){c&&a&&(c=!1,a.length?l=a.concat(l):d=-1,l.length&&p())}function p(){if(!c){var e=n(u);c=!0;for(var t=l.length;t;){for(a=l,l=[];++d<t;)a&&a[d].run();d=-1,t=l.length}a=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||c||n(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function a(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}},o=!0;try{t[e](i,i.exports,a),o=!1}finally{o&&delete r[e]}return i.exports}a.ab="//";var s=a(229);e.exports=s}()},30622:function(e,t,r){"use strict";var a=r(2265),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,i={},c=null,d=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:s,type:e,key:c,ref:d,props:i,_owner:n.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},57437:function(e,t,r){"use strict";e.exports=r(30622)},5925:function(e,t,r){"use strict";let a,s;r.d(t,{x7:function(){return ep},ZP:function(){return em},Am:function(){return M}});var i,o=r(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},g=(e,t,r,a,s)=>{var i;let o=f(e),n=m[o]||(m[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!m[n]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},y=(e,t,r)=>e.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function h(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?y(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let x,b,v,k=h.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=h.apply(r,a)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),x(c,n)}return t?t(s):s}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,E=(a=0,()=>(++a).toString()),T=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},_="default",C=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return C(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},A=[],O={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},$={},S=(e,t=_)=>{$[t]=C($[t]||O,e),A.forEach(([e,r])=>{e===t&&r($[t])})},L=e=>Object.keys($).forEach(t=>S(e,t)),P=e=>Object.keys($).find(t=>$[t].toasts.some(t=>t.id===e)),Z=(e=_)=>t=>{S(t,e)},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={},t=_)=>{let[r,a]=(0,o.useState)($[t]||O),s=(0,o.useRef)($[t]);(0,o.useEffect)(()=>(s.current!==$[t]&&a($[t]),A.push([t,a]),()=>{let e=A.findIndex(([e])=>e===t);e>-1&&A.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:i}},z=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),I=e=>(t,r)=>{let a=z(t,e,r);return Z(a.toasterId||P(a.id))({type:2,toast:a}),a.id},M=(e,t)=>I("blank")(e,t);M.error=I("error"),M.success=I("success"),M.loading=I("loading"),M.custom=I("custom"),M.dismiss=(e,t)=>{let r={type:3,toastId:e};t?Z(t)(r):L(r)},M.dismissAll=e=>M.dismiss(void 0,e),M.remove=(e,t)=>{let r={type:4,toastId:e};t?Z(t)(r):L(r)},M.removeAll=e=>M.remove(void 0,e),M.promise=(e,t,r)=>{let a=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?N(t.success,e):void 0;return s?M.success(s,{id:a,...r,...null==r?void 0:r.success}):M.dismiss(a),e}).catch(e=>{let s=t.error?N(t.error,e):void 0;s?M.error(s,{id:a,...r,...null==r?void 0:r.error}):M.dismiss(a)}),e};var R=1e3,H=(e,t="default")=>{let{toasts:r,pausedAt:a}=F(e,t),s=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=R)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,r)},[]);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&M.dismiss(r.id);return}return setTimeout(()=>M.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,o.useCallback)(Z(t),[t]),l=(0,o.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),c=(0,o.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),d=(0,o.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=t||{},o=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},q=k`
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
}`,W=w("div")`
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
    animation: ${B} 0.15s ease-out forwards;
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
}`,K=k`
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
`,V=w("div")`
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
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(et,null,t):t:"blank"===r?null:o.createElement(X,null,o.createElement(Y,{...a}),"loading"!==r&&o.createElement(V,null,"error"===r?o.createElement(W,{...a}):o.createElement(Q,{...a})))},ea=e=>`
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
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=T()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${k(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=o.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(er,{toast:e}),n=o.createElement(eo,{...e.ariaProps},N(e.message,e));return o.createElement(ei,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,x=i,b=void 0,v=void 0;var ec=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let i=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:r},s)},ed=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:T()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:c,handlers:d}=H(r,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(r=>{let i=r.position||t,n=ed(i,d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(ec,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?eu:"",style:n},"custom"===r.type?N(r.message,r):s?s(r):o.createElement(el,{toast:r,position:i}))}))},em=M}},function(e){e.O(0,[8496,2971,4938,1744],function(){return e(e.s=7497)}),_N_E=e.O()}]);