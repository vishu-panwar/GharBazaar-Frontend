(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6465],{73067:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},68291:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},13008:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},1295:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},96142:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},12741:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]])},49036:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]])},25750:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62898).Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},54325:function(e,t,r){Promise.resolve().then(r.bind(r,74820))},74820:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(57437),s=r(2265),i=r(24033),o=r(61396),l=r.n(o),n=r(96142),d=r(13008),c=r(49036),u=r(73067),m=r(25750),p=r(1295),h=r(12741),f=r(68291),x=r(5925);function g(){let e=(0,i.useRouter)(),[t,r]=(0,s.useState)({name:"",email:"",phone:""}),[o,g]=(0,s.useState)(!1),b=async r=>{r.preventDefault(),g(!0);try{await new Promise(e=>setTimeout(e,1500)),localStorage.setItem("signupData",JSON.stringify(t)),x.ZP.success("Account created! Please complete your registration."),e.push("/ground-partner/registration")}catch(e){x.ZP.error("Signup failed. Please try again.")}finally{g(!1)}},y=async()=>{g(!0);try{await new Promise(e=>setTimeout(e,2e3)),localStorage.setItem("signupData",JSON.stringify({name:"Rajesh Kumar",email:"rajesh@gmail.com",phone:""})),x.ZP.success("Account created with Google! Please complete your registration."),e.push("/ground-partner/registration")}catch(e){x.ZP.error("Google signup failed. Please try again.")}finally{g(!1)}},v=[{icon:n.Z,title:"Flexible Work",description:"Choose your own schedule and work in your preferred areas"},{icon:d.Z,title:"Verified Tasks",description:"Get legitimate property verification and site visit tasks"},{icon:c.Z,title:"Secure Payments",description:"Guaranteed payments for completed tasks with transparent rates"}];return(0,a.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex relative",children:[(0,a.jsxs)(l(),{href:"/",className:"absolute top-6 left-6 z-50 flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-200 group",children:[(0,a.jsx)(u.Z,{size:20,className:"group-hover:-translate-x-1 transition-transform"}),(0,a.jsx)("span",{className:"font-medium",children:"Back to Home"})]}),(0,a.jsxs)("div",{className:"hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-12 text-white relative overflow-hidden",children:[(0,a.jsxs)("div",{className:"absolute inset-0 opacity-10",children:[(0,a.jsx)("div",{className:"absolute top-10 left-10 w-32 h-32 bg-white rounded-full"}),(0,a.jsx)("div",{className:"absolute top-1/3 right-20 w-24 h-24 bg-white rounded-full"}),(0,a.jsx)("div",{className:"absolute bottom-20 left-1/3 w-40 h-40 bg-white rounded-full"})]}),(0,a.jsxs)("div",{className:"relative z-10 flex flex-col justify-center",children:[(0,a.jsxs)("div",{className:"mb-12",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-4 mb-6",children:[(0,a.jsx)("img",{src:"/logo.jpeg",alt:"GharBazaar Logo",className:"h-16 w-16 rounded-2xl shadow-lg object-cover"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-3xl font-bold",children:"GharBazaar"}),(0,a.jsx)("p",{className:"text-blue-200",children:"Ground Partner Portal"})]})]}),(0,a.jsx)("h2",{className:"text-4xl font-bold mb-4",children:"Start Your Journey"}),(0,a.jsx)("p",{className:"text-xl text-blue-100 leading-relaxed",children:"Join thousands of ground partners earning with India's most trusted real estate platform."})]}),(0,a.jsx)("div",{className:"space-y-8",children:v.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,a.jsx)("div",{className:"p-3 bg-white/20 backdrop-blur-sm rounded-2xl",children:(0,a.jsx)(e.icon,{size:24,className:"text-white"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2",children:e.title}),(0,a.jsx)("p",{className:"text-blue-100",children:e.description})]})]},t))}),(0,a.jsx)("div",{className:"mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20",children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)(m.Z,{size:32,className:"text-blue-200"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-2xl font-bold",children:"₹25,000+"}),(0,a.jsx)("p",{className:"text-blue-200",children:"Average Monthly Earnings"})]})]})})]})]}),(0,a.jsx)("div",{className:"w-full lg:w-1/2 flex items-center justify-center p-8",children:(0,a.jsxs)("div",{className:"max-w-md w-full",children:[(0,a.jsxs)("div",{className:"lg:hidden text-center mb-8",children:[(0,a.jsx)("div",{className:"flex items-center justify-center mb-4",children:(0,a.jsx)("img",{src:"/logo.jpeg",alt:"GharBazaar Logo",className:"h-16 w-16 rounded-2xl shadow-lg object-cover"})}),(0,a.jsx)("h1",{className:"text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",children:"Ground Partner Portal"}),(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:"Join as a ground partner"})]}),(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-950 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8",children:[(0,a.jsxs)("div",{className:"hidden lg:block mb-8",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:"Create Account"}),(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"Start your journey as a ground partner"})]}),(0,a.jsxs)("button",{type:"button",onClick:y,disabled:o,className:"w-full flex items-center justify-center space-x-3 py-3 px-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed mb-6",children:[(0,a.jsxs)("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,a.jsx)("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),(0,a.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),(0,a.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),(0,a.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),(0,a.jsx)("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:o?"Creating account...":"Continue with Google"})]}),(0,a.jsxs)("div",{className:"relative mb-6",children:[(0,a.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,a.jsx)("div",{className:"w-full border-t border-gray-200 dark:border-gray-700"})}),(0,a.jsx)("div",{className:"relative flex justify-center text-sm",children:(0,a.jsx)("span",{className:"px-4 bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400",children:"Or create with email"})})]}),(0,a.jsxs)("form",{onSubmit:b,className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Full Name"}),(0,a.jsx)("input",{type:"text",required:!0,value:t.name,onChange:e=>r({...t,name:e.target.value}),className:"w-full py-3 px-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter your full name"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Email Address"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(p.Z,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),(0,a.jsx)("input",{type:"email",required:!0,value:t.email,onChange:e=>r({...t,email:e.target.value}),className:"w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter your email"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Phone Number"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(h.Z,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),(0,a.jsx)("input",{type:"tel",required:!0,value:t.phone,onChange:e=>r({...t,phone:e.target.value}),className:"w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"+91 98765 43210"})]})]}),(0,a.jsxs)("div",{className:"flex items-start space-x-3",children:[(0,a.jsx)("input",{type:"checkbox",required:!0,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-1"}),(0,a.jsxs)("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:["I agree to the"," ",(0,a.jsx)(l(),{href:"/terms",className:"text-blue-600 hover:text-blue-700 font-medium",children:"Terms of Service"})," ","and"," ",(0,a.jsx)(l(),{href:"/privacy",className:"text-blue-600 hover:text-blue-700 font-medium",children:"Privacy Policy"})]})]}),(0,a.jsx)("button",{type:"submit",disabled:o,className:"w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:o?(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"Creating Account..."]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:"Create Account"}),(0,a.jsx)(f.Z,{size:20})]})})]}),(0,a.jsx)("div",{className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-800",children:(0,a.jsxs)("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Already have an account?"," ",(0,a.jsx)(l(),{href:"/ground-partner/login",className:"text-blue-600 hover:text-blue-700 font-medium",children:"Sign in here"})]})})]}),(0,a.jsx)("div",{className:"mt-8 text-center space-y-2",children:(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400",children:[(0,a.jsx)(l(),{href:"/legal-partner",className:"hover:text-blue-600 transition-colors",children:"Legal Partner"}),(0,a.jsx)("span",{children:"•"}),(0,a.jsx)(l(),{href:"/promoter-partner",className:"hover:text-blue-600 transition-colors",children:"Promoter Partner"}),(0,a.jsx)("span",{children:"•"}),(0,a.jsx)(l(),{href:"/",className:"hover:text-blue-600 transition-colors",children:"Home"})]})})]})})]})}},24033:function(e,t,r){e.exports=r(15313)},5925:function(e,t,r){"use strict";let a,s;r.d(t,{x7:function(){return em},ZP:function(){return ep},Am:function(){return q}});var i,o=r(2265);let l={data:""},n=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||l},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?m(o,i):i+"{"+m(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=m(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=m.p?m.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},p={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e},f=(e,t,r,a,s)=>{var i;let o=h(e),l=p[o]||(p[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!p[l]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[l]=m(s?{["@keyframes "+l]:t}:t,r?"":"."+l)}let n=r&&p.g?p.g:null;return r&&(p.g=p[l]),i=p[l],n?t.data=t.data.replace(n,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),l},x=(e,t,r)=>e.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return f(r.unshift?r.raw?x(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,n(t.target),t.g,t.o,t.k)}g.bind({g:1});let b,y,v,j=g.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let l=Object.assign({},i),n=l.className||s.className;r.p=Object.assign({theme:y&&y()},l),r.o=/ *go\d+/.test(n),l.className=g.apply(r,a)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),v&&d[0]&&v(l),b(d,l)}return t?t(s):s}}var k=e=>"function"==typeof e,N=(e,t)=>k(e)?e(t):e,C=(a=0,()=>(++a).toString()),E=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},P="default",Z=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return Z(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},z=[],A={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},M={},O=(e,t=P)=>{M[t]=Z(M[t]||A,e),z.forEach(([e,r])=>{e===t&&r(M[t])})},S=e=>Object.keys(M).forEach(t=>O(e,t)),$=e=>Object.keys(M).find(t=>M[t].toasts.some(t=>t.id===e)),D=(e=P)=>t=>{O(t,e)},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},L=(e={},t=P)=>{let[r,a]=(0,o.useState)(M[t]||A),s=(0,o.useRef)(M[t]);(0,o.useEffect)(()=>(s.current!==M[t]&&a(M[t]),z.push([t,a]),()=>{let e=z.findIndex(([e])=>e===t);e>-1&&z.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:i}},_=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),H=e=>(t,r)=>{let a=_(t,e,r);return D(a.toasterId||$(a.id))({type:2,toast:a}),a.id},q=(e,t)=>H("blank")(e,t);q.error=H("error"),q.success=H("success"),q.loading=H("loading"),q.custom=H("custom"),q.dismiss=(e,t)=>{let r={type:3,toastId:e};t?D(t)(r):S(r)},q.dismissAll=e=>q.dismiss(void 0,e),q.remove=(e,t)=>{let r={type:4,toastId:e};t?D(t)(r):S(r)},q.removeAll=e=>q.remove(void 0,e),q.promise=(e,t,r)=>{let a=q.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?N(t.success,e):void 0;return s?q.success(s,{id:a,...r,...null==r?void 0:r.success}):q.dismiss(a),e}).catch(e=>{let s=t.error?N(t.error,e):void 0;s?q.error(s,{id:a,...r,...null==r?void 0:r.error}):q.dismiss(a)}),e};var F=1e3,G=(e,t="default")=>{let{toasts:r,pausedAt:a}=L(e,t),s=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=F)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),l({type:4,toastId:e})},t);s.set(e,r)},[]);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&q.dismiss(r.id);return}return setTimeout(()=>q.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let l=(0,o.useCallback)(D(t),[t]),n=(0,o.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,o.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,o.useCallback)(()=>{a&&l({type:6,time:Date.now()})},[a,l]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=t||{},o=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:u}}},T=j`
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
}`,R=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,J=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${T} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${R} 0.15s ease-out forwards;
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
`,U=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${V} 1s linear infinite;
`,Y=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=j`
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
}`,W=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(et,null,t):t:"blank"===r?null:o.createElement(X,null,o.createElement(U,{...a}),"loading"!==r&&o.createElement(Q,null,"error"===r?o.createElement(J,{...a}):o.createElement(W,{...a})))},ea=e=>`
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
`,el=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${j(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=o.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?el(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(er,{toast:e}),l=o.createElement(eo,{...e.ariaProps},N(e.message,e));return o.createElement(ei,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:i,message:l}):o.createElement(o.Fragment,null,i,l))});i=o.createElement,m.p=void 0,b=i,y=void 0,v=void 0;var ed=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let i=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:r},s)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,em=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:i,containerStyle:l,containerClassName:n})=>{let{toasts:d,handlers:c}=G(r,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let i=r.position||t,l=ec(i,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(ed,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:l},"custom"===r.type?N(r.message,r):s?s(r):o.createElement(en,{toast:r,position:i}))}))},ep=q}},function(e){e.O(0,[6221,2971,4938,1744],function(){return e(e.s=54325)}),_N_E=e.O()}]);