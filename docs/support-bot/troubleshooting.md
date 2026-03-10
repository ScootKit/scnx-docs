---
sidebar_position: 4
title: Troubleshooting
description: Solutions for common issues with the SCNX Support Bot.
---

# Troubleshooting Support-Bot issues

## General issues {#general}

### The bot is offline or not responding {#bot-offline}

* Make sure the bot is online in your [dashboard](https://scnx.app/glink?page=support-system/manage).
* Try reloading the bot using the reload button on the dashboard.
* Check that the bot has been invited to your server and has the required permissions.

### Commands are not showing up {#commands-not-showing}

* Make sure the feature related to the command is enabled in your dashboard.
* Verify that the bot has permission to register slash commands on your server.
* Try kicking and re-inviting the bot using the invite link from your [dashboard](https://scnx.app/glink?page=support-system/manage).

### The bot is not sending messages {#bot-not-sending}

* Check that the bot has the "Send Messages" and "Embed Links" permissions in the relevant channels.
* If using ticket categories, make sure the bot has permission to manage channels in the category.

## Modmail issues {#modmail}

### Users cannot open tickets via DM {#dm-tickets-not-working}

* Verify that Modmail is [enabled](./modmail/configuration.md#main-configuration-configuration) in your dashboard.
* Check that maintenance mode is not enabled.
* Ensure the user is not on the [blocklist](./modmail/basics.md#blacklist).
* Make sure the user shares a server with the bot and has DMs enabled.
* If [opening hours](./general/opening-hours.md) are configured and "completely disable message processing outside opening hours" is enabled, tickets cannot be created outside your opening hours.

### Ticket channels are not being created {#no-ticket-channels}

* Verify that the configured ticket category exists and the bot has the "Manage Channels" permission in it.
* Check that the category is not full (Discord limits categories to 50 channels).

### Messages are not being relayed {#messages-not-relayed}

* Check that the ticket channel still exists and the bot has permission to send messages in it.
* Make sure maintenance mode is not enabled.
* Verify that the user has not been blocked.

## Ticket System issues {#ticket-system}

### Users cannot open tickets {#tickets-not-opening}

* Verify that the Ticket System is [enabled](./ticket-system/configuration.md#main-configuration-configuration) in your dashboard.
* Check that maintenance mode is not enabled.
* Ensure the user is not on the blocklist.
* If "Allow only one ticket per user" is enabled, the user may already have an open ticket.
* If ticket topics with required roles are configured, verify the user has the necessary roles.
* If [opening hours](./general/opening-hours.md) are configured, check whether the support bot is currently closed.

### Ticket opening messages are not appearing {#opening-messages-not-appearing}

* Make sure you have configured at least one [ticket opening message](./ticket-system/configuration.md#ticket-open-messages) in your dashboard.
* Verify that the bot has permission to send messages in the configured channel.
* Reload the bot after making configuration changes.

### Claiming is not working {#claiming-not-working}

* Verify that ticket claiming is [enabled](./ticket-system/claiming.md#main-configuration) in your dashboard.
* Make sure the claim button is enabled if you want staff to claim via button.
* Check that the notification channel exists and the bot has permission to send messages in it.

## Still need help? {#still-need-help}

If your issue is not listed here, feel free to create a ticket on our [Discord server](https://scootk.it/dc-de) — we're happy to help!
