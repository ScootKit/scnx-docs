# RSS-Benachrichtigungen

Sende eine Nachricht in einen Kanal, wenn ein neuer Inhalt in einem RSS- oder Atom-Feed erscheint.

<ModuleOverview moduleName="rss-notifications" />

## Funktionen {#features}

- Erhalte Benachrichtigungen in einem Discord-Kanal, wenn neue Inhalte in einem beliebigen RSS- oder Atom-Feed erscheinen.
- Passe die Benachrichtigungsnachricht mit Details zum Eintrag an, z. B. Titel, Beschreibung, URL, Veröffentlichungsdatum und Medien.
- Überwache mehrere Feeds gleichzeitig, jeweils mit eigenem Benachrichtigungskanal und eigenem Nachrichtenformat.
- Unterstützt die Extraktion von Medien aus Feed-Einträgen, einschließlich Bildern aus den Elementen media:content, media:thumbnail und enclosure. Ist keines davon vorhanden, wird das erste Bild im HTML-Inhalt oder in der Beschreibung des Eintrags verwendet.

## Einrichtung {#setup}

1. Öffne die [Feeds-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=rss-notifications%7Cfeeds).
2. Klicke auf "Neues Element hinzufügen" und lege die Feed-URL und den Benachrichtigungskanal fest, wie im [Konfigurationsabschnitt](#configuration) beschrieben.
3. Stelle sicher, dass der Bot im konfigurierten Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.
4. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nachdem du dieses Modul [eingerichtet](#setup) und [konfiguriert](#configuration) hast, sind keine weiteren Aktionen nötig. Der Bot prüft die konfigurierten Feeds automatisch alle fünfzehn Minuten auf neue Einträge. Wird ein neuer Eintrag gefunden, wird die konfigurierte Benachrichtigungsnachricht in den angegebenen Discord-Kanal gesendet.

Nur Einträge, die innerhalb der letzten dreißig Minuten veröffentlicht wurden, lösen Benachrichtigungen aus. Ältere Einträge werden also nicht rückwirkend gesendet.

Feeds werden von SCNX-Servern und nicht von deinem Bot abgerufen, und Ergebnisse können einige Minuten alt sein, weil SCNX sie zwischenspeichert. Ein Feed, der nur aus einem privaten Netzwerk erreichbar ist, funktioniert nicht. Anbieter können uns bitten, ihren Feed nicht mehr abzurufen. Hat ein Anbieter widersprochen, kann der Feed nicht geprüft werden und eine Warnung in das Log deines Bots geschrieben.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du Feeds einrichten, die auf neue Inhalte überwacht werden sollen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=rss-notifications%7Cfeeds).

| Feld               | Beschreibung                                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal              | Der Discord-Kanal, in dem die Benachrichtigung gesendet werden soll.                                                                                                                                    |
| RSS-/Atom-Feed-URL | Die URL zu einem gültigen RSS- oder Atom-Feed. Der Feed wird alle fünfzehn Minuten geprüft.                                                                                                             |
| Nachricht          | Die Nachricht, die in den konfigurierten Kanal gesendet wird, wenn ein neuer Eintrag im Feed erscheint. Unterstützt Embeds.<br/><i>Bitte sieh dir die verfügbaren Parameter in deinem Dashboard an.</i> |

Bei jedem Durchlauf werden nur die 10 neuesten Einträge eines Feeds geprüft, und Beschreibungen von Einträgen werden auf 920 Zeichen gekürzt.

## Fehlerbehebung {#troubleshooting}

<details>
<summary>Benachrichtigungen werden nicht gesendet</summary>
<ul>
    <li>Stelle sicher, dass die Feed-URL eine gültige RSS- oder Atom-Feed-URL ist.</li>
    <li>Prüfe, dass der Feed öffentlich aus dem Internet erreichbar ist und gültiges XML zurückgibt. Feeds hinter einem Login oder in einem privaten Netzwerk können nicht abgerufen werden.</li>
    <li>Manche Anbieter blockieren Anfragen aus Rechenzentren. Funktioniert dein Feed in deinem Browser, aber hier nicht, blockiert der Anbieter möglicherweise SCNX-Server.</li>
    <li>Stelle sicher, dass der Bot im Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.</li>
    <li>Das Modul prüft alle fünfzehn Minuten auf neue Einträge. Bitte warte auf den nächsten Prüfdurchlauf.</li>
    <li>Beachte, dass Feeds normalisiert werden. Das bedeutet, dass nicht für jeden Feed alle Werte verfügbar sind.</li>
</ul>
</details>

<details>
<summary>Medienbilder werden in Benachrichtigungen nicht angezeigt</summary>
<ul>
    <li>Für die Medien-Extraktion werden nur Bildformate (PNG, JPEG, WebP, GIF) unterstützt.</li>
    <li>Der Feed-Eintrag muss Medien in einem unterstützten Format über die Elemente <code>media:content</code>, <code>media:thumbnail</code> oder <code>enclosure</code> enthalten.</li>
    <li>Stelle sicher, dass du den Parameter <code>%mediaURL%</code> in der Konfiguration deiner Benachrichtigungsnachricht verwendest.</li>
</ul>
</details>

## Gespeicherte Daten {#data-usage}

Zu jeder gesendeten Benachrichtigung werden folgende Daten gespeichert:

- Die Eintrags-ID (oder der Link, falls keine ID verfügbar ist)
- Die Discord-Nachrichten-ID der Benachrichtigung
- Die Discord-Kanal-ID, in den die Benachrichtigung gesendet wurde

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/de/docs/custom-bot/additional-features#reset-module-database).
