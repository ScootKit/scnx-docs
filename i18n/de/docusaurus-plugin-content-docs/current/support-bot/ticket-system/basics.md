---
sidebar_position: 2
title: Starter-Guide
description: Eine Anleitung für das Ticket-System, gemacht für dich und dein Team für einen optimalen Einstieg!
---

# Ticket-System Starter-Guide (Ticket-System 101)

:::tip Ich bin auch zum Teilen da!
Du kannst diesen Guide gerne auch an deine Teammitglieder weiterleiten, damit diese eine kurzen Überblick über die Funktionen des Ticket-Systems erhalten und sich schneller zurechfinden.
:::

## Tickets erstellen {#create-tickets}

Nutzer können neue Tickets mithilfe von [Ticketöffnungsnachrichten](/de/docs/support-bot/ticket-system/configuration#ticket-open-messages) erstellen - diese können auch auf mehrere Kanäle verteilt sein 
und jeweils unterschiedliche [Ticket-Themen](/de/docs/support-bot/ticket-system/ticket-topics) beinhalten. 
Der Nutzer kann dabei entweder auf einen Knopf klicken oder sein Thema aus einem Dropdown-Menü auswählen, je nach Konfiguration.

Sobald ein Ticket erstellt wurde, findest du es in der konfigurierten Kategorie in Discord - diese kann von Ticket-Thema zu Ticket-Thema auch gegebenenfalls variieren.
Wenn die [Claiming-Funktion](/de/docs/support-bot/ticket-system/claiming) im Ticket-System aktiviert ist, siehst du die Kanäle gegebenenfalls erst nach Zuweisen des Tickets.

## Tickets bearbeiten {#manage-tickets}

### Tickets zuweisen {#claim-tickets}

Falls die [Claiming-Funktion](/de/docs/support-bot/ticket-system/claiming) im Ticket-System aktiviert ist, musst du dir ein Ticket erst zuweisen, bevor du es bearbeiten kannst.
Dazu besuchst du den entsprechenden Kanal in Discord und klickst auf den Button "Ticket beanspruchen" unter der jeweiligen Nachricht.
Wenn konfiguriert, kannst du auch im Ticket-Kanal den Button unter der Ticket-Nachricht verwenden, um dich dem Ticket zuzuweisen.

### Nachrichten senden {#send-messages}

Sobald du dich im Ticket-Kanal befindest, kannst du wie gewohnt Nachrichten senden, Befehle ausführen, Dateien hochladen und mehr (abhängig von deinen Berechtigungen).
Beachte, dass es im Ticket-System keine Notiz-Funktion wie beim [Modmail-System](/de/docs/support-bot/modmail/basics) gibt.

### Befehle {#commands}

Im Ticket-System gibt es abhängig von der Konfiguration unterschiedliche Befehle, die du als Teammitglied in einem Ticket nutzen kannst.
Alle Befehle des Ticket-Systems beginnen mit ``/ticket``, anschließend folgt der eigentliche Befehl. 
Unten haben wir dir die wichtigsten Befehle aufgelistet, sodass du einen guten Überblick erhältst und die Befehle bestmöglich nutzen kannst.

|          Befehl          |                                                                                                                                         Beschreibung                                                                                                                                          |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``/ticket close``        | Schließt das jeweilige Ticket. Alternativ kannst du auch den Schließen-Knopf unter der Ticket-Nachricht verwenden, falls dieser in der Konfiguration aktiviert ist.                                                                                                                           |
| ``/ticket form``         | Versendet ein konfiguriertes [Formular](/de/docs/support-bot/general/forms) in das jeweilige Ticket.                                                                                                                                                                                          |
| ``/ticket hold``         | *Nur verfügbar, wenn [Ticket-Pausierung](/de/docs/support-bot/ticket-system/configuration#ticket-hold) aktiviert ist.*<br/>Aktiviert/Deaktiviert die Pausierung für das jeweilige Ticket.                                                                                                     |
| ``/ticket transfer``     | *Nur verfügbar, wenn [Ticket-Themen](/de/docs/support-bot/ticket-system/ticket-topics) aktiviert sind.*<br/>Verschiebt ein Ticket in ein anderes Thema. Alternativ kannst du auch den Verschiebungs-Knopf unter der Ticket-Nachricht nutzen, falls dieser in der Konfiguration aktiviert ist. |
| ``/ticket users add``    | *Nur verfügbar, wenn [Zusätzliche Ticketmitglieder](/de/docs/support-bot/configuration#additional-ticket-members) aktiviert sind.*<br/>Fügt einen neuen Nutzer zum jeweiligen Ticket hinzu.                                                                                                   |
| ``/ticket users remove`` | *Nur verfügbar, wenn [Zusätzliche Ticketmitglieder](/de/docs/support-bot/configuration#additional-ticket-members) aktiviert sind.*<br/>Entfernt einen zuvor hinzugefügten Nutzer aus dem jeweiligen Ticket.                                                                                   |

## Tickets schließen {#close-tickets}

<h4>Coming soon ✨</h4>

## Blockierungsliste {#blocklist}

<h4>Coming soon ✨</h4>

## Support-Bewertungen {#support-feedback}

<h4>Coming soon ✨</h4>

## Ticket-Logs {#ticket-logs}

<h4>Coming soon ✨</h4>