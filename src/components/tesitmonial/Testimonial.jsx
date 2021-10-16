import React from "react";
import "./testimonial.css";

function Testimonial({ testimonial }) {
  return (
    <div className="individual-testimonial">
      <img
        className="author-image"
        src={testimonial.testimonialImage}
        alt="author"
      />
      <p className="testimonial">{testimonial.testimonial}</p>
      <p className="testimonial-author">{testimonial.author}</p>
      <p className="testimonial-job">{testimonial.job}</p>
    </div>
  );
}

export default Testimonial;
