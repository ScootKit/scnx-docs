---
sidebar_position: 7
title: Credits & Pricing
description: How AI FAQ credits work - monthly grants, per-answer costs, indexing costs, top-ups, and out-of-credits behavior.
---

# Credits and pricing

AI FAQ uses your server's **AI credits** every time the bot generates an answer or you save a new FAQ entry. This page covers what each thing costs, how your monthly grant works, and what to do when credits run out.

## Monthly free grant {#monthly-grant}

Each paid plan tier comes with a free monthly grant of AI credits, topped up on the **25th of each month**. Unused credits roll over into the next month - you never lose what you didn't spend.

| Plan tier     | Monthly credits |
| ------------- | --------------- |
| STARTER       | 25              |
| ACTIVE_GUILD  | 100             |
| PRO           | 250             |
| UNLIMITED     | 300             |
| PROFESSIONAL  | 600             |

If you regularly run out before the monthly refresh, you can top up from the [**Pricing**](https://scnx.app/glink?page=pricing) page in your dashboard.

## What each answer costs {#per-answer}

Every AI answer charges a small amount of credits. The exact cost depends on what the AI actually had to do:

- **A rejected message** costs **1 credit**. This happens when the AI refused to answer (e.g. abusive content) or the question was filtered out before it ran.
- **Small talk or off-topic chatter** costs **3 credits**. This happens when the AI handled a quick "thanks" or "hi" without needing to search your FAQ.
- **A real FAQ answer** costs **15 credits**. This is the most common case: the AI searched your FAQ entries, found the right one(s), and wrote an answer based on them.

### Provider multiplier {#provider}

The numbers above are for the OpenAI provider, which is the cheapest. If your server is set to a different provider, the per-answer costs are multiplied:

- **OpenAI** - base rate (1×)
- **Google Gemini** - 2× the base rate
- **Anthropic** - 3× the base rate

So a real FAQ answer on the Anthropic provider works out to 45 credits. Your current provider is shown in **Settings → Status** on the AI FAQ page, along with how many answers your current balance will buy you at the current provider's rate.

## What FAQ entries cost to save {#indexing}

When you save a new or edited FAQ entry, the bot splits it into searchable chunks so the AI can find the right one later. Each chunk costs **1 credit** to index.

- For typical English prose, a chunk works out to roughly 2,000 characters - so a 4,000-character entry costs about 2 credits to save, and a 20,000-character entry around 10 credits. Code-heavy content tends to chunk smaller, so it can be a little higher per character.
- The entry editor shows the exact chunk count and credit cost live as you type, so you can see what it'll cost before you click save.
- **Editing just the title, or archiving/unarchiving an entry, is free.** Only changes to the answer text trigger the recharge.
- Re-saving without changing the answer is also free.
- Archived entries don't cost anything to keep around.

See [Writing FAQ entries](/docs/support-bot/ai-faq/faq-entries#indexing-cost) for the same thing in context of the editor.

## Realistic monthly spend {#scenarios}

Three rough sketches of what a month looks like at different volumes. Real numbers depend on the mix of question types (rejected vs. small talk vs. real search) and your AI provider.

### Quiet help channel, mostly small talk

A small community where the AI sees around 30 questions a month, most of which are short chatter or "thanks" rather than real FAQ lookups.

- ~20 small-talk interactions × 3 credits = 60 credits
- ~10 real FAQ answers × 15 credits = 150 credits
- **Total: roughly 200 credits / month**

Easily covered by the **PRO** (250) or **UNLIMITED** (300) monthly grant. **ACTIVE_GUILD** (100) would need a small top-up most months.

### Active support server, OpenAI

A busy support server where the AI handles ~150 questions a month, mostly real FAQ lookups via the channel auto-answer.

- ~30 small-talk × 3 credits = 90 credits
- ~120 real FAQ answers × 15 credits = 1,800 credits
- **Total: roughly 1,900 credits / month**

Well above any plan's monthly grant - you'll be topping up regularly. If you're consistently here, consider talking to us about enterprise volume pricing.

### High-traffic server on Anthropic

A larger server using the Anthropic provider (3× multiplier) with ~500 questions a month, mostly real FAQ lookups.

- ~100 small-talk × (3 × 3) = 900 credits
- ~400 real FAQ answers × (15 × 3) = 18,000 credits
- **Total: roughly 19,000 credits / month**

Well beyond plan grants. Either switch to OpenAI to drop the multiplier (saving roughly two-thirds), or move to an enterprise plan with volume-priced credits - see [Enterprise & Docs Sync](/docs/support-bot/ai-faq/enterprise-and-docs-sync).

## Topping up credits {#top-ups}

Credit top-ups are available on the **Pricing** page in your SCNX dashboard. Top-up credits stack on top of your monthly grant and roll over until you use them.

:::tip Enterprise
Top-up rates are flat per credit. If your server regularly spends well above its monthly grant, volume-rate pricing and fixed monthly budgets are available on enterprise plans - see [Enterprise & Docs Sync](/docs/support-bot/ai-faq/enterprise-and-docs-sync) or [contact sales](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::

## When credits run out {#out-of-credits-behavior}

When your server's balance hits zero, the AI can't answer anything until you top up. You control what members experience during that window under **Settings → Fallback behavior → When credits run out**:

- **Tell members the server is out of AI credits** (recommended, default) - the bot sends a short note explaining the AI is temporarily unavailable. Keeps the member in the loop and gives staff a visible signal to top up.
- **Offer to open a ticket instead** - the bot shows a button so the member can still reach staff. They aren't told why.
- **Stay silent (do nothing)** - the bot says nothing at all. Members might think the bot is broken. Only use this if you actively monitor your balance.

## Cutting credit spend {#reducing-spend}

If you're going through credits faster than you'd like, the biggest knobs are on the channel auto-answer side - the AI runs much more often there than in the gatekeeper:

- **Raise the Cooldown** so one member can't trigger answer after answer in quick succession. See [channel auto-answer filters](/docs/support-bot/ai-faq/channel-mode#filters).
- **Raise the Minimum question length** so short chatter is skipped.
- **Add more prefixes to ignore** to skip command-style messages from other bots.
- **Disable channel auto-answer on noisy channels** - leaving the pre-ticket gatekeeper running on its own is usually much cheaper, because it only fires when someone is actually opening a ticket.
- **Archive outdated FAQ entries** so they don't take up space in the AI's search.
- **Switch to a cheaper provider** if your current provider's quality difference doesn't justify the multiplier.

:::info Where to check your usage
The **Settings → Status** panel on the AI FAQ page shows your current balance, roughly how many answers it'll buy you, and your current provider. The [Insights](/docs/support-bot/ai-faq/insights) page shows how many answers have actually been generated and where they went.
:::
