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

|                               Feld                                |                                                       Beschreibung                                                       |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Ticket-Claiming aktivieren?                                       | Aktiviert oder deaktiviert die Funktion für dein Ticket-System.                                                          |
| Ticket Zuweisungsbenachrichtigung                                 | In diesen Kanal wird dein Bot Zuweisungsbenachrichtigungen senden, sobald neue Tickets erstellt werden.                  |
| Ticket-Kanal sperren, bevor ein Ticket zugewiesen wird?           | Wenn aktiviert, können Teammitglieder aufgrund der Kanal-Sperrung nicht vor Zuweisen des Tickets in den Kanal schreiben. |
| Tickets, die einem Teammitglied nicht zugewiesen sind, ausblenden | Wenn aktiviert, werden Teammitgliedern nur Tickets angezeigt, denen sie zugewiesen sind.                                 |

### Erweiterte Nachrichten-Konfiguration {#advanced-message-configuration}

|                      Feld                       |                                                                                                                    Beschreibung                                                                                                                    |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zuweisung Ausstehend Nachricht                  | Diese Nachricht wird dein Bot bei ausstehender Zuweisung in den Ticket-Kanal senden.                                                                                                                                                               |
| Zuweisungsknopf im Ticket anzeigen              | Wenn aktiviert, wird ein Zuweisungs-Knopf zur Ticket-Nachricht hinzugefügt, womit sich Teammitglieder dem Ticket direkt zuweisen können - anderenfalls müssen sie den Knopf unter der [Zuweisungsbenachrichtigung](#main-configuration) verwenden. |
| Zuweisungsnachricht                             | Diese Nachricht wird dein Bot bei erfolgreicher Zuweisung in den Ticket-Kanal senden.                                                                                                                                                              |
| Teammitglieder Ticketbenachrichtigungsnachricht | Diese Nachricht wird dein Bot in den [konfigurierten](#main-configuration) Kanal senden, sobald ein neues Ticket erstellt wurde.                                                                                                                   |