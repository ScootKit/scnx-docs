# AFK-System

Allow users to set their AFK-Status and notify other users if they try to reach them.

<ModuleOverview moduleName="afk-system" />

## Features {#features}

* Users can start an AFK-Session using [`/afk start`](#commands), optionally specifying a reason for their absence.
* When a user pings members that are currently AFK, the bot will send a message informing them that the pinged user is
  unavailable.
* AFK sessions end automatically when the AFK user writes a message in any channel on your server (unless they disable
  this feature when starting an AFK session).
* AFK sessions can also be stopped with [`/afk end`](#commands).
* During AFK sessions, the bot will add `[AFK]` as a prefix to the nickname of the user.
* AFK notification messages [can be customized](#configuration).

## Setup {#setup}

1. Make sure the bot has "View channel", "Read messages" and "Send messages" permissions in every channel the bot should
   respond to mentions of users that are AFK.
2. Make sure the bot has permissions to manage the nickname of other members on your server.
3. Enable the module - users can now start AFK sessions.
4. Optionally, [customize the notification messages](#configuration).

## Usage {#usage}

Users can start an AFK-Session using [`/afk start`](#commands), optionally specifying a reason for their absence and
toggling automatic AFK session end. When starting the AFK session, the bot will prefix the nickname of the user
with `[AFK]` and save the current nickname of the user. Whenever a member with an active AFK session gets pinged (
either as a @mention or
as a reply), the bot will send a notification message informing the user that the pinged member is currently
unavailable.
If the AFK user sends a new message on your Discord (if not disabled) or uses [`/afk end`](#commands), the AFK session
will end and the bot won't comment on new pings of the user.
When the AFK session ends, the bot will revert the nickname of the user to the original value.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                     | Description                                                                                                                                                                                                                                              |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/afk start [reason:<Reason for AFK>] [auto-end:<Boolean>]` | This command starts a new AFK session. Optionally, users can enter the reason for their absence in the `reason` parameter. They can also disable the automatic end of their AFK session with the `auto-end` parameter. `auto-end` is enabled by default. |
| `/afk end`                                                  | Ends a currently running AFK session. If no AFK session is running, an error will be shown.                                                                                                                                                              |

## Configuration {#configuration}

Customize notification and command response messages with
the [module configuration file](https://scnx.app/glink?page=bot/configuration?query=afk&file=afk-system|config).

| Field                            | Description                                                                                                                                                                               |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AFK-Session ended successfully   | This message will be visible to a user when they end their AFK-Session with [`/afk end`](#commands).                                                                                      |
| AFK-Session started successfully | This message will be visible to a user when they start a new AFK-Session with [`/afk start`](#commands).                                                                                  |
| User is AFK with reason          | This message will get sent if a member gets mentioned who is currently AFK and has specified a reason for their absence when starting their AFK session.                                  |
| User is AFK without reason       | This message will get sent if a member gets mentioned who is currently AFK, but hasn't specified a reason for their absence when starting their AFK session.                              |
| AFK Session ended automatically  | This message will get sent if a member who is currently AFK and hasn't disabled the automatic ending of their AFK session sends a message on the server. This will end their AFK session. |

## Troubleshooting {#troubleshooting}

* If the bot isn't changing your nickname, please make sure you not the owner of the Discord server. The bot can't edit
  the nickname of the server owner, even if the bot has a role higher than the owner. This is a limitation from Discord.
* If the bot isn't sending the AFK message, please make sure that the user has started an AFK session correctly and the
  session hasn't ended yet.
* If the bot isn't ending an AFK session automatically, make sure that you didn't disable `auto-end` when creating the
  session.

## Stored data {#data-usage}

The following data is being stored about every user that has a current AFK session running:

* Their unique Discord User-ID.
* The reason of their absence, set via the `reason` parameter in the [`/afk start`](#commands) command.
* The current nickname of the user when they start the AFK session.
* Whether the AFK session should end automatically, set via the `auto-end` parameter in the [`/afk start`](#commands)
  command.
* Metadata about the entry (date when created and last updated)

All data will be deleted when the AFK session ends. Users can end a session using [`/afk end`](#commands) and active
sessions
end automatically when they post a message on your server (unless they disabled this feature) at creation of the
session.
To end and delete all AFK sessions, [purge the module database](./../../additional-features#reset-module-database).