---
sidebar_position: 3
title: Configuration
description: Configure core features for your modmail system.
---

# Configuration

## Main configuration {#main-configuration}

### Features {#main-configuration-features}

* Enable or disable modmail for your Discord server.
* Configure categories, channels, and roles to organize your tickets.
* Enable AI summaries to receive an automatically generated summary after a ticket is closed.
* Configure additional options to get full control over your modmail.

<h4>Images coming soon ✨</h4>

### Setup {#main-configuration-setup}

* Create a category for new tickets and a private text channel for ticket logs on your Discord server.
* Create the relevant roles on your Discord server that should later get access to tickets.
* Visit the [Main configuration](https://scnx.app/glink?page=support-system/modmail/configuration?show=main) section in your dashboard.
* <a href="#main-configuration-configuration">Configure</a> the available options.

### Commands {#main-configuration-commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| `/ticket admin-open` | *Only available if “Allow staff to open tickets on behalf of a user?” is <a href="#main-configuration-configuration">enabled</a>.*<br/>Allows team members to create new tickets with specific users. |
| `/ticket close` | Allows team members (and users, if <a href="#ticket-closing-configuration">configured</a>) to close the ticket in the current channel. |
| `/ticket form` | Sends a specific [form](../general/forms.md) in the ticket. |
| `/ticket open` | *Only available if “Allow users to open tickets via command?” is <a href="#main-configuration-configuration">enabled</a>.*<br/>Opens a new ticket (with a specific topic) on your Discord server. |

### Configuration {#main-configuration-configuration}

| Field | Description |
| --- | --- |
| Enable modmail feature? | Enables or disables the modmail system for your Discord server. |
| Category for new tickets | New tickets are created in this category by default. You can set different categories for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md). |
| Default ticket access permissions | Users with these permissions or roles will be able to see tickets and will be pinged when a new ticket is created. |
| Roles with default access permissions | *Only available if “Selected roles” is selected for “Default ticket access permissions”.*<br/>These roles get access to tickets by default and are mentioned when a new ticket is created. You can set different roles for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md). |
| Log channel | Your bot will automatically send all support-relevant messages to this channel by default. You can set different log channels for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md). |
| Ticket welcome message | This message is sent by default when a user opens a new ticket. You can set different messages for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md). |
| Ticket close message | This message is sent by default when a ticket is closed. You can set different messages for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md). |
| Enable maintenance mode? | If enabled, no ticket actions can be performed (such as creating/editing/closing tickets). Messages can still be sent in already opened tickets. |
| Allow users to open tickets via command? | If enabled, your users can create tickets not only via buttons and dropdown menus, but also with the <a href="#main-configuration-commands"><code>/ticket open</code></a> command. |
| Allow staff to open tickets on behalf of a user? | If enabled, team members can create a ticket with a user using the <a href="#main-configuration-commands"><code>/ticket admin-open</code></a> command. Restrictions like multiple open tickets or opening hours are bypassed. |
| Team member roles | <br/><small><details><summary><strong>Note</strong></summary><blockquote>*You can set different roles for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md).*<br/>*This is another note with medium-length text.*</blockquote></details></small>These roles get access to tickets by default and are mentioned when a new ticket is created. |
| Allow only one ticket per user (global) | If enabled, a user can have at most one ticket open at a time.<br/><small><details><summary><strong>Note</strong></summary><blockquote>*You can set different ticket limits for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md).*</blockquote></details></small> |
| AI summary of ticket transcripts | If enabled, after a ticket is closed your bot will automatically send an AI-generated summary of the ticket to the configured log channel.<br/>Please note that this uses your server’s [AI credits](https://faq.scnx.app/ki-auf-scnx/) and shares certain data with “modmail.net” (a SCNX product). You can find our privacy policy [here](https://scootk.it/scnx-privacy). |
| Allow team members to rename tickets? | If enabled, team members can rename tickets with the <a href="#main-configuration-commands"><code>/ticket rename</code></a> command.<br/><dl><dt>Note</dt><dd>After a manual rename, the bot can no longer automatically change the ticket name when transferring it (if enabled in <a href="./ticket-topics.md">ticket topics</a>).</dd></dl> |
| Show rename button under ticket message? | *Only available if “Allow team members to rename tickets?” is enabled.*<br/>If enabled, a button is added under the ticket message so team members can rename the ticket faster. Otherwise they must use the <a href="#main-configuration-commands"><code>/ticket rename</code></a> command. |
| Rename button text | *Only available if “Allow team members to rename tickets?” and “Show rename button under ticket message?” are enabled.*<br/>This text is shown on the button under the ticket message. |
| Ticket rename message | *Only available if “Allow team members to rename tickets?” is enabled.*<br/>This message is sent into the ticket channel when a ticket is renamed. |

## Ticket opening messages {#ticket-open-messages}

### Features {#ticket-open-messages-features}

* Let your users create new tickets easily via buttons or dropdown menus.
* Send multiple ticket opening messages with different [ticket topics](./ticket-topics.md) into different channels to spread ticket creation across multiple channels.
* Choose between buttons or dropdown menus for each message to provide the best user experience.

<h4>Images coming soon ✨</h4>

### Setup {#ticket-open-messages-setup}

* Visit the [Ticket opening messages](https://scnx.app/glink?page=support-system/modmail/configuration?show=ticket-opening-messages) section in your dashboard.
* Click the blue “Add ticket opening message” button to create a new ticket opening message.
* <a href="#ticket-open-messages-configuration">Configure</a> the available options.

### Configuration {#ticket-open-messages-configuration}

| Field | Description |
| --- | --- |
| Channel to send the message to | Your configured message is sent to this channel. |
| Message | Your bot sends this message into the selected channel. |
| Show only specific ticket topics? | If enabled, your bot will only use selected [ticket topics](./ticket-topics.md). If you want to use buttons, you can select at most one topic here. |
| Use buttons? | If enabled, your bot will use buttons instead of the default dropdown menu. |

## Ticket closing {#ticket-closing}

### Features {#ticket-closing-features}

* Add a close button to the ticket message so tickets can be closed with one click.
* Allow tickets to be closed by the ticket creator (instead of only by team members).
* Enable close requests to prevent team members from closing tickets immediately.

<h4>Images coming soon ✨</h4>

### Setup {#ticket-closing-setup}

* Visit the [Ticket closing](https://scnx.app/glink?page=support-system/modmail/configuration?show=ticket-close) section in your dashboard.
* <a href="#ticket-closing-configuration">Configure</a> the available options.

### Commands {#ticket-closing-commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| `/ticket close [force:<Boolean>]` | *Only available if “Allow staff to close tickets without confirmation?” is <a href="#ticket-closing-configuration">enabled</a>.*<br/>Allows team members to close tickets despite an open close request by setting the `force` option to `True`. |
| `/ticket close-schedule` | *Only available if “Can team members manually schedule when tickets should be closed?” is <a href="#ticket-closing-configuration">enabled</a>.*<br/>Allows team members to schedule closing tickets instead of closing them immediately. |

### Configuration {#ticket-closing-configuration}

| Field | Description |
| --- | --- |
| Show ticket close button in the ticket message? | If enabled, a button is added to the ticket message that team members (or users, if enabled) can use to close the ticket. Otherwise they must use the <a href="#ticket-closing-commands"><code>/ticket close</code></a> command. |
| Close button text | *Only available if “Show ticket close button in the ticket message?” is enabled.*<br/>This text is shown on the button under the ticket message. |
| Allow users to close their own tickets? | If enabled, users can close their own tickets in addition to team members. |
| Require team member confirmation before closing the ticket? | *Only available if “Allow users to close their own tickets?” is enabled.*<br/>If enabled, the user must create a close request before the ticket can be closed. |
| User confirmation message for close request | *Only available if “Allow users to close their own tickets?” and “Require team member confirmation before closing the ticket?” are enabled.*<br/>This message is sent into the ticket channel when a user creates a close request. |
| Send a DM confirmation when a ticket is closed? | If enabled, your bot sends a DM to the user after the ticket is closed. |
| Ticket close confirmation DM message | *Only available if “Send a DM confirmation when a ticket is closed?” is enabled.*<br/>Customize the message the bot sends to the user after closing the ticket. |
| Attach transcript to the ticket close DM? | *Only available if “Send a DM confirmation when a ticket is closed?” is enabled.*<br/>If enabled, the bot attaches a transcript of the ticket to the DM. |
| Require user confirmation before the ticket is closed? | If enabled, instead of immediately closing a ticket, the team member sends a close request to the user, which the user must confirm to close the ticket permanently. |
| Message for ticket close request by a team member | *Only available if “Require user confirmation before the ticket is closed?” is enabled.*<br/>This message is sent when a team member creates a close request in the ticket. |
| Timeout for the close request | *Only available if “Require user confirmation before the ticket is closed?” is enabled.*<br/>Within this period, the user must respond to the close request before the ticket is closed automatically. Learn how to set durations in SCNX <a href="../../custom-bot/additional-features.md#durations">here</a>. |
| Allow team members to close tickets without confirmation? | *Only available if “Require user confirmation before the ticket is closed?” is enabled.*<br/>If enabled, team members can close a ticket despite an open close request using the <a href="#ticket-closing-commands"><code>/ticket close [force:&lt;Boolean&gt;]</code></a> command. |
| Can team members manually schedule when tickets should be closed? | If enabled, team members can schedule closing tickets with the <a href="#ticket-closing-commands"><code>/ticket close-schedule</code></a> command. |
| Scheduled close message | *Only available if “Can team members manually schedule when tickets should be closed?” is enabled.*<br/>This message is sent into the ticket channel as soon as a team member runs the command. |

## Additional ticket members {#additional-ticket-members}

### Features {#additional-ticket-members-features}

* Add additional (team) members to a ticket (or remove them) to resolve issues more easily.
* Configure whether the ticket owner can add new members themselves.
* Notify the user with a message when users are added or removed.
* Add a button to the ticket message so members can be added with one click.

<h4>Images coming soon ✨</h4>

### Setup {#additional-ticket-members-setup}

* Visit the [Additional ticket members](https://scnx.app/glink?page=support-system/modmail/configuration?show=additional-users) section in your dashboard.
* <a href="#additional-ticket-members-configuration">Configure</a> the available options.

### Commands {#additional-ticket-members-commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| `/ticket users add` | Adds a new user to the ticket. |
| `/ticket users remove existing-additional-ticket-user:<User>` | Removes a previously added user from the ticket. |

### Configuration {#additional-ticket-members-configuration}

| Field | Description |
| --- | --- |
| Allow additional ticket members? | Enables or disables the feature for your modmail. |
| Show “add additional users” button in the ticket message | If enabled, a button is added to the ticket message to add ticket members. Otherwise, users must use the `/ticket users add` command. |
| Add-user button text | *Only available if “Show “add additional users” button in the ticket message” is enabled.*<br/>Customize the text displayed on the button. |
| Can the ticket owner add additional users? | If enabled, users can add additional members to their tickets (in addition to team members). |
| Message for selecting additional users | This message is shown to the user when they click the add-user button or run the command. |
| Message when a user is removed | This message is sent when a member is removed from the ticket. |
| Message when a user is added | This message is sent when a member is added to the ticket. |

## Auto close tickets {#auto-close-tickets}

### Features {#auto-close-tickets-features}

* Automatically close tickets after user inactivity to keep your ticket list tidy.
* Send a warning before automatic closing to remind the user about their ticket.
* Automatically mark tickets as resolved when the user leaves the server.

<h4>Images coming soon ✨</h4>

### Setup {#auto-close-tickets-setup}

* Visit the [Auto close tickets](https://scnx.app/glink?page=support-system/modmail/configuration?show=auto-close) section in your dashboard.
* <a href="#auto-close-tickets-configuration">Configure</a> the available options.

### Configuration {#auto-close-tickets-configuration}

| Field | Description |
| --- | --- |
| Automatically close ticket when a user leaves the server | If enabled, your bot automatically closes the ticket if the user leaves your server. |
| Send inactivity notification? | If enabled, your bot sends a warning to the user before automatically closing the ticket, so they have a chance to respond. |
| Notification message | *Only available if “Send inactivity notification?” is enabled.*<br/>Customize the warning message your bot sends. |
| Notification period | *Only available if “Send inactivity notification?” is enabled.*<br/>Set how long the user must be inactive before the warning is sent. Learn the SCNX duration format [here](https://docs.scnx.xyz/docs/custom-bot/additional-features/#durations). |
| Automatically close inactive tickets | If enabled, your bot automatically closes the ticket after user inactivity. |
| Time window for automatically closing tickets | *Only available if “Automatically close inactive tickets” is enabled.*<br/>Set how long the user must be inactive before the ticket is closed automatically. Learn the SCNX duration format [here](https://docs.scnx.xyz/docs/custom-bot/additional-features/#durations). |

## Ticket reminders {#ticket-reminders}

### Features {#ticket-reminders-features}

* Send an automatic reminder if a team member is inactive in their ticket.
* Mention unhandled tickets in your reminder channel to draw attention to tickets without a response.

<h4>Images coming soon ✨</h4>

### Setup {#ticket-reminders-setup}

* Create a private text channel for reminder notifications on your Discord server.
* Visit the [Ticket reminders](https://scnx.app/glink?page=support-system/modmail/configuration?show=ticket-reminders) section in your dashboard.
* <a href="#ticket-reminders-configuration">Configure</a> the available options.

### Configuration {#ticket-reminders-configuration}

| Field | Description |
| --- | --- |
| Reminder channel | Your bot sends reminders to this channel. |
| Remind the last (or assigned) team member? | If enabled, your bot sends a reminder message for the responsible team member. |
| Last team member reminder period | *Only available if “Remind the last (or assigned) team member?” is enabled.*<br/>Set how long the team member must be inactive before a reminder is sent. Learn the SCNX duration format [here](https://docs.scnx.xyz/docs/custom-bot/additional-features/#durations). |
| Reminder message for the last team member | *Only available if “Remind the last (or assigned) team member?” is enabled.*<br/>Customize the reminder message that is sent. |
| Mention again if a ticket hasn’t received a team member response yet | If enabled, your bot sends a reminder message about tickets that haven’t been handled yet. |
| Period before reminding about an unassigned ticket | *Only available if “Mention again if a ticket hasn’t received a team member response yet” is enabled.*<br/>Set how long tickets must remain unhandled before a reminder is sent. Learn the SCNX duration format [here](https://docs.scnx.xyz/docs/custom-bot/additional-features/#durations). |
| Unassigned ticket reminder message | *Only available if “Mention again if a ticket hasn’t received a team member response yet” is enabled.*<br/>Customize the reminder message that is sent for unhandled tickets. |

## Ticket hold {#ticket-hold}

### Features {#ticket-hold-features}

* Put a ticket into hold mode to forward it to other team members or groups.
* Inform the user with a message when hold is enabled/disabled in their ticket.
* Lock the channel so members cannot write while the ticket is on hold.
* As soon as a ticket is on hold, <a href="#auto-close-tickets">Auto close tickets</a> is disabled for that ticket.

<h4>Images coming soon ✨</h4>

### Setup {#ticket-hold-setup}

* Visit the [Ticket hold](https://scnx.app/glink?page=support-system/modmail/configuration?show=ticket-hold) section in your dashboard.
* <a href="#ticket-hold-configuration">Configure</a> the available options.

### Commands {#ticket-hold-commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| `/ticket hold` | Enables or disables the hold status for the current ticket. |

### Configuration {#ticket-hold-configuration}

| Field | Description |
| --- | --- |
| Enable ticket hold command? | If enabled, ticket hold is enabled in your modmail. |
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

* Visit the [Advanced message configuration](https://scnx.app/glink?page=support-system/modmail/configuration?show=advanced-messaging) section in your dashboard.
* <a href="#advanced-message-configuration-configuration">Configure</a> the available options.

### Configuration {#advanced-message-configuration-configuration}

| Field | Description |
| --- | --- |
| Ticket channel name format | This format is used by your bot to create names for new ticket channels. You can set different formats for different ticket topics on the [Ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) page in your dashboard. More info [here](./ticket-topics.md). |
| Error message: user already has an open ticket | *Only sent if <a href="#main-configuration-configuration">configured</a>.*<br/>This message is sent when a user tries to open another ticket while they already have an active one. |
| Error: ticket not found | This message is sent when a team member tries to [claim](./claiming.md) a ticket that has already been closed or deleted. |
| Error: command used outside of ticket channels | This message is sent when a team member runs ticket commands outside a ticket channel. |
| Ticket-by-command confirmation message | This message is sent when a user tries to open a new ticket via `/ticket open` (<a href="#main-configuration-configuration">if configured</a>). |
| Error: insufficient permissions to add users to a ticket | This message is sent when a user without the required permissions tries to add/remove a user to/from a ticket (<a href="#additional-ticket-members-configuration">if configured</a>). |
| Error: user has already been added to the ticket | This message is sent when trying to add a user who already has access to the ticket. |
| Ticket ID generator | This ID is used by your bot for the ticket channel name. |

## Statistics channels {#statistics-channels}

### Features {#statistics-channels-features}

* Display different statistics in different channels to provide information about your modmail.
* Add the statistics you want and adjust the channel name accordingly.

<h4>Images coming soon ✨</h4>

### Setup {#statistics-channels-setup}

* Create at least one voice channel for statistics on your Discord server.
* Visit the [Statistics channels](https://scnx.app/glink?page=support-system/modmail/configuration?show=stats-channel) section in your dashboard.
* Click the blue “Add statistics channel” button to create a new item.
* <a href="#statistics-channels-configuration">Configure</a> the available options.

### Configuration {#statistics-channels-configuration}

| Field | Description |
| --- | --- |
| Channel | This voice channel is used for the statistics item. |
| Include only tickets with specific ticket topics | If enabled, only selected [ticket topics](./ticket-topics.md) are included in the statistics. |
| Channel name | This text is used as the channel name. |

