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
* <a href="#main-configuration">Configure</a> the available options.
* Create a new feedback question by clicking “Edit questions” in the <a href="#main-configuration">main configuration</a> and then clicking “Add field”.
* <a href="#manage-feedback-questions">Configure</a> the available options for the respective feedback question.

## Configuration {#configuration}

### Main configuration {#main-configuration}

|                        Field                        |                                                                                                                                Description                                                                                                                                 |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable support feedback                            | Enables or disables the feature for your ticket system.                                                                                                                                                                                                                      |
| Feedback message                                   | This message will be sent to the user after their ticket has been closed.                                                                                                                                                                                                   |
| Submitted message                                  | This message is edited from the feedback message after the user has submitted their rating.                                                                                                                                                                                 |
| Edit feedback questions                            | These questions are shown in the rating dialog.<br/><small><details><summary>Note</summary><blockquote>*How to edit feedback questions can be found [here](#manage-feedback-questions).* </blockquote></details></small>                                                     |
| Anonymize feedback                                 | If enabled, your bot will not link ratings to user IDs.                                                                                                                                                                                                                     |
| Send answers to a channel                          | If enabled, ratings are sent to a channel.                                                                                                                                                                                                                                  |
| Channel to send answers to                         | Submitted ratings will be sent to this channel.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Send answers to a channel” is enabled.*</blockquote></details></small>                                                                   |
| Customize notification message?                    | If enabled, you can customize the notification message for new ratings.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Send answers to a channel” is enabled.*</blockquote></details></small>                                          |
| Feedback notification message                      | This message will be sent when a new rating is submitted.<br/><small><details><summary>Prerequisite</summary><blockquote>*Only available if “Customize notification message?” is enabled.*</blockquote></details></small>                                                   |

### Manage feedback questions {#manage-feedback-questions}

|            Field            |                                                Description                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Label                      | This text is shown as the title of your question.                                                           |
| Field type                 | Depending on the selection, the user gets a small or large field (allows line breaks) to enter text.       |
| Placeholder                | This text is used as the placeholder in the input field.                                                    |
| Is this field required?    | If enabled, the user must fill out this field.                                                              |
| Minimum input length       | The minimum number of characters the user must enter to submit the dialog.                                  |
| Maximum input length       | The maximum number of characters the user is allowed to enter to submit the dialog.                         |
