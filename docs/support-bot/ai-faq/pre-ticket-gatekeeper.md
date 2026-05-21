---
sidebar_position: 5
title: Pre-Ticket Gatekeeper
description: Have the AI try to answer a question before a Modmail or Ticket System ticket is opened, deflecting easy questions and reducing staff workload.
---

# Pre-Ticket Gatekeeper

The gatekeeper sits between a member and your ticket flow. Before a ticket actually opens, the bot shows the member a short "what's your question?" pop-up, asks the AI to answer, and only opens the ticket if the member still needs help afterward.

Members are never blocked from reaching your team - the "I still need help" button is always one click away.

## Features {#features}

- Switch on for [Modmail](/docs/support-bot/modmail/intro), the [Ticket System](/docs/support-bot/ticket-system/intro), or both.
- Skip the AI step on specific topics that always need a human.
- For Modmail, optionally use the member's first DM as the question so they don't see a pop-up at all.
- Plays nicely with your existing [forms](/docs/support-bot/general/forms) - show the form after the AI, skip it, or skip the AI on form topics entirely.
- "That solved it" / "I still need help" buttons let the member decide what happens next.
- Custom modal labels, welcome message, and answer wrapper.

## Setup {#setup}

1. In your dashboard, open [**AI FAQ → Settings → Where the AI answers**](https://scnx.app/glink?page=support-system/ai-faq/settings).
2. Under **Pre-ticket gatekeeper**, switch on **Try AI before opening a modmail ticket**, **Try AI before opening a ticket-system ticket**, or both.
3. Pick how the gatekeeper should behave when a topic has a required form - see [Topics with forms](#form-behavior) below.
4. (Modmail only) Decide whether the member's first DM should be used as the question without a pop-up - see [Modmail-specific options](#modmail-options).
5. Optionally customize the [modal labels and messages](#messages).
6. Optionally mark any ticket topic as "skip the AI gate" if it should always go straight to a human - see [Skipping the gate per topic](#per-topic-opt-out).
7. Save and reload the bot.

## What members experience {#flow}

When a member opens a ticket, here's what they see:

1. A short welcome message in their DMs or in Discord (only if you've set one).
2. A pop-up asking them to type their question. (Skipped on Modmail if you turned on **Use the user's initial message as the question** - in that case the bot just uses whatever they already typed in their DM.)
3. A short pause while the bot looks the answer up.
4. The AI's answer, with two buttons:
   - **That solved it, thanks** - the bot sends a friendly closer and no ticket is opened.
   - **I still need help** - the ticket opens like normal, including any form or topic-specific welcome message you've set up.

If the AI can't answer the question - or your server is out of AI credits - the bot says so and either offers a ticket or steps aside, depending on how you've configured the [out-of-credits behavior](/docs/support-bot/ai-faq/credits-and-pricing#out-of-credits-behavior).

## Common scenarios {#scenarios}

### Switching it on just for Modmail

Set **Try AI before opening a modmail ticket** to on. Leave the ticket-system toggle off. Members who DM the bot now see the question pop-up; members who open tickets via your button or menu inside the server are unaffected.

### Switching it on just for the Ticket System

Set **Try AI before opening a ticket-system ticket** to on. Members who click your Open Ticket button see the question pop-up; Modmail (if you have it) is unaffected.

### Pre-screening without the pop-up (Modmail only)

If your members usually lead with a clear question in their first DM, turn on **Use the user's initial message as the question** under the gatekeeper settings. The bot will use whatever they already typed instead of showing a separate pop-up. This is a smoother experience for self-explanatory questions. Heads up: this setting is **Modmail only** - the Ticket System always uses the pop-up because tickets are started from a button, not a free-form message.

### Letting the form stay the gate

If you already use a required form on a topic to collect structured info up front, you probably don't want the AI to chime in before that form. See [Topics with forms](#form-behavior) below - pick **Don't gate topics that have a form** to keep the form-based flow exactly as it is.

## Modmail-specific options {#modmail-options}

The **Use the user's initial message as the question** option only exists on Modmail because Modmail tickets start with a free-form DM. Turn it on if members tend to write a clear question in that first DM - the bot uses what they typed and skips the pop-up entirely.

For the Ticket System, the pop-up is always shown because tickets there are opened via a button or menu (there's no first message to use).

## Topics with forms {#form-behavior}

If a member picks a topic that has a [form](/docs/support-bot/general/forms) attached, the bot needs to know where the form fits in. Under **When a topic has a required form**, pick one of these:

- **Show the form after the AI answer** (recommended) - the gatekeeper runs first. If the member clicks **I still need help**, they then fill in the form before the ticket actually opens. You get the AI deflection without losing your structured form data.
- **Skip the form entirely** - the ticket opens immediately when the member clicks **I still need help**, no form. Use this when the AI pop-up already captures everything the form would have asked for and you don't want to ask twice.
- **Don't gate topics that have a form** - the AI gatekeeper is skipped entirely on topics with required forms. Members go straight to the form and the ticket flow as if the AI gatekeeper didn't exist. Best when your form is already a thorough pre-screen and adding the AI step would feel redundant.

## Skipping the gate per topic {#per-topic-opt-out}

You can mark individual ticket topics as "skip the AI gate" so members on that topic always go straight to a human. This is configured on each topic's settings page, under the topics list for [Modmail](https://scnx.app/glink?page=support-system/modmail/ticket-topics) or the [Ticket System](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) (more on writing the topics themselves in the [Modmail](/docs/support-bot/modmail/ticket-topics) and [Ticket System](/docs/support-bot/ticket-system/ticket-topics) docs).

Good candidates for skipping:

- **High-touch topics** like refund disputes, partnership requests, or moderation appeals - things where you always want a human first.
- **Internal-only topics** that shouldn't be in the AI's flow at all.
- **Topics where the AI just won't help.** If a topic always needs human judgment, skipping the gate saves the member 30 seconds.

## Customizing the modal and messages {#messages}

You can tweak almost every word the gatekeeper says. The most-used customizations are on the same settings page as the rest of the gatekeeper:

- **Custom modal title** - the heading at the top of the question pop-up. Up to 45 characters. Leave blank for the default.
- **Custom question field label** - the label above the text box where the member types their question. Up to 45 characters.
- **Custom modal placeholder** - the grey hint text inside the text box. Up to 100 characters. Useful for nudging members toward a specific format (e.g. "Describe your issue in one sentence...").
- **Pre-modal welcome message** - an optional message shown before the pop-up appears. Use it to set expectations ("I'll check the FAQ first before connecting you to a human"). Leave blank to skip.
- **Gatekeeper answer template** - the wrapper around the AI's answer. The "That solved it" and "I still need help" buttons are added below your wrapper automatically.
- **"That solved it" reply** - what the bot sends when the member clicks the **That solved it** button. Default is a friendly thank-you.

For the full reference (including placeholders you can use), see [Messages and templates](/docs/support-bot/ai-faq/messages-and-templates).

## Example setups {#examples}

A few common shapes the gatekeeper takes in practice.

### Modmail-only server, deflect FAQ questions

You run support entirely through Modmail DMs and want the AI to catch the easy questions before they turn into tickets.

- **Try AI before opening a modmail ticket:** on.
- **Try AI before opening a ticket-system ticket:** off (you don't use it).
- **Use the user's initial message as the question:** on. Members lead with their question in DMs, so there's no need for a separate pop-up.
- **Per-topic opt-out:** any "report a user" or "appeal" topic, since those always need a human first.

### Ticket System server with structured forms

Your members open tickets via a button, and most topics have a [form](/docs/support-bot/general/forms) attached. You want the AI to try first, but still collect the form data when the member escalates.

- **Try AI before opening a ticket-system ticket:** on.
- **Try AI before opening a modmail ticket:** off (or on if you also use Modmail).
- **When a topic has a required form:** **Show the form after the AI answer** - the gatekeeper runs first, then if the member clicks "I still need help" they fill in the form before the ticket opens.
- **Per-topic opt-out:** anything where you don't want the AI involved at all - typically partnership requests, refund disputes, or moderation appeals.

### Server where the form already collects everything

Most of your tickets use a form that already collects all the info staff needs, and you don't want to layer the AI step on top of an already-busy intake flow.

- **Try AI before opening a ticket-system ticket:** on.
- **When a topic has a required form:** **Don't gate topics that have a form** - the AI is only used on the simpler form-less topics (e.g. a generic "Other" topic) and your form-based flow is unchanged.

## Tips {#tips}

:::tip Pick the right topics for the gate
The gatekeeper works best on topics where members ask the same questions over and over - "How do I claim my role?", "Where's my receipt?", "When does the next event start?". Topics that always need human judgment (reports, disputes, escalations) are better left as skipped.
:::

:::tip Test before rolling out
Use the **Test chat** tab on your AI FAQ page to ask the AI test questions and see exactly how it would answer your real members. It uses the same FAQ entries and consumes credits at the same rate as live answers.
:::

:::tip Enterprise
The gatekeeper deflects routine questions out of the box. Larger organizations with custom SLAs, dedicated provisioning, or white-glove onboarding can ask about our enterprise tier - see [Enterprise & Docs Sync](/docs/support-bot/ai-faq/enterprise-and-docs-sync) or [contact sales](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::
