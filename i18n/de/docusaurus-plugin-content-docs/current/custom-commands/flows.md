---
sidebar_position: 3
title: "Flows & der Editor"
description: "So funktioniert der Flow-Editor von Custom Commands V3 - Trigger und Schritte hinzufügen, Werte zwischen Schritten weitergeben, Verzweigungen und Schleifen, speichern, Flows einschalten und Probleme beheben."
---

# Flows & der Editor {#flows}

:::caution Diese Dokumentation ändert sich während der Beta
Custom Commands V3 ist in einer aktiven Beta, und wir ändern unterwegs noch vieles. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation. Bis dahin können einige Details auf dieser Seite veraltet sein.
:::

Ein Flow ist eine Automatisierung: ein [Trigger](/de/docs/custom-commands/triggers), der festlegt, wann er läuft, und die Schritte, die dein Bot von oben nach unten ausführt. Du baust ihn im Flow-Editor, der sich öffnet, wenn du einen Flow erstellst oder in der Übersicht auf eine Flow-Karte klickst.

Ein Flow steht entweder für sich (im Bereich **Nicht kategorisiert** oder in einem deiner Ordner) oder in einem [Modul](/de/docs/custom-commands/modules). Flows in einem Modul können die Einstellungen und den Datenspeicher dieses Moduls nutzen.

## Der Editor auf einen Blick {#editor}

![Der Flow-Editor mit der Toolbar, dem Diagramm eines Slash-Command-Flows mit einem Wenn-Schritt und zwei Antworten, dem Bereich mit den Tabs Flow, Schritt, Daten und Probleme sowie der Speicherleiste](@site/docs/assets/custom-commands/en/ccv3-flow-editor.png)

Der Editor besteht aus vier Teilen:

- **Die Toolbar** oben: **Rückgängig** und **Wiederherstellen**, ein Button zum Wechseln zwischen **Diagramm** und **Schritt-Liste**, Vollbild, **Testlauf** und der Schalter **Entwurf** / **Aktiv**.
- **Das Diagramm** zeigt deinen Flow als Kästen, mit dem Trigger oben und "Flow endet" unten. In großen Flows helfen dir **Ganzes Diagramm einpassen** und **Schritt suchen** (oder `/`) bei der Orientierung. **Als Bild exportieren** lädt ein Bild des Flows herunter.
- **Der Bereich** neben dem Diagramm hat vier Tabs. **Flow** zeigt die Details des Flows, seinen Status und den Abschnitt **Letzte Ausführungen**. **Schritt** zeigt die Eingaben des ausgewählten Schritts. **Daten** listet die Werte auf, die du verwenden kannst. **Probleme** listet alles auf, was der Editor für falsch hält.
- **Die Speicherleiste** erscheint unten, sobald du etwas änderst, mit **Speichern** und **Zurücksetzen**.

Lieber eine einfache Liste? Klicke auf **Schritt-Liste**. Sie zeigt dieselben Schritte als Karten, lässt sich gut mit der Tastatur bedienen, und deine Wahl wird gespeichert.

## Einen Trigger wählen {#trigger}

Ein leerer Flow startet ohne Trigger. Klicke auf **Auslöser auswählen**, wähle eine Kategorie und dann den Trigger. Seine Einstellungen öffnen sich unter **Trigger-Einstellungen**. Mit **Auslöser ändern** tauschst du ihn später aus, aber Schritte, die Werte des alten Triggers verwendet haben, musst du dann eventuell neu einstellen. Was jede Art von Trigger macht, findest du unter [Trigger](/de/docs/custom-commands/triggers).

## Schritte hinzufügen {#add-steps}

Klicke im Diagramm auf ein **+** zwischen zwei Kästen (**Hier einen Schritt hinzufügen**). In der Schritt-Liste nutzt du **Hier einen Schritt einfügen**. Beides öffnet die Aktionsauswahl. Suche nach Namen oder wähle links eine Kategorie.

![Die Aktionsauswahl mit "message" im Suchfeld, ausgewählten Alle Kategorien und Nachricht senden ganz oben in den Ergebnissen](@site/docs/assets/custom-commands/en/ccv3-action-picker.png)

Suche nach Name oder Beschreibung, oder wähle links eine Kategorie. **Zuletzt verwendet**, **Favoriten** und **Vorgeschlagen** helfen dir, häufige Aktionen schneller zu finden, **Zwischenablage** enthält Schritte, die du kopiert hast, und **Datenspeicher** bietet fertige Schritte für deine [Speicherfelder](/de/docs/custom-commands/storage).

Jede Aktion ist in der Referenz aufgeführt, sortiert nach Kategorie. Zum Beispiel: [Server-Nachrichten](/de/docs/custom-commands/reference/actions/discord-server/discord-server-messages), [Mitglieder](/de/docs/custom-commands/reference/actions/discord-server/discord-server-members), [Rollen](/de/docs/custom-commands/reference/actions/discord-server/discord-server-roles), [Ablaufsteuerung](/de/docs/custom-commands/reference/actions/control-flow), [Daten-Werkzeuge](/de/docs/custom-commands/reference/actions/data-manipulation/text) und [Datenspeicher](/de/docs/custom-commands/reference/actions/data-storage).

## Die Eingaben eines Schritts ausfüllen {#inputs}

Klicke auf einen Schritt, um seine Eingaben im Tab **Schritt** zu sehen. Jede Eingabe bekommt ihren Wert auf eine von zwei Arten:

- **Ein fester Wert**, der bei jeder Ausführung gleich ist, zum Beispiel ein Kanal, den du auswählst, oder ein Text, den du eintippst. Diese tragen das Abzeichen **Fester Wert**.
- **Ein Wert aus dem Flow**, zum Beispiel das Mitglied, das den Befehl ausgeführt hat, oder die Nachricht, die ein früherer Schritt gesendet hat. Klicke auf **Wert verwenden** und wähle ihn im Tab **Daten** aus.

Eingaben mit dem Hinweis **kann leer sein** sind optional. Alle anderen Eingaben müssen gesetzt sein, bevor der Flow eingeschaltet werden kann. Wie Werte im Detail funktionieren, auch Text mit Werten darin, steht unter [Werte, Variablen & Nachrichten](/de/docs/custom-commands/variables).

Zwei Warnungen zu Eingaben tauchen häufig auf:

- **Verbindung verloren** bedeutet, dass der Wert, den diese Eingabe verwendet hat, weg ist, zum Beispiel weil du den Schritt gelöscht hast, der ihn erzeugt hat, oder weil du den Trigger geändert hast. Wähle einen neuen Wert oder entferne ihn.
- **Falscher Typ** bedeutet, dass der Wert nicht passt, zum Beispiel ein Kanal in einer Eingabe, die eine Rolle braucht. Der Tab **Daten** bietet oft einen Umwandlungsschritt an, der das behebt.

## Beispiel: ein Befehl nur für VIPs {#example}

Dieser Flow beantwortet `/vip` unterschiedlich, je nachdem, ob das Mitglied eine VIP-Rolle hat. Er zeigt, wie das Ergebnis eines Schritts in einen späteren Schritt einfließt und wie eine Verzweigung funktioniert.

1. Erstelle einen leeren Flow und wähle den Trigger **Slash-Befehl**. Setze **Befehlsname** auf `vip` und gib eine **Beschreibung** an.
2. Füge den Schritt **Mitglied hat Rolle** hinzu. Setze **Mitglied** mit **Wert verwenden** und wähle **Befehlsnutzer**, also das Mitglied, das den Befehl ausgeführt hat. Setze **Rolle** als festen Wert auf deine VIP-Rolle.
3. Der Editor warnt, dass **Mitglied** leer sein kann, weil ein Befehl außerhalb eines Servers kein Mitglied hat. Dieser Befehl ist in DMs aus (**In DMs erlauben** ist standardmäßig aus), also wähle **Ignorieren, ein leerer Wert ist hier in Ordnung**.
4. Füge darunter den Schritt **Wenn** hinzu. Setze seine **Bedingung** mit **Wert verwenden** und wähle **Hat Rolle** aus Schritt 1. Das ist die Verknüpfung: Das Ergebnis eines Schritts wird zur Eingabe eines anderen.
5. Der Schritt **Wenn** hat jetzt zwei Zweige, **Wenn wahr** und **Sonst**. Füge in **Wenn wahr** den Schritt **Auf Interaktion antworten** hinzu und schreibe eine Willkommensnachricht als **Inhalt**.
6. Füge in **Sonst** einen weiteren Schritt **Auf Interaktion antworten** mit "Dieser Befehl ist nur für VIPs." hinzu und schalte **Ephemer** ein, damit nur dieses Mitglied die Antwort sieht.
7. Setze **Interaktion** bei beiden Antwort-Schritten auf die **Interaktion** des Triggers, speichere dann und schalte den Flow ein.

![Das Diagramm des /vip-Beispiels: der Trigger Slash-Befehl, Mitglied hat Rolle und ein Wenn-Schritt mit je einem Schritt Auf Interaktion antworten im Zweig "Wenn wahr" und im Zweig "Sonst"](@site/docs/assets/custom-commands/en/ccv3-branch.png)

Beide Zweige treffen sich bei "danach weiter" wieder, sodass ein Schritt, den du unter dem **Wenn** hinzufügst, in beiden Fällen läuft.

## Beispiel: eine DM mit Ausweichlösung {#example-try}

DMs schlagen fehl, wenn ein Mitglied keine Nachrichten von Servermitgliedern annimmt. Ohne Vorkehrungen scheitert dann die gesamte Ausführung an diesem Schritt. **Versuchen** fängt das ab:

1. Füge den Schritt **Versuchen** hinzu. Er hat zwei Zweige, **Diese Schritte versuchen** und **Wenn ein Schritt fehlschlägt**.
2. Lege **DM an Mitglied senden** in **Diese Schritte versuchen**.
3. Lege ein **Auf Interaktion antworten** (oder ein **Nachricht senden** in einen Team-Kanal) in **Wenn ein Schritt fehlschlägt**, zum Beispiel "Ich konnte dir keine DM schicken. Bitte öffne deine DMs."
4. Innerhalb von **Wenn ein Schritt fehlschlägt** sagen dir die Werte **Fehlercode** und **Fehlermeldung**, was schiefgelaufen ist. Du kannst sie in die Nachricht einfügen.

Die Vorlage **/warn-Befehl** nutzt genau dieses Muster.

## Was passiert, wenn ein Schritt fehlschlägt {#failures}

Wenn ein Schritt während der Ausführung fehlschlägt, zum Beispiel weil deinem Bot eine Berechtigung fehlt oder ein Kanal gelöscht wurde, stoppt der Flow genau dort. Schritte danach laufen nicht, und Schritte davor werden nicht rückgängig gemacht. Die Ausführung erscheint im Ausführungsverlauf als **Fehlgeschlagen**, mit der fehlgeschlagenen Aktion und einem Grund wie "Dem Bot fehlt eine für diesen Schritt benötigte Berechtigung." Siehe [Ausführungsverlauf & Debugging](/de/docs/custom-commands/executions).

Um nach einem Schritt, der fehlschlagen kann, weiterzumachen, packe ihn in **Versuchen**. Schritte in **Diese Schritte versuchen**, die fehlschlagen, schicken die Ausführung stattdessen in **Wenn ein Schritt fehlschlägt**, und danach läuft der Flow unter dem **Versuchen** weiter.

## Verzweigungen, Schleifen und Wartezeiten {#control-flow}

Diese Schritte aus der Kategorie [Ablaufsteuerung](/de/docs/custom-commands/reference/actions/control-flow) bestimmen, wie dein Flow abläuft:

| Schritt                              | Was er macht                                                                                       |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **Wenn**                             | Führt **Wenn wahr** aus, wenn die Bedingung wahr ist, sonst den Zweig **Sonst** (der optional ist). |
| **Wenn ein Wert da ist**             | Führt einen Zweig aus, wenn ein Wert gesetzt ist, und einen anderen, wenn er leer ist.             |
| **Switch**                           | Führt den Zweig aus, dessen Wert passt. Füge einen Standardfall für alles andere hinzu.            |
| **Nach Art verzweigen**              | Führt für jede Art von Wert einen anderen Zweig aus, für Werte, die eine von mehreren Arten sein können. |
| **Nach Unterbefehl verzweigen**      | Führt einen Zweig pro Unterbefehl deines Slash-Commands aus.                                       |
| **Zufälliger Zweig**                 | Wählt zufällig einen Zweig aus, anhand der Gewichtungen in Prozent, die du festlegst.              |
| **Versuchen**                        | Führt seine Schritte aus und, wenn einer fehlschlägt, **Wenn ein Schritt fehlschlägt**, statt den ganzen Flow scheitern zu lassen. |
| **Für jeden Eintrag**                | Führt seine Schritte für jeden Eintrag einer Liste einmal aus.                                     |
| **Für jeden Eintrag der Zuordnung**  | Führt seine Schritte für jeden Eintrag einer Zuordnung einmal aus.                                 |
| **Wiederholen**                      | Führt seine Schritte eine feste Anzahl von Malen aus.                                              |
| **Warten**                           | Pausiert den Flow für eine Weile.                                                                  |
| **Flow stoppen**                     | Beendet den Flow genau an dieser Stelle. Schritte danach können nie laufen und werden als **Nicht erreichbar** angezeigt. |
| **Anmerkung**                        | Eine Haftnotiz für dich und dein Team. Sie macht nichts, wenn der Flow läuft.                      |

Mit **Verzweigung hinzufügen** fügst du bei Schritten wie **Switch** und **Zufälliger Zweig** weitere Zweige hinzu. Bei **Zufälliger Zweig** dürfen die Gewichtungen zusammen weniger als 100 % ergeben: Der Rest ist die Wahrscheinlichkeit, dass kein Zweig läuft. **Schleife abbrechen** und **Schleife fortsetzen** verlassen eine Schleife vorzeitig oder springen zu ihrer nächsten Runde. Sie funktionieren nur innerhalb einer Schleife.

Schritte, die auf jemanden warten, wie **Bestätigung anfordern**, **Frage mit Auswahlmenü stellen** oder **Auf Nachricht warten**, bekommen für jede Antwort einen Zweig mit der Beschriftung "Später, ..." und einen für den Fall, dass niemand rechtzeitig antwortet. Das solltest du übers Warten wissen:

- **Wartende Schritte können nicht in einer Schleife laufen**, auch nicht in einem Flow, den du aus einer Schleife heraus aufrufst. Verschiebe sie nach außerhalb. Sonst schlägt die Ausführung mit "kann nicht innerhalb einer Schleife pausieren" fehl.
- **Warten** ist für kurze Pausen gedacht. Um etwas viel später zu erledigen, plane einen anderen Flow mit **Flow-Ausführung planen** ein. Geplante Ausführungen überstehen Bot-Neustarts.
- **Eine Interaktion läuft ab.** Nach einer langen Wartezeit kannst du nicht mehr auf den Befehl oder Button antworten, der den Flow gestartet hat. Sende stattdessen eine normale Nachricht.

Um aus diesem Flow einen anderen Flow auszuführen, nutze **Anderen Flow ausführen** aus der Kategorie [Flows](/de/docs/custom-commands/reference/actions/custom-commands/custom-commands-flows). Sein Ziel braucht einen **Manueller Auslöser**. Siehe [Von einem anderen Flow gestartet](/de/docs/custom-commands/triggers#flow-triggers).

## Schritte bearbeiten, verschieben und organisieren {#edit-steps}

Jeder Schritt hat ein Menü (**Schritt-Optionen**) mit **Schritt danach hinzufügen**, **Notiz danach hinzufügen**, **Duplizieren**, **Kopieren**, **Danach einfügen** und **Löschen**.

- **Benenne einen Schritt um**, um ihm eine Beschriftung wie "VIP-Rolle prüfen" zu geben. Die Beschriftung wird am Schritt angezeigt.
- **Verschiebe einen Schritt**, indem du seine Karte ziehst. Ziehen funktioniert im Diagramm mit Maus oder Touch. Um mit der Tastatur umzusortieren, wechsle zur **Schritt-Liste**. Wenn eine Verschiebung eine Verbindung kaputt machen würde, fragt der Editor vorher nach und listet die Eingaben auf, die er leeren würde.
- **Kopieren und Einfügen** geht mit `Ctrl+C` und `Ctrl+V`, auch in andere Flows. Wenn ein eingefügter Schritt einen Wert verwendet hat, den der neue Flow nicht hat, listet der Editor die Eingaben auf, die einen neuen Wert brauchen. Schritte, die Moduleinstellungen oder Speicherfelder nutzen, brauchen neue Werte, wenn du sie aus einem Modul in einen freien Flow einfügst oder umgekehrt.
- **Wähle mehrere Schritte aus** mit `Ctrl` oder `Cmd` und einem Klick, oder einen Bereich mit `Shift`, und verschiebe, kopiere oder lösche sie dann gemeinsam.
- **Lösche einen Schritt** über sein Menü oder mit `Delete`. Schritte in seinen Zweigen werden mit gelöscht. `Ctrl+Z` macht das rückgängig.
- **Klappe** große Schritte mit **Zweige einklappen** ein, oder den ganzen Flow mit dem Einklappen-Button der Toolbar, um einen Überblick zu bekommen.

Klicke im Diagramm auf **Tastenkürzel**, um die vollständige Liste zu sehen.

Ein Flow kann nur eine bestimmte Anzahl von Schritten enthalten, und Zweige lassen sich nur bis zu einer bestimmten Tiefe verschachteln. Der Editor sagt dir, wenn du eine der beiden Grenzen erreichst. Verschiebe einen Teil des Flows in einen zweiten Flow mit einem **Manueller Auslöser** und führe ihn mit **Anderen Flow ausführen** aus.

## Einen Flow speichern und einschalten {#save}

Klicke in der Speicherleiste auf **Speichern**, um deine Arbeit zu sichern. Ein Flow ist entweder ein **Entwurf** oder **Aktiv**:

- **Entwurf**-Flows werden gespeichert und geprüft, laufen aber nie. Einen Entwurf kannst du auch speichern, wenn er noch Probleme hat.
- **Aktiv**e Flows laufen in Discord, sobald ihr Trigger auslöst.

Um einen Flow einzuschalten, stelle den Schalter in der Toolbar auf **Aktiv** und klicke auf **Speichern**. Nachdem du einen Entwurf gespeichert hast, kannst du auch auf **Einschalten & speichern** klicken. In der Übersicht findest du im Menü einer Flow-Karte **Flow aktivieren** und **In Entwurf verschieben**.

Ein Flow in einem Modul läuft nur, wenn auch sein Modul aktiviert ist. Siehe [Module & Vorlagen](/de/docs/custom-commands/modules).

Wenn jemand denselben Flow woanders gespeichert hat, während du ihn bearbeitet hast, siehst du **Speicher-Konflikt**. Wähle **Neueste Version laden**, um deine Änderungen zu verwerfen, oder **Mit meiner Version überschreiben**, um deine zu behalten.

Nach dem Speichern lädt dein Bot die neue Version von selbst. Klappt das nicht, siehst du "Gespeichert, aber dein Bot konnte die Änderungen noch nicht übernehmen". Die Version, die vorher lief, läuft weiter. Klicke auf **Bot erneut neu laden** und prüfe, ob dein Bot online ist.

Solange der [Not-Stopp](/de/docs/custom-commands/limits-and-safety) eingeschaltet ist, zeigt der Editor "Custom Commands sind per Not-Stopp gestoppt" und kein Flow läuft, egal ob aktiv oder nicht.

## Validierungsfehler lesen {#issues}

Der Editor prüft deinen Flow, während du arbeitest. Der Tab **Probleme** sortiert, was er findet, in zwei Gruppen:

- **Verhindert das Einschalten** - blockierende Probleme, zum Beispiel eine erforderliche Eingabe, die nicht gesetzt ist, oder ein Wert vom falschen Typ. Behebe sie, bevor du den Flow aktivieren kannst.
- **Einen Blick wert** - Warnungen, die nichts blockieren, zum Beispiel ein Wert, der leer sein kann.

Ein Schritt mit Problemen zeigt im Diagramm ein Abzeichen. Klicke auf ein Problem, um zum Schritt und zur Eingabe zu springen, zu denen es gehört. Viele Probleme bieten eine schnelle Lösung an, zum Beispiel **Ersatzwert verwenden**, **Diesen und die folgenden Schritte nur ausführen, wenn ein Wert da ist** oder **Neuen Wert wählen**. Warnungen, die du nicht brauchst, kannst du mit **Ignorieren** ausblenden, und du findest sie unter **Ignoriert** wieder.

Wenn du versuchst, einen Flow mit blockierenden Problemen einzuschalten, siehst du "Dieser Flow kann noch nicht aktiviert werden". Deine Änderungen werden erst gespeichert, wenn du die Probleme behebst oder den Flow zurück auf **Entwurf** stellst. Wenn du "Die Validierung ist derzeit nicht verfügbar" siehst, konnte die Prüfung nicht laufen. Speichere als Entwurf und versuche es in ein paar Minuten erneut.

Manche Schritte tragen ein eigenes Abzeichen:

| Abzeichen            | Was es bedeutet                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| **Unvollständig**    | Eine erforderliche Eingabe ist nicht gesetzt, oder ein fester Wert ist ungültig.                      |
| **Verbindung verloren** | Eine Eingabe verwendet einen Wert, den es nicht mehr gibt.                                         |
| **Nicht erreichbar** | Ein Schritt darüber, zum Beispiel **Flow stoppen**, beendet den Flow immer vorher.                    |
| **Veraltet**         | Die Aktion funktioniert noch, wird aber eventuell später entfernt. Ersetze sie, wenn du kannst.       |
| **Wert prüfen**      | Ein fester Wert passt nicht zu seinem Typ. Er läuft vorerst noch, wird aber später abgelehnt.         |
| "Unbekannte Aktion"  | Die Version deines Bots kennt diese Aktion nicht, zum Beispiel in einem Flow aus einer neueren App. Sie bleibt, wie sie ist, und du kannst sie verschieben oder löschen. Starte deinen Bot neu, um ihn zu aktualisieren. |

## Häufige Fehler {#mistakes}

| Was passiert                                                  | Warum, und wie du es behebst                                                                                               |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Der Flow läuft nie                                            | Er ist noch ein **Entwurf**, oder sein Modul ist **Deaktiviert**. Prüfe den Schalter in der Toolbar und das Modul.         |
| Ein Button zeigt in Discord "Diese Interaktion ist fehlgeschlagen" | Der Flow dahinter ist nicht aktiv, wurde gelöscht oder hat nie geantwortet. Prüfe seinen Ausführungsverlauf.          |
| Die Ausführung schlägt wegen einer fehlenden Berechtigung fehl | Deinem Bot fehlt eine Discord-Berechtigung, oder seine Rolle steht unter der Rolle oder dem Mitglied, auf das er einwirkt. Schiebe die Rolle deines Bots nach oben. |
| Eine Eingabe hat ihren Wert verloren, nachdem du einen Schritt verschoben oder gelöscht hast | Werte sind nur unterhalb des Schritts verfügbar, der sie erzeugt. Schiebe den Schritt zurück oder wähle einen neuen Wert. |
| Der Flow läuft für dieselbe Sache zweimal                     | Zwei aktive Flows, oder ein Modul und sein Duplikat, reagieren auf denselben Trigger. Schalte einen davon aus.             |

## Cooldowns {#cooldowns}

Ein Cooldown begrenzt, wie oft ein Flow laufen kann. Die Karte **Cooldown** findest du in den Trigger-Einstellungen:

1. Schalte **Cooldown aktivieren** ein.
2. Wähle unter **Gilt pro** **User**, **Kanal** oder **Server**.
3. Lege die **Dauer** fest.
4. Bei Triggern, die Leute direkt benutzen, wie Slash-Commands und Buttons, kannst du **Cooldown-Antwort** einschalten und die Nachricht schreiben, die Leute sehen, solange sie warten müssen.

Ausführungen während eines Cooldowns werden übersprungen und erscheinen im Ausführungsverlauf als übersprungen. In einem Modul können Admins mit **Mit einer Moduleinstellung überschreiben** die Dauer und die Antwort auf der Einstellungsseite des Moduls festlegen.

## Name, Farbe, Ordner und Löschen {#organize}

Öffne den Tab **Flow** im Bereich und klicke auf **Flow bearbeiten**, um den **Name des Flows**, den Ordner (unter **Kategorie**) und die **Flow-Farbe** zu ändern. Die Farbe ändert nur, wie der Flow im Dashboard aussieht.

So gruppierst du Flows in Ordnern:

1. Klicke in der Übersicht oder auf der Seite eines Moduls auf **Neuer Ordner**, gib einen **Ordnername** ein und klicke auf **Ordner erstellen**.
2. Ziehe eine Flow-Karte auf den Ordner, oder nutze **In Ordner verschieben** im Menü der Karte. **Aus Ordner entfernen** nimmt ihn wieder heraus.
3. Um einen Ordner umzubenennen oder zu löschen, nutze **Ordner umbenennen** oder **Ordner löschen** an seinem Bereich. Ein Ordner muss leer sein, bevor du ihn löschen kannst. Seine Flows werden nie mit ihm gelöscht.

Ordner in einem Modul enthalten nur die Flows dieses Moduls.

**Als Entwurf duplizieren** im Menü einer Flow-Karte kopiert den Flow als Entwurf mit dem Zusatz "(Kopie)". **Flow löschen**, im Menü der Karte oder im Tab **Flow** des Editors, entfernt ihn endgültig. Der Dialog listet alle Buttons oder Auswahlmenüs auf, die diesen Flow starten, denn sie funktionieren danach nicht mehr.
