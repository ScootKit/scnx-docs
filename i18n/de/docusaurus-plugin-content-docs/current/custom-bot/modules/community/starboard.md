# Starboard

Lass Nutzer Nachrichten in einen Starboard-Kanal hervorheben, indem sie darauf reagieren.

<ModuleOverview moduleName="starboard" />

## Funktionen {#features}

- Nutzer können lustige, interessante oder anderweitig bemerkenswerte Nachrichten durch eine Reaktion hervorheben.
- Begrenze die Anzahl an Sternen, die ein Nutzer pro Stunde vergeben kann, damit wirklich besondere Nachrichten hervorgehoben werden.
- Schließe Rollen und Kanäle aus, um unerwünschte Nachrichten aus dem Starboard fernzuhalten.
- Bildanhänge an gestarrten Nachrichten werden automatisch in die [Dateibibliothek](/docs/scnx/guilds/files) deines Servers archiviert, sodass alte Starboard-Posts ihre Bilder behalten, auch nachdem Discords CDN-URLs abgelaufen sind.

## Einrichtung {#setup}

- Erstelle zunächst einen Kanal auf deinem Server, der als Starboard-Kanal genutzt wird.
  Stelle sicher, dass der Bot die Berechtigungen `Kanal anzeigen`, `Nachrichten senden`,
  `Nachrichtenverlauf sehen` und `Links einbetten` in diesem Kanal hat.
- Anschließend kannst du das Modul [konfigurieren](#configuration). Hier kannst du unter anderem den Starboard-Kanal auswählen.

## Nutzung {#usage}

- Sobald das Modul [eingerichtet](#setup) ist, können Nutzer auf Nachrichten mit dem konfigurierten Starboard-Emoji reagieren.
- Solange sie ihr Sterne-Kontingent pro Stunde nicht ausgenutzt haben, wird die Nachricht entweder in den Starboard-Kanal gesendet oder die Anzahl der Sterne wird um eins erhöht.

### Dauerhafte Bildarchivierung {#image-archival}

Sobald eine Nachricht ins Starboard gepostet wird, werden alle Bildanhänge in die [Dateibibliothek](/docs/scnx/guilds/files) deines Servers hochgeladen, und der Starboard-Post verwendet diese dauerhafte URL. So brechen alte Starboard-Einträge nicht mehr, sobald Discords kurzlebige CDN-URLs ablaufen.

Archivierte Bilder zählen auf das [Datei-Speicherkontingent](/docs/scnx/guilds/files#understanding-storage-limits) deines Servers. Um dies zu deaktivieren, aktiviere **Anhang-Archivierung deaktivieren** in der allgemeinen Konfiguration des Bots; in diesem Fall greift das Starboard wieder auf Discords ablaufende URLs zurück, und alte Posts werden mit der Zeit erneut defekt sein.

## Konfiguration {#configuration}

In der Konfiguration kannst du den Starboard-Kanal, die Nachricht und die Nutzungsmöglichkeiten für Nutzer in Discord festlegen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=starboard%7Cconfig).

| Feld                         | Beschreibung                                                                                                                                                                                                                             |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Starboard-Kanal              | Hier wird der Kanal festgelegt, in den Nachrichten mit Sternen von Nutzern gesendet werden.                                                                                                                                              |
| Emoji                        | Nutzer können eine Nachricht mit diesem Emoji "starren" – einfach durch eine Reaktion mit dem Emoji.                                                                                                                                     |
| Nachricht                    | Dies ist die Nachricht, die im Starboard-Kanal gepostet wird, wenn Nutzer auf eine Nachricht mit dem konfigurierten Emoji reagieren. Verfügbare Parameter siehst du im Dashboard.                                                        |
| Ausgenommene Kanäle          | In diesen Kanälen können Nutzer keine Nachrichten starren. Die Reaktion wird nicht entfernt, aber der Bot ignoriert sie einfach.                                                                                                         |
| Ausgenommene Rollen          | Mitglieder dieser Rollen können keine Nachrichten starren. Die Reaktion bleibt, aber der Bot ignoriert sie.                                                                                                                              |
| Mindestanzahl Sterne         | Die Mindestanzahl an Sternen, die eine Nachricht braucht, um in den Starboard-Kanal gesendet zu werden. Mehrfachreaktionen zählen wie eine normale Reaktion.                                                                             |
| Sterne pro Nutzer pro Stunde | Legt fest, wie oft ein Nutzer pro Stunde auf Nachrichten reagieren kann. Es gilt ein "dynamisches Fenster", d.h. wenn das Limit auf 10 steht und ein Nutzer um 12:00 fünfmal und um 12:30 noch fünfmal reagiert, ist das Limit erreicht. |
| Self-Star                    | Legt fest, ob Nutzer ihre eigenen Nachrichten starren können. Wenn sie auf ihre eigene Nachricht reagieren, wird die Reaktion entfernt, um Verwirrung zu vermeiden.                                                                      |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Es passiert nichts beim Reagieren</summary>
  <ul>
    <li>Stelle sicher, dass du einen gültigen Starboard-Kanal ausgewählt hast und der Bot mindestens die Berechtigungen <code>Kanal anzeigen</code>, <code>Nachrichten senden</code>,
      <code>Nachrichtenverlauf lesen</code> und <code>Links einbetten</code> besitzt.</li>
    <li>Stelle sicher, dass das Starboard-Emoji korrekt und gültig ist.</li>
    <li>Stelle sicher, dass Nutzer tatsächlich mit dem Starboard-Emoji reagieren.</li>
    <li>Stelle sicher, dass deine konfigurierte Starboard-Nachricht gültig ist – prüfe ggf. den Fehler-Log im Dashboard.</li>
    <li>Stelle sicher, dass die Nutzer ihr Sternen-Limit in der letzten Stunde nicht überschritten haben. Versuche, das Limit zu erhöhen oder warte, bis das Zeitfenster abgelaufen ist.</li>
  </ul>
</details>

<details>
  <summary>Reaktionen in altersbeschränkten (NSFW) Kanälen werden nicht gepostet</summary>
  <p>Um zu verhindern, dass altersbeschränkte Inhalte in Kanäle ohne Altersbeschränkung gelangen, ignoriert der Bot stillschweigend Sterne auf Nachrichten aus einem altersbeschränkten Kanal, wenn der Starboard-Kanal nicht ebenfalls altersbeschränkt ist. Damit Nachrichten aus altersbeschränkten Kanälen ins Starboard gelangen, markiere deinen Starboard-Kanal in den Discord-Kanaleinstellungen ebenfalls als <strong>altersbeschränkt</strong>. Posts aus nicht altersbeschränkten Kanälen funktionieren unabhängig von dieser Einstellung weiterhin. Dieses Verhalten ist zur Einhaltung der Discord-Richtlinien vorgesehen und kann nicht deaktiviert werden.</p>
</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden zu jeder vom Bot gesendeten Starboard-Nachricht gespeichert:

- Die Nachrichten-ID der "gesternten" Nachricht
- Die Nachrichten-ID der Nachricht im Starboard-Kanal
- Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Der Bot speichert außerdem folgende Daten zu jedem Nutzer, der auf eine Nachricht reagiert hat:

- Die Nutzer-ID des Nutzers
- Die Nachrichten-ID der Nachricht, die er/sie gestarrt hat
- Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Einmal täglich werden alle Starboard-Nutzer-Daten, die älter als eine Stunde sind, aus der Datenbank entfernt.
Du kannst eine Starboard-Nachricht aus der Datenbank entfernen, indem du alle Reaktionen darauf löschst. Um sämtliche Starboard-Daten zu entfernen, [lösche die Modul-Datenbank](/de/docs/custom-bot/additional-features#reset-module-database).
