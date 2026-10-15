# DS VENTRA Website Redesign

This is a redesigned version of the existing DS VENTRA Next.js 14 website. Existing pages and contact form have been retained, with a new visual system and vertical client logo slider on the homepage.

## Run locally

1. Install Node.js LTS if it is not already installed.
2. Open this folder in VS Code.
3. Open a terminal in this project folder.
4. Run `npm install`.
5. Run `npm run dev` and open http://localhost:3000.

## Client logo images

Add approved client logo image files to `public/clients/` using these filenames:

- `club-mahindra.png`
- `ibis.png`
- `radisson.png`
- `malas.png`
- `satara-hospital.png`
- `chaitanya-hospital.png`
- `outpost-resort.png`
- `synergy-hospital.png`
- `karma-resort.png`
- `saj-resort.png`
- `tropicana-resort.png`
- `rasino-herbs.png`

Until images are added, the slider displays styled text placeholders so it will not show broken-image icons. Only display client logos you have permission to use.

## Before publishing

- Run `npm run dev` and test each page on desktop and mobile.
- Submit a test contact enquiry to confirm FormSubmit remains activated.
- Test both WhatsApp links.
- Add your approved client logos.
- Push the updated files to the existing GitHub repository to trigger Vercel deployment.

The project intentionally does not include `.git`, `node_modules`, `.next`, or secret `.env` files.
