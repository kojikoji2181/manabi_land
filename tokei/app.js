import"react";import{createRoot as Dt}from"react-dom/client";import{useState as k,useEffect as W,useRef as E,useCallback as ut}from"react";import{Fragment as j,jsx as e,jsxs as r}from"react/jsx-runtime";var K="tokei-best-times",Q=[{lv:1,chara:"luna",theme:"\u306A\u3093\u3058\uFF1F",sub:"\u3061\u3087\u3046\u3069\u306E \u3058\u304B\u3093",total:5,color:"#FFB7C9",soft:"#FFE3EA",deep:"#E2607F"},{lv:2,chara:"makami",theme:"\u306A\u3093\u3058\u306F\u3093\uFF1F",sub:"30\u3077\u3093\u306E \u3058\u304B\u3093",total:5,color:"#B9CFDE",soft:"#E9F1F7",deep:"#5B7E97"},{lv:3,chara:"tarte",theme:"5\u3075\u3093\u304D\u3056\u307F",sub:"5\u3068\u3073\u306E \u3058\u304B\u3093",total:10,color:"#ABE0A2",soft:"#E5F6E0",deep:"#55A05C"},{lv:4,chara:"emma",theme:"1\u3077\u3093\u304D\u3056\u307F",sub:"\u3053\u307E\u304B\u3044 \u3058\u304B\u3093",total:10,color:"#CBBBF2",soft:"#EDE7FB",deep:"#7E5FC7"}],V={luna:"\u30EB\u30CA",makami:"\u30DE\u30AB\u30DF",tarte:"\u30BF\u30EB\u30C8",emma:"\u30A8\u30DE"},ft={luna:{normal:"/images/chara/luna_normal.webp",happy:"/images/chara/luna_happy.webp",sad:"/images/chara/luna_sad.webp"},makami:{normal:"/images/chara/makami_normal.webp",happy:"/images/chara/makami_happy.webp",sad:"/images/chara/makami_sad.webp"},tarte:{normal:"/images/chara/tarte_normal.webp",happy:"/images/chara/tarte_happy.webp",sad:"/images/chara/tarte_sad.webp"},emma:{normal:"/images/chara/emma_normal.webp",happy:"/images/chara/emma_happy.webp",sad:"/images/chara/emma_sad.webp"}};function X({chara:t,mood:n="normal",size:o=60}){let p=ft[t]||{},a=p[n]||p.normal||"";return a?e("img",{src:a,width:o,height:o,alt:"",draggable:!1,style:{display:"block",objectFit:"contain",pointerEvents:"none"}}):null}var mt="/images/tokei_hero.webp",ht=t=>[1,3,4,6,8,0].includes(t%10)?"\u3077\u3093":"\u3075\u3093";function Z(t,n){return n===0?`${t}\u3058`:n===30?`${t}\u3058\u306F\u3093`:`${t}\u3058 ${n}${ht(n)}`}var bt=(t,n)=>`${t}:${String(n).padStart(2,"0")}`,G=(t,n)=>Math.floor(Math.random()*(n-t+1))+t;function L(t){return t===1?0:t===2?Math.random()<.3?0:30:t===3?G(0,11)*5:G(0,59)}function gt(t,n){let o=[],p="";for(let a=0;a<n;a++){let d,s,f,b=0;do d=G(1,12),s=L(t),f=`${d}:${s}`,b++;while(f===p&&b<30);p=f;let x,m,w=0;do x=G(1,12),m=L(t),w++;while(x===d&&m===s&&w<30);o.push({h:d,m:s,sh:x,sm:m})}return o}var xt=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,"0")}`,tt=t=>{let n=Math.floor(t/60),o=Math.floor(t%60);return n>0?`${n}\u3075\u3093${o}\u3073\u3087\u3046`:`${o}\u3073\u3087\u3046`},J=null;function at(){if(!J){let t=window.AudioContext||window.webkitAudioContext;t&&(J=new t)}return J}function M(t,n,o,p="sine",a=.18){let d=at();if(!d)return;let s=d.createOscillator(),f=d.createGain();s.type=p,s.frequency.value=t,f.gain.setValueAtTime(0,d.currentTime+n),f.gain.linearRampToValueAtTime(a,d.currentTime+n+.01),f.gain.exponentialRampToValueAtTime(.001,d.currentTime+n+o),s.connect(f).connect(d.destination),s.start(d.currentTime+n),s.stop(d.currentTime+n+o+.05)}var vt=()=>{M(880,0,.09),M(1100,.1,.09),M(1320,.2,.14)},kt=()=>M(220,0,.3,"triangle",.1),wt=()=>M(660,0,.12),yt=()=>{M(660,0,.1),M(880,.12,.2)},Nt=()=>M(1200,0,.03,"square",.04),zt=()=>{[523,659,784,1047].forEach((t,n)=>M(t,n*.13,.15)),M(1319,.55,.4)};async function Mt(){try{if(typeof window<"u"&&window.storage){let n=await window.storage.get(K);return n?JSON.parse(n.value):{}}let t=localStorage.getItem(K);return t?JSON.parse(t):{}}catch{return{}}}async function et(t){try{typeof window<"u"&&window.storage?await window.storage.set(K,JSON.stringify(t)):localStorage.setItem(K,JSON.stringify(t))}catch(n){console.error("save failed",n)}}var nt=(t,n)=>{let o=Math.abs(t-n)%360;return o>180?360-o:o};function Ct(t,n,o,p,a){if(t===1)return"hour";let d=o*6,s=n%12*30+o*.5,f=nt(p,d),b=nt(p,s);return Math.abs(f-b)<25?a>.5?"min":"hour":f<b?"min":"hour"}function Ft(t,n,o,p){let a=t===2?180:t===3?30:6,s=Math.round(p/a)*a%360/6;if(s===o)return null;let f=n;return t>=3&&(o>=45&&s<=15?f=n%12+1:o<=15&&s>=45&&(f=(n+10)%12+1)),{h:f,m:s}}function Et(t,n,o,p){if(t===1){let b=Math.round(p/30)*30%360/30,x=b===0?12:b;return x===n?null:{h:x,m:0}}let a=(p-o*.5+360)%360,d=Math.round(a/30)%12,s=d===0?12:d;return s===n?null:{h:s,m:o}}function qt({h:t,m:n,level:o,onChange:p,disabled:a,hint:d,deep:s,color:f}){let b=E(null),x=E(null),m=E(t),w=E(n);m.current=t,w.current=n;let C=n*6,D=t%12*30+n*.5,F=h=>{let l=b.current.getBoundingClientRect(),c=l.left+l.width/2,g=l.top+l.height/2,v=h.clientX-c,N=h.clientY-g,B=(Math.atan2(N,v)*180/Math.PI+90+360)%360,Y=Math.sqrt(v*v+N*N)/(l.width/2);return{deg:B,rr:Y}},H=(h,l)=>{let c=h==="min"?Ft(o,m.current,w.current,l):Et(o,m.current,w.current,l);c&&(m.current=c.h,w.current=c.m,Nt(),p(c.h,c.m))},_=h=>{if(a)return;h.preventDefault();let{deg:l,rr:c}=F(h),g=Ct(o,m.current,w.current,l,c),v=g==="min"?w.current*6:m.current%12*30+w.current*.5;x.current={hand:g,offset:(v-l+360)%360};try{b.current.setPointerCapture(h.pointerId)}catch{}},$=h=>{if(!x.current||a)return;h.preventDefault();let{deg:l}=F(h),c=(l+x.current.offset)%360;H(x.current.hand,c)},y=h=>{x.current=null;try{b.current.releasePointerCapture(h.pointerId)}catch{}},q=(h,l)=>{let c=(h-90)*Math.PI/180;return[110+l*Math.cos(c),110+l*Math.sin(c)]},[A,I]=q(C,74),[P,T]=q(D,48);return r("svg",{ref:b,viewBox:"0 0 220 220",className:"clock-svg",onPointerDown:_,onPointerMove:$,onPointerUp:y,onPointerCancel:y,children:[e("circle",{cx:"110",cy:"110",r:"106",fill:"#6B4E57"}),e("circle",{cx:"110",cy:"110",r:"102",fill:f}),e("circle",{cx:"110",cy:"110",r:"92",fill:"#fff"}),Array.from({length:60},(h,l)=>{let c=l%5===0,g=(l*6-90)*Math.PI/180,v=c?82:86,N=90;return e("line",{x1:110+v*Math.cos(g),y1:110+v*Math.sin(g),x2:110+N*Math.cos(g),y2:110+N*Math.sin(g),stroke:c?"#8B6E77":"#DCC9CF",strokeWidth:c?3:1.6,strokeLinecap:"round"},l)}),Array.from({length:12},(h,l)=>{let c=l+1,g=(c*30-90)*Math.PI/180;return e("text",{x:110+68*Math.cos(g),y:110+68*Math.sin(g),textAnchor:"middle",dominantBaseline:"central",fontSize:"19",fontWeight:"900",fontFamily:"inherit",fill:"#5D4650",children:c},c)}),d&&o>=3&&Array.from({length:12},(h,l)=>{let c=l+1,g=(c*30-90)*Math.PI/180;return e("text",{x:110+98*Math.cos(g),y:110+98*Math.sin(g),textAnchor:"middle",dominantBaseline:"central",fontSize:"10",fontWeight:"900",fontFamily:"inherit",fill:"#6B4E57",children:c*5},`m${c}`)}),e("line",{x1:"110",y1:"110",x2:P,y2:T,stroke:"#E2607F",strokeWidth:"9",strokeLinecap:"round"}),e("circle",{cx:P,cy:T,r:"13",fill:"#fff",stroke:"#E2607F",strokeWidth:"5"}),e("line",{x1:"110",y1:"110",x2:A,y2:I,stroke:"#5B7E97",strokeWidth:"7",strokeLinecap:"round"}),e("circle",{cx:A,cy:I,r:"12",fill:"#fff",stroke:"#5B7E97",strokeWidth:"4.5"}),e("circle",{cx:"110",cy:"110",r:"7",fill:s})]})}function At(t){try{let n="gakushu-log-v1",o=localStorage.getItem(n),p=o?JSON.parse(o):[];for(p.push(t);p.length>500;)p.shift();localStorage.setItem(n,JSON.stringify(p))}catch{}}var Bt=()=>{let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`};function U(){let[t,n]=k("title"),[o,p]=k({}),[a,d]=k(null),[s,f]=k(3),[b,x]=k([]),[m,w]=k(0),[C,D]=k({h:12,m:0}),[F,H]=k(!1),[_,$]=k(0),[y,q]=k(null),[A,I]=k(0),[P,T]=k(!1),[h,l]=k(!1),[c,g]=k(!1),v=E(0),N=E(null),B=E(!1),Y=E(0);W(()=>{Mt().then(p)},[]),W(()=>()=>clearInterval(N.current),[]);let ot=i=>{at();let u=gt(i.lv,i.total);d({...i,key:`lv${i.lv}`}),x(u),w(0),D({h:u[0].sh,m:u[0].sm}),I(0),T(!1),q(null),l(!1),B.current=!1,f(3),n("countdown")},rt=()=>{h||(clearInterval(N.current),Y.current=Date.now(),l(!0))},it=()=>{v.current+=Date.now()-Y.current,N.current=setInterval(()=>{$((Date.now()-v.current)/1e3)},100),l(!1)},st=()=>{clearInterval(N.current),l(!1),q(null),B.current=!1,n("title")},lt=async()=>{p({}),await et({}),g(!1)};W(()=>{if(t!=="countdown")return;if(s>0){wt();let u=setTimeout(()=>f(S=>S-1),1e3);return()=>clearTimeout(u)}yt();let i=setTimeout(()=>{v.current=Date.now(),$(0),N.current=setInterval(()=>{$((Date.now()-v.current)/1e3)},100),n("play")},800);return()=>clearTimeout(i)},[t,s]);let ct=ut(async i=>{clearInterval(N.current);let u=Math.round((Date.now()-v.current)/1e3);$(u);let S=o[a.key],R=!1;if(S==null||u<S){R=!0;let O={...o,[a.key]:u};p(O),await et(O)}T(R),I(i),At({d:Bt(),app:"tokei",correct:i,total:a.total,sec:u}),n("result"),setTimeout(zt,300)},[o,a]),pt=()=>{if(B.current)return;B.current=!0;let i=b[m],u=C.h%12===i.h%12&&C.m===i.m,S=A+(u?1:0);u?vt():kt(),q({ok:u,ans:Z(i.h,i.m)}),u||D({h:i.h,m:i.m}),u&&I(S),setTimeout(()=>{if(q(null),B.current=!1,m+1>=a.total)ct(S);else{let R=b[m+1];D({h:R.sh,m:R.sm}),w(O=>O+1)}},u?750:1800)},dt=y?y.ok?"happy":"sad":"normal",z=a||Q[0];return r("div",{className:"app",children:[e("style",{children:St}),t==="title"&&r("div",{className:"screen title-screen",children:[typeof window<"u"&&!window.storage&&e("a",{className:"home-link",href:"../",children:"\u2039 \u30DB\u30FC\u30E0\u3078"}),r("div",{className:"title-head",children:[e("img",{src:mt,className:"title-hero",alt:"",draggable:!1}),e("p",{className:"app-title-sub",children:"\u3069\u3053\u3067\u3082"}),r("h1",{className:"app-title",children:["\u30DF\u30CB",e("span",{className:"title-accent",children:"\u3068\u3051\u3044"})]}),e("p",{className:"app-sub",children:"\u306F\u308A\u3092 \u304F\u308B\u304F\u308B \u3046\u3054\u304B\u3057\u3066 \u3058\u304B\u3093\u3092 \u3064\u304F\u308D\u3046"})]}),e("div",{className:"level-list",children:Q.map(i=>r("button",{className:"level-btn",style:{"--c":i.color,"--soft":i.soft,"--deep":i.deep},onClick:()=>ot(i),children:[r("span",{className:"level-text",children:[r("span",{className:"level-name",children:["\u30EC\u30D9\u30EB",i.lv]}),r("span",{className:"level-sub",children:[i.theme,"\uFF08",i.sub,"\uFF09"]}),r("span",{className:"level-best",children:["\u3058\u3053\u30D9\u30B9\u30C8\uFF1A",o[`lv${i.lv}`]!=null?e("b",{children:tt(o[`lv${i.lv}`])}):e("i",{children:"\u307E\u3060 \u304D\u308D\u304F\u304C \u306A\u3044\u3088"})]})]}),e("span",{className:"level-go",children:"\u25B6"})]},i.lv))}),e("button",{className:"reset-btn",onClick:()=>g(!0),children:"\u304D\u308D\u304F\u3092 \u305C\u3093\u3076 \u3051\u3059"}),c&&e("div",{className:"quit-overlay",children:r("div",{className:"quit-box",children:[r("p",{className:"quit-text",children:["\u3058\u3053\u30D9\u30B9\u30C8\u306E \u304D\u308D\u304F\u3092",e("br",{}),"\u305C\u3093\u3076 \u3051\u3057\u3066\u3082 \u3044\u3044\uFF1F",e("br",{}),e("small",{children:"\u3044\u3061\u3069 \u3051\u3059\u3068 \u3082\u3068\u306B \u3082\u3069\u305B\u306A\u3044\u3088"})]}),r("div",{className:"quit-btns",children:[e("button",{className:"quit-no",onClick:()=>g(!1),children:"\u3051\u3055\u306A\u3044"}),e("button",{className:"quit-yes",onClick:lt,children:"\u3051\u3059"})]})]})})]}),t==="countdown"&&a&&r("div",{className:"screen count-screen",style:{"--c":z.color,"--soft":z.soft,"--deep":z.deep},children:[e("div",{className:"count-chara",children:e(X,{chara:a.chara,mood:"normal",size:120})}),r("p",{className:"count-cheer",children:[V[a.chara],"\u3068 \u3044\u3063\u3057\u3087\u306B \u304C\u3093\u3070\u308D\u3046\uFF01"]}),r("p",{className:"count-label",children:["\u30EC\u30D9\u30EB",a.lv]}),e("div",{className:`count-num ${s===0?"go":""}`,children:s>0?s:"\u30B9\u30BF\u30FC\u30C8\uFF01"},s)]}),t==="play"&&a&&b[m]&&r("div",{className:"screen play-screen",style:{"--c":z.color,"--soft":z.soft,"--deep":z.deep},children:[r("div",{className:"hud",children:[r("span",{className:"hud-count",children:[e("b",{children:m+1})," / ",a.total," \u3082\u3093"]}),r("span",{className:"hud-right",children:[e("span",{className:"hud-time",children:xt(_)}),e("button",{className:"quit-btn",onClick:rt,children:"\u3084\u3081\u308B"})]})]}),e("div",{className:"progress",children:e("div",{className:"progress-bar",style:{width:`${(m+1)/a.total*100}%`}})}),r("div",{className:"talk-row",children:[e("div",{className:`talk-chara ${y?y.ok?"hop":"shake":""}`,children:e(X,{chara:a.chara,mood:dt,size:76})}),r("div",{className:"bubble",children:["\u300C",e("b",{children:Z(b[m].h,b[m].m)}),"\u300D\u306B \u3057\u3066\u306D"]},m)]}),r("div",{className:"clock-area",children:[e(qt,{h:C.h,m:C.m,level:a.lv,hint:F,disabled:!!y,deep:z.deep,color:z.color,soft:z.soft,onChange:(i,u)=>D({h:i,m:u})}),F&&r("div",{className:"digital-hint",children:["\u3044\u307E ",bt(C.h,C.m)]}),y&&e("div",{className:`feedback ${y.ok?"ok":"ng"}`,children:e("span",{className:"fb-inner",children:y.ok?r(j,{children:[e("span",{className:"fb-mark",children:"\u2B55"})," \u305B\u3044\u304B\u3044\uFF01"]}):r(j,{children:[e("span",{className:"fb-mark",children:"\u274C"})," \u3046\u301C\u3093\u2026 \u3053\u305F\u3048\u306F ",y.ans," \u3060\u3088"]})})})]},`c${m}`),r("div",{className:"clock-controls",children:[r("button",{className:`hint-btn ${F?"on":""}`,onClick:()=>H(!F),children:["\u30D2\u30F3\u30C8",F?"ON":"OFF"]}),e("button",{className:"ok-btn",onClick:pt,disabled:!!y,children:"\u3053\u308C\u3067 OK\uFF01"})]}),h&&e("div",{className:"quit-overlay",children:r("div",{className:"quit-box",children:[e(X,{chara:a.chara,mood:"sad",size:84}),r("p",{className:"quit-text",children:["\u307B\u3093\u3068\u3046\u306B \u3084\u3081\u308B\uFF1F",e("br",{}),e("small",{children:"\u3068\u3061\u3085\u3046\u3067 \u3084\u3081\u308B\u3068 \u304D\u308D\u304F\u306F \u306E\u3053\u3089\u306A\u3044\u3088"})]}),r("div",{className:"quit-btns",children:[e("button",{className:"quit-no",onClick:it,children:"\u3064\u3065\u3051\u308B"}),e("button",{className:"quit-yes",onClick:st,children:"\u3084\u3081\u308B"})]})]})})]}),t==="result"&&a&&r("div",{className:"screen result-screen",style:{"--c":z.color,"--soft":z.soft,"--deep":z.deep},children:[A===a.total&&e("div",{className:"confetti",children:Array.from({length:24}).map((i,u)=>e("span",{style:{"--i":u,"--cc":["#F48BB0","#8FC7E8","#8FD6A0","#B9A5E8","#FFD97A","#F6AC6B"][u%6]}},u))}),r("div",{className:"result-panel",children:[e("div",{className:"result-chara",children:e(X,{chara:a.chara,mood:"happy",size:120})}),e("h2",{className:"result-title",children:A===a.total?r(j,{children:["\u305C\u3093\u3076 \u305B\u3044\u304B\u3044\uFF01",e("br",{}),"\u3059\u3054\u30FC\u3044\uFF01"]}):r(j,{children:["\u3055\u3044\u3054\u307E\u3067 \u304C\u3093\u3070\u3063\u305F\u306D\uFF01",e("br",{}),"\u3064\u304E\u306F \u307E\u3093\u3066\u3093\u3092 \u3081\u3056\u305D\u3046\uFF01"]})}),r("p",{className:"result-cheer",children:[V[a.chara],"\u3082 \u304A\u304A\u3088\u308D\u3053\u3073\uFF01"]}),r("p",{className:"result-score",children:[a.total,"\u3082\u3093\u3061\u3085\u3046 ",r("b",{children:[A,"\u3082\u3093"]})," \u305B\u3044\u304B\u3044\uFF01"]}),e("p",{className:"result-time-label",children:"\u304B\u304B\u3063\u305F \u3058\u304B\u3093"}),e("div",{className:"result-time",children:tt(_)}),P&&e("div",{className:"new-best",children:"\u3058\u3053\u30D9\u30B9\u30C8 \u3053\u3046\u3057\u3093\uFF01 \u304A\u3081\u3067\u3068\u3046\uFF01"})]}),e("button",{className:"again-btn",onClick:()=>n("title"),children:"\u3082\u3046\u3044\u3061\u3069 \u3042\u305D\u3076"})]})]})}var St=`
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

.title-hero { width: min(64vw, 240px); height: auto; display: block; margin-bottom: 4px; }
.clock-area {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.clock-svg {
  cursor: grab;
  width: min(76vw, 300px);
  height: auto;
  touch-action: none;
  display: block;
}
.digital-hint {
  background: var(--panel);
  border-radius: 99px;
  padding: 4px 16px;
  font-size: 15px;
  font-weight: 900;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
}
.clock-controls { display: flex; gap: 8px; width: 100%; margin-top: auto; }
.hint-btn {
  flex-shrink: 0;
  border: 1.5px solid var(--line);
  border-radius: 18px;
  padding: 0 16px;
  height: 60px;
  background: #fff;
  color: var(--sub);
  font-family: inherit;
  font-size: 13px;
  font-weight: 900;
  cursor: pointer;
}
.hint-btn.on { border-color: var(--action); color: var(--action); }
.hint-btn:active { background: var(--panel); }
`;import{jsx as $t}from"react/jsx-runtime";Dt(document.getElementById("root")).render($t(U,{}));
