# Zähl-Spiel

Ermögliche es deinen Benutzern, gemeinsam zu zählen.

<ModuleOverview moduleName="counter" />

## Funktionen {#features}

- Bestimme einen oder mehrere Kanäle als Zählkanäle, in denen Benutzer gemeinsam zählen.
- Konfigurierbare Erfolgsreaktionen und optionale Zahlen-Easter-Eggs bei speziellen Zahlen.
- Unterstützung für mathematische Ausdrücke (z. B. `2+3` für 5) und Text neben Zahlen.
- Meilensteine, die Benutzer mit Rollen oder Nachrichten belohnen, nachdem sie eine bestimmte Anzahl von Malen gezählt haben.
- Schutz gegen das Löschen von Nachrichten, um Schwindeln zu verhindern.
- Konfigurierbares Strike-System, das Benutzer einschränkt, die wiederholt falsche Nachrichten senden.
- Optionaler Neustart des Spiels, wenn ein Benutzer sich verzählt.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=counter&ref=scnx-app-docs).
2. Öffne die [Konfiguration](#configuration) und richte mindestens einen Zählkanal ein.
3. Der Bot benötigt die Berechtigungen „Nachrichten verwalten“, „Reaktionen hinzufügen“ und „Kanal verwalten“ in den Zählkanälen.

## Nutzung {#usage}

Benutzer senden Zahlen in den konfigurierten Zählkanälen. Die erste Zahl ist `1`, und jede weitere Nachricht muss die nächste Zahl in der Reihenfolge sein. Der Bot reagiert mit einem Erfolgs-Emoji, wenn ein Benutzer korrekt zählt, und zeigt einen Fehler an, wenn die Eingabe ungültig ist.

- Benutzer wechseln sich beim Zählen ab (standardmäßig kann derselbe Benutzer nicht zwei Zahlen hintereinander zählen).
- Wenn der Mathe-Modus aktiviert ist, können Benutzer mathematische Ausdrücke senden, die die korrekte nächste Zahl ergeben.
- Wenn ein Benutzer einen konfigurierten Meilenstein erreicht, erhält er die konfigurierten Rollen und/oder eine Glückwunschbotschaft.
- Wenn ein Benutzer zu viele falsche Nachrichten sendet, kann der Bot seinen Zugriff auf den Zählkanal einschränken.

## Konfiguration {#configuration}

### Konfiguration {#config-main}

In dieser Konfigurationsdatei kannst du das Zählspiel konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=counter%7Cconfig).

| Feld                                                      | Beschreibung                                                                                                        |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Kanäle                                                    | Kanäle, in denen Benutzer am Zählspiel teilnehmen können.                                                     |
| Kanalbeschreibung                                         | Text, der als Kanalthema festgelegt wird, nachdem jemand gezählt hat. Verwende `%x%` für die nächste Zahl. Zum Deaktivieren leer lassen. |
| Erfolgsreaktion                                           | Das Emoji, mit dem der Bot reagiert, wenn ein Benutzer korrekt zählt.                                                       |
| Spiel neustarten, wenn sich jemand verzählt               | Wenn aktiviert, startet das Spiel bei 1 neu, wenn ein Benutzer die falsche Zahl sendet.                                          |
| Nachricht, wenn das Spiel neugestartet wird               | Die Nachricht, die gesendet wird, wenn das Spiel aufgrund eines Fehlers beim Zählen neu startet.                                                       |
| Nutzer müssen abwechselnd zählen                          | Wenn aktiviert, müssen sich die Benutzer abwechseln und können nicht zwei Zahlen hintereinander zählen.                                            |
| Verhindern, dass Nutzer die letzte Zählungsnachricht löschen? | Wenn aktiviert, sendet der Bot eine Nachricht, wenn die letzte Zählnachricht gelöscht wird, um Verwirrung zu vermeiden.          |
| Löschschutznachricht                                      | Die Nachricht, die gesendet wird, wenn die letzte korrekte Zählnachricht gelöscht wird.                                            |
| Reaktionen nach 5 Sekunden entfernen?                     | Wenn aktiviert, werden die Reaktionen des Bots nach 5 Sekunden entfernt, um den Kanal sauber zu halten.                    |
| Nachricht bei falscher Eingabe                            | Die Nachricht, die gesendet wird, wenn ein Benutzer eine ungültige Eingabe macht.                                                             |
| Anzahl von falschen Antworten, um eine Aktion auszulösen  | Die Anzahl der falschen Nachrichten, die ein Benutzer senden muss, bevor er eingeschränkt wird. Zum Deaktivieren auf 0 setzen.                        |
| Rolle bei Sperrung vergeben, anstatt Rechte zu entfernen  | Wenn aktiviert, wird dem Benutzer eine Rolle zugewiesen, anstatt ihm die Berechtigung zum Senden von Nachrichten zu entziehen.                        |
| Rolle, die bei Sperrung vergeben wird                     | Die Rolle, die eingeschränkten Benutzern zugewiesen wird (gilt nur, wenn die oben genannte Option aktiviert ist).                 |
| Nachricht, wenn ein Nutzer gesperrt wird                  | Die Nachricht, die gesendet wird, wenn ein Benutzer eingeschränkt wird.                                                                    |
| Textcharaktere in der Nachricht erlauben?                 | Wenn aktiviert, können Benutzer neben der Zahl auch zusätzlichen Text in ihren Nachrichten angeben.                             |
| Nutzern erlauben, Mathematik in ihren Nachrichten zu verwenden? | Wenn aktiviert, können Benutzer mathematische Ausdrücke einreichen, die die korrekte nächste Zahl ergeben.                    |
| Zahlen-Easter-Eggs aktivieren?                            | Wenn aktiviert, reagiert der Bot bei bestimmten Zahlen (z. B. 42, 69, 100, 420) mit speziellen Emojis.                       |

### Ziele {#config-milestones}

In dieser Konfigurationsdatei kannst du Ziele festlegen, um Benutzer zu belohnen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=counter%7Cmilestones).

| Feld          | Beschreibung                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| Nachrichtenzahl | Die Anzahl der gültigen Zählnachrichten, die ein Benutzer senden muss, um diesen Meilenstein zu erreichen. |
| Rollen        | Rollen, die dem Benutzer zugewiesen werden, wenn er diesen Meilenstein erreicht (optional).             |
| Nachricht     | Eine Glückwunschbotschaft, die gesendet wird, wenn der Benutzer diesen Meilenstein erreicht.             |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Der Bot reagiert nicht im Zähl-Kanal</summary>
    <ul>
        <li>Stelle sicher, dass der Kanal in der Konfiguration zur Liste „Kanäle“ hinzugefügt wurde.</li>
        <li>Stelle sicher, dass der Bot im Kanal über die Berechtigung „Reaktionen hinzufügen“ verfügt.</li>
    </ul>
</details>
<details>
    <summary>Mathematische Ausdrücke funktionieren nicht</summary>
    <ul>
        <li>Stelle sicher, dass die Option „Nutzern erlauben, Mathematik in ihren Nachrichten zu verwenden?“ in der Konfiguration aktiviert ist.</li>
    </ul>
</details>
<details>
    <summary>Benutzer erhalten keine Ziele-Rollen.</summary>
    <ul>
        <li>Stelle sicher, dass die Rolle des Bots in der Server-Rollenhierarchie höher eingestuft ist als die Rollen, die er zuweisen soll.</li>
        <li>Stelle sicher, dass das Ziel korrekt mit der richtigen Nachrichtenanzahl konfiguriert ist.</li>
    </ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden zu jedem Zähl-Kanal gespeichert:

- Die Kanal-ID
- Die aktuelle Zahl im Zählspiel
- Die ID des Benutzers, der zuletzt gezählt hat
- Eine Anzahl der gültigen Nachrichten pro Benutzer in diesem Kanal
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
