# JOG Morocco — Website

Premium dark adventure community landing page for **JOG Morocco** (Jeep Owners Group Morocco), built as a fully static GitHub Pages site.

## Live Sites
- **Primary:** https://jogmaroc.com
- **Mirror:** https://jogmorocco.com
- **Repos:** https://github.com/appofun/jogmaroc · https://github.com/appofun/jogmorocco

---

## What Is This?

A cinematic dark-themed landing page for JOG Morocco — a Moroccan Jeep owners and enthusiasts community built around convoys, off-road adventures, desert expeditions, Atlas mountain drives, road safety awareness, and community spirit.

---

## Files Included

| File | Purpose |
|------|---------|
| `index.html` | Complete landing page — all 12 sections |
| `style.css` | Dark desert theme, CSS mountain/dune art, animations, responsive |
| `script.js` | Navbar scroll, hamburger menu, fade-in, form alert, back-to-top |
| `CNAME` | Custom domain for GitHub Pages |
| `README.md` | This file |

---

## Page Sections

1. **Header / Navbar** — Logo, nav links, Join Us → WhatsApp
2. **Hero** — Headline, subtitle, CTAs, CSS adventure card (mountains, dunes, sun, tire tracks)
3. **About** — 3 values (Adventure/Community/Respect) + 4 stat cards
4. **Expeditions** — 6 cards (Sahara/Atlas/Green March/Coastal/Family/Safety)
5. **Membership** — 3 tiers (Jeep Owner/Fan/Partner)
6. **Checklist** — 8 adventure preparation items
7. **Gallery** — 8 CSS placeholder cards (replace with real JOG Morocco photos)
8. **Partners** — 4 placeholder partner cards
9. **CTA** — Join on WhatsApp + Follow on Instagram
10. **Contact** — 4 info cards + contact form (JS alert)
11. **Footer** — Links, trademark disclaimer

---

## Contact Info (in site)

- **WhatsApp:** +212 773 737 000
- **Email:** Jogmorocco@gmail.com
- **Instagram:** @jeepmorocco

---

## Trademark Disclaimer

The footer includes: *"Jeep is a trademark of its respective owner. This website is a community presentation page and does not claim ownership of the Jeep trademark."*

---

## How to Deploy on GitHub Pages

```bash
cd /Users/admin/jogmaroc
git init
git add .
git commit -m "Initial commit — JOG Morocco landing page"
gh repo create appofun/jogmaroc --public --source=. --remote=origin --push
gh api repos/appofun/jogmaroc/pages --method POST \
  --input - <<'EOF'
{"source":{"branch":"main","path":"/"}}
EOF
```

Enable HTTPS after DNS propagates:
```bash
echo '{"https_enforced":true}' | gh api repos/appofun/jogmaroc/pages \
  --method PUT --input -
```

---

## DNS Setup (Namecheap) — jogmaroc.com

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  appofun.github.io
```

Plus Zoho MX and TXT records via `setup_domain.py jogmaroc.com contact`.

---

## How to Edit

### Change WhatsApp number
Search for `212773737000` in `index.html` — replace all instances.

### Change email
Search for `Jogmorocco@gmail.com` in `index.html` and `script.js`.

### Change colors
Edit CSS custom properties in `style.css` under `:root`:
```css
--bg:     #0B0D0C;   /* near-black base */
--sand:   #D6A85C;   /* warm sand / gold accent */
--orange: #C76A2A;   /* burnt orange */
--olive:  #556B2F;   /* army olive */
```

### Add real photos to gallery
Replace CSS gradient cards with real images:
```html
<!-- Find .gl-card in index.html, add inside the card: -->
<img src="images/sahara-dunes.jpg" alt="Sahara Dunes" style="width:100%;height:100%;object-fit:cover;" />
```

### Add real expedition photos
Each `.exp-img` div in the expeditions section has a comment showing the image tag to use.

### Replace partner logos
Find `.partner-card` divs and replace the emoji placeholder with `<img>` tags.

---

## Technology Stack

- Pure HTML5 + CSS3 + Vanilla JavaScript
- No frameworks, no build tools, no dependencies
- Google Fonts: Oswald (headings) + Inter (body)
- CSS custom properties for easy theming
- CSS art: mountain clip-path silhouettes, desert dune shapes, sun glow, tire tracks
- IntersectionObserver fade-in animations
- Fully static — works on GitHub Pages, Netlify, or any static host
