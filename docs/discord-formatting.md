# Discord Formatting

An overview of all formatting options available in Discord.

## 1. Text Formatting
Basic styles for messages: *(Spoiler text and small text are not shown here because they don’t work properly inside tables. More details in the screenshot.)*

| Style | Syntax | Result |
| :--- | :--- | :--- |
| **Italic** | `*Text*` or `_Text_` | *Text* |
| **Bold** | `**Text**` | **Text** |
| **Bold Italic** | `***Text***` | ***Text*** |
| **Underline** | `__Text__` | __Text__ |
| **Strikethrough** | `~~Text~~` | ~~Text~~ |

![A screenshot showing spoiler, small text and all the styles at the top](@site/docs/assets/discord-formatting/en/types.png)

## 2. Headings & Structure
Important: There must be a space after the `#` characters.

# # Heading 1 (Large)
## ## Heading 2 (Medium)
### ### Heading 3 (Small)


## 3. Lists & Quotes
Structure your text using lists or quotes.

* **Bullet lists:**  
  - `- Item 1`  
  * `* Item 2`
* **Numbered lists:**  
  - `1. First item`
  - `2. Second item`
* **Quotes:**  
  - `> Single-line quote`

![A screenshot showing examples of bullet lists, numbered lists, and quotes](@site/docs/assets/discord-formatting/en/types1.png)


## 4. Links & Code
* **Masked links:** `[Google](https://www.google.com)`
* **Inline code:** `` `command` ``
* **Code block:**  
  ```
  ```js (An example with JavaScript)
  console.log("Code block")
  ```‎
  ```

![A screenshot showing examples of masked links, inline code, and code blocks](@site/docs/assets/discord-formatting/en/types2.png)

## 5. Timestamps
Dynamic timestamps that automatically adapt to the user’s time zone:

* `<t:1737835851:t>` → Time (short)
* `<t:1737835851:D>` → Date (long)
* `<t:1737835851:R>` → Relative time (e.g. “5 minutes ago”)

These are just examples. You can create timestamps exactly how you want using  
https://scnx.app/user/tools?page=timestamp-generator

![A screenshot showing examples of different timestamp formats](@site/docs/assets/discord-formatting/en/types3.png)