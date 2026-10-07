# Unniraveendra author website

Seven responsive HTML pages, shared CSS and JS, favicon, sitemap and robots.txt.

## Preview
Open `index.html` in your browser. No build step required. Fonts load from Google Fonts when online.

## Before publishing (important)
1. Replace **every** `https://unniraveendra.com` with your real HTTPS domain in all HTML files, `robots.txt` and `sitemap.xml`.
2. Replace the biography, book synopsis, placeholder contact details, gallery tiles and book artwork with verified final content. Do not publish the example email as a real contact.
3. Add optimized author portraits, book cover and gallery images under `assets/images/`; update HTML to use real `<img>` tags with descriptive alt text, width/height, and lazy loading where appropriate.
4. Add real social profile URLs to the homepage Person JSON-LD `sameAs` array if desired, and add Book JSON-LD on `books.html` only when accurate publication metadata is available.
5. Upload the entire folder to an HTTPS static hosting provider, preserving its structure. Set the domain to point at the host.
6. Verify your site in Google Search Console and submit `https://YOUR-DOMAIN/sitemap.xml`. Indexing and rankings are not guaranteed.
7. Check page metadata, canonical URLs, mobile layout, performance, accessibility and broken links after deployment.

## Notes
- No working contact form is included; use a real email or connect a backend/form provider before adding a form.
- Gallery and cover artwork are intentional placeholders, not claimed photos or a real cover.
- All internal navigation is relative so local preview works.
