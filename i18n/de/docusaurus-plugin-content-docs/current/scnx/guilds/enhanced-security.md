---
sidebar_position: 6
title: Enhanced Security
---

# Enhanced Security für Server

Enhanced Security ist eine optionale Funktion, die deiner SCNX-Serverkonfiguration eine zusätzliche Schutzebene hinzufügt. Wenn sie aktiviert ist, müssen alle Administratoren ihre Identität per Zwei-Faktor-Authentifizierung bestätigen, bevor sie Änderungen an deiner Bot-Konfiguration, den Support-Bot-Einstellungen, Integrationen oder anderen sensiblen Servereinstellungen vornehmen können.

## Wovor schützt Enhanced Security?

### Kompromittierte Trusted-Admin-Konten
Wenn das Discord-Konto eines Trusted Admins kompromittiert wird (z. B. durch Phishing, Credential Stuffing oder Token-Diebstahl), erhält der Angreifer Zugriff auf dessen SCNX-Session. Ohne Enhanced Security könnte der Angreifer sofort deine Bot-Konfiguration ändern, Support-Bot-Einstellungen anpassen, Integrationen deaktivieren oder anderen Schaden anrichten.

Mit aktivierter Enhanced Security bräuchte der Angreifer zusätzlich Zugriff auf die 2FA-Methode des Admins (Authenticator-App, Hardware-Sicherheitsschlüssel oder Recovery Codes), um Konfigurationsänderungen vorzunehmen – selbst wenn er eine gültige Session hat.

### Unautorisierte Änderungen durch geteilte Konten
In manchen Organisationen haben mehrere Personen Zugriff auf dasselbe Discord-Konto oder teilen Anmeldedaten. Enhanced Security stellt sicher, dass jede Konfigurationsänderung eine explizite Identitätsverifizierung erfordert, was Nachvollziehbarkeit schafft und unautorisierte Änderungen verhindert.

### Session-Cookie-Hijacking
**Wichtiger Vorbehalt:** Enhanced Security bietet **teilweisen, aber keinen vollständigen** Schutz gegen Session-Cookie-Hijacking (auch bekannt als Session-Diebstahl oder Cookie-Diebstahl durch Malware/XSS).

Der Grund:

**Was geschützt wird:**
- Wenn ein Angreifer ein Session-Cookie stiehlt, das KEINE aktive Sudo-Mode-Session hat, kann er keine Konfigurationsänderungen vornehmen. Er bräuchte das 2FA-Gerät des Opfers, um den Sudo Mode zu aktivieren.
- Der Sudo Mode läuft nach 10 Minuten (TOTP) bzw. 30 Minuten (Sicherheitsschlüssel) ab, sodass das Zeitfenster auch bei einem aktiven Sudo Mode begrenzt ist.

**Was NICHT geschützt wird:**
- Wenn der Angreifer das Cookie stiehlt, während der Sudo Mode bereits aktiv ist (innerhalb des 10/30-Minuten-Fensters), kann er Änderungen vornehmen, bis er abläuft.
- Session-Cookies selbst sind nicht an die 2FA-Verifizierung gebunden – sie sind Standard-HTTP-Session-Cookies.

**Für maximalen Schutz gegen Session-Hijacking empfehlen wir:**
- Hardware-Sicherheitsschlüssel zu verwenden (kürzere aktive Sessions sind weniger riskant, und das 30-Minuten-Fenster ist noch relativ kurz)
- Dich aus SCNX auszuloggen, wenn du deinen Server gerade nicht aktiv verwaltest
- Browser und Betriebssystem aktuell zu halten
- Keine nicht vertrauenswürdigen Browser-Erweiterungen zu installieren
- [E-Mail-basierte Selbstwiederherstellung zu deaktivieren](/docs/scnx/account-and-billing/account-security#disable-email-recovery) (verhindert einen E-Mail-basierten 2FA-Reset, selbst wenn deine E-Mail kompromittiert wird)

:::tip
Für das höchste Sicherheitsniveau kombiniere Enhanced Security mit Hardware-Sicherheitsschlüsseln und [deaktivierter E-Mail-Selbstwiederherstellung](/docs/scnx/account-and-billing/account-security#disable-email-recovery). So kann ein Angreifer, selbst wenn sowohl dein Discord-Konto als auch deine E-Mail kompromittiert sind, deine 2FA nicht zurücksetzen oder Konfigurationsänderungen vornehmen, ohne physischen Zugriff auf deinen Sicherheitsschlüssel zu haben.
:::

## So aktivierst du Enhanced Security

### Verfügbarkeit

Enhanced Security ist auf **allen bezahlten Plänen** (Unlimited, Professional und Enterprise) verfügbar und wird schrittweise eingeführt. Wenn du die Option in deinen Servereinstellungen noch nicht siehst, erhält dein Server bald Zugriff.

:::info
Enhanced Security wird stufenweise für alle bezahlten Server eingeführt. Wenn du frühzeitigen Zugriff möchtest, [kontaktiere den Support](https://scnx.app/help).
:::

### Voraussetzungen

Bevor du Enhanced Security auf deinem Server aktivierst, müssen **alle Administratoren** (Owner + Trusted Admins) Folgendes tun:

1. **Zwei-Faktor-Authentifizierung einrichten** – Besuche [scnx.app/user/security](https://scnx.app/user/security) und richte mindestens eine 2FA-Methode ein (Details findest du unter [Konto-Sicherheit](/docs/scnx/account-and-billing/account-security/)):
   - **Authenticator-App (TOTP)** – z. B. Authy, Google Authenticator
   - **Hardware-Sicherheitsschlüssel** – z. B. YubiKey (empfohlen für höchste Sicherheit)
2. **Recovery Codes generieren** – Generiere auf der Sicherheitsseite 8 Backup-Recovery-Codes und bewahre sie sicher auf

Wenn ein Trusted Admin keine 2FA eingerichtet hat, wird er aufgefordert, dies zu tun, bevor er auf Serverkonfigurationsseiten zugreifen kann.

### Funktion aktivieren

1. Navigiere zur **Einstellungsseite** deines Servers auf SCNX
2. Suche die Option **Enhanced Security**
3. Schalte sie ein
4. Bestätige die Änderung

Sobald aktiviert, erfordern alle Konfigurationsänderungen auf deinem Server eine aktive Sudo-Mode-Session.

### Welche Aktionen erfordern den Sudo Mode?

Wenn Enhanced Security aktiviert ist, erfordern die folgenden Aktionen eine Identitätsverifizierung:

- Bot-Konfiguration bearbeiten (Befehle, Module, Einstellungen)
- Support-Bot-Konfiguration ändern
- Integrationen verwalten
- Linked Roles bearbeiten
- Servereinstellungen ändern
- Trusted Admins und Berechtigungen verwalten

Die folgenden Aktionen erfordern **keinen** Sudo Mode (auch nicht mit Enhanced Security):
- Dashboard und Analytics anzeigen
- Bot-Logs anzeigen

## Für Trusted Admins

Wenn du ein Trusted Admin auf einem Server mit aktivierter Enhanced Security bist:

1. Du siehst ein Schild-Symbol in der Server-Seitenleiste, das anzeigt, dass Enhanced Security aktiv ist
2. Wenn du den Server im SCNX-Dashboard öffnest, wirst du sofort aufgefordert, deine Identität zu verifizieren und den Sudo Mode zu aktivieren
3. Der Sudo Mode dauert **10 Minuten** (Authenticator-App) oder **30 Minuten** (Sicherheitsschlüssel)
4. Nach dem Ablauf wirst du aufgefordert, dich erneut zu verifizieren, bevor du weitere Änderungen vornehmen kannst

### Wenn du keine 2FA eingerichtet hast

Du siehst eine Nachricht, die dich auffordert, die Zwei-Faktor-Authentifizierung einzurichten, bevor du auf die Serverkonfiguration zugreifen kannst.

Besuche [scnx.app/user/security](https://scnx.app/user/security), um deine 2FA einzurichten (eine Anleitung findest du unter [Konto-Sicherheit](/docs/scnx/account-and-billing/account-security/)), und kehre dann zur Serverkonfiguration zurück.

## Enhanced Security deaktivieren

Nur der Server-Owner kann Enhanced Security deaktivieren. Navigiere zur Einstellungsseite deines Servers und schalte die Funktion aus.

:::warning
Das Deaktivieren von Enhanced Security hebt die 2FA-Anforderung für alle Konfigurationsänderungen auf. Alle Trusted Admins können dann Änderungen ohne Identitätsverifizierung vornehmen.
:::

## Häufig gestellte Fragen

### Beeinträchtigt Enhanced Security die normale Servernutzung?

Nein. Enhanced Security wirkt sich nur auf Konfigurationsänderungen aus, die über das SCNX-Dashboard vorgenommen werden. Deine Bots, der Support Bot, Integrationen und andere Funktionen laufen weiterhin normal.

### Was passiert, wenn ich keinen Zugriff mehr auf meine 2FA habe?

Du kannst deine Recovery Codes verwenden, um den Sudo Mode zu aktivieren. Wenn du auch deine Recovery Codes verloren hast, kannst du einen E-Mail-basierten 2FA-Reset einleiten, der eine 7-tägige Wartezeit hat. Details findest du unter [Konto-Sicherheit – Zugriff auf 2FA verloren](/docs/scnx/account-and-billing/account-security#losing-access).

Wenn du die E-Mail-Selbstwiederherstellung deaktiviert hast, musst du den Support für eine manuelle Verifizierung kontaktieren.

### Kann ich Enhanced Security mit einem kostenlosen Plan nutzen?

Enhanced Security erfordert einen bezahlten Plan (Unlimited oder höher). Es ist nicht im kostenlosen Starter-Plan verfügbar. Wenn du einen bezahlten Plan hast, aber die Option noch nicht siehst, wird sie schrittweise eingeführt und dein Server erhält bald Zugriff.

### Muss auch der Server-Owner 2FA einrichten?

Ja. Wenn Enhanced Security aktiviert ist, muss jeder – einschließlich des Server-Owners – seine Identität verifizieren, um Konfigurationsänderungen vorzunehmen.

---

*Enhanced Security ist eine Funktion der SCNX-Plattform von ScootKit. Bei Fragen oder zur Beantragung des Zugriffs besuche [scnx.app/help](https://scnx.app/help).*
