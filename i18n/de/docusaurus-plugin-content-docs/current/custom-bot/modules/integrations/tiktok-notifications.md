# TikTok-Benachrichtigungen

Sende eine Nachricht in einen Kanal, wenn ein TikTok-Creator ein neues TikTok veröffentlicht.

<ModuleOverview moduleName="tiktok-notifications" />

:::info
TikTok-Benachrichtigungen funktionieren nur für Creators, die ihr TikTok-Konto mit SCNX verbunden (beansprucht) haben. Wenn ein konfigurierter Creator sein Konto nicht verbunden hat, werden Benachrichtigungen für ihn pausiert und der Creator wird als Problem in deinem [Dashboard](/de/glink?page=bot/configuration?file=tiktok-notifications%7Cusers) aufgeführt, zusammen mit einem Link, über den der Creator sein Konto verbinden kann. Nicht verbundene Creators werden einmal pro Tag erneut überprüft, und Benachrichtigungen werden automatisch fortgesetzt, sobald das Konto verbunden wurde.
:::

## Funktionen {#features}

- Erhalte Benachrichtigungen in einem Discord-Kanal, wenn ein TikTok-Creator ein neues Video veröffentlicht.
- Überwache mehrere TikTok-Konten gleichzeitig, jeweils mit eigenem Benachrichtigungskanal und Nachrichtenformat.
- Passe die Benachrichtigungsnachricht mit Details wie Nutzername, Videotitel, Beschreibung, Hashtags, Thumbnail und URL an.

## Einrichtung {#setup}

1. Öffne die [Konfiguration der TikTok-Creators](/de/glink?page=bot/configuration?file=tiktok-notifications%7Cusers).
2. Klicke auf "Neues Element hinzufügen" und konfiguriere den TikTok-Nutzernamen und den Benachrichtigungskanal wie im [Konfigurationsabschnitt](#configuration) beschrieben.
3. Stelle sicher, dass der Bot im konfigurierten Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.
4. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nach der [Einrichtung](#setup) und [Konfiguration](#configuration) dieses Moduls sind keine weiteren Aktionen erforderlich. Der Bot prüft automatisch alle zwanzig Minuten auf neue TikToks von konfigurierten Konten. Wenn ein neues TikTok gefunden wird, wird die konfigurierte Benachrichtigungsnachricht in den angegebenen Discord-Kanal gesendet.

Nur TikToks, die innerhalb der letzten 24 Stunden veröffentlicht wurden, lösen Benachrichtigungen aus, ältere TikToks werden also nicht nachträglich gesendet.

Benachrichtigungen werden nur für Creators gesendet, die ihr TikTok-Konto mit SCNX verbunden haben. Wenn ein Creator sein Konto nicht verbunden hat, pausiert der Bot die Benachrichtigungen für ihn und meldet den Creator als Problem in deinem Dashboard, einschließlich eines Links, über den der Creator sein Konto verbinden kann. Nicht verbundene Creators werden einmal pro Tag erneut überprüft, und Benachrichtigungen werden automatisch fortgesetzt, sobald das Konto verbunden wurde.

## Konfiguration {#configuration}

Mit dieser Konfigurationsdatei kannst du TikTok-Konten einrichten, die auf neue Videos überwacht werden sollen. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=tiktok-notifications%7Cusers).

| Feld                          | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal                         | Der Discord-Kanal, in dem die Benachrichtigung gesendet werden soll.                                                                                                                                                                                                                                                                                                                                                                                                |
| TikTok-Nutzername             | Der @Handle des TikTok-Creators, von dem du Benachrichtigungen erhalten möchtest.                                                                                                                                                                                                                                                                                                                                                                                   |
| Erforderlicher Hashtag        | Sende nur Benachrichtigungen für Videos, die diesen Hashtag enthalten. Der Vergleich ist nicht case-sensitive und funktioniert mit oder ohne das `#`-Präfix. Leer lassen, um für jedes Video zu benachrichtigen.                                                                                                                                                                                                                                                    |
| Minimale Cliplänge (Sekunden) | Überspringe Videos, die kürzer als diese Anzahl an Sekunden sind. Auf 0 setzen, um den Filter zu deaktivieren. Videos ohne bekannte Dauer werden nie herausgefiltert.                                                                                                                                                                                                                                                                                               |
| Nachricht                     | Die Nachricht, die in den konfigurierten Kanal gesendet wird, wenn der Creator ein neues TikTok veröffentlicht. Unterstützt Embeds. Verfügbare Parameter sind unter anderem `%userName%` (TikTok-Nutzername), `%title%` (Videotitel), `%description%` (Videobeschreibung), `%hashtags%` (Video-Hashtags), `%url%` (Video-URL) und `%thumbnailUrl%` (Video-Thumbnail-URL, kann leer sein).<br/><i>Bitte überprüfe die verfügbaren Parameter in deinem Dashboard.</i> |

## Fehlerbehebung {#troubleshooting}

<details>
<summary>Benachrichtigungen werden nicht gesendet</summary>
<ul>
    <li>Stelle sicher, dass der TikTok-Nutzername korrekt geschrieben ist (mit oder ohne das <code>@</code>-Präfix).</li>
    <li>Überprüfe, ob das TikTok-Konto existiert und öffentlich zugänglich ist.</li>
    <li>Stelle sicher, dass der Creator sein TikTok-Konto mit SCNX verbunden hat. Für Creators, die ihr Konto nicht verbunden haben, werden Benachrichtigungen pausiert. Überprüfe dein Dashboard auf gemeldete Probleme und teile den bereitgestellten Link mit dem Creator.</li>
    <li>Stelle sicher, dass der Bot im Benachrichtigungskanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.</li>
    <li>Das Modul prüft alle zwanzig Minuten auf neue TikToks. Bitte warte den nächsten Prüfzyklus ab.</li>
    <li>Wenn ein TikTok-Konto nicht gefunden werden kann, wird es übersprungen, bis der Bot neu gestartet oder die Konfiguration neu geladen wird.</li>
</ul>
</details>

<details>
<summary>Ein Creator hat sein TikTok-Konto nicht verbunden</summary>
<ul>
    <li>Benachrichtigungen funktionieren nur für Creators, die ihr TikTok-Konto mit SCNX verbunden (beansprucht) haben.</li>
    <li>Wenn ein Creator sein Konto nicht verbunden hat, werden Benachrichtigungen für ihn pausiert und der Creator wird als Problem in deinem Dashboard gemeldet, zusammen mit einem Link, über den der Creator sein Konto verbinden kann.</li>
    <li>Teile diesen Link mit dem Creator, damit er sein TikTok-Konto verbinden kann.</li>
    <li>Nicht verbundene Creators werden einmal pro Tag erneut überprüft. Benachrichtigungen werden automatisch fortgesetzt, sobald das Konto verbunden wurde.</li>
</ul>
</details>

## Gespeicherte Daten {#data-usage}

Über jede gesendete Benachrichtigung werden die folgenden Daten gespeichert:

- Die TikTok-URL
- Die Discord-Nachrichten-ID der Benachrichtigung
- Die Discord-Kanal-ID, in der die Benachrichtigung gesendet wurde

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/docs/custom-bot/additional-features#reset-module-database).
