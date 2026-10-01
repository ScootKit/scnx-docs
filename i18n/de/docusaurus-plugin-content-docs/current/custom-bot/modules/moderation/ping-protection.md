# Ping-Schutz

Schütze bestimmte Mitglieder und Rollen mit konfigurierbaren Moderationsaktionen vor unerwünschten Erwähnungen.

<ModuleOverview moduleName="ping-protection" />

## Funktionen {#features}

- Schütze bestimmte Nutzer und Rollen davor, von nicht berechtigten Mitgliedern gepingt zu werden.
- Schütze automatisch alle Nutzer, die eine geschützte Rolle besitzen, falls aktiviert.
- Stelle bestimmte Nutzer, Rollen und Kanäle (einschließlich ganzer Kanalkategorien) vom Ping-Schutz frei.
- Nutze optional Discords natives AutoMod, um Nachrichten mit geschützten Pings zu blockieren, bevor sie gesendet werden.
- Konfigurierbare Moderationsaktionen (Mute oder Kick), wenn ein Nutzer zu oft geschützte Mitglieder/Rollen pingt, mit
  optionalen [rollenbasierten Ping-Schwellenwerten](#role-thresholds) pro Aktion.
- [Einheitliches Nutzer-Panel](#user-panel) zum Ansehen des Ping- und Moderationsverlaufs und zum Verwalten gespeicherter Daten, mit
  Lösch-Abklingzeiten pro Kategorie.
- Konfigurierbare Richtlinien zur Datenaufbewahrung für den Ping-Verlauf und Moderationsprotokolle.
- Erfasse Nutzer, die den Server verlassen und erneut beitreten.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=ping-protection) auf deinem Server.
2. Öffne die [Allgemeine Konfiguration](#configuration-general) und füge die Nutzer und/oder Rollen hinzu, die du schützen möchtest.
3. Konfiguriere freigestellte Nutzer, Rollen und/oder Kanäle, die geschützte Rollen/Mitglieder pingen dürfen.
4. Optional kannst du Discords natives AutoMod nutzen, um Nachrichten zu blockieren, bevor sie gesendet werden. Aktiviere dazu in der Konfiguration die Option „Aktiviere AutoMod".
5. Konfiguriere optional [Moderationsaktionen](#configuration-moderation), um Nutzer, die wiederholt geschützte Mitglieder pingen, automatisch zu bestrafen.
6. Stelle sicher, dass der Bot in Kanälen, in denen geschützte Mitglieder/Rollen gepingt werden könnten, die Berechtigungen `Kanal anzeigen`, `Nachrichten senden` und `Links einbetten` besitzt. Wenn du AutoMod nutzt, benötigt der Bot außerdem die Berechtigung `Server verwalten`. Für Moderationsaktionen benötigt der Bot `Mitglieder timeouten` (für Mute) und `Mitglieder kicken, annehmen oder ablehnen` (für Kick).

## Verwendung {#usage}

Nach der Einrichtung arbeitet das Modul automatisch:

- Wenn ein Nutzer ein geschütztes Mitglied oder eine geschützte Rolle pingt, sendet der Bot eine Warnung in den Kanal.
- Ist AutoMod aktiviert, wird die Nachricht blockiert, bevor sie gesendet wird, und der Nutzer sieht eine benutzerdefinierte Blockierungsnachricht.
- Pings werden im Verlauf des Nutzers gespeichert. Werden konfigurierte Moderations-Schwellenwerte erreicht, mutet oder kickt der Bot den Nutzer automatisch.

### Nutzer-Panel {#user-panel}

`/ping-protection user panel` öffnet ein einzelnes ephemeres Panel für einen Nutzer mit einem Dropdown-Menü zum Wechseln zwischen vier
Seiten:

- **Übersicht** - Zusammenfassung der Anzahl gespeicherter Pings und Moderationsaktionen.
- **Ping-Verlauf** - jeder aufgezeichnete Ping mit Zeitstempel und einem Link zur Nachricht (oder „Blocked by AutoMod", wenn
  AutoMod ihn abgefangen hat).
- **Moderationsverlauf** - jede vom Modul gegen den Nutzer ergriffene Moderationsaktion, einschließlich Aktionstyp,
  Grund, Zeitstempel und ggf. Mute-Dauer.
- **Datenlöschung** - ermöglicht es, den Ping-Verlauf, den Moderationsverlauf oder alle gespeicherten Daten des Nutzers
  getrennt zu löschen.

Die eigenständigen Befehle `/ping-protection user history` und `/ping-protection user actions-history` bleiben
verfügbar. Sie öffnen dieselbe seitenweise Verlaufs- bzw. Aktionsansicht, die das Panel darstellt, jedoch als einzelne Seite ohne
das Navigations-Dropdown.

#### Datenlöschung und Abklingzeiten {#data-deletion}

Die Datenlöschungs-Seite bietet drei Aktionen: den **Ping-Verlauf** löschen, den **Moderationsverlauf** löschen oder
**alle gespeicherten Daten** des Nutzers löschen. Die vollständige Löschung entfernt zusätzlich den Verlassens-Eintrag des Nutzers, setzt voraus, dass
der Moderator die Berechtigung **Administrator** besitzt, und verlangt vor der Ausführung eine Bestätigung.

Nach jeder Löschung wird für diesen Nutzer eine einzelne Abklingzeit gesetzt, die jede Löschkategorie sperrt, bis sie abgelaufen ist:

- Teilweise Löschung (nur Ping-Verlauf oder nur Moderationsverlauf): **24 Stunden**.
- Vollständige Löschung: **168 Stunden (7 Tage)**.

Solange eine Abklingzeit aktiv ist, zeigt jeder Löschversuch für diesen Nutzer den Ablaufzeitpunkt der Abklingzeit an. Die automatische
aufbewahrungsbasierte Löschung (siehe [Datenspeicherung](#configuration-storage)) ist von diesen Abklingzeiten nicht betroffen.

### Geschützte und freigestellte Listen {#lists}

Mit `/ping-protection list protected` siehst du alle **geschützten Nutzer und Rollen**.
Mit `/ping-protection list whitelisted` siehst du alle **freigestellten Nutzer, Rollen und Kanäle**.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                              | Beschreibung                                                                                                                  |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `/ping-protection user panel user:<User>`           | Öffnet das einheitliche [Nutzer-Panel](#user-panel) mit Übersicht, Ping-Verlauf, Moderationsverlauf und Datenlöschungs-Seite. |
| `/ping-protection user history user:<User>`         | Öffnet eine eigenständige, seitenweise Ansicht des Ping-Verlaufs des Nutzers (ohne Panel-Navigation).                         |
| `/ping-protection user actions-history user:<User>` | Öffnet eine eigenständige, seitenweise Ansicht der gegen den Nutzer ergriffenen Moderationsaktionen (ohne Panel-Navigation).  |
| `/ping-protection list protected`                   | Zeigt alle geschützten Nutzer und Rollen an.                                                                                  |
| `/ping-protection list whitelisted`                 | Zeigt alle freigestellten Rollen, Kanäle und Nutzer an.                                                                       |

## Konfiguration {#configuration}

### Allgemeine Konfiguration {#configuration-general}

In dieser Konfigurationsdatei legst du Schutz- und Ping-Regeln, Freistellungen, AutoMod-Einstellungen und die Warnungsnachricht fest. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=ping-protection%7Cconfigs/configuration).

| Feld                                             | Beschreibung                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Geschützte Rollen                                | Rollen, die vor Pings geschützt sind.                                                                                                                                                                                                                                                                                                                    |
| Alle Nutzer mit einer geschützten Rolle schützen | Wenn aktiviert, sind alle Nutzer mit mindestens einer geschützten Rolle geschützt, auch wenn sie nicht einzeln aufgeführt sind.                                                                                                                                                                                                                          |
| Geschützte Nutzer                                | Bestimmte Nutzer, die vor Pings geschützt sind.                                                                                                                                                                                                                                                                                                          |
| Freigestellte Rollen                             | Rollen, die geschützte Mitglieder/Rollen pingen dürfen.                                                                                                                                                                                                                                                                                                  |
| Freigestellte Kanäle                             | Kanäle (und Kanalkategorien), in denen Pings auf geschützte Mitglieder/Rollen ignoriert werden. Wenn du eine Kategorie hinzufügst, wird jeder Kanal darin freigestellt. Beachte die Einschränkung bei AutoMod unter [AutoMod und Kategorie-Ausnahmen](#automod-categories).                                                                              |
| Freigestellte Nutzer                             | Bestimmte Nutzer, deren Pings auf geschützte Mitglieder/Rollen ignoriert werden.                                                                                                                                                                                                                                                                         |
| Antwort-Pings erlauben                           | Wenn aktiviert, ist das Antworten auf die Nachricht eines geschützten Nutzers (mit aktivierter Erwähnung) erlaubt.                                                                                                                                                                                                                                       |
| Selbst-Ping-Konfiguration                        | Lege fest, was passiert, wenn ein geschützter Nutzer sich selbst pingt: bestraft werden, ignoriert werden oder lustige Easter Eggs erhalten. Zu den lustigen Easter Eggs gehört auch ein spezielles Easter Egg, das mit einer Wahrscheinlichkeit von 1 % erscheint. Diese Einstellung gilt nicht, solange AutoMod aktiviert ist, da AutoMod Vorrang hat. |
| Aktiviere AutoMod                                | Wenn aktiviert, nutzt der Bot Discords natives AutoMod, um Nachrichten mit Pings auf geschützte Mitglieder/Rollen zu blockieren.                                                                                                                                                                                                                         |
| AutoMod-Log-Kanal                                | Der Kanal, in den AutoMod-Warnungen gesendet werden. Es wird empfohlen, einen privaten Kanal zu verwenden. Gilt nur, wenn AutoMod aktiviert ist.                                                                                                                                                                                                         |
| AutoMod-Blockierungsnachricht                    | Die Nachricht, die Nutzern angezeigt wird, wenn ihre Nachricht von AutoMod blockiert wird.                                                                                                                                                                                                                                                               |
| Warnungsnachricht                                | Die Nachricht, die im Kanal gesendet wird, wenn ein Nutzer ein geschütztes Mitglied oder eine geschützte Rolle pingt. Unterstützt die Nachrichtenparameter `%target-name%`, `%target-mention%`, `%target-id%` und `%pinger-id%`.                                                                                                                         |

### Moderationsaktionen {#configuration-moderation}

In dieser Konfigurationsdatei legst du automatische Strafen für wiederholte Pings fest. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=ping-protection%7Cconfigs/moderation).

Du kannst mehrere Strafregeln konfigurieren, jeweils mit eigenem Schwellenwert und eigener Aktion.

| Feld                                          | Beschreibung                                                                                                                                                                                                                                                            |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pings zum Auslösen der Moderation             | Die Standardanzahl an Pings, die erforderlich ist, um diese Moderationsaktion auszulösen.                                                                                                                                                                               |
| Rollenbasierte Ping-Schwellenwerte aktivieren | Wenn aktiviert, wird das untenstehende Feld **Rollenbasierte Ping-Schwellenwerte** eingeblendet. Siehe [Rollenbasierte Schwellenwerte](#role-thresholds).                                                                                                               |
| Rollenbasierte Ping-Schwellenwerte            | Schwellenwerte pro Rolle, die für diese Regel den Standardwert überschreiben. Setzt du den Wert einer Rolle auf `0`, sind Mitglieder dieser Rolle von dieser Aktion ausgenommen. Bei Mitgliedern mit mehreren konfigurierten Rollen gilt der Wert ihrer höchsten Rolle. |
| Benutzerdefinierten Zeitraum verwenden        | Wenn aktiviert, kannst du für diese Regel einen eigenen Zeitraum in Tagen festlegen.                                                                                                                                                                                    |
| Zeitraum (Tage)                               | Die Anzahl der Tage, in denen die Pings auftreten müssen, um diese Aktion auszulösen. Gilt nur, wenn der benutzerdefinierte Zeitraum aktiviert ist.                                                                                                                     |
| Aktion                                        | Die anzuwendende Strafe: Mute oder Kick.                                                                                                                                                                                                                                |
| Mute-Dauer (nur wenn Aktionstyp MUTE ist)     | Wie lange der Nutzer in Minuten gemutet wird. Gilt nur, wenn der Aktionstyp Mute ist.                                                                                                                                                                                   |
| Aktions-Protokollierung aktivieren            | Wenn aktiviert, wird eine Nachricht in den Kanal gesendet, wenn eine Moderationsaktion ergriffen wird. Ist dies deaktiviert, wird auch die konfigurierte Aktions-Log-Nachricht nicht gesendet.                                                                          |
| Aktions-Log-Nachricht                         | Die Nachricht, die gesendet wird, wenn ein Nutzer bestraft wird. Unterstützt die Nachrichtenparameter `%pinger-mention%`, `%pinger-name%`, `%action%`, `%pings%`, `%timeframe%` und `%duration%`.                                                                       |

#### Rollenbasierte Ping-Schwellenwerte {#role-thresholds}

Jede Moderationsregel kann ihren Standardwert für `Pings zum Auslösen der Moderation` pro Rolle überschreiben. Typische Anwendungsfälle:

- Vertrauenswürdigen Rollen eine höhere Toleranz geben (z. B. erhalten Moderatoren einen Schwellenwert von 50 statt 10).
- Eine strengere Regel auf eine bestimmte Rolle anwenden (z. B. lösen neue Mitglieder die Regel früher aus).
- Eine Rolle **vollständig von dieser Regel ausnehmen**, indem du ihren Schwellenwert auf `0` setzt.

Hat ein Mitglied mehrere Rollen mit konfigurierten Schwellenwerten, gilt der Wert seiner **höchsten konfigurierten Rolle**.
Eine Rolle mit dem Schwellenwert `0` gewinnt immer, selbst gegenüber einer höheren Rolle mit einem Wert ungleich null, sodass eine ausgenommene Rolle
jede andere konfigurierte Rolle überschreibt.

Ist `Rollenbasierte Ping-Schwellenwerte aktivieren` ausgeschaltet, gilt der Standardwert der Regel für alle.

### AutoMod und Kategorie-Ausnahmen {#automod-categories}

Kanalkategorien können zur Liste **Freigestellte Kanäle** hinzugefügt werden und nehmen automatisch jeden Kanal darunter
vom Ping-Schutz aus.

Ist **AutoMod aktiviert**, kann Discords natives AutoMod Kanäle jedoch nicht nach Kategorie ausnehmen. Der Bot gibt die Kategorie-Ausnahme weiterhin
an seine eigenen Ping-Prüfungen weiter (sodass in diesem Kanal kein Ping protokolliert und keine Moderationsaktion ausgeführt wird), aber AutoMod
**blockiert die Nachricht trotzdem** und sendet die konfigurierte AutoMod-Blockierungsnachricht. Um AutoMod in einer Kategorie vollständig zu umgehen, füge stattdessen jeden einzelnen Textkanal zur Freistellungsliste hinzu.

### Datenspeicherung {#configuration-storage}

In dieser Konfigurationsdatei legst du Richtlinien zur Datenaufbewahrung fest. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=ping-protection%7Cconfigs/storage).

| Feld                                             | Beschreibung                                                                                                                                                                                                                                                               |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ping-Verlauf aktivieren                          | Wenn aktiviert, führt der Bot einen Verlauf der Pings, um Moderationsaktionen durchzusetzen. **_Dies ist erforderlich, wenn du Moderationsaktionen verwendest!_**                                                                                                          |
| Ping-Verlauf-Aufbewahrung                        | Wie lange der Ping-Verlauf aufbewahrt wird, in Wochen (mindestens 4, höchstens 96). Dies ist der Zeitraum, der für Moderationsaktionen verwendet wird (sofern kein benutzerdefinierter Zeitraum festgelegt ist).                                                           |
| Alle Pings im Verlauf nach dem Zeitraum löschen? | Wenn aktiviert, wird der gesamte Ping-Verlauf eines Nutzers gelöscht, sobald der Aufbewahrungszeitraum abläuft, statt nur der ältesten Einträge. Das ist praktisch, wenn du den Zeitraum der Datenaufbewahrung als vollständigen Reset für einen Neustart nutzen möchtest. |
| Moderationsprotokoll-Aufbewahrung (Monate)       | Wie lange Aufzeichnungen von Moderationsaktionen aufbewahrt werden, in Monaten (mindestens 1, höchstens 24).                                                                                                                                                               |
| Nutzerdaten nach Verlassen behalten              | Wenn aktiviert, behält der Bot Daten über Nutzer, nachdem sie den Server verlassen haben.                                                                                                                                                                                  |
| Verlassens-Daten-Aufbewahrung (Tage)             | Wie lange Daten aufbewahrt werden, nachdem ein Nutzer den Server verlassen hat, in Tagen (mindestens 1, höchstens 7). Gilt nur, wenn die Aufbewahrung von Verlassens-Daten aktiviert ist.                                                                                  |

## Fehlerbehebung {#troubleshooting}

Bei diesem Modul treten Probleme oft auf, wenn Berechtigungen falsch gesetzt sind, bei Hierarchieproblemen und mehr. Bitte prüfe und probiere die folgenden Schritte aus. Wenn dein Problem nicht aufgeführt ist oder die genannten Schritte es nicht beheben, wende dich gerne an [unser Support-Team](https://scnx.app/de/help).

<details>
    <summary>Die Warnungsnachricht wird nicht gesendet, nachdem ein geschütztes Mitglied/eine geschützte Rolle gepingt wurde.</summary>
    <ul>
        <li>Stelle sicher, dass dein Bot die Berechtigungen 'Kanal anzeigen', 'Nachrichten senden', 'Nachrichtenverlauf anzeigen' und 'Links einbetten' besitzt, damit er (eingebettete) Nachrichten im Kanal senden kann.</li>
        <li>Stelle sicher, dass die gepingte Rolle bzw. das gepingte Mitglied in der <a href="#configuration-general">Allgemeinen Konfiguration</a> tatsächlich geschützt ist.</li>
        <li>Stelle sicher, dass der Nutzer nicht freigestellt ist und keine freigestellte Rolle besitzt.</li>
        <li>Stelle sicher, dass der Nutzer nicht in einem freigestellten Kanal gepingt hat.</li>
    </ul>
</details>

<details>
    <summary>AutoMod blockiert die Nachrichten nicht.</summary>
    <ul>
        <li>Stelle sicher, dass dein Bot die Berechtigung 'Server verwalten' besitzt, damit er eine AutoMod-Regel erstellen kann.</li>
        <li>Stelle sicher, dass AutoMod in der <a href="#configuration-general">Allgemeinen Konfiguration</a> tatsächlich aktiviert ist.</li>
        <li>Stelle sicher, dass die benutzerdefinierte Blockierungsnachricht nicht länger als 150 Zeichen ist.</li>
        <li>Der Bot unterliegt möglicherweise einem Rate Limit von Discord. Warte einige Minuten und starte den Bot anschließend neu.</li>
    </ul>
</details>

<details>
    <summary>Der Nutzer wird nicht bestraft.</summary>
    <ul>
        <li>Stelle sicher, dass deine <a href="#configuration-moderation">Moderationsaktionen</a> korrekt eingerichtet sind.</li>
        <li>Stelle sicher, dass der Nutzer den Ping-Schwellenwert im festgelegten Zeitraum erreicht hat. Ältere Protokolle wurden möglicherweise gemäß deiner Datenaufbewahrung gelöscht, oder der Nutzer hat ältere Pings außerhalb deines benutzerdefinierten Zeitraums für die festgelegte Strafe.</li>
        <li>Wenn für die Regel <a href="#role-thresholds">rollenbasierte Ping-Schwellenwerte</a> aktiviert sind, prüfe, ob die höchste konfigurierte Rolle des Nutzers einen eigenen Schwellenwert hat oder auf <code>0</code> (ausgenommen) gesetzt ist.</li>
    </ul>
</details>

<details>
    <summary>Ich erhalte beim Bestrafen diesen Fehler: I cannot punish (user) because their role is higher than or equal to my highest role.</summary>

    Das passiert, weil die höchste Rolle des Nutzers, der gepingt hat, höher als (oder gleich) die höchste Rolle des Bots ist. Setze zur Behebung die höchste Rolle deines Bots über die höchste Rolle der meisten Nutzer. Es wird empfohlen, die höchste Rolle deines Bots möglichst weit oben zu platzieren.

</details>

<details>
    <summary>Ich erhalte beim Bestrafen diesen Fehler: Missing Permissions.</summary>
    <ul>
        <li>Stelle sicher, dass dein Bot die Berechtigungen 'Mitglieder timeouten' und 'Mitglieder kicken, annehmen oder ablehnen' besitzt, um Mitglieder zu muten und zu kicken.</li>
        <li>Stelle sicher, dass der Nutzer, den der Bot bestrafen möchte, keine Administrator-Berechtigungen besitzt.</li>
    </ul>
</details>

## Gespeicherte Daten {#data-usage}

Dieses Modul speichert die folgenden Daten:

| Daten                                | Grund der Speicherung                                                                                                                                                                                                                                                                            | Wann dies gespeichert/verwendet wird                                                                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nutzer-ID                            | Wird vom Pinger, den geschützten Nutzern und dem gepingten Nutzer gespeichert. Damit weiß der Bot, wer wen gepingt hat und wer vor Pings geschützt ist.                                                                                                                                          | Wenn jemand einen geschützten Nutzer pingt, wenn eine Moderationsaktion ausgeführt werden muss, wenn der Nutzerverlauf angesehen wird und wenn der Nutzer den Server verlässt.        |
| Nachrichten-URL                      | Wird gespeichert, damit der Bot den Link zur Nachricht kennt, in der ein Ping stattgefunden hat.                                                                                                                                                                                                 | Wenn jemand einen geschützten Nutzer/eine geschützte Rolle pingt und wenn der Verlauf angesehen wird. Wurde die Nachricht von AutoMod blockiert, wird „Blocked by AutoMod" angezeigt. |
| Rollen-ID                            | Wird gespeichert, damit der Bot weiß, ob jemand eine geschützte oder freigestellte Rolle besitzt.                                                                                                                                                                                                | Wenn konfiguriert und gesetzt und wenn ein Nutzer/eine Rolle gepingt wird, um dies zu prüfen.                                                                                         |
| Zeitpunkt eines Pings                | Wird gespeichert, damit der Bot weiß, wann eine Nachricht mit einem Ping auf einen geschützten Nutzer oder eine geschützte Rolle gesendet wurde - dies wird im Nutzerverlauf angezeigt.                                                                                                          | Wenn ein geschützter Ping auftritt und wenn der Verlauf angesehen wird.                                                                                                               |
| Moderationsaktionstyp                | Wird gespeichert, damit der Bot weiß, welche Aktionstypen es gibt und welche in den [Moderationsaktionen](#configuration-moderation) verwendet werden.                                                                                                                                           | Bei der Einrichtung, wenn eine Moderationsaktion ausgeführt werden soll und wenn der Verlauf angesehen wird.                                                                          |
| Moderationsgrund und -dauer          | Wird gespeichert, damit der Bot weiß, warum und wie lange eine Moderationsaktion ausgeführt wurde - dies wird im Nutzerverlauf angezeigt.                                                                                                                                                        | Bei der Einrichtung, wenn eine Moderationsaktion ausgeführt werden soll und wenn der Verlauf angesehen wird.                                                                          |
| Zeitpunkt der Moderationsaktion      | Wird gespeichert, damit der Bot weiß, wann die Moderationsaktion ausgeführt wurde - dies wird im Nutzerverlauf angezeigt.                                                                                                                                                                        | Wenn eine Moderationsaktion ausgeführt werden soll und wenn der Verlauf angesehen wird.                                                                                               |
| Zeitpunkt des Verlassens des Nutzers | Wird gespeichert, damit der Bot weiß, wann ein Nutzer den Server verlassen hat - dies wird in den Protokollen angezeigt und nutzt die Konfiguration, um anhand der [Aufbewahrung von Verlassens-Daten](#configuration-storage) zu wissen, wann die Nutzerprotokolle automatisch gelöscht werden. |

Daten werden automatisch gemäß den konfigurierten Aufbewahrungszeiträumen gelöscht. Du kannst Daten eines bestimmten
Nutzers außerdem über die Datenlöschungs-Seite des Befehls [`/ping-protection user panel`](#user-panel) löschen, mit getrennten
Optionen für den Ping-Verlauf, den Moderationsverlauf oder alle gespeicherten Daten; siehe
[Datenlöschung und Abklingzeiten](#data-deletion). Um alle von diesem Modul gespeicherten Daten zu entfernen,
[setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
