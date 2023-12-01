---
sidebar_position: 2
---

# Server Backups

Sichere Nachrichten, Kanäle, Rollen und mehr deines Server automatisch und stelle sie wieder her, sollte irgendetwas mal schiefgehen.

:::tip Deine Privatsphäre ist uns wichtig
Da Backups vertrauliche Nutzerinformationen und Nachrichten beinhalten, werden sie verschlüsselt gespeichert und nur während sie aktiv verwendet werden (z. B. während der Wiederherstellung) entschlüsselt. Trotzdem weisen wir dich darauf hin, möglichst keine Nachrichten, die private Daten enthalten (wie Kreditkartendaten, Sozialversicherungsnummern oder ähnliches), in Kanäle, die in Backups enthalten sind, zu senden.
:::

## Was ist in Backups enthalten? {#included}

| Funktion            | Beschreibung                                                                                                                                                     |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kanäle              | Backups werden jeden Kanal auf deinem Discord enthalten. Dies beinhalten: Kanalname, Kanalbeschreibung, Cooldown, Kanalberechtigungen und mehr                   |
| Rollen              | Backups werden jede Rolle auf deinem Discord enthalten. Gespeicherte Rollen-Daten beinhalten: Berechtigungen, Name, Farbe und mehr                               |
| Emojis              | Backups werden jedes Emoji auf deinem Discord enthalten. Dies Beinhaltet das Emoji-Bild an sich sowie den emoji-name. Sticker sind ggf. auch mit inbegriffen.    |
| Bans                | Backups werden jeden Ban auf deinem Discord enthalten. Jeder Ban beinhaltet den Grund und den gebannten Nutzer.                                                  |
| Mitglieder          | Backups werden beinhalten, welcher Nutzer welche Rolle zum Zeitpunkt der Backup-Erstellung hatte.<br/> **DIESE FUNKTION IST EVENTUELL NICHT FÜR ALLE VERFÜGBAR** |
| Servereinstellungen | Backups werden Server-Namen, -Icon, -Einstellungen (wie den AFK-Kanal), Auto-Moderations-Regeln und mehr beinhalten.                                             |

## Manuelle Backups {#manual}

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: true}} additionalDetails={{
    STARTER: 'Speicherung von bis zu 2 Backups gleichzeitig, jedes mit bis zu 10 Nachrichten pro Kanal',
    PRO: 'Speicherung von bis zu 10 Backups gleichzeitig, jedes mit bis zu 50 Nachrichten pro Kanal',
    ACTIVE_GUILD: 'Speicherung von bis zu 5 Backups gleichzeitig, jedes mit bis zu 20 Nachrichten pro Kanal'
}}/>

Um manuell Backups zu erstellen, öffne dein [Backup-Dashboard](https://scnx.app/de/glink?page=backups) im SCNX Dashboard. Klicke danach auf "Backup erstellen" und wähle, was [in deinem Backup enthalten sein soll](#included). Bestätige danach noch einmal dein Backup.
Das Erstellen eines Backups kann bis zu 15 Minuten dauern. Dies ist abhängig von der Anzahl der zu speichernden Nachrichten.

![](@site/docs/assets/scnx/guilds/backups/create.png)

Nach der Erstellung des Backups (dies kann eine Weile dauern) kannst du es in der Backup-Liste ansehen und verwalten. Folgende Optionen sind verfügbar:
* Backup wiederherstellen: Ermöglicht dir das Backup auf diesem oder einem anderen Server wiederherzustellen. Im Abschnitt [Backups wiederherstellen](#restore) kannst du mehr darüber erfahren.
* Server-Sperre deaktivieren / aktivieren: Erlaubt / Verbietet die Wiederherstellung deines Backups auf anderen Servern. Im Abschnitt [Backups auf anderen Servern wiederherstellen](#restore-other-server) kannst du mehr darüber erfahren.
* Backup löschen: Löscht das Backup dauerhaft von unseren Server. Diese Option ist endgültig und kann nicht rückgängig gemacht werden.
* Backup exportieren: Exportiert das Backup als JSON-Datei. Im Abschnitt [Backups wiederherstellen](#export) kannst du mehr darüber erfahren.

![](@site/docs/assets/scnx/guilds/backups/backup.png)


## Automatische Backups {#automatic}

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: false}}
                additionalDetails={{PRO: 'Zwei am Tag', ACTIVE_GUILD: 'Eines am Tag'}}/>

Um automatische Backups einzurichten, öffne dein [Backup-Dashboard](https://scnx.app/de/glink?page=backups) und wähle die Anzahl der zu erstellenden Backups unter "Automatische Backups" und speichere die Änderung.

![](@site/docs/assets/scnx/guilds/backups/automatic-backups.png)

Basierend auf deinen Einstellungen wird SCNX bis zu zwei Backups täglich erstellen. Dies passiert immer um die selbe Uhrzeit, genauer um 6:00 Uhr und 18:00 Uhr Mitteleuropäischer Zeit. Bitte beachte, dass die Sommerzeit ggf. die angezeigte Uhrzeit der Erstellung deines Backups beeinflussen kann.

Automatische Backups verwenden die Backup-Slots deines Servers. Wenn keine mehr verfügbar sind, wird das System automatisch das älteste Backup überschreiben. Deine manuellen Backups werden jedoch nie verändert. Sollten alle Backup-Slots von manuellen Backups verwendet werden, werden keine automatischen Backups erstellt.


## Backups wiederherstellen {#restore}
<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: true}}/>

### Wiederherstellung auf dem ursprünglichen Server {#restore-self}

Bevor du ein Backup wiederherstellst, passe bitte folgende Einstellungen an deinem Discord an:
* Schiebe die Rolle des (verifizierten) SCNX-Bots über alle anderen Rollen und gib ihr Administrator-Berechtigungen
* Deaktiviere die "Community"-Einstellung deines Servers in den Einstellungen (du kannst sie danach wieder aktivieren)
* Verstehe, dass dieser Vorgang alle Nachrichten, Kanäle und Rollen von deinem Server löscht

Um ein Backup auf deinem Server wiederherzustellen, öffne das [Backup-Dashboard](https://scnx.app/de/glink?page=backups) deines Servers und klicke auf das Backup, das du wiederherstellen möchtest. Als nächstes klicke auf "Backup wiederherstellen". Dir wird ein Befehl angezeigt werden. Kopiere ihn mit dem "Befehl kopieren" Knopf und füge ihn in deinem Server ein. Stelle sicher, dass du den Befehl mit dem (verifizierten) SCNX-Bot ausführst.

![](@site/docs/assets/scnx/guilds/backups/execute-command.png)

Bestätige als Nächstes deine Anfrage mit dem Knopf unter der Antwort in Discord.

:::danger
Die Bestätigung dieser Anfrage wird alle aktuellen Kanäle und Rollen deines Discors löschen und mit denen des Backups ersetzen.
:::

![](@site/docs/assets/scnx/guilds/backups/confirm.png)

Nach der Bestätigung beginnt der SCNX-Bot mit dem Löschen aller existierenden Kanäle und Rollen deines Servers. Sobald das erledigt ist, wird der SCNX-Bot anfangen, deine Daten wiederherzustellen. Das kann bis zu **20 Minuten** oder länger dauern. Sobald alles erledigt ist, erwähnt der SCNX-Bot-dich oder schreibt dir eine PN. Sollte irgendein Fehler auftreten, wird er das auch tun.

### Wiederherstellung auf anderen Servern {#restore-other-server}

:::tip
Der Server, auf dem du das Backup wiederherstellen möchtest, muss nicht zu SCNX hinzugefügt sein, aber der [SCNX-Bot muss eingeladen werden](https://sc-net.work/invite-scnx).
:::

Der Wiederherstellungsprozess ist größtenteils identisch zur [Wiederherstellung auf dem ursprünglichen Server](#restore-self) - selbst der verwendete Befehl bleibt gleich. Du musst allerdings die Server-Sperre auf deinem Server deaktivieren.

Die Server-Sperre ist ein Sicherheitsmechanismus für dein Backup: Wenn sie deaktiviert ist, kann jeder mit dem Backup-Code (der Befehl der im Dashboard angezeigt wird) das Backup auf jedem Server wiederherstellen. Zum Glück ist die Sperre standardmäßig aktiviert. Um sie zu deaktivieren, öffne das [Backup-Dashboard](https://scnx.app/de/glink?page=backups), wähle dein Backup und klicke auf "Server-Sperre deaktivieren".
![](@site/docs/assets/scnx/guilds/backups/disable-guild-lock.png)

Nachdem du die Server-Sperre deaktiviert hast, folge bitte den Anweisungen zur [Wiederherstellung auf dem ursprünglichen Server](#restore-self). Wir empfehlen dir nachdem du fertig bist, unbedingt die Server-Sperre wieder zu aktivieren - das funktioniert genauso wie das Deaktivieren.


## Behebung häufiger Fehler {#throubleshooting}

<details>
    <summary>
        Wenn ich ein Backup erstelle sehe ich die Nachricht "Backup planning failed: ADMINISTRATOR permission needed,
        but not granted"
    </summary>
    <li>Stelle sicher, dass der (verifizierte) SCNX-Bot die Administrator Berechtigung hat und versuche es erneut.</li>
</details>
<details>
    <summary>
        Wenn ich ein Backup erstelle sehe ich die Nachricht "Oh no, you got ratelimited"
    </summary>
    Um die sichere Durchführung aller Aktivitäten sicherzustellen, begrenzen wir die Zahl der manuellen Backups, die ein Server in einem bestimmten Zeitraum erstellen kann.
    <li>Bitte warte so lange, wie in der Nachricht angegeben.</li>
</details>
<details>
    <summary>
        Mein Backup wird im SCNX Dashboard als "Fehlgeschlagen" angezeigt
    </summary>
    <li>Stelle sicher, dass der (verifizierte) SCNX-Bot die Administrator Berechtigung hat und versuche es erneut.</li>
    <li>Kontaktiere bei wiederholtem Auftreten [unser Team](https://scnx.app/de/help). Dieses wird dich bei der Problemsuche unterstützen.</li>
</details>
<details>
    <summary>
        Beim Versuch, ein Backup wiederherzustellen, schreibt mir der SCNX-Bot "An error occurred when trying to restore your backup ):"
    </summary>
    <li>Stelle sicher, dass der (verifizierte) SCNX-Bot die Administrator Berechtigung hat und versuche es erneut.</li>
    <li>Stelle sicher, dass du die "Community"-Einstellung deaktiviert hast und versuche es erneut.</li>
    <li>Stelle sicher, dass die Rolle des (verifizierte) SCNX-Bots über allen anderen Rollen steht und versuche es erneut</li>
    <li>Kontaktiere bei wiederholtem Auftreten [unser Team](https://scnx.app/de/help). Dieses wird dich bei der Problemsuche unterstützen.</li>
</details>
<details>
    <summary>
        SCNX erstellt keine automatischen Backups auf deinem Server
    </summary>
    <li>Stelle sicher, dass der (verifizierte) SCNX-Bot die Administrator Berechtigung hat und versuche es erneut.</li>
    <li>Stelle sicher, dasss du [diese Funktion](#automatic) wirklich aktiviert hast und alle Änderungen gespeichert hast.</li>
    <li>Stelle sicher, dass mindestens ein Backup-Slot nicht von einem manuellen Backup verwendet wird.</li>
    <li>Bitte warte 24 Stunden, damit automatisch ein Backup erstellt wird</li>
</details>

## Backups exportieren {#export}

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: false, STARTER: false}}/>

Um ein Backup zu exportieren, öffne das [Backup-Dashboard](https://scnx.app/de/glink?page=backups), wähle dein Backup und klicke auf "Backup exportieren". Dein Browser wird - ggf. nach kurzer Ladedauer - anfangen, eine JSON-Datei auf deinen PC herunterzuladen.
Bevor du die Datei herunterlädst, überprüfe die berechnete Größe, um zu wissen wie viele Daten du herunterlädst.

Diese JSON-Datei wurde entwickelt, um gut mit [discord-backup](https://github.com/Androz2091/discord-backup) zu funktionieren, aber - da wir dieses System intern nicht verwenden - können wir dennoch keine problemfreie Verwendung garantieren.
Dennoch kann jeder mit entsprechendem technischen Wissen relativ einfach dein Backup aus der Datei wiederherstellen.
Die JSON-Datei enthält vertrauliche Informationen, wie Nachrichteninhalte. Teile sie nur mit Nutzern denen du vertraust.

Du kannst exportierte Backups nicht wieder in SCNX importieren.
