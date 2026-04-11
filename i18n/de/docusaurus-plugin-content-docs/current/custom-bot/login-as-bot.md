# Versende Nachrichten / Embeds, Self-Rollen und mehr

Sende Nachrichten, Embeds und Forenposts über deinen Bot – direkt aus dem SCNX-Dashboard. Du kannst diese Funktion auch nutzen, um Selbst-Rollen-Nachrichten mit Knöpfen zu erstellen.

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: true}} />

## Übersicht {#overview}

Als Bot anmelden ermöglicht es dir, die Nachrichten deines Bots direkt über das Dashboard zu steuern, ohne Discord auf deinem Gerät geöffnet haben zu müssen. Folgende Optionen stehen dir zur Verfügung:

* Verschicke Nachrichten und formatierte Embeds in sämtliche Kanäle, auf die dein Bot Zugriff hat.
* Bearbeite bereits gesendete Bot-Nachrichten.
* Hänge Dateien an Nachrichten an.
* Füge interaktive Komponenten wie Knöpfe und Auswahlmenüs hinzu (einschließlich Selbst-Rollen-Knöpfe).
* Erstelle Forenposts in Foren-Kanälen.
* Sieh dir den Audit-Log aller über das Dashboard gesendeten Nachrichten an.

## Einrichtung {#setup}

1. Öffne die Seite [Als Bot anmelden](https://scnx.app/de/glink?page=bot/login) auf deinem SCNX-Dashboard.
2. Stelle sicher, dass dein Bot **online** ist  - Als Bot anmelden setzt voraus, dass dein Bot ohne kritische Fehler läuft.
3. Dein Bot benötigt die Berechtigungen **Kanal anzeigen** und **Nachrichten senden** in jedem Kanal, in den du Nachrichten verschicken möchtest.

:::caution
Falls dein Bot offline ist oder kritische Probleme aufweist, kannst du Als Bot anmelden nicht nutzen. Sieh dir die [Fehlerbehebungs-Dokumentation](/de/docs/custom-bot/troubleshooting/) an, falls dein Bot nicht startet.
:::

## Versenden einer Nachricht {#send-message}

1. Öffne die Seite [Als Bot anmelden](https://scnx.app/de/glink?page=bot/login) in deinem SCNX-Dashboard.
2. Wähle den Kanalaus der Kanalliste auf der linken Seite aus, in den du die Nachricht senden möchtest.
3. Verfasse deine Nachricht mit dem Nachrichten-Editor. Folgende Optionen stehen dir zur Verfügung:
    * Schreibe reinen Text in das Nachrichtenfeld.
    * Füge ein oder mehrere Embeds mit benutzerdefiniertem Titel, Beschreibung, Farbe, Feldern, Bildern, Fußzeile und mehr hinzu.
    * Füge Dateien hinzu.
    * Füge Komponenten hinzu (siehe [Komponenten hinzufügen](#components)).
4. Klicke zum Absenden auf „Nachricht senden".

:::tip
Nutze die Vorschau im Nachrichten-Editor, um zu sehen, wie deine Nachricht vor dem Absenden aussehen wird.
:::

## Eine Nachricht bearbeiten {#edit-message}

Du kannst Nachrichten bearbeiten, die zuvor von deinem Bot gesendet wurden (einschließlich Nachrichten, die über den Als Bot anmelden gesendet wurden).

1. Öffne die Seite [Als Bot anmelden](https://scnx.app/de/glink?page=bot/login) auf deinem SCNX-Dashboard.
2. Wähle den Kanal, in den du die Nachricht senden möchtest, aus der Kanalliste auf der linken Seite aus.
3. Suche die Nachricht in der Kanalansicht und klicke auf „Nachricht bearbeiten".
4. Passe den Nachrichteninhalt, die Embeds oder die Komponenten mit dem Nachrichten-Editor an.
5. Klicke auf „Nachricht bearbeiten", um deine Änderungen zu übernehmen.

## Komponenten hinzufügen {#components}

Du kannst Nachrichten, die über Als Bot anmelden gesendet werden, interaktive Komponenten hinzufügen:

* **Eigene Befehl Knöpfe hinzufügen**  - Knöpfe, die deine [Eigenen Befehle](/de/docs/custom-bot/custom-commands/) auslösen, wenn sie angeklickt werden. Konfiguriere diese im Bereich „Komponenten" des Nachrichten-Editors und verknüpfe sie mit einem Eigenen Befehl, der einen Knopf-Trigger nutzt.
* **Selbst-Rollen-Knopf hinzufügen**  - Knöpfe, die beim Anklicken eine Rolle hinzufügen oder entfernen und es Mitgliedern so ermöglichen, sich selbst Rollen zuzuweisen. Dies ist eine moderne, übersichtlichere Alternative zu den herkömmlichen „Reaction Roles".
* **Select-Menüs**  - Auswahlmenüs, mit denen Nutzer aus einer Liste von Optionen wählen können. Diese können ebenfalls mit Eigenen Befehlen verknüpft werden.

:::info
Um einen Eigene Befehl Knopf zu verwenden, musst du zuerst einen [Eigenen Befehl erstellen](/de/docs/custom-bot/custom-commands/), der einen Knopf-Trigger nutzt. Diesen kannst du dann beim Hinzufügen eines Eigenen Befehl Knopfes im Nachrichten-Editor auswählen.
:::

## Einen Forenpost erstellen {#forum-post}

Wenn der ausgewählte Kanal ein Foren-Kanal ist, kannst du einen neuen Post erstellen:

1. Öffne die Seite [Als Bot anmelden](https://scnx.app/de/glink?page=bot/login) auf deinem SCNX-Dashboard.
2. Wähle einen Foren-Kanal aus.
3. Klicke auf **„Post erstellen"**.
4. Gib den Namen des Posts ein und verfasse die erste Nachricht.
5. Wähle optional Tags aus, die dem Beitrag zugewiesen werden sollen.
6. Klicke auf **„Post erstellen"**, um ihn zu veröffentlichen.

## Audit-Log für gesendete Nachrichten {#audit-log}

Als Bot anmelden führt ein Protokoll über alle Nachrichten, die über das Dashboard gesendet wurden. Klicke auf „Gesendete Nachrichten", um den Audit-Log aufzurufen, der folgende Informationen anzeigt:

* Den Kanal, in den jede Nachricht gesendet wurde.
* Wer die Nachricht über das Dashboard gesendet hat.
* Ob die Nachricht **zugestellt** oder **nicht zugestellt** wurde.
* Das Nachrichtenformat.

Diese Funktion ist hilfreich, um den Überblick über gesendete Inhalte zu behalten und Fehler bei fehlgeschlagenen Zustellungen zu beheben.

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Als Bot anmelden zeigt „Bot ist offline" an</summary>

  Dein Bot muss online sein und darf keine kritischen Probleme aufweisen. Überprüfe das
  <a href="https://scnx.app/de/glink?page=bot/manage">Bot-Dashboard</a> nach Fehlermeldungen und schaue dir die
  <a href="/de/docs/custom-bot/troubleshooting/">Fehlerbehebungs-Dokumentation</a> an.
</details>

<details>
  <summary>Ich kann keine Kanäle sehen / Fehler: „No text channels"</summary>

  Dein Bot benötigt die Berechtigungen <b>Kanal anzeigen</b> und <b>Nachrichten senden</b>. Bitte einen Server-Administrator, die Kanalberechtigungen des Bots zu überprüfen.
</details>

<details>
  <summary>Nachricht konnte nicht gesendet werden / „Nicht zugestellt"</summary>
  <ul>
    <li>Stelle sicher, dass dein Bot im Zielkanal über die Berechtigungen <b>Kanal anzeigen</b>, <b>Nachrichten senden</b> und <b>Links einbetten</b> verfügt.</li>
    <li>Falls du Embeds eingefügt hast, stelle sicher, dass der Bot über die Berechtigung <b>Links einbetten</b> verfügt.</li>
    <li>Falls du Dateien angehängt hast, stelle sicher, dass der Bot über die Berechtigung <b>Dateien anhängen</b> verfügt und die Datei nicht zu groß ist.</li>
    <li>Überprüfe, ob der Kanal noch existiert und nicht gelöscht wurde.</li>
  </ul>
</details>

<details>
  <summary>Ich kann eine Nachricht nicht bearbeiten</summary>
  <ul>
    <li>Du kannst nur Nachrichten bearbeiten, die von deinem Bot gesendet wurden.</li>
    <li>Stelle sicher, dass dein Bot weiterhin Zugriff auf den Kanal hat, in dem die Nachricht gesendet wurde.</li>
  </ul>
</details>
