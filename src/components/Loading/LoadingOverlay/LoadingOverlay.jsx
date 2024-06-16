import React from "react";
import "./LoadingOverlay.css";

function LoadingOverlay(props) {
  return (
    <div
      className={`overlay-loading-spinner ${props.show ? "show" : ""} z-[9999]`}
    >
      <div className="loading-spinner"></div>
    </div>
  );
}

export default LoadingOverlay;
