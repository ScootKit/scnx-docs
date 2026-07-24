# Befehle

Schalte die integrierten Befehle deiner aktivierten Module ein oder aus und benenne die Kontextmenü-Befehle (Rechtsklick) um, die deine Mitglieder sehen - alles direkt aus dem SCNX-Dashboard.

## Übersicht {#overview}

Die Seite **Befehle** listet jeden Befehl auf, den die aktuell aktivierten Module bereitstellen, und lässt dich entscheiden, welche davon bei Discord registriert werden. Befehle sind nach Typ in drei Reitern gruppiert:

- **Slash** - die `/befehl`-Einträge, die Mitglieder in das Chatfeld eingeben.
- **Nutzer** - Kontextmenü-Befehle, die angezeigt werden, wenn du mit der rechten Maustaste auf ein Mitglied klickst (Apps-Untermenü).
- **Nachricht** - Kontextmenü-Befehle, die angezeigt werden, wenn du mit der rechten Maustaste auf eine Nachricht klickst (Apps-Untermenü).

Für jeden Befehl kannst du ihn aktivieren oder deaktivieren. Bei **Nutzer**- und **Nachricht**-Befehlen kannst du zusätzlich eine eigene Bezeichnung festlegen - den Text, den Discord im Apps-Menü anzeigt. Eine Live-Vorschau bildet das Apps-Flyout von Discord nach, damit du siehst, wie die Nutzer- und Nachrichten-Menüs aussehen werden, bevor du speicherst.

Hier erscheinen nur Befehle aus **aktivierten** Modulen. Aktiviere zuerst ein Modul, falls der gesuchte Befehl fehlt.

:::info
Diese Seite verwaltet die Befehle, die mit den Modulen des Bots ausgeliefert werden. Sie unterscheidet sich von den beiden benachbarten Seiten:

- [Slashcommands & Berechtigungen](/de/docs/custom-bot/slash-commands) - die eigenen Berechtigungssteuerungen von Discord pro Befehl (welche Rollen, Nutzer und Kanäle einen Befehl ausführen dürfen). Diese werden in deinen Discord-Servereinstellungen konfiguriert, nicht hier.
- [Eigene Befehle](/de/docs/custom-bot/custom-commands) - erstelle deine eigenen Befehle von Grund auf mit dem visuellen Flow-Editor.

Nutze die Seite Befehle, um integrierte Modulbefehle ein- oder auszuschalten und Kontextmenü-Einträge umzubenennen; nutze die beiden anderen Seiten für Berechtigungen und zum Erstellen eigener Befehle.
:::

## Slash-, Nutzer- und Nachricht-Befehle {#types}

Discord unterstützt drei Befehlstypen, und die Seite hält sie in getrennten Reitern, weil jeder eigene Regeln und ein eigenes Budget hat.

| Typ           | Wo Mitglieder ihn finden                     | Kann hier umbenannt werden | Standardmäßig aktiviert |
| ------------- | -------------------------------------------- | -------------------------- | ----------------------- |
| **Slash**     | Als `/befehl` in das Nachrichtenfeld getippt | Nein                       | Ja                      |
| **Nutzer**    | Rechtsklick auf ein Mitglied → **Apps**      | Ja (eigene Bezeichnung)    | Nein                    |
| **Nachricht** | Rechtsklick auf eine Nachricht → **Apps**    | Ja (eigene Bezeichnung)    | Nein                    |

Jeder Reiter zeigt einen Budget-Zähler (verwendet / Limit), damit du auf einen Blick siehst, wie viel des Discord-Kontingents pro Typ du bereits verbraucht hast.

## Aktivieren und Deaktivieren {#enable-disable}

Nutze den Schalter in jeder Befehlszeile, um ihn zu aktivieren oder zu deaktivieren.

Die Standardwerte unterscheiden sich je nach Typ:

- **Slash-Befehle sind standardmäßig aktiviert.** Ein Slash-Befehl, den du nie angerührt hast, ist bei Discord registriert. Deaktiviere ihn hier, um ihn zu entfernen.
- **Nutzer- und Nachricht-Befehle sind standardmäßig deaktiviert.** Kontextmenü-Befehle sind optional - sie erscheinen erst in Discord, wenn du sie hier aktivierst.

Jeder Befehl gehört zu einem Modul und ist unter dem Abschnitt dieses Moduls gruppiert. Wenn du ein ganzes Modul (auf der eigenen Seite des Moduls) deaktivierst, werden alle seine Befehle von dieser Seite entfernt.

## Kontextmenü-Befehle umbenennen {#renaming}

Nutzer- und Nachricht-Befehlen kann eine **eigene Bezeichnung** gegeben werden - der Text, den Mitglieder im Apps-Menü von Discord sehen. Slash-Befehle können hier nicht umbenannt werden (ihre Namen folgen den eigenen Regeln von Discord und werden mit dem Modul verwaltet).

- Tippe deine bevorzugte Bezeichnung in das Umbenennungsfeld des Befehls. Lass es leer, um auf den Standardnamen des Befehls zurückzufallen.
- Bezeichnungen sind auf **32 Zeichen** begrenzt (ein Discord-Limit). Die Seite markiert jede zu lange Bezeichnung und blockiert das Speichern, bis du sie kürzt.
- Die Live-Apps-Vorschau aktualisiert sich beim Tippen, sodass du die Formulierung vor dem Speichern bestätigen kannst.

## Limits {#limits}

Discord erzwingt ein festes Budget pro Befehlstyp. Die Seite erzwingt dieselben Limits und lässt dich keine Auswahl speichern, die sie überschreitet:

| Typ       | Maximal aktivierte Befehle |
| --------- | -------------------------- |
| Slash     | 100                        |
| Nutzer    | 15                         |
| Nachricht | 15                         |

Zusätzliche Regeln:

- **Länge der Kontextmenü-Bezeichnung:** eigene Nutzer-/Nachricht-Bezeichnungen dürfen höchstens **32 Zeichen** lang sein.
- **Namenskollisionen:** zwei aktivierte Befehle **desselben Typs**, deren aufgelöste Bezeichnungen (eigene Bezeichnung oder der Standardname, falls keine eigene Bezeichnung gesetzt ist) beim Vergleich ohne Beachtung der Groß-/Kleinschreibung identisch sind, kollidieren. Die Seite markiert die Kollision und blockiert das Speichern, bis du einen davon umbenennst oder deaktivierst. `Report` und `report` zählen als derselbe Name.

Wird eine dieser Regeln verletzt, zeigt die Seite den Grund an und deaktiviert das Speichern, bis er behoben ist.

## Speichern und mit Discord synchronisieren {#saving}

Deine Befehlsauswahl wird wie jede andere Modulkonfiguration gespeichert und über den normalen Konfigurations-Speicherpfad geschrieben - nutze die Aktion **Speichern** genauso, wie du es auf jeder Konfigurationsseite tun würdest. Es gibt keinen separaten Absende-Schritt.

Nach dem Speichern aktualisiert der Bot die bei Discord registrierten Befehle so, dass sie deiner Auswahl entsprechen.

:::info Befehlssynchronisierung
Wie bei allen Befehlsänderungen kann es einige Zeit dauern, bis Aktualisierungen in Discord erscheinen - neu aktivierte Befehle können eine Weile brauchen, um aufzutauchen, und entfernte eine Weile, um zu verschwinden. Dies ist eine Verzögerung bei der Verbreitung auf Discord-Seite, dasselbe Verhalten, das in der Anleitung [Slashcommands & Berechtigungen](/de/docs/custom-bot/slash-commands#command-synchronization) beschrieben wird. Gib ihm etwas Zeit, bevor du annimmst, dass etwas nicht stimmt.
:::

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Ein Befehl, den ich erwartet habe, wird nicht aufgelistet</summary>
  <ul>
    <li>Die Seite listet nur Befehle aus <b>aktivierten</b> Modulen auf. Aktiviere zuerst das zugehörige Modul.</li>
    <li>Stelle sicher, dass dein Bot online ist und seinen Befehlskatalog synchronisiert hat.</li>
  </ul>
</details>

<details>
  <summary>Ich kann meine Änderungen nicht speichern</summary>
  <ul>
    <li>Überprüfe die Warnung oben in der Liste - sie nennt, was zu beheben ist.</li>
    <li>Du hast möglicherweise ein Budget pro Typ überschritten (Slash 100, Nutzer 15, Nachricht 15). Deaktiviere einige Befehle dieses Typs.</li>
    <li>Zwei aktivierte Befehle desselben Typs teilen sich möglicherweise einen Namen (ohne Beachtung der Groß-/Kleinschreibung). Benenne einen davon um oder deaktiviere ihn.</li>
    <li>Eine eigene Kontextmenü-Bezeichnung ist möglicherweise länger als 32 Zeichen. Kürze sie.</li>
  </ul>
</details>

<details>
  <summary>Ein Rechtsklick-Befehl (Nutzer / Nachricht) erscheint nicht in Discord</summary>
  <ul>
    <li>Kontextmenü-Befehle sind <b>standardmäßig deaktiviert</b> - aktiviere sie zuerst auf dieser Seite.</li>
    <li>Befehlsänderungen können einige Zeit brauchen, um sich zu Discord zu verbreiten. Warte eine Weile und versuche es erneut.</li>
    <li>Bestätige, dass du deine Änderungen gespeichert hast.</li>
  </ul>
</details>

<details>
  <summary>Mein umbenannter Befehl zeigt weiterhin den alten Namen</summary>
  <ul>
    <li>Speichere deine Änderungen und gib Discord dann Zeit, die neue Bezeichnung zu synchronisieren.</li>
    <li>Überprüfe, dass die Bezeichnung nicht mit einem anderen aktivierten Befehl desselben Typs kollidiert.</li>
  </ul>
</details>

## Verwandte Seiten {#related}

- [Slashcommands & Berechtigungen](/de/docs/custom-bot/slash-commands) - steuere mit dem nativen Berechtigungssystem von Discord, wer Befehle ausführen darf.
- [Eigene Befehle](/de/docs/custom-bot/custom-commands) - erstelle deine eigenen Befehle mit dem visuellen Flow-Editor.
