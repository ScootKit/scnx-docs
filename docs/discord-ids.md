# Discord IDs & Mentions

To configure advanced features on SCNX, you sometimes need specific Discord IDs. This guide will show you how to find them and how to mention entities using their ID.

## 1. Enable Discord Developer Mode
Before you can copy IDs, you need to enable the Developer Mode in your Discord client.
1. Open your **User Settings** (the gear icon next to your name).
2. Go to **Advanced** (under the "App Settings" category).
3. Toggle **Developer Mode** to **On**.

![A screenshot of a Discord server marking the gear icon](@site/docs/assets/discord-ids/en/opendiscordsettings.png)
![A screenshot of the Discord user settings page "Advanced"](@site/docs/assets/discord-ids/en/activatedevelopermode.png)

## 2. Copying IDs
Once Developer Mode is active, you can right-click almost anything in Discord to get its unique ID.
* **Users:** Right-click a user's name or avatar and select **Copy User ID**.
* **Channels:** Right-click a channel name and select **Copy Channel ID**.
* **Roles:** Go to Server Settings > Roles, right-click the role name, and select **Copy Role ID**.
* **Messages:** Right-click a message and select **Copy Message ID**.
* **Servers:** Right-click the server's icon and select **Copy Server ID**.

## 3. Mentioning Elements via ID
Sometimes you need to mention an element in a bot response or a message. Use the following syntax:

:::info Mention-Helper in SCNX
In the SCNX Message-Editor, you often don't have to type the syntax manually. You can simply click the **"@" button** above the text field to easily select and insert channel or role mentions.

![SCNX Message Editor Mention Button](@site/docs/assets/discord-ids/en/scnx-mention-helper.png)
:::

| Entity | Syntax | Example |
| :--- | :--- | :--- |
| **User** | `<@USERID>` | `<@123456789>` |
| **Channel** | `<#CHANNELID>` | `<#123456789>` |
| **Role** | `<@&ROLEID>` | `<@&123456789>` |

### Mentioning Timestamps
If you want to include dynamic time displays, Discord uses a special Unix-Timestamp format. 
You can find a detailed guide [here](@site/docs/discord-formatting.md#timestamps).
