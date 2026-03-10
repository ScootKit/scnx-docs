---
sidebar_position: 1
title: Bot-Konfiguration
description: Konfiguriere Blockierungsliste, Status, Branding und Team-Befehle für deinen Discord-Support-Bot.
---

# Bot-Konfiguration

## Hauptkonfiguration {#main-configuration}

### Funktionen {#main-configuration-features}

* Aktiviere die Blockierungsliste, um Nutzer daran zu hindern, Tickets zu erstellen.
* Nutze Slash-Befehle für die Blockierungsliste in Discord, um Nutzer mit optionalem Grund und optionaler Dauer hinzuzufügen oder zu entfernen.
* Passe die Zeitzone deines Bots an für korrekte Öffnungszeiten, Zeitstempel und Statistiken.



### Einrichtung {#main-configuration-setup}

* Besuche den Abschnitt [Hauptkonfiguration](https://scnx.app/glink?page=support-system/bot-configuration?show=main) in deinem Dashboard.
* [Konfiguriere](#main-configuration-configuration) die verfügbaren Optionen.

### Befehle {#main-configuration-commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
| --- | --- |
| ``/blocklist add user:<Nutzer> [reason:<Text>] [duration:<Dauer>]`` | Fügt einen Nutzer zur Blockierungsliste hinzu. Optional kannst du einen Grund und eine Dauer angeben (z.B. `2d4h` für 2 Tage und 4 Stunden). Ohne Dauer ist die Blockierung permanent. |
| ``/blocklist remove user:<Nutzer>`` | Entfernt einen Nutzer von der Blockierungsliste. |
| ``/blocklist status user:<Nutzer>`` | Zeigt an, ob ein Nutzer blockiert ist, einschließlich Grund und verbleibender Dauer. |
| ``/blocklist list`` | Zeigt alle aktuell blockierten Nutzer mit ihren Gründen und Dauern an. |

### Konfiguration {#main-configuration-configuration}

| Feld | Beschreibung |
| --- | --- |
| Blockierungsliste aktivieren | Aktiviert oder deaktiviert die Blockierungslisten-Funktion für deinen Support-Bot. Wenn aktiviert, werden die Blockierungslisten-Slash-Befehle verfügbar und blockierte Nutzer können keine Tickets erstellen. Die Blockierungsliste gilt sowohl für Modmail als auch für das Ticket-System. |
| Zeitzone deines Bots | Diese Zeitzone wird für die Öffnungszeiten, Zeitstempel in Statistiken und andere zeitbasierte Funktionen deines Bots verwendet. Stelle sicher, dass du sie auf die lokale Zeitzone deines Teams einstellst. |

## Bot-Konfiguration {#bot-configuration}

### Funktionen {#bot-configuration-features}

* Passe die Discord-Präsenz deines Bots an den Stil deines Servers an.
* Lege einen eigenen Status-Text fest, der im Profil deines Bots angezeigt wird.
* Wähle zwischen Aktivitätstypen wie „Spielt", „Streamt", „Hört zu", „Schaut", „Tritt an" oder „Benutzerdefiniert".



### Einrichtung {#bot-configuration-setup}

* Besuche den Abschnitt [Bot-Konfiguration](https://scnx.app/glink?page=support-system/bot-configuration?show=bot-config) in deinem Dashboard.
* [Konfiguriere](#bot-configuration-configuration) die verfügbaren Optionen.

### Konfiguration {#bot-configuration-configuration}

| Feld | Beschreibung |
| --- | --- |
| Bot-Status | Dieser Text wird als Status deines Bots auf Discord angezeigt (z.B. „Support-Tickets" oder „Schreibe mir für Hilfe"). |
| Bot-Status-Typ | Der Aktivitätstyp, der in Discord neben deinem Status-Text angezeigt wird. Optionen: „Spielt", „Streamt", „Hört zu", „Schaut", „Tritt an" oder „Benutzerdefiniert". |

## Bot-Branding {#bot-branding}

### Funktionen {#bot-branding-features}

* Passe die Standard-Embed-Fußzeile und das Bild an, die in allen Bot-Nachrichten verwendet werden.
* Stimme das Branding deines Bots auf die Identität deines Servers ab für ein professionelles Erscheinungsbild.



### Einrichtung {#bot-branding-setup}

* Besuche den Abschnitt [Bot-Branding](https://scnx.app/glink?page=support-system/bot-configuration?show=branding) in deinem Dashboard.
* [Konfiguriere](#bot-branding-configuration) die verfügbaren Optionen.

### Konfiguration {#bot-branding-configuration}

| Feld | Beschreibung |
| --- | --- |
| Standard-Embed-Fußzeile | Dieser Text wird als Standard-Fußzeile in allen Embed-Nachrichten deines Bots verwendet (z.B. Ticket-Nachrichten, Log-Nachrichten, Feedback-Nachrichten). |
| Standard-Fußzeilen-Bild | Diese Bild-URL wird neben dem Fußzeilen-Text in Embed-Nachrichten angezeigt. Verwende das Logo oder Icon deines Servers für einheitliches Branding. |

## Team-Befehle {#staff-commands}

### Funktionen {#staff-commands-features}

* Aktiviere den `/analytics`-Befehl, damit Teammitglieder Support-Statistiken direkt in Discord anzeigen können.
* Aktiviere den `/summary`-Befehl für KI-gestützte Ticket-Zusammenfassungen mit den KI-Credits deines Servers.
* Passe die Nachrichten an, die von den Statistik- und Zusammenfassungs-Befehlen angezeigt werden.



### Einrichtung {#staff-commands-setup}

* Besuche den Abschnitt [Team-Befehle](https://scnx.app/glink?page=support-system/bot-configuration?show=staff-commands) in deinem Dashboard.
* [Konfiguriere](#staff-commands-configuration) die verfügbaren Optionen.

### Befehle {#staff-commands-commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
| --- | --- |
| ``/analytics`` | Zeigt serverweite Support-Statistiken (offene Tickets, durchschnittliche Antwortzeit, Schließungszeit, Bewertungen und mehr).<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn „Statistik-Befehl aktivieren" aktiviert ist.*</blockquote></details></small> |
| ``/analytics staff:<Nutzer>`` | Zeigt Statistiken für ein bestimmtes Teammitglied (gesendete Nachrichten, Antwortzeit, bearbeitete Tickets).<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn „Statistik-Befehl aktivieren" aktiviert ist.*</blockquote></details></small> |
| ``/summary`` | Generiert eine KI-gestützte Zusammenfassung des aktuellen Tickets.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn „Zusammenfassungs-Befehl aktivieren" aktiviert ist. Nutzt die [KI-Credits](https://faq.scnx.app/ki-auf-scnx/) deines Servers.*</blockquote></details></small> |

### Konfiguration {#staff-commands-configuration}

| Feld | Beschreibung |
| --- | --- |
| Statistik-Befehl aktivieren | Wenn aktiviert, können Teammitglieder den ``/analytics``-Befehl nutzen, um Support-Statistiken direkt in Discord anzuzeigen. |
| Statistik-Nachricht | Passe die Nachricht an, die beim Ausführen des ``/analytics``-Befehls angezeigt wird (serverweite Statistiken). Du kannst Platzhalter wie `%days%`, `%ticketCount%`, `%avgResponseTime%`, `%staffMessages%`, `%avgRating%`, `%ratingCount%` verwenden.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn „Statistik-Befehl aktivieren" aktiviert ist.*</blockquote></details></small> |
| Team-Statistik-Nachricht | Passe die Nachricht an, die beim Ausführen des ``/analytics staff``-Befehls angezeigt wird (Statistiken pro Teammitglied).<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn „Statistik-Befehl aktivieren" aktiviert ist.*</blockquote></details></small> |
| Zusammenfassungs-Befehl aktivieren | Wenn aktiviert, können Teammitglieder den ``/summary``-Befehl nutzen, um eine KI-Zusammenfassung des aktuellen Tickets zu generieren.<br/><small><details><summary>Hinweis</summary><blockquote>*Dies nutzt die [KI-Credits](https://faq.scnx.app/ki-auf-scnx/) deines Servers und teilt bestimmte Daten mit „modmail.net" (einem SCNX-Produkt). Datenschutzrichtlinie [hier](https://scootk.it/scnx-privacy).*</blockquote></details></small> |

## Öffnungszeiten {#opening-hours}

Unsere Dokumentationsseite für die Öffnungszeiten findest du [hier](/de/docs/support-bot/general/opening-hours).

## modmail.net Funktionen {#modmail-net-features}

Unsere Dokumentationsseite für die modmail.net Funktionen findest du [hier](/de/docs/support-bot/general/modmail-net).