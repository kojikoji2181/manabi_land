import"react";import{createRoot as Bt}from"react-dom/client";import{useState as w,useEffect as j,useRef as I,useCallback as ut}from"react";import{Fragment as q,jsx as t,jsxs as o}from"react/jsx-runtime";var O="tsumiki-best-times",ft="/images/tsumiki_hero.webp",Z=[{lv:1,chara:"luna",theme:"\u306A\u3089\u3093\u3060 \u3064\u307F\u304D",total:5,color:"#FFB7C9",soft:"#FFE3EA",deep:"#E2607F"},{lv:2,chara:"makami",theme:"\u304B\u3055\u306A\u3063\u305F \u3064\u307F\u304D",total:5,color:"#B9CFDE",soft:"#E9F1F7",deep:"#5B7E97"},{lv:3,chara:"tarte",theme:"\u304B\u304F\u308C\u305F \u3064\u307F\u304D\u3092 \u3055\u304C\u305B",total:5,color:"#ABE0A2",soft:"#E5F6E0",deep:"#55A05C"},{lv:4,chara:"emma",theme:"\u304A\u304A\u304D\u306A \u3084\u307E\u306B \u3061\u3087\u3046\u305B\u3093",total:5,color:"#CBBBF2",soft:"#EDE7FB",deep:"#7E5FC7"}],U={luna:"\u30EB\u30CA",makami:"\u30DE\u30AB\u30DF",tarte:"\u30BF\u30EB\u30C8",emma:"\u30A8\u30DE"},mt={luna:{normal:"/images/chara/luna_normal.webp",happy:"/images/chara/luna_happy.webp",sad:"/images/chara/luna_sad.webp"},makami:{normal:"/images/chara/makami_normal.webp",happy:"/images/chara/makami_happy.webp",sad:"/images/chara/makami_sad.webp"},tarte:{normal:"/images/chara/tarte_normal.webp",happy:"/images/chara/tarte_happy.webp",sad:"/images/chara/tarte_sad.webp"},emma:{normal:"/images/chara/emma_normal.webp",happy:"/images/chara/emma_happy.webp",sad:"/images/chara/emma_sad.webp"}};function R({chara:e,mood:a="normal",size:i=60}){let c=mt[e]||{},n=c[a]||c.normal||"";return n?t("img",{src:n,width:i,height:i,alt:"",draggable:!1,style:{display:"block",objectFit:"contain",pointerEvents:"none"}}):null}var _=(e,a)=>Math.floor(Math.random()*(a-e+1))+e;function V(e){return e.flat().reduce((a,i)=>a+i,0)}function Q(e){let a=e.length,i=e[0].length,c=0;for(let n=0;n<a;n++)for(let l=0;l<i;l++)for(let s=0;s<e[n][l];s++){let h=s<e[n][l]-1,b=n+1<a&&e[n+1][l]>s,u=l+1<i&&e[n][l+1]>s;h&&b&&u&&c++}return c}var bt={1:{W:[2,3],D:[1,2],maxH:1,total:[2,5],hidden:[0,0]},2:{W:[2,3],D:[1,2],maxH:3,total:[4,8],hidden:[0,1]},3:{W:[2,3],D:[2,3],maxH:3,total:[6,12],hidden:[1,3]},4:{W:[3,3],D:[3,3],maxH:4,total:[10,16],hidden:[2,6]}},ht={1:[[1,1],[1,0]],2:[[2,1],[1,0]],3:[[3,2],[2,1]],4:[[4,3,1],[3,2,1],[1,1,0]]};function gt(e){let a=bt[e];for(let c=0;c<500;c++){let n=_(a.W[0],a.W[1]),l=_(a.D[0],a.D[1]),s=[];for(let u=0;u<n;u++){s.push([]);for(let f=0;f<l;f++){let E=u>0?s[u-1][f]:a.maxH,k=f>0?s[u][f-1]:a.maxH,y=Math.min(E,k);s[u][f]=u===0&&f===0?_(1,a.maxH):y===0?0:_(0,y)}}let h=V(s),b=Q(s);if(h>=a.total[0]&&h<=a.total[1]&&b>=a.hidden[0]&&b<=a.hidden[1])return{h:s,total:h,hidden:b}}let i=ht[e];return{h:i,total:V(i),hidden:Q(i)}}function xt(e,a){let i=[],c=-1;for(let n=0;n<a;n++){let l,s=0;do l=gt(e),s++;while(l.total===c&&s<30);c=l.total,l.colors=Array.from({length:l.total},()=>_(0,5)),i.push(l)}return i}var vt=[{top:"#FBD3E1",left:"#F9BBD0",right:"#E393AF"},{top:"#C6E4F3",left:"#A8D3EA",right:"#86B7D3"},{top:"#D4F0C8",left:"#BDE6AC",right:"#9CCB88"},{top:"#DED3F7",left:"#CBBBF2",right:"#AC97DE"},{top:"#FBEFC0",left:"#F7E39B",right:"#DFC46F"},{top:"#FAD9BC",left:"#F6C79B",right:"#DFA372"}];function wt({hmap:e,colors:a,unit:i=24,maxWidth:c=280}){let n=e.length,l=e[0].length,s=[],h=0;for(let p=0;p<n;p++)for(let g=0;g<l;g++)for(let d=0;d<e[p][g];d++)s.push({x:p,y:g,z:d,c:a[h++%a.length]});s.sort((p,g)=>p.x+p.y-(g.x+g.y)||p.z-g.z);let b=i,u=i/2,f=i,E=p=>({cx:(p.x-p.y)*b,cy:(p.x+p.y)*u-p.z*f}),k=1e9,y=-1e9,$=1e9,F=-1e9;s.forEach(p=>{let{cx:g,cy:d}=E(p);k=Math.min(k,g-b),y=Math.max(y,g+b),$=Math.min($,d-u),F=Math.max(F,d+u+f)});let v=6,D=y-k+v*2,M=F-$+v*2;return t("svg",{viewBox:`${k-v} ${$-v} ${D} ${M}`,style:{width:`min(${c}px, ${Math.min(90,D/2.4)}vw)`,height:"auto",display:"block"},"aria-hidden":"true",children:s.map((p,g)=>{let{cx:d,cy:x}=E(p),z=vt[p.c];return o("g",{stroke:"#6B4E57",strokeWidth:"2",strokeLinejoin:"round",children:[t("polygon",{points:`${d},${x-u} ${d+b},${x} ${d},${x+u} ${d-b},${x}`,fill:z.top}),t("polygon",{points:`${d-b},${x} ${d},${x+u} ${d},${x+u+f} ${d-b},${x+f}`,fill:z.left}),t("polygon",{points:`${d},${x+u} ${d+b},${x} ${d+b},${x+f} ${d},${x+u+f}`,fill:z.right})]},g)})})}var kt=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,"0")}`,L=e=>{let a=Math.floor(e/60),i=Math.floor(e%60);return a>0?`${a}\u3075\u3093${i}\u3073\u3087\u3046`:`${i}\u3073\u3087\u3046`},H=null;function et(){if(!H){let e=window.AudioContext||window.webkitAudioContext;e&&(H=new e)}return H}function C(e,a,i,c="sine",n=.18){let l=et();if(!l)return;let s=l.createOscillator(),h=l.createGain();s.type=c,s.frequency.value=e,h.gain.setValueAtTime(0,l.currentTime+a),h.gain.linearRampToValueAtTime(n,l.currentTime+a+.01),h.gain.exponentialRampToValueAtTime(.001,l.currentTime+a+i),s.connect(h).connect(l.destination),s.start(l.currentTime+a),s.stop(l.currentTime+a+i+.05)}var yt=()=>{C(988,0,.13),C(1319,.15,.3)},Nt=()=>C(220,0,.3,"triangle",.1),Ft=()=>C(660,0,.12),zt=()=>{C(660,0,.1),C(880,.12,.2)},Ct=()=>{[523,659,784,1047].forEach((e,a)=>C(e,a*.13,.15)),C(1319,.55,.4)};async function Et(){try{if(typeof window<"u"&&window.storage){let a=await window.storage.get(O);return a?JSON.parse(a.value):{}}let e=localStorage.getItem(O);return e?JSON.parse(e):{}}catch{return{}}}async function tt(e){try{typeof window<"u"&&window.storage?await window.storage.set(O,JSON.stringify(e)):localStorage.setItem(O,JSON.stringify(e))}catch(a){console.error("save failed",a)}}function $t(e){try{let a="gakushu-log-v1",i=localStorage.getItem(a),c=i?JSON.parse(i):[];for(c.push(e);c.length>500;)c.shift();localStorage.setItem(a,JSON.stringify(c))}catch{}}var Dt=()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`};function W(){let[e,a]=w("title"),[i,c]=w({}),[n,l]=w(null),[s,h]=w(3),[b,u]=w([]),[f,E]=w(0),[k,y]=w(""),[$,F]=w(0),[v,D]=w(null),[M,p]=w(0),[g,d]=w(!1),[x,z]=w(!1),[at,X]=w(!1),Y=I(0),S=I(null),A=I(!1),P=I(0);j(()=>{Et().then(c)},[]),j(()=>()=>clearInterval(S.current),[]);let nt=r=>{et(),l({...r,key:`lv${r.lv}`}),u(xt(r.lv,r.total)),E(0),y(""),p(0),d(!1),D(null),z(!1),A.current=!1,h(3),a("countdown")},ot=()=>{x||(clearInterval(S.current),P.current=Date.now(),z(!0))},rt=()=>{Y.current+=Date.now()-P.current,S.current=setInterval(()=>{F((Date.now()-Y.current)/1e3)},100),z(!1)},st=()=>{clearInterval(S.current),z(!1),D(null),A.current=!1,a("title")},it=async()=>{c({}),await tt({}),X(!1)};j(()=>{if(e!=="countdown")return;if(s>0){Ft();let m=setTimeout(()=>h(T=>T-1),1e3);return()=>clearTimeout(m)}zt();let r=setTimeout(()=>{Y.current=Date.now(),F(0),S.current=setInterval(()=>{F((Date.now()-Y.current)/1e3)},100),a("play")},800);return()=>clearTimeout(r)},[e,s]);let lt=ut(async r=>{clearInterval(S.current);let m=Math.round((Date.now()-Y.current)/1e3);F(m);let T=i[n.key],K=!1;if(T==null||m<T){K=!0;let J={...i,[n.key]:m};c(J),await tt(J)}d(K),p(r),$t({d:Dt(),app:"tsumiki",correct:r,total:n.total,sec:m}),a("result"),setTimeout(Ct,300)},[i,n]),B=b[f],ct=()=>{if(k===""||A.current||!B)return;A.current=!0;let r=parseInt(k,10)===B.total,m=M+(r?1:0);r?yt():Nt(),D({ok:r,ans:B.total}),r&&p(m),setTimeout(()=>{D(null),y(""),A.current=!1,f+1>=n.total?lt(m):E(T=>T+1)},r?700:1700)},G=r=>{A.current||y(m=>m.length>=2?m:m==="0"?String(r):m+r)},pt=()=>{A.current||y(r=>r.slice(0,-1))},dt=v?v.ok?"happy":"sad":"normal",N=n||Z[0];return o("div",{className:"app",children:[t("style",{children:At}),e==="title"&&o("div",{className:"screen title-screen",children:[typeof window<"u"&&!window.storage&&t("a",{className:"home-link",href:"../",children:"\u2039 \u30DB\u30FC\u30E0\u3078"}),o("div",{className:"title-head",children:[t("img",{src:ft,className:"title-hero",alt:"",draggable:!1}),t("p",{className:"app-title-sub",children:"\u304B\u305E\u3048\u3066\u307F\u3088\u3046"}),o("h1",{className:"app-title",children:["\u3064\u307F\u304D",t("span",{className:"title-accent",children:"\u306A\u3093\u3053"})]}),t("p",{className:"app-sub",children:"\u304B\u304F\u308C\u305F \u3064\u307F\u304D\u3082 \u308F\u3059\u308C\u305A\u306B \u304B\u305E\u3048\u3066\u306D"})]}),t("div",{className:"level-list",children:Z.map(r=>o("button",{className:"level-btn",style:{"--c":r.color,"--soft":r.soft,"--deep":r.deep},onClick:()=>nt(r),children:[o("span",{className:"level-text",children:[o("span",{className:"level-name",children:["\u30EC\u30D9\u30EB",r.lv]}),t("span",{className:"level-sub",children:r.theme}),o("span",{className:"level-best",children:["\u3058\u3053\u30D9\u30B9\u30C8\uFF1A",i[`lv${r.lv}`]!=null?t("b",{children:L(i[`lv${r.lv}`])}):t("i",{children:"\u307E\u3060 \u304D\u308D\u304F\u304C \u306A\u3044\u3088"})]})]}),t("span",{className:"level-go",children:"\u25B6"})]},r.lv))}),t("button",{className:"reset-btn",onClick:()=>X(!0),children:"\u304D\u308D\u304F\u3092 \u305C\u3093\u3076 \u3051\u3059"}),at&&t("div",{className:"quit-overlay",children:o("div",{className:"quit-box",children:[o("p",{className:"quit-text",children:["\u3058\u3053\u30D9\u30B9\u30C8\u306E \u304D\u308D\u304F\u3092",t("br",{}),"\u305C\u3093\u3076 \u3051\u3057\u3066\u3082 \u3044\u3044\uFF1F",t("br",{}),t("small",{children:"\u3044\u3061\u3069 \u3051\u3059\u3068 \u3082\u3068\u306B \u3082\u3069\u305B\u306A\u3044\u3088"})]}),o("div",{className:"quit-btns",children:[t("button",{className:"quit-no",onClick:()=>X(!1),children:"\u3051\u3055\u306A\u3044"}),t("button",{className:"quit-yes",onClick:it,children:"\u3051\u3059"})]})]})})]}),e==="countdown"&&n&&o("div",{className:"screen count-screen",style:{"--c":N.color,"--soft":N.soft,"--deep":N.deep},children:[t("div",{className:"count-chara",children:t(R,{chara:n.chara,mood:"normal",size:120})}),o("p",{className:"count-cheer",children:[U[n.chara],"\u3068 \u3044\u3063\u3057\u3087\u306B \u304B\u305E\u3048\u3088\u3046\uFF01"]}),o("p",{className:"count-label",children:["\u30EC\u30D9\u30EB",n.lv]}),t("div",{className:`count-num ${s===0?"go":""}`,children:s>0?s:"\u30B9\u30BF\u30FC\u30C8\uFF01"},s)]}),e==="play"&&n&&B&&o("div",{className:"screen play-screen",style:{"--c":N.color,"--soft":N.soft,"--deep":N.deep},children:[o("div",{className:"hud",children:[o("span",{className:"hud-count",children:[t("b",{children:f+1})," / ",n.total," \u3082\u3093"]}),o("span",{className:"hud-right",children:[t("span",{className:"hud-time",children:kt($)}),t("button",{className:"quit-btn",onClick:ot,children:"\u3084\u3081\u308B"})]})]}),t("div",{className:"progress",children:t("div",{className:"progress-bar",style:{width:`${(f+1)/n.total*100}%`}})}),o("div",{className:"talk-row",children:[t("div",{className:`talk-chara ${v?v.ok?"hop":"shake":""}`,children:t(R,{chara:n.chara,mood:dt,size:70})}),t("div",{className:"bubble",children:n.lv===1?o(q,{children:["\u3064\u307F\u304D\u306F \u305C\u3093\u3076\u3067 ",t("b",{children:"\u306A\u3093\u3053"})," \u304B\u306A\uFF1F"]}):o(q,{children:["\u304B\u304F\u308C\u3066\u3044\u308B \u3064\u307F\u304D\u3082 \u304B\u305E\u3048\u3066\u306D\uFF01\u305C\u3093\u3076\u3067 ",t("b",{children:"\u306A\u3093\u3053\uFF1F"})]})},f)]}),o("div",{className:"blocks-area",children:[t(wt,{hmap:B.h,colors:B.colors}),v&&t("div",{className:`feedback ${v.ok?"ok":"ng"}`,children:t("span",{className:"fb-inner",children:v.ok?o(q,{children:[t("span",{className:"fb-mark",children:"\u2B55"})," \u305B\u3044\u304B\u3044\uFF01",B.total,"\u3053\uFF01"]}):o(q,{children:[t("span",{className:"fb-mark",children:"\u274C"})," \u3046\u301C\u3093\u2026 \u3053\u305F\u3048\u306F ",v.ans,"\u3053 \u3060\u3088"]})})})]},`b${f}`),o("div",{className:"answer-row",children:[t("div",{className:"answer-box",children:k?o(q,{children:[k,t("small",{children:"\u3053"})]}):t("span",{className:"placeholder",children:"\u306A\u3093\u3053\uFF1F"})}),t("button",{className:"side-btn del",onClick:pt,"aria-label":"\u3072\u3068\u3082\u3058\u3051\u3059",children:"\u2715"}),t("button",{className:"side-btn send",onClick:ct,disabled:k==="","aria-label":"\u304A\u304F\u308B",children:"\uFF1E"})]}),o("div",{className:"numpad",children:[[1,2,3,4,5,6,7,8,9].map(r=>t("button",{className:"key",onClick:()=>G(r),children:r},r)),t("button",{className:"key zero",onClick:()=>G(0),children:"0"})]}),x&&t("div",{className:"quit-overlay",children:o("div",{className:"quit-box",children:[t(R,{chara:n.chara,mood:"sad",size:84}),o("p",{className:"quit-text",children:["\u307B\u3093\u3068\u3046\u306B \u3084\u3081\u308B\uFF1F",t("br",{}),t("small",{children:"\u3068\u3061\u3085\u3046\u3067 \u3084\u3081\u308B\u3068 \u304D\u308D\u304F\u306F \u306E\u3053\u3089\u306A\u3044\u3088"})]}),o("div",{className:"quit-btns",children:[t("button",{className:"quit-no",onClick:rt,children:"\u3064\u3065\u3051\u308B"}),t("button",{className:"quit-yes",onClick:st,children:"\u3084\u3081\u308B"})]})]})})]}),e==="result"&&n&&o("div",{className:"screen result-screen",style:{"--c":N.color,"--soft":N.soft,"--deep":N.deep},children:[M===n.total&&t("div",{className:"confetti",children:Array.from({length:24}).map((r,m)=>t("span",{style:{"--i":m,"--cc":["#F48BB0","#8FC7E8","#8FD6A0","#B9A5E8","#FFD97A","#F6AC6B"][m%6]}},m))}),o("div",{className:"result-panel",children:[t("div",{className:"result-chara",children:t(R,{chara:n.chara,mood:"happy",size:120})}),t("h2",{className:"result-title",children:M===n.total?o(q,{children:["\u305C\u3093\u3076 \u305B\u3044\u304B\u3044\uFF01",t("br",{}),"\u3064\u307F\u304D \u306F\u304B\u305B\u3060\u306D\uFF01"]}):o(q,{children:["\u3055\u3044\u3054\u307E\u3067 \u304C\u3093\u3070\u3063\u305F\u306D\uFF01",t("br",{}),"\u3064\u304E\u306F \u307E\u3093\u3066\u3093\u3092 \u3081\u3056\u305D\u3046\uFF01"]})}),o("p",{className:"result-cheer",children:[U[n.chara],"\u3082 \u304A\u304A\u3088\u308D\u3053\u3073\uFF01"]}),o("p",{className:"result-score",children:[n.total,"\u3082\u3093\u3061\u3085\u3046 ",o("b",{children:[M,"\u3082\u3093"]})," \u305B\u3044\u304B\u3044\uFF01"]}),t("p",{className:"result-time-label",children:"\u304B\u304B\u3063\u305F \u3058\u304B\u3093"}),t("div",{className:"result-time",children:L($)}),g&&t("div",{className:"new-best",children:"\u3058\u3053\u30D9\u30B9\u30C8 \u3053\u3046\u3057\u3093\uFF01 \u304A\u3081\u3067\u3068\u3046\uFF01"})]}),t("button",{className:"again-btn",onClick:()=>a("title"),children:"\u3082\u3046\u3044\u3061\u3069 \u3042\u305D\u3076"})]})]})}var At=`
@import url('https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Kiwi+Maru:wght@400;500&family=M+PLUS+Rounded+1c:wght@500;700;800;900&display=swap');

/* ============ \u30C7\u30B6\u30A4\u30F3\u30B7\u30B9\u30C6\u30E0 v2 ============
   \u3044\u308D\u306E \u3084\u304F\u308F\u308A(1\u3057\u3087\u304F 1\u3084\u304F\u308F\u308A):
   --brand  : \u30A2\u30D7\u30EA\u306E\u30ED\u30B4\u3060\u3051
   --c/--soft: \u30EC\u30D9\u30EB\u306E\u3057\u308B\u3057(\u3069\u3053\u306B\u3044\u308B\u304B)= \u30EC\u30D9\u30EB\u30D0\u30FC\u30FB\u30C1\u30C3\u30D7\u30FB\u3057\u3093\u3061\u3087\u304F\u30D0\u30FC\u3060\u3051
   --action : \u304A\u3059 \u30DC\u30BF\u30F3\u3060\u3051(\u30AA\u30EC\u30F3\u30B8)
   --ok     : \u305B\u3044\u304B\u3044 \u3060\u3051(\u307F\u3069\u308A)
   --ng     : \u3075\u305B\u3044\u304B\u3044\u30FB\u3051\u3059\u30FB\u30AA\u30FC\u30D0\u30FC \u3060\u3051(\u3042\u304B)
   --gold   : \u3058\u3053\u30D9\u30B9\u30C8\u3053\u3046\u3057\u3093 \u3060\u3051
   \u305D\u308C\u3044\u304C\u3044\u306F \u3076\u3093\u3057\u3087\u304F(--ink/--sub)\u3068 \u305B\u3093(--line)
================================================ */

* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; margin: 0; padding: 0; }

.app {
  min-height: 100vh;
  font-family: 'M PLUS Rounded 1c', 'Hiragino Maru Gothic ProN', 'Yu Gothic', sans-serif;
  background: #fff;
  --ink: #453A3F;
  --sub: #95878D;
  --line: #ECE4E7;
  --panel: #F8F5F6;
  --brand: #E2607F;
  --action: #FF8A3D;
  --action-press: #D9731F;
  --ok: #2E9E6B;
  --ng: #E0454B;
  --gold: #A16A00;
  --gold-bg: #FFF3D6;
  --c: #FFB7C9; --soft: #FFE3EA; --deep: #453A3F;
  color: var(--ink);
  display: flex;
  justify-content: center;
  user-select: none;
}
.screen {
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  padding: 18px 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

@keyframes pop { 0% { transform: scale(.55); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
@keyframes hop { 0% { transform: translateY(0); } 40% { transform: translateY(-12px); } 100% { transform: translateY(0); } }
@keyframes shake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 50% { transform: translateX(4px); } 75% { transform: translateX(-3px); } }

/* ---- \u30BF\u30A4\u30C8\u30EB: \u3057\u3085\u3084\u304F\u306F \u30EC\u30D9\u30EB\u3048\u3089\u3073 ---- */
.title-screen { justify-content: flex-start; gap: 14px; padding-bottom: 32px; }
.title-head { display: flex; flex-direction: column; align-items: center; gap: 2px; margin-top: 2px; }
.app-title-sub { font-size: 12px; font-weight: 700; color: var(--sub); letter-spacing: 3px; }
.app-title { font-size: 26px; font-weight: 900; letter-spacing: 1px; color: var(--brand); line-height: 1.2; }
.title-accent { color: var(--brand); }
.app-sub { margin-top: 2px; font-size: 12px; font-weight: 700; color: var(--sub); }

.level-list, .course-list { display: flex; flex-direction: column; gap: 10px; width: 100%; margin-top: 4px; }
.level-btn, .course-btn {
  position: relative;
  display: flex; align-items: center; gap: 12px;
  width: 100%;
  border: 1.5px solid var(--line);
  border-radius: 18px;
  padding: 13px 16px 13px 22px;
  background: #fff;
  font-family: inherit;
  color: var(--ink);
  cursor: pointer;
  text-align: left;
}
.level-btn::before, .course-btn::before {
  content: '';
  position: absolute;
  left: 9px; top: 12px; bottom: 12px;
  width: 5px;
  border-radius: 99px;
  background: var(--c);
}
.level-btn:active, .course-btn:active { background: var(--panel); }
.level-text, .course-text { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; }
.level-name, .course-name { font-size: 18px; font-weight: 900; color: var(--ink); }
.course-num { font-size: 13px; margin-left: 4px; color: var(--sub); }
.level-sub, .course-sub { font-size: 12px; font-weight: 700; color: var(--sub); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.level-best, .course-best { font-size: 12px; font-weight: 700; color: var(--sub); }
.level-best b, .course-best b { color: var(--ink); font-variant-numeric: tabular-nums; }
.level-best i, .course-best i { font-style: normal; }
.level-go, .course-go { font-size: 15px; color: var(--sub); flex-shrink: 0; }

.reset-btn {
  margin-top: 6px;
  border: none;
  background: none;
  color: var(--ng);
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  padding: 8px;
  opacity: .75;
}
.reset-btn:active { opacity: 1; }

/* ---- \u30AB\u30A6\u30F3\u30C8\u30C0\u30A6\u30F3 ---- */
.count-screen { justify-content: center; gap: 14px; }
.count-chara { display: flex; justify-content: center; }
.count-cheer { font-size: 16px; font-weight: 900; color: var(--ink); }
.count-label {
  font-size: 13px; font-weight: 900; color: var(--ink);
  background: var(--soft);
  border-radius: 99px;
  padding: 4px 14px;
}
.count-num {
  font-size: 80px;
  font-weight: 900;
  color: var(--ink);
  animation: pop .35s;
  min-height: 104px;
  display: flex; align-items: center;
  font-variant-numeric: tabular-nums;
}
.count-num.go {
  font-size: clamp(34px, 12vw, 50px);
  white-space: nowrap;
  color: var(--action);
}

/* ---- \u30D7\u30EC\u30A4\u3058\u3087\u3046\u3076: \u3058\u3087\u3046\u307B\u3046\u306F \u3061\u3044\u3055\u304F \u3057\u305A\u304B\u306B ---- */
.play-screen { gap: 10px; }
.hud {
  width: 100%;
  display: flex; justify-content: space-between; align-items: center;
  font-size: 13px; font-weight: 700; color: var(--sub);
}
.hud-count b { font-size: 18px; font-weight: 900; color: var(--ink); font-variant-numeric: tabular-nums; }
.hud-right { display: flex; align-items: center; gap: 10px; }
.hud-time { font-variant-numeric: tabular-nums; color: var(--sub); }
.quit-btn {
  border: 1.5px solid var(--line);
  border-radius: 99px;
  padding: 5px 12px;
  background: #fff;
  color: var(--sub);
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}
.quit-btn:active { background: var(--panel); }

.progress {
  width: 100%; height: 6px;
  background: var(--line); border-radius: 99px;
  overflow: hidden;
}
.progress-bar { height: 100%; border-radius: 99px; background: var(--c); transition: width .3s; }

/* ---- \u304B\u304F\u306B\u3093\u30C0\u30A4\u30A2\u30ED\u30B0 ---- */
.quit-overlay {
  position: fixed; inset: 0;
  background: rgba(69,58,63,.4);
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
  z-index: 10;
}
.quit-box {
  background: #fff;
  border-radius: 22px;
  padding: 24px 20px;
  width: 100%;
  max-width: 320px;
  display: flex; flex-direction: column; align-items: center; gap: 12px;
  animation: pop .25s;
  text-align: center;
}
.quit-text { font-size: 17px; font-weight: 900; color: var(--ink); line-height: 1.6; }
.quit-text small { font-size: 12px; font-weight: 700; color: var(--sub); }
.quit-btns { display: flex; gap: 10px; width: 100%; margin-top: 4px; }
.quit-btns button {
  flex: 1;
  border: none;
  border-radius: 99px;
  padding: 13px 0;
  font-family: inherit;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
}
.quit-no { background: var(--action); color: #fff; box-shadow: 0 3px 0 var(--action-press); }
.quit-no:active { transform: translateY(2px); box-shadow: none; }
.quit-yes { background: #fff; border: 1.5px solid var(--ng); color: var(--ng); }
.quit-yes:active { background: #FBEBEC; }

/* ---- \u30AD\u30E3\u30E9\u3068 \u3075\u304D\u3060\u3057 ---- */
.talk-row { display: flex; align-items: center; gap: 8px; width: 100%; margin-top: 4px; }
.talk-chara { flex-shrink: 0; }
.talk-chara.hop { animation: hop .5s; }
.talk-chara.shake { animation: shake .5s; }
.bubble {
  position: relative;
  flex: 1;
  min-width: 0;
  background: var(--panel);
  border-radius: 16px;
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.6;
}
.bubble b { font-size: 20px; font-weight: 900; color: var(--ink); }
.bubble::before {
  content: '';
  position: absolute;
  left: -8px; top: 50%;
  transform: translateY(-50%);
  border: 8px solid transparent;
  border-right-color: var(--panel);
  border-left: 0;
}

/* ---- \u305B\u3044\u304B\u3044/\u3075\u305B\u3044\u304B\u3044(\u307F\u3069\u308A/\u3042\u304B \u3060\u3051) ---- */
.feedback {
  position: absolute; inset: 0;
  border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  z-index: 1;
  background: rgba(255,255,255,.6);
  animation: pop .25s;
  padding: 10px;
}
.feedback.ok { color: var(--ok); }
.feedback.ng { color: var(--ng); }
.fb-inner {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  flex-wrap: wrap;
  max-width: 100%;
  background: #fff;
  border: 2px solid currentColor;
  border-radius: 18px;
  padding: 12px 18px;
  font-size: 18px; font-weight: 900;
  line-height: 1.5;
  text-align: center;
}
.fb-mark { font-size: 24px; }

/* ---- \u3053\u3046\u3069\u3046\u30DC\u30BF\u30F3(\u30AA\u30EC\u30F3\u30B8=\u304A\u3059\u3068\u3053\u308D) ---- */
.ok-btn {
  flex: 1;
  border: none;
  border-radius: 18px;
  height: 60px;
  background: var(--action);
  color: #fff;
  font-family: inherit;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 2px;
  box-shadow: 0 3px 0 var(--action-press);
  cursor: pointer;
}
.ok-btn:active { transform: translateY(2px); box-shadow: none; }
.ok-btn:disabled { opacity: .45; }
.again-btn {
  border: none;
  border-radius: 99px;
  padding: 15px 44px;
  background: var(--action);
  color: #fff;
  font-family: inherit;
  font-size: 18px;
  font-weight: 900;
  box-shadow: 0 3px 0 var(--action-press);
  cursor: pointer;
}
.again-btn:active { transform: translateY(2px); box-shadow: none; }

/* ---- \u3059\u3046\u3058\u306B\u3085\u3046\u308A\u3087\u304F ---- */
.answer-row { display: flex; gap: 8px; width: 100%; }
.answer-box {
  flex: 1;
  min-width: 0;
  background: #fff;
  border-radius: 16px;
  border: 2px solid var(--line);
  min-height: 58px;
  display: flex; align-items: center; justify-content: center; gap: 3px;
  font-size: 30px; font-weight: 900;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
}
.answer-box small { font-size: 14px; font-weight: 900; margin-top: 9px; }
.placeholder { font-size: 14px; color: var(--sub); font-weight: 700; }
.side-btn {
  width: 58px; height: 58px;
  border: none; border-radius: 16px;
  font-size: 22px; font-weight: 900;
  font-family: inherit;
  cursor: pointer;
  flex-shrink: 0;
}
.side-btn.del { background: #fff; border: 1.5px solid var(--line); color: var(--sub); }
.side-btn.del:active { background: var(--panel); }
.side-btn.send { background: var(--action); color: #fff; box-shadow: 0 3px 0 var(--action-press); }
.side-btn.send:active { transform: translateY(2px); box-shadow: none; }
.side-btn.send:disabled { opacity: .45; }

.numpad {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: auto;
}
.key {
  height: clamp(48px, 6.6vh, 62px);
  border: 1.5px solid var(--line);
  border-radius: 16px;
  background: #fff;
  font-family: inherit;
  font-size: 26px;
  font-weight: 900;
  color: var(--ink);
  cursor: pointer;
  box-shadow: 0 2px 0 var(--line);
}
.key:active { background: var(--panel); transform: translateY(2px); box-shadow: none; }
.key.zero { grid-column: 2; }

/* ---- \u3051\u3063\u304B: \u307B\u3081 \u2192 \u304D\u308D\u304F \u2192 \u3053\u3046\u3069\u3046 ---- */
.result-screen { justify-content: center; gap: 20px; }
.result-panel, .result-card {
  position: relative;
  width: 100%;
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 24px;
  padding: 28px 20px 26px;
  text-align: center;
  animation: pop .3s;
}
.result-chara { display: flex; justify-content: center; }
.result-title { font-size: 21px; font-weight: 900; color: var(--ink); margin-top: 10px; line-height: 1.5; }
.result-cheer { margin-top: 4px; font-size: 13px; font-weight: 700; color: var(--sub); }
.result-score { margin-top: 12px; font-size: 16px; font-weight: 700; color: var(--ink); }
.result-score b { font-size: 23px; color: var(--ok); font-variant-numeric: tabular-nums; }
.result-time-label { margin-top: 14px; font-size: 13px; font-weight: 700; color: var(--sub); }
.result-time { font-size: 44px; font-weight: 900; color: var(--ink); font-variant-numeric: tabular-nums; }
.new-best {
  margin-top: 14px;
  display: inline-block;
  background: var(--gold-bg);
  border-radius: 99px;
  padding: 9px 18px;
  font-size: 15px; font-weight: 900;
  color: var(--gold);
}

.confetti { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.confetti span {
  position: absolute;
  top: -6%;
  left: calc(var(--i) * 4.3%);
  width: 8px; height: 14px;
  background: var(--cc);
  border-radius: 2px;
  opacity: .95;
  animation: fall 3.1s linear infinite;
  animation-delay: calc(var(--i) * .21s);
}
.confetti span:nth-child(3n) { width: 10px; height: 10px; animation-duration: 3.7s; }
.confetti span:nth-child(4n) { width: 6px; height: 18px; animation-duration: 2.7s; }
@keyframes fall {
  0%   { transform: translateY(-4vh) translateX(0)     rotateZ(0)      rotateX(0); }
  30%  { transform: translateY(30vh) translateX(14px)  rotateZ(160deg) rotateX(200deg); }
  60%  { transform: translateY(62vh) translateX(-12px) rotateZ(320deg) rotateX(430deg); }
  100% { transform: translateY(112vh) translateX(8px)  rotateZ(540deg) rotateX(720deg); }
}

.title-hero {
  width: min(78vw, 330px);
  height: auto;
  display: block;
  margin-bottom: 4px;
}

.home-link {
  align-self: flex-start;
  border: 1.5px solid var(--line);
  border-radius: 99px;
  padding: 7px 16px;
  background: #fff;
  color: var(--sub);
  font-size: 14px;
  text-decoration: none;
  font-family: 'Darumadrop One', 'Kiwi Maru', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
}
.home-link:active { background: var(--panel); }

/* \u307F\u3060\u3057\u306F \u3066\u304C\u304D\u304B\u3093\u306E \u3042\u308B Kiwi Maru */
.app-title, .app-title-sub, .level-name, .course-name, .mix-name,
.count-cheer, .result-title, .bubble {
  font-family: 'Kiwi Maru', 'M PLUS Rounded 1c', sans-serif;
  font-weight: 500;
}

/* \u30A2\u30D7\u30EA\u30BF\u30A4\u30C8\u30EB\u306F Darumadrop One */
.app-title {
  font-family: 'Darumadrop One', 'Kiwi Maru', sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
}

/* \u30E1\u30A4\u30F3\u30DC\u30BF\u30F3\u30FB\u3053\u3048\u304B\u3051\u30FB\u304A\u3044\u308F\u3044\u3082 Darumadrop One */
.ok-btn, .again-btn, .quit-btns .quit-no, .quit-btns .quit-yes, .quit-btn, .hint-btn, .redo-btn,
.count-num, .fb-inner, .result-title, .new-best, .reset-btn {
  font-family: 'Darumadrop One', 'Kiwi Maru', sans-serif;
  font-weight: 400;
  letter-spacing: 1.5px;
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}

.blocks-area {
  position: relative;
  width: 100%;
  min-height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
}
`;import{jsx as qt}from"react/jsx-runtime";Bt(document.getElementById("root")).render(qt(W,{}));
