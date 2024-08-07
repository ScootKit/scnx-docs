# Richte deinen Modmail-Bot ein

Richte den weltweit fortgschrittensten Modmail-Bot ein in nur ein paar Minuten.

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: false}} additionalDetails={{
ACTIVE_GUILD: "24/7 verfügbar, solange dein PLan aktiv ist.",
PRO: "24/7 verfügbar, solange dein PLan aktiv ist."}} />

## 0. Bevor du loslegst {#step-0}

Bevor du deinen eigenen Modmail Bot auf SCNX erstellen kannst, stelle sicher, dass

* du [deinen Server zu SCNX hinzugefügt hast](./setup).
* dein Server einen bezahlten [Aktiven Server Plan](./scnx/guilds/plans) (<PlanPrice plan="ACTIVE_GUILD" type="MONTHLY"/>)
  oder den [PRO](./scnx/guilds/plans) (<PlanPrice plan="PRO" type="MONTHLY"/>) Plan besitzt, oder du die Testphase verwendest, falls diese
  für dich verfügbar ist.
* du der Inhaber des Servers bist, in dem du diese Funktion aktivieren willst ([warum?](./scnx/guilds/trusted-admins#troubleshooting)) - falls du nicht der Inhaber des Servers bist, frage bitte den Inhaber,
* diese Funtion zu aktivieren und dir Zugruff als [Trusted Admin](./scnx/guilds/trusted-admins) zu geben.
* du ein paar Minuten Zeit hast (Es sollte ca. 2 Minuten an einem Computer dauern, auf Handys ein bisschen länger) um diese Anleitung zu beenden - hör nicht in der Mitte auf; dein Fortschritt wird nicht gesichert.

## 1. Erstelle deine Discord-Application & -Bot 🤖 {#step-1}

:::caution
Verwende **keinen** bereits existierenden Bot. Du benötigste eine neue Application für deinen Modmail Bot auf SCNX. SCNX unterstützt es nicht, 
den Discord-Bot und den Modmail-Bot und einen anderen Bot (wie beispielsweise txadmin) mit dem selben Token / mit der gleichen Application zu verwenden -
bitte
erstelle für jeden bot eine neue Application.
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
