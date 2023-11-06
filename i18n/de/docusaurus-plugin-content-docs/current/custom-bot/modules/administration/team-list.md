# Teammitglieder-Liste

Zeige alle deine Teammitglieder und erkläre Teamrollen in einem immer aktuellen Embed.

<ModuleOverview moduleName="team-list" />

## Funktionen {#features}

* Zeige Mitglieder ausgewählter Rollen in einem immer aktuellen Embed an.
* Zeige optional deren aktuellen Online-Status an.
* Füge Beschreibungen zu Rollen hinzu und überschreibe Rollennamen.

Hier ist ein Beispiel (du kannst das Aussehen anpassen):

![](@site/docs/assets/custom-bot/modules/team-list/example.png)

## Einrichtung {#setup}

1. Erstelle einen Kanal, in welchem der Bot die Teamliste senden soll. Dieser Kanal muss leer sein, und der Bot muss die Berechtigung "Kanal ansehen", "Nachrichten senden" und "Nachrichtenverlauf anzeigen" haben.
2. Öffne die [Modulkonfiguration](https://scnx.app/de/glink?page=bot/configuration?file=team-list%7Cconfig) und [konfiguriere das Modul](#configuration).
3. Lade die Konfiguration deines Bot neu, um die Änderungen anzuwenden - der Bot wird automatisch eine Teamliste senden.

## Verwendung {#usage}

Mitglieder werden anhand deiner [konfigurierten Rollen](#configuration) angezeigt. Du kannst Mitglieder nicht manuell hinzufügen oder entfernen.

Das Teamlisten-Embed wird automatisch alle 15 Minuten aktualisiert - von deiner Seite aus ist keine Aktion notwendig. Das bedeutet auch, dass Änderungen (wie das Entfernen einer Team-Rolle von einem Mitglied) bis zu 15 Minuten dauern können, um angezeigt zu werden.

## Konfiguration {#configuration}

Diese Konfigurationdatei erlaubt dir, einzustellen, welche Rollen angezeigt werden und wie das Embed aussehen soll.
Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=team-list%7Cconfig).

| Feld                            | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kanal                          | Dies ist der Kanal, in den die Teamliste gesendet wird. Wenn der Bot bereits zuvor eine Nachricht gesendet hat, wird die vorhandene Nachricht zur Teamliste bearbeitet. Wir empfehlen einen leeren Kanal.                                                                                                                                                                                                                                                                                                                                                                           |
| Gelistete Rollen                     | Mitglieder mit diesen Rollen werden in der Teamliste angezeigt. Bitte beachte, dass ein Mitglied mehrfach im Embed unter jeder deren Rollen angezeigt werden kann.                                                                                                                                                                                                                                                                                                                                                                                                                |
| Beschreibung von Rollen             | Optional kannst du eine Beschreibung einer Rolle hinzufügen. Diese wird unter dem Rollennamen und über den Mitgliedern der Rolle angezeigt.<br/>Erstes Feld: ID einer Rolle<br/>Zweites Feld: Beschreibung, die unter der Rolle angezeigt werden soll.                                                                                                                                                                                                                                                                                                                                                          |
| Embed                            | Dies sind Einstellungen, die das Aussehen deines Embeds auf Discord beeinflussen.<br/>`title`: Dies ist der Titel des Embeds, welcher als erstes im Embed angezeigt wird.<br/>`description` (optional): Dies ist der Text, der unter dem Titel im Embed angezeigt wird.<br/>`color`: Dies ist die Farbe des Embeds (verwende eine [HEX-Farbe oder einen unterstützten Farbwert](./../../additional-features#embed-colors))<br/>`thumbnail-url` / `img-url` (optional): URLs zum Anzeigen von Bildern im Embed. Du kannst den [Dateien-Speicher](https://scnx.app/de/user/files) zum Hochladen von einem Bild verwenden und die Bild-URL kopieren.|
| Name-Overwrites                  | Du kannst optional den Anzeigenamen einer Rolle überschreiben. Dieser Wert wird anstelle des Rollennamens im Embed angezeigt. Wenn du den Rollennamen anzeigen willst, füge keinen Wert hinzu.<br/>Erstes Feld: ID einer Rolle.<br/>Zweites Feld: Name, der anstelle des Rollennamens angezeigt wird.                                                                                                                                                                                                                                                                                           |
| Online-Status von Teammitgliedern anzeigen | Wenn aktiviert wird das Modul nicht nur die Mitglieder der ausgewählten Rolle auflisten, sondern auch den aktuellen Onlinestatus des Mitglieds anzeigen. Bitte stelle sicher, dass die angezeigten Mitglieder dieser Anzeige zustimmen. Nur der Status wird angezeigt (z. B. `Online`, `Bitte nicht stören`), Aktivitäten (wie `Spielt Cyberpunk 2077`) werden nicht angezeigt.                                                                                                                                                                                                                      |

## Fehlerbehebung {#troubleshooting}

<details>
	<summary>Die Teamliste wird im ausgewählten Kanal nicht angezeigt</summary>
	<ul>
		<li>Stelle sicher, dass der ausgewählte Kanal leer ist.</li>
		<li>Stelle sicher, dass der Bot die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Nachrichtenverlauf anzeigen" in dem Kanal hat.</li>
		<li>Stelle sicher, dass das Rollen-Feld keine inzwischen gelöschten Rollen enthält und versuche, die Konfiguration erneut zu speichern.</li>
		<li>Stelle sicher, dass du <a href="./../../additional-features#embed-colors">richtige Farbwerte</a> in deiner Konfiguration verwendest.</li>
		<li>Starte deinen Bot neu.</li>
	</ul>
</details>

<details>
	<summary>Mitglieder / Inhalt wird abgeschnitten (ersetzt mit "…")</summary>

	Das ist eine Begrenzung von Discord für die maximale Länge von Embeds. Du kannst folgendes versuchen:
	<ul>
		<li>Versuche, eine Rolle mit weniger Mitgliedern <a href="#configuration">zu konfigurieren</a>.</li>
		<li>Versuche, "Online-Status von Teammitgliedern anzeigen" zu deaktivieren, um die Zeichennutzung zu reduzieren.</li>
		<li>Versuche, die betroffene Rolle in kleinere Teile aufzuteilen.</li>
	</ul>
</details>

<details>
	<summary>Ein Mitglied fehlt in der Teamliste / Die Teamliste ist nicht aktuell</summary>
	<ul>
		<li>Stelle sicher, dass der ausgewählte Kanal leer ist.</li>
		<li>Stelle sicher, dass der Bot die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Nachrichtenverlauf anzeigen" in dem Kanal hat.</li>
		<li>Stelle sicher, dass du mindestens 15 Minuten lang gewartet hast, da dies das Intervall ist, in dem sich das Embed aktualisiert.</li>
		<li>Stelle sicher, dass du dem Nutzer genau die ausgewählte Rolle zugewiesen hast. Beachte, dass Rollen mit demselben Namen immer noch eine unterschiedliche ID haben, was bedeutet, dass diese nicht zusammen gruppiert werden können und separat konfiguriert werden müssen.</li>
		<li>Stelle sicher, dass das Rollen-Feld keine inzwischen gelöschten Rollen enthält und versuche, die Konfiguration erneut zu speichern.</li>
		<li>Stelle sicher, dass du <a href="./../../additional-features#embed-colors">richtige Farbwerte</a> in deiner Konfiguration verwendest.</li>
	</ul>
</details>