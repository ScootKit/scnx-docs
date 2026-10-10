---
sidebar_position: 4
title: Formulare
description: Baue Formulare auf deiner SCNX-Website - Fragetypen, Bot-Schutz, Einwilligung, Öffnen und Schließen, der Antworten-Eingang, Aufbewahrung, CSV-Export, Discord-Benachrichtigungen und Privatsphäre der Besucher.
---

# Formulare

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Formulare lassen Besucher dir strukturierte Informationen senden: Team-Bewerbungen, Event-Anmeldungen, Kontaktanfragen, Feedback und mehr. Die Antworten werden privat in deinem Dashboard gesammelt, nicht öffentlich auf deiner Website gezeigt.

Ein Formular hat zwei Teile: das Formular selbst (seine Fragen und Einstellungen), das du auf der Seite **Formulare** im Dashboard deiner Website baust, und einen **Formular**-Block, den du auf eine Seite setzt, damit man es tatsächlich ausfüllen kann.

:::note Wer Formulare nutzen kann
Die Seite **Formulare** braucht Bearbeitungszugriff auf die Website, auch nur zum Ansehen, weil die Antworten personenbezogene Daten deiner Besucher enthalten. Wer nur Ansichtszugriff hat, sieht sie nicht. Antworten oder ein ganzes Formular zu löschen braucht zusätzlich Admin-Zugriff. Siehe [wer eine Website bearbeiten kann](/docs/sites/intro#permissions).
:::

## Ein Formular bauen {#build}

![Der Tab Fragen eines Formulars mit einer kurzen Antwort und einer Auswahlfrage](@site/docs/assets/sites/de/forms-builder.png)

1. Öffne deine Website im Dashboard und geh zu **Formulare**.
2. Klick auf **Neues Formular**, gib ihm einen Namen (zum Beispiel "Bewerbungsformular") und klick auf **Formular erstellen**. Dein neues Formular öffnet sich sofort, mit einer ersten Frage zum Start.
3. Klick im Tab **Fragen** für jede Sache, die du fragen willst, auf **Frage hinzufügen** und dann auf **Fragen speichern**.
4. Setze das Formular auf eine Seite: öffne die Seite im **Editor**, füge einen **Formular**-Block hinzu und wähle dein Formular in der Option **Formular** des Blocks aus. Veröffentliche danach deine Website.

Ein Formular erscheint erst auf deiner Website, wenn du einen Formular-Block auf eine Seite setzt und es dort auswählst. Hast du noch kein Formular gebaut, führt dich die Auswahl im Block mit **Leg eins unter Formulare an** zu **Formulare**.

Die Auswahl **Formular** im Block zeigt dir auch, wenn mit dem gewählten Formular etwas nicht stimmt:

- Ein Formular, das du geschlossen hast, zeigt "(geschlossen)" hinter seinem Namen, zum Beispiel "Bewerbung (geschlossen)". Der Block bleibt auf deiner Seite, und Besucher sehen, dass das Formular geschlossen ist. Siehe [Ein Formular öffnen und schließen](#open-close).
- Ein Formular, das du gelöscht hast, erscheint als "Gelöschtes Formular" mit einem Code dahinter. Besucher sehen "Dieses Formular ist gerade nicht verfügbar." Wähle ein anderes Formular oder entferne den Block und veröffentliche danach.

Der Formular-Block hat außerdem zwei eigene, optionale Texte: **Absenden-Button** (die Beschriftung des Buttons) und **Danke-Nachricht** (was Besucher nach dem Absenden sehen). Hat der Footer deiner Website einen Discord-Link, erscheint unter der Danke-Nachricht auch ein Link **Tritt unserem Discord-Server bei**.

Jedes Formular hat drei Tabs: **Fragen**, **Einstellungen** und **Antworten**. Mit **Alle Formulare** kommst du zurück zur Liste.

### Fragetypen {#field-types}

Jede Frage hat eine **Art**:

| Art                 | Was die Besucherin sieht                                                |
| ------------------- | ----------------------------------------------------------------------- |
| **Kurze Antwort**   | Ein einzeiliges Textfeld.                                               |
| **Lange Antwort**   | Ein mehrzeiliges Textfeld für längere Antworten.                        |
| **Eine Auswahl**    | Eine einzelne Option aus einer von dir festgelegten Liste wählen.       |
| **Mehrfachauswahl** | Beliebig viele Optionen aus einer von dir festgelegten Liste ankreuzen. |
| **Ja / Nein**       | Eine einfache Ja-oder-Nein-Wahl.                                        |

Für jede Frage kannst du festlegen, ob sie **Muss ausgefüllt werden**, und für Textantworten eine Grenze bei **Max. Zeichen** setzen. Fragen mit **Eine Auswahl** und **Mehrfachauswahl** brauchen mindestens eine Auswahlmöglichkeit, und jede muss sich von den anderen unterscheiden. Mit den Pfeilen schiebst du eine Frage nach oben oder unten.

Wenn du die Fragen änderst, ändert das nichts an Antworten, die du schon hast. Jede Antwort behält den Fragetext, unter dem sie abgegeben wurde.

:::note Ein Budget für den Antwortplatz
Der Builder zeigt, wie viel Antwortplatz deine Fragen belegen. Wird die Summe zu hoch, kürze das Limit einer Frage oder nimm eine heraus. Die Zahl zählt Zeichen, das Limit beim tatsächlichen Absenden zählt aber Bytes. Kyrillische oder japanische Zeichen und Emojis brauchen 2 bis 4 Bytes pro Stück, lass also etwas Luft, falls dein Publikum darin schreibt.
:::

Der Formularname, deine Fragen, die Auswahlmöglichkeiten und der Einwilligungstext werden beim Speichern von unserer automatischen Inhaltsmoderation geprüft. Wird etwas abgelehnt, siehst du den Grund, und es wird nichts gespeichert. Die Antworten, die Besucher schicken, moderieren wir nie.

## Bot-Schutz {#captcha}

Jedes Formular auf deiner Website hat eine eingebaute Spamschutz-Prüfung. Ausschalten kannst du sie nicht, aber du kannst wählen, wie sie für deine Besucher aussieht. Geh zu **Einstellungen** und such die Karte **Bot-Schutz**:

- **Unsichtbare Prüfung (empfohlen)** - die meisten Besucher sehen gar nichts. Nur wer wie ein Bot wirkt, muss eventuell beweisen, dass er keiner ist.
- **Sichtbares Rätsel** - Besucher müssen meist ein kurzes Rätsel lösen, bevor sie ein Formular abschicken können.

Die Wahl gilt für alle Formulare auf deiner Website und wirkt sofort. Du musst dafür kein Konto anlegen und keine Schlüssel eintragen, das übernehmen wir.

Die Prüfung arbeitet zusammen mit ein paar weiteren Schutzmaßnahmen, die immer aktiv sind: ein verstecktes Fallen-Feld, das Bots ausfüllen und Menschen nicht, eine kurze Mindestzeit, bevor ein Formular abgeschickt werden kann, und eine Grenze dafür, wie viele Antworten ein Besucher in kurzer Zeit an dasselbe Formular schicken kann. Ist der Prüfdienst selbst gestört, funktionieren deine Formulare mit diesen anderen Schutzmaßnahmen weiter, sie gehen also nie deswegen kaputt.

Verhindert ein Werbe- oder Skriptblocker beim Besucher, dass die Prüfung lädt, bekommt er eine Meldung, dass er es noch einmal versuchen oder deine Website in seinem Blocker erlauben soll.

## Einwilligungs-Checkbox {#consent}

Im Tab **Einstellungen** eines Formulars kannst du einen **Text der Einwilligungs-Checkbox (optional)** hinzufügen. Füllst du ihn aus, sehen Besucher eine Checkbox mit genau diesem Text und müssen sie ankreuzen, bevor sie das Formular abschicken können.

Lass das Feld bei den meisten Formularen leer. Ein Kontaktformular oder eine Bewerbung braucht kein allgemeines "Ich stimme zu". Nutze es nur, wenn du eine gesonderte Erlaubnis für etwas Zusätzliches brauchst, zum Beispiel einen Newsletter oder das Teilen der Antworten mit jemand anderem.

Kreuzt jemand die Checkbox an, speichern wir den genauen Text, dem die Person zugestimmt hat, mit ihrer Antwort. Änderst du den Text später, zeigen ältere Antworten weiterhin den Wortlaut, den diese Person tatsächlich gesehen hat. Du findest ihn in der Spalte **Consent** des [CSV-Exports](#csv).

## Ein Formular öffnen und schließen {#open-close}

Jedes Formular hat im Tab **Einstellungen** eine Checkbox **Antworten annehmen**:

- **An** - das Formular nimmt Antworten an ("Offen").
- **Aus** - das Formular ist geschlossen ("Geschlossen"). Statt der Fragen sehen Besucher den Namen des Formulars und "Dieses Formular ist gerade geschlossen."

Du kannst außerdem ein **Antwort-Limit** setzen. Hat das Formular so viele Antworten gesammelt, nimmt es von selbst keine neuen mehr an. Besucher sehen dann "Dieses Formular nimmt keine Antworten mehr an." Lass das Feld leer für kein Limit.

Klick auf **Einstellungen speichern**, nachdem du in diesem Tab etwas geändert hast.

Formulare nehmen nur Antworten an, solange deine Website veröffentlicht ist und nicht im Wartungsmodus läuft. In der Vorschau des Editors siehst du ein Formular, kannst es aber nicht abschicken.

## Der Antworten-Eingang {#inbox}

Jede Antwort landet im Tab **Antworten** des Formulars, die neueste zuerst. In der Formularliste zeigt ein Badge **Neu**, welche Formulare Antworten bekommen haben, seit du ihren Eingang zuletzt geöffnet hast, und jedes Formular zeigt, wie viele Antworten es hat.

![Eine geöffnete Antwort im Tab Antworten eines Formulars](@site/docs/assets/sites/de/forms-inbox.png)

- Klick auf eine Antwort, um sie ganz zu lesen, und auf **Alle Antworten**, um zurückzugehen.
- Wechsle mit **Neuere** und **Ältere** zwischen den Antwortseiten.
- Lösche eine einzelne Antwort mit **Antwort löschen** oder alle Antworten eines Formulars mit **Alle Antworten löschen**.

Das Badge **Neu** merkt sich dein Browser, nicht dein Konto. Jemand aus deinem Team, oder du auf einem anderen Gerät, sieht es eventuell noch für Antworten, die du schon gelesen hast.

:::note Löschen braucht Admin-Zugriff
Antworten zu löschen und ein ganzes Formular zu löschen braucht Admin-Zugriff auf die Website. Hast du ihn nicht, erscheinen die Löschen-Buttons nicht, und du siehst stattdessen einen Hinweis. Frag jemanden in deinem Team, der ihn hat.
:::

## Wie lange Antworten aufbewahrt werden {#retention}

Antworten werden nicht ewig aufbewahrt. Jedes Formular hat eine Einstellung **Antworten aufbewahren (Tage)**, die standardmäßig auf **90 Tage** steht. Einmal am Tag löschen wir automatisch jede Antwort, die älter ist. Du kannst den Wert in dem Bereich, der neben dem Feld steht, hoch- oder heruntersetzen.

Die Einstellung gilt auch für Antworten, die du schon hast. Setzt du sie herunter, werden ältere Antworten bei der nächsten täglichen Bereinigung gelöscht.

Löschst du das ganze Formular mit **Formular löschen**, wird jede Antwort mitgelöscht, die es gesammelt hat. Nichts davon lässt sich rückgängig machen.

## Als CSV exportieren {#csv}

Klick im Tab **Antworten** eines Formulars auf **Als CSV herunterladen**, um die Antworten als Tabellendatei zu bekommen. Das ist praktisch, um Bewerbungen zu sortieren oder sie außerhalb von SCNX mit deinem Team zu teilen.

Die Datei hat eine Spalte **Submitted at**, eine Spalte **Consent** (der Text, dem der Besucher zugestimmt hat, oder "(no consent requested)") und eine Spalte pro aktueller Frage. Antworten auf Fragen, die du inzwischen entfernt hast, erscheinen nicht in der Datei.

Sobald du die Datei heruntergeladen hast, musst du selbst auf sie achten. Unsere automatische Löschung erreicht keine Kopien außerhalb von SCNX.

## Discord-Benachrichtigungen {#webhook}

Du kannst jedes Mal eine Nachricht in Discord bekommen, wenn jemand ein Formular absendet. Füge im Tab **Einstellungen** des Formulars einen Webhook-Link in das Feld **Discord-Benachrichtigung** ein. Er sieht aus wie `https://discord.com/api/webhooks/123.../abc...`, und wir posten jede neue Antwort in diesen Kanal.

So bekommst du einen Webhook-Link: öffne in Discord die Einstellungen deines Kanals, geh zu **Integrationen → Webhooks**, erstelle einen Webhook und kopiere seine URL. Es werden nur echte Discord-Webhook-Links akzeptiert. Lass das Feld leer für keine Benachrichtigung.

Ein paar Dinge, die du wissen solltest:

- Sehr lange Antworten werden in der Discord-Nachricht gekürzt. Die vollständige Antwort steht immer in deinem Tab **Antworten**.
- Erwähnungen in Antworten, etwa `@everyone`, pingen nie jemanden an.
- Jede Nachricht endet mit einem Hinweis, dass der Inhalt von einem Besucher stammt und nicht von SCNX moderiert wurde.
- Ist Discord nicht erreichbar, fällt diese eine Benachrichtigung aus. Die Antwort ist trotzdem gespeichert.
- Nachrichten in Discord fallen nicht unter die Aufbewahrungseinstellung. Sollen Antworten nach einer Weile weg sein, lösch sie auch in Discord, oder lass sie in einen Kanal posten, den nur wenige Leute sehen.

## Privatsphäre und deine Verantwortung {#privacy}

Sammelst du Antworten über ein Formular, entscheidest du, was du fragst und was mit den Antworten passiert. Damit bist in der Regel du nach dem Datenschutzrecht für sie verantwortlich, nicht SCNX. Hier steht, was wir tun und was bei dir liegt.

### Was wir speichern {#what-we-store}

Zu jeder Antwort speichern wir nur:

- die Antworten, die der Besucher eingegeben hat, verschlüsselt,
- den Einwilligungstext, dem er zugestimmt hat, falls dein Formular eine [Einwilligungs-Checkbox](#consent) hat,
- den Zeitpunkt des Absendens.

Wir speichern zu einer Antwort keine IP-Adresse, keine Geräteinformationen und keine Besucher-Kennung.

Zwei Dinge nutzen die Verbindung des Besuchers, ohne dass etwas davon mit der Antwort gespeichert wird:

- **Die Spamschutz-Prüfung.** Der Browser des Besuchers lädt die Prüfung direkt vom Anbieter: Cloudflare Turnstile bei **Unsichtbare Prüfung**, hCaptcha bei **Sichtbares Rätsel**. Beim Absenden geben wir die IP-Adresse des Besuchers an diesen Anbieter weiter, damit er die Prüfung bestätigen kann. Der Anbieter verarbeitet diese Daten nach seinen eigenen Bedingungen.
- **Die Begrenzung der Antworten.** Wir nutzen die IP-Adresse des Besuchers kurz, um zu begrenzen, wie viele Antworten ein Besucher schicken kann. Sie liegt nur im Arbeitsspeicher und wird nie in unsere Datenbank geschrieben.

### Was Besucher sehen {#visitor-notice}

Unter jedem Formular sehen Besucher einen kurzen Hinweis, wer ihre Antworten bekommt und wie lange sie aufbewahrt werden: "Deine Antworten gehen an die Betreiber von \<Name der Website\> und werden nach \<Tage\> Tagen gelöscht." Hast du eine Datenschutzerklärung und einen Kontakt für Datenfragen eingetragen, verlinkt der Hinweis sie ebenfalls.

### Worum du dich kümmern solltest {#your-part}

- **Verlinke deine Datenschutzerklärung.** Geh zu **Einstellungen** und füll die Karte **Rechtliche Angaben** aus. Deine **Datenschutzerklärung** erscheint im Footer deiner Website und bei jedem Formular. Dein **Kontakt für Datenfragen** (eine E-Mail-Adresse oder ein Link) erscheint nur bei deinen Formularen, nie im Footer. Wir schreiben diese Texte nicht für dich, verlinke also, was du schon hast. Änderungen hier wirken sofort, ohne erneutes Veröffentlichen.
- **Erwähne die Spamschutz-Prüfung** in deiner Datenschutzerklärung, wenn sie die Dienste aufzählt, die deine Website nutzt.
- **Frag nur, was du brauchst**, und halte die Aufbewahrung so kurz, wie es für dich passt.
- **Achte auf Kopien.** Antworten, die du als CSV exportierst oder in Discord bekommst, liegen außerhalb unserer automatischen Löschung.
- **Kümmere dich um Anfragen von Besuchern**, zum Beispiel wenn jemand möchte, dass du seine Antwort löschst. Einzelne Antworten löschst du im [Antworten-Eingang](#inbox).

Hat deine Website mindestens ein Formular und keine verlinkte Datenschutzerklärung, erinnern wir dich auf der Seite **Formulare** und beim Veröffentlichen daran. Das ist nur eine Erinnerung: du kannst trotzdem ohne veröffentlichen.

## Was live ist und was veröffentlicht werden muss {#live}

Formulare selbst sind live. Ihre Fragen und Einstellungen wirken sofort, genauso deine Wahl beim **Bot-Schutz** und deine **Rechtlichen Angaben**. Du musst deine Website **nicht** erneut veröffentlichen, nachdem du ein Formular geändert, geöffnet oder geschlossen oder seine Fragen bearbeitet hast.

Der **Formular**-Block gehört aber zu deiner Seite. Den Block auf eine Seite zu setzen, ihn zu entfernen oder den Text bei **Absenden-Button** oder **Danke-Nachricht** zu ändern, erscheint auf deiner Live-Website erst, nachdem du [veröffentlichst](/docs/sites/publishing).

Löschst du ein Formular, das noch auf einer Seite steht, bleibt der Block stehen, die Auswahl zeigt "Gelöschtes Formular", und Besucher sehen "Dieses Formular ist gerade nicht verfügbar." Entferne den Block oder wähle ein anderes Formular und veröffentliche danach.
