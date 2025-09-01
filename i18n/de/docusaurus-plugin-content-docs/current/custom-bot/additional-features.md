# Erweiterte Custom-Bot Funktionen

## Unsterstützte Farbwerte {#embed-colors}

:::tip
Das ist nur relavant, wenn du ein Embed bearbeiten möchtest, welches unseren Nachrichten-Editor nicht unterstützt. Im Nachrichten-Editor kannst du entweder eienn HEX-Farbe eingeben oder den integrierten Farb-Picker verwenden, um die entsprechende Farbe auszuwählen.
:::

Du kannst eine der folgenden Optionen verwenden:

* [HEX-Farbwert](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet), bitte füge außerdem das "#" vor dem HEX-Wert hinzu. Diese kannst du erhalten über:
  * einen [Farb-Picker](https://www.w3schools.com/colors/colors_picker.asp)
  * einen [Farbpaletten-Generator](https://coolors.co/)
  * die [Flat UI](https://materialui.co/flatuicolors/) Farb-Kollektion
  * die [Material UI](https://materialui.co/colors) Farb-Kollektion
* einen der folgenden Farbwerte (GROßBUCHSTABEN):
  [`DEFAULT`](https://coolors.co/0), [`WHITE`](https://coolors.co/ffffff), [`AQUA`](https://coolors.co/1abc9c), [`GREEN`](https://coolors.co/57f287), [`BLUE`](https://coolors.co/3498db), [`YELLOW`](https://coolors.co/fee75c), [`PURPLE`](https://coolors.co/9b59b6), [`LUMINOUS_VIVID_PINK`](https://coolors.co/e91e63), [`FUCHSIA`](https://coolors.co/eb459e), [`GOLD`](https://coolors.co/f1c40f), [`ORANGE`](https://coolors.co/e67e22), [`RED`](https://coolors.co/ed4245), [`GREY`](https://coolors.co/95a5a6), [`NAVY`](https://coolors.co/34495e), [`DARK_AQUA`](https://coolors.co/11806a), [`DARK_GREEN`](https://coolors.co/1f8b4c), [`DARK_BLUE`](https://coolors.co/206694), [`DARK_PURPLE`](https://coolors.co/71368a), [`DARK_VIVID_PINK`](https://coolors.co/ad1457), [`DARK_GOLD`](https://coolors.co/c27c0e), [`DARK_ORANGE`](https://coolors.co/a84300), [`DARK_RED`](https://coolors.co/992d22), [`DARK_GREY`](https://coolors.co/979c9f), [`DARKER_GREY`](https://coolors.co/7f8c8d), [`LIGHT_GREY`](https://coolors.co/bcc0c0), [`DARK_NAVY`](https://coolors.co/2c3e50), [`BLURPLE`](https://coolors.co/5865f2), [`GREYPLE`](https://coolors.co/99aab5), [`DARK_BUT_NOT_BLACK`](https://coolors.co/2c2f33), [`NOT_QUITE_BLACK`](https://coolors.co/23272a)

## Modul-Konfiguration zurücksetzen {#reset-configuration}

:::warning
Das Zurücksetzen der Konfiguration eines Moduls auf die Standardwerte löscht dauerhaft alle Anpassungen und Änderungen,
die du an der Modul-Konfiguration vorgenommen hast.
:::

Du kannst die Konfiguration eines Moduls auf die Standardwerte zurücksetzen, wenn du von vorne beginnen möchtest.

So setzt du deine Modul-Konfiguration zurück:

1. Öffne die [Konfigurations-Seite](https://scnx.app/de/glink?page=bot/configuration) deines Bots.
2. Suche das entsprechende Modul und klicke auf „Erweiterte Optionen“.
3. Klicke auf „Modul-Konfiguration löschen“.
4. Bestätige die Aktion.
5. Starte deinen Bot neu, um die Änderungen zu übernehmen.

![](@site/docs/assets/custom-bot/additional-features/reset-configuration.png)

## Modul-Datenbank löschen {#reset-module-database}

:::warning
Das Löschen der Modul-Datenbank kann nicht rückgängig gemacht werden – die Daten werden endgültig gelöscht.
:::

Das Löschen der Datenbank eines Moduls löscht automatisch alle vom Modul gespeicherten Daten.

Beachte: Die Datenbank selbst wird nicht entfernt, sondern nur die Einträge gelöscht – das bedeutet, dass beispielsweise IDs
nicht zurückgesetzt werden.

So löschst du die Modul-Datenbank:

1. Öffne die [Konfigurations-Seite](https://scnx.app/de/glink?page=bot/configuration) deines Bots.
2. Suche das entsprechende Modul und klicke auf „Erweiterte Optionen“.
3. Klicke auf „Modul-Datenbank löschen“.
4. Bestätige die Aktion.
5. Starte deinen Bot neu, um die Änderungen zu übernehmen.

![](@site/docs/assets/custom-bot/additional-features/purge-database.png)

## Zeitangaben eingeben {#durations}

Um Zeitangaben im Eigenen Bot einzugeben, verwende Texte mit folgenden Einheiten:

* Sekunden (`s` oder `sec`)
* Minuten (`m` oder `min`)
* Stunden (`h` oder `hr`)
* Tage (`d`)
* Wochen (`w` oder `wk`)

Hier einige Beispiele:

* Ein Tag und zwei Stunden: `1d 2h`
* Drei Wochen, zwei Tage und dreißig Minuten: `3w 2d 30m`
* Sieben Tage, neun Stunden: `7d 9h` oder `1w 9h`

Du kannst diese Einheiten beliebig kombinieren – achte aber darauf, zwischen den Einheiten ein Leerzeichen zu lassen.
