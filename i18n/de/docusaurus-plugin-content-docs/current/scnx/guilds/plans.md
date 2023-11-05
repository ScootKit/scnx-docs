---
sidebar_position: 5
---

# Pläne & Abonnements

Pläne auf SCNX sind server-spezifische Zahlungsoptionen, die mehr Funktionen für Server auf SCNX freischalten.

## Alle verfügbaren SCNX-Pläne und ihre Funktionen {#features}

:::info
Die Preise in dieser Dokumentation unterscheiden sich eventuell von den Preisen im Dashboard. Um die aktuellen,
korrekten Preise in deiner Währung zu sehen, öffne [scnx.xyz/de/plans](https://scnx.xyz/de/plans).
:::

| Funktion                                                                                          | Starter-Plan                                                                                       | Aktiver Server Plan                                                                                                                                      | PRO-Plan                                                                                                                      |
|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Preis                                                                                             | *Für immer kostenfrei*                                                                             | <PlanPrice plan="ACTIVE_GUILD" type="MONTHLY" />, <PlanPrice plan="ACTIVE_GUILD" type="YEARLY" /> oder <PlanPrice plan="ACTIVE_GUILD" type="LIFETIME" /> | <PlanPrice plan="PRO" type="MONTHLY" />, <PlanPrice plan="PRO" type="YEARLY" /> oder <PlanPrice plan="PRO" type="LIFETIME" /> |
| Full access to the SCNX Dashboard                                                                 | Enthalten                                                                                          | Enthalten                                                                                                                                                | Enthalten                                                                                                                     |
| [dcserver.link](./dcserver-link)                                                                  | 50+ Mitglieder ohne Bots notwendig                                                                 | Enthalten                                                                                                                                                | Enthalten                                                                                                                     |
| [Eigener Discord-Bot](./../../custom-bot/intro), 24/7 gehostet                                    | Enthalten, aber muss durch Schauen von Werbung alle zwei Wochen [verlängert](#starter-plan) werden | Enthalten                                                                                                                                                | Enthalten                                                                                                                     |
| [Custom Modmail-Bot](./../../modmail/intro), 24/7 gehostet                                        | *Nicht enthalten*                                                                                  | Enthalten                                                                                                                                                | Enthalten                                                                                                                     |
| Entferne alle Erwähnungen von SCNX von allen deinen Bots (z. B. Embed-Fußzeile)                   | *Nicht enthalten*                                                                                  | *Nicht enthalten*                                                                                                                                        | Enthalten                                                                                                                     |
| [Server Analysen](./analytics)                                                                    | Enthalten                                                                                          | Enthalten                                                                                                                                                | Enthalten                                                                                                                     |
| Anzahl von [KI Guthaben](https://faq.scnx.app/ki-auf-scnx/), das jeden Monat am 25. vergeben wird | 20                                                                                                 | 50                                                                                                                                                       | 100                                                                                                                           |
| [Komerzielle Nutzung](./faq#commercial-usage)                                                     | Nicht erlaubt                                                                                      | Nicht erlaubt                                                                                                                                            | Erlaubt                                                                                                                       |
| **Eigener Discord-Bot**: Eigene Befehle                                                           | 10                                                                                                 | 42                                                                                                                                                       | *unendlich*                                                                                                                   |
| **[SCNX Backups](./backups)**: Verfügbare Backup-Slots                                            | 2                                                                                                  | 5                                                                                                                                                        | 10                                                                                                                            |
| **[SCNX Backups](./backups)**: [Automatische Backups](./backups#automatic)                        | *Nicht enthalten*                                                                                  | Einmal pro Tag                                                                                                                                           | Zweimal pro Tag                                                                                                               |
| **[SCNX Backups](./backups)**: Pro Kanal pro Backup gespeicherte Nachrichten                      | 10                                                                                                 | 20                                                                                                                                                       | 50                                                                                                                            |
| **[SCNX Backups](./backups)**: [Backups exportieren](./backups#export)                            | *Nicht enthalten*                                                                                  | *Nicht enthalten*                                                                                                                                        | Enthalten                                                                                                                     |

<details>
    <summary>Zusätzliche Einschränkungen für Pläne im eigenen Bot</summary>
<table>
    Einige Module beschränken die Anzahl von Elementen (im Falle vom Twitter-Benachrichtigungen zum Beispiel Twitter-Nutzer), die mit einem Plan eingestellt werden können.
    <tr style={{fontWeight: 700}}>
        <td>Modul</td>
        <td>Starter-Plan</td>
        <td>Aktiver Server Plan</td>
        <td>PRO-Plan</td>
    </tr>
    <tr>
        <td>Automatische Nachrichten (pro Kategorie)</td>
        <td>2</td>
        <td>5</td>
        <td>15</td>
    </tr>
    <tr>
        <td>Bewerbungs-Kategorien</td>
        <td>2</td>
        <td>7</td>
        <td>25</td>
    </tr>
    <tr>
        <td>RSS-Benachrichtigungen</td>
        <td>1</td>
        <td>4</td>
        <td>10</td>
    </tr>
    <tr>
        <td>TikTok-Benachrichtigungen</td>
        <td>1</td>
        <td>4</td>
        <td>10</td>
    </tr>
    <tr>
        <td>Twitter-Benachrichtigungen</td>
        <td>1</td>
        <td>4</td>
        <td>10</td>
    </tr>
    <tr>
        <td>YouTube-Benachrichtigungen</td>
        <td>1</td>
        <td>4</td>
        <td>10</td>
    </tr>
    <tr>
        <td>Reddit-Benachrichtigungen</td>
        <td>1</td>
        <td>4</td>
        <td>10</td>
    </tr><br/>
Beachte bitte, dass bestimmte Funktionen oder Felder von einigen Modulen, die eine weitgehende Anpassung des Bots erlauben, eventuell nur mit dem PRO-Plan anpassbar sind. Du kannst das Modul auch ohne PRO-Plan verwenden, das betroffene Feld aber nicht anpassen.
</table>
</details>

## Deinen Plan upgraden {#upgrade}

Um deinen Server-Plan zu upgraden, öffne bitte
die [Zahlungs-Seite](https://scnx.app/de/glink?page=pricing?showUpgradeModal=true) deines Servers und öffne den Zahlungs-Dialog.
Wähle hier die Abrechnungsart (verfügbare Optionen: "Einmalig", "Monatlich", "Jährlich", ["Lebenslänglich"](#lifetime))
und deine Währung.
Wenn du mit [SCNX-Credits](./../account-and-billing/faq#scnx-credits) zahlen willst, musst du das jetzt
auswählen.

![](@site/docs/assets/scnx/guilds/plans/subscription-setup.png)

Deine nächsten Schritte unterscheiden sich je nach ausgewählter Abrechnungsart. Bitte befolge die Anweisungen
im Dashboard und kehre zu dieser Dokumentationsseite zurück, wenn du Fragen oder Bedenken hast - wir werden unser bestes
tun, diese im Abschnitt mit den [häufig gestellten Fragen](#faq) zu beantworten.

## Lebenslängliche Pläne {#lifetime}

Lebenslängliche Pläne…

* sind nicht an Server, sondern an Nutzer, gebunden - sie können deshalb alle sieben Tage [übertragen](#lifetime-apply)
  werden, müssen das aber nicht.
* werden alle Funktionen des Planes enthalten, zu welchem sie gekauft wurden (
  vergleiche [SCNX-Nutzungsbedingungen](https://faq.scnx.app/scnx-nutzungsbedingungen/#pl%C3%A4ne)) - auch wenn wir die
  Namen oder Plan-Inhalte ändern sollten.
* werden nur für eine bestimmte Zeit angeboten, damit wir wachsen können - danach werden sie entfernt.
* stellen sicher, dass du nie erneut bezahlen musst, auch wenn wir die Preise erhöhen sollten.
* erlauben es uns, diesen Dienst anzubieten :heart:

### Lebenslänglichen Plan kaufen {#lifetime-purchase}

Um einen lebenslänglichen Plan zu kaufen, öffne
dein [Lebenslängliche-Pläne-Panel](https://scnx.app/de/user/lifetime-plans) und
wähle den Plan aus, den du kaufen willst. Vervollständige als nächstes den Kauf mit deiner bevorzugten
Zahlungsmethode - du kannst später dann auswählen, welcher deiner Server den Plan erhalten soll.

Nachdem du den Kauf abgeschlossen hast, kehre zum [Lebenslängliche-Pläne-Panel](https://scnx.app/de/user/lifetime-plans)
zurück und
befolge die Anweisungen zur [Anwendung eines lebenslänglichen-Plans](#lifetime-apply).

Du kannst so viele lebenslange Pläne besitzen, wie du willst - du kannst jeden von ihnen zwischen Servern übertragen.

### Lebenslänglichen Plan anwenden oder übertragen {#lifetime-apply}

:::info
Du kannst einen lebenslänglichen Plan auf jeden Server anwenden, auf den du Zugriff hast. Ein lebenslanger Plan kann
alle sieben Tage zwischen Servern übertragen werden, muss das aber nicht.
:::

Nach dem Kauf eines lebenslänglichen Planes muss dieser auch auf einen Server angewendet werden. Das bedeutet, dass der
Server zu dem Plan des lebenslänglichen Plans geupgradet wird und diesen Plan behalten wird, solange er nicht von diesem
Server entfernt wird. Der Prozess zum Anwenden ist derselbe, wie der Prozess zum Übertragen eines lebenslänglichen
Planes.

Um einen lebenslänglichen Plan anzuwenden oder zu übertragen, öffne
das [Lebenslängliche-Pläne-Panel](https://scnx.app/user/lifetime-plans) in deinem Dashboard. Klicke dort auf den "
Lebenslänglichen Plan verwalten"-Knopf neben dem lebenslänglichen Plan, den du verwalten willst. Ein Dialog mit Infos
über deinen lebenslänglichen Plan wird sich öffnen. Wähle dort "lebenslänglichen Plan auf einen anderen Server übertragen"
aus. Du kannst jetzt den Server auswählen, zu dem du den lebenslänglichen Plan übertragen bzw. anwenden willst. SCNX wird einige
Überprüfungen durchführen, um sicherstellen, dass der Server bereit für deinen lebenslänglichen Plan ist - sobald diese Überprüfung
beendet ist, bestätige bitte deine Anfrage. Sollte eine Warnung oder ein Fehler angezeigt werden, schaue bitte in der Tabelle
unten nach, wie du mit dem Fehler umgehen kannst.

<details>
<summary>Es wird mir eine Warnung oder ein Fehler angezeigt, wenn ich meinen lebenslänglichen Plan übertragen / anwenden will</summary>
<table>
<tr><td>Fehler</td><td>Ursache</td><td>Lösung</td></tr>
<tr><td>Dieser Server verwendet bereits einen lebenslänglichen Plan.</td><td>Der Server, auf welchen du deinen Plan anwenden willst, verwendet bereits diesen oder einen anderen, lebenslänglichen Plan.</td><td><ul><li>Entferne den lebenslänglichen Plan von diesem Server.</li><li><a href="https://scnx.app/de/help">Kontaktiere unser Team</a> für Hilfe.</li></ul></td></tr>
<tr><td>Dieser Server hat ein aktives Abo.</td><td>Der Server, auf welchen du deinen Plan anwenden willst, verwendet ein aktives Abo, um einen Plan zu bezahlen. Lebenslängliche Pläne können nicht auf Server angewendet werden, die ein aktives Abo haben.</td><td>
<ul><li>Kündige das Abo und warte, bis es abgelaufen ist.</li><li><a href="https://scnx.app/de/help">Kontaktiere unser Team</a>, um es sofort zu entfernen.</li></ul></td></tr>
<tr><td>Der Server hat aktuell [einen Plan]. Beachte, dass die alte Zahlungsperiode nicht zurückgesetzt werden kann.</td><td>Dies ist nur eine Warnung, welche auftritt, wenn der Server bereits einen Plan hat. Das Fortfahren wird diesen Plan überschreiben - im Klartext heißt das, dass wir dir eventuelle Laufzeit nicht mehr zurückerstatten können, nachdem du den lebenslänglichen Plan angewendet hast.</td><td>Du kannst unter der Meldung trotzdem fortfahren, indem du dem Plan-Verlust zustimmst, oder warten, bis der aktuelle Plan abgelaufen ist.</td></tr>
<tr><td>Der Server hat aktuell [einen Plan]. Du kannst nicht fortfahren, da du nicht der Besitzer bist.</td><td>Wie im vorherigen Punkt beschrieben, überschreibt das Anwenden des lebenslänglichen Plans die Zahlungsperiode. Um eventuelle Missverständnisse zu vermeiden, kann nur der Serverowner diese zurücksetzen.</td><td><ul><li>Kontaktiere den Server-Besitzer, dass du einen lebenslänglichen Plan anwenden willst und das dieser den Plan des Servers daher nicht verlängern sollen. Warte, bis der aktuelle Server-Plan abgelaufen ist.</li><li><a href="https://scnx.app/de/help">Kontaktiere unser Team</a> für Unterstützung.</li></ul></td></tr>
<tr><td>Dieser lebenslängliche Plan ist im Cooldown.</td><td>Der Server jedes lebenslänglichen Plans kann nur alle sieben Tage geändert werden. Dieser lebenslängliche Plan wurde in den letzten sieben Tagen übertragen.</td><td>Warte, bis die Cooldown-Periode abgelaufen ist.</td></tr>
</table>
</details>

## Werbegestützer Starter-Plan {#starter-plan}

Server ohne bezahlten Plan, müssen regelmäßig sogenannte "Checkin-Video-Werbungen" anschauen, da ansonsten ihr
eigener Bot angehalten wird, nachdem ihr kostenfreier Plan abgelaufen ist, bis sie diesen durch Anschauen einer weiteren
Werbung wieder verlängern. Diese Werbungen sind nur 15-60 Sekunden lang und der Werbetreibende der angeschauten Werbung
übernimmt die Hosting-Kosten deines Bots. Diese "Check-In"s müssen alle 14 Tage stattfinden.
Du kannst diese Zeit aber auch auf bis zu 28 Tage erhöhen, indem du gleich zwei Checkin-Werbungen hintereinander
anschaust. Du kannst diese Checkin-Werbungen auf der
[Zahlungsseite](https://scnx.app/de/glink?page=pricing) deines Servers anschauen.

Bitte beachte, dass es keine Drittanbieterwerbung in deinem eigenen oder Modmail-Bot gibt (und geben wird). Die Bots an
sich sind frei von Werbung, lediglich im Dashboard muss eine Werbung alle 14 Tage angeschaut werden, damit der Bot
online
bleibt.

Du kannst bis zu zwei Werbungen gleichzeitig anschauen, was 28 Tagen an Hosting-Zeit entspricht. Du kannst nicht mehr
als
28 Tage Host-Zeit gleichzeitig haben. Du kannst auch deine [Trusted Admins](./trusted-admins) bitten, Werbung für deinen
Server anzuschauen.

Solltest du mal vergessen, deine Hosting-Zeit zu verlängern, werden deine Bots heruntergefahren und du wirst sie nicht
erneut starten können, bis du die Hosting-Zeit verlängert hast. Dabei werden keine Daten gelöscht. Du kannst auf
der [Zahlungsseite](https://scnx.app/de/glink?page=pricing) deines Servers unter "Kostenfreien Plan verwalten" -> "
Benachrichtigungen verwalten" auch eine Benachrichtigungen 24 Stunden vor dem Ablauf deiner Hosting-Zeit einrichten, um
das in Zukunft zu vermeiden.

Wenn du auf SCNX werben willst, schau dir doch mal unsere [auf SCNX werben](./../account-and-billing/ads) Dokumentation
an.

## Häufig gestellte Fragen {#faq}

<details>
<summary>Ich habe eine Frage über Zahlungen per Dauerüberweisung</summary>
    Alle Infos findest du in unserer <a href="../account-and-billing/faq#reoccurring-transfer">Anleitung zu diesem Thema</a>.
</details>
<details>
<summary>Ich kann mein Abo nicht zum PRO-Server-Plan upgraden, mir wird angezeigt, dass mein Abo nicht aktiv wäre</summary>
<ul>
<li>Bitte stelle sicher, dass du dein Abo nicht gekündigt hast</li>
<li>Bitte stelle sicher, dass dein Abo nicht in der Zukunft startet (das passiert, wenn du von einem einmaligen Upgrade zu einem Abo wechselst) - in diesem Fall muss unser Team das Upgrade manuell durchführen.</li>
<li><a href="https://scnx.app/de/help">Kontaktiere unser Team</a>, damit wir uns das anschauen können.</li></ul>
</details>
<details>
<summary>Ist eine kostenfreie Testphase verfügbar?</summary>
Ja, du kannst eine kostenfreie Testphase im Dashboard starten, wenn dein Server folgende Bedingungen erfüllst:
<ul>
    <li>Dein Server hat noch in keiner kostenfreien Testphase zuvor teilgenommen.</li>
    <li>Dein Server wurde noch nie geupgradet.</li>
    <li>Dein Server wurde noch nie zuvor von SCNX gelöscht.</li>
</ul>
Du musst keine Zahlungsmethode angeben, um eine kostenfreie Testphase zu starten - du musst nur einen Knopf drücken.
Um zu schauen, ob eine kostenfreie Testphase für dich verfügbar ist, öffne die <a href="https://scnx.app/de/glink?page=pricing">Zahlungsseite</a> deines Servers - wenn dein Server für eine Testphase berechtigt ist, wird hier ein Banner angezeigt.
</details>
<details>
<summary>Kann ich von einem einmaligen Upgrade zu einem Abo wechseln?</summary>
Ja, öffne einfach die <a href="https://scnx.app/de/glink?page=pricing?showUpgradeModal=1">Zahlungsseite</a> deines Servers und öffne den Upgrade-Dialog durch Klicken auf "Verlängern". Gib dort einfach als Zahlungsintervall das Intervall an, das du für dein Abo verwenden willst - deine übrige Laufzeit wird automatisch an dein Abo angerechnet.
</details>
<details>
<summary>Welche Zahlungsmethoden sind verfügbar?</summary>
<table>
    <tr>
    <td>Währung</td>
    <td>Zahlungsmethoden für einmalige Käufe (inklusive lebenslängliche Pläne)</td>
    <td>Zahlungsmethoden für Abonnements</td>
</tr>
<tr>
    <td>Euro</td>
    <td>Kreditkarte, PayPal, SEPA-Bank-Überweisung, paysafecard, Sofort, <a href="./../account-and-billing/faq#direct-debit">SEPA-Lastschrift</a>, EPS, Giropay, iDEAL, Przelewy24, Bancontact, WeChat Pay, Alipay</td>
    <td>Kreditkarte, PayPal, <a href="./../account-and-billing/faq#direct-debit">SEPA-Lastschrift</a>, <a href="./../account-and-billing/faq#reoccurring-transfer">Dauerüberweißung</a></td>
</tr>
<tr>
    <td>US-Dollar</td>
    <td>Kreditkarte, PayPal</td>
    <td>Kreditkarte, PayPal</td>
</tr>
<tr>
    <td>Schweizer Franken</td>
    <td>Kreditkarte, PayPal</td>
    <td>Kreditkarte, PayPal</td>
</tr>
<tr>
    <td>Britisches Pfund</td>
    <td>Kreditkarte, PayPal</td>
    <td>Kreditkarte, PayPal</td>
</tr>
</table>
</details>

<details>
<summary>Ich habe bereits ein Abo oder einen Plan und möchte zu einem lebenslänglichen Plan wechseln. Kann ich restliche Laufzeit anrechnen lassen - geht das?</summary>
Wenn dein Plan oder Abo mehr als zwei Monate Laufzeit übrig hat, können wir das entweder an deinen Lebenslänglichen-Plan-Kauf anrechnen oder dir den anteilsmässigen Preis zurückerstatten. Bitte <a href="https://scnx.app/help">kontaktiere unser Team</a>.</details>
<details>
<summary>Kann ich die Laufzeit & den Plan meines Servers auf einen anderen Server übertragen?</summary>
Unser Team kann die Laufzeit und damit verbunde Daten (wie den Plan und eventuelle Abos) auf einen anderen Server übertragen, wenn <b>eine</b> der folgenden Bedingungen erfüllt wird:
<ul>
<li>Dein Plan wird mit einem aktiven Abo bezahlt</li><li>Die restliche Laufzeit beträgt mehr als zwei Monate</li></ul>
<b>Du kannst eine Übertragung maximal alle 6 Monate beantragen</b>. <br/>
Um eine solche Übertragung zu beantragen, <a href="https://scnx.app/de/help">kontaktiere unser Team</a>. Bitte beachte, dass wir deine Anfrage ablehnen können, wenn wir glauben, dass du diese Regelung missbrauchst. Es macht übrigens auch Sinn, unser Team zu kontaktieren, solltest du diese Bedingungen nicht erfüllen, denn unser Team kann eine einmalige Ausnahme auf einer Fall-zu-Fall-Basis vornehmen.

Wenn du planst, eine <a href="./faq#transfer">Übertragung aller Daten deines Servers</a> zu beantragen (das enthält alle
Daten deines Servers, inklusive Bot-Konfiguration), beantrage bitte keine Plan-Übertragung, denn das macht eine gesamte
Datenübertragung unmöglich. Bitte beachte außerdem, dass im Falle einer Übertragung die Laufzeiten der beiden Server
nicht addiert werden, sondern die Laufzeit des alten Servers die des neuen Servers überschreibt.
</details>