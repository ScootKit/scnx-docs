---
sidebar_position: 3
title: FAQ Entries
description: Write the FAQ entries the AI uses to answer member questions. Covers entry structure, the indexing cost, and the active-entry quota.
---

# FAQ Entries

Each FAQ entry is a question your members might ask, plus the answer you want the AI to use. These entries are the **only** thing the AI reads from - it never invents answers from outside knowledge. A few well-written entries do more for you than dozens of vague ones.

## What an entry looks like {#structure}

An entry has two parts:

- **A title.** This is an internal label so your staff can find the entry in the dashboard - members never see it, and the AI doesn't use it to match questions. Keep it short and descriptive, like "Refund policy" or "How to claim my role".
- **An answer.** This is what the AI actually reads when a member asks a question. Write it the way you'd explain the topic to a member in chat - include the words a member would naturally use, plus the steps or facts you want them to walk away with. Plain Markdown works (bullet points, links, bold text). Answers can be up to **50,000 characters** long.

Each entry is either **active** (the AI uses it) or **archived** (hidden from the AI but kept in your database).

:::tip Write for the member, not for the AI
Don't keyword-stuff. Write the entry like you're answering one of your members in chat. Cover the question phrasing real members use, plus the concrete answer they need. The AI is much better at finding the right entry when both the question and the answer are clearly written out.
:::

## What makes a good entry {#good-entry}

A few habits that consistently produce entries the AI uses well:

- **One topic per entry.** A "Refund policy" entry and a "Subscription cancellation" entry will each match more precisely than one merged "Billing" entry that covers both.
- **Use the words members would type,** not just internal jargon. If your members call the premium tier "Pro+" but staff calls it "Tier 2", include both.
- **Cover the question and the answer.** "How do I cancel?" + "Settings → Billing → Cancel Subscription" works much better than just the steps with no framing.
- **Use Markdown headings (`##`) inside long entries** to break the content into clear sections. The AI chunks on those headings, so distinct sub-topics stay separable when the AI searches.
- **Concrete beats abstract.** Real examples, exact menu paths, real link text, real values. The AI will paraphrase the wording but won't invent specifics.

### Example entry {#example-entry}

Here's what a small, well-shaped entry looks like:

**Title (internal label):** `Cancelling a subscription`

**Answer:**

```markdown
## How to cancel your subscription

You can cancel your subscription at any time from your account page.
Once you cancel, you keep access until the end of the current billing period - you won't be charged again after that.

### Steps

1. Open https://example.com/account/billing.
2. Click **Manage subscription**.
3. Click **Cancel subscription** at the bottom of the page.
4. Confirm in the popup.

You'll get a confirmation email within a few minutes. If you don't see it, check your spam folder.

### Common questions

- **Will I be refunded for unused time?** No, cancelling stops future charges but doesn't refund the current period. If you need a refund for a specific reason, open a ticket and our team will look into it.
- **Can I resubscribe later?** Yes - sign in and pick a plan again. Your old data and roles are restored automatically.
- **I can't access the billing page.** Make sure you're signed in with the same account you subscribed with. If you still can't see it, open a ticket and we'll help.
```

A few things worth noting:

- The title is short and only for staff - members never see it.
- The answer covers the **question** (cancelling, refunds, resubscribing) **and** the actual steps a member would follow.
- The headings (`## ...`, `### ...`) split the answer into clear sub-topics. The AI uses those headings as natural breakpoints.
- "Common questions" near the end captures the variations members type. It's much easier to keep one entry that covers four related questions than to maintain four separate entries.
- Length sits comfortably under the 50,000-character cap - this entry is around 800 characters.

## Importing from a file {#file-import}

In the [entry editor](https://scnx.app/glink?page=support-system/ai-faq/manage) there's an **Import from .md or .txt** button. Drop in a Markdown or plain-text file and it lands in the answer field for you to review and save. If the file is longer than 50,000 characters, it'll be trimmed to fit with a heads-up.

For pulling in larger or constantly-changing content (whole GitHub repos, Notion pages, help-center articles), see [Enterprise & Docs Sync](/docs/support-bot/ai-faq/enterprise-and-docs-sync).

## Archive vs delete {#archive-vs-delete}

- **Archive** hides an entry from the AI but keeps it in the database. You can unarchive any time. Archived entries don't count toward your active-entry limit and don't cost anything to keep around.
- **Delete** permanently removes the entry. There's no undo. Use this for entries that should never come back.

Archive while you're experimenting (a draft you're unsure about, a seasonal entry you'll bring back later). Delete only when the content is gone for good.

## What it costs to save an entry {#indexing-cost}

When you save an entry's answer, the bot splits it into searchable chunks and stores them so the AI can find the right one later. That prep work uses a small number of AI credits.

- The cost is **1 credit per chunk.** For typical English prose, a chunk works out to roughly 2,000 characters - so a 4,000-character entry costs about 2 credits to save, and a 20,000-character entry costs about 10. Code-heavy or markdown-dense content tends to chunk smaller, so the cost can be a bit higher per character.
- The editor shows the exact chunk count and credit cost live as you type, so you can see what saving will charge before you click the button.
- Editing just the title, or archiving/unarchiving an entry, is **free** - only changes to the answer text trigger the recharge.
- Re-saving an entry whose answer hasn't materially changed doesn't re-index, so it's free too.
- Archived entries don't run up any further cost.

See [Credits and pricing](/docs/support-bot/ai-faq/credits-and-pricing) for the full picture (including per-answer costs).

## When to split a long entry {#splitting}

The body of a single entry caps out at **50,000 characters.** Entries up to that limit are fully indexed - nothing is silently dropped within the cap.

Even so, very long entries aren't always the best choice:

- **A single huge entry can crowd out other entries** in the AI's search results, because so many of its chunks are eligible matches at once.
- **Mixing many topics in one entry** weakens the AI's ability to surface the right section - it may quote from a related-but-wrong part of the same entry.

A good rule of thumb: if your draft has more than three or four loosely-related topics under one title, split it into separate entries (one per topic). The AI will match each one more precisely, and you'll get a better-organized dashboard for your staff.

## Active-entry limit {#quota}

You can have up to **100 active entries** per server. Archived ones don't count. The dashboard warns you as you get close to the limit and again when you've reached it - if you need more, archive entries you no longer use.

:::tip Enterprise
The 100-entry limit suits most servers, but product documentation, multi-language knowledge bases, and larger support orgs often need more room. Custom quotas and automated docs ingestion are available on enterprise plans - see [Enterprise & Docs Sync](/docs/support-bot/ai-faq/enterprise-and-docs-sync) or [contact sales](https://scnx.app/user/support/new?topic=cmp0a46s300e9yxcfspiqvgc0).
:::

## Archiving several entries at once {#bulk-archive}

On the FAQ entries page (you can also jump straight to [Add new entry](https://scnx.app/glink?page=support-system/ai-faq/entries/new) when you want to create one):

1. Tick the checkbox next to each entry you want to archive.
2. Click **Archive selected**.
3. Confirm in the popup.

If anything fails to archive, the failed entries stay selected so you can try again with one more click. There's no bulk-delete on purpose - deletion is per-entry so you can't wipe out a batch by accident.
