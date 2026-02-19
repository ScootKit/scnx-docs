# AI on SCNX

:::info Privacy Notice

* SCNX will provide OpenAI with your Guild-ID.
* Other metadata about your guild (such as the name) and data (such as message content, author name) about messages sent
  in selected channels will be shared.

:::

:::warning Disclaimer

* AI Models are known to occasionally generate incorrect information, produce harmful instructions or biased content,
  and have limited knowledge of world events after 2021.
* Only enable AI Content on your server if you are able to actively moderate both input and output of your bot.
* We're not responsible for any damages resulting of your usage of AI features.
* You are using these features on your own risk.
* Make sure to inform your users about these dangers posed by AI generated content.

:::

## About Prices and AI Coins

Each server on SCNX has so called "AI Coins". These can be used by different modules. Usage may differ between modules,
check the pricing for the modules below. Every server gets the following amount of AI Coins on the 25. of each month,
based on their plan:

| Plan                  | Amount of AI Coins awarded |
|:----------------------|:---------------------------|
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
|:---------|:-------------------------|
| 2,000    | €3.99                    |
| 5,000    | €8.99                    |
| 10,000   | €15.99                   |
| 50,000   | €69.69                   |

*Please note that we might change these prices at any time.*

---

## AI-Chat-Channel

### How to use

First, [enable the module](https://scnx.app/glink?page=bot%2Fmodules%3Ftag%3Dai) in your dashboard. Then, select a channel in the configuration. In this channel, your bot will
respond to user messages by answering with AI generated content based on ChatGPT. We recommend enabling a 30 second
slow-mode in this channel to avoid losing all your AI Coins in seconds.

:::warning BEFORE YOU DECIDE TO CHANGE THE PERSONALITY OF YOUR AI-CHAT
Personalities like "troll" are known to insult, gaslight and even threaten users. We highly recommend using the "
default" personality. You are using this feature at your own risk.
:::

### Configuration Options

* **Personality:** Depending on this setting, the AI-Chat-Bot will behave differently.
    * **default:** The default personality - designed to help users and answer requests. Recommanded and the best option
      for most servers.
    * **troll:** This personality will insult users and basically to everything to get a lauth out of them. TO NOT USE
      THIS PERSONALITY WITHOUT ACTIVE MODERATORS MODERATING THE ANSWERS OF THE MODEL.
    * **liar:** Conspiracy theorist and a notorious liar. We recommand active moderators monitoring answers.
    * **rude starbucks employee:** This personality will role-play with your users as a starbucks rude employee.
* **Response Length:** Controls how long the AI's responses will be.
* **Trigger Mode:** Determines which messages trigger an AI response. 'All messages' replicates the default behaviour.
  Other modes restrict responses to specific triggers.
* **Trigger Keyword:** If set and trigger mode includes 'keyword', the AI will only respond when a message starts with
  this word or phrase (e.g. 'Hey Bot').
* **Resetting History:** After configuring, please type `=== RESET ===` in the ai channel to reset conversation history.

### Custom System Prompt & Strict Moderation

If set, this text replaces the Personality setting as the AI's system prompt. Maximum 1000 characters — longer text is
truncated automatically. A safety clause is always appended and cannot be removed. You are fully responsible for the
AI's behaviour when using a custom prompt.

:::danger Automatic Prompt Scanning & Strict Moderation
All custom system prompts undergo strict automatic scanning before being saved. **If your prompt violates our safety
guidelines or Discord's Terms of Service, your AI module will be permanently deactivated immediately.**

**Appealing a Deactivation:**
To appeal a module deactivation, you must email **legal@scootkit.com** with the exact subject line:
`AI Prompt [GuildID]`. Our team will process your appeal within 2-3 business days.

For full details regarding this policy and our legal justification, please review
our [Terms of Service](https://scootk.it/scnx-tos).
:::

### Pricing & Common Errors

This module charges the AI-Coins of your server.

| Action                                            | Price     |
|:--------------------------------------------------|:----------|
| Message sent one of the selected AI-Chat-Channels | 1 AI Coin |

*You won't be charged for messages where AI answer generation failed.*

| Error                          | Cause                                                                         | What you can do                                                                                    |
|:-------------------------------|:------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------|
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
|:------------------------------------------------|:------------|
| Generation of images with the size of 1792x1024 | 13 AI Coins |
| Generation of images with the size of 1024x1792 | 13 AI Coins |
| Generation of images with the size of 1024x1024 | 10 AI Coins |

*You won't be charged for commands where AI image generation failed.*

| Error                          | Cause                                                                                                                              | What you can do                                                                                             |
|:-------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------|
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