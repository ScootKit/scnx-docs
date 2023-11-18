# Partner-Liste

Erstelle eine Liste mit allen Partnern deines Servers - nach Kategorie sortiert.

<ModuleOverview moduleName="partner-list" />

---

## Funktionen {#features}

Dieses Modul soll die Verwaltung von Partnerschaften mit anderen Discord-Servern vereinfachen.

* Erstelle stets eine aktuelle Embed-Liste von all deinen aktuellen Partnern.
* Erstelle benutzerdefinierte Kategorien, um deine Partnerschaften zu sortieren.
* Weise zu und entferne automatisch Rollen von Partnern.
* Sende deinen Partnern automatisch Benachrichtigungen über Änderungen ihres Partner-Status.

Hier ist ein Beispiel einer Partner-Liste (Du kannst das Erscheinungsbild anpassen):

![](@site/docs/assets/custom-bot/modules/partner-list/example.png)

## Einrichtung {#setup}

* Bitte [richte die Berechtigungen für Slash-Befehle](./../../slash-commands) ein, um deren unbefugte Nutzung zu verhindern.
* Konfiguriere anschließend die Partner-Liste:
    1. Erstelle einen Kanal, in den der Bot die Partner-Liste senden soll. Dieser Kanal muss leer sein, und der Bot muss über die Berechtigungen „Kanal anzeigen“, „Nachrichtenverlauf anzeigen“ und „Nachrichten senden“ verfügen.
        2. Öffne die [Modul-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=partner-list%7Cconfig)
       und [konfiguriere das Modul](#configuration).
    3. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen – der Bot sendet automatisch eine Partner-Liste.
    4. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen – der Bot sendet automatisch eine Partner-Liste.

## Verwendung {#usage}

* Um einen neuen Partner hinzuzufügen, verwende [`/partner add`](#commands).
* Um einen Partner zu bearbeiten, verwende [`/partner edit`](#commands).
* Um einen Partner zu löschen, verwende [`/partner delete`](#commands).
* Die Partner-Liste wird automatisch aktualisiert, es sind keine manuellen Aktionen erforderlich.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/partner add name:<Text> category:<Kategorie> owner:<Mitglied> invite-url:<Text>` | Erstellt einen neuen Partner. Du kannst einen beliebigen Text als Namen des Partners eingeben, eine beliebige URL als Einladungs-URL verlinken und eine Kategorie aus den [konfigurierten Kategorien] auswählen (#configuration). Wenn die Option aktiviert ist, wird eine Nachricht an den Partner gesendet. |
| `/partner edit id:<PartnerID> [name:<Text>] [category:<Kategorie>] [owner:<Mitglied>] [invite-url:<Text>] [staff:<Mitglied>]` | Bearbeitet einen vorhandenen Partner. Du kannst den Namen, die Einladungs-URL, den Besitzer, die Kategorie und das zugewiesenen Teammitglied aktualisieren – nur die von dir angegebenen Optionen werden aktualisiert. Du kannst entweder eine ID eines bestehenden Partners eingeben oder die automatische Vervollständigung nutzen, um den richtigen Partner auszuwählen. |
| `/partner delete id:<PartnerID>` | Löscht einen vorhandenen Partner. Du kannst entweder eine ID eines bestehenden Partners eingeben oder die automatische Vervollständigung nutzen, um den richtigen Partner auszuwählen. Gelöschte Partner können nicht wiederhergestellt werden. |

## Konfiguration {#configuration}

Mit dieser Konfigurationsdatei kannst du Benachrichtigungen für Partner einrichten, das Embed der Partner-Liste bearbeiten und vieles mehr. 
Öffne die Konfigurationsdatei in
deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=partner-list%7Cconfig).

| Feld | Beschreibung |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kanal | Dies ist der Kanal, in den die Partner-Liste gesendet wird. Wenn der Bot in der Vergangenheit bereits eine Nachricht gesendet hat, wird die neueste Nachricht in die Partnerliste aufgenommen. Wir empfehlen einen leeren Kanal. |
| Partner-Liste-Embed | Dies ist die Konfiguration der Partner-Liste. |
| Partner-Liste-Embed: Titel | Titel des Partner-Listen-Embeds. |
| Partner-Liste-Embed: Beschreibung | Beschreibung des Partner-Listen-Embeds. |
| Partner-Liste-Embed: Partner-String | Dies ist das Format eines Partners, der in dem Partner-Listen-Embed angezeigt wird. Verfügbare Parameter findest du im [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=partner-list%7Cconfig). |
| Partner-Liste-Embed: Farbe | Dies ist die Farbe der Partner-Listen-Embeds. Es muss eine [HEX-Farbe oder ein unterstützter Farbwert] sein (./../../additional-features#embed-colors). |
| Kategorien | Dies sind die Kategorien, denen Partner zugeordnet werden können. Jede Kategorie muss anders sein. Nur diese Kategorien können über Befehle ausgewählt werden. |
| Kategorie-Rollen | Dies sind die Rollen, die neuen Partnern zugewiesen und von gelöschten Partnern entfernt werden.<br />Erstes Feld: Kategoriename (Groß-/Kleinschreibung beachten)<br/>Zweites Feld: ID der Rolle |
| Partner-Benachrichtigung senden | Wenn diese Option aktiviert ist, wird den Partnern eine Nachricht gesendet, wenn sie hinzugefügt oder entfernt werden. |
| Partner-Willkommens-PN | <i>Nur sichtbar, wenn „Partner-Benachrichtigung senden“ aktiviert ist.</i><br/>Diese Nachricht wird an den Partner gesendet, wenn dieser hinzugefügt wird. |
| Partner-Entfernung-PN | <i>Nur sichtbar, wenn „Partner-Benachrichtigung senden“ aktiviert ist.</i><br/>Diese Nachricht wird an den Partner gesendet, wenn dieser entfernt wird. |
## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Die Partner-Liste wird nicht im konfigurierten Kanal angezeigt</summary>
    <ul>
        <li>Stelle sicher, dass der gewünschte Kanal leer ist.</li>
        <li>Stelle sicher, dass der Bot über die Berechtigungen „Kanal anzeigen“, „Nachrichten senden“ und „Nachrichtenverlauf anzeigen“ für den Kanal verfügt.</li>
        <li>Stelle sicher, dass keiner deiner Kategoriefelder leer ist.</li>
        <li>Stelle sicher, dass du in der Konfiguration einen <a href="./../../additional-features#embed-colors">richtigen Farbwert</a> angegeben hast.</li>
        <li>Starte deinen Bot neu.</li>
    </ul>
</details>

<details>
    <summary>Kann ich den ID-Counter neu starten?</summary>

    Nein. Die ID ist eine eindeutige Identifikationsnummer und kann nicht zurückgesetzt werden. Dies ist eine technische Einschränkung – du kannst den Parameter <code>%id%</code> aus deinem „partner-string“ unter „Partner-Liste-Embed“ in deiner <a href="https://scnx.app/de/glink?page=bot/configuration?file=partner-list%7Cconfig">Modulkonfiguration</a> entfernen, falls dich das stört.
</details>

## Gespeicherte Daten {#data-usage}

Über jeden über [Befehle](#commands) angelegten Partner werden folgende Daten gespeichert:

* Eine eindeutige ID, die den Datenbankeintrag identifiziert
* Der für diesen Partner angegebene Einladungslink
* Die Benutzer-ID des Nutzers, der den Partnereintrag erstellt
* Der angegebene Name des Partners
* Die angegebene Kategorie des Partners
* Metadaten zum Eintrag (Datum der Erstellung und letzten Aktualisierung)

Um gespeicherte Daten zu löschen, verwende [`/partner delete`](#commands)
oder [Moduldatenbank löschen](./../../additional-features#reset-module-database).