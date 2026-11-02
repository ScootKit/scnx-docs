---
sidebar_position: 1
title: Run
description: What happens once your flows are live, how to check they work, and where to look at their stored data and run history.
---

# Run

Once you switch a flow from **Draft** to **Active** and save, your bot starts listening for its trigger. From then on, every time the trigger fires, your bot runs the flow and writes the run into its history. If the flow stores data, that data stays on your bot between runs.

The pages in this section cover the two things you look at once flows are live: the data they keep, and the record of what they did.

- [Data storage](/docs/custom-commands/storage) explains storage fields and how to view, change and clean up stored data.
- [Run history & debugging](/docs/custom-commands/executions) explains the executions list, run statuses, error codes and test runs.
- [Troubleshooting](/docs/custom-commands/troubleshooting) helps when a flow does nothing or does the wrong thing.

## After you activate a flow {#after-activating}

- **Slash commands appear in Discord.** Your bot registers the command with Discord. If Discord doesn't show it right away, restart your Discord app.
- **Event triggers start listening.** Some triggers need extra access from Discord that your bot can only request when it starts. If the editor shows "This flow needs a bot restart before its trigger can fire", restart your bot. The rest of your bot keeps working until you do.
- **Saving can be refused.** A flow with blocking issues can't be activated. You'll see "This flow can't be activated yet" and your changes aren't saved until you fix the issues or switch back to **Draft**.

## Check that it works {#check}

1. Before going live, click **Test run** in the editor. It runs the flow against your real server without sending, changing or deleting anything, and shows every step.
2. Activate the flow and use it once in Discord, the way your members would.
3. Open the flow's latest runs in the **Flow** tab of the editor's side panel. You want to see **Success**. Anything else tells you why: **Failed** names the step, **Skipped** names the reason.

## Where to look {#where}

Both live on the custom commands overview under **Data & history**:

- **Server storage** holds the data of flows that aren't in a module. Each module has its own **Storage** tab.
- **Executions** lists every run on your server. Each module has its own **Executions** tab.

Stored data and run history live on your bot. While your bot is stopped, both pages show "The bot must be running".

## Tips {#tips}

- **Use Increase for counters.** Two runs at the same moment can overwrite each other if a flow reads a number, adds to it and stores it again. **Increase a stored number** does it in one safe step.
- **Note the run number.** Every run has a number like `#21031`. It's the quickest way to point someone to the exact run.
- **Test runs show values, real runs don't.** Only test runs keep the inputs and outputs of each step. To see what a step got, run a test with the same values.
- **Don't edit a flow while people are mid-way through it.** If a flow is waiting for someone to click a button, saving changes to that flow cancels the waiting run. It shows as **Interrupted**.
- **Watch the activity chips.** Your busiest flows are marked **High activity** or **Very high activity**. A trigger that fires on every message is the usual reason, and a channel filter often fixes it.
- **Purge is permanent.** **Purge field** deletes every entry in a field and can't be undone.
