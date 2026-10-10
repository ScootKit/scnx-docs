# RSS-Notifications

Send a message to a channel when a new item appears in an RSS or Atom feed.

<ModuleOverview moduleName="rss-notifications" />

## Features {#features}

- Receive notifications in a Discord channel when new items appear in any RSS or Atom feed.
- Customize the notification message with item details such as title, description, URL, publish date and media.
- Monitor multiple feeds simultaneously, each with its own notification channel and message format.
- Supports media extraction from feed entries, including images from media:content, media:thumbnail and enclosure elements. If none of these is present, the first image inside the item's HTML content or description is used.

## Setup {#setup}

1. Open the [Feeds configuration](https://scnx.app/glink?page=bot/configuration?file=rss-notifications%7Cfeeds).
2. Click on "Add new element" and configure the feed URL and notification channel as described in the [configuration section](#configuration).
3. Make sure the bot has "View channel", "Send messages" and "Embed links" permissions on the configured notification channel.
4. Reload your bot's configuration to apply the changes.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required. The bot will automatically check configured feeds for new items every fifteen minutes. When a new item is found, the configured notification message will be sent to the specified Discord channel.

Only items published within the last thirty minutes will trigger notifications, so older items will not be sent retroactively.

Feeds are fetched by SCNX servers rather than by your bot, and results can be a few minutes old because SCNX caches them. A feed that is only reachable from a private network will not work. Publishers can ask us to stop fetching their feed. If a publisher opted out, the feed cannot be checked and a warning is written to your bot's log.

## Configuration {#configuration}

This configuration file allows you to set up feeds to monitor for new items. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=rss-notifications%7Cfeeds).

| Field               | Description                                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel             | The Discord channel in which the notification should be sent.                                                                                                     |
| RSS / Atom Feed URL | The URL to a valid RSS or Atom feed. The feed will be checked every fifteen minutes.                                                                              |
| Message             | The message sent to the configured channel when a new item appears in the feed. Supports embeds.<br/><i>Please review available parameters in your dashboard.</i> |

Only the 10 newest entries of a feed are checked on each run, and item descriptions are shortened to 920 characters.

## Troubleshooting {#troubleshooting}

<details>
<summary>Notifications are not being sent</summary>
<ul>
    <li>Make sure the feed URL is a valid RSS or Atom feed URL.</li>
    <li>Verify that the feed is publicly accessible from the internet and returns valid XML. Feeds behind a login or on a private network cannot be fetched.</li>
    <li>Some providers block requests from data centers. If your feed works in your browser but not here, the provider may be blocking SCNX servers.</li>
    <li>Ensure the bot has "View channel", "Send messages" and "Embed links" permissions on the notification channel.</li>
    <li>The module checks for new items every fifteen minutes. Please wait for the next check cycle.</li>
    <li>Note that feeds are normalized, meaning that not all values may be available for every feed.</li>
</ul>
</details>

<details>
<summary>Media images are not showing in notifications</summary>
<ul>
    <li>Only image formats (PNG, JPEG, WebP, GIF) are supported for media extraction.</li>
    <li>The feed entry must contain media in a supported format via <code>media:content</code>, <code>media:thumbnail</code> or <code>enclosure</code> elements.</li>
    <li>Make sure you are using the <code>%mediaURL%</code> parameter in your notification message configuration.</li>
</ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every sent notification:

- The item ID (or link if no ID is available)
- The Discord message ID of the notification
- The Discord channel ID where the notification was sent

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
