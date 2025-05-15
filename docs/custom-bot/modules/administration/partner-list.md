# Partner-List

Manage your partnerships with other guilds easily.

<ModuleOverview moduleName="partner-list" />

## Features {#features}

This module is designed to make managing partnerships with other Discord servers easy.

* Create an always up-to-date embed listing all your current partners.
* Create custom categories to keep your partners sorted.
* Automatically assign and remove roles from partners.
* Automatically send notifications to your partner about changes in their status.

Here's an example of a partner-list (you can customize appearance):

![](@site/docs/assets/custom-bot/modules/partner-list/example.png)

## Setup {#setup}

* Please [set up permissions](/docs/custom-bot/slash-commands) for Slash-Commands to avoid unauthorized usage of them.
* Then, configure the partner-list:
    1. Create a channel in which the bot should send the partner-list. This channel needs to be empty, and the bot has
       to have the "View channel", "View message history" and "Send message" permissions on it.
    2. Open the [Module configuration](https://scnx.app/glink?page=bot/configuration?file=partner-list%7Cconfig)
       and [configure the module](#configuration).
    3. Reload the configuration of your bot to apply changes - the bot will send a partner-list automatically.

## Usage {#usage}

* To add a new partner, use [`/partner add`](#commands).
* To edit a partner, use [`/partner edit`](#commands).
* To delete a partner, use [`/partner delete`](#commands).
* The Partner-List will be updated automatically to reflect changes, no manual action needed.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                                                                                  | Description                                                                                                                                                                                                                                                     |
|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/partner add name:<Text> category:<Category> owner:<Member> invite-url:<Text>`                                          | Creates a new partner. You can enter any text as the name of the partner and link any URL as an Invite-URL and select a category from the [configured categories](#configuration). If enabled, this will send a message to the partner.                         |
| `/partner edit id:<PartnerID> [name:<Text>] [category:<Category>] [owner:<Member>] [invite-url:<Text>] [staff:<Member>]` | Edits an existing partner. You can update the name, Invite-URL, Owner, Category and the assigned Staff-Member - only options you specify will be updated. You can either enter an ID of an existing partner or use auto-complete to select the correct partner. |
| `/partner delete id:<PartnerID>`                                                                                         | Deletes an existing partner. You can either enter an ID of an existing partner or use auto-complete to select the correct partner. Deleted partners can't be restored.                                                                                          |

## Configuration {#configuration}

This configuration file allows you to set up notification-messages to partner, edit the partner-list-embed and more.
Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=partner-list%7Cconfig).

| Field                              | Description                                                                                                                                                                                           |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channel                            | This is the channel in which the Partner-List will be sent. If the bot had already sent a message in the past, the latest message will get edited to the Partner-List. We recommend an empty channel. |
| Partner-List-Embed                 | This is the configuration of the partner-list.                                                                                                                                                        |
| Partner-List-Embed: title          | Title of the Partner-List-Embed.                                                                                                                                                                      |
| Partner-List-Embed: description    | Description of the Partner-List-Embed.                                                                                                                                                                |
| Partner-List-Embed: partner-string | This is the format of a partner displayed in the Partner-List-Embed. You can find availible parameters in the [Dashboard](https://scnx.app/glink?page=bot/configuration?file=partner-list%7Cconfig).  |
| Partner-List-Embed: color          | This will be the color of the Partner-List-Embed. Must be a [HEX-Color or supported color value](/docs/custom-bot/additional-features#embed-colors).                                                  |
| Categories                         | These are the categories that partners can be assigned to. Each category needs to be unique. Only these categories can be selected via commands.                                                      |
| Category-Roles                     | These are the roles that will get assigned to new partners and removed from deleted partners.<br />First field: Category-Name (case-sensitive)<br/>Second field: ID of the role                       |
| Send Partner-Notifications         | If enabled, partners will be sent a message when they get added or removed.                                                                                                                           |
| Partner-Welcome-DM                 | <i>Only visible if "Send Partner-Notifications" is enabled.</i><br/>This message will get send to partners when they get added.                                                                       |
| Partner-Removal-DM                 | <i>Only visible if "Send Partner-Notifications" is enabled.</i><br/>This message will get send to partners when they get removed.                                                                     |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The Partner-List is not appearing in the configured channel</summary>
    <ul>
        <li>Make sure the desired channel is empty.</li>
        <li>Make sure bot has "View channel", "Send messages" and "View message history" permissions on the channel.</li>
        <li>Make sure non of your category fields are empty.</li>
        <li>Make sure you supplied a <a href="/docs/custom-bot/additional-features#embed-colors">correct color value</a> in your configuration.</li>
        <li>Restart your bot.</li>
    </ul>
</details>

<details>
    <summary>Can I restart the ID counter?</summary>

    No. The ID is an unique identification number and can not be reset. This is a technical limitation - you can remove the <code>%id%</code> parameter from your "partner-string" under "Partner-List-Embed" in your <a href="https://scnx.app/glink?page=bot/configuration?file=partner-list%7Cconfig">module configuration</a>, if this is annoying you.
</details>

## Stored data {#data-usage}

The following data is being stored about every partner created via [commands](#commands):

* An unique integer identifying the database entry
* The Invite-Link specified for this partner
* The User-ID of the staff-member creating the partner entry
* The specified name of the partner
* The specified category of the partner
* Metadata about the entry (date when created and last updated)

To delete stored data, use [`/partner delete`](#commands)
or [purge the module database](/docs/custom-bot/additional-features#reset-module-database).