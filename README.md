# Monirul Hasan Mithu — Modern portfolio

A dependency-free static portfolio that can be deployed directly to Vercel, Netlify, GitHub Pages, or any normal web host.

## Included

- Responsive desktop, tablet, and mobile design
- Light and dark themes with saved preference
- 16 project cards with filter, search, and detail dialogs
- Downloadable PDF CV
- Optimized WebP images and social-sharing preview
- Accessible navigation, keyboard focus, reduced-motion support, and skip link
- Contact form through FormSubmit
- Dedicated, categorized Social Links section with professional, social, messaging, WhatsApp, and two email options
- PWA manifest and lightweight offline cache
- SEO metadata, sitemap, robots file, custom 404 page, and Vercel security headers
- No visitor tracking scripts

## Run locally

Use any local static server. From the project folder:

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy to Vercel

1. Upload this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Choose **Other** as the framework preset if Vercel does not detect a static site automatically.
4. Leave build command and output directory empty.
5. Deploy.

The included `vercel.json` adds clean URLs, cache rules, and basic security headers.

## Update personal information

- Main content, contact details, and social links: `index.html`
- Project cards and details: `assets/js/app.js`, in the `projects` array
- Styling: `assets/css/styles.css`
- CV: replace `assets/docs/Monirul-Hasan-Mithu-CV.pdf` with an updated file using the same name
- Profile and gallery images: `assets/images/`

## Contact form activation

The form sends through FormSubmit to `dev.get.in.touch@gmail.com`. The first test submission may send an activation email. Open that email and confirm the form before public launch.

## Project-data note

Descriptions are intentionally conservative and based on public repository information. Projects without a confirmed public deployment link show a Source button instead of a Live button. Edit the matching project object in `assets/js/app.js` when a new live URL is ready.
