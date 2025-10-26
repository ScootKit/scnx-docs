---
unlisted: false
---

# SCNX Public APIs

## Server Status Incidents

* Endpoint: GET `https://scnx.app/api/incidents`.
* Gets the current server status incidents from Instatus, but returns additional details (such as detailed updates and
  localizations).
* For more basic data, use [the Instatus API](https://status.scootkit.com/public-api).
* No authorization needed, but supports `Authorization: SCNX-Application` header. Without authorization, higher
  ratelimits apply.

## Custom Bot Modules

* Endpoint: GET `https://scnx.app/api/scn/modules`
* Returns SCNX Dashboard environment data for the default branch (usually the current stable branch), including
  approximateEnableBotCount based on latest stats calls.
* You may not save values of the `approximateEnableBotCount` key in objects to create historical graphs, analyze usage
  patterns or other purposes that goes above displaying this information to end users.
* The `author` key should not be used to determine module ownership or copyright details. If a `scnxOrgID` key is present in the `author` object, use the [get marketplace organization](#marketplace-org) call.
* No authorization needed, but supports `Authorization: SCNX-Application` header. Without authorization, higher
  ratelimits apply.

## Get Marketplace organization {#marketplace-org}

* Endpoint: GET `https://scnx.app/api/marketplace/organizations/:id`
* Returns SCNX Marketplace organization data for a marketplace organization. To fetch assets, use `https://scnx.app/api/marketplace/organizations/:id/dynamic-images` or `https://scnx.app/api/marketplace/organizations/:id/modules`.
* No authorization needed, but supports `Authorization: SCNX-Application` header.
