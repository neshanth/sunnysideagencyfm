import React from "react";
import hamburger from "../../images/hamburger.svg";
import "./hamburger.css";

function Hamburger({ toggleMobileMenu }) {
  return (
    <img
      className="hamburger-image"
      onClick={() => toggleMobileMenu()}
      src={hamburger}
      alt="hamburger"
    />
  );
}

export default Hamburger;
