(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5617],{46993:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let i=r(21024)._(r(2265)).default.createContext(null)},89840:function(e,t,r){var i=r(62601);r(90472);var s=r(2265),n=s&&"object"==typeof s&&"default"in s?s:{default:s};function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=void 0!==i&&i.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},u=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,n=void 0===s?a:s;c(l(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",c("boolean"==typeof n,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=n,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(c(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(e){return -1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed){var r=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(t){r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];c(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},r.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},r.cssRules=function(){var e=this;return this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&c(l(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(i,r):s.appendChild(i),i},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},p={};function h(e,t){if(!t)return"jsx-"+e;var r=String(t),i=e+r;return p[i]||(p[i]="jsx-"+d(e+"-"+r)),p[i]}function f(e,t){var r=e+t;return p[r]||(p[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),p[r]}var m=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,i=void 0===r?null:r,s=t.optimizeForSpeed,n=void 0!==s&&s;this._sheet=i||new u({name:"styled-jsx",optimizeForSpeed:n}),this._sheet.inject(),i&&"boolean"==typeof n&&(this._sheet.setOptimizeForSpeed(n),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),i=r.styleId,s=r.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var n=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=n,this._instancesCounts[i]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var i=this._fromServer&&this._fromServer[r];i?(i.parentNode.removeChild(i),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],i=e[1];return n.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,i=e.id;if(r){var s=h(i,r);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return f(s,e)}):[f(s,t)]}}return{styleId:h(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),y=s.createContext(null);y.displayName="StyleSheetContext";var g=n.default.useInsertionEffect||n.default.useLayoutEffect,v=new m;function _(e){var t=v||s.useContext(y);return t&&g(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}_.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=_},69102:function(e,t,r){e.exports=r(89840).style},90472:function(){},5925:function(e,t,r){"use strict";let i,s;r.d(t,{x7:function(){return ep},ZP:function(){return eh},Am:function(){return M}});var n,o=r(2265);let a={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||a},u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,p=(e,t)=>{let r="",i="",s="";for(let n in e){let o=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+o+";":i+="f"==n[1]?p(o,n):n+"{"+p(o,"k"==n[1]?"":t)+"}":"object"==typeof o?i+=p(o,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=o&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(n,o):n+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+i},h={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},m=(e,t,r,i,s)=>{var n;let o=f(e),a=h[o]||(h[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!h[a]){let t=o!==e?e:(e=>{let t,r,i=[{}];for(;t=u.exec(e.replace(c,""));)t[4]?i.shift():t[3]?(r=t[3].replace(d," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(d," ").trim();return i[0]})(e);h[a]=p(s?{["@keyframes "+a]:t}:t,r?"":"."+a)}let l=r&&h.g?h.g:null;return r&&(h.g=h[a]),n=h[a],l?t.data=t.data.replace(l,n):-1===t.data.indexOf(n)&&(t.data=i?n+t.data:t.data+n),a},y=(e,t,r)=>e.reduce((e,i,s)=>{let n=t[s];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+i+(null==n?"":n)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return m(r.unshift?r.raw?y(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let v,_,b,x=g.bind({k:1});function S(e,t){let r=this||{};return function(){let i=arguments;function s(n,o){let a=Object.assign({},n),l=a.className||s.className;r.p=Object.assign({theme:_&&_()},a),r.o=/ *go\d+/.test(l),a.className=g.apply(r,i)+(l?" "+l:""),t&&(a.ref=o);let u=e;return e[0]&&(u=a.as||e,delete a.as),b&&u[0]&&b(a),v(u,a)}return t?t(s):s}}var w=e=>"function"==typeof e,C=(e,t)=>w(e)?e(t):e,j=(i=0,()=>(++i).toString()),z=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},F="default",R=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:i}=t;return R(e,{type:e.toasts.find(e=>e.id===i.id)?1:0,toast:i});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},k=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},A={},O=(e,t=F)=>{A[t]=R(A[t]||E,e),k.forEach(([e,r])=>{e===t&&r(A[t])})},I=e=>Object.keys(A).forEach(t=>O(e,t)),N=e=>Object.keys(A).find(t=>A[t].toasts.some(t=>t.id===e)),T=(e=F)=>t=>{O(t,e)},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=(e={},t=F)=>{let[r,i]=(0,o.useState)(A[t]||E),s=(0,o.useRef)(A[t]);(0,o.useEffect)(()=>(s.current!==A[t]&&i(A[t]),k.push([t,i]),()=>{let e=k.findIndex(([e])=>e===t);e>-1&&k.splice(e,1)}),[t]);let n=r.toasts.map(t=>{var r,i,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(i=e[t.type])?void 0:i.duration)||(null==e?void 0:e.duration)||$[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:n}},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}),L=e=>(t,r)=>{let i=D(t,e,r);return T(i.toasterId||N(i.id))({type:2,toast:i}),i.id},M=(e,t)=>L("blank")(e,t);M.error=L("error"),M.success=L("success"),M.loading=L("loading"),M.custom=L("custom"),M.dismiss=(e,t)=>{let r={type:3,toastId:e};t?T(t)(r):I(r)},M.dismissAll=e=>M.dismiss(void 0,e),M.remove=(e,t)=>{let r={type:4,toastId:e};t?T(t)(r):I(r)},M.removeAll=e=>M.remove(void 0,e),M.promise=(e,t,r)=>{let i=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?C(t.success,e):void 0;return s?M.success(s,{id:i,...r,...null==r?void 0:r.success}):M.dismiss(i),e}).catch(e=>{let s=t.error?C(t.error,e):void 0;s?M.error(s,{id:i,...r,...null==r?void 0:r.error}):M.dismiss(i)}),e};var H=1e3,q=(e,t="default")=>{let{toasts:r,pausedAt:i}=P(e,t),s=(0,o.useRef)(new Map).current,n=(0,o.useCallback)((e,t=H)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),a({type:4,toastId:e})},t);s.set(e,r)},[]);(0,o.useEffect)(()=>{if(i)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let i=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(i<0){r.visible&&M.dismiss(r.id);return}return setTimeout(()=>M.dismiss(r.id,t),i)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,i,t]);let a=(0,o.useCallback)(T(t),[t]),l=(0,o.useCallback)(()=>{a({type:5,time:Date.now()})},[a]),u=(0,o.useCallback)((e,t)=>{a({type:1,toast:{id:e,height:t}})},[a]),c=(0,o.useCallback)(()=>{i&&a({type:6,time:Date.now()})},[i,a]),d=(0,o.useCallback)((e,t)=>{let{reverseOrder:i=!1,gutter:s=8,defaultPosition:n}=t||{},o=r.filter(t=>(t.position||n)===(e.position||n)&&t.height),a=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<a&&e.visible).length;return o.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,n]),{toasts:r,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},B=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,G=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,J=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${G} 1s linear infinite;
`,K=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Q=x`
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
}`,V=S("div")`
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
`,W=S("div")`
  position: absolute;
`,X=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return void 0!==t?"string"==typeof t?o.createElement(et,null,t):t:"blank"===r?null:o.createElement(X,null,o.createElement(J,{...i}),"loading"!==r&&o.createElement(W,null,"error"===r?o.createElement(Y,{...i}):o.createElement(V,{...i})))},ei=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,en=S("div")`
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
`,eo=S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ea=(e,t)=>{let r=e.includes("top")?1:-1,[i,s]=z()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ei(r),es(r)];return{animation:t?`${x(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=o.memo(({toast:e,position:t,style:r,children:i})=>{let s=e.height?ea(e.position||t||"top-center",e.visible):{opacity:0},n=o.createElement(er,{toast:e}),a=o.createElement(eo,{...e.ariaProps},C(e.message,e));return o.createElement(en,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof i?i({icon:n,message:a}):o.createElement(o.Fragment,null,n,a))});n=o.createElement,p.p=void 0,v=n,_=void 0,b=void 0;var eu=({id:e,className:t,style:r,onHeightUpdate:i,children:s})=>{let n=o.useCallback(t=>{if(t){let r=()=>{i(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return o.createElement("div",{ref:n,className:t,style:r},s)},ec=(e,t)=>{let r=e.includes("top"),i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...i}},ed=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:s,toasterId:n,containerStyle:a,containerClassName:l})=>{let{toasts:u,handlers:c}=q(r,n);return o.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(r=>{let n=r.position||t,a=ec(n,c.calculateOffset(r,{reverseOrder:e,gutter:i,defaultPosition:t}));return o.createElement(eu,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ed:"",style:a},"custom"===r.type?C(r.message,r):s?s(r):o.createElement(el,{toast:r,position:n}))}))},eh=M}}]);