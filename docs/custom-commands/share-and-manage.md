---
sidebar_position: 1
title: Share & manage
description: How installing and sharing modules works, how to keep apps up to date, who on your team can do what, and how to stay within your plan.
---

# Share & manage

Custom Commands V3 lets you share whole features, not single commands. You share a **module**: its flows, settings and storage fields travel together, so whoever installs it gets something that works. A module installed from the marketplace is called an **app**.

This section covers working with what others built, sharing your own, moving over from V2 and the limits your server runs inside.

- [Sharing & the marketplace](/docs/custom-commands/sharing) covers installing apps, updates, share links and publishing.
- [Moving from V2](/docs/custom-commands/migrating-from-v2) covers turning on V3 and running it next to your V2 commands.
- [Plans, limits & safety](/docs/custom-commands/limits-and-safety) covers activity budgets, safety protections and permissions.

To find modules other people published, browse the [marketplace](https://scnx.app/marketplace).

## Installing and sharing in practice {#in-practice}

- **Installing** an app takes a minute: open it, click **Add to server**, pick your server, read what the app needs and confirm. Your server needs V3 turned on first.
- **Sharing your own module** means publishing it. After an automatic review it's **Unlisted**: only people with your share link can install it. To appear when people browse the marketplace, you apply for **Listed**, and our team reviews it.
- **Moving single steps** between your own flows works with copy and paste in the editor. There's no share link for a single flow.

## Keeping an eye on updates {#updates}

When an app you installed gets a new version, the overview shows how many apps have an update. **App updates** under **Data & history** lists them with their changelogs. Updates are never installed for you. Your settings and stored data carry over. If you edited an app's flows, updating overwrites those edits, so you're asked first.

## Who can do what {#who}

| Task                                                   | Who                                                                                              |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Turn V3 on, or switch back to V2                       | Server owner and co-owners                                                                       |
| Build flows, edit modules and apps, view data and runs | Owner, co-owners, and trusted admins with custom-command access                                  |
| Emergency stop                                         | Owner, co-owners, and trusted admins who can manage the bot                                      |
| Publish a module                                       | Members of the publishing organization with the Manage Content permission                        |

Anyone who can edit flows can make your bot do anything its Discord permissions allow. Keep that access to people you'd trust with the bot itself.

## Staying within your plan {#plan}

Your server has an activity budget for how much its flows can do. Most servers never reach it. If yours does, the affected actions pause and resume on their own as the budget recovers. Higher plans include more activity and more storage.

## Tips {#tips}

- **Turn off the original before turning on a copy.** A duplicated module starts disabled. If both copies run, they react to the same commands and events.
- **Check Before you add this.** It lists the permissions, intents, commands and external requests of an app. An app that contacts external services names them there.
- **Leave apps unedited if you want easy updates.** Edited apps are skipped by **Update all**, and updating them overwrites your edits.
- **Review your trusted admins before turning on V3.** Flows can do things a trusted admin couldn't do by hand.
- **Keep the emergency stop in mind.** It halts every flow at once without deleting anything, and you can turn everything back on in one click.
