# Twitch-Notifications

Send a message to a channel when a streamer goes live on Twitch.

<ModuleOverview moduleName="twitch-notifications" />

## Features {#features}

* Receive notifications in a Discord channel when a configured Twitch streamer goes live.
* Customize the notification message with stream details such as the streamer name, game, title, thumbnail and URL.
* Optionally assign a "Live" role to the streamer's Discord account while they are streaming, and remove it when they go offline.
* Monitor multiple streamers simultaneously, each with its own notification channel, message format and live role.

## Setup {#setup}

1. Open the [Streamers configuration](https://scnx.app/glink?page=bot/configuration?file=twitch-notifications%7Cconfigs%2Fstreamers).
2. Click on "Add new element" and configure the streamer and notification channel as described in the [configuration section](#configuration).
3. Make sure the bot has "View channel", "Send messages" and "Embed links" permissions on the configured notification channel.
4. If you plan to use the live role feature, make sure the bot has the "Manage roles" permission and that the bot's role is positioned higher than the configured live role.
5. Reload your bot's configuration to apply the changes.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required. The bot will automatically check configured streamers' live status every three minutes. When a streamer goes live (or starts a new stream), the configured notification message will be sent to the specified Discord channel.

If the live role feature is enabled for a streamer, the configured role will be added to the streamer's Discord account when they go live and removed when they stop streaming.

## Configuration {#configuration}

This configuration file allows you to set up Twitch streamers to monitor. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=twitch-notifications%7Cconfigs%2Fstreamers).

| Field | Description |
|-------|-------------|
| Live-Messages | The message sent to the configured channel when the streamer goes live. Supports embeds.<br/><i>Please review available parameters in your dashboard.</i> |
| Channel | The Discord channel in which the live notification should be sent. |
| Streamer | The Twitch username of the streamer to monitor. |
| Use Live-Role | Whether the live role feature should be activated for this streamer. |
| Discord-User ID | The Discord user ID of the streamer. Only required if the live role feature is enabled. |
| Live Role | The role to assign to the streamer when they are live. Only required if the live role feature is enabled. |

## Troubleshooting {#troubleshooting}

<details>
<summary>Notifications are not being sent</summary>
<ul>
    <li>Make sure the Twitch username is spelled correctly.</li>
    <li>Verify that the Twitch account exists.</li>
    <li>Ensure the bot has "View channel", "Send messages" and "Embed links" permissions on the notification channel.</li>
    <li>The module checks the live status every three minutes. Please wait for the next check cycle.</li>
</ul>
</details>

<details>
<summary>The live role is not being assigned or removed</summary>
<ul>
    <li>Make sure the "Use Live-Role" option is enabled for this streamer.</li>
    <li>Verify that the Discord user ID and live role ID are configured correctly.</li>
    <li>Ensure the bot has the "Manage roles" permission and that the bot's role is positioned higher than the configured live role in the server settings.</li>
    <li>The streamer must be a member of your Discord server.</li>
</ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every monitored streamer:

* The Twitch username of the streamer (used as a unique identifier)
* The timestamp of when the current stream started (used to detect new streams)
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
