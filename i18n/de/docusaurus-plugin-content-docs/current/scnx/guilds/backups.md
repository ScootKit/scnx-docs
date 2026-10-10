---
sidebar_position: 2
---

# Server Backups

Sichere die Kanäle, Rollen, Einstellungen und mehr deines Servers und stelle sie wieder her, wenn etwas schiefgeht. Backups erstellt der eigene Bot deines Servers. Du musst also keinen weiteren Bot einladen.

:::tip Deine Privatsphäre ist uns wichtig
Dein Bot verschlüsselt jedes Backup, bevor es den Host deines Bots verlässt. Zusätzlich kannst du Backups mit einem Passwort schützen, das nur du kennst. Trotzdem: Bitte poste keine sensiblen Daten (wie Kartendaten oder Ausweisnummern) in Kanälen, die du sicherst.
:::

:::info
Früher hat der SCNX-Bot die Backups erstellt. Dieses System wurde eingestellt. Lies nach, [was mit den Backups vom SCNX-Bot passiert ist](#legacy).
:::

## Voraussetzungen {#requirements}

Dein Server kann Backups erstellen, wenn:

- **dein Server einen eigenen Bot auf SCNX hat.** Den SCNX-Bot brauchst du dafür nicht mehr.
- **dein Bot Version 3.25.1 oder neuer nutzt.** Starte deinen Bot neu, um die neueste Version zu installieren.
- **dein Bot auf einem Next-Gen-Host läuft.** Unsere älteren Hosts können noch keine Backups erstellen. Du kannst [deinen Bot auf einen Next-Gen-Host umziehen](/docs/scnx/guilds/bots#bot-host) oder warten, bis wir deinen aktuellen Host aktualisieren.
- **dein Bot online ist.** Backups und Wiederherstellungen laufen auf deinem Bot. Automatische Backups werden übersprungen, solange er offline ist.
- **dein Bot die Administrator-Berechtigung hat** und seine Rolle über allen anderen Rollen steht. Ohne sie fehlen Teile deines Servers im Backup, und Wiederherstellungen werden abgelehnt.

Wenn dein Bot noch keine Backups erstellt, zeigt dir die [Backup-Seite](https://scnx.app/de/glink?page=backups), woran das liegt und was du tun kannst.

Für manche Funktionen gelten zusätzliche Voraussetzungen:

| Funktion                                   | Voraussetzung                                                                                             |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Automatische Backups                       | Unser Unlimited-Plan oder höher, oder Backup+                                                             |
| Nachrichten sichern                        | Unser Unlimited-Plan oder höher, oder Backup+                                                             |
| Mitgliederrollen und offene Forum-Beiträge | Unser Professional-Plan oder Backup+                                                                      |
| Passwortschutz und Export                  | Unser Professional-Plan oder Backup+                                                                      |
| Mitgliederrollen                           | Ein Neustart deines Bots, nachdem du sie aktiviert hast. Manche Bot-Hosts unterstützen das nicht.         |
| Wiederherstellen und Exportieren           | Owner oder Co-Owner des Servers, mit Zwei-Faktor-Authentifizierung im SCNX-Konto                          |
| Auf einem anderen Server wiederherstellen  | Dir gehört der andere Server auf SCNX, und er hat einen eigenen Bot, der läuft und Backups erstellen kann |

## Was ist in einem Backup enthalten? {#included}

Diese Teile sind in jedem Plan in jedem Backup enthalten:

| Teil                | Was gespeichert wird                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Servereinstellungen | Name, Verifizierungsstufe, Benachrichtigungs- und Inhaltsfilter-Einstellungen, AFK-Kanal, System- und Regelkanal und mehr |
| Rollen              | Name, Farbe, Berechtigungen, Icon, Position und Anzeige-Einstellungen                                                     |
| Kanäle              | Jeder Kanal und jede Kategorie, mit Beschreibung, Slowmode, Berechtigungen, Sprach-Einstellungen und Forum-Tags           |
| Bilder              | Server-Icon, Banner und Einladungshintergrund, Emojis und Sticker                                                         |
| Server-Setup        | AutoMod-Regeln, Onboarding, Willkommensbildschirm und geplante Events                                                     |

Diese Teile kannst du zusätzlich sichern:

| Teil                  | Was gespeichert wird                                                                                  | Standard |
| --------------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| Bans                  | Jeder gebannte Nutzer und der Grund für den Ban                                                       | An       |
| Mitgliederrollen      | Welches Mitglied welche Rolle hat                                                                     | Aus      |
| Nachrichten           | Die neuesten Nachrichten in jedem Text- und Ankündigungskanal, mit Embeds und angepinnten Nachrichten | Aus      |
| Offene Forum-Beiträge | Die zuletzt aktiven Forum-Beiträge, die noch offen sind, mit ihren Nachrichten                        | Aus      |

Bans sind standardmäßig an. Ohne sie könnten gebannte Nutzer nach einer Wiederherstellung einfach zurückkommen.

Was du sichern kannst, wie viele Nachrichten gespeichert werden und wie viele Backups du behalten kannst, hängt von deinem Plan ab. Die [Backup-Seite](https://scnx.app/de/glink?page=backups) zeigt die Limits deines Servers unter **Deine Backup-Limits**. Teile, die dein Plan nicht enthält, stehen unter **Nicht in deinem Plan**.

Einiges wird nie gesichert: Spitznamen, Threads in Textkanälen, geschlossene (archivierte) Forum-Beiträge, Einladungen, Webhooks und Soundboard-Sounds. Anhänge in gespeicherten Nachrichten werden nur als Links gesichert. Nach einer Wiederherstellung funktionieren sie deshalb eventuell nicht mehr.

:::note Mitgliederrollen brauchen einen Neustart
Um Mitgliederrollen zu speichern, braucht dein Bot zusätzlichen Zugriff von Discord. Den kann er nur beim Start anfordern. Starte deinen Bot also neu, nachdem du Mitgliederrollen eingeschaltet hast. Manche Bot-Hosts unterstützen das nicht. Die Backup-Seite zeigt dir, wenn dein Bot keine Mitgliederrollen speichern kann.
:::

## Ein Backup erstellen {#manual}

1. Öffne die [Backup-Seite](https://scnx.app/de/glink?page=backups) und klicke auf **Backup erstellen**.
2. Wähle unter **Zusätzlich sichern** die optionalen Teile, die in dieses Backup sollen. Das gilt nur für dieses eine Backup.
3. Wähle unter **Verschlüsselung**, wie das Backup geschützt wird. Mehr dazu unter [Passwortschutz](#password).
4. Klicke auf **Backup erstellen**.

Dein Bot legt sofort los und läuft dabei ganz normal weiter. Auf einem großen Server sind zehn Minuten normal. Du kannst das Fenster schließen. Das Backup erscheint in deiner Liste, sobald es fertig ist.

Achte darauf, dass dein Bot die Administrator-Berechtigung hat. Ohne sie sieht er Teile deines Servers nicht, und diese Teile fehlen dann im Backup.

Jedes Backup in deiner Liste zeigt, wann es erstellt wurde, wie groß es ist, wie es verschlüsselt ist, wann es abläuft und was es enthält. Dort kannst du es mit **Backup wiederherstellen**, **Backup exportieren** oder **Backup löschen** verwalten. Wenn du ein Backup löschst, wird sein Platz sofort frei. Dein Server bleibt davon unberührt.

## Automatische Backups {#automatic}

Automatische Backups sind standardmäßig aus. Um sie einzuschalten, öffne die [Backup-Seite](https://scnx.app/de/glink?page=backups), aktiviere **Backups automatisch erstellen** und speichere. Unter **Zusätzlich in jedem Backup** wählst du die optionalen Teile für deine automatischen Backups.

- **Wann sie laufen:** SCNX verteilt die Backups über den Tag. Du wählst, wie viele Backups dein Bot pro Tag erstellt, bis zum Maximum deines Plans. Die Uhrzeiten kannst du nicht festlegen. Das erste Backup läuft innerhalb von 24 Stunden.
- **Wo sie liegen:** Jedes automatische Backup belegt einen Platz. Sind alle Plätze voll, ersetzt das neue automatische Backup das älteste automatische Backup. Deine manuellen Backups werden nie ersetzt. Belegen manuelle Backups alle Plätze, pausieren automatische Backups, bis du eines löschst. Je mehr Backups du pro Tag erstellst, desto schneller werden ältere ersetzt.
- **Wenn dein Bot offline ist:** Dieses Backup wird übersprungen und nicht nachgeholt.
- **Verschlüsselung:** Automatische Backups verwenden immer den Schlüssel deines Servers, nie ein Passwort.

Unter **Letzte automatische Backups** siehst du, ob die letzten Durchläufe geklappt haben, fehlgeschlagen sind oder übersprungen wurden.

Unser Starter-Plan enthält keine automatischen Backups, außer dein Server hat Backup+.

## Wie lange Backups aufbewahrt werden {#expiry}

Backups laufen ein Jahr nach ihrer Erstellung ab. Die Backup-Seite zeigt bei jedem Backup das Ablaufdatum. Eine Woche vorher bekommst du eine Benachrichtigung. Erstelle vorher ein neues Backup, wenn du eine aktuelle Kopie behalten willst.

Wechselt dein Server zu einem Plan mit weniger Backup-Plätzen, wird kein Backup gelöscht. Du kannst nur keine neuen erstellen, bis du unter deinem neuen Limit bist.

## Passwortschutz {#password}

Wenn du ein Backup von Hand erstellst, kannst du wählen, wie es verschlüsselt wird:

- **Schlüssel meines Servers verwenden:** Die Standardeinstellung. Du kannst das Backup ohne Passwort wiederherstellen und exportieren.
- **Generiertes Passwort verwenden (empfohlen):** SCNX erzeugt ein starkes Passwort und zeigt es dir einmal an. Kopiere es und bewahre es sicher auf.
- **Eigenes Passwort verwenden:** Wähle ein langes Passwort, das nicht leicht zu erraten ist.

:::danger Verlorene Passwörter lassen sich nicht wiederherstellen
SCNX speichert dein Backup-Passwort nie. Wenn du es verlierst, kann das Backup nie mehr geöffnet, wiederhergestellt oder exportiert werden. Auch unser Team kann es nicht öffnen.
:::

Für den Passwortschutz brauchst du unseren Professional-Plan oder Backup+.

## Ein Backup wiederherstellen {#restore}

Nur der Server-Owner und Co-Owner können Backups wiederherstellen. Weil eine Wiederherstellung deinen laufenden Server verändern kann, brauchst du [Zwei-Faktor-Authentifizierung](/docs/scnx/account-and-billing/account-security) für dein SCNX-Konto. Vor jeder Wiederherstellung musst du außerdem deine Identität bestätigen. Wenn du die Zwei-Faktor-Authentifizierung noch nicht eingerichtet hast, kannst du das direkt im Wiederherstellungs-Dialog tun.

Gib deinem Bot vorher die Administrator-Berechtigung und schiebe seine Rolle über alle anderen Rollen. Rollen, die über seiner eigenen stehen, kann dein Bot nicht ändern.

### Auf demselben Server wiederherstellen {#restore-self}

1. Öffne die [Backup-Seite](https://scnx.app/de/glink?page=backups) und klicke beim gewünschten Backup auf **Backup wiederherstellen**.
2. **Wähle, was wiederhergestellt wird.** Für jeden Teil des Backups hast du drei Möglichkeiten:
   - **Nur Fehlendes hinzufügen** (Standard): Fügt alles aus dem Backup hinzu, was auf deinem Server nicht mehr da ist. Es wird nichts gelöscht.
   - **Alles in diesem Bereich ersetzen**: Bringt diesen Teil deines Servers auf den Stand des Backups. Alles, was nicht im Backup ist, wird gelöscht.
   - **Bereich überspringen**: Lässt diesen Teil deines Servers, wie er ist.
3. **Prüfe deine Änderungen.** Noch hat sich nichts geändert. Der Dialog zeigt dir, was deine Auswahl bewirkt.
4. **Bestätige.** Wenn du etwas ersetzen willst, gib zur Bestätigung den genauen Namen deines Servers ein. Klicke dann auf **Backup wiederherstellen**.

Ist das Backup mit einem Passwort geschützt, wirst du vor dem Start danach gefragt.

:::danger
**Alles in diesem Bereich ersetzen** löscht Dinge auf deinem Server, die sich nicht zurückholen lassen. Wenn du Kanäle ersetzt, werden die aktuellen Kanäle gelöscht, samt ihrer Nachrichten. Wenn du unsicher bist, nimm **Nur Fehlendes hinzufügen**.
:::

Einiges wird nie gelöscht, egal was du wählst: die eigene Rolle deines Bots, Rollen darüber, Rollen anderer Bots und @everyone. Bans werden nie aufgehoben. Mitgliederrollen bekommen nur Mitglieder, die zum Zeitpunkt der Wiederherstellung auf deinem Server sind.

Gespeicherte Nachrichten und Forum-Beiträge postet dein Bot erneut, mit dem Namen und Bild des ursprünglichen Autors. Stellst du Nachrichten zweimal wieder her, erscheinen sie auch zweimal.

Du kannst den Fortschritt im Dashboard verfolgen und die Wiederherstellung jederzeit stoppen. Was bis dahin geändert wurde, bleibt bestehen. Ist die Wiederherstellung fertig, bekommst du einen **Bericht zur Wiederherstellung**. Er listet auf, was erstellt, aktualisiert, gelöscht, behalten wurde oder fehlgeschlagen ist, und warum etwas unverändert blieb. Heb ihn gut auf, denn Änderungen auf Discord lassen sich nicht rückgängig machen.

### Auf einem anderen Server wiederherstellen {#restore-other-server}

Wähle im ersten Schritt des Wiederherstellungs-Dialogs **Auf einem anderen Server wiederherstellen** und such dir den Server aus. Du kannst auf jedem Server wiederherstellen, der dir auf SCNX gehört. Er braucht nur einen eigenen Bot, der läuft und Backups erstellt. Server, die nicht in Frage kommen, werden mit dem Grund angezeigt.

Der Rest funktioniert genauso wie beim [Wiederherstellen auf demselben Server](#restore-self).

## Ein Backup exportieren {#export}

Klicke bei einem Backup auf **Backup exportieren**, um es als JSON-Datei herunterzuladen. Ist das Backup mit einem Passwort geschützt, wirst du danach gefragt. Die Datei enthält dein Backup in lesbarer Form, auch den Inhalt von Nachrichten. Teile sie also nur mit Leuten, denen du vertraust.

- Nur der Server-Owner und Co-Owner können Backups exportieren. Du brauchst dafür Zwei-Faktor-Authentifizierung.
- Für den Export brauchst du unseren Professional-Plan oder Backup+.
- Bilder wie Emojis und das Server-Icon sind nicht in der Datei enthalten.
- Ein exportiertes Backup kannst du nicht wieder in SCNX importieren.

## Backups vom SCNX-Bot {#legacy}

Bevor Backups auf deinen eigenen Bot umgezogen sind, hat sie der SCNX-Bot erstellt. Dieses System wurde eingestellt:

- **Der SCNX-Bot erstellt keine Backups mehr.** Weder manuelle noch automatische. Damit dein Server weiter gesichert wird, sorg dafür, dass dein Bot die [Voraussetzungen](#requirements) erfüllt.
- **Deine bisherigen Backups vom SCNX-Bot bleiben erhalten.** Du findest sie auf der Backup-Seite unter **Backups vom SCNX-Bot**. Sie zählen nicht zu deinen Backup-Plätzen.
- **Sie werden nicht umgewandelt.** Alte Backups bleiben im alten Format. Du kannst sie nicht wie neue Backups im Dashboard wiederherstellen oder exportieren, sondern nur mit dem SCNX-Bot.
- **Backup+ bleibt dir erhalten.** Hat dein Server Backup+ aus einem früheren Abo oder einer Freischaltung, bekommt er im neuen System alles, was Backup+ umfasst.

Mit diesen älteren Backups kannst du Folgendes tun:

- **Wiederherstellen** mit `/restore-backup` in Discord. Nutze auf der Backup-Seite **Wiederherstellungsbefehl kopieren** und führe den Befehl mit dem SCNX-Bot auf deinem Server aus. Das kann nur der Owner des Discord-Servers, und der SCNX-Bot braucht die Administrator-Berechtigung. Diese Wiederherstellung löscht zuerst alle Kanäle, Rollen und Nachrichten auf deinem Server.
- **In anderen Servern erlauben**, um das Backup auf einem anderen Server wiederherzustellen. Stell es danach mit **Auf diesen Server beschränken** wieder zurück. Solange es erlaubt ist, kann jeder mit dem Backup-Code es wiederherstellen.
- **Herunterladen**, wenn dein Server Backup+ hat.
- **Löschen**.

## Wer Backups verwalten kann {#permissions}

Der Server-Owner und Co-Owner können alles. Mit der Berechtigung **Verwalte Backups** kannst du [Trusted Admins](/docs/scnx/guilds/trusted-admins) erlauben, Backups zu erstellen und zu löschen und die Einstellungen für automatische Backups zu ändern. Wiederherstellen und Exportieren bleiben immer dem Server-Owner und Co-Ownern vorbehalten.

## Deinen Bot oder Server löschen {#deletion}

- **Wenn du deinen Bot löschst**, wird der Schlüssel deines Servers zerstört. Alle Backups, die mit diesem Schlüssel verschlüsselt sind, werden ebenfalls gelöscht. Backups mit deinem eigenen Passwort bleiben erhalten. Ein neuer Bot erzeugt einen neuen Schlüssel und kann die alten Backups nicht zurückholen. Exportiere also vorher alles, was du behalten willst.
- **Wenn du deinen Server von SCNX löschst**, werden alle seine Backups gelöscht, auch die mit Passwort.

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Die Seite zeigt "Für diesen Server werden gerade keine neuen Backups erstellt"</summary>
    <ul>
        <li>Dein Bot erstellt noch keine Backups. Die Zeile unter der Meldung sagt dir, warum.</li>
        <li>Ist dein Bot zu alt, starte ihn neu, um die neueste Version zu installieren.</li>
        <li>Läuft dein Bot auf einem unserer älteren Hosts, klicke auf <b>Zu einem Next-Gen-Host wechseln</b> oder warte, bis wir deinen aktuellen Host upgraden.</li>
        <li>Ist dein Bot gestoppt, starte ihn im Dashboard deines Bots.</li>
    </ul>
</details>
<details>
    <summary>"Dein Bot hat nicht geantwortet" oder "Dein Bot hat die Backup-Einstellungen für diesen Server noch nicht geladen"</summary>
    <ul>
        <li>Prüfe im Dashboard deines Bots, ob er online ist.</li>
        <li>Starte deinen Bot neu und versuch es noch einmal. Das ist nötig, nachdem sich dein Plan geändert hat.</li>
    </ul>
</details>
<details>
    <summary>Ein Teil meines Servers fehlt in einem Backup</summary>
    <ul>
        <li>Öffne beim Backup <b>Inhalt dieses Backups</b>. Teile, die fehlen, sind mit <b>Nicht enthalten</b> und dem Grund markiert.</li>
        <li>Gib deinem Bot die Administrator-Berechtigung und schiebe seine Rolle über alle anderen Rollen.</li>
        <li>Für Mitgliederrollen schalte sie in deinen Backup-Einstellungen ein und starte deinen Bot neu.</li>
    </ul>
</details>
<details>
    <summary>"Dieses Backup ist größer, als dein Plan erlaubt" oder "Dein Bot hat nicht genug freien Speicherplatz für dieses Backup"</summary>
    <ul>
        <li>Lass Nachrichten und Forum-Beiträge weg und versuch es noch einmal.</li>
        <li>Liegt es am Speicherplatz, gib im Dashboard deines Bots Platz frei.</li>
    </ul>
</details>
<details>
    <summary>Ich kann kein neues Backup erstellen, weil alle Plätze belegt sind</summary>
    <ul>
        <li>Lösche ein Backup, das du nicht mehr brauchst. Der Platz wird sofort frei.</li>
    </ul>
</details>
<details>
    <summary>Es werden keine automatischen Backups erstellt</summary>
    <ul>
        <li>Prüfe, ob <b>Backups automatisch erstellen</b> eingeschaltet und gespeichert ist.</li>
        <li>Prüfe, ob du mindestens einen freien Backup-Platz hast.</li>
        <li>Prüfe, ob dein Bot online ist. Solange er offline ist, werden Backups übersprungen.</li>
        <li>Unter <b>Letzte automatische Backups</b> siehst du, was mit jedem Durchlauf passiert ist.</li>
    </ul>
</details>
<details>
    <summary>Bei einer Wiederherstellung sind einige Einträge fehlgeschlagen</summary>
    <ul>
        <li>Gib deinem Bot die Administrator-Berechtigung und schiebe seine Rolle über alle anderen Rollen.</li>
        <li>Starte die Wiederherstellung noch einmal mit <b>Nur Fehlendes hinzufügen</b>. Dabei wird nur ergänzt, was noch fehlt.</li>
    </ul>
</details>
<details>
    <summary>Ich sehe "Zu viele Anfragen"</summary>
    <ul>
        <li>Die Zahl der Backups und Wiederherstellungen pro Stunde ist begrenzt. Warte ein paar Minuten und versuch es dann noch einmal.</li>
    </ul>
</details>
<details>
    <summary>Ich sehe "Unser Backup-Speicher ist gerade nicht erreichbar"</summary>
    <ul>
        <li>Deine Backups sind sicher. Bis der Speicher wieder erreichbar ist, kannst du keine Backups erstellen, herunterladen, wiederherstellen oder löschen. Das dauert meist nur ein paar Minuten.</li>
    </ul>
</details>
<details>
    <summary>Ich sehe "Dieser Server hat keinen Backup-Schlüssel"</summary>
    <ul>
        <li>Bitte <a href="https://scnx.app/de/help">kontaktiere unser Team</a>, wir beheben das für dich.</li>
    </ul>
</details>
