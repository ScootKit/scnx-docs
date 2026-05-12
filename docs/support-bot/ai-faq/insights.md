---
sidebar_position: 8
title: Insights
description: Review where the AI escalates instead of answering - the AI FAQ insights page helps you find gaps in your knowledge base.
---

# Insights

The **Insights** page is your "where is the AI failing to deflect?" view. It shows how often the AI handed a question over to your team instead of answering it, what reasons it gave, and which questions keep coming back.

Use it to find **gaps in your FAQ** - every recurring escalation reason is a hint that you're missing an entry, or that an existing entry needs improvement.

## Where to find it {#where}

In your SCNX dashboard, open [**AI FAQ → Insights**](https://scnx.app/glink?page=support-system/ai-faq/insights). It's separate from the broader [Support Bot Analytics](/docs/support-bot/general/analytics) page because the questions you ask of this data are different.

## Time range {#window}

A dropdown at the top lets you switch between **Last 7 days**, **Last 30 days**, or **Last 90 days**. Every chart on the page reflects the range you pick.

## What the page shows {#metrics}

### Top-line numbers {#top-line}

At the top of the page you'll see four numbers at a glance:

- **Total answers** - how many AI answers the bot produced in the selected window, across both channel auto-answer and the pre-ticket gatekeeper.
- **Escalations offered** - of those answers, how many included an **Open a ticket** button. This happens whenever the AI judged the question couldn't be fully answered from your FAQ.
- **Escalation rate** - the percentage of answers that ended with an escalation offer. Low rates mean the AI is deflecting most questions on its own; high rates mean a meaningful share of incoming questions still need a human, usually because your FAQ doesn't cover them yet.
- **Heuristic-fired escalations** - the percentage of escalations that came from the safety net instead of the AI's own decision. See [Where escalations come from](#escalation-source) below.

### Where escalations come from {#escalation-source}

Every escalation is tagged with how it happened. There are two sources:

- **Clean hand-off** (labelled "Tool call" on the page) - the AI clearly decided "I can't answer this from the FAQ" and explicitly asked the bot to offer a ticket, along with a reason. The reason is reliable.
- **Safety-net catch** (labelled "Safety-net heuristic" on the page) - the AI didn't ask for an escalation outright, but the wording of its answer looked like a non-answer (e.g. it said "I don't know" in prose). The bot adds the escalation button anyway just in case the member needs it.

A small share of safety-net catches is normal - that's what the safety net is for. **A very high share** (well over half) suggests the AI is hedging in prose instead of clearly handing off, which is worth investigating. Look at the recent escalations list to see if the safety-net entries look like real questions that should have had a clear answer.

### Top escalation reasons {#top-reasons}

A ranked list of the most common reasons the AI gave when it explicitly escalated. **Treat this as a to-do list for your FAQ.** Each recurring reason is a question the AI doesn't have a good answer for yet - add or improve an [FAQ entry](/docs/support-bot/ai-faq/faq-entries) covering it and the reason should drop off the list next time you check.

Safety-net escalations don't have specific reasons attached, so they're not shown here. If your safety-net share is high, the recent escalations list is the place to dig.

### Recent escalations {#recent-table}

A list of the last 20 escalations, with the question the member asked, the reason (if any), and when it happened. Useful for spot-checking individual cases - especially when a top reason looks suspicious or you just want to see how the AI is wording its non-answers right now.

## How to use the data {#use-cases}

Three concrete things this page is good for. You don't have to do all three - pick whichever matches a question you're trying to answer.

### Spot FAQ gaps

The single most useful workflow.

1. Set the window to **Last 30 days**.
2. Open **Top escalation reasons** and look for any reason that shows up 3 or more times.
3. For each one, either add a new [FAQ entry](/docs/support-bot/ai-faq/faq-entries) covering that question, or expand an existing entry so its wording covers what members are actually typing.
4. Check back in two weeks - the reasons you tackled should have dropped or disappeared.

### Check that the AI is staying reliable

If you want to make sure the AI isn't regressing or going off-script:

1. Watch the **Heuristic-fired escalations** number - the percentage of escalations caught by the safety net rather than asked for cleanly by the AI.
2. If it stays above ~50%, sample the **Recent escalations** table. Are the safety-net entries questions the AI should have been able to answer? If so, the matching FAQ entries probably need rewriting.
3. If a single topic keeps showing up, look at the entry that should cover it - the wording may not match what members type.

### Track ticket deflection over time

To see whether the AI is reducing your team's load month over month:

1. Pull up Insights on the **7-day window** and note the **Escalation rate**.
2. Switch to **30 days** and **90 days** and note the same number.
3. A falling rate means more questions are being resolved without human help; a rising rate means coverage hasn't kept up with the kinds of questions coming in.

## Suggested workflow {#workflow}

A loose weekly routine that combines the three workflows above:

1. Open Insights with a **30-day window** once a week.
2. Skim the **top escalation reasons** for any reason that shows up 3+ times.
3. For each recurring reason, either add a new [FAQ entry](/docs/support-bot/ai-faq/faq-entries) for it or improve the existing one so the AI can answer that wording.
4. Glance at the **safety-net catches** number. If it's climbing without obvious cause, sample the recent escalations to see whether the AI is regressing on a particular topic.
5. Check back in two weeks - the reasons that were top last time should be smaller or gone.

:::tip Insights is for FAQ gaps, not staff performance
For staff metrics, response times, and ticket trends, head to the [Support Bot Analytics](/docs/support-bot/general/analytics) page. Insights is focused on AI answer quality and FAQ coverage.
:::

:::tip Enterprise
Insights tops out at a 90-day window. Longer retention, custom analytics, and exportable reports are available on enterprise plans - see [Enterprise & Docs Sync](/docs/support-bot/ai-faq/enterprise-and-docs-sync) or [contact sales](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::
