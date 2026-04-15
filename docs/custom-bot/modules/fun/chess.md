# Chess

Play chess against other server members or the AI, right in Discord!

<ModuleOverview moduleName="chess" />

## Features {#features}

* Challenge another member to a PvP chess game or start a game against the AI (Easy, Medium, Hard).
* Games run in dedicated Discord threads for clean, asynchronous gameplay. Threads are automatically archived when the game ends.
* Three ways to make moves: type a move directly in the game thread, use algebraic notation via a popup modal (e.g. `e2e4`, `Nf3`, `O-O`), or use guided select menus to pick your piece and destination square.
* Full castling support — use standard notation (`O-O`, `O-O-O`) or coordinate notation (`e1g1`). Castling moves are labeled in the select menus.
* **Pawn promotion picker** — when a pawn reaches the last rank, choose which piece to promote to (Queen, Rook, Bishop, or Knight) from a dropdown instead of always being forced to a queen.
* **Material balance indicator** — the game embed shows who is ahead on material (e.g. *White +3*) after every move.
* Visual board images generated for every move, with check and last-move highlighting. The board is automatically rendered from the perspective of whoever is about to move, so asynchronous games always show your own pieces at the bottom.
* Draw offers, resignations, and move history built in. Draw offers are only available in PvP games, not against the AI.
* Completed games include a **Moves** button on the final board embed to quickly review the full game history.
* Configurable move timeout with automatic reminders and forfeit on inactivity.
* Multiple concurrent games per player (no duplicate games between the same two players).
* Games are automatically forfeited when a player leaves the server.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=chess) on your server.
2. Optionally open the [Configuration](https://scnx.app/glink?page=bot/configuration?file=chess%7Cconfiguration) to adjust the **Move Timeout**, **Forfeit Timeout**, **Max Concurrent Games**, and **AI Opponent Enabled** settings.

Game threads are created in the channel where the `/chess` command is used — no dedicated game channel needs to be configured.

## Usage {#usage}

### Challenging a player {#challenging}

Use `/chess challenge` to challenge another member. The challenged user has 2 minutes to accept or decline the invitation. Once accepted, a new thread is created in the current channel with the board and action buttons.

### Playing against the AI {#ai}

Use `/chess challenge-ai` to start a game against the AI. Choose a difficulty: Easy, Medium, or Hard. You always play as white.

### Making moves {#moves}

On your turn, you have three options:

* **Type in thread** — Simply type your move as a message in the game thread (e.g. `e2e4`, `Nf3`, `O-O`). The message is automatically deleted and the move is processed.
* **Move button** — Click "Move" to open a popup where you type your move in algebraic notation (e.g. `e2e4`, `e2-e4`, `Nf3`).
* **Select menus** — The bot shows a piece select menu. Pick a piece, then pick the destination square from the next menu. Castling moves are labeled when available.

When a pawn reaches the last rank, the bot replaces the board controls with a **promotion dropdown**. Pick the piece you want (Queen, Rook, Bishop, or Knight) and the move is finalized with your choice.

After your move, the board image updates and the opponent is pinged.

### Draw, resign, and history {#actions}

* **Offer Draw** — Click the "Offer Draw" button (PvP games only, not available against AI). Your opponent will see an "Accept Draw" button on their next turn. If they make a move instead, the draw offer is implicitly declined.
* **Resign** — Click "Resign" and confirm. The opponent wins immediately.
* **Moves** — Click "Moves" to view the full move history of the game.

### Timeouts {#timeouts}

If a player does not move within the configured timeout, they receive a reminder ping in the thread. If they still do not move within the forfeit timeout, the game is automatically forfeited.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                        | Description                                                     |
|------------------------------------------------|-----------------------------------------------------------------|
| `/chess challenge user:<User>`                 | Challenge another member to a chess game.                       |
| `/chess challenge-ai [difficulty:<Easy/Medium/Hard>]` | Start a chess game against the AI (default difficulty: Medium). |
| `/chess games`                                 | List your active chess games.                                   |
| `/chess history [user:<User>]`                 | View completed chess game history (yours or another player's).  |

## Configuration {#configuration}

Open the configuration in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=chess%7Cconfiguration).

| Field                | Description                                                              | Default |
|----------------------|--------------------------------------------------------------------------|---------|
| Move Timeout (hours) | Hours before a reminder ping is sent in the game thread.                 | 24      |
| Forfeit Timeout (hours) | Hours of inactivity before automatic forfeit.                         | 48      |
| Max Concurrent Games | Maximum number of active games per player.                               | 5       |
| AI Opponent Enabled  | Allow players to start games against the AI. When disabled, the `/chess challenge-ai` command is hidden. | true    |

## Troubleshooting {#troubleshooting}

<details>
  <summary>The board image is not showing</summary>
  <ul>
    <li>The board image is generated by an external API. If the API is temporarily unavailable, the game still works — the image will simply be missing from the embed.</li>
  </ul>
</details>

<details>
  <summary>My move was rejected as invalid</summary>
  <ul>
    <li>Make sure you are entering a legal move. The error message will list all legal moves for your current position.</li>
    <li>If using notation like <code>Nf3</code> and multiple knights can reach f3, use coordinate notation instead (e.g. <code>G1F3</code>).</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is stored by this module:

* **Game records**: Player IDs, board state (FEN), move count, game status, thread/channel IDs, and timestamps for each game. Completed games are retained indefinitely for history.

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
