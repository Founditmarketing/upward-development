import type { ServiceArea } from './types';

export const mossBluff: ServiceArea = {
  slug: 'moss-bluff-la',
  name: 'Moss Bluff',
  parish: 'Calcasieu Parish',
  hubSummary:
    'A large, spread-out community north of Lake Charles where most properties have room — and where pond, culvert and homesite work comes up often.',
  emphasis: 'Ponds, homesite preparation and access work on acreage',

  title: 'Land Clearing, Ponds & Homesite Prep in Moss Bluff, LA',
  metaDescription:
    'Pond excavation, house pads, driveways, culverts and land clearing for acreage owners in Moss Bluff, Louisiana. Family-run, licensed and insured, working out of Lake Charles. Call or text 318-452-7653.',

  h1: 'Dirt Work and Land Development in Moss Bluff, Louisiana',
  heroLead:
    'Moss Bluff properties tend to have room to work with. That opens up projects — a pond, a second drive, a cleared building site — that are harder to pull off on a small city lot.',
  heroImage: '/real-estate-hero.jpg',
  heroImageAlt: 'Aerial view of a single-story home sitting on open acreage',

  sections: [
    {
      type: 'prose',
      heading: 'A lot of land per household',
      paragraphs: [
        'Moss Bluff is not an incorporated city — it is a census-designated place directly north of Lake Charles, with about 12,500 residents spread across roughly 15 square miles of land area. That works out to a lot of ground per household compared with anywhere inside the city, and it shows up in the kind of calls we get.',
        'Instead of squeezing a machine down a side yard, the conversation here is usually about what to do with space you already have: the back three acres that grew up in brush, the low corner that never drains, the spot where you have always wanted a pond.',
      ],
    },
    {
      type: 'scenario',
      heading: 'Thinking about a pond?',
      label: 'General information about pond excavation — not a specific customer project',
      paragraphs: [
        'Ponds are one of the more satisfying things you can do with acreage, and one of the easiest to get wrong. A few things worth settling before you pick a spot:',
      ],
      bullets: [
        'Where the water will come from — runoff, groundwater, or both — and whether the site holds water once it is dug',
        'Where the spoil goes. A pond generates a great deal of dirt, and it is usually cheaper to use it on your own property than to haul it away. Sometimes it becomes the pad for a future building',
        'Bank slope, which affects safety, erosion and how easy the edge is to mow',
        'Access for the excavator, and whether we can reach the site without crossing ground you care about',
        'What happens to the overflow in a heavy rain, and whose property it heads toward',
      ],
    },
    {
      type: 'services',
      heading: 'Services that fit acreage',
      items: [
        {
          title: 'Pond excavation and reshaping',
          body: 'Digging a new pond, deepening one that has silted in, or reworking banks that have eroded. We have the excavators and pumps for it, and the spoil usually stays on your property doing something useful.',
          to: '/services/dirt-work',
          linkLabel: 'More on our dirt work',
        },
        {
          title: 'Clearing overgrown ground',
          body: 'Forestry mulching for underbrush you want knocked back, or full clearing with the roots pulled when something is going to be built. Two different jobs with two different price tags — we will tell you which one your plan actually needs.',
          to: '/services/land-clearing',
          linkLabel: 'Land clearing services',
        },
        {
          title: 'Building pads on open ground',
          body: 'A house, a barn or a shop set at the right elevation with drainage carried away on all four sides. Open sites let us build the pad properly instead of working around obstacles.',
          to: '/services/dirt-work',
          linkLabel: 'House pads and site prep',
        },
        {
          title: 'Driveways, culverts and access',
          body: 'Getting from the road to the back of the property without bogging down every time it rains, and crossing a ditch without blocking it. On longer drives, the base matters more than the surface.',
          to: '/services/dirt-work',
          linkLabel: 'Driveway and culvert installation',
        },
      ],
    },
    {
      type: 'testimonial',
      heading: 'From a customer who hired us to clear acreage',
      quote:
        "We hired Upward Development to clear a few acres and we're very satisfied with the work. Clear communication throughout and didn't leave until we gave them the ok. Looking forward to hiring them again!",
      author: 'Monica Miller',
      context: 'Review published on our site. We have not identified the property location.',
    },
    {
      type: 'faq',
      heading: 'Common questions about acreage work',
      items: [
        {
          q: 'How much land can you clear at once?',
          a: 'We are equipped to clear anything from a city lot up to a 100-acre pasture conversion, using everything from trench burners to specialized excavators. Size is rarely the limiting factor — access and what you want done with the material usually matter more.',
        },
        {
          q: 'Do I have to be there while you work?',
          a: 'No. Plenty of customers give us the plan and check in by phone. What we do want is a clear agreement on scope, boundaries and anything you want left alone before we start, plus a way to reach you if something unexpected turns up.',
        },
        {
          q: 'Can the dirt from a pond be used somewhere else on my property?',
          a: 'Often, yes, and that is usually the cheapest outcome for you. It can go toward a building pad, raising a low area or improving a drive. It has to be planned before we dig, though, because moving that dirt twice costs real money.',
        },
        {
          q: 'What is left behind after forestry mulching?',
          a: 'A layer of wood chips on the ground where the brush was. Nothing gets hauled off and there is no burn pile. The mulch helps hold soil in place and breaks down over time. What it does not do is remove stumps and roots, so it is not a substitute for full clearing if you plan to build.',
        },
        {
          q: 'Will you look at a property before I own it?',
          a: 'Yes. If you are weighing a purchase and want an opinion on what it would take to make the land usable, that is a reasonable thing to ask. We buy and develop property ourselves, so it is a conversation we have often.',
        },
        {
          q: 'Do I need approval for a pond or a culvert?',
          a: 'Requirements vary by property and Moss Bluff is unincorporated, so the parish is the place to ask rather than a city office. Confirm with Calcasieu Parish before finalizing anything. We are not going to tell you a rule we have not verified for your specific site.',
        },
      ],
    },
    {
      type: 'nearby',
      heading: 'Nearby areas we serve',
      intro: 'North Calcasieu Parish is a short drive for us. Related pages:',
      links: [
        { label: 'Lake Charles, directly south', to: '/service-areas/lake-charles-la' },
        { label: 'DeRidder, north on US 171', to: '/service-areas/deridder-la' },
      ],
    },
  ],

  cta: {
    heading: 'Come look at the back of my property',
    body: 'That is how most of these conversations start. Call or text 318-452-7653, or send the address and what you are picturing, and we will set up a time to walk it with you.',
  },

  sources: [
    {
      label: 'Moss Bluff, Louisiana — CDP status, population and land area (2020 Census figures)',
      url: 'https://en.wikipedia.org/wiki/Moss_Bluff,_Louisiana',
    },
  ],
};
