# Globale Parameter

:::info
Diese Parameter werden **nicht** in der Dashboard-Vorschau angezeigt und können im Editor als rote (ungültige) Parameter erscheinen. Das ist normal - sie werden erst zur Laufzeit ersetzt, wenn der Bot die Nachricht sendet. Das Dashboard zeigt daher den rohen Platzhalter (z. B. `%guildName%`) statt des tatsächlichen Werts.
:::

Globale Parameter können in jedem Textfeld jedes Embed-Typs und jeder Nachrichtenkonfiguration verwendet werden. Sie werden automatisch ersetzt, bevor die Nachricht gesendet wird.

## Bot-Parameter

| Parameter      | Beschreibung                 | Beispiel                                 |
| -------------- | ---------------------------- | ---------------------------------------- |
| `%botName%`    | Anzeigename des Bots         | `My Bot`                                 |
| `%botID%`      | Nutzer-ID des Bots           | `123456789012345678`                     |
| `%botAvatar%`  | Profilbild-URL des Bots      | `https://cdn.discordapp.com/avatars/...` |
| `%botTag%`     | Vollständiger Tag des Bots   | `My Bot#1234`                            |
| `%botMention%` | Erwähnung (Mention) des Bots | `<@123456789012345678>`                  |

## Server-Parameter

| Parameter     | Beschreibung         | Beispiel                               |
| ------------- | -------------------- | -------------------------------------- |
| `%guildName%` | Name des Servers     | `My Server`                            |
| `%guildID%`   | ID des Servers       | `987654321098765432`                   |
| `%guildIcon%` | Icon-URL des Servers | `https://cdn.discordapp.com/icons/...` |

## Zeitstempel-Parameter

:::tip
Zeitstempel-Parameter werden in dem Moment ausgewertet, in dem die Nachricht gesendet wird. `%relativeTime%` zeigt immer die Zeit relativ zum Sendezeitpunkt der Nachricht an (z. B. "gerade eben" beim Senden, danach aktualisiert Discord die Anzeige auf "vor 2 Minuten" usw.).
:::

Alle Zeitstempel-Parameter verwenden die [native Zeitstempel-Formatierung von Discord](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles). Sie passen sich automatisch an die Zeitzone und Sprache jedes Nutzers an.

| Parameter         | Discord-Stil | Beschreibung                 | Beispiel                        |
| ----------------- | ------------ | ---------------------------- | ------------------------------- |
| `%timestamp%`     | Standard     | Kurzes Datum/Zeit (Standard) | 5. April 2026 16:20             |
| `%shortTime%`     | `t`          | Kurze Uhrzeit                | 16:20                           |
| `%longTime%`      | `T`          | Lange Uhrzeit                | 16:20:30                        |
| `%shortDate%`     | `d`          | Kurzes Datum                 | 05.04.2026                      |
| `%longDate%`      | `D`          | Langes Datum                 | 5. April 2026                   |
| `%shortDateTime%` | `f`          | Kurzes Datum/Zeit            | 5. April 2026 16:20             |
| `%longDateTime%`  | `F`          | Langes Datum/Zeit            | Donnerstag, 5. April 2026 16:20 |
| `%relativeTime%`  | `R`          | Relative Zeit                | gerade eben                     |
