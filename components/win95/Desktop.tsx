"use client";

import { useReducer, useCallback, useState, useEffect } from "react";
import { windowReducer, INITIAL_WINDOWS, DESKTOP_ICONS } from "./types";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import Taskbar from "./Taskbar";
import WelcomeDialog from "./WelcomeDialog";
import Clippy from "./Clippy";
import BlueScreen from "./BlueScreen";
import HomeWindow from "../windows/HomeWindow";
import ProjectsWindow from "../windows/ProjectsWindow";
import AboutWindow from "../windows/AboutWindow";
import TerminalWindow from "../windows/TerminalWindow";
import ContactWindow from "../windows/ContactWindow";
import RecycleBinWindow from "../windows/RecycleBinWindow";
import ResumeWindow from "../windows/ResumeWindow";
import GameWindow from "../windows/GameWindow";
import ProjectDetailWindow from "../windows/ProjectDetailWindow";

const RIGHT_ICONS = [
  { id: "github", title: "GitHub", icon: "🐙", href: "https://github.com/ChandlerHardy" },
  { id: "linkedin", title: "LinkedIn", icon: "💼", href: "https://www.linkedin.com/in/chandler-hardy-80808112b/" },
];

// Konami: ↑↑↓↓←→←→ba
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export default function Desktop() {
  const [windows, dispatch] = useReducer(windowReducer, INITIAL_WINDOWS);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showBSOD, setShowBSOD] = useState(false);
  const [konamiActive, setKonamiActive] = useState(false);
  const [konamiIdx, setKonamiIdx] = useState(0);

  // Auto-open README.txt after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "OPEN", id: "home" });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Konami code listener
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showBSOD) {
        setShowBSOD(false);
        return;
      }

      const expected = KONAMI[konamiIdx];
      if (e.key === expected || e.key.toLowerCase() === expected) {
        const next = konamiIdx + 1;
        if (next >= KONAMI.length) {
          setKonamiActive((prev) => !prev);
          setKonamiIdx(0);
        } else {
          setKonamiIdx(next);
        }
      } else {
        setKonamiIdx(0);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [konamiIdx, showBSOD]);

  const handleOpenWindow = useCallback(
    (id: string) => {
      dispatch({ type: "OPEN", id });
    },
    [dispatch]
  );

  const handleOpenProject = useCallback(
    (slug: string) => {
      setActiveProject(slug);
      dispatch({ type: "OPEN", id: "project-detail" });
    },
    [dispatch]
  );

  const handleCrash = useCallback(() => {
    setShowBSOD(true);
  }, []);

  const handleReboot = useCallback(() => {
    setShowBSOD(false);
  }, []);

  const getWindowState = (id: string) => windows.find((w) => w.id === id)!;

  // BSOD overlay
  if (showBSOD) {
    return <BlueScreen onReboot={handleReboot} />;
  }

  return (
    <div
      className="winxp-desktop"
      style={konamiActive ? {
        animation: "konami-party 0.5s infinite alternate",
      } : undefined}
    >
      {/* Konami mode overlay */}
      {konamiActive && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(45deg, rgba(255,0,0,0.1), rgba(0,255,0,0.1), rgba(0,0,255,0.1), rgba(255,255,0,0.1))",
            backgroundSize: "400% 400%",
            animation: "konami-gradient 2s ease infinite",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      {/* Left Desktop Icons */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          zIndex: 1,
        }}
      >
        {DESKTOP_ICONS.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            label={icon.title}
            onDoubleClick={() => handleOpenWindow(icon.id)}
          />
        ))}
      </div>

      {/* Right Desktop Icons */}
      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          zIndex: 1,
        }}
      >
        {RIGHT_ICONS.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            label={icon.title}
            onDoubleClick={() => window.open(icon.href, "_blank")}
          />
        ))}
      </div>

      {/* Welcome Dialog */}
      {showWelcome && (
        <WelcomeDialog onClose={() => setShowWelcome(false)} />
      )}

      {/* Windows */}
      <Window
        state={getWindowState("home")}
        dispatch={dispatch}
        menuItems={[]}
        statusText="Welcome to chandlerOS"
      >
        <div className="winxp-content" style={{ padding: 0 }}>
          <HomeWindow onOpenProject={handleOpenProject} onOpenWindow={handleOpenWindow} />
        </div>
      </Window>

      <Window
        state={getWindowState("projects")}
        dispatch={dispatch}
        statusText="4 objects — Double-click a project to view details"
      >
        <div className="winxp-content">
          <ProjectsWindow onOpenProject={handleOpenProject} />
        </div>
      </Window>

      <Window
        state={getWindowState("about")}
        dispatch={dispatch}
        menuItems={["File", "Edit", "Format", "View", "Help"]}
        statusText="Ln 1, Col 1"
      >
        <div className="winxp-content" style={{ fontFamily: "'Courier New', monospace", fontSize: 13, padding: 8, lineHeight: 1.6 }}>
          <AboutWindow />
        </div>
      </Window>

      <Window
        state={getWindowState("terminal")}
        dispatch={dispatch}
        menuItems={[]}
        statusText=""
      >
        <div
          className="winxp-content"
          style={{ background: "#000", color: "#ccc", fontFamily: "'Courier New', monospace", fontSize: 12, padding: 10, lineHeight: 1.7 }}
        >
          <TerminalWindow onCrash={handleCrash} />
        </div>
      </Window>

      <Window
        state={getWindowState("contact")}
        dispatch={dispatch}
        statusText="3 contacts"
      >
        <div className="winxp-content" style={{ padding: 12 }}>
          <ContactWindow />
        </div>
      </Window>

      <Window
        state={getWindowState("resume")}
        dispatch={dispatch}
        menuItems={["File", "View", "Help"]}
        statusText="Resume.pdf — Chandler Hardy"
      >
        <div className="winxp-content" style={{ padding: 0 }}>
          <ResumeWindow />
        </div>
      </Window>

      <Window
        state={getWindowState("game")}
        dispatch={dispatch}
        menuItems={[]}
        statusText="Click or Space to flap — Avoid the pipes!"
      >
        <div className="winxp-content" style={{ padding: 0, background: "#000" }}>
          <GameWindow />
        </div>
      </Window>

      <Window
        state={getWindowState("recyclebin")}
        dispatch={dispatch}
        statusText="4 objects — 7.6 KB"
      >
        <div className="winxp-content">
          <RecycleBinWindow />
        </div>
      </Window>

      {activeProject && (
        <Window
          state={{
            ...getWindowState("project-detail"),
            title: `${activeProject} — Details`,
          }}
          dispatch={dispatch}
          statusText="Viewing project details"
        >
          <div className="winxp-content" style={{ padding: 16 }}>
            <ProjectDetailWindow
              slug={activeProject}
              onBack={() => {
                dispatch({ type: "CLOSE", id: "project-detail" });
                setActiveProject(null);
              }}
            />
          </div>
        </Window>
      )}

      {/* Clippy */}
      <Clippy />

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        dispatch={dispatch}
        onOpenWindow={handleOpenWindow}
      />

      {/* Konami animation styles */}
      <style>{`
        @keyframes konami-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes konami-party {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(30deg); }
        }
      `}</style>
    </div>
  );
}
