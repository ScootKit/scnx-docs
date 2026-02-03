---
sidebar_position: 6
title: Support Feedback
description: Manage support feedback to further improve your members’ support experience.
---

# Support Feedback

## Features {#features}

* Give your members the option to rate their support experience.
* Send responses to a channel so team members can view feedback.
* Create your own questions and customize the messages.
* Anonymize feedback to offer a more private feedback option.

<h4>Images coming soon ✨</h4>

## Setup {#setup}

* Visit the [Support Feedback](https://scnx.app/glink?page=support-system/ticket-system/support-feedback) page in your dashboard.
* [Configure](#main-configuration) the available options.
* Create a new feedback question by clicking “Edit questions” in the [main configuration](#main-configuration) and then clicking “Add field”.
* [Configure](#manage-feedback-questions) the available options for the respective feedback question.

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field | Description |
| --- | --- |
| Enable support feedback | Enables or disables the feature for your ticket system. |
| Feedback message | This message will be sent to the user after their ticket has been closed. |
| Submitted message | This message is edited from the feedback message after the user has submitted their rating. |
| Edit feedback questions | These questions are shown in the rating dialog. More information on configuring feedback questions can be found [here](#manage-feedback-questions). |
| Anonymize feedback | If enabled, your bot will not link ratings to user IDs. |
| Send answers to a channel | If enabled, ratings are sent to a channel. Otherwise, you can find ratings from the last 30 days in your [dashboard](https://scnx.app/glink?page=support-system/ticket-system/support-feedback). |
| Channel to send answers to | *Only available if “Send answers to a channel” is enabled.*<br/>Your bot will send submitted ratings to this channel. |
| Customize notification message? | *Only available if “Send answers to a channel” is enabled.*<br/>If enabled, you can customize the notification message for new ratings. |
| Feedback notification message | *Only available if “Send answers to a channel” and “Customize notification message?” are enabled.*<br/>This message will be sent when a new rating is submitted. |

### Manage feedback questions {#manage-feedback-questions}

| Field | Description |
| --- | --- |
| Label | This text is shown as the title of your question. |
| Field type | Depending on the selection, the user gets a small or large field (allows line breaks) to enter text. |
| Placeholder | This text is used as the placeholder in the input field. |
| Is this field required? | If enabled, the user must fill out this field. |
| Minimum input length | The minimum number of characters the user must enter to submit the dialog. |
| Maximum input length | The maximum number of characters the user is allowed to enter to submit the dialog. |