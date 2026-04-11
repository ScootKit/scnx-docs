# Discord-IDs & Erwähnungen

Um fortgeschrittene Funktionen auf SCNX zu konfigurieren, benötigst du manchmal spezifische Discord-IDs. Diese eindeutigen Kennungen ermöglichen es unserem System, die richtigen Nutzer, Kanäle oder Rollen präzise anzusprechen. Diese Anleitung zeigt dir, wie du sie findest und wie du Objekte mithilfe ihrer ID erwähnst, um das Verhalten deines Bots anzupassen.

## 1. Discord-Entwicklermodus aktivieren

Bevor du IDs kopieren kannst, musst du den Entwicklermodus in deinem Discord-Client aktivieren. Dies ist eine integrierte Funktion, die erweiterte Kontextmenü-Optionen für Power-User und Entwickler freischaltet.

1. Öffne deine **Nutzereinstellungen** (das Zahnrad-Symbol neben deinem Namen).
2. Gehe zu **Erweitert** (unter der Kategorie "App-Einstellungen").
3. Schalte den **Entwicklermodus** auf **An**.

![Ein Screenshot eines Discord-Servers, der das Zahnrad-Symbol markiert](@site/docs/assets/discord-ids/en/opendiscordsettings.png)
![Ein Screenshot der Discord-Nutzereinstellungen Seite "Erweitert"](@site/docs/assets/discord-ids/en/activatedevelopermode.png)

## 2. IDs kopieren

Jedes Objekt auf Discord - egal ob es sich um einen Nutzer, einen Server oder eine einzelne Nachricht handelt - hat eine eindeutige ID. Sobald der Entwicklermodus aktiv ist, kannst du fast alles rechtsklicken, um sie abzurufen. IDs werden von Bots verwendet, um Objekte zu identifizieren, da IDs sich nicht ändern – selbst wenn der Name des Objekts geändert wurde.

### Nutzer- und Bot-IDs kopieren

1. Rechtsklicke den Namen oder den Avatar des Nutzers.
2. Wähle **Nutzer-ID kopieren** ganz unten im Menü.
3. Die ID befindet sich nun in deiner Zwischenablage - du kannst sie jetzt in SCNX oder an anderer Stelle einfügen 🚀

- **Auf dem Handy:** Drücke lange auf das Profil des Nutzers, tippe auf die drei Punkte (`...`) oben rechts und wähle "Nutzer-ID kopieren".

![Screenshot, der zeigt, wie man einen Nutzer rechtsklickt und Nutzer-ID kopieren auswählt](@site/docs/assets/discord-ids/en/copy-user-id.png)

### Kanal-IDs kopieren

1. Rechtsklicke auf einen Kanalnamen in deiner Seitenleiste.
2. Wähle **Kanal-ID kopieren**.
3. Die ID befindet sich nun in deiner Zwischenablage - du kannst sie jetzt in SCNX oder an anderer Stelle einfügen 🚀

- **Auf dem Handy:** Drücke lange auf den Kanalnamen, scrolle nach unten und tippe auf "Kanal-ID kopieren".

![Screenshot, der das Kontextmenü eines Kanals mit hervorgehobenem Kanal-ID kopieren zeigt](@site/docs/assets/discord-ids/en/copy-channel-id.png)

### Rollen-IDs kopieren

1. Gehe zu **Servereinstellungen** > **Rollen**.
2. Rechtsklicke den spezifischen Rollennamen.
3. Wähle **Rollen-ID kopieren**.
4. Die ID befindet sich nun in deiner Zwischenablage - du kannst sie jetzt in SCNX oder an anderer Stelle einfügen 🚀

- **Auf dem Handy:** Gehe zu Servereinstellungen > Rollen, tippe auf die Rolle und tippe auf das "ID kopieren"-Symbol oben rechts.

![Screenshot der Rolleneinstellungen mit aktivem Rechtsklick-Menü](@site/docs/assets/discord-ids/en/copy-role-id.png)

### Nachrichten-IDs kopieren

1. Fahre mit der Maus über die Nachricht und klicke auf die **drei Punkte** (Mehr) auf der rechten Seite.
2. Wähle **Nachrichten-ID kopieren** ganz unten im Menü.
3. Die ID befindet sich nun in deiner Zwischenablage - du kannst sie jetzt in SCNX oder an anderer Stelle einfügen 🚀

- **Auf dem Handy:** Drücke lange auf die Nachricht, scrolle zum Ende des Menüs und tippe auf "Nachrichten-ID kopieren".

![Screenshot, der das Kontextmenü einer Nachricht mit hervorgehobenem Nachrichten-ID kopieren zeigt](@site/docs/assets/discord-ids/en/copy-message-id.png)

### Server-IDs kopieren (Guild IDs)

1. Rechtsklicke den **Servernamen** oben in deiner Kanalliste oder rechtsklicke auf das **Server-Icon**.
2. Wähle **Server-ID kopieren** am Ende des Menüs.
3. Die ID befindet sich nun in deiner Zwischenablage - du kannst sie jetzt in SCNX oder an anderer Stelle einfügen 🚀

- **Auf dem Handy:** Tippe auf die drei Punkte neben dem Servernamen oben in der Kanalliste, scrolle nach unten und tippe auf "Server-ID kopieren".

![Screenshot, der zeigt, wie man auf ein Server-Icon rechtsklickt, um die Server-ID zu kopieren](@site/docs/assets/discord-ids/en/copy-server-id.png)

---

## 3. Elemente via ID erwähnen

Manchmal musst du einen Nutzer, eine Rolle oder einen Kanal innerhalb einer Bot-Antwort erwähnen (wie in einem benutzerdefinierten Embed oder einer Willkommensnachricht), wo eine Standard-"@"-Erwähnung vielleicht nicht funktioniert. Die Verwendung der rohen ID-Syntax stellt sicher, dass die Erwähnung korrekt angezeigt wird, sobald der Bot die Nachricht sendet.

:::info Erwähnungs-Helfer in SCNX
Im SCNX Nachrichten-Editor musst du die ID oft nicht manuell eingeben. Du kannst einfach auf den **"@"-Button** über dem Textfeld klicken, um Kanal- oder Rollenerwähnungen einfach auszuwählen und einzufügen.

![SCNX Message Editor Erwähnungs-Button](@site/docs/assets/discord-ids/en/scnx-mention-helper.png)
:::

### Erwähnungssyntax-Tabelle

Wenn du Rohtext schreibst oder fortgeschrittene Felder konfigurierst, verwende die folgende Syntax:

| Objekt              | Syntax         | Beispiel                  | Vorschau   |
| :------------------ | :------------- | :------------------------ | :--------- |
| **Nutzer und Bots** | `<@NUTZERID>`  | `<@787026352191701033>`   | @SCNX      |
| **Kanäle**          | `<#KANALID>`   | `<#1113165263295230002>`  | #news      |
| **Rollen**          | `<@&ROLLENID>` | `<@&1113115210048360489>` | @Moderator |

### Zeitstempel erwähnen

Wenn du dynamische Zeitanzeigen einfügen möchtest, verwendet Discord ein spezielles Unix-Timestamp-Format.
Um einen Zeitstempel zu erstellen, umschließt du eine Unix-Zeit (Sekunden seit 1970) mit einem spezifischen Code. Zum Beispiel: `<t:1700000000:R>`.

- **Dynamisch:** Er passt sich automatisch an die lokale Zeit jedes Nutzers an.
- **Vielseitig:** Kann relative Zeit ("vor 5 Minuten"), vollständige Daten oder nur die Uhrzeit anzeigen.

![Ein Screenshot, der Beispiele für verschiedene Zeitstempelformate zeigt](@site/docs/assets/discord-formatting/en/types3.png)

Eine detaillierte Anleitung und einen Generator dafür findest du [hier](/docs/discord-formatting#timestamps).

---

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Die Option "ID kopieren" fehlt</summary>
  <ul>
    <li>Stelle sicher, dass der <b>Entwicklermodus</b> in deinen Discord-Einstellungen auf "An" geschaltet ist (Nutzereinstellungen > Erweitert).</li>
    <li>Wenn du ihn gerade erst aktiviert hast, versuche deinen Discord-Client neu zu starten (drücke <code>Strg + R</code> am Desktop).</li>
    <li>Stelle auf dem Handy sicher, dass du die neueste Version der Discord-App verwendest.</li>
  </ul>
</details>

<details>
  <summary>Die Erwähnung erscheint als Rohtext anstatt als Name</summary>
  <ul>
    <li>Überprüfe doppelt, ob die kopierte ID korrekt ist und zum richtigen Objekttyp gehört.</li>
    <li>Stelle sicher, dass du die erforderlichen Symbole wie <code>&lt;</code>, <code>@</code>, <code>#</code>, <code>&amp;</code> und <code>&gt;</code> inkludiert hast.</li>
    <li>Wenn die ID zu einem Nutzer oder einer Rolle gehört, die nicht auf dem Server ist, auf dem die Nachricht gesendet wird, zeigt Discord möglicherweise die rohe ID an.</li>
  </ul>
</details>
