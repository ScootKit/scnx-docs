---
sidebar_position: 6
title: "AI actions"
description: "Put AI into a flow: sort text into categories, answer yes or no, ask for an answer or pull typed values out of a member's message."
---

# AI actions

AI actions let a flow use a language model: sort a message into a category, decide a yes-or-no question, write an answer, or pull values such as an order number out of free text. They live in the [Integrations](/docs/custom-commands/reference/actions/bot-integrations) category of the action list, next to **Translate text with AI**.

Every input and output of the four actions is listed in the [action reference](/docs/custom-commands/reference/actions/bot-integrations#ai-categorize). This page explains what the reference cannot: what you get back when the AI is unsure, what the steps cost, and how to keep member text from steering the AI.

## The four actions {#actions}

| Action                                                                                                      | Gives you                                                                                       | When the AI cannot decide                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Sort text into a category with AI](/docs/custom-commands/reference/actions/bot-integrations#ai-categorize) | **Category** (one of your entries, written exactly as in your list) and **Matched** (yes or no) | **Matched** is No and **Category** is empty                   |
| [Decide yes or no with AI](/docs/custom-commands/reference/actions/bot-integrations#ai-decide)              | **Decision**: Yes or No                                                                         | Nothing to check: a successful step always answers Yes or No  |
| [Ask AI](/docs/custom-commands/reference/actions/bot-integrations#ai-ask)                                   | **Answer**: text                                                                                | Nothing to check: an empty answer makes the step fail instead |
| [Pull fields out of text with AI](/docs/custom-commands/reference/actions/bot-integrations#ai-extract)      | One output per field you declare, named after the field's ID                                    | Every field can be empty                                      |

### Sort text into a category {#categorize}

You list 2 to 25 different categories, each up to 40 characters. The AI can only answer with one entry of your list or with none, so you can safely compare **Category** with your own entries. The optional **Explanation** tells the AI what the categories mean.

Always check **Matched** first. A message that fits no category leaves **Category** empty, and a **Switch** on an empty value takes its default branch, which is the wrong place for a delete or a timeout. Put an **If** on **Matched** right after the step and the **Switch** on **Category** inside its Then branch.

### Decide yes or no {#decide}

You write the question, for example "Is this message an advertisement?", and pass the text it is about. The answer is always Yes or No.

### Ask AI {#ask}

**Instruction** is the task, for example "Summarize this in two sentences." The optional **Data** is the text the AI works on. **Answer** is the AI's reply as text. See [Member text and mentions](#member-text) before posting an answer.

### Pull fields out of text {#extract}

You declare 1 to 10 fields. Each field has:

- an **ID** of up to 16 characters: lowercase letters `a-z`, digits `0-9` and hyphens
- a **type**: text, number or yes/no
- an optional **description** that tells the AI what to look for, for example "The order number the member mentions"

The step gives you one output per field, named after its ID. A value the text does not contain, or one that does not fit its type, comes back empty, so check every field before you use it, for example with **If it has a value**. A number can have decimals; round it before you use it where a whole number is needed.

Declare the fields in the step first, then use their outputs. Fields are written into the flow, so you cannot add them from a variable. If you build flows with an AI assistant through the [MCP connector](/docs/custom-commands/mcp), it has to name each output (`field:<id>`) when it adds the step, because the outputs depend on the fields of that step.

## Member text and mentions {#member-text}

Put what a member wrote into the **Text** input (or **Data** of **Ask AI**), never into an instruction, an explanation or the question of **Decide yes or no**. The AI reads those as your own words, so a member who can write into them can steer the whole step. Text in **Text** or **Data** is sent separately and the AI is told to treat it as data, but a clever message can still influence the answer.

So treat every AI result like a member's message:

- Do not let an AI result alone decide a ban, a delete or a role change. For moderation, flag the message for a moderator instead.
- An answer can contain a user mention such as `<@id>`, and posting it pings that user. Pings of roles, `@everyone` and `@here` are blocked by the default mention settings of the send actions, unless you turn them on.
- Do not post an answer to a member's text without checking it. **Escape Discord markdown** helps with values that you put into a message.

## Cost and failures {#cost}

Each AI step costs AI Coins from your server's balance, currently one per answer. A coin is only used when the AI service actually returns an answer. AI steps have no hourly cap of their own: your balance is the limit. How many coins your plan includes and how to top up is explained on the [AI page](/docs/custom-bot/modules/ai).

| What happened                                                                             | Error code             |
| ----------------------------------------------------------------------------------------- | ---------------------- |
| The balance is empty                                                                      | `AI_CREDITS_EXHAUSTED` |
| Your server sent too many AI requests in a short time, or the text is longer than allowed | `LIMIT_EXCEEDED`       |
| The AI service did not answer in time or gave an unusable answer                          | `UNKNOWN`              |
| The text is empty                                                                         | `INVALID_INPUT`        |

All of them can be caught. Put the AI step in a **Try** block and decide in **On error** what a missing answer means, usually "do nothing". After the balance runs out, the bot remembers it for about a minute, so AI steps can keep failing for up to a minute after you top up. A message that only contains an image has no text, so guard for that.

For a flow that starts on every message, also set a [cooldown](/docs/custom-commands/flows#cooldowns), because a busy channel spends coins on every message.

In a test run the AI is not called and nothing is charged. **Sort text into a category** returns your first category with **Matched** Yes, **Decide yes or no** returns Yes, **Ask AI** returns a placeholder text and **Pull fields out of text** returns empty text, 0 and No. AI steps cannot be used in an autocomplete flow.

## The 30 second limit {#run-time}

A run may take at most 30 seconds, and one AI request can wait for about 12 seconds before it gives up. A loop with **For each item** over 100 messages that calls an AI step in each pass therefore does not fit, and when the time runs out the run ends and cannot be caught. See [Run limits](/docs/custom-commands/limits-and-safety#run-limits).

Keep AI steps to a handful per run: one per event, or a short loop over a list you capped first. Work that covers a long list belongs in many small runs, one per item, for example one [Schedule flow run](/docs/custom-commands/reference/actions/custom-commands/custom-commands-flows#schedule-flow-run) each.

## Examples {#examples}

All three flows start on a new message and put the AI step in a **Try** block. They are also among the examples the [MCP connector](/docs/custom-commands/mcp) can show your AI assistant.

### Ticket triage {#example-triage}

1. **Try**: **Sort text into a category with AI** on the message text, with the categories `billing`, `bug-report` and `account-access`, and an explanation of what each means.
2. **If** **Matched** is Yes, a **Switch** on **Category** replies with a different text for each category.
3. When nothing fits, or when the AI step fails, the flow stays silent.

A cooldown of one minute per user keeps the cost down.

### Spam check {#example-spam}

1. **Try**: **Decide yes or no with AI** with the question "Is this message spam, a scam or an unsolicited advertisement?" and the message text.
2. **If** **Decision** is Yes, the flow posts a link to the message in a moderator channel.

The flow flags the message instead of deleting it, because the message itself can influence the AI's answer.

### Order numbers {#example-order}

1. **Try**: **Pull fields out of text with AI** with two fields: `order-number` (text) and `wants-refund` (yes/no).
2. **If it has a value** on the order number: if the member wants a refund, the flow says it passed that on.
3. The order number is run through **Escape Discord markdown** before the flow repeats it in a reply, because it comes from a member's text.

## Limits {#limits}

| Item                                                           | Limit                                                                                           |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Text to read                                                   | 1 to 4000 characters                                                                            |
| Question of **Decide yes or no**, and the optional explanation | up to 500 characters                                                                            |
| Instruction of **Ask AI**                                      | up to 2000 characters                                                                           |
| Categories                                                     | 2 to 25 different entries, each up to 40 characters                                             |
| Fields                                                         | 1 to 10 fields; ID up to 16 characters (`a-z`, `0-9`, hyphen); description up to 200 characters |

For the types of the values, see [Value types](/docs/custom-commands/value-types). Stored results can be kept with [Data storage](/docs/custom-commands/storage).
