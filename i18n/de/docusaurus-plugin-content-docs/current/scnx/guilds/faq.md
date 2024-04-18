---
sidebar_position: 6
---

# Häufig gestellte Fragen

Häufig gestellte Fragen, wie Server auf SCNX funktionieren.

## Wieso muss ich der Eigentümer sein, um einen Server zu SCNX hinzuzufügen? {#owner}

Nur der Eigentümer kann einen neuen Discord-Server zu SCNX hinzufügen. Der Grund dafür hat mit Rechtlichem zu tun und
basiert auf
unseren [Nutzungsbedingungen](https://sc-net.work/scnx-tos) - wir werden das eventuell in Zukunft ändern. Momentan
kannst du einfach den
Eigentümer fragen, ob er auf seinem Server [SCNX einrichtet](./../../setup) und dir
[Trusted-Admin-Rechte](./trusted-admins) geben kann.

---

## Kann ich mehrere Discord-Bots für den gleichen Server erstellen? {#multiple-bots}

Du kannst einen [eigenen Bot](../../custom-bot/intro) und einen [Modmail-Bot](../../modmail/intro) pro Server erstellen
und Funktionen nicht auf mehrere eigene Bots aufteilen (z. B. einen Bot nur für temporäre Sprachkanäle).
Du kannst deinen Bot zu anderen Servern hinzufügen, jedoch wird dieser dort nicht funktionieren.
Ein Grund dafür ist, dass das Hosten von mehr Bots sehr teuer für uns wäre, doch der deutlich größere Grund ist der
Aufbau von SCNX:
SCNX ist dafür gedacht, oft mehrere, normale Bots durch Einen zu ersetzen - deinen eigenen Bot.

---

## Kann ich den SCNX-Manager-Bot entfernen? {#scnx-manager-bot}

:::info
Kicke den SCNX Management Bot nicht einfach von deinem Server, denn dies führt zu einer Deaktivierung von SCNX. Befolge
stattdessen diese Anleitung, um den SCNX Management Bot zu entfernen.
:::

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: false, STARTER: false}} />

Server mit einem [PRO-Plan](./plans) können den SCNX Management Bot von ihrem Server entfernen.

### Bedingungen für die Entfernung des SCNX Managment Bots {#scnx-manager-bot-requirements}

* Der Server benötigt einen [PRO-Plan](./plans).
* Der Server darf bisher nicht gegen unsere [Nutzungsbedingungen](https://scootk.it/scnx-tos) verstoßen haben.
* Der Server muss bereits einen [eigenen Bot](./../../custom-bot/intro) auf SCNX erstellt haben.
* Der Server darf keine besondere vertragliche Zahlungsabmachung mit ScootKit getroffen haben, die die Verfügbarkeit
  dieser Funktion einschränken könnte.

### Wichtige Hinweise zu dieser Funktion {#scnx-manager-bot-warning}

SCNX wurde so entwickelt, dass der SCNX Bot auf jedem Server eingeladen ist. Deswegen können einige Funktionen nicht
ohne den SCNX Bot funktionieren. Du findest diese Funktionen im Detail unten. Beachte außerdem bitte folgende Hinweise:

* Einige Funktionen sind ohne eingeladenen SCNX Bot nicht verfügbar, bitte prüfe diese sorgfältig unten.
* Wenn dein Server heruntergestuft wird (also seinen PRO-Plan verliert), werden deine Bots auf SCNX angehalten und du
  musst den SCNX Bot erneut auf deinen Server einladen. Dabei gehen keine Daten verloren, aber deine Bots werden nicht
  verfügbar sein. Überlege dir, [ein Abo](./plans#upgrade) oder einen [lebenslangen Plan](./plans#lifetime) anzulegen,
  um Probleme zu vermeiden.
* Der SCNX-Bot kann dir keine Nachrichten per Privatnachricht auf Discord schicken, wenn du auf keinem Server gemeinsam
  mit dem Bot bist. Wir schicken dir per PN wichtige Informationen, wie Rechnungen oder Kontoänderungen. Du wirst diese
  rechtlich notwendigen Informationen weiterhin per E-Mail bekommen, aber um diese Informationen auch per Discord-PN zu
  bekommen, trete unserem [Discord](https://scootk.it/dc) Discord bei.
* Wenn sich der Serverbesitzer des Servers ändert, musst dieser den SCNX Bot aus rechtlichen Gründen erneut einladen, um
  unseren Nutzungsbedingungen zuzustimmen. Danach kann dieser
  die [Entfernungsschritte](#scnx-manager-bot-features-setup) befolgen, um den Bot erneut zu entfernen.

### Auch ohne SCNX Bot unterstütze Funktionen {#scnx-manager-bot-features-available}

Folgende Funktionen sind auch ohne den eingeladenen SCNX Manager verfügbar:

* [Eigener Bot](./../../custom-bot/intro): Du kannst deinen bereits auf SCNX erstellten eigenen Bot vollständig
  verwalten, aber kannst keinen Nachrichtenverlauf in [Als-Bot-Anmelden](./../../custom-bot/login-as-bot) sehen.
  Trotzdem kannst du neue Nachrichten senden oder bestehende Nachrichten per ID editieren.
* [Modmail Bot](./../../modmail/intro): Du kannst weiterhin einen SCNX Modmail erstellen oder verwalten.
* SCNX Integrations: Du kannst weiterhin Integrationen hinzufügen, verwalten und konfigurieren.
* Das SCNX Dashboard wird weiterhin wie gewohnt funktionieren, nur kann es zu erhöhten Ladezeiten aufgrund des fehlenden
  SCNX Managers kommen.

### Ohne SCNX Bot NICHT unterstütze Funktionen {#scnx-manager-bot-features-disabled}

* [SCNX Backups](./backups): Der Server kann SCNX Backups nicht verwenden, ohne das der SCNX Bot eingeladen wurde.
* [SCNX Statistiken](./analytics): Der Server kann SCNX Statistiken nicht verwenden, ohne das der SCNX Bot eingeladen
  wurde.
* [dcserver.link](./dcserver-link): Der dcserver.link des Servers kann ohne den eingeladenen SCNX Bot nicht verwendet
  werden.
* Das SCNX Dashboard wird nicht immer auf dem selben Stand sein, wie dein Discord (Kanal- und Rollenänderungen könnten
  z.B. verzögert sein)

### Entfernung des SCNX Management Bots {#scnx-manager-bot-features-setup}

1. Klicke entweder [hier](https://scnx.app/de/glink?page=manager-bot) oder besuche
   die [Einstellungsseite](https://scnx.app/de/glink?page=settings) deines Servers und wähle "Mehr über die Entfernung
   des SCNX Manager Bots erfahren" aus.
2. Lese dir die Informationen über die Funktionsverfügbarkeit sorgfältig durch und klicke auf "Weiter", um fortzufahren.
3. Überprüfe die Verfügbarkeit dieser Funktion auf deinem Server und wähle "Weiter" aus.
4. Lese dir die abschließenden Hinweise und Warnungen durch und klicke auf "SCNX Management Bot entfernen und zum
   reduzierten Dashboardmodus wechseln".
5. Der SCNX Bot wird deinen Server jetzt verlassen und SCNX wechselt deinen Server zum reduzierten Dashboardmodus. Dies
   kann etwas dauern.

### Erneute Einladung des SCNX Management Bots {#scnx-manager-bot-features-reinvite}

Im reduzierten Dashboardmodus wird dir immer einen personalisierten Link zum erneuten Einladen des SCNX Management Bots
angezeigt, wenn du auf eine Funktion zugreifen willst, die für deinen Server nicht verfügbar ist (wie z.B. Backups).
Ansonsten kannst du den SCNX Bot jederzeit mit [diesem Link](https://scootk.it/invite-scnx) erneut einladen. Sobald du
den Bot eingeladen hast, wird das Dashboard erneut zurück zum normalen Modus wechseln, was bedeutet, dass alle
Funktionen erneut verfügbar sein werden.

---

## Was zählt als kommerzielle Nutzung? {#commercial-usage}

Um SCNX in irgendeiner kommerziellen Art oder Situation zu nutzen, musst du
den [SCNX PRO-Plan](https://scnx.xyz/de/plans) erwerben.
Bitte lies dir diesen [FAQ-Artikel](https://faq.scnx.app/commercial-usage-of-scnx/) durch, um mehr über Einspruch oder
Meldungen
bei kommerzieller Nutzung auf SCNX zu erfahren.

---

## Mein Server auf SCNX wurde gebannt / deaktiviert / geflagged - Was kann ich tun? {#banned}

Oh nein - bitte folge den Anweisungen im Dashboard. [Kontaktiere unser Team](https://scnx.app/de/help),
wenn du Hilfe benötigst.

---

## Kann ich alle Daten von einem Server bei SCNX zu einem anderem übertragen? {#transfer}

Du kannst eine Anfrage für die Übertragung aller Daten stellen, wenn beide Server momentan auf SCNX aktiv sind
(bitte füge den neuen Server hinzu, bevor du eine Anfrage stellst) und du der Eigentümer dieser beiden Server bist.

Da dieser Prozess manuelle Arbeit unsererseits erfordert, gelten folgende Richtlinien:

* Deine erste Übertragung aller Daten ist kostenfrei, wenn mindestens einer der Server einen aktiven, bezahlten Plan
  hat.
* Wenn du bereits eine Übertragung aller Daten für diesen oder einen anderen Server beantragt hast, wird dir
  [ein SCNX-Credit](./../account-and-billing/faq#scnx-credits) berechnet. Bitte stelle sicher, dass du mindestens einen
  SCNX-Credit aufgeladen hast.
* Wenn keiner deiner Server einen aktiven, bezahlten Plan hat, wird dir
  [ein SCNX-Credit](./../account-and-billing/faq#scnx-credits) berechnet. Bitte stelle sicher, dass du mindestens einen
  SCNX-Credit aufgeladen hast.

:::warning
ALLE Daten werden komplett zum neuem Server übertragen. Das wird bereits existierende Einstellungen auf dem neuen Server
überschreiben.
:::

Um eine Übertragung aller Daten zu beantragen, [kontaktiere bitte unser Team](https://scnx.app/de/help).

---

## Wie kann ich meinen Server von SCNX löschen? {#deletion}

Schade, dass du SCNX verlassen möchtest - wenn du nur ein Problem mit SCNX
hast, [helfen wir dir gerne](https://scnx.app/de/help) auf unserem [Discord](https://sc-net.work/dc).

:::danger
Das Löschen eines Servers auf SCNX kann nicht rückgängig gemacht werden. Du musst der Eigentümer des Servers sein, um
diesen von SCNX zu löschen. Wenn du einen aktiven
Plan, ein Abonnement oder einen einmaligen Kauf für den Server, den du löschen möchtest, abgeschlossen hast, geht dies
verloren.
:::
Wenn du den Server permanent von SCNX löschen willst, öffne
die [Server-Einstellungen](https://scnx.app/de/glink?page=settings), scrolle bis zum Abschnitt "Rechtliches" und klicke
auf "Server aus SCNX löschen".
Du wirst aufgefordert, einen Grund für die Löschung auszuwählen (du musst nicht näher darauf eingehen). Als Nächstes
wirst du eine PN erhalten,
um die Löschung zu bestätigen. Klicke auf den Button unter der PN, um deine Löschungsanfrage zu bestätigen und dein
Server wird von SCNX gelöscht -
du wirst eine Bestätigung über eine PN erhalten, wenn die Löschung abgeschlossen wurde - das braucht normalerweise 1-5
Minuten.