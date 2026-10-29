# Black Razor Barbershop

One-page website for a barbershop: dark theme with gold accents, price list, team, gallery tiles and a booking form. Language: Polish.

> **Concept project.** The business, prices, address and phone number are fictional.
> The form does not send data anywhere.

## Structure

```
black-razor-barbershop/
├── index.html      Markup only
├── css/
│   └── style.css   Styles: design tokens (CSS variables), light/dark theme, responsive layout
└── js/
    └── main.js     Mobile menu, scroll reveal, demo form
```

## Run locally

No build step, no dependencies. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 🔗 Links
* **Live Demo:** [View Website](https://ragna9683.github.io/black-razor-barbershop/)

## Features

- Sticky header with mobile menu
- Price list, team and gallery sections
- Scroll-reveal animation (disabled for `prefers-reduced-motion`)
- Light and dark colour schemes
- Accessible form labels and focus states

## Deploy

Static site. Works as is on GitHub Pages (Settings, Pages, branch `main`, folder `/root`), Netlify or Vercel.

## Stack

HTML5, CSS3 (custom properties, grid, flexbox, `prefers-color-scheme`, `prefers-reduced-motion`), vanilla JavaScript. Fonts: Google Fonts, with system fallbacks.
