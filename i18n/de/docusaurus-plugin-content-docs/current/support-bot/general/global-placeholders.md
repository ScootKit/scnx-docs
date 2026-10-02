---
sidebar_position: 8
title: Globale Platzhalter
description: Nutze globale Platzhalter, um Bot-Identität, Server-Infos, Zeitstempel, Öffnungszeiten und Live-Ticket-Metriken in jeder anpassbaren Nachricht oder jedem Kanalnamen anzuzeigen.
---

# Globale Platzhalter

## Funktionen {#features}

- Nutze Bot-Identität, Server-Infos und Zeitstempel als Platzhalter in jeder anpassbaren Nachricht - sie werden beim Senden der Nachricht automatisch ersetzt.
- Nutze Live-Ticket-Metriken (Auslastung, geschätzte Wartezeit) in Ticketöffnungsnachrichten, Willkommensnachrichten, Namen von Statistik-Kanälen und mehr.
- Zeige Metriken pro Thema an, um Nutzern konkrete Informationen zu dem von ihnen gewählten Thema zu geben.
- Platzhalter aktualisieren sich automatisch anhand von Echtzeitdaten.

## Einrichtung {#setup}

- Bot-, Server-, Zeitstempel- und Öffnungszeiten-Platzhalter sind immer verfügbar - keine Konfiguration erforderlich.
- Für Ticket-Metrik-Platzhalter: Aktiviere [Ticket-Auslastung](/de/docs/support-bot/general/ticket-utilization) und/oder [Geschätzte Wartezeit](/de/docs/support-bot/general/estimated-wait-time) in deinem Dashboard.
- Verwende die folgenden Platzhalter in jedem anpassbaren Nachrichtenfeld (Ticketöffnungsnachrichten, Willkommensnachrichten, Namen von [Statistik-Kanälen](/de/docs/support-bot/modmail/configuration#statistics-channels) usw.).

:::info
Nicht jeder Platzhalter ist in jedem Kontext verfügbar. Bot-, Server-, Zeitstempel- und Öffnungszeiten-Platzhalter funktionieren in jeder anpassbaren Nachricht. Ticket-Metrik-Platzhalter funktionieren in Ticketöffnungsnachrichten, Willkommensnachrichten, Auslastungs-/Wartezeit-Nachrichten und Statistik-Kanälen. Funktionsspezifische Platzhalter (zum Beispiel `%staffUser%` oder `%estimatedWaitTime%`) sind nur in den Nachrichten verfügbar, die auf den jeweiligen Funktionsseiten dokumentiert sind.
:::

## Verfügbare Platzhalter {#available-placeholders}

### Bot {#bot-placeholders}

| Platzhalter    | Beschreibung                           |
| -------------- | -------------------------------------- |
| `%botName%`    | Anzeigename des Bots.                  |
| `%botID%`      | Nutzer-ID des Bots.                    |
| `%botAvatar%`  | Avatar-URL des Bots.                   |
| `%botTag%`     | Vollständiger Tag des Bots.            |
| `%botMention%` | Erwähnung des Bots (z.B. `<@123...>`). |

### Server {#server-placeholders}

| Platzhalter   | Beschreibung          |
| ------------- | --------------------- |
| `%guildName%` | Name des Servers.     |
| `%guildID%`   | ID des Servers.       |
| `%guildIcon%` | Icon-URL des Servers. |

### Zeitstempel {#timestamp-placeholders}

Zeitstempel-Platzhalter verwenden die [native Zeitstempel-Formatierung von Discord](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles) und passen sich automatisch an Zeitzone und Sprache jedes Nutzers an. Sie werden im Moment des Sendens der Nachricht ausgewertet.

| Platzhalter       | Discord-Stil | Beschreibung                                             |
| ----------------- | ------------ | -------------------------------------------------------- |
| `%timestamp%`     | `f`          | Kurzes Datum/Uhrzeit (wie `%shortDateTime%`).            |
| `%shortTime%`     | `t`          | Kurze Uhrzeit (z.B. 16:20).                              |
| `%longTime%`      | `T`          | Lange Uhrzeit (z.B. 16:20:30).                           |
| `%shortDate%`     | `d`          | Kurzes Datum (z.B. 05.04.2026).                          |
| `%longDate%`      | `D`          | Langes Datum (z.B. 5. April 2026).                       |
| `%shortDateTime%` | `f`          | Kurzes Datum/Uhrzeit.                                    |
| `%longDateTime%`  | `F`          | Langes Datum/Uhrzeit.                                    |
| `%relativeTime%`  | `R`          | Relative Zeit (z.B. „gerade eben" oder „vor 2 Minuten"). |

### Öffnungszeiten {#opening-hours-placeholder}

| Platzhalter      | Beschreibung                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `%openingHours%` | Eine formatierte Darstellung deiner konfigurierten [Öffnungszeiten](/de/docs/support-bot/general/opening-hours). Leer, wenn keine Öffnungszeiten konfiguriert sind. |

### Globale Metriken {#global-metrics}

Diese Platzhalter zeigen Metriken über alle Tickets im System.

| Platzhalter                        | Beschreibung                                                                                                                                                                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `%globalUtilization%`              | Die aktuelle Ticket-Auslastung als formatierter Prozentwert (z.B. „75 %").<br/><small><details><summary>Voraussetzung</summary><blockquote>_Erfordert, dass [Ticket-Auslastung](/de/docs/support-bot/general/ticket-utilization) aktiviert ist._</blockquote></details></small>                                    |
| `%globalUtilizationCount%`         | Die Anzahl der aktuell offenen Tickets.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Erfordert, dass [Ticket-Auslastung](/de/docs/support-bot/general/ticket-utilization) aktiviert ist._</blockquote></details></small>                                                                       |
| `%globalUtilizationEmoji%`         | Ein visuelles Indikator-Emoji passend zur aktuellen Auslastung (grüner Kreis, gelber Kreis oder roter Kreis).<br/><small><details><summary>Voraussetzung</summary><blockquote>_Erfordert, dass [Ticket-Auslastung](/de/docs/support-bot/general/ticket-utilization) aktiviert ist._</blockquote></details></small> |
| `%globalEstimatedWaitTime%`        | Die geschätzte Wartezeit als formatierte Dauer (z.B. „15 Minuten").<br/><small><details><summary>Voraussetzung</summary><blockquote>_Erfordert, dass [Geschätzte Wartezeit](/de/docs/support-bot/general/estimated-wait-time) aktiviert ist._</blockquote></details></small>                                       |
| `%globalEstimatedWaitTimeMinutes%` | Die geschätzte Wartezeit als Zahl in Minuten.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Erfordert, dass [Geschätzte Wartezeit](/de/docs/support-bot/general/estimated-wait-time) aktiviert ist._</blockquote></details></small>                                                             |

### Metriken pro Thema {#per-topic-metrics}

Diese Platzhalter zeigen Metriken für ein bestimmtes Ticket-Thema. Ersetze `{topicID}` durch die eindeutige ID des Themas.

| Platzhalter                                 | Beschreibung                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `%topicUtilization-{topicID}%`              | Der Auslastungs-Prozentwert für das angegebene Thema.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Erfordert, dass [Ticket-Auslastung](/de/docs/support-bot/general/ticket-utilization) aktiviert ist und das Thema die Auslastung aktiviert hat._</blockquote></details></small>                    |
| `%topicUtilizationCount-{topicID}%`         | Die Anzahl der aktuell offenen Tickets für das angegebene Thema.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Erfordert, dass [Ticket-Auslastung](/de/docs/support-bot/general/ticket-utilization) aktiviert ist und das Thema die Auslastung aktiviert hat._</blockquote></details></small>         |
| `%topicUtilizationEmoji-{topicID}%`         | Ein visuelles Indikator-Emoji für die Auslastung des angegebenen Themas.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Erfordert, dass [Ticket-Auslastung](/de/docs/support-bot/general/ticket-utilization) aktiviert ist und das Thema die Auslastung aktiviert hat._</blockquote></details></small> |
| `%topicEstimatedWaitTime-{topicID}%`        | Die geschätzte Wartezeit für das angegebene Thema als formatierte Dauer.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Erfordert, dass [Geschätzte Wartezeit](/de/docs/support-bot/general/estimated-wait-time) aktiviert ist._</blockquote></details></small>                                        |
| `%topicEstimatedWaitTimeMinutes-{topicID}%` | Die geschätzte Wartezeit für das angegebene Thema in Minuten.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Erfordert, dass [Geschätzte Wartezeit](/de/docs/support-bot/general/estimated-wait-time) aktiviert ist._</blockquote></details></small>                                                   |

:::info
Ist die für einen Platzhalter erforderliche Funktion nicht aktiviert oder sind keine Daten verfügbar, wird der Platzhalter zu „Not available" aufgelöst.
:::

## Wo du sie verwenden kannst {#where-to-use}

Bot-, Server-, Zeitstempel- und Öffnungszeiten-Platzhalter können in **jedem** anpassbaren Nachrichtenfeld verwendet werden (die Beispiele unten gelten auch für sie).

Ticket-Metrik-Platzhalter können verwendet werden in:

- **[Ticketöffnungsnachrichten](/de/docs/support-bot/modmail/configuration#ticket-open-messages)** - zeige Nutzern den aktuellen Warteschlangen-Status, bevor sie ein Ticket öffnen.
- **[Willkommensnachrichten](/de/docs/support-bot/modmail/configuration#main-configuration)** - informiere Nutzer über die erwartete Wartezeit, wenn ihr Ticket erstellt wird.
- **[Namen von Statistik-Kanälen](/de/docs/support-bot/modmail/configuration#statistics-channels)** - zeige Live-Metriken in Sprachkanalnamen an (alle 15 Minuten aktualisiert).
- **[Auslastungsnachrichten](/de/docs/support-bot/general/ticket-utilization#advanced-message-configuration)** - reichere Auslastungswarnungen mit konkreten Zahlen an.
- **[Nachrichten zur geschätzten Wartezeit](/de/docs/support-bot/general/estimated-wait-time#message-configuration)** - kombiniere globale und themenspezifische Wartezeiten.

:::tip
Erhält eine Nachrichtenvorlage sowohl globale Platzhalter als auch eigene funktionsspezifische Platzhalter (wie `%topic%` oder `%userID%`), haben bei einer Namensüberschneidung die funktionsspezifischen Platzhalter Vorrang.
:::
