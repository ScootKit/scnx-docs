---
sidebar_position: 6
title: Nachrichten & Vorlagen
description: Passe jede Nachricht an, die AI FAQ sendet, darunter die Lade-Antwort, die Antwortvorlage, das Gatekeeper-Modal und die Nachrichten bei aufgebrauchten Credits.
---

# Nachrichten und Vorlagen

Jede Nachricht, die das AI-FAQ-Feature sendet, ist in deinem Dashboard bearbeitbar. Diese Seite listet jede einzelne auf, zeigt, wo sie erscheint, und welche Platzhalter du darin verwenden kannst.

## So funktionieren Standardwerte {#defaults}

- Jede Nachricht kommt mit einem freundlichen Standardtext in der Sprache deines Bots.
- Wenn du eine Nachricht im Dashboard bearbeitest, wird deine eigene Formulierung gespeichert.
- **Das Leeren einer Nachricht** (Feld leeren) lässt den Bot auf den Standard zurückfallen - so funktioniert der Bot in jeder unterstützten Sprache, auch wenn du nie etwas angefasst hast.
- Nicht-englische Übersetzungen werden über unser Übersetzungssystem verwaltet. Wenn du eine Übersetzung beisteuern oder korrigieren möchtest, melde dich bei uns - übersetzte Formulierungen in deinem eigenen Dashboard zu ändern ist in Ordnung, aber erwarte nicht, dass dieselbe Formulierung serverseitig in einer anderen Sprache erscheint.

## Verfügbare Platzhalter {#placeholders}

Du kannst jeden dieser Platzhalter in eine Nachricht einfügen, und der Bot füllt ihn vor dem Senden aus:

| Platzhalter   | Wozu er wird                                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------- |
| `%aiAnswer%`  | Der von der KI generierte Antworttext. **Erforderlich** in den beiden Antwort-Wrapper-Nachrichten. |
| `%username%`  | Der Benutzername des Mitglieds.                                                                    |
| `%mention%`   | Eine anklickbare Erwähnung des Mitglieds.                                                          |
| `%tag%`       | Der vollständige Discord-Tag des Mitglieds.                                                        |
| `%userID%`    | Die Discord-ID des Mitglieds.                                                                      |
| `%guildName%` | Der Name deines Servers.                                                                           |

Alle üblichen [globalen Platzhalter](/de/docs/support-bot/general/global-placeholders) (Bot-Identität, Zeitstempel, Öffnungszeiten usw.) werden ebenfalls unterstützt.

## Nachrichten der Kanal-Auto-Antwort {#channel-templates}

Diese werden verwendet, wenn die KI auf eine Nachricht in einem deiner ausgewählten Kanäle antwortet - siehe [Kanal-Auto-Antwort](/de/docs/support-bot/ai-faq/channel-mode).

- **Antwort wird geladen** - der Platzhalter, der als Antwort auf die Nachricht des Mitglieds gesendet wird, während die KI nachdenkt. Standard: „Looking that up...". Sie wird an Ort und Stelle mit der finalen Antwort bearbeitet, sobald die KI fertig ist.
- **Vorlage für die Antwort-Nachricht** - der Wrapper um die Antwort der KI. **Muss `%aiAnswer%` enthalten** - dort wird die eigentliche Antwort der KI eingefügt. Der Standard ist ein freundliches Embed mit einem Hinweis im Footer, dass die Antwort KI-generiert ist.

### Modal-Beschriftungen (Gatekeeper) {#modal-labels}

Auch der Text im Fragen-Pop-up selbst ist bearbeitbar, getrennt von den oben genannten Vorlagen-Nachrichten. Diese befinden sich bei den übrigen Gatekeeper-Einstellungen.

- **Eigener Modal-Titel** - die Überschrift oben im Pop-up. Bis zu 45 Zeichen.
- **Eigenes Label für das Fragenfeld** - die Beschriftung über dem Textfeld, in das das Mitglied tippt. Bis zu 45 Zeichen.
- **Eigener Modal-Platzhalter** - der graue Hinweistext im Textfeld. Bis zu 100 Zeichen.

Alle drei fallen auf einen lokalisierten Standard zurück, wenn sie leer bleiben.

## Nachrichten des Pre-Ticket-Gatekeepers {#gate-templates}

Diese werden verwendet, wenn der [Pre-Ticket-Gatekeeper](/de/docs/support-bot/ai-faq/pre-ticket-gatekeeper) aktiv ist.

- **Pre-Modal-Willkommensnachricht** - wird direkt vor dem Erscheinen des Fragen-Pop-ups gesendet. Standardmäßig leer. Nutze sie, um Mitgliedern mitzuteilen „Wir versuchen zuerst, mit KI zu antworten", damit das Pop-up nicht überrascht.
- **Vorlage für Gatekeeper-Antwort** - der Wrapper um die Gatekeeper-Antwort der KI. **Muss `%aiAnswer%` enthalten.** Die Knöpfe „Das hat geholfen" und „Ich brauche weiterhin Hilfe" werden automatisch unter deinem Wrapper hinzugefügt.
- **„Das hat geholfen"-Antwort** - wird gesendet, wenn das Mitglied auf **Das hat geholfen** klickt. Der Standard ist ein freundliches Dankeschön. Es wird kein Ticket geöffnet.
- **Ablehnungsnachricht** - wird gesendet, wenn die KI die Antwort auf die Frage verweigert (außerhalb des Rahmens, beleidigend oder es gibt schlicht keinen passenden FAQ-Eintrag).
- **Nachrichten bei aufgebrauchten Credits** - werden gesendet, wenn dein KI-Credit-Guthaben leer ist. Es gibt zwei Versionen: eine, die dem Mitglied nur mitteilt, dass die KI nicht verfügbar ist, und eine, die das mitteilt und einen Ticket-Knopf anbietet. Welche verwendet wird, hängt von deiner [Einstellung für das Verhalten bei aufgebrauchten Credits](/de/docs/support-bot/ai-faq/credits-and-pricing#out-of-credits-behavior) ab.

## Beispiel-Anpassungen {#examples}

Drei Anpassungen, die häufig vorkommen. Alle lassen sich direkt im Nachrichten-Editor des genannten Felds einstellen.

### Willkommensnachricht vor dem Modal im eigenen Stil

Wird im Kanal direkt vor dem Erscheinen des KI-Pop-ups gesendet. Setzt Erwartungen und macht die Erfahrung angenehmer.

> Hey %mention%! Ich bin **%botName%**, der Helfer-Bot von **%guildName%**. Bevor ich dich mit unserem Team verbinde, schaue ich kurz in unsere FAQ - vielleicht kann ich deine Frage sofort beantworten. (Du erreichst jederzeit einen Menschen, falls ich daneben liege.)

### Freundlichere Übergabe bei „Ich brauche weiterhin Hilfe"

Die Standardnachricht bei aufgebrauchten Credits mit Ticket-Knopf kann abrupt wirken. Eine wärmere Formulierung für dieses Feld:

> Entschuldige, unser KI-Helfer ist gerade nicht verfügbar. Klicke auf den Knopf unten, und jemand aus unserem Team hilft dir direkt weiter. Während unserer Arbeitszeiten antworten wir in der Regel innerhalb weniger Stunden.

### Hinweis bei aufgebrauchten Credits, der auf das Team verweist

Wenn die Nachricht bei aufgebrauchten Credits Mitglieder an einen bestimmten Team-Kanal verweisen soll, statt nur „KI nicht verfügbar" zu sagen:

> Unser KI-Helfer ist vorübergehend nicht verfügbar. Bitte poste deine Frage vorerst in `<#YOUR_HELP_CHANNEL_ID>`, und jemand aus unserem Team meldet sich bei dir. Entschuldige die Unannehmlichkeiten.

Ersetze `YOUR_HELP_CHANNEL_ID` durch die ID deines Kanals. Der Bot füllt diesen Wert nicht automatisch aus - es ist eine wörtliche Discord-Kanalerwähnung, die du einfügst.

## Die Nachrichten bearbeiten {#editing}

- Öffne die Seite [**KI-FAQ → KI-Einstellungen**](https://scnx.app/glink?page=support-system/ai-faq/settings) in deinem Dashboard.
- Jede Nachricht befindet sich in dem Abschnitt, zu dem sie gehört (Kanal-Auto-Antwort oder Pre-Ticket-Gatekeeper).
- Jede Nachricht nutzt denselben Rich-Editor wie der Rest des Support-Bots - Embed-Farbe, Titel, Beschreibung, Footer, Bild.
- Die verfügbaren Platzhalter sind im Platzhalter-Helfer jedes Editors aufgelistet.

:::tip KI-Hinweis beibehalten
Die Standard-Antwort-Wrapper enthalten einen kleinen Hinweis „KI-generierte Antwort. Kann falsch sein." Wir empfehlen, in deiner eigenen Formulierung eine gleichwertige Zeile beizubehalten, damit Mitglieder die Antwort der KI nicht für die eines Menschen halten.
:::

:::tip Enterprise
Diese Nachrichten werden pro Server konfiguriert. Wenn du mehrere Server betreibst und zentrale Nachrichtenverwaltung oder Massen-Überschreibungen über sie hinweg möchtest, sind diese Abläufe auf Enterprise-Plänen verfügbar - siehe [Enterprise & Docs Sync](/de/docs/support-bot/ai-faq/enterprise-and-docs-sync) oder [kontaktiere den Vertrieb](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::
