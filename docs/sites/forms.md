---
sidebar_position: 4
title: Forms
description: Build forms on your SCNX site - field types, opening and closing, the submissions inbox, retention, CSV export and Discord notifications.
unlisted: true
---

# Forms

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

Forms let visitors send you structured information: staff applications, event sign-ups, contact requests, feedback and more. The answers are collected privately in your dashboard, not posted publicly on your site.

A form has two parts: the form itself (its questions and settings), which you build in the **Forms** section, and a **Form block** you place on a page so people can actually fill it in.

## Building a form {#build}

1. In the editor, open the **Forms** section.
2. Click **New form**, give it a name (for example "Application form") and click **Create form**.
3. Under **Questions**, click **Add question** for each thing you want to ask.
4. Add the form to a page: open the page, add a **Form block**, and pick your form in the block's options.

A form only shows up on your site once you add a Form block to a page and choose it there.

### Question types {#field-types}

Each question has a type:

| Type | What the visitor sees |
| --- | --- |
| **Short answer** | A single-line text box. |
| **Long answer** | A multi-line text box for longer replies. |
| **Pick one** | Choose a single option from a list you define. |
| **Pick several** | Tick any number of options from a list you define. |
| **Yes / No** | A simple yes-or-no choice. |

For each question you can set whether it **has to be filled in**, and a **max characters** limit for text answers. **Pick one** and **Pick several** questions need at least one choice, and every choice has to be different.

:::note An answer-space budget
The builder shows how much answer space your questions use. If the total gets too high, shorten a question's limit or remove one. The limit is measured in bytes when someone actually sends the form, and characters like Cyrillic, Japanese or emoji cost more than one byte each, so leave a little room if your audience writes in those.
:::

## Opening and closing a form {#open-close}

Each form has an **Accept answers** switch in its **Settings**:

- **On** - the form accepts submissions ("Open").
- **Off** - visitors still see the form, but they cannot send it ("Closed"). They get a friendly message instead.

You can also set an **answer limit**. Once the form has collected that many answers, it stops accepting new ones on its own. Leave it empty for no limit.

## The submissions inbox {#inbox}

Every answer lands in the form's **Answers** inbox, newest first. The form in the list shows an unread count so you can see new answers at a glance.

- Open any answer to read it in full.
- Delete a single answer, or delete all of a form's answers at once.
- Move between pages of answers with **Newer** and **Older**.

:::note Deleting needs admin access
Deleting answers, and deleting a whole form, need the website admin permission. Ask someone on your team who has it if the delete buttons are greyed out.
:::

## How long answers are kept {#retention}

Answers are not kept forever. Each form has a **Keep answers for (days)** setting, which defaults to **90 days**. Answers older than that are deleted automatically every day, so nothing piles up indefinitely. You can raise or lower this within the allowed range.

Deleting the whole form deletes every answer it collected along with it.

## Exporting to CSV {#csv}

Open a form's **Answers** inbox and click **Download as CSV** to get every answer as a spreadsheet file. This is handy for sorting applications or sharing them with your team outside SCNX.

## Discord notifications {#webhook}

You can get a message in Discord every time someone sends a form. In the form's **Settings**, paste a **Discord notification** webhook link into that field. It looks like `https://discord.com/api/webhooks/123.../abc...`, and we post every new answer into that channel.

To get a webhook link: in Discord, open your channel's settings, go to **Integrations → Webhooks**, create a webhook and copy its URL. Only real Discord webhook links are accepted. Leave the field empty for no notification.

## A note on visitor privacy {#privacy}

Forms are built to collect as little as possible. We store the answers people type and nothing else: **no IP address, no device information and no visitor identifiers** are saved with a submission.

The answers belong to you, the operator of the site, not to SCNX. Because of that, the form footer tells visitors where their answers go: "Responses go to the operators of \<site name\>." If you collect personal information, make sure your own privacy policy covers it. The retention setting and the export and delete tools are there to help you meet your obligations.

## Forms are live {#live}

Forms, their questions and their settings take effect right away. You do **not** have to publish your site again after changing a form, opening or closing it, or editing its questions. (Changing the questions does not change answers you already collected.)
