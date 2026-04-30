# Birthday-Calendar

Let users set their birthday and congratulate them when they have a birthday.

<ModuleOverview moduleName="birthday" />

## Features {#features}

- Users can register their birthday (day, month, and optionally year) using a slash command.
- An auto-updating birthday embed displays all registered birthdays organized by month, with a "Set Birthday" button for easy registration.
- The bot automatically sends birthday congratulation messages every day at midnight.
- Optionally assign a birthday role to users on their birthday (removed automatically the next day).
- If a user provides their birth year, the congratulation message can include their age.
- Optional pre-birthday notifications posted in the birthday channel a configurable number of days before a user's birthday. Multiple lead times can be configured (e.g. both 7 days and 1 day before).
- `/birthday upcoming` lets any member preview the next N days of upcoming birthdays without browsing the embed.
- Birthday data is automatically removed when a member leaves the server.
- Optional admin birthday management: admins can set, remove, lock, and unlock user birthdays.

## Setup {#setup}

1. Create a channel where the birthday embed and congratulation messages will be sent, and configure it in the [module configuration](#configuration).
2. Make sure the bot has `View Channel`, `Send Messages`, `Embed Links`, and `Manage Messages` permissions in the birthday channel.
3. If you want to use the birthday role feature, create a role and configure it in the [module configuration](#configuration). Ensure the bot's role is positioned above the birthday role in the role hierarchy.

## Usage {#usage}

Users can interact with the birthday module using the following commands:

- Use `/birthday set` to register their birthday, or click the "Set Birthday" button on the birthday embed. The year is optional -- if provided, the bot will display their age on their birthday.
- Use `/birthday status` to view their currently registered birthday.
- Use `/birthday delete` to remove their birthday from the calendar.
- Use `/birthday upcoming` to view birthdays coming up in the next N days. The default look-ahead range is configured in the [configuration](#configuration); members can override it with the optional `days` argument.

### Admin birthday management {#admin-management}

If enabled in the [configuration](#configuration), admins can use the `/manage-birthday` command to manage user birthdays:

- **Set** a user's birthday.
- **Remove** a user's birthday.
- **Lock** a birthday - prevents the user from editing or deleting it themselves.
- **Unlock** a previously locked birthday.

Locked birthdays show a lock indicator when users view their own birthday status.

### Automatic birthday checks

Every day at midnight, the bot checks for birthdays and:

1. Sends a congratulation message for each user whose birthday is today.
2. Assigns the configured birthday role (if set) and removes it from users whose birthday has passed.
3. Updates the birthday embed with the latest data.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                                           | Description                                                                                                                                                                            |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/birthday set day:<Integer> month:<Integer> [year:<Integer>]`                    | Register your birthday. Day and month are required. The year is optional but allows the bot to display your age. Users under 13 cannot register a birth year (Discord ToS compliance). |
| `/birthday status`                                                                | View your currently registered birthday and age (if birth year was provided).                                                                                                          |
| `/birthday delete`                                                                | Remove your birthday from the calendar.                                                                                                                                                |
| `/birthday upcoming [days:<Integer>]`                                             | List upcoming birthdays in the next `days` days (defaults to the value configured in the [Commands](#configuration) tab).                                                              |
| `/manage-birthday set user:<User> day:<Integer> month:<Integer> [year:<Integer>]` | Set a user's birthday. Requires admin birthday management to be enabled.                                                                                                               |
| `/manage-birthday remove user:<User>`                                             | Remove a user's birthday. Requires admin birthday management to be enabled.                                                                                                            |
| `/manage-birthday lock user:<User>`                                               | Lock a user's birthday, preventing them from editing or deleting it. Requires admin birthday management to be enabled.                                                                 |
| `/manage-birthday unlock user:<User>`                                             | Unlock a previously locked birthday. Requires admin birthday management to be enabled.                                                                                                 |

## Configuration {#configuration}

In this configuration file, you can configure the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=birthday%7Cconfig).

The configuration is organized into tabs in the dashboard - the rows below are grouped by tab.

### General

| Field                           | Description                                                                                                                                                                                        |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Birthday-Channel                | Channel where the birthday embed and congratulation messages (if not overwritten) will be sent.                                                                                                    |
| (optional) Notification-Channel | Optional separate channel for birthday congratulation messages. If empty, the birthday channel is used. Unlike the birthday channel, old messages are not automatically removed from this channel. |
| Birthday-Embed enabled          | If enabled, an auto-updating embed listing all birthdays by month will be sent in the birthday channel.                                                                                            |
| Birthday-Role                   | A role that is assigned to users on their birthday and removed the next day. Leave empty to disable.                                                                                               |
| Disable year input              | If enabled, users cannot enter a birth year. Existing years will not be displayed and age will not be shown in birthday messages or the embed.                                                     |

### Birthday Embed

| Field                       | Description                                                                                                                                                          |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Birthday-Embed              | Customize the appearance (title, description, color, thumbnail, image) of the birthday embed.                                                                        |
| Set Birthday Button Label   | The label for the "Set Birthday" button on the birthday embed. Clear this field to hide the button entirely.                                                         |
| User Display Mode           | How users are displayed in the birthday embed. Options: Mention (clickable @mention), Tag (username), or Nickname (server nickname).                                 |
| Use Components V2 Layout    | If enabled, the birthday embed is rendered using Discord's Components V2 system instead of a classic embed.                                                          |
| Clear User Messages Daily   | If enabled, the bot deletes messages from other users in the birthday channel every day to keep it clean.                                                            |

### Messages

| Field                          | Description                                                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Birthday Message               | The congratulation message sent when a user has a birthday but did not provide their birth year.                             |
| Birthday message with age      | The congratulation message sent when a user has a birthday and provided their birth year, including their age.               |
| "Successfully changed"-Message | The message shown when a user successfully registers or updates their birthday.                                              |

### Pre-Birthday Notifications

| Field                                     | Description                                                                                                                                                                                                                |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable pre-birthday notifications?        | If enabled, the bot posts a notification in the birthday channel a configurable number of days before each user's birthday.                                                                                                |
| Pre-birthday lead times (days)            | _Only visible if pre-birthday notifications are enabled._ List of lead times (in days) before a birthday at which to post a notification. For example, `[1, 7]` sends a notification both 7 days and 1 day before the birthday. |
| Pre-birthday message                      | _Only visible if pre-birthday notifications are enabled._ The pre-birthday message sent for users who did not provide a birth year. The `%days%` placeholder gives the number of days remaining.                           |
| Pre-birthday message with age             | _Only visible if pre-birthday notifications are enabled._ The pre-birthday message sent for users who did provide a birth year. Supports the `%age%` placeholder for the age the user will turn.                           |

### Commands

| Field                                  | Description                                                                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable admin birthday management?      | If enabled, the `/manage-birthday` command becomes available for server admins to set, remove, lock, and unlock user birthdays.                   |
| /birthday upcoming default range (days) | Default number of days the `/birthday upcoming` subcommand will look ahead if the user does not specify a range. Defaults to 30.                  |

## Troubleshooting {#troubleshooting}

<details>
  <summary>The birthday embed is not showing up</summary>
  <ul>
    <li>Make sure the configured birthday channel exists and the bot has <code>View Channel</code>, <code>Send Messages</code>, and <code>Embed Links</code> permissions.</li>
    <li>Ensure that "Birthday-Embed enabled" is turned on in the configuration.</li>
  </ul>
</details>

<details>
  <summary>Birthday roles are not being assigned or removed</summary>
  <ul>
    <li>Make sure a birthday role is configured in the module configuration.</li>
    <li>Ensure the bot's role is positioned above the birthday role in the server's role hierarchy.</li>
    <li>Verify the bot has the <code>Manage Roles</code> permission.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every registered birthday:

- The Discord User ID of the member
- The birthday day and month
- The birth year (if provided by the user)
- Whether the birthday is locked (if admin management is enabled)
- Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
