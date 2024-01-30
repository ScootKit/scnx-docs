# Gewinnspiele

Erstelle einfach Gewinnspiele auf deinem Server.

<ModuleOverview moduleName="giveaways" />

## Funktionen {#features}

* Veranstalte Gewinnspiele und Verlosungen auf deinem Server.
* Lasse Mitglieder eine bestimmte Anzahl neuer Nachrichten senden, um am Gewinnspiel teilzunehmen zu können (du kannst auch Kanäle erlauben / blockieren, 
dort werden Nachrichten von Mitgliedern dann nicht gezählt).
* Lasse nur Mitglieder mit einer bestimmten Rolle teilnehmen.
* Lasse Mitglieder mit bestimmten Rollen die Voraussetzungen der Gewinnspiele überspringen.
* Gebe zusätzliche Gewinnchancen an Mitglieder mit bestimmten Rollen.

## Einrichtung {#setup}

* Bitte [stelle die Berechtigungen](./../../slash-commands) für den Befehl `/gmanage` ein, um unerlaubte Nutzung zu vermeiden.
* Stelle sicher, dass dein Bot die Berechtigungen `Kanäle ansehen`, `Kanäle verwalten`, `Links einbetten` und `Nachrichten senden` in den Kanälen, wo Gewinnspiele veranstaltet werden sollen, besitzt.
* Gewinnspiele können nicht in Ankündigungs-Kanälen gestartet werden.

## Verwendung {#usage}

Als ein Gewinnspiel-Manager kannst du:

* ein neues Gewinnspiel erstellen [`/gmanage start`](#commands).
* ein Gewinnspiel beenden [`/gmanage end`](#commands).
* einen neuen Gewinner für ein bereits beendetes Gewinnspiel auslosen [`/gmanage reroll`](#commands).

Deine Mitglieder können mit dem Befehl [`/gmessages`](#commands) ihren Fortschritt der benötigten Nachrichten für ein Gewinnspiel sehen.

Gewinnspiel-Voraussetzungen (wie Rollen oder Nachrichten) werden zum Zeitpunkt des Beitritts ausgewertet und dem Nutzer angezeigt.
Bei der Auslosung der Gewinner werden Anforderungen immer
erneut überprüft, was bedeutet, dass Nutzer, die beispielsweise ihre Rolle nach dem Beitritt am Gewinnspiel verloren haben, nicht gewinnen können.
## Befehle {#commands}

<SlashCommandExplanation />          

| Befehl                                                                                                                                                                                | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/gmessages`                                                                                                                                                                           | Mit diesem Befehl können Nutzer ihren Nachrichten-Fortschritt für die Voraussetzungen eines Gewinnspiels sehen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `/gmanage start channel:<Kanal> price:<Text> duration:<Dauer> winner-count:<Nummer> [required-messages:<Nummer>] [required-role:<Rolle>] [sponsor:<Text>] [sponsorlink:<Text>]` | Starte ein neues Gewinnspiel.<br/>Bitte stelle sicher, dass der gewählte Kanal [richtig eingestellt ist](#setup). Den Preis kannst du selbst bestimmen, stelle aber bitte sicher, dass er nicht gegen Gesetze oder Vorschriften verstößt. Als nächstes gibst du die Anzahl an zufällig ausgewählten Gewinnern an. Wir empfehlen, mehrere Gewinnspiele für mehrere Preise zu starten.<br/>Als nächstes gibst du die Dauer des Gewinnspiels ein. Nachdem dieses Datum vorüber ist, wird das Gewinnspiel automatisch beendet und ein Gewinner wird zufällig und automatisch ausgelost. Du kannst die Dauer im [Datum Format]-(./../../additional-features#durations) einstellen.<br/>Du kannst auch optionale Voraussetzung erstellen:<ul><li>Mit `required-messages` kannst du deine Mitglieder auffordern, eine bestimmte Anzahl von Nachrichten zu haben, um an dem Gewinnspiel teilzunehmen.</li><li>Fordere deine Mitglieder auf, eine Rolle zu besitzen, indem du `required-role` nutzt - Mitglieder ohne diese Rolle können nicht an dem Gewinnspiel teilnehmen.</li><li>Nutze `sponsor` und `sponsor-link` um einen (optionalen) Sponsor zu erwähnen - du kannst jederzeit in deiner <a href="#configuration">Konfiguration</a> einstellen, wie deine Gewinnspiel-Nachricht aussehen soll.</li></ul> |
| `/gmanage end msg-id:<GewinnspielNachrichtenID>`                                                                                                                                               |Beendet ein Gewinnspiel vorzeitig, die Gewinner des Gewinnspiel werden direkt nach der Ausführung des Befehls zufällig ausgewählt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `/gmanage reroll msg-id:<GewinnspielNachrichtID> [winner-count:<Nummer>]`                                                                                                                   | Wählt eine bestimmte Anzahl von Nutzern aus, die nach dem Ende des Gewinnspiels neu ausgelost werden. Bitte beachte, dass nach dem neu auslosen eines Gewinnspiels der davor gewonnene Nutzer noch einmal ausgelost werden kann.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Konfiguration {#configuration}

Dieses Modul verfügt über mehrere Konfigurationsdateien. Bitte überprüfe sie unten.
### Modul-Konfiguration {#configuration-config}

:::Achtung:
Nutzer für Einladungen zu belohnen, indem du mehrere Teilnahmen erlaubst, verstößt gegen die 
[Discord Entwickler-Nutzungsbedingungen](https://discord.com/developers/docs/policies-and-agreements/developer-policy) und
unsere [Nutzungsbedingungen](https://scootk.it/scnx-tos); Verstöße werden direkt zu unserem Team weitergeleitet und dein Server oder auch dein Account wird von SCNX gesperrt. Melde Missbrauch hier: [abuse@scnx.xyz](mailto:abuse@scnx.xyz).
:::

In dieser Konfigurationsdatei kannst du die Funktionalität von diesem Modul einstellen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=giveaways%7Cconfigs%2Fconfig).

| Feld                                                                                                                   | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gewinnspiel-Voraussetzungen-Ignorierung-Rollen                                                                         
| Nutzer mit dieser Rolle können ohne die Vorrausetzungen zu erfüllen an den Gewinnspielen auf deinem Server teilnehmen. |
| Nachrichten-Zähl-Modus                                                                                                 | Modus, in dem Nachrichten für Gewinnspiel-Anforderungen gezählt werden sollen.<br/><ul><li><code>all</code>: In diesem Modus wird jede Nachricht auf deinem Server auf die Gewinnspiel-Anforderungen angerechnet.</li><li><code>whitelist</code>: In diesem Modus werden nur Nachrichten in ausgewählten Kanälen gezählt.</li><li><code>blacklist</code>: In diesem Modus wird jede Nachricht auf deinem Server gezählt, außer du setzt diese auf die Blacklist.</li></ul> |
| Blacklist                                                                                                              | *Dieses Feld wird nur funktionieren, wenn "Nachrichten-Zähl-Modus" auf "blacklist" gesetzt wurde.*<br/>Nachrichten, die in diesen Kanälen gesendet werden, werden nicht für die Gewinnspiel-Voraussetzungen gezählt.                                                                                                                                                                                                                                                       |
| Whitelist                                                                                                              | *Dieses Feld wird nur funktionieren, wenn "Nachrichten-Zähl-Modus" auf "whitelist" gesetzt wurde.*<br/>Nur von Kanälen, die in diesem Feld eingetragen sind, werden Nachrichten für die Gewinnspiel-Voraussetzungen gezählt.                                                                                                                                                                                                                                               |
| Zusätzliche Teilnahmen                                                                                                 | Für jede hier konfigurierte Rolle (die ein Nutzer hat), werden zusätzliche Teilnahmen vergeben. Normalerweise haben Mitglieder 1 Teilnahme. Für jede konfigurierte Rolle hier erhalten diese zusätzliche Teilnahmen, abhängig von dieser Konfiguration.<br/><ul><li>Erstes Feld: Rollen ID</li><li>Anzahl von *zusätzlichen** Teilnahmen, die Mitglieder mit einer bestimmten Rolle erhalten.</li></ul>                                                                    |
| 
 PN-Nachricht an Gewinner senden                                                                                        | Falls Nutzer bei einem Gewinnspiel gewinnen, werden sie zusätzlich zu dem Ping in dem Gewinnspiel-channel eine DM erhalten.. Du kannst die Nachricht in dem [modul Nachrichten](#configuration-strings} einstellen.                                                                                                                                                                                                                                                        |

### Modul-Nachrichten {#configuration-strings}

In dieser Konfigurationsdatei kannst du einstellen, wie Nachrichten in diesem Modul aussehen sollen.
Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=giveaways%7Cconfigs%2Fstrings).

| Feld                                     | Beschreibung                                                                                                                                                                                                                                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gewinnspiel-Nachricht                         | Diese Nachricht wird gesendet, wenn ein [Gewinnspiel ohne Vorausetzungen gestartet wurde](#usage). Ein Knopf wird unter der Gewinnspiel-Nachricht angezeigt, womit Nutzer dem Gewinnspiel beitreten können.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.                                                          |
| Gewinnspiel-Nachricht mit Vorausetzungen       | Diese Nachricht wird gesendet, wenn ein [Gewinnspiel mit Vorausetzungen gestartet wurde](#usage) (wie eine benötigte Rolle oder eine bestimmte Anzahl an Nachrichten). Ein Knopf wird unter der Gewinnspiel-Nachricht angezeigt, womit Nutzer dem Gewinnspiel beitreten können<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.                             |
| Gewinnspiel-Voraussetzungen-Nicht-Erfüllt-Nachricht            | Diese Nachricht wird gesendet, wenn ein Nutzer versucht einem Gewinnspiel beizutreten, aber noch nicht die Voraussetzungen erfüllt (wie eine benötigte Rolle oder eine bestimmte Anzahl an Nachrichten), um teilzunehmen.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.
| Gewinnspiel-Nachricht nach Beendung des Gewinnspiels | Die Original-Nachricht des Gewinnspiels wird nach Ende des Gewinnspiels bearbeitet.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.   
| Gewinn-Nachricht                                | Diese Nachricht wird nach Ende des Gewinnspiels gesendet, sie enthält die Gewinner.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.
| Kein-Gewinner-Nachricht                         | Diese Nachricht wird gesendet, wenn es keine berechtigten Gewinner gibt.    
| Teilnahme-Bestätigung-Nachricht                       | Diese Nachricht wird erscheinen, wenn ein Nutzer seine Teilnahme bestätigt hat.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.                                                                                                                                               |
| Bereits teilgenommen-Nachricht                   | Diese Nachricht wird angezeigt, wenn ein Nutzer an einem Gewinnspiel teilnehmen will, aber bereits teilgenommen hat. Ein Knopf, um das Gewinnspiel zu verlassen wird angehangen.<br/>Du kannst alle verfügbaren Parameter im Dashboard finden.                                                                           |
| Knopf-Inhalt                            | Der Inhalt, den der Knopf unter der Gewinnspiel-Nachricht enthalten wird. Indem Nutzer auf den Button klicken, nehmen sie am Gewinnspiel teil.                                                                                                                                                |
| Gewinner-PN-Nachricht                        | *Dies wird nur funktionieren, wenn du "PN-Nachricht an Gewinner senden" in deiner [Modul-Konfiguration](#configuration-config) aktiviert hast.* <br/>Diese Nachricht wird dem Nutzer per DM gesendet, wenn dieser in einem Gewinnspiel gewinnt..<br/>Du kannst alle verfügbaren Parameter im Dashboard finden. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Die Gewinnspiel-Voraussetzungen werden nicht richtig berechnet</summary>
  <ul>
    <li>Stelle sicher, dass du den <a href="#configuration-config">Nachrichten-Zähl-Modus</a> richtig eingestellt hast.</li>
    <li>Wenn du "blacklist" als Nachrichten-Zähl-Modus eingestellt hast: Stelle sicher, dass der Kanal, indem du Nachrichten zählen lassen möchtest, <a href="#configuration-config">nicht blockiert</a> ist.</li>
    <li>Wenn du "whitelist" als Nachrichten-Zähl-Modus eingestellt hast: Stelle sicher, dass der Kanal, indem die Nachrichten gezählt werden sollen, <a href="#configuration-config">erlaubt</a> ist.</li>
    <li>Stelle sicher, dass der Bot in dem Kanal, indem er die Nachrichten zählen soll, die Berechtigungen <code>Kanal anzeigen</code> und <code>Nachrichtenverlauf anzeigen</code> hat.</li>
  </ul>
</details>

<details>
  <summary>Zusätzliche Teilnahmen werden falsch berechnet</summary>

  Stelle als erstes sicher, dass du <a href="#configuration-config">Zusätzliche Teilnahmen</a> richtig eingestellt hast.<br/>
  Voreingestellt ist 1 Teilnahme pro Nutzer. Für jede konfigurierte Rolle bei den <a href="#configuration-config">Zusätzlichen Teilnahmen</a> werden zusätzliche Teilnahmen hinzugefügt. Der erhaltene Wert an Teilnahmen hängt von der Konfiguration ab. Es ist momentan nicht möglich, weniger als 1 zusätzliche Teilnahme zu erlauben.  
</details>

<details>
  <summary>Wie bestimmt mein Bot den Gewinner? / Kann ich ein Zertifikat erhalten? / Kann ein Gewinnspiel manipuliert sein?</summary>

Wenn ein Gewinnspiel endet (oder eine Neuauslosung wurde angewandt wurde), wird dein bot als Erstes die Voraussetzungen
prüfen (und damit die zusätzlichen Teilnahmebedingungen neu berechnen), um sicherzustellen, dass jeder Nutzer immer noch
teilnimmt.
Jeder berechtigte Nutzer wird in eine digitale Kiste gepackt. Nutzer mit <a href="#configuration-config">Zusätzlichen Teilnahmen</a> werden in diese Kiste mehrmals gepackt, abhängig von den zusätzlichen Teilnahmen die sie durch ihre Rolle(n) erhalten.
Als nächstes zieht der Bot einen Nutzer aus der Kiste. Wenn dieser Benutzer bei dieser Ziehung bereits gewonnen hat, zieht der Bot erneut, bis die Anzahl der Gewinner korrekt ist.<br/><br/>
Da Serveradministratoren Gewinnchancen, Anforderungen und mehr manipulieren können, sind wir nicht in der Lage, ein Zertifikat oder eine ähnliche Dokumentation zu erstellen. Der Organisator des Gewinnspiels ist verpflichtet, die örtlichen Gesetze und Vorschriften einzuhalten, einschließlich unserer eigenen <a href="https://scootk.it/scnx-tos">Nutzungsbedingungen</a>. Wenn du der Meinung bist, dass ein 
Server unseren Service in einer nicht konformen Weise nutzt, melde es bitte an<a href="mailto:abuse@scnx.xyz">abuse@scnx.xyz</a> und wir werden entsprechende Maßnahmen ergreifen.
</details>

## Gespeicherte Daten {#data-usage}

Für jedes Gewinnspiel werden die folgenen Daten gespeichert:

* Eine eindeutige Zahl, die die Teilnahmen identifiziert
* Die ID der Gewinnspiel-Nachricht
* Die ID des Kanals, in dem das Gewinnspiel gestartet wurde, abhängig von dem [`channel`](#commands) Befehl-Parameter
* Die Zeit, wann das Gewinnspiel enden wird  / geendet hat, abhängig von dem [`zeit`](#commands) Befehl-Parameter
* Ob das Gewinnspiel schon geendet hat
* Den Preis des Gewinnspiels, abhängig von dem [`Preis`](#commands) Befehl-Parameter
* Die Voraussetzungen des Gewinnspiels (wie Rollen oder die Anzahl von Nachrichten, falls angeschaltet), basierend auf
  deinen [Befehl-Parametern](#commands)
* Wenn das Teilnehmen bei dem Gewinnspiel eine bestimmte Anzahl an Nachrichten voraussetzt:
  * Die Anzahl von Nachrichten von allen Nutzern nach dem Start des Gewinnspiels
* Daten über jede berechtigte Teilnahme an dem Gewinnspiel: 
  * ID von den Nutzern, die an dem Gewinnspiel teilgenommen haben
  * Die Anzahl von Teilnahmen die Nutzer insgesamt teilgenommen haben, abhängig von deiner [Konfiguration](#configuration)
  * Ob der Nutzer teilgenommen hat, indem er die Vorrausetzungen übersprungen hat, abhängig von deiner [Konfiguration](#configuration)
* Die ID des Sponsors vom Gewinnspiel (falls nicht der Ersteller des Gewinnspiels) 
* Der Sponsor-Link, abhängig von deiner konfigurierten [`sponsor-url`](#commands) 
* Die Anzahl von Gewinnern, abhängig von dem [`winner-count`](#commands) Befehl-Parameter
* Metadaten über die Teilnahme (Datum der Erstellung und letzten Aktualisierung)

Es gibt keine Möglichkeit, ein Gewinnspiel aus der Datenbank zu entfernen (du kannst die Gewinnspiel-Nachricht trotzdem jederzeit löschen). Um alle Gewinnspiele zu löschen, [lösche die Modul-Datenbank](./../../additional-features#reset-module-database).