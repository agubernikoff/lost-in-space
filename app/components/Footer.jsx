import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-header">
        <div className="footer-header-item">END-TO-END</div>
        <div className="footer-header-item">PRODUCTION & POST-PRODUCTION</div>
        <div className="footer-header-item">STUDIO</div>
      </div>
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
        </div>
        <div className="footer-right">
          <div className="footer-nav">
            <p>NAVIGATION</p>
            <ul>
              <li>
                <a href="/index">INDEX</a>
              </li>
              <li>
                <a href="/services">SERVICES</a>
              </li>
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/team">TEAM</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
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
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TWITTER
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YOUTUBE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-logo">
        <img src="/" alt="logo" className="footer-logo-image" />
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a href="#top">BACK TO TOP</a>
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
