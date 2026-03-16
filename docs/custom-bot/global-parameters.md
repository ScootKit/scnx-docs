# Global Parameters

:::info
These parameters are **not** displayed in the dashboard preview and may appear as red (invalid) parameters in the editor. This is expected — they are replaced at runtime when the bot sends the message, so the dashboard will show the raw placeholder (e.g. `%guildName%`) instead of the actual value.
:::

Global parameters can be used in any text field of any embed type or message configuration. They are automatically replaced before the message is sent.

## Bot Parameters

| Parameter | Description | Example |
|---|---|---|
| `%botName%` | Display name of the bot | `My Bot` |
| `%botID%` | User ID of the bot | `123456789012345678` |
| `%botAvatar%` | Avatar URL of the bot | `https://cdn.discordapp.com/avatars/...` |
| `%botTag%` | Full tag of the bot | `My Bot#1234` |
| `%botMention%` | Mention string of the bot | `<@123456789012345678>` |

## Server Parameters

| Parameter | Description | Example |
|---|---|---|
| `%guildName%` | Name of the server | `My Server` |
| `%guildID%` | ID of the server | `987654321098765432` |
| `%guildIcon%` | Icon URL of the server | `https://cdn.discordapp.com/icons/...` |

## Timestamp Parameters

:::tip
Timestamp parameters are evaluated at the moment the message is sent. `%relativeTime%` will always show relative to the time the message was sent (e.g. "just now" when first sent, then updating to "2 minutes ago" etc. as Discord re-renders it).
:::

All timestamp parameters use [Discord's native timestamp formatting](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles). They automatically adapt to each user's timezone and locale.

| Parameter | Discord Style | Description | Example |
|---|---|---|---|
| `%timestamp%` | Default | Short date/time (default) | April 5, 2026 4:20 PM |
| `%shortTime%` | `t` | Short time | 4:20 PM |
| `%longTime%` | `T` | Long time | 4:20:30 PM |
| `%shortDate%` | `d` | Short date | 04/05/2026 |
| `%longDate%` | `D` | Long date | April 5, 2026 |
| `%shortDateTime%` | `f` | Short date/time | April 5, 2026 4:20 PM |
| `%longDateTime%` | `F` | Long date/time | Thursday, April 5, 2026 4:20 PM |
| `%relativeTime%` | `R` | Relative time | just now |


