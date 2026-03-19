"use client";

import { useState, useCallback } from "react";
import BootScreen from "../../components/win95/BootScreen";
import Desktop from "../../components/win95/Desktop";

export default function App() {
  const [booted, setBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  return (
    <>
      {!booted && <BootScreen onComplete={handleBootComplete} />}
      {booted && <Desktop />}
    </>
  );
}
