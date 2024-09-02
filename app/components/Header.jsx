import { Link } from "@remix-run/react";
import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header-left-and-right">
        <Link to="/">*INSERT LOGO HERE*</Link>
      </div>
      <div>New York, UTC-4</div>
      <div className="header-left-and-right header-right">
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
