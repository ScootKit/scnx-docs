---
sidebar_position: 14
title: Troubleshooting
description: What to check when a flow does nothing, fails or behaves differently than expected, with answers to common questions.
---

# Troubleshooting

When a flow doesn't do what you expected, the [run history](/docs/custom-commands/executions) usually tells you why. If there's no run at all, work through the checklist below.

## My flow did nothing {#did-nothing}

Go through these in order. Most problems are solved by one of the first five.

1. **Your bot is online.** Flows run on your bot. Check your [Bot Status Panel](https://scnx.app/glink?page=bot/manage) and start the bot if it's stopped.
2. **The flow is active.** New flows start as a **Draft**, and drafts never run. Switch the toggle in the editor from **Draft** to **Active** and save.
3. **Saving didn't fail.** If you see "This flow can't be activated yet", your changes weren't saved. Fix the issues listed, then save again. The **Issues** tab of the side panel shows each one and jumps to the step.
4. **Custom commands aren't stopped.** If the overview shows "Custom commands are stopped", someone used the emergency stop. Click **Turn custom commands back on**.
5. **The module or app is turned on.** Flows inside a disabled module don't run. An app that still needs setup shows "Almost there" on its **Overview** tab. Click **Finish setup**.
6. **There's a run in the history.** Open the [executions](/docs/custom-commands/executions) for the flow:
   - **Failed:** open the run. It names the step and the reason. See [common errors](/docs/custom-commands/executions#errors).
   - **Skipped:** the run says why, for example a cooldown, too many runs in a short time, or your [activity budget](/docs/custom-commands/limits-and-safety#activity-budget).
   - **Success** but nothing visible: the flow may have taken a branch you didn't expect. Do a [test run](/docs/custom-commands/executions#test-runs) with the same values and follow the step trace.
7. **Nothing in the history at all?** Then the trigger never fired. Check the rest of this list.
8. **Your bot has the access the trigger needs.** If the editor shows "This flow needs a bot restart before its trigger can fire", restart your bot. If a trigger shows **Requires privileged intent**, switch that access on for your bot in the Discord Developer Portal, then restart.
9. **The trigger still exists on Discord.** A trigger marked **Not available** can never fire, because Discord no longer sends that event. Pick a different trigger.
10. **The trigger's filters match.** Many triggers can be limited, for example to certain channels or to messages with certain text, and some ignore bots. Check the trigger settings against what you actually did in Discord.
11. **Your bot reports no issues.** Open your [Bot Status Panel](https://scnx.app/glink?page=bot/manage) and look at the issues. Problems with flows show up there, like a flow with errors, a command name that's already taken, or your bot being too old for an app.

## Symptoms, causes and fixes {#symptoms}

| Symptom                                                        | Likely cause                                                                         | Fix                                                                                                                           |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| No run at all in the history                                   | The flow is a **Draft**, its module is turned off, or custom commands are stopped.   | Activate the flow, turn on the module, or click **Turn custom commands back on**.                                             |
| No run, and the flow is **Active**                             | The trigger's filters don't match, or it needs a bot restart for extra Discord access. | Check the trigger settings. Restart your bot if the editor asks for it.                                                       |
| Slash command missing in Discord                               | Another command already has that name, or your server reached Discord's command limit. | Rename the command or turn the other one off. Turn off flows you don't need.                                                  |
| "The application did not respond"                              | The flow answered too late, or a path through the flow never answers.                | Reply or **Defer interaction reply** first. Give every branch an answer.                                                      |
| Run **Failed** with `MISSING_PERMISSIONS`                      | Your bot lacks a permission, or its role is below the role it manages.               | Give the permission. Move your bot's role up.                                                                                 |
| Run **Failed** with `NOT_FOUND`                                | A channel, role or message the flow uses was deleted.                                | Pick it again in the step or in the module's settings.                                                                        |
| Run **Failed** with `STORAGE_ERROR`                            | Your server's storage is full, or an encrypted value can't be read.                  | Free up space on the [storage page](/docs/custom-commands/storage#usage).                                                     |
| Run **Failed** or **Skipped** with a limit                     | Your server reached its activity budget, or a loop is too large for one run.         | Wait for the budget to recover. Narrow busy triggers. Split big loops.                                                        |
| Run **Skipped** with "cooldown active"                         | The trigger's cooldown is still running for that user, channel or server.            | Expected. Shorten the cooldown in the trigger settings if it's too long.                                                      |
| Run **Skipped** with "flow disabled"                           | The flow was switched to **Draft** when the trigger fired.                           | Activate the flow.                                                                                                            |
| Run **Interrupted**                                            | Your bot restarted mid-run, or you saved the flow while a run waited on a button.     | Run it again. For waiting runs, send the message with the button again.                                                       |
| A button does nothing                                          | The flow it starts was deleted, doesn't have a matching trigger, or is a **Draft**.  | Point the button at an active flow with a button trigger.                                                                     |
| Flow worked, then stopped after a storage or settings change   | The change made the flow invalid, so your bot no longer registers it.                | Open the flow and fix what the **Issues** tab shows.                                                                          |
| An app stopped after an update                                 | The new version needs a setting you haven't filled in, so the app was turned off.     | Open the app and click **Finish setup**.                                                                                      |
| Storage or executions page says "The bot must be running"      | Your bot is stopped.                                                                 | Start your bot.                                                                                                               |
| Data you stored isn't there in a new module copy               | **Duplicate** copies the fields, not the data.                                        | Expected. Enter the data again or let the flows fill it.                                                                      |

## Common questions {#faq}

<details>
  <summary>My slash command doesn't show up in Discord</summary>

- Make sure the flow is **Active** and saved.
- Discord allows each command name only once. If your bot already has a command with that name, from a V2 custom command or a module, your flow's command isn't added. Your bot reports "A Custom-Commands command conflicts with an existing command". Rename the command in the trigger, or turn the other one off.
- Discord limits how many commands a server can have. If you reach it, some commands aren't added and your bot reports "Your server hit Discord's command limit". Turn off flows you don't need.
- Restart your Discord app. It sometimes takes a moment to show new commands. See also [Slash commands are not showing up](/docs/custom-bot/troubleshooting#missing-commands).

</details>

<details>
  <summary>Discord says "The application did not respond" or "This interaction failed"</summary>

- Your flow has to answer a command, button or form within a few seconds. If it does slow work first, add **Defer interaction reply** before the slow steps, or reply first and do the work afterwards.
- Every path through the flow needs an answer. An empty "otherwise" branch is the usual cause. The editor warns you about this: "This flow can finish without answering the interaction that started it."
- If the run failed, the run history tells you which step broke. `INTERACTION_EXPIRED` means the flow was too slow.

</details>

<details>
  <summary>A button or select menu does nothing</summary>

- Open the message or module setting that holds the button and check which flow it starts. If that flow was deleted, the **Issues** tab warns you that the component links to a flow that no longer exists.
- The flow the button starts needs a matching trigger, like **Button clicked** for a button. Check that the flow is **Active**.
- Buttons that wait for an answer inside a running flow stop working after you save changes to that flow. The waiting run shows as **Interrupted**. Send the message again.

</details>

<details>
  <summary>The test run works, but the real flow doesn't</summary>

- Test runs ignore cooldowns and the limit on how often flows can start. Check the real run in the history for **Skipped**.
- Test runs don't send anything, so they can't hit Discord's real limits or missing permissions on the actual message. Check the real run for `MISSING_PERMISSIONS` or `DISCORD_API_ERROR`.
- Make sure the flow is **Active**. You can test a draft, but only active flows run in Discord.

</details>

<details>
  <summary>The step failed with MISSING_PERMISSIONS</summary>

- Give your bot the permission named in the error, in that channel or on the server.
- To give or remove a role, your bot's own role has to be above that role in your server settings.
- See [What your bot needs from Discord](/docs/custom-commands/limits-and-safety#bot-permissions).

</details>

<details>
  <summary>My flow stopped working after I changed a storage field or module setting</summary>

- Changing a field's type or scope, or deleting it, makes the flows that use it invalid, and invalid flows don't run. Open each flow, check the **Issues** tab and correct the steps.
- Your bot reports "A Custom-Commands flow has errors and was not registered" and links the affected flows.
- See [Change or delete a field](/docs/custom-commands/storage#change-field).

</details>

<details>
  <summary>"Your bot needs an update" or "Your bot is older than a Custom-Commands app needs"</summary>

- Restart your bot. It installs the latest version when it starts.
- If the message comes back after a restart, the app uses something we haven't released yet. Let the app's developer know.

</details>

<details>
  <summary>The storage or executions page says "The bot must be running"</summary>

- Stored data and run history live on your bot. Start your bot, then reload the page.

</details>

<details>
  <summary>Steps fail with LIMIT_EXCEEDED, or runs are Skipped</summary>

- Your server may have reached its activity budget. Check the **Activity budget** card on the overview. Actions resume on their own as the budget recovers, usually within the hour.
- A loop or a chain of called flows may be too large for one run. Split the work into smaller runs.
- See [Plans, limits & safety](/docs/custom-commands/limits-and-safety).

</details>

<details>
  <summary>I can't activate my flow because of a safety warning</summary>

- Flows that DM, ban, kick or delete across your entire server, or send your member list to an external service, can't be activated. Limit the flow to the members, channels or roles you actually mean, for example with a list you build yourself.
- See [Safety protections](/docs/custom-commands/limits-and-safety#protections).

</details>

<details>
  <summary>Where did my V2 commands go?</summary>

- They're still there and still running. On the V3 overview, under **Data & history**, click **Legacy V2 commands**. See [Moving from V2](/docs/custom-commands/migrating-from-v2).

</details>

## Getting help {#help}

We don't offer support for custom commands yet. That includes setup, building flows and debugging, whether a flow came from an app or you built it yourself.

- **For an app from the marketplace**, ask its developer. You'll find their support link on the app's **Help** tab.
- **For feedback, bug reports and questions**, use the beta channels on our Discord. For a bug, bring the steps to trigger it, what you expected, what happened instead, and the run number from the history.
- **An AI assistant can help you debug.** With the [MCP connector](/docs/custom-commands/mcp), you can ask Claude or ChatGPT why a run failed. It reads your run history and flows for you.
