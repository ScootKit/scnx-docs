---
sidebar_position: 3
title: Custom domains
description: Connect your own domain to your SCNX site - the two DNS records you need, how to add them at your provider, and how verification works.
---

# Custom domains

Every SCNX site comes with a free address that ends in `scnx.site`, like `my-community.scnx.site`. If you own your own domain, you can connect it so your site is reachable at your own address instead, for example `www.example.com`.

This page walks through the whole setup. It is the most fiddly part of Sites, so take it step by step and you will be fine.

## Your free address vs. a custom domain {#free-vs-custom}

- **Your scnx.site address** works the moment you create your site. Nothing to set up. You can also change the ending (for example to `scnx.page` or `scnx.website`) in the **Domains** section, and the change takes effect right away.
- **A custom domain** is a domain you already own, bought from a provider like Cloudflare, Namecheap, GoDaddy, IONOS and so on. To use it, you add two DNS records at that provider so your domain points at our servers.

You can connect up to three custom domains to one site.

## The two records you need {#the-two-records}

Connecting a domain needs **both** of these DNS records. One on its own is not enough.

| Record | Purpose |
| --- | --- |
| **CNAME** (routing) | Points your domain at our servers so we can serve your site and get an HTTPS certificate for it. Its target is `sites.scnx.app`. |
| **TXT** (ownership) | Proves the domain is really yours. It contains a unique code tied to your domain. |

The editor shows you the exact **Type**, **Name** and **Target** for both records, with a copy button on each. Always copy the values from your own dashboard: the TXT ownership code is unique to your domain.

:::warning Both records are required
A domain only goes active once **both** the CNAME and the TXT record are in place and have spread across DNS. If you add only one, verification will keep failing and tell you which record is still missing.
:::

## Step by step {#steps}

1. In the editor, open the **Domains** section (you need website admin access for this).
2. Under **Custom domains**, type your domain (for example `www.example.com`) and click **Add**. It appears with a **Pending DNS** badge and shows the two records to create.
3. Keep that page open and, in a second tab, sign in to your **domain provider** (whoever you bought the domain from, or wherever your DNS is managed).
4. Add the **CNAME** record and the **TXT** record using the values from your dashboard. See the provider examples below.
5. Give DNS a little time to update, then come back to the dashboard and click **Verify**.
6. When both records are found, the domain flips to **Active** and your site starts serving on it. HTTPS is set up automatically. There is no certificate for you to buy or install.

### Adding the records at your provider {#provider-examples}

The idea is the same everywhere: create one CNAME record and one TXT record with the Name and Target shown in your dashboard. Only the wording of the fields differs. Here are three common providers as examples.

:::tip Root domain vs. a subdomain
CNAME records can normally only be used on a subdomain such as `www.example.com`, not on the bare root `example.com`. Connecting `www.example.com` (or another subdomain like `join.example.com`) is the simplest path. Some providers, such as Cloudflare, can flatten a CNAME on the root; if yours cannot, use a subdomain.
:::

**Cloudflare**

1. Pick your domain, then open **DNS → Records**.
2. **Add record → CNAME.** Set **Name** to the name from your dashboard (for `www.example.com`, that is `www`), and **Target** to `sites.scnx.app`.
3. Set the **Proxy status** to **DNS only** (grey cloud, not the orange one). This matters: the orange proxy would get in the way of our HTTPS setup.
4. **Add record → TXT.** Set **Name** and **Content** to the TXT name and value from your dashboard.
5. Save both, then return to SCNX and click **Verify**.

**Namecheap**

1. Open **Domain List → Manage → Advanced DNS**.
2. **Add New Record → CNAME Record.** Put the record name in **Host** (`www`, or `@` only if you are connecting the root and Namecheap allows it) and `sites.scnx.app` in **Value**.
3. **Add New Record → TXT Record.** Put the TXT name in **Host** and the code in **Value**.
4. Leave TTL on **Automatic**, save both, then click **Verify** in SCNX.

**GoDaddy**

1. Open **My Products → Domain → DNS / Manage DNS**.
2. **Add → CNAME.** Put the record name in **Name** and `sites.scnx.app` in **Value**.
3. **Add → TXT.** Put the TXT name in **Name** and the code in **Value**.
4. Save both, then click **Verify** in SCNX.

Any other provider (IONOS, Google Domains, Squarespace, OVH, Porkbun, and so on) works the same way: find where you manage DNS records, add one CNAME and one TXT with the values from your dashboard.

## Verifying {#verify}

After you have added both records, click **Verify** in the Domains section.

- If both records are found, you will see **Your domain is verified and active** and the badge turns to **Active**.
- If a record is still missing, the check tells you which one: double-check the **CNAME**, the **TXT**, or both, and try again. The two records have different fixes, so it is worth reading which one it names.

DNS changes are not instant. They usually apply within a few minutes, but they can take longer depending on your provider and the record's TTL, up to a day or so in the slowest cases. If a first **Verify** does not pass, wait a little and try again rather than changing the records. As long as the values match what your dashboard shows, they will be found once DNS has caught up.

## After it is active {#after}

Once a domain is active, we keep checking now and then that it still points at us.

- **An unverified domain is released after 14 days.** If you add a domain but never finish the DNS setup, we remove it after two weeks so it does not sit around half-connected. You can always add it again.
- **A verified domain that stops pointing at us will stop serving.** If the CNAME or TXT record is later removed or changed at your provider, the domain fails its re-check and your site stops being served on it. Your site is still reachable at its `scnx.site` address, and the custom domain starts working again as soon as the records are back in place. This protects your domain from being taken over by someone else if it ever stops pointing at us.

## Removing a domain {#remove}

To disconnect a domain, open the **Domains** section, find the domain and choose **Remove domain**. Visitors will no longer reach your site at that address. You can delete the DNS records at your provider afterwards.

## Troubleshooting {#troubleshooting}

- **Verify keeps failing.** Confirm both records exist and their values exactly match your dashboard. On Cloudflare, make sure the CNAME is **DNS only** (grey cloud). Then wait a few minutes and try again.
- **Only the CNAME or only the TXT is found.** Add the missing one. Both are required.
- **It worked, then the site went offline on the custom domain.** A record was probably removed or changed at your provider. Put both records back and the domain re-verifies on its own. Your `scnx.site` address keeps working throughout.
- **The Domains section is read-only for me.** Adding, checking and removing custom domains needs the website admin permission. Ask someone on your team who has it.
