"use strict";(self.webpackChunkrag_chat_bot_docs=self.webpackChunkrag_chat_bot_docs||[]).push([[5082],{8723:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=i(4848),t=i(8453);const s={},l="Installation",d={id:"Entwickler/installation",title:"Installation",description:"Voraussetzungen",source:"@site/docs/Entwickler/02_installation.md",sourceDirName:"Entwickler",slug:"/Entwickler/installation",permalink:"/swmp-docs/docs/Entwickler/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/swmp-partgmbb/swmp-docs/blob/main/docs/Entwickler/02_installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Einf\xfchrung",permalink:"/swmp-docs/docs/Entwickler/introduction"},next:{title:"Retrieval-Augmented Generation",permalink:"/swmp-docs/docs/Research/retrieval-augmented-generation"}},c={},a=[{value:"Voraussetzungen",id:"voraussetzungen",level:3},{value:"Installation",id:"installation-1",level:3},{value:"Datenvorverarbeitung",id:"datenvorverarbeitung",level:3},{value:"Starten der Anwendung",id:"starten-der-anwendung",level:3},{value:"Verwendung",id:"verwendung",level:3}];function o(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,r.jsx)(n.h3,{id:"voraussetzungen",children:"Voraussetzungen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Node.js (v14 oder h\xf6her)"}),"\n",(0,r.jsx)(n.li,{children:"Python (v3.8 oder h\xf6her)"}),"\n",(0,r.jsx)(n.li,{children:"pip"}),"\n",(0,r.jsx)(n.li,{children:"npm"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Klonen Sie das Repository"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"git clone https://github.com/nmkzzztos/RAG_project.git\ncd RAG_project\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Richten Sie das Backend ein:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd backend\npython -m venv venv\nsource venv/bin/activate  # Unter Windows verwenden Sie venv\\Scripts\\activate\npip install -r requirements.txt\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Richten Sie das Frontend ein:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd ../frontend\nnpm install\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Erstellen Sie eine ",(0,r.jsx)(n.code,{children:".env"}),"-Datei im ",(0,r.jsx)(n.code,{children:"backend"}),"-Verzeichnis und f\xfcgen Sie Ihren OpenAI API-Schl\xfcssel hinzu:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"OPENAI_API_KEY=Ihr_API_Schl\xfcssel_hier\n"})}),"\n",(0,r.jsx)(n.h3,{id:"datenvorverarbeitung",children:"Datenvorverarbeitung"}),"\n",(0,r.jsx)(n.p,{children:"Um die Dokumente f\xfcr das RAG-System vorzuverarbeiten:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Platziere die PDF-Dokumente im Verzeichnis backend/data/raw."}),"\n",(0,r.jsx)(n.li,{children:"F\xfchre das Vorverarbeitungsskript aus:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd backend\n./preprocess.cmd\n"})}),"\n",(0,r.jsx)(n.h3,{id:"starten-der-anwendung",children:"Starten der Anwendung"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Starte beide Server (Frontend und Backend) durch Ausf\xfchren dieses Skripts:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"./run.cmd\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\xd6ffne deinen Browser und navigiere zu ",(0,r.jsx)(n.code,{children:"http://localhost:5173"})," (oder der von Vite angegebenen URL)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"verwendung",children:"Verwendung"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Registriere dich f\xfcr ein neues Konto oder melde dich mit bestehenden Anmeldedaten an."}),"\n",(0,r.jsx)(n.li,{children:"Nach der Anmeldung wirst du zur Chat-Oberfl\xe4che weitergeleitet."}),"\n",(0,r.jsx)(n.li,{children:"Gib deine Fragen in die Chat-Eingabe ein und dr\xfccke Enter oder klicke auf die Senden-Schaltfl\xe4che."}),"\n",(0,r.jsx)(n.li,{children:"Passen die Einstellungen nach Bedarf an (Modellauswahl, Datenbanknutzung, Anzahl relevanter Dokumente)."}),"\n",(0,r.jsx)(n.li,{children:"Sehe dir die KI-generierten Antworten im Chat-Fenster an."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var r=i(6540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);