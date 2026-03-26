# chandlerOS — Retro Win95 Desktop Portfolio Redesign

## Summary

Replace the current editorial dark portfolio with a Windows 95-style desktop operating system. Visitors interact with the portfolio by opening draggable windows, clicking desktop icons, and using a Start menu. The entire site is a single-page app that simulates a retro OS desktop.

## Tech Stack

- **Framework**: Next.js 15 (existing)
- **Styling**: Tailwind CSS + custom Win95 CSS (no external retro CSS libraries)
- **Animations**: Motion (Framer Motion) for boot sequence, window open/close
- **State**: React useState/useReducer for window management (positions, z-index, open/closed)
- **Mobile**: Responsive — icons become grid, windows become full-screen panels

## Boot Sequence (~1.5s total)

1. **BIOS screen** (0.8s) — black background, monospace text, appears line by line:
   ```
   chandlerOS BIOS v1.0
   CPU: OK
   Memory: 640K
   Loading chandlerOS...█
   ```
2. **Fade to desktop** (0.5s) — teal background with icons and taskbar appear

## Desktop

- **Background**: Classic Win95 teal (`#008080`)
- **Desktop icons**: Left column, vertically spaced. Each has a 32x32 pixel-style icon and label with white text + black text-shadow
- **Icons available**:
  - Projects.exe (folder icon)
  - About.txt (notepad/text icon)
  - Terminal.exe (black screen with green `>_`)
  - Contact.exe (envelope icon)
  - Resume.pdf (document icon with red "PDF")
  - Recycle Bin (trash icon — bottom of column)
- **Interaction**: Double-click (desktop) or single-tap (mobile) opens the corresponding window

## Window System

### Window Chrome (all windows share this)
- **Title bar**: Blue gradient (`#000080` → `#1084d0`), white bold text, window icon
- **Title bar buttons**: Minimize (`_`), Maximize (`□`), Close (`×`) — classic raised 3D borders
- **Menu bar**: File / Edit / View / Help (decorative, not functional)
- **Content area**: White background with inset border
- **Status bar**: Bottom bar with contextual info
- **Draggable**: Click and drag title bar to reposition (desktop only)
- **Z-index management**: Clicking a window brings it to front
- **3D borders**: Classic Win95 raised/sunken effect using `border-color: #fff #808080 #808080 #fff`
- **Drop shadow**: `4px 4px 0 rgba(0,0,0,0.3)` — hard pixel shadow

### Window: Projects.exe
- **Content**: 2x2 grid of project icons (emoji + colored background + project name)
- **Click a project**: Opens a detail window showing:
  - Project title, description, tags
  - Tech stack list
  - Key features
  - Links: Live site (if available), GitHub
  - Challenges and outcomes
- **Status bar**: "4 objects — Click a project to view details"

### Window: About.txt
- **Style**: Notepad clone — menu bar says "File Edit Format View Help"
- **Content**: Plain text bio with monospace font
  - Who I am (self-taught, 2 YOE, Birmingham AL)
  - What I do at Performance Beef (51 MRs, 4000+ users, 40% US cattle market)
  - What I build outside work (full-stack apps, autonomous pipelines, self-managed infra)
  - What I'm looking for (remote full-stack roles)
- **Status bar**: Word count or "Ln 1, Col 1"

### Window: Terminal.exe
- **Style**: Black background, green/white monospace text
- **Content**: Pre-filled terminal session showing:
  ```
  C:\chandler> whoami
  Chandler Hardy — Full-Stack Developer

  C:\chandler> dir skills\
  Next.js    React      TypeScript    Tailwind
  FastAPI    Go         GraphQL       PHP
  PostgreSQL MongoDB    Docker        OCI

  C:\chandler> stats
  Merged MRs:  51
  Active Users: 4,000+
  Market Share: 40% US cattle
  Projects:    4 shipped

  C:\chandler> █
  ```
- **Not interactive** — pre-rendered content styled as terminal output

### Window: Contact.exe
- **Style**: Simple form-like layout
- **Content**: List of contact methods with clickable links
  - Email: hardych04@gmail.com (mailto link)
  - GitHub: github.com/ChandlerHardy (external link)
  - LinkedIn: linkedin.com/in/chandler-hardy-80808112b/ (external link)
  - Location: Birmingham, AL

### Resume.pdf
- **Action**: Clicking the desktop icon directly triggers a file download (`/Chandler_Hardy_Resume2025.pdf`)
- **No window opens** — just downloads

### Recycle Bin (Easter Egg)
- **Content**: "Deleted" files list
  - ~~generic-portfolio-template.zip~~ (2.4 MB)
  - ~~floating-particles.js~~ (847 bytes)
  - ~~magnetic-hover-effect.tsx~~ (1.2 KB)
- **Status bar**: "3 objects — 4.4 KB"

## Taskbar

- **Position**: Fixed bottom of viewport
- **Height**: 32px
- **Background**: Win95 gray (`#c0c0c0`) with top white border
- **Start button**: Left side, raised 3D border, Windows logo (4-color square), "Start" text
- **Active windows**: Buttons for each open window — sunken border for active, raised for inactive
- **System tray**: Right side, sunken border, shows volume icon + current time (live clock)

## Start Menu

- **Trigger**: Click Start button
- **Style**: Classic Win95 — raised border, left blue sidebar with vertical "chandlerOS" text
- **Items**: Programs list matching desktop icons
- **Closes**: Click outside or click Start again

## Mobile Behavior

- **Breakpoint**: Below `md` (768px)
- **Desktop icons**: 2-column grid, centered, single-tap to open
- **Windows**: Open as full-screen panels (no drag, no resize)
- **Taskbar**: Fixed bottom, simplified — Start button + clock only
- **Start menu**: Slide-up drawer from bottom
- **No title bar drag** — windows have a back/close button instead

## Project Detail Pages (/projects/[slug])

Keep the existing route structure. Style the detail page as a maximized Win95 window:
- Full-screen window chrome (title bar, menu bar)
- Back button in the toolbar returns to desktop
- Content laid out inside the window's content area
- Same retro styling throughout

## Component Architecture

```
src/app/page.tsx          — Boot sequence + Desktop orchestrator
components/
  win95/
    Desktop.tsx           — Teal background + icon grid + window management
    Window.tsx            — Reusable draggable window component
    Taskbar.tsx           — Start button + window list + system tray
    StartMenu.tsx         — Start menu popup
    DesktopIcon.tsx       — Individual icon (image + label)
    TitleBar.tsx          — Window title bar with buttons
    BootScreen.tsx        — BIOS boot sequence animation
  windows/
    ProjectsWindow.tsx    — Projects.exe content
    ProjectDetailWindow.tsx — Single project detail content
    AboutWindow.tsx       — About.txt (Notepad style)
    TerminalWindow.tsx    — Terminal.exe content
    ContactWindow.tsx     — Contact.exe content
    RecycleBinWindow.tsx  — Recycle Bin easter egg
  win95.css               — All Win95 styling (borders, colors, chrome)
```

## State Management

```typescript
interface WindowState {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

// useReducer in Desktop.tsx manages all window state
// Actions: OPEN_WINDOW, CLOSE_WINDOW, MINIMIZE, MAXIMIZE, FOCUS, MOVE
```

## What's NOT Included

- No theme toggle (committed to retro aesthetic)
- No floating particles, magnetic hover, or typewriter effects
- No actual CLI interactivity in Terminal.exe (pre-rendered content)
- No sound effects
- No resizable windows (drag to move only)
- Menu bar items are decorative (no dropdown menus)
