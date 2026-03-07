# Duel

Let users play the game "Duel" on your Discord.

<ModuleOverview moduleName="duel" />

## Features {#features}

* Challenge another user to a turn-based duel game.
* Simple mechanics with three actions: Shoot, Guard, and Reload.
* Interactive button-based gameplay directly in Discord.
* Invitation system with accept/deny options and automatic expiry.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=duel&ref=scnx-app-docs).
2. No further configuration is needed. The module has no configuration file.

## Usage {#usage}

Use the `/duel` command to challenge another user. The challenged user has 2 minutes to accept or deny the invitation.

Once the game starts, both players choose one of three actions each round by clicking buttons:

* **Shoot** - Fire your gun at the opponent. Requires at least one bullet. If the opponent is not guarding, you win.
* **Guard** - Defend against a shot. You cannot guard more than 5 times in a row; after that, your guard breaks.
* **Reload** - Add a bullet to your gun. You can hold a maximum of 5 bullets. You are vulnerable while reloading.

Both players make their choices simultaneously. Once both have chosen, the round resolves and the next round begins. The game ends when a player successfully shoots an unguarded opponent.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
|---------|-------------|
| `/duel user:<User>` | Challenge another user to a duel. |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The invitation expired</summary>
    <ul>
        <li>The challenged user has 2 minutes to accept the invitation. After that, it expires automatically.</li>
    </ul>
</details>
