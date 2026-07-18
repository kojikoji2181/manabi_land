import"react";import{createRoot as ue}from"react-dom/client";import{useState as x,useEffect as y,useRef as A}from"react";import{Fragment as F,jsx as e,jsxs as o}from"react/jsx-runtime";var z=[{id:"keisan",name:"\u3051\u3044\u3055\u3093\u30AB\u30FC\u30C9",desc:"\u305F\u3057\u3056\u3093\u30FB\u3072\u304D\u3056\u3093",color:"#FFB7C9",soft:"#FFE9EF",link:"./keisan/"},{id:"kuku",name:"\u304F\u304F\u30AB\u30FC\u30C9",desc:"\u304B\u3051\u3056\u3093(\u304F\u304F)",color:"#B9CFDE",soft:"#EAF2F8",link:"./kuku/"},{id:"tokei",name:"\u30DF\u30CB\u3068\u3051\u3044",desc:"\u3068\u3051\u3044\u306E \u3088\u307F\u304B\u305F",color:"#ABE0A2",soft:"#E9F7E3",link:"./tokei/"},{id:"okane",name:"\u304A\u304B\u306D\u30DE\u30B9\u30BF\u30FC",desc:"\u304A\u304B\u3044\u3082\u306E\u3068 \u304A\u3064\u308A",color:"#CBBBF2",soft:"#F0EBFB",link:"./okane/"},{id:"tsumiki",name:"\u3064\u307F\u304D \u306A\u3093\u3053",desc:"\u304B\u304F\u308C\u305F \u3064\u307F\u304D\u3092 \u304B\u305E\u3048\u308B",color:"#F0D98C",soft:"#FBF4DC",link:"./tsumiki/"},{id:"todofuken",name:"\u3068\u3069\u3046\u3075\u3051\u3093",desc:"\u304B\u305F\u3061\u3067 \u3053\u305F\u3048\u308B \u3061\u305A\u30AF\u30A4\u30BA",color:"#8FD0C6",soft:"#E6F6F3",link:"./todofuken/"},{id:"kokki",name:"\u305B\u304B\u3044\u306E \u3053\u3063\u304D",desc:"\u3053\u3063\u304D\u3067 \u3053\u305F\u3048\u308B \u304F\u306B\u3042\u3066",color:"#C9B8EC",soft:"#EFE9FA",link:"./kokki/"}],C=3,B={luna:{normal:"/images/chara/luna_normal.webp",happy:"/images/chara/luna_happy.webp",sad:"/images/chara/luna_sad.webp"},makami:{normal:"/images/chara/makami_normal.webp",happy:"/images/chara/makami_happy.webp",sad:"/images/chara/makami_sad.webp"},tarte:{normal:"/images/chara/tarte_normal.webp",happy:"/images/chara/tarte_happy.webp",sad:"/images/chara/tarte_sad.webp"},emma:{normal:"/images/chara/emma_normal.webp",happy:"/images/chara/emma_happy.webp",sad:"/images/chara/emma_sad.webp"}},V={luna:"/images/teacher/luna.webp",makami:"/images/teacher/makami.webp",tarte:"/images/teacher/tarte.webp",emma:"/images/teacher/emma.webp"},R={luna:"/images/stamp/luna.webp",makami:"/images/stamp/makami.webp",tarte:"/images/stamp/tarte.webp",emma:"/images/stamp/emma.webp"},W="/images/logo.webp",O=["luna","makami","tarte","emma"],q={luna:"\u30EB\u30CA",makami:"\u30DE\u30AB\u30DF",tarte:"\u30BF\u30EB\u30C8",emma:"\u30A8\u30DE"};function P({chara:t,mood:a="normal",size:r=60}){let n=B[t]||{},i=n[a]||n.normal||"";return i?e("img",{src:i,width:r,height:r,alt:"",draggable:!1,style:{display:"block",objectFit:"contain",pointerEvents:"none"}}):null}var X=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,K=()=>X(new Date),Q=["\u306B\u3061","\u3052\u3064","\u304B","\u3059\u3044","\u3082\u304F","\u304D\u3093","\u3069"];function Z(t,a,r){let n=parseInt(t.replace(/-/g,""),10)%2147483646+1,i=Array.from({length:a},(p,b)=>b),c=[];for(let p=0;p<r;p++)n=n*48271%2147483647,c.push(i.splice(n%i.length,1)[0]);return c}var ee=t=>{let[a,r,n]=t.split("-").map(Number),i=Math.floor(Date.UTC(a,r-1,n)/864e5);return O[(i%4+4)%4]},ae=t=>Z(t,z.length,C).map(a=>z[a]),S=null;function H(){if(!S){let t=window.AudioContext||window.webkitAudioContext;t&&(S=new t)}return S}function N(t,a,r,n="sine",i=.18){let c=H();if(!c)return;let p=c.createOscillator(),b=c.createGain();p.type=n,p.frequency.value=t,b.gain.setValueAtTime(0,c.currentTime+a),b.gain.linearRampToValueAtTime(i,c.currentTime+a+.01),b.gain.exponentialRampToValueAtTime(.001,c.currentTime+a+r),p.connect(b).connect(c.destination),p.start(c.currentTime+a),p.stop(c.currentTime+a+r+.05)}var te=()=>N(900,0,.06,"triangle",.1);var ne=()=>{N(880,0,.08),N(1175,.09,.16)},D=()=>{[659,784,988,1319].forEach((t,a)=>N(t,a*.12,.14))},oe=()=>{N(880,0,.05,"square",.12),N(440,.05,.08,"square",.08)},re=()=>{N(523,0,.06,"square",.12),N(1047,.06,.1,"triangle",.12)};async function I(t){try{if(typeof window<"u"&&window.storage){let r=await window.storage.get(t);return r?JSON.parse(r.value):null}let a=localStorage.getItem(t);return a?JSON.parse(a):null}catch{return null}}async function ie(t,a){try{typeof window<"u"&&window.storage?await window.storage.set(t,JSON.stringify(a)):localStorage.setItem(t,JSON.stringify(a))}catch{}}function se(){try{let t=localStorage.getItem("gakushu-log-v1");return t?JSON.parse(t):[]}catch{return[]}}var le="manabi-done-v1",$="manabi-stamps-v1",E=[{id:"memory",name:"\u3048\u3042\u308F\u305B",sub:"\u304A\u306A\u3058 \u3048\u3092 2\u307E\u3044 \u307F\u3064\u3051\u3066\u306D"},{id:"mole",name:"\u3082\u3050\u3089\u305F\u305F\u304D",sub:"\u3067\u3066\u304D\u305F \u3053\u3092 \u30BF\u30C3\u30D7\uFF0130\u3073\u3087\u3046\u3067 \u306A\u3093\u304B\u3044\uFF1F"},{id:"balloon",name:"\u3075\u3046\u305B\u3093\u308F\u308A",sub:"\u3068\u3093\u3067\u3044\u304F \u307E\u3048\u306B \u3075\u3046\u305B\u3093\u3092 \u308F\u308D\u3046\uFF01"}];function j(t){let a=[...t];for(let r=a.length-1;r>0;r--){let n=Math.floor(Math.random()*(r+1));[a[r],a[n]]=[a[n],a[r]]}return a}function G(){let t=[];O.forEach(r=>["normal","happy","sad"].forEach(n=>{B[r]?.[n]&&t.push(B[r][n])}));let a=j(t).slice(0,6);return j([...a,...a]).map((r,n)=>({id:n,img:r,matched:!1}))}function ce(){let[t,a]=x(()=>G()),[r,n]=x([]),[i,c]=x(0),p=A(!1),b=m=>{if(p.current||t[m].matched||r.includes(m))return;te();let u=[...r,m];if(n(u),u.length===2){c(g=>g+1),p.current=!0;let[l,s]=u;t[l].img===t[s].img?setTimeout(()=>{a(g=>g.map((h,d)=>d===l||d===s?{...h,matched:!0}:h)),n([]),p.current=!1,ne()},380):setTimeout(()=>{n([]),p.current=!1},850)}},f=t.every(m=>m.matched);return y(()=>{f&&D()},[f]),o(F,{children:[o("p",{className:"game-score",children:["\u3081\u304F\u3063\u305F \u304B\u3044\u3059\u3046 ",e("b",{children:i})]}),o("div",{className:"memory-wrap",children:[e("div",{className:"memory-grid",children:t.map((m,u)=>{let l=m.matched||r.includes(u);return e("button",{className:`mcard ${l?"up":""} ${m.matched?"matched":""}`,onClick:()=>b(u),disabled:m.matched,children:l?e("img",{src:m.img,alt:"",draggable:!1}):e("span",{className:"mcard-back",children:"\uFF1F"})},m.id)})}),f&&o("div",{className:"game-clear in-field",children:["\u30AF\u30EA\u30A2\uFF01 ",i,"\u304B\u3044\u3067 \u305D\u308D\u3048\u3089\u308C\u305F\u3088\uFF01",e("button",{className:"again-btn",onClick:()=>{a(G()),n([]),c(0)},children:"\u3082\u3046\u3044\u3061\u3069"})]})]})]})}function pe(){let[t,a]=x(0),[r,n]=x(30),[i,c]=x(!0),[p,b]=x(null),f=A(null),m=A(!0),u=A(null);m.current=i;let l=v=>{f.current=v,b(v)},s=(v,k)=>{clearTimeout(u.current),u.current=setTimeout(v,k)},g=()=>{m.current&&(l({hole:Math.floor(Math.random()*9),chara:O[Math.floor(Math.random()*4)],hit:!1}),s(h,900))},h=()=>{m.current&&(l(null),s(g,230))};y(()=>{if(!i)return;let v=setInterval(()=>n(k=>Math.max(0,k-1)),1e3);return()=>clearInterval(v)},[i]),y(()=>{r===0&&(c(!1),l(null),clearTimeout(u.current),D())},[r]),y(()=>(i&&g(),()=>clearTimeout(u.current)),[i]);let d=v=>{let k=f.current;!m.current||!k||k.hole!==v||k.hit||(re(),a(M=>M+1),l({...k,hit:!0}),s(h,480))},w=()=>{a(0),n(30),l(null),c(!0)};return o(F,{children:[o("p",{className:"game-score",children:["\u30B9\u30B3\u30A2 ",e("b",{children:t}),"\u3000\u306E\u3053\u308A ",e("b",{children:r}),"\u3073\u3087\u3046"]}),e("div",{className:"mole-grid",children:Array.from({length:9},(v,k)=>e("button",{className:"hole",onClick:()=>d(k),children:p&&p.hole===k&&e("span",{className:`mole ${p.hit?"hit":""}`,children:e(P,{chara:p.chara,mood:p.hit?"happy":"normal",size:58})})},k))}),!i&&r===0&&o("div",{className:"game-clear",children:["\u304A\u3057\u307E\u3044\uFF01 \u30B9\u30B3\u30A2 ",t,"\u3066\u3093\uFF01",e("button",{className:"again-btn",onClick:w,children:"\u3082\u3046\u3044\u3061\u3069"})]})]})}var Y=["#F48BB0","#8FC7E8","#8FD6A0","#B9A5E8","#FFD97A","#F6AC6B"];function de(){let[t,a]=x(0),[r,n]=x(30),[i,c]=x(!0),[p,b]=x([]);y(()=>{if(!i)return;let l=setInterval(()=>n(s=>Math.max(0,s-1)),1e3);return()=>clearInterval(l)},[i]),y(()=>{r===0&&(c(!1),b([]),D())},[r]),y(()=>{if(!i)return;let l=setInterval(()=>{b(s=>[...s.slice(-14),{id:Math.random(),x:4+Math.random()*76,c:Y[Math.floor(Math.random()*Y.length)],dur:3+Math.random()*1.8}])},550);return()=>clearInterval(l)},[i]);let f=l=>{i&&(oe(),a(s=>s+1),b(s=>s.filter(g=>g.id!==l)))},m=l=>b(s=>s.filter(g=>g.id!==l)),u=()=>{a(0),n(30),b([]),c(!0)};return o(F,{children:[o("p",{className:"game-score",children:["\u308F\u3063\u305F \u304B\u305A ",e("b",{children:t}),"\u3000\u306E\u3053\u308A ",e("b",{children:r}),"\u3073\u3087\u3046"]}),o("div",{className:"balloon-field",children:[p.map(l=>e("button",{className:"balloon",style:{left:`${l.x}%`,"--dur":`${l.dur}s`,background:l.c},onClick:()=>f(l.id),onAnimationEnd:()=>m(l.id)},l.id)),!i&&r===0&&o("div",{className:"game-clear in-field",children:["\u304A\u3057\u307E\u3044\uFF01 ",t,"\u3053 \u308F\u308C\u305F\u3088\uFF01",e("button",{className:"again-btn",onClick:u,children:"\u3082\u3046\u3044\u3061\u3069"})]})]})]})}function me({onBack:t}){let[a,r]=x(()=>E[Math.floor(Math.random()*E.length)].id),n=E.find(c=>c.id===a);return o("div",{className:"screen game-screen",children:[o("div",{className:"hud",children:[e("button",{className:"back-btn",onClick:t,children:"\u2039 \u3082\u3069\u308B"}),e("button",{className:"shuffle-btn",onClick:()=>{H(),r(c=>{let p;do p=E[Math.floor(Math.random()*E.length)].id;while(p===c);return p})},children:"\u3061\u304C\u3046 \u30B2\u30FC\u30E0\u306B \u3059\u308B"})]}),e("p",{className:"game-title",children:n.name}),e("p",{className:"game-sub",children:n.sub}),a==="memory"&&e(ce,{},a),a==="mole"&&e(pe,{},a),a==="balloon"&&e(de,{},a)]})}function fe({stamps:t,onBack:a}){let r=new Date,[n,i]=x({y:r.getFullYear(),m:r.getMonth()}),c=new Date(n.y,n.m,1),p=new Date(n.y,n.m+1,0).getDate(),b=c.getDay(),f=K(),m=[];for(let s=0;s<b;s++)m.push(null);for(let s=1;s<=p;s++)m.push(s);let u=s=>{let g=n.m+s,h=n.y;g<0&&(g=11,h--),g>11&&(g=0,h++),i({y:h,m:g})},l=Object.keys(t).filter(s=>s.startsWith(`${n.y}-${String(n.m+1).padStart(2,"0")}`)).length;return o("div",{className:"screen cal-screen",children:[o("div",{className:"hud",children:[e("button",{className:"back-btn",onClick:a,children:"\u2039 \u3082\u3069\u308B"}),o("span",{className:"hud-moves",children:["\u3053\u3093\u3052\u3064 ",e("b",{children:l}),"\u3053"]})]}),o("div",{className:"cal-head",children:[e("button",{className:"cal-nav",onClick:()=>u(-1),children:"\u2039"}),o("span",{className:"cal-title",children:[n.y,"\u306D\u3093 ",n.m+1,"\u304C\u3064"]}),e("button",{className:"cal-nav",onClick:()=>u(1),children:"\u203A"})]}),o("div",{className:"cal-grid",children:[["\u306B\u3061","\u3052\u3064","\u304B","\u3059\u3044","\u3082\u304F","\u304D\u3093","\u3069"].map((s,g)=>e("span",{className:`cal-dow ${g===0?"sun":""}`,children:s},s)),m.map((s,g)=>{if(s===null)return e("span",{},`e${g}`);let h=`${n.y}-${String(n.m+1).padStart(2,"0")}-${String(s).padStart(2,"0")}`,d=t[h];return o("span",{className:`cal-cell ${h===f?"today":""}`,children:[e("span",{className:"cal-day",children:s}),d?e("span",{className:"cal-stamp",children:e("img",{src:R[d]||R.luna,width:27,height:27,alt:"\u305F\u3063\u305B\u3044",draggable:!1})}):e("span",{className:"cal-empty"})]},h)})]}),e("p",{className:"cal-note",children:"\u304C\u304F\u3057\u3085\u3046\u3092 \u305C\u3093\u3076 \u304A\u3048\u305F \u3072\u306B \u30B9\u30BF\u30F3\u30D7\u304C \u3064\u304F\u3088"})]})}function T(){let[t,a]=x("home"),[r,n]=x({}),[i,c]=x({}),[p,b]=x(!1),f=K(),m=ae(f),u=ee(f),l=new Date;y(()=>{let d=!0,w=async()=>{let M=await I(le)||{},J=await I($)||{},U=se(),_={...M[f]||{}};U.forEach(L=>{L.d===f&&(_[L.app]=!0)}),d&&(n({...M,[f]:_}),c(J))};w();let v=()=>w(),k=()=>{document.visibilityState==="visible"&&w()};return window.addEventListener("pageshow",v),window.addEventListener("focus",v),document.addEventListener("visibilitychange",k),()=>{d=!1,window.removeEventListener("pageshow",v),window.removeEventListener("focus",v),document.removeEventListener("visibilitychange",k)}},[f]);let s=r[f]||{},g=m.filter(d=>s[d.id]).length,h=g===C;return y(()=>{if(!h||i[f])return;let d={...i,[f]:u};c(d),ie($,d),b(!0),D()},[h,i,f,u]),o("div",{className:"app",children:[e("style",{children:ge}),t==="home"&&o("div",{className:"screen home-screen",children:[o("header",{className:"home-head",children:[e("img",{src:W,className:"home-logo-img",alt:"\u307E\u306A\u3073\u30E9\u30F3\u30C9",draggable:!1}),o("span",{className:"home-date",children:[l.getMonth()+1,"\u304C\u3064",l.getDate(),"\u306B\u3061\uFF08",Q[l.getDay()],"\uFF09"]})]}),o("div",{className:"talk-row",children:[e("div",{className:"talk-chara",children:e("img",{src:V[u],width:84,height:84,alt:"",draggable:!1,className:"teacher-img"})}),e("div",{className:"bubble",children:h?o(F,{children:["\u304D\u3087\u3046\u306E \u304C\u304F\u3057\u3085\u3046 \u305C\u3093\u3076 \u3067\u304D\u305F\u306D\uFF01",e("b",{children:"\u3059\u3054\u3044\uFF01"})]}):o(F,{children:["\u304D\u3087\u3046\u306F \u3053\u306E ",o("b",{children:[C,"\u3064"]}),"\u3092 \u304C\u3093\u3070\u308D\u3046\uFF01\u3055\u3044\u3054\u307E\u3067 \u3042\u305D\u3076\u3068 \u307E\u308B\u304C \u3064\u304F\u3088"]})})]}),o("div",{className:"task-board",children:[e("p",{className:"board-title",children:"\u304D\u3087\u3046\u306E \u304C\u304F\u3057\u3085\u3046"}),e("div",{className:"task-list",children:m.map(d=>{let w=!!s[d.id];return o("div",{className:`task-row ${w?"done":""}`,style:{"--c":d.color},children:[o("a",{className:"task-main",href:d.link,children:[e("span",{className:"task-name",children:d.name}),o("span",{className:"task-desc",children:[d.desc,"\u30FB1\u304B\u3044 \u3042\u305D\u3076"]})]}),e("span",{className:`task-check ${w?"on":""}`,"aria-label":w?"\u3067\u304D\u305F":"\u307E\u3060",children:w?"\u2B55":""})]},d.id)})})]}),o("p",{className:"task-progress",children:["\u304D\u3087\u3046\u306E \u305F\u3063\u305B\u3044 ",e("b",{children:g})," / ",C]}),p&&o("div",{className:"stamp-banner",children:["\u30AB\u30EC\u30F3\u30C0\u30FC\u306B ",q[u],"\u306E \u30B9\u30BF\u30F3\u30D7\u3092 \u304A\u3057\u305F\u3088\uFF01"]}),o("div",{className:"home-btns",children:[o("button",{className:"cal-btn",onClick:()=>a("calendar"),children:[o("svg",{className:"btn-ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e("rect",{x:"3.5",y:"5",width:"17",height:"15.5",rx:"4"}),e("path",{d:"M3.5 10.2h17"}),e("path",{d:"M8 2.8v3.6M16 2.8v3.6"})]}),"\u30AB\u30EC\u30F3\u30C0\u30FC"]}),o("button",{className:"reward-btn",onClick:()=>a("reward"),disabled:!h&&!i[f],children:[o("svg",{className:"btn-ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e("rect",{x:"4",y:"9.6",width:"16",height:"10.8",rx:"2.6"}),e("path",{d:"M12 9.6v10.8"}),e("path",{d:"M12 9.4c-2.9 0-5.1-1.3-4.3-3.2.7-1.8 3.3-1 4.3 1.2 1-2.2 3.6-3 4.3-1.2.8 1.9-1.4 3.2-4.3 3.2z"})]}),"\u3054\u307B\u3046\u3073\u30B2\u30FC\u30E0"]})]}),!h&&!i[f]&&e("p",{className:"reward-note",children:"\u304D\u3087\u3046\u306E \u304C\u304F\u3057\u3085\u3046\u3092 \u304A\u3048\u308B\u3068 \u3054\u307B\u3046\u3073\u30B2\u30FC\u30E0\u304C \u3042\u305D\u3079\u308B\u3088"}),o("div",{className:"all-apps",children:[e("p",{className:"all-apps-label",children:"\u305C\u3093\u3076\u306E \u30A2\u30D7\u30EA"}),e("div",{className:"banner-list",children:z.map(d=>o("a",{className:"app-banner",style:{"--c":d.color,"--bsoft":d.soft},href:d.link,children:[o("span",{className:"banner-text",children:[e("span",{className:"banner-name",children:d.name}),e("span",{className:"banner-desc",children:d.desc})]}),o("span",{className:"banner-play",children:[e("span",{className:"play-tri"}),"\u3042\u305D\u3076"]})]},d.id))})]})]}),t==="calendar"&&e(fe,{stamps:i,onBack:()=>a("home")}),t==="reward"&&(h||i[f]?e(me,{onBack:()=>a("home")}):o("div",{className:"screen locked-screen",children:[e(P,{chara:u,mood:"sad",size:90}),o("p",{className:"locked-text",children:["\u3054\u307B\u3046\u3073\u30B2\u30FC\u30E0\u306F",e("br",{}),"\u304D\u3087\u3046\u306E \u304C\u304F\u3057\u3085\u3046\u304C \u304A\u308F\u3063\u3066\u304B\u3089\uFF01"]}),e("button",{className:"again-btn",onClick:()=>a("home"),children:"\u304C\u304F\u3057\u3085\u3046\u306B \u3082\u3069\u308B"})]}))]})}var ge=`
@import url('https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Kiwi+Maru:wght@400;500&family=M+PLUS+Rounded+1c:wght@500;700;800;900&display=swap');

* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; margin: 0; padding: 0; }

.app {
  min-height: 100vh;
  font-family: 'M PLUS Rounded 1c', 'Hiragino Maru Gothic ProN', 'Yu Gothic', sans-serif;
  background: #fff;
  --ink: #453A3F; --sub: #95878D; --line: #ECE4E7; --panel: #F8F5F6;
  --brand: #E2607F;
  --action: #FF8A3D; --action-press: #D9731F;
  --ok: #2E9E6B; --ng: #E0454B;
  --gold: #A16A00; --gold-bg: #FFF3D6;
  --c: #FFB7C9;
  color: var(--ink);
  display: flex;
  justify-content: center;
  user-select: none;
}
.screen {
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  padding: 18px 16px 28px;
  display: flex;
  flex-direction: column;
  position: relative;
}
a { color: inherit; text-decoration: none; }
@keyframes pop { 0% { transform: scale(.55); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }

/* ---- \u30DB\u30FC\u30E0 ---- */
.home-screen { gap: 14px; }
.home-head { display: flex; justify-content: space-between; align-items: baseline; }
.home-logo-img { height: 38px; width: auto; display: block; }
.home-date { font-size: 13px; font-weight: 700; color: var(--sub); }

.talk-row { display: flex; align-items: center; gap: 8px; width: 100%; }
.talk-chara { flex-shrink: 0; }
.bubble {
  position: relative; flex: 1; min-width: 0;
  background: var(--panel);
  border-radius: 16px;
  padding: 12px 14px;
  font-size: 14px; font-weight: 700; color: var(--ink); line-height: 1.6;
}
.bubble b { font-size: 17px; font-weight: 900; }
.bubble::before {
  content: ''; position: absolute; left: -8px; top: 50%; transform: translateY(-50%);
  border: 8px solid transparent; border-right-color: var(--panel); border-left: 0;
}

/* \u304D\u3087\u3046\u306E\u30BF\u30B9\u30AF = \u3057\u3085\u3084\u304F */
.task-list { display: flex; flex-direction: column; gap: 10px; width: 100%; }
.task-row {
  position: relative;
  display: flex; align-items: center; gap: 8px;
  border: 1.5px solid var(--line);
  border-radius: 15px;
  padding: 9px 10px 9px 20px;
  background: #fff;
}
.task-row::before {
  content: ''; position: absolute; left: 9px; top: 12px; bottom: 12px;
  width: 5px; border-radius: 99px; background: var(--c);
}
.task-row.done { background: var(--panel); }
.task-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.task-name { font-size: 15px; font-weight: 900; color: var(--ink); }
.task-row.done .task-name { color: var(--sub); }
.task-desc { font-size: 11px; font-weight: 700; color: var(--sub); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.task-check {
  flex-shrink: 0;
  width: 44px; height: 44px;
  border: 2px solid var(--line);
  border-radius: 50%;
  background: #fff;
  font-size: 20px;
  color: var(--ok);
  display: flex; align-items: center; justify-content: center;
  font-family: inherit;
}
.task-check.on { border-color: var(--ok); background: #EAF7F0; animation: pop .25s; }
.task-progress { font-size: 14px; font-weight: 700; color: var(--sub); text-align: center; }
.task-progress b {
  font-size: 34px;
  font-weight: 900;
  color: var(--ink);
  vertical-align: -5px;
  margin: 0 2px;
  font-variant-numeric: tabular-nums;
}

.stamp-banner {
  background: var(--gold-bg);
  color: var(--gold);
  border-radius: 99px;
  padding: 10px 18px;
  font-size: 14px; font-weight: 900;
  text-align: center;
  animation: pop .3s;
}

.home-btns { display: flex; gap: 10px; width: 100%; }
.cal-btn {
  flex: 1;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid rgba(107,78,87,.3);
  border-radius: 19px 24px 20px 23px / 23px 19px 24px 20px;
  height: 58px;
  background: #fff;
  color: var(--ink);
  font-family: inherit;
  font-size: 15px; font-weight: 900;
  cursor: pointer;
  box-shadow: 0 3px 0 rgba(107,78,87,.14), inset 0 2px 0 rgba(255,255,255,.7);
}
.cal-btn:active { background: var(--panel); transform: translateY(2px); box-shadow: none; }
.reward-btn {
  flex: 1.4;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid var(--action-press);
  border-radius: 20px 23px 19px 24px / 24px 20px 23px 19px;
  height: 58px;
  background: var(--action);
  color: #fff;
  font-family: inherit;
  font-size: 15px; font-weight: 900;
  box-shadow: 0 4px 0 var(--action-press), inset 0 2px 0 rgba(255,255,255,.35);
  cursor: pointer;
}
.reward-btn:active { transform: translateY(2px); box-shadow: inset 0 2px 0 rgba(255,255,255,.35); }
.reward-btn:disabled { opacity: .45; box-shadow: none; }
.btn-ico { width: 19px; height: 19px; margin-right: 7px; flex-shrink: 0; }
.reward-note { font-size: 11.5px; font-weight: 700; color: var(--sub); text-align: center; }

.all-apps { margin-top: auto; padding-top: 16px; border-top: 1.5px solid var(--line); }
.all-apps-label { font-size: 12px; font-weight: 700; color: var(--sub); margin-bottom: 8px; }
.banner-list { display: flex; flex-direction: column; gap: 9px; }
.app-banner {
  position: relative;
  display: flex; align-items: center; gap: 10px;
  background: var(--bsoft);
  border: 2px solid rgba(107,78,87,.28);
  border-radius: 20px 25px 21px 24px / 24px 20px 25px 21px;
  padding: 13px 14px 13px 24px;
  overflow: hidden;
  box-shadow: 0 3px 0 rgba(107,78,87,.13);
}
.app-banner::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 8px;
  background: var(--c);
}
.app-banner::after {
  content: '';
  position: absolute;
  right: -22px; top: -26px;
  width: 84px; height: 84px;
  border-radius: 50%;
  background: var(--c);
  opacity: .3;
}
.app-banner:active { filter: brightness(.96); }
.banner-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.banner-name { font-size: 16.5px; font-weight: 900; color: var(--ink); }
.banner-desc { font-size: 11px; font-weight: 700; color: #7D6E74; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.banner-play {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 1.5px solid rgba(107,78,87,.25);
  border-radius: 99px;
  padding: 9px 14px;
  font-size: 13px; font-weight: 900; color: var(--ink);
  box-shadow: 0 2px 0 rgba(107,78,87,.15);
}
.play-tri {
  width: 0; height: 0;
  border-left: 8px solid var(--action);
  border-top: 5.5px solid transparent;
  border-bottom: 5.5px solid transparent;
}

/* ---- \u304D\u3087\u3046\u3064\u3046(\u3082\u3069\u308B/\u30D8\u30C3\u30C0) ---- */
.hud { width: 100%; display: flex; justify-content: space-between; align-items: center; }
.back-btn {
  border: 1.5px solid var(--line);
  border-radius: 99px;
  padding: 7px 14px;
  background: #fff;
  color: var(--sub);
  font-family: inherit;
  font-size: 13px; font-weight: 900;
  cursor: pointer;
}
.back-btn:active { background: var(--panel); }
.hud-moves { font-size: 13px; font-weight: 700; color: var(--sub); }
.hud-moves b { font-size: 17px; color: var(--ink); font-variant-numeric: tabular-nums; }

/* ---- \u30AB\u30EC\u30F3\u30C0\u30FC ---- */
.cal-screen { gap: 14px; }
.cal-head { display: flex; align-items: center; justify-content: center; gap: 14px; }
.cal-title { font-size: 18px; font-weight: 900; color: var(--ink); }
.cal-nav {
  width: 40px; height: 40px;
  border: 1.5px solid var(--line);
  border-radius: 50%;
  background: #fff;
  color: var(--sub);
  font-size: 18px; font-weight: 900;
  cursor: pointer;
  font-family: inherit;
}
.cal-nav:active { background: var(--panel); }
.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  width: 100%;
}
.cal-dow { font-size: 10px; font-weight: 700; color: var(--sub); text-align: center; padding: 4px 0; }
.cal-dow.sun { color: var(--ng); }
.cal-cell {
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  padding: 5px 0 4px;
  min-height: 58px;
}
.cal-cell.today { border-color: var(--action); border-width: 2px; }
.cal-day { font-size: 11px; font-weight: 900; color: var(--ink); font-variant-numeric: tabular-nums; }
.cal-stamp { display: flex; }
.cal-empty { width: 26px; height: 26px; }
.cal-note { font-size: 11.5px; font-weight: 700; color: var(--sub); text-align: center; }

/* ---- \u3048\u3042\u308F\u305B\u30B2\u30FC\u30E0 ---- */
.game-screen { gap: 10px; }
.game-title { font-size: 20px; font-weight: 900; color: var(--ink); text-align: center; }
.game-sub { font-size: 12.5px; font-weight: 700; color: var(--sub); text-align: center; }
.memory-wrap { position: relative; width: 100%; }
.memory-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
  width: 100%;
  margin-top: 4px;
}
.mcard {
  aspect-ratio: 3 / 3.4;
  min-width: 0;
  overflow: hidden;
  border: 1.5px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  padding: 6px;
  font-family: inherit;
}
.mcard-back { font-size: 24px; font-weight: 900; color: var(--sub); }
.mcard.up { background: #fff; animation: pop .2s; }
.mcard.matched { border-color: var(--ok); background: #EAF7F0; }
.mcard img { width: 100%; height: 100%; max-width: 100%; object-fit: contain; display: block; }
.game-clear {
  margin-top: 8px;
  text-align: center;
  font-size: 16px; font-weight: 900; color: var(--ink);
  display: flex; flex-direction: column; gap: 12px; align-items: center;
  animation: pop .3s;
}
.game-score { font-size: 13px; font-weight: 700; color: var(--sub); text-align: center; }
.game-score b { font-size: 18px; color: var(--ink); font-variant-numeric: tabular-nums; }
.shuffle-btn {
  border: 1.5px solid var(--line);
  border-radius: 99px;
  padding: 7px 14px;
  background: #fff;
  color: var(--sub);
  font-family: inherit;
  font-size: 12px; font-weight: 900;
  cursor: pointer;
}
.shuffle-btn:active { background: var(--panel); }

/* \u3082\u3050\u3089\u305F\u305F\u304D */
.mole-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
  margin-top: 6px;
  padding: 16px 14px;
  border-radius: 24px;
  border: 2px solid rgba(93,64,44,.22);
  background:
    radial-gradient(circle at 16% 18%, #BCE49E 0 22px, transparent 23px),
    radial-gradient(circle at 84% 34%, #BCE49E 0 18px, transparent 19px),
    radial-gradient(circle at 30% 82%, #BCE49E 0 20px, transparent 21px),
    #A9D78B;
}
.hole {
  aspect-ratio: 1;
  border: 2px solid #5D4028;
  border-radius: 50%;
  background: radial-gradient(ellipse at 50% 40%, #8A6242 0%, #6E4C33 75%);
  box-shadow: inset 0 5px 8px rgba(0,0,0,.28);
  cursor: pointer;
  display: flex; align-items: flex-end; justify-content: center;
  overflow: hidden;
  padding: 0;
  font-family: inherit;
}
.hole:active { filter: brightness(.93); }
.mole { display: flex; animation: molepop .18s ease-out; pointer-events: none; }
.mole.hit { animation: molehit .3s; }
@keyframes molepop { from { transform: translateY(70%); } to { transform: translateY(0); } }
@keyframes molehit { 0% { transform: scale(1); } 50% { transform: scale(1.25) rotate(-6deg); } 100% { transform: scale(1); } }

/* \u3075\u3046\u305B\u3093\u308F\u308A */
.balloon-field {
  position: relative;
  width: 100%;
  height: min(56vh, 440px);
  border: 2px solid rgba(91,126,151,.28);
  border-radius: 20px;
  overflow: hidden;
  margin-top: 6px;
  background:
    radial-gradient(circle at 21% 19%, rgba(255,255,255,.95) 0 14px, transparent 15px),
    radial-gradient(circle at 27% 21%, rgba(255,255,255,.95) 0 19px, transparent 20px),
    radial-gradient(circle at 34% 19%, rgba(255,255,255,.95) 0 13px, transparent 14px),
    radial-gradient(circle at 71% 39%, rgba(255,255,255,.85) 0 11px, transparent 12px),
    radial-gradient(circle at 77% 41%, rgba(255,255,255,.85) 0 16px, transparent 17px),
    radial-gradient(circle at 84% 39%, rgba(255,255,255,.85) 0 10px, transparent 11px),
    linear-gradient(180deg, #9FD3EF 0%, #C9E9F9 60%, #E8F6FD 100%);
}
.balloon {
  position: absolute;
  bottom: -80px;
  width: 56px; height: 68px;
  border: none;
  border-radius: 50% 50% 47% 47%;
  cursor: pointer;
  animation: rise var(--dur) linear forwards;
  box-shadow: inset -6px -8px 0 rgba(0,0,0,.06);
}
.balloon::after {
  content: '';
  position: absolute;
  left: 50%; bottom: -16px;
  transform: translateX(-50%);
  width: 2px; height: 16px;
  background: rgba(69,58,63,.35);
}
@keyframes rise {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-56vh - 180px)); }
}
.game-clear.in-field {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,.92);
  justify-content: center;
  margin: 0;
}
.again-btn {
  border: none;
  border-radius: 99px;
  padding: 13px 36px;
  background: var(--action);
  color: #fff;
  font-family: inherit;
  font-size: 16px; font-weight: 900;
  box-shadow: 0 3px 0 var(--action-press);
  cursor: pointer;
}
.again-btn:active { transform: translateY(2px); box-shadow: none; }

/* ---- \u30ED\u30C3\u30AF\u304C\u3081\u3093 ---- */
.locked-screen { justify-content: center; align-items: center; gap: 18px; }
.locked-text { font-size: 17px; font-weight: 900; color: var(--ink); text-align: center; line-height: 1.7; }

.teacher-img { display: block; object-fit: contain; pointer-events: none; }

/* \u3053\u304F\u3070\u3093(\u304D\u3087\u3046\u306E\u304C\u304F\u3057\u3085\u3046) */
.task-board {
  width: 100%;
  background-image: url("/images/board.webp");
  background-size: 100% 100%;
  padding: 8.5% 8% 13.5% 8%;
}
.board-title {
  font-size: 14px;
  font-weight: 900;
  color: #fff;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 9px;
  opacity: .95;
}
.task-board .task-list { gap: 8px; }
.task-board .task-row { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.5); }
.task-board .task-row.done { background: rgba(255,255,255,.17); }
.task-board .task-name { color: #fff; }
.task-board .task-row.done .task-name { color: rgba(255,255,255,.65); }
.task-board .task-desc { color: rgba(255,255,255,.78); }
.task-board .task-check { background: transparent; border-color: rgba(255,255,255,.65); color: #FFE58A; }
.task-board .task-check.on { border-color: #FFE58A; background: rgba(255,229,138,.16); }

/* \u307F\u3060\u3057\u306F \u3066\u304C\u304D\u304B\u3093\u306E \u3042\u308B Kiwi Maru */
.board-title, .banner-name, .bubble, .task-name,
.game-title, .cal-title, .locked-text, .stamp-banner {
  font-family: 'Kiwi Maru', 'M PLUS Rounded 1c', sans-serif;
  font-weight: 500;
}

/* \u30A2\u30D7\u30EA\u30D0\u30CA\u30FC\u306E \u3060\u3044\u3081\u3044\u306F Darumadrop One */
.banner-name {
  font-family: 'Darumadrop One', 'Kiwi Maru', sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1.5px;
}

/* \u30AB\u30EC\u30F3\u30C0\u30FC\u30FB\u3054\u307B\u3046\u3073\u30B2\u30FC\u30E0\u306E \u30DC\u30BF\u30F3\u3068 \u307F\u3060\u3057\u3082 Darumadrop One */
.cal-btn, .reward-btn {
  font-family: 'Darumadrop One', 'Kiwi Maru', sans-serif;
  font-weight: 400;
  font-size: 17px;
  letter-spacing: 1.5px;
}
.cal-title, .game-title {
  font-family: 'Darumadrop One', 'Kiwi Maru', sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
}

/* \u30A2\u30AF\u30B7\u30E7\u30F3\u3051\u3044\u306E \u3082\u3058\u3082 Darumadrop One */
.again-btn, .back-btn, .shuffle-btn, .banner-play, .game-clear {
  font-family: 'Darumadrop One', 'Kiwi Maru', sans-serif;
  font-weight: 400;
  letter-spacing: 1.5px;
}
.banner-play { font-size: 14px; }

/* \u3053\u304F\u3070\u3093\u306E \u307F\u3060\u3057\u3068 \u30A2\u30D7\u30EA\u3081\u3044\u3082 Darumadrop One */
.board-title, .task-name {
  font-family: 'Darumadrop One', 'Kiwi Maru', sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
}
.board-title { font-size: 17px; }
.task-name { font-size: 16px; letter-spacing: 1.5px; }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
`;import{jsx as be}from"react/jsx-runtime";ue(document.getElementById("root")).render(be(T,{}));
