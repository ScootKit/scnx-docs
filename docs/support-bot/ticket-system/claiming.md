---
sidebar_position: 5
title: Ticket Claiming
description: Configure ticket claiming to keep your tickets organized.
---

# Ticket Claiming

## Features {#features}

* Enable ticket claiming to prevent multiple team members from working on the same ticket.
* Hide unassigned tickets from a team member.
* Lock the channel before a ticket is claimed.
* Send assignment notifications to a channel to inform team members about new tickets.

<h4>Images coming soon ✨</h4>

## Setup {#setup}

* Create a private text channel for assignment notifications on your Discord server.
* Visit the [Ticket Claiming](https://scnx.app/glink?page=support-system/ticket-system/claiming) page in your dashboard.
* <a href="#configuration">Configure</a> the available options.

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field | Description |
| --- | --- |
| Enable ticket claiming? | Enables or disables the feature for your ticket system. |
| Ticket assignment notification | Your bot will send assignment notifications to this channel as soon as new tickets are created. |
| Lock ticket channel before a ticket is claimed? | If enabled, team members can’t write in the channel before the ticket is claimed because the channel is locked. |
| Hide tickets that aren’t assigned to a team member | If enabled, team members will only see tickets assigned to them. |

### Advanced message configuration {#advanced-message-configuration}

| Field | Description |
| --- | --- |
| Pending assignment message | Your bot will send this message in the ticket channel while the assignment is pending. |
| Show claim button in the ticket | If enabled, a claim button is added to the ticket message so team members can assign the ticket to themselves directly. Otherwise, they must use the button under the <a href="#main-configuration">assignment notification</a>. |
| Assignment message | Your bot will send this message in the ticket channel after a successful assignment. |
| Team member ticket notification message | Your bot will send this message to the <a href="#main-configuration">configured</a> channel as soon as a new ticket is created. |
