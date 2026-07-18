import"react";import{createRoot as _e}from"react-dom/client";import{useState as f,useEffect as Y,useRef as D,useCallback as ye}from"react";import{Fragment as z,jsx as e,jsxs as r}from"react/jsx-runtime";var j="okane-best-times",te={1:"/images/shop/1.webp",2:"/images/shop/2.webp",3:"/images/shop/3.webp",4:"/images/shop/4.webp"},ae=[{lv:1,iconEmoji:"\u{1F36D}",chara:"luna",shop:"\u304A\u304B\u3057\u3084\u3055\u3093",theme:"\u304A\u306A\u3058 \u304A\u304B\u306D\u3067 \u3074\u3063\u305F\u308A",total:5,color:"#FFB7C9",soft:"#FFE3EA",deep:"#E2607F",items:[{name:"\u3042\u3081",e:"\u{1F36C}"},{name:"\u307A\u308D\u307A\u308D\u30AD\u30E3\u30F3\u30C7\u30A3",e:"\u{1F36D}"},{name:"\u30C1\u30E7\u30B3",e:"\u{1F36B}"},{name:"\u30AF\u30C3\u30AD\u30FC",e:"\u{1F36A}"},{name:"\u30C9\u30FC\u30CA\u30C4",e:"\u{1F369}"},{name:"\u30B1\u30FC\u30AD",e:"\u{1F370}"},{name:"\u30D7\u30EA\u30F3",e:"\u{1F36E}"},{name:"\u30A2\u30A4\u30B9",e:"\u{1F366}"}]},{lv:2,iconEmoji:"\u270F\uFE0F",chara:"makami",shop:"\u3076\u3093\u307C\u3046\u3050\u3084\u3055\u3093",theme:"\u304F\u307F\u3042\u308F\u305B\u3066 \u3074\u3063\u305F\u308A",total:5,color:"#B9CFDE",soft:"#E9F1F7",deep:"#5B7E97",items:[{name:"\u3048\u3093\u3074\u3064",e:"\u270F\uFE0F"},{name:"\u30AF\u30EC\u30E8\u30F3",e:"\u{1F58D}\uFE0F"},{name:"\u30CE\u30FC\u30C8",e:"\u{1F4D3}"},{name:"\u3058\u3087\u3046\u304E",e:"\u{1F4CF}"},{name:"\u306F\u3055\u307F",e:"\u2702\uFE0F"},{name:"\u30DA\u30F3",e:"\u{1F58A}\uFE0F"},{name:"\u30B9\u30B1\u30C3\u30C1\u30D6\u30C3\u30AF",e:"\u{1F4D2}"},{name:"\u30B7\u30FC\u30EB",e:"\u{1F31F}"}]},{lv:3,iconEmoji:"\u{1F9F8}",chara:"tarte",shop:"\u304A\u3082\u3061\u3083\u3084\u3055\u3093",theme:"\u304A\u3055\u3064\u3092 \u3064\u304B\u304A\u3046",total:5,color:"#ABE0A2",soft:"#E5F6E0",deep:"#55A05C",items:[{name:"\u306C\u3044\u3050\u308B\u307F",e:"\u{1F9F8}"},{name:"\u30ED\u30DC\u30C3\u30C8",e:"\u{1F916}"},{name:"\u304A\u3082\u3061\u3083\u306E\u304F\u308B\u307E",e:"\u{1F697}"},{name:"\u30D1\u30BA\u30EB",e:"\u{1F9E9}"},{name:"\u30DC\u30FC\u30EB",e:"\u26BD"},{name:"\u3067\u3093\u3057\u3083",e:"\u{1F683}"},{name:"\u305F\u3053",e:"\u{1FA81}"},{name:"\u3064\u307F\u304D",e:"\u{1F7E5}"}]},{lv:4,iconEmoji:"\u{1F4D6}",chara:"emma",shop:"\u307B\u3093\u3084\u3055\u3093",theme:"\u304A\u3064\u308A\u306F \u3044\u304F\u3089\uFF1F",total:5,color:"#CBBBF2",soft:"#EDE7FB",deep:"#7E5FC7",items:[{name:"\u3048\u307B\u3093",e:"\u{1F4D6}"},{name:"\u305A\u304B\u3093",e:"\u{1F4DA}"},{name:"\u307E\u3093\u304C",e:"\u{1F4D5}"},{name:"\u3082\u306E\u304C\u305F\u308A\u306E\u307B\u3093",e:"\u{1F4D8}"},{name:"\u306C\u308A\u3048",e:"\u{1F3A8}"},{name:"\u306B\u3063\u304D\u3061\u3087\u3046",e:"\u{1F4D4}"}]}],_={luna:"\u30EB\u30CA",makami:"\u30DE\u30AB\u30DF",tarte:"\u30BF\u30EB\u30C8",emma:"\u30A8\u30DE"},ke={luna:{normal:"/images/chara/luna_normal.webp",happy:"/images/chara/luna_happy.webp",sad:"/images/chara/luna_sad.webp"},makami:{normal:"/images/chara/makami_normal.webp",happy:"/images/chara/makami_happy.webp",sad:"/images/chara/makami_sad.webp"},tarte:{normal:"/images/chara/tarte_normal.webp",happy:"/images/chara/tarte_happy.webp",sad:"/images/chara/tarte_sad.webp"},emma:{normal:"/images/chara/emma_normal.webp",happy:"/images/chara/emma_happy.webp",sad:"/images/chara/emma_sad.webp"}};function T({chara:t,mood:o="normal",size:i=60}){let l=ke[t]||{},n=l[o]||l.normal||"";return n?e("img",{src:n,width:i,height:i,alt:"",draggable:!1,style:{display:"block",objectFit:"contain",pointerEvents:"none"}}):null}var Ne={1:{bg:"#E8ECEF",edge:"#C7CDD2",hole:!1,text:"#7A828A"},5:{bg:"#E3C765",edge:"#C4A33F",hole:!0,text:"#8A6D1F"},10:{bg:"#CE9160",edge:"#A96F42",hole:!1,text:"#7C4E2A"},50:{bg:"#E1E5E9",edge:"#BFC6CC",hole:!0,text:"#6E767E"},100:{bg:"#E1E5E9",edge:"#BFC6CC",hole:!1,text:"#6E767E"},500:{bg:"#DCD5B0",edge:"#B8AF7F",hole:!1,text:"#7D7443"}};function ne({v:t,size:o=56,onClick:i}){let l=i?"button":"span";if(t===1e3)return r(l,{className:"money bill",onClick:i,style:{width:o*1.9,height:o},children:[e("span",{className:"bill-num",style:{fontSize:o*.34},children:"1000"}),e("span",{className:"bill-en",style:{fontSize:o*.18},children:"\u3048\u3093"})]});let n=Ne[t];return r(l,{className:"money coin",onClick:i,style:{width:o,height:o,background:n.bg,boxShadow:`inset 0 0 0 ${Math.max(3,o*.07)}px ${n.edge}, 0 3px 0 rgba(107,78,87,.18)`,color:n.text,fontSize:t>=100?o*.3:o*.36},children:[n.hole&&e("span",{className:"coin-hole",style:{width:o*.24,height:o*.24}}),e("span",{className:"coin-num",children:t})]})}var x=(t,o)=>Math.floor(Math.random()*(o-t+1))+t,A=t=>t[Math.floor(Math.random()*t.length)];function I(t){let o=[],i=t;for(let l of[1e3,500,100,50,10,5,1])Math.floor(i/l)>0&&(o.push(l),i=i%l);return o}function ze(t,o){let i=A(o);if(t===1){let s=A([1,10,100]),p=x(2,9);return{target:s*p,wallet:[s],item:i,pay:null,price:null}}if(t===2){let s,p,k=0;do s=Math.random()<.5?x(11,99):x(11,39)*10,p=I(s),k++;while((p.length<2||p.length>3)&&k<50);return{target:s,wallet:p,item:i,pay:null,price:null}}if(t===3){let s=1e3+x(1,9)*100+A([0,0,50])+A([0,x(1,4)*10]),p=I(s);return{target:s,wallet:p,item:i,pay:null,price:null}}let l=A([100,500,1e3]),n;l===100?n=x(1,9)*10:l===500?n=x(11,49)*10:n=x(11,99)*10;let d=l-n;return{target:d,wallet:I(d),item:i,pay:l,price:n}}function Ce(t,o){let i=[],l=t;for(let n of[...o].sort((d,s)=>s-d)){let d=Math.floor(l/n);l=l%n;let s=n===1e3?1:x(2,3);for(let p=0;p<d+s;p++)i.push({id:`${n}-${p}`,v:n})}return i}function Ee(t,o,i){let l=[],n=-1;for(let d=0;d<o;d++){let s,p=0;do s=ze(t,i),p++;while(s.target===n&&p<30);n=s.target,s.stock=Ce(s.target,s.wallet),l.push(s)}return l}var Fe=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,"0")}`,oe=t=>{let o=Math.floor(t/60),i=Math.floor(t%60);return o>0?`${o}\u3075\u3093${i}\u3073\u3087\u3046`:`${i}\u3073\u3087\u3046`},X=null;function K(){if(!X){let t=window.AudioContext||window.webkitAudioContext;t&&(X=new t)}return X}function g(t,o,i,l="sine",n=.18){let d=K();if(!d)return;let s=d.createOscillator(),p=d.createGain();s.type=l,s.frequency.value=t,p.gain.setValueAtTime(0,d.currentTime+o),p.gain.linearRampToValueAtTime(n,d.currentTime+o+.01),p.gain.exponentialRampToValueAtTime(.001,d.currentTime+o+i),s.connect(p).connect(d.destination),s.start(d.currentTime+o),s.stop(d.currentTime+o+i+.05)}function Ae(t=.09,o=.12){let i=K();if(!i)return;let l=i.createBuffer(1,Math.floor(i.sampleRate*t),i.sampleRate),n=l.getChannelData(0);for(let p=0;p<n.length;p++)n[p]=(Math.random()*2-1)*(1-p/n.length);let d=i.createBufferSource();d.buffer=l;let s=i.createGain();s.gain.value=o,d.connect(s).connect(i.destination),d.start()}var qe=()=>{g(2500,0,.05,"triangle",.12),g(1900,.05,.09,"triangle",.1)},Be=()=>Ae(.1,.1),re=()=>g(500,0,.06,"triangle",.08),Se=()=>{g(988,0,.13),g(1319,.15,.3)},Me=()=>g(220,0,.3,"triangle",.1),De=()=>g(660,0,.12),Te=()=>{g(660,0,.1),g(880,.12,.2)},je=()=>{[523,659,784,1047].forEach((t,o)=>g(t,o*.13,.15)),g(1319,.55,.4)};async function $e(){try{if(typeof window<"u"&&window.storage){let o=await window.storage.get(j);return o?JSON.parse(o.value):{}}let t=localStorage.getItem(j);return t?JSON.parse(t):{}}catch{return{}}}async function ie(t){try{typeof window<"u"&&window.storage?await window.storage.set(j,JSON.stringify(t)):localStorage.setItem(j,JSON.stringify(t))}catch(o){console.error("save failed",o)}}function Oe(t){try{let o="gakushu-log-v1",i=localStorage.getItem(o),l=i?JSON.parse(i):[];for(l.push(t);l.length>500;)l.shift();localStorage.setItem(o,JSON.stringify(l))}catch{}}var Re=()=>{let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`};function G(){let[t,o]=f("title"),[i,l]=f({}),[n,d]=f(null),[s,p]=f(3),[k,se]=f([]),[w,P]=f(0),[y,C]=f([]),[J,E]=f([]),[Q,q]=f(0),[b,B]=f(null),[S,$]=f(0),[le,H]=f(!1),[V,M]=f(!1),[ce,O]=f(!1),F=D(0),N=D(null),v=D(!1),Z=D(0);Y(()=>{$e().then(l)},[]),Y(()=>()=>clearInterval(N.current),[]);let pe=a=>{K(),d({...a,key:`lv${a.lv}`});let c=Ee(a.lv,a.total,a.items);se(c),P(0),C([]),E([...c[0].stock]),$(0),H(!1),B(null),M(!1),v.current=!1,p(3),o("countdown")},de=()=>{V||(clearInterval(N.current),Z.current=Date.now(),M(!0))},ue=()=>{F.current+=Date.now()-Z.current,N.current=setInterval(()=>{q((Date.now()-F.current)/1e3)},100),M(!1)},fe=()=>{clearInterval(N.current),M(!1),B(null),v.current=!1,o("title")},me=async()=>{l({}),await ie({}),O(!1)};Y(()=>{if(t!=="countdown")return;if(s>0){De();let c=setTimeout(()=>p(m=>m-1),1e3);return()=>clearTimeout(c)}Te();let a=setTimeout(()=>{F.current=Date.now(),q(0),N.current=setInterval(()=>{q((Date.now()-F.current)/1e3)},100),o("play")},800);return()=>clearTimeout(a)},[t,s]);let ge=ye(async a=>{clearInterval(N.current);let c=Math.round((Date.now()-F.current)/1e3);q(c);let m=i[n.key],L=!1;if(m==null||c<m){L=!0;let ee={...i,[n.key]:c};l(ee),await ie(ee)}H(L),$(a),Oe({d:Re(),app:"okane",correct:a,total:n.total,sec:c}),o("result"),setTimeout(je,300)},[i,n]),R=y.reduce((a,c)=>a+c.v,0),u=k[w],U=a=>[...a].sort((c,m)=>m.v-c.v||(c.id<m.id?-1:1)),be=a=>{v.current||(a.v===1e3?Be():qe(),E(c=>c.filter(m=>m.id!==a.id)),C(c=>[...c,a]))},he=a=>{v.current||(re(),C(c=>c.filter(m=>m.id!==a.id)),E(c=>U([...c,a])))},xe=()=>{v.current||y.length===0||(re(),E(a=>U([...a,...y])),C([]))},ve=()=>{if(v.current||!u)return;v.current=!0;let a=R===u.target,c=S+(a?1:0);a?Se():Me(),B({ok:a}),a&&$(c),setTimeout(()=>{B(null),C([]),v.current=!1,w+1>=n.total?ge(c):(E([...k[w+1].stock]),P(m=>m+1))},a?850:1900)},we=b?b.ok?"happy":"sad":"normal",h=n||ae[0],W=u&&R>u.target;return r("div",{className:"app",children:[e("style",{children:Ye}),t==="title"&&r("div",{className:"screen title-screen",children:[typeof window<"u"&&!window.storage&&e("a",{className:"home-link",href:"../",children:"\u2039 \u30DB\u30FC\u30E0\u3078"}),r("div",{className:"title-head",children:[e("p",{className:"app-title-sub",children:"\u304A\u304B\u3044\u3082\u306E"}),r("h1",{className:"app-title",children:["\u304A\u304B\u306D",e("span",{className:"title-accent",children:"\u30DE\u30B9\u30BF\u30FC"})]})]}),e("div",{className:"level-grid",children:ae.map(a=>r("button",{className:"level-tile",style:{"--c":a.color,"--soft":a.soft,"--deep":a.deep},onClick:()=>pe(a),children:[e("span",{className:"tile-icon",children:te[a.lv]?e("img",{src:te[a.lv],alt:"",draggable:!1}):e("span",{className:"tile-emoji",children:a.iconEmoji})}),r("span",{className:"tile-name",children:["\u30EC\u30D9\u30EB",a.lv]}),r("span",{className:"tile-shop",children:[_[a.chara],"\u306E",a.shop]}),e("span",{className:"tile-theme",children:a.theme}),e("span",{className:"tile-best",children:i[`lv${a.lv}`]!=null?e("b",{children:oe(i[`lv${a.lv}`])}):"\u307E\u3060 \u304D\u308D\u304F\u304C \u306A\u3044\u3088"})]},a.lv))}),e("button",{className:"reset-btn",onClick:()=>O(!0),children:"\u304D\u308D\u304F\u3092 \u305C\u3093\u3076 \u3051\u3059"}),ce&&e("div",{className:"quit-overlay",children:r("div",{className:"quit-box",children:[r("p",{className:"quit-text",children:["\u3058\u3053\u30D9\u30B9\u30C8\u306E \u304D\u308D\u304F\u3092",e("br",{}),"\u305C\u3093\u3076 \u3051\u3057\u3066\u3082 \u3044\u3044\uFF1F",e("br",{}),e("small",{children:"\u3044\u3061\u3069 \u3051\u3059\u3068 \u3082\u3068\u306B \u3082\u3069\u305B\u306A\u3044\u3088"})]}),r("div",{className:"quit-btns",children:[e("button",{className:"quit-no",onClick:()=>O(!1),children:"\u3051\u3055\u306A\u3044"}),e("button",{className:"quit-yes",onClick:me,children:"\u3051\u3059"})]})]})})]}),t==="countdown"&&n&&r("div",{className:"screen count-screen",style:{"--c":h.color,"--soft":h.soft,"--deep":h.deep},children:[e("div",{className:"count-chara",children:e(T,{chara:n.chara,mood:"normal",size:120})}),r("p",{className:"count-cheer",children:[_[n.chara],"\u306E ",n.shop,"\u306B \u3044\u3089\u3063\u3057\u3083\u3044\uFF01"]}),r("p",{className:"count-label",children:["\u30EC\u30D9\u30EB",n.lv]}),e("div",{className:`count-num ${s===0?"go":""}`,children:s>0?s:"\u30B9\u30BF\u30FC\u30C8\uFF01"},s)]}),t==="play"&&n&&u&&r("div",{className:"screen play-screen",style:{"--c":h.color,"--soft":h.soft,"--deep":h.deep},children:[r("div",{className:"hud",children:[r("span",{className:"hud-count",children:[e("b",{children:w+1})," / ",n.total," \u3082\u3093"]}),r("span",{className:"hud-right",children:[e("span",{className:"hud-time",children:Fe(Q)}),e("button",{className:"quit-btn",onClick:de,children:"\u3084\u3081\u308B"})]})]}),e("div",{className:"progress",children:e("div",{className:"progress-bar",style:{width:`${(w+1)/n.total*100}%`}})}),r("div",{className:"talk-row",children:[e("div",{className:`talk-chara ${b?b.ok?"hop":"shake":""}`,children:e(T,{chara:n.chara,mood:we,size:70})}),e("div",{className:"bubble",children:n.lv===4?r(z,{children:[e("span",{className:"bubble-item",children:u.item.e}),u.item.name,"\u306F ",r("b",{children:[u.price,"\u3048\u3093"]}),"\u3002",r("b",{children:[u.pay,"\u3048\u3093"]})," \u306F\u3089\u3063\u305F\u3089\u3001 \u304A\u3064\u308A\u306F \u3044\u304F\u3089\uFF1F \u304A\u3064\u308A\u306E\u3076\u3093\u3092 \u306E\u305B\u3066\u306D\uFF01"]}):r(z,{children:[e("span",{className:"bubble-item",children:u.item.e}),u.item.name,"\u306F ",r("b",{children:[u.target,"\u3048\u3093"]}),"\uFF01\u3074\u3063\u305F\u308A \u306F\u3089\u3063\u3066\u306D"]})},w)]}),r("div",{className:"shop-area",children:[r("div",{className:"tray-panel",children:[r("div",{className:"tray-head",children:[e("span",{className:"tray-label",children:"\u304A\u3055\u3089"}),r("span",{className:`tray-total ${W?"over":""}`,children:["\u3044\u307E ",e("b",{children:R})," \u3048\u3093",W&&e("em",{children:"\u3000\u30AA\u30FC\u30D0\u30FC\u3057\u3066\u3044\u308B\u3088\uFF01"})]})]}),r("div",{className:"tray",children:[y.length===0&&e("span",{className:"tray-empty",children:"\u3057\u305F\u306E \u304A\u3055\u3044\u3075\u304B\u3089 \u304A\u304B\u306D\u3092 \u30BF\u30C3\u30D7\u3057\u3066\u306D"}),y.map(a=>e(ne,{v:a.v,size:a.v===1e3?38:40,onClick:()=>he(a)},a.id))]})]}),r("div",{className:"wallet-panel",children:[e("span",{className:"wallet-label",children:"\u304A\u3055\u3044\u3075"}),r("div",{className:"wallet",children:[J.length===0&&e("span",{className:"wallet-empty",children:"\u304A\u3055\u3044\u3075\u306F \u304B\u3089\u3063\u307D\uFF01"}),J.map(a=>e(ne,{v:a.v,size:a.v===1e3?44:46,onClick:()=>be(a)},a.id))]})]}),b&&e("div",{className:`feedback ${b.ok?"ok":"ng"}`,children:e("span",{className:"fb-inner",children:b.ok?r(z,{children:[e("span",{className:"fb-mark",children:"\u2B55"}),"\u305B\u3044\u304B\u3044\uFF01",n.lv===4&&` \u304A\u3064\u308A\u306F ${u.target}\u3048\u3093\uFF01`]}):r(z,{children:[e("span",{className:"fb-mark",children:"\u274C"}),"\u3046\u301C\u3093\u2026 \u3053\u305F\u3048\u306F ",u.target,"\u3048\u3093 \u3060\u3088"]})})})]},`s${w}`),r("div",{className:"shop-controls",children:[e("button",{className:"redo-btn",onClick:xe,disabled:!!b||y.length===0,children:"\u3084\u308A\u306A\u304A\u3059"}),e("button",{className:"ok-btn",onClick:ve,disabled:!!b||y.length===0,children:"\u3053\u308C\u3067 OK\uFF01"})]}),V&&e("div",{className:"quit-overlay",children:r("div",{className:"quit-box",children:[e(T,{chara:n.chara,mood:"sad",size:84}),r("p",{className:"quit-text",children:["\u307B\u3093\u3068\u3046\u306B \u3084\u3081\u308B\uFF1F",e("br",{}),e("small",{children:"\u3068\u3061\u3085\u3046\u3067 \u3084\u3081\u308B\u3068 \u304D\u308D\u304F\u306F \u306E\u3053\u3089\u306A\u3044\u3088"})]}),r("div",{className:"quit-btns",children:[e("button",{className:"quit-no",onClick:ue,children:"\u3064\u3065\u3051\u308B"}),e("button",{className:"quit-yes",onClick:fe,children:"\u3084\u3081\u308B"})]})]})})]}),t==="result"&&n&&r("div",{className:"screen result-screen",style:{"--c":h.color,"--soft":h.soft,"--deep":h.deep},children:[S===n.total&&e("div",{className:"confetti",children:Array.from({length:24}).map((a,c)=>e("span",{style:{"--i":c,"--cc":["#F48BB0","#8FC7E8","#8FD6A0","#B9A5E8","#FFD97A","#F6AC6B"][c%6]}},c))}),r("div",{className:"result-panel",children:[e("div",{className:"result-chara",children:e(T,{chara:n.chara,mood:"happy",size:120})}),e("h2",{className:"result-title",children:S===n.total?r(z,{children:["\u305C\u3093\u3076 \u305B\u3044\u304B\u3044\uFF01",e("br",{}),"\u304A\u304B\u3044\u3082\u306E \u3081\u3044\u3058\u3093\u3060\u306D\uFF01"]}):r(z,{children:["\u3055\u3044\u3054\u307E\u3067 \u304C\u3093\u3070\u3063\u305F\u306D\uFF01",e("br",{}),"\u3064\u304E\u306F \u307E\u3093\u3066\u3093\u3092 \u3081\u3056\u305D\u3046\uFF01"]})}),r("p",{className:"result-cheer",children:[_[n.chara],"\u306E ",n.shop,"\u306B \u307E\u305F \u304D\u3066\u306D\uFF01"]}),r("p",{className:"result-score",children:[n.total,"\u3082\u3093\u3061\u3085\u3046 ",r("b",{children:[S,"\u3082\u3093"]})," \u305B\u3044\u304B\u3044\uFF01"]}),e("p",{className:"result-time-label",children:"\u304B\u304B\u3063\u305F \u3058\u304B\u3093"}),e("div",{className:"result-time",children:oe(Q)}),le&&e("div",{className:"new-best",children:"\u3058\u3053\u30D9\u30B9\u30C8 \u3053\u3046\u3057\u3093\uFF01 \u304A\u3081\u3067\u3068\u3046\uFF01"})]}),e("button",{className:"again-btn",onClick:()=>o("title"),children:"\u3082\u3046\u3044\u3061\u3069 \u3042\u305D\u3076"})]})]})}var Ye=`
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
.count-cheer, .result-title, .bubble, .tile-name {
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

/* \u304A\u304B\u306D\u306F \u3058\u3064\u3076\u3064\u306E \u3044\u308D(\u3044\u307F\u306E\u3042\u308B \u3044\u308D)\u306A\u306E\u3067 \u305D\u306E\u307E\u307E */
.money {
  border: none;
  font-family: inherit;
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
}
.money:active { transform: scale(.9); }
span.money { cursor: default; }
.money.coin { border-radius: 50%; }
.coin-num { position: relative; z-index: 1; }
.coin-hole {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  box-shadow: inset 0 1px 3px rgba(69,58,63,.3);
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
}
.money.coin .coin-num { margin-top: 12%; }
.money.bill {
  border-radius: 8px;
  background: #DCE7D8;
  box-shadow: inset 0 0 0 3px #B7CBAF, inset 0 0 0 7px #DCE7D8, inset 0 0 0 8.5px #B7CBAF;
  color: #5F7A55;
  flex-direction: column;
  gap: 0;
  line-height: 1.1;
}

.level-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; margin-top: 4px; }
.level-tile {
  border: 1.5px solid var(--line);
  border-radius: 20px;
  padding: 14px 8px 12px;
  background: #fff;
  font-family: inherit;
  color: var(--ink);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.level-tile:active { background: var(--panel); }
.tile-icon {
  width: 98px; height: 98px;
  border-radius: 50%;
  background: #fff;
  border: 2.5px solid var(--c);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.tile-icon img { width: 100%; height: 100%; object-fit: cover; }
.tile-emoji { font-size: 32px; }
.tile-name { font-size: 17px; font-weight: 900; color: var(--ink); }
.tile-shop { font-size: 11px; font-weight: 700; color: var(--ink); max-width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tile-theme { font-size: 10px; font-weight: 700; color: var(--sub); line-height: 1.4; }
.tile-best { font-size: 10.5px; font-weight: 700; color: var(--sub); margin-top: 2px; font-variant-numeric: tabular-nums; }
.tile-best b { color: var(--ink); }

.bubble-item { font-size: 20px; margin-right: 4px; }
.shop-area { position: relative; width: 100%; display: flex; flex-direction: column; gap: 8px; }
.tray-panel {
  width: 100%;
  background: #fff;
  border: 2px dashed var(--line);
  border-radius: 18px;
  padding: 10px 12px;
}
.tray-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; gap: 8px; flex-wrap: wrap; }
.tray-label { font-size: 12px; font-weight: 900; color: var(--sub); }
.tray-total { font-size: 13px; font-weight: 700; color: var(--ink); }
.tray-total b { font-size: 21px; font-weight: 900; color: var(--ink); font-variant-numeric: tabular-nums; }
.tray-total.over, .tray-total.over b { color: var(--ng); }
.tray-total em { font-style: normal; font-size: 11px; font-weight: 900; color: var(--ng); }
.tray {
  min-height: 88px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.tray-empty { font-size: 12px; font-weight: 700; color: var(--sub); text-align: center; }
.wallet-panel {
  width: 100%;
  background: var(--panel);
  border-radius: 18px;
  padding: 10px 12px 12px;
}
.wallet-label { font-size: 12px; font-weight: 900; color: var(--sub); display: block; margin-bottom: 6px; }
.wallet {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
  min-height: 52px;
}
.wallet-empty { font-size: 12px; font-weight: 700; color: var(--sub); }
.shop-controls { display: flex; gap: 8px; width: 100%; margin-top: auto; }
.redo-btn {
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
.redo-btn:active { background: var(--panel); }
.redo-btn:disabled { opacity: .45; }
`;import{jsx as Ie}from"react/jsx-runtime";_e(document.getElementById("root")).render(Ie(G,{}));
