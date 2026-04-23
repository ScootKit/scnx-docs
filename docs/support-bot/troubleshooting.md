---
sidebar_position: 4
title: Troubleshooting
description: Solutions for common issues with the SCNX Support Bot.
---

# Troubleshooting Support-Bot issues

## General issues {#general}

### The bot is offline or not responding {#bot-offline}

- Make sure the bot is online in your [dashboard](https://scnx.app/glink?page=support-system/manage).
- Try reloading the bot using the reload button on the dashboard.
- Check that the bot has been invited to your server and has the required permissions.

### Commands are not showing up {#commands-not-showing}

- Make sure the feature related to the command is enabled in your dashboard.
- Verify that the bot has permission to register slash commands on your server.
- Try kicking and re-inviting the bot using the invite link from your [dashboard](https://scnx.app/glink?page=support-system/manage).

### The bot is not sending messages {#bot-not-sending}

- Check that the bot has the "Send Messages" and "Embed Links" permissions in the relevant channels.
- If using ticket categories, make sure the bot has permission to manage channels in the category.

## Modmail issues {#modmail}

### Users cannot open tickets via DM {#dm-tickets-not-working}

- Verify that Modmail is [enabled](/docs/support-bot/modmail/configuration#main-configuration-configuration) in your dashboard.
- Check that maintenance mode is not enabled.
- Ensure the user is not on the [blocklist](/docs/support-bot/modmail/basics#blocklist).
- Make sure the user shares a server with the bot and has DMs enabled.
- If [opening hours](/docs/support-bot/general/opening-hours) are configured and "completely disable message processing outside opening hours" is enabled, tickets cannot be created outside your opening hours.

### Ticket channels are not being created {#no-ticket-channels}

- Verify that the configured ticket category exists and the bot has the "Manage Channels" permission in it.
- Check that the category is not full (Discord limits categories to 50 channels).

### Messages are not being relayed {#messages-not-relayed}

- Check that the ticket channel still exists and the bot has permission to send messages in it.
- Make sure maintenance mode is not enabled.
- Verify that the user has not been blocked.

## Ticket System issues {#ticket-system}

### Users cannot open tickets {#tickets-not-opening}

- Verify that the Ticket System is [enabled](/docs/support-bot/ticket-system/configuration#main-configuration-configuration) in your dashboard.
- Check that maintenance mode is not enabled.
- Ensure the user is not on the blocklist.
- If "Allow only one ticket per user" is enabled, the user may already have an open ticket.
- If ticket topics with required roles are configured, verify the user has the necessary roles.
- If [opening hours](/docs/support-bot/general/opening-hours) are configured, check whether the support bot is currently closed.

### Ticket opening messages are not appearing {#opening-messages-not-appearing}

- Make sure you have configured at least one [ticket opening message](/docs/support-bot/ticket-system/configuration#ticket-open-messages) in your dashboard.
- Verify that the bot has permission to send messages in the configured channel.
- Reload the bot after making configuration changes.

### Claiming is not working {#claiming-not-working}

- Verify that ticket claiming is [enabled](/docs/support-bot/ticket-system/claiming#main-configuration) in your dashboard.
- Make sure the claim button is enabled if you want staff to claim via button.
- Check that the notification channel exists and the bot has permission to send messages in it.

## Voice Support issues {#voice-support}

### The `/voice` commands don't show up {#voice-commands-missing}

- Voice Support is an early-access preview. The `/voice` commands only register while the server owner holds the [ScootKit Membership](https://membership.scootkit.com) Early Access perk.
- Make sure Voice Support is [enabled](/docs/support-bot/voice-support/configuration#main-configuration-configuration) in your dashboard.
- Reload the bot after flipping the Early Access or Enable Voice Support toggles - the slash-command list only refreshes on bot restart.

### Voice Support is stuck offline {#voice-support-offline}

- Check the **State mode**. In `staff-presence` mode, Voice Support is closed until at least one staff member joins a channel in the support category. In `opening-hours` mode, it's closed outside your configured [opening hours](/docs/support-bot/general/opening-hours).
- Make sure a member of a [staff role](/docs/support-bot/voice-support/configuration#main-configuration-configuration) is connected to a voice channel **inside the support category** (not the queue channel itself).
- If you just toggled Voice Support on, give the dashboard embed up to 60 seconds to re-render - the status ticker runs once a minute.

### Users aren't getting position DMs {#no-position-dms}

- The user must have **direct messages from server members** enabled in Discord privacy settings. The bot can't DM a user who has DMs closed for the server.
- Check that the user actually joined the [queue voice channel](/docs/support-bot/voice-support/configuration#main-configuration-configuration) - not a support channel directly.
- If position updates stop arriving mid-wait, the user may have deleted the original DM message; the bot edits the existing DM rather than sending a new one.

### "Pull Next User" button does nothing / is disabled {#pull-next-not-working}

- The button is disabled while Voice Support is offline or the queue is empty - check the dashboard embed's status.
- The staff member clicking must be sitting in a **support channel** (any voice channel in the support category other than the queue channel). Clicking from the queue channel is intentionally ignored - being in the queue is for users, not staff.
- Confirm the clicking member has one of the configured [staff roles](/docs/support-bot/voice-support/configuration#main-configuration-configuration).

### Waiting music isn't playing {#music-not-playing}

- Verify **waiting music** is enabled and at least one track is configured in the [waiting-music section](/docs/support-bot/voice-support/configuration#waiting-music).
- If three tracks failed to stream in a row, the bot automatically disables playback and posts a notice in the [dashboard channel](/docs/support-bot/voice-support/configuration#dashboard-channel). Fix or replace the failing URLs and re-enable music.
- With **Join on demand** enabled, the bot only connects once a user joins the queue channel - an empty queue means no music is streaming by design.
- AI-generated tracks that 404 after being deleted from the [file library](/docs/scnx/guilds/files) will fail to play - regenerate or upload a replacement.

### Queue channel name doesn't change between open/offline {#channel-name-stuck}

- Make sure **Enable channel rename** is on and both the online/offline names are set - a blank target name simply skips that transition.
- Discord rate-limits channel renames to 2 per 10 minutes. The bot enforces a 4-minute cooldown on its side; rapid open/close flaps may queue a rename until the cooldown clears.
- Confirm the bot has **Manage Channel** permission on the queue channel.

## Still need help? {#still-need-help}

If your issue is not listed here, feel free to create a ticket on our [Discord server](https://scootk.it/dc-de) - we're happy to help!
