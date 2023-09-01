import React from "react";
import Navbar from "./Navbar";
import MediaSideScroll from "./MediaSideScroll";
import HomeShop from "./HomeShop";
import { Link, NavLink } from "react-router-dom";
import "../CSS/Home.css";

const Home = ({ productDetails }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <Navbar />
      <MediaSideScroll />
      <HomeShop productDetails={productDetails} />
      <div className="shop-retail-button h-24 flex flex-col items-center">
        <NavLink to={"/collections/retail"} className="w-40 h-12 flex justify-center items-center font-bold" onClick={handleScrollToTop}>SHOP RETAIL</NavLink>
      </div>
    </div>
  );
};

export default Home;
