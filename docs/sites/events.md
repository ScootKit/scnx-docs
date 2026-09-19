---
sidebar_position: 6
title: Events
description: Show your upcoming Discord scheduled events on your SCNX site with the Events block.
---

# Events

The **Events** block shows your community's upcoming Discord scheduled events on your site, so visitors can see what is coming up without opening Discord first.

## How it works {#how-it-works}

Events are pulled straight from your server's **Discord scheduled events**. You do not enter them on your site. You create them in Discord, and the block shows the upcoming ones automatically.

Add the block to any page and, for each upcoming event, it shows:

- the event name,
- the start time in your visitor's local format,
- a short description,
- the cover image, if the event has one,
- a **View on Discord** link that opens the event in Discord.

You can set **how many events** to show, and turn on a **countdown to the next event**.

## Creating events in Discord {#create-in-discord}

Events come from Discord, so you create them there:

1. In your Discord server, open the server name menu and choose **Events**, or use the Events tab.
2. Click **Create Event**.
3. Set where it takes place (a voice channel, a stage, or somewhere else), give it a name, a date and time, and optionally a description and cover image.
4. Save it.

The event now counts as "upcoming" until its start time, so it appears in the Events block. Once it has passed, it drops off on its own.

## Empty state {#empty-state}

If there are no upcoming events, the block shows a friendly "no upcoming events" message rather than an error. The same thing happens if we cannot read your events for any reason (for example if the bot is missing or lacks access): the block simply shows the empty state and never breaks your page.

While you are editing, the block shows sample placeholder events so you can see how it will look.

:::note No sign-ups on the site
Visitors join and RSVP to events in Discord, through the **View on Discord** link. There is no separate sign-up on the site itself.
:::
