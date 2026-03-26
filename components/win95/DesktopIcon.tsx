"use client";

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
}

export default function DesktopIcon({ icon, label, onDoubleClick }: DesktopIconProps) {
  return (
    <div
      className="winxp-icon"
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
      <div className="winxp-icon-image">{icon}</div>
      <span className="winxp-icon-label">{label}</span>
    </div>
  );
}
