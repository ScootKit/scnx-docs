---
sidebar_position: 1
title: "Custom Commands V3"
description: "Baue eigene Automationen für deinen Discord-Server als Flows - ein Trigger und die Schritte, die laufen, wenn er auslöst, ganz ohne Code."
---

# Custom Commands V3 {#custom-commands-v3}

:::caution Diese Dokumentation ändert sich während der Beta
Custom Commands V3 ist in einer aktiven Beta, und wir ändern unterwegs noch vieles. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation. Bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Mit Custom Commands V3 baust du eigene Automationen für den Bot deines Servers. Jede Automation ist ein **Flow**: ein Trigger, der festlegt, wann er läuft, gefolgt von den Schritten, die dein Bot ausführt. Flows baust du in einem visuellen Editor im SCNX-Dashboard, und dein Bot führt sie in Discord aus.

Ein Flow kann ein Slash-Command sein, der mit einer Nachricht antwortet. Er kann aber auch eine Willkommensnachricht für neue Mitglieder sein, eine wöchentliche Erinnerung in deinem Ankündigungskanal oder ein ganzes Ticket-System aus mehreren Flows, die sich ihre Einstellungen und Daten teilen.

## Was du bauen kannst {#what-you-can-build}

- **Slash-Commands und Kontextmenüs** mit Optionen, Auswahlmöglichkeiten, Unterbefehlen und Autovervollständigung.
- **Buttons, Dropdowns und Modals**, die einen Flow starten, wenn jemand sie benutzt.
- **Reaktionen auf Ereignisse auf deinem Server**, zum Beispiel wenn ein Mitglied beitritt, eine Nachricht gesendet wird, sich eine Rolle ändert oder ein Mitglied boostet.
- **Geplante Flows**, die jede Stunde, jeden Tag, jede Woche oder nach einem Zeitplan deiner Wahl laufen.
- **Systeme, die sich Dinge merken**, zum Beispiel XP pro Mitglied, Verwarnungen, Abstimmungen oder offene Tickets, mit dem [Datenspeicher](/de/docs/custom-commands/storage).
- **Wiederverwendbare Module** mit eigener Einstellungsseite, damit du (oder ein anderer Server) Kanäle, Rollen und Nachrichten festlegen kannst, ohne die Flows anzufassen.

Schritte können Entscheidungen treffen, sich für jeden Eintrag einer Liste wiederholen, auf eine Antwort warten, andere Flows aufrufen und fast alles auf deinem Server ändern, was dein Bot ändern darf.

## Was sich gegenüber Custom Commands V2 ändert {#v2-differences}

Wenn du unsere älteren Custom Commands genutzt hast, ändert sich für dich Folgendes:

| Custom Commands V2                                                         | Custom Commands V3                                                                                        |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Wenige Trigger: Slash-Command, Nachricht, Button, Modal oder kein Trigger. | Viel mehr Trigger, darunter Server-Ereignisse, Zeitpläne und Flows, die andere Flows starten.             |
| Aktionen laufen in Aktionsblöcken, alle auf einmal oder eine zufällige.    | Schritte laufen der Reihe nach, mit echten Bedingungen, Schleifen, Fehlerbehandlung und Wartezeiten.      |
| Werte kommen aus festen `%parameters%`.                                    | Jeder Schritt kann jeden Wert nutzen, den ein früherer Schritt oder der Trigger geliefert hat.            |
| Kein Gedächtnis zwischen den Ausführungen.                                 | Flows können Daten speichern und lesen, pro Mitglied, pro Server oder unter einem eigenen Schlüssel.      |
| Jeder Befehl steht für sich allein.                                        | Flows lassen sich zu Modulen mit eigenen Einstellungen, eigenem Datenspeicher und Ordnern zusammenfassen. |
| Kein Verlauf darüber, was passiert ist.                                    | Jede Ausführung wird protokolliert, und du kannst einen Flow testen, ohne dass er etwas auf deinem Server ändert. |

Das Einschalten von V3 lässt deine V2-Befehle unberührt. Sie laufen weiter und bleiben neben deinen neuen Flows bearbeitbar. Wenn du einen Befehl umziehen möchtest, sieh dir [Umstieg von V2](/de/docs/custom-commands/migrating-from-v2) an.

## Was du brauchst {#requirements}

- **Dein Server hat einen eigenen Bot auf SCNX.** Flows laufen auf deinem Bot, unter seinem Namen und mit seinen Berechtigungen. Siehe [Custom-Bot einrichten](/de/docs/custom-bot).
- **Dein Bot ist online.** Der Editor lädt deine Kanäle, Rollen, deinen Datenspeicher und den Ausführungsverlauf von deinem Bot, und Flows laufen nur, solange er läuft.
- **Dein Bot hat die Discord-Berechtigungen, die deine Flows brauchen.** Ein Flow, der Rollen vergibt, braucht **Rollen verwalten**, einer, der Nicknames ändert, braucht **Nicknamen verwalten** und so weiter. Außerdem muss die Rolle deines Bots über den Rollen und Mitgliedern stehen, auf die er wirkt.
- **Manche Trigger brauchen privilegierte Intents**, zum Beispiel Server Members oder Message Content, die du im Discord Developer Portal einschalten musst. Der Editor zeigt dir, welche. Siehe [Trigger](/de/docs/custom-commands/triggers#pick).

## Wer was darf {#permissions}

| Aufgabe                                                      | Wer                                                                                                   |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| V3 einschalten oder zurück zu V2 wechseln                    | Der Server-Owner und die Co-Owner                                                                     |
| Flows und Module bauen, bearbeiten, einschalten und löschen  | Alle, die die Konfiguration deines Bots bearbeiten dürfen, einschließlich Trusted Admins mit der Berechtigung **Konfigurationen & Eigene Befehle ändern und neu laden** |
| Die Befehle und Buttons nutzen, die deine Flows erstellen    | Deine Mitglieder, eingeschränkt durch das, was du bei jedem Befehl unter **Erforderliche Berechtigungen** festlegst |

## Zugang bekommen {#access}

Custom Commands V3 ist in der Beta, und du trittst ihr selbst bei, ganz ohne Bewerbung. Öffne **Eigene Befehle** im Bereich deines Bots im [SCNX-Dashboard](https://scnx.app). Was du dort siehst, hängt von deinem Server ab:

- **"Custom Commands V3 ist in der Beta"** bedeutet, dass V3 für deinen Server noch nicht eingeschaltet ist. Klicke auf **Der Beta beitreten**, um die Opt-in-Seite zu öffnen, oder auf **Was V3 kann**, um zuerst mehr darüber zu lesen.
- **"Custom Commands V3 ist für deinen Server verfügbar"** bedeutet, dass dein Server V3 einschalten kann. Klicke auf **V3 entdecken**, um weiterzumachen.

Nur der Server-Owner und die Co-Owner können V3 einschalten. Ein Server kann auch schon früher über einen Early-Access-Einladungslink freigeschaltet worden sein, den dir ein Marktplatz-Publisher geschickt hat.

Wenn wir den Beitritt pausiert haben, siehst du stattdessen "Custom Commands V3 ist noch nicht verfügbar". Deine bestehenden Befehle funktionieren in jedem Fall wie gewohnt weiter.

### Custom Commands V3 einschalten {#enable}

![Der Kasten "Before you enable" der Opt-in-Seite mit beiden angehakten Checkboxen und dem Button "Enable Custom Commands V3"](@site/docs/assets/custom-commands/en/ccv3-opt-in-wizard.png)

Das Einschalten von V3 ist eine Entscheidung für den ganzen Server, deshalb können das nur der Server-Owner und die Co-Owner. Alle anderen sehen auf dieser Seite "Nur der Server-Owner oder Co-Owner können das aktivieren".

1. Klicke auf **V3 entdecken**. Die Seite erklärt, was V3 ist, worauf du dich einlässt und was mit deinen V2-Befehlen passiert. Bitte lies sie durch.
2. Hake unter **Bevor du aktivierst** beide Kästchen an. Das erste bestätigt, dass Flows mit den vollen Discord-Berechtigungen deines Bots laufen. Das zweite bestätigt, dass deine V2-Befehle weiter funktionieren und dass der Wechsel einen Neustart des Bots braucht.
3. Klicke auf **Custom Commands V3 aktivieren**.
4. Dein Bot muss neu starten, bevor V3 aktiv wird. Klicke auf **Bot jetzt neu starten** oder starte ihn später über dein Bot-Dashboard neu. Deine V2-Befehle laufen die ganze Zeit weiter.
5. Klicke auf **Zur V3-Übersicht**.

Wenn du "Wir konnten Custom Commands V3 nicht aktivieren" siehst, warte einen Moment und versuche es noch einmal. Bis dein Bot neu gestartet ist, laufen deine Flows noch nicht, auch wenn du schon welche gebaut hast.

Was sich für deinen Server ändert, sobald V3 eingeschaltet ist:

- Der Eintrag in der Seitenleiste heißt **Eigene Befehle V3** und öffnet die neue Übersicht.
- Daneben erscheint ein Eintrag **Marktplatz**, über den du fertige Apps installieren kannst.
- Deine V2-Befehle bleiben, wo sie waren. Du erreichst sie über **Bisherige V2-Befehle** auf der V3-Übersicht, und sie laufen weiter.

:::caution Flows handeln mit den Berechtigungen deines Bots
Ein Flow kann alles tun, was dein Bot darf, zum Beispiel Mitglieder bannen, Kanäle löschen oder DMs senden. Das gilt auch für Flows, die andere gebaut haben. Jeder, der auf deinem Server eigene Befehle bearbeiten darf, einschließlich Trusted Admins mit der Berechtigung **Konfigurationen & Eigene Befehle ändern und neu laden**, kann solche Flows bauen. Prüfe unter [Trusted Admins](/de/docs/scnx/guilds/trusted-admins#permissions), wer diese Berechtigung hat, bevor du V3 einschaltest.
:::

### Zurück zu V2 wechseln {#switch-back}

Ganz unten in der linken Spalte der V3-Übersicht finden der Server-Owner und die Co-Owner **Zurück zu V2 wechseln**:

1. Klicke auf **Zurück zu V2 wechseln**.
2. Bestätige im Dialog mit **Zurück zu V2 wechseln**.
3. Dein Bot startet neu.

Deine V3-Flows laufen dann nicht mehr, werden aber nicht gelöscht. Deine V2-Befehle funktionieren weiter. Du kannst V3 später wieder einschalten. Dabei gehst du noch einmal durch dieselbe Seite und dieselben Checkboxen.

## Ein Rundgang durch das Dashboard {#tour}

Sobald V3 eingeschaltet ist, heißt der Eintrag in der Seitenleiste **Eigene Befehle V3**. Er öffnet die Übersicht mit der Überschrift "Deine eigenen Befehlsabläufe".

![Die Übersicht von Custom Commands V3 mit zwei Modulkarten, einem Ordner mit Flows und links den Karten New custom command flow, Data & history und Emergency stop](@site/docs/assets/custom-commands/en/ccv3-overview.png)

Der Hauptbereich listet auf, was du gebaut hast:

| Bereich                 | Was er enthält                                                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Apps**                | Apps, die du aus dem Marktplatz installiert hast. Siehe [Teilen & der Marktplatz](/de/docs/custom-commands/sharing).        |
| **Module**              | Module, die du selbst gebaut hast. Jede Karte zeigt das Icon, den Namen, die Anzahl der Flows und ob das Modul aktiviert ist. Siehe [Module & Vorlagen](/de/docs/custom-commands/modules). |
| **Nicht kategorisiert** | Flows, die zu keinem Modul und keinem Ordner gehören.                                                                       |
| Deine Ordner            | Ein Bereich pro Ordner, den du für deine Flows angelegt hast.                                                              |

Jede Flow-Karte zeigt, ob der Flow **Aktiv** oder ein **Entwurf** ist. Klicke auf eine Karte, um den Flow im [Editor](/de/docs/custom-commands/flows) zu öffnen.

Die linke Spalte enthält die Werkzeuge:

- **Springe zu** scrollt zu jedem Bereich der Übersicht.
- **Neuen eigenen Flow erstellen** legt einen Flow an. Daneben legen **Neuer Ordner** und **Neues Modul** einen Ordner oder ein Modul an.
- **Daten & Verlauf** verlinkt auf **Server-Datenspeicher** (die Daten, die deine Flows gespeichert haben, siehe [Datenspeicher](/de/docs/custom-commands/storage)), **Ausführungen** (jede Ausführung deiner Flows, siehe [Ausführungsverlauf & Debugging](/de/docs/custom-commands/executions)), **App-Updates** für installierte Apps, **KI-Assistent** (siehe [MCP Connector](/de/docs/custom-commands/mcp)) und **Bisherige V2-Befehle**.
- **Notaus** hält jeden Flow und jedes Modul auf deinem Server auf einen Schlag an. Klicke darauf und bestätige mit **Alles stoppen**. Dein Bot startet neu, und ein rotes Banner "Custom-Commands sind gestoppt" erscheint. Gelöscht wird nichts. Um das rückgängig zu machen, klicke im Banner auf **Custom-Commands wieder einschalten**. Jeder Flow und jedes Modul kommt genau so zurück, wie es war. Wenn der Stopp nicht durchgeht, bietet die Karte **Stattdessen den Bot stoppen** an.
- **Aktivitätsbudget** zeigt, wie viel Spielraum deine Automationen gerade noch haben.

Mehr zum Notaus und zu Aktivitätsbudgets liest du in [Tarife, Limits & Sicherheit](/de/docs/custom-commands/limits-and-safety).

:::note Support während der Beta
Für das Bauen oder Debuggen von eigenen Befehlen bieten wir noch keinen Support an. Das gilt auch für Flows aus einer App, die du installiert hast: Wende dich dafür an den Entwickler der App. Feedback, Bug-Reports und Fragen gehören in die Beta-Kanäle auf unserem Discord. Bring bei einem Bug die Schritte mit, mit denen er sich auslösen lässt, was du erwartet hast, was stattdessen passiert ist und einen Link zum Flow.
:::

## Nächste Schritte {#next-steps}

- [Deinen ersten Flow bauen](/de/docs/custom-commands/quickstart) - ein kurzes Tutorial von der Vorlage bis zum funktionierenden Flow in Discord.
- [Flows & der Editor](/de/docs/custom-commands/flows) - Schritte, Verzweigungen, Schleifen, Speichern und Einschalten von Flows.
- [Trigger](/de/docs/custom-commands/triggers) - alle Wege, wie ein Flow starten kann.
- [Werte, Variablen & Nachrichten](/de/docs/custom-commands/variables) - Werte zwischen Schritten und in deine Nachrichten weitergeben.
- [Module & Vorlagen](/de/docs/custom-commands/modules) - Flows bündeln und ihnen eine Einstellungsseite geben.
- [Datenspeicher](/de/docs/custom-commands/storage) - Werte zwischen Ausführungen merken.
- [Ausführungsverlauf & Debugging](/de/docs/custom-commands/executions) - sehen, was deine Flows getan haben und warum einer fehlgeschlagen ist.
