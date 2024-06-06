import{o as Z,J as we,c as S,r as R,a as h,b as g,f as r,y as j,m as te,H as ne,d as l,e as c,n as p,K as xe,g as N,u as V,s as Q,t as x,i as ke,L as $e,M as Me,N as ue,O as Ce,P as fe,R as ze,S as Se,U as he,w as ee,V as Le,W as Ae,h as m,F as X,l as ae,D as Be}from"./app-33d33f3a.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import Ve from"/public/build/assets/logoCVMebel.jpg";const Ee={class:"relative"},Y={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white dark:bg-gray-800"}},setup(e){const t=e,a=n=>{i.value&&n.key==="Escape"&&(i.value=!1)};Z(()=>document.addEventListener("keydown",a)),we(()=>document.removeEventListener("keydown",a));const o=S(()=>({48:"w-48"})[t.width.toString()]),s=S(()=>t.align==="left"?"origin-top-left left-0":t.align==="right"?"origin-top-right right-0":"origin-top"),i=R(!1);return(n,f)=>(h(),g("div",Ee,[r("div",{onClick:f[0]||(f[0]=d=>i.value=!i.value)},[j(n.$slots,"trigger")]),te(r("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=d=>i.value=!1)},null,512),[[ne,i.value]]),l(xe,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:c(()=>[te(r("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[o.value,s.value]]),style:{display:"none"},onClick:f[2]||(f[2]=d=>i.value=!1)},[r("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",e.contentClasses])},[j(n.$slots,"content")],2)],2),[[ne,i.value]])]),_:3})]))}},G={__name:"DropdownLink",props:{href:{type:String,default:"#"}},setup(e){return(t,a)=>(h(),N(V(Q),{href:e.href,class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 transition duration-150 ease-in-out"},{default:c(()=>[j(t.$slots,"default")]),_:3},8,["href"]))}},B={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(e){const t=e,a=S(()=>t.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-blue-400 text-left text-base font-medium text-blue-700 bg-blue-50 focus:outline-none focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(o,s)=>(h(),N(V(Q),{href:e.href,class:p(a.value)},{default:c(()=>[j(o.$slots,"default")]),_:3},8,["href","class"]))}},Oe={"aria-hidden":"true",class:"flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},De={class:"flex-1 mx-3 whitespace-nowrap"},w={__name:"SidebarListItem",props:{itemName:String,link:String,hasBadge:Boolean,badge:String,badgeContent:String,activeLinksRecursive:Array,activeLinks:Array},setup(e){return(t,a)=>(h(),g("li",null,[l(V(Q),{href:t.route(e.link),class:p(["flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-gray-100",{"bg-blue-100 dark:bg-blue-800":e.activeLinksRecursive?e.activeLinksRecursive.some(o=>t.$page.url.includes(o)):e.activeLinks.includes(t.route().current())}])},{default:c(()=>[(h(),g("svg",Oe,[j(t.$slots,"default")])),r("span",De,x(e.itemName),1),e.hasBadge?(h(),g("span",{key:0,class:p({"inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-gray-300":e.badge==="number","inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-blue-700 dark:text-gray-300":e.badge!=="number"})},x(e.badgeContent),3)):ke("",!0)]),_:3},8,["href","class"])]))}};function ge(e){return ze()?(Se(e),!0):!1}function q(e){return typeof e=="function"?e():V(e)}const He=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ne=Object.prototype.toString,je=e=>Ne.call(e)==="[object Object]",me=()=>{};function Re(e,t){function a(...o){return new Promise((s,i)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(s).catch(i)})}return a}const pe=e=>e();function Ie(e=pe){const t=R(!0);function a(){t.value=!1}function o(){t.value=!0}const s=(...i)=>{t.value&&e(...i)};return{isActive:ue(t),pause:a,resume:o,eventFilter:s}}function qe(e){return e||he()}function Te(...e){if(e.length!==1)return Me(...e);const t=e[0];return typeof t=="function"?ue(Ce(()=>({get:t,set:me}))):R(t)}function Fe(e,t,a={}){const{eventFilter:o=pe,...s}=a;return ee(e,Re(o,t),s)}function Pe(e,t,a={}){const{eventFilter:o,...s}=a,{eventFilter:i,pause:n,resume:f,isActive:d}=Ie(o);return{stop:Fe(e,t,{...s,eventFilter:i}),pause:n,resume:f,isActive:d}}function ve(e,t=!0,a){qe()?Z(e,a):t?e():fe(e)}function We(e=!1,t={}){const{truthyValue:a=!0,falsyValue:o=!1}=t,s=$e(e),i=R(e);function n(f){if(arguments.length)return i.value=f,i.value;{const d=q(a);return i.value=i.value===d?q(o):d,i.value}}return s?n:[i,n]}function _e(e){var t;const a=q(e);return(t=a==null?void 0:a.$el)!=null?t:a}const T=He?window:void 0;function se(...e){let t,a,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,o,s]=e,t=T):[t,a,o,s]=e,!t)return me;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const i=[],n=()=>{i.forEach(k=>k()),i.length=0},f=(k,_,E,M)=>(k.addEventListener(_,E,M),()=>k.removeEventListener(_,E,M)),d=ee(()=>[_e(t),q(s)],([k,_])=>{if(n(),!k)return;const E=je(_)?{..._}:_;i.push(...a.flatMap(M=>o.map(C=>f(k,M,C,E))))},{immediate:!0,flush:"post"}),v=()=>{d(),n()};return ge(v),v}function Je(){const e=R(!1),t=he();return t&&Z(()=>{e.value=!0},t),e}function Ge(e){const t=Je();return S(()=>(t.value,!!e()))}function Ue(e,t={}){const{window:a=T}=t,o=Ge(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let s;const i=R(!1),n=v=>{i.value=v.matches},f=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",n):s.removeListener(n))},d=Le(()=>{o.value&&(f(),s=a.matchMedia(q(e)),"addEventListener"in s?s.addEventListener("change",n):s.addListener(n),i.value=s.matches)});return ge(()=>{d(),f(),s=void 0}),i}const U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K="__vueuse_ssr_handlers__",Ke=Qe();function Qe(){return K in U||(U[K]=U[K]||{}),U[K]}function ye(e,t){return Ke[e]||t}function Xe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Ye={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},re="vueuse-storage";function Ze(e,t,a,o={}){var s;const{flush:i="pre",deep:n=!0,listenToStorageChanges:f=!0,writeDefaults:d=!0,mergeDefaults:v=!1,shallow:k,window:_=T,eventFilter:E,onError:M=u=>{console.error(u)},initOnMounted:C}=o,$=(k?Ae:R)(typeof t=="function"?t():t);if(!a)try{a=ye("getDefaultStorage",()=>{var u;return(u=T)==null?void 0:u.localStorage})()}catch(u){M(u)}if(!a)return $;const A=q(t),F=Xe(A),O=(s=o.serializer)!=null?s:Ye[F],{pause:W,resume:y}=Pe($,()=>J($.value),{flush:i,deep:n,eventFilter:E});_&&f&&ve(()=>{se(_,"storage",z),se(_,re,P),C&&z()}),C||z();function D(u,b){_&&_.dispatchEvent(new CustomEvent(re,{detail:{key:e,oldValue:u,newValue:b,storageArea:a}}))}function J(u){try{const b=a.getItem(e);if(u==null)D(b,null),a.removeItem(e);else{const H=O.write(u);b!==H&&(a.setItem(e,H),D(b,H))}}catch(b){M(b)}}function I(u){const b=u?u.newValue:a.getItem(e);if(b==null)return d&&A!=null&&a.setItem(e,O.write(A)),A;if(!u&&v){const H=O.read(b);return typeof v=="function"?v(H,A):F==="object"&&!Array.isArray(H)?{...A,...H}:H}else return typeof b!="string"?b:O.read(b)}function z(u){if(!(u&&u.storageArea!==a)){if(u&&u.key==null){$.value=A;return}if(!(u&&u.key!==e)){W();try{(u==null?void 0:u.newValue)!==O.write($.value)&&($.value=I(u))}catch(b){M(b)}finally{u?fe(y):y()}}}}function P(u){z(u.detail)}return $}function be(e){return Ue("(prefers-color-scheme: dark)",e)}function et(e={}){const{selector:t="html",attribute:a="class",initialValue:o="auto",window:s=T,storage:i,storageKey:n="vueuse-color-scheme",listenToStorageChanges:f=!0,storageRef:d,emitAuto:v,disableTransition:k=!0}=e,_={auto:"",light:"light",dark:"dark",...e.modes||{}},E=be({window:s}),M=S(()=>E.value?"dark":"light"),C=d||(n==null?Te(o):Ze(n,o,i,{window:s,listenToStorageChanges:f})),$=S(()=>C.value==="auto"?M.value:C.value),A=ye("updateHTMLAttrs",(y,D,J)=>{const I=typeof y=="string"?s==null?void 0:s.document.querySelector(y):_e(y);if(!I)return;let z;if(k){z=s.document.createElement("style");const P="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";z.appendChild(document.createTextNode(P)),s.document.head.appendChild(z)}if(D==="class"){const P=J.split(/\s/g);Object.values(_).flatMap(u=>(u||"").split(/\s/g)).filter(Boolean).forEach(u=>{P.includes(u)?I.classList.add(u):I.classList.remove(u)})}else I.setAttribute(D,J);k&&(s.getComputedStyle(z).opacity,document.head.removeChild(z))});function F(y){var D;A(t,a,(D=_[y])!=null?D:y)}function O(y){e.onChanged?e.onChanged(y,F):F(y)}ee($,O,{flush:"post",immediate:!0}),ve(()=>O($.value));const W=S({get(){return v?C.value:$.value},set(y){C.value=y}});try{return Object.assign(W,{store:C,system:M,state:$})}catch{return W}}function tt(e={}){const{valueDark:t="dark",valueLight:a="",window:o=T}=e,s=et({...e,onChanged:(f,d)=>{var v;e.onChanged?(v=e.onChanged)==null||v.call(e,f==="dark",d,f):d(f)},modes:{dark:t,light:a}}),i=S(()=>s.system?s.system.value:be({window:o}).value?"dark":"light");return S({get(){return s.value==="dark"},set(f){const d=f?"dark":"light";i.value===d?s.value="auto":s.value=d}})}const nt={name:"EmployeeIcon"},at={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},st=r("path",{"fill-rule":"evenodd",d:"M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z","clip-rule":"evenodd"},null,-1),rt=r("path",{d:"M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"},null,-1),ot=[st,rt];function it(e,t,a,o,s,i){return h(),g("svg",at,ot)}const lt=L(nt,[["render",it]]),ct={name:"OrganizationIcon"},dt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},ut=r("path",{"fill-rule":"evenodd",d:"M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z","clip-rule":"evenodd"},null,-1),ft=[ut];function ht(e,t,a,o,s,i){return h(),g("svg",dt,ft)}const gt=L(ct,[["render",ht]]),mt={name:"MessageIcon"},pt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},vt=r("path",{"fill-rule":"evenodd",d:"M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z","clip-rule":"evenodd"},null,-1),_t=[vt];function yt(e,t,a,o,s,i){return h(),g("svg",pt,_t)}const oe=L(mt,[["render",yt]]),bt={name:"CalendarIcon"},wt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},xt=r("path",{d:"M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"},null,-1),kt=r("path",{fillRule:"evenodd",d:"M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z",clipRule:"evenodd"},null,-1),$t=[xt,kt];function Mt(e,t,a,o,s,i){return h(),g("svg",wt,$t)}const ie=L(bt,[["render",Mt]]),Ct={name:"TableIcon"},zt={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"{1.5}",stroke:"currentColor",class:"w-6 h-6"},St=r("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"},null,-1),Lt=[St];function At(e,t,a,o,s,i){return h(),g("svg",zt,Lt)}const le=L(Ct,[["render",At]]),Bt={name:"MoneyIcon"},Vt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},Et=r("path",{"fill-rule":"evenodd",d:"M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z","clip-rule":"evenodd"},null,-1),Ot=[Et];function Dt(e,t,a,o,s,i){return h(),g("svg",Vt,Ot)}const ce=L(Bt,[["render",Dt]]),Ht={name:"RocketIcon"},Nt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},jt=r("path",{"fill-rule":"evenodd",d:"M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z","clip-rule":"evenodd"},null,-1),Rt=r("path",{"fill-rule":"evenodd",d:"M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z","clip-rule":"evenodd"},null,-1),It=[jt,Rt];function qt(e,t,a,o,s,i){return h(),g("svg",Nt,It)}const de=L(Ht,[["render",qt]]),Tt={name:"UserIcon"},Ft={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"fill-current",class:"w-5 h-5"},Pt=r("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"},null,-1),Wt=[Pt];function Jt(e,t,a,o,s,i){return h(),g("svg",Ft,Wt)}const Gt=L(Tt,[["render",Jt]]);const Ut={class:"h-full px-3 py-4 overflow-y-auto border-r flex flex-col justify-between dark:bg-gray-800 dark:border-gray-800"},Kt={key:0,class:"space-y-2 font-medium mb-4"},Qt={class:"flex flex-row items-center"},Xt=r("div",{class:"bg-blue-500 h-px flex-grow"},null,-1),Yt=["src"],Zt=r("div",{class:"bg-blue-500 h-px flex-grow"},null,-1),en={key:1,class:"space-y-2 font-medium mb-4"},tn={class:"flex flex-row items-center"},nn=r("div",{class:"bg-blue-500 h-px flex-grow"},null,-1),an={class:"px-2"},sn=r("div",{class:"bg-blue-500 h-px flex-grow"},null,-1),rn={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},on={class:"border-b border-gray-300 dark:border-gray-600"},ln={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},cn={class:"flex justify-between h-16"},dn={class:"flex"},un={class:"block my-auto space-x-8 rtl:space-x-reverse sm:-my-px sm:flex"},fn={class:"hidden sm:flex sm:items-center sm:ml-6"},hn=r("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},null,-1),gn=[hn],mn=r("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"},null,-1),pn=[mn],vn={class:"ml-3 relative !flex"},_n={class:"inline-flex rounded-md"},yn={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},bn={class:"ml-3 relative"},wn={class:"inline-flex rounded-md"},xn={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},kn=r("svg",{class:"mx-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),$n={class:"-mr-2 flex items-center sm:hidden"},Mn={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Cn={class:"inline-flex rounded-md"},zn={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Sn={class:"pt-2 pb-3 space-y-1"},Ln={class:"pt-4 pb-1 border-t border-gray-200"},An={class:"px-4"},Bn={class:"font-medium text-base text-gray-800"},Vn={class:"font-medium text-sm text-gray-500"},En={class:"mt-3 space-y-1"},On={class:"mx-4 md:mx-0"},Xn={__name:"AuthenticatedLayout",setup(e){const t=R(!1),a=tt(),o=We(a),s={en:["English","us"],ar:["العربية","arab"]};function i(n){Be.visit(route("language",{language:n}),{onSuccess:()=>{window.history.go(0)}})}return(n,f)=>(h(),g(X,null,[r("aside",{id:"separator-sidebar",class:p(["fixed top-0 z-40 w-64 h-screen transition-transform ltr:-translate-x-full ltr:sm:translate-x-0 rtl:translate-x-full rtl:sm:-translate-x-0",n.$page.props.locale=="ar"?"right-0":"left-0"]),"aria-label":"Sidebar"},[r("div",Ut,[n.$page.props.auth.user.roles.includes("admin")?(h(),g("ul",Kt,[r("div",Qt,[Xt,r("img",{src:V(Ve),alt:"Logo CV Mebel International"},null,8,Yt),Zt]),l(w,{"item-name":n.__("My Dashboard"),hasBadge:!1,link:"dashboard.index","active-links":["dashboard.index"]},{default:c(()=>[l(de,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),l(w,{"item-name":n.__("Employees"),hasBadge:!0,badge:"number","badge-content":n.$page.props.ui.empCount.toString()??"?",link:"employees.index","active-links":["employees.index","employees.create","employees.show","employees.find","employees.edit","employees.archived"]},{default:c(()=>[l(lt,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name","badge-content"]),l(w,{"item-name":n.__("Organization"),"active-links-recursive":["branches","departments","positions","shifts","globals","metrics","logs"],"badge-content":"0",link:"branches.index"},{default:c(()=>[l(gt,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),l(w,{"item-name":n.__("Requests"),hasBadge:n.$page.props.ui.reqCount.toString()!=="0",badge:"number","badge-content":n.$page.props.ui.reqCount.toString()??"?",link:"requests.index","active-links":["requests.index","requests.create","requests.show","requests.edit"]},{default:c(()=>[l(oe,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name","hasBadge","badge-content"]),l(w,{"item-name":n.__("Calendar"),link:"calendar.index",activeLinks:["calendar.index","calendars.index","calendars.create","calendars.show","calendars.edit"]},{default:c(()=>[l(ie,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),l(w,{"item-name":n.__("Attendance"),link:"attendances.index",activeLinks:["attendance.dashboard","attendance.show","attendances.index","attendances.create"]},{default:c(()=>[l(le,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),l(w,{"item-name":n.__("Payrolls"),link:"payrolls.index",activeLinks:["payrolls.index","payrolls.show","payrolls.edit"]},{default:c(()=>[l(ce,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"])])):(h(),g("ul",en,[r("div",tn,[nn,r("div",an,x(n.__("My Services")),1),sn]),l(w,{"item-name":n.__("My Dashboard"),hasBadge:!1,link:"dashboard.index","active-links":["dashboard.index"]},{default:c(()=>[l(de,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),l(w,{"item-name":n.__("My Profile"),hasBadge:!1,link:"my-profile","active-links":["my-profile"]},{default:c(()=>[l(Gt,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),l(w,{"item-name":n.__("My Requests"),hasBadge:n.$page.props.ui.reqCount.toString()!=="0",badge:"number","badge-content":n.$page.props.ui.reqCount.toString()??"?",link:"requests.index","active-links":["requests.index","requests.show","requests.create"]},{default:c(()=>[l(oe,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name","hasBadge","badge-content"]),l(w,{"item-name":n.__("My Payrolls"),link:"payrolls.index","active-links":["payrolls.index","payrolls.show"]},{default:c(()=>[l(ce,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),l(w,{"item-name":n.__("My Calendar"),link:"calendar.index","active-links":["calendar.index"]},{default:c(()=>[l(ie,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"]),l(w,{"item-name":n.__("My Attendance"),link:"attendance.dashboard","active-links":["attendance.dashboard"]},{default:c(()=>[l(le,{class:"text-gray-500 dark:text-gray-100"})]),_:1},8,["item-name"])]))])],2),r("div",{class:p(n.$page.props.locale==="ar"?"sm:mr-64":"sm:ml-64")},[r("div",null,[r("div",rn,[r("nav",on,[r("div",ln,[r("div",cn,[r("div",dn,[r("div",un,[j(n.$slots,"tabs")])]),r("div",fn,[r("button",{onClick:f[0]||(f[0]=d=>V(o)()),type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"},[(h(),g("svg",{id:"theme-toggle-dark-icon",class:p(["w-5 h-5",V(a)?"block":"hidden"]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},gn,2)),(h(),g("svg",{id:"theme-toggle-light-icon",class:p(["w-5 h-5",V(a)?"hidden":"block"]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},pn,2))]),r("div",vn,[l(Y,{align:"right",width:"48"},{trigger:c(()=>[r("span",_n,[r("button",yn,[r("span",{class:p("fi fi-"+s[n.$page.props.locale][1]+" mx-2")},null,2),m(" "+x(s[n.$page.props.locale][0]),1)])])]),content:c(()=>[(h(!0),g(X,null,ae(Object.keys(s).filter(d=>d!==n.$page.props.locale),d=>(h(),N(G,{onClick:v=>i(d)},{default:c(()=>[r("span",{class:p("fi fi-"+s[d][1]+" mx-2")},null,2),m(" "+x(s[d][0]),1)]),_:2},1032,["onClick"]))),256))]),_:1})]),r("div",bn,[l(Y,{align:"right",width:"48"},{trigger:c(()=>[r("span",wn,[r("button",xn,[m(x(n.$page.props.auth.user.name)+" ",1),kn])])]),content:c(()=>[l(G,{href:n.route("profile.edit")},{default:c(()=>[m(x(n.__("Profile")),1)]),_:1},8,["href"]),l(G,{href:n.route("logout"),method:"post",as:"button"},{default:c(()=>[m(x(n.__("Log Out")),1)]),_:1},8,["href"])]),_:1})])]),r("div",$n,[r("button",{onClick:f[1]||(f[1]=d=>t.value=!t.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(h(),g("svg",Mn,[r("path",{class:p({hidden:t.value,"inline-flex":!t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),r("path",{class:p({hidden:!t.value,"inline-flex":t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),r("div",{class:p([{block:t.value,hidden:!t.value},"sm:hidden"])},[l(Y,{align:"right",width:"48"},{trigger:c(()=>[r("span",Cn,[r("button",zn,[r("span",{class:p("fi fi-"+s[n.$page.props.locale][1]+" mx-2")},null,2),m(" "+x(s[n.$page.props.locale][0]),1)])])]),content:c(()=>[(h(!0),g(X,null,ae(Object.keys(s).filter(d=>d!==n.$page.props.locale),d=>(h(),N(G,{onClick:v=>i(d)},{default:c(()=>[r("span",{class:p("fi fi-"+s[d][1]+" mx-2")},null,2),m(" "+x(s[d][0]),1)]),_:2},1032,["onClick"]))),256))]),_:1}),r("div",Sn,[l(B,{href:n.route("dashboard.index"),active:n.route().current("dashboard.index")},{default:c(()=>[m(" Dashboard ")]),_:1},8,["href","active"]),l(B,{href:n.route("employees.index")},{default:c(()=>[m("Employees")]),_:1},8,["href"]),l(B,{href:n.route("branches.index")},{default:c(()=>[m("Organization")]),_:1},8,["href"]),l(B,{href:n.route("requests.index")},{default:c(()=>[m("Requests")]),_:1},8,["href"]),l(B,{href:n.route("calendar.index")},{default:c(()=>[m("Calendar")]),_:1},8,["href"]),l(B,{href:n.route("attendances.index")},{default:c(()=>[m("Attendance")]),_:1},8,["href"]),l(B,{href:n.route("payrolls.index")},{default:c(()=>[m("Payrolls")]),_:1},8,["href"])]),r("div",Ln,[r("div",An,[r("div",Bn,x(n.$page.props.auth.user.name),1),r("div",Vn,x(n.$page.props.auth.user.email),1)]),r("div",En,[l(B,{href:n.route("profile.edit")},{default:c(()=>[m(" Profile")]),_:1},8,["href"]),l(B,{href:n.route("logout"),method:"post",as:"button"},{default:c(()=>[m(" Log Out ")]),_:1},8,["href"])])])],2)]),r("main",On,[j(n.$slots,"default")])])])],2)],64))}},Dn={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(e){const t=e,a=S(()=>t.active?"inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out dark:text-white":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-blue-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out dark:text-gray-200");return(o,s)=>(h(),N(V(Q),{href:e.href,class:p(a.value)},{default:c(()=>[j(o.$slots,"default")]),_:3},8,["href","class"]))}},Hn={name:"LeftChevron"},Nn={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},jn=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"},null,-1),Rn=[jn];function In(e,t,a,o,s,i){return h(),g("svg",Nn,Rn)}const qn=L(Hn,[["render",In]]),Tn={name:"RightChevron"},Fn={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Pn=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1),Wn=[Pn];function Jn(e,t,a,o,s,i){return h(),g("svg",Fn,Wn)}const Gn=L(Tn,[["render",Jn]]),Yn={__name:"GoBackNavLink",setup(e){function t(){window.history.back()}const a=document.dir==="ltr";return(o,s)=>(h(),N(Dn,{href:"#",onClick:t,class:"border-b-0","Preserve-Scroll":""},{default:c(()=>[a?(h(),N(qn,{key:0,class:"mr-2"})):(h(),N(Gn,{key:1,class:"ml-2"})),m(" "+x(o.__("Go Back")),1)]),_:1}))}};export{ie as C,ce as M,le as T,Xn as _,Yn as a,Dn as b,oe as c};
