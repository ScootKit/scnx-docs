# Starboard

Lass Nutzer Nachrichten in einen Starboard-Kanal hervorheben, indem sie darauf reagieren.

<ModuleOverview moduleName="starboard" />

## Funktionen {#features}

* Nutzer können lustige, interessante oder anderweitig bemerkenswerte Nachrichten durch eine Reaktion hervorheben.
* Begrenze die Anzahl an Sternen, die ein Nutzer pro Stunde vergeben kann, damit wirklich besondere Nachrichten hervorgehoben werden.
* Schließe Rollen und Kanäle aus, um unerwünschte Nachrichten aus dem Starboard fernzuhalten.

## Einrichtung {#setup}

* Erstelle zunächst einen Kanal auf deinem Server, der als Starboard-Kanal genutzt wird.
  Stelle sicher, dass der Bot die Berechtigungen `Kanal anzeigen`, `Nachrichten senden`,
  `Nachrichtenverlauf sehen` und `Links einbetten` in diesem Kanal hat.
* Anschließend kannst du das Modul [konfigurieren](#configuration). Hier kannst du unter anderem den Starboard-Kanal auswählen.

## Nutzung {#usage}

* Sobald das Modul [eingerichtet](#setup) ist, können Nutzer auf Nachrichten mit dem konfigurierten Starboard-Emoji reagieren.
* Solange sie ihr Sterne-Kontingent pro Stunde nicht ausgenutzt haben, wird die Nachricht entweder in den Starboard-Kanal gesendet oder die Anzahl der Sterne wird um eins erhöht.

## Konfiguration {#configuration}

In der Konfiguration kannst du den Starboard-Kanal, die Nachricht und die Nutzungsmöglichkeiten für Nutzer in Discord festlegen. Öffne sie in deinem [Dashboard](https://scnx.app/glink?page=bot/configuration?file=starboard%7Cconfig).

| Feld                    | Beschreibung                                                                                                                                                                 |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Starboard-Kanal         | Hier wird der Kanal festgelegt, in den Nachrichten mit Sternen von Nutzern gesendet werden.                                                                                  |
| Emoji                   | Nutzer können eine Nachricht mit diesem Emoji "starren" – einfach durch eine Reaktion mit dem Emoji.                                                                        |
| Nachricht               | Dies ist die Nachricht, die im Starboard-Kanal gepostet wird, wenn Nutzer auf eine Nachricht mit dem konfigurierten Emoji reagieren. Verfügbare Parameter siehst du im Dashboard.|
| Ausgenommene Kanäle  | In diesen Kanälen können Nutzer keine Nachrichten starren. Die Reaktion wird nicht entfernt, aber der Bot ignoriert sie einfach.                                             |
| Ausgenommene Rollen  | Mitglieder dieser Rollen können keine Nachrichten starren. Die Reaktion bleibt, aber der Bot ignoriert sie.                                                                 |
| Mindestanzahl Sterne    | Die Mindestanzahl an Sternen, die eine Nachricht braucht, um in den Starboard-Kanal gesendet zu werden. Mehrfachreaktionen zählen wie eine normale Reaktion.                 |
| Sterne pro Nutzer pro Stunde| Legt fest, wie oft ein Nutzer pro Stunde auf Nachrichten reagieren kann. Es gilt ein "dynamisches Fenster", d.h. wenn das Limit auf 10 steht und ein Nutzer um 12:00 fünfmal und um 12:30 noch fünfmal reagiert, ist das Limit erreicht.|
| Self-Star        | Legt fest, ob Nutzer ihre eigenen Nachrichten starren können. Wenn sie auf ihre eigene Nachricht reagieren, wird die Reaktion entfernt, um Verwirrung zu vermeiden.          |

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

## Gespeicherte Daten {#data-usage}

Folgende Daten werden zu jeder vom Bot gesendeten Starboard-Nachricht gespeichert:

* Die Nachrichten-ID der "gestarnten" Nachricht
* Die Nachrichten-ID der Nachricht im Starboard-Kanal
* Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Der Bot speichert außerdem folgende Daten zu jedem Nutzer, der auf eine Nachricht reagiert hat:
* Die Nutzer-ID des Nutzers
* Die Nachrichten-ID der Nachricht, die er/sie gestarrt hat
* Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Einmal täglich werden alle Starboard-Nutzer-Daten, die älter als eine Stunde sind, aus der Datenbank entfernt.
Du kannst eine Starboard-Nachricht aus der Datenbank entfernen, indem du alle Reaktionen darauf löschst. Um sämtliche Starboard-Daten zu entfernen, [lösche die Modul-Datenbank](/docs/custom-bot/additional-features#reset-module-database).
