# Geburtstags-Kalender

Ermögliche es Nutzern, ihren Geburtstag festzulegen, und sich gegenseitig zu gratulieren, wenn sie Geburtstag haben.

<ModuleOverview moduleName="birthday" />

## Funktionen {#features}

* Nutzer können ihren Geburtstag (Tag, Monat und optional das Jahr) über einen Slash-Befehl registrieren.
* Ein automatisch aktualisiertes Geburtstags-Embed zeigt alle registrierten Geburtstage nach Monaten sortiert an, mit einem "Geburtstag festlegen"-Button für einfache Registrierung.
* Der Bot sendet jeden Tag um Mitternacht automatisch Geburtstags-Nachrichten zum Geburtstag.
* Weise Nutzern an ihrem Geburtstag optional eine Geburtstags-Rolle zu (wird am nächsten Tag automatisch wieder entfernt).
* Gibt ein Nutzer sein Geburtsjahr an, kann die Geburtstags-Nachricht auch sein Alter enthalten.
* Geburtstagsdaten werden automatisch entfernt, wenn ein Mitglied den Server verlässt.
* Optionale Geburtstagsverwaltung für Admins: Administratoren können Geburtstage von Nutzern festlegen, entfernen, sperren und entsperren.

## Einrichtung {#setup}

1. Erstelle einen Kanal, in dem das Geburtstags-Embed und die Geburstags-Nachrichten gesendet werden, und konfiguriere diesen in der [Modul-Konfiguration](#configuration).
2. Stelle sicher, dass der Bot im Geburtstags-Kanal über die Berechtigungen `Kanal anzeigen`, `Nachrichten senden`, `Links einbetten` und `Nachrichten verwalten` verfügt.
3. Falls du die Geburtstags-Rollenfunktion nutzen möchtest, erstelle eine entsprechende Rolle und konfiguriere diese in der [Modul-Konfiguration](#configuration). Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie oberhalb der Geburtstags-Rolle platziert ist.

## Nutzung {#usage}

Nutzer können über die folgenden Befehle mit dem Geburtstags-Kalender-Modul interagieren:

* Nutze `/birthday set` oder klicke auf den "Geburtstag festlegen"-Button im Geburtstags-Embed, um deinen Geburtstag zu registrieren. Das Jahr ist optional – falls es angegeben wird, zeigt der Bot an deinem Geburtstag dein Alter an.
* Nutze `/birthday status`, um deinen aktuell registrierten Geburtstag einzusehen.
* Nutze `/birthday delete`, um deinen Geburtstag aus dem Kalender zu entfernen.

### Admin-Geburtstagsverwaltung {#admin-management}

Falls in der [Konfiguration](#configuration) aktiviert, können Administratoren den Befehl `/manage-birthday` nutzen, um die Geburtstage von Nutzern zu verwalten:

* **Festlegen** des Nutzer-Geburtstags
* **Entferne** den Geburtstag eines Nutzers.
* **Sperre** einen Geburtstag  - verhindert, dass der Nutzer diesen selbst bearbeiten oder löschen kann.
* **Entsperre** einen zuvor gesperrten Geburtstag.

Gesperrte Geburtstage werden mit einem Schloss-Symbol angezeigt, wenn Nutzer ihren eigenen Geburtstags-Status abrufen.

### Automatische Geburtstagsprüfung

Jeden Tag um Mitternacht prüft der Bot auf anstehende Geburtstage und:
1. Sendet eine Geburtstags-Nachricht für jeden Nutzer, der heute Geburtstag hat.
2. Weist die konfigurierte Geburtstags-Rolle zu (falls festgelegt) und entfernt diese bei Nutzern, deren Geburtstag bereits vergangen ist.
3. Aktualisiert das Geburtstags-Embed mit den neuesten Daten.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
|---------|-------------|
| `/birthday set day:<Integer> month:<Integer> [year:<Integer>]` | Registriere deinen Geburtstag. Tag und Monat sind erforderlich. Das Jahr ist optional, ermöglicht dem Bot jedoch, dein Alter anzuzeigen. Nutzer unter 13 Jahren können kein Geburtsjahr registrieren (Konformität mit den Discord-AGB). |
| `/birthday status` | Sieh dir deinen aktuell registrierten Geburtstag und dein Alter an (falls ein Geburtsjahr angegeben wurde). |
| `/birthday delete` | Entferne deinen Geburtstag aus dem Kalender. |
| `/manage-birthday set user:<User> day:<Integer> month:<Integer> [year:<Integer>]` | Lege den Geburtstag eines Nutzers fest. Erfordert, dass die Admin-Geburtstagsverwaltung aktiviert ist. |
| `/manage-birthday remove user:<User>` | Entferne den Geburtstag eines Nutzers. Erfordert, dass die Admin-Geburtstagsverwaltung aktiviert ist. |
| `/manage-birthday lock user:<User>` | Sperre den Geburtstag eines Nutzers, um zu verhindern, dass dieser ihn bearbeitet oder löscht. Erfordert, dass die Admin-Geburtstagsverwaltung aktiviert ist. |
| `/manage-birthday unlock user:<User>` | Entsperre einen zuvor gesperrten Geburtstag. Erfordert, dass die Admin-Geburtstagsverwaltung aktiviert ist. |

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Modul konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=birthday%7Cconfig).

| Feld | Beschreibung |
|-------|-------------|
| Geburtstags-Kanal | Kanal, in den das Geburtstags-Embed und die Geburtstags-Nachrichten (sofern nicht überschrieben) gesendet werden. |
| (optional) Benachrichtigung-Kanal | Optionaler separater Kanal für Geburtstags-Nachrichten. Falls leer, wird der normale Geburtstags-Kanal verwendet. Im Gegensatz zum Geburtstags-Kanal werden alte Nachrichten aus diesem Kanal nicht automatisch gelöscht. |
| Birthday-Embed aktiviert | Falls aktiviert, wird ein automatisch aktualisiertes Embed mit allen Geburtstagen (sortiert nach Monat) in den Geburtstags-Kanal gesendet. |
| Geburtstags-Nachricht | Falls aktiviert, wird ein automatisch aktualisiertes Embed mit allen Geburtstagen (sortiert nach Monat) in den Geburtstags-Kanal gesendet. |
| Geburtstags-Nachricht mit Alter | Die Geburtstags-Nachricht, die gesendet wird, wenn ein Nutzer Geburtstag hat und sein Geburtsjahr angegeben hat, einschließlich seines Alters. |
| Geburtstags-Rolle | Eine Rolle, die Nutzern an ihrem Geburtstag zugewiesen und am nächsten Tag wieder entfernt wird. Leer lassen, um diese Funktion zu deaktivieren. |
| "Erfolgreich geändert"-Nachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer seinen Geburtstag erfolgreich registriert oder aktualisiert. |
| Geburtstags-Nachricht | Passe das Erscheinungsbild (title, description, color, thumbnail, image) des Geburtsstags-Embeds an. |
| Geburtstag-festlegen-Button-Label | Die Beschriftung des "Geburtstag festlegen"-Buttons im Geburtstags-Embed. Leere dieses Feld, um den Button vollständig auszublenden. |
| Nutze den Tag der Nutzer, anstatt eine Erwähnung | Falls aktiviert, werden im Geburtstags-Embed Nutzer-Tags anstelle von Erwähnungen angezeigt. Empfohlen für große Server. |
| Admin-Geburtstagsverwaltung aktivieren? | Falls aktiviert, steht Server-Administratoren der Befehl `/manage-birthday` zur Verfügung, um Geburtstage von Nutzern festzulegen, zu entfernen, zu sperren oder zu entsperren. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Das Geburtstags-Embed wird nicht angezeigt.</summary>
  <ul>
    <li>Stelle sicher, dass der konfigurierte Geburtstags-Kanal existiert und der Bot über die Berechtigungen <code>Kanal anzeigen</code>, <code>Nachrichten senden</code> und <code>Links einbetten</code> verfügt.</li>
    <li>Stelle sicher, dass „Birthday-Embed aktiviert" in der Konfiguration eingeschaltet ist.</li>
  </ul>
</details>

<details>
  <summary>Geburtstags-Rollen werden nicht zugewiesen oder entfernt.</summary>
  <ul>
    <li>Stelle sicher, dass in der Modul-Konfiguration eine Geburtstags-Rolle konfiguriert ist.</li>
    <li>Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie des Servers oberhalb der Geburtstags-Rolle platziert ist.</li>
    <li>Überprüfe, ob der Bot über die Berechtigung <code>Rollen verwalten</code> verfügt.</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden zu jedem registrierten Geburtstag gespeichert:

* Die Discord-Nutzer-ID des Mitglieds
* Tag und Monat des Geburtstags
* Das Geburtsjahr (falls vom Nutzer angegeben)
* Ob der Geburtstag gesperrt ist (falls die Administrator-Geburtstagsverwaltung aktiviert ist)
* Metadaten zum Eintrag (Erstellungsdatum und Zeitpunkt der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/de/docs/custom-bot/additional-features/#reset-module-database).
