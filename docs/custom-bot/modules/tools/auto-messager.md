# Automatic Messages

Send automatic messages on a schedule - hourly, daily, or using custom cron expressions.

<ModuleOverview moduleName="auto-messager" />

## Features {#features}

- Send automatic messages on an [hourly](#hourly) basis, with optional hour filtering.
- Send automatic messages on a [daily](#daily) basis, with optional filtering by day of the week or day of the month.
- Schedule messages using [cron expressions](#cronjob) for full control over timing.
- Support for plain text messages and rich embeds.
- Configure multiple automatic messages, each sent to different channels and on different schedules.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=auto-messager) on your server.
2. Depending on your scheduling needs, open the configuration for one of the three schedule types:
   - [Hourly](https://scnx.app/glink?page=bot/configuration?file=auto-messager%7Chourly) - for messages sent every hour or at specific hours.
   - [Daily](https://scnx.app/glink?page=bot/configuration?file=auto-messager%7Cdaily) - for messages sent every day or on specific days of the week/month.
   - [Cronjob](https://scnx.app/glink?page=bot/configuration?file=auto-messager%7Ccronjob) - for advanced scheduling using cron expressions.
3. Create a new configuration element and set the channel, message, and any desired time restrictions.
4. Make sure the bot has the **View Channel**, **Send Messages**, and **Embed Links** permissions in the target channel.

## Usage {#usage}

Once configured, the module runs automatically. Messages are sent based on the configured schedules without any user interaction required.

### Hourly messages {#hourly}

Hourly messages are sent once per hour. You can restrict which hours the message is sent by specifying the allowed hours (0-23). If no hours are specified, the message will be sent every hour.

### Daily messages {#daily}

Daily messages are sent once per day. You can restrict which days the message is sent by specifying allowed week-days (0 = Sunday, 1 = Monday, ..., 6 = Saturday) and/or allowed days of the month (1-31). If no restrictions are set, the message will be sent every day.

### Cron messages {#cronjob}

For advanced scheduling, you can use cron expressions. This gives you full control over when messages are sent. The cron expression format follows the standard five-field format: `minute hour day-of-month month day-of-week`.

## Configuration {#configuration}

### Hourly {#configuration-hourly}

Open this configuration in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=auto-messager%7Chourly).

| Field          | Description                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Channel        | The channel in which the message should be sent.                                                                       |
| Message        | The message content to send. Supports embeds.                                                                          |
| Limit hours to | If one or more hours (0-23) are set, the message will only be sent during those hours. Leave empty to send every hour. |

### Daily {#configuration-daily}

Open this configuration in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=auto-messager%7Cdaily).

| Field              | Description                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Channel            | The channel in which the message should be sent.                                                                   |
| Message            | The message content to send. Supports embeds.                                                                      |
| Limit Week-Days to | If one or more values are set (0 = Sunday, 6 = Saturday), the message will only be sent on those days of the week. |
| Limit days to      | If one or more values are set (1-31), the message will only be sent on those days of the month.                    |

### Cronjob (advanced) {#configuration-cronjob}

Open this configuration in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=auto-messager%7Ccronjob).

| Field      | Description                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------- |
| Channel    | The channel in which the message should be sent.                                                                  |
| Message    | The message content to send. Supports embeds.                                                                     |
| Expression | A cron expression defining when the message should be sent. Format: `minute hour day-of-month month day-of-week`. |

## Troubleshooting {#troubleshooting}

- **Messages are not being sent**: Make sure the bot has "View Channel", "Send Messages", and "Embed Links" permissions in the target channel. Also verify that the channel ID in the configuration is correct.
- **Messages are sent at unexpected times**: The bot uses the server's timezone. Double-check your hour, day, or cron expression values. For hourly messages, hours are in 24-hour format (0-23).
- **Cron expression is not working**: Ensure the cron expression follows the standard five-field format. For example, `0 9 * * 1-5` sends a message at 9:00 AM on weekdays.
