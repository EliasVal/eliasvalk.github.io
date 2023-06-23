var tt=Object.defineProperty;var et=(t,e,n)=>e in t?tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var y=(t,e,n)=>(et(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,r as E,l as M,k as b,i as G,m as z,p as nt,q as it,v as st,w as rt,x as O,y as lt,z as at,A as ot}from"./scheduler.837eba65.js";const F=typeof window<"u";let V=F?()=>window.performance.now():()=>Date.now(),B=F?t=>requestAnimationFrame(t):w;const x=new Set;function W(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&B(W)}function J(t){let e;return x.size===0&&B(W),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let H=!1;function ct(){H=!0}function ft(){H=!1}function ut(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:ut(1,s,d=>e[n[d]].claim_order,a))-1;i[l]=n[u]+1;const f=u+1;n[f]=l,s=Math.max(f,s)}const o=[],r=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);o.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<o.length&&r[l].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(r[l],u)}}function _t(t,e){t.appendChild(e)}function K(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ht(t){const e=D("style");return e.textContent="/* empty */",mt(K(t),e),e.sheet}function mt(t,e){return _t(t.head||t,e),e.sheet}function pt(t,e){if(H){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $t(t,e,n){t.insertBefore(e,n||null)}function yt(t,e,n){H&&!n?pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function Bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function gt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function R(t){return document.createTextNode(t)}function Dt(){return R(" ")}function Rt(){return R("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ot(t){return t.dataset.svelteH}function xt(t){return Array.from(t.childNodes)}function Q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,i,s=!1){Q(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function wt(t,e,n,i){return U(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||o.push(c.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function qt(t,e,n){return wt(t,e,n,D)}function vt(t,e){return U(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(e),!0)}function It(t){return vt(t," ")}function q(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Gt(t,e){const n=q(t,"HTML_TAG_START",0),i=q(t,"HTML_TAG_END",n);if(n===i)return new I(void 0,e);Q(t);const s=t.splice(n,i-n+1);N(s[0]),N(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new I(o,e)}function Ft(t,e){e=""+e,t.data!==e&&(t.data=e)}function Vt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Wt(t,e,n){t.classList.toggle(e,!!n)}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class Et{constructor(e=!1){y(this,"is_svg",!1);y(this,"e");y(this,"n");y(this,"t");y(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=gt(n.nodeName):this.e=D(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)$t(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class I extends Et{constructor(n,i=!1){super(i);y(this,"l");this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)yt(this.t,this.n[i],n)}}function Jt(t,e){return new t(e)}const S=new Map;let C=0;function Tt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:ht(e),rules:{}};return S.set(t,n),n}function X(t,e,n,i,s,o,r,c=0){const l=16.666/i;let a=`{
`;for(let $=0;$<=1;$+=l){const p=e+(n-e)*o($);a+=$*100+`%{${r(p,1-p)}}
`}const u=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Tt(u)}_${c}`,d=K(t),{stylesheet:_,rules:h}=S.get(d)||At(d,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${u}`,_.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${s}ms 1 both`,C+=1,f}function k(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),C-=s,C||bt())}function bt(){B(()=>{C||(S.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),S.clear())})}let v;function Y(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function L(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const A=new Set;let g;function Kt(){g={r:0,c:[],p:g}}function Qt(){g.r||E(g.c),g=g.p}function St(t,e){t&&t.i&&(A.delete(t),t.i(e))}function Ut(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Z={duration:0};function Xt(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,c,l=0;function a(){r&&k(t,r)}function u(){const{delay:d=0,duration:_=300,easing:h=G,tick:m=w,css:$}=s||Z;$&&(r=X(t,0,1,_,d,h,$,l++)),m(0,1);const p=V()+d,T=p+_;c&&c.abort(),o=!0,b(()=>L(t,!0,"start")),c=J(P=>{if(o){if(P>=T)return m(1,0),L(t,!0,"end"),a(),o=!1;if(P>=p){const j=h((P-p)/_);m(j,1-j)}}return o})}let f=!1;return{start(){f||(f=!0,k(t),M(s)?(s=s(i),Y().then(u)):u())},invalidate(){f=!1},end(){o&&(a(),o=!1)}}}function Yt(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const c=g;c.r+=1;let l;function a(){const{delay:u=0,duration:f=300,easing:d=G,tick:_=w,css:h}=s||Z;h&&(r=X(t,1,0,f,u,d,h));const m=V()+u,$=m+f;b(()=>L(t,!1,"start")),"inert"in t&&(l=t.inert,t.inert=!0),J(p=>{if(o){if(p>=$)return _(0,1),L(t,!1,"end"),--c.r||E(c.c),!1;if(p>=m){const T=d((p-m)/f);_(1-T,T)}}return o})}return M(s)?Y().then(()=>{s=s(i),a()}):a(),{end(u){u&&"inert"in t&&(t.inert=l),u&&s.tick&&s.tick(1,0),o&&(r&&k(t,r),o=!1)}}}function Zt(t){t&&t.c()}function te(t,e){t&&t.l(e)}function Ct(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),b(()=>{const o=t.$$.on_mount.map(lt).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...o):E(o),t.$$.on_mount=[]}),s.forEach(b)}function Lt(t,e){const n=t.$$;n.fragment!==null&&(st(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(at.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ee(t,e,n,i,s,o,r,c=[-1]){const l=rt;O(t);const a=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:s,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:z(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(f,d,..._)=>{const h=_.length?_[0]:d;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),u&&Mt(t,f)),d}):[],a.update(),u=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){ct();const f=xt(e.target);a.fragment&&a.fragment.l(f),f.forEach(N)}else a.fragment&&a.fragment.c();e.intro&&St(t.$$.fragment),Ct(t,e.target,e.anchor),ft(),nt()}O(l)}class ne{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){Lt(this,1),this.$destroy=w}$on(e,n){if(!M(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ht="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ht);export{Gt as A,Wt as B,Bt as C,Xt as D,Yt as E,I as H,ne as S,yt as a,Qt as b,It as c,St as d,Rt as e,N as f,D as g,qt as h,ee as i,xt as j,zt as k,Vt as l,R as m,vt as n,Ft as o,Kt as p,Jt as q,Zt as r,Dt as s,Ut as t,te as u,Ct as v,Lt as w,pt as x,Ot as y,jt as z};
