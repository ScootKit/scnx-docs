---
sidebar_position: 7
title: "Google-Forms-Antworten"
description: "Starte einen Ablauf für jede neue Antwort deines Google Formulars mit einem kleinen Apps Script, ganz ohne Google-Anmeldung."
---

# Google-Forms-Antworten

Starte einen Ablauf, jedes Mal wenn jemand dein Google Formular abschickt. Ein kleines Skript in deinem Formular sendet jede neue Antwort an einen Webhook deines Ablaufs. Du brauchst keine Google-Anmeldung und musst nichts bei Google verifizieren lassen.

Dieser Weg ist nur lesend und nur ereignisbasiert: Dein Ablauf erfährt von neuen Antworten und bekommt ihre Inhalte. Formulare über eine Google-Anmeldung zu lesen oder zu bearbeiten ist eine eigene, spätere Funktion.

## Bevor du anfängst {#before-you-start}

- Du musst das Formular bearbeiten können.
- Genau eine Person fügt den Auslöser hinzu (siehe [Auslöser Bei Formularübermittlung hinzufügen](#add-trigger)). Fügen ihn zwei Personen hinzu, wird jede Antwort doppelt gesendet.
- Lies die [Webhook-Grundlagen](/de/docs/custom-commands/integrations#webhooks), falls du noch keinen Webhook genutzt hast.

## Auslöser und Webhook erstellen {#create-webhook}

1. Füge im Ablauf-Editor einem Ablauf den Auslöser **Google-Forms-Antwort abgeschickt** hinzu.
2. Wähle im Auslöser **Webhook erstellen**.
3. Kopiere die Webhook-URL. Du brauchst sie bei [Webhook-URL speichern](#script-properties).

## Das Skript zu deinem Formular hinzufügen {#add-script}

1. Öffne dein Google Formular.
2. Öffne das Drei-Punkte-Menü (**Mehr**) und wähle **Apps Script**. In älteren Menüs heißt es **Skripteditor** (Script editor).
3. Ersetze den Beispielcode im Editor durch das Skript unten.
4. Speichere und gib dem Projekt einen Namen, zum Beispiel `SCNX`.

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

## Webhook-URL speichern {#script-properties}

1. Öffne im Apps-Script-Editor die **Projekteinstellungen** (das Zahnrad, Project Settings).
2. Wähle unter **Skripteigenschaften** (Script Properties) **Skripteigenschaft hinzufügen** (Add script property).
3. Nutze den Namen `SCNX_HOOK_URL` und füge die Webhook-URL als Wert ein.
4. Wähle **Skripteigenschaften speichern** (Save script properties).

:::warning
Füge die Webhook-URL niemals in den Code ein. Lass sie in der Skripteigenschaft.
:::

## Den Auslöser Bei Formularübermittlung hinzufügen {#add-trigger}

1. Öffne im Apps-Script-Editor **Auslöser** (Triggers, das Uhr-Symbol) und wähle **Auslöser hinzufügen** (Add Trigger).
2. Wähle die Funktion `onSubmit`, die Bereitstellung **Head**, die Ereignisquelle **Aus Formular** (From form) und den Ereignistyp **Bei Formularübermittlung** (On form submit).
3. Stelle die Fehlerbenachrichtigungen auf **Sofort benachrichtigen** (Notify me immediately).
4. Wähle **Speichern**.

:::warning
Nur eine Person sollte diesen Auslöser hinzufügen. Ein zweiter Auslöser sendet jede Antwort doppelt.
:::

## Das Skript erlauben {#authorize}

Beim Speichern des Auslösers bittet Google dich, dich anzumelden, und zeigt die Warnung "Google hat diese App nicht überprüft" (Google hasn't verified this app). Wähle **Erweitert** (Advanced) und dann **Weiter zu (dein Projektname) (unsicher)** (Go to (your project name) (unsafe)).

Diese Warnung ist normal. Das Skript gehört dir, und Google überprüft nur Apps, die veröffentlicht sind. Die Berechtigungen, die das Skript anfragt, beschränken sich auf dieses Formular (`@OnlyCurrentDoc`) und die Verbindung zu einem externen Dienst (SCNX).

## Testen {#test}

1. Wähle im Editor in der Funktionsliste `sendTest` und dann **Ausführen** (Run). Dein Ablauf läuft mit gesetztem **Ist ein Test**.
2. Schicke eine echte Antwort im Formular ab.

Kommt nichts an, sieh dir **Ausführungen** (Executions) in Apps Script und das Zustellungsprotokoll des Webhooks in SCNX an.

## Was dein Ablauf bekommt {#outputs}

| Ausgabe                  | Was es ist                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| **Formular-ID**          | Die ID des Formulars. Vergleiche sie mit deinem eigenen Formular.                                       |
| **Formulartitel**        | Der Titel des Formulars.                                                                                |
| **Antwort-ID**           | Die ID der Antwort. Bei einer bearbeiteten Antwort kommt dieselbe ID erneut an.                         |
| **Abgeschickt am**       | Wann die Antwort abgeschickt wurde.                                                                     |
| **E-Mail**               | Die E-Mail-Adresse der Person, nur wenn das Formular E-Mails sammelt.                                   |
| **Antworten**            | Jede Frage in Formularreihenfolge mit Titel, Typ und Antwort. Unbeantwortete sind leer.                 |
| **Antworten nach Frage** | Eine Zuordnung von Fragentitel zu Antworttext. Bei gleichen Titeln gewinnt der erste.                   |
| **Gekürzt**              | Wahr, wenn lange Antworten gekürzt oder Fragen weggelassen wurden, um unter dem Größenlimit zu bleiben. |
| **Roh-JSON**             | Die gesamte Zustellung als JSON-Text, bei 60000 Zeichen gekürzt.                                        |
| **Ist ein Test**         | Wahr beim Lauf von `sendTest`.                                                                          |
| **Zustellungs-ID**       | Eine eindeutige ID der Zustellung.                                                                      |

- Datei-Uploads kommen als Google-Drive-Links an. Nur Personen mit Zugriff auf die Dateien können sie öffnen.
- Rasterantworten lauten **Zeile: Spalte**.
- Eine bearbeitete Antwort startet deinen Ablauf erneut mit derselben **Antwort-ID**. Speichere die ID, wenn du Wiederholungen überspringen willst.

## Limits {#limits}

- Apps Script hat [Kontingente](https://developers.google.com/apps-script/guides/services/quotas), die für dein Google-Konto gelten.
- Es werden nur neue Antworten gesendet. Antworten von vor dem Hinzufügen des Auslösers werden nicht gesendet.
- Nimmt SCNX eine Zustellung nicht an, versucht das Skript es einmal erneut. Danach ist die Zustellung verloren, und Google sendet der Person, die den Auslöser hinzugefügt hat, eine E-Mail. Lies verpasste Antworten in Google Forms.
- Eine Antwort darf bis zu 200 KB groß sein. Längere Antworten werden gekürzt, und **Gekürzt** wird gesetzt.
- Es werden höchstens 300 Fragen gesendet.
- Der Auslöser läuft als die Person, die ihn hinzugefügt hat. Er hört auf, wenn diese Person den Zugriff auf das Formular verliert.

## Datenschutz {#privacy}

- Die Antworten gehen von deinem Google-Konto direkt an deinen SCNX-Webhook. SCNX meldet sich auf diesem Weg nie bei Google an.
- SCNX verarbeitet die Antworten für dich als Auftragsverarbeiter nach dem [Auftragsverarbeitungsvertrag](https://corp.scootkit.com/docs/scnx/policies/data-processing-agreement/).
- Das Zustellungsprotokoll des Webhooks speichert Request-Bodys nur, solange die Body-Protokollierung für deinen Server eingeschaltet ist.
- Du bist gegenüber den Personen verantwortlich, die dein Formular ausfüllen. Weise im Formular darauf hin, dass die Antworten vom Bot deines Discord-Servers verarbeitet werden.
- Die E-Mail wird nur gesendet, wenn das Formular E-Mails sammelt.

## Sicherheit {#security}

Die Webhook-URL ist der einzige Schlüssel. Jeder, der das Formular bearbeiten kann, kann sie in den Skripteigenschaften lesen. Wenn sie bekannt wird, ersetze die URL in SCNX und aktualisiere die Skripteigenschaft. Vergleiche die **Formular-ID** in deinem Ablauf mit deinem Formular, damit eine Anfrage von einem anderen Formular nichts auslöst.

## Fehlerbehebung {#troubleshooting}

- **"Save your SCNX webhook URL as the script property"**: Die Skripteigenschaft `SCNX_HOOK_URL` fehlt oder beginnt nicht mit `https://`.
- **HTTP 401 oder 404**: Die Webhook-URL wurde ersetzt oder der Webhook gelöscht. Kopiere die aktuelle URL in die Skripteigenschaft.
- **HTTP 429**: Es kamen zu viele Antworten auf einmal. Der erneute Versuch deckt kurze Spitzen ab.
- **HTTP 0**: SCNX war nicht erreichbar.
- **Gar nichts kommt an**: Prüfe **Auslöser** und **Ausführungen** in Apps Script.
- **"onSubmit only runs from the On form submit trigger"**: Du hast bei `onSubmit` auf **Ausführen** geklickt. Führe stattdessen `sendTest` aus.

## Das Skript aktualisieren {#update}

Ersetze den gesamten Code im Editor durch das neue Skript. Behalte die Skripteigenschaft und den Auslöser. Die Version des Skripts steht im ersten Kommentar.
