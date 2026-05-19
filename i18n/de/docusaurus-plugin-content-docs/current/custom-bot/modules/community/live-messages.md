# Live-Nachrichten

Sende Nachrichten mit dynamischen Server-Statistiken (Mitglieder, Boosts, Kanäle und mehr), die sich alle 5 Minuten automatisch aktualisieren.

<ModuleOverview moduleName="live-messages" />

## Funktionen {#features}

- Sende Nachrichten, die Live-Serverstatistiken anzeigen und sich alle 5 Minuten automatisch aktualisieren.
- Verwende eine Vielzahl von Parametern für Mitgliederzahlen, Kanalanzahlen, Boost-Statistiken und mehr.
- Zeige Statistiken von anderen aktivierten Modulen an, wie etwa offene Tickets, aktive Gewinnspiele, Level-Statistiken und Moderationsaktionen.
- Zähle Mitglieder mit einer bestimmten Rolle mithilfe dynamischer Rollenparameter.
- Unterstützung für Embeds zur Erstellung detailreicher, formatierter Statistik-Anzeigen.
- Falls eine Live-Nachricht gelöscht wird, erstellt der Bot diese beim nächsten Update automatisch neu.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=live-messages) auf deinem Server.
2. Öffne die [Konfiguration](#configuration) und füge ein neues Live-Nachrichten-Element hinzu.
3. Wähle den Kanal aus, in dem die Nachricht gesendet werden soll, und konfiguriere den Nachrichteninhalt mithilfe der verfügbaren [Parameter](#parameters).
4. Stelle sicher, dass der Bot in dem konfigurierten Kanal über die Berechtigungen `Kanal anzeigen`, `Nachrichten senden` und `Links einbetten` verfügt.
5. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nach der Einrichtung und Konfiguration einer Live-Nachricht wird der Bot diese automatisch alle 5 Minuten senden und aktualisieren. Es sind keine weiteren Maßnahmen erforderlich.

- Der Bot ersetzt vor dem Senden alle Parameter in der Nachricht durch aktuelle Server-Statistiken.
- Falls die Nachricht gelöscht wird, sendet der Bot beim nächsten Aktualisierungszyklus eine neue.
- Du kannst mehrere Live-Nachrichten konfigurieren, jeweils in einem anderen Kanal mit unterschiedlichen Inhalten.

### Verfügbare Parameter {#parameters}

Die folgenden Parameter können in deinem Live-Nachrichteninhalt verwendet werden. Sie werden bei jeder Aktualisierung durch die aktuellen Werte ersetzt.

**Mitglieder-Statistiken**

| Parameter                        | Beschreibung                                                                      |
| -------------------------------- | --------------------------------------------------------------------------------- |
| `%memberCount%`                  | Anzahl der Mitglieder auf dem Server                                              |
| `%userCount%`                    | Anzahl der menschlichen Mitglieder (ohne Bots)                                    |
| `%botCount%`                     | Anzahl der Bots                                                                   |
| `%onlineMemberCount%`            | Mitglieder mit Online-Status                                                      |
| `%dndMemberCount%`               | Mitglieder mit dem Status Bitte nicht stören                                      |
| `%idleMemberCount%`              | Mitglieder mit dem Status Abwesend                                                |
| `%offlineMemberCount%`           | Mitglieder mit Offline-Status                                                     |
| `%voiceUserCount%`               | Mitglieder, die sich derzeit in Sprachkanälen befinden                            |
| `%userWithRoleCount-<ID>%`       | Mitglieder mit einer bestimmten Rolle (ersetze `<ID>` durch die Rollen-ID)        |
| `%onlineUserWithRoleCount-<ID>%` | Online-Mitglieder mit einer bestimmten Rolle (ersetze `<ID>` durch die Rollen-ID) |

**Server-Informationen:**

| Parameter                         | Beschreibung                                      |
| --------------------------------- | ------------------------------------------------- |
| `%guildName%`                     | Servername                                        |
| `%guildIcon%`                     | Server-Icon-URL                                   |
| `%guildBanner%`                   | Server-Banner-URL                                 |
| `%verificationLevel%`             | Server-Verifikations-Level                        |
| `%vanityURL%`                     | Vanity-Invite-URL (falls verfügbar)               |
| `%daysSinceCreation%`             | Tage seit der Server-Erstellung                   |
| `%guildCreationTimestamp%`        | Formatiertes Server-Erstellungsdatum              |
| `%guildCreationDiscordTimestamp%` | Discord-formatiertes Erstellungsdatum (Timestamp) |

**Kanal- und Inhaltsstatistiken**

| Parameter             | Beschreibung            |
| --------------------- | ----------------------- |
| `%channelCount%`      | Gesamtzahl der Kanäle   |
| `%textChannelCount%`  | Anzahl der Textkanäle   |
| `%voiceChannelCount%` | Anzahl der Sprachkanäle |
| `%categoryCount%`     | Anzahl der Kategorien   |
| `%forumCount%`        | Anzahl der Forum-Kanäle |
| `%stageChannelCount%` | Anzahl der Stage-Kanäle |
| `%roleCount%`         | Gesamtzahl der Rollen   |
| `%emojiCount%`        | Gesamtzahl der Emojis   |
| `%stickerCount%`      | Gesamtzahl der Sticker  |

**Boost-Statistiken:**

| Parameter        | Beschreibung          |
| ---------------- | --------------------- |
| `%guildBoosts%`  | Anzahl der Boosts     |
| `%boostLevel%`   | Aktuelles Boost-Level |
| `%boosterCount%` | Anzahl der Booster    |

**Modulabhängige Parameter** (Nur verfügbar, wenn das entsprechende Modul aktiviert ist):

| Parameter               | Erforderliches Modul      | Beschreibung                          |
| ----------------------- | ------------------------- | ------------------------------------- |
| `%openTickets%`         | Ticket-System             | Anzahl der aktuell offenen Tickets    |
| `%totalTickets%`        | Ticket-System             | Gesamtzahl der Tickets                |
| `%totalSuggestions%`    | Vorschläge                | Gesamtzahl der Vorschläge             |
| `%activeGiveaways%`     | Gewinnspiele              | Anzahl der aktiven Gewinnspiele       |
| `%totalGiveaways%`      | Gewinnspiele              | Gesamtzahl der Gewinnspiele           |
| `%totalModActions%`     | Moderation & Sicherheit   | Gesamtzahl der Moderationsmaßnahmen   |
| `%totalWarns%`          | Moderation & Sicherheit   | Gesamtzahl der Warnungen              |
| `%totalMutes%`          | Moderation & Sicherheit   | Gesamtzahl der Mutes                  |
| `%totalBans%`           | Moderation & Sicherheit   | Gesamtzahl der Banns                  |
| `%totalKicks%`          | Moderation & Sicherheit   | Gesamtzahl der Kicks                  |
| `%totalLevelUsers%`     | Level-System              | Nutzer im Level-System                |
| `%highestLevel%`        | Level-System              | Höchstes erreichtes Level             |
| `%highestXP%`           | Level-System              | Höchste erreichte XP                  |
| `%totalEconomy%`        | Wirtschaftssystem         | Gesamtumlauf der Währung              |
| `%totalBalance%`        | Wirtschaftssystem         | Gesamte Wallet-Währung                |
| `%totalBank%`           | Wirtschaftssystem         | Gesamte Bank-Währung                  |
| `%economyUsers%`        | Wirtschaftssystem         | Gesamtzahl der Nutzer mit Kontostand  |
| `%activeTempChannels%`  | Temporäre Channel         | Aktive temporäre Channel              |
| `%activePolls%`         | Umfragen                  | Anzahl der aktiven Umfragen           |
| `%totalPolls%`          | Umfragen                  | Gesamtzahl der Umfragen               |
| `%totalInvites%`        | Einladungsverfolgung      | Gesamtzahl der verfolgten Einladungen |
| `%afkUsers%`            | AFK-System                | Anzahl der Nutzer im AFK-Status       |
| `%birthdayUsers%`       | Geburtstags-Kalender      | Nutzer mit registrierten Geburtstagen |
| `%starboardMessages%`   | Starboard                 | Nachrichten auf dem Starboard         |
| `%totalPartners%`       | Partner-Liste             | Gesamtzahl der Partner                |
| `%totalApplications%`   | Bewerbungen               | Gesamtzahl der Bewerbungen            |
| `%pendingApplications%` | Bewerbungen               | Offene Bewerbungen                    |
| `%twitchLiveCount%`     | Twitch-Benachrichtigungen | Aktuell live streamende Streamer      |
| `%counterValue%`        | Zähl-Spiel                | Aktueller Zählerstand                 |
| `%totalStreakUsers%`    | Aktivitäts-Streaks        | Nutzer mit Aktivitäts-Streaks         |
| `%longestStreak%`       | Aktivitäts-Streaks        | Längste Aktivitäts-Streak             |

Du kannst auch `%newline%` verwenden, um einen Zeilenumbruch einzufügen.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Modul einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=live-messages%7Cconfigs/config).

| Feld      | Beschreibung                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------- |
| Kanal     | Der Kanal, in dem die Live-Nachricht gesendet und aktualisiert werden soll.                    |
| Nachricht | Der Nachrichtentext mit Platzhaltern, die durch Live-Werte ersetzt werden. Unterstützt Embeds. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Die Live-Nachricht wird nicht angezeigt</summary>
  <ul>
    <li>Stelle sicher, dass der konfigurierte Kanal existiert und der Bot über die Berechtigungen <code>Kanal anzeigen</code>, <code>Nachrichten senden</code>, und <code>Links einbetten</code> verfügt.</li>
    <li>Lade die Konfiguration deines Bots nach Änderungen neu.</li>
  </ul>
</details>

<details>
  <summary>Modulabhängige Parameter werden leer oder als Null angezeigt</summary>
  <ul>
    <li>Stelle sicher, dass das entsprechende Modul auf deinem Server aktiviert ist.</li>
    <li>Einige Parameter erfordern vorhandene Daten im Modul (z. B. müssen Tickets existieren, damit die Anzahl der Tickets angezeigt wird).</li>
  </ul>
</details>

<details>
  <summary>Die Live-Nachricht wird nicht aktualisiert</summary>
  <ul>
    <li>Live-Nachrichten werden alle 5 Minuten aktualisiert. Warte den nächsten Aktualisierungszyklus ab.</li>
    <li>Falls die Nachricht gelöscht wurde, wird beim nächsten Update eine neue erstellt.</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Für jede Live-Nachricht werden die folgenden Daten gespeichert:

- Die Discord-Kanal-ID, an die die Nachricht gesendet wird
- Die Discord-Nachrichten-ID der Live-Nachricht
- Der Index des Konfigurationselements
- Metadaten zum Eintrag (Erstellungs- und letztes Änderungsdatum)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
