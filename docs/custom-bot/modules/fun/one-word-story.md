# One-Word Story

Collaborative storytelling game where each member adds exactly one word at a time.

<ModuleOverview moduleName="one-word-story" />

## Features {#features}

- Designate one or more channels as story channels where members build a story together, one word per message.
- Configurable success reaction added to every accepted word, with optional auto-removal after 5 seconds.
- Anti-double-post protection: by default, a user cannot add two words in a row.
- Deletion protection: if the user who posted the most recent word deletes their message, the bot reposts the last accepted word so the story stays readable.
- Optional cap on maximum story length: once the cap is reached, no more words are accepted until a moderator ends the round.
- Optional idle hint that pings the moderator role once after a configurable number of hours of inactivity, suggesting the round be ended.
- Optional channel topic that updates after every accepted word with the latest word and total word count.
- Optional strike system that can restrict access for users who repeatedly post invalid messages.
- Milestones that reward users with roles or messages after contributing a configurable number of words to a single story.
- Archive channel: when a moderator ends a round, the finished story is posted (and pinned) in a separate archive channel together with a contributor list.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=one-word-story&ref=scnx-app-docs).
2. In the [configuration](#configuration), add at least one channel to the "Channels" list.
3. The bot needs the "Send Messages", "Add Reactions", "Manage Messages", and "Manage Channels" permissions in the configured channels (the last one is required for the channel topic feature). If you configure an archive channel, the bot also needs "Send Messages" and "Manage Messages" (for pinning) there.
4. Optionally configure a moderator role - members with this role (or with the "Manage Messages" permission, if no role is set) can run the mod-only commands.

## Usage {#usage}

In a configured story channel, members send messages containing exactly one word. The bot reacts with the configured success emoji to confirm the word was accepted, and optionally updates the channel topic. Invalid messages (more than one word, special characters, double-post by the same user, ...) are removed and the user is shown a brief hint that auto-deletes after 8 seconds.

When a moderator decides the round is done, they run [`/word-story end`](#commands). The full story is rendered into an embed with all contributors and (if configured) posted to the archive channel before the channel state is reset.

## Commands {#commands}

<SlashCommandExplanation />

| Command                          | Description                                                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `/word-story status`             | Shows the current word count and the last 30 words of the story (ephemeral).                                                                 |
| `/word-story full`               | Shows the full current story in an ephemeral embed.                                                                                          |
| `/word-story stats`              | Shows a top-15 contributor leaderboard for the active story (ephemeral).                                                                     |
| `/word-story end [title:<Text>]` | _Moderator-only._ Ends the active round, posts the finished story to the archive channel (if configured), and resets the channel for a new round. |
| `/word-story new [opening:<Word>]` | _Moderator-only._ Starts a fresh round in an empty channel. Optionally seeds the story with a single opening word.                          |

## Configuration {#configuration}

In this configuration file, you can configure the One-Word Story game. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=one-word-story%7Cconfig).

| Field                                                | Description                                                                                                                              |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Channels                                             | Channels in which the One-Word Story game runs.                                                                                          |
| Archive channel                                      | Channel where finished stories are posted (and pinned) when a moderator runs `/word-story end`. Leave empty to disable archiving.        |
| Moderator role                                       | Role required to run mod-only commands (`/word-story end`, `/word-story new`). Leave empty to require the "Manage Messages" permission. |
| Success-Reaction                                     | The emoji the bot reacts with when a word is accepted.                                                                                   |
| Remove reactions after 5 seconds?                    | If enabled, the success reaction is removed after 5 seconds to keep the channel clean.                                                   |
| Only one continuous message per user                 | If enabled, users cannot contribute two words in a row.                                                                                  |
| Message on wrong input                               | The message sent when a user provides invalid input (auto-deleted after 8 seconds).                                                      |
| Protect against users deleting the last word?        | If enabled, the bot reposts the last accepted word if its message gets deleted.                                                          |
| Deletion protection message                          | _Only visible if deletion protection is enabled._ The message sent when a user deletes the last accepted word.                           |
| Cap maximum story length?                            | If enabled, no further words are accepted once the story reaches the configured length. A moderator must run `/word-story end` to start a new round. |
| Maximum story length                                 | _Only visible if the cap is enabled._ Number of words at which the round automatically locks.                                            |
| Message when story reaches the cap                   | _Only visible if the cap is enabled._ Sent the first time the cap is hit in a round. Subsequent over-cap messages are deleted silently.  |
| Send idle hint to moderators?                        | If enabled, the moderator role is pinged once after a configurable number of hours without a new word, suggesting the round be ended.    |
| Idle hint after X hours                              | _Only visible if the idle hint is enabled._ Hours of inactivity before the moderator role is pinged.                                     |
| Idle hint message                                    | _Only visible if the idle hint is enabled._ The message used for the idle ping.                                                          |
| Restrict users who repeatedly post invalid messages? | If enabled, users who reach the configured threshold of wrong messages are restricted (either by removing their "Send Messages" permission or by adding a strike role). |
| Amount of wrong messages to trigger action           | _Only visible if strikes are enabled._ Wrong messages a user has to send to trigger restriction.                                         |
| Give role on action, instead of removing permission  | _Only visible if strikes are enabled._ If enabled, the strike role is added to the user instead of removing their "Send Messages" permission. |
| Role given when strike threshold reached             | _Only visible if the option above is enabled._ The role given to users when they reach the strike threshold.                             |
| Message when user gets actioned                      | _Only visible if strikes are enabled._ The message sent when a user reaches the configured strike count.                                 |
| Channel topic template (leave blank to disable)      | Channel topic set after each accepted word. Available placeholders: `%lastword%`, `%firstword%`, `%count%`.                              |

### Milestones {#config-milestones}

In this configuration file, you can set up milestones to reward users for contributing words to a single story. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=one-word-story%7Cmilestones).

| Field      | Description                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------- |
| Word count | The number of accepted words a user must contribute in a single story to reach this milestone. |
| Roles      | Roles given to the user when they reach this milestone (optional).                            |
| Message    | A congratulatory message sent when the user reaches this milestone (auto-deleted after 10 seconds). |

## Troubleshooting {#troubleshooting}

<details>
  <summary>The bot is not reacting to messages in the story channel</summary>
  <ul>
    <li>Make sure the channel is added to the "Channels" list in the configuration.</li>
    <li>Make sure the bot has the "Add Reactions", "Send Messages", and "Manage Messages" permissions in the channel.</li>
  </ul>
</details>
<details>
  <summary>The channel topic is not updating</summary>
  <ul>
    <li>Make sure the bot has the "Manage Channels" permission in the story channel.</li>
    <li>Discord rate-limits channel topic edits aggressively - it may take a moment for the topic to update after a flurry of words.</li>
  </ul>
</details>
<details>
  <summary>Finished stories are not being archived</summary>
  <ul>
    <li>Make sure an archive channel is configured.</li>
    <li>Make sure the bot has "Send Messages" and "Manage Messages" (for pinning) permissions in the archive channel.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every story channel:

- The channel ID
- The list of accepted words, each with the contributing user ID and message ID
- A count of accepted words per contributing user
- The ID of the user who posted the most recent word
- Timestamps for when the round started and when the last word was added
- Internal flags used for cap warnings and idle hints

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
