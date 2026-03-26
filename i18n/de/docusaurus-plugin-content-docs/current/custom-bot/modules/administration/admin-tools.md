# Admin-Tools

Einfache Werkzeuge für Administratoren - verschiebe Kanäle und Rollen mit Befehlen oder kopiere ein Emoji von einem anderem zu deinem Server.

<ModuleOverview moduleName="admin-tools" />

## Funktionen {#features}

* Verschiebe Kanäle und Rollen mit Befehlen
* Setze die Kategorie eines Kanals mit Befehlen
* Importiere Emojis von anderen Servern in deinen Server
* Weise Nutzern temporäre Rollen zu, die nach einer bestimmten Dauer automatisch hinzugefügt oder entfernt werden.
* Konfiguriere "Immer-temporäre" Rollen, die automatisch nach einer festgelegten Dauer entfernt werden, wann immer sie einem Nutzer zugewiesen werden.

## Einrichtung {#setup}

1. Bitte [setze Berechtigungen](/docs/custom-bot/slash-commands) für Slash-Befehle, um ungewollte Nutzung zu verhindern.
2. Stelle sicher, dass dein Bot folgende Berechtigungen auf deinem Server hat:
   * Um Emojis von anderen Servern zu importieren (`/stealemote`): "Ausdrücke erstellen"
   * Um Kanäle zu verändern (alle `/admin`-Befehle): "Kanäle verwalten"
   * Um Rollen zuzuweisen oder zu entfernen (`/roles`-Befehle): "Rollen verwalten" (die Rolle des Bots muss über den Zielrollen stehen)

## Nutzung {#usage}

* Um ein Emoji von einem anderem Server zu importieren, nutze [`/stealemote`](#commands).
* Um die Position eines Kanals zu sehen oder zu verändern, nutze [`/admin movechannel`](#commands).
* Um die Position einer Rolle zu sehen oder zu verändern, nutze [`/admin moverole`](#commands).
* Um die Kategorie eines Kanals zu ändern, nutze [`/admin setcategory`](#commands).

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                                    | Beschreibung                                                                    |
|-----------------------------------------------------------|---------------------------------------------------------------------------------|
| `/admin movechannel channel:<Kanal>`                      | Zeigt die API-Position des angegebenen Kanals.                                  |
| `/admin movechannel channel:<Kanal> new-position:<Zahl>`  | Verschiebt den angegebenen Kanal zu der angegebenen API-Position.               |
| `/admin moverole role:<Rolle>`                            | Zeigt die API-Position der angegebenen Rolle.                                   |
| `/admin moverole role:<Rolle> new-position:<Zahl>`        | Verschiebt die angegebene Rolle zu der angegebenen API-Position.                |
| `/admin setcategory channel:<Kanal> category:<Kategorie>` | Aktualisiert die Kategorie des angegebenen Kanals zu der angegebenen Kategorie. |
| `/stealemote emote:<Emoji>`                               | Kopiert ein Emoji von einem anderem Server zu deinem Server.                    |
| `/roles give user:<Nutzer> role:<Rolle> [duration:<Dauer>]`  | Weist einem Nutzer eine Rolle zu. Optional kann eine Dauer angegeben werden, nach der die Rolle automatisch entfernt wird. |
| `/roles remove user:<Nutzer> role:<Rolle> [duration:<Dauer>]` | Entfernt eine Rolle von einem Nutzer. Optional kann eine Dauer angegeben werden, nach der die Rolle automatisch wieder hinzugefügt wird. |
| `/roles status user:<Nutzer>`                              | Zeigt alle ausstehenden temporären Rollenänderungen für einen Nutzer an.        |

## Konfiguration {#configuration}

### Immer-temporäre Rollen {#always-temporary-roles}

Diese Konfiguration ermöglicht es dir, Rollen zu definieren, die immer temporär sein sollen. Wenn ein Nutzer eine dieser Rollen erhält — egal ob manuell, per Befehl oder durch einen anderen Bot — wird sie nach der konfigurierten Dauer automatisch entfernt.

Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=admin-tools%7Calways-temporary-roles).

| Feld   | Beschreibung                                                                                                                                                                             |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rolle  | Die Rolle, die immer temporär sein soll. Wenn ein Nutzer diese Rolle erhält, wird sie nach der konfigurierten Dauer automatisch entfernt.                                                |
| Dauer  | Wie lange die Rolle bestehen soll, bevor sie automatisch entfernt wird. Verwende das [Dauer-Format](/docs/custom-bot/additional-features#durations) (z.B. `24h`, `7d`, `30m`). Minimum: 20 Sekunden. |

Wenn ein Nutzer dieselbe immer-temporäre Rolle erneut erhält, bevor sie abläuft, wird der vorherige Timer durch einen neuen ersetzt.

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Fehler beim Importieren eines Emojis</summary>
  <ul>
    <li>Stelle sicher, dass du das Emoji beim Emoji-Picker auswählst, anstatt es auszuschreiben.</li>
    <li>Stelle sicher, dass du <i>nur</i> das Emoji und nichts weiteres eingegeben hast.</li>
    <li>Stelle sicher, dass dein Bot die Berechtigung "Ausdrücke erstellen" auf deinem Server hat.</li>
  </ul>
</details>

<details>
  <summary>Das Verschieben eines Kanals funktioniert nicht / Der Bot verschiebt den Kanal zur falschen Position</summary>
  <ul>
    <li>Stelle sicher, dass dein Bot die Berechtigung "Kanäle verwalten" auf deinem Server hat.</li>
    <li>Discord schränkt einige Positionen ein. So kannst du z. B. keinen Sprachkanal über einen Textkanal schieben.</li>
    <li>Stelle sicher, dass du die richtige Position eingegeben hast. Um dies zu überprüfen, führe den Befehl ohne den "new-position"-Parameter aus und berechne die neue
     Position mithilfe der jetzigen.</li>
  </ul>
</details>