# YouTube-Benachrichtigungen

Sende eine Nachricht in einen Kanal, wenn ein YouTube-Kanal ein neues Video veröffentlicht oder einen Livestream startet.

<ModuleOverview moduleName="youtube-notifications" />

## Funktionen {#features}

- Erhalte Benachrichtigungen in einem Discord-Kanal, wenn ein YouTube-Kanal ein neues Video hochlädt.
- Erhalte Benachrichtigungen, wenn ein YouTube-Kanal einen Livestream startet.
- Filtere YouTube Shorts optional aus den Videobenachrichtigungen heraus.
- Überspringe optional bevorstehende oder geplante Premieren und Livestreams in den Videobenachrichtigungen, bis sie als reguläres Video veröffentlicht wurden.
- Weise dem Discord-Account des YouTubers optional eine "Live"-Rolle zu, solange er streamt, und entferne sie, wenn er offline geht.
- Erstelle optional für jedes angekündigte Video oder jeden Livestream ein Discord-Event.
- Überwache mehrere YouTube-Kanäle gleichzeitig, jeweils mit eigenem Benachrichtigungskanal und Nachrichtenformat.
- Passe die Benachrichtigungsnachrichten mit Details wie Kanalname, Titel, Beschreibung, URL und Thumbnail an.

## Einrichtung {#setup}

1. Öffne die [Konfiguration der YouTube-Kanäle (Videobenachrichtigungen)](https://scnx.app/de/glink?page=bot/configuration?file=youtube-notifications%7Cchannels), um Benachrichtigungen für Video-Uploads einzurichten, oder die [Konfiguration der YouTube-Kanäle (Livebenachrichtigungen)](https://scnx.app/de/glink?page=bot/configuration?file=youtube-notifications%7Clive-channels), um Benachrichtigungen für Livestreams einzurichten.
2. Klicke auf "Neuen YouTube-Kanal hinzufügen" und konfiguriere ihn wie im [Konfigurationsabschnitt](#configuration) beschrieben.
3. Stelle sicher, dass der Bot im konfigurierten Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.
4. Wenn du die Live-Rollen-Funktion nutzen möchtest (nur bei Livestream-Benachrichtigungen), stelle sicher, dass der Bot die Berechtigung "Rollen verwalten" hat und die Rolle des Bots höher positioniert ist als die konfigurierte Live-Rolle.
5. Wenn du die Discord-Event-Funktion nutzen möchtest, stelle sicher, dass der Bot die Berechtigung "Events erstellen" auf deinem Server hat.
6. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nach der [Einrichtung](#setup) und [Konfiguration](#configuration) dieses Moduls sind keine weiteren Aktionen erforderlich. Der Bot prüft die konfigurierten YouTube-Kanäle automatisch alle 60 Sekunden auf neue Videos und Livestreams, sodass Benachrichtigungen für Livestarts und Uploads meist innerhalb etwa einer Minute eintreffen. Eine Überlappungssperre verhindert, dass eine langsame Prüfung eine zweite parallel startet, sodass Benachrichtigungen nie doppelt gesendet werden.

- Wenn ein neues **Video** hochgeladen wird, wird die konfigurierte Benachrichtigungsnachricht in den angegebenen Discord-Kanal gesendet. Nur Videos, die innerhalb der letzten 24 Stunden veröffentlicht wurden, lösen Benachrichtigungen aus.
- Wenn ein Kanal einen **Livestream** startet, wird die konfigurierte Benachrichtigungsnachricht gesendet. Ist die Live-Rollen-Funktion aktiviert, wird die konfigurierte Rolle dem Discord-Account des YouTubers hinzugefügt, sobald er live geht, und entfernt, wenn der Stream endet.
- Ist **Discord-Event erstellen?** aktiviert, erstellt der Bot zusätzlich ein [Discord-Event](#discord-events) für das Video oder den Livestream.

### Discord-Events {#discord-events}

Für jeden YouTube-Kanal-Eintrag kannst du optional festlegen, dass der Bot zusammen mit der Benachrichtigung ein geplantes Discord-Event erstellt. Das Event verwendet den YouTube-Link als Ort (Typ "Extern"), das Thumbnail als Titelbild und die gekürzte Beschreibung als Event-Beschreibung.

- **Livestreams:** Das Event startet sofort, wenn der Stream angekündigt wird. Ist **Event beenden, wenn der Stream endet?** aktiviert, wird das Event beendet, sobald der Stream als offline erkannt wird. Das dauert bis zu etwa 3 Minuten, da der Bot drei aufeinanderfolgende Prüfungen ohne Livestream abwartet. Ohne diese Option oder wenn der Stream nie als offline erkannt wird, endet das Event automatisch nach 24 Stunden.
- **Videos:** Das Event endet nach der konfigurierten **Event-Dauer (Stunden)** (standardmäßig 24 Stunden, maximal 720 Stunden).
- Pro Video oder Livestream wird auf deinem Server nur ein Event erstellt, auch wenn mehrere Einträge denselben YouTube-Kanal abdecken.
- Fehlt dem Bot die Berechtigung "Events erstellen" oder kann das Event nicht erstellt werden, wird das einmalig im Log deines Bots gemeldet und die normale Benachrichtigung wird trotzdem gesendet.

## Konfiguration {#configuration}

Dieses Modul hat zwei Konfigurationsdateien: eine für Benachrichtigungen zu Video-Uploads und eine für Benachrichtigungen zu Livestreams.

### YouTube-Kanäle (Videobenachrichtigungen) {#configuration-channels}

In dieser Konfigurationsdatei kannst du YouTube-Kanäle einrichten, die auf neue Video-Uploads überwacht werden sollen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=youtube-notifications%7Cchannels).

| Feld                                              | Beschreibung                                                                                                                                                                                                                               |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Kanal                                             | Der Discord-Kanal, in dem die Benachrichtigung gesendet werden soll.                                                                                                                                                                       |
| YouTube @-Handle oder Kanal-ID                    | Der @-Handle oder die Kanal-ID des zu überwachenden YouTube-Kanals. Kanal-IDs, die mit `UC` beginnen, werden ebenfalls unterstützt.                                                                                                        |
| Shorts ignorieren?                                | Wenn aktiviert, werden keine Benachrichtigungen gesendet, wenn ein YouTube Short hochgeladen wird. Normale Videos lösen weiterhin Benachrichtigungen aus.                                                                                  |
| Künftige/geplante Premieren & Streams ignorieren? | Wenn aktiviert, lösen geplante Premieren und Livestreams keine Upload-Benachrichtigung aus, solange sie noch bevorstehen oder live sind. Die Benachrichtigung erfolgt normalerweise, sobald sie als reguläres Video veröffentlicht wurden. |
| Nachricht                                         | Die Nachricht, die in den konfigurierten Kanal gesendet wird, wenn ein neues Video hochgeladen wird. Unterstützt Embeds.<br/><i>Bitte überprüfe die verfügbaren Parameter in deinem Dashboard.</i>                                         |
| Discord-Event erstellen?                          | Wenn aktiviert, wird für jede Ankündigung eines neuen Videos ein Discord-Event erstellt. Der Bot benötigt die Berechtigung "Events erstellen". Standardmäßig deaktiviert.                                                                  |
| Event-Name                                        | Name des Discord-Events (wird auf 100 Zeichen gekürzt). Wird nur angezeigt, wenn Events aktiviert sind.<br/><i>Bitte überprüfe die verfügbaren Parameter in deinem Dashboard.</i>                                                          |
| Event-Dauer (Stunden)                             | Wie lange das Event dauern soll, von 1 bis 720 Stunden (Standard: 24). Wird nur angezeigt, wenn Events aktiviert sind.                                                                                                                     |

### YouTube-Kanäle (Livebenachrichtigungen) {#configuration-live-channels}

In dieser Konfigurationsdatei kannst du YouTube-Kanäle einrichten, die auf Livestreams überwacht werden sollen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=youtube-notifications%7Clive-channels).

| Feld                                  | Beschreibung                                                                                                                                                                                  |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal                                 | Der Discord-Kanal, in dem die Benachrichtigung gesendet werden soll.                                                                                                                          |
| YouTube @-Handle                      | Der @-Handle des Kanals, der auf Livestreams überwacht werden soll.                                                                                                                           |
| Nachricht                             | Die Nachricht, die in den konfigurierten Kanal gesendet wird, wenn der YouTube-Kanal live geht. Unterstützt Embeds.<br/><i>Bitte überprüfe die verfügbaren Parameter in deinem Dashboard.</i> |
| Live-Rolle aktivieren                 | Ob die Live-Rollen-Funktion für diesen YouTube-Kanal aktiviert werden soll.                                                                                                                   |
| Discord-Benutzer ID                   | Die Discord-Benutzer-ID des YouTubers. Nur erforderlich, wenn die Live-Rollen-Funktion aktiviert ist.                                                                                         |
| Live-Rolle                            | Die Rolle, die dem YouTuber zugewiesen wird, solange er live ist. Nur erforderlich, wenn die Live-Rollen-Funktion aktiviert ist.                                                              |
| Discord-Event erstellen?              | Wenn aktiviert, wird für jede Ankündigung eines Livestreams ein Discord-Event erstellt. Der Bot benötigt die Berechtigung "Events erstellen". Standardmäßig deaktiviert.                      |
| Event-Name                            | Name des Discord-Events (wird auf 100 Zeichen gekürzt). Wird nur angezeigt, wenn Events aktiviert sind.<br/><i>Bitte überprüfe die verfügbaren Parameter in deinem Dashboard.</i>             |
| Event beenden, wenn der Stream endet? | Wenn aktiviert (Standard), wird das Event beendet, sobald der Kanal nicht mehr live ist. Andernfalls endet es automatisch nach 24 Stunden. Wird nur angezeigt, wenn Events aktiviert sind.    |

## Fehlerbehebung {#troubleshooting}

<details>
<summary>Benachrichtigungen zu Video-Uploads werden nicht gesendet</summary>
<ul>
    <li>Stelle sicher, dass der YouTube @-Handle oder die Kanal-ID korrekt ist.</li>
    <li>Stelle sicher, dass der Bot im Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.</li>
    <li>Das Modul prüft alle 60 Sekunden auf neue Videos. Bitte warte auf den nächsten Prüfzyklus.</li>
    <li>Ist die Option "Shorts ignorieren?" aktiviert, lösen YouTube Shorts keine Benachrichtigungen aus.</li>
    <li>Ist die Option "Künftige/geplante Premieren & Streams ignorieren?" aktiviert, lösen Premieren und Livestreams erst eine Benachrichtigung aus, sobald sie als reguläres Video veröffentlicht wurden.</li>
    <li>Wenn ein YouTube-Kanal nicht gefunden werden kann, wird er übersprungen, bis der Bot neu gestartet oder die Konfiguration neu geladen wird.</li>
</ul>
</details>

<details>
<summary>Livestream-Benachrichtigungen werden nicht gesendet</summary>
<ul>
    <li>Stelle sicher, dass der YouTube @-Handle korrekt ist.</li>
    <li>Stelle sicher, dass der Bot im Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.</li>
    <li>Das Modul prüft alle 60 Sekunden auf Livestreams. Bitte warte auf den nächsten Prüfzyklus.</li>
</ul>
</details>

<details>
<summary>Die Live-Rolle wird nicht zugewiesen oder entfernt</summary>
<ul>
    <li>Stelle sicher, dass die Option "Live-Rolle aktivieren" für diesen YouTube-Kanal aktiviert ist.</li>
    <li>Überprüfe, ob die Discord-Benutzer-ID und die ID der Live-Rolle korrekt konfiguriert sind.</li>
    <li>Stelle sicher, dass der Bot die Berechtigung "Rollen verwalten" hat und die Rolle des Bots in den Servereinstellungen höher positioniert ist als die konfigurierte Live-Rolle.</li>
    <li>Der YouTuber muss Mitglied deines Discord-Servers sein.</li>
    <li>Live-Rollen werden beim Neustart des Bots bereinigt. Wurde die Rolle nach dem Ende eines Streams nicht entfernt, behebt ein Neustart des Bots das Problem.</li>
</ul>
</details>

<details>
<summary>Discord-Events werden nicht erstellt</summary>
<ul>
    <li>Stelle sicher, dass "Discord-Event erstellen?" für den YouTube-Kanal-Eintrag aktiviert ist.</li>
    <li>Stelle sicher, dass der Bot die Berechtigung "Events erstellen" auf deinem Server hat.</li>
    <li>Ein Event wird nur zusammen mit einer Benachrichtigung und pro Video oder Livestream nur einmal auf deinem Server erstellt.</li>
</ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden von diesem Modul gespeichert:

**Für jede gesendete Videobenachrichtigung:**

- Die YouTube-Video-ID
- Die Discord-Nachrichten-ID der Benachrichtigung
- Die Discord-Kanal-ID, in dem die Benachrichtigung gesendet wurde

**Für jede gesendete Livestream-Benachrichtigung:**

- Die YouTube-Livestream-ID
- Die Discord-Nachrichten-ID der Benachrichtigung
- Die Discord-Kanal-ID, in dem die Benachrichtigung gesendet wurde

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features#reset-module-database).
