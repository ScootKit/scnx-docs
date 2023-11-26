# Invite-Tracking

Track who invited who

<ModuleOverview moduleName="invite-tracking" />

:::warning Compliance Information
Using this module to reward users for inviting other users in any way is in violation
of [Discord's Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) and
our [Terms of Service](https://scootk.it/scnx-tos); violations will lead to your server (and your account) being banned
from SCNX. Report abuse to [abuse@scnx.xyz](mailto:abuse@scnx.xyz).
:::

## Features {#features}

* Log new user joins and who invited them and easily remove the invite by clicking a button below the log message.
* Trace the invite activity of a user, including
  * who invited the user.
  * who the user invited.
  * what invites the user has created.
* Easily revoke all invites created by a user.
* Distinguish between active invites and invites where the invited user has already left the server.
* Integrates with the [Info Commands](./info-commands) and [Moderation & Security](./moderation) modules.

## Setup {#setup}

* Make sure your bot has "Manage invites" permissions on your server.
* Enable the module to start tracking invites - you might need to restart your bot to initiate the required hook.
* Please [set up permissions](./../../slash-commands) for [`/trace-invites`](#commands) to avoid unauthorized usage.
* To log new joins and their invitees, [configure](#configuration) a log-channel - make sure the bot has the "Send
  messages" permissions on the channel. Please note that users with the "Manage invites" permission on your server will
  be able to revoke invites by clicking on the "Remove this invite" button below the log entry message.

## Usage {#usage}

* If [configured](#configuration), the bot will log who invited the new user when they join in the log channel.
* The bot will automatically store invite data about every user that joins your server.
* To get invite activity (who invited the user, who the user invited, invites created, …) of a user, run
  the [`/trace-invites`](#commands) Slash-Command.
* To revoke all invites of a user, run the [`/trace-invites`](#commands) Slash-Command and click on "Remove all invites
  by this user" button below the message.
* If this module is enabled, other modules (such as [Moderation & Security](./moderation)
  and [Info Commands](./info-commands)) will use data about tracked invites to improve functionality - this is done
  automatically.

## Commands {#commands}

<SlashCommandExplanation />

| Command                      | Description                                                                                                                                                                                                                                               |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/trace-invites user:<User>` | This commands shows the invite activity of a user. Information includes who invited the user, who the user invited and what invites the user created. Additionally, a button to revoke all invites created by this user will be added below the response. |

## Configuration {#configuration}

Use this configuration file to set up a
Logging-Channel - [open the file in your Dashboard](https://scnx.app/glink?page=bot/configuration?query=invit&file=invite-tracking|config).

| Field       | Description                                                                                                                                                                                                                                    |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Log-Channel | Configure a log channel here. Anytime a user joins or leaves your server, your bot will log what invite the user used. A button to remove the invite will be added below the message (can be used by anyone with "Manage invites" permission). |

## Troubleshooting {#troubleshooting}

If you are experiencing issues with this module, make sure that

* the bot has the "Manage invites" permission on your server.
* you have restarted the bot after enabling this module and after granting "Manage invites" permissions.
* the bot has the "Send messages" and "Embed links" permissions in the [configured](#configuration) Log-Channel.
* you are not requesting information about a user that joined via an untracked invite - the bot is only able to store
  data about users that joined AFTER the module was enabled.

## Stored data {#data-usage}

When a user joins your server and the module is enabled, the following data will be stored:

* An unique integer identifying the database entry.
* The ID of the user who joined.
* Whether the user has left the server in the meanwhile.
* The code of the invite used.
* The type of the invite (e.g: Vanity-Invite).
* The ID of the user who created the invite used.
* Metadata about the entry (date when created and last updated).

When a user leaves your server, the invite entry will be marked as "inactive", but won't be deleted.

To avoid manipulation of data, this stored data can't be deleted on case-by-case basis. Instead, you
can [purge the module database](./../../additional-features#reset-module-database) to delete all data stored about
invites.