# Bot Log-In

Send messages, embeds, and forum posts as your bot — directly from the SCNX Dashboard. You can also use this feature to
create self-role messages with buttons.

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: true}} />

## Overview {#overview}

Bot Log-In lets you control your bot's messages from the dashboard without needing Discord on your device. You can:

* Send messages and rich embeds in any channel your bot has access to.
* Edit previously sent bot messages.
* Attach files to messages.
* Add interactive components like buttons and select menus (including self-role buttons).
* Create forum posts in forum channels.
* View an audit log of all messages sent via the dashboard.

## Setup {#setup}

1. Open the [Bot Log-In page](https://scnx.app/glink?page=bot/login) on your SCNX Dashboard.
2. Make sure your bot is **online** — Bot Log-In requires your bot to be running without any core issues.
3. Your bot needs the **View Channel** and **Send Messages** permissions in any channel you want to send messages to.

:::caution
If your bot is offline or has core issues, you won't be able to use Bot Log-In. Check the
[troubleshooting guide](/docs/custom-bot/troubleshooting) if your bot isn't starting.
:::

:::warning
To use Bot Log-In, you must be a **member of the Discord server** and have the required **Discord permissions** on each
channel you want to interact with. Users who are not members of the server will not be able to use this feature.
Server owners and members with the **Administrator** permission have access to all channels automatically. For other
members, the following channel permissions are required:

* **Sending or editing a message**: `View Channel` and `Send Messages`
* **Viewing messages in a channel**: `View Channel`, `Read Message History`, and `Send Messages`
:::

## Sending a message {#send-message}

1. Open the [Bot Log-In page](https://scnx.app/glink?page=bot/login).
2. Select the channel you want to send the message to from the channel list on the left.
3. Compose your message using the message editor. You can:
    * Write plain text in the message field.
    * Add one or more embeds with custom title, description, color, fields, images, footer, and more.
    * Attach files.
    * Add message components (see [Adding components](#components)).
4. Click **"Send message"** to send.

:::tip
Use the preview in the message editor to see how your message will look before sending it.
:::

## Editing a message {#edit-message}

You can edit messages that were previously sent by your bot (including messages sent via Bot Log-In).

1. Open the [Bot Log-In page](https://scnx.app/glink?page=bot/login).
2. Select the channel containing the message you want to edit.
3. Find the message in the channel view and click **"Edit"**.
4. Modify the message content, embeds, or components using the message editor.
5. Click **"Edit message"** to apply your changes.

## Adding components {#components}

You can attach interactive components to messages sent via Bot Log-In:

* **Custom Command Buttons** — Buttons that trigger your [Custom Commands](/docs/custom-bot/custom-commands) when
  clicked. Configure these in the message editor's component section and link them to a Custom Command with a button
  trigger.
* **Link Buttons** — Buttons that open a URL when clicked.
* **Role Buttons** — Buttons that add or remove a role when clicked, allowing members to self-assign roles. This is a
  modern, cleaner alternative to reaction roles.
* **Select Menus** — Dropdown menus that let users select from a list of options. Can be linked to Custom Commands.

:::info
To use Custom Command Buttons, you need to first [create a Custom Command](/docs/custom-bot/custom-commands) with a
**Button** trigger. You can then reference it when adding a button in the message editor.
:::

## Creating a forum post {#forum-post}

If the selected channel is a forum channel, you can create a new post:

1. Open the [Bot Log-In page](https://scnx.app/glink?page=bot/login).
2. Select a forum channel.
3. Click **"Create post"**.
4. Enter the post name and compose the initial message.
5. Optionally select tags to apply to the post.
6. Click **"Create post"** to publish.

## Sent messages audit log {#audit-log}

Bot Log-In keeps a log of all messages sent through the dashboard. Click **"Sent messages"** to view the audit log,
which shows:

* The channel each message was sent to.
* Who sent the message from the dashboard.
* Whether the message was **delivered** or **not delivered**.
* The message format.

This is useful for keeping track of what was sent and troubleshooting failed deliveries.

## Troubleshooting {#troubleshooting}

<details>
  <summary>Bot Log-In shows "Bot is offline"</summary>

  Your bot needs to be online and running without core issues. Check the
  <a href="https://scnx.app/glink?page=bot/manage">bot dashboard</a> for any error messages and refer to the
  <a href="/docs/custom-bot/troubleshooting">troubleshooting guide</a>.
</details>

<details>
  <summary>I can't see any channels / "No text channels" error</summary>

  Your bot needs the <b>View Channel</b> and <b>Send Messages</b> permissions on the channels you want to use. Ask a
  server administrator to check the bot's channel permissions.
</details>

<details>
  <summary>Message failed to send / "Not delivered"</summary>
  <ul>
    <li>Make sure your bot has the <b>View Channel</b>, <b>Send Messages</b>, and <b>Embed Links</b> permissions in
      the target channel.</li>
    <li>If you included embeds, make sure the bot has the <b>Embed Links</b> permission.</li>
    <li>If you attached files, make sure the bot has the <b>Attach Files</b> permission and the file isn't too
      large.</li>
    <li>Check that the channel still exists and hasn't been deleted.</li>
  </ul>
</details>

<details>
  <summary>I can't edit a message</summary>
  <ul>
    <li>You can only edit messages that were sent by your bot.</li>
    <li>Make sure your bot still has access to the channel where the message was sent.</li>
  </ul>
</details>
