---
sidebar_position: 3
title: FAQ-Einträge
description: Schreibe die FAQ-Einträge, die die KI zur Beantwortung von Mitgliederfragen nutzt. Behandelt den Aufbau von Einträgen, die Indexierungskosten und das Limit aktiver Einträge.
---

# FAQ-Einträge

Jeder FAQ-Eintrag ist eine Frage, die deine Mitglieder stellen könnten, plus die Antwort, die die KI verwenden soll. Diese Einträge sind das **Einzige**, woraus die KI liest - sie erfindet nie Antworten aus externem Wissen. Ein paar gut geschriebene Einträge bringen dir mehr als Dutzende vage Einträge.

## Wie ein Eintrag aussieht {#structure}

Ein Eintrag besteht aus zwei Teilen:

- **Ein Titel.** Das ist eine interne Bezeichnung, damit dein Team den Eintrag im Dashboard findet - Mitglieder sehen ihn nie, und die KI nutzt ihn nicht, um Fragen zuzuordnen. Halte ihn kurz und beschreibend, z. B. "Rückerstattungsrichtlinie" oder "So erhalte ich meine Rolle".
- **Eine Antwort.** Das liest die KI tatsächlich, wenn ein Mitglied eine Frage stellt. Schreibe sie so, wie du einem Mitglied das Thema im Chat erklären würdest - nimm Wörter auf, die ein Mitglied natürlicherweise verwenden würde, sowie die Schritte oder Fakten, die es mitnehmen soll. Einfaches Markdown funktioniert (Aufzählungen, Links, fetter Text). Antworten dürfen bis zu **50.000 Zeichen** lang sein.

Jeder Eintrag ist entweder **aktiv** (die KI nutzt ihn) oder **archiviert** (für die KI ausgeblendet, aber in deiner Datenbank behalten).

:::tip Schreibe für das Mitglied, nicht für die KI
Stopfe keine Schlüsselwörter hinein. Schreibe den Eintrag so, als würdest du einem deiner Mitglieder im Chat antworten. Decke die Formulierungen ab, die echte Mitglieder verwenden, plus die konkrete Antwort, die sie brauchen. Die KI findet den richtigen Eintrag deutlich besser, wenn sowohl die Frage als auch die Antwort klar ausgeschrieben sind.
:::

## Was einen guten Eintrag ausmacht {#good-entry}

Einige Gewohnheiten, die zuverlässig zu Einträgen führen, die die KI gut nutzt:

- **Ein Thema pro Eintrag.** Ein Eintrag "Rückerstattungsrichtlinie" und ein Eintrag "Abo-Kündigung" passen jeweils genauer als ein zusammengelegter Eintrag "Abrechnung", der beides abdeckt.
- **Verwende die Wörter, die Mitglieder tippen würden,** nicht nur internen Jargon. Wenn deine Mitglieder die Premium-Stufe "Pro+" nennen, dein Team aber "Tier 2", nimm beides auf.
- **Decke Frage und Antwort ab.** "Wie kündige ich?" + "Settings → Billing → Cancel Subscription" funktioniert viel besser als nur die Schritte ohne Einordnung.
- **Nutze Markdown-Überschriften (`##`) in langen Einträgen,** um den Inhalt in klare Abschnitte zu gliedern. Die KI teilt anhand dieser Überschriften in Abschnitte auf, sodass sich verschiedene Unterthemen bei der Suche trennen lassen.
- **Konkret schlägt abstrakt.** Echte Beispiele, genaue Menüpfade, echte Linktexte, echte Werte. Die KI formuliert den Wortlaut um, erfindet aber keine Details.

### Beispiel-Eintrag {#example-entry}

So sieht ein kleiner, gut aufgebauter Eintrag aus:

**Titel (interne Bezeichnung):** `Abo kündigen`

**Antwort:**

```markdown
## How to cancel your subscription

You can cancel your subscription at any time from your account page.
Once you cancel, you keep access until the end of the current billing period - you won't be charged again after that.

### Steps

1. Open https://example.com/account/billing.
2. Click **Manage subscription**.
3. Click **Cancel subscription** at the bottom of the page.
4. Confirm in the popup.

You'll get a confirmation email within a few minutes. If you don't see it, check your spam folder.

### Common questions

- **Will I be refunded for unused time?** No, cancelling stops future charges but doesn't refund the current period. If you need a refund for a specific reason, open a ticket and our team will look into it.
- **Can I resubscribe later?** Yes - sign in and pick a plan again. Your old data and roles are restored automatically.
- **I can't access the billing page.** Make sure you're signed in with the same account you subscribed with. If you still can't see it, open a ticket and we'll help.
```

Ein paar Dinge, die man beachten sollte:

- Der Titel ist kurz und nur für dein Team - Mitglieder sehen ihn nie.
- Die Antwort deckt die **Frage** (Kündigen, Rückerstattung, erneut abonnieren) **und** die tatsächlichen Schritte ab, denen ein Mitglied folgen würde.
- Die Überschriften (`## ...`, `### ...`) teilen die Antwort in klare Unterthemen. Die KI nutzt diese Überschriften als natürliche Trennpunkte.
- "Common questions" am Ende fängt die Variationen ein, die Mitglieder tippen. Es ist viel einfacher, einen Eintrag zu pflegen, der vier verwandte Fragen abdeckt, als vier einzelne Einträge.
- Die Länge liegt deutlich unter dem Limit von 50.000 Zeichen - dieser Eintrag hat etwa 800 Zeichen.

## Aus einer Datei importieren {#file-import}

Im [Eintrags-Editor](https://scnx.app/glink?page=support-system/ai-faq/manage) gibt es einen Button **Aus .md oder .txt importieren**. Ziehe eine Markdown- oder Textdatei hinein, und sie landet im Antwortfeld, damit du sie prüfen und speichern kannst. Ist die Datei länger als 50.000 Zeichen, wird sie mit einem Hinweis passend gekürzt.

Für größere oder sich ständig ändernde Inhalte (ganze GitHub-Repositories, Notion-Seiten, Help-Center-Artikel) siehe [Enterprise & Docs Sync](/de/docs/support-bot/ai-faq/enterprise-and-docs-sync).

## Archivieren oder löschen {#archive-vs-delete}

- **Archivieren** blendet einen Eintrag für die KI aus, behält ihn aber in der Datenbank. Du kannst ihn jederzeit wieder aktivieren. Archivierte Einträge zählen nicht zu deinem Limit aktiver Einträge und verursachen keine Kosten.
- **Löschen** entfernt den Eintrag dauerhaft. Es gibt kein Rückgängigmachen. Nutze das für Einträge, die nie wiederkommen sollen.

Archiviere, solange du experimentierst (ein Entwurf, bei dem du unsicher bist, ein saisonaler Eintrag, den du später zurückbringst). Lösche nur, wenn der Inhalt endgültig weg ist.

## Was das Speichern eines Eintrags kostet {#indexing-cost}

Wenn du die Antwort eines Eintrags speicherst, teilt der Bot sie in durchsuchbare Abschnitte auf und speichert diese, damit die KI später den richtigen finden kann. Diese Vorarbeit verbraucht eine kleine Menge AI-Credits.

- Die Kosten betragen **1 Credit pro Abschnitt.** Bei typischem englischem Fließtext entspricht ein Abschnitt etwa 2.000 Zeichen - ein Eintrag mit 4.000 Zeichen kostet also etwa 2 Credits zum Speichern, einer mit 20.000 Zeichen etwa 10. Code-lastige oder Markdown-dichte Inhalte werden tendenziell in kleinere Abschnitte geteilt, sodass die Kosten pro Zeichen etwas höher sein können.
- Der Editor zeigt die genaue Anzahl der Abschnitte und die Credit-Kosten live beim Tippen an, sodass du siehst, was das Speichern kostet, bevor du auf den Button klickst.
- Das Bearbeiten nur des Titels oder das Archivieren/Wiederherstellen eines Eintrags ist **kostenlos** - nur Änderungen am Antworttext lösen die erneute Berechnung aus.
- Das erneute Speichern eines Eintrags, dessen Antwort sich nicht wesentlich geändert hat, indexiert nicht neu und ist daher ebenfalls kostenlos.
- Archivierte Einträge verursachen keine weiteren Kosten.

Das Gesamtbild (einschließlich der Kosten pro Antwort) findest du unter [Credits und Preise](/de/docs/support-bot/ai-faq/credits-and-pricing).

## Wann du einen langen Eintrag aufteilen solltest {#splitting}

Der Textkörper eines einzelnen Eintrags ist auf **50.000 Zeichen** begrenzt. Einträge bis zu diesem Limit werden vollständig indexiert - innerhalb des Limits wird nichts stillschweigend verworfen.

Trotzdem sind sehr lange Einträge nicht immer die beste Wahl:

- **Ein einzelner riesiger Eintrag kann andere Einträge** in den Suchergebnissen der KI verdrängen, weil so viele seiner Abschnitte gleichzeitig als Treffer infrage kommen.
- **Viele Themen in einem Eintrag zu mischen** schwächt die Fähigkeit der KI, den richtigen Abschnitt zu finden - sie zitiert womöglich aus einem verwandten, aber falschen Teil desselben Eintrags.

Eine gute Faustregel: Wenn dein Entwurf unter einem Titel mehr als drei oder vier lose zusammenhängende Themen enthält, teile ihn in einzelne Einträge auf (einer pro Thema). Die KI ordnet jeden genauer zu, und dein Team bekommt ein besser organisiertes Dashboard.

## Limit aktiver Einträge {#quota}

Du kannst bis zu **100 aktive Einträge** pro Server haben. Archivierte zählen nicht. Das Dashboard warnt dich, wenn du dich dem Limit näherst, und erneut, wenn du es erreicht hast - brauchst du mehr, archiviere Einträge, die du nicht mehr nutzt.

:::tip Enterprise
Das Limit von 100 Einträgen reicht für die meisten Server, aber Produktdokumentation, mehrsprachige Wissensdatenbanken und größere Support-Teams brauchen oft mehr Platz. Individuelle Kontingente und automatisierter Docs-Import sind in Enterprise-Plänen verfügbar - siehe [Enterprise & Docs Sync](/de/docs/support-bot/ai-faq/enterprise-and-docs-sync) oder [kontaktiere den Vertrieb](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::

## Mehrere Einträge gleichzeitig archivieren {#bulk-archive}

Auf der Seite mit den FAQ-Einträgen (du kannst auch direkt zu [Eintrag hinzufügen](https://scnx.app/glink?page=support-system/ai-faq/entries/new) springen, wenn du einen erstellen möchtest):

1. Setze den Haken bei jedem Eintrag, den du archivieren möchtest.
2. Klicke auf **Auswahl archivieren**.
3. Bestätige im Popup.

Schlägt das Archivieren bei einem Eintrag fehl, bleiben die fehlgeschlagenen Einträge ausgewählt, sodass du es mit einem weiteren Klick erneut versuchen kannst. Ein Massen-Löschen gibt es bewusst nicht - das Löschen erfolgt pro Eintrag, damit du nicht versehentlich einen ganzen Stapel entfernst.
