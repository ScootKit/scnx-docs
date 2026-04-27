# Advanced Logging

Let the bot log changes to your server in any channel.

<ModuleOverview moduleName="logging" />

## Features {#features}

Using the Advanced Logging Module you can easily

- Log channel updates (like channel edits, channel permission changes and more) in any channel you'd like.
- Log role updates (like role edits, permission changes and more) in any channel you'd like.
- Log Member-Updates (like nickname or role changes, member joins and leaves, and more) in any channel you'd like. Leave entries show how long the member was on the server and which roles they had when they left; kicks and bans are excluded to avoid double-logging.
- Log Message-Updates (like message edits or deletions) in any channel you'd like.
- Log Server-Changes (like changing Server-Settings and more) in any channel you'd like.
- Log Voice-Channel-Updates (like members joining or leaving the channel) in any channel you'd like.
- Log Emoji-Changes (like uploading, editing or deleting emojis and stickers) in any channel you'd like.

## Setup {#setup}

1. Create a channel in which the bot should log changes. Make sure the bot has "Send messages" and "View channel"
   permissions on this channel.
2. Make sure your bot has the required permissions on your server ("View audit log"). If you want to log
   Message-Updates, the bot needs "View channel" and "View message history" on every channel the bot should document
   changes from.
3. Open the [Advanced logging configuration](https://scnx.app/glink?page=bot/configuration?file=logging%7Cconfig)
   and [configure the module](#configuration).
4. Reload the configuration of your bot to apply changes.

## Usage {#usage}

Once [configured](#configuration), this module will automatically log the configured changes in the specified channels.
There's no additional action needed.

Please bear in mind your administrators might be able to delete (or edit & forge, using
the [Login as Bot](/docs/custom-bot/login-as-bot) functionality) the logged messages. This is not possible with the Discord Audit
Log, so if you want to make sure an action is correct, please review it in the Discord Audit Log. Messages logging
changes will also never be edited automatically, so if you see a "Edited" label on one of the log-messages, its likely
it got changed with the
[Login as Bot](/docs/custom-bot/login-as-bot) feature.

## Configuration {#configuration}

This configuration file allows specifying which changes to your server should get logged in which channel. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=logging%7Cconfig).

| Field                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel-Updates                              | If enabled, the bot will log changes to channels (like channel edits, permission changes and more).                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Channel for Logging of Channel-Updates       | <i>Only visible if "Channel-Updates" is enabled.</i><br/>Changes to channels will be logged in this channel.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Role-Updates                                 | If enabled, the bot will log changes to roles (like role edits, permission changes and more).                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Channel for Logging of Role-Updates          | <i>Only visible if "Role-Updates" is enabled.</i><br/>Changes to roles will be logged in this channel.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Member-Updates                               | If enabled, the bot will log changes to members (like nickname or role changes and more).                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Channel for Logging of Member-Updates        | <i>Only visible if "Member-Updates" is enabled.</i><br/>Changes to members will be logged in this channel.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Message-Updates                              | If enabled, the bot will log changes to message (like edits and deletions).                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Channel for Logging of Messsage-Edits        | <i>Only visible if "Message-Updates" is enabled.</i><br/>Edits to messages will be logged in this channel.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Channel for Logging of Messsage-Deletions    | <i>Only visible if "Message-Updates" is enabled.</i><br/>Deletion of messages will be logged in this channel.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Ignore channels for Message-Updates          | <i>Only visible if "Message-Updates" is enabled.</i><br/>These channels & categories are excluded from being monitored for Message-Edits and -Deletions.                                                                                                                                                                                                                                                                                                                                                                                     |
| Guild-Updates                                | If enabled, the bot will log changes your server (like Server-Settings and more).                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Channel for Logging of Guild-Updates         | <i>Only visible if "Guild-Updates" is enabled.</i><br/>Changes your server will be logged in this channel.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Emoji-Updates                                | If enabled, the bot will log changes to emojis (and stickers) of your server (like uploading, deleting and editing emojis).                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Channel for Logging of Emoji-Updates         | <i>Only visible if "Emoji-Updates" is enabled.</i><br/>Changes to emojis of your server will be logged in this channel.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Voice-Channel-Updates                        | If enabled, the bot will log voice channel events (like members joining or leaving voice channels).                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Channel for Logging of Voice-Channel-Updates | <i>Only visible if "Voice-Channel-Updates" is enabled.</i><br/>Voice channel events will be logged in this channel.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Ignore bots                                  | <i>This feature is always enabled for servers without a <a href="/docs/scnx/guilds/plans">Professional Plan</a>.</i><br/>If disabled, the bot will document changes made by itself or other bots - this can lead to spam in the Log-Channel.                                                                                                                                                                                                                                                                                                 |
| Archive attachments from deleted messages    | <i>Opt-in. Disabled by default.</i><br/>If enabled, attachments on deleted messages are uploaded to your server's <a href="/docs/scnx/guilds/files">file library</a> so they remain viewable in the deletion log after Discord's URLs expire. Only enable this if your server's policy allows retaining deleted-message content. Archived files count against your <a href="/docs/scnx/guilds/files#understanding-storage-limits">file-storage quota</a>, and the global **Disable attachment archival** core setting overrides this option. |

## Troubleshooting {#troubleshooting}

If changes aren't being logged, please make sure that

- the bot has permissions to view these changes. This usually means that the bot needs "View Audit-Log" permissions, but
  in the case of Message-Updates, "View channel" and "View message history" are also required.
- the bot has permissions to the permissions required to log the changes in the configured Log-Channel: "Send messages"
  and "View channel".
- the bot is unable to log changes to messages sent while it was offline.
- the change isn't performed by a bot or "Ignore bots" is enabled.
- the [configuration](#configuration) for this particular change is enabled and the correct channel is selected.
