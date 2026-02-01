# Discord Formatierung

Discord bietet außerdem verschiedene Formatierungsoptionen, um deine Nachrichten übersichtlicher und ansprechender zu gestalten. Mit diesen Funktionen kannst du Texte strukturieren, wichtige Informationen hervorheben und die Lesbarkeit insgesamt verbessern. Hier ist eine Übersicht der am häufigsten verwendeten Formatierungsstile und wie du sie effektiv einsetzen kannst.

## 1. Textformatierung
Diese Formatierungen sind Stile für Nachrichten, die du in Discord verwenden kannst. Unten findest du die grundlegenden Formatierungsstile für Nachrichten:

| Stil | Syntax | Ergebnis |
| :--- | :--- | :--- |
| **Kursiv** | `*Text*` oder `_Text_` | *Text* |
| **Fett** | `**Text**` | **Text** |
| **Fett & kursiv** | `***Text***` | ***Text*** |
| **Unterstrichen** | `__Text__` | T͟e͟x͟t | 
| **Durchgestrichen** | `~~Text~~` | ~~Text~~ |
| **Spoiler** | Siehe Screenshot | Siehe Screenshot |

![Ein Screenshot, der Spoiler, kleinen Text und alle Stile oben zeigt](@site/docs/assets/discord-formatting/de/types.png)

## 2. Überschriften & Struktur
Mit diesen kannst du die Größe des Textes ändern und so deine Nachrichten besser strukturieren. Wichtig: Nach den Zeichen `#` oder `-#` muss ein Leerzeichen folgen.

```
# Überschrift 1 (Groß)
## Überschrift 2 (Mittel)
### Überschrift 3 (Klein)
-# Kleiner Text
```

![Ein Screenshot mit Beispielen für Überschriften](@site/docs/assets/discord-formatting/de/headings.png)

## 3. Listen & Zitate
Mit diesen kannst du deinen Text mithilfe von Listen oder Zitaten strukturieren. Es gibt viele Möglichkeiten, Texte aufzulisten und zu zitieren:

* **Aufzählungen:**  
	- `- Punkt 1`  
	* `* Punkt 2`
* **Nummerierte Listen:**  
	- `1. Erster Punkt`
    - `2. Zweiter Punkt`
* **Zitate:**  
	- `> Einzeiliges Zitat`
	- ```
	  >>> Mehrzeiliges Zitat
	  Mehr Zeilen
	  ```

![Ein Screenshot mit Beispielen für Aufzählungen, nummerierte Listen und Zitate](@site/docs/assets/discord-formatting/de/types1.png)


## 4. Links & Code

* **Maskierte Links:** `[Google](https://www.google.com)`
* **Inline-Code:** `` `Befehl` ``
* **Codeblock:**  
	```
	```js
    console.log("Mehrzeiliger Code oder Text")
	```‎
	```

Beim Verwenden von Codeblöcken ist es möglich, die verwendete Programmiersprache für die Syntaxhervorhebung anzugeben. In diesem Codeblock verwenden wir JavaScript (daher das `js` in der ersten Zeile). Du kannst auch andere Programmiersprachen angeben: Ersetze dazu einfach `js` durch die gewünschte Sprache (z. B. `py` für Python, `html` für die Hypertext Markup Sprache usw.).

![Ein Screenshot mit Beispielen für maskierte Links, Inline-Code und Codeblöcke](@site/docs/assets/discord-formatting/de/types2.png)

## 5. Timestamps
Dynamische Timestamps in Discord ermöglichen es, Zeiten und Daten anzuzeigen, die sich automatisch an die Zeitzone des Nutzers anpassen. So werden Nachrichten für alle Beteiligten verständlicher und kontextbezogener. Diese Timestamps sind besonders nützlich für Events, Deadlines, Erinnerungen oder jede Nachricht, bei der die genaue Zeit für Nutzer in verschiedenen Regionen klar sein muss. Durch die Verwendung dynamischer Timestamps wird die Übersichtlichkeit erhöht und die Interaktion auf deinem Discord-Server verbessert.

Timestamps verwenden die **UNIX-Zeit**, ein System, das die Anzahl der Sekunden seit dem **1. Januar 1970 um 00:00:00 UTC** (bekannt als Unix-Epoche) zählt. UNIX-Zeit wird häufig in der Programmierung, in Datenbanken, APIs und Server-Logs verwendet, da sie eine einfache, konsistente und zeitzonenunabhängige Möglichkeit bietet, Zeitpunkte darzustellen.

### Beispiele für Discord-Timestamp-Formate:
* `<t:1737835851:t>` → Zeit (kurzes Format)  
* `<t:1737835851:D>` → Datum (langes Format)  
* `<t:1737835851:R>` → Relative Zeit (z. B. „vor 5 Minuten“)

Du kannst Timestamps genau nach deinen Wünschen erstellen und anpassen mit dem [Discord Timestamp Generator](https://scnx.app/user/tools?page=timestamp-generator).

![Ein Screenshot, der verschiedene Beispiele für Timestamps zeigt](@site/docs/assets/discord-formatting/de/types3.png)