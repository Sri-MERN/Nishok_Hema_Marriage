# S. Nishok & R. Hemalatha — Wedding Reception Invitation

A cinematic luxury wedding invitation microsite. Scroll-based single-page experience with parallax, animations, and ambient music.

**Reception:** May 31, 2026 | Saligramam, Chennai

---

## Quick Start

```bash
npm install        # install dependencies
npm run dev        # start dev server at localhost:8080
npm run build      # production build → dist/
npm run preview    # preview production build
```

---

## How the Site Flows

The page is one continuous scroll. Each section fades in as you scroll:

| #   | Section       | File            | What it does                                                                    |
| --- | ------------- | --------------- | ------------------------------------------------------------------------------- |
| 1   | **Intro**     | `Intro.tsx`     | Full-screen overlay with "Open Invitation" button, monogram, floating particles |
| 2   | **Hero**      | `Hero.tsx`      | Cinematic parallax banner with couple names and portraits                       |
| 3   | **Countdown** | `Countdown.tsx` | Live timer counting down to the reception                                       |
| 4   | **Couple**    | `Couple.tsx`    | "Two Souls, One Destiny" — groom & bride portraits with details                 |
| 5   | **Story**     | `Story.tsx`     | 3-chapter love story timeline                                                   |
| 6   | **Events**    | `Events.tsx`    | Reception details with date, venue, map, Google Calendar link                   |
| 7   | **Family**    | `Family.tsx`    | Accordion cards for both families' blessings                                    |
| 8   | **RSVP**      | `RSVP.tsx`      | WhatsApp, Call, and Navigate buttons                                            |
| 9   | **Ending**    | `Ending.tsx`    | Closing quote, monogram, couple names, floating particles                       |

Between every section: a gold-divider with star motif (`Divider.tsx`)

---

## Key Files

```
src/
├── styles.css               # All colors, fonts, animations (shimmer, glass, particles)
├── components/wedding/      # Each section = one file
│   ├── Couple.tsx           # Groom (S. Nishok) & Bride (R. Hemalatha) portraits
│   ├── Hero.tsx             # Top banner
│   ├── Intro.tsx            # Entry overlay
│   ├── Ending.tsx           # Closing section
│   ├── Countdown.tsx        # Timer
│   ├── Story.tsx            # Love timeline
│   ├── Events.tsx           # Venue & date
│   ├── Family.tsx           # Family blessings
│   ├── Gallery.tsx          # Photo grid
│   ├── RSVP.tsx             # Action buttons
│   ├── Reveal.tsx           # Scroll animation wrapper
│   └── Ornament.tsx         # Decorative motif
├── assets/                  # Images + music.mp3
└── routes/index.tsx         # Page layout (order of sections)
```

---

## Customizing Content

**Couple names & details** — edit `Couple.tsx` (groom/name/company props)  
**Hero names** — edit `Hero.tsx`  
**Family member names** — edit `Family.tsx`  
**Event date/venue** — edit `Events.tsx`  
**Gallery photos** — replace files in `src/assets/` and update `Gallery.tsx`  
**Background music** — replace `src/assets/music.mp3`

---

## Tech Stack

React 19 · Vite 7 · TanStack Router · Tailwind CSS v4 · Framer Motion 12 · shadcn/ui · TypeScript

---

## Theme Colors

Maroon (bg) · Gold (accents) · Ivory (text) · Sandalwood (muted) — all defined in `styles.css`
