# Wortkette

Wortassoziationsspiel (Szólánc / Letzter-Buchstabe-Spiel), bei dem jedes neue Wort mit dem letzten Buchstaben des vorherigen Wortes beginnen muss.

<ModuleOverview moduleName="word-chain" />

## Funktionen {#features}

- Bestimme einen oder mehrere Kanäle als Wortketten-Kanäle, in denen Mitglieder eine Kette aus Wörtern bilden.
- Konfigurierbare Mindestlänge für Wörter, um triviale Beiträge zu vermeiden.
- Optionale Regel "Keine Wiederholungen": Ein Wort darf pro Kette nur einmal vorkommen.
- Optionale deutsche ß-↔-ss-Gleichsetzung: Wenn aktiviert, wird ein abschließendes `ß` beim Abgleich des letzten Buchstabens wie `ss` behandelt.
- Optionaler Neustart bei falschem Wort: Jede ungültige Eingabe setzt die Kette zurück (andernfalls wird die ungültige Nachricht entfernt und die Kette läuft weiter).
- Schutz vor doppeltem Posten: Standardmäßig kann ein Nutzer nicht zwei Wörter hintereinander posten.
- Löschschutz: Löscht ein Nutzer sein zuletzt akzeptiertes Wort, postet der Bot es zusammen mit dem erforderlichen nächsten Buchstaben erneut, damit die Kette nachvollziehbar bleibt.
- Konfigurierbare Erfolgsreaktion, optional mit automatischer Entfernung nach 5 Sekunden.
- Optionales Kanalthema, das nach jedem akzeptierten Wort mit dem letzten Wort, dem erforderlichen nächsten Buchstaben und der aktuellen Kettenlänge aktualisiert wird.
- Optionales Strike-System, das den Zugriff für Nutzer einschränken kann, die wiederholt ungültige Nachrichten posten.
- Meilensteine, die Nutzer mit Rollen oder Nachrichten belohnen, nachdem sie eine konfigurierbare Anzahl von Wörtern zu einer einzelnen Kette beigetragen haben.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=word-chain&ref=scnx-app-docs).
2. Füge in der [Konfiguration](#configuration) mindestens einen Kanal zur Liste "Kanäle" hinzu.
3. Der Bot benötigt in den konfigurierten Kanälen die Berechtigungen "Nachrichten senden", "Reaktionen hinzufügen", "Nachrichten verwalten" und "Kanäle verwalten" (letztere wird für die Kanalthema-Funktion benötigt).
4. Optional kannst du eine Moderator-Rolle festlegen. Mitglieder mit dieser Rolle (oder mit der Berechtigung "Nachrichten verwalten", falls keine Rolle festgelegt ist) können den Befehl `/word-chain reset` nutzen.
5. Wenn du das Strike-System mit einer Rolle statt mit Berechtigungsentzug nutzt, benötigt der Bot zusätzlich die Berechtigung "Rollen verwalten".

## Nutzung {#usage}

In einem konfigurierten Wortketten-Kanal senden Mitglieder einzelne Wörter. Jedes neue Wort muss mit dem letzten Buchstaben des zuletzt akzeptierten Wortes beginnen. Der Bot reagiert mit dem konfigurierten Erfolgs-Emoji, um zu bestätigen, dass das Wort akzeptiert wurde, und aktualisiert optional das Kanalthema mit dem erforderlichen nächsten Buchstaben. Ungültige Nachrichten (falscher Anfangsbuchstabe, zu kurz, wiederholt, doppeltes Posten durch denselben Nutzer, ...) werden entweder entfernt (und der Nutzer erhält einen kurzen Hinweis) oder setzen die Kette zurück, wenn "Kette neu starten, wenn ein Benutzer ein ungültiges Wort postet?" aktiviert ist.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                              | Beschreibung                                                                                                                                                                                     |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/word-chain status`                                | Zeigt das letzte Wort, den erforderlichen nächsten Buchstaben, die aktuelle Kettenlänge und die bisher längste Kette (ephemeral).                                                                |
| `/word-chain stats`                                 | Zeigt eine Top-15-Bestenliste der Beitragenden für die aktive Kette sowie den Rekord für die längste Kette (ephemeral).                                                                          |
| `/word-chain reset [reason:<Text>]`                 | _Nur für Moderatoren._ Setzt die Kette auf einen leeren Zustand zurück. Der optionale Grund wird in der öffentlichen Zurücksetzen-Nachricht angezeigt.                                           |
| Word Chain Status for User (Nutzer-Kontextmenü)     | Rechtsklick auf einen Nutzer und "Apps" > "Word Chain Status for User" wählen, um zu sehen, wie viele Wörter er zur aktiven Kette beigetragen hat und welchen Platz er belegt (ephemeral).       |
| Protect Last Word (Nachrichten-Kontextmenü)         | _Nur für Moderatoren._ Rechtsklick auf das zuletzt akzeptierte Wort und "Apps" > "Protect Last Word" wählen, damit der Bot es zusammen mit dem erforderlichen nächsten Buchstaben erneut postet. |
| Reset Chain After Message (Nachrichten-Kontextmenü) | _Nur für Moderatoren._ Rechtsklick auf eine Nachricht und "Apps" > "Reset Chain After Message" wählen, um die Kette zurückzusetzen. Der Nachrichtenlink wird als Grund verwendet.                |

Kontextmenü-Befehle sind standardmäßig ausgeschaltet. Siehe [Kontextmenü-Befehle einrichten](/de/docs/custom-bot/commands#context-menus), um sie zu aktivieren.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Wortkette-Spiel konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=word-chain%7Cconfig).

| Feld                                                                | Beschreibung                                                                                                                                                                                             |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanäle                                                              | Kanäle, in denen das Wortkette-Spiel läuft.                                                                                                                                                              |
| Mindestlänge                                                        | Mindestanzahl an Buchstaben, die ein Wort haben muss, um akzeptiert zu werden.                                                                                                                           |
| Wiederholte Wörter erlauben?                                        | Wenn deaktiviert, kann ein Wort nur einmal pro Kette erscheinen.                                                                                                                                         |
| ß und ss als gleich behandeln (nur Deutsch)                         | Wenn aktiviert, wird ein abschließendes `ß` beim Abgleich des letzten Buchstabens wie `ss` behandelt.                                                                                                    |
| Moderator-Rolle                                                     | Rolle, die erforderlich ist, um `/word-chain reset` auszuführen. Leer lassen, um stattdessen die Berechtigung "Nachrichten verwalten" zu verlangen.                                                      |
| Erfolgsreaktion                                                     | Das Emoji, mit dem der Bot reagiert, wenn ein gültiges Wort akzeptiert wird.                                                                                                                             |
| Reaktionen nach 5 Sekunden entfernen?                               | Wenn aktiviert, wird die Erfolgsreaktion nach 5 Sekunden entfernt, um den Kanal sauber zu halten.                                                                                                        |
| Nur eine zusammenhängende Nachricht pro Nutzer                      | Wenn aktiviert, können Nutzer nicht zwei Wörter hintereinander posten.                                                                                                                                   |
| Nachricht bei falscher Eingabe                                      | Wird gesendet, wenn ein Nutzer eine ungültige Eingabe macht (wird nach 8 Sekunden automatisch gelöscht).                                                                                                 |
| Kette neu starten, wenn ein Benutzer ein ungültiges Wort postet?    | Wenn aktiviert, setzt jede ungültige Eingabe die Kette zurück.                                                                                                                                           |
| Nachricht, wenn die Kette zurückgesetzt wird                        | _Nur sichtbar, wenn die obige Option aktiviert ist._ Wird im Kanal gesendet, wenn die Kette aufgrund eines ungültigen Wortes zurückgesetzt wird.                                                         |
| Verhindern, dass Nutzer die letzte Zählungsnachricht löschen?       | Wenn aktiviert, postet der Bot das zuletzt akzeptierte Wort erneut, falls seine Nachricht gelöscht wird.                                                                                                 |
| Löschschutznachricht                                                | _Nur sichtbar, wenn der Löschschutz aktiviert ist._ Wird gesendet, wenn ein Nutzer das zuletzt akzeptierte Wort löscht.                                                                                  |
| Benutzer einschränken, die wiederholt ungültige Nachrichten posten? | Wenn aktiviert, werden Nutzer, die die konfigurierte Grenze an falschen Nachrichten erreichen, eingeschränkt (entweder durch Entzug der Berechtigung "Nachrichten senden" oder durch eine Strike-Rolle). |
| Anzahl von falschen Nachrichten, um eine Aktion auszulösen          | _Nur sichtbar, wenn Strikes aktiviert sind._ Falsche Nachrichten, die ein Nutzer senden muss, um eine Einschränkung auszulösen.                                                                          |
| Rolle bei Sperrung vergeben, anstatt Rechte zu entfernen            | _Nur sichtbar, wenn Strikes aktiviert sind._ Wenn aktiviert, wird die Strike-Rolle hinzugefügt, anstatt die Berechtigung "Nachrichten senden" zu entziehen.                                              |
| Rolle, die vergeben wird, wenn die Strike-Schwelle erreicht ist     | _Nur sichtbar, wenn die obige Option aktiviert ist._ Die Rolle, die Nutzer erhalten, wenn sie die Strike-Schwelle erreichen.                                                                             |
| Nachricht, wenn ein Nutzer gesperrt wird                            | _Nur sichtbar, wenn Strikes aktiviert sind._ Die Nachricht, die gesendet wird, wenn ein Nutzer die konfigurierte Strike-Anzahl erreicht.                                                                 |
| Kanal-Topic-Vorlage (leer lassen, um zu deaktivieren)               | Kanalthema, das nach jedem akzeptierten Wort gesetzt wird. Verfügbare Platzhalter: `%lastword%`, `%nextletter%`, `%count%`.                                                                              |

### Meilensteine {#config-milestones}

In dieser Konfigurationsdatei kannst du Meilensteine festlegen, um Nutzer für Wörter zu belohnen, die sie zu einer einzelnen Kette beitragen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=word-chain%7Cmilestones).

| Feld       | Beschreibung                                                                                                                            |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Wortanzahl | Die Anzahl der akzeptierten Wörter, die ein Nutzer in einer einzelnen Kette beitragen muss, um diesen Meilenstein zu erreichen.         |
| Rollen     | Rollen, die dem Nutzer gegeben werden, wenn er diesen Meilenstein erreicht (optional).                                                  |
| Nachricht  | Eine Glückwunschnachricht, die gesendet wird, wenn der Nutzer diesen Meilenstein erreicht (wird nach 10 Sekunden automatisch gelöscht). |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Der Bot reagiert nicht auf Nachrichten im Wortketten-Kanal</summary>
  <ul>
    <li>Stelle sicher, dass der Kanal in der Konfiguration zur Liste "Kanäle" hinzugefügt wurde.</li>
    <li>Stelle sicher, dass der Bot im Kanal die Berechtigungen "Reaktionen hinzufügen", "Nachrichten senden" und "Nachrichten verwalten" hat.</li>
  </ul>
</details>
<details>
  <summary>Gültig aussehende Wörter werden abgelehnt</summary>
  <ul>
    <li>Prüfe, ob das Wort mit dem richtigen Buchstaben beginnt. Führe <code>/word-chain status</code> aus, um den erforderlichen nächsten Buchstaben zu sehen.</li>
    <li>Stelle sicher, dass das Wort die konfigurierte Mindestlänge erreicht.</li>
    <li>Wenn "Wiederholte Wörter erlauben?" deaktiviert ist, wurde das Wort möglicherweise bereits in dieser Kette verwendet.</li>
    <li>Für deutsche Ketten: Aktiviere die Option "ß und ss als gleich behandeln (nur Deutsch)", wenn Wörter wie "Fluss" auf "weiß" folgen sollen.</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden zu jedem Wortketten-Kanal gespeichert:

- Die Kanal-ID
- Die Liste der in der aktuellen Kette verwendeten Wörter (für die Prüfung auf Wiederholungen)
- Das zuletzt akzeptierte Wort und der Nutzer, der es gepostet hat
- Die Anzahl der akzeptierten Wörter pro beitragendem Nutzer
- Die aktuelle Kettenlänge und die bisher längste Kettenlänge
- Zeitstempel für den Start der Kette und das Hinzufügen des letzten Wortes

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
