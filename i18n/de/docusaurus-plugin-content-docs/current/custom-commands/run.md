---
sidebar_position: 1
title: "Betrieb"
description: "Was passiert, sobald deine Flows live sind, wie du prüfst, dass sie funktionieren, und wo du dir ihre gespeicherten Daten und ihren Ausführungsverlauf ansiehst."
---

# Betrieb

Sobald du einen Flow von **Entwurf** auf **Aktiv** stellst und speicherst, wartet dein Bot auf seinen Trigger. Ab dann führt dein Bot den Flow jedes Mal aus, wenn der Trigger auslöst, und trägt die Ausführung in den Verlauf ein. Wenn der Flow Daten speichert, bleiben diese Daten zwischen den Ausführungen auf deinem Bot.

Die Seiten in diesem Abschnitt behandeln die zwei Dinge, die du dir ansiehst, sobald Flows live sind: die Daten, die sie speichern, und das Protokoll dessen, was sie getan haben.

- [Datenspeicher](/de/docs/custom-commands/storage) erklärt Speicherfelder und wie du gespeicherte Daten ansiehst, änderst und aufräumst.
- [Ausführungsverlauf & Debugging](/de/docs/custom-commands/executions) erklärt die Liste der Ausführungen, Ausführungsstatus, Fehlercodes und Testläufe.
- [Fehlerbehebung](/de/docs/custom-commands/troubleshooting) hilft, wenn ein Flow nichts oder das Falsche tut.

## Nachdem du einen Flow aktiviert hast {#after-activating}

- **Slash-Commands erscheinen in Discord.** Dein Bot registriert den Befehl bei Discord. Wenn Discord ihn nicht sofort anzeigt, starte deine Discord-App neu.
- **Ereignis-Trigger beginnen zu lauschen.** Manche Trigger brauchen zusätzlichen Zugriff von Discord, den dein Bot nur beim Start anfordern kann. Wenn der Editor "Dieser Flow benötigt einen Bot-Neustart, bevor sein Auslöser reagieren kann" anzeigt, starte deinen Bot neu. Der Rest deines Bots funktioniert weiter, bis du das tust.
- **Speichern kann abgelehnt werden.** Ein Flow mit blockierenden Problemen lässt sich nicht aktivieren. Du siehst dann "Dieser Flow kann noch nicht aktiviert werden", und deine Änderungen werden nicht gespeichert, bis du die Probleme behebst oder zurück auf **Entwurf** stellst.

## Prüfen, ob es funktioniert {#check}

1. Bevor du live gehst, klicke im Editor auf **Testlauf**. Er führt den Flow gegen deinen echten Server aus, ohne etwas zu senden, zu ändern oder zu löschen, und zeigt jeden Schritt.
2. Aktiviere den Flow und nutze ihn einmal in Discord, so wie es deine Mitglieder tun würden.
3. Öffne die letzten Ausführungen des Flows im Tab **Flow** im Seitenpanel des Editors. Du willst **Erfolgreich** sehen. Alles andere sagt dir, warum: **Fehlgeschlagen** nennt den Schritt, **Übersprungen** nennt den Grund.

## Wo du nachsiehst {#where}

Beides findest du auf der Übersicht der eigenen Befehle unter **Daten & Verlauf**:

- **Server-Datenspeicher** enthält die Daten von Flows, die zu keinem Modul gehören. Jedes Modul hat seinen eigenen Tab **Speicher**.
- **Ausführungen** listet jede Ausführung auf deinem Server auf. Jedes Modul hat seinen eigenen Tab **Ausführungen**.

Gespeicherte Daten und der Ausführungsverlauf liegen auf deinem Bot. Solange dein Bot gestoppt ist, zeigen beide Seiten "Der Bot muss laufen".

## Tipps {#tips}

- **Nutze Erhöhen für Zähler.** Zwei Ausführungen im selben Moment können sich gegenseitig überschreiben, wenn ein Flow eine Zahl liest, etwas dazurechnet und sie wieder speichert. **Gespeicherte Zahl erhöhen** erledigt das in einem sicheren Schritt.
- **Merk dir die Ausführungsnummer.** Jede Ausführung hat eine Nummer wie `#21031`. So kannst du jemanden am schnellsten auf genau diese Ausführung hinweisen.
- **Testläufe zeigen Werte, echte Ausführungen nicht.** Nur Testläufe behalten die Ein- und Ausgaben jedes Schritts. Um zu sehen, was ein Schritt bekommen hat, starte einen Test mit denselben Werten.
- **Bearbeite keinen Flow, während Leute mittendrin sind.** Wenn ein Flow darauf wartet, dass jemand einen Button klickt, bricht das Speichern von Änderungen an diesem Flow die wartende Ausführung ab. Sie wird als **Unterbrochen** angezeigt.
- **Achte auf die Aktivitäts-Chips.** Deine aktivsten Flows sind mit **Hohe Aktivität** oder **Sehr hohe Aktivität** markiert. Meistens liegt das an einem Trigger, der bei jeder Nachricht auslöst, und oft hilft ein Kanalfilter.
- **Leeren ist endgültig.** **Feld leeren** löscht jeden Eintrag in einem Feld und lässt sich nicht rückgängig machen.
