# Guess the flag!

Designate a channel as a flag guessing channel and let your users guess flags of countries and US states.

<ModuleOverview moduleName="flag-quiz" />

## Features {#features}

* Automatic flag guessing game running in a designated channel.
* Users guess the country or state name represented by a displayed flag image.
* Configurable difficulty range from 1 (easiest) to 5 (hardest).
* First-letter reveal and skip functionality with configurable rate limits.
* Optional leaderboard to track user scores.
* Wrong guesses can be automatically deleted to keep the channel clean.
* View details about the previous flag after it has been solved or skipped (country code, capital, region, continent).
* Immunity roles to bypass rate limits on actions.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=flag-quiz&ref=scnx-app-docs).
2. Create an empty text channel on your server for the quiz.
3. Open the [configuration](#configuration) and set the "Game-Channel" to the empty channel.
4. The bot needs the "Manage Messages", "Manage Channels", and "Read Message History" permissions in the game channel.
5. Optionally, adjust the difficulty range or enable the leaderboard.

## Usage {#usage}

Once set up, the bot posts a flag image in the game channel. Users guess the country or state name by typing their guesses directly in the channel. The bot enforces a cooldown between guesses.

* If the guess is correct, the bot reacts with a celebration emoji and posts a new flag.
* If the guess is wrong, the bot reacts with a cross emoji. Wrong guesses are optionally deleted after 5 seconds.
* Users can click buttons below the quiz message to:
    * **Reveal first letter** - Shows the first letter of the country or state name.
    * **Skip** - Skips the current flag and loads a new one. The skipped flag's answer is revealed.
    * **Question info** - Shows details about the previous flag, including country code, capital, region, and continent.
    * **Leaderboard** - Shows the top 25 players (if leaderboard is enabled).

When the leaderboard is enabled, users earn 1 point for each correct guess.

## Configuration {#configuration}

In this configuration file, you can configure the flag quiz. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=flag-quiz%7Cconfig).

| Field | Description |
|-------|-------------|
| Game-Channel | The text channel where the quiz takes place. The channel must be empty. |
| Maximum amount of hints per user per hour | Maximum number of first-letter reveals a user can request per hour. |
| Maximum amount of skips per user per hour | Maximum number of times a user can skip a flag per hour. |
| Delete wrong guesses? (recommended) | If enabled, wrong guesses are deleted after 5 seconds to keep the channel clean. |
| Minimum difficultly | The minimum difficulty of flags shown (1 = easiest, 5 = hardest). |
| Maximum difficultly | The maximum difficulty of flags shown (1 = easiest, 5 = hardest). |
| Enable Leaderboard | If enabled, a leaderboard button appears and users earn points for correct guesses. |
| Immunity roles | Roles that are exempt from skip and first-letter rate limits. |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The bot is not posting flags</summary>
    <ul>
        <li>Make sure the game channel is empty and correctly set in the configuration.</li>
        <li>Ensure the bot has the "Manage Messages", "Manage Channels", and "Read Message History" permissions in the game channel.</li>
    </ul>
</details>
<details>
    <summary>No flags are appearing with my difficulty settings</summary>
    <ul>
        <li>Make sure the minimum difficulty is lower than or equal to the maximum difficulty.</li>
        <li>Try widening the difficulty range to include more flags.</li>
    </ul>
</details>

## Stored data {#data-usage}

The following data is being stored for the game state:

* Current flag data and previous flag data (including image URL, country names, and first-letter usage)
* The ID of the pinned info message in the game channel
* Metadata about the entry (date when created and last updated)

The following data is being stored about every gameplay action (skip, first-letter reveal):

* The user ID who performed the action
* The type of action
* Metadata about the entry (date when created and last updated)

If the leaderboard is enabled, the following data is stored about every participating user:

* The user ID
* Their total points
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
