---
id: prompting
title: Prompting
sidebar_position: 6
---

import PromptExample from '@site/src/components/PromptExample';

# Prompting best Practices

### 1. Spezifische Anforderungen
Beschreiben Sie genau, was Sie möchten. Benennen Sie Abschnitte, Quellen, Seitenzahlen und Kontext.

<PromptExample 
  badPrompt="Erklär mir, was in diesem Organisationshandbuch steht."
  goodPrompt="Fasse in maximal fünf Bullet-Points die wichtigsten Regelungen zur Arbeitszeit des Organisationshandbuchs zusammen."
  badReasons={[
    "Viel zu allgemein",
    "Keine Angabe, welchen Teil oder welches Format man will",
    "Modell weiß nicht, ob es zusammenfassen, gliedern oder übersetzen soll"
  ]}
  goodReasons={[
    "Präzise Angabe: Abschnitt, Seiten",
    "Gewünschtes Format (Bullet-Points)",
    "Begrenzung der Länge",
    "Eindeutige Output-Anforderung"
  ]}
  language="de"
/>

### 2. Rolle und System-Prompts
Legen Sie Kontext und Rolle fest für fachliche Tiefenschärfe.

<PromptExample 
  badPrompt="Erklär mir was zum Mindestlohn und wann der fällig ist."
  goodPrompt="Du bist ein erfahrener Fachanwalt für Arbeits- und Sozialrecht mit dem Schwerpunkt Mindestlohn. Du erklärst komplexe Rechtsvorschriften stets klar, präzise und mit praktischen Hinweisen für Arbeitgeber und Personalverantwortliche. Erläutere in maximal drei Absätzen die Fälligkeit des Mindestlohns nach § 5 MiLoG (Zahlungstermin)."
  badReasons={[
    "Keine Rolle/Vorgabe, wer antwortet (z. B. Fachanwalt, Steuerberater).",
    "Unklar, auf welche Rechtsgrundlage (§ 5 MiLoG) sich die Antwort beziehen soll.",
    "Begrenzung der Länge",
    "Eindeutige Output-Anforderung"
  ]}
  goodReasons={[
    "Klare Rolle: Das System definiert den Stil und die Fachkompetenz (“erfahrener Fachanwalt für Arbeits- und Sozialrecht”)",
    "Eindeutige Aufgabe: Der User-Prompt fragt konkret nach § 5 MiLoG und setzt eine Beschränkung auf drei Absätze.",
  ]}
  language="de"
/>

### 3. Beispiele (Few-Shot)
Zeigen Sie, wie die Antwort strukturiert sein soll.

<PromptExample 
  badPrompt="Wie funktioniert das mit Krankheit in der Kanzlei?"
  goodPrompt="Erkläre detailliert den korrekten Prozess für Krankmeldungen laut Organisationshandbuch. Gliedere deine Antwort in folgende Schritte:

1. Wann und an wen muss die Krankmeldung erfolgen?
2. Wie ist bei längerer Krankheit zu verfahren?
3. Wie werden Krankheitstage im System erfasst?
4. Welche Regeln gelten für Arzttermine?"
  badReasons={[
    "Zu vage formuliert",
    "Keine Angabe zur gewünschten Antwortstruktur",
  ]}
  goodReasons={[
    "Strukturierte Frageliste für präzise Antwort",
    "Umfasst alle relevanten Teilaspekte des Prozesses"
  ]}
  language="de"
/>

### 4. Format und Umfang
Geben Sie vor, wie die Antwort strukturiert sein soll.

<PromptExample 
  badPrompt="Sag mir was über DATEV Cloud Services."
  goodPrompt="Gib mir eine kurze Übersicht (3–4 Sätze) der DATEV-Cloud-Services im Rechnungswesen. Hebe dabei hervor, welche Datenarten übertragen werden und nenne jeweils ein Beispiel."
  badReasons={[
    "Unklar, ob Überblick oder Detail",
    "Kein Hinweis auf Kontext (für wen, welchen Teil)",
    "Keine Vorgabe zur Struktur"
  ]}
  goodReasons={[
    "Präzise Angabe: Überblick, Detail",
    "Format und Umfang klar definiert",
    "Fokus auf relevante Details"
  ]}
  language="de"
/>

### 5. Begrenzung und Präzision
Setzen Sie klare Grenzen für Umfang und Detaillierungsgrad.

<PromptExample 
  badPrompt="Was ist Mindestlohn?"
  goodPrompt="Erläutere in drei Absätzen die Berechnung des Mindestlohns bei festem Monatsgehalt. Stelle jeweils ein konkretes Rechenbeispiel dar und gib die zugehörigen Formeln an."
  badReasons={[
    "Zu weitgefasst",
    "Unklar, ob Überblick, Berechnung oder rechtliche Details",
    "Keine Angabe des gewünschten Detaillierungsgrades"
  ]}
  goodReasons={[
    "Gewünschte Textlänge und Struktur (Absätze)",
    "Bitte um Formeln und Beispiele"
  ]}
  language="de"
/>

## Weitere Practices Best Practices für effektives Prompting

- **Klare Instruktionen statt vager Wünsche:** „Erkläre...", „Vergleiche...", „Fasse zusammen..." statt „Sag mir was über...".
- **Verwenden Sie Begrenzer:** Nutzen Sie klare Trennzeichen wie ###, """, oder XML-Tags, um Anweisungen, Kontext, Beispiele und Eingabedaten zu unterscheiden.
- **Trennen Sie Anweisungen und Inhalte:** Grenzen Sie Anweisungen deutlich vom Hauptinhalt ab, um Missverständnisse zu vermeiden.
- **Experimentiere mit Stil und Ton:** Je nach Ziel formell, fachlich, prägnant oder marketing-orientiert.