# Service Area Quality Report

Post-build review of the Service Areas hub and the eleven community pages.
All figures were measured against the built HTML in `dist/`, not estimated.

**Build status:** `npm run build` succeeds. 27 routes prerendered to static HTML.
558 internal links checked, **0 broken**. 21 local assets referenced, **0 missing**.
`npm run lint` reports one pre-existing error in `src/pages/Contact.tsx` unrelated
to this work (`@types/react` is not installed in the project).

---

## 1. Page-by-page

Each page's body copy was measured after stripping markup, scripts, and head content.

### /service-areas — hub (not one of the eleven)

| | |
|---|---|
| **Visitor intent** | Orientation — "do they work where I am?" |
| **Title** | Service Areas Across Southwest Louisiana \| Upward Development |
| **Meta description** | Upward Development works out of Lake Charles across Calcasieu Parish and the surrounding area. Find the community closest to your property and what we most often do there. |
| **H1** | Where We Work |
| **Unique content** | States plainly that there is one yard and one crew in Lake Charles and no offices elsewhere. Eleven distinct one-line summaries, each naming that area's actual emphasis. |
| **Internal links** | 11 community pages + 5 service pages + /contact |
| **Structured data** | GeneralContractor, BreadcrumbList |

---

### /service-areas/lake-charles-la

| | |
|---|---|
| **Intent** | Home-market buyer; full-capability check |
| **Emphasis** | Everything, weighted to Super Homes and commercial |
| **Title** | Construction, Dirt Work & Steel Buildings in Lake Charles, LA |
| **Meta** | Upward Development is based in Lake Charles at 1650 E Gauthier Rd. Dirt work, land clearing, house pads, culverts, steel buildings and storm-resistant Super Homes… |
| **H1** | Our Home Market: Construction and Land Development in Lake Charles |
| **Local content** | Business address; the practical consequences of being local; Hurricane Laura as the documented origin of the Super Homes product |
| **Project / educational** | **Real project** — DeWanna Tarver's published review describing a million-dollar event-venue addition in south Lake Charles, presented as her words |
| **FAQs** | 6 — response time, small jobs, references, licensing, Super Home cost, working outside the city |
| **Internal links** | 5 service pages, 3 neighbouring areas, hub, /contact |
| **Image** | `/super-hero-2.jpg` — aerial steel frame on a finished slab |
| **Body** | 1,027 words · 9 H2s |
| **Schema** | GeneralContractor, BreadcrumbList, Service, FAQPage |

### /service-areas/moss-bluff-la

| | |
|---|---|
| **Intent** | Acreage owner with room to do something |
| **Emphasis** | Ponds, homesite prep, access work |
| **Title** | Land Clearing, Ponds & Homesite Prep in Moss Bluff, LA |
| **H1** | Dirt Work and Land Development in Moss Bluff, Louisiana |
| **Local content** | CDP rather than incorporated city; ~12,500 residents across ~15 sq mi of land, i.e. high land-per-household; parish rather than city is the authority for questions |
| **Project / educational** | "Thinking about a pond?" — five decisions to settle before digging |
| **Real customer voice** | Monica Miller's acreage-clearing review, with an explicit on-page note that the property location is not identified |
| **FAQs** | 6 — clearing capacity, whether you must be present, reusing pond spoil, what mulching leaves, pre-purchase looks, approvals |
| **Image** | `/real-estate-hero.jpg` — home on open acreage |
| **Body** | 1,057 words · 8 H2s |

### /service-areas/westlake-la

| | |
|---|---|
| **Intent** | Commercial buyer or trade contractor |
| **Emphasis** | Commercial site prep, trenching support, steel |
| **Title** | Commercial Site Prep & Steel Buildings in Westlake, LA |
| **H1** | Site Preparation and Steel Building Construction in Westlake |
| **Local content** | West bank of the Calcasieu River; ~4,800 residents but a heavier commercial/industrial footprint, with chemical plants and refineries in the surrounding area |
| **Project / educational** | "What a commercial customer should expect from us" — a five-point checklist framed as due diligence on any contractor, including Upward |
| **Real customer voice** | Freddy Wimberly's underground-electrical trenching review |
| **FAQs** | 5 — insurance certificates, subcontracting, backfill over utilities, building on a slab they did not pour, small jobs |
| **Image** | `/steel-body.jpg` — red iron frame on a slab |
| **Body** | 968 words · 8 H2s |

### /service-areas/sulphur-la

| | |
|---|---|
| **Intent** | Homeowner on a developed lot |
| **Emphasis** | Pads, driveways and commercial prep where access is constrained |
| **Title** | Dirt Work, House Pads & Site Prep in Sulphur, LA \| Upward Development |
| **H1** | Site Work and Construction for Sulphur Property Owners |
| **Local content** | Largest community in west Calcasieu (~21,800); nine miles west of the Lake Charles base; mostly already built, which changes the job from open-field work to constrained-access work |
| **Project / educational** | "What a shop pad on an existing lot usually involves" — six steps, access-first |
| **FAQs** | 5 — back-yard access, estimate cost, where spoil goes, yard damage, permits |
| **Image** | `/housepad.jpg` — compacted pad ready for a slab |
| **Body** | 1,195 words · 8 H2s (longest page) |

### /service-areas/carlyss-la

| | |
|---|---|
| **Intent** | Homeowner with standing water |
| **Emphasis** | Grading, drainage diagnosis, yard correction |
| **Title** | Grading, Drainage Work & House Pads in Carlyss, LA |
| **H1** | Grading and Drainage Site Work in Carlyss, Louisiana |
| **Local content** | Unincorporated CDP (~5,100), no city hall, so the parish is the authority; LA 27 through the middle, I-10 across the top, ten miles to Lake Charles |
| **Project / educational** | "How a yard drainage problem gets diagnosed" — five things to check before accepting any quote |
| **FAQs** | 5 — including two that decline to overpromise: no guarantee against standing water, and neighbour-water disputes routed to an attorney |
| **Image** | `/dirtwork-laser.jpg` — laser grade equipment in use |
| **Body** | 1,066 words · 8 H2s |

### /service-areas/iowa-la

| | |
|---|---|
| **Intent** | Farm or cattle property owner |
| **Emphasis** | Pasture conversion and agricultural access |
| **Title** | Land Clearing & Pasture Work in Iowa, Louisiana |
| **H1** | Clearing, Pasture and Site Work for Property Owners in Iowa, LA |
| **Local content** | 13 miles east via US 90 or I-10; ~3,400 residents; economy supported by oil, farming and cattle; grew up around rice farming after the railroad, oil struck 1930 |
| **Project / educational** | "Turning grown-up ground back into pasture" — five steps, tied to the site's verified "city lot to 100-acre pasture conversion" claim |
| **FAQs** | 5 — working around livestock, mulching vs full clearing for pasture, burning, scheduling, field entrances that wash out |
| **Image** | `/dirtwork-skidsteer.jpg` — skid steer with clearing attachment |
| **Body** | 932 words · 7 H2s |

### /service-areas/vinton-la

| | |
|---|---|
| **Intent** | Rural buyer who cannot get onto the land yet |
| **Emphasis** | Access, driveways, culverts |
| **Title** | Driveways, Culverts & Land Clearing in Vinton, LA |
| **H1** | Getting Rural Property in Vinton Ready to Use |
| **Local content** | Western end of Calcasieu near the Texas line; ~3,400 residents; US 90 through the centre, I-10 along the southern edge; larger parcels off those roads |
| **Project / educational** | "What putting in a drive and culvert generally takes" — six steps, opening with a checklist of what to know before the first visit |
| **FAQs** | 5 — opens with "Is Vinton too far out for you?" answered honestly about travel cost |
| **Image** | `/dirtwork-people.jpg` — crew on site |
| **Body** | 993 words · 8 H2s |

### /service-areas/dequincy-la

| | |
|---|---|
| **Intent** | Owner of a wooded tract |
| **Emphasis** | Clearing methods and what happens to the material |
| **Title** | Land Clearing and Forestry Mulching in DeQuincy, LA |
| **H1** | Clearing Wooded Property Around DeQuincy |
| **Local content** | Founded 1897 as a railroad settlement; ~3,100 residents; LA 12 east and LA 27 north/south; 17 miles north of Sulphur; timber long central to the local economy |
| **Project / educational** | "Three different jobs people call 'clearing'" plus a homesite walkthrough |
| **FAQs** | 5 — including one that sends business away: on a tract with real standing timber, get a forester or timber buyer first |
| **Image** | `/landclearing-aerial.jpg` — partially cleared wooded property |
| **Body** | 965 words · 7 H2s |

### /service-areas/jennings-la

| | |
|---|---|
| **Intent** | Farm operator or town property owner in Jeff Davis Parish |
| **Emphasis** | Agricultural building pads; scheduling around the season |
| **Title** | Site Prep, Pads and Clearing in Jennings, Louisiana |
| **H1** | Dirt Work and Building Pads in Jennings, LA |
| **Local content** | Jefferson Davis Parish seat, ~9,800 residents; settled by Midwestern farmers growing rice, cotton, sweet potatoes and corn; site of Louisiana's first producing oil well in 1901, hence "Cradle of Louisiana Oil" |
| **Project / educational** | "What goes into a pad for an equipment barn" — six points on why it is often harder than a house pad |
| **FAQs** | 5 — service-area honesty, working post-harvest, a scope limit (specialised irrigation infrastructure may be outside what they take on), which parish to ask, remote estimates |
| **Image** | `/dirtwork-body.jpg` — excavator moving dirt |
| **Body** | 987 words · 8 H2s |

### /service-areas/kinder-la

| | |
|---|---|
| **Intent** | Land owner or small developer |
| **Emphasis** | Site work for income-producing property |
| **Title** | Land Development and Site Work in Kinder, LA |
| **H1** | Preparing Property in Kinder and Allen Parish |
| **Local content** | Allen Parish town, incorporated 1911, ~2,200 residents; US 165 and US 190 cross at the historic centre; timber and sawmill origins; home to Coushatta Casino Resort, the largest casino resort in Louisiana |
| **Project / educational** | "What site work for a multi-unit or RV site generally involves" — six points, connected to the verified fact that Upward has bought and built RV parks and short-term rentals |
| **FAQs** | 5 — distance, pre-purchase evaluation, phasing, whether they buy property, how travel is priced |
| **Image** | `/steel-body-2.jpg` — completed steel building |
| **Body** | 913 words · 7 H2s |

### /service-areas/deridder-la

| | |
|---|---|
| **Intent** | Beauregard Parish owner wondering if a Lake Charles company will travel |
| **Emphasis** | Steel shops and larger clearing, with explicit travel honesty |
| **Title** | Steel Buildings, Shops & Land Clearing in DeRidder, LA |
| **H1** | Construction and Land Work in DeRidder and Beauregard Parish |
| **Local content** | Beauregard Parish seat, incorporated 1903, ~9,850 residents; US 171 and US 190; 48 miles north of Lake Charles; longleaf pine and sawmilling drove the early economy |
| **Project / educational** | "Making a trip out here worth it" — five suggestions for grouping work to justify mobilisation |
| **Distinctive** | The page **opens** by conceding that distance costs money, and the first FAQ is "Do you actually travel to DeRidder, or is this just a web page?" No other page does this |
| **FAQs** | 5 — travel reality, minimum job size, pad-and-building together, permits, pre-purchase looks |
| **Image** | `/about-body.jpg` — team member marking a steel beam |
| **Body** | 1,016 words · 7 H2s |

---

## 2. Duplication review

Measured on rendered body text including shared nav and footer.

| Check | Result |
|---|---|
| **Repeated paragraphs across pages** | None |
| **Repeated introductions** | None. Every page opens with a different H2 and a different first paragraph |
| **Repeated FAQs** | None. 57 questions across 11 pages, no question text repeated |
| **Repeated service descriptions** | None. The same service is described differently per page, framed around that area's use case (e.g. culverts are about ditch capacity on the Vinton page, ag traffic loads on the Jennings page, drainage diagnosis on the Carlyss page) |
| **Repeated CTAs** | None. Eleven distinct closing headings and bodies |
| **Highest pairwise similarity** | **7.1%** (Iowa vs Jennings — both agricultural). Includes the nav and footer that appear on all 27 site pages |
| **Median pairwise similarity** | 5.4% |
| **Sentences on more than one city page** | **1** — the footer's service list, site chrome present on every page including the homepage |
| **Identical H2s across pages** | 1 — "Sources for the local details on this page", a labelled citation block, deliberately consistent |

### Keyword and city-name density

City name as a share of body words, including the two footer occurrences of
"Lake Charles" that appear on every page of the site:

| Page | Mentions | Words | Density |
|---|---|---|---|
| vinton-la | 6 | 993 | 0.60% |
| iowa-la | 5 | 932 | 0.54% |
| kinder-la | 6 | 913 | 0.66% |
| dequincy-la | 7 | 965 | 0.73% |
| jennings-la | 7 | 987 | 0.71% |
| carlyss-la | 8 | 1,066 | 0.75% |
| deridder-la | 8 | 1,016 | 0.79% |
| sulphur-la | 10 | 1,195 | 0.84% |
| westlake-la | 9 | 968 | 0.93% |
| moss-bluff-la | 6 | 1,057 | 1.14% |
| lake-charles-la | 8 | 1,027 | 1.56% |

Lake Charles is highest because the page is about the home market and because
the footer contributes two of the eight mentions; content-only density is
roughly 1.17%. Two redundant mentions were removed during review (an FAQ
heading and a testimonial heading were rewritten). Nothing here reads as
stuffing.

### Cannibalisation

Low. Community pages target locality-qualified queries; the five service pages
target unqualified service queries. No community page duplicates a service
page's H1 or headings, and all eleven link up to the service pages with varied
anchor text. The one pair worth monitoring in Search Console is
`/service-areas/lake-charles-la` against the homepage.

---

## 3. Compliance against the anti-spam rules

| Rule | Status |
|---|---|
| No template with the city name swapped | **Pass.** One file per community under `src/data/serviceAreas/`, each with its own ordered section list. Section order, count and headings differ on every page |
| No spun or synonym-swapped language | **Pass.** 5.4% median similarity |
| No implied office, yard or crew outside Lake Charles | **Pass.** The hub states this explicitly; the DeRidder page reinforces it |
| No fabricated testimonials, projects, partnerships or dates | **Pass.** Three real published reviews used verbatim; all other walkthroughs carry an on-page label such as "General walkthrough — not a specific customer project" |
| No invented soil, flood, drainage, code, permit or zoning facts | **Pass.** Every page routes these to the relevant parish or city office |
| Local claims sourced or omitted | **Pass.** Every page renders a visible "Sources" block linking the reference for its local facts |
| No forced exact-match keywords | **Pass.** Densities above; H1s vary in structure and only some contain "Louisiana" |
| No "best/top-rated/leading contractor" | **Pass.** Zero occurrences |
| No filler for word count | **Pass.** Pages range 913–1,195 words, sized to their content |
| Pages stand alone, not funnels | **Pass.** Every page answers questions and includes at least one section that gives away useful information (including advice to hire someone else, on the DeQuincy timber question) |
| No city-name lists in copy, headings, alt text, metadata or footer | **Pass.** The footer has one "Service Areas" link. City names appear as `areaServed` in JSON-LD only, which the brief sanctions |
| No hidden text, fake review schema or invisible structured data | **Pass.** Every schema claim corresponds to visible page content. No `aggregateRating`, `review`, `award`, `priceRange`, hours or geo emitted |
| No competitor copy | **Pass.** All copy written for this project |
| No invented traffic or ranking projections | **Pass.** None made anywhere |

---

## 4. Technical verification

| Check | Result |
|---|---|
| Static HTML for crawlers | **Pass.** All 27 routes prerendered; community pages carry 5,300–6,500 characters of rendered text before any JS runs |
| Unique title per route | **Pass.** 27 routes, 27 distinct titles |
| Unique meta description per route | **Pass** |
| Self-referencing canonical | **Pass** on every route |
| Open Graph title/description/image/url | **Pass**, baked into static HTML so social scrapers see per-page values |
| One H1 per page | **Pass.** Verified in-browser on 5 pages |
| H2/H3 hierarchy | **Pass.** No skipped levels |
| Breadcrumb navigation | **Pass.** `<nav aria-label="Breadcrumb">` with `aria-current="page"`, plus BreadcrumbList schema |
| Internal links valid | **Pass.** 558 checked, 0 broken |
| Images exist and have descriptive alt text | **Pass.** 21 assets, 0 missing. No alt text contains a city name it cannot support |
| Orphan pages | **None.** Every community page is linked from the hub, from 1–3 sibling pages, and listed in the sitemap |
| Sitemap | **Pass.** Regenerated from the route registry; 27 URLs |
| robots.txt | **Pass.** Allows all except `/api/`; no `noindex` anywhere |
| Trailing-slash duplicates | **Avoided.** Directory-style output means one canonical URL per page; the canonical is always the non-trailing-slash form |
| Redirects | **None needed.** No existing URL changed or removed |
| Analytics preserved | **Pass.** GTM, GA4 and the Found It lead-capture script are in the prerender template and verified present in output |
| Mobile rendering | **Pass.** Tested at 390 px — no horizontal overflow, single-column layout, stacked CTAs |
| Tap targets | **Pass.** `tel:` and `sms:` links in the hero and closing CTA of every community page |
| JS / hydration errors | **None** on any page tested |
| Layout shift | Hero images carry explicit `width`/`height`; in-body images are `loading="lazy"` |
| Page weight | 33–36 kB of HTML per community page; shared 546 kB JS bundle (167 kB gzipped) is unchanged from before this work and no longer blocks first paint |

---

## 5. Items still needing client verification

Carried forward from the audit. None of these block publication, but each
would improve the pages.

1. **[NEEDS UPWARD DEVELOPMENT VERIFICATION]** Postal code at 1650 E Gauthier Rd — corrected to 70607, worth confirming.
2. **[NEEDS UPWARD DEVELOPMENT VERIFICATION]** Real service radius and any distance-based pricing policy, particularly for DeRidder, Jennings and Kinder.
3. **[NEEDS UPWARD DEVELOPMENT VERIFICATION]** Contractor licence number and classifications.
4. **[NEEDS UPWARD DEVELOPMENT VERIFICATION]** Business hours, if they should be published.
5. **[NEEDS UPWARD DEVELOPMENT VERIFICATION]** Whether any documented project exists per community, to replace the labelled general walkthroughs.
6. **[NEEDS UPWARD DEVELOPMENT VERIFICATION]** Google Business Profile rating and review count, before any `aggregateRating` is considered.
7. **[NEEDS UPWARD DEVELOPMENT VERIFICATION]** Whether the specialised-irrigation scope limit stated on the Jennings page reflects reality.

## 6. Known weaknesses

Stated plainly rather than hidden.

- **No community-specific photography.** Every image is a genuine Upward Development photo, but none can be tied to a named city, so alt text stays generic and no caption claims a location. This is the largest remaining gap.
- **No documented local projects.** Ten of the eleven pages use labelled general walkthroughs rather than real case studies. Honest, but weaker than the real thing.
- **Local facts are mostly demographic and geographic.** Population, parish status, highways, distance and documented economic history are verifiable; the operational specifics that would make these pages genuinely hard to copy have to come from the business.
- **Only three of nine published reviews were usable**, and only one names a location.
