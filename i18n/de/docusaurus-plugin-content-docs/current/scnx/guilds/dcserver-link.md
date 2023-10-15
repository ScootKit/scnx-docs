---
sidebar_position: 4
---

# dcserver.link

:::info Beta-Info
Diese Dokumentation ist für ein noch nicht fertiges Produkt, welches nur für eine bestimmte Anzahl an Servern auf SCNX verfügbar ist.
Überprüfe die [Einstellungen-Seite](https://scnx.app/de/glink?page=settings) deines Servers auf SCNX, um zu sehen, ob du dcserver.link-URLs verwenden kannst.
:::

Erstelle eine einzigartige Vanity-URL für deinen Server (z. B. `https://dcserver.link/yourservername`).

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: true}}
                additionalDetails={{STARTER: 'Nur für Server mit mehr als 50 Mitgliedern (ohne Bots) oder mit einem bezahltem Plan verfügbar.'}}/>


## Nutzung {#usage}

Eine dcserver.link erlaubt es deinen Nutzern, anstatt einer von Discord generierten Einladung, deinen Server mit einer einzigartigen Vanity-URL beizutreten. Ein Beispiel: Anstatt dass Nutzer mit der URL `https://discord.gg/WxB3z5YJh9` beitreten,
können sie dem (deutschen) ScootKit-Discord mit `https://dcserver.link/scootkit` beitreten - das ist wesentlich einfacher zu merken.

Der (verifizierte) SCNX-Bot wird automatisch Einladungen für Nutzer erstellen, die mit deinem Link deinem Server beitreten wollen - so musst du dir keine Sorgen über abgelaufene Einladungen machen.

Um deine momentane dcserver.link-URL zu sehen, kopieren oder zu [ändern](#change-url), öffne die [Einstellungen-Seite](https://scnx.app/de/glink?page=settings) deines Servers auf SCNX und scrolle bis zum "dcserver.link-URL"-Abschnitt.

## Einrichtung {#setup}

Vor dem Einrichten einer dcserver.link-URL für deinen Server stelle bitte sicher, dass dein Server einen bezahlten Plan (keine Testversion) oder mindestens 50 Mitglieder (ohne Bots) hat.

Um zu starten, öffne die [Einstellungen-Seite](https://scnx.app/de/glink?page=settings) deines Servers auf SCNX. Scrolle zu dem "dcserver.link-URL"-Abschnitt und klicke auf "Loslegen".

![](@site/docs/assets/scnx/guilds/dcserver-link/enable.png)

Eine einzigartige URL für deinen Server wird auf Basis des Server-Namens und der Server-ID generiert - du kannst das später ändern.

## URL ändern {#change-url}
Um deine dcserver.link-URL zu ändern, öffne bitte die [Einstellungen-Seite](https://scnx.app/de/glink?page=settings) deines Servers auf SCNX. Scrolle zu dem "dcserver.link-URL"-Abschnitt und klicke auf "Link ändern". Gib nun deine neue URL ein. Wenn du fertig bist, klicke auf "Speichern", um deine Änderungen zu speichern.

Die neue URL kann nur kleine Buchstaben, Zahlen und dieses Sonderzeichen enthalten: `-`.

Bitte beachte, dass die **URL einzigartig** im ganzen Netzwerk sein muss. Wenn du eine URL verwenden möchtest, die bereits genutzt wird, wird dir eine Fehler-Nachricht angezeigt. Bitte gehe zu [Konflikte](#disputes), um zu sehen, was du in einem solchen Fall tun kannst.

## URL-Konflikte {#disputes}

Generell gilt: dcserver.link-URLs werden von dem genutzt, der sie zuerst beansprucht. Normalerweise weichen wir davon auch nicht in der Praxis ab, doch es gibt - wie immer - ein paar Ausnahmen:

<details>
    <summary>Missbrauch von dcserver.link-URLs</summary>
    Wenn du denkst, dass eine dcserver.link-URL zum Betrügen genutzt wird oder anderweitig Discords Community-Richtlinien bricht,
    melde es bitte unserem Team (<a href="mailto:abuse@scnx.xyz">abuse@scnx.xyz</a>) und wir werden nötige Aktionen veranlassen.
    Die URL kann danach nicht mehr genutzt werden.
</details>
<details>
    <summary>Kleiner Server vs. großer Server</summary>
    Dieses Szenario tritt ein, wenn ein großer Server (&gt;10.000 Mitglieder ohne Bots und aktiv) mit dem gleichem Namen eine
    dcserver.link-URL will, welche momentan von einem kleinem Server (&lt;1.000 Mitglieder) verwendet wird. In solch einem Fall wird unser Team
    die Anfrage auf einer Fall-für-Fall-Basis prüfen und sich eventuell für eine Übertragung der dcserver.link-URL entscheiden. Um solch eine Anfrage zu stellen, 
     <a
    href="https://scnx.app/help">kontaktiere unser Team</a>.
</details>
<details>
    <summary>Markenrechtsverletzungen</summary>
    Wenn eine dcserver.link-URL dein Markenrecht verletzt, kontaktiere bitte unser rechtliches Team (<a
    href="mailto:legal@scootkit.net">legal@scootkit.net</a>) mit einer rechtlichen Anfrage zum Entfernen. Wenn die Anfrage angenommen
    (und der Inhalt entfernt) wurde,
    kannst du eventuell selbst die dcserver.link-URL durch Antwort auf die Bestätigungs-E-Mail (optional) beanspruchen.
</details>
<details>
    <summary>Inaktive / gelöschte Server auf SCNX</summary>
    Wenn ein Server von SCNX <a href="./faq#deletion">gelöscht wird</a>, wird die dcserver.link-URL permanent gelöscht. Das passiert nicht,
    wenn ein Server auf SCNX deaktiviert / geflagged ist - in diesen Fällen wird die URL einfach nur unnutzbar, bleibt aber
    trotzdem beansprucht. Abgelaufene Starter-Pläne haben keinen Einfluss auf die Nutzbarkeit von dcserver.link-URLs.
</details>
