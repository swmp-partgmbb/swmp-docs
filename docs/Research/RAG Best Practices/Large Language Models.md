---
id: large-language-models
title: "Large Language Models"
sidebar_position: 4
---

# Large Language Models

Die Wahl eines hochwertigeren Sprachmodells (LLM) für ein Retrieval-Augmented Generation (RAG) System hat mehrere wesentliche Auswirkungen:

- **Genauigkeit** und **Relevanz** der Antworten: Ein leistungsfähigeres Sprachmodell kann präzisere und relevantere Antworten generieren, indem es die aus dem Retrieval-Modul gewonnenen Informationen besser versteht und integriert.
- **Verständnis komplexer Anfragen**: Hochwertigere Modelle haben in der Regel ein besseres Verständnis komplexer Anfragen und können subtilere Nuancen erfassen, was zu einer präziseren Generierung führt.

## Evaluation

Für den Einsatz eines Sprachmodells in einem Retrieval-Augmented-Generation (RAG) System für internes Wissensmanagement können die folgenden Benchmarks relevant sein:

- **MMLU (Massive Multitask Language Understanding)**: Dieser Benchmark ist relevant, weil er das Sprachmodell in verschiedenen Wissensgebieten und Aufgaben testet, darunter auch rechtliche Fragestellungen. Er prüft die Fähigkeit des Modells, domänenspezifisches Wissen zu verstehen und anzuwenden.
- **GPQA (General-Purpose Question Answering)**: Da ein RAG-System häufig darauf abzielt, genaue und präzise Antworten auf Fragen zu liefern, ist dieser Benchmark von Bedeutung. GPQA testet die Fähigkeit des Modells, Antworten auf eine breite Palette von Fragen zu generieren, was direkt auf die Anforderungen eines internen Wissensmanagementsystems übertragbar ist.

Zwischen kommerziellen Modellen (Tab. 1) bietet GPT-4o hohe Leistung mit guter Datenschutzoption, während Claude 3.5 etwas günstiger ist, aber in Sachen Datenschutz fraglich bleibt. Gemini 1.5 ist kostengünstiger, bietet aber weniger Leistung und Datenschutz.

| Model                       | MMLU             | GPQA             | Price (1M Input, 1M Output)         | Enterprise Privacy             |
|-----------------------------|------------------|------------------|-------------------------------------|--------------------------------|
| GPT-4o / GPT-4o-mini       | 88.7 / 82.0      | 53.6 / 40.2      | $5.00, $15.00 / $0.15, $0.60       | Ja        |
| Claude 3.5 Sonnet / Claude 3 Haiku | 88.7 / 75.2  | 59.4 / 33.3      | $3.00, $15.00 / $0.25, $1.25       | Fraglich |
| Gemini 1.5 PRO / Gemini 1.5 Flash | 85.9 / 78.9 | 46.2 / 39.5      | $3.50, $10.50 / $0.075, $0.30      | Eher nein |

*Table 1: Closed-Source Modelle*

Bei der Verwendung von Sprachmodellen zur Verarbeitung personenbezogener Daten können Open-Source Modelle (Tab. 2) gewählt werden.

| Model                       | MMLU             | GPQA             | Requirements VRAM (FP16) | License                        |
|-----------------------------|------------------|------------------|--------------------------|--------------------------------|
| Llama 3.1 8B / 70B / 405B   | 73.0 / 86.0 / 88.6| 32.8 / 46.7 / 51.1| 16 GB  / 140 GB / 810 GB  | Community License               |
| Mistral 7B / Large 2       | 60.1 / 84.0      | ---              | 14 GB  / 246 GB          | Mistral Research License / Apache 2.0 |
| Mixtral 7B / 8x7B / 8x22B  | 63.0 / 71.0 / 84.0| ---              | 14 GB  / 112 GB / 252 GB | Apache 2.0                     |
| Qwen2-72B                  | 84.2             | 37.9             | 148 GB                  | Qianwen License                |

*Table 2: Open-Source Modelle*

Open-Source-Modelle bieten eine größere Flexibilität bei der Lizenzierung und Leistung.

- **Llama 3.1** Modelle zeichnen sich durch eine Community-Lizenz aus, die sie besonders für interne und gemeinschaftsbasierte Projekte attraktiv macht, jedoch weniger für den kommerziellen Einsatz geeignet ist. Gleichzeitig bietet Llama 3.1 eine gute Balance zwischen Leistung und VRAM-Anforderungen, was sie zu einer soliden Wahl macht.
- **Mistral** Modelle bieten eine Kombination aus einer Forschungs- und einer Apache-Lizenz, was je nach Modell unterschiedliche Nutzungsmöglichkeiten bietet. Obwohl die Leistung von Mistral gemischt ist, bleibt es vielseitig einsetzbar.
- **Mixtral** Modelle, die unter der **Apache 2.0-Lizenz** stehen, sind besonders attraktiv für kommerzielle Projekte, da diese Lizenz eine sehr offene und flexible Nutzung ermöglicht. In Bezug auf die Leistung zeigt Mixtral ebenfalls eine gewisse Vielseitigkeit.
- **Qwen2-72B** Modell hingegen bietet eine gute Leistung, benötigt aber viel VRAM. Aufgrund der spezifischen Qianwen-Lizenz sollte Qwen2-72B sorgfältig geprüft werden, um sicherzustellen, dass es den Anforderungen des Projekts entspricht.