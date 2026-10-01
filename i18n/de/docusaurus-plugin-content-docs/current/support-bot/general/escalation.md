---
sidebar_position: 9
title: Eskalation
description: Eskaliere Tickets an höhere Support-Stufen oder fordere Unterstützung von anderen Teammitgliedern an - verfügbar in Modmail und im Ticket-System.
---

# Eskalation

## Funktionen {#features}

- Eskaliere ein Ticket an eine höhere Support-Stufe, indem du es zu einem vorkonfigurierten Thema überträgst.
- Fordere Unterstützung von anderen Teammitgliedern an, indem eine konfigurierte Rolle gepingt wird - ohne das Ticket zu übertragen.
- Gib optional einen Grund an, wenn du eskalierst oder Unterstützung anforderst, für besseren Kontext.
- Konfiguriere Eskalationsziele und Unterstützungsrollen pro Thema oder lege serverweite Standardwerte fest, die als Fallback dienen.
- Passe die Eskalations- und Unterstützungsnachrichten im Ticket-Kanal an.
- Sende dem Nutzer optional eine DM, wenn sein Modmail-Ticket eskaliert wird.
- Funktioniert in Modmail und im Ticket-System.

## Einrichtung {#setup}

- Konfiguriere die [systemweiten Standardwerte](#system-settings) in deinem Dashboard (optional), um ein Fallback-Eskalationsziel und eine Fallback-Unterstützungsrolle festzulegen.
- Besuche die Ticket-Themen-Seite deines Systems im Dashboard ([Modmail-Ticket-Themen](https://scnx.app/glink?page=support-system/modmail/ticket-topics) oder [Ticket-System-Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics)).
- Aktiviere die Eskalation oder Unterstützung für jedes Thema, in dem du sie verfügbar machen möchtest.
- Für Eskalation: Lege das Zielthema fest, an das Tickets eskaliert werden sollen (oder verlasse dich auf den systemweiten Standardwert).
- Für Unterstützung: Lege die Rolle fest, die bei einer Unterstützungsanfrage gepingt werden soll (oder verlasse dich auf den systemweiten Standardwert).
- [Passe optional die Nachrichten an](#message-configuration), die bei einer Eskalation oder Unterstützungsanfrage gesendet werden.

## Voraussetzungen {#prerequisites}

Sowohl Eskalation als auch Unterstützung erfordern aktivierte [Ticket-Themen](/de/docs/support-bot/modmail/ticket-topics) für das System, in dem du sie nutzen möchtest ([Modmail](/de/docs/support-bot/modmail/ticket-topics) oder [Ticket-System](/de/docs/support-bot/ticket-system/ticket-topics)). Die Konfigurationsbereiche für Eskalation und Unterstützung erscheinen im Dashboard erst, wenn Ticket-Themen aktiviert sind.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                        | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/escalate [reason:<Text>]`   | Eskaliert das aktuelle Ticket an die nächste Support-Stufe, indem es zum konfigurierten Zielthema übertragen wird. Optional kannst du einen Grund angeben.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn „/escalate Befehl aktivieren?" aktiviert ist und entweder für das Thema des aktuellen Tickets oder als [systemweiter Standardwert](#system-settings) ein Eskalationsziel konfiguriert ist._</blockquote></details></small>                                                    |
| `/assistance [reason:<Text>]` | Fordert Unterstützung von anderen Teammitgliedern an, indem die konfigurierte Rolle im Ticket-Kanal gepingt wird. Das Ticket bleibt in seinem aktuellen Thema. Optional kannst du einen Grund angeben.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn „/assistance Befehl aktivieren?" aktiviert ist und entweder für das Thema des aktuellen Tickets oder als [systemweiter Standardwert](#system-settings) eine Unterstützungsrolle konfiguriert ist._</blockquote></details></small> |

## Konfiguration {#configuration}

### Einstellungen pro Thema {#per-topic-settings}

Diese Felder werden pro Ticket-Thema in deinem Dashboard konfiguriert - verfügbar für [Modmail-Ticket-Themen](/de/docs/support-bot/modmail/ticket-topics) und [Ticket-System-Ticket-Themen](/de/docs/support-bot/ticket-system/ticket-topics).

| Feld                | Beschreibung                                                                                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Eskalationsziel     | Das Thema, an das dieses Ticket bei einer Eskalation übertragen wird. Wenn nicht gesetzt, wird der [systemweite Standardwert](#system-settings) verwendet. Ist keines von beidem gesetzt, ist die Eskalation nicht verfügbar.                          |
| Unterstützungsrolle | Die Rolle, die gepingt wird, wenn ein Teammitglied in diesem Thema Unterstützung anfordert. Wenn nicht gesetzt, wird der [systemweite Standardwert](#system-settings) verwendet. Ist keines von beidem gesetzt, ist die Unterstützung nicht verfügbar. |

### Systemweite Einstellungen {#system-settings}

Diese Einstellungen werden für Modmail und das Ticket-System getrennt konfiguriert. Unter [Voraussetzungen](#prerequisites) erfährst du, was aktiviert sein muss, damit sie erscheinen.

| Feld                           | Beschreibung                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /escalate Befehl aktivieren?   | Hauptschalter für die Eskalationsfunktion. Wenn deaktiviert, wird der Befehl `/escalate` nicht registriert und die Funktion kann in diesem System nicht genutzt werden.                                                                                                                                                                           |
| Standard-Eskalationsziel       | Das Thema, das verwendet wird, wenn ein Ticket eskaliert wird, dessen Thema kein eigenes Eskalationsziel festlegt.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn „/escalate Befehl aktivieren?" aktiviert ist._</blockquote></details></small>                                                             |
| /assistance Befehl aktivieren? | Hauptschalter für die Unterstützungsfunktion. Wenn deaktiviert, wird der Befehl `/assistance` nicht registriert und die Funktion kann in diesem System nicht genutzt werden.                                                                                                                                                                      |
| Standard-Unterstützungsrolle   | Die Rolle, die gepingt wird, wenn in einem Ticket Unterstützung angefordert wird, dessen Thema keine eigene Unterstützungsrolle festlegt.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn „/assistance Befehl aktivieren?" aktiviert ist._</blockquote></details></small>                                    |
| DM-Nutzer bei Eskalation       | _Nur Modmail._ Wenn aktiviert, erhält der Nutzer zusätzlich eine Direktnachricht, wenn sein Ticket eskaliert wird, basierend auf der [Eskalations-DM](#message-configuration).<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn „/escalate Befehl aktivieren?" aktiviert ist._</blockquote></details></small> |

### Nachrichten-Konfiguration {#message-configuration}

Sowohl die Eskalationsnachricht (im Ticket-Kanal gepostet) als auch die Unterstützungsnachricht (zusammen mit dem Rollen-Ping gepostet) sind vollständig anpassbar. Sie werden für Modmail und das Ticket-System getrennt konfiguriert.

| Feld                            | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eskalationsnachricht            | Die Nachricht, die im Ticket-Kanal gepostet wird, wenn ein Teammitglied `/escalate` ausführt.<br/><small><details><summary>Verfügbare Platzhalter</summary><blockquote>`%staffUser%` (Erwähnung des eskalierenden Teammitglieds), `%staffTag%` (Tag des eskalierenden Teammitglieds), `%reason%` (der angegebene Grund oder ein Standardtext, falls ausgelassen), `%oldTopic%` (Name des ursprünglichen Themas), `%newTopic%` (Name des Eskalations-Zielthemas). [Globale Platzhalter](/de/docs/support-bot/general/global-placeholders) sind ebenfalls verfügbar.</blockquote></details></small>                                             |
| Unterstützungsanfrage-Nachricht | Die Nachricht, die im Ticket-Kanal gepostet wird, wenn ein Teammitglied `/assistance` ausführt.<br/><small><details><summary>Verfügbare Platzhalter</summary><blockquote>`%staffUser%`, `%staffTag%`, `%reason%`, `%topic%` (Name des aktuellen Themas), `%assistanceRole%` (Erwähnung der gepingten Rolle). [Globale Platzhalter](/de/docs/support-bot/general/global-placeholders) sind ebenfalls verfügbar.</blockquote></details></small>                                                                                                                                                                                                 |
| Eskalations-DM (nur Modmail)    | _Nur Modmail._ Die Direktnachricht, die an den Nutzer gesendet wird, wenn sein Ticket eskaliert wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur gesendet, wenn „DM-Nutzer bei Eskalation" aktiviert ist._</blockquote></details><details><summary>Verfügbare Platzhalter</summary><blockquote>`%staffUser%`, `%staffTag%`, `%reason%`, `%oldTopic%`, `%newTopic%` sowie die eigenen Platzhalter des Nutzers (`%userID%`, `%tag%`, `%username%`, `%avatarUrl%`, `%mention%`). [Globale Platzhalter](/de/docs/support-bot/general/global-placeholders) sind ebenfalls verfügbar.</blockquote></details></small> |

## So funktioniert es {#how-it-works}

### Eskalation {#how-escalation-works}

Wenn ein Teammitglied `/escalate` ausführt:

1. Im Ticket-Kanal wird eine Systemnachricht gepostet (z.B. „**@StaffMember** hat dieses Ticket eskaliert - Grund").
2. Das Ticket wird zum konfigurierten Zielthema übertragen - genau wie bei einer normalen Themen-Übertragung, inklusive Berechtigungsänderungen, Kategorie-Verschiebungen und optionaler Rollen-Pings.
3. Ist das Ticket-Claiming aktiviert und „Entferne zugewiesenes Teammitglied bei /transfer" eingeschaltet, wird die aktuelle Zuweisung aufgehoben, damit das neue Team das Ticket übernehmen kann.

### Unterstützung {#how-assistance-works}

Wenn ein Teammitglied `/assistance` ausführt:

1. Die konfigurierte Unterstützungsrolle wird im Ticket-Kanal mit einer Nachricht gepingt (z.B. „@SeniorSupport **@StaffMember** hat Unterstützung in diesem Ticket angefordert - Grund").
2. Das Ticket bleibt in seinem aktuellen Thema - es findet keine Übertragung statt.
3. Andere Teammitglieder mit der gepingten Rolle können dann der Unterhaltung beitreten, um zu helfen.

:::tip
Nutze die Eskalation, wenn ein Ticket an ein anderes Team **übergeben** werden muss. Nutze die Unterstützung, wenn du nur **Hilfe** von jemandem brauchst, ohne das Ticket zu verschieben.
:::
