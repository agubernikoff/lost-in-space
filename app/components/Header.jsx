import { Link } from "@remix-run/react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StaticLogo from "./StaticLogo";

function Header() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:44em)");
    mediaQuery.addEventListener("change", (e) => setIsMobile(e.matches));
    if (mediaQuery.matches) setIsMobile(true);

    return () => mediaQuery.removeEventListener("change", () => {});
  }, []);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.9, y: -50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ ease: "linear", duration: 0.5 }}
      className="header"
    >
      {isMobile ? (
        <>
          <div className="header-left-and-right">
            <Link to="/" className="logo-link">
              <StaticLogo />
            </Link>
            <button className="hamburger" onClick={toggleMenu}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {menuOpen && (
            <div className="menu">
              <nav>
                <ul>
                  <li>
                    <span>01</span> <Link to="/">Homepage</Link>
                  </li>
                  <li>
                    <span>02</span> <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <span>03</span> <Link to="/about">About</Link>
                  </li>
                  <li>
                    <span>04</span> <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <span>05</span> <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="bottom-time">
                <div className="time">{time}</div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="header-left-and-right">
            <Link to="/" className="logo-link">
              <StaticLogo />
            </Link>
          </div>
          <div id="time">{time}</div>
          <div className="header-left-and-right header-right">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Header;
