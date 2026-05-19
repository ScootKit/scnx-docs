---
sidebar_position: 6
title: Ticket Utilization
description: Monitor Discord support ticket capacity with a two-level warning system and inform users when your team is near capacity.
---

# Ticket Utilization

## Features {#features}

- Monitor the current utilization of your support systems and inform users about potential waiting times.
- Set warning levels that trigger customizable messages when ticket capacity reaches certain thresholds.
- Configure global open ticket limits for each system (Modmail and Ticket System).
- Override utilization settings per ticket topic for more granular control.

## Setup {#setup}

- Visit the [Ticket Utilization](https://scnx.app/glink?page=support-system/ticket-utilization) page in your dashboard.
- [Configure](#main-configuration) the available options.
- Optionally, [configure per-topic settings](#ticket-topics) to override global limits.
- [Configure messages](#advanced-message-configuration) to inform users about the current utilization.

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field                                  | Description                                                                                                                                                                                                                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enable ticket utilization              | Enables or disables the ticket utilization feature.                                                                                                                                                                                                                            |
| Warning level 1 limit                  | The utilization percentage at which warning level 1 is triggered (1–100).                                                                                                                                                                                                      |
| Warning level 2 limit                  | The utilization percentage at which warning level 2 is triggered. Must be higher than the warning level 1 limit.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if the warning level 1 limit is not set to 100._</blockquote></details></small> |
| Global Modmail open ticket limit       | The maximum number of Modmail tickets that can be open at the same time.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if Modmail is enabled._</blockquote></details></small>                                                                  |
| Global Ticket System open ticket limit | The maximum number of Ticket System tickets that can be open at the same time.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if the Ticket System is enabled._</blockquote></details></small>                                                  |

### Ticket Topics {#ticket-topics}

For each ticket topic (in both Modmail and the Ticket System), you can override the global utilization settings.

| Field                                      | Description                                                                                                                                                                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disable ticket utilization for this topic  | If enabled, this topic is excluded from the utilization calculation.                                                                                                                                                                              |
| Override ticket open limits for this topic | If enabled, you can set a separate open ticket limit for this topic.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Disable ticket utilization for this topic" is not enabled._</blockquote></details></small> |
| Open ticket limit for this topic           | The maximum number of tickets that can be open for this topic.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Override ticket open limits for this topic" is enabled._</blockquote></details></small>          |

### Advanced message configuration {#advanced-message-configuration}

These settings are configured separately for each enabled system (Modmail and Ticket System).

| Field                            | Description                                                                                                                                                                                                                                        |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Send level 1 utilization message | If enabled, a message is sent to users when the utilization reaches warning level 1.                                                                                                                                                               |
| Level 1 utilization message      | This message is sent when the utilization reaches warning level 1.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Send level 1 utilization message" is enabled._</blockquote></details></small>                 |
| Send level 2 utilization message | If enabled, a message is sent to users when the utilization reaches warning level 2.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if the warning level 1 limit is not set to 100._</blockquote></details></small> |
| Level 2 utilization message      | This message is sent when the utilization reaches warning level 2.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Send level 2 utilization message" is enabled._</blockquote></details></small>                 |
