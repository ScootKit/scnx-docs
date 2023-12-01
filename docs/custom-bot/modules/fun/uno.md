# Uno

Let your users play Uno against each other!

<ModuleOverview moduleName="uno" />

## Features {#features}
Uno is a classic card game - now available to your Custom Bot! If you want to learn more about the game itself, check out it's [Wikipedia article](https://en.wikipedia.org/wiki/Uno_(card_game)).

Each player starts with seven cards. The other players can only see the amount of cards of each player. If a player can't play a card, they have to draw a card. If a player has no cards left, they win the game.

## Setup {#setup}
The setup is really simple - just enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=uno&ref=scnx-app-docs) and you're good to go!

## Usage {#usage}

To start an Uno game, run the slash command `/uno` - other players can then join using the "Join game" button. After 90 seconds or after the user running the command clicked the "Start game" button, the game starts.

:::tip Game thread
It is best to create a thread for game discussion so the channel does not get too cluttered with game related messages.
:::

Inactive players are warned after it being their turn for 60 seconds and kicked out of the game after an additional 60 seconds.

The game itself has no time limit.

### How to play {#how-to-play}
Players can only play cards that match the current value or color of the last played card. Exceptions apply to the "Color choice" special cards.

In most cases, every player uses one card by selecting a card from their card deck and then it's the next players turn - note that the order can be reversed using the "Reverse" special card.

### Cards and special effects {#cards}
There are normal number cards from 0-9 in blue, green, red and yellow as well as special cards. The special cards include "Color choice", which can be used to select a desired color for the next card; "Reverse", which changes the direction of play; and "Skip", which causes the next player to be skipped.

Then there are the "Draw 2" and the "Color choice and draw 4" cards: This forces the next player to draw two or four cards, as long as they do not also have one of these cards in their card deck. If they have such a card, they can use it to increase the number of cards to be drawn and pass it on to the next player, where the whole process is repeated.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description                |                                                                                                                                                               |
|---------|----------------------------|
| `/uno`  | Starts an Uno game in the current channel - you can find more about how it works in the [usage section](#usage) above. |


## Troubleshooting {#troubleshooting}

<details>
    <summary>How can I play a card/Where's my card deck?</summary>
    <li>You can get a new message with your current card deck, including a button to update it, using the "View deck" button on the original game message.</li>
</details>
<details>
    <summary>The bot says "⚠️️ You must use the Uno! button before you use your second last card!" - but why?</summary>
    <li>You have to first click the Uno! button on the original game message before playing your second last card. This does not apply to playing the last card.</li>
</details>
