# Temporäre Channel

Ermögliche es Benutzern, schnell Sprachkanäle zu erstellen, indem sie einem Sprachkanal beitreten.

<ModuleOverview moduleName="temp-channels" />

## Funktionen {#features}

* Benutzer können einen persönlichen Sprachkanal erstellen, indem sie einem dafür vorgesehenen „Erstellungs"-Sprachkanal beitreten.
* Temporäre Sprachkanäle werden automatisch gelöscht, wenn alle Mitglieder sie verlassen (mit einer konfigurierbaren Verzögerung), oder optional archiviert und später wiederhergestellt.
* Erstelle optional neben jedem Sprachkanal einen „No-Mic“-Textkanal, der nur für Benutzer sichtbar ist, die sich gerade im Sprachkanal befinden.
* Kanalbesitzer können den Zugriffsmodus (öffentlich/privat) ändern, Benutzer hinzufügen oder entfernen und Kanaleinstellungen (Name, Bitrate, Benutzerlimit, NSFW) bearbeiten.
* Einstellungen können über Slash-Befehle, ein Einstellungsmenü mit Schaltflächen oder die integrierte Kanalbearbeitung von Discord verwaltet werden.
* Konfigurierbares Kanalnamenformat mit Unterstützung für Nutzername, Nickname, Tag und Kanalnummer.
* Sende optional eine Direktnachricht an Benutzer, wenn ihr temporärer Kanal erstellt wurde.
* Wenn ein Benutzer bereits über einen aktiven temporären Kanal verfügt, wird er beim Beitreten zum Erstellungskanal in seinen bestehenden Kanal verschoben, anstatt einen neuen zu erstellen.
* Begrenze optional die maximale Anzahl der gleichzeitig aktiven temporären Kanäle.
* Verwaiste oder leere Kanäle werden beim Bot-Start automatisch bereinigt.

## Einrichtung {#setup}

1. Erstelle einen Sprachkanal, dem Benutzer beitreten, um ihren temporären Kanal zu erstellen. Konfiguriere ihn in der [Modul-Konfiguration](#configuration).
2. Erstelle eine Kategorie, in der die temporären Kanäle erstellt werden, und konfiguriere diese in der Modul-Konfiguration.
3. Stelle sicher, dass der Bot sowohl im Erstellungskanal als auch in der Zielkategorie über die Berechtigungen `Kanal anzeigen`, `Kanäle verwalten`, `Mitglieder verschieben` und `Verbinden` verfügt.
4. Bei der Verwendung von „No-Mic“-Kanälen benötigt der Bot zusätzlich die Berechtigungen `Nachrichten senden`, `Links einbetten` und `Rollen verwalten` für die Kategorie.
5. Konfiguriere optional einen Einstellungskanal, in dem der Bot ein Einstellungsmenü mit Schaltflächen veröffentlicht, damit Benutzer ihre Kanäle verwalten können.

## Nutzung {#usage}

**Erstellen eines temporären Kanals**: Tritt dem konfigurierten Erstellungs-Sprachkanal bei. Der Bot erstellt daraufhin einen neuen Sprachkanal (und optional einen „No-Mic“-Textkanal) und verschiebt dich automatisch hinein.

**Verwalte deinen Kanal**: Während du dich in deinem temporären Kanal befindest, kannst du:

* Nutze `/temp-channel mode`, um zwischen öffentlichem und privatem Zugriff zu wechseln.
* Nutze `/temp-channel add-user`, um einem Benutzer Zugriff auf deinen privaten Kanal zu gewähren.
* Nutze `/temp-channel remove-user`, um einem Benutzer den Zugriff zu entziehen.
* Nutze `/temp-channel list-users`, um zu sehen, wer Zugriff hat.
* Nutze `/temp-channel edit`, um den Kanalnamen, die Bitrate, das Benutzerlimit oder die NSFW-Einstellung zu ändern.

Alternativ kannst du die tastenbasierte Benutzeroberfläche zur Verwaltung deines Kanals nutzen, sofern ein Einstellungskanal oder ein „No-Mic“-Kanal konfiguriert wurde.

**Löschen / Archivieren eines Kanals**: Wenn alle Mitglieder einen temporären Kanal verlassen, wird dieser nach dem konfigurierten Zeitlimit (Standard: 3 Sekunden) automatisch gelöscht. Falls die [Archivierung](#archiving) aktiviert ist, wird der Kanal stattdessen in eine versteckte Archiv-Kategorie verschoben und kann wiederhergestellt werden, sobald der Ersteller dem Erstellungskanal erneut beitritt.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
|---------|-------------|
| `/temp-channel mode public:<Boolean>` | Schalte deinen Kanal zwischen öffentlichem und privatem Modus um. Nur verfügbar, wenn die Option „Kanaländerungen erlauben“ aktiviert ist. |
| `/temp-channel add-user user:<User>` | Gewähre einem Benutzer Zugriff auf deinen temporären Kanal (relevant für private Kanäle). Nur verfügbar, wenn die Option „Kanaländerungen erlauben“ aktiviert ist. |
| `/temp-channel remove-user user:<User>` | Entziehe einem Benutzer den Zugriff auf deinen temporären Kanal. Nur verfügbar, wenn die Option „Kanaländerungen erlauben“ aktiviert ist. |
| `/temp-channel list-users` | Zeige eine Liste der Benutzer an, denen Zugriff auf deinen Kanal gewährt wurde. Nur verfügbar, wenn die Option „Kanaländerungen erlauben“ aktiviert ist. |
| `/temp-channel edit [user-limit:<Integer>] [bitrate:<Integer>] [name:<Text>] [nsfw:<Boolean>]` | Bearbeite die Einstellungen deines temporären Kanals. Nur verfügbar, wenn die Option „Kanaländerungen erlauben“ aktiviert ist. |

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Modul konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=temp-channels%7Cconfig).

| Feld | Beschreibung |
|-------|-------------|
| Kanal | Der Sprachkanal, dem Benutzer beitreten müssen, um einen neuen temporären Kanal zu erstellen. |
| Kanaländerungen erlauben | Falls aktiviert, können Kanalersteller den Namen und die Einstellungen ihres Sprachkanals über Befehle sowie die integrierten Discord-Menüs ändern. |
| Löschverzögerung | Die Anzahl der Sekunden, die der Bot wartet, nachdem alle Mitglieder den Kanal verlassen haben, bevor er den temporären Kanal löscht. |
| Kategorie | Die Kategorie, in der neue temporäre Kanäle erstellt werden. |
| Kanalname | Das Format für temporäre Kanalnamen. Unterstützt die Variablen `%username%`, `%nickname%`, `%number%` und `%tag%`. |
| No-Mic-Kanal erstellen | Falls aktiviert, wird neben jedem Sprachkanal ein Textkanal erstellt, der nur für Benutzer sichtbar ist, die sich aktuell im Sprachkanal befinden. |
| No-Mic-Kanal-Nachricht | Die Nachricht, die im „No-Mic“-Textkanal gesendet wird, wenn dieser erstellt wird. |
| PN senden | Falls aktiviert, sendet der Bot eine Direktnachricht an den Benutzer, wenn sein temporärer Kanal erstellt wurde. |
| Privatnachricht | Der Inhalt der Direktnachricht, die an Benutzer gesendet wird, wenn ihr Kanal erstellt wurde. |
| Öffentliche Channel | Falls aktiviert, werden die Berechtigungen neu erstellter Kanäle mit der Kategorie synchronisiert (wodurch sie für jeden sichtbar werden). |
| Umgehungsrollen für den privaten Modus | Rollen, die private temporäre Kanäle immer betreten und sehen können, unabhängig davon, wer sie erstellt hat. Nützlich für Teammitglieder oder Moderatoren-Rollen. |
| Kanaländerungen erlauben | Falls aktiviert, können Kanalersteller zwischen öffentlichem und privatem Modus wechseln und den Benutzerzugriff verwalten. |
| Einstellungskanal | Ein Textkanal, in dem der Bot ein Einstellungsmenü mit Schaltflächen zur Verwaltung temporärer Kanäle postet. Leer lassen zum Deaktivieren. |
| No-Mic-Channel für Einstellungen verwenden | Falls aktiviert, wird das Einstellungsmenü im „No-Mic“-Textkanal gesendet (oder im integrierten Discord-Textchat des Sprachkanals, falls „No-Mic“-Kanäle deaktiviert sind). |
| Einstellungsnachricht | Die im Einstellungsmenü angezeigte Nachricht. |
| Maximale aktive Kanäle | Die maximale Anzahl gleichzeitig aktiver (nicht archivierter) temporärer Kanäle. Auf `0` setzen für unbegrenzt. |
| Nachricht bei erreichtem Kanal-Limit | Die Nachricht, die per Direktnachricht an einen Benutzer gesendet wird, der versucht, einen Kanal zu erstellen, wenn das Limit erreicht ist. |
| Kanalarchivierung aktivieren | Falls aktiviert, werden Kanäle in eine versteckte Archiv-Kategorie verschoben, wenn alle Mitglieder sie verlassen, anstatt gelöscht zu werden. Der Kanal des Erstellers wird wiederhergestellt, sobald dieser dem Erstellungskanal erneut beitritt. |
| Archivkategorie | Die Kategorie, in die archivierte Kanäle verschoben werden. Diese Kategorie sollte für normale Benutzer ausgeblendet sein. |
| Archivierte Kanäle nach (Stunden) löschen | Wie lange ein archivierter Kanal aufbewahrt wird, bevor er dauerhaft gelöscht wird. Auf 180 setzen, um ihn nie automatisch zu löschen. Standard: 168 (7 Tage). |

### Kanalarchivierung {#archiving}

Wenn die Archivierung aktiviert ist, werden temporäre Kanäle nicht gelöscht, sobald alle Mitglieder sie verlassen. Stattdessen werden sie in eine konfigurierte Archiv-Kategorie verschoben und alle Berechtigungen werden entzogen. Wenn der ursprüngliche Ersteller dem Erstellungskanal erneut beitritt, wird sein archivierter Kanal wiederhergestellt (wobei der vorherige öffentliche/private Modus und die Liste der zugelassenen Benutzer erhalten bleiben), anstatt einen neuen Kanal zu erstellen.

Gemini hat gesagt

Archivierte Kanäle werden nach Ablauf der konfigurierten Dauer (Standard: 7 Tage) automatisch gelöscht. Dies wird durch eine stündliche Bereinigung durchgeführt.

Um die Archivierung einzurichten:
1. Erstelle eine Kategorie für archivierte Kanäle und verbirg sie vor normalen Benutzern.
2. Aktiviere „Archivierung aktivieren“ in der [Konfiguration](#configuration) und lege die Archivkategorie fest
3. Passe optional die Dauer für das automatische Löschen an.

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Temporäre Kanäle werden nicht erstellt</summary>
  <ul>
    <li>Stelle sicher, dass der Erstellungs-Sprachkanal und die Kategorie korrekt konfiguriert sind.</li>
    <li>Stelle sicher, dass der Bot in der Kategorie über die Berechtigungen <code>Kanäle verwalten</code>, <code>Mitglieder verschieben</code>, <code>Kanal anzeigenl</code>, und <code>Verbinden</code> verfügt.</li>
    <li>Prüfe, ob der Benutzer bereits einen aktiven temporären Kanal hat – in diesem Fall wird er stattdessen in seinen bestehenden Kanal verschoben.</li>
  </ul>
</details>

<details>
  <summary>Kanäle werden nicht gelöscht, wenn sie leer sind</summary>
  <ul>
    <li>Stelle sicher, dass der Bot über die Berechtigung <code>Kanäle verwalten</code> verfügt.</li>
    <li>Der Bot wartet den konfigurierten Timeout ab, bevor er einen Kanal löscht. Wenn innerhalb dieses Zeitfensters jemand beitritt, bleibt der Kanal erhalten.</li>
  </ul>
</details>

<details>
  <summary>No-Mic-Kanäle sind für die Mitglieder des Sprachkanals nicht sichtbar</summary>
  <ul>
    <li>Stelle sicher, dass der Bot in der Kategorie, in der Kanäle erstellt werden, über die Berechtigung <code>Rollen verwalten</code> verfügt.</li>
    <li>Stelle sicher, dass „No-Mic-Kanal erstellen“ in der Konfiguration aktiviert ist.</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden über jeden temporären Kanal gespeichert:

* Die Discord-Kanal-ID des temporären Sprachkanals
* Die Discord-Benutzer-ID des Kanal-Erstellers
* Die Discord-Kanal-ID des zugehörigen mikrofonlosen Textkanals (falls zutreffend)
* Die Liste der Benutzer mit Zugriff auf den Kanal
* Ob der Kanal öffentlich oder privat ist
* Ob der Kanal archiviert ist und wann er archiviert wurde (falls die Archivierung aktiviert ist)
* Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
