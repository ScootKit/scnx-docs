---
sidebar_position: 2
title: Öffnungszeiten
description: Erstelle und verwalte Öffnungszeiten nach deinen Wünschen, auch Feiertage können automatisch abgerufen werden!
---

# Öffnungszeiten

## Funktionen {#features}

* Aktiviere Öffnungszeiten, um deine Mitglieder über längere Wartezeiten außerhalb deiner Öffnungszeiten zu informieren.
* Lege deine eigenen Öffnungszeiten für jeden Tag fest, auch mehrere Abschnitte an einem Wochentag sind möglich.
* Schließe die Ticket-Bearbeitung automatisch an Feiertagen für dein eingestelltes (Bundes)Land oder füge deine eigenen Feiertage hinzu.

<h4>Bilder Coming Soon ✨</h4>

## Einrichtung {#setup}

* Besuche den Abschnitt [Öffnungszeiten](https://scnx.app/glink?page=support-system/bot-configuration?show=opening-hours) in deinem Dashboard.
* [Konfiguriere](#configuration) verfügbare Optionen.

## Konfiguration {#configuration}

|                                   Feld                                   |                                                                                                                      Beschreibung                                                                                                                       |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Öffnungszeiten aktivieren?                                               | Aktiviert oder deaktiviert die Funktion für deinen Support-Bot.                                                                                                                                                                                         |
| Nachrichten-Verarbeitung außerhalb Öffnungszeiten komplett deaktivieren? | *Ausschließlich für das Modmail-System verfügbar.*<br/>Wenn aktiviert, werden Nachrichten des Nutzers an den Support-Bot während der eingestellten Öffnungszeiten ignoriert.                                                                            |
| Nachricht außerhalb Öffnungszeiten                                       | Diese Nachricht wird dein Bot an den Nutzer senden, wenn dieser dem Support-Bot außerhalb der Öffnungszeiten eine Nachricht schreibt.                                                                                                                   |
| Öffnungszeiten am Montag                                                 | Diese Öffnungszeiten werden für den Wochentag "Montag" gelten. Der Zeitraum muss im 24-Stunden-Format ``HH:MM-HH:MM`` angegeben werden (beispielsweise ``18:00-21:00``).                                                                                |
| Öffnungszeiten am Dienstag                                               | Diese Öffnungszeiten werden für den Wochentag "Dienstag" gelten. Der Zeitraum muss im 24-Stunden-Format ``HH:MM-HH:MM`` angegeben werden (beispielsweise ``18:00-21:00``).                                                                              |
| Öffnungszeiten am Mittwoch                                               | Diese Öffnungszeiten werden für den Wochentag "Mittwoch" gelten. Der Zeitraum muss im 24-Stunden-Format ``HH:MM-HH:MM`` angegeben werden (beispielsweise ``18:00-21:00``).                                                                              |
| Öffnungszeiten am Donnerstag                                             | Diese Öffnungszeiten werden für den Wochentag "Donnerstag" gelten. Der Zeitraum muss im 24-Stunden-Format ``HH:MM-HH:MM`` angegeben werden (beispielsweise ``18:00-21:00``).                                                                            |
| Öffnungszeiten am Freitag                                                | Diese Öffnungszeiten werden für den Wochentag "Freitag" gelten. Der Zeitraum muss im 24-Stunden-Format ``HH:MM-HH:MM`` angegeben werden (beispielsweise ``18:00-21:00``).                                                                               |
| Öffnungszeiten am Samstag                                                | Diese Öffnungszeiten werden für den Wochentag "Samstag" gelten. Der Zeitraum muss im 24-Stunden-Format ``HH:MM-HH:MM`` angegeben werden (beispielsweise ``18:00-21:00``).                                                                               |
| Öffnungszeiten am Sonntag                                                | Diese Öffnungszeiten werden für den Wochentag "Sonntag" gelten. Der Zeitraum muss im 24-Stunden-Format ``HH:MM-HH:MM`` angegeben werden (beispielsweise ``18:00-21:00``).                                                                               |
| An Feiertagen komplett schließen?                                        | Wenn aktiviert, werden an Feiertagen erstellte Tickets als geschlossen behandelt (dein Bot sendet dem Nutzer deine konfigurierte Nachricht, das Ticket wird jedoch nicht direkt geschlossen).                                                           |
| Land für Feiertage                                                       | *Nur verfügbar, wenn "An Feiertagen komplett schließen?" aktiviert ist.*<br/>Dieses Land wird für die Erkennung von Feiertage verwendet. Die Daten werden von [OpenHolidays](https://www.openholidaysapi.org/en/) bereitgestellt.                       |
| Lokales Bundesland                                                       | *Nur verfügbar, wenn "An Feiertagen komplett schließen?" aktiviert ist.*<br/>Dieses Bundesland für die Erkennung von Feiertagen verwendet (falls unterstützt). Die Daten werden von [OpenHolidays](https://www.openholidaysapi.org/en/) bereitgestellt. |
| Eigene Feiertage                                                         | Diese Tage werden (zusätzlich zu lokalen Feiertagen) als Feiertage gewertet. Der Tag muss im Format ``DD/MM`` angegeben werden (beispielsweise ``03/12``).                                                                                              |