---
sidebar_position: 7
title: "Datenspeicher"
description: "Behalte Daten zwischen den Ausführungen deiner Flows - Speicherfelder, Geltungsbereiche und wie du gespeicherte Daten im Dashboard ansiehst, bearbeitest und aufräumst."
---

# Datenspeicher

Mit dem Datenspeicher können sich deine Flows Dinge zwischen zwei Ausführungen merken. Ein Flow kann Nachrichten pro Mitglied zählen, einen XP-Stand führen, sich merken, welches Ticket zu welchem Kanal gehört, oder einen Schalter speichern, der ein Event an- und ausschaltet. Ohne Datenspeicher beginnt jede Ausführung bei null.

Gespeicherte Daten liegen auf dem Bot deines Servers. Du kannst sie im Dashboard durchsuchen, ändern und löschen, und deine Flows lesen und schreiben sie mit Speicher-Schritten.

:::note Dein Bot muss laufen
Gespeicherte Daten liegen in deinem laufenden Bot. Solange dein Bot gestoppt ist, zeigen die Speicherseiten "Der Bot muss laufen", und auch Flows können keine Daten lesen oder schreiben.
:::

## So funktioniert der Datenspeicher {#how-it-works}

Bevor ein Flow etwas speichern kann, legst du ein **Speicherfeld** an. Ein Feld hat einen Namen, einen Typ (eine Zahl, Text, einen Benutzer, eine Liste und so weiter) und einen Geltungsbereich. Flows lesen und schreiben dieses Feld dann über seinen Namen.

Der Datenspeicher ist in getrennte Bereiche aufgeteilt, die sich nie vermischen:

- **Server-Pool.** Die Felder, die von Flows außerhalb eines Moduls genutzt werden. Du verwaltest sie auf der Seite **Server-Datenspeicher**.
- **Modul-Speicher.** Jedes Modul hat seine eigenen Felder. Nur die Flows in diesem Modul können sie nutzen. Ein Modul sieht weder den Server-Pool noch die Daten eines anderen Moduls, und umgekehrt genauso.

So können Apps aus dem Marktplatz nicht gegenseitig ihre Daten lesen, und ein Feldname muss nur innerhalb seines eigenen Bereichs eindeutig sein.

## Geltungsbereiche {#scopes}

Der Geltungsbereich legt fest, wie viele Werte ein Feld enthält.

| Geltungsbereich            | Was gespeichert wird                                                                                 | Beispiel                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Pro Benutzer**           | Ein Wert pro Discord-Benutzer.                                                                       | XP, Verwarnungen, ein Münz-Guthaben           |
| **Gesamter Server**        | Ein einziger Wert für den ganzen Server.                                                             | Ein An/Aus-Schalter für ein Event, ein Zähler |
| **Nach eigenem Schlüssel** | Ein Wert pro Schlüssel, den du wählst, etwa eine Nachrichten-ID, eine Kanal-ID oder beliebiger Text. | Stimmen pro Vorschlag, Giveaway-Daten         |

Wenn ein Schritt ein Feld mit **Pro Benutzer** liest oder schreibt, gibst du an, um welchen Benutzer es geht. Bei einem Feld mit **Nach eigenem Schlüssel** gibst du den Schlüssel an. Ein Feld mit **Gesamter Server** braucht nichts davon.

## Ein Speicherfeld anlegen {#declare}

Du kannst ein Feld an drei Stellen erstellen:

- **Im Flow-Editor.** Scrolle in der Aktionsauswahl zum Bereich **Datenspeicher** und klicke auf **Neues Speicherfeld erstellen...**. Das Feld ist sofort verfügbar, ohne dass du den Editor verlassen musst.
- **Mit der geführten Einrichtung.** **Etwas für jedes Mitglied speichern** erstellt ein Feld pro Benutzer und fügt die Schritte hinzu, die es lesen und ändern. Du wählst, ob es eine Zahl, Text, eine Auswahl oder mehrere Dinge zusammen sein soll.
- **Auf der Speicherseite.** Öffne die Ansicht **Schema**, klicke auf **Feld hinzufügen**, fülle es aus und speichere.

Jedes Feld hat diese Einstellungen:

| Einstellung         | Was sie bewirkt                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| **Name**            | Wie du und deine Flows das Feld nennen.                                                          |
| **ID**              | Wird aus dem Namen erzeugt. Sie lässt sich später nicht mehr ändern.                             |
| **Typ**             | Welche Art von Wert das Feld enthält. Siehe [Werttypen](/de/docs/custom-commands/value-types).   |
| **Geltungsbereich** | **Pro Benutzer**, **Gesamter Server** oder **Nach eigenem Schlüssel**.                           |
| **Beschreibung**    | Eine optionale Notiz für dich und dein Team.                                                     |
| **Standardwert**    | Was ein Flow zurückbekommt, wenn noch nichts gespeichert wurde, bei Typen, die das unterstützen. |

Die Ansicht **Schema** enthält außerdem zwei Hilfen für strukturierte Daten:

- Mit **Strukturen** kann ein Feld mehrere benannte Werte auf einmal enthalten, zum Beispiel ein Spielerprofil mit Level, Münz-Guthaben und Beitrittsdatum. Ein Flow liest dann `bet.amount`, statt einen langen Text auseinanderzunehmen.
- **Auswahllisten** sind feste Sätze von Textwerten. Ein Feld mit einer Auswahlliste als Typ nimmt nur diese Werte an, was praktisch für Status wie "offen" und "geschlossen" ist.

Jeder Bereich kann nur eine begrenzte Anzahl an Feldern, Strukturen und Auswahllisten enthalten. Der Zähler neben jedem Abschnitt zeigt, wie viele du schon nutzt.

![Die Schema-Ansicht des Speichers eines Moduls mit der aufgeklappten Struktur "Level reward" und drei Feldern: Pro Benutzer, Gesamter Server und Nach eigenem Schlüssel](@site/docs/assets/custom-commands/en/storage-schema.png)

## Datenspeicher in einem Flow nutzen {#in-flows}

Flows lesen und schreiben gespeicherte Daten mit Speicher-Schritten. In der Aktionsauswahl listet der Bereich **Datenspeicher** jedes Feld des Bereichs auf, zu dem dein Flow gehört. Klappe ein Feld auf, um zu sehen, was du damit machen kannst, zum Beispiel **lesen**, **setzen**, **erhöhen**, **Eintrag zu ... hinzufügen**, **Top-Einträge von** oder **Platzierung in**.

Gespeicherte Werte kommen nur über einen Schritt, der sie liest, in einen Flow. Wenn du einen Wert für eine Eingabe auswählst und dabei ein gespeichertes Feld aus der Gruppe **Datenspeicher** nimmst, fügt der Editor den Lese-Schritt für dich hinzu.

Die Speicher-Schritte, die du am häufigsten brauchst:

| Schritt                                                                                           | Was er macht                                                                                                                  | Funktioniert mit                               |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Gespeicherten Wert lesen**                                                                      | Liest den Wert. Er ist leer, wenn noch nichts gespeichert wurde.                                                              | Jedem Feld                                     |
| **Wert speichern**                                                                                | Schreibt einen Wert und ersetzt, was vorher dort stand.                                                                       | Jedem Feld                                     |
| **Gespeicherte Zahl erhöhen**                                                                     | Addiert in einem sicheren Schritt zu einer Zahl. Er kann auch abziehen, das nutzt **verringern** in der Auswahl.              | Zahlenfeldern, Zahlenfeldern in einer Struktur |
| **Gespeicherten Wert löschen**                                                                    | Entfernt den Wert für einen Benutzer oder Schlüssel.                                                                          | Jedem Feld                                     |
| **Gespeicherter Wert vorhanden?**                                                                 | Prüft, ob es einen Wert gibt, ohne ihn zu lesen.                                                                              | Jedem Feld                                     |
| **Speichereinträge auflisten**                                                                    | Gibt die obersten Einträge sortiert nach Wert zurück, für Ranglisten.                                                         | Zahlenfeldern                                  |
| **Rang eines gespeicherten Werts abrufen**                                                        | Gibt die Platzierung von jemandem zurück, etwa "#42 in der Rangliste".                                                        | Zahlenfeldern                                  |
| **Rangliste formatieren**                                                                         | Baut aus den obersten Einträgen einen fertigen Ranglisten-Text zum Senden.                                                    | Zahlenfeldern                                  |
| **Eintrag zur gespeicherten Liste hinzufügen** / **Eintrag aus gespeicherter Liste entfernen**    | Ändert eine gespeicherte Liste in einem sicheren Schritt.                                                                     | Listenfeldern                                  |
| **Schlüssel in gespeicherter Zuordnung setzen** / **Schlüssel aus gespeicherter Zuordnung lesen** | Arbeitet mit einem Schlüssel einer gespeicherten Zuordnungstabelle.                                                           | Zuordnungsfeldern                              |
| **Erhöhen wenn (atomar)** / **Gespeicherten Wert setzen wenn (atomar)**                           | Ändert einen Wert nur, wenn sein aktueller Wert eine Bedingung erfüllt, etwa "Münzen nur ausgeben, wenn das Guthaben reicht". | Jedem Feld                                     |
| **Cooldown prüfen und setzen**                                                                    | Prüft, ob jemand einen Cooldown hat, und startet in einem Schritt einen neuen.                                                | Jedem Feld                                     |
| **Speicherfeld leeren**                                                                           | Löscht jeden Wert eines Felds oder nur den eines Benutzers oder Schlüssels.                                                   | Jedem Feld                                     |

Die vollständige Liste mit jeder Eingabe und Ausgabe findest du in der [Aktionsreferenz für den Datenspeicher](/de/docs/custom-commands/reference/actions/data-storage).

:::tip Zähle mit Erhöhen, nicht mit Lesen und Setzen
Laufen zwei Ausführungen gleichzeitig, kann "Zahl lesen, eins addieren, wieder speichern" eine der Änderungen verlieren. **Erhöhe** eine gespeicherte Zahl stattdessen in einem einzigen Schritt. Das gilt auch für Listen und Zuordnungstabellen: Nutze **Eintrag zu ... hinzufügen** und **Schlüssel in ... setzen**, die den gespeicherten Wert in einem Rutsch ändern.
:::

### Beispiel: ein XP-System {#example-xp}

Mitglieder bekommen pro Nachricht ein XP, und `/rank` zeigt ihnen, wo sie stehen.

1. **Feld erstellen.** Klicke in der Ansicht **Schema** auf **Feld hinzufügen**. Nenne es "XP", wähle einen Ganzzahl-Typ, setze **Geltungsbereich** auf **Pro Benutzer** und **Standardwert** auf `0`. Speichere.
2. **Nachrichten zählen.** Erstelle einen Flow mit dem Trigger **Nachricht erstellt**. Schalte in den Trigger-Einstellungen das Ignorieren von Bots ein, damit Bot-Nachrichten keine XP bringen. Füge **Gespeicherte Zahl erhöhen** hinzu, wähle das Feld "XP", nimm den Autor der Nachricht als Benutzer und `1` als Betrag.
3. **Rang anzeigen.** Erstelle einen zweiten Flow mit einem Slash-Command-Trigger namens `rank`. Füge **Gespeicherten Wert lesen** für "XP" mit dem Benutzer des Befehls hinzu, dann **Rang eines gespeicherten Werts abrufen** für denselben Benutzer, und antworte mit beiden Werten.
4. **Testen und aktivieren.** Nutze **Testlauf** bei beiden Flows, schalte sie dann auf **Aktiv** und speichere.
5. **Daten prüfen.** Sende ein paar Nachrichten, öffne dann die Ansicht **Gespeicherte Daten** und wähle "XP". Du siehst eine Zeile pro Mitglied mit seinem Gesamtstand. Sortiere mit **Höchste zuerst**, um deine aktivsten Mitglieder zu sehen.

Um die XP eines Mitglieds von Hand zu korrigieren, klicke auf den Stift in seiner Zeile und gib die neue Zahl ein.

### Verschlüsselte Felder {#encrypted}

Für ein Feld mit sensiblen Daten kannst du **Die Werte dieses Feldes verschlüsselt speichern** einschalten. Flows lesen und schreiben das Feld ganz normal weiter, aber die Werte liegen verschlüsselt in der Datenbank.

Die Verschlüsselung hat zwei Haken:

- **Sie lässt sich nicht wieder ausschalten.** Sobald du speicherst, bleibt das Feld verschlüsselt. Auch das Löschen des Felds macht das nicht rückgängig.
- **Verschlüsselte Werte lassen sich nicht sortieren oder aufsummieren.** Ranglisten, Top-Listen und Platzierungen können nicht mehr über das Feld hinweg lesen. Der Editor zeigt dir vor dem Bestätigen, welche Flows dann nicht mehr funktionieren würden.

Du kannst die Verschlüsselung nur einschalten, solange ein Feld fast leer ist. Entscheide dich also früh, am besten schon beim Erstellen des Felds. Enthält ein Feld schon zu viel, wird das Speichern mit "enthält bereits zu viele Daten, um verschlüsselt zu werden" abgelehnt. So verschiebst du die Daten in ein verschlüsseltes Feld:

1. Lege ein neues Feld mit demselben Typ und Geltungsbereich an und schalte dafür die Verschlüsselung ein.
2. Baue einen Flow, der jeden Wert des alten Felds liest (zum Beispiel mit **Speicherschlüssel auflisten** und einer Schleife) und ihn im neuen Feld speichert.
3. Ändere jeden Flow, der das alte Feld nutzt, so, dass er das neue nutzt.
4. Leere das alte Feld und lösche es.

Siehst du nach dem Speichern "Für den Bot ist kein Verschlüsselungsschlüssel konfiguriert, die Werte sind daher NICHT verschlüsselt", ist das Feld gespeichert, aber nicht verschlüsselt. Das ist ein Hosting-Problem, das du im Dashboard nicht beheben kannst, also melde dich bei uns.

## Gespeicherte Daten ansehen und bearbeiten {#browse}

Öffne die Speicherseite in der Custom-Commands-Übersicht unter **Daten & Verlauf** und dann **Server-Datenspeicher**. Bei einem Modul öffnest du das Modul und gehst zum Tab **Speicher**. Bei einer App, die du aus dem Marktplatz installiert hast, öffnest du die App, gehst zu **Erweitert**, klickst auf **Entwickler-Tools anzeigen** und dann auf **Gespeicherte Daten**.

Wechsle zur Ansicht **Gespeicherte Daten** und wähle unter **Speicherfeld** ein Feld aus. Du siehst:

- **Die Einträge**, mit dem Benutzer oder Schlüssel in der ersten Spalte und dem Wert daneben. Ein Feld mit **Gesamter Server** hat nur einen Wert.
- **Wie voll das Feld ist**, als Anzahl der Einträge.
- **Die Sortierung.** Wähle **Höchste zuerst** oder **Niedrigste zuerst**.

![Die Ansicht Gespeicherte Daten des XP-Felds pro Benutzer mit der Auswahl des Speicherfelds, dem Eintragszähler, dem Sortierschalter, Eintrag hinzufügen und Feld leeren sowie mehreren Einträgen](@site/docs/assets/custom-commands/en/storage-table.png)

Hier kannst du:

- **Einen Eintrag hinzufügen.** Klicke auf **Eintrag hinzufügen**, gib die **Benutzer-ID** oder den **Schlüssel** (je nach Geltungsbereich) und den **Wert** ein und speichere.
- **Einen Wert bearbeiten.** Klicke auf den Stift in einer Zeile. Manche Werte, etwa eine gespeicherte Nachricht, kann nur ein Flow schreiben. Die kannst du hier nicht bearbeiten, aber trotzdem löschen.
- **Einen Eintrag löschen.** Klicke auf das Papierkorb-Symbol und bestätige mit **Löschen**.
- **Ein ganzes Feld leeren.** Klicke auf **Feld leeren**, gib zur Bestätigung den Namen des Felds ein und klicke auf **Alle Daten löschen**. Damit wird jeder Eintrag in diesem Feld endgültig gelöscht.

Änderungen im Dashboard gelten sofort. Deine Flows sehen sie bei ihrer nächsten Ausführung.

Ein paar Dinge zur Tabelle:

- **Sortieren** funktioniert nach Wert. Bei Feldern, die keine Zahlen enthalten, sortiert die Seite nach dem rohen gespeicherten Wert und weist darauf hin.
- **Große Werte.** Enthält ein Feld große Werte, kann eine Seite enden, bevor sie voll ist, mit "Diese Seite endet an einer Größengrenze". Die anderen Einträge sind trotzdem gespeichert. Lies auf der nächsten Seite weiter.
- **Listen, Zuordnungstabellen und Strukturen** werden als JSON in einem Textfeld bearbeitet.

### Wenn eine Änderung abgelehnt wird {#edit-errors}

| Meldung                                                            | Ursache                                                                        | Lösung                                                                                     |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| "Dieser Wert ist für den Feldtyp ungültig."                        | Der Wert passt nicht zum Feld, etwa Text in einem Zahlenfeld.                  | Gib einen Wert vom Typ des Felds ein.                                                      |
| "Kurze Test-IDs lassen sich nicht über das Dashboard speichern."   | Ein Benutzer-, Kanal- oder Rollenfeld braucht eine vollständige Discord-ID.    | Kopiere die echte ID aus Discord. Siehe [Discord-IDs](/de/docs/discord-ids).               |
| "Setze lange Zahlen wie Discord-IDs in Anführungszeichen"          | In JSON verlieren lange Zahlen ihre letzten Ziffern.                           | Schreibe IDs als Text in Anführungszeichen, etwa `"123456789012345678"`.                   |
| "Dieser Wert ist zu groß zum Speichern"                            | Der Wert ist größer, als ein einzelner Eintrag sein darf.                      | Speichere weniger in einem Eintrag oder verteile es auf mehrere Schlüssel.                 |
| "Dieses Feld hat sein Eintragslimit erreicht."                     | Das Feld ist voll.                                                             | Lösche Einträge, die du nicht mehr brauchst.                                               |
| "Dieses Speicher-Feld steht nicht im gespeicherten Speicherschema" | Das Feld wurde entfernt, seit du die Seite geöffnet hast.                      | Lade die Seite neu.                                                                        |
| "Dein Bot lädt gerade noch seine Flows"                            | Dein Bot ist gerade erst gestartet.                                            | Warte einen Moment und versuche es erneut. Passiert das immer wieder, lade deinen Bot neu. |
| "Dieses Feld wurde gerade als verschlüsselt markiert"              | Dein Bot beginnt mit dem Verschlüsseln, wenn er seine Flows neu lädt.          | Warte einen Moment und versuche es erneut.                                                 |
| "Dieser verschlüsselte Wert lässt sich nicht entschlüsseln"        | Der Wert wurde mit einem Schlüssel verschlüsselt, den dein Bot nicht mehr hat. | Du kannst ihn nur löschen.                                                                 |

:::caution Löschen lässt sich nicht rückgängig machen
Gelöschte Einträge und geleerte Felder sind endgültig weg. Wenn du nur etwas ausprobieren willst, teste mit einem Feld, das du nicht brauchst.
:::

## Wie viel du speichern kannst {#usage}

Die Karte **Server-Speicher** zeigt, wie viel vom Speicher deines Servers belegt ist. Das ist die Summe über alle Module und den Server-Pool. Sie zeigt außerdem **Wo der Platz hingeht**, damit du das Modul findest, das am meisten belegt.

Die Karte zeigt einen dieser Zustände:

| Zustand                                                           | Was du tun solltest                                                         |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Reichlich Platz**                                               | Nichts.                                                                     |
| **Wird knapper** / **Fast voll**                                  | Schau unter **Wo der Platz hingeht** nach und räume den größten Posten auf. |
| **Voll: neue Daten werden nicht mehr gespeichert**                | Schaffe jetzt Platz. Flows können schon keine Daten mehr speichern.         |
| "Die Belegung wird nach dem Leeren neu gezählt"                   | Warte einen Moment. Die Zahl kommt von selbst zurück.                       |
| "Die Belegung konnte nicht ermittelt werden: der Bot läuft nicht" | Starte deinen Bot.                                                          |

Sobald der Speicher voll ist, können deine Flows keine neuen Daten mehr speichern, bis Platz frei wird. Diese Schritte schlagen mit einem Speicherfehler im [Ausführungsverlauf](/de/docs/custom-commands/executions) fehl. Lösche Einträge, die du nicht mehr brauchst, oder leere ein Feld, das du nicht mehr nutzt. Höhere Tarife enthalten mehr Speicher, siehe [Tarife, Limits & Sicherheit](/de/docs/custom-commands/limits-and-safety).

## Ein Feld ändern oder löschen {#change-field}

Felder sind schnell angelegt und schwerer zu ändern, weil Flows und gespeicherte Daten von ihnen abhängen.

- **Den Typ zu ändern** wird bei einem Feld abgelehnt, das schon Daten enthält. Leere zuerst seine Daten und ändere dann den Typ.
- **Den Typ oder Geltungsbereich zu ändern** macht die Flows ungültig, die das Feld nutzen. Der Editor listet die betroffenen Flows vor dem Bestätigen auf. Sie laufen nicht mehr, bis du jeden Schritt von Hand korrigiert hast.
- **Ein Feld zu löschen** macht jeden Flow kaputt, der es nutzt. Die darunter gespeicherten Daten werden mit dem Feld nicht aufgeräumt, also leere das Feld vorher, wenn die Daten weg sollen.
- **Die ID ändert sich nie.** Wenn du ein Feld umbenennst, ändert sich nur sein Name. Flows funktionieren weiter.

So änderst du den Typ eines Felds, das Daten enthält:

1. Schalte die Flows, die es nutzen, auf **Entwurf**, damit in der Zwischenzeit nichts in das Feld schreibt.
2. Wähle in der Ansicht **Gespeicherte Daten** das Feld aus und klicke auf **Feld leeren**. Gib seinen Namen ein und klicke auf **Alle Daten löschen**.
3. Ändere in der Ansicht **Schema** den **Typ** und speichere. Wenn Flows das Feld nutzen, bestätige mit **Trotzdem ändern**.
4. Öffne jeden aufgelisteten Flow, korrigiere die Schritte, die der Tab **Probleme** markiert, und schalte ihn wieder auf **Aktiv**.

Zum Ändern des Typs muss dein Bot laufen, weil er prüft, ob das Feld Daten enthält. Solange er offline ist, wird das Speichern mit "Der Bot muss laufen, um den Typ eines Feldes zu ändern." abgelehnt.

Statt ein Feld zu löschen, kannst du es auch mit **In eine Struktur verschieben** in eine Struktur verschieben. Das Feld behält seine ID, aber Flows, die es direkt lesen oder schreiben, müssen angepasst werden.

## Was mit gespeicherten Daten passiert {#lifecycle}

| Wenn du...                                         | Gespeicherte Daten                                                                                                                                       |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Eine App** aus dem Marktplatz **aktualisierst**  | Bleiben erhalten. Die neue Version nutzt denselben Speicher.                                                                                             |
| **Ein Modul duplizierst**                          | Werden nicht kopiert. Die Kopie bekommt dieselben Felder, startet aber leer.                                                                             |
| **Ein Modul löschst oder eine App deinstallierst** | Werden einige Zeit nach dem Entfernen des Moduls endgültig gelöscht. Du kannst sie nicht über das Dashboard zurückholen.                                 |
| **Den Notaus nutzt**                               | Bleiben erhalten. Nichts läuft, aber nichts wird gelöscht.                                                                                               |
| **Zu Custom Commands V2 zurückwechselst**          | Bleiben auf deinem Bot erhalten. Deine Flows laufen nicht mehr, also liest oder schreibt niemand sie, bis du V3 wieder einschaltest.                     |
| **Einen Test ausführst**                           | Werden nicht verändert. Testläufe lesen deine echten Daten, schreiben aber nie hinein. Siehe [Testläufe](/de/docs/custom-commands/executions#test-runs). |

## Wer gespeicherte Daten sehen kann {#permissions}

Wer Custom Commands bearbeiten kann, kann auch gespeicherte Daten durchsuchen und ändern: der Server-Eigentümer, Co-Owner und [Trusted Admins](/de/docs/scnx/guilds/trusted-admins#permissions) mit der Berechtigung **Eigener Bot**: Bot-Administrator oder **Eigener Bot**: Konfigurationen & Eigene Befehle ändern und neu laden.

Gespeicherte Daten können Informationen über deine Mitglieder enthalten, etwa ihre Benutzer-IDs und alles, was deine Flows über sie festhalten. Wenn du Mitgliederdaten speicherst, sei deinen Mitgliedern gegenüber offen damit und behalte nur, was du wirklich brauchst.
