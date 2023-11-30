# Automatische Veröffentlichung

Veröffentliche Nachrichten in Ankündigungskanälen

<ModuleOverview moduleName="auto-publisher" />

## Funktionen {#features}

* Veröffentliche automatisch Nachrichten, die in Ankündigungskanäle geschickt werden.
* Whiteliste oder Blackliste Kanäle vom Amtomatischen Veröffentlichen.
* Ignoriere Nachrichten, die von Bots gesendet wurden (optional).

## Einrichtung {#setup}

1. Stelle sicher, dass der Bot auf allen Ankündigungskanälen, von denen die Nachrichten veröffentlicht werden sollen, die Berechtigungen "Nachrichten verwalten" ("Manage messages") und "Nachrichten senden" ("Send message") hat.
2. [Konfiguriere](#configuration) das Modul.
3. Lade die Konfiguration neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nachrichten, welche in verfügbare Ankündigungskanäle gesendet werden (basierend auf deiner [Konfiguration](#configuration)), werden automatisch 
für alle Server veröffentlicht, die diesem Kanal folgen. 
Wenn das Modul eine Nachricht veröffentlicht, reagiert der Bot mit `✅`, um eine erfolgreiche Veröffentlichung anzuzeigen. Diese 
Reaktion wird automatisch nach einigen Sekunden entfernt.

## Konfiguration {#configuration}

Ohne Konfigurieren wird der Bot automatisch jede Nachricht veröffentlichen, die in einen Ankündigungskanal gesendet wird. Mit der Konfiguration 
kannst du das auf deinen Anwendungsfall anpassen.
Öffne [diese Datei in deinem Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=auto-publisher|config).

| Feld                               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nachrichten-Veröffentlichung-Modus | Dies legt fest, in welchen Ankündigungskanälen das Modul neue Nachrichten veröffentlicht. Die folgenden Optionen stehen zur Auswahl: <ul><li><code>all</code>: Das ist die Standardvariante. Nachrichten aus allen Ankündigungskanälen werden automatisch veröffentlicht.</li><li><code>whitelist</code>: Wenn diese Option gesetzt ist, werden nur Nachrichten aus Kanälen, die in das Feld "whitelist" hinzugefügt wurden, automatisch veröffentlicht.</li><li><code>blacklist</code>: Wenn diese Option gesetzt ist, werden nur Nachrichten aus Kanälen veröffentlicht, die nicht in das Feld "blacklist" hinzugefügt wurden.</li></ul> |
| Blacklist                          | *Dies funtkioniert nur, wenn du "Nachrichten-Veröffentlichung-Modus" zu "blacklist" gesetzt hast.*<br/>Nachrichten aus Kanälen, die in diesem Feld aufgelistet sind, werden nicht veröffentlicht.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Whitelist                          | *Dies funtkioniert nur, wenn du "Nachrichten-Veröffentlichung-Modus" zu "whitelist" gesetzt hast.*<br/>Nachrichten aus Kanälen, die in diesem Feld aufgelistet sind, werden automatisch veröffentlicht.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Bots ignorieren?                   | Wenn aktiviert, werden Nachrichten von Bots nicht automatisch veröffentlicht.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Fehlerbehebung {#troubleshooting}

Wenn du denkst, dass der Bot Nachrichten nicht automatisch veröffentlicht, stelle bitte sicher dass

* der aktuelle Kanal in das "Whitelist"-Feld hinzugefügt ist (wenn "Nachrichten-Veröffentlichung-Modus" in deiner [Konfiguration](#configuration) auf `whitelist`
  gesetzt ist).
* der aktuelle Kanal NICHT in das "Blacklist"-Feld hinzugefügt ist (wenn "Nachrichten-Veröffentlichung-Modus" in deiner [Konfiguration](#configuration) auf `blacklist`
  gesetzt ist).
* der Bot die Berechtigungen "Nachrichten verwalten" ("Manage messages") und "Nachrichten senden" ("Send message") auf dem aktuellen Kanal hat.
* die Nachricht, die du veröffentlichen möchtest, nicht von einem Bot gesendet wurde (außer du hast "Bots ignorieren?" 
  in deiner [Konfiguration](#configuration) deaktiviert).
* die Nachricht in einen Ankündignungskanal gesendet wurde und nicht bereits veröffentlicht wurde.
* die Anzahl der in den Ankündigungskanal gesendeten Nachrichten relativ gering ist (Discord erlaubt nur eine limiterte Anzahl an 
  Nachrichten, die veröffentlicht werden können).
