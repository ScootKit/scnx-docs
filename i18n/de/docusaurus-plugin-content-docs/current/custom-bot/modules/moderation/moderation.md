# Moderation & Sicherheit

Fortschrittliches Sicherheits- und Moderationssystem mit unzähligen Funktionen, um deinen Server sicher zu halten.

<ModuleOverview moduleName="moderation" />

## Funktionen {#features}

- Umfassende Moderationsbefehle: [Verwarnen](#warn), [Stummschalten](#mute), [Kicken](#kick), [Bannen](#ban), [Quarantäne](#quarantine), [Kanal-Stummschaltung](#channel-mute) und [Aufräumen](#clear).
- Verwarnen, Stummschalten, Kicken und Bannen sind auch als Rechtsklick-[Kontextmenü-Aktionen](#context-menu-actions) auf Nutzer und Nachrichten verfügbar und nehmen Beweise entgegen.
- Unterstützung für temporäre Bans, Mutes und Quarantänen mit automatischem Ablauf, plus [bearbeitbaren Dauern](#edit-duration), die eine aktive Bestrafung nachträglich verkürzen oder verlängern.
- [Bestrafungen mit einem Klick aufheben](#lift-punishment) - direkt aus der Log-Nachricht oder der Aktionsansicht.
- [Kanal sperren und entsperren](#lock-unlock), um das Schreiben in einem Kanal einzuschränken.
- [Serverweites Lockdown](#lockdown)-System, das alle Kanäle auf einmal sperrt, mit automatischen Auslösern. Optional werden Lockdown-Nachrichten nur an bestimmte Kanäle gesendet.
- Intelligentere Invite-Erkennung: Discord-Einladungslinks werden vor einer Aktion aufgelöst, und Einladungen zu deinem eigenen Server werden automatisch erlaubt.
- [Melde-System für Nutzer](#report), mit dem Mitglieder andere Nutzer und Nachrichten samt Beweisbildern melden können.
- [Moderator-Notizen](#notes)-System, um Informationen über Nutzer festzuhalten.
- Sieh dir den gesamten Moderations-[Aktionsverlauf](#actions) für jeden Nutzer an.
- [Verwarnungen zurücknehmen](#commands), um frühere Warns zu entfernen.
- [Auto-Moderation](#configuration-config) für Einladungslinks, Scam-Links und gesperrte Wörter, jeweils mit einer optionalen Nur-Löschen-Aktion, die die Nachricht entfernt, ohne das Mitglied zu bestrafen.
- Automatische Bestrafungen basierend auf der Anzahl der Verwarnungen (z. B. Auto-Ban nach X Warns).
- Ein vollständig konfigurierbares [Anti-Spam-System pro Typ](#anti-spam) - Nachrichtenrate, doppelte Inhalte, Erwähnungen, Massenerwähnungen, Anhang-/Bild-Spam, Link-Spam, Zeilen-/Zeichen-Fluten, Sticker-/Emoji-Spam, Kanal-Streuung und Text-Missbrauch - jeweils mit eigenem Schalter, Grenzwert, Zeitfenster und eigener Aktion.
- [Einschränkungen für neue Mitglieder](#new-member-restrictions), die Anhänge und Links zurückhalten, bis ein Mitglied lange genug auf dem Server ist.
- [Anti-Join-Raid](#anti-join-raid)-System, das Massenbeitritte erkennt.
- [Join Gate](#join-gate), um verdächtige Accounts anhand von Accountalter und Profilbild zu blockieren.
- [Anti-Grief](#anti-grief)-System, um Moderatoren, die ihre Berechtigungen missbrauchen, in Quarantäne zu setzen.
- [Verifikations](#verification)-System, das von neuen Mitgliedern verlangt, ein Bild-Captcha, eine Wort- oder Mathe-Herausforderung, einen Ein-Klick-Button oder eine manuelle Moderator-Prüfung abzuschließen.
- [Benutzerdefinierte Moderationslevel](#configuration-modlevels), die du selbst definierst und die jeweils eine explizite Menge an Berechtigungen gewähren.
- [Anpassbare und öffentliche Logs](#configuration-logmessages): bearbeite das Embed für jeden Log-Nachrichtentyp und spiegle Aktionen optional in einen separaten öffentlichen Kanal.
- [Import nativer Discord-Moderation](#native-import), der Bans, Kicks und Timeouts, die mit Discords eigenen Tools durchgeführt wurden, in die Datenbank und den Log-Kanal des Bots aufnimmt.
- Optionale [benutzerdefinierte Fall-Titel](#configuration-config), [bearbeitbare Gründe](#edit-reason) und [Markierung beteiligter Nutzer](#involved-users) an Fällen.
- Automatischer Ablauf von Verwarnungen nach einem konfigurierbaren Zeitraum.
- Anpassbare Nachrichten für jede Moderationsaktion.
- Optionale Nicknamen-Änderungen bei Mute oder Quarantäne.
- Alle Aktionen werden in einem konfigurierbaren Log-Kanal protokolliert.
- [Beweise mit mehreren Bildern](#evidence-archival) an Moderationsaktionen werden in der [Datei-Bibliothek](/docs/scnx/guilds/files) deines Servers archiviert, sodass alte Fall-Logs sichtbar bleiben, nachdem Discords CDN-URLs abgelaufen sind.

## Einrichtung {#setup}

1. [Aktiviere das Modul](/de/glink?page=bot/modules?query=moderation) auf deinem Server.
2. Öffne die [Konfiguration](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/config) und lege den **Log-Kanal** fest, in dem Moderationsaktionen protokolliert werden.
3. Richte deine **Moderationslevel** in der [Moderationslevel-Konfiguration](#configuration-modlevels) ein. Erstelle ein Level pro Team-Stufe, liste die Rollen auf, die dazugehören, und hake genau die Berechtigungen ab, die diese Rollen haben sollen (Verwarnen, Stummschalten, Kicken, Bannen, Quarantäne und mehr). Wenn du von einer älteren Version aktualisierst, werden deine bestehenden Moderator-Level-1-4-Rollen beim Start automatisch in gleichwertige Level migriert, sodass dein Team ohne jede Änderung weiterarbeiten kann.
4. Alle Moderatoren müssen außerdem den `/moderate`-Befehl ausführen können. Konfiguriere dies in deinen Discord-Servereinstellungen (Servereinstellungen > Integrationen).
5. Wenn du Quarantäne nutzen möchtest, lege die **Quarantäne-Rolle** in der Konfiguration fest. Diese Rolle sollte eingeschränkte Berechtigungen haben, und die Rolle des Bots sollte in der Rollenhierarchie über ihr platziert sein.
6. Stelle sicher, dass der Bot die folgenden Berechtigungen hat: **Rollen verwalten**, **Mitglieder kicken**, **Mitglieder bannen**, **Mitglieder timeouten**, **Kanäle verwalten**, **Nachrichten verwalten**, **Kanal ansehen**, **Nachrichten senden** und **Links einbetten**. Um [native Discord-Moderation](#native-import) aufzuzeichnen, benötigt der Bot zusätzlich **Audit-Log ansehen**.
7. Konfiguriere optional die zusätzlichen Systeme ([Anti-Spam](#anti-spam), [Einschränkungen für neue Mitglieder](#new-member-restrictions), [Anti-Join-Raid](#anti-join-raid), [Join Gate](#join-gate), [Anti-Grief](#anti-grief), [Verifikation](#verification), [Lockdown](#lockdown) und [Log-Nachrichten](#configuration-logmessages)) in ihren jeweiligen Konfigurationsdateien.

## Verwendung {#usage}

### Moderationsbefehle {#moderation-commands}

Moderatoren verwenden den `/moderate`-Befehl mit verschiedenen Unterbefehlen, um Aktionen durchzuführen. Jede Aktion wird im konfigurierten Log-Kanal protokolliert. Nutzer erhalten eine DM-Benachrichtigung, wenn eine Moderationsaktion gegen sie ausgeführt wird (sofern ihre DMs geöffnet sind).

Jede Aktion kann optional [beteiligte Nutzer](#involved-users) markieren. Wenn [benutzerdefinierte Fall-Titel](#configuration-config) aktiviert sind, wird den Befehlen Verwarnen, Stummschalten, Bannen, Kicken, Quarantäne und Kanal-Stummschaltung ein kurzes **Titel**-Feld hinzugefügt, das dann erforderlich wird.

#### Verwarnen {#warn}

Verwarnt einen Nutzer. Die Verwarnung wird aufgezeichnet und kann automatische Aktionen auslösen, wenn [Automod-Grenzwerte](#configuration-config) konfiguriert sind. Erfordert die Berechtigung **Mitglieder verwarnen**.

#### Stummschalten {#mute}

Schaltet einen Nutzer mithilfe von Discords integrierter Timeout-Funktion stumm. Eine Dauer ist erforderlich (maximal 28 Tage). Wenn der Moderator keine Dauer festlegt, wird die konfigurierte Standard-Mute-Dauer verwendet. Erfordert die Berechtigung **Mitglieder stummschalten**.

#### Kicken {#kick}

Kickt einen Nutzer vom Server. Der Nutzer kann mit einem Einladungslink wieder beitreten. Erfordert die Berechtigung **Mitglieder kicken**.

#### Bannen {#ban}

Bannt einen Nutzer vom Server. Optional kannst du eine Dauer für einen temporären Ban und die Anzahl der Tage an zu löschenden Nachrichten angeben. Funktioniert auch, wenn der Nutzer sich aktuell nicht auf dem Server befindet. Erfordert die Berechtigung **Mitglieder bannen**.

#### Quarantäne {#quarantine}

Setzt einen Nutzer in Quarantäne, indem ihm die Quarantäne-Rolle zugewiesen und optional alle seine anderen Rollen entfernt werden (Rollen werden gespeichert und beim Aufheben der Quarantäne wiederhergestellt). Optional kannst du eine Dauer für die automatische Entfernung angeben. Erfordert die Berechtigung **Mitglieder in Quarantäne setzen**.

Wenn **Neue Rollen von quarantänisierten Benutzern entfernen** aktiviert ist (siehe [Konfiguration](#configuration-config)), entfernt der Bot auch
jede Rolle, die dem Nutzer hinzugefügt wird, während er in Quarantäne ist - einschließlich Reaktionsrollen, Selbstrollen,
die über Discords Tab "Kanäle & Rollen" gewählt werden, und Rollen, die von anderen Bots vergeben werden. Verwaltete Rollen wie Server-Boosts und
integrationsverwaltete Rollen bleiben unberührt.

#### Kanal-Stummschaltung {#channel-mute}

Schaltet einen Nutzer nur im aktuellen Kanal stumm, indem die Berechtigungsüberschreibungen des Kanals angepasst werden. Dies verhindert, dass der Nutzer in diesem bestimmten Kanal Nachrichten senden kann. Erfordert die Berechtigung **Mitglieder kanalweit stummschalten**.

#### Aufräumen {#clear}

Löscht eine angegebene Anzahl aktueller Nachrichten aus dem aktuellen Kanal (Standard: 5). Erfordert die Berechtigung **Nachrichten löschen**.

#### Sperren und Entsperren {#lock-unlock}

Sperrt oder entsperrt den aktuellen Kanal und verhindert oder erlaubt der @everyone-Rolle das Senden von Nachrichten. Beim Sperren kann ein Grund angegeben werden. Erfordert die Berechtigung **Kanäle sperren**.

### Kontextmenü-Aktionen {#context-menu-actions}

Verwarnen, Stummschalten, Kicken und Bannen sind auch als Rechtsklick-Aktionen verfügbar. Klicke mit der rechten Maustaste auf einen Nutzer (oder eine Nachricht und wähle dann **Apps**) und wähle **Verwarnen**, **Stummschalten**, **Kicken** oder **Bannen**. Ein Dialog öffnet sich für den Grund und, wenn [benutzerdefinierte Fall-Titel](#configuration-config) aktiviert sind, den Titel. Jede Kontextmenü-Aktion enthält ein optionales Beweis-Feld, in das du in einem Zug bis zu zehn Beweisbilder hochladen kannst. Es gibt außerdem die Aktionen **Nutzer melden** und **Nachricht melden** für Mitglieder sowie eine **Mod-Verlauf**-Aktion, die die vergangenen Fälle eines Nutzers zeigt.

### Bestrafung aufheben {#lift-punishment}

Wenn **Aufheben-Buttons** aktiviert sind (siehe [Konfiguration](#configuration-config)), zeigen Moderations-Log-Nachrichten und die [Aktionsansicht](#actions) einen **Bestrafung aufheben**-Button, der einen Mute, Ban, eine Quarantäne oder Verwarnung mit einem Klick rückgängig macht. Du wirst nach einem Grund gefragt, und die Aktion wird rückgängig gemacht. Der Button ist berechtigungsgeschützt: Nur Teammitglieder, deren [Moderationslevel](#configuration-modlevels) diesen Aktionstyp erlaubt, können ihn aufheben.

### Dauer bearbeiten {#edit-duration}

Verwende `/moderate edit-duration` oder den **Dauer bearbeiten**-Button und -Dialog in der [Aktionsansicht](#actions) (angezeigt, wenn **Aufheben-Buttons** aktiviert sind), um einen aktiven temporären Mute, Ban oder eine Quarantäne nach der Anwendung zu verkürzen oder zu verlängern. Der betroffene Nutzer wird per DM über die Änderung informiert (siehe die **Nachricht bei Dauer-Änderung** unter [Nachrichten](#configuration-strings)).

### Grund bearbeiten {#edit-reason}

Ein **Grund bearbeiten**-Button erscheint unter jeder Log-Nachricht und in der [Aktionsansicht](#actions) - er teilt sich den Schalter **Aufheben-Buttons** (siehe [Konfiguration](#configuration-config)). `/moderate edit-reason` macht dasselbe über die Kommandozeile. Der Grund wird an Ort und Stelle neu geschrieben, und die Änderung wird zur Nachvollziehbarkeit als Fall-Ereignis aufgezeichnet.

### Beteiligte Nutzer {#involved-users}

Ein Fall kann sich auf mehr als eine Person beziehen - das Mitglied, das ihn gemeldet hat, ein zweiter Account, der in denselben Vorfall verwickelt ist, oder ein Zeuge. Wenn **Verknüpfen beteiligter Nutzer erlauben** aktiviert ist, fügst du sie mit der `involved`-Option an einer Aktion, dem `/moderate involve`-Befehl oder der Nutzerauswahl in der [Aktionsansicht](#actions) hinzu. Beteiligte Nutzer dienen nur als Referenz: Sie werden nie bestraft oder benachrichtigt und erscheinen über den [Log-Platzhalter](#configuration-logmessages) `%involved%`, sodass du entscheidest, ob sie in deinem internen Log, einem öffentlichen oder in beiden angezeigt werden.

### Melden {#report}

Jeder Nutzer kann einen anderen Nutzer mit `/report` melden oder mit der rechten Maustaste auf einen Nutzer oder eine Nachricht klicken und **Nutzer melden** / **Nachricht melden** verwenden. Eine Meldung enthält den Grund, optionale Beweisbilder (bis zu zehn in den Kontextmenü-Abläufen) und einen verschlüsselten Schnappschuss der aktuellen Nachrichten im Kanal. Meldungen werden an den konfigurierten Report-Kanal (oder den Log-Kanal, wenn kein Report-Kanal festgelegt ist) gesendet. Konfigurierte Rollen werden gepingt, wenn eine Meldung eingeht. Mitglieder, deren Moderationslevel als **Immun gegen Meldungen** markiert ist, können nicht gemeldet werden.

### Notizen {#notes}

Moderatoren können Notizen über Nutzer erstellen, ansehen, bearbeiten und löschen. Notizen sind nützlich, um Informationen über Nutzer über Moderationsaktionen hinweg festzuhalten. Alle Moderatoren mit Zugriff auf den `/moderate`-Befehl können Notizen verwalten.

### Aktionsverlauf {#actions}

Moderatoren können alle vergangenen Moderationsaktionen gegen einen Nutzer ansehen, einschließlich Warns, Mutes, Kicks, Bans und Quarantänen. In dieser Ansicht befinden sich die Buttons pro Fall: [eine Bestrafung aufheben](#lift-punishment), [ihre Dauer](#edit-duration) oder ihren [Grund bearbeiten](#edit-reason), [Beweise hinzufügen](#evidence-archival) und [beteiligte Nutzer verknüpfen](#involved-users) - jeweils angezeigt, wenn die zugehörige Funktion aktiviert ist.

### Beweis-Archivierung {#evidence-archival}

Beweise sind nicht länger auf einen einzelnen Screenshot beschränkt. Du kannst an eine Moderationsaktion bis zu zehn Beweisbilder anhängen - sowohl beim Ausführen (über die `proof`-Option oder das Upload-Feld im Kontextmenü) als auch nachträglich, wenn **Hinzufügen weiterer Beweis-Bilder erlauben** aktiviert ist, über den **Beweis hinzufügen**-Button unter jeder Log-Nachricht oder den `/moderate add-proof`-Befehl. Bilder werden in der [Datei-Bibliothek](/docs/scnx/guilds/files) deines Servers archiviert, das Fall-Log verlinkt auf diese dauerhaften URLs anstatt auf Discords ablaufende CDN-URLs, und die Log-Nachricht aktualisiert sich an Ort und Stelle und zeigt alles zusammen als Galerie. Auch Meldungen tragen Beweise.

Gespeicherte Beweisdateien werden auf das [Dateispeicher-Kontingent](/docs/scnx/guilds/files#understanding-storage-limits) deines Servers angerechnet. Um dich abzumelden, aktiviere **Disable attachment archival** in der Allgemeinen Konfiguration des Bots; mit deaktivierter Archivierung greifen Beweis-Links wieder auf Discords URLs zurück und laufen irgendwann ab.

### Lockdown {#lockdown}

Das Lockdown-System ermöglicht es dir, alle Kanäle auf dem Server auf einmal zu sperren. Dies kann manuell durch Moderatoren oder automatisch ausgelöst werden, wenn Sicherheitssysteme (Anti-Join-Raid, Join Gate oder Anti-Spam) auslösen. Das Lockdown-System muss zuerst in der [Lockdown-Konfiguration](#configuration-lockdown) aktiviert werden.

Wenn ein Lockdown aktiviert wird, speichert der Bot den aktuellen Berechtigungszustand aller Kanäle und entzieht dann der @everyone-Rolle die Berechtigung zum Senden von Nachrichten. Wenn der Lockdown aufgehoben wird, werden die ursprünglichen Berechtigungen wiederhergestellt. Ein optionaler Auto-Aufhebungs-Timer kann den Lockdown nach einer angegebenen Anzahl von Minuten automatisch beenden. Mitglieder, deren [Moderationslevel](#configuration-modlevels) **Während Lockdown schreiben** oder **Immun gegen Lockdown** gesetzt hat, können weiterhin schreiben.

Du kannst optional bestimmte Kanäle konfigurieren, in die Lockdown- und Aufhebungs-Nachrichten gesendet werden, anstatt sie in jeden betroffenen Kanal zu senden. Die Berechtigungen werden unabhängig von dieser Einstellung dennoch in allen Kanälen geändert.

### Import nativer Discord-Moderation {#native-import}

Mit aktiviertem **Native Moderationsaktionen importieren** (siehe [Konfiguration](#configuration-config)) werden Bans, Unbans, Kicks und Timeouts, die mit Discords eigenen integrierten Tools durchgeführt wurden, in die Moderationsdatenbank und den Log-Kanal des Bots aufgenommen, sodass dein Verlauf und deine Verstoßzähler vollständig bleiben, egal wie eine Aktion ausgeführt wurde. Du kannst es pro Aktionstyp aktivieren (Bans/Unbans, Kicks, Timeouts) und optional dem betroffenen Nutzer eine DM senden. Dies gilt nur für Live-Aktionen (während der Bot läuft) und erfordert, dass der Bot die Berechtigung **Audit-Log ansehen** hat.

## Befehle {#commands}

<SlashCommandExplanation />

| Command                                                                                                                  | Beschreibung                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `/moderate warn user:<User> [reason:<Text>] [proof:<Attachment>] [involved:<User>]`                                      | Verwarnt einen Nutzer.                                                                                                                     |
| `/moderate mute user:<User> duration:<Duration> [reason:<Text>] [proof:<Attachment>] [involved:<User>]`                  | Schaltet einen Nutzer für die angegebene Dauer stumm (Timeout).                                                                            |
| `/moderate unmute user:<User> [reason:<Text>]`                                                                           | Hebt die Stummschaltung eines Nutzers auf.                                                                                                 |
| `/moderate kick user:<User> [reason:<Text>] [proof:<Attachment>] [involved:<User>]`                                      | Kickt einen Nutzer vom Server.                                                                                                             |
| `/moderate ban user:<User> [reason:<Text>] [proof:<Attachment>] [duration:<Duration>] [days:<Number>] [involved:<User>]` | Bannt einen Nutzer. Optional kannst du eine Dauer für einen temporären Ban und die Anzahl der Tage an zu löschenden Nachrichten festlegen. |
| `/moderate unban id:<UserID> [reason:<Text>]`                                                                            | Entbannt einen Nutzer anhand seiner Nutzer-ID. Unterstützt Autovervollständigung.                                                          |
| `/moderate quarantine user:<User> [reason:<Text>] [duration:<Duration>] [involved:<User>]`                               | Setzt einen Nutzer in Quarantäne, indem die Quarantäne-Rolle zugewiesen wird.                                                              |
| `/moderate unquarantine user:<User> [reason:<Text>]`                                                                     | Nimmt einen Nutzer aus der Quarantäne und stellt seine vorherigen Rollen wieder her.                                                       |
| `/moderate channel-mute user:<User> [reason:<Text>] [proof:<Attachment>] [involved:<User>]`                              | Schaltet einen Nutzer nur im aktuellen Kanal stumm.                                                                                        |
| `/moderate remove-channel-mute user:<User> [reason:<Text>]`                                                              | Entfernt eine Kanal-Stummschaltung von einem Nutzer.                                                                                       |
| `/moderate clear [amount:<Number>]`                                                                                      | Löscht aktuelle Nachrichten im aktuellen Kanal (Standard: 5).                                                                              |
| `/moderate lock [reason:<Text>]`                                                                                         | Sperrt den aktuellen Kanal.                                                                                                                |
| `/moderate unlock`                                                                                                       | Entsperrt den aktuellen Kanal.                                                                                                             |
| `/moderate lockdown enable:<Boolean> [reason:<Text>]`                                                                    | Aktiviert oder hebt den serverweiten Lockdown auf (nur verfügbar, wenn das Lockdown-System aktiviert ist).                                 |
| `/moderate notes view user:<User>`                                                                                       | Zeigt alle Notizen zu einem Nutzer an.                                                                                                     |
| `/moderate notes create user:<User> notes:<Text>`                                                                        | Erstellt eine neue Notiz für einen Nutzer.                                                                                                 |
| `/moderate notes edit user:<User> note-id:<Number> notes:<Text>`                                                         | Bearbeitet eine bestehende Notiz.                                                                                                          |
| `/moderate notes delete user:<User> note-id:<Number>`                                                                    | Löscht eine Notiz.                                                                                                                         |
| `/moderate actions user:<User>`                                                                                          | Zeigt alle vergangenen Moderationsaktionen für einen Nutzer an, mit den Buttons pro Fall.                                                  |
| `/moderate revoke-warn warn-id:<ID> [reason:<Text>]`                                                                     | Nimmt eine Verwarnung anhand ihrer ID zurück. Unterstützt Autovervollständigung.                                                           |
| `/moderate edit-duration id:<ID> duration:<Duration> [reason:<Text>]`                                                    | Verkürzt oder verlängert einen aktiven temporären Mute, Ban oder eine Quarantäne. Unterstützt Autovervollständigung.                       |
| `/moderate edit-reason id:<ID> reason:<Text>`                                                                            | Schreibt den Grund eines bestehenden Falls neu. Unterstützt Autovervollständigung.                                                         |
| `/moderate add-proof id:<ID> photo:<Attachment> [photo2:<Attachment>] [photo3:<Attachment>]`                             | Hängt zusätzliche Beweisbilder an einen bestehenden Fall an. Unterstützt Autovervollständigung.                                            |
| `/moderate involve id:<ID> user:<User> [remove:<Boolean>]`                                                               | Verknüpft (oder entfernt mit `remove` die Verknüpfung) einen beteiligten Nutzer mit einem Fall. Unterstützt Autovervollständigung.         |
| `/report user:<User> reason:<Text> [proof:<Attachment>]`                                                                 | Meldet einen Nutzer an das Moderationsteam.                                                                                                |

Hinweise:

- Ob `reason` und `proof` erforderlich sind, hängt von den Konfigurationsoptionen **Begründung erzwingen** und **Beweis-Bild erzwingen** ab.
- Wenn **Benutzerdefinierten Fall-Titel verlangen** aktiviert ist, erscheint eine zusätzliche erforderliche Option `title:<Text>` bei Verwarnen, Stummschalten, Bannen, Kicken, Quarantäne und Kanal-Stummschaltung (sowie in deren Rechtsklick-Dialogen). Wenn die Funktion aus ist, wird überhaupt keine Titel-Option hinzugefügt.
- Die Unterbefehle `edit-duration`, `edit-reason`, `add-proof` und `involve` wirken auf einen bestehenden Fall über dessen ID und funktionieren nur, wenn ihr jeweiliger Opt-in-Schalter aktiviert ist.

## Konfiguration {#configuration}

### Konfiguration {#configuration-config}

In dieser Konfigurationsdatei richtest du die zentralen Moderationseinstellungen ein. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/config).

Moderator-Berechtigungen befinden sich nicht mehr hier - sie werden in der separaten Konfiguration [Moderationslevel](#configuration-modlevels) definiert. Die alten Moderator-Level-1-4-Rollenfelder werden beim Start automatisch in gleichwertige Level migriert und danach ausgeblendet.

| Feld                                                       | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Log-Kanal                                                  | Kanal, in dem Moderationsaktionen protokolliert werden.                                                                                                                                                                                                                                                                                                                                                        |
| Quarantäne-Rolle                                           | Rolle, die quarantänisierten Nutzern zugewiesen wird. Alle anderen Rollen werden entfernt (und zur Wiederherstellung gespeichert).                                                                                                                                                                                                                                                                             |
| Report-Kanal                                               | Kanal, in den Nutzermeldungen gesendet werden. Fällt auf den Log-Kanal zurück, wenn nicht festgelegt.                                                                                                                                                                                                                                                                                                          |
| Bei Quarantäne alle Rollen entfernen                       | Wenn aktiviert, werden einem Nutzer bei der Quarantäne alle Rollen entfernt. Rollen werden gespeichert und beim Aufheben der Quarantäne wiederhergestellt.                                                                                                                                                                                                                                                     |
| Neue Rollen von quarantänisierten Benutzern entfernen      | Wenn aktiviert, wird jede Rolle, die einem quarantänisierten Nutzer hinzugefügt wird (über Discords Tab "Kanäle & Rollen", Reaktionsrollen oder einen anderen Bot), automatisch wieder entfernt. Verwaltete Rollen wie Server-Boosts und Integrationsrollen bleiben unberührt. Standardmäßig aus.                                                                                                              |
| Verhindern Sie das manuelle Entfernen der Quarantäne-Rolle | Wenn aktiviert, weist der Bot die Quarantäne-Rolle erneut zu, wenn ein Teammitglied sie manuell entfernt, anstatt `/moderate unquarantine` zu verwenden, und postet einen Hinweis im Log-Kanal. Wenn aus, bleibt das bisherige Verhalten erhalten: Das manuelle Entfernen der Rolle hebt die Quarantäne des Nutzers weiterhin implizit auf. Standardmäßig aus.                                                 |
| Rollenpings bei Report                                     | Rollen, die im Log-/Report-Kanal gepingt werden, wenn ein Nutzer eine Meldung einreicht.                                                                                                                                                                                                                                                                                                                       |
| Begründung erzwingen                                       | Wenn aktiviert, müssen Moderatoren einen Grund für ihre Aktionen angeben.                                                                                                                                                                                                                                                                                                                                      |
| Beweis-Bild erzwingen                                      | Wenn aktiviert (und "Begründung erzwingen" ebenfalls aktiviert ist), müssen Moderatoren einen Beweis für ihre Aktionen hochladen.                                                                                                                                                                                                                                                                              |
| Aktion bei Invite                                          | Aktion, die ausgeführt wird, wenn ein Nutzer einen Discord-Einladungslink postet. Optionen: keine, nur löschen (die Nachricht ohne Bestrafung entfernen), verwarnen, stummschalten, kicken, in Quarantäne setzen oder bannen.                                                                                                                                                                                  |
| Erlaubte Einladungs-Server-IDs                             | Server-IDs, deren Einladungslinks erlaubt sind und keine Moderation auslösen. Einladungen zu deinem eigenen Server sind immer automatisch erlaubt.                                                                                                                                                                                                                                                             |
| Aktion bei Scam-Link                                       | Aktion, die ausgeführt wird, wenn ein Nutzer einen mutmaßlichen Scam-Link postet. Gleiche Optionen wie bei Einladungen, einschließlich Nur-Löschen.                                                                                                                                                                                                                                                            |
| Level der Scam-Link-Erkennung                              | Gegen welche von SCNX gepflegte Liste abgeglichen wird. "confirmed" filtert nur bestätigte Scam- und Phishing-Domains; "suspicious" wendet zusätzlich Heuristiken an, die noch nicht bestätigte Domains kennzeichnen können.                                                                                                                                                                                   |
| Erlaubte Kanäle für Invitesperre                           | Kanäle oder Kategorien, in denen die Invite-Sperre deaktiviert ist.                                                                                                                                                                                                                                                                                                                                            |
| Erlaubte Rollen für Invitesperre                           | Rollen, die die Invite-Sperre umgehen dürfen.                                                                                                                                                                                                                                                                                                                                                                  |
| Gesperrte Wörter                                           | Wörter, die in Nachrichten blockiert werden.                                                                                                                                                                                                                                                                                                                                                                   |
| Aktion bei gesperrtem Wort                                 | Aktion, die ausgeführt wird, wenn ein Nutzer ein gesperrtes Wort postet. Gleiche Optionen wie bei Einladungen, einschließlich Nur-Löschen.                                                                                                                                                                                                                                                                     |
| Standardmäßige Mute-Länge                                  | Standard-Mute-Dauer, wenn keine angegeben ist. Wird auch für Automod-Aktionen verwendet. Maximal 28 Tage.                                                                                                                                                                                                                                                                                                      |
| Nicknamen bei Mute- / Quarantäne ändern                    | Wenn aktiviert, werden Nutzer bei Mute oder Quarantäne umbenannt. Das Mute-/Quarantäne-Präfix wird über den [zentralen Nicknamen-Manager](/docs/custom-bot/modules/community/nicknames#central-nickname-manager) angewendet, sodass es nur einmal hinzugefügt wird (erneutes Muten erzeugt nie `[Muted] [Muted] X`) und das Aufheben von Mute/Quarantäne jedes Rollen-Präfix oder aktive Streak-Suffix erhält. |
| Neuer Nickname bei Mute                                    | Nicknamen-Vorlage, wenn ein Nutzer stummgeschaltet wird. Unterstützt `%nickname%` (ursprünglicher Nickname).                                                                                                                                                                                                                                                                                                   |
| Nickname während der Quarantäne                            | Nicknamen-Vorlage, wenn ein Nutzer in Quarantäne gesetzt wird. Unterstützt `%nickname%` (ursprünglicher Nickname).                                                                                                                                                                                                                                                                                             |
| Automod                                                    | Definiere automatische Aktionen (Mute, Kick, Ban, Quarantäne) basierend auf der Anzahl der Verwarnungen. Format: Schlüssel = Anzahl der Warns, Wert = Aktion (optional mit Dauer, z. B. "ban:7d").                                                                                                                                                                                                             |
| Sollen Warns automatisch gelöscht werden?                  | Wenn aktiviert, werden Warns nach dem konfigurierten Ablaufzeitraum automatisch entfernt.                                                                                                                                                                                                                                                                                                                      |
| Zeit, nach der Warns automatisch ablaufen                  | Dauer, nach der Warns ablaufen (z. B. "3 months", "1y", "2w").                                                                                                                                                                                                                                                                                                                                                 |
| Native Moderationsaktionen importieren                     | Wenn aktiviert, werden Bans, Unbans, Kicks und Timeouts, die mit Discords nativen Tools durchgeführt wurden, in die Moderationsdatenbank und den Log-Kanal aufgenommen. Erfordert, dass der Bot **Audit-Log ansehen** hat, sonst bleibt es inaktiv.                                                                                                                                                            |
| Native Bans und Unbans importieren                         | Zeichnet Bans und Unbans auf, die mit Discords nativen Tools durchgeführt wurden.                                                                                                                                                                                                                                                                                                                              |
| Native Kicks importieren                                   | Zeichnet Kicks auf, die mit Discords nativen Tools durchgeführt wurden.                                                                                                                                                                                                                                                                                                                                        |
| Native Timeouts importieren                                | Zeichnet Timeouts und Timeout-Aufhebungen auf, die mit Discords nativen Tools durchgeführt wurden.                                                                                                                                                                                                                                                                                                             |
| Nutzer bei importierten Aktionen per DM benachrichtigen    | Versucht, betroffene Nutzer per DM über eine importierte Aktion zu informieren (nach Kicks/Bans meist unmöglich).                                                                                                                                                                                                                                                                                              |
| Aufheben-Buttons                                           | Zeigt Ein-Klick-[Bestrafung aufheben](#lift-punishment)-Buttons an Moderations-Log-Nachrichten und in der Aktionsansicht. Ein Klick fragt nach einem optionalen Grund.                                                                                                                                                                                                                                         |
| Hinzufügen weiterer Beweis-Bilder erlauben                 | Ermöglicht Moderatoren, mit dem **Beweis hinzufügen**-Button oder `/moderate add-proof` zusätzliche Beweisbilder an einen bestehenden Fall anzuhängen; die Log-Nachricht aktualisiert sich an Ort und Stelle.                                                                                                                                                                                                  |
| Verknüpfen beteiligter Nutzer erlauben                     | Ermöglicht Moderatoren, zusätzliche [beteiligte Nutzer](#involved-users) mit einem Fall zu verknüpfen; sie werden über den Vorlagen-Platzhalter `%involved%` angezeigt.                                                                                                                                                                                                                                        |
| Benutzerdefinierten Fall-Titel verlangen                   | Fügt jeder Moderationsaktion ein erforderliches kurzes Titel-Feld hinzu (z. B. "Mehrere Nutzer beleidigt"). Der Titel wird über `%title%` zur Überschrift des Log-Embeds, und die Fallnummer wandert in die Fußzeile.                                                                                                                                                                                          |

### Moderationslevel {#configuration-modlevels}

In dieser Konfigurationsdatei definierst du deine benutzerdefinierten Moderationslevel. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/modLevels).

Jedes Level ist ein Eintrag, der die Rollen auflistet, für die es gilt, und die Berechtigungen, die diese Rollen erhalten. Erstelle so viele benannte Level, wie du möchtest - zum Beispiel ein Trial-Mod-Level mit nur Verwarnen und Stummschalten und ein dediziertes Anti-Raid-Level mit nichts als Lockdown-Kontrolle. Ein Mitglied erhält die kombinierten Berechtigungen jedes Levels, dessen Rollen es besitzt. Wenn du aktualisierst, wird dein altes Moderator-Level-1-4-Setup automatisch in gleichwertige Level migriert und funktioniert genau wie zuvor.

| Feld                               | Beschreibung                                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Level-Name                         | Ein Name für dieses Moderationslevel, der nur im Dashboard zu deiner eigenen Referenz angezeigt wird.                           |
| Rollen                             | Mitglieder, die eine dieser Rollen besitzen, erhalten die Berechtigungen dieses Levels.                                         |
| Mitglieder verwarnen               | Erlaubt das Verwarnen von Mitgliedern und das Verwalten von Verwarnungsnotizen.                                                 |
| Mitglieder stummschalten           | Erlaubt das Stummschalten und Aufheben der Stummschaltung von Mitgliedern.                                                      |
| Kanäle sperren                     | Erlaubt das Sperren und Entsperren von Kanälen.                                                                                 |
| Mitglieder kanalweit stummschalten | Erlaubt das kanalweite Stummschalten von Mitgliedern und das Entfernen von Kanal-Stummschaltungen.                              |
| Mitglieder kicken                  | Erlaubt das Kicken von Mitgliedern vom Server.                                                                                  |
| Nachrichten löschen                | Erlaubt das Massenlöschen von Nachrichten aus Kanälen.                                                                          |
| Mitglieder in Quarantäne setzen    | Erlaubt das Setzen in und Aufheben aus der Quarantäne von Mitgliedern.                                                          |
| Mitglieder bannen                  | Erlaubt das Bannen und Entbannen von Mitgliedern.                                                                               |
| Automod umgehen                    | Mitglieder dieses Levels sind von Anti-Spam- und Nachrichtenschutz-Filtern ausgenommen.                                         |
| Immun gegen Meldungen              | Mitglieder dieses Levels können nicht von anderen Nutzern gemeldet werden.                                                      |
| Während Lockdown schreiben         | Mitglieder dieses Levels behalten die Möglichkeit, Nachrichten zu senden, wenn ein Lock-All ausgelöst wird.                     |
| Immun gegen Lockdown               | Mitglieder dieses Levels sind vollständig von Server-Lockdowns ausgenommen, einschließlich Kanal-Berechtigungsüberschreibungen. |

### Anti-Spam {#anti-spam}

In dieser Konfigurationsdatei richtest du das Anti-Spam-System ein. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/antiSpam).

Anti-Spam ist in einzelne Detektoren aufgeteilt, die du separat aktivierst, einstellst und mit Aktionen versiehst. Es gibt eine Reihe geteilter Einstellungen und eine Standardaktion, und dann kann jeder Detektor das Zeitfenster, die Aktion und das Auto-Lösch-Verhalten überschreiben und seine eigene Benachrichtigungsnachricht verwenden.

#### Geteilte Einstellungen

| Feld                                          | Beschreibung                                                                                                                                                                                                                           |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviert                                     | Aktiviert oder deaktiviert das gesamte Anti-Spam-System.                                                                                                                                                                               |
| Zeitfenster (in Sekunden)                     | Standard-Zeitfenster, in dem Nachrichten zur Spam-Erkennung verfolgt werden. Jeder Detektor kann dies überschreiben.                                                                                                                   |
| Aktion                                        | Standardaktion, die ausgeführt wird, wenn ein Detektor auslöst (verwarnen, stummschalten, kicken, in Quarantäne setzen oder bannen). Detektoren mit "übernehmen" verwenden diese.                                                      |
| Erkannte Spam-Nachrichten automatisch löschen | Globaler Standard: Löscht auch die Nachrichten, die eine Erkennung ausgelöst haben. Auto-Löschen räumt den gesamten beanstandeten Schwall über jeden Kanal hinweg auf, in dem er gelandet ist. Jeder Detektor kann dies überschreiben. |
| Chatnachricht senden                          | Wenn aktiviert, postet der Bot eine Benachrichtigung im Kanal, wenn ein Detektor auslöst.                                                                                                                                              |
| Nachricht                                     | Die Benachrichtigungsnachricht. Unterstützt `%userid%`, `%reason%`, `%type%` (Detektor-Bezeichnung), `%count%`, `%threshold%`, `%timeframe%` und `%action%`.                                                                           |
| Ignorierte Kanäle                             | Kanäle, in denen Anti-Spam deaktiviert ist.                                                                                                                                                                                            |
| Ignorierte Rollen                             | Rollen, die von der Anti-Spam-Erkennung ausgenommen sind.                                                                                                                                                                              |

#### Felder pro Detektor

Jeder Detektor teilt sich denselben Satz an Optionen, zusätzlich zu seinen eigenen Grenzwert-Feldern:

| Feld                                     | Beschreibung                                                                                                      |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ...-Erkennung aktivieren                 | Schaltet diesen bestimmten Detektor ein oder aus.                                                                 |
| Zeitfenster-Überschreibung (in Sekunden) | Erkennungsfenster für diesen Detektor; leer lassen, um das globale Zeitfenster zu verwenden.                      |
| Aktion                                   | Aktion für diesen Detektor; "Standardaktion übernehmen" verwendet die globale Aktion, "Keine Aktion" löscht nur.  |
| Aktionsdauer (nur Mute/Ban)              | Dauer für einen Mute oder Ban (z. B. 1h, 7d); leer lassen für die Standarddauer.                                  |
| Spam-Nachrichten automatisch löschen     | Überschreibt die globale Auto-Lösch-Voreinstellung für diesen Detektor (übernehmen / an / aus).                   |
| Benachrichtigungs-Überschreibung         | Eine Chat-Benachrichtigung nur für diesen Detektor; leer lassen, um auf die globale **Nachricht** zurückzufallen. |

Die Detektoren und ihre Grenzwert-Felder sind:

| Detektor             | Grenzwert-Feld(er)                                                                                                                                                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Nachrichtenrate      | **Maximale Nachrichten im Zeitfenster**                                                                                                                                                                                                                                                                                                                |
| Doppelte Inhalte     | **Maximale gleiche Nachrichten im Zeitfenster**                                                                                                                                                                                                                                                                                                        |
| Nutzer-Erwähnungen   | **Maximale Pings im Zeitfenster** (zählt auch Antworten)                                                                                                                                                                                                                                                                                               |
| Massenerwähnungen    | **Maximale Massenpings im Zeitfenster** (@everyone, @here, Rollen-Pings)                                                                                                                                                                                                                                                                               |
| Anhang-/Bild-Spam    | **Max. Nachrichten mit Anhängen im Zeitfenster**                                                                                                                                                                                                                                                                                                       |
| Link-Spam            | **Max. Nachrichten mit Links im Zeitfenster**                                                                                                                                                                                                                                                                                                          |
| Zeilen-/Zeichen-Flut | **Max. Zeilenumbrüche pro Nachricht** und **Max. Zeichen pro Nachricht** (eine einzelne Nachricht, die eines der Limits überschreitet, löst aus)                                                                                                                                                                                                       |
| Sticker-/Emoji-Spam  | **Max. Sticker-/Emoji-Nachrichten im Zeitfenster** und **Benutzerdefinierte Emojis, die als Spam zählen**                                                                                                                                                                                                                                              |
| Kanal-Streuung       | **Max. verschiedene Kanäle im Zeitfenster** (derselbe Nutzer postet über viele Kanäle hinweg)                                                                                                                                                                                                                                                          |
| Text-Missbrauch      | **Beanstandete Nachrichten vor Aktion**, plus Schalter pro Prüfung: **Caps-Spam erkennen** (mit Mindestanzahl Buchstaben und Großbuchstaben-Prozentsatz), **Wiederholte Zeichen erkennen** (max. Folgenlänge), **Zalgo / Unicode-Missbrauch erkennen** (Prozentsatz kombinierender Zeichen) und **Spoiler-Spam erkennen** (max. Blöcke pro Nachricht). |

### Einschränkungen für neue Mitglieder {#new-member-restrictions}

Diese Einstellungen befinden sich in der [Anti-Spam-Konfiguration](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/antiSpam) unter der Kategorie Neue-Mitglieder-Einschränkungen. Sie verlangen eine Mindestzeit auf dem Server, bevor neue Mitglieder Anhänge und/oder Links posten dürfen - eine einfache Wand gegen Wegwerf-Accounts, die beitreten und sofort einen Scam-Link einfügen. Nachrichten, die gegen die Regel verstoßen, werden mit einem optionalen Hinweis gelöscht, und Wiederholungstäter können zu einer Moderationsaktion eskaliert werden.

| Feld                                       | Beschreibung                                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Neue-Mitglieder-Einschränkungen aktivieren | Schaltet die Neue-Mitglieder-Einschränkungen ein oder aus.                                                         |
| Anhang-Einschränkungsalter                 | Mitglieder, die jünger als dies sind (z. B. 1d), können keine Anhänge posten; leer lassen, um Anhänge zu erlauben. |
| Link-Einschränkungsalter                   | Mitglieder, die jünger als dies sind (z. B. 12h), können keine Links posten; leer lassen, um Links zu erlauben.    |
| Bei Verstoß benachrichtigen                | Sendet einen kurzen, automatisch entfernten Hinweis im Kanal, wenn eine eingeschränkte Nachricht gelöscht wird.    |
| Hinweistext                                | Der Hinweistext. Unterstützt `%userid%`, `%type%` (Anhänge oder Links), `%required%`, `%count%` und `%threshold%`. |
| Verstöße vor Aktion                        | Anzahl der Verstöße innerhalb des Zeitfensters, die zu einer Moderationsaktion eskalieren; 0 eskaliert nie.        |
| Verstoß-Zeitfenster (in Sekunden)          | Zeitraum, über den Verstöße auf den Grenzwert gezählt werden.                                                      |
| Aktion                                     | Aktion für Wiederholungsverstöße; "übernehmen" verwendet die globale Anti-Spam-Aktion.                             |
| Aktionsdauer (nur Mute/Ban)                | Dauer für einen Mute oder Ban; leer lassen für die Standarddauer.                                                  |

### Log-Nachrichten {#configuration-logmessages}

In dieser Konfigurationsdatei passt du die Fall-Log-Nachrichten an, die in deinen Moderations-Log-Kanal und optional in einen öffentlichen Log-Kanal gepostet werden. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/logMessages).

Jeder Aktionstyp hat seine eigene bearbeitbare Embed-Vorlage, die mit dem vollständigen Embed-Editor geöffnet wird: **Stummschaltung**, **Stummschaltung aufheben**, **Quarantäne**, **Quarantäne aufheben**, **Kick**, **Bann**, **Verwarnung**, **Kanal-Stummschaltung**, **Kanal-Stummschaltung aufheben**, **Verwarnung entfernen** und **Entbannungs-Log-Nachricht**. Die Embed-Farbe wird immer automatisch gesetzt (gelb für temporär, grün für Aufhebungen, rot für Basis-Aktionen) und überschreibt jede Farbe in der Vorlage; die Felder für Ablauf, Beweis und Kanal werden automatisch angehängt, wenn sie zutreffen.

Vorlagen unterstützen diese Platzhalter:

| Platzhalter                                           | Bedeutung                                                                                     |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `%title%`                                             | Benutzerdefinierter Fall-Titel oder das lokalisierte "Fall #N", wenn keiner gesetzt ist.      |
| `%case%`                                              | Die Fall-(Aktions-)ID-Nummer.                                                                 |
| `%victim%` / `%victimId%` / `%victimAvatar%`          | Name, Nutzer-ID und Avatar des betroffenen Mitglieds.                                         |
| `%moderator%` / `%moderatorId%` / `%moderatorAvatar%` | Name, Nutzer-ID und Avatar des handelnden Moderators.                                         |
| `%action%`                                            | Aktions-Bezeichnung (mit tmp-Präfix bei temporären Aktionen).                                 |
| `%reason%`                                            | Grund für die Aktion.                                                                         |
| `%date%`                                              | Formatierter Zeitstempel, wann die Aktion ausgeführt wurde.                                   |
| `%expires%` / `%expiresAt%`                           | Formatierter Ablauf oder ein Live-Countdown-Zeitstempel; leer, wenn die Aktion nicht abläuft. |
| `%duration%`                                          | Menschenlesbare Länge einer temporären Aktion oder leer.                                      |
| `%channelName%` / `%channelMention%`                  | Name / Erwähnung des zugehörigen Kanals oder leer.                                            |
| `%involved%`                                          | Erwähnungen der zusätzlich mit diesem Fall verknüpften Nutzer oder leer, wenn keine.          |

#### Öffentliche Logs

Spiegle Aktionen optional in einen zweiten, öffentlichen Kanal mit einer separaten, anders formulierten Nachricht pro Aktionstyp - halte das detaillierte interne Log privat, während du eine freundlichere Mitteilung mit deiner Community teilst.

| Feld                                                                                                                  | Beschreibung                                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal für öffentliche Log-Nachrichten                                                                                 | Kanal, in den öffentliche Moderations-Logs gesendet werden; leer lassen, um öffentliches Logging zu deaktivieren.                                                                                                     |
| Öffentliche Log-Nachrichten aktivieren                                                                                | Hauptschalter für das öffentliche Log; wenn aus, werden unabhängig von den Einstellungen pro Typ keine öffentlichen Logs gesendet.                                                                                    |
| Beweise in öffentlichen Log-Nachrichten anzeigen                                                                      | Wenn an, werden Beweis-Anhänge auch im öffentlichen Log gezeigt (standardmäßig aus, damit Beweise nicht öffentlich sichtbar werden).                                                                                  |
| Öffentliche Log-Nachricht: Stummschaltungen / Stummschaltung-Aufhebungen / Banns / Entbannungen / Kicks / Quarantänen | Schalter pro Aktion, ob dieser Aktionstyp auch öffentlich protokolliert wird.                                                                                                                                         |
| ...: Öffentliche Log-Nachricht                                                                                        | Die bearbeitbare Embed-Vorlage, die im öffentlichen Kanal für jeden aktivierten Aktionstyp verwendet wird. Nutzt dieselben Platzhalter wie oben; automatische Felder werden öffentlichen Nachrichten nie hinzugefügt. |

### Anti-Join-Raid {#anti-join-raid}

In dieser Konfigurationsdatei richtest du das Anti-Join-Raid-System ein. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/antiJoinRaid).

| Feld                     | Beschreibung                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Aktiviert                | Aktiviert oder deaktiviert das Anti-Join-Raid-System.                                                                    |
| Zeitfenster (in Minuten) | Zeitfenster, in dem Beitritte verfolgt werden.                                                                           |
| Maximale Beitrittsanzahl | Anzahl der im Zeitfenster erlaubten Beitritte, bevor das System auslöst.                                                 |
| Aktion                   | Aktion gegen Nutzer, die das System auslösen (stummschalten, kicken, in Quarantäne setzen, bannen oder Rolle vergeben).  |
| Rolle                    | Rolle, die Nutzern zugewiesen wird, wenn die Aktion "give-role" ist.                                                     |
| Andere Rollen entfernen  | Wenn aktiviert (und die Aktion "give-role" ist), werden dem Nutzer nach einer kurzen Verzögerung andere Rollen entfernt. |

### Join Gate {#join-gate}

In dieser Konfigurationsdatei richtest du das Join Gate ein. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/joinGate).

| Feld                    | Beschreibung                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Aktiviert?              | Aktiviert oder deaktiviert das Join Gate.                                                                                      |
| Alle Nutzer filtern     | Wenn aktiviert, werden Aktionen gegen alle neuen Nutzer unabhängig von den Kriterien ausgeführt.                               |
| Aktion                  | Aktion, wenn ein Nutzer das Join Gate nicht besteht (stummschalten, kicken, in Quarantäne setzen, bannen oder Rolle vergeben). |
| Rolle                   | Rolle, die Nutzern zugewiesen wird, wenn die Aktion "give-role" ist.                                                           |
| Andere Rollen entfernen | Wenn aktiviert (und die Aktion "give-role" ist), werden dem Nutzer andere Rollen entfernt.                                     |
| Minimales Accountalter  | Mindest-Accountalter in Tagen, das erforderlich ist, um das Join Gate zu bestehen.                                             |
| Benötige Profilbild     | Wenn aktiviert, müssen Nutzer ein Profilbild gesetzt haben, um das Join Gate zu bestehen.                                      |
| Ignoriere Bots          | Wenn aktiviert, dürfen Bots das Join Gate ohne Einschränkungen passieren.                                                      |

### Anti-Grief {#anti-grief}

In dieser Konfigurationsdatei richtest du das Anti-Grief-System ein, um Moderator-Missbrauch zu verhindern. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/antiGrief).

Diese Funktion setzt automatisch Moderatoren in Quarantäne, die die konfigurierten Limits für Moderationsaktionen innerhalb eines Zeitfensters überschreiten. Damit dies korrekt funktioniert, platziere die Rolle deines Bots über allen anderen Rollen und stelle sicher, dass die Quarantäne-Rolle direkt darunter liegt.

| Feld                                                | Beschreibung                                                                                  |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Aktiviert                                           | Aktiviert oder deaktiviert das Anti-Grief-System.                                             |
| Zeitfenster (in Stunden)                            | Zeitfenster, in dem Moderationsaktionen gezählt werden.                                       |
| Maximale Anzahl von Verwarnungen in dem Zeitfenster | Maximale Verwarnungen, die ein Moderator ausführen kann, bevor er in Quarantäne gesetzt wird. |
| Maximale Anzahl von Mutes in dem Zeitfenster        | Maximale Mutes, die ein Moderator ausführen kann, bevor er in Quarantäne gesetzt wird.        |
| Maximale Anzahl von Kicks in dem Zeitfenster        | Maximale Kicks, die ein Moderator ausführen kann, bevor er in Quarantäne gesetzt wird.        |
| Maximale Anzahl von Bans in dem Zeitfenster         | Maximale Bans, die ein Moderator ausführen kann, bevor er in Quarantäne gesetzt wird.         |

### Verifikation {#verification}

In dieser Konfigurationsdatei richtest du das Verifikationssystem für neue Mitglieder ein. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/verification).

#### Verifikationsarten

| Art                       | Beschreibung                                                                                                                                                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bild-Captcha (Standard)   | Nutzer klicken einen "Verify Me"-Button im Verifizierungs-Kanal. Eine ephemere Nachricht mit einem verzerrten Captcha-Bild wird angezeigt. Sie klicken auf "Enter Solution", um einen Dialog zu öffnen, in den sie die Antwort eingeben.                                      |
| Bild-Captcha (DM, Legacy) | Der ursprüngliche DM-basierte Captcha-Ablauf. Der Bot sendet ein Captcha-Bild per DM und der Nutzer antwortet dort. Der Verifizierungs-Kanal dient als Fallback für Nutzer mit deaktivierten DMs.                                                                             |
| Wort                      | Nutzer klicken "Verify Me" und ein Dialog öffnet sich mit einem Wort, das sie erneut eingeben müssen. Die Schwierigkeit steuert Wortlänge und Ungebräuchlichkeit.                                                                                                             |
| Mathe                     | Nutzer klicken "Verify Me" und ein Dialog öffnet sich mit einer Rechenaufgabe. Die Schwierigkeit steuert die Größe der Operanden und die verwendeten Operatoren.                                                                                                              |
| Manuell                   | Wenn ein Mitglied beitritt, erhält es eine DM, die erklärt, was als Nächstes passiert, und dein Team erhält sofort eine Freigabe-Anfrage mit **Freigeben** / **Ablehnen**-Buttons im Verifizierungs-Log-Kanal - ohne darauf zu warten, dass das Mitglied zuerst etwas klickt. |
| Button                    | Nutzer klicken "Verify Me" und werden sofort verifiziert. Keine Herausforderung, keine Wiederholungen, keine Cooldowns - nützlich, wenn du nur ein Ein-Klick-Opt-in möchtest.                                                                                                 |

#### Konfiguration

| Feld                                                | Beschreibung                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviert?                                          | Aktiviert oder deaktiviert das Verifikationssystem.                                                                                                                                                                                                                                                                              |
| Rolle für Nutzer, die sich noch verifizieren müssen | Rolle, die Nutzern vor Abschluss der Verifikation zugewiesen wird.                                                                                                                                                                                                                                                               |
| Rolle für Nutzer mit bestandener Verifikation       | Rolle, die Nutzern nach erfolgreicher Verifikation zugewiesen wird.                                                                                                                                                                                                                                                              |
| Verifizierungs-Log-Kanal                            | Kanal, in dem Verifikationsaktionen protokolliert werden und manuelle Freigabe-Anfragen erscheinen.                                                                                                                                                                                                                              |
| Art der Verifikation                                | Wie neue Mitglieder sich verifizieren. Eine von **Bild-Captcha** (Bild im Kanal), **Bild-Captcha (DM)** (Legacy, per DM gesendet), **Wort** (ein gezeigtes Wort erneut eingeben), **Mathe** (eine Rechenaufgabe lösen), **Manuell** (ein Moderator gibt jedes Mitglied frei) oder **Button** (ein Klick, keine Herausforderung). |
| Schwierigkeitsgrad der Herausforderung              | Schwierigkeit der Verifikations-Herausforderung: einfach, mittel oder schwer. Gilt für Bild-Captcha, Bild-Captcha (DM), Wort und Mathe. Wird bei Manuell und Button ignoriert.                                                                                                                                                   |
| Aktion bei Fehlschlagen der Verifikation            | Aktion, wenn ein Nutzer alle Verifikationsversuche aufgebraucht hat: kicken, in Quarantäne setzen, bannen oder stummschalten (Timeout).                                                                                                                                                                                          |
| Verifizierungs-Kanal                                | Kanal, in dem der "Verify Me"-Button angezeigt wird. Für die Legacy-DM-Art dient er als Fallback für Nutzer mit deaktivierten DMs.                                                                                                                                                                                               |
| Maximale Verifizierungsversuche                     | Wie viele Versuche ein Nutzer bekommt, bevor die Fehlschlags-Aktion angewendet wird. Gilt für Bild-Captcha, Bild-Captcha (DM), Wort und Mathe. Standard: 3.                                                                                                                                                                      |
| Cooldown zwischen den Versuchen                     | Wie lange ein Nutzer zwischen Verifikationsversuchen warten muss (z. B. 5m, 10m). Standard: 5m.                                                                                                                                                                                                                                  |
| Strafdauer bearbeiten                               | Dauer der Mute- oder Quarantäne-Bestrafung (z. B. 1h, 1d). Gilt nur, wenn die Aktion bei Fehlschlagen Mute oder Quarantäne ist. Standard: 1h.                                                                                                                                                                                    |
| Cooldown Nachricht                                  | Nachricht, die angezeigt wird, während ein Nutzer im Wiederholungs-Cooldown ist.                                                                                                                                                                                                                                                 |
| Captcha-Nachricht                                   | Nachricht, die mit dem Captcha-Bild angezeigt wird.                                                                                                                                                                                                                                                                              |
| Manuelle-Verifikation-Nachricht                     | Nachricht, die an Nutzer gesendet wird, die auf manuelle Verifikation warten.                                                                                                                                                                                                                                                    |
| Captcha fehlgeschlagen-Nachricht                    | Nachricht, die angezeigt wird, wenn ein Nutzer die Verifikation nicht besteht.                                                                                                                                                                                                                                                   |
| Captcha abgeschlossen-Nachricht                     | Nachricht, die angezeigt wird, wenn ein Nutzer die Verifikation erfolgreich abschließt.                                                                                                                                                                                                                                          |
| Verifkations-Kanal-Info-Nachricht                   | Einführungsnachricht, die im Verifizierungs-Kanal angezeigt wird.                                                                                                                                                                                                                                                                |

#### Wiederholungssystem

Bei Bild-Captcha, Bild-Captcha (DM), Wort- oder Mathe-Verifikation erhalten Nutzer mehrere Versuche, sich zu verifizieren. Nach jedem fehlgeschlagenen Versuch müssen sie den konfigurierten Cooldown abwarten, bevor sie es erneut versuchen. Sobald alle Versuche aufgebraucht sind, wird die konfigurierte Fehlschlags-Aktion (kicken, bannen, stummschalten oder in Quarantäne setzen) angewendet.

Manuelle Verifikation hat keinen Wiederholungszähler (Moderatoren prüfen die Anfrage stattdessen erneut), und bei der Button-Verifikation gibt es nichts, was fehlschlagen kann.

Der Wiederholungszähler bleibt über Bot-Neustarts hinweg erhalten. Wenn ein Nutzer den Server verlässt und erneut beitritt, bleibt seine bisherige Versuchsanzahl erhalten. Eine ausstehende manuelle Anfrage wird abgebrochen, wenn ein Mitglied den Server verlässt, und die zugehörige Freigabe-/Ablehnungs-Log-Nachricht wird entschärft, sodass ein wieder beitretendes Mitglied nicht durch eine veraltete Anfrage ausgesperrt wird.

### Lockdown {#configuration-lockdown}

In dieser Konfigurationsdatei richtest du das serverweite Lockdown-System ein. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/lockdown).

| Feld                                                          | Beschreibung                                                                                                                                                                                                                                        |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lockdown-System aktivieren?                                   | Aktiviert den `/moderate lockdown`-Befehl und automatische Lockdown-Auslöser.                                                                                                                                                                       |
| Lockdown-Log-Kanal                                            | Kanal für detaillierte Lockdown-Log-Einträge. Fällt auf den Moderations-Log-Kanal zurück, wenn nicht festgelegt.                                                                                                                                    |
| Nachricht in betroffenen Kanälen senden?                      | Wenn aktiviert, wird bei Aktivierung oder Aufhebung des Lockdowns eine Nachricht in betroffenen Kanälen gesendet.                                                                                                                                   |
| Kanäle für Lockdown-Nachrichten                               | Bestimmte Textkanäle, in die Lockdown- und Aufhebungs-Nachrichten gesendet werden. Leer lassen, um Nachrichten in alle betroffenen Kanäle zu senden. Die Berechtigungen werden unabhängig von dieser Einstellung dennoch in allen Kanälen geändert. |
| Lockdown-Aktivierungsnachricht                                | Nachricht, die bei Aktivierung des Lockdowns in betroffenen Kanälen gesendet wird. Unterstützt `%reason%` und `%user%`.                                                                                                                             |
| Lockdown-Aufhebungsnachricht                                  | Nachricht, die bei Aufhebung des Lockdowns in betroffenen Kanälen gesendet wird. Unterstützt `%user%`.                                                                                                                                              |
| Lockdown automatisch aufheben nach (Minuten, 0 = nur manuell) | Hebt den Lockdown nach der angegebenen Anzahl von Minuten automatisch auf. Auf 0 setzen für Nur-Manuell.                                                                                                                                            |
| Automatischer Lockdown bei Join-Raid?                         | Aktiviert automatisch einen Lockdown, wenn das Anti-Join-Raid-System auslöst.                                                                                                                                                                       |
| Automatischer Lockdown bei Join-Gate-Verletzungen?            | Aktiviert automatisch einen Lockdown, wenn das Join-Gate-System auslöst.                                                                                                                                                                            |
| Automatischer Lockdown bei Spam-Erkennung?                    | Aktiviert automatisch einen Lockdown, wenn das Anti-Spam-System auslöst.                                                                                                                                                                            |

### Nachrichten {#configuration-strings}

In dieser Konfigurationsdatei kannst du alle vom Modul gesendeten Nachrichten anpassen. Öffne sie in deinem [Dashboard](/de/glink?page=bot/configuration?file=moderation%7Cconfigs/strings).

| Feld                           | Beschreibung                                                                                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Keine Berechtigung             | Nachricht, die angezeigt wird, wenn einem Moderator die erforderliche Berechtigung fehlt. Unterstützt `%required_level%`.                                          |
| Nutzer nicht gefunden          | Nachricht, die angezeigt wird, wenn eine angegebene Nutzer-ID ungültig ist.                                                                                        |
| Fehlender Grund                | Nachricht, die angezeigt wird, wenn ein Grund erforderlich, aber nicht angegeben ist.                                                                              |
| Ziel ist ein Moderator         | Nachricht, die angezeigt wird, wenn ein Moderator versucht, gegen einen anderen Moderator vorzugehen.                                                              |
| Meldung eingereicht            | Bestätigung, die an Nutzer nach dem Einreichen einer Meldung gesendet wird. Unterstützt `%user%` und `%mURL%`.                                                     |
| Mute-Nachricht                 | DM an stummgeschaltete Nutzer. Unterstützt `%user%` und `%reason%`.                                                                                                |
| Kanal-Mute-Nachricht           | DM an kanalweit stummgeschaltete Nutzer. Unterstützt `%user%`, `%reason%` und `%channel%`.                                                                         |
| Kanal-Entmute-Nachricht        | DM, wenn eine Kanal-Stummschaltung entfernt wird. Unterstützt `%user%`, `%reason%` und `%channel%`.                                                                |
| Temporäre-Mute-Nachricht       | DM an temporär stummgeschaltete Nutzer. Unterstützt `%user%`, `%reason%` und `%date%`.                                                                             |
| Quarantäne-Nachricht           | DM an quarantänisierte Nutzer. Unterstützt `%user%` und `%reason%`.                                                                                                |
| Temporäre-Quarantäne-Nachricht | DM an temporär quarantänisierte Nutzer. Unterstützt `%user%`, `%reason%` und `%date%`.                                                                             |
| Entquarantäne-Nachricht        | DM, wenn die Quarantäne aufgehoben wird. Unterstützt `%user%` und `%reason%`.                                                                                      |
| Entmute-Nachricht              | DM an Nutzer, deren Stummschaltung aufgehoben wird. Unterstützt `%user%` und `%reason%`.                                                                           |
| Kick-Nachricht                 | DM an gekickte Nutzer. Unterstützt `%user%` und `%reason%`.                                                                                                        |
| Ban-Nachricht                  | DM an gebannte Nutzer. Unterstützt `%user%` und `%reason%`.                                                                                                        |
| Temporäre-Ban-Nachricht        | DM an temporär gebannte Nutzer. Unterstützt `%user%`, `%reason%` und `%date%`.                                                                                     |
| Verwarnungs-Nachricht          | DM an verwarnte Nutzer. Unterstützt `%user%` und `%reason%`.                                                                                                       |
| Nachricht bei Dauer-Änderung   | DM, wenn ein Moderator [bearbeitet, wie lange](#edit-duration) eine temporäre Bestrafung dauert. Unterstützt `%user%`, `%reason%` und `%date%` (den neuen Ablauf). |
| Kanal-Sperr-Nachricht          | Nachricht, die in einem Kanal gesendet wird, wenn er gesperrt wird. Unterstützt `%user%` und `%reason%`.                                                           |
| Kanal-Entsperr-Nachricht       | Nachricht, die in einem Kanal gesendet wird, wenn er entsperrt wird. Unterstützt `%user%`.                                                                         |

## Fehlerbehebung {#troubleshooting}

- **Der Bot sagt, der Moderator hat keine Berechtigungen**: Stelle sicher, dass die Rolle des Moderators einem [Moderationslevel](#configuration-modlevels) zugewiesen ist, das die Berechtigung der Aktion gewährt. Ein Level, das nur "Mitglieder verwarnen" hat, kann nicht stummschalten, kicken oder bannen.
- **Der Quarantäne-Befehl funktioniert nicht**: Stelle sicher, dass die Quarantäne-Rolle konfiguriert ist und die Rolle des Bots in der Rollenhierarchie über der Quarantäne-Rolle steht. Der Bot benötigt die Berechtigung "Rollen verwalten".
- **Bans/Kicks schlagen fehl**: Der Bot benötigt die Berechtigungen "Mitglieder bannen" und "Mitglieder kicken". Die höchste Rolle des Bots muss außerdem über der höchsten Rolle des Zielnutzers stehen.
- **Anti-Spam erkennt keinen Spam**: Überprüfe, dass Anti-Spam insgesamt aktiviert ist, dass der spezifische Detektor, den du erwartest (zum Beispiel Link-Spam oder Text-Missbrauch), eingeschaltet ist und dass der Kanal nicht auf der Whitelist steht. Prüfe außerdem, dass die Rolle des Nutzers nicht auf der Whitelist steht oder "Automod umgehen" gewährt bekommt.
- **Invite-/Scam-Link-Erkennung funktioniert nicht**: Stelle sicher, dass "Aktion bei Invite" oder "Aktion bei Scam-Link" auf etwas anderes als "keine" gesetzt ist. Prüfe, dass der Kanal nicht auf der Whitelist steht.
- **Verifikations-DMs schlagen fehl**: Manche Nutzer haben DMs deaktiviert. Wenn du einen "Restart Verification-Channel" einrichtest, können Nutzer ihre Verifikation nach dem Aktivieren von DMs erneut versuchen.
- **Der Lockdown-Befehl ist nicht verfügbar**: Das Lockdown-System muss in der [Lockdown-Konfiguration](#configuration-lockdown) aktiviert werden, bevor der `/moderate lockdown`-Befehl erscheint.
- **Native Discord-Aktionen werden nicht protokolliert**: Aktiviere "Native Moderationsaktionen importieren" (und die Schalter pro Typ) und stelle sicher, dass der Bot die Berechtigung "Audit-Log ansehen" hat. Es werden nur Live-Aktionen aufgezeichnet.
- **Anti-Grief hat einen Moderator in Quarantäne gesetzt**: Dies ist das beabsichtigte Verhalten, wenn ein Moderator die konfigurierten Limits überschreitet. Überprüfe und passe die Limits bei Bedarf an. Beachte, dass Anti-Grief nur Aktionen zählt, die über das Moderations-Modul ausgeführt werden; Missbrauch mit Discords eigenen Tools löst es nicht aus, auch wenn diese Aktionen über den [Import nativer Moderation](#native-import) aufgezeichnet werden können.

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden für Moderationsaktionen gespeichert:

- Die Nutzer-ID des Opfers und des Moderators
- Die Art der Aktion (Warn, Mute, Kick, Ban, Quarantäne usw.)
- Der Grund und, wenn aktiviert, der benutzerdefinierte Fall-Titel
- Alle verknüpften beteiligten Nutzer-IDs (nur als Referenz)
- Referenzen auf Beweisbilder, die in der Datei-Bibliothek archiviert sind
- Fall-Ereignisse wie Grund-Bearbeitungen und Dauer-Änderungen
- Zusätzliche Daten (wie gespeicherte Rollen für die Quarantäne)
- Das Ablaufdatum (für temporäre Aktionen)
- Metadaten über den Eintrag (Datum der Erstellung und letzten Aktualisierung)

Die folgenden Daten werden für Nutzer-Notizen gespeichert:

- Die Nutzer-ID
- Alle Notizen (einschließlich Notizinhalt, Autor-ID und Zeitstempeln)
- Metadaten über den Eintrag (Datum der Erstellung und letzten Aktualisierung)

Die folgenden Daten werden für den Lockdown-Zustand gespeichert:

- Ob der Lockdown aktiv ist
- Der Grund und wer ihn ausgelöst hat
- Ob er automatisch war
- Eine Sicherung der Kanal-Berechtigungen zur Wiederherstellung
- Metadaten über den Eintrag (Datum der Erstellung und letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/docs/custom-bot/additional-features#reset-module-database).
