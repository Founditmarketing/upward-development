import type { ServiceArea } from './types';

export const dequincy: ServiceArea = {
  slug: 'dequincy-la',
  name: 'DeQuincy',
  parish: 'Calcasieu Parish',
  hubSummary:
    'Timber country in the north of the parish, where most projects start with trees and the question of what to do with the material.',
  emphasis: 'Wooded-lot clearing, mulching and stump work',

  title: 'Land Clearing and Forestry Mulching in DeQuincy, LA',
  metaDescription:
    'Land clearing, forestry mulching, stump grinding and homesite preparation on wooded property around DeQuincy, Louisiana. Licensed and insured, working out of Lake Charles. Call or text 318-452-7653.',

  h1: 'Clearing Wooded Property Around DeQuincy',
  heroLead:
    'DeQuincy sits about seventeen miles north of Sulphur on LA 27, in a part of the parish where the timber industry has long been part of the local economy — and where most of our work starts with what is growing on the property.',
  heroImage: '/landclearing-aerial.jpg',
  heroImageAlt: 'Aerial view of a wooded property partially cleared of trees and brush',

  sections: [
    {
      type: 'prose',
      heading: 'Trees are the project',
      paragraphs: [
        'DeQuincy was founded in 1897 as a railroad settlement and grew up alongside the timber business. It is a city of a little over 3,100 people now, with LA 12 running east and LA 27 running north and south through it.',
        'What that means for us is that the jobs up here look different from jobs in Sulphur or Westlake. A homesite is not a bare lot waiting for fill — it is standing timber and understory that has to come out first, and the biggest single cost driver is usually not the clearing itself but what happens to the material afterward.',
      ],
    },
    {
      type: 'services',
      heading: 'Three different jobs people call "clearing"',
      intro:
        'These get used interchangeably and they are not the same work, the same timeline or the same price. Picking the wrong one is the most common way a clearing budget goes sideways.',
      items: [
        {
          title: 'Forestry mulching',
          body: 'A mulching head grinds standing brush and small-to-medium trees into chips and leaves them on the ground. No haul-off, no burn pile, and the mulch layer helps hold soil in place. Right for opening up overgrown ground, trails and fence lines. Wrong if you are building, because the roots stay.',
          to: '/services/land-clearing',
          linkLabel: 'More about clearing methods',
        },
        {
          title: 'Full clearing and grubbing',
          body: 'Stumps and root balls come out of the ground so there is clean soil to build on. More disturbance, more material to deal with, more time — and unavoidable if a structure is going on that spot.',
          to: '/services/land-clearing',
          linkLabel: 'Full clearing services',
        },
        {
          title: 'Stump grinding',
          body: 'For a handful of stumps in a yard you otherwise like, grinding below grade and filling the hole is cheaper and far less disruptive than digging them out.',
          to: '/services/land-clearing',
          linkLabel: 'Stump removal',
        },
      ],
    },
    {
      type: 'scenario',
      heading: 'What clearing a homesite out of woods usually looks like',
      label: 'General walkthrough — not a specific customer project',
      paragraphs: [
        'Somebody buys a wooded tract and wants a house on it. Here is the shape of that work, and the decisions that matter most:',
      ],
      bullets: [
        'Decide how large the cleared area needs to be — house, drive, septic field if applicable, and working room around the structure. Clearing too tight is the regret we hear about most',
        'Mark the trees you want kept, before anything starts. This is worth an afternoon of your time',
        'Get an access path in first so equipment and, later, delivery trucks can reach the site',
        'Clear and grub the building footprint down to clean soil',
        'Deal with the material — between trench burners, mulching and haul-off there are options, and current conditions and restrictions decide which ones are on the table',
        'Build and compact the pad, set the elevation, and carry drainage away from the structure',
      ],
    },
    {
      type: 'faq',
      heading: 'What DeQuincy property owners ask',
      items: [
        {
          q: 'Is my timber worth anything?',
          a: 'Sometimes. Merchantable timber of the right species and size can have value, and that is worth finding out before it gets mulched. We are a construction and land development company, not a timber buyer, so on a tract with real standing volume the honest advice is to get a forester or timber buyer to look at it first. It costs you nothing to ask and it occasionally changes the whole economics of the job.',
        },
        {
          q: 'How long does clearing a few acres take?',
          a: 'It depends far more on what is growing there and where the material goes than on the acreage. Light underbrush mulches quickly. Mature trees with large root systems that have to be grubbed and hauled is a different job on the same number of acres. We will give you a realistic window once we have seen it.',
        },
        {
          q: 'Can you clear right up to a property line?',
          a: 'We can work to a line you can show us. What we will not do is guess at where it runs. If there is any doubt, a survey is cheap compared with clearing a neighbor\'s trees, and that is a conversation nobody enjoys.',
        },
        {
          q: 'Do you leave the mulch, or can you haul it off?',
          a: 'Either. Left in place it protects the soil and breaks down over time, which is usually what people want. If you need bare ground, haul-off is priced separately because it is genuinely additional work.',
        },
        {
          q: 'What about burning?',
          a: 'We have trench burners and use them where it makes sense. Whether burning is appropriate on a given day and a given site depends on conditions and current restrictions, which is a matter for the parish and the state rather than something we will assert on a web page. We plan for alternatives so a burn ban does not stop your project.',
        },
      ],
    },
    {
      type: 'nearby',
      heading: 'Other communities in this part of the parish',
      intro: 'LA 27 runs north and south through DeQuincy, connecting several areas we cover:',
      links: [
        { label: 'Sulphur, 17 miles south', to: '/service-areas/sulphur-la' },
        { label: 'DeRidder, 31 miles north', to: '/service-areas/deridder-la' },
      ],
    },
  ],

  cta: {
    heading: 'Walk the property with us',
    body: 'Wooded tracts are hard to price from a description and easy to price accurately in person. Call or text 318-452-7653 and we will set up a time to see it.',
  },

  sources: [
    {
      label: 'DeQuincy, Louisiana — founding, population, highways and timber history (2020 Census figures)',
      url: 'https://en.wikipedia.org/wiki/DeQuincy,_Louisiana',
    },
  ],
};
