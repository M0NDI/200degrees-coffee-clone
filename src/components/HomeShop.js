import React from "react";
import { useState } from "react";
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

  return (
    <div className="products-container w-full h-full">
      <div className="products">
        <div className="product flex justify-center flex-wrap mb-24">
          {productDetails.map((product, index) => (
            <div
              key={index}
              className="product-image text-center flex flex-col items-center relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <img
                src={product.imagePath}
                alt={product.name}
                className="product flex"
              />
              {hoveredImage === index && (
                <div className="quick-view hover:opacity-90 absolute flex justify-center items-center duration-200 text-sm z-50 font-extrabold">
                  QUICK VIEW
                </div>
              )}
              <h3 className="product-name mt-4">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeShop;
