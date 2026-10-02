---
sidebar_position: 2
title: Konfiguration
description: Richte Forum-Support Schritt für Schritt ein - Forum-Kanäle, Team-Warteschlange, KI-Autoantworten, SLAs und Erinnerungen, Wartezeit-Schätzungen, Nachrichten, Themen, Feedback sowie Log-Kanal und Schließ-DM.
---

# Forum-Support Konfiguration

Diese Seite führt dich in einfacher Sprache durch jede Forum-Support-Einstellung. Du findest sie alle unter **Forum-Support** in deinem [Support-Bot-Dashboard](https://scnx.app/glink?page=support-system/manage). Du musst nicht alles auf einmal einrichten - zum Start brauchst du lediglich einen [Forum-Kanal](#forum-channels) und mindestens eine [Team-Rolle](#main).

:::tip Kein Code nötig
Alles hier wird mit Schaltern und Dropdown-Menüs im Dashboard konfiguriert. Du musst nie Dateien bearbeiten oder Code schreiben.
:::

## Bevor du beginnst {#before-you-start}

Du benötigst:

- Einen **öffentlichen Forum-Kanal** auf deinem Discord-Server (Discords Kanaltyp "Forum"). Hier werden Mitglieder ihre Beiträge posten.
- Einen **Textkanal** für das Team-Warteschlangen-Panel (in dem dein Team Threads beansprucht).
- Mindestens eine **Rolle**, die dein Support-Team kennzeichnet.

Falls du noch keinen Forum-Kanal hast, erstelle zuerst einen in Discord (**Kanal erstellen → Forum**) und komm dann zurück ins Dashboard.

## Konfigurationsseite {#main}

Die Hauptseite **Konfiguration** enthält deine allgemeinen Einstellungen. Die wichtigsten:

| Einstellung                                         | Beschreibung                                                                                                                                                                                                         |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Forum-Support aktivieren**                        | Schaltet das gesamte System ein oder aus. Solange es aus ist, ignoriert der Bot deine Forum-Kanäle und die `/forum`-Befehle sind ausgeblendet.                                                                       |
| **Wartungsmodus**                                   | Pausiert vorübergehend die Verarbeitung neuer Threads, ohne das System komplett zu deaktivieren.                                                                                                                     |
| **Team-Panel-Kanal**                                | Der Textkanal, in dem das Live-Warteschlangen-Panel gepostet wird. Hier beansprucht und übernimmt dein Team Threads.                                                                                                 |
| **Team-Rollen**                                     | Jeder mit einer dieser Rollen gilt als Support-Team - er kann Threads beanspruchen, die Knöpfe nutzen und die `/forum`-Befehle ausführen.                                                                            |
| **Keine Erinnerungen außerhalb der Öffnungszeiten** | Wenn aktiviert, werden Team-/Inaktivitäts-Erinnerungen nur während deiner [Öffnungszeiten](/de/docs/support-bot/general/opening-hours) gesendet, damit dein Team nachts nicht gepingt wird.                          |
| **Transkripte aktivieren**                          | Wenn aktiviert, wird ein vollständiges Transkript jedes geschlossenen Threads auf [modmail.net](/de/docs/support-bot/general/modmail-net) gespeichert und kann an den Log-Kanal und die Schließ-DM angehängt werden. |

### KI-Autoantworten {#ai}

Wenn KI für deinen Server verfügbar ist, kannst du den Bot versuchen lassen, einen neuen Thread zu beantworten, bevor ein Mensch eingreift. Das Mitglied wird dann gefragt, ob die Antwort geholfen hat - "Ja" schließt den Thread, "Nein" übergibt ihn an dein Team. So lassen sich häufige, wiederkehrende Fragen hervorragend abfangen.

| Einstellung                         | Beschreibung                                                                                                                                                                |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **KI-Auto-Antworten aktivieren**    | Lässt den Bot in neuen Threads eine KI-Erstantwort posten.                                                                                                                  |
| **KI-Zusammenfassung beim Claimen** | Wenn ein Teammitglied einen Thread beansprucht, sendet der Bot ihm per DM eine kurze KI-Zusammenfassung der bisherigen Unterhaltung, damit es sofort auf dem Laufenden ist. |

:::info KI-Nutzung
KI-Antworten und -Zusammenfassungen nutzen das [KI-Guthaben](https://faq.scnx.app/ki-auf-scnx/) deines Servers. Der KI-Bereich erscheint nur, wenn KI für deinen Server verfügbar ist.
:::

### Warteschlange & SLA {#queue}

Halte Threads in Bewegung und schließe diejenigen, die still geworden sind.

| Einstellung                                         | Beschreibung                                                                                                                                 |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Erinnerung für unbeantwortete geclaimte Threads** | Wenn ein Teammitglied einen Thread beansprucht, aber innerhalb dieser Zeit nicht antwortet, erhält es eine Erinnerung. Beispiel: `24h`.      |
| **Erinnerung für ungeclaimte Threads**              | Wenn ein neuer Thread so lange unbeansprucht in der Warteschlange liegt, wird dein Team erinnert. Beispiel: `6h`.                            |
| **Auto-Schließen**                                  | Wenn aktiviert, werden Threads ohne Aktivität automatisch geschlossen.                                                                       |
| **Benachrichtigung vor dem Schließen**              | Nach wie viel Stille das Mitglied eine Warnung "Dieser Thread wird bald geschlossen" erhält. Beispiel: `24h`.                                |
| **Zeitraum bis zum Auto-Schließen**                 | Nach wie viel Stille der Thread tatsächlich geschlossen wird. Beispiel: `48h`.                                                               |
| **Team über neue Threads benachrichtigen**          | Erwähne optional deine Team-Rollen in einem Kanal, sobald ein neuer Thread eröffnet wird. Siehe [Team-Benachrichtigung](#team-notification). |

:::tip Zeitangaben
Zeitfelder akzeptieren einfache Werte wie `30m`, `6h` oder `48h` (Minuten, Stunden, Tage).
:::

### Wartezeit (ETA) {#wait-time}

Zeige Mitgliedern in ihrem Thread eine geschätzte Wartezeit an, damit sie wissen, was sie erwartet. Die Schätzung passt sich automatisch daran an, wie schnell dein Team zuletzt Threads gelöst hat. Mehr dazu unter [Geschätzte Wartezeit](/de/docs/support-bot/general/estimated-wait-time).

| Einstellung                            | Beschreibung                                                                                                   |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **ETA-Nachrichten aktivieren**         | Postet in neuen Threads eine geschätzte Wartezeit.                                                             |
| **Aktualisierungsintervall (Minuten)** | Wie oft (in Minuten) die Wartezeit-Nachricht nach dem ersten Posten aktualisiert wird.                         |
| **Puffer-Minuten**                     | Zusätzliche Minuten, die zur Schätzung addiert werden, damit du lieber zu wenig versprichst und mehr lieferst. |
| **Maximale ETA (Stunden)**             | Eine Obergrenze, damit die Schätzung nie eine unbrauchbar große Zahl anzeigt.                                  |

### Nachrichten {#messages}

Jede Nachricht, die der Bot postet, ist mit unserem Nachrichten-Editor vollständig anpassbar - Text, Embeds, Farben und [Platzhalter](/de/docs/support-bot/general/global-placeholders) wie der Name des Mitglieds. Zu den bearbeitbaren Forum-Nachrichten gehören:

- **Standard-Willkommensnachricht** - wird beim Eröffnen eines Threads gepostet und angepinnt.
- **Claim-Nachricht** - wird gepostet, wenn ein Teammitglied den Thread beansprucht.
- **Rückzugs-Nachricht** - wird gepostet, wenn ein Teammitglied einen Thread zurück in die Warteschlange gibt.
- **ETA-Nachricht** - die dem Mitglied angezeigte geschätzte Wartezeit.
- **KI-Antwort - akzeptiert** und **KI-Antwort - brauche weiterhin Hilfe** - die Bestätigungen für die Ja/Nein-Knöpfe.
- **Inaktivitätswarnung** - die Warnung, die vor dem automatischen Schließen eines inaktiven Threads gesendet wird.
- **Hinweis außerhalb der Öffnungszeiten** - wird angezeigt, wenn ein Mitglied außerhalb deiner Öffnungszeiten postet (siehe unten).
- **Feedback-Anfrage** - die Nachricht, die das Mitglied bittet, seine Erfahrung zu bewerten.

### Hinweis außerhalb der Öffnungszeiten {#closed-notice}

Aktiviere **Hinweis außerhalb der Öffnungszeiten senden**, um Mitglieder automatisch zu informieren, wenn sie außerhalb deiner [Öffnungszeiten](/de/docs/support-bot/general/opening-hours) posten. Die Nachricht kann deine Öffnungszeiten enthalten, damit Leute wissen, wann sie mit einer Antwort rechnen können. Dein Team sieht den Thread trotzdem - das setzt nur die richtigen Erwartungen.

### Beitragslimit {#open-thread-limit}

Verhindere, dass ein einzelnes Mitglied dein Forum mit Beiträgen füllt. Ist das Limit aktiv, zählt der Bot, wie viele Beiträge dieses Mitglied bereits im selben Forum-Kanal offen hat, und weist alles über deinem Maximum ab.

Discord bietet Bots keine Möglichkeit, das Erstellen eines Beitrags zu verhindern, daher reagiert der Bot direkt nachdem der Beitrag erscheint. Die Zählung ist live - sobald einer der Beiträge des Mitglieds geschlossen wird, egal ob das Mitglied auf **Als gelöst markieren** drückt, dein Team ihn schließt oder er automatisch geschlossen wird, wird wieder ein Platz frei. Es gibt keinen Reset-Zeitplan und keinen Zähler, der zurückgesetzt werden müsste.

| Einstellung                                | Beschreibung                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Offene Beiträge pro Mitglied begrenzen** | Aktiviert das Limit. Standardmäßig deaktiviert.                                                                                                                                                                                                                                                                                                                                           |
| **Maximale offene Beiträge**               | Wie viele Beiträge ein Mitglied gleichzeitig im selben Forum-Kanal offen haben darf. `1` oder höher, standardmäßig `3`.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn "Offene Beiträge pro Mitglied begrenzen" aktiviert ist._</blockquote></details></small>                                                                                      |
| **Pausierte Beiträge mitzählen**           | Wenn aktiviert, zählen Beiträge, die dein Team pausiert hat, weiterhin für das Mitglied. Standardmäßig deaktiviert, sodass ein pausierter Beitrag das Mitglied nicht daran hindert, etwas anderes zu fragen.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn "Offene Beiträge pro Mitglied begrenzen" aktiviert ist._</blockquote></details></small> |
| **Ausgenommene Rollen**                    | Mitglieder mit einer dieser Rollen werden nie begrenzt.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn "Offene Beiträge pro Mitglied begrenzen" aktiviert ist._</blockquote></details></small>                                                                                                                                                      |
| **Wenn das Limit erreicht ist**            | Ob der Beitrag, der das Limit überschritten hat, archiviert oder gelöscht wird - siehe unten.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn "Offene Beiträge pro Mitglied begrenzen" aktiviert ist._</blockquote></details></small>                                                                                                                |
| **Nachricht bei erreichtem Limit**         | Der Hinweis, den das Mitglied erhält, wenn es das Limit erreicht. Vollständig mit dem Nachrichten-Editor anpassbar - Text, Embeds, Farben und Bilder.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn "Offene Beiträge pro Mitglied begrenzen" aktiviert ist._</blockquote></details></small>                                                        |

**Wenn das Limit erreicht ist** legt fest, was mit dem Beitrag passiert:

- **Beitrag archivieren** (Standard) - der Bot postet deinen Hinweis im neuen Beitrag und sperrt und archiviert ihn anschließend. Das Mitglied behält alles, was es geschrieben hat, und kann nachlesen, warum sein Beitrag abgewiesen wurde.
- **Beitrag löschen** - der Bot sendet dem Mitglied deinen Hinweis zusammen mit einer Kopie seines Textes per DM und löscht dann den Beitrag. Kann die DM nicht zugestellt werden, weil das Mitglied DMs deaktiviert hat, archiviert der Bot den Beitrag stattdessen, damit niemand seinen Text verliert.

:::tip Unterschiedliche Limits pro Forum
Jeder Forum-Kanal kann auf der Seite [Forum-Kanäle](#forum-channels) eigene **Maximale offene Beiträge (Überschreibung)** festlegen - lasse das Feld leer, um die globale Zahl zu verwenden, oder setze `0`, um das Limit für diesen Kanal auszuschalten.
:::

#### Platzhalter {#thread-limit-placeholders}

Diese drei Platzhalter funktionieren nur in der **Nachricht bei erreichtem Limit**:

| Platzhalter        | Wird zu                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| `%openThreads%`    | Wie viele Beiträge das Mitglied aktuell offen hat.                                                   |
| `%threadLimit%`    | Das von dir konfigurierte Maximum.                                                                   |
| `%openThreadList%` | Eine anklickbare Liste der offenen Beiträge des Mitglieds, jeweils mit der Zeit seit der Erstellung. |

Alle standardmäßigen [globalen Platzhalter](/de/docs/support-bot/general/global-placeholders) (Bot-Identität, Zeitstempel, Öffnungszeiten usw.) funktionieren hier ebenfalls.

### Blocklist {#blocklist}

Mitglieder auf der Blockierungsliste deines Bots können an der Nutzung von Forum-Support gehindert werden.

| Einstellung                                         | Beschreibung                                                                                      |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Threads von Nutzern auf der Blocklist schließen** | Wenn ein blockiertes Mitglied einen Thread eröffnet, wird er automatisch geschlossen.             |
| **Blocklist-Hinweis**                               | Die Nachricht, die einem blockierten Mitglied angezeigt wird, bevor sein Thread geschlossen wird. |

### Threads auf Autor & Team beschränken {#thread-writing}

Standardmäßig kann jeder in einem öffentlichen Thread kommentieren. Wenn du jeden Thread lieber auf die Person beschränken möchtest, die ihn eröffnet hat, aktiviere **Schreiben auf Ersteller und Team beschränken**. Nachrichten anderer Mitglieder werden dann automatisch entfernt.

| Einstellung                                                    | Beschreibung                                                                                                                                       |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Schreiben auf Ersteller und Team beschränken**               | Entfernt Nachrichten von allen, die weder der ursprüngliche Autor noch Teammitglieder sind, und hält den Thread sauber und beim Thema.             |
| **Nutzer benachrichtigen, wenn seine Nachricht gelöscht wird** | Wenn aktiviert, sendet der Bot dem Mitglied, dessen Nachricht entfernt wurde, eine DM mit dem Hinweis, einen eigenen Thread für Hilfe zu eröffnen. |
| **Hinweis zur gelöschten Nachricht**                           | Der DM-Text, der an dieses Mitglied gesendet wird.                                                                                                 |

## Seite Forum-Kanäle {#forum-channels}

Auf der Seite [Forum-Kanäle](https://scnx.app/glink?page=support-system/forum-support/channels) fügst du die Forum-Kanäle hinzu, die der Bot verwalten soll. Jeder Forum-Kanal kann einzeln angepasst werden, sodass du mehrere Support-Foren mit unterschiedlichen Regeln betreiben kannst.

Für **jeden** Forum-Kanal kannst du Folgendes festlegen:

| Einstellung                                     | Beschreibung                                                                                                                                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Forum-Kanal**                                 | Der zu verwaltende Discord-Forum-Kanal.                                                                                                                                        |
| **Willkommensnachricht (Überschreibung)**       | Eine Willkommensnachricht nur für diesen Kanal (andernfalls wird die globale verwendet).                                                                                       |
| **Schließnachricht (Überschreibung)**           | Eine Nachricht, die im Thread gepostet wird, wenn er geschlossen wird.                                                                                                         |
| **Log-Kanal (Überschreibung)**                  | Sende die Schließ-Zusammenfassungen dieses Kanals in einen bestimmten Log-Kanal statt in den [Standard](#log-channel).                                                         |
| **Schließ-DM-Nachricht (Überschreibung)**       | Eine eigene [Schließ-DM](#close-dm)-Nachricht für diesen Kanal.                                                                                                                |
| **Gelöst-Tag**                                  | Ein Forum-Tag, der automatisch auf Threads angewendet wird, wenn sie als gelöst markiert werden.                                                                               |
| **Sperren bis geclaimt**                        | Sperrt einen neuen Thread, sodass das Mitglied keine weiteren Nachrichten hinzufügen kann, bis ein Teammitglied ihn beansprucht. Beim Claimen wird er automatisch entsperrt.   |
| **Beim Schließen sperren**                      | Sperrt den Thread, wenn er geschlossen wird.                                                                                                                                   |
| **Schreiben beschränken (Überschreibung)**      | Wie die globale Option, aber nur für diesen Kanal.                                                                                                                             |
| **Maximale offene Beiträge (Überschreibung)**   | Ein anderes [Limit für offene Beiträge](#open-thread-limit) für diesen Kanal. Leer lassen, um die globale Zahl zu verwenden, oder `0` setzen, um das Limit hier auszuschalten. |
| **Team-Rollen (Überschreibung)**                | Nutze andere Team-Rollen für diesen Kanal.                                                                                                                                     |
| **Priorität aktivieren** ([Details](#priority)) | Behandle Threads anhand der Rollen des Fragenden oder eines gewählten Forum-Tags als hochpriorisiert, mit optionaler Priority-Willkommensnachricht.                            |

### Standard-Log-Kanal {#log-channel}

Oben auf der Seite Forum-Kanäle kannst du einen **Standard-Log-Kanal** festlegen. Wenn ein Thread geschlossen wird, postet der Bot dort eine übersichtliche Zusammenfassung - wer gefragt hat, wer ihn bearbeitet hat, wie lange es gedauert hat, den Schließgrund, die Nachrichtenanzahl und mehr - plus das vollständige Transkript als Datei (wenn [Transkripte](#main) aktiviert sind). Jeder Forum-Kanal kann dies mit einem eigenen Log-Kanal überschreiben.

### Priority-Threads {#priority}

Gib bestimmten Threads eine VIP-Behandlung - Priority-Threads werden in der Team-Warteschlange vor allen anderen einsortiert. Es gibt zwei Wege, einen Thread zum Priority-Thread zu machen:

- **Per Thema** - markiere ein [Thema](/de/docs/support-bot/forum-support/topics) als Priority, und jeder Thread mit dem Forum-Tag dieses Themas wird vorgezogen.
- **Pro Forum-Kanal** - behandle im Bereich **Priority** eines Forum-Kanals einen Thread als Priority, wenn die Person, die ihn eröffnet hat, eine deiner gewählten **Prioritätsrollen** besitzt oder der Thread einen gewählten **Prioritäts-Tag** trägt. Du kannst für diese Threads eine eigene **Prioritäts-Willkommensnachricht** festlegen, und der Priority-Tag wird automatisch angewendet, damit sie leicht zu filtern sind.

Ideal für zahlende Kunden, Partner oder dringende Kategorien.

## Themen & Feedback {#topics-and-feedback}

Zwei Bereiche haben eigene Seiten:

- **[Themen](/de/docs/support-bot/forum-support/topics)** - ordne deine Forum-Tags themenspezifischen Willkommensnachrichten und Priority zu.
- **[Support-Bewertungen](/de/docs/support-bot/forum-support/support-feedback)** - bitte Mitglieder, ihre Erfahrung nach dem Schließen eines Threads zu bewerten, und sieh dir die Bewertungen in deinem Dashboard an.

## Team-Benachrichtigung {#team-notification}

Du möchtest, dass dein Team im Moment der Thread-Eröffnung gepingt wird? Aktiviere **Team über neue Threads benachrichtigen** (unter [Warteschlange & SLA](#queue)), wähle einen Kanal, und der Bot postet dort - mit Erwähnung deiner Team-Rollen - bei jedem neuen Thread einen Link dazu. Die Nachricht ist vollständig anpassbar.

## Schließ-DM {#close-dm}

Aktiviere **Den Fragesteller benachrichtigen, wenn sein Thread geschlossen wird** (unter [Nachrichten](#messages)), und der Bot sendet dem Mitglied eine DM, sobald sein Thread gelöst ist, mit einem Link zurück zum Thread und - wenn [Transkripte](#main) aktiviert sind - dem angehängten Gesprächsverlauf. Die Nachricht ist anpassbar, und jeder Forum-Kanal kann seine eigene Version nutzen.

:::caution Schließgrund in DMs
Wenn deine Schließ-DM den Platzhalter für den Schließgrund verwendet, beachte, dass der Schließgrund die interne Notiz deines Teams ist - nimm ihn nur auf, wenn deine Schließgründe für Mitglieder unbedenklich lesbar sind.
:::
