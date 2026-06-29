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

## Forum-Support-Probleme {#forum-support}

### Neue Forum-Threads werden nicht bearbeitet {#forum-no-handling}

- Stelle sicher, dass **Forum-Support** aktiviert und der Forum-Kanal auf der Seite [Forum-Kanäle](https://scnx.app/glink?page=support-system/forum-support/channels) hinzugefügt ist.
- Der Kanal muss ein Discord-**Forum**-Kanal sein - kein normaler Textkanal.
- Prüfe die Berechtigungen des Bots im Forum-Kanal: Er braucht **Kanal ansehen**, **Nachrichten in Threads senden**, **Öffentliche Threads erstellen**, **Threads verwalten** und **Nachrichten verwalten**.
- Es werden nur Threads automatisch erfasst, die **nach** dem Aktivieren von Forum-Support erstellt wurden.

### Die `/forum`-Befehle werden nicht angezeigt {#forum-commands-missing}

- Die Befehle erscheinen nur, wenn Forum-Support [aktiviert](/de/docs/support-bot/forum-support/configuration#main) und das Feature für deinen Server verfügbar ist (Early Access).
- Discord kann ein paar Minuten brauchen, um Slash-Befehle zu aktualisieren - starte deinen Discord-Client vollständig neu.

### Das Team-Warteschlangen-Panel erscheint nicht {#forum-no-panel}

- Lege in der [Konfiguration](/de/docs/support-bot/forum-support/configuration#main) einen **Kanal für das Warteschlangen-Panel** fest.
- Der Bot braucht die Berechtigung, in diesem Kanal Nachrichten zu senden und zu bearbeiten.

### Mitglieder können nicht in ihrem eigenen Thread antworten {#forum-locked}

- Wenn du **Sperren bis beansprucht** aktiviert hast, bleibt der Thread gesperrt, bis ein Teammitglied ihn beansprucht - das Beanspruchen entsperrt ihn automatisch. Siehe [Claiming](/de/docs/support-bot/forum-support/claiming#lock-until-claimed).

### Nachrichten anderer Mitglieder werden immer wieder gelöscht {#forum-deleted}

- Das ist die Option **Nur Ersteller und Team dürfen schreiben**. Schalte sie in der [Konfiguration](/de/docs/support-bot/forum-support/configuration#thread-writing) aus, wenn alle kommentieren dürfen sollen.

### Priority-Threads kommen nicht in der Warteschlange nach vorn {#forum-priority}

- Priorität ergibt sich aus einem als priorisiert markierten [Thema](/de/docs/support-bot/forum-support/topics) oder aus den [Priority](/de/docs/support-bot/forum-support/configuration#priority)-Einstellungen eines Forum-Kanals (Priority-Rollen oder -Tag). Stelle sicher, dass eines davon konfiguriert ist.

### Feedback oder Schließ-DMs werden nicht gesendet {#forum-feedback-dm}

- Das Mitglied hat möglicherweise DMs deaktiviert - der Bot kann Nutzern, die Direktnachrichten blockieren, nichts senden.
- Prüfe beim Feedback, dass es [aktiviert](/de/docs/support-bot/forum-support/support-feedback) ist und der Thread länger als die konfigurierte Mindestdauer bestand.

## AI-FAQ-Probleme {#ai-faq}

### Der AI-FAQ-Bereich fehlt in meinem Dashboard {#ai-faq-missing}

- AI FAQ ist eine Early-Access-Beta. Wenn du den Bereich nicht siehst, ist dein Server noch nicht in der Beta - fordere Zugang über das [Kontaktformular](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0) an.
- Dein Support-Bot muss v3 oder neuer sein - ältere Versionen enthalten AI FAQ nicht.

### Die KI beantwortet keine Fragen {#ai-not-answering}

- Schalte den Hauptschalter ein: **Einstellungen → AI FAQ auf diesem Server aktivieren**.
- Der Hauptschalter allein bewirkt nichts - du musst der KI auch sagen, **wo** sie antworten soll. Aktiviere die [Kanal-Auto-Antwort](/de/docs/support-bot/ai-faq/channel-mode) und/oder den [Pre-Ticket-Gatekeeper](/de/docs/support-bot/ai-faq/pre-ticket-gatekeeper).
- Die KI antwortet aus deiner Wissensdatenbank. Wenn du noch keine [FAQ-Einträge](/de/docs/support-bot/ai-faq/faq-entries) geschrieben hast, hat sie nichts, worauf sie antworten kann.
- Stelle sicher, dass du noch KI-Credits hast (siehe unten).

### Die KI hat plötzlich aufgehört zu antworten {#ai-out-of-credits}

- Wahrscheinlich sind deine **KI-Credits** aufgebraucht. Jede Antwort kostet Credits - prüfe **Einstellungen → Status** auf der AI-FAQ-Seite. Dein monatliches Guthaben wird am 25. aufgefüllt, oder du kaufst Credits nach. Siehe [Credits & Preise](/de/docs/support-bot/ai-faq/credits-and-pricing).

### Die Antworten sind unpassend oder nicht hilfreich {#ai-bad-answers}

- Die KI antwortet nur aus deinen [FAQ-Einträgen](/de/docs/support-bot/ai-faq/faq-entries) - füge klarere, spezifischere Einträge hinzu, die abdecken, was deine Mitglieder wirklich fragen.
- Nutze die [Insights](/de/docs/support-bot/ai-faq/insights), um zu sehen, was gefragt wird und wo die Antworten zu kurz greifen.

## Brauchst du noch Hilfe? {#still-need-help}

Wenn dein Problem hier nicht aufgelistet ist, erstelle gerne ein Ticket auf unserem [Discord-Server](https://scootk.it/dc-de) - wir helfen dir gerne weiter!
