# Secret Santa

Run a Secret Santa on your server: members sign up, get a giftee drawn at random, and mark their gifts as sent and received.

<ModuleOverview moduleName="wichteln" />

## Features {#features}

- Members join with a button on a signup message and write a letter with their wishes, hobbies and things to avoid.
- Every participant gets exactly one giftee and is the giftee of exactly one other member. Nobody draws themselves.
- The draw happens automatically at a date you set, or manually with `/wichteln draw`.
- After the draw, every Secret Santa receives a private message with the giftee and their letter.
- Secret Santas mark their gift as sent, and giftees mark it as received, with buttons.
- Optional letter requirement, gift reminders and a reveal post at the end of the round.
- Members who leave or are removed are replaced in the gift chain automatically.
- Every text, button label and message is editable.
- The module is opt-in: nothing happens until an admin starts a round with `/wichteln start`.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=wichteln&ref=scnx-app-docs).
2. Open the [configuration](#configuration-config) and select the "Secret Santa Channel". The bot needs the "View Channel", "Send Messages" and "Embed Links" permissions there.
3. Optionally set the [dates](#dates), a "Reveal Channel", a "Log Channel" and the texts in the [messages](#configuration-messages) (for example the budget in "Budget Text").
4. Start a round with `/wichteln start`. The bot posts the signup message in the Secret Santa channel.

## Usage {#usage}

### Signup {#signup}

The signup message shows the budget, the rules, the signup deadline and the number of participants. Members use the buttons below it:

- **Join** adds the member to the round.
- **Write letter** opens a window where the member writes their letter. The letter can be changed until the draw.
- **Leave** removes the member from the round.

Joining is possible until the signup deadline, or until the draw if you have not set a deadline. Members need to allow direct messages from server members, otherwise the bot cannot reach them.

The letter is visible to the member's Secret Santa after the draw and to admins. Other members never see it.

### Draw {#draw}

At least 3 participants are needed. If there are fewer, the round is cancelled. The draw runs automatically at the configured draw date. If you leave the draw date empty, the round is drawn only when an admin runs `/wichteln draw`.

If "Require Letter" is enabled, members without a letter receive a reminder about a day before the automatic draw. Members who still have no letter at the draw are left out and are told so by a direct message.

### Gifting {#gifting}

After the draw, every Secret Santa gets a direct message with their giftee and the letter. The buttons on the dashboard message show the giftee again and mark the gift:

- The Secret Santa presses **Gift sent**. The giftee receives a direct message with a **Gift received** button.
- The giftee presses **Gift received** to confirm.

If you set "Reminder Days Before Reveal", Secret Santas who have not yet marked their gift as sent receive a reminder that many days before the reveal.

### Reveal and end of the round {#reveal}

At the reveal date, the bot posts a message in the reveal channel that lists who gifted whom, followed by the totals of sent and received gifts. The round then finishes and the dashboard message shows the closing text. The pairs are public in the reveal channel. Without a reveal date, the round finishes 14 days after the draw. Without a reveal channel, no reveal post is made.

### Members who leave {#repair}

If a member presses "Leave" or is removed by an admin after the draw, the bot repairs the gift chain: the Secret Santa of the missing member gets the missing member's giftee, and both sides are told by a direct message. If fewer than 3 participants remain, the round is cancelled.

### Dates {#dates}

The signup deadline, the draw and the reveal each use three fields: month, day and hour. The times use the timezone of your server (the bot timezone). Setting the month to 0 leaves a date unset.

The year is not entered. The bot picks it automatically: a later date that is earlier in the calendar than the previous date belongs to the next year. For example, a deadline on November 20, a draw on December 1 and a reveal on January 6 spans the turn of the year.

## Commands {#commands}

<SlashCommandExplanation />

All commands require the "Manage Server" permission.

| Command                      | Description                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------- |
| `/wichteln start`            | Starts a new round and posts the signup message in the Secret Santa channel. |
| `/wichteln draw`             | Draws the giftees now, without waiting for the draw date.                    |
| `/wichteln cancel`           | Cancels the current round.                                                   |
| `/wichteln kick user:<User>` | Removes a member from the round. After the draw, the gift chain is repaired. |

Only one round can be active at a time.

## Configuration {#configuration}

### Configuration {#configuration-config}

In this configuration file, you can set up the channels, dates and rules of the Secret Santa. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=wichteln%7Cconfigs/wichteln).

| Field                       | Description                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Secret Santa Channel        | Channel where the signup message is posted. Members join, write letters and mark gifts here.                                |
| Signup Deadline Month       | Month of the signup deadline (1-12). 0 means not set.                                                                       |
| Signup Deadline Day         | Day of the month of the signup deadline (1-31).                                                                             |
| Signup Deadline Hour        | Hour of the signup deadline (0-23, server time).                                                                            |
| Draw Month                  | Month of the automatic draw (1-12). 0 means not set.                                                                        |
| Draw Day                    | Day of the month of the automatic draw (1-31).                                                                              |
| Draw Hour                   | Hour of the automatic draw (0-23, server time).                                                                             |
| Reveal Month                | Month of the reveal (1-12). 0 means not set.                                                                                |
| Reveal Day                  | Day of the month of the reveal (1-31).                                                                                      |
| Reveal Hour                 | Hour of the reveal (0-23, server time).                                                                                     |
| Reveal Channel              | Channel where the reveal post is published at the end of the round.                                                         |
| Log Channel                 | Optional channel that receives a log line for joins, leaves, sent and received gifts, kicks, cancellations and the draw.    |
| Require Letter              | If enabled, only members who wrote a letter before the draw take part. Everyone else is left out and receives a reminder.   |
| Reminder Days Before Reveal | Days before the reveal on which Secret Santas who have not yet sent their gift receive a reminder. 0 disables the reminder. |

### Messages {#configuration-messages}

In this configuration file, you can edit every text of the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=wichteln%7Cconfigs/wichteln-messages). The following placeholders can be used, written with a percent sign in front, for example `%giftee%`. Each message lists the placeholders it supports in the dashboard.

| Message group   | Contents                                                                                                    | Placeholders                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Dashboards      | The signup, drawn, finished and cancelled messages in the Secret Santa channel, plus the budget and rules.  | `%budget%`, `%deadline%`, `%count%`, `%sent%`, `%received%`, `%server%` |
| Buttons         | Labels of the Join, Letter, Leave, Giftee, Sent and Received buttons and the letter window.                 | none                                                                    |
| Direct messages | The draw message, sent and received notices, letter warnings, reminders, repair notices and removal notice. | `%giftee%`, `%letter%`, `%budget%`, `%deadline%`, `%server%`            |
| Replies         | Short private answers when members or admins press a button or use a command.                               | `%giftee%`, `%letter%`, `%count%`, `%user%`, `%server%`                 |
| Reveal          | The reveal post and the totals message. Leave the totals empty to skip it.                                  | `%pairs%`, `%count%`, `%sent%`, `%received%`                            |
| Log             | Lines for joins, leaves, sent and received gifts, removals, cancellations and the draw.                     | `%user%`, `%santa%`, `%giftee%`, `%count%`                              |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The signup message is not posted</summary>
    <ul>
        <li>Make sure a "Secret Santa Channel" is set in the configuration.</li>
        <li>Ensure the bot has the "View Channel", "Send Messages" and "Embed Links" permissions in that channel.</li>
        <li>Only one round can be active. Cancel the current round with <code>/wichteln cancel</code> first.</li>
    </ul>
</details>
<details>
    <summary>A member did not get their direct message</summary>
    <ul>
        <li>The member must allow direct messages from server members. The bot tells them when a message could not be delivered.</li>
        <li>The member can press "Show my giftee" on the dashboard message at any time to see their giftee again.</li>
    </ul>
</details>
<details>
    <summary>The round was cancelled at the draw</summary>
    <ul>
        <li>At least 3 participants are needed. With "Require Letter" enabled, members without a letter do not count.</li>
    </ul>
</details>
<details>
    <summary>There is no reveal post</summary>
    <ul>
        <li>Set a "Reveal Channel" and a reveal date in the configuration.</li>
        <li>Ensure the bot can send messages in the reveal channel.</li>
    </ul>
</details>

## Stored data {#data-usage}

The following data is stored about every participant:

- The Discord user ID of the participant and of their giftee
- The letter the participant wrote
- Whether the gift was sent and received, and whether a reminder was sent
- Whether the participant was removed from the round
- Metadata about the entry (date when created and last updated)

The following data is stored about every round:

- The year, the phase of the round and the signup message
- The time of the draw and the end of the round

The data of a round is deleted automatically 30 days after the round ends. To remove all data stored by this module right away, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
