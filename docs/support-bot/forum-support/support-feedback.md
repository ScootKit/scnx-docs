---
sidebar_position: 7
title: Support Feedback
description: Ask members to rate their Forum Support experience after a thread closes - with custom questions, optional anonymity, and results in your analytics.
---

# Support Feedback

Collect a quick star rating from members after their thread closes, so you can measure how your team is doing. It uses the **same modal + star-rating** system as Modmail and the Ticket System (not reactions), and the results show up right in your dashboard. Ratings also flow into your [analytics](/docs/support-bot/general/analytics), including per-staff averages.

## Features {#features}

- A **star-rating** request (a modal with a ⭐ rating menu) sent to the member when their thread closes.
- Optional **custom follow-up questions** asked in the same modal.
- Optional **anonymous** feedback (the member's identity isn't stored).
- Optionally **post results to a channel** for your team to see.
- **Reviews in the dashboard** - browse recent ratings and the average right on this page.
- Only ask after threads that lasted a **minimum amount of time**, so quick or accidental threads don't trigger it.

## Setup {#setup}

1. Open the [Support Feedback](https://scnx.app/glink?page=support-system/forum-support/support-feedback) page in your dashboard.
2. Turn feedback on and [configure](#configuration) the options below.

## Configuration {#configuration}

| Setting                       | What it does                                                                                          |
| ----------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Enable feedback**           | Asks members to rate their experience after a thread closes.                                          |
| **Anonymous feedback**        | When on, the member's identity isn't stored with their rating.                                        |
| **Send results to a channel** | Posts submitted feedback to a channel of your choice.                                                 |
| **Feedback channel**          | The channel that receives the results (when the option above is on).                                  |
| **Minimum thread duration**   | Only ask for feedback on threads that were open at least this long, so trivial threads are skipped.   |
| **Custom questions**          | Add your own follow-up questions to the rating modal (short or paragraph answers, optional/required). |

The rate-request and post-submission messages are customizable right on this page.

## Seeing your reviews {#reviews}

This page also shows your **recent reviews**: the average rating and a list of the latest submissions (with any answers), pulled from the last 30 days - the same review view you get for Modmail and the Ticket System.
