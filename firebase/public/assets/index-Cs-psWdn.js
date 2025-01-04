var F_=Object.defineProperty;var B_=(r,e,t)=>e in r?F_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var wr=(r,e,t)=>B_(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const $_=!1;var yo=Array.isArray,Kc=Array.from,q_=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Ff=Object.getOwnPropertyDescriptors,z_=Object.prototype,j_=Array.prototype,Qc=Object.getPrototypeOf;function Bs(r){return typeof r=="function"}const Dr=()=>{};function G_(r){return r()}function oc(r){for(var e=0;e<r.length;e++)r[e]()}const Or=2,Bf=4,wo=8,Ha=16,Ur=32,bo=64,ac=128,Ps=256,wa=512,Yt=1024,Yn=2048,fi=4096,Qr=8192,gi=16384,$f=32768,pi=65536,W_=1<<17,H_=1<<19,qf=1<<20,Yr=Symbol("$state"),zf=Symbol("legacy props"),K_=Symbol("");function jf(r){return r===this.v}function Yc(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function Jc(r){return!Yc(r,this.v)}function Q_(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Y_(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function J_(r){throw new Error("https://svelte.dev/e/effect_orphan")}function X_(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Z_(r){throw new Error("https://svelte.dev/e/props_invalid_value")}function ev(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function tv(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rv(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function nv(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let mi=!1;function sv(){mi=!0}const iv=1,ov=2,av=16,lv=1,cv=2,Gf=4,uv=8,hv=16,dv=4,Wf=1,fv=2,er=Symbol(),no="http://www.w3.org/2000/svg";function fr(r,e){var t={f:0,v:r,reactions:null,equals:jf,version:0};return t}function Ka(r,e=!1){var n;const t=fr(r);return e||(t.equals=Jc),mi&&Se!==null&&Se.l!==null&&((n=Se.l).s??(n.s=[])).push(t),t}function re(r,e=!1){return gv(Ka(r,e))}function gv(r){return Ve!==null&&Ve.f&Or&&(Jr===null?Tv([r]):Jr.push(r)),r}function Bh(r,e){return G(r,Er(()=>k(r))),e}function G(r,e){return Ve!==null&&Ja()&&Ve.f&(Or|Ha)&&(Jr===null||!Jr.includes(r))&&nv(),Hf(r,e)}function Hf(r,e){return r.equals(e)||(r.v=e,r.version=lg(),Kf(r,Yn),Ja()&&be!==null&&be.f&Yt&&!(be.f&Ur)&&(qt!==null&&qt.includes(r)?(Fr(be,Yn),Za(be)):jn===null?Av([r]):jn.push(r))),e}function Kf(r,e){var t=r.reactions;if(t!==null)for(var n=Ja(),s=t.length,i=0;i<s;i++){var o=t[i],l=o.f;l&Yn||!n&&o===be||(Fr(o,e),l&(Yt|Ps)&&(l&Or?Kf(o,fi):Za(o)))}}let Xc=!1;function $s(r,e=null,t){if(typeof r!="object"||r===null||Yr in r)return r;const n=Qc(r);if(n!==z_&&n!==j_)return r;var s=new Map,i=yo(r),o=fr(0);i&&s.set("length",fr(r.length));var l;return new Proxy(r,{defineProperty(c,u,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&ev();var g=s.get(u);return g===void 0?(g=fr(d.value),s.set(u,g)):G(g,$s(d.value,l)),!0},deleteProperty(c,u){var d=s.get(u);if(d===void 0)u in c&&s.set(u,fr(er));else{if(i&&typeof u=="string"){var g=s.get("length"),p=Number(u);Number.isInteger(p)&&p<g.v&&G(g,p)}G(d,er),$h(o)}return!0},get(c,u,d){var A;if(u===Yr)return r;var g=s.get(u),p=u in c;if(g===void 0&&(!p||(A=zn(c,u))!=null&&A.writable)&&(g=fr($s(p?c[u]:er,l)),s.set(u,g)),g!==void 0){var v=k(g);return v===er?void 0:v}return Reflect.get(c,u,d)},getOwnPropertyDescriptor(c,u){var d=Reflect.getOwnPropertyDescriptor(c,u);if(d&&"value"in d){var g=s.get(u);g&&(d.value=k(g))}else if(d===void 0){var p=s.get(u),v=p==null?void 0:p.v;if(p!==void 0&&v!==er)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return d},has(c,u){var v;if(u===Yr)return!0;var d=s.get(u),g=d!==void 0&&d.v!==er||Reflect.has(c,u);if(d!==void 0||be!==null&&(!g||(v=zn(c,u))!=null&&v.writable)){d===void 0&&(d=fr(g?$s(c[u],l):er),s.set(u,d));var p=k(d);if(p===er)return!1}return g},set(c,u,d,g){var C;var p=s.get(u),v=u in c;if(i&&u==="length")for(var A=d;A<p.v;A+=1){var R=s.get(A+"");R!==void 0?G(R,er):A in c&&(R=fr(er),s.set(A+"",R))}p===void 0?(!v||(C=zn(c,u))!=null&&C.writable)&&(p=fr(void 0),G(p,$s(d,l)),s.set(u,p)):(v=p.v!==er,G(p,$s(d,l)));var P=Reflect.getOwnPropertyDescriptor(c,u);if(P!=null&&P.set&&P.set.call(g,d),!v){if(i&&typeof u=="string"){var N=s.get("length"),x=Number(u);Number.isInteger(x)&&x>=N.v&&G(N,x+1)}$h(o)}return!0},ownKeys(c){k(o);var u=Reflect.ownKeys(c).filter(p=>{var v=s.get(p);return v===void 0||v.v!==er});for(var[d,g]of s)g.v!==er&&!(d in c)&&u.push(d);return u},setPrototypeOf(){tv()}})}function $h(r,e=1){G(r,r.v+e)}function qh(r){return r!==null&&typeof r=="object"&&Yr in r?r[Yr]:r}function pv(r,e){return Object.is(qh(r),qh(e))}var zh,Qf,Yf;function mv(){if(zh===void 0){zh=window;var r=Element.prototype,e=Node.prototype;Qf=zn(e,"firstChild").get,Yf=zn(e,"nextSibling").get,r.__click=void 0,r.__className="",r.__attributes=null,r.__styles=null,r.__e=void 0,Text.prototype.__t=void 0}}function Qa(r=""){return document.createTextNode(r)}function fn(r){return Qf.call(r)}function Ya(r){return Yf.call(r)}function H(r,e){return fn(r)}function Q(r,e){{var t=fn(r);return t instanceof Comment&&t.data===""?Ya(t):t}}function z(r,e=1,t=!1){let n=r;for(;e--;)n=Ya(n);return n}function _v(r){r.textContent=""}function so(r){var e=Or|Yn;be===null?e|=Ps:be.f|=qf;var t=Ve!==null&&Ve.f&Or?Ve:null;const n={children:null,ctx:Se,deps:null,equals:jf,f:e,fn:r,reactions:null,v:null,version:0,parent:t??be};return t!==null&&(t.children??(t.children=[])).push(n),n}function ft(r){const e=so(r);return e.equals=Jc,e}function Jf(r){var e=r.children;if(e!==null){r.children=null;for(var t=0;t<e.length;t+=1){var n=e[t];n.f&Or?Zc(n):En(n)}}}function vv(r){for(var e=r.parent;e!==null;){if(!(e.f&Or))return e;e=e.parent}return null}function Xf(r){var e,t=be;br(vv(r));try{Jf(r),e=cg(r)}finally{br(t)}return e}function Zf(r){var e=Xf(r),t=(ps||r.f&Ps)&&r.deps!==null?fi:Yt;Fr(r,t),r.equals(e)||(r.v=e,r.version=lg())}function Zc(r){Jf(r),oo(r,0),Fr(r,gi),r.v=r.children=r.deps=r.ctx=r.reactions=null}function eg(r){be===null&&Ve===null&&J_(),Ve!==null&&Ve.f&Ps&&Y_(),su&&Q_()}function yv(r,e){var t=e.last;t===null?e.last=e.first=r:(t.next=r,r.prev=t,e.last=r)}function _i(r,e,t,n=!0){var s=(r&bo)!==0,i=be,o={ctx:Se,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:r|Yn,first:null,fn:e,last:null,next:null,parent:s?null:i,prev:null,teardown:null,transitions:null,version:0};if(t){var l=Hs;try{jh(!0),To(o),o.f|=$f}catch(d){throw En(o),d}finally{jh(l)}}else e!==null&&Za(o);var c=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&qf)===0;if(!c&&!s&&n&&(i!==null&&yv(o,i),Ve!==null&&Ve.f&Or)){var u=Ve;(u.children??(u.children=[])).push(o)}return o}function eu(r){const e=_i(wo,null,!1);return Fr(e,Yt),e.teardown=r,e}function lc(r){eg();var e=be!==null&&(be.f&Ur)!==0&&Se!==null&&!Se.m;if(e){var t=Se;(t.e??(t.e=[])).push({fn:r,effect:be,reaction:Ve})}else{var n=Eo(r);return n}}function wv(r){return eg(),rs(r)}function bv(r){const e=_i(bo,r,!0);return(t={})=>new Promise(n=>{t.outro?ni(e,()=>{En(e),n(void 0)}):(En(e),n(void 0))})}function Eo(r){return _i(Bf,r,!1)}function we(r,e){var t=Se,n={effect:null,ran:!1};t.l.r1.push(n),n.effect=rs(()=>{r(),!n.ran&&(n.ran=!0,G(t.l.r2,!0),Er(e))})}function Dt(){var r=Se;rs(()=>{if(k(r.l.r2)){for(var e of r.l.r1){var t=e.effect;t.f&Yt&&Fr(t,fi),vi(t)&&To(t),e.ran=!1}r.l.r2.v=!1}})}function rs(r){return _i(wo,r,!0)}function se(r){return Io(r)}function Io(r,e=0){return _i(wo|Ha|e,r,!0)}function bs(r,e=!0){return _i(wo|Ur,r,!0,e)}function tg(r){var e=r.teardown;if(e!==null){const t=su,n=Ve;Gh(!0),rn(null);try{e.call(null)}finally{Gh(t),rn(n)}}}function rg(r){var e=r.deriveds;if(e!==null){r.deriveds=null;for(var t=0;t<e.length;t+=1)Zc(e[t])}}function ng(r,e=!1){var t=r.first;for(r.first=r.last=null;t!==null;){var n=t.next;En(t,e),t=n}}function Ev(r){for(var e=r.first;e!==null;){var t=e.next;e.f&Ur||En(e),e=t}}function En(r,e=!0){var t=!1;if((e||r.f&H_)&&r.nodes_start!==null){for(var n=r.nodes_start,s=r.nodes_end;n!==null;){var i=n===s?null:Ya(n);n.remove(),n=i}t=!0}ng(r,e&&!t),rg(r),oo(r,0),Fr(r,gi);var o=r.transitions;if(o!==null)for(const c of o)c.stop();tg(r);var l=r.parent;l!==null&&l.first!==null&&sg(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes_start=r.nodes_end=null}function sg(r){var e=r.parent,t=r.prev,n=r.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===r&&(e.first=n),e.last===r&&(e.last=t))}function ni(r,e){var t=[];tu(r,t,!0),ig(t,()=>{En(r),e&&e()})}function ig(r,e){var t=r.length;if(t>0){var n=()=>--t||e();for(var s of r)s.out(n)}else e()}function tu(r,e,t){if(!(r.f&Qr)){if(r.f^=Qr,r.transitions!==null)for(const o of r.transitions)(o.is_global||t)&&e.push(o);for(var n=r.first;n!==null;){var s=n.next,i=(n.f&pi)!==0||(n.f&Ur)!==0;tu(n,e,i?t:!1),n=s}}}function io(r){og(r,!0)}function og(r,e){if(r.f&Qr){vi(r)&&To(r),r.f^=Qr;for(var t=r.first;t!==null;){var n=t.next,s=(t.f&pi)!==0||(t.f&Ur)!==0;og(t,s?e:!1),t=n}if(r.transitions!==null)for(const i of r.transitions)(i.is_global||e)&&i.in()}}let cc=!1,uc=[];function Iv(){cc=!1;const r=uc.slice();uc=[],oc(r)}function si(r){cc||(cc=!0,queueMicrotask(Iv)),uc.push(r)}function ru(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function nu(r){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let la=!1,ba=!1,Ea=null,Hs=!1,su=!1;function jh(r){Hs=r}function Gh(r){su=r}let hc=[],Yi=0;let Ve=null;function rn(r){Ve=r}let be=null;function br(r){be=r}let Jr=null;function Tv(r){Jr=r}let qt=null,dr=0,jn=null;function Av(r){jn=r}let ag=1,ps=!1,Se=null;function lg(){return++ag}function Ja(){return!mi||Se!==null&&Se.l===null}function vi(r){var o,l;var e=r.f;if(e&Yn)return!0;if(e&fi){var t=r.deps,n=(e&Ps)!==0;if(t!==null){var s;if(e&wa){for(s=0;s<t.length;s++)((o=t[s]).reactions??(o.reactions=[])).push(r);r.f^=wa}for(s=0;s<t.length;s++){var i=t[s];if(vi(i)&&Zf(i),n&&be!==null&&!ps&&!((l=i==null?void 0:i.reactions)!=null&&l.includes(r))&&(i.reactions??(i.reactions=[])).push(r),i.version>r.version)return!0}}(!n||be!==null&&!ps)&&Fr(r,Yt)}return!1}function kv(r,e){for(var t=e;t!==null;){if(t.f&ac)try{t.fn(r);return}catch{t.f^=ac}t=t.parent}throw la=!1,r}function Rv(r){return(r.f&gi)===0&&(r.parent===null||(r.parent.f&ac)===0)}function Xa(r,e,t,n){if(la){if(t===null&&(la=!1),Rv(e))throw r;return}t!==null&&(la=!0);{kv(r,e);return}}function cg(r){var p;var e=qt,t=dr,n=jn,s=Ve,i=ps,o=Jr,l=Se,c=r.f;qt=null,dr=0,jn=null,Ve=c&(Ur|bo)?null:r,ps=!Hs&&(c&Ps)!==0,Jr=null,Se=r.ctx;try{var u=(0,r.fn)(),d=r.deps;if(qt!==null){var g;if(oo(r,dr),d!==null&&dr>0)for(d.length=dr+qt.length,g=0;g<qt.length;g++)d[dr+g]=qt[g];else r.deps=d=qt;if(!ps)for(g=dr;g<d.length;g++)((p=d[g]).reactions??(p.reactions=[])).push(r)}else d!==null&&dr<d.length&&(oo(r,dr),d.length=dr);return u}finally{qt=e,dr=t,jn=n,Ve=s,ps=i,Jr=o,Se=l}}function Pv(r,e){let t=e.reactions;if(t!==null){var n=t.indexOf(r);if(n!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[n]=t[s],t.pop())}}t===null&&e.f&Or&&(qt===null||!qt.includes(e))&&(Fr(e,fi),e.f&(Ps|wa)||(e.f^=wa),oo(e,0))}function oo(r,e){var t=r.deps;if(t!==null)for(var n=e;n<t.length;n++)Pv(r,t[n])}function To(r){var e=r.f;if(!(e&gi)){Fr(r,Yt);var t=be,n=Se;be=r;try{e&Ha?Ev(r):ng(r),rg(r),tg(r);var s=cg(r);r.teardown=typeof s=="function"?s:null,r.version=ag}catch(i){Xa(i,r,t,n||r.ctx)}finally{be=t}}}function Cv(){if(Yi>1e3){Yi=0;try{X_()}catch(r){if(Ea!==null)Xa(r,Ea,null);else throw r}}Yi++}function Sv(r){var e=r.length;if(e!==0){Cv();var t=Hs;Hs=!0;try{for(var n=0;n<e;n++){var s=r[n];s.f&Yt||(s.f^=Yt);var i=[];ug(s,i),xv(i)}}finally{Hs=t}}}function xv(r){var e=r.length;if(e!==0)for(var t=0;t<e;t++){var n=r[t];if(!(n.f&(gi|Qr)))try{vi(n)&&(To(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?sg(n):n.fn=null))}catch(s){Xa(s,n,null,n.ctx)}}}function Dv(){if(ba=!1,Yi>1001)return;const r=hc;hc=[],Sv(r),ba||(Yi=0,Ea=null)}function Za(r){ba||(ba=!0,queueMicrotask(Dv)),Ea=r;for(var e=r;e.parent!==null;){e=e.parent;var t=e.f;if(t&(bo|Ur)){if(!(t&Yt))return;e.f^=Yt}}hc.push(e)}function ug(r,e){var t=r.first,n=[];e:for(;t!==null;){var s=t.f,i=(s&Ur)!==0,o=i&&(s&Yt)!==0,l=t.next;if(!o&&!(s&Qr))if(s&wo){if(i)t.f^=Yt;else try{vi(t)&&To(t)}catch(g){Xa(g,t,null,t.ctx)}var c=t.first;if(c!==null){t=c;continue}}else s&Bf&&n.push(t);if(l===null){let g=t.parent;for(;g!==null;){if(r===g)break e;var u=g.next;if(u!==null){t=u;continue e}g=g.parent}}t=l}for(var d=0;d<n.length;d++)c=n[d],e.push(c),ug(c,e)}function k(r){var d;var e=r.f,t=(e&Or)!==0;if(t&&e&gi){var n=Xf(r);return Zc(r),n}if(Ve!==null){Jr!==null&&Jr.includes(r)&&rv();var s=Ve.deps;qt===null&&s!==null&&s[dr]===r?dr++:qt===null?qt=[r]:qt.push(r),jn!==null&&be!==null&&be.f&Yt&&!(be.f&Ur)&&jn.includes(r)&&(Fr(be,Yn),Za(be))}else if(t&&r.deps===null)for(var i=r,o=i.parent,l=i;o!==null;)if(o.f&Or){var c=o;l=c,o=c.parent}else{var u=o;(d=u.deriveds)!=null&&d.includes(l)||(u.deriveds??(u.deriveds=[])).push(l);break}return t&&(i=r,vi(i)&&Zf(i)),r.v}function Er(r){const e=Ve;try{return Ve=null,r()}finally{Ve=e}}const Nv=~(Yn|fi|Yt);function Fr(r,e){r.f=r.f&Nv|e}function Xe(r){return hg().get(r)}function xr(r,e){return hg().set(r,e),e}function hg(r){return Se===null&&nu(),Se.c??(Se.c=new Map(Ov(Se)||void 0))}function Ov(r){let e=r.p;for(;e!==null;){const t=e.c;if(t!==null)return t;e=e.p}return null}function Wh(r,e=1){var t=k(r),n=e===1?t++:t--;return G(r,t),n}function Me(r,e=!1,t){Se={p:Se,c:null,e:null,m:!1,s:r,x:null,l:null},mi&&!e&&(Se.l={s:null,u:null,r1:[],r2:fr(!1)})}function Ue(r){const e=Se;if(e!==null){const o=e.e;if(o!==null){var t=be,n=Ve;e.e=null;try{for(var s=0;s<o.length;s++){var i=o[s];br(i.effect),rn(i.reaction),Eo(i.fn)}}finally{br(t),rn(n)}}Se=e.p,e.m=!0}return{}}function X(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(Yr in r)dc(r);else if(!Array.isArray(r))for(let e in r){const t=r[e];typeof t=="object"&&t&&Yr in t&&dc(t)}}}function dc(r,e=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!e.has(r)){e.add(r),r instanceof Date&&r.getTime();for(let n in r)try{dc(r[n],e)}catch{}const t=Qc(r);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=Ff(t);for(let s in n){const i=n[s].get;if(i)try{i.call(r)}catch{}}}}}function Vv(r){return r.endsWith("capture")&&r!=="gotpointercapture"&&r!=="lostpointercapture"}const Lv=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Mv(r){return Lv.includes(r)}const Uv={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function Fv(r){return r=r.toLowerCase(),Uv[r]??r}const Bv=["touchstart","touchmove"];function $v(r){return Bv.includes(r)}function qv(r,e){if(e){const t=document.body;r.autofocus=!0,si(()=>{document.activeElement===t&&r.focus()})}}let Hh=!1;function zv(){Hh||(Hh=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var e;if(!r.defaultPrevented)for(const t of r.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function dg(r){var e=Ve,t=be;rn(null),br(null);try{return r()}finally{rn(e),br(t)}}function iu(r,e,t,n=t){r.addEventListener(e,()=>dg(t));const s=r.__on_r;s?r.__on_r=()=>{s(),n(!0)}:r.__on_r=()=>n(!0),zv()}const fg=new Set,fc=new Set;function gg(r,e,t,n){function s(i){if(n.capture||zi.call(e,i),!i.cancelBubble)return dg(()=>t.call(this,i))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?si(()=>{e.addEventListener(r,s,n)}):e.addEventListener(r,s,n),s}function B(r,e,t,n,s){var i={capture:n,passive:s},o=gg(r,e,t,i);(e===document.body||e===window||e===document)&&eu(()=>{e.removeEventListener(r,o,i)})}function jv(r){for(var e=0;e<r.length;e++)fg.add(r[e]);for(var t of fc)t(r)}function zi(r){var x;var e=this,t=e.ownerDocument,n=r.type,s=((x=r.composedPath)==null?void 0:x.call(r))||[],i=s[0]||r.target,o=0,l=r.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(e===document||e===window)){r.__root=e;return}var u=s.indexOf(e);if(u===-1)return;c<=u&&(o=c)}if(i=s[o]||r.target,i!==e){q_(r,"currentTarget",{configurable:!0,get(){return i||t}});var d=Ve,g=be;rn(null),br(null);try{for(var p,v=[];i!==null;){var A=i.assignedSlot||i.parentNode||i.host||null;try{var R=i["__"+n];if(R!==void 0&&!i.disabled)if(yo(R)){var[P,...N]=R;P.apply(i,[r,...N])}else R.call(i,r)}catch(C){p?v.push(C):p=C}if(r.cancelBubble||A===e||A===null)break;i=A}if(p){for(let C of v)queueMicrotask(()=>{throw C});throw p}}finally{r.__root=e,delete r.currentTarget,rn(d),br(g)}}}function pg(r){var e=document.createElement("template");return e.innerHTML=r,e.content}function Es(r,e){var t=be;t.nodes_start===null&&(t.nodes_start=r,t.nodes_end=e)}function W(r,e){var t=(e&Wf)!==0,n=(e&fv)!==0,s,i=!r.startsWith("<!>");return()=>{s===void 0&&(s=pg(i?r:"<!>"+r),t||(s=fn(s)));var o=n?document.importNode(s,!0):s.cloneNode(!0);if(t){var l=fn(o),c=o.lastChild;Es(l,c)}else Es(o,o);return o}}function Ao(r,e,t="svg"){var n=!r.startsWith("<!>"),s=(e&Wf)!==0,i=`<${t}>${n?r:"<!>"+r}</${t}>`,o;return()=>{if(!o){var l=pg(i),c=fn(l);if(s)for(o=document.createDocumentFragment();fn(c);)o.appendChild(fn(c));else o=fn(c)}var u=o.cloneNode(!0);if(s){var d=fn(u),g=u.lastChild;Es(d,g)}else Es(u,u);return u}}function pe(r=""){{var e=Qa(r+"");return Es(e,e),e}}function _e(){var r=document.createDocumentFragment(),e=document.createComment(""),t=Qa();return r.append(e,t),Es(e,t),r}function S(r,e){r!==null&&r.before(e)}let Ia=!0;function Kh(r){Ia=r}function rt(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t==null?"":t+"")}function Gv(r,e){return Wv(r,e)}const Ms=new Map;function Wv(r,{target:e,anchor:t,props:n={},events:s,context:i,intro:o=!0}){mv();var l=new Set,c=g=>{for(var p=0;p<g.length;p++){var v=g[p];if(!l.has(v)){l.add(v);var A=$v(v);e.addEventListener(v,zi,{passive:A});var R=Ms.get(v);R===void 0?(document.addEventListener(v,zi,{passive:A}),Ms.set(v,1)):Ms.set(v,R+1)}}};c(Kc(fg)),fc.add(c);var u=void 0,d=bv(()=>{var g=t??e.appendChild(Qa());return bs(()=>{if(i){Me({});var p=Se;p.c=i}s&&(n.$$events=s),Ia=o,u=r(g,n)||{},Ia=!0,i&&Ue()}),()=>{var A;for(var p of l){e.removeEventListener(p,zi);var v=Ms.get(p);--v===0?(document.removeEventListener(p,zi),Ms.delete(p)):Ms.set(p,v)}fc.delete(c),g!==t&&((A=g.parentNode)==null||A.removeChild(g))}});return Hv.set(u,d),u}let Hv=new WeakMap;function he(r,e,t=!1){var n=r,s=null,i=null,o=er,l=t?pi:0,c=!1;const u=(g,p=!0)=>{c=!0,d(p,g)},d=(g,p)=>{o!==(o=g)&&(o?(s?io(s):p&&(s=bs(()=>p(n))),i&&ni(i,()=>{i=null})):(i?io(i):p&&(i=bs(()=>p(n))),s&&ni(s,()=>{s=null})))};Io(()=>{c=!1,e(u),c||d(null,null)},l)}function Ks(r,e){return e}function Kv(r,e,t,n){for(var s=[],i=e.length,o=0;o<i;o++)tu(e[o].e,s,!0);var l=i>0&&s.length===0&&t!==null;if(l){var c=t.parentNode;_v(c),c.append(t),n.clear(),Ln(r,e[0].prev,e[i-1].next)}ig(s,()=>{for(var u=0;u<i;u++){var d=e[u];l||(n.delete(d.k),Ln(r,d.prev,d.next)),En(d.e,!l)}})}function Qs(r,e,t,n,s,i=null){var o=r,l={flags:e,items:new Map,first:null},c=null,u=!1;Io(()=>{var d=t(),g=yo(d)?d:d==null?[]:Kc(d),p=g.length;if(!(u&&p===0)){u=p===0;{var v=Ve;Qv(g,l,o,s,e,(v.f&Qr)!==0,n)}i!==null&&(p===0?c?io(c):c=bs(()=>i(o)):c!==null&&ni(c,()=>{c=null})),t()}})}function Qv(r,e,t,n,s,i,o,l){var c=r.length,u=e.items,d=e.first,g=d,p,v=null,A=[],R=[],P,N,x,C;for(C=0;C<c;C+=1){if(P=r[C],N=o(P,C),x=u.get(N),x===void 0){var O=g?g.e.nodes_start:t;v=Jv(O,e,v,v===null?e.first:v.next,P,N,C,n,s),u.set(N,v),A=[],R=[],g=v.next;continue}if(Yv(x,P,C),x.e.f&Qr&&io(x.e),x!==g){if(p!==void 0&&p.has(x)){if(A.length<R.length){var L=R[0],M;v=L.prev;var E=A[0],m=A[A.length-1];for(M=0;M<A.length;M+=1)Qh(A[M],L,t);for(M=0;M<R.length;M+=1)p.delete(R[M]);Ln(e,E.prev,m.next),Ln(e,v,E),Ln(e,m,L),g=L,v=m,C-=1,A=[],R=[]}else p.delete(x),Qh(x,g,t),Ln(e,x.prev,x.next),Ln(e,x,v===null?e.first:v.next),Ln(e,v,x),v=x;continue}for(A=[],R=[];g!==null&&g.k!==N;)(i||!(g.e.f&Qr))&&(p??(p=new Set)).add(g),R.push(g),g=g.next;if(g===null)continue;x=g}A.push(x),v=x,g=x.next}if(g!==null||p!==void 0){for(var y=p===void 0?[]:Kc(p);g!==null;)(i||!(g.e.f&Qr))&&y.push(g),g=g.next;var b=y.length;if(b>0){var I=null;Kv(e,y,I,u)}}be.first=e.first&&e.first.e,be.last=v&&v.e}function Yv(r,e,t,n){Hf(r.v,e),r.i=t}function Jv(r,e,t,n,s,i,o,l,c,u){var d=(c&iv)!==0,g=(c&av)===0,p=d?g?Ka(s):fr(s):s,v=c&ov?fr(o):o,A={i:v,v:p,k:i,a:null,e:null,prev:t,next:n};try{return A.e=bs(()=>l(r,p,v),Xc),A.e.prev=t&&t.e,A.e.next=n&&n.e,t===null?e.first=A:(t.next=A,t.e.next=A.e),n!==null&&(n.prev=A,n.e.prev=A.e),A}finally{}}function Qh(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,s=e?e.e.nodes_start:t,i=r.e.nodes_start;i!==n;){var o=Ya(i);s.before(i),i=o}}function Ln(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function me(r,e,t,n,s){var l;var i=(l=e.$$slots)==null?void 0:l[t],o=!1;i===!0&&(i=e[t==="default"?"children":t],o=!0),i===void 0?s!==null&&s(r):i(r,o?()=>n:n)}function ko(r){const e={};r.children&&(e.default=!0);for(const t in r.$$slots)e[t]=!0;return e}function Xv(r,e,t){var n=r,s,i;Io(()=>{s!==(s=e())&&(i&&(ni(i),i=null),s&&(i=bs(()=>t(n,s))))},pi)}function Ta(r,e,t,n,s,i){var o,l,c=null,u=r,d;Io(()=>{const g=e()||null;var p=g==="svg"?no:null;g!==o&&(d&&(g===null?ni(d,()=>{d=null,l=null}):g===l?io(d):(En(d),Kh(!1))),g&&g!==l&&(d=bs(()=>{if(c=p?document.createElementNS(p,g):document.createElement(g),Es(c,c),n){var v=c.appendChild(Qa());n(c,v)}be.nodes_end=c,u.before(c)})),o=g,o&&(l=o),Kh(!0))},pi)}function gc(r,e,t){Eo(()=>{var n=Er(()=>e(r,t==null?void 0:t())||{});if(t&&(n!=null&&n.update)){var s=!1,i={};rs(()=>{var o=t();X(o),s&&Yc(i,o)&&(i=o,n.update(o))}),s=!0}if(n!=null&&n.destroy)return()=>n.destroy()})}function Zv(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function yn(r,e,t,n){var s=r.__attributes??(r.__attributes={});s[e]!==(s[e]=t)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[K_]=t),t==null?r.removeAttribute(e):typeof t!="string"&&mg(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function ze(r,e,t,n,s=!1,i=!1,o=!1){var l=e||{},c=r.tagName==="OPTION";for(var u in e)u in t||(t[u]=null);var d=mg(r),g=r.__attributes??(r.__attributes={});for(const x in t){let C=t[x];if(c&&x==="value"&&C==null){r.value=r.__value="",l[x]=C;continue}var p=l[x];if(C!==p){l[x]=C;var v=x[0]+x[1];if(v!=="$$"){if(v==="on"){const O={},L="$$"+x;let M=x.slice(2);var A=Mv(M);if(Vv(M)&&(M=M.slice(0,-7),O.capture=!0),!A&&p){if(C!=null)continue;r.removeEventListener(M,l[L],O),l[L]=null}if(C!=null)if(A)r[`__${M}`]=C,jv([M]);else{let E=function(m){l[x].call(this,m)};var N=E;l[L]=gg(M,r,E,O)}else A&&(r[`__${M}`]=void 0)}else if(x==="style"&&C!=null)r.style.cssText=C+"";else if(x==="autofocus")qv(r,!!C);else if(x==="__value"||x==="value"&&C!=null)r.value=r[x]=r.__value=C;else if(x==="selected"&&c)Zv(r,C);else{var R=x;s||(R=Fv(R));var P=R==="defaultValue"||R==="defaultChecked";if(C==null&&!i&&!P)if(g[x]=null,R==="value"||R==="checked"){let O=r;if(R==="value"){let L=O.defaultValue;O.removeAttribute(R),O.defaultValue=L}else{let L=O.defaultChecked;O.removeAttribute(R),O.defaultChecked=L}}else r.removeAttribute(x);else P||d.includes(R)&&(i||typeof C!="string")?r[R]=C:typeof C!="function"&&yn(r,R,C)}x==="style"&&"__styles"in r&&(r.__styles={})}}}return l}var Yh=new Map;function mg(r){var e=Yh.get(r.nodeName);if(e)return e;Yh.set(r.nodeName,e=[]);for(var t,n=r,s=Element.prototype;s!==n;){t=Ff(n);for(var i in t)t[i].set&&e.push(i);n=Qc(n)}return e}function _g(r,e){var t=r.__className,n=vg(e);(t!==n||Xc)&&(n===""?r.removeAttribute("class"):r.setAttribute("class",n),r.__className=n)}function gr(r,e){var t=r.__className,n=vg(e);(t!==n||Xc)&&(e==null?r.removeAttribute("class"):r.className=n,r.__className=n)}function vg(r){return r??""}const ey=()=>performance.now(),gn={tick:r=>requestAnimationFrame(r),now:()=>ey(),tasks:new Set};function yg(){const r=gn.now();gn.tasks.forEach(e=>{e.c(r)||(gn.tasks.delete(e),e.f())}),gn.tasks.size!==0&&gn.tick(yg)}function ty(r){let e;return gn.tasks.size===0&&gn.tick(yg),{promise:new Promise(t=>{gn.tasks.add(e={c:r,f:t})}),abort(){gn.tasks.delete(e)}}}function Jo(r,e){r.dispatchEvent(new CustomEvent(e))}function ry(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const e=r.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Jh(r){const e={},t=r.split(";");for(const n of t){const[s,i]=n.split(":");if(!s||i===void 0)break;const o=ry(s.trim());e[o]=i.trim()}return e}const ny=r=>r;function Ys(r,e,t,n){var s=(r&dv)!==0,i="both",o,l=e.inert,c,u;function d(){var R=Ve,P=be;rn(null),br(null);try{return o??(o=t()(e,(n==null?void 0:n())??{},{direction:i}))}finally{rn(R),br(P)}}var g={is_global:s,in(){e.inert=l,Jo(e,"introstart"),c=pc(e,d(),u,1,()=>{Jo(e,"introend"),c==null||c.abort(),c=o=void 0})},out(R){e.inert=!0,Jo(e,"outrostart"),u=pc(e,d(),c,0,()=>{Jo(e,"outroend"),R==null||R()})},stop:()=>{c==null||c.abort(),u==null||u.abort()}},p=be;if((p.transitions??(p.transitions=[])).push(g),Ia){var v=s;if(!v){for(var A=p.parent;A&&A.f&pi;)for(;(A=A.parent)&&!(A.f&Ha););v=!A||(A.f&$f)!==0}v&&Eo(()=>{Er(()=>g.in())})}}function pc(r,e,t,n,s){var i=n===1;if(Bs(e)){var o,l=!1;return si(()=>{if(!l){var P=e({direction:i?"in":"out"});o=pc(r,P,t,n,s)}}),{abort:()=>{l=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return s(),{abort:Dr,deactivate:Dr,reset:Dr,t:()=>n};const{delay:c=0,css:u,tick:d,easing:g=ny}=e;var p=[];if(i&&t===void 0&&(d&&d(0,1),u)){var v=Jh(u(0,1));p.push(v,v)}var A=()=>1-n,R=r.animate(p,{duration:c});return R.onfinish=()=>{var P=(t==null?void 0:t.t())??1-n;t==null||t.abort();var N=n-P,x=e.duration*Math.abs(N),C=[];if(x>0){if(u)for(var O=Math.ceil(x/16.666666666666668),L=0;L<=O;L+=1){var M=P+N*g(L/O),E=u(M,1-M);C.push(Jh(E))}A=()=>{var m=R.currentTime;return P+N*g(m/x)},d&&ty(()=>{if(R.playState!=="running")return!1;var m=A();return d(m,1-m),!0})}R=r.animate(C,{duration:x,fill:"forwards"}),R.onfinish=()=>{A=()=>n,d==null||d(n,1-n),s()}},{abort:()=>{R&&(R.cancel(),R.effect=null,R.onfinish=Dr)},deactivate:()=>{s=Dr},reset:()=>{n===0&&(d==null||d(1,0))},t:()=>A()}}function el(r,e,t=e){var n=Ja();iu(r,"input",s=>{var i=s?r.defaultValue:r.value;if(i=Ll(r)?Ml(i):i,t(i),n&&i!==(i=e())){var o=r.selectionStart,l=r.selectionEnd;r.value=i??"",l!==null&&(r.selectionStart=o,r.selectionEnd=Math.min(l,r.value.length))}}),Er(e)==null&&r.value&&t(Ll(r)?Ml(r.value):r.value),rs(()=>{var s=e();Ll(r)&&s===Ml(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}const Vl=new Set;function sy(r,e,t,n,s=n){var i=t.getAttribute("type")==="checkbox",o=r;if(e!==null)for(var l of e)o=o[l]??(o[l]=[]);o.push(t),iu(t,"change",()=>{var c=t.__value;i&&(c=oy(o,c,t.checked)),s(c)},()=>s(i?[]:null)),rs(()=>{var c=n();i?(c=c||[],t.checked=c.includes(t.__value)):t.checked=pv(t.__value,c)}),eu(()=>{var c=o.indexOf(t);c!==-1&&o.splice(c,1)}),Vl.has(o)||(Vl.add(o),si(()=>{o.sort((c,u)=>c.compareDocumentPosition(u)===4?-1:1),Vl.delete(o)})),si(()=>{})}function iy(r,e,t=e){iu(r,"change",n=>{var s=n?r.defaultChecked:r.checked;t(s)}),Er(e)==null&&t(r.checked),rs(()=>{var n=e();r.checked=!!n})}function oy(r,e,t){for(var n=new Set,s=0;s<r.length;s+=1)r[s].checked&&n.add(r[s].__value);return t||n.delete(e),Array.from(n)}function Ll(r){var e=r.type;return e==="number"||e==="range"}function Ml(r){return r===""?null:+r}function Xh(r,e){return r===e||(r==null?void 0:r[Yr])===e}function mc(r={},e,t,n){return Eo(()=>{var s,i;return rs(()=>{s=i,i=[],Er(()=>{r!==t(...i)&&(e(r,...i),s&&Xh(t(...s),r)&&e(null,...s))})}),()=>{si(()=>{i&&Xh(t(...i),r)&&e(null,...i)})}}),r}function ys(r){return function(...e){var t=e[0];return t.preventDefault(),r==null?void 0:r.apply(this,e)}}function je(r=!1){const e=Se,t=e.l.u;if(!t)return;let n=()=>X(e.s);if(r){let s=0,i={};const o=so(()=>{let l=!1;const c=e.s;for(const u in c)c[u]!==i[u]&&(i[u]=c[u],l=!0);return l&&s++,s});n=()=>k(o)}t.b.length&&wv(()=>{Zh(e,n),oc(t.b)}),lc(()=>{const s=Er(()=>t.m.map(G_));return()=>{for(const i of s)typeof i=="function"&&i()}}),t.a.length&&lc(()=>{Zh(e,n),oc(t.a)})}function Zh(r,e){if(r.l.s)for(const t of r.l.s)k(t);e()}function F(r,e){var i;var t=(i=r.$$events)==null?void 0:i[e.type],n=yo(t)?t.slice():t==null?[]:[t];for(var s of n)s.call(this,e)}function wg(r,e,t){if(r==null)return e(void 0),Dr;const n=Er(()=>r.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}let Xo=!1;function ca(r,e,t){const n=t[e]??(t[e]={store:null,source:Ka(void 0),unsubscribe:Dr});if(n.store!==r)if(n.unsubscribe(),n.store=r??null,r==null)n.source.v=void 0,n.unsubscribe=Dr;else{var s=!0;n.unsubscribe=wg(r,i=>{s?n.source.v=i:G(n.source,i)}),s=!1}return k(n.source)}function bg(){const r={};return eu(()=>{for(var e in r)r[e].unsubscribe()}),r}function ay(r){var e=Xo;try{return Xo=!1,[r(),Xo]}finally{Xo=e}}const ly={get(r,e){if(!r.exclude.includes(e))return r.props[e]},set(r,e){return!1},getOwnPropertyDescriptor(r,e){if(!r.exclude.includes(e)&&e in r.props)return{enumerable:!0,configurable:!0,value:r.props[e]}},has(r,e){return r.exclude.includes(e)?!1:e in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(e=>!r.exclude.includes(e))}};function cy(r,e,t){return new Proxy({props:r,exclude:e},ly)}const uy={get(r,e){if(!r.exclude.includes(e))return k(r.version),e in r.special?r.special[e]():r.props[e]},set(r,e,t){return e in r.special||(r.special[e]=U({get[e](){return r.props[e]}},e,Gf)),r.special[e](t),Wh(r.version),!0},getOwnPropertyDescriptor(r,e){if(!r.exclude.includes(e)&&e in r.props)return{enumerable:!0,configurable:!0,value:r.props[e]}},deleteProperty(r,e){return r.exclude.includes(e)||(r.exclude.push(e),Wh(r.version)),!0},has(r,e){return r.exclude.includes(e)?!1:e in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(e=>!r.exclude.includes(e))}};function de(r,e){return new Proxy({props:r,exclude:e,special:{},version:fr(0)},uy)}const hy={get(r,e){let t=r.props.length;for(;t--;){let n=r.props[t];if(Bs(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(r,e,t){let n=r.props.length;for(;n--;){let s=r.props[n];Bs(s)&&(s=s());const i=zn(s,e);if(i&&i.set)return i.set(t),!0}return!1},getOwnPropertyDescriptor(r,e){let t=r.props.length;for(;t--;){let n=r.props[t];if(Bs(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const s=zn(n,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(r,e){if(e===Yr||e===zf)return!1;for(let t of r.props)if(Bs(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(r){const e=[];for(let t of r.props){Bs(t)&&(t=t());for(const n in t)e.includes(n)||e.push(n)}return e}};function yi(...r){return new Proxy({props:r},hy)}function ed(r){for(var e=be,t=be;e!==null&&!(e.f&(Ur|bo));)e=e.parent;try{return br(e),r()}finally{br(t)}}function U(r,e,t,n){var E;var s=(t&lv)!==0,i=!mi||(t&cv)!==0,o=(t&uv)!==0,l=(t&hv)!==0,c=!1,u;o?[u,c]=ay(()=>r[e]):u=r[e];var d=Yr in r||zf in r,g=((E=zn(r,e))==null?void 0:E.set)??(d&&o&&e in r?m=>r[e]=m:void 0),p=n,v=!0,A=!1,R=()=>(A=!0,v&&(v=!1,l?p=Er(n):p=n),p);u===void 0&&n!==void 0&&(g&&i&&Z_(),u=R(),g&&g(u));var P;if(i)P=()=>{var m=r[e];return m===void 0?R():(v=!0,A=!1,m)};else{var N=ed(()=>(s?so:ft)(()=>r[e]));N.f|=W_,P=()=>{var m=k(N);return m!==void 0&&(p=void 0),m===void 0?p:m}}if(!(t&Gf))return P;if(g){var x=r.$$legacy;return function(m,y){return arguments.length>0?((!i||!y||x||c)&&g(y?P():m),m):P()}}var C=!1,O=!1,L=Ka(u),M=ed(()=>so(()=>{var m=P(),y=k(L);return C?(C=!1,O=!0,y):(O=!1,L.v=m)}));return s||(M.equals=Jc),function(m,y){if(arguments.length>0){const b=y?k(M):i&&o?$s(m):m;return M.equals(b)||(C=!0,G(L,b),A&&p!==void 0&&(p=b),Er(()=>k(M))),m}return k(M)}}function ou(r){Se===null&&nu(),mi&&Se.l!==null?fy(Se).m.push(r):lc(()=>{const e=Er(r);if(typeof e=="function")return e})}function dy(r,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(r,{detail:e,bubbles:t,cancelable:n})}function Eg(){const r=Se;return r===null&&nu(),(e,t,n)=>{var i;const s=(i=r.s.$$events)==null?void 0:i[e];if(s){const o=yo(s)?s.slice():[s],l=dy(e,t,n);for(const c of o)c.call(r.x,l);return!l.defaultPrevented}return!0}}function fy(r){var e=r.l;return e.u??(e.u={a:[],b:[],m:[]})}const gy="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gy);sv();const Us=[];function Gn(r,e=Dr){let t=null;const n=new Set;function s(l){if(Yc(r,l)&&(r=l,t)){const c=!Us.length;for(const u of n)u[1](),Us.push(u,r);if(c){for(let u=0;u<Us.length;u+=2)Us[u][0](Us[u+1]);Us.length=0}}}function i(l){s(l(r))}function o(l,c=Dr){const u=[l,c];return n.add(u),n.size===1&&(t=e(s,i)||Dr),l(r),()=>{n.delete(u),n.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function pr(r){let e;return wg(r,t=>e=t)(),e}const au="-",py=r=>{const e=_y(r),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=r;return{getClassGroupId:o=>{const l=o.split(au);return l[0]===""&&l.length!==1&&l.shift(),Ig(l,e)||my(o)},getConflictingClassGroupIds:(o,l)=>{const c=t[o]||[];return l&&n[o]?[...c,...n[o]]:c}}},Ig=(r,e)=>{var o;if(r.length===0)return e.classGroupId;const t=r[0],n=e.nextPart.get(t),s=n?Ig(r.slice(1),n):void 0;if(s)return s;if(e.validators.length===0)return;const i=r.join(au);return(o=e.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},td=/^\[(.+)\]$/,my=r=>{if(td.test(r)){const e=td.exec(r)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},_y=r=>{const{theme:e,prefix:t}=r,n={nextPart:new Map,validators:[]};return yy(Object.entries(r.classGroups),t).forEach(([i,o])=>{_c(o,n,i,e)}),n},_c=(r,e,t,n)=>{r.forEach(s=>{if(typeof s=="string"){const i=s===""?e:rd(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(vy(s)){_c(s(n),e,t,n);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,o])=>{_c(o,rd(e,i),t,n)})})},rd=(r,e)=>{let t=r;return e.split(au).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t},vy=r=>r.isThemeGetter,yy=(r,e)=>e?r.map(([t,n])=>{const s=n.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[e+o,l])):i);return[t,s]}):r,wy=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;const s=(i,o)=>{t.set(i,o),e++,e>r&&(e=0,n=t,t=new Map)};return{get(i){let o=t.get(i);if(o!==void 0)return o;if((o=n.get(i))!==void 0)return s(i,o),o},set(i,o){t.has(i)?t.set(i,o):s(i,o)}}},Tg="!",by=r=>{const{separator:e,experimentalParseClassName:t}=r,n=e.length===1,s=e[0],i=e.length,o=l=>{const c=[];let u=0,d=0,g;for(let P=0;P<l.length;P++){let N=l[P];if(u===0){if(N===s&&(n||l.slice(P,P+i)===e)){c.push(l.slice(d,P)),d=P+i;continue}if(N==="/"){g=P;continue}}N==="["?u++:N==="]"&&u--}const p=c.length===0?l:l.substring(d),v=p.startsWith(Tg),A=v?p.substring(1):p,R=g&&g>d?g-d:void 0;return{modifiers:c,hasImportantModifier:v,baseClassName:A,maybePostfixModifierPosition:R}};return t?l=>t({className:l,parseClassName:o}):o},Ey=r=>{if(r.length<=1)return r;const e=[];let t=[];return r.forEach(n=>{n[0]==="["?(e.push(...t.sort(),n),t=[]):t.push(n)}),e.push(...t.sort()),e},Iy=r=>({cache:wy(r.cacheSize),parseClassName:by(r),...py(r)}),Ty=/\s+/,Ay=(r,e)=>{const{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:s}=e,i=[],o=r.trim().split(Ty);let l="";for(let c=o.length-1;c>=0;c-=1){const u=o[c],{modifiers:d,hasImportantModifier:g,baseClassName:p,maybePostfixModifierPosition:v}=t(u);let A=!!v,R=n(A?p.substring(0,v):p);if(!R){if(!A){l=u+(l.length>0?" "+l:l);continue}if(R=n(p),!R){l=u+(l.length>0?" "+l:l);continue}A=!1}const P=Ey(d).join(":"),N=g?P+Tg:P,x=N+R;if(i.includes(x))continue;i.push(x);const C=s(R,A);for(let O=0;O<C.length;++O){const L=C[O];i.push(N+L)}l=u+(l.length>0?" "+l:l)}return l};function Ag(){let r=0,e,t,n="";for(;r<arguments.length;)(e=arguments[r++])&&(t=kg(e))&&(n&&(n+=" "),n+=t);return n}const kg=r=>{if(typeof r=="string")return r;let e,t="";for(let n=0;n<r.length;n++)r[n]&&(e=kg(r[n]))&&(t&&(t+=" "),t+=e);return t};function ky(r,...e){let t,n,s,i=o;function o(c){const u=e.reduce((d,g)=>g(d),r());return t=Iy(u),n=t.cache.get,s=t.cache.set,i=l,l(c)}function l(c){const u=n(c);if(u)return u;const d=Ay(c,t);return s(c,d),d}return function(){return i(Ag.apply(null,arguments))}}const Ke=r=>{const e=t=>t[r]||[];return e.isThemeGetter=!0,e},Rg=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ry=/^\d+\/\d+$/,Py=new Set(["px","full","screen"]),Cy=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Sy=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,xy=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Dy=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ny=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,hn=r=>Js(r)||Py.has(r)||Ry.test(r),Nn=r=>wi(r,"length",$y),Js=r=>!!r&&!Number.isNaN(Number(r)),Ul=r=>wi(r,"number",Js),Fi=r=>!!r&&Number.isInteger(Number(r)),Oy=r=>r.endsWith("%")&&Js(r.slice(0,-1)),ye=r=>Rg.test(r),On=r=>Cy.test(r),Vy=new Set(["length","size","percentage"]),Ly=r=>wi(r,Vy,Pg),My=r=>wi(r,"position",Pg),Uy=new Set(["image","url"]),Fy=r=>wi(r,Uy,zy),By=r=>wi(r,"",qy),Bi=()=>!0,wi=(r,e,t)=>{const n=Rg.exec(r);return n?n[1]?typeof e=="string"?n[1]===e:e.has(n[1]):t(n[2]):!1},$y=r=>Sy.test(r)&&!xy.test(r),Pg=()=>!1,qy=r=>Dy.test(r),zy=r=>Ny.test(r),jy=()=>{const r=Ke("colors"),e=Ke("spacing"),t=Ke("blur"),n=Ke("brightness"),s=Ke("borderColor"),i=Ke("borderRadius"),o=Ke("borderSpacing"),l=Ke("borderWidth"),c=Ke("contrast"),u=Ke("grayscale"),d=Ke("hueRotate"),g=Ke("invert"),p=Ke("gap"),v=Ke("gradientColorStops"),A=Ke("gradientColorStopPositions"),R=Ke("inset"),P=Ke("margin"),N=Ke("opacity"),x=Ke("padding"),C=Ke("saturate"),O=Ke("scale"),L=Ke("sepia"),M=Ke("skew"),E=Ke("space"),m=Ke("translate"),y=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],I=()=>["auto",ye,e],T=()=>[ye,e],w=()=>["",hn,Nn],ne=()=>["auto",Js,ye],ae=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],te=()=>["solid","dashed","dotted","double","none"],le=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ve=()=>["start","end","center","between","around","evenly","stretch"],Pe=()=>["","0",ye],at=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ie=()=>[Js,ye];return{cacheSize:500,separator:":",theme:{colors:[Bi],spacing:[hn,Nn],blur:["none","",On,ye],brightness:ie(),borderColor:[r],borderRadius:["none","","full",On,ye],borderSpacing:T(),borderWidth:w(),contrast:ie(),grayscale:Pe(),hueRotate:ie(),invert:Pe(),gap:T(),gradientColorStops:[r],gradientColorStopPositions:[Oy,Nn],inset:I(),margin:I(),opacity:ie(),padding:T(),saturate:ie(),scale:ie(),sepia:Pe(),skew:ie(),space:T(),translate:T()},classGroups:{aspect:[{aspect:["auto","square","video",ye]}],container:["container"],columns:[{columns:[On]}],"break-after":[{"break-after":at()}],"break-before":[{"break-before":at()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ae(),ye]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:y()}],"overscroll-x":[{"overscroll-x":y()}],"overscroll-y":[{"overscroll-y":y()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[R]}],"inset-x":[{"inset-x":[R]}],"inset-y":[{"inset-y":[R]}],start:[{start:[R]}],end:[{end:[R]}],top:[{top:[R]}],right:[{right:[R]}],bottom:[{bottom:[R]}],left:[{left:[R]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Fi,ye]}],basis:[{basis:I()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ye]}],grow:[{grow:Pe()}],shrink:[{shrink:Pe()}],order:[{order:["first","last","none",Fi,ye]}],"grid-cols":[{"grid-cols":[Bi]}],"col-start-end":[{col:["auto",{span:["full",Fi,ye]},ye]}],"col-start":[{"col-start":ne()}],"col-end":[{"col-end":ne()}],"grid-rows":[{"grid-rows":[Bi]}],"row-start-end":[{row:["auto",{span:[Fi,ye]},ye]}],"row-start":[{"row-start":ne()}],"row-end":[{"row-end":ne()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ye]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ye]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...ve()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...ve(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...ve(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ye,e]}],"min-w":[{"min-w":[ye,e,"min","max","fit"]}],"max-w":[{"max-w":[ye,e,"none","full","min","max","fit","prose",{screen:[On]},On]}],h:[{h:[ye,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ye,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ye,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ye,e,"auto","min","max","fit"]}],"font-size":[{text:["base",On,Nn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ul]}],"font-family":[{font:[Bi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ye]}],"line-clamp":[{"line-clamp":["none",Js,Ul]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",hn,ye]}],"list-image":[{"list-image":["none",ye]}],"list-style-type":[{list:["none","disc","decimal",ye]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...te(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",hn,Nn]}],"underline-offset":[{"underline-offset":["auto",hn,ye]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ye]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ye]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ae(),My]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ly]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Fy]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[A]}],"gradient-via-pos":[{via:[A]}],"gradient-to-pos":[{to:[A]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[...te(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:te()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...te()]}],"outline-offset":[{"outline-offset":[hn,ye]}],"outline-w":[{outline:[hn,Nn]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:w()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[hn,Nn]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",On,By]}],"shadow-color":[{shadow:[Bi]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":[...le(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":le()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",On,ye]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[g]}],saturate:[{saturate:[C]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[C]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ye]}],duration:[{duration:ie()}],ease:[{ease:["linear","in","out","in-out",ye]}],delay:[{delay:ie()}],animate:[{animate:["none","spin","ping","pulse","bounce",ye]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[Fi,ye]}],"translate-x":[{"translate-x":[m]}],"translate-y":[{"translate-y":[m]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ye]}],accent:[{accent:["auto",r]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ye]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ye]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[hn,Nn,Ul]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},xe=ky(jy),Gy=r=>r;function Xs(r,{delay:e=0,duration:t=400,easing:n=Gy}={}){const s=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:n,css:i=>`opacity: ${i*s}`}}const Wy={gray:"bg-gray-50 dark:bg-gray-800",red:"bg-red-50 dark:bg-gray-800",yellow:"bg-yellow-50 dark:bg-gray-800 ",green:"bg-green-50 dark:bg-gray-800 ",indigo:"bg-indigo-50 dark:bg-gray-800 ",purple:"bg-purple-50 dark:bg-gray-800 ",pink:"bg-pink-50 dark:bg-gray-800 ",blue:"bg-blue-50 dark:bg-gray-800 ",light:"bg-gray-50 dark:bg-gray-700",dark:"bg-gray-50 dark:bg-gray-800",default:"bg-white dark:bg-gray-800",dropdown:"bg-white dark:bg-gray-700",navbar:"bg-white dark:bg-gray-900",navbarUl:"bg-gray-50 dark:bg-gray-800",form:"bg-gray-50 dark:bg-gray-700",primary:"bg-primary-50 dark:bg-gray-800 ",orange:"bg-orange-50 dark:bg-orange-800",none:""};function Cg(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["tag","color","rounded","border","shadow","node","use","options","role","transition","params","open"]);Me(e,!1);const s=()=>{};xr("background",!0);let i=U(e,"tag",24,()=>n.href?"a":"div"),o=U(e,"color",12,"default"),l=U(e,"rounded",8,!1),c=U(e,"border",8,!1),u=U(e,"shadow",8,!1),d=U(e,"node",28,()=>{}),g=U(e,"use",8,s),p=U(e,"options",24,()=>({})),v=U(e,"role",24,()=>{}),A=U(e,"transition",24,()=>{}),R=U(e,"params",24,()=>({})),P=U(e,"open",8,!0);const N=Eg(),x={gray:"text-gray-800 dark:text-gray-300",red:"text-red-800 dark:text-red-400",yellow:"text-yellow-800 dark:text-yellow-300",green:"text-green-800 dark:text-green-400",indigo:"text-indigo-800 dark:text-indigo-400",purple:"text-purple-800 dark:text-purple-400",pink:"text-pink-800 dark:text-pink-400",blue:"text-blue-800 dark:text-blue-400",light:"text-gray-700 dark:text-gray-300",dark:"text-gray-700 dark:text-gray-300",default:"text-gray-500 dark:text-gray-400",dropdown:"text-gray-700 dark:text-gray-200",navbar:"text-gray-700 dark:text-gray-200",navbarUl:"text-gray-700 dark:text-gray-400",form:"text-gray-900 dark:text-white",primary:"text-primary-800 dark:text-primary-400",orange:"text-orange-800 dark:text-orange-400",none:""},C={gray:"border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",red:"border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",yellow:"border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",green:"border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",indigo:"border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",purple:"border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",pink:"border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",blue:"border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",light:"border-gray-500 divide-gray-500",dark:"border-gray-500 divide-gray-500",default:"border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",dropdown:"border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",navbar:"border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",navbarUl:"border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",form:"border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",primary:"border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",orange:"border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",none:""};let O=re();we(()=>X(P()),()=>{N(P()?"open":"close")}),we(()=>X(P()),()=>{N("show",P())}),we(()=>X(o()),()=>{o(o()??"default")}),we(()=>X(o()),()=>{xr("color",o())}),we(()=>(X(o()),X(l()),X(c()),X(u()),X(t)),()=>{G(O,xe(Wy[o()],x[o()],l()&&"rounded-lg",c()&&"border",C[o()],u()&&"shadow-md",t.class))}),Dt(),je();var L=_e(),M=Q(L);{var E=y=>{var b=_e(),I=Q(b);Ta(I,i,!1,(T,w)=>{gc(T,(le,ve)=>{var Pe;return(Pe=g())==null?void 0:Pe(le,ve)},p),mc(T,le=>d(le),()=>d());let ne;se(()=>ne=ze(T,ne,{role:v(),...n,class:k(O)},void 0,T.namespaceURI===no,T.nodeName.includes("-"))),Ys(3,T,A,R),B("click",T,function(le){F.call(this,e,le)}),B("mouseenter",T,function(le){F.call(this,e,le)}),B("mouseleave",T,function(le){F.call(this,e,le)}),B("focusin",T,function(le){F.call(this,e,le)}),B("focusout",T,function(le){F.call(this,e,le)});var ae=_e(),te=Q(ae);me(te,e,"default",{},null),S(w,ae)}),S(y,b)},m=y=>{var b=_e(),I=Q(b);{var T=w=>{var ne=_e(),ae=Q(ne);Ta(ae,i,!1,(te,le)=>{gc(te,(ie,ee)=>{var Ee;return(Ee=g())==null?void 0:Ee(ie,ee)},p),mc(te,ie=>d(ie),()=>d());let ve;se(()=>ve=ze(te,ve,{role:v(),...n,class:k(O)},void 0,te.namespaceURI===no,te.nodeName.includes("-"))),B("click",te,function(ie){F.call(this,e,ie)}),B("mouseenter",te,function(ie){F.call(this,e,ie)}),B("mouseleave",te,function(ie){F.call(this,e,ie)}),B("focusin",te,function(ie){F.call(this,e,ie)}),B("focusout",te,function(ie){F.call(this,e,ie)});var Pe=_e(),at=Q(Pe);me(at,e,"default",{},null),S(le,Pe)}),S(w,ne)};he(I,w=>{P()&&w(T)},!0)}S(y,b)};he(M,y=>{A()&&P()?y(E):y(m,!1)})}S(r,L),Ue()}function Hy(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["transition","params","open"]);let s=U(e,"transition",8,Xs),i=U(e,"params",24,()=>({})),o=U(e,"open",12,!0);function l(c){c!=null&&c.stopPropagation&&c.stopPropagation(),o(!1)}Cg(r,yi({get transition(){return s()},get params(){return i()}},()=>n,{get open(){return o()},set open(c){o(c)},$$events:{show(c){F.call(this,e,c)}},children:(c,u)=>{var d=_e(),g=Q(d);me(g,e,"default",{close:l},null),S(c,d)},$$slots:{default:!0},$$legacy:!0}))}var Ky=W('<span class="sr-only"> </span>'),Qy=W("<a><!> <!></a>"),Yy=W('<span class="sr-only"> </span>'),Jy=W("<button><!> <!></button>");function Xy(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["color","name","ariaLabel","size","href"]);Me(e,!1);let s=U(e,"color",8,"default"),i=U(e,"name",24,()=>{}),o=U(e,"ariaLabel",24,()=>{}),l=U(e,"size",8,"md"),c=U(e,"href",24,()=>{});const u=Xe("background"),d={dark:"text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",gray:"text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",red:"text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",yellow:"text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",green:"text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",indigo:"text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",purple:"text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",pink:"text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",blue:"text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",primary:"text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",default:"focus:ring-gray-400 hover:bg-gray-100"},g={xs:"m-0.5 rounded-sm focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"m-0.5 rounded-lg focus:ring-2 p-1.5",lg:"m-0.5 rounded-lg focus:ring-2 p-2.5"};let p=re();const v={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-5 h-5"};we(()=>(X(l()),X(s()),X(t)),()=>{G(p,xe("focus:outline-none whitespace-normal",g[l()],d[s()],s()==="default"&&(u?"dark:hover:bg-gray-600":"dark:hover:bg-gray-700"),t.class))}),Dt(),je();var A=_e(),R=Q(A);{var P=x=>{var C=Qy();let O;var L=H(C);{var M=m=>{var y=Ky(),b=H(y);se(()=>rt(b,i())),S(m,y)};he(L,m=>{i()&&m(M)})}var E=z(L,2);me(E,e,"default",{get svgSize(){return v[l()]}},null),se(()=>O=ze(C,O,{href:c(),...n,class:k(p),"aria-label":o()??i()})),S(x,C)},N=x=>{var C=Jy();let O;var L=H(C);{var M=m=>{var y=Yy(),b=H(y);se(()=>rt(b,i())),S(m,y)};he(L,m=>{i()&&m(M)})}var E=z(L,2);me(E,e,"default",{get svgSize(){return v[l()]}},null),se(()=>O=ze(C,O,{type:"button",...n,class:k(p),"aria-label":o()??i()})),B("click",C,function(m){F.call(this,e,m)}),S(x,C)};he(R,x=>{c()?x(P):x(N,!1)})}S(r,A),Ue()}var Zy=Ao('<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>');function Sg(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["name"]);Me(e,!1);let s=U(e,"name",8,"Close");je();var i=ft(()=>xe("ms-auto",t.class));Xy(r,yi({get name(){return s()}},()=>n,{get class(){return k(i)},$$events:{click(o){F.call(this,e,o)}},children:ru,$$slots:{default:(o,l)=>{const c=ft(()=>l.svgSize);var u=Zy();se(()=>_g(u,k(c))),S(o,u)}}})),Ue()}var e0=W("<div><!></div>"),t0=W("<!> <!> <!>",1);function lu(r,e){const t=ko(e),n=de(e,["children","$$slots","$$events","$$legacy"]),s=de(n,["dismissable","defaultClass"]);Me(e,!1);let i=U(e,"dismissable",8,!1),o=U(e,"defaultClass",8,"p-4 gap-3 text-sm"),l=re();we(()=>(X(o()),X(i()),X(n)),()=>{G(l,xe(o(),(t.icon||i())&&"flex items-center",n.class))}),Dt(),je(),Hy(r,yi({get dismissable(){return i()},color:"primary",role:"alert",rounded:!0},()=>s,{get class(){return k(l)},$$events:{close(c){F.call(this,e,c)}},children:ru,$$slots:{default:(c,u)=>{const d=ft(()=>u.close);var g=t0(),p=Q(g);{var v=C=>{var O=_e(),L=Q(O);me(L,e,"icon",{},null),S(C,O)};he(p,C=>{t.icon&&C(v)})}var A=z(p,2);{var R=C=>{var O=e0(),L=H(O);me(L,e,"default",{},null),S(C,O)},P=C=>{var O=_e(),L=Q(O);me(L,e,"default",{},null),S(C,O)};he(A,C=>{t.icon||i()?C(R):C(P,!1)})}var N=z(A,2);{var x=C=>{var O=_e(),L=Q(O);me(L,e,"close-button",{get close(){return k(d)}},M=>{Sg(M,{class:"ms-auto -me-1.5 -my-1.5 dark:hover:bg-gray-700",get color(){return s.color},$$events:{click:[function(...E){var m;(m=k(d))==null||m.apply(this,E)},function(E){F.call(this,e,E)}],change(E){F.call(this,e,E)},keydown(E){F.call(this,e,E)},keyup(E){F.call(this,e,E)},focus(E){F.call(this,e,E)},blur(E){F.call(this,e,E)},mouseenter(E){F.call(this,e,E)},mouseleave(E){F.call(this,e,E)}}})}),S(C,O)};he(N,C=>{i()&&C(x)})}S(c,g)}}})),Ue()}var r0=W("<a><!></a>"),n0=W("<label><!></label>"),s0=W("<button><!></button>");function bt(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["pill","outline","size","href","type","color","shadow","tag","checked","disabled"]);Me(e,!1);const s=Xe("group");let i=U(e,"pill",8,!1),o=U(e,"outline",8,!1),l=U(e,"size",8,s?"sm":"md"),c=U(e,"href",24,()=>{}),u=U(e,"type",8,"button"),d=U(e,"color",24,()=>s?o()?"dark":"alternative":"primary"),g=U(e,"shadow",8,!1),p=U(e,"tag",8,"button"),v=U(e,"checked",24,()=>{}),A=U(e,"disabled",8,!1);const R={alternative:"text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700",blue:"text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",dark:"text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",green:"text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",light:"text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",primary:"text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",purple:"text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",red:"text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",yellow:"text-white bg-yellow-400 hover:bg-yellow-500 ",none:""},P={alternative:"text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",blue:"text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",dark:"text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",green:"text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",light:"text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",primary:"text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",purple:"text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",red:"text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",yellow:"text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",none:""},N={alternative:"focus-within:ring-gray-200 dark:focus-within:ring-gray-700",blue:"focus-within:ring-blue-300 dark:focus-within:ring-blue-800",dark:"focus-within:ring-gray-300 dark:focus-within:ring-gray-700",green:"focus-within:ring-green-300 dark:focus-within:ring-green-800",light:"focus-within:ring-gray-200 dark:focus-within:ring-gray-700",primary:"focus-within:ring-primary-300 dark:focus-within:ring-primary-800",purple:"focus-within:ring-purple-300 dark:focus-within:ring-purple-900",red:"focus-within:ring-red-300 dark:focus-within:ring-red-900",yellow:"focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",none:""},x={alternative:"shadow-gray-500/50 dark:shadow-gray-800/80",blue:"shadow-blue-500/50 dark:shadow-blue-800/80",dark:"shadow-gray-500/50 dark:shadow-gray-800/80",green:"shadow-green-500/50 dark:shadow-green-800/80",light:"shadow-gray-500/50 dark:shadow-gray-800/80",primary:"shadow-primary-500/50 dark:shadow-primary-800/80",purple:"shadow-purple-500/50 dark:shadow-purple-800/80",red:"shadow-red-500/50 dark:shadow-red-800/80 ",yellow:"shadow-yellow-500/50 dark:shadow-yellow-800/80 ",none:""},C={alternative:"text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",blue:"text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",dark:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",green:"text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",light:"text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",primary:"text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",purple:"text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",red:"text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",yellow:"text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",none:""},O={xs:"px-3 py-2 text-xs",sm:"px-4 py-2 text-sm",md:"px-5 py-2.5 text-sm",lg:"px-5 py-3 text-base",xl:"px-6 py-3.5 text-base"},L=()=>o()||d()==="alternative"||d()==="light";let M=re();we(()=>(X(l()),X(o()),X(v()),X(d()),X(i()),X(g()),X(A()),X(t)),()=>{G(M,xe("text-center font-medium",s?"focus-within:ring-2":"focus-within:ring-4",s&&"focus-within:z-10",s||"focus-within:outline-none","inline-flex items-center justify-center "+O[l()],o()&&v()&&"border dark:border-gray-900",o()&&v()&&P[d()],o()&&!v()&&C[d()],!o()&&v()&&P[d()],!o()&&!v()&&R[d()],d()==="alternative"&&(s&&!v()?"dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600":"dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600"),o()&&d()==="dark"&&(s?v()?"bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600":"dark:text-white border-gray-800 dark:border-white":"dark:text-gray-400 dark:border-gray-700"),N[d()],L()&&s&&"[&:not(:first-child)]:-ms-px",s?i()&&"first:rounded-s-full last:rounded-e-full"||"first:rounded-s-lg last:rounded-e-lg":i()&&"rounded-full"||"rounded-lg",g()&&"shadow-lg",g()&&x[d()],A()&&"cursor-not-allowed opacity-50",t.class))}),Dt(),je();var E=_e(),m=Q(E);{var y=I=>{var T=r0();let w;var ne=H(T);me(ne,e,"default",{},null),se(()=>w=ze(T,w,{href:c(),...n,class:k(M),role:"button"})),B("click",T,function(ae){F.call(this,e,ae)}),B("change",T,function(ae){F.call(this,e,ae)}),B("keydown",T,function(ae){F.call(this,e,ae)}),B("keyup",T,function(ae){F.call(this,e,ae)}),B("touchstart",T,function(ae){F.call(this,e,ae)},void 0,!0),B("touchend",T,function(ae){F.call(this,e,ae)}),B("touchcancel",T,function(ae){F.call(this,e,ae)}),B("mouseenter",T,function(ae){F.call(this,e,ae)}),B("mouseleave",T,function(ae){F.call(this,e,ae)}),S(I,T)},b=I=>{var T=_e(),w=Q(T);{var ne=te=>{var le=n0();let ve;var Pe=H(le);me(Pe,e,"default",{},null),se(()=>ve=ze(le,ve,{...n,class:k(M)})),S(te,le)},ae=te=>{var le=_e(),ve=Q(le);{var Pe=ie=>{var ee=s0();let Ee;var j=H(ee);me(j,e,"default",{},null),se(()=>Ee=ze(ee,Ee,{type:u(),...n,disabled:A(),class:k(M)})),B("click",ee,function(Y){F.call(this,e,Y)}),B("change",ee,function(Y){F.call(this,e,Y)}),B("keydown",ee,function(Y){F.call(this,e,Y)}),B("keyup",ee,function(Y){F.call(this,e,Y)}),B("touchstart",ee,function(Y){F.call(this,e,Y)},void 0,!0),B("touchend",ee,function(Y){F.call(this,e,Y)}),B("touchcancel",ee,function(Y){F.call(this,e,Y)}),B("mouseenter",ee,function(Y){F.call(this,e,Y)}),B("mouseleave",ee,function(Y){F.call(this,e,Y)}),S(ie,ee)},at=ie=>{var ee=_e(),Ee=Q(ee);Ta(Ee,p,!1,(j,Y)=>{let lt;se(()=>lt=ze(j,lt,{...n,class:k(M)},void 0,j.namespaceURI===no,j.nodeName.includes("-")));var lr=_e(),Tr=Q(lr);me(Tr,e,"default",{},null),S(Y,lr)}),S(ie,ee)};he(ve,ie=>{p()==="button"?ie(Pe):ie(at,!1)},!0)}S(te,le)};he(w,te=>{p()==="label"?te(ne):te(ae,!1)},!0)}S(I,T)};he(m,I=>{c()&&!A()?I(y):I(b,!1)})}S(r,E),Ue()}var i0=W("<div><!></div>");function o0(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["size","divClass"]);Me(e,!1);let s=U(e,"size",8,"md"),i=U(e,"divClass",8,"inline-flex rounded-lg shadow-sm");xr("group",{size:s()}),je();var o=i0();let l;var c=H(o);me(c,e,"default",{},null),se(()=>l=ze(o,l,{...n,class:xe(i(),t.class),role:"group"})),S(r,o),Ue()}var a0=W('<img alt=""> <div><!></div>',1);function pn(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["href","horizontal","reverse","img","padding","size","imgClass"]);Me(e,!1);let s=U(e,"href",24,()=>{}),i=U(e,"horizontal",8,!1),o=U(e,"reverse",8,!1),l=U(e,"img",24,()=>{}),c=U(e,"padding",8,"lg"),u=U(e,"size",8,"sm"),d=U(e,"imgClass",8,"");const g={none:"",xs:"p-2",sm:"p-4",md:"p-4 sm:p-5",lg:"p-4 sm:p-6",xl:"p-4 sm:p-8"},p={none:"",xs:"max-w-xs",sm:"max-w-sm",md:"max-w-xl",lg:"max-w-2xl",xl:"max-w-screen-xl"};let v=re(),A=re(),R=re();we(()=>X(c()),()=>{G(v,g[c()])}),we(()=>(X(u()),X(o()),X(i()),X(s()),X(l()),k(v),X(t)),()=>{G(A,xe("flex w-full",p[u()],o()?"flex-col-reverse":"flex-col",i()&&(o()?"md:flex-row-reverse":"md:flex-row"),s()&&"hover:bg-gray-100 dark:hover:bg-gray-700",!l()&&k(v),t.class))}),we(()=>(X(o()),X(i()),X(d())),()=>{G(R,xe(o()?"rounded-b-lg":"rounded-t-lg",i()&&"object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none",i()&&(o()?"md:rounded-e-lg":"md:rounded-s-lg"),d()))}),Dt(),je();var P=ft(()=>s()?"a":"div");Cg(r,yi({get tag(){return k(P)},rounded:!0,shadow:!0,border:!0,get href(){return s()}},()=>n,{get class(){return k(A)},$$events:{click(N){F.call(this,e,N)},focusin(N){F.call(this,e,N)},focusout(N){F.call(this,e,N)},mouseenter(N){F.call(this,e,N)},mouseleave(N){F.call(this,e,N)}},children:(N,x)=>{var C=_e(),O=Q(C);{var L=E=>{var m=a0(),y=Q(m),b=z(y,2),I=H(b);me(I,e,"default",{},null),se(()=>{gr(y,k(R)),yn(y,"src",l()),gr(b,k(v))}),S(E,m)},M=E=>{var m=_e(),y=Q(m);me(y,e,"default",{},null),S(E,m)};he(O,E=>{l()?E(L):E(M,!1)})}S(N,C)},$$slots:{default:!0}})),Ue()}function vc(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["tag","show","use"]);let s=U(e,"tag",8,"div"),i=U(e,"show",8),o=U(e,"use",8,()=>{});var l=_e(),c=Q(l);{var u=g=>{var p=_e(),v=Q(p);Ta(v,s,!1,(A,R)=>{gc(A,C=>{var O;return(O=o())==null?void 0:O(C)});let P;se(()=>P=ze(A,P,{...n},void 0,A.namespaceURI===no,A.nodeName.includes("-")));var N=_e(),x=Q(N);me(x,e,"default",{},null),S(R,N)}),S(g,p)},d=g=>{var p=_e(),v=Q(p);me(v,e,"default",{},null),S(g,p)};he(c,g=>{i()?g(u):g(d,!1)})}S(r,l)}var l0=W("<label><!></label>");function mr(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["color","defaultClass","show"]);Me(e,!1);const s=re();let i=U(e,"color",12,"gray"),o=U(e,"defaultClass",8,"text-sm rtl:text-right font-medium block"),l=U(e,"show",8,!0),c=re();const u={gray:"text-gray-900 dark:text-gray-300",green:"text-green-700 dark:text-green-500",red:"text-red-700 dark:text-red-500",disabled:"text-gray-400 dark:text-gray-500 grayscale contrast-50"};we(()=>(k(c),X(i())),()=>{var R;const A=(R=k(c))==null?void 0:R.control;i(A!=null&&A.disabled?"disabled":i())}),we(()=>(X(o()),X(i()),X(t)),()=>{G(s,xe(o(),u[i()],t.class))}),Dt(),je();var d=_e(),g=Q(d);{var p=A=>{var R=l0();let P;var N=H(R);me(N,e,"default",{},null),mc(R,x=>G(c,x),()=>k(c)),se(()=>P=ze(R,P,{...n,class:k(s)})),S(A,R)},v=A=>{var R=_e(),P=Q(R);me(P,e,"default",{},null),S(A,R)};he(g,A=>{l()?A(p):A(v,!1)})}S(r,d),Ue()}const c0={primary:"text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",secondary:"text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",red:"text-red-600 focus:ring-red-500 dark:focus:ring-red-600",green:"text-green-600 focus:ring-green-500 dark:focus:ring-green-600",purple:"text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",teal:"text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",yellow:"text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",orange:"text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",blue:"text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"},nd=(r,e)=>xe(r?"inline-flex":"flex","items-center",e),sd=(r,e,t,n,s,i)=>xe("w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",s,n?"dark:bg-gray-600 dark:border-gray-500":"dark:bg-gray-700 dark:border-gray-600",r&&"sr-only peer","rounded",c0[e],i);var u0=W(" <input> <!>",1),h0=W("<input> <!>",1);function d0(r,e){const t=ko(e),n=de(e,["children","$$slots","$$events","$$legacy"]),s=de(n,["color","custom","inline","group","choices","value","checked","spacing","groupLabelClass","groupInputClass"]);Me(e,!1);const i=[];let o=U(e,"color",8,"primary"),l=U(e,"custom",8,!1),c=U(e,"inline",8,!1),u=U(e,"group",28,()=>[]),d=U(e,"choices",24,()=>[]),g=U(e,"value",8,"on"),p=U(e,"checked",28,()=>{}),v=U(e,"spacing",24,()=>t.default?"me-2":""),A=U(e,"groupLabelClass",8,""),R=U(e,"groupInputClass",8,""),P=Xe("background");je();var N=_e(),x=Q(N);{var C=L=>{var M=_e(),E=Q(M);Qs(E,1,d,Ks,(y,b,I)=>{let T=()=>k(b).value,w=()=>k(b).label;var ne=ft(()=>nd(c(),A()));mr(y,{get class(){return k(ne)},show:t.default,for:`checkbox-${I}`,children:(ae,te)=>{var le=u0(),ve=Q(le),Pe=z(ve);let at;var ie=z(Pe,2);me(ie,e,"default",{},null),se(()=>{rt(ve,`${w()??""} `),at=ze(Pe,at,{id:`checkbox-${I}`,type:"checkbox",value:T(),...s,class:sd(l(),o(),!0,P,v(),R())})}),sy(i,[],Pe,()=>(T(),u()),u),S(ae,le)},$$slots:{default:!0}})}),S(L,M)},O=L=>{var M=ft(()=>nd(c(),n.class));mr(L,{get class(){return k(M)},show:t.default,children:(E,m)=>{var y=h0(),b=Q(y);let I;var T=z(b,2);me(T,e,"default",{},null),se(()=>I=ze(b,I,{type:"checkbox",value:g(),...s,class:sd(l(),o(),!0,P,v(),t.default||n.class)})),iy(b,p),B("keyup",b,function(w){F.call(this,e,w)}),B("keydown",b,function(w){F.call(this,e,w)}),B("keypress",b,function(w){F.call(this,e,w)}),B("focus",b,function(w){F.call(this,e,w)}),B("blur",b,function(w){F.call(this,e,w)}),B("click",b,function(w){F.call(this,e,w)}),B("mouseover",b,function(w){F.call(this,e,w)}),B("mouseenter",b,function(w){F.call(this,e,w)}),B("mouseleave",b,function(w){F.call(this,e,w)}),B("paste",b,function(w){F.call(this,e,w)}),B("change",b,function(w){F.call(this,e,w)}),S(E,y)},$$slots:{default:!0}})};he(x,L=>{d().length>0?L(C):L(O,!1)})}S(r,N),Ue()}function yc(r){return r&&r==="xs"?"sm":r==="xl"?"lg":r}var f0=W("<div><!></div>"),g0=W("<input>"),p0=W("<div><!></div>"),m0=W("<!> <!> <!> <!>",1);function Wr(r,e){const t=ko(e),n=de(e,["children","$$slots","$$events","$$legacy"]),s=de(n,["type","value","size","clearable","defaultClass","color","floatClass","classLeft","classRight"]);Me(e,!1);const i=re();let o=U(e,"type",8,"text"),l=U(e,"value",28,()=>{}),c=U(e,"size",24,()=>{}),u=U(e,"clearable",8,!1),d=U(e,"defaultClass",8,"block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right"),g=U(e,"color",8,"base"),p=U(e,"floatClass",8,"flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400"),v=U(e,"classLeft",8,""),A=U(e,"classRight",8,"");const R=Eg(),P={base:"border border-gray-300 dark:border-gray-600",tinted:"border border-gray-300 dark:border-gray-500",green:"border border-green-500 dark:border-green-400",red:"border border-red-500 dark:border-red-400"},N={base:"focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",green:"focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",red:"focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"},x={base:"bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",tinted:"bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",green:"bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",red:"bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"};let C=Xe("background"),O=Xe("group");const L={sm:"sm:text-xs",md:"text-sm",lg:"sm:text-base"},M={sm:"ps-9",md:"ps-10",lg:"ps-11"},E={sm:"pe-9",md:"pe-10",lg:"pe-11"},m={sm:"p-2",md:"p-2.5",lg:"p-3"};let y=re();const b=I=>{I.stopPropagation(),l(void 0),R("change")};we(()=>X(c()),()=>{G(i,c()||yc(O==null?void 0:O.size)||"md")}),we(()=>(X(g()),X(d()),k(i),X(u()),X(n)),()=>{const I=g()==="base"&&C?"tinted":g();G(y,xe([d(),m[k(i)],t.left&&M[k(i)]||(u()||t.right)&&E[k(i)],N[g()],x[I],P[I],L[k(i)],O||"rounded-lg",O&&"first:rounded-s-lg last:rounded-e-lg",O&&"[&:not(:first-child)]:-ms-px",n.class]))}),Dt(),je(),vc(r,{class:"relative w-full",show:t.left||t.right,children:(I,T)=>{var w=m0(),ne=Q(w);{var ae=ie=>{var ee=f0();const Ee=ft(()=>`${xe(p(),v())??""} start-0 ps-2.5 pointer-events-none`);var j=H(ee);me(j,e,"left",{},null),se(()=>gr(ee,k(Ee))),S(ie,ee)};he(ne,ie=>{t.left&&ie(ae)})}var te=z(ne,2);me(te,e,"default",{get props(){return{...s,class:k(y)}}},ie=>{var ee=g0();let Ee;se(()=>Ee=ze(ee,Ee,{...s,type:o(),class:k(y)})),el(ee,l),B("blur",ee,function(j){F.call(this,e,j)}),B("change",ee,function(j){F.call(this,e,j)}),B("click",ee,function(j){F.call(this,e,j)}),B("contextmenu",ee,function(j){F.call(this,e,j)}),B("focus",ee,function(j){F.call(this,e,j)}),B("keydown",ee,function(j){F.call(this,e,j)}),B("keypress",ee,function(j){F.call(this,e,j)}),B("keyup",ee,function(j){F.call(this,e,j)}),B("mouseover",ee,function(j){F.call(this,e,j)}),B("mouseenter",ee,function(j){F.call(this,e,j)}),B("mouseleave",ee,function(j){F.call(this,e,j)}),B("paste",ee,function(j){F.call(this,e,j)}),B("input",ee,function(j){F.call(this,e,j)}),S(ie,ee)});var le=z(te,2);{var ve=ie=>{var ee=p0();const Ee=ft(()=>`${xe(p(),A())??""} end-0 pe-2.5`);var j=H(ee);me(j,e,"right",{},null),se(()=>gr(ee,k(Ee))),S(ie,ee)};he(le,ie=>{t.right&&ie(ve)})}var Pe=z(le,2);{var at=ie=>{var ee=ft(()=>` ${xe(p(),A())??""} focus:ring-0 end-6 focus:ring-gray-400 dark:text-white`);Sg(ie,{get size(){return c()},color:"none",get class(){return k(ee)},$$events:{click:b}})};he(Pe,ie=>{u()&&l()&&`${l()}`.length>0&&ie(at)})}S(I,w)},$$slots:{default:!0}}),Ue()}var _0=W("<div><!></div>");function v0(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["size"]);Me(e,!1);const s=re(),i=re();let o=U(e,"size",24,()=>{}),l=Xe("background"),c=Xe("group");const u={base:"border-gray-300 dark:border-gray-600",tinted:"border-gray-300 dark:border-gray-500"},d={base:"dark:bg-gray-600 dark:text-gray-400",tinted:"dark:bg-gray-500 dark:text-gray-300"},g={base:"dark:border-e-gray-700 dark:last:border-e-gray-600",tinted:"dark:border-e-gray-600 dark:last:border-e-gray-500"},p={sm:"sm:text-xs",md:"text-sm",lg:"sm:text-base"},v={sm:"px-2",md:"px-3",lg:"px-4"};we(()=>(X(o()),yc),()=>{G(s,o()||yc(c==null?void 0:c.size)||"md")}),we(()=>(k(s),X(t)),()=>{G(i,xe(p[k(s)],v[k(s)],"text-gray-500 bg-gray-200",l?d.tinted:d.base,l?g.tinted:g.base,l?u.tinted:u.base,"inline-flex items-center border",c&&"[&:not(:first-child)]:-ms-px","first:rounded-s-lg last:rounded-e-lg",t.class))}),Dt(),je();var A=_0();let R;var P=H(A);me(P,e,"default",{},null),se(()=>R=ze(A,R,{...n,class:k(i)})),S(r,A),Ue()}var y0=W("<input>");function Fl(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["value"]);let s=U(e,"value",12,0);Wr(r,yi(()=>n,{children:ru,$$slots:{default:(i,o)=>{const l=ft(()=>o.props);var c=y0();let u;se(()=>u=ze(c,u,{...k(l),type:"number"})),el(c,s),B("blur",c,function(d){F.call(this,e,d)}),B("change",c,function(d){F.call(this,e,d)}),B("click",c,function(d){F.call(this,e,d)}),B("contextmenu",c,function(d){F.call(this,e,d)}),B("focus",c,function(d){F.call(this,e,d)}),B("keydown",c,function(d){F.call(this,e,d)}),B("keypress",c,function(d){F.call(this,e,d)}),B("keyup",c,function(d){F.call(this,e,d)}),B("mouseover",c,function(d){F.call(this,e,d)}),B("mouseenter",c,function(d){F.call(this,e,d)}),B("mouseleave",c,function(d){F.call(this,e,d)}),B("paste",c,function(d){F.call(this,e,d)}),B("input",c,function(d){F.call(this,e,d)}),S(i,c)}}}))}var w0=W("<div><!></div>"),b0=W("<textarea></textarea>"),E0=W("<div><!></div>"),I0=W("<!> <!> <!>",1);function T0(r,e){const t=ko(e),n=de(e,["children","$$slots","$$events","$$legacy"]),s=de(n,["value","wrappedClass","unWrappedClass","innerWrappedClass","headerClass","footerClass"]);Me(e,!1);const i=re();let o=U(e,"value",28,()=>{}),l=U(e,"wrappedClass",8,"block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"),c=U(e,"unWrappedClass",8,"p-2.5 text-sm focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50"),u=U(e,"innerWrappedClass",8,"py-2 px-4 bg-white dark:bg-gray-800"),d=U(e,"headerClass",8,""),g=U(e,"footerClass",8,"");const p=Xe("background");let v=re(),A=re();const R=N=>xe(N?"border-b":"border-t","py-2 px-3 border-gray-200",p?"dark:border-gray-500":"dark:border-gray-600",N?d():g());let P=re();we(()=>{},()=>{G(v,t.header||t.footer)}),we(()=>X(n),()=>{G(A,xe("w-full rounded-lg bg-gray-50",p?"dark:bg-gray-600":"dark:bg-gray-700","text-gray-900 dark:placeholder-gray-400 dark:text-white","border border-gray-200",p?"dark:border-gray-500":"dark:border-gray-600",n.class))}),we(()=>(k(v),X(l()),k(A),X(c())),()=>{G(i,k(v)?l():xe(k(A),c()))}),we(()=>X(u()),()=>{G(P,xe(u(),t.footer?"":"rounded-b-lg",t.header?"":"rounded-t-lg"))}),Dt(),je(),vc(r,{get show(){return k(v)},get class(){return k(A)},children:(N,x)=>{var C=I0(),O=Q(C);{var L=y=>{var b=w0();const I=ft(()=>R(!0));var T=H(b);me(T,e,"header",{},null),se(()=>gr(b,k(I))),S(y,b)};he(O,y=>{t.header&&y(L)})}var M=z(O,2);vc(M,{get show(){return k(v)},get class(){return k(P)},children:(y,b)=>{var I=b0();let T;se(()=>T=ze(I,T,{...s,class:k(i)})),el(I,o),B("blur",I,function(w){F.call(this,e,w)}),B("change",I,function(w){F.call(this,e,w)}),B("click",I,function(w){F.call(this,e,w)}),B("contextmenu",I,function(w){F.call(this,e,w)}),B("focus",I,function(w){F.call(this,e,w)}),B("input",I,function(w){F.call(this,e,w)}),B("keydown",I,function(w){F.call(this,e,w)}),B("keypress",I,function(w){F.call(this,e,w)}),B("keyup",I,function(w){F.call(this,e,w)}),B("mouseenter",I,function(w){F.call(this,e,w)}),B("mouseleave",I,function(w){F.call(this,e,w)}),B("mouseover",I,function(w){F.call(this,e,w)}),B("paste",I,function(w){F.call(this,e,w)}),B("select",I,function(w){F.call(this,e,w)}),S(y,I)},$$slots:{default:!0}});var E=z(M,2);{var m=y=>{var b=E0();const I=ft(()=>R(!1));var T=H(b);me(T,e,"footer",{},null),se(()=>gr(b,k(I))),S(y,b)};he(E,y=>{t.footer&&y(m)})}S(N,C)},$$slots:{default:!0}}),Ue()}var A0=W("<!> <span></span> <!>",1);function k0(r,e){const t=ko(e),n=de(e,["children","$$slots","$$events","$$legacy"]),s=de(n,["size","group","value","checked","customSize","classDiv","disabled"]);Me(e,!1);let i=U(e,"size",8,"default"),o=U(e,"group",28,()=>[]),l=U(e,"value",8,""),c=U(e,"checked",28,()=>{}),u=U(e,"customSize",8,""),d=U(e,"classDiv",8,""),g=U(e,"disabled",8,!1),p=Xe("background");const v="me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all",A={primary:"peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600",secondary:"peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600",red:"peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",green:"peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",purple:"peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",yellow:"peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",teal:"peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",orange:"peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",blue:"peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"},R={small:"w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4",default:"w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5",large:"w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6",custom:u()};let P=re(),N=re();we(()=>(X(s),X(i()),X(d())),()=>{G(P,xe(v,t.offLabel?"ms-3":"",p?"dark:bg-gray-600 dark:border-gray-500":"dark:bg-gray-700 dark:border-gray-600",A[s.color??"primary"],R[i()],"relative",d()))}),we(()=>X(g()),()=>{G(N,g()?"cursor-not-allowed grayscale contrast-50 text-gray-400":"cursor-pointer text-gray-900")}),Dt(),je();var x=ft(()=>xe(k(N),n.class));d0(r,yi({custom:!0},()=>s,{get disabled(){return g()},get class(){return k(x)},get value(){return l()},get checked(){return c()},set checked(C){c(C)},get group(){return o()},set group(C){o(C)},$$events:{click(C){F.call(this,e,C)},change(C){F.call(this,e,C)}},children:(C,O)=>{var L=A0(),M=Q(L);me(M,e,"offLabel",{},null);var E=z(M,2),m=z(E,2);me(m,e,"default",{},null),se(()=>gr(E,k(P))),S(C,L)},$$slots:{default:!0},$$legacy:!0})),Ue()}var R0=Ao('<svg><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"></path></svg>');function xg(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["color","bg","customColor","size","currentFill","currentColor"]);Me(e,!1);let s=U(e,"color",12,"primary"),i=U(e,"bg",8,"text-gray-300"),o=U(e,"customColor",8,""),l=U(e,"size",8,"8"),c=U(e,"currentFill",8,"currentFill"),u=U(e,"currentColor",8,"currentColor"),d=`w-${l()} h-${l()}`;c()!=="currentFill"&&s(void 0);const g={primary:"fill-primary-600",blue:"fill-blue-600",gray:"fill-gray-600 dark:fill-gray-300",green:"fill-green-500",red:"fill-red-600",yellow:"fill-yellow-400",pink:"fill-pink-600",purple:"fill-purple-600",white:"fill-white",custom:o()};let p=s()===void 0?"":g[s()]??g.blue;je();var v=R0();let A;var R=H(v),P=z(R);se(()=>{A=ze(v,A,{...n,role:"status",class:xe("inline -mt-px animate-spin dark:text-gray-600",d,i(),p,t.class),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},void 0,!0),yn(R,"fill",u()),yn(P,"fill",c())}),S(r,v),Ue()}var P0=Ao('<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>'),C0=W('<div><label for="table-search" class="sr-only">Search</label> <div><div><!></div> <input type="text" id="table-search"></div> <!></div>'),S0=W("<div><!> <table><!></table></div>");function Bl(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["divClass","striped","hoverable","noborder","shadow","color","customeColor","items","filter","placeholder","innerDivClass","searchClass","svgDivClass","svgClass","inputClass","classInput","classSvgDiv"]);Me(e,!1);let s=U(e,"divClass",8,"relative overflow-x-auto"),i=U(e,"striped",8,!1),o=U(e,"hoverable",8,!1),l=U(e,"noborder",8,!1),c=U(e,"shadow",8,!1),u=U(e,"color",8,"default"),d=U(e,"customeColor",8,""),g=U(e,"items",24,()=>[]),p=U(e,"filter",8,null),v=U(e,"placeholder",8,"Search"),A=U(e,"innerDivClass",8,"p-4"),R=U(e,"searchClass",8,"relative mt-1"),P=U(e,"svgDivClass",8,"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"),N=U(e,"svgClass",8,"w-5 h-5 text-gray-500 dark:text-gray-400"),x=U(e,"inputClass",8,"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),C=U(e,"classInput",8,""),O=U(e,"classSvgDiv",8,""),L=re(""),M=xe(x(),C()),E=xe(P(),O());const m={default:"text-gray-500 dark:text-gray-400",blue:"text-blue-100 dark:text-blue-100",green:"text-green-100 dark:text-green-100",red:"text-red-100 dark:text-red-100",yellow:"text-yellow-100 dark:text-yellow-100",purple:"text-purple-100 dark:text-purple-100",indigo:"text-indigo-100 dark:text-indigo-100",pink:"text-pink-100 dark:text-pink-100",custom:d()},y=Gn(k(L)),b=Gn(p());xr("searchTerm",y),xr("filter",b),xr("sorter",Gn(null)),we(()=>X(i()),()=>{xr("striped",i())}),we(()=>X(o()),()=>{xr("hoverable",o())}),we(()=>X(l()),()=>{xr("noborder",l())}),we(()=>X(u()),()=>{xr("color",u())}),we(()=>X(g()),()=>{xr("items",g())}),we(()=>k(L),()=>{y.set(k(L))}),we(()=>X(p()),()=>{p()&&b.set(p())}),Dt(),je();var I=S0();const T=ft(()=>Ag(s(),c()&&"shadow-md sm:rounded-lg"));var w=H(I);{var ne=ve=>{var Pe=_e(),at=Q(Pe);me(at,e,"search",{},ie=>{var ee=C0(),Ee=z(H(ee),2),j=H(Ee);gr(j,E);var Y=H(j);me(Y,e,"svgSearch",{},Tr=>{var cr=P0();se(()=>_g(cr,N())),S(Tr,cr)});var lt=z(j,2);gr(lt,M);var lr=z(Ee,2);me(lr,e,"header",{},null),se(()=>{gr(ee,A()),gr(Ee,R()),yn(lt,"placeholder",v())}),el(lt,()=>k(L),Tr=>G(L,Tr)),S(ie,ee)}),S(ve,Pe)};he(w,ve=>{p()&&ve(ne)})}var ae=z(w,2);let te;var le=H(ae);me(le,e,"default",{},null),se(()=>{gr(I,k(T)),te=ze(ae,te,{...n,class:xe("w-full text-left text-sm",m[u()],t.class)})}),S(r,I),Ue()}var x0=W("<tbody><!><!></tbody>");function $l(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["tableBodyClass"]);Me(e,!1);const s=bg(),i=()=>ca(p,"$filter",s),o=()=>ca(v,"$searchTerm",s),l=()=>ca(A,"$sorter",s),c=re(),u=re(),d=re();let g=U(e,"tableBodyClass",24,()=>{}),p=Xe("filter"),v=Xe("searchTerm"),A=Xe("sorter");we(()=>Xe,()=>{G(c,Xe("items")||[])}),we(()=>(i(),k(c),o()),()=>{G(u,i()?k(c).filter(C=>i()(C,o())):k(c))}),we(()=>(l(),k(u)),()=>{G(d,l()?k(u).toSorted((C,O)=>l().sortDirection*l().sort(C,O)):k(u))}),Dt(),je();var R=x0();let P;var N=H(R);me(N,e,"default",{},null);var x=z(N);Qs(x,1,()=>k(d),Ks,(C,O)=>{var L=_e(),M=Q(L);me(M,e,"row",{get item(){return k(O)}},null),S(C,L)}),se(()=>P=ze(R,P,{...n,class:g()})),S(r,R),Ue()}var D0=W("<button><!></button>"),N0=W("<td><!></td>");function Ht(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["tdClass"]);Me(e,!1);let s=U(e,"tdClass",8,"px-6 py-4 whitespace-nowrap font-medium "),i=re("default");G(i,Xe("color"));let o=re();we(()=>(X(s()),k(i),X(t)),()=>{G(o,xe(s(),k(i)==="default"?"text-gray-900 dark:text-white":"text-blue-50 whitespace-nowrap dark:text-blue-100",t.class))}),Dt(),je();var l=N0();let c;var u=H(l);{var d=p=>{var v=D0(),A=H(v);me(A,e,"default",{},null),B("click",v,function(...R){var P;(P=t.onclick)==null||P.apply(this,R)}),S(p,v)},g=p=>{var v=_e(),A=Q(v);me(A,e,"default",{},null),S(p,v)};he(u,p=>{t.onclick?p(d):p(g,!1)})}se(()=>c=ze(l,c,{...n,class:k(o)})),S(r,l),Ue()}var O0=W("<tr><!></tr>");function $i(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["color"]);Me(e,!1);let s=U(e,"color",24,()=>Xe("color"));const i={default:"bg-white dark:bg-gray-800 dark:border-gray-700",blue:"bg-blue-500 border-blue-400",green:"bg-green-500 border-green-400",red:"bg-red-500 border-red-400",yellow:"bg-yellow-500 border-yellow-400",purple:"bg-purple-500 border-purple-400",custom:""},o={default:"hover:bg-gray-50 dark:hover:bg-gray-600",blue:"hover:bg-blue-400",green:"hover:bg-green-400",red:"hover:bg-red-400",yellow:"hover:bg-yellow-400",purple:"hover:bg-purple-400",custom:""},l={default:"odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",blue:"odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",green:"odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",red:"odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",yellow:"odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",purple:"odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",custom:""};let c=re();we(()=>(X(s()),X(t)),()=>{G(c,xe([!Xe("noborder")&&"border-b last:border-b-0",i[s()],Xe("hoverable")&&o[s()],Xe("striped")&&l[s()],t.class]))}),Dt(),je();var u=O0();let d;var g=H(u);me(g,e,"default",{},null),se(()=>d=ze(u,d,{...n,class:k(c)})),B("click",u,function(p){F.call(this,e,p)}),B("contextmenu",u,function(p){F.call(this,e,p)}),B("dblclick",u,function(p){F.call(this,e,p)}),S(r,u),Ue()}var V0=W("<tr><!></tr>"),L0=W("<thead><!></thead>");function ql(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["theadClass","defaultRow"]);Me(e,!1);const s=re();let i=U(e,"theadClass",8,"text-xs uppercase"),o=U(e,"defaultRow",8,!0),l=re();G(l,Xe("color"));let c=Xe("noborder"),u=Xe("striped");const g={default:c||u?"":"bg-gray-50 dark:bg-gray-700",blue:"bg-blue-600",green:"bg-green-600",red:"bg-red-600",yellow:"bg-yellow-600",purple:"bg-purple-600",custom:""};let p=k(l)==="default"?"text-gray-700 dark:text-gray-400":k(l)==="custom"?"":"text-white  dark:text-white",v=u?"":k(l)==="default"?"border-gray-700":k(l)==="custom"?"":`border-${k(l)}-400`;we(()=>(X(i()),k(l),X(t)),()=>{G(s,xe(i(),p,u&&v,g[k(l)],t.class))}),Dt(),je();var A=L0();let R;var P=H(A);{var N=C=>{var O=V0(),L=H(O);me(L,e,"default",{},null),S(C,O)},x=C=>{var O=_e(),L=Q(O);me(L,e,"default",{},null),S(C,O)};he(P,C=>{o()?C(N):C(x,!1)})}se(()=>R=ze(A,R,{...n,class:k(s)})),S(r,A),Ue()}var M0=W("<th><button><!></button></th>"),U0=W("<th><!></th>");function Kt(r,e){const t=de(e,["children","$$slots","$$events","$$legacy"]),n=de(t,["padding","sort","defaultDirection","defaultSort","direction"]);Me(e,!1);const s=bg(),i=()=>ca(g,"$sorter",s);let o=U(e,"padding",8,"px-6 py-3"),l=U(e,"sort",8,null),c=U(e,"defaultDirection",8,"asc"),u=U(e,"defaultSort",8,!1),d=U(e,"direction",28,()=>u()?c():null),g=Xe("sorter"),p=Math.random().toString(36).substring(2);u()&&v();function v(){!l()||!g||g.update(x=>({id:p,sort:l(),sortDirection:(x==null?void 0:x.id)===p?-x.sortDirection:c()==="asc"?1:-1}))}we(()=>i(),()=>{var x;d(((x=i())==null?void 0:x.id)===p?i().sortDirection===1?"asc":"desc":null)}),Dt(),je();var A=_e(),R=Q(A);{var P=x=>{var C=M0();let O;var L=H(C);const M=ft(()=>xe("w-full text-left","after:absolute after:pl-3",d()==="asc"&&'after:content-["▲"]',d()==="desc"&&'after:content-["▼"]',o()));var E=H(L);me(E,e,"default",{},null),se(()=>{O=ze(C,O,{...n,class:t.class,"aria-sort":d()?`${d()}ending`:void 0}),gr(L,k(M))}),B("click",L,v),B("click",C,function(m){F.call(this,e,m)}),B("focus",C,function(m){F.call(this,e,m)}),B("keydown",C,function(m){F.call(this,e,m)}),B("keypress",C,function(m){F.call(this,e,m)}),B("keyup",C,function(m){F.call(this,e,m)}),B("mouseenter",C,function(m){F.call(this,e,m)}),B("mouseleave",C,function(m){F.call(this,e,m)}),B("mouseover",C,function(m){F.call(this,e,m)}),S(x,C)},N=x=>{var C=U0();let O;var L=H(C);me(L,e,"default",{},null),se(()=>O=ze(C,O,{...n,class:xe(o(),t.class)})),B("click",C,function(M){F.call(this,e,M)}),B("focus",C,function(M){F.call(this,e,M)}),B("keydown",C,function(M){F.call(this,e,M)}),B("keypress",C,function(M){F.call(this,e,M)}),B("keyup",C,function(M){F.call(this,e,M)}),B("mouseenter",C,function(M){F.call(this,e,M)}),B("mouseleave",C,function(M){F.call(this,e,M)}),B("mouseover",C,function(M){F.call(this,e,M)}),S(x,C)};he(R,x=>{l()&&g?x(P):x(N,!1)})}S(r,A),Ue()}var id={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},F0=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],l=r[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,l=o?r[s+1]:0,c=s+2<r.length,u=c?r[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let p=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),n.push(t[d],t[g],t[p],t[v])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Dg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):F0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],l=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const g=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||l==null||u==null||g==null)throw new B0;const p=i<<2|l>>4;if(n.push(p),u!==64){const v=l<<4&240|u>>2;if(n.push(v),g!==64){const A=u<<6&192|g;n.push(A)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class B0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $0=function(r){const e=Dg(r);return Ng.encodeByteArray(e,!0)},Aa=function(r){return $0(r).replace(/\./g,"")},Og=function(r){try{return Ng.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=()=>q0().__FIREBASE_DEFAULTS__,j0=()=>{if(typeof process>"u"||typeof id>"u")return;const r=id.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},G0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Og(r[1]);return e&&JSON.parse(e)},tl=()=>{try{return z0()||j0()||G0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Vg=r=>{var e,t;return(t=(e=tl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Lg=r=>{const e=Vg(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Mg=()=>{var r;return(r=tl())===null||r===void 0?void 0:r.config},Ug=r=>{var e;return(e=tl())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Aa(JSON.stringify(t)),Aa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function Q0(){var r;const e=(r=tl())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Y0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function J0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function X0(){const r=Gt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Z0(){return!Q0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bg(){try{return typeof indexedDB=="object"}catch{return!1}}function $g(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function ew(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="FirebaseError";class ar extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=tw,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?rw(i,n):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new ar(s,l,n)}}function rw(r,e){return r.replace(nw,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const nw=/\{\$([^}]+)}/g;function sw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ao(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(od(i)&&od(o)){if(!ao(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function od(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ji(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Gi(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function iw(r,e){const t=new ow(r,e);return t.subscribe.bind(t)}class ow{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");aw(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=zl),s.error===void 0&&(s.error=zl),s.complete===void 0&&(s.complete=zl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aw(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function zl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=1e3,cw=2,uw=4*60*60*1e3,hw=.5;function ad(r,e=lw,t=cw){const n=e*Math.pow(t,r),s=Math.round(hw*n*(Math.random()-.5)*2);return Math.min(uw,n+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(r){return r&&r._delegate?r._delegate:r}class Ir{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new W0;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gw(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:fw(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fw(r){return r===gs?void 0:r}function gw(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ie||(Ie={}));const mw={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},_w=Ie.INFO,vw={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},yw=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=vw[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rl{constructor(e){this.name=e,this._logLevel=_w,this._logHandler=yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const ww=(r,e)=>e.some(t=>r instanceof t);let ld,cd;function bw(){return ld||(ld=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ew(){return cd||(cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qg=new WeakMap,wc=new WeakMap,zg=new WeakMap,jl=new WeakMap,cu=new WeakMap;function Iw(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Wn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&qg.set(t,r)}).catch(()=>{}),cu.set(e,r),e}function Tw(r){if(wc.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});wc.set(r,e)}let bc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return wc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||zg.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Aw(r){bc=r(bc)}function kw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Gl(this),e,...t);return zg.set(n,e.sort?e.sort():[e]),Wn(n)}:Ew().includes(r)?function(...e){return r.apply(Gl(this),e),Wn(qg.get(this))}:function(...e){return Wn(r.apply(Gl(this),e))}}function Rw(r){return typeof r=="function"?kw(r):(r instanceof IDBTransaction&&Tw(r),ww(r,bw())?new Proxy(r,bc):r)}function Wn(r){if(r instanceof IDBRequest)return Iw(r);if(jl.has(r))return jl.get(r);const e=Rw(r);return e!==r&&(jl.set(r,e),cu.set(e,r)),e}const Gl=r=>cu.get(r);function jg(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),l=Wn(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Wn(o.result),c.oldVersion,c.newVersion,Wn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Pw=["get","getKey","getAll","getAllKeys","count"],Cw=["put","add","delete","clear"],Wl=new Map;function ud(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Wl.get(e))return Wl.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Cw.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Pw.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return Wl.set(e,i),i}Aw(r=>({...r,get:(e,t,n)=>ud(e,t)||r.get(e,t,n),has:(e,t)=>!!ud(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xw(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function xw(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",hd="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new rl("@firebase/app"),Dw="@firebase/app-compat",Nw="@firebase/analytics-compat",Ow="@firebase/analytics",Vw="@firebase/app-check-compat",Lw="@firebase/app-check",Mw="@firebase/auth",Uw="@firebase/auth-compat",Fw="@firebase/database",Bw="@firebase/data-connect",$w="@firebase/database-compat",qw="@firebase/functions",zw="@firebase/functions-compat",jw="@firebase/installations",Gw="@firebase/installations-compat",Ww="@firebase/messaging",Hw="@firebase/messaging-compat",Kw="@firebase/performance",Qw="@firebase/performance-compat",Yw="@firebase/remote-config",Jw="@firebase/remote-config-compat",Xw="@firebase/storage",Zw="@firebase/storage-compat",eb="@firebase/firestore",tb="@firebase/vertexai",rb="@firebase/firestore-compat",nb="firebase",sb="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="[DEFAULT]",ib={[Ec]:"fire-core",[Dw]:"fire-core-compat",[Ow]:"fire-analytics",[Nw]:"fire-analytics-compat",[Lw]:"fire-app-check",[Vw]:"fire-app-check-compat",[Mw]:"fire-auth",[Uw]:"fire-auth-compat",[Fw]:"fire-rtdb",[Bw]:"fire-data-connect",[$w]:"fire-rtdb-compat",[qw]:"fire-fn",[zw]:"fire-fn-compat",[jw]:"fire-iid",[Gw]:"fire-iid-compat",[Ww]:"fire-fcm",[Hw]:"fire-fcm-compat",[Kw]:"fire-perf",[Qw]:"fire-perf-compat",[Yw]:"fire-rc",[Jw]:"fire-rc-compat",[Xw]:"fire-gcs",[Zw]:"fire-gcs-compat",[eb]:"fire-fst",[rb]:"fire-fst-compat",[tb]:"fire-vertex","fire-js":"fire-js",[nb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map,ob=new Map,Tc=new Map;function dd(r,e){try{r.container.addComponent(e)}catch(t){In.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Vr(r){const e=r.name;if(Tc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Tc.set(e,r);for(const t of lo.values())dd(t,r);for(const t of ob.values())dd(t,r);return!0}function ns(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Hr(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hn=new Cs("app","Firebase",ab);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=sb;function Gg(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ic,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});if(t||(t=Mg()),!t)throw Hn.create("no-options");const i=lo.get(s);if(i){if(ao(t,i.options)&&ao(n,i.config))return i;throw Hn.create("duplicate-app",{appName:s})}const o=new pw(s);for(const c of Tc.values())o.addComponent(c);const l=new lb(t,n,o);return lo.set(s,l),l}function nl(r=Ic){const e=lo.get(r);if(!e&&r===Ic&&Mg())return Gg();if(!e)throw Hn.create("no-app",{appName:r});return e}function fd(){return Array.from(lo.values())}function ir(r,e,t){var n;let s=(n=ib[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(l.join(" "));return}Vr(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="firebase-heartbeat-database",ub=1,co="firebase-heartbeat-store";let Hl=null;function Wg(){return Hl||(Hl=jg(cb,ub,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(co)}catch(t){console.warn(t)}}}}).catch(r=>{throw Hn.create("idb-open",{originalErrorMessage:r.message})})),Hl}async function hb(r){try{const t=(await Wg()).transaction(co),n=await t.objectStore(co).get(Hg(r));return await t.done,n}catch(e){if(e instanceof ar)In.warn(e.message);else{const t=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(t.message)}}}async function gd(r,e){try{const n=(await Wg()).transaction(co,"readwrite");await n.objectStore(co).put(e,Hg(r)),await n.done}catch(t){if(t instanceof ar)In.warn(t.message);else{const n=Hn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});In.warn(n.message)}}}function Hg(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=1024,fb=30*24*60*60*1e3;class gb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mb(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=fb}),this._storage.overwrite(this._heartbeatsCache))}catch(n){In.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pd(),{heartbeatsToSend:n,unsentEntries:s}=pb(this._heartbeatsCache.heartbeats),i=Aa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return In.warn(t),""}}}function pd(){return new Date().toISOString().substring(0,10)}function pb(r,e=db){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),md(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),md(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class mb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bg()?$g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function md(r){return Aa(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(r){Vr(new Ir("platform-logger",e=>new Sw(e),"PRIVATE")),Vr(new Ir("heartbeat",e=>new gb(e),"PRIVATE")),ir(Ec,hd,r),ir(Ec,hd,"esm2017"),ir("fire-js","")}_b("");function uu(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function Kg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vb=Kg,Qg=new Cs("auth","Firebase",Kg()),Kl={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new rl("@firebase/auth");function yb(r,...e){ka.logLevel<=Ie.WARN&&ka.warn(`Auth (${bi}): ${r}`,...e)}function ua(r,...e){ka.logLevel<=Ie.ERROR&&ka.error(`Auth (${bi}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(r,...e){throw hu(r,...e)}function Xr(r,...e){return hu(r,...e)}function Yg(r,e,t){const n=Object.assign(Object.assign({},vb()),{[e]:t});return new Cs("auth","Firebase",n).create(e,{appName:r.name})}function wn(r){return Yg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hu(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Qg.create(r,...e)}function ce(r,e,...t){if(!r)throw hu(e,...t)}function mn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ua(e),new Error(e)}function Tn(r,e){r||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function wb(){return _d()==="http:"||_d()==="https:"}function _d(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wb()||Fg()||"connection"in navigator)?navigator.onLine:!0}function Eb(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tn(t>e,"Short delay should be less than long delay!"),this.isMobile=K0()||J0()}get(){return bb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(r,e){Tn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=new Po(3e4,6e4);function ss(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function is(r,e,t,n,s={}){return Xg(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const l=Ro(Object.assign({key:r.config.apiKey},o)).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const u=Object.assign({method:e,headers:c},i);return Y0()||(u.referrerPolicy="no-referrer"),Jg.fetch()(Zg(r,r.config.apiHost,t,l),u)})}async function Xg(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Ib),e);try{const s=new kb(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zo(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zo(r,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zo(r,"user-disabled",o);const d=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yg(r,d,u);Lr(r,d)}}catch(s){if(s instanceof ar)throw s;Lr(r,"network-request-failed",{message:String(s)})}}async function Co(r,e,t,n,s={}){const i=await is(r,e,t,n,s);return"mfaPendingCredential"in i&&Lr(r,"multi-factor-auth-required",{_serverResponse:i}),i}function Zg(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?du(r.config,s):`${r.config.apiScheme}://${s}`}function Ab(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Xr(this.auth,"network-request-failed")),Tb.get())})}}function Zo(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Xr(r,e,n);return s.customData._tokenResponse=t,s}function vd(r){return r!==void 0&&r.enterprise!==void 0}class Rb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ab(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pb(r,e){return is(r,"GET","/v2/recaptchaConfig",ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(r,e){return is(r,"POST","/v1/accounts:delete",e)}async function ep(r,e){return is(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sb(r,e=!1){const t=ot(r),n=await t.getIdToken(e),s=fu(n);ce(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Ji(Ql(s.auth_time)),issuedAtTime:Ji(Ql(s.iat)),expirationTime:Ji(Ql(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ql(r){return Number(r)*1e3}function fu(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const s=Og(t);return s?JSON.parse(s):(ua("Failed to decode base64 JWT payload"),null)}catch(s){return ua("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yd(r){const e=fu(r);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof ar&&xb(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function xb({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(r){var e;const t=r.auth,n=await r.getIdToken(),s=await uo(r,ep(t,{idToken:n}));ce(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tp(i.providerUserInfo):[],l=Ob(r.providerData,o),c=r.isAnonymous,u=!(r.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new kc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(r,g)}async function Nb(r){const e=ot(r);await Ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ob(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function tp(r){return r.map(e=>{var{providerId:t}=e,n=uu(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(r,e){const t=await Xg(r,{},async()=>{const n=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=Zg(r,s,"/v1/token",`key=${i}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Jg.fetch()(o,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Lb(r,e){return is(r,"POST","/v2/accounts:revokeToken",ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=yd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await Vb(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Zs;return n&&(ce(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(r,e){ce(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Db(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await uo(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sb(this,e)}reload(){return Nb(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ra(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hr(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await uo(this,Cb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,l,c,u,d;const g=(n=t.displayName)!==null&&n!==void 0?n:void 0,p=(s=t.email)!==null&&s!==void 0?s:void 0,v=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=t.createdAt)!==null&&u!==void 0?u:void 0,x=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:O,isAnonymous:L,providerData:M,stsTokenManager:E}=t;ce(C&&E,e,"internal-error");const m=Zs.fromJSON(this.name,E);ce(typeof C=="string",e,"internal-error"),Vn(g,e.name),Vn(p,e.name),ce(typeof O=="boolean",e,"internal-error"),ce(typeof L=="boolean",e,"internal-error"),Vn(v,e.name),Vn(A,e.name),Vn(R,e.name),Vn(P,e.name),Vn(N,e.name),Vn(x,e.name);const y=new _n({uid:C,auth:e,email:p,emailVerified:O,displayName:g,isAnonymous:L,photoURL:A,phoneNumber:v,tenantId:R,stsTokenManager:m,createdAt:N,lastLoginAt:x});return M&&Array.isArray(M)&&(y.providerData=M.map(b=>Object.assign({},b))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,t,n=!1){const s=new Zs;s.updateFromServerResponse(t);const i=new _n({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Ra(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Zs;l.updateFromIdToken(n);const c=new _n({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=new Map;function vn(r){Tn(r instanceof Function,"Expected a class definition");let e=wd.get(r);return e?(Tn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,wd.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rp.type="NONE";const bd=rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(r,e,t){return`firebase:${r}:${e}:${t}`}class ei{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=ha(this.userKey,s.apiKey,i),this.fullPersistenceKey=ha("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ei(vn(bd),e,n);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||vn(bd);const o=ha(n,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){const g=_n._fromJSON(e,d);u!==i&&(l=g),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ei(i,e,n):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ei(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(op(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(np(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lp(e))return"Blackberry";if(cp(e))return"Webos";if(sp(e))return"Safari";if((e.includes("chrome/")||ip(e))&&!e.includes("edge/"))return"Chrome";if(ap(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function np(r=Gt()){return/firefox\//i.test(r)}function sp(r=Gt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ip(r=Gt()){return/crios\//i.test(r)}function op(r=Gt()){return/iemobile/i.test(r)}function ap(r=Gt()){return/android/i.test(r)}function lp(r=Gt()){return/blackberry/i.test(r)}function cp(r=Gt()){return/webos/i.test(r)}function gu(r=Gt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Mb(r=Gt()){var e;return gu(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ub(){return X0()&&document.documentMode===10}function up(r=Gt()){return gu(r)||ap(r)||cp(r)||lp(r)||/windows phone/i.test(r)||op(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(r,e=[]){let t;switch(r){case"Browser":t=Ed(Gt());break;case"Worker":t=`${Ed(Gt())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bi}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(r,e={}){return is(r,"GET","/v2/passwordPolicy",ss(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=6;class qb{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:$b,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Id(this),this.idTokenSubscription=new Id(this),this.beforeStateQueue=new Fb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vn(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await ei.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ep(this,{idToken:e}),n=await _n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Hr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ra(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Eb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Hr(this.app))return Promise.reject(wn(this));const t=e?ot(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Hr(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Hr(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bb(this),t=new qb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Lb(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vn(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[vn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ss(r){return ot(r)}class Id{constructor(e){this.auth=e,this.observer=null,this.addObserver=iw(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jb(r){sl=r}function dp(r){return sl.loadJS(r)}function Gb(){return sl.recaptchaEnterpriseScript}function Wb(){return sl.gapiScript}function Hb(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Kb{constructor(){this.enterprise=new Qb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Qb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Yb="recaptcha-enterprise",fp="NO_RECAPTCHA";class Jb{constructor(e){this.type=Yb,this.auth=Ss(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Pb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Rb(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;vd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(fp)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Kb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(l=>{if(!t&&vd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Gb();c.length!==0&&(c+=l),dp(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Td(r,e,t,n=!1,s=!1){const i=new Jb(r);let o;if(s)o=fp;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Rc(r,e,t,n,s){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Td(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Td(r,e,t,t==="getOobCode");return n(r,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(r,e){const t=ns(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ao(i,e??{}))return s;Lr(s,"already-initialized")}return t.initialize({options:e})}function Zb(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(vn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function eE(r,e,t){const n=Ss(r);ce(n._canInitEmulator,n,"emulator-config-failed"),ce(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=gp(e),{host:o,port:l}=tE(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${i}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),rE()}function gp(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function tE(r){const e=gp(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Ad(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Ad(o)}}}function Ad(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function rE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function nE(r,e){return is(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(r,e){return Co(r,"POST","/v1/accounts:signInWithPassword",ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(r,e){return Co(r,"POST","/v1/accounts:signInWithEmailLink",ss(r,e))}async function oE(r,e){return Co(r,"POST","/v1/accounts:signInWithEmailLink",ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends pu{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ho(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ho(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rc(e,t,"signInWithPassword",sE);case"emailLink":return iE(e,{email:this._email,oobCode:this._password});default:Lr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rc(e,n,"signUpPassword",nE);case"emailLink":return oE(e,{idToken:t,email:this._email,oobCode:this._password});default:Lr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(r,e){return Co(r,"POST","/v1/accounts:signInWithIdp",ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="http://localhost";class Is extends pu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=uu(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new Is(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ti(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ti(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ti(e,t)}buildRequest(){const e={requestUri:aE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ro(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cE(r){const e=ji(Gi(r)).link,t=e?ji(Gi(e)).deep_link_id:null,n=ji(Gi(r)).deep_link_id;return(n?ji(Gi(n)).link:null)||n||t||e||r}class mu{constructor(e){var t,n,s,i,o,l;const c=ji(Gi(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(n=c.oobCode)!==null&&n!==void 0?n:null,g=lE((s=c.mode)!==null&&s!==void 0?s:null);ce(u&&d&&g,"argument-error"),this.apiKey=u,this.operation=g,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=cE(e);try{return new mu(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,t){return ho._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=mu.parseLink(t);return ce(n,"argument-error"),ho._fromEmailAndCode(e,n.code,n.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends pp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends So{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Is._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Un.credential(t,n)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends So{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends So{constructor(){super("twitter.com")}static credential(e,t){return Is._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Bn.credential(t,n)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(r,e){return Co(r,"POST","/v1/accounts:signUp",ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await _n._fromIdTokenResponse(e,n,s),o=kd(n);return new Ts({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=kd(n);return new Ts({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function kd(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends ar{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Pa(e,t,n,s)}}function mp(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(r,i,e,n):i})}async function hE(r,e,t=!1){const n=await uo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ts._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(r,e,t=!1){const{auth:n}=r;if(Hr(n.app))return Promise.reject(wn(n));const s="reauthenticate";try{const i=await uo(r,mp(n,s,e,r),t);ce(i.idToken,n,"internal-error");const o=fu(i.idToken);ce(o,n,"internal-error");const{sub:l}=o;return ce(r.uid===l,n,"user-mismatch"),Ts._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lr(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(r,e,t=!1){if(Hr(r.app))return Promise.reject(wn(r));const n="signIn",s=await mp(r,n,e),i=await Ts._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function fE(r,e){return _p(Ss(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(r){const e=Ss(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gE(r,e,t){if(Hr(r.app))return Promise.reject(wn(r));const n=Ss(r),o=await Rc(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uE).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&vp(r),c}),l=await Ts._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(l.user),l}function pE(r,e,t){return Hr(r.app)?Promise.reject(wn(r)):fE(ot(r),Ei.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&vp(r),n})}function mE(r,e,t,n){return ot(r).onIdTokenChanged(e,t,n)}function _E(r,e,t){return ot(r).beforeAuthStateChanged(e,t)}function vE(r){return ot(r).signOut()}const Ca="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ca,"1"),this.storage.removeItem(Ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=1e3,wE=10;class wp extends yp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=up(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Ub()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wE):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},yE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wp.type="LOCAL";const bE=wp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp extends yp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bp.type="SESSION";const Ep=bp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new il(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(o).map(async u=>u(t.origin,i)),c=await EE(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}il.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=_u("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(g){const p=g;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(p.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(){return window}function TE(r){Zr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(){return typeof Zr().WorkerGlobalScope<"u"&&typeof Zr().importScripts=="function"}async function AE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kE(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function RE(){return Ip()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="firebaseLocalStorageDb",PE=1,Sa="firebaseLocalStorage",Ap="fbase_key";class xo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ol(r,e){return r.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function CE(){const r=indexedDB.deleteDatabase(Tp);return new xo(r).toPromise()}function Pc(){const r=indexedDB.open(Tp,PE);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Sa,{keyPath:Ap})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Sa)?e(n):(n.close(),await CE(),e(await Pc()))})})}async function Rd(r,e,t){const n=ol(r,!0).put({[Ap]:e,value:t});return new xo(n).toPromise()}async function SE(r,e){const t=ol(r,!1).get(e),n=await new xo(t).toPromise();return n===void 0?null:n.value}function Pd(r,e){const t=ol(r,!0).delete(e);return new xo(t).toPromise()}const xE=800,DE=3;class kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>DE)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ip()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=il._getInstance(RE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await AE(),!this.activeServiceWorker)return;this.sender=new IE(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pc();return await Rd(e,Ca,"1"),await Pd(e,Ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rd(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>SE(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ol(s,!1).getAll();return new xo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kp.type="LOCAL";const NE=kp;new Po(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(r,e){return e?vn(e):(ce(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends pu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ti(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ti(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function VE(r){return _p(r.auth,new vu(r),r.bypassAuthState)}function LE(r){const{auth:e,user:t}=r;return ce(t,e,"internal-error"),dE(t,new vu(r),r.bypassAuthState)}async function ME(r){const{auth:e,user:t}=r;return ce(t,e,"internal-error"),hE(t,new vu(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VE;case"linkViaPopup":case"linkViaRedirect":return ME;case"reauthViaPopup":case"reauthViaRedirect":return LE;default:Lr(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=new Po(2e3,1e4);class Ws extends Rp{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=_u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UE.get())};e()}}Ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="pendingRedirect",da=new Map;class BE extends Rp{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const n=await $E(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $E(r,e){const t=jE(e),n=zE(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function qE(r,e){da.set(r._key(),e)}function zE(r){return vn(r._redirectPersistence)}function jE(r){return ha(FE,r.config.apiKey,r.name)}async function GE(r,e,t=!1){if(Hr(r.app))return Promise.reject(wn(r));const n=Ss(r),s=OE(n,e),o=await new BE(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=10*60*1e3;class HE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Pp(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Xr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cd(e))}saveEventToCache(e){this.cachedEventUids.add(Cd(e)),this.lastProcessedEventTime=Date.now()}}function Cd(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Pp({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pp(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(r,e={}){return is(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JE=/^https?/;async function XE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await QE(r);for(const t of e)try{if(ZE(t))return}catch{}Lr(r,"unauthorized-domain")}function ZE(r){const e=Ac(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!JE.test(t))return!1;if(YE.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new Po(3e4,6e4);function Sd(){const r=Zr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function tI(r){return new Promise((e,t)=>{var n,s,i;function o(){Sd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sd(),t(Xr(r,"network-request-failed"))},timeout:eI.get()})}if(!((s=(n=Zr().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zr().gapi)===null||i===void 0)&&i.load)o();else{const l=Hb("iframefcb");return Zr()[l]=()=>{gapi.load?o():t(Xr(r,"network-request-failed"))},dp(`${Wb()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw fa=null,e})}let fa=null;function rI(r){return fa=fa||tI(r),fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new Po(5e3,15e3),sI="__/auth/iframe",iI="emulator/auth/iframe",oI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lI(r){const e=r.config;ce(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?du(e,iI):`https://${r.config.authDomain}/${sI}`,n={apiKey:e.apiKey,appName:r.name,v:bi},s=aI.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Ro(n).slice(1)}`}async function cI(r){const e=await rI(r),t=Zr().gapi;return ce(t,r,"internal-error"),e.open({where:document.body,url:lI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oI,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Xr(r,"network-request-failed"),l=Zr().setTimeout(()=>{i(o)},nI.get());function c(){Zr().clearTimeout(l),s(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hI=500,dI=600,fI="_blank",gI="http://localhost";class xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pI(r,e,t,n=hI,s=dI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},uI),{width:n.toString(),height:s.toString(),top:i,left:o}),u=Gt().toLowerCase();t&&(l=ip(u)?fI:t),np(u)&&(e=e||gI,c.scrollbars="yes");const d=Object.entries(c).reduce((p,[v,A])=>`${p}${v}=${A},`,"");if(Mb(u)&&l!=="_self")return mI(e||"",l),new xd(null);const g=window.open(e||"",l,d);ce(g,r,"popup-blocked");try{g.focus()}catch{}return new xd(g)}function mI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="__/auth/handler",vI="emulator/auth/handler",yI=encodeURIComponent("fac");async function Dd(r,e,t,n,s,i){ce(r.config.authDomain,r,"auth-domain-config-required"),ce(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:bi,eventId:s};if(e instanceof pp){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",sw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))o[d]=g}if(e instanceof So){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(o.scopes=d.join(","))}r.tenantId&&(o.tid=r.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await r._getAppCheckToken(),u=c?`#${yI}=${encodeURIComponent(c)}`:"";return`${wI(r)}?${Ro(l).slice(1)}${u}`}function wI({config:r}){return r.emulator?du(r,vI):`https://${r.authDomain}/${_I}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="webStorageSupport";class bI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ep,this._completeRedirectFn=GE,this._overrideRedirectResult=qE}async _openPopup(e,t,n,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Dd(e,t,n,Ac(),s);return pI(e,o,_u())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Dd(e,t,n,Ac(),s);return TE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await cI(e),n=new HE(e);return t.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yl,{type:Yl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Yl];o!==void 0&&t(!!o),Lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=XE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return up()||sp()||gu()}}const EI=bI;var Nd="@firebase/auth",Od="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AI(r){Vr(new Ir("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hp(r)},u=new zb(n,s,i,c);return Zb(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Vr(new Ir("auth-internal",e=>{const t=Ss(e.getProvider("auth").getImmediate());return(n=>new II(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(Nd,Od,TI(r)),ir(Nd,Od,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=5*60,RI=Ug("authIdTokenMaxAge")||kI;let Vd=null;const PI=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>RI)return;const s=t==null?void 0:t.token;Vd!==s&&(Vd=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function CI(r=nl()){const e=ns(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Xb(r,{popupRedirectResolver:EI,persistence:[NE,bE,Ep]}),n=Ug("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=PI(i.toString());_E(t,o,()=>o(t.currentUser)),mE(t,l=>o(l))}}const s=Vg("auth");return s&&eE(t,`http://${s}`),t}function SI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}jb({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Xr("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",SI().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AI("Browser");var xI="firebase",DI="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(xI,DI,"app");const NI={apiKey:"AIzaSyB_tyN3FolHRHx9GRXw9PSO27r6aUvezYg",authDomain:"reality-check-pickleball.firebaseapp.com",projectId:"reality-check-pickleball",storageBucket:"reality-check-pickleball.firebasestorage.app",messagingSenderId:"361363618815",appId:"1:361363618815:web:d6afcf837aa8c66e9205ca",measurementId:"G-Z6DTK98TR1"};function al(){return fd().length?fd()[0]:Gg(NI)}const Wa=class Wa{static get auth(){return this._auth||(al(),this._auth=CI()),this._auth}static get currentUser(){return this.auth.currentUser}static get authStateReady(){return this.auth.authStateReady()}static async signIn(e,t){return(await pE(this.auth,e,t)).user}static signOut(){vE(this.auth)}static onUserChanged(e){Wa.auth.onAuthStateChanged(e)}static async createAccount(e,t){return(await gE(this.auth,e,t)).user}};wr(Wa,"_auth",null);let dn=Wa;var Kr=(r=>(r.invalidRequest="invalid-request",r.notEnoughPlayers="not-enough-players",r.unauthorized="unauthorized",r.internalError="internal",r.success="success",r))(Kr||{}),$n=(r=>(r.UserAlreadyExists="UserAlreadyExists",r.InvalidCredentials="InvalidCredentials",r.Unauthorized="Unauthorized",r.ServerError="ServerError",r.NotEnoughPlayers="NotEnoughPlayers",r.InvaildRequest="InvaildRequest",r.CanNotTie="CanNotTie",r.Unknown="Unknown",r))($n||{});function Kn(r){let e=r;if(Object.values($n).includes(e))return e;switch(r){case Kr.invalidRequest:return"InvaildRequest";case Kr.unauthorized:return"Unauthorized";case Kr.internalError:return"ServerError";case Kr.notEnoughPlayers:return"NotEnoughPlayers";default:return"Unknown"}}function xa(r){switch(r){case"UserAlreadyExists":return"This email is already in use";case"InvalidCredentials":return"Invalid credentials";case"Unauthorized":return"You are not authorized to run this command";case"NotEnoughPlayers":return"There are not enough players";case"CanNotTie":return"Ties are not allowed";case"ServerError":return"A server error has occurred, please try again";default:return"An unknown error has occurred"}}var Ld=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ws,Cp;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function y(){}y.prototype=m.prototype,E.D=m.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(b,I,T){for(var w=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)w[ne-2]=arguments[ne];return m.prototype[I].apply(b,w)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,y){y||(y=0);var b=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)b[I]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(I=0;16>I;++I)b[I]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=E.g[0],y=E.g[1],I=E.g[2];var T=E.g[3],w=m+(T^y&(I^T))+b[0]+3614090360&4294967295;m=y+(w<<7&4294967295|w>>>25),w=T+(I^m&(y^I))+b[1]+3905402710&4294967295,T=m+(w<<12&4294967295|w>>>20),w=I+(y^T&(m^y))+b[2]+606105819&4294967295,I=T+(w<<17&4294967295|w>>>15),w=y+(m^I&(T^m))+b[3]+3250441966&4294967295,y=I+(w<<22&4294967295|w>>>10),w=m+(T^y&(I^T))+b[4]+4118548399&4294967295,m=y+(w<<7&4294967295|w>>>25),w=T+(I^m&(y^I))+b[5]+1200080426&4294967295,T=m+(w<<12&4294967295|w>>>20),w=I+(y^T&(m^y))+b[6]+2821735955&4294967295,I=T+(w<<17&4294967295|w>>>15),w=y+(m^I&(T^m))+b[7]+4249261313&4294967295,y=I+(w<<22&4294967295|w>>>10),w=m+(T^y&(I^T))+b[8]+1770035416&4294967295,m=y+(w<<7&4294967295|w>>>25),w=T+(I^m&(y^I))+b[9]+2336552879&4294967295,T=m+(w<<12&4294967295|w>>>20),w=I+(y^T&(m^y))+b[10]+4294925233&4294967295,I=T+(w<<17&4294967295|w>>>15),w=y+(m^I&(T^m))+b[11]+2304563134&4294967295,y=I+(w<<22&4294967295|w>>>10),w=m+(T^y&(I^T))+b[12]+1804603682&4294967295,m=y+(w<<7&4294967295|w>>>25),w=T+(I^m&(y^I))+b[13]+4254626195&4294967295,T=m+(w<<12&4294967295|w>>>20),w=I+(y^T&(m^y))+b[14]+2792965006&4294967295,I=T+(w<<17&4294967295|w>>>15),w=y+(m^I&(T^m))+b[15]+1236535329&4294967295,y=I+(w<<22&4294967295|w>>>10),w=m+(I^T&(y^I))+b[1]+4129170786&4294967295,m=y+(w<<5&4294967295|w>>>27),w=T+(y^I&(m^y))+b[6]+3225465664&4294967295,T=m+(w<<9&4294967295|w>>>23),w=I+(m^y&(T^m))+b[11]+643717713&4294967295,I=T+(w<<14&4294967295|w>>>18),w=y+(T^m&(I^T))+b[0]+3921069994&4294967295,y=I+(w<<20&4294967295|w>>>12),w=m+(I^T&(y^I))+b[5]+3593408605&4294967295,m=y+(w<<5&4294967295|w>>>27),w=T+(y^I&(m^y))+b[10]+38016083&4294967295,T=m+(w<<9&4294967295|w>>>23),w=I+(m^y&(T^m))+b[15]+3634488961&4294967295,I=T+(w<<14&4294967295|w>>>18),w=y+(T^m&(I^T))+b[4]+3889429448&4294967295,y=I+(w<<20&4294967295|w>>>12),w=m+(I^T&(y^I))+b[9]+568446438&4294967295,m=y+(w<<5&4294967295|w>>>27),w=T+(y^I&(m^y))+b[14]+3275163606&4294967295,T=m+(w<<9&4294967295|w>>>23),w=I+(m^y&(T^m))+b[3]+4107603335&4294967295,I=T+(w<<14&4294967295|w>>>18),w=y+(T^m&(I^T))+b[8]+1163531501&4294967295,y=I+(w<<20&4294967295|w>>>12),w=m+(I^T&(y^I))+b[13]+2850285829&4294967295,m=y+(w<<5&4294967295|w>>>27),w=T+(y^I&(m^y))+b[2]+4243563512&4294967295,T=m+(w<<9&4294967295|w>>>23),w=I+(m^y&(T^m))+b[7]+1735328473&4294967295,I=T+(w<<14&4294967295|w>>>18),w=y+(T^m&(I^T))+b[12]+2368359562&4294967295,y=I+(w<<20&4294967295|w>>>12),w=m+(y^I^T)+b[5]+4294588738&4294967295,m=y+(w<<4&4294967295|w>>>28),w=T+(m^y^I)+b[8]+2272392833&4294967295,T=m+(w<<11&4294967295|w>>>21),w=I+(T^m^y)+b[11]+1839030562&4294967295,I=T+(w<<16&4294967295|w>>>16),w=y+(I^T^m)+b[14]+4259657740&4294967295,y=I+(w<<23&4294967295|w>>>9),w=m+(y^I^T)+b[1]+2763975236&4294967295,m=y+(w<<4&4294967295|w>>>28),w=T+(m^y^I)+b[4]+1272893353&4294967295,T=m+(w<<11&4294967295|w>>>21),w=I+(T^m^y)+b[7]+4139469664&4294967295,I=T+(w<<16&4294967295|w>>>16),w=y+(I^T^m)+b[10]+3200236656&4294967295,y=I+(w<<23&4294967295|w>>>9),w=m+(y^I^T)+b[13]+681279174&4294967295,m=y+(w<<4&4294967295|w>>>28),w=T+(m^y^I)+b[0]+3936430074&4294967295,T=m+(w<<11&4294967295|w>>>21),w=I+(T^m^y)+b[3]+3572445317&4294967295,I=T+(w<<16&4294967295|w>>>16),w=y+(I^T^m)+b[6]+76029189&4294967295,y=I+(w<<23&4294967295|w>>>9),w=m+(y^I^T)+b[9]+3654602809&4294967295,m=y+(w<<4&4294967295|w>>>28),w=T+(m^y^I)+b[12]+3873151461&4294967295,T=m+(w<<11&4294967295|w>>>21),w=I+(T^m^y)+b[15]+530742520&4294967295,I=T+(w<<16&4294967295|w>>>16),w=y+(I^T^m)+b[2]+3299628645&4294967295,y=I+(w<<23&4294967295|w>>>9),w=m+(I^(y|~T))+b[0]+4096336452&4294967295,m=y+(w<<6&4294967295|w>>>26),w=T+(y^(m|~I))+b[7]+1126891415&4294967295,T=m+(w<<10&4294967295|w>>>22),w=I+(m^(T|~y))+b[14]+2878612391&4294967295,I=T+(w<<15&4294967295|w>>>17),w=y+(T^(I|~m))+b[5]+4237533241&4294967295,y=I+(w<<21&4294967295|w>>>11),w=m+(I^(y|~T))+b[12]+1700485571&4294967295,m=y+(w<<6&4294967295|w>>>26),w=T+(y^(m|~I))+b[3]+2399980690&4294967295,T=m+(w<<10&4294967295|w>>>22),w=I+(m^(T|~y))+b[10]+4293915773&4294967295,I=T+(w<<15&4294967295|w>>>17),w=y+(T^(I|~m))+b[1]+2240044497&4294967295,y=I+(w<<21&4294967295|w>>>11),w=m+(I^(y|~T))+b[8]+1873313359&4294967295,m=y+(w<<6&4294967295|w>>>26),w=T+(y^(m|~I))+b[15]+4264355552&4294967295,T=m+(w<<10&4294967295|w>>>22),w=I+(m^(T|~y))+b[6]+2734768916&4294967295,I=T+(w<<15&4294967295|w>>>17),w=y+(T^(I|~m))+b[13]+1309151649&4294967295,y=I+(w<<21&4294967295|w>>>11),w=m+(I^(y|~T))+b[4]+4149444226&4294967295,m=y+(w<<6&4294967295|w>>>26),w=T+(y^(m|~I))+b[11]+3174756917&4294967295,T=m+(w<<10&4294967295|w>>>22),w=I+(m^(T|~y))+b[2]+718787259&4294967295,I=T+(w<<15&4294967295|w>>>17),w=y+(T^(I|~m))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+T&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var y=m-this.blockSize,b=this.B,I=this.h,T=0;T<m;){if(I==0)for(;T<=y;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<m;)if(b[I++]=E.charCodeAt(T++),I==this.blockSize){s(this,b),I=0;break}}else for(;T<m;)if(b[I++]=E[T++],I==this.blockSize){s(this,b),I=0;break}}this.h=I,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var y=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=y&255,y/=256;for(this.u(E),E=Array(16),m=y=0;4>m;++m)for(var b=0;32>b;b+=8)E[y++]=this.g[m]>>>b&255;return E};function i(E,m){var y=l;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=m(E)}function o(E,m){this.h=m;for(var y=[],b=!0,I=E.length-1;0<=I;I--){var T=E[I]|0;b&&T==m||(y[I]=T,b=!1)}this.g=y}var l={};function c(E){return-128<=E&&128>E?i(E,function(m){return new o([m|0],0>m?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return P(u(-E));for(var m=[],y=1,b=0;E>=y;b++)m[b]=E/y|0,y*=4294967296;return new o(m,0)}function d(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return P(d(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(m,8)),b=g,I=0;I<E.length;I+=8){var T=Math.min(8,E.length-I),w=parseInt(E.substring(I,I+T),m);8>T?(T=u(Math.pow(m,T)),b=b.j(T).add(u(w))):(b=b.j(y),b=b.add(u(w)))}return b}var g=c(0),p=c(1),v=c(16777216);r=o.prototype,r.m=function(){if(R(this))return-P(this).m();for(var E=0,m=1,y=0;y<this.g.length;y++){var b=this.i(y);E+=(0<=b?b:4294967296+b)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(R(this))return"-"+P(this).toString(E);for(var m=u(Math.pow(E,6)),y=this,b="";;){var I=O(y,m).g;y=N(y,I.j(m));var T=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=I,A(y))return T+b;for(;6>T.length;)T="0"+T;b=T+b}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function R(E){return E.h==-1}r.l=function(E){return E=N(this,E),R(E)?-1:A(E)?0:1};function P(E){for(var m=E.g.length,y=[],b=0;b<m;b++)y[b]=~E.g[b];return new o(y,~E.h).add(p)}r.abs=function(){return R(this)?P(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],b=0,I=0;I<=m;I++){var T=b+(this.i(I)&65535)+(E.i(I)&65535),w=(T>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);b=w>>>16,T&=65535,w&=65535,y[I]=w<<16|T}return new o(y,y[y.length-1]&-2147483648?-1:0)};function N(E,m){return E.add(P(m))}r.j=function(E){if(A(this)||A(E))return g;if(R(this))return R(E)?P(this).j(P(E)):P(P(this).j(E));if(R(E))return P(this.j(P(E)));if(0>this.l(v)&&0>E.l(v))return u(this.m()*E.m());for(var m=this.g.length+E.g.length,y=[],b=0;b<2*m;b++)y[b]=0;for(b=0;b<this.g.length;b++)for(var I=0;I<E.g.length;I++){var T=this.i(b)>>>16,w=this.i(b)&65535,ne=E.i(I)>>>16,ae=E.i(I)&65535;y[2*b+2*I]+=w*ae,x(y,2*b+2*I),y[2*b+2*I+1]+=T*ae,x(y,2*b+2*I+1),y[2*b+2*I+1]+=w*ne,x(y,2*b+2*I+1),y[2*b+2*I+2]+=T*ne,x(y,2*b+2*I+2)}for(b=0;b<m;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=m;b<2*m;b++)y[b]=0;return new o(y,0)};function x(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function C(E,m){this.g=E,this.h=m}function O(E,m){if(A(m))throw Error("division by zero");if(A(E))return new C(g,g);if(R(E))return m=O(P(E),m),new C(P(m.g),P(m.h));if(R(m))return m=O(E,P(m)),new C(P(m.g),m.h);if(30<E.g.length){if(R(E)||R(m))throw Error("slowDivide_ only works with positive integers.");for(var y=p,b=m;0>=b.l(E);)y=L(y),b=L(b);var I=M(y,1),T=M(b,1);for(b=M(b,2),y=M(y,2);!A(b);){var w=T.add(b);0>=w.l(E)&&(I=I.add(y),T=w),b=M(b,1),y=M(y,1)}return m=N(E,I.j(m)),new C(I,m)}for(I=g;0<=E.l(m);){for(y=Math.max(1,Math.floor(E.m()/m.m())),b=Math.ceil(Math.log(y)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),T=u(y),w=T.j(m);R(w)||0<w.l(E);)y-=b,T=u(y),w=T.j(m);A(T)&&(T=p),I=I.add(T),E=N(E,w)}return new C(I,E)}r.A=function(E){return O(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],b=0;b<m;b++)y[b]=this.i(b)&E.i(b);return new o(y,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],b=0;b<m;b++)y[b]=this.i(b)|E.i(b);return new o(y,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],b=0;b<m;b++)y[b]=this.i(b)^E.i(b);return new o(y,this.h^E.h)};function L(E){for(var m=E.g.length+1,y=[],b=0;b<m;b++)y[b]=E.i(b)<<1|E.i(b-1)>>>31;return new o(y,E.h)}function M(E,m){var y=m>>5;m%=32;for(var b=E.g.length-y,I=[],T=0;T<b;T++)I[T]=0<m?E.i(T+y)>>>m|E.i(T+y+1)<<32-m:E.i(T+y);return new o(I,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Cp=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,ws=o}).apply(typeof Ld<"u"?Ld:typeof self<"u"?self:typeof window<"u"?window:{});var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sp,Wi,xp,ga,Cc,Dp,Np,Op;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ea=="object"&&ea];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(a,h){if(h)e:{var f=n;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in f))break e;f=f[D]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,D={next:function(){if(!_&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function g(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function p(a,h,f){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,p.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,D,V){for(var K=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)K[Be-2]=arguments[Be];return h.prototype[D].apply(_,K)}}function R(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(c(_)){const D=a.length||0,V=_.length||0;a.length=D+V;for(let K=0;K<V;K++)a[D+K]=_[K]}else a.push(_)}}class N{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function C(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var L=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function M(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function E(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function m(a){const h={};for(const f in a)h[f]=a[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let f,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(f in _)a[f]=_[f];for(let V=0;V<y.length;V++)f=y[V],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function I(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function T(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Pe;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ne{constructor(){this.h=this.g=null}add(h,f){const _=ae.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var ae=new N(()=>new te,a=>a.reset());class te{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ve=!1,Pe=new ne,at=()=>{const a=l.Promise.resolve(void 0);le=()=>{a.then(ie)}};var ie=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){T(f)}var h=ae;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Y(a,h){if(Ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{O(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:lt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Y.aa.h.call(this)}}A(Y,Ee);var lt={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var lr="closure_listenable_"+(1e6*Math.random()|0),Tr=0;function cr(a,h,f,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=D,this.key=++Tr,this.da=this.fa=!1}function Rn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ur(a){this.src=a,this.g={},this.h=0}ur.prototype.add=function(a,h,f,_,D){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var K=on(a,h,_,D);return-1<K?(h=a[K],f||(h.fa=!1)):(h=new cr(h,this.src,V,!!_,D),h.fa=f,a.push(h)),h};function Ar(a,h){var f=h.type;if(f in a.g){var _=a.g[f],D=Array.prototype.indexOf.call(_,h,void 0),V;(V=0<=D)&&Array.prototype.splice.call(_,D,1),V&&(Rn(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function on(a,h,f,_){for(var D=0;D<a.length;++D){var V=a[D];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==_)return D}return-1}var Ci="closure_lm_"+(1e6*Math.random()|0),Si={};function Fo(a,h,f,_,D){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Fo(a,h[V],f,_,D);return null}return f=Br(f),a&&a[lr]?a.K(h,f,u(_)?!!_.capture:!!_,D):Al(a,h,f,!1,_,D)}function Al(a,h,f,_,D,V){if(!h)throw Error("Invalid event type");var K=u(D)?!!D.capture:!!D,Be=It(a);if(Be||(a[Ci]=Be=new ur(a)),f=Be.add(h,f,_,K,V),f.proxy)return f;if(_=Nt(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)j||(D=K),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(yr(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Nt(){function a(f){return h.call(a.src,a.listener,f)}const h=Rr;return a}function Jt(a,h,f,_,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)Jt(a,h[V],f,_,D);else _=u(_)?!!_.capture:!!_,f=Br(f),a&&a[lr]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=on(V,f,_,D),-1<f&&(Rn(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=It(a))&&(h=a.g[h.toString()],a=-1,h&&(a=on(h,f,_,D)),(f=-1<a?h[a]:null)&&kr(f))}function kr(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[lr])Ar(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(yr(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=It(h))?(Ar(f,a),f.h==0&&(f.src=null,h[Ci]=null)):Rn(a)}}}function yr(a){return a in Si?Si[a]:Si[a]="on"+a}function Rr(a,h){if(a.da)a=!0;else{h=new Y(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&kr(a),a=f.call(_,h)}return a}function It(a){return a=a[Ci],a instanceof ur?a:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Br(a){return typeof a=="function"?a:(a[yt]||(a[yt]=function(h){return a.handleEvent(h)}),a[yt])}function Ne(){ee.call(this),this.i=new ur(this),this.M=this,this.F=null}A(Ne,ee),Ne.prototype[lr]=!0,Ne.prototype.removeEventListener=function(a,h,f,_){Jt(this,a,h,f,_)};function Ze(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Ee(h,a);else if(h instanceof Ee)h.target=h.target||a;else{var D=h;h=new Ee(_,a),b(h,D)}if(D=!0,f)for(var V=f.length-1;0<=V;V--){var K=h.g=f[V];D=ct(K,_,!0,h)&&D}if(K=h.g=a,D=ct(K,_,!0,h)&&D,D=ct(K,_,!1,h)&&D,f)for(V=0;V<f.length;V++)K=h.g=f[V],D=ct(K,_,!1,h)&&D}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)Rn(f[_]);delete a.g[h],a.h--}}this.F=null},Ne.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},Ne.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function ct(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,V=0;V<h.length;++V){var K=h[V];if(K&&!K.da&&K.capture==f){var Be=K.listener,Pt=K.ha||K.src;K.fa&&Ar(a.i,K),D=Be.call(Pt,_)!==!1&&D}}return D&&!_.defaultPrevented}function $r(a,h,f){if(typeof a=="function")f&&(a=p(a,f));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function an(a){a.g=$r(()=>{a.g=null,a.i&&(a.i=!1,an(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class qr extends ee{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:an(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){ee.call(this),this.h=a,this.g={}}A(ut,ee);var zr=[];function Tt(a){M(a.g,function(h,f){this.g.hasOwnProperty(f)&&kr(h)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),Tt(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ln=l.JSON.stringify,Pn=l.JSON.parse,Ns=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Pr(){}Pr.prototype.h=null;function Cn(a){return a.h||(a.h=a.i())}function Cr(){}var jr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ls(){Ee.call(this,"d")}A(ls,Ee);function Wt(){Ee.call(this,"c")}A(Wt,Ee);var Xt={},At=null;function kt(){return At=At||new Ne}Xt.La="serverreachability";function Ot(a){Ee.call(this,Xt.La,a)}A(Ot,Ee);function Ge(a){const h=kt();Ze(h,new Ot(h))}Xt.STAT_EVENT="statevent";function wt(a,h){Ee.call(this,Xt.STAT_EVENT,a),this.stat=h}A(wt,Ee);function De(a){const h=kt();Ze(h,new wt(h,a))}Xt.Ma="timingevent";function et(a,h){Ee.call(this,Xt.Ma,a),this.size=h}A(et,Ee);function Vt(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Lt(){this.g=!0}Lt.prototype.xa=function(){this.g=!1};function st(a,h,f,_,D,V){a.info(function(){if(a.g)if(V)for(var K="",Be=V.split("&"),Pt=0;Pt<Be.length;Pt++){var Ce=Be[Pt].split("=");if(1<Ce.length){var Ft=Ce[0];Ce=Ce[1];var Bt=Ft.split("_");K=2<=Bt.length&&Bt[1]=="type"?K+(Ft+"="+Ce+"&"):K+(Ft+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+f+`
`+K})}function tt(a,h,f,_,D,V,K){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+f+`
`+V+" "+K})}function ht(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Le(a,f)+(_?" "+_:"")})}function $e(a,h){a.info(function(){return"TIMEOUT: "+h})}Lt.prototype.info=function(){};function Le(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var V=D[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<D.length;K++)D[K]=""}}}}return ln(f)}catch{return h}}var Ye={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ae;function Rt(){}A(Rt,Pr),Rt.prototype.g=function(){return new XMLHttpRequest},Rt.prototype.i=function(){return{}},Ae=new Rt;function We(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gr}function Gr(){this.i=null,this.g="",this.h=!1}var Sn={},cs={};function us(a,h,f){a.L=1,a.v=qo(cn(h)),a.m=f,a.P=!0,qe(a,null)}function qe(a,h){a.F=Date.now(),Ut(a),a.A=cn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),vh(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Gr,a.g=Lh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new qr(p(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(zr[0]=D.toString()),D=zr);for(var V=0;V<D.length;V++){var K=Fo(f,D[V],_||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ge(),st(a.i,a.u,a.A,a.l,a.R,a.m)}We.prototype.ca=function(a){a=a.target;const h=this.M;h&&un(a)==3?h.j():this.Y(a)},We.prototype.Y=function(a){try{if(a==this.g)e:{const Bt=un(this.g);var h=this.g.Ba();const Ls=this.g.Z();if(!(3>Bt)&&(Bt!=3||this.g&&(this.h.h||this.g.oa()||Ah(this.g)))){this.J||Bt!=4||h==7||(h==8||0>=Ls?Ge(3):Ge(2)),kl(this);var f=this.g.Z();this.X=f;t:if(Zt(this)){var _=Ah(this.g);a="";var D=_.length,V=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hs(this),xi(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(V&&h==D-1)});_.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,tt(this.i,this.u,this.A,this.l,this.R,Bt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Pt=this.g;if((Be=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Be)){var Ce=Be;break t}}Ce=null}if(f=Ce)ht(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rl(this,f);else{this.o=!1,this.s=3,De(12),hs(this),xi(this);break e}}if(this.P){f=!0;let Sr;for(;!this.J&&this.C<K.length;)if(Sr=Fe(this,K),Sr==cs){Bt==4&&(this.s=4,De(14),f=!1),ht(this.i,this.l,null,"[Incomplete Response]");break}else if(Sr==Sn){this.s=4,De(15),ht(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else ht(this.i,this.l,Sr,null),Rl(this,Sr);if(Zt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Bt!=4||K.length!=0||this.h.h||(this.s=1,De(16),f=!1),this.o=this.o&&f,!f)ht(this.i,this.l,K,"[Invalid Chunked Response]"),hs(this),xi(this);else if(0<K.length&&!this.W){this.W=!0;var Ft=this.j;Ft.g==this&&Ft.ba&&!Ft.M&&(Ft.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Nl(Ft),Ft.M=!0,De(11))}}else ht(this.i,this.l,K,null),Rl(this,K);Bt==4&&hs(this),this.o&&!this.J&&(Bt==4?Dh(this.j,this):(this.o=!1,Ut(this)))}else M_(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),hs(this),xi(this)}}}catch{}finally{}};function Zt(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Fe(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?cs:(f=Number(h.substring(f,_)),isNaN(f)?Sn:(_+=1,_+f>h.length?cs:(h=h.slice(_,_+f),a.C=_+f,h)))}We.prototype.cancel=function(){this.J=!0,hs(this)};function Ut(a){a.S=Date.now()+a.I,oh(a,a.I)}function oh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Vt(p(a.ba,a),h)}function kl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}We.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($e(this.i,this.A),this.L!=2&&(Ge(),De(17)),hs(this),this.s=2,xi(this)):oh(this,this.S-a)};function xi(a){a.j.G==0||a.J||Dh(a.j,a)}function hs(a){kl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Tt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Rl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Pl(f.h,a))){if(!a.K&&Pl(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ko(f),Wo(f);else break e;Dl(f),De(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=Vt(p(f.Za,f),6e3));if(1>=ch(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else fs(f,11)}else if((a.K||f.g==a)&&Ko(f),!x(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let Ce=D[h];if(f.T=Ce[0],Ce=Ce[1],f.G==2)if(Ce[0]=="c"){f.K=Ce[1],f.ia=Ce[2];const Ft=Ce[3];Ft!=null&&(f.la=Ft,f.j.info("VER="+f.la));const Bt=Ce[4];Bt!=null&&(f.Aa=Bt,f.j.info("SVER="+f.Aa));const Ls=Ce[5];Ls!=null&&typeof Ls=="number"&&0<Ls&&(_=1.5*Ls,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const Sr=a.g;if(Sr){const Yo=Sr.g?Sr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yo){var V=_.h;V.g||Yo.indexOf("spdy")==-1&&Yo.indexOf("quic")==-1&&Yo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Cl(V,V.h),V.h=null))}if(_.D){const Ol=Sr.g?Sr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ol&&(_.ya=Ol,He(_.I,_.D,Ol))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var K=a;if(_.qa=Vh(_,_.J?_.ia:null,_.W),K.K){uh(_.h,K);var Be=K,Pt=_.L;Pt&&(Be.I=Pt),Be.B&&(kl(Be),Ut(Be)),_.g=K}else Sh(_);0<f.i.length&&Ho(f)}else Ce[0]!="stop"&&Ce[0]!="close"||fs(f,7);else f.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?fs(f,7):xl(f):Ce[0]!="noop"&&f.l&&f.l.ta(Ce),f.v=0)}}Ge(4)}catch{}}var b_=class{constructor(a,h){this.g=a,this.map=h}};function ah(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ch(a){return a.h?1:a.g?a.g.size:0}function Pl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Cl(a,h){a.g?a.g.add(h):a.h=h}function uh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ah.prototype.cancel=function(){if(this.i=hh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return R(a.i)}function E_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function I_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function dh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=I_(a),_=E_(a),D=_.length,V=0;V<D;V++)h.call(void 0,_[V],f&&f[V],a)}var fh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T_(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),D=null;if(0<=_){var V=a[f].substring(0,_);D=a[f].substring(_+1)}else V=a[f];h(V,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ds(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ds){this.h=a.h,Bo(this,a.j),this.o=a.o,this.g=a.g,$o(this,a.s),this.l=a.l;var h=a.i,f=new Oi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),gh(this,f),this.m=a.m}else a&&(h=String(a).match(fh))?(this.h=!1,Bo(this,h[1]||"",!0),this.o=Di(h[2]||""),this.g=Di(h[3]||"",!0),$o(this,h[4]),this.l=Di(h[5]||"",!0),gh(this,h[6]||"",!0),this.m=Di(h[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}ds.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ni(h,ph,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ni(h,ph,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ni(f,f.charAt(0)=="/"?R_:k_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ni(f,C_)),a.join("")};function cn(a){return new ds(a)}function Bo(a,h,f){a.j=f?Di(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function $o(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function gh(a,h,f){h instanceof Oi?(a.i=h,S_(a.i,a.h)):(f||(h=Ni(h,P_)),a.i=new Oi(h,a.h))}function He(a,h,f){a.i.set(h,f)}function qo(a){return He(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Di(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ni(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,A_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function A_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ph=/[#\/\?@]/g,k_=/[#\?:]/g,R_=/[#\?]/g,P_=/[#\?@]/g,C_=/#/g;function Oi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function xn(a){a.g||(a.g=new Map,a.h=0,a.i&&T_(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}r=Oi.prototype,r.add=function(a,h){xn(this),this.i=null,a=Os(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function mh(a,h){xn(a),h=Os(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function _h(a,h){return xn(a),h=Os(a,h),a.g.has(h)}r.forEach=function(a,h){xn(this),this.g.forEach(function(f,_){f.forEach(function(D){a.call(h,D,_,this)},this)},this)},r.na=function(){xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const D=a[_];for(let V=0;V<D.length;V++)f.push(h[_])}return f},r.V=function(a){xn(this);let h=[];if(typeof a=="string")_h(this,a)&&(h=h.concat(this.g.get(Os(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},r.set=function(a,h){return xn(this),this.i=null,a=Os(this,a),_h(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},r.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function vh(a,h,f){mh(a,h),0<f.length&&(a.i=null,a.g.set(Os(a,h),R(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const V=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var D=V;K[_]!==""&&(D+="="+encodeURIComponent(String(K[_]))),a.push(D)}}return this.i=a.join("&")};function Os(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function S_(a,h){h&&!a.j&&(xn(a),a.i=null,a.g.forEach(function(f,_){var D=_.toLowerCase();_!=D&&(mh(this,_),vh(this,D,f))},a)),a.j=h}function x_(a,h){const f=new Lt;if(l.Image){const _=new Image;_.onload=v(Dn,f,"TestLoadImage: loaded",!0,h,_),_.onerror=v(Dn,f,"TestLoadImage: error",!1,h,_),_.onabort=v(Dn,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=v(Dn,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function D_(a,h){const f=new Lt,_=new AbortController,D=setTimeout(()=>{_.abort(),Dn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(D),V.ok?Dn(f,"TestPingServer: ok",!0,h):Dn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Dn(f,"TestPingServer: error",!1,h)})}function Dn(a,h,f,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(f)}catch{}}function N_(){this.g=new Ns}function O_(a,h,f){const _=f||"";try{dh(a,function(D,V){let K=D;u(D)&&(K=ln(D)),h.push(_+V+"="+encodeURIComponent(K))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function zo(a){this.l=a.Ub||null,this.j=a.eb||!1}A(zo,Pr),zo.prototype.g=function(){return new jo(this.l,this.j)},zo.prototype.i=function(a){return function(){return a}}({});function jo(a,h){Ne.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(jo,Ne),r=jo.prototype,r.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Li(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function yh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Vi(this):Li(this),this.readyState==3&&yh(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Vi(this))},r.Qa=function(a){this.g&&(this.response=a,Vi(this))},r.ga=function(){this.g&&Vi(this)};function Vi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Li(a)}r.setRequestHeader=function(a,h){this.u.append(a,h)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wh(a){let h="";return M(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Sl(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=wh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):He(a,h,f))}function it(a){Ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(it,Ne);var V_=/^https?$/i,L_=["POST","PUT"];r=it.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ae.g(),this.v=this.o?Cn(this.o):Cn(Ae),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){bh(this,V);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)f.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())f.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(L_,h,void 0))||_||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of f)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Th(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){bh(this,V)}};function bh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Eh(a),Go(a)}function Eh(a){a.A||(a.A=!0,Ze(a,"complete"),Ze(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ze(this,"complete"),Ze(this,"abort"),Go(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Go(this,!0)),it.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ih(this):this.bb())},r.bb=function(){Ih(this)};function Ih(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)$r(a.Ea,0,a);else if(Ze(a,"readystatechange"),un(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=K===0){var D=String(a.D).match(fh)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),_=!V_.test(D?D.toLowerCase():"")}f=_}if(f)Ze(a,"complete"),Ze(a,"success");else{a.m=6;try{var V=2<un(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Eh(a)}}finally{Go(a)}}}}function Go(a,h){if(a.g){Th(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ze(a,"ready");try{f.onreadystatechange=_}catch{}}}function Th(a){a.I&&(l.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Pn(h)}};function Ah(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function M_(a){const h={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(x(a[_]))continue;var f=I(a[_]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[D]||[];h[D]=V,V.push(f)}E(h,function(_){return _.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function kh(a){this.Aa=0,this.i=[],this.j=new Lt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mi("baseRetryDelayMs",5e3,a),this.cb=Mi("retryDelaySeedMs",1e4,a),this.Wa=Mi("forwardChannelMaxRetries",2,a),this.wa=Mi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ah(a&&a.concurrentRequestLimit),this.Da=new N_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=kh.prototype,r.la=8,r.G=1,r.connect=function(a,h,f,_){De(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=Vh(this,null,this.W),Ho(this)};function xl(a){if(Rh(a),a.G==3){var h=a.U++,f=cn(a.I);if(He(f,"SID",a.K),He(f,"RID",h),He(f,"TYPE","terminate"),Ui(a,f),h=new We(a,a.j,h),h.L=2,h.v=qo(cn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Lh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ut(h)}Oh(a)}function Wo(a){a.g&&(Nl(a),a.g.cancel(),a.g=null)}function Rh(a){Wo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ko(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ho(a){if(!lh(a.h)&&!a.s){a.s=!0;var h=a.Ga;le||at(),ve||(le(),ve=!0),Pe.add(h,a),a.B=0}}function U_(a,h){return ch(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Vt(p(a.Ga,a,h),Nh(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new We(this,this.j,a);let V=this.o;if(this.S&&(V?(V=m(V),b(V,this.S)):V=this.S),this.m!==null||this.O||(D.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ch(this,D,h),f=cn(this.I),He(f,"RID",a),He(f,"CVER",22),this.D&&He(f,"X-HTTP-Session-Id",this.D),Ui(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(wh(V)))+"&"+h:this.m&&Sl(f,this.m,V)),Cl(this.h,D),this.Ua&&He(f,"TYPE","init"),this.P?(He(f,"$req",h),He(f,"SID","null"),D.T=!0,us(D,f,null)):us(D,f,h),this.G=2}}else this.G==3&&(a?Ph(this,a):this.i.length==0||lh(this.h)||Ph(this))};function Ph(a,h){var f;h?f=h.l:f=a.U++;const _=cn(a.I);He(_,"SID",a.K),He(_,"RID",f),He(_,"AID",a.T),Ui(a,_),a.m&&a.o&&Sl(_,a.m,a.o),f=new We(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Ch(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Cl(a.h,f),us(f,_,h)}function Ui(a,h){a.H&&M(a.H,function(f,_){He(h,_,f)}),a.l&&dh({},function(f,_){He(h,_,f)})}function Ch(a,h,f){f=Math.min(a.i.length,f);var _=a.l?p(a.l.Na,a.l,a):null;e:{var D=a.i;let V=-1;for(;;){const K=["count="+f];V==-1?0<f?(V=D[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let Be=!0;for(let Pt=0;Pt<f;Pt++){let Ce=D[Pt].g;const Ft=D[Pt].map;if(Ce-=V,0>Ce)V=Math.max(0,D[Pt].g-100),Be=!1;else try{O_(Ft,K,"req"+Ce+"_")}catch{_&&_(Ft)}}if(Be){_=K.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function Sh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;le||at(),ve||(le(),ve=!0),Pe.add(h,a),a.v=0}}function Dl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Vt(p(a.Fa,a),Nh(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,xh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Vt(p(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Wo(this),xh(this))};function Nl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function xh(a){a.g=new We(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=cn(a.qa);He(h,"RID","rpc"),He(h,"SID",a.K),He(h,"AID",a.T),He(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&He(h,"TO",a.ja),He(h,"TYPE","xmlhttp"),Ui(a,h),a.m&&a.o&&Sl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=qo(cn(h)),f.m=null,f.P=!0,qe(f,a)}r.Za=function(){this.C!=null&&(this.C=null,Wo(this),Dl(this),De(19))};function Ko(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Dh(a,h){var f=null;if(a.g==h){Ko(a),Nl(a),a.g=null;var _=2}else if(Pl(a.h,h))f=h.D,uh(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;_=kt(),Ze(_,new et(_,f)),Ho(a)}else Sh(a);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&U_(a,h)||_==2&&Dl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),D){case 1:fs(a,5);break;case 4:fs(a,10);break;case 3:fs(a,6);break;default:fs(a,2)}}}function Nh(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function fs(a,h){if(a.j.info("Error code "+h),h==2){var f=p(a.fb,a),_=a.Xa;const D=!_;_=new ds(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Bo(_,"https"),qo(_),D?x_(_.toString(),f):D_(_.toString(),f)}else De(2);a.G=0,a.l&&a.l.sa(h),Oh(a),Rh(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Oh(a){if(a.G=0,a.ka=[],a.l){const h=hh(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Vh(a,h,f){var _=f instanceof ds?cn(f):new ds(f);if(_.g!="")h&&(_.g=h+"."+_.g),$o(_,_.s);else{var D=l.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var V=new ds(null);_&&Bo(V,_),h&&(V.g=h),D&&$o(V,D),f&&(V.l=f),_=V}return f=a.D,h=a.ya,f&&h&&He(_,f,h),He(_,"VER",a.la),Ui(a,_),_}function Lh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new it(new zo({eb:f})):new it(a.pa),h.Ha(a.J),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mh(){}r=Mh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Qo(){}Qo.prototype.g=function(a,h){return new hr(a,h)};function hr(a,h){Ne.call(this),this.g=new kh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Vs(this)}A(hr,Ne),hr.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},hr.prototype.close=function(){xl(this.g)},hr.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ln(a),a=f);h.i.push(new b_(h.Ya++,a)),h.G==3&&Ho(h)},hr.prototype.N=function(){this.g.l=null,delete this.j,xl(this.g),delete this.g,hr.aa.N.call(this)};function Uh(a){ls.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Uh,ls);function Fh(){Wt.call(this),this.status=1}A(Fh,Wt);function Vs(a){this.g=a}A(Vs,Mh),Vs.prototype.ua=function(){Ze(this.g,"a")},Vs.prototype.ta=function(a){Ze(this.g,new Uh(a))},Vs.prototype.sa=function(a){Ze(this.g,new Fh)},Vs.prototype.ra=function(){Ze(this.g,"b")},Qo.prototype.createWebChannel=Qo.prototype.g,hr.prototype.send=hr.prototype.o,hr.prototype.open=hr.prototype.m,hr.prototype.close=hr.prototype.close,Op=function(){return new Qo},Np=function(){return kt()},Dp=Xt,Cc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ye.NO_ERROR=0,Ye.TIMEOUT=8,Ye.HTTP_ERROR=6,ga=Ye,Mt.COMPLETE="complete",xp=Mt,Cr.EventType=jr,jr.OPEN="a",jr.CLOSE="b",jr.ERROR="c",jr.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,Wi=Cr,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,Sp=it}).apply(typeof ea<"u"?ea:typeof self<"u"?self:typeof window<"u"?window:{});const Md="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new rl("@firebase/firestore");function qs(){return As.logLevel}function J(r,...e){if(As.logLevel<=Ie.DEBUG){const t=e.map(yu);As.debug(`Firestore (${Ii}): ${r}`,...t)}}function An(r,...e){if(As.logLevel<=Ie.ERROR){const t=e.map(yu);As.error(`Firestore (${Ii}): ${r}`,...t)}}function ii(r,...e){if(As.logLevel<=Ie.WARN){const t=e.map(yu);As.warn(`Firestore (${Ii}): ${r}`,...t)}}function yu(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(r="Unexpected state"){const e=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+r;throw An(e),new Error(e)}function Oe(r,e){r||ue()}function ge(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends ar{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(zt.UNAUTHENTICATED))}shutdown(){}}class VI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class LI{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Oe(this.o===void 0);let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Oe(typeof n.accessToken=="string"),new Vp(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new zt(e)}}class MI{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class UI{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new MI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Oe(this.o===void 0);const n=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Oe(typeof t.token=="string"),this.R=t.token,new FI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=$I(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function ke(r,e){return r<e?-1:r>e?1:0}function oi(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new _t(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Z(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new _t(0,0))}static max(){return new fe(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,n){t===void 0?t=0:t>e.length&&ue(),n===void 0?n=e.length-t:n>e.length-t&&ue(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return fo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fo?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Qe extends fo{construct(e,t,n){return new Qe(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Z(q.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const qI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends fo{construct(e,t,n){return new St(e,t,n)}static isValidIdentifier(e){return qI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new Z(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(n+=l,s++):(i(),s++)}if(i(),o)throw new Z(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(t)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Qe.fromString(e))}static fromName(e){return new oe(Qe.fromString(e).popFirst(5))}static empty(){return new oe(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Qe(e.slice()))}}function zI(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(n===1e9?new _t(t+1,0):new _t(t,n));return new Jn(s,oe.empty(),e)}function jI(r){return new Jn(r.readTime,r.key,-1)}class Jn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Jn(fe.min(),oe.empty(),-1)}static max(){return new Jn(fe.max(),oe.empty(),-1)}}function GI(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(r.documentKey,e.documentKey),t!==0?t:ke(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(r){if(r.code!==q.FAILED_PRECONDITION||r.message!==WI)throw r;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,n)=>{t(e)})}static reject(e){return new $((t,n)=>{n(e)})}static waitFor(e){return new $((t,n)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>n(c))}),o=!0,i===s&&t()})}static or(e){let t=$.resolve(!1);for(const n of e)t=t.next(s=>s?$.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new $((n,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++l,l===i&&n(o)},d=>s(d))}})}static doWhile(e,t){return new $((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}function KI(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ai(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ll.oe=-1;function cl(r){return r==null}function Da(r){return r===0&&1/r==-1/0}function QI(r){return typeof r=="number"&&Number.isInteger(r)&&!Da(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ud(e)),e=JI(r.get(t),e);return Ud(e)}function JI(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Ud(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function os(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Mp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Ct.RED,this.left=s??Ct.EMPTY,this.right=i??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Ct(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,t,n,s,i){return this}insert(e,t,n){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bd(this.data.getIterator())}getIteratorFrom(e){return new Bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new _r([])}unionWith(e){let t=new vt(St.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new _r(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return oi(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Up("Invalid base64 string: "+i):i}}(e);return new xt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const XI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(r){if(Oe(!!r),typeof r=="string"){let e=0;const t=XI.exec(r);if(Oe(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:dt(r.seconds),nanos:dt(r.nanos)}}function dt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Zn(r){return typeof r=="string"?xt.fromBase64String(r):xt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ul(r){const e=r.mapValue.fields.__previous_value__;return wu(e)?ul(e):e}function go(r){const e=Xn(r.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t,n,s,i,o,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class po{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof po&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function es(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?wu(r)?4:tT(r)?9007199254740991:eT(r)?10:11:ue()}function nn(r,e){if(r===e)return!0;const t=es(r);if(t!==es(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return go(r).isEqual(go(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xn(s.timestampValue),l=Xn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Zn(s.bytesValue).isEqual(Zn(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return dt(s.geoPointValue.latitude)===dt(i.geoPointValue.latitude)&&dt(s.geoPointValue.longitude)===dt(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return dt(s.integerValue)===dt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=dt(s.doubleValue),l=dt(i.doubleValue);return o===l?Da(o)===Da(l):isNaN(o)&&isNaN(l)}return!1}(r,e);case 9:return oi(r.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Fd(o)!==Fd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!nn(o[c],l[c])))return!1;return!0}(r,e);default:return ue()}}function mo(r,e){return(r.values||[]).find(t=>nn(t,e))!==void 0}function ai(r,e){if(r===e)return 0;const t=es(r),n=es(e);if(t!==n)return ke(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(r.booleanValue,e.booleanValue);case 2:return function(i,o){const l=dt(i.integerValue||i.doubleValue),c=dt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(r,e);case 3:return $d(r.timestampValue,e.timestampValue);case 4:return $d(go(r),go(e));case 5:return ke(r.stringValue,e.stringValue);case 6:return function(i,o){const l=Zn(i),c=Zn(o);return l.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ke(l[u],c[u]);if(d!==0)return d}return ke(l.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ke(dt(i.latitude),dt(o.latitude));return l!==0?l:ke(dt(i.longitude),dt(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return qd(r.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const g=i.fields||{},p=o.fields||{},v=(l=g.value)===null||l===void 0?void 0:l.arrayValue,A=(c=p.value)===null||c===void 0?void 0:c.arrayValue,R=ke(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return R!==0?R:qd(v,A)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===ra.mapValue&&o===ra.mapValue)return 0;if(i===ra.mapValue)return 1;if(o===ra.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const p=ke(c[g],d[g]);if(p!==0)return p;const v=ai(l[c[g]],u[d[g]]);if(v!==0)return v}return ke(c.length,d.length)}(r.mapValue,e.mapValue);default:throw ue()}}function $d(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ke(r,e);const t=Xn(r),n=Xn(e),s=ke(t.seconds,n.seconds);return s!==0?s:ke(t.nanos,n.nanos)}function qd(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=ai(t[s],n[s]);if(i)return i}return ke(t.length,n.length)}function li(r){return Sc(r)}function Sc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Xn(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Zn(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return oe.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Sc(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${Sc(t.fields[o])}`;return s+"}"}(r.mapValue):ue()}function pa(r){switch(es(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ul(r);return e?16+pa(e):16;case 5:return 2*r.stringValue.length;case 6:return Zn(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+pa(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return os(n.fields,(i,o)=>{s+=i.length+pa(o)}),s}(r.mapValue);default:throw ue()}}function zd(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function xc(r){return!!r&&"integerValue"in r}function bu(r){return!!r&&"arrayValue"in r}function jd(r){return!!r&&"nullValue"in r}function Gd(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ma(r){return!!r&&"mapValue"in r}function eT(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Xi(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return os(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Xi(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xi(r.arrayValue.values[t]);return e}return Object.assign({},r)}function tT(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.value=e}static empty(){return new nr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ma(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xi(t)}setAll(e){let t=St.emptyPath(),n={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=l.popLast()}o?n[l.lastSegment()]=Xi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());ma(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];ma(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){os(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new nr(Xi(this.value))}}function Fp(r){const e=[];return os(r.fields,(t,n)=>{const s=new St([t]);if(ma(n)){const i=Fp(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new _r(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,n,s,i,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new jt(e,0,fe.min(),fe.min(),fe.min(),nr.empty(),0)}static newFoundDocument(e,t,n,s){return new jt(e,1,t,fe.min(),n,s,0)}static newNoDocument(e,t){return new jt(e,2,t,fe.min(),fe.min(),nr.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,fe.min(),fe.min(),nr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.position=e,this.inclusive=t}}function Wd(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=oe.comparator(oe.fromName(o.referenceValue),t.key):n=ai(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Hd(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!nn(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t="asc"){this.field=e,this.dir=t}}function rT(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{}class mt extends Bp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new sT(e,t,n):t==="array-contains"?new aT(e,n):t==="in"?new lT(e,n):t==="not-in"?new cT(e,n):t==="array-contains-any"?new uT(e,n):new mt(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new iT(e,n):new oT(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ai(t,this.value)):t!==null&&es(this.value)===es(t)&&this.matchesComparison(ai(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mr extends Bp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Mr(e,t)}matches(e){return $p(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $p(r){return r.op==="and"}function qp(r){return nT(r)&&$p(r)}function nT(r){for(const e of r.filters)if(e instanceof Mr)return!1;return!0}function Dc(r){if(r instanceof mt)return r.field.canonicalString()+r.op.toString()+li(r.value);if(qp(r))return r.filters.map(e=>Dc(e)).join(",");{const e=r.filters.map(t=>Dc(t)).join(",");return`${r.op}(${e})`}}function zp(r,e){return r instanceof mt?function(n,s){return s instanceof mt&&n.op===s.op&&n.field.isEqual(s.field)&&nn(n.value,s.value)}(r,e):r instanceof Mr?function(n,s){return s instanceof Mr&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,l)=>i&&zp(o,s.filters[l]),!0):!1}(r,e):void ue()}function jp(r){return r instanceof mt?function(t){return`${t.field.canonicalString()} ${t.op} ${li(t.value)}`}(r):r instanceof Mr?function(t){return t.op.toString()+" {"+t.getFilters().map(jp).join(" ,")+"}"}(r):"Filter"}class sT extends mt{constructor(e,t,n){super(e,t,n),this.key=oe.fromName(n.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class iT extends mt{constructor(e,t){super(e,"in",t),this.keys=Gp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class oT extends mt{constructor(e,t){super(e,"not-in",t),this.keys=Gp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Gp(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>oe.fromName(n.referenceValue))}class aT extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bu(t)&&mo(t.arrayValue,this.value)}}class lT extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mo(this.value.arrayValue,t)}}class cT extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!mo(this.value.arrayValue,t)}}class uT extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>mo(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,t=null,n=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Kd(r,e=null,t=[],n=[],s=null,i=null,o=null){return new hT(r,e,t,n,s,i,o)}function Eu(r){const e=ge(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Dc(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),cl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>li(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>li(n)).join(",")),e.ue=t}return e.ue}function Iu(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!rT(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!zp(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Hd(r.startAt,e.startAt)&&Hd(r.endAt,e.endAt)}function Nc(r){return oe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t=null,n=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function dT(r,e,t,n,s,i,o,l){return new Do(r,e,t,n,s,i,o,l)}function Tu(r){return new Do(r)}function Qd(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Wp(r){return r.collectionGroup!==null}function Zi(r){const e=ge(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new vt(St.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Oa(i,n))}),t.has(St.keyField().canonicalString())||e.ce.push(new Oa(St.keyField(),n))}return e.ce}function en(r){const e=ge(r);return e.le||(e.le=fT(e,Zi(r))),e.le}function fT(r,e){if(r.limitType==="F")return Kd(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oa(s.field,i)});const t=r.endAt?new Na(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Na(r.startAt.position,r.startAt.inclusive):null;return Kd(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Oc(r,e){const t=r.filters.concat([e]);return new Do(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Vc(r,e,t){return new Do(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function hl(r,e){return Iu(en(r),en(e))&&r.limitType===e.limitType}function Hp(r){return`${Eu(en(r))}|lt:${r.limitType}`}function zs(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>jp(s)).join(", ")}]`),cl(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>li(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>li(s)).join(",")),`Target(${n})`}(en(r))}; limitType=${r.limitType})`}function dl(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):oe.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Zi(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,l,c){const u=Wd(o,l,c);return o.inclusive?u<=0:u<0}(n.startAt,Zi(n),s)||n.endAt&&!function(o,l,c){const u=Wd(o,l,c);return o.inclusive?u>=0:u>0}(n.endAt,Zi(n),s))}(r,e)}function gT(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Kp(r){return(e,t)=>{let n=!1;for(const s of Zi(r)){const i=pT(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function pT(r,e,t){const n=r.field.isKeyField()?oe.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?ai(c,u):ue()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Mp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new nt(oe.comparator);function kn(){return mT}const Qp=new nt(oe.comparator);function Hi(...r){let e=Qp;for(const t of r)e=e.insert(t.key,t);return e}function Yp(r){let e=Qp;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ms(){return eo()}function Jp(){return eo()}function eo(){return new xs(r=>r.toString(),(r,e)=>r.isEqual(e))}const _T=new nt(oe.comparator),vT=new vt(oe.comparator);function Te(...r){let e=vT;for(const t of r)e=e.add(t);return e}const yT=new vt(ke);function wT(){return yT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Da(e)?"-0":e}}function Xp(r){return{integerValue:""+r}}function bT(r,e){return QI(e)?Xp(e):Au(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this._=void 0}}function ET(r,e,t){return r instanceof Va?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&wu(i)&&(i=ul(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof _o?em(r,e):r instanceof vo?tm(r,e):function(s,i){const o=Zp(s,i),l=Yd(o)+Yd(s.Pe);return xc(o)&&xc(s.Pe)?Xp(l):Au(s.serializer,l)}(r,e)}function IT(r,e,t){return r instanceof _o?em(r,e):r instanceof vo?tm(r,e):t}function Zp(r,e){return r instanceof La?function(n){return xc(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Va extends fl{}class _o extends fl{constructor(e){super(),this.elements=e}}function em(r,e){const t=rm(e);for(const n of r.elements)t.some(s=>nn(s,n))||t.push(n);return{arrayValue:{values:t}}}class vo extends fl{constructor(e){super(),this.elements=e}}function tm(r,e){let t=rm(e);for(const n of r.elements)t=t.filter(s=>!nn(s,n));return{arrayValue:{values:t}}}class La extends fl{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Yd(r){return dt(r.integerValue||r.doubleValue)}function rm(r){return bu(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function TT(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof _o&&s instanceof _o||n instanceof vo&&s instanceof vo?oi(n.elements,s.elements,nn):n instanceof La&&s instanceof La?nn(n.Pe,s.Pe):n instanceof Va&&s instanceof Va}(r.transform,e.transform)}class AT{constructor(e,t){this.version=e,this.transformResults=t}}class Nr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nr}static exists(e){return new Nr(void 0,e)}static updateTime(e){return new Nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _a(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class gl{}function nm(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new ku(r.key,Nr.none()):new No(r.key,r.data,Nr.none());{const t=r.data,n=nr.empty();let s=new vt(St.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new as(r.key,n,new _r(s.toArray()),Nr.none())}}function kT(r,e,t){r instanceof No?function(s,i,o){const l=s.value.clone(),c=Xd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):r instanceof as?function(s,i,o){if(!_a(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Xd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(sm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function to(r,e,t,n){return r instanceof No?function(i,o,l,c){if(!_a(i.precondition,o))return l;const u=i.value.clone(),d=Zd(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(r,e,t,n):r instanceof as?function(i,o,l,c){if(!_a(i.precondition,o))return l;const u=Zd(i.fieldTransforms,c,o),d=o.data;return d.setAll(sm(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,e,t,n):function(i,o,l){return _a(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(r,e,t)}function RT(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Zp(n.transform,s||null);i!=null&&(t===null&&(t=nr.empty()),t.set(n.field,i))}return t||null}function Jd(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&oi(n,s,(i,o)=>TT(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class No extends gl{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class as extends gl{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sm(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Xd(r,e,t){const n=new Map;Oe(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,l=e.data.field(i.field);n.set(i.field,IT(o,l,t[s]))}return n}function Zd(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,ET(i,o,e))}return n}class ku extends gl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PT extends gl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kT(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=to(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=to(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Jp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=nm(o,l);c!==null&&n.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Te())}isEqual(e){return this.batchId===e.batchId&&oi(this.mutations,e.mutations,(t,n)=>Jd(t,n))&&oi(this.baseMutations,e.baseMutations,(t,n)=>Jd(t,n))}}class Ru{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){Oe(e.mutations.length===n.length);let s=function(){return _T}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Ru(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Re;function DT(r){switch(r){default:return ue();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function im(r){if(r===void 0)return An("GRPC error has no .code"),q.UNKNOWN;switch(r){case gt.OK:return q.OK;case gt.CANCELLED:return q.CANCELLED;case gt.UNKNOWN:return q.UNKNOWN;case gt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case gt.INTERNAL:return q.INTERNAL;case gt.UNAVAILABLE:return q.UNAVAILABLE;case gt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case gt.NOT_FOUND:return q.NOT_FOUND;case gt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case gt.ABORTED:return q.ABORTED;case gt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case gt.DATA_LOSS:return q.DATA_LOSS;default:return ue()}}(Re=gt||(gt={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new ws([4294967295,4294967295],0);function ef(r){const e=NT().encode(r),t=new Cp;return t.update(e),new Uint8Array(t.digest())}function tf(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ws([t,n],0),new ws([s,i],0)]}class Pu{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ki(`Invalid padding: ${t}`);if(n<0)throw new Ki(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ki(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ki(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ws.fromNumber(this.Te)}Ee(e,t,n){let s=e.add(t.multiply(ws.fromNumber(n)));return s.compare(OT)===1&&(s=new ws([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=ef(e),[n,s]=tf(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Pu(i,s,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const t=ef(e),[n,s]=tf(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Oo.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new pl(fe.min(),s,new nt(ke),kn(),Te())}}class Oo{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Oo(n,t,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class om{constructor(e,t){this.targetId=e,this.me=t}}class am{constructor(e,t,n=xt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class rf{constructor(){this.fe=0,this.ge=nf(),this.pe=xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Te(),t=Te(),n=Te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:ue()}}),new Oo(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=nf()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class VT{constructor(e){this.Le=e,this.Be=new Map,this.ke=kn(),this.qe=na(),this.Qe=na(),this.Ke=new nt(ke)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,n=e.me.count,s=this.Ye(t);if(s){const i=s.target;if(Nc(i))if(n===0){const o=new oe(i.path);this.We(t,o,jt.newNoDocument(o,fe.min()))}else Oe(n===1);else{const o=this.Ze(t);if(o!==n){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Zn(n).toUint8Array()}catch(c){if(c instanceof Up)return ii("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Pu(o,s,i)}catch(c){return ii(c instanceof Ki?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,t,n){return t.me.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&Nc(l.target)){const c=new oe(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,jt.newNoDocument(c,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=Te();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new pl(e,t,this.Ke,this.ke,n);return this.ke=kn(),this.qe=na(),this.Qe=na(),this.Ke=new nt(ke),s}Ue(e,t){if(!this.je(e))return;const n=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new rf,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new vt(ke),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new vt(ke),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new rf),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function na(){return new nt(oe.comparator)}function nf(){return new nt(oe.comparator)}const LT={asc:"ASCENDING",desc:"DESCENDING"},MT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UT={and:"AND",or:"OR"};class FT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lc(r,e){return r.useProto3Json||cl(e)?e:{value:e}}function Ma(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lm(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function BT(r,e){return Ma(r,e.toTimestamp())}function tn(r){return Oe(!!r),fe.fromTimestamp(function(t){const n=Xn(t);return new _t(n.seconds,n.nanos)}(r))}function Cu(r,e){return Mc(r,e).canonicalString()}function Mc(r,e){const t=function(s){return new Qe(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function cm(r){const e=Qe.fromString(r);return Oe(gm(e)),e}function Uc(r,e){return Cu(r.databaseId,e.path)}function Jl(r,e){const t=cm(e);if(t.get(1)!==r.databaseId.projectId)throw new Z(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new Z(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new oe(hm(t))}function um(r,e){return Cu(r.databaseId,e)}function $T(r){const e=cm(r);return e.length===4?Qe.emptyPath():hm(e)}function Fc(r){return new Qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function hm(r){return Oe(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function sf(r,e,t){return{name:Uc(r,e),fields:t.value.mapValue.fields}}function qT(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Oe(d===void 0||typeof d=="string"),xt.fromBase64String(d||"")):(Oe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),xt.fromUint8Array(d||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?q.UNKNOWN:im(u.code);return new Z(d,u.message||"")}(o);t=new am(n,s,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Jl(r,n.document.name),i=tn(n.document.updateTime),o=n.document.createTime?tn(n.document.createTime):fe.min(),l=new nr({mapValue:{fields:n.document.fields}}),c=jt.newFoundDocument(s,i,o,l),u=n.targetIds||[],d=n.removedTargetIds||[];t=new va(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Jl(r,n.document),i=n.readTime?tn(n.readTime):fe.min(),o=jt.newNoDocument(s,i),l=n.removedTargetIds||[];t=new va([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Jl(r,n.document),i=n.removedTargetIds||[];t=new va([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new xT(s,i),l=n.targetId;t=new om(l,o)}}return t}function zT(r,e){let t;if(e instanceof No)t={update:sf(r,e.key,e.value)};else if(e instanceof ku)t={delete:Uc(r,e.key)};else if(e instanceof as)t={update:sf(r,e.key,e.data),updateMask:XT(e.fieldMask)};else{if(!(e instanceof PT))return ue();t={verify:Uc(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const l=o.transform;if(l instanceof Va)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof La)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ue()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:BT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(r,e.precondition)),t}function jT(r,e){return r&&r.length>0?(Oe(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?tn(s.updateTime):tn(i);return o.isEqual(fe.min())&&(o=tn(i)),new AT(o,s.transformResults||[])}(t,e))):[]}function GT(r,e){return{documents:[um(r,e.path)]}}function WT(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=um(r,s);const i=function(u){if(u.length!==0)return fm(Mr.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(p){return{field:js(p.field),direction:QT(p.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Lc(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:t,parent:s}}function HT(r){let e=$T(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){Oe(n===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(g){const p=dm(g);return p instanceof Mr&&qp(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(g){return g.map(p=>function(A){return new Oa(Gs(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(g){let p;return p=typeof g=="object"?g.value:g,cl(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(g){const p=!!g.before,v=g.values||[];return new Na(v,p)}(t.startAt));let u=null;return t.endAt&&(u=function(g){const p=!g.before,v=g.values||[];return new Na(v,p)}(t.endAt)),dT(e,s,o,i,l,"F",c,u)}function KT(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dm(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Gs(t.unaryFilter.field);return mt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Gs(t.unaryFilter.field);return mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gs(t.unaryFilter.field);return mt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gs(t.unaryFilter.field);return mt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(r):r.fieldFilter!==void 0?function(t){return mt.create(Gs(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Mr.create(t.compositeFilter.filters.map(n=>dm(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(t.compositeFilter.op))}(r):ue()}function QT(r){return LT[r]}function YT(r){return MT[r]}function JT(r){return UT[r]}function js(r){return{fieldPath:r.canonicalString()}}function Gs(r){return St.fromServerFormat(r.fieldPath)}function fm(r){return r instanceof mt?function(t){if(t.op==="=="){if(Gd(t.value))return{unaryFilter:{field:js(t.field),op:"IS_NAN"}};if(jd(t.value))return{unaryFilter:{field:js(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gd(t.value))return{unaryFilter:{field:js(t.field),op:"IS_NOT_NAN"}};if(jd(t.value))return{unaryFilter:{field:js(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:js(t.field),op:YT(t.op),value:t.value}}}(r):r instanceof Mr?function(t){const n=t.getFilters().map(s=>fm(s));return n.length===1?n[0]:{compositeFilter:{op:JT(t.op),filters:n}}}(r):ue()}function XT(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t,n,s,i=fe.min(),o=fe.min(),l=xt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.ht=e}}function eA(r){const e=HT({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Vc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.ln=new rA}addToCollectionParentIndex(e,t){return this.ln.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Jn.min())}updateCollectionGroup(e,t,n){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class rA{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new vt(Qe.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new vt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class tr{static withCacheSize(e){return new tr(e,tr.DEFAULT_COLLECTION_PERCENTILE,tr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr.DEFAULT_COLLECTION_PERCENTILE=10,tr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tr.DEFAULT=new tr(41943040,tr.DEFAULT_COLLECTION_PERCENTILE,tr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tr.DISABLED=new tr(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ci(0)}static Qn(){return new ci(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af([r,e],[t,n]){const s=ke(r,t);return s===0?ke(e,n):s}class nA{constructor(e){this.Gn=e,this.buffer=new vt(af),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();af(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sA{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){J("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ai(t)?J("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ti(t)}await this.Yn(3e5)})}}class iA{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return $.resolve(ll.oe);const n=new nA(t);return this.Zn.forEachTarget(e,s=>n.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>n.Hn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(of)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),of):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(n=g,l=Date.now(),this.removeTargets(e,n,t))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(g=>(u=Date.now(),qs()<=Ie.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function oA(r,e){return new iA(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.changes=new xs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?$.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&to(n.mutation,s,_r.empty(),_t.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Te()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Te()){const s=ms();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Hi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=ms();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Te()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,s){let i=kn();const o=eo(),l=function(){return eo()}();return t.forEach((c,u)=>{const d=n.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof as)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),to(d.mutation,u,d.mutation.getFieldMask(),_t.now())):o.set(u.key,_r.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var g;return l.set(u,new lA(d,(g=o.get(u))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const n=eo();let s=new nt((o,l)=>o-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=n.get(c)||_r.empty();d=l.applyToLocalView(u,d),n.set(c,d);const g=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,g=Jp();d.forEach(p=>{if(!i.has(p)){const v=nm(t.get(p),n.get(p));v!==null&&g.set(p,v),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,g))}return $.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):$.resolve(ms());let l=-1,c=i;return o.next(u=>$.forEach(u,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{c=c.insert(d,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(d=>({batchId:l,changes:Yp(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next(n=>{let s=Hi();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Hi();return this.indexManager.getCollectionParents(e,i).next(l=>$.forEach(l,c=>{const u=function(g,p){return new Do(p,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,s).next(d=>{d.forEach((g,p)=>{o=o.insert(g,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,jt.newInvalidDocument(d)))});let l=Hi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&to(d.mutation,u,_r.empty(),_t.now()),dl(t,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return $.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:tn(s.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:eA(s.bundledQuery),readTime:tn(s.readTime)}}(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.overlays=new nt(oe.comparator),this.Er=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ms();return $.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.Tt(e,t,i)}),$.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Er.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(n)),$.resolve()}getOverlaysForCollection(e,t,n){const s=ms(),i=t.length+1,o=new oe(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new nt((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let d=i.get(u.largestBatchId);d===null&&(d=ms(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=ms(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return $.resolve(l)}Tt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(n.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new ST(t,n));let i=this.Er.get(t);i===void 0&&(i=Te(),this.Er.set(t,i)),this.Er.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.dr=new vt(Et.Ar),this.Rr=new vt(Et.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const n=new Et(e,t);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.gr(new Et(e,t))}pr(e,t){e.forEach(n=>this.removeReference(n,t))}yr(e){const t=new oe(new Qe([])),n=new Et(t,e),s=new Et(t,e+1),i=[];return this.Rr.forEachInRange([n,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new oe(new Qe([])),n=new Et(t,e),s=new Et(t,e+1);let i=Te();return this.Rr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Et(e,0),n=this.dr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Et{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return oe.comparator(e.key,t.key)||ke(e.br,t.br)}static Vr(e,t){return ke(e.br,t.br)||oe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new vt(Et.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CT(i,t,n,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new Et(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,t){return $.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Fr(n),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Et(t,0),s=new Et(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,s],o=>{const l=this.Cr(o.br);i.push(l)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new vt(ke);return t.forEach(s=>{const i=new Et(s,0),o=new Et(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{n=n.add(l.br)})}),$.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;oe.isDocumentKey(i)||(i=i.child(""));const o=new Et(new oe(i),0);let l=new vt(ke);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),$.resolve(this.Mr(l))}Mr(e){const t=[];return e.forEach(n=>{const s=this.Cr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Oe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return $.forEach(t.mutations,s=>{const i=new Et(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=n})}Ln(e){}containsKey(e,t){const n=new Et(t,0),s=this.vr.firstAfterOrEqual(n);return $.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.Nr=e,this.docs=function(){return new nt(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return $.resolve(n?n.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let n=kn();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():jt.newInvalidDocument(s))}),$.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=kn();const o=t.path,l=new oe(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||GI(jI(d),n)<=0||(s.has(d.key)||dl(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,t,n,s){ue()}Lr(e,t){return $.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new pA(this)}getSize(e){return $.resolve(this.size)}}class pA extends aA{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(n)}),$.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.persistence=e,this.Br=new xs(t=>Eu(t),Iu),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.kr=0,this.qr=new Su,this.targetCount=0,this.Qr=ci.qn()}forEachTarget(e,t){return this.Br.forEach((n,s)=>t(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),$.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ci(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Un(t),$.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const n=this.Br.get(t)||null;return $.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),$.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qr.Sr(t);return $.resolve(n)}containsKey(e,t){return $.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t){this.Kr={},this.overlays={},this.$r=new ll(0),this.Ur=!1,this.Ur=!0,this.Wr=new dA,this.referenceDelegate=e(this),this.Gr=new mA(this),this.indexManager=new tA,this.remoteDocumentCache=function(s){return new gA(s)}(n=>this.referenceDelegate.zr(n)),this.serializer=new ZT(t),this.jr=new uA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new fA(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){J("MemoryPersistence","Starting transaction:",e);const s=new _A(this.$r.next());return this.referenceDelegate.Hr(),n(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,t){return $.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class _A extends HI{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.Zr=new Su,this.Xr=null}static ei(e){return new xu(e)}get ti(){if(this.Xr)return this.Xr;throw ue()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),$.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),$.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,n=>{const s=oe.fromPath(n);return this.ni(e,s).next(i=>{i||t.removeEntry(s,fe.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(n=>{n?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return $.or([()=>$.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Ua{constructor(e,t){this.persistence=e,this.ri=new xs(n=>YI(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=oA(this,t)}static ei(e,t){return new Ua(e,t)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}er(e,t){return $.forEach(this.ri,(n,s)=>this.ir(e,n,s).next(i=>i?$.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,t).next(l=>{l||(n++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=pa(e.data.value)),t}ir(e,t,n){return $.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return $.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=s}static zi(e,t){let n=Te(),s=Te();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Du(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Z0()?8:KI(Gt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Xi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new vA;return this.ts(e,t,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,t,o,l.size)})}).next(()=>i.result)}ns(e,t,n,s){return n.documentReadCount<this.Ji?(qs()<=Ie.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",zs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(qs()<=Ie.DEBUG&&J("QueryEngine","Query:",zs(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Yi*s?(qs()<=Ie.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",zs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(t))):$.resolve())}Xi(e,t){if(Qd(t))return $.resolve(null);let n=en(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Vc(t,null,"F"),n=en(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=Te(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const u=this.rs(t,l);return this.ss(t,u,o,c.readTime)?this.Xi(e,Vc(t,null,"F")):this.os(e,u,t,c)}))})))}es(e,t,n,s){return Qd(t)||s.isEqual(fe.min())?$.resolve(null):this.Zi.getDocuments(e,n).next(i=>{const o=this.rs(t,i);return this.ss(t,o,n,s)?$.resolve(null):(qs()<=Ie.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zs(t)),this.os(e,o,t,zI(s,-1)).next(l=>l))})}rs(e,t){let n=new vt(Kp(e));return t.forEach((s,i)=>{dl(e,i)&&(n=n.add(i))}),n}ss(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,t,n){return qs()<=Ie.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",zs(t)),this.Zi.getDocumentsMatchingQuery(e,t,Jn.min(),n)}os(e,t,n,s){return this.Zi.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,t,n,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new nt(ke),this.cs=new xs(i=>Eu(i),Iu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function bA(r,e,t,n){return new wA(r,e,t,n)}async function mm(r,e){const t=ge(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],l=[];let c=Te();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(n,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function EA(r,e){const t=ge(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const g=u.batch,p=g.keys();let v=$.resolve();return p.forEach(A=>{v=v.next(()=>d.getEntry(c,A)).next(R=>{const P=u.docVersions.get(A);Oe(P!==null),R.version.compareTo(P)<0&&(g.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),d.addEntry(R)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function _m(r){const e=ge(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function IA(r,e){const t=ge(r),n=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const l=[];e.targetChanges.forEach((d,g)=>{const p=s.get(g);if(!p)return;l.push(t.Gr.removeMatchingKeys(i,d.removedDocuments,g).next(()=>t.Gr.addMatchingKeys(i,d.addedDocuments,g)));let v=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?v=v.withResumeToken(xt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,n)),s=s.insert(g,v),function(R,P,N){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(p,v,d)&&l.push(t.Gr.updateTargetData(i,v))});let c=kn(),u=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(TA(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!n.isEqual(fe.min())){const d=t.Gr.getLastRemoteSnapshotVersion(i).next(g=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,n));l.push(d)}return $.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.us=s,i))}function TA(r,e,t){let n=Te(),s=Te();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=kn();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):J("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function AA(r,e){const t=ge(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function kA(r,e){const t=ge(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Gr.getTargetData(n,e).next(i=>i?(s=i,$.resolve(s)):t.Gr.allocateTargetId(n).next(o=>(s=new qn(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Gr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.us.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(n.targetId,n),t.cs.set(e,n.targetId)),n})}async function Bc(r,e,t){const n=ge(r),s=n.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ai(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.us=n.us.remove(e),n.cs.delete(s.target)}function lf(r,e,t){const n=ge(r);let s=fe.min(),i=Te();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const g=ge(c),p=g.cs.get(d);return p!==void 0?$.resolve(g.us.get(p)):g.Gr.getTargetData(u,d)}(n,o,en(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>n._s.getDocumentsMatchingQuery(o,e,t?s:fe.min(),t?i:Te())).next(l=>(RA(n,gT(e),l),{documents:l,ds:i})))}function RA(r,e,t){let n=r.ls.get(e)||fe.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.ls.set(e,n)}class cf{constructor(){this.activeTargetIds=wT()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PA{constructor(){this._o=new cf,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new cf,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa=null;function Xl(){return sa===null?sa=function(){return 268435456+Math.round(2147483648*Math.random())}():sa++,"0x"+sa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class DA extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+t.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(t,n,s,i,o){const l=Xl(),c=this.No(t,n.toUriEncodedString());J("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(t,c,u,s).then(d=>(J("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw ii("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(t,n,s,i,o,l){return this.Oo(t,n,s,i,o)}Lo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}No(t,n){const s=SA[t];return`${this.Fo}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,n,s){const i=Xl();return new Promise((o,l)=>{const c=new Sp;c.setWithCredentials(!0),c.listenOnce(xp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ga.NO_ERROR:const d=c.getResponseJson();J($t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case ga.TIMEOUT:J($t,`RPC '${e}' ${i} timed out`),l(new Z(q.DEADLINE_EXCEEDED,"Request time out"));break;case ga.HTTP_ERROR:const g=c.getStatus();if(J($t,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const v=p==null?void 0:p.error;if(v&&v.status&&v.message){const A=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(N)>=0?N:q.UNKNOWN}(v.status);l(new Z(A,v.message))}else l(new Z(q.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(q.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{J($t,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);J($t,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,n,15)})}qo(e,t,n){const s=Xl(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Op(),l=Np(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const d=i.join("");J($t,`Creating RPC '${e}' stream ${s}: ${d}`,c);const g=o.createWebChannel(d,c);let p=!1,v=!1;const A=new xA({Eo:P=>{v?J($t,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(J($t,`Opening RPC '${e}' stream ${s} transport.`),g.open(),p=!0),J($t,`RPC '${e}' stream ${s} sending:`,P),g.send(P))},Ao:()=>g.close()}),R=(P,N,x)=>{P.listen(N,C=>{try{x(C)}catch(O){setTimeout(()=>{throw O},0)}})};return R(g,Wi.EventType.OPEN,()=>{v||(J($t,`RPC '${e}' stream ${s} transport opened.`),A.So())}),R(g,Wi.EventType.CLOSE,()=>{v||(v=!0,J($t,`RPC '${e}' stream ${s} transport closed`),A.Do())}),R(g,Wi.EventType.ERROR,P=>{v||(v=!0,ii($t,`RPC '${e}' stream ${s} transport errored:`,P),A.Do(new Z(q.UNAVAILABLE,"The operation could not be completed")))}),R(g,Wi.EventType.MESSAGE,P=>{var N;if(!v){const x=P.data[0];Oe(!!x);const C=x,O=(C==null?void 0:C.error)||((N=C[0])===null||N===void 0?void 0:N.error);if(O){J($t,`RPC '${e}' stream ${s} received error:`,O);const L=O.status;let M=function(y){const b=gt[y];if(b!==void 0)return im(b)}(L),E=O.message;M===void 0&&(M=q.INTERNAL,E="Unknown error status: "+L+" with message "+O.message),v=!0,A.Do(new Z(M,E)),g.close()}else J($t,`RPC '${e}' stream ${s} received:`,x),A.vo(x)}}),R(l,Dp.STAT_EVENT,P=>{P.stat===Cc.PROXY?J($t,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Cc.NOPROXY&&J($t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function Zl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(r){return new FT(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t,n=1e3,s=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-n);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t,n,s,i,o,l,c){this.li=e,this.Yo=n,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new vm(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(An(t.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Xo===t&&this.I_(n,s)},n=>{e(()=>{const s=new Z(q.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(s)})})}I_(e,t){const n=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{n(()=>this.E_(s))}),this.stream.onMessage(s=>{n(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NA extends ym{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=qT(this.serializer,e),n=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?tn(o.readTime):fe.min()}(e);return this.listener.R_(t,n)}V_(e){const t={};t.database=Fc(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Nc(c)?{documents:GT(i,c)}:{query:WT(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=lm(i,o.resumeToken);const u=Lc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=Ma(i,o.snapshotVersion.toTimestamp());const u=Lc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const n=KT(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){const t={};t.database=Fc(this.serializer),t.removeTarget=e,this.c_(t)}}class OA extends ym{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=jT(e.writeResults,e.commitTime),n=tn(e.commitTime);return this.listener.y_(n,t)}w_(){const e={};e.database=Fc(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>zT(this.serializer,n))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new Z(q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Mc(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(q.UNKNOWN,i.toString())})}ko(e,t,n,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Mc(t,n),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(q.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class LA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(An(t),this.C_=!1):J("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{n.enqueueAndForget(async()=>{Ds(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.k_.add(4),await Vo(u),u.K_.set("Unknown"),u.k_.delete(4),await _l(u)}(this))})}),this.K_=new LA(n,s)}}async function _l(r){if(Ds(r))for(const e of r.q_)await e(!0)}async function Vo(r){for(const e of r.q_)await e(!1)}function wm(r,e){const t=ge(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Lu(t)?Vu(t):ki(t).s_()&&Ou(t,e))}function Nu(r,e){const t=ge(r),n=ki(t);t.B_.delete(e),n.s_()&&bm(t,e),t.B_.size===0&&(n.s_()?n.a_():Ds(t)&&t.K_.set("Unknown"))}function Ou(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ki(r).V_(e)}function bm(r,e){r.U_.xe(e),ki(r).m_(e)}function Vu(r){r.U_=new VT({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),ki(r).start(),r.K_.F_()}function Lu(r){return Ds(r)&&!ki(r).i_()&&r.B_.size>0}function Ds(r){return ge(r).k_.size===0}function Em(r){r.U_=void 0}async function UA(r){r.K_.set("Online")}async function FA(r){r.B_.forEach((e,t)=>{Ou(r,e)})}async function BA(r,e){Em(r),Lu(r)?(r.K_.O_(e),Vu(r)):r.K_.set("Unknown")}async function $A(r,e,t){if(r.K_.set("Online"),e instanceof am&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(r,e)}catch(n){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Fa(r,n)}else if(e instanceof va?r.U_.$e(e):e instanceof om?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(fe.min()))try{const n=await _m(r.localStore);t.compareTo(n)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(xt.EMPTY_BYTE_STRING,d.snapshotVersion)),bm(i,c);const g=new qn(d.target,c,u,d.sequenceNumber);Ou(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){J("RemoteStore","Failed to raise snapshot:",n),await Fa(r,n)}}async function Fa(r,e,t){if(!Ai(e))throw e;r.k_.add(1),await Vo(r),r.K_.set("Offline"),t||(t=()=>_m(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await _l(r)})}function Im(r,e){return e().catch(t=>Fa(r,t,e))}async function vl(r){const e=ge(r),t=ts(e);let n=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;qA(e);)try{const s=await AA(e.localStore,n);if(s===null){e.L_.length===0&&t.a_();break}n=s.batchId,zA(e,s)}catch(s){await Fa(e,s)}Tm(e)&&Am(e)}function qA(r){return Ds(r)&&r.L_.length<10}function zA(r,e){r.L_.push(e);const t=ts(r);t.s_()&&t.f_&&t.g_(e.mutations)}function Tm(r){return Ds(r)&&!ts(r).i_()&&r.L_.length>0}function Am(r){ts(r).start()}async function jA(r){ts(r).w_()}async function GA(r){const e=ts(r);for(const t of r.L_)e.g_(t.mutations)}async function WA(r,e,t){const n=r.L_.shift(),s=Ru.from(n,e,t);await Im(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await vl(r)}async function HA(r,e){e&&ts(r).f_&&await async function(n,s){if(function(o){return DT(o)&&o!==q.ABORTED}(s.code)){const i=n.L_.shift();ts(n).__(),await Im(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vl(n)}}(r,e),Tm(r)&&Am(r)}async function hf(r,e){const t=ge(r);t.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const n=Ds(t);t.k_.add(3),await Vo(t),n&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await _l(t)}async function KA(r,e){const t=ge(r);e?(t.k_.delete(2),await _l(t)):e||(t.k_.add(2),await Vo(t),t.K_.set("Unknown"))}function ki(r){return r.W_||(r.W_=function(t,n,s){const i=ge(t);return i.b_(),new NA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Ro:UA.bind(null,r),mo:FA.bind(null,r),po:BA.bind(null,r),R_:$A.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Lu(r)?Vu(r):r.K_.set("Unknown")):(await r.W_.stop(),Em(r))})),r.W_}function ts(r){return r.G_||(r.G_=function(t,n,s){const i=ge(t);return i.b_(),new OA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:jA.bind(null,r),po:HA.bind(null,r),p_:GA.bind(null,r),y_:WA.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await vl(r)):(await r.G_.stop(),r.L_.length>0&&(J("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,l=new Mu(e,t,o,s,i);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uu(r,e){if(An("AsyncQueue",`${e}: ${r}`),Ai(r))return new Z(q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{static emptySet(e){return new ri(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||oe.comparator(t.key,n.key):(t,n)=>oe.comparator(t.key,n.key),this.keyedMap=Hi(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new ri;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.z_=new nt(oe.comparator)}track(e){const t=e.doc.key,n=this.z_.get(t);n?e.type!==0&&n.type===3?this.z_=this.z_.insert(t,e):e.type===3&&n.type!==1?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.z_=this.z_.remove(t):e.type===1&&n.type===2?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ue():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class ui{constructor(e,t,n,s,i,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new ui(e,t,ri.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class YA{constructor(){this.queries=ff(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,n){const s=ge(t),i=s.queries;s.queries=ff(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(n)})})(this,new Z(q.ABORTED,"Firestore shutting down"))}}function ff(){return new xs(r=>Hp(r),hl)}async function km(r,e){const t=ge(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Y_()&&e.Z_()&&(n=2):(i=new QA,n=e.Z_()?0:1);try{switch(n){case 0:i.H_=await t.onListen(s,!0);break;case 1:i.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=Uu(o,`Initialization of query '${zs(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&Fu(t)}async function Rm(r,e){const t=ge(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function JA(r,e){const t=ge(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(n=!0);o.H_=s}}n&&Fu(t)}function XA(r,e,t){const n=ge(r),s=n.queries.get(e);if(s)for(const i of s.J_)i.onError(t);n.queries.delete(e)}function Fu(r){r.X_.forEach(e=>{e.next()})}var $c,gf;(gf=$c||($c={})).na="default",gf.Cache="cache";class Pm{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new ui(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const n=t!=="Offline";return(!this.options.ua||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==$c.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.key=e}}class Sm{constructor(e){this.key=e}}class ZA{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Te(),this.mutatedKeys=Te(),this.Va=Kp(e),this.ma=new ri(this.Va)}get fa(){return this.da}ga(e,t){const n=t?t.pa:new df,s=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,g)=>{const p=s.get(d),v=dl(this.query,g)?g:null,A=!!p&&this.mutatedKeys.has(p.key),R=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let P=!1;p&&v?p.data.isEqual(v.data)?A!==R&&(n.track({type:3,doc:v}),P=!0):this.ya(p,v)||(n.track({type:2,doc:v}),P=!0,(c&&this.Va(v,c)>0||u&&this.Va(v,u)<0)&&(l=!0)):!p&&v?(n.track({type:0,doc:v}),P=!0):p&&!v&&(n.track({type:1,doc:p}),P=!0,(c||u)&&(l=!0)),P&&(v?(o=o.add(v),i=R?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),n.track({type:1,doc:d})}return{ma:o,pa:n,ss:l,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,g)=>function(v,A){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return R(v)-R(A)}(d.type,g.type)||this.Va(d.doc,g.doc)),this.wa(n),s=s!=null&&s;const l=t&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new ui(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new df,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Te(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const t=[];return e.forEach(n=>{this.Ra.has(n)||t.push(new Sm(n))}),this.Ra.forEach(n=>{e.has(n)||t.push(new Cm(n))}),t}va(e){this.da=e.ds,this.Ra=Te();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ui.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class ek{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class tk{constructor(e){this.key=e,this.Fa=!1}}class rk{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new xs(l=>Hp(l),hl),this.Oa=new Map,this.Na=new Set,this.La=new nt(oe.comparator),this.Ba=new Map,this.ka=new Su,this.qa={},this.Qa=new Map,this.Ka=ci.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function nk(r,e,t=!0){const n=Lm(r);let s;const i=n.xa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await xm(n,e,t,!0),s}async function sk(r,e){const t=Lm(r);await xm(t,e,!0,!1)}async function xm(r,e,t,n){const s=await kA(r.localStore,en(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await ik(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&wm(r.remoteStore,s),l}async function ik(r,e,t,n,s){r.Ua=(g,p,v)=>async function(R,P,N,x){let C=P.view.ga(N);C.ss&&(C=await lf(R.localStore,P.query,!1).then(({documents:E})=>P.view.ga(E,C)));const O=x&&x.targetChanges.get(P.targetId),L=x&&x.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(C,R.isPrimaryClient,O,L);return mf(R,P.targetId,M.ba),M.snapshot}(r,g,p,v);const i=await lf(r.localStore,e,!0),o=new ZA(e,i.ds),l=o.ga(i.documents),c=Oo.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),u=o.applyChanges(l,r.isPrimaryClient,c);mf(r,t,u.ba);const d=new ek(e,t,o);return r.xa.set(e,d),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),u.snapshot}async function ok(r,e,t){const n=ge(r),s=n.xa.get(e),i=n.Oa.get(s.targetId);if(i.length>1)return n.Oa.set(s.targetId,i.filter(o=>!hl(o,e))),void n.xa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Bc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Nu(n.remoteStore,s.targetId),qc(n,s.targetId)}).catch(Ti)):(qc(n,s.targetId),await Bc(n.localStore,s.targetId,!0))}async function ak(r,e){const t=ge(r),n=t.xa.get(e),s=t.Oa.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Nu(t.remoteStore,n.targetId))}async function lk(r,e,t){const n=pk(r);try{const s=await function(o,l){const c=ge(o),u=_t.now(),d=l.reduce((v,A)=>v.add(A.key),Te());let g,p;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let A=kn(),R=Te();return c.hs.getEntries(v,d).next(P=>{A=P,A.forEach((N,x)=>{x.isValidDocument()||(R=R.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,A)).next(P=>{g=P;const N=[];for(const x of l){const C=RT(x,g.get(x.key).overlayedDocument);C!=null&&N.push(new as(x.key,C,Fp(C.value.mapValue),Nr.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,N,l)}).next(P=>{p=P;const N=P.applyToLocalDocumentSet(g,R);return c.documentOverlayCache.saveOverlays(v,P.batchId,N)})}).then(()=>({batchId:p.batchId,changes:Yp(g)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new nt(ke)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(n,s.batchId,t),await Lo(n,s.changes),await vl(n.remoteStore)}catch(s){const i=Uu(s,"Failed to persist write");t.reject(i)}}async function Dm(r,e){const t=ge(r);try{const n=await IA(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ba.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Oe(o.Fa):s.removedDocuments.size>0&&(Oe(o.Fa),o.Fa=!1))}),await Lo(t,n,e)}catch(n){await Ti(n)}}function pf(r,e,t){const n=ge(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((d,g)=>{for(const p of g.J_)p.ea(l)&&(u=!0)}),u&&Fu(c)}(n.eventManager,e),s.length&&n.Ma.R_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ck(r,e,t){const n=ge(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ba.get(e),i=s&&s.key;if(i){let o=new nt(oe.comparator);o=o.insert(i,jt.newNoDocument(i,fe.min()));const l=Te().add(i),c=new pl(fe.min(),new Map,new nt(ke),o,l);await Dm(n,c),n.La=n.La.remove(i),n.Ba.delete(e),Bu(n)}else await Bc(n.localStore,e,!1).then(()=>qc(n,e,t)).catch(Ti)}async function uk(r,e){const t=ge(r),n=e.batch.batchId;try{const s=await EA(t.localStore,e);Om(t,n,null),Nm(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Lo(t,s)}catch(s){await Ti(s)}}async function hk(r,e,t){const n=ge(r);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(g=>(Oe(g!==null),d=g.keys(),c.mutationQueue.removeMutationBatch(u,g))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(n.localStore,e);Om(n,e,t),Nm(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Lo(n,s)}catch(s){await Ti(s)}}function Nm(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function Om(r,e,t){const n=ge(r);let s=n.qa[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.qa[n.currentUser.toKey()]=s}}function qc(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Oa.get(e))r.xa.delete(n),t&&r.Ma.Wa(n,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(n=>{r.ka.containsKey(n)||Vm(r,n)})}function Vm(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(Nu(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),Bu(r))}function mf(r,e,t){for(const n of t)n instanceof Cm?(r.ka.addReference(n.key,e),dk(r,n)):n instanceof Sm?(J("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,e),r.ka.containsKey(n.key)||Vm(r,n.key)):ue()}function dk(r,e){const t=e.key,n=t.path.canonicalString();r.La.get(t)||r.Na.has(n)||(J("SyncEngine","New document in limbo: "+t),r.Na.add(n),Bu(r))}function Bu(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new oe(Qe.fromString(e)),n=r.Ka.next();r.Ba.set(n,new tk(t)),r.La=r.La.insert(t,n),wm(r.remoteStore,new qn(en(Tu(t.path)),n,"TargetPurposeLimboResolution",ll.oe))}}async function Lo(r,e,t){const n=ge(r),s=[],i=[],o=[];n.xa.isEmpty()||(n.xa.forEach((l,c)=>{o.push(n.Ua(c,e,t).then(u=>{var d;if((u||t)&&n.isPrimaryClient){const g=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;n.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(u){s.push(u);const g=Du.zi(c.targetId,u);i.push(g)}}))}),await Promise.all(o),n.Ma.R_(s),await async function(c,u){const d=ge(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>$.forEach(u,p=>$.forEach(p.Wi,v=>d.persistence.referenceDelegate.addReference(g,p.targetId,v)).next(()=>$.forEach(p.Gi,v=>d.persistence.referenceDelegate.removeReference(g,p.targetId,v)))))}catch(g){if(!Ai(g))throw g;J("LocalStore","Failed to update sequence numbers: "+g)}for(const g of u){const p=g.targetId;if(!g.fromCache){const v=d.us.get(p),A=v.snapshotVersion,R=v.withLastLimboFreeSnapshotVersion(A);d.us=d.us.insert(p,R)}}}(n.localStore,i))}async function fk(r,e){const t=ge(r);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const n=await mm(t.localStore,e);t.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new Z(q.CANCELLED,o))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Lo(t,n.Ts)}}function gk(r,e){const t=ge(r),n=t.Ba.get(e);if(n&&n.Fa)return Te().add(n.key);{let s=Te();const i=t.Oa.get(e);if(!i)return s;for(const o of i){const l=t.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function Lm(r){const e=ge(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ck.bind(null,e),e.Ma.R_=JA.bind(null,e.eventManager),e.Ma.Wa=XA.bind(null,e.eventManager),e}function pk(r){const e=ge(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hk.bind(null,e),e}class Ba{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ml(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return bA(this.persistence,new yA,e.initialUser,this.serializer)}ja(e){return new pm(xu.ei,this.serializer)}za(e){return new PA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ba.provider={build:()=>new Ba};class mk extends Ba{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Oe(this.persistence.referenceDelegate instanceof Ua);const n=this.persistence.referenceDelegate.garbageCollector;return new sA(n,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?tr.withCacheSize(this.cacheSizeBytes):tr.DEFAULT;return new pm(n=>Ua.ei(n,t),this.serializer)}}class zc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>pf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=fk.bind(null,this.syncEngine),await KA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YA}()}createDatastore(e){const t=ml(e.databaseInfo.databaseId),n=function(i){return new DA(i)}(e.databaseInfo);return function(i,o,l,c){return new VA(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,l){return new MA(n,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>pf(this.syncEngine,t,0),function(){return uf.p()?new uf:new CA}())}createSyncEngine(e,t){return function(s,i,o,l,c,u,d){const g=new rk(s,i,o,l,c,u);return d&&(g.$a=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ge(s);J("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Vo(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zc.provider={build:()=>new zc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=zt.UNAUTHENTICATED,this.clientId=Lp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Uu(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ec(r,e){r.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await mm(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function _f(r,e){r.asyncQueue.verifyOperationInProgress();const t=await vk(r);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>hf(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>hf(e.remoteStore,s)),r._onlineComponents=e}async function vk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await ec(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ii("Error using user provided cache. Falling back to memory cache: "+t),await ec(r,new Ba)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await ec(r,new mk(void 0));return r._offlineComponents}async function Um(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await _f(r,r._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await _f(r,new zc))),r._onlineComponents}function yk(r){return Um(r).then(e=>e.syncEngine)}async function Fm(r){const e=await Um(r),t=e.eventManager;return t.onListen=nk.bind(null,e.syncEngine),t.onUnlisten=ok.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ak.bind(null,e.syncEngine),t}function wk(r,e,t={}){const n=new bn;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Mm({next:p=>{d.eu(),o.enqueueAndForget(()=>Rm(i,g));const v=p.docs.has(l);!v&&p.fromCache?u.reject(new Z(q.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&c&&c.source==="server"?u.reject(new Z(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),g=new Pm(Tu(l.path),d,{includeMetadataChanges:!0,ua:!0});return km(i,g)}(await Fm(r),r.asyncQueue,e,t,n)),n.promise}function bk(r,e,t={}){const n=new bn;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Mm({next:p=>{d.eu(),o.enqueueAndForget(()=>Rm(i,g)),p.fromCache&&c.source==="server"?u.reject(new Z(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),g=new Pm(l,d,{includeMetadataChanges:!0,ua:!0});return km(i,g)}(await Fm(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(r,e,t){if(!t)throw new Z(q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Ek(r,e,t,n){if(e===!0&&n===!0)throw new Z(q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function yf(r){if(!oe.isDocumentKey(r))throw new Z(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function wf(r){if(oe.isDocumentKey(r))throw new Z(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function yl(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ue()}function sn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new Z(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yl(r);throw new Z(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ek("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wl{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new OI;switch(n.type){case"firstParty":return new UI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=vf.get(t);n&&(J("ComponentProvider","Removing Datastore"),vf.delete(t),n.terminate())}(this),Promise.resolve()}}function Ik(r,e,t,n={}){var s;const i=(r=sn(r,wl))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=zt.MOCK_USER;else{l=H0(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new Z(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new zt(u)}r._authCredentials=new VI(new Vp(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ri(this.firestore,e,this._query)}}class Qt{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class Qn extends Ri{constructor(e,t,n){super(e,t,Tu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new oe(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function ia(r,e,...t){if(r=ot(r),$m("collection","path",e),r instanceof wl){const n=Qe.fromString(e,...t);return wf(n),new Qn(r,null,n)}{if(!(r instanceof Qt||r instanceof Qn))throw new Z(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Qe.fromString(e,...t));return wf(n),new Qn(r.firestore,null,n)}}function qi(r,e,...t){if(r=ot(r),arguments.length===1&&(e=Lp.newId()),$m("doc","path",e),r instanceof wl){const n=Qe.fromString(e,...t);return yf(n),new Qt(r,null,new oe(n))}{if(!(r instanceof Qt||r instanceof Qn))throw new Z(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Qe.fromString(e,...t));return yf(n),new Qt(r.firestore,r instanceof Qn?r.converter:null,new oe(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new vm(this,"async_queue_retry"),this.fu=()=>{const n=Zl();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=e;const t=Zl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Zl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new bn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ai(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(n=>{this.Au=n,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(n);throw An("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.Ru=!1,n))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Mu.createAndSchedule(this,e,t,n,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&ue()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Pi extends wl{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Ef,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ef(e),this._firestoreClient=void 0,await e}}}function Tk(r,e){const t=nl(),n="(default)",s=ns(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Lg("firestore");i&&Ik(s,...i)}return s}function $u(r){if(r._terminated)throw new Z(q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ak(r),r._firestoreClient}function Ak(r){var e,t,n;const s=r._freezeSettings(),i=function(l,c,u,d){return new ZI(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Bm(d.experimentalLongPollingOptions),d.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new _k(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hi(xt.fromBase64String(e))}catch(t){throw new Z(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hi(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function tc(){return new Mo("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=/^__.*__$/;class Rk{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,t,this.fieldTransforms):new No(e,this.data,t,this.fieldTransforms)}}class qm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new as(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Gu{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Gu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:n,Nu:!1});return s.Lu(e),s}Bu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:n,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return $a(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(zm(this.Mu)&&kk.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Pk{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ml(e)}$u(e,t,n,s=!1){return new Gu({Mu:e,methodName:t,Ku:n,path:St.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wu(r){const e=r._freezeSettings(),t=ml(r._databaseId);return new Pk(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ck(r,e,t,n,s,i={}){const o=r.$u(i.merge||i.mergeFields?2:0,e,t,s);Hu("Data must be an object, but it was:",o,n);const l=jm(n,o);let c,u;if(i.merge)c=new _r(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const p=jc(e,g,t);if(!o.contains(p))throw new Z(q.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Wm(d,p)||d.push(p)}c=new _r(d),u=o.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,u=o.fieldTransforms;return new Rk(new nr(l),c,u)}class bl extends qu{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bl}}function Sk(r,e,t,n){const s=r.$u(1,e,t);Hu("Data must be an object, but it was:",s,n);const i=[],o=nr.empty();os(n,(c,u)=>{const d=Ku(e,c,t);u=ot(u);const g=s.Bu(d);if(u instanceof bl)i.push(d);else{const p=Uo(u,g);p!=null&&(i.push(d),o.set(d,p))}});const l=new _r(i);return new qm(o,l,s.fieldTransforms)}function xk(r,e,t,n,s,i){const o=r.$u(1,e,t),l=[jc(e,n,t)],c=[s];if(i.length%2!=0)throw new Z(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(jc(e,i[p])),c.push(i[p+1]);const u=[],d=nr.empty();for(let p=l.length-1;p>=0;--p)if(!Wm(u,l[p])){const v=l[p];let A=c[p];A=ot(A);const R=o.Bu(v);if(A instanceof bl)u.push(v);else{const P=Uo(A,R);P!=null&&(u.push(v),d.set(v,P))}}const g=new _r(u);return new qm(d,g,o.fieldTransforms)}function Dk(r,e,t,n=!1){return Uo(t,r.$u(n?4:3,e))}function Uo(r,e){if(Gm(r=ot(r)))return Hu("Unsupported field value:",e,r),jm(r,e);if(r instanceof qu)return function(n,s){if(!zm(s.Mu))throw s.qu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const l of n){let c=Uo(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bT(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=_t.fromDate(n);return{timestampValue:Ma(s.serializer,i)}}if(n instanceof _t){const i=new _t(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ma(s.serializer,i)}}if(n instanceof zu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hi)return{bytesValue:lm(s.serializer,n._byteString)};if(n instanceof Qt){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cu(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof ju)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Au(l.serializer,c)})}}}}}}(n,s);throw s.qu(`Unsupported field value: ${yl(n)}`)}(r,e)}function jm(r,e){const t={};return Mp(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(r,(n,s)=>{const i=Uo(s,e.Ou(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function Gm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof _t||r instanceof zu||r instanceof hi||r instanceof Qt||r instanceof qu||r instanceof ju)}function Hu(r,e,t){if(!Gm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=yl(t);throw n==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+n)}}function jc(r,e,t){if((e=ot(e))instanceof Mo)return e._internalPath;if(typeof e=="string")return Ku(r,e);throw $a("Field path arguments must be of type string or ",r,!1,void 0,t)}const Nk=new RegExp("[~\\*/\\[\\]]");function Ku(r,e,t){if(e.search(Nk)>=0)throw $a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Mo(...e.split("."))._internalPath}catch{throw $a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function $a(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${s}`),c+=")"),new Z(q.INVALID_ARGUMENT,l+r+c)}function Wm(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ok extends Hm{data(){return super.data()}}function Qu(r,e){return typeof e=="string"?Ku(r,e):e instanceof Mo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new Z(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yu{}class Lk extends Yu{}function oa(r,e,...t){let n=[];e instanceof Yu&&n.push(e),n=n.concat(t),function(i){const o=i.filter(c=>c instanceof Ju).length,l=i.filter(c=>c instanceof El).length;if(o>1||o>0&&l>0)throw new Z(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class El extends Lk{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new El(e,t,n)}_apply(e){const t=this._parse(e);return Km(e._query,t),new Ri(e.firestore,e.converter,Oc(e._query,t))}_parse(e){const t=Wu(e.firestore);return function(i,o,l,c,u,d,g){let p;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Tf(g,d);const v=[];for(const A of g)v.push(If(c,i,A));p={arrayValue:{values:v}}}else p=If(c,i,g)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Tf(g,d),p=Dk(l,o,g,d==="in"||d==="not-in");return mt.create(u,d,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function rc(r,e,t){const n=e,s=Qu("where",r);return El._create(s,n,t)}class Ju extends Yu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ju(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Mr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Km(o,c),o=Oc(o,c)}(e._query,t),new Ri(e.firestore,e.converter,Oc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function If(r,e,t){if(typeof(t=ot(t))=="string"){if(t==="")throw new Z(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wp(e)&&t.indexOf("/")!==-1)throw new Z(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Qe.fromString(t));if(!oe.isDocumentKey(n))throw new Z(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return zd(r,new oe(n))}if(t instanceof Qt)return zd(r,t._key);throw new Z(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yl(t)}.`)}function Tf(r,e){if(!Array.isArray(r)||r.length===0)throw new Z(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Km(r,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Z(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Mk{convertValue(e,t="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return os(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>dt(o.doubleValue));return new ju(i)}convertGeoPoint(e){return new zu(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ul(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const t=Xn(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Qe.fromString(e);Oe(gm(n));const s=new po(n.get(1),n.get(3)),i=new oe(n.popFirst(5));return s.isEqual(t)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qm extends Hm{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Qu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ya extends Qm{data(e={}){return super.data(e)}}class Fk{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Qi(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ya(this._firestore,this._userDataWriter,n.key,n,new Qi(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ya(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ya(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:Bk(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Bk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(r){r=sn(r,Qt);const e=sn(r.firestore,Pi);return wk($u(e),r._key).then(t=>zk(e,r,t))}class Ym extends Mk{constructor(e){super(),this.firestore=e}convertBytes(e){return new hi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,t)}}function aa(r){r=sn(r,Ri);const e=sn(r.firestore,Pi),t=$u(e),n=new Ym(e);return Vk(r._query),bk(t,r._query).then(s=>new Fk(e,n,r,s))}function $k(r,e,t){r=sn(r,Qt);const n=sn(r.firestore,Pi),s=Uk(r.converter,e);return Xu(n,[Ck(Wu(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Nr.none())])}function kf(r,e,t,...n){r=sn(r,Qt);const s=sn(r.firestore,Pi),i=Wu(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof Mo?xk(i,"updateDoc",r._key,e,t,n):Sk(i,"updateDoc",r._key,e),Xu(s,[o.toMutation(r._key,Nr.exists(!0))])}function qk(r){return Xu(sn(r.firestore,Pi),[new ku(r._key,Nr.none())])}function Xu(r,e){return function(n,s){const i=new bn;return n.asyncQueue.enqueueAndForget(async()=>lk(await yk(n),s,i)),i.promise}($u(r),e)}function zk(r,e,t){const n=t.docs.get(e._key),s=new Ym(r);return new Qm(r,s,e._key,n,new Qi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Ii=s})(bi),Vr(new Ir("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),l=new Pi(new LI(n.getProvider("auth-internal")),new BI(n.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new po(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ir(Md,"4.7.5",e),ir(Md,"4.7.5","esm2017")})();class rr{static get db(){return this._db||(al(),this._db=Tk()),this._db}static async updateUserData(e,t){const n=qi(this.db,this.users,e);await kf(n,t)}static async addUserData(e,t){const n=qi(this.db,this.users,e);await $k(n,t)}static async getUserData(e){const t=await Af(qi(this.db,this.users,e));return t.exists()?t.data():null}static async getLeague(e){const t=await Af(qi(this.db,this.leagues,e));return t.exists()?t.data():null}static async getLeagueGames(e){const t=qi(this.db,this.leagues,e),n=ia(t,"games"),s=oa(n);return(await aa(s)).docs.map(o=>({reference:o.ref,...o.data()}))}static async updateGame(e,t){await kf(e,t)}static async deleteGame(e){await qk(e)}static async getLeagues(e){const t=oa(ia(this.db,this.leagues),rc(tc(),"in",e)),n=await aa(t),s={};return n.forEach(i=>{s[i.id]=i.data()}),s}static async getUserDatas(e){const t=oa(ia(this.db,this.users),rc(tc(),"in",e)),n=await aa(t),s={};return n.forEach(i=>{s[i.id]=i.data()}),s}static async getInvites(e){const t=oa(ia(this.db,this.invites),rc(tc(),"in",e)),n=await aa(t),s={};return n.forEach(i=>{s[i.id]=i.data()}),s}}wr(rr,"_db",null),wr(rr,"leagues","leagues"),wr(rr,"users","users"),wr(rr,"invites","invites");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="type.googleapis.com/google.protobuf.Int64Value",Gk="type.googleapis.com/google.protobuf.UInt64Value";function Jm(r,e){const t={};for(const n in r)r.hasOwnProperty(n)&&(t[n]=e(r[n]));return t}function qa(r){if(r==null)return null;if(r instanceof Number&&(r=r.valueOf()),typeof r=="number"&&isFinite(r)||r===!0||r===!1||Object.prototype.toString.call(r)==="[object String]")return r;if(r instanceof Date)return r.toISOString();if(Array.isArray(r))return r.map(e=>qa(e));if(typeof r=="function"||typeof r=="object")return Jm(r,e=>qa(e));throw new Error("Data cannot be encoded in JSON: "+r)}function di(r){if(r==null)return r;if(r["@type"])switch(r["@type"]){case jk:case Gk:{const e=Number(r.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+r);return e}default:throw new Error("Data cannot be decoded from JSON: "+r)}return Array.isArray(r)?r.map(e=>di(e)):typeof r=="function"||typeof r=="object"?Jm(r,e=>di(e)):r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class sr extends ar{constructor(e,t,n){super(`${Zu}/${e}`,t||""),this.details=n,Object.setPrototypeOf(this,sr.prototype)}}function Wk(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function za(r,e){let t=Wk(r),n=t,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!Rf[o])return new sr("internal","internal");t=Rf[o],n=o}const l=i.message;typeof l=="string"&&(n=l),s=i.details,s!==void 0&&(s=di(s))}}catch{}return t==="ok"?null:new sr(t,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||t.get().then(s=>this.messaging=s,()=>{}),this.appCheck||n.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:n,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="us-central1",Kk=/^data: (.*?)(?:\n|$)/;function Qk(r){let e=null;return{promise:new Promise((t,n)=>{e=setTimeout(()=>{n(new sr("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{e&&clearTimeout(e)}}}class Yk{constructor(e,t,n,s,i=Gc,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Hk(t,n,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Gc}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Jk(r,e,t){r.emulatorOrigin=`http://${e}:${t}`}function Xk(r,e,t){const n=s=>eR(r,e,s,{});return n.stream=(s,i)=>rR(r,e,s,i),n}async function Zk(r,e,t,n){t["Content-Type"]="application/json";let s;try{s=await n(r,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}async function Xm(r,e){const t={},n=await r.contextProvider.getContext(e.limitedUseAppCheckTokens);return n.authToken&&(t.Authorization="Bearer "+n.authToken),n.messagingToken&&(t["Firebase-Instance-ID-Token"]=n.messagingToken),n.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=n.appCheckToken),t}function eR(r,e,t,n){const s=r._url(e);return tR(r,s,t,n)}async function tR(r,e,t,n){t=qa(t);const s={data:t},i=await Xm(r,n),o=n.timeout||7e4,l=Qk(o),c=await Promise.race([Zk(e,s,i,r.fetchImpl),l.promise,r.cancelAllRequests]);if(l.cancel(),!c)throw new sr("cancelled","Firebase Functions instance was deleted.");const u=za(c.status,c.json);if(u)throw u;if(!c.json)throw new sr("internal","Response is not valid JSON object.");let d=c.json.data;if(typeof d>"u"&&(d=c.json.result),typeof d>"u")throw new sr("internal","Response is missing data field.");return{data:di(d)}}function rR(r,e,t,n){const s=r._url(e);return nR(r,s,t,n||{})}async function nR(r,e,t,n){var s;t=qa(t);const i={data:t},o=await Xm(r,n);o["Content-Type"]="application/json",o.Accept="text/event-stream";let l;try{l=await r.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:o,signal:n==null?void 0:n.signal})}catch(v){if(v instanceof Error&&v.name==="AbortError"){const R=new sr("cancelled","Request was cancelled.");return{data:Promise.reject(R),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(R)}}}}}}const A=za(0,null);return{data:Promise.reject(A),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(A)}}}}}}let c,u;const d=new Promise((v,A)=>{c=v,u=A});(s=n==null?void 0:n.signal)===null||s===void 0||s.addEventListener("abort",()=>{const v=new sr("cancelled","Request was cancelled.");u(v)});const g=l.body.getReader(),p=sR(g,c,u,n==null?void 0:n.signal);return{stream:{[Symbol.asyncIterator](){const v=p.getReader();return{async next(){const{value:A,done:R}=await v.read();return{value:A,done:R}},async return(){return await v.cancel(),{done:!0,value:void 0}}}}},data:d}}function sR(r,e,t,n){const s=(o,l)=>{const c=o.match(Kk);if(!c)return;const u=c[1];try{const d=JSON.parse(u);if("result"in d){e(di(d.result));return}if("message"in d){l.enqueue(di(d.message));return}if("error"in d){const g=za(0,d);l.error(g),t(g);return}}catch(d){if(d instanceof sr){l.error(d),t(d);return}}},i=new TextDecoder;return new ReadableStream({start(o){let l="";return c();async function c(){if(n!=null&&n.aborted){const u=new sr("cancelled","Request was cancelled");return o.error(u),t(u),Promise.resolve()}try{const{value:u,done:d}=await r.read();if(d){l.trim()&&s(l.trim(),o),o.close();return}if(n!=null&&n.aborted){const p=new sr("cancelled","Request was cancelled");o.error(p),t(p),await r.cancel();return}l+=i.decode(u,{stream:!0});const g=l.split(`
`);l=g.pop()||"";for(const p of g)p.trim()&&s(p.trim(),o);return c()}catch(u){const d=u instanceof sr?u:za(0,null);o.error(d),t(d)}}},cancel(){return r.cancel()}})}const Pf="@firebase/functions",Cf="0.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="auth-internal",oR="app-check-internal",aR="messaging-internal";function lR(r){const e=(t,{instanceIdentifier:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider(iR),o=t.getProvider(aR),l=t.getProvider(oR);return new Yk(s,i,o,l,n)};Vr(new Ir(Zu,e,"PUBLIC").setMultipleInstances(!0)),ir(Pf,Cf,r),ir(Pf,Cf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(r=nl(),e=Gc){const n=ns(ot(r),Zu).getImmediate({identifier:e}),s=Lg("functions");return s&&uR(n,...s),n}function uR(r,e,t){Jk(ot(r),e,t)}function Fs(r,e,t){return Xk(ot(r),e)}lR();class _s{static get functions(){return this._functions||(al(),this._functions=cR()),this._functions}static async createUserData(){return(await Fs(this.functions,"createUserData")()).data}static async removeLeaguePlayer(e,t){return(await Fs(this.functions,"removeLeaguePlayer")({player:e.path,league:t})).data}static async createLeague(e,t,n,s){return(await Fs(this.functions,"createLeague")({name:e,description:t,"start-date":n.getTime(),"end-date":s.getTime()})).data}static async addLeaguePlayer(e,t){return(await Fs(this.functions,"addLeaguePlayer")({email:e,league:t})).data}static async getBulkEmails(e){return(await Fs(this.functions,"getBulkEmails")({uids:e})).data}static async scheduleGames(e,t,n){return(await Fs(this.functions,"scheduleGames")({league:e,matches:t,duos:n})).data}}wr(_s,"_functions",null);class hR{constructor(){wr(this,"authenticating",Gn(!1));wr(this,"user",Gn(null));wr(this,"userData",Gn(null));dn.onUserChanged(e=>{this.user.set(e)})}get isLoggedIn(){let e=pr(this.userData);return pr(this.user)!=null&&e!=null&&e["first-name"]!=null}get uid(){var e;return((e=pr(this.user))==null?void 0:e.uid)??null}async validate(){await dn.authStateReady;try{dn.currentUser!=null&&await this.finishSignIn(dn.currentUser)}catch(e){console.error(e),this.signOut()}}async finishSignIn(e){let t=await rr.getUserData(e.uid);if(t==null){let n=await _s.createUserData();if(n.status!=Kr.success)throw Kn(n.status)}this.userData.set(t)}async getUserData(){var n;let e=(n=pr(this.user))==null?void 0:n.uid;if(e==null)return;let t=await rr.getUserData(e);this.userData.set(t)}async updateUserData(e){var n;let t=(n=pr(this.user))==null?void 0:n.uid;t!=null&&(await rr.updateUserData(t,e),await this.getUserData())}async signIn(e,t){this.authenticating.set(!0);try{let n=await dn.signIn(e,t);await this.finishSignIn(n)}catch(n){throw this.authenticating.set(!1),n instanceof ar&&(n.code==Kl.INVALID_PASSWORD||n.code==Kl.USER_DELETED)?$n.InvalidCredentials:$n.Unknown}this.authenticating.set(!1)}async createAccount(e,t){try{let n=await dn.createAccount(e,t);await this.finishSignIn(n)}catch(n){if(!(n instanceof ar))throw $n.Unknown;if(n.code==Kl.EMAIL_EXISTS)throw $n.UserAlreadyExists}}signOut(){this.user.set(null),this.userData.set(null),dn.signOut()}}const Je=new hR,Sf=new URL(window.location.href);class dR{constructor(){wr(this,"path",Gn(Sf));wr(this,"params",Gn(Sf.searchParams))}replace(e){const t=new URL(e,window.location.origin);window.history.replaceState({},"",t.href),this.path.set(t),this.params.set(t.searchParams)}navigate(e){const t=new URL(e,window.location.origin);this.path.set(t),this.params.set(t.searchParams),window.history.pushState({},"",t.href)}navigateBack(){window.history.back()}setParam(e,t){const n=new URL(window.location.href);n.searchParams.set(e,t),this.params.set(n.searchParams),this.path.set(n),window.history.pushState({},"",n.href)}removeParam(e){const t=new URL(window.location.href);t.searchParams.delete(e),this.params.set(t.searchParams),this.path.set(t),window.history.pushState({},"",t.href)}}const pt=new dR;window.addEventListener("popstate",r=>{const e=new URL(window.location.href);pt.path.set(e),pt.params.set(e.searchParams)});var fR=W("<span>Name</span> <!>",1),gR=W("<span>Description</span> <!>",1),pR=W('<form class="flex flex-col space-y-6"><h3 class="text-xl font-medium text-gray-900 dark:text-white">Create League</h3> <!> <!> <div class="flex flex-row space-x-2"><!> <!></div></form>'),mR=W("<p>You are not a part of any leagues</p>"),_R=W('<div class="flex w-64"><p class="w-20 text-left"> </p> <p> </p></div>'),vR=W('<button class="cursor-pointer"><!></button>'),yR=W("<!> <!> <!>",1),wR=W('<div class="flex flex-col space-y-5 items-center"><!></div>');function bR(r,e){Me(e,!1);let t=re(!1);pr(Je.user);let n=re(pr(Je.userData)),s=re(null),i=re(""),o=re(""),l=new Date,c=!1;const u=(()=>{const N=new Date(l);return N.setDate(l.getDate()+10),N})();async function d(){let N=await rr.getLeagues(k(n).leagues.map(x=>x.id));G(s,Object.entries(N).map(([x,C])=>({key:x,value:C})))}ou(async()=>{d()});function g(){Je.signOut()}async function p(){if(!k(i)||!k(o)||c)return;c=!0;let N=await _s.createLeague(k(i),k(o),l,u);if(N.status!=Kr.success){Kn(N.status),c=!1;return}await Je.getUserData(),G(n,pr(Je.userData)),d(),G(t,!1),c=!1}je();var v=wR(),A=H(v);{var R=N=>{pn(N,{children:(x,C)=>{var O=pR(),L=z(H(O),2);mr(L,{class:"space-y-2",children:(b,I)=>{var T=fR(),w=z(Q(T),2);Wr(w,{type:"text",name:"name",placeholder:"",required:!0,get value(){return k(i)},set value(ne){G(i,ne)},$$legacy:!0}),S(b,T)},$$slots:{default:!0}});var M=z(L,2);mr(M,{class:"space-y-2",children:(b,I)=>{var T=gR(),w=z(Q(T),2);T0(w,{name:"description",placeholder:"",rows:4,required:!0,get value(){return k(o)},set value(ne){G(o,ne)},$$legacy:!0}),S(b,T)},$$slots:{default:!0}});var E=z(M,2),m=H(E);bt(m,{type:"button",class:"w-full",outline:!0,$$events:{click:()=>{G(t,!1)}},children:(b,I)=>{var T=pe("Cancel");S(b,T)},$$slots:{default:!0}});var y=z(m,2);bt(y,{type:"submit",class:"w-full",$$events:{click:p},children:(b,I)=>{var T=pe("Create League");S(b,T)},$$slots:{default:!0}}),B("submit",O,ys(p)),S(x,O)},$$slots:{default:!0}})},P=N=>{var x=yR(),C=Q(x);{var O=y=>{var b=mR();S(y,b)},L=y=>{var b=_e(),I=Q(b);Qs(I,1,()=>k(s)??[],Ks,(T,w)=>{var ne=vR(),ae=H(ne);pn(ae,{children:(te,le)=>{var ve=_R(),Pe=H(ve),at=H(Pe),ie=z(Pe,2),ee=H(ie);se(()=>{rt(at,k(w).value.name),rt(ee,k(w).value.description)}),S(te,ve)},$$slots:{default:!0}}),B("click",ne,()=>{pt.navigate("/league/"+k(w).key)}),S(T,ne)}),S(y,b)};he(C,y=>{k(n).leagues.length==0?y(O):y(L,!1)})}var M=z(C,2);{var E=y=>{bt(y,{type:"button",class:"w-48",$$events:{click:()=>{G(t,!0)}},children:(b,I)=>{var T=pe("Create League");S(b,T)},$$slots:{default:!0}})};he(M,y=>{k(n).admin&&y(E)})}var m=z(M,2);bt(m,{type:"button",class:"w-48",$$events:{click:g},children:(y,b)=>{var I=pe("Sign Out");S(y,I)},$$slots:{default:!0}}),S(N,x)};he(A,N=>{k(t)?N(R):N(P,!1)})}S(r,v),Ue()}var ER=W("<title> </title>"),IR=Ao("<desc> </desc>"),TR=Ao('<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 18 17.94 6M18 18 6.06 6"></path></svg>');function eh(r,e){var x,C;Me(e,!0);const t=Xe("iconCtx")??{},n={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-8 h-8"};let s=U(e,"size",19,()=>t.size||"md"),i=U(e,"color",19,()=>t.color||"currentColor"),o=U(e,"strokeWidth",19,()=>t.strokeWidth||"2"),l=U(e,"ariaLabel",3,"close outline"),c=cy(e,["$$slots","$$events","$$legacy","size","color","title","strokeWidth","desc","class","ariaLabel"]),u=`${((x=e.title)==null?void 0:x.id)||""} ${((C=e.desc)==null?void 0:C.id)||""}`;const d=so(()=>{var O,L;return!!((O=e.title)!=null&&O.id||(L=e.desc)!=null&&L.id)});var g=TR();let p;var v=H(g);{var A=O=>{var L=ER(),M=H(L);se(()=>{yn(L,"id",e.title.id),rt(M,e.title.title)}),S(O,L)};he(v,O=>{var L;(L=e.title)!=null&&L.id&&e.title.title&&O(A)})}var R=z(v);{var P=O=>{var L=IR(),M=H(L);se(()=>{yn(L,"id",e.desc.id),rt(M,e.desc.desc)}),S(O,L)};he(R,O=>{var L;(L=e.desc)!=null&&L.id&&e.desc.desc&&O(P)})}var N=z(R);se(()=>{p=ze(g,p,{xmlns:"http://www.w3.org/2000/svg",fill:"none",color:i(),...c,class:xe("shrink-0",n[s()],e.class),"aria-label":l(),"aria-describedby":k(d)?u:void 0,viewBox:"0 0 24 24"},void 0,!0),yn(N,"stroke-width",o())}),S(r,g),Ue()}var AR=W('<div class="flex justify-between"> <button><!></button></div>'),kR=W("<div><!></div>"),RR=W("<span>Email</span> <!>",1),PR=W("<span>Your password</span> <!>",1),CR=W('<form class="flex flex-col space-y-6"><h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3> <!> <!> <!> <div class="text-sm font-medium text-gray-500 dark:text-gray-300">Not registered? <button class="text-primary-700 hover:underline dark:text-primary-500">Create account</button></div></form>'),SR=W('<div class="w-96 z-0" style="grid-area: inner-div;"><!></div>'),xR=W("<span>Email</span> <!>",1),DR=W("<span>Your password</span> <!>",1),NR=W('<form class="flex flex-col space-y-6"><h3 class="text-xl font-medium text-gray-900 dark:text-white">Create an account</h3> <!> <!> <!> <div class="text-sm font-medium text-gray-500 dark:text-gray-300">Already registered? <button class="text-primary-700 hover:underline dark:text-primary-500">Sign in</button></div></form>'),OR=W('<div class="w-96 z-10 space-y-4" style="grid-area: inner-div;"><!></div>'),VR=W(`<div class="flex flex-col space-y-4"><!> <div class="grid place-items-center" style="grid-template-areas: 'inner-div';"><!></div></div>`);function LR(r,e){Me(e,!1);let t=!1,n=re(!0),s=re("biglercorbin@gmail.com"),i=re("Mcman0101!"),o=re(null);function l(){G(o,null)}function c(){pt.removeParam("create"),G(o,null)}function u(){pt.setParam("create","true"),G(o,null)}async function d(){if(!(!k(s)||!k(i)||t))try{await Je.signIn(k(s),k(i))}catch(C){G(o,xa(Kn(C)))}}async function g(){if(!(!k(s)||!k(i)))try{await Je.createAccount(k(s),k(i))}catch(C){G(o,xa(Kn(C)))}}pt.params.subscribe(C=>{G(n,C.get("create")!="true")}),je();var p=VR(),v=H(p);{var A=C=>{var O=kR(),L=H(O);lu(L,{children:(M,E)=>{var m=AR(),y=H(m),b=z(y),I=H(b);eh(I,{}),se(()=>rt(y,`${k(o)??""} `)),B("click",b,l),S(M,m)},$$slots:{default:!0}}),Ys(3,O,()=>Xs,()=>({delay:100})),S(C,O)};he(v,C=>{k(o)!=null&&C(A)})}var R=z(v,2),P=H(R);{var N=C=>{var O=SR(),L=H(O);pn(L,{children:(M,E)=>{var m=CR(),y=z(H(m),2);mr(y,{class:"space-y-2",children:(ne,ae)=>{var te=RR(),le=z(Q(te),2);Wr(le,{type:"email",name:"email",placeholder:"name@company.com",required:!0,get value(){return k(s)},set value(ve){G(s,ve)},$$legacy:!0}),S(ne,te)},$$slots:{default:!0}});var b=z(y,2);mr(b,{class:"space-y-2",children:(ne,ae)=>{var te=PR(),le=z(Q(te),2);Wr(le,{type:"password",name:"password",placeholder:"•••••",required:!0,get value(){return k(i)},set value(ve){G(i,ve)},$$legacy:!0}),S(ne,te)},$$slots:{default:!0}});var I=z(b,2);bt(I,{type:"submit",class:"w-full",$$events:{click:d},children:(ne,ae)=>{var te=pe("Login to your account");S(ne,te)},$$slots:{default:!0}});var T=z(I,2),w=z(H(T));B("click",w,u),B("submit",m,ys(function(ne){F.call(this,e,ne)})),S(M,m)},$$slots:{default:!0}}),Ys(3,O,()=>Xs,()=>({duration:100})),S(C,O)},x=C=>{var O=OR(),L=H(O);pn(L,{children:(M,E)=>{var m=NR(),y=z(H(m),2);mr(y,{class:"space-y-2",children:(ne,ae)=>{var te=xR(),le=z(Q(te),2);Wr(le,{type:"email",name:"email",placeholder:"name@company.com",required:!0,get value(){return k(s)},set value(ve){G(s,ve)},$$legacy:!0}),S(ne,te)},$$slots:{default:!0}});var b=z(y,2);mr(b,{class:"space-y-2",children:(ne,ae)=>{var te=DR(),le=z(Q(te),2);Wr(le,{type:"password",name:"password",placeholder:"•••••",required:!0,get value(){return k(i)},set value(ve){G(i,ve)},$$legacy:!0}),S(ne,te)},$$slots:{default:!0}});var I=z(b,2);bt(I,{type:"submit",class:"w-full",$$events:{click:g},children:(ne,ae)=>{var te=pe("Create an account");S(ne,te)},$$slots:{default:!0}});var T=z(I,2),w=z(H(T));B("click",w,c),B("submit",m,ys(function(ne){F.call(this,e,ne)})),S(M,m)},$$slots:{default:!0}}),Ys(3,O,()=>Xs,()=>({duration:100})),S(C,O)};he(P,C=>{k(n)?C(N):C(x,!1)})}S(r,p),Ue()}var MR=W("<p>404 Error</p>");function Wc(r){var e=MR();S(r,e)}const UR="/usFlag.svg";var FR=W('<div class="flex justify-between w-10"><img alt="US Flag"> +1</div>'),BR=W("<!> <!>",1),$R=W('<div class="max-w-sm mx-auto"><!></div>');function qR(r,e){Me(e,!1);let t=U(e,"value",12,""),n=re("");function s(c){const d=c.replace(/[^0-9]/g,"").substring(0,10).match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);if(!d)return c;const[,g,p,v]=d;return v?`(${g}) ${p}-${v}`:p?`(${g}) ${p}`:g?`(${g}`:c}function i(c){t(c.replace(/[^0-9]/g,"")),G(n,s(t()))}je();var o=$R(),l=H(o);o0(l,{class:"w-full",children:(c,u)=>{var d=BR(),g=Q(d);v0(g,{children:(v,A)=>{var R=FR(),P=H(R);yn(P,"src",UR),S(v,R)},$$slots:{default:!0}});var p=z(g,2);Wr(p,{type:"text",name:"last-name",placeholder:"",required:!0,get value(){return k(n)},set value(v){G(n,v)},$$events:{input:v=>i(v.target.value)},$$legacy:!0}),S(c,d)},$$slots:{default:!0}}),S(r,o),Ue()}var zR=W('<div class="flex justify-between"> <button><!></button></div>'),jR=W("<div><!></div>"),GR=W("<span>First Name</span> <!>",1),WR=W("<span>Last Name</span> <!>",1),HR=W("<span>Phone Number</span> <!>",1),KR=W('<form class="flex flex-col space-y-6"><h3 class="text-xl font-medium text-gray-900 dark:text-white">Complete Account</h3> <div class="flex space-x-2"><!> <!></div> <!> <!></form>'),QR=W(`<div class="flex flex-col space-y-4 items-center"><!> <div class="grid place-items-center" style="grid-template-areas: 'inner-div';"><div class="w-96 z-0" style="grid-area: inner-div;"><!></div></div> <!></div>`);function YR(r,e){Me(e,!1);let t=re(""),n=re(""),s=re(""),i=re(null);async function o(){var R;if(!(!k(t)||!k(n)||!k(s)))try{if(((R=pr(Je.user))==null?void 0:R.uid)==null)return;await Je.updateUserData({phone:k(s),"first-name":k(t),"last-name":k(n)})}catch(P){console.error(P),G(i,xa(Kn(P)))}}function l(){G(i,null)}je();var c=QR(),u=H(c);{var d=R=>{var P=jR(),N=H(P);lu(N,{children:(x,C)=>{var O=zR(),L=H(O),M=z(L),E=H(M);eh(E,{}),se(()=>rt(L,`${k(i)??""} `)),B("click",M,l),S(x,O)},$$slots:{default:!0}}),Ys(3,P,()=>Xs,()=>({delay:100})),S(R,P)};he(u,R=>{k(i)!=null&&R(d)})}var g=z(u,2),p=H(g),v=H(p);pn(v,{children:(R,P)=>{var N=KR(),x=z(H(N),2),C=H(x);mr(C,{class:"space-y-2",children:(E,m)=>{var y=GR(),b=z(Q(y),2);Wr(b,{type:"text",name:"first-name",placeholder:"",required:!0,get value(){return k(t)},set value(I){G(t,I)},$$legacy:!0}),S(E,y)},$$slots:{default:!0}});var O=z(C,2);mr(O,{class:"space-y-2",children:(E,m)=>{var y=WR(),b=z(Q(y),2);Wr(b,{type:"text",name:"last-name",placeholder:"",required:!0,get value(){return k(n)},set value(I){G(n,I)},$$legacy:!0}),S(E,y)},$$slots:{default:!0}});var L=z(x,2);mr(L,{class:"space-y-2",children:(E,m)=>{var y=HR(),b=z(Q(y),2);qR(b,{get value(){return k(s)},set value(I){G(s,I)},$$legacy:!0}),S(E,y)},$$slots:{default:!0}});var M=z(L,2);bt(M,{type:"submit",class:"w-full",$$events:{click:o},children:(E,m)=>{var y=pe("Complete Account");S(E,y)},$$slots:{default:!0}}),B("submit",N,ys(o)),S(R,N)},$$slots:{default:!0}});var A=z(g,2);bt(A,{class:"w-48",type:"button",$$events:{click:()=>{Je.signOut()}},children:(R,P)=>{var N=pe("Sign Out");S(R,N)},$$slots:{default:!0}}),S(r,c),Ue()}var JR=W('<div class="flex justify-between"> <button><!></button></div>'),XR=W('<div class="w-full"><!></div>'),ZR=W("<span>Email</span> <!>",1),eP=W('<form class="flex flex-col space-y-6"><h3 class="text-xl font-medium text-gray-900 dark:text-white">Add Player</h3> <!> <div class="flex flex-row space-x-2"><!> <!></div></form>'),tP=W("<span>Required Matches</span> <!>",1),rP=W('<form class="flex flex-col space-y-6"><h3 class="text-xl font-medium text-gray-900 dark:text-white">Schedule Games</h3> <!> <!> <div class="flex flex-row space-x-2"><!> <!></div></form>'),nP=W("<!> <!> <!>",1),sP=W("<!> <!> <!>",1),iP=W("<!> <!>",1),oP=W('<form class="flex flex-col space-y-6"><div class="flex w-full justify-between"><h3 class="text-xl font-medium text-gray-900 dark:text-white">Edit Game</h3> <button type="button" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Delete</button></div> <!> <div class="flex flex-row space-x-2"><!> <!></div></form>'),aP=W('<div class="flex w-full justify-end space-x-4"><!> <!></div>'),lP=W('<span class="sr-only">Score</span>'),cP=W("<tr><!></tr> <tr><!><!><!><!><!></tr>",1),uP=W('<button class="font-medium text-primary-600 hover:underline dark:text-primary-500">Score</button>'),hP=W("<!> <!> <!> <!> <!>",1),dP=W("<!> <!>",1),fP=W('<span class="sr-only">Edit</span>'),gP=W("<tr><!></tr> <tr><!><!><!><!><!></tr>",1),pP=W('<button class="font-medium text-primary-600 hover:underline dark:text-primary-500">Remove</button>'),mP=W("<!> <!> <!> <!> <!>",1),_P=W("<!> <!>",1),vP=W('<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> </h5> <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight"> </p> <div class="flex flex-col space-y-4"><!> <!> <!></div>',1),yP=W('<div class="flex space-x-4"><!> <!></div>'),wP=W('<div class="flex flex-col space-y-5 items-center"><!> <!> <!></div>');function bP(r,e){Me(e,!1);let t=re(""),n=re(3),s=re(!0),i=re(),o=re(!0),l=re(null),c=re([]),u=re(!1),d=re(!1),g=re(),p=re([]),v=!1,A=re(),R={},P={},N={};function x(j){const Y=j.split("/").filter(Boolean);G(i,Y[1]||null)}x(pr(pt.path).pathname),pt.path.subscribe(j=>{x(j.pathname)});async function C(j){if(v||!k(i))return;v=!0;let Y=await _s.removeLeaguePlayer(j,k(i));if(Y.status!=Kr.success){G(A,Kn(Y.status)),v=!1;return}await E(),v=!1}async function O(){if(v||!k(i))return;v=!0;let j=await _s.addLeaguePlayer(k(t),k(i));if(j.status!=Kr.success){G(A,Kn(j.status)),v=!1;return}await E(),v=!1,ae()}async function L(){if(v||!k(i))return;v=!0;let j=await _s.scheduleGames(k(i),k(n),k(s));if(console.log(j),j.status!=Kr.success){G(A,Kn(j.status)),v=!1;return}await E(),v=!1,ae()}async function M(){const j=k(g);if(k(p).find(Y=>Y.a==Y.b)){G(A,$n.CanNotTie);return}await rr.updateGame(j.reference,{matches:k(p)}),G(g,null),G(p,[])}async function E(){if(!k(i)||(G(l,await rr.getLeague(k(i))),!k(l)))return;G(c,await rr.getLeagueGames(k(i)));const j=[],Y=[];for(const ur of k(l).players){const Ar=ur.path.split("/")[0],on=ur.id;Ar==="users"?j.push(on):Ar==="invites"&&Y.push(on)}const lt=[];Y.length>0?lt.push(rr.getInvites(Y)):lt.push(Promise.resolve([])),j.length>0?lt.push(rr.getUserDatas(j)):lt.push(Promise.resolve([])),lt.push(_s.getBulkEmails(j));const[lr,Tr,cr]=await Promise.all(lt);N=cr.data.reduce((ur,Ar)=>(ur[Ar.uid]=Ar.email,ur),{}),R=lr,P=Tr}ou(async()=>{await E(),G(o,!1)});function m(j){let Y=Je.uid??"";return j.a.map(lt=>lt.id).includes(Y)?"a":j.b.map(lt=>lt.id).includes(Y)?"b":null}function y(j){const Y=j.path.split("/")[0];return Y==="users"?N[j.id]:Y==="invites"?R[j.id].email:null}function b(j){const Y=j.path.split("/")[0];return Y==="users"?P[j.id].phone:""}function I(j){const Y=j.path.split("/")[0];return Y==="users"?P[j.id]["first-name"]+" "+P[j.id]["last-name"]:null}function T(j){const Y=j.path.split("/")[0];return""}function w(){pt.setParam("overlay","schedule")}function ne(){pt.setParam("overlay","add")}function ae(){pt.removeParam("overlay")}function te(){var j;return k(l)?k(l).organizers.map(Y=>Y.id).includes(Je.uid??"")||((j=pr(Je.userData))==null?void 0:j.admin)==!0:!1}function le(j){var Y;return k(l)?m(j)!=null||((Y=pr(Je.userData))==null?void 0:Y.admin)==!0:!1}function ve(j){return`${j.matches.filter(Y=>Y.a>Y.b).length}-${j.matches.filter(Y=>Y.b>Y.a).length}`}async function Pe(){k(g)&&(await rr.deleteGame(k(g).reference),await E(),G(g,null))}pt.params.subscribe(j=>{G(d,j.get("overlay")=="add"),G(u,j.get("overlay")=="schedule")}),je();var at=_e(),ie=Q(at);{var ee=j=>{xg(j,{})},Ee=j=>{var Y=_e(),lt=Q(Y);{var lr=cr=>{var Rn=wP(),ur=H(Rn);{var Ar=Nt=>{var Jt=XR(),kr=H(Jt);lu(kr,{children:(yr,Rr)=>{var It=JR(),yt=H(It);se(()=>rt(yt,`${xa(k(A))??""} `));var Br=z(yt),Ne=H(Br);eh(Ne,{}),B("click",Br,()=>{G(A,null)}),S(yr,It)},$$slots:{default:!0}}),Ys(3,Jt,()=>Xs,()=>({delay:100})),S(Nt,Jt)};he(ur,Nt=>{k(A)!=null&&Nt(Ar)})}var on=z(ur,2);{var Ci=Nt=>{pn(Nt,{children:(Jt,kr)=>{var yr=eP(),Rr=z(H(yr),2);mr(Rr,{class:"space-y-2",children:(Ne,Ze)=>{var ct=ZR(),$r=z(Q(ct),2);Wr($r,{type:"text",name:"email",placeholder:"",required:!0,get value(){return k(t)},set value(an){G(t,an)},$$legacy:!0}),S(Ne,ct)},$$slots:{default:!0}});var It=z(Rr,2),yt=H(It);bt(yt,{type:"button",class:"w-full",outline:!0,$$events:{click:ae},children:(Ne,Ze)=>{var ct=pe("Cancel");S(Ne,ct)},$$slots:{default:!0}});var Br=z(yt,2);bt(Br,{type:"submit",class:"w-full",$$events:{click:O},children:(Ne,Ze)=>{var ct=pe("Add");S(Ne,ct)},$$slots:{default:!0}}),B("submit",yr,ys(O)),S(Jt,yr)},$$slots:{default:!0}})},Si=Nt=>{var Jt=_e(),kr=Q(Jt);{var yr=It=>{pn(It,{children:(yt,Br)=>{var Ne=rP(),Ze=z(H(Ne),2);mr(Ze,{class:"space-y-2",children:(ut,zr)=>{var Tt=tP(),ln=z(Q(Tt),2);Fl(ln,{required:!0,get value(){return k(n)},set value(Pn){G(n,Pn)},$$legacy:!0}),S(ut,Tt)},$$slots:{default:!0}});var ct=z(Ze,2);k0(ct,{get checked(){return k(s)},set checked(ut){G(s,ut)},children:(ut,zr)=>{var Tt=pe("Duos");S(ut,Tt)},$$slots:{default:!0},$$legacy:!0});var $r=z(ct,2),an=H($r);bt(an,{type:"button",class:"w-full",outline:!0,$$events:{click:ae},children:(ut,zr)=>{var Tt=pe("Cancel");S(ut,Tt)},$$slots:{default:!0}});var qr=z(an,2);bt(qr,{type:"submit",class:"w-full",$$events:{click:L},children:(ut,zr)=>{var Tt=pe("Schedule");S(ut,Tt)},$$slots:{default:!0}}),B("submit",Ne,ys(L)),S(yt,Ne)},$$slots:{default:!0}})},Rr=It=>{var yt=_e(),Br=Q(yt);{var Ne=ct=>{pn(ct,{children:($r,an)=>{var qr=oP(),ut=H(qr),zr=z(H(ut),2),Tt=z(ut,2);Bl(Tt,{children:(Pr,Cn)=>{var Cr=iP(),jr=Q(Cr);ql(jr,{children:(Wt,Xt)=>{var At=nP(),kt=Q(At);Kt(kt,{children:(wt,De)=>{var et=pe("Match");S(wt,et)},$$slots:{default:!0}});var Ot=z(kt,2);Kt(Ot,{children:(wt,De)=>{var et=pe();se(()=>rt(et,m(k(g))!=null?"Your Score":"A Team Score")),S(wt,et)},$$slots:{default:!0}});var Ge=z(Ot,2);Kt(Ge,{children:(wt,De)=>{var et=pe();se(()=>rt(et,m(k(g))!=null?"Opponent Score":"B Team Score")),S(wt,et)},$$slots:{default:!0}}),S(Wt,At)},$$slots:{default:!0}});var ls=z(jr,2);$l(ls,{tableBodyClass:"divide-y",children:(Wt,Xt)=>{var At=_e(),kt=Q(At);Qs(kt,1,()=>Array.from({length:k(p).length},(Ot,Ge)=>Ge),Ks,(Ot,Ge)=>{$i(Ot,{children:(wt,De)=>{var et=sP(),Vt=Q(et);Ht(Vt,{children:(tt,ht)=>{var $e=pe();se(()=>rt($e,k(Ge)+1)),S(tt,$e)},$$slots:{default:!0}});var Lt=z(Vt,2);Ht(Lt,{children:(tt,ht)=>{Fl(tt,{required:!0,get value(){return k(p)[k(Ge)][m(k(g))??"a"]},set value($e){Bh(p,k(p)[k(Ge)][m(k(g))??"a"]=$e)},$$legacy:!0})},$$slots:{default:!0}});var st=z(Lt,2);Ht(st,{children:(tt,ht)=>{Fl(tt,{required:!0,get value(){return k(p)[k(Ge)][m(k(g))=="b"?"a":"b"]},set value($e){Bh(p,k(p)[k(Ge)][m(k(g))=="b"?"a":"b"]=$e)},$$legacy:!0})},$$slots:{default:!0}}),S(wt,et)},$$slots:{default:!0}})}),S(Wt,At)},$$slots:{default:!0}}),S(Pr,Cr)},$$slots:{default:!0}});var ln=z(Tt,2),Pn=H(ln);bt(Pn,{type:"button",class:"w-full",outline:!0,$$events:{click:()=>{G(g,null)}},children:(Pr,Cn)=>{var Cr=pe("Cancel");S(Pr,Cr)},$$slots:{default:!0}});var Ns=z(Pn,2);bt(Ns,{type:"submit",class:"w-full",$$events:{click:M},children:(Pr,Cn)=>{var Cr=pe("Complete");S(Pr,Cr)},$$slots:{default:!0}}),B("click",zr,Pe),B("submit",qr,ys(M)),S($r,qr)},$$slots:{default:!0}})},Ze=ct=>{pn(ct,{size:"xl",class:"w-full",children:($r,an)=>{var qr=vP(),ut=Q(qr),zr=H(ut),Tt=z(ut,2),ln=H(Tt),Pn=z(Tt,2),Ns=H(Pn);{var Pr=Wt=>{var Xt=aP(),At=H(Xt);bt(At,{outline:!0,type:"button",$$events:{click:w},children:(Ot,Ge)=>{var wt=pe("Schedule Games");S(Ot,wt)},$$slots:{default:!0}});var kt=z(At,2);bt(kt,{type:"button",$$events:{click:ne},children:(Ot,Ge)=>{var wt=pe("Add Player");S(Ot,wt)},$$slots:{default:!0}}),S(Wt,Xt)};he(Ns,Wt=>{te()&&Wt(Pr)})}var Cn=z(Ns,2),Cr=ft(()=>k(c).length>0);Bl(Cn,{get hoverable(){return k(Cr)},children:(Wt,Xt)=>{var At=dP(),kt=Q(At);ql(kt,{defaultRow:!1,children:(Ge,wt)=>{var De=cP(),et=Q(De),Vt=H(et);Kt(Vt,{colspan:5,children:(Ye,Mt)=>{var Ae=pe("Games");S(Ye,Ae)},$$slots:{default:!0}});var Lt=z(et,2),st=H(Lt);Kt(st,{children:(Ye,Mt)=>{var Ae=pe("Seed");S(Ye,Ae)},$$slots:{default:!0}});var tt=z(st);Kt(tt,{children:(Ye,Mt)=>{var Ae=pe("A Team");S(Ye,Ae)},$$slots:{default:!0}});var ht=z(tt);Kt(ht,{children:(Ye,Mt)=>{var Ae=pe("B Team");S(Ye,Ae)},$$slots:{default:!0}});var $e=z(ht);Kt($e,{children:(Ye,Mt)=>{var Ae=pe("Score");S(Ye,Ae)},$$slots:{default:!0}});var Le=z($e);Kt(Le,{children:(Ye,Mt)=>{var Ae=lP();S(Ye,Ae)},$$slots:{default:!0}}),S(Ge,De)},$$slots:{default:!0}});var Ot=z(kt,2);$l(Ot,{tableBodyClass:"divide-y",children:(Ge,wt)=>{var De=_e(),et=Q(De);{var Vt=st=>{var tt=_e(),ht=Q(tt);Qs(ht,1,()=>k(c).sort(($e,Le)=>$e.court-Le.court).sort(($e,Le)=>Le.round-$e.round),Ks,($e,Le)=>{$i($e,{children:(Ye,Mt)=>{var Ae=hP(),Rt=Q(Ae);Ht(Rt,{children:(qe,Zt)=>{var Fe=pe();se(()=>rt(Fe,k(Le).court+1)),S(qe,Fe)},$$slots:{default:!0}});var We=z(Rt,2);Ht(We,{children:(qe,Zt)=>{var Fe=pe();se(()=>rt(Fe,k(Le).a.map(Ut=>I(Ut)??y(Ut)).join(", "))),S(qe,Fe)},$$slots:{default:!0}});var Gr=z(We,2);Ht(Gr,{children:(qe,Zt)=>{var Fe=pe();se(()=>rt(Fe,k(Le).b.map(Ut=>I(Ut)??y(Ut)).join(", "))),S(qe,Fe)},$$slots:{default:!0}});var Sn=z(Gr,2);Ht(Sn,{children:(qe,Zt)=>{var Fe=pe();se(()=>rt(Fe,ve(k(Le)))),S(qe,Fe)},$$slots:{default:!0}});var cs=z(Sn,2);{var us=qe=>{Ht(qe,{children:(Zt,Fe)=>{var Ut=uP();B("click",Ut,()=>{G(g,k(Le)),G(p,k(Le).matches)}),S(Zt,Ut)},$$slots:{default:!0}})};he(cs,qe=>{le(k(Le))&&qe(us)})}S(Ye,Ae)},$$slots:{default:!0}})}),S(st,tt)},Lt=st=>{$i(st,{children:(tt,ht)=>{var $e=ft(()=>te()?5:4);Ht(tt,{get colspan(){return k($e)},children:(Le,Ye)=>{var Mt=pe("No games have been scheduled");S(Le,Mt)},$$slots:{default:!0}})},$$slots:{default:!0}})};he(et,st=>{k(c).length>0?st(Vt):st(Lt,!1)})}S(Ge,De)},$$slots:{default:!0}}),S(Wt,At)},$$slots:{default:!0}});var jr=z(Cn,2),ls=ft(()=>k(l).players.length>0);Bl(jr,{get hoverable(){return k(ls)},children:(Wt,Xt)=>{var At=_P(),kt=Q(At);ql(kt,{defaultRow:!1,children:(Ge,wt)=>{var De=gP(),et=Q(De),Vt=H(et),Lt=ft(()=>te()?5:4);Kt(Vt,{get colspan(){return k(Lt)},children:(Ae,Rt)=>{var We=pe("Players");S(Ae,We)},$$slots:{default:!0}});var st=z(et,2),tt=H(st);Kt(tt,{children:(Ae,Rt)=>{var We=pe("Rank");S(Ae,We)},$$slots:{default:!0}});var ht=z(tt);Kt(ht,{children:(Ae,Rt)=>{var We=pe("Email");S(Ae,We)},$$slots:{default:!0}});var $e=z(ht);Kt($e,{children:(Ae,Rt)=>{var We=pe("Name");S(Ae,We)},$$slots:{default:!0}});var Le=z($e);Kt(Le,{children:(Ae,Rt)=>{var We=pe("Phone");S(Ae,We)},$$slots:{default:!0}});var Ye=z(Le);{var Mt=Ae=>{Kt(Ae,{children:(Rt,We)=>{var Gr=fP();S(Rt,Gr)},$$slots:{default:!0}})};he(Ye,Ae=>{te()&&Ae(Mt)})}S(Ge,De)},$$slots:{default:!0}});var Ot=z(kt,2);$l(Ot,{tableBodyClass:"divide-y",children:(Ge,wt)=>{var De=_e(),et=Q(De);{var Vt=st=>{var tt=_e(),ht=Q(tt);Qs(ht,1,()=>k(l).players,Ks,($e,Le)=>{$i($e,{children:(Ye,Mt)=>{var Ae=mP(),Rt=Q(Ae);Ht(Rt,{children:(qe,Zt)=>{var Fe=pe();se(()=>rt(Fe,T(k(Le)))),S(qe,Fe)},$$slots:{default:!0}});var We=z(Rt,2);Ht(We,{children:(qe,Zt)=>{var Fe=pe();se(()=>rt(Fe,y(k(Le)))),S(qe,Fe)},$$slots:{default:!0}});var Gr=z(We,2);Ht(Gr,{children:(qe,Zt)=>{var Fe=pe();se(()=>rt(Fe,I(k(Le)))),S(qe,Fe)},$$slots:{default:!0}});var Sn=z(Gr,2);Ht(Sn,{children:(qe,Zt)=>{var Fe=pe();se(()=>rt(Fe,b(k(Le)))),S(qe,Fe)},$$slots:{default:!0}});var cs=z(Sn,2);{var us=qe=>{Ht(qe,{children:(Zt,Fe)=>{var Ut=pP();B("click",Ut,()=>{C(k(Le))}),S(Zt,Ut)},$$slots:{default:!0}})};he(cs,qe=>{te()&&qe(us)})}S(Ye,Ae)},$$slots:{default:!0}})}),S(st,tt)},Lt=st=>{$i(st,{children:(tt,ht)=>{var $e=ft(()=>te()?5:4);Ht(tt,{get colspan(){return k($e)},children:(Le,Ye)=>{var Mt=pe("No players in this league");S(Le,Mt)},$$slots:{default:!0}})},$$slots:{default:!0}})};he(et,st=>{k(l).players.length>0?st(Vt):st(Lt,!1)})}S(Ge,De)},$$slots:{default:!0}}),S(Wt,At)},$$slots:{default:!0}}),se(()=>{rt(zr,k(l).name),rt(ln,k(l).description)}),S($r,qr)},$$slots:{default:!0}})};he(Br,ct=>{k(g)!=null?ct(Ne):ct(Ze,!1)},!0)}S(It,yt)};he(kr,It=>{k(u)&&te()?It(yr):It(Rr,!1)},!0)}S(Nt,Jt)};he(on,Nt=>{k(d)&&te()?Nt(Ci):Nt(Si,!1)})}var Fo=z(on,2);{var Al=Nt=>{var Jt=yP(),kr=H(Jt);bt(kr,{outline:!0,type:"button",$$events:{click:()=>{pt.navigate("/dashboard")}},children:(Rr,It)=>{var yt=pe("Dashboard");S(Rr,yt)},$$slots:{default:!0}});var yr=z(kr,2);bt(yr,{type:"button",$$events:{click:()=>{Je.signOut()}},children:(Rr,It)=>{var yt=pe("Sign Out");S(Rr,yt)},$$slots:{default:!0}}),S(Nt,Jt)};he(Fo,Nt=>{Je.isLoggedIn&&Nt(Al)})}S(cr,Rn)},Tr=cr=>{Wc(cr)};he(lt,cr=>{k(i)!=null&&k(l)!=null?cr(lr):cr(Tr,!1)},!0)}S(j,Y)};he(ie,j=>{k(o)?j(ee):j(Ee,!1)})}S(r,at),Ue()}var EP=W('<main class="dark w-screen min-h-screen flex items-center justify-center bg-gradient-to-r bg-white dark:bg-gray-900 py-16"><!></main>');function IP(r,e){Me(e,!1);let t=re(!0),n=re(),s=null,i=null,o=re(!0),l=re();function c(){(k(n).startsWith("/landing")||k(n).startsWith("/dashboard"))&&s!=null&&(i==null||i["first-name"]==null)&&!pr(Je.authenticating)?(console.log("Replaced"),pt.replace("/finish-sign-up")):k(n).startsWith("/finish-sign-up")&&s==null||k(n).startsWith("/dashboard")&&!Je.isLoggedIn?pt.replace("/landing"):(k(n).startsWith("/finish-sign-up")||k(n).startsWith("/landing"))&&Je.isLoggedIn?pt.replace("/dashboard"):!k(o)&&!Je.isLoggedIn&&k(n).startsWith("/league")&&pt.replace("/landing")}pt.path.subscribe(v=>{G(n,v.pathname),console.log(k(n)),c()}),Je.user.subscribe(v=>{s=v,c()}),Je.userData.subscribe(v=>{i=v,c()}),Je.authenticating.subscribe(v=>{console.log("value: "+v),c()}),ou(()=>{Je.validate().then(()=>{G(o,!1),c()}),k(n)=="/"&&pt.replace("/landing"),G(t,!1)}),we(()=>(k(n),Wc),()=>{k(n).startsWith("/landing")?G(l,LR):k(n).startsWith("/dashboard")?G(l,bR):k(n).startsWith("/finish-sign-up")?G(l,YR):k(n).startsWith("/league")?G(l,bP):G(l,Wc)}),Dt(),je();var u=EP(),d=H(u);{var g=v=>{var A=_e(),R=Q(A);Xv(R,()=>k(l),(P,N)=>{N(P,{})}),S(v,A)},p=v=>{xg(v,{})};he(d,v=>{!k(t)&&!k(o)?v(g):v(p,!1)})}S(r,u),Ue()}const Zm="@firebase/installations",th="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=1e4,t_=`w:${th}`,r_="FIS_v2",TP="https://firebaseinstallations.googleapis.com/v1",AP=60*60*1e3,kP="installations",RP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ks=new Cs(kP,RP,PP);function n_(r){return r instanceof ar&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_({projectId:r}){return`${TP}/projects/${r}/installations`}function i_(r){return{token:r.token,requestStatus:2,expiresIn:SP(r.expiresIn),creationTime:Date.now()}}async function o_(r,e){const n=(await e.json()).error;return ks.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function a_({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function CP(r,{refreshToken:e}){const t=a_(r);return t.append("Authorization",xP(e)),t}async function l_(r){const e=await r();return e.status>=500&&e.status<600?r():e}function SP(r){return Number(r.replace("s","000"))}function xP(r){return`${r_} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const n=s_(r),s=a_(r),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:r_,appId:r.appId,sdkVersion:t_},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await l_(()=>fetch(n,l));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:i_(u.authToken)}}else throw await o_("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=/^[cdef][\w-]{21}$/,Hc="";function VP(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=LP(r);return OP.test(t)?t:Hc}catch{return Hc}}function LP(r){return NP(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=new Map;function h_(r,e){const t=Il(r);d_(t,e),MP(t,e)}function d_(r,e){const t=u_.get(r);if(t)for(const n of t)n(e)}function MP(r,e){const t=UP();t&&t.postMessage({key:r,fid:e}),FP()}let vs=null;function UP(){return!vs&&"BroadcastChannel"in self&&(vs=new BroadcastChannel("[Firebase] FID Change"),vs.onmessage=r=>{d_(r.data.key,r.data.fid)}),vs}function FP(){u_.size===0&&vs&&(vs.close(),vs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="firebase-installations-database",$P=1,Rs="firebase-installations-store";let nc=null;function rh(){return nc||(nc=jg(BP,$P,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Rs)}}})),nc}async function ja(r,e){const t=Il(r),s=(await rh()).transaction(Rs,"readwrite"),i=s.objectStore(Rs),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&h_(r,e.fid),e}async function f_(r){const e=Il(r),n=(await rh()).transaction(Rs,"readwrite");await n.objectStore(Rs).delete(e),await n.done}async function Tl(r,e){const t=Il(r),s=(await rh()).transaction(Rs,"readwrite"),i=s.objectStore(Rs),o=await i.get(t),l=e(o);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!o||o.fid!==l.fid)&&h_(r,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh(r){let e;const t=await Tl(r.appConfig,n=>{const s=qP(n),i=zP(r,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Hc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function qP(r){const e=r||{fid:VP(),registrationStatus:0};return g_(e)}function zP(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ks.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=jP(r,t);return{installationEntry:t,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:GP(r)}:{installationEntry:e}}async function jP(r,e){try{const t=await DP(r,e);return ja(r.appConfig,t)}catch(t){throw n_(t)&&t.customData.serverCode===409?await f_(r.appConfig):await ja(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function GP(r){let e=await xf(r.appConfig);for(;e.registrationStatus===1;)await c_(100),e=await xf(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:n}=await nh(r);return n||t}return e}function xf(r){return Tl(r,e=>{if(!e)throw ks.create("installation-not-found");return g_(e)})}function g_(r){return WP(r)?{fid:r.fid,registrationStatus:0}:r}function WP(r){return r.registrationStatus===1&&r.registrationTime+e_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP({appConfig:r,heartbeatServiceProvider:e},t){const n=KP(r,t),s=CP(r,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:t_,appId:r.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await l_(()=>fetch(n,l));if(c.ok){const u=await c.json();return i_(u)}else throw await o_("Generate Auth Token",c)}function KP(r,{fid:e}){return`${s_(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(r,e=!1){let t;const n=await Tl(r.appConfig,i=>{if(!p_(i))throw ks.create("not-registered");const o=i.authToken;if(!e&&JP(o))return i;if(o.requestStatus===1)return t=QP(r,e),i;{if(!navigator.onLine)throw ks.create("app-offline");const l=ZP(i);return t=YP(r,l),l}});return t?await t:n.authToken}async function QP(r,e){let t=await Df(r.appConfig);for(;t.authToken.requestStatus===1;)await c_(100),t=await Df(r.appConfig);const n=t.authToken;return n.requestStatus===0?sh(r,e):n}function Df(r){return Tl(r,e=>{if(!p_(e))throw ks.create("not-registered");const t=e.authToken;return eC(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function YP(r,e){try{const t=await HP(r,e),n=Object.assign(Object.assign({},e),{authToken:t});return await ja(r.appConfig,n),t}catch(t){if(n_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await f_(r.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ja(r.appConfig,n)}throw t}}function p_(r){return r!==void 0&&r.registrationStatus===2}function JP(r){return r.requestStatus===2&&!XP(r)}function XP(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+AP}function ZP(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function eC(r){return r.requestStatus===1&&r.requestTime+e_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(r){const e=r,{installationEntry:t,registrationPromise:n}=await nh(e);return n?n.catch(console.error):sh(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(r,e=!1){const t=r;return await nC(t),(await sh(t,e)).token}async function nC(r){const{registrationPromise:e}=await nh(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(r){if(!r||!r.options)throw sc("App Configuration");if(!r.name)throw sc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw sc(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function sc(r){return ks.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="installations",iC="installations-internal",oC=r=>{const e=r.getProvider("app").getImmediate(),t=sC(e),n=ns(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},aC=r=>{const e=r.getProvider("app").getImmediate(),t=ns(e,m_).getImmediate();return{getId:()=>tC(t),getToken:s=>rC(t,s)}};function lC(){Vr(new Ir(m_,oC,"PUBLIC")),Vr(new Ir(iC,aC,"PRIVATE"))}lC();ir(Zm,th);ir(Zm,th,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="analytics",cC="firebase_id",uC="origin",hC=60*1e3,dC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ih="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new rl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vr=new Cs("analytics","Analytics",fC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(r){if(!r.startsWith(ih)){const e=vr.create("invalid-gtag-resource",{gtagURL:r});return or.warn(e.message),""}return r}function __(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function pC(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function mC(r,e){const t=pC("firebase-js-sdk-policy",{createScriptURL:gC}),n=document.createElement("script"),s=`${ih}?l=${r}&id=${e}`;n.src=t?t==null?void 0:t.createScriptURL(s):s,n.async=!0,document.head.appendChild(n)}function _C(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function vC(r,e,t,n,s,i){const o=n[s];try{if(o)await e[o];else{const c=(await __(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){or.error(l)}r("config",s,i)}async function yC(r,e,t,n,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await __(t);for(const c of o){const u=l.find(g=>g.measurementId===c),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),r("event",n,s||{})}catch(i){or.error(i)}}function wC(r,e,t,n){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await yC(r,e,t,l,c)}else if(i==="config"){const[l,c]=o;await vC(r,e,t,n,l,c)}else if(i==="consent"){const[l,c]=o;r("consent",l,c)}else if(i==="get"){const[l,c,u]=o;r("get",l,c,u)}else if(i==="set"){const[l]=o;r("set",l)}else r(i,...o)}catch(l){or.error(l)}}return s}function bC(r,e,t,n,s){let i=function(...o){window[n].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=wC(i,r,e,t),{gtagCore:i,wrappedGtag:window[s]}}function EC(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ih)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=30,TC=1e3;class AC{constructor(e={},t=TC){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const v_=new AC;function kC(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function RC(r){var e;const{appId:t,apiKey:n}=r,s={method:"GET",headers:kC(n)},i=dC.replace("{app-id}",t),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw vr.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function PC(r,e=v_,t){const{appId:n,apiKey:s,measurementId:i}=r.options;if(!n)throw vr.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:n};throw vr.create("no-api-key")}const o=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new xC;return setTimeout(async()=>{l.abort()},hC),y_({appId:n,apiKey:s,measurementId:i},o,l,e)}async function y_(r,{throttleEndTimeMillis:e,backoffCount:t},n,s=v_){var i;const{appId:o,measurementId:l}=r;try{await CC(n,e)}catch(c){if(l)return or.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await RC(r);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!SC(u)){if(s.deleteThrottleMetadata(o),l)return or.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw c}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?ad(t,s.intervalMillis,IC):ad(t,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(o,g),or.debug(`Calling attemptFetch again in ${d} millis`),y_(r,g,n,s)}}function CC(r,e){return new Promise((t,n)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);r.addEventListener(()=>{clearTimeout(i),n(vr.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function SC(r){if(!(r instanceof ar)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class xC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function DC(r,e,t,n,s){if(s&&s.global){r("event",t,n);return}else{const i=await e,o=Object.assign(Object.assign({},n),{send_to:i});r("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(){if(Bg())try{await $g()}catch(r){return or.warn(vr.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return or.warn(vr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function OC(r,e,t,n,s,i,o){var l;const c=PC(r);c.then(v=>{t[v.measurementId]=v.appId,r.options.measurementId&&v.measurementId!==r.options.measurementId&&or.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>or.error(v)),e.push(c);const u=NC().then(v=>{if(v)return n.getId()}),[d,g]=await Promise.all([c,u]);EC(i)||mC(i,d.measurementId),s("js",new Date);const p=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return p[uC]="firebase",p.update=!0,g!=null&&(p[cC]=g),s("config",d.measurementId,p),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.app=e}_delete(){return delete ro[this.app.options.appId],Promise.resolve()}}let ro={},Nf=[];const Of={};let ic="dataLayer",LC="gtag",Vf,w_,Lf=!1;function MC(){const r=[];if(Fg()&&r.push("This is a browser extension environment."),ew()||r.push("Cookies are not available."),r.length>0){const e=r.map((n,s)=>`(${s+1}) ${n}`).join(" "),t=vr.create("invalid-analytics-context",{errorInfo:e});or.warn(t.message)}}function UC(r,e,t){MC();const n=r.options.appId;if(!n)throw vr.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)or.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vr.create("no-api-key");if(ro[n]!=null)throw vr.create("already-exists",{id:n});if(!Lf){_C(ic);const{wrappedGtag:i,gtagCore:o}=bC(ro,Nf,Of,ic,LC);w_=i,Vf=o,Lf=!0}return ro[n]=OC(r,Nf,Of,e,Vf,ic,t),new VC(r)}function FC(r=nl()){r=ot(r);const e=ns(r,Ga);return e.isInitialized()?e.getImmediate():BC(r)}function BC(r,e={}){const t=ns(r,Ga);if(t.isInitialized()){const s=t.getImmediate();if(ao(e,t.getOptions()))return s;throw vr.create("already-initialized")}return t.initialize({options:e})}function $C(r,e,t,n){r=ot(r),DC(w_,ro[r.app.options.appId],e,t,n).catch(s=>or.error(s))}const Mf="@firebase/analytics",Uf="0.10.10";function qC(){Vr(new Ir(Ga,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return UC(n,s,t)},"PUBLIC")),Vr(new Ir("analytics-internal",r,"PRIVATE")),ir(Mf,Uf),ir(Mf,Uf,"esm2017");function r(e){try{const t=e.getProvider(Ga).getImmediate();return{logEvent:(n,s,i)=>$C(t,n,s,i)}}catch(t){throw vr.create("interop-component-reg-failed",{reason:t})}}}qC();FC(al());Gv(IP,{target:document.getElementById("app")});
