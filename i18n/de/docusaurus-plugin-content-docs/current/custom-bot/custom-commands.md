# Eigene Befehle

Erstelle deine Eigenen Befehle, Knopf-Interaktionen, Dialog und nachrichtenbasierten Automatisierungen – alles über das SCNX-Dashboard, ganz ohne Programmieren.

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: true}} additionalDetails={{
    STARTER: "Maximal 10 aktive Eigene Befehle gleichzeitig.",
    UNLIMITED: "Unbegrenzte Eigene Befehle.",
    PROFESSIONAL: "Unbegrenzte Eigene Befehle."}} />

## Übersicht {#overview}

Mit Eigenen Befehlen kannst du deine eigenen Bot-Interaktionen über einen visuellen Prozess-Editor erstellen. Jeder benutzerdefinierte Befehl besteht aus:

* Einem **Auslöser (Trigger)** — der Auslöser, der den Befehl startet (ein Slash-Befehl, ein Knopf-Klick, eine Nachricht, das Absenden eines Dialogs oder die manuelle Ausführung durch einen anderen Befehl).
* Einem oder mehreren **Aktions-Blöcken** — Gruppen von Aktionen, die ausgeführt werden, sobald der Trigger ausgelöst wird.
* **Aktionen** — die einzelnen Aktionen, die der Bot ausführt (antworten, eine Nachricht senden, Rollen verwalten, einen Dialog anzeigen und mehr).
* Optionale **Befehl-Rechte** — lege fest, welche Rollen ein Nutzer haben muss, um diesen Befehl auslösen zu können.

## Einrichtung {#setup}

1. Öffne die [Eigene Befehle Seite](https://scnx.app/de/glink?page=bot/custom-commands) auf deinem SCNX-Dashboard.
2. Stelle sicher, dass dein Bot online ist und läuft.
3. Klicke auf „Neuen Eigenen Befehl erstellen“, um zu beginnen.

## Trigger {#triggers}

Jeder benutzerdefinierte Befehl benötigt einen Trigger (Auslöser), der festlegt, wann er ausgeführt wird. Die folgenden Trigger-Typen stehen zur Verfügung:

### Befehl {#trigger-command}

Der Befehl wird ausgeführt, sobald ein Nutzer einen Befehl verwendet, zum Beispiel `/mycommand`.

* **Slash-Befehl** — Der Name, der in Discord angezeigt wird. Muss in Kleinschreibung verfasst sein und darf keine Sonderzeichen enthalten (außer `-`).
* **Beschreibung des Slash-Befehls** — Wird unter dem Befehlsnamen im Discord-Befehlsmenü angezeigt.
* **Slash-Command-Option hinzufügen** — Füge bis zu 25 Parameter hinzu, die Nutzer beim Ausführen des Befehls ausfüllen können. Unterstützte Typen: Text Eingabe, Ganze Zahl, Richtig / Falsch, Benutzer, Kanal, Rolle, Nummer und Anhang.
* Für Text-Optionen kannst du optional `die Werte begrenzen`, indem du eine vordefinierte Liste von bis zu 25 Auswahlmöglichkeiten erstellst.

:::warning
Beachte das Discord-Limit: Insgesamt sind nur 100 Slash-Commands pro Server möglich. Dies umfasst sowohl deine Eigenen Befehle als auch die Befehle aktivierter Module.
Falls diese Grenze überschritten wird, kann die Funktionalität deines Bots beeinträchtigt werden.
:::

:::info
Berechtigungen für Slash-Befehle werden in deinen Discord-Servereinstellungen verwaltet (Servereinstellungen → Integrationen → Bots und Apps) und nicht im SCNX-Dashboard. Siehe dir dazu gerne unsere [Berechtigungen & Slash Befehle Dokumentation](/de/docs/custom-bot/slash-commands/) für weitere Informationen an. Es kann bis zu 24 Stunden dauern, bis neue Befehle in Discord angezeigt werden. Stelle sicher, dass der Befehl zuvor aktiviert wurde.
:::

### Knopf oder Select-Menü-Druck {#trigger-button}

Der Befehl wird ausgeführt, wenn ein Nutzer auf eine Schaltfläche (Button) klickt oder eine Option aus einem Auswahlmenü (Select Menu) einer Nachricht auswählt.

Um eine Nachricht mit einem Button oder einem Auswahlmenü zu senden:

1. Nutze das [Als Bot anmelden](/de/docs/custom-bot/login-as-bot/) Feature, um eine Nachricht zu senden.
2. Erstelle im Nachrichten-Editor einen **Eigenen Befehl Knopf** oder ein **Eigene Befehl Element** und verbinde dieses direkt mit deinem Eigenen Befehl.
3. Du kannst Knöpfe auch an Nachrichten anhängen, die von anderen Eigenen Befehlen oder Modul-Konfigurationen gesendet werden.

### Nachricht {#trigger-message}

Der Befehl wird ausgeführt, wenn ein Nutzer eine Nachricht sendet, die einem konfigurierten Muster entspricht. Folgende Vergleichstypen stehen zur Verfügung:

| Vergleichstyp | Beschreibung |
|---|---|
| **Nachricht beginnt mit Zeichenkette** | Die Nachricht beginnt mit dem konfigurierten Text |
| **Nachricht beinhaltet** | Die Nachricht enthält den konfigurierten Text an einer beliebigen Stelle |
| **Nachricht endet auf** | Die Nachricht endet mit dem konfigurierten Text |
| **Nachricht entspricht** | Die Nachricht entspricht exakt dem konfigurierten Text |
| **Jede gesendete Nachricht** | Wird bei jeder gesendeten Nachricht ausgelöst (mit Vorsicht zu genießen) |

Weitere Einstellungen:

* **Groß- und Kleinschreibung ignorieren?** — Wenn aktiviert, wird der Bot Groß- und Kleinschreibung bei Erkennung ignorieren.
* **Nachrichten nur in bestimmten Kanälen erkennen** — Wenn aktiviert, werden Nachrichten nur in bestimmten Kanälen erkannt.

### Dialog {#trigger-modal}

Der Befehl wird ausgeführt, wenn ein Nutzer einen Dialog (Formular/Modal) absendet. Dialoge werden über die Aktion „Dialog anzeigen“ in einem anderen Eigenen Befehl aufgerufen.

* Konfiguriere den Titel des Dialogs und die Eingabefelder (Textfelder im Kurzformat oder als Absatz).
* Die Antworten der Nutzer stehen in den Aktionen des Befehls als Parameter zur Verfügung (z. B. `%answer1%`, `%answer2%`) und so weiter.


### Keine (Manuelle Ausführung) {#trigger-none}

Der Befehl kann ausschließlich von einem anderen Eigenen Befehl über die Aktion **„Befehl ausführen“** ausgeführt werden. Das ist besonders praktisch, um wiederverwendbare Abläufe zu erstellen.

## Aktion-Block {#action-blocks}

Aktionen sind in **Aktions-Blöcke** organisiert. Wenn ein Befehl ausgelöst wird, führt er die Aktions-Blöcke in einem von zwei Modi aus:

* **Alle** — Führt alle Aktionsblöcke nacheinander aus.
* **Einen (zufälligen)** — Führe einen zufällig ausgewählten Aktion-Block aus. Nützlich für Zufallsantworten.

Jeder Aktion-Block enthält eine oder mehrere Aktionen. Du kannst einem einzelnen Befehl mehrere Aktions-Blöcke hinzufügen.

## Aktion {#actions}

Aktionen sind die einzelnen Arbeitsschritte, die dein Bot ausführt. Die folgenden Aktionen stehen zur Verfügung:

| Aktion | Beschreibung |
|---|---|
| **Auf Nachricht oder Interaktion antworten** | Antworte auf die auslösende Nachricht oder Interaktion. Unterstützt private Antworten (nur für den ausführenden Nutzer sichtbar) bei Slash-Befehlen und Knopf-Klicks. |
| **Nachricht in Kanal senden** | Sende eine Nachricht in einem beliebigen Kanal auf dem Server. Die Nachricht kann optional angepinnt werden. |
| **Interaktions-Nachricht editieren** | Bearbeite die Nachricht, an der die Schaltfläche (Knopf) angehängt ist (nur für Knopf-Trigger). |
| **PN an Nutzer senden** | Sende eine Private Nachricht (PN) an den ausführenden oder einen erwähnten Nutzer. Wird lautlos übersprungen, falls der Nutzer PNs deaktiviert hat. |
| **Ausführende Nachricht löschen** | Lösche die Nachricht, die den Befehl ausgelöst hat (nur für Nachrichten-Trigger) |
| **Nickname ändern** | Ändere den Nickname eines Nutzers. Leer lassen, um den Namen zurückzusetzen. |
| **Rollen verwalten** | Rollen bei einem Nutzer hinzufügen, entfernen oder umschalten |
| **Reaktion auf die ausführende Nachricht** | Reagiere mit Emojis auf die Nachricht, die den Befehl ausgelöst hat. |
| **Dialog anzeigen** | Zeige dem Nutzer einen Dialog (Modal) an. Der Dialog muss als separater Eigener Befehl mit einem Dialog-Trigger konfiguriert sein. Pro Interaktion kann nur ein einziger Dialog angezeigt werden. |

:::info
Manche Aktionen sind nur für bestimmte Trigger-Typen verfügbar. Beispielsweise funktioniert „Dialog anzeigen“ nur bei interaktionsbasierten Triggern (Slash-Befehlen, Knöpfen). Nicht unterstützte Aktionen werden lautlos übersprungen.
:::

## Parameter {#parameters}

Custom Commands unterstützen dynamische Parameter, die beim Ausführen des Befehls durch tatsächliche Werte ersetzt werden. Du kannst Parameter in jedem Textfeld innerhalb deiner Aktionen verwenden.

### Integrierte Parameter {#built-in-parameters}

Diese Parameter sind immer verfügbar:

| Parameter | Beschreibung |
|---|---|
| `%userID%` | ID des Nutzers, der den Befehl ausgelöst hat |
| `%userTag%` | Tag des ausführenden Nutzers |
| `%userUsername%` | Benutzername des ausführenden Nutzers |
| `%userNickname%` | Server-Nickname des ausführenden Nutzers |
| `%userAvatarURL%` | Avatar-URL des ausführenden Nutzers |
| `%userCreatedAt%` | Zeitstempel der Accounterstellung des ausführenden Nutzers |
| `%channelID%` | ID des Kanals, in dem der Befehl ausgeführt wurde. |
| `%content%` | Der Textinhalt der Trigger-Nachricht (funktioniert nur bei Nachricht-Triggern) |

### Optionen-Parameter für Slash-Befehle {#option-parameters}

Wenn du einen Slash-Befehl-Trigger mit Optionen verwendest, werden je nach Optionstyp zusätzliche Parameter verfügbar:

* **User-Optionen** — `%userID-optionname%`, `%userTag-optionname%`, `%userName-optionname%`,
  `%userAvatarURL-optionname%`
* **Rollen-Optionen** — `%roleName-optionname%`, `%roleColor-optionname%`, `%roleID-optionname%`,
  `%rolePosition-optionname%`
* **Channel-Optionen** — `%channelName-optionname%`, `%channelID-optionname%`, `%channelType-optionname%`,
  `%channelParentName-optionname%`, `%channelParentID-optionname%`
* **Attachment-Optionen** — `%attachmentURL-optionname%`
* **Text, Nummer, Ganze Zahl oder Richtig / Falsch Optionen** — `%value-optionname%`

### Dialog-Antworten-Parameter {#modal-parameters}

Bei Verwendung eines Dialog-Triggers sind die Antworten des Nutzers als `%answer1%`, `%answer2%` usw. verfügbar, entsprechend der Reihenfolge der Eingabefelder im Dialog.

### Globale Parameter {#global-parameters}

[Globale Parameter](/de/docs/custom-bot/global-parameters/) (wie `%botName%`, `%guildName%`, timestamps) stehen dir darüber hinaus in jedem beliebigen Textfeld deiner Eigenen Befehle zur Verfügung.

## Befehl-Rechte {#permissions}

Du kannst einschränken, wer einen Eigenen Befehl verwenden darf, indem du **Rollen verlangen** aktivierst:

1. Öffne deinen Eigenen Befehl und suche den Abschnitt **„Befehl-Rechte“**.
2. Aktiviere **"Rollen verlangen"**.
3. Füge die Rollen hinzu, die berechtigt sein sollen, den Befehl zu verwenden.
4. Passe optional die **„Fehlende Rolle Nachricht“** an – dies ist die Nachricht, die angezeigt wird, wenn ein Nutzer ohne die erforderlichen Rollen versucht, den Befehl zu verwenden.

Besitzt ein Anwender keine der erforderlichen Rollen, wird die Ausführung des Befehls blockiert und stattdessen die „Fehlende Rolle Nachricht“ angezeigt.

## Eigene Befehle verwalten {#managing}

### Befehle ein- und ausschalten {#enable-disable}

Jeder Eigene Befehl kann individuell aktiviert oder deaktiviert werden. Ein deaktivierter Befehl reagiert auf keinerlei Trigger. Um einen Befehl zu aktivieren, muss ein gültiger Trigger konfiguriert und alle erforderlichen Felder ausgefüllt sein.

### Teilen von Eigenen Befehlen {#sharing}

Du kannst einen Custom Command mit anderen teilen, indem du einen einzigartigen Teilen-Link erstellst:

1. Öffne den Custom Command, den du teilen möchtest.
2. Klicke auf **„Teilen-Link erstellen“**.
3. Kopiere die generierte URL.

Dieser Link speichert den aktuellen Stand deines Befehls. Wenn du den Befehl später bearbeitest, wird die geteilte Version nicht automatisch aktualisiert.

:::caution
Geteilte Eigene Befehle können Aktionen enthalten, die schädlich sein könnten. Importiere Befehle nur aus Quellen, denen du vertraust.
:::

### Eigene Befehle importieren {#importing}

Um einen geteilten Eigenen Befehl zu importieren:

1. Öffne den Teilen-Link.
2. Wähle den Server aus, in den der Befehl importiert werden soll.
3. Überprüfe den Befehl und bestätige den Import.
4. **Wichtig:** Denk daran, Rollenverweise und Kanalverknüpfungen im importierten Befehl manuell anzupassen, damit sie auf deinem Server korrekt funktionieren.
5. Vergiss nicht, deine Änderungen zu speichern.

### Eigene Befehle löschen {#deleting}

Du kannst einzelne Eigene Befehle oder alle Eigenen Befehle gleichzeitig in der Befehlsliste löschen. Das Löschen kann nicht rückgängig gemacht werden.

## Plan Limits {#plan-limits}

Die Anzahl der gleichzeitig aktivierbaren Eigenen Befehle hängt von deinem SCNX-Plan ab:

| Plan | Aktivierbare Eigene Befehle |
|---|---|
| Starter | Bis zu 10 |
| Professional / Unbegrenzt | Unbegrenzt |

Du kannst jederzeit mehr Befehle erstellen, als dein Limit erlaubt, aber es kann nur die zulässige Anzahl gleichzeitig **aktiviert** sein. Deaktivierte Befehle bleiben gespeichert und können später aktiviert werden, wenn du deinen Plan upgradest oder andere Befehle deaktivierst.

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Mein Slash-Befehl wird in Discord nicht angezeigt</summary>
  <ul>
    <li>Stelle sicher, dass der Eigene Befehl <b>aktiviert</b> ist.</li>
    <li>Es kann bis zu 24 Stunden dauern, bis neue Slash-Befehle in Discord angezeigt werden.</li>
    <li>Überprüfe, ob der Name des Slash-Befehls gültig ist (Kleinschreibung, keine Sonderzeichen außer <code>-</code>).</li>
    <li>Überprüfe, ob du das Limit von 100 Slash-Befehle pro Server überschritten hast.</li>
    <li>Versuche einen Neustart des Bots.</li>
  </ul>
</details>

<details>
  <summary>Mein Befehl kann nicht aktiviert werden</summary>
  <ul>
    <li>Stelle sicher, dass ein <b>Trigger</b> konfiguriert ist.</li>
    <li>Überprüfe, ob alle <b>Pflichtfelder</b> ausgefüllt sind (die Fehlermeldung zeigt dir, welche Felder fehlen).</li>
    <li>Überprüfe, ob du das Limit deines Plans für gleichzeitig aktivierbare Befehle erreicht hast.</li>
  </ul>
</details>

<details>
  <summary>Mein Knopf / Select-Menü-Druck-Befehl funktioniert nicht</summary>
  <ul>
    <li>Stelle sicher, dass du das Knopf- oder Select-Menü-Druck-Element mithilfe des Nachrichten-Editors an eine Nachricht angehängt und mit dem richtigen Eigenen Befehl verknüpft hast.</li>
     <li>Stelle sicher, dass der Eigene Befehl <b>aktiviert</b>ist.</li>
    <li>Überprüfe, ob der Bot über die erforderlichen Berechtigungen im Kanal verfügt.</li>
  </ul>
</details>

<details>
  <summary>Parameter werden als Rohtext angezeigt (z. B. %userID%)</summary>
  <ul>
    <li> Stelle sicher, dass du die korrekte Parameter-Syntax mit <code>%</code>, auf beiden Seiten, verwendest.</li>
    <li>Überprüfe, ob der Parameter für deinen Trigger-Typ verfügbar ist (z.B., <code>%content%</code>) funktioniert nur bei Nachrichten-Triggern.</li>
    <li>Überprüfe den Parameternamen auf Tippfehler.</li>
  </ul>
</details>

<details>
  <summary>„Dialog anzeigen“ Aktion funktioniert nicht</summary>
  <ul>
    <li>Dialoge können nur über interaktionsbasierte Trigger (Slash-Befehle, Knöpfe) angezeigt werden. Sie können nicht über Nachrichten-Trigger ausgelöst werden.</li>
    <li>Pro Interaktion kann nur ein Dialog angezeigt werden — wenn eine andere Aktion bereits einen Dialog aufgerufen hat, werden Nachfolgende übersprungen.</li>
    <li>Ein Dialog kann nicht als Antwort auf das Absenden eines anderen Dialog angezeigt werden (Einschränkung von Discord).</li>
    <li>Stelle sicher, dass du einen separaten Eigenen Befehl mit einem <b>Dialog-Trigger</b> erstellt und diesen in der Aktion „Dialog anzeigen“ ausgewählt hast</li>
  </ul>
</details>

<details>
  <summary>Rollen verwalten-Aktion funktioniert nicht</summary>
  <ul>
    <li>Die höchste Rolle des Bots muss <b>über</b> den Rollen stehen, die er hinzuzufügen, entfernen oder umzuschalten soll.</li>
    <li>Stelle sicher, dass der Bot über die <b>Rollen verwalten</b> Berechtigung verfügt.</li>
    <li>Überprüfe, ob der User-Parameter korrekt gesetzt ist — wenn kein Benutzer angegeben wird, wird die Aktion stillschweigend übersprungen.</li>
  </ul>
</details>
