# Count-Game

Allow your users to count together.

<ModuleOverview moduleName="counter" />

## Features {#features}

* Designate one or more channels as counting channels where users count together.
* Configurable success reactions and optional number easter eggs on special numbers.
* Support for math expressions (e.g., `2+3` for 5) and text alongside numbers.
* Milestones that reward users with roles or messages after counting a certain number of times.
* Protection against message deletion to prevent cheating.
* Configurable strike system that restricts users who repeatedly send wrong messages.
* Optional game restart when a user miscounts.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=counter&ref=scnx-app-docs).
2. Open the [configuration](#configuration) and set up at least one counting channel.
3. The bot needs the "Manage Messages", "Add Reactions", and "Manage Channels" permissions in the counting channels.

## Usage {#usage}

Users send numbers in the configured counting channels. The first number is `1`, and each subsequent message must be the next number in sequence. The bot reacts with a success emoji when a user counts correctly and shows an error if the input is invalid.

* Users take turns counting (by default, the same user cannot count two numbers in a row).
* If math mode is enabled, users can send math expressions that evaluate to the correct next number.
* When a user reaches a configured milestone, they receive the configured roles and/or a congratulatory message.
* If a user sends too many wrong messages, the bot can restrict their access to the counting channel.

## Configuration {#configuration}

### Configuration {#config-main}

In this configuration file, you can configure the counting game. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=counter%7Cconfig).

| Field | Description |
|-------|-------------|
| Channels | Channels in which users can participate in the counting game. |
| Channel-Description | Text that is set as the channel topic after someone counts. Use `%x%` for the next number. Leave blank to disable. |
| Success-Reaction | The emoji the bot reacts with when a user counts correctly. |
| Restart game, if user miscounts | If enabled, the game restarts from 1 when a user sends the wrong number. |
| Message when game gets restarted | The message sent when the game restarts due to a miscount. |
| Only one continuous message per user | If enabled, users must alternate and cannot count two numbers in a row. |
| Protect against users deleting the last counting message? | If enabled, the bot sends a message when the last counting message is deleted, preventing confusion. |
| Deletion protection message | The message sent when the last correct counting message gets deleted. |
| Remove reactions after 5 seconds? | If enabled, the bot's reactions are removed after 5 seconds to keep the channel clean. |
| Message on wrong input | The message sent when a user provides invalid input. |
| Amount of wrong messages to trigger action | The number of wrong messages a user must send before being restricted. Set to 0 to disable. |
| Give role on action, instead of removing permission | If enabled, a role is given to the user instead of removing their send-message permission. |
| Role given when amount is being reached | The role given to restricted users (only applies if the above option is enabled). |
| Message when user gets actioned | The message sent when a user gets restricted. |
| Allow text characters in messages? | If enabled, users can include additional text alongside the number in their messages. |
| Allow users to use maths in their messages? | If enabled, users can submit math expressions that evaluate to the correct next number. |
| Enable number easter eggs? | If enabled, the bot reacts with special emojis on certain numbers (e.g., 42, 69, 100, 420). |

### Milestones {#config-milestones}

In this configuration file, you can set up milestones to reward users. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=counter%7Cmilestones).

| Field | Description |
|-------|-------------|
| Message count | The number of valid counting messages a user must send to reach this milestone. |
| Roles | Roles given to the user when they reach this milestone (optional). |
| Message | A congratulatory message sent when the user reaches this milestone. |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The bot is not reacting in the counting channel</summary>
    <ul>
        <li>Make sure the channel is added to the "Channels" list in the configuration.</li>
        <li>Make sure the bot has the "Add Reactions" permission in the channel.</li>
    </ul>
</details>
<details>
    <summary>Math expressions are not working</summary>
    <ul>
        <li>Make sure the "Allow users to use maths in their messages?" option is enabled in the configuration.</li>
    </ul>
</details>
<details>
    <summary>Users are not receiving milestone roles</summary>
    <ul>
        <li>Make sure the bot's role is higher than the roles it needs to assign in the server role hierarchy.</li>
        <li>Verify that the milestone is correctly configured with the right message count.</li>
    </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every counting channel:

* The channel ID
* The current number in the counting game
* The ID of the user who last counted
* A count of valid messages per user in this channel
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
