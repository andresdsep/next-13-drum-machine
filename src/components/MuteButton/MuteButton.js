import React from "react";
import { Volume2, VolumeX } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";

function MuteButton() {
  // TODO: Global state?
  const soundEnabled = true;

  return (
    <button
      onClick={() => {
        // TODO: flip `soundEnabled`
      }}
    >
      {soundEnabled ? <Volume2 /> : <VolumeX />}
      <VisuallyHidden>
        {soundEnabled ? "Disable sound effects" : "Enable sound effects"}
      </VisuallyHidden>
    </button>
  );
}

export default MuteButton;
