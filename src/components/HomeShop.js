import React, { useState, useEffect } from "react";
import "../CSS/HomeShop.css";
import { Link } from "react-router-dom";

const HomeShop = ({ productDetails }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  useEffect(() => {
    // Add event listener to handle window resizing
    const handleResize = () => {
      // Update hoveredImage state to reset quick view on window resize
      setHoveredImage(null);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="products-container w-full h-full">
      <div className="product w-full flex justify-center flex-wrap mb-24 pl-20 pr-20 pt-2">
        {productDetails.map((product, index) => (
          <div
            key={index}
            className="product-image relative text-center flex flex-col items-center mb-16 w-2/6"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <img src={product.imagePath} alt={product.name} className="image flex w-full" />
            {hoveredImage === index && (
              <div className="quick-view absolute left-1/2 top-1/2 flex justify-center items-center text-sm z-2 font-extrabold hover:opacity-90 duration-100">
                QUICK VIEW
              </div>
            )}
            <h3 className="product-name mt-4">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeShop;
