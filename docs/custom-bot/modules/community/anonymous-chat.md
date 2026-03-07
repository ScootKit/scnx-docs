# Anonymous Chat

Let your users share their experiences anonymously while still moderating your chat.

<ModuleOverview moduleName="anonymous-chat" />

## Features {#features}

* Users can send anonymous messages to a designated channel using a slash command.
* Each user is assigned a unique, randomly generated display name and avatar for their anonymous identity.
* Moderators can block users from the anonymous chat by their display name while preserving anonymity.
* Moderators can delete anonymous messages.
* Optionally allow users to reset their anonymous identity.
* Optionally support webhook-based messages for a more natural chat appearance.
* Optionally allow users to send anonymous messages by typing directly in the channel (less secure).

## Setup {#setup}

1. Create a text channel for anonymous messages and configure it in the [module configuration](#configuration).
2. Make sure the bot has `View Channel`, `Send Messages`, `Embed Links`, and `Manage Messages` permissions in the anonymous chat channel.
3. If using webhooks, the bot additionally needs the `Manage Webhooks` permission.
4. Set up [slash command permissions](/docs/custom-bot/slash-commands) for `/moderate-anonymous-channel` to restrict it to moderators.

## Usage {#usage}

Users can send anonymous messages using `/anonymous-message`. They will be assigned a randomly generated display name and avatar on their first use. If identity reset is enabled, users can choose to reset their identity when sending a new message.

Moderators can manage the anonymous chat using `/moderate-anonymous-channel`:

* **Block a user**: Use `disable` with the user's anonymous display name. This also works with past display names if the user has reset their identity.
* **Unblock a user**: Use `enable` with the user's current anonymous display name.
* **Delete a message**: Use `delete-message` to remove an anonymous message. Autocomplete helps find the message.

If insecure message submission is enabled, users can also type directly into the anonymous chat channel -- their message will be deleted and reposted anonymously. Note that message logging bots may still capture the original message, so this method is not recommended for truly anonymous chats.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
|---------|-------------|
| `/anonymous-message message:<Text> [reset-identity:<Boolean>]` | Send an anonymous message to the configured channel. Optionally reset your anonymous identity before sending (only available if identity reset is enabled in the configuration). |
| `/moderate-anonymous-channel disable display-name:<Text> [reason:<Text>]` | Block a user from sending anonymous messages by their anonymous display name. Optionally provide a reason. Requires the Moderate Members permission. |
| `/moderate-anonymous-channel enable display-name:<Text>` | Unblock a previously blocked user by their anonymous display name. Requires the Moderate Members permission. |
| `/moderate-anonymous-channel delete-message message:<Text>` | Delete an anonymous message. The message parameter supports autocomplete to search by content or ID. Requires the Moderate Members permission. |

## Configuration {#configuration}

In this configuration file, you can configure the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=anonymous-chat%7Cconfig).

| Field | Description |
|-------|-------------|
| Channel | The channel where anonymous messages will be sent. |
| Use webhook messages? | If enabled, messages are sent via webhooks with the user's anonymous display name and avatar, providing a more natural chat experience. This disables message customization. |
| Anonymous message | Customize the appearance of anonymous messages (only used when webhooks are disabled). Supports parameters for display name, avatar, and message content. |
| Successfully sent message | The confirmation message shown to the user after their anonymous message has been sent. |
| Blocked message | The message shown to blocked users when they attempt to send an anonymous message. |
| Allow users to reset their identity? | If enabled, users can reset their anonymous display name and avatar when sending a message. Moderators can still block users using any of their past anonymous display names, even after a reset. |
| Allow users to create anonymous messages by sending a message in the channel? (unsecure!) | If enabled, users can type directly in the anonymous channel to create anonymous messages. Not recommended for truly anonymous chats, as message loggers can capture the original author. |

## Troubleshooting {#troubleshooting}

<details>
  <summary>Anonymous messages are not appearing</summary>
  <ul>
    <li>Make sure the configured channel exists and the bot has the required permissions.</li>
    <li>If using webhooks, ensure the bot has the <code>Manage Webhooks</code> permission.</li>
  </ul>
</details>

<details>
  <summary>Cannot block a user whose identity was reset</summary>

  If a user resets their identity, you can still block them using their old display name -- the module tracks past display names and will find the user's current identity.
</details>

## Stored data {#data-usage}

The following data is being stored:

For every anonymous user:
* The Discord User ID
* The randomly generated anonymous display name and avatar URL
* Whether the user is blocked and the block reason (if any)
* Metadata about the entry (date when created and last updated)

For every anonymous message:
* The message ID and channel ID
* The message content
* Whether the message has been deleted
* Metadata about the entry (date when created and last updated)

For every identity reset:
* The Discord User ID
* The previous anonymous display name
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
