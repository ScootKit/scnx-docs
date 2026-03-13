# Aktivitäts-Streaks

Belohne Nutzer für ihre tägliche, wöchentliche oder monatliche Aktivität mit einem Aktivitäts-Score, der automatisch zurückgesetzt wird, wenn sie wieder inaktiv werden.

<ModuleOverview moduleName="activity-streak" />

## Funktionen {#features}

* Verfolge die Aktivitäts-Streaks von Nutzern basierend auf einem konfigurierbaren Zeitraum (täglich, wöchentlich oder monatlich).
* Streaks werden auf Null zurückgesetzt, wenn ein Nutzer für einen gesamten Zeitraum inaktiv bleibt.
* Weise automatisch Rollen als Belohnung zu, wenn Nutzer bestimmte Streak-Meilensteine erreichen.
* Zeige die aktuelle Streak-Anzahl optional im Nicknamen eines Nutzers an.
* Der „Mitarbeiter-verwaltete Streaks?“-Modus ermöglicht es Moderatoren, Streaks manuell hinzuzufügen und zurückzusetzen, anstatt des automatischen Trackings.
* Nutzer können einen verlorenen Streak einmal pro Verlust wiederherstellen (sofern aktiviert).
* Der längste Streak wird separat erfasst und niemals zurückgesetzt.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=activity-streak) auf deinem Server.
2. Öffne die [Konfiguration](#configuration) und wähle den gewünschten Streak-Zeitraum aus (täglich, wöchentlich oder monatlich).
3. Wenn du Streak-Belohnungsrollen nutzen möchtest, erstelle die Rollen auf deinem Server und konfiguriere sie im Feld „Streak-Belohnungsrollen“.
4. Wenn die Streak-Anzahl auch im Nicknamen erscheinen soll, aktiviere die Option „Streak im Nicknamen anzeigen?“. Stelle sicher, dass der Bot über die Berechtigung `Nicknames verwalten` verfügt.
5. Wenn du den „Mitarbeiter-verwaltete Streaks?“-Modus anstelle der automatischen Verfolgung nutzen möchtest, aktiviere diesen und konfiguriere die entsprechenden Team-Rollen.

## Nutzung {#usage}

* Im automatischen Modus verfolgt der Bot die Nutzeraktivität basierend auf gesendeten Nachrichten. Wenn ein Nutzer während eines neuen Zeitraums eine Nachricht sendet, wird sein Streak erhöht. Verpasst er einen gesamten Zeitraum, wird sein Streak automatisch auf Null zurückgesetzt.
* Im „Mitarbeiter-verwaltete Streaks?“-Modus verwenden Teammitglieder den Befehl [`/streak add`](#commands), um Nutzern manuell Streak-Punkte hinzuzufügen.
* Nutzer können ihren aktuellen und ihren längsten Streak einsehen, indem sie den Befehl [`/streak view`](#commands) nutzen.
* Falls die Streak-Wiederherstellung aktiviert ist, können Nutzer, die ihren Streak verloren haben, diesen einmalig über [`/streak restore`](#commands) wiederherstellen.
* Wenn ein Nutzer eine Streak-Anzahl erreicht, die einer konfigurierten Rollenbelohnung entspricht, wird die Rolle automatisch zugewiesen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
|---------|-------------|
| `/streak view [user:<User>]` | Sieh dir deinen eigenen aktuellen oder längsten Streak oder den eines anderen Nutzers an. |
| `/streak add user:<User>` | Füge einem Nutzer manuell einen Streak-Punkt hinzu. Nur im „Mitarbeiter-verwaltete Streaks?“-Modus verfügbar. Erfordert eine konfigurierte Team-Rolle. |
| `/streak reset user:<User>` | Setze den Streak eines Nutzers auf Null zurück. Nur im „Mitarbeiter-verwaltete Streaks?“-Modus verfügbar. Erfordert eine konfigurierte Team-Rolle. |
| `/streak restore [user:<User>]` | Stelle einen zuvor verlorenen Streak wieder her. Nur verfügbar, wenn die Streak-Wiederherstellung aktiviert ist. Kann nur einmal pro Streak-Verlust verwendet werden. |

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Modul einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=activity-streak%7Cconfigs/config).

| Feld | Beschreibung |
|-------|-------------|
| Streak-Zeitraum | Wie oft Nutzer aktiv sein müssen, um ihren Streak aufrechtzuerhalten: täglich, wöchentlich oder monatlich. |
| Mitarbeiter-verwaltete Streaks? | Falls aktiviert, werden Streaks manuell vom Team verwaltet, anstatt automatisch über Nachrichten erfasst zu werden. |
| Mitarbeiter-Rollen (für mitarbeiter-verwalteten Modus) | Rollen, die berechtigt sind, Streaks über die Befehle „add“ und „reset“ zu verwalten. Dies gilt nur, wenn der „Mitarbeiter-verwaltete Streaks?“-Modus aktiviert ist. |
| Streak im Nicknamen anzeigen? | Falls aktiviert, hängt der Bot die aktuelle Streak-Anzahl des Nutzers an dessen Nicknamen an. |
| Streak-Belohnungsrollen | Rollenbelohnungen für das Erreichen bestimmter Streak-Meilensteine. Die „Ganze Zahl“ ist die Streak-Anzahl und „Rolle wählen“ ist die zuzuweisende Rolle. |
| Streak-Anzeigungs-Nachricht | Passe das Embed an, das beim Aufrufen eines Streaks angezeigt wird. |
| Ignorierte Kanäle | Kanäle, in denen Nachrichten nicht für Streaks gezählt werden. |
| Ignorierte Rollen | Rollen, deren Mitglieder-Nachrichten nicht für Streaks zählen. |
| Streak-Wiederherstellung aktivieren? | Falls aktiviert, können Nutzer einen verlorenen Streak einmal pro Verlust wiederherstellen. |
| Rollen, die Streaks wiederherstellen dürfen | Rollen, die berechtigt sind, den Befehl „restore“ zu nutzen. Falls das Feld leer bleibt, können alle Nutzer Streaks wiederherstellen. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Streaks werden nicht erfasst</summary>
  <ul>
    <li>Stelle sicher, dass der „Mitarbeiter-verwaltete Streaks“-Modus deaktiviert ist, wenn du das automatische Tracking nutzen möchtest.</li>
    <li>Überprüfe, ob der Nutzer in einem ignorierten Kanal postet oder eine ignorierte Rolle besitzt.</li>
    <li>Streak-Updates werden einmal pro Zeitraum geprüft – ein Nutzer muss nur eine Nachricht pro Zeitraum senden.</li>
  </ul>
</details>

<details>
  <summary>Der Nickname wird nicht mit dem Streak-Zähler aktualisiert</summary>
  <ul>
    <li>Stelle sicher, dass „Streak im Nicknamen anzeigen?“ in der Konfiguration aktiviert ist.</li>
    <li>Stelle sicher, dass der Bot über die Berechtigung <code>Nicknames verwalten</code> verfügt.</li>
    <li>Aufgrund von Discord-Einschränkungen kann der Bot den Nicknamen des Server-Besitzers nicht ändern.</li>
  </ul>
</details>

<details>
  <summary>Streak-Belohnungsrollen werden nicht zugewiesen</summary>
  <ul>
    <li>Überprüfe, ob die Streak-Rollenbelohnungen korrekt mit der richtigen Streak-Anzahl und Rolle konfiguriert sind.</li>
    <li>Stelle sicher, dass der Bot über die Berechtigung <code>Rollen verwalten</code> verfügt und seine eigene Rolle oberhalb der Belohnungsrollen platziert ist.</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jeden Nutzer mit einem aktiven oder vergangenen Streak gespeichert:

* Die Discord-User-ID
* Die aktuelle Streak-Anzahl und die höchste erreichte Streak-Anzahl
* Datum, Woche oder Monat der letzten Aktivität (abhängig vom konfigurierten Zeitraum)
* Die vorherige Streak-Anzahl (für Wiederherstellungszwecke)
* Der Zeitstempel der letzten Wiederherstellung
* Metadaten über den Eintrag (Erstellungsdatum und Zeitpunkt der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](de/docs/custom-bot/additional-features/#reset-module-database).
