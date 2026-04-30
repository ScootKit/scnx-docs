# Word Chain

Word-association game (Szólánc / letzter-Buchstabe-Spiel) where each new word must start with the last letter of the previous word.

<ModuleOverview moduleName="word-chain" />

## Features {#features}

- Designate one or more channels as word-chain channels where members build a chain of words.
- Configurable minimum word length to discourage trivial submissions.
- Optional "no repeats" rule: a word can only appear once per chain.
- Optional German ß ↔ ss equivalence: when enabled, a trailing `ß` is treated as equivalent to `ss` for last-letter matching.
- Optional restart-on-wrong-word: any invalid input resets the chain (otherwise the invalid message is removed and the chain continues).
- Anti-double-post protection: by default, a user cannot post two words in a row.
- Deletion protection: if a user deletes their last accepted word, the bot reposts it together with the required next-letter so the chain stays clear.
- Configurable success reaction with optional auto-removal after 5 seconds.
- Optional channel topic that updates after every accepted word with the last word, the required next letter, and the current chain length.
- Optional strike system that can restrict access for users who repeatedly post invalid messages.
- Milestones that reward users with roles or messages after contributing a configurable number of words to a single chain.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=word-chain&ref=scnx-app-docs).
2. In the [configuration](#configuration), add at least one channel to the "Channels" list.
3. The bot needs the "Send Messages", "Add Reactions", "Manage Messages", and "Manage Channels" permissions in the configured channels (the last one is required for the channel topic feature).
4. Optionally configure a moderator role - members with this role (or with the "Manage Messages" permission, if no role is set) can run the `/word-chain reset` command.

## Usage {#usage}

In a configured chain channel, members send single words. Each new word must start with the last letter of the previous accepted word. The bot reacts with the configured success emoji to confirm the word was accepted, and optionally updates the channel topic with the required next letter. Invalid messages (wrong starting letter, too short, repeated, double-post by the same user, ...) are either removed (and the user shown a brief hint) or - if "Restart chain when a user posts an invalid word?" is enabled - cause the chain to reset.

## Commands {#commands}

<SlashCommandExplanation />

| Command                            | Description                                                                                                            |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `/word-chain status`               | Shows the last word, the required next letter, the current chain length, and the longest chain so far (ephemeral).     |
| `/word-chain stats`                | Shows a top-15 contributor leaderboard for the active chain plus the longest-chain record (ephemeral).                 |
| `/word-chain reset [reason:<Text>]` | _Moderator-only._ Resets the chain back to an empty state. The optional reason is included in the public reset message. |

## Configuration {#configuration}

In this configuration file, you can configure the Word Chain game. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=word-chain%7Cconfig).

| Field                                                | Description                                                                                                                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Channels                                             | Channels in which the Word Chain game runs.                                                                                                                  |
| Minimum word length                                  | Minimum number of letters a word must have to be accepted.                                                                                                   |
| Allow repeated words?                                | If disabled, a word can only appear once per chain.                                                                                                          |
| Treat ß and ss as equivalent (German only)           | If enabled, a trailing `ß` is treated as equivalent to `ss` for last-letter matching.                                                                        |
| Moderator role                                       | Role required to run `/word-chain reset`. Leave empty to require the "Manage Messages" permission.                                                           |
| Success-Reaction                                     | The emoji the bot reacts with when a valid word is accepted.                                                                                                 |
| Remove reactions after 5 seconds?                    | If enabled, the success reaction is removed after 5 seconds to keep the channel clean.                                                                       |
| Only one continuous message per user                 | If enabled, users cannot post two words in a row.                                                                                                            |
| Message on wrong input                               | Sent when a user provides invalid input (auto-deleted after 8 seconds).                                                                                      |
| Restart chain when a user posts an invalid word?     | If enabled, any invalid input resets the chain.                                                                                                              |
| Message when chain resets                            | _Only visible if the option above is enabled._ Sent in the channel when the chain resets due to an invalid word.                                             |
| Protect against users deleting the last word?        | If enabled, the bot reposts the last accepted word if its message gets deleted.                                                                              |
| Deletion protection message                          | _Only visible if deletion protection is enabled._ Sent when a user deletes the last accepted word.                                                           |
| Restrict users who repeatedly post invalid messages? | If enabled, users who reach the configured threshold of wrong messages are restricted (either by removing their "Send Messages" permission or by adding a strike role).        |
| Amount of wrong messages to trigger action           | _Only visible if strikes are enabled._ Wrong messages a user has to send to trigger restriction.                                                             |
| Give role on action, instead of removing permission  | _Only visible if strikes are enabled._ If enabled, the strike role is added instead of removing the "Send Messages" permission.                              |
| Role given when strike threshold reached             | _Only visible if the option above is enabled._ The role given to users when they reach the strike threshold.                                                 |
| Message when user gets actioned                      | _Only visible if strikes are enabled._ The message sent when a user reaches the configured strike count.                                                     |
| Channel topic template (leave blank to disable)      | Channel topic set after each accepted word. Available placeholders: `%lastword%`, `%nextletter%`, `%count%`.                                                 |

### Milestones {#config-milestones}

In this configuration file, you can set up milestones to reward users for contributing words to a single chain. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=word-chain%7Cmilestones).

| Field      | Description                                                                                |
| ---------- | ------------------------------------------------------------------------------------------ |
| Word count | The number of accepted words a user must contribute in a single chain to reach this milestone. |
| Roles      | Roles given to the user when they reach this milestone (optional).                          |
| Message    | A congratulatory message sent when the user reaches this milestone (auto-deleted after 10 seconds). |

## Troubleshooting {#troubleshooting}

<details>
  <summary>The bot is not reacting to messages in the chain channel</summary>
  <ul>
    <li>Make sure the channel is added to the "Channels" list in the configuration.</li>
    <li>Make sure the bot has the "Add Reactions", "Send Messages", and "Manage Messages" permissions in the channel.</li>
  </ul>
</details>
<details>
  <summary>Valid-looking words are being rejected</summary>
  <ul>
    <li>Check that the word starts with the correct letter - run <code>/word-chain status</code> to see the required next letter.</li>
    <li>Make sure the word meets the configured minimum length.</li>
    <li>If "Allow repeated words?" is disabled, the word may already have been used in this chain.</li>
    <li>For German chains: enable the "Treat ß and ss as equivalent" option if you want words like "Fluss" to follow "weiß".</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every chain channel:

- The channel ID
- The list of words used in the current chain (for the "no repeats" check)
- The most recent accepted word and the user who posted it
- A count of accepted words per contributing user
- The current chain length and the longest-ever chain length
- Timestamps for when the chain started and when the last word was added

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
