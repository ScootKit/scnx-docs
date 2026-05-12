---
sidebar_position: 6
title: Messages & Templates
description: Customize every message the AI FAQ feature sends, including the loading reply, the answer template, the gatekeeper modal, and out-of-credits messages.
---

# Messages and templates

Every message the AI FAQ feature sends is editable from your dashboard. This page lists each one, where it appears, and which placeholders you can use inside it.

## How defaults work {#defaults}

- Every message ships with a friendly default in your bot's language.
- Editing a message in the dashboard saves your custom wording.
- **Clearing a message** (emptying the field) makes the bot fall back to the default - so the bot keeps working in every supported language even if you've never touched it.
- Non-English translations are managed through our translation system. If you want to contribute or fix a translation, get in touch - changing translated wording from your own dashboard is fine, but don't expect the same wording to appear server-side in another language.

## Available placeholders {#placeholders}

You can drop any of these into a message and the bot will fill them in before sending:

| Placeholder    | What it becomes                                                       |
| -------------- | --------------------------------------------------------------------- |
| `%aiAnswer%`   | The AI-generated answer text. **Required** inside the two answer-wrapper messages. |
| `%username%`   | The member's username.                                                |
| `%mention%`    | A clickable mention of the member.                                    |
| `%tag%`        | The member's full Discord tag.                                        |
| `%userID%`     | The member's Discord ID.                                              |
| `%guildName%`  | Your server's name.                                                   |

All the standard [global placeholders](/docs/support-bot/general/global-placeholders) (bot identity, timestamps, opening hours, etc.) are also supported.

## Channel auto-answer messages {#channel-templates}

These are used when the AI replies to a message in one of your selected channels - see [Channel auto-answer](/docs/support-bot/ai-faq/channel-mode).

- **Loading reply** - the placeholder sent in reply to the member's message while the AI thinks. Default: "Looking that up...". It's edited in place with the final answer when the AI is done.
- **Answer message template** - the wrapper around the AI's answer. **Must contain `%aiAnswer%`** - that's where the AI's actual answer is dropped in. The default is a friendly embed with a footer note explaining the answer was AI-generated.

### Modal labels (gatekeeper) {#modal-labels}

The text inside the question pop-up itself is editable too, separate from the templated messages above. These live alongside the rest of the gatekeeper settings.

- **Custom modal title** - the heading at the top of the pop-up. Up to 45 characters.
- **Custom question field label** - the label above the text box where the member types. Up to 45 characters.
- **Custom modal placeholder** - the grey hint text inside the text box. Up to 100 characters.

All three fall back to a localized default when left empty.

## Pre-ticket gatekeeper messages {#gate-templates}

These are used when the [pre-ticket gatekeeper](/docs/support-bot/ai-faq/pre-ticket-gatekeeper) is active.

- **Pre-modal welcome message** - sent right before the question pop-up appears. Empty by default. Use it to tell members "we'll try to answer with AI first" so the pop-up isn't surprising.
- **Gatekeeper answer template** - the wrapper around the AI's gatekeeper answer. **Must contain `%aiAnswer%`.** The "That solved it" and "I still need help" buttons are added below your wrapper automatically.
- **"That solved it" reply** - sent when the member clicks **That solved it**. Default is a friendly thank-you. No ticket gets opened.
- **Rejected message** - sent when the AI refuses to answer the question (out of scope, abusive, or there's just no relevant FAQ entry).
- **Out-of-credits messages** - sent when your AI credit balance is empty. There are two versions: one that just tells the member the AI is unavailable and one that tells them and offers a ticket button. Which one is used depends on your [out-of-credits behavior setting](/docs/support-bot/ai-faq/credits-and-pricing#out-of-credits-behavior).

## Example customizations {#examples}

Three tweaks that come up often. All of these can be set directly in the message editor for the field named.

### Branded pre-modal welcome message

Sent in the channel just before the AI pop-up appears. Sets expectations and softens the experience.

> Hey %mention%! I'm **%botName%**, the helper bot for **%guildName%**. Before I connect you with our staff, let me check our FAQ - I might be able to answer your question right away. (You can always reach a human if I don't get it right.)

### Friendlier "I still need help" hand-off

The default out-of-credits message with a ticket button can feel abrupt. A warmer wording for that field:

> Sorry, our AI helper isn't available right now. Click the button below and one of our team will help you directly. We usually reply within a few hours during our working hours.

### Out-of-credits notice that points to staff

If you want the out-of-credits message to direct members to a specific staff channel instead of just saying "AI unavailable":

> Our AI helper is temporarily unavailable. For now, please post your question in <#YOUR_HELP_CHANNEL_ID> and one of our team will get back to you. Sorry for the inconvenience.

Replace `YOUR_HELP_CHANNEL_ID` with your channel's ID. The bot won't auto-fill that one - it's a literal Discord channel mention you paste in.

## Editing the messages {#editing}

- Open the [**AI FAQ → Settings**](https://scnx.app/glink?page=support-system/ai-faq/settings) page in your dashboard.
- Each message sits inside the section it belongs to (channel auto-answer or pre-ticket gatekeeper).
- Each message uses the same rich editor as the rest of the Support Bot - embed colour, title, description, footer, image.
- The placeholders you can use are listed inside each editor's placeholder helper.

:::tip Keep the AI disclaimer
The default answer wrappers include a small "AI-generated answer. May be wrong." note. We recommend keeping an equivalent line in your custom wording so members don't mistake the AI's reply for a human one.
:::

:::tip Enterprise
These messages are configured per server. If you run multiple servers and want centralized message management or bulk overrides across them, those workflows are available on enterprise plans - see [Enterprise & Docs Sync](/docs/support-bot/ai-faq/enterprise-and-docs-sync) or [contact sales](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::
