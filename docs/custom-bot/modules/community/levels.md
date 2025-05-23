import LevelSimulator from '/src/components/LevelSimulator';

# Level System

Easy to use levelling system with a lot of customization!

<ModuleOverview moduleName="levels" />

## Features {#features}

* Grant a random amount of XP to users for messages they send with configurable amounts and cooldown.
* Grant XP based on the amount of time a user [spends in a voice channel](#voice-xp).
* Select one of [three leveling curves](#level-curves) or [enter your own](#custom-level-curve).
* Add roles as [level rewards](#level-rewards).
* Configure [custom level up messages](#level-up-messages) - you add custom messages for specific levels or use random
  messages, so your chat isn't to repetitive!
* Add [multiplicator channels and roles](#multiplicators).
* Show the current [leaderboard](#live-leaderboard) live in a Discord channel.
* Start your level system with Level 0 or configure a maximum level.
* [Manage the XP and level of users](#manage-levels) on your server.

## Setup {#setup}

* After [enabling the module](https://scnx.app/glink?page=bot/modules?query=levels), users will start receiving XP based
  on your [configuration](#configuration) for sending messages and spending time in voice channels.
* The bot can only grant XP for messages it has access to, so please ensure that it has the following permissions on
  every channel: View Channel, Read message history. If you want to send level up messages into a channel, it'll also
  need the Send Messages and Embed Links permissions. For granting role rewards, the bot will need to have the Manage
  roles permission. The highest role of the bot will also need to be higher than the role the bot needs to assign.
* If you are transferring from another, you can [manage user XP and levels manually](#manage-levels) and manually
  transfer XP and levels from your old system.
* There are plenty of other features included that can be used to encourage activity on your server, such
  as [Multiplication channels and roles](#multiplicators) and [live leaderboards](#live-leaderboard), which require
  additional setup, but you don't need to configure them to use the module.
* You can also customize messages and adjust other options in you [configuration](#configuration).

## Usage {#usage}

* After [setting up the modules](#setup), users will start receiving XP for sending messages and for spending time in
  voice channels.
* Once a user reaches a threshold based on your [customizable leveling formula](#level-curves), they will level up to
  the next level. You
  can [configure](#configuration) rewards, like roles, for reaching specific levels.
* Users can check their and other user's current XP and see how much XP is required to level up using
  [`/profile`](#commands). A full leaderboard with the XP of all users is available with [`/leaderboard`](#commands) or
  an [always accurate version of it can be sent into a channel](#live-leaderboard).
* To manually adjust the XP and level of any user on your server, use the [`/manage-levels`](#commands) commands
  after [enabling cheats in your configuration](#configuration).

### Live leaderboard {#live-leaderboard}

Instead of having your users run [`/leederboard`](#commands) every time they want to see the users with the most levels,
you can enable a Live Leaderboard. This is a channel with exactly one message in it, which will be updated to the
current leaderboard every five minutes. This means that users won't have to run any commands or visit a webpage to see
the top 15 users in their server. They can also click on "Show my level" to view their own level, instead of executing
the [`/profile`](#commands) command.

To enable the live leaderboard, set the "Live Leaderboard Channel" in your [configuration](#configuration) to any empty
channel on your server on which the bot has the Send Message, View Message History and View Channel permissions. For the
best results, set up your channel in a way in which users won't be able to send messages into this channel. Once
configured, [reload your configuration](/docs/scnx/guilds/bots/#basics) and the bot will send a message into the channel
which will be edited every 5 minutes going forward.

![Screenshot of a live leaderboard from the ScootKit Server](@site/docs/assets/custom-bot/modules/levels/live-leaderboard-en.png)

### Level messages {#level-up-messages}

When a user levels up a level, a level message will be sent by default. You can [configure](#configuration) in which
channel the level up message should be sent (if none is configured, it will be sent into the current channel). You can
also [configure](#configuration) that no level up messages should be sent or level up messages should be limited to
level ups with [level rewards](#level-rewards).

There are two types of level ups: With and without [level rewards](#level-rewards), internally called "normal" level
ups (without any level rewards) and "with-reward" (for level ups with message rewards). Due to the reward aspect, both
types have separate configuration fields.

By default, the level up configuration from the [message configuration](#configuration-strings) will be used. However,
you can also enable the "Random messages" configuration field in your [module configuration](#configuration-config) in
which case a message will be selected from
the [random level-up messages configuration file](#configuration-random-levelup-messages) based on their type. This
feature is particularly useful to make leveling fun on servers as level up messages are unique and not repating. If no
random messages are available for any given required type, the bot will fall back to the configuration in your message
configuration file.

Additionally, you might want to adjust the level up message for a specific level. This is possible in
the [Selected messages configuration file](#configuration-special-levelup-messags). If any user reaches a level included
in this configuration file, the message configured in this file will be used, regardless of the level up type. This is
particularly useful if you have levels that you want to have special level up messages. It can also come handy if have a
level reward that is
not offered through the [level rewards](#level-rewards) system of this module and want to explain your reward in the
level up message.

### Level simulator {#level-simulator}

The amount of XP a user needs to reach a specific level is dependent on [your level curve](#level-curves) and
your [leveling configuration](#configuration). To make it easier to select the right level curve (or
even [design your own](#custom-level-curve)), we have included a Level-Simulator below. Simply enter the values
from [your configuration](#configuration) to see how much XP is needed to reach a specific message and how many messages
an average user needs to do so. [XP for Voice Channels](#voice-xp) won't be taken into account.

<LevelSimulator />

### XP for Voice Channels {#voice-xp}

Every minute a user spends in a voice channel with other members, they will recive a [configurable](#configuration)
amount of XP.
No XP will be given if they are alone in their channel or are muted or deafened. Numbers will be rounded and XP will be
given every 15
minutes or when the user leaves the channel. This incentivizes your members to become active and engaged in voice
channels and prevents abuse of the system.

### Level curves {#level-curves}

A leveling curve is used to calculate the amount of XP needed to reach a specific level on your server. You can think of
it as a formula that is used to calculate this XP amount. Your choice of a level curve greatly affects, in addition to
your [leveling configuration](#configuration), how hard it is for
users to level up on your server.

We include three different leveling curves in the bot, but you can also [provide your own](#custom-level-curve).

The following level formulas are available:

* **Easy Linear** curve (selected by default): This will be the best option for most servers. This level curve has been
  carefully selected to fit most servers needs. It's designed to allow easy entry into the level system while still
  making it hard to level up to higher levels.\
  The formula used is $f(x) = 750x + ((x-1) * 500)$ (where $x$ is the level to be calculated) with a $f(x) = O(x)$
  (meaning that the level curve will scale linearly).
* **Default Linear** curve: This is a simplified version of the Easy Linear cure and was the old default value, but
  won't be used by default. It allows easier leveling and can be used for smaller servers.\
  The formula is $f(x) = 750x$ (where $x$ is the level to be calculated) with a $f(x) = O(x)$
  (meaning that the level curve will scale linearly).
* **Exponentiation** curve: This level curve allows users a very easy start but will get tough and basically impossible
  after level 14.\
  The formula is $f(x) = 350 * (x-1)^2$ (where $x$ is the level to be calculated) with a $f(x) = O(x^2)$ (meaning that
  the function will scale quadratically).
* **Custom formula**: You can enter any mathematical formula to be used for full customizable. You can find more
  information in the [custom level curve](#custom-level-curve) section.

If you are wondering what the formulas mean or want to design your own, we have more details in
the [custom level curve](#custom-level-curve) section.

While choosing a level curve might seem difficult,
it's usually the best option to use our **Easy Linear** curve as it has been carefully calibrated to fit most servers.
If you then notice that it is too easy, switch to the **Exponentiation** curve. If it is to hard for your users, you
should consider switching to the **Easy Linear** curve. You can also always keep your current curve and adjust
the [XP amounts](#configuration) instead.

Here, you can see the level curves in comparison:

![Level curves plotted using Geogebra. In red, you can see the Exponentiation Curve. In green, you can find the Easy Linear Curve. The default Linear Curve is plotted in blue.](@site/docs/assets/custom-bot/modules/levels/level-curves.png)

> **Level curve comparison**: In red, you can see the Exponentiation Curve. In green, you can find the Easy Linear
> Curve. The default Linear Curve is plotted in blue.

### Custom level curve {#custom-level-curve}

You can enter a custom level curve in your [configuration](#configuration).

Use the $x$ variable (and no other variables). The result of the formula should be the required XP to reach level x (your variable).

Examples: `x*750+((x-1)*500)` (our default level curve), `350 * (x-1)^2` (our exponentiation curve).

### Level rewards {#level-rewards}

### Multiplicator channels and roles {#multiplicators}

### Manage user XP and levels on your server {#manage-levels}

## Commands {#commands}

<SlashCommandExplanation />

| Command             | Description                |                                                                                                                                                               
|---------------------|----------------------------|
| *Command-Name here* | *Command description here* |

## Configuration {#configuration}

### Module Configuration {#configuration-config}

In this configuration file, you can configure how much XP users should be receiving when sending messages and how your
level system should behave. You
can [open this file in your dashboard](https://scnx.app/glink?page=bot/configuration?query=level&file=levels|configs/config).

| Field                                                         | Description                                                                                                                                                                                                                                                                                                 |                                                                                                                                                 
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| XP given at least for messages                                | This amount of XP will be given at least for each message sent.                                                                                                                                                                                                                                             |
| XP given at most for messages                                 | This amount of XP will be given at most for each message sent.                                                                                                                                                                                                                                              |
| XP given per voice minute                                     | How many XP will be given to users per minute when they are in a voice channel with other members. Supports floating point values. More information in the [Voice XP](#voice-xp) section.                                                                                                                   |
| Cooldown                                                      | In milliseconds, how much cooldown will there be between each XP given to users for sending messages. This is usefully to avoid rewarding users from spamming.                                                                                                                                              |
| Type of level curve                                           | The level curve that should be used for your level system. More information in the [level curve](#level-curve) section.                                                                                                                                                                                     |
| Custom Level Formula (if enabled)                             | Your custom leveling formula. More information in the [custom level formula](#custom-level-curve) section.                                                                                                                                                                                                  |
| Which Level Up Messages should get sent?                      | If this is set to "all" all [level messages](#level-up-messages) will be sent. If you set this to the "only-role-rewards" option, level up messages will only be sent if a level up includes a [level reward](#level-reward). If you set this to "none", no level up mesages will be sent at all.           |
| Level Up Channel                                              | By default, level up messages will be sent into the channel the user archived the level up in. You can select a channel in which level up channels should get sent instead here.                                                                                                                            |
| Leaderboard Sort Category                                     | By default, the [`/leaderboard`](#commands) command will include users categorized by levels. If this is undesired, select the XP option to have the command output sorted by XP instead.                                                                                                                   |
| Backlisted Channels                                           | Add channels or categories here that should be excluded from leveling. Users can't earn XP for messages sent in these channels or categories.                                                                                                                                                               |
| Level Reward Roles                                            | Configure level rewards at specific levels here. First field: Level, Second Field: Role. More information in the [Level Rewards](#level-rewards) section.                                                                                                                                                   |
| XP Multiplication Roles                                       | Allows you to configure roles that have a higher multiplication factor than normal (default value is 1). Learn more in the [Multiplicator channels and roles](#multiplicators) section.                                                                                                                     |
| XP Multiplication Channels                                    | Allows you to configure channels that have a higher multiplication factor than normal (default value is 1). Learn more in the [Multiplicator channels and roles](#multiplicators) section.                                                                                                                  |
| Only keep highest Level Role                                  | If enabled, all previous level roles a user had will get removed, when they advance to a new level.                                                                                                                                                                                                         |
| Rest Level on leave                                           | If enabled, all levels and the XP of a user will be deleted when they leave your server.                                                                                                                                                                                                                    |
| Random messages                                               | If enabled, random level messages will be used instead of the default configured level message. Learn more in the [level message](#level-up-messages) section.                                                                                                                                              |
| Live Leaderboard                                              | If set, the bot will send a [Live Leaderboard](#live-leaderboard) into this channel.                                                                                                                                                                                                                        |
| Maximum amount of users displayed in live leaderboard channel | This is the maximum amount of users displayed in the Live Leaderboard channel. /leaderboard will still show the full leaderboard.<br/>*Values equal or below 25 can be entered.*                                                                                                                            |
| Start with Level 0?                                           | By default, users start with Level 1. If you enable this option, all users will start with level zero. This is only a cosmetic setting and as such can be applied retroactively. [Level formulas](#level-curves) will still use the levelling system starting at one, but this won't be displayed to users. |
| Use usernames instead of mentions in the live leaderboard?    | If enabled, the bot will use the tag of users in the Leaderboard-Channel-Embed instead of their mention.                                                                                                                                                                                                    |
| Cheats                                                        | To manage [levels and XP manually](#manage-levels), enable this option. This makes your level system unfair, if abused by admins.                                                                                                                                                                           |

### Message configuration {#configuration-strings}

Explain what users can configure in this file and include a [GLink](https://scnx.app/user/tools?page=glink-generator) to
the SCNX Dashboard to open this file.
Please make sure that you replace the heading id with the correct file-name.

| Field        | Description                                                 |                                                                                                                                                 
|--------------|-------------------------------------------------------------|
| *Field-Name* | Describe what this field does - be as detailed as possible. |

### Random level up messages configuration {#configuration-random-levelup-messages}

Explain what users can configure in this file and include a [GLink](https://scnx.app/user/tools?page=glink-generator) to
the SCNX Dashboard to open this file.
Please make sure that you replace the heading id with the correct file-name.

| Field        | Description                                                 |                                                                                                                                                 
|--------------|-------------------------------------------------------------|
| *Field-Name* | Describe what this field does - be as detailed as possible. |

### Selected level up messages configuration {#configuration-special-levelup-messages}

Explain what users can configure in this file and include a [GLink](https://scnx.app/user/tools?page=glink-generator) to
the SCNX Dashboard to open this file.
Please make sure that you replace the heading id with the correct file-name.

| Field        | Description                                                 |                                                                                                                                                 
|--------------|-------------------------------------------------------------|
| *Field-Name* | Describe what this field does - be as detailed as possible. |

## Troubleshooting {#troubleshooting}

Think of possible issues users might run into (or search our public support channel for inspiration) and explain how to
avoid / fix them.
You can lay out this section as you want - feel free to "peak" in other documentation files for inspiration.

## Stored data {#data-usage}

The following data is being stored about every user who sent at least one eligible message on your server:

* The unique Discord User-ID of the member who sent the message.
* The number of XP the user has.
* The number of eligible messages the user has sent.
* The current level of the user.
* Metadata about the entry (date when created and last updated).

You can delete the data about a user by using the [`/manage-levels reset-xp`](#manage-levels) command with the `user`
parameter. To delete all data about every user, use the command without the `user` parameter.
Alternatively, to remove all data stored by this
module, you can also [purge the module database](/docs/custom-bot/additional-features#reset-module-database).