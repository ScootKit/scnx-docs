---
sidebar_position: 4
title: Formulare
description: Erstelle eigene Formulare und Modal-Dialoge für deine Discord-Support-Tickets  - sammle strukturierte Informationen von Nutzern vor oder während eines Tickets.
---

# Formulare

## Funktionen {#features}

* Richte Formulare ein, um Informationen von Nutzern abzufragen.
* Passe Fragen und Erscheinungsbild des Dialogs selbst an.
* Sende ein Formular ohne viel Aufwand per Befehl in ein Ticket.
* Erfordere optional das Ausfüllen eines Formulars, bevor Nutzer in Modmail oder dem Ticket-System fortfahren können.
* Sperre Ticket-Kanäle, bis das Formular abgesendet wurde (nur Ticket-System).



## Einrichtung {#setup}

* Besuche die Seite [Formulare](https://scnx.app/glink?page=support-system/forms) in deinem Dashboard.
* [Konfiguriere](#main-configuration) verfügbare Optionen.
* Erstelle ein neues Formular, indem du auf den Knopf "Neues Formular erstellen" klickst.
* [Konfiguriere](#manage-forms) verfügbare Optionen für das entsprechende Formular.
* Erstelle eine neue Formular-Frage, indem du in der [Konfiguration](#main-configuration) auf den Knopf "Formular bearbeiten" und anschließend auf "Feld hinzufügen" klickst.
* [Konfiguriere](#manage-forms-questions) verfügbare Optionen für die entsprechende Formular-Frage.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
| --- | --- |
| ``/ticket form form:<FormName>`` | Sendet ein Formular in das entsprechende Ticket. |

## Konfiguration {#configuration}

### Hauptkonfiguration {#main-configuration}

| Feld | Beschreibung |
| --- | --- |
| Dialog-Öffnen-Knopf | Dieser Text wird im Knopf zum Öffnen des Formulars angezeigt, der an die Nachricht vom [``/ticket form``](#commands)-Befehl angehangen wird. |
| Dialog-Nachricht (Modmail) | Diese Nachricht wird gesendet, wenn ein Nutzer in einem Modmail-Ticket aufgefordert wird, ein Formular auszufüllen.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn Modmail aktiviert ist.*</blockquote></details></small> |
| Formular-Absendung erfordern (Modmail) | Wenn aktiviert, können Nutzer in Modmail nicht fortfahren, bis das Formular abgesendet wurde.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn Modmail aktiviert ist.*</blockquote></details></small> |
| Ticket-Formular-Nachricht (Ticket-System) | Diese Nachricht wird im Ticket-Kanal gesendet, wenn ein Formular angefordert wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn das Ticket-System aktiviert ist.*</blockquote></details></small> |
| Kanal bis zum Absenden des Formulars sperren (Ticket-System) | Wenn aktiviert, kann der Nutzer im Ticket-Kanal keine Nachrichten senden, bis das Formular abgesendet wurde.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn das Ticket-System aktiviert ist.*</blockquote></details></small> |
| Zusätzliche Ticket-Mitglieder dürfen Formulare absenden | Wenn aktiviert, können zusätzliche Ticket-Mitglieder (nicht nur der Ticket-Ersteller) Formulare im Ticket absenden.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn das Ticket-System aktiviert ist und "Zusätzliche Ticket-Mitglieder erlauben" in der [Ticket-System-Konfiguration](/de/docs/support-bot/ticket-system/configuration#additional-ticket-members) aktiviert ist.*</blockquote></details></small> |

### Formulare verwalten {#manage-forms}

| Feld | Beschreibung |
| --- | --- |
| Formular-Name | Dieser Text wird als Titel deines Formulars und im Formular-Auswahlmenü angezeigt. |
| Dialog | Diese Fragen werden im Formular angezeigt. Mehr Infos zum Einstellen der Formular-Fragen findest du [hier](#manage-forms-questions). |

### Formular-Fragen verwalten {#manage-forms-questions}

| Feld | Beschreibung |
| --- | --- |
| Label | Dieser Text wird als Titel deiner Frage angezeigt. |
| Feld-Typ | Je nach Auswahl hat der Nutzer ein kleines oder großes Feld (erlaubt Umbrüche) für die Eingabe zur Verfügung. |
| Platzhalter | Dieser Text wird als Platzhalter im Eingabe-Feld verwendet. |
| Ist dieses Feld notwendig? | Wenn aktiviert, muss der Nutzer dieses Feld ausfüllen. |
| Minimale Eingabelänge | Diese Anzahl an Zeichen muss der Nutzer mindestens eingeben, um den Dialog absenden zu können. |
| Maximale Eingabelänge | Diese Anzahl an Zeichen darf der Nutzer maximal eingeben, um den Dialog absenden zu können. |