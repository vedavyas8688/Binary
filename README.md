# Binary — Project Website

Modern, light single-project real estate website for Binary Project 4
(Chambenahalli, Sarjapur Road, Bengaluru).

Stack: Vite + React + Tailwind CSS + GSAP + react-router + lucide-react.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into /dist
```

## Editing the theme (one place)

- **Colors, gradients & fonts** → `src/styles/theme.css`
  Every Tailwind color (text-ink, bg-brand, …), gradient and font
  reads from the CSS variables in this single file.
  If you change font families, also update the Google Fonts link in
  `index.html`.

- **Type scale** → `tailwind.config.js`
  The whole site uses a compact scale (~5px smaller than Tailwind
  defaults). Adjust the `fontSize` block there if you want it bigger
  or smaller.

- **All text & images** → `src/data/content.js`
  Hero copy, specs, amenities, floor plans, testimonials, nav links,
  contact details — everything in one data file.

## Structure

```
src/
  styles/theme.css     <- EDIT COLORS + FONTS HERE
  styles/globals.css   <- shared classes (buttons, cards, sections)
  data/content.js      <- all site copy
  hooks/useReveal.js   <- GSAP scroll-reveal hook
  components/          <- Navbar, Footer, layout, headings
  sections/            <- Hero, About, Stats, Amenities, ...
  pages/               <- Home, About, Services, Blog, Gallery
```

The enquiry form in `src/sections/Contact.jsx` currently shows a
success state on submit — connect it to your CRM/email service in
`handleSubmit`.
