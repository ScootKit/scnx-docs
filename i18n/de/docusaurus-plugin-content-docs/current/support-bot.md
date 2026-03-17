# Support-Bot einrichten

Richte den SCNX Support-Bot ein, um ein professionelles Support-Erlebnis auf deinem Discord-Server anzubieten. Die Einrichtung dauert nur wenige Minuten.

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true}} additionalDetails={{
UNLIMITED: "24/7 gehostet, solange dein Abonnement aktiv ist.",
PROFESSIONAL: "24/7 gehostet, solange dein Abonnement aktiv ist."}} />

## 0. Vorbereitungs-Checkliste {#step-0}

Bevor du loslegst, stelle sicher, dass

* du [deinen Server zu SCNX hinzugefügt](/de/docs/setup) hast.
* dein Server ein aktives kostenpflichtiges SCNX-Abonnement (Unlimited oder Professional) hat. Der Support-Bot ist nicht im kostenlosen Starter-Plan verfügbar.
* du der Besitzer, ein [Trusted-Admin mit der Mitbesitzer-Berechtigung](/de/docs/scnx/guilds/trusted-admins) oder ein Administrator des Servers bist, auf dem du diese Funktion aktivieren möchtest.
* du einige Minuten Zeit hast. Nach unserer Schätzung dauert die Einrichtung am Computer etwa zwei bis drei Minuten — am Handy könnte es etwas länger dauern. Stoppe nicht mittendrin; dein Fortschritt wird nicht gespeichert.

## 1. Erstelle deine Discord-Applikation & deinen Bot {#step-1}

:::caution
Verwende **keine** vorhandene Applikation. Du brauchst eine neue für deinen Support-Bot. SCNX unterstützt es nicht, den Support-Bot, den Eigenen Bot oder einen weiteren Drittanbieter-Bot mit demselben Token bzw. derselben Applikation gleichzeitig zu verwenden — bitte erstelle für jeden Bot eine neue.
:::

Als Erstes besuche das [Discord-Developer-Portal](https://discord.com/developers/applications). Dort kannst du eine neue Applikation erstellen, indem du oben rechts auf "New Application" klickst. Gib den Namen der Applikation ein (den kannst du später ändern), lies und stimme den [Discord-Entwickler-Nutzungsbedingungen](https://discord.com/developers/docs/policies-and-agreements/terms-of-service) und der [Discord-Entwicklerrichtlinie](https://discord.com/developers/docs/policies-and-agreements/developer-policy) zu und bestätige mit "Create".

![Erstellen einer neuen Applikation im Discord-Developer-Portal](@site/docs/assets/setup/custom-bot-1.png)

Öffne als Nächstes die "Bot"-Einstellungen in der Navigationsleiste am linken Bildschirmrand. Klicke dann auf "Reset token" und bestätige deine Anfrage im Popup. Möglicherweise wirst du nach einem 2FA-Code für deinen Discord-Account gefragt. Sobald du damit fertig bist, **kopiere den Token deines Bots** — du brauchst diesen im nächsten Schritt.

![Kopieren des Bot-Tokens im Discord-Developer-Portal](@site/docs/assets/setup/custom-bot-3.png)

:::danger
Füge deinen Token **nur** im SCNX-Dashboard ein. Sende **niemals** einen Token an einen anderen Nutzer, Trusted Admins oder eines unserer Teammitglieder. Geh mit Tokens wie mit einem Passwort um — Nutzer mit Zugriff auf deinen Token können deinen Bot verwenden, um schädliche Aktionen auszuführen.
:::

## 2. Bot auf SCNX einrichten {#step-2}

Öffne die [Support-Bot-Einrichtung](https://scnx.app/de/glink?page=support-system/onboarding) in deinem SCNX-Dashboard. Du wirst aufgefordert, den Token einzugeben, den du in [Schritt 1](#step-1) erhalten hast. Füge ihn ein und klicke auf "Token überprüfen & Bot erstellen". SCNX prüft nun deinen Token und richtet das Hosting ein — das kann einige Sekunden dauern.

Falls du die Einrichtung bereits abgeschlossen hast, kannst du stattdessen direkt das [Support-Bot-Dashboard](https://scnx.app/de/glink?page=support-system/manage) öffnen.

## 3. Bot auf deinen Server einladen {#step-3}

Bevor du etwas konfigurieren kannst, muss der Bot auf deinem Server sein. Klicke auf den **Bot einladen**-Button. Damit öffnest du Discords OAuth2-Autorisierungsseite — wähle deinen Server aus, klicke auf "Weiter" und dann auf "Autorisieren".

Sobald der Bot deinem Server beitritt, erkennt die Einrichtung dies automatisch und geht zum nächsten Schritt über. Falls der Bot nicht erkannt wird, klicke auf **Erneut versuchen** oder **Bot einladen**.

![Discords OAuth2-Autorisierungsseite, auf der du deinen Server auswählst und den Bot autorisierst](@site/docs/assets/setup/custom-bot-6.png)

:::tip
Falls du Probleme beim Einladen des Bots hast, stelle sicher, dass du die "Server verwalten"-Berechtigung auf deinem Discord-Server hast.
:::

## 4. Support-Modus wählen {#step-4}

Du wirst gefragt: **"Wie möchtest du deine Community unterstützen?"**. Du kannst zwischen zwei Systemen wählen — oder beide aktivieren:

|                       |                                                              Modmail                                                               |                                                             Ticket-System                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **So funktioniert's** | Nutzer senden eine DM an deinen Bot. Nachrichten werden zwischen den DMs des Nutzers und einem privaten Team-Kanal weitergeleitet. | Nutzer klicken auf einen Button in einem Kanal, um ein Ticket zu öffnen. Ein neuer privater Kanal wird für die Konversation erstellt. |
| **Am besten für**     | Persönliche, private Support-Gespräche                                                                                             | Strukturierter Support mit mehreren Kategorien                                                                                        |
| **Ablauf**            | Nutzer schreibt DM → Team-Kanal erstellt → Nachrichten weitergeleitet → Team schließt → Log gespeichert                            | Nutzer klickt Button → Kanal erstellt → Direkte Konversation → Ticket geschlossen → Log gespeichert                                   |

Wähle einen oder beide Modi aus und klicke auf **Weiter**.

![Der Modus-Auswahlbildschirm mit Karten für Modmail und Ticket-System, jeweils mit Beschreibung und Ablaufdiagramm](@site/docs/assets/setup/support-bot-2.png)

:::info
Du kannst beide Systeme aktivieren — sie funktionieren hervorragend zusammen. Nicht sicher, welches du wählen sollst? Schau dir den [Feature-Vergleich](/de/docs/support-bot/feature-comparison) an.
:::

## 5. Modmail konfigurieren {#step-5}

:::info
Dieser Schritt erscheint nur, wenn du im vorherigen Schritt **Modmail** ausgewählt hast. Wenn du nur das Ticket-System gewählt hast, springe zu [Schritt 6](#step-6).
:::

In diesem Schritt konfigurierst du die grundlegenden Modmail-Einstellungen. Du kannst diese jederzeit später in der [Modmail-Konfiguration](https://scnx.app/de/glink?page=support-system/modmail/configuration) ändern.

* **Ticket-Kategorie** — wähle die Kategorie auf deinem Discord-Server, in der neue Modmail-Ticket-Kanäle erstellt werden. Wenn ein Nutzer dem Bot eine DM schreibt, wird in dieser Kategorie ein neuer Kanal für dein Team erstellt.
* **Log-Kanal** — wähle den Kanal, in den Zusammenfassungen geschlossener Tickets gesendet werden. Jedes Mal, wenn ein Ticket geschlossen wird, wird hier eine Zusammenfassung mit dem Gesprächsverlauf gepostet.

### Info-Nachricht (optional) {#modmail-info-message}

Du kannst optional eine Info-Nachricht in einem Kanal deiner Wahl posten, um Nutzer darüber zu informieren, dass sie dem Bot eine DM für Support senden können. Aktiviere diese Option, wenn der Bot automatisch eine Nachricht wie diese posten soll:

> **Brauchst du Hilfe?**
> Sende eine Direktnachricht an diesen Bot, um ein Support-Ticket zu öffnen. Unser Team wird sich so schnell wie möglich bei dir melden.

Wenn aktiviert, kannst du konfigurieren:

* **Kanal** — der Kanal, in dem die Info-Nachricht gepostet wird.
* **Nachrichteninhalt** — passe den Embed-Inhalt an den Ton deines Servers an.

Klicke auf **Speichern & Weiter**, wenn du fertig bist.

## 6. Ticket-System konfigurieren {#step-6}

:::info
Dieser Schritt erscheint nur, wenn du in Schritt 4 das **Ticket-System** ausgewählt hast. Wenn du nur Modmail gewählt hast, springe zu [Schritt 7](#step-7).
:::

In diesem Schritt richtest du das kanalbasierte Ticket-System ein. Du kannst diese Einstellungen jederzeit später in der [Ticket-System-Konfiguration](https://scnx.app/de/glink?page=support-system/ticket-system/configuration) ändern.

* **Team-Rollen** — wähle die Rollen aus, die Zugriff auf die Verwaltung von Tickets haben sollen. Mitglieder mit diesen Rollen können alle Ticket-Kanäle sehen und beantworten.
* **Ticket-Kategorie** — wähle die Kategorie, in der neue Ticket-Kanäle erstellt werden. Wenn ein Nutzer ein Ticket öffnet, wird in dieser Kategorie ein privater Kanal erstellt.
* **Log-Kanal** — wähle den Kanal, in den Zusammenfassungen geschlossener Tickets gesendet werden.

### Ticket-Öffnen-Nachricht (erforderlich) {#ticket-open-message}

Das Ticket-System benötigt eine Nachricht mit einem Button, über den Nutzer Tickets öffnen können. Du musst Folgendes konfigurieren:

* **Kanal** — der Kanal, in dem der "Ticket öffnen"-Button gepostet wird. Das ist üblicherweise ein Support- oder Hilfe-Kanal, der für alle Mitglieder sichtbar ist.
* **Button-Beschriftung** — der Text auf dem Button (Standard: "Ticket öffnen").
* **Nachrichteninhalt** — passe die Embed-Nachricht an, die über dem Button angezeigt wird. Die Standardnachricht ist:

> **Brauchst du Unterstützung?**
> Klicke auf den Button unten, um ein Support-Ticket zu öffnen. Unser Team wird sich so schnell wie möglich bei dir melden.

Klicke auf **Speichern & Weiter**, wenn du fertig bist.

:::caution
Du musst mindestens einen Kanal für die Ticket-Öffnen-Nachricht konfigurieren, damit das Ticket-System funktioniert. Die Einrichtung hebt dieses Feld hervor, falls es fehlt.
:::

## 7. Erweiterte Funktionen (optional) {#step-7}

Der nächste Bildschirm fragt: **"Möchtest du noch mehr herausholen?"**. Hier kannst du optional erweiterte Funktionen einrichten, um dein Support-Erlebnis zu verbessern. Du kannst diese jetzt konfigurieren oder später jederzeit über das Dashboard nachholen.

|       Funktion       |                                    Beschreibung                                    |                                                                Mehr erfahren                                                                |
| -------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ticket-Themen**    | Kategorisiere Tickets nach Thema für bessere Organisation und Weiterleitung.       | [Modmail-Themen](/docs/support-bot/modmail/ticket-topics) · [Ticket-System-Themen](/docs/support-bot/ticket-system/ticket-topics)           |
| **Claiming**         | Erlaube Teammitgliedern, Tickets zu beanspruchen, um doppelte Arbeit zu vermeiden. | [Modmail-Claiming](/docs/support-bot/modmail/claiming) · [Ticket-System-Claiming](/docs/support-bot/ticket-system/claiming)                 |
| **Support-Feedback** | Sammle Sternebewertungen und Feedback nach dem Schließen von Tickets.              | [Modmail-Feedback](/docs/support-bot/modmail/support-feedback) · [Ticket-System-Feedback](/docs/support-bot/ticket-system/support-feedback) |
| **Formulare**        | Sammle strukturierte Informationen von Nutzern beim Öffnen eines Tickets.          | [Formulare](/docs/support-bot/general/forms)                                                                                                |
| **Öffnungszeiten**   | Lege fest, wann dein Support-Team verfügbar ist, einschließlich Feiertagen.        | [Öffnungszeiten](/docs/support-bot/general/opening-hours)                                                                                   |
| **Bot-Branding**     | Passe den Footer-Text und das Erscheinungsbild deines Bots an.                     | [Bot-Konfiguration](/docs/support-bot/general/bot-configuration)                                                                            |

Klicke bei einer Funktion auf **Einrichten**, um sie zu konfigurieren, oder klicke auf **Weiter**, um die Einrichtung abzuschließen.

:::tip
Funktionen, die bereits konfiguriert sind, zeigen ein **"Bereits konfiguriert"**-Badge an. Du kannst diese Einstellungen jederzeit über das [Dashboard](https://scnx.app/de/glink?page=support-system/manage) ändern.
:::

## 8. Alles fertig! {#done}

Sobald du die Einrichtung abgeschlossen hast, siehst du einen Bestätigungsbildschirm, der alles zeigt, was konfiguriert wurde. Klicke auf **Zum Dashboard**, um deine [Support-Bot-Verwaltungsseite](https://scnx.app/de/glink?page=support-system/manage) zu öffnen.

Hier sind einige Dinge, die du als Nächstes tun kannst:

* Teile den [Modmail-Leitfaden](/de/docs/support-bot/modmail/basics) oder das [Ticket-System 101](/de/docs/support-bot/ticket-system/basics) mit deinem Team.
* Richte [Ticket-Themen](https://scnx.app/de/glink?page=support-system/modmail/ticket-topics) ein, um eingehende Tickets zu organisieren.
* Aktiviere [Formulare](https://scnx.app/de/glink?page=support-system/forms), um strukturierte Informationen von Nutzern zu sammeln.
* Konfiguriere [Öffnungszeiten](https://scnx.app/de/glink?page=support-system/bot-configuration?show=opening-hours), damit Nutzer wissen, wann dein Team verfügbar ist.
* Schau dir das [Analytics-Dashboard](https://scnx.app/de/glink?page=support-system/analytics) an, um die Leistung deines Teams zu verfolgen.
* Entdecke alle Optionen in der [Support-Bot-Dokumentation](/de/docs/support-bot/intro).

:::tip Es läuft nicht alles wie geplant?
Wir haben einen [Leitfaden zur Fehlerbehebung](/de/docs/support-bot/troubleshooting) für dich. Wenn das nicht geholfen hat, sind wir immer da, um zu helfen — besuche einfach [scnx.app/de/help](https://scnx.app/de/help).
:::
