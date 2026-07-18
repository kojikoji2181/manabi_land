import"react";import{createRoot as $e}from"react-dom/client";import{useState as u,useEffect as j,useRef as z,useCallback as de}from"react";import{Fragment as B,jsx as e,jsxs as r}from"react/jsx-runtime";var m=50,D="keisan-best-times",J=[{id:1,chara:"luna",charaName:"\u30EB\u30CA",name:"\u305F\u3057\u3056\u3093",num:"\u2460",sub:"\u304F\u308A\u3042\u304C\u308A\u306E\u306A\u3044",color:"#FFB7C9",soft:"#FFE3EA",deep:"#E2607F"},{id:2,chara:"makami",charaName:"\u30DE\u30AB\u30DF",name:"\u3072\u304D\u3056\u3093",num:"\u2461",sub:"\u304F\u308A\u3055\u304C\u308A\u306E\u306A\u3044",color:"#B9CFDE",soft:"#E9F1F7",deep:"#5B7E97"},{id:3,chara:"tarte",charaName:"\u30BF\u30EB\u30C8",name:"\u305F\u3057\u3056\u3093",num:"\u2462",sub:"\u304F\u308A\u3042\u304C\u308A\u306E\u3042\u308B",color:"#ABE0A2",soft:"#E5F6E0",deep:"#55A05C"},{id:4,chara:"emma",charaName:"\u30A8\u30DE",name:"\u3072\u304D\u3056\u3093",num:"\u2463",sub:"\u304F\u308A\u3055\u304C\u308A\u306E\u3042\u308B",color:"#CBBBF2",soft:"#EDE7FB",deep:"#7E5FC7"}],i="#3A2E33";function W({mood:a,ey:t,my:o,dx:l=13}){let n=50-l,c=50+l;return a==="happy"?r("g",{children:[e("path",{d:`M ${n-6} ${t+2} Q ${n} ${t-7} ${n+6} ${t+2}`,fill:"none",stroke:i,strokeWidth:"3.6",strokeLinecap:"round"}),e("path",{d:`M ${c-6} ${t+2} Q ${c} ${t-7} ${c+6} ${t+2}`,fill:"none",stroke:i,strokeWidth:"3.6",strokeLinecap:"round"}),e("path",{d:`M 43 ${o} Q 50 ${o+10} 57 ${o} Q 50 ${o+2.5} 43 ${o} Z`,fill:"#B14D5E",stroke:i,strokeWidth:"2.5",strokeLinejoin:"round"}),r("g",{className:"spark",fill:"#FFD84D",stroke:"none",children:[e("path",{d:"M13 32 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 Z"}),e("path",{d:"M88 26 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z"})]})]}):a==="sad"?r("g",{children:[e("path",{d:`M ${n-6} ${t-12} L ${n+5} ${t-8}`,stroke:i,strokeWidth:"3",strokeLinecap:"round",fill:"none"}),e("path",{d:`M ${c+6} ${t-12} L ${c-5} ${t-8}`,stroke:i,strokeWidth:"3",strokeLinecap:"round",fill:"none"}),e("path",{d:`M ${n-5} ${t-1} Q ${n} ${t+4} ${n+5} ${t-1}`,fill:"none",stroke:i,strokeWidth:"3.6",strokeLinecap:"round"}),e("path",{d:`M ${c-5} ${t-1} Q ${c} ${t+4} ${c+5} ${t-1}`,fill:"none",stroke:i,strokeWidth:"3.6",strokeLinecap:"round"}),e("path",{d:`M 42 ${o+1} q 4 -5 8 0 q 4 5 8 0`,fill:"none",stroke:i,strokeWidth:"3",strokeLinecap:"round"}),e("path",{d:"M85 36 C90.5 43.5 90.5 50 85 50 C79.5 50 79.5 43.5 85 36 Z",fill:"#A7DDF6",className:"sweat"})]}):null}function U({mood:a}){return r("g",{children:[e("ellipse",{cx:"34",cy:"19",rx:"9.5",ry:"21",fill:"#F6ACC7",stroke:i,strokeWidth:"3",transform:"rotate(-14 34 19)"}),e("ellipse",{cx:"66",cy:"19",rx:"9.5",ry:"21",fill:"#F6ACC7",stroke:i,strokeWidth:"3",transform:"rotate(14 66 19)"}),e("ellipse",{cx:"34",cy:"22",rx:"4.5",ry:"13",fill:"#FFEDF4",transform:"rotate(-14 34 22)"}),e("ellipse",{cx:"66",cy:"22",rx:"4.5",ry:"13",fill:"#FFEDF4",transform:"rotate(14 66 22)"}),e("circle",{cx:"50",cy:"61",r:"31",fill:"#F9BBD0",stroke:i,strokeWidth:"3"}),e("circle",{cx:"30",cy:"68",r:"5.5",fill:"#F27BA4",opacity:".85"}),e("circle",{cx:"70",cy:"68",r:"5.5",fill:"#F27BA4",opacity:".85"}),a==="normal"?r("g",{children:[e("ellipse",{cx:"37",cy:"57",rx:"5",ry:"6",fill:"#54383C"}),e("ellipse",{cx:"63",cy:"57",rx:"5",ry:"6",fill:"#54383C"}),e("circle",{cx:"39",cy:"55",r:"1.8",fill:"#fff"}),e("circle",{cx:"65",cy:"55",r:"1.8",fill:"#fff"}),e("path",{d:"M44 67 Q50 74 56 67 Q50 69.5 44 67 Z",fill:"#B14D5E",stroke:i,strokeWidth:"2.3",strokeLinejoin:"round"})]}):e(W,{mood:a,ey:57,my:68})]})}function ue({mood:a}){return r("g",{children:[e("path",{d:"M30 30 L17 6 L45 18 Z",fill:"#8E99A4",stroke:i,strokeWidth:"3",strokeLinejoin:"round"}),e("path",{d:"M70 30 L83 6 L55 18 Z",fill:"#8E99A4",stroke:i,strokeWidth:"3",strokeLinejoin:"round"}),e("path",{d:"M30 26 L23 13 L38 19 Z",fill:"#EDF1F3"}),e("path",{d:"M70 26 L77 13 L62 19 Z",fill:"#EDF1F3"}),e("circle",{cx:"50",cy:"59",r:"31",fill:"#8E99A4",stroke:i,strokeWidth:"3"}),e("ellipse",{cx:"50",cy:"74",rx:"17",ry:"13",fill:"#EEF2F4"}),e("path",{d:"M32 46 q5 -3.5 10 -0.5",stroke:"#DDE4E9",strokeWidth:"3.2",fill:"none",strokeLinecap:"round"}),e("path",{d:"M58 45.5 q5 -3 10 0.5",stroke:"#DDE4E9",strokeWidth:"3.2",fill:"none",strokeLinecap:"round"}),e("path",{d:"M46 66.5 q4 -3 8 0 q-1 5.5 -4 5.5 q-3 0 -4 -5.5 Z",fill:"#2E2E33"}),a==="normal"?r("g",{children:[e("ellipse",{cx:"37",cy:"54",rx:"5.2",ry:"6",fill:"#E8A13C",stroke:i,strokeWidth:"2"}),e("ellipse",{cx:"63",cy:"54",rx:"5.2",ry:"6",fill:"#E8A13C",stroke:i,strokeWidth:"2"}),e("circle",{cx:"37",cy:"55",r:"2.2",fill:"#3A2E33"}),e("circle",{cx:"63",cy:"55",r:"2.2",fill:"#3A2E33"}),e("path",{d:"M31 50 L43 50",stroke:i,strokeWidth:"3",strokeLinecap:"round"}),e("path",{d:"M57 50 L69 50",stroke:i,strokeWidth:"3",strokeLinecap:"round"}),e("path",{d:"M50 76 q5 3.5 9.5 -0.5",fill:"none",stroke:i,strokeWidth:"2.8",strokeLinecap:"round"})]}):e(W,{mood:a,ey:54,my:77})]})}function fe({mood:a}){return r("g",{children:[e("path",{d:"M50 21 Q47 9 37 7 Q43 20 50 21 Z",fill:"#F2A0AC",stroke:i,strokeWidth:"2.6",strokeLinejoin:"round"}),e("path",{d:"M50 21 Q53 9 63 7 Q57 20 50 21 Z",fill:"#F2A0AC",stroke:i,strokeWidth:"2.6",strokeLinejoin:"round"}),e("circle",{cx:"50",cy:"61",r:"31",fill:"#CDEBBC",stroke:i,strokeWidth:"3"}),e("circle",{cx:"30",cy:"68",r:"5.5",fill:"#F5A9B8"}),e("circle",{cx:"70",cy:"68",r:"5.5",fill:"#F5A9B8"}),a==="normal"?r("g",{children:[e("ellipse",{cx:"37",cy:"57",rx:"5.3",ry:"6.2",fill:"#4B4550"}),e("ellipse",{cx:"63",cy:"57",rx:"5.3",ry:"6.2",fill:"#4B4550"}),e("circle",{cx:"39",cy:"55",r:"1.9",fill:"#fff"}),e("circle",{cx:"65",cy:"55",r:"1.9",fill:"#fff"}),e("path",{d:"M44.5 68 Q50 72.5 55.5 68",fill:"none",stroke:i,strokeWidth:"3",strokeLinecap:"round"})]}):e(W,{mood:a,ey:57,my:69})]})}function me({mood:a}){return r("g",{children:[e("path",{d:"M28 28 L20 7 L39 17 Z",fill:"#F3F0FB",stroke:i,strokeWidth:"3",strokeLinejoin:"round"}),e("path",{d:"M72 28 L80 7 L61 17 Z",fill:"#F3F0FB",stroke:i,strokeWidth:"3",strokeLinejoin:"round"}),e("path",{d:"M50 1 L45 22 L55 22 Z",fill:"#F6DC7E",stroke:i,strokeWidth:"2.5",strokeLinejoin:"round"}),e("path",{d:"M47.5 11 L53.5 9 M46.3 16 L54.7 14",stroke:i,strokeWidth:"1.6",strokeLinecap:"round"}),e("circle",{cx:"50",cy:"60",r:"31",fill:"#F2EEFB",stroke:i,strokeWidth:"3"}),r("g",{stroke:i,strokeWidth:"3",children:[e("circle",{cx:"30",cy:"41",r:"12",fill:"#B7A3E6"}),e("circle",{cx:"70",cy:"42",r:"11.5",fill:"#B7A3E6"}),e("circle",{cx:"44",cy:"33",r:"13",fill:"#B7A3E6"}),e("circle",{cx:"59",cy:"34",r:"12",fill:"#B7A3E6"})]}),e("circle",{cx:"37",cy:"33",r:"4.6",fill:"#F7A8C4"}),e("circle",{cx:"52",cy:"28.5",r:"4.6",fill:"#F5E48F"}),e("circle",{cx:"65",cy:"34",r:"4.6",fill:"#A5E4EF"}),e("ellipse",{cx:"30",cy:"68",rx:"5",ry:"3.6",fill:"#F4C4D6"}),e("ellipse",{cx:"70",cy:"68",rx:"5",ry:"3.6",fill:"#F4C4D6"}),a==="normal"?r("g",{children:[e("ellipse",{cx:"37",cy:"59",rx:"5.5",ry:"6.6",fill:"#8F6FD0",stroke:i,strokeWidth:"2"}),e("ellipse",{cx:"63",cy:"59",rx:"5.5",ry:"6.6",fill:"#8F6FD0",stroke:i,strokeWidth:"2"}),e("circle",{cx:"37",cy:"60",r:"2.3",fill:"#3A2E33"}),e("circle",{cx:"63",cy:"60",r:"2.3",fill:"#3A2E33"}),e("circle",{cx:"39",cy:"57",r:"1.6",fill:"#fff"}),e("circle",{cx:"65",cy:"57",r:"1.6",fill:"#fff"}),e("path",{d:"M30.5 55 L43.5 55",stroke:i,strokeWidth:"3",strokeLinecap:"round"}),e("path",{d:"M56.5 55 L69.5 55",stroke:i,strokeWidth:"3",strokeLinecap:"round"}),e("path",{d:"M44.5 72 Q50 76 56 71.5",fill:"none",stroke:i,strokeWidth:"2.8",strokeLinecap:"round"})]}):e(W,{mood:a,ey:59,my:72})]})}var he={luna:U,makami:ue,tarte:fe,emma:me},xe={luna:{normal:"../images/chara/luna_normal.webp",happy:"../images/chara/luna_happy.webp",sad:"../images/chara/luna_sad.webp"},makami:{normal:"../images/chara/makami_normal.webp",happy:"../images/chara/makami_happy.webp",sad:"../images/chara/makami_sad.webp"},tarte:{normal:"../images/chara/tarte_normal.webp",happy:"../images/chara/tarte_happy.webp",sad:"../images/chara/tarte_sad.webp"},emma:{normal:"../images/chara/emma_normal.webp",happy:"../images/chara/emma_happy.webp",sad:"../images/chara/emma_sad.webp"}};function F({chara:a,mood:t="normal",size:o=60}){let l=xe[a]||{},n=l[t]||l.normal||"";if(n)return e("img",{src:n,width:o,height:o,alt:"",draggable:!1,style:{display:"block",objectFit:"contain",pointerEvents:"none"}});let c=he[a]||U;return e("svg",{viewBox:"0 0 100 100",width:o,height:o,style:{display:"block",overflow:"visible"},"aria-hidden":"true",children:e(c,{mood:t})})}var b=(a,t)=>Math.floor(Math.random()*(t-a+1))+a;function be(a){let t,o,l;return a===1?(t=b(1,9),o=b(1,Math.min(9,10-t)),l="+"):a===2?(t=b(2,10),o=b(1,t-1),l="-"):a===3?(t=b(2,9),o=b(Math.max(2,11-t),9),l="+"):(t=b(11,18),o=b(t-9,9),l="-"),{a:t,b:o,op:l,ans:l==="+"?t+o:t-o}}function ge(a){let t=[],o="";for(let l=0;l<m;l++){let n,c,d=0;do n=be(a),c=`${n.a}${n.op}${n.b}`,d++;while(c===o&&d<20);o=c,t.push(n)}return t}var ke=a=>`${Math.floor(a/60)}:${String(Math.floor(a%60)).padStart(2,"0")}`,G=a=>{let t=Math.floor(a/60),o=Math.floor(a%60);return t>0?`${t}\u3075\u3093${o}\u3073\u3087\u3046`:`${o}\u3073\u3087\u3046`},Q=null;function H(){if(!Q){let a=window.AudioContext||window.webkitAudioContext;a&&(Q=new a)}return Q}function h(a,t,o,l="sine",n=.18){let c=H();if(!c)return;let d=c.createOscillator(),g=c.createGain();d.type=l,d.frequency.value=a,g.gain.setValueAtTime(0,c.currentTime+t),g.gain.linearRampToValueAtTime(n,c.currentTime+t+.01),g.gain.exponentialRampToValueAtTime(.001,c.currentTime+t+o),d.connect(g).connect(c.destination),d.start(c.currentTime+t),d.stop(c.currentTime+t+o+.05)}var ve=()=>{h(880,0,.09),h(1100,.1,.09),h(1320,.2,.14)},ye=()=>h(220,0,.3,"triangle",.1),we=()=>h(660,0,.12),Ne=()=>{h(660,0,.1),h(880,.12,.2)},Fe=()=>{[523,659,784,1047].forEach((a,t)=>h(a,t*.13,.15)),h(1319,.55,.4)};async function Ee(){try{if(typeof window<"u"&&window.storage){let t=await window.storage.get(D);return t?JSON.parse(t.value):{}}let a=localStorage.getItem(D);return a?JSON.parse(a):{}}catch{return{}}}async function P(a){try{typeof window<"u"&&window.storage?await window.storage.set(D,JSON.stringify(a)):localStorage.setItem(D,JSON.stringify(a))}catch(t){console.error("save failed",t)}}function Ce(a){try{let t="gakushu-log-v1",o=localStorage.getItem(t),l=o?JSON.parse(o):[];for(l.push(a);l.length>500;)l.shift();localStorage.setItem(t,JSON.stringify(l))}catch{}}var Ae=()=>{let a=new Date;return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`};function Z(){let[a,t]=u("title"),[o,l]=u({}),[n,c]=u(J[0]),[d,g]=u(3),[w,V]=u([]),[f,R]=u(0),[E,C]=u(""),[Y,A]=u(0),[x,M]=u(null),[$,S]=u(0),[ee,O]=u(!1),[I,L]=u(!1),[te,T]=u(!1),N=z(0),y=z(null),k=z(!1),_=z(0),ae=()=>{I||(clearInterval(y.current),_.current=Date.now(),L(!0))},re=()=>{N.current+=Date.now()-_.current,y.current=setInterval(()=>{A((Date.now()-N.current)/1e3)},100),L(!1)},ne=()=>{clearInterval(y.current),L(!1),M(null),k.current=!1,t("title")},oe=async()=>{l({}),await P({}),T(!1)};j(()=>{Ee().then(l)},[]),j(()=>()=>clearInterval(y.current),[]);let ie=s=>{H(),c(s),V(ge(s.id)),R(0),C(""),S(0),O(!1),M(null),L(!1),k.current=!1,g(3),t("countdown")};j(()=>{if(a!=="countdown")return;if(d>0){we();let p=setTimeout(()=>g(v=>v-1),1e3);return()=>clearTimeout(p)}Ne();let s=setTimeout(()=>{N.current=Date.now(),A(0),y.current=setInterval(()=>{A((Date.now()-N.current)/1e3)},100),t("play")},800);return()=>clearTimeout(s)},[a,d]);let se=de(async s=>{clearInterval(y.current);let p=Math.round((Date.now()-N.current)/1e3);A(p);let v=o[n.id],q=!1;if(v==null||p<v){q=!0;let K={...o,[n.id]:p};l(K),await P(K)}O(q),S(s),Ce({d:Ae(),app:"keisan",correct:s,total:m,sec:p}),t("result"),setTimeout(Fe,300)},[o,n]),le=()=>{if(E===""||k.current)return;k.current=!0;let s=w[f],p=parseInt(E,10)===s.ans,v=$+(p?1:0);p?ve():ye(),M({ok:p,ans:s.ans}),p&&S(v),setTimeout(()=>{M(null),C(""),k.current=!1,f+1>=m?se(v):R(q=>q+1)},p?650:1500)},X=s=>{k.current||C(p=>p.length>=2?p:p==="0"?String(s):p+s)},ce=()=>{k.current||C(s=>s.slice(0,-1))},pe=x?x.ok?"happy":"sad":"normal";return r("div",{className:"app",children:[e("style",{children:Me}),a==="title"&&r("div",{className:"screen title-screen",children:[typeof window<"u"&&!window.storage&&e("a",{className:"home-link",href:"../",children:"\u2039 \u30DB\u30FC\u30E0\u3078"}),r("div",{className:"title-card",children:[e("div",{className:"ring-hole"}),r("h1",{className:"app-title",children:["\u3051\u3044\u3055\u3093",e("span",{className:"title-accent",children:"\u30AB\u30FC\u30C9"})]}),e("p",{className:"app-sub",children:"\u3069\u306E\u304A\u3068\u3082\u3060\u3061\u3068 \u3042\u305D\u3076\uFF1F"})]}),e("div",{className:"course-list",children:J.map(s=>r("button",{className:"course-btn",style:{"--c":s.color,"--soft":s.soft,"--deep":s.deep},onClick:()=>ie(s),children:[r("span",{className:"course-chara",children:[e(F,{chara:s.chara,size:52}),e("span",{className:"chara-name",children:s.charaName})]}),r("span",{className:"course-text",children:[r("span",{className:"course-name",children:[s.name,e("span",{className:"course-num",children:s.num})]}),e("span",{className:"course-sub",children:s.sub}),r("span",{className:"course-best",children:["\u3058\u3053\u30D9\u30B9\u30C8\uFF1A",o[s.id]!=null?e("b",{children:G(o[s.id])}):e("i",{children:"\u307E\u3060 \u304D\u308D\u304F\u304C \u306A\u3044\u3088"})]})]}),e("span",{className:"course-go",children:"\u25B6"})]},s.id))}),e("button",{className:"reset-btn",onClick:()=>T(!0),children:"\u304D\u308D\u304F\u3092 \u305C\u3093\u3076 \u3051\u3059"}),te&&e("div",{className:"quit-overlay",children:r("div",{className:"quit-box",children:[r("p",{className:"quit-text",children:["\u3058\u3053\u30D9\u30B9\u30C8\u306E \u304D\u308D\u304F\u3092",e("br",{}),"\u305C\u3093\u3076 \u3051\u3057\u3066\u3082 \u3044\u3044\uFF1F",e("br",{}),e("small",{children:"\u3044\u3061\u3069 \u3051\u3059\u3068 \u3082\u3068\u306B \u3082\u3069\u305B\u306A\u3044\u3088"})]}),r("div",{className:"quit-btns",children:[e("button",{className:"quit-no",onClick:()=>T(!1),children:"\u3051\u3055\u306A\u3044"}),e("button",{className:"quit-yes",onClick:oe,children:"\u3051\u3059"})]})]})})]}),a==="countdown"&&r("div",{className:"screen count-screen",style:{"--c":n.color,"--soft":n.soft,"--deep":n.deep},children:[e("div",{className:"count-chara",children:e(F,{chara:n.chara,mood:"normal",size:120})}),r("p",{className:"count-cheer",children:[n.charaName,"\u3068 \u3044\u3063\u3057\u3087\u306B \u304C\u3093\u3070\u308D\u3046\uFF01"]}),r("p",{className:"count-label",children:[n.name,n.num,"\u3000",n.sub]}),e("div",{className:`count-num ${d===0?"go":""}`,children:d>0?d:"\u30B9\u30BF\u30FC\u30C8\uFF01"},d)]}),a==="play"&&w[f]&&r("div",{className:"screen play-screen",style:{"--c":n.color,"--soft":n.soft,"--deep":n.deep},children:[r("div",{className:"hud",children:[r("span",{className:"hud-count",children:[e("b",{children:f+1})," / ",m," \u307E\u3044"]}),r("span",{className:"hud-right",children:[e("span",{className:"hud-time",children:ke(Y)}),e("button",{className:"quit-btn",onClick:ae,children:"\u3084\u3081\u308B"})]})]}),e("div",{className:"progress",children:e("div",{className:"progress-bar",style:{width:`${(f+1)/m*100}%`}})}),r("div",{className:"qcard-wrap",children:[e("div",{className:`chara-peek ${x?x.ok?"hop":"shake":""}`,children:e(F,{chara:n.chara,mood:pe,size:80})}),r("div",{className:"qcard",children:[e("div",{className:"ring-hole"}),r("div",{className:"equation",children:[w[f].a," ",w[f].op==="+"?"\uFF0B":"\u2212"," ",w[f].b," \uFF1D"," ",e("span",{className:"q-mark",children:"?"})]}),x&&e("div",{className:`feedback ${x.ok?"ok":"ng"}`,children:e("span",{className:"fb-inner",children:x.ok?r(B,{children:[e("span",{className:"fb-mark",children:"\u2B55"})," \u305B\u3044\u304B\u3044\uFF01"]}):r(B,{children:[e("span",{className:"fb-mark",children:"\u274C"})," \u3046\u301C\u3093\u2026 \u3053\u305F\u3048\u306F ",x.ans," \u3060\u3088"]})})})]},f)]}),r("div",{className:"answer-row",children:[e("div",{className:"answer-box",children:E||e("span",{className:"placeholder",children:"\u3053\u305F\u3048"})}),e("button",{className:"side-btn del",onClick:ce,"aria-label":"\u3072\u3068\u3082\u3058\u3051\u3059",children:"\u2715"}),e("button",{className:"side-btn send",onClick:le,disabled:E==="","aria-label":"\u304A\u304F\u308B",children:"\uFF1E"})]}),r("div",{className:"numpad",children:[[1,2,3,4,5,6,7,8,9].map(s=>e("button",{className:"key",onClick:()=>X(s),children:s},s)),e("button",{className:"key zero",onClick:()=>X(0),children:"0"})]}),I&&e("div",{className:"quit-overlay",children:r("div",{className:"quit-box",children:[e(F,{chara:n.chara,mood:"sad",size:84}),r("p",{className:"quit-text",children:["\u307B\u3093\u3068\u3046\u306B \u3084\u3081\u308B\uFF1F",e("br",{}),e("small",{children:"\u3068\u3061\u3085\u3046\u3067 \u3084\u3081\u308B\u3068 \u304D\u308D\u304F\u306F \u306E\u3053\u3089\u306A\u3044\u3088"})]}),r("div",{className:"quit-btns",children:[e("button",{className:"quit-no",onClick:re,children:"\u3064\u3065\u3051\u308B"}),e("button",{className:"quit-yes",onClick:ne,children:"\u3084\u3081\u308B"})]})]})})]}),a==="result"&&r("div",{className:"screen result-screen",style:{"--c":n.color,"--soft":n.soft,"--deep":n.deep},children:[$===m&&e("div",{className:"confetti",children:Array.from({length:24}).map((s,p)=>e("span",{style:{"--i":p,"--cc":["#F48BB0","#8FC7E8","#8FD6A0","#B9A5E8","#FFD97A","#F6AC6B"][p%6]}},p))}),r("div",{className:"result-card",children:[e("div",{className:"ring-hole"}),e("div",{className:"result-chara",children:e(F,{chara:n.chara,mood:"happy",size:120})}),e("h2",{className:"result-title",children:$===m?r(B,{children:["\u305C\u3093\u3076 \u305B\u3044\u304B\u3044\uFF01",e("br",{}),"\u3059\u3054\u30FC\u3044\uFF01"]}):r(B,{children:[m,"\u307E\u3044 \u3055\u3044\u3054\u307E\u3067 \u304C\u3093\u3070\u3063\u305F\u306D\uFF01",e("br",{}),"\u3064\u304E\u306F \u307E\u3093\u3066\u3093\u3092 \u3081\u3056\u305D\u3046\uFF01"]})}),r("p",{className:"result-cheer",children:[n.charaName,"\u3082 \u304A\u304A\u3088\u308D\u3053\u3073\uFF01"]}),r("p",{className:"result-score",children:[m,"\u3082\u3093\u3061\u3085\u3046 ",r("b",{children:[$,"\u3082\u3093"]})," \u305B\u3044\u304B\u3044\uFF01"]}),e("p",{className:"result-time-label",children:"\u304B\u304B\u3063\u305F \u3058\u304B\u3093"}),e("div",{className:"result-time",children:G(Y)}),ee&&e("div",{className:"new-best",children:"\u3058\u3053\u30D9\u30B9\u30C8 \u3053\u3046\u3057\u3093\uFF01 \u304A\u3081\u3067\u3068\u3046\uFF01"})]}),e("button",{className:"again-btn",onClick:()=>t("title"),children:"\u3082\u3046\u3044\u3061\u3069 \u3042\u305D\u3076"})]})]})}var Me=`
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

`;import{jsx as Le}from"react/jsx-runtime";$e(document.getElementById("root")).render(Le(Z,{}));
