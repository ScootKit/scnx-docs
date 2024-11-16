# Migrations Guide (Q4, 2024)

Hi, vielen Dank, dass du SCNX benutzt. Wir freuen uns, dir mitteilen zu dürfen, dass wir einige Änderungen vornehmen, um unseren Service zu verbessern. In diesem Dokument erklären wir,
was du tun musst, um SCNX weiterzunutzen und was sich geändert hat. Außerdem beantworten wir häufig gestellte Fragen zur Migration.

## Übersicht {#overview}

### Was ändert sich {#changes}

Die folgenden Änderungen werden beeinflussen, wie du SCNX nutzt:

* [Der rechtliche Betreiber von SCNX hat sich geändert](#legal-entity)
* [Es wird ein neues Preismodell geben](#new-pricing)
* Einige weitere [kleinere Änderungen](#other-changes)
* Und unsere [Pläne für die Zukunft](#future)

### Was musst du jetzt tun

Um Probleme mit deinem Account zu verhindern,

1. Besuche [scnx.app/user/tos-update](https://scnx.app/user/tos-update) und stimme der neuen [juristischen Person](#legal-entity)
   zu, die dein Vertragspartner in der Nutzung von SCNX sein wird.
2. Wenn du aktuell laufende Abonnements hast, die du zum aktuellen Preis beibehalten willst,
   [migriere deine Abonnements](#migrate-subscriptions) indem du
   [scnx.app/user/tos-update](https://scnx.app/user/tos-update) aufrufst, bevor der Migrationszeitraum endet.

## Neuer rechtlicher Betreiber & neue Nutzungsbedingungen {#legal-entity}

Vor dem Migrationszeitpunkt wurde SCNX von einer Einzelperson betrieben. Nach der Migration wird SCNX von einem eingetragenen Unternehmen betrieben.
Das erlaubt es uns einfacher zu wachsen, unsere Angestellten besser zu schützen und unseren Kunden einen besseren Dienst anzubieten. Du kannst die 
Unternehmensdetails der neuen juristischen Person [hier](https://scootkit.com/imprint) finden.

Wir können deinen Account aufgrund von rechtlichen Einschränkungen nicht automatisch zur neuen juristischen Person übertragen. Deshalb wirst du bei Anmeldung
bei SCNX mit einem bereits existierenden Account einen "Stimme unseren neuen Nutzungsbedingungen zu"-Banner auf deiner Seite sehen.
Bitte klicke auf den Button im Banner oder auf [diesen Link](https://scnx.app/user/tos-update), um zuerst der Datenübertragung zum neuen
Betreiber und dann unseren Nutzungsbedingungen zuzustimmen. Sobald das erledigt ist, wird dir angeboten,
[deine Abonnements zu migrieren](#migrate-subscriptions), wenn du welche hattest.

Die neue juristische Person ist vollständig im Besitz des Gründers von SCNX (Simon, @scderox) und hat keine außenstehenden Investoren - so können wir uns
weiter darauf konzentrieren, den bestmöglichen Service anzubieten, ohne den Druck, profitabel zu sein. 

<details>
<summary>Was passiert, wenn ich nicht innerhalb des Migrationszeitraums zustimme?</summary>

SCNX Accounts, die den neuen Bedingungen nicht zustimmen werden zuerst deaktiviert. Nach einer Schonfrist werden wir,
aufgrund von europäischen Datenschutzgesetzen, beginnen, deaktivierte Accounts zu löschen.
</details>

<details>
<summary>Ich will den neuen Bedingungen und dem neuen Betreiber nicht zustimmen</summary>

Du kannst uns darüber per E-Mail an [legal@scootkit.com](mailto:legal@scootkit.com) oder einem Brief an unsere
[Adresse](https://scootkit.com/imprint) informieren. Wenn du das tust, werden wir deinen Vertrag beenden und deinen Account löschen.
</details>

## Neues Preismodell {#new-pricing}

Um sicherzustellen, dass wir SCNX weiter anbieten können, haben wir die Preise unseres Dienstes angepasst, um mit der aktuellen Marktsituation
mitzuhalten. Dies war notwendig, da wir ab sofort Mehrwertsteuer auf unsere Preise erheben müssen und um höhere Hosting- und Infrastrukturkosten zu decken.

Wir stellen euch zwei neue Pläne vor: Unlimited und Professional. Du kannst alle Details zu den Plänen
[auf unserer Docs-Seite zur Preisgestaltung](./guilds/plans) finden. Alte Pläne werden als "Ausgemustert" angesehen und können nicht mehr gekauft werden.

Wenn du mehr über die Begründung hinter den neuen Preisen und darüber wie wir uns dazu entschieden haben erfahren willst,
[sieh dir diese Aufnahme](https://www.youtube.com/watch?v=di_TeQt_rQ8) unseres "Membership-Meetings" an - [ScootKit Mitglieder](https://membership.scootkit.com) 
erhalten regelmäßige Behind-The-Scenes Updates, erhalten Zugang zu neuen Funktionen vor ihrer Veröffentlichung und können an Diskussionen
über neue Funktionen und Änderungen (wie diese Preisänderung) teilnehmen.

Zusätzlich haben wir Server-Bundles hinzugefügt: Du kannst jetzt zusätzliche Server für einen niedrigeren Preis hinzufügen - das heißt,
wenn du mehrere Server bei SCNX hast, werden Premium-Pläne deutlich günstiger werden. [Erfahre mehr](./guilds/plans#additional-servers) darüber.

### Auswirkungen auf existierende Server {#effect-on-servers}

Die folgende Tabelle erklärt, welche Art wie betroffen ist:

| Upgrade-Art                                      | Änderungen                                                                                                                                                                                                                                                                                                                              | 
|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Starter-Plan                                     | Der Starter-Plan ist dauerhaft kostenlos und nicht von den Änderungen betroffen.                                                                                                                                                                                                                                                        |
| Einmalige Upgrades                               | Wenn du für deinen Server ein einmaliges Upgrade gekauft hast, wird dieses nicht entfernt, bis es abläuft. Solange kannst du den Plan wie gewohnt weiterverwenden. Dein alter Plan kann nicht verlängert werden.                                                                                                                        |
| Abonnements                                      | Wenn du deine Abonnements nicht im Migrationszeitraum [migrierst](#migrate-subscription), werden sie gekündigt und dein Plan zum Ende des Abrechnungszeitraums heruntergestuft. [Migriere dein Abonnement](#migrate-subscriptions), um deinen alten Preis zu behalten, bis du kündigst.                                                  |
| [Lebenslängliche Pläne](./guilds/plans#lifetime) | Lebenslängliche Pläne werden weiterhin funktionieren und weiterhin alle Features deines Plans freischalten. Du kannst deinen Plan jederzeit übertragen. Wenn du zu einem neuen Plan upgraden willst, musst du unser Team kontaktieren, da der Preis des Upgrades abhängig von deiner bisherigen Nutzung des lebenslänglichen Plans ist. |

### Abonnements übertragen {#migrate-subscriptions}

:::success Wir schätzen unsere Abonnenten!
Wir denken, es ist uncool einfach die Preise für Abonnements zu ändern. Deshalb bieten wir für bestehende Abonnenten ein zeitlich begrenztes Angebot an:
Migriere dein Abonnement bevor es abläuft um deinen aktuellen Preis zu behalten - bis du kündigst.
:::

Bitte beachte die folgenden Einschränkungen:

* Nur für Kunden in der EU verfügbar. Nur für aktive Abonnements, die in Euro bezahlt werden.
* Wenn du mehrere Abonnements hattest, werden sie zu einem kombiniert. Der vollständige Preis für alle
  vorherigen Abonnements wird ein Mal pro Abrechnungszeitraum abgebucht. Das Abonnement kann nur zusammen gekündigt werden. Es könnte
  wirtschaftlicher sein, zu unserem neuen Preismodell zu wechseln, welches
  [Server-Bundles](./guilds/plans) erlaubt.
* Die Migration muss abgeschlossen werden, bevor dein Abrechnungszeitraum endet oder der Migrationszeitraum abläuft.
* Deine Zahlungsmethode muss erneut hinzugefügt werden. Wenn du per Dauerüberweisung zahlst, stelle sicher, dass du auch
  unsere Bankverbindung bei deiner Bank aktualisierst.
* Nicht rechtzeitige Zahlung deines neuen Abonnements, abgelehnte Zahlungen oder andere Probleme mit deiner Zahlungsmethode führen zur Kündigung deines Abonnements. Damit verlierst du Zugriff auf das Angebot.
* Du kannst jederzeit kündigen. In diesem Fall kann dein Abonnement nicht mehr verlängert werden und nach deinem aktuellen Abrechnungszeitraum endet dein Zugriff auf dieses Angebot hiermit ebenfalls.

Um dein Abonnement zu migrieren, besuche [scnx.app/user/tos-update](https://scnx.app/user/tos-update) und folge den Anweisungen.

## Andere Änderungen {#other-changes}

Die folgenden Änderungen wurden ebenfalls durchgeführt:

* **Kunden außerhalb der EU**: Kunden außerhalb der EU können nun unsere Dienste gemäß unseren neuen
  [Nutzungsbedingungen](https://scootk.it/scnx-tos) ebenfalls nutzen. Bitte beachte, dass ScootKit aktuell keine Zahlungen
  von Kunden außerhalb der EU annimmt. Wir arbeiten mit einem Partner, um in Zukunft weltweit Zahlungen akzeptieren zu können und werden hierzu bald weitere Informationen veröffentlichen.
* **Empfehlungen**: Unser Empfehlungsprogramm wird bis auf Weiteres pausiert. Wir überarbeiten unser Affiliate System und werden bald weitere Informationen dazu veröffentlichen.
* **Mehrwertsteuer**: ScootKit UG (haftungsbeschränkt) wird ab sofort nach deutschen und europäischen Vorgaben Mehrwertsteuer berechnen.
  Die Mehrwertsteuer wird auf deiner Rechnung aufgeführt.
* **Credits**: SCNX Credits wurden in Accountguthaben umgewandelt, das beim Kauf jeglicher Produkte auf unserer Plattform,
* ausgenommen wiederkehrende Abrechnungen, automatisch verwendet wird. Accountguthaben kann nicht aufgeladen werden.
* **Zahlungsmethoden**: Für EU Kunden wurde Revolut Pay als Zahlungsmethode hinzugefügt. Zahlung via paysafecard sind aktuell nicht verfügbar.
* **SCN Mitgliedschaften**: Wir überarbeiten aktuell unser Mitgliedschaftsprogramm. Es wird "ScootKit Mitgliedschaft" heißen und
  in Deutsch und Englisch verfügbar sein. Wir werden bald weitere Informationen dazu veröffentlichen. Die Preise werden sich
  voraussichtlich nicht signifikant ändern.
* **KI Credits**: Wir haben die Pakete, in welchen du KI Credits kaufen kannst verbessert. Sie wurden optimiert und spiegeln die
  Bedürfnisse unserer Kunden besser wider.
* **Marketplace**: Auszahlungen können jetzt nur vorgenommen werden, indem eine gültige E-Rechnung mit ausgewiesener Mehrwertsteuer an ScootKit gestellt wird. Wir arbeiten an einer besseren Lösung.
* Wir haben außerdem einige Fehler behoben und viele andere kleine Funktionen hinzugefügt, um die Kundenerfahrung zu verbessern.

## Pläne für die Zukunft {#plans}

Nach diesen Änderungen können wir Stabilität schaffen: Keine geplanten Preiserhöhungen in den nächsten Jahren -
stattdessen arbeiten wir an unzähligen neuen Ideen, Projekten, Funktionen und Verbesserungen. Darunter ein komplett neugestaltetes
Ticket-System, ein verbessertes Modmail-Verwaltungssystem für deinen Kundenservice - alles enthalten in den neuen Plänen.

Bei jeglichen Fragen [kontaktiere gerne unser Team](https://scnx.app/help), wir freuen uns, dir zu helfen.
