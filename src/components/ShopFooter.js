import React from "react";
import shopFooterImage from "../assets/images/logos/shop-footer.webp";
import "../CSS/ShopFooter.css"

const ShopFooter = () => {
  return (
    <div className="shop-footer mb-24">
        <img src={shopFooterImage} className="w-full h-full object-cover" alt="shop footer" />
    </div>
  );
};

export default ShopFooter;
