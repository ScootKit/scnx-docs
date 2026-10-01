# Forum-Support

Bearbeite Supportanfragen in öffentlichen Foren - sende eine Nachricht, wenn ein neuer Thread erstellt wird, und füge einen Knopf zum Schließen des Threads hinzu.

<ModuleOverview moduleName="forum-support" />

## Funktionen {#features}

- Sende automatisch eine anpassbare Willkommensnachricht, wenn in einem konfigurierten Forum-Kanal ein neuer Thread erstellt wird.
- Füge Threads einen "Als gelöst markieren"-Knopf hinzu, mit dem der ursprüngliche Ersteller oder das Team den Thread schließen kann.
- Sperre Threads optional beim Schließen, um weitere Nachrichten zu verhindern.
- Füge Threads beim Schließen konfigurierbare Tags (z. B. "Gelöst") hinzu.
- Unterstützung für Prioritätsrollen - sende eine zusätzliche Nachricht (z. B. um das Team zu pingen), wenn ein Nutzer mit einer Prioritätsrolle einen Thread erstellt.
- Füge Prioritäts-Threads einen konfigurierbaren Tag hinzu, damit sie leicht erkennbar sind.
- Konfiguriere mehrere Forum-Kanäle, jeweils mit eigenen Einstellungen.
- Das Team kann einen Thread mit dem Nachrichten-Kontextbefehl "Close Thread" schließen.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=forum-support) auf deinem Server.
2. Öffne die [Forumkanäle-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=forum-support%7Cchannels) und erstelle ein neues Konfigurationselement.
3. Setze den "Forumkanal" auf den Forum-Kanal, den du für den Support nutzen möchtest.
4. Passe die "Nachricht bei Posterstellung" an, die gesendet wird, wenn ein neuer Thread erstellt wird.
5. Aktiviere und konfiguriere optional den Schließen-Knopf, das Sperren von Threads, Gelöst-Tags und Prioritätsrollen.
6. Stelle sicher, dass der Bot im Forum-Kanal die Berechtigungen **Kanal anzeigen**, **Nachrichten in Threads senden**, **Threads verwalten** und **Links einbetten** hat. Wenn du die Tag-Funktionen nutzt, benötigt der Bot außerdem die Berechtigung, Tags zuzuweisen.

## Nutzung {#usage}

- Wenn ein Nutzer in einem konfigurierten Forum-Kanal einen neuen Post erstellt, sendet der Bot automatisch die konfigurierte Willkommensnachricht als erste Antwort und pinnt sie im Thread.
- Ist der Schließen-Knopf aktiviert, können der ursprüngliche Ersteller und Mitglieder mit konfigurierten Team-Rollen per Klick auf den Knopf den Thread schließen. Der Thread wird archiviert (und optional gesperrt) und eine Abschlussnachricht wird gesendet.
- Sind Gelöst-Tags konfiguriert, fügt der Bot dem Thread beim Schließen den angegebenen Tag hinzu.
- Sind Prioritätsrollen aktiviert, wird eine zusätzliche Nachricht im Thread gesendet, wenn der Ersteller eine der konfigurierten Prioritätsrollen hat. Zusätzlich kann automatisch ein Prioritäts-Tag hinzugefügt werden.
- Teammitglieder mit der Berechtigung **Mitglieder moderieren** können jede Nachricht in einem konfigurierten Forum-Post rechtsklicken (oder lange drücken) und über **Apps > Close Thread** den Post schließen - auch wenn der Schließen-Knopf deaktiviert ist.

## Befehle {#commands}

| Befehl       | Typ                       | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Close Thread | Nachrichten-Kontextbefehl | Schließt den Forum-Post, in dem sich die ausgewählte Nachricht befindet ("Diesen Forum-Support-Beitrag schließen"). Erfordert die Berechtigung **Mitglieder moderieren**. Funktioniert wie der Schließen-Knopf: Der Geschlossen-Tag wird hinzugefügt (falls aktiviert), die "Anfrage-Gelöst-Nachricht" wird gesendet, der Thread wird gesperrt (falls aktiviert) und archiviert. Funktioniert nur in Posts von Forum-Kanälen, die in diesem Modul konfiguriert sind. |

## Konfiguration {#configuration}

In dieser Konfigurationsdatei richtest du Forum-Kanäle für den Support ein. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=forum-support%7Cchannels).

| Feld                                 | Beschreibung                                                                                                                                                                                                     |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forumkanal                           | Der Forum-Kanal, der für den öffentlichen Support genutzt wird.                                                                                                                                                  |
| Nachricht bei Posterstellung         | Nachricht, die als erste Antwort gesendet wird, wenn ein neuer Thread erstellt wird. Unterstützt `%userTag%`, `%userAvatar%` und `%userMention%`.                                                                |
| Schließen-Knopf hinzufügen?          | Wenn aktiviert, wird der Erstellungsnachricht ein Knopf hinzugefügt, mit dem der OP und das Team den Thread schließen können.                                                                                    |
| Schließen-Knopf Inhalt               | Der Beschriftungstext des Schließen-Knopfes.                                                                                                                                                                     |
| Team-Rollen                          | Rollen, die zusätzlich zum ursprünglichen Ersteller Threads schließen dürfen.                                                                                                                                    |
| Thread beim Schließen sperren?       | Wenn aktiviert, wird der Thread beim Schließen zusätzlich zur Archivierung gesperrt (weitere Nachrichten werden verhindert).                                                                                     |
| Anfrage-Gelöst-Nachricht             | Nachricht, die gesendet wird, wenn ein Thread geschlossen wird. Unterstützt `%threadUserTag%`, `%threadUserMention%`, `%userTag%` und `%userMention%`.                                                           |
| Tag beim Schließen hinzufügen?       | Wenn aktiviert, wird dem Thread beim Schließen ein Tag hinzugefügt.                                                                                                                                              |
| Geschlossen-Tag                      | Der Name des Tags, der beim Schließen hinzugefügt wird. Der Tag muss in deinem Forum-Kanal bereits existieren. Füge nicht das Emoji des Tags hinzu.                                                              |
| Prioritätsrollen aktivieren?         | Wenn aktiviert, wird eine zusätzliche Nachricht gesendet, wenn ein Nutzer mit einer Prioritätsrolle einen Thread erstellt.                                                                                       |
| Prioritätsrollen                     | Rollen, die die Prioritätsnachricht auslösen, wenn der Thread-Ersteller eine davon hat.                                                                                                                          |
| Prioritätsnachricht                  | Nachricht, die im Thread gesendet wird, wenn der Ersteller eine Prioritätsrolle hat. Damit kannst du z. B. dein Team pingen. Unterstützt `%userTag%`, `%userAvatar%` und `%userMention%` (der Thread-Ersteller). |
| Tag zu Prioritätstickets hinzufügen? | Wenn aktiviert, wird Threads von Nutzern mit einer Prioritätsrolle ein Tag hinzugefügt.                                                                                                                          |
| Prioritätstag                        | Der Name des Tags, der Prioritäts-Threads hinzugefügt wird. Der Tag muss in deinem Forum-Kanal bereits existieren.                                                                                               |

## Fehlerbehebung {#troubleshooting}

- **Der Bot sendet keine Nachricht in neuen Threads**: Stelle sicher, dass der Bot im Forum-Kanal die Berechtigungen "Kanal anzeigen", "Nachrichten in Threads senden" und "Links einbetten" hat. Prüfe außerdem, dass der Forumkanal in der Konfiguration dem richtigen Kanal entspricht.
- **Der Schließen-Knopf funktioniert nicht**: Stelle sicher, dass der Nutzer, der den Knopf klickt, entweder der Thread-Ersteller ist oder eine der konfigurierten Team-Rollen hat. Prüfe außerdem, dass der Bot die Berechtigung "Threads verwalten" hat.
- **Tags werden nicht hinzugefügt**: Prüfe, ob der Tag-Name in der Konfiguration exakt mit dem Tag-Namen in deinem Forum-Kanal übereinstimmt (ohne Emoji). Der Bot benötigt die Berechtigung, Tags im Forum-Kanal zu verwalten.
- **Nutzer können gegenseitig ihre Threads sehen**: Das ist eine Discord-Einschränkung bei Forum-Kanälen. Wenn du privaten Support benötigst, nutze stattdessen das Ticket-Modul oder Modmail.
