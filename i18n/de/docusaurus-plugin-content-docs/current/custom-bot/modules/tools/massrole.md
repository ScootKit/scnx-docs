# Massenrolle

Einfaches Modul, um die Rollen vieler Mitglieder gleichzeitig zu verwalten.

<ModuleOverview moduleName="massrole" />

## Funktionen {#features}

- Füge allen Mitgliedern, nur Bots oder nur Menschen auf deinem Server mit einem einzigen Befehl eine Rolle hinzu.
- Entferne eine Rolle von allen Mitgliedern, nur Bots oder nur Menschen auf deinem Server.
- Entferne alle nicht verwalteten Rollen von allen Mitgliedern, nur Bots oder nur Menschen.
- Beschränke die Nutzung aus Sicherheitsgründen auf bestimmte Admin-Rollen.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=massrole&ref=scnx-app-docs) auf deinem Server.
2. Öffne die [Modulkonfiguration](https://scnx.app/de/glink?page=bot/configuration?file=massrole%7Cconfigs/config) und füge die Rollen, die den Befehl `/massrole` verwenden dürfen, im Feld "Adminrollen" hinzu.
3. Stelle sicher, dass der Bot die Berechtigung **Rollen verwalten** hat und dass die höchste Rolle des Bots über den Rollen steht, die du verwalten möchtest.
4. Stelle in deinen Discord-Servereinstellungen sicher, dass Nutzer mit den konfigurierten Admin-Rollen den Befehl `/massrole` verwenden dürfen (der Befehl erfordert standardmäßig die Administrator-Berechtigung).

## Nutzung {#usage}

- Verwende `/massrole add`, um Mitgliedern auf deinem Server eine Rolle hinzuzufügen. Optional kannst du ein Ziel angeben, um die Aktion auf alle Mitglieder, nur Bots oder nur Menschen zu beschränken.
- Verwende `/massrole remove`, um eine bestimmte Rolle von Mitgliedern zu entfernen.
- Verwende `/massrole remove-all`, um alle nicht verwalteten Rollen von Mitgliedern zu entfernen. Dies ist eine destruktive Aktion – Vorsicht!
- Klicke mit der rechten Maustaste (oder halte gedrückt) auf einen Nutzer und wähle "Apps" > "Add Role to User" oder "Remove Role from User", um die Rollen eines einzelnen Mitglieds zu ändern. Wähle die Rolle im Dropdown aus, das der Bot dir anzeigt (nur für dich sichtbar).
- Alle Befehle geben Feedback, ob die Aktion erfolgreich ausgeführt wurde oder ob Fehler aufgetreten sind (typischerweise aufgrund fehlender Berechtigungen bei einigen Mitgliedern).

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                           | Beschreibung                                                                                                                               |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `/massrole add role:<Role> [target:<Target>]`    | Fügt die angegebene Rolle den ausgewählten Mitgliedern hinzu. Das Ziel kann "all", "bots" oder "humans" sein (Standard: "all").            |
| `/massrole remove role:<Role> [target:<Target>]` | Entfernt die angegebene Rolle von den ausgewählten Mitgliedern. Das Ziel kann "all", "bots" oder "humans" sein (Standard: "all").          |
| `/massrole remove-all [target:<Target>]`         | Entfernt alle nicht verwalteten Rollen von den ausgewählten Mitgliedern. Das Ziel kann "all", "bots" oder "humans" sein (Standard: "all"). |

| Kontextmenü-Aktion (Nutzer) | Beschreibung                                                                                                |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `Add Role to User`          | Fügt diesem einzelnen Mitglied eine im Dropdown ausgewählte Rolle hinzu. Erfordert eine der Admin-Rollen.   |
| `Remove Role from User`     | Entfernt eine im Dropdown ausgewählte Rolle von diesem einzelnen Mitglied. Erfordert eine der Admin-Rollen. |

## Konfiguration {#configuration}

### Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du das Modul konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=massrole%7Cconfigs/config).

| Feld        | Beschreibung                                                                                               |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| Adminrollen | Rollen, die den Befehl `/massrole` verwenden dürfen. Nutzer müssen mindestens eine dieser Rollen besitzen. |

### Nachrichten {#configuration-strings}

In dieser Konfigurationsdatei kannst du die vom Modul gesendeten Nachrichten anpassen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=massrole%7Cconfigs/strings).

| Feld                                   | Beschreibung                                                                                                                                                                                                                                                                  |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktion ausgeführt                      | Nachricht, die gesendet wird, wenn eine Massrole-Aktion erfolgreich ausgeführt wurde.                                                                                                                                                                                         |
| Aktion nicht ausgeführt                | Nachricht, die gesendet wird, wenn eine Massrole-Aktion nicht vollständig ausgeführt werden konnte, meist weil dem Bot bei einigen Mitgliedern die nötigen Berechtigungen fehlen.                                                                                             |
| Aktion teilweise ausgeführt            | Nachricht, die gesendet wird, wenn die Aktion bei einigen Mitgliedern funktioniert hat, bei anderen aber fehlgeschlagen ist. Platzhalter: `%succeeded%` (Anzahl der aktualisierten Mitglieder) und `%failed%` (Anzahl der Mitglieder, die nicht aktualisiert werden konnten). |
| Fehlendes Recht "Rollen verwalten"     | Nachricht, die gesendet wird, wenn dem Bot das Recht "Rollen verwalten" fehlt.                                                                                                                                                                                                |
| Rolle über dem Bot                     | Nachricht, die gesendet wird, wenn die ausgewählte Rolle nicht unter der höchsten Rolle des Bots steht. Platzhalter: `%role%` (die ausgewählte Rolle).                                                                                                                        |
| Von einer Integration verwaltete Rolle | Nachricht, die gesendet wird, wenn die ausgewählte Rolle von einer Integration verwaltet wird (zum Beispiel von einem Bot oder der Booster-Rolle) und nicht manuell vergeben werden kann. Platzhalter: `%role%` (die ausgewählte Rolle).                                      |

## Fehlerbehebung {#troubleshooting}

- **Der Bot meldet, dass die Aktion nicht ausgeführt wurde**: Stelle sicher, dass der Bot die Berechtigung "Rollen verwalten" hat und dass die höchste Rolle des Bots über den Rollen steht, die er verwalten soll. Der Bot kann die Rollen von Mitgliedern nicht ändern, deren höchste Rolle über der höchsten Rolle des Bots liegt.
- **Der Befehl ist nicht verfügbar**: Stelle sicher, dass die Admin-Rollen in der Modulkonfiguration festgelegt sind und dass der Nutzer, der den Befehl ausführt, eine dieser Rollen besitzt. Prüfe außerdem, ob die Befehlsberechtigungen in deinen Discord-Servereinstellungen den passenden Nutzern erlauben, `/massrole` auszuführen.
- **Der Befehl dauert lange**: Auf großen Servern können Massrole-Aktionen mehrere Minuten dauern, da der Bot jedes Mitglied einzeln verarbeitet. Der Bot antwortet, sobald die Aktion abgeschlossen ist.
