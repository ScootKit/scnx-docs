# Commands

Turn your enabled modules' built-in commands on or off, and rename the context-menu (right-click) commands your members see - all from the SCNX Dashboard.

## Overview {#overview}

The **Commands** page lists every command provided by the modules you currently have enabled and lets you decide which of them are registered with Discord. Commands are grouped into three tabs by type:

- **Slash** - the `/command` entries members type into the chat box.
- **User** - context-menu commands shown when you right-click a member (Apps submenu).
- **Message** - context-menu commands shown when you right-click a message (Apps submenu).

For each command you can enable or disable it. For **User** and **Message** commands you can additionally set a custom label - the text Discord shows in the Apps menu. A live preview reproduces Discord's Apps flyout so you can see how the user and message menus will look before you save.

Only commands from **enabled** modules appear here. Enable a module first if the command you are looking for is missing.

:::info
This page manages the commands that ship with the bot's modules. It is different from the two neighboring pages:

- [Permissions & Slash Commands](/docs/custom-bot/slash-commands) - Discord's own per-command permission controls (which roles, users and channels may run a command). Configured in your Discord server settings, not here.
- [Custom Commands](/docs/custom-bot/custom-commands) - building your own commands from scratch with the visual flow editor.

Use the Commands page to switch built-in module commands on or off and to rename context-menu items; use the other two pages for permissions and for authoring your own commands.
:::

## Slash, User and Message commands {#types}

Discord supports three command types, and the page keeps them on separate tabs because each has its own rules and budget.

| Type        | Where members find it                  | Can be renamed here | Enabled by default |
| ----------- | -------------------------------------- | ------------------- | ------------------ |
| **Slash**   | Typed as `/command` in the message box | No                  | Yes                |
| **User**    | Right-click a member → **Apps**        | Yes (custom label)  | No                 |
| **Message** | Right-click a message → **Apps**       | Yes (custom label)  | No                 |

Each tab shows a budget counter (used / limit) so you can see at a glance how much of Discord's per-type allowance you have spent.

## Enabling and disabling {#enable-disable}

Use the toggle on each command row to enable or disable it.

Defaults differ by type:

- **Slash commands are enabled by default.** A slash command you have never touched is registered with Discord. Disable it here to remove it.
- **User and Message commands are disabled by default.** Context-menu commands are opt-in - they only appear in Discord once you enable them here.

Every command belongs to a module and is grouped under that module's section. Disabling a whole module (on the module's own page) removes all of its commands from this page.

## Renaming context-menu commands {#renaming}

User and Message commands can be given a **custom label** - the text members see in Discord's Apps menu. Slash commands cannot be renamed here (their names follow Discord's own rules and are managed with the module).

- Type your preferred label into the command's rename field. Leave it blank to fall back to the command's default name.
- Labels are limited to **32 characters** (a Discord limit). The page flags any label that is too long and blocks saving until you shorten it.
- The live Apps preview updates as you type, so you can confirm the wording before saving.

## Limits {#limits}

Discord enforces a fixed budget per command type. The page enforces the same limits and will not let you save a selection that exceeds them:

| Type    | Maximum enabled commands |
| ------- | ------------------------ |
| Slash   | 100                      |
| User    | 15                       |
| Message | 15                       |

Additional rules:

- **Context-menu label length:** custom User/Message labels may be at most **32 characters**.
- **Name collisions:** two enabled commands of the **same type** whose resolved labels (custom label, or the default name if no custom label is set) are identical when compared case-insensitively will collide. The page flags the collision and blocks saving until you rename or disable one of them. `Report` and `report` count as the same name.

If any of these rules is broken, the page shows the reason and disables saving until it is resolved.

## Saving and syncing to Discord {#saving}

Your command selection is stored like any other module configuration and is written through the normal config save path - use the **Save** action the same way you would on any configuration page. There is no separate submit step.

After saving, the bot updates the commands registered with Discord to match your selection.

:::info Command synchronization
As with all command changes, updates can take time to appear in Discord - newly enabled commands may take a while to show up, and removed ones a while to disappear. This is a Discord-side propagation delay, the same behavior described in the [Permissions & Slash Commands](/docs/custom-bot/slash-commands#command-synchronization) guide. Give it some time before assuming something is wrong.
:::

## Troubleshooting {#troubleshooting}

<details>
  <summary>A command I expected isn't listed</summary>
  <ul>
    <li>The page only lists commands from <b>enabled</b> modules. Enable the owning module first.</li>
    <li>Make sure your bot is online and has synced its command catalog.</li>
  </ul>
</details>

<details>
  <summary>I can't save my changes</summary>
  <ul>
    <li>Check the warning shown at the top of the list - it names what to fix.</li>
    <li>You may have exceeded a per-type budget (Slash 100, User 15, Message 15). Disable some commands of that type.</li>
    <li>Two enabled commands of the same type may share a name (case-insensitive). Rename or disable one of them.</li>
    <li>A custom context-menu label may be longer than 32 characters. Shorten it.</li>
  </ul>
</details>

<details>
  <summary>A right-click (User / Message) command doesn't appear in Discord</summary>
  <ul>
    <li>Context-menu commands are <b>disabled by default</b> - enable them on this page first.</li>
    <li>Command changes can take time to propagate to Discord. Wait a while and try again.</li>
    <li>Confirm you saved your changes.</li>
  </ul>
</details>

<details>
  <summary>My renamed command still shows the old name</summary>
  <ul>
    <li>Save your changes, then allow time for Discord to sync the new label.</li>
    <li>Verify the label isn't colliding with another enabled command of the same type.</li>
  </ul>
</details>

## Related pages {#related}

- [Permissions & Slash Commands](/docs/custom-bot/slash-commands) - control who can run commands with Discord's native permission system.
- [Custom Commands](/docs/custom-bot/custom-commands) - build your own commands with the visual flow editor.
