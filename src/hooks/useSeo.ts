import { useEffect } from 'react';

const SITE = 'https://www.upwarddevelopment.us';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

interface SeoOptions {
  title: string;
  description: string;
  /** Path only, e.g. "/blog/my-post". */
  path: string;
  /** Absolute URL or site-root-relative path. */
  image?: string;
}

/**
 * Minimal document-head management for a SPA — sets title, description,
 * canonical and the Open Graph tags that get read when a page is shared.
 */
export default function useSeo({ title, description, path, image }: SeoOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const url = `${SITE}${path}`;
    const imageUrl = image
      ? image.startsWith('http')
        ? image
        : `${SITE}${image}`
      : `${SITE}/logo-2.png`;

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, path, image]);
}
