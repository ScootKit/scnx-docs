---
sidebar_position: 3
title: Configuration
description: Configure all core features for your ticket system!
---

# Configuration

## Main configuration {#main-configuration}

### Features {#main-configuration-features}

* Enable or disable the ticket system for your Discord server.
* Configure categories, channels, and roles to organize your tickets.
* Enable AI summaries to receive an automatically generated summary after a ticket is closed.
* Configure additional options to get full control over your ticket system.

<h4>Images coming soon ✨</h4>

### Setup {#main-configuration-setup}

* Create a category for new tickets and a private text channel for ticket logs on your Discord server.
* Create the relevant roles on your Discord server that should later get access to tickets.
* Visit the [Main configuration](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=main) section in your dashboard.
* [Configure](#main-configuration-configuration) the available options.

### Commands {#main-configuration-commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| ``/ticket admin-open`` | Allows team members to create new tickets with specific users.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Allow team members to open tickets on behalf of a user?" is [enabled](#main-configuration-configuration).*</blockquote></details></small> |
| ``/ticket close`` | Allows team members and users to close tickets.<br/><small><details><summary>Note</summary><blockquote>*Users can only close tickets if "Allow users to close their own tickets?" is [enabled](#ticket-closing-configuration).*</blockquote></details></small> |
| ``/ticket form`` | Sends a specific [form](../general/forms.md) into a ticket channel. |
| ``/ticket open`` | Opens a new ticket (with a specific ticket topic).<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Allow users to open tickets via command?" is [enabled](#main-configuration-configuration).*</blockquote></details></small> |

### Configuration {#main-configuration-configuration}

| Field | Description |
| --- | --- |
| Enable ticket system? | Enables or disables the ticket system. |
| Enable maintenance mode? | If enabled, no actions related to tickets can be performed.<br/><small><details><summary>Note</summary><blockquote>*Actions can still be performed and messages can still be sent in already opened tickets.*</blockquote></details></small> |
| Maintenance mode message | This message is shown when ticket actions are performed during maintenance mode.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Enable maintenance mode?" is enabled.*</blockquote></details></small> |
| Allow users to open tickets via command? | If enabled, users can create a new ticket using the command [``/ticket open``](#main-configuration-commands). |
| Allow team members to open tickets on behalf of a user? | If enabled, team members can create a ticket with a user using the command [``/ticket admin-open``](#main-configuration-commands).<br/><small><details><summary>Note</summary><blockquote>*Restrictions like multiple open tickets or opening hours are ignored.*</blockquote></details></small> |
| Category for new tickets | New tickets are created in this category by default.<br/><small><details><summary>Note</summary><blockquote>*You can configure other categories for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md).*</blockquote></details></small> |
| Team member roles | These roles get access to tickets by default and are mentioned when a new ticket is created.<br/><small><details><summary>Note</summary><blockquote>*You can configure other roles for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md).*</blockquote></details></small> |
| Log channel | All support-relevant messages are sent to this channel.<br/><small><details><summary>Note</summary><blockquote>*You can configure other log channels for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md).*</blockquote></details></small> |
| Ticket message | This message is sent into the ticket channel when a new ticket is created.<br/><small><details><summary>Note</summary><blockquote>*You can configure other messages for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md).*</blockquote></details></small> |
| Allow only one ticket per user (global) | If enabled, a user can have at most one ticket open at a time.<br/><small><details><summary>Note</summary><blockquote>*You can configure other ticket limits for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md).*</blockquote></details></small> |
| AI summary of ticket transcripts | If enabled, an AI-generated summary of the ticket transcript is generated after a ticket is closed.<br/><small><details><summary>Note</summary><blockquote>*This feature uses your server’s [AI credit](https://faq.scnx.app/ki-auf-scnx/) and certain data is shared with "modmail.net" (an SCNX product). You can find our privacy policy [here](https://scootk.it/scnx-privacy).*</blockquote></details></small> |
| Allow team members to rename tickets? | If enabled, team members can rename tickets using the command [``/ticket rename``](#main-configuration-commands).<br/><small><details><summary>Note</summary><blockquote>*After manually changing the ticket name, it will no longer be changed automatically when transferring the ticket to another topic ([if enabled](./ticket-topics.md)).*</blockquote></details></small> |
| Show rename button under the ticket message? | If enabled, a button to edit the ticket name is added under the ticket message.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Allow team members to rename tickets?" is enabled.*</blockquote></details></small> |
| Rename button text | This text is shown on the rename button.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Show rename button under the ticket message?" is enabled.*</blockquote></details></small> |
| Ticket rename message | This message is sent into the ticket channel when a ticket is renamed.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Allow team members to rename tickets?" is enabled.*</blockquote></details></small> |

## Ticket opening message {#ticket-open-messages}

### Features {#ticket-open-messages-features}

* Let your users create new tickets easily via buttons or dropdown menus.
* Send multiple ticket opening messages with different [ticket topics](./ticket-topics.md) into different channels to spread ticket creation across multiple channels.
* Choose between buttons or dropdown menus for each message to provide the best user experience.

<h4>Images coming soon ✨</h4>

### Setup {#ticket-open-messages-setup}

* Visit the [Ticket opening message](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-opening-messages) section in your dashboard.
* Click the blue "Add ticket opening message" button to create a new ticket opening message.
* [Configure](#ticket-open-messages-configuration) the available options.

### Configuration {#ticket-open-messages-configuration}

| Field | Description |
| --- | --- |
| Channel to send the message to | The ticket opening message is sent to this channel. |
| Message | This message is sent to the configured channel. |
| Show only specific ticket topics? | If enabled, only specific [ticket topics](./ticket-topics.md) are shown.<br/><small><details><summary>Note</summary><blockquote>*If you want to use buttons, you can select at most one ticket topic here.*</blockquote></details></small> |
| Use buttons? | If enabled, buttons are used instead of a dropdown menu. |

## Ticket closing {#ticket-closing}

### Features {#ticket-closing-features}

* Add a close button to the ticket message so tickets can be closed with one click.
* Allow tickets to be closed by the creator (instead of only by team members).
* Enable close requests to prevent team members from closing tickets immediately.

<h4>Images coming soon ✨</h4>

### Setup {#ticket-closing-setup}

* Visit the [Ticket closing](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-close) section in your dashboard.
* [Configure](#ticket-closing-configuration) the available options.

### Commands {#ticket-closing-commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| ``/ticket close [force:<Boolean>]`` | Allows team members to bypass close requests by setting the ``force`` option to ``True``.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Allow team members to close tickets without confirmation?" is [enabled](#ticket-closing-configuration).*</blockquote></details></small> |
| ``/ticket close-schedule`` | Allows team members to schedule ticket closing.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Can team members manually schedule when tickets should be closed?" is [enabled](#ticket-closing-configuration).*</blockquote></details></small> |

### Configuration {#ticket-closing-configuration}

| Field | Description |
| --- | --- |
| Show ticket close button in the ticket message? | If enabled, a button to close the ticket is added to the ticket message. |
| Close button text | This text is shown on the button under the ticket message.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Show ticket close button in the ticket message?" is enabled.*</blockquote></details></small> |
| Allow users to close their own tickets? | If enabled, users can close tickets in addition to team members. |
| Require team member confirmation before closing the ticket? | If enabled, users must create a close request before the ticket can be closed.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Allow users to close their own tickets?" is enabled.*</blockquote></details></small> |
| User confirmation message for close request | This message is sent into the ticket channel when a user creates a close request.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Require team member confirmation before closing the ticket?" is enabled.*</blockquote></details></small> |
| Send a DM confirmation when a ticket is closed? | If enabled, a DM is sent to the user after the ticket is closed. |
| Ticket close confirmation DM message | This message is sent to the user after the ticket is closed.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Send a DM confirmation when a ticket is closed?" is enabled.*</blockquote></details></small> |
| Attach transcript to the ticket close DM? | If enabled, a transcript is attached to the ticket close DM.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Send a DM confirmation when a ticket is closed?" is enabled.*</blockquote></details></small> |
| Require user confirmation before the ticket is closed? | If enabled, a close request is sent to the user before a team member can close the ticket. |
| Message for ticket close request by a team member | This message is sent into the ticket channel when a team member creates a close request.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Require user confirmation before the ticket is closed?" is enabled.*</blockquote></details></small> |
| Timeout for the close request | Within this period, the user must respond to the close request before the ticket is closed automatically.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Require user confirmation before the ticket is closed?" is enabled.*</blockquote></details><details><summary>Note</summary><blockquote>*Learn how to set durations in SCNX [here](../../custom-bot/additional-features.md#durations).*</blockquote></details></small> |
| Allow team members to close tickets without confirmation? | If enabled, team members can bypass the close request using the command [``/ticket close [force]``](#ticket-closing-commands).<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Require user confirmation before the ticket is closed?" is enabled.*</blockquote></details></small> |
| Can team members manually schedule when tickets should be closed? | If enabled, team members can schedule closing tickets using the command [``/ticket close-schedule``](#ticket-closing-commands). |
| Scheduled close message | This message is sent into the ticket channel when a ticket close is scheduled.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Can team members manually schedule when tickets should be closed?" is enabled.*</blockquote></details></small> |

## Additional ticket members {#additional-ticket-members}

### Features {#additional-ticket-members-features}

* Add additional (team) members to a ticket (or remove them) to resolve issues more easily.
* Configure whether the ticket creator can add new members themselves.
* Notify the user with a message about adding and removing users.
* Add a button to the ticket message to add members with one click.

<h4>Images coming soon ✨</h4>

### Setup {#additional-ticket-members-setup}

* Visit the [Additional ticket members](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=additional-users) section in your dashboard.
* [Configure](#additional-ticket-members-configuration) the available options.

### Commands {#additional-ticket-members-commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| ``/ticket users add`` | Adds a new user to the ticket. |
| ``/ticket users remove existing-additional-ticket-user:<User>`` | Removes a previously added user from the ticket. |

### Configuration {#additional-ticket-members-configuration}

| Field | Description |
| --- | --- |
| Allow additional ticket members? | Enables or disables the feature for the ticket system. |
| Show “add additional users” button in the ticket message | If enabled, a button to add ticket members is added to the ticket message. |
| Add-user button text | This text is shown on the button under the ticket message.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Show “add additional users” button in the ticket message" is enabled.*</blockquote></details></small> |
| Can the ticket owner add additional users? | If enabled, users can add additional members to their tickets. |
| Message for selecting additional users | This message is shown when selecting a user to add. |
| Message when a user is removed | This message is sent into the ticket channel when a user is removed. |
| Message when a user is added | This message is sent into the ticket channel when a user is added. |

## Auto close tickets {#auto-close-tickets}

### Features {#auto-close-tickets-features}

* Automatically close tickets after user inactivity to keep your ticket list tidy.
* Send a warning before automatic closing to remind the user about their ticket.
* Automatically mark tickets as resolved when the user leaves the server.

<h4>Images coming soon ✨</h4>

### Setup {#auto-close-tickets-setup}

* Visit the [Auto close tickets](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=auto-close) section in your dashboard.
* [Configure](#auto-close-tickets-configuration) the available options.

### Configuration {#auto-close-tickets-configuration}

| Field | Description |
| --- | --- |
| Automatically close ticket when a user leaves the server | If enabled, the ticket is automatically closed when the user leaves the server. |
| Send inactivity notification? | If enabled, an inactivity warning is sent into the ticket channel. |
| Notification message | This message is sent as the inactivity warning into the ticket channel.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Send inactivity notification?" is enabled.*</blockquote></details></small> |
| Notification period | The user must be inactive for this period to receive the inactivity warning.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Send inactivity notification?" is enabled.*</blockquote></details><details><summary>Note</summary><blockquote>*Learn how to set durations in SCNX [here](https://docs.scnx.xyz/docs/custom-bot/additional-features/#durations).*</blockquote></details></small> |
| Automatically close inactive tickets | If enabled, the ticket is automatically closed after inactivity. |
| Time window for automatically closing tickets | The user must be inactive for this period to automatically close the ticket.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Automatically close inactive tickets" is enabled.*</blockquote></details><details><summary>Note</summary><blockquote>*Learn how to set durations in SCNX [here](https://docs.scnx.xyz/docs/custom-bot/additional-features/#durations).*</blockquote></details></small> |

## Ticket reminders {#ticket-reminders}

### Features {#ticket-reminders-features}

* Send an automatic reminder when a team member is inactive in their ticket.
* Mention tickets that haven’t been handled yet in your reminder channel to draw attention to unanswered tickets.

<h4>Images coming soon ✨</h4>

### Setup {#ticket-reminders-setup}

* Create a private text channel for reminder notifications on your Discord server.
* Visit the [Ticket reminders](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-reminders) section in your dashboard.
* [Configure](#ticket-reminders-configuration) the available options.

### Configuration {#ticket-reminders-configuration}

| Field | Description |
| --- | --- |
| Reminder channel | Ticket reminders are sent to this channel. |
| Remind the last (or assigned) team member? | If enabled, a reminder message for the responsible team member is sent to the reminder channel. |
| Last team member reminder period | The team member must be inactive for this period to receive a reminder.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Remind the last (or assigned) team member?" is enabled.*</blockquote></details><details><summary>Note</summary><blockquote>*Learn how to set durations in SCNX [here](https://docs.scnx.xyz/docs/custom-bot/additional-features/#durations).*</blockquote></details></small> |
| Reminder message for the last team member | This message is sent as a reminder message for inactive team members.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Remind the last (or assigned) team member?" is enabled.*</blockquote></details></small> |
| Mention again if a ticket hasn’t been handled yet | If enabled, a reminder message is sent for unanswered tickets. |
| Period before reminding about an unassigned ticket | A ticket must be unanswered for this period before a reminder is sent.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Mention again if a ticket hasn’t received a team member response yet" is enabled.*</blockquote></details><details><summary>Note</summary><blockquote>*Learn how to set durations in SCNX [here](https://docs.scnx.xyz/docs/custom-bot/additional-features/#durations).*</blockquote></details></small> |
| Unassigned ticket reminder message | This message is sent as a reminder message for unanswered tickets.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Mention again if a ticket hasn’t received a team member response yet" is enabled.*</blockquote></details></small> |

## Ticket hold {#ticket-hold}

### Features {#ticket-hold-features}

* Put a ticket into hold mode to forward it to other team members or groups.
* Inform the user with a message about enabling/disabling hold in their ticket.
* Lock the channel so members can’t write in the channel while the ticket is on hold.
* As soon as a ticket is on hold, [Auto close tickets](#auto-close-tickets) is disabled for that ticket.

<h4>Images coming soon ✨</h4>

### Setup {#ticket-hold-setup}

* Visit the [Ticket hold](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-hold) section in your dashboard.
* [Configure](#ticket-hold-configuration) the available options.

### Commands {#ticket-hold-commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| ``/ticket hold`` | Enables or disables hold for the current ticket. |

### Configuration {#ticket-hold-configuration}

| Field | Description |
| --- | --- |
| Enable ticket hold command? | Enables or disables the feature for the ticket system. |
| Lock ticket when it is put on hold? | If enabled, the ticket channel is locked automatically as soon as the ticket is put on hold. |
| Hold message | This message is sent when hold is enabled. |
| Unhold message | This message is sent when hold is disabled. |

## Advanced message configuration {#advanced-message-configuration}

### Features {#advanced-message-configuration-features}

* Define the formatting of ticket channel names so tickets can be clearly identified.
* Configure various messages to perfectly match your server.
* Change the ticket ID generation type to use a different variant for the ticket ID in the channel name.

<h4>Images coming soon ✨</h4>

### Setup {#advanced-message-configuration-setup}

* Visit the [Advanced message configuration](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=advanced-messaging) section in your dashboard.
* [Configure](#advanced-message-configuration-configuration) the available options.

### Configuration {#advanced-message-configuration-configuration}

| Field | Description |
| --- | --- |
| Ticket channel name format | This format is used for ticket channel names.<br/><small><details><summary>Note</summary><blockquote>*You can configure other formats for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md).*</blockquote></details></small> |
| Error message: user already has an open ticket | This message is shown when a user tries to create another ticket while they already have one open.<br/><small><details><summary>Requirement</summary><blockquote>*Only shown if "Allow only one ticket per user (global)" is [enabled](#main-configuration-configuration).*</blockquote></details></small> |
| Error: ticket not found | This message is shown when trying to claim a ticket that has already been closed or deleted. |
| Error: command used outside ticket channels | This message is shown when ticket commands are used outside ticket channels. |
| Ticket-by-command confirmation message | This message is shown when opening a new ticket using the command [``/ticket open``](#main-configuration-commands).<br/><small><details><summary>Requirement</summary><blockquote>*Only shown if "Allow users to open tickets via command?" is [enabled](#main-configuration-configuration).*</blockquote></details></small> |
| Error: insufficient permissions to add users to a ticket | This message is shown when trying to add or remove ticket members without the required permissions.<br/><small><details><summary>Requirement</summary><blockquote>*Only shown if "Allow additional ticket members?" is [enabled](#additional-ticket-members-configuration).*</blockquote></details></small> |
| Error: user has already been added to the ticket | This message is shown when trying to add a ticket member that has already been added.<br/><small><details><summary>Requirement</summary><blockquote>*Only shown if "Allow additional ticket members?" is [enabled](#additional-ticket-members-configuration).*</blockquote></details></small> |
| Ticket ID generator | This ID is used for the ticket channel name. |

## Statistics channels {#statistics-channels}

### Features {#statistics-channels-features}

* Display different statistics in different channels and provide information about your ticket system.
* Add the statistics you want and adjust the channel name accordingly.

<h4>Images coming soon ✨</h4>

### Setup {#statistics-channels-setup}

* Create at least one voice channel for statistics on your Discord server.
* Visit the [Statistics channels](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=stats-channel) section in your dashboard.
* Click the blue "Add statistics channel" button to create a new item.
* [Configure](#statistics-channels-configuration) the available options.

### Configuration {#statistics-channels-configuration}

| Field | Description |
| --- | --- |
| Channel | This voice channel is used for the statistics item. |
| Include only tickets with specific ticket topics | If enabled, only selected [ticket topics](./ticket-topics.md) are included in the statistics. |
| Channel name | This text is used as the channel name. |
