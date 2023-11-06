# Betterstatus

Gibt dir mehr Möglichkeiten, um deinen Status noch besser zu machen - ändere ihn, wenn jemand beitritt, ändere ihn alle
x Sekunden und mehr!

<ModuleOverview moduleName="betterstatus" />

## Funktionen {#features}

* Ändere den Status deines Bots zufällig alle paar Sekunden.
* Passe den Aktivitätentyp an (Spielt, Schaut, …).
* Passe den Onlinestatus deines Bots an (Bitte nicht stören, Online, Abwesend, …).
* Ändere den Status automatisch, wenn ein Nutzer beitritt, um ihn zu begrüßen.
* Füge einen eigenen Link zu einem Streamstatus hinzu.
* Füge eine Vielzahl von Parametern zu deinem Status hinzu.

## Einrichtung {#setup}

Wenn du nur einen Status haben willst, aber trotzdem andere Funktionen dieses Moduls nutzen willst (z. B. die Anpassung
des Onlinestatus), füge einfach nur einen möglichen Wert für das Intervall hinzu.

Um einen sich automatisch ändernden Botstatus einzurichten:

1. Öffne die [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=betterstatus%7Cconfig) und aktiviere das
   Intervall.
2. Füge mögliche Statuswerte in die Intervall-Statusliste hinzu. Du kannst die Parameter verwenden, die in deinem Dashboard
   angezeigt werden.
3. [Konfiguriere](#configuration) weitere Einstellungen des Moduls.
4. Lade die Konfiguration deines Bots neu und warte, dass das erste Intervall ausgelöst wird.

Um einen Status einzurichten, der automatisch gesetzt wird, wenn ein neuer Nutzer beitritt:

1. Öffne die [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=betterstatus%7Cconfig) und die Beitritts-
   Status-Funktionalität.
2. Gib den Wert ein, den der Bot als Status setzen soll, wenn ein neuer Nutzer beitritt.
3. [Konfiguriere](#configuration) weitere Einstellungen des Moduls.
4. Lade die Konfiguration deines Bots neu und warte, bis ein Mitglied beitritt.

## Verwendung {#usage}

* Nach [der Einrichtung](#setup) wird das Intervall den Status automatisch basierend auf deiner
  Statusintervall-[Konfiguration](#configuration) ändern. Es ist keine zusätzliche Eingabe erforderlich und dies geschieht automatisch.
* Nach [der Einrichtung](#setup) wird der Beitrittsstatus jedes Mal automatisch gesetzt, wenn ein neuer Nutzer deinem Server
  beitritt. Es ist keine zusätzliche Eingabe erforderlich und dies geschieht automatisch. Bitte beachte, dass dieser Status
  nicht automatisch entfernt wird.

Bitte beachte, dass Intervalle Beitritts-Status überschreiben. Das heißt, dass dein Bot regelmäßig einen zufälligen Status
anhand deiner [Konfiguration](#configuration) setzt, auch wenn gerade ein neues Mitglied beigetreten ist. In solchen Fällen
wird der Beitritts-Status überschrieben.

Der Status in der [eingebauten Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=bot%7Cconfig) wird
ignoriert, wenn dieses Modul verwendet wird.

Bitte beachte, dass eine zufällige Auswahl eines Wertes aus dem Feld "Intervall-Status" bedeuten kann, dass der gleiche Status
mehrmals hintereinander ausgewählt wird, was keine sichtbare Änderung des Status des Bots in Discord zur Folge hat.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du Beitritts- und Intervall-Status [einrichten](#setup) und ihr Aussehen in Discord
anpassen. Öffne sie in
deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=betterstatus%7Cconfig).

| Feld                        | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Intervall aktivieren?       | Wenn aktiviert ändert der Bot seinen Status auf Discord im festgelegten Intervall.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Intervallstatus             | *Nur sichtbar, wenn "Intervall aktivieren?" aktiviert ist*<br/>Der Bot wird regelmäßig automatisch einen dieser Werte auswählen und als seinen Status setzen. Du findest alle verfügbaren Parameter in deinem Dashboard.                                                                                                                                                                                                                                                                                            |
| Statusintervall             | *Nur sichtbar, wenn "Intervall aktivieren?" aktiviert ist*<br/>Der Bot wird seinen Status als einen zufälligen Wert des "Intervallstatus"-Felds anhand der Anzahl der Sekunden in diesem Feld setzen. Muss mehr als 10 sein.                                                                                                                                                                                                                                                                            |
| Aktivititätstyp               | Dies ist der von Discord für deinen Status verwendete Text. Hier sind einige Beispiele:<br/><ul><li><code>PLAYING</code>: **Spielt** deinen Statustext</li><li><code>WATCHING</code>: **Schaut** deinen Statustext</li><li><code>STREAMING</code>: **Streamt** deinen Statustext (dieser Wert unterstützt auch einen Watch-Link und ändert den Statusindikator zu lila)</li><li><code>COMPETING</code>: **Tritt an in** deinem Statustext</li><li><code>LISTENING</code>: **Hört** deinem Statustext **zu**</li></ul> |
| Botstatus                  | Dies ist, wie der Onlinestatus deines Bots in Discord angezeigt wird.<br/><ul><li><code>online</code>: Dein Bot wird auf "online" gestellt sein (grüner Statusindikator)</li><li><code>dnd</code>: Dein Bot wird auf "Bitte nicht stören" gestellt sein (roter Statusindikator)</li><li><code>idle</code>: Dein Bot wird auf "Abwesend" gestellt sein (gelber Statusindikator)</li></ul>                                                                                                                                                                   |
| Status bei Nutzerbeitritt ändern? | Wenn aktiviert ändert der Bot seinen Status zu einem eingestellten Wert, sobald ein neuer Nutzer deinem Discord beitritt.                                                                                                                                                                                                                                                                                                                                                                                          |
| Nutzerbeitritts-Status            | *Nur sichtbar, wenn "Status bei Nutzerbeitritt ändern?" aktiviert ist*<br/>Das ist der Wert, auf den der Bot seinen Status ändert, wenn ein Nutzer beitritt. Du findest alle verfügbaren Parameter in deinem Dashboard.                                                                                                                                                                                                                                                                                             |
| Streamlink              | *Funktioniert nur, wenn "Aktivititätstyp" auf "STREAMING" gesetzt ist*<br/>Wenn dein Link von Discord unterstützt wird (nur `twitch.tv`- und `youtube.com`-URLs werden unterstützt) haben Nutzer die Möglichkeit, einen Button in dem Profil deines Bots anzuklicken, um den Stream anzuschauen. Der verlinkte Streamer muss nicht online sein, damit der Button angezeigt wird.                                                                                                                                                                        |

## Fehlerbehebung {#troubleshooting}

* Dein Discord-Client könnte einige Werte zwischenspeichern. Warte ein paar Minuten und starte deinen Discord-Client neu.
* Wenn du Intervall-Status aktiviert hast, stelle sicher, dass du mindestens einen Wert zu den "Intervall-Status" in der
  <a href="#configuration">Konfigurationsoption</a> hinzugefügt hast.
* Wenn dein Streamlink fehlt, stelle sicher, dass er zu einem Kanal auf einer der folgenden Plattformen verlinkt:
  Twitch, YouTube
* Stelle sicher, dass du die richtigen Parameter in deiner Konfiguration verwendest.
* Stelle sicher, dass dein Beitritts-Status nicht von dem eingestellten Intervall überschrieben wurde - dies kann dazu
  führen, dass dein Beitritts-Status nicht angezeigt wird.
