import { SITE_HTML } from "./siteHtml";

/**
 * Renders the full MuseBob Land markup. Interactivity (hash routing, map, wallet
 * simulation, marketplace) is provided by /public/js/site.js, loaded in app/page.tsx.
 */
export default function SiteMarkup() {
  return <div id="app-root" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: SITE_HTML }} />;
}
