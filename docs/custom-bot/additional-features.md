# Additional Custom-Bot features

## Reset module configuration {#reset-configuration}

:::warning
Resetting the configuration of a module to its default values, will permanently delete all customizations and changes
you made to the module configuration.
:::

You can reset the configuration of a module to its default value if you want to start from scratch.

To reset your Module-Configuration, follow these instructions:

1. Open the [configuration panel](https://scnx.app/glink?page=bot/configuration) of your bot.
2. Locate the module in question and click on "Advanced options".
3. Click on "Purge module configuration".
4. Confirm your request.
5. Restart your bot to apply changes.

![](@site/docs/assets/custom-bot/additional-features/reset-configuration.png)

## Purge Module-Database {#reset-module-database}

:::warning
Purging the module database can not be undone and the data will be gone forever.
:::

Purging the database of a module will automatically delete all data stored by the module.

Please note that this will not drop the database, instead only remove database entries - this means that things like IDs
might not reset.

To reset your Module-Database, follow these instructions:

1. Open the [configuration panel](https://scnx.app/glink?page=bot/configuration) of your bot.
2. Locate the module in question and click on "Advanced options".
3. Click on "Purge module database".
4. Confirm your request.
5. Restart your bot to apply changes.

![](@site/docs/assets/custom-bot/additional-features/purge-database.png)