# Eigenen Bot einrichten

Erstelle einfach deinen eigenen Discord-Bot auf SCNX. Die Einrichtung braucht nur wenige Minuten.

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: true}} additionalDetails={{
STARTER: "Wird 24/7 online gehalten, muss jede Woche durch das Anschauen einer Werbung verlängert werden.",
ACTIVE_GUILD: "Wird 24/7 online gehalten, solange dein Plan aktiv ist.",
PRO: "Wird 24/7 online gehalten, solange dein Plan aktiv ist."}} />

## 0. Pre-Flight-Checklist 🛫 {#step-0}

Bevor du einen eigenen Bot auf SCNX erstellen kannst, stelle bitte sicher dass

* du deinen [Server zu SCNX hinzugefügt hast](./setup).
* du der Eigentümer des Server bist, auf dem du diese Funktion
  aktivieren möchtest ([warum?](./scnx/guilds/trusted-admins#throubleshooting)) - wenn du nicht der Eigentümer bist, frage ihn bitte,
  ob er die Funktion aktiviert und dir [Trusted-Admin-Rechte](./scnx/guilds/trusted-admins) geben kann.
* du ein paar Minuten Zeit hast (wir schätzen, dass es am Computer ungefährt zwei Minuten dauert, am Handy ein bisschen länger),
  diesen Prozess zu beenden - höre nicht währenddessen auf; dein Fortschritt wird nicht gespeichert.

## 1. Erstelle deine Discord-Applikation & -Bot 🤖 {#step-1}

:::caution
Verwende eine bestehende Applikation **nicht noch einmal**. Du brauchst eine neue Applikation für deinen eigenen Bot. SCNX unterstützt das
Zusammenlaufen über die selbe Applikation / Token von Modmail und deinem eigenem Bot nicht, genau so mit Drittanbieter-Bots (wie txadmin) - bitte
erstelle eine neue Applikation für jeden Bot.
:::

Öffne als erstes das [Discord Developer Portal](https://discord.com/developers/applications). Erstelle dort eine neue
Applikation durch klicken auf "New Application" auf der oberen rechten Seite. Ein Formular wird sich öffnen, gebe
dort den Namenthe name of the application (you can change this later), read & accept
the [Discord Developer Terms of Service](https://discord.com/developers/docs/policies-and-agreements/terms-of-service)
and the [Discord Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) (these
policies also apply to your use of the Discord API as part of SCNX) and create your bot by confirming with "Create".

![](@site/docs/assets/setup/custom-bot-1.png)

Next, open the "Bot"-Settings in the navigation bar on the right-hand screen.
There, you can configure the icon and username - you don't need to,
as you can also [do this directly on SCNX](./scnx/guilds/bots#change-profile).

What you need to do next is enabling all the so-called "Intents" of your bot. These allow your bot to access certain
data on
your server. This is required for certain features to work. Additionally, we suggest disabling the "Public bot"-Setting,
as your Custom-Bot will only work on your server. Take extra care to not enable the "Requires Oauth2 Code Grant"
functionality.

![](@site/docs/assets/setup/custom-bot-2.png)

You are almost done in the Discord Developer Dashboard - the last step is to generate a token and copy it. To do so,
scroll up and click on "Reset token" (still on the Bot page) and confirm your request in the modal. You might get access
to enter a 2FA-Code for your Discord-Account.

Once done, please **copy the token of your bot**. You'll need it in the next step.

![](@site/docs/assets/setup/custom-bot-3.png)

:::danger
**Only** paste your token in the Dashboard. **Never** send a token to another user, trusted-admins or a member
of our staff. Treat tokens like a password - users with access to your token are able to use your bot to perform
harmful actions.
:::

## 2. Create your Bot on SCNX 🚀 {#step-2}

Open the [SCNX Dashboard](https://scnx.app/user/guilds/) and select the server you want to create the bot for. Next,
select "Discord-Bot" in the sidebar.

![](@site/docs/assets/setup/custom-bot-4.png)

You'll find a video showing how you should create the Discord-Bot. If you've followed this guide, you can confidently
skip this using the "I have created a bot"-button. Next, you'll be asked to enter the token you obtained
in [step 1](#step-1). Do this and click on "Check my token". SCNX will now verify your token. Once SCNX finished
processing, please invite your Bot to your server using the button labeld "Invite Bot" - if you missed this step, don't
worry; you can also [invite the bot](./scnx/guilds/bots#invite-bot) later. Don't close this tab yet - you'll need to
click on "Create bot" to finish the process.

![](@site/docs/assets/setup/custom-bot-5.png)

To invite your bot, you only need to click on the "Invite Bot"-Button. This will open Discord's Oauth2 Grant Screen
(that's how nerds call the screen below 🤓). SCNX already selected your server for you. Simply click "Continue" and
"Authorize" to finish the process. If you want, you can remove the "Administrator" permission, but this will make it
more
difficult to use the bot down the line, as SCNX is not yet able (the nerds are still working on this 🤓) to show
which feature needs what permissions and handle permission-related error correctly.

![](@site/docs/assets/setup/custom-bot-6.png)

Last, but not least, you'll need to confirm that you want to create your bot in the SCNX Dashboard - simply click on "
Create bot".

![](@site/docs/assets/setup/custom-bot-7.png)

:::tip Running into issues?
We have a [troubleshooting guide for Custom-Bots] ready for you. If that didn't help, we're always happy to help, just
visit [scnx.app/help](https://scnx.app/help).
:::

## 3. Celebrate your new Bot 🎉 {#done}

If you did everything right, your bot should now be online on Discord. Pat yourself on the back. You did a great job and
are now ready to explore the universe of a highly-customizable Discord-Bot for your community - not just a Discord-Bot,
*your* Discord-Bot[.](https://cdn.discordapp.com/attachments/1014523525467471882/1147206627657789591/7xpodw.jpg)

Here are a few things you can do now:

* enable a few of the many Custom-Bot-Modules.
* use Bot-Log-In to create messages with Self-Roles and more.
* create Custom-Commands to do fun things.
* configure the behavior of your bot.
* and much more, open the [Custom-Bot Documentation](./custom-bot/intro) to view every option.
