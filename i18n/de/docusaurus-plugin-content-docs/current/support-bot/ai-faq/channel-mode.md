---
sidebar_position: 4
title: Kanal-Auto-Antwort
description: Lass die KI direkt in ausgewählten Kanälen auf Mitgliederfragen antworten und Antworten aus deiner FAQ ziehen.
---

# Kanal-Auto-Antwort

Du kannst die KI Fragen direkt in ausgewählten Kanälen beantworten lassen - nützlich für stark frequentierte Support- oder Hilfe-Kanäle, in denen Mitglieder sonst ein Ticket öffnen müssten. Der Bot beobachtet die Kanäle, die du auswählst, und antwortet, sobald ein Mitglied eine Frage stellt, direkt mit einer Antwort aus deiner FAQ.

## Funktionen {#features}

- Wähle beliebige Text- oder Forum-Kanäle, die die KI beobachten soll.
- Ein Cooldown pro Mitglied, damit eine Person nicht Antwort um Antwort auslösen kann.
- Ein Filter für die Mindestlänge, damit die KI nicht auf "Hi" oder Ein-Wort-Nachrichten reagiert.
- Ein Präfix-Filter, damit Bot-Befehle (alles, was mit `!`, `?` oder `/` beginnt) ignoriert werden.
- Optional ganz neue Accounts ignorieren.
- Optionale Daumen-hoch-/Daumen-runter-Buttons unter jeder Antwort, deren Ergebnisse auf der [Insights-Seite](https://scnx.app/glink?page=support-system/ai-faq/insights) zusammengefasst werden.
- Freundliche Standardtexte für die Lade-Antwort und den Rahmen um die KI-Antwort, die du beide anpassen kannst.

## Einrichtung {#setup}

1. Öffne in deinem Dashboard [**KI-FAQ → KI-Einstellungen → Wo die KI antwortet**](https://scnx.app/glink?page=support-system/ai-faq/settings).
2. Aktiviere **Automatisch in Kanälen antworten**.
3. Füge die Kanäle hinzu, die die KI beobachten soll (Text- und Forum-Kanäle funktionieren beide).
4. Passe die unten beschriebenen Filter an deine Community an.
5. Speichere und lade den Bot neu.

## Was Mitglieder erleben {#answer-flow}

Wenn ein Mitglied in einem deiner ausgewählten Kanäle eine Frage stellt, antwortet der Bot fast sofort mit einem kurzen Platzhalter "Looking that up...". Eine Sekunde später wird genau diese Nachricht **direkt bearbeitet** und enthält die eigentliche KI-Antwort. Wenn du die Daumen-hoch-/Daumen-runter-Buttons aktiviert hast, erscheinen sie darunter.

Findet die KI keinen passenden Treffer in deiner FAQ, wird der Platzhalter durch eine kurze Nachricht "I couldn't find an answer for that" ersetzt, optional mit einem Button **Open a ticket** (siehe [Fallback, wenn die KI nicht antworten kann](#fallback-ticket-system) weiter unten).

Das Mitglied sieht eine einzige aufgeräumte Nachricht, die von "Looking that up..." zur finalen Antwort wechselt - kein doppeltes Posten.

## Filter und Limits {#filters}

Alle folgenden Einstellungen befinden sich auf derselben Seite wie die Kanalliste. Jede davon verhindert, dass die KI auf Nachrichten läuft, bei denen sie keinen Mehrwert liefern kann, und hält so den Credit-Verbrauch planbar.

**Cooldown** - die Einstellung **Cooldown** legt fest, wie lange ein einzelnes Mitglied warten muss, bis die KI ihm im selben Kanal erneut antwortet. Der Standard sind 30 Sekunden; erhöhe den Wert, wenn Unterhaltungen unruhig wirken, oder senke ihn für stark frequentierte Hilfe-Kanäle, in denen mehrere schnelle Antworten erwartet werden.

**Mindest-Fragelänge** - die Einstellung **Mindest-Fragelänge** (in Zeichen, Standard 8) blendet sehr kurze Nachrichten für die KI aus. "Hi" und "Ist jemand da?" lösen keine Antwort aus. Ausnahme sind kurze Antworten, die wie eine Folgenachricht an den Bot aussehen - siehe [Folgeantworten](#follow-up-replies) weiter unten.

**Nachrichten ignorieren, die beginnen mit** - die Einstellung **Nachrichten ignorieren, die beginnen mit** legt fest, an welchen Zeichen der Bot erkennt, dass eine Nachricht "keine Frage an mich" ist. Standardmäßig ignoriert der Bot Nachrichten, die mit `!`, `?` oder `/` beginnen, damit Bot-Befehle und kurze Chat-Zeilen keine Antworten auslösen. Füge das Präfix anderer Bots auf deinem Server hinzu, wenn du auch diese ausblenden möchtest.

**Konten ignorieren, die jünger sind als** - die Einstellung **Konten ignorieren, die jünger sind als** (in Tagen, Standard 0 = aus) blendet Nachrichten sehr neuer Accounts für die KI aus. Nutze sie, wenn du Störungen durch Wegwerf-Accounts oder neue Mitglieder bekommst, die die FAQ noch nicht gelesen haben.

**Feedback-Buttons** - wenn du **👍 / 👎 Feedback-Buttons anzeigen** aktivierst, werden diese beiden Buttons unter jeder KI-Antwort angezeigt. Mitglieder können bewerten, ob die Antwort hilfreich war, und du kannst die Summen auf der Seite [Insights](/de/docs/support-bot/ai-faq/insights) einsehen, um FAQ-Einträge zu finden, die überarbeitet werden sollten.

## Folgeantworten {#follow-up-replies}

Der Mindestlängen-Filter überspringt unnötiges Geplauder, würde aber auch natürliche kurze Antworten wie "ja" oder "nein" auf eine Rückfrage der KI blockieren. Um das zu vermeiden, behandelt der Bot bestimmte kurze Nachrichten als Folgenachrichten und beantwortet sie trotzdem.

Eine Nachricht gilt als Folgenachricht - und umgeht die Längenprüfung -, wenn eine dieser Bedingungen zutrifft:

- Das Mitglied hat die **Antworten**-Funktion von Discord genutzt, um auf eine vorherige Bot-Nachricht im Kanal zu antworten.
- Die Nachricht wurde innerhalb von **5 Minuten** nach der letzten Antwort des Bots im Kanal gesendet, und diese frühere Bot-Antwort richtete sich an dasselbe Mitglied (oder an niemanden im Speziellen).

Alle anderen Filter (Kanalliste, Cooldown, ignorierte Präfixe, Schwellwert für neue Accounts) gelten weiterhin. Die Folgenachrichten-Ausnahme lockert nur die Längenprüfung.

Fragt die KI also "Möchtest du Hilfe bei der Einrichtung?" und das Mitglied schreibt innerhalb von 5 Minuten "ja", antwortet die KI. Schreibt dasselbe Mitglied eine Stunde später aus dem Nichts "ja" in den Kanal, wird es weiterhin als zu kurz ignoriert.

## Nachrichten anpassen {#messages}

Die beiden Nachrichten, die der Bot im Kanal-Modus sendet, sind beide bearbeitbar:

- **Antwort wird geladen** - der kurze Platzhalter, der gesendet wird, während die KI nachdenkt (Standard: "Looking that up..."). Er wird direkt mit der finalen Antwort bearbeitet.
- **Vorlage für die Antwort-Nachricht** - der Rahmen um die eigentliche KI-Antwort. Du kannst die Embed-Farbe und den Wortlaut ändern und einen eigenen Hinweis hinzufügen.

Passe sie unter **KI-Einstellungen → Wo die KI antwortet** an. Die vollständige Referenz (einschließlich der verwendbaren Platzhalter) findest du unter [Nachrichten und Vorlagen](/de/docs/support-bot/ai-faq/messages-and-templates).

## Fallback, wenn die KI nicht antworten kann {#fallback-ticket-system}

Findet die KI keinen passenden Treffer in deiner FAQ, enthält die Antwortnachricht einen Button **Open a ticket**. Wohin dieser Button das Mitglied führt, entscheidest du - konfiguriere es unter **KI-Einstellungen → Fallback-Verhalten → Eskalations-Button nach KI-Antwort**:

- **Keinen Open-Ticket-Button anzeigen** - die KI sagt nur, dass sie nicht helfen kann. Wähle das, wenn Mitglieder nicht automatisch in Tickets geleitet werden sollen.
- **Modmail-DM öffnen** - der Button startet eine Modmail-Unterhaltung. Nur verfügbar, wenn [Modmail](/de/docs/support-bot/modmail/intro) aktiviert ist.
- **Ticket-System-Ticket öffnen** - der Button erstellt ein reguläres [Ticket-System](/de/docs/support-bot/ticket-system/intro)-Ticket. Nur verfügbar, wenn das Ticket-System aktiviert ist.

Wenn du das gewählte Subsystem später deaktivierst, stellt das Dashboard den Fallback automatisch auf "Keinen Open-Ticket-Button anzeigen" zurück, damit Mitglieder nicht in etwas geleitet werden, das nicht läuft.

Standardmäßig erscheint der Button **Open a ticket** nur, wenn die KI nicht gut antworten konnte. Wenn du Mitgliedern bei **jeder** Antwort einen Ausweg bieten möchtest, aktiviere **Immer die Schaltfläche "Ticket eröffnen" anzeigen** - der Button wird dann unter jeder KI-Antwort angezeigt, nicht nur unter denen mit "I couldn't find an answer". Dafür muss weiterhin oben ein Eskalationsziel (Modmail oder Ticket-System) ausgewählt sein; ist das Ziel "Keinen Open-Ticket-Button anzeigen", wird kein Button angezeigt.

## Was es kostet {#cost}

Jede Antwort im Kanal-Modus verbraucht einige AI-Credits. Die genaue Menge hängt davon ab, was die KI tatsächlich getan hat (die Nachricht abgelehnt, kurz geplaudert ohne zu suchen oder eine vollständige FAQ-Suche durchgeführt) und welchen KI-Anbieter dein Server nutzt. Die vollständige Aufschlüsselung findest du auf der Seite [Credits und Preise](/de/docs/support-bot/ai-faq/credits-and-pricing), zusammen mit Tipps zum Sparen.

:::tip Credit-Verbrauch planbar halten
Die wichtigsten Stellschrauben für die Kosten im Kanal-Modus sind der **Cooldown**, die **Mindest-Fragelänge** und die Liste der ignorierten Präfixe. Wenn du eine davon verschärfst, läuft die KI seltener, ohne sinnvolle Antworten zu verlieren.
:::

## Beispiel-Setups {#examples}

Das sind Ausgangspunkte - die tatsächlichen Einstellungen hängen davon ab, wie aktiv deine Kanäle sind und wie streng der Filter sein soll. Alle Werte werden genau so eingegeben, wie sie im Dashboard angezeigt werden.

### Kleine Community, ein Hilfe-Kanal

Ein typisches Setup für kleine Communities. Die Standardwerte sind auf diesen Fall abgestimmt.

- **Kanäle:** nur `#help`.
- **Cooldown:** 30 Sekunden (Standard).
- **Mindest-Fragelänge:** 8 Zeichen (Standard).
- **Nachrichten ignorieren, die beginnen mit:** `!`, `?`, `/` (Standard).
- **Konten ignorieren, die jünger sind als:** 0 Tage (aus).
- **👍 / 👎 Feedback-Buttons anzeigen:** an.

Planbare Kosten, geringe Wahrscheinlichkeit für Fehlauslösungen, kann bedenkenlos laufen.

### Support-Server mit viel Traffic

Wenn ein Hilfe-Kanal so aktiv ist, dass die Standardwerte die KI zu oft auslösen würden, verschärfe die Filter.

- **Kanäle:** `#help`, `#bug-reports`, `#account-issues`.
- **Cooldown:** 60 Sekunden.
- **Mindest-Fragelänge:** 15 Zeichen.
- **Nachrichten ignorieren, die beginnen mit:** `!`, `?`, `/` sowie die Präfixe deiner Moderations-/Utility-Bots (z. B. `,`, `>>`, `&`).
- **Konten ignorieren, die jünger sind als:** 3 Tage.
- **👍 / 👎 Feedback-Buttons anzeigen:** an (hilft zu erkennen, welche Einträge Mitglieder bei hohem Aufkommen als nicht hilfreich empfinden).

### Support über Forum-Kanäle

Forum-Beiträge sind meist in sich geschlossene Fragen, daher muss die KI selten mitten in einem Thread eingreifen. Du möchtest einen längeren Cooldown, damit die KI nur die erste Nachricht beantwortet und in den Antworten still bleibt.

- **Kanäle:** der Forum-Kanal selbst (ein Eintrag pro Forum, das du abdecken möchtest).
- **Cooldown:** 300 Sekunden (5 Minuten).
- **Mindest-Fragelänge:** 20 Zeichen (Forum-Beiträge sind meist länger).
- **Nachrichten ignorieren, die beginnen mit:** `!`, `?`, `/`.
- **Konten ignorieren, die jünger sind als:** 0 Tage.
- **👍 / 👎 Feedback-Buttons anzeigen:** an.

:::tip Enterprise
Der Credit-Verbrauch im Kanal-Modus skaliert mit der Anzahl beantworteter Fragen. Wenn du stark frequentierte Support-Kanäle betreibst und regelmäßig über deinem monatlichen Kontingent liegst, sind Volumenpreise meist günstiger als einzelne Credit-Aufladungen - siehe [Enterprise & Docs Sync](/de/docs/support-bot/ai-faq/enterprise-and-docs-sync) oder [kontaktiere den Vertrieb](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::
