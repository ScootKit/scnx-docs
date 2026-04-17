---
sidebar_position: 4
title: Forms
description: Create custom forms and modal dialogs for your Discord support tickets  - collect structured information from users before or during a ticket.
---

# Forms

## Features {#features}

- Set up forms to collect information from users.
- Customize the questions and the dialog appearance.
- Send a form into a ticket via a command with minimal effort.
- Optionally require form submission before users can continue in Modmail or the Ticket System.
- Lock ticket channels until the form has been submitted (Ticket System only).

## Setup {#setup}

- Visit the [Forms](https://scnx.app/glink?page=support-system/forms) page in your dashboard.
- [Configure](#main-configuration) the available options.
- Create a new form by clicking the "Create new form" button.
- [Configure](#manage-forms) the available options for the respective form.
- Create a new form question by clicking "Edit form" in the [configuration](#main-configuration) and then clicking "Add field".
- [Configure](#manage-forms-questions) the available options for the respective form question.

## Commands {#commands}

<SlashCommandExplanation />

| Command                        | Description                                 |
| ------------------------------ | ------------------------------------------- |
| `/ticket form form:<FormName>` | Sends a form into the corresponding ticket. |

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dialog open button                                   | This text is shown on the button that opens the form dialog, which is attached to the message sent by the [`/ticket form`](#commands) command.                                                                                                                                                                                                                                                                  |
| Open dialog message (Modmail)                        | This message is sent when a user is asked to fill out a form in a Modmail ticket.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if Modmail is enabled._</blockquote></details></small>                                                                                                                                                                                          |
| Require form submission (Modmail)                    | If enabled, users cannot continue in Modmail until the form has been submitted.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if Modmail is enabled._</blockquote></details></small>                                                                                                                                                                                            |
| Ticket form message (Ticket System)                  | This message is sent in the ticket channel when a form is requested.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if the Ticket System is enabled._</blockquote></details></small>                                                                                                                                                                                             |
| Lock channel until form is submitted (Ticket System) | If enabled, the user cannot send messages in the ticket channel until the form has been submitted.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if the Ticket System is enabled._</blockquote></details></small>                                                                                                                                                               |
| Allow additional ticket members to submit forms      | If enabled, additional ticket members (not just the ticket owner) can submit forms in the ticket.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if the Ticket System is enabled and "Allow additional ticket members" is enabled in the [Ticket System configuration](/docs/support-bot/ticket-system/configuration#additional-ticket-members)._</blockquote></details></small> |

### Manage forms {#manage-forms}

| Field                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Form name                 | This text is shown as the title of your form and in the form selection menu.                                                                                                                                                                                                                                                                                                                                                                     |
| Dialog                    | These questions are shown in the form. More information on configuring form questions can be found [here](#manage-forms-questions).                                                                                                                                                                                                                                                                                                              |
| Custom submission message | If set, this message is shown to the user after they submit the form. If not set, a default confirmation message is used.<br/><small><details><summary>Available placeholders</summary><blockquote>`%formName%` (form name), `%field1%` / `%field2%` / ... (field values), `%field1_name%` / `%field2_name%` / ... (field labels), `%userID%`, `%tag%`, `%username%`, `%avatarUrl%`, `%mention%` (ticket author).</blockquote></details></small> |

### Manage form questions {#manage-forms-questions}

| Field                   | Description                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------- |
| Label                   | This text is shown as the title of your question.                                                    |
| Field type              | Depending on the selection, the user gets a small or large field (allows line breaks) to enter text. |
| Placeholder             | This text is used as the placeholder in the input field.                                             |
| Is this field required? | If enabled, the user must fill out this field.                                                       |
| Minimum input length    | The minimum number of characters the user must enter to submit the dialog.                           |
| Maximum input length    | The maximum number of characters the user is allowed to enter to submit the dialog.                  |
