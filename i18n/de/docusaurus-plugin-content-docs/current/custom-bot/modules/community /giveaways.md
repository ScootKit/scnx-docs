# Gewinnspiele

Gewinnspiele einfach in deinem Server erstellen.

<ModuleOverview moduleName="giveaways" />

## Features {#features}

* Veranstalte Gewinnspiele und Verlosungen auf deinem Server.
* Fordere Mitglieder auf, eine bestimmte Anzahl neuer Nachrichten zu senden, um an einer Verlosung teilzunehmen (Du kannst auch Kanäle  White-/Blacklisten,
  dort werden Nachrichten von Mitgliedern nicht gezählt).
* Fordere deine Mitglieder auf, eine bestimmte Rolle zu besitzen, bevor sie teilnehmen können.
* Lasse Mitglieder die Vorraussetzungen der Gewinnnspiele auslassen.
* Gebe zusätzliche Gewinnchancen zu Mitgliedern mit bestimmten Rollen.

## Setup {#setup}

* Bitte [stelle die Berechtigungen ein](./../../slash-commands) für den Command `/gmanage` um unerlaubte Nutzung zu vermeiden.
* Stelle sicher, dasss dein Bot die Berechtigungen `View channels`, `Manage messages`, `Embed links` und `Send messages` in den Channeln, wo dein Gewinnspiel veranstalten werden soll, hat.
* Gewinnspiele können nicht in Ankündigungs Kanälen gestartet werden.

## Verwendung {#usage}

Als ein Gewinnspiel-manager kannst du:

* ein neues Gewinnspiel erstellen [`/gmanage start`](#commands).
* ein Gewinnspiel beenden [`/gmanage end`](#commands).
* einen neuen Gewinner für ein bereits beendetes Gewinnspiel auslosen [`/gmanage reroll`](#commands).

Deine Mitglieder können mit dem Command [`/gmessages`](#commands) ihren Fortschritt der benötigten Nachrichten für ein Giveaway sehen.

Gewinnspiel-voraussetzungen (wie Rollen oder Nachrichten) werden zum Zeitpunkt des Beitritts ausgewertet und dem Nutzer angezeigt
. Bei der Auslosung der Gewinner werden  Anforderungen immer
erneut bewertet, was bedeutet, dass Benutzer, die beispielsweise ihre Rolle nach der Teilnahme am Gewinnspiel verloren haben, nicht gewinnen können.
## Commands {#commands}

<SlashCommandExplanation />          

| Command                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/gmessages`                                                                                                                                                                           | Mit diesem Command können Nutzer deren Fortschritt für die Vorraussetzungen eines Gewinnspiels sehen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `/gmange start channel:<Channel> price:<Text> duration:<TimeDuration> winner-count:<Number> [required-messages:<Number>] [required-role:<Role>] [sponsor:<Text>] [sponsorlink:<Text>]` | Starte ein neues Gewinnspiel.<br/>Bitte stelle sicher dass der gewählte Channel [richtig eingestellt ist](#setup). Den Preis kannst du selbst bestimmen, aber bitte stelle sicher dass es nicht gegen Gesetzen oder Vorschriften verstößt. Als nächstes gibst du die Anzahl an zufällig ausgewählten Gewinnern ein. Wir empfehlen, mehrere Gewinnspiele für mehrere Preise zu starten.<br/>Als nächstes gibst du die Dauer des Gewinnspiels ein. Nachdem dieses Datum vorrüber ist, wird das Gewinnspiel automatisch beendet und ein Gewinner wird zufällig und automatisch ausgelost. Du kannst die Dauer im [Datum Format]-(./../../additional-features#durations) einstellen.<br/>Du kannst auch optionale Voraussetzung erstellen:<ul><li>Mit `required-messages` kannst du deine Mitglieder auffordern, eine bestimmmte Anzahl von Nachrichten zu haben, um an dem Gewinnspiel teilzunehmen.</li><li>Fordere deine MItglieder auf, eine Rolle zu besitzen, idem du `required-role` nutzt - Mitglieder ohne diese Rolle können nicht an dem Gewinnspiel teilnehmen.</li><li>NUtze `sponsor` und `sponsor-link` um einen (optionalen) Sponsor zu erwähnen - du kannst jederzeit in deiner <a href="#configuration">Konfiguration</a> einstellen, wie deine Gewinnspiel-nachricht aussehen soll.</li></ul> |
| `/gmanage end msg-id:<GiveawayMessageID>`                                                                                                                                              | Ends a currently active giveaway early, drawing the winners after execution of the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `/gmanage reroll msg-id:<GiveawayMessageID> [winner-count:<Number>]`                                                                                                                   | Selects a specified amount of new winners for giveaway that has already ended. Please note that users that have already won in the original drawing (or in another execution of this command) can be selected randomly again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Configuration {#configuration}

This module has multiple configuration files. Please review them below.

### Module configuration {#configuration-config}

:::caution
Rewarding users for invites using multiple entries to giveaways is in violation of
[Discord's Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) and
our [Terms of Service](https://scootk.it/scnx-tos); violations will lead to your server (and your account) being banned
from SCNX. Report abuse to [abuse@scnx.xyz](mailto:abuse@scnx.xyz).
:::

In this configuration file, you can configure
the functionality of this module. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=giveaways%7Cconfigs%2Fconfig).

| Field                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Giveaway Requirement Bypass Roles | Users with these roles will be able to bypass requirements for giveaways and join any giveaway on your server.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Message Count Mode                | Mode in which messages for giveaway requirement should get counted.<br/><ul><li><code>all</code>: In this mode, every message on your server will be counted toward giveaway requirements.</li><li><code>whitelist</code>: In this mode, only messages sent in configured channels (in the "Whitelist" field) will be counted towards requirements.</li><li><code>blacklist</code>: In this mode, messages will be counted in every channel on your server, unless the channel is configured in the blacklist configuration field.</li></ul> |
| Blacklist                         | *This field will only work if "Message Count Mode" was set to "blacklist".*<br/>Messages sent in one of these channels won't be counted towards the message count requirement of a giveaway.                                                                                                                                                                                                                                                                                                                                                 |
| Whitelist                         | *This field will only work if "Message Count Mode" was set to "whitelist".*<br/>Only messages sent in these channels will be counted towards the message count requirements of a giveaway.                                                                                                                                                                                                                                                                                                                                                   |
| Multiple entries                  | For every role configured here (that a user has) they will receive additional entries. By default, every user has one entry. For every one of their roles configured here, they can recive additional entries, depending on this configuration.<br/><ul><li>First field: Role ID</li><li>Amount of *additional** entries members with this role will receive.</li></ul>                                                                                                                                                                      |
| Send DM-Message to winner         | If enabled, winners will receive a DM in addition to a ping in the giveaway channel when they win. You can configure the message in the [module messages](#configuration-strings} configuration file.                                                                                                                                                                                                                                                                                                                                        |

### Module messages {#configuration-strings}

In this configuration file, you can configure how messages from this module should appear.
Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=giveaways%7Cconfigs%2Fstrings).

| Field                                     | Description                                                                                                                                                                                                                                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Giveaway-Message                          | This message will be sent, when a new [giveaway is started](#usage) without any requirements. A button to join the giveaway will be added below the giveaway message.<br/>You can find all available parameters in your dashboard.                                                          |
| Giveaway-Message with requirements        | This message will be sent, when a new [giveaway is started](#usage) with requirements (such as required roles or required messsage count). A button to join the giveaway will be added below the giveaway message.<br/>You can find all available parameters in your dashboard.             |
| Requirement not passed message            | This message will be sent to a user that tries joining a giveaway but does not meet the requirements (such as required roles or required messsage count) to join.<br/>You can find all available parameters in your dashboard.                                                              |
| Giveaway-Message after the giveaway ended | The original giveaway message will be edited to this one when the giveaway has ended.<br/>You can find all available parameters in your dashboard.                                                                                                                                          |
| Win message                               | This message will be sent when a giveaway ends and will include the winners of the giveaway.<br/>You can find all available parameters in your dashboard.                                                                                                                                   |
| No winners message                        | This message will be sent when a giveaway ends, but there aren't any eligible winners.                                                                                                                                                                                                      |
| Confirmation message                      | This message will to an user when they join a giveaway and confirms their entry.<br/>You can find all available parameters in your dashboard.                                                                                                                                               |
| Already entered message                   | This message will to an user when a user tries joining a giveaway, but they already entered before. A button to leave the giveaway will be attached.<br/>You can find all available parameters in your dashboard.                                                                           |
| Button content                            | This is the content of the button displayed below giveaway messages. Clicking on this button allows users to join the giveaway.                                                                                                                                                             |
| Winner DM Message                         | *This will only work, if you have enabled the "Send DM-Message to winner" configuration option in the [module configuration](#configuration-config) configuration file.* <br/>This message will be sent to the winners via DM.<br/>You can find all available parameters in your dashboard. |

## Troubleshooting {#troubleshooting}

<details>
  <summary>The messages for entry requirements are not being calculated correctly</summary>
  <ul>
    <li>Make sure that you have configured the <a href="#configuration-config">counting mode</a> correctly.</li>
    <li>If you set "blacklist" as the counting mode: Make sure the channel you want messages to be counted in isn't <a href="#configuration-config">blacklisted</a>.</li>
    <li>If you set "whitelist" as the counting mode: Make sure the channel you want messages to be counted in is configured in the <a href="#configuration-config">whitelist</a>.</li>
    <li>Make sure the bot has <code>Read messages</code> and <code>View message history</code> permissions on the channel you want messages to be counted in.</li>
  </ul>
</details>

<details>
  <summary>Additional entries are not working correctly (/ entries are calculated wrongly)</summary>

  First, Make sure that you have configured <a href="#configuration-config">additional entries</a> correctly.<br/>
  Every user starts with one entry by default. For every role configured in the <a href="#configuration-config">additional entries</a> field they will receive additional entries. The amount received depends on your configuration. It's currently not possible to grant less than one additional entry to users.  
</details>

<details>
  <summary>How does SCNX determine who wins? / Can I get a certificate of Authenticity? / Can giveaways be rigged?</summary>

  When a giveaway ends (or a reroll is triggered) your bot will first evaluate the requirements (and with that recalculate their entries), ensuring that every user still meets.
  Every eligible user will then be added into a digital equivalent of a box. Users with <a href="#configuration-config">multiple entries</a> will be added to this box multiple times, depending on the amount of their entries.
  Next, we will draw a user from the box. If this user already won in this drawing, we'll redraw until the amount of winners is correct.<br/><br/>
  As server admins can manipulate winning changes, requirements and more, we're unable to generate a certificate of Authenticity or similar documentation. The giveaway organizer is required to comply with local laws and regulation, including our own <a href="https://scootk.it/scnx-tos">Terms of Service</a>. If you 
  think that a specific server is using our offering in a way that is not compliant, please report it to <a href="mailto:abuse@scnx.xyz">abuse@scnx.xyz</a> and we will take appropriate action.
</details>

## Stored data {#data-usage}

For every giveaway the following data will be saved:

* An unique integer identifying the database entry
* The ID of the giveaway message
* The ID of the channel the giveaway has been started in, based on the [`channel`](#commands) command parameter
* The exact time the giveaway will end / has ended, based on the [`duration`](#commands) command parameter
* Whether the giveaway has ended yet
* The price of the giveaway, based on the [`price`](#commands) command parameter
* The requirements of the giveaway (like which roles and how many messages are required, if enabled), based on
  your [command parameters](#commands)
* If the giveaway requires new messages for entry:
  * The amount of messages sent by every user after the giveaway has started
* Data about every valid entry to the giveaway:
  * ID of the user who entered the giveaway
  * The amount of entries they entered the giveaway with, based on your [configuration](#configuration)
  * Whether they entered the giveaway using the requirement skip [configuration option](#configuration)
* The User ID of the sponsor (if not specified the creator) of the giveaway
* The provided link to the sponsor's website, based on the [`sponsor-url`](#commands) command parameter
* The amount of winners, based on the [`winner-count`](#commands) command parameter
* Metadata about the entry (date when created and last updated)

There is no way to remove a giveaway from the database (you can always delete the giveaway-message regardless). To
remove all giveaways, [purge the module database](./../../additional-features#reset-module-database).
