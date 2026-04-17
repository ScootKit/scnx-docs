# Reminders

Let users set reminders for themselves - either via DMs or channels.

<ModuleOverview moduleName="reminders" />

## Features {#features}

- Users can set personal reminders with a custom message and duration.
- Reminders can be delivered either in the channel where the command was used or via DM.
- Snooze buttons allow users to postpone a reminder by 10 minutes, 30 minutes, 1 hour, or 1 day.
- Reminders survive bot restarts -- pending reminders are automatically rescheduled on startup.
- Supports flexible duration input (e.g., "2h30m", "1d", "45m").

## Setup {#setup}

1. Make sure the bot has `View Channel`, `Send Messages`, and `Embed Links` permissions in the channels where reminders will be delivered.
2. Customize the reminder notification message in the [module configuration](#configuration).

## Usage {#usage}

Users can set a reminder using `/remind-me`:

- Specify when you want to be reminded using the `in` parameter with a [supported duration format](/docs/custom-bot/additional-features#durations) (e.g., "2h", "30m", "1d12h").
- Provide the reminder message in the `what` parameter.
- Optionally set `dm` to `true` to receive the reminder via DM instead of in the current channel.

The reminder must be at least 1 minute in the future.

When the reminder triggers, the bot sends the configured notification message along with snooze buttons. Users can click these buttons to reschedule the reminder for an additional 10 minutes, 30 minutes, 1 hour, or 1 day.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                           | Description                                                                                                                                                                                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/remind-me in:<Text> what:<Text> [dm:<Boolean>]` | Set a reminder. The `in` parameter accepts a [duration format](/docs/custom-bot/additional-features#durations) (e.g., "2h", "30m", "1d"). The `what` parameter is the reminder message. Set `dm` to `true` to receive the reminder via DM. |

## Configuration {#configuration}

In this configuration file, you can configure the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=reminders%7Cconfig).

| Field            | Description                                                                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reminder-Message | The notification message sent when a reminder triggers. Supports parameters for user mention, reminder message text, user tag, and user avatar URL. |

## Troubleshooting {#troubleshooting}

<details>
  <summary>Reminders are not being delivered</summary>
  <ul>
    <li>Make sure the bot has <code>View Channel</code> and <code>Send Messages</code> permissions in the channel where the reminder was set.</li>
    <li>If the reminder was set to DM, ensure the user has DMs enabled from server members.</li>
    <li>The reminder duration must be at least 1 minute in the future.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every reminder:

- An auto-incrementing unique identifier
- The Discord User ID of the user who created the reminder
- The reminder text
- The channel ID where the reminder should be delivered (or "DM" for direct messages)
- The scheduled date and time for the reminder
- Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
