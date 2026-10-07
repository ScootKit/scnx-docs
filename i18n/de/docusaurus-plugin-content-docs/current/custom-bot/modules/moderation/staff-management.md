# Staff-Management-System

Ein leistungsstarkes, hochgradig anpassbares Staff-Management-System, mit dem du Aktivität nachverfolgst, Teammitglieder moderierst und detaillierte Team-Aufzeichnungen nahtlos pflegst.

<ModuleOverview moduleName="staff-management-system" />

## Funktionen {#features}

- **Verstöße & Suspendierungen**: Vergib Verwarnungen, Strikes, Degradierungen und Kündigungen, markiere Teammitglieder als „Unter Untersuchung" oder erstelle eigene Verstoßarten. Suspendierungen entziehen einem Teammitglied für die im Befehl angegebene Dauer vorübergehend seine Team-Rollen.
- **Beförderungen**: Befördere Teammitglieder mit optionaler automatischer Rollenvergabe und anpassbaren Ankündigungen, sowohl im Kanal als auch per Direktnachricht (falls aktiviert).
- **Team-Bewertungen**: Lass Nutzer Teammitglieder mit einer Bewertung von 1 bis 5 Sternen und einem Feedback bewerten, mit einer anpassbaren Bewertungsnachricht. Du kannst auch zulassen, dass Mitglieder andere (normale) Mitglieder bewerten und dass Teammitglieder sich selbst bewerten.
- **Schichtverwaltung**: Lass Teammitglieder in den Dienst und aus dem Dienst gehen und Pausen nehmen, während ihre Schichtzeit erfasst wird, die in eine anpassbare Bestenliste (wöchentlich/monatlich) einfließt. Admins können Schichten verwalten, indem sie manuell Zeit hinzufügen, Mitglieder zwangsweise aus dem Dienst nehmen oder Schichten komplett verwerfen. Lege eigene Schichtarten fest, richte Quoten für bestimmte Rollen ein, konfiguriere Mindestschichtdauern und protokolliere alle Schichtänderungen.
- **Abwesenheit & Reduzierte Aktivität**: Teammitglieder können mit einem Genehmigungsablauf, optionaler Rollenvergabe und konfigurierbaren Höchstdauern den Status Abwesenheit (Leave of Absence, LoA) oder Reduzierte Aktivität (Reduced Activity, RA) beantragen. Optional kannst du die Statusprotokollierung aktivieren, die jede Statusänderung jedes Teammitglieds protokolliert.
- **Teamprofile**: Lass Teammitglieder (oder auch normale Mitglieder) in einem anpassbaren Embed einen eigenen Spitznamen und eine eigene Vorstellung haben, die Nutzer per Befehl ansehen können. Aufsichtspersonen/Management können das Profil eines Teammitglieds bei Bedarf auch zurücksetzen.
- **Aktivitäts-Checks**: Erlaube Aufsichtspersonen und höher, Aktivitäts-Checks zu starten, auf die Teammitglieder innerhalb einer eigenen Dauer reagieren müssen. Du kannst Ausnahmen festlegen und Aktivitäts-Checks zusammen mit Automatisierungseinstellungen automatisch starten lassen. Die Ergebnisse werden protokolliert, optional mit einem Rollen-Ping, und zeigen eine Übersicht, wer reagiert hat, wer nicht und wer ausgenommen war.
- **Rollenbasierte Zugriffskontrolle**: Drei Zugriffsstufen: Team-Rollen (Basisbefehle), Aufsichtsrollen (Verwaltungsfunktionen) und Management-Rollen (voller Zugriff einschließlich Datenlöschung).

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=staff-management-system) auf deinem Server.
2. Öffne die [Allgemeine Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration) und lege die **Team-Rollen**, **Aufsichtsrollen** und **Management-Rollen** fest, um zu steuern, wer auf welche Funktionen zugreifen darf.
3. Wähle einen Kanal für den **Allgemeinen Protokoll-Kanal**, den Standardkanal für das Protokollieren von Ereignissen in diesem Modul.
4. Konfiguriere die einzelnen Funktionen nach Bedarf:

- [Sanktionen und Suspendierungen](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cinfractions) - Verstoßarten, Suspendierungseinstellungen und DM-Benachrichtigungen.
- [Beförderungen](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cpromotions) - Beförderungsankündigungen und Rollenvergabe.
- [Mitarbeiterbewertungen](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Creviews) - Einstellungen des Bewertungssystems und Anpassung der Nachricht.
- [Schichtverwaltung](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cshifts) - Dienstarten, Quoten und Bestenlisten-Einstellungen.
- [LoA & RA Status](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cstatus) - LoA- und RA-Einstellungen.
- [Mitarbeiterprofile](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cprofiles) - Anpassung und Einstellungen der Teamprofile.
- [Aktivitäts-Checks](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cactivity-checks) - Einstellungen der Aktivitäts-Checks.

## Verwendung {#usage}

### Verstöße {#infractions}

[Aufsichtspersonen](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration) können Teammitgliedern mit dem Befehl `/staff-management infraction issue` Verstöße erteilen. Verstoßarten lassen sich in der [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cinfractions) festlegen. Standardmäßig gibt es die Verstoßarten „Warning, Strike, Demotion, Termination und Under Investigation".
Teammitglieder können sich **nicht selbst sanktionieren**.
Du kannst außerdem:

- Verstöße eines Nutzers mit dem Befehl `/staff-management infraction void` aufheben. Der Verstoß bleibt dabei im Verlauf erhalten, aber die Strafe ist nicht mehr „aktiv". Das geht entweder über den Nachrichtenlink des Verstoßes oder die Fall-ID. (Nur Aufsichtspersonen und höher können Verstöße aufheben.)
- Den Verstoßverlauf eines Nutzers mit dem Befehl `/staff-management infraction history` ansehen. Er zeigt alle bisherigen Verstöße des Nutzers.

Verstöße (einschließlich Suspendierungen) können optional auch per Direktnachricht an das sanktionierte Teammitglied gesendet werden, indem du die Option „DM-Benutzer bei Verstoß?" aktivierst. Auch diese Nachrichten sind konfigurierbar.

### Beförderungen {#promotions}

[Aufsichtspersonen](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration) können Teammitglieder mit dem Befehl `/staff-management promotion promote` in einen höheren Rang befördern. Nutzer können außerdem mit dem Befehl `/staff-management promotion history` den Beförderungsverlauf eines Nutzers ansehen. Er zeigt den vollständigen Verlauf der Beförderungen dieses Nutzers.

Die Beförderungsnachricht ist anpassbar. Durch Aktivieren der Option „Direktnachricht an beförderten Benutzer?" kann zusätzlich eine Nachricht an die Direktnachrichten des beförderten Nutzers gesendet werden. Auch diese Nachricht ist anpassbar.

Optional kann der Bot bei einer Beförderung auch automatisch die neue Rolle hinzufügen.
**⚠️ WARNUNG: Diese Option ist gefährlich und kann Server-Raids auslösen oder bei Raids noch verschlimmern, indem unautorisierte Nutzer Rollen mit höheren Berechtigungen und gefährlichen Rechten erhalten. Das Hinzufügen von Rollen kann nicht automatisch rückgängig gemacht werden. Es wird empfohlen, diese Einstellung deaktiviert zu lassen!**

### Team-Bewertungen {#reviews}

Wenn du das [Bewertungssystem](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Creviews) aktivierst, können Nutzer (Team-)Mitglieder mit einer Sterne-Bewertung ⭐ und Feedback bewerten, alles in einer konfigurierbaren Nachricht und einem konfigurierbaren Kanal.

Zusätzlich gibt es 2 Optionen, um das Bewertungserlebnis an deine Bedürfnisse anzupassen:

- Selbstbewertung erlauben?: Mit dieser Option dürfen Teammitglieder sich selbst bewerten. (Das ist für ein faires und ehrliches Bewertungssystem nicht empfohlen, aber nützlich, um Bewertungen an dir selbst zu testen.)
- Nur Benutzern erlauben, Mitarbeiter zu bewerten: Mit dieser Option dürfen Mitglieder nur [Teammitglieder](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration) bewerten.

### Schichten {#shifts}

Teammitglieder können mit dem Befehl `/duty manage` in den Dienst oder aus dem Dienst gehen und eine Pause nehmen. Dabei erscheint ein Panel mit einigen Informationen zu ihrer Schichtzeit und 3 Buttons zur Verwaltung ihres Dienstes. Der Titel des Embeds ändert sich dynamisch je nach Dienststatus. Teammitglieder können pro Schicht mehrere Pausen nehmen. Diese Pausenzeiten werden nicht zur gesamten Dienstzeit gezählt. Nach dem Ende ihrer Schicht erhält das Teammitglied außerdem einen End-of-Shift-Bericht (EOS) per Direktnachricht.

Schichtarten sind vollständig anpassbar, das heißt, du kannst mehrere verschiedene Schichtarten mit eigenem Namen anlegen. Du kannst auch eine minimale Schichtdauer festlegen. Dann müssen Teammitglieder mindestens x Minuten Schichtzeit erreichen, sonst zählt die Zeit, die sie im Dienst waren, nicht zu ihrer gesamten Dienstzeit und ihrer Quote (falls aktiviert). Der Standardwert ist 0, das heißt, die gesamte Schichtzeit zählt.

Außerdem kann eine Dienst-Bestenliste aktiviert werden, in der Teammitglieder sehen können, wer die meiste Schichtzeit hat, absteigend sortiert. Auch der Zeitraum der Bestenliste ist anpassbar: wöchentlich, monatlich oder gesamt.

Zusätzlich kann ein Quotensystem aktiviert werden, das von Teammitgliedern verlangt, jede Woche bzw. jeden Monat eine bestimmte Anzahl an Stunden Dienstzeit zu erreichen, um die Quote zu erfüllen. Diese können je Rolle unterschiedlich sein. Als Quote zählt die höchste Rolle des Teammitglieds, die dort aufgeführt ist. Die Quote kann auch 0 Stunden betragen, was bedeutet, dass diese Rolle keine Quote hat.
Der Quotenstatus wird im Befehl `/duty time` angezeigt.

Wenn „Schichtänderungen protokollieren" in der Konfiguration der Schichtverwaltung aktiviert ist, sendet der Bot jedes Mal, wenn ein Teammitglied seine Schicht ändert, ein Embed mit Informationen. Das gilt für Aktionen wie In-den-Dienst-Gehen, Pause, Aus-dem-Dienst-Gehen und Admin-Aktionen. Diese Änderungen können in einen eigenen Kanal protokolliert werden. Ist keiner festgelegt, wird der Standard-Protokollkanal verwendet.

Teammitglieder können mit `/duty active` sehen, wer gerade im Dienst ist, mit `/duty leaderboard` die Dienstzeit-Bestenliste ansehen und mit `/duty time` ihre gesamte Dienstzeit einsehen.

### Abwesenheit & Reduzierte Aktivität {#status}

Du kannst festlegen, ob Teammitglieder [eine Abwesenheit (Leave of Absence, LoA) und/oder eine Reduzierte Aktivität (Reduced Activity, RA) beantragen](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cstatus) können. Eine LoA ist für Teammitglieder gedacht, die länger weg sind und kaum bis keine Pflichten im Team haben, während eine RA für Teammitglieder gedacht ist, die weiterhin aktiv im Team mitarbeiten möchten, aber weniger als normale Teammitglieder.

**Abwesenheit (LoA)**
Das LoA-System lässt sich einzeln aktivieren, indem du die Option „LoA-System aktivieren" einschaltest.
Nach dem Aktivieren kannst du die LoA-Rolle auswählen, die zu Beginn ihrer LoA vergeben wird, die maximale Anzahl an Tagen festlegen, für die eine LoA beantragt werden kann, und bestimmen, ob ein LoA-Antrag genehmigt werden muss oder nicht.

Das LoA-System ist für Teammitglieder gedacht, die vorübergehend abwesend sind und von den erwarteten Team-Aufgaben befreit sein möchten.

**Reduzierte Aktivität (RA)**
Das RA-System lässt sich einzeln aktivieren, indem du die Option „RA-System aktivieren" einschaltest.
Nach dem Aktivieren kannst du die RA-Rolle auswählen, die zu Beginn ihrer RA vergeben wird, die maximale Anzahl an Tagen festlegen, für die eine RA beantragt werden kann, und bestimmen, ob ein RA-Antrag genehmigt werden muss oder nicht.

Zusätzlich kannst du:

- Den Status-Anfrage-Kanal festlegen, in den die Statusanträge gesendet werden (wenn eine Genehmigung erforderlich ist)
- Wählen, ob du Statusänderungen protokollieren möchtest (Beginn oder Ende einer LoA/RA, Verlängerungen oder vorzeitige Beendigungen und andere administrative Aktionen)
- Den Kanal für Statusänderungsprotokolle auswählen

Das RA-System ist für Teammitglieder gedacht, die eine Auszeit nehmen möchten, aber weiterhin eingeschränkt mitarbeiten können. Das heißt, sie können weiterhin einige Team-Aufgaben übernehmen, aber es wird (deutlich) weniger als sonst von ihnen erwartet.

### Teamprofile {#profiles}

[Teamprofile](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system|configs/profiles) erlauben (Team-)Mitgliedern, ein eigenes Profil mit eigenem Spitznamen und eigener Vorstellung zu haben.

Du kannst außerdem festlegen, ob nur Teammitglieder und höher ein eigenes Teamprofil haben dürfen oder auch alle normalen Mitglieder, und wer das Profil eines (Team-)Mitglieds manuell zurücksetzen darf (nur Aufsichtspersonen und höher oder nur Management).

Auch das Profil-Embed ist anpassbar. Gestalte es ganz nach deinen Wünschen!

### Aktivitäts-Checks {#activity-checks}

[Aktivitäts-Checks](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cactivity-checks) können aktiviert werden. Damit können Aufsichtspersonen und höher regelmäßige Aktivitäts-Checks starten, die eine anpassbare Nachricht in den konfigurierten Kanal senden. Teammitglieder können dort auf einen Button klicken, um zu bestätigen, dass sie aktiv sind und die Nachricht gesehen haben.

Einstellungen, um das System an deine Bedürfnisse anzupassen:

- Rollen zur Überprüfung: Wähle die Rolle(n), die laut Bot auf den Button reagieren sollen. Lass das Feld leer, um die Standard-Team-Rolle aus der [Allgemeinen Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration) zu verwenden.
- Überprüfungsdauer: Die Dauer von Aktivitäts-Checks in _Stunden_. Der Höchstwert beträgt 168 Stunden (1 Woche), der Mindestwert 1 Stunde.
- Aktivitäts-Check-Embed & Beendetes Aktivitäts-Check-Embed: Gestalte die Aktivitäts-Check-Nachrichten nach deinen Wünschen! Die „beendete" Nachricht ersetzt die ursprüngliche Nachricht, sobald der Check beendet ist. (⚠️ Warnung: Wenn deine ursprüngliche Aktivitäts-Check-Nachricht Components V2 verwendet, muss auch die „beendete" Nachricht Components V2 verwenden, sonst wird sie nicht bearbeitet. Das liegt an Einschränkungen von Discord.)
- Standardkanal: Der Kanal, in den die Aktivitäts-Checks gesendet werden. Das lässt sich beim Verwenden des Befehls `/staff-management activity-check start` überschreiben.

Zusätzlich kannst du die Aktivitäts-Checks **automatisieren**. Du kannst ein Intervall festlegen (wöchentlich, zweiwöchentlich, monatlich oder per Cronjob), wie oft der Aktivitäts-Check gesendet werden soll, den Cronjob festlegen, wenn du „Cronjob" gewählt hast, den Wochentag auswählen, an dem der Aktivitäts-Check stattfinden soll, und die Woche des Monats, wenn du beim Intervall „Monatlich" gewählt hast.

Die Ergebnisse werden in den konfigurierten Ergebniskanal gesendet (leer lassen, um den Standard-Protokollkanal zu verwenden), mit der Option, beim Veröffentlichen der Ergebnisse eine eigene Rolle zu pingen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                                                                          | Beschreibung                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/duty active`                                                                                  | Zeigt pro Schichtart an, wer gerade im Dienst oder in der Pause ist.                                                                                                                                                      |
| `/duty manage [type:<Text>]`                                                                    | Antwortet mit einem Dienstverwaltungs-Panel, über das Teammitglieder in den Dienst gehen, den Dienst beenden oder eine Pause machen können.                                                                               |
| `/duty time [type:<Text>]`                                                                      | Zeigt deine eigenen kumulierten Dienstzeit-Statistiken und den Verlauf deiner vorherigen Schichten.                                                                                                                       |
| `/duty leaderboard [type:<Text>]`                                                               | Zeigt die Server-Bestenliste mit den Teammitgliedern, die die meiste erfasste Dienstzeit haben, sortiert nach Schichtart.                                                                                                 |
| `/duty admin user:<User>`                                                                       | Erlaubt Aufsichtspersonen und dem Management, die Schichtprotokolle eines Teammitglieds anzupassen, manuell Zeit hinzuzufügen, es zwangsweise aus dem Dienst zu nehmen oder Dienstzeit per Zeitdauer-Angabe zu entfernen. |
| `/staff-status loa request duration:<Text> reason:<Text>`                                       | Stelle einen formellen Antrag auf Abwesenheit (LoA) mit einer bestimmten Dauer und Begründung.                                                                                                                            |
| `/staff-status loa view [user:<User>]`                                                          | Zeigt die Dauer und Details deiner eigenen oder der aktiven Abwesenheit eines anderen Teammitglieds.                                                                                                                      |
| `/staff-status loa list filter:<Text>`                                                          | Listet gefilterte LoA-Einträge nach deiner Auswahl (`Active`, `Expired` oder `All`).                                                                                                                                      |
| `/staff-status loa admin user:<User>`                                                           | Administrativer Befehl, um die aktive LoA eines Teammitglieds zu verlängern oder manuell zu beenden oder seinen vollständigen Verlauf anzusehen.                                                                          |
| `/staff-status ra request duration:<Text> reason:<Text>`                                        | Stelle einen Antrag auf einen Zeitraum der Reduzierten Aktivität (RA) mit einer bestimmten Dauer und Begründung.                                                                                                          |
| `/staff-status ra view [user:<User>]`                                                           | Zeigt die Details deiner eigenen oder der aktiven Reduzierten Aktivität eines anderen Teammitglieds.                                                                                                                      |
| `/staff-status ra list filter:<Text>`                                                           | Listet gefilterte RA-Einträge nach deiner Auswahl (`Active`, `Expired` oder `All`).                                                                                                                                       |
| `/staff-status ra admin user:<User>`                                                            | Administrativer Befehl, um die aktive RA eines Teammitglieds zu verlängern oder manuell zu beenden oder seinen vollständigen Verlauf anzusehen.                                                                           |
| `/staff-management panel user:<User>`                                                           | Öffnet eine interaktive Dashboard-Übersicht eines Teammitglieds mit Details je Funktion und Optionen zur Datenlöschung.                                                                                                   |
| `/staff-management infraction issue user:<User> type:<Text> reason:<Text> [expiry:<Text>]`      | Erteilt einem Teammitglied einen Verstoß der gewählten Art.                                                                                                                                                               |
| `/staff-management infraction suspend user:<User> duration:<Text> reason:<Text>`                | Suspendiert ein Teammitglied vorübergehend und entzieht ihm automatisch für eine eigene Dauer seine Team-Rollen.                                                                                                          |
| `/staff-management infraction history user:<User>`                                              | Zeigt den Verstoßverlauf eines Nutzers.                                                                                                                                                                                   |
| `/staff-management infraction void reference:<Text>`                                            | Hebt einen Verstoß über seine Fall-ID oder seinen Nachrichtenlink auf und behält dabei den Verlauf.                                                                                                                       |
| `/staff-management promotion promote user:<User> rank:<Role> reason:<Text> [channel:<Channel>]` | Befördert ein Teammitglied. Mit der Option `channel` optional in einem anderen Kanal als dem Standardkanal.                                                                                                               |
| `/staff-management promotion history user:<User>`                                               | Zeigt den Beförderungsverlauf eines Nutzers.                                                                                                                                                                              |
| `/staff-management activity-check start [channel:<Channel>]`                                    | Startet manuell einen Aktivitäts-Check für die Teammitglieder.                                                                                                                                                            |
| `/staff-management activity-check view`                                                         | Zeigt den aktuellen Status des gerade aktiven Aktivitäts-Checks.                                                                                                                                                          |
| `/staff-management activity-check end`                                                          | Beendet einen Aktivitäts-Check manuell.                                                                                                                                                                                   |
| `/staff-management profile view [user:<User>]`                                                  | Zeigt das Profil eines (Team-)Mitglieds.                                                                                                                                                                                  |
| `/staff-management profile edit`                                                                | Erlaubt (Team-)Mitgliedern, ihr Profil zu bearbeiten.                                                                                                                                                                     |
| `/staff-management profile wipe user:<User>`                                                    | Erlaubt Aufsichtspersonen und höher bzw. dem Management, das Profil eines (Team-)Mitglieds zurückzusetzen.                                                                                                                |
| `/staff-management review submit user:<User> stars:<Integer> comment:<Text>`                    | Gib einem (Team-)Mitglied eine Bewertung (1 bis 5 Sterne) mit Feedback.                                                                                                                                                   |
| `/staff-management review history [user:<User>]`                                                | Zeigt den Bewertungsverlauf eines Nutzers.                                                                                                                                                                                |

Wir empfehlen, in deinen Servereinstellungen anzupassen, wer einen bestimmten Befehl sehen darf bzw. nicht. Das gilt für alle Befehle:

<ul>
    <li>`/staff-management`: Am besten nur für Teammitglieder sichtbar machen.</li>
    <li>`/duty`: Am besten nur für Teammitglieder sichtbar machen.</li>
    <li>`/staff-status`: Am besten nur für Teammitglieder sichtbar machen.</li>
</ul>

Folge [dieser Anleitung](/de/docs/custom-bot/slash-commands), um deine Servereinstellungen anzupassen.

### Kontextmenü-Aktionen {#context-menu-actions}

Die folgenden Aktionen sind auch verfügbar, indem du mit der rechten Maustaste auf einen Nutzer klickst (auf dem Handy lange drücken) und **Apps** wählst (siehe [Kontextmenü-Befehle einrichten](/de/docs/custom-bot/commands#context-menus)):

| Aktion               | Beschreibung                                                                                                                                                                                          |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Issue Infraction`   | Öffnet ein Formular, um dem Nutzer einen Verstoß zu erteilen (Art, Grund und optionales Ablaufdatum), wie `/staff-management infraction issue`. Nur Aufsichtspersonen und höher können sie verwenden. |
| `Promote User`       | Zeigt eine Rollenauswahl, um den Nutzer zu befördern, wie `/staff-management promotion promote`. Nur Aufsichtspersonen und höher können sie verwenden.                                                |
| `Submit Review`      | Öffnet ein Formular für Sterne und Kommentar, um den Nutzer zu bewerten, wie `/staff-management review submit`. Die Option „Nur Benutzern erlauben, Mitarbeiter zu bewerten" gilt auch hier.          |
| `View Staff Profile` | Zeigt das Profil des Nutzers, wie `/staff-management profile view`.                                                                                                                                   |

## Konfiguration {#configuration}

Dieses Modul besteht aus mehreren unabhängigen Konfigurationsdateien, mit denen du die Nachverfolgung anpassen kannst. Öffne und verwalte sie direkt in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?open-module=staff-management-system).

### Allgemeine Konfiguration {#configuration-configuration}

Lege Zugriffsstufen und Standard-Protokollkanäle in der [Allgemeinen Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system|configs/configuration) fest.

| Feld                        | Beschreibung                                                                                                                                           |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Team-Rollen                 | Rolle(n), die Basisfunktionen für Teammitglieder nutzen dürfen, z. B. ihre Schichten verwalten, eine LoA/RA beantragen, Bewertungen erhalten und mehr. |
| Aufsichtsrollen             | Rolle(n), die LoA/RA-Anträge prüfen, Teamprofile verwalten, Verstöße erteilen, Teammitglieder befördern und mehr dürfen.                               |
| Management-Rollen           | Administratoren mit vollem, uneingeschränktem Zugriff auf Modulprofile und Optionen zur Datenlöschung.                                                 |
| Allgemeiner Protokoll-Kanal | Der Standard-Protokollkanal für Funktionen, die Ereignisse protokollieren (z. B. der Status, falls aktiviert).                                         |

### Sanktionen und Suspendierungen {#configuration-infractions}

Konfiguriere Verstöße und Suspendierungen in der [Konfiguration der Sanktionen und Suspendierungen](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system|configs/infractions).

| Feld                                | Beschreibung                                                                                                                                                                                                                                                                                      |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Infractions-System aktivieren       | Aktiviert das Verstoßsystem mit eigenen Verstoßarten und mehr. **Hinweis: Da die Befehle dieser Funktion ausgeblendet werden, wenn sie deaktiviert ist, kann ein Neustart deines Bots nötig sein, damit die Befehle dieser Funktion angezeigt werden.**                                           |
| Verstoßarten                        | Eigene Verstoßarten mit eigenen Namen.                                                                                                                                                                                                                                                            |
| Suspendierungssystem aktivieren     | Legt fest, ob Suspendierungen sanktionierten Nutzern vorübergehend die Standardberechtigungen entziehen. **Hinweis: Da die Befehle dieser Funktion ausgeblendet werden, wenn sie deaktiviert ist, kann ein Neustart deines Bots nötig sein, damit die Befehle dieser Funktion angezeigt werden.** |
| Hierarchie-Basisrolle               | Schwellenwert als Basislinie. Bei einer Suspendierung entfernt der Bot alle Rollen, die auf dieser Position oder darüber liegen.                                                                                                                                                                  |
| Suspendierte Rolle (Optional)       | Eine optionale Rolle, die einem Teammitglied bei einer Suspendierung zugewiesen wird.                                                                                                                                                                                                             |
| Suspendierungsankündigungsnachricht | Die eigene Nachricht, die gesendet wird, wenn ein Teammitglied suspendiert wird.                                                                                                                                                                                                                  |
| Verstoßprotokoll-Kanal              | Zielkanal, in dem öffentliche Verstoßankündigungen und Suspendierungs-Embeds gepostet werden.                                                                                                                                                                                                     |
| Verstoßankündigungsnachricht        | Die eigene Nachricht, die gesendet wird, wenn ein Teammitglied einen Verstoß erhält.                                                                                                                                                                                                              |
| DM-Benutzer bei Verstoß?            | Ein Schalter, um festzulegen, ob Verstöße und Suspendierungen per Direktnachricht an den sanktionierten Nutzer gesendet werden.                                                                                                                                                                   |
| Verstoß-DM-Nachricht                | Die eigene Nachricht, die per Direktnachricht an das Teammitglied gesendet wird, wenn es einen Verstoß erhält.                                                                                                                                                                                    |
| Suspendierungs-DM-Nachricht         | Die eigene Nachricht, die per Direktnachricht an das Teammitglied gesendet wird, wenn es suspendiert wird.                                                                                                                                                                                        |

### Beförderungen {#configuration-promotions}

Konfiguriere das Beförderungssystem in der [Konfiguration der Beförderungen](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system|configs/promotions).

| Feld                                     | Beschreibung                                                                                                                                                                                                                                               |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beförderungssystem aktivieren            | Aktiviert das Beförderungssystem, um Teammitglieder zu befördern. **Hinweis: Da die Befehle dieser Funktion ausgeblendet werden, wenn sie deaktiviert ist, kann ein Neustart deines Bots nötig sein, damit die Befehle dieser Funktion angezeigt werden.** |
| Automatisch neue Rolle hinzufügen?       | Fügt automatisch die Rolle hinzu, zu der der Nutzer befördert wird. **Warnung: Gefährliche Aktion! Eine ausführlichere Erklärung findest du in dem Hinweis unter dieser Tabelle.**                                                                         |
| Beförderungskanal                        | Der Kanal, in den die Beförderungen gesendet werden. Kann im Befehl manuell überschrieben werden.                                                                                                                                                          |
| Beförderungsankündigungs-Embed           | Die eigene Nachricht, die gesendet wird, wenn ein Teammitglied befördert wird.                                                                                                                                                                             |
| Direktnachricht an beförderten Benutzer? | Legt fest, ob der Bot zusätzlich eine Beförderungsnachricht an die Direktnachrichten des Mitglieds sendet.                                                                                                                                                 |
| Beförderungs-DM-Embed                    | Die eigene Nachricht, die bei einer Beförderung an die Direktnachrichten des Nutzers gesendet wird.                                                                                                                                                        |

**⚠️ Warnung: Die Einstellung „Automatisch neue Rolle hinzufügen?" AUSGESCHALTET zu lassen, wird EMPFOHLEN. So vermeidest du Raids, bei denen böswillige Nutzer anderen Nutzern gefährliche Rollen mit gefährlichen Berechtigungen geben und ihnen so helfen, den Server zu raiden. Der Bot kann sich NICHT selbst vor böswilligen Aktionen schützen, und wir können bei aktivierter Einstellung keine Raid-Freiheit garantieren. Bitte aktiviere Backups, wenn du diese Einstellung nutzt!**

### Mitarbeiterbewertungen {#configuration-reviews}

Konfiguriere die Bewertungseinstellungen in der [Konfiguration der Mitarbeiterbewertungen](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system|configs/reviews).

| Feld                                            | Beschreibung                                                                                                                                                                                                                                                               |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bewertungssystem aktivieren                     | Aktiviert das Bewertungssystem, mit dem Nutzer (Team-)Mitglieder bewerten können. **Hinweis: Da die Befehle dieser Funktion ausgeblendet werden, wenn sie deaktiviert ist, kann ein Neustart deines Bots nötig sein, damit die Befehle dieser Funktion angezeigt werden.** |
| Bewertungsprotokoll-Kanal                       | Der Kanal, in den Bewertungen gesendet werden.                                                                                                                                                                                                                             |
| Selbstbewertung erlauben?                       | Legt fest, ob Teammitglieder sich selbst bewerten dürfen.                                                                                                                                                                                                                  |
| Nur Benutzern erlauben, Mitarbeiter zu bewerten | Wenn aktiviert, können Nutzer nur Teammitglieder bewerten.                                                                                                                                                                                                                 |
| Bewertungsnachricht                             | Die anpassbare (Embed-)Nachricht, die in den Bewertungskanal gesendet wird.                                                                                                                                                                                                |

### Schichtverwaltung {#configuration-shifts}

Konfiguriere das Schichtsystem für Teammitglieder, Dienstarten, Schichtzeit-Bestenlisten, Schichtzeit-Quoten für bestimmte Rollen und verwalte die Protokollierung des Schichtstatus in der [Konfiguration der Schichtverwaltung](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system|configs/shifts).

| Feld                                | Beschreibung                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Schichten aktivieren                | Schaltet das Schichtsystem für Teammitglieder ein, damit sie in den Dienst, in die Pause oder aus dem Dienst gehen können und mehr. **Hinweis: Da die Befehle dieser Funktion ausgeblendet werden, wenn sie deaktiviert ist, kann ein Neustart deines Bots nötig sein, damit die Befehle dieser Funktion angezeigt werden.** |
| Im-Dienst-Rolle                     | Eine optionale Rolle, die einem Teammitglied beim In-den-Dienst-Gehen gegeben wird. Sie wird entfernt, wenn das Teammitglied den Dienst beendet. Das ist praktisch, um Personen im Dienst ohne Befehle leicht zu erkennen.                                                                                                   |
| Dienstarten                         | Eigene Kategorien von Dienstarten, damit Teammitglieder den passenden Zweck ihres Dienstes auswählen können.                                                                                                                                                                                                                 |
| Minimale Schichtdauer (Minuten)     | Die Mindestdauer in Minuten, die Teammitglieder im Dienst sein müssen, damit sie zu ihrer gesamten Dienstzeit zählt. **Warnung: Schichten, die vor dieser Zeit enden, werden GELÖSCHT und können NICHT wiederhergestellt werden!**                                                                                           |
| Bestenliste aktivieren?             | Schaltet die Möglichkeit ein, dass Teammitglieder eine Bestenliste sehen, in der die Personen mit der meisten Dienstzeit oben stehen.                                                                                                                                                                                        |
| Leaderboard-Zeitraum                | Legt den Zeitraum der gesamten Dienstzeiten fest, die in der Bestenliste angezeigt werden. Wähle zwischen wöchentlich, monatlich und gesamt.                                                                                                                                                                                 |
| Kontingentsystem aktivieren         | Schaltet das Quotensystem ein, mit dem du erwartete Dienstzeiten für Mitglieder mit einer bestimmten Rolle festlegen kannst.                                                                                                                                                                                                 |
| Kontingent-Zeitraum                 | Legt den Zeitraum fest, der für die Quote gezählt wird. Wähle zwischen wöchentlich oder monatlich.                                                                                                                                                                                                                           |
| Rollenquoten                        | Weist je Rolle erwartete Dienstzeiten zu. Als Quote eines Nutzers gilt seine höchste konfigurierte Rolle.                                                                                                                                                                                                                    |
| Schichtänderungen protokollieren    | Schaltet die detaillierten Schichtprotokolle ein. Sie protokollieren Schichtänderungen eines Nutzers, etwa das Starten/Beenden seiner Schicht.                                                                                                                                                                               |
| Kanal für Schichtwechsel-Protokolle | Der Kanal, in den Schichtwechsel-Protokolle gesendet werden. Leer lassen, um den Allgemeinen Protokoll-Kanal zu verwenden.                                                                                                                                                                                                   |

### LoA & RA Status {#configuration-status}

Konfiguriere die Systeme für Abwesenheit und Reduzierte Aktivität, mit denen Teammitglieder vorübergehend von Team-Aufgaben befreit werden können, in der [Konfiguration des LoA & RA Status](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system|configs/status).

| Feld                                | Beschreibung                                                                                                                                                                                                                                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Statussystem aktivieren             | Schaltet das Statussystem ein, mit dem du die LoA- und RA-Einstellungen aktivieren kannst.                                                                                                                                                                         |
| LoA-System aktivieren               | Legt fest, ob Teammitglieder eine Abwesenheit beantragen können. **Hinweis: Da die Befehle dieser Funktion ausgeblendet werden, wenn sie deaktiviert ist, kann ein Neustart deines Bots nötig sein, damit die Befehle dieser Funktion angezeigt werden.**          |
| LoA-Rolle                           | Optionale Rolle, die Teammitgliedern zugewiesen wird, wenn sie auf LoA sind. Sie ist optional, wird aber empfohlen, um leicht zu erkennen, wer auf LoA ist.                                                                                                        |
| Maximale LoA-Dauer (Tage)           | Das Limit in Tagen, für wie lange Teammitglieder eine LoA beantragen können. Ihre LoA wird automatisch abgelehnt und nicht angefragt, wenn die beantragte LoA-Dauer dieses Limit überschreitet.                                                                    |
| Genehmigung für LoA erforderlich?   | Legt fest, ob LoA-Anträge eine Genehmigung durch Aufsichtspersonen benötigen, die prüfen, ob die LoA einen gültigen Grund und eine gültige Dauer hat.                                                                                                              |
| RA-System aktivieren                | Legt fest, ob Teammitglieder eine Reduzierte Aktivität beantragen können. **Hinweis: Da die Befehle dieser Funktion ausgeblendet werden, wenn sie deaktiviert ist, kann ein Neustart deines Bots nötig sein, damit die Befehle dieser Funktion angezeigt werden.** |
| RA-Rolle                            | Optionale Rolle, die Teammitgliedern zugewiesen wird, wenn sie auf RA sind. Sie ist optional, wird aber empfohlen, um leicht zu erkennen, wer auf RA ist.                                                                                                          |
| Maximale RA-Dauer (Tage)            | Das Limit in Tagen, für wie lange Teammitglieder eine RA beantragen können. Ihre RA wird automatisch abgelehnt und nicht angefragt, wenn die beantragte RA-Dauer dieses Limit überschreitet.                                                                       |
| Genehmigung für RA erforderlich?    | Legt fest, ob RA-Anträge eine Genehmigung durch Aufsichtspersonen benötigen, die prüfen, ob die RA einen gültigen Grund und eine gültige Dauer hat.                                                                                                                |
| Status-Anfrage-Kanal                | Der Kanal, in den Statusanträge zur Genehmigung/Ablehnung gesendet werden.                                                                                                                                                                                         |
| Statusänderungen protokollieren     | Schaltet die Statusprotokollierung ein, die alle Statusänderungen von Teammitgliedern protokolliert. Dabei werden Embed-Protokolle zu Änderungen an der LoA/RA eines Teammitglieds gesendet, etwa Beginn, Ende oder Verlängerung des Status.                       |
| Kanal für Statusänderungsprotokolle | Der Kanal, in dem Statusänderungen protokolliert werden. Kann leer bleiben, um den Allgemeinen Protokoll-Kanal zu verwenden.                                                                                                                                       |

### Mitarbeiterprofile {#configuration-profiles}

Konfiguriere (Team-)Profile mit einem eigenen Profil-Embed und weiteren Einstellungen in der [Konfiguration der Mitarbeiterprofile](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system|configs/profiles).

| Feld                                                                         | Beschreibung                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mitarbeiterprofile aktivieren                                                | Schaltet das Teamprofil-System ein, mit dem Teammitglieder ihren eigenen Spitznamen und ihre Vorstellung festlegen können. **Hinweis: Da die Befehle dieser Funktion ausgeblendet werden, wenn sie deaktiviert ist, kann ein Neustart deines Bots nötig sein, damit die Befehle dieser Funktion angezeigt werden.** |
| Nur Mitarbeitern und höher erlauben, ihr eigenes anpassbares Profil zu haben | Legt fest, ob nur Teammitglieder ihr Profil bearbeiten können. Ist die Option deaktiviert, können alle Mitglieder ein eigenes Profil mit eigenem Spitznamen und eigener Vorstellung haben.                                                                                                                          |
| Berechtigung zur Profilmoderation                                            | Legt fest, ob Aufsichtspersonen und höher oder Management und höher das Profil eines anderen (Team-)Mitglieds zurücksetzen können.                                                                                                                                                                                  |
| Profilembed                                                                  | Passe hier das Profil-Embed an. _Hinweis: Diese Funktion funktioniert zwar auch ohne Embed, für das beste Erlebnis wird aber dennoch dringend ein Embed empfohlen._                                                                                                                                                 |

### Aktivitäts-Checks {#configuration-activity-checks}

Konfiguriere manuelle und automatisierte Aktivitäts-Checks, um zu prüfen, ob Teammitglieder aktiv sind, in der [Konfiguration der Aktivitäts-Checks](https://scnx.app/de/glink?page=bot/configuration?file=staff-management-system|configs/activity-checks).

| Feld                                    | Beschreibung                                                                                                                                                                                                            |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktivitäts-Checks aktivieren            | Schaltet das Aktivitäts-Check-System ein, mit dem du die Aktivität von Teammitgliedern sowohl manuell als auch automatisch prüfen kannst.                                                                               |
| Rollen zur Überprüfung                  | Rollen, von denen erwartet wird, dass sie auf den Aktivitäts-Check reagieren. Leer lassen, um die allgemeinen Team-Rollen zu verwenden.                                                                                 |
| Überprüfungsdauer (Stunden)             | Die Dauer des Aktivitäts-Checks. Das Minimum ist 1 Std., das Maximum 168 Std. (1 Woche).                                                                                                                                |
| Aktivitäts-Check-Embed                  | Das anpassbare Aktivitäts-Check-Embed.                                                                                                                                                                                  |
| Beendetes Aktivitäts-Check-Embed        | Das anpassbare Aktivitäts-Check-Embed, das nach dem Ende des Aktivitäts-Checks anstelle des Aktivitäts-Check-Embeds bearbeitet angezeigt wird.                                                                          |
| Standardkanal                           | Der Kanal, in den die Aktivitäts-Checks gesendet werden. Das kann im Befehl überschrieben werden.                                                                                                                       |
| Regel für Ausnahmen                     | Die Regel, wer von den Aktivitäts-Checks ausgenommen ist. Wähle zwischen keine, nur LoA, nur RA, LoA und RA oder eine eigene Rolle.                                                                                     |
| Benutzerdefinierte Ausnahmerollen       | Die Rolle(n), die von Aktivitäts-Checks ausgenommen sind, wenn oben „Eigene Rolle(n)" gewählt wurde.                                                                                                                    |
| Automatisierte Überprüfungen            | Schaltet das automatisierte Aktivitäts-Check-System ein.                                                                                                                                                                |
| Automatisiertes Überprüfungsintervall   | Wähle, wie oft der Aktivitäts-Check stattfinden soll (wöchentlich, zweiwöchentlich, monatlich oder per Cronjob).                                                                                                        |
| Automatisierter Überprüfungs-Cronjob    | Eigener Cronjob, um die Häufigkeit genau so festzulegen, wie du möchtest. _Hinweis: Ein Cronjob-Generator wie https://crontab.guru/ wird empfohlen, sofern du nicht selbst weißt, wie ein Cronjob-Muster funktioniert._ |
| Automatisierter Überprüfungs-Wochentag  | Der Wochentag, an dem der Aktivitäts-Check gesendet wird.                                                                                                                                                               |
| Automatisierte Überprüfungs-Monatswoche | Die Woche des Monats, in der der Aktivitäts-Check gesendet wird, wenn beim Intervall „monatlich" gewählt wurde.                                                                                                         |
| Ergebniskanal                           | Der Kanal, in dem die Ergebnisse des Aktivitäts-Checks gepostet werden. Die Ergebnisse zeigen, wer reagiert hat, wer nicht und wer ausgenommen war. Leer lassen, um den Allgemeinen Protokoll-Kanal zu verwenden.       |
| Ping bei Ergebnissen                    | Legt fest, ob eine Rolle mit den Ergebnissen gepingt wird oder nicht.                                                                                                                                                   |
| Rollen zu benachrichtigen               | Die eigene(n) Rolle(n), die mit den Ergebnissen gepingt werden.                                                                                                                                                         |

## Fehlerbehebung {#troubleshooting}

Manchmal können Probleme auftreten, die nicht ganz einfach zu beheben sind. Die meisten Probleme, die bei dir auftreten könnten, sind hier aufgelistet, zusammen mit möglichen Lösungen. Wenn dein Problem hier nicht aufgeführt ist oder die Lösung es nicht behoben hat, wende dich gerne an [unser Support-Team](https://scnx.app/help).

<details>
    <summary>Ich befördere jemanden mit aktivierter Einstellung „Automatisch neue Rolle hinzufügen?", aber die Rolle wird dem Nutzer nicht gegeben</summary>

    Das passiert meistens, weil dem Bot die Berechtigung fehlt, dem Nutzer die Rolle hinzuzufügen. Möglicherweise hat der Bot eine Rolle, die niedriger ist als die Rolle, zu der der Nutzer befördert wird. Das ist ein Problem der Discord-Rollenhierarchie und kein Bug. Probiere die folgenden Schritte aus, um das Problem zu beheben:
    * Stelle sicher, dass dein Bot eine Rolle hat, die höher ist als die Rolle, zu der du einen Nutzer beförderst. Wir empfehlen, eine Rolle über allen Rollen mit geringerem Risiko zu setzen, zu denen du Nutzer befördern würdest. Rollen mit höherem Risiko (Nutzer, die kicken/bannen können usw.) sollten aus Gründen des Raid-Schutzes nicht automatisch vergeben werden.
    * Es wird empfohlen, deinem Bot die Berechtigung `Administrator` zu geben, damit er Nutzern Rollen geben kann. Es könnte auch sein, dass dem Bot die Berechtigung fehlt, Rollen an Nutzer zu vergeben bzw. von ihnen zu entfernen.

</details>

<details>
    <summary>Das Beenden einer Team-Schicht hat die Zeit nicht zur gesamten Schichtzeit eines Nutzers hinzugefügt</summary>
    <ul>
        <li>Prüfe die Einstellung **Minimale Schichtdauer (Minuten)** in der <a href="#configuration-shifts">Konfiguration der Schichtverwaltung</a>. Möglicherweise hat der Nutzer eine Schicht beendet, bevor er diese Dienstzeit erreicht hatte. Alle Schichten unter diesem Zeitraum zählen nicht zur gesamten Schichtzeit, um „Shift Farming" zu vermeiden. Setze den Wert auf 0 (Standard), damit alle Schichten zählen. **Alle Schichten, die vor der minimalen Schichtzeit beendet werden, werden __gelöscht__ und können nicht wiederhergestellt werden.**</li>
    </ul>
</details>

<details>
    <summary>Beim Suspendieren eines Nutzers werden die Rollen nicht entfernt.</summary>
    <ul>
        <li>Stelle sicher, dass die höchste Rolle des Nutzers **niedriger** ist als die höchste Rolle des Bots. Der Bot kann keine Rollen verwalten, die über seiner eigenen Rolle liegen.</li>
        <li>Stelle sicher, dass die Hierarchie-Basisrolle der Suspendierung in der <a href="#configuration-infractions">Konfiguration der Sanktionen und Suspendierungen</a> korrekt gesetzt ist, sodass die Rolle tatsächlich beim Nutzer vorhanden ist und Rollen darüber entfernt werden.</li>
        <li>Stelle sicher, dass der Bot die Berechtigung `Rollen verwalten` hat, um Rollen zu entfernen/hinzuzufügen. Wir empfehlen, dem Bot die Berechtigung `Administrator` zu geben, damit er alle Berechtigungen hat und du dich nicht um einzelne Berechtigungen kümmern musst.</li>
    </ul>
</details>

<details>
    <summary>Nachdem ein Aktivitäts-Check beendet wurde, ändert sich die Aktivitäts-Check-Nachricht nie in die „beendete" Nachricht.</summary>
    <ul>
        <li>Stelle sicher, dass beide Nachrichten entweder den Standard-Nachrichteneditor oder Components V2 (Nachrichteneditor V4) verwenden. Wenn eine der beiden Nachrichten eine andere Art von Discord-Nachricht nutzt, wird sie nicht aktualisiert. Das ist eine Einschränkung von Discord und kein Bug.</li>
        <li>Stelle sicher, dass der Bot beim Ende des Aktivitäts-Checks keine Probleme hat. Prüfe die Ergebnisnachricht, um zu sehen, ob er tatsächlich (ordnungsgemäß) beendet wurde. Andere Probleme werden wahrscheinlich in den Fehlerprotokollen deines Bots festgehalten. Bitte wende dich dafür über https://scnx.app/help an unser Support-Team.</li>
    </ul>
</details>

<details>
    <summary>Ich habe Beförderungen/Verstöße/Bewertungen/Mitarbeiterstatus/LoA/RA/Mitarbeiterprofile/Schichten aktiviert, kann aber die Befehle für diese Funktion nicht sehen.</summary>

    Die aufgeführten Funktionen nutzen ein System, bei dem die Befehle dieser Funktionen ausgeblendet werden, solange sie nicht verwendet werden. Das bietet insgesamt ein besseres Nutzererlebnis, da weniger Befehle angezeigt werden. Probiere diese Schritte aus, um es zu beheben:
    1. Stelle sicher, dass die Funktion tatsächlich aktiviert ist und keine Probleme hat.
    2. Lade die Konfiguration neu.
    3. Wenn das nicht geholfen hat, starte den Bot neu.
    4. Wenn auch das nicht geholfen hat, aktualisiere deinen Discord-Client (Strg + R am Desktop, auf dem Handy Discord komplett schließen und neu öffnen)

</details>

## Gespeicherte Daten {#data-usage}

Das Staff-Management-System ist ein großes Modul, wodurch viele Dinge gleichzeitig gespeichert werden können. Um unser Bekenntnis zu voller Transparenz zu unterstützen, erklärt diese Anleitung jedes gespeicherte Datum nach Datenbankmodellen.
Für jedes Datenbankmodell gibt es eine eigene Unterkategorie, sodass du Einblick in jedes einzelne gespeicherte Datum erhältst.
Zu jedem Modell gibt es außerdem eine Erklärung, welche Daten gelöscht werden.

### Hinweis zu Zeitstempeln

Alle Datenbankmodelle erfassen automatisch zwei Standard-Zeitstempel:

- **Created At:** Datum und Uhrzeit, zu der der Datensatz erstellt wurde.
- **Updated At:** Datum und Uhrzeit, zu der der Datensatz zuletzt geändert wurde.
  Dies sind keine selbst definierten Felder, sondern werden automatisch vom System erfasst.

### Aktivitäts-Checks {#data-usage-activity-checks}

- **Activity Check ID:** Die Aktivitäts-Check-ID wird derzeit intern verwendet. Jeder Aktivitäts-Check hat eine eindeutige ID, damit Nutzer auf den richtigen Aktivitäts-Check reagieren und die Ergebnisse auf genau diesem Aktivitäts-Check basieren.
- **Message ID:** Die Nachrichten-ID wird gespeichert, um die gesendete Aktivitäts-Check-Nachricht nachzuverfolgen und nach dem Ende des Aktivitäts-Checks genau diese Nachricht zu bearbeiten.
- **Channel ID:** Die Kanal-ID wird gespeichert, um nachzuverfolgen, wo die Aktivitäts-Check-Nachricht gesendet wurde. Sie wird dem Nutzer beim Starten eines Aktivitäts-Checks und beim Prüfen des Status des Aktivitäts-Checks angezeigt.
- **End Time:** Die Endzeit wird gespeichert, um nachzuverfolgen, wann ein Aktivitäts-Check endet. Da es sich um ein Datum handelt, wird der genaue Zeitpunkt (Datum + Uhrzeit) des Endes erfasst.
- **Target Roles:** Die Zielrollen werden gespeichert, um nachzuverfolgen, welche Rollen auf den Aktivitäts-Check reagieren müssen. Das ist ein entscheidender Teil dieser Funktion. Ohne sie sind Aktivitäts-Checks komplett unbrauchbar.
- **Responded Users:** Die Nutzer, die reagiert haben, werden gespeichert, um zu prüfen, wer auf die Aktivitäts-Checks reagiert hat. Das wird auch in den Endergebnissen angezeigt.
- **Status:** Der Status des Aktivitäts-Checks wird gespeichert, um zu prüfen, ob ein Aktivitäts-Check gerade aktiv oder inaktiv ist.
- **Iniatior ID:** Die Initiator-ID wird gespeichert, um zu wissen, wer den Aktivitäts-Check gestartet hat. Sie ist null, wenn es sich um einen automatisierten Check handelt (in der Aktivitäts-Check-Nachricht als „system" dargestellt).
- **Is Automated:** Der Wert „isAutomated" wird gespeichert, um zu sehen, ob der Check ein automatisierter Check war. Das ist eine zusätzliche Prüfung neben der Initiator-ID, um sicherzustellen, dass es ein automatisierter Check war.

**ActivityCheckResponse-Modell unten**
_Das Löschen von Aktivitäts-Check-Daten über das Nutzer-Panel (`Data Deletion > Delete Activity Checks`) löscht alle Antwort-Datensätze dieses Nutzers aus der Tabelle `ActivityCheckResponse`. Beachte, dass die ID des Nutzers weiterhin im Zusammenfassungsfeld `respondedUsers` vergangener `ActivityCheck`-Datensätze aufgeführt bleibt._

- **ID:** Die Antwort-ID dient dazu, jedem Nutzer als „Antwort-ID" eine eindeutige Nummer (ID) zuzuweisen. Sie wird hauptsächlich gespeichert, um Doppeleinträge zu verhindern.
- **Activity Check ID:** Die Aktivitäts-Check-ID wird gespeichert, um zu erkennen, auf welchen Aktivitäts-Check der Nutzer reagiert hat.
- **User ID:** Die Nutzer-ID wird gespeichert, um zu wissen, welcher Nutzer auf den Aktivitäts-Check reagiert hat.

### Verstöße {#data-usage-infractions}

_Das Löschen von Verstoßdaten über das Nutzer-Panel (`Data Deletion > Delete Infractions`) entfernt alle Verstoß-Datensätze, bei denen der Nutzer das **Ziel** ist (`userId`). Verstöße, die dieser Nutzer anderen Teammitgliedern erteilt hat (`issuerId`), bleiben zur Nachvollziehbarkeit erhalten._

- **Case ID:** Die Fall-ID dient dazu, jedem Verstoß einen eindeutigen Kennungscode zu geben. Sie kann bei jedem Verstoß angezeigt werden und wird beim Aufheben eines Verstoßes verwendet.
- **User ID:** Die Nutzer-ID wird gespeichert, um genau zu wissen, wer sanktioniert wurde, besonders nützlich, um dieses sanktionierte Teammitglied zu pingen.
- **Issuer ID:** Die Aussteller-ID wird gespeichert, um zu wissen, wer genau ein Teammitglied sanktioniert hat.
- **Type:** Die Art wird verwendet, um zu erkennen, welche Verstoßart erteilt wurde.
- **Reason:** Der Grund wird gespeichert, um zu wissen, was der Grund für jeden Verstoß ist. Er wird im Verstoßverlauf des Nutzers angezeigt.
- **Duration Days:** Die Dauer in Tagen wird verwendet, um genau zu wissen, wie viele Tage eine Suspendierung dauert.
- **Active:** Der Boolean „active" wird verwendet, um zu wissen, ob eine Suspendierung gerade aktiv ist oder bereits beendet wurde.
- **Message URL:** Die Nachrichten-URL wird gespeichert, um sich die genaue Verstoßnachricht zu merken. Sie wird verwendet, um Verstöße zuzuordnen, wenn ein Teammitglied einen Verstoß über die Nachrichten-URL aufhebt.
- **Expires At:** Das Ablaufdatum wird verwendet, um zu wissen, wann ein Verstoß abläuft.

### LoA-/Statusanträge {#data-usage-status}

_Das Löschen von Statusdaten (`Data Deletion > Delete Status`) setzt den aktiven `activityStatus` im Profil des Nutzers auf null zurück. Historische `LoaRequest`-Zeilen bleiben für administrative Prüfungen erhalten._

- **ID:** Die ID wird gespeichert, um eine bestimmte LoA/RA zu identifizieren.
- **User ID:** Die Nutzer-ID wird gespeichert, um zu wissen, wer den Status beantragt hat.
- **Type:** Das Feld „Type" wird verwendet, um sich zu merken und zu wissen, ob der Nutzer eine LoA oder eine RA beantragt hat.
- **Reason:** Der Grund des Statusantrags.
- **Start Date:** Das Startdatum des Status. Wird verwendet, um zu sehen, wann der Status begann, und um das Enddatum zu berechnen.
- **End Date:** Das Enddatum des Status.
- **Status:** Der aktuelle Status einer LoA/RA (z. B. pending, approved, denied).
- **Approver ID:** Die Nutzer-ID des Teammitglieds, das die LoA/RA genehmigt hat.
- **Rejection reason:** Der Ablehnungsgrund wird verwendet, um zu wissen, warum ein Status abgelehnt wurde. Er wird sowohl Vorgesetzten als auch dem Teammitglied angezeigt, das den Status beantragt hat.

### Beförderungen {#data-usage-promotions}

_Das Löschen von Beförderungsdaten über das Nutzer-Panel (`Data Deletion > Delete Promotions`) löscht alle historischen Protokolle, in denen der Nutzer Empfänger einer Beförderung oder Degradierung war._

- **ID:** Eindeutige ID, um die jeweilige Beförderungs-ID zu erkennen.
- **User ID:** Die Nutzer-ID des beförderten Teammitglieds.
- **Issuer ID:** Die Nutzer-ID der Führungskraft, die die Beförderung durchgeführt hat.
- **New Role:** Die neu zugewiesene Rolle (ID).
- **Reason:** Der für die Beförderung dokumentierte Grund.
- **Message URL:** Die Nachrichten-URL der Beförderungsnachricht.

### Teamprofil {#data-usage-profile}

_Die `StaffProfile`-Zeile selbst ist dauerhaft und wird durch Panel-Aktionen **nie gelöscht**. Das Löschen von Schichtdaten (`Data Deletion > Delete Shifts`) setzt nur die Felder der aktiven Schichterfassung zurück (`onDuty`, `onBreak`, `breakStartTime`, `lastClockIn`). Die Auswahl von `Delete ALL data` setzt eigene Profildetails (`customNickname`, `customIntro`) zurück und stellt den Suspendierungsstatus auf die Standardwerte zurück._

- **User ID:** Die Nutzer-ID des Teammitglieds.
- **Points (ignore):** Nicht verwendet. Wurde für eine geplante Funktion angelegt, die inzwischen aber verworfen wurde (wird im nächsten Update entfernt).
- **On Duty:** Der Boolean „onDuty" wird verwendet, um zu erkennen, ob ein Nutzer gerade im Dienst ist. Falls ja, werden Dinge wie das Vergeben der Im-Dienst-Rolle erledigt, sofern konfiguriert.
- **last Clock In:** Das Datum des letzten Dienstbeginns wird verwendet, um sich zu merken, wann der Nutzer zuletzt in den Dienst ging. Es wird auch zur Berechnung der gesamten Schichtzeit verwendet.
- **Activity status:** Wird verwendet, um zu erkennen, in welchem Status der Nutzer ist: im Dienst, auf LoA oder auf RA. Das wird auch im Teamprofil angezeigt.
- **Is Suspended:** Dieser Boolean wird verwendet, um zu wissen, ob der Nutzer suspendiert ist.
- **Suspended Roles:** Dies ist ein Snapshot der Rollen, die das Teammitglied vor der Suspendierung hatte, und wird aufbewahrt, damit bekannt ist, welche Rollen nach dem Ende der Suspendierung zurückgegeben werden.
- **Custom Nickname:** Der vom Teammitglied für das Teamprofil festgelegte eigene Name.
- **Custom Intro:** Die vom Teammitglied für das Teamprofil festgelegte eigene Vorstellung.
- **On Break:** Prüft, ob der Nutzer gerade in der Pause ist oder nicht.
- **Break Start Time:** Die Startzeit der Pause, die verwendet wird, um die Pausendauer zu berechnen und von der gesamten Dienstzeit abzuziehen.

### Team-Bewertung {#data-usage-reviews}

_Das Löschen von Bewertungen über das Nutzer-Panel (`Data Deletion > Delete Reviews`) entfernt alle Bewertungen, bei denen der Nutzer das **Ziel** der Bewertung war (`targetId`). Bewertungen, die dieser Nutzer für andere Teammitglieder geschrieben hat (`authorId`), bleiben erhalten._

- **ID:** Die ID der Bewertung.
- **Target ID:** Die Nutzer-ID des bewerteten Teammitglieds.
- **Author ID:** Die Nutzer-ID des Nutzers, der das Teammitglied bewertet hat.
- **Stars:** Die Anzahl der Sterne, mit denen der Nutzer das Teammitglied bewertet hat.
- **Comment:** Der Text, den der Nutzer der Bewertung hinzugefügt hat.
- **Message URL:** Die Nachrichten-URL der Bewertung.

### Team-Schicht {#data-usage-shifts}

_Daten im Modell `staffShift` bleiben für einzelne Schichten, Quotenverfolgung usw. erhalten. Sie können nur gelöscht werden, wenn du die Modul-Datenbank löschst._

- **User ID:** Die Nutzer-ID des Teammitglieds.
- **Start Time:** Die Startzeit der Schicht des Teammitglieds. Wird zusammen mit der Endzeit zur Berechnung der gesamten Schichtzeit verwendet.
- **End Time:** Die Endzeit der Schicht des Teammitglieds. Wird zusammen mit der Startzeit zur Berechnung der gesamten Schichtzeit verwendet.
- **Duration:** Die berechnete gesamte Schichtdauer. Wird im EOS-Bericht (End-Of-Shift), in der Dienstzeit usw. angezeigt.
- **Type:** Die Schichtart, die das Teammitglied verwendet.
- **Break Count:** Die Gesamtzahl der Pausen eines Nutzers während seiner Schicht.

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/de/docs/custom-bot/additional-features#reset-module-database).
