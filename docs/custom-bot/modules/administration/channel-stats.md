# Channel-Stats

Create channels containing stats about your server - updated automatically.

<ModuleOverview moduleName="channel-stats" />

## Features {#features}

Create Voice-Channels and categories on your server that automatically display up-to-date stats - like the number of members on your
Discord with a specific role.

Here's an example showing how three different Voice-Channels show some stats about a server:

![](@site/docs/assets/custom-bot/modules/channel-stats/example.png)

## Setup {#setup}

1. Create a channel that you want to use for statistics (we recommend using a category or voice channel).
2. Make sure your bot has "View channel" and "Manage channel" permissions on the category or channel.
3. Open the [Channel-Stats configuration](https://scnx.app/glink?page=bot/configuration?file=channel-stats%7Cchannels).
4. Click on "Add new Statistic-Channel" and configure it as described [here](#configuration).
5. Reload your bot's configuration to apply the changes.
6. The channel will be edited automatically to the values configured.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required - the
configured channels will get updated automatically in the specified interval.

## Configuration {#configuration}

This configuration file allows specifying which channels should function as a statistics channel and configuring their
displayed values. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=channel-stats%7Cchannels).

| Field           | Description                                                                                                                                                            |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channel         | This is the channel that should get used as a statistics channel. It's name will be updated automatically to the "Channel-Name" value.                                 |
| Channel-Name    | This will be the name the channel gets updated to automatically. <br/><i>Please review available parameters in your dashboard.</i>                                     | 
| Update-Interval | This is the interval in minutes in which your bot will update name of the channel. Due to technical limitations on Discord's side, this needs to be higher than seven. |

## Troubleshooting {#troubleshooting}

<details>
<summary>I tried editing the name of my category or channel, but the bot changes it back</summary>
    If you want to edit the name of the category or channel, you need to update the "Channel-Name"-field of the channel in your <a href="https://scnx.app/glink?page=bot/configuration?file=channel-stats%7Cchannel">module configuration</a>.
</details>

<details>
    <summary>My category or channel name is not being updated</summary>
    <ul>
        <li>Make sure you have waited for the configured Update-Interval, as the channel name will only be updated if the interval has past.</li>
        <li>It might take more than the configured interval for the channel to be updated due to Discord's rate-limiting. Please wait up to three hours.</li>
        <li>Make sure you have entered the correct parameter word-for-word (case-sensitive!). Invalid parameters won't be replaced.</li>
        <li>Please make sure that your bot has the "Manage channel" and the "View channel" permission on the configured channel.</li>
        <li>Refresh your client if a change isn't visible.</li>
    </ul>
    The name of the channel won't be updated if the new name matches the old name.
</details>
