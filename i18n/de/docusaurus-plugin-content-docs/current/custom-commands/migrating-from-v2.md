---
sidebar_position: 10
title: "Umstieg von V2"
description: "Schalte Custom Commands V3 für deinen Server ein, betreibe es neben deinen V2-Befehlen und wechsle bei Bedarf zurück."
---

# Umstieg von V2

Custom Commands V3 ist ein neuer Weg, Automationen zu bauen, und du schaltest es pro Server ein. Deine V2-Custom-Commands bleiben unberührt: Sie laufen weiter und bleiben neben V3 bearbeitbar. Du kannst jederzeit zurück zu V2 wechseln.

Diese Seite erklärt, wie du V3 einschaltest, was sich für dich ändert und was übernommen wird und was nicht.

## Kann mein Server V3 nutzen? {#eligibility}

V3 ist in der Beta, und du trittst ihr selbst über das Dashboard bei. Öffne die [Seite Eigene Befehle](https://scnx.app/glink?page=bot/custom-commands) deines Servers:

- **Wenn V3 noch nicht eingeschaltet ist**, siehst du die Karte "Custom Commands V3 ist in der Beta". Klicke auf **Der Beta beitreten**, um die Opt-in-Seite zu öffnen, oder auf **Was V3 kann**, um zuerst mehr zu erfahren.
- **Wenn dein Server bereits freigeschaltet wurde**, siehst du über deinen V2-Befehlen die Karte "Custom Commands V3 ist für deinen Server verfügbar" mit einem Button **V3 entdecken**.
- **Wenn wir den Beitritt pausiert haben**, siehst du "Custom Commands V3 ist noch nicht verfügbar". Deine V2-Befehle funktionieren weiter.

Wenn dir jemand einen Einladungslink für Custom Commands V3 geschickt hat, öffne ihn und wähle deinen Server. Damit wird der Server freigeschaltet. V3 einschalten musst du danach trotzdem selbst.

## V3 einschalten {#enable}

Nur der Server-Owner und die Co-Owner können V3 einschalten. Das ist eine Entscheidung für den ganzen Server, weil Flows mit den vollen Discord-Berechtigungen deines Bots laufen.

1. Klicke auf der Seite Eigene Befehle auf **V3 entdecken**.
2. Lies die Seite. Sie erklärt, was V3 ist, und enthält die Abschnitte **Worauf du dich einlässt**, **Deine V2-Befehle funktionieren weiter** und **Ein Neustart des Bots ist erforderlich**.
3. Hake unter **Bevor du aktivierst** beide Kästchen an: dass Flows mit den vollen Berechtigungen deines Bots laufen und jeder, der eigene Befehle bearbeiten darf, sie nutzen kann, und dass V2 weiter funktioniert und du zurückwechseln kannst.
4. Klicke auf **Custom Commands V3 aktivieren**.
5. Klicke auf **Bot jetzt neu starten**. V3 wird aktiv, sobald dein Bot neu gestartet ist. Deine V2-Befehle laufen die ganze Zeit weiter.
6. Klicke auf **Zur V3-Übersicht**.

![Das Ende der Opt-in-Seite: "Your V2 commands keep working", "A bot restart is required" und der Kasten "Before you enable" mit beiden angehakten Checkboxen](@site/docs/assets/custom-commands/en/ccv3-opt-in.png)

### Wenn etwas schiefgeht {#enable-problems}

| Was du siehst                                                             | Ursache und Lösung                                                                                                                    |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| "Nur der Server-Owner oder Co-Owner können das aktivieren"                | Du bist weder Owner noch Co-Owner. Bitte einen von ihnen, die Seite zu öffnen.                                                        |
| Der Button **Custom Commands V3 aktivieren** ist ausgegraut               | Hake beide Kästchen unter **Bevor du aktivierst** an.                                                                                 |
| "Wir konnten Custom Commands V3 nicht aktivieren"                         | Versuche es gleich noch einmal.                                                                                                       |
| "Too many Custom Commands V3 changes for this server"                     | Du hast V3 mehrmals hintereinander ein- und ausgeschaltet. Warte eine Weile und versuche es dann erneut.                               |
| "Dieser Bot wurde gerade erst neu gestartet" nach **Bot jetzt neu starten** | V3 ist bereits eingeschaltet, aber dein Bot kann so kurz danach nicht noch einmal neu starten. Warte bis zur angezeigten Zeit und starte ihn dann über das Dashboard deines Bots neu. |
| Deine V3-Flows laufen überhaupt nicht                                     | Dein Bot wurde seit dem Einschalten von V3 nicht neu gestartet. Starte ihn neu.                                                        |

:::caution Prüfe zuerst, wer eigene Befehle bearbeiten darf
Sobald V3 eingeschaltet ist, kann jeder, der eigene Befehle bearbeiten darf, Flows bauen, die die Berechtigungen deines Bots nutzen. Das gilt auch für [Trusted Admins](/de/docs/scnx/guilds/trusted-admins#permissions) mit der Berechtigung **Custom-Bot**: Konfigurationen & Eigene Befehle ändern und neu laden. Über einen Flow könnten sie Rollen vergeben oder Mitglieder bannen, auch wenn sie das selbst nicht dürften. Überprüfe deine Trusted Admins, bevor du V3 einschaltest.
:::

## V2 und V3 nebeneinander {#side-by-side}

Nachdem du V3 eingeschaltet hast, öffnet die Seite Eigene Befehle die V3-Übersicht. Deine V2-Befehle sind immer noch da:

- **Deine V2-Befehle laufen weiter.** An ihnen ändert sich nichts.
- **Du kannst sie weiterhin bearbeiten.** Klicke auf der V3-Übersicht unter **Daten & Verlauf** auf **Bisherige V2-Befehle**. Ein Banner erinnert dich daran, dass du gerade deine V2-Befehle ansiehst.
- **V2 behält seine eigenen Limits.** Wie viele V2-Befehle du eingeschaltet haben kannst, hängt wie bisher von deinem Tarif ab. V3-Flows nutzen stattdessen [Aktivitätsbudgets](/de/docs/custom-commands/limits-and-safety).

:::note Befehlsnamen müssen eindeutig sein
Discord erlaubt jeden Befehlsnamen nur einmal pro Server. Wenn ein V3-Flow einen Slash-Command-Namen nutzt, den dein Bot schon hat, zum Beispiel aus einem V2-Custom-Command oder einem Modul, gewinnt der bestehende Befehl, und der V3-Befehl wird nicht registriert. Dein Bot meldet das als Problem in deinem Dashboard ("Ein Custom-Commands-Befehl kollidiert mit einem vorhandenen Befehl"). Benenne den Befehl im Trigger deines Flows um oder schalte den V2-Befehl aus, mit dem er kollidiert.
:::

## Was sich für dich ändert {#what-changes}

| In V2                                                         | In V3                                                                                                                                                                  |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ein Befehl hat einen Trigger und eine Liste von Aktionsblöcken. | Ein [Flow](/de/docs/custom-commands/flows) hat einen Trigger und eine Kette von Schritten, mit Verzweigungen, Schleifen und Bedingungen.                             |
| Trigger sind Slash-Commands, Buttons, Nachrichten und Modals. | Flows reagieren außerdem auf [Server-Ereignisse](/de/docs/custom-commands/triggers), zum Beispiel beitretende Mitglieder, Reaktionen und Zeitpläne.                  |
| Es gibt keinen eingebauten Weg, Daten zu speichern.           | Flows können Daten im [Datenspeicher](/de/docs/custom-commands/storage) ablegen.                                                                                      |
| Befehle sind eine flache Liste.                               | Flows lassen sich in Ordnern und [Modulen](/de/docs/custom-commands/modules) mit eigenen Einstellungen gruppieren.                                                    |
| Es gibt keinen Verlauf einzelner Befehlsausführungen.         | Jede Ausführung wird im [Ausführungsverlauf](/de/docs/custom-commands/executions) protokolliert, und du kannst vor dem Livegang einen Testlauf machen.                |
| Teilen-Links kopieren einen einzelnen Befehl.                 | Du teilst ganze Module und kannst Apps aus dem [Marktplatz](/de/docs/custom-commands/sharing) installieren.                                                          |
| Dein Tarif begrenzt, wie viele Befehle eingeschaltet sind.    | Dein Tarif legt ein [Aktivitätsbudget](/de/docs/custom-commands/limits-and-safety#activity-budget) dafür fest, wie viel deine Flows tun können.                       |

Flows starten außerdem als Entwurf. Ein neuer Flow tut nichts, bis du ihn von **Entwurf** auf **Aktiv** stellst und speicherst.

## Was übernommen wird {#carry-over}

**Deine V2-Befehle werden nicht umgewandelt.** Sie laufen in V2 genau so weiter, wie sie sind, und V3 startet leer. Um einen Befehl nach V3 zu holen, baust du ihn als Flow neu. Die [Vorlagen](/de/docs/custom-commands/modules) und der [Schnellstart](/de/docs/custom-commands/quickstart) sind ein guter Ausgangspunkt, oder du lässt ihn dir von einem KI-Assistenten mit dem [MCP Connector](/de/docs/custom-commands/mcp) nachbauen.

Ein paar Dinge funktionieren in beiden gleich, weil sie zu deinem Bot und Server gehören und nicht zu den eigenen Befehlen:

- **Die Berechtigungen und Rollen deines Bots.** Flows handeln als dein Bot, genau wie V2-Befehle.
- **Wer eigene Befehle bearbeiten darf.** Dieselben Leute können V2-Befehle und V3-Flows bearbeiten.
- **V2-Teilen-Links.** Sie importieren weiterhin nach V2, nicht nach V3.

### Beispiel: einen V2-Befehl nach V3 umziehen {#example-move}

Angenommen, du hast einen V2-Slash-Command `/rules`, der mit deinen Serverregeln antwortet. So ziehst du ihn um:

1. Klicke auf der V3-Übersicht auf **Neuen eigenen Flow erstellen**, nenne ihn "Regeln" und wähle unter **Mit einer Vorlage starten** die Option **Leerer Flow**.
2. Wähle den Trigger **Slash-Befehl** und nenne den Befehl `rules`, mit derselben Beschreibung wie in V2.
3. Füge **Auf Interaktion antworten** hinzu und trag dort deine Regelnachricht ein.
4. Klicke auf **Testlauf**. Das Ergebnis zeigt die Antwort, die deine Mitglieder bekommen würden.
5. Öffne **Bisherige V2-Befehle** und schalte den V2-Befehl `/rules` aus. Speichere.
6. Stell im Flow von **Entwurf** auf **Aktiv** und speichere.
7. Führe `/rules` in Discord aus und sieh dir die Ausführung in den letzten Ausführungen des Flows an.

Schalte den V2-Befehl aus, bevor du den Flow aktivierst. Solange der V2-Befehl mit demselben Namen existiert, gewinnt er, und der V3-Befehl wird nicht registriert. Wenn `/rules` danach nicht auftaucht, starte deinen Bot neu.

## Zurück zu V2 wechseln {#switch-back}

Der Server-Owner und die Co-Owner können jederzeit zurückwechseln.

1. Öffne die V3-Übersicht.
2. Klicke ganz unten in der Seitenleiste auf **Zurück zu V2 wechseln**.
3. Bestätige mit **Zurück zu V2 wechseln**. Dein Bot startet neu.

Deine V3-Flows laufen dann nicht mehr. Deine V2-Befehle sind nicht betroffen und funktionieren weiter. Deine V3-Flows, Module und gespeicherten Daten bleiben auf deinem Bot gespeichert und sind wieder da, wenn du V3 erneut einschaltest.

Um V3 wieder einzuschalten, gehst du noch einmal durch die Opt-in-Seite. Du wirst gebeten, dieselben Punkte wie beim ersten Mal zu bestätigen, und dein Bot braucht einen weiteren Neustart.

:::tip Du willst einfach, dass alles stoppt?
Wenn ein Flow Unsinn macht und du ihn sofort stoppen willst, musst du nicht zurück zu V2 wechseln. Nutze stattdessen den **Notaus** auf der V3-Übersicht. Siehe [Tarife, Limits & Sicherheit](/de/docs/custom-commands/limits-and-safety#emergency-stop).
:::
