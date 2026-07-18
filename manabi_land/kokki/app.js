import"react";import{createRoot as qa}from"react-dom/client";import{useState as p,useEffect as R,useRef as A,useCallback as pa}from"react";import{Fragment as C,jsx as a,jsxs as i}from"react/jsx-runtime";var S="kokki-best-times",v=[{kana:"\u306B\u307B\u3093",code:"jp",region:"asia"},{kana:"\u3061\u3085\u3046\u3054\u304F",code:"cn",region:"asia"},{kana:"\u304B\u3093\u3053\u304F",code:"kr",region:"asia"},{kana:"\u304D\u305F\u3061\u3087\u3046\u305B\u3093",code:"kp",region:"asia"},{kana:"\u30E2\u30F3\u30B4\u30EB",code:"mn",region:"asia"},{kana:"\u30A4\u30F3\u30C9",code:"in",region:"asia"},{kana:"\u30D1\u30AD\u30B9\u30BF\u30F3",code:"pk",region:"asia"},{kana:"\u30D0\u30F3\u30B0\u30E9\u30C7\u30B7\u30E5",code:"bd",region:"asia"},{kana:"\u30B9\u30EA\u30E9\u30F3\u30AB",code:"lk",region:"asia"},{kana:"\u30CD\u30D1\u30FC\u30EB",code:"np",region:"asia"},{kana:"\u30D6\u30FC\u30BF\u30F3",code:"bt",region:"asia"},{kana:"\u30E2\u30EB\u30C7\u30A3\u30D6",code:"mv",region:"asia"},{kana:"\u30A2\u30D5\u30AC\u30CB\u30B9\u30BF\u30F3",code:"af",region:"asia"},{kana:"\u30A4\u30E9\u30F3",code:"ir",region:"asia"},{kana:"\u30A4\u30E9\u30AF",code:"iq",region:"asia"},{kana:"\u30B5\u30A6\u30B8\u30A2\u30E9\u30D3\u30A2",code:"sa",region:"asia"},{kana:"\u30A2\u30E9\u30D6\u3057\u3085\u3061\u3087\u3046\u3053\u304F\u308C\u3093\u307D\u3046",code:"ae",region:"asia"},{kana:"\u30AB\u30BF\u30FC\u30EB",code:"qa",region:"asia"},{kana:"\u30AF\u30A6\u30A7\u30FC\u30C8",code:"kw",region:"asia"},{kana:"\u30D0\u30FC\u30EC\u30FC\u30F3",code:"bh",region:"asia"},{kana:"\u30AA\u30DE\u30FC\u30F3",code:"om",region:"asia"},{kana:"\u30A4\u30A8\u30E1\u30F3",code:"ye",region:"asia"},{kana:"\u30E8\u30EB\u30C0\u30F3",code:"jo",region:"asia"},{kana:"\u30A4\u30B9\u30E9\u30A8\u30EB",code:"il",region:"asia"},{kana:"\u30EC\u30D0\u30CE\u30F3",code:"lb",region:"asia"},{kana:"\u30B7\u30EA\u30A2",code:"sy",region:"asia"},{kana:"\u30C8\u30EB\u30B3",code:"tr",region:"asia"},{kana:"\u30B8\u30E7\u30FC\u30B8\u30A2",code:"ge",region:"asia"},{kana:"\u30A2\u30EB\u30E1\u30CB\u30A2",code:"am",region:"asia"},{kana:"\u30A2\u30BC\u30EB\u30D0\u30A4\u30B8\u30E3\u30F3",code:"az",region:"asia"},{kana:"\u30AB\u30B6\u30D5\u30B9\u30BF\u30F3",code:"kz",region:"asia"},{kana:"\u30A6\u30BA\u30D9\u30AD\u30B9\u30BF\u30F3",code:"uz",region:"asia"},{kana:"\u30C8\u30EB\u30AF\u30E1\u30CB\u30B9\u30BF\u30F3",code:"tm",region:"asia"},{kana:"\u30AD\u30EB\u30AE\u30B9",code:"kg",region:"asia"},{kana:"\u30BF\u30B8\u30AD\u30B9\u30BF\u30F3",code:"tj",region:"asia"},{kana:"\u30BF\u30A4",code:"th",region:"asia"},{kana:"\u30D9\u30C8\u30CA\u30E0",code:"vn",region:"asia"},{kana:"\u30E9\u30AA\u30B9",code:"la",region:"asia"},{kana:"\u30AB\u30F3\u30DC\u30B8\u30A2",code:"kh",region:"asia"},{kana:"\u30DF\u30E3\u30F3\u30DE\u30FC",code:"mm",region:"asia"},{kana:"\u30DE\u30EC\u30FC\u30B7\u30A2",code:"my",region:"asia"},{kana:"\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB",code:"sg",region:"asia"},{kana:"\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2",code:"id",region:"asia"},{kana:"\u30D6\u30EB\u30CD\u30A4",code:"bn",region:"asia"},{kana:"\u30D5\u30A3\u30EA\u30D4\u30F3",code:"ph",region:"asia"},{kana:"\u3072\u304C\u3057\u30C6\u30A3\u30E2\u30FC\u30EB",code:"tl",region:"asia"},{kana:"\u30A2\u30A4\u30B9\u30E9\u30F3\u30C9",code:"is",region:"europe"},{kana:"\u30CE\u30EB\u30A6\u30A7\u30FC",code:"no",region:"europe"},{kana:"\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3",code:"se",region:"europe"},{kana:"\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9",code:"fi",region:"europe"},{kana:"\u30C7\u30F3\u30DE\u30FC\u30AF",code:"dk",region:"europe"},{kana:"\u30A8\u30B9\u30C8\u30CB\u30A2",code:"ee",region:"europe"},{kana:"\u30E9\u30C8\u30D3\u30A2",code:"lv",region:"europe"},{kana:"\u30EA\u30C8\u30A2\u30CB\u30A2",code:"lt",region:"europe"},{kana:"\u30A4\u30AE\u30EA\u30B9",code:"gb",region:"europe"},{kana:"\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9",code:"ie",region:"europe"},{kana:"\u30D5\u30E9\u30F3\u30B9",code:"fr",region:"europe"},{kana:"\u30C9\u30A4\u30C4",code:"de",region:"europe"},{kana:"\u30AA\u30E9\u30F3\u30C0",code:"nl",region:"europe"},{kana:"\u30D9\u30EB\u30AE\u30FC",code:"be",region:"europe"},{kana:"\u30EB\u30AF\u30BB\u30F3\u30D6\u30EB\u30AF",code:"lu",region:"europe"},{kana:"\u30B9\u30A4\u30B9",code:"ch",region:"europe"},{kana:"\u30AA\u30FC\u30B9\u30C8\u30EA\u30A2",code:"at",region:"europe"},{kana:"\u30EA\u30D2\u30C6\u30F3\u30B7\u30E5\u30BF\u30A4\u30F3",code:"li",region:"europe"},{kana:"\u30B9\u30DA\u30A4\u30F3",code:"es",region:"europe"},{kana:"\u30DD\u30EB\u30C8\u30AC\u30EB",code:"pt",region:"europe"},{kana:"\u30A4\u30BF\u30EA\u30A2",code:"it",region:"europe"},{kana:"\u30DE\u30EB\u30BF",code:"mt",region:"europe"},{kana:"\u30E2\u30CA\u30B3",code:"mc",region:"europe"},{kana:"\u30A2\u30F3\u30C9\u30E9",code:"ad",region:"europe"},{kana:"\u30B5\u30F3\u30DE\u30EA\u30CE",code:"sm",region:"europe"},{kana:"\u30D0\u30C1\u30AB\u30F3",code:"va",region:"europe"},{kana:"\u30AE\u30EA\u30B7\u30E3",code:"gr",region:"europe"},{kana:"\u30AD\u30D7\u30ED\u30B9",code:"cy",region:"europe"},{kana:"\u30DD\u30FC\u30E9\u30F3\u30C9",code:"pl",region:"europe"},{kana:"\u30C1\u30A7\u30B3",code:"cz",region:"europe"},{kana:"\u30B9\u30ED\u30D0\u30AD\u30A2",code:"sk",region:"europe"},{kana:"\u30CF\u30F3\u30AC\u30EA\u30FC",code:"hu",region:"europe"},{kana:"\u30EB\u30FC\u30DE\u30CB\u30A2",code:"ro",region:"europe"},{kana:"\u30D6\u30EB\u30AC\u30EA\u30A2",code:"bg",region:"europe"},{kana:"\u30B9\u30ED\u30D9\u30CB\u30A2",code:"si",region:"europe"},{kana:"\u30AF\u30ED\u30A2\u30C1\u30A2",code:"hr",region:"europe"},{kana:"\u30DC\u30B9\u30CB\u30A2\u30FB\u30D8\u30EB\u30C4\u30A7\u30B4\u30D3\u30CA",code:"ba",region:"europe"},{kana:"\u30BB\u30EB\u30D3\u30A2",code:"rs",region:"europe"},{kana:"\u30E2\u30F3\u30C6\u30CD\u30B0\u30ED",code:"me",region:"europe"},{kana:"\u304D\u305F\u30DE\u30B1\u30C9\u30CB\u30A2",code:"mk",region:"europe"},{kana:"\u30A2\u30EB\u30D0\u30CB\u30A2",code:"al",region:"europe"},{kana:"\u30A6\u30AF\u30E9\u30A4\u30CA",code:"ua",region:"europe"},{kana:"\u30D9\u30E9\u30EB\u30FC\u30B7",code:"by",region:"europe"},{kana:"\u30E2\u30EB\u30C9\u30D0",code:"md",region:"europe"},{kana:"\u30ED\u30B7\u30A2",code:"ru",region:"europe"},{kana:"\u30A8\u30B8\u30D7\u30C8",code:"eg",region:"africa"},{kana:"\u30EA\u30D3\u30A2",code:"ly",region:"africa"},{kana:"\u30C1\u30E5\u30CB\u30B8\u30A2",code:"tn",region:"africa"},{kana:"\u30A2\u30EB\u30B8\u30A7\u30EA\u30A2",code:"dz",region:"africa"},{kana:"\u30E2\u30ED\u30C3\u30B3",code:"ma",region:"africa"},{kana:"\u30B9\u30FC\u30C0\u30F3",code:"sd",region:"africa"},{kana:"\u307F\u306A\u307F\u30B9\u30FC\u30C0\u30F3",code:"ss",region:"africa"},{kana:"\u30A8\u30C1\u30AA\u30D4\u30A2",code:"et",region:"africa"},{kana:"\u30A8\u30EA\u30C8\u30EA\u30A2",code:"er",region:"africa"},{kana:"\u30B8\u30D6\u30C1",code:"dj",region:"africa"},{kana:"\u30BD\u30DE\u30EA\u30A2",code:"so",region:"africa"},{kana:"\u30B1\u30CB\u30A2",code:"ke",region:"africa"},{kana:"\u30A6\u30AC\u30F3\u30C0",code:"ug",region:"africa"},{kana:"\u30BF\u30F3\u30B6\u30CB\u30A2",code:"tz",region:"africa"},{kana:"\u30EB\u30EF\u30F3\u30C0",code:"rw",region:"africa"},{kana:"\u30D6\u30EB\u30F3\u30B8",code:"bi",region:"africa"},{kana:"\u30B3\u30F3\u30B4\u307F\u3093\u3057\u3085\u304D\u3087\u3046\u308F\u3053\u304F",code:"cd",region:"africa"},{kana:"\u30B3\u30F3\u30B4\u304D\u3087\u3046\u308F\u3053\u304F",code:"cg",region:"africa"},{kana:"\u30AC\u30DC\u30F3",code:"ga",region:"africa"},{kana:"\u305B\u304D\u3069\u3046\u30AE\u30CB\u30A2",code:"gq",region:"africa"},{kana:"\u30AB\u30E1\u30EB\u30FC\u30F3",code:"cm",region:"africa"},{kana:"\u3061\u3085\u3046\u304A\u3046\u30A2\u30D5\u30EA\u30AB",code:"cf",region:"africa"},{kana:"\u30C1\u30E3\u30C9",code:"td",region:"africa"},{kana:"\u30CB\u30B8\u30A7\u30FC\u30EB",code:"ne",region:"africa"},{kana:"\u30CA\u30A4\u30B8\u30A7\u30EA\u30A2",code:"ng",region:"africa"},{kana:"\u30D9\u30CA\u30F3",code:"bj",region:"africa"},{kana:"\u30C8\u30FC\u30B4",code:"tg",region:"africa"},{kana:"\u30AC\u30FC\u30CA",code:"gh",region:"africa"},{kana:"\u30B3\u30FC\u30C8\u30B8\u30DC\u30EF\u30FC\u30EB",code:"ci",region:"africa"},{kana:"\u30EA\u30D9\u30EA\u30A2",code:"lr",region:"africa"},{kana:"\u30B7\u30A8\u30E9\u30EC\u30AA\u30CD",code:"sl",region:"africa"},{kana:"\u30AE\u30CB\u30A2",code:"gn",region:"africa"},{kana:"\u30AE\u30CB\u30A2\u30D3\u30B5\u30A6",code:"gw",region:"africa"},{kana:"\u30BB\u30CD\u30AC\u30EB",code:"sn",region:"africa"},{kana:"\u30AC\u30F3\u30D3\u30A2",code:"gm",region:"africa"},{kana:"\u30DE\u30EA",code:"ml",region:"africa"},{kana:"\u30D6\u30EB\u30AD\u30CA\u30D5\u30A1\u30BD",code:"bf",region:"africa"},{kana:"\u30E2\u30FC\u30EA\u30BF\u30CB\u30A2",code:"mr",region:"africa"},{kana:"\u30AB\u30FC\u30DC\u30D9\u30EB\u30C7",code:"cv",region:"africa"},{kana:"\u30B5\u30F3\u30C8\u30E1\u30FB\u30D7\u30EA\u30F3\u30B7\u30DA",code:"st",region:"africa"},{kana:"\u30A2\u30F3\u30B4\u30E9",code:"ao",region:"africa"},{kana:"\u30B6\u30F3\u30D3\u30A2",code:"zm",region:"africa"},{kana:"\u30DE\u30E9\u30A6\u30A4",code:"mw",region:"africa"},{kana:"\u30E2\u30B6\u30F3\u30D3\u30FC\u30AF",code:"mz",region:"africa"},{kana:"\u30B8\u30F3\u30D0\u30D6\u30A8",code:"zw",region:"africa"},{kana:"\u30DC\u30C4\u30EF\u30CA",code:"bw",region:"africa"},{kana:"\u30CA\u30DF\u30D3\u30A2",code:"na",region:"africa"},{kana:"\u307F\u306A\u307F\u30A2\u30D5\u30EA\u30AB",code:"za",region:"africa"},{kana:"\u30A8\u30B9\u30EF\u30C6\u30A3\u30CB",code:"sz",region:"africa"},{kana:"\u30EC\u30BD\u30C8",code:"ls",region:"africa"},{kana:"\u30DE\u30C0\u30AC\u30B9\u30AB\u30EB",code:"mg",region:"africa"},{kana:"\u30E2\u30FC\u30EA\u30B7\u30E3\u30B9",code:"mu",region:"africa"},{kana:"\u30BB\u30FC\u30B7\u30A7\u30EB",code:"sc",region:"africa"},{kana:"\u30B3\u30E2\u30ED",code:"km",region:"africa"},{kana:"\u30AB\u30CA\u30C0",code:"ca",region:"namerica"},{kana:"\u30A2\u30E1\u30EA\u30AB",code:"us",region:"namerica"},{kana:"\u30E1\u30AD\u30B7\u30B3",code:"mx",region:"namerica"},{kana:"\u30B0\u30A2\u30C6\u30DE\u30E9",code:"gt",region:"namerica"},{kana:"\u30D9\u30EA\u30FC\u30BA",code:"bz",region:"namerica"},{kana:"\u30A8\u30EB\u30B5\u30EB\u30D0\u30C9\u30EB",code:"sv",region:"namerica"},{kana:"\u30DB\u30F3\u30B8\u30E5\u30E9\u30B9",code:"hn",region:"namerica"},{kana:"\u30CB\u30AB\u30E9\u30B0\u30A2",code:"ni",region:"namerica"},{kana:"\u30B3\u30B9\u30BF\u30EA\u30AB",code:"cr",region:"namerica"},{kana:"\u30D1\u30CA\u30DE",code:"pa",region:"namerica"},{kana:"\u30AD\u30E5\u30FC\u30D0",code:"cu",region:"namerica"},{kana:"\u30B8\u30E3\u30DE\u30A4\u30AB",code:"jm",region:"namerica"},{kana:"\u30CF\u30A4\u30C1",code:"ht",region:"namerica"},{kana:"\u30C9\u30DF\u30CB\u30AB\u304D\u3087\u3046\u308F\u3053\u304F",code:"do",region:"namerica"},{kana:"\u30D0\u30CF\u30DE",code:"bs",region:"namerica"},{kana:"\u30D0\u30EB\u30D0\u30C9\u30B9",code:"bb",region:"namerica"},{kana:"\u30C8\u30EA\u30CB\u30C0\u30FC\u30C9\u30FB\u30C8\u30D0\u30B4",code:"tt",region:"namerica"},{kana:"\u30B0\u30EC\u30CA\u30C0",code:"gd",region:"namerica"},{kana:"\u30BB\u30F3\u30C8\u30D3\u30F3\u30BB\u30F3\u30C8",code:"vc",region:"namerica"},{kana:"\u30BB\u30F3\u30C8\u30EB\u30B7\u30A2",code:"lc",region:"namerica"},{kana:"\u30C9\u30DF\u30CB\u30AB\u3053\u304F",code:"dm",region:"namerica"},{kana:"\u30A2\u30F3\u30C6\u30A3\u30B0\u30A2\u30FB\u30D0\u30FC\u30D6\u30FC\u30C0",code:"ag",region:"namerica"},{kana:"\u30BB\u30F3\u30C8\u30AF\u30EA\u30B9\u30C8\u30D5\u30A1\u30FC\u30FB\u30CD\u30FC\u30D3\u30B9",code:"kn",region:"namerica"},{kana:"\u30D6\u30E9\u30B8\u30EB",code:"br",region:"samerica"},{kana:"\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3",code:"ar",region:"samerica"},{kana:"\u30C1\u30EA",code:"cl",region:"samerica"},{kana:"\u30A6\u30EB\u30B0\u30A2\u30A4",code:"uy",region:"samerica"},{kana:"\u30D1\u30E9\u30B0\u30A2\u30A4",code:"py",region:"samerica"},{kana:"\u30DC\u30EA\u30D3\u30A2",code:"bo",region:"samerica"},{kana:"\u30DA\u30EB\u30FC",code:"pe",region:"samerica"},{kana:"\u30A8\u30AF\u30A2\u30C9\u30EB",code:"ec",region:"samerica"},{kana:"\u30B3\u30ED\u30F3\u30D3\u30A2",code:"co",region:"samerica"},{kana:"\u30D9\u30CD\u30BA\u30A8\u30E9",code:"ve",region:"samerica"},{kana:"\u30AC\u30A4\u30A2\u30CA",code:"gy",region:"samerica"},{kana:"\u30B9\u30EA\u30CA\u30E0",code:"sr",region:"samerica"},{kana:"\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2",code:"au",region:"oceania"},{kana:"\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9",code:"nz",region:"oceania"},{kana:"\u30D1\u30D7\u30A2\u30CB\u30E5\u30FC\u30AE\u30CB\u30A2",code:"pg",region:"oceania"},{kana:"\u30D5\u30A3\u30B8\u30FC",code:"fj",region:"oceania"},{kana:"\u30BD\u30ED\u30E2\u30F3\u3057\u3087\u3068\u3046",code:"sb",region:"oceania"},{kana:"\u30D0\u30CC\u30A2\u30C4",code:"vu",region:"oceania"},{kana:"\u30B5\u30E2\u30A2",code:"ws",region:"oceania"},{kana:"\u30C8\u30F3\u30AC",code:"to",region:"oceania"},{kana:"\u30C4\u30D0\u30EB",code:"tv",region:"oceania"},{kana:"\u30AD\u30EA\u30D0\u30B9",code:"ki",region:"oceania"},{kana:"\u30CA\u30A6\u30EB",code:"nr",region:"oceania"},{kana:"\u30D1\u30E9\u30AA",code:"pw",region:"oceania"},{kana:"\u30DF\u30AF\u30ED\u30CD\u30B7\u30A2",code:"fm",region:"oceania"},{kana:"\u30DE\u30FC\u30B7\u30E3\u30EB\u3057\u3087\u3068\u3046",code:"mh",region:"oceania"}],L=e=>`https://flagcdn.com/w320/${e}.png`,J=[{id:"asia",name:"\u30A2\u30B8\u30A2",chara:"luna",color:"#F4A68F",soft:"#FBDDD4"},{id:"europe",name:"\u30E8\u30FC\u30ED\u30C3\u30D1",chara:"makami",color:"#8FC2EA",soft:"#D4E8F7"},{id:"africa",name:"\u30A2\u30D5\u30EA\u30AB",chara:"tarte",color:"#E8BF6A",soft:"#F9EED7"},{id:"namerica",name:"\u304D\u305F\u30A2\u30E1\u30EA\u30AB",chara:"emma",color:"#A0CFA3",soft:"#DBEDDC"},{id:"samerica",name:"\u307F\u306A\u307F\u30A2\u30E1\u30EA\u30AB",chara:"luna",color:"#E88BAA",soft:"#F6D3DF"},{id:"oceania",name:"\u30AA\u30BB\u30A2\u30CB\u30A2",chara:"makami",color:"#C9B8EC",soft:"#EFE9FA"},{id:"sekai",name:"\u305B\u304B\u3044\u30DF\u30C3\u30AF\u30B9",chara:"tarte",color:"#8FD0C6",soft:"#E6F6F3",mix:!0}],U={luna:"\u30EB\u30CA",makami:"\u30DE\u30AB\u30DF",tarte:"\u30BF\u30EB\u30C8",emma:"\u30A8\u30DE"},H=10,ga={luna:{normal:"/images/chara/luna_normal.webp",happy:"/images/chara/luna_happy.webp",sad:"/images/chara/luna_sad.webp"},makami:{normal:"/images/chara/makami_normal.webp",happy:"/images/chara/makami_happy.webp",sad:"/images/chara/makami_sad.webp"},tarte:{normal:"/images/chara/tarte_normal.webp",happy:"/images/chara/tarte_happy.webp",sad:"/images/chara/tarte_sad.webp"},emma:{normal:"/images/chara/emma_normal.webp",happy:"/images/chara/emma_happy.webp",sad:"/images/chara/emma_sad.webp"}};function D({chara:e,mood:n="normal",size:t=60}){let s=ga[e]||{},o=s[n]||s.normal||"";return o?a("img",{src:o,width:t,height:t,alt:"",draggable:!1,style:{display:"block",objectFit:"contain",pointerEvents:"none"}}):null}function $(e){let n=[...e];for(let t=n.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[n[t],n[s]]=[n[s],n[t]]}return n}function ua(e){let t=e==="sekai"?v:v.filter(o=>o.region===e);return $(t).slice(0,H).map(o=>{let l=v.filter(g=>g.region===o.region&&g.kana!==o.kana);l.length<2&&(l=v.filter(g=>g.kana!==o.kana));let d=$(l).slice(0,2);return{ans:o,choices:$([o,...d])}})}function fa({pref:e}){return a("img",{src:L(e.code),className:"flag-img",alt:"",draggable:!1})}var ma=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,"0")}`,Q=e=>{let n=Math.floor(e/60),t=Math.floor(e%60);return n>0?`${n}\u3075\u3093${t}\u3073\u3087\u3046`:`${t}\u3073\u3087\u3046`},_=null;function V(){if(!_){let e=window.AudioContext||window.webkitAudioContext;e&&(_=new e)}return _}function k(e,n,t,s="sine",o=.18){let l=V();if(!l)return;let d=l.createOscillator(),g=l.createGain();d.type=s,d.frequency.value=e,g.gain.setValueAtTime(0,l.currentTime+n),g.gain.linearRampToValueAtTime(o,l.currentTime+n+.01),g.gain.exponentialRampToValueAtTime(.001,l.currentTime+n+t),d.connect(g).connect(l.destination),d.start(l.currentTime+n),d.stop(l.currentTime+n+t+.05)}var ka=()=>{k(988,0,.13),k(1319,.15,.3)},ba=()=>k(220,0,.3,"triangle",.1),ha=()=>k(660,0,.12),xa=()=>{k(660,0,.1),k(880,.12,.2)},va=()=>k(900,0,.06,"triangle",.1),wa=()=>{[523,659,784,1047].forEach((e,n)=>k(e,n*.13,.15)),k(1319,.55,.4)};async function ya(){try{if(typeof window<"u"&&window.storage){let n=await window.storage.get(S);return n?JSON.parse(n.value):{}}let e=localStorage.getItem(S);return e?JSON.parse(e):{}}catch{return{}}}async function Z(e){try{typeof window<"u"&&window.storage?await window.storage.set(S,JSON.stringify(e)):localStorage.setItem(S,JSON.stringify(e))}catch(n){console.error("save failed",n)}}function Na(e){try{let n="gakushu-log-v1",t=localStorage.getItem(n),s=t?JSON.parse(t):[];for(s.push(e);s.length>500;)s.shift();localStorage.setItem(n,JSON.stringify(s))}catch{}}var za=()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`};function O(){let[e,n]=p("title"),[t,s]=p({}),[o,l]=p(null),[d,g]=p(3),[B,W]=p([]),[b,Y]=p(0),[aa,M]=p(null),[I,N]=p(0),[u,z]=p(null),[F,T]=p(0),[ea,X]=p(!1),[P,q]=p(!1),[na,j]=p(!1),w=A(0),x=A(null),y=A(!1),K=A(0);R(()=>{ya().then(s)},[]),R(()=>()=>clearInterval(x.current),[]);let oa=r=>{V();let c=ua(r.id);l({...r,key:r.id,total:c.length}),W(c),Y(0),M(null),T(0),X(!1),z(null),q(!1),y.current=!1,g(3),n("countdown")},ia=()=>{P||(clearInterval(x.current),K.current=Date.now(),q(!0))},ra=()=>{w.current+=Date.now()-K.current,x.current=setInterval(()=>{N((Date.now()-w.current)/1e3)},100),q(!1)},ta=()=>{clearInterval(x.current),q(!1),z(null),y.current=!1,n("title")},ca=async()=>{s({}),await Z({}),j(!1)};R(()=>{if(e!=="countdown")return;if(d>0){ha();let c=setTimeout(()=>g(m=>m-1),1e3);return()=>clearTimeout(c)}xa();let r=setTimeout(()=>{w.current=Date.now(),N(0),x.current=setInterval(()=>{N((Date.now()-w.current)/1e3)},100),n("play")},800);return()=>clearTimeout(r)},[e,d]);let sa=pa(async r=>{clearInterval(x.current);let c=Math.round((Date.now()-w.current)/1e3);N(c);let m=t[o.key],E=!1;if(m==null||c<m){E=!0;let G={...t,[o.key]:c};s(G),await Z(G)}X(E),T(r),Na({d:za(),app:"kokki",correct:r,total:o.total,sec:c}),n("result"),setTimeout(wa,300)},[t,o]),f=B[b],la=r=>{if(y.current||!f)return;y.current=!0,va(),M(r.kana);let c=r.kana===f.ans.kana,m=F+(c?1:0);c?ka():ba(),z({ok:c}),c&&T(m),setTimeout(()=>{z(null),M(null),y.current=!1,b+1>=o.total?sa(m):Y(E=>E+1)},c?850:1900)},da=u?u.ok?"happy":"sad":"normal",h=o||J[0];return i("div",{className:"app",children:[a("style",{children:Fa}),e==="title"&&i("div",{className:"screen title-screen",children:[typeof window<"u"&&!window.storage&&a("a",{className:"home-link",href:"../",children:"\u2039 \u30DB\u30FC\u30E0\u3078"}),i("div",{className:"title-head",children:[a("p",{className:"app-title-sub",children:"\u3053\u3063\u304D\u3067 \u3053\u305F\u3048\u308B"}),a("h1",{className:"app-title",children:"\u305B\u304B\u3044\u306E \u3053\u3063\u304D"})]}),a("div",{className:"level-list",children:J.map(r=>i("button",{className:"level-btn",style:{"--c":r.color,"--soft":r.soft},onClick:()=>oa(r),children:[i("span",{className:"level-text",children:[a("span",{className:"level-name",children:r.name}),a("span",{className:"level-sub",children:`${r.mix?v.length:v.filter(c=>c.region===r.id).length}\u304B\u3053\u304F\u304B\u3089 ${H}\u3082\u3093`}),i("span",{className:"level-best",children:["\u3058\u3053\u30D9\u30B9\u30C8\uFF1A",t[r.id]!=null?a("b",{children:Q(t[r.id])}):a("i",{children:"\u307E\u3060 \u304D\u308D\u304F\u304C \u306A\u3044\u3088"})]})]}),a("span",{className:"level-go",children:"\u25B6"})]},r.id))}),a("button",{className:"reset-btn",onClick:()=>j(!0),children:"\u304D\u308D\u304F\u3092 \u305C\u3093\u3076 \u3051\u3059"}),na&&a("div",{className:"quit-overlay",children:i("div",{className:"quit-box",children:[i("p",{className:"quit-text",children:["\u3058\u3053\u30D9\u30B9\u30C8\u306E \u304D\u308D\u304F\u3092",a("br",{}),"\u305C\u3093\u3076 \u3051\u3057\u3066\u3082 \u3044\u3044\uFF1F",a("br",{}),a("small",{children:"\u3044\u3061\u3069 \u3051\u3059\u3068 \u3082\u3068\u306B \u3082\u3069\u305B\u306A\u3044\u3088"})]}),i("div",{className:"quit-btns",children:[a("button",{className:"quit-no",onClick:()=>j(!1),children:"\u3051\u3055\u306A\u3044"}),a("button",{className:"quit-yes",onClick:ca,children:"\u3051\u3059"})]})]})})]}),e==="countdown"&&o&&i("div",{className:"screen count-screen",style:{"--c":h.color,"--soft":h.soft},children:[a("div",{className:"count-chara",children:a(D,{chara:o.chara,mood:"normal",size:120})}),i("p",{className:"count-cheer",children:[U[o.chara],"\u3068 \u305B\u304B\u3044\u306E \u305F\u3073\u306B \u3067\u304B\u3051\u3088\u3046\uFF01"]}),a("p",{className:"count-label",children:o.name}),a("div",{className:`count-num ${d===0?"go":""}`,children:d>0?d:"\u30B9\u30BF\u30FC\u30C8\uFF01"},d)]}),e==="play"&&o&&f&&i("div",{className:"screen play-screen",style:{"--c":h.color,"--soft":h.soft},children:[i("div",{className:"hud",children:[i("span",{className:"hud-count",children:[a("b",{children:b+1})," / ",o.total," \u3082\u3093"]}),i("span",{className:"hud-right",children:[a("span",{className:"hud-time",children:ma(I)}),a("button",{className:"quit-btn",onClick:ia,children:"\u3084\u3081\u308B"})]})]}),a("div",{className:"progress",children:a("div",{className:"progress-bar",style:{width:`${(b+1)/o.total*100}%`}})}),i("div",{className:"talk-row",children:[a("div",{className:`talk-chara ${u?u.ok?"hop":"shake":""}`,children:a(D,{chara:o.chara,mood:da,size:70})}),i("div",{className:"bubble",children:["\u3053\u306E \u3053\u3063\u304D\u306F ",a("b",{children:"\u3069\u3053\u306E \u304F\u306B"})," \u304B\u306A\uFF1F"]},b)]}),i("div",{className:"shape-area",children:[a(fa,{pref:f.ans,color:h.color,soft:h.soft}),B[b+1]&&a("img",{src:L(B[b+1].ans.code),alt:"",style:{display:"none"}}),u&&a("div",{className:`feedback ${u.ok?"ok":"ng"}`,children:a("span",{className:"fb-inner",children:u.ok?i(C,{children:[a("span",{className:"fb-mark",children:"\u2B55"})," \u305B\u3044\u304B\u3044\uFF01",f.ans.kana]}):i(C,{children:[a("span",{className:"fb-mark",children:"\u274C"})," \u3046\u301C\u3093\u2026 \u3053\u305F\u3048\u306F ",f.ans.kana," \u3060\u3088"]})})})]},`s${b}`),a("div",{className:"choice-list",children:f.choices.map(r=>{let c=u&&r.kana===f.ans.kana,m=u&&aa===r.kana&&r.kana!==f.ans.kana;return a("button",{className:`choice-btn ${c?"is-ans":""} ${m?"is-wrong":""}`,onClick:()=>la(r),disabled:!!u,children:a("span",{className:"choice-kana",children:r.kana})},r.kana)})}),P&&a("div",{className:"quit-overlay",children:i("div",{className:"quit-box",children:[a(D,{chara:o.chara,mood:"sad",size:84}),i("p",{className:"quit-text",children:["\u307B\u3093\u3068\u3046\u306B \u3084\u3081\u308B\uFF1F",a("br",{}),a("small",{children:"\u3068\u3061\u3085\u3046\u3067 \u3084\u3081\u308B\u3068 \u304D\u308D\u304F\u306F \u306E\u3053\u3089\u306A\u3044\u3088"})]}),i("div",{className:"quit-btns",children:[a("button",{className:"quit-no",onClick:ra,children:"\u3064\u3065\u3051\u308B"}),a("button",{className:"quit-yes",onClick:ta,children:"\u3084\u3081\u308B"})]})]})})]}),e==="result"&&o&&i("div",{className:"screen result-screen",style:{"--c":h.color,"--soft":h.soft},children:[F===o.total&&a("div",{className:"confetti",children:Array.from({length:24}).map((r,c)=>a("span",{style:{"--i":c,"--cc":["#F48BB0","#8FC7E8","#8FD6A0","#B9A5E8","#FFD97A","#F6AC6B"][c%6]}},c))}),i("div",{className:"result-panel",children:[a("div",{className:"result-chara",children:a(D,{chara:o.chara,mood:"happy",size:120})}),a("h2",{className:"result-title",children:F===o.total?i(C,{children:["\u305C\u3093\u3076 \u305B\u3044\u304B\u3044\uFF01",a("br",{}),"\u3053\u3063\u304D\u306F\u304B\u305B\u3060\u306D\uFF01"]}):i(C,{children:["\u3055\u3044\u3054\u307E\u3067 \u304C\u3093\u3070\u3063\u305F\u306D\uFF01",a("br",{}),"\u3064\u304E\u306F \u307E\u3093\u3066\u3093\u3092 \u3081\u3056\u305D\u3046\uFF01"]})}),i("p",{className:"result-cheer",children:[U[o.chara],"\u3082 \u304A\u304A\u3088\u308D\u3053\u3073\uFF01"]}),i("p",{className:"result-score",children:[o.total,"\u3082\u3093\u3061\u3085\u3046 ",i("b",{children:[F,"\u3082\u3093"]})," \u305B\u3044\u304B\u3044\uFF01"]}),a("p",{className:"result-time-label",children:"\u304B\u304B\u3063\u305F \u3058\u304B\u3093"}),a("div",{className:"result-time",children:Q(I)}),ea&&a("div",{className:"new-best",children:"\u3058\u3053\u30D9\u30B9\u30C8 \u3053\u3046\u3057\u3093\uFF01 \u304A\u3081\u3067\u3068\u3046\uFF01"})]}),a("button",{className:"again-btn",onClick:()=>n("title"),children:"\u3082\u3046\u3044\u3061\u3069 \u3042\u305D\u3076"})]})]})}var Fa=`
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
.flag-img {
  width: min(68vw, 270px);
  height: auto;
  display: block;
  border: 1.5px solid var(--line);
  border-radius: 10px;
  background: #fff;
}

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
`;import{jsx as Ea}from"react/jsx-runtime";qa(document.getElementById("root")).render(Ea(O,{}));
