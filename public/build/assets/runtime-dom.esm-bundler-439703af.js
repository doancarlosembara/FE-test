import{e as _,u as it,o as ct,t as lt,F as ft,g as ut,s as B,r as x,c as dt,B as pt,i as mt,h as vt,a as ht,b as q,d as gt,f as yt,j as Ct}from"./UpdatePasswordForm-1cd5e592.js";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const h="transition",S="animation",E=Symbol("_vtc"),z=(t,{slots:e})=>vt(ht,W(t),e);z.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Tt=z.props=_({},pt,U),C=(t,e=[])=>{q(t)?t.forEach(n=>n(...e)):t&&t(...e)},O=t=>t?q(t)?t.some(e=>e.length>1):t.length>1:!1;function W(t){const e={};for(const s in t)s in U||(e[s]=t[s]);if(t.css===!1)return e;const{name:n="v",type:o,duration:l,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:f=`${n}-enter-to`,appearFromClass:u=r,appearActiveClass:c=i,appearToClass:a=f,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,b=bt(l),et=b&&b[0],nt=b&&b[1],{onBeforeEnter:M,onEnter:N,onEnterCancelled:A,onLeave:K,onLeaveCancelled:st,onBeforeAppear:ot=M,onAppear:rt=N,onAppearCancelled:at=A}=e,$=(s,m,y)=>{g(s,m?a:f),g(s,m?c:i),y&&y()},P=(s,m)=>{s._isLeaving=!1,g(s,d),g(s,T),g(s,p),m&&m()},F=s=>(m,y)=>{const I=s?rt:N,k=()=>$(m,s,y);C(I,[m,k]),H(()=>{g(m,s?u:r),v(m,s?a:f),O(I)||R(m,o,et,k)})};return _(e,{onBeforeEnter(s){C(M,[s]),v(s,r),v(s,i)},onBeforeAppear(s){C(ot,[s]),v(s,u),v(s,c)},onEnter:F(!1),onAppear:F(!0),onLeave(s,m){s._isLeaving=!0;const y=()=>P(s,m);v(s,d),v(s,p),Q(),H(()=>{s._isLeaving&&(g(s,d),v(s,T),O(K)||R(s,o,nt,y))}),C(K,[s,y])},onEnterCancelled(s){$(s,!1),C(A,[s])},onAppearCancelled(s){$(s,!0),C(at,[s])},onLeaveCancelled(s){P(s),C(st,[s])}})}function bt(t){if(t==null)return null;if(mt(t))return[L(t.enter),L(t.leave)];{const e=L(t);return[e,e]}}function L(t){return gt(t)}function v(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[E]||(t[E]=new Set)).add(e)}function g(t,e){e.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const n=t[E];n&&(n.delete(e),n.size||(t[E]=void 0))}function H(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let St=0;function R(t,e,n,o){const l=t._endId=++St,r=()=>{l===t._endId&&o()};if(n)return setTimeout(r,n);const{type:i,timeout:f,propCount:u}=J(t,e);if(!i)return o();const c=i+"end";let a=0;const d=()=>{t.removeEventListener(c,p),r()},p=T=>{T.target===t&&++a>=u&&d()};setTimeout(()=>{a<u&&d()},f+1),t.addEventListener(c,p)}function J(t,e){const n=window.getComputedStyle(t),o=b=>(n[b]||"").split(", "),l=o(`${h}Delay`),r=o(`${h}Duration`),i=j(l,r),f=o(`${S}Delay`),u=o(`${S}Duration`),c=j(f,u);let a=null,d=0,p=0;e===h?i>0&&(a=h,d=i,p=r.length):e===S?c>0&&(a=S,d=c,p=u.length):(d=Math.max(i,c),a=d>0?i>c?h:S:null,p=a?a===h?r.length:u.length:0);const T=a===h&&/\b(transform|all)(,|$)/.test(o(`${h}Property`).toString());return{type:a,timeout:d,propCount:p,hasTransform:T}}function j(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,o)=>G(n)+G(t[o])))}function G(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Q(){return document.body.offsetHeight}const X=Symbol("_vod"),wt=Symbol("_vsh"),Pt={beforeMount(t,{value:e},{transition:n}){t[X]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):w(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:o}){!e!=!n&&(o?e?(o.beforeEnter(t),w(t,!0),o.enter(t)):o.leave(t,()=>{w(t,!1)}):w(t,e))},beforeUnmount(t,{value:e}){w(t,e)}};function w(t,e){t.style.display=e?t[X]:"none",t[wt]=!e}const Y=new WeakMap,Z=new WeakMap,D=Symbol("_moveCb"),V=Symbol("_enterCb"),tt={name:"TransitionGroup",props:_({},Tt,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=yt(),o=it();let l,r;return ct(()=>{if(!l.length)return;const i=t.moveClass||`${t.name||"v"}-move`;if(!_t(l[0].el,n.vnode.el,i))return;l.forEach(Dt),l.forEach($t);const f=l.filter(Lt);Q(),f.forEach(u=>{const c=u.el,a=c.style;v(c,i),a.transform=a.webkitTransform=a.transitionDuration="";const d=c[D]=p=>{p&&p.target!==c||(!p||/transform$/.test(p.propertyName))&&(c.removeEventListener("transitionend",d),c[D]=null,g(c,i))};c.addEventListener("transitionend",d)})}),()=>{const i=lt(t),f=W(i);let u=i.tag||ft;if(l=[],r)for(let c=0;c<r.length;c++){const a=r[c];a.el&&a.el instanceof Element&&(l.push(a),B(a,x(a,f,o,n)),Y.set(a,a.el.getBoundingClientRect()))}r=e.default?ut(e.default()):[];for(let c=0;c<r.length;c++){const a=r[c];a.key!=null&&B(a,x(a,f,o,n))}return dt(u,null,r)}}},Et=t=>delete t.mode;tt.props;const Ft=tt;function Dt(t){const e=t.el;e[D]&&e[D](),e[V]&&e[V]()}function $t(t){Z.set(t,t.el.getBoundingClientRect())}function Lt(t){const e=Y.get(t),n=Z.get(t),o=e.left-n.left,l=e.top-n.top;if(o||l){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",t}}function _t(t,e,n){const o=t.cloneNode(),l=t[E];l&&l.forEach(f=>{f.split(/\s+/).forEach(u=>u&&o.classList.remove(u))}),n.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(o);const{hasTransform:i}=J(o);return r.removeChild(o),i}const Mt=["ctrl","shift","alt","meta"],Nt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mt.some(n=>t[`${n}Key`]&&!e.includes(n))},It=(t,e)=>{const n=t._withMods||(t._withMods={}),o=e.join(".");return n[o]||(n[o]=(l,...r)=>{for(let i=0;i<e.length;i++){const f=Nt[e[i]];if(f&&f(l,e))return}return t(l,...r)})},At={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kt=(t,e)=>{const n=t._withKeys||(t._withKeys={}),o=e.join(".");return n[o]||(n[o]=l=>{if(!("key"in l))return;const r=Ct(l.key);if(e.some(i=>i===r||At[i]===r))return t(l)})};export{z as T,It as a,Ft as b,Pt as v,kt as w};