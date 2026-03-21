# Color me

Einfaches Modul, um Nutzer, die deinen Server geboostet haben, mit einer benutzerdefinierten Rolle zu belohnen.

<ModuleOverview moduleName="color-me" />

## Funktionen {#features}

* Ermögliche es Server-Boostern (oder allen Nutzern), eine persönliche Rolle mit eigenem Namen, eigener Farbe und eigenem Icon zu erstellen.
* Benutzerdefinierte Rollen können optional automatisch entfernt werden, wenn ein Nutzer den Server nicht mehr boostet.
* Zuvor erstellte benutzerdefinierte Rollen können optional automatisch wiederhergestellt werden, wenn ein Nutzer erneut boostet.
* Konfigurierbare Abklingzeit (Cooldown), um häufige Rollenänderungen zu verhindern.
* Benutzerdefinierte Rollen können optional separat in der Mitgliederliste angezeigt werden.
* Unterstützt Rollen-Icons auf Servern mit Boost-Level 2 oder höher.

## Einrichtung {#setup}

1. Stelle sicher, dass der Bot über die Berechtigung `Rollen verwalten` verfügt.
2. Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie über der Position steht, an der benutzerdefinierte Rollen erstellt werden sollen.
3. Konfiguriere eine „Rollen-Position“ in der [Modul-Konfiguration](#configuration-config), um zu steuern, wo benutzerdefinierte Rollen in der Rollenhierarchie erscheinen.
4. Richte die [Berechtigungen für Slash-Befehle](/de/docs/custom-bot/slash-commands/) für `/color-me` ein, um zu steuern, wer den Befehl nutzen darf (z. B. Beschränkung auf reine Booster).

## Nutzung {#usage}

Nutzer können ihre benutzerdefinierte Rolle mit dem Befehl `/color-me` verwalten:

* Nutze `/color-me manage`, um deine benutzerdefinierte Rolle zu erstellen oder zu aktualisieren. Gib einen Namen und optional einen Hex-Farbcode sowie ein Icon-Bild an.
* Nutze `/color-me remove`, um deine benutzerdefinierte Rolle zu löschen.

Wenn ein Nutzer bereits eine benutzerdefinierte Rolle hat, wird diese durch die Verwendung von `manage` aktualisiert. Falls die Rolle gelöscht wurde (z. B. durch das Beenden des Boosts), wird sie mit denselben Einstellungen wiederhergestellt, sobald der Nutzer erneut boostet (sofern „Rollen wiederherstellen“ aktiviert ist).
Es kann eine Abklingzeit konfiguriert werden, um die Häufigkeit zu begrenzen, mit der Nutzer ihre Rolle bearbeiten können.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
|---------|-------------|
| `/color-me manage name:<Text> [color:<Text>] [icon:<Attachment>]` | Erstelle oder aktualisiere deine benutzerdefinierte Rolle. Gib einen Namen für die Rolle an. Optional kannst du einen Hex-Farbcode (z. B. `#FF5733`) angeben und ein Icon-Bild hochladen (erfordert Boost-Level 2+). |
| `/color-me remove confirm:<Boolean>` | Lösche deine benutzerdefinierte Rolle. Setze confirm auf `true`, um die Löschung zu bestätigen. |

## Konfiguration {#configuration}

Dieses Modul verfügt über mehrere Konfigurationsdateien. Bitte überprüfe diese unten.

### Modul-Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du das Modul einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=color-me%7Cconfigs%2Fconfig).

| Feld | Beschreibung |
|-------|-------------|
| Rollen wiederherstellen | Falls aktiviert, wird die benutzerdefinierte Rolle eines Nutzers automatisch mit den vorherigen Einstellungen wiederhergestellt, wenn er den Server erneut boostet. |
| Rollen in Mitgliederliste separieren | Falls aktiviert, werden benutzerdefinierte Rollen in der Mitgliederliste des Servers separat angezeigt. |
| Rolle bei Unboost entfernen | Falls aktiviert, wird die benutzerdefinierte Rolle eines Nutzers automatisch gelöscht, wenn er aufhört, den Server zu boosten. Deaktiviere dies, falls auch Nicht-Booster den Befehl nutzen können sollen. |
| Rollenbearbeitungscooldown | Die Zeit (in Stunden), die ein Nutzer warten muss, bevor er seine benutzerdefinierte Rolle erneut bearbeiten kann. |
| Rollenposition | Die Rolle, unter der benutzerdefinierte Rollen in der Rollenhierarchie erstellt werden. |

### Modul-Nachrichten {#configuration-strings}

In dieser Konfigurationsdatei kannst du die Nachrichten anpassen, die von diesem Modul gesendet werden. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=color-me%7Cconfigs%2Fstrings).

| Feld | Beschreibung |
|-------|-------------|
| Rolle erstellt | Nachricht, die angezeigt wird, wenn ein Nutzer erfolgreich seine benutzerdefinierte Rolle erstellt hat. |
| Rolle ohne Icon erstellt | Nachricht, die angezeigt wird, wenn eine benutzerdefinierte Rolle erstellt wurde, aber das Rollen-Icon nicht angewendet werden konnte, da der Server unter Boost-Level 2 liegt. |
| Rolle aktualisiert | Nachricht, die angezeigt wird, wenn ein Nutzer erfolgreich seine benutzerdefinierte Rolle aktualisiert hat. |
| Rolle ohne Icon aktualisiert | Nachricht, die angezeigt wird, wenn eine benutzerdefinierte Rolle aktualisiert wurde, aber das Rollen-Icon nicht angewendet werden konnte, da der Server unter Boost-Level 2 liegt. |
| Rolle entfernt | Nachricht, die angezeigt wird, wenn ein Nutzer erfolgreich seine benutzerdefinierte Rolle löscht. |
| Rollenlimit erreicht | Nachricht, die angezeigt wird, wenn eine benutzerdefinierte Rolle nicht erstellt werden kann, weil der Server das maximale Rollenlimit von Discord erreicht hat. |
| Cooldown | Nachricht, die angezeigt wird, wenn ein Nutzer versucht, seine Rolle zu bearbeiten, bevor die Abklingzeit abgelaufen ist. |
| Falsche Farbe | Nachricht, die angezeigt wird, wenn der Nutzer einen ungültigen Hex-Farbcode angibt. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Benutzerdefinierte Rollen werden nicht erstellt</summary>
  <ul>
    <li>Stelle sicher, dass der Bot über die Berechtigung <code>Rollen verwalten</code> verfügt.</li>
    <li>Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie oberhalb der konfigurierten „Rollenposition“ platziert ist.</li>
    <li>Überprüfe, ob dein Server das maximale Rollenlimit von Discord (250 Rollen) erreicht hat.</li>
  </ul>
</details>

<details>
  <summary>Rollen-Icons werden nicht angewendet</summary>

  Rollen-Icons erfordern, dass der Server mindestens Boost-Level 2 erreicht hat. Wenn dein Server diese Anforderung nicht erfüllt, wird die Rolle ohne Icon erstellt.
</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden über jede benutzerdefinierte Rolle gespeichert:

* Die Discord-User-ID
* Die Discord-Rollen-ID der benutzerdefinierten Rolle
* Der Rollenname und die Farbe
* Der Zeitstempel der letzten Rollenbearbeitung (verwendet für die Berechnung der Abklingzeit)
* Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
