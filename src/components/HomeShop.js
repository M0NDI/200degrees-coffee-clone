import React from "react";
import "../CSS/HomeShop.css";
import product1 from "../assets/images/photos/products/home-page/product1.webp";
import product1Hover from "../assets/images/photos/products/home-page/product1-hover.webp";
import product2 from "../assets/images/photos/products/home-page/product2.webp";
import product3 from "../assets/images/photos/products/home-page/product3.webp";
import product4 from "../assets/images/photos/products/home-page/product4.webp";
import product5 from "../assets/images/photos/products/home-page/product5.webp";
import product6 from "../assets/images/photos/products/home-page/product6.webp";
import product7 from "../assets/images/photos/products/home-page/product7.webp";
import product7Hover from "../assets/images/photos/products/home-page/product7-hover.webp";
import product8 from "../assets/images/photos/products/home-page/product8.webp";
import product9 from "../assets/images/photos/products/home-page/product9.webp";

const HomeShop = () => {
  return (
    <div className="products-container w-full h-full ">
      <div className="products w-full h-full flex flex-wrap justify-center pt-12 pr-40 pl-40 outline-8 outline-red-900">
        <div className="product-image w-96 w-3/12">
          <img
            src={product1}
            alt="felix roasting product"
            className="product min-w-full "
          />
        </div>
        <div class="product-image w-96 w-3/12">
          <img
            src={product2}
            alt="felix roasting"
            className="product w-96 min-w-full"
          />
        </div>
        <div class="product-image w-96 w-3/12">
          <img
            src={product3}
            alt="felix roasting"
            className="product min-w-full"
          />
        </div>
        <div class="product-image w-96 w-3/12">
          <img
            src={product4}
            alt="felix roasting"
            className="product min-w-full"
          />
        </div>
        <div class="product-image w-96 w-3/12">
          <img
            src={product5}
            alt="felix roasting"
            className="product min-w-full"
          />
        </div>
        <div class="product-image w-96 w-3/12">
          <img
            src={product6}
            alt="felix roasting"
            className="product min-w-full"
          />
        </div>
        <div class="product-image w-96 w-3/12">
          <img
            src={product7}
            alt="felix roasting"
            className="product min-w-full"
          />
        </div>
        <div class="product-image w-96 w-3/12">
          <img
            src={product8}
            alt="felix roasting"
            className="product min-w-full"
          />
        </div>
        <div class="product-image w-96 w-3/12">
          <img
            src={product9}
            alt="felix roasting"
            className="product min-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeShop;
