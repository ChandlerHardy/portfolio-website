"use client";

import { useReducer, useCallback, useState, useEffect } from "react";
import { windowReducer, INITIAL_WINDOWS, DESKTOP_ICONS } from "./types";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import Taskbar from "./Taskbar";
import WelcomeDialog from "./WelcomeDialog";
import ProjectsWindow from "../windows/ProjectsWindow";
import AboutWindow from "../windows/AboutWindow";
import TerminalWindow from "../windows/TerminalWindow";
import ContactWindow from "../windows/ContactWindow";
import RecycleBinWindow from "../windows/RecycleBinWindow";
import ProjectDetailWindow from "../windows/ProjectDetailWindow";

const RIGHT_ICONS = [
  { id: "github", title: "GitHub", icon: "🐙", href: "https://github.com/ChandlerHardy" },
  { id: "linkedin", title: "LinkedIn", icon: "💼", href: "https://www.linkedin.com/in/chandler-hardy-80808112b/" },
];

export default function Desktop() {
  const [windows, dispatch] = useReducer(windowReducer, INITIAL_WINDOWS);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  // Auto-open Projects.exe after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "OPEN", id: "projects" });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWindow = useCallback(
    (id: string) => {
      if (id === "resume") {
        const link = document.createElement("a");
        link.href = "/Chandler_Hardy_Resume2025.pdf";
        link.download = "Chandler_Hardy_Resume.pdf";
        link.click();
        return;
      }
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

  const getWindowState = (id: string) => windows.find((w) => w.id === id)!;

  return (
    <div className="win95-desktop">
      {/* Desktop wallpaper pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Left Desktop Icons */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          display: "flex",
          flexDirection: "column",
          gap: 8,
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
          gap: 8,
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
        state={getWindowState("projects")}
        dispatch={dispatch}
        statusText="4 objects — Double-click a project to view details"
      >
        <div className="win95-content">
          <ProjectsWindow onOpenProject={handleOpenProject} />
        </div>
      </Window>

      <Window
        state={getWindowState("about")}
        dispatch={dispatch}
        menuItems={["File", "Edit", "Format", "View", "Help"]}
        statusText="Ln 1, Col 1"
      >
        <div className="win95-content" style={{ fontFamily: "'Courier New', monospace", fontSize: 13, padding: 8, lineHeight: 1.6 }}>
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
          className="win95-content"
          style={{ background: "#000", color: "#ccc", fontFamily: "'Courier New', monospace", fontSize: 12, padding: 10, lineHeight: 1.7 }}
        >
          <TerminalWindow />
        </div>
      </Window>

      <Window
        state={getWindowState("contact")}
        dispatch={dispatch}
        statusText="3 contacts"
      >
        <div className="win95-content" style={{ padding: 12 }}>
          <ContactWindow />
        </div>
      </Window>

      <Window
        state={getWindowState("recyclebin")}
        dispatch={dispatch}
        statusText="3 objects — 4.4 KB"
      >
        <div className="win95-content">
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
          <div className="win95-content" style={{ padding: 16 }}>
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

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        dispatch={dispatch}
        onOpenWindow={handleOpenWindow}
      />
    </div>
  );
}
