# Einführung

## Zweck der Anwendung
Diese Anwendung ist ein KI-gestütztes Chatsystem, das entwickelt wurde, um den Mitarbeitern der SWMP-Kanzlei zu helfen. Sie bietet eine benutzerfreundliche Oberfläche, über die Mitarbeiter Fragen stellen und präzise, fundierte und verständliche Antworten erhalten können. Das System nutzt einen Retrieval-Augmented Generation (RAG)-Ansatz, der ein großes Sprachmodell mit einem Dokumentenabrufsystem kombiniert, um kontextbewusste und genaue Antworten zu liefern.

## Features
- Benutzerautorisierung (Anmeldung via Microsoft Entra ID)
- Chat-Oberfläche (über Vue.js)
- Dokumentenabruf für kontextbewusste Antworten (über Azure Cognitive Search)
- Antwort Generierung (über OpenAI API)
- Internet Suche (über Perplexity API)
- Anpassbare Chat-Einstellungen (Modellauswahl, Datenbanknutzung, Anzahl relevanter Dokumente)
- Chat-Historie (Anzeigen, Löschen)
- Dokumentenverwaltung (über Azure Blob Storage)

## Stack

### Frontend

- Vue.js 3: ein progressives JavaScript-Framework zum Erstellen von Benutzeroberflächen.
- TypeScript: ein statisch typisiertes Superset von JavaScript, das bessere Werkzeuge und Fehlererkennung bietet.
- Vite: Next-Generation-Frontend-Tooling, das einen schnellen Entwicklungsserver und optimierte Builds bereitstellt.
- Axios: Promise-basierter HTTP-Client für API-Anfragen.
- vue-router: Offizieller Router für Vue.js.
- vuex: Zustandsverwaltungsbibliothek für Vue.js.
- vue-i18n: Internationalisierungsbibliothek für Vue.js.

### Backend
- Python: eine vielseitige, hochgradig lesbare Programmiersprache mit umfangreichen Bibliotheken.
- Flask: ein leichtgewichtiges Webanwendungs-Framework für Python.
- Flask-CORS: für Cross-Origin Resource Sharing.
- OpenAI: Client-Bibliothek zur Interaktion mit den Sprachmodellen von OpenAI und Perplexity.
- azure-search-documents: Client-Bibliothek zur Interaktion mit Azure Cognitive Search.
- azure-storage-blob: Client-Bibliothek zur Interaktion mit Azure Blob Storage.
- azure-data-tables: Client-Bibliothek zur Interaktion mit Azure Table Storage.
- azure-core: Core-Bibliothek für Azure-Dienste.
- azure-identity: Client-Bibliothek zur Interaktion mit Azure Identity.
- pydantic: für Datenvalidierung.
- pdfplumber: zum Extrahieren von Text aus PDF-Dateien.
- docx2pdf: zum Konvertieren von DOCX-Dateien in PDF.
- PyPDF2: zum Lesen und Schreiben von PDF-Dateien.
- PyMuPDF: zum Lesen und Schreiben von PDF-Dateien.
