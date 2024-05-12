# Ticket-System

Erlaube deinen Mitgliedern, dass Serverteam deines Servers zu kontaktieren!

<ModuleOverview moduleName="tickets" />

:::Info
Du suchst nach einem professionellen Support-System mit Ticket-Zuweisungen, Ticket-Themen, Formularen und mehr?
Siehe dir unseren [SCNX Modmail Bot](https://modmail.net) an - ab <PlanPrice plan="ACTIVE_GUILD" type="MONTHLY"/> (<PlanPrice plan="ACTIVE_GUILD" type="YEARLY"/>).
:::

## Features {#features}

* Nutzer können ein Ticket öffnen, indem sie einen Knopf unter einer einstellbaren Nachricht klicken. 
* Erstelle mehrere Ticket-Themen mit unabhäniger Konfiguration.
* Lasse automatisch Ticket-Transcript erstellen.

## Einstellung {#setup}

1. Erstelle eine Kategorie auf deinem Server, in der die Tickets erstellt werden sollen. Der Bot muss in dieser Kategorie Kanäle erstellen und verwalten können.
2. Erstelle einen Kanal, in welchem deine Nutzer ein Ticket erstellen können, indem sie einen Knopf unter einer Nachricht klicken.
3. [Stelle das Modul ein](#configuration).
4. Sobald du  das Modul fertig eingestellt hast, kannst du einfach die Konfiguration neuladen, um die Ticket-Erstellungs-Nachricht automatisch senden zu lassen.

## Nutzung {#usage}

* Nutzer können ein neues Ticket öffnen, indem sie auf einen Knopf unter der Ticket-Erstellungs-Nachricht klicken. 
* Wenn ein Ticket erstellt wird, erstellt der Bot einen neuen Kanal in der eingestellten Kategorie mit den eingestellten Berechtigungen und Erwähnungen.
* Teammitglieder und der Nutzer, der das Ticket erstellt hat, kann das Ticket mit dem Knopf "Ticket schließen" unter der ersten (und angepinnten) Nachricht des Kanals schließen.
* Nachdem das Ticket geschlossen wurde, wird der Bot ein Protokoll mit allen gesendeten Nachrichten erstellen. Dies wird in den eingestellten Log-Kanal und an den Nutzer gesendet (falls aktiviert).

## Konfiguration {#configuration}

In dieser Datei kannst du die Ticket-Kategorie einstellen. Jedes Ticket hat seine eigene Ticket-Erstellungs-Nachricht haben, welche in den eingestellten Kanal gesendet wird. Die Ticket-Kategorie wird unabhängig von den anderen Kategorien agieren. Du kannst die [Datei in deinem Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=tickets|config) öffnen, um zu loszulegen.

Es ist nicht möglich, mehrere Ticket-Kategorien in einer Ticket-Erstellungs-Nachricht zu senden. Wenn du kein PRO Nutzer bist und die Felder eine andere Sprache haben sollten, kannst du die [Sprache von deinem Bot wechseln](./../../../scnx/guilds/bots#bot-language).

| Feld                                | Beschreibung                                                                                                                                                                                         |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                 | Name der Ticket Kategorie. Dies wird deinen Nutzer und deine Team-Mitglieder angezeigt.                                                                                                                     |
| Ticketerstellungs-Kategorie               | Neue Ticket-Kanäle werden in der hier ausgewählten Kategorie auf deinem Discord-Server erstellt.                                                                                                |
| Ticketerstellungs-Kanal               | Die Ticket-Erstellungsnachricht wird in diesen Kanal gesendet. Nutzer können ein Ticket erstellen, indem sie auf den Knopf unter der Nachricht klicken.                  |
| Ticketrollen                         | Diese Rollen werden erwähnt, wenn ein neues Ticket geöffnet wurde und diesen Rollen wird Zugriff auf erstellte Ticket-Kanäle gegeben.                                                                  |
| Log-Kanal                          | Das Transcript wird in diesen Kanal gesendet, nachdem ein Ticket geschlossen wurde.                                                                                                                                   |
| Ticketerstellungs-Nachricht                | Diese Nachricht wird in den "Ticketerstellungs-Kanal" gesendet und Nutzer können mit einem Knopf unter der Nachricht ein neues Ticket öffnen.                                       |
| Nach schließen PN an Nutzer senden | Falls aktiviert werden die Nutzer eine PN nach Schließung des Tickets erhalten.                                                                                                                                  |
| Nutzer PN                              | <i>Nur sichbar wenn "Nach schließen PN an Nutzer senden" aktiviert ist.</i><br/>Diese Nachricht wird der Nutzer erhalten, nachdem sein Ticket geschlossen wurde. Du kannst einen Link zum Ticket Transcript hinzufügen. |
| Ticket-Erstellt Nachricht               | Diese Nachricht wird in ein Ticket gesendet, nachdem es erstellt wurde. Ein Knopf zum Schließen des Tickets wird hinzugefügt.                                                                    |
| Ticketerstellungs-Knopf                 | Dies wird der Inhalt des Knopfes unter der Ticketerstellungs-Nachricht sein.                                                                                   |
| Ticketschließungs-Knopf                  | Dies wird der Inhalt des Knopfes unter der Ticketschließungs-Nachricht sein, der das Ticket schließt.                                                                                     |

## Fehlerbehebung {#troubleshooting}

Falls bei dir Fehler auftreten, stelle bitte sicher, dass

* der Bot genügend Berechtigungenhat um Kanäle zu erstellen, zu löschen und zu verwalten. 
* deine [Kategorie Konfiguration](#configuration) ist gültig und du hast keine leeren Kategorien hinzugefügt. 
* dein Server hat maximal 500 Kanäle (Discord Limit).
* der Ticket-Log Kanal richtig eingestellt ist und der Bot hat die Berechtigung zum Senden von Nachrichten hat.
* der Inhalt des Ticketerstellungs- und Ticketschließungs-Knopfes korrekt ist.
* der Ticketerstellungs-Kanal ist leer ist.

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jedes neue Ticket gespeichert, das durch das Klicken des Knopfes erstellt wird:

* Eine eindeutige Identifikationsnummer des Datenbankeintrags.
* Ob das Ticket geschlossen wurde.
* Die Discord-ID des Nutzers, der das Ticket erstellt hat.
* Die Discord-ID des Kanals, in welchem die Nachricht gesendet wurde.
* Wenn das Ticket bereits geschlossen wurde: Die URL des Ticket-Protkolls.
* Die Anzahl der Nachrichten in dem Ticket.
* Jeder zusätzlicher Nutzer, der zum Ticket hinzugefügt wurde (momentan nicht unterstützt).
* Die Kategorie des Tickets.
* Metadata über den Eintrag (wann er erstellt und zuletzt geändert wurde).

Die folgenden Daten werden über die Ticketerstellungs-Nachricht (mit denen Nutzer Tickets öffnen können) gespeichert:

* Eine eindeutige Identifikationsnummer des Datenbankeintrags.
* Die ID der Nachricht.
* Die ID des Kanals, in welchem die Nachricht gesendet wurde.
* Die Kategorie des Tickets.
* Metadata über den Eintrag (wann er erstellt und zuletzt geändert wurde).

Ticket-Protokolle werden verschlüsselt und dann auf [ScootKit Paste](https://paste.scootkit.net) hochgeladen, einem Dienst, der auf [PrivateBin](https://github.com/PrivateBin/PrivateBin) basiert. Das bedeutet, dass Scootkit Ticket-Protokolle nicht entschlüsseln kann. Ticket-Protokolle werden in deinem Browser entschlüsselt, wenn du auf die URL klickst hast. Dies passiert zur zur Sicherheit deiner Nutzer. Ticket-Protkolle werden nach einem Jahr automatisch gelöscht.

Du kannst keine Tickets aus der Datenbank löschen.
Um alle Daten über Tickets zu löschen, [lösche die Modul-Datenbank](./../../additional-features#reset-module-database).
