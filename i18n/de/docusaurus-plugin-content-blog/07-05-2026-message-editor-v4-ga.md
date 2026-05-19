---
slug: message-editor-v4-ga
title: "Message Editor V4 ist live"
description: "Message Editor V4 ist live und für alle verfügbar. Drag-and-drop-Komponenten, Container, Sections, Media Galleries und deutlich mehr Platz zum Gestalten als das alte Embed-System."
date: 2026-05-07T10:00
authors:
  - scderox
tags:
  - SCNX
  - Message Editor
  - Components V2
image: ../../../blog/assets/message-editor-v4-ga/pixelheavenexample1.png
---

Message Editor V4 ist live. Wer sich jetzt im Dashboard einloggt, findet ihn da - jeder Plan, jeder Server, kein
Schalter, kein Opt-in. Damit ist das Early-Access-Fenster der Mitgliedschaft vorbei.

![Eine Pixel-Haven-Willkommens- und Regeln-Nachricht in V4 - türkiser Willkommens-Container mit Servericon und Spiel-Rollen-Buttons, ein oranger Regeln-Container mit drei Sections (jede mit eigenem Thumbnail) und eine Action-Row mit „Ich stimme zu" / „Vollständige Regeln lesen"](@site/blog/assets/message-editor-v4-ga/pixelheavenexample1.png)

Ich habe diesen Release ein paar Monate liegen lassen, während wir die Beta mit unseren Members gefahren sind, und bin
ehrlich gesagt erleichtert, ihn jetzt für alle ausrollen zu können. Die Kurzfassung: V4-Nachrichten können Dinge, die
V3-Nachrichten nicht können, und der Editor selbst macht deutlich mehr Spaß zu benutzen.

<!-- truncate -->

## Was sich geändert hat

Eine Nachricht in SCNX zu bauen hieß bisher: mit Embeds kämpfen. Du hattest 10 davon. Sie standen immer unter deinem
Nachrichtentext. Deine Buttons landeten am Ende der Nachricht, egal was du gemacht hast. Wer eine andere Form wollte,
hatte Pech.

Discord hat ein neues System gelauncht - **Components V2** - das genau diese Beschränkungen aufhebt. V4 ist unser
Editor dafür. Statt es zu beschreiben - hier ein paar Beispiele:

## Was V4 möglich macht

Ein paar Sachen, die in V3 entweder umständlich oder gar nicht möglich waren.

### Sections: Text links, Accessory rechts

Was mir in V3 am meisten gefehlt hat: ein Bild *neben* einem Absatz. Embeds erlaubten ein Thumbnail oben rechts, aber
das war immer winzig und immer in der Ecke. Wer zusätzlich einen Button wollte - tja, der Button landete am Ende der
Nachricht, nicht neben dem Text, zu dem er gehörte. Du hast also einen Absatz geschrieben, darauf gezeigt und gehofft,
dass der Leser runterscrollt und wieder zurück, um zu sehen, was der Button überhaupt macht.

Sections beheben das. Text auf der linken Seite, ein Accessory rechts (entweder Thumbnail oder Button), in derselben
Zeile. Zwei Pixel-Haven-Beispiele - importier eines davon in einen Test-Channel, dann sieht man, was ich meine.

Die Thumbnail-Variante ist eine „Meet the Staff"-Karte. Jede Section ist ein Teammitglied, mit Bio und Avatar
daneben:

![Eine „Meet the Pixel Haven Staff"-Karte mit vier Sections, jede zeigt Name, Rolle, kurze Bio und Avatar des Teammitglieds](@site/blog/assets/message-editor-v4-ga/pixelheaven-meet-the-team.png)

[**Staff-Card importieren**](https://scnx.app/import/message?key=cmovhp20v003m7br1jrfl7odx&source=marketplace)

Die Button-Variante ist eine Turnierliste - jede Section ist ein Bracket, der „Sign up"-Button sitzt da, wo man ihn
auch klicken würde:

![Eine „Pixel Haven Tournaments"-Karte mit drei Turnier-Sections, jede zeigt Name, Zeitplan und einen grünen „Sign up"-Button als Section-Accessory](@site/blog/assets/message-editor-v4-ga/pixel-heaven-tournaments.png)

[**Turnierplan importieren**](https://scnx.app/import/message?key=cmovhvesr003p7br183mbrplm&source=marketplace)

### Mehrere „Embeds" mit Text und Buttons in beliebiger Reihenfolge

In V3 war die Reihenfolge fix: Nachrichtentext oben, dann Embeds, dann Buttons. Immer in dieser Reihenfolge. In V4
kann man Container in beliebiger Anordnung stapeln, jeder mit eigener Farbe und eigenen Buttons:

![Eine Pixel-Haven-Willkommens- und Regeln-Nachricht in V4 - türkiser Willkommens-Container mit Servericon und Spiel-Rollen-Buttons, ein oranger Regeln-Container mit drei Sections und einer Action-Row mit „Ich stimme zu" / „Vollständige Regeln lesen"](@site/blog/assets/message-editor-v4-ga/pixelheavenexample1.png)

Servericon neben der Begrüßung. Jede Regel hat ihr eigenes kleines Thumbnail. Die Buttons sitzen direkt bei dem
Inhalt, zu dem sie gehören. Eine Nachricht, kein zweiter Post nötig.

[**Willkommen + Regeln importieren**](https://scnx.app/import/message?key=cmovh1czb003j7br1da3gjacn&source=marketplace)

### Ein echtes Bilderraster

V3 war hart zu Bildern. Das erste landete im Embed, der Rest hing unten als Anhang dran, und in welcher Reihenfolge
Discord die zeigte, war seine Sache. Media Gallery ist jetzt eine richtige Grid-Komponente, mit Alt-Text auf jedem
Bild.

![Eine „Pixel Haven Game Library"-Karte mit einer Media Gallery aus fünf Steam-Capsule-Bildern für Cyberpunk 2077, Satisfactory, Anno 1800, Among Us und Lethal Company, darunter „Manage your games" / „Browse all games"-Buttons](@site/blog/assets/message-editor-v4-ga/pixel-haeven-game-libary.png)

[**Game Library importieren**](https://scnx.app/import/message?key=cmovhp591003n7br19dxv36ah&source=marketplace) -
fünf Steam-Capsules in einem Grid, darunter zwei CTAs. Genau die Art Nachricht, die man in einen `#welcome`-Channel
pinnen würde.

## Drag zum Umsortieren

Alles in V4 ist draggable. Komponenten in Containern, Optionen in Dropdowns, Buttons in Action-Rows. Wer in V3 schon
mal ein Embed drei Plätze nach oben verschieben wollte und am Ende die ganze Nachricht neu gebaut hat, weil das
schneller war - genau dafür wird V4 sich von Anfang an gut anfühlen.

## Autocomplete

Eine Kleinigkeit, die mir aber immer wieder positiv auffällt: Tipp `%` in einem Textfeld und du bekommst ein Menü mit
allen Parametern, die in dem Kontext verfügbar sind - `%userTag%`, `%guildName%`, `%memberCount%` und Co., jeweils mit
Beschreibung. Pfeiltasten zum Auswählen, Enter zum Einfügen. Kein Hin- und Herblättern in den Docs mehr, um zu
prüfen, ob es jetzt `%userTag%` oder `%user_tag%` heißt.

Gleiches Prinzip für Emoji (`:`) und für `@`- und `#`-Mentions in Feldern, die das unterstützen.

## Die vollständige Komponentenliste

Zum Nachschlagen - alles, was du in eine V4-Nachricht reinwerfen kannst:

| Komponente        | Was sie macht                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| **Text Display**  | Ein Markdown-Textblock. Bis zu 4.000 Zeichen.                                                  |
| **Container**     | Gruppiert Komponenten mit Akzentfarbe. Kommt einem Embed am nächsten, nur flexibler.           |
| **Section**       | 1-3 Textzeilen mit einem Thumbnail oder Button rechts.                                         |
| **Media Gallery** | 1-10 Bilder in einem Grid, das sich auch wirklich wie ein Grid verhält.                        |
| **Action Row**    | Bis zu 5 Buttons oder ein Dropdown.                                                            |
| **Separator**     | Trenner, mit oder ohne Linie.                                                                  |
| **Image**         | Ein hochgeladenes Bild, an beliebiger Stelle.                                                  |
| **Dynamic Image** | Pro-Nachricht generiertes Bild (wie in V3).                                                    |

40 pro Nachricht, alle draggable, Container können alles davon halten - außer andere Container.

## Wo es auftaucht

Überall, wo SCNX einen Message Editor hat: [Bot-Login](/docs/custom-bot/login-as-bot)-Nachrichten,
[Custom Commands](/docs/custom-bot/custom-commands), [Support-Bot](/docs/support-bot/intro)-Templates, Willkommens-
und Levelup-Nachrichten in den verschiedenen Modulkonfigurationen, und so weiter. Parameter funktionieren gleich,
Copy/Paste zwischen Feldern funktioniert gleich, das Share-Link-Feature funktioniert gleich. In den Feldern lässt sich
jetzt einfach V4 auswählen, wo es Sinn ergibt.

## Schon auf V3 unterwegs?

Du musst nichts tun. V3 ist in den meisten Feldern weiter der Default, es gibt keinen Deprecation-Countdown, und
bestehende Nachrichten funktionieren genau wie vorher. Wenn Embeds für dich passen, lass sie einfach.

Wer eine bestehende Nachricht auf V4 umstellen möchte, findet im V3-Toolbar einen **„In V4 Editor umwandeln"**-Button.
Er mappt Embeds auf Container, Buttons auf Action-Rows, Thumbnails auf Section-Accessories. Zwei Hinweise:

1. Einbahnstraße - du kannst nicht zurück konvertieren.
2. Author-Icons, Footer-Icons und Embed-Timestamps haben kein V4-Äquivalent. Sie gehen bei der Konvertierung
   verloren.

Die vollständige Mapping-Tabelle steht [in den Docs](/docs/scnx/guilds/message-editor#migration).

## Ausprobieren

Öffne ein beliebiges Message-Editor-Feld, klick auf **„Switch to V4 Editor"**, und fang an, Komponenten reinzuziehen.
Die [Message-Editor-Doku](/docs/scnx/guilds/message-editor) hat die volle Komponenten-Referenz, die Limits-Übersicht
und die V3 → V4-Mapping-Tabelle.

Wenn du etwas baust und gegen eine Wand läufst - eine Komponente, die du dir wünschst, ein Flow, der sich komisch
anfühlt, ein Limit, das dich erwischt - lass es mich wissen, auf [Featureboard](https://featureboard.net) (suche nach
„Message Editor", da gibt's schon ein paar Threads) oder im [SCNX Discord](https://scootk.it/dc-de). Die Beta hat
schon viel abgefangen, aber du wirst noch Sachen finden, die wir übersehen haben.

Grüße aus München,\
\- Simon
