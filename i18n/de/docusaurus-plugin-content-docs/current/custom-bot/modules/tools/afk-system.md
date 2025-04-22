# AFK-System

Erlaube Nutzern einen AFK-Status zu setzen, der anderen Nutzern automatisch mitgeteilt wird, wenn sie versuchen ihn/sie zu erreichen.

<ModuleOverview moduleName="afk-system" />

## Funktionen {#features}

* Nutzer können mit [`/afk start`](#commands) eine AFK-Sitzung starten und dabei einen (optionalen) Grund dafür angeben.
* Wenn ein Nutzer ein Mitglied, das aktuell AFK ist, erwähnt, wird der Bot dem Nutzer mitteilen, dass der erwähnte Nutzer nicht verfügbar ist. 
* AFK-Sitzungen werden automatisch beendet, wenn der AFK Nutzer eine Nachricht in einen beliebigen Kanal auf deinem Server sendet (sofern sie dies nicht zu Beginn der AFK-Sitzung deaktiviert haben).
* AFK-Sitzungen können manuell mit [`/afk end`](#commands) beendet werden.
* Während einer AFK-Sitzung fügt der Bot zum Namen des Nutzers ein `[AFK]` als Präfix hinzu.
* AFK-Informationsnachrichten [können angepasst werden](#configuration).

## Einrichtung {#setup}

1. Stelle sicher, dass der Bot die Berechtigungen "Kanal anzeigen", "Nachrichtenverlauf anzeigen" und "Nachrichten senden" in jedem Kanal hat, in welchem er auf Erwähnungen von Nutzern, die AFK sind, reagieren soll.
2. Stelle sicher, dass der Bot die Berechtigung hat, die Nicknames anderer Nutzer auf deinem Server zu verwalten.
3. Aktiviere das Modul - Nutzer können jetzt AFK-Sitzungs starten.
4. Optional, [passe die Informationsnachrichten an](#configuration).

## Nutzung {#usage}

Nutzer können eine AFK-Sitzung mit [`/afk start`](#commands) starten, optional kann hierbei ein Grund für ihre Abwesenheit angegeben werden und festelegt werden, 
ob die AFK-Sitzung automatisch beendet wird. Zu Beginn einer AFK-Sitzung wird der Bot dem Nickname des Nutzers `[AFK]` als Präfix anfügen und den aktuellen Nickname
des Nutzers speichern. Wenn ein Nutzer mit aktiver AFK-Sitzung erwähnt wird (entweder als @Erwähnung oder durch eine Antwort), sendet der Bot eine Nachricht um den
Nutzer darüber zu informieren, dass der erwähnte Nutzer aktuell nicht verfügbar ist.
Wenn der AFK Nutzer eine Nachricht auf deinem Server sendet (wenn er dies nicht deaktiviert hat) oder [`/afk end`](#commands) verwendet, wird die AFK-Sitzung
beendet und der Bot antwortet nicht mehr auf Erwähnungen des Nutzers.
Mit dem Ende der AFK-Sitzung wird der Bot den Nickname des Nutzers auf seinen vorherigen Nickname zurücksetzen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                                     | Beschreibung                                                                                                                                                                                                                                              |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/afk start [reason:<Grund für die Abwensenheit>] [auto-end:<Boolean>]` | Dieser Befehl startet eine neue AFK-Sitzung. Optional können Nutzer im `reason`-Parameter einen Grund dafür angeben. Sie können mit dem `auto-end`-Parameter auch das automatische Beenden der AFK-Sitzung deaktivieren. `auto-end` ist standardmäßig aktiviert. |
| `/afk end`                                                  | Beendet eine laufende AFK-Sitzung. Ist keine AFK-Sitzung aktiv, wird ein Fehler angezeigt.                                                                                                                                                              |

## Konfiguration {#configuration}

Bearbeite Informations- und Befehlantwortnachrichten in der
[Modulkonfigurationsdatei](https://scnx.app/de/glink?page=bot/configuration?query=afk&file=afk-system|config).

| Feld                            | Beschreibung                                                                                                                                                                               |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AFK-Sitzung erfolgreich beendet   | Diese Nachricht wird einem Nutzer angezeigt, wenn er seine AFK-Sitzung mit [`/afk end`](#commands) beendet.                                                                                      |
| AFK-Sitzung erfolgreich gestartet | Diese Nachricht wird einem Nutzer angezeigt, wenn er seine AFK-Sitzung mit [`/afk start`](#commands) startet.                                                                                  |
| Nutzer ist mit Begründung AFK          | Diese Nachricht wird gesendet, wenn ein Nutzer erwähnt wird, der aktuell AFK ist und zu Beginn der AFK-Sitzung eine Begründung angegeben hat.                                  |
| Nutzer ist ohne Begründung AFK       | Diese Nachricht wird gesendet, wenn ein Nutzer erwähnt wird, der aktuell AFK ist und zu Beginn der AFK-Sitzung keine Begründung angegeben hat.                              |
| AFK-Sitzung automatisch beendet  | Diese Nachricht wird gesendet, wenn ein Nutzer, der aktuell AFK ist und das automatische Ende der AFK-Sitzung nicht deaktiviert hat, eine Nachricht auf deinem Server schreibt. Dies beendet die AFK-Sitzung. |

## Fehlerbehebung {#troubleshooting}

* Wenn der Bot deinen Nickname nicht ändert, stelle sicher, dass du nicht der Eigentümer des Servers bist. Der Bot kann den Nickname des Eigentümers nicht bearbeiten, selbst wenn er eine höhere Rolle als der Eigentümer hat. Dies ist eine Beschränkung durch Discord.
* Wenn der Bot die AFK-Nachricht nicht sendet, stelle sicher, dass der Nutzer eine AFK-Sitzung gestartet hat und diese noch nicht beendet wurde.
* Wenn der Bot eine AFK-Sitzung nicht automatisch beendet, stelle sicher, dass `auto-end` nicht zu Beginn der AFK-Sitzung deaktiviert wurde.

## Gespeicherte Daten {#data-usage}

Über alle Nutzer mit laufender AFK-Sitzung werden die folgenden Daten gespeichert:

* Ihre eindeutige Discord Nutzer-Indentifikationsnummer.
* Der Grund ihrer Abwensenheit, wenn dieser mit dem `reason` Parameter im [`/afk start`](#commands) Befehl festgelegt wurde.
* Der aktuelle Nickname des Nutzers zu Beginn der AFK-Sitzung.
* Ob die AFK-Sitzung automatisch beendet werden soll, durch den `auto-end` Parameter im [`/afk start`](#commands) festgelegt.
* Metadata über den Eintrag (Zeitpunkt der Erstellung und der letzten Aktualisierung)

Mit dem Ende der AFK-Sitzung werden alle Daten gelöscht. Nutzer können ihre Sitzung mit dem Befehl [`/afk end`](#commands) beenden. Außerdem enden aktive Sitzungen automatisch,
wenn der Nutzer eine Nachricht auf deinem Server schreibt (sofern dies nicht beim Beginn der AFK-Sitzung deaktiviert wurde).
Um alle AFK-Sitzungen zu beenden und zu löschen, [lösche die Moduldatenbank](/docs/custom-bot/additional-features#reset-module-database).