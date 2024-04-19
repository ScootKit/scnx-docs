# Ticket-System

Mit diesem Modul kannst du deine Nutzer Tickets erstellen lassen, um dein Team zu benachrichtigen!

<ModuleOverview moduleName="tickets" />

:::info
Bist du auf der Suche nach einem professionellen Ticket-System, wo du Tickets zuweisen, Ticket-Themen, Formulare und mehr erstellen kannst?
Dann nutze einfach [Modmail](https://modmail.net) auf SCNX!
Ab nur <PlanPrice plan="ACTIVE_GUILD" type="MONTHLY"/> (<PlanPrice plan="ACTIVE_GUILD" type="YEARLY"/>).
:::

## Features {#features}

* Nutzer können ein Ticket erstellen, indem sie auf einen Button unter deiner Nachricht klicken.
* Füge mehrere Ticket-Kategorien mit anpassbarer Konfiguration hinzu.
* Es werden automatisch verschlüsselte Transkripte erstellt.

## Einrichtung {#setup}

1. Erstelle eine Kategorie, wo die neuen Tickets erstellt werden sollen. Der Bot braucht in dieser Kategorie die Berechtigung, Kanäle erstellen und verwalten zu können.
2. Erstelle einen Kanal, wo deine Nutzer ein Ticket erstellen können.
3. [Konfiguriere](#configuration) das Modul.
4. Wenn du das Modul konfiguriert hast, lade die Konfiguration neu, damit die Nachricht zum Ticket erstellen automatisch gesendet wird.

## Verwendung {#usage}

* Nutzer können neue Tickets erstellen, indem sie auf den Button unter der Ticket-Nachricht klicken.
* Sobald ein Ticket erstellt wurde, wird der Bot einen neuen Kanal in deiner konfigurierten Kategorie erstellen und die konfigurierten Rollen benachrichtigen.
* Team-Mitglieder und der Nutzer, der das Ticket erstellt hat, können das Ticket schließen, 
  indem sie auf den "Ticket schließen"-Button unter der ersten (vom Bot gesendeten) Nachricht klicken. Diese Nachricht wird auch automatisch im Kanal angepinnt.
* Sobald das Ticket geschlossen wurde, wird vom Bot ein Transkript mit allen gesendeteten Nachrichten generiert.
  Das Transkript wird anschließend in der konfigurierten Log-Kanal und (falls aktiviert) an den entsprechenden Nutzer gesendet.

## Konfiguration {#configuration}

In diesem Modul kannst du die Ticket-Kategorie konfigurieren. Jede Ticket-Kategorie hat ihre eigene Nachricht, wo die Nutzer das Ticket erstellen können. Diese Nachricht wird in den Kanal gesendet, der von dir konfiguriert wurde.
Die Ticket-Kategorien sind unabhängig voneinander. [Öffne das Modul in deinem Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=tickets|config), um loszulegen.

Es ist nicht möglich, mehrere Ticket-Kategorien in einer Nachricht zu konfigurieren. Wenn du kein PRO Nutzer bist und die Felder in einer anderen Sprache angezeigt werden, 
versuche, [die Sprache deines Bots zu ändern.](./../../../scnx/guilds/bots#bot-language)

| Feld                                 | Beschreibung                                                                                                                                                                                                                                                          |
|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                                 | Name der Kategorie. Dieser wird den Nutzern angezeigt.                                                                                                                                                                                                                |
| Ticket-Erstellungs-Kategorie         | In dieser Kategorie werden neue Tickets erstellt.                                                                                                                                                                                                                     |
| Ticket-Erstellungs-Kanal             | In diesen Kanal sendet der Bot die Nachricht, bei der die Nutzer ein Ticket erstellen können.                                                                                                                                                                         |
| Ticket-Rollen                        | Diese Rolle(n) werden bei der Erstellung eines neuen Tickets gepingt und können die Tickets sehen.                                                                                                                                                                    |
| Log-Kanal                            | Die Transkripte von den geschlossenen Tickets werden in diesen Kanal gesendet.                                                                                                                                                                                        |
| Ticket-Erstellungs-Nachricht         | Diese Nachricht wird in den von dir konfigurierten Ticket-Erstellungs-Kanal gesendet und beinhaltet den Button zum Ticket erstellen.                                                                                                                                  |
| Nach schließen PN an Nutzer senden   | Falls du diesen Punkt in deiner Konfiguration aktiviert hast, wird der Nutzer nach der Schließung seines Tickets automatisch per PN benachrichtigt.                                                                                                                   |                                                                               |
| Nutzer PN                            | <i>Dieser Punkt ist nur verfügbar, wenn der Punkt "Nach schließen PN an Nutzer senden" aktiviert ist.</i><br/>Diese Nachricht wird dem Nutzer nach Schließen des Tickets automatisch per PN gesndet. Du kannst in der Nachricht auch ein Link zum Transkript angeben. |
| Ticket-Erstellt-Nachricht            | Diese Nachricht wird in neue Tickets gesendet. Der Button zum Schließen des Tickets wird unter der Nachricht mit angefügt.                                                                                                                                            |
| Ticket-Erstellungs-Button            | Inhalt des Buttons, um ein neues Ticket zu erstellen.                                                                                                                                                                                                                 |
| Ticket-Schließungs-Button            | Inhalt des Buttons, um ein Ticket zu schließen.                                                                                                                                                                                                                       |

## Fehlerbehebung {#troubleshooting}

Wenn du Probleme mit dem Modul haben solltest, stelle bitte sicher:

* Das der Bot die Berechtigungen hat, Kanäle zu erstellen, zu bearbeiten und zu löschen.
* Das deine [Kategoie-Konfiguration](#configuration) gültig ist und keine leeren Kategorien hinzugefügt wurden.
* Das dein Server weniger als 500 Kanäle hat (Beschränkung von Discord).
* Das der Log-Kanal richtig konfiguriert ist und der Bot die Berechtigung hat, in diesem Kanal Nachrichten zu versenden.
* Das der Inhalt vom Ticket-Erstellungs-Button und Ticket-Schließungs-Button richtig ist.
* Das der Ticket-Erstellungs-Kanal leer ist.

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden durch das Anklicken des Ticket-Erstellungs-Buttons gespeichert:

* Eine eindeutige, ganze Zahl zur Identifizierung des Datenbankeintrags.
* Ob das Ticket geschlossen wurde.
* Die ID des Nutzers, der das Ticket erstellt hat.
* Die ID des Ticket-Kanals.
* URL zum Ticket-Transkript (sobald das Ticket geschlossen wurde).
* Die Anzahl der Nachrichten, die im Ticket gesendet wurden.
* Alle zusätzlichen Benutzer, die zum Ticket hinzugefügt wurden (aktuell nicht verfügbar).
* Die Kategorie des Tickets.
* Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung).

Die folgenden Daten werden über jede Ticket-Erstellungs-Nachricht gespeichert (Nachricht, die es Nutzern ermöglicht, ein Ticket zu erstellen):

* An unique integer identifying the database entry. Eine eindeutuge, ganze Zahl zur Identifizierung des Datenbankeintrags.
* Die ID der Nachricht.
* Die ID des Kanals, in der die Nachricht gesendet wurde.
* Die Kategorie des Tickets.
* Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Ticket-Transkripte werden verschlüsselt und bei [ScooKit Paste](https://paste.scootkit.net) unter [PrivateBin](https://github.com/PrivateBin/PrivateBin) gespeichert.
Das heißt, dass ScootKit nicht in der Lage ist, Ticket-Transkripte zu entschlüsseln. Das Ticket-Transkript wird von deinem Browser entschlüsselt, sobald du die URL aufgerufen hast.
Dadurch wird die Privatsphäre deiner Nutzer geschützt. Das Ticket-Transkript wird nach einem Jahr automatisch gelöscht.

Es gibt keine Möglichkeit, ein Ticket aus der Datenbank zu entfernen.  
Um alle über die Tickets gespeicherten Daten zu löschen, [bereinige die Moduldatenbank.](./../../additional-features#reset-module-database)
