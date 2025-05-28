import LevelSimulator from '/src/components/LevelSimulator';

# Level-System

Einfach zu bedienendes Level-System mit vielen Anpassungsmöglichkeiten!

<ModuleOverview moduleName="levels" />

## Funktionen {#features}

* Verleihe eine zufällige Menge an XP an Nutzer für Nachrichten, die sie senden, mit konfigurierbaren Mengen und Abklingzeit.
* Verleihe XP basierend auf der Zeit, die ein Nutzer [in einem Sprachkanal verbringt](#voice-xp).
* Wähle eine von [drei Levelkurven](#level-curves) oder [gib deine eigene ein](#custom-level-curve).
* Füge Rollen als [Levelbelohnungen](#level-rewards) hinzu.
* Konfiguriere [bestimmte Levelaufstiegsnachrichten](#level-up-messages) - du kannst bestimmte Nachrichten für bestimmte Level hinzufügen oder zufällige Nachrichten verwenden, damit dein Chat sich nicht zu sehr wiederholt!
* Füge [Multiplikator-Kanäle und -Rollen](#multiplicators) hinzu.
* Zeige die aktuelle [Rangliste](#live-leaderboard) live in einem Discord-Kanal an.
* Starte dein Level-System mit Level 0 und konfiguriere ein Maximallevel.
* [Verwalte XP und Level von Nutzern](#manage-levels) auf deinem Server.

## Einrichtung {#setup}

* Nachdem du [das Modul aktiviert hast](https://scnx.app/de/glink?page=bot/modules?query=levels), erhalten Nutzer XP basierend auf deiner [Konfiguration](#configuration) für das Senden von Nachrichten und das Verbringen von Zeit in Sprachkanälen.
* Der Bot kann nur XP für Nachrichten vergeben, auf die er Zugriff hat. Stelle daher sicher, dass er auf jedem Kanal die folgenden Berechtigungen hat: Kanal anzeigen, Nachrichtenverlauf anzeigen. Wenn du Levelaufstiegsnachrichten in einen Kanal senden möchtest, benötigt er außerdem die Berechtigungen Nachrichten senden und Links einbetten. Für das Vergeben von Rollenbelohnungen benötigt der Bot die Berechtigung Rollen verwalten. Die höchste Rolle des Bots muss außerdem höher sein als die Rolle, die der Bot zuweisen soll.
* Wenn du von einem anderen System wechselst, kannst du [Nutzer-XP und -Level manuell verwalten](#manage-levels) und XP sowie Level manuell von deinem alten System übertragen.
* Es sind viele weitere Funktionen enthalten, die verwendet werden können, um die Aktivität auf deinem Server zu fördern, wie z.B. [Multiplikator-Kanäle und -Rollen](#multiplicators) und [Live-Ranglisten](#live-leaderboard), die zusätzliche Einrichtung erfordern, aber du musst sie nicht konfigurieren, um das Modul zu verwenden.
* Du kannst auch Nachrichten anpassen und andere Optionen in deiner [Konfiguration](#configuration) einstellen.

## Verwendung {#usage}

* Nach dem [Einrichten des Moduls](#setup) erhalten Nutzer XP für das Senden von Nachrichten und für das Verbringen von Zeit in Sprachkanälen.
* Sobald ein Nutzer einen Schwellenwert erreicht, der auf deiner [anpassbaren Levelkurve](#level-curves) basiert, steigt er zum nächsten Level auf. Du kannst Belohnungen, wie Rollen, für das Erreichen bestimmter Level [konfigurieren](#configuration).
* Nutzer können ihre eigenen und die aktuellen XP anderer Nutzer überprüfen und sehen, wie viel XP für einen Levelaufstieg erforderlich ist, indem sie [`/profile`](#commands) verwenden. Eine vollständige Rangliste mit den XP aller Nutzer ist mit [`/leaderboard`](#commands) verfügbar oder eine [stets aktuelle Version davon kann in einen Kanal gesendet werden](#live-leaderboard).
* Um die XP und das Level eines Nutzers auf deinem Server manuell anzupassen, verwende die [`/manage-levels`](#commands) Befehle, nachdem du [Cheats in deiner Konfiguration aktiviert hast](#configuration).

### Live-Rangliste {#live-leaderboard}

Anstatt deine Nutzer jedes Mal [`/leaderboard`](#commands) ausführen zu lassen, wenn sie die Nutzer mit den meisten Leveln sehen wollen, kannst du eine Live-Rangliste aktivieren. Dies ist ein Kanal mit genau einer Nachricht darin, die alle fünf Minuten auf die aktuelle Rangliste aktualisiert wird. Das bedeutet, dass Nutzer keine Befehle ausführen oder eine Webseite besuchen müssen, um die Top-15-Nutzer auf deinem Server zu sehen. Sie können auch auf "Mein Level anzeigen" klicken, um ihr eigenes Level anzuzeigen, anstatt den Befehl [`/profile`](#commands) auszuführen. Die Antwort ist nur für den Nutzer selbst sichtbar.

Um die Live-Rangliste zu aktivieren, setze den "Live-Ranglisten-Kanal" in deiner [Konfiguration](#configuration) auf einen beliebigen leeren Kanal auf deinem Server, auf dem der Bot die Berechtigungen "Nachrichten senden", "Nachrichtenverlauf anzeigen" und "Kanal anzeigen" hat. Für die besten Ergebnisse richte deinen Kanal so ein, dass Nutzer keine Nachrichten in diesen Kanal senden können. Sobald konfiguriert, [lade deine Konfiguration neu](/docs/scnx/guilds/bots/#basics) und der Bot sendet eine Nachricht in den Kanal, die fortan alle 5 Minuten bearbeitet wird.

![Screenshot einer Live-Rangliste vom ScootKit Server](@site/docs/assets/custom-bot/modules/levels/live-leaderboard-de.png)

### Levelaufstiegsnachrichten {#level-up-messages}

Wenn ein Nutzer ein Level aufsteigt, wird standardmäßig eine Levelaufstiegsnachricht gesendet. Du kannst [konfigurieren](#configuration), in welchen Kanal die Levelaufstiegsnachricht gesendet werden soll (wenn keiner konfiguriert ist, wird sie in den aktuellen Kanal gesendet). Du kannst auch [konfigurieren](#configuration), dass keine Levelaufstiegsnachrichten gesendet werden sollen oder dass Levelaufstiegsnachrichten auf Aufstiege mit [Levelbelohnungen](#level-rewards) beschränkt werden.

Es gibt zwei Arten von Levelaufstiegen: Mit und ohne [Levelbelohnungen](#level-rewards), intern "normale" Levelaufstiege (ohne Levelbelohnungen) und "mit Belohnung" (für Levelaufstiege mit Nachrichtenbelohnungen) genannt. Aufgrund des Belohnungsaspekts haben beide Typen separate Konfigurationsfelder.

Standardmäßig wird die Levelaufstiegskonfiguration aus der [Nachrichtenkonfiguration](#configuration-strings) verwendet. Du kannst jedoch auch das Konfigurationsfeld "Zufällige Nachrichten" in deiner [Modulkonfiguration](#configuration-config) aktivieren. In diesem Fall wird eine Nachricht basierend auf ihrem Typ aus der [Konfigurationsdatei für zufällige Levelaufstiegsnachrichten](#configuration-random-levelup-messages) ausgewählt. Diese Funktion ist besonders nützlich, um das Leveln auf Servern unterhaltsam zu gestalten, da Levelaufstiegsnachrichten einzigartig sind und sich nicht wiederholen. Wenn für einen bestimmten erforderlichen Typ keine zufälligen Nachrichten verfügbar sind, greift der Bot auf die Konfiguration in deiner Nachrichtenkonfigurationsdatei zurück.

Zusätzlich möchtest du vielleicht die Levelaufstiegsnachricht für ein bestimmtes Level anpassen. Dies ist in der [Konfigurationsdatei für ausgewählte Nachrichten](#configuration-special-levelup-messages) möglich. Wenn ein Nutzer ein in dieser Konfigurationsdatei enthaltenes Level erreicht, wird die in dieser Datei konfigurierte Nachricht verwendet, unabhängig vom Typ des Levelaufstiegs. Dies ist besonders nützlich, wenn du Level hast, für die du spezielle Levelaufstiegsnachrichten haben möchtest. Es kann auch praktisch sein, wenn du eine Levelbelohnung hast, die nicht über das [Levelbelohnungssystem](#level-rewards) dieses Moduls angeboten wird, und du deine Belohnung in der Levelaufstiegsnachricht erklären möchtest.

### Level-Simulator {#level-simulator}

Die Menge an XP, die ein Nutzer benötigt, um ein bestimmtes Level zu erreichen, hängt von [deiner Levelkurve](#level-curves) und deiner [Levelkonfiguration](#configuration) ab. Um die Auswahl der richtigen Levelkurve (oder sogar das [Entwerfen deiner eigenen](#custom-level-curve)) zu erleichtern, haben wir unten einen Level-Simulator eingefügt. Gib einfach die Werte aus [deiner Konfiguration](#configuration) ein, um zu sehen, wie viel XP benötigt wird, um ein bestimmtes Level zu erreichen und wie viele Nachrichten ein durchschnittlicher Nutzer dafür benötigt. [XP für Sprachkanäle](#voice-xp) werden nicht berücksichtigt.

<LevelSimulator />

### XP für Sprachkanäle {#voice-xp}

Für jede Minute, die ein Nutzer mit anderen Mitgliedern in einem Sprachkanal verbringt, erhält er eine [konfigurierbare](#configuration) Menge an XP.
Es werden keine XP vergeben, wenn er allein in seinem Kanal ist oder stummgeschaltet oder taubgeschaltet ist. Zahlen werden gerundet und XP werden alle 15
Minuten oder beim Verlassen des Kanals vergeben. Dies motiviert deine Mitglieder, in Sprachkanälen aktiv und engagiert zu sein, und beugt Missbrauch des Systems vor.

Standardmäßig werden Levelaufstiegsnachrichten in den Textkanal des Sprachkanals gesendet, mit dem der Nutzer verbunden ist. Du kannst jedoch bei Bedarf einen separaten Kanal in deiner [Konfiguration](#configuration) angeben.

### Levelkurven {#level-curves}

Eine Levelkurve wird verwendet, um die Menge an XP zu berechnen, die erforderlich ist, um ein bestimmtes Level auf deinem Server zu erreichen. Du kannst sie dir als eine Formel vorstellen, die zur Berechnung dieser XP-Menge verwendet wird. Deine Wahl der Levelkurve beeinflusst maßgeblich, zusätzlich zu deiner [Levelkonfiguration](#configuration), wie schwer es für Nutzer ist, auf deinem Server aufzusteigen.

Wir liefern drei verschiedene Levelkurven im Bot mit, aber du kannst auch [deine eigene nutzen](#custom-level-curve).

Die folgenden Levelformeln sind verfügbar:

* **Einfache Lineare** Kurve (standardmäßig ausgewählt): Dies ist für die meisten Server die beste Option. Diese Levelkurve wurde sorgfältig ausgewählt, um den Bedürfnissen der meisten Server gerecht zu werden. Sie ist so konzipiert, dass sie einen einfachen Einstieg in das Level-System ermöglicht und es dennoch schwierig macht, höhere Level zu erreichen.\
  Die verwendete Formel lautet $f(x) = 750x + ((x-1) * 500)$ (wobei $x$ das zu berechnende Level ist) mit $f(x) = O(x)$
  (was bedeutet, dass die Levelkurve linear wächst).
* **Standard Lineare** Kurve: Dies ist eine vereinfachte Version der Einfachen Linearen Kurve und war der alte Standardwert, wird aber nicht mehr standardmäßig verwendet. Sie ermöglicht ein leichteres Leveln und kann für kleinere Server verwendet werden.\
  Die Formel lautet $f(x) = 750x$ (wobei $x$ das zu berechnende Level ist) mit $f(x) = O(x)$
  (was bedeutet, dass die Levelkurve linear wächst).
* **Exponentielle** Kurve: Diese Levelkurve ermöglicht Nutzern einen sehr einfachen Start, wird aber nach Level 14 sehr schwierig und praktisch unmöglich.\
  Die Formel lautet $f(x) = 350 * (x-1)^2$ (wobei $x$ das zu berechnende Level ist) mit $f(x) = O(x^2)$ (was bedeutet, dass die Funktion quadratisch skaliert).
* **Eigene Formel**: Du kannst eine beliebige mathematische Formel eingeben, um eine vollständige Anpassbarkeit zu ermöglichen. Weitere Informationen findest du im Abschnitt [eigene Levelkurve](#custom-level-curve).

Wenn du dich fragst, was die Formeln bedeuten oder deine eigene entwerfen möchtest, findest du weitere Details im
Abschnitt [eigene Levelkurve](#custom-level-curve).

Obwohl die Wahl einer Levelkurve schwierig erscheinen mag,
ist es normalerweise die beste Option, unsere **Einfache Lineare** Kurve zu verwenden, da sie sorgfältig kalibriert wurde, um für die meisten Server zu passen.
Wenn du dann feststellst, dass es zu einfach ist, wechsle zur **Exponentiellen** Kurve. Wenn es für deine Nutzer zu schwer ist, solltest du in Erwägung ziehen, zur **Einfachen Linearen** Kurve zu wechseln. Du kannst auch immer deine aktuelle Kurve beibehalten und stattdessen
die [XP-Mengen](#configuration) anpassen. Probiere verschiedene Konfigurationen und Levelkurven in
unserem [Level-Simulator](#level-simulator) aus.

Hier siehst du die Levelkurven im Vergleich:

![Levelkurven gezeichnet mit Geogebra. In Rot siehst du die Exponentielle Kurve. In Grün findest du die Einfache Lineare Kurve. Die Standard Lineare Kurve ist blau dargestellt.](@site/docs/assets/custom-bot/modules/levels/level-curves.png)

> **Vergleich der Levelkurven**: In Rot siehst du die Exponentielle Kurve. In Grün findest du die Einfache Lineare
> Kurve. Die Standard Lineare Kurve ist blau dargestellt. Du kannst dies auch
> [in Geogebra öffnen](https://www.geogebra.org/calculator/bwgc6dvp), wo du mehr herumspielen und
> [deine eigene Levelkurve](#custom-level-curve) zum Vergleich rendern kannst.

### Eigene Levelkurve {#custom-level-curve}

Du kannst eine eigene Levelkurve in deiner [Konfiguration](#configuration) eingeben.

Die Levelformel ist eine mathematische Darstellung deiner Levelkurve. Das Ergebnis der Formel gibt die Anzahl
der XP zurück, die für ein bestimmtes Level $x$ benötigt werden. Um beispielsweise Level $15$ mit unserer standardmäßigen linearen
Kurve ($f(x) = 750 * x$) zu berechnen, würdest du $15$ anstelle von $x$ in diese Levelformel eingeben. Dies würde
zu $f(15) = 750 * 15 = 11.250$ führen, was bedeutet, dass $11.250$ XP erforderlich sind, um Level $15$ zu erreichen.

Um deine eigene Levelformel zu entwerfen, musst du deine eigene mathematische Formel eingeben. Diese Formel sollte nur
die Variable $x$ (und keine anderen Variablen) verwenden, die das zu berechnende Level bedeuten soll. Das Ergebnis der Formel sollte
die erforderliche XP sein, um dieses Level x (deine Variable) zu erreichen.

Beispiele für gültige eigene Levelkurven: `x*750+((x-1)*500)` (unsere Standard-Levelkurve), `350 * (x-1)^2` (unsere
exponentielle Kurve).

### Levelbelohnungen {#level-rewards}

Wenn ein Nutzer ein bestimmtes Level erreicht, möchtest du ihm vielleicht eine Rolle geben, um seine Aktivität zu belohnen. Dies ist besonders
nützlich, um aktive Nutzer mit neuen Berechtigungen auf deinem Server zu belohnen, die Farbe ihres Nutzernamens zu ändern oder ihr
Level in ihrem Profil anzuzeigen.

Um diese Funktion zu nutzen, erstelle zuerst die Rollen, die du vergeben möchtest, wenn Nutzer ein bestimmtes Level erreichen. Danach
[passe deine Konfiguration](#configuration) mit diesen Rollen wie unten beschrieben an.

Gib im ersten Feld der Konfigurationsoption "Levelbelohnungen" das Level ein, bei dem der Nutzer die
Rolle erhalten soll. Wähle im zweiten Feld die Rolle aus, die dem Nutzer gewährt werden soll:

![Screenshot der SCNX Dashboard Levelbelohnungskonfiguration](@site/docs/assets/custom-bot/modules/levels/level-rewards-de.png)

Standardmäßig "stapeln" sich Levelrollen, was bedeutet, dass ein Nutzer mehrere Levelrollen haben kann. Um dieses
Verhalten zu deaktivieren und zu erzwingen, dass ein Nutzer jeweils nur eine Levelrolle haben kann, aktiviere die Konfigurationsoption "name" in
deiner [Konfiguration](#configuration).

### Multiplikator-Kanäle und -Rollen {#multiplicators}

Standardmäßig hat jeder Nutzer und jeder Kanal einen Multiplikationsfaktor von 1. Um Nutzer mit bestimmten Rollen (wie Server-Booster) zu belohnen, kannst du ihren Rollenmultiplikator erhöhen. Du könntest auch den Kanalmultiplikator eines Kanals erhöhen, in dem du die Aktivität steigern möchtest.

Die Menge der für jede Nachricht vergebenen XP wird nach folgender Formel berechnet (wobei `XPAmount` zufällig
basierend auf deinen [Konfigurationswerten](#configuration) ausgewählt wird):\
`XP = XPAmount * Kanalmultiplikator * RollenMultiplikator`, gerundet auf die nächste ganze Zahl.\
Das bedeutet, dass Nachrichten ohne Multiplikatoren nur die `XPAmount` XP erhalten, da sowohl der
`Kanalmultiplikator` als auch der `RollenMultiplikator` 1 sind.

Um Rollenmultiplikatoren zu konfigurieren, öffne deine [Konfiguration](#configuration) und füge ein Element zum Feld "XP-Multiplikationsrollen"
hinzu. Wähle dort im ersten Feld die Rolle aus, der du einen Multiplikator zuweisen möchtest, und gib im
zweiten Feld den Multiplikatorfaktor ein. Wenn ein Nutzer eine der konfigurierten Rollen hat, erhöht sich sein `RollenMultiplikator`-Faktor.
Wenn ein Nutzer mehr als eine der in diesem Feld konfigurierten Rollen hat, werden die Faktoren
jeder Rolle miteinander multipliziert. Aus diesem Grund empfehlen wir, Situationen zu vermeiden, bei denen Nutzer mehrere Multiplikationsrollen haben.

Die Rollenmultiplikatoren eines bestimmten Nutzers können mit dem Befehl [`/profile`](#commands) eingesehen werden.

Zusätzlich zum Rollenmultiplikator kannst du auch einen Kanalmultiplikator konfigurieren. Öffne
dazu deine [Konfiguration](#configuration) und füge
ein Element zum Feld "XP-Multiplikationskanäle" hinzu.
Wähle dort im ersten Feld den Kanal aus, dem du einen Multiplikator zuweisen möchtest, und gib im
zweiten Feld den Multiplikatorfaktor ein. Wenn ein Nutzer eine Nachricht in einem Kanal mit einem konfigurierten Multiplikationsfaktor
sendet, wird der `Kanalmultiplikator`-Faktor auf den konfigurierten Faktor gesetzt.

> **Beispiel 1**: Ein Nutzer hat eine Rolle, die mit dem Faktor $5$ konfiguriert wurde. Es gelten keine Kanalmultiplikatoren. Sein XP-Wert
> für diese Nachricht beträgt 50,
> aber aufgrund der Rolle mit Faktor fünf werden $250$ XP ($= 50 * 5 * 1$) vergeben.\
> **Beispiel 2**: Ein anderer hat drei Rollen, die jeweils mit den Faktoren $5$, $2$ und $3$ konfiguriert sind. Es gelten keine Kanalmultiplikatoren.
> Sein XP-Wert für seine Nachricht beträgt ebenfalls 50,
> aber aufgrund des Gesamtfaktors von ($5 * 2 * 3 = 30$) werden $1.500$ XP ($= 50 * 30 * 1$) vergeben.\
> **Beispiel 3**: Ein dritter Nutzer hat eine Rolle, die mit dem Faktor $1,5$ konfiguriert wurde. Ein Kanalmultiplikator von $1,9$
> gilt. Sein XP-Wert für diese Nachricht beträgt 50,
> aber aufgrund des Rollenfaktors $1,5$ und des Kanalfaktors $1,9$ werden $143$ ($50 * 1,5 * 1,9 = 142,5$, gerundet auf $143$) XP vergeben.

Du kannst jede gewünschte Kommazahl eingeben, aber wie du an diesen Beispielen sehen kannst, erzielen Werte zwischen $1$
und $2$ die besten Ergebnisse, da diese die XP-Menge im Vergleich zu Zahlen über $2$ nicht drastisch erhöhen. Eine solche Konfiguration funktioniert auch dann gut, wenn du Nutzern mit mehren Multiplikationsrollen hast.

Um bestimmte Rollen oder Kanäle vom Chatten abzuhalten (z. B. einen Spam-Kanal), erwäge die Eingabe eines Wertes unter $1$ als
Multiplikator, wodurch die Menge der vergebenen XP verringert wird. Wenn ein Kanal beispielsweise einen Multiplikatorfaktor von $0,5$
hat, erhalten Nutzer dort nur halb so viele XP wie in anderen Kanälen. Du kannst auch Kanäle oder
Kategorien [konfigurieren](#configuration), die vollständig vom Leveln ausgeschlossen werden sollen.

### Verwalten von Nutzer-XP und -Leveln auf deinem Server {#manage-levels}

:::info Bevor du dies tun kannst
Diese Befehle sind nur auf deinem Server verfügbar, wenn du die Option "Cheats"
[in deiner Konfiguration](#configuration) aktivierst. Wir empfehlen, diese Option deaktiviert zu lassen, da dies ein faireres
Level-System ohne Admin-Einmischung schafft.
:::

* Administratoren auf deinem Server können die XP eines bestimmten Nutzers oder des gesamten Servers mit dem [
  `/manage-levels reset-xp`](#commands) Befehl zurücksetzen.
* Administratoren auf deinem Server können das Level eines beliebigen Nutzers manuell hinzufügen, entfernen oder festlegen, indem sie den [
  `/manage-levels edit-level`](#commands) Befehl verwenden.
* Administratoren auf deinen Servern können die XP eines beliebigen Nutzers manuell hinzufügen, entfernen oder festlegen, indem sie
  den [`/manage-levels edit-xp`](#commands) Befehl verwenden.

Wir empfehlen, die Einmischung in das Level-System auf ein Minimum zu beschränken. Wenn Nutzer Diskrepanzen bei den XP-Werten von
Administratoren feststellen, könnten sie deinen Server beschuldigen, manipuliert zu sein, und zu Servern wechseln, bei denen sie dem Level-System vertrauen.
Aus diesem Grund empfehlen wir, dein Level-System so zu [konfigurieren](#configuration), dass reine Team-Kanäle
vom Leveln ausgeschlossen sind und die Cheats-Option deaktiviert bleibt, um zu verhindern, dass Administratoren dein Level-System
(und damit das Vertrauen deiner Community) manipulieren.

## Befehle {#commands}

<SlashCommandExplanation />

### Nutzerbefehle {#commands-user}

Diese Befehle können von Nutzern auf deinem Server verwendet werden.

| Befehl                             | Beschreibung                                                                                                                                                                   |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/profile `                        | Zeige dein Profil an, einschließlich deiner XP und Level sowie deiner Rollenmultiplikatoren (falls vorhanden).                                                                  |
| `/profile [user:<Nutzer>]`       | Zeige das Profil eines Nutzers an, einschließlich seiner XP und Level sowie seiner Rollenmultiplikatoren (falls vorhanden).                                                     |
| `/leaderboard [sort-by:<Boolean>]` | Zeige die Rangliste des Servers an, sortiert in Gruppen entweder nach XP oder Leveln, basierend auf entweder [deiner Konfiguration](#configuration) oder dem bereitgestellten `sort-by`-Parameter. |

### Administratorbefehle {#commands-administrator}

Diese Befehle können nur von Administratoren auf deinem Server verwendet werden, wenn die "Cheats"-[Konfigurationsoption](#configuration)
aktiviert ist.

| Befehl                                                        | Beschreibung                                                                                          |
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| `/manage-levels reset-xp [confirm:<Boolean>]`                 | Setzt die XP auf dem gesamten Server zurück, wenn der `confirm`-Parameter übergeben wird.             |
| `/manage-levels reset-xp user:<Nutzer> [confirm:<Boolean>]` | Setzt die XP eines Nutzers zurück, wenn der `confirm`-Parameter übergeben wird.                     |
| `/manage-levels edit-level add user:<Nutzer> value:<Wert> `   | Fügt eine Anzahl von Leveln (`Wert`) zu den Leveln eines Nutzers hinzu.                             |
| `/manage-levels edit-level remove user:<Nutzer> value:<Wert> `| Entfernt eine Anzahl von Leveln (`Wert`) von den Leveln eines Nutzers.                              |
| `/manage-levels edit-level set user:<Nutzer> value:<Wert> `   | Legt die Anzahl der Level (`Wert`) für einen Nutzer fest.                                           |
| `/manage-levels edit-xp add user:<Nutzer> value:<Wert>`       | Fügt eine Anzahl von XP (`Wert`) zu den XP eines Nutzers hinzu.                                     |
| `/manage-levels edit-xp remove user:<Nutzer> value:<Wert>`    | Entfernt eine Anzahl von XP (`Wert`) von den XP eines Nutzers.                                      |
| `/manage-levels edit-xp set user:<Nutzer> value:<Wert>`       | Legt die Anzahl der XP (`Wert`) fest, die ein Nutzer hat.                                           |

## Konfiguration {#configuration}

Wie alle Module auf SCNX ermöglicht dir unser Levelmodul, sein Verhalten vollständig anzupassen. Um eine einfachere Konfiguration zu ermöglichen,
haben wir die Konfiguration in mehrere Dateien aufgeteilt:

* [Hauptmodulkonfiguration](#configuration-config), wo du XP-Mengen, Levelkurven, Levelbelohnungen und vieles mehr konfigurieren kannst.
* [Nachrichtenkonfiguration](#configuration-strings), wo du Nachrichten und das Erscheinungsbild des Moduls anpassen kannst.
* [Zufällige Levelaufstiegsnachrichten](#configuration-random-levelup-messages), wo du Nachrichten hinzufügen kannst, die zufällig ausgewählt werden, wenn der Nutzer aufsteigt.
* [Ausgewählte Levelaufstiegsnachrichten](#configuration-special-levelup-messages), wo du die Levelaufstiegsnachricht für bestimmte Level überschreiben kannst.

### Modulkonfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du konfigurieren, wie viele XP Nutzer für das Senden von Nachrichten erhalten sollen und wie sich dein
Level-System verhalten soll. Du
kannst [diese Datei in deinem Dashboard öffnen](https://scnx.app/de/glink?page=bot/configuration?file=levels|configs/config).

| Feld                                                          | Beschreibung                                                                                                                                                                                                                                                                                                    |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mindestens vergebene XP für Nachrichten                       | Diese Menge an XP wird mindestens für jede gesendete Nachricht vergeben.                                                                                                                                                                                                                                          |
| Höchstens vergebene XP für Nachrichten                        | Diese Menge an XP wird höchstens für jede gesendete Nachricht vergeben.                                                                                                                                                                                                                                           |
| XP pro Sprachkanal-Minute                                     | Wie viele XP Nutzer pro Minute erhalten, wenn sie sich mit anderen Mitgliedern in einem Sprachkanal befinden. Unterstützt Kommazahlen. Weitere Informationen im Abschnitt [XP für Sprachkanäle](#voice-xp).                                                                                                   |
| Abklingzeit                                                   | In Millisekunden, wie viel Abklingzeit zwischen jeder XP-Vergabe an Nutzer für das Senden von Nachrichten liegt. Dies ist nützlich, um zu vermeiden, dass Nutzer für Spam belohnt werden.                                                                                                                         |
| Art der Levelkurve                                            | Die Levelkurve, die für dein Level-System verwendet werden soll. Weitere Informationen im Abschnitt [Levelkurven](#level-curves).                                                                                                                                                                                |
| eigene Levelformel (falls aktiviert)              | Deine eigene Levelformel. Weitere Informationen im Abschnitt [eigene Levelkurve](#custom-level-curve).                                                                                                                                                                                    |
| Welche Levelaufstiegsnachrichten sollen gesendet werden?      | Wenn dies auf "all" gesetzt ist, werden alle [Levelnachrichten](#level-up-messages) gesendet. Wenn du dies auf die Option "only-role-rewards" setzt, werden Levelaufstiegsnachrichten nur gesendet, wenn ein Levelaufstieg eine [Levelbelohnung](#level-rewards) beinhaltet. Wenn du dies auf "none" setzt, werden überhaupt keine Levelaufstiegsnachrichten gesendet. |
| Levelaufstiegskanal                                           | Standardmäßig werden Levelaufstiegsnachrichten in den Kanal gesendet, in dem der Nutzer den Levelaufstieg erreicht hat. Hier kannst du stattdessen einen Kanal auswählen, in den Levelaufstiegsnachrichten gesendet werden sollen.                                                                                          |
| Sortierkategorie der Rangliste                                | Standardmäßig enthält der Befehl [`/leaderboard`](#commands) Nutzer, die nach Leveln kategorisiert sind. Wenn dies unerwünscht ist, wähle die XP-Option, damit die Befehlsausgabe stattdessen nach XP sortiert wird.                                                                                                 |
| Ausgeschlossene Kanäle                                        | Füge hier Kanäle oder Kategorien hinzu, die vom Leveln ausgeschlossen werden sollen. Nutzer können in diesen Kanälen oder Kategorien keine XP für gesendete Nachrichten verdienen.                                                                                                                                    |
| Level-Belohnungsrollen                                        | Konfiguriere hier Levelbelohnungen für bestimmte Level. Erstes Feld: Level, Zweites Feld: Rolle. Weitere Informationen im Abschnitt [Levelbelohnungen](#level-rewards).                                                                                                                                               |
| XP-Multiplikationsrollen                                      | Ermöglicht es dir, Rollen zu konfigurieren, die einen höheren Multiplikationsfaktor als normal haben (Standardwert ist 1). Erfahre mehr im Abschnitt [Multiplikator-Kanäle und -Rollen](#multiplicators).                                                                                                             |
| XP-Multiplikationskanäle                                      | Ermöglicht es dir, Kanäle zu konfigurieren, die einen höheren Multiplikationsfaktor als normal haben (Standardwert ist 1). Erfahre mehr im Abschnitt [Multiplikator-Kanäle und -Rollen](#multiplicators).                                                                                                            |
| Nur höchste Levelrolle behalten                               | Wenn aktiviert, werden alle vorherigen Levelrollen eines Nutzers entfernt, wenn er ein neues Level erreicht.                                                                                                                                                                                                  |
| Level bei Austritt zurücksetzen                               | Wenn aktiviert, werden alle Level und die XP eines Nutzers gelöscht, wenn er deinen Server verlässt.                                                                                                                                                                                                           |
| Zufällige Nachrichten                                         | Wenn aktiviert, werden zufällige Levelnachrichten anstelle der standardmäßig konfigurierten Levelnachricht verwendet. Erfahre mehr im Abschnitt [Levelaufstiegsnachrichten](#level-up-messages).                                                                                                                       |
| Live-Rangliste                                                | Wenn festgelegt, sendet der Bot eine [Live-Rangliste](#live-leaderboard) in diesen Kanal.                                                                                                                                                                                                                         |
| Maximale Anzahl der in der Live-Rangliste angezeigten Nutzer| Dies ist die maximale Anzahl der Nutzer, die im Live-Ranglisten-Kanal angezeigt werden. /leaderboard zeigt weiterhin die vollständige Rangliste an.<br/>*Es können Werte kleiner oder gleich 25 eingegeben werden.* |
| Mit Level 0 starten?                                          | Standardmäßig starten Nutzer mit Level 1. Wenn du diese Option aktivierst, starten alle Nutzer mit Level Null. Dies ist nur eine kosmetische Einstellung und kann daher rückwirkend angewendet werden. [Levelformeln](#level-curves) verwenden weiterhin das Level-System ab Eins beginnend, dies wird den Nutzern jedoch nicht angezeigt. |
| Nutzernamen statt Erwähnungen in der Live-Rangliste verwenden? | Wenn aktiviert, verwendet der Bot den Tag der Nutzer im Ranglisten-Kanal-Embed anstelle ihrer Erwähnung.                                                                                                                                                                                                 |
| Cheats                                                        | Um [Level und XP manuell zu verwalten](#manage-levels), aktiviere diese Option. Dies macht dein Level-System unfair, wenn es von Admins missbraucht wird.                                                                                                                                                           |

### Nachrichtenkonfiguration {#configuration-strings}

In dieser Konfigurationsdatei kannst du die Nachrichten dieses Moduls konfigurieren und andere Einstellungen zum Erscheinungsbild des Moduls anpassen.
Du kannst [diese Datei in deinem Dashboard öffnen](https://scnx.app/de/glink?page=bot/configuration?file=levels|configs/strings).

| Feld                   | Beschreibung                                                                                                                                                                                                                                                             |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nutzer nicht gefunden  | Diese Nachricht wird gesendet, wenn jemand versucht, das Profil eines Nutzers zu überprüfen, der noch nie eine Nachricht gesendet hat und daher noch kein Profil besitzt.                                                                                                |
| Embed                  | Diese Konfigurationsoption passt an, wie der Befehl [`/profile`](#commands) aussehen soll. Du kannst die Feldwerte der Einbettung, die Farbe der Einbettung und mehr ändern.                                                                                             |
