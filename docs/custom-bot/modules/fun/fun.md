# Fun-Commands

Some random fun commands like /hug or /random.

<ModuleOverview moduleName="fun" />

## Features {#features}

- Social interaction commands: `/hug`, `/kiss`, `/slap`, and `/pat` with customizable images and messages.
- Random generators: random numbers, dice rolls, coin flips, IKEA name generator, and 8ball.
- All messages and images are fully customizable.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=fun&ref=scnx-app-docs).
2. Optionally, customize the messages and images in the [configuration](#configuration).

## Usage {#usage}

Users can use the slash commands described below to interact with each other or generate random results. Social interaction commands (`/hug`, `/kiss`, `/slap`, `/pat`) require selecting another user and cannot be used on yourself.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                        | Description                                                                                                 |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `/hug user:<User>`                             | Hug another user. Sends a configurable message and a random image from the configured hug images.           |
| `/kiss user:<User>`                            | Kiss another user. Sends a configurable message and a random image from the configured kiss images.         |
| `/slap user:<User>`                            | Slap another user. Sends a configurable message and a random image from the configured slap images.         |
| `/pat user:<User>`                             | Pat another user. Sends a configurable message and a random image from the configured pat images.           |
| `/random number [min:<Number>] [max:<Number>]` | Generate a random number between the given min and max values (defaults to 1 and 42).                       |
| `/random ikea-name [syllable-count:<Number>]`  | Generate a random IKEA-style product name with the specified number of syllables (defaults to 1-4, max 20). |
| `/random dice`                                 | Roll a six-sided dice.                                                                                      |
| `/random coinflip`                             | Flip a coin.                                                                                                |
| `/random 8ball`                                | Ask the magic 8ball a question and receive a random answer.                                                 |

## Configuration {#configuration}

In this configuration file, you can customize the messages and images used by the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=fun%7Cconfig).

| Field                 | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| IKEA Message          | Message sent when someone uses `/random ikea-name`.                          |
| Random number message | Message sent when someone uses `/random number`.                             |
| Dice Roll message     | Message sent when someone uses `/random dice`.                               |
| Coin toss message     | Message sent when someone uses `/random coinflip`.                           |
| Hug message           | Message sent when someone uses `/hug`.                                       |
| Hug images            | List of image URLs from which one is randomly selected when `/hug` is used.  |
| Kiss message          | Message sent when someone uses `/kiss`.                                      |
| Kiss images           | List of image URLs from which one is randomly selected when `/kiss` is used. |
| Slap message          | Message sent when someone uses `/slap`.                                      |
| Slap images           | List of image URLs from which one is randomly selected when `/slap` is used. |
| Pat message           | Message sent when someone uses `/pat`.                                       |
| Pat images            | List of image URLs from which one is randomly selected when `/pat` is used.  |
| 8ball Message         | Message sent when someone uses `/random 8ball`.                              |
| 8ball responses       | List of possible answers the 8ball can give.                                 |

## Troubleshooting {#troubleshooting}

<details>
    <summary>Images are not showing up</summary>
    <ul>
        <li>Make sure the image URLs in the configuration are valid and publicly accessible.</li>
        <li>The bot needs the "Attach Files" permission in the channel.</li>
    </ul>
</details>
