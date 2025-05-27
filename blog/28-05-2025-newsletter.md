---
title: "Supercharge Your Server's Leveling: Announcing XP Multipliers, Level Simulator & Custom Formulas!"
description: Supercharge your SCNX Level System! Discover new XP Multipliers, a new Level Simulator & Custom Level Formulas to fully customize Discord server leveling and boost user engagement
slug: 2025-custom-level-curves
authors:
  - scderox
tags:
  - Newsletter
  - SCNX
  - Level System
---

Hi everyone,

The SCNX Level System has always been a powerful tool for engaging your community and rewarding activity. We're thrilled
to announce three game-changing new features that offer unprecedented customization and control over how XP is earned and
how levels are calculated: **XP Multiplicators, a new Level Simulator and Custom Level Formulas!**

<!-- truncate -->

These additions are designed to give you the ultimate flexibility in tailoring the leveling experience to perfectly
match your server's unique vibe and community dynamics.

## Fine-Tune Engagement with XP Multiplicators {#xp-multiplicators}

Ever wanted to give a little extra XP boost to users with specific roles, like server boosters or event winners? Or
perhaps encourage more activity in a particular channel? With XP Multiplicators, now you can!

By default, every user and channel has a multiplication factor of 1. This improved feature allows you to:

* **Assign Role Multiplicators**: Grant users with certain roles an XP bonus for their messages. If a user has multiple
  roles
  with multipliers, these factors multiply together, offering significant boosts for your most dedicated members!
* **Set Channel Multiplicators**: Designate channels where messages will earn more (or less!) XP. Want to fire up
  conversation
  in your #general-chat? Give it a 1.5x multiplier! Need to gently discourage XP farming in a #bot-spam channel? A 0.5x
  multiplier will do the trick.

Example Scenarios:

* **VIP Boost**: A user with a special "VIP" role, which has an XP multiplier configured, sends a message. Because of
  their
  role, they receive extra XP for that message compared to a user without the VIP role.
* **Featured Channel & Booster**: A user who is a Server Booster (which comes with its own role-based XP multiplier)
  posts in
  a channel that you've designated as a "featured" channel (which has a channel-based XP multiplier). Because both their
  role and the channel provide an XP boost, they earn an even greater amount of XP for their message in that specific
  place.
* **Multiple Roles**: If a user holds several different roles, and each of those roles has its own XP multiplier, all
  those
  multipliers effectively combine. This results in a significantly larger overall XP boost for any message they send,
  acknowledging their multiple contributions or statuses on the server.

We recommend using moderate values for boosts to keep things balanced, but the power is in your hands!

Check out our full and newly
improved [Level System documentation](/docs/custom-bot/modules/community/levels/#multiplicators) for more information and
configuration instructions!

## Craft Your Perfect Progression: Custom Level Formulas {#level-curve}

While our pre-set level curves (Easy Linear, Default Linear, Exponentiation) suit many servers, we understand that some
admins want absolute control. Introducing **Custom Level Formulas**!

This feature allows you to define the exact mathematical formula used to calculate the XP required to reach any given
level. You are no longer limited to our selections; you can design a progression that's as gentle or as steep as you
desire.

**How it works**:

You'll provide a mathematical formula where the variable x represents the level to be calculated. The result of the
formula will be the total XP needed to achieve that level x.

Examples of valid custom level curves:

* Our "Easy Linear" curve: `750x+((x−1)`
* Our "Exponentiation" curve: `350^2(x-1)`
* A simple custom curve: `1000*1.5*x`

**Configuration**:
In the "Module Configuration" under "Type of level curve," select "Custom formula." Then, input your mathematical
masterpiece into the "Custom Level Formula (if enabled)" field.

Learn more about our [built-in level curves](/docs/custom-bot/modules/community/levels/#level-curves) and
about [custom level curves](/docs/custom-bot/modules/community/levels/#custom-level-curve) for more information and
configuration instructions!

## Visualize Your Victory: Meet the Brand New Level Simulator! {#level-simulator}

So, you've crafted what you believe is the perfect custom level formula, or perhaps you're trying to decide between our
standard curves with your unique XP settings. But how will it actually feel for your users? How many messages will it
take to hit those milestone levels?

Stop guessing and start simulating! We're thrilled to also introduce another fantastic new tool to your SCNX arsenal:
the **[Level Simulator](/docs/custom-bot/modules/community/levels/#level-simulator)**!

This powerful, interactive feature is designed to give you a clear, practical preview of your leveling progression.
Think of it as your personal test environment for all things XP and levels. By simply entering the values from your
module configuration (like the average XP given per message) and selecting a level curve – whether it's one of our
defaults or your own custom creation – the simulator will instantly show you:

* **XP Needed Per Level**: See exactly how much cumulative XP is required for a user to reach any specific level you input.
* **Estimated Messages to Level Up**: Get a tangible idea of the effort involved by seeing an approximation of how many
messages a user would need to send to achieve that level.

### Why the Level Simulator is Your New Best Friend

The Level Simulator is more than just a calculator; it's an indispensable tool for fine-tuning your server's engagement
strategy:

* **Perfecting Custom Formulas**: When designing your own level curve, the simulator is invaluable. You can instantly see if
your formula creates a smooth progression, if it becomes too difficult too quickly, or if it's perhaps too easy. Tweak
your formula, re-simulate, and iterate until it feels just right.
* **Choosing the Right Standard Curve**: Even if you're not using a custom formula, the simulator helps you understand how
our 'Easy Linear', 'Default Linear', or 'Exponentiation' curves will behave with your specific XP-per-message settings.
Balancing the Grind: Avoid making your leveling system a frustrating slog or so rapid that levels feel meaningless. The
simulator helps you find that sweet spot.
* **Informed Decisions**: Make changes to your XP settings or level curve with confidence, knowing you've seen a projection of
their impact beforehand.
* **Save Time & Frustration**: Instead of waiting for days or weeks to see how your new setup is performing live and then
having to readjust (and potentially reset progress), you can get a very good idea upfront.

* **How to Use It**:
You'll find the Level Simulator within the [Levels module documentation page](/docs/custom-bot/modules/community/levels/#level-simulator). Simply input your intended configuration
values where indicated, select or input your level curve, and see the results! It's an intuitive way to experiment
without any real-world consequences on your server.

A Quick Note:
Currently, the Level Simulator focuses on XP gained from messages. The XP awarded for time spent in voice channels is a
separate calculation and isn't factored into the simulator's estimates.

We strongly encourage you to make the Level Simulator your go-to tool when setting up or adjusting your level system.
Paired with the flexibility of custom level formulas and XP multipliers, it gives you unparalleled control to craft a
truly engaging and rewarding experience for your community.

## Get Started Today! {#start}

These new features are designed to empower you to create a truly unique and engaging leveling system on your
SCNX-powered Discord server. Dive into your module configuration dashboard, experiment with multipliers, and craft the
perfect level curve to reward your community in a way that's all your own.

We can't wait to see the creative ways you'll use XP Multiplicators and Custom Level Formulas! As always, check out the
[full documentation](/docs/custom-bot/modules/community/levels/) for all the details.