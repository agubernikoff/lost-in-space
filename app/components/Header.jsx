import { Link } from "@remix-run/react";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      initial={{ scale: 0.9, y: -50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ ease: "linear", duration: 0.5 }}
      className="header"
    >
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
    </motion.div>
  );
}

export default Header;
