---
sidebar_position: 6
title: Ticketauslastung
description: Überwache die Kapazität deiner Discord-Support-Tickets mit einem zweistufigen Warnsystem und informiere Nutzer bei hoher Auslastung.
---

# Ticketauslastung

## Funktionen {#features}

* Überwache die aktuelle Auslastung deiner Support-Systeme und informiere Nutzer über mögliche Wartezeiten.
* Lege Warnstufen fest, die anpassbare Nachrichten auslösen, wenn die Ticket-Kapazität bestimmte Schwellenwerte erreicht.
* Konfiguriere globale Limits für offene Tickets für jedes System (Modmail und Ticket-System).
* Überschreibe Auslastungs-Einstellungen pro Ticket-Thema für eine genauere Kontrolle.

<h4>Bilder Coming Soon ✨</h4>

## Einrichtung {#setup}

* Besuche die Seite [Ticketauslastung](https://scnx.app/glink?page=support-system/ticket-utilization) in deinem Dashboard.
* [Konfiguriere](#main-configuration) verfügbare Optionen.
* Optional: [Konfiguriere Einstellungen pro Thema](#ticket-topics), um globale Limits zu überschreiben.
* [Konfiguriere Nachrichten](#advanced-message-configuration), um Nutzer über die aktuelle Auslastung zu informieren.

## Konfiguration {#configuration}

### Hauptkonfiguration {#main-configuration}

| Feld | Beschreibung |
| --- | --- |
| Ticketauslastung aktivieren | Aktiviert oder deaktiviert die Ticketauslastungs-Funktion. |
| Warnstufe 1 Grenzwert | Der Auslastungsprozentsatz, bei dem Warnstufe 1 ausgelöst wird (1–100). |
| Warnstufe 2 Grenzwert | Der Auslastungsprozentsatz, bei dem Warnstufe 2 ausgelöst wird. Muss höher als der Grenzwert der Warnstufe 1 sein.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn der Grenzwert der Warnstufe 1 nicht auf 100 gesetzt ist.*</blockquote></details></small> |
| Globales Modmail-Limit für offene Tickets | Die maximale Anzahl an Modmail-Tickets, die gleichzeitig geöffnet sein können.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn Modmail aktiviert ist.*</blockquote></details></small> |
| Globales Ticket-System-Limit für offene Tickets | Die maximale Anzahl an Ticket-System-Tickets, die gleichzeitig geöffnet sein können.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn das Ticket-System aktiviert ist.*</blockquote></details></small> |

### Ticket-Themen {#ticket-topics}

Für jedes Ticket-Thema (sowohl in Modmail als auch im Ticket-System) kannst du die globalen Auslastungs-Einstellungen überschreiben.

| Feld | Beschreibung |
| --- | --- |
| Ticketauslastung für dieses Thema deaktivieren | Wenn aktiviert, wird dieses Thema von der Auslastungsberechnung ausgeschlossen. |
| Ticket-Limits für dieses Thema überschreiben | Wenn aktiviert, kannst du ein separates Limit für offene Tickets für dieses Thema festlegen.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticketauslastung für dieses Thema deaktivieren" nicht aktiviert ist.*</blockquote></details></small> |
| Limit für offene Tickets für dieses Thema | Die maximale Anzahl an Tickets, die für dieses Thema geöffnet sein können.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticket-Limits für dieses Thema überschreiben" aktiviert ist.*</blockquote></details></small> |

### Erweiterte Nachrichten-Konfiguration {#advanced-message-configuration}

Diese Einstellungen werden separat für jedes aktivierte System (Modmail und Ticket-System) konfiguriert.

| Feld | Beschreibung |
| --- | --- |
| Auslastungsnachricht bei Warnstufe 1 senden | Wenn aktiviert, wird eine Nachricht an Nutzer gesendet, wenn die Auslastung Warnstufe 1 erreicht. |
| Auslastungsnachricht bei Warnstufe 1 | Diese Nachricht wird gesendet, wenn die Auslastung Warnstufe 1 erreicht.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Auslastungsnachricht bei Warnstufe 1 senden" aktiviert ist.*</blockquote></details></small> |
| Auslastungsnachricht bei Warnstufe 2 senden | Wenn aktiviert, wird eine Nachricht an Nutzer gesendet, wenn die Auslastung Warnstufe 2 erreicht.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn der Grenzwert der Warnstufe 1 nicht auf 100 gesetzt ist.*</blockquote></details></small> |
| Auslastungsnachricht bei Warnstufe 2 | Diese Nachricht wird gesendet, wenn die Auslastung Warnstufe 2 erreicht.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Auslastungsnachricht bei Warnstufe 2 senden" aktiviert ist.*</blockquote></details></small> |
