---
title: "Ankündigung von XP-Multiplikatoren, Level-Simulator & benutzerdefinierten Formeln!"
description: Gib deinem SCNX Levelsystem einen Schub! Entdecke neue XP-Multiplikatoren, einen neuen Level-Simulator & benutzerdefinierte Level-Formeln, um das Discord-Server-Leveling vollständig anzupassen und das Nutzer-Engagement zu steigern.
slug: 2025-custom-level-curves
date: 2025-05-28T10:00
unlisted: true
authors:
  - scderox
tags:
  - Newsletter
  - SCNX
  - Levelsystem 
---

Hallo zusammen,

Das SCNX Levelsystem war schon immer ein leistungsstarkes Werkzeug, um eure Community einzubinden und Aktivität zu belohnen. Wir freuen uns riesig,
drei bahnbrechende neue Funktionen anzukündigen, die beispiellose Anpassungsmöglichkeiten und Kontrolle darüber bieten, wie XP verdient und
wie Level berechnet werden: **XP-Multiplikatoren, ein neuer Level-Simulator und benutzerdefinierte Level-Formeln!**

<!-- truncate -->

Diese Erweiterungen wurden entwickelt, um euch die ultimative Flexibilität zu geben, das Leveling-Erlebnis maßzuschneidern, sodass es perfekt
zur einzigartigen Atmosphäre und Community-Dynamik eures Servers passt.

## Engagement durch Feinabstimmung optimieren mit XP-Multiplikatoren {#xp-multiplicators}

Wolltest du schon immer Nutzern mit bestimmten Rollen, wie Server-Boostern oder Event-Gewinnern, einen kleinen zusätzlichen XP-Schub geben? Oder
vielleicht die Aktivität in einem bestimmten Kanal fördern? Mit XP-Multiplikatoren ist das jetzt möglich!

Standardmäßig hat jeder Nutzer und jeder Kanal einen Multiplikationsfaktor von 1. Diese verbesserte Funktion ermöglicht es euch:

* **Rollen-Multiplikatoren zuzuweisen**: Gewährt Nutzern mit bestimmten Rollen einen XP-Bonus für ihre Nachrichten. Wenn ein Nutzer mehrere Rollen
  mit Multiplikatoren hat, werden diese Faktoren miteinander multipliziert, was erhebliche Boni für eure engagiertesten Mitglieder bietet!
* **Channel-Multiplikatoren festzulegen**: Bestimmt Kanäle, in denen Nachrichten mehr (oder weniger!) XP einbringen. Wollt ihr
  die Konversation in eurem #general-chat anheizen? Gebt ihm einen 1,5-fachen Multiplikator! Müsst ihr das XP-Farmen in einem #bot-spam-Kanal sanft
  unterbinden? Ein 0,5-facher Multiplikator wird hier helfen.

Beispielszenarien:

* **VIP-Boost**: Ein Nutzer mit einer speziellen „VIP“-Rolle, für die ein XP-Multiplikator konfiguriert ist, sendet eine Nachricht. Aufgrund
  seiner Rolle erhält er für diese Nachricht zusätzliche XP im Vergleich zu einem Nutzer ohne die VIP-Rolle.
* **Hervorgehobener Kanal & Booster**: Ein Nutzer, der ein Server-Booster ist (was mit einem eigenen rollenbasierten XP-Multiplikator einhergeht),
  postet in einem Kanal, den ihr als „hervorgehobenen“ Kanal festgelegt habt (der einen kanalbasierten XP-Multiplikator hat). Da sowohl seine
  Rolle als auch der Kanal einen XP-Schub bieten, verdient er eine noch größere Menge an XP für seine Nachricht an diesem spezifischen Ort.
* **Mehrere Rollen**: Wenn ein Nutzer mehrere verschiedene Rollen innehat und jede dieser Rollen ihren eigenen XP-Multiplikator hat,
  kombinieren sich all diese Multiplikatoren effektiv. Dies führt zu einem deutlich größeren Gesamt-XP-Boost für jede Nachricht, die er sendet,
  und würdigt so seine vielfältigen Beiträge oder seinen Status auf dem Server.

Wir empfehlen, moderate Werte für Boni zu verwenden, um die Dinge ausgewogen zu halten, aber die Macht liegt in euren Händen!

Schaut euch unsere vollständige und neu
verbesserte [Levelsystem-Dokumentation](/docs/custom-bot/modules/community/levels/#multiplicators) für weitere Informationen und
Konfigurationsanweisungen an!

## Gestalte deinen perfekten Fortschritt: Benutzerdefinierte Level-Formeln {#level-curve}

Obwohl unsere voreingestellten Levelkurven (Easy Linear, Default Linear, Exponentiation) für viele Server geeignet sind, verstehen wir, dass einige
Admins absolute Kontrolle wünschen. Wir präsentieren: **Benutzerdefinierte Level-Formeln**!

Diese Funktion ermöglicht es euch, die exakte mathematische Formel zu definieren, die verwendet wird, um die benötigten XP zum Erreichen eines bestimmten
Levels zu berechnen. Ihr seid nicht länger auf unsere Auswahl beschränkt; ihr könnt einen Fortschritt entwerfen, der so sanft oder so steil ist, wie ihr
es wünscht.

**So funktioniert es**:

Ihr gebt eine mathematische Formel an, bei der die Variable x das zu berechnende Level darstellt. Das Ergebnis der
Formel ist die Gesamtmenge an XP, die benötigt wird, um dieses Level x zu erreichen.

Beispiele für gültige benutzerdefinierte Levelkurven:

* Unsere „Easy Linear“-Kurve: `750x+((x−1)`
* Unsere „Exponentiation“-Kurve: `350^2(x-1)`
* Eine einfache benutzerdefinierte Kurve: `1000*1.5*x`

**Konfiguration**:
Wählt in der „Modulkonfiguration“ unter „Art der Levelkurve“ die Option „Benutzerdefinierte Formel“. Gebt dann euer mathematisches
Meisterwerk in das Feld „Benutzerdefinierte Level-Formel (falls aktiviert)“ ein.

Erfahrt mehr über unsere [integrierten Levelkurven](/docs/custom-bot/modules/community/levels/#level-curves) und
über [benutzerdefinierte Levelkurven](/docs/custom-bot/modules/community/levels/#custom-level-curve) für weitere Informationen und
Konfigurationsanweisungen!

## Visualisiere deinen Erfolg: Entdecke den brandneuen Level-Simulator! {#level-simulator}

Du hast also deine vermeintlich perfekte benutzerdefinierte Level-Formel erstellt oder versuchst vielleicht, dich zwischen unseren
Standardkurven mit deinen einzigartigen XP-Einstellungen zu entscheiden. Aber wie wird es sich tatsächlich für deine Nutzer anfühlen? Wie viele Nachrichten
werden nötig sein, um diese Meilenstein-Level zu erreichen?

Hör auf zu raten und beginne zu simulieren! Wir freuen uns riesig, euch ein weiteres fantastisches neues Werkzeug für euer SCNX-Arsenal vorzustellen:
den **[Level-Simulator](/docs/custom-bot/modules/community/levels/#level-simulator)**!

Diese leistungsstarke, interaktive Funktion wurde entwickelt, um euch eine klare, praktische Vorschau eures Level-Fortschritts zu geben.
Stellt ihn euch als eure persönliche Testumgebung für alles rund um XP und Level vor. Indem ihr einfach die Werte aus eurer
Modulkonfiguration eingebt (wie die durchschnittlich pro Nachricht vergebenen XP) und eine Levelkurve auswählt – sei es eine unserer
Standardkurven oder eure eigene benutzerdefinierte Kreation – zeigt euch der Simulator sofort:

* **Benötigte XP pro Level**: Seht genau, wie viele kumulative XP erforderlich sind, damit ein Nutzer ein bestimmtes von euch eingegebenes Level erreicht.
* **Geschätzte Nachrichten bis zum Levelaufstieg**: Erhaltet eine greifbare Vorstellung vom erforderlichen Aufwand, indem ihr eine ungefähre Anzahl seht, wie viele
  Nachrichten ein Nutzer senden müsste, um dieses Level zu erreichen.

### Warum der Level-Simulator dein neuer bester Freund ist

Der Level-Simulator ist mehr als nur ein Rechner; er ist ein unverzichtbares Werkzeug zur Feinabstimmung der Engagement-Strategie eures Servers:

* **Perfektionierung benutzerdefinierter Formeln**: Beim Entwerfen eurer eigenen Levelkurve ist der Simulator von unschätzbarem Wert. Ihr könnt sofort sehen, ob
  eure Formel einen sanften Fortschritt erzeugt, ob sie zu schnell zu schwierig wird oder ob sie vielleicht zu einfach ist. Optimiert
  eure Formel, simuliert erneut und iteriert, bis es sich genau richtig anfühlt.
* **Die richtige Standardkurve wählen**: Selbst wenn ihr keine benutzerdefinierte Formel verwendet, hilft euch der Simulator zu verstehen, wie
  sich unsere Kurven „Easy Linear“, „Default Linear“ oder „Exponentiation“ mit euren spezifischen XP-pro-Nachricht-Einstellungen verhalten werden.
  Den Grind ausbalancieren: Vermeidet es, euer Levelsystem zu einer frustrierenden Plackerei zu machen oder so schnell, dass Level bedeutungslos erscheinen. Der
  Simulator hilft euch, diesen idealen Mittelweg zu finden.
* **Fundierte Entscheidungen**: Nehmt Änderungen an euren XP-Einstellungen oder eurer Levelkurve mit Zuversicht vor, da ihr zuvor eine Prognose
  ihrer Auswirkungen gesehen habt.
* **Spart Zeit & Frustration**: Anstatt Tage oder Wochen zu warten, um zu sehen, wie euer neues Setup live funktioniert, und dann
  nachjustieren (und möglicherweise den Fortschritt zurücksetzen) zu müssen, könnt ihr euch vorab ein sehr gutes Bild machen.

* **So wird er verwendet**:
  Ihr findet den Level-Simulator auf der [Dokumentationsseite des Level-Moduls](/docs/custom-bot/modules/community/levels/#level-simulator). Gebt einfach eure gewünschten Konfigurationswerte
  an den entsprechenden Stellen ein, wählt oder gebt eure Levelkurve ein und seht euch die Ergebnisse an! Es ist eine intuitive Methode, um ohne
  reale Konsequenzen auf eurem Server zu experimentieren.

Eine kurze Anmerkung:
Derzeit konzentriert sich der Level-Simulator auf XP, die durch Nachrichten gewonnen werden. Die XP, die für die in Sprachkanälen verbrachte Zeit vergeben werden, sind eine
separate Berechnung und werden nicht in die Schätzungen des Simulators einbezogen.

Wir empfehlen euch dringend, den Level-Simulator zu eurem bevorzugten Werkzeug zu machen, wenn ihr euer Levelsystem einrichtet oder anpasst.
Gepaart mit der Flexibilität von benutzerdefinierten Level-Formeln und XP-Multiplikatoren gibt er euch eine beispiellose Kontrolle, um ein
wirklich ansprechendes und lohnendes Erlebnis für eure Community zu gestalten.

## Legt noch heute los! {#start}

Diese neuen Funktionen wurden entwickelt, um euch zu befähigen, ein wirklich einzigartiges und ansprechendes Levelsystem auf eurem
SCNX-betriebenen Discord-Server zu erstellen. Taucht in euer Modulkonfigurations-Dashboard ein, experimentiert mit Multiplikatoren und gestaltet die
perfekte Levelkurve, um eure Community auf eine ganz eigene Weise zu belohnen.

Wir können es kaum erwarten zu sehen, auf welche kreative Weise ihr XP-Multiplikatoren und benutzerdefinierte Level-Formeln nutzen werdet! Wie immer findet ihr alle
Details in der [vollständigen Dokumentation](/docs/custom-bot/modules/community/levels/).