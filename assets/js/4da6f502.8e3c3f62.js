"use strict";(self.webpackChunkrag_chat_bot_docs=self.webpackChunkrag_chat_bot_docs||[]).push([[1471],{2025:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(4848),s=t(8453);const i={id:"azure-storage-infrastructure",title:"Azure Storage Infrastructure",sidebar_position:3},a="Azure Storage Infrastructure",o={id:"Research/Azure Deployment/azure-storage-infrastructure",title:"Azure Storage Infrastructure",description:"Das System nutzt Azure Storage Account f\xfcr die Speicherung und Verwaltung von Dokumenten und Metadaten. Der Dokumentenverarbeitungsprozess umfasst mehrere Schritte:",source:"@site/docs/Research/Azure Deployment/Azure Storage Infrastructure.md",sourceDirName:"Research/Azure Deployment",slug:"/Research/Azure Deployment/azure-storage-infrastructure",permalink:"/swmp-docs/docs/Research/Azure Deployment/azure-storage-infrastructure",draft:!1,unlisted:!1,editUrl:"https://github.com/swmp-partgmbb/swmp-docs/blob/main/docs/Research/Azure Deployment/Azure Storage Infrastructure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"azure-storage-infrastructure",title:"Azure Storage Infrastructure",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploying Backend and Frontend",permalink:"/swmp-docs/docs/Research/Azure Deployment/deploying-backend-and-frontend"},next:{title:"Azure Cognitive Search for Semantic Search",permalink:"/swmp-docs/docs/Research/Azure Deployment/azure-cognitive-search-for-semantic-search"}},u={},c=[];function d(e){const r={h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"azure-storage-infrastructure",children:"Azure Storage Infrastructure"})}),"\n",(0,n.jsx)(r.p,{children:"Das System nutzt Azure Storage Account f\xfcr die Speicherung und Verwaltung von Dokumenten und Metadaten. Der Dokumentenverarbeitungsprozess umfasst mehrere Schritte:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"PDF-Upload \xfcber das Frontend"}),": Der Benutzer l\xe4dt ein PDF-Dokument hoch, das an das Backend zur Verarbeitung weitergeleitet wird."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Dokumentenverarbeitung im Backend"}),":","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Das PDF wird analysiert, und der Text extrahiert."}),"\n",(0,n.jsx)(r.li,{children:"Der extrahierte Text wird in kleinere Chunks segmentiert."}),"\n",(0,n.jsx)(r.li,{children:"Es wird ein Hash-Wert f\xfcr das Dokument generiert, um \xc4nderungen zu erkennen."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Speicherung in Azure Storage"}),":","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Die urspr\xfcngliche PDF-Datei wird im Blob Storage (Container: files) gespeichert."}),"\n",(0,n.jsx)(r.li,{children:"Die Base64-kodierte Version wird im Blob Storage (Container: base64) abgelegt."}),"\n",(0,n.jsx)(r.li,{children:"Die Dokumentenliste (Name, ID, Metadaten) wird in Table Storage (list) gespeichert."}),"\n",(0,n.jsx)(r.li,{children:"Vektorrepr\xe4sentationen der extrahierten Inhalte werden mit einer Base64-Referenz in Table Storage (vectors) gespeichert."}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>o});var n=t(6540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);