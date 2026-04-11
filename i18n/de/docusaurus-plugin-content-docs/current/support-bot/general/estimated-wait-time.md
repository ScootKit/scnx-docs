---
sidebar_position: 7
title: Geschätzte Wartezeit
description: Berechne und zeige geschätzte Wartezeiten für deine Discord-Support-Tickets automatisch an.
---

# Geschätzte Wartezeit

## Funktionen {#features}

* Berechne geschätzte Wartezeiten automatisch basierend auf historischen Ticket-Daten  - ohne manuellen Aufwand.
* Zeige Nutzern beim Öffnen eines Tickets an, wie lange sie voraussichtlich warten müssen  - für mehr Transparenz und Vertrauen.
* Konfiguriere den Rückblickzeitraum, die Mindestanzahl an Tickets und die maximale Anzeige in Stunden für genaue Vorhersagen.
* Aktiviere oder deaktiviere geschätzte Wartezeit-Nachrichten pro System (Modmail und Ticket-System) unabhängig voneinander.
* Überschreibe die Einstellungen pro Ticket-Thema für detailliertere Kontrolle.
* Sieh dir live geschätzte Wartezeiten pro System und pro Thema direkt in deinem Dashboard an.



## Einrichtung {#setup}

* Besuche die Seite [Geschätzte Wartezeit](https://scnx.app/glink?page=support-system/estimated-wait-time) in deinem Dashboard.
* [Konfiguriere](#main-configuration) die verfügbaren Optionen.
* Optional kannst du [pro-Thema Überschreibungen](#ticket-topics) konfigurieren, um die geschätzte Wartezeit für bestimmte Themen anzupassen.
* [Konfiguriere Nachrichten](#message-configuration), um die Nachricht an Nutzer anzupassen.

## Konfiguration {#configuration}

### Hauptkonfiguration {#main-configuration}

| Feld | Beschreibung |
| --- | --- |
| Geschätzte Wartezeit aktivieren | Aktiviert oder deaktiviert die geschätzte Wartezeit-Funktion. Wenn aktiviert, berechnet dein Bot Wartezeiten basierend auf vergangenen Ticket-Daten und kann sie Nutzern anzeigen. |
| Rückblick-Tage | Die Anzahl der Tage (1–365) an historischen Ticket-Daten, die zur Berechnung der geschätzten Wartezeit verwendet werden. Ein längerer Zeitraum liefert stabilere Schätzungen, ein kürzerer reagiert schneller auf aktuelle Änderungen. |
| Mindestanzahl an Tickets | Die Mindestanzahl an Tickets (1–100), die im Rückblickzeitraum vorhanden sein müssen, bevor eine geschätzte Wartezeit angezeigt wird. Wenn nicht genug Daten vorhanden sind, wird keine geschätzte Wartezeit angezeigt. |
| Maximale angezeigte Stunden | Die maximale Anzahl an Stunden (1–168), die als geschätzte Wartezeit angezeigt werden kann. Wenn die berechnete Wartezeit diesen Wert überschreitet, wird sie auf diese Zahl begrenzt. |

### Ticket-Themen {#ticket-topics}

Für jedes Ticket-Thema (sowohl in Modmail als auch im Ticket-System) kannst du die globalen Einstellungen für die geschätzte Wartezeit überschreiben.

| Feld | Beschreibung |
| --- | --- |
| Geschätzte Wartezeit für dieses Thema deaktivieren | Wenn aktiviert, wird keine geschätzte Wartezeit für Tickets mit diesem Thema angezeigt. |
| Geschätzte Wartezeit für dieses Thema überschreiben | Wenn aktiviert, kannst du eine feste geschätzte Wartezeit für dieses Thema festlegen, anstatt den berechneten Wert zu verwenden.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn „Geschätzte Wartezeit für dieses Thema deaktivieren" nicht aktiviert ist.*</blockquote></details></small> |
| Überschriebene Wartezeit (Minuten) | Die feste geschätzte Wartezeit in Minuten, die für dieses Thema angezeigt wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn „Geschätzte Wartezeit für dieses Thema überschreiben" aktiviert ist.*</blockquote></details></small> |

### Nachrichten-Konfiguration {#message-configuration}

Diese Einstellungen werden separat für jedes aktivierte System (Modmail und Ticket-System) konfiguriert.

| Feld | Beschreibung |
| --- | --- |
| Geschätzte Wartezeit-Nachricht senden | Wenn aktiviert, sendet dein Bot eine Nachricht mit der geschätzten Wartezeit an Nutzer, wenn sie ein Ticket öffnen.<br/><small><details><summary>Hinweis</summary><blockquote>*Die Nachricht wird nur gesendet, wenn genügend historische Daten vorhanden sind (basierend auf der konfigurierten Mindestanzahl an Tickets).*</blockquote></details></small> |
| Geschätzte Wartezeit-Nachricht | Diese Nachricht wird an Nutzer gesendet, wenn sie ein Ticket öffnen. Du kannst folgende Platzhalter verwenden: `%estimatedWaitTime%` (formatierte Wartezeit), `%estimatedWaitTimeMinutes%` (Wartezeit in Minuten), `%topicName%` (Name des ausgewählten Themas).<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn „Geschätzte Wartezeit-Nachricht senden" aktiviert ist.*</blockquote></details></small> |