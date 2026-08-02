/**
 * Static prerender step.
 *
 * Runs after `vite build`. For every known route it renders the React tree to
 * HTML, injects that route's title, description, canonical, Open Graph tags and
 * JSON-LD, and writes dist/<route>/index.html.
 *
 * Vercel checks the filesystem before applying the SPA rewrite in vercel.json,
 * so these files are served directly and crawlers get real HTML instead of an
 * empty <div id="root">. The client bundle still boots and takes over, so
 * navigation stays a single-page app.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const DIST = 'dist';
const { render, resolveSeo, allRoutes, SITE } = await import('../dist-ssr/entry-server.js');

const escapeAttr = s =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// JSON-LD sits inside <script>, so the only dangerous sequence is a literal
// closing tag. Escaping the slash keeps the JSON valid and the HTML safe.
const escapeJsonLd = obj => JSON.stringify(obj).replace(/</g, '\\u003c');

function headFor(route) {
  const { title, description, image, jsonLd } = resolveSeo(route);
  const url = `${SITE}${route === '/' ? '/' : route}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE}${image}`;
  const ogType = route.startsWith('/blog/') ? 'article' : 'website';

  return [
    `<title>${escapeAttr(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="Upward Development" />`,
    `<meta property="og:url" content="${escapeAttr(url)}" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:image" content="${escapeAttr(imageUrl)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(imageUrl)}" />`,
    ...jsonLd.map(
      node => `<script type="application/ld+json" data-seo-managed>${escapeJsonLd(node)}</script>`,
    ),
  ].join('\n    ');
}

const template = await readFile(join(DIST, 'index.html'), 'utf8');

// Strip the placeholder head tags the SPA shell carries so nothing is emitted
// twice with conflicting values.
const stripped = template
  .replace(/\s*<title>[\s\S]*?<\/title>/g, '')
  .replace(/\s*<meta\s+name="description"[^>]*>/g, '')
  .replace(/\s*<link\s+rel="canonical"[^>]*>/g, '')
  .replace(/\s*<meta\s+property="og:[^"]*"[^>]*>/g, '')
  .replace(/\s*<meta\s+name="twitter:[^"]*"[^>]*>/g, '')
  .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');

if (!stripped.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find the root mount point in dist/index.html');
}

const routes = allRoutes();
const seen = new Set();

for (const route of routes) {
  if (seen.has(route)) throw new Error(`prerender: duplicate route ${route}`);
  seen.add(route);

  const html = stripped
    .replace('</head>', `  ${headFor(route)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);

  // "/" -> dist/index.html, "/about" -> dist/about/index.html. Directory-style
  // output means one canonical URL per page with no trailing-slash twin.
  const outFile = route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html');
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, html);
}

console.log(`prerendered ${routes.length} routes`);
