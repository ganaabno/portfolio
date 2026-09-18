# Gan-Erdene portfolio

A responsive portfolio built with Vite, React, TypeScript, and Framer Motion.

The English and Mongolian copy is maintained in `src/i18n.ts`. Visitors can switch languages in the header; their choice is saved in the browser.

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`. The output is in `dist/`.

## Contact links

Set the four `href` values in `contactLinks` in `src/App.tsx` before publishing. Use a `mailto:` URL for email and full `https://` URLs for GitHub, LinkedIn, and Telegram. Empty values display the labels without linking to an unverified account.
