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
from this list and [skip to step 3](#step-3). If you are not using any other product, please
follow [these instructions](#step-2-app).

![SCNX prompting user to select credential source](@site/docs/assets/linked-roles/setup/select-credentials.png)

### Creating a Discord bot application {#step-2-app}

If you are not using the credentials of another product, you'll need to create a new app in your Discord Developer
Dashboard.

To do so, visit the [Discord Developer Portal](https://discord.com/developers/applications). There, create a new
application by clicking on "New Application" on the upper-right side of your Developer Portal. A modal will open. Enter
the name of the application (you can change this later), read & accept
the [Discord Developer Terms of Service](https://discord.com/developers/docs/policies-and-agreements/terms-of-service)
and the [Discord Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) (these
policies also apply to your use of the Discord API as part of SCNX) and create your bot by confirming with "Create".

![This screenshot shows how to create a new application in the Discord Developer Portal](@site/docs/assets/setup/custom-bot-1.png)

Next, open the "Bot"-Settings in the navigation bar on the left-hand side.
There, you can configure the avatar and username.

The final step in the Developer Dashboard is to generate a token and copy it. To do so, open the "Bot" page of your
application
and click on "Reset token" (still on the Bot page) and confirm your request in the modal. You might get asked
to enter a 2FA-Code for your Discord-Account.

Once done, please **copy the token of your bot and enter it on SCNX**.

![This screenshot shows how to generate and copy the Bot Secret](@site/docs/assets/setup/custom-bot-3.png)

Once done, SCNX will check your token and synchronize data with Discord. Once done, you can continue
with [the next step](#step-3).

## 3. Save redirect URL {#step-3}

Once your credentials are checked and SCNX has synchronized some Linked-Role data with Discord, you'll need to open the
Oauth2 page of your Discord Developer Portal. The easiest way to do so is to click on the link that is visible on SCNX.
Alternatively, you can click on "Oauth2" tab in your developer dashboard.

![This screenshots shows how the user should click on "Open Oauth2 panel"](@site/docs/assets/linked-roles/setup/click-on-oauth2-page.png)

Once you've opened the Oauth2 page, you'll need to copy and paste the redirect URL from your SCNX Dashboard. Doing this
is easy: Simply click on the URL shown in SCNX (this will copy the URL to your clipboard). If you are wondering, the
redirect URL should look something like this:
`https://linked-roles.scnx.app/api/b4e5e89a-1c92-11f0-b688-03c2706e348f/callback` (the middle part might change based on
your server).

![This screenshots shows which value the user should copy from the dashboard](@site/docs/assets/linked-roles/setup/copy-redirect-url.png)

Go back to the "Oauth2"-Page
in your Discord Developer Portal. There, scroll to "Redirects", click on "Add another" and paste the URL you just copied
in the text field. Remember to save your changes!

![This screenshot shows where to paste the copied redirect URL](@site/docs/assets/linked-roles/setup/enter-redirect-url.webp)

## 4. Enter Client Secret {#step-4}

:::warning Confusion avoidance warning
There's a big difference between your **Bot Token** and **Client Secret**. Please double-check which value you are
entering to avoid issues later. For this step, you'll need the **Client Secret**, not the Bot Token.
:::

Once you've entered and saved the Redirect URL, please stay on the "Oauth2 page". Below "Client Information", generate
the Client secret, by clicking on "Reset Secret" below the "Client Secret" field. Discord might ask you to verify your
account by entering a 2FA code. Once this is done, you'll be able to copy the Client-ID. Enter the copied value in your
SCNX Dashboard and click on "Create Linked-Roles" to finish setup.

![This screenshot shows how to copy the client secret](@site/docs/assets/linked-roles/setup/copy-client-secret.png)

## 5. Time to party 🎉 {#step-5}

:::info Don't worry
Your new Linked Role Bot won't stay online unless you use another SCNX product with the same credentials.
:::

Finally, finish setup by inviting the Linked Roles Bot to your server. Do so by clicking "Invite Linked-Roles-Bot" in
the dashboard. Once done, you can continue by creating your first Linked Role. To learn more about that, continue in
our [Role management documentation](./linked-roles/role-managment#create-linked-scnx-role), where we explain how to
create your Linked Roles on SCNX and on Discord. You can also jump
to [the Linked Roles index page](/docs/linked-roles/overview) if you are looking for something else to continue with.

![This screenshot shows the success message after setup](@site/docs/assets/linked-roles/setup/success-party-time.png)
