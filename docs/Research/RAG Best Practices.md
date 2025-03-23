---
id: rag-best-practices
title: "RAG Best Practices"
sidebar_position: 2
---

# Introduction

Die Leistungsfähigkeit eines Retrieval-Augmented Generation (RAG) Systems hängt maßgeblich von einer Reihe bewährter Methoden in der Daten- und Anfrageverarbeitung ab. Eine optimierte Vorverarbeitung der Daten sowie eine effiziente Handhabung der Suchanfragen sind entscheidend für die Präzision und Effizienz der Informationsextraktion.

## Data Preprocessing

Im RAG-System ist die effiziente und präzise Verarbeitung von Dokumenten eine wesentliche Herausforderung. Hier werden drei zentrale Techniken, die zur Verbesserung der Leistung solcher Systeme beitragen können, untersucht: Chunking, Metadaten und Vektordatenbanken.

### Chunking

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

### Metadata

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

Einfluss auf RAG-System:

- **Erhöhte Präzision bei Abfragen**: Metadaten verbessern die Relevanz der abgerufenen Chunks, da sie als zusätzliche Filterkriterien dienen können. Sie ermöglichen zeitbewusste Suchen, bei denen Informationen auf Basis von Zeitstempeln gewichtet werden, um aktuelle Informationen zu bevorzugen.
- **Strukturierung und Organisation**: Metadaten erleichtern es, Dokumente strukturiert zu indizieren, was die Effizienz und Genauigkeit von Retrieval-Prozessen erhöht. Dies ist besonders relevant in Szenarien, in denen verschiedene Arten von Abfragen unterschiedliche Arten von Informationen erfordern.

### Vektordatenbanken

Vektordatenbanken speichern die Embeddings und deren Metadaten und ermöglichen effiziente Abfragen basierend auf semantischen Ähnlichkeiten.

Einfluss auf RAG-System:

- **Effizientes Retrieval**: Vektordatenbanken wie Milvus, Faiss oder Chroma ermöglichen schnelle und skalierbare Abfragen in großen Datensätzen, was die Effizienz von RAG-Systemen signifikant verbessert.
- **Hybride Suche**: Einige Vektordatenbanken unterstützen hybride Suchen, die sowohl Vektor-basierte als auch traditionelle Keyword-basierte Abfragen kombinieren, um die Genauigkeit zu erhöhen.
- **Skalierbarkeit und Flexibilität**: Die Wahl der Vektordatenbank beeinflusst die Skalierbarkeit eines RAG-Systems erheblich, da sie bestimmt, wie gut das System mit wachsenden Datenmengen und komplexeren Abfragen umgehen kann.

## Query Preprocessing

Ein wichtiger Aspekt dieser Systeme ist das Preprocessing von Anfragen, also die Vorverarbeitung der Queries vor dem eigentlichen Abrufprozess.

### Suchmethoden

In der Informationsbeschaffung und Suchmaschinenoptimierung werden verschiedene fortschrittliche Techniken eingesetzt, um die Qualität und Relevanz der Suchergebnisse zu verbessern.

- **Query Routing**: Leitet Anfragen an die am besten geeigneten Suchmaschinen oder Datenbanken. Optimiert die Effizienz und erhöht die Wahrscheinlichkeit hochwertiger Ergebnisse.
- **Query Rewriting**: Verfeinert die ursprüngliche Suchanfrage zur Verbesserung der Relevanz der Ergebnisse. Zeigt signifikante Verbesserungen in den Abrufquoten.
- **Query Expansion**: Erweitert die ursprüngliche Anfrage mit verwandten Begriffen und Phrasen. Als Beispiel HyDE (Hypothetical Document Embeddings). Beseitigt Probleme wie Tippfehler und übermäßig spezifische Begriffe.
- **Hybrid Search**: Integration von Schlüsselwortsuche (BM25/TF-IDF) und semantischer Suche (Original embedding). Bietet vielseitige Sucherfahrungen, ruft sowohl spezifische als auch allgemeine Dokumente ab.

Die Kombination dieser Features führt in der Regel zu besseren Ergebnissen als der Einsatz einzelner Methoden. Insbesondere die Integration von Hybrid Search mit HyDE zeigt überlegene Leistung in der Aufrechterhaltung von Effizienz und Effektivität, besonders in komplexen Abrufsystemen. 

| **Feature**                                | **TREC DL19** |                |                | **TREC DL20** |                |                |
|--------------------------------------------|----------------|----------------|----------------|----------------|----------------|----------------|
|                                            | **mAP**        | **nDCG@10**    | **Latency**     | **mAP**        | **nDCG@10**    | **Latency**     |
| Query Rewriting                            | 44.56          | 67.89          | 7.80           | 45.16          | 65.62          | 2.06           |
| Hybrid Search                              | 47.14          | 72.50          | **3.20**       | 47.72          | 69.80          | **0.77**       |
| HyDE (Hypothetical Document Embeddings)   | 50.87          | **75.44**      | 7.21           | 50.94          | **73.94**      | 2.14           |
| HyDE + Hybrid Search                       | **52.13**      | 73.34          | 11.16          | **53.13**      | 72.72          | 2.95           |

*Table 3: Vergleich der Suchmethoden auf TREC DL19 und TREC DL20*

## Large Language Models

Die Wahl eines hochwertigeren Sprachmodells (LLM) für ein Retrieval-Augmented Generation (RAG) System hat mehrere wesentliche Auswirkungen:

- **Genauigkeit** und **Relevanz** der Antworten: Ein leistungsfähigeres Sprachmodell kann präzisere und relevantere Antworten generieren, indem es die aus dem Retrieval-Modul gewonnenen Informationen besser versteht und integriert.
- **Verständnis komplexer Anfragen**: Hochwertigere Modelle haben in der Regel ein besseres Verständnis komplexer Anfragen und können subtilere Nuancen erfassen, was zu einer präziseren Generierung führt.

### Evaluation

Für den Einsatz eines Sprachmodells in einem Retrieval-Augmented-Generation (RAG) System für internes Wissensmanagement können die folgenden Benchmarks relevant sein:

- **MMLU (Massive Multitask Language Understanding)**: Dieser Benchmark ist relevant, weil er das Sprachmodell in verschiedenen Wissensgebieten und Aufgaben testet, darunter auch rechtliche Fragestellungen. Er prüft die Fähigkeit des Modells, domänenspezifisches Wissen zu verstehen und anzuwenden.
- **GPQA (General-Purpose Question Answering)**: Da ein RAG-System häufig darauf abzielt, genaue und präzise Antworten auf Fragen zu liefern, ist dieser Benchmark von Bedeutung. GPQA testet die Fähigkeit des Modells, Antworten auf eine breite Palette von Fragen zu generieren, was direkt auf die Anforderungen eines internen Wissensmanagementsystems übertragbar ist.

Zwischen kommerziellen Modellen (Tab. 1) bietet GPT-4o hohe Leistung mit guter Datenschutzoption, während Claude 3.5 etwas günstiger ist, aber in Sachen Datenschutz fraglich bleibt. Gemini 1.5 ist kostengünstiger, bietet aber weniger Leistung und Datenschutz.

| Model                       | MMLU             | GPQA             | Price (1M Input, 1M Output)         | Enterprise Privacy             |
|-----------------------------|------------------|------------------|-------------------------------------|--------------------------------|
| GPT-4o / GPT-4o-mini       | 88.7 / 82.0      | 53.6 / 40.2      | \$5.00, \$15.00 / \$0.15, \$0.60       | Ja        |
| Claude 3.5 Sonnet / Claude 3 Haiku | 88.7 / 75.2  | 59.4 / 33.3      | \$3.00, \$15.00 / \$0.25, \$1.25       | Fraglich |
| Gemini 1.5 PRO / Gemini 1.5 Flash | 85.9 / 78.9 | 46.2 / 39.5      | \$3.50, \$10.50 / \$0.075, \$0.30      | Eher nein |

*Table 4: Closed-Source Modelle*

Bei der Verwendung von Sprachmodellen zur Verarbeitung personenbezogener Daten können Open-Source Modelle (Tab. 2) gewählt werden.

| Model                       | MMLU             | GPQA             | Requirements VRAM (FP16) | License                        |
|-----------------------------|------------------|------------------|--------------------------|--------------------------------|
| Llama 3.1 8B / 70B / 405B   | 73.0 / 86.0 / 88.6| 32.8 / 46.7 / 51.1| 16 GB  / 140 GB / 810 GB  | Community License               |
| Mistral 7B / Large 2       | 60.1 / 84.0      | ---              | 14 GB  / 246 GB          | Mistral Research License / Apache 2.0 |
| Mixtral 7B / 8x7B / 8x22B  | 63.0 / 71.0 / 84.0| ---              | 14 GB  / 112 GB / 252 GB | Apache 2.0                     |
| Qwen2-72B                  | 84.2             | 37.9             | 148 GB                  | Qianwen License                |

*Table 5: Open-Source Modelle*

Open-Source-Modelle bieten eine größere Flexibilität bei der Lizenzierung und Leistung.

- **Llama 3.1** Modelle zeichnen sich durch eine Community-Lizenz aus, die sie besonders für interne und gemeinschaftsbasierte Projekte attraktiv macht, jedoch weniger für den kommerziellen Einsatz geeignet ist. Gleichzeitig bietet Llama 3.1 eine gute Balance zwischen Leistung und VRAM-Anforderungen, was sie zu einer soliden Wahl macht.
- **Mistral** Modelle bieten eine Kombination aus einer Forschungs- und einer Apache-Lizenz, was je nach Modell unterschiedliche Nutzungsmöglichkeiten bietet. Obwohl die Leistung von Mistral gemischt ist, bleibt es vielseitig einsetzbar.
- **Mixtral** Modelle, die unter der **Apache 2.0-Lizenz** stehen, sind besonders attraktiv für kommerzielle Projekte, da diese Lizenz eine sehr offene und flexible Nutzung ermöglicht. In Bezug auf die Leistung zeigt Mixtral ebenfalls eine gewisse Vielseitigkeit.
- **Qwen2-72B** Modell hingegen bietet eine gute Leistung, benötigt aber viel VRAM. Aufgrund der spezifischen Qianwen-Lizenz sollte Qwen2-72B sorgfältig geprüft werden, um sicherzustellen, dass es den Anforderungen des Projekts entspricht.