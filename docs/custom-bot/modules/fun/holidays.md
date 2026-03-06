# Winter Holidays

Add a countdown to Christmas and create an advent calendar on your Discord to celebrate the holidays!

<ModuleOverview moduleName="holidays" />

## Features {#features}

* Christmas/New Year countdown displayed as a voice channel or category name, updated hourly.
* Interactive advent calendar with 24 doors that users can open during December.
* Customizable messages for each calendar day.
* Optional role rewards for opening individual days or all 24 days.
* Optional button randomization for a more engaging advent calendar experience.

## Setup {#setup}

### Christmas Countdown

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Open the [Countdown configuration](#config-countdown) and enable it.
3. Create a voice channel or category on your server and set it in the configuration. The bot will rename this channel to show the countdown.
4. The bot needs the "Manage Channels" permission for the countdown channel.

### Advent Calendar

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Open the [Advent Calendar configuration](#config-calendar) and enable it.
3. Create an empty text channel and set it in the configuration.
4. Customize the message for each of the 24 days and optionally configure role rewards.
5. The bot needs the "Send Messages", "Read Message History", and "Manage Messages" permissions in the calendar channel.

## Usage {#usage}

### Christmas Countdown

Once enabled, the bot automatically updates the configured channel name hourly to display a countdown to the selected date (Christmas Eve, Christmas Day, or New Year). When the date has passed, the channel name reflects that.

### Advent Calendar

The bot posts an interactive message in the configured channel with 24 buttons (one for each day). During December:

* Users can click the button for the current day to "open" the door and receive a customized message.
* Buttons for other days are disabled (unless button randomization is enabled).
* If role rewards are configured for a day, users automatically receive those roles when they open the door.
* Users who open all 24 doors can receive additional reward roles.
* Each user can only open each day once (unless re-opening is enabled).

## Configuration {#configuration}

### Christmas Countdown {#config-countdown}

In this configuration file, you can set up the Christmas countdown. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=holidays%7Cconfigs/countdown).

| Field | Description |
|-------|-------------|
| Enabled? | Enable or disable the countdown feature. |
| Countdown-Channel | A voice channel or category whose name will be updated to show the countdown. |
| Countdown until | Select the target date: December 24 (Christmas Eve), December 25 (Christmas Day), or January 1 (New Year). |

### Advent Calendar {#config-calendar}

In this configuration file, you can set up the advent calendar. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=holidays%7Cconfigs/advent-calendar).

| Field | Description |
|-------|-------------|
| Enabled? | Enable or disable the advent calendar feature. |
| Calendar Channel | An empty text channel where the advent calendar message will be posted. |
| Calendar message | The main message displayed above the calendar buttons. |
| "Already opened" Message | Message shown when a user tries to re-open a door they already opened. |
| Reward roles for claiming all days (optional) | Roles given to users who open all 24 doors. |
| Allow users to see the calendar message of the current day multiple times? | If enabled, users can view the day's message again after opening it. |
| Randomize buttons hourly? | If enabled, the button order is shuffled every hour. All buttons become clickable, but only the current day's door can be successfully opened. |
| Wrong day message | Message shown when a user tries to open a door that is not today's. |
| Day 1-24 Claiming Message | The message displayed when a user opens the corresponding day's door. Each day has its own configurable message. |
| Day 1-24 Reward Roles (optional) | Roles given to users when they open the corresponding day's door. |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The countdown channel is not updating</summary>
    <ul>
        <li>Make sure the countdown is enabled in the configuration.</li>
        <li>Ensure the bot has the "Manage Channels" permission for the selected channel.</li>
        <li>Note that the channel name updates hourly. Discord also rate-limits channel name changes.</li>
    </ul>
</details>
<details>
    <summary>The advent calendar buttons are not showing</summary>
    <ul>
        <li>Make sure the advent calendar is enabled and a valid empty text channel is configured.</li>
        <li>Ensure the bot has the required permissions in the calendar channel.</li>
    </ul>
</details>
<details>
    <summary>Users are not receiving role rewards</summary>
    <ul>
        <li>Make sure the bot's role is higher than the reward roles in the server role hierarchy.</li>
        <li>Verify that the roles are correctly configured for the specific day.</li>
    </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every advent calendar door opening:

* The user ID of the user who opened the door
* The day number that was opened
* The year of the opening
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
