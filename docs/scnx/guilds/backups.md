---
sidebar_position: 2
---

# Server Backups

Back up your server's channels, roles, settings and more, and restore them if something goes wrong. Backups are taken by your server's own bot, so you don't need to invite any other bot.

:::tip We care about your privacy
Your bot encrypts each backup before it leaves your bot's host. Backups can also be protected with a password that only you know. Still, please don't post sensitive information (like card details or ID numbers) in channels that you back up.
:::

:::info
Backups used to be taken by the SCNX bot. That system has been discontinued. Read [what happened to backups by the SCNX bot](#legacy).
:::

## Requirements {#requirements}

Your server can take backups when:

- **Your server has its own bot on SCNX.** The SCNX bot isn't needed anymore.
- **Your bot runs version 3.25.1 or newer.** Restart your bot to install the latest version.
- **Your bot runs on a Next-Gen host.** Our older hosts can't take backups yet. You can [move your bot to a Next-Gen host](/docs/scnx/guilds/bots#bot-host), or wait until we upgrade your current host.
- **Your bot is online.** Backups and restores run on your bot. Automatic backups are skipped while it's offline.
- **Your bot has the Administrator permission** and its role is above all other roles. Without it, parts of your server are left out of backups, and restores are refused.

If your bot isn't taking backups yet, the [backup page](https://scnx.app/glink?page=backups) tells you why and what to do.

Some features have extra requirements:

| Feature                           | Requires                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| Automatic backups                 | Our Unlimited plan or higher, or Backup+                                                    |
| Saving messages                   | Our Unlimited plan or higher, or Backup+                                                    |
| Member roles and open forum posts | Our Professional plan or Backup+                                                            |
| Password protection and export    | Our Professional plan or Backup+                                                            |
| Member roles                      | A restart of your bot after turning them on. Some bot hosts don't support this.             |
| Restoring and exporting           | Server owner or co-owner, with two-factor authentication on the SCNX account                |
| Restoring to another server       | You own the other server on SCNX, and it has its own bot that is running and taking backups |

## What is included in a backup? {#included}

Every backup includes these on every plan:

| Part            | What is saved                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| Server settings | Name, verification level, notification and content filter settings, AFK channel, system and rules channel, and more |
| Roles           | Name, color, permissions, icon, position and display settings                                                       |
| Channels        | Every channel and category, with topic, slowmode, permissions, voice settings and forum tags                        |
| Images          | Server icon, banner and invite background, emojis and stickers                                                      |
| Server setup    | AutoMod rules, onboarding, welcome screen and scheduled events                                                      |

You can also choose to include these:

| Part             | What is saved                                                                        | Default |
| ---------------- | ------------------------------------------------------------------------------------ | ------- |
| Bans             | Every banned user and the ban reason                                                 | On      |
| Member roles     | Which member has which role                                                          | Off     |
| Messages         | The most recent messages in each text and announcement channel, with embeds and pins | Off     |
| Open forum posts | The most recently active forum posts that are still open, with their messages        | Off     |

Bans are on by default, because restoring a server without them would let banned users back in.

What you can include, how many messages are saved and how many backups you can keep depends on your plan. The [backup page](https://scnx.app/glink?page=backups) shows your server's limits under **Your backup limits**. Parts your plan doesn't include are listed as **Not in your plan**.

A few things are never included: nicknames, threads in text channels, closed (archived) forum posts, invites, webhooks and soundboard sounds. Attachments in saved messages are kept as links only, so they may no longer work after a restore.

:::note Member roles need a restart
To save member roles, your bot needs extra access from Discord that it can only request when it starts. After you turn on member roles, restart your bot. Some bot hosts don't support this. The backup page tells you if your bot can't save member roles.
:::

## Create a backup {#manual}

1. Open the [backup page](https://scnx.app/glink?page=backups) and click **Create backup**.
2. Under **Also include**, choose the optional parts you want in this backup. This only affects this one backup.
3. Under **Encryption**, choose how the backup is protected. See [Password protection](#password).
4. Click **Create backup**.

Your bot starts right away and keeps running normally while it works. On a busy server, ten minutes is normal. You can close the window, and the backup will appear in your list when it's done.

Make sure your bot has the Administrator permission. Without it, your bot can't see parts of your server, and those parts are left out.

Each backup in your list shows when it was taken, its size, how it is encrypted, when it expires and what's in it. From there you can **Restore backup**, **Export backup** or **Delete backup**. Deleting a backup frees up its slot right away and doesn't affect your server.

## Automatic backups {#automatic}

Automatic backups are off by default. To turn them on, open the [backup page](https://scnx.app/glink?page=backups), switch on **Create backups automatically** and save. Under **Also include in every backup** you choose the optional parts for your automatic backups.

- **When they run:** SCNX spreads the backups across the day. How many backups your bot creates per day depends on your plan. You can't choose the times. The first one runs within 24 hours.
- **Where they are kept:** each automatic backup uses a slot. When all slots are full, new automatic backups are skipped. No existing backups are deleted. Automatic backups continue once you delete a backup.
- **If your bot is offline:** that backup is skipped and isn't made up later.
- **Encryption:** automatic backups always use your server's key, never a password.

Under **Recent automatic backups** you can see whether each recent run completed, failed or was skipped.

Our Starter plan doesn't include automatic backups unless your server has Backup+.

## How long backups are kept {#expiry}

Backups expire one year after they were created. The backup page shows the expiry date on each backup, and you get a notification a week before one expires. Create a new backup before then if you want to keep a current copy.

If your server moves to a plan with fewer backup slots, no backups are deleted. You just can't create new ones until you are below your new limit.

## Password protection {#password}

When you create a backup by hand, you can choose how it's encrypted:

- **Use my server's key:** the default. You can restore and export the backup without entering a password.
- **Use a generated password (recommended):** SCNX generates a strong password and shows it once. Copy it and store it somewhere safe.
- **Use my own password:** pick a long password that isn't easy to guess.

:::danger Lost passwords can't be recovered
SCNX never stores your backup password. If you lose it, the backup can never be opened, restored or exported. Not even our staff can open it.
:::

Password protection needs our Professional plan or Backup+.

## Restore a backup {#restore}

Only the server owner and co-owners can restore backups. Because a restore can change your live server, you need [two-factor authentication](/docs/scnx/account-and-billing/account-security) on your SCNX account and have to confirm your identity before each restore. If you haven't set up two-factor authentication yet, you can do it right from the restore dialog.

Before you start, give your bot the Administrator permission and move its role above all other roles. Your bot can't change roles that are above its own.

### Restore on the same server {#restore-self}

1. Open the [backup page](https://scnx.app/glink?page=backups) and click **Restore backup** on the backup you want.
2. **Choose what to restore.** For each part of the backup, pick one of:
   - **Only add what's missing** (default): adds anything from the backup that's not on your server anymore. Nothing is deleted.
   - **Replace everything in this section**: makes this part of your server match the backup. Anything that isn't in the backup is deleted.
   - **Skip this section**: leaves this part of your server alone.
3. **Review your changes.** Nothing has changed yet. The dialog shows what your choices will do.
4. **Confirm.** If you chose to replace anything, type your server's exact name to confirm. Then click **Restore backup**.

If the backup is protected with a password, you'll be asked for it before the restore starts.

:::danger
**Replace everything in this section** deletes things on your server that can't be recovered. Replacing channels deletes the current channels, including their messages. If you're not sure, use **Only add what's missing**.
:::

A few things are never deleted, whatever you choose: your bot's own role, roles above it, roles that belong to other bots, and @everyone. Bans are never lifted. Member roles are only given to members who are on your server at the time of the restore.

Saved messages and forum posts are posted again by your bot under the original author's name and picture. If you restore messages twice, they will be posted twice.

You can follow the progress in the dashboard and stop the restore at any time. Changes made up to that point stay in place. When the restore is done, you get a **Restore report** that lists what was created, updated, deleted, kept or failed, and why something was left unchanged. Keep it as your record, as changes on Discord can't be undone.

### Restore on another server {#restore-other-server}

In the first step of the restore dialog, choose **Restore to a different server** and pick the server. You can restore to any server that you own on SCNX, as long as it has its own bot that is running and taking backups. Servers that don't qualify are listed with the reason.

The rest works the same as [restoring on the same server](#restore-self).

## Export a backup {#export}

Click **Export backup** on a backup to download it as a JSON file. If the backup is protected with a password, you'll be asked for it. The file contains your backup in readable form, including message content, so only share it with people you trust.

- Only the server owner and co-owners can export backups, and you need two-factor authentication.
- Exporting needs our Professional plan or Backup+.
- Images like emojis and the server icon are not part of the file.
- You can't import an exported backup back into SCNX.

## Backups by the SCNX bot {#legacy}

Before backups moved to your own bot, they were taken by the SCNX bot. That system has been discontinued:

- **The SCNX bot no longer creates backups.** Neither manual nor automatic ones. To keep backing up your server, make sure your bot meets the [requirements](#requirements).
- **Your existing SCNX bot backups are kept.** They are listed under **Backups by the SCNX bot** on the backup page and don't count towards your backup slots.
- **They are not converted.** Old backups stay in the old format. They can't be restored or exported from the dashboard like new backups, only with the SCNX bot.
- **Backup+ carries over.** If your server has Backup+ from an earlier subscription or grant, it gets everything Backup+ includes in the new system.

For these older backups you can:

- **Restore** them with `/restore-backup` in Discord. Use **Copy restore command** on the backup page and run the command on your server with the SCNX bot. Only the Discord server owner can do this, and the SCNX bot needs the Administrator permission. This restore deletes all channels, roles and messages on your server first.
- **Allow in other servers** to restore the backup on a different server. Switch it back with **Limit to this server** afterwards, because anyone with the backup code can restore it while it's allowed.
- **Download** them, if your server has Backup+.
- **Delete** them.

## Who can manage backups {#permissions}

The server owner and co-owners can do everything. You can let [trusted admins](/docs/scnx/guilds/trusted-admins) create and delete backups and change the automatic backup settings with the **Manage Backups** permission. Restoring and exporting always stay with the server owner and co-owners.

## Deleting your bot or server {#deletion}

- **Deleting your bot** destroys your server's key. All backups encrypted with that key are deleted too. Backups protected with your own password are kept. Adding a new bot creates a new key and can't bring the old backups back, so export anything you want to keep first.
- **Deleting your server from SCNX** deletes all of its backups, including password-protected ones.

## Troubleshooting {#troubleshooting}

<details>
    <summary>The page says "No new backups are being created for this server"</summary>
    <ul>
        <li>Your bot isn't taking backups yet. The line below the message tells you why.</li>
        <li>If your bot is too old, restart it to install the latest version.</li>
        <li>If your bot runs on one of our older hosts, click <b>Switch to a Next-Gen host</b>, or wait until we upgrade your current host.</li>
        <li>If your bot is stopped, start it from your bot's dashboard.</li>
    </ul>
</details>
<details>
    <summary>"Your bot didn't respond" or "Your bot hasn't loaded the backup settings for this server yet"</summary>
    <ul>
        <li>Check in your bot's dashboard that your bot is online.</li>
        <li>Restart your bot, then try again. This is needed after your plan changed.</li>
    </ul>
</details>
<details>
    <summary>A part of my server is missing from a backup</summary>
    <ul>
        <li>Open <b>What's in this backup</b> on the backup. Parts that were left out are marked <b>Not included</b> with the reason.</li>
        <li>Give your bot the Administrator permission and move its role above all other roles.</li>
        <li>For member roles, turn them on in your backup settings and restart your bot.</li>
    </ul>
</details>
<details>
    <summary>"This backup is larger than your plan allows" or "Your bot doesn't have enough free disk space"</summary>
    <ul>
        <li>Leave out messages and forum posts, then try again.</li>
        <li>If disk space is the problem, free up space in your bot's dashboard.</li>
    </ul>
</details>
<details>
    <summary>I can't create a new backup because all slots are used</summary>
    <ul>
        <li>Delete a backup you no longer need. The slot becomes available right away.</li>
    </ul>
</details>
<details>
    <summary>No automatic backups are being created</summary>
    <ul>
        <li>Make sure <b>Create backups automatically</b> is on and saved.</li>
        <li>Make sure you have at least one free backup slot.</li>
        <li>Make sure your bot is online. Backups are skipped while it's offline.</li>
        <li>Check <b>Recent automatic backups</b> to see what happened to each run.</li>
    </ul>
</details>
<details>
    <summary>Some items failed during a restore</summary>
    <ul>
        <li>Give your bot the Administrator permission and move its role above all other roles.</li>
        <li>Run the restore again with <b>Only add what's missing</b>. It only adds what is still missing.</li>
    </ul>
</details>
<details>
    <summary>I see "Too many requests"</summary>
    <ul>
        <li>The number of backups and restores per hour is limited. Wait a few minutes, then try again.</li>
    </ul>
</details>
<details>
    <summary>I see "Our backup storage is currently unavailable"</summary>
    <ul>
        <li>Your backups are safe. Until the storage is back, you can't create, download, restore or delete backups. This usually takes a few minutes.</li>
    </ul>
</details>
<details>
    <summary>I see "This server has no backup key"</summary>
    <ul>
        <li>Please <a href="https://scnx.app/help">contact our staff</a> and we'll fix this for you.</li>
    </ul>
</details>
