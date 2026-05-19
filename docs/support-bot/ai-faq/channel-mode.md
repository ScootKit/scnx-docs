---
sidebar_position: 4
title: Channel Auto-Answer
description: Let the AI reply to member questions directly in selected channels, drawing answers from your FAQ.
---

# Channel Auto-Answer

You can let the AI answer questions directly in selected channels - useful for high-traffic support or help channels where members would otherwise have to open a ticket. The bot watches the channels you pick, and when a member asks a question, it replies inline with an answer drawn from your FAQ.

## Features {#features}

- Pick any combination of text or forum channels for the AI to watch.
- A cooldown per member so one person can't trigger answer after answer.
- A minimum length filter so the AI doesn't react to "hi" or one-word messages.
- A prefix filter so bot commands (anything starting with `!`, `?`, or `/`) are ignored.
- Optionally ignore brand-new accounts.
- Optional thumbs-up / thumbs-down buttons on every answer, with results aggregated on the [Insights page](https://scnx.app/glink?page=support-system/ai-faq/insights).
- Friendly defaults for the loading reply and the wrapper around the AI's answer, plus the ability to customize both.

## Setup {#setup}

1. In your dashboard, open [**AI FAQ → Settings → Where the AI answers**](https://scnx.app/glink?page=support-system/ai-faq/settings).
2. Turn **Auto-answer in channels** on.
3. Add the channels the AI should watch (text channels and forum channels both work).
4. Adjust the filters below to suit your community.
5. Save and reload the bot.

## What members experience {#answer-flow}

When a member posts a question in one of your selected channels, the bot replies with a short "Looking that up..." placeholder almost instantly. A second later, that same message is **edited in place** with the actual AI answer. If you've turned on the thumbs-up / thumbs-down buttons, they appear underneath.

If the AI can't find a good match in your FAQ, the placeholder is replaced with a short "I couldn't find an answer for that" message, optionally with an **Open a ticket** button (see [Fallback when the AI can't answer](#fallback-ticket-system) below).

The member sees one tidy message that goes from "Looking that up..." to the final answer - no awkward double-posting.

## Filters and limits {#filters}

The settings below all live on the same page as the channel list. Each one is there to help you keep the AI from running on messages where it can't add value, which keeps credit usage predictable.

**Cooldown** - the **Cooldown** setting controls how long a single member has to wait before the AI will answer them again in the same channel. The default is 30 seconds; raise it if conversations feel noisy, or lower it for high-traffic help channels where multiple quick answers are expected.

**Minimum question length** - the **Minimum question length** setting (in characters, default 8) hides very short messages from the AI. "Hi" and "anyone here?" don't trigger an answer. The exception is short replies that look like a follow-up to the bot - see [Follow-up replies](#follow-up-replies) below.

**Ignore messages starting with** - the **Ignore messages starting with** setting tells the bot which characters mark a message as "not a question for me". By default the bot ignores messages starting with `!`, `?`, or `/` so bot commands and quick chat lines don't trigger answers. Add the prefix any other bots in your server use if you want to keep those quiet too.

**Ignore accounts younger than** - the **Ignore accounts younger than** setting (in days, default 0 = off) hides messages from very new accounts from the AI. Set this if you're getting noise from throwaway accounts or first-day joiners who haven't read the FAQ yet.

**Feedback buttons** - turning on **Show thumbs-up / thumbs-down feedback buttons** adds those two buttons below every AI answer. Members can rate whether the answer was helpful, and you can review the totals on the [Insights](/docs/support-bot/ai-faq/insights) page to spot FAQ entries that need a rewrite.

## Follow-up replies {#follow-up-replies}

The minimum length filter exists to skip noisy chatter, but it would also block natural short replies like "yes" or "no" to a clarifying question the AI just asked. To avoid that, the bot treats certain short messages as follow-ups and answers them anyway.

A message counts as a follow-up - and bypasses the length check - when either of these is true:

- The member used Discord's **reply** feature to reply to a previous bot message in the channel.
- The message was sent within **5 minutes** of the bot's last reply in the channel, and that earlier bot reply was directed at the same member (or didn't target anyone specifically).

All the other filters (channel list, cooldown, ignored prefixes, new-account threshold) still apply. The follow-up bypass only relaxes the length check.

So if the AI asks "Would you like guidance on setting this up?" and the member types "yes" within 5 minutes, the AI answers. If the same member types "yes" out of nowhere an hour later in the channel, it's still ignored as too short.

## Customizing the messages {#messages}

The two messages the bot sends in channel mode are both editable:

- **Loading reply** - the short placeholder sent while the AI thinks (default: "Looking that up..."). It's edited in place with the final answer.
- **Answer message template** - the wrapper around the AI's actual answer. You can change the embed colour, the wording, and add your own disclaimer.

Customize them in **Settings → Where the AI answers**. For the full reference (including which placeholders you can use), see [Messages and templates](/docs/support-bot/ai-faq/messages-and-templates).

## Fallback when the AI can't answer {#fallback-ticket-system}

When the AI can't find a good match in your FAQ, the answer message includes an **Open a ticket** button. Where that button takes the member is up to you - configure it under **Settings → Fallback behavior → Escalation button after AI answer**:

- **Don't show an Open Ticket button** - the AI just says it can't help. Pick this if you'd rather members not be routed into tickets automatically.
- **Open a modmail DM** - the button starts a Modmail conversation. Only available if [Modmail](/docs/support-bot/modmail/intro) is enabled.
- **Open a Ticket System ticket** - the button creates a regular [Ticket System](/docs/support-bot/ticket-system/intro) ticket. Only available if the Ticket System is enabled.

If you later disable whichever subsystem you picked, the dashboard automatically switches the fallback back to "Don't show an Open Ticket button" so members aren't routed into something that isn't running.

## What it costs {#cost}

Every channel-mode answer uses some AI credits. The exact amount depends on what the AI actually did (rejected the message, chatted briefly without searching, or ran a full FAQ search) and which AI provider your server is on. The full breakdown is on the [Credits and pricing](/docs/support-bot/ai-faq/credits-and-pricing) page, along with tips on cutting spend.

:::tip Keep credit usage predictable
The biggest knobs for controlling channel-mode spend are the **Cooldown**, the **Minimum question length**, and the list of ignored prefixes. Tightening any of these reduces how often the AI runs without sacrificing meaningful answers.
:::

## Example setups {#examples}

These are starting points - real settings will depend on how chatty your channels are and how strict you want the filter to be. All values are entered exactly as shown on the dashboard.

### Small community, one help channel

A typical small-community setup. Defaults are tuned for this case.

- **Channels:** `#help` only.
- **Cooldown:** 30 seconds (default).
- **Minimum question length:** 8 characters (default).
- **Ignore messages starting with:** `!`, `?`, `/` (default).
- **Ignore accounts younger than:** 0 days (off).
- **Feedback buttons:** on.

Predictable spend, low chance of false positives, fine to leave running.

### High-traffic support server

When a help channel is busy enough that the default settings would trigger the AI too often, tighten the filters.

- **Channels:** `#help`, `#bug-reports`, `#account-issues`.
- **Cooldown:** 60 seconds.
- **Minimum question length:** 15 characters.
- **Ignore messages starting with:** `!`, `?`, `/`, plus your moderation/utility bot prefixes (e.g. `,`, `>>`, `&`).
- **Ignore accounts younger than:** 3 days.
- **Feedback buttons:** on (helps spot which entries members find unhelpful when volume is high).

### Forum-channel support

Forum posts are usually self-contained questions, so the AI rarely needs to interrupt mid-thread. You want a longer cooldown so the AI only answers the first message and stays quiet in replies.

- **Channels:** the forum channel itself (one entry per forum you want covered).
- **Cooldown:** 300 seconds (5 minutes).
- **Minimum question length:** 20 characters (forum posts are typically longer).
- **Ignore messages starting with:** `!`, `?`, `/`.
- **Ignore accounts younger than:** 0 days.
- **Feedback buttons:** on.

:::tip Enterprise
Channel-mode credit usage scales with how many questions get answered. If you're running busy support channels and consistently spending above your monthly grant, volume-rate pricing usually works out better than per-credit top-ups - see [Enterprise & Docs Sync](/docs/support-bot/ai-faq/enterprise-and-docs-sync) or [contact sales](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::
