import React from "react";
import StaticLogo from "./StaticLogo";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      {/* <hr className="footer-divider" />
      <div className="footer-header">
        <div className="footer-header-item">END-TO-END</div>
        <div className="footer-header-item">PRODUCTION & POST-PRODUCTION</div>
        <div className="footer-header-item">STUDIO</div>
      </div> */}
      <hr className="footer-divider" />
      <div className="footer-main">
        <div className="footer-left">
          <p>COMPANY</p>
          <p>
            Lost in Space is a boutique production and post-production studio
            dedicated to bringing creative visions to life. We offer end-to-end
            services for filmmakers and independent creators, ensuring every
            project reaches its full potential.
          </p>
          <div className="footer-logo">
            <StaticLogo />
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-nav">
            <p>NAVIGATION</p>
            <ul>
              <li>
                <a href="/">Index</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-follow">
            <p>FOLLOW US</p>
            <ul>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <button onClick={scrollToTop} className="back-to-top">
            BACK TO TOP
          </button>
        </div>
        <div className="footer-bottom-center">2024 © ALL RIGHTS RESERVED</div>
        <div className="footer-bottom-right">
          <a href="/privacy-policy">PRIVACY POLICY</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
