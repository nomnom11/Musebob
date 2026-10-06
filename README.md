# MuseBob Land (Next.js)

Underwater virtual-land web3 game site: Home, Land map, Marketplace, Collection, Community, Docs, 404.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
- `app/layout.tsx`, `app/page.tsx` – Next.js App Router shell
- `app/globals.css` – full MuseBob Land design system (colors, typography, animations, responsive rules)
- `components/siteHtml.ts` – page markup (all pages in one document, shown/hidden by the router)
- `components/SiteMarkup.tsx` – renders the markup
- `public/js/site.js` – hash router (`#/land`, `#/marketplace`, ...), land map, wallet simulation, marketplace, hamburger menu
- `public/favicon.svg` – icon

## Notes
- Routing is hash-based (`/#/land`), so refresh, back/forward and direct links work without server rewrites.
- Wallet connection, balances and purchases are simulated. No real blockchain calls and no secrets are used.
- Tailwind is configured with preflight disabled so it cannot alter the existing styles.
