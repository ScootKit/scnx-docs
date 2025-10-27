---
title: "Support Bot V3 is now in beta!"
description: "Our new Support Bot, previously Modmail, adds support for a ticket system, AI summaries, better logs and much more. And the best news: You can try it yourself in the beta version."
slug: 2025-support-bot-beta
date: 2025-10-24T10:00
unlisted: true
authors:
  - scderox
tags:
  - Newsletter
  - SCNX
  - Support Bot
  - Modmail
---

# Modmail is now Support-Bot: Announcing the V3 Beta and a New Ticket System

We’re excited to announce the biggest update in our product's history, and with it, a brand new name. Modmail is
officially becoming **Support-Bot!**

This is more than just a rebrand. For a long time, Modmail has been a powerful tool for DM-based support. But as our
platform has grown, we’ve rebuilt it from the ground up to be a complete support solution. The name "Modmail" simply
didn't cover it anymore.

Today, we're launching the **V3 Beta**, which is now available to everyone. This update introduces our single
most-requested feature: a comprehensive **Ticket System** that lives right inside your server.

<!-- truncate -->

## "Modmail" + "Tickets" = Support-Bot {#rebrand}

With V3, Support-Bot now gives you two powerful ways to handle support, which you can use separately or at the same
time:

1. **Modmail System (Classic):** The DM-based system you're familiar with. Users send a DM to the bot, and your team
   manages it in a private thread.
2. **Ticket System (New!):** A highly-requested, channel-based system. Users open a ticket via a dedicated message, and
   a private channel is created for them *inside* your server.

This update is all about giving you the flexibility to build the perfect support experience for your community.

![Screenshot showing the Modmail feature on the right from the user perspective and the ticket system feature from the left](@site/blog/assets/support-bot-beta/en/1.png)

## The All-New Ticket System: A Deeper Dive {#ticket-system}

This is the star of the show. The new Ticket System is built for flexibility, power, and professional support workflows.
It moves support out of DMs and into private channels right on your server.

### 🏷️ Advanced Ticket Topics {#ticket-system-advanced-topics}

Ticket Topics are now fully integrated into the new system. You can set different topics for each ticket panel, helping
you categorize and route requests from the moment they're created. Even better, you can enable in-channel buttons to
allow your team to change a ticket's topic *after* it's been opened, ensuring everything stays organized.

![Screenshot showing a ticket selection embed, showing how to move a ticket and the ticket topics configuration](@site/blog/assets/support-bot-beta/en/2.png)

### 🙋 Team Claiming System {#ticket-system-claiming}

Empower your staff to manage incoming requests efficiently. New tickets can be announced in a dedicated notification
channel. Team members can then "claim" and assign themselves to tickets, fostering accountability and reducing response
times.

![A screenshot showing claiming status messages and how to claim a ticket](@site/blog/assets/support-bot-beta/en/claiming.png)

### 👥 Multi-User Tickets & Multiple Tickets Per User {#ticket-system-multiple-users}

Flexibility is key. A single user can now open multiple tickets simultaneously. Additionally, you can (optionally) allow
users to add *other* server members to their ticket, making it perfect for group support scenarios or collaborative
problem-solving.

![A screenshot showing how to add another user to a ticket](@site/blog/assets/support-bot-beta/en/multi-users.png)

### ⏰ Automatic Inactivity Reminders & Closures {#ticket-system-ticket-closing}

Keep your queue clean and efficient. Configure the bot to gently nudge users in idle tickets. If a ticket remains
inactive for too long, you can have Support-Bot automatically close it, ensuring only active conversations take up your
team's time.

![A screenshot showing the configuration of closing tickets](@site/blog/assets/support-bot-beta/en/autoclose.png)

### ⭐ Ticket Ratings & Reviews {#ticket-system-reviews}

Gathering feedback is essential. The 5-star rating system is now available for the Ticket System! When a ticket is
closed, the user can rate their experience, giving you valuable insight into your team's performance.

![A screenshot showing how users can give reviews and how review messages get sent into a staff channel](@site/blog/assets/support-bot-beta/en/reviews.png)

### ✨ Unlimited, Smart Ticket Opening Messages {#ticket-system-opening-messages}

Create as many "Open a Ticket" panels as you need, placing them in different channels with unique topics and
permissions. The system is smart: if you have fewer than five ticket topics for a panel, it will automatically display
them as clean, simple buttons instead of a dropdown menu, making interaction even faster.

![A screenshot showing different opening message configurations in Discord](@site/blog/assets/support-bot-beta/en/open-message.png)

## Game-Changing Features for BOTH Systems {#combined}

We didn't just add a new system; we supercharged the entire platform. These new features are available for *both* the
Modmail and Ticket systems.

### ✨ AI-Powered Ticket Summaries {#combined-ai-summaries}

This is a game-changer. Instead of reading through a 200-message log, our new **(opt-in) AI summary feature** will
generate a concise summary of the entire conversation when a ticket is closed. You can understand the user's problem and
the team's solution in seconds.

![Screenshot of an AI summary of a ticket](@site/blog/assets/support-bot-beta/en/ai-summary.png)

### ✨ A New Web-Based Log Viewer {#combined-modmail-net}

Say goodbye to boring `.txt` files! We've built a beautiful new web-based log viewer. Logs are now displayed in a clean,
chat-like interface that's easy to read, search, and share. You can also see
a [live example in action](https://logs.modmail.net/logs/session/019a12ca-ac91-7c40-954c-57898ba08842#98d33363b9261313a1c624da4f318f0e135a1994929f30f6de0fdbab935b490f).

![Screenshot showing a ticket on our web-based ticket log viewer](@site/blog/assets/support-bot-beta/en/modmail-net.png)

### ✨ Dynamic Channel Naming {#combined-dynamic-names}

You can now configure ticket topics to automatically override the channel name format. This means you can instantly
identify a ticket's purpose just by its name!

For example:

* `❗-ticket-123` for a Bug Report
* `⭐-ticket-219` for a Partnership

### More Powerful Tools for V3: {#combined-more-v3}

* **Combined Statistics:** The dashboard now features a combined overview, showing stats for Modmail and Tickets,
  side-by-side.
* **Ticket History:** A new `/ticket-history` command allows you to easily view a user's past support tickets.
* **Ticket Renaming:** Team members can now rename tickets for better organization.
* **Custom Ticket IDs:** Change the format of your ticket IDs, adding prefixes or using random IDs instead of sequential
  numbers.
* **Holiday Importing:** Easily import your local holidays to manage your team's availability.

## Upgrades to the Classic Modmail System {#modmail}

We haven't forgotten our Modmail roots! The classic DM system also got some fantastic new features:

* **Advanced Info Messages:** You can now set up *multiple* info messages and configure them to only display for
  specific ticket topics. If a topic has only one option, the dropdown automatically becomes a simple button. (Note: If
  you had a V2 info message, you will need to set it up again in the new, more powerful system).
* **Topic Statistics:** The statistics tab now shows your most-used ticket topics, helping you understand what your
  users need most.
* **Customizable Rating Messages:** The team rating messages at the end of a ticket have been improved and can now be
  fully customized.

## Get Support-Bot Today {#get-today}

:::warning
Please note that Support Bot V3 is a Beta version and can be unstable. Once switched, you can't switch back. Please use
at your own risk and let us know your
feedback or any issues in our [customer support](https://scnx.app/help).
:::

This massive update is available right now in the Beta version. Please note that the Support-Bot is included in all our
paid plans, with the [Unlimited plan](/docs/scnx/guilds/plans)
starting at just <PlanPrice plan="UNLIMITED" type="MONTHLY" /> (or <PlanPrice plan="UNLIMITED" type="YEARLY" />), but
pricing might differ outside the European Union based on your region.

To switch to the new Support-Bot V3, follow these instructions:

1. Open our [Modmail Dashboard](https://scnx.app/glink?page=support-system/manage).
2. Click on "Change" next to the displayed branch.
3. Select the Beta branch.
4. Click on "Confirm" to confirm the switch and to acknowledge that you can't switch back to the old version.
5. The migration will now start. This might take a few minutes, please be patient. If you run into issues, please wait a few minutes and reload the page. If that doesn't help, please [contact our customer support](https://scnx.app/help).

![Screenshot showing a ticket on our web-based ticket log viewer](@site/blog/assets/support-bot-beta/en/switch-beta.png)