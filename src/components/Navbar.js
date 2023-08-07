import React from "react";
import { useState } from "react";
import "../CSS/Navbar.css";
import searchIcon from "../assets/images/searchIcon.svg";
import briefcaseIcon from "../assets/images/briefcaseIcon.svg";
import profileIcon from "../assets/images/profileIcon.svg";
import companyLogo from "../assets/images/companyLogo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container h-full w-full flex flex-wrap">
      <nav className="navbar mb-8 fixed w-full h-20 outline flex justify-between items-center">
        {/* LOGO */}
        <div className="company-logo ml-6">
          <a href="/">
            <img
              src={companyLogo}
              alt="company logo"
              className="h-10 min-h-10"
            />
          </a>
        </div>

        {/* LINKS */}
        <ul className="flex flex-nowrap justify-end items-center font-extrabold text-s h-full">
          <a href="/" className="hover:underline">
            SHOP
          </a>
          <ul className="absolute p-5 h-82 w-15 hover:cursor-pointer flex outline flex-col text-left mt-80 left-36">
            <li>Coffee Pods</li>
            <li>Coffee Pod Subscriptions</li>
            <li>Coffee Beans</li>
            <li>Coffee Subscriptions</li>
            <li>Home Brew Kit</li>
            <li>Home Coffee Machines</li>
            <li>Commercial Espresso Machines</li>
            <li>Merchandise</li>
          </ul>
          <ul className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/">BARISTA SCHOOLS</a>
          </ul>
          <ul className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/collections/coffee-subscriptions">SUBSCRIPTIONS</a>
          </ul>
          <ul className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/">WHOLESALE</a>
          </ul>
          <ul className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/">LOCATIONS</a>
          </ul>
          <ul className="p-5 hover:underline h-full w-15 hover:cursor-pointer flex items-center">
            <a href="/">OUR STORY</a>
          </ul>
        </ul>

        {/* ICONS */}
        <div className="account-icons flex justify-between items-center mr-6 w-32">
          <div className="w-8">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="h-5 cursor-pointer mr-2"
            />
          </div>
          <div className="w-8">
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="h-4 cursor-pointer mr-4"
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
