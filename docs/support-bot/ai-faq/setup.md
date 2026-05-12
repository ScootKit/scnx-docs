---
sidebar_position: 2
title: Setup
description: Enable AI FAQ for your Discord server, write your first FAQ entries, and decide where the AI answers.
---

# Setting up AI FAQ

Setting up AI FAQ takes about 10 minutes. Here's the order to do things in.

## Before you start {#prerequisites}

- AI FAQ must be unlocked for your server. If you don't see the AI FAQ section in your dashboard, you're not in the beta yet - reach out via the [contact form](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
- Your Support Bot must be running v3 or newer. Older builds don't include AI FAQ.
- The bot uses AI credits whenever it answers a question or when you save a new FAQ entry. Skim [Credits and pricing](/docs/support-bot/ai-faq/credits-and-pricing) so there are no surprises.

## Recommended order {#recommended-order}

The fastest way to get something useful running, without over-spending credits while you're still tuning:

1. **Turn the master switch on** ([Settings](https://scnx.app/glink?page=support-system/ai-faq/settings) → Enable AI FAQ on this server). Nothing happens yet - you haven't told it where to answer.
2. **Write 5 to 10 FAQ entries** covering the questions your team already answers daily. Quality matters far more than quantity at this stage.
3. **Pick a single surface to start with.** Either:
   - turn on **Auto-answer in channels** for **one** help channel, or
   - turn on the **Pre-ticket gatekeeper** for whichever ticket flow you use (Modmail or Ticket System).
4. **Test it** with the [Test chat](https://scnx.app/glink?page=support-system/ai-faq/test) tab and a couple of throwaway questions in the live channel.
5. **Leave it for a few days,** then check the [Insights](/docs/support-bot/ai-faq/insights) page. The top escalation reasons tell you which FAQ entries to write next.
6. **Tune the filters** based on what you saw - usually raising the cooldown or minimum question length if the channel is noisy, or relaxing them if the AI is being too quiet.
7. **Broaden the rollout** once you trust it: more channels, or turn on the other surface as well.

## Step-by-step {#steps}

### 1. Open the AI FAQ section

In your SCNX dashboard, find **AI FAQ** in the Support Bot menu.

### 2. Turn on the master switch

Head to the **Settings** tab and flip **Enable AI FAQ on this server** on. The first time you do this, the dashboard shows a confirmation dialog with the cost per answer. Confirm to enable.

### 3. Write your first FAQ entries

Open the [FAQ entries](https://scnx.app/glink?page=support-system/ai-faq/manage) tab and add a handful of entries covering questions your members ask most often. You can start blank or pick one of the built-in starter templates (refunds, server rules, subscription cancellation).

See [Writing FAQ entries](/docs/support-bot/ai-faq/faq-entries) for tips on writing good ones, what it costs to save them, and the 100-entry limit.

### 4. Decide where the AI should answer

Back in **Settings → Where the AI answers**, pick one or both of:

- **Auto-answer in channels** - the bot replies inline in help channels you choose. See [Channel auto-answer](/docs/support-bot/ai-faq/channel-mode).
- **Pre-ticket gatekeeper** - the bot tries to answer before a Modmail or Ticket System ticket gets opened. See [Pre-ticket gatekeeper](/docs/support-bot/ai-faq/pre-ticket-gatekeeper).

You can run both at the same time, or just one.

### 5. Customize the messages (optional)

The bot ships with friendly defaults for the loading reply, the answer wrapper, the gatekeeper modal, and the "you're out of credits" message. If you want to change the wording or the embed style, see [Messages and templates](/docs/support-bot/ai-faq/messages-and-templates).

### 6. Save and reload the bot

After any change on AI FAQ settings, the dashboard will ask you to reload the bot so it picks up the new config. This is the same reload prompt you'll have seen in the rest of the Support Bot setup.

## What happens after you save an entry {#after-save}

When you save a new or edited FAQ entry, the bot reads the answer text, splits it into searchable chunks, and stores them so the AI can find the right one later. This usually takes under 10 seconds. The dashboard shows an "indexing..." badge while it runs and switches to "ready" when the entry is live. From that moment on, the AI is using it to answer questions.

If indexing fails (usually a transient hiccup with the AI provider), the bot retries automatically every 30 minutes - you don't need to do anything.

:::tip Start small
We recommend starting with 5-10 well-written FAQ entries and turning the pre-ticket gatekeeper on for one or two topics first. Once you see what kinds of questions the AI handles well on your server, you can write more entries and switch on channel auto-answer.
:::

:::tip Enterprise
Hand-writing entries is the right place to start. If you already maintain documentation in GitHub, Notion, or Confluence, scheduled ingestion is available on enterprise plans so you don't have to copy content over by hand - see [Enterprise & Docs Sync](/docs/support-bot/ai-faq/enterprise-and-docs-sync) or [contact sales](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::

## Turning AI FAQ off {#disabling}

Flipping the master switch off stops all AI answers immediately. Your FAQ entries are kept, so turning it back on later picks up where you left off. Archived entries are kept until you delete them on purpose.
