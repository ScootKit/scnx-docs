# Auto-Delete

This module allows you to delete messages from a channel after a specified timeout to keep your channel clean.

<ModuleOverview moduleName="auto-delete" />

---

## Features {#features}

* Automatically delete messages in channels after a specified time
  * Optionally, always keep a certain number of messages in a channel
  * No deletion of pinned messages
* Automatically delete messages from a voice-channel after every member left
  * Optionally, add a delay before message deletion

## Setup {#setup}

* Make sure that your bot has "Manage messages", "View channel", "View message history" permissions on the channel you
  want to enable this feature on.
* To set up automatic deletion of messages, open
  the [Text-Channels](https://scnx.app/glink?page=bot/configuration?file=auto-delete%7Cchannels) configuration file and
  1. Click on "Add new Config-Element".
  2. Select the channel this configuration element should apply to.
  3. Configure the element as described [here](#config-channels).
  4. Reload your bot to apply changes.
* To set up automatic deletion of messages in Voice-Channels after every user has left the channel, open
  the [Voice-Channels](https://scnx.app/glink?page=bot/configuration?file=auto-delete%7Cvoice-channels) configuration
  file and
  1. Click on "Add new Config-Element".
  2. Select the channel this configuration element should apply to.
  3. Configure the element as described [here](#config-voice-channels).
  4. Reload your bot to apply changes.

## Usage {#usage}

Once configured, the bot will automatically work in the background without any user action required. To protect a
message from being deleted, pin the message in the channel.

## Configuration {#configuraiton}

### Text-Channels {#config-channels}

This configuration file allows specifying from which channels messages should get deleted automatically from. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=auto-delete%7Cchannels).

| Configuration-Option       | Description                                                                                                                                                                                                                                                                                                                            |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channel                    | This is the channel to which this specific set of instructions should get applied. Auto-Deletion will be performed in this channel.                                                                                                                                                                                                    |
| Timeout                    | This is the amount of time (in minutes) after which messages sent to this channel should get deleted automatically. To accommodate slow devices (and slow readers), we suggest setting this above two minutes.                                                                                                                         |
| Purge on Start             | When enabled, your bot will delete every message in the channel (that these configuration options apply to) automatically on restart of your bot. If disabled, no existing messages will get deleted. The bot can only delete up to 100 messages at a time and no messages older than 14 days due to a limitation from Discord's side. |
| Amount of messages to keep | When enabled, this number of messages will always be exempt from automatic deletion. The newest messages are always kept, meaning that, once more than x messages are sent into this channel, the bot will delete the oldest one. This number has to be below 50.                                                                      |

### Voice-Channels {#config-voice-channels}

This configuration file allows
specifying from which channels messages should get deleted automatically
from once all users have left the voice-channel.
Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=auto-delete%7Cvoice-channels).

| Configuration-Option | Description                                                                                                                                                                 |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channel              | This is the channel to which this specific set of instructions should get applied. Auto-Deletion will be performed in this channel, once all members have left the channel. |
| Timeout              | This is the delay (in minutes) between the last user left the channel and the deletion gets performed. Set this to zero, to enable immediate deletion.                      |
| Purge on Start       | When enabled, your bot will delete every message on restart of your bot if no member is present in the voice-channel. If disabled, no existing messages will get deleted.   |

## Troubleshooting {#troubleshooting}

If automatic deletion isn't performed, please check the following:

* Your bot needs "View channel", "Manage messages", "View message history" on channels that auto deletion should get
  performed on.
* Please make sure "Amount of messages to keep" is below 50.
* Please make sure you sent new messages into the channel if you haven't enabled "Purge on Start".
* Please make sure the message you want to be deleted isn't pinned.