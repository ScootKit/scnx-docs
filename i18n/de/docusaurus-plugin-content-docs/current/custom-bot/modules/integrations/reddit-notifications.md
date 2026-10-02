# Reddit-Benachrichtigungen

Erhalte Benachrichtigungen, wenn in deinem Lieblings-Subreddit neue Threads erstellt werden.

<ModuleOverview moduleName="reddit-notifications" />

## Funktionen {#features}

- Erhalte Benachrichtigungen in einem Discord-Kanal, wenn in den konfigurierten Subreddits neue Threads gepostet werden.
- Passe die Benachrichtigungsnachricht mit Details zum Thread an, z. B. Titel, Autor, URL und Medien.
- Überwache mehrere Subreddits gleichzeitig, jeweils mit eigenem Benachrichtigungskanal und eigenem Nachrichtenformat.

## Einrichtung {#setup}

1. Öffne die [Subreddits-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=reddit-notifications%7Csubreddits).
2. Klicke auf "Neues Element hinzufügen" und lege den Subreddit und den Benachrichtigungskanal fest, wie im [Konfigurationsabschnitt](#configuration) beschrieben.
3. Stelle sicher, dass der Bot im konfigurierten Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.
4. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nachdem du dieses Modul [eingerichtet](#setup) und [konfiguriert](#configuration) hast, sind keine weiteren Aktionen nötig. Der Bot prüft die konfigurierten Subreddits automatisch alle zehn Minuten auf neue Threads. Wird ein neuer Thread gefunden, wird die konfigurierte Benachrichtigungsnachricht in den angegebenen Discord-Kanal gesendet.

Nur Threads, die innerhalb der letzten zehn Stunden veröffentlicht wurden, lösen Benachrichtigungen aus. Ältere Threads werden also nicht rückwirkend gesendet.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du Subreddits einrichten, die auf neue Threads überwacht werden sollen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=reddit-notifications%7Csubreddits).

| Feld                           | Beschreibung                                                                                                                                                                                       |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal                          | Der Discord-Kanal, in dem die Benachrichtigung gesendet werden soll.                                                                                                                               |
| Subbredit-Name (r/\<NameHier>) | Der Name des Subreddits, der überwacht werden soll (der Teil nach `r/`).                                                                                                                           |
| Nachricht                      | Die Nachricht, die in den konfigurierten Kanal gesendet wird, wenn ein neuer Thread gepostet wird. Unterstützt Embeds.<br/><i>Bitte sieh dir die verfügbaren Parameter in deinem Dashboard an.</i> |

Bei jedem Durchlauf werden nur die 10 neuesten Threads eines Subreddits geprüft.

## Fehlerbehebung {#troubleshooting}

<details>
<summary>Benachrichtigungen werden nicht gesendet</summary>
<ul>
    <li>Stelle sicher, dass der Name des Subreddits korrekt geschrieben ist (ohne das Präfix <code>r/</code>).</li>
    <li>Prüfe, dass der Subreddit existiert und öffentlich erreichbar ist.</li>
    <li>Stelle sicher, dass der Bot im Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.</li>
    <li>Das Modul prüft alle zehn Minuten auf neue Threads. Bitte warte auf den nächsten Prüfdurchlauf.</li>
    <li>Kann ein Subreddit nicht erreicht werden, wird er übersprungen, bis der Bot neu gestartet oder die Konfiguration neu geladen wird.</li>
</ul>
</details>

## Gespeicherte Daten {#data-usage}

Zu jeder gesendeten Benachrichtigung werden folgende Daten gespeichert:

- Die Reddit-Thread-ID
- Die Discord-Nachrichten-ID der Benachrichtigung
- Die Discord-Kanal-ID, in den die Benachrichtigung gesendet wurde

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/de/docs/custom-bot/additional-features#reset-module-database).
