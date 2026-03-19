"use client";

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
}

export default function DesktopIcon({ icon, label, onDoubleClick }: DesktopIconProps) {
  return (
    <div
      className="win95-icon"
      onDoubleClick={onDoubleClick}
      onClick={() => {
        // Single tap on mobile
        if ("ontouchstart" in window) {
          onDoubleClick();
        }
      }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onDoubleClick();
      }}
    >
      <div className="win95-icon-image">{icon}</div>
      <span className="win95-icon-label">{label}</span>
    </div>
  );
}
