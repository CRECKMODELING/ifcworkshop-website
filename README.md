# FCWS Website

Static website for the **International Workshop on Flame Chemistry (FCWS)**, built with [Astro](https://astro.build). Serves as landing page, communication hub, and archive for all past editions.

## Getting started

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → ./dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    Nav.astro           # sticky navigation bar
    Footer.astro        # site footer
    Ordinal.astro       # renders ordinal suffixes as superscript (1st, 2nd…)
  layouts/
    Base.astro          # base HTML layout (head, nav, footer)
  pages/
    index.astro         # landing page
    program.astro       # full workshop agenda
    speakers.astro      # invited speakers
    committee.astro     # organizing, advisory, and founding members
    registration.astro  # fees, deadlines, poster info, visa form
    venue.astro         # location and travel info
    archive/
      index.astro       # list of all past editions
      [year].astro      # dynamic route for each edition
    contact.astro       # contact persons
  styles/
    global.css          # all site styles (single stylesheet)
  content/
    archive/            # one JSON file per past edition

public/
  images/
    committee/          # committee member photos
    speakers/           # speaker photos
  files/
    agenda-8th-fcws-2026.pdf
    8th-fcws-2026.ics
    poster-abstract-template-fcws2026.docx
```

## How to update content

### Update the program
Edit `src/pages/program.astro` directly. Each session is a table row; talks use `.talk-title` / `.talk-speaker` spans.

### Add or update a speaker photo
Drop the image in `public/images/speakers/` and update the `photo` field in the speakers array at the top of `src/pages/speakers.astro`.

### Add a committee member
Edit the relevant array (`organizing`, `advisory`, or `founding`) at the top of `src/pages/committee.astro`.

### Add a past edition to the archive
Create a new JSON file in `src/content/archive/` following this structure:

```json
{
  "edition": 9,
  "year": 2028,
  "location": "City, Country",
  "dates": "25–26 July 2028",
  "summary": "Brief description of the edition.",
  "website": "https://...",
  "programPdf": "/files/agenda-9th-fcws-2028.pdf",
  "photoGallery": ["/images/archive/2028/photo1.jpg"],
  "dataLinks": [{ "url": "https://...", "label": "Dataset" }]
}
```

### Update registration info
Edit `src/pages/registration.astro`. Fees, deadlines, and links are hardcoded in the page.

### Replace downloadable files
Drop new files in `public/files/` and update the `href` in the relevant page.
