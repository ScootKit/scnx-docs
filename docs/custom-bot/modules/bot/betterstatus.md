# Betterstatus

Gives you more features to make your status even better - change it when someone joins, change it every x seconds and
more!

<ModuleOverview moduleName="betterstatus" />

## Features {#features}

* Automatically change the status of your bot randomly every few seconds.
* Customize the Activity-Type (Playing, Watching, …).
* Customize the online status of your bot (Do not disturb, Online, Away, …).
* Change the status automatically when a new user joins to welcome them.
* Add a custom link to a streaming status.
* Add a wide variety of parameters to your status.

## Setup {#setup}

If you only want to have one status, but still want to use other features of this module (like online status
customization), simply add only one possible value for the interval.

To set up an automatically changing bot status:

1. Open the [configuration](https://scnx.app/glink?page=bot/configuration?file=betterstatus%7Cconfig) and enable the
   interval.
2. Enter possible status values in the Interval-Statuses List. You can use parameters displayed in your dashboard.
3. [Configure](#configuration) additional aspects of the module.
4. Reload your bot's configuration and wait for the first interval to trigger.

To set up a status that gets automatically set when a new user joins:

1. Open the [configuration](https://scnx.app/glink?page=bot/configuration?file=betterstatus%7Cconfig) and the join
   status functionality.
2. Enter the value the bot should change the status to when a new user joins.
3. [Configure](#configuration) additional aspects of the module.
4. Reload your bot's configuration and wait for a member to join.

## Usage {#usage}

* Once [set up](#setup), the interval will automatically change the status based on your
  timeframe [configuration](#configuration). There's no additional input required and this will happen automatically.
* Once [set up](#setup), the join status will be automatically set every time a new user joins your server. There's no
  additional input required and this will happen automatically. Please note that this status will not be removed
  automatically.

Please note that intervals can overwrite join statues. This means that your bot will set a random status regularly based
on your [configuration](#configuration), even if a new member just joined. In such cases, the join status will get
overwritten.

The status in the [built-in configuration](https://scnx.app/glink?page=bot/configuration?file=bot%7Cconfig) will get
ignored when using this module.

Please note that randomly selecting a value from the "Interval statuses" field might mean that the same status gets
selected multiple times in a row, causing no visible change to the bot's status in Discord.

## Configuration {#configuration}

In this configuration file, you can [set up](#setup) join and interval statuses and customize their appearance in
Discord. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=betterstatus%7Cconfig).

| Field                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable interval?            | If enabled, the bot will change its status in Discord in the configured interval.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Interval statuses           | *Only visible if "Enable interval?" is enabled*<br/>The bot will regularly automatically select one of these values and set it as its status. You can find all available parameters in your dashboard.                                                                                                                                                                                                                                                                                               |
| Status interval             | *Only visible if "Enable interval?" is enabled*<br/>The bot will set a random value from the "Interval statuses" field as its status based on the amount of seconds specified in this field. Needs to be more than 10.                                                                                                                                                                                                                                                                               |
| Activity Type               | This is how Discord will prefix your status. Here are a few examples:<br/><ul><li><code>PLAYING</code>: **Playing** your status value</li><li><code>WATCHING</code>: **Watching** your status value</li><li><code>STREAMING</code>: **Streaming** your status value (this value also supports a watch link and will change the status indicator to purple)</li><li><code>COMPETING</code>: **Competing** your status value</li><li><code>LISTENING</code>: **Listening** your status value</li></ul> |
| Bot-Status                  | This is how your online status of your bot will appear in Discord.<br/><ul><li><code>online</code>: Your bot will be "online" (green indicator)</li><li><code>dnd</code>: Your bot will be on "Do not disturb" (red status indicator)</li><li><code>idle</code>: Your bot will be on "Idle" (yellow status indicator)</li></ul>                                                                                                                                                                      |
| Change status on user join? | If enabled, the bot will change its status to a specified value everytime a new user joins your Discord.                                                                                                                                                                                                                                                                                                                                                                                             |
| User-Join-Status            | *Only visible if "Change status on user join?" is enabled*<br/>This will be the value the bot changes its status to every time a user joins. You can find all available parameters in your dashboard.                                                                                                                                                                                                                                                                                                |
| Streaming-Link              | *Only works if "Activity Type" is set to "STREAMING"*<br/>If your link is supported by Discord (only `twitch.tv` and `youtube.com` URLs are supported), users will be able to click a button displayed in your bot's profile to watch the stream. The linked streamer does not need to be online for the button to appear.                                                                                                                                                                           |

## Troubleshooting {#troubleshooting}

* Your Discord client might be caching certain values. Wait a few minutes and restart your Discord client.
* If you have interval statuses enabled, make sure that you have added at least one value to the "Interval
  statuses" <a href="#configuration">configuration option</a>.
* If your Streaming-Link is missing, please make sure it's linking to a channel on one of the following platforms:
  Twitch, YouTube
* Make sure you are using the correct parameters in your configuration.
* Make sure your join status was not overwritten by the configured interval - this can cause your join status to not be
  displayed.
