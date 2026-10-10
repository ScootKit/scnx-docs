---
sidebar_position: 5
title: MCP Connector
description: Verbinde Claude oder ChatGPT mit SCNX, um Custom-Commands-v3-Flows für deinen Discord-Server zu erstellen, zu validieren, zu simulieren und zu debuggen.
---

# MCP Connector

SCNX betreibt einen Remote-[MCP](https://modelcontextprotocol.io)-Server unter `https://mcp.scnx.app`. Damit kann ein KI-Assistent wie Claude oder ChatGPT die Einrichtung deines Servers lesen und dir helfen, **Custom Commands v3 (CCV3)**-Flows zu bauen, zu testen und zu debuggen - die visuellen, flowbasierten Befehle, die sich derzeit in der Beta befinden.

Das ist für dich gedacht, wenn du bereits Custom Commands auf SCNX baust und einen Assistenten möchtest, der die genauen Aktionen und Trigger deines Bots nachschlagen, Flows für dich schreiben, sie auf Fehler prüfen, sicher ausführen und dir helfen kann herauszufinden, warum einer fehlgeschlagen ist - ohne dass du JSON hin- und herkopieren musst.

## Voraussetzungen {#requirements}

:::info Lies das zuerst
Der Connector verbindet und autorisiert sich auch, wenn diese Voraussetzungen nicht erfüllt sind, aber jedes Tool, das einen bestimmten Server betrifft, verweigert die Arbeit, bis sie erfüllt sind.
:::

- Du musst der **Eigentümer des Discord-Servers** sein oder ein **Trusted Admin** mit Berechtigungen, die dieselbe Hürde nehmen wie die Bot-Konfiguration im Dashboard (Bot-Administrator, Co-Owner oder die Berechtigung "Konfigurationen & Eigene Befehle ändern und neu laden" - siehe [Trusted Admins](/de/docs/scnx/guilds/trusted-admins#permissions)). SCNX prüft das bei jedem einzelnen Tool-Aufruf erneut, sodass der Server sofort aus der Verbindung fällt, wenn du mitten in der Sitzung den Zugriff verlierst.
- Auf dem Server muss der **Custom-Bot aktiviert** sein (siehe [Custom-Bot einrichten](/de/docs/custom-bot)) und sein **Bot muss online sein und laufen**. Serverbezogene Tools erreichen deinen Server über den Host-Prozess deines Bots - ist er offline, schlagen diese Aufrufe fehl.
- Du brauchst einen **eingeloggten SCNX-Account** (denselben wie auf [scnx.app](https://scnx.app)), um den Autorisierungsschritt unten abzuschließen.
- Du musst Teil des Custom Commands V3 Beta-Programms sein.

## Verbinden {#connecting}

Der Connector ist ein OAuth-2.1-Server, die Verbindung läuft also immer über deinen Browser - es gibt keinen API-Schlüssel zu kopieren. Der Ablauf ist in Claude und ChatGPT derselbe:

1. Füge einen benutzerdefinierten Connector hinzu und füge die Server-URL ein: **`https://mcp.scnx.app/mcp`**.
2. Dein Client öffnet einen Browser-Tab und leitet dich zum Login bei SCNX weiter (falls du nicht bereits eingeloggt bist).
3. Du landest auf der SCNX-Zustimmungsseite. Dort wählst du:
   - **Auf welche Server** zugegriffen werden darf, einzeln ausgewählt aus den Servern, für die du berechtigt bist.
   - **Nur lesen** oder **Lesen und ändern** - bei "Nur lesen" kann der Assistent alles ansehen, aber niemals etwas erstellen, bearbeiten, löschen, aktivieren oder schreiben; "Lesen und ändern" erlaubt zusätzlich die unten beschriebenen Schreib- und Speicher-Schreib-Tools.
   - **Wie lange der Zugriff gilt** - nach 30 Tagen, nach 90 Tagen, nach 1 Jahr oder nie (bis du ihn widerrufst).
4. Bestätige mit **Zugriff erlauben**. Dein Client erhält seine Tokens und der Connector wird als verbunden angezeigt.

Du kannst deine Entscheidung jederzeit ändern: Verbinde dich erneut, um mit anderen Servern, einer anderen Zugriffsart oder einem anderen Ablauf neu zu autorisieren, oder widerrufe den Zugriff in deinem SCNX-Account, um ihn sofort zu beenden.

### In Claude

Öffne **Settings → Connectors**, füge einen benutzerdefinierten Connector hinzu und füge `https://mcp.scnx.app/mcp` als Server-URL ein. Claude führt Discovery und Registrierung automatisch durch und öffnet dann den oben beschriebenen Zustimmungsablauf im Browser.

### In ChatGPT

Öffne **Settings → Connectors**, füge einen benutzerdefinierten Connector hinzu (dafür muss eventuell zuerst der Entwickler-/erweiterte Modus für benutzerdefinierte Connectors aktiviert werden) und füge `https://mcp.scnx.app/mcp` als Server-URL ein. ChatGPT führt denselben Discovery- und Zustimmungsablauf durch.

## Was er kann {#capabilities}

Jedes Tool ist für den Assistenten immer sichtbar; Schreib- und Speicher-Schreib-Tools verweigern bei einer Nur-Lesen-Verbindung erst beim Aufruf die Arbeit.

### Deine Einrichtung lesen

Schlage die Kanäle und Rollen deines Servers nach, die tatsächlichen Discord-Berechtigungen des Bots sowie das verbleibende Custom-Commands-Budget und das Deploy-/Aktivierungs-Kontingent (einschließlich des noch verfügbaren stündlichen Schreibbudgets) - nützliche Vorabprüfungen, bevor du etwas erstellst.

### Das Format lernen und den Katalog durchsuchen

Liste jede Aktion, jeden Trigger und jeden Parametertyp auf, die auf dem exakten Bot-Branch deines Servers verfügbar sind, und beschreibe sie. Durchsuche den Katalog per Stichwort und lies den eingebauten Authoring-Guide sowie eine Galerie echter, validierter Beispiel-Flows und -Module.

### Flows erstellen und validieren

Lies deine bestehenden Module, Flows und deren Konfigurationswerte, validiere dann einen Flow oder ein Moduldokument und erhalte strukturierte Fehler und Warnungen zurück - keine Vermutung, kein stilles Durchwinken. Du kannst außerdem eine ganze App - ein Modul samt aller Flows und Konfigurationswerte - als ein einzelnes Dokument lesen oder validieren.

### Sicher simulieren

Führe einen Flow als **erzwungenen Testlauf** aus: Der Assistent sieht einen strukturellen Schritt-für-Schritt-Ablauf dessen, was passieren würde, aber der Bot sendet, bearbeitet oder löscht auf Discord niemals tatsächlich etwas.

### Deployen (nur mit Lesen und ändern)

Erstelle, aktualisiere und lösche Module und Flows, setze die Konfigurationswerte eines Moduls und lade den Bot bei Bedarf neu. Eine ganze App (Modul, Flows und Konfigurationswerte) kann in einem Aufruf gespeichert werden, was unabhängig von der Anzahl der Flows nur ein einziges Deploy verbraucht. Jede Schreibaktion wird zuvor gesichert; der Assistent kann diese Snapshots auflisten und einen davon wiederherstellen, um eine Änderung rückgängig zu machen.

### Vergangene Ausführungen debuggen

Liste die letzten Ausführungen auf und rufe eine davon im Detail auf, um ihren strukturellen Ablauf und Fehlercode zu sehen und herauszufinden, warum ein Befehl in der Praxis fehlgeschlagen ist.

### Modulspeicher einsehen und ändern (Werte und Schreibzugriffe nur mit Lesen und ändern)

Prüfe, was in den Speicherfeldern eines Moduls liegt - standardmäßig strukturell (Feld, Größe, Anzahl der Datensätze), Rohwerte nur auf ausdrückliche Anfrage. Vorgeschlagene Speicheränderungen werden dir als wertfreier Diff angezeigt, bevor du sie übernimmst.

### Dokumentation und Marketplace lesen

Durchsuche die Dokumentation von SCNX und rufe eine Seite als Markdown ab, stöbere in den Changelogs und durchsuche Marketplace-Module. Das Installieren eines Marketplace-Moduls erfordert eine Verbindung mit Lesen und ändern, und ein installiertes Modul kommt immer ausgeschaltet an, sodass es sich nie automatisch aktiviert.

### Prüfen, ob du veröffentlichen kannst

Sieh nach, unter welchen Marketplace-Publisher-Organisationen dein Account veröffentlichen könnte, ob jede davon die Marketplace-Bedingungen akzeptiert hat und ob ein Support-Link hinterlegt ist - die Prüfung der Veröffentlichungsbereitschaft, die der Assistent durchführt, bevor er dir hilft, ein Modul auf den Marketplace zu bringen. Das ist das Einzige, was der Connector liest, das zu deinem SCNX-Account gehört statt zu einem von dir ausgewählten Server.

Der Assistent kann außerdem den eingebauten Veröffentlichungs-Guide lesen und die echten Veröffentlichungsprüfungen für ein Modul durchführen - erforderliche Listing-Angaben, Portabilität und die Voraussetzungen der Organisation - ohne etwas zu veröffentlichen. Die eigentliche Veröffentlichung findet immer im Dashboard statt.

## Was er bewusst nicht kann {#out-of-scope}

Der Connector ist auf Custom Commands v3 beschränkt - die Flows und Module, die du selbst mit `create-module` und `save-flow` baust. Er ist **keine** allgemeine Steuerungsoberfläche für SCNX. Er kann nicht:

- Eines der **eingebauten Module** des Bots konfigurieren (Levels, Willkommen, Moderation, Tickets und alle anderen) - diese werden im SCNX-Dashboard konfiguriert, nicht über diesen Connector.
- **Bot-Einstellungen** verwalten oder einen Bot starten bzw. stoppen.
- Einen **Bot-Token** ändern.
- **Modmail**, **Backups**, **Analytics** oder **Abrechnung** anfassen.

Wenn du ihn um eines davon bittest, sollte er dir klar sagen, dass er das noch nicht unterstützt, und dich auf das [SCNX-Dashboard](https://scnx.app) verweisen, statt einen Workaround mit den Flow-Tools zu versuchen.

## Sicherheitsmodell {#safety}

- **Nur lesen oder Lesen und ändern wird pro Verbindung durchgesetzt.** Eine Nur-Lesen-Verbindung kann kein Schreib- oder Speicher-Schreib-Tool aufrufen - jedes verweigert die Arbeit, bevor es einen Netzwerkaufruf macht.
- **Jede Schreibaktion wird zuerst gesichert**, ist also umkehrbar. Das Löschen oder Überschreiben eines Moduls oder Flows lässt sich rückgängig machen, indem der mit dieser Aktion zurückgegebene Snapshot wiederhergestellt wird.
- **Aktivierung ist freiwillig und kann abgelehnt werden.** Das Speichern oder Aktivieren eines Flows ist nur eine Anfrage. Ein Flow mit Validierungsfehlern, einem eindeutigen Missbrauchssignal oder einer Aktion der Kategorie "destruktiv" (ein Mitglied bannen, einen Kanal löschen, kicken, Mitglieder bereinigen und Ähnliches) wird stattdessen als **inaktiver Entwurf** gespeichert, anstatt live zu gehen, und muss von einem Menschen im Dashboard scharfgeschaltet werden.
- **Testläufe sind immer Simulationen.** `run-test` ist ein erzwungener Testlauf - er sendet, bearbeitet oder löscht auf Discord nie etwas, unabhängig davon, ob die Verbindung Nur lesen oder Lesen und ändern erlaubt.
- **Fast alles ist auf die von dir gewählten Server beschränkt.** Die einzige Ausnahme ist die Prüfung der Veröffentlichungsbereitschaft, die auf Account-Ebene arbeitet: Sie listet die Marketplace-Publisher-Organisationen auf, unter denen du veröffentlichen könntest, sowie deren Status bei Bedingungen und Support-Link. Sonst liest sie nichts über deinen Account.
- **Es werden niemals Discord-Nachrichten- oder Mitgliederinhalte zurückgegeben.** Ausführungsabläufe und Speicherinspektion sind standardmäßig strukturell. Ein Rohwert lässt sich nur mit `inspect-storage` und `includeValues: true` ansehen, was eine Verbindung mit Lesen und ändern erfordert und bei jeder Nutzung protokolliert wird.
