---
sidebar_position: 3
---

# Vertraute Administratoren

Server-Eigentümer können ihren Admins mit Hilfe der Funktion "Trusted Admins" auf SCNX ganz einfach Zugriff auf bestimmte Funktionen, Produkte etc. geben.

<IncludedInPlan data={{STARTER: true, PRO: true, ACTIVE_GUILD: true}} />

## Einrichtung {#setup}

:::caution
Erteile Trusted-Admin-Permissions nur an Nutzer, welchen du voll und ganz vertrauen tust - diese können dann in deinem Namen mit SCNX interagieren.
Bitte lese [den Abteil dieser Funktion](https://faq.scnx.app/scnx-nutzungsbedingungen/#trusted-admins) in
unseren [Nutzungsbedingungen](https://sc-net.work/scnx-tos).
:::
:::info
Um einen neuen Nutzer als Trusted Admin hinzuzufügen, musst du sicherstellen das der Nutzer sich mindestens einmal bei SCNX eingeloggt hat - Du kannst ihn diesen Link zum einloggen senden [https://scnx.app/de/auth/login](https://scnx.app/de/auth/login).
Wenn der Nutzer bestätigt hat das er sich bei SCNX einloggt hat, kannst du mit der Anleitung fortfahren.
:::

Um einen Trusted Admin hinzuzufügen, besuche deine [Server Einstellungen Seite](https://scnx.app/de/glink?page=settings) in deinem SCNX Dashboard und scrolle zur "Trusted-Admins" Sektion. 
Als nächstes klickst Du auf "Trusted-Admin hinzufügen", um das
Trusted-Admin-Modal anzeigen zu lassen. Hier kannst du die Discord-User-ID des gewünschten Trusted-Admins eingeben und [seine Berechtigungen](#permissions) konfigurieren (Bitte lese zuerst den Abschnitt [Berechtigungen](#permissions)!). Wenn Du fertig bist,
speichere die Änderungen, um den Zugriff zu gewähren.

![](@site/docs/assets/scnx/guilds/trusted-admins/add.png)

## Verwalten {#manage}

Um die Berechtigungen eines Trusted Admins zu ändern, öffne dazu deine [Server Einstellungs Seite](https://scnx.app/de/glink?page=settings) in deinem SCNX Dashboard
und scrolle zur Trusted Admins Sektion und klicke auf deinen Trusted Admin, welche du ändern möchtest. Das Trusted Admin-Modal wird angezeigt - Hier kannst du [seine Berechtigungen](#permissions) ändern. Um die Änderungen zu speichern, klicke auf "Änderungen speichern". 
Um einen Trusted Admin zu entfernen, klicke auf "Zugang entfernen" im Trusted Admin-Modal.

## Berechtigungen {#permissions}

Die folgenden Berechtigungen können per Trusted Admin-Berechtigungen vergeben werden:

| Berechtigung                                                     |   Erklärung                                                                                                                                                                      |
|------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Administrator                                                    | Dieser Nutzer kann die meisten Aktionen auf deinem Server ausführen, außer Aktionen welche für den Server-Eigetümer limitiert sind.                                              |
| **Custom-Bot**: Bot-Administrator                                | Dieser Nutzer hat jegliche verfügbare Berechtigung im CustomBot.                                                                                                                 |
| **Custom-Bot**: Kann Bot-Login nutzen                            | Dieser Nutzer kann Nachrichten senden, editieren und löschen und kann bestimmte Module im Webpanel des Als Bot einloggen nutzen.                                                 |
| **Custom-Bot**: Bot-Module aktivieren und deaktivieren           | Dieser Nutzer kann Bot-Module aktivieren und deaktivieren.                                                                                                                       |
| **Custom-Bot**: Konfigurationen & Eigene Befehle ändern und neu laden | Dieser Nutzer kann die Bot-Konfiguraton, Fehler und Eigene Befehle von deinem Bot sehen, bearbeiten und neu laden. Dazu gehört auch die Möglichkeit, Konfigurationsdateien auf ihren Standardwert zurückzusetzen. |
| **Custom-Bot**: Bot verwalten                                       | Dieser Nutzer kann den Bot neustarten und stoppen sowie seine Einstellungen und das Bot-Profil ändern.                                                                                                    |
| **Modmail-Bot**: Modmail Administrator                           | Dieser Nutzer hat jeglich mögliche Berechtigung zum ModMail-Bot.                                                                                                                    |
| **Modmail-Bot**: ModMail verwalten                                  | Dieser Nutzer kann den ModMail-Bot neustarten und stoppen sowie seine Einstellungen und das ModMail-Bot Profil ändern.                                                                                             |
| **Modmail-Bot**: ModMail-Konfiguration bearbeiten und neu laden                   | Dieser Nutzer kann die Konfiguration sowie Fehler sehen, neuladen und editieren.                                                                                            |
| **Modmail-Bot**: ModMail-Bewertungen anzeigen                            | Dieser Nutzer kann ModMail Support-Bewertungen und Ergebnisberichte ansehen.                                                                                                        |
| **Modmail-Bot**: ModMail-Statistiken anzeigen                          | Dieser Nutzer kann die ModMail Statistiken einsehen.                                                                                                                                            |
| **Backups**: Verwalte Backups                                      | Dieser Nutzer kann Backups erstellen, exportieren und löschen und seine Einstellungen verändern.                                                                                                  |
| **Analytics**: Anzeigen und verwenden von Analysen                              | Dieser Nutzer kann deine Server Statistiken anzeigen und verwenden.                                                                                                                             |
| **Integrations**: Integrationen ansehen & bearbeiten                       | Dieser Nutzer kann alle Funktionen jeglicher Integrationen anschauen und editieren, aber keine neuen Integrationen hinzufügen.                                                                                |

Außerdem verfügt jeder Trusted-Admin über eine **Basis von Berechtigungen**:

* Jegliche Einstellungen anschauen (und manche ändern) in dem [Server Einstellungen](https://scnx.app/de/guild/489786377261678592/settings) Tab
* Metadata über deinen Server anschauen (zb. Name, Icon, Eigentümer, ...)
* Einsicht in die Kaufdaten deines Servers (dies umfasst den Transaktionsverlauf, aber niemals die persönlichen Daten von Abonnements)
* Upgrading oder Einrichtung von Abonnements für deinen Server
* AI-Credits auf deinem Server aufladen

Trusted Admins **können niemals**:

* neue Produkte (zb. Custom-Bot, Modmail-Bot, Statistiken, …) auf deinem Server aktivieren
* den Token eines auf SCNX erstellten Bots ändern
* andere Trusted Admins hinzufügen, ihre Berechtigungen ändern oder entfernen von deinem Server - Nur der Server-Eigentümer kann dies.
* Produkte vom Server entfernen oder den Server von SCNX entfernen
* Produkte (zb. Credits, Pläne, ...) in deinem Namen oder deiner Zahlungsmethoden erwerben
* die Erlaubnis für unsere Teammitglieder erteilen, potenziell zerstörerische Aktionen durchzuführen

Trusted-Admins können nicht mehr auf deinen Server zugreifen, wenn sie den Server verlassen (oder entfernt werden).

## Fehlerbehebung {#throubleshooting}

<details>
<summary>Wenn ich meine User-ID eingebe, zeigt SCNX mir einen "Fehler beim abrufen des Nutzers" an</summary>
Die Discord User-ID des Nutzers den du probierst hinzuzufügen ist wohl möglich ungültig. User-IDs bestehen nur aus Nummern und sind nicht das gleiche wie Tags, oder Nutzernamen. Um eine Discord User-ID zu erhalten, befolge diesen
<a href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-"> offiziellen Discord Support Artikel um eine ID zu erhalten</a>.
</details>

<details>
<summary>Wenn ich probiere einen Trusted Admin hinzuzufügen, steht da "This user never logged into SCNX…"</summary>
Das bedeutet das der Nutzer sich noch nie bei SCNX angemeldet hat.
<ul>
    <li>Sende ihm
diesen Link zum Log-In: <a href="https://scnx.app/de/auth/login">https://scnx.app/de/auth/login</a>. Sobald er bestätigt hat, dass er sich
bei SCNX angemeldet hat, versuche es dann bitte erneut.</li>
<li>Überprüfe bitte beim gewünschten Trusted Admin, das er/sie mit dem richtigen Account eingeloggt ist und lass ihn sich ab und anmelden.</li>
</ul>
Letztendlich kannst du keinen anderen Benutzer dazu zwingen, sich bei SCNX anzumelden. Es gibt keine Möglichkeit, einen Benutzer zu SCNX hinzuzufügen, ohne dass er sich vorher angemeldet hat.
</details>

<details>
<summary>Meinem Trusted Admin wird "No permissions on this server" im Dashboard angezeigt</summary>
Bitte stelle sicher, das du dem Nutzer bzw. dem Trusted Admin die korrekten <a href="#permissions">Rechte</a> vergeben hast. Du kannst die Berechtigungen deines Trusted Admins einfach bearbeiten indem du in die <a href="#manage">Sektion über die Verwaltung von Trusted-Admins</a> gehst.
</details>

<details>
<summary>Mein Trusted-Admin kann keinen Custom-Bot, Modmail-Bot, ... einrichten.</summary>
Trusted Admins können keine sensibelen Aktionen wie zb. die Aktivierung und Deaktivierung von Produkten ausführen. Bitte lese den Abschnitt <a href="#permissions">Berechtigungen</a>, um mehr über diese Einschränkungen zu erfahren. Der Trusted Admin kann die Produkte bearbeiten, nachdem der Server-Besitzer sie freigegeben/eingestellt hat.
</details>


<details>
<summary>Mein Trusted Admin findet meinen Server nicht in seiner Liste</summary>
<ul>
    <li>Vergewissere dich, das der Nutzer im gleichen Account angemeldet ist, wo du ihn als Trusted Admin hinzugefügt hast.</li>
   <li>Frage ihn die Server Liste per "Daten neuladen"-Button zu aktualisieren</li>
    <li>Stelle sicher, das der Trusted Admin ein Mitglied deines Servers ist, da nur Server-Mitglieder als Trusted Admin hinzugefügt werden können.</li>
    </ul>
</details>
