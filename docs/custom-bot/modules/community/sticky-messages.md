# Sticky messages

Let a set message always appear at the end of a channel.

<ModuleOverview moduleName="sticky-messages" />

## Features {#features}

- Configure messages that always appear as the latest message in a channel.
- Whenever a new message is sent in the channel, the bot automatically deletes the old sticky message and reposts it.
- Support for multiple sticky messages across different channels.
- Built-in rate limiting to prevent spam when messages are sent rapidly (5-second cooldown).
- Optionally react to messages from other bots in the channel.
- Sticky messages support both plain text and embed formatting.

## Setup {#setup}

1. Make sure the bot has `View Channel`, `Send Messages`, `Embed Links`, `Manage Messages`, and `Read Message History` permissions in the channels where sticky messages will be used.
2. Configure your sticky messages in the [module configuration](#configuration).

## Usage {#usage}

This module works automatically -- there are no commands. Once configured, the bot will maintain the sticky message at the bottom of each configured channel.

When a new message is sent in a channel with a sticky message:

1. The bot deletes the previous sticky message.
2. The bot reposts the sticky message as the latest message.

If messages are sent rapidly (within 5 seconds of each other), the bot will wait and batch the re-send to avoid rate limiting.

## Configuration {#configuration}

In this configuration file, you can manage your sticky messages. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=sticky-messages%7Cconfigs%2Fsticky-messages).

Each entry in the list represents a sticky message with the following fields:

| Field           | Description                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| Channel         | The channel where the sticky message should appear.                                                         |
| Message         | The message content to display. Supports embed formatting.                                                  |
| Respond to bots | If enabled, the sticky message will also be reposted when messages from other bots are sent in the channel. |

## Troubleshooting {#troubleshooting}

<details>
  <summary>The sticky message is not appearing</summary>
  <ul>
    <li>Make sure the configured channel exists and the bot has <code>View Channel</code>, <code>Send Messages</code>, <code>Embed Links</code>, <code>Manage Messages</code>, and <code>Read Message History</code> permissions.</li>
    <li>Check that your sticky message configuration has a valid message content.</li>
  </ul>
</details>

<details>
  <summary>The sticky message is not updating when bots send messages</summary>

By default, the bot does not react to messages from other bots. Enable the "Respond to bots" option in the sticky message configuration for the relevant channel.

</details>
