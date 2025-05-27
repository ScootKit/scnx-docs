import LevelSimulator from '/src/components/LevelSimulator';

# Level System

Easy to use levelling system with a lot of customization!

<ModuleOverview moduleName="levels" />

## Features {#features}

* Grant a random amount of XP to users for messages they send with configurable amounts and cooldown.
* Grant XP based on the amount of time a user [spends in a voice channel](#voice-xp).
* Select one of [three leveling curves](#level-curves) or [enter your own](#custom-level-curve).
* Add roles as [level rewards](#level-rewards).
* Configure [custom level up messages](#level-up-messages) - you can add custom messages for specific levels or use random
  messages, so your chat isn't to repetitive!
* Add [multiplicator channels and roles](#multiplicators).
* Show the current [leaderboard](#live-leaderboard) live in a Discord channel.
* Start your level system with Level 0 and configure a maximum level.
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

* After [setting up the module](#setup), users will start receiving XP for sending messages and for spending time in
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
the [`/profile`](#commands) command. The response will only be visible to the user themselves.

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
feature is particularly useful to make leveling fun on servers as level up messages are unique and not repeating. If no
random messages are available for any given required type, the bot will fall back to the configuration in your message
configuration file.

Additionally, you might want to adjust the level up message for a specific level. This is possible in
the [Selected messages configuration file](#configuration-special-levelup-messages). If any user reaches a level
included
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

Every minute a user spends in a voice channel with other members, they will receive a [configurable](#configuration)
amount of XP.
No XP will be given if they are alone in their channel or are muted or deafened. Numbers will be rounded and XP will be
given every 15
minutes or when the user leaves the channel. This incentivizes your members to become active and engaged in voice
channels and prevents abuse of the system.

By default, level up messages will be sent into the text channel of the voice channel the user is connected to, but you
can provide a separate channel in your [configuration](#configuration), if you want.

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
the [XP amounts](#configuration) instead. Try playing around with different configurations and level curves in
our [level simulator](#level-simulator).

Here, you can see the level curves in comparison:

![Level curves plotted using Geogebra. In red, you can see the Exponentiation Curve. In green, you can find the Easy Linear Curve. The default Linear Curve is plotted in blue.](@site/docs/assets/custom-bot/modules/levels/level-curves.png)

> **Level curve comparison**: In red, you can see the Exponentiation Curve. In green, you can find the Easy Linear
> Curve. The default Linear Curve is plotted in blue. You can also open
> this [in Geogebra](https://www.geogebra.org/calculator/bwgc6dvp) where you can play around more and
> render [your own level curve](#custom-level-curve) for comparison.

### Custom level curve {#custom-level-curve}

You can enter a custom level curve in your [configuration](#configuration).

The level formula is a mathematical representation of your level curve. The result of the formula will return the number
of XP needed for a specific level $x$. For example, to calculate level $15$ with our default linear
curve ($f(x) = 750 * x$), you would enter $15$ instead of $x$ into this level formula. This would result
in $f(15) = 750 * 15 = 11,250$, meaning that $11,250$ XP is required to reach level $15$.

To design your own level formula, you'll need to enter your own mathematical formula. This formula should only use
the $x$ variable (and no other variables) which shall mean the level to be calculated. The result of the formula should
be the required XP to reach
this level x (your variable).

Examples of valid custom level curves: `x*750+((x-1)*500)` (our default level curve), `350 * (x-1)^2` (our
exponentiation curve).

### Level rewards {#level-rewards}

When a user reaches a specific level, you might want to give them a role to reward their activity. This is particularly
useful to reward active users with new permissions on your server, change the color of their username or to show their
level in their profile.

To use this feature, first create the roles you want to give when users reach a specific level. After
this, [adjust your configuration](#configuration) with these roles as described below.

In the first field of the "Level rewards" configuration option, enter the level at which the user should receive the
role. In the second field, select the role that should be granted to the user:

![Screenshot of the SCNX Dashboard level rewards configuration](@site/docs/assets/custom-bot/modules/levels/level-rewards-en.png)

By default, level roles "stack" which means that a user can have multiple level roles. To disable this
behavior and enforce that a user can only have on a level role at a time, enable the "name" configuration option in
your [configuration](#configuration).

### Multiplicator channels and roles {#multiplicators}

By default, every user and channel has a multiplication factor of 1. To reward users with specific roles (such as server
boosters), you can increase their role multiplicator. You could also increase the channel multiplicator of a channel
that you'd like to increase activity in.

The amount of XP given for each message is calculated by the following formula (where `XPAmount` is selected randomly
based on your [configuration values](#configuration)):\
`XP = XPAmount * ChannelMultiplicator * RoleMultiplicator`, rounded to the nearest integer.\
This means that messages without any multiplicators will receive only the `XPAmount` xp, as both the
`ChannelMultiplicator` and `RoleMultiplicator` are 1.

To configure role multiplicators, open your [configuration](#configuration) and add an element to the "XP Multiplication
Roles" field. There, select the role you want to assign a multiplicator in the first field to and enter the
multiplicator factor in the second field. If a user has any of the configured roles, their `RoleMuliplicator` factor
will increase.
If a user has more than one of the roles configured in this field, the factors
of every role will be multiplied together. Because of this, we recommend to avoid setups were users have multiple multiplication
roles.

The role multiplicators of any given user can be viewed using the [`/profile`](#commands) command.

In addition to the role multiplier, you can also configure a channel multiplier. To do this, open
your [configuration](#configuration) and add
an element to the "XP Multiplication Channels" field.
There, select the channel you want to assign a multiplicator in the first field to and enter the
multiplicator factor in the second field. If a user sends a message in a channel with a configured multiplication
factor, the `ChannelMultiplicator` factor will be set to the configured factor.

> **Example 1** : A user has one role that has been configured with factor $5$. No channel multipliers apply. Their XP
> value for this message is 50,
> but because of the factor five role, $250$ XP ($= 50 * 5 * 1$) will be given.\
> **Example 2**: Another has three roles, each configured with the factors $5$, $2$ and $3$ respectively. No channel
> multipliers apply. Their XP value for their message is also 50,
> but because of the total factor of ($5 * 2 * 3 = 30$), $1,500$ XP ($= 50 * 30 * 1$) will be given.\
> **Example 3**: A third user has one role that has been configured with the factor $1.5$. A channel multiplier of $1.9$
> applies. Their XP value for this message is 50,
> but because of the role factor $1.5$ and the channel factor $1.9$, $143$ ($50 * 1.5 * 1.9 = 142,5$, rounded to $143$) XP will be given.

You can enter any floating point decimal that you want, but as you can see from these examples, using values between $1$
and $2$ yield the best results as these do not drastically increase the XP amount compared to numbers above $2$. Setups
like this also work nicely if you have users with multiple multiplication roles.

To discourage specific roles or channels from chatting (such as a spam channel), consider entering a value below $1$ as
a multiplier, which will decrease the amount of XP given. For example, if a channel hsa a multiplicator factor of $0.5$
users will only receive half as much XP there as in other channels. You can also [configure](#configuration) channels or
categories that should be excluded from leveling completely.

### Manage user XP and levels on your server {#manage-levels}

:::info before you can do this
These commands are only available on your server if you enable the "Cheats"
option [in your configuration](#configuration). We recommend keeping this option disabled, as this creates a fairer
leveling system without admin interference.
:::

* Administrators on your server can reset the XP of a given user or the whole server using the [
  `/manage-levels reset-xp`](#commands) command.
* Administrators on your server can manually add, remove or set the level of any user using the [
  `/manage-levels edit-level`](#commands) command.
* Administrators on your servers can manually add, remove or set the XP of any user using
  the [`/manage-levels edit-xp`](#commands) command.

We suggest keeping interference with the level system to a minimum. If users notice discrepancies in XP values of
administrators, they might accuse your server of being rigged and move to servers were they trust the leveling system.
Because of this, we recommend [configuring](#configuration) your level system in a way, in which staff-only channels are
excluded from leveling and keeping the cheats option disabled, to prevent Administrators from tampering with your level
system (and by extension, the trust of your community).

## Commands {#commands}

<SlashCommandExplanation />

### User commands {#commands-user}

These commands can be used by users on your server.

| Command                            | Description                                                                                                                                                                    |                                                                                                                                                               
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/profile `                        | Display your profile, including how much XP and levels you have and your role multipliers (if any).                                                                            |
| `/profile [user:<User>]`           | Display the profile of a user, including their XP and levels the user and their role multipliers (if any).                                                                     |
| `/leaderboard [sort-by:<Boolean>]` | Display the leaderboard of the server, sorted by into groups by either XP or levels, based on either [your configuration](#configuration) or the `sort-by` parameter provided. |

### Administrator commands {#commands-administrator}

These commands can only be used by administrators on your server if the "Cheats" [configuration option](#configuration)
is enabled.

| Command                                                       | Description                                                                    |
|---------------------------------------------------------------|--------------------------------------------------------------------------------|
| `/manage-levels reset-xp [confirm:<Boolean>]`                 | Resets the XP on the whole server, if the `confirm` parameter is being passed. |
| `/manage-levels reset-xp user:<User> [confirm:<Boolean>]`     | Resets the XP of a user, if the `confirm` parameter is being passed.           |
| `/manage-levels edit-level add user:<User> value:<Value> `    | Adds a number of levels (`value`) to the levels of a user.                     |
| `/manage-levels edit-level remove user:<User> value:<Value> ` | Removes a number of levels (`value`) from the levels of a user.                |
| `/manage-levels edit-level set user:<User> value:<Value> `    | Sets the number of levels (`value`) for of a user.                             |
| `/manage-levels edit-xp add user:<User> value:<Value>`        | Adds a number of XP (`value`) to the XP of a user.                             |
| `/manage-levels edit-xp remove user:<User> value:<Value>`     | Remove a number of XP (`value`) from the XP of a user.                         |
| `/manage-levels edit-xp set user:<User> value:<Value>`        | Sets the number of XP (`value`) a user has.                                    |

## Configuration {#configuration}

As all modules on SCNX, our leveling modules allows you to fully customize its behavior. To allow easier configuration,
we have split up the configuration into multiple files:

* [Main Module Configuration](#configuration-config), where you can configure XP amounts, level curves, level rewards,
  and much more.
* [Message Configuration](#configuration-strings), where you can adjust messages and module appearance.
* [Random  level up messages](#configuration-random-levelup-messages), where you can add messages that will be randomly
  chosen from when the user levels ab.
* [Selected level up messages](#configuration-special-levelup-messages), where you can overwrite the level up message
  for specific levels.

### Module Configuration {#configuration-config}

In this configuration file, you can configure how much XP users should be receiving when sending messages and how your
level system should behave. You
can [open this file in your dashboard](https://scnx.app/glink?page=bot/configuration?file=levels|configs/config).

| Field                                                         | Description                                                                                                                                                                                                                                                                                                 |                                                                                                                                                 
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| XP given at least for messages                                | This amount of XP will be given at least for each message sent.                                                                                                                                                                                                                                             |
| XP given at most for messages                                 | This amount of XP will be given at most for each message sent.                                                                                                                                                                                                                                              |
| XP given per voice minute                                     | How many XP will be given to users per minute when they are in a voice channel with other members. Supports floating point values. More information in the [Voice XP](#voice-xp) section.                                                                                                                   |
| Cooldown                                                      | In milliseconds, how much cooldown will there be between each XP given to users for sending messages. This is usefully to avoid rewarding users from spamming.                                                                                                                                              |
| Type of level curve                                           | The level curve that should be used for your level system. More information in the [level curve](#level-curves) section.                                                                                                                                                                                    |
| Custom Level Formula (if enabled)                             | Your custom leveling formula. More information in the [custom level formula](#custom-level-curve) section.                                                                                                                                                                                                  |
| Which Level Up Messages should get sent?                      | If this is set to "all" all [level messages](#level-up-messages) will be sent. If you set this to the "only-role-rewards" option, level up messages will only be sent if a level up includes a [level reward](#level-rewards). If you set this to "none", no level up mesages will be sent at all.          |
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

In this configuration file, you can configure the message of this module and adjust other module appearance settings.
You
can [open this file in your dashboard](https://scnx.app/glink?page=bot/configuration?file=levels|configs/strings).

| Field                          | Description                                                                                                                                                                                                                                                              |                                                                                                                                                 
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| User not found                 | This messages gets send if someone tries checking a profile of a user when that user has never sent a message and doesn't have a profile yet.                                                                                                                            |
| Embed                          | This configuration option adjust how the [`/profile`](#commands) command should look like. You are able to change the embed field values, the embed color and more.                                                                                                      |
| Leaderboard Embed              | This configuration option adjust how the [`/leaderboard`](#commands) command should look like. You are able to adjust embed field values, the embed color and more.                                                                                                      |
| Level-Up message               | This will be the [level up message](#level-up-messages) when a user levels up to a level without a level role reward. Please note that this setting won't be used if you enable the "Random messages" in the [configuration](#configuration-config).                     |
| Level-Up message with reward   | This will be the [level up message](#level-up-messages) when a user levels up to a level with a level role reward that the user receives. Please note that this setting won't be used if you enable the "Random messages" in the [configuration](#configuration-config). |
| Live leaderboard embed         | This configuration option adjusts how the [live leaderboard embed](#live-leaderboard) should appear to users. You can adjust embed values, the embed color and more.                                                                                                     |
| Live leaderboard button answer | Below the [live leaderboard](#live-leaderboard) a button will be added that allows users to check their own level and XP. This configuration option allows you to adjust the response of the bot when the button gets used.                                              |

### Random level up messages configuration {#configuration-random-levelup-messages}

In this configuration file, you can add [level-up messages](#level-up-messages) that one will be selected randomly from
if you have enabled the "Random message" configuration in your [configuration](#configuration-config). Every
configuration option represents a message that can be selected randomly. You
can [open this file in your dashboard](https://scnx.app/glink?page=bot/configuration?file=levels|configs/random-levelup-messages).

| Field   | Description                                                                                                                                                                                                                                                                                                     |                                                                                                                                                 
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Type    | This will configure when this message may be selected randomly. If set to `normal` it can be used for level ups without role rewards associated with the level. If set to `with-reward`, the message will only be used when a level has a role reward (this will also allow the use of the `%role%` parameter). |
| Message | This message will be used if this configuration object has been selected randomly.                                                                                                                                                                                                                              |

### Selected level up messages configuration {#configuration-special-levelup-messages}

In this configuration file, you can overwrite the [level-up messages](#level-up-messages) for specific levels. You
can [open this file in your dashboard](https://scnx.app/glink?page=bot/configuration?file=levels|configs/random-levelup-messages).

| Field   | Description                                                       |                                                                                                                                                 
|---------|-------------------------------------------------------------------|
| Level   | Level that the message should get overwritten for.                |
| Message | This message will be sent when the configured level gets reached. |

## Troubleshooting {#troubleshooting}

<details>
<summary>My users are leveling up to slowly / to fast.</summary>

How many XP users are receiving depends on [configuration](#configuration), and at which points they level up
can be adjusted with a [level curve](#level-curves). Please adjust these options to meet your needs. After changing a
level curve, users might level up faster / slower initially - to fix this,
consider [resetting your leveling system](#manage-levels).
</details>

<details>
<summary>Level up messages are not being sent.</summary>

To send level up messages, the bot requires the "Send messages" permission in the channel the level up message should be
sent into. For most cases, the bot requires this permission to every channel XP will be granted in (unless
you [configure](#configuration) a separate level up channel). If you are using [level up rewards](#level-rewards), the
bot also requires the "Manage role" permissions and the highest role of the bot should be above the role the bot should
assign as a reward.
</details>

<details>
<summary>My users do not receive XP.</summary>

To give users XP for being in a voice channel and for sending messages, make sure that the bot has the "View channel",
"Read message history" and "Connect to voice channel" permission on every channel XP should be given for. Otherwise, no
XP can be given as the bot can't see the message / voice channel.
</details>

<details>
<summary>My live leaderboard is not being sent correctly.</summary>

The [live leaderboard](#live-leaderboard) can only be sent if the bot has the "View channel", "View message history"
and "Send messages" permission on the configured leaderboard channel. The channel also has to be empty of the live leaderboard embed to be sent and kept up to date.
</details>

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