# Ein-Wort-Geschichte

Kollaboratives Erzählspiel, bei dem jedes Mitglied immer genau ein Wort hinzufügt.

<ModuleOverview moduleName="one-word-story" />

## Funktionen {#features}

- Bestimme einen oder mehrere Kanäle als Geschichtskanäle, in denen Mitglieder gemeinsam eine Geschichte schreiben, ein Wort pro Nachricht.
- Konfigurierbare Erfolgsreaktion, die bei jedem akzeptierten Wort hinzugefügt wird, optional mit automatischer Entfernung nach 5 Sekunden.
- Schutz vor doppeltem Posten: Standardmäßig kann ein Nutzer nicht zwei Wörter hintereinander hinzufügen.
- Löschschutz: Löscht der Nutzer, der das letzte Wort gepostet hat, seine Nachricht, postet der Bot das zuletzt akzeptierte Wort erneut, damit die Geschichte lesbar bleibt.
- Optionale Obergrenze für die Länge der Geschichte: Sobald sie erreicht ist, werden keine weiteren Wörter mehr akzeptiert, bis ein Moderator die Runde beendet.
- Optionaler Inaktivitäts-Hinweis, der die Moderatorrolle nach einer konfigurierbaren Anzahl von Stunden ohne Aktivität einmalig pingt und vorschlägt, die Runde zu beenden.
- Optionales Kanalthema, das nach jedem akzeptierten Wort mit dem neuesten Wort und der Gesamtzahl der Wörter aktualisiert wird.
- Optionales Strike-System, das den Zugriff für Nutzer einschränken kann, die wiederholt ungültige Nachrichten posten.
- Meilensteine, die Nutzer mit Rollen oder Nachrichten belohnen, nachdem sie eine konfigurierbare Anzahl von Wörtern zu einer einzelnen Geschichte beigetragen haben.
- Archivkanal: Beendet ein Moderator eine Runde, wird die fertige Geschichte zusammen mit einer Liste der Beitragenden in einem separaten Archivkanal gepostet (und angeheftet).

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=one-word-story&ref=scnx-app-docs).
2. Füge in der [Konfiguration](#configuration) mindestens einen Kanal zur Liste "Kanäle" hinzu.
3. Der Bot benötigt in den konfigurierten Kanälen die Berechtigungen "Nachrichten senden", "Reaktionen hinzufügen", "Nachrichten verwalten" und "Kanäle verwalten" (letztere wird für die Kanalthema-Funktion benötigt). Wenn du einen Archivkanal konfigurierst, benötigt der Bot dort außerdem "Nachrichten senden" und "Nachrichten verwalten" (zum Anheften).
4. Optional kannst du eine Moderatorrolle festlegen. Mitglieder mit dieser Rolle (oder mit der Berechtigung "Nachrichten verwalten", falls keine Rolle festgelegt ist) können die Befehle nutzen, die nur für Moderatoren gedacht sind.
5. Wenn du das Strike-System mit einer Rolle statt mit Berechtigungsentzug nutzt, benötigt der Bot die Berechtigung "Rollen verwalten" und seine Rolle muss über der Strike-Rolle stehen.

## Nutzung {#usage}

In einem konfigurierten Geschichtskanal senden Mitglieder Nachrichten, die genau ein Wort enthalten. Der Bot reagiert mit dem konfigurierten Erfolgs-Emoji, um zu bestätigen, dass das Wort akzeptiert wurde, und aktualisiert optional das Kanalthema. Ungültige Nachrichten (mehr als ein Wort, Sonderzeichen, doppeltes Posten durch denselben Nutzer, ...) werden entfernt, und der Nutzer erhält einen kurzen Hinweis, der sich nach 8 Sekunden automatisch löscht.

Eine Nachricht wird als Wort akzeptiert, wenn sie nach dem Entfernen der Markdown-Formatierung (`*`, `_`, `~`, `` ` ``) genau aus einem Wort besteht, das mindestens einen Buchstaben enthält und nur aus Buchstaben, Ziffern, Apostrophen und Bindestrichen besteht, optional gefolgt von einem einzelnen Satzzeichen (`.`, `!`, `?`, `…`, `,`, `;` oder `:`). Erwähnungen, Links und Nachrichten mit mehreren Wörtern werden abgelehnt.

Wenn ein Moderator entscheidet, dass die Runde abgeschlossen ist, führt er [`/word-story end`](#commands) aus. Die vollständige Geschichte wird mit allen Beitragenden in ein Embed gerendert und (falls konfiguriert) im Archivkanal gepostet, bevor der Kanal zurückgesetzt wird. Ist eine Kanalthema-Vorlage konfiguriert, wird das Kanalthema außerdem auf einen "Neue Runde"-Text zurückgesetzt.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                | Beschreibung                                                                                                                                                                          |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/word-story status`                  | Zeigt die aktuelle Wortanzahl und die letzten 30 Wörter der Geschichte (ephemeral).                                                                                                   |
| `/word-story full`                    | Zeigt die vollständige aktuelle Geschichte in einem ephemeralen Embed.                                                                                                                |
| `/word-story stats`                   | Zeigt eine Top-15-Bestenliste der Beitragenden für die aktive Geschichte (ephemeral).                                                                                                 |
| `/word-story end [title:<Text>]`      | _Nur für Moderatoren._ Beendet die aktive Runde, postet die fertige Geschichte im Archivkanal (falls konfiguriert) und setzt den Kanal für eine neue Runde zurück.                    |
| `/word-story new [opening:<Word>]`    | _Nur für Moderatoren._ Startet eine neue Runde in einem leeren Kanal. Optional kann die Geschichte mit einem einzelnen Anfangswort begonnen werden.                                   |
| View Story Stats (Nutzer-Kontextmenü) | Rechtsklick auf einen Nutzer und "Apps" > "View Story Stats" wählen, um zu sehen, wie viele Wörter er zur aktiven Geschichte beigetragen hat und welchen Platz er belegt (ephemeral). |

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Ein-Wort-Geschichte-Spiel konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=one-word-story%7Cconfig).

| Feld                                                              | Beschreibung                                                                                                                                                                                                |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanäle                                                            | Kanäle, in denen das Ein-Wort-Geschichte-Spiel läuft.                                                                                                                                                       |
| Archivkanal                                                       | Kanal, in dem fertige Geschichten gepostet (und angeheftet) werden, wenn ein Moderator `/word-story end` ausführt. Leer lassen, um die Archivierung zu deaktivieren.                                        |
| Moderatorrolle                                                    | Rolle, die für die Befehle nur für Moderatoren (`/word-story end`, `/word-story new`) erforderlich ist. Leer lassen, um stattdessen die Berechtigung "Nachrichten verwalten" zu verlangen.                  |
| Erfolgsreaktion                                                   | Das Emoji, mit dem der Bot reagiert, wenn ein Wort akzeptiert wird.                                                                                                                                         |
| Reaktionen nach 5 Sekunden entfernen?                             | Wenn aktiviert, wird die Erfolgsreaktion nach 5 Sekunden entfernt, um den Kanal sauber zu halten.                                                                                                           |
| Nutzer müssen sich abwechseln                                     | Wenn aktiviert, können Nutzer nicht zwei Wörter hintereinander beitragen.                                                                                                                                   |
| Nachricht bei falscher Eingabe                                    | Die Nachricht, die gesendet wird, wenn ein Nutzer eine ungültige Eingabe macht (wird nach 8 Sekunden automatisch gelöscht).                                                                                 |
| Verhindern, dass Nutzer das letzte Wort löschen?                  | Wenn aktiviert, postet der Bot das zuletzt akzeptierte Wort erneut, falls seine Nachricht gelöscht wird.                                                                                                    |
| Löschschutznachricht                                              | _Nur sichtbar, wenn der Löschschutz aktiviert ist._ Die Nachricht, die gesendet wird, wenn ein Nutzer das zuletzt akzeptierte Wort löscht.                                                                  |
| Maximale Geschichtenlänge begrenzen?                              | Wenn aktiviert, werden keine weiteren Wörter akzeptiert, sobald die Geschichte die konfigurierte Länge erreicht. Ein Moderator muss `/word-story end` ausführen, um eine neue Runde zu starten.             |
| Maximallänge                                                      | _Nur sichtbar, wenn die Begrenzung aktiviert ist._ Anzahl der Wörter, bei der die Runde automatisch gesperrt wird.                                                                                          |
| Nachricht, wenn die Geschichte das Limit erreicht                 | _Nur sichtbar, wenn die Begrenzung aktiviert ist._ Wird das erste Mal gesendet, wenn das Limit in einer Runde erreicht wird. Weitere Nachrichten nach Erreichen des Limits werden stillschweigend gelöscht. |
| Inaktivitäts-Hinweis an Moderatoren senden?                       | Wenn aktiviert, wird die Moderatorrolle nach einer konfigurierbaren Anzahl von Stunden ohne neues Wort einmalig gepingt und es wird vorgeschlagen, die Runde zu beenden.                                    |
| Inaktivitäts-Hinweis nach X Stunden                               | _Nur sichtbar, wenn der Inaktivitäts-Hinweis aktiviert ist._ Stunden der Inaktivität, bevor die Moderatorrolle gepingt wird. Erfordert, dass eine Moderatorrolle festgelegt ist.                            |
| Inaktivitäts-Hinweis-Nachricht                                    | _Nur sichtbar, wenn der Inaktivitäts-Hinweis aktiviert ist._ Die Nachricht, die für den Inaktivitäts-Ping verwendet wird.                                                                                   |
| Nutzer einschränken, die wiederholt ungültige Nachrichten posten? | Wenn aktiviert, werden Nutzer, die die konfigurierte Grenze an falschen Nachrichten erreichen, eingeschränkt (entweder durch Entzug der Berechtigung "Nachrichten senden" oder durch eine Strike-Rolle).    |
| Anzahl von falschen Nachrichten, um eine Aktion auszulösen        | _Nur sichtbar, wenn Strikes aktiviert sind._ Falsche Nachrichten, die ein Nutzer senden muss, um die Einschränkung auszulösen.                                                                              |
| Rolle bei Sperrung vergeben, anstatt Rechte zu entfernen          | _Nur sichtbar, wenn Strikes aktiviert sind._ Wenn aktiviert, wird dem Nutzer die Strike-Rolle gegeben, anstatt ihm die Berechtigung "Nachrichten senden" zu entziehen.                                      |
| Rolle, die vergeben wird, wenn der Schwellenwert erreicht wird    | _Nur sichtbar, wenn die obige Option aktiviert ist._ Die Rolle, die Nutzer erhalten, wenn sie den Schwellenwert erreichen.                                                                                  |
| Nachricht, wenn ein Nutzer gesperrt wird                          | _Nur sichtbar, wenn Strikes aktiviert sind._ Die Nachricht, die gesendet wird, wenn ein Nutzer die konfigurierte Strike-Anzahl erreicht.                                                                    |
| Kanalthema-Vorlage (leer lassen, um zu deaktivieren)              | Kanalthema, das nach jedem akzeptierten Wort gesetzt wird. Verfügbare Platzhalter: `%lastword%`, `%firstword%`, `%count%`.                                                                                  |

### Ziele {#config-milestones}

In dieser Konfigurationsdatei kannst du Ziele festlegen, um Nutzer für Wörter zu belohnen, die sie zu einer einzelnen Geschichte beitragen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=one-word-story%7Cmilestones).

| Feld       | Beschreibung                                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Wortanzahl | Die Anzahl der akzeptierten Wörter, die ein Nutzer in einer einzelnen Geschichte beitragen muss, um dieses Ziel zu erreichen.    |
| Rollen     | Rollen, die dem Nutzer gegeben werden, wenn er dieses Ziel erreicht (optional).                                                  |
| Nachricht  | Eine Glückwunschnachricht, die gesendet wird, wenn der Nutzer dieses Ziel erreicht (wird nach 10 Sekunden automatisch gelöscht). |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Der Bot reagiert nicht auf Nachrichten im Geschichtskanal</summary>
  <ul>
    <li>Stelle sicher, dass der Kanal in der Konfiguration zur Liste "Kanäle" hinzugefügt wurde.</li>
    <li>Stelle sicher, dass der Bot im Kanal die Berechtigungen "Reaktionen hinzufügen", "Nachrichten senden" und "Nachrichten verwalten" hat.</li>
  </ul>
</details>
<details>
  <summary>Das Kanalthema wird nicht aktualisiert</summary>
  <ul>
    <li>Stelle sicher, dass der Bot im Geschichtskanal die Berechtigung "Kanäle verwalten" hat.</li>
    <li>Discord begrenzt Änderungen am Kanalthema sehr strikt. Nach vielen Wörtern in kurzer Zeit kann es einen Moment dauern, bis das Thema aktualisiert wird.</li>
  </ul>
</details>
<details>
  <summary>Fertige Geschichten werden nicht archiviert</summary>
  <ul>
    <li>Stelle sicher, dass ein Archivkanal konfiguriert ist.</li>
    <li>Stelle sicher, dass der Bot im Archivkanal die Berechtigungen "Nachrichten senden" und "Nachrichten verwalten" (zum Anheften) hat.</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden zu jedem Geschichtskanal gespeichert:

- Die Kanal-ID
- Die Liste der akzeptierten Wörter, jeweils mit der ID des beitragenden Nutzers und der Nachrichten-ID
- Die Anzahl der akzeptierten Wörter pro beitragendem Nutzer
- Die ID des Nutzers, der das letzte Wort gepostet hat
- Zeitstempel für den Start der Runde und das Hinzufügen des letzten Wortes
- Interne Markierungen für Limit-Warnungen und Inaktivitäts-Hinweise

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
