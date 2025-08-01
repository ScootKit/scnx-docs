# Info-Befehle

Fügt Befehle mit Informationen über bestimmte Bereiche deines Servers hinzu

<ModuleOverview moduleName="info-commands" />

## Funktionen {#features}

* Fügt [verschiedene Befehle](#commands) hinzu, mit denen du Informationen über deinen Server, Kanäle, Nutzer und Rollen erhalten kannst.
* Alle Kanaltypen, einschließlich Etappenkanäle (Stages) und Threads, werden vom Befehl [`/info channel`](#commands) unterstützt.
* Mitgliederstatistiken, Serverfunktionen und mehr werden vom Befehl [`/info server`](#commands) unterstützt.
* [`/info role`](#commands) kann Mitglieder, die eine bestimmte Rolle haben, sowie Berechtigungen und Rolleninformationen anzeigen.
* Mit dem Befehl [`/info user`](#commands) kannst du dir Informationen über Nutzer anzeigen lassen, einschließlich Unterstützung für das [Geburtstags-Modul](/docs/custom-bot/modules/community/birthday), das [Level-System](/docs/custom-bot/modules/community/levels), das [Invite-Tracking-Modul](/docs/custom-bot/modules/moderation/invite-tracking) und mehr.

## Einrichtung {#setup}

Nachdem das Modul aktiviert wurde, können die [Slash-Befehle](#commands) auf deinem Server verwendet werden. Du kannst die Antworten der Befehle in der [Konfiguration](#configuration) anpassen, aber eine zusätzliche Einrichtung ist nicht erforderlich.

## Verwendung {#usage}

Nutzer und Administratoren können alle [Slash-Befehle](#commands) verwenden, um Informationen anzuzeigen. Hier eine kurze Übersicht:

* Nutze [`/info user`](#commands), um Informationen über ein Mitglied des Servers anzuzeigen.
* Nutze [`/info role`](#commands), um Informationen über eine Rolle auf dem Server anzuzeigen.
* Nutze [`/info channel`](#commands), um Informationen über einen Kanal oder Thread auf dem Server anzuzeigen.
* Nutze [`/info server`](#commands), um Informationen über den Server anzuzeigen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                               | Beschreibung                                                                                                                                                   |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/info server`                        | Zeigt Informationen über den Server an.                                                                                                                        |
| `/info channel [channel:<Kanal>]`   | Zeigt Informationen über einen Kanal an. Wenn kein Wert im Parameterfeld "channel" gesetzt wurde, wird der aktuelle Kanal verwendet.                           |
| `/info role role:<Rolle>`              | Zeigt Informationen über die im Parameterfeld "role" ausgewählte Rolle an.                                                                                     |
| `/info user [user:<Nutzer>]`            | Zeigt Informationen über einen Nutzer auf dem Server an. Wenn kein Wert im Feld "user" gesetzt wurde, werden Informationen über den ausführenden Nutzer angezeigt. |

## Konfiguration {#configuration}

In diesem Modul können einige sichtbare Feldnamen in
der [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=info-commands|strings) angepasst werden.

| Feld              | Beschreibung                                                                                                 |
|-------------------|-------------------------------------------------------------------------------------------------------------|
| Serverinfo        | Hier können die Namen angepasst werden, die in der Ausgabe des Befehls [`/info server`](#commands) verwendet werden.   |
| Userinfo          | Hier können die Namen angepasst werden, die in der Ausgabe des Befehls [`/info user`](#commands) verwendet werden.     |
| Channelinfo       | Hier können die Namen angepasst werden, die in der Ausgabe des Befehls [`/info channel`](#commands) verwendet werden.  |
| Roleinfo          | Hier können die Namen angepasst werden, die in der Ausgabe des Befehls [`/info role`](#commands) verwendet werden.     |
| Nutzer nicht gefunden    | Diese Fehlermeldung wird angezeigt, wenn ein ausgewählter Nutzer nicht gefunden wurde.                                 |
| Kanal nicht gefunden | Diese Fehlermeldung wird angezeigt, wenn ein ausgewählter Kanal nicht gefunden wurde.                                 |
| Rolle nicht gefunden    | Diese Fehlermeldung wird angezeigt, wenn eine ausgewählte Rolle nicht gefunden wurde.                                 |
| Avatar-Nachricht | Diese Nachricht wird gesendet, wenn der Avatar eines Nutzers angefragt wird. |

## Fehlerbehebung {#troubleshooting}

Falls beim Ausführen eines Befehls ein Fehler angezeigt wird, stelle bitte sicher, dass alle Felder in deiner [Konfiguration](#configuration) gesetzt wurden.
