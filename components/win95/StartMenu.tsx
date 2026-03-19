"use client";

import { DESKTOP_ICONS } from "./types";

interface StartMenuProps {
  onSelect: (id: string) => void;
  onClose: () => void;
}

export default function StartMenu({ onSelect }: StartMenuProps) {
  return (
    <div className="win95-startmenu">
      <div className="win95-startmenu-sidebar">
        <span className="win95-startmenu-sidebar-text">chandlerOS</span>
      </div>
      <div className="win95-startmenu-items">
        {DESKTOP_ICONS.map((icon) => (
          <button
            key={icon.id}
            className="win95-startmenu-item"
            onClick={() => onSelect(icon.id)}
          >
            <span style={{ fontSize: 18 }}>{icon.icon}</span>
            <span>{icon.title}</span>
          </button>
        ))}
        <div className="win95-startmenu-divider" />
        <button
          className="win95-startmenu-item"
          onClick={() => window.location.reload()}
        >
          <span style={{ fontSize: 18 }}>🔄</span>
          <span>Restart...</span>
        </button>
      </div>
    </div>
  );
}
