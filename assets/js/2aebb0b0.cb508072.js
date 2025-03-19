"use strict";(self.webpackChunkrag_chat_bot_docs=self.webpackChunkrag_chat_bot_docs||[]).push([[5649],{889:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var t=r(4848),i=r(8453),s=r(6025),a=r(1122);const d={id:"azure-deployment",title:"Azure Deployment",sidebar_position:3},u="Azure Deployment",l={id:"Research/azure-deployment",title:"Azure Deployment",description:"F\xfcr die Bereitstellung des SWMP-Chat-Systems wurde Microsoft Azure als Cloud-Plattform ge-",source:"@site/docs/Research/Azure Deployment.md",sourceDirName:"Research",slug:"/Research/azure-deployment",permalink:"/swmp-docs/docs/Research/azure-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/swmp-partgmbb/swmp-docs/blob/main/docs/Research/Azure Deployment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"azure-deployment",title:"Azure Deployment",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"RAG Best Practices",permalink:"/swmp-docs/docs/Research/rag-best-practices"}},c={},o=[{value:"Azure Storage Infrastructure",id:"azure-storage-infrastructure",level:2},{value:"Azure Cognitive Search for Semantic Search",id:"azure-cognitive-search-for-semantic-search",level:2},{value:"Scalable and Automated Document Processing",id:"scalable-and-automated-document-processing",level:2},{value:"Publicly Available Data",id:"publicly-available-data",level:3},{value:"Internal Enterprise Data",id:"internal-enterprise-data",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"azure-deployment",children:"Azure Deployment"})}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr die Bereitstellung des SWMP-Chat-Systems wurde Microsoft Azure als Cloud-Plattform ge-\nw\xe4hlt, da sie eine hochskalierbare und sichere Umgebung f\xfcr die Bereitstellung von\nWebanwendungen und KI-gest\xfctzten Systemen bietet. Die Hauptkomponenten der Deployment-\nArchitektur umfassen das Frontend, das Backend, das Scraper, die Datenverarbeitung sowie die\nDokumentensynchronisation."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(a.A,{alt:"Docusaurus themed image",sources:{light:(0,s.Ay)("/img/preprocessing.png"),dark:(0,s.Ay)("/img/preprocessing.png")}}),";\n",(0,t.jsx)(n.em,{children:"Abb. 1: diese Architektur stellt eine moderne Webanwendung dar, die auf einer Cloud-Infrastruktur basiert. Sie kombiniert ein leistungsstarkes Frontend (Vue.js, TypeScript) mit einem skalierbaren Backend (Flask, Python) und nutzt Azure-Dienste zur Hosting der Anwandung und Verarbeitung, Speicherung und Analyse von Daten. Externe LLMs und Scraping-Dienste erweitern die Funktionalit\xe4t der Anwendung."})]}),"\n",(0,t.jsx)(n.p,{children:"Das Frontend wird als Azure Static Web App gehostet und nutzt GitHub Actions f\xfcr automatisierte\nDeployments:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Continuous Integration (CI) / Continuous Deployment (CD): Konfiguration eines GitHub-Actions-Workflows zur Automatisierung von Build- und Deployment-Prozessen."}),"\n",(0,t.jsx)(n.li,{children:"Build und Deployment: Nutzung von Azure/static-web-apps-deploy@v1, um das kompilierte Frontend bereitzustellen."}),"\n",(0,t.jsx)(n.li,{children:"Automatische Bereinigung von Ressourcen: Nach dem Merge von Pull Requests erfolgt eine automatische Bereinigung von nicht mehr ben\xf6tigten Ressourcen."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Das Backend wird als Azure App Service bereitgestellt und integriert ebenfalls eine CI/CD-Pipeline\nmit GitHub Actions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Deployment mittels GitHub Actions: Verwendung von azure/webapps-deploy@v3, um den neuesten Code automatisch zu ver\xf6ffentlichen."}),"\n",(0,t.jsx)(n.li,{children:"Virtuelle Umgebung und Abh\xe4ngigkeitsmanagement: Installation der notwendigen Python-Abh\xe4ngigkeiten mittels pip install -r requirements.txt."}),"\n",(0,t.jsx)(n.li,{children:"Sichere Bereitstellung: Nutzung von Azure App Service Managed Identity zur Absicherung des Zugriffs auf andere Azure-Ressourcen."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"azure-storage-infrastructure",children:"Azure Storage Infrastructure"}),"\n",(0,t.jsx)(n.p,{children:"Das System nutzt Azure Storage Account f\xfcr die Speicherung und Verwaltung von Dokumenten\nund Metadaten."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(3480).A+"",children:(0,t.jsx)(n.img,{src:r(5860).A+"",width:"1105",height:"1411"})}),"\n",(0,t.jsx)(n.em,{children:"Abb. 2: das Diagramm beschreibt einen automatisierten PDF-Verarbeitungsworkflow, bei dem ein Benutzer eine Datei hochl\xe4dt, das Backend die Datei verarbeitet und die Ergebnisse in Azure Blob- und Table-Storage speichert."})]}),"\n",(0,t.jsx)(n.p,{children:"Der Benutzer l\xe4dt ein PDF-Dokument \xfcber das Frontend hoch, das anschlie\xdfend zur Verarbeitung\nan das Backend weitergeleitet wird. Im Backend wird das PDF analysiert, wobei der\nText extrahiert und in kleinere Chunks segmentiert wird. Zus\xe4tzlich wird ein Hash-Wert f\xfcr das\nDokument generiert, um sp\xe4tere \xc4nderungen erkennen zu k\xf6nnen."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(6631).A+"",children:(0,t.jsx)(n.img,{src:r(819).A+"",width:"2653",height:"1230"})}),"\n",(0,t.jsx)(n.em,{children:"Abb. 3: das Bild stellt eine Datenbank- und Speicherarchitektur f\xfcr die Verwaltung von PDF-Dateien und deren Metadaten dar. Es zeigt die Struktur und Beziehungen zwischen verschiedenen Tabellen und Speichercontainern."})]}),"\n",(0,t.jsx)(n.p,{children:"Nach der Verarbeitung erfolgt die Speicherung der Daten in Azure Storage. Die ur-\nspr\xfcngliche PDF-Datei wird im Blob Storage unter dem Container \u201efiles\u201c abgelegt, w\xe4hrend eine\nBase64-kodierte Version im Container \u201ebase64\u201c gespeichert wird. Die Dokumentenliste, bestehend\naus Name, ID, Metadaten etc., wird in Table Storage unter \u201elist\u201c verwaltet. Dar\xfcber hinaus werden\nVektorrepr\xe4sentationen der extrahierten Inhalte erzeugt und mit einer Base64-Referenz in Table\nStorage im Bereich \u201evectors\u201c abgelegt."}),"\n",(0,t.jsx)(n.h2,{id:"azure-cognitive-search-for-semantic-search",children:"Azure Cognitive Search for Semantic Search"}),"\n",(0,t.jsx)(n.p,{children:"Zur Optimierung der Dokumentensuche wird Azure Cognitive Search mit Vektorbasierter\nAbfrageverarbeitung verwendet."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Azure Cognitive Search",src:r(1368).A+"",width:"2852",height:"902"}),"\n",(0,t.jsx)(n.em,{children:"Abb. 4: innerhalb von Azure AI Search \xfcbernimmt die Indexierungs-Engine die Transformation der Rohdaten (z.B die Vektoren) in durchsuchbare Strukturen, die anschlie\xdfend in optimierten Indizes gespeichert werden. Die Abfrage-Engine erm\xf6glicht schnelle und pr\xe4zise Suchanfragen, indem sie effizient durch die indexierten Daten navigiert und entweder eine Ergebnisliste oder ein einzelnes relevantes Dokument zur\xfcckliefert."})]}),"\n",(0,t.jsx)(n.p,{children:"In Azure Cognitive Search spielen drei Hauptkomponenten (Data Sources, Indexers und Indexes)\neine entscheidende Rolle beim Indizieren und Abrufen von Suchergebnissen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Source"}),": Ist die Quelle, aus der Azure Cognitive Search die Daten extrahiert. Es handelt sich um eine externe Datenbank oder ein Speichersystem, das Azure Cognitive Search verwendet, um den Index zu bef\xfcllen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Indexer"}),": Ist eine automatisierte Pipeline, die Daten aus einer Data Source extrahiert, verarbeitet und in einen Index \xfcberf\xfchrt. Er sorgt daf\xfcr, dass die Daten regelm\xe4\xdfig oder nach einem Zeitplan aktualisiert werden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Index"}),": Ist die Kernkomponente von Azure Cognitive Search, die durchsuchbare Daten speichert. Er funktioniert \xe4hnlich wie eine Tabelle in einer Datenbank, jedoch mit zus\xe4tzlichen Suchfunktionen."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Die Indexierung erfolgt \xfcber ein vordefiniertes Schema:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "vector",\n    "type": "Collection(Edm.Single)",\n    "searchable": true,\n    "stored": true,\n    "dimensions": 1536,\n    "vectorSearchProfile": "..."\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Durch die Nutzung von vektorbasierter Suche wird sichergestellt, dass semantisch \xe4hnliche Inhalte effizient abgerufen werden k\xf6nnen, selbst wenn die urspr\xfcngliche Suchanfrage nicht exakt mit den gespeicherten Dokumenten \xfcbereinstimmt."}),"\n",(0,t.jsx)(n.h2,{id:"scalable-and-automated-document-processing",children:"Scalable and Automated Document Processing"}),"\n",(0,t.jsx)(n.p,{children:"Um die Aktualit\xe4t der Daten zu gew\xe4hrleisten, wurde eine Azure Function implementiert, die regelm\xe4\xdfig neue Dokumente von der Quelle swmp.eu extrahiert und verarbeitet. Dies geschieht in mehreren Schritten:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xdcberpr\xfcfung auf neue oder ge\xe4nderte Dokumente durch Hash-Vergleich mit bereits gespeicherten Dateien."}),"\n",(0,t.jsx)(n.li,{children:"Automatische Speicherung von \xc4nderungen in den Azure Blob Storage und Azure Table Storage."}),"\n",(0,t.jsx)(n.li,{children:"Re-Indexierung der Metadaten in Azure Cognitive Search f\xfcr eine optimierte Abfrageleistung."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Diese Architektur stellt sicher, dass das System auch bei steigender Datenmenge effizient bleibt, w\xe4hrend gleichzeitig die Aktualit\xe4t und Relevanz der bereitgestellten Informationen gew\xe4hrleistet wird."}),"\n",(0,t.jsx)(n.p,{children:"Das Deployment des Scrapers geschieht \xfcber eine GitHub Actions-Pipeline. Nach einem Push auf main wird der Code gebaut, in eine ZIP-Datei verpackt, in GitHub Actions gespeichert und anschlie\xdfend in Azure Functions bereitgestellt."}),"\n",(0,t.jsx)(n.h3,{id:"publicly-available-data",children:"Publicly Available Data"}),"\n",(0,t.jsx)(n.p,{children:"\xd6ffentliche Dokumente, die auf unserer Website oder in LexInform ver\xf6ffentlicht werden, werden durch einen automatisierten Web-Crawling-Mechanismus regelm\xe4\xdfig erfasst."}),"\n",(0,t.jsx)(n.p,{children:"Dieser durchsucht definierte Quellen nach neuen oder ge\xe4nderten Inhalten, extrahiert relevante Informationen und speichert sie in einem strukturierten Format."}),"\n",(0,t.jsx)(n.p,{children:"Ein zentrales Verfahren zur \xdcberpr\xfcfung der Aktualit\xe4t von Dokumenten basiert auf der Hash-Berechnung der letzten Seite des jeweiligen Dokuments und eine Existenzpr\xfcfung des Dokuments durch einen direkten Abgleich mit Azure Table Storage. Diese Methode stellt sicher, dass \xc4nderungen am Dokument zuverl\xe4ssig erkannt werden, ohne dass die gesamte Datei erneut analysiert werden muss. Falls eine Datei mit demselben Namen bereits vorhanden ist, wird sie entweder als aktualisiert markiert oder verworfen, falls keine \xc4nderungen festgestellt werden."}),"\n",(0,t.jsx)(n.h3,{id:"internal-enterprise-data",children:"Internal Enterprise Data"}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr interne Daten, die f\xfcr Mitarbeiter relevant sind, erfolgt die Verarbeitung \xfcber das Microsoft Gateway Graph API."}),"\n",(0,t.jsx)(n.p,{children:"Die Azure Function App kommuniziert \xfcber die Graph API mit den jeweiligen Ressourcen und ruft relevante Dokumente ab. Um die Aktualit\xe4t der Informationen zu gew\xe4hrleisten, werden \xc4nderungen und neue Inhalte \xfcber \xc4nderungsfeeds und Webhooks erkannt und synchronisiert."})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3480:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/preprocessing-4f9fefaf6968e4093529ec643e0aafc0.png"},6631:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/storage_architecture-5597fbbe0b069a3e8f2aeca2fc77a348.png"},1368:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/azure_search-62e358d98f41bdf917a673d6fa39159e.png"},5860:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/preprocessing-4f9fefaf6968e4093529ec643e0aafc0.png"},819:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/storage_architecture-5597fbbe0b069a3e8f2aeca2fc77a348.png"},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);