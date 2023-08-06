import React from "react";
import "../CSS/Navbar.css";
import searchIcon from "../assets/images/searchIcon.svg";
import briefcaseIcon from "../assets/images/briefcaseIcon.svg";
import profileIcon from "../assets/images/profileIcon.svg";
import companyLogo from "../assets/images/companyLogo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar mb-8 fixed bg-zinc-100 w-full h-20">
        <ul className="flex justify-between items-center h-full font-extrabold text-xs">
          <div className="mr-20 min-w-12 ml-4">
            <img src={companyLogo} alt="company logo" />
          </div>
          <li className="ml-2 hover:underline">
            <a href="/">SHOP</a>
          </li>
          <li className="mr-2 hover:underline">
            <a href="/">BARISTA SCHOOLS</a>
          </li>
          <li className="mr-2 hover:underline">
            <a href="/">WHOLESALE</a>
          </li>
          <li className="mr-2 hover:underline">
            <a href="/">LOCATIONS</a>
          </li>
          <li className="mr-2 hover:underline">
            <a href="/">OUR STORY</a>
          </li>

          <div className="account-icons flex w-1/5 justify-between items-center ml-8">
            <div className="w-8">
              <img src={searchIcon} alt="Search Icon" />
            </div>
            <div className="w-8">
              <img src={briefcaseIcon} alt="Briefcase Icon" />
            </div>
            <div className="w-8">
              <img src={profileIcon} alt="BProfile Icon" />
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
