import React from "react";
import "./squareimage.css";

function SquareImage({ image, order }) {
  return (
    <div style={{ order: order }}>
      <img className="square-image" src={image} alt="" srcset="" />
    </div>
  );
}

export default SquareImage;
