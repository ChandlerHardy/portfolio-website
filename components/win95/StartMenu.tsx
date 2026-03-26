"use client";

import { DESKTOP_ICONS } from "./types";

interface StartMenuProps {
  onSelect: (id: string) => void;
  onClose: () => void;
}

export default function StartMenu({ onSelect }: StartMenuProps) {
  return (
    <div className="winxp-startmenu">
      <div className="winxp-startmenu-header">
        <div className="winxp-startmenu-avatar">👤</div>
        <span className="winxp-startmenu-username">Chandler Hardy</span>
      </div>
      <div className="winxp-startmenu-items">
        {DESKTOP_ICONS.map((icon) => (
          <button
            key={icon.id}
            className="winxp-startmenu-item"
            onClick={() => onSelect(icon.id)}
          >
            <span style={{ fontSize: 20 }}>{icon.icon}</span>
            <span>{icon.title}</span>
          </button>
        ))}
      </div>
      <div className="winxp-startmenu-footer">
        <div className="winxp-startmenu-divider" />
        <button
          className="winxp-startmenu-item"
          onClick={() => window.location.reload()}
        >
          <span style={{ fontSize: 20 }}>🔄</span>
          <span>Restart...</span>
        </button>
      </div>
    </div>
  );
}
