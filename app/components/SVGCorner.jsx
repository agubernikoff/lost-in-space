import React from "react";

function SVGCorner() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* top left */}
      <rect x="0" y="0" width="100" height="10" fill="black" />
      <rect x="0" y="0" width="10" height="100" fill="black" />
    </svg>
  );
}

export default SVGCorner;
