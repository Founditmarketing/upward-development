# Service Area Page Audit — Upward Development

Phase One audit completed before building the Service Areas hub and the eleven
community pages. Everything below was checked against the codebase for
`www.upwarddevelopment.us` and, where noted, against outside sources.

---

## 1. Facts verified from the existing website

These come from the site itself and are safe to use in customer-facing copy.

| Fact | Where it is stated on the site |
|---|---|
| Business name: Upward Development LLC | `metadata.json`, homepage JSON-LD |
| Phone: 318-452-7653 (call **and** text) | Navbar, Footer, every page CTA, Contact page |
| Email: lucas@upwarddevelopment.us | Footer, Contact page, About page |
| Address: 1650 E Gauthier Rd, Lake Charles, LA | Footer, homepage JSON-LD |
| Owner/operator: Lucas LaCour | About page team section |
| Team: Lucas LaCour (Owner/Operator), Faith LaCour (Operations Coordinator), Daniel LaCour (Lead Operator), Ryan (Building Specialist) | About page |
| Founded 2024; family business; previously real estate, timber, car wash, billboards | About page, "Our Story" |
| Core values: Communication. Quality. Value. | Footer band |
| "All of our work is pointed upward for the glory of God." | Footer, About page |
| "Here to Enhance the Value of Your Property" | Homepage H1 |
| Licensed and insured | Homepage, Dirt Work, Steel Buildings, Land Clearing pages |
| More than 25 years in real estate | Real Estate page |
| Equipment: big and little excavators, track loaders, tractors, dozers, lasers, pumps | Dirt Work page, Steel Buildings page |
| Also: trench burners, specialized excavators | Land Clearing page |
| Laser and GPS grade technology used for grading | Dirt Work page |
| Clears "everything from a city lot to a 100 acre pasture conversion" | Land Clearing page |
| "References available upon request" | Land Clearing page |
| Steel buildings: engineered, wood-free, all-welded **or** bolt-up, "chicken coops to shopping centers" | Steel Buildings page, homepage |
| Super Homes: steel mainframe, inspired by Hurricane Laura, Zip sheathing, Hardie/brick, "not barndominiums" | Super Homes page, homepage |
| Real estate: buys homes in any condition; has bought/built single-family rentals, RV parks, short-term rentals | Real Estate page |
| "We answer phone calls, text messages and emails." | Dirt Work page, Land Clearing page |
| Nine named customer reviews with full text | `src/components/ReviewSlider.tsx`, About page |
| Social: Instagram, Facebook, TikTok, YouTube | Footer |

**Service list verified from the Contact form's Project Type dropdown**
(`src/pages/Contact.tsx`) — a useful confirmation of what the business
actually sells: Dirt Work & Land Clearing, Steel Buildings, Super Homes,
Commercial Site Prep, House Pads, Mobile Home Pads, Forestry Mulching,
Underbrush Removal, Culvert Installation, Retention Ponds, Yard Grading, Final
Grading, Real Estate Investments.

### Reviews used on the new pages

Only reviews already published on the site are quoted, verbatim, with the name
already shown publicly. No review was edited, and no review was attributed to a
city it does not name.

| Review | Used on | Why it is appropriate |
|---|---|---|
| DeWanna Tarver — "million dollar addition to an event venue we own in south Lake Charles" | `/service-areas/lake-charles-la` | The reviewer names the location herself. Labelled as the customer's own words. |
| Monica Miller — "hired Upward Development to clear a few acres" | `/service-areas/moss-bluff-la` | Acreage clearing matches the page's subject. **Explicitly noted on the page that the property location is not identified** — no location is implied. |
| Freddy Wimberly — underground electrical trenching | `/service-areas/westlake-la` | Trade-customer review matching that page's commercial/trenching emphasis. No location implied. |

---

## 2. Facts corrected during this work

| Item | Was | Now | Basis |
|---|---|---|---|
| Postal code in homepage JSON-LD | `70601` | `70607` | The brief states 70607, and independent property records (Zillow, Trulia, CBRE listings for E Gauthier Rd) place that road in 70607. Still worth a final confirmation from the business — see §3. |
| `geo` coordinates in JSON-LD | `30.2266, -93.2174` | **Removed** | Those are generic Lake Charles coordinates, not the business address. Unverified geo is not permitted under the brief. |
| `priceRange: "$$"` in JSON-LD | present | **Removed** | No objective basis for the claim. |

---

## 3. Facts still needing confirmation

Marked in the copy or omitted entirely. Nothing below was invented to fill a gap.

- **[NEEDS UPWARD DEVELOPMENT VERIFICATION] Exact postal code for 1650 E Gauthier Rd.** Corrected to 70607 on strong evidence, but please confirm against a utility bill or the insurance certificate.
- **[NEEDS UPWARD DEVELOPMENT VERIFICATION] Actual service radius.** The eleven communities were approved for this build, but the outer three (DeRidder, Jennings, Kinder) are 30–50 miles out. The DeRidder page states plainly that distance affects pricing. Confirm this reflects real policy.
- **[NEEDS UPWARD DEVELOPMENT VERIFICATION] Louisiana contractor licence number and classifications.** "Licensed and insured" appears throughout the existing site, but no number is published. A licence number is a strong trust signal and would let visitors verify with the state board. Not added, because it is not on the site.
- **[NEEDS UPWARD DEVELOPMENT VERIFICATION] Business hours and response-time commitment.** No hours anywhere on the site, so none were published and no `openingHours` schema was emitted.
- **[NEEDS UPWARD DEVELOPMENT VERIFICATION] Whether any real projects can be documented per community.** Every walkthrough section is explicitly labelled as general information, not completed work. Real projects would materially strengthen these pages — see §7.
- **[NEEDS UPWARD DEVELOPMENT VERIFICATION] Google Business Profile review count and rating.** No `aggregateRating` was emitted because nothing on the site substantiates one.
- **[NEEDS UPWARD DEVELOPMENT VERIFICATION] Whether "Ryan" (Building Specialist) has a surname to publish.** Cosmetic, but the About page lists three LaCours with surnames and one first name.

### Deliberately omitted rather than guessed

No page states soil types, flood-zone designations, drainage requirements,
permit rules, zoning rules or code requirements for any community. Every page
that touches on these points the reader at the relevant parish or city office
instead. Burn-related copy says conditions and restrictions decide the answer,
rather than asserting what is currently allowed.

---

## 4. Existing components and patterns reused

| Component | Reused how |
|---|---|
| `src/components/Navbar.tsx` | Unchanged structurally; one "Service Areas" item added to desktop nav and mobile menu. Active state extended to match `/service-areas/*`. |
| `src/components/Footer.tsx` | One "Service Areas" link added to the existing Company column. **No city-name list added to the footer.** |
| `src/components/ScrollToTop.tsx` | Applies to new routes automatically. |
| Design tokens in `src/index.css` | `--color-primary: #21C3F4`, `--color-primary-dark`, Oswald headings, Inter body — all inherited, nothing overridden. |
| Existing page patterns | Full-bleed hero with dark overlay, `w-10 h-0.5` rule above H2s, `max-w-6xl`/`max-w-3xl` containers, uppercase tracking-widest CTA buttons, alternating white / `bg-gray-50` bands — all copied from the service and About pages. |
| Existing photography | All 21 images referenced already existed in `public/`. No stock imagery introduced. |

### New shared components

- `src/components/Breadcrumbs.tsx` — accessible `<nav aria-label="Breadcrumb">` with `aria-current="page"`.
- `src/components/AreaSections.tsx` — renders the per-city section blocks.
- `src/components/SeoManager.tsx` — route-driven head management.

---

## 5. Current URL structure and internal linking

**Existing service pages (unchanged, no redirects needed):**

```
/  /about  /contact  /blog  /blog/:slug
/services/dirt-work  /services/land-clearing
/services/steel-buildings  /services/super-homes  /services/real-estate
```

Note: `/services/land-clearing` is served by `src/pages/services/ResidentialLotClearing.tsx`.
The filename and the route disagree; the route is correct and was left alone.

**Recommended and implemented structure:**

```
/service-areas                 hub
/service-areas/<city>-la       eleven community pages
```

Chosen over `/locations/`, `/areas-we-serve/` or keyword-stuffed alternatives
because it is short, describes the content, and the `-la` suffix disambiguates
Iowa (Louisiana) from Iowa (the state) — a real ambiguity for one of these
communities.

**Link hierarchy built:**

```
Homepage ─ nav ─▶ Service Areas hub ─▶ community page ─▶ service page ─▶ /contact
                                    └─▶ 2–3 genuinely adjacent communities
```

Cross-links between community pages are geographic and few — two or three per
page, chosen because a reader near that boundary would actually want them
(Sulphur↔Carlyss, DeQuincy↔DeRidder, Iowa↔Kinder). No page links to all ten
others, and anchor text varies throughout.

---

## 6. Technical problems found

| Problem | Severity | Status |
|---|---|---|
| **Site rendered nothing without JavaScript.** `index.html` shipped an empty `<div id="root">`; all content, titles and meta tags depended on client-side JS. Social scrapers and non-rendering crawlers saw a blank shell, and every URL shared the homepage's OG tags. | High | **Fixed** — `scripts/prerender.mjs` now renders all 27 routes to static HTML at build time with per-page head tags and JSON-LD. |
| Postal code, geo and priceRange inaccuracies in JSON-LD | Medium | **Fixed** — see §2. |
| No canonical tags on any page except the homepage (which self-referenced `/` from every URL) | Medium | **Fixed** — self-referencing canonicals on all routes. |
| Sitemap listed only 8 URLs and was hand-maintained | Medium | **Fixed** — regenerated from the route registry; 27 URLs. |
| `npm run lint` fails on `src/pages/Contact.tsx:9` — `Cannot find namespace 'React'` because `@types/react` is not installed | Low | **Pre-existing, not fixed.** Unrelated to this work; `vite build` succeeds. Installing `@types/react`/`@types/react-dom` is a worthwhile separate cleanup. |
| JS bundle is 546 kB (167 kB gzipped) in one chunk | Low | Not addressed. Prerendering means first paint no longer waits on it. Route-level code splitting would be the next win. |
| `README.md` is the stock AI Studio template and describes a `GEMINI_API_KEY` the site does not use | Cosmetic | Left alone. |

### Confirmed working, left untouched

- `robots.txt` allows everything except `/api/` — the new pages are crawlable, and nothing carries `noindex`.
- Google Tag Manager (`GTM-PKW3N8Q3`), GA4 (`G-KBCV08T0C5`) and the Found It lead-capture script are all in `index.html`, which the prerender step uses as its template — so tracking is present on every prerendered page. Verified in the build output.
- Contact form posts to the Found It CRM endpoint. Untouched.
- SPA deep-link rewrites already existed in `vercel.json` and `server.ts`. Vercel checks the filesystem before applying rewrites, so prerendered files win and the rewrite remains the fallback.
- No URLs were changed, replaced or deleted, so no redirects are required.

---

## 7. Content and media needed from Upward Development

Ordered by how much each would improve the pages.

1. **Job photographs tagged by community.** The single biggest weakness. Every image currently used is a real Upward Development photo, but none can be attributed to a specific city, so alt text describes the work generically and no caption claims a location. Even three or four geotagged job photos per area would transform these pages. Phone photos are fine.
2. **Two or three documented projects per area** — the problem, the scope, the equipment, the outcome, and permission to publish. Each page currently uses a clearly-labelled general walkthrough instead. Swapping in real projects is the highest-value upgrade available and the sections are built to take them.
3. **Community-specific customer reviews.** Nine reviews exist but only one names a location. When a customer leaves a review, asking them to mention the town makes it usable on that page.
4. **Contractor licence number and classifications**, so "licensed and insured" can be verified rather than asserted.
5. **A written statement of the real service radius**, including any distance-based pricing policy, so the DeRidder, Jennings and Kinder pages reflect actual practice.
6. **Business hours**, if the business wants them published.
7. **Confirmation of the postal code** at 1650 E Gauthier Rd.
8. **Anything genuinely distinctive per community** — a long-standing relationship, a type of job that keeps recurring in one town, equipment kept in a particular area. Small operational truths make these pages harder to replicate than any amount of writing.

---

## 8. Duplication and cannibalisation review

Run against the built HTML. Full results in `SERVICE_AREA_QUALITY_REPORT.md`.

- Highest similarity between any two community pages: **7.0%** (3-gram Jaccard, and that figure includes the shared nav and footer present on every page of the site). Median pair: 5.5%.
- Exactly **one** sentence appears on more than one community page: the footer's service list, which is site chrome present on all 27 pages.
- City-name density in body copy: 0.51%–1.17% after adjustment. No page repeats its city name at a rate that reads as stuffing.

**Cannibalisation risk:** low, and by design. Community pages target
locality-qualified intent ("land clearing DeQuincy"); the five service pages
target unqualified service intent ("forestry mulching Louisiana"). Community
pages link up to the service pages with varied anchor text and never duplicate
their headings. The one overlap worth monitoring is `/service-areas/lake-charles-la`
against the homepage — both target the home market. They are differentiated:
the homepage sells the company, the Lake Charles page answers "what can you do
for my property here". Worth watching in Search Console after indexing.
