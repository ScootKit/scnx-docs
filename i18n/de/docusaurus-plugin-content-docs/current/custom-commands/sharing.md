---
sidebar_position: 9
title: "Teilen & der Marktplatz"
description: "Installiere Apps aus dem Marktplatz, halte sie aktuell, teile deine eigenen Module per Link und veröffentliche sie, damit alle sie finden können."
---

# Teilen & der Marktplatz

In Custom Commands V3 teilst du Automatisierungen als **Module**. Ein Modul bündelt Flows mit ihren Einstellungen und ihrem Datenspeicher, sodass jeder, der es hinzufügt, ein komplettes, funktionierendes Feature bekommt. Ein Modul, das du aus dem Marktplatz installierst, heißt **App**.

Du kannst Apps installieren, die andere gebaut haben, dein eigenes Modul mit einem privaten Link an einen Freund schicken oder es im Marktplatz veröffentlichen, damit jeder SCNX-Server es finden kann.

## Eine App installieren {#install}

1. Such dir eine App im [Marktplatz](https://scnx.app/marketplace/modules) aus oder öffne einen Teilen-Link, den dir jemand geschickt hat.
2. Klicke auf **Zum Server hinzufügen**.
3. Wähle deinen Server. Nur Server, auf denen Custom Commands V3 eingeschaltet ist, können ausgewählt werden. Wie du es einschaltest, steht unter [Umstieg von V2](/de/docs/custom-commands/migrating-from-v2).
4. Lies **Bevor du diese App hinzufügst**. Dort stehen die **Bot-Berechtigungen**, die die App braucht, die **Gateway-Intents**, die sie nutzt, die **Befehle, die es hinzufügt**, unter **Externe Anfragen** alle Anfragen, die sie nach außen stellt, und ihre **Ressourcenlast**.
5. Setze den Haken, um zu bestätigen, dass du verstehst, dass die App von einem Drittanbieter stammt und mit den Berechtigungen deines Bots handelt.
6. Klicke auf **Zum Server hinzufügen**.

Die App erscheint dann unter **Apps** in deiner Custom-Commands-Übersicht. Braucht sie Einstellungen, führt dich ein Einrichtungsassistent durch.

![Die Importseite einer App mit der Warnung vor hohem Risiko, der Serverauswahl, der Liste "Bevor du diese App hinzufügst" und der angehakten Zustimmungs-Checkbox](@site/docs/assets/custom-commands/en/marketplace-import.png)

:::caution Installiere nur Apps, denen du vertraust
Apps laufen mit den Berechtigungen deines Bots auf deinem Server. Innerhalb dieser Berechtigungen kann eine App Nachrichten senden, Rollen, Kanäle und Mitglieder verwalten und externe Dienste kontaktieren. Unsere Prüfungen sind automatisiert und keine Garantie dafür, dass eine App sicher ist. Support für eine App bekommst du von ihrem Entwickler, nicht von SCNX.
:::

Apps, die du über einen Teilen-Link öffnest, sind **nicht** Teil des öffentlichen Marktplatzes, und unser Team hat sie nicht von Hand angesehen. Dafür siehst du eine Warnung und eine zusätzliche Checkbox. Füge sie nur hinzu, wenn du der Person vertraust, die dir den Link geschickt hat.

Ist die App schon auf deinem Server, sagt dir die Importseite, welche Version du hast, und schickt dich stattdessen zur Update-Seite. Mit **Als neue Kopie importieren** kannst du trotzdem eine zweite Kopie hinzufügen.

Was die Zeilen unter **Bevor du diese App hinzufügst** bedeuten:

| Zeile                         | Was sie dir sagt                                                                                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bot-Berechtigungen**        | Discord-Berechtigungen, die dein Bot für die Schritte der App braucht. Ohne sie schlagen diese Schritte mit `MISSING_PERMISSIONS` fehl.                                      |
| **Gateway-Intents**           | Zusätzlicher Discord-Zugriff, den die Trigger der App brauchen. Manche müssen im Discord Developer Portal eingeschaltet werden.                                              |
| **Befehle, die es hinzufügt** | Die Slash-Commands, die die App registriert. Nutzt dein Bot einen Namen schon, wird dieser Befehl nicht hinzugefügt.                                                         |
| **Externe Anfragen**          | Die externen Dienste, an die die App Daten sendet. "Externe Dienste" bedeutet, dass sie die Adresse erst während der Ausführung zusammenbaut.                                |
| **Ressourcenlast**            | Wie viel Aktivität die App wahrscheinlich verbraucht. Eine schwere App nutzt mehr von deinem [Aktivitätsbudget](/de/docs/custom-commands/limits-and-safety#activity-budget). |

### Wenn die Installation fehlschlägt {#install-errors}

| Meldung                                                             | Lösung                                                                                         |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| "Custom Commands V3 nicht aktiviert" neben einem Server             | [Schalte V3](/de/docs/custom-commands/migrating-from-v2#enable) für diesen Server zuerst ein.  |
| "Diese App ist auf diesem Server bereits installiert"               | Aktualisiere sie auf der Seite **App-Updates** oder klicke auf **Als neue Kopie importieren**. |
| "Auf diesem Server sind bereits ... Apps installiert"               | Deinstalliere eine App, die du nicht mehr nutzt, und versuche es dann erneut.                  |
| "Dein Bot braucht ein Update, bevor er diese App installieren kann" | Starte deinen Bot neu, damit er die neueste Version nutzt, und versuche es dann erneut.        |
| "Dieser geteilte Eigene Befehl konnte nicht gefunden werden"        | Der Link ist falsch oder der Eintrag wurde entfernt.                                           |

### Nach der Installation {#after-install}

Öffne eine App aus der Übersicht, um ihre Tabs **Übersicht**, **Einstellungen**, **Hilfe** und **Erweitert** zu sehen:

- **Übersicht** zeigt, was die App macht und ob alles eingerichtet ist. Fehlt deinem Bot eine Berechtigung, die die App braucht, siehst du das hier.
- In **Einstellungen** konfigurierst du die App, zum Beispiel in welchem Kanal sie postet.
- **Hilfe** enthält die Anleitungen und FAQ des Entwicklers und einen Link zu seinem Support-Kanal.
- **Erweitert** enthält **Entwickler-Tools anzeigen**, mit den Flows, gespeicherten Daten und dem Ausführungsverlauf der App. Bearbeitest du die Flows hier, wird die App als **Bearbeitet** markiert, und ein späteres Update überschreibt deine Änderungen.

Der Tab **Übersicht** zeigt dir den Zustand der App:

| Meldung                                                                         | Was du tun solltest                                                                                             |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| "Alles eingerichtet und einsatzbereit."                                         | Nichts.                                                                                                         |
| "Fast geschafft: Lege ... fest, um die Einrichtung abzuschließen."              | Klicke auf **Einrichtung abschließen** und fülle die fehlende Einstellung aus.                                  |
| "Dem Bot fehlt die Berechtigung ..., die er braucht, um diese App auszuführen." | Gib deinem Bot diese Berechtigung auf deinem Server.                                                            |
| "Diese App ist auf einen Fehler gestoßen."                                      | Prüfe ihren [Ausführungsverlauf](/de/docs/custom-commands/executions) und wende dich an den Entwickler der App. |
| "Diese App wurde durch den serverweiten Not-Aus gestoppt."                      | Schalte Custom Commands in der Übersicht wieder ein.                                                            |
| "SCNX hat diese App aus Richtliniengründen deaktiviert."                        | Die App kann erst wieder eingeschaltet werden, wenn diese Einschränkung aufgehoben wird.                        |

Um eine App zu entfernen, klicke im Tab **Erweitert** auf **App deinstallieren** und gib zur Bestätigung den Namen der App ein. Damit werden die App, alle ihre Flows und nach einiger Zeit auch ihre gespeicherten Daten entfernt. Das lässt sich im Dashboard nicht rückgängig machen.

## Apps aktuell halten {#updates}

Veröffentlicht der Entwickler eine neue Version, zeigt die Übersicht, wie viele Apps ein Update haben. Öffne **App-Updates** unter **Daten & Verlauf**, um alle mit dem Changelog jeder App zu sehen.

So aktualisierst du eine App:

1. Klicke in der Übersicht unter **Daten & Verlauf** auf **App-Updates**.
2. Lies den Changelog unter der App. Er listet jede Version seit deiner auf.
3. Klicke auf **Aktualisieren**.

**Alle aktualisieren** aktualisiert nacheinander jede App, die du nicht selbst geändert hast. Eine Meldung sagt dir danach, wie viele aktualisiert wurden, wie viele fehlgeschlagen sind und wie viele übersprungen wurden, weil du sie bearbeitet hast.

Deine Einstellungen werden übernommen, sofern die neue Version sie noch hat. Eine Einstellung, die die neue Version entfernt hat oder deren Wert nicht mehr passt, fällt weg. Deine gespeicherten Daten bleiben. Braucht die neue Version eine Einstellung, die es vorher nicht gab, wird die App ausgeschaltet, bis du sie ausfüllst.

### Wenn du eine App bearbeitet hast {#edited-apps}

Apps, deren Flows du geändert hast, sind als **Bearbeitet** markiert und werden bei **Alle aktualisieren** ausgelassen. Wenn du eine davon einzeln aktualisierst, wirst du um Bestätigung gebeten, weil das Update deine Änderungen durch die neue Version des Entwicklers ersetzt. Deine aktuelle Einrichtung wird vorher beiseitegelegt, aber deine Änderungen an den Flows werden überschrieben.

Siehst du "Dein Bot braucht ein Update, bevor er dieses Update übernehmen kann", starte deinen Bot neu, damit er die neueste Version nutzt, und versuche es dann erneut.

## Ein Modul per Link teilen {#share-link}

Für einen einzelnen Flow gibt es keinen eigenen Teilen-Link. Um deine Arbeit zu teilen, packe sie in ein Modul und veröffentliche es. Ein frisch veröffentlichtes Modul ist **Nicht gelistet**: Es taucht nicht auf, wenn Leute den Marktplatz durchstöbern, aber jeder mit seinem Teilen-Link kann es ansehen und installieren.

Um ein nicht gelistetes Modul zu teilen, öffne das Modul und klicke in der Karte **Marktplatz** auf **Teilen-Link kopieren**. Schick diesen Link, wem du willst.

Du willst nur ein paar Schritte übertragen? Kopiere sie im Flow-Editor mit Strg+C oder dem Kopieren-Button an einem Schritt und füge sie dann in einem anderen Flow über den Bereich **Zwischenablage** der Aktionsauswahl ein. Schritte, die Einstellungen oder Speicherfelder nutzen, die der andere Flow nicht hat, werden trotzdem eingefügt und markiert, damit du sie korrigieren kannst.

:::note Teilen-Links aus V2
Teilen-Links für Custom Commands aus V2 funktionieren weiterhin, importieren aber in V2. Siehe [Custom Commands V2](/de/docs/custom-bot/custom-commands).
:::

### Beispiel: ein Modul mit einem Freund teilen {#example-share}

Du hast ein Giveaway-Modul gebaut und ein Freund möchte es auf seinem Server haben.

1. Öffne dein Modul, gehe zum Tab **App** und arbeite **Dein Weg in den Marketplace** ab.
2. Klicke auf **Veröffentlichen**. Warte auf die automatische Prüfung. Das Modul ist jetzt **Nicht gelistet**.
3. Klicke in der Karte **Marktplatz** des Moduls auf **Teilen-Link kopieren** und schick ihn deinem Freund.
4. Dein Freund öffnet den Link und sieht ein Banner, dass die App nicht Teil des kuratierten Marktplatzes ist.
5. Er klickt auf **Zum Server hinzufügen**, wählt seinen Server, prüft **Bevor du diese App hinzufügst**, setzt beide Haken und klickt noch einmal auf **Zum Server hinzufügen**.
6. Die App öffnet sich auf seinem Server. Hat sie Pflichteinstellungen, fragt der Einrichtungsassistent danach, etwa nach dem Giveaway-Kanal.

Wenn du später ein Update veröffentlichst, sieht dein Freund es auf seiner Seite **App-Updates**.

## Ein Modul veröffentlichen {#publish}

Module werden von einer **Organisation** veröffentlicht, auch wenn das nur du bist. Öffne dein Modul und gehe zu seinem Tab **App**. Die Checkliste **Dein Weg in den Marketplace** zeigt, was noch zu tun ist:

1. **Organisation erstellen oder beitreten.** Hast du schon einen Einladungslink einer Organisation, öffne ihn, um stattdessen beizutreten.
2. **Bedingungen für geteilte Inhalte akzeptieren.** Deine Organisation stimmt ihnen einmal zu.
3. **Support-Kontakt festlegen**, eine Website oder Discord-Einladung, über die Leute dich erreichen.
4. **Namen und Beschreibung hinzufügen**, die klar sagen, was deine App macht.
5. **Beschreiben, was deine App macht.** Jeder sichtbare Flow wird zu einem Feature mit eigener kurzer Beschreibung.
6. **Veröffentlichen.** Wähle unter **Im Marketplace veröffentlichen** deine Organisation, schreibe **Was sich in dieser Version geändert hat** und klicke auf **Veröffentlichen**. Mit **KI-Vorprüfung starten** kannst du vorher Probleme früh erkennen.

Was du vor dem Veröffentlichen wissen solltest:

- **Inhaltssprache.** Die erste Veröffentlichung legt die Hauptsprache deiner App fest, also die Sprache, in der du sie geschrieben hast. Interessierte finden deine App unter dieser Sprache, und Übersetzungen werden daraus erstellt. Sobald dein Eintrag Übersetzungen hat, kannst du sie nicht mehr ändern.
- **Die Checkliste gibt den Button frei.** Jede Zeile unter **Im Marketplace veröffentlichen** muss erledigt sein: ein Name, eine Beschreibung, eine Beschreibung für jedes sichtbare Feature, ein Support-Kontakt und die Bedingungen für geteilte Inhalte.
- **Nur der Eigentümer einer Organisation** kann die Bedingungen für geteilte Inhalte akzeptieren. Mitglieder brauchen die Berechtigung "Inhalte verwalten", um Updates zu veröffentlichen.
- **"Nicht alle Flows dieser App konnten geladen werden"** pausiert das Veröffentlichen. Warte einen Moment und versuche es erneut, damit nichts fehlt.

Jede Version durchläuft eine automatische Prüfung, bevor sie live geht. Sobald sie bestanden ist, ist deine App **Nicht gelistet** und du kannst [ihren Link teilen](#share-link).

![Der Bereich Im Marketplace veröffentlichen mit der Organisationsauswahl, der Checkliste, dem Feld "Was sich in dieser Version geändert hat" und dem Button Veröffentlichen](@site/docs/assets/custom-commands/en/share-dialog.png)

### Im Marktplatz gelistet werden {#curation}

Damit deine App auftaucht, wenn Leute den Marktplatz durchstöbern, beantrage im Publisher-Dashboard **Gelistet**. Unser Team prüft die App, bevor sie öffentlich wird. Apps können auch **Empfohlen** sein.

Ist deine App öffentlich, schaut sich unser Team außerdem jedes Update noch einmal an, bevor es ausgeliefert wird. Deine aktuelle Version läuft auf jedem Server, der sie hat, weiter, bis die neue freigegeben ist, und du bekommst eine E-Mail, sobald eine Entscheidung gefallen ist. Bist du mit einer Entscheidung nicht einverstanden, nutze **Gegen diese Entscheidung Einspruch einlegen (öffnet ein Support-Ticket)**.

| Status                     | Was er bedeutet                                                                                    |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| **Nicht gelistet**         | Live, aber nur über den Teilen-Link erreichbar.                                                    |
| **Kuratierung angefragt**  | Du hast einen öffentlichen Eintrag beantragt und unser Team prüft ihn.                             |
| **Gelistet**               | Öffentlich. Leute finden die App, wenn sie den Marktplatz durchstöbern.                            |
| **Empfohlen**              | Öffentlich und im Marktplatz hervorgehoben.                                                        |
| **Änderungen angefordert** | Unser Team hat dich gebeten, etwas zu ändern, bevor die App gelistet werden kann.                  |
| **Von SCNX entfernt**      | Der Eintrag wurde entfernt. Seine öffentliche Seite und sein Teilen-Link funktionieren nicht mehr. |

### Ein Update veröffentlichen {#publish-update}

Bau einfach in deinem eigenen Modul weiter. Wenn du so weit bist, öffne das Modul und klicke auf **Update veröffentlichen**. Jeder Server, der deine App installiert hat, sieht die neue Version auf seiner Update-Seite, mit dem Changelog, den du geschrieben hast.

Du kannst jeder Version eine optionale **Versionsbezeichnung** geben, etwa "Sommer-Update". Sie muss aus einer einzigen Zeile bestehen und sich von den Bezeichnungen deiner anderen Versionen unterscheiden. Lass sie leer, um die Versionsnummer anzuzeigen.

Ist deine App öffentlich, wartet das Update auf die Prüfung durch unser Team, und Server behalten bis dahin ihre bisherige Version. Wird das Update abgelehnt, bleibt deine vorherige Version live. Antworte im Support-Ticket und veröffentliche dann eine neue Version.

Veröffentlichst du erneut, bevor unser Team die letzte Version geprüft hat, wird diese Version übersprungen und nur die neueste geprüft.
