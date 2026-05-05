# Rollen-Nicknamen

Einfaches Modul zum Bearbeiten von Benutzer-Nicknamen basierend auf Rollen.

<ModuleOverview moduleName="nicknames" />

## Funktionen {#features}

- Füge Mitgliedern automatisch Präfixe und/oder Suffixe zu ihren Nicknames hinzu, basierend auf ihren Rollen.
- Unterstützt mehrere Rollen mit verschiedenen Präfixen und Suffixen – die hierarchisch höchste Rolle hat Priorität.
- Nicknames werden automatisch aktualisiert, wenn sich die Rollen oder der Nickname eines Mitglieds ändern – auch
  dann, wenn in derselben Aktualisierung eine Rolle entfernt und gleichzeitig eine andere hinzugefügt wird.
- Alle vorhandenen Mitglieder werden beim Start des Bots umbenannt.
- Optionale Erzwingung von Anzeigenamen anstelle von benutzerdefinierten Nicknames.
- Stimmt sich mit anderen Modulen ab, die Nicknames verändern (Activity-Streak, AFK-System, Moderation,
  Name-List-Cleaner, Custom Commands), und nutzt dafür einen [zentralen Nickname-Manager](#central-nickname-manager),
  damit Präfixe, Suffixe und Overrides sich nicht mehr gegenseitig überschreiben.

## Einrichtung {#setup}

1. Stelle sicher, dass der Bot über die Berechtigung `Nicknames verwalten` verfügt.
2. Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie des Servers über den Rollen der Mitglieder platziert ist, deren Nicknames geändert werden sollen. Beachte, dass der Nickname des Serverbesitzers nicht geändert werden kann.
3. Konfiguriere Rollenpräfixe und -suffixe in der [Rollen-Konfiguration](#configuration-strings).

## Nutzung {#usage}

Dieses Modul funktioniert automatisch – es gibt keine Befehle. Wenn sich die Rollen oder der Nickname eines Mitglieds ändern, wendet der Bot automatisch das entsprechende Präfix und/oder Suffix an, basierend auf der höchsten übereinstimmenden Rolle.

Das Modul wertet Rollen von der höchsten bis zur niedrigsten Position in der Rollenhierarchie aus. Die erste gefundene übereinstimmende Rollenkonfiguration wird angewendet. Wenn ein Mitglied keine übereinstimmenden Rollen hat, bleibt sein Nickname unverändert (wobei vorhandene Präfixe/Suffixe von zuvor passenden Rollen entfernt werden).

Beim Start scannt der Bot alle vorhandenen Mitglieder und wendet die korrekten Präfixe und Suffixe an.

Wird der Nickname eines Mitglieds extern geändert (in Discord, durch einen anderen Bot oder per `/nick`), übernimmt
der Bot den neuen Wert als gespeicherten Basisnamen – beim nächsten rollenbedingten Update wird der Nickname aus
diesem Basis­namen neu zusammengesetzt und das konfigurierte Präfix/Suffix wieder darübergelegt.

## Zentraler Nickname-Manager {#central-nickname-manager}

Alle bot-seitigen Nickname-Änderungen auf dem Server werden zentral koordiniert. Jedes Modul, das Nicknames
verändert (Rollen-Präfix/Suffix hier, Activity-Streak-Suffixe, AFK-Marker, Mute-/Quarantäne-Präfixe, Bereinigung
durch den Name-List-Cleaner, die Aktion `Nickname ändern` in Custom Commands) liefert seinen Beitrag, und der
Manager rendert den finalen String in einer festen Reihenfolge:

1. Der Basisname. Wenn dieses Modul aktiviert ist, liefert es den gespeicherten bevorzugten Namen des Mitglieds;
   andernfalls greift der Manager auf den Discord-Anzeigenamen zurück.
2. Bereinigung durch den [Name-List-Cleaner](/de/docs/custom-bot/modules/tools/name-list-cleaner/), falls aktiviert.
3. Rollen-Präfixe/-Suffixe aus diesem Modul (nur wenn aktiviert) und Streak-Suffixe aus
   [Activity-Streak](/de/docs/custom-bot/modules/community/activity-streak/).
4. Wrapping-Overrides wie `[Muted]`, `[AFK]` oder Quarantäne-Präfixe.

Der Manager ruft Discord nur auf, wenn sich der gerenderte Wert tatsächlich vom aktuellen Nickname unterscheidet.
Das reduziert Audit-Log-Rauschen und Discord-API-Anfragen auf aktiven Servern.

Der Manager selbst ist immer aktiv, unabhängig davon, welche Module aktiviert sind. Bei deaktiviertem Modul werden
keine Rollen-Präfixe und -Suffixe angewendet, die Beiträge der anderen Module (Mute, AFK, Cleaner, ...) laufen aber
weiterhin durch dieselbe Pipeline.

## Konfiguration {#configuration}

Dieses Modul verfügt über mehrere Konfigurationsdateien. Bitte überprüfe diese unten.

### Modul-Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du die Funktionalität dieses Moduls konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=nicknames%7Cconfigs%2Fconfig).

| Feld                   | Beschreibung                                                                                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Anzeigenamen erzwingen | Falls aktiviert, verwendet der Bot den Anzeigenamen des Benutzers anstelle seines benutzerdefinierten Server-Nicknames als Basisnamen für das Anwenden von Präfixen und Suffixen. |

### Rollen {#configuration-strings}

In dieser Konfigurationsdatei kannst du Präfix- und Suffixregeln für jede Rolle definieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=nicknames%7Cconfigs%2Fstrings).

Jeder Eintrag in dieser Liste stellt eine Rollenregel mit den folgenden Feldern dar:

| Feld   | Beschreibung                                                          |
| ------ | --------------------------------------------------------------------- |
| Rolle  | Die Rolle, für die das Präfix und/oder Suffix angewendet werden soll. |
| Prefix | Das Präfix, das vor den Nickname des Mitglieds gesetzt wird.          |
| Suffix | Das Suffix, das an den Nickname des Mitglieds angehängt wird.         |

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

<details>
  <summary>Der Nickname enthält doppelte Präfixe oder Suffixe</summary>

Dieses Problem trat in älteren Bot-Versionen auf, wenn das Rollen-Nicknamen-Modul gemeinsam mit Activity-Streak (oder ähnlichen nickname-verändernden Modulen) lief: Bei jedem Streak-Update konnte das Rollen-Suffix erneut angehängt werden, sodass schließlich der gesamte 32-Zeichen-Nickname mit gestapelten Dekorationen gefüllt war. Der [zentrale Nickname-Manager](#central-nickname-manager) verhindert das, indem er den finalen String aus den Beiträgen aller Module rendert, statt den Nickname wiederholt direkt zu bearbeiten. Sollten weiterhin doppelte Dekorationen sichtbar sein, starte den Bot einmal neu, damit der Manager die Basisnamen der betroffenen Mitglieder aus dem aktuellen Nickname neu aufbaut.

</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden über jedes Mitglied gespeichert:

- Die Discord-Benutzer-ID
- Der Basis-Nickname des Mitglieds (ohne angewandtes Präfix oder Suffix)
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database)
