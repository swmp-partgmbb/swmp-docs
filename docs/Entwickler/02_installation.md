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
1. Platziere die PDF-Dokumente im Verzeichnis backend/data/raw.
2. Führe das Vorverarbeitungsskript aus:
```
cd backend
./preprocess.cmd
```

### Starten der Anwendung
1. Starte beide Server (Frontend und Backend) durch Ausführen dieses Skripts:
```
./run.cmd
```
2. Öffne deinen Browser und navigiere zu `http://localhost:5173` (oder der von Vite angegebenen URL).

### Verwendung
1. Registriere dich für ein neues Konto oder melde dich mit bestehenden Anmeldedaten an.
2. Nach der Anmeldung wirst du zur Chat-Oberfläche weitergeleitet.
3. Gib deine Fragen in die Chat-Eingabe ein und drücke Enter oder klicke auf die Senden-Schaltfläche.
4. Passen die Einstellungen nach Bedarf an (Modellauswahl, Datenbanknutzung, Anzahl relevanter Dokumente).
5. Sehe dir die KI-generierten Antworten im Chat-Fenster an.