# Reddit-Notifications

Get notifications when new threads get created in your favorite subreddit.

<ModuleOverview moduleName="reddit-notifications" />

## Features {#features}

* Receive notifications in a Discord channel when new threads are posted in configured subreddits.
* Customize the notification message with thread details such as title, author, URL and media.
* Monitor multiple subreddits simultaneously, each with its own notification channel and message format.

## Setup {#setup}

1. Open the [Subreddits configuration](https://scnx.app/glink?page=bot/configuration?file=reddit-notifications%7Csubreddits).
2. Click on "Add new element" and configure the subreddit and notification channel as described in the [configuration section](#configuration).
3. Make sure the bot has "View channel", "Send messages" and "Embed links" permissions on the configured notification channel.
4. Reload your bot's configuration to apply the changes.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required. The bot will automatically check configured subreddits for new threads every ten minutes. When a new thread is found, the configured notification message will be sent to the specified Discord channel.

Only threads published within the last ten hours will trigger notifications, so older threads will not be sent retroactively.

## Configuration {#configuration}

This configuration file allows you to set up subreddits to monitor for new threads. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=reddit-notifications%7Csubreddits).

| Field | Description |
|-------|-------------|
| Channel | The Discord channel in which the notification should be sent. |
| Subbredit-Name (r/\<NameHere>) | The name of the subreddit to monitor (the part after `r/`). |
| Message | The message sent to the configured channel when a new thread gets posted. Supports embeds.<br/><i>Please review available parameters in your dashboard.</i> |

## Troubleshooting {#troubleshooting}

<details>
<summary>Notifications are not being sent</summary>
<ul>
    <li>Make sure the subreddit name is spelled correctly (without the <code>r/</code> prefix).</li>
    <li>Verify that the subreddit exists and is publicly accessible.</li>
    <li>Ensure the bot has "View channel", "Send messages" and "Embed links" permissions on the notification channel.</li>
    <li>The module checks for new threads every ten minutes. Please wait for the next check cycle.</li>
    <li>If a subreddit cannot be reached, it will be skipped until the bot is restarted or the configuration is reloaded.</li>
</ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every sent notification:

* The Reddit thread ID
* The Discord message ID of the notification
* The Discord channel ID where the notification was sent

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
