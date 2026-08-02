/**
 * Server entry used only by the build-time prerender step
 * (scripts/prerender.mjs). Not shipped to the browser.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppShell } from './App';

export { resolveSeo, allRoutes, SITE } from './seo/siteSeo';

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  );
}
