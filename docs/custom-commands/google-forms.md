---
sidebar_position: 7
title: "Google Forms responses"
description: "Run a flow for every new response of your Google Form with a small Apps Script, no Google sign-in needed."
---

# Google Forms responses

Run a flow every time someone submits your Google Form. A small script in your form sends each new response to a webhook of your flow. There is no Google sign-in and nothing to verify at Google.

This route is read-only and event-only: your flow learns about new responses and receives their answers. Reading or editing forms through a Google sign-in is a separate, later feature.

## Before you start {#before-you-start}

- You need to be able to edit the form.
- Exactly one person adds the trigger (see [Add the On form submit trigger](#add-trigger)). If two people add it, every response is sent twice.
- Read the [webhooks basics](/docs/custom-commands/integrations#webhooks) if you have not used a webhook before.

## Create the trigger and webhook {#create-webhook}

1. In the flow editor, add the trigger **Google Form response submitted** to a flow.
2. In the trigger, select **Create webhook**.
3. Copy the webhook URL. You need it in [Save the webhook URL](#script-properties).

## Add the script to your form {#add-script}

1. Open your Google Form.
2. Open the three-dot menu (**More**) and select **Apps Script**. In older menus it is called **Script editor**.
3. Replace the sample code in the editor with the script below.
4. Save, and give the project a name such as `SCNX`.

<!-- prettier-ignore -->
```js title="onSubmit.gs"
/** @OnlyCurrentDoc */

// SCNX Google Forms bridge, version 1. Guide: https://docs.scnx.xyz/docs/custom-commands/google-forms
// Sends every new response of this form to your SCNX webhook. Save the webhook URL as the script
// property SCNX_HOOK_URL (Project Settings, Script Properties). Never paste the URL into this code.

var SCNX_SCRIPT_VERSION = 1;
var SCNX_URL_PROPERTY = 'SCNX_HOOK_URL';
var SCNX_MAX_BYTES = 200000;
var SCNX_MAX_ANSWERS = 300;
var SCNX_MAX_VALUES = 100;
var SCNX_MAX_CHARS = 5000;
var SCNX_MIN_CHARS = 100;
var SCNX_CUT_MARKER = '...[truncated]';
var SCNX_RETRY_MS = 3000;
var SCNX_SKIPPED_TYPES = ['SECTION_HEADER', 'PAGE_BREAK', 'IMAGE', 'VIDEO'];
var SCNX_DRIVE_LINK = 'https://drive.google.com/open?id=';

function onSubmit(e) {
  if (!e || !e.source || !e.response) {
    throw new Error('onSubmit only runs from the On form submit trigger. To test the setup, run sendTest.');
  }
  send_(buildPayload_(e.source, e.response, 'form-submit'));
}

function sendTest() {
  send_(buildPayload_(FormApp.getActiveForm(), null, 'test'));
}

function buildPayload_(form, response, event) {
  var email = response ? response.getRespondentEmail() : '';
  return fitPayload_({
    event: event,
    scriptVersion: SCNX_SCRIPT_VERSION,
    formId: form.getId(),
    formTitle: form.getTitle(),
    responseId: response ? response.getId() : 'test',
    submittedAt: (response ? response.getTimestamp() : new Date()).toISOString(),
    respondentEmail: email ? email : null,
    truncated: false,
    answers: answers_(form, response)
  });
}

function answers_(form, response) {
  var items = form.getItems();
  var out = [];
  for (var i = 0; i < items.length; i++) {
    var type = String(items[i].getType());
    if (SCNX_SKIPPED_TYPES.indexOf(type) !== -1) continue;
    var given = response ? response.getResponseForItem(items[i]) : null;
    out.push({
      itemId: String(items[i].getId()),
      title: items[i].getTitle() || '',
      type: type,
      values: values_(items[i], type, given ? given.getResponse() : null)
    });
  }
  return out;
}

function values_(item, type, raw) {
  if (raw === null || raw === undefined || raw === '') return [];
  if (type === 'GRID') return gridValues_(item.asGridItem().getRows(), raw);
  if (type === 'CHECKBOX_GRID') return gridValues_(item.asCheckboxGridItem().getRows(), raw);
  var list = Array.isArray(raw) ? raw : [raw];
  var out = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] === null || list[i] === undefined || list[i] === '') continue;
    out.push(type === 'FILE_UPLOAD' ? SCNX_DRIVE_LINK + list[i] : String(list[i]));
  }
  return out;
}

function gridValues_(rows, raw) {
  var out = [];
  for (var r = 0; r < raw.length; r++) {
    var cells = Array.isArray(raw[r]) ? raw[r] : [raw[r]];
    for (var c = 0; c < cells.length; c++) {
      if (cells[c] !== null && cells[c] !== undefined && cells[c] !== '') out.push((rows[r] || '') + ': ' + cells[c]);
    }
  }
  return out;
}

function clip_(text, chars) {
  return text.length > chars ? text.slice(0, chars - SCNX_CUT_MARKER.length) + SCNX_CUT_MARKER : text;
}

function shape_(answers, chars) {
  var cut = false;
  var out = [];
  for (var i = 0; i < answers.length; i++) {
    var values = answers[i].values.slice(0, SCNX_MAX_VALUES);
    if (values.length < answers[i].values.length) cut = true;
    for (var v = 0; v < values.length; v++) {
      var clipped = clip_(values[v], chars);
      if (clipped !== values[v]) cut = true;
      values[v] = clipped;
    }
    var title = clip_(answers[i].title, chars);
    if (title !== answers[i].title) cut = true;
    out.push({itemId: answers[i].itemId, title: title, type: answers[i].type, values: values});
  }
  return {answers: out, cut: cut};
}

function fitPayload_(payload) {
  var all = payload.answers;
  var kept = all.slice(0, SCNX_MAX_ANSWERS);
  var chars = SCNX_MAX_CHARS;
  for (;;) {
    var shaped = shape_(kept, chars);
    payload.answers = shaped.answers;
    payload.truncated = kept.length < all.length || shaped.cut;
    if (utf8Length_(JSON.stringify(payload)) <= SCNX_MAX_BYTES || kept.length === 0) return payload;
    if (chars > SCNX_MIN_CHARS) chars = Math.max(SCNX_MIN_CHARS, Math.floor(chars / 2));
    else kept = kept.slice(0, kept.length - 1);
  }
}

function utf8Length_(text) {
  var bytes = 0;
  for (var i = 0; i < text.length; i++) {
    var code = text.charCodeAt(i);
    if (code < 0x80) bytes += 1;
    else if (code < 0x800) bytes += 2;
    else if (code >= 0xd800 && code <= 0xdbff) {
      bytes += 4;
      i++;
    } else bytes += 3;
  }
  return bytes;
}

function send_(payload) {
  var url = String(PropertiesService.getScriptProperties().getProperty(SCNX_URL_PROPERTY) || '').trim();
  if (url.indexOf('https://') !== 0) {
    throw new Error('Save your SCNX webhook URL as the script property ' + SCNX_URL_PROPERTY + ' (Project Settings, Script Properties).');
  }
  var body = JSON.stringify(payload);
  var code = post_(url, body);
  if (code === 0 || code === 429 || code >= 500) {
    Utilities.sleep(SCNX_RETRY_MS);
    code = post_(url, body);
  }
  if (code < 200 || code > 299) {
    console.error('SCNX did not accept response ' + payload.responseId + ' (HTTP ' + code + ', 0 means SCNX could not be reached).');
    throw new Error('SCNX webhook failed with HTTP ' + code + '. See Troubleshooting in the SCNX Google Forms guide.');
  }
}

function post_(url, body) {
  try {
    return UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json; charset=utf-8',
      payload: body,
      muteHttpExceptions: true,
      followRedirects: false
    }).getResponseCode();
  } catch (err) {
    console.error('Could not reach SCNX: ' + (err && err.message ? err.message : err));
    return 0;
  }
}
```

## Save the webhook URL {#script-properties}

1. In the Apps Script editor, open **Project Settings** (the gear icon).
2. Under **Script Properties**, select **Add script property**.
3. Use the name `SCNX_HOOK_URL` and paste the webhook URL as the value.
4. Select **Save script properties**.

:::warning
Never paste the webhook URL into the code. Keep it in the script property.
:::

## Add the On form submit trigger {#add-trigger}

1. In the Apps Script editor, open **Triggers** (the clock icon) and select **Add Trigger**.
2. Choose the function `onSubmit`, the deployment **Head**, the event source **From form** and the event type **On form submit**.
3. Set the failure notifications to **Notify me immediately**.
4. Select **Save**.

:::warning
Only one person should add this trigger. A second trigger sends every response twice.
:::

## Allow the script {#authorize}

When you save the trigger, Google asks you to sign in and shows the warning "Google hasn't verified this app". Select **Advanced**, then **Go to (your project name) (unsafe)**.

This warning is expected. The script is your own, and Google only verifies apps that are published. The permissions the script asks for are limited to this form (`@OnlyCurrentDoc`) and connecting to an external service (SCNX).

## Test it {#test}

1. In the editor, choose `sendTest` in the function list and select **Run**. Your flow runs with **Is a test** set.
2. Submit a real response to the form.

If nothing arrives, look at **Executions** in Apps Script and at the delivery log of the webhook in SCNX.

## What your flow gets {#outputs}

| Output                  | What it is                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| **Form ID**             | The ID of the form. Compare it with your own form.                                        |
| **Form title**          | The title of the form.                                                                    |
| **Response ID**         | The ID of the response. The same ID arrives again for an edited response.                 |
| **Submitted at**        | When the response was submitted.                                                          |
| **Email**               | The email address of the person, only when the form collects emails.                      |
| **Answers**             | Every question in form order with its title, type and answer. Unanswered ones are empty.  |
| **Answers by question** | A lookup table from question title to answer text. For equal titles, the first one wins.  |
| **Cut short**           | True when long answers were shortened or questions left out to stay under the size limit. |
| **Raw JSON**            | The whole delivery as JSON text, cut at 60000 characters.                                 |
| **Is a test**           | True for the `sendTest` run.                                                              |
| **Delivery ID**         | A unique ID of the delivery.                                                              |

- File uploads arrive as Google Drive links. Only people with access to the files can open them.
- Grid answers read **Row: Column**.
- An edited response runs your flow again with the same **Response ID**. Store the ID if you want to skip repeats.

## Limits {#limits}

- Apps Script has [quotas](https://developers.google.com/apps-script/guides/services/quotas) that apply to your Google account.
- Only new responses are sent. Responses from before you added the trigger are not.
- The script retries once after 3 seconds, but only after a network error (HTTP 0), HTTP 429 or a 5xx server error. Other errors, such as 401 or 404, are not retried. If the retry fails too, the delivery is lost and Google emails the person who added the trigger. Read missed responses in Google Forms.
- A response can be up to 200 KB. Longer answers are cut and **Cut short** is set.
- At most 300 questions are sent.
- The trigger runs as the person who added it. It stops if that person loses access to the form.

## Privacy {#privacy}

- Answers go from your Google account straight to your SCNX webhook. SCNX never signs in to Google on this route.
- SCNX processes the answers for you as a processor under the [data processing agreement](https://corp.scootkit.com/docs/scnx/policies/data-processing-agreement/).
- The delivery log of the webhook keeps request bodies only while body logging is switched on for your server.
- You are responsible towards the people who fill in your form. Say in the form that answers are processed by your Discord server's bot.
- The email is only sent when the form collects emails.

## Security {#security}

The webhook URL is the only key. Anyone who can edit the form can read it in the Script Properties. If it leaks, replace the URL in SCNX and update the script property. Anyone who has the webhook URL can send a forged response that starts your flow, so keep the URL secret. Compare **Form ID** in your flow with your form, so a request from another form does nothing. The Form ID is the edit ID of the form, which people who fill in the form do not see.

## Troubleshooting {#troubleshooting}

- **"Save your SCNX webhook URL as the script property"**: the script property `SCNX_HOOK_URL` is missing or does not start with `https://`.
- **HTTP 401 or 404**: the webhook URL was replaced or the webhook was deleted. Copy the current URL into the script property.
- **HTTP 429**: too many responses arrived at once. The retry covers short bursts.
- **HTTP 0**: SCNX could not be reached.
- **Nothing at all**: check **Triggers** and **Executions** in Apps Script.
- **"onSubmit only runs from the On form submit trigger"**: you selected **Run** on `onSubmit`. Run `sendTest` instead.

## Update the script {#update}

Replace the whole code in the editor with the new script. Keep the script property and the trigger. The version of the script is in the header comment, on the line "SCNX Google Forms bridge, version".
