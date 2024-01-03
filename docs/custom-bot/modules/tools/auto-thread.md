# Automatic Thread-Creation

Automatically creates a thread under each message that gets posted in a selected channel

<ModuleOverview moduleName="auto-thread" />

## Features {#features}

* Automatically create a thread below message sent in configured channels.
* Customize the name of the thread and its default archive duration.

## Setup {#setup}

1. Make sure that your bot has "Create public thread" and "Send messages" permission on the channel you want to use for
   this feature.
2. [Configure](#configuration) in which channels thread should get created automatically.
3. Reload your configuration to apply changes.

## Usage {#usage}

After [setting up](#setup) the module, the bot will automatically create a thread below every message sent in the
configured channels - no additional action is required.

## Configuration {#configuration}

In this configuration file you can configure in which channels the module should automatically create threads in.
Open [this file in your Dashboard](https://scnx.app/glink?page=bot/configuration?file=auto-thread|config).

| Field                   | Description                                                                                                                                                                                                  |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channels                | If a message is being sent into a channel configured here, the bot will create a thread below this message automatically.                                                                                    |
| Thread Name             | This will be the name of the thread provided.                                                                                                                                                                |
| Thread archive duration | New threads will be given this archive duration. The value is in minutes and you can select one of the available options. The max option will automatically set the highest value available for your server. |

## Troubleshooting {#troubleshooting}

If the bot isn't creating threads automatically, please make sure that

* the channel you are sending messages in is added to the [configuration](#configuration).
* the [configured](#configuration) thread name is less than 100 characters long.
* the bot has "Create public thread" and "Send messages" permissions on the channel.
* no thread was previously created below the message.