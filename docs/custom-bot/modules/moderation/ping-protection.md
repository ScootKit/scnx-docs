# Ping-Protection

Protect specific members and roles from unwanted mentions with configurable moderation actions.

<ModuleOverview moduleName="ping-protection" />

## Features {#features}

- Protect specific users and roles from being pinged by unauthorized members.
- Automatically protect all users who have a protected role.
- Whitelist specific users, roles, and channels that are exempt from ping protection.
- Optionally use Discord's native AutoMod to block messages containing protected pings before they are sent.
- Configurable moderation actions (mute or kick) when a user pings protected members too many times.
- View ping history and moderation actions for any user.
- Configurable data retention policies for ping history and moderation logs.
- Track users who leave and rejoin the server.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=ping-protection) on your server.
2. Open the [General Configuration](#configuration-general) and add the users and/or roles you want to protect.
3. Configure any whitelisted users, roles, and/or channels that should be allowed to ping protected roles/members.
4. Optionally you can use Discord's native AutoMod feature to block messages before they are sent. This can be enabled by enabling 'Enable AutoMod' in the configuration.
5. Optionally configure [moderation actions](#configuration-moderation) to automatically punish users who repeatedly ping protected members.
6. Make sure the bot has `View Channel`, `Send Messages`, and `Embed Links` permissions in channels where protected members/roles might be pinged. If using AutoMod, the bot also needs `Manage Server` permission. For moderation actions, the bot needs `Moderate Members` (for mute) and/or `Kick Members` (for kick) - this depends on which actions you enable.

## Usage {#usage}

Once set up, the module works automatically:

- When a user pings a protected member or role, the bot sends a warning message in the channel.
- If AutoMod is enabled, the message is blocked before it is sent, and the user sees a custom block message.
- Pings are recorded in the user's history. If configured moderation thresholds are reached, the bot automatically mutes or kicks the user.

### Viewing ping history and actions {#viewing-history}

* Users can use the `/ping-protection user history` command to view a **user's (or their own) ping history**. Each pinging event is logged (if enabled) with a timestamp, and a link to the message containing the ping.
* Users can use the `/ping-protection user actions-history` command to view a **user's (or their own) moderation actions history**. Each moderation action is logged, and contains the punishment type, the duration (only if the action was a mute), a timestamp and the reason.

### Protected and whitelisted lists {#lists}

Use `/ping-protection list protected` to see all **protected users and roles**.
Use `/ping-protection list whitelisted` to see all **whitelisted users, roles, and channels**.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                             | Description                                                              |
| --------------------------------------------------- | ------------------------------------------------------------------------ |
| `/ping-protection user panel user:<User>`           | Display a management panel for a user with their ping and action counts. |
| `/ping-protection user history user:<User>`         | View the ping history of a specific user.                                |
| `/ping-protection user actions-history user:<User>` | View moderation actions taken against a user.                            |
| `/ping-protection list protected`                   | View all protected users and roles.                                      |
| `/ping-protection list whitelisted`                 | View all whitelisted roles, channels, and users.                         |

## Configuration {#configuration}

### General Configuration {#configuration-general}

In this configuration file, you set up the protection and ping rules, whitelists, automod settings and the warning message. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=ping-protection%7Cconfigs/configuration).

| Field                                 | Description                                                                                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Protected Roles                       | Roles that are protected from pings.                                                                                                                  |
| Protect all users with protected role | If enabled, all users with at least one protected role are protected, even if not listed individually.                                                |
| Protected Users                       | Specific users who are protected from pings.                                                                                                          |
| Ignored Roles                         | Roles that are allowed to ping protected members.                                                                                                     |
| Ignored Channels                      | Channels where pings to protected members are ignored.                                                                                                |
| Ignored Users                         | Specific users whose pings to protected members are ignored.                                                                                          |
| Allow Reply Pings                     | If enabled, replying to a protected user's message (with mention enabled) is allowed.                                                                 |
| Self-Ping Configuration               | What happens when a protected user pings themselves: get punished, ignored, or receive fun easter eggs.                                               |
| Enable AutoMod                        | If enabled, the bot uses Discord's native AutoMod to block messages with pings to protected members.                                                  |
| AutoMod Log Channel                   | Channel where AutoMod alerts are sent. Only applies if AutoMod is enabled.                                                                            |
| AutoMod Block Message                 | The message shown to users when their message is blocked by AutoMod.                                                                                  |
| Ping Warning Message                  | The message sent in the channel when a user pings a protected member. Supports `%target-name%`, `%target-mention%`, `%target-id%`, and `%pinger-id%`. |

### Moderation Actions {#configuration-moderation}

In this configuration file, you set up automatic punishments for repeated pings. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=ping-protection%7Cconfigs/moderation).

You can configure multiple punishment rules, each with its own threshold and action.

| Field                 | Description                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Ping Count            | The number of pings required to trigger this moderation action.                                                                                 |
| Use Custom Timeframe  | If enabled, you can set a custom timeframe in days for this rule.                                                                               |
| Timeframe Days        | The number of days in which the pings must occur to trigger this action. Only applies if custom timeframe is enabled.                           |
| Action Type           | The punishment to apply: mute or kick.                                                                                                          |
| Mute Duration         | How long to mute the user (in minutes). Only applies when the action type is mute.                                                              |
| Enable Action Logging | If enabled, a message is sent in the channel when a moderation action is taken.                                                                 |
| Action Log Message    | The message sent when a user is punished. Supports `%pinger-mention%`, `%pinger-name%`, `%action%`, `%pings%`, `%timeframe%`, and `%duration%`. |

### Data Storage {#configuration-storage}

In this configuration file, you configure data retention policies. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=ping-protection%7Cconfigs/storage).

| Field                                   | Description                                                                                                                  |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Enable Ping History                     | If enabled, the bot keeps a history of pings to enforce moderation actions.                                                  |
| Ping History Retention                  | How long to keep ping history, in weeks (minimum 4, maximum 96).                                                             |
| Delete all ping history after timeframe | If enabled, all ping history for a user is deleted when the retention period expires, instead of only the oldest entries.    |
| Moderation Log Retention                | How long to keep moderation action records, in months (minimum 1, maximum 24).                                               |
| Enable Leaver Data Retention            | If enabled, the bot keeps data about users after they leave the server.                                                      |
| Leaver Retention                        | How long to keep data after a user leaves, in days (minimum 1, maximum 7). Only applies if leaver data retention is enabled. |

## Troubleshooting {#troubleshooting}

- **The bot is not detecting pings**: Make sure the user or role is listed as protected in the configuration. Verify that the pinging user is not whitelisted and the channel is not in the ignored channels list.
- **AutoMod is not blocking messages**: Ensure AutoMod is enabled in the configuration and the bot has `Manage Server` permission to create AutoMod rules.
- **Moderation actions are not being taken**: Check that your moderation action rules are configured correctly and that the ping count threshold has been reached within the configured timeframe.
- **The bot cannot mute or kick a user**: Make sure the bot has the required permissions (`Moderate Members` for mute, `Kick Members` for kick) and that the bot's role is above the target user's roles.

## Stored data {#data-usage}

The following data is being stored by this module:

**For every recorded ping:**

- The user ID of the person who pinged
- The message URL (or "Blocked by AutoMod" if blocked)
- The target user or role ID
- Whether the target is a role or user
- Metadata about the entry (date when created and last updated)

**For every moderation action:**

- The user ID of the punished user
- The action type (mute or kick) and duration
- The reason for the action
- Metadata about the entry (date when created and last updated)

**For users who leave the server:**

- The user ID
- The date they left
- Metadata about the entry (date when created and last updated)

Data is automatically deleted based on the configured retention periods. You can also delete all data for a specific user through the [`/ping-protection user panel`](#commands) command. To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
