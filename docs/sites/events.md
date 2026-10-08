---
sidebar_position: 6
title: Events
description: Show your upcoming Discord scheduled events on your SCNX site with the Events block.
---

# Events

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

The **Events** block shows your community's upcoming Discord scheduled events on your site, so visitors can see what is coming up without opening Discord first.

## How it works {#how-it-works}

Events are pulled straight from your server's **Discord scheduled events**. You do not enter them on your site. You create them in Discord, and the block shows the upcoming ones automatically. Your server's SCNX bot reads the events for you, so the bot needs to be on your server.

Add the block to any page. You find it in the block picker under **Content**. For each upcoming event, it shows:

- the event name,
- when it starts (and ends, if the event has an end time), in your visitor's time zone,
- a short description (long descriptions are shortened, the full text stays on Discord),
- the cover image, if the event has one,
- a **View on Discord** link that opens the event in Discord.

Events are always live. They are not part of a publish, so a new event shows up on your site without publishing again. It can take a few minutes to appear.

## Block options {#options}

Select the block to see its options in the right panel:

- **How many events** - how many event cards to show, soonest first. It is 3 by default, and you can change it.
- **Countdown to the next event** - adds a live countdown above the cards, with the name of the next event that has not started yet.

The panel also tells you how many upcoming events your server has right now, so you know whether the block will show anything before you publish.

The block has no text of its own to edit. While you edit, the canvas shows two sample events so you can see how the layout looks. The real events only appear on your live site and in the preview.

## Creating events in Discord {#create-in-discord}

Events come from Discord, so you create them there:

1. In your Discord server, open the server name menu and choose **Events**, or use the Events tab.
2. Click **Create Event**.
3. Set where it takes place (a voice channel, a stage, or somewhere else), give it a name, a date and time, and optionally a description and cover image.
4. Save it.

The event now shows up in the Events block. It stays there while it is running and drops off on its own once it is over. Cancelled events drop off too.

## Empty state {#empty-state}

If there are no upcoming events, the block shows a friendly "No upcoming events yet. Check back soon." message instead of an error. If your footer has a Discord social link, the message also offers a **Join us on Discord** link. You get the same empty message if we cannot read your events, for example because the bot is not on your server or lacks access. The block never breaks your page.

If a visitor's browser cannot load the events at all, the block says so in a short, neutral note instead of claiming there are no events.

:::note No sign-ups on the site
Visitors join and RSVP to events in Discord, through the **View on Discord** link. There is no separate sign-up on the site itself.
:::
