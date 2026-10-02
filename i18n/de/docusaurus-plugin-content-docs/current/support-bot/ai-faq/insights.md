---
sidebar_position: 8
title: Insights
description: Sieh dir an, wo die KI eskaliert statt zu antworten - die AI-FAQ-Insights-Seite hilft dir, Lücken in deiner Wissensdatenbank zu finden.
---

# Insights

Die **KI-Insights**-Seite ist deine Ansicht für die Frage „Wo schafft es die KI nicht, Anfragen abzufangen?". Sie zeigt, wie oft die KI eine Frage an dein Team übergeben hat, statt sie zu beantworten, welche Gründe sie dafür genannt hat und welche Fragen immer wiederkehren.

Nutze sie, um **Lücken in deiner FAQ** zu finden - jeder wiederkehrende Eskalationsgrund ist ein Hinweis darauf, dass dir ein Eintrag fehlt oder ein bestehender Eintrag verbessert werden muss.

## Wo du sie findest {#where}

Öffne in deinem SCNX-Dashboard [**KI-FAQ → KI-Insights**](https://scnx.app/glink?page=support-system/ai-faq/insights). Sie ist von der allgemeineren Seite [Support-Bot-Analysen](/de/docs/support-bot/general/analytics) getrennt, weil die Fragen, die du an diese Daten stellst, andere sind.

## Zeitraum {#window}

Über ein Dropdown oben kannst du zwischen **Letzte 7 Tage**, **Letzte 30 Tage** und **Letzte 90 Tage** wechseln. Jedes Diagramm auf der Seite richtet sich nach dem gewählten Zeitraum.

## Was die Seite zeigt {#metrics}

### Kennzahlen im Überblick {#top-line}

Oben auf der Seite siehst du vier Zahlen auf einen Blick:

- **Antworten gesamt** - wie viele KI-Antworten der Bot im gewählten Zeitraum erzeugt hat, über Kanal-Auto-Antwort und Pre-Ticket-Gatekeeper hinweg.
- **Angebotene Eskalationen** - wie viele dieser Antworten einen Knopf **Ticket öffnen** enthielten. Das passiert immer dann, wenn die KI der Ansicht war, die Frage lasse sich nicht vollständig aus deiner FAQ beantworten.
- **Eskalationsrate** - der Prozentsatz der Antworten, die mit einem Eskalationsangebot endeten. Niedrige Raten bedeuten, dass die KI die meisten Fragen selbst abfängt; hohe Raten bedeuten, dass ein spürbarer Teil der eingehenden Fragen noch einen Menschen braucht, meist weil deine FAQ sie noch nicht abdeckt.
- **Heuristisch ausgelöste Eskalationen** - der Prozentsatz der Eskalationen, die vom Sicherheitsnetz statt von der eigenen Entscheidung der KI stammen. Siehe [Woher Eskalationen kommen](#escalation-source) weiter unten.

### Woher Eskalationen kommen {#escalation-source}

Jede Eskalation wird danach markiert, wie sie zustande kam. Es gibt zwei Quellen:

- **Saubere Übergabe** (auf der Seite als „Tool call" bezeichnet) - die KI hat klar entschieden „Das kann ich aus der FAQ nicht beantworten" und den Bot ausdrücklich gebeten, ein Ticket anzubieten, inklusive Grund. Der Grund ist verlässlich.
- **Sicherheitsnetz-Auffang** (auf der Seite als „Safety-net heuristic" bezeichnet) - die KI hat nicht direkt um eine Eskalation gebeten, aber die Formulierung ihrer Antwort wirkte wie eine Nicht-Antwort (z. B. hat sie im Text „Ich weiß es nicht" geschrieben). Der Bot fügt den Eskalationsknopf trotzdem hinzu, falls das Mitglied ihn braucht.

Ein kleiner Anteil an Sicherheitsnetz-Fängen ist normal - dafür ist das Sicherheitsnetz da. **Ein sehr hoher Anteil** (deutlich über der Hälfte) deutet darauf hin, dass die KI im Text ausweicht, statt klar zu übergeben, was eine Untersuchung wert ist. Sieh dir die Liste der letzten Eskalationen an, um zu prüfen, ob die Sicherheitsnetz-Einträge echte Fragen sind, die eine klare Antwort hätten bekommen müssen.

### Häufigste Eskalationsgründe {#top-reasons}

Eine Rangliste der häufigsten Gründe, die die KI bei einer ausdrücklichen Eskalation genannt hat. **Betrachte sie als To-do-Liste für deine FAQ.** Jeder wiederkehrende Grund ist eine Frage, auf die die KI noch keine gute Antwort hat - füge einen [FAQ-Eintrag](/de/docs/support-bot/ai-faq/faq-entries) dazu hinzu oder verbessere ihn, und der Grund sollte beim nächsten Mal von der Liste verschwinden.

Sicherheitsnetz-Eskalationen haben keine konkreten Gründe, daher werden sie hier nicht angezeigt. Wenn dein Sicherheitsnetz-Anteil hoch ist, lohnt sich ein Blick in die Liste der letzten Eskalationen.

### Letzte Eskalationen {#recent-table}

Eine Liste der letzten 20 Eskalationen mit der Frage des Mitglieds, dem Grund (falls vorhanden) und dem Zeitpunkt. Nützlich für Stichproben einzelner Fälle - besonders, wenn ein Top-Grund verdächtig aussieht oder du sehen willst, wie die KI ihre Nicht-Antworten aktuell formuliert.

## So nutzt du die Daten {#use-cases}

Drei konkrete Dinge, für die diese Seite gut ist. Du musst nicht alle drei tun - wähle das, was zu deiner Frage passt.

### FAQ-Lücken erkennen

Der nützlichste Ablauf überhaupt.

1. Stelle den Zeitraum auf **Letzte 30 Tage**.
2. Öffne **Häufigste Eskalationsgründe** und suche nach Gründen, die 3-mal oder öfter auftauchen.
3. Füge für jeden entweder einen neuen [FAQ-Eintrag](/de/docs/support-bot/ai-faq/faq-entries) zu dieser Frage hinzu oder erweitere einen bestehenden Eintrag, sodass seine Formulierung abdeckt, was Mitglieder tatsächlich schreiben.
4. Schau in zwei Wochen wieder nach - die bearbeiteten Gründe sollten seltener geworden oder verschwunden sein.

### Prüfen, ob die KI zuverlässig bleibt

Wenn du sicherstellen willst, dass die KI nicht schlechter wird oder vom Kurs abkommt:

1. Beobachte die Zahl **Heuristisch ausgelöste Eskalationen** - den Prozentsatz der Eskalationen, die das Sicherheitsnetz aufgefangen hat, statt dass die KI sie sauber angefordert hat.
2. Bleibt sie über ~50 %, nimm Stichproben aus der Tabelle **Letzte Eskalationen**. Sind die Sicherheitsnetz-Einträge Fragen, die die KI hätte beantworten können sollen? Wenn ja, müssen die passenden FAQ-Einträge wahrscheinlich umformuliert werden.
3. Wenn ein einzelnes Thema immer wieder auftaucht, sieh dir den Eintrag an, der es abdecken sollte - die Formulierung passt möglicherweise nicht zu dem, was Mitglieder tippen.

### Ticket-Abfangquote im Zeitverlauf verfolgen

Um zu sehen, ob die KI die Last deines Teams Monat für Monat verringert:

1. Öffne Insights mit dem **7-Tage-Zeitraum** und notiere die **Eskalationsrate**.
2. Wechsle zu **30 Tagen** und **90 Tagen** und notiere dieselbe Zahl.
3. Eine sinkende Rate bedeutet, dass mehr Fragen ohne menschliche Hilfe gelöst werden; eine steigende Rate bedeutet, dass die Abdeckung nicht mit den eingehenden Fragen Schritt gehalten hat.

## Empfohlener Ablauf {#workflow}

Eine lockere wöchentliche Routine, die die drei obigen Abläufe kombiniert:

1. Öffne einmal pro Woche Insights mit einem **30-Tage-Zeitraum**.
2. Überfliege die **häufigsten Eskalationsgründe** nach Gründen, die 3-mal oder öfter auftauchen.
3. Füge für jeden wiederkehrenden Grund entweder einen neuen [FAQ-Eintrag](/de/docs/support-bot/ai-faq/faq-entries) hinzu oder verbessere den bestehenden, damit die KI diese Formulierung beantworten kann.
4. Wirf einen Blick auf die Zahl der **Sicherheitsnetz-Fänge**. Steigt sie ohne erkennbaren Grund, nimm Stichproben aus den letzten Eskalationen, um zu sehen, ob die KI bei einem bestimmten Thema schlechter wird.
5. Schau in zwei Wochen wieder nach - die Gründe, die beim letzten Mal ganz oben standen, sollten kleiner geworden oder verschwunden sein.

:::tip Insights ist für FAQ-Lücken, nicht für die Leistung des Teams
Für Team-Kennzahlen, Antwortzeiten und Ticket-Trends gehe zur Seite [Support-Bot-Analysen](/de/docs/support-bot/general/analytics). Insights konzentriert sich auf die Qualität der KI-Antworten und die FAQ-Abdeckung.
:::

:::tip Enterprise
Insights reicht höchstens 90 Tage zurück. Längere Aufbewahrung, individuelle Analysen und exportierbare Berichte sind auf Enterprise-Plänen verfügbar - siehe [Enterprise & Docs Sync](/de/docs/support-bot/ai-faq/enterprise-and-docs-sync) oder [kontaktiere den Vertrieb](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::
