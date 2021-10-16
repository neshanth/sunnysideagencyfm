import React from "react";
import "./squareimagetext.css";

function SquareImageWithText({ backgroundImage, heading, body, color }) {
  return (
    <div
      className="square-image-text"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="square-image-text-heading" style={{ color: color }}>
        {heading}
      </h2>

      <p className="square-image-text-body" style={{ color: color }}>
        {body}
      </p>
    </div>
  );
}

export default SquareImageWithText;
