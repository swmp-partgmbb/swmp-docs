---
id: scalable-and-automated-document-processing
title: "Scalable and Automated Document Processing"
sidebar_position: 5
---

# Scalable and Automated Document Processing

Um die Aktualität der Daten zu gewährleisten, wurde eine Azure Function implementiert, die regelmäßig neue Dokumente von der Quelle swmp.eu extrahiert und verarbeitet. Dies geschieht in mehreren Schritten:

- Überprüfung auf neue oder geänderte Dokumente durch Hash-Vergleich mit bereits gespeicherten Dateien.
- Automatische Speicherung von Änderungen in den Azure Blob Storage und Azure Table Storage.
- Re-Indexierung der Metadaten in Azure Cognitive Search für eine optimierte Abfrageleistung.

Diese Architektur stellt sicher, dass das System auch bei steigender Datenmenge effizient bleibt, während gleichzeitig die Aktualität und Relevanz der bereitgestellten Informationen gewährleistet wird.