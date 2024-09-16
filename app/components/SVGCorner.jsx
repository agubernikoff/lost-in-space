import React from "react";

function SVGCorner({ hidden }) {
  return (
    // <svg
    //   width="100"
    //   height="100"
    //   viewBox="0 0 100 100"
    //   preserveAspectRatio="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   style={{ display: hidden ? "none" : "block" }}
    // >
    //   {/* top left */}
    //   <rect x="0" y="0" width="100" height="10" fill="black" />
    //   <rect x="0" y="0" width="10" height="100" fill="black" />
    // </svg>
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      // preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: hidden ? "none" : "block" }}
    >
      <path d="M0 0V60H12.4709V12.5606H60V0H0Z" fill="#151515" />
    </svg>
  );
}

export default SVGCorner;
