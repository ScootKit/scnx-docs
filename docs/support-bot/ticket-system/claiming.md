---
sidebar_position: 5
title: Ticket Claiming
description: Configure ticket claiming to keep your tickets organized as efficiently as possible!
---

# Ticket Claiming

## Features {#features}

* Enable claiming of tickets to prevent tickets from being worked on twice.
* Hide tickets that aren’t assigned to a team member.
* Lock the channel before a ticket is claimed.
* Send assignment notifications to a channel to inform team members about new tickets.

<h4>Images coming soon ✨</h4>

## Setup {#setup}

* Create a private text channel for assignment notifications on your Discord server.
* Visit the [Ticket Claiming](https://scnx.app/glink?page=support-system/ticket-system/claiming) page in your dashboard.
* [Configure](#configuration) the available options.

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field | Description |
| --- | --- |
| Enable ticket claiming? | Enables or disables the feature for the ticket system. |
| Ticket assignment notification | The assignment notification is sent to this channel when a new ticket is created. |
| Lock ticket channel before a ticket is assigned? | If enabled, the ticket channel is locked before a ticket is assigned. |
| Hide tickets that aren’t assigned to a team member | If enabled, team members will only see tickets that are assigned to them. |
| Allow team members to remove assigned team members or assign other team members? | If enabled, team members can assign other team members to the ticket or remove the assignment using the command [``/ticket assign``](#commands). |
| Rename tickets when they are claimed? | If enabled, the ticket channel name is renamed after a successful assignment. |
| Ticket name to use after claiming | This text is used as the name for the ticket channel.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Rename tickets when they are claimed?" is enabled.*</blockquote></details></small> |


### Advanced message configuration {#advanced-message-configuration}

| Field | Description |
| --- | --- |
| Pending assignment message | This message is sent to the ticket channel while the assignment is pending. |
| Show claim button in the ticket | If enabled, a button to assign is added to the ticket message. |
| Assignment message | This message is sent to the ticket channel after a successful assignment. |
| Team member ticket notification message | This message is sent to the [configured](#main-configuration) channel when a new ticket is created. |
