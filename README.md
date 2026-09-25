# Samad Khan — Portfolio Site

A self-contained, dependency-free portfolio site. No build step, no
framework, no npm install — open `index.html` in a browser, or deploy the
whole folder as-is to any static host.

## Project structure

```
.
├── index.html          Page markup
├── resume.pdf           Downloaded by the three "Resume" buttons
├── css/
│   └── styles.css       All styling (light + dark theme included)
├── js/
│   └── main.js           Nav, theme toggle, photo loading, scroll effects
├── images/
│   ├── README.md         Instructions for adding your photos
│   ├── hero-photo.jpg     ← add this (small circular hero photo)
│   └── about-photo.jpg    ← add this (larger About-section portrait)
└── README.md             This file
```

## Adding your photos

See `images/README.md` for the two exact filenames the page expects.
Short version: drop in `images/hero-photo.jpg` and `images/about-photo.jpg`
and they'll appear automatically. Until then, the page shows a clean "SK"
monogram in their place, so nothing ever looks broken.

## Updating your resume

Replace `resume.pdf` at the project root with your updated file, keeping
the exact filename `resume.pdf`. All three download buttons (nav bar, hero,
contact section) point at this one file.

## Updating content

All page text and links (experience, projects, skills, contact info) live
directly in `index.html` — search for the relevant section comment
(`<!-- ===== PROJECTS ===== -->`, etc.) to find what to edit.

## Deploying

This is a static site — any of these work with zero configuration:

- **GitHub Pages**: push this folder to a repo, enable Pages in repo settings
- **Netlify / Vercel**: drag-and-drop this folder onto their dashboard
- Any web host that serves static files

Just make sure the folder structure stays intact (`css/`, `js/`, `images/`,
and `resume.pdf` all stay alongside `index.html`) — the page's links are
relative paths, so if the structure moves, update the paths in `index.html`
to match.

## Browser support

Uses a few modern CSS features (`color-mix()`, `aspect-ratio`, `clamp()`)
that need a browser from roughly 2023 or later — Chrome, Firefox, Safari,
and Edge all qualify by default on any current device.
