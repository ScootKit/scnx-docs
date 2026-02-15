---
sidebar_position: 5
title: Ticket-Claiming
description: Konfiguriere das Ticket-Claiming, um deine Tickets bestmöglich zu organisieren!
---

# Ticket-Claiming

## Funktionen {#features}

* Aktiviere das Claimen von Tickets, um doppelte Ticketbesetzung zu vermeiden.
* Blende nicht zugewiesene Tickets für ein Teammitglied aus.
* Sperre den Kanal vor dem Claimen eines Tickets.
* Sende Zuweisungsbenachrichtigungen in einen Kanal, um Teammitglieder über neue Tickets zu informieren.

<h4>Bilder Coming Soon ✨</h4>

## Einrichtung {#setup}

* Erstelle einen privaten Textkanal für Zuweisungsbenachrichtigungen auf deinem Discord-Server.
* Besuche die Seite [Ticket-Claiming](https://scnx.app/glink?page=support-system/ticket-system/claiming) in deinem Dashboard.
* [Konfiguriere](#configuration) verfügbare Optionen.

## Konfiguration {#configuration}

### Hauptkonfiguration {#main-configuration}

|                                                   Feld                                                   |                                                                                                                 Beschreibung                                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ticket-Claiming aktivieren?                                                                              | Aktiviert oder deaktiviert die Funktion für dein Ticket-System.                                                                                                                                                                               |
| Ticket-Zuweisungsbenachrichtigung                                                                        | In diesen Kanal wird die Zuweisungsbenachrichtigung bei Erstellung eines neuen Tickets gesendet.                                                                                                                                              |
| Ticket-Kanal sperren, bevor ein Ticket zugewiesen wird?                                                  | Wenn aktiviert, wird der Ticket-Kanal vor Zuweisen eines Tickets gesperrt.                                                                                                                                                                    |
| Tickets, die einem Teammitglied nicht zugewiesen sind, ausblenden                                        | Wenn aktiviert, werden Teammitgliedern nur zugewiesene Tickets angezeigt.                                                                                                                                                                     |
| Teammitgliedern erlauben, zugewiesene Teammitglieder zu entfernen oder andere Teammitglieder zuzuweisen? | Wenn aktiviert, können Teammitglieder andere Teammitglieder mit dem Befehl [``/ticket assign``](#commands) dem Ticket zuweisen oder die Zuweisung entfernen.                                                                                  |
| Tickets umbenennen, wenn sie geclaimt werden?                                                            | Wenn aktiviert, wird der Name des Ticket-Kanals nach einer erfolgreichen Zuweisung umbenannt.                                                                                                                                                 |
| Name, zu welchem das Ticket beim Claim umbenannt werden soll                                             | Dieser Text wird als Name für den Ticket-Kanal verwendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Tickets umbenennen, wenn sie geclaimt werden?" aktiviert ist.*</blockquote></details></small> |


### Erweiterte Nachrichten-Konfiguration {#advanced-message-configuration}

|                      Feld                       |                                                     Beschreibung                                                     |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Zuweisung Ausstehend Nachricht                  | Diese Nachricht wird bei ausstehender Zuweisung in den Ticket-Kanal gesendet.                                        |
| Zuweisungsknopf im Ticket anzeigen              | Wenn aktiviert, wird ein Knopf zum Zuweisen zur Ticket-Nachricht hinzugefügt.                                        |
| Zuweisungsnachricht                             | Diese Nachricht wird bei erfolgreicher Zuweisung in den Ticket-Kanal gesendet.                                       |
| Teammitglieder Ticketbenachrichtigungsnachricht | Diese Nachricht wird bei Erstellung eines neuen Tickets in den [konfigurierten](#main-configuration) Kanal gesendet. |