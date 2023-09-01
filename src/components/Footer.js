import React from "react";
import "../CSS/Footer.css";
import footerBgPattern from "../assets/images/logos/felix-footer-pattern.webp";
import rightArrow from "../assets/images/icons/right-arrow.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-border ml-12 mr-12"></div>
      <div className="footer-container absolute flex justify-center h-96">
        <div className="footer-content absolute flex flex-col items-center justify-center">
          <div className="keep-in-touch text-center font-bold w-full mt-12">KEEP IN TOUCH</div>
          <div className="footer-description w-1/2 mt-1 text-center font-thin text-sm">
            Receive exclusive updates on things you’ll probably want to know about, including
            products, launches, and events.
          </div>
          <form className="footer-contact-form w-72 flex justify-between mt-12">
            <input type="email" placeholder="Email Address" className="w-full rounded mr-1" />
            <button className="submit-button w-12 flex justify-end ">
              <img src={rightArrow} alt="right arrow" className="filter-green" />
            </button>
          </form>
        </div>
        <div className="footer-pattern-image flex justify-center items-end">
          <img src={footerBgPattern} className="w-80" alt="felix footer pattern" />
        </div>
        <div className="copyright-message absolute pb-4 pl-2 bg-transparent bottom-0 left-0 w-full">
          © 2019 Copyright Felix Roasting Co.
        </div>
      </div>
    </>
  );
};

export default Footer;
