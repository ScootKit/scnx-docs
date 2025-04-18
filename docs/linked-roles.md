---
description: Setting up Linked Roles might take a few minutes, but by following this guide, you can get started easily.
---

# Setup Linked Roles on your Discord

Get started with Linked Roles on your Discord to improve your user experience by displaying important roles of users
next to their names.

:::success What is this?
Unsure what Linked Roles are? Linked Roles allow you to display the role of a user next to their username, like this:

![SCNX Linked Roles usage shown on a Discord server, the position of the user is displayed next to their username](https://scnx.app/img/linked-roles-example.png)

If you want to learn more about Linked Roles, you can do so in our [About Linked Roles](./linked-roles/intro) section.

:::

:::warning This feature is Early Access
Linked roles are Early Access. This means that in addition to a paid plan,
a [membership](https://membership.scootkit.com) with Early Access is also required. Early Access helps us invest money &
time in developing new features and products. We plan to make this feature available to everyone with Unlimited /
Professional plan without memberships in late Q2 2025.
:::

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: false}} additionalDetails={{
UNLIMITED: "Additional Early Access subscription required during Beta trial. Beta will end in Q2 2025.",
PROFESSIONAL: "Additional Early Access subscription required during Beta trial. Beta will end in Q2 2025."}} />

## Video (German) {#video}

Our developer Simon is happy to guide you through this setup process in
our [tutorial video on YouTube](https://www.youtube.com/watch?v=HR3yvTVpkOI). This video is in German right now, but
we're working on an English translation.

<Video url="https://www.youtube.com/watch?v=HR3yvTVpkOI" />

## 0. Pre-Flight-Checklist 🛫 {#step-0}

Before you can create your own Modmail on SCNX, please make sure that

* you have [added your Server to SCNX](./setup).
* your server has the paid [Unlimited](./scnx/guilds/plans) (<PlanPrice plan="UNLIMITED" type="MONTHLY"/>)
  or [Professional](./scnx/guilds/plans) (<PlanPrice plan="PROFESSIONAL" type="MONTHLY"/>) plan, or consider using a
  free trial, if
  available for you.
* you are the owner of the server you want to enable this feature
  on ([why?](./scnx/guilds/trusted-admins#troubleshooting)) - if you are not the owner, please ask them to enable this
  feature for you and grant you access as a [Trusted Admin](./scnx/guilds/trusted-admins).
* you (or one of your trusted admins) have Early Access (purchasable with
  a [ScootKit Membership Level 2 or higher](https://membership.scootkit.com)) during the beta trial. After the beta
  trial ends (likely in Q2 2025), this requirement will be removed.
* you've got 5-10 minutes of time (our estimate is that this takes around six minutes to finish on a computer, on mobile
  it may take
  a bit longer) to finish this guide - don't stop in the middle; your progress won't be saved.

## 1. Time to get started {#step-1}

To get started with the setup, please open the [Linked Roles page](https://scnx.app/glink?page=linked-roles/enable) of
your server in the SCNX dashboard. There, click on "Start setup" to get started. You might be shown a video or a link to
this guide, but you can also click "Continue" there, since you are already here :wink:

## 2. Select credentials {#step-2}

Next, SCNX will prompt you to select which Discord credentials you want to use for Linked Roles. If you are using other
SCNX products, like [Modmail](./modmail/intro) or the [Custom Bot](./custom-bot/custom-commands), you can select them
from this list and [skip to step 3](#step-3). If you are not using any other product, please follow [these instructions](#step-2-app).

![SCNX prompting user to select credential source](@site/docs/assets/linked-roles/setup/select-credentials.png)

### Creating a Discord bot application {#step-2-app}

If you are not using the credentials of another product, you'll need to create a new app in your Discord Developer Dashboard.

## 3. Configuring Linked Roles {#step-3}