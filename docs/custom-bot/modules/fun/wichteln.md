# Secret Santa

Run a Secret Santa on your server: members sign up, get a giftee drawn at random, and mark their gifts as sent and received.

<ModuleOverview moduleName="wichteln" />

## Features {#features}

- Members join with a button on a signup message and write a letter with their wishes, hobbies and things to avoid.
- Every participant gets exactly one giftee and is the giftee of exactly one other member. Nobody draws themselves.
- The round starts by itself at a date you set, or manually with `/wichteln start`. Until then, the bot shows a "starts at" message with a live countdown.
- The draw happens automatically at a date you set, or manually with `/wichteln draw`.
- After the draw, every Secret Santa receives a private message with the giftee and their letter.
- Secret Santas mark their gift as sent, and giftees mark it as received, with buttons.
- Optional letter requirement, gift reminders and a reveal post at the end of the round.
- Members can leave with the Leave button of their join confirmation. After the draw, members who press "Leave" or are removed with `/wichteln kick` are replaced in the gift chain. Members who leave the server itself are not repaired automatically, so use `/wichteln kick` for them.
- Every text, button label and message is editable.
- If the dashboard message is deleted by accident, the bot posts it again.
- The module is opt-in: nothing happens until an admin starts a round with `/wichteln start` or you set a start date.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=wichteln&ref=scnx-app-docs).
2. Open the [configuration](#configuration-config) and select the "Secret Santa Channel". The bot needs the "View Channel", "Send Messages" and "Embed Links" permissions there.
3. Optionally set the [dates](#dates), a "Reveal Channel", a "Log Channel" and the texts in the [messages](#configuration-messages) (for example the optional budget in "Budget Text").
4. Start a round with `/wichteln start`, or set the "Start" date and the bot opens the sign-up by itself. The bot posts the signup message in the Secret Santa channel.

## Usage {#usage}

### Start {#start}

A round starts in one of two ways:

- **Manually:** `/wichteln start` opens the sign-up right away. If a round is already scheduled, the command starts it now.
- **Automatically:** set the "Start" date. Until then, the bot posts a "starts at" message in the Secret Santa channel with a live countdown, so the channel always has a dashboard. At the start time, the same message turns into the signup message and the bot writes a line in the log channel.

The automatic start has some rules:

- The Secret Santa Channel needs to be set and usable. Otherwise nothing is posted, the problem is reported once in the log channel and the bot log, and the bot tries again every hour.
- A start date that has already passed starts the round at the next hourly check, but only up to 7 days after the date. Later than that, nothing happens.
- Every start date starts one round. After it has started, been cancelled or finished, the same date does not start another one. Set a new date for the next round.
- No round is scheduled or started while another round is running.
- If you change the date while the round is scheduled, the countdown moves with it. If you clear it, the scheduled round is cancelled.
- Members cannot join the scheduled round. They can join once the sign-up has opened.

### Signup {#signup}

The signup message shows the rules, the signup deadline and the number of participants, and the budget if you have set one. Members use the buttons below it:

- **Join** adds the member to the round.
- **Write letter** opens a window where the member writes their letter. The letter can be changed until the draw.

When a member presses **Join**, they get a private confirmation with the buttons **Write letter** and **Leave**. To leave before the draw, a member presses **Join** again and then **Leave**. The same buttons appear when someone who is already in the round presses **Join**.

The bot posts the signup message again if it is deleted. This happens at the next hourly check or when someone presses a button. Rounds that have already ended keep their message deleted.

Joining is possible until the signup deadline, or until the draw if you have not set a deadline. Members need to allow direct messages from server members, otherwise the bot cannot reach them.

Other members cannot see the letter. After the draw, the member's Secret Santa receives it by direct message.

### Draw {#draw}

At least 3 participants are needed. If there are fewer, the round is cancelled. The draw runs automatically at the configured draw date. If you leave the draw date empty, the round is drawn only when an admin runs `/wichteln draw`.

If "Require Letter" is enabled, members without a letter receive a warning about a day before the automatic draw. Members who still have no letter at the draw are left out and are told so by a direct message. Members without a letter get a warning, not a reminder, and only when a draw date is set.

### Gifting {#gifting}

After the draw, every Secret Santa gets a direct message with their giftee and the letter. The buttons on the dashboard message show the giftee again and mark the gift:

- The Secret Santa presses **Gift sent**. The giftee receives a direct message with a **Gift received** button.
- The giftee presses **Gift received** to confirm.

If you set "Reminder Days Before Reveal", Secret Santas who have not yet marked their gift as sent receive a reminder that many days before the reveal.

### Reveal and end of the round {#reveal}

At the reveal date, the bot posts a message in the reveal channel that lists who gifted whom, followed by the totals of sent and received gifts. The totals are a separate message that is posted only if its text in the messages configuration is not empty. The round then finishes and the dashboard message shows the closing text. The pairs are public in the reveal channel. A long list of pairs is split over several messages, and the continuation messages use the "Reveal Post Continuation" text. The round ends at the reveal date, or up to 3 days later if the reveal post could not be posted. Without a reveal date, the round finishes 14 days after the draw. Without a reveal channel, no reveal post is made and the round still ends at the reveal date.

### Members who leave {#repair}

If a member presses "Leave" or is removed by an admin after the draw, the bot repairs the gift chain: the Secret Santa of the missing member gets the missing member's giftee, and both sides are told by a direct message. If fewer than 3 participants remain, the round is cancelled.

**Limitation:** the bot does not notice when a member leaves the server itself. Their gift chain stays as it is until an admin removes them with `/wichteln kick user:<User>`.

### Dates {#dates}

The start, the sign-up deadline, the draw and the reveal are each set with one date and time field. The times are read in the timezone of your server (the bot timezone). Every date is absolute, including the year, so set the real dates for each round. A date you leave empty is not used.

- **Start:** the bot opens the sign-up at this time, see [Start](#start). Leave it empty to start manually with `/wichteln start`. A start in the past is allowed and starts the round at the next hourly check, up to 7 days after the date.
- **Sign-up Deadline:** members can no longer join afterwards. Without a deadline, members can sign up until the draw. A deadline that is already in the past stops `/wichteln start`, because nobody could join.
- **Draw:** the bot draws automatically at this time. Leave it empty to draw only manually with `/wichteln draw`.
- **Reveal:** the reveal post is published at this time and the round ends.

If the draw or reveal date has already passed when the round is started, the matching step runs at the next hourly check. For example, starting a round after the configured draw date draws it right away. The scheduler runs once per hour, so automatic steps happen up to about an hour after the configured time.

If you type an invalid or out-of-range date by hand into the configuration file, the bot resets that field to empty when it loads the file and writes a warning to the bot log.

## Commands {#commands}

<SlashCommandExplanation />

All commands require the "Manage Server" permission.

| Command                      | Description                                                                                                    |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `/wichteln start`            | Starts a new round and posts the signup message in the Secret Santa channel. A scheduled round is started now. |
| `/wichteln draw`             | Draws the giftees now, without waiting for the draw date.                                                      |
| `/wichteln cancel`           | Cancels the current round, scheduled or running.                                                               |
| `/wichteln kick user:<User>` | Removes a member from the round. After the draw, the gift chain is repaired.                                   |

Only one round can be active at a time. A scheduled round counts as active.

## Configuration {#configuration}

### Configuration {#configuration-config}

In this configuration file, you can set up the channels, dates and rules of the Secret Santa. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=wichteln%7Cconfigs/wichteln).

| Field                       | Description                                                                                                                                                                                                                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Secret Santa Channel        | Channel where the signup message is posted. Members join, write letters and mark gifts here.                                                                                                                                                                                             |
| Reveal Channel              | Channel where the reveal post is published at the end of the round.                                                                                                                                                                                                                      |
| Log Channel                 | Optional channel that receives a log line for joins, leaves, sent and received gifts, kicks, cancellations, the automatic start, a restored dashboard and the draw. Log lines do not name who gifts whom unless you add the participant placeholders to the sent and received log texts. |
| Require Letter              | If enabled, only members who wrote a letter before the draw take part. Members without a letter get a warning about a day before the draw and are left out, with a direct message, if they still have none at the draw.                                                                  |
| Reminder Days Before Reveal | Days before the reveal on which Secret Santas who have not yet sent their gift receive a reminder. 0 disables the reminder.                                                                                                                                                              |
| Start                       | The bot posts a "starts at" message in the Secret Santa channel until this time and then opens the sign-up by itself, no command needed. Leave empty to start manually with /wichteln start. The time is read in the bot's timezone.                                                     |
| Sign-up Deadline            | Sign-up closes at this time. Members can no longer join afterwards. Leave empty for no deadline. The time is read in the bot's timezone.                                                                                                                                                 |
| Draw                        | The draw runs automatically at this time. Leave empty to draw manually with /wichteln draw only. The time is read in the bot's timezone.                                                                                                                                                 |
| Reveal                      | The reveal post is published at this time and the round ends. The time is read in the bot's timezone.                                                                                                                                                                                    |

### Messages {#configuration-messages}

In this configuration file, you can edit every text of the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=wichteln%7Cconfigs/wichteln-messages). The following placeholders can be used, written with a percent sign in front, for example `%giftee%`. Each message lists the placeholders it supports in the dashboard.

| Message group   | Contents                                                                                                                                                                                                                                             | Placeholders                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Dashboards      | The scheduled, signup, drawn, finished and cancelled messages in the Secret Santa channel, plus the rules and the optional budget. The budget is empty by default. Write it in "Budget Text" and add `%budget%` to the messages that should show it. | `%budget%`, `%deadline%`, `%start%`, `%relative%`, `%count%`, `%sent%`, `%received%`, `%server%` |
| Buttons         | Labels of the Join, Letter, Leave, Giftee, Sent and Received buttons and the letter window.                                                                                                                                                          | none                                                                                             |
| Direct messages | The draw message, sent and received notices, letter warnings, reminders, repair notices and removal notice.                                                                                                                                          | `%giftee%`, `%letter%`, `%budget%`, `%deadline%`, `%server%`                                     |
| Replies         | Short private answers when members or admins press a button or use a command. The join answers come with the Write letter and Leave buttons.                                                                                                         | `%giftee%`, `%letter%`, `%count%`, `%user%`, `%server%`                                          |
| Reveal          | The reveal post and the totals message. Leave the totals empty to skip it.                                                                                                                                                                           | `%pairs%`, `%count%`, `%sent%`, `%received%`                                                     |
| Log             | Lines for joins, leaves, sent and received gifts, removals, cancellations and the draw. By default, sent and received lines do not name anyone, so the pairs stay secret until the reveal.                                                           | `%user%`, `%count%`, and optionally `%santa%` and `%giftee%` in the sent and received lines      |
| Problems        | The texts of the configuration problems: the refusal when a round cannot be started, the warnings, the log line and the description of each problem.                                                                                                 | `%setting%`, `%problem%`, `%warnings%`, `%detail%`, `%channel%`, `%permissions%`                 |

## Troubleshooting {#troubleshooting}

### Configuration problems {#config-problems}

The module checks your configuration when the bot starts, when you use `/wichteln start` and every hour while a round is active, and tells you when a setting stops it from doing something instead of staying silent.

- The automatic start does not start a round with an error, such as a missing Secret Santa Channel or a sign-up deadline in the past. It reports the error like the other problems and tries again every hour.
- `/wichteln start` refuses to start a round when the "Secret Santa Channel" is not set, cannot be found or is missing permissions. The private reply names the setting and what is wrong. Other problems are shown in a second private message after the round was started. `/wichteln draw` shows problems with the reveal channel, the reveal date and the reminders.
- In the "Log Channel", each problem is posted once per round and per bot start. It is only posted again if you fix the problem and it comes back.
- The bot log contains the same lines. Problems with the "Log Channel" itself are only reported there.
- Hints without a consequence for a working setup, such as a missing draw date, are only shown when you start a round.

| Problem                                                               | Consequence                                                     |
| --------------------------------------------------------------------- | --------------------------------------------------------------- |
| Secret Santa Channel not set, not found or missing permissions        | The round cannot be started.                                    |
| Reveal date set, but no Reveal Channel, or the channel cannot be used | No reveal post is sent.                                         |
| Reveal Channel set, but no reveal date                                | No reveal post is sent.                                         |
| Reminder Days Before Reveal set, but no reveal date                   | No gift reminders are sent.                                     |
| Require Letter enabled, but no draw date                              | Members get no letter warning before the draw.                  |
| No draw date                                                          | The draw is not automatic. Use `/wichteln draw`.                |
| No signup deadline                                                    | Members can sign up until the draw.                             |
| Dates in the wrong order                                              | A step can run before the one it should follow.                 |
| Sign-up Deadline is already in the past when the round starts         | The round cannot be started. Change or clear the deadline.      |
| Start date set, but the Secret Santa Channel is unusable              | Nothing is posted. The bot retries every hour for 7 days.       |
| Draw or Reveal date is already in the past when the round starts      | The step runs at the next hourly check.                         |
| Log Channel not found or missing permissions                          | Log lines are lost. Only the bot log reports this.              |
| Dashboard message deleted while the round is running                  | The bot posts it again. If the channel is gone, it is reported. |
| Automatic draw with fewer than 3 participants                         | The round is cancelled.                                         |

You can edit all of these texts in the "Problems" group of the [messages](#configuration-messages).

<details>
    <summary>The signup message is not posted</summary>
    <ul>
        <li>If the bot names a setting when you use <code>/wichteln start</code>, fix it as described in <a href="#config-problems">Configuration problems</a>.</li>
        <li>Make sure a "Secret Santa Channel" is set in the configuration.</li>
        <li>With a "Start" date, the message appears at the next hourly check. A date more than 7 days in the past is ignored.</li>
        <li>Ensure the bot has the "View Channel", "Send Messages" and "Embed Links" permissions in that channel.</li>
        <li>Only one round can be active. Cancel the current round with <code>/wichteln cancel</code> first.</li>
    </ul>
</details>
<details>
    <summary>A member did not get their direct message</summary>
    <ul>
        <li>The member must allow direct messages from server members. If the draw message or a repair message cannot be delivered, this is only reported in the Log Channel, if you set one. The member can still use "Show my giftee" on the dashboard message.</li>
        <li>If a Secret Santa presses "Gift sent" and the giftee cannot be reached by direct message, the gift is not marked as sent and the Secret Santa is told to try again later.</li>
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

- The year, the phase of the round, the start time it was created for and the signup message
- The time of the draw and the end of the round

The data of a round is deleted automatically 30 days after the round ends. To remove all data stored by this module right away, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
