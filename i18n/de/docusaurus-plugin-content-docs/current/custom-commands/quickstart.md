---
sidebar_position: 2
title: "Deinen ersten Flow bauen"
description: "Ein kurzes Tutorial, das dich von einer Vorlage zu einem funktionierenden /remind-Slash-Command in Discord führt und dir zeigt, wo du siehst, dass er gelaufen ist."
---

# Deinen ersten Flow bauen {#quickstart}

:::caution Diese Dokumentation ändert sich während der Beta
Custom Commands V3 ist in einer aktiven Beta, und wir ändern unterwegs noch vieles. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation. Bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

In diesem Tutorial richtest du aus einer Vorlage einen `/remind`-Slash-Command ein. Mitglieder führen `/remind` aus, geben an, in wie vielen Minuten und woran sie erinnert werden wollen, und dein Bot schickt ihnen eine DM, wenn die Zeit um ist. Das dauert etwa zehn Minuten und deckt alles ab, was du später für größere Flows brauchst: einen Slash-Command mit Optionen, Schritte, die Werte weitergeben, eine Nachricht mit einem Wert darin, zwei Flows, die zusammenarbeiten, einen Testlauf, das Einschalten von Flows und den Blick in den Ausführungsverlauf.

Bevor du loslegst, stelle sicher, dass:

- **Custom Commands V3 für deinen Server eingeschaltet ist.** Siehe [Zugang bekommen](/de/docs/custom-commands/intro#access).
- **Dein Bot online ist.** Flows laufen auf deinem Bot, und der Editor braucht ihn, um Kanäle, Rollen und den Ausführungsverlauf zu laden.
- **Dein Bot keinen anderen `/remind`-Befehl hat**, zum Beispiel aus einem V2-Custom-Command. Discord erlaubt jeden Befehlsnamen nur einmal pro Bot. Wenn der Name schon vergeben ist, ändere in Schritt 2 die Einstellung **Befehlsname**.

## 1. Die Flows aus der Vorlage erstellen {#create}

1. Öffne **Eigene Befehle V3** im Dashboard deines Servers.
2. Klicke auf **Neuen eigenen Flow erstellen**.
3. Wähle unter **Mit einer Vorlage starten** die Vorlage **/remind-Befehl**.
4. Gib unter **Flow-Name** einen Namen ein, zum Beispiel "Remind command". Wähle eine **Flow-Farbe**, wenn du magst. Sie ändert nur, wie der Flow im Dashboard aussieht.
5. Klicke auf **Neuen Flow erstellen**.

![Der Dialog "Create new custom command flow" mit ausgewählter Vorlage /remind command und "Remind command" als Flow-Name](@site/docs/assets/custom-commands/en/ccv3-template-gallery.png)

Diese Vorlage erstellt **zwei** Flows, und der Editor öffnet den ersten davon:

- **Remind command** (der Name, den du eingegeben hast) ist der Slash-Command. Er rechnet aus, wann die Erinnerung fällig ist, und plant sie ein.
- **Erinnerung zustellen (geplant)** sendet die DM, wenn es so weit ist.

Beide starten als **Entwurf**, in Discord passiert also noch nichts. Du findest beide auf der Übersicht.

## 2. Den Trigger ansehen {#trigger}

Das Diagramm beginnt mit dem Trigger, dem Kasten, der festlegt, wann der Flow läuft. Klicke darauf, um seine **Trigger-Einstellungen** zu öffnen:

| Einstellung      | Wert in dieser Vorlage                                             | Was sie bewirkt                                                              |
| ---------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **Befehlsname**  | `remind`                                                           | Der Name, den Mitglieder nach dem `/` eintippen.                             |
| **Beschreibung** | "DM me a reminder after the given number of minutes"               | Wird in Discord unter dem Befehl angezeigt.                                  |
| **Optionen**     | `minutes` (**Ganze Zahl**, Pflicht) und `text` (**Text**, Pflicht) | Die Werte, die Mitglieder ausfüllen, wenn sie den Befehl ausführen.          |
| **Cooldown**     | An, pro **User**                                                   | Verhindert, dass ein Mitglied den Befehl viele Male hintereinander ausführt. |

Über den Optionen zeigt eine Live-Vorschau den Befehl so, wie Discord ihn darstellt. Du kannst alles so lassen, wie es ist. Slash-Commands brauchen keinen privilegierten Intent, im Discord Developer Portal musst du also nichts einschalten.

## 3. Den Schritten folgen {#steps}

Unter dem Trigger siehst du sieben Schritte. Klicke auf einen, um seine Eingaben im Tab **Schritt** des Panels neben dem Diagramm zu sehen. Zusammen machen sie Folgendes:

1. **Zuordnung: Wert lesen**, **Text in ganze Zahl umwandeln** und **Dauer aus Teilen** machen aus der Option `minutes` eine Dauer.
2. **Aktuelles Datum/Uhrzeit** und **Zu Datum hinzufügen** rechnen den Zeitpunkt aus, an dem die Erinnerung fällig ist.
3. **Flow-Ausführung planen** plant zu diesem Zeitpunkt eine Ausführung von **Erinnerung zustellen (geplant)** ein. Unter **Argumente** gibt der Schritt weiter, wer den Befehl ausgeführt hat, und die Option `text`.
4. **Auf Interaktion antworten** antwortet dem Mitglied sofort, damit Discord weiß, dass der Befehl funktioniert hat.

Jeder Schritt nutzt Werte, die der Trigger oder ein früherer Schritt geliefert hat. **Zu Datum hinzufügen** zum Beispiel nimmt sein **Datum** aus **Aktuelles Datum/Uhrzeit** und seine **Dauer** aus **Dauer aus Teilen**. Das ist die Grundidee jedes Flows. Mehr dazu liest du in [Werte, Variablen & Nachrichten](/de/docs/custom-commands/variables).

Öffne jetzt **Erinnerung zustellen (geplant)** über die Übersicht. Sein Trigger ist **Geplante Ausführung**, mit den zwei Parametern `user` und `text`, die der erste Flow ausfüllt. Er sucht das Mitglied mit **Mitglied nach ID abrufen**, baut die DM mit **Nachricht erstellen** und sendet sie mit **DM an Mitglied senden**.

## 4. Die Antwort ändern {#message}

Die Antwort sagt nur "Reminder set!". Lass sie jetzt wiederholen, woran das Mitglied erinnert werden will.

1. Geh zurück zu **Remind command** und klicke auf den Schritt **Auf Interaktion antworten**.
2. Klicke unter **Inhalt** auf die Nachrichtenvorschau. Der Nachrichten-Editor öffnet sich.
3. Ändere den Text zu "Alles klar, ich erinnere dich an " und lass den Cursor am Ende stehen.
4. Klicke auf den Blitz-Button mit dem Tooltip **Wert einfügen**. Eine Auswahl mit den Werten öffnet sich, die du an dieser Stelle nutzen kannst.
5. Wähle die Option `text`. Du findest sie unter **Auslöser** oder indem du "text" ins Suchfeld eintippst.

![Die Werteauswahl, geöffnet aus dem Nachrichten-Editor des Schritts Reply to interaction, mit hervorgehobener Option "text" des Triggers](@site/docs/assets/custom-commands/en/ccv3-variable-picker.png)

Der Wert erscheint als hervorgehobener Platzhalter `{var:...}`. Lass ihn genau so, wie er ist. Dein Bot ersetzt ihn bei jeder Ausführung des Befehls durch das, was das Mitglied eingetippt hat. Schließ den Editor, wenn du mit dem Text zufrieden bist.

Die Antwort der Vorlage ist nur für das Mitglied sichtbar, das den Befehl ausgeführt hat, sie müllt also den Kanal nicht zu.

## 5. Testen, ohne Discord anzufassen {#test}

1. Klicke in der Leiste unten auf **Speichern**. Der Flow wird als Entwurf gespeichert. Ein Testlauf funktioniert nur mit einem gespeicherten Flow.
2. Klicke in der Werkzeugleiste auf **Testlauf**.
3. Fülle `minutes` und `text` aus. Unter **Erweiterte Optionen (optional)** kannst du außerdem wählen, als wer die Ausführung läuft (**Ausführen als**), und den **Kanal**.
4. Klicke auf **Test starten**.

Das Ergebnis zeigt jeden Schritt und was er getan hätte, unter dem Hinweis "Simuliert: Es wurden keine echten Aktionen ausgeführt." Es wird nichts gesendet und nichts eingeplant. Wenn ein Schritt ein Problem zeigt, behebe es und klicke auf **Erneut ausführen**.

## 6. Beide Flows einschalten {#activate}

Beide Flows müssen eingeschaltet sein. Ist nur der Befehl an, können Mitglieder zwar Erinnerungen einplanen, aber sie werden nie zugestellt.

1. Stell in **Remind command** den Schalter in der Werkzeugleiste von **Entwurf** auf **Aktiv** und klicke auf **Speichern**.
2. Geh zurück zur Übersicht. Öffne das Menü auf der Karte **Erinnerung zustellen (geplant)** und klicke auf **Flow aktivieren**.

Wenn du einen aktiven Slash-Command-Flow speicherst, registriert dein Bot den Befehl selbstständig bei Discord. Wenn die Speicherleiste "Gespeichert, aber dein Bot konnte die Änderungen noch nicht übernehmen" anzeigt, klicke auf **Bot erneut neu laden**.

:::note Der Flow lässt sich nicht einschalten?
Ein Flow kann nur aktiv sein, wenn er keine blockierenden Probleme hat. Fehlt etwas, siehst du "Dieser Flow kann noch nicht aktiviert werden" mit einer Liste dessen, was du beheben musst, und deine Änderungen bleiben ungespeichert, bis du es behebst oder zurück auf **Entwurf** stellst. Siehe [Validierungsfehler lesen](/de/docs/custom-commands/flows#issues).
:::

## 7. In Discord ausprobieren {#try}

Tippe auf deinem Server `/remind` ein, setze `minutes` auf 1 und `text` auf irgendetwas. Dein Bot antwortet mit deiner neuen Antwort. Etwa eine Minute später kommt die Erinnerung als DM an.

Wenn etwas nicht funktioniert:

| Was du siehst                                  | Was du tun kannst                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/remind` taucht in Discord nicht auf          | Prüfe, ob der Flow **Aktiv** ist. Prüfe dann die Problemliste deines Bots auf "Ein Custom-Commands-Befehl kollidiert mit einem vorhandenen Befehl" und benenne den Befehl bei Bedarf um. Siehe auch [Slash-Befehle werden nicht angezeigt](/de/docs/custom-bot/troubleshooting#missing-commands). |
| Discord sagt "The application did not respond" | Öffne den Ausführungsverlauf (siehe unten). Die Ausführung ist fehlgeschlagen oder hat vor dem Antwort-Schritt zu lange gedauert.                                                                                                                                                                 |
| Die Antwort kommt, die DM nicht                | Prüfe, ob **Erinnerung zustellen (geplant)** **Aktiv** ist. Wenn ja, nimmt das Mitglied wahrscheinlich keine DMs von Servermitgliedern an. Der Ausführungsverlauf zeigt die fehlgeschlagene Ausführung.                                                                                           |

## 8. Im Ausführungsverlauf nachsehen {#history}

Öffne im Editor den Tab **Flow** des Panels. Unter **Letzte Ausführungen** siehst du deine `/remind`-Ausführung mit ihrem Status. Klicke auf **Alle Ausführungen ansehen**, um **Ausführungen** zu öffnen, die Liste aller Ausführungen auf deinem Server.

![Die Seite Executions mit einer Ausführung von "Remind command" und, eine Minute später, einer Ausführung von "Deliver reminder (scheduled)", beide erfolgreich](@site/docs/assets/custom-commands/en/ccv3-executions-list.png)

Du siehst zwei Ausführungen: eine für **Remind command** und, eine Minute später, eine für **Erinnerung zustellen (geplant)**. Eine eingeplante Ausführung ist eine eigene Ausführung, deshalb taucht jeder Flow einzeln auf. Ist eine Ausführung fehlgeschlagen, zeigt sie **Fehlgeschlagen** mit der fehlgeschlagenen Aktion und dem Grund. Siehe [Ausführungsverlauf & Debugging](/de/docs/custom-commands/executions).

Eingeplante Erinnerungen überstehen Neustarts des Bots. Ist dein Bot offline, wenn eine fällig ist, wird sie gesendet, sobald dein Bot wieder da ist.

## Wie geht es weiter? {#next}

- Füge **Remind command** einen Schritt hinzu, zum Beispiel einen, der die Erinnerung zusätzlich in einem Kanal postet. Siehe [Flows & der Editor](/de/docs/custom-commands/flows).
- Füge dem Befehl eine Option oder einen Unterbefehl hinzu. Siehe [Trigger](/de/docs/custom-commands/triggers).
- Merk dir Dinge zwischen Ausführungen mit dem [Datenspeicher](/de/docs/custom-commands/storage).
