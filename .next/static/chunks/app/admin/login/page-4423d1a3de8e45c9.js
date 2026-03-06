(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5920],{73067:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},13008:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},77216:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]])},99670:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},5589:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},1295:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},49036:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]])},21271:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62898).Z)("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]])},3985:function(e,t,r){Promise.resolve().then(r.bind(r,91863))},91863:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var s=r(57437),a=r(2265),i=r(24033),l=r(61396),o=r.n(l),n=r(73067),d=r(49036),c=r(1295),p=r(5589),u=r(77216),m=r(99670),x=r(21271),h=r(13008),f=r(5925);function g(){let e=(0,i.useRouter)(),[t,r]=(0,a.useState)({email:"",password:"",otp:""}),[l,g]=(0,a.useState)(!1),[b,y]=(0,a.useState)(!1),[v,j]=(0,a.useState)(!1),w=async r=>{r.preventDefault();try{g(!0),setTimeout(()=>{let r={id:1,name:"Super Admin",email:t.email,role:"admin",permissions:"all"};localStorage.setItem("token","admin-token-123"),localStorage.setItem("user",JSON.stringify(r)),f.ZP.success("Welcome back, Admin!"),e.push("/admin")},1500)}catch(e){f.ZP.error("Login failed. Please check your credentials.")}finally{g(!1)}};return(0,s.jsxs)("div",{className:"min-h-screen flex",children:[(0,s.jsx)("div",{className:"flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-12 bg-gray-50 dark:bg-gray-900",children:(0,s.jsxs)("div",{className:"max-w-md w-full space-y-6 py-12",children:[(0,s.jsxs)(o(),{href:"/",className:"inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 mb-4",children:[(0,s.jsx)(n.Z,{size:20}),(0,s.jsx)("span",{children:"Back to Home"})]}),(0,s.jsx)("div",{className:"mb-8",children:(0,s.jsxs)("div",{className:"flex items-center space-x-3 mb-4",children:[(0,s.jsx)("img",{src:"/logo.jpeg",alt:"GharBazaar Logo",className:"h-12 w-auto"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent",children:"GharBazaar"}),(0,s.jsx)("p",{className:"text-xs text-purple-600 font-medium",children:"Admin Portal"})]})]})}),(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsx)("h1",{className:"font-heading font-bold text-3xl mb-2 text-gray-900 dark:text-white",children:"Super Admin Login"}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"Access the complete control panel"})]}),(0,s.jsx)("div",{className:"bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4 mb-6",children:(0,s.jsxs)("div",{className:"flex items-start space-x-3",children:[(0,s.jsx)(d.Z,{size:20,className:"text-purple-600 mt-0.5"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm font-semibold text-purple-900 dark:text-purple-300 mb-1",children:"Secure Admin Access"}),(0,s.jsx)("p",{className:"text-xs text-purple-700 dark:text-purple-400",children:"This portal is protected with 2FA and session monitoring"})]})]})}),(0,s.jsxs)("form",{onSubmit:w,className:"space-y-5",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300",children:"Admin Email"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(c.Z,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),(0,s.jsx)("input",{id:"email",type:"email",required:!0,className:"w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-400",placeholder:"Gharbazaarofficial@zohomail.in",value:t.email,onChange:e=>r({...t,email:e.target.value})})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300",children:"Password"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(p.Z,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),(0,s.jsx)("input",{id:"password",type:b?"text":"password",required:!0,className:"w-full pl-10 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-400",placeholder:"Enter your password",value:t.password,onChange:e=>r({...t,password:e.target.value})}),(0,s.jsx)("button",{type:"button",onClick:()=>y(!b),className:"absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",children:b?(0,s.jsx)(u.Z,{size:20}):(0,s.jsx)(m.Z,{size:20})})]})]}),v&&(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"otp",className:"block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300",children:"2FA Authentication Code"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(x.Z,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),(0,s.jsx)("input",{id:"otp",type:"text",maxLength:6,className:"w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-400",placeholder:"Enter 6-digit code",value:t.otp,onChange:e=>r({...t,otp:e.target.value})})]})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("button",{type:"button",onClick:()=>j(!v),className:"text-sm text-purple-600 hover:text-purple-700 font-medium",children:v?"Hide 2FA":"Enable 2FA"}),(0,s.jsx)(o(),{href:"/admin/forgot-password",className:"text-sm text-purple-600 hover:text-purple-700 font-medium",children:"Forgot Password?"})]}),(0,s.jsx)("button",{type:"submit",disabled:l,className:"w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3.5 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed",children:l?(0,s.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,s.jsx)("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),(0,s.jsx)("span",{children:"Authenticating..."})]}):"Sign In to Admin Portal"})]})]})}),(0,s.jsxs)("div",{className:"hidden lg:flex lg:flex-1 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute inset-0 opacity-10",children:(0,s.jsx)("div",{className:"absolute inset-0",style:{backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"32px 32px"}})}),(0,s.jsx)("div",{className:"absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"}),(0,s.jsx)("div",{className:"absolute bottom-20 left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),(0,s.jsx)("div",{className:"relative z-10 flex flex-col justify-center items-center px-12 text-white w-full",children:(0,s.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[(0,s.jsx)("div",{className:"w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 ring-4 ring-white/30",children:(0,s.jsx)(d.Z,{size:48})}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold mb-4",children:"Super Admin Portal"}),(0,s.jsx)("p",{className:"text-xl text-purple-100 mb-8",children:"Complete control over GharBazaar platform with advanced analytics and management tools"})]}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4",children:[(0,s.jsx)(h.Z,{size:24,className:"text-green-400 flex-shrink-0 mt-0.5"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-semibold mb-1",children:"Full Platform Control"}),(0,s.jsx)("p",{className:"text-sm text-purple-100",children:"Manage users, listings, employees, and revenue"})]})]}),(0,s.jsxs)("div",{className:"flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4",children:[(0,s.jsx)(h.Z,{size:24,className:"text-green-400 flex-shrink-0 mt-0.5"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-semibold mb-1",children:"Advanced Analytics"}),(0,s.jsx)("p",{className:"text-sm text-purple-100",children:"Real-time insights and performance metrics"})]})]}),(0,s.jsxs)("div",{className:"flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4",children:[(0,s.jsx)(h.Z,{size:24,className:"text-green-400 flex-shrink-0 mt-0.5"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-semibold mb-1",children:"Security & Monitoring"}),(0,s.jsx)("p",{className:"text-sm text-purple-100",children:"System logs, fraud detection, and alerts"})]})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-4 pt-8 border-t border-white/20",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"text-3xl font-bold mb-1",children:"10K+"}),(0,s.jsx)("div",{className:"text-xs text-purple-200",children:"Users"})]}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"text-3xl font-bold mb-1",children:"1.5K"}),(0,s.jsx)("div",{className:"text-xs text-purple-200",children:"Listings"})]}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"text-3xl font-bold mb-1",children:"₹12L"}),(0,s.jsx)("div",{className:"text-xs text-purple-200",children:"Revenue"})]})]})]})})]})]})}},24033:function(e,t,r){e.exports=r(15313)},5925:function(e,t,r){"use strict";let s,a;r.d(t,{x7:function(){return eu},ZP:function(){return em},Am:function(){return H}});var i,l=r(2265);let o={data:""},n=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||o},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let r="",s="",a="";for(let i in e){let l=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+l+";":s+="f"==i[1]?u(l,i):i+"{"+u(l,"k"==i[1]?"":t)+"}":"object"==typeof l?s+=u(l,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=l&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=u.p?u.p(i,l):i+":"+l+";")}return r+(t&&a?t+"{"+a+"}":a)+s},m={},x=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+x(e[r]);return t}return e},h=(e,t,r,s,a)=>{var i;let l=x(e),o=m[l]||(m[l]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(l));if(!m[o]){let t=l!==e?e:(e=>{let t,r,s=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?s.shift():t[3]?(r=t[3].replace(p," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(p," ").trim();return s[0]})(e);m[o]=u(a?{["@keyframes "+o]:t}:t,r?"":"."+o)}let n=r&&m.g?m.g:null;return r&&(m.g=m[o]),i=m[o],n?t.data=t.data.replace(n,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),o},f=(e,t,r)=>e.reduce((e,s,a)=>{let i=t[a];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?f(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,n(t.target),t.g,t.o,t.k)}g.bind({g:1});let b,y,v,j=g.bind({k:1});function w(e,t){let r=this||{};return function(){let s=arguments;function a(i,l){let o=Object.assign({},i),n=o.className||a.className;r.p=Object.assign({theme:y&&y()},o),r.o=/ *go\d+/.test(n),o.className=g.apply(r,s)+(n?" "+n:""),t&&(o.ref=l);let d=e;return e[0]&&(d=o.as||e,delete o.as),v&&d[0]&&v(o),b(d,o)}return t?t(a):a}}var k=e=>"function"==typeof e,N=(e,t)=>k(e)?e(t):e,E=(s=0,()=>(++s).toString()),z=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},A="default",Z=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return Z(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},C=[],S={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},P={},$=(e,t=A)=>{P[t]=Z(P[t]||S,e),C.forEach(([e,r])=>{e===t&&r(P[t])})},M=e=>Object.keys(P).forEach(t=>$(e,t)),O=e=>Object.keys(P).find(t=>P[t].toasts.some(t=>t.id===e)),D=(e=A)=>t=>{$(t,e)},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={},t=A)=>{let[r,s]=(0,l.useState)(P[t]||S),a=(0,l.useRef)(P[t]);(0,l.useEffect)(()=>(a.current!==P[t]&&s(P[t]),C.push([t,s]),()=>{let e=C.findIndex(([e])=>e===t);e>-1&&C.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,s,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||L[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...r,toasts:i}},F=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),_=e=>(t,r)=>{let s=F(t,e,r);return D(s.toasterId||O(s.id))({type:2,toast:s}),s.id},H=(e,t)=>_("blank")(e,t);H.error=_("error"),H.success=_("success"),H.loading=_("loading"),H.custom=_("custom"),H.dismiss=(e,t)=>{let r={type:3,toastId:e};t?D(t)(r):M(r)},H.dismissAll=e=>H.dismiss(void 0,e),H.remove=(e,t)=>{let r={type:4,toastId:e};t?D(t)(r):M(r)},H.removeAll=e=>H.remove(void 0,e),H.promise=(e,t,r)=>{let s=H.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?N(t.success,e):void 0;return a?H.success(a,{id:s,...r,...null==r?void 0:r.success}):H.dismiss(s),e}).catch(e=>{let a=t.error?N(t.error,e):void 0;a?H.error(a,{id:s,...r,...null==r?void 0:r.error}):H.dismiss(s)}),e};var T=1e3,R=(e,t="default")=>{let{toasts:r,pausedAt:s}=I(e,t),a=(0,l.useRef)(new Map).current,i=(0,l.useCallback)((e,t=T)=>{if(a.has(e))return;let r=setTimeout(()=>{a.delete(e),o({type:4,toastId:e})},t);a.set(e,r)},[]);(0,l.useEffect)(()=>{if(s)return;let e=Date.now(),a=r.map(r=>{if(r.duration===1/0)return;let s=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(s<0){r.visible&&H.dismiss(r.id);return}return setTimeout(()=>H.dismiss(r.id,t),s)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[r,s,t]);let o=(0,l.useCallback)(D(t),[t]),n=(0,l.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),d=(0,l.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),c=(0,l.useCallback)(()=>{s&&o({type:6,time:Date.now()})},[s,o]),p=(0,l.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:i}=t||{},l=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),o=l.findIndex(t=>t.id===e.id),n=l.filter((e,t)=>t<o&&e.visible).length;return l.filter(e=>e.visible).slice(...s?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+a,0)},[r]);return(0,l.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:p}}},q=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=j`
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

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${G} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,V=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,K=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${V} 1s linear infinite;
`,J=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,W=j`
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
}`,Y=w("div")`
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
    animation: ${W} 0.2s ease-out forwards;
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
`,ee=j`
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
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return void 0!==t?"string"==typeof t?l.createElement(et,null,t):t:"blank"===r?null:l.createElement(X,null,l.createElement(K,{...s}),"loading"!==r&&l.createElement(Q,null,"error"===r?l.createElement(U,{...s}):l.createElement(Y,{...s})))},es=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
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
`,el=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eo=(e,t)=>{let r=e.includes("top")?1:-1,[s,a]=z()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(r),ea(r)];return{animation:t?`${j(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=l.memo(({toast:e,position:t,style:r,children:s})=>{let a=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},i=l.createElement(er,{toast:e}),o=l.createElement(el,{...e.ariaProps},N(e.message,e));return l.createElement(ei,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof s?s({icon:i,message:o}):l.createElement(l.Fragment,null,i,o))});i=l.createElement,u.p=void 0,b=i,y=void 0,v=void 0;var ed=({id:e,className:t,style:r,onHeightUpdate:s,children:a})=>{let i=l.useCallback(t=>{if(t){let r=()=>{s(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return l.createElement("div",{ref:i,className:t,style:r},a)},ec=(e,t)=>{let r=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...s}},ep=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:a,toasterId:i,containerStyle:o,containerClassName:n})=>{let{toasts:d,handlers:c}=R(r,i);return l.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let i=r.position||t,o=ec(i,c.calculateOffset(r,{reverseOrder:e,gutter:s,defaultPosition:t}));return l.createElement(ed,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ep:"",style:o},"custom"===r.type?N(r.message,r):a?a(r):l.createElement(en,{toast:r,position:i}))}))},em=H}},function(e){e.O(0,[6221,2971,4938,1744],function(){return e(e.s=3985)}),_N_E=e.O()}]);