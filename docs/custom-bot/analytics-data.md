# Analytics: what is collected

Analytics counts activity on your server so you can see how busy it is, which channels people use, and how your membership changes over time. This page describes exactly what is recorded, where it is stored, and what you and your members can do about it.

You are welcome to link your members to this page.

## The short version

- Analytics records **counts and timestamps**, never the text of anything.
- The data lives in **your own bot's database**, on the bot hosting ScootKit runs for you. It is not pooled into a shared SCNX analytics service.
- **You** decide whether it runs at all, what you use it for, and whether members can opt out. In data-protection terms you are the controller for it.
- Nothing is collected until you switch analytics on.

## What is recorded

Everything below is a number or a date. There is no message text anywhere in it.

### Server totals, per day and per hour

| What                                     | Recorded as      |
| ---------------------------------------- | ---------------- |
| Messages sent                            | A count          |
| Slash commands used, and how many failed | A count          |
| Reactions added                          | A count          |
| Time spent in voice channels             | Total seconds    |
| Threads created                          | A count          |
| Members joining and leaving              | A count each     |
| Members posting for the first time       | A count          |
| Members and bots on the server           | A daily snapshot |

### Automated moderation

A count per day of how often each kind of automatic moderation triggered, for example a blocked invite link or a spam burst. Only the kind of trigger and how many times it fired are recorded. Who triggered it is not part of this figure.

### Per channel

Message counts per channel, per day. Which channels are busiest, and which have gone quiet.

### Per role

Message counts per role, per day. Which parts of your community are active.

### Per member

Message counts, reaction counts and voice seconds per member, per day, plus a lifetime message total, the date of their first message, and the date they were last active. This is what powers the most-active-members list and each member's own `/mystats`.

### Recent activity records

A capped list of recent individual events, each holding only an event type, a member ID, a channel ID and a timestamp. It exists so activity can be examined in detail for a short period. It has a fixed size limit and older records are discarded automatically as new ones arrive, so on a busy server it covers days and on a quiet one it covers months.

## What is not recorded

- **The text of messages.** Analytics never stores it, never reads it and never asks for it. Counting a message works on a payload that has no text in it, and analytics does not request the Discord permission that would fill that in. This is a property of how analytics connects to Discord, not a promise about what it chooses to ignore. Some other modules do need message text to do their job at all, so if you have any of those switched on your bot does request that permission for them. It makes no difference here: nothing in analytics reads a message's text, and there is no field anywhere in the analytics data that could hold one.
- **Attachments, images, files or links.** None of their contents, and no counts of them either.
- **Message edits or deletions.**
- **Direct messages.** Only activity in the server itself is counted.
- **Anything from channels your bot cannot see.** If the bot has no access to a channel, that channel does not appear in analytics at all.
- **Bots.** Other bots' messages and commands are ignored entirely.

## Where the data is stored

In your own bot's database. Your bot runs on a Bot-Host, one of the physical servers ScootKit operates for exactly that purpose, so that database sits on ScootKit's hosting rather than on a machine of your own. You choose which Bot-Host your bot uses, and Bot-Hosts sit in different regions, so that choice is also what decides which country this data physically sits in. See [Change Bot-Host](/docs/scnx/guilds/bots#bot-host).

ScootKit handles the data for you, on your instructions, under the [Data Processing Agreement](https://corp.scootkit.com/docs/scnx/policies/data-processing-agreement/) that is part of your SCNX contract. In the wording of that agreement, you are the controller and ScootKit is the processor. The companies ScootKit uses to run the hosting are listed as sub-processors on your server's Policy & Compliance tab.

Two things are easily confused with this, and both are worth being exact about:

- Your figures are **not** pooled into a shared SCNX analytics service. They stay your server's own and are not merged with any other server's.
- The dashboard keeps **no copy** of them. When you open the analytics tab, it asks your bot for the figures at that moment and displays them without storing them.

That second point is why the analytics tab needs your bot to be running. If your bot is stopped, the tab will tell you so rather than showing you old numbers.

## How long it is kept

| Data                                                          | Kept for                                           |
| ------------------------------------------------------------- | -------------------------------------------------- |
| Daily and hourly totals, per channel, per role and per member | Indefinitely, until you delete it                  |
| Recent activity records                                       | Until the size limit is reached, then oldest first |

## Who is responsible for this data

**You are responsible for your members' activity data**, not SCNX. You are the controller for it: you decide whether analytics runs at all, what you use the figures for, whether members can opt out, and when data is deleted. ScootKit processes it for you, on your instructions, under the [Data Processing Agreement](https://corp.scootkit.com/docs/scnx/policies/data-processing-agreement/) that comes with your SCNX contract.

That is also why the member opt-out is something you switch on rather than something that is always present. Whether your server needs one depends on your community and on the rules that apply to you, and that judgement is yours to make.

## Letting members opt out

Analytics has a setting called **Let members opt out of analytics**. It is off by default.

When you switch it on, members can run `/analytics-privacy` in your server to stop being individually counted.

For a member who opts out:

- Their existing per-day activity records are made anonymous, and their lifetime totals, first-message date and last-active date are cleared.
- Their recent activity records are removed.
- Future activity is still counted in your server totals, but is never linked to them.

Server totals do not change when someone opts out. Their messages genuinely happened and still count towards how busy your server is. What disappears is the link between those messages and the person.

Opting out takes effect straight away. A member can opt back in later, but data already removed is not restored.

:::note
Because role activity is counted per role rather than per person, a role with only one or two members can still indicate who was active. Bear that in mind if you use single-member roles.
:::

## Downloading a copy of the data

Under **Privacy** on the analytics tab there is **Download a copy of this data**. It produces a single JSON file holding every view the dashboard can show for your server, assembled in your browser from your bot's own answers.

Two things about it are worth knowing:

- It covers **your whole history**, not the time range you are currently looking at. A copy holding only the last 30 days would not be a copy of your data.
- It is **JSON rather than CSV**. A CSV file holds one table, and this export holds around forty of them, so a single spreadsheet could not represent it honestly.

The file always contains a list of anything that could not be exported, even when that list is empty, so a partial download can never be mistaken for a complete one. Cards you have hidden from your dashboard are still included: hiding a card changes what you look at, not what you hold.

Only the server owner can download it.

## Turning analytics off, and deleting the data

Switching analytics off stops all collection. Your existing data is kept, so you can switch it back on later and pick up where you left off.

Deleting the data is a separate, deliberate action: **Delete all analytics data**, also under **Privacy**. You have to tick a confirmation before the button will do anything, because the dashboard cannot undo it. When it finishes it shows you exactly what was removed, table by table, with a row count for each.

It is all or nothing. The deletion runs as a single database transaction, so it either completes in full or changes nothing at all.

Two things deliberately survive it:

- **Your members' own choices.** A member who opted out stays opted out. Their data is cleared like everyone else's, but the record that they asked not to be counted remains, so deleting the data does not quietly re-enrol them.
- **Disaster-recovery backups.** ScootKit's hosting keeps these only so a server can be restored after a failure. A copy can survive in them for up to 90 days before it rotates out.

## History from before you moved to your own bot

If your server used analytics before it moved into your own bot, your history was transferred across and the old copy was deleted.

Some things were never recorded by the old system, specifically **joins, leaves and first-time posters**. For dates before the transfer, the analytics tab shows those as _not recorded_ rather than as zero, and marks the point where your own bot's collection began. A zero there would mean nobody joined, which is not what happened. We would rather show you an honest gap.

## Your members' rights

If a member asks what you hold about them, `/mystats` shows them their own figures. It only ever shows the person running it; nobody can look up anyone else. If you need to answer such a request yourself, the JSON copy described above contains everything your bot holds.

If a member asks you to delete their data, switching on the member opt-out lets them do it themselves with `/analytics-privacy`.

If a member has a question about this data, or wants it changed or removed, you are the person to ask. You are the controller, so those decisions are yours. ScootKit runs the hosting on your behalf under the Data Processing Agreement described above and will not make them for you.
