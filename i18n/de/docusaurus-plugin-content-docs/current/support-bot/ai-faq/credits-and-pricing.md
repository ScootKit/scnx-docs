---
sidebar_position: 7
title: Credits & Preise
description: So funktionieren AI-FAQ-Credits - monatliches Kontingent, Kosten pro Antwort, Indexierungskosten, Aufladungen und Verhalten bei aufgebrauchten Credits.
---

# Credits und Preise

AI FAQ verbraucht die **KI-Guthaben** deines Servers, sobald der Bot eine Antwort generiert oder du einen neuen FAQ-Eintrag speicherst. Diese Seite erklärt, was was kostet, wie dein monatliches Kontingent funktioniert und was du tun kannst, wenn die Credits aufgebraucht sind.

## Monatliches kostenloses Kontingent {#monthly-grant}

Jede kostenpflichtige Plan-Stufe enthält ein kostenloses monatliches Kontingent an KI-Credits, das am **25. jedes Monats** aufgefüllt wird. Nicht verbrauchte Credits werden in den nächsten Monat übertragen - du verlierst also nie, was du nicht ausgegeben hast.

| Plan-Stufe   | Monatliche Credits |
| ------------ | ------------------ |
| STARTER      | 25                 |
| ACTIVE_GUILD | 100                |
| PRO          | 250                |
| UNLIMITED    | 300                |
| PROFESSIONAL | 600                |

Wenn dir die Credits regelmäßig vor der monatlichen Auffüllung ausgehen, kannst du auf der Seite [**Preise**](https://scnx.app/glink?page=pricing) in deinem Dashboard aufladen.

## Was eine Antwort kostet {#per-answer}

Jede KI-Antwort kostet eine kleine Menge Credits. Die genauen Kosten hängen davon ab, was die KI tatsächlich tun musste:

- **Abgewiesene Nachricht** kostet **1 Credit**. Das passiert, wenn die KI die Antwort verweigert hat (z. B. bei beleidigenden Inhalten) oder die Frage herausgefiltert wurde, bevor die KI lief.
- **Smalltalk oder Off-Topic-Geplauder** kostet **3 Credits**. Das passiert, wenn die KI ein kurzes „Danke" oder „Hi" beantwortet hat, ohne deine FAQ zu durchsuchen.
- **Echte FAQ-Antwort** kostet **15 Credits**. Das ist der häufigste Fall: Die KI hat deine FAQ-Einträge durchsucht, den passenden Eintrag (oder mehrere) gefunden und darauf basierend eine Antwort geschrieben.

### KI-Anbieter {#provider}

Die Wahl eines anderen KI-Anbieters ist derzeit pausiert. Jeder Server nutzt den Standard-Anbieter und zahlt die Preise oben. Im Panel **KI-Einstellungen → Status** auf der AI-FAQ-Seite siehst du, wie viele Antworten dein aktuelles Guthaben abdeckt.

## Was das Speichern von FAQ-Einträgen kostet {#indexing}

Wenn du einen neuen oder bearbeiteten FAQ-Eintrag speicherst, teilt der Bot ihn in durchsuchbare Abschnitte auf, damit die KI später den richtigen findet. Jeder Abschnitt kostet **1 Credit** für die Indexierung.

- Bei typischem englischem Fließtext entspricht ein Abschnitt etwa 2.000 Zeichen - ein Eintrag mit 4.000 Zeichen kostet also etwa 2 Credits, einer mit 20.000 Zeichen etwa 10 Credits. Code-lastige Inhalte werden tendenziell in kleinere Abschnitte geteilt, daher können die Kosten pro Zeichen etwas höher liegen.
- Der Eintrags-Editor zeigt dir die genaue Anzahl der Abschnitte und die Credit-Kosten live beim Tippen an, sodass du vor dem Speichern siehst, was es kosten wird.
- **Das Bearbeiten nur des Titels sowie das Archivieren/Wiederherstellen eines Eintrags ist kostenlos.** Nur Änderungen am Antworttext lösen die erneute Berechnung aus.
- Erneutes Speichern ohne Änderung der Antwort ist ebenfalls kostenlos.
- Archivierte Einträge kosten nichts, solange du sie behältst.

Dasselbe im Kontext des Editors findest du unter [FAQ-Einträge schreiben](/de/docs/support-bot/ai-faq/faq-entries#indexing-cost).

## Realistische monatliche Ausgaben {#scenarios}

Drei grobe Beispiele, wie ein Monat bei unterschiedlichem Aufkommen aussieht. Die tatsächlichen Zahlen hängen von der Mischung der Fragetypen ab (abgelehnt vs. Smalltalk vs. echte Suche).

### Ruhiger Hilfe-Kanal, hauptsächlich Smalltalk

Eine kleine Community, in der die KI etwa 30 Fragen pro Monat sieht, von denen die meisten kurzes Geplauder oder „Danke" sind statt echter FAQ-Abfragen.

- ~20 Smalltalk-Interaktionen × 3 Credits = 60 Credits
- ~10 echte FAQ-Antworten × 15 Credits = 150 Credits
- **Gesamt: etwa 200 Credits / Monat**

Das wird problemlos vom monatlichen Kontingent von **PRO** (250) oder **UNLIMITED** (300) abgedeckt. Bei **ACTIVE_GUILD** (100) wäre in den meisten Monaten eine kleine Aufladung nötig.

### Aktiver Support-Server

Ein ausgelasteter Support-Server, auf dem die KI ~150 Fragen pro Monat bearbeitet, hauptsächlich echte FAQ-Abfragen über die Kanal-Auto-Antwort.

- ~30 Smalltalk × 3 Credits = 90 Credits
- ~120 echte FAQ-Antworten × 15 Credits = 1.800 Credits
- **Gesamt: etwa 1.900 Credits / Monat**

Deutlich über dem monatlichen Kontingent jedes Plans - du wirst regelmäßig aufladen. Wenn du dauerhaft in diesem Bereich liegst, sprich uns gerne auf Enterprise-Mengenpreise an.

### Server mit hohem Aufkommen

Ein größerer Server mit ~500 Fragen pro Monat, hauptsächlich echte FAQ-Abfragen.

- ~100 Smalltalk × 3 Credits = 300 Credits
- ~400 echte FAQ-Antworten × 15 Credits = 6.000 Credits
- **Gesamt: etwa 6.300 Credits / Monat**

Weit jenseits der Plan-Kontingente. Lade regelmäßig auf oder nutze einen Enterprise-Plan mit mengenbasierten Credit-Preisen - siehe [Enterprise & Docs Sync](/de/docs/support-bot/ai-faq/enterprise-and-docs-sync).

## Credits aufladen {#top-ups}

Credit-Aufladungen sind auf der Seite **Preise** in deinem SCNX-Dashboard verfügbar. Aufgeladene Credits kommen zu deinem monatlichen Kontingent hinzu und werden übertragen, bis du sie verbrauchst.

:::tip Enterprise
Aufladungen kosten pauschal pro Credit. Wenn dein Server regelmäßig deutlich mehr als das monatliche Kontingent verbraucht, sind auf Enterprise-Plänen Mengenpreise und feste monatliche Budgets verfügbar - siehe [Enterprise & Docs Sync](/de/docs/support-bot/ai-faq/enterprise-and-docs-sync) oder [kontaktiere den Vertrieb](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::

## Wenn die Credits aufgebraucht sind {#out-of-credits-behavior}

Wenn das Guthaben deines Servers null erreicht, kann die KI nichts mehr beantworten, bis du auflädst. Was Mitglieder in dieser Zeit erleben, steuerst du unter **KI-Einstellungen → Fallback-Verhalten → Wenn das KI-Guthaben aufgebraucht ist**:

- **Mitgliedern sagen, dass der Server kein KI-Guthaben mehr hat** (empfohlen, Standard) - der Bot sendet eine kurze Nachricht, dass die KI vorübergehend nicht verfügbar ist. Das hält das Mitglied auf dem Laufenden und gibt dem Team ein sichtbares Signal zum Aufladen.
- **Stattdessen anbieten, ein Ticket zu öffnen** - der Bot zeigt einen Knopf an, damit das Mitglied weiterhin das Team erreichen kann. Der Grund wird nicht genannt.
- **Stillschweigen (nichts tun)** - der Bot sagt gar nichts. Mitglieder könnten denken, der Bot sei defekt. Nutze das nur, wenn du dein Guthaben aktiv überwachst.

## Credit-Verbrauch senken {#reducing-spend}

Wenn du schneller Credits verbrauchst, als dir lieb ist, liegen die wichtigsten Stellschrauben bei der Kanal-Auto-Antwort - dort läuft die KI deutlich häufiger als beim Gatekeeper:

- **Erhöhe die Abklingzeit**, damit ein Mitglied nicht in kurzer Folge Antwort um Antwort auslösen kann. Siehe [Filter der Kanal-Auto-Antwort](/de/docs/support-bot/ai-faq/channel-mode#filters).
- **Erhöhe die Mindestlänge der Frage**, damit kurzes Geplauder übersprungen wird.
- **Füge weitere zu ignorierende Präfixe hinzu**, um befehlsartige Nachrichten anderer Bots zu überspringen.
- **Deaktiviere die Kanal-Auto-Antwort in lauten Kanälen** - den Pre-Ticket-Gatekeeper allein laufen zu lassen ist meist deutlich günstiger, da er nur dann ausgelöst wird, wenn jemand wirklich ein Ticket öffnet.
- **Archiviere veraltete FAQ-Einträge**, damit sie nicht die Suche der KI belasten.

:::info Wo du deine Nutzung prüfst
Das Panel **KI-Einstellungen → Status** auf der AI-FAQ-Seite zeigt dein aktuelles Guthaben und wie viele Antworten es ungefähr abdeckt. Die Seite [Insights](/de/docs/support-bot/ai-faq/insights) zeigt, wie viele Antworten tatsächlich generiert wurden und wohin sie gingen.
:::
