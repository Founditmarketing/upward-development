import type { ServiceArea } from './types';

export const vinton: ServiceArea = {
  slug: 'vinton-la',
  name: 'Vinton',
  parish: 'Calcasieu Parish',
  hubSummary:
    'A small town in the western end of the parish near the Texas line, where properties are often larger and road frontage drives the first decision.',
  emphasis: 'Rural access, driveways, culverts and homesite clearing',

  title: 'Driveways, Culverts & Land Clearing in Vinton, LA',
  metaDescription:
    'Driveway construction, culvert installation, land clearing and building pads for rural property in Vinton, Louisiana. Family-run out of Lake Charles, licensed and insured. Call or text 318-452-7653.',

  h1: 'Getting Rural Property in Vinton Ready to Use',
  heroLead:
    'Out at the western end of Calcasieu Parish, near the Texas line, the first question on most properties is simply how you get onto the land and across the ditch.',
  heroImage: '/dirtwork-people.jpg',
  heroImageAlt: 'Two Upward Development crew members talking on a job site',

  sections: [
    {
      type: 'checklist',
      heading: 'Before we come out, it helps to know',
      intro:
        'None of this is required — call us either way. But having answers speeds things up and makes the first visit more useful.',
      items: [
        'Where the property lines actually run, and whether there is a survey',
        'Whether the parcel has frontage on a public road or you reach it across someone else\'s land',
        'What the land is going to be used for — a homesite, a shop, pasture, or resale',
        'Whether there is an existing culvert at the entrance, and what shape it is in',
        'Any wet areas, servitudes or utility easements you already know about',
      ],
    },
    {
      type: 'prose',
      heading: 'Access first, everything else after',
      paragraphs: [
        'Vinton is a town of roughly 3,400 people with US 90 running through the middle of it and I-10 along the southern edge. Get off those two roads and the parcels get bigger and the frontage gets rougher.',
        'On a rural tract, the driveway and the crossing at the ditch are not finishing touches — they are the first thing that has to work. Until a loaded truck can get onto the property without sinking or tearing up the shoulder, nothing else can be delivered, poured or built. That is usually where we start.',
      ],
    },
    {
      type: 'scenario',
      heading: 'What putting in a drive and culvert generally takes',
      label: 'General walkthrough — not a specific customer project',
      paragraphs: [
        'A new entrance off a rural road is a small job that goes badly more often than it should, usually because the culvert was treated as an afterthought.',
      ],
      bullets: [
        'Look at the ditch first — how deep it runs, which way water moves, and how much flow it carries in a hard rain',
        'Size the pipe to the ditch, not to the price. An undersized culvert dams the ditch and the problem becomes yours and your neighbors\'',
        'Set the pipe at the right elevation and slope so it drains rather than holding water and silting up',
        'Build a base under the drive that will carry loaded vehicles, then surface it',
        'Shape the approach so it meets the road cleanly and does not scrape a trailer',
        'Confirm the requirements with the parish or the road authority before cutting into a public right-of-way, since those rules are theirs to state and not ours to assume',
      ],
    },
    {
      type: 'services',
      heading: 'What else we handle out here',
      items: [
        {
          title: 'Land clearing on larger tracts',
          body: 'Underbrush removal and forestry mulching where you want the land opened up, or full clearing with roots pulled where something is going to be built.',
          to: '/services/land-clearing',
          linkLabel: 'Our land clearing services',
        },
        {
          title: 'Homesite and building pads',
          body: 'Fill placed and compacted in lifts, elevation set with laser and GPS grade equipment, and drainage carried away from the structure on all four sides.',
          to: '/services/dirt-work',
          linkLabel: 'How we build a pad',
        },
        {
          title: 'Ponds and water management',
          body: 'New ponds, reshaping existing ones, and moving water where you want it rather than where it currently goes.',
          to: '/services/dirt-work',
          linkLabel: 'Dirt work and excavation',
        },
        {
          title: 'Shops and steel buildings',
          body: 'Engineered steel, all-welded or bolt-up, sized to what you need to park or work inside.',
          to: '/services/steel-buildings',
          linkLabel: 'Steel building construction',
        },
      ],
    },
    {
      type: 'nearby',
      heading: 'Between here and our yard',
      intro: 'Heading back east from Vinton:',
      links: [
        { label: 'Carlyss, east along I-10', to: '/service-areas/carlyss-la' },
        { label: 'DeQuincy, north in the same parish', to: '/service-areas/dequincy-la' },
      ],
    },
    {
      type: 'faq',
      heading: 'Fair questions before you call',
      items: [
        {
          q: 'Is Vinton too far out for you?',
          a: 'No — it is within the territory we work, and we would not have built this page otherwise. What is fair to say is that travel distance is part of any honest estimate, so a very small job a long way out may price differently than the same job closer to Lake Charles. We will tell you that up front rather than padding the number quietly.',
        },
        {
          q: 'How do I know what size culvert I need?',
          a: 'That comes from the ditch — its depth, its slope and how much water it has to carry. It is not a guess you should make from a catalog. We will look at it, and where the crossing ties into a public right-of-way, the road authority has requirements you will want confirmed before anything goes in.',
        },
        {
          q: 'Can you clear a homesite out of a wooded tract?',
          a: 'Yes, and it is one of our favorite kinds of work. The important part is deciding early how big the cleared area needs to be — big enough for the house, the drive, the septic field if there is one, and enough working room around the structure. Clearing too tight is a common regret.',
        },
        {
          q: 'What if I only want part of the property cleared?',
          a: 'That is normal. Mark what you want kept, or walk it with us and we will flag it together. Once it is down it is down, so we would rather spend the time agreeing on boundaries first.',
        },
        {
          q: 'Do you buy rural land?',
          a: 'We do. We have been in the real estate business for more than 25 years and we are actively looking for acquisition opportunities, including land. If you have property you are thinking about selling, that is a separate conversation we are happy to have.',
        },
      ],
    },
  ],

  cta: {
    heading: 'Start with the entrance',
    body: 'If you cannot get on the property, nothing else matters yet. Call or text 318-452-7653 and tell us where it is and what you are hoping to do with it.',
  },

  sources: [
    {
      label: 'Vinton, Louisiana — population and highway access (2020 Census figures)',
      url: 'https://en.wikipedia.org/wiki/Vinton,_Louisiana',
    },
  ],
};
