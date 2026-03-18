# Fehlerbehebung

Diese Anleitung hilft dir, häufige Probleme mit deinem SCNX-Eigenem-Bot zu lösen. Falls dein Problem ein bestimmtes Modul betrifft, schau bitte im Bereich [Modulspezifische Fehlerbehebung](#module-troubleshooting) weiter unten.

## Allgemeine Probleme {#general}

### Der Bot wird als offline angezeigt {#bot-offline}

<details>
  <summary>Der Bot wird auf Discord nicht als online angezeigt</summary>
  <ul>
    <li>Öffne dein <a href="https://scnx.app/de/glink?page=bot/manage">„Bot-Status“-Panel</a> und prüfe, ob der Bot läuft.</li>
    <li>Sollte der Bot offline sein, klicke auf „Bot starten“, damit er wieder erreichbar ist.</li>
    <li>Wird dein Bot als online angezeigt, ist aber in Discord noch offline? Hab ein wenig Geduld – es kann bis zu 5 Minuten dauern, bis Discord den Status übernimmt.</li>
    <li>Versuche, den Bot über das „Bot-Status“-Panel neu zu starten.</li>
    <li>Prüfe den Fehler-Log in deinem Dashboard auf Fehler beim Starten des Bots.</li>
  </ul>
</details>

### Der Bot reagiert nicht auf Befehle {#not-responding}

<details>
  <summary>Der Bot reagiert auf keine Slash-Befehle</summary>
  <ul>
    <li>Vergewissere dich, dass der Bot-Status auf „Online“ steht. (siehe <a href="#bot-offline">Der Bot wird auf Discord nicht als online angezeigt</a>).</li>
    <li>Stelle sicher, dass der Bot mit den korrekten Berechtigungen auf deinen Server eingeladen wurde. Lade den Bot erneut über dein <a href="https://scnx.app/de/glink?page=bot/manage">Dashboard</a> ein, falls benötigt.</li>
    <li>Stelle sicher, dass der Bot über die <code>Kanäle ansehen</code> und <code>Nachrichten senden</code> Berechtigungen im entsprechenden Kanal verfügt.</li>
    <li>Prüfe in deinen Discord-Servereinstellungen, ob der Befehl auf bestimmte Rollen oder Kanäle beschränkt ist (Servereinstellungen > Integrations).</li>
    <li>Versuche, die Konfiguration des Bots über das „Bot-Status“-Panel neu zu laden.</li>
  </ul>
</details>

### Slash-Befehle werden nicht angezeigt {#missing-commands}

<details>
  <summary>Slash-Befehle werden in der Befehlsauswahl nicht angezeigt</summary>
  <ul>
    <li>Stelle sicher, dass das Modul, welches den Befehl bereitstellt, in deinem <a href="https://scnx.app/de/glink?page=bot/modules">Dashboard</a> aktiviert ist.</li>
    <li>Lade nach dem Aktivieren eines Moduls die Konfiguration deines Bots neu oder starte den Bot neu.</li>
    <li>Discord kann bis zu einer Stunde benötigen, um Slash-Befehle überall zu synchronisieren. Versuche, deinen Discord-Client neu zu starten.</li>
    <li>Stelle sicher, dass der Bot über die <code>applications.commands</code> Berechtigungen verfügt. Du kannst dies überprüfen, indem du den Bot über dein Dashboard erneut einlädst.</li>
    <li>Prüfe in deinen Discord-Servereinstellungen, ob der Befehl auf bestimmte Rollen oder Kanäle beschränkt ist (Servereinstellungen > Integrations > Dein Bot).</li>
  </ul>
</details>

## Fehler bei den Berechtigungen {#permissions}

### Missing Access / Missing Permissions {#missing-access}

Viele Probleme mit dem Eigenen-Bot werden durch fehlende Berechtigungen verursacht. Wenn der Bot nicht wie erwartet funktioniert, zeigt der Fehler-Log in deinem Dashboard oft Fehler wie „Missing Access“ oder „Missing Permissions“ an.

Hier findest du die häufigsten Probleme mit Berechtigungen und deren Lösungen:

<details>
  <summary>Missing Access</summary>

  Der Bot hat keinen Zugriff auf den Kanal, in dem er agieren soll. Um dies zu beheben:
  <ol>
    <li>Öffne die Kanaleinstellungen in Discord.</li>
    <li>Klicke auf den Bereich „Berechtigungen“</li>
    <li>Füge die Rolle des Bots (oder den Bot selbst) hinzu und gewähre die <code>Kanal anzeigen</code> Berechtigung.</li>
    <li>Wenn der Kanal einer Kategorie untergeordnet ist, vergewissere dich, dass der Bot auch auf die entsprechende Kategorie Zugriff hat.</li>
  </ol>
</details>

<details>
  <summary>Missing Permissions to send messages</summary>

  Falls der Bot den Kanal sehen, aber nicht darin schreiben kann: Erteile dem Bot in den Kanaleinstellungen folgende Rechte:
  <ul>
    <li><code>Nachrichten senden</code></li>
    <li><code>Links einbetten</code> (für Embeds benötigt)</li>
    <li><code>Dateien anhängen</code> (falls der Bot Bilder oder Dateien senden soll)</li>
  </ul>
</details>

<details>
  <summary>Missing Permissions to manage roles</summary>

Dem Bot fehlt die Berechtigung, Rollen zu vergeben oder zu entziehen. Zur Problemlösung:
  <ol>
    <li>Stelle sicher, dass der Bot über die Berechtigung <code>Rollen verwalten</code> auf deinem Server verfügt</li>
    <li>In der Rollenhierarchie des Servers (Servereinstellungen > Rollen) muss die Rolle des Bots <strong>über</strong> den Rollen stehen, die er verwalten soll.</li>
    <li>Der Bot kann niemals Rollen verwalten, die höher als seine eigene höchste Rolle eingestuft sind oder auf derselben Ebene liegen.</li>
  </ol>
</details>

<details>
  <summary>Missing Permissions to manage channels</summary>

 Der Bot kann die Kanaleinstellungen nicht ändern (z. B. für Kanalstatistiken, temporäre Kanäle oder zum Sperren). Gewähre dem Bot die Berechtigung <code>Kanäle verwalten</code> auf deinem Server oder in den spezifischen Kanälen.
</details>

<details>
  <summary>Missing Permissions to moderate members</summary>

 Der Bot kann Mitglieder nicht stummschalten (Muten). Stelle sicher:
  <ul>
    <li>Dass der Bot die <code>Mitglieder in Timeout</code> Berechtigung besitzt.</li>
    <li>Die Rolle des Bots in der Rollenhierarchie über der höchsten Rolle des Zielnutzers steht.</li>
  </ul>
</details>

<details>
  <summary>Missing Permissions to kick or ban members</summary>

  Stelle sicher, dass:
  <ul>
    <li>Der Bot über die <code>Mitglieder kicken, annehmen oder ablehnen</code> und/oder <code>Mitglieder bannen</code> Berechtigungen verfügt.</li>
    <li>Die Rolle des Bots in der Rollenhierarchie über der höchsten Rolle des Zielnutzers steht.</li>
    <li>Der Zielnutzer nicht der Server-Eigentümer ist (der Server-Eigentümer kann niemals gekickt oder gebannt werden).</li>
  </ul>
</details>

### Der Bot kann den Nicknamen des Server-Eigentümers nicht ändern {#owner-nickname}

Der Bot kann den Nicknamen des Server-Eigentümers nicht ändern. Dies ist eine Einschränkung von Discord, die für alle Bots gilt – unabhängig von deren Berechtigungen oder ihrer Position in der Rollenhierarchie. Hierfür gibt es keine Umgehungsmöglichkeit.

## Fehler bei der Konfiguration {#configuration}

<details>
  <summary>Änderungen an der Konfiguration werden nicht übernommen</summary>
  <ul>
    <li>Nachdem du die Einstellungen im Dashboard geändert hast, musst du die Konfiguration über das <a href="https://scnx.app/de/glink?page=bot/manage">„Bot-Status“-Panel</a> neuladen.</li>
    <li>Einige Änderungen (wie das Aktivieren neuer Module) erfordern möglicherweise einen vollständigen Neustart des Bots.</li>
    <li>Überprüfe den Fehler-Log auf konfigurationsbezogene Fehler.</li>
  </ul>
</details>

<details>
  <summary>Ungültige Konfigurationswerte</summary>
  <ul>
    <li>Stelle sicher, dass alle Pflichtfelder ausgefüllt sind.</li>
    <li>Stelle sicher, dass alle verwendeten IDs für Kanäle und Rollen korrekt sind und die entsprechenden Kanäle oder Rollen nicht gelöscht wurden.</li>
    <li>Achte bei Embed-Konfigurationen darauf, dass du einen gültigen Hex-Farbcode verwendest (z. B. #7289DA). Siehe: <a href="/de/docs/custom-bot/additional-features/#embed-colors">Unterstützte Farbwerte</a>.</li>
    <li>Überprüfe den Fehler-Log in deinem Dashboard auf spezifische Fehlermeldungen bezüglich ungültiger Konfigurationen.</li>
  </ul>
</details>

## Häufige Fehlermeldungen in den Logs {#log-errors}

Hier findest du häufige Fehler, die du im Fehler-Log deines Bots finden kannst, und deren Bedeutung:

| Fehler | Bedeutung | Lösung |
|-------|---------|----------|
| `Missing Access` | Der Bot hat keinen Zugriff auf den Kanal. | Gewähre dem Bot im betroffenen Kanal die Berechtigung „Kanal anzeigen“. |
| `Missing Permissions` | Dem Bot fehlt eine erforderliche Berechtigung, für eine Handlung | Überprüfe, welche Berechtigung fehlt, und teile sie dem Bot zu. |
| `Unknown Channel` | Der in den Einstellungen hinterlegte Kanal wurde gelöscht. | Passe deine Einstellungen an und wähle einen existierenden Kanal aus. |
| `Unknown Role` | Die in den Einstellungen hinterlegte Rolle wurde gelöscht. | Passe deine Einstellungen an und wähle eine existierende Rolle aus. |
| `Unknown Message` | Die in der Konfiguration verknüpfte Nachricht ist nicht mehr vorhanden. | Konfiguriere das Modul neu oder lass den Bot die Nachricht neu erstellen. |
| `Invalid Form Body` | Eine Nachricht oder ein Embed überschreitet die Zeichenlimits von Discord. | Kürze deine konfigurierten Nachrichten oder den Inhalt des Embeds. |
| `DiscordAPIError[50013]` | Dem Bot fehlen die Berechtigungen für diese Aktion. | Überprüfe und korrigiere die Berechtigungen des Bots. (siehe [Fehler bei den Berechtigungen](#permissions)). |
| `DiscordAPIError[50001]` | Der Bot kann nicht auf die Ressource zugreifen. | Gewähre dem Bot Zugriff auf den Kanal oder die Ressource. |
| `DiscordAPIError[30005]` | Es gibt zu viele Rollen auf dem Server. | Discord begrenzt die Anzahl der Rollen. Entferne ungenutzte Rollen. |

## Verwendung des Fehler-Logs {#error-log}

Der Fehler-Log ist dein wichtigstes Werkzeug zur Diagnose von Problemen. Du findest es in deinem [„Bot-Status“-Panel](https://scnx.app/de/glink?page=bot/manage).

1. Öffne dein [Dashboard](https://scnx.app/de/glink?page=bot/manage) und klicke dort auf den Fehler-Log.
2. Suche nach aktuellen Fehlermeldungen, die dem Zeitraum deines Problems entsprechen.
3. Die Fehlermeldung enthält in der Regel den Namen des Moduls und eine Beschreibung dessen, was genau den Fehler verursacht hat
4. Falls du das Problem nicht selbst lösen kannst, teile den Fehler-Log mit dem [SCNX Support Team](https://scnx.app/help).

## Modulspezifische Fehlerbehebung {#module-troubleshooting}

Sollte der Fehler im Zusammenhang mit einem speziellen Modul stehen, schaue in den entsprechenden Fehlerbehebungs-Bereich für direkte Unterstützung:

### Administration-Module

* [Admin-Tools](/de/docs/custom-bot/modules/administration/admin-tools/#troubleshooting) - Verschieben von Kanälen/Rollen, Importieren von Emojis, temporäre Rollen
* [Automatisches Löschen](/de/docs/custom-bot/modules/administration/auto-delete/#troubleshooting) - Automatisches Löschen von Nachrichten
* [Kanal-Statistiken](/de/docs/custom-bot/modules/administration/channel-stats/#troubleshooting) - Statistik-Kanäle
* [Fortgeschrittenes Logging](/de/docs/custom-bot/modules/administration/logging/#troubleshooting) - Protokollierung von Serveränderungen
* [Partner-Liste](/de/docs/custom-bot/modules/administration/partner-list/#troubleshooting) - Partner-Liste
* [Status-Rollen](/de/docs/custom-bot/modules/administration/status-roles/#troubleshooting) - Rollen basierend auf dem Discord-Status
* [Vorschläge](/de/docs/custom-bot/modules/administration/suggestions/#troubleshooting) - Vorschlags-System
* [Teammitglieder-Ziele](/de/docs/custom-bot/modules/administration/team-goals/#troubleshooting) - Wöchentliche Nachrichtenziele für Teammitglieder
* [Teammitglieder-Liste](/de/docs/custom-bot/modules/administration/team-list/#troubleshooting) - Automatisch aktualisierendes Team-Embed
* [Willkommen und Boosts](/de/docs/custom-bot/modules/administration/welcomer/#troubleshooting) - Willkommens-, Abschieds- und Boost-Nachrichten

### Bot-Module

* [Betterstatus](/de/docs/custom-bot/modules/bot/betterstatus/#troubleshooting) - Benutzerdefinierter Bot-Status
* [Reaction Roles](/de/docs/custom-bot/modules/bot/reaction-roles/#troubleshooting) - Selbstzuweisbare Rollen via Reaktionen

### Community-Module

* [Aktivitäts-Streaks](/de/docs/custom-bot/modules/community/activity-streak/#troubleshooting) - Verfolgung von Aktivitäts-Streaks
* [Anonymer Chat](/de/docs/custom-bot/modules/community/anonymous-chat/#troubleshooting) - Anonyme Nachrichten
* [Geburtstags-Kalender](/de/docs/custom-bot/modules/community/birthday/#troubleshooting) - Verfolgung von Geburtstagen
* [Color me](/de/docs/custom-bot/modules/community/color-me/#troubleshooting) - Benutzerdefinierte Farbrollen
* [Economy](/de/docs/custom-bot/modules/community/economy-system/#troubleshooting) - Virtuelles Economy-System
* [Gewinnspiele](/de/docs/custom-bot/modules/community/giveaways/#troubleshooting) - Gewinnspiele-System
* [Sammel die Codes](/de/docs/custom-bot/modules/community/hunt-the-code/#troubleshooting) - Code-Suche Spiel
* [Level-System](/de/docs/custom-bot/modules/community/levels/#troubleshooting) - XP und Leveling
* [Live-Nachrichten](/de/docs/custom-bot/modules/community/live-messages/#troubleshooting) - Dynamische Statistik-Nachrichten
* [Rollen-Nicknamen](/de/docs/custom-bot/modules/community/nicknames/#troubleshooting) - Rollen-basierte Nicknames
* [Umfragen](/de/docs/custom-bot/modules/community/polls/#troubleshooting) - Umfragen-System
* [Erinnerungen](/de/docs/custom-bot/modules/community/reminders/#troubleshooting) - Erinnerungen-System
* [Serverinformationen](/de/docs/custom-bot/modules/community/serverinfo/#troubleshooting) - Kanal mit Serverinformationen
* [Starboard](/de/docs/custom-bot/modules/community/starboard/#troubleshooting) - Nachrichten Starboard
* [Sticky-Nachrichten](/de/docs/custom-bot/modules/community/sticky-messages/#troubleshooting) - Sticky-Nachrichten
* [Temporäre Channel](/de/docs/custom-bot/modules/community/temp-channels/#troubleshooting) - Temporäre Voice-Channel
 
### Spiele & Spaß-Module

* [Automatisches Reagieren](/de/docs/custom-bot/modules/fun/auto-react/#troubleshooting) - Automatisches Reagieren
* [Zähl-Spiel](/de/docs/custom-bot/modules/fun/counter/#troubleshooting) - Zähl-Spiel
* [Duel](/de/docs/custom-bot/modules/fun/duel/#troubleshooting) - Duell-Spiel
* [Emoji-Quiz](/de/docs/custom-bot/modules/fun/emoji-quiz/#troubleshooting) - Emoji-Quiz
* [Errate die Flagge!](/de/docs/custom-bot/modules/fun/flag-quiz/#troubleshooting) - Flaggen-Quiz
* [Fun-Befehle](/de/docs/custom-bot/modules/fun/#troubleshooting) - Soziale Interaktions-Befehle
* [Errate die Nummer](/de/docs/custom-bot/modules/fun/guess-the-number/#troubleshooting) - Errate die Nummer-Spiel
* [Winterliche Feiertage](/de/docs/custom-bot/modules/fun/holidays/#troubleshooting) - Feiertage Feature
* [Quiz-Modul](/de/docs/custom-bot/modules/fun/quiz/#troubleshooting) - Quiz
* [Schere Stein Papier](/de/docs/custom-bot/modules/fun/rock-paper-scissors/#troubleshooting) - Schere Stein Papier Spiel
* [Tic-Tac-Toe](/de/docs/custom-bot/modules/fun/tic-tak-toe/#troubleshooting) - Tic-Tac-Toe Spiel
* [UNO](/de/docs/custom-bot/modules/fun/uno/#troubleshooting) - UNO Spiel

### Integrationen-Module

* [Minecraft Server Status](/de/docs/custom-bot/modules/integrations/minecraft-status/#troubleshooting) - Minecraft Server Status
* [Reddit-Benachrichtigungen](/de/docs/custom-bot/modules/integrations/reddit-notifications/#troubleshooting) - Reddit-Benachrichtigungen
* [RSS-Benachrichtigungen](/de/docs/custom-bot/modules/integrations/rss-notifications/#troubleshooting) - Benachrichtigungen bei RSS-Beiträgen
* [Threads-Benachrichtigungen](/de/docs/custom-bot/modules/integrations/threads-notifications/#troubleshooting) - Benachrichtigungen bei Thread-Beiträgen
* [TikTok-Benachrichtigungen](/de/docs/custom-bot/modules/integrations/tiktok-notifications/#troubleshooting) - TikTok-Video-Benachrichtigungen
* [Twitch-Benachrichtigungen](/de/docs/custom-bot/modules/integrations/twitch-notifications/#troubleshooting) - Twitch-Stream-Benachrichtigungen
* [YouTube-Benachrichtigungen](/de/docs/custom-bot/modules/integrations/youtube-notifications/#troubleshooting) - YouTube-Video/Stream-Benachrichtigungen

### Moderation-Module

* [Anti-Ghostping](/de/docs/custom-bot/modules/moderation/anti-ghostping/#troubleshooting) - Ghost-Ping Erkennung
* [Info-Befehle](/de/docs/custom-bot/modules/moderation/info-commands/#troubleshooting) - Info-Befehle
* [Invite-Tracking](/de/docs/custom-bot/modules/moderation/invite-tracking/#troubleshooting) - Invite-Tracking
* [Moderation & Sicherheit](/de/docs/custom-bot/modules/moderation/#troubleshooting) - Umfassendes Moderations-System
* [Ping-Schutz](/de/docs/custom-bot/modules/moderation/ping-protection/#troubleshooting) - Ping-Schutz

### Support-Module

* [Bewerbungen](/de/docs/custom-bot/modules/support/applications/#troubleshooting) - Bewerbungs-System
* [Forum Support](/de/docs/custom-bot/modules/support/forum-support/#troubleshooting) - Foren-basierter Support
* [Sprachkanal-Aktionen](/de/docs/custom-bot/modules/support/ping-on-vc-join/#troubleshooting) - Sprachkanal-Beitrittsmeldungen
* [Ticket-System](/de/docs/custom-bot/modules/support/tickets/#troubleshooting) - Ticket-System

### Werkzeug-Module

* [AFK-System](/de/docs/custom-bot/modules/tools/afk-system/#troubleshooting) - AFK-Status-System
* [Automatische Nachrichten](/de/docs/custom-bot/modules/tools/auto-messager/#troubleshooting) - Automatisierte Nachrichten
* [Automatische Veröffentlichung](/de/docs/custom-bot/modules/tools/auto-publisher/#troubleshooting) - Automatische Veröffentlichung
* [Automatisches Thread-Erstellen](/de/docs/custom-bot/modules/tools/auto-thread/#troubleshooting) - Automatisches Thread-Erstellen
* [Massrole](/de/docs/custom-bot/modules/tools/massrole/#troubleshooting) - Massen-Rollen-Zuweisung
* [Namenslisten Cleaner](/de/docs/custom-bot/modules/tools/name-list-cleaner/#troubleshooting) - Automatische Namensbereinigung

## Benötigst du weitere Hilfe? {#help}

Falls keine der oben genannten Lösungen dein Problem behebt:

1. Kontrolliere den Fehler-Log deines [Dashboards](https://scnx.app/de/glink?page=bot/manage) auf spezifische Fehlermeldungen.
2. Versuche, die Konfiguration deines Bots neu zu laden oder den Bot neu zu starten.
3. Kontaktiere das [SCNX Support Team](https://scnx.app/help) und teile deinen Fehler-Log, um weitere Hilfe zu erhalten.
