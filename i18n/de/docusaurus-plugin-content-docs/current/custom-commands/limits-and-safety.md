---
sidebar_position: 11
title: "Tarife, Limits & Sicherheit"
description: "Wie Aktivitätsbudgets und Ausführungslimits deine Flows und deinen Server schützen, was dein Bot von Discord braucht und wer Custom Commands ändern darf."
---

# Tarife, Limits & Sicherheit

Deine Flows laufen auf deinem eigenen Bot, mit den Discord-Berechtigungen deines Bots. Das macht sie sehr leistungsfähig, und genau deshalb läuft jeder Server innerhalb einiger Limits. Sie stoppen einen außer Kontrolle geratenen Flow, bevor er deine Kanäle überflutet, und sie halten die Plattform für alle schnell.

Die meisten Server bemerken diese Limits nie. Diese Seite erklärt, welche es gibt, was passiert, wenn du eines erreichst, und wie du die Kontrolle behältst.

## Aktivitätsbudget {#activity-budget}

Alles, was deine Flows tun, verbraucht echte Ressourcen: Dein Bot verarbeitet jeden Schritt, und die meisten Schritte rufen Discord auf, das begrenzt, wie schnell Bots Anfragen stellen dürfen. Das **Aktivitätsbudget** deines Servers legt fest, wie viel deine Flows in einem bestimmten Zeitraum tun können.

Die Nutzung wird über drei Zeitfenster erfasst: **Diese Stunde**, **Heute** und **Diese Woche**. Die Karte **Aktivitätsbudget** in der Custom-Commands-Übersicht zeigt ungefähr, wie viel Spielraum in jedem davon noch übrig ist, von "Fast alles noch frei" bis "Kein Spielraum mehr".

![Die Karte Aktivitätsbudget mit den Zeitfenstern Diese Stunde, Heute und Diese Woche, eines davon bei "Etwas Spielraum übrig", und dem aufgeklappten Text "So funktionieren Aktivitätsbudgets"](@site/docs/assets/custom-commands/en/activity-budget.png)

Oben auf der Karte steht ein Zustand:

| Zustand           | Was er bedeutet                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Gesund**        | Reichlich Spielraum.                                                                                              |
| **Wird voll**     | Deine Flows nähern sich dem Budget. Noch ist nichts pausiert.                                                     |
| **Am Limit**      | Manche Aktionen werden gerade abgelehnt.                                                                          |
| **Pausiert**      | Dein Server liegt deutlich über seinem Budget, und neue Ausführungen werden übersprungen, bis es sich erholt hat. |
| **Keine Messung** | Das Budget konnte nicht gelesen werden, zum Beispiel weil dein Bot offline ist.                                   |

Manche Arten von Aktionen haben ihre eigenen, separaten Limits, weil sie mehr Gewicht haben:

- **Direktnachrichten**
- **Externe Anfragen**
- **Massen- & destruktive Aktionen**, etwa Kanäle löschen, Mitglieder bannen oder kicken

Wenn eine davon stark ausgelastet ist, sagt dir das die Karte, zum Beispiel "Direktnachrichten sind stark ausgelastet und könnten begrenzt werden".

### Sieh nach, welche Flows am aktivsten sind {#intensity}

Deine aktivsten Flows zeigen auf ihrer Karte einen Aktivitäts-Chip: **Wenig Aktivität**, **Mittlere Aktivität**, **Hohe Aktivität** oder **Sehr hohe Aktivität**. Er zeigt, wie viel der heutigen Aktivität auf diesen Flow entfällt, im Vergleich zu deinen anderen Flows. Module zeigen die höchste Stufe, die ihre Flows heute erreicht haben.

Wenn du deinem Budget nahe kommst, geh deine aktivsten Flows durch:

1. Such in der Übersicht die Flows, die mit **Hohe Aktivität** oder **Sehr hohe Aktivität** markiert sind.
2. Prüfe ihren Trigger. Ein Trigger, der bei jeder Nachricht oder jeder Reaktion auslöst, ist die übliche Ursache. Beschränke ihn auf die Kanäle, in denen er gebraucht wird, oder schalte das Ignorieren von Bots ein.
3. Füge früh eine Bedingung hinzu, damit der Flow aufhört, bevor er Arbeit macht, wenn er gar nicht handeln muss.
4. Füge in den Trigger-Einstellungen einen Cooldown hinzu: **Cooldown aktivieren**, dann wähle, ob er **Gilt pro** **User**, **Kanal** oder **Server**, und die **Dauer**. Ausführungen während des Cooldowns werden übersprungen und kosten nichts.
5. Halte Ausschau nach Schleifen, die für jeden Eintrag Discord aufrufen, etwa um jedes Mitglied abzurufen. Speichere, was du brauchst, statt es bei jeder Ausführung neu abzurufen.

### Was passiert, wenn das Budget erreicht ist {#budget-reached}

Wenn ein Budget erreicht ist, pausieren die betroffenen Aktionen. In der Übersicht siehst du dann "Die Automatisierungen deines Servers sind sehr aktiv".

- **Schritte, die über das Budget gehen würden, werden nicht ausgeführt.** Die Ausführung schlägt bei diesem Schritt mit `LIMIT_EXCEEDED` fehl. Steht der Schritt in einem Block **Versuchen**, läuft stattdessen der Zweig **Bei Fehler**.
- **Bleibt dein Server deutlich über seinem Budget**, werden neue Ausführungen übersprungen, bis es sich erholt hat. Sie erscheinen als **Übersprungen** im [Ausführungsverlauf](/de/docs/custom-commands/executions).
- **Alles läuft von selbst weiter**, sobald sich das Budget erholt, meist innerhalb einer Stunde. Du musst nichts tun.

Deine Flows, Einstellungen und gespeicherten Daten sind davon nicht betroffen.

Damit ein wichtiger Schritt weiter funktioniert oder um Mitgliedern zu sagen, was los ist, packe den Schritt in einen Block **Versuchen**. Prüfe im Zweig **Bei Fehler**, ob der Fehlercode `LIMIT_EXCEEDED` ist, und antworte mit etwas wie "Gerade ist viel los, bitte versuche es später noch einmal." Ohne das bekommt die Person, die den Befehl genutzt hat, vielleicht gar keine Antwort.

Hat der SCNX-Support die Limits deines Servers erhöht, zeigt die Karte "Zusätzlicher Spielraum vom SCNX-Support" und wann das endet.

### Tarife und das Budget {#plans}

Wie viel Aktivität dein Server bekommt, hängt von deinem Tarif ab. Höhere Tarife bekommen deutlich größere Budgets. Während der Beta und der ersten Zeit nach dem Release bekommen manche Tarife außerdem einen vorübergehenden Boost. Die Karte sagt dir, wenn dein Server einen hat.

Wir überprüfen und passen diese Limits während und nach der Beta regelmäßig an. Die Limits für Custom Commands V2 ändern sich nicht.

Du willst mehr Spielraum? Klicke auf der Karte auf **Upgrade** oder öffne die Preisseite deines Servers. Siehe [Deinen Tarif upgraden](/de/docs/scnx/guilds/plans#upgrade).

![Das Banner "Die Automatisierungen deines Servers sind sehr aktiv" in der Karte Aktivitätsbudget mit seinem Upgrade-Button](@site/docs/assets/custom-commands/en/upgrade-page.png)

## Limits für eine einzelne Ausführung {#run-limits}

Jede Ausführung hat außerdem eigene Limits. Sie fangen Fehler ab, etwa eine Schleife, die nie endet:

| Limit                                                        | Was passiert                                                                                                               |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Zu viele Schritte in einer Ausführung                        | Die Ausführung endet mit **Limit überschritten**. Schleifen zählen jeden Durchlauf, und aufgerufene Flows zählen auch mit. |
| Eine Ausführung dauert zu lange                              | Die Ausführung endet mit **Limit überschritten**.                                                                          |
| Eine Schleife wiederholt sich zu oft                         | Der Schleifen-Schritt schlägt mit `LIMIT_EXCEEDED` fehl.                                                                   |
| Flows rufen sich zu tief gegenseitig auf                     | Der Schritt **Anderen Flow ausführen** schlägt mit `LIMIT_EXCEEDED` fehl.                                                  |
| Zu viele Ausführungen in kurzer Zeit                         | Weitere Ausführungen werden mit dem Grund "Server-Ratenlimit" **Übersprungen**.                                            |
| Zu viele Wartepunkte oder geplante Ausführungen gleichzeitig | Der Schritt, der einen weiteren hinzufügen würde, schlägt mit `LIMIT_EXCEEDED` fehl.                                       |
| Speicher ist voll                                            | Schritte, die neue Daten speichern, schlagen fehl. Siehe [Datenspeicher](/de/docs/custom-commands/storage#usage).          |

Es gibt auch Limits dafür, wie groß ein Flow sein darf. Ein Flow mit zu vielen Schritten oder zu tief verschachtelten Zweigen kann als Entwurf gespeichert, aber nicht aktiviert werden. Der Editor sagt dir, was du ändern musst, meist einen Teil des Flows in einen zweiten Flow auszulagern und diesen aufzurufen.

## Schutzmaßnahmen {#protections}

Zusätzlich zu den Limits achtet SCNX auf Flows, die deinem Server oder deinen Mitgliedern schaden könnten.

- **Manche Flows lassen sich gar nicht aktivieren.** Ein Flow, der deiner gesamten Mitgliederliste eine DM schickt, jeden Kanal oder jede Rolle löscht, jedes Mitglied bannt oder kickt, eine einzelne Person mit DMs überflutet oder deine Mitgliederliste an einen externen Dienst schickt, wird abgelehnt. Der Editor nennt den Schritt und erklärt, warum.

  Das sind die Prüfungen, die das Aktivieren blockieren:

  | Der Editor sagt                                                                      | Was du ändern solltest                                                                                                             |
  | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
  | "Diese Schleife sendet eine DM an die gesamte vom Server abgerufene Mitgliederliste" | Schick DMs nur an die Mitglieder, die sie brauchen, etwa an die mit einer bestimmten Rolle oder an die, die sich angemeldet haben. |
  | "Diese Schleife löscht Kanäle oder Rollen, die vom gesamten Server abgerufen wurden" | Durchlaufe eine Liste von Kanälen oder Rollen, die du ausgewählt hast.                                                             |
  | "Diese Schleife bannt oder kickt die gesamte vom Server abgerufene Mitgliederliste"  | Handle bei bestimmten Mitgliedern, nicht bei allen.                                                                                |
  | "Diese Schleife sendet wiederholt DMs an denselben einzelnen Empfänger"              | Schick eine Nachricht mit allem darin.                                                                                             |

- **Riskante Muster bekommen eine Warnung.** Zum Beispiel eine destruktive Aktion in einer Schleife, ein Zeitplan, der sehr oft läuft, oder ein Flow, der sich selbst erneut einplant. Du kannst sie trotzdem speichern, aber prüfe, dass sie nicht außer Kontrolle geraten können.
- **Destruktive Aktionen und DMs sind während der Ausführung begrenzt.** Jede Ausführung und jeder Server über die Zeit kann nur eine bestimmte Menge löschen, bannen, kicken oder per DM anschreiben. Die Limits wachsen mit der Größe deines Servers. Eine Ausführung, die darüber hinausgeht, wird mit `DESTRUCTIVE_LIMIT_EXCEEDED` oder `LIMIT_EXCEEDED` gestoppt.
- **Autocomplete-Flows können nichts verändern.** Sie laufen bei jedem Tastendruck, deshalb können sie nur Dinge nachschlagen und antworten.
- **Testläufe sind simuliert.** Ein [Testlauf](/de/docs/custom-commands/executions#test-runs) sendet, ändert oder löscht nie etwas auf deinem Server.

Automatisierte Aktionen deiner Flows liegen nach unseren [Nutzungsbedingungen](https://corp.scootkit.com/docs/scnx/policies/terms-of-service/) in der Verantwortung deines Servers, genau wie eine Aktion, die ein Moderator von Hand ausführt. Bitte lies auch die [Nutzungsrichtlinien für Custom Commands](https://corp.scootkit.com/docs/scnx/community-services/custom-commands-guidelines/). Apps, die gegen unsere Richtlinien verstoßen, können von SCNX ausgeschaltet werden. Du siehst dann "SCNX hat diese App aus Richtliniengründen deaktiviert" bei der App.

## Notaus {#emergency-stop}

Wenn etwas schiefgeht, kannst du jeden Flow und jedes Modul auf deinem Server auf einmal stoppen.

1. Such in der Custom-Commands-Übersicht die Karte **Notaus** und klicke auf **Notaus**.
2. Bestätige mit **Alles stoppen**. Dein Bot startet neu und nichts läuft mehr.

Deine Flows und Module behalten ihre Einstellungen, und nichts wird gelöscht. Während des Stopps zeigt die Übersicht "Custom-Commands sind gestoppt". Klicke auf **Custom-Commands wieder einschalten**, wenn du so weit bist. Jeder Flow und jedes Modul kehrt genau in den vorherigen Zustand zurück, und dein Bot startet erneut neu.

Geht der Stopp nicht durch, bietet die Karte **Stattdessen den Bot stoppen** an. Das stoppt deinen ganzen Bot, bis du ihn wieder startest.

## Was dein Bot von Discord braucht {#bot-permissions}

Flows handeln als dein Bot, also können sie nur tun, was dein Bot darf.

- **Berechtigungen.** Dein Bot braucht für jede Aktion deiner Flows die passende Discord-Berechtigung, und zwar in dem Kanal, in dem die Aktion passiert. Eine Nachricht senden braucht **Nachrichten senden**, eine Rolle vergeben braucht **Rollen verwalten** und so weiter. Fehlt eine Berechtigung, schlägt der Schritt mit `MISSING_PERMISSIONS` fehl. Siehe [Missing Access / Missing Permissions](/de/docs/custom-bot/troubleshooting#missing-access).
- **Rollenreihenfolge.** Dein Bot kann nur Rollen vergeben, entfernen oder bearbeiten, die unter seiner eigenen höchsten Rolle liegen. Schieb die Rolle deines Bots über die Rollen, die deine Flows verwalten.
- **Privilegierter Zugriff.** Manche Trigger, etwa solche, die Nachrichteninhalte oder Mitglieder-Events lesen, brauchen privilegierten Zugriff, den du für deinen Bot im Discord Developer Portal einschaltest. Der Trigger zeigt ein Abzeichen, wenn er ihn braucht. Starte deinen Bot nach dem Einschalten neu. Bis dahin zeigt der Editor "Dieser Flow benötigt einen Bot-Neustart, bevor sein Auslöser reagieren kann".
- **Apps.** Bevor du eine App installierst, listet die Importseite die **Bot-Berechtigungen** auf, die sie braucht. Nach der Installation sagt dir die **Übersicht** der App, wenn deinem Bot eine fehlt.

## Wer Custom Commands ändern darf {#permissions}

| Was                                                                                                     | Wer                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Flows und Module bauen und bearbeiten, gespeicherte Daten und den Ausführungsverlauf ansehen und ändern | Der Server-Eigentümer, Co-Owner und [Trusted Admins](/de/docs/scnx/guilds/trusted-admins#permissions) mit **Eigener Bot**: Bot-Administrator oder **Eigener Bot**: Konfigurationen & Eigene Befehle ändern und neu laden |
| Notaus                                                                                                  | Der Server-Eigentümer, Co-Owner und Trusted Admins mit **Eigener Bot**: Bot-Administrator oder **Eigener Bot**: Bot verwalten                                                                                            |
| V3 einschalten oder zu V2 zurückwechseln                                                                | Der Server-Eigentümer und Co-Owner                                                                                                                                                                                       |
| Ein Modul im Marktplatz veröffentlichen                                                                 | Mitglieder der veröffentlichenden Organisation mit der Berechtigung "Inhalte verwalten"                                                                                                                                  |

:::caution Flows bearbeiten heißt, die Berechtigungen des Bots zu nutzen
Wer Custom Commands bearbeiten kann, kann einen Flow bauen, der alle Berechtigungen deines Bots nutzt. Über einen Flow könnte ein Trusted Admin Rollen vergeben oder Mitglieder bannen, selbst wenn seine eigenen Berechtigungen das nicht erlauben. Gib Zugriff auf Custom Commands nur Leuten, denen du auch deinen Bot anvertrauen würdest.
:::
