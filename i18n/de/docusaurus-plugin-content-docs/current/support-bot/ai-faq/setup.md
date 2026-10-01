---
sidebar_position: 2
title: Einrichtung
description: Aktiviere AI FAQ für deinen Discord-Server, schreibe deine ersten FAQ-Einträge und lege fest, wo die KI antwortet.
---

# AI FAQ einrichten

Die Einrichtung von AI FAQ dauert etwa 10 Minuten. Hier ist die empfohlene Reihenfolge.

## Bevor du beginnst {#prerequisites}

- AI FAQ muss für deinen Server freigeschaltet sein. Wenn du den Bereich AI FAQ in deinem Dashboard nicht siehst, bist du noch nicht in der Beta - melde dich über das [Kontaktformular](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
- Dein Support-Bot muss in Version 3 oder neuer laufen. Ältere Versionen enthalten AI FAQ nicht.
- Der Bot verbraucht AI-Credits, wenn er eine Frage beantwortet oder du einen neuen FAQ-Eintrag speicherst. Wirf einen Blick auf [Credits und Preise](/de/docs/support-bot/ai-faq/credits-and-pricing), damit es keine Überraschungen gibt.

## Empfohlene Reihenfolge {#recommended-order}

So bekommst du am schnellsten etwas Nützliches zum Laufen, ohne beim Feinabstimmen zu viele Credits zu verbrauchen:

1. **Aktiviere den Hauptschalter** ([KI-Einstellungen](https://scnx.app/glink?page=support-system/ai-faq/settings) → AI FAQ auf diesem Server aktivieren). Noch passiert nichts - du hast dem Bot noch nicht gesagt, wo er antworten soll.
2. **Schreibe 5 bis 10 FAQ-Einträge** zu den Fragen, die dein Team ohnehin täglich beantwortet. Qualität ist in dieser Phase viel wichtiger als Quantität.
3. **Beginne mit nur einem Einsatzort.** Entweder:
   - aktiviere **Automatisch in Kanälen antworten** für **einen** Hilfe-Kanal, oder
   - aktiviere den **Pre-Ticket-Gatekeeper** für den Ticket-Ablauf, den du nutzt (Modmail oder Ticket-System).
4. **Teste es** im Tab [Test-Chat](https://scnx.app/glink?page=support-system/ai-faq/test) und mit ein paar Testfragen im echten Kanal.
5. **Lass es ein paar Tage laufen** und sieh dir dann die Seite [Insights](/de/docs/support-bot/ai-faq/insights) an. Die häufigsten Eskalationsgründe zeigen dir, welche FAQ-Einträge du als Nächstes schreiben solltest.
6. **Passe die Filter an** deine Beobachtungen an - meist erhöhst du Cooldown oder Mindestlänge der Frage, wenn der Kanal unruhig ist, oder lockerst sie, wenn die KI zu zurückhaltend ist.
7. **Weite den Einsatz aus**, sobald du ihr vertraust: mehr Kanäle oder zusätzlich den anderen Einsatzort.

## Schritt für Schritt {#steps}

### 1. Öffne den Bereich AI FAQ

Finde in deinem SCNX-Dashboard im Menü des Support-Bots den Punkt **KI-FAQ**.

### 2. Aktiviere den Hauptschalter

Gehe zum Tab **KI-Einstellungen** und aktiviere **AI FAQ auf diesem Server aktivieren**. Beim ersten Mal zeigt dir das Dashboard einen Bestätigungsdialog mit den Kosten pro Antwort. Bestätige, um die Funktion zu aktivieren.

### 3. Schreibe deine ersten FAQ-Einträge

Öffne den Tab [FAQ-Einträge](https://scnx.app/glink?page=support-system/ai-faq/manage) und füge ein paar Einträge zu den Fragen hinzu, die deine Mitglieder am häufigsten stellen. Du kannst leer starten oder eine der integrierten Startvorlagen wählen (Rückerstattungen, Serverregeln, Abo-Kündigung).

Tipps zum Schreiben guter Einträge, die Kosten fürs Speichern und das Limit von 100 Einträgen findest du unter [FAQ-Einträge schreiben](/de/docs/support-bot/ai-faq/faq-entries).

### 4. Lege fest, wo die KI antworten soll

Wähle zurück in **KI-Einstellungen → Wo die KI antwortet** eine oder beide Optionen:

- **Automatisch in Kanälen antworten** - der Bot antwortet direkt in Hilfe-Kanälen, die du auswählst. Siehe [Kanal-Auto-Antwort](/de/docs/support-bot/ai-faq/channel-mode).
- **Pre-Ticket-Gatekeeper** - der Bot versucht zu antworten, bevor ein Modmail- oder Ticket-System-Ticket geöffnet wird. Siehe [Pre-Ticket-Gatekeeper](/de/docs/support-bot/ai-faq/pre-ticket-gatekeeper).

Du kannst beide gleichzeitig nutzen oder nur eine.

### 5. Passe die Nachrichten an (optional)

Der Bot bringt freundliche Standardtexte für die Lade-Antwort, den Antwort-Rahmen, das Gatekeeper-Modal und die Nachricht "Credits aufgebraucht" mit. Wenn du den Wortlaut oder den Embed-Stil ändern möchtest, siehe [Nachrichten und Vorlagen](/de/docs/support-bot/ai-faq/messages-and-templates).

### 6. Speichern und Bot neu laden

Nach jeder Änderung an den AI-FAQ-Einstellungen fordert dich das Dashboard auf, den Bot neu zu laden, damit er die neue Konfiguration übernimmt. Das ist dieselbe Aufforderung, die du bereits aus der restlichen Einrichtung des Support-Bots kennst.

## Was nach dem Speichern eines Eintrags passiert {#after-save}

Wenn du einen neuen oder bearbeiteten FAQ-Eintrag speicherst, liest der Bot den Antworttext, teilt ihn in durchsuchbare Abschnitte auf und speichert diese, damit die KI später den richtigen finden kann. Das dauert normalerweise weniger als 10 Sekunden. Das Dashboard zeigt währenddessen das Badge "indexing..." an und wechselt zu "ready", sobald der Eintrag aktiv ist. Ab diesem Moment nutzt die KI ihn zur Beantwortung von Fragen.

Schlägt die Indexierung fehl (meist wegen eines vorübergehenden Problems beim KI-Anbieter), versucht der Bot es automatisch alle 30 Minuten erneut - du musst nichts tun.

:::tip Klein anfangen
Wir empfehlen, mit 5-10 gut geschriebenen FAQ-Einträgen zu starten und den Pre-Ticket-Gatekeeper zunächst für ein oder zwei Themen zu aktivieren. Sobald du siehst, welche Fragen die KI auf deinem Server gut beantwortet, kannst du mehr Einträge schreiben und die Kanal-Auto-Antwort aktivieren.
:::

:::tip Enterprise
Einträge von Hand zu schreiben ist der richtige Einstieg. Wenn du bereits Dokumentation in GitHub, Notion oder Confluence pflegst, ist in Enterprise-Plänen ein geplanter Import verfügbar, damit du Inhalte nicht manuell kopieren musst - siehe [Enterprise & Docs Sync](/de/docs/support-bot/ai-faq/enterprise-and-docs-sync) oder [kontaktiere den Vertrieb](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::

## AI FAQ deaktivieren {#disabling}

Wenn du den Hauptschalter ausschaltest, stoppen alle KI-Antworten sofort. Deine FAQ-Einträge bleiben erhalten, sodass du beim erneuten Aktivieren dort weitermachst, wo du aufgehört hast. Archivierte Einträge bleiben erhalten, bis du sie bewusst löschst.
