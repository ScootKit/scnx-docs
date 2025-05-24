# Invite-Tracking

Überprüfe, wer wen eingeladen hat

<ModuleOverview moduleName="invite-tracking" />

:::warning Informationen zu Richtlinien
Die Verwendung dieses Moduls, um Nutzer für das Einladen anderer Nutzer zu belohnen, verstößt gegen die [Discord Entwickler-Richtlinien](https://discord.com/developers/docs/policies-and-agreements/developer-policy) und unsere [Nutzungsbedingungen](https://scootk.it/scnx-tos). 
Verstöße werden dazu führen, dass dein Server und Account von SCNX gesperrt werden. Missbrauch kannst du an [abuse@scnx.xyz](mailto:abuse@scnx.xyz) melden.
:::

## Funktionen {#features}

* Verfolge die Beitritte neuer Nutzer, wer sie eingeladen hat und entferne bei Bedarf die Einladung mit nur einem Klick auf den Knopf unter der Nachricht. 
* Verfolge die Einladungs-Aktivitäten eines Nutzers, einschließlich:
  * wer den Nutzer eingeladen hat.
  * wen der Nutzer eingeladen hat.
  * welche Einladungen der Nutzer erstellt hat.
* Entferne alle erstellten Einladungen eines Nutzers.
* Unterscheidet zwischen aktiven Einladungen und Einladungen, bei denen der eingeladene Benutzer den Server bereits verlassen hat.
* Arbeitet mit den [Info-Befehle](/de/docs/custom-bot/modules/moderation/info-commands) und [Moderation & Sicherheit](/de/docs/custom-bot/modules/moderation) Modulen zusammen.

## Einrichtung {#setup}

* Stelle sicher, dass der Bot auf deinem Server die Berechtigung "Einladungen verwalten" besitzt.
* Aktiviere das Modul, um Einladungen zu verfolgen - möglicherweise musst du deinen Bot anschließend einmal neustarten.
* Lege die [Berechtigungen](/de/docs/custom-bot/slash-commands) für den [`/trace-invites`](#commands)-Befehl fest, um diesen vor unberechtigtem Zugriff zu schützen.
* Um neue Beitritte zu verfolgen, lege einen Log-Kanal in deiner [Konfiguration](#configuration) fest - stelle sicher, dass der Bot in diesem Kanal die Berechtigung "Nachrichten senden" besitzt.
  Beachte, dass jeder Nutzer, welcher auf deinem Server die Berechtigung "Einladungen verwalten" besitzt, in der Lage ist, Einladungen mit einem Klick auf den Button unter der Log-Nachricht zu entfernen.

## Verwendung {#usage}

* Wenn [konfiguriert](#configuration), wird der Bot im Log-Kanal feststellen, wer den Nutzer eingeladen hat.
* Der Bot wird automatisch Einladungsdaten über jeden beigetretenen Nutzern speichern.
* Um dir die Einladungs-Aktivitäten (von welchem Nutzer eingeladen, welche Nutzer eingeladen, wie viele Einladungen erstellt, ...) anzusehen, führe den Befehl [`/trace-invites`](#commands) aus.
* Um alle Einladungen eines Nutzers zu entfernen, führe den Befehl [`/trace-invites`](#commands) aus und klicke auf den Knopf "Alle Einladungen dieses Nutzers entfernen" unter der Nachricht.
* Wenn dieses Modul aktiviert ist, werden andere Module (wie [Info-Befehle](/de/docs/custom-bot/modules/moderation/info-commands) und [Moderation & Sicherheit](/de/docs/custom-bot/modules/moderation)) automatisch Daten über erfasste Einladungen nutzen, um ihre Funktionalität zu verbessern.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                       | Beschreibung                                                                                                                                                                                                                                                                                                                    |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/trace-invites user:<Nutzer>` | Dieser Befehl zeigt dir die Einladungsaktivitäten eines Nutzers. Du erhältst Informationen wie: wer den Nutzer eingeladen hat, wen der Nutzer eingeladen hat und wie viele Einladungen der Nutzer erstellt hat. Außerdem steht dir ein Knopf zur Verfügung, welcher dir erlaubt, alle Einladungen eines Nutzers zu entfernen. |

## Konfiguration {#configuration}

Nutze diese Konfiguration, um einen Log-Kanal festzulegen - [öffne die Seite in deinem Dashboard](https://scnx.app/de/glink?page=bot/configuration?query=invit&file=invite-tracking|config).

| Feld        | Beschreibung                                                                                                                                                                                                                                                                                                                            |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Log-Kanal   | Lege hier deinen Log-Kanal fest. Jedes Mal, wenn ein neuer Nutzer deinem Server beitritt, wird der Bot eine Nachricht in den Kanal senden. Unter der Nachricht befindet sich zudem ein Knopf, mit welchem du die Einladung entfernen kannst (kann von jedem Nutzer ausgeführt werden, der die Berechtigung "Einladungen verwalten" besitzt). |

## Fehlerbehebung {#troubleshooting}

Wenn Fehler mit dem Modul auftreten, stelle sicher, dass:

* der Bot auf deinem Server die Berechtigung "Einladungen verwalten" besitzt.
* du deinen Bot nach Aktivierung des Moduls und/oder der Berechtigung "Einladungen verwalten" neugestartet hast.
* der Bot die Berechtigungen "Nachrichten senden" und "Links einbetten" im [konfigurierten](#configuration) Log-Kanal besitzt.
* du keine Informationen über einen Nutzer mit nicht verfolgter Einladung anforderst - der Bot ist nur in der Lage Daten eines Nutzers zu speichern, nachdem das Modul aktiviert wurde.

## Gespeicherte Daten {#data-usage}

Wenn neue Nutzer deinem Server beitreten und das Modul aktiviert ist, werden folgende Daten gespeichert:

* Eine eindeutige Zahl zur Identifizierung in der Datenbank.
* Die ID des beigetretenen Nutzers.
* Ob der Nutzer den Server in der Zwischenzeit verlassen hat.
* Den Code des Einladungslinks.
* Die Art der Einladung (z.B. Vanity-Einladung).
* Die ID des Nutzers, welcher den Einladungslink erstellt hat, mit welchem der neue Nutzer beigetreten ist.
* Metadaten über den Eintrag (Datum der Erstellung und der letzten Aktualisierung).

Wenn ein Nutzer deinen Server verlässt, wird der Einladungs-Eintrag nicht gelöscht, sondern nur als "Inaktiv" markiert.

Um einen Missbrauch der Daten zu verhindern, können die gespeicherten Daten nicht fallspezifisch gelöscht werden.
Stattdessen kannst du die [Modul-Datenbank bereinigen](/de/docs/custom-bot/additional-features#reset-module-database), um alle gespeicherten Daten über Einladungen zu löschen.
