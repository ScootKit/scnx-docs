---
sidebar_position: 14
title: "Fehlerbehebung"
description: "Was du prüfen solltest, wenn ein Flow nichts tut, fehlschlägt oder sich anders verhält als erwartet, mit Antworten auf häufige Fragen."
---

# Fehlerbehebung

Wenn ein Flow nicht tut, was du erwartet hast, sagt dir der [Ausführungsverlauf](/de/docs/custom-commands/executions) meistens, warum. Gibt es überhaupt keine Ausführung, geh die Checkliste unten durch.

## Mein Flow hat nichts getan {#did-nothing}

Geh diese Punkte der Reihe nach durch. Die meisten Probleme löst einer der ersten fünf.

1. **Dein Bot ist online.** Flows laufen auf deinem Bot. Sieh in deinem [Bot-Status-Panel](https://scnx.app/glink?page=bot/manage) nach und starte den Bot, wenn er gestoppt ist.
2. **Der Flow ist aktiv.** Neue Flows starten als **Entwurf**, und Entwürfe laufen nie. Stell den Schalter im Editor von **Entwurf** auf **Aktiv** und speichere.
3. **Das Speichern ist nicht fehlgeschlagen.** Wenn du "Dieser Flow kann noch nicht aktiviert werden" siehst, wurden deine Änderungen nicht gespeichert. Behebe die aufgelisteten Probleme und speichere dann erneut. Der Tab **Probleme** im Seitenpanel zeigt jedes einzelne und springt zum betroffenen Schritt.
4. **Die eigenen Befehle sind nicht gestoppt.** Wenn die Übersicht "Custom-Commands sind gestoppt" anzeigt, hat jemand den Notaus benutzt. Klicke auf **Custom-Commands wieder einschalten**.
5. **Das Modul oder die App ist eingeschaltet.** Flows in einem deaktivierten Modul laufen nicht. Eine App, die noch eingerichtet werden muss, zeigt auf ihrem Tab **Übersicht** "Fast geschafft". Klicke auf **Einrichtung abschließen**.
6. **Es gibt eine Ausführung im Verlauf.** Öffne die [Ausführungen](/de/docs/custom-commands/executions) des Flows:
   - **Fehlgeschlagen:** Öffne die Ausführung. Sie nennt den Schritt und den Grund. Siehe [häufige Fehler](/de/docs/custom-commands/executions#errors).
   - **Übersprungen:** Die Ausführung sagt dir, warum, zum Beispiel wegen eines Cooldowns, zu vieler Ausführungen in kurzer Zeit oder deines [Aktivitätsbudgets](/de/docs/custom-commands/limits-and-safety#activity-budget).
   - **Erfolgreich**, aber nichts zu sehen: Der Flow hat vielleicht eine Verzweigung genommen, mit der du nicht gerechnet hast. Mach einen [Testlauf](/de/docs/custom-commands/executions#test-runs) mit denselben Werten und verfolge die Schritte.
7. **Überhaupt nichts im Verlauf?** Dann hat der Trigger nie ausgelöst. Geh den Rest dieser Liste durch.
8. **Dein Bot hat den Zugriff, den der Trigger braucht.** Wenn der Editor "Dieser Flow benötigt einen Bot-Neustart, bevor sein Auslöser reagieren kann" anzeigt, starte deinen Bot neu. Wenn ein Trigger **Benötigt privilegierten Zugriff** anzeigt, schalte diesen Zugriff für deinen Bot im Discord Developer Portal ein und starte ihn dann neu.
9. **Den Trigger gibt es auf Discord noch.** Ein Trigger mit der Markierung **Nicht verfügbar** kann nie auslösen, weil Discord dieses Ereignis nicht mehr sendet. Wähle einen anderen Trigger.
10. **Die Filter des Triggers passen.** Viele Trigger lassen sich einschränken, zum Beispiel auf bestimmte Kanäle oder auf Nachrichten mit bestimmtem Text, und manche ignorieren Bots. Vergleiche die Trigger-Einstellungen mit dem, was du in Discord tatsächlich getan hast.
11. **Dein Bot meldet keine Probleme.** Öffne dein [Bot-Status-Panel](https://scnx.app/glink?page=bot/manage) und sieh dir die Probleme an. Probleme mit Flows tauchen dort auf, zum Beispiel ein Flow mit Fehlern, ein Befehlsname, der schon vergeben ist, oder ein Bot, der für eine App zu alt ist.

## Symptome, Ursachen und Lösungen {#symptoms}

| Symptom                                                                                            | Wahrscheinliche Ursache                                                                                                                          | Lösung                                                                                                     |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Überhaupt keine Ausführung im Verlauf                                                              | Der Flow ist ein **Entwurf**, sein Modul ist ausgeschaltet oder die eigenen Befehle sind gestoppt.                                               | Aktiviere den Flow, schalte das Modul ein oder klicke auf **Custom-Commands wieder einschalten**.          |
| Keine Ausführung, obwohl der Flow **Aktiv** ist                                                    | Die Filter des Triggers passen nicht, oder er braucht einen Bot-Neustart für zusätzlichen Discord-Zugriff.                                       | Prüfe die Trigger-Einstellungen. Starte deinen Bot neu, wenn der Editor danach fragt.                      |
| Slash-Command fehlt in Discord                                                                     | Ein anderer Befehl hat schon diesen Namen, oder dein Server hat Discords Befehlslimit erreicht.                                                  | Benenne den Befehl um oder schalte den anderen aus. Schalte Flows aus, die du nicht brauchst.              |
| "The application did not respond"                                                                  | Der Flow hat zu spät geantwortet, oder ein Pfad durch den Flow antwortet nie.                                                                    | Antworte zuerst oder nutze zuerst **Interaktionsantwort aufschieben**. Gib jeder Verzweigung eine Antwort. |
| Ausführung **Fehlgeschlagen** mit `MISSING_PERMISSIONS`                                            | Deinem Bot fehlt eine Berechtigung, oder seine Rolle steht unter der Rolle, die er verwaltet.                                                    | Gib die Berechtigung. Schieb die Rolle deines Bots nach oben.                                              |
| Ausführung **Fehlgeschlagen** mit `NOT_FOUND`                                                      | Ein Kanal, eine Rolle oder eine Nachricht, die der Flow nutzt, wurde gelöscht.                                                                   | Wähle sie im Schritt oder in den Einstellungen des Moduls neu aus.                                         |
| Ausführung **Fehlgeschlagen** mit `STORAGE_ERROR`                                                  | Der Datenspeicher deines Servers ist voll, oder ein verschlüsselter Wert lässt sich nicht lesen.                                                 | Schaffe Platz auf der [Datenspeicher-Seite](/de/docs/custom-commands/storage#usage).                       |
| Ausführung **Fehlgeschlagen** oder **Übersprungen** wegen eines Limits                             | Dein Server hat sein Aktivitätsbudget erreicht, oder eine Schleife ist für eine Ausführung zu groß.                                              | Warte, bis sich das Budget erholt. Schränke vielbeschäftigte Trigger ein. Teile große Schleifen auf.       |
| Ausführung **Übersprungen** mit "Abklingzeit aktiv"                                                | Der Cooldown des Triggers läuft für diesen User, Kanal oder Server noch.                                                                         | Erwartet. Verkürze den Cooldown in den Trigger-Einstellungen, wenn er zu lang ist.                         |
| Ausführung **Übersprungen** mit "Flow deaktiviert"                                                 | Der Flow stand auf **Entwurf**, als der Trigger ausgelöst hat.                                                                                   | Aktiviere den Flow.                                                                                        |
| Ausführung **Unterbrochen**                                                                        | Dein Bot wurde mitten in der Ausführung neu gestartet, oder du hast den Flow gespeichert, während eine Ausführung auf einen Button gewartet hat. | Führe ihn erneut aus. Bei wartenden Ausführungen sende die Nachricht mit dem Button noch einmal.           |
| Ein Button tut nichts                                                                              | Der Flow, den er startet, wurde gelöscht, hat keinen passenden Trigger oder ist ein **Entwurf**.                                                 | Lass den Button auf einen aktiven Flow mit Button-Trigger zeigen.                                          |
| Flow hat funktioniert und nach einer Änderung am Datenspeicher oder an den Einstellungen aufgehört | Die Änderung hat den Flow ungültig gemacht, deshalb registriert dein Bot ihn nicht mehr.                                                         | Öffne den Flow und behebe, was der Tab **Probleme** anzeigt.                                               |
| Eine App hat nach einem Update aufgehört                                                           | Die neue Version braucht eine Einstellung, die du noch nicht ausgefüllt hast, deshalb wurde die App ausgeschaltet.                               | Öffne die App und klicke auf **Einrichtung abschließen**.                                                  |
| Die Datenspeicher- oder Ausführungsseite sagt "Der Bot muss laufen"                                | Dein Bot ist gestoppt.                                                                                                                           | Starte deinen Bot.                                                                                         |
| Gespeicherte Daten fehlen in einer neuen Modulkopie                                                | **Duplizieren** kopiert die Felder, nicht die Daten.                                                                                             | Erwartet. Gib die Daten erneut ein oder lass die Flows sie füllen.                                         |

## Häufige Fragen {#faq}

<details>
  <summary>Mein Slash-Command taucht in Discord nicht auf</summary>

- Stell sicher, dass der Flow **Aktiv** und gespeichert ist.
- Discord erlaubt jeden Befehlsnamen nur einmal. Wenn dein Bot schon einen Befehl mit diesem Namen hat, aus einem V2-Custom-Command oder einem Modul, wird der Befehl deines Flows nicht hinzugefügt. Dein Bot meldet dann "Ein Custom-Commands-Befehl kollidiert mit einem vorhandenen Befehl". Benenne den Befehl im Trigger um oder schalte den anderen aus.
- Discord begrenzt, wie viele Befehle ein Server haben kann. Wenn du das Limit erreichst, werden manche Befehle nicht hinzugefügt, und dein Bot meldet "Dein Server hat Discords Befehlslimit erreicht". Schalte Flows aus, die du nicht brauchst.
- Starte deine Discord-App neu. Manchmal dauert es einen Moment, bis neue Befehle angezeigt werden. Siehe auch [Slash-Befehle werden nicht angezeigt](/de/docs/custom-bot/troubleshooting#missing-commands).

</details>

<details>
  <summary>Discord sagt "The application did not respond" oder "This interaction failed"</summary>

- Dein Flow muss innerhalb weniger Sekunden auf einen Befehl, einen Button oder ein Formular antworten. Wenn er vorher langsame Arbeit erledigt, füge vor den langsamen Schritten **Interaktionsantwort aufschieben** ein, oder antworte zuerst und erledige die Arbeit danach.
- Jeder Pfad durch den Flow braucht eine Antwort. Eine leere "Andernfalls"-Verzweigung ist die übliche Ursache. Der Editor warnt dich davor: "Dieser Flow kann enden, ohne die Interaktion zu beantworten, die ihn gestartet hat."
- Wenn die Ausführung fehlgeschlagen ist, sagt dir der Ausführungsverlauf, welcher Schritt gescheitert ist. `INTERACTION_EXPIRED` bedeutet, dass der Flow zu langsam war.

</details>

<details>
  <summary>Ein Button oder Auswahlmenü tut nichts</summary>

- Öffne die Nachricht oder die Moduleinstellung, die den Button enthält, und prüfe, welchen Flow er startet. Wenn dieser Flow gelöscht wurde, warnt dich der Tab **Probleme**, dass die Komponente auf einen Flow verweist, den es nicht mehr gibt.
- Der Flow, den der Button startet, braucht einen passenden Trigger, zum Beispiel **Button angeklickt** für einen Button. Prüfe, ob der Flow **Aktiv** ist.
- Buttons, die innerhalb eines laufenden Flows auf eine Antwort warten, funktionieren nicht mehr, nachdem du Änderungen an diesem Flow gespeichert hast. Die wartende Ausführung wird als **Unterbrochen** angezeigt. Sende die Nachricht noch einmal.

</details>

<details>
  <summary>Der Testlauf funktioniert, der echte Flow aber nicht</summary>

- Testläufe ignorieren Cooldowns und das Limit dafür, wie oft Flows starten können. Sieh dir die echte Ausführung im Verlauf an und prüfe, ob sie **Übersprungen** wurde.
- Testläufe senden nichts, deshalb können sie nicht an Discords echte Limits oder an fehlende Berechtigungen für die tatsächliche Nachricht stoßen. Prüfe die echte Ausführung auf `MISSING_PERMISSIONS` oder `DISCORD_API_ERROR`.
- Stell sicher, dass der Flow **Aktiv** ist. Du kannst einen Entwurf testen, aber nur aktive Flows laufen in Discord.

</details>

<details>
  <summary>Der Schritt ist mit MISSING_PERMISSIONS fehlgeschlagen</summary>

- Gib deinem Bot die Berechtigung, die im Fehler genannt wird, in diesem Kanal oder auf dem Server.
- Um eine Rolle zu vergeben oder zu entfernen, muss die eigene Rolle deines Bots in deinen Servereinstellungen über dieser Rolle stehen.
- Siehe [Was dein Bot von Discord braucht](/de/docs/custom-commands/limits-and-safety#bot-permissions).

</details>

<details>
  <summary>Mein Flow funktioniert nicht mehr, seit ich ein Speicherfeld oder eine Moduleinstellung geändert habe</summary>

- Wenn du den Typ oder den Geltungsbereich eines Felds änderst oder es löschst, werden die Flows ungültig, die es nutzen, und ungültige Flows laufen nicht. Öffne jeden Flow, sieh im Tab **Probleme** nach und korrigiere die Schritte.
- Dein Bot meldet "Ein Custom-Commands-Flow hat Fehler und wurde nicht registriert" und verlinkt die betroffenen Flows.
- Siehe [Ein Feld ändern oder löschen](/de/docs/custom-commands/storage#change-field).

</details>

<details>
  <summary>"Dein Bot braucht ein Update" oder "Dein Bot ist älter, als eine Custom-Commands-App benötigt"</summary>

- Starte deinen Bot neu. Beim Start installiert er die neueste Version.
- Wenn die Meldung nach einem Neustart wieder auftaucht, nutzt die App etwas, das wir noch nicht veröffentlicht haben. Gib dem Entwickler der App Bescheid.

</details>

<details>
  <summary>Die Datenspeicher- oder Ausführungsseite sagt "Der Bot muss laufen"</summary>

- Gespeicherte Daten und der Ausführungsverlauf liegen auf deinem Bot. Starte deinen Bot und lade die Seite dann neu.

</details>

<details>
  <summary>Schritte schlagen mit LIMIT_EXCEEDED fehl, oder Ausführungen werden übersprungen</summary>

- Dein Server hat vielleicht sein Aktivitätsbudget erreicht. Sieh dir die Karte **Aktivitätsbudget** auf der Übersicht an. Aktionen laufen von selbst weiter, sobald sich das Budget erholt, meistens innerhalb einer Stunde.
- Eine Schleife oder eine Kette aufgerufener Flows ist vielleicht zu groß für eine Ausführung. Teile die Arbeit auf kleinere Ausführungen auf.
- Siehe [Tarife, Limits & Sicherheit](/de/docs/custom-commands/limits-and-safety).

</details>

<details>
  <summary>Ich kann meinen Flow wegen einer Sicherheitswarnung nicht aktivieren</summary>

- Flows, die über deinen ganzen Server hinweg DMs senden, bannen, kicken oder löschen oder deine Mitgliederliste an einen externen Dienst senden, lassen sich nicht aktivieren. Beschränke den Flow auf die Mitglieder, Kanäle oder Rollen, die du wirklich meinst, zum Beispiel mit einer Liste, die du selbst aufbaust.
- Siehe [Schutzmaßnahmen](/de/docs/custom-commands/limits-and-safety#protections).

</details>

<details>
  <summary>Wo sind meine V2-Befehle hin?</summary>

- Deine V2-Befehle sind noch da und laufen weiter. Klicke auf der V3-Übersicht unter **Daten & Verlauf** auf **Bisherige V2-Befehle**. Siehe [Umstieg von V2](/de/docs/custom-commands/migrating-from-v2).

</details>

## Hilfe bekommen {#help}

Für eigene Befehle bieten wir noch keinen Support an. Das gilt für die Einrichtung, das Bauen von Flows und das Debuggen, egal ob ein Flow aus einer App kommt oder du ihn selbst gebaut hast.

- **Bei einer App aus dem Marktplatz** wende dich an ihren Entwickler. Den Support-Link findest du im Tab **Hilfe** der App.
- **Für Feedback, Bug-Reports und Fragen** nutze die Beta-Kanäle auf unserem Discord. Bring bei einem Bug die Schritte mit, mit denen er sich auslösen lässt, was du erwartet hast, was stattdessen passiert ist, und die Ausführungsnummer aus dem Verlauf.
- **Ein KI-Assistent kann dir beim Debuggen helfen.** Mit dem [MCP Connector](/de/docs/custom-commands/mcp) kannst du Claude oder ChatGPT fragen, warum eine Ausführung fehlgeschlagen ist. Er liest dafür deinen Ausführungsverlauf und deine Flows.
