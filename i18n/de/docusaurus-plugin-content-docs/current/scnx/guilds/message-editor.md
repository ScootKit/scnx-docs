---
sidebar_position: 2
---

# Nachrichten-Editor

Der Nachrichten-Editor ist ein visuelles Werkzeug im SCNX Dashboard, mit dem du Discord-Nachrichten mit Text, Embeds,
Bildern, Buttons, Auswahlmenüs und mehr erstellen kannst  - ganz ohne Code. Er wird in verschiedenen Funktionen
verwendet, darunter [Bot Log-In](/docs/custom-bot/login-as-bot), [Custom Commands](/docs/custom-bot/custom-commands),
Modul-Konfigurationen und [Support Bot](/docs/support-bot/intro) Nachrichten-Konfigurationen.

## Übersicht {#overview}

Der Nachrichten-Editor ist in zwei Versionen verfügbar:

* **[V3 (Embed-basiert)](#v3)**  - Der klassische Editor mit Discords traditionellem Embed-System mit Text, bis zu
  10 Embeds und interaktiven Komponenten.
* **[V4 (Components V2)](#v4)**  - Der neue Editor basierend auf Discords Components V2-System mit
  Drag-and-Drop-Komponentenanordnung, Containern, Sektionen, Medien-Galerien und mehr.

Beide Editoren bieten eine [Live-Vorschau](#preview), [Parameter-Einfügung](#parameters),
[Kopieren/Einfügen](#copy-paste) und [Nachrichten-Teilen](#share).

:::info V4-Rollout
V4 befindet sich aktuell in der Beta-Phase und wird schrittweise ausgerollt. Der V3-Editor bleibt dauerhaft
verfügbar  - du wirst niemals gezwungen, auf V4 zu wechseln.

| Phase | Datum | Server |
|---|---|---|
| Phase 1 | 17. März 2026 | 5% der Server |
| Phase 2 | 31. März 2026 | 15% der Server |
| Phase 3 | 14. April 2026 | 25% der Server |
| Phase 4 | 21. April 2026 | 40% der Server |
| Phase 5 | 28. April 2026 | 50% der Server |
| Vollständiger Rollout | 5. Mai 2026 | 100% der Server |

Server werden in jeder Phase zufällig ausgewählt  - es gibt keine Möglichkeit zu prüfen oder vorherzusagen, in
welcher Phase dein Server hinzugefügt wird.

Du möchtest nicht warten? [ScootKit-Mitglieder](https://membership.scootkit.com) (Level 2+) erhalten sofortigen Zugang zum V4-Editor.
:::

---

## V3-Editor (Embed-basiert) {#v3}

Der V3-Editor ist der Standard-Nachrichten-Editor. Er ermöglicht es dir, Nachrichten mit Discords traditionellem
Embed-Format zu erstellen.

![](@site/docs/assets/scnx/guilds/message-editor/v3-editor-overview.png)

### Nachrichteninhalt {#v3-content}

Schreibe Text in das **Nachrichten**-Feld. Dies ist der Haupttext deiner Nachricht, der über allen Embeds angezeigt
wird. Unterstützt Discord-Markdown-Formatierung.

### Embeds {#v3-embeds}

Füge bis zu **10 Embeds** zu deiner Nachricht hinzu. Jedes Embed kann folgendes beinhalten:

| Feld | Beschreibung |
|---|---|
| **Titel** | Fettgedruckter Titel oben im Embed |
| **Beschreibung** | Haupttext des Embeds (unterstützt Discord-Markdown) |
| **Farbe** | Akzentfarbe auf der linken Seite des Embeds |
| **Autor** | Autorname und optionales Icon über dem Titel |
| **Felder** | Schlüssel-Wert-Paare im Embed-Inhalt; können inline sein |
| **Bild** | Großes Bild unten im Embed |
| **Thumbnail** | Kleines Bild oben rechts im Embed |
| **Footer** | Kleiner Text unten im Embed mit optionalem Icon |

:::tip
Verwende den Farbwähler oder gib direkt einen HEX-Farbcode ein, um die Embed-Akzentfarbe festzulegen.
:::

### Interaktive Komponenten {#v3-components}

* **Link-Buttons**  - Öffnen eine URL beim Klicken (bis zu 5).
* **Selbstrollen-Buttons**  - Vergeben, entfernen oder wechseln eine Rolle beim Klicken (bis zu 5). Anpassbare
  Stile: Primary, Secondary, Success, Danger.
* **Custom-Command-Buttons**  - Lösen einen [Custom Command](/docs/custom-bot/custom-commands) mit einem
  **Button**-Trigger beim Klicken aus.
* **Custom-Command-Dropdown**  - Ein Auswahlmenü, das beim Auswählen einer Option einen Custom Command auslöst.
* **Selbstrollen-Dropdown**  - Ein Auswahlmenü, mit dem Nutzer sich selbst Rollen zuweisen können.

### Bildanhänge {#v3-attachments}

Hänge bis zu **5 Bilder** an deine Nachricht an, die unter dem Nachrichteninhalt und den Embeds angezeigt werden.

### Dynamische Bildgenerierung {#v3-dynamic-image}

Generiere ein individuelles Bild für jede gesendete Nachricht. Das Bild wird im ersten Embed oder als Anhang
angezeigt. Nutze den **Bild-Editor**, um es mit Textelementen, Bildern und Hintergründen zu gestalten.

---

## V4-Editor (Components V2) {#v4}

Der V4-Editor nutzt Discords Components V2-System. Anstelle von Embeds baust du Nachrichten aus einer Liste von
Komponenten auf, die in Containern verschachtelt werden können. Du kannst bis zu **40 Komponenten** pro Nachricht
hinzufügen und sie per **Drag-and-Drop** neu anordnen.

![](@site/docs/assets/scnx/guilds/message-editor/v4-editor-overview.png)

### Verfügbare Komponenten {#v4-components}

| Komponente | Beschreibung |
|---|---|
| **Text Display** | Eigenständiger Textblock mit Discord-Markdown (bis zu 4.000 Zeichen). Kann in eine Sektion umgewandelt werden und umgekehrt. |
| **Container** | Gruppiert Komponenten mit einer optionalen Akzentfarbe. Kann nicht in anderen Containern verschachtelt werden. |
| **Sektion** | 1–3 Textelemente mit einem Zubehör (Button oder Thumbnail). Ideal um Text mit einem kleinen Bild zu kombinieren. |
| **Action Row** | Reihe mit bis zu 5 Buttons **oder** 1 Dropdown-Menü. Buttons und Dropdowns können nicht gemischt werden. |
| **Medien-Galerie** | Zeigt 1–10 Bilder in einem Rasterlayout, jeweils mit optionalem Alternativtext (bis zu 1.024 Zeichen). |
| **Bild** | Ein einzelnes hochgeladenes Bild. |
| **Trenner** | Visueller Trenner mit konfigurierbarem Abstand (Klein / Groß) und optionaler Trennlinie. |
| **Dynamisches Bild** | Platziert ein dynamisch generiertes Bild. Kann auf der obersten Ebene oder in einem Container sein. |

### Buttons {#v4-buttons}

Buttons befinden sich in einer Action Row oder als Zubehör einer Sektion. Jeder Button hat einen Aktionstyp:

| Aktionstyp | Beschreibung |
|---|---|
| **Selbstrolle** | Vergibt, entfernt oder wechselt eine Rolle beim Klicken |
| **Link** | Öffnet eine URL (nutzt immer den Link-Stil) |
| **Custom Command** | Löst einen [Custom Command](/docs/custom-bot/custom-commands) mit Button-Trigger aus |
| **Deaktiviert** | Nicht-interaktiver Button (nützlich als visuelles Label) |

Jeder Button kann ein **Label** (bis zu 80 Zeichen), ein **Emoji** und einen **Stil** haben (Primary/Blurple,
Secondary/Grau, Success/Grün, Danger/Rot oder Link).

### Dropdown-Menüs {#v4-dropdown}

Ein Auswahlmenü in einer Action Row mit bis zu **25 Optionen** (jeweils mit Label, optionaler Beschreibung und
Emoji). Optionen können per Drag-and-Drop neu angeordnet werden. Zwei Aktionstypen werden unterstützt:

* **Custom-Command-Dropdown**  - Jede Option löst einen Custom Command beim Auswählen aus.
* **Selbstrollen-Dropdown**  - Jede Option weist eine Rolle zu. Unterstützt konfigurierbare Min-/Max-Auswahl.

---

## Von V3 zu V4 konvertieren {#migration}

Du kannst eine V3-Nachricht in V4 konvertieren, indem du den **"Zu V4 Editor konvertieren"**-Button in der
V3-Editor-Toolbar verwendest (wenn V4 für deinen Server aktiviert ist).

| V3-Element | V4-Komponente |
|---|---|
| Nachrichteninhalt | Text Display |
| Embed | Container mit verschachtelten Komponenten |
| Embed-Titel / Beschreibung / Felder | Text Display (im Container) |
| Embed-Thumbnail | Sektion mit Thumbnail-Zubehör |
| Embed-Bild | Medien-Galerie |
| Embed-Footer | Trenner + Text Display |
| Link- / Selbstrollen- / Custom-Command-Buttons | Action Row mit Buttons |
| Custom-Command-Dropdown | Action Row mit Dropdown-Menü |
| Selbstrollen-Dropdown | Action Row mit Rollen-Auswahl |

:::warning
Diese Konvertierung ist **einmalig**  - du kannst nicht zurück zu V3 konvertieren. Folgende Funktionen **können nicht
migriert** werden: Autor-Icons, Footer-Icons und Embed-Zeitstempel.
:::

---

## Gemeinsame Funktionen {#common-features}

Diese Funktionen sind in beiden Editoren (V3 und V4) verfügbar.

### Parameter {#parameters}

Füge dynamische Parameter in Textfelder ein, indem du den **Parameter-Auswahl**-Button verwendest. Parameter wie
`%userTag%` oder `%guildName%` werden beim Senden der Nachricht durch die tatsächlichen Werte ersetzt. Verfügbare
Parameter hängen vom jeweiligen Kontext ab.

### Kopieren und Einfügen {#copy-paste}

Nutze **"Nachricht kopieren"**, um die gesamte Nachricht zu kopieren. Füge sie mit **"Nachricht einfügen"** in ein
beliebiges anderes Nachrichten-Editor-Feld auf SCNX ein. Beim Einfügen wird der bestehende Inhalt überschrieben.

### Nachricht teilen {#share}

Erstelle einen einzigartigen Teilen-Link über **"Nachricht teilen"**. Der Link ist ein Snapshot  - zukünftige
Änderungen werden nicht synchronisiert.

:::caution
Geteilte Nachrichten können schädliche Inhalte enthalten. Importiere nur Nachrichten aus vertrauenswürdigen Quellen.
:::

### Live-Vorschau {#preview}

Beide Editoren zeigen eine Echtzeit-Vorschau, wie deine Nachricht in Discord aussehen wird.

:::info
Die Vorschau ist eine Annäherung. Das tatsächliche Aussehen in Discord kann je nach Plattform und Gerät leicht
abweichen.
:::

---

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Meine Nachricht lässt sich nicht speichern / zeigt Validierungsfehler</summary>

  Der Editor validiert deine Nachricht vor dem Speichern. Häufige Probleme:
  <ul>
    <li>Leere Text Displays oder Embeds  - füge Inhalt hinzu oder entferne die leere Komponente.</li>
    <li>Buttons ohne Label oder Emoji  - jeder Button braucht mindestens eines davon.</li>
    <li>Selbstrollen-Buttons ohne ausgewählte Rolle  - wähle eine Rolle aus oder entferne den Button.</li>
    <li>Custom-Command-Buttons ohne verknüpften Befehl  - wähle einen Custom Command aus oder entferne den Button.</li>
    <li>Link-Buttons mit ungültiger oder fehlender URL  - gib eine gültige URL ein, die mit <code>https://</code> beginnt.</li>
    <li>Zu viele Komponenten  - V4-Nachrichten sind auf 40 Komponenten begrenzt.</li>
  </ul>
</details>

<details>
  <summary>Ich sehe die V4-Editor-Option nicht</summary>

  Der V4-Editor wird schrittweise ausgerollt. Überprüfe den <a href="#overview">Rollout-Zeitplan</a> oben. <a href="https://membership.scootkit.com">ScootKit-Mitglieder</a> (Level 2+) erhalten sofortigen Zugang.
</details>

<details>
  <summary>Ich habe zu V4 konvertiert und es fehlen Inhalte</summary>

  Autor-Icons, Footer-Icons und Embed-Zeitstempel können nicht migriert werden und gehen bei der Konvertierung
  verloren. Siehe die <a href="#migration">Konvertierungstabelle</a> für Details.
</details>

<details>
  <summary>Buttons oder Auswahlmenüs funktionieren nach dem Senden nicht</summary>
  <ul>
    <li>Stelle sicher, dass der verknüpfte <b>Custom Command</b> <b>aktiviert</b> ist und einen <b>Button</b>-Trigger hat.</li>
    <li>Bei Selbstrollen-Buttons stelle sicher, dass die höchste Rolle des Bots <b>über</b> den zu verwaltenden Rollen liegt und der Bot die <b>Rollen verwalten</b>-Berechtigung hat.</li>
    <li>Überprüfe, ob der Bot die notwendigen Berechtigungen im Kanal hat.</li>
  </ul>
</details>
