"use strict";(self.webpackChunkrag_chat_bot_docs=self.webpackChunkrag_chat_bot_docs||[]).push([[222],{5744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var i=t(4848),r=t(8453);const s={},l="Einf\xfchrung",a={id:"Entwickler/introduction",title:"Einf\xfchrung",description:"Zweck der Anwendung",source:"@site/docs/Entwickler/01_introduction.md",sourceDirName:"Entwickler",slug:"/Entwickler/introduction",permalink:"/en/docs/Entwickler/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Entwickler/01_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chat",permalink:"/en/docs/Benutzer/introduction"},next:{title:"Installation",permalink:"/en/docs/Entwickler/installation"}},d={},u=[{value:"Zweck der Anwendung",id:"zweck-der-anwendung",level:2},{value:"Features",id:"features",level:2},{value:"Stack",id:"stack",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Backend",id:"backend",level:3}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"einf\xfchrung",children:"Einf\xfchrung"})}),"\n",(0,i.jsx)(n.h2,{id:"zweck-der-anwendung",children:"Zweck der Anwendung"}),"\n",(0,i.jsx)(n.p,{children:"Diese Anwendung ist ein KI-gest\xfctztes Chatsystem, das entwickelt wurde, um den Mitarbeitern der SWMP-Kanzlei zu helfen. Sie bietet eine benutzerfreundliche Oberfl\xe4che, \xfcber die Mitarbeiter Fragen stellen und pr\xe4zise, fundierte und verst\xe4ndliche Antworten erhalten k\xf6nnen. Das System nutzt einen Retrieval-Augmented Generation (RAG)-Ansatz, der ein gro\xdfes Sprachmodell mit einem Dokumentenabrufsystem kombiniert, um kontextbewusste und genaue Antworten zu liefern."}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Benutzerautorisierung (Anmeldung/Registrierung)"}),"\n",(0,i.jsx)(n.li,{children:"KI-gest\xfctzte Chat-Oberfl\xe4che"}),"\n",(0,i.jsx)(n.li,{children:"Dokumentenabruf f\xfcr kontextbewusste Antworten"}),"\n",(0,i.jsx)(n.li,{children:"Anpassbare Chat-Einstellungen (Modellauswahl, Datenbanknutzung, Anzahl relevanter Dokumente)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"stack",children:"Stack"}),"\n",(0,i.jsx)(n.h3,{id:"frontend",children:"Frontend"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Vue.js 3: ein progressives JavaScript-Framework zum Erstellen von Benutzeroberfl\xe4chen."}),"\n",(0,i.jsx)(n.li,{children:"TypeScript: ein statisch typisiertes Superset von JavaScript, das bessere Werkzeuge und Fehlererkennung bietet."}),"\n",(0,i.jsx)(n.li,{children:"Vite: Next-Generation-Frontend-Tooling, das einen schnellen Entwicklungsserver und optimierte Builds bereitstellt."}),"\n",(0,i.jsx)(n.li,{children:"Axios: Promise-basierter HTTP-Client f\xfcr API-Anfragen."}),"\n",(0,i.jsx)(n.li,{children:"vue-router: Offizieller Router f\xfcr Vue.js."}),"\n",(0,i.jsx)(n.li,{children:"vuex: Zustandsverwaltungsbibliothek f\xfcr Vue.js."}),"\n",(0,i.jsx)(n.li,{children:"vue-i18n: Internationalisierungsbibliothek f\xfcr Vue.js."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"backend",children:"Backend"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Python: eine vielseitige, hochgradig lesbare Programmiersprache mit umfangreichen Bibliotheken."}),"\n",(0,i.jsx)(n.li,{children:"Flask: ein leichtgewichtiges Webanwendungs-Framework f\xfcr Python."}),"\n",(0,i.jsx)(n.li,{children:"OpenAI: Client-Bibliothek zur Interaktion mit den Sprachmodellen von OpenAI."}),"\n",(0,i.jsx)(n.li,{children:"LlamaIndex: ein Datenframework f\xfcr LLM-basierte Anwendungen, das f\xfcr Dokumentenabruf und -indizierung verwendet wird."}),"\n",(0,i.jsx)(n.li,{children:"ChromaDB: eine Open-Source-Vektordatenbank."}),"\n",(0,i.jsx)(n.li,{children:"SQLAlchemy: f\xfcr Datenbankmanagement."}),"\n",(0,i.jsx)(n.li,{children:"pdfplumber: zum Extrahieren von Text aus PDF-Dateien."}),"\n",(0,i.jsx)(n.li,{children:"docx2pdf: zum Konvertieren von DOCX-Dateien in PDF."}),"\n",(0,i.jsx)(n.li,{children:"PyPDF2: zum Lesen und Schreiben von PDF-Dateien."}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);