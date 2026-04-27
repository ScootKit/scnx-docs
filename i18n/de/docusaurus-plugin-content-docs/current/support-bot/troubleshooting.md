---
sidebar_position: 4
title: Fehlerbehebung
description: Lösungen für häufige Probleme mit dem SCNX Support-Bot.
---

# Fehlerbehebung

## Allgemeine Probleme {#general}

### Der Bot ist offline oder reagiert nicht {#bot-offline}

- Stelle sicher, dass der Bot in deinem [Dashboard](https://scnx.app/glink?page=support-system/manage) online ist.
- Versuche den Bot über den Neuladen-Knopf im Dashboard neu zu starten.
- Überprüfe, ob der Bot auf deinen Server eingeladen wurde und die erforderlichen Berechtigungen hat.

### Befehle werden nicht angezeigt {#commands-not-showing}

- Stelle sicher, dass die Funktion, die zum Befehl gehört, in deinem Dashboard aktiviert ist.
- Überprüfe, ob der Bot die Berechtigung hat, Slash-Befehle auf deinem Server zu registrieren.
- Versuche den Bot zu entfernen und erneut über den Einladungslink in deinem [Dashboard](https://scnx.app/glink?page=support-system/manage) einzuladen.

### Der Bot sendet keine Nachrichten {#bot-not-sending}

- Überprüfe, ob der Bot die Berechtigungen "Nachrichten senden" und "Links einbetten" in den entsprechenden Kanälen hat.
- Wenn du Ticket-Kategorien verwendest, stelle sicher, dass der Bot die Berechtigung hat, Kanäle in der Kategorie zu verwalten.

## Modmail-Probleme {#modmail}

### Nutzer können keine Tickets per DM öffnen {#dm-tickets-not-working}

- Überprüfe, ob Modmail in deinem Dashboard [aktiviert](/de/docs/support-bot/modmail/configuration#main-configuration-configuration) ist.
- Stelle sicher, dass der Wartungsmodus nicht aktiviert ist.
- Überprüfe, ob der Nutzer nicht auf der [Blockierungsliste](/de/docs/support-bot/modmail/basics#blocklist) steht.
- Stelle sicher, dass der Nutzer einen gemeinsamen Server mit dem Bot hat und DMs aktiviert sind.
- Wenn [Öffnungszeiten](/de/docs/support-bot/general/opening-hours) konfiguriert und "Nachrichten-Verarbeitung außerhalb Öffnungszeiten komplett deaktivieren" aktiviert ist, können außerhalb der Öffnungszeiten keine Tickets erstellt werden.

### Ticket-Kanäle werden nicht erstellt {#no-ticket-channels}

- Überprüfe, ob die konfigurierte Ticket-Kategorie existiert und der Bot die Berechtigung "Kanäle verwalten" darin hat.
- Stelle sicher, dass die Kategorie nicht voll ist (Discord begrenzt Kategorien auf 50 Kanäle).

### Nachrichten werden nicht weitergeleitet {#messages-not-relayed}

- Überprüfe, ob der Ticket-Kanal noch existiert und der Bot die Berechtigung hat, dort Nachrichten zu senden.
- Stelle sicher, dass der Wartungsmodus nicht aktiviert ist.
- Überprüfe, ob der Nutzer nicht blockiert wurde.

## Ticket-System-Probleme {#ticket-system}

### Nutzer können keine Tickets öffnen {#tickets-not-opening}

- Überprüfe, ob das Ticket-System in deinem Dashboard [aktiviert](/de/docs/support-bot/ticket-system/configuration#main-configuration-configuration) ist.
- Stelle sicher, dass der Wartungsmodus nicht aktiviert ist.
- Überprüfe, ob der Nutzer nicht auf der Blockierungsliste steht.
- Wenn "Nur ein Ticket pro Nutzer erlauben" aktiviert ist, hat der Nutzer möglicherweise bereits ein offenes Ticket.
- Wenn Ticket-Themen mit benötigten Rollen konfiguriert sind, überprüfe, ob der Nutzer die erforderlichen Rollen hat.
- Wenn [Öffnungszeiten](/de/docs/support-bot/general/opening-hours) konfiguriert sind, überprüfe, ob der Support-Bot gerade geschlossen ist.

### Ticket-Eröffnungsnachrichten erscheinen nicht {#opening-messages-not-appearing}

- Stelle sicher, dass du mindestens eine [Ticket-Eröffnungsnachricht](/de/docs/support-bot/ticket-system/configuration#ticket-open-messages) in deinem Dashboard konfiguriert hast.
- Überprüfe, ob der Bot die Berechtigung hat, im konfigurierten Kanal Nachrichten zu senden.
- Lade den Bot nach Konfigurationsänderungen neu.

### Ticket-Claiming funktioniert nicht {#claiming-not-working}

- Überprüfe, ob Ticket-Claiming in deinem Dashboard [aktiviert](/de/docs/support-bot/ticket-system/claiming#main-configuration) ist.
- Stelle sicher, dass der Claim-Knopf aktiviert ist, wenn Teammitglieder per Knopf claimen sollen.
- Überprüfe, ob der Benachrichtigungskanal existiert und der Bot die Berechtigung hat, dort Nachrichten zu senden.

## Voice-Support-Probleme {#voice-support}

### Die `/voice`-Befehle werden nicht angezeigt {#voice-commands-missing}

- Voice Support ist eine Early-Access-Preview. Die `/voice`-Befehle werden nur registriert, solange der Serverinhaber den Early-Access-Perk der [ScootKit-Mitgliedschaft](https://membership.scootkit.com) besitzt.
- Stelle sicher, dass Voice Support in deinem Dashboard [aktiviert](/de/docs/support-bot/voice-support/configuration#main-configuration-configuration) ist.
- Lade den Bot nach dem Umschalten der Early-Access- oder „Voice Support aktivieren"-Schalter neu - die Slash-Befehlsliste wird erst beim Neustart des Bots aktualisiert.

### Voice Support bleibt offline {#voice-support-offline}

- Prüfe den **Status-Modus**. Im Modus `staff-presence` ist Voice Support geschlossen, bis mindestens ein Teammitglied einem Kanal in der Support-Kategorie beitritt. Im Modus `opening-hours` ist er außerhalb der konfigurierten [Öffnungszeiten](/de/docs/support-bot/general/opening-hours) geschlossen.
- Stelle sicher, dass ein Mitglied einer [Team-Rolle](/de/docs/support-bot/voice-support/configuration#main-configuration-configuration) in einem Sprachkanal **innerhalb der Support-Kategorie** verbunden ist (nicht im Warteschlangen-Kanal selbst).
- Wenn du Voice Support gerade aktiviert hast, warte bis zu 60 Sekunden auf die Aktualisierung des Dashboard-Embeds - der Status-Ticker läuft einmal pro Minute.

### Nutzer erhalten keine Positions-DMs {#no-position-dms}

- Der Nutzer muss **Direktnachrichten von Server-Mitgliedern** in den Discord-Datenschutzeinstellungen aktiviert haben. Der Bot kann keinen Nutzer anschreiben, dessen DMs für den Server geschlossen sind.
- Prüfe, ob der Nutzer tatsächlich dem [Warteschlangen-Sprachkanal](/de/docs/support-bot/voice-support/configuration#main-configuration-configuration) beigetreten ist - nicht direkt einem Support-Kanal.
- Wenn Positions-Updates mittendrin aufhören anzukommen, hat der Nutzer möglicherweise die ursprüngliche DM-Nachricht gelöscht; der Bot bearbeitet die bestehende DM, statt eine neue zu senden.

### „Nächsten Nutzer holen"-Knopf reagiert nicht / ist ausgegraut {#pull-next-not-working}

- Der Knopf ist deaktiviert, solange Voice Support offline oder die Warteschlange leer ist - prüfe den Status im Dashboard-Embed.
- Das klickende Teammitglied muss in einem **Support-Kanal** sitzen (jeder Sprachkanal in der Support-Kategorie außer dem Warteschlangen-Kanal). Klicks aus dem Warteschlangen-Kanal werden absichtlich ignoriert - die Warteschlange ist für Nutzer, nicht für das Team.
- Bestätige, dass das klickende Mitglied eine der konfigurierten [Team-Rollen](/de/docs/support-bot/voice-support/configuration#main-configuration-configuration) hat.

### Wartemusik spielt nicht {#music-not-playing}

- Prüfe, ob **Wartemusik aktivieren** eingeschaltet ist und mindestens ein Track im [Wartemusik-Abschnitt](/de/docs/support-bot/voice-support/configuration#waiting-music) konfiguriert ist.
- Wenn drei Tracks in Folge fehlschlagen, deaktiviert der Bot die Wiedergabe automatisch und postet einen Hinweis im [Dashboard-Kanal](/de/docs/support-bot/voice-support/configuration#dashboard-channel). Fehlerhafte URLs korrigieren oder ersetzen und die Musik wieder aktivieren.
- Mit aktiviertem **Auf Abruf verbinden** verbindet sich der Bot erst, wenn ein Nutzer dem Warteschlangen-Kanal beitritt - eine leere Warteschlange bedeutet beabsichtigt keine laufende Musik.
- KI-generierte Tracks, die nach dem Löschen aus der [Dateibibliothek](/de/docs/scnx/guilds/files) 404 zurückgeben, schlagen bei der Wiedergabe fehl - generiere sie erneut oder lade eine Ersatzdatei hoch.

### Warteschlangen-Kanalname wechselt nicht zwischen Offen/Offline {#channel-name-stuck}

- Stelle sicher, dass **Kanal-Umbenennung aktivieren** eingeschaltet ist und beide Online-/Offline-Namen gesetzt sind - ein leerer Zielname überspringt diesen Übergang einfach.
- Discord begrenzt Kanal-Umbenennungen auf 2 pro 10 Minuten. Der Bot erzwingt auf seiner Seite eine 4-minütige Abkühlzeit; schnelle Offen/Offline-Wechsel können eine Umbenennung verzögern, bis die Abkühlzeit abgelaufen ist.
- Bestätige, dass der Bot die Berechtigung **Kanäle verwalten** am Warteschlangen-Kanal hat.

## Brauchst du noch Hilfe? {#still-need-help}

Wenn dein Problem hier nicht aufgelistet ist, erstelle gerne ein Ticket auf unserem [Discord-Server](https://scootk.it/dc-de) - wir helfen dir gerne weiter!
