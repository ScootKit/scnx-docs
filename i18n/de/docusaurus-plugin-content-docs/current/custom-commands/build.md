---
sidebar_position: 1
title: "Bauen"
description: "Wie das Bauen einer Automation mit Custom Commands V3 von Anfang bis Ende funktioniert, welche Seiten du in welcher Reihenfolge lesen solltest und Tipps dazu, wie sich der Editor wirklich verhält."
---

# Bauen {#build}

:::caution Diese Dokumentation ändert sich während der Beta
Custom Commands V3 ist in einer aktiven Beta, und wir ändern unterwegs noch vieles. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation. Bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Jede Automation, die du baust, ist ein Flow: ein Trigger und danach Schritte, die von oben nach unten laufen. Du baust ihn im Flow-Editor, speicherst ihn als Entwurf, probierst ihn mit einem Testlauf aus und schaltest ihn dann ein. Ab diesem Moment führt dein Bot ihn jedes Mal aus, wenn der Trigger auslöst.

## Was du lesen solltest, der Reihe nach {#order}

1. [Flows & der Editor](/de/docs/custom-commands/flows) - der Editor, Schritte hinzufügen, Verzweigungen und Schleifen, Speichern und Einschalten von Flows.
2. [Trigger](/de/docs/custom-commands/triggers) - alle Wege, wie ein Flow starten kann, und wie du den richtigen auswählst.
3. [Werte, Variablen & Nachrichten](/de/docs/custom-commands/variables) - Werte von einem Schritt zum nächsten und in deine Nachrichten weitergeben.
4. [Module & Vorlagen](/de/docs/custom-commands/modules) - Flows bündeln, die zusammengehören, mit einer Einstellungsseite für Admins.
5. [Integrationen](/de/docs/custom-commands/integrations) - andere Dienste aufrufen, Webhooks empfangen und vorgefertigte Dienste wie Twitch oder GitHub nutzen. Um Zahlungen anzunehmen, folge [Mit Stripe verkaufen](/de/docs/custom-commands/sell-with-stripe).
6. [Mit KI bauen (MCP)](/de/docs/custom-commands/mcp) - lass Claude oder ChatGPT Flows für dich schreiben, prüfen und debuggen.

Neu hier? Mach das [Tutorial zum ersten Flow](/de/docs/custom-commands/quickstart), bevor du weiterliest.

## So gehst du eine neue Automation an {#approach}

1. **Fang beim Trigger an.** Frag dich, was die Automation starten soll: ein Befehl, den jemand ausführt, ein Button, etwas auf deinem Server oder ein Zeitplan. Daraus ergibt sich der Trigger, und der Trigger bestimmt, mit welchen Werten du arbeiten kannst.
2. **Such nach einer Vorlage.** Wenn eine der Vorlagen nah dran ist, starte mit ihr und pass sie an. Ganze Systeme von anderen Erstellern findest du auf dem [Marktplatz](https://scnx.app/marketplace).
3. **Wähl die Schritte aus.** Schreib in einfachen Worten auf, was passieren soll, und such dann in der Aktionsauswahl für jede Zeile einen Schritt. Such danach, was du tun willst, zum Beispiel "senden", "Rolle" oder "Nickname".
4. **Verbinde die Werte.** Fülle jede Eingabe mit einem festen Wert oder mit einem Wert aus dem Trigger oder einem früheren Schritt.
5. **Teste.** Speichere den Entwurf und klicke auf **Testlauf**. Es wird nichts gesendet oder geändert, und du siehst, was jeder Schritt getan hätte.
6. **Schalte ihn ein.** Stell den Schalter auf **Aktiv** und speichere. Probier ihn dann einmal echt aus und sieh unter **Letzte Ausführungen** nach.

## Tipps {#tips}

- **Entwürfe lassen sich auch mit Problemen speichern.** Nur zum Einschalten eines Flows muss der Tab **Probleme** leer sein, also speichere oft.
- **Ein Testlauf zeigt jeden Schritt, eine echte Ausführung nicht.** Der Ausführungsverlauf einer Live-Ausführung zeigt ihren Status und den Schritt, der fehlgeschlagen ist. Für eine Ansicht Schritt für Schritt wiederhole die Ausführung als **Testlauf**.
- **Interaktionen brauchen schnell eine Antwort.** Bei Slash-Commands, Buttons, Dropdowns und Modals erwartet Discord innerhalb von etwa drei Sekunden eine Antwort. Antworte zuerst oder füge vor langsamen Schritten **Interaktionsantwort aufschieben** ein.
- **Filtere vielbeschäftigte Trigger früh.** Ein Flow mit **Nachricht erstellt** läuft bei jeder Nachricht. Nutze die eigenen Einstellungen des Triggers, wie **Kanäle** und **Vergleichstyp**, bevor du zu einem Schritt **Wenn** greifst.
- **Kopiere Schritte zwischen Flows** mit `Ctrl+C` und `Ctrl+V`. Der Editor sagt dir, welche Eingaben im neuen Flow einen neuen Wert brauchen.
- **Leg Kanäle und Rollen in die Moduleinstellungen**, wenn andere Admins sie ändern sollen oder wenn du das Modul vielleicht teilen willst. Fest eingetragene Kanäle lassen sich nicht auf andere Server übertragen.
- **Benenne deine Schritte.** Ein Name wie "VIP-Rolle prüfen" macht ein großes Diagramm viel leichter lesbar.
- **Halte deinen Bot online, während du baust.** Der Editor lädt Kanäle, Rollen, Speicherfelder und die letzten Ausführungen von deinem Bot.
