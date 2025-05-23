---
sidebar_position: 2
---

# Server Backups

Back up messages, channels, roles and more of your server completely automatically and restore it in case anything goes wrong.

:::tip We care about your privacy
Because backups may contain sensitive user information and sensitive message content, they will be encrypted at rest and are only decrypted at runtime (e.g. when you restore a backup). Still, please do not post messages containing sensitive information (like Credit-Card-Details or Social-Security-Numbers) in channels
that get backed up.
:::

:::info
To use this feature, [invite the SCNX-Bot](https://scootk.it/invite-scnx) to your server. Some feature require a separate Backups+ subscription.
:::

## What is included in Backups? {#included}

| Feature        | Description                                                                                                                                            |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channels       | Backups will include every channel on your Discord. Channel data includes: Channel name, Channel topic, Channel cooldown, Channel permissions and more |
| Roles          | Backups will include every role on your Discord. Saved Role data includes: Permissions, name, color and more                                           |
| Emojis         | Backups will include every Emoji on your Discord. This includes the actual emoji-image and emoji-name. Stickers might also be included.                |
| Bans           | Backups will include every Ban on your Discord. Every ban includes a reason and the banned user.                                                       |
| Members        | Backups will include which user had which role when the backup was created.<br/> **THIS FEATURE MIGHT NOT BE AVAILABLE TO EVERYONE**                   |
| Guild-Settings | Backups will include Server name, icon, settings (like the AFK channel), Auto-Moderation rules and more                                                |

## Manual backups {#manual}

To create a manual backup, please visit your [backup dashboard](https://scnx.app/glink?page=backups) in your SCNX Dashboard. Next, click on "Create backup" and select what [parts the backup should include](#included). Then, confirm your backup.
Creating a backup might take up to 15 minutes, depending on the number of messages that need to get stored.

![](@site/docs/assets/scnx/guilds/backups/create.png)

After the backup has been created (this can take a while), you'll be able to view the backup in your backup-list and
manage it. These options are available:
* Restore backup: Allows you to restore the backup on this or another server. Please read more in the [restore backups](#restore) section.
* Disable / enable Guild-Lock: Allows / Disallows your Backup to be restored on other servers. Please read more in the [restore backups on other servers](#restore-other-server) section.
* Delete backup: Permanently deletes the backup from our servers. This can not be reversed.
* Export backup: Exports the backup as a JSON-File.  Please read more in the [export backups](#export) section.

![](@site/docs/assets/scnx/guilds/backups/backup.png)


## Automatic backups {#automatic}

To enable automatic backups, visit the [backup dashboard](https://scnx.app/glink?page=backups) and select the number of
backups you want to be created below "Automatic backups" and save the change.

![](@site/docs/assets/scnx/guilds/backups/automatic-backups.png)

Based on your setting, SCNX will create a backup up to two times a day. This always happens at the same time of day,
based on your server's timeslot. You can find the timeslot of your server in your dashboard. Please note that summer
might affect the display time of creation on your backup.

Automated backups will use the backup-slots available to your guild. If there aren't any available, the system will overwrite the oldest automatic backup. Your manual backups never get touched. If manual backups occupy all backup-slots, no automatic backups will be created.


## Restore backups {#restore}

### Restore on original server {#restore-self}

Before restoring a backup, please adjust the following settings on your Discord:
* Move the (verified) SCNX Bot's role above all other roles and give it Administrator permissions
* Disable the community feature of your server in the Server Settings (you can re-enable it later)
* Understand that continuing will delete all messages, channels and roles from your server

To restore a backup on your server, visit the [backup dashboard](https://scnx.app/glink?page=backups) of your server and click on the backup you want to restore. Next, click on "Restore backup". You'll be shown a command. Use the "Copy command" button to copy the command and paste it into Discord on your server. Make sure that you are executing this command with the (verified) SCNX-Bot.

![](@site/docs/assets/scnx/guilds/backups/execute-command.png)

Next, confirm your request using the button below the answer in Discord.

:::danger
Confirming this request will delete all current channels & roles on your Discord and replace them with the channels & roles stored in your backup.
:::

![](@site/docs/assets/scnx/guilds/backups/confirm.png)

After confirming, the SCNX Bot will start by deleting all existing channels and roles from your server. Once that's done, the SCNX Bot will start restoring your data. This might take up to **20 minutes** or even more. Once done, the SCNX Bot will ping you (or DM you). This will also happen if something went wrong.


### Restore on other servers {#restore-other-server}

:::tip
The server you want to restore the backup on does not need to be added to SCNX, but the [SCNX bot needs to be invited](https://scootk.it/invite-scnx).
:::

The restoration process is widely the same as [restoring the backup on your own server](#restore-self) - even the command used is the same. Still, before restoring a backup on another server, you'll need to disable the Guild-Lock on your server.

The guild lock is a protection mechanism for your backup: Anyone with the backup code (the command displayed in the dashboard) can restore the backup on any server if it is disabled. Luckily, it's enabled by default. To disable it, visit the [backup dashboard](https://scnx.app/glink?page=backups), select your backup and click on "Disable Guild-Lock".
![](@site/docs/assets/scnx/guilds/backups/disable-guild-lock.png)

After disabling the guild-lock, please follow the same instructions as [restoring on the original server](#restore-self). When you are done, we highly recommend re-enabling the Guild-Lock - you can do that the same way you enabled it.


## Troubleshooting {#throubleshooting}

<details>
    <summary>
        When I create a backup, I see the following message: "Backup planning failed: ADMINISTRATOR permission needed,
        but not granted"
    </summary>
    <li>Please make sure that the (verified) SCNX Bot has the Administrator permission and try again.</li>
</details>
<details>
    <summary>
        When I create a backup, I see the following message: "Oh no, you got ratelimited"
    </summary>
    To ensure the safe performance of all authorized activities, we limit the number of backups a server can create
    manually in a certain timeframe.
    <li>Please wait the amount of time shown in the message.</li>
</details>
<details>
    <summary>
        My backup is shown in the SCNX Dashboard as "Errored"
    </summary>
    <li>Please make sure that the (verified) SCNX Bot has the Administrator permission and try again.</li>
    <li>Please [contact our staff](https://scnx.app/help) to investigate this issue.</li>
</details>
<details>
    <summary>
        When trying to restore a backup, the SCNX Bot messages me with "An error occurred when trying to restore your
        backup ):"
    </summary>
    <li>Please make sure that the (verified) SCNX Bot has the Administrator permission and try again.</li>
    <li>Please make sure you have disabled the community feature on your Discord and try again.</li>
    <li>Please make sure that the role of the (verified) SCNX Bot is above all other roles and try again.</li>
    <li>Please [contact our staff](https://scnx.app/help) to investigate this issue.</li>
</details>
<details>
    <summary>
        SCNX is not creating automatic backups on your server
    </summary>
    <li>Please make sure that the (verified) SCNX Bot has the Administrator permission.</li>
    <li>Please make sure you've actually [enabled this feature](#automatic] and saved the change.</li>
    <li>Please make sure you have at least one backup-slot not occupied by a manual backup.</li>
    <li>Please wait 24 hours for a backup to be created automatically.</li>
    <li>You can't change the timeslot assigned to your server. You can always view the timeslot in your dashboard.</li>
</details>

## Export backups {#export}

To export a backup, visit the [backup dashboard](https://scnx.app/glink?page=backups), select your backup and click on "Export backup". Your browser will - after a short delay - start downloading a JSON-File to your PC.
Before downloading, please check the "Calculated size" of the backup to make sure you know how much data you are downloading.

This JSON file was designed to work well with [discord-backup](https://github.com/Androz2091/discord-backup), but - as we do not use this library internally - we can not guarantee that the export will work flawlessly with it.
Still, anyone with the technical knowledge can easily restore your backup using the export.
The JSON file includes sensitive information, like message content, so only share it with users you trust.

You can not import exported backups back into SCNX.