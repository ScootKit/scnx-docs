import LevelSimulator from '/src/components/LevelSimulator';

# Level-System

Easy to use levelling system with a lot of customization!

<ModuleOverview moduleName="levels" />

## Features {#features}

* Grant a random amount of XP to users for messages they send with configurable amounts and cooldown.
* Grant XP based on the amount of time a user spends in a voice channel.
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

### Level simulator {#level-simulator}

The amount of XP a user needs to reach a specific level is dependent on [your level curve](#level-curves) and
your [leveling configuration](#configuration). To make it easier to select the right level curve (or
even [design your own](#custom-level-curve)), we have included a Level-Simulator below. Simply enter the values
from [your configuration](#configuration) to see how much XP is needed to reach a specific message and how many messages
an average user needs to do so.

<LevelSimulator />

### Level curves {#level-curves}

A leveling curve is used to calculate the amount of XP needed to reach a specific level on your server. You can think of
it as a formula that is used to calculate this XP amount. Your choice of a level curve greatly affects, in addition to your [leveling configuration](#configuration), how hard it is for
users to level up on your server.

We include three different leveling curves in the bot, but you can also [provide your own](#custom-level-curve).

### Custom level curve {#custom-level-curve}

### Multiplicator channels and roles {#multiplicators}

### Level rewards {#level-rewards}

### Live leaderboard {#live-leaderboard}

### Level messages {#level-up-messages}

### Manage user XP and levels on your server {#manage-levels}

## Commands {#commands}

<SlashCommandExplanation />

| Command             | Description                |                                                                                                                                                               
|---------------------|----------------------------|
| *Command-Name here* | *Command description here* |

## Configuration {#configuration}

### Configuration file 1 {#configuration-technicalConfigName}

Explain what users can configure in this file and include a [GLink](https://scnx.app/user/tools?page=glink-generator) to
the SCNX Dashboard to open this file.
Please make sure that you replace the heading id with the correct file-name.

| Field        | Description                                                 |                                                                                                                                                 
|--------------|-------------------------------------------------------------|
| *Field-Name* | Describe what this field does - be as detailed as possible. |

### Configuration file 2 {#configuration-technicalConfigName}

Explain what users can configure in this file and include a [GLink](https://scnx.app/user/tools?page=glink-generator) to
the SCNX Dashboard to open this file.
Please make sure that you replace the heading id with the correct file-name.

| Field        | Description                                                 |                                                                                                                                                 
|--------------|-------------------------------------------------------------|
| *Field-Name* | Describe what this field does - be as detailed as possible. |

### Configuration file 3 {#configuration-technicalConfigName}

Explain what users can configure in this file and include a [GLink](https://scnx.app/user/tools?page=glink-generator) to
the SCNX Dashboard to open this file.
Please make sure that you replace the heading id with the correct file-name.

| Field        | Description                                                 |                                                                                                                                                 
|--------------|-------------------------------------------------------------|
| *Field-Name* | Describe what this field does - be as detailed as possible. |

### Configuration file 4 {#configuration-technicalConfigName}

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