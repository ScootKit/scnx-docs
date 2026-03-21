# Sammel die Codes

Verstecke Codes und lass deine Nutzer diese sammeln

<ModuleOverview moduleName="hunt-the-code" />

## Funktionen {#features}

* Erstelle versteckte Codes mit benutzerdefinierten Anzeigenamen, die Nutzer finden und einlösen können.
* Nutzer können ihr Profil mit allen gefundenen Codes und ihrem Fortschritt einsehen.
* Eine Bestenliste zeigt die erfolgreichsten Code-Jäger.
* Erstelle Berichte mit detaillierten Statistiken über Nutzer und Codes.
* Beende die aktuelle Code-Jagd-Sitzung, wodurch ein Abschlussbericht erstellt und alle Daten gelöscht werden.
* Codes können automatisch generiert oder manuell festgelegt werden.

## Einrichtung {#setup}

1. Richte [Slash-Befehl-Berechtigungen](/de/docs/custom-bot/slash-commands/) für `/hunt-the-code-admin` ein, um administrative Befehle auf Moderatoren zu beschränken.
2. Erstelle Codes mit `/hunt-the-code-admin create-code` und verstecke sie auf deinem Server, deiner Website oder an anderen Orten.
3. Teile die Code-Zeichenfolgen über kreative Verstecke (z. B. in Kanalbeschreibungen, Bildern oder auf externen Seiten) mit deiner Community.

## Nutzung {#usage}

Administratoren verwalten die Code-Jagd:

* Verwende `/hunt-the-code-admin create-code`, um neue Codes zu erstellen. Jeder Code besitzt einen Anzeigenamen und eine Code-Zeichenfolge (automatisch generiert, falls nicht anders angegeben).
* Verwende `/hunt-the-code-admin report`, um einen detaillierten Bericht mit Nutzer-Ranglisten und Code-Statistiken zu erstellen.
* Verwende `/hunt-the-code-admin end`, um die aktuelle Jagd-Sitzung zu beenden – dies erstellt einen Abschlussbericht und löscht alle Codes sowie den Fortschritt der Nutzer.

Nutzer nehmen an der Code-Jagd teil:

* Verwende `/hunt-the-code redeem`, um einen gefundenen Code einzugeben.
* Verwende `/hunt-the-code profile`, um gefundene Codes und den Gesamtfortschritt einzusehen.
* Verwende `/hunt-the-code leaderboard`, um die 20 erfolgreichsten Code-Jäger zu sehen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
|---------|-------------|
| `/hunt-the-code redeem code:<Text>` | Löse einen gefundenen Code ein. Die Groß- und Kleinschreibung spielt dabei keine Rolle. |
| `/hunt-the-code profile` | Sieh dir dein Profil an, das alle gefundenen Codes und deinen Fortschritt beim Finden aller verfügbaren Codes anzeigt. |
| `/hunt-the-code leaderboard` | Sieh dir die 20 erfolgreichsten Nutzer an, die die meisten Codes gefunden haben. |
| `/hunt-the-code-admin create-code display-name:<Text> [code:<Text>]` | Erstelle einen neuen Code mit einem Anzeigenamen. Wenn keine Code-Zeichenfolge angegeben wird, wird automatisch eine generiert. Erfordert die Berechtigung `Nachrichten verwalten`. |
| `/hunt-the-code-admin report` | Erstelle einen detaillierten Bericht der aktuellen Code-Jagd-Sitzung, einschließlich Nutzer-Ranglisten und Code-Statistiken. Der Bericht wird als temporäres Dokument hochgeladen. Erfordert die Berechtigung `Nachrichten verwalten`. |
| `/hunt-the-code-admin end` | Beende die aktuelle Code-Jagd-Sitzung. Erstellt einen Abschlussbericht und löscht anschließend alle Codes sowie den Nutzerfortschritt. Erfordert die Berechtigung `Nachrichten verwalten`. |

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Modul einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=hunt-the-code%7Cstrings).

| Feld | Beschreibung |
|-------|-------------|
| Code-nicht-gefunden-Nachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer versucht, einen ungültigen Code einzulösen. |
| Code-bereits-eingelöst-Nachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer versucht, einen bereits gefundenen Code einzulösen. |
| Code-eingelöst-Nachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer einen Code erfolgreich eingelöst hat. |
| Profil-Nachricht | Das Embed, das angezeigt wird, wenn ein Nutzer sein Profil aufruft, um gefundene Codes und den Fortschritt einzusehen. |
| Leaderboard-Nachricht | Passe das Erscheinungsbild des Leaderboard-Embeds an (title, color, thumbnail, image). |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Nutzer können keine Codes einlösen</summary>
  <ul>
    <li>Stelle sicher, dass der Code erfolgreich mit <code>/hunt-the-code-admin create-code</code> erstellt wurde.</li>
    <li>Codes unterscheiden nicht zwischen Groß- und Kleinschreibung, daher spielt die Kapitalisierung keine Rolle.</li>
    <li>Überprüfe, ob der Nutzer den Code bereits eingelöst hat, indem du ihn sein Profil kontrollieren lässt.</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden gespeichert:

Für jeden Code:
* Die Code-Zeichenfolge (Primärschlüssel)
* Der Anzeigename des Codes
* Die Anzahl der Einlösungen des Codes
* Metadaten zum Eintrag (Erstellungs- und Änderungsdatum)

Für jeden Nutzer:
* Die Discord-Nutzer-ID
* Die Gesamtzahl der gefundenen Codes
* Eine Liste aller eingelösten Code-Zeichenfolgen
* Metadaten zum Eintrag (Erstellungsdatum und Zeitpunkt der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
