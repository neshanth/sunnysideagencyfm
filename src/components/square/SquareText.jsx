import React from "react";
import "./squaretext.css";

function SquareText({ heading, body, learn, color }) {
  return (
    <div className="square-text-container">
      <h2 className="square-heading">{heading}</h2>
      <p className="square-body">{body}</p>
      <a
        href="#"
        className="square-learn"
        style={{ textDecorationColor: color }}
      >
        {learn}
      </a>
    </div>
  );
}

export default SquareText;
