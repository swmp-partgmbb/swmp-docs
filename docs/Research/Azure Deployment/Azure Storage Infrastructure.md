---
id: azure-storage-infrastructure
title: "Azure Storage Infrastructure"
sidebar_position: 2
---

# Azure Storage Infrastructure

Das System nutzt Azure Storage Account für die Speicherung und Verwaltung von Dokumenten
und Metadaten.

Der Benutzer lädt ein PDF-Dokument über das Frontend hoch, das anschließend zur Verarbeitung
an das Backend weitergeleitet wird. Im Backend wird das PDF analysiert, wobei der
Text extrahiert und in kleinere Chunks segmentiert wird. Zusätzlich wird ein Hash-Wert für das
Dokument generiert, um spätere Änderungen erkennen zu können.

Nach der Verarbeitung erfolgt die Speicherung der Daten in Azure Storage. Die ur-
sprüngliche PDF-Datei wird im Blob Storage unter dem Container „files“ abgelegt, während eine
Base64-kodierte Version im Container „base64“ gespeichert wird. Die Dokumentenliste, bestehend
aus Name, ID, Metadaten etc., wird in Table Storage unter „list“ verwaltet. Darüber hinaus werden
Vektorrepräsentationen der extrahierten Inhalte erzeugt und mit einer Base64-Referenz in Table
Storage im Bereich „vectors“ abgelegt.