# Activity Streaks

Reward users for being active every day, week, or month with an activity score that resets if they become inactive again.

<ModuleOverview moduleName="activity-streak" />

## Features {#features}

- Track user activity streaks based on a configurable period (daily, weekly, or monthly).
- Streaks reset to zero if a user becomes inactive for a full period.
- Automatically assign roles as rewards when users reach specific streak milestones.
- Optionally keep only the highest-tier streak role on each user, removing lower tiers automatically as they advance.
- Optionally display the current streak count in a user's nickname.
- Staff-managed mode allows moderators to manually add and reset streaks instead of automatic tracking.
- Users can restore a lost streak once per loss (if enabled).
- Longest streak is tracked separately and never resets.
- Leaderboard showing the top 20 active streaks on your server.
- Users can opt out of displaying their streak in their nickname.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=activity-streak) on your server.
2. Open the [configuration](#configuration) and select your desired streak period (daily, weekly, or monthly).
3. If you want to use streak role rewards, create the roles on your server and configure them in the "Streak Roles" field.
4. If you want the streak count to appear in nicknames, enable the "Show streak in nickname" option. Make sure the bot has the `Manage Nicknames` permission.
5. If you want to use staff-managed mode instead of automatic tracking, enable it and configure the staff roles.

## Usage {#usage}

- In automatic mode, the bot tracks user activity based on messages sent. When a user sends a message during a new period, their streak is incremented. If they miss an entire period, their streak resets to zero.
- In staff-managed mode, staff members use [`/streak add`](#commands) to manually add streak points to users.
- Users can view their current and longest streak using [`/streak view`](#commands).
- If streak restoration is enabled, users who lost their streak can use [`/streak restore`](#commands) to recover it once.
- When a user reaches a streak count that matches a configured role reward, the role is automatically assigned.

## Commands {#commands}

<SlashCommandExplanation />

| Command                         | Description                                                                                                                                                                                        |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/streak view [user:<User>]`    | View your own or another user's current and longest streak.                                                                                                                                        |
| `/streak add user:<User>`       | Manually add a streak point to a user. Only available in staff-managed mode. Requires a configured staff role.                                                                                     |
| `/streak remove user:<User>`    | Subtract one from a user's streak count. Useful for correcting mistakes without fully resetting. Only available in staff-managed mode. Requires a configured staff role.                           |
| `/streak reset user:<User>`     | Fully reset a user's streak, clearing both the current streak and any saved backup, and removing all streak-related roles. Only available in staff-managed mode. Requires a configured staff role. |
| `/streak restore [user:<User>]` | Restore a previously lost streak. Only available if streak restoration is enabled. Can only be used once per streak loss.                                                                          |
| `/streak leaderboard`           | Show the top 20 active streaks on the server. Available in both staff-managed and automatic modes.                                                                                                 |
| `/streak hide`                  | Toggle whether your streak is displayed in your nickname. Only available when nickname display is enabled and the "Allow users to hide streak from nickname?" option is turned on.                 |

## Configuration {#configuration}

In this configuration file, you can configure the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=activity-streak%7Cconfigs/config).

| Field                                     | Description                                                                                                                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Streak Period                             | How often users must be active to maintain their streak: daily, weekly, or monthly.                                                                                                               |
| Staff Managed                             | If enabled, streaks are managed manually by staff instead of being tracked automatically from messages.                                                                                           |
| Staff Roles                               | Roles that are allowed to manage streaks using the add and reset commands. Only applies when staff-managed mode is enabled.                                                                       |
| Show streak in nickname                   | If enabled, the bot appends the user's current streak count to their nickname.                                                                                                                    |
| Allow users to hide streak from nickname? | If enabled, users can use `/streak hide` to toggle whether their streak is shown in their nickname. Only available when "Show streak in nickname" is enabled.                                     |
| Streak Roles                              | Role rewards for reaching specific streak milestones. The key is the streak count and the value is the role to assign.                                                                            |
| Only keep highest streak role             | If enabled, lower streak roles are automatically removed when a user reaches a higher streak threshold, so each user only keeps the role for their current tier. If disabled, streak roles stack. |
| Streak View Message                       | Customize the embed displayed when viewing a streak.                                                                                                                                              |
| Ignored Channels                          | Channels where messages do not count toward streaks.                                                                                                                                              |
| Ignored Roles                             | Roles whose members' messages do not count toward streaks.                                                                                                                                        |
| Enable Restore                            | If enabled, users can restore a lost streak once per loss.                                                                                                                                        |
| Restore Roles                             | Roles that are allowed to use the restore command. If empty, all users can restore.                                                                                                               |

## Troubleshooting {#troubleshooting}

<details>
  <summary>Streaks are not being tracked</summary>
  <ul>
    <li>Make sure staff-managed mode is disabled if you want automatic tracking.</li>
    <li>Verify that the user is not posting in an ignored channel or does not have an ignored role.</li>
    <li>Streak updates are checked once per period - a user only needs to send one message per period.</li>
  </ul>
</details>

<details>
  <summary>Nickname is not updating with streak count</summary>
  <ul>
    <li>Make sure "Show streak in nickname" is enabled in the configuration.</li>
    <li>Ensure the bot has the <code>Manage Nicknames</code> permission.</li>
    <li>The bot cannot change the nickname of the server owner due to Discord limitations.</li>
  </ul>
</details>

<details>
  <summary>Streak roles are not being assigned</summary>
  <ul>
    <li>Verify the streak role rewards are correctly configured with the right streak count and role.</li>
    <li>Ensure the bot has the <code>Manage Roles</code> permission and its role is positioned above the reward roles.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every user with an active or previous streak:

- The Discord User ID
- The current streak count and longest streak count
- The last activity date, week, or month (depending on the configured period)
- The previous streak count (for restoration purposes)
- The timestamp of the last restoration
- Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
