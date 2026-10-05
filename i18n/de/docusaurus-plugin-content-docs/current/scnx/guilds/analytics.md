---
sidebar_position: 2
---

# Server-Statistiken

Sieh dir an, welche Mitglieder, Kanäle und Tage deinen Server am Laufen halten, wie Mitglieder kommen und gehen und wohin sich alles entwickelt. Die Statistiken erfasst der eigene Bot deines Servers, die Zahlen bleiben also bei deinem Server.

:::tip Datenschutz liegt uns am Herzen
Die Statistiken zählen nur. Der Text einer Nachricht oder ein Anhang wird nie gespeichert. Die Daten liegen in der Datenbank deines eigenen Bots, und SCNX behält keine Kopie. [Hier steht genau, was erfasst wird](/docs/custom-bot/analytics-data).
:::

:::info
Für die Statistiken braucht dein Server einen eigenen Bot. Hat dein Server noch keinen, bietet dir die Statistiken-Seite an, [einen einzurichten](/docs/scnx/guilds/bots). Der SCNX-Bot wird für Statistiken nicht mehr verwendet.
:::

## Statistiken aktivieren {#enable}

1. Öffne die [Statistiken-Seite](https://scnx.app/de/glink?page=analytics) deines Servers.
2. Klicke auf **Statistiken aktivieren**. Das können nur der Serverinhaber und Co-Inhaber.
3. Starte deinen Bot neu. Dein Bot fängt erst beim nächsten Start mit dem Erfassen an, deshalb zeigt die Seite einen Button **Bot jetzt neu starten**. Ein Neustart dauert ein paar Sekunden. So lange ist dein Bot offline.

Vor dem Neustart wird nichts erfasst. Danach taucht neue Aktivität nach etwa einer Minute auf.

Läuft dein Bot noch mit einer Version von vor den Statistiken, bittet dich die Seite, ihn zuerst zu aktualisieren.

### Verlauf vom SCNX-Bot {#history}

Hat dein Server die Statistiken früher mit dem SCNX-Bot genutzt, wurde dieser Verlauf in deinen eigenen Bot übernommen. Beitritte, Austritte und Mitglieder, die zum ersten Mal schreiben, hat das alte System nie erfasst. Für Tage vor dem Umzug zeigen die Diagramme diese Werte deshalb als „nicht erfasst" an.

## Das Dashboard {#dashboard}

Wähle oben auf der [Statistiken-Seite](https://scnx.app/de/glink?page=analytics) einen Zeitraum: **Letzte 24 Stunden**, **Letzte Woche** oder **Letzte 30 Tage**. Alle Karten richten sich danach. Die Seite fragt deinen Bot bei jedem Öffnen nach frischen Zahlen. Es gibt also keine Verzögerung und keine zwischengespeicherte Zusammenfassung.

Zeiten werden in der Statistik-Zeitzone deines Servers angezeigt (standardmäßig UTC). Der Serverinhaber kann sie ändern. Eine neue Zeitzone gilt nur für Aktivität, die nach der Änderung erfasst wird.

Das Dashboard ist in Karten aufgeteilt. Die wichtigsten:

- **Auf einen Blick**: Nachrichten, Befehle, durchschnittliche Nachrichten pro Tag, aktive Mitglieder, Benutzer und Bots.
- **Nachrichten & Befehle**, **Aktivität nach Wochentag**, **Aktivste Stunden** und eine Heatmap, **wann dein Server aktiv ist**.
- **Die 10 meistgenutzten Kanäle** und **Aktivste Mitglieder**.
- **Mitgliederbewegung**: Benutzer, Bots, Beitritte, Austritte, neue Schreiber und Nettowachstum im gewählten Zeitraum.
- **Sprache, Threads und Reaktionen**: Zeit in Sprachkanälen, Höchstwert pro Stunde in Sprachkanälen, Thread-Aktivität und Reaktionen.
- **Bindung und Engagement**: Bindungskohorten, Anteil stiller Mitleser, neue vs. wiederkehrende Poster, Zeit bis zur ersten Nachricht, eine Mitglieder-Rangliste mit Aufsteigern, Stammmitglieder auf dem Absprung, Aktivität nach Rolle, Kanal- und Kategorie-Ranglisten und verwaiste Kanäle.

Listen zeigen zuerst die Top 5. Klicke auf **Mehr anzeigen**, um den Rest zu sehen.

### Modul-Karten {#module-cards}

Manche Karten erscheinen nur, wenn das passende Modul auf deinem Bot aktiviert ist:

| Modul                                                                      | Karten                                                                                                     |
|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [Moderation](/docs/custom-bot/modules/moderation)                          | Moderationsmaßnahmen nach Art, Automod-Auslöser, Beitritte und Quarantäne-Markierungen, Wiederholungstäter |
| [Einladungs-Tracking](/docs/custom-bot/modules/moderation/invite-tracking) | Beitritte nach Einladungsquelle, Einladungsquelle und Verbleib                                             |
| Tickets, Gewinnspiele, Vorschläge, Bewerbungen                             | Geöffnete und geschlossene Tickets, Gewinnspiel-Teilnahme, eingereichte Vorschläge und Bewerbungen         |
| Level, Aktivitäts-Serien, Wirtschaftssystem                                | Level-Verteilung, längste Aktivitäts-Serien, Guthaben im Wirtschaftssystem                                 |
| Custom Commands                                                            | Custom-Command-Ausführungen                                                                                |

Die Karten zu meistgenutzten Befehlen, Fehlerquote der Befehle und Befehlsnutzung nach Modul gibt es immer.

### Layout anpassen {#layout}

Klicke auf **Layout anpassen**, um Karten umzusortieren oder auszublenden. Zieh eine Karte am Griff oder nutze die Pfeile, dann klicke auf **Layout speichern**. Ausgeblendete Karten werden gar nicht erst geladen. Das Layout gilt für den ganzen Server.

Kommen neue Karten zu den Statistiken dazu, erscheinen sie unter deinem gespeicherten Layout. So kannst du sie selbst einsortieren.

### Server Wrapped {#wrapped}

Gegen Ende jedes Jahres erscheint auf der Statistiken-Seite ein Banner **Server Wrapped**. Es fasst das Jahr deines Servers auf einer Karte zusammen, die du teilen kannst. Wrapped-Karten aus vergangenen Jahren bleiben das ganze Jahr über abrufbar.

## Slash-Befehle {#slash-commands}

Dein Bot bringt zwei Befehle für Mitglieder mit. Beide antworten privat, nur wer den Befehl ausführt, sieht die Antwort.

- `/mystats`: zeigt einem Mitglied seine eigenen Nachrichten und wann es zuerst und zuletzt aktiv war. Andere Mitglieder kann niemand nachschlagen.
- `/serverstats`: zeigt serverweite Gesamtzahlen der letzten 7 Tage: Nachrichten, Befehle, durchschnittliche Nachrichten pro Tag, aktive Mitglieder, Mitglieder und Bots.

Der Serverinhaber kann jeden Befehl unter **Datenschutz** unten auf der Statistiken-Seite ausschalten. Ausgeschaltete Befehle verschwinden ohne Neustart.

## Datenschutz und Abmeldung für Mitglieder {#user-opt-out}

Der Serverinhaber kann unter **Datenschutz** die Option **Mitglieder dürfen sich von der individuellen Erfassung abmelden** einschalten. Standardmäßig ist sie aus. Ist sie an, können Mitglieder auf deinem Server `/analytics-privacy opt-out` ausführen. Dann werden sie nicht mehr einzeln gezählt:

- Ihre bisherige Aktivität wird anonymisiert. Ihre Gesamtzahl sowie das Datum der ersten und letzten Aktivität werden gelöscht.
- Ihre künftige Aktivität zählt weiter in die Server-Summen, ist aber nicht mehr mit ihnen verknüpft.
- Sie tauchen in keiner Mitgliederliste und keiner Rangliste mehr auf.

Die Abmeldung gilt nur für deinen Server. Mit `/analytics-privacy opt-in` kann sich ein Mitglied wieder anmelden und wird ab dann wieder gezählt. Anonymisierter Verlauf bleibt anonym.

[Mehr zur Abmeldung](/docs/custom-bot/analytics-data#mitgliedern-die-abmeldung-erlauben).

## Daten herunterladen oder löschen {#data}

Beides findest du unter **Datenschutz** auf der Statistiken-Seite. Nutzen kann es nur der Serverinhaber.

- **Analysedaten herunterladen** erstellt in deinem Browser eine JSON-Datei mit allem, was dein Bot für die Statistiken gespeichert hat. Sie umfasst den ganzen Verlauf, nicht nur den Zeitraum, den du gerade siehst.
- **Alle Analysedaten löschen** entfernt dauerhaft alle Statistikdaten, die dein Bot für deinen Server hat. Die Datenbank deines Bots ist die einzige Kopie, das lässt sich also nicht rückgängig machen. Lade vorher eine Kopie herunter, wenn du eine brauchst. Mitglieder, die sich abgemeldet haben, bleiben abgemeldet.

Sind die Statistiken danach noch aktiv, beginnt die Erfassung wieder bei null.

## Wer die Statistiken sehen kann {#permissions}

Der Serverinhaber und Co-Inhaber können die Statistiken sehen und nutzen. [Vertrauenswürdigen Admins](/docs/scnx/guilds/trusted-admins) kannst du mit der Berechtigung **Anzeigen und Verwenden von Statistiken** Zugriff geben. Statistiken aktivieren, die Datenschutz-Einstellungen, die Zeitzone, Herunterladen und Löschen bleiben beim Serverinhaber.

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Die Seite zeigt „Dein Bot ist gerade offline"</summary>
    <ul>
        <li>Dein Bot erfasst die Statistiken selbst. Solange er offline ist, gibt es also nichts anzuzeigen. Starte deinen Bot in seinem Dashboard.</li>
        <li>Bots im kostenlosen Plan stoppen nach einer Weile ohne Aktivität automatisch.</li>
    </ul>
</details>
<details>
    <summary>Die Statistiken sind aktiviert, aber es wird nichts angezeigt</summary>
    <ul>
        <li>Stelle sicher, dass du deinen Bot nach dem Aktivieren neu gestartet hast. Vorher wird nichts erfasst.</li>
        <li>Meldet die Seite, dass deinem Bot Ereignisse fehlen, die die Statistiken brauchen, klicke auf <b>Bot jetzt neu starten</b>. Kommt der Hinweis wieder, prüfe im Discord Developer Portal, ob der Server Members Intent für deinen Bot aktiviert ist.</li>
    </ul>
</details>
<details>
    <summary>Nachrichten aus einem Kanal fehlen</summary>
    <ul>
        <li>Dein Bot zählt nur Kanäle, die er sehen kann. Prüfe seine Berechtigungen für diesen Kanal.</li>
        <li>Nachrichten von Bots werden nicht gezählt, auch nicht die deines eigenen Bots.</li>
    </ul>
</details>
<details>
    <summary>Ein Mitglied fehlt in den Listen</summary>
    <ul>
        <li>Stelle sicher, dass das Mitglied im gewählten Zeitraum eine Nachricht in einem Kanal geschrieben hat, den dein Bot sehen kann.</li>
        <li>Mitglieder, die sich abgemeldet haben, erscheinen nicht in Mitgliederlisten.</li>
    </ul>
</details>
<details>
    <summary>Die Anzahl der Befehle wirkt zu niedrig</summary>
    <ul>
        <li>Gezählt werden nur Slash-Befehle, die auf deinem eigenen Bot ausgeführt werden. Befehle anderer Bots sind nicht dabei.</li>
    </ul>
</details>
<details>
    <summary>Ich sehe „Für die Mitgliederbewegung braucht es mindestens 48 Stunden an Statistikdaten."</summary>
    <ul>
        <li>Die Mitgliederbewegung braucht Daten von mindestens zwei Tagen. Schau wieder vorbei, wenn die Statistiken 48 Stunden gelaufen sind.</li>
    </ul>
</details>
<details>
    <summary>Ich sehe „Nicht genug Daten für ein Diagramm in diesem Zeitraum."</summary>
    <ul>
        <li>Wähle einen längeren Zeitraum, zum Beispiel „Letzte 30 Tage" statt „Letzte 24 Stunden".</li>
        <li>Eine Lücke in einer Linie heißt, dass an dem Tag nichts erfasst wurde. Sie heißt nicht, dass der Wert null war.</li>
    </ul>
</details>
<details>
    <summary>Die Seite zeigt „Dein Bot kennt Statistiken noch nicht"</summary>
    <ul>
        <li>Dein Bot läuft mit einer älteren Version. Aktualisiere ihn im Dashboard deines Bots, dann funktioniert die Seite.</li>
    </ul>
</details>
