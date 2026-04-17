---
sidebar_position: 7
toc_max_heading_level: 3
---

# Häufig gestellte Fragen

Häufig gestellte Fragen dazu, wie Server auf SCNX funktionieren.

**Schnellnavigation:**

- **Einrichtung:** [Owner-Anforderung](#owner) | [Administrator-Zugriff](#administrator) | [Servereinstellungen](#settings) | [SCNX Bot entfernen](#scnx-manager-bot)
- **Bots:** [Mehrere Bots](#multiple-bots) | [Bot funktioniert nicht](#bot-issues) | [Custom Bot vs. Support Bot](#bot-comparison)
- **Funktionen:** [Enhanced Security](#enhanced-security) | [Trusted Admins](#trusted-admins) | [Backups](#backups) | [dcserver.link](#dcserver-link) | [Bildspeicher](#images) | [Analytics](#analytics)
- **Pläne:** [Verfügbare Pläne](#plans) | [Gewerbliche Nutzung](#commercial-usage) | [Limits des kostenlosen Plans](#starter-limits)
- **Verwaltung:** [Daten übertragen](#transfer) | [Server löschen](#deletion) | [Gesperrt/deaktiviert](#banned)

## Servereinrichtung & Zugriff

### Warum muss ich Owner sein, um einen Server zu SCNX hinzuzufügen? {#owner}

Das ist nicht mehr nötig! Jede Person mit Administrator-Berechtigungen auf einem Server kann SCNX einrichten. Server-Owner können Server weiterhin beanspruchen und Administratoren den Zugriff entziehen. Lies mehr über [von Administratoren verwaltete Server](/docs/scnx/guilds/trusted-admins/#administrator).

### Kann ein Administrator SCNX für einen Server einrichten? {#administrator}

Ja! Jeder Discord-Nutzer mit der Berechtigung **Administrator** kann einen Server zu SCNX hinzufügen. Der Server-Owner kann jederzeit die exklusive Kontrolle zurückfordern und den Administrator-Zugriff entfernen. Weitere Informationen findest du in der [Trusted Admins Dokumentation](/docs/scnx/guilds/trusted-admins/#administrator).

### Wo finde ich meine Servereinstellungen? {#settings}

Öffne deinen Server im SCNX-Dashboard und klicke in der Seitenleiste auf **Einstellungen**. Dort kannst du Berechtigungen, Trusted Admins, Enhanced Security, dcserver.link und vieles mehr verwalten.

### Kann ich den SCNX Management Bot entfernen? {#scnx-manager-bot}

Ja. Kicke den Bot einfach von deinem Server. Server ohne den SCNX Bot können keine SCNX-Bot-Funktionen wie [Backups](/docs/scnx/guilds/backups) oder [Analytics](/docs/scnx/guilds/analytics) nutzen. Alle Hosting-Funktionen, einschließlich aller Funktionen deiner Bots, sind davon nicht betroffen.

## Bots

### Kann ich mehrere Discord-Bots für einen Server erstellen? {#multiple-bots}

Sozusagen – du kannst einen [Custom Bot](/docs/custom-bot/intro) und einen [Support Bot](/docs/support-bot/intro) pro Server erstellen. Du kannst die Funktionen des Custom Bots nicht auf mehrere Bots aufteilen (z. B. einen Bot nur für Temp-Channels).

SCNX ist dafür gedacht, mehrere generische Bots auf einem Server durch einen vollständig anpassbaren Bot zu ersetzen.

### Mein Bot funktioniert nicht / ist offline {#bot-issues}

Wenn dein Bot offline ist oder nicht reagiert, schau in den Troubleshooting-Leitfaden für deinen Bot-Typ:

- [Custom Bot Troubleshooting](/docs/custom-bot/troubleshooting)
- [Support Bot Troubleshooting](/docs/support-bot/troubleshooting)

Du kannst auch das Bot-Statuspanel in deinem Dashboard überprüfen, um zu sehen, ob dein Bot läuft, und ihn bei Bedarf neu starten. Weitere Informationen findest du unter [Bots auf SCNX](/docs/scnx/guilds/bots).

### Was ist der Unterschied zwischen Custom Bot und Support Bot? {#bot-comparison}

- **[Custom Bot](/docs/custom-bot/intro):** Ein vielseitiger Discord-Bot mit Moderations-, Community-, Fun- und Utility-Funktionen. Auf allen Plänen verfügbar (kostenloser Plan erfordert wöchentliche Verlängerung).
- **[Support Bot](/docs/support-bot/intro):** Ein dediziertes Support-System mit Modmail- und Ticket-Funktionen, entwickelt für professionelles Ticket-Management. Erfordert einen bezahlten Plan (Unlimited oder höher).

Beide Bots werden vollständig auf SCNX gehostet und können über das Dashboard angepasst werden.

## Funktionen

### Was ist Enhanced Security? {#enhanced-security}

Enhanced Security erfordert, dass alle Administratoren ihre Identität per Zwei-Faktor-Authentifizierung bestätigen, bevor sie Konfigurationsänderungen vornehmen können. Es ist auf allen bezahlten Plänen verfügbar und wird schrittweise eingeführt. Weitere Informationen findest du in der [Enhanced Security Dokumentation](/docs/scnx/guilds/enhanced-security).

### Was sind Trusted Admins? {#trusted-admins}

Trusted Admins ermöglichen es Server-Ownern, anderen Nutzern Zugriff auf das SCNX-Dashboard ihres Servers mit anpassbaren Berechtigungen zu gewähren. Du kannst genau festlegen, welche Funktionen jeder Admin nutzen darf. Weitere Informationen findest du in der [Trusted Admins Dokumentation](/docs/scnx/guilds/trusted-admins).

### Wie funktionieren Backups? {#backups}

SCNX kann Nachrichten, Kanäle, Rollen und mehr deines Servers sichern. Backups werden über den SCNX Management Bot verwaltet und können jederzeit wiederhergestellt werden. Weitere Informationen findest du in der [Backups Dokumentation](/docs/scnx/guilds/backups).

### Was ist dcserver.link? {#dcserver-link}

dcserver.link ermöglicht es dir, eine benutzerdefinierte Vanity-URL für deinen Discord-Server zu erstellen (z. B. `https://dcserver.link/deinserver`). Weitere Informationen findest du in der [dcserver.link Dokumentation](/docs/scnx/guilds/dcserver-link).

### Was ist der Guild Image Storage? {#images}

Der Guild Image Storage ermöglicht es dir, Bilder hochzuladen, zu organisieren und in allen Bot-Konfigurationen wiederzuverwenden. Kein manuelles Hochladen in deinen persönlichen Speicher und kein Teilen von Links mehr. Weitere Informationen findest du in der [Guild Image Storage Dokumentation](/docs/scnx/guilds/files).

### Wie funktioniert die Server-Analytics? {#analytics}

SCNX bietet Analysen zur Aktivität deines Servers, einschließlich Mitgliederstatistiken und mehr. Analytics erfordert, dass der SCNX Management Bot auf deinem Server ist. Weitere Informationen findest du in der [Analytics Dokumentation](/docs/scnx/guilds/analytics).

## Pläne & gewerbliche Nutzung

### Welche Pläne gibt es? {#plans}

SCNX bietet vier Pläne an: **Starter** (kostenlos), **Unlimited**, **Professional** und **Enterprise**. Eine vollständige Übersicht der Funktionen und Preise findest du in der [Pläne & Abonnements Dokumentation](/docs/scnx/guilds/plans).

### Was sind die Limits des kostenlosen Starter-Plans? {#starter-limits}

Mit dem Starter-Plan:

- Muss dein Custom Bot **alle 7 Tage** durch das Ansehen einer kurzen Werbung verlängert werden
- Kein Zugang zum Support Bot
- Keine Linked Roles
- Begrenzte Custom Commands (10)
- Begrenzte KI-Credits (20/Monat)
- Keine gewerbliche Nutzung erlaubt

Upgrade auf Unlimited oder höher, um diese Einschränkungen aufzuheben.

### Was gilt als gewerbliche Nutzung? {#commercial-usage}

Um SCNX auf irgendeine gewerbliche Weise oder in einer gewerblichen Situation zu nutzen, musst du den [Professional Plan](https://scnx.xyz/plans) erwerben. Lies diesen [FAQ-Artikel](https://faq.scnx.app/commercial-usage-of-scnx/), um mehr zu erfahren, gewerbliche Nutzung auf SCNX zu melden oder dagegen Einspruch zu erheben.

## Serververwaltung

### Kann ich alle meine SCNX-Daten von einem Server auf einen anderen übertragen? {#transfer}

Du kannst eine „vollständige Datenübertragung" beantragen, wenn beide Server derzeit auf SCNX aktiv sind (bitte füge den neuen Server hinzu, bevor du eine Anfrage erstellst), und du Owner beider Server bist.

Da dieser Vorgang manuellen Aufwand auf unserer Seite erfordert, werden dir 4,99 EUR (inkl. MwSt.) für eine Übertragung berechnet.

:::danger
ALLE Daten werden vollständig auf deinen neuen Server übertragen. Dabei werden bestehende Einstellungen für deinen neuen Server überschrieben.
:::

Um eine vollständige Datenübertragung zu beantragen, [kontaktiere bitte unser Team](https://scnx.app/help).

### Wie kann ich meinen Server von SCNX entfernen? {#deletion}

Es tut uns leid, dass du SCNX verlassen möchtest – falls du nur ein Problem mit SCNX hast, helfen wir dir gerne auf [unserem Discord](https://scootk.it/dc) oder über [unseren Support](https://scnx.app/help).

:::danger
Das Löschen eines Servers auf SCNX ist unwiderruflich. Du musst Owner sein, um einen Server von SCNX zu löschen. Wenn du einen aktiven Plan, ein aktives Abonnement oder einen aktiven Kauf für den gelöschten Server hast, geht dieser verloren.
:::

So löschst du deinen Server:

1. Öffne deine [Servereinstellungen](https://scnx.app/glink?page=settings)
2. Scrolle nach unten zum Abschnitt **Rechtliches**
3. Klicke auf **Server von SCNX löschen**
4. Wähle einen Grund für die Löschung aus
5. Füge optional einen Kommentar hinzu
6. Gib den Namen deines Servers exakt zur Bestätigung ein
7. Klicke auf Bestätigen

Du erhältst eine Bestätigungs-E-Mail, sobald die Löschung abgeschlossen ist.

:::warning Vor dem Löschen beachten

- **Bezahlte Pläne werden nicht erstattet.** Wenn du eine Erstattung möchtest, beantrage diese gemäß unserer [Erstattungsrichtlinie](https://scootk.it/scnx-refund-policy) _vor_ dem Löschen.
- **Serverspezifische Käufe** (wie Marketplace-Module) gehen dauerhaft verloren. Übertrage sie vorher auf einen anderen Server, falls nötig.
- Du kannst einen Server nur **einmal alle 48 Stunden** löschen, um Missbrauch zu verhindern.
  :::

**Wenn die Löschung fehlschlägt**, erhältst du eine Fehler-E-Mail. Dies kann passieren, wenn:

- Ein interner Fehler während des Bereinigungsprozesses aufgetreten ist (Bot-Entfernung, Datenlöschung)
- Der Server sich in einem unerwarteten Zustand befand (z. B. aktives Abonnement konnte nicht gekündigt werden)

Bei fehlgeschlagener Löschung kannst du es später erneut versuchen oder [legal@scootkit.com](mailto:legal@scootkit.com) kontaktieren, um den Server manuell löschen zu lassen.

### Mein Server wurde auf SCNX gesperrt / deaktiviert / markiert {#banned}

Oh nein – bitte folge den Anweisungen in deinem Dashboard. Wenn du Hilfe benötigst, [wende dich bitte an unser Team](https://scnx.app/help).
