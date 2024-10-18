# Installation

### Voraussetzungen
- Node.js (v14 oder höher)
- Python (v3.8 oder höher)
- pip
- npm

### Installation
- Klonen Sie das Repository
```
git clone https://github.com/nmkzzztos/RAG_project.git
cd RAG_project
```
- Richten Sie das Backend ein:
```
cd backend
python -m venv venv
source venv/bin/activate  # Unter Windows verwenden Sie venv\Scripts\activate
pip install -r requirements.txt
```
- Richten Sie das Frontend ein:
```
cd ../frontend
npm install
```
- Erstellen Sie eine `.env`-Datei im `backend`-Verzeichnis und fügen Sie Ihren OpenAI API-Schlüssel hinzu:
```
OPENAI_API_KEY=Ihr_API_Schlüssel_hier
```

### Datenvorverarbeitung
Um die Dokumente für das RAG-System vorzuverarbeiten:
1. Platzieren Sie Ihre PDF-Dokumente im Verzeichnis backend/data/raw.
2. Führen Sie das Vorverarbeitungsskript aus:
```
cd backend
./preprocess.cmd
```

### Starten der Anwendung
1. Starten Sie beide Server (Frontend und Backend) durch Ausführen dieses Skripts:
```
./run.cmd
```
2. Öffnen Sie Ihren Browser und navigieren Sie zu `http://localhost:5173` (oder der von Vite angegebenen URL).

### Verwendung
1. Registrieren Sie sich für ein neues Konto oder melden Sie sich mit bestehenden Anmeldedaten an.
2. Nach der Anmeldung werden Sie zur Chat-Oberfläche weitergeleitet.
3. Geben Sie Ihre Fragen in die Chat-Eingabe ein und drücken Sie Enter oder klicken Sie auf die Senden-Schaltfläche.
4. Passen Sie die Einstellungen nach Bedarf an (Modellauswahl, Datenbanknutzung, Anzahl relevanter Dokumente).
5. Sehen Sie sich die KI-generierten Antworten im Chat-Fenster an.