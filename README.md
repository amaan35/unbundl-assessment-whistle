# Whistle Landing Page

A responsive landing page for Whistle dental aligners, built as a React + Tailwind CSS assessment project.

## Setup

**Requirements:** Node.js 18+ and npm

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

Open the URL shown in the terminal after running `npm run dev` (typically `http://localhost:5173`).

## API Used

**[picsum.photos](https://picsum.photos)** — placeholder images for the **Results** and **Why Whistle?** sections. URLs are generated from each item’s `id` (e.g. `https://picsum.photos/seed/gaps-before/400/400`). Brand and layout assets (logo, hero image, product shot, etc.) are local files in `src/assets/` as they were part a single image component so it was preferred to keep the original images for them.

## Mock Data

Repetitive section content lives in local JSON files under `src/data/` and is imported directly into components:

| File | Used in |
|------|---------|
| `marquee.json` | Marquee |
| `results.json` | ResultsSection |
| `whyWhistle.json` | WhyWhistleSection |
| `whistleDifference.json` | WhistleDifferenceSection |
| `comparisonFeatures.json` | ComparisonSection |
| `smileSteps.json` | FourStepsSection |
| `faqs.json` | FaqSection |
| `footer.json` | Footer, Header |

One-off UI copy (hero headings, form labels, section titles where not repeated) stays in the components themselves.

## Approach

The page is built as a set of small, section focused React components with Tailwind CSS, no UI component library. Layout and spacing were tuned per breakpoint (mobile first, with extra handling for bigger screens specially for hero section). Interactive pieces (clinic locator expand/collapse, comparison table accordion, FAQ accordion) use local React state. Styling was implemented primarily with Tailwind CSS, with some additional custom styles defined in index.css.
