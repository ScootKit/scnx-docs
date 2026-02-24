---
sidebar_position: 6
title: Bilderspeicher
description: Optimiere deine SCNX-Serververwaltung mit dem Guild Image Storage, einer zentralisierten Bildbibliothek für dein Team. Lade Bilder einfach hoch, organisiere sie oder generiere sie per KI, um sie nahtlos für deine Custom- und Support-Bot-Konfigurationen zu nutzen.
---

# Server-Bilderspeicher {#guild-image-storage}

Server-Bilderspeicher ist die gemeinsame, zentrale Bilderbibliothek deines Servers auf SCNX. Es ermöglicht deinem
gesamten Team, Bilder einfach hochzuladen, zu organisieren und in all deinen Bot-Konfigurationen wiederzuverwenden.
Verabschiede dich von dem Aufwand, Dateien in deinen persönlichen Speicher hochzuladen und sie manuell mit deinem Team
teilen zu müssen!

:::warning Beta-Funktion
Server-Bilderspeicher ist derzeit für ausgewählte Server als Early-Access-Experiment verfügbar. Bitte beachte, dass sich
diese Funktion in der Beta-Phase befindet und daher **Änderungen, Einschränkungen oder sogar einer Entfernung
unterliegen kann**, während wir sie weiter testen und verbessern.
:::

Wenn diese Funktion für deinen Server aktiviert ist, findest du **Bilder** in der Navigationsleiste deines Servers.

## Warum Server-Bilderspeicher nutzen? {#why-use-guild-image-storage}

Wann immer du ein Bild für deinen Custom Bot oder Support Bot benötigst – wie zum Beispiel ein Willkommensbanner, ein
Embed-Thumbnail oder einen automatisierten Anhang –, kannst du es direkt aus deiner gemeinsamen Serverbibliothek
abrufen.

* **Team-Zusammenarbeit:** Jeder **vertrauenswürdige Admin** auf deinem Server kann Bilder aus der gemeinsamen
  Bibliothek ansehen, bearbeiten und löschen, was sicherstellt, dass dein Team das Branding und die Assets des Servers
  problemlos gemeinsam pflegen kann.
* **Sofortige Anwendung:** Wähle Bilder direkt über eine integrierte Auswahl aus, während du deine Bots bearbeitest, mit
  der Möglichkeit, nahtlos zwischen deiner gemeinsamen Serverbibliothek und deinen persönlichen Dateien zu wechseln.
* **Einmal hochladen, überall nutzen:** Lade ein Bild einmal auf den Server hoch, und jeder in deinem Team kann es in
  jeder Bot-Konfiguration verwenden.

## Migration vom persönlichen Speicher {#migrating-from-personal-storage}

:::info Käufe für persönlichen Speicher
Jeder zusätzliche Speicherplatz, den du zuvor für deinen persönlichen Bereich gekauft hast, verbleibt auf deinem
persönlichen Konto.
**Persönlicher Speicher kann nicht auf das Server-Bilderspeicher-Kontingent eines Servers übertragen werden.** Du kannst
ihn wie gewohnt weiterverwenden.
Bitte beachte außerdem, dass du keine neuen Speicher-Upgrades mehr für deinen persönlichen Bereich kaufen kannst.
:::

Wenn du SCNX schon eine Weile nutzt, bist du wahrscheinlich mit dem persönlichen Bilder-Upload-Bereich
unter [scnx.app/user/file](https://scnx.app/de/user/files) vertraut.

Server-Bilderspeicher ist ein völlig separater, gemeinsamer Bereich. Um deine bestehenden Bilder aus deinem persönlichen
Bereich in die gemeinsame Serverbibliothek zu verschieben, **musst du sie manuell neu hochladen**.

1. Lade die Bilder, die du teilen möchtest, aus deinem [persönlichen Bereich](https://scnx.app/de/user/files) herunter.
2. Navigiere zur **Bilder**-Seite deines Servers.
3. Lade die Dateien in die [neue gemeinsame Bibliothek](https://scnx.app/de/glink?page=images) hoch.

## Bilder zu deiner Bibliothek hinzufügen {#adding-images-to-your-library}

Es gibt zwei Möglichkeiten, Bilder in die Bibliothek deines Servers zu bekommen: Dateien hochladen oder sie mit KI
generieren.

### 1. Dateien hochladen {#uploading-files}

:::success Direkte Uploads funktionieren auch!
Wenn du ein Bild zur Verwendung in einem Konfigurationsfeld auswählst, kannst du auch direkt ein Bild in den Speicher
deines Servers hochladen:

![Screenshot, der die direkte Bild-Upload-Option innerhalb eines Konfigurationsfeldes zeigt](@site/docs/assets/scnx/guilds/files/direct-upload.png)
:::

![Screenshot, der demonstriert, wie man Dateien auf der Bilder-Seite per Drag & Drop oder durch Auswahl hochlädt](@site/docs/assets/scnx/guilds/files/how-to-upload.png)

1. Navigiere über die Seitenleiste deines Servers zu **Bilder**.
2. Ziehe deine Dateien per Drag & Drop direkt in den Upload-Bereich oder klicke auf den Bereich, um die Dateiauswahl
   deines Geräts zu öffnen.
3. Du kannst mehrere Dateien auf einmal hochladen. Jede Datei wird einzeln verarbeitet, und ein Pop-up bestätigt, ob der
   Upload erfolgreich war oder ein Fehler aufgetreten ist.

*Hinweis: Wenn du eine identische Datei hochlädst, die bereits in der Bibliothek existiert, wird SCNX automatisch das
bestehende Bild zurückgeben, um unnötige Duplikate zu vermeiden.*

#### Dateianforderungen {#file-requirements}

Um eine reibungslose Leistung zu gewährleisten, muss jede einzelne Datei **25 MB oder kleiner** sein. Größere Dateien
werden automatisch abgelehnt.

| Format | Erlaubte Erweiterungen |
|--------|------------------------|
| JPEG   | `.jpg`, `.jpeg`        |
| PNG    | `.png`                 |
| GIF    | `.gif`                 |

### 2. Bilder mit KI generieren {#ai-generation}

:::info Kein Fan von Bildgenerierung?
Der Serverbesitzer und Administratoren können diese Funktion in
den [Servereinstellungen](https://scnx.app/glink?page=settings) ganz einfach deaktivieren. Die Option erscheint dann
nicht mehr im Dashboard. Module mit Bildgenerierungsfunktion funktionieren weiterhin und müssen, falls gewünscht,
manuell deaktiviert werden.
:::

Du brauchst ein Bild, hast aber keine Datei parat? Du kannst eines von Grund auf neu erstellen, indem du einen
Text-Prompt direkt auf der Bilder-Seite verwendest.

![Screenshot des Eingabefeldes für die KI-Bildgenerierung](@site/docs/assets/scnx/guilds/files/generate-image.png)

1. Suche die Box **Mit KI generieren**.
2. Gib eine detaillierte Beschreibung dessen ein, was du möchtest (bis zu 1.000 Zeichen).
3. Klicke auf **Bild generieren**.
4. Das Bild wird automatisch in deiner Bibliothek erscheinen und zur einfachen Filterung mit `ai` getaggt.

**Wichtige Details zur KI-Generierung:**

* **Kosten:** 15 KI-Guthaben pro Bild. Wenn dein Guthaben unter 15 KI-Guthaben liegt, wird die Generierung blockiert,
  bis du mehr über das SCNX-Dashboard kaufst.
* **Abmessungen:** Alle generierten Bilder haben gestochen scharfe 1024 × 1024 Pixel.
* **Inhaltsrichtlinie:** Prompts, die gegen unsere Sicherheitsrichtlinien verstoßen, werden abgelehnt. Dir wird für
  abgelehnte Prompts *kein* KI-Guthaben berechnet.

## Speicherlimits verstehen {#understanding-storage-limits}

Jeder Server hat ein bestimmtes Speicherkontingent basierend auf seinem SCNX-Plan. Du kannst deine Nutzung einfach über
den **Speicher**-Fortschrittsbalken oben auf der Bilder-Seite verfolgen.

:::tip KI-Bilder zählen nicht zum Kontingent!
Da du KI-Guthaben verwendest, um sie zu erstellen, belegen Bilder, die über
die [KI-Funktion des SCNX-Dashboards](#ai-generation) und jegliche [Bot-KI-Funktionen](/docs/custom-bot/modules/ai)
generiert wurden, **keinen** Speicherplatz des Kontingents deines Servers.
:::

:::info Was ist mit Bot-Uploads?
Bilder, die dein Custom Bot oder Support Bot automatisch speichert (zum Beispiel Ticket-Anhänge oder
Mod-Log-Screenshot-Beweise), zählen **durchaus** zu diesem Speicherlimit. Du kannst diese Funktionen normalerweise in
den betroffenen Modulen deaktivieren, wenn du den Server-Bilderspeicher nicht nutzen möchtest.
:::

| SCNX-Plan    | Gesamtspeicher |
|--------------|----------------|
| Starter      | ~50 MB         |
| Unlimited    | ~500 MB        |
| Professional | ~1 GB          |
| Enterprise   | ~2 GB          |

Wenn dein Server sein Speicherlimit erreicht, werden neue Uploads blockiert, bis du entweder ältere Bilder löschst oder
den SCNX-Plan deines Servers upgradest. Wenn ein Bot versucht, ein Bild hochzuladen, wird dies ebenfalls fehlschlagen,
was dazu führt, dass kein Bild hochgeladen wird.

![Screenshot der Server-Bilderspeicher-Galerie, der hochgeladene Bilder und den Speicher-Fortschrittsbalken zeigt](@site/docs/assets/scnx/guilds/files/guild-images.png)

## Deine Assets organisieren und finden {#organizing-and-finding-your-assets}

Wenn deine Bibliothek wächst, ist es entscheidend, das richtige Bild schnell zu finden. SCNX bietet dir verschiedene
Tools, um Ordnung zu halten.

### Organisationstools {#organization-tools}

* **Tags:** Gruppiere deine Bilder nach Kampagne, Saison oder Bot-Modul. Du kannst bis zu **10 Tags** pro Bild
  hinzufügen (jeweils max. 30 Zeichen). Verwende die Schaltfläche **Tags bearbeiten** auf einer Bildkarte, um sie zu
  verwalten. Ein Klick auf einen Tag filtert sofort deine gesamte Bibliothek.
* **Anzeigenamen:** Gib deinen Bildern erkennbare Namen! Standardmäßig verwendet das System den ursprünglichen
  Dateinamen, aber du kannst ihn mithilfe der Schaltfläche **Umbenennen** in etwas Eindeutiges ändern (bis zu 100
  Zeichen).
* **Markieren (Favoriten):** Klicke auf das **★-Symbol** bei einem beliebigen Bild, um es zu markieren. Markierte Bilder
  werden für den sofortigen Zugriff oben in deiner Bibliothek angeheftet.

### Suchen und Filtern {#searching-and-filtering}

Verwende die Filterleiste über dem Bildraster, um deine Ansicht einzugrenzen. Du kannst diese Filter kombinieren, um
genau das zu finden, was du brauchst, und auf **Filter löschen** klicken, um deine Ansicht zurückzusetzen.

| Tool                 | Was es tut                                                                                                        |
|----------------------|-------------------------------------------------------------------------------------------------------------------|
| **Suchleiste**       | Sucht nach passendem Text im Anzeigenamen oder im ursprünglichen Dateinamen.                                      |
| **Nach Tag filtern** | Zeigt nur die Bilder an, auf die ein bestimmter Tag angewendet wurde.                                             |
| **Nur markierte**    | Verbirgt alles außer deinen favorisierten (markierten) Bildern.                                                   |
| **Typ-Tabs**         | Filtert Bilder danach, wie sie erstellt wurden: *Alle, Hochgeladen, KI-generiert, Custom Bot* oder *Support Bot*. |

*Hinweis: Um die Ladezeiten kurz zu halten, zeigt die Bibliothek 25 Bilder pro Seite an. Verwende die Schaltflächen
Zurück / Weiter unten, um zu navigieren.*

## Bilder verwalten und löschen {#managing-and-deleting-images}

Jede Bildkarte verfügt über ein Schnellaktionsmenü, das dir bei der Verwaltung deiner Dateien hilft.

| Aktion                              | Was sie tut                                                            |
|-------------------------------------|------------------------------------------------------------------------|
| **URL kopieren**                    | Kopiert den direkten CDN-Link in deine Zwischenablage.                 |
| **Vorschau**                        | Öffnet eine Vorschau des Bildes in Originalgröße.                      |
| **Herunterladen**                   | Lädt die originale Bilddatei direkt auf dein aktuelles Gerät herunter. |
| **Umbenennen**                      | Ändert den Anzeigenamen des Bildes.                                    |
| **Tags bearbeiten**                 | Ermöglicht dir das Hinzufügen oder Entfernen von Organisations-Tags.   |
| **Markieren / Markierung aufheben** | Heftet das Bild oben in der Bibliothek an oder löst es.                |
| **Löschen**                         | Entfernt das Bild dauerhaft.                                           |

### Bilder löschen {#deleting-images}

:::danger Vorsicht! Alles löschen ist irreversibel
Die Schaltfläche **Alle Bilder löschen** in der linken Seitenleiste wird **jedes einzelne Bild** in der Bibliothek
deines Servers sofort und dauerhaft löschen.

Dies schließt Bilder ein, die derzeit von deinen Bots verwendet werden! Tue dies nur, wenn du absolut sicher bist, dass
du keine aktiven Bot-Setups zerstörst.
:::

:::info Cache-Leerung
Während ein Bild sofort aus deiner Bibliotheksansicht entfernt wird, kann es bis zu **24 Stunden** dauern, bis es
vollständig aus allen Systemen und Caches gelöscht ist. Während dieser Zeit lädt das Bild möglicherweise noch dort, wo
es zuvor verlinkt war. Inhalte, die auf Discord gesendet wurden, könnten länger laden, es sei denn, du löschst
Nachrichten mit dem Bild manuell.
:::

Du kannst Speicherplatz freigeben, indem du Bilder löschst, die du nicht mehr benötigst.

* **Einzelnes Löschen:** Klicke bei einer beliebigen Bildkarte auf **Löschen**.
* **Massenlöschen:** Klicke auf das Kontrollkästchen auf mehreren Bildkarten (ein blauer Ring erscheint). Oben wird eine
  Leiste eingeblendet, die die Anzahl deiner Auswahl anzeigt. Klicke auf **Ausgewählte löschen**. *(Maximal 50 Bilder
  auf einmal).*

## Wie du deine Bilder in Bot-Konfigurationen verwendest {#how-to-use-your-images-in-bot-configurations}

Wann immer du ein Bildfeld (wie ein Thumbnail oder Banner) in deiner Custom Bot- oder Support Bot-Konfiguration
bearbeitest, gibt dir die Bildauswahl nun Zugriff auf sowohl deine persönlichen als auch deine Serverdateien.

Innerhalb der Auswahl kannst du:

1. **Tabs wechseln:** Wechsle einfach zwischen deinen **Serverbildern** (geteilt) und deinen **persönlichen Bildern**.
2. **Durchsuchen und Filtern:** Durchsuche die gemeinsame Serverbibliothek und filtere nach Tag.
3. **Sofort auswählen:** Klicke auf ein Bild, und seine URL wird automatisch in das Konfigurationsfeld eingefügt.
4. **Direkt hochladen:** Du musst die Seite nicht verlassen! Klicke auf den Upload-Button oder ziehe eine neue Datei per
   Drag & Drop direkt in die Auswahl. Das Bild wird direkt in den Tab hochgeladen, den du gerade geöffnet hast (Server
   oder Persönlich), und sofort ausgewählt.

![Screenshot des modalen Bildauswahlfensters, das die Tabs Serverbilder und Persönliche Bilder zeigt](@site/docs/assets/scnx/guilds/files/image-upload.png)
