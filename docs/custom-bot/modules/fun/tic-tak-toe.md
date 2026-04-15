# Tic Tac Toe

Let your users play Tic-Tac-Toe against each other!

<ModuleOverview moduleName="tic-tak-toe" />

## Features {#features}

- Challenge another user to a game of Tic-Tac-Toe.
- Interactive button-based 3x3 grid gameplay directly in Discord.
- Invitation system with accept/deny options and automatic expiry.
- The starting player is randomly selected for fairness.
- Color-coded game pieces (green and yellow circles) for easy identification.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=tic-tak-toe&ref=scnx-app-docs).
2. No further configuration is needed. The module has no configuration file.

## Usage {#usage}

Use the `/tic-tac-toe` command to challenge another user. The challenged user has 2 minutes to accept or deny the invitation.

Once the game starts, a 3x3 grid of buttons appears. Players take turns clicking empty cells to place their piece. The game randomly selects who goes first. The current player is pinged when it is their turn.

The game ends when:

- A player gets three in a row (horizontally, vertically, or diagonally) and wins.
- All cells are filled without a winner, resulting in a draw.

## Commands {#commands}

<SlashCommandExplanation />

| Command                    | Description                                      |
| -------------------------- | ------------------------------------------------ |
| `/tic-tac-toe user:<User>` | Challenge another user to a game of Tic-Tac-Toe. |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The invitation expired</summary>
    <ul>
        <li>The challenged user has 2 minutes to accept the invitation. After that, it expires automatically.</li>
    </ul>
</details>
