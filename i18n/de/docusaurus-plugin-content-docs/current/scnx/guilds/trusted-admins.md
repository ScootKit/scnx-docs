---
sidebar_position: 3
---

# Trusted Admins

Server-Eigentümer können ihren Admins mit Hilfe der Funktion "Trusted Admins" auf SCNX ganz einfach Zugriff auf
bestimmte Funktionen, Produkte etc. geben.

<IncludedInPlan data={{STARTER: true, PROFESSIONAL: true, UNLIMITED: true}} />

## Einrichtung {#setup}

:::caution
Erteile Trusted-Admin-Rechte nur an Nutzer, welchen du voll und ganz vertraust - diese können dann in deinem Namen mit
SCNX interagieren.
Bitte lies dir [den Absatz über diese Funktion](https://faq.scnx.app/scnx-nutzungsbedingungen/#trusted-admins) in
unseren [Nutzungsbedingungen](https://scootk.it/scnx-tos) durch.
:::
:::info
Um einen neuen Nutzer als Trusted Admin hinzuzufügen, musst du sicherstellen, dass der Nutzer sich mindestens einmal bei
SCNX eingeloggt hat - du kannst ihn diesen Link zum Einloggen
senden: [https://scnx.app/de/auth/login](https://scnx.app/de/auth/login).
Wenn der Nutzer bestätigt hat, dass er sich bei SCNX einloggt hat, kannst du mit der Anleitung fortfahren.
:::

Um einen Trusted Admin hinzuzufügen, besuche deine [Server Einstellungen Seite](https://scnx.app/de/glink?page=settings)
in deinem SCNX Dashboard und scrolle zur "Trusted-Admins" Sektion.
Als nächstes klickst du auf "Trusted-Admin hinzufügen", um dir den
Trusted-Admin-Dialog anzeigen zu lassen. Hier kannst du die Discord-Nutzer-ID des gewünschten Trusted-Admins eingeben
und [seine Berechtigungen](#permissions) konfigurieren (Bitte lies zuerst den
Abschnitt [Berechtigungen](#permissions)!). Wenn du fertig bist,
speichere die Änderungen, um den Zugriff zu gewähren.

![](@site/docs/assets/scnx/guilds/trusted-admins/add.png)

## Verwalten {#manage}

Um die Berechtigungen eines Trusted Admins zu ändern, öffne
die [Servereinstellungen](https://scnx.app/de/glink?page=settings) in deinem SCNX Dashboard,
scrolle zur "Trusted-Admins"-Sektion und klicke auf den Trusted Admin, von dem du die Berechtigungen ändern möchtest.
Der Trusted-Admin-Dialog wird angezeigt - hier kannst du [seine Berechtigungen](#permissions) ändern. Um die Änderungen
zu speichern, klicke auf "Änderungen speichern".
Um einen Trusted Admin zu entfernen, klicke auf "Zugang entfernen" im Trusted-Admin-Dialog.

## Berechtigungen {#permissions}

Die folgenden Berechtigungen können per Trusted Admin-Berechtigungen vergeben werden:

| Berechtigung                                                                                       | Erklärung                                                                                                                                                                                                         |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Administrator                                                                                      | Dieser Nutzer kann die meisten Aktionen auf deinem Server ausführen, außer Aktionen welche auf den Server-Eigentümer limitiert sind.                                                                              |
| Co-Owner (**gefährlich!**, nur verfügbar, wenn die Administrator-Berechtigung auch vergeben wurde) | Dieser Nutzer kann jede Aktion auf deinem Server durchführen, wozu das Erstellen, aber auch Löschen von Bots auf SCNX gehört, der Nutzer kann den Server auch komplett von SCNX entfernen.                        |
| **Eigener Bot**: Bot-Administrator                                                                 | Dieser Nutzer hat jegliche verfügbare Berechtigung auf den eigenen Bot des Servers.                                                                                                                               |
| **Eigener Bot**: Kann Bot-Login nutzen                                                             | Dieser Nutzer kann Nachrichten senden, editieren und löschen und kann bestimmte Module im Webpanel des "Als Bot anmelden" nutzen.                                                                                 |
| **Eigener Bot**: Bot-Module aktivieren und deaktivieren                                            | Dieser Nutzer kann Bot-Module aktivieren und deaktivieren.                                                                                                                                                        |
| **Eigener Bot**: Konfigurationen & Eigene Befehle ändern und neu laden                             | Dieser Nutzer kann die Bot-Konfiguration, Fehler und eigene Befehle von deinem Bot Sehen, Bearbeiten und Neuladen. Dazu gehört auch die Möglichkeit, Konfigurationsdateien auf ihren Standardwert zurückzusetzen. |
| **Eigener Bot**: Bot verwalten                                                                     | Dieser Nutzer kann den Bot neustarten und stoppen, sowie seine Einstellungen und das Bot-Profil ändern.                                                                                                           |
| **Modmail-Bot**: Modmail Administrator                                                             | Dieser Nutzer hat jede mögliche Berechtigung zum ModMail-Bot.                                                                                                                                                     |
| **Modmail-Bot**: Modmail verwalten                                                                 | Dieser Nutzer kann den Modmail-Bot neustarten und stoppen, sowie seine Einstellungen und das Modmail-Bot Profil ändern.                                                                                           |
| **Modmail-Bot**: Modmail-Konfiguration bearbeiten und neu laden                                    | Dieser Nutzer kann die Konfiguration sowie Fehler sehen, neuladen und editieren.                                                                                                                                  |
| **Modmail-Bot**: Modmail-Bewertungen anzeigen                                                      | Dieser Nutzer kann Modmail Support-Bewertungen und Ergebnisberichte ansehen.                                                                                                                                      |
| **Modmail-Bot**: Modmail-Statistiken anzeigen                                                      | Dieser Nutzer kann die Modmail-Statistiken einsehen.                                                                                                                                                              |
| **Verknüpfte Rollen**: Verknüpfte Rollen Administrator                                             | Dieser Nutzer hat jede verfügbare Berechtigungen auf verknüpfte Rollen.                                                                                                                                           |
| **Verknüpfte Rollen**: Verknüpfte Rollen von Nutzern verwalten                                     | Dieser Nutzer kann verknüpfte Rollen von jedem Nutzer auf deinem Server verwalten.                                                                                                                                |
| **Verknüpfte Rollen** Verknüpfte Rollen Konfiguration und Rollen verwalten                         | Dieser Nutzer kann die Konfiguration von verknüpften Rollen verwalten und verknüpfte Rollen ändern.                                                                                                               | **Backups**: Verwalte Backups                                                                      | Dieser Nutzer kann Backups erstellen, exportieren, löschen und seine Einstellungen verändern.                                                                                                                     |
| **Statistiken**: Anzeigen und Verwenden von Analysen                                               | Dieser Nutzer kann deine Server Statistiken anzeigen und verwenden.                                                                                                                                               |
| **Integrationen**: Integrationen ansehen & bearbeiten                                              | Dieser Nutzer kann alle Funktionen jeglicher Integrationen anschauen und editieren, aber keine neuen Integrationen hinzufügen.                                                                                    |

Außerdem verfügt jeder Trusted-Admin über eine **Basis von Berechtigungen**:

* Alle Einstellungen in dem [Servereinstellungen](https://scnx.app/de/glink?page=settings)-Tab anschauen und manche
  ändern
* Metadata über deinen Server anschauen (z. B. Name, Icon, Eigentümer, …)
* Einsicht in die Kaufdaten deines Servers (dies umfasst den Transaktionsverlauf, aber niemals die persönlichen Daten
  von Abonnements)
* Upgrade oder Einrichtung von Abonnements für deinen Server
* KI-Guthaben auf deinem Server aufladen

Trusted Admins (ohne Co-Owner-Berechtigung) **können niemals**:

* neue Produkte (z. B. Eigener Bot, Modmail-Bot, Statistiken, …) auf deinem Server aktivieren.
* den Token eines auf SCNX erstellten Bots ändern.
* andere Trusted Admins deines Servers hinzufügen, ihre Berechtigungen ändern oder entfernen - Nur der Server-Eigentümer und Co-Owner
  können dies.
* Produkte vom Server entfernen oder den Server von SCNX entfernen.
* Käufe (z. B. Pläne, KI-Guthaben, …) in deinem Namen durchführen oder deine Zahlungsmethoden verwenden.
* die Erlaubnis für unsere Teammitglieder erteilen, potenziell zerstörerische Aktionen durchzuführen.

**Co-Owners können**:

* neue Produkte (z. B. Eigener Bot, Modmail-Bot, Statistiken, …) auf deinem Server aktivieren.
* den Token eines auf SCNX erstellten Bots ändern.
* andere Trusted Admins deines Servers hinzufügen, ihre Berechtigungen ändern oder entfernen - Nur der Server-Eigentümer und Co-Owner
  können dies.
* Produkte vom Server entfernen oder den Server von SCNX entfernen.
* die Erlaubnis für unsere Teammitglieder erteilen, potenziell zerstörerische Aktionen durchzuführen.

Co-Owner können niemals Produkte in deinen Namen kaufen oder deine Zahlungsmethoden verwenden.

Trusted-Admins können nicht mehr auf deinen Server zugreifen, wenn sie den Server verlassen (oder entfernt werden).

## Von Administratoren verwaltete Server auf SCNX {#administrator}

![Screenshot der Berechtigungstyp-Option im Dashboard](@site/docs/assets/scnx/guilds/trusted-admins/permissions-type-de.png)

Standardmäßig kann nur der Server-Eigentümer auf das SCNX-Dashboard zugreifen, wenn ein Eigentümer einen Server auf SCNX
hinzufügt. Wenn ein Server jedoch von einem Administrator zu SCNX hinzugefügt wurde, wird der Server von Administratoren
auf diesem Server verwaltet.

Wenn ein Server von Administratoren verwaltet wird, werden alle Mitglieder deines Servers, die die
Administratorberechtigung auf Discord haben, als Co-Owner behandelt. Das bedeutet, dass sie SCNX-Produkte einrichten,
aber auch den Server von SCNX entfernen können. Erfahre mehr in unserem [Berechtigungsabschnitt](#permissions).

Wenn du der Server-Eigentümer bist, kannst du diese Einstellung jederzeit in
deinen [Servereinstellungen](https://scnx.app/glink?page=settings) ändern. Bei einer Änderung zu „Alle
Administratoren“ erhalten alle Mitglieder auf deinem Server mit der Administratorberechtigung
die [Co-Owner-Berechtigung](#permissions) auf deinem Server. Bei einer Änderung zu „Nur Eigentümer“ verlieren alle
Mitglieder, die aufgrund ihrer Administratorberechtigung Zugriff erhalten haben, sofort den Zugriff auf das Dashboard.
Alle Trusted Admins, die von den Administratoren oder von dir konfiguriert wurden, können weiterhin auf deinen Server
zugreifen.

Obwohl wir versuchen, Änderungen auf deinem Server sofort zu synchronisieren, kann es eine Weile dauern, bis
Berechtigungsänderungen auf deinem Server widergespiegelt werden.

## Fehlerbehebung {#troubleshooting}

<details>
<summary>Wenn ich meine Nutzer-ID eingebe, zeigt SCNX mir einen "Fehler beim Abrufen des Nutzers" an</summary>

Die Discord Nutzer-ID des Nutzers, den du probierst hinzuzufügen, ist wahrscheinlich ungültig. Nutzer-IDs bestehen nur
aus Nummern und sind nicht das gleiche wie Tags, oder Nutzernamen. Um eine Discord Nutzer-ID zu erhalten, befolge diesen
<a href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-">offiziellen Discord-Support-Artikel, um eine ID zu erhalten</a>.
</details>

<details>
<summary>Wenn ich probiere einen Trusted Admin hinzuzufügen, steht da "Dieser Nutzer hat sich noch nie bei SCNX angemeldet…"</summary>

Das bedeutet das der Nutzer sich noch nie bei SCNX angemeldet hat.
<ul>
    <li>Sende ihm
diesen Link zum Log-In: <a href="https://scnx.app/de/auth/login">https://scnx.app/de/auth/login</a>. Sobald er bestätigt hat, dass er sich
bei SCNX angemeldet hat, versuche es bitte erneut.</li>
<li>Überprüfe bitte beim gewünschten Trusted Admin, das er/sie mit dem richtigen Account eingeloggt ist und lass ihn sich ab und anmelden.</li>
</ul>
Letztendlich kannst du keinen anderen Benutzer dazu zwingen, sich bei SCNX anzumelden. Es gibt keine Möglichkeit, einen Benutzer zu SCNX hinzuzufügen, ohne dass er sich vorher angemeldet hat.
</details>

<details>
<summary>Meinem Trusted Admin wird "Keine Rechte auf diesem Server" im Dashboard angezeigt</summary>

Bitte stelle sicher, das du dem Nutzer bzw. dem Trusted Admin die korrekten <a href="#permissions">Rechte</a> vergeben
hast. Du kannst die Berechtigungen deines Trusted Admins einfach bearbeiten indem du in die <a href="#manage">Sektion
über die Verwaltung von Trusted-Admins</a> gehst.
</details>

<details>
<summary>Mein Trusted-Admin kann keinen Eigenen Bot, Modmail-Bot, … einrichten.</summary>

Trusted Admins können keine sensiblen Aktionen, wie z. B. die Aktivierung und Deaktivierung von Produkten ausführen.
Bitte lies den Abschnitt <a href="#permissions">Berechtigungen</a>, um mehr über diese Einschränkungen zu erfahren. Der
Trusted Admin kann die Produkte bearbeiten, nachdem der Server-Besitzer sie freigegeben/eingestellt hat.
</details>


<details>
<summary>Mein Trusted Admin findet meinen Server nicht in seiner Liste</summary>
<ul>
    <li>Vergewissere dich, das der Nutzer im gleichen Account angemeldet ist, den du als Trusted Admin hinzugefügt hast.</li>
   <li>Bitte ihn, die Serverliste mit dem "Daten neuladen"-Knopf zu aktualisieren.</li>
    <li>Stelle sicher, dass der Trusted Admin ein Mitglied deines Servers ist, da nur Server-Mitglieder als Trusted Admin hinzugefügt werden können.</li>
    </ul>
</details>