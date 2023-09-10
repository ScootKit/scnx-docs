# Erweiterte Protokollierung

Lass deinen Bot alle Änderungen an deinem Sever und deinen Kanälen Protokollieren.

<ModuleOverview moduleName="logging" />

## Funktionen {#features}

Mit dem erweiterten Protokollierungsmodul kannst Du dies ganz einfach tun

* Protokolliere Kanalaktualisierungen (wie Kanalbearbeitungen, Kanalberechtigungsänderungen und mehr) in jedem gewünschten Kanal.
* Protokolliere Rollenaktualisierungen (wie Rollenänderungen, Berechtigungsänderungen und mehr) in jedem gewünschten Kanal.
* Protokolliere Mitgliederaktualisierungen (wie Spitznamen- oder Rollenänderungen und mehr) in jedem gewünschten Kanal.
* Protokolliere Nachrichtenaktualisierungen (wie Nachrichtenänderungen oder -löschungen) in jedem gewünschten Kanal.
* Protokolliere Serveränderungen (z. B. Änderungen an Servereinstellungen und mehr) in jedem gewünschten Kanal.
* Protokolliere Voice-Channel-Updates (z. B. Mitglieder, die dem Kanal beitreten oder ihn verlassen) in jedem gewünschten Kanal.
* Protokolliere Emoji-Änderungen (wie das Hochladen, Bearbeiten oder Löschen von Emojis und Aufklebern) in jedem gewünschten Kanal.

## Einrichtung {#setup}

1. Erstelle einen Kanal, in dem der Bot Änderungen protokollieren soll. Stell sicher, dass der Bot über die Berechtigungen „Nachrichten senden“ und „Kanal anzeigen“ verfügt.
2. Stell sicher, dass dein Bot über die erforderlichen Berechtigungen auf deinem Server verfügt („Überwachungsprotokoll anzeigen“). Wenn Du Nachrichtenaktualisierungen protokollieren möchten, benötigt der Bot die Berechtigungen „Kanal anzeigen“ und „Nachrichtenverlauf anzeigen“ auf jedem Kanal, von dem aus der Bot Änderungen dokumentieren soll.
3. Öffne die [Erweiterte Protokollierungskonfiguration](https://scnx.app/de/glink?page=bot/configuration?file=logging%7Cconfig)
   und [Modul konfigurieren](#configuration).
4. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen.

## Verwendung {#usage}

Sobald dieses Modul [konfiguriert](#configuration) aktiviert ist, protokolliert es automatisch die konfigurierten Änderungen in den angegebenen Kanälen.
Es sind keine weiteren Maßnahmen erforderlich.

Bitte beachten Sie, dass Ihre Administratoren die protokollierten Nachrichten möglicherweise löschen 
(oder mithilfe der Funktion [Als Bot anmelden](./../../login-as-bot)-Bearbeiten und Fälschen ) können. Dies ist mit dem Discord-Audit-Log nicht möglich. 
Wenn Du also sicherstellen möchten, dass eine Aktion korrekt ist, überprüfe bitte das Discord-Audit-Protokoll. 
Änderungen in der Nachrichtenprotokollierung werden auch nie automatisch bearbeitet. Wenn Du also in einer der Protokollnachrichten die Bezeichnung „Bearbeitet“ siehst, wurde sie wahrscheinlich mit der Funktion
[Als Bot anmelden](./../../login-as-bot) geändert.

## Konfiguration {#configuration}

Mit dieser Konfigurationsdatei kannst Du festlegen, welche Änderungen an deinem Server in welchem ​​Kanal protokolliert werden sollen. 
Öffne dein Dashboard [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=logging%7Cconfig).

| Feld | Beschreibung |
|--------------|----- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------|
| Kanal-Updates | Wenn diese Option aktiviert ist, protokolliert der Bot Änderungen an Kanälen (z. B. Kanalbearbeitungen, Berechtigungsänderungen und mehr). |
| Channel zur Protokollierung von Channel-Updates | <i>Nur sichtbar, wenn „Channel-Updates“ aktiviert ist.</i><br/>Änderungen an Kanälen werden in diesem Kanal protokolliert. |
| Rollenaktualisierungen | Wenn diese Option aktiviert ist, protokolliert der Bot Änderungen an Rollen (wie Rollenänderungen, Berechtigungsänderungen und mehr). |
| Kanal zur Protokollierung von Rollenaktualisierungen | <i>Nur sichtbar, wenn „Rollenaktualisierungen“ aktiviert ist.</i><br/>Änderungen an Rollen werden in diesem Kanal protokolliert. |
| Mitglieder-Updates | Wenn diese Option aktiviert ist, protokolliert der Bot Änderungen an Mitgliedern (z. B. Spitznamen- oder Rollenänderungen und mehr). |
| Kanal zur Protokollierung von Mitglieder-Updates | <i>Nur sichtbar, wenn „Mitglieder-Updates“ aktiviert ist.</i><br/>Änderungen an Mitgliedern werden in diesem Kanal protokolliert. |
| Nachrichtenaktualisierungen | Wenn diese Option aktiviert ist, protokolliert der Bot Änderungen an der Nachricht (z. B. Bearbeitungen und Löschungen). |
| Kanal zur Protokollierung von Nachrichten-Änderungen | <i>Nur sichtbar, wenn „Nachrichtenaktualisierungen“ aktiviert ist.</i><br/>Änderungen an Nachrichten werden in diesem Kanal protokolliert. |
| Kanal zur Protokollierung von Nachrichtenlöschungen | <i>Nur sichtbar, wenn „Nachrichtenaktualisierungen“ aktiviert ist.</i><br/>Das Löschen von Nachrichten wird in diesem Kanal protokolliert. |
| Kanäle für Nachrichtenaktualisierungen ignorieren | <i>Nur sichtbar, wenn „Nachrichtenaktualisierungen“ aktiviert ist.</i><br/>Diese Kanäle und Kategorien sind von der Überwachung auf Nachrichtenbearbeitungen und -löschungen ausgeschlossen. |
| Gilden-Updates | Wenn diese Option aktiviert ist, protokolliert der Bot Änderungen auf Ihrem Server (z. B. Servereinstellungen und mehr). |
| Kanal zur Protokollierung von Gilden-Updates | <i>Nur sichtbar, wenn „Gilden-Updates“ aktiviert ist.</i><br/>Änderungen deines Servers werden in diesem Kanal protokolliert. |
| Emoji-Updates | Wenn aktiviert, protokolliert der Bot Änderungen an Emojis (und Stickern) Ihres Servers (wie das Hochladen, Löschen und Bearbeiten von Emojis). |
| Kanal zur Protokollierung von Emoji-Updates | <i>Nur sichtbar, wenn „Emoji-Updates“ aktiviert ist.</i><br/>Änderungen an Emojis Ihres Servers werden in diesem Kanal protokolliert. |
| Bots ignorieren | <i>Diese Funktion ist immer für Server ohne <a href="./../../../scnx/guilds/plans">PRO-Plan</a> aktiviert.</i><br/ >Wenn deaktiviert, dokumentiert der Bot von ihm selbst oder anderen Bots vorgenommene Änderungen – dies kann zu Spam im Log-Channel führen. |

## Fehlerbehebung {#troubleshooting}

Wenn Änderungen nicht protokolliert werden, stell bitte folgendes sicher

* Der Bot hat die Berechtigung, diese Änderungen anzuzeigen. Dies bedeutet normalerweise, dass der Bot die Berechtigungen „Audit-prokollo anzeigen“ benötigt, bei
* Nachrichtenaktualisierungen sind jedoch auch „Kanal anzeigen“ und „Nachrichtenverlauf anzeigen“ erforderlich.
* Der Bot verfügt über die erforderlichen Berechtigungen, um die Änderungen im konfigurierten Log-Kanal zu protokollieren: „Nachrichten senden“
  und „Kanal ansehen“.
* Der Bot kann keine Änderungen an gesendeten Nachrichten protokollieren, während er offline war.
* Die Änderung wird nicht von einem Bot durchgeführt oder „Bots ignorieren“ ist aktiviert.
* Die [Konfiguration](#Konfiguration) für diese bestimmte Änderung ist aktiviert und der richtige Kanal ist ausgewählt.
