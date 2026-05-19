# Applications

Let users apply for staff positions, partnerships, and more - with customizable questions and approval or denial workflow.

<ModuleOverview moduleName="applications" />

## Features {#features}

- Create multiple application categories, each with its own set of questions, notification channel, and roles.
- Users start the application process via the `/apply` command or through a drop-down menu in a configured info channel.
- Questions are sent to the applicant via DM, and answers are collected sequentially.
- Staff members can approve or deny applications directly from the notification channel using buttons.
- Approved users can automatically receive configured roles.
- Optionally require specific roles to apply or to process applications.
- Configurable cooldown between applications to prevent spam.
- Optionally display truncated application content directly in the Discord notification message.
- Customizable messages for every stage of the process (questions, submission confirmation, approval, denial).

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=applications) on your server.
2. Open the [Application-Categories configuration](https://scnx.app/glink?page=bot/configuration?file=applications%7Ccategories) and create at least one application category. Set the category name, notification channel, questions, and any roles to assign on approval.
3. Open the [Configuration](https://scnx.app/glink?page=bot/configuration?file=applications%7Cconfig) to customize messages, cooldown settings, and optionally set up an info channel with a drop-down menu for easy access.
4. If you want to use the info channel feature, set the "Application Info Channel" to a text channel. The bot will send a message with a drop-down menu that allows users to select a category and apply.
5. Make sure the bot has the **View Channel** and **Send Messages** permissions in the notification channels. For role assignment on approval, the bot needs **Manage Roles** with its highest role above the roles it needs to assign.

## Usage {#usage}

- Users can apply using `/apply` and selecting a category, or by using the drop-down menu in the info channel (if configured).
- The bot sends the first question to the user via DM. The user responds with a message, and the bot sends the next question. This continues until all questions are answered.
- Users can cancel their application at any time by sending `!cancel` during the DM process.
- Once all questions are answered, the application is submitted. The applicant receives a confirmation message with a link to their submitted answers, and a notification is sent to the configured notification channel.
- In the notification channel, staff members can view the application and click "Approve" or "Deny" buttons. They can optionally provide a reason.
- The applicant is notified via DM about the approval or denial, including the reason if one was provided.
- If roles are configured for the category, approved applicants automatically receive those roles.
- Users cannot submit a new application while they have a pending one. If a cooldown is configured, users must also wait the specified duration between submissions.

## Commands {#commands}

<SlashCommandExplanation />

| Command                      | Description                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| `/apply category:<Category>` | Start an application in the specified category. The category field supports autocomplete. |

## Configuration {#configuration}

### Application-Categories {#configuration-categories}

In this configuration file, you set up application categories with their questions and settings. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=applications%7Ccategories).

| Field                                | Description                                                                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Application Category Name            | The name of the application category, displayed to users. Should be unique and not changed after applications have been received.     |
| Notification Channel                 | Channel where submitted applications are sent for staff review. Staff can approve or deny applications here.                          |
| Questions                            | The questions users will be asked, in order. Users answer each question via DM with up to 4000 characters (2000 for non-Nitro users). |
| Roles                                | Roles that will be granted to users whose application is approved.                                                                    |
| Require role to process application? | If enabled, only users with specific roles can approve or deny applications in this category.                                         |
| Roles that can process applications  | Only users with one of these roles can approve or deny applications (only applies if the above option is enabled).                    |
| Require role to apply?               | If enabled, users need one of the configured roles to apply in this category.                                                         |
| Require role to apply                | Only users with one of these roles can apply in this category (only applies if the above option is enabled).                          |
| "Missing required role" error        | Message shown to users who try to apply but do not have the required roles.                                                           |
| Emoji                                | Emoji for this category, used in the info message drop-down if enabled.                                                               |
| Category description                 | Description for this category, used in the info message drop-down if enabled.                                                         |

### Configuration {#configuration-config}

In this configuration file, you can customize messages and settings. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=applications%7Cconfig).

| Field                                             | Description                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Question-Message                                  | The message sent to users containing the question they need to answer. Supports `%question%`, `%applicationName%`, `%currentQuestionNumber%`, and `%amountOfTotalQuestions%`.                                                                                                                                                                                 |
| Submitted-Message                                 | The confirmation message sent to users after they submit their application. Supports `%applicationName%` and `%applicationContentURL%`.                                                                                                                                                                                                                       |
| Notification-Message                              | The message sent to the notification channel when an application is received. Supports `%applicationName%`, `%userTag%`, `%userID%`, and `%applicationContentURL%`. Both the legacy embed format and the [V4 message editor](/docs/scnx/guilds/message-editor#v4) are supported.                                                                              |
| Require Team- Approve / Deny reason               | If enabled, staff members must provide a reason when approving or denying an application.                                                                                                                                                                                                                                                                     |
| Display truncated application content in Discord? | If enabled, a preview of the application content is appended to the notification message. With the legacy embed-based notification it is added as an extra embed; with a [V4 notification](/docs/scnx/guilds/message-editor#v4) it is appended as a Container with one Text Display per question (up to 10 questions). Long answers are truncated either way. |
| Approved-Message                                  | Message sent to the user when their application is approved. Supports `%applicationName%` and `%reason%`.                                                                                                                                                                                                                                                     |
| Denied-Message                                    | Message sent to the user when their application is denied. Supports `%applicationName%` and `%reason%`.                                                                                                                                                                                                                                                       |
| Enable cooldown between applications?             | If enabled, users must wait a specified duration between submitting applications.                                                                                                                                                                                                                                                                             |
| Cooldown duration                                 | The amount of time users must wait between applications (e.g., "14d" for 14 days).                                                                                                                                                                                                                                                                            |
| Cooldown message                                  | Message shown to users who try to apply while still in cooldown. Supports `%timeRelative%` and `%timeAbsolute%`.                                                                                                                                                                                                                                              |
| Application Info Channel                          | Channel where a message with a drop-down menu will be sent, allowing users to apply by selecting a category.                                                                                                                                                                                                                                                  |
| Info message                                      | The message sent in the info channel, above the category drop-down menu.                                                                                                                                                                                                                                                                                      |

## Troubleshooting {#troubleshooting}

- **Users cannot apply**: Make sure the user has DMs enabled, as the application process takes place in DMs. Also verify that the user does not have a pending application and is not in cooldown.
- **The bot says the user has an open application**: A previous application may still be in the "submitted" state. Process it (approve or deny) before the user can submit a new one.
- **Approval/denial buttons do not work**: If "Require role to process application" is enabled, make sure the staff member has one of the configured roles. Otherwise, any user with access to the notification channel can process applications.
- **Roles are not assigned on approval**: Ensure the bot has the "Manage Roles" permission and that the bot's highest role is above the roles it needs to assign.
- **The info channel message is not showing**: Make sure you set the "Application Info Channel" in the configuration and that the bot has permissions to send messages and embeds in that channel. Reload the bot configuration after making changes.

## Stored data {#data-usage}

The following data is being stored about every application:

- The user ID of the applicant
- The state of the application (submitted, approved, denied)
- The category name
- The user ID of the staff member who processed the application
- The submission message ID and channel ID
- The answers to all questions
- Metadata about the entry (date when created and last updated)

Additionally, info message references (channel ID and message ID) are stored to manage the drop-down menu messages.

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
