# Minecraft-Serverstatus

Zeige die Spielerzahl deines Minecraft-Servers in einem Kanal an und zeige deine MOTD und mehr in einer Nachricht.

<ModuleOverview moduleName="minecraft-status" />

## Funktionen {#features}

- Zeige die aktuelle Spielerzahl und den Status deines Minecraft-Servers im Namen eines Sprachkanals oder einer Kategorie an.
- Zeige detaillierte Serverinformationen (MOTD, Version, Spielerzahl) in einer sich automatisch aktualisierenden Embed-Nachricht an.
- Unterstützung für Java- und Bedrock-Server.
- Unterstützung für SRV-Records und eigene Ports.
- Anpassbare Online- und Offline-Statusnachrichten.
- Nutze den Platzhalter `%lastUpdated%` in den Online- und Offline-Statusnachrichten, um als relative Zeit anzuzeigen, wann der Status zuletzt geprüft wurde. Er funktioniert in der Beschreibung und in Feldwerten der Nachricht, aber nicht in Titeln oder Fußzeilen.

## Einrichtung {#setup}

1. Stelle sicher, dass dein Minecraft-Server von Rechenzentren aus erreichbar ist. Einige DDoS-Schutzanbieter (z. B. Cloudflare oder TCPShield) blockieren möglicherweise Statusabfragen aus Rechenzentren. In diesem Fall wird dein Server als offline angezeigt.
2. Öffne die [Konfiguration der Minecraft-Server](https://scnx.app/de/glink?page=bot/configuration?file=minecraft-status%7Cservers).
3. Klicke auf "Neuen Minecraft-Server hinzufügen" und konfiguriere ihn wie im [Konfigurationsabschnitt](#configuration) beschrieben. Wenn dein Server ein Bedrock-Server ist, gib die Server-Adresse zusammen mit dem Port an, zum Beispiel `play.example.com:19133`. Bedrock hat (anders als Java) keine SRV-Records. Ohne Port prüft der Bot daher Port 19132, und dein Server wird als offline angezeigt, wenn er einen anderen Port nutzt. Viele Hoster (zum Beispiel Aternos) vergeben für Bedrock-Server einen eigenen Port, den du im Panel oder in den Verbindungsinformationen des Hosters findest. Java-Server brauchen normalerweise keinen Port.
4. Wenn du die Statuskanal-Funktion nutzen möchtest, erstelle einen Sprachkanal oder eine Kategorie und stelle sicher, dass der Bot dort die Berechtigungen "Kanal ansehen" und "Kanal verwalten" hat.
5. Wenn du die Statusnachricht-Funktion nutzen möchtest, stelle sicher, dass der Bot im konfigurierten Textkanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.
6. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nach der [Einrichtung](#setup) und [Konfiguration](#configuration) dieses Moduls sind keine weiteren Aktionen erforderlich. Der Bot prüft automatisch alle 10 Minuten den Status deiner konfigurierten Minecraft-Server und aktualisiert die konfigurierten Kanäle und Nachrichten entsprechend.

- Wenn du die Funktion **Statuskanal** aktiviert hast, wird der Name des konfigurierten Sprachkanals oder der Kategorie aktualisiert und zeigt die aktuelle Spielerzahl oder eine Offline-Meldung an.
- Wenn du die Funktion **Statusnachricht** aktiviert hast, sendet der Bot eine Nachricht in den konfigurierten Textkanal und hält sie mit dem aktuellen Serverstatus auf dem neuesten Stand, einschließlich Spielerzahl, Version, MOTD und mehr. Die Nachricht wird nur bearbeitet, wenn sich etwas geändert hat.

Gut zu wissen:

- Ergebnisse können bis zu 15 Minuten alt sein, da SCNX sie zwischenspeichert.
- Ein Server wird erst als offline angezeigt, wenn zwei getrennte Prüfungen ihn beide als offline erkannt haben. Es kann daher bis zu etwa 40 Minuten dauern, bis ein Server, der offline gegangen ist, auch als offline angezeigt wird. Ein Server, der wieder online ist, wird innerhalb von etwa 25 Minuten angezeigt.
- Kann der Status nicht ermittelt werden (die Prüfung selbst ist fehlgeschlagen), behält der Bot den letzten Status bei, anstatt den Server als offline anzuzeigen.
- Die Statusprüfungen geben sich als aktuelle Minecraft-Version aus, sodass dein Server so antwortet, wie er es für einen aktuellen Client tun würde. Wenn dein Server oder ein Plugin je nach Minecraft-Version des Spielers eine andere MOTD oder einen anderen Versionstext anzeigt, zeigen die Statusnachricht und der Kanalname das, was ein aktueller Client sieht. Das kann sich von dem unterscheiden, was du mit einer älteren Version siehst.
- Server-Betreiber können der Statusprüfung durch SCNX widersprechen (Opt-out). Hat der Betreiber eines Servers widersprochen, wird sein Status nicht mehr aktualisiert. Wenn du einen Server betreibst und widersprechen möchtest, kannst du [hier eine Anfrage stellen](https://scnx.app/de/user/support/new?topic=cmuo8ox8b018211gx6lx0t2i0).

## Konfiguration {#configuration}

Mit dieser Konfigurationsdatei kannst du deine Minecraft-Server hinzufügen und konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=minecraft-status%7Cservers).

| Feld                                                 | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server-Adresse                                       | Die Adresse deines Minecraft-Servers: ein Hostname oder eine IPv4-Adresse, optional mit Port. SRV-Records werden unterstützt (Java). IPv6-Adressen, Hostnamen mit Nicht-ASCII-Zeichen und private oder lokale Netzwerkadressen werden nicht unterstützt. Erlaubte Ports sind 25565, 19132 und jeder Port ab 1024. Bedrock-Server brauchen meist den Port, zum Beispiel `play.example.com:19133`, da Bedrock keine SRV-Records hat. |
| Bedrock Server?                                      | Aktiviere dies, wenn dein Server ein Bedrock-Server statt eines Java-Servers ist. Bedrock-Server brauchen meist einen Port in der Server-Adresse.                                                                                                                                                                                                                                                                                  |
| Status im Namen eines Kanals anzeigen?               | Wenn aktiviert, kann ein Sprachkanal oder eine Kategorie genutzt werden, um den Serverstatus im Namen anzuzeigen.                                                                                                                                                                                                                                                                                                                  |
| Statuskanal                                          | Der Sprachkanal oder die Kategorie, deren Name auf den Serverstatus aktualisiert wird. Nur verfügbar, wenn die Statuskanal-Funktion aktiviert ist.                                                                                                                                                                                                                                                                                 |
| Offline-Status                                       | Der Kanalname, der angezeigt wird, wenn der Server nicht erreichbar ist. Nur verfügbar, wenn die Statuskanal-Funktion aktiviert ist.                                                                                                                                                                                                                                                                                               |
| Online-Status                                        | Der Kanalname, der angezeigt wird, wenn der Server erreichbar ist. Nur verfügbar, wenn die Statuskanal-Funktion aktiviert ist.<br/><i>Bitte überprüfe die verfügbaren Parameter in deinem Dashboard.</i>                                                                                                                                                                                                                           |
| Status in einer Nachricht anzeigen?                  | Wenn aktiviert, wird eine Nachricht gesendet und automatisch mit dem Serverstatus aktualisiert.                                                                                                                                                                                                                                                                                                                                    |
| Kanal, in welchem die Nachricht gesendet werden soll | Der Textkanal, in dem die Statusnachricht gesendet und automatisch aktualisiert wird. Nur verfügbar, wenn die Statusnachricht-Funktion aktiviert ist.                                                                                                                                                                                                                                                                              |
| Online Status-Nachricht                              | Die Nachricht, die angezeigt wird, wenn der Server online ist. Unterstützt Embeds. Nur verfügbar, wenn die Statusnachricht-Funktion aktiviert ist. Mit `%lastUpdated%` kannst du anzeigen, wann der Status zuletzt geprüft wurde.<br/><i>Bitte überprüfe die verfügbaren Parameter in deinem Dashboard.</i>                                                                                                                        |
| Offline Status-Nachricht                             | Die Nachricht, die angezeigt wird, wenn der Server nicht erreichbar ist. Unterstützt Embeds. Nur verfügbar, wenn die Statusnachricht-Funktion aktiviert ist. Mit `%lastUpdated%` kannst du anzeigen, wann der Status zuletzt geprüft wurde.<br/><i>Bitte überprüfe die verfügbaren Parameter in deinem Dashboard.</i>                                                                                                              |

## Fehlerbehebung {#troubleshooting}

<details>
<summary>Der Serverstatus wird nicht aktualisiert</summary>
<ul>
    <li>Überprüfe, ob die eingegebene Server-Adresse korrekt und erreichbar ist.</li>
    <li>Wenn dein Server als "Minecraft EULA verletzend" markiert wurde, wird er nicht unterstützt.</li>
    <li>Stelle sicher, dass der Bot die Berechtigung "Kanal verwalten" im konfigurierten Sprachkanal (für Kanalnamen-Updates) bzw. die Berechtigungen "Nachrichten senden" und "Links einbetten" im Textkanal (für Statusnachrichten) hat.</li>
    <li>Der Status wird alle 10 Minuten geprüft. Bitte warte den nächsten Prüfzyklus ab.</li>
    <li>Wird der Status nicht aktualisiert, behält der Bot den letzten Status bei und schreibt eine Meldung ins Bot-Log. Die Log-Meldungen bedeuten, dass der Status gerade nicht ermittelt werden konnte, dass die konfigurierte Adresse keine gültige Minecraft-Server-Adresse ist oder dass der Betreiber des Servers der Statusprüfung widersprochen hat.</li>
</ul>
</details>

<details>
<summary>Der Server wird als offline angezeigt, obwohl er online ist</summary>
<ul>
    <li>Ein DDoS-Schutz oder eine Firewall (z. B. Cloudflare oder TCPShield) blockiert möglicherweise Statusabfragen aus Rechenzentren. Stelle sicher, dass dein Server von Rechenzentren aus erreichbar ist.</li>
    <li>Dein Server beantwortet möglicherweise keine Statusanfragen.</li>
    <li>Überprüfe, ob die eingegebene Server-Adresse und der Port korrekt sind.</li>
    <li>Wenn dein Server ein Bedrock-Server ist und du den Port nicht zur Adresse hinzugefügt hast, ergänze ihn, zum Beispiel `play.example.com:19133`. Den Port findest du im Panel deines Hosters.</li>
    <li>Bitte warte die nächste Prüfung ab. Ein Server wird erst als offline angezeigt, wenn zwei Prüfungen ihn beide als offline erkannt haben, und es kann bis zu etwa 25 Minuten dauern, bis ein wieder erreichbarer Server als online angezeigt wird.</li>
</ul>
</details>

<details>
<summary>Die MOTD oder die Versionsangabe weicht von dem ab, was ich in Minecraft sehe</summary>
<ul>
    <li>Die Statusprüfungen geben sich als aktuelle Minecraft-Version aus. Wenn dein Server oder ein Plugin je nach Minecraft-Version des Spielers eine andere MOTD oder einen anderen Versionstext anzeigt, zeigt der Bot das, was ein aktueller Client sieht.</li>
    <li>Prüfe deine Plugins und Proxy-Einstellungen auf eine Option, die den Status abhängig von der Minecraft-Version des Clients ändert.</li>
</ul>
</details>

<details>
<summary>Der Kanalname ändert sich nicht</summary>
<ul>
    <li>Discord begrenzt die Häufigkeit von Kanalnamen-Änderungen. Es kann länger als erwartet dauern, bis die Änderung sichtbar wird.</li>
    <li>Stelle sicher, dass der Bot im konfigurierten Kanal die Berechtigungen "Kanal ansehen" und "Kanal verwalten" hat.</li>
    <li>Der Kanalname wird nur aktualisiert, wenn sich der neue Name vom aktuellen unterscheidet.</li>
</ul>
</details>

## Gespeicherte Daten {#data-usage}

Über jede Statusnachricht werden die folgenden Daten gespeichert:

- Die Kanal-ID in Kombination mit der Server-Adresse (wird als eindeutige Kennung verwendet)
- Die ID der vom Bot gesendeten Statusnachricht
- Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/docs/custom-bot/additional-features#reset-module-database).
