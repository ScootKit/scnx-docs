# Starboard

Let users highlight messages into a starboard channel by reacting.

<ModuleOverview moduleName="starboard" />

## Features {#features}

* Let users feature funny, interesting or otherwise noteworthy messages by reacting on them.
* Limit the amount of stars a user can give per hour to make sure the messages are actually special.
* Exclude roles and channels to keep unwanted messages out of the starboard.

## Setup {#setup}

* First, create a channel on your server that will be used as the starboard channel.
  Make sure the bot has the permissions `View Channel`, `Send Messages`,
  `Read Message History` and `Embed Links` in the channel.
* Next, start [configuring](#configuration) the module. This includes selecting the
  channel you just created as the starboard channel.

## Usage {#usage}

* Once [set up](#setup), users are able to react on messages using the configured starboard
  emoji.
* As long as they haven't used up their quota of stars per hour, the message will either be
  sent to the starboard channel or the amount of stars will be increased by one.

## Configuration {#configuration}

In this configuration file, you can [set up](#setup) the starboard channel, message and how users can use it in
Discord. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=starboard%7Cconfig).

| Field                   | Description                                                                                                                                                                                                                                                                    |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Starboard channel       | This configures the channel into which messages starred by users are sent.                                                                                                                                                                                                     |
| Emoji                   | Users can "star" a message by reacting on it with this emoji.                                                                                                                                                                                                                  |
| Message                 | This is the message sent in the starboard channel if users react to a message using the configured emoji. There available parameters are visible in your dashboard.                                                                                                            |
| Excluded channels       | These are channels in which users cannot star a message. Their reaction won't be removed, instead your bot silently ignores it.                                                                                                                                                |
| Excluded roles          | These are roles whose members cannot star a message. Their reaction won't be removed, instead your bot silently ignores it.                                                                                                                                                    |
| Minimum stars           | This is the minimum amount of stars a message needs to be sent to the starboard channel. Burst reactions count as a normal reaction.                                                                                                                                           |
| Stars per user per hour | This configures how many times a user can react on messages per hour. This uses a rolling window, so this value is set to 10 and a user reacts 5 times at 12:00 and 5 times at 12:59, they can react 5 times again at 13:00. Users will receive a DM once they hit this limit. |
| Self-Star               | This configures whether users can star their own messages. If a user reacts on a message they sent themselves, their reaction removed to prevent confusion.                                                                                                                    |

## Troubleshooting {#troubleshooting}

<details>
  <summary>Nothing happens when reacting</summary>
  <ul>
    <li>Make sure you selected a valid starboard channel and the bot has at least the permissions <code>View Channel</code>, <code>Send Messages</code>,
      <code>Read Message History</code> and <code>Embed Links</code> in it.</li>
    <li>Make sure the starboard emoji is entered correctly and valid.</li>
    <li>Make sure users are actually reacting with the starboard emoji.</li>
    <li>Make sure your configured starboard message is valid - check the error log in your dashboard to find errors.</li>
    <li>Make sure the users try to react haven't reached their star limit within the last hour. Consider increasing the limit or waiting until it ran out.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every starboard message sent by the bot:

* The message ID of the starred message
* The message ID of the message in the starboard channel
* Metadata about the entry (date when created and last updated)

The bot also stores the following data about every user that has reacted to a message:
* The user ID of the user
* The message ID of the message they starred
* Metadata about the entry (date when created and last updated)

Every day at 00:01 local time at the bot host location, all starboard user data older than one hour is removed from the database.
You can remove a starboard message from the database by removing all reactions from it. To
remove all starboard related data, [purge the module database](./../../additional-features#reset-module-database).
