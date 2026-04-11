# YouTube-Notifications

Send a message to a channel when a YouTube channel publishes a new video or starts a livestream.

<ModuleOverview moduleName="youtube-notifications" />

## Features {#features}

- Receive notifications in a Discord channel when a YouTube channel uploads a new video.
- Receive notifications when a YouTube channel starts a livestream.
- Optionally filter out YouTube Shorts from video notifications.
- Optionally assign a "Live" role to the YouTuber's Discord account while they are livestreaming, and remove it when they go offline.
- Monitor multiple YouTube channels simultaneously, each with its own notification channel and message format.
- Customize notification messages with details such as channel name, title, description, URL and thumbnail.

## Setup {#setup}

1. Open the [Video Notification YouTube Channels configuration](https://scnx.app/glink?page=bot/configuration?file=youtube-notifications%7Cchannels) to set up video upload notifications, or the [Live Notification YouTube Channels configuration](https://scnx.app/glink?page=bot/configuration?file=youtube-notifications%7Clive-channels) to set up livestream notifications.
2. Click on "Add new YouTube Channel" and configure it as described in the [configuration section](#configuration).
3. Make sure the bot has "View channel", "Send messages" and "Embed links" permissions on the configured notification channel.
4. If you plan to use the live role feature (livestream notifications only), make sure the bot has the "Manage roles" permission and that the bot's role is positioned higher than the configured live role.
5. Reload your bot's configuration to apply the changes.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required. The bot will automatically check configured YouTube channels for new videos and livestreams every five minutes.

- When a new **video** is uploaded, the configured notification message will be sent to the specified Discord channel. Only videos published within the last 24 hours will trigger notifications.
- When a channel starts a **livestream**, the configured notification message will be sent. If the live role feature is enabled, the configured role will be added to the YouTuber's Discord account when they go live and removed when the stream ends.

## Configuration {#configuration}

This module has two configuration files - one for video upload notifications and one for livestream notifications.

### Video Notification YouTube Channels {#configuration-channels}

In this configuration file, you can set up YouTube channels to monitor for new video uploads. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=youtube-notifications%7Cchannels).

| Field                          | Description                                                                                                                                                |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel                        | The Discord channel in which the notification should be sent.                                                                                              |
| YouTube @-Handle or Channel-ID | The YouTube @-handle or channel ID of the YouTube channel to monitor. Channel IDs starting with `UC` are also supported.                                   |
| Ignore shorts?                 | If enabled, no notifications will be sent when a YouTube Short is uploaded. Normal videos will still trigger notifications.                                |
| Message                        | The message sent to the configured channel when a new video is uploaded. Supports embeds.<br/><i>Please review available parameters in your dashboard.</i> |

### Live Notification YouTube Channels {#configuration-live-channels}

In this configuration file, you can set up YouTube channels to monitor for livestreams. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=youtube-notifications%7Clive-channels).

| Field            | Description                                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel          | The Discord channel in which the notification should be sent.                                                                                                    |
| YouTube @-Handle | The YouTube @-handle of the channel to monitor for livestreams.                                                                                                  |
| Message          | The message sent to the configured channel when the YouTube channel goes live. Supports embeds.<br/><i>Please review available parameters in your dashboard.</i> |
| Use Live-Role    | Whether the live role feature should be activated for this YouTube channel.                                                                                      |
| Discord-User ID  | The Discord user ID of the YouTuber. Only required if the live role feature is enabled.                                                                          |
| Live Role        | The role to assign to the YouTuber when they are live. Only required if the live role feature is enabled.                                                        |

## Troubleshooting {#troubleshooting}

<details>
<summary>Video upload notifications are not being sent</summary>
<ul>
    <li>Make sure the YouTube @-handle or channel ID is correct.</li>
    <li>Ensure the bot has "View channel", "Send messages" and "Embed links" permissions on the notification channel.</li>
    <li>The module checks for new videos every five minutes. Please wait for the next check cycle.</li>
    <li>If the "Ignore shorts?" option is enabled, YouTube Shorts will not trigger notifications.</li>
    <li>If a YouTube channel cannot be found, it will be skipped until the bot is restarted or the configuration is reloaded.</li>
</ul>
</details>

<details>
<summary>Livestream notifications are not being sent</summary>
<ul>
    <li>Make sure the YouTube @-handle is correct.</li>
    <li>Ensure the bot has "View channel", "Send messages" and "Embed links" permissions on the notification channel.</li>
    <li>The module checks for livestreams every five minutes. Please wait for the next check cycle.</li>
</ul>
</details>

<details>
<summary>The live role is not being assigned or removed</summary>
<ul>
    <li>Make sure the "Use Live-Role" option is enabled for this YouTube channel.</li>
    <li>Verify that the Discord user ID and live role ID are configured correctly.</li>
    <li>Ensure the bot has the "Manage roles" permission and that the bot's role is positioned higher than the configured live role in the server settings.</li>
    <li>The YouTuber must be a member of your Discord server.</li>
    <li>Live roles are cleaned up on bot restart. If the role was not removed after a stream ended, restarting the bot will resolve this.</li>
</ul>
</details>

## Stored data {#data-usage}

The following data is being stored by this module:

**For every video notification sent:**

- The YouTube video ID
- The Discord message ID of the notification
- The Discord channel ID where the notification was sent

**For every livestream notification sent:**

- The YouTube livestream ID
- The Discord message ID of the notification
- The Discord channel ID where the notification was sent

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
