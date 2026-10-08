---
sidebar_position: 3
title: Custom domains
description: Connect your own domain to your SCNX site - the two DNS records you need, how to add them at your provider, and how verification works.
unlisted: true
---

# Custom domains

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

Every SCNX site comes with a free address that ends in `scnx.site`, like `my-community.scnx.site`. If you own your own domain, you can connect it so your site is reachable at your own address too, for example `www.example.com`.

This page walks through the whole setup. It is the most fiddly part of Sites, so take it step by step and you will be fine.

## The Domains page {#domains-page}

![The Domains page with a custom domain waiting for its CNAME and TXT records](@site/docs/assets/sites/en/domains.png)

Open **Domains** in the Sites menu of your server's dashboard. It has three parts:

- **Your scnx.site address** at the top, with buttons to copy or open it.
- **Custom domains**, where you connect your own domains.
- **Redirects** at the bottom. See [Redirects](/docs/sites/small-features#redirects).

Everyone with access to the site can see this page. Adding, checking and removing custom domains needs admin access. If you only have edit access, you can still see your domains and their DNS records.

## Your free address vs. a custom domain {#free-vs-custom}

- **Your scnx.site address** works the moment you publish your site. There is nothing to set up. If we offer more than one ending, you can pick yours under **Address ending**. The change takes effect right away, without a publish, and links that use another of our endings forward visitors to the one you picked.
- **A custom domain** is a domain you already own, bought from a provider like Cloudflare, Namecheap, GoDaddy, IONOS and so on. To use it, you add two DNS records at that provider so your domain points at our servers.

You can connect up to three custom domains to one site. Your free address keeps working alongside them.

## The two records you need {#the-two-records}

Connecting a domain needs **both** of these DNS records. One on its own is not enough.

| Record              | Purpose                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **CNAME** (routing) | Points your domain at our servers so we can serve your site and get an HTTPS certificate for it. Its value is always `sites.scnx.app`. |
| **TXT** (ownership) | Proves the domain is really yours. Its name starts with `_scnx-verify.` and its value contains a code that is unique to your domain.   |

For `www.example.com`, the two records look like this:

| Type  | Name                           | Value                                 |
| ----- | ------------------------------ | ------------------------------------- |
| CNAME | `www.example.com`              | `sites.scnx.app`                      |
| TXT   | `_scnx-verify.www.example.com` | `scnx-site-verification=` + your code |

The dashboard shows you the exact **Name** and **Value** for both records, with a copy button on each. Always copy them from your own dashboard: the TXT code is unique to your domain.

:::warning Both records are required
A domain only goes active once **both** the CNAME and the TXT record are in place and have spread across DNS. If you add only one, verification keeps failing and tells you which record is still missing.
:::

:::tip Use a subdomain like www
Connect a subdomain such as `www.example.com` or `join.example.com`. A bare root domain like `example.com` cannot be connected: our check looks for a real CNAME record, and a root domain cannot normally have one. Even providers that offer "CNAME flattening" on the root hide the CNAME from our check, so it would never verify.
:::

## Step by step {#steps}

1. Open **Domains** in the Sites menu.
2. Under **Custom domains**, type your domain (for example `www.example.com`) and click **Add**. It appears with a **Pending DNS** badge and shows the two records to create.
3. Keep that page open and, in a second tab, sign in to your **domain provider** (whoever you bought the domain from, or wherever your DNS is managed).
4. Add the **CNAME** record and the **TXT** record using the values from your dashboard. See the provider examples below.
5. Give DNS a little time to update, then come back to the dashboard and click **Verify**.
6. When both records are found, the domain flips to **Active** and your site starts serving on it. HTTPS is set up automatically. There is no certificate for you to buy or install.

Your site needs to be published for a custom domain to show it. If you have not published yet, you can still add and verify the domain. Visitors will see your site there once you [publish](/docs/sites/publishing).

### Adding the records at your provider {#provider-examples}

The idea is the same everywhere: create one CNAME record and one TXT record with the name and value shown in your dashboard. Only the wording of the fields differs.

:::note Full name or short name?
Your dashboard shows the **full** record names, like `www.example.com` and `_scnx-verify.www.example.com`. Most providers want only the part in front of your domain and add the rest themselves: `www` for the CNAME and `_scnx-verify.www` for the TXT record. If you type the full name into a field like that, you end up with `www.example.com.example.com`, which will not verify. When in doubt, use the short name.
:::

Here are three common providers as examples, for the domain `www.example.com`.

**Cloudflare**

1. Pick your domain, then open **DNS → Records**.
2. **Add record → CNAME.** Set **Name** to `www` and **Target** to `sites.scnx.app`.
3. Set the **Proxy status** to **DNS only** (grey cloud, not the orange one). This matters: with the orange proxy, our check cannot see your CNAME record and verification fails.
4. **Add record → TXT.** Set **Name** to `_scnx-verify.www` and **Content** to the TXT value from your dashboard.
5. Save both, then return to SCNX and click **Verify**.

**Namecheap**

1. Open **Domain List → Manage → Advanced DNS**.
2. **Add New Record → CNAME Record.** Put `www` in **Host** and `sites.scnx.app` in **Value**.
3. **Add New Record → TXT Record.** Put `_scnx-verify.www` in **Host** and the TXT value in **Value**.
4. Leave TTL on **Automatic**, save both, then click **Verify** in SCNX.

**GoDaddy**

1. Open **My Products → Domain → DNS / Manage DNS**.
2. **Add → CNAME.** Put `www` in **Name** and `sites.scnx.app` in **Value**.
3. **Add → TXT.** Put `_scnx-verify.www` in **Name** and the TXT value in **Value**.
4. Save both, then click **Verify** in SCNX.

Any other provider (IONOS, Squarespace, OVH, Porkbun, and so on) works the same way: find where you manage DNS records, add one CNAME and one TXT with the values from your dashboard.

## Verifying {#verify}

After you have added both records, click **Verify** next to your domain.

- If both records are found, you see **Your domain is verified and active!** and the badge turns to **Active**.
- If a record is still missing, the check tells you which one, and each record in the list is marked **Found** or **Not found**. The CNAME and the TXT record have different fixes, so check the one it names and try again.

DNS changes are not instant. They usually apply within a few minutes, but they can take longer depending on your provider and the record's TTL, up to a day or so in the slowest cases. If a first **Verify** does not pass, wait a little and try again rather than changing the records. As long as the values match what your dashboard shows, they will be found once DNS has caught up.

## Domain status {#status}

Each domain shows one of three badges:

| Badge              | What it means                                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **Pending DNS**    | The domain is added but not verified yet. Your site is not served on it. The two records to create are shown below it. |
| **Active**         | Both records were found. Your site is live on this domain, and the dashboard shows since when.                         |
| **Checks failing** | The domain is active, but our last regular check could not confirm its records. It still serves your site for now.     |

On an active domain, click **Show DNS records** to see the two records again.

## After it is active {#after}

Once a domain is active, we check its records again every few hours.

- **Leave both records in place.** If the CNAME or TXT record is later removed or changed at your provider, the domain shows **Checks failing**. One failed check can be a temporary blip. If two checks in a row fail, the domain stops serving your site and goes back to **Pending DNS**. Your site is still reachable at its `scnx.site` address, and the domain becomes active again by itself once the records are back, at the next check or when you click **Verify**. This protects your domain from being taken over by someone else if it ever stops pointing at us.
- **An unverified domain is released after 14 days.** If you add a domain but never finish the DNS setup, we remove it after two weeks so it does not sit around half-connected. The dashboard counts down the days left. You can always add it again.

## Removing a domain {#remove}

To disconnect a domain, click the trash icon (**Remove domain**) next to it and confirm. Visitors will no longer reach your site at that address. You can delete the DNS records at your provider afterwards.

## Troubleshooting {#troubleshooting}

- **Verify keeps failing.** Confirm both records exist and their values exactly match your dashboard. Check that you did not type the full name into a field that adds your domain by itself. On Cloudflare, make sure the CNAME is **DNS only** (grey cloud). Then wait a few minutes and try again.
- **Only the CNAME or only the TXT is found.** Add the missing one. Both are required.
- **I want to use my root domain.** Root domains like `example.com` cannot be connected. Use `www.example.com` instead. Many providers offer a forwarding option that sends `example.com` on to `www.example.com`.
- **The domain is active, but the site does not show.** Make sure your site is published.
- **It worked, then the site went offline on the custom domain.** A record was probably removed or changed at your provider. Put both records back and the domain becomes active again on its own. Your `scnx.site` address keeps working throughout.
- **"That domain is already in use."** The domain is already connected to a site. Each domain can only be connected to one site at a time.
- **The buttons are missing for me.** Adding, checking and removing custom domains needs admin access. Ask someone on your team who has it.
