# Custom Commands

Create your own commands, button interactions, modals, and message-based automations - all from the SCNX Dashboard,
without writing any code.

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: true}} additionalDetails={{
    STARTER: "Up to 10 simultaneously enabled custom commands.",
    UNLIMITED: "Unlimited custom commands.",
    PROFESSIONAL: "Unlimited custom commands."}} />

## Overview {#overview}

Custom Commands let you build your own bot interactions using a visual flow editor. Each custom command consists of:

- A **trigger** - what causes the command to run (a slash command, button click, message, modal submission, or manual
  execution from another command).
- One or more **action blocks** - groups of actions that execute when the trigger fires.
- **Actions** - the individual things the bot does (reply, send a message, manage roles, show a modal, and more).
- Optional **permissions** - restrict who can use the command by requiring specific roles.

## Setup {#setup}

1. Open the [Custom Commands page](https://scnx.app/glink?page=bot/custom-commands) on your SCNX Dashboard.
2. Make sure your bot is online and running.
3. Click **"Create new Custom Command"** to get started.

## Triggers {#triggers}

Each custom command needs a trigger that determines when it runs. The following trigger types are available:

### Slash Command {#trigger-command}

The command runs when a user executes a slash command (e.g. `/mycommand`).

- **Slash Command name** - The name shown in Discord. Must be lowercase, no special characters (except `-`).
- **Description** - Shown below the command name in Discord's command menu.
- **Options** - Add up to 25 parameters that users can fill in when running the command. Supported types: Text, Integer,
  Number, True/False, User, Channel, Role, and Attachment.
- For text options, you can optionally **limit values** to a predefined list of up to 25 choices.

:::warning
Discord allows a maximum of 100 server slash commands. Custom commands and module commands both count toward this limit.
Your bot will encounter issues if this limit is exceeded.
:::

:::info
Slash command permissions are managed in your Discord server settings (**Server Settings → Integrations → Bots & Apps**),
not in the SCNX Dashboard. See the [Slash Commands & Permissions guide](/docs/custom-bot/slash-commands) for details. It
may take up to 24 hours for new commands to appear in Discord. The command must be enabled first.
:::

:::tip
Custom slash commands automatically appear as their own **"Custom Commands"** group in the `/help` command, making them
easier for your server members to discover.
:::

### Button or Select Menu Click {#trigger-button}

The command runs when a user clicks a button or selects an option from a select menu attached to a message.

To send a message with a button or select menu:

1. Use the [Bot Log-In](/docs/custom-bot/login-as-bot) feature to send a message.
2. In the [message editor](/docs/scnx/guilds/message-editor), add a **Custom Command Button** or **Custom Command Select Menu Element** and link it to this
   custom command.
3. You can also attach buttons to messages sent by other custom commands or module configurations.

### Message {#trigger-message}

The command runs when a user sends a message that matches a configured pattern. Match types:

| Match type        | Description                                       |
| ----------------- | ------------------------------------------------- |
| **Starts with**   | Message starts with the configured text           |
| **Contains**      | Message contains the configured text anywhere     |
| **Ends with**     | Message ends with the configured text             |
| **Equals**        | Message exactly matches the configured text       |
| **Every message** | Triggers on every message sent (use with caution) |

Additional options:

- **Ignore casing** - Match regardless of uppercase/lowercase.
- **Limit to channels** - Only trigger in specific channels or channel categories.

### Modal {#trigger-modal}

The command runs when a user submits a modal (form/dialog). Modals are shown using the **"Show modal"** action in
another custom command.

- Configure the modal's title and input fields (text inputs with short or paragraph style).
- User answers are available as parameters (`%answer1%`, `%answer2%`, etc.) in the command's actions.

### None (manual execution) {#trigger-none}

The command can only be executed by another custom command using the **"Execute Command"** action. Useful for creating
reusable logic.

## Action blocks {#action-blocks}

Actions are organized into **action blocks**. When a command triggers, it executes action blocks in one of two modes:

- **All** - Execute all action blocks sequentially.
- **One (randomly)** - Execute one randomly selected action block. Useful for random responses.

Each action block contains one or more actions. You can add multiple action blocks to a single command.

## Actions {#actions}

Actions are the individual operations your bot performs. The following actions are available:

| Action                              | Description                                                                                                                                               |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Reply to message or interaction** | Reply to the triggering message or interaction. Supports ephemeral replies (only visible to the user) for slash commands and button clicks.               |
| **Send message in channel**         | Send a message in any channel on the server. Optionally pin the message.                                                                                  |
| **Edit the interaction message**    | Edit the message a button is attached to (button triggers only).                                                                                          |
| **Send DM to user**                 | Send a direct message to the executing user or a mentioned user. Skipped silently if the user has DMs disabled.                                           |
| **Delete matched message**          | Delete the message that triggered the command (message triggers only).                                                                                    |
| **Change nickname**                 | Change the nickname of a user. Leave blank to reset.                                                                                                      |
| **Manage roles**                    | Add, remove, or toggle roles on a user.                                                                                                                   |
| **React to matched message**        | Add emoji reactions to the triggering message.                                                                                                            |
| **Show a modal**                    | Display a modal to the user. The modal must be configured as a separate custom command with a Modal trigger. Only one modal can be shown per interaction. |

:::info
Some actions are only available for certain trigger types. For example, "Show a modal" only works with interaction-based
triggers (slash commands, buttons). Unsupported actions are silently skipped.
:::

## Parameters {#parameters}

Custom commands support dynamic parameters that get replaced with actual values when the command runs. You can use
parameters in any text field within your actions.

### Built-in parameters {#built-in-parameters}

These parameters are always available:

| Parameter         | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `%userID%`        | ID of the user who triggered the command                |
| `%userTag%`       | Tag of the executing user                               |
| `%userUsername%`  | Username of the executing user                          |
| `%userNickname%`  | Server nickname of the executing user                   |
| `%userAvatarURL%` | Avatar URL of the executing user                        |
| `%userCreatedAt%` | Timestamp when the executing user's account was created |
| `%channelID%`     | ID of the channel the command was executed in           |
| `%content%`       | Content of the matched message (message triggers only)  |

### Slash command option parameters {#option-parameters}

When using a slash command trigger with options, additional parameters become available depending on the option type:

- **User options** - `%userID-optionname%`, `%userTag-optionname%`, `%userName-optionname%`,
  `%userAvatarURL-optionname%`
- **Role options** - `%roleName-optionname%`, `%roleColor-optionname%`, `%roleID-optionname%`,
  `%rolePosition-optionname%`
- **Channel options** - `%channelName-optionname%`, `%channelID-optionname%`, `%channelType-optionname%`,
  `%channelParentName-optionname%`, `%channelParentID-optionname%`
- **Attachment options** - `%attachmentURL-optionname%`
- **Text, Number, Integer, Boolean options** - `%value-optionname%`

### Modal answer parameters {#modal-parameters}

When using a modal trigger, user answers are available as `%answer1%`, `%answer2%`, etc., corresponding to the order of
input fields in the modal.

### Global parameters {#global-parameters}

[Global parameters](/docs/custom-bot/global-parameters) (like `%botName%`, `%guildName%`, timestamps) are also available
in all custom command text fields.

## Permissions {#permissions}

You can restrict who can use a custom command by enabling **role requirements**:

1. Open your custom command and find the **"Command permissions"** section.
2. Enable **"Require roles"**.
3. Add the roles that should be allowed to use the command.
4. Optionally customize the **"Missing role message"** - the message shown when a user without the required roles tries
   to use the command.

Users without any of the configured roles will see the missing role message instead of the command executing.

## Managing custom commands {#managing}

### Enabling and disabling {#enable-disable}

Each custom command can be individually enabled or disabled. A disabled command won't respond to any triggers. To enable
a command, it must have a valid trigger configured and all required fields filled in.

### Sharing {#sharing}

You can share a custom command with others by creating a unique sharing link:

1. Open the custom command you want to share.
2. Click **"Create sharing link"**.
3. Copy the generated URL.

The link contains a snapshot of the command at the time of sharing - future changes won't be synced.

:::caution
Shared custom commands may contain actions that could be harmful. Only import commands from sources you trust.
:::

### Importing {#importing}

To import a shared custom command:

1. Open the sharing link.
2. Select the server to import it into.
3. Review the command and confirm the import.
4. **Important:** Roles and channels referenced in the imported command need to be manually updated after import.
5. Don't forget to save your changes.

### Deleting {#deleting}

You can delete individual custom commands or all custom commands at once from the command list. Deletion cannot be
undone.

## Plan limits {#plan-limits}

The number of simultaneously enabled custom commands depends on your SCNX plan:

| Plan                     | Enabled custom commands |
| ------------------------ | ----------------------- |
| Starter                  | Up to 10                |
| Professional / Unlimited | Unlimited               |

You can always create more commands than your limit allows, but only the allowed number can be **enabled** at the same
time. Disabled commands are saved and can be enabled later if you upgrade or disable other commands.

## Troubleshooting {#troubleshooting}

<details>
  <summary>My slash command doesn't show up in Discord</summary>
  <ul>
    <li>Make sure the command is <b>enabled</b>.</li>
    <li>It may take up to 24 hours for new slash commands to appear in Discord.</li>
    <li>Check that the slash command name is valid (lowercase, no special characters except <code>-</code>).</li>
    <li>Verify you haven't exceeded the 100 server slash command limit.</li>
    <li>Try restarting your bot.</li>
  </ul>
</details>

<details>
  <summary>My command can't be enabled</summary>
  <ul>
    <li>Make sure a <b>trigger</b> is configured.</li>
    <li>Check that all <b>required fields</b> are filled in (the error message will tell you which fields are
      missing).</li>
    <li>Verify you haven't reached your plan's limit of simultaneously enabled commands.</li>
  </ul>
</details>

<details>
  <summary>My button / select menu command doesn't work</summary>
  <ul>
    <li>Make sure you attached the button or select menu element to a message using the <a href="/docs/scnx/guilds/message-editor">message editor</a> and linked it to
      the correct custom command.</li>
    <li>Verify the custom command is <b>enabled</b>.</li>
    <li>Check that the bot has the necessary permissions in the channel.</li>
  </ul>
</details>

<details>
  <summary>Parameters show up as raw text (e.g. %userID%)</summary>
  <ul>
    <li>Make sure you're using the correct parameter syntax with <code>%</code> on both sides.</li>
    <li>Verify the parameter is available for your trigger type (e.g., <code>%content%</code> only works with message
      triggers).</li>
    <li>Check for typos in the parameter name.</li>
  </ul>
</details>

<details>
  <summary>"Show modal" action isn't working</summary>
  <ul>
    <li>Modals can only be shown from interaction-based triggers (slash commands, buttons). They can't be shown from
      message triggers.</li>
    <li>Only one modal can be shown per interaction  - if another action already showed a modal, subsequent ones will be
      skipped.</li>
    <li>A modal can't be shown from another modal submission (Discord limitation).</li>
    <li>Make sure you created a separate custom command with a <b>Modal trigger</b> and selected it in the "Show modal"
      action.</li>
  </ul>
</details>

<details>
  <summary>Role management action doesn't work</summary>
  <ul>
    <li>The bot's highest role must be <b>above</b> the roles it's trying to add, remove, or toggle.</li>
    <li>Make sure the bot has the <b>Manage Roles</b> permission.</li>
    <li>Verify the user parameter is set correctly  - if no user is specified, the action is silently skipped.</li>
  </ul>
</details>
