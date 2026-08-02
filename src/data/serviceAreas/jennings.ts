import type { ServiceArea } from './types';

export const jennings: ServiceArea = {
  slug: 'jennings-la',
  name: 'Jennings',
  parish: 'Jefferson Davis Parish',
  hubSummary:
    'The Jefferson Davis Parish seat, east along I-10 in rice-farming country, where field work and town projects both come up.',
  emphasis: 'Agricultural building pads and seasonal scheduling',

  title: 'Site Prep, Pads and Clearing in Jennings, Louisiana',
  metaDescription:
    'Building pads, land clearing, culverts, drainage site work and steel buildings for farm, commercial and residential property in Jennings, Louisiana. Licensed and insured. Call or text 318-452-7653.',

  h1: 'Dirt Work and Building Pads in Jennings, LA',
  heroLead:
    'Jennings is the Jefferson Davis Parish seat, east of us along I-10 in farming country. Working out here means fitting around a calendar that is set by the land, not by us.',
  heroImage: '/dirtwork-body.jpg',
  heroImageAlt: 'Excavator moving dirt on a prepared job site',

  sections: [
    {
      type: 'prose',
      heading: 'A town built on rice and oil',
      paragraphs: [
        'Jennings has roughly 9,800 residents and a history that runs through both agriculture and energy. Midwestern farmers settled the area and grew rice, cotton, sweet potatoes and corn. Then in 1901 the first producing oil well in Louisiana came in here, which is why the city calls itself the Cradle of Louisiana Oil.',
        'Both of those still shape the property here. There is a working town with commercial and residential lots, and there is a great deal of farmland around it — and the two need different things from a dirt contractor.',
      ],
    },
    {
      type: 'checklist',
      heading: 'Timing matters more out here',
      intro:
        'On agricultural property, when we work is often as important as what we do. Things worth telling us on the first call:',
      items: [
        'What is in the ground now and when it comes off',
        'Which field roads have to stay passable while we are working',
        'Whether equipment can cross a section, or has to go around it',
        'Any irrigation infrastructure we need to keep clear of',
        'Deadlines tied to a season rather than to a calendar date',
      ],
    },
    {
      type: 'services',
      heading: 'Where we are most useful in this area',
      items: [
        {
          title: 'Pads for equipment barns, shops and grain storage',
          body: 'A building that holds heavy equipment needs a pad built for the load it will carry, not just a flat spot. Fill placed in compacted lifts, elevation set with laser and GPS grade, and water carried away from the structure.',
          to: '/services/dirt-work',
          linkLabel: 'How we build pads',
        },
        {
          title: 'Clear-span steel buildings',
          body: 'No posts in the middle of the floor, which is usually what you want if machinery has to move around inside. Engineered, wood-free, all-welded or bolt-up.',
          to: '/services/steel-buildings',
          linkLabel: 'Steel buildings',
        },
        {
          title: 'Field access, farm roads and culverts',
          body: 'Entrances and crossings built to take loaded trucks and equipment, with pipe sized to keep the ditch working rather than damming it.',
          to: '/services/dirt-work',
          linkLabel: 'Access and culvert work',
        },
        {
          title: 'Clearing and debris removal',
          body: 'Fence lines, overgrown corners, old structures and storm debris. Sometimes reclaiming a section is a matter of getting the material off it.',
          to: '/services/land-clearing',
          linkLabel: 'Clearing services',
        },
        {
          title: 'Residential and commercial site work in town',
          body: 'House pads, driveways, yard grading and drainage on ordinary town lots — the same work we do closer to home.',
          to: '/services/dirt-work',
          linkLabel: 'Dirt work and site prep',
        },
      ],
    },
    {
      type: 'scenario',
      heading: 'What goes into a pad for an equipment barn',
      label: 'General walkthrough — not a specific customer project',
      paragraphs: [
        'People sometimes assume a barn pad is a lesser job than a house pad. It is often the harder of the two, because of what drives across it.',
      ],
      bullets: [
        'Understand the loads. A tractor, a loaded trailer or a grain truck concentrates far more weight than a house does, and repeatedly',
        'Strip organics off the footprint — the same rule as any pad. Topsoil under a slab keeps settling',
        'Build up in compacted lifts, with moisture content watched as closely as the roller',
        'Set the elevation high enough that water never runs toward the door, which is where it always tries to go',
        'Plan the approach apron, because the transition between the drive and the slab is where damage starts',
        'Think about where equipment turns. Turning loads are harder on a surface than straight travel',
      ],
    },
    {
      type: 'nearby',
      heading: 'West and north of here',
      intro: 'Other communities on this side of our territory:',
      links: [
        { label: 'Iowa, west along I-10', to: '/service-areas/iowa-la' },
        { label: 'Kinder, north on US 165', to: '/service-areas/kinder-la' },
      ],
    },
    {
      type: 'faq',
      heading: 'Questions we hear in Jefferson Davis Parish',
      items: [
        {
          q: 'You are based in Lake Charles — is Jennings a normal service area for you?',
          a: 'Yes, it is within the territory we cover. As with anywhere outside Calcasieu Parish, travel is a real factor in pricing and we will be open about it. Grouping several jobs into one trip is usually the best way to get value out of hiring us at this distance.',
        },
        {
          q: 'Can you work on ground that has just been harvested?',
          a: 'Often, and sometimes that is the ideal window. The limiting factor is usually moisture rather than the crop — saturated ground will rut and will not compact properly no matter how good the plan is. We would rather wait a few days than leave you with a mess.',
        },
        {
          q: 'Do you handle irrigation or water-control structures?',
          a: 'We do dirt work, excavation, ponds and culverts. Specialized agricultural water-control infrastructure may fall outside what we take on, and if your project needs something we are not the right company for, we will say so instead of learning on your property.',
        },
        {
          q: 'Who do I ask about local requirements?',
          a: 'Jefferson Davis Parish, and the City of Jennings if you are inside city limits. Requirements differ between parishes and we are not going to state a rule for a jurisdiction we have not verified it in.',
        },
        {
          q: 'Can I get an estimate without you driving out?',
          a: 'For something simple and well described, sometimes. For anything involving grade, drainage or access we would rather come look at it — a quote built on assumptions helps nobody, and change orders are worse than an honest number at the start.',
        },
      ],
    },
  ],

  cta: {
    heading: 'Tell us about the project and the timing',
    body: 'Both matter out here. Call or text 318-452-7653, or email lucas@upwarddevelopment.us with the location and what you need built or cleared.',
  },

  sources: [
    {
      label: 'Jennings, Louisiana — parish seat, population, agricultural settlement and 1901 oil discovery (2020 Census figures)',
      url: 'https://en.wikipedia.org/wiki/Jennings,_Louisiana',
    },
  ],
};
