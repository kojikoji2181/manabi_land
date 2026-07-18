import"react";import{createRoot as Ae}from"react-dom/client";import{useState as u,useEffect as R,useRef as q,useCallback as ue}from"react";import{Fragment as M,jsx as e,jsxs as o}from"react/jsx-runtime";var B="todofuken-best-times",N=[{kana:"\u307B\u3063\u304B\u3044\u3069\u3046",kanji:"\u5317\u6D77\u9053",region:"hokutou"},{kana:"\u3042\u304A\u3082\u308A",kanji:"\u9752\u68EE",region:"hokutou"},{kana:"\u3044\u308F\u3066",kanji:"\u5CA9\u624B",region:"hokutou"},{kana:"\u307F\u3084\u304E",kanji:"\u5BAE\u57CE",region:"hokutou"},{kana:"\u3042\u304D\u305F",kanji:"\u79CB\u7530",region:"hokutou"},{kana:"\u3084\u307E\u304C\u305F",kanji:"\u5C71\u5F62",region:"hokutou"},{kana:"\u3075\u304F\u3057\u307E",kanji:"\u798F\u5CF6",region:"hokutou"},{kana:"\u3044\u3070\u3089\u304D",kanji:"\u8328\u57CE",region:"kanto"},{kana:"\u3068\u3061\u304E",kanji:"\u6803\u6728",region:"kanto"},{kana:"\u3050\u3093\u307E",kanji:"\u7FA4\u99AC",region:"kanto"},{kana:"\u3055\u3044\u305F\u307E",kanji:"\u57FC\u7389",region:"kanto"},{kana:"\u3061\u3070",kanji:"\u5343\u8449",region:"kanto"},{kana:"\u3068\u3046\u304D\u3087\u3046",kanji:"\u6771\u4EAC",region:"kanto"},{kana:"\u304B\u306A\u304C\u308F",kanji:"\u795E\u5948\u5DDD",region:"kanto"},{kana:"\u306B\u3044\u304C\u305F",kanji:"\u65B0\u6F5F",region:"chubu"},{kana:"\u3068\u3084\u307E",kanji:"\u5BCC\u5C71",region:"chubu"},{kana:"\u3044\u3057\u304B\u308F",kanji:"\u77F3\u5DDD",region:"chubu"},{kana:"\u3075\u304F\u3044",kanji:"\u798F\u4E95",region:"chubu"},{kana:"\u3084\u307E\u306A\u3057",kanji:"\u5C71\u68A8",region:"chubu"},{kana:"\u306A\u304C\u306E",kanji:"\u9577\u91CE",region:"chubu"},{kana:"\u304E\u3075",kanji:"\u5C90\u961C",region:"chubu"},{kana:"\u3057\u305A\u304A\u304B",kanji:"\u9759\u5CA1",region:"chubu"},{kana:"\u3042\u3044\u3061",kanji:"\u611B\u77E5",region:"chubu"},{kana:"\u307F\u3048",kanji:"\u4E09\u91CD",region:"kinki"},{kana:"\u3057\u304C",kanji:"\u6ECB\u8CC0",region:"kinki"},{kana:"\u304D\u3087\u3046\u3068",kanji:"\u4EAC\u90FD",region:"kinki"},{kana:"\u304A\u304A\u3055\u304B",kanji:"\u5927\u962A",region:"kinki"},{kana:"\u3072\u3087\u3046\u3054",kanji:"\u5175\u5EAB",region:"kinki"},{kana:"\u306A\u3089",kanji:"\u5948\u826F",region:"kinki"},{kana:"\u308F\u304B\u3084\u307E",kanji:"\u548C\u6B4C\u5C71",region:"kinki"},{kana:"\u3068\u3063\u3068\u308A",kanji:"\u9CE5\u53D6",region:"chushi"},{kana:"\u3057\u307E\u306D",kanji:"\u5CF6\u6839",region:"chushi"},{kana:"\u304A\u304B\u3084\u307E",kanji:"\u5CA1\u5C71",region:"chushi"},{kana:"\u3072\u308D\u3057\u307E",kanji:"\u5E83\u5CF6",region:"chushi"},{kana:"\u3084\u307E\u3050\u3061",kanji:"\u5C71\u53E3",region:"chushi"},{kana:"\u3068\u304F\u3057\u307E",kanji:"\u5FB3\u5CF6",region:"chushi"},{kana:"\u304B\u304C\u308F",kanji:"\u9999\u5DDD",region:"chushi"},{kana:"\u3048\u3072\u3081",kanji:"\u611B\u5A9B",region:"chushi"},{kana:"\u3053\u3046\u3061",kanji:"\u9AD8\u77E5",region:"chushi"},{kana:"\u3075\u304F\u304A\u304B",kanji:"\u798F\u5CA1",region:"kyuoki"},{kana:"\u3055\u304C",kanji:"\u4F50\u8CC0",region:"kyuoki"},{kana:"\u306A\u304C\u3055\u304D",kanji:"\u9577\u5D0E",region:"kyuoki"},{kana:"\u304F\u307E\u3082\u3068",kanji:"\u718A\u672C",region:"kyuoki"},{kana:"\u304A\u304A\u3044\u305F",kanji:"\u5927\u5206",region:"kyuoki"},{kana:"\u307F\u3084\u3056\u304D",kanji:"\u5BAE\u5D0E",region:"kyuoki"},{kana:"\u304B\u3054\u3057\u307E",kanji:"\u9E7F\u5150\u5CF6",region:"kyuoki"},{kana:"\u304A\u304D\u306A\u308F",kanji:"\u6C96\u7E04",region:"kyuoki"}],de={\u307B\u3063\u304B\u3044\u3069\u3046:"/images/pref/1.webp",\u3042\u304A\u3082\u308A:"/images/pref/2.webp",\u3044\u308F\u3066:"/images/pref/3.webp",\u307F\u3084\u304E:"/images/pref/4.webp",\u3042\u304D\u305F:"/images/pref/5.webp",\u3084\u307E\u304C\u305F:"/images/pref/6.webp",\u3075\u304F\u3057\u307E:"/images/pref/7.webp",\u3044\u3070\u3089\u304D:"/images/pref/8.webp",\u3068\u3061\u304E:"/images/pref/9.webp",\u3050\u3093\u307E:"/images/pref/10.webp",\u3055\u3044\u305F\u307E:"/images/pref/11.webp",\u3061\u3070:"/images/pref/12.webp",\u3068\u3046\u304D\u3087\u3046:"/images/pref/13.webp",\u304B\u306A\u304C\u308F:"/images/pref/14.webp",\u306B\u3044\u304C\u305F:"/images/pref/15.webp",\u3068\u3084\u307E:"/images/pref/16.webp",\u3044\u3057\u304B\u308F:"/images/pref/17.webp",\u3075\u304F\u3044:"/images/pref/18.webp",\u3084\u307E\u306A\u3057:"/images/pref/19.webp",\u306A\u304C\u306E:"/images/pref/20.webp",\u304E\u3075:"/images/pref/21.webp",\u3057\u305A\u304A\u304B:"/images/pref/22.webp",\u3042\u3044\u3061:"/images/pref/23.webp",\u307F\u3048:"/images/pref/24.webp",\u3057\u304C:"/images/pref/25.webp",\u304D\u3087\u3046\u3068:"/images/pref/26.webp",\u304A\u304A\u3055\u304B:"/images/pref/27.webp",\u3072\u3087\u3046\u3054:"/images/pref/28.webp",\u306A\u3089:"/images/pref/29.webp",\u308F\u304B\u3084\u307E:"/images/pref/30.webp",\u3068\u3063\u3068\u308A:"/images/pref/31.webp",\u3057\u307E\u306D:"/images/pref/32.webp",\u304A\u304B\u3084\u307E:"/images/pref/33.webp",\u3072\u308D\u3057\u307E:"/images/pref/34.webp",\u3084\u307E\u3050\u3061:"/images/pref/35.webp",\u3068\u304F\u3057\u307E:"/images/pref/36.webp",\u304B\u304C\u308F:"/images/pref/37.webp",\u3048\u3072\u3081:"/images/pref/38.webp",\u3053\u3046\u3061:"/images/pref/39.webp",\u3075\u304F\u304A\u304B:"/images/pref/40.webp",\u3055\u304C:"/images/pref/41.webp",\u306A\u304C\u3055\u304D:"/images/pref/42.webp",\u304F\u307E\u3082\u3068:"/images/pref/43.webp",\u304A\u304A\u3044\u305F:"/images/pref/44.webp",\u307F\u3084\u3056\u304D:"/images/pref/45.webp",\u304B\u3054\u3057\u307E:"/images/pref/46.webp",\u304A\u304D\u306A\u308F:"/images/pref/47.webp"},fe="/images/japan_map.webp",O=[{id:"hokutou",name:"\u307B\u3063\u304B\u3044\u3069\u3046\u30FB\u3068\u3046\u307B\u304F",chara:"luna",color:"#A0CFA3",soft:"#DBEDDC"},{id:"kanto",name:"\u304B\u3093\u3068\u3046",chara:"makami",color:"#F4A68F",soft:"#FBDDD4"},{id:"chubu",name:"\u3061\u3085\u3046\u3076",chara:"tarte",color:"#AEBBC3",soft:"#E0E5E8"},{id:"kinki",name:"\u304D\u3093\u304D",chara:"emma",color:"#8FC2EA",soft:"#D4E8F7"},{id:"chushi",name:"\u3061\u3085\u3046\u3054\u304F\u30FB\u3057\u3053\u304F",chara:"luna",color:"#E88BAA",soft:"#F6D3DF"},{id:"kyuoki",name:"\u304D\u3085\u3046\u3057\u3085\u3046\u30FB\u304A\u304D\u306A\u308F",chara:"makami",color:"#E0E79A",soft:"#F3F6D9"},{id:"zenkoku",name:"\u305C\u3093\u3053\u304F\u30DF\u30C3\u30AF\u30B9",chara:"tarte",color:"#8FD0C6",soft:"#E6F6F3",mix:!0}],U={luna:"\u30EB\u30CA",makami:"\u30DE\u30AB\u30DF",tarte:"\u30BF\u30EB\u30C8",emma:"\u30A8\u30DE"},L=10,me={luna:{normal:"/images/chara/luna_normal.webp",happy:"/images/chara/luna_happy.webp",sad:"/images/chara/luna_sad.webp"},makami:{normal:"/images/chara/makami_normal.webp",happy:"/images/chara/makami_happy.webp",sad:"/images/chara/makami_sad.webp"},tarte:{normal:"/images/chara/tarte_normal.webp",happy:"/images/chara/tarte_happy.webp",sad:"/images/chara/tarte_sad.webp"},emma:{normal:"/images/chara/emma_normal.webp",happy:"/images/chara/emma_happy.webp",sad:"/images/chara/emma_sad.webp"}};function D({chara:n,mood:t="normal",size:r=60}){let l=me[n]||{},i=l[t]||l.normal||"";return i?e("img",{src:i,width:r,height:r,alt:"",draggable:!1,style:{display:"block",objectFit:"contain",pointerEvents:"none"}}):null}function S(n){let t=[...n];for(let r=t.length-1;r>0;r--){let l=Math.floor(Math.random()*(r+1));[t[r],t[l]]=[t[l],t[r]]}return t}function ge(n){let t=n==="zenkoku",r=t?N:N.filter(i=>i.region===n);return(t?S(N).slice(0,L):S(r)).map(i=>{let c=N.filter(d=>d.region===i.region&&d.kana!==i.kana);c.length<2&&(c=N.filter(d=>d.kana!==i.kana));let p=S(c).slice(0,2);return{ans:i,choices:S([i,...p])}})}function be({pref:n}){return e("img",{src:de[n.kana],className:"pref-svg",alt:"",draggable:!1})}var ke=n=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`,$=n=>{let t=Math.floor(n/60),r=Math.floor(n%60);return t>0?`${t}\u3075\u3093${r}\u3073\u3087\u3046`:`${r}\u3073\u3087\u3046`},I=null;function H(){if(!I){let n=window.AudioContext||window.webkitAudioContext;n&&(I=new n)}return I}function g(n,t,r,l="sine",i=.18){let c=H();if(!c)return;let p=c.createOscillator(),d=c.createGain();p.type=l,p.frequency.value=n,d.gain.setValueAtTime(0,c.currentTime+t),d.gain.linearRampToValueAtTime(i,c.currentTime+t+.01),d.gain.exponentialRampToValueAtTime(.001,c.currentTime+t+r),p.connect(d).connect(c.destination),p.start(c.currentTime+t),p.stop(c.currentTime+t+r+.05)}var he=()=>{g(880,0,.09),g(1100,.1,.09),g(1320,.2,.14)},xe=()=>g(220,0,.3,"triangle",.1),we=()=>g(660,0,.12),ve=()=>{g(660,0,.1),g(880,.12,.2)},ye=()=>g(900,0,.06,"triangle",.1),Ne=()=>{[523,659,784,1047].forEach((n,t)=>g(n,t*.13,.15)),g(1319,.55,.4)};async function je(){try{if(typeof window<"u"&&window.storage){let t=await window.storage.get(B);return t?JSON.parse(t.value):{}}let n=localStorage.getItem(B);return n?JSON.parse(n):{}}catch{return{}}}async function Z(n){try{typeof window<"u"&&window.storage?await window.storage.set(B,JSON.stringify(n)):localStorage.setItem(B,JSON.stringify(n))}catch(t){console.error("save failed",t)}}function ze(n){try{let t="gakushu-log-v1",r=localStorage.getItem(t),l=r?JSON.parse(r):[];for(l.push(n);l.length>500;)l.shift();localStorage.setItem(t,JSON.stringify(l))}catch{}}var Fe=()=>{let n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`};function P(){let[n,t]=u("title"),[r,l]=u({}),[i,c]=u(null),[p,d]=u(3),[V,W]=u([]),[h,Y]=u(0),[ee,C]=u(null),[X,j]=u(0),[m,z]=u(null),[F,T]=u(0),[ae,K]=u(!1),[G,E]=u(!1),[ne,_]=u(!1),v=q(0),x=q(null),y=q(!1),J=q(0);R(()=>{je().then(l)},[]),R(()=>()=>clearInterval(x.current),[]);let Q=a=>{H();let s=ge(a.id);c({...a,key:a.id,total:s.length}),W(s),Y(0),C(null),T(0),K(!1),z(null),E(!1),y.current=!1,d(3),t("countdown")},te=()=>{G||(clearInterval(x.current),J.current=Date.now(),E(!0))},ie=()=>{v.current+=Date.now()-J.current,x.current=setInterval(()=>{j((Date.now()-v.current)/1e3)},100),E(!1)},oe=()=>{clearInterval(x.current),E(!1),z(null),y.current=!1,t("title")},re=async()=>{l({}),await Z({}),_(!1)};R(()=>{if(n!=="countdown")return;if(p>0){we();let s=setTimeout(()=>d(f=>f-1),1e3);return()=>clearTimeout(s)}ve();let a=setTimeout(()=>{v.current=Date.now(),j(0),x.current=setInterval(()=>{j((Date.now()-v.current)/1e3)},100),t("play")},800);return()=>clearTimeout(a)},[n,p]);let se=ue(async a=>{clearInterval(x.current);let s=Math.round((Date.now()-v.current)/1e3);j(s);let f=r[i.key],w=!1;if(f==null||s<f){w=!0;let A={...r,[i.key]:s};l(A),await Z(A)}K(w),T(a),ze({d:Fe(),app:"todofuken",correct:a,total:i.total,sec:s}),t("result"),setTimeout(Ne,300)},[r,i]),b=V[h],le=a=>{if(y.current||!b)return;y.current=!0,ye(),C(a.kana);let s=a.kana===b.ans.kana,f=F+(s?1:0);s?he():xe(),z({ok:s}),s&&T(f),setTimeout(()=>{z(null),C(null),y.current=!1,h+1>=i.total?se(f):Y(w=>w+1)},s?850:1900)},ce=m?m.ok?"happy":"sad":"normal",k=i||O[0];return o("div",{className:"app",children:[e("style",{children:Ee}),n==="title"&&o("div",{className:"screen title-screen",children:[typeof window<"u"&&!window.storage&&e("a",{className:"home-link",href:"../",children:"\u2039 \u30DB\u30FC\u30E0\u3078"}),o("div",{className:"title-head",children:[e("p",{className:"app-title-sub",children:"\u304B\u305F\u3061\u3067 \u3053\u305F\u3048\u308B"}),e("h1",{className:"app-title",children:"\u3068\u3069\u3046\u3075\u3051\u3093"})]}),o("div",{className:"course-map",children:[e("img",{src:fe,className:"map-ghost",alt:"\u306B\u307B\u3093\u3061\u305A",draggable:!1}),O.filter(a=>!a.mix).map(a=>{let s={hokutou:[81,16],kanto:[83,81],chubu:[58,42],kinki:[54,91],chushi:[25,50],kyuoki:[20,78]},[f,w]=s[a.id];return o("button",{className:"map-node",style:{left:`${f}%`,top:`${w}%`,"--c":a.color,"--soft":a.soft},onClick:()=>Q(a),children:[e("span",{className:"node-name",children:a.name.includes("\u30FB")?a.name.split("\u30FB").map((A,pe)=>e("span",{className:"node-line",children:A},pe)):a.name}),e("span",{className:"node-best",children:r[a.id]!=null?$(r[a.id]):"\u306F\u3058\u3081\u3066"})]},a.id)})]}),e("div",{className:"level-list",children:O.filter(a=>a.mix).map(a=>o("button",{className:"level-btn",style:{"--c":a.color,"--soft":a.soft},onClick:()=>Q(a),children:[o("span",{className:"level-text",children:[e("span",{className:"level-name",children:a.name}),o("span",{className:"level-sub",children:["\u305C\u3093\u3053\u304F\u304B\u3089 ",L,"\u3082\u3093"]}),o("span",{className:"level-best",children:["\u3058\u3053\u30D9\u30B9\u30C8\uFF1A",r[a.id]!=null?e("b",{children:$(r[a.id])}):e("i",{children:"\u307E\u3060 \u304D\u308D\u304F\u304C \u306A\u3044\u3088"})]})]}),e("span",{className:"level-go",children:"\u25B6"})]},a.id))}),e("button",{className:"reset-btn",onClick:()=>_(!0),children:"\u304D\u308D\u304F\u3092 \u305C\u3093\u3076 \u3051\u3059"}),ne&&e("div",{className:"quit-overlay",children:o("div",{className:"quit-box",children:[o("p",{className:"quit-text",children:["\u3058\u3053\u30D9\u30B9\u30C8\u306E \u304D\u308D\u304F\u3092",e("br",{}),"\u305C\u3093\u3076 \u3051\u3057\u3066\u3082 \u3044\u3044\uFF1F",e("br",{}),e("small",{children:"\u3044\u3061\u3069 \u3051\u3059\u3068 \u3082\u3068\u306B \u3082\u3069\u305B\u306A\u3044\u3088"})]}),o("div",{className:"quit-btns",children:[e("button",{className:"quit-no",onClick:()=>_(!1),children:"\u3051\u3055\u306A\u3044"}),e("button",{className:"quit-yes",onClick:re,children:"\u3051\u3059"})]})]})})]}),n==="countdown"&&i&&o("div",{className:"screen count-screen",style:{"--c":k.color,"--soft":k.soft},children:[e("div",{className:"count-chara",children:e(D,{chara:i.chara,mood:"normal",size:120})}),o("p",{className:"count-cheer",children:[U[i.chara],"\u3068 \u3061\u305A\u306E \u305F\u3073\u306B \u3067\u304B\u3051\u3088\u3046\uFF01"]}),e("p",{className:"count-label",children:i.name}),e("div",{className:`count-num ${p===0?"go":""}`,children:p>0?p:"\u30B9\u30BF\u30FC\u30C8\uFF01"},p)]}),n==="play"&&i&&b&&o("div",{className:"screen play-screen",style:{"--c":k.color,"--soft":k.soft},children:[o("div",{className:"hud",children:[o("span",{className:"hud-count",children:[e("b",{children:h+1})," / ",i.total," \u3082\u3093"]}),o("span",{className:"hud-right",children:[e("span",{className:"hud-time",children:ke(X)}),e("button",{className:"quit-btn",onClick:te,children:"\u3084\u3081\u308B"})]})]}),e("div",{className:"progress",children:e("div",{className:"progress-bar",style:{width:`${(h+1)/i.total*100}%`}})}),o("div",{className:"talk-row",children:[e("div",{className:`talk-chara ${m?m.ok?"hop":"shake":""}`,children:e(D,{chara:i.chara,mood:ce,size:70})}),o("div",{className:"bubble",children:["\u3053\u306E \u304B\u305F\u3061\u306F ",e("b",{children:"\u3069\u3053"})," \u304B\u306A\uFF1F"]},h)]}),o("div",{className:"shape-area",children:[e(be,{pref:b.ans,color:k.color,soft:k.soft}),m&&e("div",{className:`feedback ${m.ok?"ok":"ng"}`,children:e("span",{className:"fb-inner",children:m.ok?o(M,{children:[e("span",{className:"fb-mark",children:"\u2B55"})," \u305B\u3044\u304B\u3044\uFF01",b.ans.kana]}):o(M,{children:[e("span",{className:"fb-mark",children:"\u274C"})," \u3046\u301C\u3093\u2026 \u3053\u305F\u3048\u306F ",b.ans.kana," \u3060\u3088"]})})})]},`s${h}`),e("div",{className:"choice-list",children:b.choices.map(a=>{let s=m&&a.kana===b.ans.kana,f=m&&ee===a.kana&&a.kana!==b.ans.kana;return o("button",{className:`choice-btn ${s?"is-ans":""} ${f?"is-wrong":""}`,onClick:()=>le(a),disabled:!!m,children:[e("span",{className:"choice-kana",children:a.kana}),e("span",{className:"choice-kanji",children:a.kanji})]},a.kana)})}),G&&e("div",{className:"quit-overlay",children:o("div",{className:"quit-box",children:[e(D,{chara:i.chara,mood:"sad",size:84}),o("p",{className:"quit-text",children:["\u307B\u3093\u3068\u3046\u306B \u3084\u3081\u308B\uFF1F",e("br",{}),e("small",{children:"\u3068\u3061\u3085\u3046\u3067 \u3084\u3081\u308B\u3068 \u304D\u308D\u304F\u306F \u306E\u3053\u3089\u306A\u3044\u3088"})]}),o("div",{className:"quit-btns",children:[e("button",{className:"quit-no",onClick:ie,children:"\u3064\u3065\u3051\u308B"}),e("button",{className:"quit-yes",onClick:oe,children:"\u3084\u3081\u308B"})]})]})})]}),n==="result"&&i&&o("div",{className:"screen result-screen",style:{"--c":k.color,"--soft":k.soft},children:[F===i.total&&e("div",{className:"confetti",children:Array.from({length:24}).map((a,s)=>e("span",{style:{"--i":s,"--cc":["#F48BB0","#8FC7E8","#8FD6A0","#B9A5E8","#FFD97A","#F6AC6B"][s%6]}},s))}),o("div",{className:"result-panel",children:[e("div",{className:"result-chara",children:e(D,{chara:i.chara,mood:"happy",size:120})}),e("h2",{className:"result-title",children:F===i.total?o(M,{children:["\u305C\u3093\u3076 \u305B\u3044\u304B\u3044\uFF01",e("br",{}),"\u3061\u305A\u306F\u304B\u305B\u3060\u306D\uFF01"]}):o(M,{children:["\u3055\u3044\u3054\u307E\u3067 \u304C\u3093\u3070\u3063\u305F\u306D\uFF01",e("br",{}),"\u3064\u304E\u306F \u307E\u3093\u3066\u3093\u3092 \u3081\u3056\u305D\u3046\uFF01"]})}),o("p",{className:"result-cheer",children:[U[i.chara],"\u3082 \u304A\u304A\u3088\u308D\u3053\u3073\uFF01"]}),o("p",{className:"result-score",children:[i.total,"\u3082\u3093\u3061\u3085\u3046 ",o("b",{children:[F,"\u3082\u3093"]})," \u305B\u3044\u304B\u3044\uFF01"]}),e("p",{className:"result-time-label",children:"\u304B\u304B\u3063\u305F \u3058\u304B\u3093"}),e("div",{className:"result-time",children:$(X)}),ae&&e("div",{className:"new-best",children:"\u3058\u3053\u30D9\u30B9\u30C8 \u3053\u3046\u3057\u3093\uFF01 \u304A\u3081\u3067\u3068\u3046\uFF01"})]}),e("button",{className:"again-btn",onClick:()=>t("title"),children:"\u3082\u3046\u3044\u3061\u3069 \u3042\u305D\u3076"})]})]})}var Ee=`
@import url('https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Kiwi+Maru:wght@400;500&family=M+PLUS+Rounded+1c:wght@500;700;800;900&display=swap');

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
  --c: #FFB7C9; --soft: #FFE3EA;
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

.title-screen { justify-content: flex-start; gap: 14px; padding-bottom: 32px; }
.title-head { display: flex; flex-direction: column; align-items: center; gap: 2px; margin-top: 2px; }
.app-title-sub { font-size: 12px; font-weight: 700; color: var(--sub); letter-spacing: 3px; }
.app-title { font-size: 26px; font-weight: 900; letter-spacing: 1px; color: var(--brand); line-height: 1.2; }
.title-accent { color: var(--brand); }
.app-sub { margin-top: 2px; font-size: 12px; font-weight: 700; color: var(--sub); }

.level-list { display: flex; flex-direction: column; gap: 10px; width: 100%; margin-top: 4px; }
.level-btn {
  position: relative;
  display: flex; align-items: center; gap: 12px;
  width: 100%;
  border: 1.5px solid var(--line);
  border-radius: 18px;
  padding: 12px 16px 12px 22px;
  background: #fff;
  font-family: inherit;
  color: var(--ink);
  cursor: pointer;
  text-align: left;
}
.level-btn::before {
  content: '';
  position: absolute;
  left: 9px; top: 12px; bottom: 12px;
  width: 5px;
  border-radius: 99px;
  background: var(--c);
}
.level-btn:active { background: var(--panel); }
.level-text { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; }
.level-name { font-size: 17px; font-weight: 900; color: var(--ink); }
.level-sub { font-size: 12px; font-weight: 700; color: var(--sub); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.level-best { font-size: 12px; font-weight: 700; color: var(--sub); }
.level-best b { color: var(--ink); font-variant-numeric: tabular-nums; }
.level-best i { font-style: normal; }
.level-go { font-size: 15px; color: var(--sub); flex-shrink: 0; }

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
.count-num.go { font-size: clamp(34px, 12vw, 50px); white-space: nowrap; color: var(--action); }

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

.progress { width: 100%; height: 6px; background: var(--line); border-radius: 99px; overflow: hidden; }
.progress-bar { height: 100%; border-radius: 99px; background: var(--c); transition: width .3s; }

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

.shape-area {
  position: relative;
  width: 100%;
  min-height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
}
.pref-svg { width: min(52vw, 210px); height: min(52vw, 210px); display: block; }

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

.choice-list { display: flex; flex-direction: column; gap: 9px; width: 100%; margin-top: auto; }
.choice-btn {
  display: flex; align-items: baseline; justify-content: center; gap: 8px;
  width: 100%;
  border: 2px solid var(--line);
  border-radius: 18px;
  padding: 13px 10px;
  background: #fff;
  font-family: inherit;
  color: var(--ink);
  cursor: pointer;
}
.choice-btn:active { background: var(--panel); }
.choice-btn:disabled { cursor: default; }
.choice-kana { font-size: 19px; font-weight: 900; }
.choice-kanji { font-size: 12px; font-weight: 700; color: var(--sub); }
.choice-btn.is-ans { border-color: var(--ok); background: #EAF7F0; }
.choice-btn.is-ans .choice-kana { color: var(--ok); }
.choice-btn.is-wrong { border-color: var(--ng); background: #FBEBEC; }
.choice-btn.is-wrong .choice-kana { color: var(--ng); }

.result-screen { justify-content: center; gap: 20px; }
.result-panel {
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

.course-map {
  position: relative;
  width: 100%;
  aspect-ratio: 640 / 503;
  margin-top: 4px;
  overflow: hidden;
}
.map-ghost {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: contain;
  opacity: .42;
  pointer-events: none;
  transform: translateX(12%) scale(1.08);
}
.map-node {
  position: absolute;
  transform: translate(-50%, -50%);
  width: max-content;
  border: 2px solid var(--c);
  border-radius: 14px 18px 13px 17px / 17px 13px 18px 14px;
  background: rgba(255,255,255,.93);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 1px;
  padding: 6px 9px;
  font-family: inherit;
  cursor: pointer;
  box-shadow: 0 2px 0 rgba(107,78,87,.14);
}
.map-node:active { transform: translate(-50%, calc(-50% + 2px)); box-shadow: none; }
.node-name {
  font-family: 'Darumadrop One', 'Kiwi Maru', sans-serif;
  font-weight: 400;
  font-size: 12.5px;
  color: var(--ink);
  letter-spacing: .5px;
  line-height: 1.3;
  text-align: center;
  white-space: nowrap;
}
.node-line { display: block; white-space: nowrap; }
.node-best { font-size: 9.5px; font-weight: 700; color: var(--sub); font-variant-numeric: tabular-nums; }
.pref-svg { object-fit: contain; }

/* \u307F\u3060\u3057\u306F \u3066\u304C\u304D\u304B\u3093\u306E \u3042\u308B Kiwi Maru */
.app-title-sub, .level-name, .count-cheer, .result-title, .bubble {
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
.ok-btn, .again-btn, .quit-btns .quit-no, .quit-btns .quit-yes, .quit-btn,
.count-num, .fb-inner, .result-title, .new-best, .reset-btn, .choice-kana {
  font-family: 'Darumadrop One', 'Kiwi Maru', sans-serif;
  font-weight: 400;
  letter-spacing: 1.5px;
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
`;import{jsx as qe}from"react/jsx-runtime";Ae(document.getElementById("root")).render(qe(P,{}));
