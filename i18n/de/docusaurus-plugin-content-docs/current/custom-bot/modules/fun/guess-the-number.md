# Errate die Zahl

Wähle eine Nummer und lass deine Nutzer diese erraten.

<ModuleOverview moduleName="guess-the-number" />

## Funktionen {#features}

- Admins können manuell Spielrunden in jedem Kanal erstellen.
- Optionaler Spielkanalmodus, der automatisch ein neues Spiel startet, sobald das vorherige gelöst wurde.
- Nutzer raten, indem sie Zahlen in den Kanal schreiben; der Bot reagiert, um richtige, falsche oder ungültige Versuche anzuzeigen.
- Optionale Höher-/Niedriger-Reaktionen bei falschen Versuchen.
- Konfigurierbare Start- und Endnachrichten.
- Sperrung des Kanals nach Spielende (außerhalb des Spielkanalmodus), um weitere Nachrichten zu verhindern.
- Optionale Bestenliste, die Spielerstatistiken (Versuche und Siege) erfasst, mit einem Ranking der Top 20.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=guess-the-number&ref=scnx-app-docs).
2. Öffne die [Konfiguration](#config-main) und füge Adminrollen hinzu, die Spielrunden erstellen und verwalten dürfen.
3. Stelle sicher, dass der Bot in den Kanälen, in denen gespielt wird, die Berechtigungen "Kanäle verwalten", "Rollen verwalten", "Reaktionen hinzufügen" und "Nachrichtenverlauf anzeigen" hat.
4. Aktiviere optional den [Spielkanalmodus](#config-channel) für automatische Neustarts.

## Nutzung {#usage}

### Manuelle Spiele

Admins (Nutzer mit einer konfigurierten Adminrolle) können mit `/guess-the-number create` in jedem Kanal eine Spielrunde erstellen. Sobald sie gestartet ist, raten die Nutzer, indem sie Zahlen in den Kanal senden. Der Bot reagiert auf jeden Versuch:

- Ein Häkchen für die richtige Zahl (das Spiel endet und der Gewinner wird bekannt gegeben).
- Ein Kreuz für einen falschen Versuch bzw. Pfeile nach oben/unten, wenn Höher-/Niedriger-Reaktionen aktiviert sind.
- Ein Verbotsschild für ungültige Eingaben (keine Zahl oder außerhalb des Minimal-/Maximalwerts).
- Ein Stoppschild, wenn ein Admin versucht zu raten (Admins können an manuellen Spielen nicht teilnehmen).

Jede Startnachricht enthält einen Button "Was bedeutet die Reaktion unter meinem Versuch?", der dem Nutzer, der ihn anklickt, die Reaktionen erklärt.

Nach dem Ende eines Spiels wird der Kanal gesperrt. Admins können ein Spiel außerdem mit `/guess-the-number end` vorzeitig beenden oder den aktuellen Spielstand mit `/guess-the-number status` abrufen.

### Spielkanalmodus

Ist der Spielkanalmodus aktiviert, wird ein dedizierter Kanal verwendet, in dem Spiele automatisch neu starten, sobald das vorherige gelöst wurde. Alle, auch Admins, können an Spielen im Spielkanal teilnehmen. Der Befehl `/guess-the-number` kann im Spielkanal nicht verwendet werden.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                                                    | Beschreibung                                                                                                                                             |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/guess-the-number create min:<Integer> max:<Integer> [number:<Integer>]` | Starte ein neues Spiel im aktuellen Kanal mit dem angegebenen Bereich. Optional kannst du die gesuchte Zahl festlegen (sonst wird sie zufällig gewählt). |
| `/guess-the-number status`                                                | Zeige den Status des aktuellen Spiels in diesem Kanal (Zahl, Bereich, Anzahl der Versuche, Ersteller). Nur für den Ausführenden sichtbar.                |
| `/guess-the-number end`                                                   | Beende das aktuelle Spiel in diesem Kanal.                                                                                                               |

## Konfiguration {#configuration}

### Konfiguration {#config-main}

In dieser Konfigurationsdatei kannst du das Spielverhalten und die Nachrichten festlegen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=guess-the-number%7Cconfigs/config).

| Feld                                 | Beschreibung                                                                                                                                                                                                         |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adminrollen                          | Rollen, die Spielrunden mit dem Befehl `/guess-the-number` erstellen und verwalten dürfen.                                                                                                                           |
| Startnachricht                       | Nachricht, die am Anfang einer neuen Spielrunde gesendet wird.                                                                                                                                                       |
| Endnachricht                         | Nachricht, die gesendet wird, wenn eine Spielrunde endet und ein Gewinner gefunden wurde.                                                                                                                            |
| Reagiere mit Niedriger-/Höher-Emojis | Wenn aktiviert, reagiert der Bot bei falschen Versuchen mit Pfeilen nach oben/unten, um anzuzeigen, ob die gesuchte Zahl höher oder niedriger ist. Falls deaktiviert, erhalten falsche Versuche eine Kreuz-Reaktion. |
| Bestenliste aktivieren?              | Wenn aktiviert, werden jeder Versuch und jeder Sieg pro Nutzer erfasst. Bei neuen Startnachrichten erscheint ein Button **Rangliste**, über den Spieler die Top 20 nach Siegen sehen können.                         |

In den Nachrichten kannst du folgende Platzhalter verwenden:

- `%min%`: Die kleinstmögliche Zahl (Start- und Endnachricht).
- `%max%`: Die größtmögliche Zahl (Start- und Endnachricht).
- `%winner%` (nur Endnachricht): Erwähnung des Gewinners.
- `%guessCount%` (nur Endnachricht): Anzahl der Versuche in diesem Spiel.
- `%number%` (nur Endnachricht): Die Zahl, die erraten werden musste.

### Spielkanal-Modus {#config-channel}

In dieser Konfigurationsdatei kannst du den automatischen Spielkanal aktivieren und einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=guess-the-number%7Cconfigs/channel).

| Feld                        | Beschreibung                                                                                       |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| Spielkanalmodus aktivieren? | Wenn aktiviert, wird ein dedizierter Spielkanal verwendet, in dem neue Spiele automatisch starten. |
| Spielkanal                  | Der Textkanal, der für automatische Spiele verwendet wird.                                         |
| Kleinste Nummer             | Die untere Grenze des Zufallsbereichs bei automatischen Spielen.                                   |
| Höchste Nummer              | Die obere Grenze des Zufallsbereichs bei automatischen Spielen.                                    |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Der Befehl /guess-the-number sagt, ich brauche Adminrollen</summary>
    <ul>
        <li>Du musst deine Rollen in der Konfiguration zur Liste "Adminrollen" hinzufügen. Richte außerdem die Befehlsberechtigungen in den Einstellungen deines Discord-Servers ein.</li>
    </ul>
</details>
<details>
    <summary>Der Bot reagiert nicht auf Versuche</summary>
    <ul>
        <li>Stelle sicher, dass im Kanal eine aktive Spielrunde läuft. Nutze <code>/guess-the-number create</code>, um eine zu starten.</li>
        <li>Stelle sicher, dass der Bot im Kanal die Berechtigung "Reaktionen hinzufügen" hat.</li>
    </ul>
</details>
<details>
    <summary>Der Spielkanalmodus startet keine Spiele automatisch</summary>
    <ul>
        <li>Stelle sicher, dass "Spielkanalmodus aktivieren?" aktiviert und ein gültiger Kanal ausgewählt ist.</li>
        <li>Prüfe, dass die kleinste Nummer kleiner als die höchste Nummer ist.</li>
    </ul>
</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden zu jeder Spielrunde gespeichert:

- Die ID des Kanals, in dem das Spiel stattfindet
- Die gesuchte Zahl sowie der Minimal-/Maximalbereich
- Die ID des Nutzers, der das Spiel erstellt hat (Ersteller)
- Die Gesamtanzahl der Versuche
- Ob das Spiel beendet wurde
- Metadaten zum Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Wenn die Bestenliste aktiviert ist, werden zusätzlich pro Nutzer folgende Daten gespeichert:

- Die Discord-Nutzer-ID
- Gesamtanzahl der Versuche
- Gesamtanzahl der Siege

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
