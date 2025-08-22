# Quiz Module

Create quiz for your users and let them compete against each other.

<ModuleOverview moduleName="quiz" />

## Features {#features}
Easily create quizzes on your server, let your members compete on a leaderboard and automatically let them answer the specified amount of questions per day.

## Setup {#setup}

First step is to simply enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=quiz&ref=scnx-app-docs) and [configure the module](#configuration).

## Usage {#usage}

To start a public quiz, use the `/quiz create` or `/quiz create-bool` commands as described below in the commands section.
Note that you need to have the role from "Role needed to create quizzes" configured in the [main configuration](#config-main) to use this command.

If there are quizzes created in the [quiz list](#config-quiz), every user can start a private quiz using the `/quiz play` command.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                                                                            | Description                                                                                                                                                                                                                                                                                                              |
|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/quiz create <Description> <Channel> <Quiz duration> <Option 1> <Option 2> [<Can change vote?> <Options 3 to 9>]` | Creates a public quiz with the given description/question in the given channel. The bot then asks you to select one or more correct answers, which the users have to choose from. This command can only be used with the "Role needed to create quizzes" configured in the [main configuration](#config-main).           |
| `/quiz create-bool <Description> <Channel> [<Can change vote?> <Quiz duration>]`                                   | Creates a public quiz with the given description/question in the given channel. Users can only answer with the in the settings configured values, by default they are simply "Yes" or "No". This command can only be used with the "Role needed to create quizzes" configured in the [main configuration](#config-main). |
| `/quiz play`                                                                                                       | Play a private quiz configured in the CustomBot configuration.                                                                                                                                                                                                                                                           |
| `/quiz leaderboard`                                                                                                | Shows the leaderboard which displays the total and daily points of the top users.                                                                                                                                                                                                                                        |

## Configuration {#configuration}

### Main config {#config-main}

In this configuration file, you can do most of the quiz configurations.
Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=quiz%7Cconfig).

| Field                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Emojis                        | Which emojis are used by the bot for the buttons. You can configure the emojis both for normal and boolean-only quiz.                                                                                                                                                                                                                                                                                                                               |
| Daily quiz limit              | How many quiz users can play using `/quiz play` per day. Defaults to five.                                                                                                                                                                                                                                                                                                                                                                          |
| Quiz leaderboard channel      | If set, the bot automatically updates the quiz leaderboard in the channel. The channel should only be used for the leaderboard.                                                                                                                                                                                                                                                                                                                     |
| Role needed to create quizzes | A role which is able to create quiz using the command. Note that this permissions does not change who is able to create quiz for `/quiz play`, as those need to be configured in [the CustomBot configuration](#config-quiz). This could be for example an "Event manager" role.                                                                                                                                                                    |
| Mode for quiz selection       | How the next `/quiz play` quiz for a user is choosen: If set to "Random", every time the user uses the command, they'll receive any quiz from the quiz pool created in the bot configuration. Note that this may cause repeated questions more often. The other option is "Continuous", which tells your bot to just count up in the list of quiz and always choose the next one available, until the end is reached and the bot starts over again. |
| Live preview of results       | Whether the answers of the users on public quiz are shown live instead of only after the quiz ended.                                                                                                                                                                                                                                                                                                                                                |

### Strings {#config-strings}

The [strings](https://scnx.app/glink?page=bot/configuration?file=quiz%7Cstrings) configuration allows you to customize the output messages of the module.

| Field               | Description                                                                                                                                                                              |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title               | The title of the quiz shown in the embed title.                                                                                                                                          |
| color               | The default embed color of active quiz messages, refer to [supported colors](https://docs.scnx.xyz/docs/custom-bot/additional-features#embed-colors) for a list of all supported values. |
| options             | A text introducing the possible quiz options.                                                                                                                                            |
| liveView            | Displayed before the live view section of the quiz message, if enabled.                                                                                                                  |
| expiresOn           | The name of the extra field displayed if a quiz has an end date set.                                                                                                                     |
| thisQuizExpiresOn   | The extra text displayed in the extra fields value if a quiz has an end date set. The `%date%` displays a Discord timestamp with the end date in the current users locale.               |
| endedQuizTitle      | The title of a quiz message embed if the quiz ended.                                                                                                                                     |
| endedQuizColor      | The color of a quiz message embed if the quiz ended.                                                                                                                                     |
| leaderboardTitle    | The title of the leaderboard displayed in the embed title.                                                                                                                               |
| leaderboardSubtitle | The subtitle of the leaderboard displayed in the embed description.                                                                                                                      |
| leaderboardColor    | The color of the leaderboard embed.                                                                                                                                                      |
| leaderboardButton   | The text displayed on the leaderboard button.                                                                                                                                            |

### Available quiz {#config-quiz}

In the [quiz list](https://scnx.app/glink?page=bot/configuration?file=quiz%7CquizList) quiz questions are managed. You can add, edit and remove quiz questions here.

Every quiz question has the following fields:

| Field                 | Description                                                                                                                                                                |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Question or statement | The title of the quiz, which should be a question like "What's your favorite game?".                                                                                       |
| Time limit            | After which time the answer of a user is deemed invalid if they've taken longer than this time to answer. Defaults to one minute.                                          |
| Correct answers       | A list of all correct answers. The correct options are shuffled together with the wrong answers. In the above example, this could be an element with the text "Minecraft". |
| Wrong answers         | The opposite of the correct answers - if users answer this, they lose. For example, this could contain "Fortnite".                                                         |

## Troubleshooting {#troubleshooting}

<details>
    <summary>Quiz messages not being sent</summary>
    <li>Make sure your configuration is valid:</li>
	<ul>
		<li>Make sure the quiz has at least one correct and one wrong answer.</li>
		<li>Make sure the quiz has a title.</li>
		<li>
			Make sure the <a href="#config-strings">strings configuration</a> is valid, this especially applies to the field values which may not be left empty.
			Also, make sure the used embed color is valid, you can find a full list of all accepted colors on the <a href="https://docs.scnx.xyz/docs/custom-bot/additional-features#embed-colors">"Additional Custom-Bot features" page</a>.
		</li>
	</ul>
</details>
<details>
    <summary>Leaderboard message not being sent</summary>
    <li>Make sure the channel you selected is empty without any messages so the bot can display the leaderboard.</li>
</details>
<details>
    <summary>Wrong emoji configuration</summary>
    <li>Try looking at the color of the button with your choice - if it's green, you won! Otherwise, you might have to read the Rock paper scissor rules again...</li>
</details>

## Stored data {#data-usage}

The following data is being stored about every quiz created using the bot:

* The ID of the quiz message
* The description/question of the quiz
* List of options
* List of votes
* Date of last possible answer, if any
* The channel ID of the channel the giveaway was started in
* Whether users can change their vote or not
* Whether the quiz was started publicly in a channel (similar to a poll) or privately using the `/quiz play` command
* Which kind of quiz it is (for yes/no questions)
* Metadata about the entry (date when created and last updated)

The bot also stores the following data about every user that has participated in a quiz:
* The user ID of the user
* The amount of experience points (correct answers) they have in total
* The amount of experience points they have today
* The amount of quiz they've answered today
* If random quiz sorting is disabled, the ID of the next quiz they will be shown
* Metadata about the entry (date when created and last updated)

Once a day, the amount of quiz users done on the day before are removed from the database.
To remove all quiz related data, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
