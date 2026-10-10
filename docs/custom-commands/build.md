---
sidebar_position: 1
title: Build
description: How building a Custom Commands V3 automation works from start to finish, which pages to read in which order, and tips from how the editor really behaves.
---

# Build {#build}

:::caution This documentation is changing during the beta
Custom Commands V3 is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

Every automation you build is a flow: one trigger, then steps that run from top to bottom. You build it in the flow editor, save it as a draft, try it with a test run and then turn it on. From that moment your bot runs it whenever the trigger fires.

## What to read, in order {#order}

1. [Flows & the editor](/docs/custom-commands/flows) - the editor, adding steps, branches and loops, saving and turning flows on.
2. [Triggers](/docs/custom-commands/triggers) - every way a flow can start, and how to pick the right one.
3. [Values, variables & messages](/docs/custom-commands/variables) - passing values from one step to the next and into your messages.
4. [Modules & templates](/docs/custom-commands/modules) - grouping flows that belong together, with a settings page for admins.
5. [Build with AI (MCP)](/docs/custom-commands/mcp) - let Claude or ChatGPT write, check and debug flows for you.

New here? Do the [first flow tutorial](/docs/custom-commands/quickstart) before you read on.

## How to approach a new automation {#approach}

1. **Start from the trigger.** Ask what should start the automation: a command someone runs, a button, something on your server, or a schedule. That decides the trigger, and the trigger decides which values you get to work with.
2. **Look for a template.** If one of the templates is close, start from it and change it. Whole systems from other creators are on the [marketplace](https://scnx.app/marketplace).
3. **Pick the steps.** Write down in plain words what should happen, then find a step for each line in the action picker. Search by what you want to do, like "send", "role" or "nickname".
4. **Connect the values.** Fill each input with a fixed value or with a value from the trigger or an earlier step.
5. **Test.** Save the draft and click **Test run**. Nothing is sent or changed, and you see what each step would have done.
6. **Turn it on.** Flip the toggle to **Active** and save. Then try it once for real and check **Recent runs**.

## Tips {#tips}

- **Drafts save even with issues.** Only turning a flow on needs a clean **Issues** tab, so save often.
- **A test run shows every step, a real run doesn't.** The run history of a live run shows its status and the step that failed. For a step-by-step view, repeat the run as a **Test run**.
- **Interactions need an answer fast.** For slash commands, buttons, dropdowns and modals, Discord expects an answer within about three seconds. Reply first, or add **Defer interaction reply** before slow steps.
- **Filter busy triggers early.** A **Message created** flow runs for every message. Use the trigger's own settings, like **Channels** and **Match type**, before you reach for an **If** step.
- **Copy steps between flows** with `Ctrl+C` and `Ctrl+V`. The editor tells you which inputs need a new value in the new flow.
- **Put channels and roles into module settings** when other admins should change them, or when you might share the module. Fixed channels don't carry over to other servers.
- **Label your steps.** A name like "Check VIP role" makes a big diagram much easier to read.
- **Keep your bot online while you build.** The editor loads channels, roles, storage fields and recent runs from your bot.
