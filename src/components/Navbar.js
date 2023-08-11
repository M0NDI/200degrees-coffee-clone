import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import companyLogo from "../assets/images/logos/felix-roasting-logo.webp";
import coffeeBagLogo from "../assets/images/logos/coffeeBagLogo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`flex justify-between items-center ${
        isScrolled ? "small-navbar" : "navbar"
      }`}
    >
      <div className={`${isScrolled ? "small-logo" : "company-logo"}`}>
        <a href="/">
          <img
            src={companyLogo}
            className="ml-20 box-border mt-2 mb-2"
            alt="company logo"
          />
        </a>
      </div>

      <ul className="nav-items flex items-center justify-between ml-auto mr-auto">
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
      </ul>

      <div className="user flex items-center mr-12">
        <Link to={"/account/login"} className="mr-6">LOG IN</Link>
        <img src={coffeeBagLogo} alt="coffee bag logo" className="h-7 mb-2" />
        <p className="ml-1 mb-1">{"(0)"}</p>
      </div>
    </nav>
  );
};

export default Navbar;
