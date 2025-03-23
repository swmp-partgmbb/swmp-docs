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
python -m venv venv
source venv/bin/activate  # Unter Windows verwenden Sie venv\Scripts\activate
pip install -r requirements.txt
```
- Richten Sie das Frontend ein:
```
cd frontend
npm install
```
- Erstellen Sie eine `.env`-Datei im `backend`-Verzeichnis und fügen Sie Ihre API Keys, Endpoints und Names hinzu (sie können in der Azure Portal nachgeschaut werden):
```
OPENAI_API_KEY=API_KEY
AZURE_OPENAI_API_KEY=API_KEY
PERPLEXITY_API_KEY=API_KEY

AZURE_STORAGE_ACCOUNT_NAME=NAME
AZURE_STORAGE_ACCOUNT_KEY=API_KEY
AZURE_STORAGE_ACCOUNT_NAME_PUBLICKNOWLEDGESTORAGE=NAME
AZURE_STORAGE_ACCOUNT_KEY_PUBLICKNOWLEDGESTORAGE=API_KEY

AZURE_BLOB_STORAGE_CONNECTION_STRING=API_KEY
AZURE_BLOB_STORAGE_CONNECTION_STRING_PUBLICKNOWLEDGESTORAGE=API_KEY

AZURE_SEARCH_SERVICE_ENDPOINT=ENDPOINT
AZURE_SEARCH_ADMIN_KEY=API_KEY
AZURE_SEARCH_INDEX_NAME=INDEX_NAME
AZURE_SEARCH_INDEX_NAME_PUBLICKNOWLEDGESTORAGE=INDEX_NAME

AZURE_FORM_RECOGNIZER_ENDPOINT=ENDPOINT
AZURE_FORM_RECOGNIZER_KEY=API_KEY
```

### Verwendung local

um Microsoft Intra ID local zu vermeiden und urls zu ändern, können Sie den Script `switch.js` ausführen.
```
node frontend/switch.js
```

dann können Sie die Anwendung lokal ausführen.
```
run.cmd
```





