# Permissions & Slash Commands

---

Discord provides a central system for managing Slash Commands.  
This system allows server administrators to have detailed control over  
permissions for bots and their commands.

Due to the underlying permission logic, it is necessary  
to define which actions bots and users are allowed to perform.  
This guide explains the necessary steps for configuration.

# Configuring Custom Bot Permissions

## Open the Command Permissions Menu

To manage permissions for Slash Commands:

1. Open **Server Settings**  
2. Navigate to **Integrations → Bots & Apps**  
3. Select the desired bot  
4. Click **Manage**

![Command Permissions Menu](@site/docs/assets/custom-bot/slash-commands/en/integrations-1.png)

## Manage Permissions

After opening the bot menu, an overview of the available  
Slash Commands will be displayed.

![Permissions Overview](@site/docs/assets/custom-bot/slash-commands/en/integrations.png)

## Settings for Individual Commands

Select any Slash Command.  
A menu will open to configure its permissions.

![Command Settings](@site/docs/assets/custom-bot/slash-commands/en/ausführen.png)

For each command, you can specify:  
- which **roles** are allowed to execute it  
- which **users** have access  
- in which **channels** the command can be used  

> ⚠️ **Important Notice**  
> For most commands, the bot does **not** perform additional permission checks  
> (exception: `/moderate`).  
> Any user granted execution rights here can use **all subcommands**  
> of this command without further restrictions.  
> Permissions should therefore be assigned carefully.

## Command Synchronization

Discord provides the option to manage permission settings for multiple  
commands simultaneously.

- Synchronized commands inherit identical settings  
- Individual commands can be excluded from synchronization manually  
- Commands that cannot be synchronized can still be configured individually

# Changes for the CustomBot

Previously, every time permissions were changed in the dashboard,  
all commands had to be re-uploaded to Discord. This is now no longer necessary.  
At the same time, we cannot set permissions for command usage directly,  
so all options for configuring permissions will be removed.

## Questions or Issues?

You can always open a support ticket in the #support channel on [Discord](http://scootk.it/dc-en) and ask for help. We are happy to assist.

More information from Discord: https://discord.com/blog/slash-commands-permissions-discord-apps-bots