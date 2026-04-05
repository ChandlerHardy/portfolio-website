"use client";

import WinXpDialog, { winXpButtonStyle } from "../../components/WinXpDialog";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <WinXpDialog
      title="Error"
      icon="❌"
      message="Something went wrong"
      detail="An unexpected error occurred."
    >
      <button onClick={reset} style={winXpButtonStyle}>
        Retry
      </button>
      <a href="/" style={winXpButtonStyle}>
        OK
      </a>
    </WinXpDialog>
  );
}
