# TikTok-Notifications

Send a message to a channel when a TikTok creator publishes a new TikTok.

<ModuleOverview moduleName="tiktok-notifications" />

:::info
TikTok notifications only work for creators who have connected (claimed) their TikTok account with SCNX. If a configured creator has not connected their account, notifications for them are paused and the creator is listed as an issue on your [dashboard](https://scnx.app/glink?page=bot/configuration?file=tiktok-notifications%7Cusers), together with a link the creator can use to connect their account. Unconnected creators are re-checked once per day, and notifications resume automatically once the account has been connected.
:::

## Features {#features}

- Receive notifications in a Discord channel when a TikTok creator publishes a new video.
- Monitor multiple TikTok accounts simultaneously, each with its own notification channel and message format.
- Customize the notification message with details such as the username, video title, description, hashtags, thumbnail and URL.

## Setup {#setup}

1. Open the [TikTok Creators configuration](https://scnx.app/glink?page=bot/configuration?file=tiktok-notifications%7Cusers).
2. Click on "Add new element" and configure the TikTok username and notification channel as described in the [configuration section](#configuration).
3. Make sure the bot has "View channel", "Send messages" and "Embed links" permissions on the configured notification channel.
4. Reload your bot's configuration to apply the changes.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required. The bot will automatically check for new TikToks from configured accounts every twenty minutes. When a new TikTok is found, the configured notification message will be sent to the specified Discord channel.

Only TikToks published within the last 24 hours will trigger notifications, so older TikToks will not be sent retroactively.

Notifications are only sent for creators who have connected their TikTok account with SCNX. If a creator has not connected their account, the bot pauses notifications for them and reports the creator as an issue on your dashboard, including a link the creator can use to connect their account. Unconnected creators are re-checked once per day, and notifications resume automatically once the account has been connected.

## Configuration {#configuration}

This configuration file allows you to set up TikTok accounts to monitor for new videos. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=tiktok-notifications%7Cusers).

| Field                         | Description                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel                       | The Discord channel in which the notification should be sent.                                                                                                                                                                                                                                                                                                                                                 |
| TikTok-Username               | The @handle of the TikTok creator you want to receive notifications from.                                                                                                                                                                                                                                                                                                                                     |
| Required hashtag              | Only send notifications for videos that include this hashtag. The comparison is case-insensitive and works with or without the `#` prefix. Leave empty to notify for every video.                                                                                                                                                                                                                             |
| Minimum clip length (seconds) | Skip videos shorter than this many seconds. Set to 0 to disable the filter. Videos without a known duration are never filtered out.                                                                                                                                                                                                                                                                           |
| Message                       | The message sent to the configured channel when the creator publishes a new TikTok. Supports embeds. Available parameters include `%userName%` (TikTok username), `%title%` (video title), `%description%` (video description), `%hashtags%` (video hashtags), `%url%` (video URL) and `%thumbnailUrl%` (video thumbnail URL, may be empty).<br/><i>Please review available parameters in your dashboard.</i> |

## Troubleshooting {#troubleshooting}

<details>
<summary>Notifications are not being sent</summary>
<ul>
    <li>Make sure the TikTok username is spelled correctly (with or without the <code>@</code> prefix).</li>
    <li>Verify that the TikTok account exists and is publicly accessible.</li>
    <li>Make sure the creator has connected their TikTok account with SCNX. Notifications are paused for creators who have not connected their account. Check your dashboard for any reported issues and share the provided link with the creator.</li>
    <li>Ensure the bot has "View channel", "Send messages" and "Embed links" permissions on the notification channel.</li>
    <li>The module checks for new TikToks every twenty minutes. Please wait for the next check cycle.</li>
    <li>If a TikTok account cannot be found, it will be skipped until the bot is restarted or the configuration is reloaded.</li>
</ul>
</details>

<details>
<summary>A creator has not connected their TikTok account</summary>
<ul>
    <li>Notifications only work for creators who have connected (claimed) their TikTok account with SCNX.</li>
    <li>When a creator has not connected their account, notifications for them are paused and the creator is reported as an issue on your dashboard, together with a link the creator can use to connect their account.</li>
    <li>Share that link with the creator so they can connect their TikTok account.</li>
    <li>Unconnected creators are re-checked once per day. Notifications resume automatically once the account has been connected.</li>
</ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every sent notification:

- The TikTok URL
- The Discord message ID of the notification
- The Discord channel ID where the notification was sent

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
