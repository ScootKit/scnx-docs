---
sidebar_position: 5
title: Pre-Ticket-Gatekeeper
description: Lass die KI eine Frage beantworten, bevor ein Modmail- oder Ticket-System-Ticket geöffnet wird, um einfache Fragen abzufangen und das Team zu entlasten.
---

# Pre-Ticket-Gatekeeper

Der Gatekeeper sitzt zwischen einem Mitglied und deinem Ticket-Ablauf. Bevor ein Ticket tatsächlich geöffnet wird, zeigt der Bot dem Mitglied ein kurzes Pop-up „Was ist deine Frage?", lässt die KI antworten und öffnet das Ticket nur, wenn das Mitglied danach weiterhin Hilfe braucht.

Mitglieder werden nie daran gehindert, dein Team zu erreichen - der Knopf „Ich brauche weiterhin Hilfe" ist immer nur einen Klick entfernt.

## Funktionen {#features}

- Aktivierbar für [Modmail](/de/docs/support-bot/modmail/intro), das [Ticket-System](/de/docs/support-bot/ticket-system/intro) oder beides.
- Standardmäßig jedes Thema prüfen oder nur bestimmte Themen explizit auswählen - du entscheidest.
- Bei Modmail optional die erste DM des Mitglieds als Frage verwenden, sodass gar kein Pop-up erscheint.
- Arbeitet gut mit deinen bestehenden [Formularen](/de/docs/support-bot/general/forms) zusammen - zeige das Formular nach der KI, überspringe es oder überspringe die KI bei Formular-Themen komplett.
- Die Knöpfe „Das hat geholfen" / „Ich brauche weiterhin Hilfe" lassen das Mitglied entscheiden, was als Nächstes passiert.
- Eigene Modal-Beschriftungen, Willkommensnachricht und Antwort-Wrapper.

## Einrichtung {#setup}

1. Öffne in deinem Dashboard [**KI-FAQ → KI-Einstellungen → Wo die KI antwortet**](https://scnx.app/glink?page=support-system/ai-faq/settings).
2. Aktiviere unter **Pre-Ticket-Gatekeeper** die Option **KI vor dem Öffnen eines Modmail-Tickets ausprobieren**, **KI vor dem Öffnen eines Ticket-System-Tickets ausprobieren** oder beide.
3. Wähle, wie sich der Gatekeeper verhalten soll, wenn ein Thema ein erforderliches Formular hat - siehe [Themen mit Formularen](#form-behavior) weiter unten.
4. (Nur Modmail) Entscheide, ob die erste DM des Mitglieds ohne Pop-up als Frage verwendet werden soll - siehe [Modmail-spezifische Optionen](#modmail-options).
5. Passe optional die [Modal-Beschriftungen und Nachrichten](#messages) an.
6. Wähle, welche Themen der Gatekeeper prüft - ein globaler Standard plus eine Überschreibung pro Thema - siehe [Auswahl der zu prüfenden Themen](#per-topic-opt-out).
7. Speichere und lade den Bot neu.

## Was Mitglieder erleben {#flow}

Wenn ein Mitglied ein Ticket öffnet, sieht es Folgendes:

1. Eine kurze Willkommensnachricht in seinen DMs oder in Discord (nur, wenn du eine eingerichtet hast).
2. Ein Pop-up, in das es seine Frage tippen soll. (Bei Modmail übersprungen, wenn du **Die erste Nachricht des Nutzers als Frage verwenden (nur Modmail)** aktiviert hast - dann nutzt der Bot einfach das, was bereits in der DM steht.)
3. Eine kurze Pause, während der Bot die Antwort nachschlägt.
4. Die Antwort der KI mit zwei Knöpfen:
   - **Das hat geholfen, danke** - der Bot sendet eine freundliche Abschlussnachricht und es wird kein Ticket geöffnet.
   - **Ich brauche weiterhin Hilfe** - das Ticket wird wie gewohnt geöffnet, inklusive eines eventuell eingerichteten Formulars oder einer themenspezifischen Willkommensnachricht.

Wenn die KI die Frage nicht beantworten kann - oder deinem Server die KI-Credits ausgegangen sind - teilt der Bot das mit und bietet entweder ein Ticket an oder hält sich zurück, je nachdem, wie du das [Verhalten bei aufgebrauchten Credits](/de/docs/support-bot/ai-faq/credits-and-pricing#out-of-credits-behavior) konfiguriert hast.

## Häufige Szenarien {#scenarios}

### Nur für Modmail aktivieren

Setze **KI vor dem Öffnen eines Modmail-Tickets ausprobieren** auf an. Lass den Schalter für das Ticket-System aus. Mitglieder, die dem Bot eine DM schicken, sehen nun das Fragen-Pop-up; Mitglieder, die Tickets über deinen Knopf oder dein Menü auf dem Server öffnen, sind nicht betroffen.

### Nur für das Ticket-System aktivieren

Setze **KI vor dem Öffnen eines Ticket-System-Tickets ausprobieren** auf an. Mitglieder, die auf deinen Knopf „Ticket öffnen" klicken, sehen das Fragen-Pop-up; Modmail (falls vorhanden) ist nicht betroffen.

### Vorabprüfung ohne Pop-up (nur Modmail)

Wenn deine Mitglieder meist gleich in der ersten DM eine klare Frage stellen, aktiviere unter den Gatekeeper-Einstellungen **Die erste Nachricht des Nutzers als Frage verwenden (nur Modmail)**. Der Bot nutzt dann das, was bereits geschrieben wurde, statt ein separates Pop-up zu zeigen. Das ist für selbsterklärende Fragen angenehmer. Hinweis: Diese Einstellung gilt **nur für Modmail** - das Ticket-System nutzt immer das Pop-up, weil Tickets über einen Knopf und nicht über eine freie Nachricht gestartet werden.

### Das Formular als Hürde beibehalten

Wenn du bei einem Thema bereits ein erforderliches Formular nutzt, um vorab strukturierte Informationen zu sammeln, willst du wahrscheinlich nicht, dass die KI vor diesem Formular eingreift. Siehe [Themen mit Formularen](#form-behavior) weiter unten - wähle **Themen mit Formular nicht abfangen**, um den formularbasierten Ablauf unverändert zu lassen.

## Modmail-spezifische Optionen {#modmail-options}

Die Option **Die erste Nachricht des Nutzers als Frage verwenden (nur Modmail)** gibt es nur bei Modmail, weil Modmail-Tickets mit einer freien DM beginnen. Aktiviere sie, wenn Mitglieder in dieser ersten DM tendenziell eine klare Frage formulieren - der Bot verwendet, was sie getippt haben, und überspringt das Pop-up vollständig.

Beim Ticket-System wird das Pop-up immer angezeigt, weil Tickets dort über einen Knopf oder ein Menü geöffnet werden (es gibt keine erste Nachricht, die verwendet werden könnte).

## Themen mit Formularen {#form-behavior}

Wählt ein Mitglied ein Thema, an dem ein [Formular](/de/docs/support-bot/general/forms) hängt, muss der Bot wissen, wo das Formular einzuordnen ist. Wähle unter **Wenn ein Thema ein erforderliches Formular hat** eine dieser Optionen:

- **Formular nach der KI-Antwort anzeigen** (empfohlen) - der Gatekeeper läuft zuerst. Klickt das Mitglied auf **Ich brauche weiterhin Hilfe**, füllt es anschließend das Formular aus, bevor das Ticket tatsächlich geöffnet wird. Du bekommst die KI-Abfangquote, ohne deine strukturierten Formulardaten zu verlieren.
- **Formular komplett überspringen** - das Ticket wird sofort geöffnet, wenn das Mitglied auf **Ich brauche weiterhin Hilfe** klickt, ohne Formular. Nutze das, wenn das KI-Pop-up bereits alles erfasst, was das Formular abgefragt hätte, und du nicht doppelt fragen möchtest.
- **Themen mit Formular nicht abfangen** - der KI-Gatekeeper wird bei Themen mit erforderlichen Formularen komplett übersprungen. Mitglieder gehen direkt zum Formular und zum Ticket-Ablauf, als gäbe es den KI-Gatekeeper nicht. Am besten, wenn dein Formular bereits eine gründliche Vorabprüfung ist und der KI-Schritt überflüssig wirken würde.

## Auswahl der zu prüfenden Themen {#per-topic-opt-out}

Welche Themen der Gatekeeper prüft, wird in zwei Ebenen gesteuert: einem **globalen Standard** und einer **Überschreibung pro Thema**.

**Globaler Standard** - auf der AI-FAQ-Einstellungsseite unter **Standard für Themen**:

- **Alle Themen standardmäßig prüfen** _(Standard)_ - der Gatekeeper läuft bei jedem Thema, außer ein Thema schließt sich aus.
- **Themen standardmäßig nicht prüfen** - der Gatekeeper läuft bei keinem Thema, außer ein Thema nimmt aktiv teil. Praktisch, wenn du die KI nur bei einigen aufkommensstarken Themen (wie einem allgemeinen Thema „Frage") möchtest und alles andere normal ablaufen soll.

**Überschreibung pro Thema** - auf der Einstellungsseite jedes Themas (Ticket-Themen für [Modmail](https://scnx.app/glink?page=support-system/modmail/ticket-topics) oder das [Ticket-System](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics)) kannst du mit der Option **KI-Torwächter für dieses Thema** den Standard für genau dieses Thema überschreiben:

- **Globalen Standard folgen** - nutzt den oben gewählten Standard.
- **Immer mit KI prüfen** - der Gatekeeper läuft bei diesem Thema immer.
- **Nie prüfen (direkt zu einem Menschen)** - der Gatekeeper wird für dieses Thema übersprungen; das Ticket wird normal geöffnet.

Ein typisches Opt-in-Setup sieht so aus: Setze den globalen Standard auf **Themen standardmäßig nicht prüfen** und stelle deine aufkommensstarken Themen auf **Immer mit KI prüfen**. Ein typisches Opt-out-Setup: Lass den Standard auf **Alle Themen standardmäßig prüfen** und stelle einige besonders betreuungsintensive Themen auf **Nie prüfen (direkt zu einem Menschen)**.

Gute Kandidaten für **Nie prüfen (direkt zu einem Menschen)**:

- **Betreuungsintensive Themen** wie Rückerstattungsstreitigkeiten, Partnerschaftsanfragen oder Einsprüche gegen Moderationsentscheidungen - Dinge, bei denen du immer zuerst einen Menschen willst.
- **Rein interne Themen**, die gar nicht in den KI-Ablauf gehören.
- **Themen, bei denen die KI einfach nicht hilft.** Wenn ein Thema immer menschliches Urteilsvermögen braucht, spart das Überspringen des Gatekeepers dem Mitglied 30 Sekunden.

## Modal und Nachrichten anpassen {#messages}

Du kannst fast jedes Wort des Gatekeepers anpassen. Die am häufigsten genutzten Anpassungen befinden sich auf derselben Einstellungsseite wie der Rest des Gatekeepers:

- **Eigener Modal-Titel** - die Überschrift oben im Fragen-Pop-up. Bis zu 45 Zeichen. Leer lassen für den Standard.
- **Eigenes Label für das Fragenfeld** - die Beschriftung über dem Textfeld, in das das Mitglied seine Frage tippt. Bis zu 45 Zeichen.
- **Eigener Modal-Platzhalter** - der graue Hinweistext im Textfeld. Bis zu 100 Zeichen. Nützlich, um Mitglieder zu einem bestimmten Format zu lenken (z. B. „Beschreibe dein Problem in einem Satz...").
- **Pre-Modal-Willkommensnachricht** - eine optionale Nachricht, die vor dem Pop-up angezeigt wird. Nutze sie, um Erwartungen zu setzen („Ich schaue zuerst in die FAQ, bevor ich dich mit einem Menschen verbinde"). Leer lassen, um sie zu überspringen.
- **Vorlage für Gatekeeper-Antwort** - der Wrapper um die Antwort der KI. Die Knöpfe „Das hat geholfen" und „Ich brauche weiterhin Hilfe" werden automatisch unter deinem Wrapper hinzugefügt.
- **„Das hat geholfen"-Antwort** - was der Bot sendet, wenn das Mitglied auf den Knopf **Das hat geholfen** klickt. Der Standard ist ein freundliches Dankeschön.

Die vollständige Referenz (inklusive der verwendbaren Platzhalter) findest du unter [Nachrichten und Vorlagen](/de/docs/support-bot/ai-faq/messages-and-templates).

## Beispiel-Setups {#examples}

Ein paar häufige Formen, die der Gatekeeper in der Praxis annimmt.

### Server nur mit Modmail, FAQ-Fragen abfangen

Du betreibst den Support komplett über Modmail-DMs und möchtest, dass die KI die einfachen Fragen abfängt, bevor daraus Tickets werden.

- **KI vor dem Öffnen eines Modmail-Tickets ausprobieren:** an.
- **KI vor dem Öffnen eines Ticket-System-Tickets ausprobieren:** aus (du nutzt es nicht).
- **Die erste Nachricht des Nutzers als Frage verwenden (nur Modmail):** an. Mitglieder stellen ihre Frage direkt in der DM, daher ist kein separates Pop-up nötig.
- **Überschreibung pro Thema:** stelle Themen wie „Nutzer melden" oder „Einspruch" auf **Nie prüfen (direkt zu einem Menschen)**, da dort immer zuerst ein Mensch nötig ist.

### Ticket-System-Server mit strukturierten Formularen

Deine Mitglieder öffnen Tickets über einen Knopf, und an den meisten Themen hängt ein [Formular](/de/docs/support-bot/general/forms). Die KI soll zuerst versuchen, aber die Formulardaten sollen trotzdem erfasst werden, wenn das Mitglied eskaliert.

- **KI vor dem Öffnen eines Ticket-System-Tickets ausprobieren:** an.
- **KI vor dem Öffnen eines Modmail-Tickets ausprobieren:** aus (oder an, falls du auch Modmail nutzt).
- **Wenn ein Thema ein erforderliches Formular hat:** **Formular nach der KI-Antwort anzeigen** - der Gatekeeper läuft zuerst, und wenn das Mitglied auf „Ich brauche weiterhin Hilfe" klickt, füllt es das Formular aus, bevor das Ticket geöffnet wird.
- **Überschreibung pro Thema:** stelle alles, wo die KI gar nicht beteiligt sein soll, auf **Nie prüfen (direkt zu einem Menschen)** - typischerweise Partnerschaftsanfragen, Rückerstattungsstreitigkeiten oder Einsprüche gegen Moderationsentscheidungen.

### Server, auf dem das Formular bereits alles erfasst

Die meisten deiner Tickets nutzen ein Formular, das bereits alle Informationen sammelt, die das Team braucht, und du möchtest den KI-Schritt nicht auf einen ohnehin vollen Aufnahmeprozess draufsetzen.

- **KI vor dem Öffnen eines Ticket-System-Tickets ausprobieren:** an.
- **Wenn ein Thema ein erforderliches Formular hat:** **Themen mit Formular nicht abfangen** - die KI wird nur bei den einfacheren Themen ohne Formular genutzt (z. B. einem allgemeinen Thema „Sonstiges"), und dein formularbasierter Ablauf bleibt unverändert.

## Tipps {#tips}

:::tip Wähle die richtigen Themen für den Gatekeeper
Der Gatekeeper funktioniert am besten bei Themen, bei denen Mitglieder immer wieder dieselben Fragen stellen - „Wie bekomme ich meine Rolle?", „Wo ist meine Quittung?", „Wann beginnt das nächste Event?". Themen, die immer menschliches Urteilsvermögen brauchen (Meldungen, Streitfälle, Eskalationen), lässt du besser übersprungen.
:::

:::tip Vor dem Rollout testen
Nutze den Tab **Test-Chat** auf deiner AI-FAQ-Seite, um der KI Testfragen zu stellen und genau zu sehen, wie sie deinen echten Mitgliedern antworten würde. Er nutzt dieselben FAQ-Einträge und verbraucht Credits zum selben Satz wie Live-Antworten.
:::

:::tip Enterprise
Der Gatekeeper fängt Routinefragen von Haus aus ab. Größere Organisationen mit individuellen SLAs, dediziertem Setup oder persönlichem Onboarding können sich nach unserer Enterprise-Stufe erkundigen - siehe [Enterprise & Docs Sync](/de/docs/support-bot/ai-faq/enterprise-and-docs-sync) oder [kontaktiere den Vertrieb](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::
