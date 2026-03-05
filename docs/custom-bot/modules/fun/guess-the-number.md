# Guess the number

Select a number and let your users guess.

<ModuleOverview moduleName="guess-the-number" />

## Features {#features}

* Admins can manually create guess-the-number game sessions in any channel.
* Optional game channel mode that automatically starts a new game when the previous one is solved.
* Users guess by typing numbers in the channel; the bot reacts to indicate correct, wrong, or invalid guesses.
* Optional higher/lower hint reactions on wrong guesses.
* Configurable start and end messages.
* Channel locking after a game ends (in non-game-channel mode) to prevent further messages.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=guess-the-number&ref=scnx-app-docs).
2. Open the [configuration](#config-main) and add admin roles that are allowed to create and manage game sessions.
3. Make sure the bot has the "Manage Channels", "Manage Roles", "Add Reactions", and "Read Message History" permissions in the channels where games will be played.
4. Optionally, enable the [game channel mode](#config-channel) for automatic game restarts.

## Usage {#usage}

### Manual games

Admins (users with a configured admin role) can create a game session in any channel using `/guess-the-number create`. Once started, users guess by sending numbers in the channel. The bot reacts to each guess:

* A check mark for the correct number (the game ends and the winner is announced).
* A cross for a wrong guess, or up/down arrows if higher/lower reactions are enabled.
* A no-entry sign for invalid input (not a number or outside the min/max range).
* A stop sign if an admin tries to guess (admins cannot participate in manual games).

After a game ends, the channel is locked. Admins can also end a game early with `/guess-the-number end` or check the current game state with `/guess-the-number status`.

### Game channel mode

When game channel mode is enabled, a dedicated channel is used where games automatically restart after the previous one is solved. Everyone, including admins, can participate in game channel games. The `/guess-the-number` command cannot be used in the game channel.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
|---------|-------------|
| `/guess-the-number create min:<Integer> max:<Integer> [number:<Integer>]` | Start a new game in the current channel with the specified range. Optionally set the exact number to guess (otherwise random). |
| `/guess-the-number status` | Show the status of the current game in this channel (number, range, guess count, owner). Only visible to the command user. |
| `/guess-the-number end` | End the current game in this channel. |

## Configuration {#configuration}

### Configuration {#config-main}

In this configuration file, you can configure the game behavior and messages. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=guess-the-number%7Cconfigs/config).

| Field | Description |
|-------|-------------|
| Admin-Roles | Roles that are allowed to create and manage game sessions using the `/guess-the-number` command. |
| Start-Message | Message sent at the beginning of a new game round. |
| End-Message | Message sent when a game round ends and a winner is found. |
| React with Lower / Higher reactions | If enabled, the bot reacts with up/down arrows on wrong guesses to indicate whether the correct number is higher or lower. If disabled, wrong guesses receive a cross reaction. |

### Gamechannel Mode {#config-channel}

In this configuration file, you can enable and configure the automatic game channel. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=guess-the-number%7Cconfigs/channel).

| Field | Description |
|-------|-------------|
| Enable Gamechannel mode? | If enabled, a dedicated game channel is used where new games start automatically. |
| Gamechannel | The text channel used for automatic games. |
| Minimum number | The lower bound for the random number range in automatic games. |
| Highest number | The upper bound for the random number range in automatic games. |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The /guess-the-number command says I need admin roles</summary>
    <ul>
        <li>You need to add your roles to the "Admin-Roles" list in the configuration. Additionally, set up the command permissions in your Discord server settings.</li>
    </ul>
</details>
<details>
    <summary>The bot is not reacting to guesses</summary>
    <ul>
        <li>Make sure there is an active game session in the channel. Use <code>/guess-the-number create</code> to start one.</li>
        <li>Ensure the bot has the "Add Reactions" permission in the channel.</li>
    </ul>
</details>
<details>
    <summary>The game channel mode is not starting games automatically</summary>
    <ul>
        <li>Make sure "Enable Gamechannel mode?" is enabled and a valid channel is selected.</li>
        <li>Verify that the minimum number is less than the highest number.</li>
    </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every game session:

* The channel ID where the game takes place
* The number to guess, and the min/max range
* The ID of the user who created the game (owner)
* The total number of guesses
* Whether the game has ended
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
