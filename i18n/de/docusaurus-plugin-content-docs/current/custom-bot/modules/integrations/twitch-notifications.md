# Twitch-Benachrichtigungen

Sende eine Nachricht in einen Kanal, wenn ein Streamer auf Twitch live geht.

<ModuleOverview moduleName="twitch-notifications" />

## Funktionen {#features}

- Erhalte Benachrichtigungen in einem Discord-Kanal, wenn ein konfigurierter Twitch-Streamer live geht.
- Passe die Benachrichtigungsnachricht mit Stream-Details wie Streamername, Spiel, Titel, Thumbnail und URL an.
- Weise dem Discord-Account des Streamers optional eine "Live"-Rolle zu, solange er streamt, und entferne sie, sobald er offline geht.
- Überwache mehrere Streamer gleichzeitig, jeweils mit eigenem Benachrichtigungskanal, Nachrichtenformat und eigener Live-Rolle.

## Einrichtung {#setup}

1. Öffne die [Konfiguration der Streamer](https://scnx.app/de/glink?page=bot/configuration?file=twitch-notifications%7Cconfigs%2Fstreamers).
2. Klicke auf "Neues Element hinzufügen" und konfiguriere den Streamer und den Benachrichtigungskanal wie im [Konfigurationsabschnitt](#configuration) beschrieben.
3. Stelle sicher, dass der Bot im konfigurierten Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.
4. Wenn du die Live-Rolle nutzen möchtest, stelle sicher, dass der Bot die Berechtigung "Rollen verwalten" hat und seine Rolle höher positioniert ist als die konfigurierte Live-Rolle.
5. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nach der [Einrichtung](#setup) und [Konfiguration](#configuration) dieses Moduls sind keine weiteren Aktionen erforderlich. Der Bot prüft automatisch alle drei Minuten, ob die konfigurierten Streamer live sind. Wenn ein Streamer live geht (oder einen neuen Stream startet), wird die konfigurierte Benachrichtigungsnachricht in den angegebenen Discord-Kanal gesendet.

Ist die Live-Rolle für einen Streamer aktiviert, wird die konfigurierte Rolle dem Discord-Account des Streamers hinzugefügt, sobald er live geht, und entfernt, sobald er den Stream beendet.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du die zu überwachenden Twitch-Streamer festlegen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=twitch-notifications%7Cconfigs%2Fstreamers).

| Feld                  | Beschreibung                                                                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Live-Nachricht        | Die Nachricht, die in den konfigurierten Kanal gesendet wird, wenn der Streamer live geht. Unterstützt Embeds.<br/><i>Die verfügbaren Parameter findest du in deinem Dashboard.</i> |
| Kanal                 | Der Discord-Kanal, in den die Live-Benachrichtigung gesendet werden soll.                                                                                                           |
| Streamer              | Der Twitch-Benutzername des zu überwachenden Streamers.                                                                                                                             |
| Live-Rolle Aktivieren | Ob die Live-Rolle für diesen Streamer aktiviert werden soll.                                                                                                                        |
| Discord-Benutzer ID   | Die Discord-Benutzer-ID des Streamers. Nur erforderlich, wenn die Live-Rolle aktiviert ist.                                                                                         |
| Live Rolle            | Die Rolle, die dem Streamer zugewiesen wird, solange er live ist. Nur erforderlich, wenn die Live-Rolle aktiviert ist.                                                              |

### Platzhalter für die Live-Nachricht {#placeholders}

Im Feld "Live-Nachricht" kannst du die folgenden Platzhalter verwenden:

| Platzhalter      | Beschreibung                                                            |
| ---------------- | ----------------------------------------------------------------------- |
| `%streamer%`     | Name des Streamers                                                      |
| `%game%`         | Spiel, welches gestreamt wird                                           |
| `%url%`          | Link zum Twitch-Stream                                                  |
| `%title%`        | Titel des Streams                                                       |
| `%thumbnailUrl%` | Link zum Thumbnail des Streams (kann als Bild in Embeds genutzt werden) |

## Fehlerbehebung {#troubleshooting}

<details>
<summary>Benachrichtigungen werden nicht gesendet</summary>
<ul>
    <li>Stelle sicher, dass der Twitch-Benutzername korrekt geschrieben ist.</li>
    <li>Prüfe, ob der Twitch-Account existiert.</li>
    <li>Stelle sicher, dass der Bot im Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.</li>
    <li>Das Modul prüft den Live-Status alle drei Minuten. Bitte warte auf den nächsten Prüfdurchlauf.</li>
</ul>
</details>

<details>
<summary>Die Live-Rolle wird nicht zugewiesen oder entfernt</summary>
<ul>
    <li>Stelle sicher, dass die Option "Live-Rolle Aktivieren" für diesen Streamer aktiviert ist.</li>
    <li>Prüfe, ob die Discord-Benutzer-ID und die Live-Rolle korrekt konfiguriert sind.</li>
    <li>Stelle sicher, dass der Bot die Berechtigung "Rollen verwalten" hat und seine Rolle in den Servereinstellungen höher positioniert ist als die konfigurierte Live-Rolle.</li>
    <li>Der Streamer muss Mitglied deines Discord-Servers sein.</li>
</ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden zu jedem überwachten Streamer gespeichert:

- Der Twitch-Benutzername des Streamers (wird als eindeutige Kennung verwendet)
- Der Zeitstempel, zu dem der aktuelle Stream gestartet wurde (wird verwendet, um neue Streams zu erkennen)
- Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/de/docs/custom-bot/additional-features#reset-module-database).
