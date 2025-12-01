---
sidebar_position: 4
title: Formulare
description: Erstelle und verwalte Formulare, welche du entweder manuell oder automatisiert an Nutzer versenden kannst!
---

# Formulare

## Funktionen {#features}

* Richte Formulare ein, um Informationen von Nutzern abzufragen.
* Passe Fragen und Erscheinungsbild des Dialogs selbst an.
* Sende ein Formular per Befehl in ein Ticket.

<h4>Bilder Coming Soon ✨</h4>

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

|        Feld         |                                                                 Beschreibung                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Dialog-Öffnen-Knopf | Dieser Text wird im Knopf zum Öffnen des Formulars angezeigt, der an die Nachricht vom ``[/ticket form](#commands)``-Befehl angehangen wird. |

### Formulare verwalten {#manage-forms}

|     Feld      |                                                             Beschreibung                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Formular-Name | Dieser Text wird als Titel deines Formulars angezeigt.                                                                               |
| Dialog        | Diese Fragen werden im Formular angezeigt. Mehr Infos zum Einstellen der Formular-Fragen findest du [hier](#manage-forms-questions). |

### Formular-Fragen verwalten {#manage-forms-questions}

|            Feld            |                                                 Beschreibung                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Label                      | Dieser Text wird als Titel deiner Frage angezeigt.                                                            |
| Feld-Typ                   | Je nach Auswahl hat der Nutzer ein kleines oder großes Feld (erlaubt Umbrüche) für die Eingabe zur Verfügung. |
| Platzhalter                | Dieser Text wird als Platzhalter im Eingabe-Feld verwendet.                                                   |
| Ist dieses Feld notwendig? | Wenn aktiviert, muss der Nutzer dieses Feld ausfüllen.                                                        |
| Minimale Eingabelänge      | Diese Anzahl an Zeichen muss der Nutzer mindestens eingeben, um den Dialog absenden zu können.                |
| Maximale Eingabelänge      | Diese Anzahl an Zeichen darf der Nutzer maximal eingeben, um den Dialog absenden zu können.                   |