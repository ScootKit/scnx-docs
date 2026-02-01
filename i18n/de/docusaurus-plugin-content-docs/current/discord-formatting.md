# Discord-Formatierung

Ein Überblick über alle Formatierungsoptionen, die in Discord verfügbar sind.

## 1. Textformatierung
Grundlegende Formatierungen für Nachrichten: *(Spoiler-Text und kleiner Text werden hier nicht angezeigt, weil sie in Tabellen nicht richtig funktionieren. Mehr Details im Screenshot.)*

| Stil | Syntax | Ergebnis |
| :--- | :--- | :--- |
| **Kursiv** | `*Text*` oder `_Text_` | *Text* |
| **Fett** | `**Text**` | **Text** |
| **Fett & kursiv** | `***Text***` | ***Text*** |
| **Unterstrichen** | `__Text__` | T͟e͟x͟t͟ | 
| **Durchgestrichen** | `~~Text~~` | ~~Text~~ |

![Ein Screenshot, der Spoiler, kleinen Text und alle Stile oben zeigt](@site/docs/assets/discord-formatting/de/types.png)

## 2. Überschriften & Struktur
Wichtig: Nach den `#`-Zeichen muss ein Leerzeichen stehen.

```
# Überschrift 1 (Groß)
## Überschrift 2 (Mittel)
### Überschrift 3 (Klein)
```

![Ein Screenshot mit Beispielen für Überschriften](@site/docs/assets/discord-formatting/de/headings.png)

## 3. Listen & Zitate
Strukturiere deinen Text mit Listen oder Zitaten.

* **Aufzählungen:**  
	- `- Punkt 1`  
	* `* Punkt 2`
* **Nummerierte Listen:**  
	- `1. Erster Punkt`
    - `2. Zweiter Punkt`
* **Zitate:**  
	- `> Einzeiliges Zitat`  

![Ein Screenshot mit Beispielen für Aufzählungen, nummerierte Listen und Zitate](@site/docs/assets/discord-formatting/de/types1.png)


## 4. Links & Code
* **Maskierte Links:** `[Google](https://www.google.com)`
* **Inline-Code:** `` `Befehl` ``
* **Codeblock:**  
	```
	```js (Ein Beispiel mit JavaScript)
    console.log("Mehrzeiliger Code oder Text")
	```‎
	```

![Ein Screenshot mit Beispielen für maskierte Links, Inline-Code und Codeblöcke](@site/docs/assets/discord-formatting/de/types2.png)

## 5. Zeitstempel
Dynamische Zeitstempel, die sich automatisch an die Zeitzone der Person anpassen, die sie ansieht:

* `<t:1737835851:t>` → Uhrzeit (kurz)
* `<t:1737835851:D>` → Datum (lang)
* `<t:1737835851:R>` → Relative Zeit (z. B. „vor 5 Minuten“)

Das sind nur Beispiele. Du kannst Zeitstempel genau so erstellen, wie du sie brauchst, unter  
https://scnx.app/user/tools?page=timestamp-generator

![Ein Screenshot mit Beispielen für verschiedene Zeitstempel-Formate](@site/docs/assets/discord-formatting/de/types3.png)
