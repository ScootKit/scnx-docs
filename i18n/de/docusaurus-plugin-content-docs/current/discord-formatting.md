# Discord Formatierung

Discord bietet außerdem verschiedene Formatierungsoptionen, um deine Nachrichten übersichtlicher und ansprechender zu gestalten. Mit diesen Funktionen kannst du Texte strukturieren, wichtige Informationen hervorheben und die Lesbarkeit insgesamt verbessern. Hier ist eine Übersicht der am häufigsten verwendeten Formatierungsstile und wie du sie effektiv einsetzen kannst.

## Textformatierung
Diese Formatierungsoptionen stellen verschiedene Stile für Nachrichten dar, die du in Discord verwenden kannst, um die Lesbarkeit und Struktur deiner Texte zu verbessern. Mit der Discord-Nachrichtenformatierung lassen sich wichtige Informationen hervorheben, Inhalte übersichtlich gliedern und Nachrichten optisch ansprechender gestalten. Durch die Nutzung dieser grundlegenden Nachrichtenstile werden Texte klarer, verständlicher und insgesamt angenehmer für andere Nutzer zu lesen. Im folgenden Abschnitt findest du eine Übersicht der am häufigsten verwendeten Formatierungsstile in Discord.

| Stil | Syntax | Ergebnis |
| :--- | :--- | :--- |
| **Kursiv** | `*Text*` oder `_Text_` | *Text* |
| **Fett** | `**Text**` | **Text** |
| **Fett & kursiv** | `***Text***` | ***Text*** |
| **Unterstrichen** | `__Text__` | T͟e͟x͟t | 
| **Durchgestrichen** | `~~Text~~` | ~~Text~~ |
| **Spoiler** | Siehe Screenshot | Siehe Screenshot |

![Ein Screenshot, der Spoiler, kleinen Text und alle Stile oben zeigt](@site/docs/assets/discord-formatting/de/types.png)

## Überschriften & Struktur
Mit diesen Formatierungsoptionen kannst du die Größe des Textes ändern, wodurch sich deine Nachrichten besser strukturieren und übersichtlicher gestalten lassen. Unterschiedliche Textgrößen helfen dabei, wichtige Informationen hervorzuheben, die Lesbarkeit zu verbessern und eine klare visuelle Hierarchie innerhalb einer Nachricht zu schaffen.

Wichtig: Nach den Zeichen `#` oder `-#` muss immer ein Leerzeichen folgen, damit die Formatierung korrekt funktioniert.

```
# Überschrift 1 (Groß)
## Überschrift 2 (Mittel)
### Überschrift 3 (Klein)
-# Kleiner Text
```

![Ein Screenshot mit Beispielen für Überschriften](@site/docs/assets/discord-formatting/de/headings.png)

## Listen & Zitate
Mit diesen Formatierungsoptionen kannst du deinen Text mithilfe von Listen oder Zitaten strukturieren, wodurch Nachrichten übersichtlicher und leichter verständlich werden. Listen eignen sich ideal, um Informationen klar zu gliedern, während Zitate verwendet werden können, um Aussagen hervorzuheben, auf andere Nachrichten zu reagieren oder Inhalte zu referenzieren. Es gibt viele verschiedene Möglichkeiten, Texte als Liste oder Zitat darzustellen, sodass du deine Nachrichten flexibel und strukturiert formatieren kannst.

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


## Links & Code
Mit diesen Formatierungsoptionen kannst du das Verhalten und das Erscheinungsbild einer Nachricht verändern. Sie ermöglichen es, hervorzuheben, wie eine Nachricht aussieht und wahrgenommen wird, um Aktionen zu betonen, wichtige Inhalte hervorzuheben und die allgemeine Lesbarkeit zu verbessern.

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

## Timestamps
Dynamische Timestamps in Discord ermöglichen es, Zeiten und Daten anzuzeigen, die sich automatisch an die Zeitzone des Nutzers anpassen. So werden Nachrichten für alle Beteiligten verständlicher und kontextbezogener. Diese Timestamps sind besonders nützlich für Events, Deadlines, Erinnerungen oder jede Nachricht, bei der die genaue Zeit für Nutzer in verschiedenen Regionen klar sein muss. Durch die Verwendung dynamischer Timestamps wird die Übersichtlichkeit erhöht und die Interaktion auf deinem Discord-Server verbessert.

Timestamps verwenden die **UNIX-Zeit**, ein System, das die Anzahl der Sekunden seit dem **1. Januar 1970 um 00:00:00 UTC** (bekannt als Unix-Epoche) zählt. UNIX-Zeit wird häufig in der Programmierung, in Datenbanken, APIs und Server-Logs verwendet, da sie eine einfache, konsistente und zeitzonenunabhängige Möglichkeit bietet, Zeitpunkte darzustellen.

### Beispiele für Discord-Timestamp-Formate:
* `<t:1737835851:t>` → Zeit (kurzes Format)  
* `<t:1737835851:D>` → Datum (langes Format)  
* `<t:1737835851:R>` → Relative Zeit (z. B. „vor 5 Minuten“)

Du kannst Timestamps genau nach deinen Wünschen erstellen und anpassen mit dem [Discord Timestamp Generator](https://scnx.app/user/tools?page=timestamp-generator).

![Ein Screenshot, der verschiedene Beispiele für Timestamps zeigt](@site/docs/assets/discord-formatting/de/types3.png)