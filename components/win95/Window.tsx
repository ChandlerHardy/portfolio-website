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
      className={`winxp-window ${state.isMaximized ? "maximized" : ""}`}
      style={style}
      onMouseDown={() => dispatch({ type: "FOCUS", id: state.id })}
    >
      {/* Title Bar */}
      <div className="winxp-titlebar" onMouseDown={handleDragStart}>
        <span className="winxp-titlebar-icon">{state.icon}</span>
        <span className="winxp-titlebar-text">{state.title}</span>
        <div className="winxp-titlebar-buttons">
          <button
            className="winxp-titlebar-btn minimize"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "MINIMIZE", id: state.id });
            }}
            title="Minimize"
          >
            _
          </button>
          <button
            className="winxp-titlebar-btn maximize"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "MAXIMIZE", id: state.id });
            }}
            title={state.isMaximized ? "Restore" : "Maximize"}
          >
            □
          </button>
          <button
            className="winxp-titlebar-btn close"
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
        <div className="winxp-menubar">
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
        <div className="winxp-statusbar">
          <span className="winxp-statusbar-panel">{statusText}</span>
        </div>
      )}

      {/* Resize Handle */}
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
            backgroundImage: `radial-gradient(circle, #aca899 1.5px, transparent 1.5px)`,
            backgroundSize: "4px 4px",
            backgroundPosition: "2px 2px",
          }}
        />
      )}
    </div>
  );
}
