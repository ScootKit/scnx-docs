# Threads-Notifications

Send a message to a channel when someone posts a new thread on Threads by Meta.

<ModuleOverview moduleName="threads-notifications" />

## Features {#features}

* Receive notifications in a Discord channel when a Threads user publishes a new post.
* Monitor multiple Threads accounts simultaneously, each with its own notification channel and message format.
* Customize the notification message with details such as the username, post preview and URL.

## Setup {#setup}

1. Open the [Threads Accounts configuration](https://scnx.app/glink?page=bot/configuration?file=threads-notifications%7Cusers).
2. Click on "Add new element" and configure the Threads username and notification channel as described in the [configuration section](#configuration).
3. Make sure the bot has "View channel", "Send messages" and "Embed links" permissions on the configured notification channel.
4. Reload your bot's configuration to apply the changes.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required. The bot will automatically check for new posts from configured Threads accounts every fifteen minutes. When a new post is found, the configured notification message will be sent to the specified Discord channel.

Only posts published within the last 24 hours will trigger notifications, so older posts will not be sent retroactively.

## Configuration {#configuration}

This configuration file allows you to set up Threads accounts to monitor for new posts. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=threads-notifications%7Cusers).

| Field | Description |
|-------|-------------|
| Channel | The Discord channel in which the notification should be sent. |
| Threads-Username | The @handle of the Threads user you want to receive notifications from. |
| Message | The message sent to the configured channel when the user publishes a new thread on Threads. Supports embeds.<br/><i>Please review available parameters in your dashboard.</i> |

## Troubleshooting {#troubleshooting}

<details>
<summary>Notifications are not being sent</summary>
<ul>
    <li>Make sure the Threads username is spelled correctly (with or without the <code>@</code> prefix).</li>
    <li>Verify that the Threads account exists and is publicly accessible.</li>
    <li>Ensure the bot has "View channel", "Send messages" and "Embed links" permissions on the notification channel.</li>
    <li>The module checks for new posts every fifteen minutes. Please wait for the next check cycle.</li>
    <li>If a Threads account cannot be found, it will be skipped until the bot is restarted or the configuration is reloaded.</li>
</ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every sent notification:

* The Threads post URL
* The Discord message ID of the notification
* The Discord channel ID where the notification was sent

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
