---
sidebar_position: 4
---

# dcserver.link

Erstelle eine einzigartige Vanity-URL für deinen Server (z. B. `https://dcserver.link/yourservername`).

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: true}} />

## Nutzung {#usage}

Eine dcserver.link erlaubt es deinen Nutzern, anstatt einer von Discord generierten Einladung, deinen Server mit einer
einzigartigen Vanity-URL beizutreten. Ein Beispiel: Anstatt dass Nutzer mit der URL `https://discord.gg/WxB3z5YJh9`
beitreten,
können sie dem (deutschen) ScootKit-Discord mit `https://dcserver.link/scootkit` beitreten - das ist wesentlich
einfacher zu merken.

Dein eigener Bot wird automatisch Einladungen für Nutzer erstellen, die mit deinem Link deinem Server
beitreten wollen - so musst du dir keine Sorgen über abgelaufene Einladungen machen.

Um deine momentane dcserver.link-URL zu sehen, kopieren oder zu [ändern](#change-url), öffne
die [Einstellungen-Seite](https://scnx.app/de/glink?page=settings) deines Servers auf SCNX und scrolle bis zum 
"dcserver.link-URL"-Abschnitt.

## Einrichtung {#setup}

Bitte stelle vor dem Einrichten sicher, dass du einen eigenen Bot auf SCNX erstellt hast und dieser die Berechtigungen "
Einladungen erstellen" hat.

Um zu starten, öffne die [Einstellungen-Seite](https://scnx.app/de/glink?page=settings) deines Servers auf SCNX. Scrolle
zu dem "dcserver.link-URL"-Abschnitt und klicke auf "Loslegen".

![](@site/docs/assets/scnx/guilds/dcserver-link/enable.png)

Eine einzigartige URL für deinen Server wird auf Basis des Server-Namens und der Server-ID generiert - du kannst das
später ändern.

## URL ändern {#change-url}

Um deine dcserver.link-URL zu ändern, öffne bitte die [Einstellungen-Seite](https://scnx.app/de/glink?page=settings)
deines Servers auf SCNX. Scrolle zu dem "dcserver.link-URL"-Abschnitt und klicke auf "Link ändern". Gib nun deine neue
URL ein. Wenn du fertig bist, klicke auf "Speichern", um deine Änderungen zu speichern.

Die neue URL kann nur kleine Buchstaben, Zahlen und dieses Sonderzeichen enthalten: `-`.

Bitte beachte, dass die **URL einzigartig** im ganzen Netzwerk sein muss. Wenn du eine URL verwenden möchtest, die
bereits genutzt wird, wird dir eine Fehler-Nachricht angezeigt. Bitte gehe zu [Konflikte](#disputes), um zu sehen, was
du in einem solchen Fall tun kannst.

## Wie werden Einladungen generiert? {#invites}

Wenn aktiviert, wird dein eigener automatisch eine Einladung generieren, wenn ein Nutzer deine dcserver.link URL
aufruft. Diese Einladung wird nach drei Stunden automatisch ablaufen und wird von SCNX so lange gespeichert und für
weitere Anfragen verwendet. Nachdem die drei Stunden abgelaufen sind, wird SCNX erneut eine neue Einladung erstellen,
wenn ein Nutzer auf deine URL zugreifen will.

Wenn das Erstellen einer Einladung fehlschlägt (das kann passieren, wenn du z.B. Einladungen auf deinem Server temporär
deaktivierst), wird ein Fehler angezeigt. Bitte beachte, dass SCNX in bestimmten Situation auch mehrere Einladungen pro
Stunde erstellen kann, um Endnutzern eine angenehme Erfahrung zu gewährleisten.

Bitte stelle sicher, dass du deinen eigenen Bot von Sicherheitssystemen, wie WickBot, ausschließest, um zu
vermeiden, dass diese Bots mit der Erstellung von dcserver.link interferieren.

Aktuell wählt dein eigener Bot den Kanal zur Erstellung der Einladung zufällig. Wir arbeiten daran, diesen Prozess anpassbar
zu
machen.

## URL-Konflikte {#disputes}

Generell gilt: dcserver.link-URLs werden von dem genutzt, der sie zuerst beansprucht. Normalerweise weichen wir davon
auch nicht in der Praxis ab, doch es gibt - wie immer - ein paar Ausnahmen:

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