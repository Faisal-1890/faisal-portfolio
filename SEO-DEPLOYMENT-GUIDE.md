# SEO and Vercel deployment checklist

## Changes already made
- Replaced the default browser title with a name-focused title.
- Added a descriptive meta description, keywords, author, robots directive, Open Graph and Twitter metadata.
- Added Schema.org `Person` structured data for Md Faisal Mahmud.
- Added a visible, semantic homepage H1 and introduction so the name and professional summary are present in the rendered page.
- Added a no-JavaScript fallback description.
- Added `robots.txt`, a web manifest, and Vercel SPA rewrite/security headers.

## Before deployment
1. Replace the placeholder GitHub and LinkedIn URLs in:
   - `src/components/sections/Contact.jsx`
   - `src/components/sections/Footer.jsx`
2. Configure EmailJS in `src/components/sections/Contact.jsx`:
   - service ID
   - template ID
   - public key
   The contact form will not send messages until these are real EmailJS values.
3. Check all project screenshots and links, then run `npm install` and `npm run build`.

## Deploy to Vercel for free
1. Push this project to a GitHub repository (do not upload `node_modules`).
2. Sign in at https://vercel.com/ using GitHub.
3. Select **Add New → Project**, import the repository.
4. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
5. Click **Deploy**. Vercel will provide a public `*.vercel.app` URL.

## After deployment: make Google discover the site
1. Open Google Search Console: https://search.google.com/search-console
2. Add a **URL prefix** property using the exact Vercel URL, for example `https://your-project.vercel.app/`.
3. Verify ownership using the HTML tag method. Copy the verification meta tag Google gives you into the `<head>` of `index.html`, redeploy, then click Verify.
4. Create `public/sitemap.xml` with your exact live URL:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://YOUR-EXACT-VERCEL-DOMAIN/</loc>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```
5. Add `Sitemap: https://YOUR-EXACT-VERCEL-DOMAIN/sitemap.xml` to `public/robots.txt`, replacing the example with the real domain.
6. Redeploy, submit `/sitemap.xml` in Search Console, then use **URL Inspection → Request Indexing** for the homepage.

## Important
Google indexing and ranking are not guaranteed or immediate. A site can take days or weeks to appear, and searching your name may show other people first. Use the same full name consistently on the portfolio, GitHub, LinkedIn, and other public professional profiles. A custom domain matching your name can help establish a consistent identity, but it is not required for free Vercel hosting.
