import type { ServiceArea } from './types';

export const westlake: ServiceArea = {
  slug: 'westlake-la',
  name: 'Westlake',
  parish: 'Calcasieu Parish',
  hubSummary:
    'A compact city on the west bank of the Calcasieu River, where commercial site work and contractor support are as common as residential jobs.',
  emphasis: 'Commercial site prep, trenching support and steel buildings',

  title: 'Commercial Site Prep & Steel Buildings in Westlake, LA',
  metaDescription:
    'Site preparation, grading, trenching support, debris removal and engineered steel buildings for commercial and residential property in Westlake, Louisiana. Licensed and insured. Call or text 318-452-7653.',

  h1: 'Site Preparation and Steel Building Construction in Westlake',
  heroLead:
    'Westlake sits on the west bank of the Calcasieu River, a bridge away from our Lake Charles base. We work for both homeowners and the businesses and trades operating around town.',
  heroImage: '/steel-body.jpg',
  heroImageAlt: 'Red iron steel building frame erected on a concrete slab',

  sections: [
    {
      type: 'services',
      heading: 'What we do in and around Westlake',
      intro:
        'Westlake is a small city by population — around 4,800 residents at the 2020 census — but it carries a heavier commercial and industrial footprint than that number suggests, with chemical plants and refineries throughout the surrounding area. Our work here splits between the two.',
      items: [
        {
          title: 'Commercial and light-industrial site prep',
          body: 'Clearing, filling, compacting and grading a site so a building, a yard or a laydown area can go on it. Includes getting the elevations right for drainage before anything permanent is poured.',
          to: '/services/dirt-work',
          linkLabel: 'Site preparation and dirt work',
        },
        {
          title: 'Engineered steel buildings',
          body: 'All-welded or bolt-up, wood-free, and designed to stand up to storms. We handle everything from a backyard workshop to a commercial facility, and doing the pad and the building together means one company owns the connection between them.',
          to: '/services/steel-buildings',
          linkLabel: 'Our steel building work',
        },
        {
          title: 'Trenching and underground work support',
          body: 'Digging and backfilling for utilities and conduit, and putting the ground back so you cannot tell where we were. We do this regularly for other trades.',
          to: '/services/dirt-work',
          linkLabel: 'Excavation and dirt work',
        },
        {
          title: 'Debris removal and site cleanup',
          body: 'Clearing out what is left after a demolition, a storm or a job that ran out of steam. Sometimes the first step toward using a property is simply getting the old material off it.',
          to: '/services/land-clearing',
          linkLabel: 'Clearing and removal services',
        },
      ],
    },
    {
      type: 'testimonial',
      heading: 'From a trade customer',
      quote:
        "I use Upward Development for my underground electrical services. They do a great job and make it look like we didn't even dig a ditch 3 ft deep with electrical conduit underground.",
      author: 'Freddy Wimberly',
      context: 'Review published on our site.',
    },
    {
      type: 'checklist',
      heading: 'What a commercial customer should expect from us',
      intro:
        'If you are hiring on behalf of a business rather than for your own house, these are the things worth confirming with any contractor — including us.',
      items: [
        'Current license and insurance certificates, provided on request rather than described',
        'A written scope that states what is excluded as clearly as what is included',
        'Costs discussed before any change to the original plan, not after',
        'A schedule we will actually talk to you about, and a point of contact who answers',
        'Site left in a condition your next trade can work in',
      ],
    },
    {
      type: 'prose',
      heading: 'Working around what is already there',
      paragraphs: [
        'The practical challenge on most Westlake jobs is not the dirt. It is everything else on the site — existing utilities, active operations, traffic that has to keep moving, and neighbors close enough that where we stage material matters.',
        'That is a planning problem more than an equipment problem. We would rather spend an extra half hour walking a site and agreeing on the sequence than lose a day fixing something that was avoidable.',
      ],
    },
    {
      type: 'process',
      heading: 'From first call to final walk',
      steps: [
        {
          title: 'Conversation',
          body: 'Tell us what has to exist when we leave. That is usually a more useful starting point than a list of tasks.',
        },
        {
          title: 'Site visit',
          body: 'We look at access, existing conditions, drainage and anything nearby that constrains how we work.',
        },
        {
          title: 'Scope and estimate',
          body: 'Written, with exclusions stated plainly.',
        },
        {
          title: 'Scheduling',
          body: 'Slotted against real conditions, including weather, which moves dirt schedules in this part of the state.',
        },
        {
          title: 'Execution and handover',
          body: 'Work performed, site cleaned up, and walked with you before we call it done.',
        },
      ],
    },
    {
      type: 'nearby',
      heading: 'Either side of the river',
      intro: 'Westlake sits between two of our busiest areas:',
      links: [
        { label: 'Lake Charles, across the Calcasieu River', to: '/service-areas/lake-charles-la' },
        { label: 'Sulphur, west along I-10', to: '/service-areas/sulphur-la' },
      ],
    },
    {
      type: 'faq',
      heading: 'Questions from Westlake customers',
      items: [
        {
          q: 'Can you provide certificates of insurance for a commercial job?',
          a: 'Yes. We are a licensed and insured company and we will provide current certificates on request. If your organization has specific coverage or additional-insured requirements, send them early so there are no surprises the week work is supposed to start.',
        },
        {
          q: 'Do you work as a subcontractor for other companies?',
          a: 'Regularly. A good portion of our dirt and trenching work is for other trades and contractors who need the ground opened and closed properly. References are available on request.',
        },
        {
          q: 'How do you handle backfill over utilities?',
          a: 'Carefully, and with the finished surface in mind. Backfill that is not compacted properly shows up later as a trench line that has settled below grade. Tell us what the surface has to look like when we are done and we will build the backfill to suit it.',
        },
        {
          q: 'Can you build a steel building on a site you did not prepare?',
          a: 'Yes, though we will want to look at the existing slab and foundation first. A steel frame concentrates its load into the anchor bolts at each column, so the foundation has to have been designed for that. If it was not, that is a conversation to have before the steel arrives, not after.',
        },
        {
          q: 'Do you take on small jobs, or only large ones?',
          a: 'Both. A half-day of grading is a legitimate job and we would rather do it well than turn it away.',
        },
      ],
    },
  ],

  cta: {
    heading: 'Send us the site',
    body: 'An address and a short description is enough to start. Call or text 318-452-7653, or email lucas@upwarddevelopment.us if drawings or specifications are easier to send that way.',
  },

  sources: [
    {
      label: 'Westlake, Louisiana — location, population and industrial character (2020 Census figures)',
      url: 'https://en.wikipedia.org/wiki/Westlake,_Louisiana',
    },
  ],
};
