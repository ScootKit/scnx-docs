# Connect Four

Let your users play Connect Four against each other!

<ModuleOverview moduleName="connect-four" />

## Features {#features}
Connect Four is a really old game - you can find more information about it on [Wikipedia](https://en.wikipedia.org/wiki/Connect_Four). The game is played on a 7x6 field, where two players take turns dropping their tokens into the field. The first player to connect four of their tokens in a row wins the game.

## Setup {#setup}
The setup is really simple - just enable the module in your SCNX dashboard and you're good to go!

## Usage {#usage}
A Connect Four game can be started using the slash command `/connect-four` - you can find out more about the command in the [Commands](#commands) section below.

Once a user runs the command, the targeted user has to accept the invitation to play a game against you using the button on the message. If they accept within two minutes, the game starts.

After accepting, your bot sends a message with the game field and buttons numbered from 1 to the game field size.
Both of you now take turns in dropping your tokens into the field by clicking on the buttons.
The tokens will fall to the lowest possible position in the column you selected, just like real Connect Four.

The first player that gets four rectangles of their color in any row wins the game. The rectangles can be horizontal, vertical or diagonal.

## Commands {#commands}

<SlashCommandExplanation />

| Command         | Description                                                                                                                                                                                                                   |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/connect-four` | This command starts a Connect Four game against the specified user. You can also use the `field_size` option to define the width and height of the game field - it is 7 by default, but you can enter any value from 4 to 10. |
