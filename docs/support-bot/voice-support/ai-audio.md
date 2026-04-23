---
sidebar_position: 4
title: AI Audio Generation
description: Generate voice-support waiting music and text-to-speech announcements directly from the SCNX dashboard using AI  - pay with AI Coins, preview before adding, and drop the result straight into your playlist.
---

# AI Audio Generation

Instead of sourcing and hosting your own audio files, you can generate **text-to-speech announcements** and **background music** for voice support directly from the [Voice Support](https://scnx.app/glink?page=support-system/voice-support) dashboard. Generated clips are stored in your server's file library, show up in the audio picker for your waiting and closed-state playlists, and are charged in [AI Coins](https://faq.scnx.app/ki-auf-scnx/) from your server's balance.

## Where to find it {#where-to-find-it}

Any time the dashboard shows an audio picker - for the [waiting music](/docs/support-bot/voice-support/configuration#waiting-music) or [closed-state music](/docs/support-bot/voice-support/configuration#closed-music) playlist - you'll see a **Generate (AI)** tab next to **Upload** and **Library**. That tab splits further into **TTS** (text-to-speech) and **Music**.

Both tools work the same way:

1. Fill in your prompt (text for TTS; a description for music).
2. Review the live cost estimate in AI Coins and your current balance.
3. Click **Generate**. The wait is typically a few seconds for TTS, up to a minute for music.
4. Preview the result with the inline play button.
5. The clip is automatically registered in your file library and added to the playlist you're editing. If you prefer, you can also upload the clip and add it manually later.

:::tip Generated clips don't count against your storage quota
Because AI-generated tracks are paid for with AI Coins, they don't take up any of your server's [file-storage quota](/docs/scnx/guilds/files) - no matter how many you generate, you won't run out of storage space from AI audio. Tracks you **upload** yourself do count against the quota like any other file.
:::

## Text-to-speech (TTS) {#tts}

Useful for greeting messages, queue-closed announcements, hold music voiceovers, and any other spoken content. Produced with **ElevenLabs** voices.

### How it works {#tts-flow}

1. Pick a **language**. The picker defaults to your browser language if available, and shows a count next to each language.
2. Optionally enable **Include multilingual voices** to add voices that work across any language (handy for mixed-language queues).
3. Pick a **voice**. Each voice card shows the voice name, an accent label, a short use-case tag, and a preview button. You can listen to the preview before selecting it.
4. Type the text you want spoken - up to 10,000 characters.
5. Click **Generate**. The cost is calculated from the text length (see pricing below).

### Pricing {#tts-pricing}

| Item                | Value                                                                     |
| ------------------- | ------------------------------------------------------------------------- |
| Cost rate           | 1 AI Coin per 4 characters (rounded up), with a minimum of 1 coin.        |
| Maximum text length | 10,000 characters per generation.                                         |

The exact cost is shown live as you type, and the button is disabled if your balance is insufficient. A "Buy more coins" link appears when you're short.

## Music {#music}

Useful for producing waiting music that matches your server's vibe without sourcing licensed tracks. Produced with ElevenLabs' music model.

### How it works {#music-flow}

1. Write a **prompt** describing the vibe, instrumentation, tempo, and mood - e.g. _"warm lo-fi beat, mellow piano, soft drums, 70 BPM, no vocals"_. Up to 4,100 characters.
2. Pick a **duration** between 3 seconds and 5 minutes (default: 60 seconds).
3. Click **Generate**. Music generation takes longer than TTS - the UI shows a progress indicator.

### Pricing {#music-pricing}

| Item              | Value                                                      |
| ----------------- | ---------------------------------------------------------- |
| Cost rate         | 12 AI Coins per second (= 600 coins per minute).           |
| Duration range    | 3 seconds to 300 seconds (5 minutes) per generation.       |

Again, the live cost preview updates as you drag the duration slider, and the button is disabled if you can't afford the generation.

## Tips {#tips}

- **Build a library over time.** Generations are saved to your file library even after you close the dashboard. You don't need to re-generate a greeting every time - reuse the stored clip.
- **Mix AI and uploaded tracks.** The playlist is just a list of URLs. You can freely mix AI-generated tracks with files you uploaded yourself.
- **Preview before adding.** The inline preview plays the exact audio that will end up in voice - what you hear is what your users hear.
- **Keep TTS short.** Long announcements are slower to render and cost more per click. For greetings and queue prompts, shorter scripts are almost always better.
- **Iterate music prompts.** Music generation is non-deterministic - the same prompt produces different clips on each run. If the first result isn't right, tweak the prompt (add _"instrumental"_, _"no vocals"_, _"loopable"_) and regenerate.

## Moderation and errors {#errors}

Both generators run every request through a safety check. If the prompt is rejected, you'll see a clear moderation message and **no coins are deducted**. Other errors the UI surfaces:

| Situation                    | What you'll see                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| Not enough AI Coins          | The generate button is disabled and a "Buy more coins" link appears.                 |
| Generation rejected (policy) | "Your prompt was rejected by moderation" or similar - coins are _not_ charged.        |
| Too many concurrent requests | A "currently busy" notice - retry in a few seconds.                                   |
| Generic failure              | A one-line error message. If it persists, reach out at [scnx.app/help](https://scnx.app/help). |

## Related {#related}

- [Waiting music configuration](/docs/support-bot/voice-support/configuration#waiting-music) - where AI-generated music plugs into the open-state playlist.
- [Closed-state music](/docs/support-bot/voice-support/configuration#closed-music) - same picker, different playlist played while voice support is offline.
- [AI Coins (FAQ)](https://faq.scnx.app/ki-auf-scnx/) - how AI Coins are priced and purchased.
