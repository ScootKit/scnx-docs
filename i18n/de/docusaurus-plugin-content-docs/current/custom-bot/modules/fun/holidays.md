# Winter-Feiertage

Füge einen Countdown bis Weihnachten hinzu und erstelle einen Adventskalender auf deinem Discord, um die Feiertage zu feiern!

<ModuleOverview moduleName="holidays" />

## Funktionen {#features}

- Weihnachts-/Neujahrs-Countdown, der als Name eines Sprachkanals oder einer Kategorie angezeigt und stündlich aktualisiert wird.
- Interaktiver Adventskalender mit 24 Türchen, die Benutzer im Dezember öffnen können.
- Anpassbare Nachrichten für jeden Kalendertag.
- Optionale Rollenbelohnungen für das Öffnen einzelner Tage oder aller 24 Tage.
- Optionale Zufallsanordnung der Buttons für ein spannenderes Adventskalender-Erlebnis.

## Einrichtung {#setup}

### Weihnachts-Countdown

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Öffne die [Countdown-Konfiguration](#config-countdown) und aktiviere sie.
3. Erstelle einen Sprachkanal oder eine Kategorie auf deinem Server und lege sie in der Konfiguration fest. Der Bot benennt diesen Kanal um, um den Countdown anzuzeigen.
4. Der Bot benötigt die Berechtigung "Kanäle verwalten" für den Countdown-Kanal.

### Adventskalender

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Öffne die [Adventskalender-Konfiguration](#config-calendar) und aktiviere sie.
3. Erstelle einen leeren Textkanal und lege ihn in der Konfiguration fest.
4. Passe die Nachricht für jeden der 24 Tage an und konfiguriere optional Rollenbelohnungen.
5. Der Bot benötigt die Berechtigungen "Nachrichten senden", "Nachrichtenverlauf anzeigen" und "Nachrichten verwalten" im Kalenderkanal.

## Nutzung {#usage}

### Weihnachts-Countdown

Sobald er aktiviert ist, aktualisiert der Bot den Namen des konfigurierten Kanals automatisch stündlich, um einen Countdown bis zum ausgewählten Datum (Heiligabend, erster Weihnachtstag oder Neujahr) anzuzeigen. Ist das Datum verstrichen, spiegelt der Kanalname das wider.

### Adventskalender

Der Bot sendet eine interaktive Nachricht im konfigurierten Kanal mit 24 Buttons (einer für jeden Tag). Im Dezember gilt:

- Benutzer können auf den Button des aktuellen Tages klicken, um das Türchen zu "öffnen" und eine angepasste Nachricht zu erhalten.
- Die Buttons für andere Tage sind deaktiviert (außer die Zufallsanordnung der Buttons ist aktiviert).
- Wenn für einen Tag Rollenbelohnungen konfiguriert sind, erhalten Benutzer diese Rollen automatisch beim Öffnen des Türchens.
- Benutzer, die alle 24 Türchen öffnen, können zusätzliche Belohnungsrollen erhalten.
- Jeder Benutzer kann jeden Tag nur einmal öffnen (außer das erneute Ansehen ist aktiviert).

## Konfiguration {#configuration}

### Weihnachtscountdown {#config-countdown}

In dieser Konfigurationsdatei kannst du den Weihnachts-Countdown einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=holidays%7Cconfigs/countdown).

| Feld            | Beschreibung                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| Aktiviert?      | Aktiviere oder deaktiviere die Countdown-Funktion.                                                             |
| Countdown-Kanal | Ein Sprachkanal oder eine Kategorie, deren Name aktualisiert wird, um den Countdown anzuzeigen.                |
| Countdown bis   | Wähle das Zieldatum: 24. Dezember (Heiligabend), 25. Dezember (erster Weihnachtstag) oder 1. Januar (Neujahr). |

### Adventskalender {#config-calendar}

In dieser Konfigurationsdatei kannst du den Adventskalender einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=holidays%7Cconfigs/advent-calendar).

| Feld                                                                        | Beschreibung                                                                                                                                                                     |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviert?                                                                  | Aktiviere oder deaktiviere die Adventskalender-Funktion.                                                                                                                         |
| Adventskalenderkanal                                                        | Ein leerer Textkanal, in dem die Adventskalender-Nachricht gesendet wird.                                                                                                        |
| Kalendernachricht                                                           | Die Hauptnachricht, die über den Kalender-Buttons angezeigt wird.                                                                                                                |
| "Bereits geöffnet" Nachricht                                                | Nachricht, die angezeigt wird, wenn ein Benutzer versucht, ein bereits geöffnetes Türchen erneut zu öffnen.                                                                      |
| Belohnungsrollen für das Öffnen aller Türchen (optional)                    | Rollen, die Benutzer erhalten, die alle 24 Türchen öffnen.                                                                                                                       |
| Nutzern erlauben, die Kalendernachricht am aktuellen Tag mehrfach zu sehen? | Wenn aktiviert, können Benutzer die Nachricht des Tages erneut ansehen, nachdem sie das Türchen geöffnet haben.                                                                  |
| Knöpfe stündlich mixen?                                                     | Wenn aktiviert, wird die Reihenfolge der Buttons jede Stunde neu gemischt. Alle Buttons sind anklickbar, aber nur das Türchen des aktuellen Tages lässt sich erfolgreich öffnen. |
| Nachricht beim Öffnen von falschen Tagen                                    | Nachricht, die angezeigt wird, wenn ein Benutzer versucht, ein Türchen zu öffnen, das nicht das heutige ist.                                                                     |
| Tag 1-24 Öffnungsnachricht                                                  | Die Nachricht, die angezeigt wird, wenn ein Benutzer das Türchen des jeweiligen Tages öffnet. Jeder Tag hat seine eigene konfigurierbare Nachricht.                              |
| Tag 1-24 Belohnungsrollen (optional)                                        | Rollen, die Benutzer erhalten, wenn sie das Türchen des jeweiligen Tages öffnen.                                                                                                 |
| Emojis                                                                      | Die Emojis, die auf den Kalender-Buttons angezeigt werden. Du kannst für jeden Tag (1-24) ein Emoji festlegen.                                                                   |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Der Countdown-Kanal wird nicht aktualisiert</summary>
    <ul>
        <li>Stelle sicher, dass der Countdown in der Konfiguration aktiviert ist.</li>
        <li>Stelle sicher, dass der Bot die Berechtigung "Kanäle verwalten" für den ausgewählten Kanal hat.</li>
        <li>Beachte, dass der Kanalname stündlich aktualisiert wird. Außerdem begrenzt Discord die Häufigkeit von Kanalnamen-Änderungen.</li>
    </ul>
</details>
<details>
    <summary>Die Buttons des Adventskalenders werden nicht angezeigt</summary>
    <ul>
        <li>Stelle sicher, dass der Adventskalender aktiviert und ein gültiger, leerer Textkanal konfiguriert ist.</li>
        <li>Stelle sicher, dass der Bot die benötigten Berechtigungen im Kalenderkanal hat.</li>
    </ul>
</details>
<details>
    <summary>Benutzer erhalten keine Rollenbelohnungen</summary>
    <ul>
        <li>Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie des Servers höher ist als die Belohnungsrollen.</li>
        <li>Überprüfe, ob die Rollen für den jeweiligen Tag korrekt konfiguriert sind.</li>
    </ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden für jedes geöffnete Türchen des Adventskalenders gespeichert:

- Die Benutzer-ID des Benutzers, der das Türchen geöffnet hat
- Die Nummer des geöffneten Tages
- Das Jahr des Öffnens
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
