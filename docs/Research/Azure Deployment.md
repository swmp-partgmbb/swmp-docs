---
id: azure-deployment
title: "Azure Deployment"
sidebar_position: 3
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

# Azure Deployment

Für die Bereitstellung des SWMP-Chat-Systems wurde Microsoft Azure als Cloud-Plattform ge-
wählt, da sie eine hochskalierbare und sichere Umgebung für die Bereitstellung von
Webanwendungen und KI-gestützten Systemen bietet. Die Hauptkomponenten der Deployment-
Architektur umfassen das Frontend, das Backend, das Scraper, die Datenverarbeitung sowie die
Dokumentensynchronisation.

![Light Mode](img/azure_deployment.png#gh-light-mode-only)
![Dark Mode](img/azure_deployment_dark.png#gh-dark-mode-only)
*Abb. 1: diese Architektur stellt eine moderne Webanwendung dar, die auf einer Cloud-Infrastruktur basiert. Sie kombiniert ein leistungsstarkes Frontend (Vue.js, TypeScript) mit einem skalierbaren Backend (Flask, Python) und nutzt Azure-Dienste zur Hosting der Anwandung und Verarbeitung, Speicherung und Analyse von Daten. Externe LLMs und Scraping-Dienste erweitern die Funktionalität der Anwendung.*

Das Frontend wird als Azure Static Web App gehostet und nutzt GitHub Actions für automatisierte
Deployments:

* Continuous Integration (CI) / Continuous Deployment (CD): Konfiguration eines GitHub-Actions-Workflows zur Automatisierung von Build- und Deployment-Prozessen.
* Build und Deployment: Nutzung von Azure/static-web-apps-deploy@v1, um das kompilierte Frontend bereitzustellen.
* Automatische Bereinigung von Ressourcen: Nach dem Merge von Pull Requests erfolgt eine automatische Bereinigung von nicht mehr benötigten Ressourcen.

Das Backend wird als Azure App Service bereitgestellt und integriert ebenfalls eine CI/CD-Pipeline
mit GitHub Actions:

* Deployment mittels GitHub Actions: Verwendung von azure/webapps-deploy@v3, um den neuesten Code automatisch zu veröffentlichen.
* Virtuelle Umgebung und Abhängigkeitsmanagement: Installation der notwendigen Python-Abhängigkeiten mittels pip install -r requirements.txt.
* Sichere Bereitstellung: Nutzung von Azure App Service Managed Identity zur Absicherung des Zugriffs auf andere Azure-Ressourcen.

## Azure Storage Infrastructure

Das System nutzt Azure Storage Account für die Speicherung und Verwaltung von Dokumenten
und Metadaten.

![Light Mode](img/preprocessing.png#gh-light-mode-only)
![Dark Mode](img/preprocessing_dark.png#gh-dark-mode-only)
*Abb. 2: das Diagramm beschreibt einen automatisierten PDF-Verarbeitungsworkflow, bei dem ein Benutzer eine Datei hochlädt, das Backend die Datei verarbeitet und die Ergebnisse in Azure Blob- und Table-Storage speichert.*

Der Benutzer lädt ein PDF-Dokument über das Frontend hoch, das anschließend zur Verarbeitung
an das Backend weitergeleitet wird. Im Backend wird das PDF analysiert, wobei der
Text extrahiert und in kleinere Chunks segmentiert wird. Zusätzlich wird ein Hash-Wert für das
Dokument generiert, um spätere Änderungen erkennen zu können.

![Light Mode](img/storage_architecture.png#gh-light-mode-only)
![Dark Mode](img/storage_architecture_dark.png#gh-dark-mode-only)
*Abb. 3: das Bild stellt eine Datenbank- und Speicherarchitektur für die Verwaltung von PDF-Dateien und deren Metadaten dar. Es zeigt die Struktur und Beziehungen zwischen verschiedenen Tabellen und Speichercontainern.*

Nach der Verarbeitung erfolgt die Speicherung der Daten in Azure Storage. Die ur-
sprüngliche PDF-Datei wird im Blob Storage unter dem Container „files“ abgelegt, während eine
Base64-kodierte Version im Container „base64“ gespeichert wird. Die Dokumentenliste, bestehend
aus Name, ID, Metadaten etc., wird in Table Storage unter „list“ verwaltet. Darüber hinaus werden
Vektorrepräsentationen der extrahierten Inhalte erzeugt und mit einer Base64-Referenz in Table
Storage im Bereich „vectors“ abgelegt.

## Azure Cognitive Search for Semantic Search

Zur Optimierung der Dokumentensuche wird Azure Cognitive Search mit Vektorbasierter
Abfrageverarbeitung verwendet.

![Light Mode](img/azure_search.png#gh-light-mode-only)
![Dark Mode](img/azure_search_dark.png#gh-dark-mode-only)
*Abb. 4: innerhalb von Azure AI Search übernimmt die Indexierungs-Engine die Transformation der Rohdaten (z.B die Vektoren) in durchsuchbare Strukturen, die anschließend in optimierten Indizes gespeichert werden. Die Abfrage-Engine ermöglicht schnelle und präzise Suchanfragen, indem sie effizient durch die indexierten Daten navigiert und entweder eine Ergebnisliste oder ein einzelnes relevantes Dokument zurückliefert.*

In Azure Cognitive Search spielen drei Hauptkomponenten (Data Sources, Indexers und Indexes)
eine entscheidende Rolle beim Indizieren und Abrufen von Suchergebnissen:

- **Data Source**: Ist die Quelle, aus der Azure Cognitive Search die Daten extrahiert. Es handelt sich um eine externe Datenbank oder ein Speichersystem, das Azure Cognitive Search verwendet, um den Index zu befüllen.
- **Indexer**: Ist eine automatisierte Pipeline, die Daten aus einer Data Source extrahiert, verarbeitet und in einen Index überführt. Er sorgt dafür, dass die Daten regelmäßig oder nach einem Zeitplan aktualisiert werden.
- **Index**: Ist die Kernkomponente von Azure Cognitive Search, die durchsuchbare Daten speichert. Er funktioniert ähnlich wie eine Tabelle in einer Datenbank, jedoch mit zusätzlichen Suchfunktionen.

Die Indexierung erfolgt über ein vordefiniertes Schema:

```json
{
    "name": "vector",
    "type": "Collection(Edm.Single)",
    "searchable": true,
    "stored": true,
    "dimensions": 1536,
    "vectorSearchProfile": "..."
}
```

Durch die Nutzung von vektorbasierter Suche wird sichergestellt, dass semantisch ähnliche Inhalte effizient abgerufen werden können, selbst wenn die ursprüngliche Suchanfrage nicht exakt mit den gespeicherten Dokumenten übereinstimmt.

## Scalable and Automated Document Processing

Um die Aktualität der Daten zu gewährleisten, wurde eine Azure Function implementiert, die regelmäßig neue Dokumente von der Quelle swmp.eu extrahiert und verarbeitet. Dies geschieht in mehreren Schritten:

- Überprüfung auf neue oder geänderte Dokumente durch Hash-Vergleich mit bereits gespeicherten Dateien.
- Automatische Speicherung von Änderungen in den Azure Blob Storage und Azure Table Storage.
- Re-Indexierung der Metadaten in Azure Cognitive Search für eine optimierte Abfrageleistung.

Diese Architektur stellt sicher, dass das System auch bei steigender Datenmenge effizient bleibt, während gleichzeitig die Aktualität und Relevanz der bereitgestellten Informationen gewährleistet wird.

Das Deployment des Scrapers geschieht über eine GitHub Actions-Pipeline. Nach einem Push auf main wird der Code gebaut, in eine ZIP-Datei verpackt, in GitHub Actions gespeichert und anschließend in Azure Functions bereitgestellt.

### Publicly Available Data

Öffentliche Dokumente, die auf unserer Website oder in LexInform veröffentlicht werden, werden durch einen automatisierten Web-Crawling-Mechanismus regelmäßig erfasst.

![Light Mode](img/processing_internal_data.png#gh-light-mode-only)
![Dark Mode](img/processing_internal_data_dark.png#gh-dark-mode-only)
*Abb. 5: zeigt die Architektur zur Verarbeitung öffentlich zugänglicher Dokumente aus Quellen wie swmp.eu und lexinform.de. Function App übernimmt dabei die Aufgabe des Web-Crawling und ruft periodisch neue Dokumente ab. Diese werden durch eine API-Interaktion analysiert, verarbeitet und mit relevanten Metadaten angereichert. Die extrahierten Informationen werden in Azure Blob Storage und Azure Table Storage gespeichert.*

Dieser durchsucht definierte Quellen nach neuen oder geänderten Inhalten, extrahiert relevante Informationen und speichert sie in einem strukturierten Format. 

Ein zentrales Verfahren zur Überprüfung der Aktualität von Dokumenten basiert auf der Hash-Berechnung der letzten Seite des jeweiligen Dokuments und eine Existenzprüfung des Dokuments durch einen direkten Abgleich mit Azure Table Storage. Diese Methode stellt sicher, dass Änderungen am Dokument zuverlässig erkannt werden, ohne dass die gesamte Datei erneut analysiert werden muss. Falls eine Datei mit demselben Namen bereits vorhanden ist, wird sie entweder als aktualisiert markiert oder verworfen, falls keine Änderungen festgestellt werden.

### Internal Enterprise Data

Für interne Daten, die für Mitarbeiter relevant sind, erfolgt die Verarbeitung über das Microsoft Gateway Graph API.

![Light Mode](img/processing_publicly_data.png#gh-light-mode-only)
![Dark Mode](img/processing_publicly_data_dark.png#gh-dark-mode-only)
*Abb. 6: beschreibt den Ansatz zur Verarbeitung interner Daten über das Microsoft Graph API. Die Quelle der Daten sind Microsoft-Dienste wie Teams, SharePoint und OneDrive, die durch eine API-Schnittstelle abgerufen werden. Die Authentifizierung erfolgt über OAuth 2.0 mit Entra ID, wodurch eine sichere Zugriffskontrolle gewährleistet ist.*

Die Azure Function App kommuniziert über die Graph API mit den jeweiligen Ressourcen und ruft relevante Dokumente ab. Um die Aktualität der Informationen zu gewährleisten, werden Änderungen und neue Inhalte über Änderungsfeeds und Webhooks erkannt und synchronisiert.