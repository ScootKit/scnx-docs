# Automatisches Löschen

Mit diesem Modul kannst du Nachrichten nach einer bestimmten Zeit löschen lassen, um den Kanal sauber zu halten.

<ModuleOverview moduleName="auto-delete" />

---

## Funktionen {#features}

* Lösche Nachrichten in Kanälen nach einer bestimmten Zeit automatisch
  * Optional kannst du immer eine bestimmte Anzahl an Nachrichten in einem Kanal behalten
  * Angepinnte Nachrichten werden nicht gelöscht
* Automatische Löschung von Nachrichten aus Sprachkanälen, nachdem jedes Mitglied den Kanal verlassen hat
  * Füge optional eine Verzögerung vor dem Löschen der Nachrichten hinzu

## Einrichtung {#setup}

* Stelle sicher, dass dein Bot über die Berechtigungen „Nachrichten verwalten“, „Kanal anzeigen“ und „Nachrichtenverlauf anzeigen“ für den von dir verwendeten Kanal verfügt
* Um das automatische Löschen von Nachrichten einzurichten, öffne
  die [Text-Kanäle](https://scnx.app/de/glink?page=bot/configuration?file=auto-delete%7Cchannels)-Konfigurationsdatei und
  1. Klicke auf „Neues Konfigurationselement hinzufügen“.
  2. Wähle den Kanal aus, für den dieses Konfigurationselement gelten soll.
  3. Konfiguriere das Element wie [hier](#config-channels) beschrieben.
  4. Lade deinen Bot neu, um die Änderungen zu übernehmen.
* Um das automatische Löschen von Nachrichten in Sprachkanälen einzurichten, nachdem jeder Benutzer den Kanal verlassen hat, öffne
  die [Sprach-Kanäle](https://scnx.app/de/glink?page=bot/configuration?file=auto-delete%7Cvoice-channels)-Konfigurationsdatei und
  1. Klicke auf „Neues Konfigurationselement hinzufügen“.
  2. Wähle den Kanal aus, für den dieses Konfigurationselement gelten soll.
  3. Konfiguriere das Element wie [hier](#config-voice-channels) beschrieben.
  4. Lade deinen Bot neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nach Einrichten der Konfiguration arbeitet der Bot automatisch im Hintergrund, ohne dass Benutzeraktionen erforderlich ist. Um Nachrichten
vor dem Löschen zu bewahren, pinne sie einfach an.

## Konfiguration {#configuraiton}

### Textkanäle {#config-channels}

Mit dieser Konfigurationsdatei kannst du festlegen, von welchen Kanälen Nachrichten automatisch gelöscht werden sollen. Öffne
sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=auto-delete%7Cchannels).

| Konfigurationsoption                  | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                      |
|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kanal                                 | Dies ist der Kanal, auf den diese Konfigurationswerte angewendet werden sollen. In diesem Kanal wird die automatische Löschung durchgeführt.                                                                                                                                                                                                                                                      |
| Timeout                               | Dies ist die Zeitspanne (in Minuten), nach der in diesen Kanal gesendete Nachrichten automatisch gelöscht werden sollen. Um langsamen Geräten (und langsamen Lesern) gerecht zu werden, empfehlen wir, die Zeit auf über zwei Minuten einzustellen.                                                                                                                                               |
| Kanal beim Start leeren               | Wenn diese Option aktiviert ist, löscht dein Bot automatisch jede Nachricht im Kanal (für den diese Konfigurationsoptionen gelten) beim Neustart deines Bots. Wenn deaktiviert, werden keine vorhandenen Nachrichten gelöscht. Aufgrund einer Einschränkung seitens Discord kann der Bot nur bis zu 100 Nachrichten auf einmal löschen und keine Nachrichten löschen, die älter als 14 Tage sind. |
| Anzahl von zu behaltenden Nachrichten | Wenn diese Option aktiviert ist, wird diese Anzahl an Nachrichten immer von der automatischen Löschung ausgenommen. Die neuesten Nachrichten bleiben immer erhalten, d. h. sobald mehr als x Nachrichten in diesen Kanal gesendet werden, löscht der Bot die ältesten. Diese Zahl muss unter 50 liegen.                                                                                           |

### Sprachkanäle {#config-voice-channels}

Mit dieser Konfigurationsdatei kannst du einstellen, von welchen Kanälen Nachrichten automatisch gelöscht werden sollen, sobald alle Benutzer den Sprachkanal verlassen haben.
Du kannst diese Datei in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=auto-delete%7Cvoice-channels) öffnen.

| Konfigurationsoption    | Beschreibung                                                                                                                                                                                                                    |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kanal                   | Dies ist der Kanal, auf den diese Konfigurationswerte angewendet werden sollen. Die automatische Löschung wird in diesem Kanal durchgeführt, sobald alle Mitglieder den Kanal verlassen haben.                                  |
| Timeout                 | Dies ist die Verzögerung (in Minuten) zwischen dem letzten Verlassen des Kanals durch den Benutzer und der Durchführung des Löschvorgangs. Setzen Sie diesen Wert auf Null, um sofort bei Verlassen die Löschung durchzuführen. |
| Kanal beim Start leeren | Wenn diese Option aktiviert ist, löscht dein Bot beim Neustart deines Bots jede Nachricht, wenn kein Mitglied im Sprachkanal ist. Wenn deaktiviert, werden keine vorhandenen Nachrichten gelöscht.                              |

## Fehlerbehebung {#troubleshooting}

Wenn die automatische Löschung nicht durchgeführt wird, überprüfe bitte Folgendes:

* Dein Bot benötigt folgende Rechte auf den Kanal, in dem die automatische Löschung durchgeführt werden soll: „Kanal anzeigen“, „Nachrichten verwalten“, „Nachrichtenverlauf anzeigen“.
* Bitte stelle sicher, dass die Anzahl der zu behaltenden Nachrichten unter 50 liegt.
* Bitte stelle sicher, dass neue Nachrichten in den Kanal gesendet wurden, wenn du „Kanal beim Start leeren“ nicht aktiviert hast.
* Bitte stelle sicher, dass die Nachricht, die du löschen möchtest, nicht angepinnt ist.