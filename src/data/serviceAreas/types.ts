/**
 * Service-area page content model.
 *
 * Every community gets its own file under this directory with its own
 * hand-written copy and its own ordered `sections` array. The section list is
 * deliberately per-city: headings, order and emphasis differ from page to page
 * so no two pages are the same layout with a name swapped.
 *
 * Rules for anyone editing these files:
 *  - Do not copy a section from one city into another and change the name.
 *  - Local factual claims need a source in `sources` or they come out.
 *  - Never describe a hypothetical project as work that was actually done.
 */

export type AreaSection =
  | { type: 'prose'; heading?: string; paragraphs: string[] }
  | {
      type: 'services';
      heading: string;
      intro?: string;
      items: { title: string; body: string; to: string; linkLabel: string }[];
    }
  | { type: 'checklist'; heading: string; intro?: string; items: string[] }
  | {
      type: 'process';
      heading: string;
      intro?: string;
      steps: { title: string; body: string }[];
    }
  | {
      /** Clearly-labelled educational walkthrough. Never a claimed project. */
      type: 'scenario';
      heading: string;
      label: string;
      paragraphs: string[];
      bullets?: string[];
    }
  | {
      /** Only for reviews already published on the site, quoted verbatim. */
      type: 'testimonial';
      heading: string;
      quote: string;
      author: string;
      context?: string;
    }
  | { type: 'faq'; heading: string; items: { q: string; a: string }[] }
  | {
      type: 'nearby';
      heading: string;
      intro: string;
      links: { label: string; to: string }[];
    }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface ServiceArea {
  /** URL slug under /service-areas/ — e.g. "sulphur-la". */
  slug: string;
  /** Community name on its own, e.g. "Sulphur". */
  name: string;
  parish: string;
  /** One-line summary used on the hub page. Unique per area. */
  hubSummary: string;
  /** Short label for the emphasis of this page, used in the quality report. */
  emphasis: string;

  // ── Metadata ──────────────────────────────────────────────────────────
  title: string;
  metaDescription: string;

  // ── Hero ──────────────────────────────────────────────────────────────
  h1: string;
  heroLead: string;
  heroImage: string;
  heroImageAlt: string;

  /** Ordered page body. Varies per city by design. */
  sections: AreaSection[];

  /** Closing call to action — written per city, not templated. */
  cta: { heading: string; body: string };

  /** Credible sources backing the local factual claims on the page. */
  sources: { label: string; url: string }[];
}
