# Admin-Tools

Einfache Werkzeuge für Administratoren - verschiebe Kanäle und Rollen mit Befehlen oder kopiere ein Emoji von einem anderem zu deinem Server.

<ModuleOverview moduleName="admin-tools" />

## Funktionen {#features}

* Verschiebe Kanäle und Rollen mit Befehlen
* Setze die Kategorie eines Kanals mit Befehlen
* Importiere Emojis von anderen Servern in deinen Server

## Einrichtung {#setup}

* Bitte [setze Berechtigungen](./../../slash-commands) für Slash-Befehle, um ungewollte Nutzung zu verhindern.
* Stelle sicher, dass dein Bot folgende Berechtigungen auf deinem Server hat:
  * Um Emojis von anderen Servern zu importieren (`/stealemote`): "Ausdrücke erstellen"
  * Um Kanäle zu verändern (alle `/admin` Befehle): "Kanäle verwalten"

## Nutzung {#usage}

* Um ein Emoji von einem anderem Server zu importieren, nutze [`/stealemote`](#commands).
* Um die Position eines Kanals zu sehen oder zu verändern, nutze [`/admin movechannel`](#commands).
* Um die Position einer Rolle zu sehen oder zu verändern, nutze [`/admin moverole`](#commands).
* Um die Kategorie eines Kanals zu ändern, nutze [`/admin setcategory`](#commands).

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                                      | Beschreibung                                                                     |
|--------------------------------------------------------------|---------------------------------------------------------------------------------|
| `/admin movechannel channel:<Kanal>`                         | Zeigt die API-Position des angegebenen Kanals.                                  | 
| `/admin movechannel channel:<Kanal> new-position:<Zahl>`     | Verschiebt den angegebenen Kanal zu der angegebenen API-Position.               |
| `/admin moverole role:<Rolle>`                               | Zeigt die API-Position der angegebenen Rolle.                                   | 
| `/admin moverole role:<Rolle> new-position:<Zahl>`           | Verschiebt die angegebene Rolle zu der angegebenen API-Position.                | 
| `/admin setcategory channel:<Kanal> category:<Kategorie> `   | Aktualisiert die Kategorie des angegebenen Kanals zu der angegebenen Kategorie. |
| `/stealemote emote:<Emoji>`                                  | Kopiert ein Emoji von einem anderem Server zu deinem Server.                    |

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
    <li>Discord schränkt einige Positionen ein. So kannst du z.B. keinen Sprachkanal über einen Textkanal schieben.</li>
    <li>Stelle sicher, dass du die richtige Position eingegeben hast. Um dies zu überprüfen, führe den Command ohne den "new-position"-Parameter und berechne die neue 
     Position mithilfe der jetzigen.</li>
  </ul>
</details>
