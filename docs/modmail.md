# Setup your Modmail-Bot

Set up the world's most advanced Modmail-Bot in just a few minutes.

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: false}} additionalDetails={{
ACTIVE_GUILD: "Hosted 24/7, as long as your plan is active.",
PRO: "Hosted 24/7, as long as your plan is active."}} />

## 0. Pre-Flight-Checklist 🛫 {#step-0}

Before you can create your own Modmail on SCNX, please make sure that

* you have [added your Server to SCNX](./setup).
* your server has the paid [Unlimited](./scnx/guilds/plans) (<PlanPrice plan="UNLIMITED" type="MONTHLY"/>)
  or [Professional](./scnx/guilds/plans) (<PlanPrice plan="PROFESSIONAL" type="MONTHLY"/>) plan, or consider using a free trial, if
  available for you.
* you are the owner of the server you want to enable this feature
  on ([why?](./scnx/guilds/trusted-admins#troubleshooting)) - if you are not the owner, please ask them to enable this
  feature for you and grant you access as a [Trusted Admin](./scnx/guilds/trusted-admins).
* you've got a few minutes time (our estimate is that this takes around two minutes to finish on a computer, on mobile
  it may take
  a bit longer) to finish this guide - don't stop in the middle; your progress won't be saved.

## 1. Create your Discord-Application & -Bot 🤖 {#step-1}

:::caution
Do **not reuse** an existing application. You'll need a new application for your Modmail-Bot. SCNX does not support
running the Custom-Bot and Modmail and another, third-party Bot (like txadmin) with the same token / application -
please
create a new one for each bot.
:::

First, visit the [Discord Developer Portal](https://discord.com/developers/applications). There, create a new
application by clicking on "New Application" on the upper-right side of your Developer Portal. A modal will open. Enter
the name of the application (you can change this later), read & accept
the [Discord Developer Terms of Service](https://discord.com/developers/docs/policies-and-agreements/terms-of-service)
and the [Discord Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) (these
policies also apply to your use of the Discord API as part of SCNX) and create your bot by confirming with "Create".

![](@site/docs/assets/setup/custom-bot-1.png)

Next, open the "Bot"-Settings in the navigation bar on the left-hand side.
There, you can configure the avatar and username - you don't need to,
as you can also [do this directly on SCNX](./scnx/guilds/bots#change-profile) and get prompted to do so when your bot
got created.

The final step in the Developer Dashboard is to generate a token and copy it. To do so, open the "Bot" page of your
application
and click on "Reset token" (still on the Bot page) and confirm your request in the modal. You might get asked
to enter a 2FA-Code for your Discord-Account.

Once done, please **copy the token of your bot**. You'll need it in the next step.

![](@site/docs/assets/setup/custom-bot-3.png)

:::danger
**Only** paste your token in the Dashboard. **Never** send a token to another user, trusted-admins or a member
of our staff. Treat tokens like a password - users with access to your token are able to use your bot to perform
harmful actions.
:::

## 2. Create your Modmail on SCNX 🚀 {#step-2}

Open the [SCNX Dashboard](https://scnx.app/user/guilds/) and select the server you want to create the bot for. Next,
select "Modmail" in the sidebar. You'll find a video showing how you should create the Discord-Bot. If you've followed
this guide, you can confidently
skip this using the "I have created a bot"-button.

![](@site/docs/assets/setup/modmail-1.png)

Next, you'll be asked to enter the token you obtained in step 1.
Do this and click on "Check my token & create bot". SCNX will verify your token and continue to the next step if it's
correct.

![](@site/docs/assets/setup/modmail-2.png)

Now you can configure the basic configuration of your Modmail. First, you'll need to select a category on your Discord
in which new tickets should get created (you can change it later).
The permissions of ticket channels will be synced to the category. Once done, select a log channel. Logs from closed
tickets will be sent into this channel in addition to other important information.
If you have configured these two options, click on "Create Modmail-Bot".

![](@site/docs/assets/setup/modmail-3.png)

SCNX will now set up hosting for your Modmail
and automatically configures the Discord Bot for you.
![](@site/docs/assets/setup/modmail-4.png)

Once SCNX has set up your Modmail, you'll need to invite the Modmail bot to your server. To do this, you only need to click on
the "Add the bot to your Discord"-Button. This will open Discord's OAuth2 Grant Screen
(that's how nerds call the screen below 🤓). SCNX already selected your server for you. Simply click "Continue" and
"Authorize" to finish the process. If you want, you can remove the "Administrator" permission, but this will make it
more
difficult to use the bot down the line, as SCNX is not yet able to show
which feature needs what permissions and handle permission-related error correctly.

![](@site/docs/assets/setup/modmail-5.png)

Once this is done, your Modmail is fully ready to use SCNX. Return to the setup flow to edit the bot
profile with the "Edit profile" button ([you can also do this later](./scnx/guilds/bots#change-profile)), configure your
new Modmail or explore all features your Modmail.

![](@site/docs/assets/setup/modmail-6.png)

:::tip Running into issues?
We have a [troubleshooting guide for Modmail-Bots](./modmail/troubleshooting) ready for you. If that didn't help,
we're always happy to help, just
visit [scnx.app/help](https://scnx.app/help).
:::

## 3. Celebrate your new Modmail 🎉 {#done}

If you did everything right, your Modmail should now be online on Discord. Pat yourself on the back. You did a great job and
are now ready to explore the universe of a highly advanced and fully customizable Modmail for your community - not just a Modmail,
it's *your* Modmail[.](https://cdn.scderox.de/IUopj39jjiOPASDioh/7xpodw.jpg)

Here are a few things you can do now:

* try your Modmail: Send it a DM and observe how it opens a ticket for your team to answer.
* [configure](./modmail/configuration) and enable more Modmail features.
* level up your support system by discovering [advanced Modmail features](./modmail/advanced-features).
* and much more, open the [Modmail Documentation](./modmail/intro) to view every option.