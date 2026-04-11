---
sidebar_position: 4
title: Fehlerbehebung
description: Lösungen für häufige Probleme mit dem SCNX Support-Bot.
---

# Fehlerbehebung

## Allgemeine Probleme {#general}

### Der Bot ist offline oder reagiert nicht {#bot-offline}

* Stelle sicher, dass der Bot in deinem [Dashboard](https://scnx.app/glink?page=support-system/manage) online ist.
* Versuche den Bot über den Neuladen-Knopf im Dashboard neu zu starten.
* Überprüfe, ob der Bot auf deinen Server eingeladen wurde und die erforderlichen Berechtigungen hat.

### Befehle werden nicht angezeigt {#commands-not-showing}

* Stelle sicher, dass die Funktion, die zum Befehl gehört, in deinem Dashboard aktiviert ist.
* Überprüfe, ob der Bot die Berechtigung hat, Slash-Befehle auf deinem Server zu registrieren.
* Versuche den Bot zu entfernen und erneut über den Einladungslink in deinem [Dashboard](https://scnx.app/glink?page=support-system/manage) einzuladen.

### Der Bot sendet keine Nachrichten {#bot-not-sending}

* Überprüfe, ob der Bot die Berechtigungen "Nachrichten senden" und "Links einbetten" in den entsprechenden Kanälen hat.
* Wenn du Ticket-Kategorien verwendest, stelle sicher, dass der Bot die Berechtigung hat, Kanäle in der Kategorie zu verwalten.

## Modmail-Probleme {#modmail}

### Nutzer können keine Tickets per DM öffnen {#dm-tickets-not-working}

* Überprüfe, ob Modmail in deinem Dashboard [aktiviert](/de/docs/support-bot/modmail/configuration#main-configuration-configuration) ist.
* Stelle sicher, dass der Wartungsmodus nicht aktiviert ist.
* Überprüfe, ob der Nutzer nicht auf der [Blockierungsliste](/de/docs/support-bot/modmail/basics#blocklist) steht.
* Stelle sicher, dass der Nutzer einen gemeinsamen Server mit dem Bot hat und DMs aktiviert sind.
* Wenn [Öffnungszeiten](/de/docs/support-bot/general/opening-hours) konfiguriert und "Nachrichten-Verarbeitung außerhalb Öffnungszeiten komplett deaktivieren" aktiviert ist, können außerhalb der Öffnungszeiten keine Tickets erstellt werden.

### Ticket-Kanäle werden nicht erstellt {#no-ticket-channels}

* Überprüfe, ob die konfigurierte Ticket-Kategorie existiert und der Bot die Berechtigung "Kanäle verwalten" darin hat.
* Stelle sicher, dass die Kategorie nicht voll ist (Discord begrenzt Kategorien auf 50 Kanäle).

### Nachrichten werden nicht weitergeleitet {#messages-not-relayed}

* Überprüfe, ob der Ticket-Kanal noch existiert und der Bot die Berechtigung hat, dort Nachrichten zu senden.
* Stelle sicher, dass der Wartungsmodus nicht aktiviert ist.
* Überprüfe, ob der Nutzer nicht blockiert wurde.

## Ticket-System-Probleme {#ticket-system}

### Nutzer können keine Tickets öffnen {#tickets-not-opening}

* Überprüfe, ob das Ticket-System in deinem Dashboard [aktiviert](/de/docs/support-bot/ticket-system/configuration#main-configuration-configuration) ist.
* Stelle sicher, dass der Wartungsmodus nicht aktiviert ist.
* Überprüfe, ob der Nutzer nicht auf der Blockierungsliste steht.
* Wenn "Nur ein Ticket pro Nutzer erlauben" aktiviert ist, hat der Nutzer möglicherweise bereits ein offenes Ticket.
* Wenn Ticket-Themen mit benötigten Rollen konfiguriert sind, überprüfe, ob der Nutzer die erforderlichen Rollen hat.
* Wenn [Öffnungszeiten](/de/docs/support-bot/general/opening-hours) konfiguriert sind, überprüfe, ob der Support-Bot gerade geschlossen ist.

### Ticket-Eröffnungsnachrichten erscheinen nicht {#opening-messages-not-appearing}

* Stelle sicher, dass du mindestens eine [Ticket-Eröffnungsnachricht](/de/docs/support-bot/ticket-system/configuration#ticket-open-messages) in deinem Dashboard konfiguriert hast.
* Überprüfe, ob der Bot die Berechtigung hat, im konfigurierten Kanal Nachrichten zu senden.
* Lade den Bot nach Konfigurationsänderungen neu.

### Ticket-Claiming funktioniert nicht {#claiming-not-working}

* Überprüfe, ob Ticket-Claiming in deinem Dashboard [aktiviert](/de/docs/support-bot/ticket-system/claiming#main-configuration) ist.
* Stelle sicher, dass der Claim-Knopf aktiviert ist, wenn Teammitglieder per Knopf claimen sollen.
* Überprüfe, ob der Benachrichtigungskanal existiert und der Bot die Berechtigung hat, dort Nachrichten zu senden.

## Brauchst du noch Hilfe? {#still-need-help}

Wenn dein Problem hier nicht aufgelistet ist, erstelle gerne ein Ticket auf unserem [Discord-Server](https://scootk.it/dc-de)  - wir helfen dir gerne weiter!
