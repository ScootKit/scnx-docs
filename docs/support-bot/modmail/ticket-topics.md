---
sidebar_position: 4
title: Ticket Topics
description: Categorize Modmail tickets with topics, route them to specific teams, require forms, and customize messages per topic.
---

# Ticket Topics

## Features {#features}

- Create different ticket topics to better categorize different kinds of requests.
- Transfer a ticket to another category if a user selected the wrong one.
- Override globally configured settings such as ticket roles, category for new tickets, ticket message, and much more for each individual ticket topic.
- Change the channel name format to recognize ticket topics at a glance (for example, by using different emojis).
- Decide whether users must submit a configured [form](/docs/support-bot/general/forms) before creating a ticket for a specific topic.

## Setup {#setup}

_If you want to override (certain) settings:_

- _Create a category for new tickets on your Discord server._
- _Create the required roles for team members on your Discord server that should have access to tickets._
- _Create a private text channel on your Discord server that you want to use as the log channel._

<br/>

- Visit the [Ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) page in your dashboard.
- <a href="#main-configuration">Configure</a> the available options.
- Create a new ticket topic by clicking the "Add ticket topic" button.
- <a href="#manage-ticket-topics">Configure</a> the available options for the respective ticket topic.

## Commands {#commands}

<SlashCommandExplanation />

| Command            | Description                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/ticket transfer` | _Only available if "Team members can transfer tickets to another topic" is <a href="#main-configuration">enabled</a>._<br/>Moves the current ticket to the selected topic. |

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field                                              | Description                                                                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Enable ticket topics                               | Enables or disables the feature for your modmail system.                                                                         |
| Team members can transfer tickets to another topic | If enabled, team members can transfer a ticket to a different ticket topic.                                                      |
| Users must confirm their topic selection           | If enabled, a confirmation message is sent after selecting a topic.                                                              |
| Confirmation message                               | _Only available if "Users must confirm their topic selection" is enabled._<br/>This message is sent as the confirmation message. |

### Manage ticket topics {#manage-ticket-topics}

| Field                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Topic name                                     | This name is used for the ticket topic and shown to users.                                                                                                                                                                                                                                                                                                                                                                                        |
| Topic description                              | This text is used as the description for the ticket topic and shown to users.                                                                                                                                                                                                                                                                                                                                                                     |
| Topic emoji                                    | This emoji is used for the ticket topic and shown to users.                                                                                                                                                                                                                                                                                                                                                                                       |
| Category                                       | New tickets for this topic are created in this category.                                                                                                                                                                                                                                                                                                                                                                                          |
| Users can open tickets with this topic         | If enabled, this ticket topic is available to users when creating a ticket.                                                                                                                                                                                                                                                                                                                                                                       |
| Show topic only for users with a specific role | If enabled, only users with the configured roles can see this ticket topic.                                                                                                                                                                                                                                                                                                                                                                       |
| Required roles                                 | These roles will be able to see the ticket topic.                                                                                                                                                                                                                                                                                                                                                                                                 |
| Use as FAQ option                              | If enabled, your bot will only send an information message when this topic is selected, instead of creating a ticket.                                                                                                                                                                                                                                                                                                                             |
| Message sent to the user when opening a ticket | This message is sent to the user when a ticket is created with this topic.                                                                                                                                                                                                                                                                                                                                                                        |
| Override channel access                        | These roles get access to tickets for this topic. By default, your [configured roles](/docs/support-bot/modmail/configuration#main-configuration-configuration) are used.                                                                                                                                                                                                                                                                         |
| Override ping roles                            | These roles are mentioned when a ticket is created with this topic. By default, your [configured roles](/docs/support-bot/modmail/configuration#main-configuration-configuration) are used.                                                                                                                                                                                                                                                       |
| Send transfer message                          | _Only available if "Team members can transfer tickets to another topic" is <a href="#main-configuration">enabled</a>._<br/>This message is sent when a team member transfers a user's ticket to another topic.                                                                                                                                                                                                                                    |
| Transfer message                               | _Only available if "Team members can transfer tickets to another topic" and "Send transfer message" are enabled._<br/>This message is sent into the ticket channel when a ticket is moved to another topic.                                                                                                                                                                                                                                       |
| Ping roles again when transferring             | _Only available if "Team members can transfer tickets to another topic" is <a href="#main-configuration">enabled</a>._<br/>If enabled, the configured roles are mentioned again when transferring the ticket to another topic.                                                                                                                                                                                                                    |
| Require form submission before opening         | If enabled, the user must first fill out a [form](/docs/support-bot/general/forms) before they can create a ticket for this topic.                                                                                                                                                                                                                                                                                                                |
| Form that must be completed                    | _Only available if "Require form submission before opening" is enabled._<br/>This form must be completed before opening the ticket.                                                                                                                                                                                                                                                                                                               |
| Staff-opened welcome message                   | This message is sent when a team member opens a ticket on behalf of a user with this topic. Use a different message to inform the user that a team member initiated the conversation.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Allow staff to open tickets on behalf of a user?" is [enabled](/docs/support-bot/modmail/configuration#main-configuration-configuration)._</blockquote></details></small> |
| Override log channel                           | This channel is used as the log channel for this topic. By default, your [configured log channel](/docs/support-bot/modmail/configuration#main-configuration-configuration) is used.                                                                                                                                                                                                                                                              |
| Override ticket channel name?                  | If enabled, you can define a custom ticket channel name for this topic.                                                                                                                                                                                                                                                                                                                                                                           |
| Ticket channel name format                     | This text is used for the channel name of tickets with this topic. By default, your [configured ticket channel name format](/docs/support-bot/modmail/configuration#main-configuration-configuration) is used.                                                                                                                                                                                                                                    |
