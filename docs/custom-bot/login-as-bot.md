# Log-In as Bot

Send messages, giveaways, and polls with your bot!

## Features {#features}

- Send messages with embeds, self role elements, images and much more.
- Start a giveaway for your server (not supported yet).
- Create a poll and let your users vote (not supported yet).

## Usage {#usage}

Visit the [Bot-Log-in page](https://scnx.app/glink?page=bot/login) in your dashboard.

Your bot needs at least the permissions ``View Channel``, ``Send Messages`` and (if your bot should add/remove roles) ``Manage Roles``.

Here you can take several actions - they are explained in more detail below.

## Send a message {#send-a-message}

Select the channel on the left side where you want to send the message, then click on the 'Send message' button to send a new message.
You are now in the message editor, where you can customize your message as you wish (as with almost all message editors in SCNX).

You can find a detailed description for all the features of the message editor in the section [Message editor](#message-editor).

Once you are done, send your message and the bot will send it to your selected channel.

## Edit a message {edit-a-message}

To edit a message from your bot, select the channel on the left side, search for the corresponding message and click on the blue 'Edit message' button.
This will open the message editor, where you can customize your message.

You can find a detailed description for all the features of the message editor in the section [Message editor](#message-editor).

When you are done, click on the 'Edit message' button and your message will be edited in Discord.

## Start a giveaway (not supported yet) {start-a-giveaway}

In the future, this feature will allow you to start giveaways directly from your dashboard without having to activate the [giveaway module](https://docs.scnx.xyz/docs/custom-bot/modules/community/giveaways).

## Start a poll (not supported yet) {#start-a-poll}

In the future, this feature will allow you to start polls directly from your dashboard without having to activate the [polls module](https://docs.scnx.xyz/docs/custom-bot/modules/community/polls).

## Message editor {#message-editor}

### Edit message text {edit-message-text}

Normal message text is useful for simple, clear messages that don't need a lot of structure.

To edit the 'normal' message text, click in the message field and edit your text.
You can mention channels and roles using the ``@`` symbol (or use the Discord format instead), the emoji symbol opens the emoji selection, and the button on the right takes you to the [Discord Formatting](https://docs.scnx.xyz/docs/discord-formatting) documentation.

:::info Mention users/roles/channels using the Discord format
If you want to mention users, roles, or channels manually, you can do this (in addition to the SCNX UI) using the Discord format - you can find all the information about that in [this article](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) from Discord.
:::

### Add embeds {#add-embeds}

An embed allows you to structure your message more clearly and make it more appealing.

To add an embed to your message, click on the 'Add Message Embed' field - then you can configure the following things:

- Title: Heading of the embed
- Color: Changes the color of the border on the left side
- Description: Main text of the embed
- Embed images: Adds an embed/thumbnail image to the embed
- Embed fields: Adds individual fields to your embed
- Embed author: Adds a name, URL, and icon to the top of the embed
- Embed footer: Edit the footer of your embed ('Professional' plan required)

You can add up to ten embeds per message.

### Add images {#add-images}

To attach an image to your message, click on the 'Attach images' button - then you can either select an image that has already been uploaded or upload a new one from your device.

You can add up to five images per message.

### Add self-role buttons {add-self-role-buttons}

With self-role buttons, your members can assign and remove roles themselves. 

To add one, click on 'Add Self-Role Buttons' – you can now configure the following things:

- Role: Sets the role for which the action should be performed
- Type: Sets the type of role assignment - 'Add role' can only add a role and 'Remove role' can only remove a role, while 'Toggle Role' supports both (if the user doesn't have the role, it will be added, otherwise it will be removed)
- Style: Sets the color of the button
- Label: Sets the text that is displayed on the button
- Emoji: Adds an emoji before the label

You can add up to five self-role buttons per message.

### Add self-role elements {add-self-role-elements}

With Self-Role elements, you can create a drop-down menu that allows your members to assign and remove roles themselves - this option is useful if you have many roles and if you prefer advanced options.

To add one, click on 'Add Role Element' – here you can set the following:

- Role: Sets the role for which the action is to be performed
- Label: Sets the text of the element that is displayed in the drop-down menu
- Description: Smaller text (description of the element) that is displayed below the label
- Emoji: Adds an emoji before the label and description
- Advanced options:
  - Placeholder: Title of the drop-down menu
  - How many roles need to be assigned at least?: Minimum number of roles before roles can be assigned
  - How many roles can be selected at most?: Maximum number of roles until users can no longer select roles
 
### Add custom command buttons {add-custom-command-buttons}

With Custom Commands Buttons, you can add the buttons to your message that you have created.
You can find out how to work with Custom Commands and how to create your own buttons in the [Custom Commands](https://docs.scnx.xyz/docs/custom-bot/custom-commands) documentation.

To add one to your message, click on 'Add Custom Command Buttons' – you will now see the following options:

- Command: Selects the corresponding custom button
- Style: Sets the color of the button
- Label: Sets the text that is displayed on the button
- Emoji: Adds an emoji before the label

You can add up to five custom command buttons per message.

### Add custom command elements {add-custom-command-elements}

With custom command elements, you can add the buttons to your message that you have created, but unlike above, they will be displayed in a drop-down menu instead of single buttons.
You can find out how to work with Custom Commands and how to create your own buttons in the [Custom Commands](https://docs.scnx.xyz/docs/custom-bot/custom-commands) documentation.

To add one, click on 'Add Custom Command Element' – you can now configure the following settings:

- Command: Selects the corresponding custom button
- Label: Sets the text of the element that is displayed in the drop-down menu
- Description: Smaller text (description of the element) that is displayed below the label
- Emoji: Adds an emoji before the label and description

### Add link buttons {add-link-buttons}

Link buttons allow you to easily redirect your users to websites by letling them click on a button.

To add one, click on 'Add Link Buttons' - here you will see the following options:

- Label: Sets the text that is displayed on the button
- URL: Address of the website you want to link to
- Emoji: Adds an emoji in front of the label

### Additional features

The message editor has a few small buttons that may be helpful in some situations.
You can find them in the message preview, directly below the button for sending/editing the message.

- Copy and paste messages:
  - Click on the 'Copy message' button to copy your actual message.
  - When you want to paste a copied message in a message editor, use the button 'Paste message'.
  - Since the message is copied as an 'SCNX message' instead of 'normal' message text as you do it usually in a browser or similar, all formatting and elements are retained – this saves you a lot of time if you want to use the same message multiple times.
- Reset messages:
  - Click on the 'Reset message' button if you want to reset your message to the default value (no content).
  - This allows you to reset your entire message with just one click if you want to start over again.
- Share messages:
  - Click on the 'Share message' button if you want to share your current message content with other users.
  - This is useful if you have a message template and want to share it with other users - they can import the message with all elements to their server by using the link and customize it on their own.


## Troubleshooting {#troubleshooting}

<details>
<summary>My bot can't fetch the messages from a channel.</summary>
Make sure that your bot has at least the ``View Channel`` and ``Send Messages`` permissions to access channels and messages.
</details>

<details>
<summary>The message 'Hang in there, we are fetching you messages...' doesn't disappear.</summary>
Try reloading the page and clearing your browser data once. If that doesn't help, [contact our team](https://scnx.app/help).
</details>

<details>
<summary>I'm getting errors in the message preview from the message editor.</summary>
Normally, the error is described in detail in the message preview. However, if you still need help, please don't hesitate to [contact our team](https://scnx.app/help).
</details>

<details>
<summary>I have reached a rate limit in the channel selection or message editor.</summary>
It looks like you have switched channels or tried to send messages too many times. Please try again in the specified time period.
</details>
