import { Link } from "@remix-run/react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StaticLogo from "./StaticLogo";

function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const easternTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      setTime(easternTime);
    };

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.9, y: -50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ ease: "linear", duration: 0.5 }}
      className="header"
    >
      <div className="header-left-and-right">
        <Link to="/" className="logo-link">
          <StaticLogo />
        </Link>
      </div>
      <div>{time}</div> {/* Clock */}
      <div className="header-left-and-right header-right">
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Space Mode</Link>
      </div>
    </motion.div>
  );
}

export default Header;
