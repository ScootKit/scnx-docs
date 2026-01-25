# Permissions & Slash Commands

---

Discord provides a centralized system for managing Slash Commands.  
This system allows server administrators to control permissions for bots and their commands in detail.

Because of the underlying permission logic, it is necessary to define which actions bots and users are allowed to perform.  
This guide explains how to configure these permissions for your bot.

# Configuring Custom Bot Permissions

## Open the Command Permissions Menu

To manage permissions for Slash Commands:

1. Open **Server Settings**  
2. Navigate to **Integrations → Bots & Apps**  
3. Select the desired bot  
4. Click **Manage**

![Command Permissions Menu](@site/docs/assets/custom-bot/slash-commands/de/integrations-1.png)

## Manage Permissions

After opening the bot menu, an overview of the available Slash Commands is displayed.

![Permissions Overview](@site/docs/assets/custom-bot/slash-commands/de/integrations.png)

## Configure Individual Commands

Select any Slash Command to open the permissions configuration menu.

![Command Settings](@site/docs/assets/custom-bot/slash-commands/de/ausführen.png)

For each command, you can specify:  
- Which **roles** are allowed to execute it  
- Which **users** have access  
- In which **channels** the command can be used  

> ⚠️ **Important Note**  
> For most commands, the bot does **not** perform additional permission checks  
> (exception: `/moderate`).  
> Any user granted execution rights here can use **all subcommands** of this command without further restrictions.  
> Permissions should therefore be assigned carefully.

## Command Synchronization

Discord allows managing permissions for multiple commands at once:

- Synchronized commands inherit identical settings  
- Individual commands can be excluded from synchronization manually  
- Commands that cannot be synchronized can still be configured individually

# Using the Custom Bot

Permissions for Slash Commands can be configured directly through the bot menu, without needing to re-upload commands to Discord.  
All available options for assigning permissions can be set within the interface described above.

## Questions or Support

If you need assistance, you can open a support ticket in the #support channel on [Discord](http://scootk.it/dc-de). We are happy to help.

More information from Discord: https://discord.com/blog/slash-commands-permissions-discord-apps-bots
