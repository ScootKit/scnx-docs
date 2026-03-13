# Birthday-Calendar

Let users set their birthday and congratulate them when they have a birthday.

<ModuleOverview moduleName="birthday" />

## Features {#features}

* Users can register their birthday (day, month, and optionally year) using a slash command.
* An auto-updating birthday embed displays all registered birthdays organized by month.
* The bot automatically sends birthday congratulation messages every day at midnight.
* Optionally assign a birthday role to users on their birthday (removed automatically the next day).
* If a user provides their birth year, the congratulation message can include their age.
* Birthday data is automatically removed when a member leaves the server.
* Optional admin birthday management: admins can set, remove, lock, and unlock user birthdays.

## Setup {#setup}

1. Create a channel where the birthday embed and congratulation messages will be sent, and configure it in the [module configuration](#configuration).
2. Make sure the bot has `View Channel`, `Send Messages`, `Embed Links`, and `Manage Messages` permissions in the birthday channel.
3. If you want to use the birthday role feature, create a role and configure it in the [module configuration](#configuration). Ensure the bot's role is positioned above the birthday role in the role hierarchy.

## Usage {#usage}

Users can interact with the birthday module using the following commands:

* Use `/birthday set` to register their birthday. The year is optional -- if provided, the bot will display their age on their birthday.
* Use `/birthday status` to view their currently registered birthday.
* Use `/birthday delete` to remove their birthday from the calendar.

### Admin birthday management {#admin-management}

If enabled in the [configuration](#configuration), admins can use the `/manage-birthday` command to manage user birthdays:

* **Set** a user's birthday.
* **Remove** a user's birthday.
* **Lock** a birthday — prevents the user from editing or deleting it themselves.
* **Unlock** a previously locked birthday.

Locked birthdays show a lock indicator when users view their own birthday status.

### Automatic birthday checks

Every day at midnight, the bot checks for birthdays and:
1. Sends a congratulation message for each user whose birthday is today.
2. Assigns the configured birthday role (if set) and removes it from users whose birthday has passed.
3. Updates the birthday embed with the latest data.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
|---------|-------------|
| `/birthday set day:<Integer> month:<Integer> [year:<Integer>]` | Register your birthday. Day and month are required. The year is optional but allows the bot to display your age. Users under 13 cannot register a birth year (Discord ToS compliance). |
| `/birthday status` | View your currently registered birthday and age (if birth year was provided). |
| `/birthday delete` | Remove your birthday from the calendar. |
| `/manage-birthday set user:<User> day:<Integer> month:<Integer> [year:<Integer>]` | Set a user's birthday. Requires admin birthday management to be enabled. |
| `/manage-birthday remove user:<User>` | Remove a user's birthday. Requires admin birthday management to be enabled. |
| `/manage-birthday lock user:<User>` | Lock a user's birthday, preventing them from editing or deleting it. Requires admin birthday management to be enabled. |
| `/manage-birthday unlock user:<User>` | Unlock a previously locked birthday. Requires admin birthday management to be enabled. |

## Configuration {#configuration}

In this configuration file, you can configure the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=birthday%7Cconfig).

| Field | Description |
|-------|-------------|
| Birthday-Channel | Channel where the birthday embed and congratulation messages (if not overwritten) will be sent. |
| (optional) Notification-Channel | Optional separate channel for birthday congratulation messages. If empty, the birthday channel is used. Unlike the birthday channel, old messages are not automatically removed from this channel. |
| Birthday-Embed enabled | If enabled, an auto-updating embed listing all birthdays by month will be sent in the birthday channel. |
| Birthday Message | The congratulation message sent when a user has a birthday but did not provide their birth year. |
| Birthday message with age | The congratulation message sent when a user has a birthday and provided their birth year, including their age. |
| Birthday-Role | A role that is assigned to users on their birthday and removed the next day. Leave empty to disable. |
| "Successfully changed"-Message | The message shown when a user successfully registers or updates their birthday. |
| Birthday-Embed | Customize the appearance (title, description, color, thumbnail, image) of the birthday embed. |
| Use User's Tags instead of their Mention | If enabled, user tags will be displayed in the birthday embed instead of mentions. Recommended for large servers. |
| Enable admin birthday management? | If enabled, the `/manage-birthday` command becomes available for server admins to set, remove, lock, and unlock user birthdays. |

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

* The Discord User ID of the member
* The birthday day and month
* The birth year (if provided by the user)
* Whether the birthday is locked (if admin management is enabled)
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
