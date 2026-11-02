---
sidebar_position: 4
title: "Trigger"
description: "Die Arten von Triggern, die einen Flow in Custom Commands V3 starten, wie du den richtigen wählst, welche Einstellungen jede Art hat und welche Werte sie an deine Schritte übergibt."
---

# Trigger {#triggers}

:::caution Diese Dokumentation ändert sich während der Beta
Custom Commands V3 ist in einer aktiven Beta, und wir ändern unterwegs noch vieles. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation. Bis dahin können einige Details auf dieser Seite veraltet sein.
:::

Der Trigger legt fest, wann ein Flow läuft. Jeder Flow hat genau einen Trigger, ganz oben im Diagramm. Wenn er auslöst, führt dein Bot die Schritte des Flows von oben nach unten aus.

Ein Trigger übergibt außerdem Werte an deine Schritte. Ein Trigger **Mitglied getreten** liefert dir das neue **Mitglied**, ein Trigger **Nachricht erstellt** liefert dir die **Nachricht**, ihren **Autor** und ihren **Kanal**, und ein Trigger **Slash-Befehl** liefert dir die **Interaktion** plus jede Option, die die Person ausgefüllt hat. Diese Werte verwendest du in deinen Schritten, siehe [Werte, Variablen & Nachrichten](/de/docs/custom-commands/variables).

Diese Seite hilft dir, einen Trigger auszuwählen, und erklärt die Einstellungen jeder Art. Jeder einzelne Trigger, mit seinen Einstellungen und den Werten, die er liefert, ist in den unten verlinkten Referenzseiten aufgeführt.

## Welchen Trigger brauche ich? {#choose}

| Der Flow soll laufen, wenn...                                     | Nutze                                                  |
| ----------------------------------------------------------------- | ------------------------------------------------------ |
| ein Mitglied einen Befehl eingibt                                 | **Slash-Befehl**                                       |
| ein Mitglied mit Rechtsklick auf einen Benutzer oder eine Nachricht deinen Befehl wählt | **Benutzer-Kontextmenü verwendet** oder **Nachrichts-Kontextmenü verwendet** |
| ein Mitglied einen Button klickt oder etwas in einem Auswahlmenü wählt, das dein Bot gepostet hat | **Button angeklickt** oder einer der Auswahlmenü-Trigger |
| ein Mitglied ein Pop-up-Formular absendet                         | **Modal zeigen und auf Absenden warten** in dem Flow, der es anzeigt, oder **Modal eingereicht** |
| etwas auf deinem Server passiert, zum Beispiel ein Beitritt oder eine neue Nachricht | Einer der Trigger für Server-Ereignisse |
| zu festen Zeiten, zum Beispiel jeden Montag um 9:00               | **Zeitplan**                                           |
| zu einem Zeitpunkt, den ein Flow ausrechnet, zum Beispiel "in 10 Minuten" | **Geplante Ausführung**, von einem anderen Flow eingeplant |
| ein anderer Flow ihn als Baustein braucht                         | **Manueller Auslöser**                                 |
| mehrere Flows auf dieselbe Sache reagieren sollen, die du ankündigst | **Benutzerdefiniertes Event empfangen**             |

Zwei Faustregeln: Wenn eine Person ihn absichtlich startet, ist es ein Befehl, ein Button, ein Auswahlmenü oder ein Modal. Wenn es von selbst passieren soll, ist es ein Server-Ereignis oder ein Zeitplan.

## Einen Trigger wählen oder ändern {#pick}

1. Klicke in einem neuen Flow auf **Auslöser auswählen**.
2. Wähle eine Kategorie und dann den Trigger. Du kannst auch suchen.
3. Die Einstellungen des Triggers öffnen sich im Bereich unter **Trigger-Einstellungen**. Fülle die erforderlichen aus. Erforderliche Einstellungen, die leer sind, erscheinen im Tab **Probleme**.

![Die Trigger-Auswahl mit ausgewähltem "Dein Discord-Server" und hervorgehobenem "Mitglied getreten" mit dem Abzeichen "Benötigt privilegierten Zugriff: Server Members"](@site/docs/assets/custom-commands/en/ccv3-trigger-picker.png)

Um den Trigger eines bestehenden Flows auszutauschen, klicke auf **Auslöser ändern** und bestätige mit **Neuen Auslöser wählen**. Deine Schritte bleiben erhalten, aber jede Eingabe, die einen Wert des alten Triggers verwendet hat, verliert ihre Verbindung und zeigt **Verbindung verloren**. Wähle für jede davon einen neuen Wert.

Manche Trigger zeigen ein Abzeichen:

- **"Benötigt privilegierten Zugriff: Server Members"**, **"Presence"** oder **"Message Content"** - der Trigger braucht einen privilegierten Discord-Zugriff, den du für deinen Bot im Discord Developer Portal einschaltest. Wurde dein Bot ohne ihn gestartet, zeigt der Editor "Dieser Flow benötigt einen Bot-Neustart, bevor sein Auslöser reagieren kann", sobald der Flow eingeschaltet ist. Schalte den Intent ein und klicke auf **Bot jetzt neu starten**. Bis dahin funktioniert der Rest deines Bots weiter, nur dieser Flow bleibt aus.
- **"Nicht verfügbar"** - Discord sendet dieses Ereignis nicht mehr, ein Flow mit diesem Trigger würde also nie laufen. Wähle einen anderen.

## Befehle {#commands}

### Slash-Commands {#slash-commands}

**Slash-Befehl** läuft, wenn jemand deinen Befehl benutzt. Siehe die Referenz [Slash-Befehle](/de/docs/custom-commands/reference/triggers/bot-interactions/bot-interactions-slash-commands).

| Einstellung              | Was sie macht                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| **Befehlsname**          | Der Name nach dem `/`. Kleinbuchstaben, Zahlen, Binde- und Unterstriche, keine Leerzeichen.             |
| **Beschreibung**         | Wird in Discords Befehlsliste unter dem Befehl angezeigt.                                               |
| **Erforderliche Berechtigungen** | Nur Mitglieder mit diesen Discord-Berechtigungen sehen den Befehl. Admins können das pro Rolle oder Kanal weiterhin in Discords Servereinstellungen unter **Integrationen** ändern. |
| **In DMs erlauben**      | Standardmäßig aus. Schalte es ein, damit Leute den Befehl in einer DM mit deinem Bot benutzen können.   |
| **Altersbeschränkt**     | Zeigt den Befehl nur in altersbeschränkten Kanälen an.                                                  |
| **Optionen**             | Die Werte, die Leute ausfüllen, wenn sie den Befehl ausführen.                                          |

Klicke für jeden Wert, den du möchtest, auf **Option hinzufügen**. Jede Option hat:

| Feld                                    | Was es macht                                                                                     |
| --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Name** und **Beschreibung**           | Werden in Discord angezeigt. Es gelten dieselben Namensregeln wie für den Befehlsnamen.          |
| **Typ**                                 | Was Leute eingeben können: Text, eine ganze Zahl oder Dezimalzahl, Ja/Nein, einen Benutzer, ein Servermitglied, einen Kanal, eine Rolle, einen Benutzer oder eine Rolle, oder einen Dateianhang. |
| **Erforderlich**                        | Leute müssen sie ausfüllen. Discord braucht alle erforderlichen Optionen vor den optionalen, und der Editor warnt dich, wenn die Reihenfolge falsch ist. |
| **Auswahlmöglichkeiten**                | Eine feste Liste zum Auswählen, jeweils mit einem **Name der Auswahlmöglichkeit**, den Leute sehen, und einem **Wert der Auswahlmöglichkeit**, den dein Flow bekommt. |
| **Autovervollständigung**               | Dein Bot schlägt Werte vor, während Leute tippen. Lässt sich nicht mit Auswahlmöglichkeiten kombinieren. |
| **Minimaler Wert** / **Maximaler Wert** | Für Zahlen.                                                                                       |
| **Minimale Länge** / **Maximale Länge** | Für Text.                                                                                         |
| **Erlaubte Kanaltypen**                 | Für Kanal-Optionen, zum Beispiel nur Textkanäle.                                                 |

**Unterbefehl hinzufügen** und **Gruppe hinzufügen** machen aus dem Befehl einen Befehl mit Unterbefehlen, wie `/ticket open` und `/ticket close`. Eine Ebene enthält entweder Unterbefehle oder Optionen, nicht beides. Nutze den Schritt **Nach Unterbefehl verzweigen**, um pro Unterbefehl andere Schritte auszuführen. Der Editor bietet dir an, ihn für dich hinzuzufügen.

Eine Live-Vorschau über den Optionen zeigt den Befehl so, wie Discord ihn anzeigt.

**Was beim Speichern passiert.** Wenn ein aktiver Slash-Command-Flow gespeichert wird, registriert dein Bot den Befehl bei Discord. Zwei Dinge können das verhindern, und beide erscheinen in der Problemliste deines Bots:

- **"Ein Custom-Commands-Befehl kollidiert mit einem vorhandenen Befehl"** - ein anderer Befehl deines Bots, zum Beispiel ein V2-Custom-Command oder der Befehl eines eingebauten Moduls, hat diesen Namen schon. Benenne einen davon um. Wenn zwei V3-Flows denselben Namen verwenden, bekommt ihn nur einer von beiden.
- **"Dein Server hat Discords Befehlslimit erreicht"** - Discord begrenzt, wie viele Befehle ein Bot auf einem Server haben kann. Deaktiviere Flows, die du nicht brauchst.

### Autovervollständigung {#autocomplete}

Für eine Option mit eingeschalteter **Autovervollständigung** hast du zwei Möglichkeiten:

- **Vorschläge** direkt in der Option. Dein Bot antwortet von selbst mit dieser Liste. Kein Flow nötig.
- **Ein Flow** mit dem Trigger **Automatische Vervollständigung angefordert**. Lass **Vorschläge** leer und klicke in der Option auf **Autovervollständigungs-Flow erstellen**. Du bekommst einen neuen Entwurf mit dem Namen "Autovervollständigung:" plus dem Optionsnamen, der schon auf deinen Befehl und deine Option eingestellt ist, mit einem Schritt **Autocomplete-Antwort senden** zum Ausfüllen.

Die Autovervollständigung läuft bei jedem Tastendruck erneut, deshalb darf ein Autovervollständigungs-Flow nur Dinge nachschlagen. Schritte, die etwas verändern, werden dort abgelehnt.

### Kontextmenüs {#context-menus}

**Benutzer-Kontextmenü verwendet** und **Nachrichts-Kontextmenü verwendet** fügen unter **Apps** einen Befehl hinzu, wenn Leute mit Rechtsklick auf einen Benutzer oder eine Nachricht klicken. Beide haben dieselben Einstellungen **Befehlsname**, **Erforderliche Berechtigungen**, **In DMs erlauben** und **Altersbeschränkt** wie ein Slash-Command, aber keine Optionen. Der Flow bekommt die **Interaktion**, die den angeklickten Benutzer oder die angeklickte Nachricht enthält. Siehe die Referenz [Kontextmenüs](/de/docs/custom-commands/reference/triggers/bot-interactions/bot-interactions-context-menus).

## Buttons, Auswahlmenüs und Modals {#components}

**Button angeklickt**, **Auswahlmenü eingereicht** sowie die Trigger **Benutzer-Auswahlmenü eingereicht**, **Rollen-Auswahlmenü eingereicht**, **Kanal-Auswahlmenü eingereicht** und **Auswahlmenü für Benutzer oder Rollen eingereicht** laufen, wenn jemand einen Button oder ein Auswahlmenü benutzt, das dein Bot gepostet hat. Siehe die Referenzen [Buttons](/de/docs/custom-commands/reference/triggers/bot-interactions/bot-interactions-buttons) und [Auswahlmenüs](/de/docs/custom-commands/reference/triggers/bot-interactions/bot-interactions-select-menus).

Diese Trigger richtest du nicht im Trigger selbst ein. Du verknüpfst den Button dort mit dem Flow, wo der Button erstellt wird:

1. Öffne die Nachricht, die den Button tragen soll, im Nachrichten-Editor, zum Beispiel in einem Schritt **Nachricht senden** eines anderen Flows oder in einer Moduleinstellung vom Typ **Nachricht**.
2. Füge einen Button hinzu und wähle **Flow starten** als seine Aktion.
3. Wähle unter **Flow** deinen Flow aus. Die Liste zeigt nur Flows, deren Trigger passt, ein Button bietet also nur Flows mit **Button angeklickt** an.
4. Optional: Wenn mehrere Buttons denselben Flow starten, gib jedem unter **Erweitert** einen anderen **Status (State)**. Der Flow kann ihn auslesen, um zu erkennen, welcher Button geklickt wurde.
5. Speichere und sende die Nachricht erneut, damit der Button in Discord existiert.

Sobald er verknüpft ist, zeigt der Trigger "Wird von 1 verknüpften Komponente gestartet" und die Flow-Karte zeigt die Anzahl der Komponenten. Ein Flow, den noch nichts startet, zeigt "Noch nichts startet diesen Flow."

Wenn du den Flow löschst, funktioniert der Button nicht mehr. Der Nachrichten-Editor markiert ihn mit "Der verknüpfte Flow existiert nicht mehr. Diese Komponente wird nicht mehr funktionieren."

**Erweiterte Zuordnung (Custom-ID-Muster)** ist nur für Sonderfälle gedacht, zum Beispiel für Buttons, die ein anderes Tool erstellt hat. Sie passt auf jede Komponente, deren Custom-ID zum Muster passt.

**Modals** (Pop-up-Formulare) kannst du auf zwei Arten verarbeiten:

- **Modal zeigen und auf Absenden warten** zeigt das Formular an und wartet im selben Flow. Lege die nächsten Schritte in seinen Zweig "Später, wenn das Formular gesendet wird". Das ist der einfachere Weg.
- **Modal anzeigen** in einem Flow und ein zweiter Flow mit **Modal eingereicht**, dessen **Custom-ID-Muster** zur **Custom-ID** des Modals passt.

Lies die Antworten mit **Modal-Feld auslesen** aus. Ein Modal kann nur als Antwort auf eine Interaktion angezeigt werden, zum Beispiel auf einen Slash-Command oder einen Button-Klick.

## Server-Ereignisse {#server-events}

Die meisten Trigger reagieren auf etwas auf deinem Server, egal ob eine Person, ein Moderator oder ein anderer Bot es ausgelöst hat. Die meisten davon haben keine Einstellungen: Sie laufen bei jedem Ereignis ihrer Art, und du grenzt sie mit Schritten wie **Wenn** ein. Diese haben Einstellungen:

| Trigger                                                    | Einstellungen                                                                              |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Nachricht erstellt**                                     | **Kanäle**, **Vergleichstyp** (**Jede Nachricht**, **Enthält**, **Gleich**, **Beginnt mit**, **Endet mit**, **Regex**), **Muster**, **Groß-/Kleinschreibung ignorieren**, **Bots ignorieren** |
| **Reaktion hinzugefügt**, **Reaktion entfernt**            | **Kanäle**, **Bestimmtes Emoji**, **Bots ignorieren**                                      |
| **Tippen gestartet**                                       | **Kanäle**, **Bots ignorieren**                                                            |
| Andere Trigger für Nachrichten, Reaktionen, Anheftungen und Umfragen | **Kanäle**                                                                       |
| **Audit-Log-Eintrag erstellt**                             | **Aktionen**, um nur auf bestimmte Arten von Audit-Log-Einträgen zu reagieren              |

Wenn du **Kanäle** leer lässt, gilt das für jeden Kanal, den dein Bot sehen kann.

Manche Server-Ereignisse brauchen einen privilegierten Intent:

| Intent              | Gebraucht von                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| **Server Members**  | Alle [Mitglieder-Trigger](/de/docs/custom-commands/reference/triggers/discord-server/discord-server-members), wie **Mitglied getreten** und **Mitglied verlassen** |
| **Message Content** | **Nachricht erstellt**, **Nachricht aktualisiert**, **Nachricht gelöscht** und **Nachrichten in Massen gelöscht** |
| **Presence**        | **Präsenz aktualisiert**                                                                       |

Den Rest findest du nach Kategorie: [Server-Nachrichten](/de/docs/custom-commands/reference/triggers/discord-server/discord-server-messages), [Rollen](/de/docs/custom-commands/reference/triggers/discord-server/discord-server-roles), [Kanäle](/de/docs/custom-commands/reference/triggers/discord-server/discord-server-channels), [Threads](/de/docs/custom-commands/reference/triggers/discord-server/discord-server-threads), [Sprache](/de/docs/custom-commands/reference/triggers/discord-server/discord-server-voice), [Discord-Events](/de/docs/custom-commands/reference/triggers/discord-server/discord-server-events), [Banns](/de/docs/custom-commands/reference/triggers/discord-server/discord-server-bans), [AutoMod](/de/docs/custom-commands/reference/triggers/discord-server/discord-server-automod) und [Nachrichten-Umfragen](/de/docs/custom-commands/reference/triggers/discord-server/discord-server-message-polls). Trigger, die deinen Bot selbst betreffen, wie **Bot bereit** oder **Bot trat einem Server bei**, findest du unter [Bot-Benutzer](/de/docs/custom-commands/reference/triggers/bot-user).

:::tip Halte häufige Trigger sparsam
**Nachricht erstellt**, **Tippen gestartet** oder **Präsenz aktualisiert** können sehr oft auslösen. Nutze zuerst die eigenen Einstellungen des Triggers und dann einen Schritt **Wenn** ganz oben, damit dein Flow dein [Aktivitätsbudget](/de/docs/custom-commands/limits-and-safety) nicht für Ausführungen verbraucht, die nichts tun. Der Tab **Probleme** warnt dich, wenn ein häufiger Trigger vor Schritten, die etwas verändern, keinen Filter hat.
:::

## Zeitpläne {#schedule}

**Zeitplan** führt einen Flow nach einem festen Zeitplan immer wieder aus.

1. Wähle den Trigger **Zeitplan**.
2. Wähle in der Karte **Zeitplan** aus, wie oft er **Läuft**: **Alle paar Minuten**, **Jede Stunde**, **Jeden Tag**, **Jede Woche** oder **Jeden Monat**.
3. Fülle die Felder aus, die erscheinen, zum Beispiel die Uhrzeit, den Wochentag oder den Tag im Monat. Ein Satz wie "Läuft jeden Tag um 09:00." bestätigt, was du ausgewählt hast.
4. Wenn du Cron-Ausdrücke kennst, kannst du mit **Erweitert (Cron direkt bearbeiten)** stattdessen einen eintippen.

Zeitpläne verwenden die Zeitzone deines Bots, die du in der Konfiguration deines Bots festlegst. Ein Zeitplan, der zu oft läuft, wird beim Speichern abgelehnt. In einem Modul kann der Zeitplan mit **Moduleinstellung verwenden** aus einer Moduleinstellung kommen, die einen Zeitplan enthält, sodass Admins ihn ändern können, ohne den Flow zu öffnen.

An einem Zeitplan hängt keine Person. Schritte, die ein Mitglied oder einen Kanal brauchen, müssen diese auf anderem Weg bekommen, zum Beispiel aus einem festen Wert, einer Moduleinstellung oder einem Schritt, der sie abruft.

## Von einem anderen Flow gestartet {#flow-triggers}

Mit diesen Triggern arbeiten Flows zusammen. Siehe die Referenz [Flows](/de/docs/custom-commands/reference/triggers/custom-commands/custom-commands-flows).

| Trigger                   | Läuft, wenn                                                                  | Gut zu wissen                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Manueller Auslöser**    | ein anderer Flow ihn mit **Anderen Flow ausführen** ausführt                 | Der aufrufende Flow wartet, bis er fertig ist. Im Verlauf zählt die Ausführung als Teil der Ausführung des aufrufenden Flows. Ein Flow kann sich nicht selbst aufrufen. |
| **Geplante Ausführung**   | der Zeitpunkt gekommen ist, den ein anderer Flow mit **Flow-Ausführung planen** eingeplant hat | Geplante Ausführungen überstehen Bot-Neustarts. Ausführungen, die fällig wurden, während dein Bot offline war, laufen, sobald er wieder da ist. Jede erscheint als eigene Ausführung. |
| **Benutzerdefiniertes Event empfangen** | ein anderer Flow mit **Benutzerdefiniertes Event auslösen** ein benutzerdefiniertes Event mit demselben **Event-Name** sendet | Jeder Flow, der auf diesen Namen hört, läuft, jeder als eigene Ausführung. |

**Manueller Auslöser** und **Geplante Ausführung** können **Parameter** festlegen, also typisierte Werte, die der aufrufende Flow übergibt:

1. Klicke in den Trigger-Einstellungen auf **Parameter hinzufügen**.
2. Gib eine **ID** ein, zum Beispiel `member`. Sie lässt sich später nicht ändern, weil andere Flows über sie auf den Parameter verweisen. Um einen umzubenennen, entferne ihn und füge einen neuen hinzu.
3. Wähle den **Typ**, schreibe eine **Beschreibung** und schalte **Erforderlich** ein, wenn Aufrufer ihn übergeben müssen.

Der aufrufende Schritt zeigt dann einen Abschnitt **Argumente** mit einer Eingabe pro Parameter. Ein **Manueller Auslöser** kann außerdem **Rückgabewerte** festlegen, die er mit dem Schritt **Aus Flow zurückkehren** zurückgibt. Der aufrufende Schritt stellt sie dann als Werte bereit, die du weiter unten verwenden kannst. Wenn du Rückgabewerte festlegst, aber kein Pfad mit **Aus Flow zurückkehren** endet, warnt dich der Editor.

## Beispiel: ein /hug-Befehl {#example-hug}

![Die Trigger-Einstellungen eines Slash-Befehls mit dem Befehlsnamen "hug", einer Beschreibung, der Befehlsvorschau und einer erforderlichen Option "member" vom Typ Benutzer](@site/docs/assets/custom-commands/en/ccv3-trigger-settings.png)

1. Erstelle einen leeren Flow und wähle **Slash-Befehl**.
2. Setze **Befehlsname** auf `hug` und **Beschreibung** auf "Schick jemandem eine Umarmung".
3. Klicke auf **Option hinzufügen**. Setze **Name** auf `member`, **Typ** auf Benutzer, gib eine **Beschreibung** an und schalte **Erforderlich** ein.
4. Füge den Schritt **Auf Interaktion antworten** hinzu und setze **Interaktion** auf die **Interaktion** des Triggers.
5. Öffne seinen **Inhalt** und schreibe die Nachricht. Füge mit **Wert einfügen** die **Erwähnung** der Person ein, die den Befehl ausgeführt hat, dann den Text "umarmt" und die **Erwähnung** deiner Option `member`. Optionen erscheinen in der Werteauswahl unter **Auslöser**.
6. Speichere und schalte den Flow ein.

Wenn jemand `/hug member:@Alex` ausführt, antwortet der Bot mit etwas wie "@Sam umarmt @Alex".

## Beispiel: ein Button "Ich akzeptiere die Regeln" {#example-button}

Zwei Flows: Einer postet eine Nachricht mit einem Button, der andere vergibt eine Rolle, wenn jemand darauf klickt.

1. Erstelle einen Flow mit dem Namen "Regeln akzeptieren" und dem Trigger **Button angeklickt**. Füge **Rolle zu Mitglied hinzufügen** hinzu. Setze **Mitglied** auf das Mitglied, das geklickt hat (angezeigt als **Klickendes Mitglied**), und **Rolle** auf deine Mitgliederrolle. Füge **Auf Interaktion antworten** mit "Willkommen an Bord!" hinzu und schalte **Ephemer** ein, damit nur dieses Mitglied die Antwort sieht. Speichere und schalte den Flow ein.
2. Erstelle einen zweiten Flow mit dem Namen "Regeln posten" mit einem Trigger **Slash-Befehl**, dem **Befehlsname** `post-rules` und **Erforderliche Berechtigungen** auf **Administrator**, damit nur Admins ihn sehen.
3. Füge **Nachricht senden** hinzu. Setze **Kanal** auf deinen Regelkanal, schreibe deine Regeln in die **Nachricht**, füge einen Button mit der Beschriftung "Ich akzeptiere" hinzu, wähle **Flow starten** und wähle "Regeln akzeptieren".
4. Füge **Auf Interaktion antworten** mit "Gepostet." hinzu und schalte **Ephemer** ein. Speichere und schalte den Flow ein.
5. Führe `/post-rules` einmal aus. Der Button gibt jetzt allen, die darauf klicken, die Rolle.

Wenn das Klicken auf den Button wegen einer fehlenden Berechtigung fehlschlägt, muss die Rolle deines Bots über der Rolle stehen, die er vergibt, und er braucht die Berechtigung **Rollen verwalten**.

## Interaktionen rechtzeitig beantworten {#interactions}

Slash-Commands, Kontextmenüs, Buttons, Auswahlmenüs und Modals sind Interaktionen. Discord erwartet, dass dein Bot jede Interaktion innerhalb von etwa drei Sekunden beantwortet. Sonst sieht die Person "Die Anwendung hat nicht geantwortet", und die Ausführung schlägt mit einer Meldung fehl, dass die Interaktion abgelaufen ist.

- **Antworte auf jedem Pfad.** Jeder Weg durch den Flow braucht eine Antwort, eine Aktualisierung der Nachricht, ein Modal oder einen Schritt, der auf etwas wartet. Der Editor warnt dich, wenn ein Pfad ohne Antwort enden kann. Ein leerer Zweig **Sonst** ist die übliche Ursache.
- **Schiebe langsame Arbeit auf.** Wenn dein Flow zuerst langsame Dinge erledigt, füge davor **Interaktionsantwort aufschieben** hinzu und antworte später.
- **Antworte nur einmal.** Die zweite Antwort auf dieselbe Interaktion muss **Auf Interaktion folgen** sein, oder **Interaktionsantwort bearbeiten**, um die erste zu ändern. Der Editor warnt dich vor einer zweiten Antwort auf demselben Pfad.
- **Antworte nicht nach einer langen Wartezeit.** Eine Interaktion kann nur für eine begrenzte Zeit nach ihrem Eingang beantwortet werden. Sende nach einem langen **Warten** stattdessen eine normale Nachricht in den Kanal.

## Cooldowns {#cooldowns}

Jeder Trigger kann einen Cooldown haben, der begrenzt, wie oft der Flow läuft, pro User, pro Kanal oder für den ganzen Server. Siehe [Cooldowns](/de/docs/custom-commands/flows#cooldowns).
