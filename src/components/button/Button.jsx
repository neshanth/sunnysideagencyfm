import React from "react";
import "./button.css";

function Button({ isDesktop }) {
  return (
    <a
      href="#"
      className={`btn btn-primary ${isDesktop ? "btn-secondary" : ""}`}
    >
      CONTACT
    </a>
  );
}

export default Button;
