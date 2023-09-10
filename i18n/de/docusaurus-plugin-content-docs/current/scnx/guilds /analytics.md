---
sidebar_position: 2
---

# Serverstatistiken

Schalte detaillierte Statistiken über deinen Server frei – erhalte Infos, welche Mitglieder, Kanäle und an welchen Tagen auf deinem Server Aktivitäten sind.
Schau dir die Mitgliederaktivität an und erhalte eine Prognosen für die Zukunft 🔮

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: true}}/>


:::tip Datenschutz liegt uns am Herzen
Du fragst dich, welche Daten wir über deinen Server speichern und wie wir sie verwenden? Bitte lese 
unseren [FAQ-Artikel](https://faq.scnx.app/datenerhebung-bei-statistiken/), um mehr zu erfahren.

**tl;dr**: Wir speichern Daten über Nachrichten nur für 30 Tage und dannach nur noch die Anzahl.
[Benutzer können sich abmelden](#user-opt-out) und es werden niemals Inhalte von Nachrichten (oder Anhängen) gespeichert.
:::

## Statistiken aktivieren {#enable}

Um Statistiken zu aktivieren, besuche bitte die [Statistiken-Seite](https://scnx.app/de/glink?page=analytics) deines Servers auf SCNX und klicke auf
„Statistiken aktivieren“.

![](@site/docs/assets/scnx/guilds/analytics/setup.png)

## Verwendung im Dashboard {#dashboard}

Im [Statistiken-Dashboard](https://scnx.app/de/glink?page=analytics) kannst du die folgenden Daten basierend auf einem Zeitraum sehen, den Du oben in deinem Dashboard auswählen kannst:
* Nachrichten und Befehle: Du siehst ein Diagramm, das zeigt, wie viele Nachrichten und Befehle an jedem Tag im Zeitraum gesendet wurden.
* 10 meist genutzte Kanäle: Dies ist eine Grafik, die zeigt, wie viel Prozent der Nachrichten über welchen Kanal gesendet wurden.
* Aktivste Benutzer: Das sind die 15. aktivsten Nutzer (die den [Datenschutzmodus](#user-opt-out) nicht aktiviert haben).
* Nutzerverlauf (immer letzte 30 Tage): Hier wird die Anzahl der Bots, Benutzer und aktive Mitglieder an jedem Tag des Zeitraums angezeigt.
* Aktivste Stunden: Diese Grafik zeigt, wie viele Nachrichten durchschnittlich zu welcher Zeit auf deinem Server gesendet wurden.
* Auf einen Blick: In diesem Abschnitt erhältst du einen schnellen Überblick über deinen Server. Folgende Daten werden angezeigt:
* Anzahl der im Zeitraum gesendeten Nachrichten
* Anzahl der im Zeitraum verwendeten Befehle
* Durchschnittliche Nachrichten pro Tag
* Anzahl der aktiven Mitglieder auf deinen Server (ausgenommen Benutzer, die den [Datenschutzmodus] nicht aktiviert haben (#user-opt-out))
* Anzahl der Benutzer auf deinem Server
* Anzahl der Bots auf deinem Server

*Bitte beachte, dass einige dieser Teile je nach Zeitrahmen möglicherweise nicht verfügbar sind.*

![](@site/docs/assets/scnx/guilds/analytics/dashboard.png)


## Analysen als Slash-Commands verwenden {#slash-commands}

Jeder Benutzer auf deinem Server kann die Slash-Befehle des verifizierten SCNX-Bots verwenden (du kannst dies unter
Discord-Server-Einstellungen unter „Integrationen“ konfigurieren). Folgende Befehle stehen zur Verfügung:

* `/stats guild`: Zeigt eine Statistikübersicht deines Servers an. Dazu gehören die 10 aktivsten Kanäle und Benutzer in den
letzten 30 Tagen und einen Abschnitt mit einer „Zusammenfassung“, in der Sie die Gesamtzahl der Nachrichten und Befehle in den letzten 30 Tagen finden.
* `/stats user`: Zeigt eine Statistikübersicht eines Benutzer auf deinem Server an. Dazu gehören die 10 aktivsten Kanäle (und die Anzahl der darin gesendeten Nachrichten) sowie ein Abschnitt „Auf einen Blick“, indem du die Gesamtzahl der Nachrichten und Befehle der letzten 30 Tage findest.
Benutzer, die den [Datenschutzmodus](#user-opt-out) aktiviert haben, können diesen Befehl nicht verwenden (/ zeigt Daten darüber an).

![](@site/docs/assets/scnx/guilds/analytics/commands.png)


## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Nachrichten werden nicht im SCNX Analytics-Dashboard angezeigt</summary>
    <ul>
         <li>Bitte stelle sicher, dass der (verifizierte) SCNX-Bot berechtigt ist, den Kanal anzuzeigen, in den die Nachricht gesendet wurden.
        </li>
        <li>Bitte beachte, dass das Dashboard ein Ergebnis einige Minuten lang zwischenspeichert. Bitte überprüfe den Zeitpunkt, an dem
             das Ergebnis im Dashboard generiert wurde (dies wird oben auf der Seite angezeigt und sollte wie folgt aussehen: „Diese Zusammenfassung wurde
            generiert um 11:30:28 Uhr").
        </li>
          <li>Versuche, das Statistiken-Dashboard in ein paar Minuten zu aktualisieren.</li>
        <li>Benutzer, die den <a href="#user-opt-out">Datenschutzmodus</a> aktiviert haben, werden nicht im Dashboard angezeigt.
        </li>
    </ul>
</details>
<details>
    <summary>Ein Benutzer fehlt im Dashboard</summary>
    <ul>
        <li>Stell sicher, dass der Benutzer eine Nachricht an einen Kanal gesendet hat, auf den der (verifizierte) SCNX-Bot zugriff hat.</li>
                <li>Versuche, das Statistiken-Dashboard in ein paar Minuten zu aktualisieren.</li>
        <li>Benutzer, die den <a href="#user-opt-out">Datenschutzmodus</a> aktiviert haben, werden nicht im Dashboard angezeigt.
        </li>
    </ul>
</details>
<details>
     <summary>Ich sehe die Meldung „Es gibt nicht viele Nachrichten im ausgewählten Zeitraum, daher sehen deine Diagramme möglicherweise etwas seltsam aus. ^^"  im Dashboard
    </summary>
    <ul>
        <li>Stelle sicher, dass Statistiken länger als 48 Stunden aktiviert sind.</li>
        <li>Aktualisiere dein Dashboard.</li>
         <li>Stelle sicher, dass Du einen ausreichenden Zeitraum ausgewählt hast (z. B. „Letzte 30 Tage“ statt „Letzte 24 Stunden“).</li>
        <li>Stelle sicher, dass im ausgewählten Zeitraum mehr als 100 Nachrichten gesendet wurden.</li>
        <li>Bitte stelle sicher, dass der (verifizierte) SCNX-Bot auf den Kanal zugreifen kann und den Nachrichtenverlauf sehen kann, über den die Nachrichten gesendet wurden.
        </li>
    </ul>
</details>
<details>
    <summary>Anstatt deine Mitgliederaktivität zu sehen, zeigt dir das Dashboard diese Warnung an: „Um Daten über deine Mitglieder anzuzeigen,
         musst du Statistiken seit mindestens 48 Stunden aktiviert haben.“
    </summary>
    <ul>
        <li>Stelle sicher, dass Statistiken länger als 48 Stunden aktiviert sind.</li>
        <li>Aktualisiere das Dashboard.</li>
        <li>Stelle sicher, dass SCNX mindestens einen Kanal auf deinem Server sehen kann.</li>
    </ul>
</details>

## Benutzer-Opt-Out {#user-opt-out}

:::info Kurze Erinnerung
Wir speichern keine Nachrichteninhalte, sondern nur Metadaten zu Nachrichten (und das nur für 30 Tage nach dem Absenden einer Nachricht).
Alle infos findest du in unserem [FAQ-Artikel](https://faq.scnx.app/de/data-collection-with-analytics/).
:::

Wenn du (oder ein Benutzer deines Servers) nicht möchte, dass der Serverbesitzer und die Administratoren sehen können, wie viele Nachrichten du
gesendet hast oder du befürchtest, dass personenbezogene Daten über Dich oder deine Nutzer gespeichert werden, kannst du auf SCNX den „Datenschutzmodus“ aktivieren.
Verwende den Befehl `/privacy enable` auf deinem Server. Diese globale Aktion (das bedeutet, dass SCNX auf keinem Server Daten über dich speichert)
wird sich auf folgendes auswirken:

* Alle Daten über von dir gesendete Nachrichten werden anonymisiert (= Deine Discord-Benutzer-ID wird aus der Datenbank entfernt)
 - das bedeutet, dass wir nicht wissen, dass *du* eine Nachricht gesendet hast, sondern nur, dass eine Nachricht gesendet wurde.
* Alle zukünftig von dir gesendeten Nachrichten werden anonymisiert gespeichert (= nicht mit deiner Discord-Benutzer-ID verknüpft) – dies
bedeutet, dass wir nicht wissen, dass *du* eine Nachricht gesendet hast, sondern nur, dass eine Nachricht gesendet wurde.
* Benutzer, die den Datenschutzmodus aktiviert haben, zählen weiterhin zu den Mitgliederaktivtitäts-Daten (da dies nicht die Speicherung von Discord-Benutzer-IDs beinhaltet)

Der Datenschutzmodus kann mit (Opt-Back) mit „/privacy enable“ deaktiviert werden. Bitte beachte, dass dadurch frühere Nachrichten, die von dir gesendet wurden, nicht erneut verknüpft werden 
(das ist nicht mehr möglich), d. h., dass nur neue Nachrichten in Befehlen und im Dashboard angezeigt werden.
