---
sidebar_position: 6
title: Support-Bewertungen
description: Verwalte deine Support-Bewertungen, um die Support-Erfahrung für deine Mitglieder noch weiter zu verbessern!
---

# Support-Bewertungen

## Funktionen {#features}

* Gib deinen Mitgliedern die Möglichkeit, ihre Support-Erfahrung zu bewerten.
* Sende die Antworten in einen Kanal, um Teammitgliedern ihre Bewertungen zur Verfügung zu stellen.
* Erstelle deine eigenen Fragen und passe die Nachrichten an.
* Anonymisiere Feedback, um Nutzern eine privatere Feedback-Möglichkeit zu bieten.

<h4>Bilder Coming Soon ✨</h4>

## Einrichtung {#setup}

* Besuche die Seite [Support-Bewertungen](https://scnx.app/glink?page=support-system/ticket-system/support-feedback) in deinem Dashboard.
* [Konfiguriere](#main-configuration) verfügbare Optionen.
* Erstelle eine neue Feedback-Frage, indem du in der [Konfiguration](#main-configuration) auf den Knopf "Fragen bearbeiten" und anschließend auf "Feld hinzufügen" klickst.
* [Konfiguriere](#manage-feedback-questions) verfügbare Optionen für die entsprechende Feedback-Frage.

## Konfiguration {#configuration}

### Hauptkonfiguration {#main-configuration}

|                        Feld                        |                                                                                                                                Beschreibung                                                                                                                                 |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviere Support-Bewertungen                      | Aktiviert oder deaktiviert die Funktion für das Ticket-System.                                                                                                                                                                                                              |
| Feedback-Nachricht                                 | Diese Nachricht wird nach Schließen eines Tickets an den Nutzer gesendet.                                                                                                                                                                                                   |
| Eingereichte Nachricht                             | Diese Nachricht wird nach Abgabe der Bewertung aus der Feedback-Nachricht editiert.                                                                                                                                                                                         |
| Feedback-Fragen bearbeiten                         | Diese Fragen werden im Bewertungs-Dialog angezeigt.<br/><small><details><summary>Hinweis</summary><blockquote>*Wie du Feedback-Fragen bearbeitest, erfährst du [hier](#manage-feedback-questions).*</blockquote></details></small>                                          |
| Anonymisiere Feedback                              | Wenn aktiviert, werden Bewertungen nicht mit Nutzer-IDs verknüpft.                                                                                                                                                                                                          |
| Antworten in einen Kanal senden                    | Wenn aktiviert, werden eingereichte Bewertungen in einen Kanal gesendet.                                                                                                                                                                                                    |
| Kanal, in den die Antworten gesendet werden sollen | In diesen Kanal werden eingereichte Bewertungen gesendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Antworten in einen Kanal senden" aktiviert ist.*</blockquote></details></small>                                             |
| Benachrichtigungsnachricht anpassen?               | Wenn aktiviert, kann die Benachrichtigungsnachricht für eingereichte Bewertungen angepasst werden.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Antworten in einen Kanal senden" aktiviert ist.*</blockquote></details></small>    |
| Feedback-Benachrichtigungsnachricht                | Diese Nachricht wird bei einer neu eingereichten Bewertung in den konfigurierten Kanal gesendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Benachrichtigungsnachricht anpassen?" aktiviert ist.*</blockquote></details></small> |

### Feedback-Fragen verwalten {#manage-feedback-questions}

|            Feld            |                                                Beschreibung                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Label                      | Dieser Text wird als Titel der Frage angezeigt.                                                             |
| Feld-Typ                   | Je nach Auswahl haben Nutzer ein kleines oder großes Feld (erlaubt Umbrüche) für die Eingabe zur Verfügung. |
| Platzhalter                | Dieser Text wird als Platzhalter im Eingabe-Feld angezeigt.                                                 |
| Ist dieses Feld notwendig? | Wenn aktiviert, müssen Nutzer dieses Feld ausfüllen.                                                        |
| Minimale Eingabelänge      | Diese Anzahl an Zeichen müssen Nutzer zum Absenden mindestens eingeben.                                     |
| Maximale Eingabelänge      | Diese Anzahl an Zeichen dürfen Nutzer zum Absenden maximal eingeben.                                        |