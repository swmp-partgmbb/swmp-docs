"use strict";(self.webpackChunkrag_chat_bot_docs=self.webpackChunkrag_chat_bot_docs||[]).push([[4583],{8690:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var s=t(4164),i=t(8774),a=t(4586),r=t(781),l=t(6540),d=t(1122),o=t(4848);const c=(e,n)=>{let t;return function(){for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];clearTimeout(t),t=setTimeout((()=>e(...i)),n)}},u=()=>{const[e,n]=(0,l.useState)(null),[t,s]=(0,l.useState)(["translate3d(-140%, -50%, 0rem) rotateY(0deg) scale(0.6)","translate3d(-50%, -50%, 0rem) rotateY(0deg) scale(1)","translate3d(40%, -50%, 0rem) rotateY(0deg) scale(0.6)","translate3d(-50%, -50%, -1rem) rotateY(-90deg) scale(0.01)"]),i=(0,l.useCallback)((e=>{s((n=>{const t=[...n];return e?t.unshift(t.pop()):t.push(t.shift()),t}))}),[]),a=(0,l.useCallback)(c((()=>i(!0)),200),[i]),r=(0,l.useCallback)(c((()=>i(!1)),200),[i]);(0,l.useEffect)((()=>{const e=setInterval((()=>{a()}),7500);return n(e),()=>clearInterval(e)}),[a]);const u=(0,l.useCallback)((()=>{e&&clearInterval(e),a();const t=setInterval((()=>{a()}),5e3);n(t)}),[a,e]),h=(0,l.useCallback)((()=>{e&&clearInterval(e),r();const t=setInterval((()=>{a()}),5e3);n(t)}),[r,a,e]);return(0,o.jsxs)("div",{className:"slider-container",children:[(0,o.jsx)("div",{className:"slider",children:[{title:"Automatische Dokumentenanzeige",description:"Lassen Sie sich relevante Dokumente direkt anzeigen, ohne lange suchen zu m\xfcssen \u2013 der KI-Assistent bringt die Informationen sofort zu Ihnen.",lightImage:"img/slider/4.png",darkImage:"img/slider/4.png"},{title:"KI-gest\xfctzte Kommunikation",description:"Kommunizieren Sie mit einem KI-Assistenten, der auf die internen Dokumente des SWMP Unternehmens zugreifen kann und Ihnen gezielte Antworten geben kann.",lightImage:"img/slider/1.svg",darkImage:"img/slider/1_dark.svg"},{title:"Flexible Mandanten- und Dokumentenverwaltung",description:"Passen Sie das System flexibel an Ihre Bed\xfcrfnisse an \u2013 wechseln Sie m\xfchelos zwischen verschiedenen Mandanten und den Dokumenten Ihres Unternehmens.",lightImage:"img/slider/2.png",darkImage:"img/slider/2.png"},{title:"Chatverlauf speichern und wiederverwenden",description:"Alle Chat-Verl\xe4ufe speichern sich automatisch und k\xf6nnen jederzeit wieder aufgerufen werden. So k\xf6nnen Sie auf fr\xfchere Dialoge zugreifen und Informationen nachverfolgen.",lightImage:"img/slider/3.png",darkImage:"img/slider/3.png"}].map(((e,n)=>(0,o.jsx)("div",{className:"slide",style:{transform:t[n]},children:(0,o.jsxs)("div",{className:"slide-content",children:[(0,o.jsx)("h2",{className:"slide-title",children:e.title}),(0,o.jsx)(d.A,{alt:`Slide ${n+1}`,sources:{light:e.lightImage,dark:e.darkImage},style:{maxHeight:"200px",height:"auto"}}),(0,o.jsx)("p",{className:"slide-description",children:e.description})]})},`slide-${n+1}`)))}),(0,o.jsxs)("div",{className:"slider-buttons",children:[(0,o.jsx)("button",{id:"prev-slide","aria-label":"Previous Slide",title:"Go To Previous Slide",onClick:h}),(0,o.jsx)("button",{id:"nxt-slide","aria-label":"Next Slide",title:"Go To Next Slide",onClick:u})]})]})};var h=t(1107);const m={navbar__brand:"navbar__brand_rgXC",heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function g(){const{siteConfig:e}=(0,a.A)();return(0,o.jsx)("header",{className:(0,s.A)("hero hero--secondary",m.heroBanner),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(h.A,{as:"h1",className:"hero__title",children:(0,o.jsx)("img",{src:"img/logo.svg",style:{width:"200px"},alt:"SWMP"})}),(0,o.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,o.jsx)("div",{className:m.buttons,children:(0,o.jsx)(i.A,{className:"button button--primary button--lg",to:"/docs/Benutzer/introduction",children:"Loslegen"})})]})})}function v(){return(0,o.jsxs)(r.A,{title:"SWMP",description:"SWMP",children:[(0,o.jsx)(g,{}),(0,o.jsx)("main",{children:(0,o.jsx)(u,{})})]})}}}]);