---
sidebar_position: 3
title: Opening hours
description: Create and manage opening hours, including holidays.
---

# Opening Hours

## Features {#features}

* Enable opening hours to inform your members about longer waiting times outside your opening hours.
* Set your own opening hours for each day — multiple time ranges per weekday are also possible.
* Automatically pause ticket handling on public holidays for your configured country/region, or add your own holidays.

<h4>Images coming soon ✨</h4>

## Setup {#setup}

* Visit the [Opening hours](https://scnx.app/glink?page=support-system/bot-configuration?show=opening-hours) section in your dashboard.
* [Configure](#configuration) the available options.

## Configuration {#configuration}

| Field | Description |
| --- | --- |
| Enable opening hours? | Enables or disables the feature for your Support-Bot. |
| Completely disable message processing outside opening hours? | *Only available for the Modmail system.*<br/>If enabled, user messages to the Support-Bot are ignored outside the configured opening hours. |
| Message outside opening hours | This message is sent to the user when they message the Support-Bot outside your opening hours. |
| Opening hours on Monday | These opening hours apply to Monday. The time range must be provided in 24-hour format `HH:MM-HH:MM` (for example `18:00-21:00`). |
| Opening hours on Tuesday | These opening hours apply to Tuesday. The time range must be provided in 24-hour format `HH:MM-HH:MM` (for example `18:00-21:00`). |
| Opening hours on Wednesday | These opening hours apply to Wednesday. The time range must be provided in 24-hour format `HH:MM-HH:MM` (for example `18:00-21:00`). |
| Opening hours on Thursday | These opening hours apply to Thursday. The time range must be provided in 24-hour format `HH:MM-HH:MM` (for example `18:00-21:00`). |
| Opening hours on Friday | These opening hours apply to Friday. The time range must be provided in 24-hour format `HH:MM-HH:MM` (for example `18:00-21:00`). |
| Opening hours on Saturday | These opening hours apply to Saturday. The time range must be provided in 24-hour format `HH:MM-HH:MM` (for example `18:00-21:00`). |
| Opening hours on Sunday | These opening hours apply to Sunday. The time range must be provided in 24-hour format `HH:MM-HH:MM` (for example `18:00-21:00`). |
| Fully close on holidays? | If enabled, tickets created on holidays are treated as closed (your bot sends the configured message to the user, but the ticket is not closed immediately). |
| Country for holidays | *Only available if “Fully close on holidays?” is enabled.*<br/>This country is used for holiday detection. Data is provided by [OpenHolidays](https://www.openholidaysapi.org/en/). |
| Local region/state | *Only available if “Fully close on holidays?” is enabled.*<br/>This region/state is used for holiday detection (if supported). Data is provided by [OpenHolidays](https://www.openholidaysapi.org/en/). |
| Custom holidays | These dates are treated as holidays (in addition to local holidays). The date must be provided in `DD/MM` format (for example `03/12`). |