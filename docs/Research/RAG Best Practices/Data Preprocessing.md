---
id: data-preprocessing
title: "Data Preprocessing"
sidebar_position: 2
---

# Data Preprocessing

Im RAG-System ist die effiziente und präzise Verarbeitung von Dokumenten eine wesentliche Herausforderung. Hier werden drei zentrale Techniken, die zur Verbesserung der Leistung solcher Systeme beitragen können, untersucht: Chunking, Metadaten und Vektordatenbanken.

## Chunking

Chunking bezieht sich auf das Aufteilen von Dokumenten in kleinere, verarbeitbare Einheiten oder „Chunks“. Dies kann auf verschiedenen Ebenen geschehen, z. B. auf Token-, Satz- oder semantischen Ebenen. Ziel ist es, die Verarbeitung zu optimieren und relevante Informationen präziser abzurufen.

### Einfluss auf RAG-System:

- **Kohärenz und Kontext**: Die Wahl der Chunk-Größe beeinflusst, wie viel Kontext ein einzelner Chunk behält. Kleinere Chunks erhöhen die Retrieval-Präzision, da sie spezifische Informationen isolieren, aber sie können den Kontext verlieren. Größere Chunks bieten mehr Kontext, was die Kohärenz verbessert, aber sie können auch irrelevante Informationen enthalten. (Tab. 1)

| Chunk Size | Average Faithfulness | Average Relevancy | Average Faithfulness | Average Relevancy |
|------------|----------------------|-------------------|----------------------|-------------------|
|            | **lyft 2021**        |                   | **Uber 10K SEC Filings 2021** |                   |
| 2048       | 80.37                | 91.11             | 90                   | 89                |
| 1024       | 94.26                | 95.56             | **93**               | **90**            |
| 512        | **97.59**           | 97.41             | 85                   | 85                |
| 256        | 97.22                | **97.78**         | 90                   | 78                |
| 128        | 95.74                | 97.22             | 85                   | 78                |

*Table 1: Chunk Größen Vergleich*

- **Techniken**: Fortgeschrittene Chunking-Techniken wie 'small-to-big' oder 'sliding window' verbessern die Retrieval-Qualität (Tab. 2), indem sie den Kontext beibehalten und sicherstellen, dass relevante Informationen abgerufen werden.

| Chunk Skill | Average Faithfulness | Average Relevancy |
|-------------|----------------------|-------------------|
|             | **lyft 2021**        |                   |
| Original    | 95.74                | 95.37             |
| small2big   | 96.67                | 95.37             |
| sliding window | **97.41**        | **96.85**         |

*Table 2: Chunk Skills Vergleich*

## Metadata

Metadaten sind zusätzliche Informationen, die mit Chunks verknüpft werden, wie Titel, Schlagwörter, Autorinformationen oder Zeitstempel. Sie bieten zusätzlichen Kontext und verbessern die Effizienz der Informationssuche.

$$
\text{Organisationshandbuch}\rightarrow \begin{bmatrix}
\text{name: }OHB, \text{page: 1}, \text{text: } \dots, \text{vector: }\begin{bmatrix}
-0.039819654  \\
\dots \\
-0.021502614
\end{bmatrix}^{1536\times1}  \\
\dots \\
 \text{name: }OHB, \text{page: 28}, \text{text: } \dots, \text{vector: }\begin{bmatrix}
0.005466392  \\
\dots \\
-0.0073031746
\end{bmatrix}^{1536\times1} 
\end{bmatrix} \in \mathbb{R}^{28 \times 4}
$$

### Einfluss auf RAG-System:

- **Erhöhte Präzision bei Abfragen**: Metadaten verbessern die Relevanz der abgerufenen Chunks, da sie als zusätzliche Filterkriterien dienen können. Sie ermöglichen zeitbewusste Suchen, bei denen Informationen auf Basis von Zeitstempeln gewichtet werden, um aktuelle Informationen zu bevorzugen.
- **Strukturierung und Organisation**: Metadaten erleichtern es, Dokumente strukturiert zu indizieren, was die Effizienz und Genauigkeit von Retrieval-Prozessen erhöht. Dies ist besonders relevant in Szenarien, in denen verschiedene Arten von Abfragen unterschiedliche Arten von Informationen erfordern.

## Vektordatenbanken

Vektordatenbanken speichern die Embeddings und deren Metadaten und ermöglichen effiziente Abfragen basierend auf semantischen Ähnlichkeiten.

### Einfluss auf RAG-System:

- **Effizientes Retrieval**: Vektordatenbanken wie Milvus, Faiss oder Chroma ermöglichen schnelle und skalierbare Abfragen in großen Datensätzen, was die Effizienz von RAG-Systemen signifikant verbessert.
- **Hybride Suche**: Einige Vektordatenbanken unterstützen hybride Suchen, die sowohl Vektor-basierte als auch traditionelle Keyword-basierte Abfragen kombinieren, um die Genauigkeit zu erhöhen.
- **Skalierbarkeit und Flexibilität**: Die Wahl der Vektordatenbank beeinflusst die Skalierbarkeit eines RAG-Systems erheblich, da sie bestimmt, wie gut das System mit wachsenden Datenmengen und komplexeren Abfragen umgehen kann. 