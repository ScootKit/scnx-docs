# TikTok-Notifications

Send a message to a channel when a TikTok user publishes a new TikTok.

<ModuleOverview moduleName="tiktok-notifications" />

## Features {#features}

* Receive notifications in a Discord channel when a TikTok user publishes a new video.
* Monitor multiple TikTok accounts simultaneously, each with its own notification channel and message format.
* Customize the notification message with details such as the username, video title, hashtags and URL.

## Setup {#setup}

1. Open the [TikTokers configuration](https://scnx.app/glink?page=bot/configuration?file=tiktok-notifications%7Cusers).
2. Click on "Add new element" and configure the TikTok username and notification channel as described in the [configuration section](#configuration).
3. Make sure the bot has "View channel", "Send messages" and "Embed links" permissions on the configured notification channel.
4. Reload your bot's configuration to apply the changes.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required. The bot will automatically check for new TikToks from configured accounts every twenty minutes. When a new TikTok is found, the configured notification message will be sent to the specified Discord channel.

Only TikToks published within the last 24 hours will trigger notifications, so older TikToks will not be sent retroactively.

## Configuration {#configuration}

This configuration file allows you to set up TikTok accounts to monitor for new videos. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=tiktok-notifications%7Cusers).

| Field | Description |
|-------|-------------|
| Channel | The Discord channel in which the notification should be sent. |
| TikTok-Username | The @handle of the TikTok user you want to receive notifications from. |
| Message | The message sent to the configured channel when the user publishes a new TikTok. Supports embeds.<br/><i>Please review available parameters in your dashboard.</i> |

## Troubleshooting {#troubleshooting}

<details>
<summary>Notifications are not being sent</summary>
<ul>
    <li>Make sure the TikTok username is spelled correctly (with or without the <code>@</code> prefix).</li>
    <li>Verify that the TikTok account exists and is publicly accessible.</li>
    <li>TikTok may restrict API access from time to time, which can temporarily prevent this module from working. This is outside of SCNX's control.</li>
    <li>Ensure the bot has "View channel", "Send messages" and "Embed links" permissions on the notification channel.</li>
    <li>The module checks for new TikToks every twenty minutes. Please wait for the next check cycle.</li>
    <li>If a TikTok account cannot be found, it will be skipped until the bot is restarted or the configuration is reloaded.</li>
</ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every sent notification:

* The TikTok URL
* The Discord message ID of the notification
* The Discord channel ID where the notification was sent

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
