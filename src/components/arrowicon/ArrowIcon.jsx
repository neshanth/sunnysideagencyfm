import React from "react";
import arrow from "../../images/icon-arrow-down.svg";
import "./arrowicon.css";

function ArrowIcon() {
  return (
    <div className="arrow-icon">
      <img className="arrow-icon-svg" src={arrow} alt="arrow-icon" />
    </div>
  );
}

export default ArrowIcon;
