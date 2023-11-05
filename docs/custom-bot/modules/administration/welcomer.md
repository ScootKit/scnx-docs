# Welcome and Boosts

Simple module to say "Hi" to new mebers, give them roles automatically and say "thanks" to users who boosted.

<ModuleOverview moduleName="welcomer" />

## Features {#features}

* Welcome new members with custom messages (and dynamic images).
* Say bye to members who left your server.
* Thank users who boosted your server with custom messages and emotionally blackmail them by sending a message when they
  remove their boost.
* Add an unlimited amount of welcome, boost or leave messages in different channels.
* Automatically grant roles to new members and boosters.
* Let the bot use a random message to get some variety in your welcome, leave, boost and unboost messages.
* Automatically delete welcome-messages of members who left within 7 days after joining.
* Add a button below messages that allows your existing members to welcome users.

## Setup {#setup}

### Set up Welcome Messages {#setup-welcome-messages}

Welcome messages get sent every time a new member joins the server. You add a welcome-button to these messages which
allows your existing members to welcome the new user. Additionally, if [enabled](#configuration-config), the message
will get deleted if the user leaves your server within seven days.

1. Create or select one of your channels in which the bot should send your message when a new member join. The bot has
   to have the "View channel", "Send messages" and "View message history" permissions on it.
2. Add the channel to
   the [channel configuration](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels) using
   the "join" Message-Type
   and [configure it](#configuration-channels).
3. Configure the message:
   * If you want to use random messages, enable the "Random messages?" option, open
     the [random messages](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Frandom-messages)
     configuration file and [configure](#configuration-random-messages) the random messages with the Message-Type "
     join".
   * If you want to send the same message every time, use
     the [channel configuration](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels)
     to [configure the message](#configuration-channels).

### Set up Boost / Unboost Messages {#setup-boost-messages}

Boost-Messages gets send when a user boosts the server *for the first time* and the Unboost-Message will get send when a
user removes *all of their* boosts from your server. This messages will not get resend if a user increases or decreases
the amount of boosts on your server due to
a [Discord API limitation](https://github.com/discord/discord-api-docs/discussions/3228#discussioncomment-1717560).

1. Create or select one of your channels in which the bot should send when a member boosts your server. The bot has
   to have the "View channel", "Send messages" and "View message history" permissions on it.
2. Add the channel to
   the [channel configuration](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels) using
   the "Boost" or "Unboost" Message-Type
   and [configure it](#configuration-channels).
3. Configure the message:
   * If you want to use random messages, enable the "Random messages?" option, open
     the [random messages](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Frandom-messages)
     configuration file and [configure](#configuration-random-messages) the random messages with the Message-Type "
     boost" or "unboost".
   * If you want to send the same message every time, use
     the [channel configuration](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels)
     to [configure the message](#configuration-channels).

### Set up Leave Messages {#setup-leave-messages}

Leave messages will get send every time a user leaves your server.

1. Create or select one of your channels in which the bot should send when a member leaves your server. The bot has
   to have the "View channel", "Send messages" and "View message history" permissions on it.
2. Add the channel to
   the [channel configuration](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels) using
   the "leave" Message-Type
   and [configure it](#configuration-channels).
3. Configure the message:
   * If you want to use random messages, enable the "Random messages?" option, open
     the [random messages](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Frandom-messages)
     configuration file and [configure](#configuration-random-messages) the random messages with the Message-Type "
     leave".
   * If you want to send the same message every time, use
     the [channel configuration](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels)
     to [configure the message](#configuration-channels).

### Setup Join or Boost Roles {#setup-join-roles}

:::caution
Currently, Join-Roles might overwrite or remove roles from users that have assigned themselves roles using Discord's
onboarding.
This issue is known and is being worked on.
:::

1. Open the [module configuration](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fconfig).
2. Select the desired roles in the [respective configuration fields](#configuration-config).

## Usage {#usage}

After [setting up](#setup) the module, messages will get automatically sent every time the event gets triggered.

To allow your members to use a Welcome button, simply [enable this feature](#configuration-config) in your
configuration. Once done, new messages will have a (configurable) button. When this button is pressed by one of your
members, it will get inactive (= it can't be pressed by anyone another time) and a [configurable](#configuration-config)
message will get sent in the configured channel.

## Configuration {#configuration}

This module is split in multiple configuration files. You can find them below.

### Channels {#configuration-channels}

In this configuration file, you can set up the channels in which this module is supposed to operate in and allows
configuration of these channels. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels).

:::info
This configuration file uses "Config-Elements". One Config-Element represents each channel that should receive messages
when a supported event is triggered. You can add a channel multiple times, this is especially required if you want to
send different event types in the same channel.
:::

Each Channel has the following configuration options:

| Field                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channel                                                   | This is the channel the message will get sent in.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Channel-Type                                              | Depending on this value, this particular Config-Element will represent the configuration for a specific event type (see [setup](#setup). The following options are available: <ul><li><code>join</code>: This Config-Element will be applied when a new member joins your server.</li><li><code>leave</code>: This Config-Element will be applied when a member leaves your server.</li><li><code>boost</code>: This Config-Element will be applied when a member boosts your server for the first time.</li><li><code>unboost</code>: This Config-Element will be applied when a member removes their last boost from your server.</li></ul> |
| Random messages                                           | If this option is enabled, the "Message" value will *NOT* be applied. Instead, a [random message](#configuration-random-messages) with the same Channel-Type will get sent randomly.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Message                                                   | This will be the message sent in this channel, if "Random messages" is not enabled. This option [supports dynamic image generation](https://sc-net.work/imgen) to make your messages even more pretty ✨.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Welcome Button                                            | *This option is only available, when "Channel Type" is set to "join"*<br/>If enabled, a button will get added below each message. One other member can then click on this button, which will trigger the configured message to be sent.                                                                                                                                                                                                                                                                                                                                                                                                       |
| Welcome Button Content                                    | *Only visible if "Welcome Button" is enabled.*<br/>This will be the content of the button added below messages. The value needs to be less than 100 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Channel in which the welcome-button should send a message | *Only visible if "Welcome Button" is enabled.*<br/>This is the channel the welcome message will get sent in once another member presses the welcome button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Welcome Button Message                                    | *Only visible if "Welcome Button" is enabled.*<br/>This is the message that gets sent in the configured channel when another member presses the welcome button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Module configuration {#configuration-config}

In this configuration file allows you to [set up welcome- and boost roles](#setup-join-roles) and configure other basic
features of this module. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fconfig).

| Field                          | Description                                                                                                                                                                          |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Give roles on join             | These roles will be given to members who joined your server. This won't get applied retroactively, use the [massrole module](./../tools/massrole) to do this.                        |
| Ignore bots?                   | If enabled (this is highly recommended), welcome and leave messages won't get sent if the user joining or leaving is a bot.                                                          |
| Give additional roles on boost | These roles will be given to members who boosted your server in addition to their boost-role assigned by Discord. The roles will get removed if the member removes all their boosts. |
| Delete welcome message         | If enabled, sent welcome messages will get deleted automatically if the user leaves your server within seven days after join.                                                        |

### Random messages {#configuration-random-messages}

This configuration file will get used if a [configured channel](#configuration-channels) uses the "Random messages"
option. In this case, the bot will randomly select one of the messages configured in this file with the same type as
configured in the channel.

:::info
This configuration file uses "Config-Elements". One Config-Element represents a message which a specified type.
When [a channel](#configuration-channels) uses the "Random messages" option, a random message with the same type will
get selected.
:::

| Field        | Description                                                                                                                                                                                                |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message-Type | *see the "Channel-Type" option in the [channel configuration](#configuration-channels).*                                                                                                                   |
| Message      | This is the message that gets send if this message object will get selected randomly. This option [supports dynamic image generation](https://sc-net.work/imgen) to make your messages even more pretty ✨. |

## Troubleshooting {#troubleshooting}

This module is notoriously trick to troubleshoot, as its highly flexible and customizable design introduces a
complicated configuration structure. If none of the steps below help (please try them first!), you can always reach out
to our friendly staff at [scnx.app/help](https://scnx.app/help).

<details>
   <summary>A message is not being sent or the message is "Message not found".</summary>
   <ul>
      <li>Make sure your bot has the "View channel", "Send messages" and "View message history" permissions on the configured channel.</li>
      <li>Make sure a correct <a href="#configuration-channels">channel entry</a> is set up of the correct channel and correct event type.</li>
      <li>If you are using Random Messages: Make sure at least one <a href="#configuration-random-message">random message</a> is configured for this event-type. The message in the <a href="#configuration-channels">channel entry</a> will be ignored.</li>
      <li>If you are not using Random Messages: Make sure you have configured a valid message in your <a href="#configuration-channels">channel entry</a>.</li>
   </ul>
</details>

<details>
   <summary>I am experiencing issues with a dynamically generated image.</summary>
   Please visit <a href="https://sc-net.work/imgen">sc-net.work/imgen</a>, as shown in the error image.
</details>

<details>
   <summary>No message is being sent when a user adds another boost to their existing server boost.</summary>
   This happens due to a <a href="https://github.com/discord/discord-api-docs/discussions/3228#discussioncomment-1717560">Discord API limitation</a>. We cannot change this behavior.
</details>

## Stored data {#data-usage}

The following data will get stored for every configured welcome messsage every time when a new member joins:

* An unique integer identifying the database entry
* The unique Discord User-ID of the member who just joined and triggered the welcome message
* The unique Discord Message-ID of the welcome message that got sent by the bot
* The unique Discord Channel-ID of the channel the welcome message got sent in by the bot
* The exact time the member joined the server
* Metadata about the entry (date when created and last updated)

This data will get used to delete the sent welcome messages if the user leaves the server within seven days after
joins (if [enabled](#configuration-config)). There is no way to stop the bot from storing data (as toggling this feature
should be retroactive), but the data won't get used unless the feature is enabled.

To remove all data, [purge the module database](./../../additional-features#reset-module-database).
