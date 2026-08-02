/**
 * Single source of truth for page metadata and JSON-LD across the site.
 *
 * Both the client (via <SeoManager />) and the static prerender step import
 * from here, so the tags a crawler sees and the tags a browser ends up with
 * cannot drift apart.
 *
 * Structured-data policy for this site:
 *  - Exactly one business entity, identified by ORG_ID. Service-area pages
 *    reference that same entity rather than inventing a local one.
 *  - No aggregateRating, review, award, priceRange, opening hours or geo
 *    coordinates. None of those are verified, so none of them are emitted.
 */

import { serviceAreas, getServiceArea } from '../data/serviceAreas';
import { blogPosts, getPostBySlug } from '../data/blogPosts';

export const SITE = 'https://www.upwarddevelopment.us';
export const ORG_ID = `${SITE}/#organization`;

export const BUSINESS = {
  name: 'Upward Development LLC',
  shortName: 'Upward Development',
  phone: '+1-318-452-7653',
  phoneDisplay: '318-452-7653',
  email: 'lucas@upwarddevelopment.us',
  streetAddress: '1650 E Gauthier Rd',
  addressLocality: 'Lake Charles',
  addressRegion: 'LA',
  postalCode: '70607',
  addressCountry: 'US',
  logo: `${SITE}/logo-2.png`,
  sameAs: [
    'https://www.instagram.com/upwarddevelopmentllc/',
    'https://www.facebook.com/UpwardDevelopmentLLC',
    'https://www.tiktok.com/@upward.developmen',
    'https://www.youtube.com/@UpwardDevelopmentLLC',
  ],
};

export interface PageSeo {
  title: string;
  description: string;
  /** Site-root-relative path or absolute URL. */
  image: string;
  jsonLd: Record<string, unknown>[];
}

/** The one business entity. Emitted on every page, identical every time. */
export function organizationNode(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': ORG_ID,
    name: BUSINESS.name,
    url: `${SITE}/`,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: serviceAreas.map(a => ({
      '@type': 'City',
      name: `${a.name}, LA`,
    })),
    sameAs: BUSINESS.sameAs,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction & Land Development Services',
      itemListElement: [
        'Dirt Work & Site Preparation',
        'Land Clearing',
        'Steel Buildings',
        'Super Homes',
        'Real Estate Investments',
      ].map(name => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };
}

function breadcrumbNode(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path}`,
    })),
  };
}

/** Static routes. Dynamic ones are resolved below. */
const STATIC_SEO: Record<string, Omit<PageSeo, 'jsonLd'>> = {
  '/': {
    title: 'Upward Development | Construction & Land Development — Lake Charles, LA',
    description:
      'Licensed and insured construction and land development company in Lake Charles, LA. Dirt work, land clearing, steel buildings, Super Homes and real estate investments. Call 318-452-7653.',
    image: '/logo-2.png',
  },
  '/about': {
    title: 'About the LaCour Family | Upward Development — Lake Charles, LA',
    description:
      'Upward Development is a family-run construction company started in 2024 by the LaCour family in Lake Charles, Louisiana. Meet the team behind the work.',
    image: '/about-hero.jpg',
  },
  '/contact': {
    title: 'Contact Upward Development | Lake Charles, LA',
    description:
      'Request a quote for dirt work, land clearing, a steel building or a Super Home. Call or text 318-452-7653, or send us your project details.',
    image: '/contact-hero.jpg',
  },
  '/blog': {
    title: 'Blog | Upward Development — Lake Charles, LA',
    description:
      'Practical advice on dirt work, land clearing, steel buildings, storm-ready construction and Louisiana land from the Upward Development team.',
    image: '/services-bg.jpg',
  },
  '/service-areas': {
    title: 'Service Areas Across Southwest Louisiana | Upward Development',
    description:
      'Upward Development works out of Lake Charles across Calcasieu Parish and the surrounding area. Find the community closest to your property and what we most often do there.',
    image: '/services-bg.jpg',
  },
  '/services/dirt-work': {
    title: 'Dirt Work, House Pads, Ponds & Culverts | Upward Development',
    description:
      'Ponds, house pads, driveways, culvert installations and precision grading across Southwest Louisiana. Licensed and insured. Call or text 318-452-7653.',
    image: '/dirtwork-body.jpg',
  },
  '/services/land-clearing': {
    title: 'Land Clearing & Forestry Mulching | Upward Development',
    description:
      'Residential lot clearing, underbrush removal, forestry mulching and stump grinding — from a city lot to a 100-acre pasture conversion.',
    image: '/landclearing-aerial.jpg',
  },
  '/services/steel-buildings': {
    title: 'Engineered Steel Buildings | Upward Development — Lake Charles, LA',
    description:
      'All-welded and bolt-up engineered steel buildings, wood-free and built to withstand storms. From backyard workshops to commercial facilities.',
    image: '/steel-body.jpg',
  },
  '/services/super-homes': {
    title: 'Super Homes — Steel Reinforced Custom Homes | Upward Development',
    description:
      'Commercial strength with residential beauty. Steel-reinforced custom homes inspired by Hurricane Laura and built to withstand the toughest storms.',
    image: '/super-body.jpg',
  },
  '/services/real-estate': {
    title: 'Real Estate Investments | Upward Development — Louisiana',
    description:
      'We buy homes and land across Louisiana in any condition, and we are always looking for income-producing property. More than 25 years in real estate.',
    image: '/real-estate-hero.jpg',
  },
};

const SERVICE_PAGE_NAMES: Record<string, string> = {
  '/services/dirt-work': 'Dirt Work',
  '/services/land-clearing': 'Land Clearing',
  '/services/steel-buildings': 'Steel Buildings',
  '/services/super-homes': 'Super Homes',
  '/services/real-estate': 'Real Estate Investments',
};

const FALLBACK: Omit<PageSeo, 'jsonLd'> = STATIC_SEO['/'];

export function resolveSeo(pathname: string): PageSeo {
  // Normalise a trailing slash so /blog and /blog/ resolve identically.
  const path = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
  const jsonLd: Record<string, unknown>[] = [organizationNode()];

  // ── Service-area pages ────────────────────────────────────────────────
  const areaMatch = path.match(/^\/service-areas\/([^/]+)$/);
  if (areaMatch) {
    const area = getServiceArea(areaMatch[1]);
    if (area) {
      jsonLd.push(
        breadcrumbNode([
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: area.name, path: `/service-areas/${area.slug}` },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `Construction and land development in ${area.name}, Louisiana`,
          serviceType: area.emphasis,
          provider: { '@id': ORG_ID },
          areaServed: { '@type': 'City', name: `${area.name}, LA` },
          url: `${SITE}/service-areas/${area.slug}`,
        },
      );

      const faq = area.sections.find(s => s.type === 'faq');
      if (faq && faq.type === 'faq') {
        jsonLd.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.items.map(item => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        });
      }

      return {
        title: area.title,
        description: area.metaDescription,
        image: area.heroImage,
        jsonLd,
      };
    }
  }

  // ── Blog posts ────────────────────────────────────────────────────────
  const postMatch = path.match(/^\/blog\/([^/]+)$/);
  if (postMatch) {
    const post = getPostBySlug(postMatch[1]);
    if (post) {
      jsonLd.push(
        breadcrumbNode([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { '@type': 'Person', name: post.author },
          publisher: { '@id': ORG_ID },
          image: `${SITE}${post.image}`,
          mainEntityOfPage: `${SITE}/blog/${post.slug}`,
        },
      );
      return {
        title: `${post.title} | Upward Development`,
        description: post.excerpt,
        image: post.image,
        jsonLd,
      };
    }
  }

  // ── Static routes ─────────────────────────────────────────────────────
  const seo = STATIC_SEO[path];
  if (!seo) return { ...FALLBACK, jsonLd };

  if (path === '/service-areas') {
    jsonLd.push(
      breadcrumbNode([
        { name: 'Home', path: '/' },
        { name: 'Service Areas', path: '/service-areas' },
      ]),
    );
  } else if (SERVICE_PAGE_NAMES[path]) {
    jsonLd.push(
      breadcrumbNode([
        { name: 'Home', path: '/' },
        { name: SERVICE_PAGE_NAMES[path], path },
      ]),
    );
  }

  return { ...seo, jsonLd };
}

/** Every URL the prerender step should generate. */
export function allRoutes(): string[] {
  return [
    ...Object.keys(STATIC_SEO),
    ...serviceAreas.map(a => `/service-areas/${a.slug}`),
    ...blogPosts.map(p => `/blog/${p.slug}`),
  ];
}
