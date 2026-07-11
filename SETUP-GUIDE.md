# Temple Website — Hosting & Photo Upload Guide

This guide gets the website online **for free**, lets the temple committee **add gallery photos themselves** (no developer needed), and shows how to **attach a custom domain later**.

Total ongoing cost: **₹0/month** for hosting. The only optional cost is a domain name (~₹100–900/year), and even that can wait.

---

## The plan at a glance

| Piece | What we use | Cost |
|------|-------------|------|
| Website hosting | **Netlify** (free tier) | Free |
| File storage / versions | **GitHub** (free) | Free |
| Photo upload panel | **Sveltia CMS** (built into the site, at `/admin`) | Free |
| Web address | `your-name.netlify.app` now → custom domain later | Free now |

**Why Netlify (not Cloudflare, etc.):** Netlify has a one-click GitHub login built in for the photo panel, so a non-technical committee member can log in and upload photos without any extra setup. Bandwidth is far more than a temple site will ever use.

---

## PART A — One-time setup (do this once, ~20 minutes)

You only do Part A a single time. After that, you never have to touch it again.

### Step 1 — Put the website files on GitHub
1. Create a free account at **github.com**.
2. Click **New repository**. Name it e.g. `sathram-temple`. Keep it **Public**. Click **Create**.
3. On the new repo page, click **"uploading an existing file"**, then drag the **entire contents** of the `Sathram` folder in (all the `.html` files, the `assets` folder, the `admin` folder). Click **Commit changes**.

### Step 2 — Publish it on Netlify
1. Create a free account at **netlify.com** — choose **"Sign up with GitHub"**.
2. Click **Add new site → Import an existing project → GitHub**, and pick your `sathram-temple` repo.
3. Leave build settings **empty** (this is a plain site, no build step). Click **Deploy**.
4. In about a minute you'll get a live link like `https://sathram-temple.netlify.app`. **Share this with your friend** — the site is live.
   - You can rename it under **Site configuration → Change site name** to something nicer like `marattil-kottaram.netlify.app`.

### Step 3 — Turn on the photo upload login
1. In your GitHub repo, open the file **`admin/config.yml`**, click the pencil (Edit).
2. Change this line:
   ```
   repo: YOUR-GITHUB-USERNAME/YOUR-REPO-NAME
   ```
   to your real repo, e.g. `repo: arjun/sathram-temple`. Commit the change.
3. Connect the login (one-time):
   - In Netlify: **Site configuration → Access & security → OAuth → Install provider → GitHub.**
   - It will ask for a GitHub "Client ID" and "Secret." To get them: on GitHub go to **Settings → Developer settings → OAuth Apps → New OAuth App**.
     - Application name: `Temple Photo Login`
     - Homepage URL: your netlify site URL
     - Authorization callback URL: `https://api.netlify.com/auth/done`
     - Click **Register**, copy the **Client ID**, generate a **Client Secret**, paste both into Netlify.
4. Done. The photo panel now lives at **`https://your-site.netlify.app/admin`**.

### Step 4 — Give the committee member access
- If the committee member will upload photos, they need a free **GitHub account**, and you add them to the repo: **GitHub repo → Settings → Collaborators → Add people.**
- (Simplest alternative: they just send photos to you on WhatsApp and you upload — but the whole point here is they can do it themselves.)

---

## PART B — For the temple committee: how to add photos (the only part you'll use regularly)

1. Go to **`https://your-site.netlify.app/admin`**
2. Click **Login with GitHub** (first time only, it remembers you after).
3. Click **Photo Gallery → Gallery Photos**.
4. Click **Add Photo**:
   - **Section**: choose *General* or *Day 1 … Day 11*
   - **Photo**: click to upload the picture from your phone or computer
   - **Caption**: optional short description
5. Click **Save / Publish** (top of the page).
6. Wait about a minute, then refresh the website Gallery page — the photo is there.

To **remove** a photo, open the same list, click the photo entry, and delete it.

> Tip: phone photos are large. If uploads feel slow, resize photos to roughly 1500 pixels wide before uploading. Any free "image resize" app or WhatsApp's "compress" works fine.

---

## PART C — Adding a custom domain later (optional, when ready)

The site works forever on the free `.netlify.app` address. When the committee wants a proper name (e.g. `marattilkottaram.org`):

### 1. Buy the domain (cheapest options)
- **Cloudflare Registrar** — sells at wholesale price, no markup (often the cheapest, ~₹800–1000/yr for `.com`/`.org`).
- **Namecheap** or **GoDaddy** — frequent first-year discounts.
- **.in domain** is usually the cheapest (~₹100–500/yr) if an Indian address is fine.
- A `.org` reads well for a temple/trust.

### 2. Point it at Netlify
1. In Netlify: **Domain management → Add a domain** → type the domain you bought.
2. Netlify shows you either nameservers or DNS records. Log into wherever you bought the domain and paste those in.
3. Netlify auto-issues a free HTTPS (padlock) certificate. Within a few hours the site loads on the real domain.

No files change, nothing breaks — the same live site just answers on the new address.

---

## Quick reference

- **Live site:** `https://your-site.netlify.app`
- **Photo panel:** `https://your-site.netlify.app/admin`
- **Photos are stored in:** `assets/images/gallery-uploads/`
- **The gallery list file:** `assets/data/gallery.json` (the panel edits this for you — no need to touch it by hand)

## Before you go live — content checklist (from the site's own notes)
- Confirm the UPI QR + ID on the Donations page (`donations.html`) are correct.
- Confirm the WhatsApp number and Google Maps location on the Contact page.
- Add a couple of real event photos via `/admin` to replace the sample General photos when ready.
