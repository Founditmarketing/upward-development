import type { ServiceArea } from './types';

export const iowa: ServiceArea = {
  slug: 'iowa-la',
  name: 'Iowa',
  parish: 'Calcasieu Parish',
  hubSummary:
    'A farming and cattle town east of Lake Charles where the work runs toward pasture, field access and agricultural site prep.',
  emphasis: 'Pasture conversion, agricultural clearing and farm access',

  title: 'Land Clearing & Pasture Work in Iowa, Louisiana',
  metaDescription:
    'Pasture conversion, land clearing, farm road and culvert work, building pads and debris removal for property owners around Iowa, Louisiana. Licensed and insured. Call or text 318-452-7653.',

  h1: 'Clearing, Pasture and Site Work for Property Owners in Iowa, LA',
  heroLead:
    'Iowa is about thirteen miles east of us on US 90 or I-10. It is a working landscape — farming, cattle and oil — and the projects here reflect that.',
  heroImage: '/dirtwork-skidsteer.jpg',
  heroImageAlt: 'Skid steer with a clearing attachment working on open ground',

  sections: [
    {
      type: 'prose',
      heading: 'Land that has to earn its keep',
      paragraphs: [
        'Iowa grew up around rice farming and cattle after the railroad arrived, and oil came in on top of that in 1930. A town of about 3,400 people sits in the middle of a lot of productive ground.',
        'Property owners out here generally are not asking how to make land look nice. They are asking how to make it work — get equipment across it, keep water moving off it, turn a section that has grown up in scrub back into something a cow or a tractor can use.',
      ],
    },
    {
      type: 'scenario',
      heading: 'Turning grown-up ground back into pasture',
      label: 'General information about pasture conversion — not a specific customer project',
      paragraphs: [
        'Land clearing is the service we most enjoy providing, and we are equipped to handle anything from a city lot up to a hundred-acre pasture conversion. When someone wants overgrown acreage back in grass, the job usually breaks down like this:',
      ],
      bullets: [
        'Decide what stays. Shade trees, fence lines and anything you want protected get marked before a machine starts',
        'Choose the method. Mulching grinds brush in place and leaves a mulch layer; full clearing pulls stumps and roots out, which matters if you will be running a mower or a hay operation over it',
        'Deal with the material. Between trench burners and specialized excavators we have options, but burning depends on conditions and current rules, so that gets settled early',
        'Handle the stumps. Anything left in the ground will surface later, usually into a piece of equipment',
        'Smooth the ground so it can actually be worked, rather than leaving it rough and calling it cleared',
      ],
    },
    {
      type: 'services',
      heading: 'Services that come up on agricultural property',
      items: [
        {
          title: 'Clearing and pasture conversion',
          body: 'Underbrush removal, forestry mulching, full clearing and stump grinding — matched to what the land is going to be used for afterward.',
          to: '/services/land-clearing',
          linkLabel: 'See how we clear land',
        },
        {
          title: 'Farm roads, field entrances and culverts',
          body: 'Access that holds up to loaded trucks and trailers, and crossings that let water keep moving through the ditch instead of backing up behind your entrance.',
          to: '/services/dirt-work',
          linkLabel: 'Access and culvert work',
        },
        {
          title: 'Pads for barns, shops and equipment buildings',
          body: 'Built up, compacted and set at an elevation that keeps water out of the building. The same approach we use under a house, adjusted for what is going to sit on it.',
          to: '/services/dirt-work',
          linkLabel: 'How we build pads',
        },
        {
          title: 'Steel buildings for agricultural use',
          body: 'Clear-span steel gives you a wide open interior with no posts in the middle of the floor, which is generally what you want when equipment has to move around inside.',
          to: '/services/steel-buildings',
          linkLabel: 'Steel buildings',
        },
        {
          title: 'Debris removal',
          body: 'Old fencing, fallen timber, storm debris, abandoned structures. Getting it gone is often step one of making a property usable again.',
          to: '/services/land-clearing',
          linkLabel: 'Clearing and debris removal',
        },
      ],
    },
    {
      type: 'faq',
      heading: 'Questions from farm and acreage owners',
      items: [
        {
          q: 'Can you work around an active operation?',
          a: 'Usually. Tell us where the livestock are, which gates have to stay shut, and what has to keep running while we are there, and we will plan the work around it. That is a normal constraint, not an inconvenience.',
        },
        {
          q: 'Mulching or full clearing — which do I want for pasture?',
          a: 'It depends on what happens next. If you are just knocking back brush and will keep it maintained, mulching is quicker and leaves a useful mulch layer. If you will be running a mower, a hay cutter or any implement close to the ground, you want the stumps and roots out, which means full clearing.',
        },
        {
          q: 'Do you burn what you clear?',
          a: 'Sometimes, and we have trench burners for it. Whether burning is the right or permitted approach on a given job depends on conditions and current restrictions, so we settle that during scoping rather than assuming. Mulching and haul-off are the alternatives.',
        },
        {
          q: 'How far out do you schedule?',
          a: 'It varies with the season and the weather — wet ground moves everything. We keep a calendar and we talk about it, so you will get a realistic window rather than a date we already know we cannot hold.',
        },
        {
          q: 'Can you fix a field entrance that washes out every year?',
          a: 'Often, yes, and usually the fix is upstream of where the damage shows. If the culvert is undersized or set at the wrong elevation, the entrance will keep failing no matter how much rock goes on it. Worth looking at the whole crossing rather than patching the surface.',
        },
      ],
    },
    {
      type: 'nearby',
      heading: 'Also serving east of Lake Charles',
      intro: 'If your property is further out along the I-10 corridor:',
      links: [
        { label: 'Jennings, further east in Jefferson Davis Parish', to: '/service-areas/jennings-la' },
        { label: 'Kinder, north on US 165', to: '/service-areas/kinder-la' },
      ],
    },
  ],

  cta: {
    heading: 'Got acreage that needs work?',
    body: 'Call or text 318-452-7653 with the location and roughly how many acres you are talking about. We would rather come look at it than quote off a description.',
  },

  sources: [
    {
      label: 'Iowa, Louisiana — population, highways, distance from Lake Charles, and farming, cattle and oil economy (2020 Census figures)',
      url: 'https://en.wikipedia.org/wiki/Iowa,_Louisiana',
    },
  ],
};
