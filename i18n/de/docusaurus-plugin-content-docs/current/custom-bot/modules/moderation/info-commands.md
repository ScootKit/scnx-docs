# Info-Befehle

Fügt Befehle mit Informationen über bestimmte Bereiche deines Server hinzu

<ModuleOverview moduleName="info-commands" />

## Funktionen {#features}

* Fügt [verschiedene Befehle](#commands) hinzu, wodurch du Informationen über deinen Server, Kanäle, Nutzer und Rollen erhalten kannst.
* 
* All channel types, including stage channels and threads are supported by the [`/info channel`](#commands) command.
* Member statistics, guild features and more are supported by [`/info server`](#commands) command.
* [`/info role`](#commands) can show members that have a role, permissions and role information.
* Use the [`/info user`](#commands) command to view information about users, including support for
  the [Birthday Module](/docs/custom-bot/modules/community/birthday), [Level System](/docs/custom-bot/modules/community/levels), [Invite Tracking Module](/docs/custom-bot/modules/moderation/invite-tracking)
  and more.

## Setup {#setup}

After enabling the module, the [slash commands](#commands) can be used on your server. You can customize the command
answers in the [configuration](#configuration), but no additional setup is required.

## Usage {#usage}

Users and administrators can use any of the [slash-commands](#commands) to view information. Here's a short overview:

* Use [`/info user`](#commands) to view information about a member of the server.
* Use [`/info role`](#commands) to view information about a role on the server.
* Use the [`/info channel`](#commands) to view information about a channel or thread on the server.
* Use [`/info server`](#commands) to view information about the server.

## Commands {#commands}

<SlashCommandExplanation />

| Command                             | Description                                                                                                                                               |                                                                                                                                                               
|-------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/info server`                      | Shows information about the server.                                                                                                                       |
| `/info channel [channel:<Channel>]` | Shows information about a channel. If no value has been set in the "channel" parameter field, the current channel will be used.                           |
| `/info role role:<Role>`            | Shows information about the role selected in the "role" parameter field.                                                                                  |
| `/info user [user:<User>]`          | Shows information about a user on the server. If no value has been set in the "user" parameter field, information about the executing user will be shown. |

## Configuration {#configuration}

This module allows basic configuration of some visible field names in
its [configuration file](https://scnx.app/glink?page=bot/configuration?file=info-commands|strings).

| Field             | Description                                                                                                  |                                                                                                                                                
|-------------------|--------------------------------------------------------------------------------------------------------------|
| serverinfo        | This field allows the customization of names used in the output of the [`/info server`](#commands) command.  |
| userinfo          | This field allows the customization of names used in the output of the [`/info user`](#commands) command.    |
| channelInfo       | This field allows the customization of names used in the output of the [`/info channel`](#commands) command. |
| roleInfo          | This field allows the customization of names used in the output of the [`/info role`](#commands) command.    |
| user_not_found    | This error message will be shown if a user has been selected that has not been found.                        |
| channel_not_found | This error message will be shown if a user selected a channel that has not been found.                       |
| role_not_found    | This error message will be shown if a user selected a role that has not been found.                          |

## Troubleshooting {#troubleshooting}

If an error is being shown when running a command, please make sure all fields of
your [configuration file](#configuration) has been set.
