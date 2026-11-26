---
sidebar_position: 6
title: "KI-Aktionen"
description: "Nutze KI in einem Flow: Text in Kategorien einsortieren, Ja-Nein-Fragen beantworten, eine Antwort erzeugen oder typisierte Werte aus der Nachricht eines Mitglieds herausziehen."
---

# KI-Aktionen

Mit KI-Aktionen kann ein Flow ein Sprachmodell nutzen: eine Nachricht einer Kategorie zuordnen, eine Ja-Nein-Frage entscheiden, eine Antwort schreiben oder Werte wie eine Bestellnummer aus freiem Text herausziehen. Du findest sie in der Kategorie [Integrationen](/de/docs/custom-commands/reference/actions/bot-integrations) der Aktionsliste, neben **Text mit KI übersetzen**.

Alle Eingaben und Ausgänge der vier Aktionen stehen in der [Aktionsreferenz](/de/docs/custom-commands/reference/actions/bot-integrations#ai-categorize). Diese Seite erklärt, was die Referenz nicht zeigt: was du zurückbekommst, wenn die KI unsicher ist, was die Schritte kosten und wie du verhinderst, dass Text von Mitgliedern die KI lenkt.

## Die vier Aktionen {#actions}

| Aktion                                                                                                            | Liefert                                                                                                   | Wenn die KI sich nicht entscheiden kann                                         |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [Text mit KI einer Kategorie zuordnen](/de/docs/custom-commands/reference/actions/bot-integrations#ai-categorize) | **Kategorie** (ein Eintrag deiner Liste, genau so geschrieben wie dort) und **Zugeordnet** (Ja oder Nein) | **Zugeordnet** ist Nein und **Kategorie** ist leer                              |
| [Mit KI Ja oder Nein entscheiden](/de/docs/custom-commands/reference/actions/bot-integrations#ai-decide)          | **Entscheidung**: Ja oder Nein                                                                            | Nichts zu prüfen: ein erfolgreicher Schritt antwortet immer mit Ja oder Nein    |
| [KI fragen](/de/docs/custom-commands/reference/actions/bot-integrations#ai-ask)                                   | **Antwort**: Text                                                                                         | Nichts zu prüfen: bei einer leeren Antwort schlägt der Schritt stattdessen fehl |
| [Felder mit KI aus Text auslesen](/de/docs/custom-commands/reference/actions/bot-integrations#ai-extract)         | Ein Ausgang pro Feld, das du definierst, benannt nach der ID des Felds                                    | Jedes Feld kann leer sein                                                       |

### Text einer Kategorie zuordnen {#categorize}

Du gibst 2 bis 25 verschiedene Kategorien an, jede mit bis zu 40 Zeichen. Die KI kann nur mit einem Eintrag deiner Liste antworten oder mit keinem, deshalb kannst du **Kategorie** sicher mit deinen eigenen Einträgen vergleichen. Die optionale **Erklärung** sagt der KI, was die Kategorien bedeuten.

Prüfe immer zuerst **Zugeordnet**. Eine Nachricht, die zu keiner Kategorie passt, lässt **Kategorie** leer, und ein **Switch** auf einen leeren Wert nimmt seinen Standardzweig. Dort ist ein Löschen oder ein Timeout fehl am Platz. Setze direkt nach dem Schritt ein **Wenn** auf **Zugeordnet** und den **Switch** auf **Kategorie** in dessen Dann-Zweig.

### Mit Ja oder Nein entscheiden {#decide}

Du schreibst die Frage, zum Beispiel "Ist diese Nachricht Werbung?", und gibst den Text an, auf den sie sich bezieht. Die Antwort ist immer Ja oder Nein.

### KI fragen {#ask}

Die **Anweisung** ist die Aufgabe, zum Beispiel "Fasse das in zwei Sätzen zusammen." Die optionalen **Daten** sind der Text, mit dem die KI arbeitet. Die **Antwort** ist die Erwiderung der KI als Text. Lies [Text von Mitgliedern und Erwähnungen](#member-text), bevor du eine Antwort postest.

### Felder aus Text auslesen {#extract}

Du definierst 1 bis 10 Felder. Jedes Feld hat:

- eine **ID** mit bis zu 16 Zeichen: Kleinbuchstaben `a-z`, Ziffern `0-9` und Bindestriche
- einen **Typ**: Text, Zahl oder Ja/Nein
- eine optionale **Beschreibung**, die der KI sagt, wonach sie suchen soll, zum Beispiel "Die Bestellnummer, die das Mitglied nennt"

Der Schritt liefert einen Ausgang pro Feld, benannt nach der ID. Ein Wert, der nicht im Text steht oder nicht zum Typ passt, kommt leer zurück. Prüfe deshalb jedes Feld, bevor du es nutzt, zum Beispiel mit **Wenn ein Wert da ist**. Eine Zahl kann Nachkommastellen haben; runde sie, bevor du sie dort verwendest, wo eine ganze Zahl nötig ist.

Definiere die Felder zuerst im Schritt und nutze dann ihre Ausgänge. Der Editor kann die Ausgänge nur für eine Feldliste benennen, die direkt im Flow steht; stammt die Liste aus einer Variable, lassen sich die Ausgänge im Editor nicht benennen. Wenn du Flows mit einem KI-Assistenten über den [MCP-Connector](/de/docs/custom-commands/mcp) baust, muss er beim Hinzufügen des Schritts jeden Ausgang (`field:<id>`) benennen, weil die Ausgänge von den Feldern des jeweiligen Schritts abhängen.

## Text von Mitgliedern und Erwähnungen {#member-text}

Schreibe das, was ein Mitglied verfasst hat, in die Eingabe **Text** (bei **KI fragen** in **Daten**) und niemals in eine Anweisung, eine Erklärung oder die Frage von **Mit KI Ja oder Nein entscheiden**. Die KI liest diese Eingaben als deine eigenen Worte, ein Mitglied, das dort hineinschreiben kann, kann also den ganzen Schritt lenken. Text in **Text** oder **Daten** wird getrennt gesendet und die KI wird angewiesen, ihn als Daten zu behandeln, aber eine clevere Nachricht kann die Antwort trotzdem beeinflussen.

Behandle deshalb jedes KI-Ergebnis wie die Nachricht eines Mitglieds:

- Lass ein KI-Ergebnis nicht allein über einen Bann, ein Löschen oder eine Rollenänderung entscheiden. Lass die Nachricht stattdessen von einem Moderator prüfen.
- Eine Antwort kann eine Benutzer-Erwähnung wie `<@id>` enthalten, und beim Posten wird diese Person gepingt. Pings von Rollen, `@everyone` und `@here` sind durch die Standard-Erwähnungseinstellungen der Sende-Aktionen blockiert, solange du sie nicht einschaltest.
- Poste eine Antwort auf den Text eines Mitglieds nicht ungeprüft. **Discord-Markdown escapen** hilft bei Werten, die du in eine Nachricht einsetzt.

## Kosten und Fehler {#cost}

Jeder KI-Schritt kostet AI Coins vom Guthaben deines Servers, aktuell einen pro Antwort. Ein Coin wird nur verbraucht, wenn der KI-Dienst tatsächlich eine Antwort liefert. KI-Schritte haben kein eigenes Stundenlimit: dein Guthaben ist die Grenze, allerdings gilt weiterhin das allgemeine Aktivitätsbudget deines Servers. Wie viele Coins dein Plan enthält und wie du aufstockst, steht auf der [KI-Seite](/de/docs/custom-bot/modules/ai).

| Was passiert ist                                                                                   | Fehlercode             |
| -------------------------------------------------------------------------------------------------- | ---------------------- |
| Das Guthaben ist leer                                                                              | `AI_CREDITS_EXHAUSTED` |
| Dein Server hat in kurzer Zeit zu viele KI-Anfragen gesendet, oder der Text ist länger als erlaubt | `LIMIT_EXCEEDED`       |
| Der KI-Dienst hat nicht rechtzeitig geantwortet oder eine unbrauchbare Antwort geliefert           | `UNKNOWN`              |
| Der Text ist leer                                                                                  | `INVALID_INPUT`        |

Alle diese Fehler lassen sich abfangen. Setze den KI-Schritt in einen **Versuchen**-Block und entscheide unter **Bei Fehler**, was eine fehlende Antwort bedeutet, meistens "nichts tun". Ist das Guthaben aufgebraucht, merkt sich der Bot das etwa eine Minute lang, KI-Schritte können nach dem Aufstocken also noch bis zu einer Minute weiter fehlschlagen. Eine Nachricht, die nur ein Bild enthält, hat keinen Text, sichere diesen Fall also ab.

Setze bei einem Flow, der bei jeder Nachricht startet, zusätzlich einen [Cooldown](/de/docs/custom-commands/flows#cooldowns), denn ein belebter Kanal verbraucht bei jeder Nachricht Coins.

In einem Testlauf wird die KI nicht aufgerufen und nichts berechnet. **Text einer Kategorie zuordnen** liefert deine erste Kategorie mit **Zugeordnet** Ja, **Mit KI Ja oder Nein entscheiden** liefert Ja, **KI fragen** liefert einen Platzhaltertext und **Felder mit KI aus Text auslesen** liefert leeren Text, 0 und Nein. KI-Schritte lassen sich nicht in einem Autocomplete-Flow verwenden.

## Das 30-Sekunden-Limit {#run-time}

Eine Ausführung darf höchstens 30 Sekunden dauern, und eine KI-Anfrage wartet etwa 12 Sekunden, bevor sie aufgibt. Eine Schleife mit **Für jeden Eintrag** über 100 Nachrichten, die in jedem Durchlauf einen KI-Schritt aufruft, passt deshalb nicht hinein. Läuft die Zeit ab, endet die Ausführung und lässt sich nicht abfangen. Siehe [Limits für eine einzelne Ausführung](/de/docs/custom-commands/limits-and-safety#run-limits).

Halte dich bei KI-Schritten an eine Handvoll pro Ausführung: einen pro Ereignis oder eine kurze Schleife über eine Liste, die du vorher begrenzt hast. Arbeit, die eine lange Liste abdeckt, gehört in viele kleine Ausführungen, eine pro Eintrag, zum Beispiel mit je einer [Flow-Ausführung planen](/de/docs/custom-commands/reference/actions/custom-commands/custom-commands-flows#schedule-flow-run).

## Beispiele {#examples}

Alle drei Flows starten bei einer neuen Nachricht und setzen den KI-Schritt in einen **Versuchen**-Block. Sie gehören außerdem zu den Beispielen, die der [MCP-Connector](/de/docs/custom-commands/mcp) deinem KI-Assistenten zeigen kann.

### Ticket-Sortierung {#example-triage}

1. **Versuchen**: **Text mit KI einer Kategorie zuordnen** auf den Nachrichtentext, mit den Kategorien `billing`, `bug-report` und `account-access` und einer Erklärung, was sie bedeuten.
2. **Wenn** **Zugeordnet** Ja ist, antwortet ein **Switch** auf **Kategorie** für jede Kategorie mit einem anderen Text.
3. Passt nichts oder schlägt der KI-Schritt fehl, bleibt der Flow still.

Ein Cooldown von einer Minute pro Benutzer hält die Kosten niedrig.

### Spam-Prüfung {#example-spam}

1. **Versuchen**: **Mit KI Ja oder Nein entscheiden** mit der Frage "Ist diese Nachricht Spam, ein Betrug oder unerwünschte Werbung?" und dem Nachrichtentext.
2. **Wenn** **Entscheidung** Ja ist, postet der Flow einen Link zur Nachricht in einen Moderatoren-Kanal.

Der Flow meldet die Nachricht, statt sie zu löschen, weil die Nachricht selbst die Antwort der KI beeinflussen kann.

### Bestellnummern {#example-order}

1. **Versuchen**: **Felder mit KI aus Text auslesen** mit zwei Feldern: `order-number` (Text) und `wants-refund` (Ja/Nein).
2. **Wenn ein Wert da ist** bei der Bestellnummer: Möchte das Mitglied eine Rückerstattung, sagt der Flow, dass er das weitergegeben hat.
3. Die Bestellnummer läuft durch **Discord-Markdown escapen**, bevor der Flow sie in einer Antwort wiederholt, weil sie aus dem Text eines Mitglieds stammt.

## Grenzen {#limits}

| Punkt                                                                     | Grenze                                                                                             |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Zu lesender Text                                                          | 1 bis 4000 Zeichen                                                                                 |
| Frage von **Mit KI Ja oder Nein entscheiden** und die optionale Erklärung | bis zu 500 Zeichen                                                                                 |
| Anweisung von **KI fragen**                                               | bis zu 2000 Zeichen                                                                                |
| Optionale **Daten** von **KI fragen**                                     | bis zu 4000 Zeichen                                                                                |
| Kategorien                                                                | 2 bis 25 verschiedene Einträge, jeder bis zu 40 Zeichen                                            |
| Felder                                                                    | 1 bis 10 Felder; ID bis zu 16 Zeichen (`a-z`, `0-9`, Bindestrich); Beschreibung bis zu 200 Zeichen |

Zu den Typen der Werte siehe [Werttypen](/de/docs/custom-commands/value-types). Ergebnisse kannst du mit dem [Datenspeicher](/de/docs/custom-commands/storage) aufbewahren.
