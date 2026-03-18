# Portfolio Design Direction

## Visual Concept

**Dark editorial** — high contrast, typography-forward, with a single distinctive accent color.
Not a template. Built to feel like it was made by someone who cares about craft.

Inspiration: Brittany Chiang (two-column sticky layout), Lee Robinson (editorial typography),
Paco Coursey (radical restraint), Sam Goddard (hover interactions with payoff).

---

## Color Palette

### Dark Mode (default)
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#09090b` (zinc-950) | Page background |
| `--color-surface` | `#18181b` (zinc-900) | Cards, elevated surfaces |
| `--color-border` | `#27272a` (zinc-800) | Dividers, card borders |
| `--color-text` | `#fafafa` | Primary body text |
| `--color-muted` | `#71717a` | Secondary text, labels |
| `--color-accent` | `#818cf8` (indigo-400) | Links, active states, highlights |

### Light Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#ffffff` | Page background |
| `--color-surface` | `#f4f4f5` (zinc-100) | Cards, elevated surfaces |
| `--color-border` | `#e4e4e7` (zinc-200) | Dividers, card borders |
| `--color-text` | `#09090b` | Primary body text |
| `--color-muted` | `#71717a` | Secondary text, labels |
| `--color-accent` | `#6366f1` (indigo-500) | Links, active states, highlights |

**Why indigo?** Not the overdone teal. Not blue. Indigo is distinctive, professional, and reads
as "thoughtful developer" rather than "grabbed a template."

---

## Typography

| Role | Font | Notes |
|------|------|-------|
| Headings | **Syne** | Geometric sans-serif with personality. Distinctive at large sizes. |
| Body | **Inter** | The reliable workhorse. Clean, legible, widely trusted. |
| Code/Labels | **JetBrains Mono** | Signals engineering identity. Used for tech tags, code. |

The serif/sans-serif distinction in Lee Robinson's approach inspired using a display font that
signals "this person made a deliberate choice" rather than defaulting to Inter everywhere.

---

## Layout

### Desktop (1024px+)
Two-column sticky layout:
- **Left column** (280px): Fixed/sticky. Contains name, tagline, navigation, social links, theme toggle.
  The left column stays in view while the right column scrolls.
- **Right column** (flex-1): Scrollable main content.

### Mobile (< 1024px)
Single column, full-width. Navigation collapses to top section.

### Content Width
Max-width: 1100px, centered with generous horizontal padding.

---

## Component Styles

### Navigation (left panel)
- Items are ALL CAPS with letter-spacing
- A decorative line grows from left on active state
- Color shifts from muted to accent on active
- Click scrolls to section (smooth)
- Active state updates as sections scroll into view via IntersectionObserver

### Project Cards
- No image thumbnails (text-first approach)
- Title, description, tech stack tags
- Hover: surface background lifts, left border accent appears
- Featured projects show impact metrics

### Tech Stack Tags
- Small, monospace font (JetBrains Mono)
- Subtle pill shape, surface background
- Accent color text

### Section Structure
- Section label: small, muted, monospace, ALL CAPS
- Section heading: large, Syne font
- Section number (01, 02...) as subtle background texture behind heading

---

## Interactions

### Cursor Glow (desktop only)
Radial gradient that follows cursor — illuminates the dark background subtly.
`radial-gradient(600px at {x}px {y}px, rgba(129,140,248,0.07), transparent 80%)`

### Active Section Highlight
IntersectionObserver on each section. When a section crosses 50% threshold, its nav item
activates. Smooth color transition.

### Hover on Project Cards
`translateX(4px)` + surface background + accent left border. Signals interactivity.

### Theme Toggle
Sun/Moon icon. Persisted to localStorage. Instant, no flash.

---

## Copy Philosophy

**Don't say:** "I'm a passionate developer who loves solving problems."
**Do say:** Specific numbers, real projects, things outside code.

- "4,000+ producers managing 40% of US cattle"
- "Self-taught. 51 merged PRs. Still learning."
- "Building [Elucidate Chess] because the engine says +2.3 but never explains why."

The copy should sound like a person wrote it, not a LinkedIn profile generator.

---

## Sections

1. **Hero (left panel)** — Name, title, 1-sentence tagline, nav, socials
2. **About** — 2-3 paragraphs. Origin story, what drives the work, current focus
3. **Experience** — Performance Beef with impact metrics front and center
4. **Projects** — Crooked Finger, Elucidate Chess, Ralph/GreenLine, Performance Beef
5. **Skills** — Grouped: Languages, Frontend, Backend, Infrastructure, AI/ML
6. **Contact** — Simple. Email link, GitHub, LinkedIn

---

## Inspiration Links

- https://brittanychiang.com — two-column sticky layout, cursor glow, section numbers
- https://leerob.com — editorial typography, content-first
- https://paco.me — radical minimalism, "Now" section concept
- https://antfu.me — inline project references, restraint
- Sam Goddard's portfolio — hover-to-reveal pattern
