# Staff-List

List all your staff and explain team-roles in an always-up-to-date embed.

<ModuleOverview moduleName="team-list" />

## Features {#features}

* Display members of selected roles in an always up-to-date embed.
* Optional, show their current online status.
* Add description to roles and overwrite role names.

Here's an example (you can customize appearance):

![](@site/docs/assets/custom-bot/modules/team-list/example.png)

## Setup {#setup}

1. Create a channel in which the bot should send the staff-list. This channel needs to be empty, and the bot has
   to have the "View channel", "View message history" and "Send message" permissions on it.
2. Open the [Module configuration](https://scnx.app/glink?page=bot/configuration?file=team-list%7Cconfig)
   and [configure the module](#configuration).
3. Reload the configuration of your bot to apply changes - the bot will send a team-list automatically.

## Usage {#usage}

Members will be displayed based on your [configured roles](#configuration). You can't manually add or remove members.

The Staff-List-Embed will automatically be refreshed every 15 minutes - no action required from your part. This also
means that a change (like removing a Staff-Role from a member) might take up to 15 minutes to appear.

## Configuration {#configuration}

This configuration file allows you to set up which roles should get displayed and how the embed will appear.
Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=team-list%7Cconfig).

| Field                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channel                          | This is the channel in which the Staff-List will be sent. If the bot had already sent a message in the past, the latest message will get edited to the Staff-List. We recommend an empty channel.                                                                                                                                                                                                                                                                                                                                                                           |
| Listed roles                     | Members with these roles will be listed in the Staff-List. Please note that a member can be displayed multiple times in the embed below each of their roles.                                                                                                                                                                                                                                                                                                                                                                                                                |
| Description of roles             | Optionally, you can add a description of a role. This will be displayed below role name and above members of the role.<br/>First field: ID of a role<br/>Second field: Description to be displayed below the role.                                                                                                                                                                                                                                                                                                                                                          |
| Embed                            | These are settings that affect how your embed will look like in Discord.<br/>`title`: This is the title of the embed, displayed first in the embed.<br/>`description` (optional): This is the text displayed below the title of the embed.<br/>`color`: This is the color of the embed (use a [HEX-Color or supported color value](./../../additional-features#embed-colors))<br/>`thumbnail-url` / `img-url` (optional): URLs to images displayed inside of the embed. You can use the [File Panel](https://scnx.app/user/files) to upload an image and copy the image URL. |
| Name-Overwrites                  | Optionally, you can overwrite the displayed name of a role. This value will be shown instead of the role name in the embed. Do not add a value if you want to display the role-name.<br/>First field: ID of a role.<br/>Second field: Name to be displayed instead of the role name.                                                                                                                                                                                                                                                                                           |
| Include Online-Status of members | If enabled, the module will not only list the members with a configured role, instead the current online-status of the member will be displayed. Please make sure the displayed members agree to this display. Only the status will be displayed (e.g.: `Online`, `Do not disturb`), activities (like `Playing Cyberpunk 2077`) will not be displayed.                                                                                                                                                                                                                      |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The Staff-List is not appearing in the configured channel</summary>
    <ul>
         <li>Make sure the desired channel is empty.</li>
         <li>Make sure bot has "View channel", "View message history" and "Send messages" permissions on the channel.</li>
         <li>Make sure that the roles field does not include any now deleted roles and try re-saving the configuration.</li>
         <li>Make sure you supplied a <a href="./../../additional-features#embed-colors">correct color value</a> in your configuration.</li>
         <li>Restart your bot.</li>
    </ul>
</details>

<details>
   <summary>Members / Content is being truncated (replaced by "…")</summary>
   This is a limitation from Discord regarding embed length limits. You can try the following:
   <ul>
      <li>Try <a href="#configuration">configuring</a> a role with fewer members.</li>
      <li>Try disabling "Include Online-Status of members" to reduce character use.</li>
      <li>Try splitting up the affected role into smaller chunks.</li>
   </ul>
</details>

<details>
    <summary>A member is missing from the Staff-List / My Staff-List is not up to date</summary>
    <ul>
         <li>Make sure the desired channel is empty.</li>
         <li>Make sure bot has "View channel", "View message history" and "Send messages" permissions on the channel.</li>
         <li>Make sure you have waited at least 15 minutes as this is interval the embed is refreshed.</li>
         <li>Please make sure you have given the user the exact configured role. Please note that roles with the same name still have different IDs, meaning that they can not be grouped together and need to be configured separately.</li>
         <li>Make sure that the roles field does not include any now deleted roles and try re-saving the configuration.</li>
         <li>Make sure you supplied a <a href="./../../additional-features#embed-colors">correct color value</a> in your configuration.</li>
   </ul>
</details>
