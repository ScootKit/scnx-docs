# Threads-Benachrichtigungen

Sende eine Nachricht in einen Kanal, wenn jemand einen neuen Thread auf Threads von Meta postet.

<ModuleOverview moduleName="threads-notifications" />

## Funktionen {#features}

- Erhalte Benachrichtigungen in einem Discord-Kanal, wenn ein Threads-Nutzer einen neuen Beitrag veröffentlicht.
- Überwache mehrere Threads-Konten gleichzeitig, jeweils mit eigenem Benachrichtigungskanal und eigenem Nachrichtenformat.
- Passe die Benachrichtigungsnachricht mit Details wie dem Nutzernamen, einer Beitragsvorschau und der URL an.

## Einrichtung {#setup}

1. Öffne die [Threads-Konten-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=threads-notifications%7Cusers).
2. Klicke auf "Neues Element hinzufügen" und lege den Threads-Nutzernamen und den Benachrichtigungskanal fest, wie im [Konfigurationsabschnitt](#configuration) beschrieben.
3. Stelle sicher, dass der Bot im konfigurierten Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.
4. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nachdem du dieses Modul [eingerichtet](#setup) und [konfiguriert](#configuration) hast, sind keine weiteren Aktionen nötig. Der Bot prüft die konfigurierten Threads-Konten automatisch alle fünfzehn Minuten auf neue Beiträge. Wird ein neuer Beitrag gefunden, wird die konfigurierte Benachrichtigungsnachricht in den angegebenen Discord-Kanal gesendet.

Nur Beiträge, die innerhalb der letzten 24 Stunden veröffentlicht wurden, lösen Benachrichtigungen aus. Ältere Beiträge werden also nicht rückwirkend gesendet.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du Threads-Konten einrichten, die auf neue Beiträge überwacht werden sollen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=threads-notifications%7Cusers).

| Feld              | Beschreibung                                                                                                                                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal             | Der Discord-Kanal, in dem die Benachrichtigung gesendet werden soll.                                                                                                                                                         |
| Thread-Nutzername | Der @Handle des Threads-Nutzers, von dem du Benachrichtigungen erhalten möchtest.                                                                                                                                            |
| Nachricht         | Die Nachricht, die in den konfigurierten Kanal gesendet wird, wenn der Nutzer einen neuen Thread auf Threads veröffentlicht. Unterstützt Embeds.<br/><i>Bitte sieh dir die verfügbaren Parameter in deinem Dashboard an.</i> |

### Nachrichten-Parameter {#message-parameters}

Du kannst folgende Parameter in der Nachricht verwenden:

| Parameter    | Beschreibung                 |
| ------------ | ---------------------------- |
| `%userName%` | Name des Threads-Nutzers     |
| `%url%`      | Link zum Beitrag auf Threads |
| `%preview%`  | Inhalt der Beitragsvorschau  |

Die Standardnachricht ist ein Embed mit dem Titel "🧵%userName% hat gerade auf Threads gepostet", der Beschreibung `%preview%` gefolgt von einem Link "Gesamten Inhalt auf Threads lesen" auf `%url%`, der Farbe `#2ccce4` und einem Button "Auf Threads öffnen", der auf `%url%` verlinkt.

Bei jedem Durchlauf wird nur der neueste Beitrag eines Kontos geprüft.

## Fehlerbehebung {#troubleshooting}

<details>
<summary>Benachrichtigungen werden nicht gesendet</summary>
<ul>
    <li>Stelle sicher, dass der Threads-Nutzername korrekt geschrieben ist (mit oder ohne das Präfix <code>@</code>).</li>
    <li>Prüfe, dass das Threads-Konto existiert und öffentlich erreichbar ist.</li>
    <li>Stelle sicher, dass der Bot im Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.</li>
    <li>Das Modul prüft alle fünfzehn Minuten auf neue Beiträge. Bitte warte auf den nächsten Prüfdurchlauf.</li>
    <li>Wird ein Threads-Konto nicht gefunden, wird es übersprungen, bis der Bot neu gestartet oder die Konfiguration neu geladen wird.</li>
</ul>
</details>

## Gespeicherte Daten {#data-usage}

Zu jeder gesendeten Benachrichtigung werden folgende Daten gespeichert:

- Die URL des Threads-Beitrags
- Die Discord-Nachrichten-ID der Benachrichtigung
- Die Discord-Kanal-ID, in den die Benachrichtigung gesendet wurde

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/de/docs/custom-bot/additional-features#reset-module-database).
