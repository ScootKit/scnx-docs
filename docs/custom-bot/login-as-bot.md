# Log-In as Bot

With bot login, you can send messages using your custom bot, with or without embeds, and even attach custom command buttons, link buttons, and self-role buttons.

Here is a Example how Log-In as Bot looks like:
![](@site/docs/assets/custom-bot/additional-features/login-as-bot-1.png)

and on Discord:
![](@site/docs/assets/custom-bot/additional-features/login-as-bot-4.png)

In this picture, you can see the channels of your server on the left side. In the center, you can see the messages within the selected channel. At the bottom, there are three buttons: `Send Message`, `Start a Poll`, and `Start a Giveaway`.
To access this interface, simply visit https://scnx.app/glink?page=bot/login.

---
## Send A meesage as your Bot
Click on the `Send Message` button, and you will be greeted with the Message Editor feature from SCNX.

Within the Message Editor, you can:
- Type your message as plain text  
- Use rich **embeds** for structured and visually appealing layouts  
- **Attach up to 5 images** per message  
- Add up to **5 self-role buttons**, each supporting up to **25 self-role options**  
- Include up to **5 custom command buttons**, each with up to **25 custom command actions**  
- Add up to **5 link buttons** to redirect users to external websites or resources

![](@site/docs/assets/custom-bot/additional-features/login-as-bot-2.png)

:::note
If you want to use `Custom Command Button` and `Custom Command Element` you have to Work with [Custom Commands](https://scnx.app/glink?page=bot/custom-commands)
:::

After configuring your message, click the `Send Message` button. After a short moment, congratulations! you’ve just sent a message with your bot!


---
## Edit a Message

You can also edit Messages as a bot. Simply click on the **"Edit Message"** button located underneath the message sent by the bot. After clicking the **"Edit Message"** button, you will be greeted with the **Message Editor** feature from **SCNX**.  
Here, you can write your message in plain text, use an embed for better formatting, or even combine both — depending on your needs.

Within the Message Editor, you can:
- Type your message as plain text  
- Use rich **embeds** for structured and visually appealing layouts  
- **Attach up to 5 images** per message  
- Add up to **5 self-role buttons**, each supporting up to **25 self-role options**  
- Include up to **5 custom command buttons**, each with up to **25 custom command actions**  
- Add up to **5 link buttons** to redirect users to external websites or resources

This can help if you forgot something or a Typo if you want to correct.

:::info
You can **only edit messages sent by the bot**. Messages from other users **cannot** be edited through the Message Editor.
:::

---
## Best way to use "Log-In as Bot"
Here is a list on where you can use Log-In as Bot:

- **Create announcements** for your community  
- **Set up self-role systems** that allow users to assign roles to themselves with the click of a button  
- **Post your server rules** in a clean and organized format using embeds or plain text  
- **Seamlessly integrate with custom commands** to trigger specific bot actions
- Perfect for managing **large communities**

---
## Troubleshooting

**Your Bot needs the VIEW_CHANNEL and SEND_MESSAGES permissions on #Channel to use Login-As-A-Bot**

This error means that you didn’t grant Administrator permissions to your bot. However, it must have at least the `VIEW_CHANNEL` and `SEND_MESSAGES` permissions so it can see the channel and send messages to it.

**When using the Self-Role Buttons, the bot doesn't assign any roles.**

This issue usually occurs when the bot doesn't have the permission to do that. Please make sure your custom bot has the `MANAGE_ROLES` permission.

**In scnx.app its stuck in the "Hang in there, we are fetching you messages..." loading screen**

If you're experiencing issues, you can try **restarting the website** or **switching channels** and then try again.

![](@site/docs/assets/custom-bot/additional-features/login-as-bot-3.png)
