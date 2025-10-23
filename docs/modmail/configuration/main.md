---
sidebar_position: 1
---

<OutdatedWarning type="MODMAIL_V2"/>

# Main configuration

Configure the basic look and behavior of your modmail. 

| Configuration option                             | Description                                                                                                                                                                                                                                                                                                                           |
|--------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Category for new ticket                          | New Modmail tickets will be created in this category, unless a ticket is being opened in a [Ticket Topics](/docs/modmail/advanced-features/ticket-topics) that has an overwriting configured. New tickets will automatically sync permissions to this category - this means that everyone who has access to the category will see new tickets. |
| Log-Channel                                      | The Modmail will send ticket-logs and -transcript and important messages into this channel.                                                                                                                                                                                                                                           |
| Ticket Welcome Message                           | This message will be sent to users when they open a new ticket, unless a ticket is being opened in a [Ticket Topics](/docs/modmail/advanced-features/ticket-topics) that has an overwriting configured.                                                                                                                                        |
| Ticket Close Message                             | This message will be sent to users when their ticket has been closed. If you have configured [Support Feedback](/docs/modmail/advanced-features/support-feedback), the feedback message will be sent in addition to this message.                                                                                                              |
| New Thread Ping                                  | Configure who will be pinged when a new ticket gets created. You can choose Discord's @everyone or @here pings which will ping everyone who has access to the ticket channels. Alternatively, you can set custom roles that get pinged or disable pings all together.                                                                 |
| Allow staff members to edit each others messages | If enabled, staff members will be able to edit messages from other staff members using the `/edit`or `/delete` slash commands.                                                                                                                                                                                                        |