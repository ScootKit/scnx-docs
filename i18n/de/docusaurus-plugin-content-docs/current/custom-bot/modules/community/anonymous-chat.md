# Anonymer Chat

Lasse deine Nutzer ihre Erfahrungen anonym teilen, während du gleichzeitig die volle Kontrolle über die Moderation deines Chats behältst.

<ModuleOverview moduleName="anonymous-chat" />

## Funktionen {#features}

* Nutzer können über einen Slash-Befehl anonyme Nachrichten an einen festgelegten Kanal senden.
* Jedem Nutzer wird für seine anonyme Identität ein eindeutiger, zufällig generierter Anzeigename und ein Avatar zugewiesen.
* Moderatoren können Nutzer anhand ihres Anzeigenamens für den anonymen Chat sperren, während die Anonymität dennoch gewahrt bleibt.
* Moderatoren können anonyme Nachrichten löschen.
* Ermögliche es Nutzern optional, ihre anonyme Identität zurückzusetzen.
* Unterstütze optional Webhook-basierte Nachrichten für ein natürlicheres Chat-Erscheinungsbild.
* Ermögliche es Nutzern optional, anonyme Nachrichten durch direktes Tippen im Kanal zu senden (weniger sicher).

## Einrichtung {#setup}

1. Erstelle einen Textkanal für anonyme Nachrichten und konfiguriere diesen in der [Modul-Konfiguration](#configuration).
2. Stelle sicher, dass der Bot im anonymen Chat-Kanal über die Berechtigungen `Kanal anzeigen`, `Nachrichten senden`, `Links einbetten` und `Nachrichten verwalten` verfügt.
3. Bei der Verwendung von Webhooks benötigt der Bot zusätzlich die Berechtigung `WebHooks verwalten`.
4. Richte die [Berechtigungen für Slash-Befehle](/de/docs/custom-bot/slash-commands/) für `/moderate-anonymous-channel` so ein, dass dieser Befehl auf Moderatoren beschränkt ist.

## Nutzung {#usage}

Nutzer können anonyme Nachrichten über `/anonymous-message` senden. Bei der ersten Verwendung wird ihnen automatisch ein zufällig generierter Anzeigename und ein Avatar zugewiesen. Falls das Zurücksetzen der Identität aktiviert ist, können Nutzer beim Senden einer neuen Nachricht wählen, ob sie ihre Identität zurücksetzen möchten.

Moderatoren können den anonymen Chat über `/moderate-anonymous-channel` verwalten:

* **Einen Nutzer sperren**: Verwende `disable` zusammen mit dem anonymen Anzeigenamen des Nutzers. Dies funktioniert auch mit früheren Anzeigenamen, falls der Nutzer seine Identität zurückgesetzt hat.
* **Einen Nutzer entsperren**: Verwende `enable` zusammen mit dem aktuellen anonymen Anzeigenamen des Nutzers.
* **Eine Nachricht löschen**: Verwende d`elete-message`, um eine anonyme Nachricht zu entfernen. Die Autovervollständigung hilft dir dabei, die Nachricht zu finden.

Falls das Senden von Nachrichten in den Chat aktiviert ist, können Nutzer auch direkt in den anonymen Chat-Kanal schreiben – ihre Nachricht wird gelöscht und anonym neu gepostet. Beachte, dass Bots zur Nachrichtenprotokollierung (Logging-Bots) die ursprüngliche Nachricht dennoch erfassen könnten. Daher wird diese Methode für wirklich anonyme Chats nicht empfohlen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
|---------|-------------|
| `/anonymous-message message:<Text> [reset-identity:<Boolean>]` | Sende eine anonyme Nachricht in den konfigurierten Kanal. Setze optional deine anonyme Identität vor dem Senden zurück (nur verfügbar, wenn das Zurücksetzen der Identität in der Konfiguration aktiviert ist). |
| `/moderate-anonymous-channel disable display-name:<Text> [reason:<Text>]` | Sperre einen Nutzer anhand seines anonymen Anzeigenamens für das Senden anonymer Nachrichten. Optional kann ein Grund angegeben werden. Erfordert die Berechtigung Mitglieder moderieren. |
| `/moderate-anonymous-channel enable display-name:<Text>` | Hebe die Sperre eines zuvor blockierten Nutzers anhand seines anonymen Anzeigenamens auf. Erfordert die Berechtigung Mitglieder moderieren. |
| `/moderate-anonymous-channel delete-message message:<Text>` | Lösche eine anonyme Nachricht. Der Nachrichten-Parameter unterstützt die Autovervollständigung, um nach Inhalt oder ID zu suchen. Erfordert die Berechtigung Mitglieder moderieren. |

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Modul konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=anonymous-chat%7Cconfig).

| Feld | Beschreibung |
|-------|-------------|
| Kanal | Der Kanal, in den die anonymen Nachrichten gesendet werden. |
| Webhook-Nachrichten verwenden? | Falls aktiviert, werden Nachrichten über Webhooks mit dem anonymen Anzeigenamen und Avatar des Nutzers gesendet, was ein natürlicheres Chat-Erlebnis ermöglicht. Dies deaktiviert die individuelle Nachrichtenanpassung. |
| Anonyme Nachrichten | Passe das Erscheinungsbild anonymer Nachrichten an (wird nur verwendet, wenn Webhooks deaktiviert sind). Unterstützt Parameter für Anzeigenamen, Avatar und Nachrichteninhalt. |
| Bestätigung des Nachrichtenversands | Die Bestätigungsnachricht, die dem Nutzer angezeigt wird, nachdem seine anonyme Nachricht gesendet wurde. |
| Blockiert-Nachricht | Die Nachricht, die gesperrten Nutzern angezeigt wird, wenn sie versuchen, eine anonyme Nachricht zu senden. |
| Nutzern erlauben, ihre Identität zurückzusetzen? | Falls aktiviert, können Nutzer ihren anonymen Anzeigenamen und Avatar beim Senden einer Nachricht zurücksetzen. Moderatoren können Nutzer weiterhin über jeden ihrer früheren anonymen Anzeigenamen sperren, selbst nach einem Reset. |
| Nutzern erlauben, anonyme Nachrichten durch Senden von Nachrichten in den Kanal zu erstellen? (unsicher) | Falls aktiviert, können Nutzer direkt in den anonymen Kanal schreiben, um anonyme Nachrichten zu erstellen. Dies wird für wirklich anonyme Chats nicht empfohlen, da Bots zur Nachrichtenprotokollierung den ursprünglichen Verfasser erfassen können. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Anonyme Nachrichten werden nicht angezeigt</summary>
  <ul>
    <li>Stelle sicher, dass der konfigurierte Kanal existiert und der Bot über die erforderlichen Berechtigungen verfügt.</li>
    <li>Falls Webhooks verwendet werden, stelle sicher, dass der Bot über die Berechtigung Webhooks verwalten <code>WebHooks verwalten</code> verfügt.</li>
  </ul>
</details>

<details>
  <summary>Ein Nutzer, dessen Identität zurückgesetzt wurde, kann nicht blockiert werden</summary>

Wenn ein Nutzer seine Identität zurücksetzt, kannst du ihn weiterhin über seinen alten Anzeigenamen sperren – das Modul verfolgt frühere Anzeigenamen und findet so die aktuelle Identität des Nutzers.
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden gespeichert:

Für jeden anonymen Nutzer:
* Die Discord-Nutzer-ID
* Der zufällig generierte anonyme Anzeigename und die Avatar-URL
* Ob der Nutzer gesperrt ist und der Grund für die Sperrung (falls vorhanden)
* Metadaten zum Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Für jede anonyme Nachricht:
* Die Nachrichten-ID und Kanal-ID
* Der Nachrichteninhalt
* Ob die Nachricht gelöscht wurde
* Metadaten zum Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Für jedes Zurücksetzen der Identität:
* Die Discord-Nutzer-ID
* Der vorherige anonyme Anzeigename
* Metadaten zum Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/de/docs/custom-bot/additional-features/#reset-module-database).
