---
sidebar_position: 4
title: Ticket-Themen
description: Erstelle und verwalte Ticket-Themen, um deine Tickets sauber voneinander zu trennen und weitere Vorteile zu aktivieren!
---

# Ticket-Themen

## Funktionen {#features}

* Erstelle verschiedene Ticket-Themen, um unterschiedliche Themen-Anfragen besser zu kategorisieren.
* Übertrage ein Ticket in eine andere Kategorie, falls der Nutzer die falsche gewählt haben sollte.
* Überschreibe allgemein festgelegte Einstellungen wie Ticket-Rollen, Kategorie für neue Tickets, Ticket-Nachricht und vieles mehr für jedes einzelne Ticket-Thema.
* Ändere das Format des Kanalnamens, um beispielsweise mit unterschiedlichen Emojis die Ticket-Themen auf den ersten Blick zu erkennen.
* Lege fest, ob Nutzer vor der Erstellung des jeweiligen Ticket-Themas ein konfiguriertes [Formular](/de/docs/support-bot/general/forms) ausfüllen müssen.

<h4>Bilder Coming Soon ✨</h4>

## Einrichtung {#setup}

*Falls du (bestimmte) Einstellungen überschreiben möchtest:*

* *Erstelle eine Kategorie für neue Tickets auf deinem Discord-Server.*
* *Erstelle entsprechende Rollen für Teammitglieder auf deinem Discord-Server, welche Zugriff auf Tickets erhalten sollen.*
* *Erstelle einen privaten Textkanal auf deinem Discord-Server, welchen du als Log-Kanal setzen willst.*

<br/>

* Besuche die Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/modmail/ticket-topics) in deinem Dashboard.
* [Konfiguriere](#main-configuration) verfügbare Optionen.
* Erstelle ein neues Ticket-Thema, indem du auf den Knopf "Ticket-Thema hinzufügen" klickst.
* [Konfiguriere](#manage-ticket-topics) verfügbare Optionen für das entsprechende Ticket-Thema.

## Befehle {#commands}

<SlashCommandExplanation />

|        Befehl        |                                                                                        Beschreibung                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ``/ticket transfer`` | *Nur verfügbar, wenn "Teammitglieder können Tickets auf ein anderes Thema übertragen" [aktiviert](#main-configuration) ist.*<br/>Verschiebt das entsprechende Ticket in das ausgewählte Thema. |

## Konfiguration {#configuration}

### Hauptkonfiguration {#main-configuration}

|                              Feld                              |                                                                      Beschreibung                                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ticket-Themen aktivieren                                       | Aktiviert oder deaktiviert die Funktion für dein Ticket-System.                                                                                        |
| Teammitglieder können Tickets auf ein anderes Thema übertragen | Wenn aktiviert, können Teammitglieder ein Ticket auf ein anderes Ticket-Thema übertragen.                                                              |
| Nutzer müssen ihre Themenauswahl bestätigen                    | Wenn aktiviert, wird nach der Auswahl des Themas eine Nachricht zur Bestätigung gesendet des Ticket-Themas gesendet.                                   |
| Bestätigungsanchricht                                          | *Nur verfügbar, wenn "Nutzer müssen ihre Themenauswahl bestätigen" aktiviert ist.*<br/>Diese Nachricht wird dein Bot als Bestätigungsnachricht senden. |

### Ticket-Themen verwalten {#manage-ticket-topics}

|                                Feld                                |                                                                                                                      Beschreibung                                                                                                                      |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Thema-Name                                                         | Dieser Name wird für das Ticket-Thema verwendet und den Nutzern angezeigt.                                                                                                                                                                             |
| Thema-Beschreibung                                                 | Dieser Text wird als Beschreibung für das Ticket-Thema verwendet und den Nutzern angezeigt.                                                                                                                                                            |
| Thema-Emoji                                                        | Dieses Emoji wird für das Ticket-Thema verwendet und den Nutzern angezeigt.                                                                                                                                                                            |
| Kategorie                                                          | In dieser Kategorie werden neue Tickets dieses Themas erstellt.                                                                                                                                                                                        |
| User können Tickets mit diesem Thema öffnen                        | Wenn aktiviert, steht dieses Ticket-Thema Nutzern bei der Erstellung eines Tickets zur Verfügung.                                                                                                                                                      |
| Thema nur für Nutzer mit bestimmter Rolle anzeigen                 | Wenn aktiviert, können nur Nutzer mit festgelegten Rollen dieses Ticket-Thema sehen.                                                                                                                                                                   |
| Benötigte Rollen                                                   | Diese Rollen werden das Ticket-Thema sehen können.                                                                                                                                                                                                     |
| Dienen als FAQ-Eingabe                                             | Wenn aktiviert, wird dein Bot bei der Auswahl dieses Themas nur eine Informationsnachricht senden, anstatt ein Ticket zu erstellen.                                                                                                                    |
| Nachricht, die beim Öffnen eines Tickets an den User gesendet wird | Diese Nachricht wird dein Bot bei Erstellung eines Tickets mit diesem Thema an den Nutzer senden.                                                                                                                                                      |
| Kanal-Zugriff überschreiben                                        | Diese Rollen erhalten Zugriff auf Tickets dieses Themas. Standardmäßig werden deine [voreingestellten Rollen](/de/docs/support-bot/modmail/configuration#main-configuration-configuration) verwendet.                                                  |
| Ping Überschreiben                                                 | Diese Rollen werden bei Erstellung eines Tickets mit diesem Thema erwähnt. Standardmäßig werden deine [voreingestellten Rollen](/de/docs/support-bot/modmail/configuration#main-configuration-configuration) verwendet.                                |
| Übertragungsnachricht senden                                       | *Nur verfügbar, wenn "Teammitglieder können Tickets auf ein anderes Thema übertragen" [aktiviert](#main-configuration) ist.*<br/>Diese Nachricht wird gesendet, wenn ein Teammitglied das Ticket eines Nutzers in ein anderes Thema verschiebt.        |
| Übertragungsnachricht                                              | *Nur verfügbar, wenn "Teammitglieder können Tickets auf ein anderes Thema übertragen" und "Übertragungsnachricht senden" aktiviert sind.*<br/>Diese Nachricht wird in den Ticket-Kanal gesendet, wenn ein Ticket in ein anderes Thema verschoben wird. |
| Pinge Rollen beim Übertragen                                       | *Nur verfügbar, wenn "Teammitglieder können Tickets auf ein anderes Thema übertragen" [aktiviert](#main-configuration) ist.*<br/>Wenn aktiviert, werden die eingestellten Rollen bei der Verschiebung des Tickets in ein anderes Thema erneut erwähnt. |
| Absendung von Formular vor Öffnen verlangen                        | Wenn aktiviert, muss der Nutzer zunächst ein [Formular](/de/docs/support-bot/general/forms) ausfüllen, bevor er ein Ticket dieses Themas erstellen kann.                                                                                               |
| Formular, das ausgefüllt werden muss                               | *Nur verfügbar, wenn "Absendung von Formular vor Öffnen verlangen" aktiviert ist.*<br/>Dieses Formular muss der Nutzer vor Öffnen des Tickets ausfüllen.                                                                                               |
| Log-Channel überschreiben                                          | Dieser Kanal wird als Log-Kanal für dieses Ticket-Thema genutzt. Standardmäßig wird dein [voreingestellter Log-Kanal](/de/docs/support-bot/modmail/configuration#main-configuration-configuration) verwendet.                                          |
| Ticket-Kanalname überschreiben?                                    | Wenn aktiviert, kannst du einen eigenen Ticket-Kanalnamen für dieses Ticket-Thema festlegen.                                                                                                                                                           |
| Ticket-Kanalname-Format                                            | Dieser Text wird für den Kanalnamen von Tickets mit diesem Thema genutzt. Standardmäßig wird dein [voreingestellter Ticket-Kanalname](/de/docs/support-bot/modmail/configuration#main-configuration-configuration) verwendet.                          |



