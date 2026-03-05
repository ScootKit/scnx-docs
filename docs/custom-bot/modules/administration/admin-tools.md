# Admin-Tools

Simple tools for admins - move channels and roles via commands or copy an emoji from another server to your server.

<ModuleOverview moduleName="admin-tools" />

## Features {#features}

* Move channels and roles via commands.
* Set the category of a channel via commands.
* Import an emoji from another server into your server.
* Assign temporary roles to users that are automatically added or removed after a specified duration.

## Setup {#setup}

1. Please [set up permissions](/docs/custom-bot/slash-commands) for Slash-Commands to avoid unauthorized usage of them.
2. Make sure your bot has the following permissions on your server:
   * To import emojis from another server (`/stealemote`): "Create expressions"
   * To update any channels (all `/admin` commands): "Manage channels"
   * To assign or remove roles (`/roles` commands): "Manage roles" (the bot's role must be above the target roles)

## Usage {#usage}

* To import an emoji from another server, use [`/stealemote`](#commands).
* To view the position of a channel or update it, use [`/admin movechannel`](#commands).
* To view the position of a role or update it, use [`/admin moverole`](#commands).
* To update the category of a channel, use [`/admin setcategory`](#commands).

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                      | Description                                                              |
|--------------------------------------------------------------|--------------------------------------------------------------------------|
| `/admin movechannel channel:<Channel>`                       | Displays the API-Position of the specified channel.                      |
| `/admin movechannel channel:<Channel> new-position:<Number>` | Moves the specified channel to the specified API-Position.               |
| `/admin moverole role:<Role>`                                | Display the API-Position of the specified role.                          |
| `/admin moverole role:<Role> new-position:<Number>`          | Moves the specified role to the specified API-Position.                  |
| `/admin setcategory channel:<Channel> category:<Category> `  | Updates the category of the specified channel to the specified category. |
| `/stealemote emote:<Emoji>`                                  | Copies an emote from another server to your server.                      |
| `/roles give user:<User> role:<Role> [duration:<Duration>]`  | Assigns a role to a user. Optionally specify a duration after which the role will be removed automatically. |
| `/roles remove user:<User> role:<Role> [duration:<Duration>]` | Removes a role from a user. Optionally specify a duration after which the role will be re-added automatically. |
| `/roles status user:<User>`                                  | Shows all pending temporary role changes for a user.                     |

## Troubleshooting {#troubleshooting}

<details>
  <summary>Importing an emoji fails</summary>
  <ul>
    <li>Make sure you select the emoji from the Emoji-Picker instead of typing it out.</li>
    <li>Make sure you <i>only</i> entered the Emoji and nothing more.</li>
    <li>Make sure your bot has the "Create expressions" permission on your server.</li>
  </ul>
</details>

<details>
  <summary>Moving a channel does not work / The bot is moving to the wrong position</summary>
  <ul>
    <li>Make sure your bot has the "Manage channels" permission on your server.</li>
    <li>Discord is restricting some positions. For example, you might be unable to move a voice-channel above a text-channel in a category.</li>
    <li>Make sure you entered the right position. To do this, run the command without the "new-position" option and calculate the new position relative to the current position obtained.</li>
  </ul>
</details>