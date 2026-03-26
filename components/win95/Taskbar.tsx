"use client";

import { useState, useEffect } from "react";
import { WindowState, WindowAction } from "./types";
import StartMenu from "./StartMenu";

interface TaskbarProps {
  windows: WindowState[];
  dispatch: React.Dispatch<WindowAction>;
  onOpenWindow: (id: string) => void;
}

export default function Taskbar({ windows, dispatch, onOpenWindow }: TaskbarProps) {
  const [startOpen, setStartOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const openWindows = windows.filter((w) => w.isOpen && w.id !== "project-detail");

  return (
    <>
      {startOpen && (
        <>
          <div
            style={{ position: "fixed", inset: 0, zIndex: 9997 }}
            onClick={() => setStartOpen(false)}
          />
          <StartMenu
            onSelect={(id) => {
              setStartOpen(false);
              onOpenWindow(id);
            }}
          />
        </>
      )}

      <div className="winxp-taskbar">
        <button
          className={`winxp-start-btn ${startOpen ? "active" : ""}`}
          onClick={() => setStartOpen(!startOpen)}
        >
          <div className="winxp-start-logo" />
          start
        </button>

        <div className="winxp-taskbar-divider" />

        {openWindows.map((w) => (
          <button
            key={w.id}
            className={`winxp-taskbar-btn ${!w.isMinimized ? "active" : ""}`}
            onClick={() => {
              if (w.isMinimized) {
                dispatch({ type: "RESTORE", id: w.id });
              } else {
                dispatch({ type: "MINIMIZE", id: w.id });
              }
            }}
          >
            <span style={{ fontSize: 14 }}>{w.icon}</span>
            {w.title}
          </button>
        ))}

        <div className="winxp-systray">
          <span>🔊</span>
          <span>{time}</span>
        </div>
      </div>
    </>
  );
}
