function x(){}const X=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function J(){return Object.create(null)}function w(t){t.forEach(Y)}function D(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Ft(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function pt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(gt(e,n))}function It(t,e,n,i){if(t){const r=Z(t,e,n,i);return t[0](r)}}function Z(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)c[u]=e.dirty[u]|r[u];return c}return e.dirty|r}return e.dirty}function Jt(t,e,n,i,r,c){if(r){const s=Z(e,n,i,c);t.p(s,r)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t,e,n){return t.set(n),e}const tt=typeof window<"u";let et=tt?()=>window.performance.now():()=>Date.now(),z=tt?t=>requestAnimationFrame(t):x;const v=new Set;function nt(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&z(nt)}function it(t){let e;return v.size===0&&z(nt),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let P=!1;function yt(){P=!0}function xt(){P=!1}function $t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:$t(1,r,_=>e[n[_]].claim_order,l))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const c=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);c.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<c.length&&s[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(s[o],f)}}function vt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=F("style");return Et(rt(t),e),e.sheet}function Et(t,e){return vt(t.head||t,e),e.sheet}function Nt(t,e){if(P){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function At(t,e,n){t.insertBefore(e,n||null)}function Tt(t,e,n){P&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Vt(){return G(" ")}function Xt(){return G("")}function Yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){st(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Ct(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||c.push(u.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function te(t,e,n){return Ct(t,e,n,F)}function Mt(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function ee(t){return Mt(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function ne(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n);if(n===i)return new Q(void 0,e);st(t);const r=t.splice(n,i-n+1);A(r[0]),A(r[r.length-1]);const c=r.slice(1,r.length-1);for(const s of c)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Q(c,e)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function se(t,e,n){t.classList[n?"add":"remove"](e)}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}class jt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=kt(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class Q extends jt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}}function ce(t,e){return new t(e)}const j=new Map;let H=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Lt(t,e){const n={stylesheet:wt(e),rules:{}};return j.set(t,n),n}function ot(t,e,n,i,r,c,s,u=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const p=e+(n-e)*c(m);l+=m*100+`%{${s(p,1-p)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Ht(f)}_${u}`,_=rt(t),{stylesheet:d,rules:h}=j.get(_)||Lt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${i}ms linear ${r}ms 1 both`,H+=1,a}function q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),H-=r,H||Dt())}function Dt(){z(()=>{H||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),j.clear())})}let T;function N(t){T=t}function I(){if(!T)throw new Error("Function called outside component initialization");return T}function le(t){I().$$.on_mount.push(t)}function oe(t){I().$$.after_update.push(t)}function ue(){const t=I();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=lt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}const b=[],U=[],C=[],V=[],ut=Promise.resolve();let B=!1;function at(){B||(B=!0,ut.then(ft))}function ae(){return at(),ut}function k(t){C.push(t)}const R=new Set;let $=0;function ft(){if($!==0)return;const t=T;do{try{for(;$<b.length;){const e=b[$];$++,N(e),Pt(e.$$)}}catch(e){throw b.length=0,$=0,e}for(N(null),b.length=0,$=0;U.length;)U.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];R.has(n)||(R.add(n),n())}C.length=0}while(b.length);for(;V.length;)V.pop()();B=!1,R.clear(),N(t)}function Pt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let E;function _t(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function L(t,e,n){t.dispatchEvent(lt(`${e?"intro":"outro"}${n}`))}const M=new Set;let y;function fe(){y={r:0,c:[],p:y}}function _e(){y.r||w(y.c),y=y.p}function Ot(t,e){t&&t.i&&(M.delete(t),t.i(e))}function de(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),y.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const dt={duration:0};function he(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,u,o=0;function l(){s&&q(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=X,tick:g=x,css:m}=r||dt;m&&(s=ot(t,0,1,d,_,h,m,o++)),g(0,1);const p=et()+_,ht=p+d;u&&u.abort(),c=!0,k(()=>L(t,!0,"start")),u=it(O=>{if(c){if(O>=ht)return g(1,0),L(t,!0,"end"),l(),c=!1;if(O>=p){const W=h((O-p)/d);g(W,1-W)}}return c})}let a=!1;return{start(){a||(a=!0,q(t),D(r)?(r=r(i),_t().then(f)):f())},invalidate(){a=!1},end(){c&&(l(),c=!1)}}}function me(t,e,n){const i={direction:"out"};let r=e(t,n,i),c=!0,s;const u=y;u.r+=1;function o(){const{delay:l=0,duration:f=300,easing:a=X,tick:_=x,css:d}=r||dt;d&&(s=ot(t,1,0,f,l,a,d));const h=et()+l,g=h+f;k(()=>L(t,!1,"start")),it(m=>{if(c){if(m>=g)return _(0,1),L(t,!1,"end"),--u.r||w(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return c})}return D(r)?_t().then(()=>{r=r(i),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),c&&(s&&q(t,s),c=!1)}}}function pe(t){t&&t.c()}function ge(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||k(()=>{const s=t.$$.on_mount.map(Y).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...s):w(s),t.$$.on_mount=[]}),c.forEach(k)}function qt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(b.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,i,r,c,s,u=[-1]){const o=T;N(t);const l=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:J(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Bt(t,a)),_}):[],l.update(),f=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){yt();const a=St(e.target);l.fragment&&l.fragment.l(a),a.forEach(A)}else l.fragment&&l.fragment.c();e.intro&&Ot(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),xt(),ft()}N(o)}class xe{$destroy(){qt(this,1),this.$destroy=x}$on(e,n){if(!D(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Rt as A,qt as B,It as C,Jt as D,Kt as E,Wt as F,Nt as G,x as H,Gt as I,Ft as J,Yt as K,w as L,Qt as M,Q as N,ne as O,se as P,Ut as Q,X as R,xe as S,k as T,he as U,ue as V,me as W,Vt as a,Tt as b,ee as c,de as d,Xt as e,_e as f,Ot as g,A as h,ye as i,oe as j,F as k,te as l,St as m,Zt as n,le as o,re as p,G as q,Mt as r,zt as s,ae as t,ie as u,fe as v,U as w,ce as x,pe as y,ge as z};
