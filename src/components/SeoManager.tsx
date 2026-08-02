import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resolveSeo, SITE } from '../seo/siteSeo';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Keeps the document head in step with the current route on client-side
 * navigation. The same data is baked into the static HTML at build time by
 * scripts/prerender.mjs, so this is a top-up rather than the only source.
 */
export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description, image, jsonLd } = resolveSeo(pathname);
    const canonicalPath = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
    const url = `${SITE}${canonicalPath}`;
    const imageUrl = image.startsWith('http') ? image : `${SITE}${image}`;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', canonicalPath.startsWith('/blog/') ? 'article' : 'website');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Replace any structured data from the previous route.
    document.head
      .querySelectorAll('script[type="application/ld+json"][data-seo-managed]')
      .forEach(el => el.remove());
    jsonLd.forEach(node => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-managed', '');
      script.textContent = JSON.stringify(node);
      document.head.appendChild(script);
    });
  }, [pathname]);

  return null;
}
