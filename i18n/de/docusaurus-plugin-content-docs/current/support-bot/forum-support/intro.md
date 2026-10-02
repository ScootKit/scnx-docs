---
sidebar_position: 1
title: Forum-Support
description: Verwandle einen öffentlichen Discord-Forum-Kanal in eine strukturierte Support-Warteschlange - Mitglieder eröffnen Threads, die KI kann automatisch antworten und dein Team beansprucht und löst sie mit SLAs, Transkripten und Statistiken.
---

# Forum-Support

<EarlyAccessBanner
    feature="Forum-Support"
    description="Forum-Support ist eine Early-Access-Vorschau, die schrittweise ausgerollt wird. Während der Vorschau ist die Funktion für eine begrenzte Anzahl an Servern aktiviert, damit wir Feedback sammeln können, bevor sie allgemein verfügbar wird. Dein SCNX-Plan ist davon unabhängig und bleibt unberührt." />

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: false}} additionalDetails={{
UNLIMITED: "Wird während der Early-Access-Vorschau schrittweise ausgerollt.",
PROFESSIONAL: "Wird während der Early-Access-Vorschau schrittweise ausgerollt."}} />

## Was ist Forum-Support? {#what-is-it}

Forum-Support verwandelt einen **öffentlichen Discord-Forum-Kanal** in eine strukturierte Support-Warteschlange. Statt dem Bot eine DM zu senden ([Modmail](/de/docs/support-bot/modmail/intro)) oder einen privaten Kanal zu öffnen ([Ticket-System](/de/docs/support-bot/ticket-system/intro)), erstellen Mitglieder einfach einen Beitrag (Thread) in deinem Forum-Kanal - öffentlich, sodass alle mitlesen und von der Antwort profitieren können.

Für jeden neuen Thread erstellt der Bot ein **Ticket**, begrüßt den Autor, kann zuerst eine KI häufige Fragen beantworten lassen und legt den Thread in eine **gemeinsame Team-Warteschlange**. Dein Team beansprucht Threads, antwortet öffentlich und markiert sie als gelöst. SLAs schließen inaktive Threads automatisch, Transkripte werden gespeichert und alles fließt in die [Statistiken](/de/docs/support-bot/general/analytics) ein.

Forum-Support läuft als viertes System neben [Modmail](/de/docs/support-bot/modmail/intro), dem [Ticket-System](/de/docs/support-bot/ticket-system/intro) und [Sprachsupport](/de/docs/support-bot/voice-support/intro) - aktiviere eine beliebige Kombination der vier.

:::info Bewusst öffentlich
Forum-Threads sind für deinen gesamten Server sichtbar. Forum-Support ist für **öffentlichen, selbstständigen Support** gedacht, bei dem Antworten allen helfen. Für privaten 1:1-Support nutze stattdessen [Modmail](/de/docs/support-bot/modmail/intro) oder das [Ticket-System](/de/docs/support-bot/ticket-system/intro).
:::

## Ablauf für Mitglieder {#member-flow}

1. Ein Mitglied erstellt einen Beitrag in deinem konfigurierten **Forum-Kanal**.
2. Der Bot öffnet ein **Ticket**, sendet eine angepinnte Willkommensnachricht und lässt (falls aktiviert) zuerst die KI versuchen, die Frage zu beantworten.
3. Wenn die KI antwortet, wird das Mitglied gefragt, ob das sein Problem gelöst hat. **Ja** schließt den Thread, **Nein** übergibt ihn an dein Team.
4. Der Thread landet in der **Team-Warteschlange**. Das Mitglied kann weiter antworten; der Bot merkt sich, wer auf wen wartet.
5. Ein Teammitglied beansprucht den Thread und hilft öffentlich. Sobald er gelöst ist, wird der Thread als **gelöst** markiert, getaggt und geschlossen.
6. Das Mitglied kann optional nach [Feedback](/de/docs/support-bot/forum-support/support-feedback) gefragt werden und erhält eine [Schließ-DM](/de/docs/support-bot/forum-support/configuration#close-dm) mit Link und Transkript.

Threads mit einem konfigurierten [Priority](/de/docs/support-bot/forum-support/configuration#priority)-Tag werden in der Warteschlange vorgezogen.

## Ablauf für das Team {#staff-flow}

1. Neue Threads erscheinen im **Team-Warteschlangen-Panel** (eine Live-Embed-Nachricht in einem Kanal deiner Wahl) und können optional eine [Team-Benachrichtigung](/de/docs/support-bot/forum-support/configuration#team-notification) auslösen.
2. Ein Teammitglied beansprucht einen Thread - über den **Claim**-Knopf des Panels, **Mir zuweisen** (den nächsten unbeanspruchten Thread übernehmen) oder [`/forum next`](/de/docs/support-bot/forum-support/commands).
3. Durch das Claimen wird der Thread entsperrt (falls er bis zum Claimen gesperrt war) und dem Teammitglied zugewiesen. Optional erhält es eine KI-Zusammenfassung der bisherigen Unterhaltung per DM.
4. Das Team antwortet im Thread. Wenn jemand pausieren muss, gibt **Abgeben** / [`/forum step-away`](/de/docs/support-bot/forum-support/commands) den Thread zurück in die Warteschlange, damit ihn jemand anderes übernimmt.
5. Ist der Thread gelöst, schließt das Team (oder das Mitglied über den Knopf **Als gelöst markieren**) ihn mit [`/forum close`](/de/docs/support-bot/forum-support/commands) oder dem Lösen-Knopf.

## Mögliche Status eines Threads {#states}

Der Bot weiß jederzeit, ob ein Thread auf dein Team oder auf das Mitglied wartet. Das steuert die Erinnerungen, den Auto-Close-Timer und die Sortierung in der Team-Warteschlange:

| Status                | Bedeutung                                                                       |
| --------------------- | ------------------------------------------------------------------------------- |
| **Neu**               | Gerade geöffnet - niemand hat ihn beansprucht oder beantwortet.                 |
| **Wartet auf Team**   | Das Mitglied wartet auf eine Antwort deines Teams.                              |
| **Wartet auf Nutzer** | Dein Team hat geantwortet und wartet jetzt auf das Mitglied.                    |
| **Zurückgegeben**     | Jemand hat ihn beansprucht und dann für ein anderes Teammitglied zurückgegeben. |
| **Geschlossen**       | Gelöst und geschlossen.                                                         |

## Hauptkomponenten {#components}

| Komponente                    | Zweck                                                                                                                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Forum-Kanal/-Kanäle**       | Ein oder mehrere Discord-Forum-Kanäle, die der Bot verwaltet. Jeder kann eigene Willkommens-/Schließ-Nachrichten, Gelöst-Tag, Sperren, Themen und Overrides haben.                 |
| **Team-Warteschlangen-Panel** | Eine Live-Embed-Nachricht in einem Kanal deiner Wahl, die unbeanspruchte, in Bearbeitung befindliche und zurückgegebene Threads mit **Claim**- / **Mir zuweisen**-Knöpfen anzeigt. |
| **Themen (Tags)**             | Ordne Forum-Tags Themen zu, um themenspezifische Willkommensnachrichten und Priority zu nutzen. Siehe [Themen](/de/docs/support-bot/forum-support/topics).                         |
| **KI-Autoantwort**            | Optionale KI-Erstantwort, die versucht, den Thread zu lösen, bevor ein Mensch eingreift, mit "Hat das geholfen?"-Knöpfen.                                                          |
| **Log-Kanal**                 | Optionaler Kanal, der für jeden geschlossenen Thread eine Zusammenfassung plus eine Transkript-Datei erhält. Global oder pro Forum-Kanal einstellbar.                              |

## Hauptfunktionen {#features}

- **Gemeinsame Team-Warteschlange** - beanspruche Threads, gib sie zurück oder hole dir mit einem Klick oder `/forum next` den nächsten.
- **KI-Deflection** - lass die KI zuerst häufige Fragen beantworten und eskaliere nur bei Bedarf an das Team.
- **Tag-basierte Themen** - passe Verhalten pro Forum-Tag an, mit themenspezifischen Willkommensnachrichten und Priority.
- **Priority-Warteschlange** - ziehe Threads anhand der Rollen des Fragenden, eines Forum-Tags oder eines Priority-Themas nach vorne.
- **SLA-Auto-Close & Erinnerungen** - erinnere an inaktive Threads oder schließe sie automatisch, optional nur während der [Öffnungszeiten](/de/docs/support-bot/general/opening-hours).
- **Volumenabhängige Wartezeit** - zeige eine adaptive geschätzte Wartezeit basierend auf den letzten Lösungszeiten an.
- **Schreib-Einschränkung** - beschränke Threads optional auf den ursprünglichen Autor und das Team und lösche Nachrichten anderer Mitglieder (mit optionaler Erklärungs-DM).
- **Hinweis außerhalb der Öffnungszeiten** - informiere Mitglieder automatisch, wenn sie außerhalb deiner [Öffnungszeiten](/de/docs/support-bot/general/opening-hours) posten.
- **Limit für offene Beiträge** - begrenze, wie viele Beiträge ein Mitglied gleichzeitig offen haben darf, mit ausgenommenen Rollen und Override pro Forum.
- **Transkripte** - speichere ein vollständiges Transkript jedes Threads auf [modmail.net](https://modmail.net).
- **Log-Kanal & Schließ-DM** - sende eine Zusammenfassung + Transkript in einen Team-Kanal und schreibe dem Mitglied per DM, wenn sein Thread geschlossen wird (beides anpassbar und pro Forum-Kanal einstellbar).
- **Team-Benachrichtigungen** - erwähne deine Team-Rollen in einem Kanal, sobald ein neuer Thread eröffnet wird.
- **Feedback** - bitte Mitglieder nach dem Schließen eines Threads, ihre Erfahrung zu bewerten.
- **Statistiken** - Thread-Aufkommen, Antwort- und Lösungszeiten, KI-Deflection-Rate, Bewertungen und Statistiken pro Teammitglied, einsehbar in den [Statistiken](/de/docs/support-bot/general/analytics) und im Dashboard.

## Erste Schritte {#getting-started}

1. Öffne **Forum-Support** in deinem [Support-Bot-Dashboard](https://scnx.app/glink?page=support-system/manage).
2. Erstelle (oder wähle) einen **öffentlichen Forum-Kanal** in Discord für deinen Support.
3. Füge ihn auf der Seite [Forum-Kanäle](https://scnx.app/glink?page=support-system/forum-support/channels) hinzu und folge der [Konfigurationsanleitung](/de/docs/support-bot/forum-support/configuration) - lege einen Kanal für das Team-Warteschlangen-Panel und mindestens eine Team-Rolle fest.
4. Aktiviere den Schalter **Forum-Support aktivieren**.
5. Nutze die [`/forum`-Befehle](/de/docs/support-bot/forum-support/commands) und die Panel-Knöpfe, um die Warteschlange abzuarbeiten.
