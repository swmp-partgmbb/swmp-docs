"use strict";(self.webpackChunkrag_chat_bot_docs=self.webpackChunkrag_chat_bot_docs||[]).push([[8064],{1282:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(4848),i=r(8453);const s={id:"azure-cognitive-search-for-semantic-search",title:"Azure Cognitive Search for Semantic Search",sidebar_position:3},a="Azure Cognitive Search for Semantic Search",c={id:"Research/Azure Deployment/azure-cognitive-search-for-semantic-search",title:"Azure Cognitive Search for Semantic Search",description:"Zur Optimierung der Dokumentensuche wird Azure Cognitive Search mit Vektorbasierter",source:"@site/docs/Research/Azure Deployment/Azure Cognitive Search for Semantic Search.md",sourceDirName:"Research/Azure Deployment",slug:"/Research/Azure Deployment/azure-cognitive-search-for-semantic-search",permalink:"/swmp-docs/docs/Research/Azure Deployment/azure-cognitive-search-for-semantic-search",draft:!1,unlisted:!1,editUrl:"https://github.com/swmp-partgmbb/swmp-docs/blob/main/docs/Research/Azure Deployment/Azure Cognitive Search for Semantic Search.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"azure-cognitive-search-for-semantic-search",title:"Azure Cognitive Search for Semantic Search",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Azure Storage Infrastructure",permalink:"/swmp-docs/docs/Research/Azure Deployment/azure-storage-infrastructure"},next:{title:"Scalable and Automated Document Processing",permalink:"/swmp-docs/docs/Research/Azure Deployment/scalable-and-automated-document-processing"}},o={},d=[];function u(e){const n={code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"azure-cognitive-search-for-semantic-search",children:"Azure Cognitive Search for Semantic Search"})}),"\n",(0,t.jsx)(n.p,{children:"Zur Optimierung der Dokumentensuche wird Azure Cognitive Search mit Vektorbasierter\nAbfrageverarbeitung verwendet."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Azure Cognitive Search",src:r(7995).A+"",width:"2852",height:"902"})}),"\n",(0,t.jsx)(n.p,{children:"In Azure Cognitive Search spielen drei Hauptkomponenten (Data Sources, Indexers und Indexes)\neine entscheidende Rolle beim Indizieren und Abrufen von Suchergebnissen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Source"}),": Ist die Quelle, aus der Azure Cognitive Search die Daten extrahiert. Es handelt sich um eine externe Datenbank oder ein Speichersystem, das Azure Cognitive Search verwendet, um den Index zu bef\xfcllen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Indexer"}),": Ist eine automatisierte Pipeline, die Daten aus einer Data Source extrahiert, verarbeitet und in einen Index \xfcberf\xfchrt. Er sorgt daf\xfcr, dass die Daten regelm\xe4\xdfig oder nach einem Zeitplan aktualisiert werden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Index"}),": Ist die Kernkomponente von Azure Cognitive Search, die durchsuchbare Daten speichert. Er funktioniert \xe4hnlich wie eine Tabelle in einer Datenbank, jedoch mit zus\xe4tzlichen Suchfunktionen."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Die Indexierung erfolgt \xfcber ein vordefiniertes Schema:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "vector",\n    "type": "Collection(Edm.Single)",\n    "searchable": true,\n    "stored": true,\n    "dimensions": 1536,\n    "vectorSearchProfile": "..."\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Durch die Nutzung von vektorbasierter Suche wird sichergestellt, dass semantisch \xe4hnliche Inhalte effizient abgerufen werden k\xf6nnen, selbst wenn die urspr\xfcngliche Suchanfrage nicht exakt mit den gespeicherten Dokumenten \xfcbereinstimmt."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},7995:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/azure_search-62e358d98f41bdf917a673d6fa39159e.png"},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);