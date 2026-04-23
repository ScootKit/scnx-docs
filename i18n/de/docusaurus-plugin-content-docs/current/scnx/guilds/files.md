---
sidebar_position: 6
title: Dateispeicher
description: Eine gemeinsame Dateibibliothek für deinen Discord-Server - lade Bilder, Audio, Videos und Dokumente hoch, generiere sie mit KI und verwende sie wieder in Custom Bot, Support Bot und Team-Workflows.
---

# Server-Dateispeicher {#guild-file-storage}

Der Server-Dateispeicher ist die gemeinsame, zentrale Asset-Bibliothek deines Servers auf SCNX. Hier liegen Bilder, Audio, Videos, Dokumente und Ticket-Anhänge an einem Ort - ein einziger Platz, an dem dein Team Dateien hochladen, generieren, durchsuchen und über alle SCNX-Funktionen hinweg wiederverwenden kann.

Ursprünglich eine reine Bildbibliothek, unterstützt sie mittlerweile jede Datei, die das Dashboard oder deine Bots benötigen: MP3s für [Voice-Support-Wartemusik](/docs/support-bot/voice-support/configuration#waiting-music), PDFs aus Ticket-Anhängen, Banner für Embeds, KI-generierte Clips und mehr. Du findest **Dateien** in der Navigationsleiste deines Servers.

## Warum nutzen {#why-use-it}

Wann immer dein Custom Bot, Support Bot oder das Dashboard eine Datei benötigt - ein Willkommensbanner, ein Embed-Thumbnail, einen Voice-over-Clip, einen archivierten Ticket-Anhang - wird sie hier abgerufen. Eine Bibliothek, eine Quote, eine Team-Ansicht.

- **Team-Zusammenarbeit:** Jeder **vertrauenswürdige Admin** auf deinem Server kann Dateien aus der gemeinsamen Bibliothek ansehen, bearbeiten und löschen, damit euer Team die Assets eures Servers gemeinsam pflegen kann.
- **Überall nutzbar:** Jeder Datei-Picker in SCNX (Bild-Felder, Audio-Felder usw.) zeigt diese Bibliothek neben deinen persönlichen Dateien an, mit einem Klick zum Wechseln zwischen beiden.
- **Einmal hochladen, überall verwenden:** Lade eine Datei einmal in die Serverbibliothek hoch oder generiere sie dort, und jeder in deinem Team kann sie in jeder Konfiguration verwenden.
- **Füllt sich automatisch:** Dein Support Bot kann [Ticket-Anhänge automatisch archivieren](/docs/support-bot/general/modmail-net#attachment-archival), damit sie die kurzlebigen Discord-Links überdauern.

## Migration vom persönlichen Speicher {#migrating-from-personal-storage}

:::info Käufe für persönlichen Speicher
Jeder zusätzliche Speicherplatz, den du zuvor für deinen persönlichen Bereich gekauft hast, verbleibt auf deinem persönlichen Konto.
**Persönlicher Speicher kann nicht auf das Serverspeicher-Kontingent übertragen werden.** Du kannst ihn wie gewohnt weiterverwenden.
Bitte beachte außerdem, dass du keine neuen Speicher-Upgrades mehr für deinen persönlichen Bereich kaufen kannst.
:::

Wenn du SCNX schon eine Weile nutzt, bist du wahrscheinlich mit dem persönlichen Datei-Upload-Bereich unter [scnx.app/user/files](https://scnx.app/de/user/files) vertraut.

Server-Dateispeicher ist ein völlig separater, gemeinsamer Bereich. Um deine bestehenden Dateien aus deinem persönlichen Bereich in die gemeinsame Serverbibliothek zu verschieben, **musst du sie manuell neu hochladen**.

1. Lade die Dateien, die du teilen möchtest, aus deinem [persönlichen Bereich](https://scnx.app/de/user/files) herunter.
2. Navigiere zur **Dateien**-Seite deines Servers.
3. Lade die Dateien in die [neue gemeinsame Bibliothek](https://scnx.app/de/glink?page=images) hoch.

## Dateien zur Bibliothek hinzufügen {#adding-files-to-your-library}

Es gibt vier Wege, wie Dateien in die Bibliothek deines Servers gelangen:

1. **Du lädst sie direkt hoch** über die Dateien-Seite oder jeden Datei-Picker im Dashboard.
2. **Du generierst sie mit KI** — Bilder aus einem Text-Prompt oder [Voice-Support-Audio](/docs/support-bot/voice-support/ai-audio) (Text-to-Speech + Musik).
3. **Der Support Bot archiviert automatisch** — [Ticket-Anhänge](/docs/support-bot/general/modmail-net#attachment-archival) werden in der Bibliothek gespeichert, sobald sie eingehen, damit sie die kurzlebigen Discord-Links überdauern.
4. **Der Custom Bot speichert automatisch** — zum Beispiel **Moderationslog-Beweisbilder** (Bild-Belege, die bei Mod-Aktionen erfasst werden), **Starboard-Nachrichten** (Bilder aus gesternten Nachrichten, die auch nach Bearbeitung oder Löschung der Originale erhalten bleiben) und andere Anhang-bewahrende Module.

Wege 1 und 2 liegen unter deiner direkten Kontrolle; 3 und 4 laufen im Hintergrund, sobald die zugehörigen Module aktiviert sind.

### 1. Dateien selbst hochladen {#uploading-files}

:::success Direkter Upload ebenfalls möglich!
Beim Auswählen einer Datei für ein Konfigurationsfeld kannst du auch direkt aus dem Picker heraus hochladen - kein Umweg über die Bibliothek nötig.

![Screenshot, der die direkte Upload-Option in einem Konfigurationsfeld zeigt](@site/docs/assets/scnx/guilds/files/direct-upload.png)
:::

![Screenshot, der zeigt, wie man Dateien per Drag & Drop hochlädt](@site/docs/assets/scnx/guilds/files/how-to-upload.png)

1. Öffne **Dateien** in der Seitenleiste deines Servers.
2. Ziehe Dateien in den Upload-Bereich oder klicke ihn an, um den Datei-Browser deines Geräts zu öffnen.
3. Mehrere Dateien gleichzeitig funktionieren problemlos. Jede wird einzeln verarbeitet und liefert eine eigene Bestätigungs-Benachrichtigung.

_Wenn du eine Datei hochlädst, die mit einer bereits vorhandenen identisch ist, gibt SCNX den existierenden Eintrag zurück, statt eine zweite Kopie zu speichern._

#### Was hochladbar ist {#file-requirements}

Jede Datei muss **25 MB oder kleiner** sein. Direkt-Uploads unterstützen folgende Formate:

| Kategorie | Formate                           |
| --------- | --------------------------------- |
| Bilder    | `.jpg` / `.jpeg`, `.png`, `.gif`  |
| Audio     | `.mp3`, `.wav`                    |

Von Bots hochgeladene Dateien (Ticket-Anhänge, Mod-Log-Screenshots usw.) können zusätzliche Formate enthalten - Video (`.mp4`, `.webm`, `.mov`), PDFs, ZIPs und Klartext - die dann zusammen mit allem anderen in deiner Bibliothek erscheinen.

### 2. Dateien mit KI generieren {#ai-generation}

Das SCNX-Dashboard kann zwei Arten von Inhalten direkt aus den relevanten Pickern für dich generieren. Beide werden in [KI-Coins](https://faq.scnx.app/ki-auf-scnx/) abgerechnet und **keines zählt zu deiner Dateispeicher-Quote** — generierte Dateien werden mit Coins bezahlt, nicht mit Bytes.

#### KI-Bilder {#ai-images}

:::info Kein Fan von KI-Bildgenerierung?
Serverinhaber und Administratoren können diese Funktion in den [Servereinstellungen](https://scnx.app/de/glink?page=settings) deaktivieren. Wenn deaktiviert, verschwindet die **Mit KI generieren**-Box auf der Dateien-Seite. Module, die KI-Bildgenerierung nutzen, funktionieren weiter und müssen separat deaktiviert werden, falls gewünscht.

Dieser Schalter steuert ausschließlich die **Bildgenerierung auf der Dateien-Seite**. Er **blendet den Generate (AI)-Tab in den [Voice-Support-Audio-Pickern](/docs/support-bot/voice-support/ai-audio) nicht aus** — die KI-Audio-Generierung wird unabhängig davon gesteuert.
:::

Generiere ein Bild aus einem Text-Prompt direkt auf der Bibliotheksseite.

![Screenshot der KI-Bildgenerierungs-Prompt-Box](@site/docs/assets/scnx/guilds/files/generate-image.png)

1. Finde die **Mit KI generieren**-Box auf der Dateien-Seite.
2. Beschreibe in bis zu 1.000 Zeichen, was du möchtest.
3. Klicke auf **Bild generieren**. Das Ergebnis erscheint in deiner Bibliothek und ist mit dem Tag `ai` zum Filtern versehen.

| Element             | Wert                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| Kosten              | 15 KI-Coins pro Bild. Die Generierung wird blockiert, falls dein Guthaben niedriger ist.                          |
| Abmessungen         | 1024 × 1024 Pixel.                                                                                              |
| Inhaltsrichtlinie   | Prompts, die gegen unsere Sicherheitsrichtlinien verstoßen, werden abgelehnt. Für abgelehnte Prompts **fallen keine Kosten** an. |

#### KI-Audio (TTS + Musik) {#ai-audio}

In den Audio-Pickern jeder [Voice-Support-Playlist](/docs/support-bot/voice-support/configuration#waiting-music) lässt der Tab **Generate (AI)** dich folgendes erzeugen:

- **Text-to-Speech-Clips** — wähle eine Sprache und Stimme, tippe das Skript (bis zu 10.000 Zeichen), erhalte ein abspielbares Voice-over.
- **Musik-Tracks** — beschreibe die Stimmung (z.B. _"warmes Lo-Fi, sanftes Klavier, kein Gesang"_), wähle eine Dauer zwischen 3 Sekunden und 5 Minuten und SCNX generiert einen loop-tauglichen Track.

Vollständige Details, Preise und Tipps findest du auf der Seite [KI-Audio-Generierung](/docs/support-bot/voice-support/ai-audio). Alles, was dort erzeugt wird, landet automatisch in dieser Bibliothek und ist überall dort verfügbar, wo ein Audio-Picker angezeigt wird.

### 3. Support-Bot-Ticket-Anhänge {#ticket-attachments}

Wenn die Option **Ticket-Anhänge in SCNX archivieren** aktiviert ist, kopiert dein Support Bot jeden Anhang aus einem Modmail- oder Ticket-System-Ticket in diese Bibliothek, sobald die Nachricht eingeht. Das hält die Datei nutzbar, nachdem der kurzlebige Discord-Anhangs-Link abgelaufen ist — entscheidend für [modmail.net-Transkripte](/docs/support-bot/general/modmail-net), die Tage später angesehen werden.

Archivierte Anhänge verhalten sich wie jede andere Datei in der Bibliothek: du kannst sie durchsuchen, suchen, taggen, umbenennen und löschen. Vollständige Details (inklusive Deaktivierung der Archivierung und wie Löschung mit alten Transkripten zusammenwirkt) findest du auf der Seite [modmail.net-Funktionen](/docs/support-bot/general/modmail-net#attachment-archival).

### 4. Automatische Custom-Bot-Speicherungen {#custom-bot-uploads}

Mehrere Custom-Bot-Module bewahren Discord-Anhänge in der Bibliothek, damit sie sichtbar bleiben, auch wenn die ursprüngliche Nachricht sich ändert oder gelöscht wird. Die häufigsten sind:

- **Moderationslog-Beweisbilder** — wenn bei einer Mod-Aktion ein Screenshot oder die Anhänge der betreffenden Nachricht erfasst werden, werden diese Bilder hier gespeichert und dauerhaft vom Log-Eintrag referenziert.
- **Starboard** — wenn eine Nachricht genug Sterne sammelt, um auf dem Starboard zu landen, werden alle darin enthaltenen Bilder in die Bibliothek kopiert, damit der Starboard-Eintrag auch nach Bearbeitung oder Löschung der Originalnachricht korrekt gerendert wird.
- **Weitere anhang-bewahrende Module** — jede Custom-Bot-Funktion, die einen Anhang über die ursprüngliche Discord-Nachricht hinaus erhalten muss, nutzt diese Bibliothek.

Diese Speicherungen zählen zu deiner Dateispeicher-Quote (es sind echte Dateien, die du hostest). Wenn du bevorzugst, dass der Custom Bot überhaupt nichts in deiner Bibliothek archiviert, deaktiviere den zentralen Datei-Speicher-Schalter in der [Custom-Bot-Kernkonfiguration](/docs/custom-bot/intro) — das deaktiviert automatische Speicherungen in allen Modulen auf einmal. Keine Jagd nach einzelnen Modul-Schaltern.

## Speicherlimits {#understanding-storage-limits}

Jeder Server hat ein Speicher-Kontingent basierend auf seinem SCNX-Plan. Verfolge deine Nutzung über den **Speicher**-Fortschrittsbalken oben auf der Bibliotheksseite.

:::tip KI-Inhalte zählen nicht zu deiner Quote
Da du sie mit KI-Coins bezahlst, zählen alle Inhalte, die du über die KI-Tools von SCNX generierst - [Dashboard-KI-Bilder](#ai-images), [KI-Audio (TTS und Musik)](#ai-audio) und alle [Custom-Bot-KI-Funktionen](/docs/custom-bot/modules/ai) - **nicht** zu deiner Dateispeicher-Quote. Generiere so viele, wie dein Coin-Guthaben zulässt, ohne dir Sorgen um den Speicher zu machen.
:::

:::info Was ist mit Bot-Uploads?
Dateien, die dein Custom Bot oder Support Bot automatisch speichert — [Ticket-Anhänge des Support Bots](/docs/support-bot/general/modmail-net#attachment-archival), [Mod-Log-Beweisbilder und Starboard-Bilder des Custom Bots](#custom-bot-uploads) und Ähnliches — **zählen** zu diesem Kontingent. Jede Funktion, die die Bibliothek nutzt, bietet eine eigene Option zum Deaktivieren an; zum Beispiel der Schalter [Ticket-Anhänge in SCNX archivieren](/docs/support-bot/general/modmail-net#attachment-archival) des Support Bots.
:::

| SCNX-Plan    | Gesamtspeicher |
| ------------ | -------------- |
| Starter      | ~50 MB         |
| Unlimited    | ~500 MB        |
| Professional | ~1 GB          |
| Enterprise   | ~2 GB          |

Wenn dein Server das Limit erreicht, werden neue Uploads blockiert, bis du alte Dateien löschst oder deinen SCNX-Plan aufrüstest. Bots, die bei erschöpftem Kontingent hochzuladen versuchen, überspringen den Upload stillschweigend — die Funktion arbeitet weiter, kann nur nichts Neues speichern.

![Screenshot der Dateibibliotheks-Galerie mit Dateien und Speicherfortschrittsbalken](@site/docs/assets/scnx/guilds/files/guild-images.png)

## Dateien organisieren und finden {#organizing-and-finding-your-assets}

Mit wachsender Bibliothek wird schnelles Wiederfinden wichtig. SCNX bietet mehrere Werkzeuge, um Ordnung zu halten.

### Organisationswerkzeuge {#organization-tools}

- **Tags:** Gruppiere Dateien nach Kampagne, Bot-Modul, Ticket-Thema oder beliebigen anderen Kriterien. Bis zu **10 Tags** pro Datei (max. 30 Zeichen je Tag). Nutze **Tags bearbeiten** auf einer Dateikarte zur Verwaltung; ein Klick auf ein Tag filtert die gesamte Bibliothek danach.
- **Anzeigenamen:** Gib Dateien erkennbare Namen. Standardmäßig wird der ursprüngliche Dateiname verwendet, aber du kannst mit dem **Umbenennen**-Button auf beliebige Namen bis zu 100 Zeichen umbenennen. Praktisch für KI-generiertes Audio, das standardmäßig einen generischen Namen erhält.
- **Favorisieren:** Klicke auf das **★** an einer Datei, um sie oben in der Bibliothek anzuheften.

### Suchen und Filtern {#searching-and-filtering}

Nutze die Filterleiste über dem Raster, um deine Ansicht einzuschränken. Filter lassen sich kombinieren — klicke **Filter löschen**, um sie zurückzusetzen.

| Werkzeug           | Was es tut                                                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Suchleiste**     | Durchsucht Anzeigename und ursprünglichen Dateinamen nach passenden Texten.                                                                              |
| **Tag-Filter**     | Zeigt nur Dateien mit einem bestimmten Tag.                                                                                                              |
| **Nur Favoriten**  | Zeigt nur deine favorisierten (gesternten) Dateien.                                                                                                      |
| **Typ-Tabs**       | Filtert nach Herkunft: _Alle, Hochgeladen, KI-generiert, Custom Bot_ oder _Support Bot_. Nützlich zum Finden bot-archivierter Ticket-Anhänge oder KI-Audio. |

_Für schnelle Ladezeiten zeigt die Bibliothek 25 Dateien pro Seite. Nutze die Vor-/Zurück-Buttons unten zum Navigieren._

## Dateien verwalten und löschen {#managing-and-deleting-images}

Jede Dateikarte hat ein Schnell-Aktions-Menü:

| Aktion                | Was es tut                                                  |
| --------------------- | ----------------------------------------------------------- |
| **URL kopieren**      | Kopiert die Direkt-URL der Datei in die Zwischenablage.     |
| **Vorschau**          | Öffnet eine Vorschau (Bilder) oder spielt die Datei ab (Audio/Video). |
| **Herunterladen**     | Lädt die Originaldatei auf dein Gerät.                       |
| **Umbenennen**        | Ändert den Anzeigenamen.                                     |
| **Tags bearbeiten**   | Fügt Tags hinzu oder entfernt sie.                           |
| **Favorisieren / Entfernen** | Heftet die Datei an oder löst die Pinnung.               |
| **Löschen**           | Entfernt die Datei dauerhaft.                                |

### Dateien löschen {#deleting-images}

:::danger Vorsicht — „Alle löschen" ist irreversibel
Der Button **Alle Dateien löschen** in der linken Seitenleiste löscht sofort und unwiderruflich **jede Datei** in der Bibliothek deines Servers - einschließlich Dateien, die aktuell von deinen Bots verwendet, in Ticket-Transkripten referenziert oder in Konfigurationen eingebettet sind. Tu das nur, wenn du wirklich sicher bist, dass nichts Aktives darauf angewiesen ist.
:::

:::info Cache-Löschung
Eine Datei wird im selben Moment aus deiner Bibliothek entfernt, in dem du sie löschst, aber einige CDN- und Browser-Caches können eine zuvor geladene Kopie bis zu einigen Tagen weiter ausliefern, bevor sie aufholen. Das ist normales Web-Verhalten - nicht etwas, das SCNX (oder unser Support-Team) erzwingen kann. Bereits auf Discord gesendete Nachrichten können die Datei länger laden, bis diese Nachrichten manuell gelöscht werden.
:::

Du gibst Speicherplatz frei, indem du nicht mehr benötigte Dateien löschst.

- **Einzellöschung:** Klicke **Löschen** auf einer Dateikarte.
- **Massenlöschung:** Aktiviere die Checkbox auf mehreren Karten (ein blauer Ring erscheint), dann klicke **Ausgewählte löschen** in der oberen Leiste. Max. 50 Dateien pro Aktion.

## Dateien in Bot-Konfigurationen verwenden {#how-to-use-your-images-in-bot-configurations}

Jeder Datei-Picker in SCNX - für Bilder, Audio, Anhänge und mehr - gibt dir Zugriff auf die Bibliothek deines Servers und deine persönlichen Dateien an einem Ort.

Innerhalb eines Pickers kannst du:

1. **Tabs wechseln:** Zwischen **Server-Dateien** (geteilt) und **Persönlichen Dateien** umschalten.
2. **Durchsuchen und Filtern:** Die gemeinsame Bibliothek durchsuchen und nach Tag filtern.
3. **Sofort auswählen:** Klicke eine Datei an und ihre URL wird automatisch ins Konfigurationsfeld übernommen.
4. **Direkt hochladen:** Klicke den Upload-Button oder ziehe eine Datei in den Picker. Die Datei wird in den gerade aktiven Tab (Server oder Persönlich) hochgeladen und sofort ausgewählt.
5. **Mit KI generieren (wo relevant):** Audio-Picker enthalten einen **Generate (AI)**-Tab für TTS und Musik, und die Dateien-Seite bietet Bildgenerierung - siehe den [KI-Abschnitt](#ai-generation).

![Screenshot des Picker-Modals mit den Tabs Server-Dateien und Persönliche Dateien](@site/docs/assets/scnx/guilds/files/image-upload.png)
