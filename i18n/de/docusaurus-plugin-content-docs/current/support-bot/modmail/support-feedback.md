---
sidebar_position: 6
title: Support-Bewertungen
description: Sammle Sternebewertungen und eigenes Feedback von Nutzern nach dem Schließen von Modmail-Tickets  - mit optionaler Anonymisierung.
---

# Support-Bewertungen

## Funktionen {#features}

- Gib deinen Mitgliedern die Möglichkeit, ihre Support-Erfahrung zu bewerten.
- Sende die Antworten in einen Kanal, um Teammitgliedern ihre Bewertungen zur Verfügung zu stellen.
- Erstelle deine eigenen Fragen und passe die Nachrichten an.
- Anonymisiere Feedback, um Nutzern eine privatere Feedback-Möglichkeit zu bieten.

## Einrichtung {#setup}

- Besuche die Seite [Support-Bewertungen](https://scnx.app/glink?page=support-system/modmail/support-feedback) in deinem Dashboard.
- [Konfiguriere](#main-configuration) verfügbare Optionen.
- Erstelle eine neue Feedback-Frage, indem du in der [Konfiguration](#main-configuration) auf den Knopf "Fragen bearbeiten" und anschließend auf "Feld hinzufügen" klickst.
- [Konfiguriere](#manage-feedback-questions) verfügbare Optionen für die entsprechende Feedback-Frage.

## Konfiguration {#configuration}

### Hauptkonfiguration {#main-configuration}

| Feld                                               | Beschreibung                                                                                                                                                                                                         |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviere Support-Bewertungen                      | Aktiviert oder deaktiviert die Funktion für dein Ticket-System.                                                                                                                                                      |
| Feedback-Nachricht                                 | Diese Nachricht wird dein Bot an den Nutzer senden, nachdem sein Ticket geschlossen wurde.                                                                                                                           |
| Eingereichte Nachricht                             | Diese Nachricht wird aus der Feedback-Nachricht editiert, nachdem der Nutzer seine Bewertung abgegeben hat.                                                                                                          |
| Feedback-Fragen bearbeiten                         | Diese Fragen werden im Bewertungs-Dialog angezeigt. Mehr Infos zum Einstellen der Feedback-Fragen findest du [hier](#manage-feedback-questions).                                                                     |
| Feedback anonymisieren                             | Wenn aktiviert, wird dein Bot Bewertungen nicht mit Nutzer-IDs verknüpfen.                                                                                                                                           |
| Antworten in einen Kanal senden                    | Wenn aktiviert, werden Bewertungen in einen Kanal gesendet – anderenfalls findest du die Bewertungen der letzten 30 Tage in deinem [Dashboard](https://scnx.app/glink?page=support-system/modmail/support-feedback). |
| Kanal, in den die Antworten gesendet werden sollen | _Nur verfügbar, wenn "Antworten in einen Kanal senden" aktiviert ist._<br/>In diesen Kanal wird dein Bot eingereichte Bewertungen senden.                                                                            |
| Benachrichtigungsnachricht anpassen?               | _Nur verfügbar, wenn "Antworten in einen Kanal senden" aktiviert ist._<br/>Wenn aktiviert, kannst du die Benachrichtigungsnachricht für neue Bewertungen anpassen.                                                   |
| Feedback-Benachrichtigungsnachricht                | _Nur verfügbar, wenn "Antworten in einen Kanal senden" und "Benachrichtigungsnachricht anpassen" aktiviert sind._<br/>Diese Nachricht wird dein Bot bei einer neu eingereichten Bewertung senden.                    |

### Feedback-Fragen verwalten {#manage-feedback-questions}

| Feld                       | Beschreibung                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Label                      | Dieser Text wird als Titel deiner Frage angezeigt.                                                            |
| Feld-Typ                   | Je nach Auswahl hat der Nutzer ein kleines oder großes Feld (erlaubt Umbrüche) für die Eingabe zur Verfügung. |
| Platzhalter                | Dieser Text wird als Platzhalter im Eingabe-Feld verwendet.                                                   |
| Ist dieses Feld notwendig? | Wenn aktiviert, muss der Nutzer dieses Feld ausfüllen.                                                        |
| Minimale Eingabelänge      | Diese Anzahl an Zeichen muss der Nutzer mindestens eingeben, um den Dialog absenden zu können.                |
| Maximale Eingabelänge      | Diese Anzahl an Zeichen darf der Nutzer maximal eingeben, um den Dialog absenden zu können.                   |
