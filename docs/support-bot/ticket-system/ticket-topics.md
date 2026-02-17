---
sidebar_position: 4
title: Ticket Topics
description: Create and manage ticket topics to keep your tickets organized and unlock additional advantages.
---

# Ticket Topics

## Features {#features}

* Create different ticket topics to better categorize different kinds of requests.
* Transfer a ticket to another category if a user selected the wrong one.
* Override globally configured settings such as ticket roles, category for new tickets, ticket message, and much more for each individual ticket topic.
* Change the channel name format to recognize ticket topics at a glance (for example, by using different emojis).
* Decide whether users must submit a configured [form](/docs/support-bot/general/forms) before creating a ticket for a specific topic.

<h4>Images coming soon ✨</h4>

## Setup {#setup}

*If you want to override (certain) settings:*

* *Create a category for new tickets on your Discord server.*
* *Create the required roles for team members on your Discord server that should have access to tickets.*
* *Create a private text channel on your Discord server that you want to use as the log channel.*

<br/>

* Visit the [Ticket topics](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) page in your dashboard.
* <a href="#main-configuration">Configure</a> the available options.
* Create a new ticket topic by clicking the “Add ticket topic” button.
* <a href="#manage-ticket-topics">Configure</a> the available options for the respective ticket topic.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| ``/ticket transfer`` | Moves a ticket to the selected topic.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Team members can transfer tickets to another topic” is <a href="#main-configuration">enabled</a>.*</blockquote></details></small> |

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field | Description |
| --- | --- |
| Enable ticket topics | Enables or disables the feature for your ticket system. |
| Team members can transfer tickets to another topic | If enabled, team members can transfer a ticket to another ticket topic. |
| Show ticket transfer button? | If enabled, a button to transfer a ticket to another ticket topic will be added to the ticket message.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Team members can transfer tickets to another topic” is enabled.*</blockquote></details></small> |
| Remove assigned team member when a ticket is transferred? | If enabled, the assigned team member is removed when transferring the ticket and the ticket roles are mentioned again.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Team members can transfer tickets to another topic” is enabled.*</blockquote></details></small> |
| Transfer button text | This text is shown on the button under the ticket message.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Team members can transfer tickets to another topic” is enabled.*</blockquote></details></small> |

### Manage ticket topics {#manage-ticket-topics}

| Field | Description |
| --- | --- |
| Topic name | This text is used as the name for the ticket topic and shown to users. |
| Topic description | This text is used as the description for the ticket topic and shown to users. |
| Topic emoji | This emoji is used for the ticket topic and shown to users. |
| Category | New tickets for this ticket topic are created in this category. |
| Limit the number of tickets a user can have open at the same time in this topic? | If enabled, users can only create a limited number of tickets in this ticket topic at the same time. |
| Limit of simultaneously open tickets | This number of tickets can be open at the same time for this ticket topic.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Limit the number of tickets a user can have open at the same time in this topic?” is enabled.*</blockquote></details></small> |
| Users can open tickets with this topic | If enabled, users can create tickets with this ticket topic. |
| Use as FAQ option | If enabled, only a message is shown when selecting the ticket topic. |
| Button color in the opening message | This color is used for the button in the ticket opening message. |
| FAQ message | This message is shown when selecting the FAQ ticket topic.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Use as FAQ option” is enabled.*</blockquote></details></small> |
| Ticket message | This message is sent to the ticket channel when a ticket is created with this ticket topic. |
| Ticket opening confirmation message | This message is shown to users when a ticket is created. |
| Required roles to open tickets | If enabled, only users with configured roles can create a ticket using this ticket topic. |
| Required roles | These roles can create a ticket with this ticket topic.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Required roles to open tickets” is enabled.*</blockquote></details></small> |
| Error message if roles are missing | This message is shown to users when creating a ticket with missing permissions.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Required roles to open tickets” is enabled.*</blockquote></details></small> |
| Require form submission before opening | If enabled, users must submit a [form](/docs/support-bot/general/forms) before creating a ticket with this ticket topic. |
| Form that must be completed | This form must be completed before creating a ticket with this ticket topic.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Require form submission before opening” is enabled.*</blockquote></details></small> |
| Send transfer message | If enabled, a message is sent to the ticket channel when transferring a ticket with this ticket topic.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Team members can transfer tickets to another topic” is <a href="#main-configuration">enabled</a>.*</blockquote></details></small> |
| Transfer message | This message is sent to the ticket channel when a ticket with this ticket topic is transferred.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Send transfer message” is enabled.*</blockquote></details></small> |
| Override team member roles | These roles get access to tickets with this ticket topic and are mentioned when the ticket is created.<br/><small><details><summary>Note</summary><blockquote>*By default, your [configured roles](/docs/support-bot/ticket-system/configuration#main-configuration-configuration) are used.*</blockquote></details></small> |
| Override log channel | This channel is used as the log channel for this ticket topic.<br/><small><details><summary>Note</summary><blockquote>*By default, your [configured log channel](/docs/support-bot/ticket-system/configuration#main-configuration-configuration) is used.*</blockquote></details></small> |
| Override ticket channel name format? | If enabled, you can set a custom name format for the ticket channel for this ticket topic. |
