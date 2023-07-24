"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";
import { useGlobalContext } from "../GlobalStateContext";
import VisuallyHidden from "../VisuallyHidden";

function MuteButton() {
  const { soundEnabled, setSoundEnabled } = useGlobalContext();

  return (
    <button onClick={() => setSoundEnabled(!soundEnabled)}>
      {soundEnabled ? <Volume2 /> : <VolumeX />}
      <VisuallyHidden>
        {soundEnabled ? "Disable sound effects" : "Enable sound effects"}
      </VisuallyHidden>
    </button>
  );
}

export default MuteButton;
