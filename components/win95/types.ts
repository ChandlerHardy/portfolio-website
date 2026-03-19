export interface WindowState {
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

export type WindowAction =
  | { type: "OPEN"; id: string }
  | { type: "CLOSE"; id: string }
  | { type: "MINIMIZE"; id: string }
  | { type: "MAXIMIZE"; id: string }
  | { type: "RESTORE"; id: string }
  | { type: "FOCUS"; id: string }
  | { type: "MOVE"; id: string; position: { x: number; y: number } };

export function windowReducer(
  state: WindowState[],
  action: WindowAction
): WindowState[] {
  const maxZ = Math.max(...state.map((w) => w.zIndex), 0);

  switch (action.type) {
    case "OPEN":
      return state.map((w) =>
        w.id === action.id
          ? { ...w, isOpen: true, isMinimized: false, zIndex: maxZ + 1 }
          : w
      );
    case "CLOSE":
      return state.map((w) =>
        w.id === action.id ? { ...w, isOpen: false, isMinimized: false, isMaximized: false } : w
      );
    case "MINIMIZE":
      return state.map((w) =>
        w.id === action.id ? { ...w, isMinimized: true } : w
      );
    case "MAXIMIZE":
      return state.map((w) =>
        w.id === action.id
          ? { ...w, isMaximized: !w.isMaximized, zIndex: maxZ + 1 }
          : w
      );
    case "RESTORE":
      return state.map((w) =>
        w.id === action.id
          ? { ...w, isMinimized: false, zIndex: maxZ + 1 }
          : w
      );
    case "FOCUS":
      return state.map((w) =>
        w.id === action.id ? { ...w, zIndex: maxZ + 1 } : w
      );
    case "MOVE":
      return state.map((w) =>
        w.id === action.id ? { ...w, position: action.position } : w
      );
    default:
      return state;
  }
}

export const DESKTOP_ICONS = [
  { id: "projects", title: "Projects.exe", icon: "📁" },
  { id: "about", title: "About.txt", icon: "📝" },
  { id: "terminal", title: "Terminal.exe", icon: "💻" },
  { id: "contact", title: "Contact.exe", icon: "✉️" },
  { id: "resume", title: "Resume.pdf", icon: "📄", isDownload: true },
  { id: "recyclebin", title: "Recycle Bin", icon: "🗑️" },
] as const;

export const INITIAL_WINDOWS: WindowState[] = [
  {
    id: "projects",
    title: "Projects.exe",
    icon: "📁",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 120, y: 40 },
    size: { width: 640, height: 420 },
    zIndex: 0,
  },
  {
    id: "about",
    title: "About.txt - Notepad",
    icon: "📝",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 160, y: 60 },
    size: { width: 560, height: 440 },
    zIndex: 0,
  },
  {
    id: "terminal",
    title: "Terminal.exe",
    icon: "💻",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 200, y: 30 },
    size: { width: 580, height: 380 },
    zIndex: 0,
  },
  {
    id: "contact",
    title: "Contact.exe",
    icon: "✉️",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 180, y: 80 },
    size: { width: 420, height: 340 },
    zIndex: 0,
  },
  {
    id: "recyclebin",
    title: "Recycle Bin",
    icon: "🗑️",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 240, y: 50 },
    size: { width: 460, height: 300 },
    zIndex: 0,
  },
  {
    id: "project-detail",
    title: "Project Details",
    icon: "📁",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 100, y: 20 },
    size: { width: 700, height: 500 },
    zIndex: 0,
  },
];
