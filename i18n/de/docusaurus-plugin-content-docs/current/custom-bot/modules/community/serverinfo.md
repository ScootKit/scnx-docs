# Serverinformationen

Zeige ein automatisch aktualisierendes Embed mit Serverstatistiken und Informationen in einem Kanal an.

<ModuleOverview moduleName="serverinfo" />

## Funktionen {#features}

* Zeigt ein automatisch aktualisierendes Embed mit anpassbaren Serverinformationen in einem festgelegten Kanal an.
* Unterstützt eine Vielzahl dynamischer Variablen, darunter Mitgliederanzahl, Bot-Anzahl, Online-Status, Boost-Statistiken, Kanalanzahl, Rollenanzahl und mehr.
* Konfigurierbare Embed-Felder mit Unterstützung für die Inline-Anzeige.
* Zähle Mitglieder mit einer bestimmten Rolle oder Online-Mitglieder mit einer bestimmten Rolle.
* Das Embed aktualisiert sich automatisch alle 5 Minuten.

## Einrichtung {#setup}

1. Erstelle einen Textkanal für das Server-Informations-Embed und konfiguriere ihn in der [Modul-Konfiguration](#configuration-config).
2. Stelle sicher, dass der Bot in dem konfigurierten Kanal über die Berechtigungen `Kanal anzeigen`, `Nachrichten senden`, `Links einbetten` und `Nachrichtenverlauf anzeigen` verfügt.
3. Konfiguriere die Embed-Felder in der [Embed-Felder-Konfiguration](#configuration-fields), um die von dir gewünschten Informationen anzuzeigen.

## Nutzung {#usage}

Dieses Modul arbeitet automatisch – es gibt keine Befehle. Der Bot sendet ein Embed in den konfigurierten Kanal und aktualisiert es alle 5 Minuten mit den neuesten Serverstatistiken.

Falls die Embed-Nachricht gelöscht wird, erstellt der Bot beim nächsten Aktualisierungszyklus automatisch eine Neue.

## Konfiguration {#configuration}

Dieses Modul verfügt über mehrere Konfigurationsdateien. Bitte überprüfe diese unten.

### Modul-Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du die Funktionalität dieses Moduls konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=serverinfo%7Cconfigs%2Fconfig).

| Feld | Beschreibung |
|-------|-------------|
| Kanal | Der Kanal, in dem das Server-Informations-Embed angezeigt wird. |
| Embed | Passe den Titel, die Beschreibung und die Farbe des Embeds an. |

### Embed-Felder-Konfiguration {#configuration-fields}

In dieser Konfigurationsdatei kannst du die im Server-Informations-Embed angezeigten Felder hinzufügen und anpassen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=serverinfo%7Cconfigs%2Ffields).

Jeder Eintrag stellt ein Feld im Embed mit den folgenden Optionen dar:

| Feld | Beschreibung |
|-------|-------------|
| Feldname | Der Name/Titel des Embed-Feldes. |
| Feldinhalt | Der Inhalt des Feldes. Du kannst die folgenden Variablen verwenden: `%memberCount%` (Mitglieder insgesamt), `%botCount%` (Bots), `%userCount%` (Nutzer ohne Bots), `%onlineMemberCount%` (Online-Mitglieder), `%daysSinceCreation%` (Tage seit Server-Erstellung), `%guildCreationTimestamp%` (Erstellungsdatum), `%guildBoosts%` (Anzahl der Boosts), `%boostLevel%` (Aktuelles Boost-Level), `%boosterCount%` (Anzahl der Booster), `%channelCount%` (Kanäle), `%roleCount%` (Rollen), `%emojiCount%` (Emojis), `%newline%` (Zeilenumbruch), `%userWithRoleCount-<ID>%` (Mitglieder mit einer bestimmten Rolle), `%onlineUserWithRoleCount-<ID>%` (Online-Mitglieder mit einer bestimmten Rolle). |
| In-Zeilen-Feld? | Falls aktiviert, wird das Feld inline neben anderen Inline-Feldern angezeigt. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Das Embed wird nicht angezeigt oder aktualisiert</summary>
  <ul>
    <li>Stelle sicher, dass der konfigurierte Kanal existiert und ein Textkanal ist.</li>
    <li>Stelle sicher, dass der Bot in dem Kanal über die Berechtigungen <code>Kanal anzeigen</code>, <code>Nachrichten senden</code>, <code>Links einbetten</code>, und <code>Nachrichtenverlauf anzeigen</code> verfügt.</li>
    <li>The embed updates every 5 minutes, so changes may take a moment to appear.</li>
  </ul>
</details>

<details>
  <summary>Die rollenbasierten Mitgliederzahlen zeigen falsche Werte an</summary>

  Stelle sicher, dass du die korrekte Rollen-ID in der Variable verwendest (z. B. <code>%userWithRoleCount-123456789%</code>). Beachte außerdem, dass die Anzahl der Online-Mitglieder von den Presence-Intents des Bots abhängt und bei sehr großen Servern möglicherweise nicht genau ist.
</details>
