import React from "react";
import "../CSS/Navbar.css";
import searchIcon from "../assets/images/searchIcon.svg";
import briefcaseIcon from "../assets/images/briefcaseIcon.svg";
import profileIcon from "../assets/images/profileIcon.svg";
import companyLogo from "../assets/images/companyLogo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container h-full w-full flex flex-wrap">
      <nav className="navbar mb-8 fixed w-full h-20 outline flex justify-between items-center">
        <div className="company-logo ml-6">
          <a href="/">
            <img src={companyLogo} alt="company logo" className="h-10 min-h-10"/>
          </a>
        </div>
        <ul className="flex justify-end items-center font-extrabold text-xs h-full">
          <li className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/">SHOP</a>
          </li>
          <li className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/">BARISTA SCHOOLS</a>
          </li>
          <li className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/collections/coffee-subscriptions">SUBSCRIPTIONS</a>
          </li>
          <li className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/">WHOLESALE</a>
          </li>
          <li className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/">LOCATIONS</a>
          </li>
          <li className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/">OUR STORY</a>
          </li>
        </ul>
        <div className="account-icons flex items-center mr-6">
          <div className="w-8">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="h-5 cursor-pointer"
            />
          </div>
          <div className="w-8">
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="h-4 cursor-pointer"
            />
          </div>
          <div className="w-8">
            <img
              src={briefcaseIcon}
              alt="Briefcase Icon"
              className="h-4 cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
