# KI auf SCNX

:::info Datenschutzhinweis

- SCNX wird OpenAI deine Guild-ID zur Verfügung stellen.
- Weitere Metadaten über deine Gilde (wie der Name) und Daten (wie Nachrichteninhalt, Autorenname) über gesendete Nachrichten
  in ausgewählten Kanälen werden geteilt.

:::

:::warning Haftungsausschluss

- KI-Modelle sind dafür bekannt, dass sie gelegentlich falsche Informationen generieren, schädliche Anweisungen oder voreingenommene Inhalte produzieren
  und nur über begrenztes Wissen über Weltereignisse nach 2021 verfügen.
- Aktiviere KI-Inhalte auf deinem Server nur, wenn du in der Lage bist, sowohl die Eingabe als auch die Ausgabe deines Bots aktiv zu moderieren.
- Wir sind nicht verantwortlich für Schäden, die aus deiner Nutzung von KI-Funktionen resultieren.
- Du nutzt diese Funktionen auf eigenes Risiko.
- Stelle sicher, dass du deine Nutzer über diese Gefahren von KI-generierten Inhalten informierst.

:::

## Über Preise und AI Coins

Jeder Server auf SCNX hat sogenannte "AI Coins". Diese können von verschiedenen Modulen genutzt werden. Die Nutzung kann zwischen den Modulen variieren,
überprüfe die Preise für die Module unten. Jeder Server erhält am 25. jedes Monats die folgende Menge an AI Coins,
basierend auf seinem Plan:

| Plan                  | Menge an gewährten AI Coins |
| :-------------------- | :-------------------------- |
| Starter               | 25                          |
| Active Guild (Legacy) | 100                         |
| PRO (Legacy)          | 250                         |
| Unlimited             | 300                         |
| Professional          | 600                         |

:::note
AI Coins werden einmal im Monat vergeben und nur, wenn die kostenlosen Coins des Vormonats vollständig verbraucht wurden, andernfalls werden die AI Coins
aufgestockt, um die in den Plänen enthaltenen AI Coins zu erreichen. Server mit einem Testplan erhalten nur die Menge an AI
Coins, die im Starter-Plan enthalten ist. Bitte beachte, dass sich die in den Plänen enthaltene Menge an AI Coins jederzeit ändern kann.
:::

### Wie man weitere AI Coins auflädt

:::info
AI Coins sind an Gilden gebunden und können von jedem aktivierten Modul verwendet werden. Bitte beachte, dass die Preise zwischen den Modulen
variieren können. Wir können deine AI Coins auf Anfrage möglicherweise auf einen anderen Server verschieben. Kontaktiere unseren Rechnungs-Support.
:::

Besuche die [Preisseite](https://scnx.app/glink?page=pricing) deiner Gilde, suche den Abschnitt "AI Coins" und wähle "
Aufladen" (Top-Up). Du kannst SCNX Credits verwenden, um die AI Coins aufzuladen. Eine Umrechnungstabelle findest du unten:

| AI Coins | Preis (für EU-Kunden) |
| :------- | :-------------------- |
| 2.000    | 3,99 €                |
| 5.000    | 8,99 €                |
| 10.000   | 15,99 €               |
| 50.000   | 69,69 €               |

_Bitte beachte, dass wir diese Preise jederzeit ändern können._

---

## AI-Chat-Channel

### Wie man es benutzt

Aktiviere zuerst [das Modul](https://scnx.app/glink?page=bot%2Fmodules%3Ftag%3Dai) in deinem Dashboard. Wähle dann einen Kanal in der Konfiguration aus. In diesem Kanal wird dein Bot
auf Benutzernachrichten antworten, indem er mit KI-generierten Inhalten basierend auf ChatGPT antwortet. Wir empfehlen, einen 30-sekündigen
Slow-Mode in diesem Kanal zu aktivieren, um zu vermeiden, dass du all deine AI Coins in Sekunden verlierst.

### Konfigurationsoptionen

- **Persönlichkeit (Personality):** Abhängig von dieser Einstellung wird sich der AI-Chat-Bot unterschiedlich verhalten. Die
  folgenden integrierten Persönlichkeiten sind verfügbar:
  - **Hilfreicher Chat-Bot (Standard):** Die Standardpersönlichkeit - entwickelt, um Benutzern zu helfen und Anfragen zu beantworten. Empfohlen
    und die beste Option für die meisten Server.
  - **Witziger Freund:** Eine lockerere, unbeschwertere Persönlichkeit.
  - **Unfreundlicher Kaffee Mitarbeiter:** Diese Persönlichkeit wird mit deinen Benutzern Rollenspiele als unhöflicher Kaffeehaus-Mitarbeiter durchführen.

  Die früheren Persönlichkeiten "Troll" und "Verschwörungstheoretiker / Lügner" wurden entfernt, um den Regeln des EU AI Act
  zu manipulativen und täuschenden KI-Systemen zu entsprechen. Jeder Server, der eine davon ausgewählt hatte, fällt automatisch
  auf die Standardpersönlichkeit zurück.

- **Antwortlänge (Response Length):** Steuert, wie lang die Antworten der KI sein werden.
- **Auslösemodus (Trigger Mode):** Bestimmt, welche Nachrichten eine KI-Antwort auslösen. 'Alle Nachrichten' (All messages) repliziert das Standardverhalten.
  Andere Modi beschränken Antworten auf spezifische Auslöser.
- **Auslöseschlüsselwort (Trigger Keyword):** Wenn festgelegt und der Auslösemodus 'Schlüsselwort' (keyword) enthält, antwortet die KI nur, wenn eine Nachricht mit
  diesem Wort oder dieser Phrase beginnt (z. B. 'Hey Bot').
- **Verlauf zurücksetzen (Resetting History):** Bitte tippe nach der Konfiguration `=== RESET ===` in den KI-Kanal, um den Konversationsverlauf zurückzusetzen.

### Benutzerdefinierter System-Prompt & Automatische Überprüfung

Wenn festgelegt, ersetzt dieser Text die Persönlichkeitseinstellung als System-Prompt der KI. Maximal 1000 Zeichen - längerer Text wird
automatisch abgeschnitten. Eine Sicherheitsklausel wird immer angehängt und kann nicht entfernt werden. Du bist voll verantwortlich für das
Verhalten der KI, wenn du einen benutzerdefinierten Prompt verwendest.

Zum Schutz aller und zur Erfüllung unserer rechtlichen Pflichten wird jeder benutzerdefinierte System-Prompt automatisch
überprüft, bevor er aktiv wird. Der Rest dieses Abschnitts erklärt genau, was wir prüfen, was bei einer Ablehnung
passiert und wie du Einspruch einlegen kannst.

#### Was wir überprüfen

- Wir überprüfen ausschließlich den benutzerdefinierten System-Prompt, den du festlegst. Das geschieht automatisch bei
  jedem Start oder Neustart deines Bots.
- Wir überprüfen niemals die Unterhaltungen in deinem Kanal und niemals das, was deine Mitglieder schreiben. Die
  Überprüfung betrifft nur die Anweisungen, die du dem Bot gibst.

#### Wie die Überprüfung funktioniert

Die Überprüfung ist vollständig automatisch. Ein KI-Prüfer gleicht den Prompt mit den Kategorien für die zulässige
Nutzung in Abschnitt 8 unserer [Nutzungsbedingungen](https://scootk.it/scnx-tos) ab.

#### Was zur Ablehnung eines Prompts führt

Ein Prompt wird abgelehnt, wenn er eines der folgenden Dinge tut:

- **Sexualisierung von Minderjährigen:** sexuelle Inhalte mit Personen unter 18 Jahren.
- **Wahrscheinlich nach deutschem Recht rechtswidrige Inhalte:** Inhalte, die wahrscheinlich nach deutschem Recht rechtswidrig sind.
- **Gezielte Belästigung oder Hassrede:** Angriffe auf Personen oder Gruppen aufgrund ihrer Identität.
- **Sammeln personenbezogener Daten:** den Bot anweisen, persönliche Informationen über Nutzer zu sammeln.
- **Täuschende Identitätsvortäuschung oder Betrug:** sich als jemand anderes ausgeben oder den Bot zur Täuschung oder zum
  Betrug einsetzen.
- **Verstoß gegen Discords Regeln:** Verhalten anweisen, das gegen Discords
  [Nutzungsbedingungen](https://discord.com/terms) verstößt.

#### Verwarnungen und was passiert

Jeder abgelehnte Prompt zählt als eine Verwarnung. Verwarnungen werden über ein fortlaufendes 90-Tage-Fenster gezählt.

- **Erste Verwarnung:** nur dieser Prompt wird blockiert. Alles andere funktioniert weiter. Lege einen neuen Prompt fest,
  der die Überprüfung besteht, und nach dem nächsten Neustart deines Bots wird der KI-Chat-Kanal automatisch wieder
  aktiviert.
- **Sperrung des Moduls:** eine zweite Verwarnung innerhalb des 90-Tage-Fensters oder eine Ablehnung in einer Kategorie
  mit hohem Schweregrad (Sexualisierung von Minderjährigen oder wahrscheinlich nach deutschem Recht rechtswidrige Inhalte) sperrt das gesamte
  KI-Chat-Modul.

Ein gesperrtes Modul kann nicht durch Bearbeiten des Prompts entsperrt werden. Es kann nur durch einen Einspruch oder
eine Entscheidung unseres Teams wieder freigegeben werden.

:::note Nur der betroffene Kanal wird deaktiviert
Ein benutzerdefinierter Prompt, der die Überprüfung nicht besteht, deaktiviert nur den spezifischen KI-Chat-Kanal, zu dem
er gehört - der Rest des Moduls und alle anderen KI-Chat-Kanäle funktionieren weiter. Dieser Kanal erholt sich automatisch,
sobald du einen Prompt festlegst, der die Überprüfung besteht; für eine erste Verwarnung musst du kein Support-Ticket eröffnen.
:::

Verwarnungen fallen automatisch aus dem 90-Tage-Fenster heraus, eine Modulsperre läuft jedoch nie von selbst ab - sie endet nur durch einen erfolgreichen Einspruch oder eine Entscheidung unseres Teams.

#### Begründung und Einspruch

:::info Begründung
Jede Ablehnung sendet eine E-Mail an den Server-Inhaber. Gemäß dem EU Digital Services Act (Artikel 17) enthält diese
E-Mail eine Begründung und eine Anleitung zum Einlegen eines Einspruchs. Dein aktueller Stand - deine Verwarnungen und ob
das Modul gesperrt ist - wird außerdem auf der Seite des Moduls in deinem Dashboard angezeigt.
:::

Um Einspruch einzulegen, eröffne ein [Support-Ticket](https://scnx.app/de/user/support/new?topic=cmnewauac001v13dsssxa8rlh).
Ein Mitglied unseres Teams prüft jeden Einspruch. Für vollständige Details zu dieser Richtlinie überprüfe bitte unsere
[Nutzungsbedingungen](https://scootk.it/scnx-tos).

### Preise & Häufige Fehler

Dieses Modul belastet die AI Coins deines Servers.

| Aktion                                                      | Preis     |
| :---------------------------------------------------------- | :-------- |
| Nachricht in einem der ausgewählten AI-Chat-Kanäle gesendet | 1 AI Coin |

_Dir werden keine Nachrichten berechnet, bei denen die KI-Antwortgenerierung fehlgeschlagen ist._

| Fehler                         | Ursache                                                                             | Was du tun kannst                                                                                       |
| :----------------------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| This server is out of AI Coins | Dein Server hat nicht mehr genug AI Coins, um die angeforderten Aktionen abzudecken | Versuche, AI Coins auf der [Preisseite](https://scnx.app/glink?page=pricing) deines Servers aufzuladen. |
| Error generating response      | OpenAI hat einen ungültigen Status                                                  |
