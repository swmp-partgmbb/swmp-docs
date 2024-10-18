# Einführung

## Zweck der Anwendung
Diese Anwendung ist ein KI-gestütztes Chatsystem, das entwickelt wurde, um den Mitarbeitern der SWMP-Kanzlei zu helfen. Sie bietet eine benutzerfreundliche Oberfläche, über die Mitarbeiter Fragen stellen und präzise, fundierte und verständliche Antworten erhalten können. Das System nutzt einen Retrieval-Augmented Generation (RAG)-Ansatz, der ein großes Sprachmodell mit einem Dokumentenabrufsystem kombiniert, um kontextbewusste und genaue Antworten zu liefern.

## Features
- Benutzerautorisierung (Anmeldung/Registrierung)
- KI-gestützte Chat-Oberfläche
- Dokumentenabruf für kontextbewusste Antworten
- Anpassbare Chat-Einstellungen (Modellauswahl, Datenbanknutzung, Anzahl relevanter Dokumente)

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
- OpenAI: Client-Bibliothek zur Interaktion mit den Sprachmodellen von OpenAI.
- LlamaIndex: ein Datenframework für LLM-basierte Anwendungen, das für Dokumentenabruf und -indizierung verwendet wird.
- ChromaDB: eine Open-Source-Vektordatenbank.
- SQLAlchemy: für Datenbankmanagement.
- pdfplumber: zum Extrahieren von Text aus PDF-Dateien.
- docx2pdf: zum Konvertieren von DOCX-Dateien in PDF.
- PyPDF2: zum Lesen und Schreiben von PDF-Dateien.