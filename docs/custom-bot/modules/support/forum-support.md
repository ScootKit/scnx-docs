# Forum Support

Process support requests in public forums - send a message when a new thread gets created and add a button to close the thread.

<ModuleOverview moduleName="forum-support" />

## Features {#features}

* Automatically send a customizable welcome message when a new thread is created in a configured forum channel.
* Add a "Mark as solved" button to threads, allowing the original poster or staff to close the thread.
* Optionally lock threads when they are closed to prevent further messages.
* Add configurable tags (e.g., "Solved") to threads when they are closed.
* Support for priority roles - send an additional message (e.g., pinging staff) when a user with a priority role creates a thread.
* Add a configurable tag to priority threads for easy identification.
* Configure multiple forum channels, each with independent settings.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=forum-support) on your server.
2. Open the [Forum Channels configuration](https://scnx.app/glink?page=bot/configuration?file=forum-support%7Cchannels) and create a new configuration element.
3. Set the "Forum Channel" to the forum channel you want to use for support.
4. Customize the "Post Creation message" that will be sent when a new thread is created.
5. Optionally enable and configure the close button, thread locking, solved tags, and priority roles.
6. Make sure the bot has the **View Channel**, **Send Messages in Threads**, **Manage Threads**, and **Embed Links** permissions on the forum channel. If you use the tag features, the bot also needs permission to apply tags.

## Usage {#usage}

* When a user creates a new post in a configured forum channel, the bot automatically sends the configured welcome message as the first reply.
* If the close button is enabled, the original poster and members with configured staff roles can click the button to close the thread. The thread will be archived (and optionally locked) and a closing message will be sent.
* If solved tags are configured, the bot will add the specified tag to the thread when it is closed.
* If priority roles are enabled, an additional message is sent in the thread when the thread creator has one of the configured priority roles. A priority tag can also be added automatically.

## Configuration {#configuration}

In this configuration file, you set up forum channels for support. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=forum-support%7Cchannels).

| Field | Description |
|-------|-------------|
| Forum Channel | The forum channel used for public support. |
| Post Creation message | Message sent as the first reply when a new thread is created. Supports `%userTag%`, `%userAvatar%`, and `%userMention%`. |
| Add close button? | If enabled, a button will be added to the creation message allowing the OP and staff to close the thread. |
| Close Button Content | The label text of the close button. |
| Staff-Roles | Roles that are allowed to close threads in addition to the original poster. |
| Lock thread when closing? | If enabled, the thread will be locked (preventing further messages) in addition to being archived when closed. |
| Request closed message | Message sent when a thread is closed. Supports `%threadUserTag%`, `%threadUserMention%`, `%userTag%`, and `%userMention%`. |
| Add tag when closing? | If enabled, a tag will be added to the thread when it is closed. |
| Closed Tag | The name of the tag to add when closing. The tag must already exist on your forum channel. Do not include the tag emoji. |
| Enable Priority Roles? | If enabled, an additional message is sent when a user with a priority role creates a thread. |
| Priority Roles | Roles that trigger the priority message when the thread creator has one of them. |
| Priority Message | Message sent in the thread when the creator has a priority role. You can use this to ping staff. |
| Add tag to priority tickets? | If enabled, a tag will be added to threads created by users with a priority role. |
| Priority Tag | The name of the tag to add to priority threads. The tag must already exist on your forum channel. |

## Troubleshooting {#troubleshooting}

* **The bot does not send a message in new threads**: Ensure the bot has "View Channel", "Send Messages in Threads", and "Embed Links" permissions on the forum channel. Also verify that the forum channel ID in the configuration matches the correct channel.
* **The close button does not work**: Make sure the user clicking the button is either the thread creator or has one of the configured staff roles. Check that the bot has "Manage Threads" permission.
* **Tags are not being added**: Verify that the tag name in the configuration exactly matches the tag name configured on your forum channel (without the emoji). The bot needs permission to manage tags on the forum channel.
* **Users can see each other's threads**: This is a Discord limitation with forum channels. If you need private support, consider using the Ticket module or Modmail instead.
