# AI on SCNX

:::info Privacy Notice

- SCNX will provide OpenAI with your Guild-ID.
- Other metadata about your guild (such as the name) and data (such as message content, author name) about messages sent
  in selected channels will be shared.

:::

:::warning Disclaimer

- AI Models are known to occasionally generate incorrect information, produce harmful instructions or biased content,
  and have limited knowledge of world events after 2021.
- Only enable AI Content on your server if you are able to actively moderate both input and output of your bot.
- We're not responsible for any damages resulting of your usage of AI features.
- You are using these features on your own risk.
- Make sure to inform your users about these dangers posed by AI generated content.

:::

## About Prices and AI Coins

Each server on SCNX has so called "AI Coins". These can be used by different modules. Usage may differ between modules,
check the pricing for the modules below. Every server gets the following amount of AI Coins on the 25. of each month,
based on their plan:

| Plan                  | Amount of AI Coins awarded |
| :-------------------- | :------------------------- |
| Starter               | 25                         |
| Active Guild (Legacy) | 100                        |
| PRO (Legacy)          | 250                        |
| Unlimited             | 300                        |
| Professional          | 600                        |

:::note
AI Coins are awarded once a month and only if the previous month's free coins have been used fully, otherwise AI Coins
will be topped up to meet the AI Coins included in the plans. Servers on a trial plan will only receive the amount of AI
Coins included in the starter plan. Please note that the amount of AI Coins included in plans might change at any time.
:::

### How to Top-Up More AI Coins

:::info
AI Coins are bound to guilds and can be used by any enabled module. Please note that pricing between moduls might
differ. We might be able to move your AI Coins to another server on request. Contact our Billing-Support.
:::

Visit the [pricing site](https://scnx.app/glink?page=pricing) of your guild, locate the "AI Coins" section and select "
Top-Up". You can use SCNX Credits to top-up the AI Coins. You can find a conversion table below:

| AI Coins | Price (for EU customers) |
| :------- | :----------------------- |
| 2,000    | €3.99                    |
| 5,000    | €8.99                    |
| 10,000   | €15.99                   |
| 50,000   | €69.69                   |

_Please note that we might change these prices at any time._

---

## AI-Chat-Channel

### How to use

First, [enable the module](https://scnx.app/glink?page=bot%2Fmodules%3Ftag%3Dai) in your dashboard. Then, select a channel in the configuration. In this channel, your bot will
respond to user messages by answering with AI generated content based on ChatGPT. We recommend enabling a 30 second
slow-mode in this channel to avoid losing all your AI Coins in seconds.

### Configuration Options

- **Personality:** Depending on this setting, the AI-Chat-Bot will behave differently. The following built-in
  personalities are available:
  - **Helpful Chat-Bot (default):** The default personality - designed to help users and answer requests. Recommended
    and the best option for most servers.
  - **Funny friend:** A more casual, light-hearted personality.
  - **Rude coffee shop employee:** This personality will role-play with your users as a rude coffee shop employee.

  The former "Troll" and "Conspiracy theorist / Liar" personalities have been removed to comply with the EU AI Act's
  rules on manipulative and deceptive AI systems. Any server that had one of them selected falls back to the default
  personality automatically.

- **Response Length:** Controls how long the AI's responses will be.
- **Trigger Mode:** Determines which messages trigger an AI response. 'All messages' replicates the default behaviour.
  Other modes restrict responses to specific triggers.
- **Trigger Keyword:** If set and trigger mode includes 'keyword', the AI will only respond when a message starts with
  this word or phrase (e.g. 'Hey Bot').
- **Resetting History:** After configuring, please type `=== RESET ===` in the ai channel to reset conversation history.

### Custom System Prompt & Automated Review

If set, this text replaces the Personality setting as the AI's system prompt. Maximum 1000 characters - longer text is
truncated automatically. A safety clause is always appended and cannot be removed. You are fully responsible for the
AI's behaviour when using a custom prompt.

To keep everyone safe and to meet our legal obligations, every custom system prompt is checked automatically before it
goes live. The rest of this section explains exactly what we check, what happens if a prompt is rejected, and how to
appeal.

#### What we review

- We only review the custom system prompt you set. We do this automatically each time your bot starts or restarts.
- We never review the conversations in your channel, and we never review what your members write. The review is only
  about the instructions you give the bot.

#### How the review works

The review is fully automated. An AI reviewer checks the prompt against the acceptable-use categories in section 8 of
our [Terms of Service](https://scootk.it/scnx-tos).

#### What gets a prompt rejected

A prompt is rejected if it does any of the following:

- **Sexualization of minors:** sexual content involving anyone under 18.
- **Content likely illegal under German law:** content that is likely illegal under German law.
- **Targeted harassment or hate speech:** attacking people or groups based on who they are.
- **Collecting personal data:** instructing the bot to gather personal information about users.
- **Deceptive impersonation or scams:** pretending to be someone else or framing the bot to deceive or defraud.
- **Breaking Discord's rules:** instructing behaviour that violates Discord's
  [Terms of Service](https://discord.com/terms).

#### Strikes and what happens

Each rejected prompt counts as one strike. Strikes are counted over a rolling 90-day window.

- **First strike:** only that prompt is blocked. Everything else keeps working. Set a new prompt that passes review, and
  after your bot's next restart the AI chat channel is re-enabled automatically.
- **Module lock:** a second strike within the 90-day window, or any rejection in a high-severity category
  (sexualization of minors, or content likely illegal under German law), locks the whole AI chat module.

A locked module cannot be unlocked by editing the prompt. It can only be reopened through an appeal or a decision by our
staff.

:::note Only the affected channel is disabled
A custom prompt that fails review disables only the specific AI chat channel it belongs to - the rest of the module and
any other AI chat channels keep working. That channel recovers automatically once you set a prompt that passes review;
you do not need to open a support ticket for a first strike.
:::

Strikes age out of the 90-day window automatically, but a module lock never expires on its own - it ends only through a successful appeal or a decision by our staff.

#### Statement of reasons and how to appeal

:::info Statement of reasons
Every rejection sends an email to the server owner. In line with the EU Digital Services Act (Article 17), that email
includes a statement of reasons and instructions for appealing. Your current standing - your strikes and whether the
module is locked - is also shown on the module's page in your dashboard.
:::

To appeal, [open a support ticket](https://scnx.app/user/support/new?topic=cmnewauac001v13dsssxa8rlh). A member of our
team reviews every appeal. For full details on this policy, please review our
[Terms of Service](https://scootk.it/scnx-tos).

### Pricing & Common Errors

This module charges the AI-Coins of your server.

| Action                                            | Price     |
| :------------------------------------------------ | :-------- |
| Message sent one of the selected AI-Chat-Channels | 1 AI Coin |

_You won't be charged for messages where AI answer generation failed._

| Error                          | Cause                                                                         | What you can do                                                                                    |
| :----------------------------- | :---------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| This server is out of AI Coins | Your server does not have enough AI Coins left to cover the requested actions | Try topping up AI Coins on the [pricing page](https://scnx.app/glink?page=pricing) of your server. |
| Error generating response      | OpenAI returned an invalid status code                                        | Try again in a few minutes.                                                                        |

### Limitations

Messages sent to the model may be shortened. Answers will be capped at a certain limit, but the model will try to finish
sentences were ever possible. We do not recommend using this module to generate essays or other lengthly content. The
length of generated or inputted content won't affect pricing, instead you only get charged for the number of messages
sent.

---

## /imagine (AI Image-Generation)

### How to use

First, [enable the module](https://scnx.app/glink?page=bot%2Fmodules%3Ftag%3Dai) in your dashboard. Now anyone on your server can use `/imagine` to generate any images - the
only limit is your imagination. We recommend setting up a rate-limit to avoid spamming of the command: Open the
configuration of the module and set up the rate-limit. It will limit the number of commands users can run in a specific
timeframe based on your configuration.

### Pricing & Common Errors

This module charges the AI-Coins of your server.

| Action                                          | Price       |
| :---------------------------------------------- | :---------- |
| Generation of images with the size of 1792x1024 | 13 AI Coins |
| Generation of images with the size of 1024x1792 | 13 AI Coins |
| Generation of images with the size of 1024x1024 | 10 AI Coins |

_You won't be charged for commands where AI image generation failed._

| Error                          | Cause                                                                                                                              | What you can do                                                                                             |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| This server is out of AI Coins | Your server does not have enough AI Coins left to cover the requested actions                                                      | Try topping up AI Coins on the [pricing page](https://scnx.app/glink?page=pricing) of your server.          |
| Error generating response      | OpenAI returned an invalid status code - reason for this can either be an actual error or a prompt violating OpenAI Usage Policies | Try again in a few minutes. Check your prompt for violations of OpenAI Usage Policies if that doesn't help. |

### Limitations

If your prompt would violate [OpenAI Usage Policies](https://openai.com/policies/usage-policies), your request will fail.

## Privacy & Copyright

You are the sole owner of content generated, but we'll treat content generated as "Your content" described in our [Terms
of Service](https://sc-net.work/scnx-tos), which is required to operate this service. You can use the generated content without attribution for any
purpose.

ScootKit (the company behind SCNX) and OpenAI are using automated systems to scan entered and generated content against
policy violations. Generated content (or your input) won't be
used (by us or OpenAI) to train models or to sell to others.

We might review certain content to ensure compliance with our [Terms
of Service](https://sc-net.work/scnx-tos) and other guidelines.

ChatGPT is a product provided by OpenAI. ScootKit complies
with [OpenAI Terms of Service](https://openai.com/policies/terms-of-use), [API Usage Policies](https://openai.com/policies/api-data-usage-policies)
and [Usage Policies](https://openai.com/policies/usage-policies). If you see any of our users violating these terms,
please contact
abuse@scnx.xyz.
