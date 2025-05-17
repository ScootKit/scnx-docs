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

*Explain how to set up levels - make sure to mention all the steps needed*

## Usage {#usage}

*Explain how admins and users can use levels*

### Level simulator {#level-simulator}
<LevelSimulator />

### Level curves {#level-curves}

### Custom level curve {#custom-level-curve}

### Multiplicator channels and roles {#multiplicators}

### Level rewards {#level-rewards}

### Live leaderboard {#live-leaderboard}

### Level messages {#level-up-messages}

### Manage user XP and levels on your server {#manage-levels}

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