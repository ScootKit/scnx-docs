# Additional Custom-Bot features

## Supported color values {#embed-colors}

:::tip
This is only relevant if you are editing the color of an embed not supporting our Message-Editor. In the message editor,
you can either enter a HEX-Color or use the built-in Color-Picker to select the desired color.
:::

You can use one of these options:

* [HEX-Color-Value](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet), please also include the "#" before the
  HEX-Value itself. These can be obtained via
  * a [Color-Picker](https://www.w3schools.com/colors/colors_picker.asp)
  * a [color pallet generator](https://coolors.co/)
  * the [Flat UI](https://materialui.co/flatuicolors/) color collection
  * the [Material UI](https://materialui.co/colors) color collection
* One of the following color values (uppercase):
  [`DEFAULT`](https://coolors.co/0), [`WHITE`](https://coolors.co/ffffff), [`AQUA`](https://coolors.co/1abc9c), [`GREEN`](https://coolors.co/57f287), [`BLUE`](https://coolors.co/3498db), [`YELLOW`](https://coolors.co/fee75c), [`PURPLE`](https://coolors.co/9b59b6), [`LUMINOUS_VIVID_PINK`](https://coolors.co/e91e63), [`FUCHSIA`](https://coolors.co/eb459e), [`GOLD`](https://coolors.co/f1c40f), [`ORANGE`](https://coolors.co/e67e22), [`RED`](https://coolors.co/ed4245), [`GREY`](https://coolors.co/95a5a6), [`NAVY`](https://coolors.co/34495e), [`DARK_AQUA`](https://coolors.co/11806a), [`DARK_GREEN`](https://coolors.co/1f8b4c), [`DARK_BLUE`](https://coolors.co/206694), [`DARK_PURPLE`](https://coolors.co/71368a), [`DARK_VIVID_PINK`](https://coolors.co/ad1457), [`DARK_GOLD`](https://coolors.co/c27c0e), [`DARK_ORANGE`](https://coolors.co/a84300), [`DARK_RED`](https://coolors.co/992d22), [`DARK_GREY`](https://coolors.co/979c9f), [`DARKER_GREY`](https://coolors.co/7f8c8d), [`LIGHT_GREY`](https://coolors.co/bcc0c0), [`DARK_NAVY`](https://coolors.co/2c3e50), [`BLURPLE`](https://coolors.co/5865f2), [`GREYPLE`](https://coolors.co/99aab5), [`DARK_BUT_NOT_BLACK`](https://coolors.co/2c2f33), [`NOT_QUITE_BLACK`](https://coolors.co/23272a)

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