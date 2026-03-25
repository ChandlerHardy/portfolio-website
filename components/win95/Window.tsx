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
  const dragRef = useRef<{
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);
  const resizeRef = useRef<{
    startX: number;
    startY: number;
    originW: number;
    originH: number;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Drag handler
  const handleDragStart = useCallback(
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
        dispatch({
          type: "MOVE",
          id: state.id,
          position: {
            x: dragRef.current.originX + (e.clientX - dragRef.current.startX),
            y: dragRef.current.originY + (e.clientY - dragRef.current.startY),
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

  // Resize handler
  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile || state.isMaximized) return;
      e.preventDefault();
      e.stopPropagation();
      dispatch({ type: "FOCUS", id: state.id });
      resizeRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        originW: state.size.width,
        originH: state.size.height,
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!resizeRef.current) return;
        dispatch({
          type: "RESIZE",
          id: state.id,
          size: {
            width: Math.max(
              280,
              resizeRef.current.originW + (e.clientX - resizeRef.current.startX)
            ),
            height: Math.max(
              200,
              resizeRef.current.originH + (e.clientY - resizeRef.current.startY)
            ),
          },
        });
      };

      const handleMouseUp = () => {
        resizeRef.current = null;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [dispatch, state.id, state.size, state.isMaximized, isMobile]
  );

  if (!state.isOpen || state.isMinimized) return null;

  const style: React.CSSProperties =
    isMobile || state.isMaximized
      ? { zIndex: state.zIndex }
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
      <div className="win95-titlebar" onMouseDown={handleDragStart}>
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
      {menuItems.length > 0 && (
        <div className="win95-menubar">
          {menuItems.map((item) => (
            <span key={item}>
              <u>{item[0]}</u>
              {item.slice(1)}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      {children}

      {/* Status Bar */}
      {statusText && (
        <div className="win95-statusbar">
          <span className="win95-statusbar-panel">{statusText}</span>
        </div>
      )}

      {/* Resize Handle (bottom-right corner) */}
      {!isMobile && !state.isMaximized && (
        <div
          onMouseDown={handleResizeStart}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 16,
            height: 16,
            cursor: "nwse-resize",
            zIndex: 10,
            // Win95-style diagonal grip lines
            backgroundImage: `linear-gradient(
              135deg,
              transparent 30%,
              #808080 30%,
              #808080 35%,
              transparent 35%,
              transparent 45%,
              #808080 45%,
              #808080 50%,
              transparent 50%,
              transparent 60%,
              #808080 60%,
              #808080 65%,
              transparent 65%,
              transparent 75%,
              #808080 75%,
              #808080 80%,
              transparent 80%
            )`,
          }}
        />
      )}
    </div>
  );
}
