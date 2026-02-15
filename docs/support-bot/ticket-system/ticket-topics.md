---
sidebar_position: 4
title: Ticket Topics
description: Create and manage ticket topics to keep your tickets organized.
---

# Ticket Topics

## Features {#features}

* Create different ticket topics to better categorize different kinds of requests.
* Transfer a ticket to a different category if the user selected the wrong one.
* Override global settings such as ticket roles, the category for new tickets, the ticket message, and much more per ticket topic.
* Change the channel name format to quickly recognize ticket topics at a glance (for example, by using different emojis).
* Decide whether users must submit a configured [form](../general/forms.md) before creating a ticket for a specific topic.

<h4>Images coming soon ✨</h4>

## Setup {#setup}

*If you want to override (certain) settings:*

* *Create a category for new tickets on your Discord server.*
* *Create the required roles for team members on your Discord server that should get access to tickets.*
* *Create a private text channel on your Discord server that you want to use as the log channel.*

<br/>

* Visit the [Ticket topics](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) page in your dashboard.
* <a href="#main-configuration">Configure</a> the available options.
* Create a new ticket topic by clicking the “Add ticket topic” button.
* <a href="#manage-ticket-topics">Configure</a> the available options for the respective ticket topic.

## Commands {#commands}

<SlashCommandExplanation></SlashCommandExplanation>

| Command | Description |
| --- | --- |
| `/ticket transfer` | *Only available if “Team members can transfer tickets to another topic” is <a href="#main-configuration">enabled</a>.*<br/>Moves the current ticket to the selected topic. |

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field | Description |
| --- | --- |
| Enable ticket topics | Enables or disables the feature for your ticket system. |
| Team members can transfer tickets to another topic | If enabled, team members can transfer a ticket to a different ticket topic. |
| Show ticket transfer button? | *Only available if “Team members can transfer tickets to another topic” is enabled.*<br/>If enabled, a button is added to the ticket message so team members can move a ticket to another topic. Otherwise, they must use <a href="#commands"><code>/ticket transfer</code></a>. |
| Remove assigned team member when a ticket is transferred? | *Only available if “Team members can transfer tickets to another topic” is enabled.*<br/>If enabled, the currently assigned team member is removed when transferring, and the configured ticket roles are mentioned again for a new assignment. |
| Transfer button text | *Only available if “Team members can transfer tickets to another topic” is enabled.*<br/>This text is shown on the button under the ticket message. |

### Manage ticket topics {#manage-ticket-topics}

| Field | Description |
| --- | --- |
| Topic name | This name is used for the ticket topic and shown to users. |
| Topic description | This text is used as the description for the ticket topic and shown to users. |
| Topic emoji | This emoji is used for the ticket topic and shown to users. |
| Category | New tickets for this topic are created in this category. |
| Users can open tickets with this topic | If enabled, this ticket topic is available to users when creating a ticket. |
| Use as FAQ option | If enabled, your bot will only send an information message when this topic is selected, instead of creating a ticket. |
| FAQ message | *Only available if “Use as FAQ option” is enabled.*<br/>This message will be sent when the user selects this FAQ topic. |
| Ticket message | This message is sent when a ticket is created with this topic. |
| Ticket opening confirmation message | This message is shown to the user after they successfully created a ticket. |
| Required roles to open tickets | If enabled, only users with the configured roles can create a ticket with this topic. |
| Required roles | *Only available if “Required roles to open tickets” is enabled.*<br/>These roles can create a ticket with this topic. |
| Error message if roles are missing | *Only available if “Required roles to open tickets” is enabled.*<br/>This message is shown if the user doesn’t have the required roles to create a ticket. |
| Require form submission before opening | If enabled, the user must first fill out a [form](../general/forms.md) before they can create a ticket for this topic. |
| Form that must be completed | *Only available if “Require form submission before opening” is enabled.*<br/>This form must be completed before opening the ticket. |
| Send transfer message | *Only available if “Team members can transfer tickets to another topic” is <a href="#main-configuration">enabled</a>.*<br/>This message is sent when a team member transfers a user’s ticket to another topic. |
| Override team member roles | These roles get access to tickets for this topic and are mentioned when a ticket is created. By default, your [configured roles](./configuration.md#main-configuration-configuration) are used. |
| Override log channel | This channel is used as the log channel for this topic. By default, your [configured log channel](./configuration.md#main-configuration-configuration) is used. |
| Ticket channel name format | This text is used for the channel name of tickets with this topic. By default, your [configured ticket channel name format](./configuration.md#main-configuration-configuration) is used. |

