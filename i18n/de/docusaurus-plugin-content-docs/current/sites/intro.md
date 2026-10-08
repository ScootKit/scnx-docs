---
sidebar_position: 1
title: SCNX Sites
description: Bau deiner Discord-Community eine eigene Website - eine öffentliche Startseite mit deiner eigenen Adresse auf scnx.site, ganz ohne Code.
---

# SCNX Sites

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

SCNX Sites macht aus deiner Discord-Community eine echte Website. Du bekommst eine öffentliche Startseite mit deiner eigenen Adresse, gebaut aus fertigen Blöcken in einem visuellen Editor. Du musst nichts programmieren und nichts selbst hosten.

Eine Website ist eine tolle Landingpage für neue Mitglieder und ein Zuhause für die, die schon da sind. Füge einen Beitritts-Button hinzu, stelle dein Team vor, liste deine Regeln auf, sammle Bewerbungen über ein Formular, poste Neuigkeiten und zeige deine kommenden Discord-Events.

:::info Sites ist in einer geschlossenen Beta
Der Website-Builder wird gerade für ausgewählte Server freigeschaltet. Wenn du den Sites-Bereich öffnest und "Sites ist hier nicht verfügbar" siehst, ist die Funktion für deinen Server noch nicht aktiviert.
:::

Auf diesem Bildschirm kannst du auf **Benachrichtige mich zu Sites** klicken. Wir schicken dir zuerst eine Bestätigungsmail an die Adresse deines Kontos. Sobald du sie bestätigt hast, schreiben wir dir, wenn Sites für mehr Server freigeschaltet wird.

## Was du bauen kannst {#what-you-can-build}

![Eine veröffentlichte Demo-Website mit Ankündigungsleiste und geöffnetem Dropdown-Menü](@site/docs/assets/sites/de/public-site.png)

- Eine **Landingpage**, die neue Mitglieder begrüßt und direkt zu deinem Discord verlinkt.
- Eine **Regelseite**, eine **Über-uns-Seite** und eine **Team-Seite**, alle mit gemeinsamem Menü und Fußbereich.
- **Formulare** für Team-Bewerbungen, Event-Anmeldungen oder Kontaktanfragen, deren Antworten in deinem Dashboard landen.
- Einen **Blog** für Ankündigungen und Updates, mit eigener `/blog`-Seite und einem RSS-Feed.
- Einen **Events**-Bereich, der deine kommenden geplanten Discord-Events automatisch anzeigt.
- Eine kompakte **Link-in-Bio**-Seite für Creator.

## So funktioniert es {#how-it-works}

Deine Seiten baust du im **Editor**, einem bildschirmfüllenden Arbeitsbereich im SCNX-Dashboard. Seiten bestehen aus Blöcken, ein Design gestaltet die ganze Website, und du klickst auf **Veröffentlichen**, wenn du live gehen willst. Bis du veröffentlichst, bleiben deine Änderungen ein privater Entwurf.

Jede Website hat eine kostenlose Adresse, die auf `scnx.site` endet, zum Beispiel `my-community.scnx.site`. Du kannst später auch [deine eigene Domain verbinden](/docs/sites/custom-domains).

## Deine Website erstellen {#create}

Öffne **Sites** in der Seitenleiste deines Servers im [SCNX-Dashboard](https://scnx.app) und klicke auf **Website erstellen**. Dafür brauchst du Bearbeitungsrechte für die Website (siehe [Wer eine Website bearbeiten kann](#permissions)). Der Assistent hat vier kurze Schritte:

1. **Name & Adresse.** Gib deiner Website einen Namen (den du später in den Einstellungen ändern kannst) und wähle ihre Adresse. Solange du keine eigene eintippst, schlagen wir eine Adresse auf Basis des Namens vor. Die Adresse muss 3 bis 63 Buchstaben, Zahlen und Bindestriche haben und mit einem Buchstaben oder einer Zahl beginnen und enden. Ein paar Wörter sind reserviert, und der Assistent sagt dir sofort, wenn du eins davon gewählt hast. Ob jemand anderes die Adresse schon benutzt, erfährst du, wenn du auf **Website erstellen** klickst. Dann bringt dich der Assistent zurück zu diesem Schritt, damit du eine andere wählen kannst. Wenn mehr als eine **Adress-Endung** angeboten wird, wählst du sie auch hier.
2. **Vorlage.** Starte mit einer fertigen Vorlage oder mit einer leeren Seite (**Leer**) und bau alles selbst. Siehe [Vorlagen](#templates) weiter unten.
3. **Sprache.** Wähle die Sprache für die vorgefertigten Texte deiner Website (Buttons und Beschriftungen): Englisch oder Deutsch. Deine eigenen Inhalte kannst du trotzdem in jeder Sprache schreiben.
4. **Bestätigen.** Prüfe die Zusammenfassung, setze den Haken bei **Ich habe die SCNX-Nutzungsbedingungen gelesen und stimme ihnen zu.** und klicke auf **Website erstellen**.

Wir legen deine Website als **Entwurf** an und bringen dich direkt in den Editor, damit du sie bearbeiten kannst, bevor sie live geht. Bis du veröffentlichst, ist nichts öffentlich.

:::note Wenn die Vorlage nicht eingerichtet werden konnte
Zuerst wird deine Website erstellt, gleich danach wird die Vorlage eingefügt. In seltenen Fällen klappt der zweite Teil nicht, zum Beispiel wenn unsere automatische Inhaltsprüfung kurz nicht erreichbar ist. Deine Website gibt es trotzdem. Klick auf **Erneut versuchen**, um die Vorlage noch einmal einzurichten, oder auf **Website trotzdem öffnen** und bau sie im Editor weiter.
:::

### Vorlagen {#templates}

![Der Vorlagen-Schritt im Erstellungs-Assistenten mit ausgewählter Vorlage Gaming-Community](@site/docs/assets/sites/de/wizard-template.png)

Vorlagen geben dir einen gestalteten Startpunkt statt einer leeren Seite. Jede bringt ihr eigenes Design mit, echte Blöcke und ein Menü, das schon auf ihre Seiten verlinkt:

| Vorlage            | Was du bekommst                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------- |
| Gaming-Community   | Eine Startseite mit Spieleabenden, neuesten Beiträgen und FAQ, dazu eine Regelseite.      |
| Esport-Team        | Eine Startseite für das Team, dazu eine Seite mit Kader und Wochenplan.                   |
| Link in Bio        | Eine kompakte Seite für Creator: kurze Vorstellung, deine Links und was du machst.        |
| Rollenspiel-Server | Eine Startseite für den Server, dazu eine Weltseite mit Fraktionen und Spielregeln.       |
| Community          | Eine einladende Startseite, dazu eine Über-uns-Seite mit eurer Geschichte und den Regeln. |
| Leer               | Eine leere Seite. Jeden Abschnitt fügst du selbst hinzu.                                  |

Die Texte, die eine Vorlage einfügt, sind Platzhalter in der Sprache deiner Website. Klick sie auf der Seite an, um sie in deinen eigenen Worten neu zu schreiben. Die Seite von **Link in Bio** hat kein Menü und keinen Fußbereich, deshalb ist sie mit Absicht nur eine einzige Seite.

## Dein Sites-Bereich {#workspace}

Sobald deine Website existiert, hat der Bereich **Sites** in der Seitenleiste deines Servers einen Eintrag für jeden Teil davon:

| Eintrag       | Was du dort machst                                                                                                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Übersicht     | Sieh deine Adresse, ob die Website veröffentlicht ist und wann du zuletzt veröffentlicht hast. Von hier öffnest du den Editor oder deine Statistiken.                                         |
| Seiten        | Seiten hinzufügen, umbenennen, umsortieren und löschen und ihr Layout festlegen. Siehe [Seiten](/docs/sites/editor#pages).                                                                    |
| Editor        | Der bildschirmfüllende Arbeitsbereich für Seiteninhalte, Design, den Fußbereich und das Veröffentlichen. Siehe [Der Editor-Arbeitsbereich](/docs/sites/editor).                               |
| Navigation    | Bau das Menü oben auf deiner Website. Siehe [Navigation](/docs/sites/editor#navigation).                                                                                                      |
| Blog          | Beiträge schreiben und veröffentlichen. Siehe [Blog & Ankündigungen](/docs/sites/blog).                                                                                                       |
| Formulare     | Formulare bauen und die Antworten lesen. Siehe [Formulare](/docs/sites/forms).                                                                                                                |
| Domains       | Die Adresse deiner Website, eigene Domains und Weiterleitungen. Siehe [Eigene Domains](/docs/sites/custom-domains).                                                                           |
| Einstellungen | Name, Beschreibung und Sprache der Website, Suche & Teilen, rechtliche Angaben, Bot-Schutz, Wartungsmodus, Branding und das Löschen der Website. Siehe [Einstellungen](/docs/sites/settings). |
| Statistiken   | Seitenaufrufe deiner Website. Siehe [Statistiken](/docs/sites/analytics).                                                                                                                     |

Ganz unten im Bereich führt **Mehr Informationen in unseren Docs** zurück zu dieser Dokumentation. Einträge, auf die du keinen Zugriff hast, werden nicht angezeigt (siehe [Wer eine Website bearbeiten kann](#permissions)).

### Die Übersicht {#overview}

Die Übersichtskarte zeigt die Adresse deiner Website, ihren Status (**Entwurf**, **Veröffentlicht** oder **Deaktiviert**) und wann du zuletzt veröffentlicht hast. **Editor öffnen** bringt dich in den Arbeitsbereich. Wenn du nur ansehen darfst, heißt der Button **Editor öffnen (nur ansehen)**.

![Die Sites-Übersicht mit Adresse, Status und der Liste Bevor du live gehst](@site/docs/assets/sites/de/overview.png)

Unter der Karte zeigt die Liste **Bevor du live gehst** alles, was du dir noch ansehen solltest, jeweils mit einem Link an die richtige Stelle:

- deine Website ist noch nicht veröffentlicht,
- du hast noch keinen Datenschutzkontakt und keine Datenschutzerklärung eingetragen,
- dein Menü ist leer,
- der Wartungsmodus ist aktiv.

## Wer eine Website bearbeiten kann {#permissions}

Der Zugriff auf eine Website richtet sich nach den Website-Berechtigungen deines Servers. Server-Eigentümer und Co-Owner haben immer vollen Zugriff. Alle anderen brauchen die Berechtigung Websites, in einer von drei Stufen:

- **Ansehen** erlaubt es, Übersicht, Seiten, Domains, Einstellungen und Statistiken zu öffnen und den Editor im schreibgeschützten Modus **Nur ansehen** zu nutzen. Man kann sich umsehen und den Versionsverlauf lesen, aber nichts ändern.
- **Bearbeiten** erlaubt es, Seiten zu bauen und zu bearbeiten, Design und Fußbereich zu ändern, die Navigation zu bauen, Blog-Beiträge zu schreiben, Formulare und Weiterleitungen zu verwalten, die Website-Einstellungen zu ändern und zu veröffentlichen. Die Einträge Navigation, Blog und Formulare erscheinen nur mit Bearbeitungsrechten.
- **Admin** wird für die heiklen Aktionen gebraucht: eine eigene Domain verbinden oder entfernen, Formulare samt Antworten löschen, auf eine frühere Version zurücksetzen, den Vorschau-Link zurücksetzen und die ganze Website löschen.

Wenn du etwas nicht tun kannst, brauchst du wahrscheinlich eine höhere Stufe. Frag einen Server-Admin, der sie hat.

## Branding {#branding}

Im Fußbereich deiner Website stehen immer die vorgeschriebenen rechtlichen Links. Wenn dein Server nicht in unserem Professional-Tarif oder unserem Enterprise-Tarif ist, zeigt der Fußbereich außerdem einen kleinen Hinweis "Diese Website läuft auf SCNX". In diesen Tarifen ist der Hinweis ausgeblendet, dein Fußbereich ist also komplett white-labeled.

Das richtet sich automatisch nach dem Tarif deines Servers. Du musst nichts einstellen und nichts neu veröffentlichen. Eine Tarifänderung kommt innerhalb weniger Minuten auf deiner Website an. Was deine Website gerade zeigt, siehst du unter [**Einstellungen** > **Branding**](/docs/sites/settings#branding).

## Nächste Schritte {#next-steps}

- [Der Editor-Arbeitsbereich](/docs/sites/editor) - Seiten, Navigation, Blöcke, Design, Autosave und Veröffentlichen.
- [Eigene Domains](/docs/sites/custom-domains) - verbinde deine eigene Domain.
- [Formulare](/docs/sites/forms) - sammle Bewerbungen und Kontaktanfragen.
- [Blog & Ankündigungen](/docs/sites/blog) - poste Neuigkeiten mit eigener Seite und RSS-Feed.
- [Events](/docs/sites/events) - zeige deine kommenden Discord-Events.
- [Ankündigungsleiste, Weiterleitungen & Link-in-Bio](/docs/sites/small-features) - kleinere Funktionen für deine Website.
- [Einstellungen](/docs/sites/settings) - Name, Teilen, rechtliche Angaben, Wartungsmodus und Branding.
- [Statistiken](/docs/sites/analytics) - Seitenaufrufe, Top-Seiten, Verweise und Länder.
- [Veröffentlichen & Live gehen](/docs/sites/publishing) - Entwürfe, Versionen und Wartungsmodus.
