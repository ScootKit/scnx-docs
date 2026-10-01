# Namenslisten Cleaner

Entferne Sonderzeichen vom Anfang von Benutzernamen, um die Mitgliederliste sauber und sortiert zu halten.

<ModuleOverview moduleName="name-list-cleaner" />

## Funktionen {#features}

- Entfernt automatisch Sonderzeichen am Anfang von Nicknames der Mitglieder.
- Wähle zwischen dem Bereinigen von Nicknames (der Rest bleibt erhalten) oder dem vollständigen Entfernen.
- Lege eine Whitelist oder Blacklist erlaubter bzw. blockierter Zeichen fest.
- Nimm bestimmte Benutzer von der Namensbereinigung aus.
- Prüfe optional zusätzlich zu den Nicknames auch Benutzernamen.
- Verarbeitet beim Start des Bots alle bestehenden Mitglieder und überwacht Änderungen in Echtzeit.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=name-list-cleaner) auf deinem Server.
2. Stelle sicher, dass der Bot die Berechtigung "Nicknames verwalten" hat und seine Rolle über den Rollen der Mitglieder steht, deren Nicknames bereinigt werden sollen.
3. Optional kannst du eine Zeichen-Whitelist oder -Blacklist [konfigurieren](#configuration), um festzulegen, welche Zeichen erlaubt sind.

## Nutzung {#usage}

Sobald das Modul aktiviert ist, arbeitet es automatisch:

- Wenn der Bot startet, durchsucht er alle bestehenden Mitglieder und bereinigt alle Nicknames, die mit Sonderzeichen beginnen.
- Wenn ein Mitglied seinen Nicknamen oder Benutzernamen ändert, prüft und bereinigt der Bot diesen in Echtzeit.
- Standardmäßig werden alle nicht-alphanumerischen Zeichen am Anfang von Namen entfernt. Dieses Verhalten kannst du mit der Whitelist-/Blacklist-Konfiguration anpassen.
- Der Cleaner wirkt nur auf den zugrunde liegenden Basisnamen des Mitglieds. Zusätze anderer Module (Rollen-Präfixe von
  [Rollen-Nicknamen](/de/docs/custom-bot/modules/community/nicknames), Serien-Suffixe, Mute-Präfixe, die
  AFK-Markierung) bleiben unverändert -- ein konfigurierter Rollen-Präfix wie `[VIP]` verliert daher sein führendes `[`
  nicht mehr durch den Cleaner.
- Die veraltete Option "Nickname behalten" verändert das Verhalten im neuen System nicht mehr; siehe [Konfiguration](#configuration).

:::info
Der Bot kann den Nicknamen des Server-Besitzers nicht ändern. Dies ist eine Einschränkung von Discord.
:::

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Modul einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=name-list-cleaner%7Cconfigs/config).

| Feld                                | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nickname behalten                   | Veraltete Option. Früher wurde der Nickname beim Deaktivieren vollständig auf den Benutzernamen zurückgesetzt, sobald ein nicht erlaubtes Zeichen gefunden wurde. Im neuen zentralen Nickname-System bereinigt der Cleaner immer den Basisnamen direkt, sodass diese Option den resultierenden Nicknamen nicht mehr ändert. Zusätze anderer Module (Rollen-Präfix, Serien-Suffix, AFK-Markierung, ...) bleiben in beiden Fällen erhalten. |
| Zeichen-Whitelist/-Blacklist        | Eine Liste von Zeichen, die am Anfang von Namen erlaubt (Whitelist-Modus) oder blockiert (Blacklist-Modus) sind. Wenn die Liste leer ist, werden alle nicht-alphanumerischen Zeichen entfernt.                                                                                                                                                                                                                                            |
| Blacklist statt Whitelist verwenden | Wenn aktiviert, wird die Zeichenliste als Blacklist behandelt (aufgelistete Zeichen werden blockiert). Wenn deaktiviert, wird die Liste als Whitelist behandelt (nur aufgelistete und alphanumerische Zeichen sind erlaubt).                                                                                                                                                                                                              |
| Benutzer-Whitelist                  | Benutzer, die von der Namensbereinigung ausgenommen sind. Ihre Nicknames werden nicht verändert.                                                                                                                                                                                                                                                                                                                                          |
| Auch Benutzernamen überprüfen       | Wenn aktiviert, werden zusätzlich zu den Nicknames auch Benutzernamen auf Sonderzeichen geprüft.                                                                                                                                                                                                                                                                                                                                          |

## Fehlerbehebung {#troubleshooting}

- **Der Bot bereinigt keine Nicknames**: Stelle sicher, dass der Bot die Berechtigung "Nicknames verwalten" hat und seine Rolle über den Rollen der betroffenen Mitglieder steht.
- **Der Nickname des Server-Besitzers wird nicht bereinigt**: Der Bot kann den Nicknamen des Server-Besitzers nicht ändern. Dies ist eine Einschränkung von Discord.
- **Bestimmte Zeichen werden nicht entfernt**: Überprüfe deine Whitelist-/Blacklist-Konfiguration. Wenn die Zeichenliste leer ist, werden nur nicht-alphanumerische Zeichen am Anfang von Namen entfernt.
