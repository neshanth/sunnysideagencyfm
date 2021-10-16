import React from "react";
import "./footer.css";

function Footer({ menu, socialIcons }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">
          <strong>sunnyside</strong>
        </h2>
        <div className="footer-links">
          {menu.map((menuItem) => (
            <a key={menuItem.id} href="#">
              {menuItem.name}
            </a>
          ))}
        </div>
        <div className="social-icons">
          {socialIcons.map((icon) => (
            <a href="#">
              <img key={icon.id} src={icon.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
