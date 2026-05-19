# Emoji-Quiz

Designate a channel as an emoji-quiz channel and let your users guess emoji combinations.

<ModuleOverview moduleName="emoji-quiz" />

## Features {#features}

- Automatic emoji quiz game running in a designated channel.
- Users guess the answer represented by emoji combinations by typing in the channel.
- Built-in question database or use your own custom questions.
- Hint, first-letter reveal, and skip functionality with configurable rate limits.
- Optional leaderboard to track user scores.
- Wrong guesses can be automatically deleted to keep the channel clean.
- Immunity roles to bypass rate limits on actions.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=emoji-quiz&ref=scnx-app-docs).
2. Create an empty text channel on your server for the quiz.
3. Open the [configuration](#configuration) and set the "Game-Channel" to the empty channel.
4. The bot needs the "Manage Messages", "Manage Channels", and "Read Message History" permissions in the game channel.
5. Optionally, configure custom questions or enable the leaderboard.

## Usage {#usage}

Once set up, the bot posts an emoji combination in the game channel. Users guess the answer by typing their guesses directly in the channel. The bot enforces a 5-second cooldown between guesses.

- If the guess is correct, the bot reacts with a celebration emoji and posts a new question.
- If the guess is wrong, the bot reacts with a cross emoji. Wrong guesses are optionally deleted after 5 seconds.
- Users can click buttons below the quiz message to:
  - **Request a hint** - Shows a text hint for the current question (if available).
  - **Reveal first letter** - Shows the first letter of the answer.
  - **Skip** - Skips the current question and loads a new one.
  - **Question info** - Shows details about the current and previous question.
  - **Leaderboard** - Shows the top 25 players (if leaderboard is enabled).

When the leaderboard is enabled, users earn 2 points for a correct guess (or 1 point if a hint was used).

## Configuration {#configuration}

### Configuration {#config-main}

In this configuration file, you can configure the emoji quiz. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=emoji-quiz%7Cconfig).

| Field                                                    | Description                                                                                                                                    |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Use custom Game-Questions?                               | If enabled, your custom questions are used instead of the built-in database. This disables some features like question-duplication protection. |
| Game-Channel                                             | The text channel where the quiz takes place. The channel must be empty.                                                                        |
| Maximum amount of first-letter reveals per user per hour | Maximum number of first-letter reveals a user can request per hour.                                                                            |
| Maximum amount of hints per user per hour                | Maximum number of hint requests a user can make per hour.                                                                                      |
| Maximum amount of skips per user per hour                | Maximum number of times a user can skip a question per hour.                                                                                   |
| Delete wrong guesses? (recommended)                      | If enabled, wrong guesses are deleted after 5 seconds to keep the channel clean.                                                               |
| Enable Leaderboard                                       | If enabled, a leaderboard button appears and users earn points for correct guesses.                                                            |
| Immunity roles                                           | Roles that are exempt from skip, hint, and first-letter rate limits.                                                                           |

### Custom Game Questions {#config-custom}

In this configuration file, you can add your own quiz questions. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=emoji-quiz%7Ccustom-questions).

| Field             | Description                                                                           |
| ----------------- | ------------------------------------------------------------------------------------- |
| Prompt (= Emojis) | The emoji combination displayed to users.                                             |
| Hint (optional)   | A text hint users can request. Leave empty to hide the hint button for this question. |
| Solution          | The answer that users need to guess.                                                  |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The bot is not posting quiz questions</summary>
    <ul>
        <li>Make sure the game channel is empty and correctly set in the configuration.</li>
        <li>Ensure the bot has the "Manage Messages", "Manage Channels", and "Read Message History" permissions in the game channel.</li>
    </ul>
</details>
<details>
    <summary>Custom questions are not being used</summary>
    <ul>
        <li>Make sure "Use custom Game-Questions?" is enabled in the configuration.</li>
        <li>After changing this setting, skip or solve the current prompt for the change to take effect.</li>
    </ul>
</details>

## Stored data {#data-usage}

The following data is being stored for the game state:

- Current question data and previous question data (including prompt, solution, and hint usage)
- The ID of the pinned info message in the game channel
- Metadata about the entry (date when created and last updated)

The following data is being stored about every gameplay action (hint, skip, first-letter reveal):

- The user ID who performed the action
- The type of action
- Metadata about the entry (date when created and last updated)

If the leaderboard is enabled, the following data is stored about every participating user:

- The user ID
- Their total points
- Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
