# Anti-Nuke-Schutz

Erkenne und bekämpfe destruktive Aktionen auf deinem Server (Nuking) mit konfigurierbaren Schwellenwerten, automatischen Gegenmaßnahmen und Wiederherstellung per Rückgängig-Funktion.

<ModuleOverview moduleName="anti-nuke" />

:::warning
**Anti-Nuke kann nicht vor Nutzern schützen, die es umkonfigurieren können.** Der Zugriff auf die `/anti-nuke`-Befehle (einschließlich `whitelist add`) wird über die Liste **Ausgenommene Benutzer** gesteuert, nicht über Discord-Berechtigungen. Außerdem kann jeder mit Zugriff auf das SCNX-Dashboard dieses Bots (der Server-Besitzer, Mitbesitzer oder vertrauenswürdige Admins mit der Berechtigung „Konfiguration ändern und neu laden") Anti-Nuke komplett umgehen, indem er:

- sich selbst oder einen Komplizen zur Liste **Ausgenommene Benutzer** hinzufügt (was auch Zugriff auf die `/anti-nuke`-Befehle gewährt).
- Schwellenwerte erhöht, Aktionstypen deaktiviert oder die **Antwortaktion** auf **Nur benachrichtigen** ändert.
- die Modul-Datenbank zurücksetzt und damit Aktionsaufzeichnungen, Snapshots und den Rückgängig-Verlauf löscht.
- das Modul komplett deaktiviert.

Anti-Nuke soll kompromittierte Accounts und bösartige Bots ausbremsen, bevor sie katastrophalen Schaden anrichten. Es kann niemanden aufhalten, der legitimen Konfigurationszugriff hat und gezielt handelt. Vergib den Konfigurationszugriff auf das SCNX-Dashboard daher nur an Personen, denen du wirklich vertraust.

**Bevor du dich auf dieses Modul verlässt, lies [Hinweise und Einschränkungen](#considerations) vollständig durch.** Es ist eine Schutzschicht nach bestem Bemühen, keine Garantie, und schützt dich in mehreren wichtigen Situationen nicht.
:::

## Funktionen {#features}

- Erkennt 19 verschiedene Arten destruktiver Server-Aktionen, darunter massenhaftes Löschen von Kanälen/Rollen, Massen-Bans/-Kicks, Berechtigungs-Eskalation, Webhook-Spam und mehr.
- Hybrides Erkennungssystem, das sowohl Gateway-Events (sofortige Erkennung) als auch Audit-Log-Einträge (Auffangnetz) nutzt, inklusive automatischer Deduplizierung.
- Konfigurierbare Schwellenwerte pro Aktion: Lege fest, wie viele Aktionen eines Typs innerhalb eines gleitenden Zeitfensters eine Reaktion auslösen.
- Vier Antwortaktionen: nur benachrichtigen, alle Rollen entfernen, den Ausführenden bannen oder nur gefährliche Berechtigungen entfernen.
- Temporäres Whitelist-System, damit vertrauenswürdige Nutzer Massenaktionen durchführen können, ohne eine Reaktion auszulösen (z. B. bei geplanten Umstrukturierungen).
- Rückgängig-System, um den durch ein Nuke-Ereignis entstandenen Schaden zu beheben, entweder mit dem Button **Rückgängig** an jeder Warnung oder dem Befehl `/anti-nuke undo`. Aus gespeicherten Snapshots werden gelöschte Kanäle, Rollen, Emojis, Sticker, Threads, Webhooks, Servereinstellungen, Kanal-Berechtigungsüberschreibungen, Rollenberechtigungen und Massen-Rollenentzüge wiederhergestellt. Die Wiederherstellung von Emojis und Stickern erfolgt nach bestem Bemühen und setzt voraus, dass das Bild archiviert wurde. Mitglieder-Kicks, Mitglieder-Bereinigungen und Integrations-Erstellungen können nicht automatisch rückgängig gemacht werden.
- Alle Erkennungsdaten werden in der Datenbank gespeichert (nicht im Arbeitsspeicher) und sind damit absturzsicher: Startet der Bot während eines Nukings neu, werden unvollständige Ereignisse zur manuellen Prüfung markiert.
- Bestimmte Nutzer dauerhaft von der Erkennung ausnehmen.
- Detailliertes Logging aller erkannten Ereignisse in einen konfigurierbaren Log-Kanal.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=anti-nuke) auf deinem Server.
2. Öffne die [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=anti-nuke%7Cconfiguration) und lege den **Log-Kanal** fest, in den Anti-Nuke-Warnungen gesendet werden.
3. Wähle deine bevorzugte **Antwortaktion**. Sie bestimmt, was mit dem Nutzer passiert, der eine Nuke-Erkennung ausgelöst hat:
   - **Nur benachrichtigen**: Es wird nur eine Warnung in den Log-Kanal gesendet. Gegen den Nutzer wird keine Maßnahme ergriffen.
   - **Alle Rollen entfernen** (Standard): Alle Rollen des Nutzers werden entfernt, um weiteren Schaden zu verhindern.
   - **Bannen**: Der Nutzer wird vom Server gebannt.
   - **Gefährliche Berechtigungen entfernen**: Gefährliche Berechtigungen werden von den Rollen des Nutzers entfernt. Betroffen sind Administrator, Kanäle verwalten, Rollen verwalten, Mitglieder bannen, Mitglieder kicken, Server verwalten und Webhooks verwalten. Da dabei die Rollen selbst bearbeitet werden, betrifft es alle Mitglieder, die diese Rollen besitzen, nicht nur den Ausführenden.
4. Füge vertrauenswürdige Nutzer zur Liste **Ausgenommene Benutzer** hinzu. Aufgelistete Nutzer lösen nie eine Anti-Nuke-Erkennung aus. Diese Liste ist außerdem die einzige Zugangsbeschränkung dafür, wer die `/anti-nuke`-Befehle und den **Rückgängig**-Button in Warnungen verwenden darf (Discord-Berechtigungen wie Administrator gewähren allein keinen Zugriff).
5. Sieh dir die [Konfiguration der Schwellenwerte](https://scnx.app/de/glink?page=bot/configuration?file=anti-nuke%7Cthresholds) an und passe die Limits für jeden Aktionstyp an deinen Server an.
6. Stelle sicher, dass der Bot die folgenden Berechtigungen besitzt: **Administrator** (empfohlen) oder mindestens **Audit-Log anzeigen**, **Rollen verwalten**, **Mitglieder bannen**, **Kanäle verwalten**, **Webhooks verwalten**, **Server-Ausdrücke verwalten**, **Kanal anzeigen**, **Nachrichten senden** und **Links einbetten**.
7. Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie so weit oben wie möglich steht. Der Bot kann nur Rollen entfernen oder Nutzer bannen, deren höchste Rolle unter der Rolle des Bots liegt.

## Verwendung {#usage}

### So funktioniert die Erkennung {#detection}

Das Anti-Nuke-System läuft vollständig im Hintergrund. Wenn ein Nutzer eine destruktive Aktion durchführt (z. B. einen Kanal löscht), geht der Bot wie folgt vor:

1. Er speichert die Aktion in der Datenbank zusammen mit einem Snapshot der betroffenen Ressource.
2. Er prüft, wie viele Aktionen desselben Typs dieser Nutzer innerhalb des konfigurierten Zeitfensters durchgeführt hat.
3. Wird der Schwellenwert überschritten, wird die konfigurierte Antwortaktion ausgeführt und eine Warnung in den Log-Kanal gesendet.

Die Erkennung nutzt einen hybriden Ansatz: Gateway-Events ermöglichen eine sofortige Erkennung, während Audit-Log-Einträge als Auffangnetz dienen. Das System dedupliziert automatisch zwischen beiden Wegen, sodass Aktionen nie doppelt gezählt werden.

### Temporäre Whitelists {#whitelists}

Vor geplanten Massenaktionen (z. B. dem Umstrukturieren von Kanälen oder dem Aufräumen von Rollen) können Administratoren einen Nutzer temporär auf die Whitelist setzen. Aktionen von Nutzern auf der Whitelist werden weiterhin aufgezeichnet, aber Schwellenwerte werden nicht ausgewertet und für die angegebene Dauer wird keine Antwortaktion ausgelöst.

- Mit `/anti-nuke whitelist add` erstellst du einen temporären Whitelist-Eintrag mit Dauer und Grund.
- Mit `/anti-nuke whitelist remove` widerrufst du einen Whitelist-Eintrag vorzeitig.
- Mit `/anti-nuke whitelist list` siehst du alle aktiven Whitelist-Einträge.

Whitelist-Einträge laufen automatisch ab und werden beim Neustart des Bots bereinigt. Wenn du für einen Nutzer mit aktivem Eintrag einen neuen Eintrag hinzufügst, ersetzt dieser den alten. Gibst du keinen Grund an, wird ein Standardtext für "kein Grund" gespeichert.

### Schaden rückgängig machen {#undo}

Wird ein Nuking erkannt, speichert der Bot Snapshots der betroffenen Ressourcen (Kanalkonfigurationen, Rolleneinstellungen, Emoji-Bilder usw.). Nutzer auf der Liste **Ausgenommene Benutzer** können den Schaden auf zwei Wegen beheben:

- **Über die Warnung:** Klicke auf den Button **Rückgängig** an der Warnung „Nuke erkannt" und bestätige anschließend. Nach Abschluss wird auch die gegen den Ausführenden ergriffene Maßnahme rückgängig gemacht (z. B. wird er entbannt oder seine entfernten Rollen werden wiederhergestellt).
- **Über den Befehl:** Führe `/anti-nuke undo` aus und wähle das Ereignis im Dropdown-Menü aus. Das Menü zeigt bis zu 10 der neuesten Ereignisse, die noch nicht rückgängig gemacht wurden.

In beiden Fällen versucht der Bot, alle betroffenen Ressourcen anhand der gespeicherten Snapshots wiederherzustellen, und meldet, was wiederhergestellt werden konnte und was nicht.

:::warning
Rückgängig machen erfolgt nach bestem Bemühen. Einige Daten können nicht wiederhergestellt werden: Der Nachrichtenverlauf in gelöschten Kanälen geht verloren, Icon und Vanity-URL des Servers werden nicht wiederhergestellt (Name und Beschreibung dagegen schon), und für Mitglieder-Kicks, Mitglieder-Bereinigungen und Integrations-Erstellungen gibt es keine automatische Wiederherstellung. Die Wiederherstellung von Emojis und Stickern hängt davon ab, ob das Bild archiviert wurde. Die Rückgängig-Funktion funktioniert am besten, wenn sie zeitnah nach der Erkennung verwendet wird.
:::

### Absturzsicherheit {#crash-safety}

Alle Erkennungsdaten werden sofort in der Datenbank gespeichert. Stürzt der Bot während eines Nuke-Ereignisses ab oder wird neu gestartet:

- werden unvollständige Antwortaktionen beim Neustart markiert und im Log-Kanal gemeldet.
- bleiben Snapshot-Daten für die Wiederherstellung erhalten.
- werden Aktionsaufzeichnungen, die zu ungelösten Nuke-Ereignissen gehören, aufbewahrt, bis das Ereignis rückgängig gemacht oder manuell gelöst wurde.

## Hinweise und Einschränkungen {#considerations}

:::danger Lies das, bevor du dich auf Anti-Nuke verlässt
Anti-Nuke ist eine **Schutzschicht nach bestem Bemühen und keine Sicherheitsgarantie.** Es erkennt destruktive Muster und reagiert gemäß deinen Schwellenwerten, kann aber umgangen werden, falsch konfiguriert sein oder im ungünstigsten Moment schlicht offline sein. Betrachte es als eine Schicht in einem mehrstufigen Sicherheitskonzept und nicht mehr. Die Aktivierung dieses Moduls erfolgt auf eigene Gefahr.
:::

### Es ersetzt keine gute Sicherheitspraxis {#considerations-hygiene}

Anti-Nuke macht Folgendes nicht überflüssig und ist ohne diese Maßnahmen deutlich schwächer:

- Saubere Berechtigungsverwaltung für Discord-Rollen und -Kanäle (vergib Administrator nicht leichtfertig).
- Überprüftes, vertrauenswürdiges Team, idealerweise mit erzwungener 2FA.
- Regelmäßige Kontrolle des Audit-Logs.
- Unabhängige Backups außerhalb von Discord für alles, was du nicht verlieren darfst.

### Grenzen der Erkennung {#considerations-detection}

- Der Bot verlässt sich auf die Gateway-Events und das Audit-Log von Discord. Manche Aktionen erzeugen keinen Audit-Log-Eintrag, andere werden mit fehlenden oder verzögerten Informationen zum Ausführenden gemeldet, und Rate Limits oder Ausfälle bei Discord können Events verlieren oder verzögern. Solche Ereignisse bleiben unter Umständen unerkannt.
- Schwellenwerte sind zeitfensterbasierte Zähler. Ein Angreifer, der langsam genug vorgeht, um unter deinen Schwellenwerten zu bleiben, oder Aktionen nutzt, die nicht überwacht werden, löst keine Reaktion aus.
- Fehlalarme sind möglich. Legitime Massenaktionen des Teams können Schwellenwerte auslösen und dazu führen, dass der Bot Rollen entfernt, bannt oder Warnungen für Personen sendet, bei denen du das nicht beabsichtigt hast. Passe die Schwellenwerte an und nutze vor geplanten Massenarbeiten die Liste **Ausgenommene Benutzer** oder `/anti-nuke whitelist add`.
- Eine Fehlkonfiguration verringert den Schutz unbemerkt. Deaktivierte Aktionstypen, erhöhte Schwellenwerte, die **Antwortaktion** **Nur benachrichtigen**, ein nicht gesetzter Log-Kanal, eine zu großzügige Liste ausgenommener Benutzer oder eine kurze Snapshot-Aufbewahrungsdauer schwächen oder deaktivieren den Schutz, ohne dass ein sichtbarer Fehler angezeigt wird.

### Ausfallzeiten und Verfügbarkeit {#considerations-downtime}

Anti-Nuke **funktioniert nur, solange der Bot läuft, mit Discord verbunden ist und aktiv Events empfängt.** In jedem Zeitraum, in dem der Bot offline ist, neu startet, aktualisiert wird, getrennt ist, durch Rate Limits eingeschränkt ist oder anderweitig keine Events verarbeitet:

- findet keinerlei Erkennung statt.
- werden keine Antwortaktionen ausgeführt.
- werden keine Snapshots geschrieben.
- werden Aktionen aus diesem Zeitraum **nicht** nachträglich ausgewertet, sobald der Bot zurück ist.

Ausfallzeiten können durch Discord-Ausfälle, Instabilität des Gateways oder Rate Limits, Netzwerk- oder Hosting-Vorfälle, Wartungsarbeiten der SCNX-Plattform, Modul-Updates und Neustarts, Datenbankprobleme oder Fehler entstehen. SCNX gibt keine Verfügbarkeitsgarantie für dieses Modul oder den Bot insgesamt.

### Hierarchie und Reichweite {#considerations-hierarchy}

- Der Bot **kann unter keinen Umständen gegen den Server-Besitzer vorgehen.** Wird der Account des Besitzers kompromittiert, schützt dich dieses Modul nicht.
- Der Bot **kann nicht gegen Nutzer vorgehen, deren höchste Rolle auf oder über der höchsten Rolle des Bots liegt.** Halte die Rolle des Bots möglichst weit oben in der Rollenliste, sonst schlagen Antwortaktionen unbemerkt fehl.
- Der Bot kann nicht gegen Nutzer vorgehen, die er nicht sehen kann (z. B. jemand, der den Server bereits verlassen hat), und kann keine Aktionen rückgängig machen, die von Discord selbst durchgeführt wurden.

### Einschränkungen beim Rückgängigmachen {#considerations-undo}

Die Rückgängig-Funktion stellt nur Ressourcen wieder her, von denen der Bot vor dem Ereignis einen Snapshot erstellt hat. Sie ist eine teilweise Wiederherstellungshilfe und **kein** Backup und kann Folgendes nicht wiederherstellen:

- Inhalte gelöschter Nachrichten oder Nachrichtenverläufe jeder Art.
- Bereits aufgehobene Kicks oder Bans, bereinigte Mitglieder oder alles außerhalb des konfigurierten Snapshot-Aufbewahrungszeitraums.
- Emojis oder Sticker, deren Bild nicht archiviert werden konnte, sowie Ressourcentypen ohne automatische Wiederherstellung (Mitglieder-Kicks, Mitglieder-Bereinigungen, Integrations-Erstellungen).
- Alles, was Discord Bots nicht zur Verfügung stellt (Server-Boosts, Vanity-URL, Partner- oder Discovery-Einstellungen und Ähnliches).

### Risiko der Konfigurationsumgehung {#considerations-bypass}

Jeder mit Konfigurationszugriff auf das Dashboard dieses Bots kann Anti-Nuke vollständig umgehen, wie in der Warnung am Anfang dieser Seite beschrieben. Die Liste **Ausgenommene Benutzer** ist außerdem die einzige Zugangsbeschränkung für die `/anti-nuke`-Befehle. Anti-Nuke kann nicht vor jemandem schützen, der bereits die Möglichkeit hat, die Konfiguration zu ändern. Prüfe daher genau, wer Server-Besitzer, Mitbesitzer ist oder die Berechtigung „Konfiguration ändern und neu laden" besitzt, und halte diesen Kreis möglichst klein.

### Deine Verantwortung {#considerations-responsibility}

Du bist allein verantwortlich für deine Konfiguration der Schwellenwerte, die Wahl der Antwortaktion, die Liste ausgenommener Benutzer, den Log-Kanal, die Snapshot-Aufbewahrung, die Rollenhierarchie, die Überprüfung deines Teams, die Durchsetzung von 2FA, die Zugriffskontrolle auf das Dashboard und Backups außerhalb von Discord sowie dafür, deine Konfiguration zu testen und regelmäßig zu überprüfen, während dein Server wächst. Anti-Nuke wird ohne Mängelgewähr und nach Verfügbarkeit bereitgestellt, ohne jegliche Garantie, und SCNX übernimmt keine Haftung für Schäden, Datenverluste, verpasste oder verzögerte Erkennungen, Fehlalarme, Ausfallzeiten oder Konfigurationsumgehungen, unabhängig von der Ursache.

## Überwachte Aktionstypen {#action-types}

| Aktionstyp                          | Beschreibung                                                 | Standard-Schwellenwert |
| ----------------------------------- | ------------------------------------------------------------ | ---------------------- |
| Kanal-Löschung                      | Kanäle werden gelöscht                                       | 3 in 60 s              |
| Kanal-Erstellung                    | Kanäle werden massenhaft erstellt                            | 5 in 60 s              |
| Rollen-Löschung                     | Rollen werden gelöscht                                       | 3 in 60 s              |
| Rollen-Erstellung                   | Rollen werden massenhaft erstellt                            | 5 in 60 s              |
| Mitglieder-Bans                     | Mitglieder werden gebannt                                    | 5 in 120 s             |
| Mitglieder-Kicks                    | Mitglieder werden gekickt                                    | 5 in 120 s             |
| Webhook-Erstellung                  | Webhooks werden erstellt                                     | 3 in 60 s              |
| Webhook-Löschung                    | Webhooks werden gelöscht                                     | 3 in 60 s              |
| Emoji-Löschung                      | Emojis werden gelöscht                                       | 5 in 60 s              |
| Sticker-Löschung                    | Sticker werden gelöscht                                      | 3 in 60 s              |
| Berechtigungs-Eskalation            | Rollen werden gefährliche Berechtigungen hinzugefügt         | 2 in 120 s             |
| Massen-Rollenentzug                 | Rollen werden von Mitgliedern entfernt                       | 5 in 120 s             |
| Bot-Hinzufügungen                   | Bots werden zum Server hinzugefügt                           | 3 in 120 s             |
| Webhook-Spam                        | Webhook-Nachrichten werden massenhaft gesendet               | 10 in 30 s             |
| Server-Einstellungen                | Änderungen an Servername, Icon, Vanity-URL oder Beschreibung | 3 in 60 s              |
| Kanal-Berechtigungsüberschreibungen | Kanalberechtigungen werden geändert                          | 5 in 60 s              |
| Mitglieder-Bereinigung              | Mitglieder-Bereinigungen (Prune)                             | 1 in 120 s             |
| Thread-Löschung                     | Threads werden gelöscht                                      | 5 in 60 s              |
| Integrations-Erstellung             | Integrationen werden hinzugefügt                             | 2 in 120 s             |

Jeder Aktionstyp kann einzeln aktiviert oder deaktiviert werden und hat in der [Konfiguration der Schwellenwerte](#configuration-thresholds) einen eigenen Schwellenwert und ein eigenes Zeitfenster.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                                                     | Beschreibung                                                                                        |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `/anti-nuke whitelist add user:<User> duration:<String> [reason:<String>]` | Fügt einen temporären Whitelist-Eintrag hinzu. Die Dauer unterstützt Formate wie `30m`, `2h`, `1d`. |
| `/anti-nuke whitelist remove user:<User>`                                  | Entfernt einen aktiven Whitelist-Eintrag eines Nutzers.                                             |
| `/anti-nuke whitelist list`                                                | Listet alle aktuell aktiven Whitelist-Einträge auf.                                                 |
| `/anti-nuke undo`                                                          | Zeigt aktuelle Nuke-Ereignisse an und lässt dich eines davon rückgängig machen.                     |
| `/anti-nuke status`                                                        | Zeigt den aktuellen Status des Anti-Nuke-Systems und Statistiken an.                                |

`/anti-nuke status` zeigt die aktuelle **Reaktionsaktion**, den **Log-Kanal** (oder "Nicht konfiguriert"), die Anzahl ausgenommener Benutzer, die Anzahl aktiver Whitelist-Einträge, die Anzahl der Nuke-Ereignisse der letzten 7 Tage und die **Snapshot-Aufbewahrung** in Tagen. `/anti-nuke whitelist list` zeigt jeden aktiven Eintrag mit Nutzer, Ablaufzeitpunkt, vergebendem Nutzer und Grund.

Alle Befehle (und der **Rückgängig**-Button in Warnungen) sind auf Nutzer beschränkt, die in der Liste **Ausgenommene Benutzer** der [Allgemeinen Konfiguration](#configuration-general) stehen. Discord-Berechtigungen wie Administrator gewähren allein keinen Zugriff.

## Konfiguration {#configuration}

### Allgemeine Konfiguration {#configuration-general}

Konfiguriere die allgemeinen Einstellungen des Anti-Nuke-Systems. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=anti-nuke%7Cconfiguration).

| Feld                                 | Beschreibung                                                                                                                                               |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Log-Kanal                            | Kanal, in den Anti-Nuke-Warnungen und Ereignisprotokolle gesendet werden.                                                                                  |
| Antwortaktion                        | Was bei einer Nuke-Erkennung geschehen soll: **Nur benachrichtigen**, **Alle Rollen entfernen**, **Bannen** oder **Gefährliche Berechtigungen entfernen**. |
| Ausgenommene Benutzer                | Nutzer, die vollständig von der Anti-Nuke-Erkennung ausgenommen sind.                                                                                      |
| Snapshot-Aufbewahrung (Tage)         | Wie lange Ressourcen-Snapshots für die Wiederherstellung aufbewahrt werden (Standard: 30 Tage).                                                            |
| Aktionsprotokoll-Aufbewahrung (Tage) | Wie lange einzelne Aktionsaufzeichnungen aufbewahrt werden (Standard: 7 Tage).                                                                             |

### Schwellenwerte {#configuration-thresholds}

Konfiguriere die Erkennungsschwellenwerte für jeden Aktionstyp. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=anti-nuke%7Cthresholds).

Jeder Aktionstyp hat drei Einstellungen:

| Feld                      | Beschreibung                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------- |
| [Aktionstyp] verfolgen    | Aktiviert oder deaktiviert die Erkennung für diesen Aktionstyp.                     |
| Max. [Aktionstyp]         | Anzahl der Aktionen innerhalb des Zeitfensters, bevor eine Reaktion ausgelöst wird. |
| Zeitfenster (in Sekunden) | Das gleitende Zeitfenster in Sekunden, in dem Aktionen gezählt werden.              |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Der Bot erkennt keine Nuke-Aktionen</summary>
  <ul>
    <li>Stelle sicher, dass das Modul aktiviert ist und der Bot die Berechtigung <code>Audit-Log anzeigen</code> besitzt.</li>
    <li>Prüfe, ob der betreffende Aktionstyp in der <a href="#configuration-thresholds">Konfiguration der Schwellenwerte</a> aktiviert ist.</li>
    <li>Stelle sicher, dass der ausführende Nutzer nicht in der Liste <strong>Ausgenommene Benutzer</strong> steht und keinen aktiven Whitelist-Eintrag hat.</li>
    <li>Aktionen des Server-Besitzers werden weiterhin erkannt und protokolliert, es kann jedoch keine automatische Reaktion erfolgen. Discord erlaubt es Bots nicht, den Server-Besitzer zu bannen oder ihm Rollen zu entziehen. Details dazu findest du im nächsten Abschnitt.</li>
  </ul>
</details>

<details>
  <summary>Der Bot hat ein Nuking erkannt, aber keine Maßnahme ergriffen</summary>
  <ul>
    <li>Prüfe, ob die <strong>Antwortaktion</strong> auf etwas anderes als <strong>Nur benachrichtigen</strong> gesetzt ist.</li>
    <li>Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie über der höchsten Rolle des Ausführenden steht. Der Bot kann Nutzern mit einer höheren Rolle keine Rollen entziehen und sie nicht bannen.</li>
    <li>Wenn der Ausführende der Server-Besitzer ist, sendet der Bot nur eine Warnung. Discord erlaubt es Bots nicht, gegen den Server-Besitzer vorzugehen.</li>
  </ul>
</details>

<details>
  <summary>Der Bot löst Fehlalarme aus</summary>
  <ul>
    <li>Erhöhe die Schwellenwerte für den betreffenden Aktionstyp in der <a href="#configuration-thresholds">Konfiguration der Schwellenwerte</a>.</li>
    <li>Nutze <code>/anti-nuke whitelist add</code>, um Nutzer vor geplanten Massenaktionen temporär auf die Whitelist zu setzen.</li>
    <li>Füge vertrauenswürdige Administratoren in der <a href="#configuration-general">Allgemeinen Konfiguration</a> zur Liste <strong>Ausgenommene Benutzer</strong> hinzu.</li>
  </ul>
</details>

<details>
  <summary>Der Rückgängig-Befehl stellt nicht alles wieder her</summary>
  <ul>
    <li>Rückgängig machen erfolgt nach bestem Bemühen. Manche Daten, etwa der Nachrichtenverlauf in gelöschten Kanälen, können nicht wiederhergestellt werden.</li>
    <li>Stelle sicher, dass die Snapshots nicht abgelaufen sind. Prüfe dazu die Einstellung <strong>Snapshot-Aufbewahrung</strong> in der Konfiguration.</li>
    <li>Der Bot benötigt ausreichende Berechtigungen, um Ressourcen neu zu erstellen (z. B. <code>Kanäle verwalten</code>, um gelöschte Kanäle wiederherzustellen).</li>
  </ul>
</details>

<details>
  <summary>Im Log-Kanal erscheint „Unvollständige Nuke-Reaktion erkannt"</summary>
  <ul>
    <li>Das bedeutet, dass der Bot neu gestartet wurde, bevor er die Reaktion auf ein erkanntes Nuking abschließen konnte. Prüfe, ob der Ausführende noch Zugriff auf den Server hat, und ergreife bei Bedarf manuell Maßnahmen.</li>
    <li>Mit <code>/anti-nuke undo</code> kannst du versuchen, entstandenen Schaden rückgängig zu machen.</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Dieses Modul speichert die folgenden Daten:

- **Aktionsaufzeichnungen**: Aktionstyp, Ziel-ID, ID des Ausführenden und Zeitstempel jeder überwachten destruktiven Aktion. Werden nach Ablauf des konfigurierten Aufbewahrungszeitraums automatisch gelöscht (Standard: 7 Tage).
- **Snapshots**: Detaillierte Ressourcendaten (Kanaleinstellungen, Rollenkonfigurationen, Emoji-Bilder usw.) für die Wiederherstellung. Werden nach Ablauf des konfigurierten Aufbewahrungszeitraums automatisch gelöscht (Standard: 30 Tage).
- **Nuke-Ereignisse**: Aufzeichnungen erkannter Nuke-Vorfälle, einschließlich Ausführendem, Aktionstyp, Anzahl der Aktionen, ergriffener Maßnahme und der Information, ob das Ereignis rückgängig gemacht wurde.
- **Whitelist-Einträge**: Nutzer-ID, vergebender Nutzer, Grund und Ablaufzeitpunkt temporärer Whitelist-Einträge. Werden nach Ablauf automatisch gelöscht.

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
