import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import companyLogo from "../assets/images/logos/felix-roasting-logo.webp";
import coffeeBagLogo from "../assets/images/logos/coffeeBagLogo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  // const handleCloseNav = () => {
  //   setIsNavOpen(true);
  // };

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
    <nav className={`${isScrolled ? "small-navbar" : "navbar"}`}>
      <div className="hamburger hover:cursor-pointer" onClick={handleToggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`${isScrolled ? "small-logo" : "company-logo"}`}>
        <a href="/">
          <img src={companyLogo} className="box-border z-50" alt="company logo" />
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
      </ul>

      <div className="user">
        <div className="user-login flex w-20 justify-center">
          <Link to={"/account/login"} className="">
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
