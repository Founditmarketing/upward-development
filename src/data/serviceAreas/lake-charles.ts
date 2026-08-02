import type { ServiceArea } from './types';

export const lakeCharles: ServiceArea = {
  slug: 'lake-charles-la',
  name: 'Lake Charles',
  parish: 'Calcasieu Parish',
  hubSummary:
    'Home. Our yard, our crew and our equipment are here, which means the shortest response times and the full range of what we do.',
  emphasis: 'Full service range in the home market, including Super Homes',

  title: 'Construction, Dirt Work & Steel Buildings in Lake Charles, LA',
  metaDescription:
    'Upward Development is based in Lake Charles at 1650 E Gauthier Rd. Dirt work, land clearing, house pads, culverts, steel buildings and storm-resistant Super Homes. Licensed and insured. Call or text 318-452-7653.',

  h1: 'Our Home Market: Construction and Land Development in Lake Charles',
  heroLead:
    'We are at 1650 E Gauthier Road. Everything we own — the excavators, the dozers, the trucks and the crew — starts its day in Lake Charles and comes back here at night.',
  heroImage: '/super-hero-2.jpg',
  heroImageAlt: 'Aerial view of a steel building frame anchored to a finished concrete slab',

  sections: [
    {
      type: 'prose',
      heading: 'Being local is a practical advantage, not a slogan',
      paragraphs: [
        'Everywhere else we work, we are driving in. Here, we are already here. That shows up in small ways that matter: coming to look at a property without turning it into an expedition, coming back when something needs a second look, and getting a machine moved without a day of planning.',
        'It also means our reputation is a local one. The people who hired us are neighbors, and in a market this size that is a strong incentive to do the work properly.',
      ],
    },
    {
      type: 'testimonial',
      heading: 'A commercial project, in the customer\'s own words',
      quote:
        'We used Upward Development to head up a million dollar addition to an event venue we own in south Lake Charles. They were wonderful to work with. They got there early and stayed late. Before they would make any changes to our original plans they made sure we knew the cost involved.',
      author: 'DeWanna Tarver',
      context: 'Review published on our site. Details are as described by the customer.',
    },
    {
      type: 'services',
      heading: 'Everything we do, available here',
      intro:
        'Other pages on this site focus on what a particular community tends to need. In Lake Charles the answer is all of it.',
      items: [
        {
          title: 'Dirt work and site preparation',
          body: 'House pads, commercial pads, driveways, culverts, ponds, grading and drainage work. Big excavators, little excavators, track loaders, tractors, dozers, lasers and pumps — the right machine for the job rather than the only one available.',
          to: '/services/dirt-work',
          linkLabel: 'Dirt work in detail',
        },
        {
          title: 'Land clearing',
          body: 'From a city lot up to a hundred-acre pasture conversion. Underbrush removal, forestry mulching, full clearing and stump grinding, with trench burners and specialized excavators for the material.',
          to: '/services/land-clearing',
          linkLabel: 'Land clearing',
        },
        {
          title: 'Steel buildings and commercial construction',
          body: 'Licensed and insured to build everything from chicken coops to shopping centers. Engineered steel, wood-free, all-welded or bolt-up.',
          to: '/services/steel-buildings',
          linkLabel: 'Steel buildings',
        },
        {
          title: 'Super Homes',
          body: 'Custom homes built on a steel mainframe that is far stronger than traditional wood framing. You cannot see the steel unless you look in the attic. These are not barndominiums — Zip sheathing, Hardie or brick exteriors, and the finish level of a custom house.',
          to: '/services/super-homes',
          linkLabel: 'See Super Homes',
        },
        {
          title: 'Real estate',
          body: 'We buy homes and land, including property in rough condition, and we are always looking at income-producing opportunities.',
          to: '/services/real-estate',
          linkLabel: 'Real estate investments',
        },
      ],
    },
    {
      type: 'prose',
      heading: 'Why we started building Super Homes',
      paragraphs: [
        'Hurricane Laura changed how a lot of people in this city think about what a house should be able to survive. Our Super Homes came directly out of that — steel-reinforced custom homes designed to withstand the toughest storms, engineered and built with a steel mainframe rather than conventional wood framing.',
        'The point was never to build something that looks industrial. It was to put commercial structural strength underneath a house that still lives and looks like a home.',
      ],
    },
    {
      type: 'process',
      heading: 'How we run a job',
      intro: 'The same five steps whether it is a driveway or a commercial building.',
      steps: [
        { title: 'You reach us', body: 'Phone, text or email — we answer all three. In this industry that is apparently unusual.' },
        { title: 'We come see it', body: 'Being ten minutes away means this is easy to arrange and easy to repeat.' },
        { title: 'We scope and estimate', body: 'Inclusions and exclusions both written down.' },
        { title: 'We schedule it', body: 'We keep a calendar and a plan and we discuss both with customers and crew.' },
        { title: 'We finish and walk it', body: 'Before a change gets made to the original plan, you know what it costs. Before we call it done, you have seen it.' },
      ],
    },
    {
      type: 'faq',
      heading: 'Questions we get here at home',
      items: [
        {
          q: 'How quickly can you come look at something?',
          a: 'Faster here than anywhere else we work, because there is no travel to plan around. Call or text 318-452-7653 and we will find a time.',
        },
        {
          q: 'Do you take small residential jobs?',
          a: 'Yes. A day of grading, one culvert, a pad for a storage building — those are real jobs. Not everything has to be a million dollar addition.',
        },
        {
          q: 'Can you give references?',
          a: 'References are available on request, and there are published customer reviews on our contact page you can read right now. For work of a particular type, ask and we will point you at the closest comparison.',
        },
        {
          q: 'Are you licensed and insured?',
          a: 'Yes, and we will provide current certificates on request rather than just asserting it. We got the licenses and insurance in the first place in order to build our own larger projects, and then found we enjoyed doing it for others.',
        },
        {
          q: 'Is a Super Home more expensive than conventional construction?',
          a: 'A steel mainframe and the component quality we build to are not the cheapest way to put up a house, and we would be misleading you to suggest otherwise. What we can do is walk you through what the difference buys and let you decide whether it is worth it for your situation.',
        },
        {
          q: 'Do you work outside Lake Charles?',
          a: 'Yes — across Southwest Louisiana, with the practical caveat that distance affects pricing on smaller jobs. Our service areas page lists the communities we cover most often.',
        },
      ],
    },
    {
      type: 'nearby',
      heading: 'Just outside the city',
      intro: 'The communities immediately around us:',
      links: [
        { label: 'Moss Bluff, directly north', to: '/service-areas/moss-bluff-la' },
        { label: 'Westlake, across the river', to: '/service-areas/westlake-la' },
        { label: 'Sulphur, nine miles west', to: '/service-areas/sulphur-la' },
      ],
    },
  ],

  cta: {
    heading: 'We are down the road',
    body: 'Call or text 318-452-7653, email lucas@upwarddevelopment.us, or send us the details through our contact form. All of our work is pointed upward for the glory of God, and we would be glad to look at yours.',
  },

  sources: [
    {
      label: 'Business address, phone, services and customer reviews — upwarddevelopment.us',
      url: 'https://www.upwarddevelopment.us/',
    },
  ],
};
