import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/Navbar.css";
import companyLogo from "../assets/images/logos/felix-roasting-logo.webp";
import coffeeBagLogo from "../assets/images/logos/coffeeBagLogo.svg";
import instagramLogo from "../assets/images/logos/instagram.svg";
import { handleScrollToTop } from "../utility/scrollUtil.js";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseDropdown = () => {
    setIsNavOpen(true);
  };

  return (
    <nav
      className={`flex items-center justify-evenly fixed w-full top-0 z-50 ${
        isScrolled ? "small-navbar" : "navbar"
      }`}
    >
      <div
        className="hamburger ml-6 absolute left-0 hover:cursor-pointer"
        onClick={handleToggleNav}
      >
        <span className="bar block"></span>
        <span className="bar block"></span>
        <span className="bar block"></span>
      </div>
      <NavLink to={"/"}>
        <div className={`z-50 flex justify-center ${isScrolled ? "small-logo" : "company-logo"}`}>
          <img
            src={companyLogo}
            className="box-border z-50 duration-300 ease-in-out"
            alt="company logo"
          />
        </div>
      </NavLink>

      <ul className={!isNavOpen ? "dropdown-nav" : "navbar-links"} onClick={handleScrollToTop}>
        <li className="nav-item">
          <NavLink to={"/collections/retail"} onClick={() => {handleCloseDropdown()}}>SHOP</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/pages/visit-us"} onClick={() => {handleCloseDropdown()}}>VISIT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/pages/about-us"} onClick={() => {handleCloseDropdown()}}>OUR STORY</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/pages/contact-us"} onClick={() => {handleCloseDropdown()}}>CONTACT</NavLink>
        </li>
        {!isNavOpen && (
          <div className="instagram-logo mt-6 pb-4">
            INSTAGRAM
            <NavLink to={"https://www.instagram.com/FELIXROASTINGCO/"}>
              <img src={instagramLogo} alt="instagram logo" />
            </NavLink>
          </div>
        )}
      </ul>

      <div className="user absolute right-0 flex justify-center items-center h-full p-2">
        <div className="user-login flex justify-center ">
          <NavLink to={"/account/login"} className="pr-4">
            LOG IN
          </NavLink>
        </div>
        <img src={coffeeBagLogo} alt="coffee bag logo" className="shopping-bag h-7 mb-2" />
        <p className="ml-1 mb-1 text-lg">{"(0)"}</p>
      </div>
    </nav>
  );
};

export default Navbar;