---
sidebar_position: 5
title: Ticket Claiming
description: Assign Modmail tickets to team members, auto-assign on first response, and control visibility of claimed tickets.
---

# Ticket Claiming

## Features {#features}

* Enable claiming of tickets to prevent tickets from being worked on twice.
* Automatically assign the first team member who responds to a ticket.
* Hide tickets that aren't assigned to a team member.
* Lock the channel before a ticket is claimed so only the assigned team member can respond.
* Configure whether non-assigned team members can view or write in claimed tickets.



## Setup {#setup}

* Visit the [Ticket Claiming](https://scnx.app/glink?page=support-system/modmail/claiming) page in your dashboard.
* [Configure](#configuration) the available options.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| ``/modmail claim`` | Claims the current ticket and assigns it to you. |
| ``/modmail remove-claim`` | Removes your assignment from the current ticket. |
| ``/modmail assign user:<User>`` | Assigns a specific team member to the current ticket. |

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field | Description |
| --- | --- |
| Enable ticket claiming? | Enables or disables the claiming feature for your Modmail system. |
| Require ticket claiming? | If enabled, team members must claim a ticket before they can respond to it.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Enable ticket claiming?" is enabled.*</blockquote></details></small> |
| Claimed tickets visible to all staff? | If enabled, all team members can see claimed ticket channels. If disabled, only the assigned team member can see them.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Enable ticket claiming?" is enabled.*</blockquote></details></small> |
| Non-assigned staff can write? | If enabled, non-assigned team members can write in claimed ticket channels (messages will not be transmitted to the user).<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Enable ticket claiming?" is enabled.*</blockquote></details></small> |
| Remove assigned team member on transfer? | If enabled, the assigned team member is removed when transferring the ticket to another topic.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Enable ticket claiming?" is enabled.*</blockquote></details></small> |
| Auto-assign first responder? | If enabled, the first team member to respond in the ticket channel is automatically assigned as the responsible team member.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Enable ticket claiming?" is enabled.*</blockquote></details></small> |

### Advanced message configuration {#advanced-message-configuration}

| Field | Description |
| --- | --- |
| Send assignment message? | If enabled, a message is sent to the user when a team member is assigned.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Enable ticket claiming?" is enabled.*</blockquote></details></small> |
| Assignment message | This message is sent to the user when a team member is assigned to their ticket.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Send assignment message?" is enabled.*</blockquote></details></small> |
| Send un-assignment message? | If enabled, a message is sent to the user when a team member is removed from the ticket.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Enable ticket claiming?" is enabled.*</blockquote></details></small> |
| Un-assignment message | This message is sent to the user when the assignment is removed.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Send un-assignment message?" is enabled.*</blockquote></details></small> |
| Send pending assignment message? | If enabled, a message is sent to the user while no team member has been assigned yet.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Require ticket claiming?" is enabled.*</blockquote></details></small> |
| Pending assignment message | This message is sent while the ticket is waiting for a team member to claim it.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Send pending assignment message?" is enabled.*</blockquote></details></small> |