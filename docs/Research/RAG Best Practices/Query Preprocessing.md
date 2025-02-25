---
id: query-preprocessing
title: "Query Preprocessing"
sidebar_position: 3
---

# Query Preprocessing

Ein wichtiger Aspekt dieser Systeme ist das Preprocessing von Anfragen, also die Vorverarbeitung der Queries vor dem eigentlichen Abrufprozess.

## Suchmethoden

In der Informationsbeschaffung und Suchmaschinenoptimierung werden verschiedene fortschrittliche Techniken eingesetzt, um die Qualität und Relevanz der Suchergebnisse zu verbessern.

- **Query Routing**: Leitet Anfragen an die am besten geeigneten Suchmaschinen oder Datenbanken. Optimiert die Effizienz und erhöht die Wahrscheinlichkeit hochwertiger Ergebnisse.
- **Query Rewriting**: Verfeinert die ursprüngliche Suchanfrage zur Verbesserung der Relevanz der Ergebnisse. Zeigt signifikante Verbesserungen in den Abrufquoten.
- **Query Expansion**: Erweitert die ursprüngliche Anfrage mit verwandten Begriffen und Phrasen. Als Beispiel HyDE (Hypothetical Document Embeddings). Beseitigt Probleme wie Tippfehler und übermäßig spezifische Begriffe.
- **Hybrid Search**: Integration von Schlüsselwortsuche (BM25/TF-IDF) und semantischer Suche (Original embedding). Bietet vielseitige Sucherfahrungen, ruft sowohl spezifische als auch allgemeine Dokumente ab.

## Vergleich der Suchmethoden

Die Kombination dieser Features führt in der Regel zu besseren Ergebnissen als der Einsatz einzelner Methoden. Insbesondere die Integration von Hybrid Search mit HyDE zeigt überlegene Leistung in der Aufrechterhaltung von Effizienz und Effektivität, besonders in komplexen Abrufsystemen. 

### Vergleichstabelle der Suchmethoden

| **Feature**                                | **TREC DL19** |                |                | **TREC DL20** |                |                |
|--------------------------------------------|----------------|----------------|----------------|----------------|----------------|----------------|
|                                            | **mAP**        | **nDCG@10**    | **Latency**     | **mAP**        | **nDCG@10**    | **Latency**     |
| Query Rewriting                            | 44.56          | 67.89          | 7.80           | 45.16          | 65.62          | 2.06           |
| Hybrid Search                              | 47.14          | 72.50          | **3.20**       | 47.72          | 69.80          | **0.77**       |
| HyDE (Hypothetical Document Embeddings)   | 50.87          | **75.44**      | 7.21           | 50.94          | **73.94**      | 2.14           |
| HyDE + Hybrid Search                       | **52.13**      | 73.34          | 11.16          | **53.13**      | 72.72          | 2.95           |

*Vergleich der Suchmethoden auf TREC DL19 und TREC DL20* 
