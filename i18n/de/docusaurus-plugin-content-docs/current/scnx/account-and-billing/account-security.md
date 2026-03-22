---
sidebar_position: 3
title: Account Security
---

# Konto-Sicherheit

Schütze dein SCNX-Konto mit Zwei-Faktor-Authentifizierung (2FA). Wenn 2FA aktiviert ist, musst du deine Identität mit einer Authenticator-App, einem Hardware-Sicherheitsschlüssel oder einem Recovery Code bestätigen, bevor du sensible Änderungen vornehmen kannst.

Alle Sicherheitseinstellungen verwaltest du unter [scnx.app/user/security](https://scnx.app/user/security).

## Zwei-Faktor-Authentifizierung einrichten

Du kannst eine oder beide der folgenden 2FA-Methoden für dein Konto einrichten:

### Authenticator-App (TOTP)

Verwende eine Authenticator-App, um zeitbasierte Einmalcodes zu generieren. Beliebte Optionen sind:
- [Ente Auth](https://ente.io/auth/) (Open-Source, plattformübergreifend, mit verschlüsseltem Cloud-Backup)
- [Authy](https://authy.com/) (plattformübergreifend mit Cloud-Synchronisierung)
- [Google Authenticator](https://support.google.com/accounts/answer/1066447)
- [Bitwarden](https://bitwarden.com/) (Open-Source-Passwortmanager mit integriertem TOTP)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)

1. Gehe zu [scnx.app/user/security](https://scnx.app/user/security)
2. Folge im Abschnitt **Authenticator-App** den Einrichtungsanweisungen
3. Scanne den QR-Code mit deiner Authenticator-App
4. Gib den in der App angezeigten Code ein, um die Einrichtung zu bestätigen

:::info
Wenn du bereits einen Sicherheitsschlüssel eingerichtet hast, kannst du die Authenticator-App-Methode entfernen. Du musst jedoch immer mindestens eine 2FA-Methode aktiv haben.
:::

### Hardware-Sicherheitsschlüssel

Verwende einen physischen Sicherheitsschlüssel wie einen **YubiKey** oder ein beliebiges FIDO2/WebAuthn-kompatibles Gerät. Sicherheitsschlüssel bieten den stärksten Schutz, da sie nicht per Phishing kompromittiert werden können.

1. Gehe zu [scnx.app/user/security](https://scnx.app/user/security)
2. Klicke im Abschnitt **Sicherheitsschlüssel** auf **Sicherheitsschlüssel hinzufügen**
3. Gib einen Namen für deinen Schlüssel ein (z. B. „YubiKey Blau")
4. Folge der Aufforderung deines Browsers, den Schlüssel zu registrieren (du musst den Schlüssel möglicherweise berühren oder antippen)

Du kannst bis zu **5 Sicherheitsschlüssel** auf deinem Konto registrieren.

:::tip
Wir empfehlen, nach Möglichkeit mindestens zwei Sicherheitsschlüssel zu registrieren – einen primären Schlüssel und einen Backup, der an einem sicheren Ort aufbewahrt wird.
:::

## Recovery Codes

Recovery Codes sind Einmalcodes, mit denen du auf dein Konto zugreifen kannst, wenn du dein 2FA-Gerät verlierst. Jeder Code kann nur einmal verwendet werden.

### Recovery Codes generieren

1. Gehe zu [scnx.app/user/security](https://scnx.app/user/security)
2. Klicke im Abschnitt **Recovery Codes** auf **Recovery Codes generieren** (oder **Neu generieren**, wenn du bereits Codes hast)
3. Du erhältst **8 Recovery Codes**
4. **Bewahre sie sicher auf** – kopiere sie in einen Passwortmanager oder drucke sie aus und bewahre sie an einem sicheren Ort auf

:::warning
Wenn du Recovery Codes neu generierst, werden alle vorherigen Codes ungültig. Stelle sicher, dass du die neuen Codes sofort speicherst.
:::

:::caution
Recovery Codes sind dein letztes Mittel für den Kontozugriff. Wenn du sowohl dein 2FA-Gerät als auch deine Recovery Codes verlierst, musst du den E-Mail-basierten Reset-Prozess durchlaufen (7 Tage Wartezeit) oder den Support kontaktieren.
:::

## Zugriff auf 2FA verloren {#losing-access}

Wenn du keinen Zugriff mehr auf deine Authenticator-App oder deinen Sicherheitsschlüssel hast, stehen dir folgende Optionen zur Verfügung:

### Option 1: Recovery Code verwenden

Wenn du deine Recovery Codes gespeichert hast, verwende einen davon, um deine Identität zu verifizieren. Jeder Code funktioniert nur einmal.

### Option 2: E-Mail-basierter 2FA-Reset

Wenn du sowohl dein 2FA-Gerät als auch deine Recovery Codes verloren hast, kannst du deine 2FA per E-Mail zurücksetzen:

1. Leite auf der Sicherheitsseite einen 2FA-Reset ein, indem du die E-Mail-Adresse deines Kontos eingibst
2. Du erhältst eine Bestätigungs-E-Mail – klicke auf den Link, um den Reset zu bestätigen
3. Eine **7-tägige Wartezeit** beginnt nach der Bestätigung
4. Nach 7 Tagen werden deine 2FA-Methoden automatisch entfernt und du kannst neue einrichten

Die 7-tägige Wartezeit ist eine Sicherheitsmaßnahme – sie gibt dir Zeit, den Reset abzubrechen, falls jemand anderes ihn ohne dein Wissen eingeleitet hat. Du erhältst eine E-Mail mit einem Abbruch-Link, wenn der Reset bestätigt wird.

:::info
Du kannst einen ausstehenden 2FA-Reset jederzeit vor der Ausführung von der [Sicherheitsseite](https://scnx.app/user/security) aus abbrechen.
:::

### Option 3: Support kontaktieren

Wenn die E-Mail-basierte Wiederherstellung nicht verfügbar ist (z. B. weil du sie deaktiviert hast – siehe unten), [kontaktiere das SCNX-Support-Team](https://scnx.app/help) für eine manuelle Identitätsverifizierung.

## E-Mail-Selbstwiederherstellung deaktivieren {#disable-email-recovery}

Für maximale Sicherheit kannst du den E-Mail-basierten 2FA-Reset für dein Konto deaktivieren. Dadurch wird verhindert, dass jemand – einschließlich einer Person mit Zugriff auf deine E-Mail – deine 2FA über den Self-Service-Prozess zurücksetzen kann.

### Warum deaktivieren?

Wenn ein Angreifer sowohl dein Discord-Konto als auch deine E-Mail-Adresse kompromittiert, könnte er einen 2FA-Reset einleiten und 7 Tage warten, um vollen Zugriff auf dein Konto zu erhalten. Das Deaktivieren der E-Mail-Selbstwiederherstellung beseitigt diesen Angriffsvektor vollständig.

### So deaktivierst du sie

1. Gehe zu [scnx.app/user/security](https://scnx.app/user/security)
2. Klicke im Abschnitt **Erweiterte Sicherheit** auf **E-Mail-Wiederherstellung deaktivieren**
3. Bestätige im Dialog

:::warning
Stelle vor dem Deaktivieren der E-Mail-Wiederherstellung sicher, dass du deine Recovery Codes sicher gespeichert hast. Du **musst** Recovery Codes generiert haben, bevor diese Option verfügbar wird – das verhindert, dass du dich versehentlich aussperrst.
:::

### Was passiert, wenn die E-Mail-Wiederherstellung deaktiviert ist

- Du **kannst** den E-Mail-basierten 2FA-Reset-Prozess **nicht** nutzen
- Wenn du dein 2FA-Gerät verlierst, sind Recovery Codes oder der Kontakt zum Support deine einzigen Optionen
- Alle ausstehenden 2FA-Resets werden automatisch abgebrochen

### E-Mail-Wiederherstellung wieder aktivieren

Wenn du deine Meinung änderst, kannst du die E-Mail-Wiederherstellung jederzeit wieder aktivieren:

1. Gehe zu [scnx.app/user/security](https://scnx.app/user/security)
2. Klicke auf **E-Mail-Wiederherstellung wieder aktivieren**
3. Bestätige im Dialog

## Sudo Mode

Manche Aktionen auf SCNX erfordern, dass du deine Identität auch während einer aktiven Session verifizierst. Das nennt sich **Sudo Mode** – eine kurzlebige, erweiterte Session, ähnlich dem Eingeben deines Passworts auf macOS oder Linux vor Systemänderungen.

Wenn du eine sensible Aktion durchführst (z. B. Sicherheitseinstellungen ändern oder einen Server mit aktivierter [Enhanced Security](/docs/scnx/guilds/enhanced-security/) öffnen), wirst du aufgefordert, dich mit deiner 2FA-Methode zu verifizieren.

- **Authenticator-App / Recovery Code:** Sudo Mode dauert **10 Minuten**
- **Sicherheitsschlüssel:** Sudo Mode dauert **30 Minuten**

Nach dem Ablauf wirst du für die nächste sensible Aktion erneut zur Verifizierung aufgefordert.

## Empfehlungen

Für die beste Kontosicherheit:

- **Mindestens eine 2FA-Methode aktivieren** – eine Authenticator-App oder einen Sicherheitsschlüssel
- **Recovery Codes generieren und sicher aufbewahren** – in einem Passwortmanager oder ausgedruckt in einem Tresor
- **Hardware-Sicherheitsschlüssel verwenden** für den stärksten Schutz (phishing-resistent)
- **E-Mail-Selbstwiederherstellung deaktivieren**, wenn du maximalen Schutz möchtest und darauf vertraust, deine Recovery Codes sicher aufzubewahren
- **[Enhanced Security](/docs/scnx/guilds/enhanced-security/) auf deinen Servern aktivieren**, um 2FA-Verifizierung für alle Konfigurationsänderungen zu erfordern
