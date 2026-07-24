# Message Quotes

Automatically repost a Discord message as a rich quote whenever someone pastes its message link.

<ModuleOverview moduleName="message-quotes" />

## Features {#features}

- Detects Discord message links pasted into chat and reposts the linked message as a formatted quote.
- Optional **Quote Message** action in Discord's Apps (right-click) menu, so users can quote a message without pasting its link.
- Rendered quote can show the original author, nickname, avatar, channel, message content, a Discord timestamp, a link back to the original, and its first image.
- Fully customizable quote message - build it as an embed or a generated image with parameters for every field.
- Channel/category and role blacklists to keep quoting out of the places (and away from the people) you choose.
- Toggles for ignoring bot messages, allowing self-quotes, replying to the trigger message, and deleting the trigger message.
- Optional attachment quoting, re-uploading the linked message's files alongside the quote.
- The quoted message's first image is archived to your server's [file library](/docs/scnx/guilds/files), so quotes keep their image after Discord's CDN URLs expire.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=message-quotes) on your server.
2. Make sure the bot has the permissions `View Channel`, `Send Messages`, `Read Message History` and `Embed Links` in the channels where quoting should work. To use **Delete trigger?**, it also needs `Manage Messages`.
3. Open the [Configuration](https://scnx.app/glink?page=bot/configuration?file=message-quotes%7Cconfigs/config) and adjust the blacklists, toggles and quote message to fit your server.

## Usage {#usage}

- Once [set up](#setup), a user simply pastes a link to another message (from the same server) into any non-blacklisted channel. The bot fetches the linked message and reposts it as a quote.
- The linked message is only quoted if both the user who pasted the link and the bot can actually see it (they need `View Channel` and `Read Message History` in the source channel). Links pointing to another server are ignored.
- Depending on your configuration, the quote is sent as a reply to the trigger message, and the trigger message may be deleted afterwards.
- A short per-user cooldown prevents a single user from spamming quotes in quick succession.
- Alternatively, users can right-click (or long-press) any message, open **Apps**, and choose **Quote Message** to post the quote without pasting a link. See [Commands](#commands).

### Permanent image archival {#image-archival}

When a quote is rendered, the linked message's first image is uploaded to your server's [file library](/docs/scnx/guilds/files) and the quote is built against that permanent URL. This stops quotes from breaking once Discord's short-lived CDN URLs expire.

Archived images count against your server's [file-storage quota](/docs/scnx/guilds/files#understanding-storage-limits). To opt out, enable **Disable attachment archival** in the bot's General Configuration; with archival disabled, quote images revert to Discord's expiring URLs and old quotes will eventually break again.

## Commands {#commands}

<SlashCommandExplanation />

| Command         | Description                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `Quote Message` | A message context-menu (Apps) action. Right-click or long-press a message and select it to repost that message as a quote. |

The **Quote Message** action respects the same configuration as link-based quoting. If quoting is suppressed for the target (for example because **Ignore bot messages?** is on, or **Allow Self-quotes?** is off and you are quoting yourself), the bot replies privately (ephemerally) and posts nothing.

## Configuration {#configuration}

Configure the message quoting system. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=message-quotes%7Cconfigs/config).

| Field                | Description                                                                                                                                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blacklist roles      | Roles that are excluded from quoting. Members with a listed role cannot trigger a quote.                                                                                                                                           |
| Blacklist channels   | Channels that are excluded from quoting. Channels and categories are supported; a category excludes all its channels.                                                                                                              |
| Attach files?        | Should all attachments be quoted? The linked message's files are re-uploaded alongside the quote. Deactivation recommended if "Message" components v2 are used.                                                                    |
| Ignore bot messages? | When enabled, messages sent by bots are not quoted.                                                                                                                                                                                |
| Allow Self-quotes?   | Whether users can quote their own messages.                                                                                                                                                                                        |
| Reply to messages?   | Reply to the message that triggered the quote. Ignored when **Delete trigger?** is enabled.                                                                                                                                        |
| Delete trigger?      | When enabled, the message that triggered the quote is deleted after the quote is posted. Requires the `Manage Messages` permission.                                                                                                |
| Message              | The message in which the quote is returned. Build it as an embed or a generated image; the available parameters (author, nickname, avatar, channel, timestamp, link, first image, content, and more) are listed in your dashboard. |

## Troubleshooting {#troubleshooting}

<details>
  <summary>Nothing happens when a message link is pasted</summary>
  <ul>
    <li>Make sure the module is enabled and the bot has <code>View Channel</code>, <code>Send Messages</code>, <code>Read Message History</code> and <code>Embed Links</code> in both the channel where the link is pasted and the channel the linked message lives in.</li>
    <li>Make sure the channel (or its category) is not in <strong>Blacklist channels</strong> and the user does not have a role in <strong>Blacklist roles</strong>.</li>
    <li>The linked message must be on the same server. Links to messages in other servers are ignored.</li>
    <li>The user who pasted the link must be able to see the linked message themselves (<code>View Channel</code> and <code>Read Message History</code> in the source channel).</li>
    <li>If you just quoted a message, wait a few seconds - a short per-user cooldown applies.</li>
  </ul>
</details>

<details>
  <summary>Bot messages are not being quoted</summary>
  <ul>
    <li>This is expected when <strong>Ignore bot messages?</strong> is enabled. Disable it to allow quoting bot messages.</li>
  </ul>
</details>

<details>
  <summary>The trigger message is not being deleted</summary>
  <ul>
    <li>Make sure <strong>Delete trigger?</strong> is enabled.</li>
    <li>Ensure the bot has the <code>Manage Messages</code> permission in the channel where the link was pasted. Without it, the quote is still posted but the trigger message is left in place.</li>
    <li>While <strong>Delete trigger?</strong> is enabled, <strong>Reply to messages?</strong> is ignored, since the message it would reply to is removed.</li>
  </ul>
</details>

<details>
  <summary>The "Quote Message" action says the message cannot be quoted</summary>
  <ul>
    <li>The target is likely suppressed by configuration - for example <strong>Ignore bot messages?</strong> is on and the target was sent by a bot, or <strong>Allow Self-quotes?</strong> is off and you are quoting your own message.</li>
    <li>You also need permission to send messages in the current channel for the action to post the quote.</li>
  </ul>
</details>

<details>
  <summary>Old quotes lost their image</summary>
  <ul>
    <li>Discord's CDN URLs expire over time. Quote images are normally archived to your <a href="/docs/scnx/guilds/files">file library</a> to prevent this.</li>
    <li>If <strong>Disable attachment archival</strong> is enabled in the bot's General Configuration, quote images fall back to Discord's expiring URLs and will eventually break.</li>
  </ul>
</details>

## Stored data {#data-usage}

This module does not persist any data in its own module database. Quotes are rendered and posted on the fly, and the short per-user cooldown is kept only in memory and reset when the bot restarts.

The one exception is image archival: when a quoted message's first image is archived, that image is stored in your server's [file library](/docs/scnx/guilds/files) (and counts against your [file-storage quota](/docs/scnx/guilds/files#understanding-storage-limits)) rather than in this module's database. Manage or remove those files from the file library in your dashboard.
