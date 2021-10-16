import React from "react";
import "./gallery.css";

function Gallery({ gallery }) {
  return (
    <img
      className="gallery-image"
      key={gallery.id}
      src={gallery.imageUrl}
      width="250px"
    />
  );
}

export default Gallery;
