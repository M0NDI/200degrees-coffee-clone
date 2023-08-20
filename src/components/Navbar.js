import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import companyLogo from "../assets/images/logos/felix-roasting-logo.webp";
import coffeeBagLogo from "../assets/images/logos/coffeeBagLogo.svg";
import instagramLogo from "../assets/images/logos/instagram.svg";

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

  return (
    <nav
      className={`flex items-center justify-evenly fixed w-full top-0 z-50 duration-300 pl- ${
        isScrolled ? "small-navbar" : "navbar"
      }`}
    >
      <div className="hamburger ml-6 absolute left-0 hover:cursor-pointer" onClick={handleToggleNav}>
        <span className="bar block"></span>
        <span className="bar block"></span>
        <span className="bar block"></span>
      </div>

      <div className={`z-50 flex justify-center ${isScrolled ? "small-logo" : "company-logo"}`}>
        <a href="/">
          <img src={companyLogo} className="box-border z-50 duration-300 ease-in-out" alt="company logo" />
        </a>
      </div>

      <ul className={!isNavOpen ? "dropdown-nav" : "navbar-links"}>
        <li className="nav-item">
          <Link to={"/collections/retail"}>SHOP</Link>
        </li>
        <li className="nav-item">
          <Link to={"/pages/visit-us"}>VISIT</Link>
        </li>
        <li className="nav-item">
          <Link to={"/pages/about-us"}>OUR STORY</Link>
        </li>
        <li className="nav-item">
          <Link to={"/pages/wholesale"}>WHOLESALE INQUIRY</Link>
        </li>
        <li className="nav-item">
          <Link to={"/pages/contact-us"}>CONTACT</Link>
        </li>
        {!isNavOpen && (
          <div className="instagram-logo mt-6 pb-4">
            INSTAGRAM
            <Link to={"https://www.instagram.com/FELIXROASTINGCO/"}>
              <img src={instagramLogo} alt="instagram logo" />
            </Link>
          </div>
        )}
      </ul>

      <div className="user absolute right-0 flex justify-center items-center h-full p-2">
        <div className="user-login flex justify-center ">
          <Link to={"/account/login"} className="pr-4">
            LOG IN
          </Link>
        </div>
        <img src={coffeeBagLogo} alt="coffee bag logo" className="shopping-bag h-7 mb-2" />
        <p className="ml-1 mb-1">{"(0)"}</p>
      </div>
    </nav>
  );
};

export default Navbar;
