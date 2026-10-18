# YouTube-Notifications

Send a message to a channel when a YouTube channel publishes a new video or starts a livestream.

<ModuleOverview moduleName="youtube-notifications" />

## Features {#features}

- Receive notifications in a Discord channel when a YouTube channel uploads a new video.
- Receive notifications when a YouTube channel starts a livestream.
- Optionally filter out YouTube Shorts from video notifications.
- Optionally skip upcoming or scheduled premieres and livestreams in video notifications until they are published as a regular video.
- Optionally assign a "Live" role to the YouTuber's Discord account while they are livestreaming, and remove it when they go offline.
- Optionally create a Discord event for every announced video or livestream.
- Monitor multiple YouTube channels simultaneously, each with its own notification channel and message format.
- Customize notification messages with details such as channel name, title, description, URL and thumbnail.

## Setup {#setup}

1. Open the [Video Notification YouTube Channels configuration](https://scnx.app/glink?page=bot/configuration?file=youtube-notifications%7Cchannels) to set up video upload notifications, or the [Live Notification YouTube Channels configuration](https://scnx.app/glink?page=bot/configuration?file=youtube-notifications%7Clive-channels) to set up livestream notifications.
2. Click on "Add new YouTube Channel" and configure it as described in the [configuration section](#configuration).
3. Make sure the bot has "View channel", "Send messages" and "Embed links" permissions on the configured notification channel.
4. If you plan to use the live role feature (livestream notifications only), make sure the bot has the "Manage roles" permission and that the bot's role is positioned higher than the configured live role.
5. If you plan to use the Discord event feature, make sure the bot has the "Create events" permission on your server.
6. Reload your bot's configuration to apply the changes.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required. The bot will automatically check configured YouTube channels for new videos and livestreams every 60 seconds, so go-live and upload notifications usually arrive within about a minute. An overlap guard prevents a slow check from starting a second one on top of it, so notifications are never duplicated.

- When a new **video** is uploaded, the configured notification message will be sent to the specified Discord channel. Only videos published within the last 24 hours will trigger notifications.
- When a channel starts a **livestream**, the configured notification message will be sent. If the live role feature is enabled, the configured role will be added to the YouTuber's Discord account when they go live and removed when the stream ends.
- If **Create Discord event?** is enabled, the bot also creates a [Discord event](#discord-events) for the video or livestream.

### Discord events {#discord-events}

For every YouTube channel entry you can optionally let the bot create a Discord scheduled event together with the notification. The event uses the YouTube link as its location (type "External"), the thumbnail as cover image and the shortened description as event description.

- **Livestreams:** The event starts immediately when the stream is announced. If **End event when stream ends?** is enabled, the event is ended once the stream is detected as offline. This takes up to about 3 minutes, as the bot waits for three consecutive checks without a livestream. Without this option, or if the stream is never detected as offline, the event ends automatically after 24 hours.
- **Videos:** The event ends after the configured **Event duration (hours)** (24 hours by default, up to 720 hours).
- Only one event is created per video or livestream on your server, even if multiple entries cover the same YouTube channel.
- If the bot lacks the "Create events" permission or the event cannot be created, this is reported once in the log of your bot and the normal notification is still sent.

## Configuration {#configuration}

This module has two configuration files - one for video upload notifications and one for livestream notifications.

### Video Notification YouTube Channels {#configuration-channels}

In this configuration file, you can set up YouTube channels to monitor for new video uploads. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=youtube-notifications%7Cchannels).

| Field                                          | Description                                                                                                                                                                                     |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel                                        | The Discord channel in which the notification should be sent.                                                                                                                                   |
| YouTube @-Handle or Channel-ID                 | The YouTube @-handle or channel ID of the YouTube channel to monitor. Channel IDs starting with `UC` are also supported.                                                                        |
| Ignore shorts?                                 | If enabled, no notifications will be sent when a YouTube Short is uploaded. Normal videos will still trigger notifications.                                                                     |
| Ignore upcoming/scheduled premieres & streams? | If enabled, scheduled premieres and livestreams will not trigger an upload notification while they are still upcoming or live. They notify normally once they are published as a regular video. |
| Message                                        | The message sent to the configured channel when a new video is uploaded. Supports embeds.<br/><i>Please review available parameters in your dashboard.</i>                                      |
| Create Discord event?                          | If enabled, a Discord event is created for each new video announcement. The bot needs the "Create events" permission. Disabled by default.                                                      |
| Event name                                     | Name of the Discord event (shortened to 100 characters). Only shown if events are enabled.<br/><i>Please review available parameters in your dashboard.</i>                                     |
| Event duration (hours)                         | How long the event should last, from 1 to 720 hours (default: 24). Only shown if events are enabled.                                                                                            |

### Live Notification YouTube Channels {#configuration-live-channels}

In this configuration file, you can set up YouTube channels to monitor for livestreams. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=youtube-notifications%7Clive-channels).

| Field                       | Description                                                                                                                                                          |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel                     | The Discord channel in which the notification should be sent.                                                                                                        |
| YouTube @-Handle            | The YouTube @-handle of the channel to monitor for livestreams.                                                                                                      |
| Message                     | The message sent to the configured channel when the YouTube channel goes live. Supports embeds.<br/><i>Please review available parameters in your dashboard.</i>     |
| Use Live-Role               | Whether the live role feature should be activated for this YouTube channel.                                                                                          |
| Discord-User ID             | The Discord user ID of the YouTuber. Only required if the live role feature is enabled.                                                                              |
| Live Role                   | The role to assign to the YouTuber when they are live. Only required if the live role feature is enabled.                                                            |
| Create Discord event?       | If enabled, a Discord event is created for each livestream announcement. The bot needs the "Create events" permission. Disabled by default.                          |
| Event name                  | Name of the Discord event (shortened to 100 characters). Only shown if events are enabled.<br/><i>Please review available parameters in your dashboard.</i>          |
| End event when stream ends? | If enabled (default), the event is ended as soon as the channel is no longer live. Otherwise it ends automatically after 24 hours. Only shown if events are enabled. |

## Troubleshooting {#troubleshooting}

<details>
<summary>Video upload notifications are not being sent</summary>
<ul>
    <li>Make sure the YouTube @-handle or channel ID is correct.</li>
    <li>Ensure the bot has "View channel", "Send messages" and "Embed links" permissions on the notification channel.</li>
    <li>The module checks for new videos every 60 seconds. Please wait for the next check cycle.</li>
    <li>If the "Ignore shorts?" option is enabled, YouTube Shorts will not trigger notifications.</li>
    <li>If the "Ignore upcoming/scheduled premieres & streams?" option is enabled, premieres and livestreams will only trigger a notification once they are published as a regular video.</li>
    <li>If a YouTube channel cannot be found, it will be skipped until the bot is restarted or the configuration is reloaded.</li>
</ul>
</details>

<details>
<summary>Livestream notifications are not being sent</summary>
<ul>
    <li>Make sure the YouTube @-handle is correct.</li>
    <li>Ensure the bot has "View channel", "Send messages" and "Embed links" permissions on the notification channel.</li>
    <li>The module checks for livestreams every 60 seconds. Please wait for the next check cycle.</li>
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

<details>
<summary>Discord events are not being created</summary>
<ul>
    <li>Make sure "Create Discord event?" is enabled for the YouTube channel entry.</li>
    <li>Ensure the bot has the "Create events" permission on your server.</li>
    <li>An event is only created together with a notification, and only once per video or livestream on your server.</li>
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
