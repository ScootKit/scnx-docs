---
sidebar_position: 6
title: "Module & Vorlagen"
description: "Fasse Flows von Custom Commands V3 in Modulen mit eigener Einstellungsseite, eigenem Datenspeicher und eigenen Ordnern zusammen, und starte neue Flows aus Vorlagen."
---

# Module & Vorlagen {#modules}

:::caution Diese Dokumentation ändert sich während der Beta
Custom Commands V3 ist in einer aktiven Beta, und wir ändern unterwegs noch vieles. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation. Bis dahin können einige Details auf dieser Seite veraltet sein.
:::

Ein Modul bündelt mehrere Flows, die zusammengehören, zum Beispiel alle Flows eines Ticket-Systems oder eines Level-Systems. Es hat seine eigene Einstellungsseite, seinen eigenen Datenspeicher und seine eigenen Ordner, und du kannst das ganze Modul mit einem Schalter ein- oder ausschalten.

Kleine Flows mit nur einem Zweck brauchen kein Modul. Nutze eines, wenn Flows Daten oder Einstellungen teilen, oder wenn Admins Kanäle, Rollen und Texte ändern können sollen, ohne den Flow-Editor zu öffnen.

Du musst nicht alles selbst bauen. Fertige Module anderer Ersteller, zum Beispiel Ticket-Systeme oder Level-Systeme, findest du auf dem [Marktplatz](https://scnx.app/marketplace). Installierte Module erscheinen in deiner Übersicht unter **Apps**. Siehe [Teilen & der Marktplatz](/de/docs/custom-commands/sharing).

## Module und freie Flows {#scopes}

Flows außerhalb eines Moduls teilen sich den Datenspeicher deines Servers, den du in der Übersicht unter **Server-Datenspeicher** findest. Flows in einem Modul sehen nur die eigenen Einstellungen, Speicherfelder und Flows dieses Moduls. So bleiben Module unabhängig: Ein Modul kann nicht kaputtgehen, weil sich ein anderes geändert hat, und du kannst es als App veröffentlichen, ohne den Rest deines Setups mitzunehmen.

## Ein Modul erstellen {#create}

1. Klicke in der Übersicht von Custom Commands V3 auf **Neues Modul**.
2. Gib einen **Modulname** und eine **Beschreibung** ein.
3. Wähle ein **Symbol**. Suche nach Namen oder öffne eine Kategorie, um jedes Symbol darin zu sehen.
4. Wähle eine Farbe und klicke dann auf **Modul erstellen**.

Die Seite des Moduls öffnet sich. Ein neues Modul ist sofort aktiviert, hat aber noch keine Flows, also passiert nichts, bis du welche hinzufügst.

Um Name, Beschreibung, Symbol oder Farbe später zu ändern, klicke auf der Seite des Moduls auf **Bearbeiten** und speichere.

Dein Server kann nur eine bestimmte Anzahl von Modulen enthalten, und ein Modul nur eine bestimmte Anzahl von Flows. Wenn du eine Grenze erreichst, sagt dir das Dashboard Bescheid. Siehe [Pläne, Limits & Sicherheit](/de/docs/custom-commands/limits-and-safety).

## Die Modulseite {#module-page}

![Die Seite des Moduls "Welcome kit" mit Kopfbereich, Schalter Aktiviert, seitlicher Navigation und den Flows in zwei Ordnern](@site/docs/assets/custom-commands/en/ccv3-module-home.png)

Der Kopfbereich zeigt das Symbol, den Namen und die Beschreibung des Moduls sowie diese Bedienelemente:

- Der Schalter **Aktiviert** / **Deaktiviert** schaltet das ganze Modul ein oder aus.
- **Im Marktplatz veröffentlichen** teilt das Modul mit anderen Servern. Siehe [Teilen & der Marktplatz](/de/docs/custom-commands/sharing).
- **Bearbeiten** ändert Name, Beschreibung, Symbol und Farbe.
- **Duplizieren** und **Löschen**, siehe [unten](#duplicate-delete).

Die Navigation daneben führt zu den Teilen des Moduls:

| Eintrag           | Was du dort machst                                                                                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Flows**         | Die Flows und Ordner des Moduls. **Neuen eigenen Flow erstellen** und **Neuer Ordner** funktionieren genau wie in der Übersicht.          |
| **Konfiguration** | Die Einstellungsseite des Moduls und das Layout dieser Seite. Siehe [Moduleinstellungen](#settings).                                      |
| **App**           | Die Seite, die Leute sehen, wenn du das Modul als App veröffentlichst. Siehe [Teilen & der Marktplatz](/de/docs/custom-commands/sharing). |
| **Speicher**      | Die Speicherfelder des Moduls und die Daten, die seine Flows gespeichert haben. Siehe [Datenspeicher](/de/docs/custom-commands/storage).  |
| **Ausführungen**  | Jede Ausführung der Flows des Moduls. Siehe [Ausführungsverlauf & Debugging](/de/docs/custom-commands/executions).                        |
| **Graph**         | Eine Karte, die zeigt, wie die Flows des Moduls zusammenhängen. Siehe [Der Modul-Graph](#graph).                                          |

## Ein Modul ein- und ausschalten {#enable}

Ein Flow in einem Modul läuft nur, wenn beides zutrifft: Der Flow ist **Aktiv** und sein Modul ist **Aktiviert**. Wenn du das Modul auf **Deaktiviert** stellst, stoppen alle seine Flows auf einmal, ohne dass sich der eigene Ein/Aus-Zustand der einzelnen Flows ändert. Schalte es wieder ein, und jeder Flow, der aktiv war, läuft wieder.

Solange der [Not-Stopp](/de/docs/custom-commands/limits-and-safety) eingeschaltet ist, zeigen Module **Aktiviert - gestoppt**. Ihre Einstellung bleibt erhalten, und nichts läuft, bis du die Custom Commands wieder einschaltest.

## Der Modul-Graph {#graph}

![Die Graph-Seite eines Moduls mit ausgewähltem Flow "Send welcome" und seinen Verbindungen im Inspektor](@site/docs/assets/custom-commands/en/ccv3-module-graph.png)

**Graph** zeichnet jeden Flow des Moduls als Kasten, mit Linien dafür, was ihn startet, welche Flows er aufruft oder einplant, welche Buttons zu ihm führen und welche Einstellungen und Speicherfelder er nutzt. Mit **Anzeigen** schaltest du die Ebenen **Startpunkte**, **Konfiguration** und **Speicher** ein und aus.

- Klicke auf einen Kasten, um seine **Verbindungen** zu sehen, zum Beispiel **Gestartet durch**, **Ruft auf**, **Nutzt** und **Genutzt von**.
- Ein Flow mit der Markierung "Nichts startet diesen Flow" hat keinen Trigger, Button oder anderen Flow, der ihn startet. Das ist oft ein vergessenes Teil.
- Ein Speicherfeld mit der Markierung "Nicht verwendet" wird von keinem Flow genutzt.
- "Fehlender Flow" oder "Fehlendes Feld" bedeutet, dass etwas auf einen Flow oder ein Feld verweist, das es nicht mehr gibt.
- Über das Menü eines Kastens kannst du ihn **Im Editor öffnen**, **Umbenennen** oder **Löschen**. Die Toolbar bietet außerdem **Neuer Flow** und **Neues Speicherfeld**.

Der Graph braucht deinen Bot online. Ist er es nicht, siehst du "Der Graph kann gerade nicht geladen werden".

## Moduleinstellungen {#settings}

Mit Einstellungen können Server-Admins ändern, was ein Modul macht, ohne seine Flows anzufassen: in welchem Kanal gepostet wird, welche Rollen als Team zählen, was in der Willkommensnachricht steht. Die Seite **Konfiguration** hat zwei Tabs.

![Der Tab "Layout bearbeiten" mit einer Seite General, die eine Option "Welcome channel" und eine zum Bearbeiten geöffnete Option "Welcome message" enthält](@site/docs/assets/custom-commands/en/ccv3-module-settings.png)

### Die Einstellungsseite gestalten {#config-layout}

Unter **Layout bearbeiten** legst du fest, welche Einstellungen das Modul anbietet:

1. Klicke auf **Seite hinzufügen**, um eine Seite mit Einstellungen hinzuzufügen. Größere Module können ihre Einstellungen auf mehrere Seiten aufteilen.
2. Klicke auf **Option hinzufügen** und fülle sie aus:
   - **Name**: was Admins sehen. Die **ID** wird aus dem Namen erzeugt und **kann später nicht geändert werden**, weil Flows über sie auf die Einstellung verweisen.
   - **Typ**: zum Beispiel **Text**, **Ganze Zahl**, **Ja/Nein**, **Zeitdauer**, **Textkanal**, **Rolle**, **Benutzer**, **Nachricht** oder eine Liste aus Texten, Zahlen, Kanälen, Rollen oder Benutzern.
   - **Beschreibung**: ein kurzer Hilfetext für Admins.
   - **Optional** oder **Erforderlich**, ein **Standardwert** für einfache Typen und **Grenzwerte** wie ein Minimum und Maximum.
3. Füge bei Einstellungen vom Typ **Nachricht** **Parameter** hinzu: `%placeholder%`-Namen, die Admins in ihrer Nachricht verwenden können und die deine Flows beim Senden ausfüllen. Siehe das [zweite Beispiel](#example-message) unten.
4. Klicke auf **Speichern**.

Zum Umsortieren nutzt du die Pfeile oder ziehst. **Option auf eine andere Seite verschieben** verschiebt eine Einstellung, ohne ihre ID zu ändern, sodass jeder Flow, der sie nutzt, weiter funktioniert.

Wenn deine Änderung Flows kaputt machen würde, zum Beispiel weil du eine Einstellung gelöscht hast, die ein Flow nutzt, oder ihren Typ geändert hast, siehst du "Flows würden nicht mehr funktionieren" mit einer Liste davon. **Trotzdem speichern** speichert die Änderung, und diese Flows bleiben aus, bis du sie reparierst. **Abbrechen** lässt deine Änderung ungespeichert, sodass du die Flows vorher mit **Flow in neuem Tab öffnen** öffnen kannst.

### Die Einstellungen ausfüllen {#config-values}

Unter **Konfigurieren** legen Admins die Werte für deinen Server fest und klicken auf **Speichern**. Die meisten Einstellungen gelten sofort. Manche, wie Zeitpläne, werden nur beim Start deines Bots gelesen, deshalb wirst du gefragt: "Konfiguration deines Bots jetzt neu laden?". Klicke auf **Konfiguration jetzt neu laden**, um alles auf einmal zu übernehmen. Wenn du auf **Nein, danke** klickst, erinnert dich die Seite mit **Konfiguration neu laden** daran, bis du es tust.

Was hier schiefgehen kann:

- **"Deine Konfigurationswerte konnten nicht gespeichert werden, da sie ungültig sind."** Eine erforderliche Einstellung ist leer, oder ein Wert liegt außerhalb seiner Grenzen. Das Formular markiert die Einstellung.
- **Werte für Einstellungen, die das Modul nicht mehr hat.** Wenn du eine Einstellung aus dem Layout entfernt hast, kann ihr alter Wert zurückbleiben, und dein Bot weigert sich, die Konfiguration zu speichern. Entferne ihn mit dem Button daneben oder mit **Alle entfernen** und speichere dann.
- **Speicher-Konflikt.** Jemand anderes hat die Einstellungen gespeichert, während du sie bearbeitet hast. Wähle **Neueste Version laden** oder **Mit meiner Version überschreiben**.

### Einstellungen in deinen Flows verwenden {#config-in-flows}

In den Flows des Moduls tauchen Einstellungen an drei Stellen auf:

- In der Werteauswahl, unter **Moduleinstellungen**. Siehe [Werte, Variablen & Nachrichten](/de/docs/custom-commands/variables).
- In Trigger-Einstellungen, die das unterstützen, über **Moduleinstellung verwenden**. Zum Beispiel kann sich ein Trigger **Nachricht erstellt** auf die Kanäle beschränken, die ein Admin ausgewählt hat, oder ein **Zeitplan** kann einen Zeitplan verwenden, den ein Admin festgelegt hat. Die Einstellung muss genau den Typ haben, den die Trigger-Einstellung braucht. Ist das nicht der Fall, sagt dir der Editor, welchen Typ du hinzufügen musst.
- In der Karte **Cooldown**, über **Mit einer Moduleinstellung überschreiben**.

## Beispiel: ein Willkommens-Modul {#example}

Mach aus der Willkommens-Vorlage ein Modul, das Admins selbst einrichten können.

1. Erstelle ein Modul mit dem Namen "Willkommen".
2. Öffne unter **Konfiguration** den Tab **Layout bearbeiten**, klicke auf **Seite hinzufügen** und dann auf **Option hinzufügen**. Nenne sie "Willkommenskanal", setze den **Typ** auf **Textkanal** und speichere.
3. Wechsle zu **Konfigurieren**, wähle deinen Kanal aus und speichere.
4. Klicke unter **Flows** auf **Neuen eigenen Flow erstellen** und wähle die Vorlage **Neue Mitglieder begrüßen**.
5. Klicke im Schritt **Nachricht senden** bei **Kanal** auf **Wert verwenden** und wähle "Willkommenskanal" unter **Moduleinstellungen**.
6. Speichere den Flow und schalte ihn ein.

Admins können den Kanal jetzt im Tab **Konfigurieren** des Moduls ändern, und der Flow folgt, ohne dass er bearbeitet werden muss.

## Beispiel: eine Willkommensnachricht, die Admins selbst schreiben {#example-message}

Aufbauend auf dem Beispiel oben lässt du Admins den Willkommenstext selbst schreiben, mit der Erwähnung des neuen Mitglieds darin.

1. Füge unter **Layout bearbeiten** eine Option "Willkommensnachricht" mit dem **Typ** **Nachricht** hinzu.
2. Klicke unter **Parameter** auf **Parameter hinzufügen**. Nenne ihn `member` und beschreibe ihn, zum Beispiel mit "Erwähnung des neuen Mitglieds". Speichere das Layout.
3. Schreibe unter **Konfigurieren** die Nachricht, zum Beispiel "Willkommen %member%, schön, dass du da bist!", und speichere.
4. Klicke im Flow bei der Eingabe **Nachricht** von **Nachricht senden** auf **Wert verwenden** und wähle "Willkommensnachricht" unter **Moduleinstellungen**.
5. Unter der Nachrichten-Eingabe steht bei **Nachrichten-Parameter** jetzt "Diese Nachricht deklariert %Parameter%. Gib für jeden einen Wert an." und es erscheint eine Zeile für `member`. Setze sie mit **Wert verwenden** auf die **Erwähnung** des neuen Mitglieds (**Mitglied**).
6. Speichere. Wenn jemand beitritt, wird `%member%` zu seiner Erwähnung.

Wenn ein Admin das `%name%` eines Parameters aus der Nachricht entfernt, geht nichts kaputt: Der Wert wird einfach nicht angezeigt. Wenn du den Parameter aus dem Layout löschst, zeigt der sendende Schritt "Diese Nachricht deklariert ihn nicht mehr". Entferne dort die übrig gebliebene Zeile.

## Vorlagen {#templates}

Wenn du einen Flow erstellst, bietet **Mit einer Vorlage starten** fertige Flows an. Jeder wird als Entwurf erstellt, sodass du ihn dir ansehen und anpassen kannst, bevor du ihn einschaltest.

| Vorlage                      | Was sie macht                                                                                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Leerer Flow**              | Startet ganz von vorne mit einem leeren Flow.                                                                                                                         |
| **Begrüßungs-Antwort**       | Antwortet im selben Kanal, wenn jemand "!hello" schreibt.                                                                                                             |
| **Neue Mitglieder begrüßen** | Begrüßt neue Mitglieder mit einer persönlichen Nachricht in einem Kanal deiner Wahl.                                                                                  |
| **/warn-Befehl**             | Verwarnt ein Mitglied mit Benutzer und Grund, zählt seine Verwarnungen im Datenspeicher und schickt ihm eine DM, mit einer Ausweichlösung, wenn DMs geschlossen sind. |
| **/remind-Befehl**           | Lässt Mitglieder eine Erinnerung planen. Ein zweiter Flow, "Erinnerung zustellen (geplant)", wird mit erstellt und sendet die DM, wenn sie fällig ist.                |

Vorlagen funktionieren in der Übersicht und in einem Modul gleich. Manche verwenden Kanäle oder Speicherfelder, die du noch auswählen oder anlegen musst. Der Tab **Probleme** sagt dir, was fehlt.

Manche Vorlagen müssen eingerichtet werden, bevor du sie einschalten kannst:

- **Neue Mitglieder begrüßen** sendet in einen Platzhalter-Kanal. Wähle deinen Kanal im Schritt **Nachricht senden** aus.
- **/warn-Befehl** zählt Verwarnungen in einem Speicherfeld namens `warnings`. Wenn du es nicht hast, meldet der Tab **Probleme** das, und du kannst das Feld direkt aus dem Editor anlegen.
- **/remind-Befehl** erstellt zwei Flows. Schalte beide ein.

Komplette Systeme, die andere gebaut haben, findest du auf dem [Marktplatz](https://scnx.app/marketplace).

## Ein Modul duplizieren und löschen {#duplicate-delete}

**Duplizieren** kopiert das Modul mit all seinen Flows, seinen Einstellungen und seinen Speicherfeldern. Die Daten, die deine Flows gespeichert haben, werden nicht kopiert. Die Kopie startet deaktiviert. Schalte das Original aus, bevor du die Kopie einschaltest, sonst reagieren beide auf dieselben Befehle und Ereignisse.

**Duplizieren** kann auch fehlschlagen: wenn dein Server schon so viele Module hat, wie er enthalten kann, wenn die Kopie deinen Server über sein Flow-Limit bringen würde, oder wenn das Modul gerade seine Prüfungen nicht besteht. Die Meldung sagt dir, was davon zutrifft. Flows, die in der Kopie nicht eingeschaltet werden können, bleiben Entwürfe, und ein Hinweis sagt dir, wie viele es sind.

**Löschen** entfernt das Modul und jeden Flow darin. Tippe zur Bestätigung den Namen des Moduls genau ein: Der Button **Modul löschen** bleibt ausgegraut, bis er übereinstimmt. Im Dashboard kannst du das nicht rückgängig machen. Um ein Modul vorerst anzuhalten, stelle es stattdessen auf **Deaktiviert**.

Apps, die du aus dem Marktplatz installiert hast, lassen sich nicht duplizieren. Installiere die App erneut, um eine zweite Kopie zu bekommen.

## Module zwischen Servern verschieben {#import-export}

Einen Datei-Export oder -Import für Module gibt es noch nicht. Um ein Modul auf einem anderen Server zu nutzen, veröffentliche es auf dem Marktplatz, auch als nicht gelistete App, die nur Leute mit dem Link finden, und installiere es dort. Siehe [Teilen & der Marktplatz](/de/docs/custom-commands/sharing).

Innerhalb deines eigenen Servers kannst du einzelne Schritte mit `Ctrl+C` und `Ctrl+V` zwischen Flows kopieren. Siehe [Schritte bearbeiten, verschieben und organisieren](/de/docs/custom-commands/flows#edit-steps).

## Häufige Fehler {#mistakes}

| Was passiert                                                                | Warum, und wie du es behebst                                                                                                                  |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Eine Moduleinstellung taucht nicht in der Werteauswahl auf                  | Der Flow ist nicht in diesem Modul, oder der Typ der Einstellung passt nicht zur Eingabe. Freie Flows können keine Moduleinstellungen nutzen. |
| **Moduleinstellung verwenden** sagt "nur innerhalb eines Moduls"            | Der Flow ist ein freier Flow. Erstelle ihn stattdessen in einem Modul.                                                                        |
| Ein geänderter Zeitplan oder eine geänderte Einstellung wirkt nicht         | Sie wird nur beim Start deines Bots gelesen. Klicke auf **Konfiguration neu laden**.                                                          |
| Befehle reagieren nach dem Duplizieren doppelt                              | Das Original und die Kopie sind beide aktiviert. Deaktiviere eines davon.                                                                     |
| Ein Button in der Nachricht einer Moduleinstellung findet deinen Flow nicht | Modul-Flows können nur aus den eigenen Nachrichten und Schritten dieses Moduls verknüpft werden.                                              |
