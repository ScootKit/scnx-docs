---
sidebar_position: 4
title: Forms
description: Create and manage forms you can send to users manually or automatically.
---

# Forms

## Features {#features}

* Set up forms to collect information from users.
* Customize the questions and the dialog appearance.
* Send a form into a ticket via a command with minimal effort.

<h4>Images coming soon ✨</h4>

## Setup {#setup}

* Visit the [Forms](https://scnx.app/glink?page=support-system/forms) page in your dashboard.
* <a href="#main-configuration">Configure</a> the available options.
* Create a new form by clicking the “Create new form” button.
* <a href="#manage-forms">Configure</a> the available options for the respective form.
* Create a new form question by clicking “Edit form” in the <a href="#main-configuration">main configuration</a> and then clicking “Add field”.
* <a href="#manage-forms-questions">Configure</a> the available options for the respective form question.

## Commands {#commands}

<SlashCommandExplanation></SlashCommandExplanation>

| Command | Description |
| --- | --- |
| `/ticket form form:<FormName>` | Sends a form into the corresponding ticket. |

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field | Description |
| --- | --- |
| Dialog open button | This text is shown on the button that opens the form dialog, which is attached to the message sent by the <a href="#commands"><code>/ticket form</code></a> command. |

### Manage forms {#manage-forms}

| Field | Description |
| --- | --- |
| Form name | This text is shown as the title of your form. |
| Dialog | These questions are shown in the form. More information on configuring form questions can be found <a href="#manage-forms-questions">here</a>. |

### Manage form questions {#manage-forms-questions}

| Field | Description |
| --- | --- |
| Label | This text is shown as the title of your question. |
| Field type | Depending on the selection, the user gets a small or large field (allows line breaks) to enter text. |
| Placeholder | This text is used as the placeholder in the input field. |
| Is this field required? | If enabled, the user must fill out this field. |
| Minimum input length | The minimum number of characters the user must enter to submit the dialog. |
| Maximum input length | The maximum number of characters the user is allowed to enter to submit the dialog. |