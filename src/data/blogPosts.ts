/**
 * Blog content lives here. To publish a new post, add an entry to the top of
 * the `blogPosts` array — the /blog index and /blog/:slug pages pick it up
 * automatically. Also add the URL to public/sitemap.xml.
 */

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'image'; src: string; alt: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD) — used for sorting and the <time> element. */
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  body: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-prepare-your-lot-for-a-house-pad',
    title: 'How to Prepare Your Lot for a House Pad in Southwest Louisiana',
    excerpt:
      'Wet ground, heavy clay and hurricane season make pad work in Calcasieu Parish its own animal. Here is how we approach a build pad so the slab that lands on it stays put.',
    date: '2026-07-14',
    author: 'Lucas LaCour',
    category: 'Dirt Work',
    readTime: '6 min read',
    image: '/housepad.jpg',
    imageAlt: 'Finished house pad graded and compacted on a Louisiana build site',
    body: [
      {
        type: 'p',
        text: 'Everything you build sits on the dirt underneath it. In Southwest Louisiana that dirt is usually heavy clay that holds water, swells when it is wet and shrinks when it dries out. A pad that was not built right will tell on itself in the first year — hairline cracks in the slab, doors that stop latching, water standing where it should not.',
      },
      {
        type: 'p',
        text: 'Here is the order we work in on a residential build pad, and what we are looking for at each step.',
      },
      { type: 'h2', text: '1. Walk the lot before anything moves' },
      {
        type: 'p',
        text: 'Before a machine ever rolls off the trailer we want to know where the water goes. Stand on the property after a hard rain if you can. Note the low corners, the ditch line, the road elevation, and where the neighbors drain. Your pad has to sit high enough to shed water without pushing that water onto somebody else — that is a conversation worth having up front, not after the dirt is spread.',
      },
      { type: 'h2', text: '2. Strip the topsoil and organics' },
      {
        type: 'p',
        text: 'Topsoil is great for a garden and terrible under a slab. It is full of roots and organic material that will keep decomposing and settling for years. We strip it off the pad footprint and stockpile it — it gets reused for finish grading and yard work once the structure is up. Stumps, root balls and any buried debris come out at this stage too.',
      },
      { type: 'h2', text: '3. Build the pad in lifts and compact each one' },
      {
        type: 'p',
        text: 'This is the step people try to skip and it is the one that matters most. Fill dirt goes down in lifts — think 6 to 8 inches at a time — and each lift gets compacted before the next one goes on top. Dumping three feet of dirt and rolling the top of it gives you a firm crust over soft fill. That pad will settle.',
      },
      {
        type: 'p',
        text: 'Moisture content matters just as much as the roller. Clay that is too wet will pump and rut instead of compacting. Clay that is bone dry will not bind. Part of the job is knowing when to work it and when to let it dry a day.',
      },
      { type: 'h2', text: '4. Set your elevation with a laser, not an eyeball' },
      {
        type: 'p',
        text: 'We shoot grade with laser and GPS equipment on every pad. You want the finished pad high enough above the surrounding grade that water runs away from the structure on all four sides, with the fall carried out to a ditch, swale or culvert. An inch of slope in the wrong direction is an inch of water against your foundation for the life of the building.',
      },
      {
        type: 'list',
        items: [
          'Pad crown set above the surrounding natural grade so water sheds away',
          'Positive fall carried away from all four sides of the structure',
          'Driveway and culvert tied into the same drainage plan, not treated as an afterthought',
          'Silt fence or erosion control in place before the first rain',
        ],
      },
      { type: 'h2', text: '5. Let it sit if the schedule allows' },
      {
        type: 'p',
        text: 'A pad that gets a few weeks and a couple of good rains before the slab is poured tells you a lot. If it is going to settle unevenly, you would much rather find that out with a machine still on site than after the concrete truck leaves.',
      },
      {
        type: 'quote',
        text: 'A good pad is invisible. Nobody compliments you on it — they just never have a problem.',
      },
      { type: 'h2', text: 'Before you break ground' },
      {
        type: 'p',
        text: 'Check with your parish or city permit office on what is required for your specific lot, and call 811 to have utilities located before any digging starts. Requirements vary by jurisdiction and by whether you are in a flood zone, so get that answer in writing before dirt moves.',
      },
      {
        type: 'p',
        text: 'If you have a lot in the Lake Charles area and you are not sure what it needs, call or text us at 318-452-7653. We will come look at it and tell you straight.',
      },
    ],
  },
  {
    slug: 'land-clearing-what-to-expect',
    title: 'Land Clearing: What Actually Happens When We Clear Your Lot',
    excerpt:
      'Forestry mulching, grubbing, burning, hauling — the options are not interchangeable. A plain-English guide to the methods, what each one costs you in time, and how to pick.',
    date: '2026-06-20',
    author: 'Upward Development Team',
    category: 'Land Clearing',
    readTime: '5 min read',
    image: '/landclearing-aerial.jpg',
    imageAlt: 'Aerial view of a residential lot being cleared',
    body: [
      {
        type: 'p',
        text: 'Most people call us and say "I need my lot cleared." That can mean five different jobs depending on what you plan to do with the land afterward. Clearing for a house pad is not the same as opening up a pasture, and neither one is the same as knocking back underbrush along a fence line.',
      },
      { type: 'h2', text: 'Forestry mulching' },
      {
        type: 'p',
        text: 'A mulching head grinds standing brush and small-to-medium trees into chips and leaves them on the ground as a mulch layer. Nothing gets hauled off, so there is no burn pile and no dump fees. The mulch layer helps with erosion and breaks down over time.',
      },
      {
        type: 'p',
        text: 'This is the right call for underbrush, overgrown lots, trail cutting, and anywhere you want the land opened up without disturbing the soil. It is not the right call if you need bare dirt to build on — the stumps and root systems are still in the ground.',
      },
      { type: 'h2', text: 'Grubbing and full clearing' },
      {
        type: 'p',
        text: 'When something is getting built, the roots have to come out. Grubbing pulls stumps and root balls out of the ground so you have clean soil to build a pad on. It moves more dirt, leaves more mess to deal with, and takes longer — but you cannot skip it if a structure is going on that spot.',
      },
      { type: 'h2', text: 'Stump grinding' },
      {
        type: 'p',
        text: 'For a handful of stumps in an otherwise finished yard, grinding is usually cheaper and far less disruptive than digging them out. The grinder takes the stump down below grade, you fill the hole with dirt, and the lawn recovers.',
      },
      { type: 'h2', text: 'What to think about before you call' },
      {
        type: 'list',
        items: [
          'What is the land going to be used for — building, pasture, recreation, or resale?',
          'Are there trees you want to keep? Mark them before we get there.',
          'Where do property lines actually run? A survey saves arguments later.',
          'Any wetlands, drainage servitudes, or utility easements on the property?',
          'Is there equipment access, or do we need to open a path in first?',
        ],
      },
      {
        type: 'image',
        src: '/dirtwork-skidsteer.jpg',
        alt: 'Skid steer with clearing attachment working a wooded lot',
      },
      { type: 'h2', text: 'A word on burning and permits' },
      {
        type: 'p',
        text: 'Burn rules, wetland determinations and clearing permits vary by parish and can change with conditions — outdoor burning in particular is often restricted seasonally. Check with your parish office and the state before you plan around a burn pile. We are happy to help you figure out who to call.',
      },
      {
        type: 'p',
        text: 'Not sure which method your property needs? Send us pictures or let us come walk it. Most of the time we can tell you in ten minutes what makes sense and what would be a waste of your money.',
      },
    ],
  },
  {
    slug: 'steel-building-vs-stick-built',
    title: 'Steel Building vs. Stick-Built: How to Decide',
    excerpt:
      'Shops, barndominiums, warehouses and retail — steel is not automatically the answer, but for a lot of Louisiana projects it is. Here is the honest comparison.',
    date: '2026-05-28',
    author: 'Lucas LaCour',
    category: 'Steel Buildings',
    readTime: '6 min read',
    image: '/steel-body.jpg',
    imageAlt: 'Red iron steel building frame going up on a job site',
    body: [
      {
        type: 'p',
        text: 'We build both. So when somebody asks whether they should go steel or conventional framing, we are not trying to steer them anywhere — we just want them to pick the one that fits what they are actually doing with the building.',
      },
      { type: 'h2', text: 'Where steel wins' },
      {
        type: 'list',
        items: [
          'Clear span. A steel frame gets you a wide open interior with no posts in the middle. If you are parking equipment, running a shop, or need flexible floor space, that is hard to beat.',
          'Wind performance. An engineered steel frame is designed to a specified wind load, which matters on this side of the state.',
          'Pests and rot. Termites do not eat red iron, and steel does not rot when it gets wet.',
          'Speed on big footprints. Once the pad is right and the steel is on site, a shell goes up fast compared to framing the same square footage.',
          'Expandability. Adding bays to an end wall later is a normal, planned-for operation on a steel building.',
        ],
      },
      { type: 'h2', text: 'Where conventional framing wins' },
      {
        type: 'list',
        items: [
          'Small footprints. On a modest building, the engineering and freight on a steel package can outweigh the savings.',
          'Complex rooflines and custom architectural detail. Wood is simply easier to shape.',
          'Interior finish-out flexibility. Running mechanical, plumbing and finishes through a stud wall is straightforward and every sub in town knows how to do it.',
        ],
      },
      {
        type: 'image',
        src: '/steel-body-2.jpg',
        alt: 'Completed steel building exterior',
      },
      { type: 'h2', text: 'The thing people underestimate: the slab' },
      {
        type: 'p',
        text: 'A steel building concentrates its load into the anchor bolts at each column. The foundation and pad have to be engineered for that. We have been called out to plenty of buildings where somebody saved money on the dirt work and paid for it in the slab. Whichever way you build, the ground under it decides how long it lasts.',
      },
      { type: 'h2', text: 'Barndominiums' },
      {
        type: 'p',
        text: 'The steel-shell-with-living-space combination is popular right now and it can work well. Just plan it as a house from day one — insulation strategy, moisture control, HVAC sizing and the interior wall layout all need to be settled before the shell goes up, not improvised after.',
      },
      {
        type: 'quote',
        text: 'We are licensed and insured to build everything from chicken coops to shopping centers. The right answer depends on the building, not on what we would rather be doing.',
      },
      {
        type: 'p',
        text: 'Tell us what you want to put in the building and how long you want to own it, and we will tell you which way we would build it if it were ours.',
      },
    ],
  },
  {
    slug: 'building-for-hurricane-season',
    title: 'Building for Hurricane Season: What "Louisiana Tough" Actually Means',
    excerpt:
      'Laura and Delta rewrote a lot of assumptions in this area. What we changed about how we build, and the details that separate a structure that rides out a storm from one that does not.',
    date: '2026-05-05',
    author: 'Lucas LaCour',
    category: 'Super Homes',
    readTime: '7 min read',
    image: '/super-body.jpg',
    imageAlt: 'Steel reinforced Super Home under construction',
    body: [
      {
        type: 'p',
        text: 'Everybody in Southwest Louisiana has a storm story. Around here, building for wind is not a premium upgrade — it is the baseline expectation, and it shows up in a hundred small decisions rather than one big one.',
      },
      { type: 'h2', text: 'The load path is the whole ballgame' },
      {
        type: 'p',
        text: 'Wind uplift tries to peel a building apart from the top down. What resists it is a continuous connection from the roof, through the walls, into the foundation. Every link in that chain has to be intentional. A strong roof connected to a weak wall connection is just a well-built kite.',
      },
      {
        type: 'list',
        items: [
          'Roof-to-wall connections rated for the design wind load, not just toe-nailed',
          'Wall-to-foundation anchorage sized and placed per the engineering, and actually inspected before the pour covers it',
          'Sheathing fastener pattern followed exactly — nail spacing is engineering, not a suggestion',
          'Garage doors and large openings rated appropriately; a failed garage door pressurizes the building from the inside',
        ],
      },
      { type: 'h2', text: 'Water gets in where wind gets in' },
      {
        type: 'p',
        text: 'Most of the damage people deal with after a storm is water damage that started with a small wind failure. Sealed roof decks, properly lapped flashing, and correctly installed window and door details do more for you over a thirty-year ownership than almost anything else on the list.',
      },
      { type: 'h2', text: 'Elevation and drainage' },
      {
        type: 'p',
        text: 'Wind gets the headlines and water does the damage. Where the structure sits relative to the surrounding grade and the flood zone is a decision you make once, at the very beginning, and cannot easily change later. Get your flood zone determination and elevation requirements confirmed with your parish and your insurer before you finalize the pad height.',
      },
      {
        type: 'image',
        src: '/super-hero-2.jpg',
        alt: 'Aerial view of a steel frame anchored to a finished slab',
      },
      { type: 'h2', text: 'Why we build Super Homes' },
      {
        type: 'p',
        text: 'Our Super Homes are steel reinforced — commercial strength with residential beauty. The idea is simple: build a house with the structural approach normally reserved for commercial buildings, and finish it so it still looks and lives like a home. You are not trading comfort for durability.',
      },
      {
        type: 'quote',
        text: 'You do not want to think about your structure during a storm. That peace of mind is the product.',
      },
      {
        type: 'p',
        text: 'Specific wind-load requirements depend on your exact location and the code edition your jurisdiction has adopted. We work those numbers with the engineer for every project — ask us and we will walk you through what applies to your lot.',
      },
    ],
  },
  {
    slug: 'questions-to-ask-a-contractor',
    title: '7 Questions to Ask Any Contractor Before You Sign',
    excerpt:
      'The uncomfortable questions are the ones that save you money. Ask these seven of anybody bidding your job — including us.',
    date: '2026-04-11',
    author: 'Faith LaCour',
    category: 'Advice',
    readTime: '5 min read',
    image: '/dirtwork-people.jpg',
    imageAlt: 'Upward Development crew members on a job site',
    body: [
      {
        type: 'p',
        text: 'We answer phone calls, text messages and emails. Believe it or not, that sets us apart in this industry — and it is a decent hint about what to look for when you are choosing who to hire. Here are the questions we would want a homeowner to ask us.',
      },
      { type: 'h2', text: '1. Are you licensed and insured, and can I see the certificates?' },
      {
        type: 'p',
        text: 'Not "yes." The documents. General liability at minimum, workers comp if there will be a crew on your property. Verify the license status with the state licensing board rather than taking a photo of a card at face value.',
      },
      { type: 'h2', text: '2. Who is actually going to be on my property?' },
      {
        type: 'p',
        text: 'Is it the company crew or subs? Who is the point of contact when something comes up mid-job? There is nothing wrong with subs — plenty of good work gets done that way — but you should know who is showing up and who is responsible for them.',
      },
      { type: 'h2', text: '3. What is included, and just as importantly, what is not?' },
      {
        type: 'p',
        text: 'Cheap bids are usually cheap because something got left out. Haul-off, permits, utility locates, erosion control, final grade, cleanup — get the exclusions written down. A bid that lists what it excludes is a good sign, not a red flag.',
      },
      { type: 'h2', text: '4. How do change orders work?' },
      {
        type: 'p',
        text: 'On dirt and construction jobs, conditions change. You hit rock, or the ground is wetter than anybody expected. The question is not whether changes happen but whether you find out about the cost before or after the work is done. Before we make any change to the original plan, the customer knows what it costs.',
      },
      { type: 'h2', text: '5. What does the payment schedule look like?' },
      {
        type: 'p',
        text: 'Deposits are normal. A demand for most of the money up front is not. Tie payments to milestones you can actually see completed.',
      },
      { type: 'h2', text: '6. What is the timeline, and what would move it?' },
      {
        type: 'p',
        text: 'Weather moves dirt schedules in Louisiana. Material lead times move steel schedules. An honest contractor will tell you what the realistic window is and what the specific risks to it are, instead of promising a date they already know they cannot hold.',
      },
      { type: 'h2', text: '7. Can I talk to your last three customers?' },
      {
        type: 'p',
        text: 'Not the three best jobs from five years ago — the last three. Ask those customers one question in particular: what went wrong, and how did they handle it? Every job has something. How a contractor handles the something is the whole story.',
      },
      {
        type: 'quote',
        text: 'Communication. Quality. Value. In that order, because the first one is what makes the other two possible.',
      },
      {
        type: 'p',
        text: 'Ask us all seven. We would rather you hire us with your eyes open.',
      },
    ],
  },
  {
    slug: 'buying-raw-land-in-louisiana',
    title: 'Buying Raw Land in Louisiana: What to Check Before You Close',
    excerpt:
      'A cheap piece of land can get expensive fast. Access, drainage, utilities and servitudes — the due diligence list we run before we buy anything ourselves.',
    date: '2026-03-17',
    author: 'Lucas LaCour',
    category: 'Real Estate',
    readTime: '6 min read',
    image: '/real-estate-hero.jpg',
    imageAlt: 'Aerial view of a Louisiana home sitting on open acreage',
    body: [
      {
        type: 'p',
        text: 'We buy and invest in land and homes across Louisiana, so we have run this checklist on a lot of properties — including several we walked away from. The listing price is rarely what the land actually costs you.',
      },
      { type: 'h2', text: 'Legal access' },
      {
        type: 'p',
        text: 'Does the parcel touch a public road, or do you get there across somebody else\'s property? "The seller says the neighbor does not mind" is not access. A recorded servitude is access. This is the single most common way a cheap parcel turns out not to be a bargain.',
      },
      { type: 'h2', text: 'Drainage and flood zone' },
      {
        type: 'p',
        text: 'Pull the flood zone designation and look at where the water goes. Then go stand on the property after a heavy rain — that will teach you things no map will. Land that holds water can often still be built on, but the fill dirt, culverts and elevation work need to be in your budget from day one, not discovered later.',
      },
      { type: 'h2', text: 'Utilities' },
      {
        type: 'p',
        text: 'Find out what is actually at the road and what it costs to bring in what is not.',
      },
      {
        type: 'list',
        items: [
          'Power — how far is the nearest service, and what does the utility charge to extend it?',
          'Water — municipal tap, rural water system, or a well?',
          'Sewer — municipal, or does the soil support a septic system?',
          'Internet — matters more than people admit until they move in',
        ],
      },
      { type: 'h2', text: 'Soil and site conditions' },
      {
        type: 'p',
        text: 'Heavy clay, sand, and organic soils all behave differently under a foundation. On anything you plan to build on seriously, a geotechnical report is cheap insurance compared to a foundation problem.',
      },
      { type: 'h2', text: 'Title, servitudes and mineral rights' },
      {
        type: 'p',
        text: 'Louisiana is a civil law state and land ownership here has its own vocabulary and its own rules — servitudes, usufruct, and the treatment of mineral rights all work differently than in most of the country. Use a Louisiana real estate attorney and a title examination. Do not rely on general advice you found online, including this article, for the legal side of a specific transaction.',
      },
      { type: 'h2', text: 'Restrictions on use' },
      {
        type: 'p',
        text: 'Zoning, subdivision restrictions, wetland determinations, and any recorded covenants all limit what you can put on the property. Confirm your intended use is permitted before you close, not after.',
      },
      {
        type: 'quote',
        text: 'The best deal we ever made was a piece of land we did not buy.',
      },
      {
        type: 'p',
        text: 'If you have land in Louisiana you are looking to sell — or a parcel you are thinking about buying and want an honest read on what it would take to develop — call or text 318-452-7653.',
      },
    ],
  },
];

export const blogCategories = Array.from(new Set(blogPosts.map(p => p.category)));

/** Posts newest-first. */
export const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

export const getPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
