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
| `/gmanage end msg-id:<GiveawayMessageID>`                                                                                                                                               |Beendet ein Gewinnspiel vorzeitig, die Gewinner des Gewinnspiel werden direkt nach der Ausführung des Commands zufällig ausgewählt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `/gmanage reroll msg-id:<GiveawayMessageID> [winner-count:<Number>]`                                                                                                                   | Wählt eine bestimmte Anzahl von Nutzern aus, die nach dem Ende des Gewinnspiels neu ausgelost werden. Bitte beachte dass nach dem neuauslosen eines Gewinnspiels der davor gewonnene Nutzer nocheinemal ausgelost werden kann.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Konfiguration {#configuration}

Dieses Modul verfügt über mehrere Konfigurationsdateien. Bitte überprüfe sie unten.
### Modul Konfiguration {#configuration-config}

:::Achtung
Nutzer für Invites zu Belohnen indem du mehrere Teilnahmen erlaubst verstößt gegen die
[Discord's Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) und
unsere [Nutzungsbedingungen](https://scootk.it/scnx-tos); Verstöße werden direkt zu unserem Team weitergeleitet und dein Server oder auch dein Account wird von SCNX gesperrt. Melde Missbrauch hier: [abuse@scnx.xyz](mailto:abuse@scnx.xyz).
:::

In dieser Konfigurations Datei kannst du die Funktionalität von diesem Modul einstellen. Öffne es i deinem [dashboard](https://scnx.app/glink?page=bot/configuration?file=giveaways%7Cconfigs%2Fconfig).

| Field                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gewinnspiel Rollen ohne Vorraussetzungen | Nutzer mit dieser Rolle können ohne die Vorrausetzungen zu erfüllen an den Gewinnspielen auf deinem Server teilnehmen.                                                                                                                                                                                                                                                                                                                                                                                                              |
| Nachrichten-zähl Modus                | Modus, in dem Nachrichten für Gewinnspiel-Anforderungen gezählt werden sollen.<br/><ul><li><code>all</code>: In diesem Modus wird jede Nachricht auf deinem Server auf die Gewinnspiel-Anforderungen angerechnet.</li><li><code>whitelist</code>: In diesem Modus werden nur Nachrichten in bestimmten Kanälen gezählt ( the "Whitelist" field) will be counted towards requirements.</li><li><code>blacklist</code>: In diesem Modus wird jede Nachricht auf deinem Server gezählt, außer du setzt diese auf die Blacklist.</li></ul> |
| Blacklist                         | *Dieses Feld wird nur funktionieren, wenn "Message Count Mode" auf "blacklist" gesetzt wurde.*<br/>Nachrichten, die in diesen Kanälen gesendet werden, werden nicht für die Gewinnspiel-vorrausetzung gezählt.                                                                                                                                                                                                                                                                                                                                                  |
| Whitelist                         | *Dieses Feld wird nur funktionieren, wenn "Message Count Mode" auf "whitelist" gesetzt wurde.*<br/>Nachrichten, die in diesen Kanälen gesendet werden, werden ausschließlich für die Gewinnspiel-vorrausetzung gezählt.                                                                                                                                                                                                                                                                                                                                                 |
| Mehrere Teilnahmen                  | Für jede konfigurierte Rolle hier (die ein Nutzer hat) wird zusätzliche Teilnahmen erhalten. Normalerweise haben Mitglieder 1 Teilnahme. Für jede konfigurierte Rolle hier erhalten diese zusätzliche Teilnahmen, they can recive additional entries, abhängig von dieser Konfiguration.<br/><ul><li>Erstes Feld: Rollen ID</li><li>Anzahl von *zusätzlichen** Teilnahmen, die Mitglieder mit einer bestimmten Rolle erhalten.</li></ul>                                                                                                                                                                      |
| Sende eine DM an den/ die Gewinner         | Falls Nutzer bei einem Gewinnspiel gewinnen, werden sie zusätzlich zu dem Ping in dem Gewinnspiel-channel eine DM erhalten.. Du kannst die Nachricht in dem [modul Nachrichten](#configuration-strings} einstellen.                                                                                                                                                                                                                                                                                                                                        |

### Modul Nachrichten {#configuration-strings}

In dieser Konfigurations-datei kannst du einstellen, wie Nachrichten in diesem Modul aussehen sollen.
Öffne dies in deinem [dashboard](https://scnx.app/glink?page=bot/configuration?file=giveaways%7Cconfigs%2Fstrings).

| Feld                                     | Beschreibung                                                                                                                                                                                                                                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gewinnspiel-nachricht                         | Diese Nachricht wird gesendet, wenn ein [Gewinnspiel ohne Vorrausetzungen gestartet wurde](#usage). Ein Knopf wird unter der Gewinnspiel-nachricht angezeigt, womit Nutzer dem Gewinnspiel beitreten können.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.                                                          |
| Gewinnspiel-nachricht mit Vorrausetzungen       | Diese Nachricht wird gesendet, wenn ein [Gewinnspiel mit Vorrausetzungen gestartet wurde](#usage) (wie eine benötigte Rolle oder eine bestimmmte Anzahl an Nachrichten). Ein Knopf wird unter der Gewinnspiel-nachricht angezeigt, womit Nutzer dem Gewinnspiel beitreten können<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.                             |
| Vorrausetzungen nicht erfüllt            | Diese Nachricht wird gesendet, wenn ein Nutzer versucht einem Gewinnspiel beizutreten, aber noch nicht die Vorrausetzungen erfüllt (wie eine benötigte Rolle oder eine bestimmmte Anzahl an Nachrichten) um teilzunehmen.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.
| Gewinnspiel-nachricht nach Ende des Gewinnspiels | Die Original-nachricht des Gewinnspiels wird nach Ende des Gewinnspiels bearbeitet.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.   
| Gewinner-nachricht                                | Diese Nachricht wird nach Ende des Gewinnspiels gesendet, es enthält die Anzahl an Gewinnern.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.
| Keine Gewinner-nachricht                         | Diese Nachricht wird gesendet, wenn es keine berechtigten Gewinner gibt.    
| Bestätigungs-nachricht                       | Diese Nachricht wird erscheinen, wenn ein Nutzer seine Teilnahme bestätigt hat.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.                                                                                                                                               |
| Bereits teilgenommen-nachricht                   | Diese Nachricht wird angezeigt, wenn ein Nutzer an einem Gewinnspiel teilnehmen will, aber bereits teilgenommen hat. Ein Knopf, um das Gewinnspiel zu verlassen wird abgehängt.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.                                                                           |
| Knopf inhalt                            | Der Inhalt, den die Knöpfe unter der Gewinnspiel Nachricht enthalten wird. Indem Nutzer auf den Button klickt, nimmt er an dem Gewinnspiel teil.                                                                                                                                                |
| Gewinner DM-nachricht                        | *Dies wird nur funktionieren, wenn du "Send DM-Message to winner" in deiner [modul Konfiguration](#configuration-config) aktiviert hast.* <br/>Diese Nachricht wird dem Nutzer per DM gesendet, wenn dieser in einem Gewinnspiel gewinnt..<br/>Du kannst alle verfügbaren Parameter im Dashboard finden. |

## Problemlösungen {#troubleshooting}

<details>
  <summary>Die Gewinnspiel-vorrausetzungen werden nicht richtig berechnet</summary>
  <ul>
    <li>Stelle sicher dass du den <a href="#configuration-config">Zähl Modus</a> richtig eingestellt hast.</li>
    <li>Wenn du "blacklist" als zähl modus eingestellt hast: Stelle sicher, dass der Kanal, in dem du Nachrichten zählen lassen möchtest <a href="#configuration-config">blacklisted</a> ist.</li>
    <li>Wenn du "whitelist" als Zähl modus eingestellt hast: Make sure the channel you want stelle sicher, dass der channel,in dem die Nachrichten gezählt werden sollen auf der <a href="#configuration-config">whitelist</a> ist.</li>
    <li>Stelle sicher, dass der bot in dem Kanal, wo der Bot die Nachrichten zählen soll die Berechtigungen <code>Read messages</code> and <code>View message history</code> hat.</li>
  </ul>
</details>

<details>
  <summary>Zusätzliche Teilnahmen werden falsch berechnet (/ entries are calculated wrongly)</summary>

  Als erstes stelle   <a href="#configuration-config">additional entries</a> correctly.<br/>
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
