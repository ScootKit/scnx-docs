# Suggestions

Advanced module to manage suggestions on your guild.

<ModuleOverview moduleName="suggestions" />

## Features {#features}

* Let your users submit suggestions on Discord using
    * commands
    * messages in a designated channel (optional)
* Approve / Deny suggestions from users
* Let users vote for suggestions using reactions
* Automatically open threads below new suggestions (optional)

## Setup {#setup}

1. Create (or designate) a channel for suggestions. The bot needs the following permissions on this channel: "View
   channel", "Send messages" and "View message history"
2. Make sure that [the permissions](./../../slash-commands) `/manage-suggestions` are configured correctly to avoid
   users managing suggestions
   as admins.
3. Open the [Module configuration](https://scnx.app/glink?page=bot/configuration?file=suggestions%7Cconfig).
4. [Configure](#configuration) the module.
5. Reload the configuration to apply changes.

## Usage {#usage}

* Users can submit a new suggestion with `/suggestion`. New suggestions get sent in the configured Suggestion-Channel.
* If enabled, messages sent in the Suggestion-Channel will be converted into suggestions automatically.
* Other users can vote with configured reactions and can comment on suggestion using threads.
* Admins can deny or approve suggestions with `/manage-suggestions` and optionally add a reason for their decision. This
  will notify the suggestion creator via DMs, if configured.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                      | Description                                                                                                                |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| `/suggestion suggestion:<Text>`                              | Allows users to submit a new suggestion into the suggestion-channel.                                                       |
| `/manage-suggestion accept id:<SuggestionID> comment:<Text>` | Allows admins to accept a suggestion submitted by a user. The comment will be displayed in the updated suggestion message. |
| `/manage-suggestion deny id:<SuggestionID> comment:<Text>`   | Allows admins to deny a suggestion submitted by a user. The comment will be displayed in the updated suggestion message.   |

## Configuration {#configuration}

This configuration file allows you to configure features of the module and to change the appearance of messages.
Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=suggestions%7Cconfig).

| Field                                       | Description                                                                                                                                                                                                           |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Suggestion-Channel                          | Channel in which new suggestions get posted and (if "Create suggestions from messages in channel" is enabled) suggestions will be created from.                                                                       |
| Create suggestions from messages in channel | If enabled, messages sent by users in the Suggestion-Channel will be converted to a suggestion automatically.                                                                                                         |
| Reactions                                   | The bot will add these reactions below suggestions. You could these reactions as voting (e.g. with `👍` and `👎`). Please enter either the Unicode-Version (for built-in-emojis) or the Emoji-ID (for custom emojis). |
| User-Comments in threads                    | If enabled, the bot will create a new thread under each suggestion to allow users to comment. Commenting via commands has been removed.                                                                               |
| Thread-Name                                 | *Only visible if "User-Comments in threads" is enabled*<br/>This will be the name of the thread created below suggestions.                                                                                            |
| "Successfully submitted"-Message            | This is the message shown to users after they have submitted their suggestion using the [`/suggestion`](#commands) command.                                                                                           |
| Notification-Role                           | This role will be pinged every time a new suggestion is created.                                                                                                                                                      |
| Send DM-Notifications                       | If enabled, the creator of the thread will be sent a DM when their suggestion was answered by an administrator.                                                                                                       |
| DM-Status-Notification                      | *Only visible if "Send DM-Notifications" is enabled*<br/>This is the message that will get sent to the creator of the thread when their suggestion was answered by an administrator.                                  |
| Unanswered Suggestion-Message               | This is how a suggestion without an admin-answer will look in the suggestion-channel. This will be edited when an admin responds.                                                                                     |
| Denied Suggestion-Message                   | This is how a suggestion that has been denied by an admin will look like. The original message ("unanswered suggestion-message") will be edited to this value when an admin denies the suggestion.                    |
| Approved Suggestion-Message                 | This is how a suggestion that has been accepted by an admin will look like. The original message ("unanswered suggestion-message") will be edited to this value when an admin approves the suggestion.               |

## Troubleshooting {#troubleshooting}

<details>
<summary>A suggestion is not being created</summary>

Please check the following:
<ul>
    <li>Make sure the "Unanswered Suggestion-Message", "Denied Suggestion-Message" and "Approved Suggestion-Message" fields are correctly configured.</li>
    <li>Make sure the bot has the required permissions on the suggestion channel: "View channel", "Send messages" and "View message history".</li>
    <li>Make sure the configured Ping-Roles are correct (or the field is empty).</li>
    <li>Make sure the Thread-Name is shorter than 100 characters.</li>
    <li>Make sure that reactions are in the proper Unicode-Format (if you are using a built-in-emoji) or the Discord-Emoji-Format (for custom emojis).</li>
    <li>If you are using the "Create suggestions from messages in channel" feature, please make sure the bot has permissions to "Manage messages".</li>
</ul>
</details>

<details>
    <summary>I can't respond to a suggestion as an admin</summary>

Please check the following:
<ul>
    <li>Make sure the "Denied Suggestion-Message" and "Approved Suggestion-Message" fields are correctly configured.</li>
    <li>Make sure the bot has the required permissions on the suggestion channel: "View channel", "Send messages" and "View message history".</li>
    <li>Make sure that the suggestion hasn't been answered by an admin yet. If you didn't <a href="./../../slash-commands">set up the permissions</a> for <code>/manage-suggestion</code>, a user might have been able to respond to the suggestion as an admin.</li>
</ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every suggestion created via [commands](#commands) or by sending a message in
the [configured](#configuration) channel (if enabled):

* An unique integer identifying the database entry
* The content of the suggestion (`suggestion` parameter of the [`/suggestion`](#commands) command or the content of the
  message sent)
* The ID of the message sent by the bot in the configured channel
* ID of the user who submitted the suggestion
* The answer of the admin, consisting of the following:
    * Type of answer (`deny` or `approve`)
    * Reason for this answer (`comment` parameter of the [`/manage-suggestion`](#commands) command)
    * ID of the admin
* For suggestions created in a version below v3.4.6: All comments submitted via commands, consisting of the following:
    * Content of the comment
    * ID of the user who added the comment
* Metadata about the entry (date when created and last updated)

There is no way to remove a suggestion from the database (you can always delete the suggestion-message regardless). To
remove all suggestions, [purge the module database](./../../additional-features#reset-module-database).