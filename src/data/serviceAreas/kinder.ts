import type { ServiceArea } from './types';

export const kinder: ServiceArea = {
  slug: 'kinder-la',
  name: 'Kinder',
  parish: 'Allen Parish',
  hubSummary:
    'A small Allen Parish town at the junction of US 165 and US 190 that draws far more visitors than its population suggests.',
  emphasis: 'Site work for income-producing property and rural acreage',

  title: 'Land Development and Site Work in Kinder, LA',
  metaDescription:
    'Land clearing, site preparation, pads, driveways and steel buildings around Kinder, Louisiana — including site work for rental and visitor-oriented property. Licensed and insured. Call or text 318-452-7653.',

  h1: 'Preparing Property in Kinder and Allen Parish',
  heroLead:
    'Kinder is a town of about 2,200 at the junction of US 165 and US 190, and it hosts Coushatta Casino Resort — the largest casino resort in Louisiana. That combination creates property opportunities a town this size would not normally have.',
  heroImage: '/steel-body-2.jpg',
  heroImageAlt: 'Completed steel building with roll-up doors on a finished site',

  sections: [
    {
      type: 'prose',
      heading: 'A small town with outsized traffic',
      paragraphs: [
        'Kinder was incorporated in 1911 and grew up around timber, with early settlers running sawmills and shipping logs out by rail. Today US 165 and US 190 cross at its historic center, and the resort brings a steady flow of people through a town of a couple thousand residents.',
        'For property owners, that changes the arithmetic. Land near a steady visitor draw can support uses that would not pencil out in an equivalent rural town — and the thing standing between raw acreage and any of those uses is almost always site work.',
      ],
    },
    {
      type: 'services',
      heading: 'What we can do with a piece of Allen Parish land',
      intro:
        'We build for our own account as well as for customers, so we tend to think about property in terms of what it could become rather than just the task in front of us.',
      items: [
        {
          title: 'Site preparation for income property',
          body: 'We have bought and built single-family rentals, RV parks and short-term rentals ourselves, so pads, drives, drainage and utility trenching for that kind of development is familiar ground rather than a first attempt.',
          to: '/services/real-estate',
          linkLabel: 'About our real estate side',
        },
        {
          title: 'Clearing and opening up acreage',
          body: 'Underbrush removal, forestry mulching and full clearing where roots have to come out. Turning a wooded or overgrown tract into something you can actually put a plan on.',
          to: '/services/land-clearing',
          linkLabel: 'Land clearing',
        },
        {
          title: 'Pads, drives and access',
          body: 'Compacted building pads set at the right elevation, entrances that handle traffic, and culverts sized so the ditch keeps doing its job.',
          to: '/services/dirt-work',
          linkLabel: 'Dirt work and site prep',
        },
        {
          title: 'Steel buildings',
          body: 'Engineered, wood-free, all-welded or bolt-up — from a storage building to a commercial facility. Clear-span interiors when you need the floor open.',
          to: '/services/steel-buildings',
          linkLabel: 'Steel building construction',
        },
      ],
    },
    {
      type: 'scenario',
      heading: 'What site work for a multi-unit or RV site generally involves',
      label: 'General walkthrough — not a specific customer project',
      paragraphs: [
        'Developing land for more than one unit is a different exercise from preparing a single homesite. The pieces that get underestimated are almost always the ones underground or under the surface.',
      ],
      bullets: [
        'Lay out the whole site before moving dirt — pads, roads, parking and utility runs interact, and fixing the order later is expensive',
        'Get the drainage plan settled first. More impervious surface means more runoff, and it has to go somewhere that is not your neighbor',
        'Build internal roads on a proper base. Traffic that turns and reverses repeatedly is harder on a surface than through traffic',
        'Trench utilities before the surfaces go down, not after',
        'Set pad elevations relative to the roads so water never runs toward a unit',
        'Confirm what Allen Parish requires for the specific use before committing to a layout — that is the parish\'s answer to give, not ours',
      ],
    },
    {
      type: 'faq',
      heading: 'Questions about working in Allen Parish',
      items: [
        {
          q: 'Do you take on projects this far from Lake Charles?',
          a: 'Yes, within reason. Allen Parish is outside our home parish, so travel is a genuine cost and the scope needs to justify it. A development-sized project fits well. A one-hour job does not, and we will tell you that honestly rather than quietly building it into a number.',
        },
        {
          q: 'Would you look at land I am considering buying?',
          a: 'Gladly. We have been in real estate for more than 25 years and we are actively looking for property ourselves, so evaluating what a tract needs to become usable is something we do regularly. Tell us it is a pre-purchase look so we come prepared for that conversation.',
        },
        {
          q: 'Can you handle a project in phases?',
          a: 'Often that is the smart way to do it — clear and rough-grade now, build later, expand after that. Phasing works best when the whole plan exists from the start even if only part gets built, so the early work does not have to be undone.',
        },
        {
          q: 'Do you buy property in this area?',
          a: 'We are always looking at land and homes, including income-producing property. If you have something you would consider selling, that is worth a separate conversation.',
        },
        {
          q: 'How do you price travel on a job out here?',
          a: 'It is part of the estimate and we will point to it rather than hide it. If several pieces of work can be grouped into one mobilization, that generally gets you the best value.',
        },
      ],
    },
    {
      type: 'nearby',
      heading: 'Getting here from our side of the region',
      intro: 'US 165 runs south from Kinder toward the I-10 corridor:',
      links: [
        { label: 'Iowa, south on US 165', to: '/service-areas/iowa-la' },
        { label: 'DeQuincy, 36 miles west on LA 12', to: '/service-areas/dequincy-la' },
      ],
    },
  ],

  cta: {
    heading: 'Have land and an idea for it?',
    body: 'Those two things plus a site visit is usually enough to get to a real number. Call or text 318-452-7653, or email lucas@upwarddevelopment.us.',
  },

  sources: [
    {
      label: 'Kinder, Louisiana — incorporation, population, highways, timber history and Coushatta Casino Resort (2020 Census figures)',
      url: 'https://en.wikipedia.org/wiki/Kinder,_Louisiana',
    },
  ],
};
