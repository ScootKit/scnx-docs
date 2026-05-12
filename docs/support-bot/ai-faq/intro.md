---
sidebar_position: 1
title: AI FAQ
description: Let an AI answer common questions from a staff-authored FAQ - in channels and before tickets are opened.
---

# AI FAQ

AI FAQ is a beta feature that lets the bot answer your members' common questions automatically, using a FAQ that **you** write. You add entries on the [FAQ entries page](https://scnx.app/glink?page=support-system/ai-faq/manage), the AI reads them, and when a member asks a question the bot replies with a paraphrased answer in your server's voice - no copy-paste required.

There are three things AI FAQ can do for you:

- **Answer questions in a channel.** Pick one or more help channels and the bot will reply inline whenever a member asks something it can find in your FAQ.
- **Try to help before a ticket is opened.** When someone tries to open a Modmail or Ticket System ticket, the bot can show them the AI's best guess at an answer first. If it solves the problem, no ticket is needed. If not, the ticket opens like usual.
- **Show you what's missing.** When the AI couldn't answer a question, you'll see it on the Insights page so you know what FAQ entry to write next.

The AI only ever uses entries you've written - it never makes things up from outside knowledge. If your FAQ doesn't cover a question, the bot offers the member a ticket instead.

:::info Beta - be aware
AI FAQ is currently in beta. Things may still change without notice, and SLA does not apply while we're iterating. We'd love your feedback - send thoughts or feature requests through our [contact form](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::

## Access {#access}

AI FAQ is rolling out gradually. To use it on your server you'll need:

- The AI FAQ section visible in your dashboard. If you don't see it, your server isn't in the beta yet - reach out via the [contact form](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0) and we'll get you onboarded.
- A Support Bot already set up and running for your server. AI FAQ runs on top of Modmail and the Ticket System - if neither is configured yet, set one up first.
- A paid plan (or a free trial) so your server has AI credits to spend. Each tier comes with a monthly grant - see [Credits and pricing](/docs/support-bot/ai-faq/credits-and-pricing) for the numbers.

## Next steps {#next-steps}

- Follow the [Setup guide](/docs/support-bot/ai-faq/setup) to turn AI FAQ on for your server from the [AI FAQ Settings page](https://scnx.app/glink?page=support-system/ai-faq/settings).
- Learn how to [write FAQ entries](/docs/support-bot/ai-faq/faq-entries) the AI can use.
- Decide where the AI should answer: [in channels](/docs/support-bot/ai-faq/channel-mode), [before tickets](/docs/support-bot/ai-faq/pre-ticket-gatekeeper), or both.
- Get a feel for the [credits and pricing](/docs/support-bot/ai-faq/credits-and-pricing) before flipping the switch.

:::tip Enterprise
Once your FAQ is running and you have a sense of the volume, larger teams can ask about scheduled docs ingestion (so you don't have to maintain entries by hand) and custom credit quotas. See [Enterprise & Docs Sync](/docs/support-bot/ai-faq/enterprise-and-docs-sync) or [contact sales](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::
