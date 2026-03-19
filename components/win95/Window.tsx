"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import { WindowState, WindowAction } from "./types";

interface WindowProps {
  state: WindowState;
  dispatch: React.Dispatch<WindowAction>;
  children: React.ReactNode;
  menuItems?: string[];
  statusText?: string;
}

export default function Window({
  state,
  dispatch,
  children,
  menuItems = ["File", "Edit", "View", "Help"],
  statusText,
}: WindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile || state.isMaximized) return;
      e.preventDefault();
      dispatch({ type: "FOCUS", id: state.id });
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        originX: state.position.x,
        originY: state.position.y,
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!dragRef.current) return;
        const dx = e.clientX - dragRef.current.startX;
        const dy = e.clientY - dragRef.current.startY;
        dispatch({
          type: "MOVE",
          id: state.id,
          position: {
            x: dragRef.current.originX + dx,
            y: dragRef.current.originY + dy,
          },
        });
      };

      const handleMouseUp = () => {
        dragRef.current = null;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [dispatch, state.id, state.position, state.isMaximized, isMobile]
  );

  if (!state.isOpen || state.isMinimized) return null;

  const style: React.CSSProperties = isMobile || state.isMaximized
    ? {}
    : {
        left: state.position.x,
        top: state.position.y,
        width: state.size.width,
        height: state.size.height,
        zIndex: state.zIndex,
      };

  return (
    <div
      ref={windowRef}
      className={`win95-window ${state.isMaximized ? "maximized" : ""}`}
      style={style}
      onMouseDown={() => dispatch({ type: "FOCUS", id: state.id })}
    >
      {/* Title Bar */}
      <div className="win95-titlebar" onMouseDown={handleMouseDown}>
        <span className="win95-titlebar-icon">{state.icon}</span>
        <span className="win95-titlebar-text">{state.title}</span>
        <div className="win95-titlebar-buttons">
          <button
            className="win95-titlebar-btn"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "MINIMIZE", id: state.id });
            }}
            title="Minimize"
          >
            _
          </button>
          <button
            className="win95-titlebar-btn"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "MAXIMIZE", id: state.id });
            }}
            title={state.isMaximized ? "Restore" : "Maximize"}
          >
            □
          </button>
          <button
            className="win95-titlebar-btn"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "CLOSE", id: state.id });
            }}
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="win95-menubar">
        {menuItems.map((item) => (
          <span key={item}>
            <u>{item[0]}</u>
            {item.slice(1)}
          </span>
        ))}
      </div>

      {/* Content */}
      {children}

      {/* Status Bar */}
      {statusText && (
        <div className="win95-statusbar">
          <span className="win95-statusbar-panel">{statusText}</span>
        </div>
      )}
    </div>
  );
}
