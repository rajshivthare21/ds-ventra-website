# DS VENTRA Website

Responsive Next.js website for DS VENTRA.

## Run locally

1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000

## Pages
- /
- /about
- /services
- /industries
- /projects
- /resources
- /contact

## Deploy to Vercel

Push this folder to GitHub, then import the repository in Vercel. Vercel detects Next.js automatically. Build command: `next build` (or `npm run build`).

## Domain

After deployment, in Vercel open Project Settings > Domains and add your Hostinger domain. Vercel will show the exact DNS records. Add those records in Hostinger DNS.

## Important
The contact form is a front-end demo. Before going live, connect it to an email/form backend (for example Resend, Formspree, or your own API route) so enquiries are actually delivered.
