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
    <div className="products-container w-full h-full">
      <div className="products w-full h-full flex flex-wrap">
        <div className="product-image w-2/6 w-3/12 mb-4 mr-2">
          <img
            src={product1}
            alt="felix roasting product"
            className="product min-w-full "
          />
          <div class="product-details">
            <div className="product-name flex justify-center items-center flex-col pt-4">
              ROASTER'S CHOICE SUBSCRIPTION
            </div>
            <div className="product-price flex justify-center items-center">
              $19.00
            </div>
          </div>
        </div>
        <div class="product-image w-2/6 w-3/12 mb-4 mr-2">
          <img
            src={product2}
            alt="felix roasting"
            className="product min-w-full"
          />
          <div class="product-details">
            <div className="product-name flex justify-center items-center flex-col pt-4">
              FELIX ESPRESSO
            </div>
            <div className="product-price flex justify-center items-center">
              $22.00
            </div>
          </div>
        </div>
        <div class="product-image w-2/6 w-3/12 mb-4 mr-2">
          <img
            src={product3}
            alt="felix roasting"
            className="product min-w-full"
          />
          <div class="product-details">
            <div className="product-name flex justify-center items-center flex-col pt-4">
              COLOMBIA NARINO - MERY ARMERO
            </div>
            <div className="product-price flex justify-center items-center">
              $24.00
            </div>
          </div>
        </div>
        <div class="product-image w-2/6 w-3/12 mb-4 mr-2">
          <img
            src={product4}
            alt="felix roasting"
            className="product min-w-full"
          />
          <div class="product-details">
            <div className="product-name flex justify-center items-center flex-col pt-4">
              ETHIOPIA WASHED YIRGACHEFFE WORKA SAKARO
            </div>
            <div className="product-price flex justify-center items-center">
              $24.00
            </div>
          </div>
        </div>
        <div class="product-image w-2/6 w-3/12 mb-4 mr-2">
          <img
            src={product5}
            alt="felix roasting"
            className="product min-w-full"
          />
          <div class="product-details">
            <div className="product-name flex justify-center items-center flex-col pt-4">
              ETHIOPIA NATURAL SHANTAWENE
            </div>
            <div className="product-price flex justify-center items-center">
              $28.00
            </div>
          </div>
        </div>
        <div class="product-image w-2/6 w-3/12 mb-4 mr-2">
          <img
            src={product6}
            alt="felix roasting"
            className="product min-w-full"
          />
          <div class="product-details">
            <div className="product-name flex justify-center items-center flex-col pt-4">
              FELIX DECAF
            </div>
            <div className="product-price flex justify-center items-center">
              $24.00
            </div>
          </div>
        </div>
        <div class="product-image w-2/6 w-3/12 mb-4 mr-2">
          <img
            src={product7}
            alt="felix roasting"
            className="product min-w-full"
          />
          <div class="product-details">
            <div className="product-name flex justify-center items-center flex-col pt-4">
              CEREMONIAL MATCHA CANISTER
            </div>
            <div className="product-price flex justify-center items-center">
              $34.00
            </div>
          </div>
        </div>
        <div class="product-image w-2/6 w-3/12 mb-4 mr-2">
          <img
            src={product8}
            alt="felix roasting"
            className="product min-w-full"
          />
          <div class="product-details">
            <div className="product-name flex justify-center items-center flex-col pt-4">
              E-GIFT CARD (ONLINE ONLY)
            </div>
            <div className="product-price flex justify-center items-center">
              From $10.00
            </div>
          </div>
        </div>
        <div class="product-image w-2/6 w-3/12 mb-4 mr-2">
          <img
            src={product9}
            alt="felix roasting"
            className="product min-w-full"
          />
          <div class="product-details">
            <div className="product-name flex justify-center items-center flex-col pt-4">
              NESPRESSO COMPATIBLE PODS: FELIX ESPRESSO
            </div>
            <div className="product-price flex justify-center items-center">
              $15.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeShop;
