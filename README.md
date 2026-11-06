# NLP Course Portfolio

A warm, static portfolio documenting one student's Natural Language Processing course journey: classroom questions, practical Jupyter notebooks, a case study, and a short about section.

The visual direction follows the project's own plan: a dusk-green and marigold palette, Fraunces display type, Montserrat body type, lilac hand-drawn accents, and a cutout portrait. The dark sample portfolio is used only as a reference for the breadth of sections.

## Run locally

    npm install
    npm run dev

Production build:

    npm run build
    npm run preview

## Add course content

### Profile

Edit src/data/profile.ts with the learner's actual name, institution, bio, and any public contact links. The page intentionally does not invent personal details.

Replace public/hero-cutout.png with the approved transparent portrait (keep the same filename), or update the image path in src/components/Hero.tsx.

### Classroom questions

Add entries to src/data/qa.json using this structure:

    [
      {
        "date": "2026-09-14",
        "topic": "TF-IDF",
        "question": "Why does TF-IDF down-weight common words?",
        "answer": "Add the student's own explanation here.",
        "stars": 2
      }
    ]

The question, star, topic, and weekly activity summaries are calculated from this file. There is no visitor submission form.

### Jupyter notebooks

1. Place original .ipynb files in content/notebooks/raw/.
2. Run:

       python scripts/convert_notebooks.py

3. The converter writes summaries to src/data/notebooks.ts, readable cell data to public/notebooks/, extracts PNG outputs, and copies each original notebook for download.
4. Run npm run build after conversion.

The converter uses only the Python standard library. Interactive widgets are not reproduced; text and image outputs are preserved where possible.

### Case study

Place the final PDF at public/case-study.pdf and update src/data/case-study.json with its actual title, short summary, and page count.

The page checks whether the PDF exists. When it does, the embedded reader, download, and full-screen links appear.

### About and contact

Edit src/data/profile.ts. Only non-empty email, GitHub, LinkedIn, and resume fields are displayed.

## Project structure

    content/notebooks/raw/       Original .ipynb source files
    scripts/convert_notebooks.py Notebook conversion script
    public/hero-cutout.png       Portrait used in the hero
    public/case-study.pdf        Add the approved case-study PDF
    public/notebooks/            Generated notebook JSON, outputs, downloads
    src/components/              Page sections and reusable UI
    src/data/                    Profile, Q&A, and notebook metadata
    src/lib/stats.ts             Derived portfolio metrics
    src/types/                   Shared TypeScript data types
    src/index.css                Design system and responsive styles

## Design and behaviour

- Static site; no backend, database, visitor uploads, or public data-entry forms.
- Responsive navigation and layouts, including 320px-wide screens.
- Keyboard-visible focus states and reduced-motion support.
- Question counters and topic breakdowns are derived from the Q&A data.
- Notebook pages are generated from original Jupyter files and retain original downloads.
- The case-study section embeds the PDF when the file is present.
- Vercel can deploy with build command npm run build and output directory dist.

## Current content status

The code includes honest empty states. Add the real profile, question entries, notebooks, and case-study PDF before presenting the portfolio as complete. Do not leave sample or placeholder achievements in the published version.
