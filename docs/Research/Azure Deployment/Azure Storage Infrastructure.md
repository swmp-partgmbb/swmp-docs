---
id: azure-storage-infrastructure
title: "Azure Storage Infrastructure"
sidebar_position: 3
---

# Azure Storage Infrastructure

Das System nutzt Azure Storage Account für die Speicherung und Verwaltung von Dokumenten und Metadaten. Der Dokumentenverarbeitungsprozess umfasst mehrere Schritte:

- **PDF-Upload über das Frontend**: Der Benutzer lädt ein PDF-Dokument hoch, das an das Backend zur Verarbeitung weitergeleitet wird.
- **Dokumentenverarbeitung im Backend**:
  - Das PDF wird analysiert, und der Text extrahiert.
  - Der extrahierte Text wird in kleinere Chunks segmentiert.
  - Es wird ein Hash-Wert für das Dokument generiert, um Änderungen zu erkennen.
- **Speicherung in Azure Storage**:
  - Die ursprüngliche PDF-Datei wird im Blob Storage (Container: files) gespeichert.
  - Die Base64-kodierte Version wird im Blob Storage (Container: base64) abgelegt.
  - Die Dokumentenliste (Name, ID, Metadaten) wird in Table Storage (list) gespeichert.
  - Vektorrepräsentationen der extrahierten Inhalte werden mit einer Base64-Referenz in Table Storage (vectors) gespeichert.