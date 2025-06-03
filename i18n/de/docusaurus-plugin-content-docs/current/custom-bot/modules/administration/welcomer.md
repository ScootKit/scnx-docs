# Willkommen und Boosts

Einfaches Modul, um neuen Nutzern "Hi" zu sagen, ihnen Rollen zu geben und um sich bei Nutzern, die deinen Server boosten, zu bedanken.

<ModuleOverview moduleName="welcomer" />

## Funktionen {#features}

* Heiße neue Nutzer mit eigenen Nachrichten (und dynamischen Bildern) willkommen.
* Verabschiede Nutzer, die deinen Server verlassen.
* Bedanke dich bei Nutzern mit eigenen Nachrichten, die deinen Server geboostet haben und erpresse sie emotional, indem du ihnen eine Nachricht sendest, wenn sie deinen Server entboosten.
* Füge unbegrenzt viele Nachrichten zum Beitritt, Boost oder Verlassen in verschiedenen Kanälen hinzu.
* Gebe neuen Nutzern und Boostern automatisch Rollen.
* Lasse den Bot zufällige Nachrichten nutzen, um ein wenig Abwechslung in deine Willkommens-, Verlassens-, Boost- und Entboost-Nachrichten zu bekommen.
* Lösche automatisch Willkommens-Nachrichten von Nutzern, die deinen Server innerhalb von 7 Tagen wieder verlassen.
* Füge einen Button unter Willkommens-Nachrichten hinzu, der es deinen bestehenden Nutzern erlaubt, Mitglieder willkommen zu heißen.

## Einrichtung {#setup}

### Willkommens-Nachricht einrichten {#setup-welcome-messages}

Willkommens-Nachrichten werden jedes mal gesendet, wenn ein neuer Nutzer deinem Server betritt. Du kannst einen Willkommens-Knopf hinzufügen, welcher es bestehenden Nutzern erlaubt, den neuen Nutzer willkommen zu heißen. Zusätzlich wird, falls [aktiviert](#configuration-config), die Nachricht gelöscht, wenn der Nutzer den Server innerhalb von 7 Tagen wieder verlässt.

1. Erstelle oder wähle einen deiner Kanäle, in welchen der Bot deine Nachricht schicken soll, wenn ein Nutzer beitritt. Der Bot benötigt 
   die Rechte "Kanal anzeigen" ("View channel"), "Nachrichten senden" ("Send messages") und "Nachrichtenverlauf anzeigen" ("View message history") in diesem Kanal.
2. Füge den Kanal zur 
   [Kanal-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels) hinzu, indem du als Kanal-Typ "join" nutzt und 
   das Element [konfigurierst](#configuration-channels).
3. Konfiguriere die Nachricht:
   * Wenn du zufällige Nachrichten verwenden willst, aktiviere die Option "Zufällige Nachrichten?", öffne die 
     [Zufällige Nachrichten](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Frandom-messages)-
     Konfigurationsdatei und [konfiguriere](#configuration-random-messages) die zufälligen Nachrichten mit dem Nachrichten-Typ
     "join".
   * Wenn du jedes mal die gleiche Nachricht senden willst, nutze die 
     [Kanal-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels), um die 
     [Nachricht zu konfigurieren](#configuration-channels).

### Boost / Unboost Nachrichten einrichten {#setup-boost-messages}

Boost-Nachrichten werden gesendet, wenn ein Nutzer deinen Server *das erste mal* boostet und die Unboost-Nachricht wird gesendet, wenn ein Nutzer *alle seine Boosts* von deinem Server entfernt hat. Aufgrund [Einschränkungen in Discords API](https://github.com/discord/discord-api-docs/discussions/3228#discussioncomment-1717560) werden diese Nachrichten nicht gesendet, wenn ein Nutzer die Anzahl seiner Boosts auf deinem Server erhöht oder verringert.

1. Erstelle oder wähle einen deiner Kanäle, in welchen der Bot eine Nachricht schreiben soll, wenn ein Nutzer deinen Server boostet. Der Bot benötigt 
   die Rechte "Kanal anzeigen" ("View channel"), "Nachrichten senden" ("Send messages") und "Nachrichtenverlauf anzeigen" ("View message history") in diesem Kanal.
2. Füge den Kanal zur
   [Kanal-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels) hinzu, indem du 
   den Kanal-Typ "boost" oder "unboost" benutzt
   und das Element [konfigurierst](#configuration-channels).
3. Konfiguriere die Nachricht:
   * Wenn du zufällige Nachrichten verwendest willst, aktiviere die "Zufällige Nachrichten?"-Option, öffne
     die [Zufällige Nachrichten](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Frandom-messages)-Konfigurationsdatei 
     und [konfiguriere](#configuration-random-messages) die zufälligen Nachrichten mit dem Nachrichten-Typ
     "boost" oder "unboost".
   * Wenn du jedes mal die gleiche Nachricht senden willst, nutze 
     die [Kanal-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels), um die 
     [Nachricht zu konfigurieren](#configuration-channels).

### Verlassens-Nachrichten einrichten {#setup-leave-messages}

Verlassens-Nachrichten werden jedes mal gesendet, wenn ein Nutzer deinen Server verlässt.

1. Erstelle oder wähle einen deiner Kanäle, in welchen der Bot deine Nachricht schicken soll, wenn ein Nutzer deinen Server verlässt. Der Bot benötigt 
   die Rechte "Kanal anzeigen" ("View channel"), "Nachrichten senden" ("Send messages") und "Nachrichtenverlauf anzeigen" ("View message history") auf diesen Kanal.
2. Füge den Kanal zur 
   [Kanal-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels) hinzu, indem du als Kanal-Typ "leave" nutzt und 
   das Element [konfigurierst](#configuration-channels).
3. Konfiguriere die Nachricht:
   * Wenn du zufällige Nachrichten verwenden willst, aktiviere die Option "Zufällige Nachrichten?", öffne die 
     [Zufällige Nachrichten](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Frandom-messages)-
     Konfigurationsdatei und [konfiguriere](#configuration-random-messages) die zufälligen Nachrichten mit dem Nachrichten-Typ
     "leave".
   * Wenn du jedes mal die gleiche Nachricht senden willst, nutze 
     die [Kanal-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels), 
     um die [Nachricht zu konfigurieren](#configuration-channels).

### Beitritts- und Boost-Rollen einrichten {#setup-join-roles}

:::caution
Momentan werden Beitritts-Rollen Rollen, die sich Nutzer selbst über 
Discords Einführung gegeben haben, überschrieben oder entfernt.
Dieser Fehler ist bekannt und wird bearbeitet.
:::

1. Öffne die [Modul-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fconfig).
2. Wähle die gewünschten Rollen in dem [jeweiligen Konfigurationsfeld](#configuration-config).

## Nutzung {#usage}

Nach dem [Einrichten](#setup) des Moduls werden Nachrichten automatisch jedes mal gesendet, wenn die jeweilige Aktion ausgelöst wird.      

Um Nutzern zu erlauben, einen Willkommens-Knopf zu benutzen, [aktiviere diese Funktion](#configuration-config) einfach in deiner Konfiguration. 
Nach dem Einstellen wird unter neuen Nachrichten ein (konfigurierbarer) Knopf angezeigt. Wenn dieser Knopf von einem deiner Mitglieder gedrückt wird, 
wird er inaktiv (= kann nicht mehr gedrückt werden) und eine [konfigurierbare](#configuration-config)
Nachricht wird in den konfigurierten Kanal gesendet.

## Konfiguration {#configuration}

Dieses Modul ist in mehrere Konfigurationsdateien unteteilt. Du kannst diese weiter unten finden.

### Kanäle {#configuration-channels}

In dieser Konfigurationsdatei kannst du die Kanäle einrichten und konfigurieren, in denen das Modul funktionieren soll. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels).

:::info
Diese Konfigurationsdatei nutzt "Config-Elemente". Ein Config-Element repräsentiert einen Kanal, in den Nachrichten geschickt werden sollen, wenn eine Aktion ausgelöst wird. Du kannst einen Kanal mehrmals hinzufügen, das ist vor allem notwendig wenn du verschiedene Event-Typen in den selben Kanal senden willst.
:::

Jeder Kanal hat die folgenden Konfigurationsoptionen:

| Feld                                                             | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kanal                                                            | Das ist der Kanal, in welchen die Nachricht gesendet wird.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Kanal-Typ                                                        | Abhängig von diesem Wert wird das Config-Element die Konfiguration für ein bestimmten Event-Typ wiederspiegeln (siehe [Einrichtung](#setup). Die folgenden Optionen sind verfügbar: <ul><li><code>join</code>: Dieses Config-Element wird angewandt, wenn ein neues Mitglied deinem Server beitritt.</li><li><code>leave</code>: Dieses Config-Element wird angewandt, wenn ein Mitglied deinen Server verlässt.</li><li><code>boost</code>: Dieses Config-Element wird angewandt, wenn ein Mitglied deinen Server zum ersten Mal boostet.</li><li><code>unboost</code>: Dieses Config-Element wird angewandt, wenn ein Mitglied seinen letzten Boost von deinem Server entfernt.</li></ul> |
| Zufällige Nachrichten?                                           | Wenn diese Option aktiviert ist, wird der Wert "Nachricht" *NICHT* genutzt. Stattdessen wird eine der [zufälligen Nachrichten](#configuration-random-messages) mit dem selben Kanal-Typ gesendet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Nachricht                                                        | Das ist die in den Kanal gesendete Nachricht, wenn "Zufällige Nachrichten?" nicht aktiviert ist. Diese Option [unterstützt dynamische Bildgeneration](https://scootk.it/imgen), um deine Nachrichten noch schöner zu machen✨.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Willkommens-Knopf                                                | *Diese Option ist nur verfügbar, wenn "Kanal-Typ" auf "join" gesetzt ist*<br/>Wenn aktiviert wird unter jede Nachricht ein Knopf angehangen. Ein anderes Mitglied kann diesen Knopf drücken, worauf die konfigurierte Nachricht gesendet wird.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Willkommens-Knopf-Inhalt                                         | *Nur sichtbar, wenn "Willkommens-Knopf" aktiviert ist.*<br/>Das ist der Inhalt des unter die Nachricht angehängten Knopfs. Dieser Wert muss kürzer als 100 Zeichen sein.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Kanal, in welchen der Willkommensknopf die Nachricht senden soll | *Nur sichtbar, wenn "Willkommens-Knopf" aktiviert ist.*<br/>Das ist der Kanal, in den die Willkommens-Knopf-Nachricht gesendet wird, wenn ein anderes Mitglied den Willkommens-Knopf drückt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Willkommens-Knopf-Nachricht                                      | *Nur sichtbar, wenn "Willkommens-Knopf" aktiviert ist.*<br/>Das ist die in den konfigurierten Kanal gesendete Nachricht, wenn ein anderes Mitglied den Willkommens-Knopf drückt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Modul-Konfiguration {#configuration-config}

Diese Konfigurationsdatei erlaubt es dir, [Willkommen- und Boost-Rollen einzurichten](#setup-join-roles) und andere grundlegende Funktionen dieses Moduls zu konfigurieren. Öffne sie
in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fconfig).

| Feld                                | Beschreibung                                                                                                                                                                                             |
|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nutzern Rollen beim Beitreten geben | Diese Rollen werden Mitgliedern gegeben, die deinem Server beitreten. Das wird nicht rückwirkend angewandt, nutze dafür das [Massrole-Modul](/docs/custom-bot/modules/tools/massrole).                   |
| Bots ignorieren?                    | Wenn aktiviert (und das ist sehr empfehlenswert), werden keine Willkommens- und Verlassensnachrichten verschickt, wenn das Mitglied ein Bot ist.                                                         |
| Zusätzliche Rollen beim Boost geben | Diese Rollen werden einem Mitglied zusätzlich zu der von Discord vergebenen Boost-Rolle gegeben, wenn es deinen Server boostet. Die Rollen werden entfernt, wenn das Mitglied all seine Boosts entfernt. |
| Willkommensnachricht löschen        | Wenn aktiviert werden Willkommensnachrichten automatisch gelöscht, wenn das Mitglied deinen Server innerhalb von sieben Tagen wieder verlässt.                                                           |

### Zufällige Nachrichten {#configuration-random-messages}

Diese Konfigurationsdatei wird genutzt, wenn ein [konfigurierter Kanal](#configuration-channels) die "Zufällige Nachrichten?"-
Option nutzt. In diesem Fall wird der Bot zufällig eine der in dieser Datei konfigurierten Nachrichten des selben Kanal-Typs auswählen.

:::info
Diese Konfigurationsdatei nutzt "Config-Elemente". Ein Config-Element repräsentiert eine Nachricht mit einem bestimmten Typ. Wenn [ein Kanal](#configuration-channels) die "Zufällige Nachrichten?" Option nutzt, wird eine zufällige Nachricht des selben Typs ausgewählt.

:::

| Feld           | Beschreibung                                                                                                                                                                                                                          |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nachricht-Typ  | *Schau dir dazu "Kanal-Typ" in der [Kanal-Konfiguration](#configuration-channels) an.*                                                                                                                                                |
| Nachricht      | Das ist die Nachricht, die versendet wird, wenn dieses Nachrichtenobjekt zufällig ausgewählt wird. Diese Option [unterstützt dynamische Bildgeneration](https://sccootk.it/imgen), um deine Nachrichten noch schöner zu machen✨. |

## Fehlerbehebung {#troubleshooting}

Fehler in diesem Modul sind bekanntermaßen schwierig zu beheben, da es hochflexible und anpassbar ist und dies eine komplizierte Konfigurationsstruktur mit sich bringt. 
Wenn keiner der Schritte hierunter hilft (bitte probiere das zuerst!), kannst du jederzeit unsere
freundlichen Teammitglieder über [scnx.app/de/help](https://scnx.app/de/help) kontaktieren.

<details>
   <summary>Eine Nachricht wird nicht gesendet oder der Inhalt der Nachricht ist "Message not found".</summary>
   <ul>
      <li>Stelle sicher, dass der Bot die Berechtigungen "Kanal anzeigen" ("View channel"), "Nachrichten senden" ("Send messages") und "Nachrichtenverlauf anzeigen" ("View message history") im konfigurierten Kanal besitzt.</li>
      <li>Stelle sicher, dass ein <a href="#configuration-channels">Kanal-Element</a> mit dem richtigen Kanal und Event-Typ eingerichtet ist.</li>
      <li>Wenn du zufällige Nachrichten nutzt: Stelle sicher, dass mindenstens eine <a href="#configuration-random-message">zufällige Nachricht</a> für diesen Event-Typ konfiguriert ist. Die Nachricht in der <a href="#configuration-channels">Kanal-Konfiguration</a> wird ignoriert.</li>
      <li>Wenn du zufällige Nachrichten nicht nutzt: Stelle sicher, dass du eine gültige Nachricht in der <a href="#configuration-channels">Kanal-Konfiguration</a> konfiguriert hast.</li>
   </ul>
</details>

<details>
   <summary>Ich habe Probleme mit einem dynamischen Bild.</summary>

   Bitte schaue dir, wie im Fehlerbild angezeigt, <a href="https://scootk.it/imgen">scootk.it/imgen</a> an.
</details>

<details>
   <summary>Es wird keine Nachricht gesendet, wenn ein Mitglied meinen Server ein weiteres Mal boostet.</summary>

   Das liegt an einer <a href="https://github.com/discord/discord-api-docs/discussions/3228#discussioncomment-1717560">Discord API Limitation</a>. Wir können daran nichts ändern.
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jede konfigurierte Willkommensnachricht jedes mal gespeichert, wenn ein Mitglied deinem Server beitritt:

* Eine eindeutige ID, die den Datenbankeintrag identifiziert
* Die einzigartige Discord Nutzer-ID des Nutzers, der deinem Server beigetreten ist und die Willkommens-Nachricht ausgelöst hat
* Die einzigartige Discord Nachrichten-ID der Willkommens-Nachricht, die vom Bot gesendet wurde
* Die einzigartige Discord Kanal-ID des Kanals, in welchen der Bot die Willkommens-Nachricht geschrieben hat
* Der genaue Zeitpunkt, wann der Nutzer deinem Server beigetreten ist
* Metadaten zum Eintrag (Datum der Erstellung und letzten Aktualisierung)

Diese Daten werden genutzt, um gesendete Willkommensnachrichten wieder zu löschen, wenn ein Nutzer den Server innerhalb von sieben Tagen nach dem Beitreten wieder verlässt (falls [aktiviert](#configuration-config)). Es gibt keinen Weg, den Bot davon abzuhalten, diese Daten zu speichern (falls die Funktion im Nachhinein aktiviert wird),
aber die Daten werden nicht genutzt, bis die Funktion aktiviert ist.

Um alle Daten zu löschen, [lösche die Moduldatenbank](/docs/custom-bot/additional-features#reset-module-database).