# Automatisch löschen

Mit diesem Modul kannst du Nachrichten nach einer bestimmten Zeit löschen lassen, um den Kanal sauber zu halten.
(Nachrichten die älter als 14 Tage sind, können nicht mehr per Bot oder Automatischem, gelöscht werden)
Die maximale Zeit die Du einstellen kannst ist also - ( 13 Tage das sind 18720 Minuten )
Diese müssen dann Manuell gelöscht werden.

<ModuleOverview moduleName="auto-delete" />

---

## Funktionen {#features}

* Nachrichten in Kanälen nach einer bestimmten Zeit automatisch löschen
  * Optional kannst Du immer eine bestimmte Anzahl an Nachrichten in einem Kanal behalten
  * Kein Löschen angehefteter Nachrichten
* Nachrichten automatisch aus einem Sprachkanal löschen, nachdem jedes Mitglied den Kanal verlassen hat
  * Füge optional eine Verzögerung vor dem Löschen der Nachricht hinzu

## Setup {#setup}

* Stell sicher, dass Dein Bot über die Berechtigungen „Nachrichten verwalten“, „Kanal anzeigen“ und „Nachrichtenverlauf anzeigen“ für den von Dir verwendeten Kanal verfügt
  und du die Funktion Aktiviert hast.
* Um das automatische Löschen von Nachrichten einzurichten, öffne
  die [Text-Channels](https://scnx.app/de/glink?page=bot/configuration?file=auto-delete%7Cchannels) Konfigurationsdatei und
  1. Klick auf „Neues Konfigurationselement hinzufügen“.
  2. Wähle den Kanal aus, für den dieses Konfigurationselement gelten soll.
  3. Konfiguriere das Element wie [hier] beschrieben (#config-channels).
  4. Lade Deinen Bot neu, um die Änderungen zu übernehmen.
* Um das automatische Löschen von Nachrichten in Sprachkanälen einzurichten, nachdem jeder Benutzer den Kanal verlassen hat, öffnen
  die [Voice-Channels](https://scnx.app/de/glink?page=bot/configuration?file=auto-delete%7Cvoice-channels) Konfigurationsdatei und
  1. Klick auf „Neues Konfigurationselement hinzufügen“.
  2. Wähle den Kanal aus, für den dieses Konfigurationselement gelten soll.
  3. Konfiguriere das Element wie [hier] beschrieben (#config-voice-channels).
  4. Lade Deinen Bot neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nach einrichten der Konfiguration arbeitet der Bot automatisch im Hintergrund, ohne dass eine Benutzeraktion erforderlich ist. Um Nachrichten
vor dem löschen zu bewahren Pinge sie einfach an.

## Konfiguration {#configuraiton}

### Textkanäle {#config-channels}

Mit dieser Konfigurationsdatei kannst Du festlegen, von welchen Kanälen Nachrichten automatisch gelöscht werden sollen. Öffnen
Dein [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=auto-delete%7Cchannels).

| Konfigurationsoption | Beschreibung |
|-------------|-------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------|
| Kanal | Dies ist der Kanal, auf den dieser spezifische Befehlssatz angewendet werden soll. In diesem Kanal wird die automatische Löschung durchgeführt. |
| Zeitüberschreitung | Dies ist die Zeitspanne (in Minuten), nach der an diesen Kanal gesendete Nachrichten automatisch gelöscht werden sollen. Um langsamen Geräten (und langsamen Lesern) gerecht zu werden, empfehlen wir, die Zeit auf über zwei Minuten einzustellen. |
| Beim Start bereinigen | Wenn diese Option aktiviert ist, löscht Ihr Bot automatisch jede Nachricht im Kanal (für den diese Konfigurationsoptionen gelten) beim Neustart Ihres Bots. Wenn deaktiviert, werden keine vorhandenen Nachrichten gelöscht. Aufgrund einer Einschränkung seitens Discord kann der Bot nur bis zu 100 Nachrichten gleichzeitig löschen und keine Nachrichten, die älter als 14 Tage sind. |
| Die maximale Zeit die Du einstellen kannst ist also - 18720 Minuten, das sind 13 Tage |
| Anzahl der aufzubewahrenden Nachrichten | Wenn diese Option aktiviert ist, ist diese Anzahl an Nachrichten immer von der automatischen Löschung ausgenommen. Die neuesten Nachrichten bleiben immer erhalten, d. h. sobald mehr als x Nachrichten in diesen Kanal gesendet werden, löscht der Bot die älteste. Diese Zahl muss unter 50 liegen. |

### Sprachkanäle {#config-voice-channels}

Diese Konfigurationsdatei ermöglicht,
von welchen Kanälen Nachrichten automatisch gelöscht werden sollen
sobald alle Benutzer den Sprachkanal verlassen haben.
Öffne Dein [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=auto-delete%7Cvoice-channels).

| Konfigurationsoption | Beschreibung |
|--------|------------ -------------------------------------------------- -------------------------------------------------- -----------------------------------------------|
| Kanal | Dies ist der Kanal, auf den dieser spezifische Befehlssatz angewendet werden soll. Die automatische Löschung wird in diesem Kanal durchgeführt, sobald alle Mitglieder den Kanal verlassen haben. |
| Zeitüberschreitung | Dies ist die Verzögerung (in Minuten) zwischen dem letzten Verlassen des Kanals durch den Benutzer und der Durchführung des Löschvorgangs. Setzen Sie diesen Wert auf Null, um das sofortige Löschen zu ermöglichen. |
| Beim Start bereinigen | Wenn diese Option aktiviert ist, löscht Ihr Bot beim Neustart Ihres Bots jede Nachricht, wenn kein Mitglied im Sprachkanal vorhanden ist. Wenn deaktiviert, werden keine vorhandenen Nachrichten gelöscht. |

## Fehlerbehebung {#troubleshooting}

Wenn die automatische Löschung nicht durchgeführt wird, überprüfe bitte Folgendes:

* Dein Bot benötigt folgende Rechte auf deinem Kanal: „Kanal anzeigen“, „Nachrichten verwalten“, „Nachrichtenverlauf anzeigen“, auf dem die Automatische Löschung durchgeführt werden soll.
* Bitte stell sicher, dass die Anzahl der zu behaltenden Nachrichten unter 50 liegt.
* Bitte stell sicher, dass neue Nachrichten an den Kanal gesendet wurden, wenn Du „Beim Start löschen“ nicht aktiviert hast.
* Bitte stell sicher, dass die Nachricht, die Du löschen möchten, nicht angepinnt ist.
