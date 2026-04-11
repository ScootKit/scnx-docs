# Server-Information-Channel

Display an auto-updating embed with server statistics and information in a channel.

<ModuleOverview moduleName="serverinfo" />

## Features {#features}

- Displays an auto-updating embed with customizable server information in a designated channel.
- Supports a wide range of dynamic variables including member count, bot count, online count, boost statistics, channel count, role count, and more.
- Configurable embed fields with support for inline display.
- Count members with a specific role or online members with a specific role.
- The embed updates automatically every 5 minutes.

## Setup {#setup}

1. Create a text channel for the server information embed and configure it in the [module configuration](#configuration-config).
2. Make sure the bot has `View Channel`, `Send Messages`, `Embed Links`, and `Read Message History` permissions in the configured channel.
3. Configure the embed fields in the [Embed-Fields configuration](#configuration-fields) to display the information you want.

## Usage {#usage}

This module works automatically -- there are no commands. The bot will send an embed in the configured channel and update it every 5 minutes with the latest server statistics.

If the embed message is deleted, the bot will automatically create a new one on the next update cycle.

## Configuration {#configuration}

This module has multiple configuration files. Please review them below.

### Module configuration {#configuration-config}

In this configuration file, you can configure the functionality of this module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=serverinfo%7Cconfigs%2Fconfig).

| Field   | Description                                                       |
| ------- | ----------------------------------------------------------------- |
| Channel | The channel where the server information embed will be displayed. |
| Embed   | Customize the embed's title, description, and color.              |

### Embed-Fields {#configuration-fields}

In this configuration file, you can add and customize the fields displayed in the server information embed. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=serverinfo%7Cconfigs%2Ffields).

Each entry represents a field in the embed with the following options:

| Field         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Feld-Name     | The name/title of the embed field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Field-Content | The content of the field. You can use the following variables: `%memberCount%` (total members), `%botCount%` (bots), `%userCount%` (non-bot users), `%onlineMemberCount%` (online members), `%daysSinceCreation%` (days since server creation), `%guildCreationTimestamp%` (creation date), `%guildBoosts%` (boost count), `%boostLevel%` (current boost tier), `%boosterCount%` (number of boosters), `%channelCount%` (channels), `%roleCount%` (roles), `%emojiCount%` (emojis), `%newline%` (line break), `%userWithRoleCount-<ID>%` (members with a specific role), `%onlineUserWithRoleCount-<ID>%` (online members with a specific role). |
| Inline Field? | If enabled, the field will be displayed inline alongside other inline fields.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Troubleshooting {#troubleshooting}

<details>
  <summary>The embed is not appearing or updating</summary>
  <ul>
    <li>Make sure the configured channel exists and is a text channel.</li>
    <li>Ensure the bot has <code>View Channel</code>, <code>Send Messages</code>, <code>Embed Links</code>, and <code>Read Message History</code> permissions in the channel.</li>
    <li>The embed updates every 5 minutes, so changes may take a moment to appear.</li>
  </ul>
</details>

<details>
  <summary>Role-based member counts are showing incorrect values</summary>

Make sure you are using the correct role ID in the variable (e.g., <code>%userWithRoleCount-123456789%</code>). Also note that online member counts depend on the bot's presence intent and may not be accurate if the server is very large.

</details>
