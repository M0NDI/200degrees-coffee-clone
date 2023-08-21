import React from "react";
import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import "../CSS/MediaSideScroll.css";
import photo1 from "../assets/images/photos/slide-photo1.webp";
import photo2 from "../assets/images/photos/slide-photo2.webp";
import photo3 from "../assets/images/photos/slide-photo3.webp";
import photo4 from "../assets/images/photos/slide-photo4.webp";
import photo5 from "../assets/images/photos/slide-photo5.webp";
import photo6 from "../assets/images/photos/slide-photo6.webp";

const MediaSideScroll = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <div className="media-scroller-container h-96">
      <div className="media-scroller" {...events} ref={ref}>
        {[photo1, photo2, photo3, photo4, photo5, photo6].map((photo, index) => (
          <div className="media-element" key={index}>
            <div className="image-container">
              <img
                src={photo}
                alt={`felix company shop ${index}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSideScroll;
