import React from "react";
import "../CSS/HomeShop.css";
import { Link } from "react-router-dom";
import {handleScrollToTop} from "../utility/scrollUtil";

// Shop child
const HomeShop = ({productDetails}) => {
  return (
    <div className="products-container w-full h-full">
      <div className="product flex justify-center flex-wrap w-full mb-24 pl-20 pr-20 pt-2">
        {productDetails.map((product, index) => (
          <div
            key={index}
            className="product-image relative text-center flex flex-col items-center w-2/6"
          >
            <Link to={`/products/${product.name}`} className="w-full">
              <img
                src={product.imagePath}
                alt={product.name}
                className="image flex w-full p-2"
                onClick={handleScrollToTop}
              />
            </Link>
            <h3 className="product-name mt-4">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeShop;
