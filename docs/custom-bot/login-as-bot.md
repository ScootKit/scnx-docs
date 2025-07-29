# Log-In as Bot

With bot login, you can send messages using your custom bot, with or without embeds, and even attach custom command buttons, link buttons, and self-role buttons.

Here is a Example how Log-In as Bot looks like:
![](@site/docs/assets/custom-bot/additional-features/login-as-bot-1.png)

In this picture, you can see the channels of your server on the left side. In the center, you can see the messages within the selected channel. At the bottom, there are three buttons: `Send Message`, `Start a Poll`, and `Start a Giveaway`.
To access this interface, simply visit https://scnx.app/glink?page=bot/login.

---
## Send A meesage as your Bot
Click on the `Send Message` button, and you will be greeted with the Message Editor feature from SCNX. You can type your message normally, use an embed, or both if you prefer. Additionally, you can attach up to 5 images per message, add up to 5 self-role buttons, up to 25 self-role elements, up to 5 custom command buttons, up to 25 custom command elements, and up to 5 link buttons.

:::note
If you want to use `Custom Command Button` and `Custom Command Element` you have to Work with [Custom Commands](https://scnx.app/glink?page=bot/custom-commands)
:::

After configuring your message, click the `Send Message` button. After a short moment, congratulations! you’ve just sent a message with your bot!

---
## Start a poll (not out yet)
:::info
This feature isn't available yet. This section does not spcify when it will be released or what it will look like.
:::
In the future, you’ll be able to start a poll without activating the [Polls Module](https://docs.scnx.xyz/docs/custom-bot/modules/community/polls/). Simply click the `Start a Poll` button to create a poll for your community.
However, this feature isn’t available yet, so you’ll need to wait until the developers release it. For now, please continue using the Polls Module.

---
## Start a Giveaway (not out yet)
:::info
This feature is also not avaiable yet.
:::
Just like with the poll feature, you'll be able to create giveaways in the future without activating the [Giveaways Module](https://docs.scnx.xyz/docs/custom-bot/modules/community/giveaways/). Simply click the `Start a Giveaway` button to create a giveaway for your community — configure it, and you're ready to go!
However, this feature isn’t available yet, so you’ll need to wait until the developers release it. For now, please continue using the Giveaways Module

---
## Best way to use "Log-In as Bot"
Here is a text on where you can use Log-In as Bot:

tasks such as creating announcements for your community, setting up self-role systems that allow users to assign roles to themselves with the click of a button, and posting your server rules in a clean and organized way using embeds or plain text. Additionally, it integrates seamlessly with custom commands, allowing you to trigger specific bot actions directly from the messages you send. Whether you're managing a large community.

---
## Troubleshooting

**Your Bot needs the VIEW_CHANNEL and SEND_MESSAGES permissions on #XXXXX to use Login-As-A-Bot**

This error means that you didn’t grant Administrator permissions to your bot. However, it must have at least the `VIEW_CHANNEL` and `SEND_MESSAGES` permissions so it can see the channel and send messages to it.
