# Discord IDs & Mentions

To configure advanced features on SCNX, you sometimes need specific Discord IDs. These unique identifiers allow our system to precisely target the correct users, channels, or roles. This guide will show you how to find them and how to mention entities using their ID to customize your bot's behavior.

## 1. Enable Discord Developer Mode
Before you can copy IDs, you need to enable the Developer Mode in your Discord client. This is a built-in feature that unlocks advanced context menu options for power users and developers.

1. Open your **User Settings** (the gear icon next to your name).
2. Go to **Advanced** (located under the "App Settings" category).
3. Toggle **Developer Mode** to **On**.

![A screenshot of a Discord server marking the gear icon](@site/docs/assets/discord-ids/en/opendiscordsettings.png)
![A screenshot of the Discord user settings page "Advanced"](@site/docs/assets/discord-ids/en/activatedevelopermode.png)

## 2. Copying IDs
Every entity on Discord — whether it's a user, a server, or a single message — has a unique ID. Once Developer Mode is active, you can right-click almost anything to retrieve it. IDs are used by bots to identify entities as they don't change - even if the name of the entity has changed.

### Copy User and Bot IDs
1. Right-click on the user's name or avatar.
2. Select **Copy User ID** at the bottom of the menu.
* **On Mobile:** Long-press the user's profile, tap the three dots (`...`) in the top right, and select "Copy User ID".

![Screenshot showing how to right-click a user and select Copy User ID](@site/docs/assets/discord-ids/en/copy-user-id.png)

### Copy Channel IDs
1. Right-click a channel name in your sidebar.
2. Select **Copy Channel ID**.
* **On Mobile:** Long-press the channel name, scroll down, and tap "Copy Channel ID".

![Screenshot showing the context menu on a channel with Copy Channel ID highlighted](@site/docs/assets/discord-ids/en/copy-channel-id.png)

### Copy Role IDs
1. Go to **Server Settings** > **Roles**.
2. Right-click the specific role name.
3. Select **Copy Role ID**.

![Screenshot of the role settings page with the right-click menu active](@site/docs/assets/discord-ids/en/copy-role-id.png)

### Copy Message IDs
1. Hover over the message and click the **three dots** (More) on the right side.
2. Select **Copy Message ID** at the very bottom of the menu.
* **On Mobile:** Long-press the message, scroll to the bottom of the pop-up menu, and tap **Copy Message ID**.

![Screenshot showing the context menu on a message with Copy Message ID highlighted](@site/docs/assets/discord-ids/en/copy-message-id.png)

### Copy Server IDs (Guild IDs)
1. Right-click the **Server Name** at the top of your channel list or right-click the **Server Icon** in your server sidebar.
2. Select **Copy Server ID** at the bottom of the list.
* **On Mobile:** Tap the server name at the top of the channel list to open the server menu, scroll to the very bottom, and select **Copy Server ID**.

![Screenshot showing how to right-click a server icon to copy the Server ID](@site/docs/assets/discord-ids/en/copy-server-id.png)

---

## 3. Mentioning Elements via ID
Sometimes you need to mention a user, role, or channel within a bot response (like a custom embed or a welcome message) where a standard "@" mention won't not work. Using the raw ID syntax ensures the mention resolves correctly once the bot sends the message.

:::info Mention-Helper in SCNX
In the SCNX Message-Editor, you often don't have to type the syntax manually. You can simply click the **"@" button** above the text field to easily select and insert channel or role mentions.

![SCNX Message Editor Mention Button](@site/docs/assets/discord-ids/en/scnx-mention-helper.png)
:::

### Mention Syntax Table
If you are writing raw text or configuring advanced fields, use the following syntax:

| Entity | Syntax | Example | Preview |
| :--- | :--- | :--- | :--- |
| **Users and Bots** | `<@USERID>` | `<@787026352191701033>` | @SCNX |
| **Channels** | `<#CHANNELID>` | `<#1113165263295230002>` | #news |
| **Roles** | `<@&ROLEID>` | `<@&1113115210048360489>` | @Moderator |

### Mentioning Timestamps
If you want to include dynamic time displays (e.g., "5 minutes ago" or showing a specific date that adapts to the viewer's timezone), Discord uses a special Unix-Timestamp format.

To create a timestamp, you wrap a Unix-Time (seconds since 1970) in a specific code. For example: `<t:1700000000:R>`.

* **Dynamic:** It automatically adjusts to the local time of every user.
* **Versatile:** Can show relative time ("in 2 hours"), full dates, or just the time.

![A screenshot showing examples of different timestamp formats](@site/docs/assets/discord-formatting/en/types3.png)

You can find a detailed guide and a generator for these [here](@site/docs/discord-formatting.md#timestamps).
