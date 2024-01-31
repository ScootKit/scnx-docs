# Ticket-System

Erlaube deinen Mitgliedern, dass Team zu kontaktieren!

<ModuleOverview moduleName="tickets" />

:::Info
Du suchst nach einem professionellen Support-system mit Ticket-Claiming, Ticket-Themen, Formularen und mehr?
Siehe dir unseren [SCNX Modmail Bot](https://modmail.net) an - ab <PlanPrice plan="ACTIVE_GUILD" type="MONTHLY"/> (<PlanPrice plan="ACTIVE_GUILD" type="YEARLY"/>).
:::

## Features {#features}

* Nutzer können ein Ticket öffnen, indem sie einen Knopf unter einer einstellbaren Nachricht klicken. 
* Erstelle mehrere Ticket-Themen mit unabhäniger Konfiguration.
* Lasse automatisch Ticket-Transcript erstellen.

## Einstellung {#setup}

1. Erstelle eine Kategorie in der die Tickets erstellt werden sollen. Der Bot muss in dieser Kategorie Kanäle erstellen und verwalten können.
2. Erstelle einen Kanal, wo die Nutzer ein Ticket erstellen können, indem sie einen Knopf unter einer Nachricht klicken.
3. [Stelle das Modul ein](#configuration).
4. Lade, wenn du das Modul fertig eingestellt hast, die Konfiguration neu, damit die Ticket-Erstellungs-Nachricht automatisch gesendet wird.

## Nutzung {#usage}

* Nutzer können ein neues Ticket öffnen indem sie auf den Knopf unter der Ticket-Erstellungs-Nachricht klicken. 
* Wenn ein Ticket erstellt wurde, wird der Bot einen neuen Kanal in der eingestellten Kategorie erstellen, mit den
  eingestellten Berechtigungen und Erwähnungen.
* Team Mitglieder und der Nutzer, der das Ticket erstellt hat kann das Ticket mit dem Button "Ticket schließen" unter der ersten Nachricht des Kanals schließen. (diese ist immer angepinnt)
* Nachdem das Ticket geschlossen wurde wird der Bot ein Transcript mit allen gesendeten Nachrichten erstellen. Dies wird in den eingestellten Log-Kanal gesendet und an den Nutzer (falls aktiviert).

## Konfiguration {#configuration}

In dieser Datei kannst du die Ticket-Kategorie einstellen. Jedes Ticket wird ihre eigene Ticket-Erstellungs-Nachricht haben, welche in den Kanal gesendet wird, den du eingestellt hast. Die Ticket-Kategorie wird unabhängig von den anderen Kategorien agieren. Du kannst die [Datei in deinem dashboard](https://scnx.app/glink?page=bot/configuration?file=tickets|config) öffnen um zu starten.

Es ist nicht möglich mehrere Ticket-Kategorien in einer Ticket-Erstellungs-Nachricht zu senden. Wenn du kein PRO Nutzer bist
und die Felder eine andere Sprache haben,
kannst du die [Sprache von deinem Bot wechseln](./../../../scnx/guilds/bots#bot-language).

| Feld                                | Beschreibung                                                                                                                                                                                         |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                 | Name der Ticket Kategorie. Dies wird der Nutzer und deine Team-Mitglieder sehen können.                                                                                                                     |
| Ticketerstellungs-Kategorie               | Ein neuer Ticket-Kanal wird in der ausgewählten Kategorie auf deinem Discord-Server erstellt.                                                                                                |
| Ticketerstellungs-Kanal               | Die Ticket-Erstellungsnachricht wird in diesen Kanal gesendet. Nutzer können ein Ticket erstelle indem sie auf den Knopf unter der Nachricht klicken.                  |
| Ticketrollen                         | Diese Rollen werden erwähnt wenn ein neues Ticket geöffnet wurde und diesen Rollen wurde auch Zugriff auf alle Ticket Kanäle gegeben.                                                                  |
| Log-Kanal                          | Das Transcript wird in diesen Kanal gesendet, nachdem ein Ticket geschlossen wurde.                                                                                                                                   |
| Ticketerstellungs-Nachricht                | Diese Nachricht wird in den "Ticketerstellungs-Kanal" gesendet und Nutzer können mit einem Knopf unter der Nachricht ein neues Ticket öffnen.                                       |
| Nach schließen PN an Nutzer senden | Falls aktiviert werden die Nutzer eine PN nach Schließung des Tickets erhalten.                                                                                                                                  |
| Nutzer PN                              | <i>Nur sichbar wenn "Nach schließen PN an Nutzer senden" aktiviert ist.</i><br/>Diese Nachricht wird der Nutzer erhalten, nachdem sein Ticket geschlossen wurde. Du kannst einen Link zum Ticket Transcript hinzufügen. |
| Ticket-Erstellt Nachricht               | Diese Nachricht wird in ein Ticket gesendet, nachdem es erstellt wurde. Ein Knopf zum Schließen des Tickets wird hinzugefügt.                                                                    |
| Ticketerstellungs-Button                 | Dies wird der Inhalt des Knopfes unter der Ticketerstellungs-Nachricht sein.                                                                                   |
| Ticketschließungs-Button                  | Dies wird der Inhalt des Knopfes unter der Ticketschließungs-Nachricht sein, der das Ticket schließt.                                                                                     |

## Fehlerbehebung {#troubleshooting}

Falls bei dir Fehler auftreten, stelle bitte sicher, dass

* der Bot genügend Berechtigungenhat um Kanäle zu erstellen, zu löschen und zu verwalten. 
* deine [Kategorie Konfiguration](#configuration) ist gültig und du hast keine leeren Kategorien hinzugefügt. 
* dein Server hat maximal 500 Kanäle (Discord Limit).
* Der Ticket-Log Kanal ist richtig eingestellt und der Bot hat die Berechtigung um dort Nachrichten zu senden.
* Der Inhalt des Ticketerstellungs- und Ticketschließungs-Button ist korrekt
* Der Ticketerstellungs-Kanal ist Leer.

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jedes neuen Ticket gespeichert, das durch das Klicken des Knopfes erstellt wurde:

* Eine eindeutige Identifikationsnummer des Datenbankeintrags.
* Ob das Ticket geschlossen wurde.
* Die ID des Nutzers, der das Ticket erstellt hat.
* Die ID des Kanals indem die Nachricht gesendet wurde.
* Wenn das Ticket bereits geschlossen wurde: Die URL des Ticket-Transcripts.
* Die Anzahl der Nachrichten in dem Ticket.
* Jeder zusätzlicher Nutzer der zum Ticket hinzugrfügt wurde (momentan nicht unterstützt).
* Die Kategorie des Tickets.
* Metadata über den Eintrag (wann erstellt und zuletzt geupdated).

Die folgenden Datne werden über die Ticketerstellungs-Nachricht (mit denen Nutzer Tickets öffnen können):

* Eine eindeutige Identifikationsnummer des Datenbankeintrags.
* Die ID der Nachricht.
* Die ID des Kanals indem die Nachricht gesendet wurde.
* Die Kategorie des Tickets.
* Metadata über den Eintrag (wann erstellt und zuletzt geupdated).

Ticket-Transcripts werden verschlüsselt und gelagert im [ScootKit Paste](https://paste.scootkit.net)
, der auf [PrivateBin](https://github.com/PrivateBin/PrivateBin) läuft. Das bedeutet Scootkit kann keine Ticket-Transcripts entschlüsseln. Ticket-Transcripts werden in deinem Browser entschlüsselt nachdem du auf die URL geklickt hast. Dies ist zur Sicherheit deiner Nutzer. Ticket-Transcripts werden nach einem Jahr gelöscht.

Du kannst kein Ticket von der Datenbank löschen.
Um alle Daten über die Tickets zu löschen, [lösche die Modul-Datenbank](./../../additional-features#reset-module-database).
