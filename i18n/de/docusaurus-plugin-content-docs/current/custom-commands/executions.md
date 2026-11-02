---
sidebar_position: 8
title: "Ausführungsverlauf & Debugging"
description: "Sieh dir jede Ausführung deiner Flows an, finde heraus, warum eine fehlgeschlagen ist oder übersprungen wurde, und probiere einen Flow sicher mit einem Testlauf aus."
---

# Ausführungsverlauf & Debugging

Jedes Mal, wenn einer deiner Flows läuft, schreibt dein Bot es auf: wann er lief, wie lange er gebraucht hat, wie er endete und, falls er fehlgeschlagen ist, bei welchem Schritt und warum. Dieser Ausführungsverlauf ist die erste Anlaufstelle, wenn ein Flow nicht das gemacht hat, was du erwartet hast.

Bevor du einen Flow live schaltest, kannst du ihn auch mit einem [Testlauf](#test-runs) ausprobieren. Ein Testlauf nutzt deinen echten Server, aber nichts wird gesendet, geändert oder gelöscht.

## Wo du Ausführungen findest {#where}

- **Alle Ausführungen auf deinem Server:** Klicke in der Custom-Commands-Übersicht unter **Daten & Verlauf** auf **Ausführungen**.
- **Ausführungen eines Moduls:** Öffne das Modul und gehe zum Tab **Ausführungen**. Wähle unter **Flow** einen Flow aus, um seine Ausführungen zu sehen.
- **Ausführungen eines Flows:** Im Flow-Editor zeigt der Tab **Flow** in der Seitenleiste die neuesten Ausführungen. Klicke auf **Alle Ausführungen ansehen** für die vollständige Liste.
- **Ausführungen einer installierten App:** Öffne die App, gehe zu **Erweitert**, klicke auf **Entwickler-Tools anzeigen** und dann auf **Ausführungen**.

Der Ausführungsverlauf liegt wie deine gespeicherten Daten auf deinem Bot. Solange dein Bot gestoppt ist, zeigt die Seite "Der Bot muss laufen".

:::info Aufgerufene Flows werden beim Aufrufer protokolliert
Wenn ein Flow mit **Anderen Flow ausführen** einen anderen Flow startet, sind beide eine einzige Ausführung. Diese Ausführung wird bei dem Flow protokolliert, der sie gestartet hat. Öffnest du den Verlauf eines Flows, der immer nur aufgerufen wird, siehst du "Keine eigenen Ausführungen" und eine Liste der Flows, die ihn aufrufen.
:::

## Die Ausführungsliste {#list}

Jede Zeile ist eine Ausführung und zeigt:

- **Die Ausführungsnummer**, etwa `#21031`. Gib sie an, wenn du jemanden um Hilfe bittest.
- **Den Status**, [unten](#statuses) erklärt.
- **Ein Kolben-Symbol**, wenn es ein Testlauf war.
- **Den Flow** und **den Trigger**, der ihn gestartet hat.
- **Wann sie begann** und **wie lange sie gedauert hat**.

Grenze die Liste mit den Filtern **Flow** und **Status** ein. Um herauszufinden, warum etwas schiefgelaufen ist, setze **Status** auf **Fehlgeschlagen** und wähle den Flow aus.

![Die serverweite Seite Ausführungen mit den Filtern Flow und Status und einer Mischung aus erfolgreichen, fehlgeschlagenen und übersprungenen Ausführungen, darunter Testläufe mit Kolben-Symbol](@site/docs/assets/custom-commands/en/executions-list.png)

## Status {#statuses}

| Status                  | Was er bedeutet                                                                                                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Erfolgreich**         | Der Flow ist bis zum Ende gelaufen.                                                                                                                                                                                                   |
| **Fehlgeschlagen**      | Ein Schritt ist auf einen Fehler gestoßen und der Flow hat dort angehalten. Öffne die Ausführung, um zu sehen, welcher Schritt und warum.                                                                                             |
| **Gestoppt**            | Der Flow wurde absichtlich früher beendet, mit einem Schritt **Flow stoppen** oder **Aus Flow zurückkehren**. Das ist kein Fehler.                                                                                                    |
| **Limit überschritten** | Die Ausführung hat ein Sicherheitslimit erreicht, zum Beispiel hat sie zu lange gedauert oder zu viele Schritte ausgeführt, und wurde beendet. Siehe [Tarife, Limits & Sicherheit](/de/docs/custom-commands/limits-and-safety).       |
| **Übersprungen**        | Der Trigger hat ausgelöst, aber der Flow ist nicht gestartet. Die Ausführung zeigt den Grund, zum Beispiel einen Cooldown, einen ausgeschalteten Flow, zu viele Ausführungen in kurzer Zeit oder das Aktivitätsbudget deines Servers. |
| **Unterbrochen**        | Die Ausführung wurde abgebrochen, bevor sie fertig war, meist weil dein Bot während der Ausführung neu gestartet ist.                                                                                                                 |

Ein paar weitere Dinge, die dir begegnen können:

- **Kurz aufeinanderfolgende Übersprünge** werden zu einer Zeile zusammengefasst, damit ein vielbeschäftigter Trigger deinen Verlauf nicht überflutet.
- **Eine wartende Ausführung**, die darauf wartet, dass jemand einen Button klickt oder eine Frage beantwortet, wird aufgeschrieben, sobald sie zu warten beginnt. Speicherst du Änderungen an diesem Flow, während die Ausführung wartet, wird die wartende Ausführung abgebrochen und als **Unterbrochen** angezeigt, weil sie sonst mit Schritten weitermachen würde, die es nicht mehr gibt.

## Eine Ausführung öffnen {#detail}

Klicke auf eine Zeile, um sie zu öffnen. Du siehst den **Auslöser**, die Anzahl unter **Ausgeführte Schritte** und die **Dauer**.

Bei einer fehlgeschlagenen Ausführung sagt die erste Zeile, wo und warum, zum Beispiel "Fehlgeschlagen bei send-message (MISSING_PERMISSIONS)", gefolgt von einer verständlichen Erklärung wie "Dem Bot fehlt eine für diesen Schritt benötigte Berechtigung." Darunter nennt die ursprüngliche Fehlermeldung oft den genauen Kanal, die Rolle oder die Berechtigung.

Bei einer übersprungenen Ausführung siehst du, warum sie übersprungen wurde, etwa "Abklingzeit aktiv", "Flow deaktiviert" oder "Server-Ratenlimit". Bei einer unterbrochenen Ausführung siehst du einen Hinweis, dass der Bot neu gestartet ist.

Testläufe zeigen außerdem einen **Schritt-Trace**: jeden Schritt der Reihe nach, mit Status und Dauer. Klicke auf einen Schritt, um seine **Eingaben** und **Ausgaben** zu sehen. Normale Ausführungen speichern keinen Schritt-Trace, dort siehst du also "Für diesen Lauf wurde kein Schritt-Trace aufgezeichnet." Um zu sehen, was jeder Schritt mit echten Werten macht, starte einen [Testlauf](#test-runs).

![Ein geöffneter fehlgeschlagener Testlauf mit der Zeile "Fehlgeschlagen bei", ihrer Erklärung, Auslöser, Ausgeführte Schritte und Dauer sowie einem Schritt-Trace, in dem der fehlgeschlagene Schritt mit seinen Eingaben und Ausgaben aufgeklappt ist](@site/docs/assets/custom-commands/en/execution-trace.png)

### Beispiel: eine fehlgeschlagene Ausführung lesen {#example-failed-run}

Ein Mitglied sagt, dass `/warn` nichts gemacht hat. So findest du heraus, warum:

1. Öffne **Ausführungen**, setze **Flow** auf deinen Warn-Flow und **Status** auf **Fehlgeschlagen**. Die neueste fehlgeschlagene Ausführung steht ganz oben.
2. Klicke auf die Zeile. Die erste Zeile lautet "Fehlgeschlagen bei send-message (MISSING_PERMISSIONS)". Kaputtgegangen ist der Schritt, der eine Nachricht sendet, und der Grund ist eine fehlende Berechtigung.
3. Der Satz darunter lautet "Dem Bot fehlt eine für diesen Schritt benötigte Berechtigung." Die Fehlermeldung darunter nennt die Berechtigung und den Kanal.
4. **Ausgeführte Schritte** zeigt, wie weit der Flow gekommen ist. Schritte vor dem fehlgeschlagenen sind gelaufen und werden nicht rückgängig gemacht. Die Verwarnung kann zum Beispiel schon gespeichert sein, obwohl die Nachricht nicht gesendet wurde.
5. Behebe die Ursache, hier indem du deinem Bot in diesem Kanal **Nachrichten senden** erlaubst. Am Flow musst du nichts ändern.
6. Führe `/warn` noch einmal aus und prüfe, ob die neue Ausführung **Erfolgreich** zeigt.

Hat der Flow mehrere Schritte derselben Art und du kannst nicht erkennen, welcher fehlgeschlagen ist, mach einen [Testlauf](#test-runs) mit denselben Werten. Sein Schritt-Trace zeigt jeden Schritt der Reihe nach, und der fehlgeschlagene ist der letzte.

### Meldungen zum Aufbau des Flows {#flow-errors}

Manche Fehler werden nicht von deinem Server verursacht, sondern vom Flow selbst. Für diese zeigt die Ausführung statt des allgemeinen Satzes einen bestimmten:

| Was die Ausführung sagt                                                                    | Lösung                                                                                                                                                             |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "Auf diese Interaktion wurde bereits geantwortet oder sie wurde bereits aufgeschoben"      | Nutze **Auf Interaktion folgen**, um eine weitere Nachricht zu senden, oder **Interaktionsantwort bearbeiten**, um die erste zu ändern.                            |
| "Auf diese Interaktion wurde noch nicht geantwortet und sie wurde noch nicht aufgeschoben" | Füge **Auf Interaktion antworten** oder **Interaktionsantwort aufschieben** hinzu, bevor du eine Folgenachricht sendest oder die Antwort bearbeitest oder löschst. |
| "Die Interaktion ist abgelaufen, bevor der Bot geantwortet hat"                            | Antworte oder schiebe die Antwort als ersten Schritt auf, vor allem, was lange dauert.                                                                             |
| "Diese Interaktion kann nicht mehr beantwortet werden"                                     | Der Flow hat bei einem Warten pausiert und ist zu spät weitergelaufen, um noch zu antworten. Sende nach einem Warten stattdessen eine Kanalnachricht.              |
| Ein Warte-Schritt "kann nicht innerhalb einer Schleife pausieren"                          | Verschiebe den Warte-Schritt aus der Schleife heraus.                                                                                                              |
| "Beim Ausführen dieser Aktion fehlte ein benötigter Wert"                                  | Einer der Werte des Schritts war leer, gelöscht oder noch nicht gesetzt. Füge einen Ersatzwert hinzu oder prüfe vorher, ob er gesetzt ist.                         |

## Häufige Fehler {#errors}

| Code                         | Was passiert ist                                                                                                 | Was du tun kannst                                                                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MISSING_PERMISSIONS`        | Deinem Bot fehlte für diesen Schritt eine Discord-Berechtigung.                                                  | Gib deinem Bot die Berechtigung in diesem Kanal oder auf dem Server. Bei Rollenänderungen schiebe die Rolle deines Bots über die betroffene Rolle. |
| `NOT_FOUND`                  | Etwas, auf das der Schritt verweist, gibt es nicht mehr, etwa einen gelöschten Kanal, eine Rolle oder Nachricht. | Wähle den Kanal oder die Rolle im Schritt oder in den Einstellungen des Moduls neu aus.                                                            |
| `INTERACTION_EXPIRED`        | Dein Flow hat zu lange gebraucht, um auf einen Befehl oder Button zu antworten, und Discord hat aufgegeben.      | Antworte früh oder füge vor langsamen Schritten **Interaktionsantwort aufschieben** hinzu.                                                         |
| `INVALID_INPUT`              | Ein Wert, der an den Schritt übergeben wurde, war dafür nicht gültig.                                            | Prüfe die Werte, die der Schritt nutzt. Einer ist vielleicht leer oder von der falschen Art.                                                       |
| `STORAGE_ERROR`              | Das Lesen oder Schreiben gespeicherter Daten ist fehlgeschlagen.                                                 | Prüfe, ob der [Datenspeicher](/de/docs/custom-commands/storage#usage) deines Servers voll ist.                                                     |
| `LIMIT_EXCEEDED`             | Der Flow hat ein Limit erreicht, etwa das Aktivitätsbudget deines Servers oder eine Schleife, die zu oft lief.   | Siehe [Tarife, Limits & Sicherheit](/de/docs/custom-commands/limits-and-safety).                                                                   |
| `DESTRUCTIVE_LIMIT_EXCEEDED` | Der Flow hat in kurzer Zeit mehr gelöscht, gebannt oder gekickt, als er darf.                                    | Prüfe, ob der Flow nur das trifft, was du gemeint hast.                                                                                            |
| `AI_CREDITS_EXHAUSTED`       | Dein Server hat keine KI-Coins mehr, deshalb ist der KI-Schritt nicht gelaufen.                                  | Lade deine KI-Coins auf.                                                                                                                           |
| `DISCORD_API_ERROR`          | Discord hat die Anfrage abgelehnt.                                                                               | Lies die Fehlermeldung. Meist steht dort, was Discord nicht akzeptiert hat, etwa eine zu lange Nachricht.                                          |
| `TIMEOUT`                    | Der Schritt hat zu lange gedauert.                                                                               | Versuche es später noch einmal. Passiert das immer wieder, verschiebe langsame Arbeit in einen eigenen Flow.                                       |
| `UNKNOWN`                    | Etwas Unerwartetes ist schiefgelaufen.                                                                           | Führe den Flow noch einmal aus. Schlägt er weiter fehl, teile die Ausführungsnummer in den Beta-Kanälen auf unserem Discord.                       |

Du kannst Fehler auch innerhalb eines Flows abfangen. Packe die Schritte in einen Block **Versuchen**. Schlägt einer davon fehl, läuft statt des Fehlschlags des ganzen Flows der Zweig **Bei Fehler**, und er bekommt den Fehlercode und die Meldung. Siehe die [Kontrollfluss-Referenz](/de/docs/custom-commands/reference/actions/control-flow).

## Testläufe {#test-runs}

Ein Testlauf führt deinen Flow mit den echten Daten deines Servers aus, aber simuliert: Nichts wird gesendet, geändert oder gelöscht. Gespeicherte Daten werden gelesen, aber nie geschrieben. Das Ergebnis zeigt jeden Schritt und was er getan hätte.

1. Öffne den Flow im Editor und klicke in der Werkzeugleiste auf **Testlauf**. Dein Flow wird zuerst gespeichert.
2. Fülle aus, was der Trigger braucht. Bei einem Slash-Command mit Unterbefehlen wählst du den **Unterbefehl**. Bei einem Kontextmenü-Befehl wählst du den **Ziel-Benutzer** oder die **Ziel-Nachrichten-ID** und den **Ziel-Kanal**. Bei einem Trigger mit Optionen oder Parametern füllst du diese aus.
3. Öffne bei Bedarf **Erweiterte Optionen (optional)** und wähle, als wer er läuft (**Ausführen als**), den **Kanal**, den **Nachrichteninhalt** oder, bei Autocomplete, das Feld **Eingegebener Wert**.
4. Klicke auf **Test starten**.

Das Ergebnis öffnet sich im selben Fenster mit dem Banner "Simuliert: Es wurden keine echten Aktionen ausgeführt.", eventuellen **Warnungen** und dem vollständigen Schritt-Trace. Klicke auf **Erneut ausführen**, um andere Werte auszuprobieren. Testläufe erscheinen auch in der Ausführungsliste mit einem Kolben-Symbol.

![Der Testlauf-Dialog nach einer Ausführung des Befehls /warn, mit dem lila Banner "Simuliert" und jedem Schritt als Erfolgreich markiert](@site/docs/assets/custom-commands/en/test-run.png)

Ein paar Dinge, die du wissen solltest:

- **Erst Fehler beheben.** Ein Flow mit Validierungsfehlern lässt sich nicht testen. Du siehst dann "Behebe die Validierungsfehler des Flows, bevor du ihn testest".
- **Testläufe halten bei Wartepunkten an.** Wartet dein Flow auf einen Button-Klick oder eine Bestätigung, hält der Testlauf dort an und geht die Zweige danach nicht durch.
- **Warnungen weisen auf echte Probleme hin.** "Ein in einer Nachricht verwendeter Wert fehlte" bedeutet zum Beispiel, dass eine echte Ausführung diesen Teil leer senden würde.
- **Testläufe zählen nicht** für Cooldowns oder das Limit, wie oft Flows starten können.

### Wenn ein Testlauf nicht starten kann {#test-run-errors}

| Meldung                                                         | Lösung                                                                                          |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| "Behebe die Validierungsfehler des Flows, bevor du ihn testest" | Öffne den Tab **Probleme** und behebe die blockierenden Probleme.                               |
| "Speichere den Flow, bevor du ihn testest."                     | Speichere den Flow einmal und teste dann.                                                       |
| "Bot offline"                                                   | Starte deinen Bot und versuche es erneut.                                                       |
| "Testläufe sind auf dieser Bot-Version noch nicht verfügbar."   | Starte deinen Bot neu, damit er die neueste Version installiert.                                |
| "Unterbefehl zum Testen auswählen"                              | Wähle den **Unterbefehl** aus, der laufen soll.                                                 |
| "Ziel zum Testen auswählen"                                     | Wähle bei einem Kontextmenü-Befehl den Benutzer oder die Nachricht, auf die er angewendet wird. |

### Warnungen beim Testlauf {#test-run-warnings}

Warnungen zeigen Dinge, die eine echte Ausführung anders machen würde, als du es gebaut hast:

| Warnung                                                                | Was sie bedeutet                                                                                                                              |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| "Ein in einer Nachricht verwendeter Wert fehlte"                       | Eine Nachricht nutzt einen Wert, der an dieser Stelle nicht verfügbar war, also wäre dieser Teil leer.                                        |
| "Ein simulierter Wert fehlt"                                           | Der Test konnte etwas nicht ausfüllen, das eine echte Ausführung liefert. Meist gibt es nichts zu beheben.                                    |
| "Einige Komponenten wurden aus einer Nachricht entfernt"               | Manche Buttons oder Menüs konnten in dieser Art von Nachricht nicht genutzt werden und wurden nicht gesendet.                                 |
| "Eine Nachricht hatte zu viele Komponentenzeilen"                      | Discord begrenzt die Zeilen mit Buttons und Menüs pro Nachricht, deshalb wurden die überzähligen Zeilen entfernt.                             |
| "Eine Components-V2-Nachricht wurde als klassische Nachricht gesendet" | Ein Schritt hat Text oder Embeds hinzugefügt, was Discord bei diesem Layout nicht erlaubt. Container, Abschnitte und Trenner gingen verloren. |
| "Nachrichtentext gekürzt"                                              | Der Text war länger, als Discord erlaubt, und wurde abgeschnitten.                                                                            |
| "Embed-Fußzeile entfernt"                                              | Dein Tarif enthält keine Embed-Fußzeilen, deshalb wurde die Fußzeile weggelassen.                                                             |
| "Globale Parameter waren nicht verfügbar"                              | Platzhalter für Bot- und Serverdetails blieben in diesem Test so stehen, wie sie geschrieben waren.                                           |

## Wie lange Ausführungen gespeichert bleiben {#retention}

Der Ausführungsverlauf wird nur für eine begrenzte Zeit aufbewahrt. Ältere Ausführungen werden automatisch entfernt, und auf einem sehr aktiven Server werden die ältesten früher entfernt, um Platz für neue zu schaffen. Wenn du einem Fehler auf den Grund gehen willst, schau dir den Verlauf bald nach dem Vorfall an.
