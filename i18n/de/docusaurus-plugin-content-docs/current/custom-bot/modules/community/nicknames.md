# Rollen-Nicknamen

Einfaches Modul zum Bearbeiten von Benutzer-Nicknamen basierend auf Rollen.


<ModuleOverview moduleName="nicknames" />

## Funktionen {#features}

* Füge Mitgliedern automatisch Präfixe und/oder Suffixe zu ihren Nicknames hinzu, basierend auf ihren Rollen.
* Unterstützt mehrere Rollen mit verschiedenen Präfixen und Suffixen – die hierarchisch höchste Rolle hat Priorität.
* Nicknames werden automatisch aktualisiert, wenn sich die Rollen oder der Nickname eines Mitglieds ändern.
* Alle vorhandenen Mitglieder werden beim Start des Bots umbenannt.
* Optionale Erzwingung von Anzeigenamen anstelle von benutzerdefinierten Nicknames.

## Einrichtung {#setup}

1. Stelle sicher, dass der Bot über die Berechtigung `Nicknames verwalten` verfügt.
2. Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie des Servers über den Rollen der Mitglieder platziert ist, deren Nicknames geändert werden sollen. Beachte, dass der Nickname des Serverbesitzers nicht geändert werden kann.
3. Konfiguriere Rollenpräfixe und -suffixe in der [Rollen-Konfiguration](#configuration-strings).

## Nutzung {#usage}

Dieses Modul funktioniert automatisch – es gibt keine Befehle. Wenn sich die Rollen oder der Nickname eines Mitglieds ändern, wendet der Bot automatisch das entsprechende Präfix und/oder Suffix an, basierend auf der höchsten übereinstimmenden Rolle.

Das Modul wertet Rollen von der höchsten bis zur niedrigsten Position in der Rollenhierarchie aus. Die erste gefundene übereinstimmende Rollenkonfiguration wird angewendet. Wenn ein Mitglied keine übereinstimmenden Rollen hat, bleibt sein Nickname unverändert (wobei vorhandene Präfixe/Suffixe von zuvor passenden Rollen entfernt werden).

Gemini hat gesagt

Beim Start scannt der Bot alle vorhandenen Mitglieder und wendet die korrekten Präfixe und Suffixe an.

## Konfiguration {#configuration}

Dieses Modul verfügt über mehrere Konfigurationsdateien. Bitte überprüfe diese unten.

### Modul-Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du die Funktionalität dieses Moduls konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=nicknames%7Cconfigs%2Fconfig).

| Feld | Beschreibung |
|-------|-------------|
| Anzeigenamen erzwingen | Falls aktiviert, verwendet der Bot den Anzeigenamen des Benutzers anstelle seines benutzerdefinierten Server-Nicknames als Basisnamen für das Anwenden von Präfixen und Suffixen.|

### Rollen {#configuration-strings}

In dieser Konfigurationsdatei kannst du Präfix- und Suffixregeln für jede Rolle definieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=nicknames%7Cconfigs%2Fstrings).

Jeder Eintrag in dieser Liste stellt eine Rollenregel mit den folgenden Feldern dar:

| Feld | Beschreibung |
|-------|-------------|
| Rolle | Die Rolle, für die das Präfix und/oder Suffix angewendet werden soll. |
| Prefix | Das Präfix, das vor den Nickname des Mitglieds gesetzt wird. |
| Suffix | Das Suffix, das an den Nickname des Mitglieds angehängt wird. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Nicknames werden nicht aktualisiert</summary>
  <ul>
    <li>Stelle sicher, dass der Bot über die Berechtigung <code>Nicknames verwalten</code> verfügt.</li>
    <li>Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie über der höchsten Rolle des Mitglieds platziert ist.</li>
    <li>Der Nickname des Serverbesitzers kann von Bots nicht geändert werden – das ist eine Einschränkung von Discord.</li>
  </ul>
</details>

<details>
  <summary>Der falsche Präfix/Suffix wird angewendet.</summary>

  Das Modul verwendet die höchste Rolle in der Serverhierarchie, für die ein Präfix/Suffix konfiguriert wurde. Stelle sicher, dass deine Rollenregeln für die richtigen Rollen konfiguriert sind und die Rollenpositionen auf deinem Server deinen Erwartungen entsprechen.
</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden über jedes Mitglied gespeichert:

* Die Discord-Benutzer-ID
* Der Basis-Nickname des Mitglieds (ohne angewandtes Präfix oder Suffix)
* Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/modules/community/hunt-the-code/).
