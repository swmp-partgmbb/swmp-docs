---
id: embedding-und-tf-idf
title: "Embedding und TF-IDF"
sidebar_position: 2
---

# Embedding und TF-IDF

TF-IDF und Word Embeddings (z.B. Word2Vec, BERT) sind beides Techniken zur numerischen Darstellung von Wörtern, sie unterscheiden sich jedoch grundlegend in ihrer Funktionsweise und Anwendung.

## TF-IDF

TF-IDF steht für Term Frequency-Inverse Document Frequency. Es ist eine Methode aus der Information Retrieval und Textmining, die dazu verwendet wird, die Wichtigkeit eines Wortes in einem Dokument in Bezug auf eine Sammlung von Dokumenten (Korpus) zu bestimmen. TF-IDF kombiniert zwei Metriken:

$$\text{TF-IDF} = TF(t,d) \times IDF(t,D)$$

**Term Frequency (TF)**: Die Häufigkeit eines Begriffs in einem Dokument. TF misst, wie oft ein Begriff in einem Dokument vorkommt:

$$TF(t,d) = \frac{f(t,d)}{\sum_{t\in d} f(t',d)}$$

- $t$ ist der Begriff.
- $d$ ist das Dokument.
- $f(t,d)$ ist die Häufigkeit des Begriffs $t$ im Dokument $d$.
- $\sum_{t\in d} f(t',d)$ ist die Gesamtanzahl der Begriffe im Dokument $d$.

**Inverse Document Frequency (IDF)**: Die Umkehrung der Dokumenthäufigkeit, die misst, wie wichtig ein Begriff ist. Je seltener ein Begriff in allen Dokumenten vorkommt, desto höher ist der IDF-Wert:

$$IDF(t,D) = \log\left(\frac{N}{|\{d\in D: t \in d\}|}\right)$$

- $D$ ist das Korpus (eine Sammlung von Dokumenten).
- $N$ ist die Gesamtzahl der Dokumente im Korpus.
- $|\{d\in D: t \in d\}|$ ist die Anzahl der Dokumente, die den Begriff ($t$) enthalten.

## Word Embedding

**Word Embeddings** sind eine fortschrittlichere Methode zur numerischen Darstellung von Wörtern, die auf der Idee basiert, dass Wörter in einem Vektorraum dargestellt werden, wobei ähnliche Wörter durch Vektoren repräsentiert werden, die sich nahe beieinander befinden. Diese Technik ermöglicht es, semantische Ähnlichkeiten und Beziehungen zwischen Wörtern besser zu erfassen als TF-IDF.

Im Gegensatz zu TF-IDF, das auf der Häufigkeit von Begriffen basiert, lernen Word Embeddings kontinuierliche Vektoren, die die Bedeutung von Wörtern durch deren Kontext in großen Textmengen erfassen. Es gibt verschiedene Ansätze zur Erstellung von Word Embeddings, darunter Word2Vec und BERT.

## Kosinusähnlichkeit

Die Kosinusähnlichkeit misst, wie ähnlich zwei Vektoren in einem hochdimensionalen Raum sind, basierend auf dem Winkel zwischen ihnen.

Um die Kosinusähnlichkeit zwischen dem **Abfragevektor** $$ q= \begin{bmatrix}
q_1 \\
\dots \\
q_{n}
\end{bmatrix} \in \mathbb{R}^{n\times1} $$ 

und Dokumentenvektoren $$ D = \begin{bmatrix}
d_{1,1} & \dots & d_{1,n}  \\
\dots & \dots & \dots \\
d_{m,1} & \dots & d_{m,n}
\end{bmatrix} \in \mathbb{R}^{m\times n} $$ 

zu berechnen, kann folgende Formel benutzt werden: $$sim(q,d_i) = \frac{q \cdot d_i}{||q|| \cdot ||d_i||}$$

- Skalarprodukt zwischen der Abfrage und jedem Dokument: $q \cdot d_i = \sum_{j=1}^{N} q_j \times d_{i,j}$.
- Normen der Vektoren: $||v|| = \sqrt{\sum_{j=1}^{N} v_j^2}$.

## Embedding vs TF-IDF

TF-IDF (Term Frequency-Inverse Document Frequency) ist schneller als Word Embedding in vielen Anwendungsfällen, selbst wenn die Anzahl der Dimensionen in TF-IDF höher ist.

- Berechnung von TF-IDF-Werten ist relativ einfach und beinhaltet nur das Zählen von Wörtern und die Berechnung von Frequenzverhältnissen.
- Die resultierende TF-IDF-Matrix ist in der Regel spärlich, das heißt, sie enthält viele Nullen.

| Zeit                                        | TF-IDF          | Embedding          |
|---------------------------------------------|------------------|--------------------|
| Theoretische Ausführungszeit                | 941 µs ± 45 µs  | 19.7 ms ± 1.44 ms  |
| Durchschnittliche Ausführungszeit für 93 Seiten | 0.001 s         | 0.02 s             |

Word Embedding Modelle haben mehrere Vorteile gegenüber traditionellen Methoden wie TF-IDF, insbesondere in Anwendungen der natürlichen Sprachverarbeitung.

- Sie lernen Vektorrepräsentationen für Wörter basierend auf ihrem Kontext, was bedeutet, dass semantisch ähnliche Wörter ähnliche Vektoren haben.
- Sie sind in der Lage, Synonyme zu erkennen und Wörter mit mehreren Bedeutungen korrekt zu platzieren, basierend auf ihrem Kontext.

| Methode   | Pros                                                               | Cons                                                        |
|-----------|--------------------------------------------------------------------|-------------------------------------------------------------|
| TF-IDF    | Einfach zu implementieren, effizient für kleine bis mittlere Datensätze, keine Notwendigkeit für vortrainierte Modelle. | Erfasst keine semantische Bedeutung, behandelt jedes Wort unabhängig von seinem Kontext. |
| Embedding | Erfasst semantische Ähnlichkeiten, reduziert die Dimension der Daten, verbessert die Leistung in vielen NLP-Aufgaben. | Erfordert vortrainierte Modelle und mehr Rechenressourcen, komplexer zu implementieren. |