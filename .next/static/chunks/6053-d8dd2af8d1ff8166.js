"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6053],{11981:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(62898).Z)("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},72894:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(62898).Z)("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},13008:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(62898).Z)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},74056:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(62898).Z)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},1295:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(62898).Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},93088:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(62898).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},49036:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(62898).Z)("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]])},44135:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(62898).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},16307:function(e,t,n){n.d(t,{M:function(){return x}});var r=n(57437),o=n(2265),i=n(781),u=n(10961),l=n(538),c=n(38243),s=n(96119),f=n(45968);function h(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class p extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=(0,s.R)(e)&&e.offsetWidth||0,r=(0,s.R)(e)&&e.offsetHeight||0,o=this.props.sizeRef.current;o.height=t.offsetHeight||0,o.width=t.offsetWidth||0,o.top=t.offsetTop,o.left=t.offsetLeft,o.right=n-o.width-o.left,o.bottom=r-o.height-o.top}return null}componentDidUpdate(){}render(){return this.props.children}}function a({children:e,isPresent:t,anchorX:n,anchorY:i,root:u}){let l=(0,o.useId)(),c=(0,o.useRef)(null),s=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:a}=(0,o.useContext)(f._),d=function(...e){return o.useCallback(function(...e){return t=>{let n=!1,r=e.map(e=>{let r=h(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():h(e[t],null)}}}}(...e),e)}(c,e.props?.ref??e?.ref);return(0,o.useInsertionEffect)(()=>{let{width:e,height:r,top:o,left:f,right:h,bottom:p}=s.current;if(t||!c.current||!e||!r)return;let d="left"===n?`left: ${f}`:`right: ${h}`,m="bottom"===i?`bottom: ${p}`:`top: ${o}`;c.current.dataset.motionPopId=l;let y=document.createElement("style");a&&(y.nonce=a);let k=u??document.head;return k.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            ${d}px !important;
            ${m}px !important;
          }
        `),()=>{k.contains(y)&&k.removeChild(y)}},[t]),(0,r.jsx)(p,{isPresent:t,childRef:c,sizeRef:s,children:o.cloneElement(e,{ref:d})})}let d=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:l,presenceAffectsLayout:s,mode:f,anchorX:h,anchorY:p,root:d})=>{let y=(0,u.h)(m),k=(0,o.useId)(),g=!0,x=(0,o.useMemo)(()=>(g=!1,{id:k,initial:t,isPresent:n,custom:l,onExitComplete:e=>{for(let t of(y.set(e,!0),y.values()))if(!t)return;i&&i()},register:e=>(y.set(e,!1),()=>y.delete(e))}),[n,y,i]);return s&&g&&(x={...x}),(0,o.useMemo)(()=>{y.forEach((e,t)=>y.set(t,!1))},[n]),o.useEffect(()=>{n||y.size||!i||i()},[n]),"popLayout"===f&&(e=(0,r.jsx)(a,{isPresent:n,anchorX:h,anchorY:p,root:d,children:e})),(0,r.jsx)(c.O.Provider,{value:x,children:e})};function m(){return new Map}var y=n(77196);let k=e=>e.key||"";function g(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}let x=({children:e,custom:t,initial:n=!0,onExitComplete:c,presenceAffectsLayout:s=!0,mode:f="sync",propagate:h=!1,anchorX:p="left",anchorY:a="top",root:m})=>{let[x,M]=(0,y.oO)(h),Z=(0,o.useMemo)(()=>g(e),[e]),v=h&&!x?[]:Z.map(k),C=(0,o.useRef)(!0),w=(0,o.useRef)(Z),E=(0,u.h)(()=>new Map),R=(0,o.useRef)(new Set),[b,j]=(0,o.useState)(Z),[$,P]=(0,o.useState)(Z);(0,l.L)(()=>{C.current=!1,w.current=Z;for(let e=0;e<$.length;e++){let t=k($[e]);v.includes(t)?(E.delete(t),R.current.delete(t)):!0!==E.get(t)&&E.set(t,!1)}},[$,v.length,v.join("-")]);let z=[];if(Z!==b){let e=[...Z];for(let t=0;t<$.length;t++){let n=$[t],r=k(n);v.includes(r)||(e.splice(t,0,n),z.push(n))}return"wait"===f&&z.length&&(e=z),P(g(e)),j(Z),null}let{forceRender:L}=(0,o.useContext)(i.p);return(0,r.jsx)(r.Fragment,{children:$.map(e=>{let o=k(e),i=(!h||!!x)&&(Z===$||v.includes(o));return(0,r.jsx)(d,{isPresent:i,initial:(!C.current||!!n)&&void 0,custom:t,presenceAffectsLayout:s,mode:f,root:m,onExitComplete:i?void 0:()=>{if(R.current.has(o)||(R.current.add(o),!E.has(o)))return;E.set(o,!0);let e=!0;E.forEach(t=>{t||(e=!1)}),e&&(L?.(),P(w.current),h&&M?.(),c&&c())},anchorX:p,anchorY:a,children:e},o)})})}}}]);