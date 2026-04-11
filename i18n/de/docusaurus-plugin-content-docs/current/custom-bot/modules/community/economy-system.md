# Wirtschaftssystem

Ein einfaches Wirtschaftssystem, das ein Shop-System, Message-Drops und Befehle zum Geldverdienen enthält.

<ModuleOverview moduleName="economy-system" />

## Funktionen {#features}

* Nutzer können virtuelle Währung durch Arbeit, Verbrechen, das Sammeln von täglichen und wöchentlichen Belohnungen sowie durch Message-Drops verdienen.
* Ein Banksystem ermöglicht es Nutzern, Geldbeträge zur sicheren Verwahrung ein- und auszuzahlen.
* Raube andere Nutzer aus, um einen Prozentsatz ihres Guthabens zu stehlen.
* Ein Shop-System, in dem Nutzer mit ihrer verdienten Währung Rollen kaufen können.
* Shop-Verwalter können Shop-Artikel erstellen, bearbeiten und löschen.
* Eine automatisch aktualisierte Bestenliste zeigt die wohlhabendsten Nutzer an.
* Zufällige Message-Drops belohnen Nutzer beim Chatten mit Währung.
* Nutzer können Benachrichtigungen für Message-Drops ein- oder ausschalten.
* Admin-Befehle zum Hinzufügen, Entfernen oder Festlegen von Benutzerguthaben (optional, kann zur Gewährleistung der Fairness deaktiviert werden).

## Einrichtung {#setup}

1. Konfiguriere optional einen Bestenlisten-Kanal und einen Shop-Kanal in der [Modul-Konfiguration](#configuration-config) -- der Bot wird in diesen Kanälen automatisch aktualisierte Embeds senden und verwalten.
2. Stelle sicher, dass der Bot in den Bestenlisten- und Shop-Kanälen über die Berechtigungen `Kanal anzeigen`, `Nachrichten senden`, `Links einbetten` und `Nachrichten verwalten` verfügt.
3. Falls du das Shop-System mit Rollenbelohnungen nutzt, stelle sicher, dass der Bot über die Berechtigung `Rollen verwalten` verfügt und seine eigene Rolle in der Hierarchie über den zu vergebenden Rollen steht.
4. Konfiguriere den Währungsnamen, das Symbol und die Parameter zum Geldverdienen in der [Modul-Konfiguration](#configuration-config).

## Nutzung {#usage}

Nutzer können über den Befehl `/economy` mit dem Wirtschaftssystem interagieren:

* **Währung verdienen**: Nutze `/economy work`, `/economy crime`, `/economy daily` oder `/economy weekly`, um Geld zu verdienen. Jeder Befehl verfügt über eine eigene, konfigurierbare Abklingzeit (Cooldown).
* **Nutzer ausrauben**: Nutze `/economy rob`, um einen Prozentsatz des Guthabens eines anderen Nutzers zu stehlen (begrenzt auf ein konfigurierbares Maximum).
* **Guthaben prüfen**: Nutze `/economy balance`, um dein eigenes Guthaben oder das eines anderen Nutzers einzusehen (Barbestand, Bank und Gesamtguthaben).
* **Bankwesen**: Nutze `/economy deposit` und `/economy withdraw`, um Beträge zwischen deinem Barbestand und der Bank zu verschieben. Verwende „all" als Betrag, um dein gesamtes Guthaben zu transferieren.
* **Message-Drops**: Schalte Benachrichtigungen für Message-Drops mit `/economy msg_drop_msg enable` oder `/economy msg_drop_msg disable` ein oder aus.

Shop-Verwalter und Administratoren können den Shop verwalten:

* Nutze `/shop add`, um neue Artikel mit einem Namen, einer ID, einem Preis und einer Rollenbelohnung zu erstellen.
* Nutze `/shop edit`, um bestehende Artikel zu ändern.
* Nutze `/shop delete`, um Artikel zu entfernen.
* Nutzer können den Shop mit `/shop list` durchsuchen und Artikel mit `/shop buy` kaufen.

Falls Cheats aktiviert sind, können Administratoren `/economy add`, `/economy remove`, `/economy set` und `/economy destroy` nutzen, um das Guthaben von Nutzern zu verwalten.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
|---------|-------------|
| `/economy work` | Arbeite, um einen zufälligen Währungsbetrag (innerhalb der konfigurierten Minimum-/Maximum-Grenzen) zu verdienen. Unterliegt einer Abklingzeit. |
| `/economy crime` | Begehe ein Verbrechen mit einer Erfolgschance von 50 %. Bei Erfolg verdienst du Währung; bei Misserfolg verlierst du die Hälfte deines Guthabens. Unterliegt einer Abklingzeit. |
| `/economy rob user:<User>` | Raube einen anderen Nutzer aus, um einen Prozentsatz seines Guthabens zu stehlen (begrenzt auf ein konfiguriertes Maximum). Unterliegt einer Abklingzeit. |
| `/economy daily` | Sammle deine tägliche Währungsbelohnung ein. Kann einmal alle 24 Stunden genutzt werden. |
| `/economy weekly` | Sammle deine wöchentliche Währungsbelohnung ein. Kann einmal alle 7 Tage genutzt werden. |
| `/economy balance [user:<User>]` | Sieh dir dein eigenes Guthaben oder das eines anderen Nutzers an (Barbestand, Bank und Gesamtguthaben). |
| `/economy deposit amount:<Text>` | Zahle Währung von deinem Barbestand auf dein Bankkonto ein. Nutze „all", um alles einzuzahlen. |
| `/economy withdraw amount:<Text>` | Hebe Währung von deinem Bankkonto auf deinen Barbestand ab. Nutze „all", um alles abzuheben. |
| `/economy msg_drop_msg enable` | Aktiviere Benachrichtigungen über Nachrichten-Drops für dich selbst. |
| `/economy msg_drop_msg disable` | Deaktiviere Benachrichtigungen über Nachrichten-Drops für dich selbst (du erhältst weiterhin Drops, nur ohne Benachrichtigungen). |
| `/economy add user:<User> amount:<Integer>` | (Nur Administratoren) Füge dem Guthaben eines Nutzers Währung hinzu. Erfordert aktivierte Cheats. |
| `/economy remove user:<User> amount:<Integer>` | (Nur Administratoren) Ziehe Währung vom Guthaben eines Nutzers ab. Erfordert aktivierte Cheats. |
| `/economy set user:<User> balance:<Integer>` | (Nur Administratoren) Setze das Guthaben eines Nutzers auf einen spezifischen Betrag. Erfordert aktivierte Cheats. |
| `/economy destroy [confirm:<Boolean>]` | (Nur Administratoren) Zerstöre die gesamte Wirtschaft und entferne alle Nutzerdaten, Shop-Artikel und Abklingzeiten. Erfordert aktivierte Cheats. |
| `/shop add item-name:<Text> item-id:<Text> price:<Integer> role:<Role>` | (Nur Shop-Verwalter) Erstelle einen neuen Shop-Artikel mit einem Namen, einer ID, einem Preis und einer Rollen-Belohnung. |
| `/shop buy [item-name:<Text>] [item-id:<Text>]` | Kaufe einen Artikel aus dem Shop nach Name oder ID. Die mit dem Artikel verknüpfte Rolle wird dir zugewiesen. |
| `/shop list` | Sieh dir alle verfügbaren Artikel im Shop an. |
| `/shop delete [item-name:<Text>] [item-id:<Text>]` | (Nur Shop-Verwalter) Lösche einen Shop-Artikel nach Name oder ID. |
| `/shop edit item-id:<Text> [item-new-name:<Text>] [new-price:<Integer>] [new-role:<Role>]` | (Nur Shop-Verwalter) Bearbeite den Namen, den Preis oder die Rolle eines existierenden Shop-Artikels. |

## Konfiguration {#configuration}

Dieses Modul verfügt über mehrere Konfigurationsdateien. Bitte überprüfe diese unten.

### Modul-Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du das Modul einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=economy-system%7Cconfigs%2Fconfig).

| Feld | Beschreibung |
|-------|-------------|
| Administratoren | Nutzer-IDs der Wirtschafts-Administratoren, die nur für Admins zugängliche Aktionen ausführen können (z. B. das Verwalten von Nutzerguthaben). Bot-Betreiber haben diese Berechtigung immer. |
| Cheats erlauben | Erlaube Administratoren, die Guthaben von Nutzern zu bearbeiten. Für ein faires System nicht empfohlen. |
| Eigenen Kontostand bearbeiten erlauben | Erlaube Administratoren, ihr eigenes Guthaben zu bearbeiten. Nicht empfohlen. |
| Shop-Verwaltung | Nutzer-IDs der Shop-Verwalter, die Shop-Artikel erstellen, bearbeiten und löschen können. Bot-Betreiber haben diese Berechtigung immer. |
| Start Geld | Der Währungsbetrag, den neue Nutzer erhalten, wenn sie das erste Mal mit der Wirtschaft interagieren. |
| Währungsbezeichnung | Der Name deiner virtuellen Währung. |
| Symbol der Währung | Das Symbol oder Emoji, das neben den Währungsbeträgen angezeigt wird. |
| Maximaler Arbeits Lohn | Der maximale Währungsbetrag, der mit einem einzigen Work-Befehl verdient werden kann. |
| Minimaler Arbeits Lohn | Der minimale Währungsbetrag, der mit einem einzigen Work-Befehl verdient werden kann. |
| Arbeits Cooldown | Die Abklingzeit (in Minuten) zwischen den einzelnen Anwendungen des Work-Befehls. |
| Maximales Verbrechens Geld | Der maximale Währungsbetrag, der bei einem erfolgreichen Verbrechen verdient werden kann. |
| Minimales Verbrechens Geld | Der minimale Währungsbetrag, der bei einem erfolgreichen Verbrechen verdient werden kann. |
| Verbrechens Cooldown | Die Abklingzeit (in Minuten) zwischen den einzelnen Anwendungen des Crime-Befehls. |
| Maximale Raub Beute | Der maximale Währungsbetrag, der bei einem einzigen Raub gestohlen werden kann. |
| Raub Prozent | Der Prozentsatz des Guthabens eines Nutzers, der bei einem Raub gestohlen werden kann. |
| Raub Cooldown | Die Abklingzeit (in Minuten) zwischen den einzelnen Anwendungen des Rob-Befehls. |
| Leaderboard-Kanal | Der Kanal, in dem die automatisch aktualisierte Rangliste (Leaderboard Embed) angezeigt wird. Leer lassen, um diese Funktion zu deaktivieren. |
| Shop Kanal | Der Kanal, in dem das Shop-Embed angezeigt wird. Leer lassen, um diese Funktion zu deaktivieren. |
| Ignorierte Message-Drop-Kanäle | Kanäle, in denen Nachrichten-Drops deaktiviert sind. |
| Nachrichten-Drop-Chance | Die Wahrscheinlichkeit, einen Nachrichten-Drop zu erhalten (1 zu diesem Wert). Auf 0 setzen, um Nachrichten-Drops zu deaktivieren. |
| Maximaler Nachrichten-Drop-Betrag | Der maximale Währungsbetrag, der in einem Nachrichten-Drop enthalten sein kann. |
| Minimaler Nachrichten-Drop-Betrag | Der minimale Währungsbetrag, der in einem Nachrichten-Drop enthalten sein kann. |
| Tägliche Belohnung | Der Währungsbetrag, der als tägliche Belohnung ausgegeben wird. |
| Wöchentliche Belohnung | Der Währungsbetrag, der als wöchentliche Belohnung ausgegeben wird. |
| Öffentliche Command-Antworten | Wenn diese Option aktiviert ist, sind die Antworten auf Befehle für alle sichtbar und nicht nur für den Nutzer, der den Befehl ausgeführt hat. |

### Modul-Nachrichten {#configuration-strings}

In dieser Konfigurationsdatei kannst du die Nachrichten anpassen, die von diesem Modul gesendet werden. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=economy-system%7Cconfigs%2Fstrings).

| Feld | Beschreibung |
|-------|-------------|
| Nicht gefunden Nachricht | Die Nachricht, die angezeigt wird, wenn ein Shop-Artikel nicht gefunden werden kann. |
| Nicht genug Geld | Die Nachricht, die angezeigt wird, wenn ein Nutzer nicht über genügend Guthaben verfügt, um einen Gegenstand zu kaufen. |
| Shop-Nachricht | Das Embed, das im Shop-Kanal angezeigt wird und alle verfügbaren Artikel auflistet. |
| Item Text | Das Format, das für die Darstellung der einzelnen Artikel in der Shop-Nachricht verwendet wird. |
| Cooldown | Die Nachricht, die angezeigt wird, wenn ein Nutzer versucht, einen Befehl zu verwenden, während die Abklingzeit noch aktiv ist. |
| Arbeit-Erfolgsnachrichten | Eine Liste von Nachrichten, die zufällig angezeigt werden, wenn ein Nutzer erfolgreich die Arbeit abgeschlossen hat. |
| Verbrechen-Erfolgsnachrichten | Eine Liste von Nachrichten, die zufällig angezeigt werden, wenn ein Nutzer erfolgreich ein Verbrechen begangen hat. |
| Verbrechen-Fehlschlagnachrichten | Eine Liste von Nachrichten, die zufällig angezeigt werden, wenn ein Nutzer beim Begehen eines Verbrechens scheitert. |
| Raub-Erfolgsnachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer erfolgreich einen anderen Nutzer ausraubt. |
| Ranglisten-Embed | Passe das Erscheinungsbild des Leaderboard-Embeds an. |
| Tägliche-Belohnung-Nachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer erfolgreich seine tägliche Belohnung abgeholt hat. |
| Wöchentliche-Belohnung-Nachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer erfolgreich seine wöchentliche Belohnung abgeholt hat. |
| Kontostand-Antwort | Das Embed, das angezeigt wird, wenn ein Nutzer sein aktuelles Guthaben abfragt. |
| Nutzer nicht gefunden | Die Nachricht, die angezeigt wird, wenn der angegebene Nutzer nicht gefunden werden konnte. |
| Kaufnachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer erfolgreich einen Artikel im Shop gekauft hat. |
| Item-erstellt-Nachricht | Die Nachricht, die angezeigt wird, wenn ein neuer Shop-Artikel erfolgreich erstellt wurde. |
| Item-gelöscht-Nachricht | Die Nachricht, die angezeigt wird, wenn ein Shop-Artikel erfolgreich gelöscht wurde. |
| Item-bearbeitet-Nachricht | Die Nachricht, die angezeigt wird, wenn ein Shop-Artikel erfolgreich bearbeitet wurde. |
| Einzahlungsnachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer erfolgreich Währung auf sein Bankkonto einzahlt. |
| Abhebungsnachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer erfolgreich Geld von seinem Bankkonto abhebt. |
| Nachrichten-Drop-Nachricht | Eine Liste von Nachrichten, die zufällig angezeigt werden, wenn ein Nutzer einen zufälligen Message Drop im Chat findet. |
| Erneutkaufen Nachricht | Die Nachricht, die angezeigt wird, wenn ein Nutzer versucht, einen Artikel zu kaufen, den er bereits in seinem Inventar besitzt. |
| mehrere Treffer | Die Nachricht, die angezeigt wird, wenn eine Suchanfrage im Shop mehrere Treffer erzielt hat und der Nutzer eine genauere Auswahl treffen muss. |
| keine Treffer | Die Nachricht, die angezeigt wird, wenn kein Artikel im Shop mit dem eingegebenen Suchbegriff übereinstimmt. |
| Item Duplikat | Die Nachricht, die angezeigt wird, wenn versucht wird, einen Shop-Artikel mit einer ID oder einem Namen zu erstellen, die bereits im System existieren. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Das Leaderboard- oder Shop-Embed wird nicht angezeigt</summary>
  <ul>
    <li>Stelle sicher, dass der konfigurierte Kanal existiert und der Bot über die Berechtigungen <code>Kanal anzeigen</code>, <code>Nachrichten senden</code>, <code>Links einbetten</code>, und <code>Nachrichten verwalten</code> verfügt.</li>
    <li>Vergewissere dich, dass die Kanal-ID korrekt konfiguriert ist.</li>
  </ul>
</details>

<details>
  <summary>Shop-Rollen werden nicht vergeben</summary>
  <ul>
    <li>Stelle sicher, dass der Bot über die Berechtigung <code>Rollen verwalten</code> verfügt.</li>
    <li>Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie des Servers über den Rollen steht, die als Belohnung für Shop-Artikel konfiguriert sind.</li>
  </ul>
</details>

<details>
  <summary>Admin-Befehle sind nicht verfügbar</summary>

 Admin-Befehle (add, remove, set, destroy) sind nur verfügbar, wenn „Cheats erlauben" in der Modulkonfiguration aktiviert ist. Aktiviere diese Einstellung, wenn Administratoren die Kontostände der Benutzer verwalten sollen.
</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden gespeichert:

Für jeden Nutzer:
* Die Discord-Benutzer-ID
* Der aktuelle Kontostand und Bankbetrag
* Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Für jeden Cooldown:
* Die Discord-Benutzer-ID und der Befehlsname
* Der Zeitstempel der letzten Befehlsnutzung
* Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Für jeden Shop-Artikel:
* Die Artikel-ID, der Name, der Preis und die zugewiesene Rolle
* Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Für jede Abmeldung von Nachrichten-Drops:
* Die Discord-Benutzer-ID von Benutzern, die Drop-Benachrichtigungen deaktiviert haben
* Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
