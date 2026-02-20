# KI auf SCNX

:::info Datenschutzhinweis

* SCNX wird OpenAI deine Guild-ID zur Verfügung stellen.
* Weitere Metadaten über deine Gilde (wie der Name) und Daten (wie Nachrichteninhalt, Autorenname) über gesendete Nachrichten
  in ausgewählten Kanälen werden geteilt.

:::

:::warning Haftungsausschluss

* KI-Modelle sind dafür bekannt, dass sie gelegentlich falsche Informationen generieren, schädliche Anweisungen oder voreingenommene Inhalte produzieren
  und nur über begrenztes Wissen über Weltereignisse nach 2021 verfügen.
* Aktiviere KI-Inhalte auf deinem Server nur, wenn du in der Lage bist, sowohl die Eingabe als auch die Ausgabe deines Bots aktiv zu moderieren.
* Wir sind nicht verantwortlich für Schäden, die aus deiner Nutzung von KI-Funktionen resultieren.
* Du nutzt diese Funktionen auf eigenes Risiko.
* Stelle sicher, dass du deine Nutzer über diese Gefahren von KI-generierten Inhalten informierst.

:::

## Über Preise und AI Coins

Jeder Server auf SCNX hat sogenannte "AI Coins". Diese können von verschiedenen Modulen genutzt werden. Die Nutzung kann zwischen den Modulen variieren,
überprüfe die Preise für die Module unten. Jeder Server erhält am 25. jedes Monats die folgende Menge an AI Coins,
basierend auf seinem Plan:

| Plan                  | Menge an gewährten AI Coins |
|:----------------------|:---------------------------|
| Starter               | 25                         |
| Active Guild (Legacy) | 100                        |
| PRO (Legacy)          | 250                        |
| Unlimited             | 300                        |
| Professional          | 600                        |

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
|:---------|:-------------------------|
| 2.000    | 3,99 €                   |
| 5.000    | 8,99 €                   |
| 10.000   | 15,99 €                  |
| 50.000   | 69,69 €                  |

*Bitte beachte, dass wir diese Preise jederzeit ändern können.*

---

## AI-Chat-Channel

### Wie man es benutzt

Aktiviere zuerst [das Modul](https://scnx.app/glink?page=bot%2Fmodules%3Ftag%3Dai) in deinem Dashboard. Wähle dann einen Kanal in der Konfiguration aus. In diesem Kanal wird dein Bot
auf Benutzernachrichten antworten, indem er mit KI-generierten Inhalten basierend auf ChatGPT antwortet. Wir empfehlen, einen 30-sekündigen
Slow-Mode in diesem Kanal zu aktivieren, um zu vermeiden, dass du all deine AI Coins in Sekunden verlierst.

:::warning BEVOR DU DICH ENTSCHEIDEST, DIE PERSÖNLICHKEIT DEINES KI-CHATS ZU ÄNDERN
Persönlichkeiten wie "troll" sind dafür bekannt, Benutzer zu beleidigen, zu manipulieren (gaslight) und sogar zu bedrohen. Wir empfehlen dringend, die "
default" (Standard) Persönlichkeit zu verwenden. Du nutzt diese Funktion auf eigenes Risiko.
:::

### Konfigurationsoptionen

* **Persönlichkeit (Personality):** Abhängig von dieser Einstellung wird sich der AI-Chat-Bot unterschiedlich verhalten.
    * **default:** Die Standardpersönlichkeit - entwickelt, um Benutzern zu helfen und Anfragen zu beantworten. Empfohlen und die beste Option
      für die meisten Server.
    * **troll:** Diese Persönlichkeit wird Benutzer beleidigen und im Grunde alles tun, um sie zum Lachen zu bringen. VERWENDE
      DIESE PERSÖNLICHKEIT NICHT OHNE AKTIVE MODERATOREN, DIE DIE ANTWORTEN DES MODELLS MODERIEREN.
    * **liar:** Verschwörungstheoretiker und notorischer Lügner. Wir empfehlen aktive Moderatoren, die die Antworten überwachen.
    * **rude starbucks employee:** Diese Persönlichkeit wird mit deinen Benutzern Rollenspiele als unhöflicher Starbucks-Mitarbeiter durchführen.
* **Antwortlänge (Response Length):** Steuert, wie lang die Antworten der KI sein werden.
* **Auslösemodus (Trigger Mode):** Bestimmt, welche Nachrichten eine KI-Antwort auslösen. 'Alle Nachrichten' (All messages) repliziert das Standardverhalten.
  Andere Modi beschränken Antworten auf spezifische Auslöser.
* **Auslöseschlüsselwort (Trigger Keyword):** Wenn festgelegt und der Auslösemodus 'Schlüsselwort' (keyword) enthält, antwortet die KI nur, wenn eine Nachricht mit
  diesem Wort oder dieser Phrase beginnt (z. B. 'Hey Bot').
* **Verlauf zurücksetzen (Resetting History):** Bitte tippe nach der Konfiguration `=== RESET ===` in den KI-Kanal, um den Konversationsverlauf zurückzusetzen.

### Benutzerdefinierter System-Prompt & Strenge Moderation

Wenn festgelegt, ersetzt dieser Text die Persönlichkeitseinstellung als System-Prompt der KI. Maximal 1000 Zeichen — längerer Text wird
automatisch abgeschnitten. Eine Sicherheitsklausel wird immer angehängt und kann nicht entfernt werden. Du bist voll verantwortlich für das
Verhalten der KI, wenn du einen benutzerdefinierten Prompt verwendest.

:::danger Automatisches Prompt-Scannen & Strenge Moderation
Alle benutzerdefinierten System-Prompts durchlaufen ein strenges automatisches Scannen, bevor sie gespeichert werden. **Wenn dein Prompt gegen unsere Sicherheitsrichtlinien
oder die Nutzungsbedingungen von Discord verstößt, wird dein KI-Modul sofort dauerhaft deaktiviert.**

**Einspruch gegen eine Deaktivierung:**
Um gegen eine Moduldeaktivierung Einspruch einzulegen, musst du eine E-Mail an **legal@scootkit.com** mit der genauen Betreffzeile senden:
`AI Prompt [GuildID]`. Unser Team wird deinen Einspruch innerhalb von 2-3 Werktagen bearbeiten.

Für vollständige Details zu dieser Richtlinie und unserer rechtlichen Begründung, überprüfe bitte
unsere [Nutzungsbedingungen](https://scootk.it/scnx-tos).
:::

### Preise & Häufige Fehler

Dieses Modul belastet die AI Coins deines Servers.

| Aktion                                            | Preis     |
|:--------------------------------------------------|:----------|
| Nachricht in einem der ausgewählten AI-Chat-Kanäle gesendet | 1 AI Coin |

*Dir werden keine Nachrichten berechnet, bei denen die KI-Antwortgenerierung fehlgeschlagen ist.*

| Fehler                         | Ursache                                                                       | Was du tun kannst                                                                                  |
|:-------------------------------|:------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------|
| This server is out of AI Coins | Dein Server hat nicht mehr genug AI Coins, um die angeforderten Aktionen abzudecken | Versuche, AI Coins auf der [Preisseite](https://scnx.app/glink?page=pricing) deines Servers aufzuladen. |
| Error generating response      | OpenAI hat einen ungültigen Status