# Anti-Ghostping

This module detects ghost-pings and sends a message if one occurs. Ghost-Pings are pings in messages that get deleted
but will still show up to the pinged members.

<ModuleOverview moduleName="anti-ghostping" />

## Features {#features}

:::info Definition
**What's a Ghost-Ping?**

Pings in Discord are messages that are highlighted in yellow and mostly occur when someone @mentions another user or
replies to a message.

A "Ghost-Ping" occurs when a user pings another member in a channel and then deletes their message shortly after. The
ping will still
be displayed for the receiver, but the message won't be visible. This is very annoying to the receiver, as they open the
channel expecting to see a message which got deleted.
:::

This module detects these ghost pings and sends a message informing the receiver of the ping about the original author
and content of the message. Additionally, this module respects bots that replace the original message with a message
sent by a webhook. You can also [configure](#configuration) channels that should be ignored for ghost-ping detection.

## Setup {#setup}

1. Make sure the bot has "Read messages", "Send messages" and "Manage messages" permissions on all channels ghost pings
   should get detected in.
2. Enable the module - your bot should now be able to detect ghost pings.
3. Optionally, you can [configure](#configuration) the detection message, disable detection for specific channels or
   toggle replacement bot delays.

## Usage {#usage}

When a module detects a ghost-ping in a channel, it will send a message in the channel informing the receiver about the
original author and content of the message.

If the "Wait for Bot-Messages" [configuration option](#configuration) is enabled, the bot will wait about two seconds
after a
ghost ping occurs. If a bot or webhook sends a message in this period of time, ghost ping detection will be disabled for
this message and no detection message will be sent. This is useful for other bots that replace original messages with
messages sent by webhooks.

## Configuration {#configuration}

You can configure a few aspects of this module, including customizing the detection message, in
the [configuration](https://scnx.app/glink?page=bot/configuration?query=anti&file=anti-ghostping|config).

| Field                 | Description                                                                                                                                                                                                                                                              |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Wait for Bot-Messages | If enabled, your bot will wait for about two after a message with a ping gets deleted. If another bot or webhook gets send in the channel, the bot will not detect the deletion as ghost ping. Learn more about how this could be useful in the [usage](#usage) section. |
| Ignored Channels      | The bot will not try to detect any ghost pings sent in channels and categories configured here.                                                                                                                                                                          |
| Ghostping-Message     | The bot will send this message in current channel when a ghost ping gets detected.                                                                                                                                                                                       |

## Troubleshooting {#troubleshooting}

* Make sure the bot has "Read messages", "Send messages" and "Manage messages" permissions on all channels ghost pings
  should get detected in.
* Make sure the deleted message matches the requirements for ghost ping:
   * The message needs to contain pings of other server members. Please note that not all @mentions are pings (@silent
     messages, for example).
   * The message needs to be deleted within a minute after the message got sent.
   * Make sure the message was not sent in an [ignored channel](#configuration).
* Please note that deletions performed by staff members might also count as ghost pings, as the bot can't detect who
  deleted the message.

:::info Looking for something else?
If you want to log the content of all messages, please use the [advanced logging](./../administration/logging) module.
:::