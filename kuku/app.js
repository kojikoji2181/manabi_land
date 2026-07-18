import"react";import{createRoot as Ee}from"react-dom/client";import{useState as d,useEffect as $,useRef as E,useCallback as xe}from"react";import{Fragment as M,jsx as e,jsxs as o}from"react/jsx-runtime";var B="kuku-best-times",ee=[{color:"#FFB7C9",soft:"#FFE3EA",deep:"#E2607F"},{color:"#B9CFDE",soft:"#E9F1F7",deep:"#5B7E97"},{color:"#ABE0A2",soft:"#E5F6E0",deep:"#55A05C"},{color:"#CBBBF2",soft:"#EDE7FB",deep:"#7E5FC7"}],S={color:"#FFD9A0",soft:"#FFEFD8",deep:"#D98324"},te=["luna","makami","tarte","emma"],Z={luna:"\u30EB\u30CA",makami:"\u30DE\u30AB\u30DF",tarte:"\u30BF\u30EB\u30C8",emma:"\u30A8\u30DE"},U=t=>ee[(t-1)%4],be=t=>te[(t-1)%4],ge={luna:{normal:"/images/chara/luna_normal.webp",happy:"/images/chara/luna_happy.webp",sad:"/images/chara/luna_sad.webp"},makami:{normal:"/images/chara/makami_normal.webp",happy:"/images/chara/makami_happy.webp",sad:"/images/chara/makami_sad.webp"},tarte:{normal:"/images/chara/tarte_normal.webp",happy:"/images/chara/tarte_happy.webp",sad:"/images/chara/tarte_sad.webp"},emma:{normal:"/images/chara/emma_normal.webp",happy:"/images/chara/emma_happy.webp",sad:"/images/chara/emma_sad.webp"}};function D({chara:t,mood:r="normal",size:l=60}){let s=ge[t]||{},a=s[r]||s.normal||"";return a?e("img",{src:a,width:l,height:l,alt:"",draggable:!1,style:{display:"block",objectFit:"contain",pointerEvents:"none"}}):null}var V=(t,r)=>Math.floor(Math.random()*(r-t+1))+t;function he(t){if(t.type==="dan"){let s=Array.from({length:10},(a,c)=>c+1);if(t.mode==="rand")for(let a=s.length-1;a>0;a--){let c=Math.floor(Math.random()*(a+1));[s[a],s[c]]=[s[c],s[a]]}return s.map(a=>({a:t.dan,b:a,ans:t.dan*a}))}let r=[],l="";for(let s=0;s<20;s++){let a,c,p,u=0;do a=V(1,9),c=V(1,10),p=`${a}x${c}`,u++;while(p===l&&u<20);l=p,r.push({a,b:c,ans:a*c})}return r}var ve=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,"0")}`,I=t=>{let r=Math.floor(t/60),l=Math.floor(t%60);return r>0?`${r}\u3075\u3093${l}\u3073\u3087\u3046`:`${l}\u3073\u3087\u3046`},R=null;function ae(){if(!R){let t=window.AudioContext||window.webkitAudioContext;t&&(R=new t)}return R}function m(t,r,l,s="sine",a=.18){let c=ae();if(!c)return;let p=c.createOscillator(),u=c.createGain();p.type=s,p.frequency.value=t,u.gain.setValueAtTime(0,c.currentTime+r),u.gain.linearRampToValueAtTime(a,c.currentTime+r+.01),u.gain.exponentialRampToValueAtTime(.001,c.currentTime+r+l),p.connect(u).connect(c.destination),p.start(c.currentTime+r),p.stop(c.currentTime+r+l+.05)}var we=()=>{m(880,0,.09),m(1100,.1,.09),m(1320,.2,.14)},ke=()=>m(220,0,.3,"triangle",.1),ye=()=>m(660,0,.12),Ne=()=>{m(660,0,.1),m(880,.12,.2)},ze=()=>{[523,659,784,1047].forEach((t,r)=>m(t,r*.13,.15)),m(1319,.55,.4)};async function qe(){try{if(typeof window<"u"&&window.storage){let r=await window.storage.get(B);return r?JSON.parse(r.value):{}}let t=localStorage.getItem(B);return t?JSON.parse(t):{}}catch{return{}}}async function W(t){try{typeof window<"u"&&window.storage?await window.storage.set(B,JSON.stringify(t)):localStorage.setItem(B,JSON.stringify(t))}catch(r){console.error("save failed",r)}}function Ce(t){try{let r="gakushu-log-v1",l=localStorage.getItem(r),s=l?JSON.parse(l):[];for(s.push(t);s.length>500;)s.shift();localStorage.setItem(r,JSON.stringify(s))}catch{}}var Fe=()=>{let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`};function Y(){let[t,r]=d("title"),[l,s]=d({}),[a,c]=d(null),[p,u]=d(3),[k,ne]=d([]),[x,O]=d(0),[y,N]=d(""),[j,z]=d(0),[b,q]=d(null),[C,T]=d(0),[oe,X]=d(!1),[P,F]=d(!1),[re,_]=d(!1),w=E(0),v=E(null),g=E(!1),G=E(0);$(()=>{qe().then(s)},[]),$(()=>()=>clearInterval(v.current),[]);let K=(n,i)=>{L({type:"dan",dan:n,mode:i,key:`d${n}-${i}`,label:`${n}\u306E\u3060\u3093\u3000${i==="seq"?"\u3058\u3085\u3093\u3070\u3093":"\u30E9\u30F3\u30C0\u30E0"}`,palette:U(n),chara:be(n),total:10})},ie=()=>{L({type:"mix",key:"mix20",label:"\u30E9\u30F3\u30C0\u30E0\u3082\u3093\u3060\u3044 20\u3082\u3093",palette:S,chara:te[Math.floor(Math.random()*4)],total:20})},L=n=>{ae(),c(n),ne(he(n)),O(0),N(""),T(0),X(!1),q(null),F(!1),g.current=!1,u(3),r("countdown")},se=()=>{P||(clearInterval(v.current),G.current=Date.now(),F(!0))},le=()=>{w.current+=Date.now()-G.current,v.current=setInterval(()=>{z((Date.now()-w.current)/1e3)},100),F(!1)},ce=()=>{clearInterval(v.current),F(!1),q(null),g.current=!1,r("title")},pe=async()=>{s({}),await W({}),_(!1)};$(()=>{if(t!=="countdown")return;if(p>0){ye();let i=setTimeout(()=>u(h=>h-1),1e3);return()=>clearTimeout(i)}Ne();let n=setTimeout(()=>{w.current=Date.now(),z(0),v.current=setInterval(()=>{z((Date.now()-w.current)/1e3)},100),r("play")},800);return()=>clearTimeout(n)},[t,p]);let de=xe(async n=>{clearInterval(v.current);let i=Math.round((Date.now()-w.current)/1e3);z(i);let h=l[a.key],A=!1;if(h==null||i<h){A=!0;let Q={...l,[a.key]:i};s(Q),await W(Q)}X(A),T(n),Ce({d:Fe(),app:"kuku",correct:n,total:a.total,sec:i}),r("result"),setTimeout(ze,300)},[l,a]),ue=()=>{if(y===""||g.current)return;g.current=!0;let n=k[x],i=parseInt(y,10)===n.ans,h=C+(i?1:0);i?we():ke(),q({ok:i,ans:n.ans}),i&&T(h),setTimeout(()=>{q(null),N(""),g.current=!1,x+1>=a.total?de(h):O(A=>A+1)},i?650:1500)},J=n=>{g.current||N(i=>i.length>=2?i:i==="0"?String(n):i+n)},fe=()=>{g.current||N(n=>n.slice(0,-1))},me=b?b.ok?"happy":"sad":"normal",H=n=>l[n]!=null?I(l[n]):"\u304D\u308D\u304F\u306A\u3057",f=a?a.palette:ee[0];return o("div",{className:"app",children:[e("style",{children:Ae}),t==="title"&&o("div",{className:"screen title-screen",children:[typeof window<"u"&&!window.storage&&e("a",{className:"home-link",href:"../",children:"\u2039 \u30DB\u30FC\u30E0\u3078"}),o("div",{className:"title-card",children:[e("div",{className:"ring-hole"}),o("h1",{className:"app-title",children:["\u304F\u304F",e("span",{className:"title-accent",children:"\u30AB\u30FC\u30C9"})]}),e("p",{className:"app-sub",children:"\u3069\u306E \u3060\u3093\u306B \u3061\u3087\u3046\u305B\u3093\u3059\u308B\uFF1F"})]}),e("div",{className:"dan-list",children:Array.from({length:9},(n,i)=>i+1).map(n=>{let i=U(n);return o("div",{className:"dan-row",style:{"--c":i.color,"--soft":i.soft,"--deep":i.deep},children:[o("span",{className:"dan-circle",children:[n,e("small",{children:"\u306E\u3060\u3093"})]}),o("button",{className:"mode-btn",onClick:()=>K(n,"seq"),children:["\u3058\u3085\u3093\u3070\u3093",e("small",{children:H(`d${n}-seq`)})]}),o("button",{className:"mode-btn",onClick:()=>K(n,"rand"),children:["\u30E9\u30F3\u30C0\u30E0",e("small",{children:H(`d${n}-rand`)})]})]},n)})}),o("button",{className:"mix-btn",style:{"--c":S.color,"--soft":S.soft,"--deep":S.deep},onClick:ie,children:[o("span",{className:"mix-text",children:[e("span",{className:"mix-name",children:"\u30E9\u30F3\u30C0\u30E0\u3082\u3093\u3060\u3044\u306B \u3061\u3087\u3046\u305B\u3093\uFF01"}),o("span",{className:"mix-best",children:["\u3058\u3053\u30D9\u30B9\u30C8\uFF1A",l.mix20!=null?e("b",{children:I(l.mix20)}):e("i",{children:"\u307E\u3060 \u304D\u308D\u304F\u304C \u306A\u3044\u3088"})]})]}),e("span",{className:"course-go",children:"\u25B6"})]}),e("button",{className:"reset-btn",onClick:()=>_(!0),children:"\u304D\u308D\u304F\u3092 \u305C\u3093\u3076 \u3051\u3059"}),re&&e("div",{className:"quit-overlay",children:o("div",{className:"quit-box",children:[o("p",{className:"quit-text",children:["\u3058\u3053\u30D9\u30B9\u30C8\u306E \u304D\u308D\u304F\u3092",e("br",{}),"\u305C\u3093\u3076 \u3051\u3057\u3066\u3082 \u3044\u3044\uFF1F",e("br",{}),e("small",{children:"\u3044\u3061\u3069 \u3051\u3059\u3068 \u3082\u3068\u306B \u3082\u3069\u305B\u306A\u3044\u3088"})]}),o("div",{className:"quit-btns",children:[e("button",{className:"quit-no",onClick:()=>_(!1),children:"\u3051\u3055\u306A\u3044"}),e("button",{className:"quit-yes",onClick:pe,children:"\u3051\u3059"})]})]})})]}),t==="countdown"&&a&&o("div",{className:"screen count-screen",style:{"--c":f.color,"--soft":f.soft,"--deep":f.deep},children:[e("div",{className:"count-chara",children:e(D,{chara:a.chara,mood:"normal",size:120})}),o("p",{className:"count-cheer",children:[Z[a.chara],"\u3068 \u3044\u3063\u3057\u3087\u306B \u304C\u3093\u3070\u308D\u3046\uFF01"]}),e("p",{className:"count-label",children:a.label}),e("div",{className:`count-num ${p===0?"go":""}`,children:p>0?p:"\u30B9\u30BF\u30FC\u30C8\uFF01"},p)]}),t==="play"&&a&&k[x]&&o("div",{className:"screen play-screen",style:{"--c":f.color,"--soft":f.soft,"--deep":f.deep},children:[o("div",{className:"hud",children:[o("span",{className:"hud-count",children:[e("b",{children:x+1})," / ",a.total," \u3082\u3093"]}),o("span",{className:"hud-right",children:[e("span",{className:"hud-time",children:ve(j)}),e("button",{className:"quit-btn",onClick:se,children:"\u3084\u3081\u308B"})]})]}),e("div",{className:"progress",children:e("div",{className:"progress-bar",style:{width:`${(x+1)/a.total*100}%`}})}),o("div",{className:"qcard-wrap",children:[e("div",{className:`chara-peek ${b?b.ok?"hop":"shake":""}`,children:e(D,{chara:a.chara,mood:me,size:80})}),o("div",{className:"qcard",children:[e("div",{className:"ring-hole"}),o("div",{className:"equation",children:[k[x].a," \xD7 ",k[x].b," \uFF1D ",e("span",{className:"q-mark",children:"?"})]}),b&&e("div",{className:`feedback ${b.ok?"ok":"ng"}`,children:e("span",{className:"fb-inner",children:b.ok?o(M,{children:[e("span",{className:"fb-mark",children:"\u2B55"})," \u305B\u3044\u304B\u3044\uFF01"]}):o(M,{children:[e("span",{className:"fb-mark",children:"\u274C"})," \u3046\u301C\u3093\u2026 \u3053\u305F\u3048\u306F ",b.ans," \u3060\u3088"]})})})]},x)]}),o("div",{className:"answer-row",children:[e("div",{className:"answer-box",children:y||e("span",{className:"placeholder",children:"\u3053\u305F\u3048"})}),e("button",{className:"side-btn del",onClick:fe,"aria-label":"\u3072\u3068\u3082\u3058\u3051\u3059",children:"\u2715"}),e("button",{className:"side-btn send",onClick:ue,disabled:y==="","aria-label":"\u304A\u304F\u308B",children:"\uFF1E"})]}),o("div",{className:"numpad",children:[[1,2,3,4,5,6,7,8,9].map(n=>e("button",{className:"key",onClick:()=>J(n),children:n},n)),e("button",{className:"key zero",onClick:()=>J(0),children:"0"})]}),P&&e("div",{className:"quit-overlay",children:o("div",{className:"quit-box",children:[e(D,{chara:a.chara,mood:"sad",size:84}),o("p",{className:"quit-text",children:["\u307B\u3093\u3068\u3046\u306B \u3084\u3081\u308B\uFF1F",e("br",{}),e("small",{children:"\u3068\u3061\u3085\u3046\u3067 \u3084\u3081\u308B\u3068 \u304D\u308D\u304F\u306F \u306E\u3053\u3089\u306A\u3044\u3088"})]}),o("div",{className:"quit-btns",children:[e("button",{className:"quit-no",onClick:le,children:"\u3064\u3065\u3051\u308B"}),e("button",{className:"quit-yes",onClick:ce,children:"\u3084\u3081\u308B"})]})]})})]}),t==="result"&&a&&o("div",{className:"screen result-screen",style:{"--c":f.color,"--soft":f.soft,"--deep":f.deep},children:[C===a.total&&e("div",{className:"confetti",children:Array.from({length:24}).map((n,i)=>e("span",{style:{"--i":i,"--cc":["#F48BB0","#8FC7E8","#8FD6A0","#B9A5E8","#FFD97A","#F6AC6B"][i%6]}},i))}),o("div",{className:"result-card",children:[e("div",{className:"ring-hole"}),e("div",{className:"result-chara",children:e(D,{chara:a.chara,mood:"happy",size:120})}),e("h2",{className:"result-title",children:C===a.total?o(M,{children:["\u305C\u3093\u3076 \u305B\u3044\u304B\u3044\uFF01",e("br",{}),"\u3059\u3054\u30FC\u3044\uFF01"]}):o(M,{children:["\u3055\u3044\u3054\u307E\u3067 \u304C\u3093\u3070\u3063\u305F\u306D\uFF01",e("br",{}),"\u3064\u304E\u306F \u307E\u3093\u3066\u3093\u3092 \u3081\u3056\u305D\u3046\uFF01"]})}),o("p",{className:"result-cheer",children:[Z[a.chara],"\u3082 \u304A\u304A\u3088\u308D\u3053\u3073\uFF01"]}),o("p",{className:"result-score",children:[a.total,"\u3082\u3093\u3061\u3085\u3046 ",o("b",{children:[C,"\u3082\u3093"]})," \u305B\u3044\u304B\u3044\uFF01"]}),e("p",{className:"result-time-label",children:"\u304B\u304B\u3063\u305F \u3058\u304B\u3093"}),e("div",{className:"result-time",children:I(j)}),oe&&e("div",{className:"new-best",children:"\u3058\u3053\u30D9\u30B9\u30C8 \u3053\u3046\u3057\u3093\uFF01 \u304A\u3081\u3067\u3068\u3046\uFF01"})]}),e("button",{className:"again-btn",onClick:()=>r("title"),children:"\u3082\u3046\u3044\u3061\u3069 \u3042\u305D\u3076"})]})]})}var Ae=`
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

/* ---- \u30AB\u30FC\u30C9\u30A2\u30D7\u30EA\u3088\u3046 ---- */
.title-card { position: relative; background: none; box-shadow: none; padding: 4px 0 0; transform: none; text-align: center; }
.title-card .ring-hole { display: none; }
.ring-hole {
  position: absolute;
  top: 12px; left: 16px;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: #fff;
  box-shadow: inset 0 2px 4px rgba(69,58,63,.2), 0 0 0 1.5px var(--line);
}
.ring-hole::after {
  content: '';
  position: absolute;
  top: -13px; left: 3px;
  width: 14px; height: 20px;
  border: 3.5px solid var(--c);
  border-bottom: none;
  border-radius: 9px 9px 0 0;
}
.course-chara { display: flex; flex-direction: column; align-items: center; gap: 2px; flex-shrink: 0; }
.chara-circle {
  background: #fff;
  border-radius: 50%;
  width: 52px; height: 52px;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid var(--c);
  overflow: hidden;
}
.chara-circle svg, .chara-circle img { margin-top: 8px; }
.chara-name { font-size: 10px; font-weight: 900; color: var(--sub); }

.qcard-wrap { position: relative; width: 100%; margin-top: 48px; }
.chara-peek { position: absolute; top: -54px; right: 14px; z-index: 2; }
.chara-peek.hop { animation: hop .5s; }
.chara-peek.shake { animation: shake .5s; }
.qcard {
  position: relative;
  width: 100%;
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 20px;
  padding: 44px 16px 36px;
  text-align: center;
}
.equation {
  font-size: clamp(40px, 12vw, 54px);
  font-weight: 900;
  color: var(--ink);
  letter-spacing: 2px;
  font-variant-numeric: tabular-nums;
}
.q-mark { color: var(--action); }
.feedback.ok, .feedback.ng { border-radius: 20px; }

.mix-btn {
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
.mix-btn::before {
  content: '';
  position: absolute;
  left: 9px; top: 12px; bottom: 12px;
  width: 5px;
  border-radius: 99px;
  background: var(--c);
}
.mix-btn:active { background: var(--panel); }
.mix-text { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; }
.mix-name { font-size: 16px; font-weight: 900; color: var(--ink); }
.mix-best { font-size: 12px; font-weight: 700; color: var(--sub); }
.mix-best b { color: var(--ink); font-variant-numeric: tabular-nums; }
.mix-best i { font-style: normal; }

.dan-list { display: flex; flex-direction: column; gap: 8px; width: 100%; margin-top: 4px; }
.dan-row {
  display: flex; align-items: center; gap: 10px;
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 16px;
  padding: 8px 10px;
}
.dan-circle {
  flex-shrink: 0;
  width: 48px; height: 48px;
  background: var(--soft);
  border-radius: 50%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  font-size: 20px; font-weight: 900; color: var(--ink);
  line-height: 1;
}
.dan-circle small { font-size: 8.5px; font-weight: 700; margin-top: 2px; color: var(--sub); }
.mode-btn {
  flex: 1;
  min-width: 0;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  padding: 7px 4px;
  background: #fff;
  font-family: inherit;
  font-size: 13px;
  font-weight: 900;
  color: var(--ink);
  cursor: pointer;
  display: flex; flex-direction: column; align-items: center; gap: 2px;
}
.mode-btn:active { background: var(--panel); }
.mode-btn small { font-size: 10px; font-weight: 700; color: var(--sub); font-variant-numeric: tabular-nums; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; }
`;import{jsx as Se}from"react/jsx-runtime";Ee(document.getElementById("root")).render(Se(Y,{}));
