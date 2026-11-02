---
sidebar_position: 5
title: "Werte, Variablen & Nachrichten"
description: "Woher die Werte in einem Flow von Custom Commands V3 kommen, wie du sie an einen Schritt übergibst und wie du sie in Texte und Nachrichten einfügst."
---

# Werte, Variablen & Nachrichten {#values}

:::caution Diese Dokumentation ändert sich während der Beta
Custom Commands V3 ist in einer aktiven Beta, und wir ändern unterwegs noch vieles. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation. Bis dahin können einige Details auf dieser Seite veraltet sein.
:::

Schritte arbeiten mit Werten: einem Mitglied, einem Kanal, einer Zahl, einem Stück Text, einer Nachricht. Jede Eingabe eines Schritts braucht einen Wert, und die meisten Schritte geben neue Werte zurück, die spätere Schritte nutzen können. Erst wenn du Werte von einem Schritt zum nächsten weitergibst, wird aus einer Liste von Schritten ein Flow, der auf das reagiert, was tatsächlich passiert ist.

## Woher Werte kommen {#sources}

Wenn du bei einer Eingabe auf **Wert verwenden** klickst, listet der Tab **Daten** im Bereich jeden Wert auf, den du an dieser Stelle verwenden kannst, gruppiert nach seiner Herkunft:

| Gruppe                 | Was sie enthält                                                                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Auslöser**           | Die Werte, die dein Trigger liefert, zum Beispiel das neue Mitglied, die Nachricht oder die Interaktion. Auch die Optionen eines Slash-Commands findest du hier.  |
| **Schritte**           | Die Werte, die frühere Schritte zurückgegeben haben, zum Beispiel "Gesendete Nachricht" eines Schritts **Nachricht senden**, beschriftet mit ihrer Schrittnummer. |
| **Flow-Eingaben**      | Die Parameter, die ein anderer Flow übergibt, bei Flows mit einem **Manueller Auslöser** oder einer **Geplante Ausführung**.                                      |
| **Moduleinstellungen** | Die Einstellungen des Moduls, zu dem dieser Flow gehört. Nur in [Modulen](/de/docs/custom-commands/modules).                                                      |
| **Speicher**           | Deine [Speicherfelder](/de/docs/custom-commands/storage). Wenn du eines auswählst, wird vor diesem Schritt ein Schritt eingefügt, der es ausliest.                |

Statt eines Werts aus dem Flow kann eine Eingabe auch einen **Fester Wert** haben: einen Kanal, den du auswählst, eine Zahl oder einen Text, den du eintippst, eine Farbe, eine Dauer. Ein fester Wert ist bei jeder Ausführung gleich. Siehe [Feste Werte](#fixed).

### Welche Werte du wo verwenden kannst {#scope}

- **Ein Wert ist nur unterhalb des Schritts verfügbar, der ihn erzeugt.** Der Tab **Daten** bietet nur Werte aus Schritten über der Eingabe an, die du gerade ausfüllst.
- **Werte, die in einem Zweig entstehen, bleiben in diesem Zweig.** Ein Schritt in **Wenn wahr** kann sein Ergebnis nicht an einen Schritt unter dem **Wenn** weitergeben, weil dieser Schritt auch läuft, wenn die Bedingung falsch war.
- **Schleifenwerte bleiben in der Schleife.** Der aktuelle Eintrag einer Schleife **Für jeden Eintrag** oder die Rundennummer eines **Wiederholen** existiert nur für die Schritte darin.
- **Moduleinstellungen und Speicherfelder bleiben in ihrem Modul.** Flows außerhalb eines Moduls nutzen die eigenen Speicherfelder des Servers.

Wenn du einen Schritt so verschiebst, dass eine dieser Regeln verletzt wird, fragt der Editor vorher nach und listet die Eingaben auf, die er leeren würde. Eingaben, die danach einen fehlenden Wert haben, zeigen **Verbindung verloren**, und der Tab **Probleme** sagt dir, warum, zum Beispiel "Ein Wert wird vor dem Schritt verwendet, der ihn erzeugt."

![Der Tab Daten im Flow-Bereich beim Ausfüllen der Eingabe Mitglied von "Mitglied hat Rolle", mit "Befehlsnutzer" unter Beste Treffer](@site/docs/assets/custom-commands/en/ccv3-data-picker.png)

## Einen Wert auswählen {#pick}

1. Klicke auf einen Schritt und suche die Eingabe im Tab **Schritt**.
2. Klicke auf **Wert verwenden**. Der Tab **Daten** öffnet sich, mit der Überschrift "Befüllen:" und dem Namen der Eingabe.
3. Klicke bei dem gewünschten Wert auf **Verwenden**, oder öffne ihn, um eines seiner Felder auszuwählen.

Der Tab **Daten** zeigt zuerst **Beste Treffer**: die Werte, die sofort zur Eingabe passen. Darunter zeigt **Durchsuchen** alles andere.

- **Suche** über alle Werte, zum Beispiel nach "Rollen Name".
- **Öffne einen Wert**, um seine Felder zu sehen. Ein Mitglied hat Felder wie **Anzeigename**, **Erwähnung**, **Rollen** und **Beigetreten am**. Wähle ein Feld aus, um nur diesen Teil zu verwenden.
- **Umwandlungen** schlagen einen Schritt vor, der einen Wert in das umwandelt, was die Eingabe braucht, zum Beispiel eine Liste zu Text zusammenfügen. Wenn du eine auswählst, wird dieser Schritt für dich hinzugefügt.
- Werte, die nicht zur Eingabe passen, sind ausgeblendet. Schalte **Unpassende Werte ausblenden** aus, um sie zu sehen und zu erfahren, warum sie nicht passen.

Um einen Wert später zu ändern, öffne das Menü der Eingabe: **Wert ändern** wählt einen anderen aus, **Stattdessen festen Wert verwenden** und **Stattdessen Text-Vorlage verwenden** wechseln die Art, und **Wert entfernen** leert sie. Jede Änderung lässt sich mit `Ctrl+Z` rückgängig machen.

### Listen {#lists}

Manche Werte sind Listen, zum Beispiel die Rollen eines Mitglieds. Wenn du eine Liste öffnest, kannst du **Alle Einträge**, den **Erster Eintrag**, den **Letzter Eintrag** oder einen Eintrag nach Nummer (**Eintrag Nr.**) wählen. Um etwas für jeden Eintrag zu tun, nutze einen Schritt **Für jeden Eintrag**. Um eine Liste als Text anzuzeigen, bietet **Umwandlungen** an, ihre Einträge mit Kommas zu verbinden.

### Werte, die leer sein können {#empty}

Manche Werte sind mit **kann leer sein** markiert, zum Beispiel das Mitglied einer Interaktion, die in einer DM passiert ist, oder eine Option eines Slash-Commands, die nicht erforderlich ist. Wenn du so einen Wert in einer Eingabe verwendest, die einen Wert braucht, zeigt der Editor **Kann leer sein** und bietet dir drei Möglichkeiten an, damit umzugehen:

| Auswahl                                                                        | Was sie macht                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ersatzwert verwenden**                                                       | Fügt einen Schritt **Ersatzwert verwenden, wenn leer** hinzu, in dem du festlegst, was stattdessen verwendet wird.                                                                                                                           |
| **Diesen und die folgenden Schritte nur ausführen, wenn der Wert gesetzt ist** | Packt den Schritt und alles darunter in **Wenn ein Wert da ist**.                                                                                                                                                                            |
| **Ignorieren, ein leerer Wert ist hier in Ordnung**                            | Lässt alles, wie es ist. Nutze das, wenn du weißt, dass der Wert immer gesetzt ist, zum Beispiel ein Mitglied in einem Befehl, der in DMs nicht erlaubt ist. Ignorierte Warnungen findest du im Tab **Probleme** unter **Ignoriert** wieder. |

Wenn du die Warnung ignorierst und der Wert doch leer ist, schlägt der Schritt fehl, wenn der Flow läuft.

Manche Werte können auch eine von mehreren Arten sein, zum Beispiel eine Option, die entweder einen Benutzer oder eine Rolle annimmt. **Nach Art verzweigen** führt für jede Art einen anderen Zweig aus, oder der Tab **Probleme** bietet an, nur die passende Art zu verwenden.

Jeder Werttyp und seine Felder sind unter [Werttypen](/de/docs/custom-commands/value-types) aufgeführt.

## Feste Werte {#fixed}

Klicke bei einer leeren Eingabe auf **Fester Wert** oder in ihrem Menü auf **Stattdessen festen Wert verwenden**. Was du dann bekommst, hängt von der Eingabe ab:

| Eingabetyp              | So füllst du sie aus                                                                                                                                                                                                               |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text                    | Tippe ihn ein. Drücke Enter für einen echten Zeilenumbruch.                                                                                                                                                                        |
| Zahlen                  | Tippe eine Zahl ein. Manche Eingaben zeigen ein **Min** und **Max**.                                                                                                                                                               |
| Ja/Nein                 | Wähle **Ja / aktiviert** oder **Nein / deaktiviert**.                                                                                                                                                                              |
| Kanal, Rolle, Mitglied  | Wähle ihn von deinem Server aus. Wenn die Liste nicht lädt, kannst du stattdessen eine Discord-ID einfügen. Auch das Einfügen einer Erwähnung oder eines Links funktioniert: "Wir haben die ID aus dem Eingefügten herausgelesen." |
| Dauer                   | Eine Zahl und eine Einheit: **Sekunden**, **Minuten**, **Stunden** oder **Tage**.                                                                                                                                                  |
| Datum & Uhrzeit         | Wähle es aus. Es verwendet deine lokale Zeitzone.                                                                                                                                                                                  |
| Farbe                   | Wähle sie aus oder tippe sechs Hex-Ziffern wie `#5865f2` ein.                                                                                                                                                                      |
| Auswahl aus einer Liste | Wähle einen der Werte.                                                                                                                                                                                                             |
| Liste oder Zuordnung    | Klicke für jeden Eintrag auf **Eintrag hinzufügen**. Eine Zuordnung braucht außerdem einen **Schlüssel** pro Eintrag.                                                                                                              |
| Nachricht               | Öffnet den Nachrichten-Editor. Siehe [Werte in Nachrichten](#messages).                                                                                                                                                            |
| Modal                   | Öffnet den Modal-Editor mit einem **Modal-Titel** und **Modal-Felder**.                                                                                                                                                            |

Manche Eingaben nehmen nur einen Wert aus dem Flow an und sagen "Dieser Eingabewert nimmt nur einen Wert an, der in einem früheren Schritt entsteht." Wenn ein Kanal oder eine Rolle, die du ausgewählt hast, auf Discord gelöscht wurde, zeigt die Eingabe "passt zu nichts auf diesem Server". Wähle ihn erneut aus.

## Werte in Text einfügen {#text}

Viele Eingaben nehmen Text an, zum Beispiel einen Nickname, einen Kanalnamen oder einen Grund. So mischst du festen Text mit Werten:

1. Tippe deinen Text als festen Wert in die Eingabe.
2. Klicke an der Stelle, an der ein Wert stehen soll, auf **Wert einfügen** und wähle ihn aus.
3. Der Wert erscheint als Chip in deinem Text. Mit der Rücktaste entfernst du den ganzen Chip.

Wenn die Eingabe schon einen Wert aus dem Flow verwendet, öffne zuerst ihr Menü und wähle **Stattdessen Text-Vorlage verwenden**.

In Text passen nur Werte, die sich als Text darstellen lassen: Text, Zahlen, IDs, Links und Ja/Nein-Werte. Bei einem Mitglied, einem Kanal oder einer Rolle öffnest du den Wert und wählst ein Feld aus, zum Beispiel **Anzeigename** oder **Erwähnung**. Datumswerte musst du zuerst in Text umwandeln, zum Beispiel mit **Discord-Timestamp formatieren**, das sie in der eigenen Zeitzone jeder lesenden Person anzeigt.

Der Text wird zusammengesetzt, wenn der Schritt läuft. Ist ein Wert in diesem Moment leer, bleibt diese Stelle leer.

## Werte in Nachrichten {#messages}

Schritte, die eine Nachricht senden oder bearbeiten, wie **Nachricht senden**, **Auf Interaktion antworten** oder **Direktnachricht senden**, haben eine Nachrichten-Eingabe. Klicke darauf, um den Nachrichten-Editor zu öffnen, denselben, den du aus dem Rest des Dashboards kennst. Du kannst Text schreiben, Embeds hinzufügen, das Komponenten-Layout nutzen und Buttons hinzufügen.

![Der Nachrichten-Editor, geöffnet aus einem Schritt Nachricht senden, mit dem Blitz-Button Wert einfügen und hervorgehobenen Werte-Platzhaltern im Text](@site/docs/assets/custom-commands/en/ccv3-message-editor-insert-value.png)

Innerhalb eines Flows bekommen Textfelder im Nachrichten-Editor einen zusätzlichen Blitz-Button, **Wert einfügen**. Du findest ihn beim Nachrichteninhalt, bei Embed-Beschreibungen, Embed-Feldwerten, Textanzeigen, Abschnittstexten und Button-Beschriftungen. So nutzt du ihn:

1. Klicke an die Stelle im Text, an der der Wert stehen soll.
2. Klicke auf **Wert einfügen** und wähle den Wert aus.
3. Der Wert erscheint als hervorgehobener Platzhalter `{var:...}`. Lass ihn genau so, wie er ist.

Dein Bot ersetzt den Platzhalter jedes Mal durch den echten Wert, wenn er die Nachricht sendet. Ein leerer Wert lässt diese Stelle leer. Wenn du den Schritt löschst, auf den ein Platzhalter verweist, warnt der Tab **Probleme**: "Eine Nachricht verwendet den Wert ..., der hier nicht mehr verfügbar ist", und ein Testlauf zeigt "Ein in einer Nachricht verwendeter Wert fehlte".

Zwei Wege, eine Nachricht zu bauen:

- **Direkt im sendenden Schritt.** Für die meisten Nachrichten reicht das.
- **Mit einem Schritt Nachricht erstellen**, dessen **Nachricht** du dann an einen oder mehrere sendende Schritte übergibst. Praktisch, wenn du dieselbe Nachricht mehrmals sendest oder sie später mit **Nachricht bearbeiten** bearbeitest.

Nachrichten in Flows unterstützen außerdem:

- **[Globale Parameter](/de/docs/custom-bot/global-parameters)** wie `%guildName%` oder `%botName%`, dieselben, die du auch im Rest der Nachrichten deines Bots verwendest.
- **Nachrichten-Parameter**, ein Abschnitt unter der Nachrichten-Eingabe sendender Schritte. Klicke auf **Parameter hinzufügen**, gib ihm einen **Parametername** und setze seinen **Wert** wie bei jeder anderen Eingabe. Jedes `%name%` im Nachrichtentext wird dann durch diesen Wert ersetzt.
- **Buttons und Auswahlmenüs, die einen Flow starten.** Wähle **Flow starten** als Aktion des Buttons und wähle den Flow aus. Siehe [Buttons, Auswahlmenüs und Modals](/de/docs/custom-commands/triggers#components).

### Wo `{var:...}`-Platzhalter funktionieren {#placeholders}

Platzhalter werden in Nachrichten ersetzt: im Nachrichtentext, in Embeds, Buttons, Auswahlmenüs, Modals und im Komponenten-Layout. Überall sonst werden sie genau so gesendet, wie sie geschrieben sind. Wenn du einen `{var:...}`-Platzhalter in eine einfache Text-Eingabe tippst, zum Beispiel einen Nickname oder einen Thread-Namen, warnt dich der Tab **Probleme**, dass er "genau so gesendet" wird. Nutze dort stattdessen eine [Text-Vorlage](#text).

Moduleinstellungen vom Typ **Nachricht** werden von Server-Admins auf der Einstellungsseite ausgefüllt, wo es keine Werteauswahl gibt. Damit ein Flow Werte in so eine Nachricht einsetzen kann, gib der Einstellung im Konfigurations-Layout des Moduls **Parameter**. Admins können dann `%name%` in ihrer Nachricht verwenden, und der sendende Schritt zeigt unter **Nachrichten-Parameter** eine Eingabe pro Parameter. Siehe [Moduleinstellungen](/de/docs/custom-commands/modules#settings).

## Beispiel: die Willkommens-Vorlage {#example}

Die Vorlage **Neue Mitglieder begrüßen** zeigt all das in vier Schritten. Erstelle einen Flow daraus, um mitzumachen.

1. Der Trigger **Mitglied getreten** liefert das neue **Mitglied**.
2. **Server abrufen** liefert den **Server**, mit Feldern wie **Name** und **Mitgliederanzahl**.
3. **Großbuchstaben** nimmt den **Anzeigename** des Mitglieds als **Text** und liefert das **Ergebnis** in Großbuchstaben.
4. **Nachricht erstellen** baut die Nachricht. Ihr Text verwendet Platzhalter für die **Erwähnung** des Mitglieds, den **Name** des Servers, das großgeschriebene **Ergebnis** aus Schritt 3 und die **Mitgliederanzahl** des Servers.
5. **Nachricht senden** sendet sie. Ihre Eingabe **Nachricht** verwendet die **Nachricht**, die Schritt 4 zurückgegeben hat.

Der **Kanal** von **Nachricht senden** ist in der Vorlage ein Platzhalter-Kanal. Wähle dort deinen Willkommenskanal aus, bevor du den Flow einschaltest. Wenn jemand beitritt, postet dein Bot etwas wie "Hello @Sam, welcome to My Server! Make some noise for SAM 🎉 (member #1234)".

:::note Dieser Trigger braucht den Server Members Intent
**Mitglied getreten** braucht den privilegierten Server Members Intent. Schalte ihn für deinen Bot im Discord Developer Portal ein, falls er noch nicht an ist.
:::

## Beispiel: ein /afk-Befehl {#example-afk}

Dieser Flow setzt "[AFK]" vor den Nickname eines Mitglieds und antwortet mit seinem Grund. Er nutzt eine Text-Vorlage, eine optionale Option und einen Ersatzwert.

1. Erstelle einen leeren Flow mit einem Trigger **Slash-Befehl**. Setze **Befehlsname** auf `afk`. Füge eine Option `reason` vom Typ Text hinzu und lass **Erforderlich** aus.
2. Füge **Mitglied-Nickname setzen** hinzu. Setze **Mitglied** mit **Wert verwenden** auf **Befehlsnutzer**. Wähle bei der Warnung **Kann leer sein** die Option **Ignorieren, ein leerer Wert ist hier in Ordnung**, weil der Befehl in DMs aus ist.
3. Tippe in **Nickname** `[AFK] `, klicke auf **Wert einfügen** und wähle den **Anzeigename** von **Befehlsnutzer**.
4. Füge **Auf Interaktion antworten** hinzu. Schreibe in seinen **Inhalt** "Du bist jetzt AFK: " und füge mit **Wert einfügen** die Option `reason` ein.
5. Weil `reason` optional ist, würde die Antwort nach dem Doppelpunkt enden, wenn jemand sie weglässt. Um das zu vermeiden, füge vor der Antwort einen Schritt **Ersatzwert verwenden, wenn leer** hinzu, mit der Option `reason` als **Wert** und "kein Grund angegeben" als **Ersatzwert**, und füge stattdessen dessen Ergebnis ein.
6. Speichere, schalte den Flow ein und führe `/afk reason:lunch` aus.

Häufige Probleme mit diesem Flow:

- **Die Ausführung schlägt wegen einer fehlenden Berechtigung fehl.** Dein Bot braucht **Spitznamen verwalten**, und seine Rolle muss über der höchsten Rolle des Mitglieds stehen.
- **Beim Server-Eigentümer funktioniert es nie.** Discord lässt Bots den Nickname des Eigentümers nicht ändern. Siehe [Nickname des Server-Eigentümers kann nicht geändert werden](/de/docs/custom-bot/troubleshooting#owner-nickname).
- **Lange Namen schlagen fehl.** Discord begrenzt die Länge von Nicknames, deshalb kann `[AFK]` plus ein langer Anzeigename abgelehnt werden.

## Häufige Fehler {#mistakes}

| Was passiert                                      | Warum, und wie du es behebst                                                                                                                                                                                    |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Die Nachricht zeigt `{var:...}` statt eines Werts | Der Platzhalter wurde in eine einfache Text-Eingabe getippt, nicht in eine Nachricht. Nutze dort eine Text-Vorlage mit **Wert einfügen**.                                                                       |
| Ein Mitglied erscheint als Zahl oder gar nicht    | Du hast das falsche Feld eingefügt. Öffne das Mitglied und wähle **Erwähnung** oder **Anzeigename**.                                                                                                            |
| Du findest einen Wert im Tab **Daten** nicht      | Er passt nicht zur Eingabe, oder er kommt aus einem Schritt unter diesem oder aus einem anderen Zweig. Schalte **Unpassende Werte ausblenden** aus, oder verschiebe den Schritt.                                |
| **Falscher Typ** bei einer Eingabe                | Der Wert ist von einer anderen Art, als die Eingabe braucht. Wähle eines seiner Felder, oder nutze die Umwandlung, die der Tab **Daten** anbietet.                                                              |
| `%name%` bleibt in der Nachricht stehen           | Am sendenden Schritt ist kein Nachrichten-Parameter mit diesem Namen gesetzt, und es ist auch kein [globaler Parameter](/de/docs/custom-bot/global-parameters). Füge ihn unter **Nachrichten-Parameter** hinzu. |
