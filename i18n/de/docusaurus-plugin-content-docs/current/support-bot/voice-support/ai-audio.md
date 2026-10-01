---
sidebar_position: 4
title: KI-Audio-Generierung
description: Erzeuge Warteschlangen-Musik und Text-to-Speech-Ansagen für Sprachsupport direkt im SCNX-Dashboard mit KI - bezahle mit AI Coins, höre vor dem Hinzufügen rein und füge das Ergebnis direkt deiner Playlist hinzu.
---

# KI-Audio-Generierung

Statt eigene Audiodateien zu beschaffen und zu hosten, kannst du **Text-to-Speech-Ansagen** und **Hintergrundmusik** für Sprachsupport direkt im [Sprachsupport](https://scnx.app/glink?page=support-system/voice-support)-Dashboard erzeugen. Erzeugte Clips werden in der Dateibibliothek deines Servers gespeichert, erscheinen in der Audioauswahl für deine Wartemusik- und Geschlossen-Playlists und werden in [AI Coins](https://faq.scnx.app/ki-auf-scnx/) vom Guthaben deines Servers abgerechnet.

## Wo du es findest {#where-to-find-it}

Immer wenn das Dashboard eine Audioauswahl anzeigt - für die [Wartemusik](/de/docs/support-bot/voice-support/configuration#waiting-music) oder die Playlist der [Musik für den geschlossenen Zustand](/de/docs/support-bot/voice-support/configuration#closed-music) - siehst du neben **Deine Uploads** und **SCNX-Bibliothek** den Tab **Generieren (KI)**. Dieser teilt sich weiter in **Text-to-Speech** und **Musik** auf.

Beide Werkzeuge funktionieren gleich:

1. Gib deinen Prompt ein (Text für TTS; eine Beschreibung für Musik).
2. Prüfe die Live-Kostenschätzung in AI Coins und dein aktuelles Guthaben.
3. Klicke auf **Generieren**. Die Wartezeit beträgt bei TTS meist einige Sekunden, bei Musik bis zu einer Minute.
4. Höre dir das Ergebnis mit dem integrierten Abspielknopf an.
5. Der Clip wird automatisch in deiner Dateibibliothek registriert und der Playlist hinzugefügt, die du gerade bearbeitest. Wenn du möchtest, kannst du den Clip auch herunterladen und später manuell hinzufügen.

:::tip Erzeugte Clips zählen nicht zu deinem Speicherkontingent
Da KI-erzeugte Titel mit AI Coins bezahlt werden, belegen sie keinen Teil des [Dateispeicher-Kontingents](/de/docs/scnx/guilds/files) deines Servers - egal wie viele du erzeugst, dir geht durch KI-Audio kein Speicherplatz aus. Titel, die du selbst **hochlädst**, zählen wie jede andere Datei zum Kontingent.
:::

## Text-to-Speech (TTS) {#tts}

Nützlich für Begrüßungen, Ansagen bei geschlossener Warteschlange, Sprachansagen in der Warteschleife und alle anderen gesprochenen Inhalte. Erzeugt mit **ElevenLabs**-Stimmen.

### So funktioniert es {#tts-flow}

1. Wähle eine **Sprache**. Die Auswahl verwendet standardmäßig deine Browsersprache, falls verfügbar, und zeigt neben jeder Sprache eine Anzahl an.
2. Aktiviere optional **Zeige auch mehrsprachige Stimmen an**, um Stimmen hinzuzufügen, die in jeder Sprache funktionieren (praktisch für gemischtsprachige Warteschlangen).
3. Wähle eine **Stimme**. Jede Stimmenkarte zeigt den Namen der Stimme, ein Akzent-Label, ein kurzes Einsatz-Tag und einen Vorschau-Knopf. Du kannst dir die Vorschau anhören, bevor du die Stimme auswählst.
4. Gib den Text ein, der gesprochen werden soll - bis zu 10.000 Zeichen.
5. Klicke auf **Generieren**. Die Kosten werden anhand der Textlänge berechnet (siehe Preise unten).

### Preise {#tts-pricing}

| Element            | Wert                                                      |
| ------------------ | --------------------------------------------------------- |
| Kostensatz         | 1 AI Coin pro 4 Zeichen (aufgerundet), mindestens 1 Coin. |
| Maximale Textlänge | 10.000 Zeichen pro Generierung.                           |

Die genauen Kosten werden live während der Eingabe angezeigt, und der Knopf ist deaktiviert, wenn dein Guthaben nicht ausreicht. Fehlt dir Guthaben, erscheint ein Link „KI-Guthaben kaufen".

## Musik {#music}

Nützlich, um Wartemusik zu erstellen, die zur Stimmung deines Servers passt, ohne lizenzierte Titel beschaffen zu müssen. Erzeugt mit dem Musikmodell von ElevenLabs.

### So funktioniert es {#music-flow}

1. Schreibe einen **Musik-Prompt**, der Stimmung, Instrumentierung, Tempo und Atmosphäre beschreibt - z.B. _„warm lo-fi beat, mellow piano, soft drums, 70 BPM, no vocals"_. Bis zu 4.100 Zeichen.
2. Wähle eine **Dauer** zwischen 3 Sekunden und 5 Minuten (Standard: 60 Sekunden).
3. Klicke auf **Generieren**. Die Musikgenerierung dauert länger als TTS - die Oberfläche zeigt eine Fortschrittsanzeige.

### Preise {#music-pricing}

| Element      | Wert                                                     |
| ------------ | -------------------------------------------------------- |
| Kostensatz   | 12 AI Coins pro Sekunde (= 600 Coins pro Minute).        |
| Dauerbereich | 3 Sekunden bis 300 Sekunden (5 Minuten) pro Generierung. |

Auch hier aktualisiert sich die Live-Kostenvorschau, wenn du den Dauer-Regler verschiebst, und der Knopf ist deaktiviert, wenn du dir die Generierung nicht leisten kannst.

## Tipps {#tips}

- **Baue mit der Zeit eine Bibliothek auf.** Generierungen werden in deiner Dateibibliothek gespeichert, auch nachdem du das Dashboard schließt. Du musst eine Begrüßung nicht jedes Mal neu erzeugen - verwende den gespeicherten Clip erneut.
- **Mische KI- und hochgeladene Titel.** Die Playlist ist nur eine Liste von URLs. Du kannst KI-erzeugte Titel frei mit selbst hochgeladenen Dateien mischen.
- **Höre vor dem Hinzufügen rein.** Die integrierte Vorschau spielt exakt das Audio ab, das später im Sprachkanal läuft - was du hörst, hören auch deine Nutzer.
- **Halte TTS kurz.** Lange Ansagen brauchen länger zum Rendern und kosten pro Klick mehr. Für Begrüßungen und Warteschlangen-Ansagen sind kürzere Texte fast immer besser.
- **Verfeinere Musik-Prompts.** Die Musikgenerierung ist nicht deterministisch - derselbe Prompt erzeugt bei jedem Durchlauf andere Clips. Passt das erste Ergebnis nicht, ändere den Prompt (ergänze _„instrumental"_, _„no vocals"_, _„loopable"_) und erzeuge neu.

## Moderation und Fehler {#errors}

Beide Generatoren prüfen jede Anfrage mit einer Sicherheitsprüfung. Wird der Prompt abgelehnt, siehst du eine klare Moderationsmeldung und es werden **keine Coins abgezogen**. Weitere Fehler, die die Oberfläche anzeigt:

| Situation                          | Was du siehst                                                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Nicht genug AI Coins               | Der Generieren-Knopf ist deaktiviert und ein Link „KI-Guthaben kaufen" erscheint.                                 |
| Generierung abgelehnt (Richtlinie) | „Your prompt was rejected by moderation" oder ähnlich - Coins werden _nicht_ abgerechnet.                         |
| Zu viele gleichzeitige Anfragen    | Ein Hinweis „currently busy" - versuche es in einigen Sekunden erneut.                                            |
| Allgemeiner Fehler                 | Eine einzeilige Fehlermeldung. Wenn sie bestehen bleibt, melde dich unter [scnx.app/help](https://scnx.app/help). |

## Siehe auch {#related}

- [Konfiguration der Wartemusik](/de/docs/support-bot/voice-support/configuration#waiting-music) - hier fügt sich KI-erzeugte Musik in die Playlist für den geöffneten Zustand ein.
- [Musik für den geschlossenen Zustand](/de/docs/support-bot/voice-support/configuration#closed-music) - dieselbe Auswahl, andere Playlist, die abgespielt wird, wenn Sprachsupport offline ist.
- [AI Coins (FAQ)](https://faq.scnx.app/ki-auf-scnx/) - wie AI Coins bepreist und gekauft werden.
