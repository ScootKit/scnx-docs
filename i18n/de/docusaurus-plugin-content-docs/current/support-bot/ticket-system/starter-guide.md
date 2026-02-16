---
sidebar_position: 2
title: Starter-Guide
description: Eine Anleitung für das Ticket-System, gemacht für dich und dein Team für einen optimalen Einstieg!
---

# Starter-Guide (Ticket-System 101)

:::tip Du kannst mich gerne teilen!
Leite diesen Guide gerne an deine Teammitglieder weiter, damit diese sich schneller im Ticket-System zurechtfinden und den vollen Funktionsumfang entdecken!
:::

Herzlich Willkommen zum Starter-Guide in das Ticket-System vom SCNX Support-Bot!

Wir wissen, dass das Ticket-System am Anfang überfordern wirken kann und du eventuell nicht alle Funktionen genau verstehst, was völlig normal ist.
Genau deswegen ist diese Seite aus Perspektive von Teammitgliedern geschrieben, sodass du dich schon bald im Ticket-System zurechtfindest und alle Funktionen ohne Probleme nutzen kannst.
Grundsätzlich kann jeder Server unterschiedliche Funktionen für sein Ticket-System aktivieren, wodurch manche Funktionen im Ticket-System deines Servers nicht vorhanden sein können.
Am Ende jedes Abschnitts haben wir Screenshots eingefügt, welche dir die Funktionen genauer darstellen.

Aber jetzt überlassen wir dir das Lesen und wünschen dir viel Erfolg!

## Tickets erstellen {#create-tickets}

Mitglieder können Tickets entweder über Ticketöffnungsnachrichten oder mit dem Befehl [``/ticket open``](#use-commands) erstellen.
Falls Ticket-Themen eingerichtet sind, müssen diese sowohl in der Ticketöffnungsnachricht als auch bei der Ausführung des Befehls gewählt werden.

Sobald ein Ticket erstellt wurde, erstellt dein Bot einen neuen Kanal in der festgelegten Kategorie, welche gegebenenfalls von Ticket-Thema zu Ticket-Thema varrieren kann.

<h4>Bilder Coming Soon ✨</h4>

## Tickets zuweisen {#claim-tickets}

:::note Hinweis:
Wenn dein Server kein Ticket-Claiming nutzt, kannst du direkt zum nächsten Schritt springen.
:::

Damit Tickets unter Teammitgliedern besser organisiert sind, musst du dir zunächst ein Ticket zuweisen (auch "claimen" genannt).

Dafür besuchst du den festgelegten Kanal in Discord und klickst unter der Nachricht auf den Knopf "Ticket beanspruchen". Nachdem dir das Ticket zugewiesen wurde, wird die Nachricht automatisch gelöscht.
Alternativ kannst du auch direkt den Kanal des neuen Tickets besuchen und auf den Knopf unter der Zuweisungsnachricht klicken (die Nachricht im Benachrichtigungskanal wird ebenfalls gelöscht). 
Falls du keine neuen Ticket-Kanäle siehst, wurde diese Option in deinem Ticket-System deaktiviert.

<h4>Bilder Coming Soon ✨</h4>

## Nachrichten senden {#send-messages}

Sobald du Zugriff auf den Ticket-Kanal hast, kannst du abhängig von deinen Berechtigungen Nachrichten, Emojis, Sticker, GIFs und mehr senden.

Da Tickets meist nicht nur aus normalen Nachrichten bestehen, zeigen wir dir unten noch weitere Funktionen, welche du in Ticket-Kanälen nutzen kannst.

<h4>Bilder Coming Soon ✨</h4>

## Befehle verwenden {#use-commands}

Das Ticket-System umfasst eine Reihe an Befehlen, welche dir verschiedene Aktionen je nach Konfiguration ermöglichen.
Sollte ein Befehl im Ticket-Kanal nicht angezeigt werden, besitzt du entweder keine Rechte für diesen Befehl oder die Funktion wurde nicht konfiguriert.

|           Befehl           |                                                     Beschreibung                                                      |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ``/blocklist add``         | Fügt einen Nutzer zur Blockierungsliste hinzu.                                                                        |
| ``/blocklist list``        | Zeigt alle aktuell blockierten Nutzer an.                                                                             |
| ``/blocklist remove``      | Entfernt einen Nutzer von der Blockierungsliste.                                                                      |
| ``/blocklist status``      | Zeigt den Blockierungsstatus des ausgewählten Nutzers.                                                                |
| ``/ticket admin-open``     | Öffnet ein neues Ticket mit dem ausgewählten Nutzer.                                                                  |
| ``/ticket close``          | Schließt das Ticket. Alternativ kannst du auch den Knopf unter der Ticket-Nachricht verwenden.                        |
| ``/ticket form``           | Sendet ein Formular in das Ticket.                                                                                    |
| ``/ticket hold``           | Aktiviert/Deaktiviert die Pausierung für das Ticket.                                                                  |
| ``/ticket rename``         | Bearbeitet den Namen des Tickets.                                                                                     |
| ``/ticket schedule-close`` | Plant die Schließung eines Tickets.                                                                                   |
| ``/ticket transfer``       | Verschiebt ein Ticket in ein anderes Thema. Alternativ kannst du auch den Knopf unter der Ticket-Nachricht verwenden. |
| ``/ticket users add``      | Fügt einen neuen Nutzer zum Ticket hinzu.                                                                             |
| ``/ticket users remove``   | Entfernt einen zuvor hinzugefügten Nutzer aus dem Ticket.                                                             |

### Blockierungsliste {#blocklist}

Mithilfe der Blockierungsliste kannst du Nutzer vom gesamten Support-Bot sperren lassen. Diese Sperre gilt daher sowohl für das Ticket- als auch für das Modmail-System (falls verwendet).

Wenn du einen Nutzer sperren möchtest, verwende den Befehl [``/blocklist add``](#use-commands) und wähle den enstprechenden Nutzer - optional kannst du den Grund und die Dauer der Sperre angeben.
Solltest du einen Nutzter aus der Blockierungsliste entfernen wollen, verwende den Befehl [``/blocklist remove``](#use-commands).

<h4>Bilder Coming Soon ✨</h4>

### Formulare versenden {#send-forms}

Damit du Informationen nicht immer manuell abfragen musst, kannst du Nutzer einfach ein konfiguriertes Formular ausfüllen lassen, wodurch du notwendige Daten schnell und sicher erhältst.

Um ein Formular in einen Ticket-Kanal zu senden, verwende den Befehl [``/ticket form``](#use-commands) und wähle das entsprechende Formular aus der Liste.
Sollte kein Formular in der Liste enthalten sein oder ein bestimmtes Formular nicht angezeigt werden, wurde es entweder noch nicht konfiguriert oder es besteht ein Fehler in der Konfiguration. 
Frage in diesem Fall beim Verantwortlichen deines Servers nach, damit dieser gegebenenfalls unseren Support kontaktieren kann.

<h4>Bilder Coming Soon ✨</h4>

### Tickets pausieren {#hold-tickets}

Wenn ein Ticket weitergeleitet werden soll oder auf eine Antwort von einer anderen Position wartet, kannst du das Ticket mit dem Befehl [``/ticket hold``](#use-commands) pausieren, 
um das Automatische Schließen des Tickets zu deaktivieren und den Kanal sperren zu lassen, wodurch bis zur Deaktivierung der Pausierung keine Nachrichten mehr versendet werden können.
Zum Deaktivieren verwende ebenfalls den Befehl [``/ticket hold``](#use-commands).

<h4>Bilder Coming Soon ✨</h4>

### Ticket-Namen umbenennen {#rename-tickets}

Falls du den Namen eines Tickets umbenennen willst, kannst du den Befehl [``/ticket rename``](#use-commands) ausführen und im anschließenden Dialog den neuen Namen des Tickets festlegen.
Bei einer Verschiebung in ein anderes Ticket-Thema wird der Name automatisch geändert, falls konfiguriert.

:::caution Wichtig:
Nachdem ein Ticket einmal umbenannt wurde, kann der Bot den Ticket-Namen bei einer Verschiebung in ein anderes Ticket-Thema nicht mehr automatisch ändern!
:::

<h4>Bilder Coming Soon ✨</h4>

### Ticket-Thema ändern {#change-ticket-topic}

Wenn ein Nutzer das falsche Thema für sein Ticket ausgewählt hat, kannst du es mit dem Befehl [``/ticket transfer``](#use-commands) einfach in das richtige Thema verschieben.
Der Name wird dabei automatisch aktualisiert und das Ticket erneut zur Zuweisung freigegeben.

<h4>Bilder Coming Soon ✨</h4>

### Nutzer hinzufügen und entfernen {#add-and-remove-users}

Um bestimmte Anliegen, die mehrere Personen betreffen, besser lösen zu können, kannst du die entsprechenden Nutzer mit dem Befehl [``/ticket users add``](#use-commands) zum Ticket hinzufügen, 
wodurch diese (zusätzlich zum Teammitglied und Ersteller des Tickets) Zugriff auf den Ticket-Kanal erhalten.
Wenn du Nutzer entfernen möchtest, verwende den Befehl [``/ticket users remove``](#use-commands).

<h4>Bilder Coming Soon ✨</h4>

## Tickets schließen {#close-tickets}

Nachdem das Anliegen eines Nutzers gelöst ist, kannst du das Ticket entweder mit dem Befehl [``/ticket close``](#use-commands) oder dem Knopf unter der Ticket-Nachricht sofort schließen oder 
das Schließen mit [``/ticket schedule-close``](#use-commands) nach einem bestimmten Zeitraum planen (das Automatische Schließen wird in diesem Fall deaktiviert).

<h4>Bilder Coming Soon ✨</h4>

## Support-Bewertungen {#support-feedback}

Wenn Support-Bewertungen im Ticket-System deines Servers aktiviert sind, erhalten Nutzer nach Schließen des Tickets automatisch eine DM, wo sie eine Bewertung zum entsprechenden Ticket abgeben können.
Diese Bewertung ist freiwillig und wird bei Beantwortung in den festgelegten Kanal gesendet, wo du dir deine Bewertung anschauen kannst.

<h4>Bilder Coming Soon ✨</h4>

## Ticket-Logs {#ticket-logs}

Alle Nachrichten eines Tickets werden protokolliert und nach Schließen des Tickets in einer Ticket-Log dargestellt.
Wenn dein Server KI-Zusammenfassungen aktiviert hat, siehst du in der Nachricht im Kanal außerdem eine kurze Zusammenfassung des Ticket-Inhalts.
Mit dem Knopf unter der Nachricht gelangst du entweder (falls aktiviert) auf eine Website von modmail.net (wo dir die Logs in einem schönen Web-Layout dargestellt werden) oder zu einer Textdatei, 
welche du dir herunterladen kannst.

<h4>Bilder Coming Soon ✨</h4>

## Fertig 🎉 {#done}

Juhu, du hast es geschafft 🎉

Du bist am Ende des Guides angelangt und hast nun hoffentlich einen guten Überblick über die Funktionsweise und Nutzung des Ticket-Systems vom SCNX Support-Bot.

Falls trotzdem noch Fragen bestehen sollten oder etwas unklar ist, frage gerne beim Verantwortlichen deines Servers nach oder erstelle ein Ticket auf unserem [Discord-Server](https://scootk.it/dc-de), 
wir helfen dir gerne weiter!