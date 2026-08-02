import type { ServiceArea } from './types';

export const deridder: ServiceArea = {
  slug: 'deridder-la',
  name: 'DeRidder',
  parish: 'Beauregard Parish',
  hubSummary:
    'The Beauregard Parish seat, 48 miles up US 171 — the furthest north we work, and best suited to projects with enough scope to justify the trip.',
  emphasis: 'Steel shops and larger clearing projects, with honest travel pricing',

  title: 'Steel Buildings, Shops & Land Clearing in DeRidder, LA',
  metaDescription:
    'Engineered steel buildings, shop pads, land clearing and site preparation for property owners in DeRidder and Beauregard Parish. Licensed and insured, based in Lake Charles. Call or text 318-452-7653.',

  h1: 'Construction and Land Work in DeRidder and Beauregard Parish',
  heroLead:
    'DeRidder is 48 miles north of us on US 171 — the outer edge of where we work. We are straight about what that means for pricing, and we would rather say so on this page than in a quote.',
  heroImage: '/about-body.jpg',
  heroImageAlt: 'Upward Development team member marking a steel beam on a job site',

  sections: [
    {
      type: 'prose',
      heading: 'The distance conversation, first',
      paragraphs: [
        'Most service-area pages pretend geography does not exist. It does. Our equipment, our crew and our yard are in Lake Charles, and getting a machine to Beauregard Parish and back is a real cost that lands somewhere — either in your price or in a corner cut on the job.',
        'What that means in practice: a project with enough scope to keep equipment busy for a stretch prices sensibly up here. A two-hour job does not, and we will tell you that rather than take the work and resent the drive. If you have several things that need doing, grouping them into one mobilization is usually the difference.',
        'DeRidder itself is the Beauregard Parish seat, a city of about 9,850 people, incorporated in 1903, with US 171 and US 190 meeting there. Timber has been central to this area since its early days, when longleaf pine and sawmilling drove the local economy.',
      ],
    },
    {
      type: 'services',
      heading: 'What is worth calling us for up here',
      intro:
        'Weighted toward projects where the scope justifies the trip and where our particular strengths matter.',
      items: [
        {
          title: 'Engineered steel buildings and shops',
          body: 'We are licensed, trained and equipped to build engineered steel buildings, all-welded or bolt-up, wood-free, designed to stand up to storms. A shop or equipment building is exactly the kind of project that makes the drive make sense — and we can do the pad and the building as one job.',
          to: '/services/steel-buildings',
          linkLabel: 'See our steel building work',
        },
        {
          title: 'Larger clearing projects',
          body: 'Multi-acre clearing, pasture conversion and heavy underbrush removal. We are equipped for anything from a city lot up to a hundred-acre conversion, and larger tracts are where the economics work best at this distance.',
          to: '/services/land-clearing',
          linkLabel: 'Land clearing services',
        },
        {
          title: 'Building pads and site preparation',
          body: 'Full site prep for a house, shop or commercial building — stripping, filling, compacting in lifts and setting elevation with laser and GPS grade equipment.',
          to: '/services/dirt-work',
          linkLabel: 'Site preparation and dirt work',
        },
        {
          title: 'Custom homes built around a steel frame',
          body: 'Our Super Homes use a steel mainframe that is far stronger than traditional wood framing, finished so they read as houses rather than metal buildings. Worth a look if you are building new and durability is high on your list.',
          to: '/services/super-homes',
          linkLabel: 'About Super Homes',
        },
      ],
    },
    {
      type: 'checklist',
      heading: 'Making a trip out here worth it',
      intro:
        'Practical suggestions if you are in Beauregard Parish and want the best value out of hiring a Lake Charles-based company.',
      items: [
        'Group work together — the pad, the drive and the clearing in one mobilization rather than three',
        'Be flexible on timing where you can, so the trip can pair with other work in the area',
        'Send photos and the address before we drive up, so the site visit is productive',
        'Know your access — whether a lowboy can reach the site matters more the further out you are',
        'Say early if there is a hard deadline, so we can be honest about whether we can hold it',
      ],
    },
    {
      type: 'faq',
      heading: 'Questions from Beauregard Parish',
      items: [
        {
          q: 'Do you actually travel to DeRidder, or is this just a web page?',
          a: 'We work here. What we will not do is pretend the distance is free. Ask us about travel on your specific job and you will get a straight answer, including "that one is too small to be worth your money at this distance" if that is the truth.',
        },
        {
          q: 'Is there a minimum job size?',
          a: 'Not a fixed number, but the further from Lake Charles a job is, the more the scope has to carry the mobilization. Call and describe it — we can usually tell you in one conversation whether it makes sense.',
        },
        {
          q: 'Can you do the pad and the steel building together?',
          a: 'Yes, and at this distance that combination is the one that makes most sense. It also removes the most common failure point on steel projects, which is the seam between whoever built the foundation and whoever set the frame. A steel building puts concentrated load into the anchor bolts at each column, and that only works if the pad and slab were built for it.',
        },
        {
          q: 'Who handles permits and parish requirements?',
          a: 'Beauregard Parish and the City of DeRidder set their own requirements and those are the offices to confirm with. We will tell you what we know from doing the work, but we are not going to state a rule for a jurisdiction we have not verified it in.',
        },
        {
          q: 'Can you look at a property before I buy it?',
          a: 'Yes. We have been in real estate for more than 25 years alongside the construction side, so an opinion on what a tract would cost to make usable is something we can give you. For a property this far out, tell us up front that it is a pre-purchase look so we can plan the trip sensibly.',
        },
      ],
    },
    {
      type: 'nearby',
      heading: 'Between here and Lake Charles',
      intro: 'US 171 and LA 27 connect DeRidder to several communities we cover:',
      links: [
        { label: 'DeQuincy, 31 miles south on LA 27', to: '/service-areas/dequincy-la' },
        { label: 'Moss Bluff, on US 171 north of Lake Charles', to: '/service-areas/moss-bluff-la' },
      ],
    },
  ],

  cta: {
    heading: 'Ask us whether it makes sense',
    body: 'Call or text 318-452-7653 with what you have in mind. If the job suits us, we will come look at it. If the distance makes us the wrong company for it, we will say that too.',
  },

  sources: [
    {
      label: 'DeRidder, Louisiana — parish seat, population, incorporation, highways, distance to Lake Charles and timber history (2020 Census figures)',
      url: 'https://en.wikipedia.org/wiki/DeRidder,_Louisiana',
    },
  ],
};
