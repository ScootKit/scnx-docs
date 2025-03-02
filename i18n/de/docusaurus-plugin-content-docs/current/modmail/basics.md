# Modmail-Starterguide (Modmail 101)

In diesem Dokument haben wir alles gesammelt, was hilfreich ist, um zu verstehen, wie man Modmail auf Servern verwendet.

:::info
Du kannst dieses Dokument auch an dein Support-Team weiterleiten, damit sie verstehen, wie der Modmail-Bot funktioniert.
:::

## Erstellen und Bearbeiten von Tickets {#basics}

Nutzer können Tickets erstellen, indem sie entweder eine Direktnachricht an den Modmail-Bot senden oder eine Schaltfläche unter der [Informationsnachricht](./configuration/modmail-info) verwenden. Wenn ein Nutzer ein Ticket eröffnet, kann er ein [Ticket-Thema auswählen](./advanced-features/ticket-topics), sofern diese Funktion aktiviert ist. Danach wird ein Ticket-Kanal erstellt, in dem dein Support-Team Nachrichten senden kann. Nachrichten, die in diesen Kanal gesendet werden, werden dem Nutzer per Direktnachricht übermittelt, woraufhin der Nutzer antworten kann. Alle Nachrichten, die per DM an den Bot gesendet werden, erscheinen automatisch im Ticket-Kanal.

Teammitglieder können sich untereinander besprechen oder Notizen hinterlassen, die nicht an Nutzer gesendet werden, indem sie ihre Nachricht mit `!` beginnen. Standardmäßig wird jeder, der Zugriff auf den Ticket-Kanal hat, als Teammitglied behandelt. Stelle daher sicher, dass die richtigen Berechtigungen für die Ticket-Kategorie konfiguriert sind. Manchmal möchtest du möglicherweise nicht, dass der Name des Teammitglieds dem Nutzer angezeigt wird. Dafür kannst du [anonyme Nachrichten](#anonymous-messages) senden.

Auf großen Servern müssen Tickets möglicherweise bestimmten Teammitgliedern zugewiesen werden. Dafür kann die Funktion [Ticket-Claiming](./advanced-features/ticket-claiming) genutzt werden.

Sobald ein Ticket gelöst wurde, können die Teammitglieder (und der Nutzer, wenn [konfiguriert](./configuration/ticket-close)) das Ticket mit dem `/close`-Slash-Befehl schließen.

Wenn ein Ticket geschlossen wird, wird ein Protokoll namens "Log" erstellt. Dieses Protokoll wird in einen [Log-Kanal](./configuration/bot-configuration) gesendet und kann, wenn [konfiguriert](./configuration/ticket-close), auch an den Nutzer gesendet werden.

Manchmal müssen ähnliche Informationen von Nutzern gesammelt werden, um ihre Anfragen zu bearbeiten. Dafür können [Formulare](./advanced-features/forms) erstellt werden, die es Nutzern ermöglichen, benötigte Informationen über ein integriertes Formular einzugeben. Um einem Nutzer ein Formular zu senden, verwende den Befehl `/form`.

Beim Schließen eines Tickets erhält der Nutzer eine Benachrichtigung, die [konfiguriert werden kann](./configuration/bot-configuration). Zudem kannst du mithilfe der Funktion [Feedback](./advanced-features/support-feedback) Feedback von Nutzern erhalten.

Teammitglieder können die Support-Aktivität überwachen und Support-Prozesse mit der [Statistiken](./advanced-features/analytics)-Funktion optimieren.

## Snippets {#snippets}

Manchmal müssen ähnliche oder sich wiederholende Nachrichten an Nutzer gesendet werden. Um zu vermeiden, dass dieselbe Nachricht immer wieder eingegeben werden muss, können Snippets verwendet werden. Snippets sind Textbausteine, die Teammitglieder erstellen und in Tickets nutzen können. Jedes Snippet hat einen eindeutigen Snippet-Schlüssel, der beim Erstellen eines Snippets festgelegt wird. Optional kann auch ein [Formular](./advanced-features/forms) an ein Snippet angehängt werden, um zu vermeiden, dass mehrere Befehle eingegeben werden müssen, um sowohl ein Snippet als auch ein Formular gleichzeitig zu senden. Snippets können auch Schaltflächen enthalten, mit denen Nutzer das Ticket direkt schließen können.

<SlashCommandExplanation />

Um Snippets zu verwenden, können Teammitglieder:

* den Befehl `/s snippet:<SnippetSchlüssel>` nutzen, um ein Snippet direkt in ein Ticket zu senden. Dies ist die einfachste Methode, da ein Auto-Vervollständigungsmenü Teammitgliedern hilft, das richtige Snippet auszuwählen.
* `!!<SnippetSchlüssel>` schreiben (ersetze `<SnippetSchlüssel>` mit dem Schlüssel des Snippets), um den Inhalt eines Snippets direkt in ein Ticket zu senden.
* `{{<SnippetSchlüssel}}` in eine beliebige Nachricht einfügen, die an einen Nutzer gesendet wird. `{{<SnippetSchlüssel}}` wird durch den Snippet-Inhalt ersetzt, während der Rest der Nachricht unverändert bleibt.

Zur Verwaltung von Snippets stehen Teammitgliedern folgende Befehle zur Verfügung:

* Erstelle ein neues Snippet mit `/snippets create key:<SnippetSchlüssel> [close-buttons:<Boolean>] [form:<Formular>]`.
* Bearbeite ein bestehendes Snippet mit `/snippets edit key:<SnippetSchlüssel> [close-buttons:<Boolean>] [form:<Formular>]`.
* Lösche ein Snippet mit `/snippet delete key:<SnippetSchlüssel>`.
* Vorschau eines Snippets mit `/snippet preview key:<SnippetSchlüssel>`.
* Liste aller Snippets mit `/snippets list [page:<Nummer>]`.

## Anonyme Nachrichten {#anonymous-messages}

Manchmal möchten Teammitglieder ihren Namen nicht mit Nutzern teilen. Um dies zu ermöglichen, kannst du deine [Nachrichteneinstellungen](./configuration/advanced-messaging) anpassen. Falls du jedoch möchtest, dass Teammitglieder in den meisten Fällen mit ihrem Namen erscheinen, aber gelegentlich Nachrichten senden, die ihrer höchsten Rolle zugeordnet sind (z. B. "Moderator: Deine Nachricht hier"), gibt es dafür eine Option.

Die Identität der Teammitglieder wird bei anonymen Nachrichten nicht für Nutzer sichtbar sein, jedoch weiterhin im Log und im Ticket-Kanal angezeigt.

* Anonyme Nachrichten können mit `!ar <Nachricht>` gesendet werden.
* [Snippets](#snippets) können anonym gesendet werden, indem entweder `!!!<SnippetSchlüssel>` geschrieben oder der Befehl `/as` verwendet wird.

## Nutzer auf die Blockliste setzen {#blacklist}

Manchmal missbrauchen Nutzer den Support-Service. Um zu verhindern, dass solche Nutzer dein Modmail-System spammen, kannst du die Blockliste-Funktion nutzen. Sobald die Funktion [aktiviert](./configuration/bot-configuration) ist, können Teammitglieder die folgenden Befehle zur Verwaltung der Blockliste verwenden:

<SlashCommandExplanation />

* `/blacklist list`: Listet alle Nutzer auf, die auf der Blockliste stehen.
* `/blacklist add user:<Nutzer> reason:<Text> [duration:<Dauer>]`: Fügt einen Nutzer zur Blockliste hinzu. Standardmäßig sind Blocklisteneinträge dauerhaft, es sei denn, eine Dauer wird konfiguriert (z. B. `2d4h` für eine Sperre von 2 Tagen und 4 Stunden).
* `/blacklist remove user:<Nutzer>`: Entfernt einen Nutzer von der Blockliste.
* `/blacklist status user:<Nutzer>`: Prüft, ob ein Nutzer auf der Blockliste steht. Der Grund und die Dauer der Sperre werden ebenfalls angezeigt.

