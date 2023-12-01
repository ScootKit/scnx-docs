# Rock Paper Scissors

Let your users play Rock Paper Scissors against the bot and each other!

<ModuleOverview moduleName="rock-paper-scissors" />

## Features {#features}
Rock paper scissors is a game which can be easily played with just two players, requiring no additional equipment. If you want to learn more about the game and its rules, you can check out [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors).

By default, there are three options to choose from: Rock, Paper and Scissors - just like the name says. Using your Custom Bot, you can play against the bot itself or another user on your Discord server!

## Setup {#setup}
The setup is really simple - just enable the module in your SCNX dashboard and you're good to go!

## Usage {#usage}
A Rock paper scissors game can be started using the slash command `/rock-paper-scissors` - you can find out more about the command in the [Commands](#commands) section below.

If the user option of the command is left empty or a bot is provided, the game starts automatically in the current channel.
Otherwise, the targeted user has to accept the invitation to play a game against you using the button on the message. If they accept within two minutes, the game starts.

After accepting, the bot edits the initial message to add three buttons for the three options, displayed as emojis. Once both users made their choice, the bot announces the winner of the game. If you want to play another round, simply click the "Play again" button.

## Commands {#commands}

<SlashCommandExplanation />

| Command                | Description              |                                                                                                                                                               |
|------------------------|----------------------------|
| `/rock-paper-scissors` | This command starts a Rock paper scissors game if no user or a bot has been entered, or sends an invite to another user to play the game. |


## Troubleshooting {#troubleshooting}

<details>
    <summary>I chose the correct option, but the bot still says that I lost!</summary>
    <li>Try looking at the color of the button with your choice - if it's green, you won! Otherwise, you might have to read the Rock paper scissor rules again...</li>
</details>
